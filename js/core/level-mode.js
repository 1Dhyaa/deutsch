// website/js/core/level-mode.js — Level Mode Manager & Switcher Controller
// Manages switching between [A1-B1 Grundstufe] and [B2 Meister & Goethe Prüfung]

(function () {
  'use strict';

  window.DM = window.DM || {};

  const STORAGE_KEY = 'dmx.level_mode';
  const SETTINGS_KEY = 'dmx.settings';
  const MODES = {
    PRIMARY: 'a1-b1',
    B2: 'b2'
  };

  let _currentMode = MODES.PRIMARY;
  let _initialized = false;

  const levelMode = {
    // Current mode getter
    get() {
      return _currentMode;
    },

    // Boolean helper
    isB2() {
      return _currentMode === MODES.B2;
    },

    // Set level mode
    set(newMode, notify = true) {
      if (newMode !== MODES.PRIMARY && newMode !== MODES.B2) {
        newMode = MODES.PRIMARY;
      }

      const prev = _currentMode;
      _currentMode = newMode;

      // 1. Update localStorage
      try {
        localStorage.setItem(STORAGE_KEY, newMode);
      } catch (e) {
        console.warn('[LevelMode] localStorage write error:', e);
      }

      // 2. Update HTML attribute for CSS theme & scoping
      document.documentElement.setAttribute('data-level', newMode);

      // 3. Update Header Switch UI component
      this.updateSwitchUI();

      // 4. Update Brand Logo Badge
      this.updateLogoBadge();

      // 5. Update Navigation items based on mode
      this.updateNavigation();

      // 6. Check for First-Time B2 Welcome Sheet
      if (newMode === MODES.B2 && notify) {
        this.checkWelcomeSheet();
      }

      // 7. Emit levelchange event on the DM Event Bus
      if (window.DM && window.DM.bus) {
        window.DM.bus.emit('dm:levelchange', { mode: newMode, prev });
      }

      // 8. Re-evaluate current route if view needs to adapt
      if (notify && window.Router && typeof window.Router.handleRoute === 'function') {
        window.Router.handleRoute();
      }

      return _currentMode;
    },

    // Toggle between A1-B1 and B2
    toggle(notify = true) {
      const nextMode = this.isB2() ? MODES.PRIMARY : MODES.B2;
      return this.set(nextMode, notify);
    },

    // Render the Header Switcher Component into a container
    renderSwitcher(containerEl) {
      if (!containerEl) return;

      const isB2 = this.isB2();
      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();

      containerEl.innerHTML = `
        <div class="level-switch-container" role="radiogroup" aria-label="Level Auswahl">
          <div class="level-switch-thumb ${isB2 ? 'thumb-b2' : 'thumb-primary'}"></div>
          <button type="button" 
                  role="radio" 
                  aria-checked="${!isB2}" 
                  class="level-switch-btn ${!isB2 ? 'active' : ''}" 
                  data-mode="a1-b1" 
                  id="level-btn-primary">
            <span class="level-btn-icon">🇩🇪</span>
            <span class="level-btn-text-full">${isDe ? 'A1–B1 Grundstufe' : 'A1–B1 الأساسي'}</span>
            <span class="level-btn-text-short">A1–B1</span>
          </button>
          <button type="button" 
                  role="radio" 
                  aria-checked="${isB2}" 
                  class="level-switch-btn ${isB2 ? 'active' : ''}" 
                  data-mode="b2" 
                  id="level-btn-b2">
            <span class="level-btn-icon">🚀</span>
            <span class="level-btn-text-full">${isDe ? 'B2 Meister' : 'B2 مايستر غوته'}</span>
            <span class="level-btn-text-short">B2 🚀</span>
          </button>
        </div>
      `;

      this.bindSwitcherEvents(containerEl);
    },

    bindSwitcherEvents(containerEl) {
      const btns = containerEl.querySelectorAll('.level-switch-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetMode = btn.getAttribute('data-mode');
          if (targetMode !== _currentMode) {
            this.set(targetMode, true);
          }
        });
      });

      // Keyboard accessibility (Left/Right arrow keys)
      containerEl.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          this.toggle(true);
          const activeBtn = containerEl.querySelector('.level-switch-btn.active');
          if (activeBtn) activeBtn.focus();
        }
      });
    },

    updateSwitchUI() {
      const isB2 = this.isB2();
      const thumb = document.querySelector('.level-switch-thumb');
      if (thumb) {
        thumb.classList.toggle('thumb-b2', isB2);
        thumb.classList.toggle('thumb-primary', !isB2);
      }

      document.querySelectorAll('.level-switch-btn').forEach(btn => {
        const mode = btn.getAttribute('data-mode');
        const isActive = (mode === _currentMode);
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-checked', String(isActive));
      });
    },

    updateLogoBadge() {
      const brandLogo = document.querySelector('.brand-logo');
      if (!brandLogo) return;

      let badge = brandLogo.querySelector('.b2-brand-badge');
      if (this.isB2()) {
        if (!badge) {
          badge = document.createElement('span');
          badge.className = 'b2-brand-badge fade-in';
          badge.textContent = 'B2 MEISTER';
          brandLogo.appendChild(badge);
        }
      } else {
        if (badge) badge.remove();
      }
    },

    updateNavigation() {
      const isB2 = this.isB2();
      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();

      // Update sidebar subtitle
      const brandSub = document.querySelector('.brand-sub');
      if (brandSub) {
        if (isB2) {
          brandSub.textContent = isDe 
            ? 'Goethe B2 Vorbereitung & Meisterstufe' 
            : 'التحضير المكثف لامتحان Goethe B2';
        } else {
          brandSub.textContent = isDe 
            ? 'A1-Wiederholung & A2-Lehrplan' 
            : 'مراجعة A1 + منهج A2';
        }
      }

      // Update or add B2-specific nav links (e.g. Funktionsverben, Friends)
      let fvNav = document.querySelector('a[href="#/funktionsverben"]');
      let friendsNav = document.querySelector('a[href="#/friends"]');

      // Friends nav link in sidebar
      if (!friendsNav) {
        const sidebarNav = document.querySelector('.sidebar-nav');
        if (sidebarNav) {
          friendsNav = document.createElement('a');
          friendsNav.href = '#/friends';
          friendsNav.className = 'nav-item';
          friendsNav.innerHTML = `
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <span>${isDe ? 'Lernfreunde & Rangliste' : 'مجتمع الأصدقاء والمتصدرين'}</span>
          `;
          // Insert after progress or at bottom of nav
          sidebarNav.appendChild(friendsNav);
        }
      }

      // Funktionsverben nav link in sidebar (shown in B2 mode)
      if (!fvNav) {
        const sidebarNav = document.querySelector('.sidebar-nav');
        if (sidebarNav) {
          fvNav = document.createElement('a');
          fvNav.href = '#/funktionsverben';
          fvNav.className = 'nav-item b2-only-nav';
          fvNav.innerHTML = `
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>${isDe ? 'Funktionsverben-Studio' : 'استوديو الأفعال الوظيفية B2'}</span>
          `;
          // Insert after verbs
          const verbsLink = document.querySelector('a[href="#/verbs"]');
          if (verbsLink && verbsLink.nextSibling) {
            sidebarNav.insertBefore(fvNav, verbsLink.nextSibling);
          } else {
            sidebarNav.appendChild(fvNav);
          }
        }
      }

      if (fvNav) {
        fvNav.style.display = isB2 ? 'flex' : 'none';
      }
    },

    checkWelcomeSheet() {
      try {
        const raw = localStorage.getItem(SETTINGS_KEY);
        const settings = raw ? JSON.parse(raw) : {};
        if (settings.b2WelcomeSeen) return;

        this.showWelcomeSheet();
        settings.b2WelcomeSeen = true;
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      } catch (e) {}
    },

    showWelcomeSheet() {
      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();
      const modal = document.createElement('div');
      modal.className = 'modal-overlay fade-in';
      modal.style.display = 'flex';
      modal.innerHTML = `
        <div class="modal-card b2-welcome-card" style="max-width: 540px;">
          <div class="modal-header">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="font-size:1.6rem;">🚀</span>
              <h3 style="font-size:1.3rem; font-weight:700; color:var(--accent);">
                ${isDe ? 'Willkommen im B2 Meister-Modus!' : 'مرحباً بك في وضع B2 مايستر!'}
              </h3>
            </div>
            <button class="modal-close-btn" onclick="this.closest('.modal-overlay').remove()">&times;</button>
          </div>
          <div class="modal-body" style="line-height:1.75; font-size:0.95rem;">
            <p style="margin-bottom:14px; font-weight:600;">
              ${isDe 
                ? 'Du hast den B2-Prüfungsmodus für das Goethe-Zertifikat B2 aktiviert. Das ändert sich für dich:' 
                : 'لقد قمت بتفعيل بيئة التحضير المتقدمة لامتحان Goethe B2 الرسمي! إليك ما تقدمه لك هذه البيئة:'}
            </p>
            <ul style="padding-right:20px; padding-left:20px; margin-bottom:18px; display:flex; flex-direction:column; gap:10px;">
              <li><strong>📖 ${isDe ? '4-Module Prüfungssimulator' : 'محاكي الامتحان الكامل (4 وحدات)'}:</strong> ${isDe ? 'Lesen (65 Min), Hören (40 Min), Schreiben (75 Min), Sprechen (15 Min).' : 'القراءة، الاستماع، التعبير الكتابي، والمحادثة الشفهية الرسمية.'}</li>
              <li><strong>🎯 ${isDe ? 'Funktionsverbgefüge-Studio' : 'استوديو الأفعال الوظيفية B2'}:</strong> ${isDe ? '60 feste Verbindungen mit Beispielen, Audio und interaktiven Übungen.' : '60 تركيبة وظيفية حاسمة للنجاح في B2 مع النطق والتمارين.'}</li>
              <li><strong>⏱️ ${isDe ? 'Aktiver Lernzeit-Tracker' : 'متتبع ساعات المذاكرة الفعلي'}:</strong> ${isDe ? 'Erfasst deine täglichen Lernminuten, Streaks und Aktivitäts-Heatmap.' : 'حساب دقيق لوقت دراستك الفعلي يومياً مع خريطة النشاط.'}</li>
              <li><strong>👥 ${isDe ? 'Freunde & Rangliste' : 'نظام الأصدقاء وقائمة المتصدرين'}:</strong> ${isDe ? 'Lerne gemeinsam mit Freunden, vergleiche Fortschritte und nimm Herausforderungen an.' : 'مشاركة التقدم مع أصدقائك والتنافس الشريف.'}</li>
            </ul>
            <div style="background:var(--accent-light); padding:12px 16px; border-radius:var(--radius-md); font-size:0.88rem;">
              💡 <em>${isDe ? 'Du kannst jederzeit oben über den Umschalter wieder zu A1–B1 zurückkehren.' : 'يمكنك في أي وقت التبديل بين A1–B1 و B2 عبر الزر الموجود في الشريط العلوي.'}</em>
            </div>
          </div>
          <div class="modal-footer" style="display:flex; justify-content:flex-end; padding-top:14px; border-top:1px solid var(--border);">
            <button type="button" class="btn btn-primary" onclick="this.closest('.modal-overlay').remove()">
              ${isDe ? 'Los geht’s! 🎯' : 'ابدأ الآن 🎯'}
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    },

    init() {
      if (_initialized) return;
      _initialized = true;

      // 1. Read stored level mode (default 'a1-b1')
      let saved = MODES.PRIMARY;
      try {
        saved = localStorage.getItem(STORAGE_KEY) || MODES.PRIMARY;
      } catch (e) {}

      // 2. Apply without notification toast on initial boot
      this.set(saved, false);
    }
  };

  window.DM.level = levelMode;
})();
