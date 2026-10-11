const Storage = {
  STORAGE_KEY: 'deutsch_meister_progress',
  
  // Default progress structure
  getDefault() {
    return {
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
        mistakesReview: { highScore: 0, gamesPlayed: 0 }
      },
      exams: [],
      settings: { theme: 'light', fontSize: 'normal' },
      version: 1
    };
  },
  
  // Load progress
  load() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (!data) return this.getDefault();
      const parsed = JSON.parse(data);
      // Merge with defaults to handle missing keys on upgrade
      return { ...this.getDefault(), ...parsed, 
        streak: { ...this.getDefault().streak, ...(parsed.streak || {}) },
        games: { ...this.getDefault().games, ...(parsed.games || {}) },
        exams: (parsed.exams || []),
        settings: { ...this.getDefault().settings, ...(parsed.settings || {}) }
      };
    } catch (e) {
      console.error('Failed to load progress:', e);
      return this.getDefault();
    }
  },
  
  // Save progress
  save(data) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save progress:', e);
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
        attempts: 0
      };
      this.save(data);
    }
    return data;
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
    if (data.games[gameKey]) {
      data.games[gameKey].highScore = Math.max(data.games[gameKey].highScore || 0, score);
      data.games[gameKey].gamesPlayed = (data.games[gameKey].gamesPlayed || 0) + 1;
    }
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
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `deutsch-meister-backup-${Utils.today()}.json`;
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
  
  // Reset all progress
  resetAll() {
    this.save(this.getDefault());
  }
};
