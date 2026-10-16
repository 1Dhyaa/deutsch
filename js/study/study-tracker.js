// website/js/study/study-tracker.js — Honest Active-Study-Time Tracker
// Tracks genuine active learning seconds, updates streaks, and records study sessions.

(function () {
  'use strict';

  window.DM = window.DM || {};

  const STORAGE_KEY = 'dmx.study';
  const IDLE_TIMEOUT_SEC = 90; // 90 seconds without activity = idle
  const FLUSH_INTERVAL_SEC = 15;

  let _activeSecondsBuffer = 0;
  let _lastInteractionTime = Date.now();
  let _isTabActive = !document.hidden;
  let _currentRoute = (window.Router && typeof window.Router.getCurrentPath === 'function') ? window.Router.getCurrentPath() : '/home';
  let _heartbeatTimer = null;
  let _initialized = false;

  const studyTracker = {
    // Initialize Tracker
    init() {
      if (_initialized) return;
      _initialized = true;

      // Ensure storage schema is ready
      this.ensureSchema();

      // Track user inputs to reset idle timer
      const onUserActivity = () => {
        _lastInteractionTime = Date.now();
      };

      const events = ['pointerdown', 'keydown', 'scroll', 'touchstart', 'input'];
      events.forEach(ev => {
        window.addEventListener(ev, onUserActivity, { passive: true });
      });

      // Pause immediately when tab loses visibility / user minimizes
      document.addEventListener('visibilitychange', () => {
        _isTabActive = !document.hidden;
        if (!_isTabActive) {
          this.flushBuffer();
        } else {
          _lastInteractionTime = Date.now();
        }
      });

      // Listen to DM Event Bus
      if (window.DM && window.DM.bus) {
        window.DM.bus.on('dm:routechange', (detail) => {
          this.flushBuffer();
          _currentRoute = (detail && detail.path) || '/home';
        });

        window.DM.bus.on('dm:lessoncomplete', (detail) => {
          this.logSession({
            action: 'lesson_completed',
            route: '/lesson',
            title: detail.lessonId || 'Lektion abgeschlossen'
          });
        });

        window.DM.bus.on('dm:examfinish', (detail) => {
          const res = detail.result || {};
          this.logSession({
            action: 'exam_completed',
            route: '/exam',
            title: (res.title && (res.title.ar || res.title.de)) || 'Modelltest abgeschlossen',
            seconds: res.timeUsedSeconds || 0
          });
        });
      }

      // Start 1-second accounting loop
      this.startLoop();
    },

    ensureSchema() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
          const initial = {
            version: 1,
            dailyGoalSeconds: 1800, // 30 minutes
            days: {},
            streaks: {
              current: 1,
              best: 1,
              lastActiveDay: DM.util.isoDay()
            }
          };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
        }
      } catch (e) {}
    },

    getStore() {
      this.ensureSchema();
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : { days: {}, streaks: {} };
      } catch (e) {
        return { days: {}, streaks: {} };
      }
    },

    saveStore(data) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (e) {
        console.warn('[StudyTracker] save error:', e);
      }
    },

    // 1-second tick loop
    startLoop() {
      if (_heartbeatTimer) clearInterval(_heartbeatTimer);

      let accumulatedSec = 0;

      _heartbeatTimer = setInterval(() => {
        const now = Date.now();
        const secondsSinceInput = (now - _lastInteractionTime) / 1000;

        // Check if audio or speech recognition is currently active
        const isAudioSpeaking = window.Speech && (
          (window.Speech.currentAudio && !window.Speech.currentAudio.paused) ||
          window.Speech.isListeningSessionActive ||
          (window.speechSynthesis && window.speechSynthesis.speaking)
        );

        // Consider user active if recent interaction OR actively listening to audio/recording
        const isUserActive = _isTabActive && (secondsSinceInput <= IDLE_TIMEOUT_SEC || isAudioSpeaking);

        if (isUserActive) {
          _activeSecondsBuffer += 1;
          accumulatedSec += 1;
        }

        // Flush every FLUSH_INTERVAL_SEC
        if (accumulatedSec >= FLUSH_INTERVAL_SEC) {
          accumulatedSec = 0;
          this.flushBuffer();
        }
      }, 1000);
    },

    // Flush buffered seconds to persistent storage
    flushBuffer() {
      if (_activeSecondsBuffer <= 0) return;

      const delta = _activeSecondsBuffer;
      _activeSecondsBuffer = 0;

      const store = this.getStore();
      const today = DM.util.isoDay();

      store.days = store.days || {};
      if (!store.days[today]) {
        store.days[today] = {
          activeSeconds: 0,
          routes: {},
          sessions: []
        };
      }

      const dayObj = store.days[today];
      dayObj.activeSeconds = (dayObj.activeSeconds || 0) + delta;

      // Update route breakdown
      dayObj.routes = dayObj.routes || {};
      dayObj.routes[_currentRoute] = (dayObj.routes[_currentRoute] || 0) + delta;

      // Update streak
      this.updateStreaks(store, today, dayObj.activeSeconds);

      this.saveStore(store);

      // Emit tick on DM Event Bus
      if (window.DM && window.DM.bus) {
        window.DM.bus.emit('dm:studytick', {
          seconds: delta,
          totalToday: dayObj.activeSeconds,
          route: _currentRoute
        });
      }
    },

    updateStreaks(store, todayStr, todaySeconds) {
      store.streaks = store.streaks || { current: 1, best: 1, lastActiveDay: todayStr };
      const streaks = store.streaks;

      // Streak requirement: at least 60 seconds of active study to count towards today
      if (todaySeconds < 60) return;

      if (streaks.lastActiveDay === todayStr) return; // already counted today

      const yesterday = new Date(Date.now() - 86400000);
      const yesterdayStr = DM.util.isoDay(yesterday);

      if (streaks.lastActiveDay === yesterdayStr) {
        streaks.current += 1;
      } else {
        streaks.current = 1;
      }

      streaks.lastActiveDay = todayStr;
      streaks.best = Math.max(streaks.best || 1, streaks.current);
    },

    // Log a discrete session (e.g. lesson completed, mock exam taken, 15 words reviewed)
    logSession(session) {
      this.flushBuffer();

      const store = this.getStore();
      const today = DM.util.isoDay();

      store.days = store.days || {};
      if (!store.days[today]) {
        store.days[today] = { activeSeconds: 0, routes: {}, sessions: [] };
      }

      const sessions = store.days[today].sessions || [];
      const newSession = {
        id: DM.util.uuid(),
        timestamp: Date.now(),
        action: session.action || 'study_activity',
        route: session.route || _currentRoute,
        title: session.title || 'Lernaktivität',
        seconds: session.seconds || 0
      };

      sessions.unshift(newSession);
      // Keep up to 30 sessions per day
      store.days[today].sessions = sessions.slice(0, 30);

      this.saveStore(store);

      // Check achievements after session logging
      if (window.DM && window.DM.achievements) {
        window.DM.achievements.check();
      }
    },

    // Get today's total active seconds
    getTodaySeconds() {
      const store = this.getStore();
      const today = DM.util.isoDay();
      const stored = (store.days && store.days[today] && store.days[today].activeSeconds) || 0;
      return stored + _activeSecondsBuffer;
    },

    // Get specific day's data
    getDayData(dateStr) {
      const store = this.getStore();
      return (store.days && store.days[dateStr]) || { activeSeconds: 0, routes: {}, sessions: [] };
    },

    // Get total active seconds for current week (Monday to Sunday)
    getWeeklySeconds() {
      const store = this.getStore();
      const mondayStr = DM.util.isoWeekStart();
      const mondayDate = new Date(mondayStr);

      let total = 0;
      for (let i = 0; i < 7; i++) {
        const d = new Date(mondayDate);
        d.setDate(d.getDate() + i);
        const dayStr = DM.util.isoDay(d);
        total += (store.days && store.days[dayStr] && store.days[dayStr].activeSeconds) || 0;
      }
      return total + _activeSecondsBuffer;
    },

    // Get daily history for the last N days (for heatmaps & charts)
    getHistory(daysCount = 90) {
      const store = this.getStore();
      const history = [];
      const today = new Date();

      for (let i = daysCount - 1; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const dateStr = DM.util.isoDay(d);
        const dayObj = (store.days && store.days[dateStr]) || { activeSeconds: 0 };
        history.push({
          date: dateStr,
          dayOfWeek: d.getDay(), // 0 = Sun, 1 = Mon ...
          seconds: dayObj.activeSeconds || 0,
          minutes: Math.round((dayObj.activeSeconds || 0) / 60)
        });
      }
      return history;
    },

    // Set daily study goal in minutes
    setDailyGoal(minutes) {
      const store = this.getStore();
      store.dailyGoalSeconds = Math.max(300, Math.round(minutes * 60)); // minimum 5 mins
      this.saveStore(store);
      return store.dailyGoalSeconds;
    },

    getDailyGoalSeconds() {
      const store = this.getStore();
      return store.dailyGoalSeconds || 1800;
    }
  };

  window.DM.study = studyTracker;
})();
