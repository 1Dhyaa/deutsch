/**
 * lesetexte-reader.js — Interactive Reading Studio for Kontext B1+ Kursbuch
 * Features:
 * - Word-by-word instant popover dictionary translation with lemma and POS badges
 * - ElevenLabs sentence audio playback with synchronized glow highlighting
 * - Full-text auto-play mode with persistent bottom player bar
 * - Interactive textbook exercises (Übungen) with immediate Arabic feedback and scoring
 * - Authentic images extracted from Kontext B1+ with bilingual captions
 */

(function () {
  'use strict';

  const LesetexteReader = {
    currentText: null,
    fontSize: 'md', // 'sm', 'md', 'lg'
    showSentenceTranslations: false,
    activeTab: 'text', // 'text', 'exercises', 'vocab'
    isPlayingFullText: false,
    currentSentenceIndex: -1,
    flatSentences: [],
    audioSpeed: 1.0,
    popoverEl: null,
    activeWordSpan: null,

    init() {
      // Create word popover container if not present
      if (!this.popoverEl) {
        this.createPopoverElement();
      }
      
      // Global click listener to close popover when clicking outside
      document.addEventListener('click', (e) => {
        if (this.popoverEl && this.popoverEl.style.display === 'block') {
          if (!this.popoverEl.contains(e.target) && !e.target.classList.contains('read-word')) {
            this.hidePopover();
          }
        }
      });

      // Window scroll closes popover to avoid misalignment
      window.addEventListener('scroll', () => {
        if (this.popoverEl && this.popoverEl.style.display === 'block') {
          this.hidePopover();
        }
      }, { passive: true });
    },

    createPopoverElement() {
      const popover = document.createElement('div');
      popover.id = 'word-popover';
      popover.className = 'word-popover';
      popover.innerHTML = `
        <div class="popover-top-row">
          <span class="popover-word-de" id="popover-word-de"></span>
          <span class="popover-pos-badge" id="popover-pos-badge"></span>
          <button type="button" class="popover-close-btn" onclick="LesetexteReader.hidePopover()">&times;</button>
        </div>
        <div class="popover-arabic-translation" id="popover-ar-translation"></div>
        <div class="popover-lemma-row" id="popover-lemma-row">
          <span style="color:var(--text-muted); font-size:0.75rem;">Grundform:</span>
          <strong id="popover-lemma" style="color:var(--text-primary);"></strong>
        </div>
        <div class="popover-sentence-box" id="popover-sentence-box" style="display:none;">
          <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:2px;">ترجمة الجملة كاملة:</div>
          <div id="popover-sentence-ar" style="font-size:0.92rem; color:var(--text-secondary); line-height:1.45;"></div>
        </div>
        <div class="popover-actions">
          <button type="button" class="popover-speak-btn" id="popover-speak-btn" title="استمع لنطق الكلمة">
            🔊 نطق الكلمة
          </button>
          <button type="button" class="popover-speak-btn" id="popover-sent-speak-btn" title="استمع لنطق الجملة">
            🎧 نطق الجملة
          </button>
          <button type="button" class="popover-tool-btn" id="popover-toggle-trans-btn" title="إظهار / إخفاء ترجمة الجملة">
            👁️ ترجمة الجملة
          </button>
        </div>
      `;
      document.body.appendChild(popover);
      this.popoverEl = popover;
    },

    getTexts() {
      return window.LESETEXTE || [];
    },

    getTextById(id) {
      const texts = this.getTexts();
      return texts.find(t => t.id === id) || texts[0] || null;
    },

    getTitleDe(t) {
      if (!t) return '';
      return (typeof t.title === 'object') ? (t.title.de || '') : (t.title || '');
    },

    getTitleAr(t) {
      if (!t) return '';
      return (typeof t.title === 'object') ? (t.title.ar || t.title.de || '') : (t.title || '');
    },

    getSubtitleDe(t) {
      if (!t) return '';
      return (typeof t.subtitle === 'object') ? (t.subtitle.de || '') : (t.subtitle || '');
    },

    getSubtitleAr(t) {
      if (!t) return '';
      return (typeof t.subtitle === 'object') ? (t.subtitle.ar || t.subtitle.de || '') : (t.subtitle || '');
    },

    render(container, textId) {
      this.init();
      this.stopAudio();

      if (!container) container = document.getElementById('app-content');
      if (!container) return;

      if (!textId) {
        this.renderCatalog(container);
      } else {
        const text = this.getTextById(textId);
        if (!text) {
          this.renderCatalog(container);
        } else {
          this.renderTextReader(container, text);
        }
      }
    },

    /* =========================================================================
       CATALOG / OVERVIEW VIEW
       ========================================================================= */
    renderCatalog(container) {
      const isDe = window.I18n && window.I18n.isGerman();
      const texts = this.getTexts();

      container.innerHTML = `
        <div class="lesetexte-container fade-in">
          <div class="lese-header-card">
            <div class="lese-badge-row">
              <span class="lese-badge lese-badge-book">📖 Kontext B1+</span>
              <span class="lese-badge lese-badge-level">Niveau B1 / B1+</span>
              <span class="lese-badge lese-badge-page">10 Texte mit Wortübersetzung & Audio</span>
            </div>
            <h1 class="lese-header-title">
              ${isDe ? 'Interaktive Lesetexte (Kontext B1+)' : 'نصوص القراءة التفاعلية (كتاب Kontext B1+)'}
            </h1>
            <p class="lese-header-sub">
              ${isDe 
                ? 'Lies authentische Lesetexte aus dem Kursbuch. Klicke auf jedes einzelne Wort, um sofort die arabische Übersetzung und Grundform zu sehen. Höre jeden Satz mit ElevenLabs-Sprachausgabe.' 
                : 'اقرأ النصوص الأصلية المأخوذة مباشرة من كتاب Kontext B1+. اضغط على أي كلمة لعرض ترجمتها الفورية بالعربية وجذرها النحوي، واستمع لنطق كل جملة بصوت الذكاء الاصطناعي النسائي من ElevenLabs.'}
            </p>
          </div>

          <div class="lese-catalog-grid">
            ${texts.map((t, idx) => {
              const coverImg = (t.images && t.images[0]) ? t.images[0].src : 'assets/images/lesetexte/text-01-img-1.jpeg';
              return `
                <div class="lese-card" onclick="Router.navigate('/lesetext/${t.id}')">
                  <img src="${coverImg}" alt="${Utils.escapeHtml(this.getTitleDe(t))}" class="lese-card-cover" loading="lazy" onerror="this.style.display='none'" />
                  <div class="lese-card-top">
                    <span class="lese-card-number">Text ${idx + 1} • ${Utils.escapeHtml(t.lektion || 'Lektion 1')}</span>
                    <span class="lese-card-time">⏱️ ${t.readingTimeMin || 4} Min.</span>
                  </div>
                  <h3 class="lese-card-title-de">${t.themeEmoji || '📄'} ${Utils.escapeHtml(this.getTitleDe(t))}</h3>
                  <p class="lese-card-title-ar">${Utils.escapeHtml(this.getTitleAr(t))}</p>
                  <div class="lese-card-meta">
                    <span>${Utils.escapeHtml(t.bookPage)}</span>
                    <span class="lese-card-action">${isDe ? 'Jetzt lesen ➔' : 'اقرأ النص واستمع ➔'}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    },

    /* =========================================================================
       READER VIEW
       ========================================================================= */
    renderTextReader(container, text) {
      this.currentText = text;
      this.activeTab = 'text';
      this.isPlayingFullText = false;
      this.currentSentenceIndex = -1;

      // Flatten sentences for easy sequential playback
      this.flatSentences = [];
      if (text.paragraphs) {
        text.paragraphs.forEach(p => {
          if (p.sentences) {
            p.sentences.forEach(s => {
              this.flatSentences.push(s);
            });
          }
        });
      }

      const isDe = window.I18n && window.I18n.isGerman();
      const texts = this.getTexts();

      container.innerHTML = `
        <div class="lesetexte-container fade-in">
          <!-- Navigation Toolbar -->
          <div class="reader-toolbar">
            <div class="reader-toolbar-group">
              <button type="button" class="reader-tool-btn" onclick="Router.navigate('/lesetexte')" title="${isDe ? 'Zurück zur Übersicht' : 'العودة لقائمة النصوص'}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                <span>${isDe ? 'Alle Texte' : 'جميع النصوص'}</span>
              </button>
              
              <select class="reader-select" onchange="Router.navigate('/lesetext/' + this.value)">
                ${texts.map((t, idx) => `
                  <option value="${t.id}" ${t.id === text.id ? 'selected' : ''}>
                    ${idx + 1}. ${Utils.escapeHtml(this.getTitleDe(t))}
                  </option>
                `).join('')}
              </select>
            </div>

            <div class="reader-toolbar-group">
              <!-- Font Size Controls -->
              <button type="button" class="reader-tool-btn ${this.fontSize === 'sm' ? 'active' : ''}" onclick="LesetexteReader.setFontSize('sm')" title="خط أصغر">A-</button>
              <button type="button" class="reader-tool-btn ${this.fontSize === 'md' ? 'active' : ''}" onclick="LesetexteReader.setFontSize('md')" title="خط متوسط">A</button>
              <button type="button" class="reader-tool-btn ${this.fontSize === 'lg' ? 'active' : ''}" onclick="LesetexteReader.setFontSize('lg')" title="خط كبير">A+</button>

              <!-- Translation Toggle -->
              <button type="button" id="trans-toggle-btn" class="reader-tool-btn ${this.showSentenceTranslations ? 'active' : ''}" onclick="LesetexteReader.toggleTranslations()">
                <span>🌐 ${isDe ? 'Übersetzung' : 'الترجمة'}</span>
              </button>

              <!-- Full Audio Play Button -->
              <button type="button" id="full-audio-btn" class="reader-tool-btn" onclick="LesetexteReader.toggleFullAudioPlay()">
                <span>🎧 ${isDe ? 'Gesamten Text vorlesen' : 'تشغيل النص كاملاً'}</span>
              </button>
            </div>
          </div>

          <!-- Tabs: Text | Exercises | Vocab -->
          <div class="reader-tabs">
            <button type="button" class="reader-tab ${this.activeTab === 'text' ? 'active' : ''}" onclick="LesetexteReader.switchTab('text')">
              📖 ${isDe ? 'Lesetext & Audio' : 'نص القراءة والصوت'}
            </button>
            <button type="button" class="reader-tab ${this.activeTab === 'exercises' ? 'active' : ''}" onclick="LesetexteReader.switchTab('exercises')">
              ✍️ ${isDe ? 'Übungen' : 'تمارين الكتاب'}
              <span class="reader-tab-badge">${(text.exercises || []).length}</span>
            </button>
            <button type="button" class="reader-tab ${this.activeTab === 'vocab' ? 'active' : ''}" onclick="LesetexteReader.switchTab('vocab')">
              💡 ${isDe ? 'Wortschatz' : 'أهم المفردات'}
              <span class="reader-tab-badge">${(text.keyVocab || []).length}</span>
            </button>
          </div>

          <!-- TAB 1: TEXT CONTENT -->
          <div id="tab-content-text" style="display: ${this.activeTab === 'text' ? 'block' : 'none'};">
            <div class="reader-paper">
              <div class="reader-article-header">
                <div class="lese-badge-row">
                  <span class="lese-badge lese-badge-book">${Utils.escapeHtml(text.bookPage)}</span>
                  <span class="lese-badge lese-badge-level">${Utils.escapeHtml(text.level || 'B1+')}</span>
                  <span class="lese-badge lese-badge-page">${Utils.escapeHtml(text.topic || '')}</span>
                </div>
                <h1 class="reader-article-title">${Utils.escapeHtml(this.getTitleDe(text))}</h1>
                <p class="reader-article-sub">${Utils.escapeHtml(this.getTitleAr(text))} <span style="font-weight:400; font-size:0.95rem; color:var(--text-muted); margin-inline-start:8px;">(${Utils.escapeHtml(this.getSubtitleAr(text))})</span></p>
              </div>

              <!-- Textbook Authentic Images -->
              ${text.images && text.images.length > 0 ? `
                <div class="reader-images-grid">
                  ${text.images.map(img => `
                    <div class="reader-img-card">
                      <img src="${img.src}" alt="${Utils.escapeHtml(img.caption || '')}" class="reader-img" loading="lazy" onerror="this.parentElement.style.display='none'" />
                      ${img.caption ? `<div class="reader-img-caption">📷 ${Utils.escapeHtml(img.caption)}</div>` : ''}
                    </div>
                  `).join('')}
                </div>
              ` : ''}

              <!-- Body Paragraphs & Tokenized Sentences -->
              <div class="reader-body font-${this.fontSize}" id="reader-body-content">
                ${this.renderParagraphsHTML(text)}
              </div>
            </div>
          </div>

          <!-- TAB 2: EXERCISES CONTENT -->
          <div id="tab-content-exercises" style="display: ${this.activeTab === 'exercises' ? 'block' : 'none'};">
            ${this.renderExercisesHTML(text)}
          </div>

          <!-- TAB 3: KEY VOCABULARY -->
          <div id="tab-content-vocab" style="display: ${this.activeTab === 'vocab' ? 'block' : 'none'};">
            ${this.renderVocabHTML(text)}
          </div>
        </div>

        <!-- Floating Player Bar for Full Text Playback -->
        <div id="full-text-player-bar" class="full-text-player-bar" style="display: none;">
          <div class="player-controls">
            <button type="button" class="player-btn" onclick="LesetexteReader.playPrevSentence()" title="الجملة السابقة">⏮️</button>
            <button type="button" class="player-btn player-btn-main" id="player-play-btn" onclick="LesetexteReader.togglePlayPause()">⏸️</button>
            <button type="button" class="player-btn" onclick="LesetexteReader.playNextSentence()" title="الجملة التالية">⏭️</button>
            <button type="button" class="player-btn" onclick="LesetexteReader.stopFullAudioPlay()" title="إيقاف">&#x2715;</button>
          </div>
          <div class="player-info">
            <span class="player-title" id="player-sentence-counter">جملة 1 من 10</span>
            <span class="player-status">ElevenLabs Voice (Alice)</span>
          </div>
        </div>
      `;

      // Attach word click listeners
      this.attachWordListeners();
    },

    renderParagraphsHTML(text) {
      if (!text.paragraphs || !text.paragraphs.length) return '<p>لا يوجد محتوى متاح.</p>';

      return text.paragraphs.map((p, pIdx) => {
        const sentencesHTML = (p.sentences || []).map(s => {
          // Tokenized words
          const tokensHTML = (s.tokens || []).map(tok => {
            return `<span class="read-word" 
              data-w="${Utils.escapeHtml(tok.w)}" 
              data-ar="${Utils.escapeHtml(tok.ar || '')}" 
              data-base="${Utils.escapeHtml(tok.base || tok.w)}" 
              data-pos="${Utils.escapeHtml(tok.pos || 'Wort')}">${Utils.escapeHtml(tok.w)}</span>`;
          }).join(' ');

          return `<span class="reader-sentence" id="sentence-${s.id}" data-sentence-id="${s.id}">${tokensHTML}<button type="button" class="inline-listen-pill" onclick="LesetexteReader.playSingleSentence('${s.id}', false, event)" title="استمع لهذه الجملة">🔊</button></span>`;
        }).join(' ');

        // Paragraph Arabic translation (hidden by default, toggled via toolbar button)
        const pArabic = (p.sentences || []).map(s => s.ar).filter(Boolean).join(' ');
        const transBoxHTML = pArabic ? `
          <div class="paragraph-translation-box p-trans-box" id="p-trans-${pIdx}" style="display: ${this.showSentenceTranslations ? 'block' : 'none'};">
            ${Utils.escapeHtml(pArabic)}
          </div>
        ` : '';

        return `<p class="reader-paragraph">${sentencesHTML}</p>${transBoxHTML}`;
      }).join('');
    },

    attachWordListeners() {
      const words = document.querySelectorAll('.read-word');
      words.forEach(span => {
        span.addEventListener('click', (e) => {
          e.stopPropagation();
          this.showWordPopover(span);
        });
      });
    },

    /* =========================================================================
       WORD POPOVER & DICTIONARY
       ========================================================================= */
    showWordPopover(wordSpan) {
      if (this.activeWordSpan) {
        this.activeWordSpan.classList.remove('is-active');
      }
      this.activeWordSpan = wordSpan;
      wordSpan.classList.add('is-active');

      const wordDe = wordSpan.getAttribute('data-w') || '';
      const wordAr = wordSpan.getAttribute('data-ar') || '';
      const wordBase = wordSpan.getAttribute('data-base') || wordDe;
      const wordPos = wordSpan.getAttribute('data-pos') || 'Wort';

      // Find sentence context
      const sentenceSpan = wordSpan.closest('.reader-sentence');
      const sentenceId = sentenceSpan ? sentenceSpan.getAttribute('data-sentence-id') : null;
      const sentence = this.flatSentences.find(s => s.id === sentenceId);

      const deEl = document.getElementById('popover-word-de');
      const arEl = document.getElementById('popover-ar-translation');
      const lemmaEl = document.getElementById('popover-lemma');
      const posBadge = document.getElementById('popover-pos-badge');
      const speakBtn = document.getElementById('popover-speak-btn');
      const sentSpeakBtn = document.getElementById('popover-sent-speak-btn');
      const toggleTransBtn = document.getElementById('popover-toggle-trans-btn');
      const sentBox = document.getElementById('popover-sentence-box');
      const sentArEl = document.getElementById('popover-sentence-ar');

      if (deEl) deEl.textContent = wordDe;
      if (arEl) arEl.textContent = wordAr || 'ترجمة الكلمة';
      if (lemmaEl) lemmaEl.textContent = wordBase;
      if (posBadge) {
        posBadge.textContent = wordPos;
        posBadge.className = `popover-pos-badge popover-pos-${wordPos.replace(/[^a-zA-Z]/g, '')}`;
      }

      if (sentBox) sentBox.style.display = 'none';
      if (sentArEl && sentence) sentArEl.textContent = sentence.ar || '';

      if (speakBtn) {
        speakBtn.onclick = () => {
          if (window.Speech && Speech.speak) {
            Speech.speak(wordDe);
          }
        };
      }

      if (sentSpeakBtn) {
        if (sentence) {
          sentSpeakBtn.style.display = 'inline-flex';
          sentSpeakBtn.onclick = () => {
            this.playSingleSentence(sentence.id);
          };
        } else {
          sentSpeakBtn.style.display = 'none';
        }
      }

      if (toggleTransBtn) {
        if (sentence && sentence.ar) {
          toggleTransBtn.style.display = 'inline-flex';
          toggleTransBtn.onclick = () => {
            if (sentBox) {
              const isHidden = (sentBox.style.display === 'none');
              sentBox.style.display = isHidden ? 'block' : 'none';
            }
          };
        } else {
          toggleTransBtn.style.display = 'none';
        }
      }

      // Position the popover dynamically
      const rect = wordSpan.getBoundingClientRect();
      const popoverWidth = 320;
      let left = rect.left + (rect.width / 2);
      let top = rect.top;

      // Adjust boundaries
      if (left - (popoverWidth / 2) < 16) {
        left = (popoverWidth / 2) + 16;
      } else if (left + (popoverWidth / 2) > window.innerWidth - 16) {
        left = window.innerWidth - (popoverWidth / 2) - 16;
      }

      this.popoverEl.style.left = `${left}px`;
      
      // If close to viewport top, show below the word
      if (top < 180) {
        this.popoverEl.classList.add('popover-below');
        this.popoverEl.style.top = `${rect.bottom + window.scrollY}px`;
      } else {
        this.popoverEl.classList.remove('popover-below');
        this.popoverEl.style.top = `${rect.top + window.scrollY}px`;
      }

      this.popoverEl.style.display = 'block';
    },

    hidePopover() {
      if (this.popoverEl) {
        this.popoverEl.style.display = 'none';
      }
      if (this.activeWordSpan) {
        this.activeWordSpan.classList.remove('is-active');
        this.activeWordSpan = null;
      }
    },

    /* =========================================================================
       AUDIO PLAYBACK & HIGHLIGHTING
       ========================================================================= */
    playSingleSentence(sentenceId, isSlow = false, evt) {
      if (evt && evt.stopPropagation) evt.stopPropagation();
      const sentence = this.flatSentences.find(s => s.id === sentenceId);
      if (!sentence) return;

      this.highlightSentence(sentenceId);

      const pillBtn = document.querySelector(`#sentence-${sentenceId} .inline-listen-pill`);
      if (pillBtn) pillBtn.classList.add('playing');

      if (window.Speech && Speech.speak) {
        Speech.speak(sentence.de, isSlow, () => {
          this.unhighlightSentence(sentenceId);
          if (pillBtn) pillBtn.classList.remove('playing');
        });
      }
    },

    highlightSentence(sentenceId) {
      document.querySelectorAll('.reader-sentence').forEach(el => el.classList.remove('is-playing'));
      const target = document.getElementById(`sentence-${sentenceId}`);
      if (target) {
        target.classList.add('is-playing');
        target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    },

    unhighlightSentence(sentenceId) {
      const target = document.getElementById(`sentence-${sentenceId}`);
      if (target) {
        target.classList.remove('is-playing');
      }
      const pillBtn = document.querySelector(`#sentence-${sentenceId} .inline-listen-pill`);
      if (pillBtn) pillBtn.classList.remove('playing');
    },

    toggleFullAudioPlay() {
      if (this.isPlayingFullText) {
        this.stopFullAudioPlay();
      } else {
        this.startFullAudioPlay();
      }
    },

    startFullAudioPlay() {
      if (!this.flatSentences.length) return;
      this.isPlayingFullText = true;
      this.currentSentenceIndex = 0;

      const playerBar = document.getElementById('full-text-player-bar');
      if (playerBar) playerBar.style.display = 'flex';

      const fullBtn = document.getElementById('full-audio-btn');
      if (fullBtn) fullBtn.classList.add('active');

      this.playCurrentSentenceInSequence();
    },

    playCurrentSentenceInSequence() {
      if (!this.isPlayingFullText) return;

      if (this.currentSentenceIndex < 0 || this.currentSentenceIndex >= this.flatSentences.length) {
        this.stopFullAudioPlay();
        Utils.showToast('اكتملت قراءة النص بالكامل! 🎉', 'success');
        return;
      }

      const sentence = this.flatSentences[this.currentSentenceIndex];
      this.highlightSentence(sentence.id);

      const counter = document.getElementById('player-sentence-counter');
      if (counter) {
        counter.textContent = `جملة ${this.currentSentenceIndex + 1} من ${this.flatSentences.length}`;
      }

      if (window.Speech && Speech.speak) {
        Speech.speak(sentence.de, false, () => {
          if (this.isPlayingFullText) {
            this.currentSentenceIndex++;
            setTimeout(() => {
              this.playCurrentSentenceInSequence();
            }, 500);
          }
        });
      }
    },

    playNextSentence() {
      if (this.currentSentenceIndex < this.flatSentences.length - 1) {
        if (window.Speech && Speech.stop) Speech.stop();
        this.currentSentenceIndex++;
        this.playCurrentSentenceInSequence();
      }
    },

    playPrevSentence() {
      if (this.currentSentenceIndex > 0) {
        if (window.Speech && Speech.stop) Speech.stop();
        this.currentSentenceIndex--;
        this.playCurrentSentenceInSequence();
      }
    },

    togglePlayPause() {
      const playBtn = document.getElementById('player-play-btn');
      if (this.isPlayingFullText) {
        this.isPlayingFullText = false;
        if (window.Speech && Speech.stop) Speech.stop();
        if (playBtn) playBtn.textContent = '▶️';
      } else {
        this.isPlayingFullText = true;
        if (playBtn) playBtn.textContent = '⏸️';
        this.playCurrentSentenceInSequence();
      }
    },

    stopFullAudioPlay() {
      this.isPlayingFullText = false;
      this.currentSentenceIndex = -1;
      this.stopAudio();

      const playerBar = document.getElementById('full-text-player-bar');
      if (playerBar) playerBar.style.display = 'none';

      const fullBtn = document.getElementById('full-audio-btn');
      if (fullBtn) fullBtn.classList.remove('active');

      document.querySelectorAll('.reader-sentence').forEach(el => el.classList.remove('is-playing'));
    },

    stopAudio() {
      if (window.Speech && Speech.stop) {
        Speech.stop();
      }
      document.querySelectorAll('.reader-sentence').forEach(el => el.classList.remove('is-playing'));
    },

    /* =========================================================================
       TOOLBAR CONTROLS
       ========================================================================= */
    setFontSize(size) {
      this.fontSize = size;
      const body = document.getElementById('reader-body-content');
      if (body) {
        body.className = `reader-body font-${size}`;
      }
      document.querySelectorAll('.reader-tool-btn').forEach(b => {
        if (['A-', 'A', 'A+'].includes(b.textContent.trim())) {
          b.classList.remove('active');
        }
      });
      event.target.classList.add('active');
    },

    toggleTranslations() {
      this.showSentenceTranslations = !this.showSentenceTranslations;
      const btn = document.getElementById('trans-toggle-btn');
      if (btn) btn.classList.toggle('active', this.showSentenceTranslations);

      document.querySelectorAll('.p-trans-box, .sentence-translation-box').forEach(box => {
        box.style.display = this.showSentenceTranslations ? 'block' : 'none';
      });
    },

    switchTab(tab) {
      this.activeTab = tab;
      document.querySelectorAll('.reader-tab').forEach(t => t.classList.remove('active'));
      event.currentTarget.classList.add('active');

      const textTab = document.getElementById('tab-content-text');
      const exTab = document.getElementById('tab-content-exercises');
      const vocabTab = document.getElementById('tab-content-vocab');

      if (textTab) textTab.style.display = (tab === 'text') ? 'block' : 'none';
      if (exTab) exTab.style.display = (tab === 'exercises') ? 'block' : 'none';
      if (vocabTab) vocabTab.style.display = (tab === 'vocab') ? 'block' : 'none';

      if (tab !== 'text') {
        this.hidePopover();
      }
    },

    /* =========================================================================
       TAB 2: EXERCISES (ÜBUNGEN)
       ========================================================================= */
    renderExercisesHTML(text) {
      const exercises = text.exercises || [];
      if (!exercises.length) {
        return '<div class="exercise-card"><p>لا توجد تمارين إضافية مسجلة لهذا النص.</p></div>';
      }

      return `
        <div class="lese-exercises-container fade-in">
          <div class="lese-header-card" style="margin-bottom:0;">
            <h2 style="font-size:1.35rem; font-weight:800; margin-bottom:6px;">✍️ تمارين الفهم والاستيعاب والقواعد</h2>
            <p style="color:var(--text-secondary); font-size:0.95rem;">
              تمارين أصلية مأخوذة من صفحة النص والصفحة التالية في كتاب Kontext B1+. اختر الإجابة ثم اضغط على "تحقق من الإجابة".
            </p>
          </div>

          ${exercises.map((ex, idx) => `
            <div class="exercise-card" id="ex-card-${ex.id}">
              <div class="exercise-header">
                <span class="exercise-type-badge">${Utils.escapeHtml(ex.type || 'تمرين')} • سؤال ${idx + 1}</span>
                <span style="font-size:0.85rem; color:var(--text-muted);">${Utils.escapeHtml(text.bookPage)}</span>
              </div>
              <h3 class="exercise-prompt">${Utils.escapeHtml(ex.prompt)}</h3>
              
              <div class="exercise-options" id="ex-options-${ex.id}">
                ${(ex.options || []).map((opt, oIdx) => `
                  <button type="button" class="exercise-option-btn" 
                    data-ex-id="${ex.id}" 
                    data-opt-idx="${oIdx}" 
                    onclick="LesetexteReader.selectOption('${ex.id}', ${oIdx})">
                    <span style="opacity:0.6;">${String.fromCharCode(65 + oIdx)}.</span>
                    <span>${Utils.escapeHtml(opt.text)}</span>
                  </button>
                `).join('')}
              </div>

              <div class="exercise-feedback-box" id="ex-feedback-${ex.id}"></div>

              <div style="display:flex; justify-content:flex-end; margin-top:14px;">
                <button type="button" class="exercise-check-btn" id="ex-btn-${ex.id}" onclick="LesetexteReader.checkExercise('${ex.id}')">
                  تحقق من الإجابة ✓
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    },

    selectOption(exId, optIdx) {
      const container = document.getElementById(`ex-options-${exId}`);
      if (!container) return;
      container.querySelectorAll('.exercise-option-btn').forEach(btn => {
        btn.classList.remove('selected');
      });
      const selected = container.querySelector(`[data-opt-idx="${optIdx}"]`);
      if (selected) selected.classList.add('selected');
    },

    checkExercise(exId) {
      const ex = (this.currentText.exercises || []).find(e => e.id === exId);
      if (!ex) return;

      const container = document.getElementById(`ex-options-${exId}`);
      const feedbackBox = document.getElementById(`ex-feedback-${exId}`);
      const checkBtn = document.getElementById(`ex-btn-${exId}`);
      const selectedBtn = container ? container.querySelector('.exercise-option-btn.selected') : null;

      if (!selectedBtn) {
        Utils.showToast('يرجى اختيار إجابة أولاً!', 'warning');
        return;
      }

      const selectedIdx = parseInt(selectedBtn.getAttribute('data-opt-idx'), 10);
      const isCorrect = (selectedIdx === ex.correctIndex);

      container.querySelectorAll('.exercise-option-btn').forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === ex.correctIndex) {
          btn.classList.add('correct');
        } else if (idx === selectedIdx && !isCorrect) {
          btn.classList.add('wrong');
        }
      });

      if (feedbackBox) {
        feedbackBox.className = `exercise-feedback-box ${isCorrect ? 'correct' : 'wrong'}`;
        feedbackBox.innerHTML = `
          <strong>${isCorrect ? '✅ إجابة صحيحة! أحسنت' : '❌ إجابة خاطئة'}</strong>
          <p style="margin-top:6px;">${Utils.escapeHtml(ex.explanation)}</p>
        `;
      }

      if (checkBtn) {
        checkBtn.style.display = 'none';
      }

      if (isCorrect) {
        if (window.Storage && Storage.addXP) {
          Storage.addXP(15);
          if (window.App && App.updateHeaderStats) App.updateHeaderStats();
        }
        Utils.showToast('أحسنت! +15 XP 🌟', 'success');
      }
    },

    /* =========================================================================
       TAB 3: VOCABULARY
       ========================================================================= */
    renderVocabHTML(text) {
      const vocab = text.keyVocab || [];
      if (!vocab.length) {
        return '<div class="exercise-card"><p>لا توجد مفردات رئيسية مسجلة لهذا النص.</p></div>';
      }

      return `
        <div class="lese-vocab-section" style="margin-top:0; border-top:none; padding-top:0;">
          <h2 class="lese-section-title">💡 أهم المفردات والتعبيرات في النص</h2>
          <div class="lese-vocab-grid">
            ${vocab.map(v => {
              const articleClass = Utils.getArticleClass(v.article);
              return `
                <div class="lese-vocab-card">
                  <div>
                    <div class="lese-vocab-word-de">
                      <span class="${articleClass}">${Utils.escapeHtml(v.de)}</span>
                      <button type="button" class="sentence-audio-btn" onclick="Speech.speak('${v.de.replace(/'/g, "\\'")}')" title="استمع">
                        🔊
                      </button>
                    </div>
                    ${v.plural ? `<div style="font-size:0.8rem; color:var(--text-muted); direction:ltr; text-align:left;">Pl: ${Utils.escapeHtml(v.plural)}</div>` : ''}
                    <div class="lese-vocab-word-ar">${Utils.escapeHtml(v.ar)}</div>
                  </div>
                  ${v.example ? `
                    <div class="lese-vocab-example">
                      "${Utils.escapeHtml(v.example)}"
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }
  };

  window.LesetexteReader = LesetexteReader;
})();
