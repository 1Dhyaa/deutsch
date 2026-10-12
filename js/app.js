// app.js — Main Application Controller & View Handlers

const App = {
  init() {
    // 0. Initialize I18n & Language Switcher
    if (window.I18n) {
      I18n.init();
      const langBtn = document.getElementById('lang-toggle-btn');
      if (langBtn) {
        langBtn.addEventListener('click', () => {
          I18n.toggleLang();
          this.updateHeaderStats();
        });
      }
    }

    // 1. Initialize Theme
    Storage.applyTheme();
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const newTheme = Storage.toggleTheme();
        const msg = (window.I18n && I18n.isGerman())
          ? (newTheme === 'dark' ? 'Dunkelmodus aktiviert 🌙' : 'Hellmodus aktiviert ☀️')
          : (newTheme === 'dark' ? 'تم تفعيل الوضع الليلي 🌙' : 'تم تفعيل الوضع النهاري ☀️');
        Utils.showToast(msg, 'info', 1500);
      });
    }

    // 2. Initialize Speech Synthesis
    Speech.init();

    // 3. Update Streak on start
    Storage.updateStreak();
    this.updateHeaderStats();

    // 4. Setup Routes
    this.setupRoutes();

    // 5. Setup Audio Settings Modal
    this.setupAudioSettingsModal();

    // 6. Initialize Router
    Router.init();
  },

  setupAudioSettingsModal() {
    const modalBtn = document.getElementById('audio-settings-btn');
    const overlay = document.getElementById('audio-modal-overlay');
    const closeBtn = document.getElementById('close-audio-modal');
    const cancelBtn = document.getElementById('cancel-audio-settings');
    const saveBtn = document.getElementById('save-audio-settings');
    const testBtn = document.getElementById('test-voice-btn');
    const providerRadios = document.querySelectorAll('input[name="voice-provider"]');
    const openaiPanel = document.getElementById('openai-settings-panel');
    const elevenPanel = document.getElementById('elevenlabs-settings-panel');
    const openaiKeyInput = document.getElementById('openai-api-key-input');
    const openaiVoiceSelect = document.getElementById('openai-voice-select');
    const openaiSpeedSelect = document.getElementById('openai-speed-select');
    const elevenKeyInput = document.getElementById('eleven-api-key-input');
    const elevenVoiceSelect = document.getElementById('eleven-voice-select');

    if (!modalBtn || !overlay) return;

    const togglePanels = (provider) => {
      if (openaiPanel) openaiPanel.style.display = (provider === 'openai') ? 'block' : 'none';
      if (elevenPanel) elevenPanel.style.display = (provider === 'elevenlabs') ? 'block' : 'none';
    };

    const openModal = () => {
      const cfg = window.Speech ? window.Speech.config : {};
      const currentProvider = cfg.provider || 'elevenlabs';
      
      providerRadios.forEach(r => {
        r.checked = (r.value === currentProvider);
      });
      if (openaiKeyInput) openaiKeyInput.value = cfg.openaiApiKey || '';
      if (openaiVoiceSelect) openaiVoiceSelect.value = cfg.openaiVoice || 'nova';
      if (openaiSpeedSelect) openaiSpeedSelect.value = (cfg.openaiSpeed || 0.9).toString();
      if (elevenKeyInput) elevenKeyInput.value = cfg.elevenlabsApiKey || '';
      if (elevenVoiceSelect) elevenVoiceSelect.value = cfg.elevenlabsVoiceId || 'Xb7hH8MSUJpSbSDYk0k2';

      togglePanels(currentProvider);
      overlay.style.display = 'flex';
    };

    const closeModal = () => {
      overlay.style.display = 'none';
    };

    modalBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    providerRadios.forEach(r => {
      r.addEventListener('change', () => togglePanels(r.value));
    });

    if (testBtn) {
      testBtn.addEventListener('click', () => {
        const selectedProvider = document.querySelector('input[name="voice-provider"]:checked')?.value || 'elevenlabs';
        const tempKey = openaiKeyInput ? openaiKeyInput.value.trim() : '';
        const tempVoice = openaiVoiceSelect ? openaiVoiceSelect.value : 'nova';
        const tempSpeed = openaiSpeedSelect ? parseFloat(openaiSpeedSelect.value) : 0.9;
        const tempElevenKey = elevenKeyInput ? elevenKeyInput.value.trim() : '';
        const tempElevenVoice = elevenVoiceSelect ? elevenVoiceSelect.value : 'Xb7hH8MSUJpSbSDYk0k2';

        if (window.Speech) {
          window.Speech.config.provider = selectedProvider;
          window.Speech.config.openaiApiKey = tempKey;
          window.Speech.config.openaiVoice = tempVoice;
          window.Speech.config.openaiSpeed = tempSpeed;
          window.Speech.config.elevenlabsApiKey = tempElevenKey;
          window.Speech.config.elevenlabsVoiceId = tempElevenVoice;

          window.Speech.speak('Guten Tag! Ich lerne Deutsch mit Deutsch Meister. Das ist eine moderne KI-Stimme.');
        }
      });
    }

    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        const selectedProvider = document.querySelector('input[name="voice-provider"]:checked')?.value || 'elevenlabs';
        const key = openaiKeyInput ? openaiKeyInput.value.trim() : '';
        const voice = openaiVoiceSelect ? openaiVoiceSelect.value : 'nova';
        const speed = openaiSpeedSelect ? parseFloat(openaiSpeedSelect.value) : 0.9;
        const elevenKey = elevenKeyInput ? elevenKeyInput.value.trim() : '';
        const elevenVoice = elevenVoiceSelect ? elevenVoiceSelect.value : 'Xb7hH8MSUJpSbSDYk0k2';

        if (window.Speech) {
          window.Speech.saveConfig({
            provider: selectedProvider,
            openaiApiKey: key,
            openaiVoice: voice,
            openaiSpeed: speed,
            elevenlabsApiKey: elevenKey,
            elevenlabsVoiceId: elevenVoice
          });
        }

        closeModal();
        if (window.Utils && window.Utils.showToast) {
          window.Utils.showToast('تم حفظ إعدادات الصوت بنجاح! 🔊', 'success', 2200);
        }
      });
    }
  },

  updateHeaderStats() {
    const data = Storage.load();
    const streakEl = document.getElementById('streak-count');
    const xpEl = document.getElementById('xp-count');
    const streakSuffix = (window.I18n && I18n.isGerman()) ? 'Tage' : 'يوم';
    if (streakEl) streakEl.textContent = `${data.streak.current} ${streakSuffix}`;
    if (xpEl) xpEl.textContent = `${data.xp} XP`;
  },

  // Dynamic lesson script loader (works flawlessly under file:// and http://)
  loadLessonScript(lessonId, callback) {
    if (window.LESSONS && window.LESSONS[lessonId]) {
      callback();
      return;
    }

    // Look up file in window.LEVELS
    let dataFile = null;
    if (window.LEVELS) {
      for (const lvl of window.LEVELS) {
        const found = lvl.lessons.find(l => l.id === lessonId);
        if (found && found.dataFile) {
          dataFile = found.dataFile;
          break;
        }
      }
    }

    if (!dataFile) {
      // Fallback deduction based on ID format
      if (lessonId.startsWith('a1-review-')) {
        dataFile = `a1-review/${lessonId.replace('a1-review-', '')}.js`;
      } else if (lessonId.startsWith('a2-1-')) {
        dataFile = `a2-1/${lessonId.replace('a2-1-', '')}.js`;
      } else if (lessonId.startsWith('a2-2-')) {
        dataFile = `a2-2/${lessonId.replace('a2-2-', '')}.js`;
      }
    }

    if (!dataFile) {
      Utils.showToast('تعذر العثور على مسار ملف الدرس', 'error');
      callback();
      return;
    }

    const script = document.createElement('script');
    script.src = `data/lessons/${dataFile}`;
    script.onload = () => callback();
    script.onerror = () => {
      console.error(`Failed to load ${script.src}`);
      callback();
    };
    document.head.appendChild(script);
  },

  setupRoutes() {
    // HOME ROUTE
    Router.register('/home', () => this.renderHome());

    // LESSONS MAP ROUTE
    Router.register('/lessons', () => this.renderLessonsMap());

    // SINGLE LESSON ROUTE
    Router.register('/lesson', (params) => {
      const lessonId = params.id;
      if (!lessonId) {
        Router.navigate('/lessons');
        return;
      }
      this.loadLessonScript(lessonId, () => {
        LessonRenderer.render(lessonId);
      });
    });

    // VERBS ROUTE
    Router.register('/verbs', () => {
      VerbsRenderer.render(document.getElementById('app-content'));
    });

    // GAMES HUB ROUTE
    Router.register('/games', () => this.renderGamesHub());

    // SPECIFIC GAME ROUTE
    Router.register('/game', (params) => {
      const gameId = params.id;
      const content = document.getElementById('app-content');
      if (gameId === 'article') {
        ArticleGame.render(content);
      } else if (gameId === 'perfekt') {
        PerfektGame.render(content);
      } else if (gameId === 'praeteritum') {
        PraeteritumGame.render(content);
      } else if (gameId === 'kasus') {
        KasusGame.render(content);
      } else if (gameId === 'phrases') {
        PhrasesGame.render(content);
      } else if (gameId === 'fehler') {
        FehlerGame.render(content);
      } else if (gameId === 'satzbau') {
        SatzbauGame.render(content);
      } else if (gameId === 'dialog') {
        DialogGame.render(content);
      } else {
        this.renderGamesHub();
      }
    });

    // EXAMS HUB ROUTE
    Router.register('/exams', () => {
      if (window.ExamsRenderer) {
        window.ExamsRenderer.render(document.getElementById('app-content'));
      }
    });

    // OFFICIAL MODELLTESTS ROUTE
    Router.register('/exams/official', () => {
      if (window.ExamsRenderer) {
        window.ExamsRenderer.renderOfficial(document.getElementById('app-content'));
      }
    });

    // EXAMS HISTORY ROUTE
    Router.register('/exams/history', () => {
      if (window.ExamsRenderer) {
        window.ExamsRenderer.renderHistory(document.getElementById('app-content'));
      }
    });

    // SINGLE EXAM EXECUTION ROUTE
    Router.register('/exam', (params) => {
      const examId = params.id;
      const mode = params.mode || 'exam';
      if (!examId) {
        Router.navigate('/exams');
        return;
      }
      const examData = window.EXAM_DATA && window.EXAM_DATA[examId];
      if (examData && window.ExamEngine) {
        window.ExamEngine.init(examData, mode);
      } else {
        Router.navigate('/exams');
      }
    });

    // VOCABULARY ROUTE
    Router.register('/vocabulary', () => this.renderVocabulary());

    // MISTAKES REVIEW ROUTE
    Router.register('/mistakes', () => this.renderMistakes());

    // PROGRESS & BACKUP ROUTE
    Router.register('/progress', () => this.renderProgress());
  },

  // Set page breadcrumb in topbar
  setBreadcrumb(text) {
    const el = document.getElementById('desktop-breadcrumb');
    if (el) el.innerHTML = `<span>🇩🇪 ${Utils.escapeHtml(text)}</span>`;
  },

  // ==========================================
  // VIEW: HOME PAGE
  // ==========================================
  renderHome() {
    const isDe = window.I18n && window.I18n.isGerman();
    this.setBreadcrumb(isDe ? 'Startseite / Übersicht & Dashboard' : 'الرئيسية / لوحة التحكم والمتابعة');
    const data = Storage.load();
    const totalLessons = window.TOTAL_LESSONS || 57;
    const completedLessons = Storage.getCompletedCount();
    const percent = Math.round((completedLessons / totalLessons) * 100);
    const lastLessonId = Storage.getLastLesson() || 'a1-review-01';

    let lastLessonTitle = isDe ? 'Possessivpronomen' : 'ضمائر الملكية (Possessivpronomen)';
    let lastLessonSubtitle = isDe ? 'A1 Wiederholung — Lektion 1' : 'مراجعة A1 — الدرس 1';
    if (window.LEVELS) {
      for (const lvl of window.LEVELS) {
        const found = lvl.lessons.find(l => l.id === lastLessonId);
        if (found) {
          lastLessonTitle = isDe ? found.title.de : `${found.title.ar} (${found.title.de})`;
          lastLessonSubtitle = isDe 
            ? `${lvl.title.de} — Lektion ${lvl.lessons.indexOf(found) + 1}`
            : `${lvl.title.ar} — درس رقم ${lvl.lessons.indexOf(found) + 1}`;
          break;
        }
      }
    }

    const content = document.getElementById('app-content');
    content.innerHTML = `
      <div class="content-container fade-in">
        <!-- 1. Hero Banner -->
        <div class="hero-banner">
          <div class="hero-content">
            <span class="hero-pill">${isDe ? '🇩🇪 Intensivkurs bis Goethe B1 & Ausbildung' : '🇩🇪 خطتك المكثفة للوصول إلى B1 و Ausbildung'}</span>
            <h1 class="hero-title">${isDe ? 'Bereit für deine nächste Deutsch-Lektion?' : 'جاهز لمواصلة خطتك الدراسية؟'}</h1>
            <p class="hero-subtitle">
              ${isDe 
                ? 'Strukturierte A1-Wiederholung und vollständiger A2-Lehrplan mit interaktiven Übungen, muttersprachlicher Aussprache und automatischem Fehlerbuch.' 
                : 'مراجعة شاملة لقواعد A1 ودراسة كامل منهج A2 خطوة بخطوة مع شروحات عربية مبسطة، تمارين تفاعلية، وسجل لحفظ الأخطاء.'}
            </p>
          </div>
          <div class="hero-actions">
            <a href="#/lesson/${lastLessonId}" class="btn btn-white btn-lg" style="width: 100%;">
              ${isDe ? '▶ Lektion fortsetzen' : '▶ متابعة من حيث توقفت'}
            </a>
            <a href="#/game/article" class="btn" style="background: rgba(255,255,255,0.18); color: white; width: 100%;">
              ${isDe ? '🎯 Tages-Challenge: der / die / das' : '🎯 تحدي اليوم: der / die / das'}
            </a>
          </div>
        </div>

        <!-- 2. Primary Metrics Grid -->
        <div class="grid-3">
          <div class="stat-box">
            <div class="stat-icon" style="background: rgba(234, 88, 12, 0.1); color: var(--streak-color);">🔥</div>
            <div class="stat-info">
              <h4>${isDe ? 'Tägliche Lernserie' : 'سلسلة المذاكرة اليومية'}</h4>
              <div class="stat-value">${data.streak.current} ${isDe ? 'Tage' : 'يوم'}</div>
              <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">
                ${isDe ? `Beste Serie: ${data.streak.best || data.streak.current} Tage` : `أفضل سلسلة: ${data.streak.best || data.streak.current} يوم`}
              </span>
            </div>
          </div>

          <div class="stat-box">
            <div class="stat-icon" style="background: rgba(217, 119, 6, 0.1); color: var(--xp-color);">⚡</div>
            <div class="stat-info">
              <h4>${isDe ? 'Erfahrungspunkte' : 'مجموع نقاط الخبرة'}</h4>
              <div class="stat-value">${data.xp} XP</div>
              <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">
                ${isDe ? 'Sammle XP mit jeder Übung & Test' : 'اربح XP مع كل تمرين واختبار'}
              </span>
            </div>
          </div>

          <div class="stat-box">
            <div class="stat-icon" style="background: rgba(16, 185, 129, 0.1); color: var(--success);">🎯</div>
            <div class="stat-info">
              <h4>${isDe ? 'Gesamter Lehrplan-Fortschritt' : 'إجمالي إنجاز المنهج'}</h4>
              <div class="stat-value">${percent}%</div>
              <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">
                ${isDe ? `${completedLessons} von ${totalLessons} Lektionen abgeschlossen` : `أكملت ${completedLessons} من ${totalLessons} درساً`}
              </span>
            </div>
          </div>
        </div>

        <!-- 3. Current Active Lesson Quick Action -->
        <div class="card" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; border-inline-start: 6px solid var(--accent);">
          <div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">${isDe ? 'Empfohlene Lektion:' : 'الدرس الحالي المقترح:'}</div>
            <h3 style="font-size: 1.25rem; color: var(--text-primary); margin-bottom: 2px;">${Utils.escapeHtml(lastLessonTitle)}</h3>
            <span style="font-size: 0.85rem; color: var(--accent); font-weight: 600;">${Utils.escapeHtml(lastLessonSubtitle)}</span>
          </div>
          <a href="#/lesson/${lastLessonId}" class="btn btn-primary">${isDe ? 'Lektion jetzt starten ➔' : 'ابدأ الدرس الآن ➔'}</a>
        </div>

        <!-- 4. Curriculum Level Cards -->
        <div class="section-header">
          <div>
            <h2 class="section-title">${isDe ? 'Lehrplan & Niveaustufen' : 'مستويات المنهج الدراسي'}</h2>
            <p class="section-subtitle">${isDe ? 'Wähle eine Niveaustufe, um alle 57 Lektionen und Übungen zu öffnen' : 'انقر على أي مستوى لعرض قائمة دروسه وتمارينه'}</p>
          </div>
          <a href="#/lessons" class="btn btn-secondary btn-sm">${isDe ? 'Alle 57 Lektionen anzeigen' : 'عرض كل الدروس (57 درس)'}</a>
        </div>

        <div class="grid-3">
          ${(window.LEVELS || []).map(lvl => {
            const lvlCompleted = lvl.lessons.filter(l => data.lessons[l.id] && data.lessons[l.id].completed).length;
            const lvlPercent = Math.round((lvlCompleted / lvl.lessons.length) * 100);
            const lvlTitle = isDe ? lvl.title.de : lvl.title.ar;
            const lvlSub = isDe ? lvl.title.ar : lvl.title.de;
            const lvlDesc = (isDe && lvl.description_de) ? lvl.description_de : lvl.description;
            return `
              <div class="level-card" style="--level-color: ${lvl.color}; --level-bg: ${lvl.color}15;">
                <div>
                  <div class="level-top">
                    <div class="level-icon-badge">${lvl.icon}</div>
                    <span class="badge" style="background: ${lvl.color}15; color: ${lvl.color};">${lvl.lessons.length} ${isDe ? 'Lektionen' : 'درساً'}</span>
                  </div>
                  <div class="level-info">
                    <h3>${lvlTitle}</h3>
                    <div class="level-de-title de-text">${lvlSub}</div>
                    <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">${lvlDesc}</p>
                  </div>
                </div>
                <div>
                  <div class="progress-bar">
                    <div class="progress-bar-fill" style="width: ${lvlPercent}%; background: ${lvl.color};"></div>
                  </div>
                  <div class="level-meta">
                    <span>${isDe ? 'Abgeschlossen:' : 'مكتمل:'} ${lvlCompleted} / ${lvl.lessons.length}</span>
                    <span>${lvlPercent}%</span>
                  </div>
                  <div style="margin-top: 18px;">
                    <a href="#/lessons" class="btn btn-secondary btn-sm" style="width: 100%;">${isDe ? 'Lektionen anzeigen' : 'استعراض الدروس'}</a>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- 5. Two-Column Dashboard Section -->
        <div class="grid-2">
          <!-- Study Focus Priorities -->
          <div class="card" style="margin-bottom: 0;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
              <h3 style="font-size: 1.15rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
                <span>🎯</span> ${isDe ? 'Die 3 goldenen Grammatikregeln' : 'نقاط التركيز الأساسية للناطق بالعربية'}
              </h3>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.92rem;">
              <div style="display: flex; gap: 12px; align-items: flex-start; padding: 10px; background: var(--bg-primary); border-radius: var(--radius-sm);">
                <span class="badge badge-danger">1</span>
                <div>
                  ${isDe 
                    ? '<strong>Verbposition 2 (V2):</strong> Im deutschen Hauptsatz steht das konjugierte Verb immer an zweiter Position, auch wenn ein Adverb am Satzanfang steht!' 
                    : '<strong>موقع الفعل ثانياً (V2):</strong> في الجملة الألمانية الرئيسية يكون الفعل دائماً في الموقع الثاني، حتى لو بدأت بالظرف الزمني!'}
                </div>
              </div>
              <div style="display: flex; gap: 12px; align-items: flex-start; padding: 10px; background: var(--bg-primary); border-radius: var(--radius-sm);">
                <span class="badge badge-warning">2</span>
                <div>
                  ${isDe 
                    ? '<strong>Nebensätze (Verb-Letzt):</strong> Nach Konjunktionen wie <em>weil, dass, wenn</em> wandert das Verb ans Satzende.' 
                    : '<strong>الجمل الفرعية (Nebensätze):</strong> بعد روابط مثل <em>weil, dass, wenn</em> يذهب الفعل المصرف إلى <strong>نهاية الجملة</strong> مباشرة.'}
                </div>
              </div>
              <div style="display: flex; gap: 12px; align-items: flex-start; padding: 10px; background: var(--bg-primary); border-radius: var(--radius-sm);">
                <span class="badge badge-primary">3</span>
                <div>
                  ${isDe 
                    ? '<strong>Artikel (der/die/das):</strong> Lerne jedes Nomen immer mit seinem Artikel und seiner Pluralform!' 
                    : '<strong>أدوات التعريف (der/die/das):</strong> احفظ كل اسم دائماً مع أداته بصرياً بالألوان لتفادي أخطاء Akkusativ و Dativ.'}
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Games Launcher -->
          <div class="card" style="margin-bottom: 0; background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(59, 130, 246, 0.08) 100%); border-color: var(--accent);">
            <div style="font-size: 2.2rem; margin-bottom: 10px;">⚡</div>
            <h3 style="font-size: 1.25rem; color: var(--text-primary); margin-bottom: 8px;">
              ${isDe ? 'Artikel-Schnelltest (der / die / das)' : 'تحدي سرعة أدوات التعريف'}
            </h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 20px; line-height: 1.6;">
              ${isDe 
                ? 'Trainiere 30 häufige Nomen in 45 Sekunden und sammle XP für deine tägliche Serie!' 
                : 'تحدَّ نفسك في تصنيف 30 اسماً شائعاً بين der أو die أو das خلال 45 ثانية واكسب نقاط XP لسلسلتك اليومية.'}
            </p>
            <a href="#/game/article" class="btn btn-primary" style="width: 100%;">
              ${isDe ? 'Jetzt spielen 🎯' : 'العب التحدي الآن 🎯'}
            </a>
          </div>
        </div>
      </div>
    `;
  },

  // ==========================================
  // VIEW: LESSONS CURRICULUM MAP
  // ==========================================
  renderLessonsMap() {
    const isDe = window.I18n && window.I18n.isGerman();
    this.setBreadcrumb(isDe ? 'Lehrplan / Alle 57 Lektionen' : 'المنهج الدراسي / خريطة الدروس الـ 57');
    const data = Storage.load();
    const content = document.getElementById('app-content');

    let html = `
      <div class="content-container fade-in">
        <div class="section-header">
          <div>
            <h1 class="section-title">${isDe ? 'Lehrplan & Lektionsübersicht' : 'خريطة المنهج والدروس'}</h1>
            <p class="section-subtitle">${isDe ? '57 strukturierte Lektionen mit Grammatikerklärungen, Beispielen und Quiz' : '57 درساً مُنظماً خطوة بخطوة مع شروحات وتمارين واختبارات فورية'}</p>
          </div>
        </div>
    `;

    for (const lvl of (window.LEVELS || [])) {
      const lvlCompleted = lvl.lessons.filter(l => data.lessons[l.id] && data.lessons[l.id].completed).length;
      const lvlHeaderTitle = isDe ? `${lvl.title.de} — ${lvl.title.ar}` : `${lvl.title.ar} — <span class="de-text">${lvl.title.de}</span>`;
      const lvlHeaderDesc = isDe 
        ? `${lvl.description_de || lvl.description} (${lvlCompleted}/${lvl.lessons.length} abgeschlossen)`
        : `${lvl.description} (${lvlCompleted}/${lvl.lessons.length} مكتمل)`;

      html += `
        <div class="card" style="margin-bottom: 24px;">
          <div class="level-header" style="border-bottom: 2px solid var(--border-light); padding-bottom: 14px; margin-bottom: 16px;">
            <div class="level-title-wrap">
              <span style="font-size: 1.8rem;">${lvl.icon}</span>
              <div>
                <h2 style="font-size: 1.35rem; color: var(--text-primary);">${lvlHeaderTitle}</h2>
                <span style="font-size: 0.85rem; color: var(--text-muted);">${lvlHeaderDesc}</span>
              </div>
            </div>
          </div>

          <div class="item-list">
      `;

      for (let i = 0; i < lvl.lessons.length; i++) {
        const lesson = lvl.lessons[i];
        const status = data.lessons[lesson.id];
        const isCompleted = status && status.completed;
        const isReady = !!(window.LESSONS && window.LESSONS[lesson.id]);
        
        let scoreText = isDe ? '🔒 Demnächst' : '🔒 قريباً';
        let badgeClass = 'badge-secondary';
        if (isCompleted) {
          scoreText = isDe ? `✅ Abgeschlossen (${status.bestScore}/${status.totalQuestions || 5})` : `✅ مكتمل (${status.bestScore}/${status.totalQuestions || 5})`;
          badgeClass = 'badge-success';
        } else if (isReady) {
          scoreText = isDe ? '⭐ Bereit zum Lernen' : '⭐ جاهز للدراسة';
          badgeClass = 'badge-primary';
        }

        html += `
          <a href="#/lesson/${lesson.id}" class="list-item ${isCompleted ? 'completed' : (isReady ? 'ready' : '')}">
            <div style="display: flex; align-items: center; gap: 14px;">
              <span class="badge" style="background: ${isCompleted ? 'var(--success)' : (isReady ? 'var(--accent)' : 'var(--border)')}; color: #fff; width: 34px; height: 34px; justify-content: center; padding: 0; font-weight: 700;">
                ${i + 1}
              </span>
              <div>
                <div style="font-weight: 700; font-size: 1.05rem;">
                  <span class="de-text" dir="ltr">${Utils.escapeHtml(lesson.title.de)}</span>
                </div>
                <div style="font-size: 0.9rem; color: var(--text-secondary);">${Utils.escapeHtml(lesson.title.ar)}</div>
              </div>
            </div>
            <div>
              <span class="badge ${badgeClass}" style="font-size: 0.85rem;">
                ${scoreText}
              </span>
            </div>
          </a>
        `;
      }

      html += `</div></div>`;
    }

    html += `</div>`;
    content.innerHTML = html;
  },

  // ==========================================
  // VIEW: GAMES HUB
  // ==========================================
  // ==========================================
  // VIEW: GAMES HUB
  // ==========================================
  renderGamesHub() {
    const isDe = window.I18n && window.I18n.isGerman();
    this.setBreadcrumb(isDe ? 'Aktivitäten / Interaktive Lernspiele' : 'الأنشطة / الألعاب التعليمية التفاعلية');
    const data = Storage.load();
    const articleHighScore = (data.games && data.games.articleGame) ? data.games.articleGame.highScore : 0;
    const perfektHighScore = (data.games && data.games.perfektGame) ? data.games.perfektGame.highScore : 0;
    const praeteritumHighScore = (data.games && data.games.praeteritumGame) ? data.games.praeteritumGame.highScore : 0;
    const kasusHighScore = (data.games && data.games.kasusGame) ? data.games.kasusGame.highScore : 0;

    const phrasesHighScore = (data.games && data.games.phrasesGame) ? data.games.phrasesGame.highScore : 0;
    const fehlerHighScore = (data.games && data.games.fehlerGame) ? data.games.fehlerGame.highScore : 0;
    const satzbauHighScore = (data.games && data.games.satzbauGame) ? data.games.satzbauGame.highScore : 0;
    const dialogHighScore = (data.games && data.games.dialogGame) ? data.games.dialogGame.highScore : 0;

    const scoreLabel = isDe ? 'Beste Punktzahl:' : 'أعلى نتيجة:';
    const playBtn = isDe ? 'Jetzt spielen ➔' : 'العب الآن ➔';

    const content = document.getElementById('app-content');
    content.innerHTML = `
      <div class="content-container fade-in">
        <div class="section-header">
          <div>
            <h1 class="section-title">${isDe ? 'Interaktive Lernspiele & Training' : 'منطقة الألعاب والتدريبات التفاعلية'}</h1>
            <p class="section-subtitle">${isDe ? 'Kurze Trainingsspiele für Wortschatz, Satzbau (V2), Nebensätze, Fehlerkorrektur und Konversation' : 'ألعاب سريعة لتثبيت المفردات، بناء الجملة V2، الجمل الفرعية، كشف الأخطاء، وفنون المحادثة'}</p>
          </div>
        </div>

        <div class="games-grid">
          <!-- Game: Phrases Trainer -->
          <div class="game-card" style="border: 2px solid var(--accent); background: linear-gradient(135deg, rgba(99,102,241,0.06), rgba(59,130,246,0.04));">
            <div class="game-icon">💬</div>
            <h3>${isDe ? 'Phrasen-Trainer & Sofort-Übersetzung' : 'تحدي المفردات والترجمة الفورية (Phrasen-Trainer)'}</h3>
            <p>${isDe ? 'Bilde den richtigen deutschen Satz aus dem Wortkasten mit direkter Audio-Aussprache!' : 'تُعرض عليك عبارة عربية يومية، ومهمتك تركيب الجملة الألمانية الصحيحة باستخدام بنك الكلمات مع نطق صوتي فوري!'}</p>
            <div class="game-meta">
              <span>${scoreLabel} ${phrasesHighScore} ${isDe ? 'Pkt.' : 'نقطة'}</span>
              <span class="badge badge-success">${isDe ? 'Neu & Beliebt ⚡' : 'جديد ومميز ⚡'}</span>
            </div>
            <a href="#/game/phrases" class="btn btn-primary" style="width: 100%;">${playBtn}</a>
          </div>

          <!-- Game: Fehlerkorrektur -->
          <div class="game-card" style="border: 2px solid var(--danger); background: linear-gradient(135deg, rgba(239,68,68,0.05), rgba(245,158,11,0.04));">
            <div class="game-icon">🔍</div>
            <h3>${isDe ? 'Fehlerdetektiv: Was ist falsch?' : 'تحدي اكتشف الخطأ وصححه (What\'s Wrong?)'}</h3>
            <p>${isDe ? 'Finde typische Grammatikfehler im Satzbau, Kasus oder Konjugation und wähle die richtige Version mit Erklärung!' : 'جمَل ألمانية تحتوي على أخطاء شائعة في الإعراب ومواقع الأفعال. اكتشف الخطأ واختر التصحيح السليم مع شرح نحوي!'}</p>
            <div class="game-meta">
              <span>${scoreLabel} ${fehlerHighScore} ${isDe ? 'Pkt.' : 'نقطة'}</span>
              <span class="badge badge-danger">${isDe ? 'IQ-Challenge 🎯' : 'تحدي الذكاء 🎯'}</span>
            </div>
            <a href="#/game/fehler" class="btn btn-primary" style="width: 100%;">${playBtn}</a>
          </div>

          <!-- Game: Satzbau & Nebensatz Master -->
          <div class="game-card" style="border: 2px solid #10B981; background: linear-gradient(135deg, rgba(16,185,129,0.06), rgba(59,130,246,0.04));">
            <div class="game-icon">🏗️</div>
            <h3>${isDe ? 'Satzbau-Meister (V2 & Nebensatz)' : 'مهندس بناء الجملة (Satzbau & Nebensatz)'}</h3>
            <p>${isDe ? 'Intensivtraining für Verbposition 2 (V2), Inversion, ADUSO-Konnektoren und Nebensätze mit weil, dass, wenn!' : 'تدريب مكثف على موقع الفعل (V2)، قلب الفاعل عند تقديم الظرف، روابط ADUSO، والجمل الفرعية (weil, dass, wenn)!'}</p>
            <div class="game-meta">
              <span>${scoreLabel} ${satzbauHighScore} ${isDe ? 'Pkt.' : 'نقطة'}</span>
              <span class="badge badge-success">${isDe ? 'Prüfungsrelevant ⚡' : 'أساسي للامتحان ⚡'}</span>
            </div>
            <a href="#/game/satzbau" class="btn btn-primary" style="width: 100%;">${playBtn}</a>
          </div>

          <!-- Game: Dialog & Sprechen Studio -->
          <div class="game-card" style="border: 2px solid #8B5CF6; background: linear-gradient(135deg, rgba(139,92,246,0.06), rgba(236,72,153,0.04));">
            <div class="game-icon">🎭</div>
            <h3>${isDe ? 'Fragen & Antworten Studio (Sprechen)' : 'استوديو السؤال والجواب (Fragen & Antworten)'}</h3>
            <p>${isDe ? 'Lerne präzise W-Fragen zu stellen und mit bewährten Redemitteln wie im Goethe-Sprechen flüssig zu antworten!' : 'تعلم كيف تسأل بدقة (W-Fragen وأدوات الاستفهام) وكيف تجيب بأفضل التعبيرات اليومية المعتمدة في Goethe Sprechen!'}</p>
            <div class="game-meta">
              <span>${scoreLabel} ${dialogHighScore} ${isDe ? 'Pkt.' : 'نقطة'}</span>
              <span class="badge badge-primary">${isDe ? 'Echte Dialoge 💬' : 'محادثة حقيقية 💬'}</span>
            </div>
            <a href="#/game/dialog" class="btn btn-primary" style="width: 100%;">${playBtn}</a>
          </div>

          <!-- Game 1: Article Game -->
          <div class="game-card">
            <div class="game-icon">🎯</div>
            <h3>${isDe ? 'Artikel-Sprint (der / die / das)' : 'تحدي أدوات التعريف (der / die / das)'}</h3>
            <p>${isDe ? 'Wähle den richtigen Artikel für jedes Nomen unter Zeitdruck (45 Sekunden)!' : 'اختر الأداة الصحيحة للاسم بأقصى سرعة قبل نفاد الوقت (45 ثانية). كل إجابة صحيحة تمنحك نقاطاً وسلسلة فوز!'}</p>
            <div class="game-meta">
              <span>${scoreLabel} ${articleHighScore} ${isDe ? 'Pkt.' : 'نقطة'}</span>
              <span class="badge badge-success">${isDe ? 'Bereit zum Spielen ⚡' : 'جاهز للعب ⚡'}</span>
            </div>
            <a href="#/game/article" class="btn btn-primary" style="width: 100%;">${playBtn}</a>
          </div>

          <!-- Game 2: Perfekt Game -->
          <div class="game-card">
            <div class="game-icon">⏳</div>
            <h3>${isDe ? 'Perfekt-Trainer: haben oder sein?' : 'تحدي الماضي التام: haben أم sein؟'}</h3>
            <p>${isDe ? 'Hat oder ist? Teste deine Reflexe bei Bewegungsverben, Zustandswechseln und Ausnahmen!' : 'هل يأخذ الفعل hat أم ist؟ اختبر سرعتك في التمييز بين أفعال الحركة والتحول وبقية الأفعال تحت ضغط الوقت!'}</p>
            <div class="game-meta">
              <span>${scoreLabel} ${perfektHighScore} ${isDe ? 'Pkt.' : 'نقطة'}</span>
              <span class="badge badge-success">${isDe ? 'Bereit zum Spielen ⚡' : 'جاهز للعب ⚡'}</span>
            </div>
            <a href="#/game/perfekt" class="btn btn-primary" style="width: 100%;">${playBtn}</a>
          </div>

          <!-- Game 3: Präteritum Sprint -->
          <div class="game-card">
            <div class="game-icon">⚡</div>
            <h3>${isDe ? 'Präteritum-Sprint' : 'سباق الماضي البسيط (Präteritum)'}</h3>
            <p>${isDe ? 'Wähle die richtige Präteritum-Form für die wichtigsten unregelmäßigen Verben.' : 'اختر تصريف Präteritum الصحيح من بين 4 خيارات للأفعال الشاذة والأساسية المعتمدة في امتحانات A2 و B1.'}</p>
            <div class="game-meta">
              <span>${scoreLabel} ${praeteritumHighScore} ${isDe ? 'Pkt.' : 'نقطة'}</span>
              <span class="badge badge-success">${isDe ? 'Bereit zum Spielen ⚡' : 'جاهز للعب ⚡'}</span>
            </div>
            <a href="#/game/praeteritum" class="btn btn-primary" style="width: 100%;">${playBtn}</a>
          </div>

          <!-- Game 4: Kasus Trainer -->
          <div class="game-card">
            <div class="game-icon">🛡️</div>
            <h3>${isDe ? 'Kasus-Trainer (Akkusativ, Dativ & Genitiv)' : 'تحدي الإعراب الألماني (Kasus Trainer)'}</h3>
            <p>${isDe ? 'Meistere die Fälle und Wechselpräpositionen unter Zeitdruck (60 Sekunden)!' : 'أتقن حالات الإعراب الثلاث: Akkusativ و Dativ و Genitiv وحروف الجر المشتركة تحت ضغط الوقت (60 ثانية)!'}</p>
            <div class="game-meta">
              <span>${scoreLabel} ${kasusHighScore} ${isDe ? 'Pkt.' : 'نقطة'}</span>
              <span class="badge badge-success">${isDe ? 'Verfügbar ⚡' : 'متاح للعب ⚡'}</span>
            </div>
            <a href="#/game/kasus" class="btn btn-primary" style="width: 100%;">${playBtn}</a>
          </div>

          <!-- Game 5: Verbtabelle Quick Trainer -->
          <div class="game-card">
            <div class="game-icon">📖</div>
            <h3>${isDe ? 'Vollständige Verbtabelle' : 'جدول تصريف الأفعال الشامل'}</h3>
            <p>${isDe ? 'Durchsuche die Verbtabelle (Infinitiv - Präteritum - Perfekt) mit nativer Audio-Aussprache.' : 'استعرض وابحث في جدول الأفعال الشامل (Infinitiv - Präteritum - Perfekt) واستمع لنطقها بالألمانية.'}</p>
            <div class="game-meta">
              <span>${isDe ? '136 Verben erfasst' : '136 فعلاً مسجلاً'}</span>
              <span class="badge badge-primary">${isDe ? 'Jetzt verfügbar' : 'متاح الآن'}</span>
            </div>
            <a href="#/verbs" class="btn btn-secondary" style="width: 100%;">${isDe ? 'Verbtabelle öffnen ➔' : 'فتح جدول الأفعال ➔'}</a>
          </div>
        </div>
      </div>
    `;
  },

  // ==========================================
  // VIEW: VOCABULARY BROWSER (A1 - B1 Master)
  // ==========================================
  vocabCategoryFilter: 'all',
  vocabLevelFilter: 'all',
  vocabSearchQuery: '',

  renderVocabulary() {
    this.setBreadcrumb('المفردات / القاموس الشامل (A1 – B1)');
    const content = document.getElementById('app-content');

    content.innerHTML = `
      <div class="content-container fade-in">
        <div class="section-header">
          <div>
            <h1 class="section-title">قاموس المفردات الشامل (A1 – B1)</h1>
            <p class="section-subtitle">
              المعجم المعتمد من مناهج Das Leben (A1/A2) و Kontext B1: أسماء بأدوات ملونة وجموع، صفات وتعبيرات يومية، وأمثلة ناطقة.
            </p>
          </div>
          <span class="badge badge-primary" id="vocab-total-badge">...</span>
        </div>

        <!-- Filter & Search Toolbar -->
        <div class="card" style="padding: 20px 24px; margin-bottom: 24px;">
          <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center; justify-content: space-between;">
            <!-- Live Search -->
            <div style="flex: 1; min-width: 260px;">
              <input 
                type="text" 
                id="vocab-search-input" 
                class="form-input" 
                placeholder="🔍 ابحث عن أي كلمة أو معنى (مثال: Arzt, جميل, Auto, Arbeit...)"
                oninput="App.handleVocabSearch(this.value)"
              />
            </div>

            <!-- Category Filter Pills -->
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button class="btn btn-sm btn-primary vocab-cat-btn" data-cat="all" onclick="App.filterVocabCat('all', this)">الكل</button>
              <button class="btn btn-sm btn-secondary vocab-cat-btn" data-cat="der" onclick="App.filterVocabCat('der', this)" style="color: var(--der-color); font-weight: 700;">der (مذكر)</button>
              <button class="btn btn-sm btn-secondary vocab-cat-btn" data-cat="die" onclick="App.filterVocabCat('die', this)" style="color: var(--die-color); font-weight: 700;">die (مؤنث)</button>
              <button class="btn btn-sm btn-secondary vocab-cat-btn" data-cat="das" onclick="App.filterVocabCat('das', this)" style="color: var(--das-color); font-weight: 700;">das (محايد)</button>
              <button class="btn btn-sm btn-secondary vocab-cat-btn" data-cat="Adjektiv" onclick="App.filterVocabCat('Adjektiv', this)">صفات</button>
            </div>

            <!-- Level Filter Pills -->
            <div style="display: flex; gap: 8px;">
              <button class="btn btn-sm btn-secondary vocab-lvl-btn" data-lvl="all" onclick="App.filterVocabLvl('all', this)">كل المستويات</button>
              <button class="btn btn-sm btn-secondary vocab-lvl-btn" data-lvl="A1" onclick="App.filterVocabLvl('A1', this)">A1</button>
              <button class="btn btn-sm btn-secondary vocab-lvl-btn" data-lvl="A2" onclick="App.filterVocabLvl('A2', this)">A2</button>
              <button class="btn btn-sm btn-secondary vocab-lvl-btn" data-lvl="B1" onclick="App.filterVocabLvl('B1', this)">B1</button>
            </div>
          </div>
        </div>

        <!-- Vocab Grid Container -->
        <div id="vocab-display-grid" class="vocab-grid"></div>
      </div>
    `;

    this.renderVocabCards();
  },

  handleVocabSearch(query) {
    this.vocabSearchQuery = query.trim().toLowerCase();
    this.renderVocabCards();
  },

  filterVocabCat(cat, btn) {
    this.vocabCategoryFilter = cat;
    document.querySelectorAll('.vocab-cat-btn').forEach(b => {
      b.classList.remove('btn-primary');
      b.classList.add('btn-secondary');
    });
    btn.classList.remove('btn-secondary');
    btn.classList.add('btn-primary');
    this.renderVocabCards();
  },

  filterVocabLvl(lvl, btn) {
    this.vocabLevelFilter = lvl;
    document.querySelectorAll('.vocab-lvl-btn').forEach(b => {
      b.classList.remove('btn-primary');
      b.classList.add('btn-secondary');
    });
    btn.classList.remove('btn-secondary');
    btn.classList.add('btn-primary');
    this.renderVocabCards();
  },

  renderVocabCards() {
    let list = [...(window.MASTER_VOCABULARY || [])];

    // Also include lesson vocab if any
    if (window.LESSONS) {
      for (const lesson of Object.values(window.LESSONS)) {
        if (lesson.vocabulary) {
          for (const v of lesson.vocabulary) {
            if (!list.some(item => item.de.toLowerCase() === v.de.toLowerCase())) {
              list.push({ ...v, level: lesson.level });
            }
          }
        }
      }
    }

    // Filter by Category
    if (this.vocabCategoryFilter !== 'all') {
      if (['der', 'die', 'das'].includes(this.vocabCategoryFilter)) {
        list = list.filter(w => w.article && w.article.toLowerCase() === this.vocabCategoryFilter);
      } else if (this.vocabCategoryFilter === 'Adjektiv') {
        list = list.filter(w => w.category === 'Adjektiv');
      }
    }

    // Filter by Level
    if (this.vocabLevelFilter !== 'all') {
      list = list.filter(w => w.level && w.level.toUpperCase().includes(this.vocabLevelFilter));
    }

    // Filter by Search
    if (this.vocabSearchQuery) {
      const q = this.vocabSearchQuery;
      list = list.filter(w => 
        w.de.toLowerCase().includes(q) ||
        (w.ar && w.ar.includes(q)) ||
        (w.plural && w.plural.toLowerCase().includes(q))
      );
    }

    const grid = document.getElementById('vocab-display-grid');
    const badge = document.getElementById('vocab-total-badge');
    if (badge) badge.textContent = `${list.length} كلمة معروضة`;

    if (!grid) return;

    if (list.length === 0) {
      grid.innerHTML = `
        <div class="card text-center" style="grid-column: 1 / -1; padding: 40px;">
          <p style="color: var(--text-muted); font-size: 1.1rem;">لم نجد نتائج تطابق بحثك. جرب كتابة كلمة أخرى.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(w => {
      const artClass = Utils.getArticleClass(w.article);
      const cleanWord = w.de.replace(/^(der|die|das)\s+/i, '');
      return `
        <div class="vocab-card">
          <div class="vocab-word">
            <span class="de-text ${artClass}" style="font-size: 1.15rem;" dir="ltr">${Utils.escapeHtml(w.de)}</span>
            <button class="audio-btn" onclick="Speech.speak('${cleanWord.replace(/'/g, "\\'")}')" title="استمع للنطق">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.08"/></svg>
            </button>
          </div>
          ${w.plural ? `<div class="vocab-plural de-text" dir="ltr">${Utils.escapeHtml(w.plural)}</div>` : ''}
          <div class="vocab-meaning" style="font-weight: 600; font-size: 1rem; color: var(--text-primary); margin: 4px 0;">${Utils.escapeHtml(w.ar || '')}</div>
          ${w.example ? `<div class="vocab-example"><span class="de-text" dir="ltr">${Utils.colorArticles(Utils.escapeHtml(w.example))}</span></div>` : ''}
          <div style="margin-top: auto; padding-top: 6px; display: flex; justify-content: flex-end;">
            <span class="badge" style="background: var(--bg-primary); border: 1px solid var(--border); font-size: 0.72rem;">${w.level || 'A1'}</span>
          </div>
        </div>
      `;
    }).join('');
  },

  // ==========================================
  // VIEW: MISTAKES LOG
  // ==========================================
  renderMistakes() {
    const isDe = window.I18n && window.I18n.isGerman();
    this.setBreadcrumb(isDe ? 'Wiederholung / Mein Fehlerbuch' : 'المراجعة / سجل أخطائي الذكي');
    const mistakes = Storage.getActiveMistakes();
    const content = document.getElementById('app-content');

    const activeCountText = isDe ? `${mistakes.length} aktive Fehler` : `${mistakes.length} خطأ نشط`;
    const masterBtnText = isDe ? '✓ Als gemeistert' : '✓ تم الإتقان';
    const myAnsText = isDe ? '❌ Meine Antwort:' : '❌ إجابتي:';
    const noAnsText = isDe ? 'Keine Antwort' : 'بدون إجابة';
    const correctAnsText = isDe ? '✅ Richtige Antwort:' : '✅ الإجابة الصحيحة:';
    const reasonText = isDe ? '💡 Erklärung:' : '💡 السبب:';

    content.innerHTML = `
      <div class="content-container fade-in">
        <div class="section-header">
          <div>
            <h1 class="section-title">${isDe ? 'Mein Fehlerbuch (Fehlerdatenbank)' : 'سجل أخطائي للمراجعة (Fehlerdatenbank)'}</h1>
            <p class="section-subtitle">${isDe ? 'Fragen und Aufgaben, die du wiederholen solltest, bis du sie perfekt beherrschst' : 'الأسئلة التي أخطأت فيها خلال الاختبارات لتتدرب عليها حتى تتقنها تماماً'}</p>
          </div>
          <span class="badge ${mistakes.length === 0 ? 'badge-success' : 'badge-danger'}">
            ${activeCountText}
          </span>
        </div>

        ${mistakes.length === 0 ? `
          <div class="card text-center" style="padding: 40px;">
            <div style="font-size: 3rem; margin-bottom: 12px;">🎉</div>
            <h2 style="font-size: 1.4rem; margin-bottom: 8px;">${isDe ? 'Hervorragend! Keine offenen Fehler vorhanden' : 'رائع جداً! لا توجد أخطاء مسجلة حالياً'}</h2>
            <p class="text-secondary">${isDe ? 'Sobald du bei einer Übung oder einem Test einen Fehler machst, wird er hier automatisch mit Erklärung gespeichert.' : 'عندما تخطئ في أي اختبار، سيظهر الخطأ هنا تلقائياً مع الشرح والتصحيح.'}</p>
          </div>
        ` : `
          <div class="item-list">
            ${mistakes.map(m => `
              <div class="card" style="margin-bottom: 14px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 14px; margin-bottom: 10px;">
                  <h4 style="font-size: 1.1rem; color: var(--text-primary);">
                    <span class="de-text" dir="ltr">${Utils.escapeHtml(m.question)}</span>
                  </h4>
                  <button class="btn btn-secondary btn-sm" onclick="App.masterMistake('${m.id}')">
                    ${masterBtnText}
                  </button>
                </div>
                <div style="display: flex; flex-direction: column; gap: 6px; font-size: 0.95rem;">
                  <div style="color: var(--danger);">
                    ${myAnsText} <span class="de-text" dir="ltr">${Utils.escapeHtml(m.myAnswer || noAnsText)}</span>
                  </div>
                  <div style="color: var(--success); font-weight: 600;">
                    ${correctAnsText} <span class="de-text" dir="ltr">${Utils.escapeHtml(m.correctAnswer || '')}</span>
                  </div>
                  ${m.explanation ? `
                    <div style="background: var(--bg-primary); padding: 8px 12px; border-radius: var(--radius-sm); margin-top: 6px; color: var(--text-secondary);">
                      ${reasonText} ${Utils.escapeHtml(m.explanation)}
                    </div>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  },

  masterMistake(id) {
    const isDe = window.I18n && window.I18n.isGerman();
    Storage.markMistakeMastered(id);
    Utils.showToast(isDe ? 'Super! Fehler als gemeistert markiert 🎯' : 'أحسنت! تم نقل الخطأ إلى المتقنات 🎯', 'success');
    this.renderMistakes();
  },

  // ==========================================
  // VIEW: PROGRESS & BACKUP
  // ==========================================
  renderProgress() {
    const isDe = window.I18n && window.I18n.isGerman();
    this.setBreadcrumb(isDe ? 'Statistiken / Mein Lernfortschritt & Datensicherung' : 'الإحصائيات / لوحة تقدمي والنسخ الاحتياطي');
    const data = Storage.load();
    const totalLessons = window.TOTAL_LESSONS || 57;
    const completed = Storage.getCompletedCount();
    const percent = Math.round((completed / totalLessons) * 100);

    const content = document.getElementById('app-content');
    content.innerHTML = `
      <div class="content-container fade-in">
        <div class="section-header">
          <div>
            <h1 class="section-title">${isDe ? 'Mein Lernfortschritt & Datensicherung' : 'لوحة تقدمي والنسخ الاحتياطي'}</h1>
            <p class="text-secondary">${isDe ? 'Deine Lernerfolge, Statistiken und Optionen zur Datensicherung' : 'تفاصيل إنجازك الأكاديمي، وخيارات حفظ ونقل بياناتك'}</p>
          </div>
        </div>

        <div class="grid-2" style="margin-bottom: 24px;">
          <div class="card">
            <h3>${isDe ? '📊 Lernstatistiken' : '📊 إحصائيات المنهج'}</h3>
            <div style="margin: 20px 0;">
              <div style="display: flex; justify-content: space-between; font-weight: 700; margin-bottom: 6px;">
                <span>${isDe ? 'Gesamter Lehrplan-Fortschritt' : 'إجمالي إكمال الدروس'}</span>
                <span>${percent}%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-bar-fill" style="width: ${percent}%;"></div>
              </div>
              <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 8px;">
                ${isDe ? `${completed} von ${totalLessons} Lektionen abgeschlossen.` : `أكملت ${completed} من أصل ${totalLessons} درساً.`}
              </p>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.95rem;">
              <div>🔥 <strong>${isDe ? 'Aktuelle Serie:' : 'السلسلة الحالية:'}</strong> ${data.streak.current} ${isDe ? 'Tage' : 'يوم'}</div>
              <div>🏆 <strong>${isDe ? 'Längste Serie:' : 'أطول سلسلة متتالية:'}</strong> ${data.streak.best} ${isDe ? 'Tage' : 'يوم'}</div>
              <div>⚡ <strong>${isDe ? 'Gesamte XP:' : 'مجموع نقاط XP:'}</strong> ${data.xp} ${isDe ? 'Punkte' : 'نقطة'}</div>
            </div>
          </div>

          <div class="card">
            <h3>${isDe ? '💾 Datensicherung & Übertragung' : '💾 النسخ الاحتياطي والنقل'}</h3>
            <p class="text-secondary" style="margin: 10px 0 16px 0; font-size: 0.95rem;">
              ${isDe 
                ? 'Du kannst deinen gesamten Lernfortschritt als JSON-Datei exportieren und jederzeit auf einem anderen Gerät wiederherstellen.' 
                : 'يمكنك تصدير كل تقدمك في ملف JSON واستيراده في أي وقت أو على أي جهاز آخر دون أن تفقد درجاتك.'}
            </p>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <button class="btn btn-primary" onclick="Storage.exportProgress()">
                ${isDe ? '⬇️ Fortschritt exportieren (JSON)' : '⬇️ تصدير تقدمي كملف (JSON)'}
              </button>
              
              <label class="btn btn-secondary" style="cursor: pointer; text-align: center;">
                ${isDe ? '⬆️ Fortschritt importieren (JSON)' : '⬆️ استيراد تقدم من ملف (JSON)'}
                <input type="file" id="import-file-input" accept=".json" style="display:none;" onchange="App.handleImport(event)">
              </label>

              <button class="btn btn-danger btn-sm" onclick="App.handleReset()" style="margin-top: 10px;">
                ${isDe ? '⚠️ Gesamten Fortschritt zurücksetzen' : '⚠️ إعادة تعيين كل التقدم'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  handleImport(e) {
    const isDe = window.I18n && window.I18n.isGerman();
    const file = e.target.files[0];
    if (!file) return;
    Storage.importProgress(file).then(() => {
      Utils.showToast(isDe ? 'Fortschritt erfolgreich importiert! 🚀' : 'تم استيراد تقدمك بنجاح! 🚀', 'success');
      this.updateHeaderStats();
      this.renderProgress();
    }).catch(err => {
      Utils.showToast((isDe ? 'Fehler beim Laden: ' : 'خطأ في قراءة ملف التقدم: ') + err.message, 'error');
    });
  },

  handleReset() {
    const isDe = window.I18n && window.I18n.isGerman();
    const confirmMsg = isDe 
      ? 'Möchtest du wirklich deinen gesamten Fortschritt löschen und von vorne beginnen?' 
      : 'هل أنت متأكد من رغبتك في حذف كل التقدم وإعادة البدء من الصفر؟';
    if (confirm(confirmMsg)) {
      Storage.resetAll();
      Utils.showToast(isDe ? 'Fortschritt zurückgesetzt' : 'تمت إعادة تعيين التقدم بنجاح', 'info');
      this.updateHeaderStats();
      this.renderProgress();
    }
  }
};

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
