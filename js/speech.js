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

  // Default configuration
  config: {
    provider: 'elevenlabs', // ElevenLabs AI Studio Voice
    openaiApiKey: '',
    openaiVoice: 'nova',
    openaiSpeed: 0.9,
    elevenlabsApiKey: '',
    elevenlabsVoiceId: 'Xb7hH8MSUJpSbSDYk0k2', // Alice - Engaging Educator
    browserVoiceName: '',
    rate: 0.85
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
      if (!this.config.elevenlabsVoiceId) {
        this.config.elevenlabsVoiceId = 'Xb7hH8MSUJpSbSDYk0k2';
      }
    } catch (e) {
      console.warn('Could not load audio config:', e);
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

    // 1. ElevenLabs Priority (Highest quality AI speech)
    const useEleven = (this.config.provider === 'elevenlabs' || (this.config.provider === 'auto' && this.config.elevenlabsApiKey)) && this.config.elevenlabsApiKey;
    if (useEleven) {
      try {
        await this.speakWithElevenLabs(cleaned, onFinish);
        return;
      } catch (err) {
        console.warn('[Speech] ElevenLabs failed (quota/network):', err);
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

    // 3. Check pre-generated high-quality neural audio from manifest
    const manifest = window.AUDIO_MANIFEST;
    const isRemoteNoWav = (typeof location !== 'undefined' && location.hostname.includes('github.io') && this.wavFailCount >= 2);
    if (manifest && !isRemoteNoWav) {
      const normalize = (s) => s.toLowerCase().replace(/[.!?,;:"'»«\(\)]/g, '').replace(/\s+/g, ' ').trim();
      const normKey = normalize(cleaned);
      const bareKey = normKey.replace(/^(der|die|das)\s+/i, '').trim();
      const audioFile = manifest[cleaned] || manifest[normKey] || (normKey !== bareKey ? manifest[bareKey] : null);
      if (audioFile && !this.missingWavs.has(audioFile)) {
        const audioPath = `audio/${audioFile}`;
        this.playAudioUrl(audioPath, onFinish, isSlow, () => {
          this.missingWavs.add(audioFile);
          this.wavFailCount++;
          this.speakWithBrowser(cleaned, isSlow, onFinish);
        });
        return;
      }
    }

    // 4. Fallback to Microsoft / Browser Neural Voice
    this.speakWithBrowser(cleaned, isSlow, onFinish);
  },

  async speakFallback(cleaned, isSlow, onFinish) {
    this.speakWithBrowser(cleaned, isSlow, onFinish);
  },

  speakSlow(text) {
    this.speak(text, true);
  },

  // OpenAI TTS API (tts-1)
  async speakWithOpenAI(text, isSlow, onFinish) {
    const cacheKey = `openai_${this.config.openaiVoice}_${isSlow ? 'slow' : 'norm'}_${text}`;
    let audioUrl = this.audioCache.get(cacheKey);

    if (!audioUrl) {
      const response = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.openaiApiKey.trim()}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'tts-1',
          input: text,
          voice: this.config.openaiVoice || 'nova',
          speed: isSlow ? 0.7 : (this.config.openaiSpeed || 0.9)
        })
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.error?.message || `HTTP ${response.status}`);
      }

      const blob = await response.blob();
      audioUrl = URL.createObjectURL(blob);
      this.audioCache.set(cacheKey, audioUrl);
    }

    this.playAudioUrl(audioUrl, onFinish);
  },

  // ElevenLabs Multilingual TTS API
  async speakWithElevenLabs(text, onFinish) {
    const voiceId = this.config.elevenlabsVoiceId || '21m00Tcm4TlvDq8ikWAM';
    const cacheKey = `eleven_${voiceId}_${text}`;
    let audioUrl = this.audioCache.get(cacheKey);

    if (!audioUrl) {
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
        method: 'POST',
        headers: {
          'xi-api-key': this.config.elevenlabsApiKey.trim(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: text,
          model_id: 'eleven_multilingual_v2',
          voice_settings: { stability: 0.5, similarity_boost: 0.8 }
        })
      });

      if (!response.ok) {
        throw new Error(`ElevenLabs error HTTP ${response.status}`);
      }

      const blob = await response.blob();
      audioUrl = URL.createObjectURL(blob);
      this.audioCache.set(cacheKey, audioUrl);
    }

    this.playAudioUrl(audioUrl, onFinish);
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

  // Voice Dictation / Speech-to-Text helper (German de-DE) with robust mobile support
  listen(inputId, btnEl, onUpdate) {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    const input = document.getElementById(inputId);
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const isDe = window.I18n && typeof I18n.isGerman === 'function' && I18n.isGerman();

    // If recognition is already active, tapping the button acts as STOP & COMMIT
    if (this.activeRecognition) {
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

    // On non-touch desktop devices, focus the input; on mobile touch, avoid forcing focus to prevent virtual keyboard conflict
    if (input && !isTouch) {
      try { input.focus(); } catch (e) {}
    }

    let rec;
    try {
      rec = new SpeechRec();
    } catch (err) {
      console.warn('SpeechRecognition init error:', err);
      if (window.Utils && window.Utils.showToast) {
        window.Utils.showToast(
          isDe
            ? 'Spracherkennung konnte nicht gestartet werden. Bitte Tastatur-Mikrofon nutzen 🎤'
            : 'تعذر بدء التعرف على الصوت. يمكنك استخدام ميكروفون لوحة المفاتيح 🎤',
          'warning',
          3500
        );
      }
      return;
    }

    this.activeRecognition = rec;
    this.activeListenBtn = btnEl;
    this.activeListenInput = input;
    this.activeListenCallback = onUpdate;
    this.lastSpokenText = '';
    const initialInputVal = input ? input.value : '';

    rec.lang = 'de-DE';
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    rec.continuous = false;

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
        isDe ? '🎤 Ich höre zu... Sprich auf Deutsch! (Zum Beenden erneut tippen ⏹️)' : '🎤 جاري الاستماع بالألمانية... انقر لإنهاء التسجيل ⏹️',
        'info',
        2500
      );
    }

    // Safety timeout: 9 seconds auto-stop so mobile microphone session never hangs
    if (this.listenTimeout) {
      clearTimeout(this.listenTimeout);
    }
    this.listenTimeout = setTimeout(() => {
      if (this.activeRecognition === rec) {
        this.stopListening();
      }
    }, 9000);

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
      console.warn('SpeechRecognition error:', e);
      if (this.listenTimeout) {
        clearTimeout(this.listenTimeout);
        this.listenTimeout = null;
      }
      const errName = e && e.error;
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
      } else if (errName === 'no-speech') {
        if (window.Utils && window.Utils.showToast) {
          window.Utils.showToast(
            isDe
              ? 'Keine Stimme erkannt. Bitte lauter sprechen oder Tastatur-Mikrofon nutzen 🎤'
              : 'لم يتم التقاط صوت. حاول مرة أخرى أو استخدم ميكروفون لوحة المفاتيح 🎤',
            'info',
            3000
          );
        }
      }
      this.resetListenBtn(btnEl);
      this.activeRecognition = null;
    };

    rec.onend = () => {
      if (this.listenTimeout) {
        clearTimeout(this.listenTimeout);
        this.listenTimeout = null;
      }
      this.resetListenBtn(btnEl);
      this.activeRecognition = null;
      if (this.lastSpokenText && window.Utils && window.Utils.showToast) {
        window.Utils.showToast(isDe ? '✅ Spracheingabe erfasst!' : '✅ تم التقاط الصوت بنجاح!', 'success', 1800);
      }
    };

    try {
      rec.start();
    } catch (err) {
      console.warn('SpeechRecognition start failed:', err);
      this.resetListenBtn(btnEl);
      this.activeRecognition = null;
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

  stopListening() {
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
    this.resetListenBtn(this.activeListenBtn);
  },

  isListening() {
    return !!this.activeRecognition;
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
