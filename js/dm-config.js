// website/js/dm-config.js — Central Configuration for Deutsch Meister
// B2 Meister Mode, Social Study Ecosystem, Audio, and Storage Specifications

(function () {
  'use strict';

  window.DM = window.DM || {};

  const config = {
    // Level modes
    levels: {
      modes: ['a1-b1', 'b2'],
      defaultMode: 'a1-b1',
      b2Slug: 'b2',
      primarySlug: 'a1-b1'
    },

    // Storage specifications
    storage: {
      prefix: 'dmx.',
      schemaVersion: 1,
      keys: {
        schemaVersion: 'dmx.schema_version',
        levelMode: 'dmx.level_mode',
        settings: 'dmx.settings',
        study: 'dmx.study',
        profile: 'dmx.profile',
        friends: 'dmx.friends',
        b2Exams: 'dmx.b2_exams',
        b2Lessons: 'dmx.b2_lessons',
        achievements: 'dmx.achievements',
        backupPrefix: 'dmx.backup.'
      }
    },

    // Study time tracker thresholds
    studyTracker: {
      idleTimeoutSeconds: 90,     // User considered idle after 90s without interaction
      tickIntervalSeconds: 15,    // Flush active time every 15s
      heartbeatIntervalMs: 5000,  // Check user activity every 5s
      minSecondsForLog: 30,       // Minimum 30s to record a journal study session
      defaultDailyGoalSeconds: 1800 // 30 minutes daily goal
    },

    // Goethe-Zertifikat B2 Exam parameters
    exam: {
      passPercentage: 60,
      maxModuleScore: 25,
      maxTotalScore: 100,
      passModuleScore: 15, // 60% of 25
      modules: ['lesen', 'hoeren', 'schreiben', 'sprechen'],
      durationsMinutes: {
        lesen: 65,
        hoeren: 40,
        schreiben: 75,
        sprechen: 15
      }
    },

    // Speech & Audio Configuration
    audio: {
      provider: 'elevenlabs',
      femaleVoiceId: 'Xb7hH8MSUJpSbSDYk0k2', // Alice (Educator Female)
      maleVoiceId: 'JBFqnCBsd6RMkjVDRZzb',   // George (Native Male Partner)
      defaultRate: 0.88,
      cacheName: 'deutsch-meister-b2-audio'
    },

    // Social / Cloud Backend (Supabase)
    // Works 100% offline with local adapter if unconfigured
    supabase: {
      url: (typeof window !== 'undefined' && window.__SUPABASE_URL__) || 'https://xyzcompany.supabase.co',
      anonKey: (typeof window !== 'undefined' && window.__SUPABASE_ANON_KEY__) || 'sb-anon-key-placeholder',
      enabled: false // Will be set to true if real credentials are provided or configured
    }
  };

  // Deep freeze config in non-production to prevent accidental mutation
  function deepFreeze(object) {
    const propNames = Object.getOwnPropertyNames(object);
    for (const name of propNames) {
      const value = object[name];
      if (value && typeof value === 'object') {
        deepFreeze(value);
      }
    }
    return Object.freeze(object);
  }

  window.DM.cfg = deepFreeze(config);
})();
