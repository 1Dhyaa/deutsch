// website/js/social/profile.js — User Profile & Friend Code Management
// Manages local profile, unique friend code, target level, and stats integration.

(function () {
  'use strict';

  window.DM = window.DM || {};

  const AVATARS = ['🦊', '🦁', '🦉', '🐻', '🚀', '⭐', '🎓', '🎯', '🦅', '🐬', '🏆', '🔥'];

  const ProfileManager = {
    STORAGE_KEY: 'dmx.profile',

    getDefault() {
      const code = this.generateFriendCode();
      const defaultName = (window.Storage && window.Storage.currentUsername && window.Storage.currentUsername !== 'default')
        ? window.Storage.currentUsername
        : 'Deutsch-Lerner';

      return {
        id: (window.DM.util && window.DM.util.uuid) ? window.DM.util.uuid() : 'user-' + Date.now(),
        friendCode: code,
        displayName: defaultName,
        avatar: '🦊',
        targetLevel: 'b2',
        bio: 'Lerne aktiv für das Goethe-Zertifikat B2!',
        createdAt: Date.now(),
        updatedAt: Date.now()
      };
    },

    get() {
      try {
        const raw = localStorage.getItem(this.STORAGE_KEY);
        if (!raw) {
          const fresh = this.getDefault();
          this.save(fresh);
          return fresh;
        }
        return JSON.parse(raw);
      } catch (e) {
        console.error('Error reading profile:', e);
        return this.getDefault();
      }
    },

    save(profileData) {
      try {
        profileData.updatedAt = Date.now();
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(profileData));
        if (window.DM && window.DM.bus) {
          window.DM.bus.emit('dm:profilechange', profileData);
        }
        return profileData;
      } catch (e) {
        console.error('Error saving profile:', e);
      }
    },

    generateFriendCode() {
      // 8 alphanumeric characters excluding ambiguous 0/O, 1/I
      const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
      let part1 = '';
      let part2 = '';
      for (let i = 0; i < 4; i++) {
        part1 += chars.charAt(Math.floor(Math.random() * chars.length));
        part2 += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return `DM-${part1}-${part2}`;
    },

    getCombinedStats() {
      const profile = this.get();
      const storageData = (window.Storage && window.Storage.load) ? window.Storage.load() : { xp: 0, streak: { current: 1 } };
      const todaySec = (window.DM && window.DM.study && typeof window.DM.study.getTodaySeconds === 'function')
        ? window.DM.study.getTodaySeconds()
        : 0;

      return {
        ...profile,
        xp: storageData.xp || 0,
        streak: (storageData.streak && storageData.streak.current) || 1,
        bestStreak: (storageData.streak && storageData.streak.best) || 1,
        todaySeconds: todaySec,
        todayMinutes: Math.round(todaySec / 60)
      };
    },

    renderEditModal(onSaved) {
      const profile = this.get();
      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();

      const modalId = 'b2-profile-modal';
      const existing = document.getElementById(modalId);
      if (existing) existing.remove();

      const modalEl = document.createElement('div');
      modalEl.id = modalId;
      modalEl.style.cssText = `
        position: fixed; inset: 0; z-index: 9999;
        background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(4px);
        display: flex; align-items: center; justify-content: center; padding: 16px;
      `;

      modalEl.innerHTML = `
        <div class="card fade-in" style="width: 100%; max-width: 480px; padding: 26px; border-radius: var(--radius-lg); max-height: 90vh; overflow-y: auto;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
            <h3 style="margin:0; font-size:1.25rem;">
              👤 ${isDe ? 'Profil bearbeiten' : 'تعديل الملف الشخصي'}
            </h3>
            <button type="button" class="btn btn-outline btn-sm" id="btn-close-prof-modal">✕</button>
          </div>

          <div style="margin-bottom:16px;">
            <label style="display:block; font-weight:700; margin-bottom:6px; font-size:0.9rem;">
              ${isDe ? 'Wählen Sie Ihren Avatar:' : 'اختر صورتك الرمزية (Avatar):'}
            </label>
            <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:10px;" id="avatar-picker-grid">
              ${AVATARS.map(av => `
                <button type="button" class="avatar-opt-btn" data-av="${av}" style="width:44px; height:44px; border-radius:50%; border:2px solid ${av === profile.avatar ? 'var(--accent)' : 'var(--border)'}; background:${av === profile.avatar ? 'var(--accent-light)' : 'var(--bg-primary)'}; font-size:1.5rem; cursor:pointer;">
                  ${av}
                </button>
              `).join('')}
            </div>
          </div>

          <div style="margin-bottom:14px;">
            <label style="display:block; font-weight:700; margin-bottom:6px; font-size:0.9rem;">
              ${isDe ? 'Anzeigename:' : 'اسم الظهور:'}
            </label>
            <input type="text" id="prof-input-name" value="${Utils.escapeHtml(profile.displayName)}"
              style="width:100%; padding:10px 14px; border:1px solid var(--border); border-radius:var(--radius-md); font-family:inherit; font-size:1rem; background:var(--bg-primary); color:var(--text-primary);">
          </div>

          <div style="margin-bottom:14px;">
            <label style="display:block; font-weight:700; margin-bottom:6px; font-size:0.9rem;">
              ${isDe ? 'Ziel-Prüfung:' : 'امتحان الهدف الحالي:'}
            </label>
            <select id="prof-input-level" style="width:100%; padding:10px 14px; border:1px solid var(--border); border-radius:var(--radius-md); font-family:inherit; font-size:1rem; background:var(--bg-primary); color:var(--text-primary);">
              <option value="b2" ${profile.targetLevel === 'b2' ? 'selected' : ''}>🎯 Goethe-Zertifikat B2 Meister</option>
              <option value="b1" ${profile.targetLevel === 'b1' ? 'selected' : ''}>📘 Goethe-Zertifikat B1</option>
              <option value="a2" ${profile.targetLevel === 'a2' ? 'selected' : ''}>📗 Goethe-Zertifikat A2</option>
            </select>
          </div>

          <div style="margin-bottom:20px;">
            <label style="display:block; font-weight:700; margin-bottom:6px; font-size:0.9rem;">
              ${isDe ? 'Status / Lernziel (Bio):' : 'الهدف الدراسي أو الحالة:'}
            </label>
            <input type="text" id="prof-input-bio" value="${Utils.escapeHtml(profile.bio || '')}" maxlength="120"
              style="width:100%; padding:10px 14px; border:1px solid var(--border); border-radius:var(--radius-md); font-family:inherit; font-size:1rem; background:var(--bg-primary); color:var(--text-primary);">
          </div>

          <div style="display:flex; justify-content:flex-end; gap:10px;">
            <button type="button" class="btn btn-secondary" id="btn-cancel-prof-modal">
              ${isDe ? 'Abbrechen' : 'إلغاء'}
            </button>
            <button type="button" class="btn btn-primary" id="btn-save-prof-modal">
              💾 ${isDe ? 'Speichern' : 'حفظ التعديلات'}
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(modalEl);

      let selectedAvatar = profile.avatar;
      modalEl.querySelectorAll('.avatar-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          selectedAvatar = btn.getAttribute('data-av');
          modalEl.querySelectorAll('.avatar-opt-btn').forEach(b => {
            const isIt = b.getAttribute('data-av') === selectedAvatar;
            b.style.borderColor = isIt ? 'var(--accent)' : 'var(--border)';
            b.style.background = isIt ? 'var(--accent-light)' : 'var(--bg-primary)';
          });
        });
      });

      const closeFn = () => modalEl.remove();
      document.getElementById('btn-close-prof-modal').addEventListener('click', closeFn);
      document.getElementById('btn-cancel-prof-modal').addEventListener('click', closeFn);

      document.getElementById('btn-save-prof-modal').addEventListener('click', () => {
        const nameInput = document.getElementById('prof-input-name').value.trim();
        const bioInput = document.getElementById('prof-input-bio').value.trim();
        const levelInput = document.getElementById('prof-input-level').value;

        if (!nameInput) {
          alert('الرجاء كتابة اسم ظهور صالح.');
          return;
        }

        profile.displayName = nameInput;
        profile.avatar = selectedAvatar;
        profile.targetLevel = levelInput;
        profile.bio = bioInput;

        ProfileManager.save(profile);
        modalEl.remove();

        if (window.Utils && window.Utils.showToast) {
          window.Utils.showToast('تم تحديث ملفك الشخصي بنجاح! ✨', 'success');
        }

        if (typeof onSaved === 'function') onSaved(profile);
      });
    }
  };

  window.DM.profile = ProfileManager;
})();
