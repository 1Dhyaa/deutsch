// website/js/b2/funktionsverben-studio.js — B2 Funktionsverbgefüge Studio
// Interactive learning studio for the 60 most critical B2 Nomen-Verb-Verbindungen.

(function () {
  'use strict';

  window.DM = window.DM || {};

  const STORAGE_KEY = 'dmx.fv_mastered';
  let _items = [];
  let _currentTab = 'katalog'; // 'katalog' | 'flashcards' | 'quiz'
  let _searchQuery = '';
  let _selectedVerb = 'all';
  let _flashcardIndex = 0;
  let _flashcardFlipped = false;
  let _quizIndex = 0;
  let _quizScore = 0;

  const Studio = {
    async render(containerEl) {
      const container = containerEl || document.getElementById('app-content');
      if (!container) return;

      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();
      if (window.App && window.App.setBreadcrumb) {
        window.App.setBreadcrumb(isDe ? 'Funktionsverbgefüge-Studio (60 Ausdrücke)' : 'استوديو الأفعال والتراكيب الوظيفية (60 تعبيراً)');
      }

      // Load items if not yet loaded
      if (_items.length === 0) {
        container.innerHTML = '<div class="spinner"></div>';
        try {
          if (window.DM && window.DM.lazy) {
            _items = await window.DM.lazy.loadJson('data/b2/funktionsverben.json');
          } else {
            const res = await fetch('data/b2/funktionsverben.json');
            _items = await res.json();
          }
        } catch (e) {
          container.innerHTML = `<div class="card text-center" style="padding:40px;"><h2>Fehler beim Laden</h2><p>${Utils.escapeHtml(e.message)}</p></div>`;
          return;
        }
      }

      const masteredList = this.getMasteredList();
      const masteredCount = masteredList.length;
      const totalCount = _items.length || 60;
      const percent = Math.round((masteredCount / totalCount) * 100);

      container.innerHTML = `
        <div class="content-container fade-in">
          <!-- 1. Header Banner -->
          <div class="hero-banner b2-hero-card" style="border-radius:var(--radius-lg); padding:24px; margin-bottom:24px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px;">
              <div>
                <span class="badge" style="background:var(--accent); color:#fff; font-weight:700; margin-bottom:8px;">
                  B2 MEISTER-WORTSCHATZ
                </span>
                <h1 style="font-size:1.6rem; font-weight:800; color:var(--text-primary); margin:4px 0;">
                  ${isDe ? 'Funktionsverbgefüge-Studio (60 FVG)' : 'استوديو الأفعال والتراكيب الوظيفية (60 تركيبة)'}
                </h1>
                <p style="color:var(--text-secondary); margin:0; font-size:0.95rem; max-width:620px; line-height:1.6;">
                  ${isDe 
                    ? 'Feste Nomen-Verb-Verbindungen sind der Schlüssel zu hohen Punktzahlen im B2-Schreiben und B2-Sprechen.' 
                    : 'التراكيب الوظيفية هي السر الذهبي للحصول على أعلى الدرجات في كتابة المحتوى والتعبير الشفهي B2.'}
                </p>
              </div>

              <!-- Mastery Card -->
              <div class="card" style="padding:16px 20px; background:var(--bg-secondary); border:1.5px solid var(--border); min-width:200px; text-align:center;">
                <div style="font-size:0.82rem; font-weight:700; color:var(--text-muted); margin-bottom:4px;">
                  ${isDe ? 'GEMEISTERT' : 'تم إتقانها'}
                </div>
                <div style="font-size:1.8rem; font-weight:800; color:var(--success); line-height:1;">
                  ${masteredCount} / ${totalCount}
                </div>
                <div class="progress-bar" style="height:6px; margin:8px 0 4px 0;">
                  <div class="progress-bar-fill" style="width:${percent}%; background:var(--success);"></div>
                </div>
                <small style="color:var(--text-muted); font-size:0.75rem;">${percent}% ${isDe ? 'vollständig' : 'مكتمل'}</small>
              </div>
            </div>

            <!-- Mode Selector Tabs -->
            <div style="display:flex; gap:10px; margin-top:20px; flex-wrap:wrap;">
              <button type="button" class="btn ${_currentTab === 'katalog' ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="DM.funktionsverbenStudio.switchTab('katalog')">
                📖 ${isDe ? 'Katalog & Suche' : 'الفهرس والبحث'}
              </button>
              <button type="button" class="btn ${_currentTab === 'flashcards' ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="DM.funktionsverbenStudio.switchTab('flashcards')">
                🗂️ ${isDe ? 'Karteikarten-Modus' : 'بطاقات المذاكرة (Flashcards)'}
              </button>
              <button type="button" class="btn ${_currentTab === 'quiz' ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="DM.funktionsverbenStudio.switchTab('quiz')">
                🎯 ${isDe ? 'Schnell-Quiz' : 'الاختبار السريع'}
              </button>
            </div>
          </div>

          <!-- 2. Active Tab Content -->
          <div id="fv-tab-content">
            ${this.renderActiveTab()}
          </div>
        </div>
      `;

      this.bindEvents();
    },

    switchTab(tab) {
      _currentTab = tab;
      const contentEl = document.getElementById('fv-tab-content');
      if (contentEl) {
        contentEl.innerHTML = this.renderActiveTab();
        this.bindEvents();
      } else {
        this.render();
      }
    },

    renderActiveTab() {
      if (_currentTab === 'flashcards') return this.renderFlashcardsTab();
      if (_currentTab === 'quiz') return this.renderQuizTab();
      return this.renderKatalogTab();
    },

    // ==========================================
    // TAB 1: KATALOG & FILTER
    // ==========================================
    renderKatalogTab() {
      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();
      const filtered = this.getFilteredItems();
      const masteredSet = new Set(this.getMasteredList());

      // Extract unique verbs for filter dropdown
      const verbs = Array.from(new Set(_items.map(i => i.verb))).sort();

      return `
        <!-- Filter and Search Bar -->
        <div class="card" style="padding:16px 20px; margin-bottom:20px; display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
          <div style="flex:1; min-width:220px;">
            <input type="text" 
                   id="fv-search-input" 
                   class="form-input" 
                   placeholder="${isDe ? '🔍 Ausdruck, Verb oder Bedeutung suchen...' : '🔍 ابحث عن تركيب، فعل، أو معنى بالعربية...'}" 
                   value="${Utils.escapeHtml(_searchQuery)}" 
                   style="width:100%;">
          </div>

          <div style="min-width:180px;">
            <select id="fv-verb-filter" class="form-input" style="width:100%;">
              <option value="all">${isDe ? 'Alle Verben (60)' : 'جميع الأفعال (60)'}</option>
              ${verbs.map(v => `<option value="${v}" ${_selectedVerb === v ? 'selected' : ''}>${v}</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- Items Counter -->
        <div style="margin-bottom:14px; font-size:0.9rem; color:var(--text-secondary); font-weight:600;">
          ${filtered.length} ${isDe ? 'Ausdrücke gefunden' : 'تركيبة معروضة'}
        </div>

        <!-- Grid of Cards -->
        <div class="grid-2" style="gap:16px;">
          ${filtered.map(item => {
            const isMastered = masteredSet.has(item.id);
            return `
              <div class="card fv-card ${isMastered ? 'fv-mastered' : ''}" style="padding:20px; border:1px solid ${isMastered ? 'var(--success)' : 'var(--border)'}; background:var(--bg-card); display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px; margin-bottom:8px;">
                    <div>
                      <div class="de-text" dir="ltr" style="font-size:1.15rem; font-weight:800; color:var(--accent);">
                        ${Utils.escapeHtml(item.gefuege)}
                      </div>
                      <div class="de-text" dir="ltr" style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">
                        = <strong style="color:var(--text-primary);">${Utils.escapeHtml(item.simpleVerb)}</strong>
                        ${item.preposition ? `<span class="badge" style="margin-inline-start:6px; background:var(--bg-primary);">${item.preposition} + ${item.kasus || 'Dat'}</span>` : ''}
                      </div>
                    </div>

                    <div style="display:flex; align-items:center; gap:6px;">
                      <button type="button" class="audio-btn" onclick="Speech.speak('${item.gefuege.replace(/'/g, "\\'")}')" title="استمع للنطق">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.08"/></svg>
                      </button>
                    </div>
                  </div>

                  <div style="font-weight:700; color:var(--text-primary); margin:8px 0 10px 0; font-size:0.95rem;">
                    ${Utils.escapeHtml(item.meaningAr)}
                  </div>

                  <div style="background:var(--bg-primary); padding:10px 14px; border-radius:var(--radius-sm); border:1px solid var(--border-light); margin-bottom:12px;">
                    <div class="de-text" dir="ltr" style="font-size:0.9rem; line-height:1.5; color:var(--text-primary); margin-bottom:4px;">
                      ${Utils.escapeHtml(item.exampleDe)}
                    </div>
                    <div style="font-size:0.82rem; color:var(--text-muted);">
                      ${Utils.escapeHtml(item.exampleAr)}
                    </div>
                  </div>
                </div>

                <div style="display:flex; justify-content:flex-end;">
                  <button type="button" 
                          class="btn btn-sm ${isMastered ? 'btn-success' : 'btn-secondary'}" 
                          onclick="DM.funktionsverbenStudio.toggleMaster('${item.id}')">
                    ${isMastered ? (isDe ? '✓ Gemeistert' : '✓ تم الإتقان') : (isDe ? 'Als gemeistert markieren' : 'تحديد كـ متقن')}
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    },

    // ==========================================
    // TAB 2: FLASHCARDS
    // ==========================================
    renderFlashcardsTab() {
      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();
      if (_items.length === 0) return '';

      const current = _items[_flashcardIndex % _items.length];
      const masteredSet = new Set(this.getMasteredList());
      const isMastered = masteredSet.has(current.id);

      return `
        <div style="max-width:540px; margin:0 auto;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <span style="font-size:0.9rem; font-weight:700; color:var(--text-muted);">
              ${isDe ? 'Karte' : 'بطاقة'} ${_flashcardIndex + 1} / ${_items.length}
            </span>
            <span class="badge" style="background:${isMastered ? 'var(--success)' : 'var(--bg-primary)'}; color:${isMastered ? '#fff' : 'var(--text-secondary)'};">
              ${isMastered ? (isDe ? '✓ Gemeistert' : '✓ متقن') : (isDe ? 'Noch lernen' : 'قيد التعلم')}
            </span>
          </div>

          <!-- Flip Card -->
          <div class="card flashcard-box" 
               onclick="DM.funktionsverbenStudio.flipCard()" 
               style="min-height:280px; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:32px 24px; cursor:pointer; border:2px solid var(--accent); position:relative;">
            
            ${!_flashcardFlipped ? `
              <!-- FRONT -->
              <span style="font-size:0.8rem; color:var(--text-muted); font-weight:700; text-transform:uppercase; margin-bottom:12px;">
                ${isDe ? 'Ausdruck (Klicke zum Aufdecken)' : 'التركيب الوظيفي (انقر لكشف المعنى)'}
              </span>
              <div class="de-text" dir="ltr" style="font-size:1.8rem; font-weight:800; color:var(--accent); margin-bottom:16px;">
                ${Utils.escapeHtml(current.gefuege)}
              </div>
              <button type="button" class="audio-btn" style="width:44px; height:44px;" onclick="event.stopPropagation(); Speech.speak('${current.gefuege.replace(/'/g, "\\'")}')" title="استمع">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.08"/></svg>
              </button>
            ` : `
              <!-- BACK -->
              <div style="margin-bottom:10px;">
                <span class="badge" style="background:var(--accent-light); color:var(--accent); font-weight:700; font-size:0.85rem;">
                  = ${Utils.escapeHtml(current.simpleVerb)}
                </span>
              </div>
              <div style="font-size:1.4rem; font-weight:800; color:var(--text-primary); margin-bottom:14px;">
                ${Utils.escapeHtml(current.meaningAr)}
              </div>
              <div class="de-text" dir="ltr" style="font-size:0.95rem; color:var(--text-secondary); line-height:1.6; margin-bottom:6px;">
                „${Utils.escapeHtml(current.exampleDe)}“
              </div>
              <div style="font-size:0.85rem; color:var(--text-muted);">
                ${Utils.escapeHtml(current.exampleAr)}
              </div>
            `}
          </div>

          <!-- Controls -->
          <div style="display:flex; justify-content:space-between; gap:12px; margin-top:18px;">
            <button type="button" class="btn btn-secondary" style="flex:1;" onclick="DM.funktionsverbenStudio.prevCard()">
              ➔ ${isDe ? 'Zurück' : 'السابق'}
            </button>
            <button type="button" class="btn ${isMastered ? 'btn-success' : 'btn-primary'}" style="flex:1;" onclick="DM.funktionsverbenStudio.toggleMaster('${current.id}')">
              ${isMastered ? '✓ ' + (isDe ? 'Gemeistert' : 'متقن') : '⭐ ' + (isDe ? 'Ich kann das' : 'أتقنت هذا')}
            </button>
            <button type="button" class="btn btn-secondary" style="flex:1;" onclick="DM.funktionsverbenStudio.nextCard()">
              ${isDe ? 'Weiter' : 'التالي'} ➔
            </button>
          </div>
        </div>
      `;
    },

    flipCard() {
      _flashcardFlipped = !_flashcardFlipped;
      const contentEl = document.getElementById('fv-tab-content');
      if (contentEl) contentEl.innerHTML = this.renderFlashcardsTab();
    },

    nextCard() {
      _flashcardIndex = (_flashcardIndex + 1) % _items.length;
      _flashcardFlipped = false;
      const contentEl = document.getElementById('fv-tab-content');
      if (contentEl) contentEl.innerHTML = this.renderFlashcardsTab();
    },

    prevCard() {
      _flashcardIndex = (_flashcardIndex - 1 + _items.length) % _items.length;
      _flashcardFlipped = false;
      const contentEl = document.getElementById('fv-tab-content');
      if (contentEl) contentEl.innerHTML = this.renderFlashcardsTab();
    },

    // ==========================================
    // TAB 3: QUICK QUIZ
    // ==========================================
    renderQuizTab() {
      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();
      if (_items.length < 4) return '';

      const current = _items[_quizIndex % _items.length];

      // Pick 3 random wrong options
      const otherItems = _items.filter(i => i.id !== current.id);
      const wrong = [];
      const shuffledOthers = [...otherItems].sort(() => Math.random() - 0.5);
      for (let i = 0; i < 3; i++) {
        wrong.push(shuffledOthers[i].gefuege);
      }

      const options = [current.gefuege, ...wrong].sort(() => Math.random() - 0.5);

      return `
        <div style="max-width:560px; margin:0 auto;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
            <span style="font-weight:700; color:var(--text-muted);">
              ${isDe ? 'Frage' : 'السؤال'} ${_quizIndex + 1}
            </span>
            <span class="badge" style="background:var(--accent); color:#fff; font-weight:700;">
              ⭐ Score: ${_quizScore}
            </span>
          </div>

          <div class="card" style="padding:28px 22px; text-align:center; margin-bottom:20px;">
            <span style="font-size:0.85rem; color:var(--text-muted); font-weight:700; display:block; margin-bottom:6px;">
              ${isDe ? 'Welches Funktionsverbgefüge ersetzt:' : 'ما هو التركيب الوظيفي المكافئ للفعل:'}
            </span>
            <div class="de-text" dir="ltr" style="font-size:1.6rem; font-weight:800; color:var(--accent); margin-bottom:8px;">
              „${Utils.escapeHtml(current.simpleVerb)}“
            </div>
            <div style="font-size:1.05rem; font-weight:600; color:var(--text-secondary);">
              (${Utils.escapeHtml(current.meaningAr)})
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:10px;">
            ${options.map(opt => `
              <button type="button" 
                      class="btn btn-secondary fv-quiz-btn de-text" 
                      dir="ltr" 
                      style="padding:14px 18px; text-align:start; justify-content:space-between; font-size:1.05rem;" 
                      onclick="DM.funktionsverbenStudio.checkQuizAnswer(this, '${opt.replace(/'/g, "\\'")}', '${current.gefuege.replace(/'/g, "\\'")}')">
                <span>${Utils.escapeHtml(opt)}</span>
                <span>➔</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;
    },

    checkQuizAnswer(btnEl, selected, correct) {
      const isCorrect = (selected === correct);
      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();

      document.querySelectorAll('.fv-quiz-btn').forEach(b => {
        b.disabled = true;
        if (b.innerText.includes(correct)) {
          b.style.background = 'var(--success)';
          b.style.color = '#fff';
        }
      });

      if (isCorrect) {
        btnEl.style.background = 'var(--success)';
        btnEl.style.color = '#fff';
        _quizScore += 10;
        if (window.Storage) window.Storage.addXP(10);
        if (window.Utils && window.Utils.showToast) {
          window.Utils.showToast(isDe ? 'Ausgezeichnet! +10 XP 🎯' : 'إجابة صحيحة وممتازة! +10 XP 🎯', 'success', 1800);
        }
      } else {
        btnEl.style.background = 'var(--danger)';
        btnEl.style.color = '#fff';
        if (window.Utils && window.Utils.showToast) {
          window.Utils.showToast(isDe ? `Leider falsch. Richtig war: ${correct}` : `إجابة خاطئة. الصحيح: ${correct}`, 'error', 2500);
        }
      }

      setTimeout(() => {
        _quizIndex += 1;
        const contentEl = document.getElementById('fv-tab-content');
        if (contentEl) contentEl.innerHTML = this.renderQuizTab();
      }, 1500);
    },

    // ==========================================
    // FILTERING & STORAGE HELPERS
    // ==========================================
    getFilteredItems() {
      let list = [..._items];
      if (_selectedVerb !== 'all') {
        list = list.filter(i => i.verb === _selectedVerb);
      }
      if (_searchQuery) {
        const q = _searchQuery.toLowerCase().trim();
        list = list.filter(i => 
          i.gefuege.toLowerCase().includes(q) ||
          i.simpleVerb.toLowerCase().includes(q) ||
          i.meaningAr.toLowerCase().includes(q) ||
          i.exampleDe.toLowerCase().includes(q)
        );
      }
      return list;
    },

    getMasteredList() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    },

    toggleMaster(id) {
      let list = this.getMasteredList();
      const idx = list.indexOf(id);
      if (idx === -1) {
        list.push(id);
      } else {
        list.splice(idx, 1);
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      } catch (e) {}

      // Re-render
      const contentEl = document.getElementById('fv-tab-content');
      if (contentEl) {
        contentEl.innerHTML = this.renderActiveTab();
        this.bindEvents();
      }

      // Check achievements
      if (window.DM && window.DM.achievements) {
        window.DM.achievements.check();
      }
    },

    bindEvents() {
      const searchInput = document.getElementById('fv-search-input');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          _searchQuery = e.target.value;
          const contentEl = document.getElementById('fv-tab-content');
          if (contentEl) contentEl.innerHTML = this.renderActiveTab();
          // Restore focus & cursor position
          const reInput = document.getElementById('fv-search-input');
          if (reInput) {
            reInput.focus();
            reInput.value = _searchQuery;
          }
        });
      }

      const verbFilter = document.getElementById('fv-verb-filter');
      if (verbFilter) {
        verbFilter.addEventListener('change', (e) => {
          _selectedVerb = e.target.value;
          const contentEl = document.getElementById('fv-tab-content');
          if (contentEl) {
            contentEl.innerHTML = this.renderActiveTab();
            this.bindEvents();
          }
        });
      }
    }
  };

  window.DM.funktionsverbenStudio = Studio;
})();
