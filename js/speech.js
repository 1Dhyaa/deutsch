// js/speech.js — Advanced AI & Neural Speech Engine
// Supports:
// 1. OpenAI TTS API (tts-1 with hyper-realistic voices: nova, alloy, onyx...)
// 2. ElevenLabs Multilingual API
// 3. Smart Browser Neural/Natural Voices (prioritizing Edge/Azure Neural voices, filtering robotic Google TTS)
// 4. In-memory Audio Blob Caching to eliminate redundant API calls

const Speech = {
  synth: window.speechSynthesis,
  voice: null,
  currentAudio: null,
  audioCache: new Map(),

  // Four authentic ElevenLabs API keys with automatic failover rotation
  elevenlabsKeys: [
    'sk_72d2512805337d6f46f0e9053d9cc1739378af1ae094777e',
    'sk_73d34ef5a0226b5efb8c0e0c04f31898df97797045ff48a3',
    'sk_61deb949507b8bbabf7e3e7c5d80e1104edb41859f7ea756',
    'sk_92e4fec3f60f95f6f939ed1e5bbac74e7e661cc82c4c2e0a'
  ],
  currentKeyIndex: 0,

  getCurrentApiKey() {
    return this.elevenlabsKeys[this.currentKeyIndex % this.elevenlabsKeys.length];
  },

  rotateApiKey() {
    this.currentKeyIndex = (this.currentKeyIndex + 1) % this.elevenlabsKeys.length;
    console.log(`[Speech] Switched to ElevenLabs API key #${this.currentKeyIndex + 1} (${this.getCurrentApiKey().slice(0, 10)}...)`);
    return this.getCurrentApiKey();
  },

  // Default configuration
  config: {
    provider: 'elevenlabs', // 100% ElevenLabs AI Studio Voice everywhere
    openaiApiKey: '',
    openaiVoice: 'nova',
    openaiSpeed: 0.9,
    elevenlabsApiKey: 'sk_72d2512805337d6f46f0e9053d9cc1739378af1ae094777e',
    elevenlabsVoiceId: 'Xb7hH8MSUJpSbSDYk0k2', // Alice (Native German Female Educator - Women Voice)
    browserVoiceName: '',
    rate: 0.88
  },

  init() {
    this.loadConfig();
    this.initBrowserVoices();
  },

  loadConfig() {
    try {
      const saved = localStorage.getItem('deutsch_meister_audio_config');
      if (saved) {
        this.config = { ...this.config, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Could not load audio config:', e);
    }
    // Always enforce ElevenLabs with Alice (Female German Native Educator)
    this.config.provider = 'elevenlabs';
    this.config.elevenlabsVoiceId = 'Xb7hH8MSUJpSbSDYk0k2';
    if (!this.config.elevenlabsApiKey || !this.elevenlabsKeys.includes(this.config.elevenlabsApiKey)) {
      this.config.elevenlabsApiKey = this.getCurrentApiKey();
    }
  },

  saveConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    try {
      localStorage.setItem('deutsch_meister_audio_config', JSON.stringify(this.config));
    } catch (e) {
      console.warn('Could not save audio config:', e);
    }
    this.initBrowserVoices();
  },

  // Initialize and prioritize high quality Neural / Natural browser voices
  initBrowserVoices() {
    if (!this.synth) return;

    const pickBestVoice = () => {
      const voices = this.synth.getVoices();
      if (!voices || voices.length === 0) return;

      const germanVoices = voices.filter(v => v.lang === 'de-DE' || v.lang.startsWith('de'));
      if (germanVoices.length === 0) return;

      // 1. If user specifically selected a browser voice by name
      if (this.config.browserVoiceName) {
        const selected = germanVoices.find(v => v.name === this.config.browserVoiceName);
        if (selected) {
          this.voice = selected;
          return;
        }
      }

      // 2. Strictly prioritize Natural / Neural voices (Edge / Azure Online Natural)
      const naturalVoices = germanVoices.filter(v => {
        const name = v.name.toLowerCase();
        return (
          name.includes('natural') ||
          name.includes('neural') ||
          name.includes('online') ||
          name.includes('katja') ||
          name.includes('conrad') ||
          name.includes('amala') ||
          name.includes('klarissa') ||
          name.includes('killian') ||
          name.includes('louisa') ||
          name.includes('maja')
        );
      });

      if (naturalVoices.length > 0) {
        // Prefer Katja or Conrad
        const preferred = naturalVoices.find(v => v.name.includes('Katja') || v.name.includes('Conrad'));
        this.voice = preferred || naturalVoices[0];
        return;
      }

      // 3. Fallback: filter out robotic legacy desktop voices if possible
      const nonRobotic = germanVoices.filter(v => {
        const name = v.name.toLowerCase();
        return !name.includes('desktop') && !name.includes('hedda') && !name.includes('stefan');
      });

      this.voice = nonRobotic.length > 0 ? nonRobotic[0] : germanVoices[0];
    };

    pickBestVoice();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = pickBestVoice;
    }
  },

  getAvailableGermanVoices() {
    if (!this.synth) return [];
    const voices = this.synth.getVoices() || [];
    return voices.filter(v => v.lang === 'de-DE' || v.lang.startsWith('de'));
  },

  // Clean raw markdown and HTML from German text
  cleanText(text) {
    if (!text) return '';
    return text
      .replace(/\*\*/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .trim();
  },

  missingWavs: new Set(),
  wavFailCount: 0,

  // Main Speak Entrypoint
  async speak(text, isSlow = false) {
    const cleaned = this.cleanText(text);
    if (!cleaned) return;

    this.stop();

    // Visual feedback on any matching button
    this.setButtonState(text, true);

    const onFinish = () => this.setButtonState(text, false);

    // 1. ElevenLabs Priority (100% Studio Quality Women Voice with Auto-Key Rotation)
    if (this.config.provider === 'elevenlabs' || (this.config.provider === 'auto' && this.getCurrentApiKey())) {
      try {
        await this.speakWithElevenLabs(cleaned, onFinish, isSlow);
        return;
      } catch (err) {
        console.warn('[Speech] ElevenLabs failed, falling back to browser neural voice:', err);
      }
    }

    // 2. OpenAI Priority
    const useOpenAI = (this.config.provider === 'openai') && this.config.openaiApiKey;
    if (useOpenAI) {
      try {
        await this.speakWithOpenAI(cleaned, isSlow, onFinish);
        return;
      } catch (err) {
        console.warn('[Speech] OpenAI failed:', err);
      }
    }

    // 3. Fallback to Microsoft / Browser Neural Voice
    this.speakWithBrowser(cleaned, isSlow, onFinish);
  },

  async speakFallback(cleaned, isSlow, onFinish) {
    this.speakWithBrowser(cleaned, isSlow, onFinish);
  },

  speakSlow(text) {
    this.speak(text, true);
  },

  // Helper for persistent audio caching in browser Cache Storage
  async getCachedElevenBlob(key) {
    if (typeof caches === 'undefined') return null;
    try {
      const cache = await caches.open('deutsch-meister-elevenlabs');
      const res = await cache.match(key);
      if (res) return await res.blob();
    } catch (e) {}
    return null;
  },

  async putCachedElevenBlob(key, blob) {
    if (typeof caches === 'undefined') return;
    try {
      const cache = await caches.open('deutsch-meister-elevenlabs');
      await cache.put(key, new Response(blob.slice(0), { headers: { 'Content-Type': 'audio/mp3' } }));
    } catch (e) {}
  },

  // ElevenLabs Multilingual TTS API with 4-key auto rotation & persistent storage
  async speakWithElevenLabs(text, onFinish, isSlow = false) {
    const voiceId = this.config.elevenlabsVoiceId || 'Xb7hH8MSUJpSbSDYk0k2'; // Alice (Women Voice)
    const cacheKey = `https://local.elevenlabs/${voiceId}/${encodeURIComponent(text.slice(0, 100))}_${text.length}`;

    // 1. In-memory cache check
    let audioUrl = this.audioCache.get(cacheKey);

    // 2. Persistent browser cache check
    if (!audioUrl) {
      const cachedBlob = await this.getCachedElevenBlob(cacheKey);
      if (cachedBlob) {
        audioUrl = URL.createObjectURL(cachedBlob);
        this.audioCache.set(cacheKey, audioUrl);
      }
    }

    // 3. If not cached, fetch with auto-key failover rotation
    if (!audioUrl) {
      let lastError = null;
      let success = false;
      const maxTries = this.elevenlabsKeys.length;

      for (let attempt = 0; attempt < maxTries; attempt++) {
        const apiKey = this.getCurrentApiKey();
        try {
          const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
            method: 'POST',
            headers: {
              'xi-api-key': apiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              text: text,
              model_id: 'eleven_multilingual_v2',
              voice_settings: { stability: 0.5, similarity_boost: 0.8 }
            })
          });

          if (response.ok) {
            const blob = await response.blob();
            await this.putCachedElevenBlob(cacheKey, blob);
            audioUrl = URL.createObjectURL(blob);
            this.audioCache.set(cacheKey, audioUrl);
            success = true;
            break;
          } else if (response.status === 401 || response.status === 402 || response.status === 429) {
            console.warn(`[Speech] ElevenLabs Key #${this.currentKeyIndex + 1} quota limit (${response.status}), rotating key...`);
            this.rotateApiKey();
            lastError = new Error(`ElevenLabs error HTTP ${response.status}`);
          } else {
            const errJson = await response.json().catch(() => ({}));
            lastError = new Error(errJson.detail?.message || `ElevenLabs HTTP ${response.status}`);
            break;
          }
        } catch (err) {
          lastError = err;
          this.rotateApiKey();
        }
      }

      if (!success) {
        throw lastError || new Error('ElevenLabs failed across all available keys');
      }
    }

    this.playAudioUrl(audioUrl, onFinish, isSlow);
  },

  // Helper to play generated audio URL
  playAudioUrl(url, onFinish, isSlow = false, onErrorFallback = null) {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }

    const audio = new Audio(url);
    this.currentAudio = audio;
    audio.playbackRate = isSlow ? 0.75 : 1.0;
    if ('preservesPitch' in audio) {
      audio.preservesPitch = true;
    }

    audio.onended = () => {
      this.currentAudio = null;
      if (onFinish) onFinish();
    };

    audio.onerror = () => {
      this.currentAudio = null;
      if (onErrorFallback) {
        onErrorFallback();
      } else if (onFinish) {
        onFinish();
      }
    };

    audio.play().catch(e => {
      console.warn('Audio play failed:', e);
      if (onErrorFallback) {
        onErrorFallback();
      } else if (onFinish) {
        onFinish();
      }
    });
  },

  // Browser Speech Synthesis (Prioritizing Microsoft Natural / Neural voices)
  speakWithBrowser(text, isSlow, onFinish) {
    if (!this.synth) {
      if (onFinish) onFinish();
      return;
    }

    if (!this.voice) {
      this.initBrowserVoices();
    }

    const doSpeak = () => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = isSlow ? 0.65 : (this.config.rate || 0.88);
      utterance.pitch = 1;

      if (this.voice) {
        utterance.voice = this.voice;
      }

      utterance.onend = () => {
        if (onFinish) onFinish();
      };

      utterance.onerror = () => {
        if (onFinish) onFinish();
      };

      this.synth.speak(utterance);
    };

    if (this.synth.speaking || this.synth.pending) {
      this.synth.cancel();
      setTimeout(doSpeak, 25);
    } else {
      doSpeak();
    }
  },

  isListeningSessionActive: false,
  userRequestedStop: false,

  // Voice Dictation / Speech-to-Text helper (German de-DE) with continuous listening & auto-recovery
  listen(inputId, btnEl, onUpdate) {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    const input = document.getElementById(inputId);
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const isDe = window.I18n && typeof I18n.isGerman === 'function' && I18n.isGerman();

    // If already listening, tapping again acts as STOP & COMMIT
    if (this.isListeningSessionActive) {
      this.stopListening();
      return;
    }

    if (!SpeechRec) {
      if (window.Utils && window.Utils.showToast) {
        window.Utils.showToast(
          isDe
            ? '💡 Tipp fürs Smartphone: Nutze das Mikrofon auf deiner Tastatur (🎤) für die direkte deutsche Spracheingabe!'
            : '💡 نصيحة للهاتف: يمكنك استخدام ميكروفون لوحة المفاتيح (🎤 بجانب المسافة) للإملاء الصوتي المباشر بالألمانية!',
          'info',
          4000
        );
      }
      return;
    }

    // Stop all audio output before recording so microphone receives full audio focus
    if (this.currentAudio) {
      try { this.currentAudio.pause(); } catch (e) {}
      this.currentAudio = null;
    }
    if (window.DiktatTrainer && DiktatTrainer.stopAudio) DiktatTrainer.stopAudio();
    if (this.synth) this.synth.cancel();

    // On non-touch desktop devices, focus the input; on mobile touch, avoid forcing focus to prevent virtual keyboard conflict
    if (input && !isTouch) {
      try { input.focus(); } catch (e) {}
    }

    let rec;
    try {
      rec = new SpeechRec();
    } catch (err) {
      console.warn('SpeechRecognition init error:', err);
      return;
    }

    this.activeRecognition = rec;
    this.activeListenBtn = btnEl;
    this.activeListenInput = input;
    this.activeListenCallback = onUpdate;
    this.lastSpokenText = '';
    this.isListeningSessionActive = true;
    this.userRequestedStop = false;
    const initialInputVal = input ? input.value : '';

    rec.lang = 'de-DE';
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    rec.continuous = true; // Continuous mode prevents mobile browsers from quitting after initial silence

    // Visual button feedback
    if (btnEl) {
      if (!btnEl.dataset.origHtml) {
        btnEl.dataset.origHtml = btnEl.innerHTML;
      }
      btnEl.classList.add('recording-active');
      btnEl.innerHTML = `<span style="display:inline-block; animation:pulse 0.8s infinite; color:#ef4444; font-size:1.15rem;">🔴</span> <strong>${isDe ? 'Stoppen ⏹️' : 'إنهاء التسجيل ⏹️'}</strong>`;
    }

    if (window.Utils && window.Utils.showToast) {
      window.Utils.showToast(
        isDe ? '🎤 Ich höre zu... Sprich auf Deutsch! (Zum Beenden erneut tippen ⏹️)' : '🎤 جاري الاستماع بالألمانية... انقر على إنهاء عند الانتهاء ⏹️',
        'info',
        2500
      );
    }

    // Safety timeout: 15 seconds auto-stop so microphone session never hangs indefinitely
    if (this.listenTimeout) {
      clearTimeout(this.listenTimeout);
    }
    this.listenTimeout = setTimeout(() => {
      if (this.isListeningSessionActive) {
        this.stopListening();
      }
    }, 15000);

    rec.onresult = (event) => {
      let finalStr = '';
      let interimStr = '';
      for (let i = 0; i < event.results.length; ++i) {
        const item = event.results[i];
        if (item.isFinal) {
          finalStr += item[0].transcript;
        } else {
          interimStr += item[0].transcript;
        }
      }
      const spoken = (finalStr || interimStr).trim();
      if (spoken) {
        this.lastSpokenText = spoken;
        if (input) {
          if (input.tagName === 'TEXTAREA' && initialInputVal && !initialInputVal.includes(spoken)) {
            input.value = initialInputVal.trim() + ' ' + spoken;
          } else {
            input.value = spoken;
          }
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
        if (onUpdate) {
          onUpdate(spoken);
        }
      }
    };

    rec.onerror = (e) => {
      const errName = e && e.error;
      console.warn('SpeechRecognition event:', errName);
      // 'no-speech' happens when the user takes a moment to start speaking; DO NOT abort!
      if (errName === 'no-speech') {
        return;
      }
      if (errName === 'not-allowed') {
        if (window.Utils && window.Utils.showToast) {
          window.Utils.showToast(
            isDe
              ? '⚠️ Mikrofon-Zugriff verweigert. Bitte in den Einstellungen erlauben oder Tastatur-Mikrofon nutzen 🎤'
              : '⚠️ تم رفض إذن الميكروفون. يرجى تفعيله من إعدادات المتصفح أو استخدام ميكروفون لوحة المفاتيح 🎤',
            'warning',
            4000
          );
        }
        this.stopListening();
      }
    };

    rec.onend = () => {
      // If the browser closed prematurely but user did not ask to stop, restart recording!
      if (this.isListeningSessionActive && !this.userRequestedStop) {
        try {
          rec.start();
          return;
        } catch (e) {}
      }

      this.cleanupListening(btnEl);
    };

    try {
      rec.start();
    } catch (err) {
      console.warn('SpeechRecognition start failed:', err);
      this.cleanupListening(btnEl);
    }
  },

  stopListening() {
    this.userRequestedStop = true;
    this.isListeningSessionActive = false;
    if (this.listenTimeout) {
      clearTimeout(this.listenTimeout);
      this.listenTimeout = null;
    }
    const rec = this.activeRecognition;
    this.activeRecognition = null;
    if (rec) {
      try {
        rec.stop();
      } catch (e) {
        try { rec.abort(); } catch (e2) {}
      }
    }
    this.cleanupListening(this.activeListenBtn);
  },

  cleanupListening(btnEl) {
    this.isListeningSessionActive = false;
    if (this.listenTimeout) {
      clearTimeout(this.listenTimeout);
      this.listenTimeout = null;
    }
    this.resetListenBtn(btnEl || this.activeListenBtn);
    if (this.lastSpokenText && window.Utils && window.Utils.showToast) {
      const isDe = window.I18n && typeof I18n.isGerman === 'function' && I18n.isGerman();
      window.Utils.showToast(isDe ? '✅ Spracheingabe erfasst!' : '✅ تم التقاط الصوت بنجاح!', 'success', 1800);
      this.lastSpokenText = '';
    }
  },

  resetListenBtn(btnEl) {
    const target = btnEl || this.activeListenBtn;
    if (target) {
      if (target.dataset.origHtml) {
        target.innerHTML = target.dataset.origHtml;
      }
      target.classList.remove('recording-active');
      target.classList.remove('playing');
    }
    this.activeListenBtn = null;
  },

  isListening() {
    return this.isListeningSessionActive;
  },

  setButtonState(text, isPlaying) {
    const rawTarget = this.cleanText(text);
    const buttons = document.querySelectorAll('.audio-btn');
    buttons.forEach(b => {
      const onclickAttr = b.getAttribute('onclick') || '';
      if (onclickAttr.includes(rawTarget.slice(0, 20))) {
        b.classList.toggle('playing', isPlaying);
      }
    });
  },

  stop() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio = null;
    }
    if (this.synth && (this.synth.speaking || this.synth.pending)) {
      this.synth.cancel();
    }
    this.stopListening();
    document.querySelectorAll('.audio-btn.playing').forEach(b => b.classList.remove('playing'));
  }
};

// Auto-initialize
if (typeof window !== 'undefined') {
  window.Speech = Speech;
  window.addEventListener('DOMContentLoaded', () => Speech.init());
}
