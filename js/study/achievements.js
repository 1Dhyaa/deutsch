// website/js/study/achievements.js — Gamified Achievements Engine
// Manages unlocking, rewards, XP grants, and celebration toasts.

(function () {
  'use strict';

  window.DM = window.DM || {};

  const STORAGE_KEY = 'dmx.achievements';
  let _definitions = [];
  let _initialized = false;

  const achievements = {
    async init() {
      if (_initialized) return;
      _initialized = true;

      // Load definitions from JSON via lazy loader or direct fetch
      try {
        if (window.DM && window.DM.lazy) {
          _definitions = await window.DM.lazy.loadJson('data/b2/achievements.json');
        } else {
          const res = await fetch('data/b2/achievements.json');
          _definitions = await res.json();
        }
      } catch (e) {
        console.warn('[Achievements] Definitions load error:', e);
      }

      // Check on initial load and whenever study/exam events occur
      if (window.DM && window.DM.bus) {
        window.DM.bus.on('dm:studytick', () => this.check());
        window.DM.bus.on('dm:examfinish', () => this.check());
        window.DM.bus.on('dm:lessoncomplete', () => this.check());
      }

      this.check();
    },

    getUnlockedMap() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const list = raw ? JSON.parse(raw) : [];
        const map = new Map();
        list.forEach(item => map.set(item.id, item));
        return map;
      } catch (e) {
        return new Map();
      }
    },

    saveUnlockedMap(map) {
      try {
        const arr = Array.from(map.values());
        localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
      } catch (e) {}
    },

    getAll() {
      const unlockedMap = this.getUnlockedMap();
      return _definitions.map(def => {
        const item = unlockedMap.get(def.id);
        return {
          ...def,
          unlocked: !!item,
          unlockedAt: item ? item.unlockedAt : null
        };
      });
    },

    // Check all achievement unlock conditions
    check() {
      if (!_definitions || _definitions.length === 0) return;

      const unlockedMap = this.getUnlockedMap();
      const studyData = (window.DM && window.DM.study) ? window.DM.study.getStore() : { streaks: {}, days: {} };
      const currentStreak = (studyData.streaks && studyData.streaks.current) || 1;
      const days = studyData.days || {};

      let b2Exams = [];
      try {
        const raw = localStorage.getItem('dmx.b2_exams');
        b2Exams = raw ? JSON.parse(raw) : [];
      } catch (e) {}

      let fvMasteredCount = 0;
      try {
        const rawFv = localStorage.getItem('dmx.fv_mastered');
        fvMasteredCount = rawFv ? JSON.parse(rawFv).length : 0;
      } catch (e) {}

      // Check conditions
      _definitions.forEach(ach => {
        if (unlockedMap.has(ach.id)) return; // already unlocked

        let shouldUnlock = false;

        // 1. Streak achievements
        if (ach.id === 'study_streak_3' && currentStreak >= 3) shouldUnlock = true;
        if (ach.id === 'study_streak_7' && currentStreak >= 7) shouldUnlock = true;
        if (ach.id === 'study_streak_30' && currentStreak >= 30) shouldUnlock = true;

        // 2. Active hour in a day
        if (ach.id === 'active_hour_1') {
          for (const day of Object.values(days)) {
            if (day.activeSeconds >= 3600) {
              shouldUnlock = true;
              break;
            }
          }
        }

        // 3. Funktionsverben mastery
        if (ach.id === 'fv_beginner' && fvMasteredCount >= 15) shouldUnlock = true;
        if (ach.id === 'fv_master' && fvMasteredCount >= 60) shouldUnlock = true;

        // 4. Exams
        if (ach.id === 'first_mock_exam' && b2Exams.length >= 1) shouldUnlock = true;

        if (ach.id === 'passed_lesen' && b2Exams.some(e => e.module === 'lesen' && e.passed)) shouldUnlock = true;
        if (ach.id === 'passed_hoeren' && b2Exams.some(e => e.module === 'hoeren' && e.passed)) shouldUnlock = true;
        if (ach.id === 'passed_schreiben' && b2Exams.some(e => e.module === 'schreiben' && e.passed)) shouldUnlock = true;
        if (ach.id === 'passed_sprechen' && b2Exams.some(e => e.module === 'sprechen' && e.passed)) shouldUnlock = true;

        if (ach.id === 'pruefungsreif') {
          const hasLesen = b2Exams.some(e => e.module === 'lesen' && e.passed);
          const hasHoeren = b2Exams.some(e => e.module === 'hoeren' && e.passed);
          const hasSchreiben = b2Exams.some(e => e.module === 'schreiben' && e.passed);
          const hasSprechen = b2Exams.some(e => e.module === 'sprechen' && e.passed);
          if (hasLesen && hasHoeren && hasSchreiben && hasSprechen) shouldUnlock = true;
        }

        // 5. First B2 step
        if (ach.id === 'first_b2_step') {
          const hasB2Lesson = Object.keys(Storage.load().lessons || {}).some(id => id.startsWith('b2-'));
          if (hasB2Lesson || b2Exams.length > 0 || fvMasteredCount > 0) shouldUnlock = true;
        }

        if (shouldUnlock) {
          this.unlock(ach, unlockedMap);
        }
      });
    },

    unlock(ach, unlockedMap) {
      unlockedMap.set(ach.id, {
        id: ach.id,
        unlockedAt: Date.now()
      });
      this.saveUnlockedMap(unlockedMap);

      // Grant XP
      if (ach.xp && window.Storage && window.Storage.addXP) {
        window.Storage.addXP(ach.xp);
        if (window.App && window.App.updateHeaderStats) {
          window.App.updateHeaderStats();
        }
      }

      // Celebratory Toast
      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();
      const title = isDe ? ach.title.de : ach.title.ar;
      if (window.Utils && window.Utils.showToast) {
        window.Utils.showToast(`🏆 ${isDe ? 'Erfolg freigeschaltet:' : 'إنجاز جديد:'} ${title} (+${ach.xp} XP)`, 'success', 3500);
      }

      // Emit event
      if (window.DM && window.DM.bus) {
        window.DM.bus.emit('dm:achievementunlocked', { achievement: ach });
      }
    }
  };

  window.DM.achievements = achievements;
})();
