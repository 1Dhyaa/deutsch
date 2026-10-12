const Storage = {
  STORAGE_KEY: 'deutsch_meister_progress',
  CURRENT_USER_KEY: 'deutsch_meister_current_user',
  USERS_LIST_KEY: 'deutsch_meister_users_list',
  CLOUD_APP_KEY: 'c8mdvphk',
  _migrated: false,
  _syncTimer: null,
  _isSyncing: false,
  lastSyncTime: null,

  // Normalize username for storage & cloud keys
  normalizeUsername(name) {
    const clean = String(name || 'Dhyaa').trim().toLowerCase().replace(/[^a-z0-9_\-\u0600-\u06FF]/g, '');
    return clean || 'dhyaa';
  },

  // Get active display username (defaults to Dhyaa)
  getCurrentUser() {
    this.ensureInitialMigration();
    try {
      return localStorage.getItem(this.CURRENT_USER_KEY) || 'Dhyaa';
    } catch (e) {
      return 'Dhyaa';
    }
  },

  // Get list of known usernames on this device
  getUsersList() {
    this.ensureInitialMigration();
    try {
      const raw = localStorage.getItem(this.USERS_LIST_KEY);
      const list = raw ? JSON.parse(raw) : ['Dhyaa'];
      if (!list.some(u => this.normalizeUsername(u) === 'dhyaa')) {
        list.unshift('Dhyaa');
      }
      return list;
    } catch (e) {
      return ['Dhyaa'];
    }
  },

  addUserToList(displayName) {
    const cleanDisplay = String(displayName || 'Dhyaa').trim() || 'Dhyaa';
    const norm = this.normalizeUsername(cleanDisplay);
    const list = this.getUsersList();
    const existingIdx = list.findIndex(u => this.normalizeUsername(u) === norm);
    if (existingIdx === -1) {
      list.push(cleanDisplay);
    } else {
      list[existingIdx] = cleanDisplay;
    }
    try {
      localStorage.setItem(this.USERS_LIST_KEY, JSON.stringify(list));
    } catch (e) {}
    return cleanDisplay;
  },

  getUserStorageKey(username) {
    return 'deutsch_meister_user_' + this.normalizeUsername(username || this.getCurrentUser());
  },

  // Migrate any existing progress into 'Dhyaa' automatically so nothing is lost
  ensureInitialMigration() {
    if (this._migrated) return;
    this._migrated = true;
    try {
      const currentUser = localStorage.getItem(this.CURRENT_USER_KEY);
      if (!currentUser) {
        localStorage.setItem(this.CURRENT_USER_KEY, 'Dhyaa');
      }
      const dhyaaKey = 'deutsch_meister_user_dhyaa';
      const existingDhyaa = localStorage.getItem(dhyaaKey);
      const legacyProgress = localStorage.getItem(this.STORAGE_KEY);

      if (!existingDhyaa && legacyProgress) {
        const parsed = JSON.parse(legacyProgress);
        parsed.username = 'Dhyaa';
        parsed.updatedAt = Date.now();
        localStorage.setItem(dhyaaKey, JSON.stringify(parsed));
      } else if (existingDhyaa && legacyProgress) {
        // Merge legacy progress into Dhyaa if current user is Dhyaa
        const activeNorm = this.normalizeUsername(localStorage.getItem(this.CURRENT_USER_KEY) || 'Dhyaa');
        if (activeNorm === 'dhyaa') {
          const merged = this.mergeProfiles(JSON.parse(existingDhyaa), JSON.parse(legacyProgress));
          merged.username = 'Dhyaa';
          localStorage.setItem(dhyaaKey, JSON.stringify(merged));
        }
      }

      const rawList = localStorage.getItem(this.USERS_LIST_KEY);
      if (!rawList) {
        localStorage.setItem(this.USERS_LIST_KEY, JSON.stringify(['Dhyaa']));
      }
    } catch (e) {
      console.warn('Migration notice:', e);
    }
  },
  
  // Default progress structure
  getDefault(username) {
    return {
      username: username || 'Dhyaa',
      xp: 0,
      streak: { current: 0, lastDate: null, best: 0 },
      lessons: {},
      mistakes: [],
      games: {
        flashcards: { box1: [], box2: [], box3: [], box4: [], box5: [] },
        articleGame: { highScore: 0, gamesPlayed: 0 },
        wordOrder: { highScore: 0, gamesPlayed: 0 },
        memoryMatch: { highScore: 0, gamesPlayed: 0 },
        verbSprint: { highScore: 0, gamesPlayed: 0 },
        prepositionGame: { highScore: 0, gamesPlayed: 0 },
        mistakesReview: { highScore: 0, gamesPlayed: 0 },
        phrasesGame: { highScore: 0, gamesPlayed: 0 },
        fehlerGame: { highScore: 0, gamesPlayed: 0 },
        satzbauGame: { highScore: 0, gamesPlayed: 0 },
        dialogGame: { highScore: 0, gamesPlayed: 0 },
        kasusGame: { highScore: 0, gamesPlayed: 0 }
      },
      exams: [],
      activeExams: {},
      settings: { theme: 'light', fontSize: 'normal' },
      updatedAt: 0,
      version: 2
    };
  },
  
  // Load progress for active user (or specified username)
  load(forUsername) {
    this.ensureInitialMigration();
    const activeUser = forUsername || this.getCurrentUser();
    const userKey = this.getUserStorageKey(activeUser);
    try {
      let data = localStorage.getItem(userKey);
      if (!data && this.normalizeUsername(activeUser) === 'dhyaa') {
        data = localStorage.getItem(this.STORAGE_KEY);
      }
      if (!data) return this.getDefault(activeUser);
      const parsed = JSON.parse(data);
      const def = this.getDefault(activeUser);
      return {
        ...def,
        ...parsed,
        username: parsed.username || activeUser,
        streak: { ...def.streak, ...(parsed.streak || {}) },
        games: { ...def.games, ...(parsed.games || {}) },
        exams: (parsed.exams || []),
        activeExams: (parsed.activeExams || {}),
        settings: { ...def.settings, ...(parsed.settings || {}) }
      };
    } catch (e) {
      console.error('Failed to load progress:', e);
      return this.getDefault(activeUser);
    }
  },
  
  // Save progress for active user and schedule Cloud Sync
  save(data, skipCloud = false) {
    this.ensureInitialMigration();
    const activeUser = this.getCurrentUser();
    const userKey = this.getUserStorageKey(activeUser);
    try {
      data.username = activeUser;
      data.updatedAt = Date.now();
      const serialized = JSON.stringify(data);
      localStorage.setItem(userKey, serialized);
      // Mirror to STORAGE_KEY for backwards compatibility
      localStorage.setItem(this.STORAGE_KEY, serialized);
      if (!skipCloud) {
        this.scheduleCloudPush(activeUser, data);
      }
    } catch (e) {
      console.error('Failed to save progress:', e);
    }
  },

  // Switch active user profile and sync with Cloud
  async switchUser(newUsername) {
    const cleanName = this.addUserToList(newUsername);
    try {
      localStorage.setItem(this.CURRENT_USER_KEY, cleanName);
    } catch (e) {}

    // Update active mirror immediately from local cache for this user
    const localUserData = this.load(cleanName);
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(localUserData));
    } catch (e) {}

    this.applyTheme();
    if (window.App && window.App.updateHeaderStats) {
      window.App.updateHeaderStats();
    }

    // Pull latest from Cloud and smart-merge
    await this.syncWithCloud(true);

    if (window.Router && typeof window.Router.handleRoute === 'function') {
      window.Router.handleRoute();
    }
    return this.load(cleanName);
  },

  // Smart-merge two profile objects so progress is never lost between PC & Phone
  mergeProfiles(a, b) {
    if (!a && !b) return this.getDefault();
    if (!a) return b;
    if (!b) return a;

    // Handle explicit reset if one side was explicitly reset more recently
    if (a.resetAt && (!b.updatedAt || a.resetAt > b.updatedAt)) return a;
    if (b.resetAt && (!a.updatedAt || b.resetAt > a.updatedAt)) return b;

    const def = this.getDefault(a.username || b.username || 'Dhyaa');
    const newer = (b.updatedAt || 0) > (a.updatedAt || 0) ? b : a;

    // 1. Merge Lessons & In-progress Quiz Sessions
    const mergedLessons = { ...(a.lessons || {}) };
    for (const [lid, bLesson] of Object.entries(b.lessons || {})) {
      const aLesson = mergedLessons[lid];
      if (!aLesson) {
        mergedLessons[lid] = bLesson;
      } else {
        // Pick session with more answered questions or newer timestamp
        let bestSession = aLesson.session || bLesson.session || null;
        if (aLesson.session && bLesson.session) {
          const countAnswered = (sess) => {
            if (!sess || !sess.states) return 0;
            const exCount = Object.values(sess.states.exercises || {}).filter(s => s && (s.status === 'correct' || s.status === 'wrong')).length;
            const qzCount = Object.values(sess.states.quiz || {}).filter(s => s && (s.status === 'correct' || s.status === 'wrong')).length;
            return exCount + qzCount;
          };
          const aAns = countAnswered(aLesson.session);
          const bAns = countAnswered(bLesson.session);
          if (bAns > aAns) bestSession = bLesson.session;
          else if (aAns > bAns) bestSession = aLesson.session;
          else bestSession = ((bLesson.session.updatedAt || 0) >= (aLesson.session.updatedAt || 0)) ? bLesson.session : aLesson.session;
        }
        mergedLessons[lid] = {
          ...aLesson,
          ...bLesson,
          completed: !!(aLesson.completed || bLesson.completed),
          quizScore: Math.max(aLesson.quizScore || 0, bLesson.quizScore || 0),
          totalQuestions: bLesson.totalQuestions || aLesson.totalQuestions || 5,
          bestScore: Math.max(aLesson.bestScore || 0, bLesson.bestScore || 0),
          attempts: Math.max(aLesson.attempts || 0, bLesson.attempts || 0),
          lastAccess: (bLesson.lastAccess && (!aLesson.lastAccess || bLesson.lastAccess > aLesson.lastAccess)) ? bLesson.lastAccess : aLesson.lastAccess,
          session: bestSession
        };
      }
    }

    // 2. Merge Mistakes
    const mistakesMap = new Map();
    for (const m of [...(a.mistakes || []), ...(b.mistakes || [])]) {
      if (!m || !m.question) continue;
      const key = `${m.lessonId || ''}::${m.question}`;
      const prev = mistakesMap.get(key);
      if (!prev) {
        mistakesMap.set(key, { ...m });
      } else {
        mistakesMap.set(key, {
          ...prev,
          ...m,
          mastered: !!(prev.mastered || m.mastered),
          reviewCount: Math.max(prev.reviewCount || 0, m.reviewCount || 0)
        });
      }
    }

    // 3. Merge Games
    const mergedGames = { ...def.games };
    const allGameKeys = new Set([...Object.keys(a.games || {}), ...Object.keys(b.games || {})]);
    for (const gk of allGameKeys) {
      if (gk === 'flashcards') {
        mergedGames.flashcards = (newer.games && newer.games.flashcards) || def.games.flashcards;
      } else {
        const ga = (a.games && a.games[gk]) || {};
        const gb = (b.games && b.games[gk]) || {};
        mergedGames[gk] = {
          highScore: Math.max(ga.highScore || 0, gb.highScore || 0),
          gamesPlayed: Math.max(ga.gamesPlayed || 0, gb.gamesPlayed || 0)
        };
      }
    }

    // 4. Merge Exams History
    const examsMap = new Map();
    for (const ex of [...(a.exams || []), ...(b.exams || [])]) {
      if (ex && ex.id) examsMap.set(ex.id, ex);
    }

    const aStreak = a.streak || def.streak;
    const bStreak = b.streak || def.streak;

    return {
      ...def,
      username: a.username || b.username || 'Dhyaa',
      xp: Math.max(a.xp || 0, b.xp || 0),
      streak: {
        current: Math.max(aStreak.current || 0, bStreak.current || 0),
        best: Math.max(aStreak.best || 0, bStreak.best || 0),
        lastDate: (bStreak.lastDate && (!aStreak.lastDate || bStreak.lastDate > aStreak.lastDate)) ? bStreak.lastDate : aStreak.lastDate
      },
      lessons: mergedLessons,
      mistakes: Array.from(mistakesMap.values()),
      games: mergedGames,
      exams: Array.from(examsMap.values()),
      activeExams: { ...(a.activeExams || {}), ...(b.activeExams || {}) },
      settings: { ...def.settings, ...(newer.settings || {}) },
      updatedAt: Math.max(a.updatedAt || 0, b.updatedAt || 0, Date.now()),
      version: 2
    };
  },

  setSyncStatusUI(status) {
    const dot = document.getElementById('cloud-sync-dot');
    const statusText = document.getElementById('user-modal-sync-status');
    if (dot) {
      if (status === 'syncing') {
        dot.textContent = '⏳';
        dot.title = 'جاري المزامنة السحابية...';
      } else if (status === 'ok') {
        dot.textContent = '☁️✓';
        dot.style.color = 'var(--success)';
        dot.title = 'تمت المزامنة السحابية بنجاح';
      } else if (status === 'offline') {
        dot.textContent = '☁️';
        dot.style.color = 'var(--text-muted)';
        dot.title = 'محفوظ محلياً';
      }
    }
    if (statusText) {
      if (status === 'syncing') {
        statusText.textContent = '⏳ جاري المزامنة مع السحابة...';
        statusText.style.color = 'var(--warning)';
      } else if (status === 'ok') {
        statusText.textContent = '✅ متصل ومتزامن سحابياً (الكمبيوتر ⇄ الهاتف)';
        statusText.style.color = 'var(--success)';
      }
    }
  },

  scheduleCloudPush(username, data) {
    clearTimeout(this._syncTimer);
    this._syncTimer = setTimeout(() => {
      this.pushToCloud(username, data);
    }, 600);
  },

  async pushToCloud(username, data) {
    const normUser = this.normalizeUsername(username || this.getCurrentUser());
    const payload = data || this.load(username);
    this.setSyncStatusUI('syncing');

    // 1. Save to local disk server if running on localhost
    if (typeof location !== 'undefined' && (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname.startsWith('192.168.'))) {
      fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: normUser, data: payload })
      }).catch(() => {});
    }

    // 2. Push to Cloud (bytebin + keyvalue pointer)
    try {
      const rPost = await fetch('https://bytebin.lucko.me/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (rPost.ok) {
        const { key } = await rPost.json();
        if (key) {
          const kvUrl = `https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/${this.CLOUD_APP_KEY}/dm_prof_${normUser}/${key}`;
          await fetch(kvUrl, { method: 'POST' });
          this.lastSyncTime = new Date();
          this.setSyncStatusUI('ok');
          return true;
        }
      }
    } catch (e) {
      console.warn('[CloudSync] Push notice:', e.message);
    }
    this.setSyncStatusUI('offline');
    return false;
  },

  async pullFromCloud(username) {
    const normUser = this.normalizeUsername(username || this.getCurrentUser());
    let remoteProfile = null;

    // 1. Try live Cloud KeyValue -> Bytebin
    try {
      const kvUrl = `https://keyvalue.immanuel.co/api/KeyVal/GetValue/${this.CLOUD_APP_KEY}/dm_prof_${normUser}`;
      const rKv = await fetch(kvUrl, { cache: 'no-store' });
      if (rKv.ok) {
        const key = await rKv.json();
        if (key && typeof key === 'string' && key.length > 3) {
          const rByte = await fetch(`https://bytebin.lucko.me/${key}`, { cache: 'no-store' });
          if (rByte.ok) {
            remoteProfile = await rByte.json();
          }
        }
      }
    } catch (e) {
      console.warn('[CloudSync] Cloud pull notice:', e.message);
    }

    // 2. Also check local disk API (if on localhost) or static deployed profile
    try {
      const isLocal = typeof location !== 'undefined' && (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname.startsWith('192.168.'));
      const diskUrl = isLocal ? `/api/profile?user=${normUser}` : `data/profiles/${normUser}.json`;
      const rDisk = await fetch(diskUrl, { cache: 'no-store' });
      if (rDisk.ok) {
        const diskProfile = await rDisk.json();
        if (diskProfile && diskProfile.version) {
          remoteProfile = remoteProfile ? this.mergeProfiles(remoteProfile, diskProfile) : diskProfile;
        }
      }
    } catch (e) {}

    return remoteProfile;
  },

  // Full bidirectional sync (Pull -> Smart Merge -> Save Local -> Push if updated)
  async syncWithCloud(showToastOnUpdate = false) {
    if (this._isSyncing) return;
    this._isSyncing = true;
    this.setSyncStatusUI('syncing');

    try {
      const activeUser = this.getCurrentUser();
      const localData = this.load(activeUser);
      const localBeforeStr = JSON.stringify({ xp: localData.xp, l: Object.keys(localData.lessons || {}).length, m: (localData.mistakes || []).length });

      const remoteData = await this.pullFromCloud(activeUser);

      if (remoteData) {
        const merged = this.mergeProfiles(localData, remoteData);
        this.save(merged, true);
        const mergedAfterStr = JSON.stringify({ xp: merged.xp, l: Object.keys(merged.lessons || {}).length, m: (merged.mistakes || []).length });

        // Push back merged state so both Cloud and Local Disk have the combined latest state
        await this.pushToCloud(activeUser, merged);

        if (window.App && window.App.updateHeaderStats) {
          window.App.updateHeaderStats();
        }

        if (showToastOnUpdate || localBeforeStr !== mergedAfterStr) {
          if (window.Utils && window.Utils.showToast) {
            const isDe = window.I18n && window.I18n.isGerman();
            Utils.showToast(
              isDe
                ? `☁️ Profil "${activeUser}" synchronisiert (${merged.xp} XP)`
                : `☁️ تمت مزامنة حساب "${activeUser}" بنجاح (${merged.xp} XP)`,
              'success',
              2500
            );
          }
          // Refresh current view if new data arrived from cloud
          if (localBeforeStr !== mergedAfterStr && window.Router && typeof window.Router.handleRoute === 'function') {
            window.Router.handleRoute();
          }
        }
      } else {
        // No remote profile yet — push local profile to create it in the Cloud!
        await this.pushToCloud(activeUser, localData);
        if (showToastOnUpdate && window.Utils && window.Utils.showToast) {
          Utils.showToast(`☁️ تم حفظ حساب "${activeUser}" على السحابة (${localData.xp} XP)`, 'success', 2500);
        }
      }
    } catch (e) {
      console.warn('[CloudSync] sync error:', e);
      this.setSyncStatusUI('offline');
    } finally {
      this._isSyncing = false;
    }
  },
  
  // Update streak (call on each session)
  updateStreak() {
    const data = this.load();
    const today = Utils.today();
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    
    if (data.streak.lastDate === today) return data; // Already counted today
    if (data.streak.lastDate === yesterday) {
      data.streak.current += 1;
    } else {
      data.streak.current = 1;
    }
    data.streak.lastDate = today;
    data.streak.best = Math.max(data.streak.best, data.streak.current);
    this.save(data);
    return data;
  },
  
  // Add XP
  addXP(amount) {
    const data = this.load();
    data.xp += amount;
    this.save(data);
    return data;
  },
  
  // Save lesson progress  
  saveLessonProgress(lessonId, quizScore, totalQuestions) {
    const data = this.load();
    const existing = data.lessons[lessonId] || {};
    data.lessons[lessonId] = {
      ...existing,
      completed: true,
      quizScore: quizScore,
      totalQuestions: totalQuestions,
      bestScore: Math.max(existing.bestScore || 0, quizScore),
      lastAccess: Utils.today(),
      attempts: (existing.attempts || 0) + 1
    };
    this.save(data);
    return data;
  },
  
  // Mark lesson as started (in progress)
  markLessonStarted(lessonId) {
    const data = this.load();
    if (!data.lessons[lessonId]) {
      data.lessons[lessonId] = {
        completed: false,
        quizScore: null,
        bestScore: 0,
        lastAccess: Utils.today(),
        attempts: 0,
        session: null
      };
    } else {
      data.lessons[lessonId].lastAccess = Utils.today();
    }
    this.save(data);
    return data;
  },

  // Save active in-progress exercise/quiz state for a lesson
  saveLessonSession(lessonId, sessionState) {
    if (!lessonId) return;
    const data = this.load();
    if (!data.lessons[lessonId]) {
      data.lessons[lessonId] = {
        completed: false,
        quizScore: null,
        bestScore: 0,
        lastAccess: Utils.today(),
        attempts: 0
      };
    }
    data.lessons[lessonId].session = { ...sessionState, updatedAt: Date.now() };
    data.lessons[lessonId].lastAccess = Utils.today();
    this.save(data);
  },

  // Get active in-progress exercise/quiz state for a lesson
  getLessonSession(lessonId) {
    if (!lessonId) return null;
    const data = this.load();
    return (data.lessons[lessonId] && data.lessons[lessonId].session) || null;
  },

  // Clear active session for a lesson
  clearLessonSession(lessonId) {
    if (!lessonId) return;
    const data = this.load();
    if (data.lessons[lessonId]) {
      data.lessons[lessonId].session = null;
      this.save(data);
    }
  },

  // Save active in-progress Official Exam session
  saveActiveExamSession(examId, sessionState) {
    if (!examId) return;
    const data = this.load();
    data.activeExams = data.activeExams || {};
    data.activeExams[examId] = sessionState;
    this.save(data);
  },

  // Get active in-progress Official Exam session
  getActiveExamSession(examId) {
    if (!examId) return null;
    const data = this.load();
    return (data.activeExams && data.activeExams[examId]) || null;
  },

  // Clear active in-progress Official Exam session
  clearActiveExamSession(examId) {
    if (!examId) return;
    const data = this.load();
    if (data.activeExams && data.activeExams[examId]) {
      delete data.activeExams[examId];
      this.save(data);
    }
  },
  
  // Add mistake
  addMistake(mistake) {
    const data = this.load();
    // Check if same mistake already exists
    const exists = data.mistakes.find(m => m.question === mistake.question && m.lessonId === mistake.lessonId);
    if (exists) {
      exists.reviewCount = (exists.reviewCount || 0) + 1;
      exists.lastReview = Utils.today();
    } else {
      data.mistakes.push({
        id: Utils.generateId(),
        lessonId: mistake.lessonId,
        question: mistake.question,
        myAnswer: mistake.myAnswer,
        correctAnswer: mistake.correctAnswer,
        explanation: mistake.explanation,
        reviewCount: 0,
        lastReview: null,
        mastered: false,
        addedDate: Utils.today()
      });
    }
    this.save(data);
    return data;
  },
  
  // Mark mistake as mastered
  markMistakeMastered(mistakeId) {
    const data = this.load();
    const mistake = data.mistakes.find(m => m.id === mistakeId);
    if (mistake) { mistake.mastered = true; }
    this.save(data);
    return data;
  },
  
  // Get unmastered mistakes
  getActiveMistakes() {
    return this.load().mistakes.filter(m => !m.mastered);
  },
  
  // Save game high score
  saveGameScore(gameKey, score) {
    const data = this.load();
    if (!data.games[gameKey]) {
      data.games[gameKey] = { highScore: 0, gamesPlayed: 0 };
    }
    data.games[gameKey].highScore = Math.max(data.games[gameKey].highScore || 0, score);
    data.games[gameKey].gamesPlayed = (data.games[gameKey].gamesPlayed || 0) + 1;
    this.save(data);
    return data;
  },

  // Save exam result
  saveExamResult(result) {
    const data = this.load();
    data.exams = data.exams || [];
    data.exams.unshift(result);
    this.save(data);
    return data;
  },

  // Get exam history
  getExamHistory() {
    return this.load().exams || [];
  },

  // Get single exam result by ID
  getExamResult(id) {
    const exams = this.getExamHistory();
    return exams.find(e => e.id === id) || null;
  },

  // Save tutor feedback to an exam result
  saveTutorFeedback(examResultId, feedback) {
    const data = this.load();
    data.exams = data.exams || [];
    const item = data.exams.find(e => e.id === examResultId);
    if (item) {
      item.tutorFeedback = feedback;
      item.tutorFeedbackDate = Utils.today();
      this.save(data);
      return true;
    }
    return false;
  },
  
  // Get total completed lessons
  getCompletedCount() {
    const data = this.load();
    return Object.values(data.lessons).filter(l => l.completed).length;
  },
  
  // Get total lessons count from LEVELS
  getTotalLessonsCount() {
    if (!window.LEVELS) return 0;
    return window.LEVELS.reduce((sum, level) => sum + level.lessons.length, 0);
  },
  
  // Get last accessed lesson ID
  getLastLesson() {
    const data = this.load();
    let last = null;
    let lastDate = null;
    for (const [id, info] of Object.entries(data.lessons)) {
      if (info.lastAccess && (!lastDate || info.lastAccess > lastDate)) {
        lastDate = info.lastAccess;
        last = id;
      }
    }
    return last;
  },
  
  // Export progress as JSON
  exportProgress() {
    const data = this.load();
    const user = this.normalizeUsername(this.getCurrentUser());
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `deutsch-meister-${user}-${Utils.today()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },
  
  // Import progress from JSON file
  importProgress(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (data.version) {
            this.save(data);
            resolve(data);
          } else {
            reject(new Error('Invalid progress file'));
          }
        } catch (err) {
          reject(err);
        }
      };
      reader.readAsText(file);
    });
  },
  
  // Toggle theme
  toggleTheme() {
    const data = this.load();
    data.settings.theme = data.settings.theme === 'light' ? 'dark' : 'light';
    this.save(data);
    document.documentElement.setAttribute('data-theme', data.settings.theme);
    return data.settings.theme;
  },
  
  // Apply saved theme on load
  applyTheme() {
    const data = this.load();
    document.documentElement.setAttribute('data-theme', data.settings.theme);
  },
  
  // Reset all progress for current user
  resetAll() {
    const fresh = this.getDefault(this.getCurrentUser());
    fresh.resetAt = Date.now();
    this.save(fresh);
  }
};

window.Storage = Storage;
