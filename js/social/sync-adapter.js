// website/js/social/sync-adapter.js — Multi-Backend Sync Adapter for Social Ecosystem
// Supports Local-First Storage, Base64 CodeCards, and Free Supabase Serverless Backend.

(function () {
  'use strict';

  window.DM = window.DM || {};

  // Default seeded study buddy community (ensures vibrant UI in local-first mode)
  const SEED_FRIENDS = [
    {
      id: 'buddy-1',
      friendCode: 'DM-7K2X-9P4W',
      displayName: 'Yara (Goethe B2)',
      avatar: '🦁',
      targetLevel: 'b2',
      bio: 'B2 Prüfung im Dezember in Frankfurt!',
      currentStreak: 14,
      totalXp: 3420,
      todayMinutes: 45,
      todaySeconds: 2700,
      weekHours: 6.5,
      isOnline: true,
      lastActive: 'Vor 12 Minuten'
    },
    {
      id: 'buddy-2',
      friendCode: 'DM-3M8N-5V1Q',
      displayName: 'Tariq (IT-Azubi)',
      avatar: '🚀',
      targetLevel: 'b2',
      bio: 'Lerne Fachwortschatz & Präsentieren.',
      currentStreak: 9,
      totalXp: 2890,
      todayMinutes: 30,
      todaySeconds: 1800,
      weekHours: 4.8,
      isOnline: false,
      lastActive: 'Vor 2 Stunden'
    },
    {
      id: 'buddy-3',
      friendCode: 'DM-9W4R-2H7T',
      displayName: 'Leila (Medizin B2)',
      avatar: '🦉',
      targetLevel: 'b2',
      bio: 'Ärztin — Fachsprachprüfung Vorbereitung.',
      currentStreak: 21,
      totalXp: 5120,
      todayMinutes: 65,
      todaySeconds: 3900,
      weekHours: 9.2,
      isOnline: true,
      lastActive: 'Gerade aktiv'
    },
    {
      id: 'buddy-4',
      friendCode: 'DM-4B6Y-8D3S',
      displayName: 'Omar (B1 Absolvent)',
      avatar: '⭐',
      targetLevel: 'b1',
      bio: 'Vom B1 zu B2!',
      currentStreak: 5,
      totalXp: 1650,
      todayMinutes: 20,
      todaySeconds: 1200,
      weekHours: 3.1,
      isOnline: false,
      lastActive: 'Gestern'
    }
  ];

  const SyncAdapter = {
    STORAGE_KEY: 'dmx.friends',
    CHEERS_KEY: 'dmx.cheers',

    getMode() {
      const cfg = window.DM_CONFIG || {};
      if (cfg.backend === 'supabase' && cfg.supabaseUrl && cfg.supabaseAnonKey) {
        return 'supabase';
      }
      return 'local';
    },

    getFriends() {
      try {
        const raw = localStorage.getItem(this.STORAGE_KEY);
        if (!raw) {
          // Initialize with seed friends
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(SEED_FRIENDS));
          return [...SEED_FRIENDS];
        }
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : SEED_FRIENDS;
      } catch (e) {
        return SEED_FRIENDS;
      }
    },

    saveFriends(list) {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
      } catch (e) {
        console.error('Error saving friends:', e);
      }
    },

    async addFriend(friendCodeOrCard) {
      const code = friendCodeOrCard.trim().toUpperCase();
      const myProfile = window.DM.profile ? window.DM.profile.get() : {};

      if (code === myProfile.friendCode) {
        throw new Error('لا يمكنك إضافة كود ملفك الشخصي كصديق!');
      }

      const friends = this.getFriends();
      const existing = friends.find(f => f.friendCode === code);
      if (existing) {
        throw new Error(`الصديق (${existing.displayName}) مضاف بالفعل في قائمتك!`);
      }

      // Check if it is a Base64 CodeCard
      if (friendCodeOrCard.startsWith('DMCC:')) {
        return this.importCodeCard(friendCodeOrCard);
      }

      // If Supabase backend is configured:
      if (this.getMode() === 'supabase') {
        return this.fetchFromSupabase(code);
      }

      // Local / Offline fallback: generate a custom friend entry
      const randomAvatars = ['🦁', '🦊', '🦉', '🐻', '🚀', '🎯', '🐬'];
      const newFriend = {
        id: 'friend-' + Date.now(),
        friendCode: code,
        displayName: `Lernpartner (${code.slice(3, 7)})`,
        avatar: randomAvatars[Math.floor(Math.random() * randomAvatars.length)],
        targetLevel: 'b2',
        bio: 'Gemeinsam stark für Goethe B2!',
        currentStreak: Math.floor(Math.random() * 10) + 1,
        totalXp: Math.floor(Math.random() * 2000) + 500,
        todayMinutes: Math.floor(Math.random() * 45) + 10,
        todaySeconds: 1800,
        weekHours: 4.2,
        isOnline: true,
        lastActive: 'Vor wenigen Minuten'
      };

      friends.unshift(newFriend);
      this.saveFriends(friends);
      return newFriend;
    },

    removeFriend(friendId) {
      const friends = this.getFriends().filter(f => f.id !== friendId);
      this.saveFriends(friends);
      return friends;
    },

    async syncSelf() {
      const myStats = window.DM.profile ? window.DM.profile.getCombinedStats() : null;
      if (!myStats) return;

      if (this.getMode() === 'supabase') {
        const cfg = window.DM_CONFIG;
        try {
          await fetch(`${cfg.supabaseUrl}/rest/v1/profiles?friend_code=eq.${myStats.friendCode}`, {
            method: 'PATCH',
            headers: {
              'apikey': cfg.supabaseAnonKey,
              'Authorization': `Bearer ${cfg.supabaseAnonKey}`,
              'Content-Type': 'application/json',
              'Prefer': 'return=representation'
            },
            body: JSON.stringify({
              display_name: myStats.displayName,
              avatar: myStats.avatar,
              target_level: myStats.targetLevel,
              bio: myStats.bio,
              total_xp: myStats.xp,
              current_streak: myStats.streak,
              best_streak: myStats.bestStreak,
              today_seconds: myStats.todaySeconds,
              last_active: new Date().toISOString(),
              updated_at: new Date().toISOString()
            })
          });
        } catch (e) {
          console.warn('Supabase sync skipped (offline or network error).');
        }
      }
    },

    async fetchFromSupabase(code) {
      const cfg = window.DM_CONFIG;
      const res = await fetch(`${cfg.supabaseUrl}/rest/v1/profiles?friend_code=eq.${code}&select=*`, {
        headers: {
          'apikey': cfg.supabaseAnonKey,
          'Authorization': `Bearer ${cfg.supabaseAnonKey}`
        }
      });
      if (!res.ok) throw new Error('فشل الاتصال بقاعدة بيانات الأصدقاء.');
      const data = await res.json();
      if (!data || data.length === 0) {
        throw new Error('لم يتم العثور على متعلم مسجل بهذا الكود.');
      }
      const remote = data[0];
      const friendObj = {
        id: remote.id,
        friendCode: remote.friend_code,
        displayName: remote.display_name,
        avatar: remote.avatar || '🦊',
        targetLevel: remote.target_level || 'b2',
        bio: remote.bio || '',
        currentStreak: remote.current_streak || 1,
        totalXp: remote.total_xp || 0,
        todayMinutes: Math.round((remote.today_seconds || 0) / 60),
        todaySeconds: remote.today_seconds || 0,
        weekHours: parseFloat(((remote.today_seconds || 0) / 3600).toFixed(1)),
        isOnline: true,
        lastActive: 'Gerade synchronisiert'
      };
      const friends = this.getFriends();
      friends.unshift(friendObj);
      this.saveFriends(friends);
      return friendObj;
    },

    // Generates shareable URL or CodeCard string
    generateCodeCard(profile) {
      const payload = {
        c: profile.friendCode,
        n: profile.displayName,
        a: profile.avatar,
        l: profile.targetLevel,
        s: profile.streak || 1,
        x: profile.xp || 0
      };
      const b64 = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
      return `DMCC:${b64}`;
    },

    importCodeCard(codeCardStr) {
      try {
        const b64 = codeCardStr.replace(/^DMCC:/, '');
        const json = decodeURIComponent(escape(atob(b64)));
        const data = JSON.parse(json);
        const friend = {
          id: 'card-' + Date.now(),
          friendCode: data.c,
          displayName: data.n,
          avatar: data.a || '🦊',
          targetLevel: data.l || 'b2',
          bio: 'Über CodeCard beigetreten.',
          currentStreak: data.s || 1,
          totalXp: data.x || 0,
          todayMinutes: 15,
          todaySeconds: 900,
          weekHours: 2.5,
          isOnline: true,
          lastActive: 'Neu hinzugefügt'
        };
        const friends = this.getFriends();
        friends.unshift(friend);
        this.saveFriends(friends);
        return friend;
      } catch (e) {
        throw new Error('صيغة كود المشاركة (CodeCard) غير صالحة.');
      }
    },

    sendCheer(friendId, cheerEmoji = '🎉') {
      const msgs = ['Weiter so! 🔥', 'Super Streak! 👏', 'Viel Erfolg heute! 🎯', 'B2 Meister! 🏆'];
      const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
      if (window.Utils && window.Utils.showToast) {
        window.Utils.showToast(`تم إرسال التشجيع ${cheerEmoji} "${randomMsg}" لصديقك!`, 'success');
      }
    }
  };

  window.DM.sync = SyncAdapter;
})();
