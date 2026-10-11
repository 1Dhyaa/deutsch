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
    elevenlabsApiKey: 'sk_72d2512805337d6f46f0e9053d9cc1739378af1ae094777e',
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
      // Guarantee ElevenLabs key is active
      if (!this.config.elevenlabsApiKey) {
        this.config.elevenlabsApiKey = 'sk_72d2512805337d6f46f0e9053d9cc1739378af1ae094777e';
        this.config.provider = 'elevenlabs';
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
        console.log(`[Speech] Synthesizing via ElevenLabs (${this.config.elevenlabsVoiceId}): "${cleaned}"`);
        await this.speakWithElevenLabs(cleaned, onFinish);
        return;
      } catch (err) {
        console.warn('[Speech] ElevenLabs failed (quota/network):', err);
        // Fall back to pre-recorded manifest or browser
      }
    }

    // 2. OpenAI Priority
    const useOpenAI = (this.config.provider === 'openai') && this.config.openaiApiKey;
    if (useOpenAI) {
      try {
        console.log(`[Speech] Synthesizing via OpenAI (${this.config.openaiVoice}): "${cleaned}"`);
        await this.speakWithOpenAI(cleaned, isSlow, onFinish);
        return;
      } catch (err) {
        console.warn('[Speech] OpenAI failed:', err);
      }
    }

    // 3. Check pre-generated high-quality audio from manifest
    const manifest = window.AUDIO_MANIFEST;
    if (manifest) {
      const normalize = (s) => s.toLowerCase().replace(/[.!?,;:"'»«\(\)]/g, '').replace(/\s+/g, ' ').trim();
      const normKey = normalize(cleaned);
      const audioFile = manifest[cleaned] || manifest[normKey];
      if (audioFile) {
        const audioPath = `audio/${audioFile}`;
        console.log(`[Speech] Playing pre-recorded audio: "${cleaned}" -> ${audioPath}`);
        this.playAudioUrl(audioPath, onFinish, isSlow, (err) => {
          console.warn(`[Speech] Failed to load "${audioPath}":`, err, 'Falling back to browser...');
          this.speakWithBrowser(cleaned, isSlow, onFinish);
        });
        return;
      }
    }

    // 4. Fallback to browser voice
    this.speakWithBrowser(cleaned, isSlow, onFinish);
  },

  async speakFallback(cleaned, isSlow, onFinish) {
    // 1. Check if user configured OpenAI TTS
    const useOpenAI = (this.config.provider === 'openai' || (this.config.provider === 'auto' && this.config.openaiApiKey)) && this.config.openaiApiKey;
    if (useOpenAI) {
      try {
        await this.speakWithOpenAI(cleaned, isSlow, onFinish);
        return;
      } catch (err) {
        console.warn('OpenAI TTS failed, falling back to neural browser voice:', err);
        if (window.Utils && window.Utils.showToast) {
          window.Utils.showToast('تعذر الاتصال بـ OpenAI TTS، يتم استخدام الصوت الطبيعي للمتصفح.', 'warning', 2500);
        }
      }
    }

    // 2. Check if user configured ElevenLabs
    const useEleven = this.config.provider === 'elevenlabs' && this.config.elevenlabsApiKey;
    if (useEleven) {
      try {
        await this.speakWithElevenLabs(cleaned, onFinish);
        return;
      } catch (err) {
        console.warn('ElevenLabs failed, falling back to browser voice:', err);
      }
    }

    // 3. High quality browser voice
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

  // Browser Speech Synthesis
  speakWithBrowser(text, isSlow, onFinish) {
    if (!this.synth) {
      if (onFinish) onFinish();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = isSlow ? 0.6 : (this.config.rate || 0.85);
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
    if (this.synth) {
      this.synth.cancel();
    }
    document.querySelectorAll('.audio-btn.playing').forEach(b => b.classList.remove('playing'));
  }
};

// Auto-initialize
if (typeof window !== 'undefined') {
  window.Speech = Speech;
  window.addEventListener('DOMContentLoaded', () => Speech.init());
}
