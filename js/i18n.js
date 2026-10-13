// js/i18n.js — Internationalization & Dual-Language Manager (العربية / Deutsch)

const I18n = {
  currentLang: 'ar',

  translations: {
    // --- Navigation & Sidebar ---
    nav_home: { ar: 'الرئيسية', de: 'Startseite' },
    nav_lessons: { ar: 'الدروس (57 درس)', de: 'Lektionen (57)' },
    nav_diktat: { ar: 'مختبر الاستماع والإملاء', de: 'Diktat & Hör-Labor' },
    nav_schreiben: { ar: 'كتابة الإيميلات والرسائل', de: 'E-Mail & Schreiben' },
    nav_sprechen: { ar: 'المحادثة ومقابلة العمل', de: 'Sprechen & Interview' },
    nav_stories: { ar: 'القصص والحوارات التفاعلية', de: 'Geschichten & Dialoge' },
    nav_cheatsheets: { ar: 'الملخصات الذهبية للقواعد', de: 'Grammatik-Spickzettel' },
    nav_games: { ar: 'الألعاب التعليمية', de: 'Lernspiele' },
    nav_verbs: { ar: 'تصريف الأفعال (A1-B1)', de: 'Verbtabelle (A1-B1)' },
    nav_vocabulary: { ar: 'المفردات الشاملة', de: 'Wortschatz' },
    nav_mistakes: { ar: 'سجل أخطائي', de: 'Fehlerbuch' },
    nav_progress: { ar: 'لوحة التقدم', de: 'Mein Fortschritt' },
    nav_exams: { ar: 'الامتحانات (A2 / B1)', de: 'Goethe-Prüfungen' },
    goal_title: { ar: 'الهدف 🎯', de: 'Lernziel 🎯' },
    goal_level: { ar: 'Goethe B1 / B2', de: 'Goethe B1 / B2' },
    goal_desc: { ar: 'التحضير لـ Ausbildung في ألمانيا', de: 'Ausbildungsvorbereitung in Deutschland' },

    // --- Topbar & Header ---
    breadcrumb_home: { ar: '🇩🇪 مساحة التعلم الألمانية', de: '🇩🇪 Deutsch Meister Lernportal' },
    streak_day: { ar: 'يوم', de: 'Tage' },
    theme_toggle_title: { ar: 'تبديل الوضع الليلي / النهاري', de: 'Dunkel-/Hellmodus umschalten' },
    audio_settings_title: { ar: 'إعدادات الصوت والذكاء الاصطناعي', de: 'Audio- & Spracheinstellungen' },
    lang_toggle_title: { ar: 'تبديل اللغة (العربية / Deutsch)', de: 'Sprache wechseln (Deutsch / العربية)' },

    // --- Home View ---
    home_welcome_title: { ar: 'مرحباً بك في Deutsch Meister! 🇩🇪', de: 'Willkommen bei Deutsch Meister! 🇩🇪' },
    home_welcome_subtitle: { 
      ar: 'منهجك التفاعلي الشامل للوصول إلى الطلاقة في اللغة الألمانية واجتياز امتحانات Goethe الرسمية بثقة.',
      de: 'Dein interaktives Lernportal für Deutsch als Fremdsprache bis zum Goethe B1/B2 Zertifikat.'
    },
    home_curriculum_btn: { ar: 'استعراض خريطة المنهج (57 درساً) ➔', de: 'Alle 57 Lektionen ansehen ➔' },
    home_games_btn: { ar: 'الألعاب والتدريبات السريعة ⚡', de: 'Schnelle Lernspiele & Quiz ⚡' },
    home_verbs_btn: { ar: 'قاموس تصريف الأفعال الشامل 📖', de: 'Vollständige Verbtabelle 📖' },
    home_continue_title: { ar: 'متابعة التعلم من حيث توقفت', de: 'Dort weitermachen, wo du aufgehört hast' },
    home_continue_btn: { ar: 'متابعة الدرس ➔', de: 'Lektion fortsetzen ➔' },
    home_completed_stat: { ar: 'درساً مكتملاً', de: 'Lektionen abgeschlossen' },
    home_streak_stat: { ar: 'سلسلة المذاكرة', de: 'Tage Lernserie' },
    home_xp_stat: { ar: 'نقاط الخبرة', de: 'Erfahrungspunkte' },
    home_mistakes_stat: { ar: 'أخطاء للمراجعة', de: 'Fehler zum Wiederholen' },

    // --- Lessons Map ---
    lessons_map_title: { ar: 'خريطة المنهج والدروس', de: 'Lehrplan & Lektionsübersicht' },
    lessons_map_subtitle: { 
      ar: '57 درساً مُنظماً خطوة بخطوة مع شروحات وتمارين واختبارات فورية',
      de: '57 strukturierte Lektionen mit Grammatikerklärungen, Beispielen und Quiz'
    },
    lessons_ready_badge: { ar: '⭐ جاهز للدراسة', de: '⭐ Bereit zum Lernen' },
    lessons_done_badge: { ar: '✅ مكتمل', de: '✅ Abgeschlossen' },
    lessons_view_btn: { ar: 'استعراض الدروس', de: 'Lektionen anzeigen' },

    // --- Lesson Renderer ---
    lesson_goal_title: { ar: 'الهدف من الدرس', de: 'Lernziel der Lektion' },
    lesson_explanation_title: { ar: 'الشرح والقواعد', de: 'Erklärung & Grammatik' },
    lesson_examples_title: { ar: 'أمثلة عملية', de: 'Beispielsätze' },
    lesson_tips_title: { ar: 'نصائح وملاحظات هامة', de: 'Wichtige Lerntipps' },
    lesson_summary_title: { ar: 'ملخص سريع للحفظ', de: 'Zusammenfassung & Merksätze' },
    lesson_vocab_title: { ar: 'مفردات الدرس', de: 'Wortschatz der Lektion' },
    lesson_exercises_title: { ar: 'تمارين تفاعلية', de: 'Interaktive Übungen' },
    lesson_quiz_title: { ar: 'الاختبار النهائي', de: 'Abschlusstest' },
    lesson_nav_prev: { ar: 'الدرس السابق', de: 'Vorherige Lektion' },
    lesson_nav_all: { ar: 'العودة للدروس', de: 'Alle Lektionen' },
    lesson_nav_next: { ar: 'الدرس التالي', de: 'Nächste Lektion' },

    // --- Games Hub ---
    games_hub_title: { ar: 'منطقة الألعاب والتدريبات التفاعلية', de: 'Interaktive Lernspiele & Quiz' },
    games_hub_subtitle: { 
      ar: 'ألعاب تدريبية سريعة لتثبيت المفردات، بناء الجملة V2، الجمل الفرعية، كشف الأخطاء، وفنون المحادثة',
      de: 'Kurze Trainingsspiele für Wortschatz, Satzbau, Nebensätze, Fehlerkorrektur und Konversation'
    },
    game_play_now: { ar: 'العب الآن ➔', de: 'Jetzt spielen ➔' },
    game_best_score: { ar: 'أعلى نتيجة:', de: 'Beste Punktzahl:' },

    // --- Mistakes Log ---
    mistakes_title: { ar: 'سجل أخطائي للمراجعة (Fehlerdatenbank)', de: 'Mein Fehlerbuch (Fehlerdatenbank)' },
    mistakes_subtitle: { 
      ar: 'الأسئلة والتمارين التي أخطأت فيها لتتدرب عليها حتى تتقنها تماماً',
      de: 'Fragen und Übungen, bei denen Fehler aufgetreten sind, bis zur perfekten Beherrschung'
    },
    mistakes_active_count: { ar: 'خطأ نشط', de: 'aktive Fehler' },
    mistakes_empty_title: { ar: 'رائع جداً! لا توجد أخطاء مسجلة حالياً 🎉', de: 'Hervorragend! Keine offenen Fehler vorhanden 🎉' },
    mistakes_empty_desc: { 
      ar: 'عندما تخطئ في أي تمرين أو اختبار، سيظهر الخطأ هنا تلقائياً مع الشرح والتصحيح.',
      de: 'Sobald du bei einer Übung einen Fehler machst, wird er hier automatisch mit Erklärung gespeichert.'
    },
    mistakes_master_btn: { ar: '✓ تم الإتقان', de: '✓ Als gemeistert markieren' },
    mistakes_my_ans: { ar: '❌ إجابتي:', de: '❌ Meine Antwort:' },
    mistakes_correct_ans: { ar: '✅ الإجابة الصحيحة:', de: '✅ Richtige Antwort:' },
    mistakes_reason: { ar: '💡 السبب:', de: '💡 Erklärung & Regel:' },

    // --- Progress & Backup ---
    progress_title: { ar: 'لوحة تقدمي والنسخ الاحتياطي', de: 'Mein Lernfortschritt & Datensicherung' },
    progress_subtitle: { 
      ar: 'تفاصيل إنجازك الأكاديمي، وخيارات حفظ ونقل بياناتك',
      de: 'Übersicht über deine Lernerfolge, Statistiken und Daten-Backup'
    },
    progress_stats_title: { ar: '📊 إحصائيات المنهج', de: '📊 Lernstatistiken' },
    progress_total_completed: { ar: 'إجمالي إكمال الدروس', de: 'Gesamter Lernfortschritt' },
    progress_backup_title: { ar: '💾 النسخ الاحتياطي والنقل', de: '💾 Datensicherung & Übertragung' },
    progress_backup_desc: { 
      ar: 'يمكنك تصدير كل تقدمك في ملف JSON واستيراده في أي وقت أو على أي جهاز آخر دون أن تفقد درجاتك.',
      de: 'Exportiere deinen gesamten Fortschritt als JSON-Datei und importiere ihn jederzeit auf jedem Gerät.'
    },
    progress_export_btn: { ar: '⬇️ تصدير تقدمي كملف (JSON)', de: '⬇️ Fortschritt exportieren (JSON)' },
    progress_import_btn: { ar: '⬆️ استيراد تقدم من ملف (JSON)', de: '⬆️ Fortschritt importieren (JSON)' },
    progress_reset_btn: { ar: '⚠️ إعادة تعيين كل التقدم', de: '⚠️ Gesamten Fortschritt zurücksetzen' }
  },

  init() {
    const saved = (window.Storage && window.Storage.load().settings.lang) || 'ar';
    this.currentLang = saved;
    this.applyLanguage(saved, false);
    this.bindEvents();
  },

  bindEvents() {
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn && !langBtn.dataset.i18nBound) {
      langBtn.dataset.i18nBound = 'true';
      langBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleLang();
        if (window.App && window.App.updateHeaderStats) {
          window.App.updateHeaderStats();
        }
      });
    }
  },

  getLang() {
    return this.currentLang || 'ar';
  },

  isGerman() {
    return this.currentLang === 'de';
  },

  t(key, fallback = '') {
    const item = this.translations[key];
    if (!item) return fallback;
    return item[this.currentLang] || item.ar || fallback;
  },

  toggleLang() {
    const newLang = this.currentLang === 'ar' ? 'de' : 'ar';
    this.setLanguage(newLang);
    return newLang;
  },

  setLanguage(lang) {
    this.currentLang = lang;
    if (window.Storage) {
      const data = window.Storage.load();
      data.settings.lang = lang;
      window.Storage.save(data);
    }
    this.applyLanguage(lang, true);
  },

  applyLanguage(lang, notify = true) {
    const isDe = (lang === 'de');
    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    // 1. Set HTML tag attributes & document direction
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', isDe ? 'ltr' : 'rtl');
    if (bodyEl) {
      bodyEl.setAttribute('dir', isDe ? 'ltr' : 'rtl');
    }

    // 2. Update Toggle Button Text/Pill in Topbar
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.innerHTML = isDe 
        ? '<span style="font-size:1.1rem; line-height:1;">🇸🇦</span> <span>العربية</span>' 
        : '<span style="font-size:1.1rem; line-height:1;">🇩🇪</span> <span>Deutsch</span>';
      langBtn.title = isDe ? 'Auf Arabisch umstellen' : 'Auf Deutsch umstellen';
    }

    // 3. Update Static Navigation DOM items
    this.updateStaticNav();

    // 4. Update Header Breadcrumb default
    const breadcrumb = document.getElementById('desktop-breadcrumb');
    if (breadcrumb && !breadcrumb.dataset.custom) {
      breadcrumb.textContent = isDe ? '🇩🇪 Deutsch Meister Lernportal' : '🇩🇪 مساحة التعلم الألمانية';
    }

    // 5. Toast Notification
    if (notify && window.Utils && window.Utils.showToast) {
      window.Utils.showToast(
        isDe ? 'Sprache auf Deutsch umgestellt! 🇩🇪' : 'تم تفعيل اللغة العربية! 🇸🇦',
        'info',
        2000
      );
    }

    // 6. Refresh current view in router to re-render with new language
    if (notify && window.Router && window.Router.handleRoute) {
      window.Router.handleRoute();
    }
  },

  updateStaticNav() {
    const isDe = this.isGerman();

    // Sidebar items
    const navMap = [
      { route: '/home', key: 'nav_home' },
      { route: '/lessons', key: 'nav_lessons' },
      { route: '/diktat', key: 'nav_diktat' },
      { route: '/schreiben', key: 'nav_schreiben' },
      { route: '/sprechen', key: 'nav_sprechen' },
      { route: '/stories', key: 'nav_stories' },
      { route: '/cheatsheets', key: 'nav_cheatsheets' },
      { route: '/games', key: 'nav_games' },
      { route: '/verbs', key: 'nav_verbs' },
      { route: '/vocabulary', key: 'nav_vocabulary' },
      { route: '/exams', key: 'nav_exams' },
      { route: '/mistakes', key: 'nav_mistakes' },
      { route: '/progress', key: 'nav_progress' }
    ];

    navMap.forEach(item => {
      document.querySelectorAll(`[data-route="${item.route}"] span, a[href="#${item.route}"] span`).forEach(span => {
        span.textContent = this.t(item.key);
      });
    });

    // Brand subtitle
    const brandSub = document.querySelector('.brand-sub');
    if (brandSub) {
      brandSub.textContent = isDe ? 'A1-Wiederholung & A2-Lehrplan' : 'مراجعة A1 + منهج A2';
    }

    // Goal Card
    const goalTitle = document.querySelector('.goal-badge');
    const goalDesc = document.querySelector('.goal-desc');
    if (goalTitle) goalTitle.textContent = this.t('goal_title');
    if (goalDesc) goalDesc.textContent = this.t('goal_desc');
  }
};

window.I18n = I18n;
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => I18n.init());
} else {
  I18n.init();
}
