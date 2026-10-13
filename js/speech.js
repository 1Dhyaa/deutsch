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
  activeRecognition: null,
  activeMediaRecorder: null,
  activeMediaStream: null,
  audioChunks: [],
  latestTranscript: '',
  activeListenInput: null,
  activeListenBtn: null,
  activeListenCallback: null,
  listenTimeout: null,
  origPlaceholder: '',

  // Transcribe audio using ElevenLabs Scribe v2 STT with 4-key auto rotation
  async transcribeAudioBlob(blob) {
    if (!blob || blob.size < 500) return '';
    const maxTries = this.elevenlabsKeys.length;
    for (let attempt = 0; attempt < maxTries; attempt++) {
      const apiKey = this.getCurrentApiKey();
      try {
        const formData = new FormData();
        formData.append('model_id', 'scribe_v2');
        formData.append('language_code', 'de');
        const filename = (blob.type && blob.type.includes('mp4')) ? 'audio.mp4' : 'audio.webm';
        formData.append('file', blob, filename);

        const response = await fetch('https://api.elevenlabs.io/v1/speech-to-text', {
          method: 'POST',
          headers: {
            'xi-api-key': apiKey
          },
          body: formData
        });

        if (response.ok) {
          const data = await response.json();
          return (data.text || '').trim();
        } else if (response.status === 401 || response.status === 402 || response.status === 429) {
          console.warn(`[Speech] ElevenLabs STT Key #${this.currentKeyIndex + 1} quota limit (${response.status}), rotating key...`);
          this.rotateApiKey();
        } else {
          console.warn(`[Speech] ElevenLabs STT HTTP ${response.status}`);
          break;
        }
      } catch (err) {
        console.warn('[Speech] ElevenLabs STT request error:', err);
        this.rotateApiKey();
      }
    }
    return '';
  },

  // Voice Dictation / Speech-to-Text helper (German de-DE) with Dual Engine:
  // Engine 1: Real-time Web Speech API (with mobile-safe continuous:false)
  // Engine 2: High-precision ElevenLabs Scribe v2 STT via MediaRecorder audio capture
  async listen(inputId, btnEl, onUpdate) {
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const isDe = window.I18n && typeof I18n.isGerman === 'function' && I18n.isGerman();

    // Resolve target input element reliably
    let input = typeof inputId === 'string' ? document.getElementById(inputId) : inputId;
    if (!input && typeof inputId === 'string') {
      input = document.querySelector(inputId) || document.querySelector(`[name="${inputId}"]`);
    }
    if (!input && btnEl && btnEl.parentElement) {
      input = btnEl.parentElement.querySelector('input, textarea') || btnEl.closest('.card, form, div')?.querySelector('input, textarea');
    }

    // If currently listening, tapping again acts as STOP & PROCESS
    if (this.isListeningSessionActive) {
      await this.stopListening();
      return;
    }

    // Stop all audio output before recording so mic receives full audio focus
    if (this.currentAudio) {
      try { this.currentAudio.pause(); } catch (e) {}
      this.currentAudio = null;
    }
    if (window.DiktatTrainer && DiktatTrainer.stopAudio) DiktatTrainer.stopAudio();
    if (this.synth) this.synth.cancel();

    this.activeListenBtn = btnEl;
    this.activeListenInput = input;
    this.activeListenCallback = onUpdate;
    this.latestTranscript = '';
    this.audioChunks = [];
    this.isListeningSessionActive = true;
    this.userRequestedStop = false;
    const initialInputVal = input ? input.value : '';
    if (input) {
      input.dataset.initialVal = initialInputVal;
      this.origPlaceholder = input.getAttribute('placeholder') || '';
      input.setAttribute('placeholder', isDe ? '🎙️ Ich höre zu... Sprich jetzt auf Deutsch...' : '🎙️ جاري الاستماع... تحدث الآن بالألمانية...');
      input.classList.add('mic-listening');
    }

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
        isDe
          ? '🎤 Ich höre zu... Sprich auf Deutsch! (Zum Beenden erneut tippen ⏹️)'
          : '🎤 جاري الاستماع بالألمانية... انقر على إنهاء عند الانتهاء ⏹️',
        'info',
        2200
      );
    }

    // 1. Start MediaRecorder (Guaranteed audio stream capture on all modern mobile & desktop browsers)
    if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        this.activeMediaStream = stream;
        let mimeType = 'audio/webm';
        if (typeof MediaRecorder !== 'undefined' && typeof MediaRecorder.isTypeSupported === 'function') {
          if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) mimeType = 'audio/webm;codecs=opus';
          else if (MediaRecorder.isTypeSupported('audio/webm')) mimeType = 'audio/webm';
          else if (MediaRecorder.isTypeSupported('audio/mp4')) mimeType = 'audio/mp4';
          else if (MediaRecorder.isTypeSupported('audio/aac')) mimeType = 'audio/aac';
        }
        const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
        this.activeMediaRecorder = recorder;
        recorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) {
            this.audioChunks.push(e.data);
          }
        };
        recorder.start(250);
      } catch (err) {
        console.warn('[Speech] MediaRecorder getUserMedia notice:', err);
      }
    }

    // 2. Start Web Speech Recognition for instant live transcription
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRec) {
      try {
        const rec = new SpeechRec();
        this.activeRecognition = rec;
        rec.lang = 'de-DE';
        rec.interimResults = true;
        rec.maxAlternatives = 1;
        rec.continuous = false; // continuous: false is REQUIRED for mobile Chrome & Safari!

        rec.onresult = (event) => {
          let fullStr = '';
          for (let i = 0; i < event.results.length; ++i) {
            fullStr += event.results[i][0].transcript;
          }
          const spoken = fullStr.trim();
          if (spoken) {
            this.latestTranscript = spoken;
            if (input) {
              if (input.tagName === 'TEXTAREA' && initialInputVal && !initialInputVal.includes(spoken)) {
                input.value = initialInputVal.trim() + ' ' + spoken;
              } else {
                input.value = spoken;
              }
              input.dispatchEvent(new Event('input', { bubbles: true }));
              input.dispatchEvent(new Event('change', { bubbles: true }));
            }
            if (onUpdate) onUpdate(spoken);
          }
        };

        rec.onerror = (e) => {
          console.warn('[Speech] SpeechRecognition event:', e && e.error);
        };

        rec.onend = () => {
          // If session is still active and user has not stopped, and no text recognized yet, revive session
          if (this.isListeningSessionActive && !this.userRequestedStop && !this.latestTranscript) {
            setTimeout(() => {
              if (this.isListeningSessionActive && !this.userRequestedStop && !this.latestTranscript) {
                try {
                  const freshRec = new SpeechRec();
                  this.activeRecognition = freshRec;
                  freshRec.lang = 'de-DE';
                  freshRec.interimResults = true;
                  freshRec.maxAlternatives = 1;
                  freshRec.continuous = false;
                  freshRec.onresult = rec.onresult;
                  freshRec.onerror = rec.onerror;
                  freshRec.onend = rec.onend;
                  freshRec.start();
                } catch (e) {}
              }
            }, 150);
          }
        };

        rec.start();
      } catch (err) {
        console.warn('[Speech] SpeechRecognition start notice:', err);
      }
    }

    // Safety timeout: 15 seconds auto-stop so microphone session never hangs indefinitely
    if (this.listenTimeout) clearTimeout(this.listenTimeout);
    this.listenTimeout = setTimeout(() => {
      if (this.isListeningSessionActive) {
        this.stopListening();
      }
    }, 15000);
  },

  async stopListening() {
    this.userRequestedStop = true;
    this.isListeningSessionActive = false;
    if (this.listenTimeout) {
      clearTimeout(this.listenTimeout);
      this.listenTimeout = null;
    }

    // Stop Web Speech Recognition
    const rec = this.activeRecognition;
    this.activeRecognition = null;
    if (rec) {
      try { rec.stop(); } catch (e) { try { rec.abort(); } catch (e2) {} }
    }

    // Stop MediaRecorder and collect all audio chunks
    let audioBlob = null;
    if (this.activeMediaRecorder) {
      try {
        if (this.activeMediaRecorder.state !== 'inactive') {
          await new Promise((resolve) => {
            this.activeMediaRecorder.onstop = resolve;
            this.activeMediaRecorder.stop();
          });
        }
      } catch (e) {}
      if (this.audioChunks && this.audioChunks.length > 0) {
        const mime = (this.activeMediaRecorder && this.activeMediaRecorder.mimeType) || 'audio/webm';
        audioBlob = new Blob(this.audioChunks, { type: mime });
      }
      this.activeMediaRecorder = null;
    }

    // Stop mic stream tracks to release microphone hardware
    if (this.activeMediaStream) {
      try {
        this.activeMediaStream.getTracks().forEach(t => t.stop());
      } catch (e) {}
      this.activeMediaStream = null;
    }

    const btnEl = this.activeListenBtn;
    const input = this.activeListenInput;
    const onUpdate = this.activeListenCallback;
    const isDe = window.I18n && typeof I18n.isGerman === 'function' && I18n.isGerman();

    // Check if input was already populated by real-time speech
    let finalText = (this.latestTranscript || (input ? input.value : '')).trim();

    // If input is STILL EMPTY, but we recorded audio chunks, transcribe via ElevenLabs Scribe STT!
    if ((!finalText || (input && !input.value.trim())) && audioBlob && audioBlob.size > 1500) {
      if (btnEl) {
        btnEl.innerHTML = `<span style="display:inline-block; animation:spin 0.8s linear infinite;">⏳</span> <strong>${isDe ? 'AI analysiert...' : 'معالجة AI...'}</strong>`;
      }
      try {
        const transcribed = await this.transcribeAudioBlob(audioBlob);
        if (transcribed) {
          finalText = transcribed;
          if (input) {
            const initialVal = input.dataset.initialVal || '';
            if (input.tagName === 'TEXTAREA' && initialVal && !initialVal.includes(transcribed)) {
              input.value = initialVal.trim() + ' ' + transcribed;
            } else {
              input.value = transcribed;
            }
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
          }
          if (onUpdate) onUpdate(transcribed);
        }
      } catch (err) {
        console.warn('[Speech] ElevenLabs STT fallback error:', err);
      }
    }

    // Cleanup UI
    this.cleanupListening(btnEl);

    // Provide clear user feedback
    if (finalText) {
      if (window.Utils && window.Utils.showToast) {
        window.Utils.showToast(isDe ? '✅ Spracheingabe erfolgreich eingefügt!' : '✅ تم وضع ما قلته في الخانة بنجاح!', 'success', 2200);
      }
    } else {
      if (window.Utils && window.Utils.showToast) {
        window.Utils.showToast(
          isDe
            ? '💡 Kein Ton erkannt. Tipp: Nutze das Mikrofon deiner Tastatur (🎤)!'
            : '💡 لم يتم التقاط صوت واضح. نصيحة: يمكنك أيضاً الضغط على ميكروفون كيبورد هاتفك (🎤)!',
          'warning',
          4000
        );
      }
    }
  },

  cleanupListening(btnEl) {
    this.isListeningSessionActive = false;
    if (this.listenTimeout) {
      clearTimeout(this.listenTimeout);
      this.listenTimeout = null;
    }
    const input = this.activeListenInput;
    if (input) {
      if (this.origPlaceholder !== undefined) {
        input.setAttribute('placeholder', this.origPlaceholder);
      }
      input.classList.remove('mic-listening');
    }
    this.resetListenBtn(btnEl || this.activeListenBtn);
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
