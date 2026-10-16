// website/js/social/friends-view.js — Friends Hub & Social Study Ecosystem View
// Renders the main #/friends view with Profile, Add Friend, Leaderboard, and Challenges.

(function () {
  'use strict';

  window.DM = window.DM || {};

  const FriendsView = {
    activeSubTab: 'friends', // 'friends' | 'leaderboard' | 'challenges'

    render(containerEl) {
      const container = containerEl || document.getElementById('app-content');
      if (!container) return;

      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();
      if (window.App && window.App.setBreadcrumb) {
        window.App.setBreadcrumb(isDe ? 'Freunde & Social Study Ecosystem' : 'مجتمع الأصدقاء والتعلم التفاعلي / Friends Hub');
      }

      // Ensure CSS loaded
      if (window.DM && window.DM.lazy) {
        window.DM.lazy.css('css/social.css');
      }

      // Sync self
      if (window.DM && window.DM.sync && window.DM.sync.syncSelf) {
        window.DM.sync.syncSelf();
      }

      const myStats = window.DM.profile ? window.DM.profile.getCombinedStats() : {};
      const friends = (window.DM.sync && window.DM.sync.getFriends) ? window.DM.sync.getFriends() : [];
      const syncMode = (window.DM.sync && window.DM.sync.getMode) ? window.DM.sync.getMode() : 'local';

      container.innerHTML = `
        <div class="content-container fade-in">
          <!-- Profile Banner Card -->
          <div class="profile-hero-card" style="margin-bottom:24px;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
              <div style="display:flex; align-items:center; gap:16px;">
                <div class="profile-avatar-circle">
                  ${myStats.avatar || '🦊'}
                </div>
                <div>
                  <div style="display:flex; align-items:center; gap:10px; margin-bottom:4px;">
                    <h2 style="margin:0; font-size:1.35rem; color:var(--text-primary);">
                      ${Utils.escapeHtml(myStats.displayName || 'Deutsch-Lerner')}
                    </h2>
                    <span class="badge" style="background:var(--accent); color:#fff; font-weight:700;">
                      ${(myStats.targetLevel || 'B2').toUpperCase()} MEISTER
                    </span>
                  </div>
                  <p style="margin:0 0 8px 0; color:var(--text-muted); font-size:0.9rem;">
                    ${Utils.escapeHtml(myStats.bio || 'Lerne aktiv für die B2-Prüfung!')}
                  </p>
                  <!-- Friend Code Pill -->
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span class="friend-code-pill" id="my-friend-code-label">
                      ${myStats.friendCode || 'DM-XXXX-XXXX'}
                    </span>
                    <button type="button" class="btn btn-secondary btn-sm" onclick="window.DM.friendsView.copyFriendCode('${myStats.friendCode}')" title="نسخ الكود">
                      📋 نسخ كودي
                    </button>
                  </div>
                </div>
              </div>

              <!-- Quick Stats Pills -->
              <div style="display:flex; gap:12px; flex-wrap:wrap;">
                <div class="card" style="padding:10px 16px; text-align:center; background:var(--bg-primary); border:none;">
                  <strong style="display:block; font-size:1.2rem; color:var(--streak-color);">🔥 ${myStats.streak || 1}</strong>
                  <small style="color:var(--text-muted); font-size:0.75rem;">يوم ستريك</small>
                </div>
                <div class="card" style="padding:10px 16px; text-align:center; background:var(--bg-primary); border:none;">
                  <strong style="display:block; font-size:1.2rem; color:var(--accent);">⏱️ ${myStats.todayMinutes || 0} د</strong>
                  <small style="color:var(--text-muted); font-size:0.75rem;">دراسة اليوم</small>
                </div>
                <div class="card" style="padding:10px 16px; text-align:center; background:var(--bg-primary); border:none;">
                  <strong style="display:block; font-size:1.2rem; color:var(--xp-color);">⭐ ${myStats.xp || 0}</strong>
                  <small style="color:var(--text-muted); font-size:0.75rem;">إجمالي XP</small>
                </div>
                <button type="button" class="btn btn-secondary btn-sm" style="align-self:center;" onclick="window.DM.profile.renderEditModal(() => window.DM.friendsView.render())">
                  ✏️ تعديل البروفايل
                </button>
              </div>
            </div>
          </div>

          <!-- Social Navigation Tabs -->
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:1px solid var(--border); padding-bottom:12px; flex-wrap:wrap; gap:12px;">
            <div style="display:flex; gap:10px;">
              <button type="button" class="btn ${this.activeSubTab === 'friends' ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="window.DM.friendsView.switchSubTab('friends')">
                👥 قائمة الأصدقاء (${friends.length})
              </button>
              <button type="button" class="btn ${this.activeSubTab === 'leaderboard' ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="window.DM.friendsView.switchSubTab('leaderboard')">
                🏆 لوحة المتصدرين (Leaderboard)
              </button>
              <button type="button" class="btn ${this.activeSubTab === 'challenges' ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="window.DM.friendsView.switchSubTab('challenges')">
                🎯 التحديات المشتركة
              </button>
            </div>

            <!-- Backend Cloud Indicator -->
            <div style="font-size:0.8rem; color:var(--text-muted); display:flex; align-items:center; gap:6px;">
              <span class="online-dot" style="background:${syncMode === 'supabase' ? 'var(--success)' : 'var(--accent)'};"></span>
              <span>${syncMode === 'supabase' ? '☁️ متزامن مع Supabase Cloud' : '🔒 وضع Local-First (يعمل أوفلاين)'}</span>
            </div>
          </div>

          <!-- Main Social Content Area -->
          <div class="social-grid">
            
            <!-- Left Column: Tab Body -->
            <div>
              ${this.activeSubTab === 'friends' ? this.renderFriendsListHTML(friends) :
                this.activeSubTab === 'leaderboard' ? `<div id="b2-leaderboard-body">${window.DM.leaderboard.renderHTML('today')}</div>` :
                window.DM.challenges.renderHTML()}
            </div>

            <!-- Right Column: Share & Quick Invite -->
            <div>
              <!-- Add Friend Card -->
              <div class="card" style="padding:20px; margin-bottom:18px;">
                <h3 style="margin-top:0; font-size:1.1rem; color:var(--text-primary); display:flex; align-items:center; gap:8px;">
                  <span>➕</span>
                  <span>إضافة صديق جديد</span>
                </h3>
                <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">
                  أدخل كود الصديق (Friend Code) أو رمز المشاركة:
                </p>
                <div style="display:flex; gap:8px; margin-bottom:8px;">
                  <input type="text" id="add-friend-code-input" placeholder="DM-XXXX-XXXX" 
                    style="flex:1; padding:8px 12px; border:1px solid var(--border); border-radius:var(--radius-md); font-family:monospace; font-size:0.95rem; text-transform:uppercase; background:var(--bg-primary); color:var(--text-primary);">
                  <button type="button" class="btn btn-primary btn-sm" onclick="window.DM.friendsView.handleAddFriend()">
                    إضافة
                  </button>
                </div>
                <small style="color:var(--text-muted); font-size:0.78rem; display:block;">
                  💡 جرب إضافة الأصدقاء التفاعليين لتبادل التشجيع والتنافس!
                </small>
              </div>

              <!-- Share Invite Link Card -->
              <div class="card" style="padding:20px;">
                <h3 style="margin-top:0; font-size:1.1rem; color:var(--text-primary); display:flex; align-items:center; gap:8px;">
                  <span>📲</span>
                  <span>دعوة الأصدقاء للدراسة</span>
                </h3>
                <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.6; margin-bottom:14px;">
                  شارك رابط الموقع مع أصدقائك في مجموعة تيليغرام أو واتساب وتنافسوا على الأكثر دراسة يومياً!
                </p>
                <button type="button" class="btn btn-secondary" style="width:100%; justify-content:center;" onclick="window.DM.friendsView.shareInviteLink('${myStats.friendCode}')">
                  🔗 نسخ رابط الدعوة المباشر
                </button>
              </div>
            </div>

          </div>
        </div>
      `;
    },

    renderFriendsListHTML(friends) {
      if (!friends || friends.length === 0) {
        return `
          <div class="card text-center" style="padding:32px;">
            <span style="font-size:2.5rem; display:block; margin-bottom:10px;">👥</span>
            <h3>ليس لديك أصدقاء مضافون بعد</h3>
            <p style="color:var(--text-muted);">أضف كود صديقك من المربع الجانبي لتبدأوا الدراسة معاً وتتبع ساعات التعلم اليومية!</p>
          </div>
        `;
      }

      return `
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${friends.map(f => `
            <div class="friend-card fade-in">
              <div style="display:flex; align-items:center; gap:14px;">
                <div class="friend-avatar-mini">
                  ${f.avatar || '🦊'}
                </div>
                <div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <strong style="font-size:1rem; color:var(--text-primary);">${Utils.escapeHtml(f.displayName)}</strong>
                    <span class="badge" style="font-size:0.75rem; background:var(--accent-light); color:var(--accent);">${(f.targetLevel || 'b2').toUpperCase()}</span>
                    ${f.isOnline ? '<span class="online-dot" title="متصل اليوم"></span>' : ''}
                  </div>
                  <small style="color:var(--text-muted); font-size:0.8rem; display:block; margin-top:2px;">
                    ${Utils.escapeHtml(f.bio || '')}
                  </small>
                  <div style="display:flex; gap:12px; margin-top:6px; font-size:0.8rem; color:var(--text-secondary);">
                    <span>⏱️ اليوم: <strong>${f.todayMinutes || 0} دقيقة</strong></span>
                    <span>🔥 ستريك: <strong>${f.currentStreak || 1} أيام</strong></span>
                    <span>⭐ XP: <strong>${f.totalXp || 0}</strong></span>
                  </div>
                </div>
              </div>

              <!-- Friend Actions -->
              <div style="display:flex; align-items:center; gap:8px;">
                <button type="button" class="btn btn-secondary btn-sm" onclick="window.DM.sync.sendCheer('${f.id}', '🎉')" title="تشجيع">
                  🎉 شجّع
                </button>
                <button type="button" class="btn btn-outline btn-sm" onclick="window.DM.friendsView.handleRemoveFriend('${f.id}', '${f.displayName}')" title="حذف">
                  ✕
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    },

    switchSubTab(tab) {
      this.activeSubTab = tab;
      this.render();
    },

    async handleAddFriend() {
      const input = document.getElementById('add-friend-code-input');
      if (!input || !input.value.trim()) {
        alert('الرجاء كتابة كود الصديق.');
        return;
      }
      try {
        await window.DM.sync.addFriend(input.value.trim());
        input.value = '';
        this.render();
        if (window.Utils && window.Utils.showToast) {
          window.Utils.showToast('تمت إضافة الصديق بنجاح إلى شبكتك! 🤝', 'success');
        }
      } catch (err) {
        alert(err.message);
      }
    },

    handleRemoveFriend(id, name) {
      if (confirm(`هل أنت متأكد من حذف الصديق (${name}) من قائمتك؟`)) {
        window.DM.sync.removeFriend(id);
        this.render();
      }
    },

    copyFriendCode(code) {
      navigator.clipboard.writeText(code).then(() => {
        if (window.Utils && window.Utils.showToast) {
          window.Utils.showToast('تم نسخ كود الصديق إلى الحافظة! 📋', 'success');
        }
      }).catch(() => {
        prompt('انسخ كود الصديق الخاص بك:', code);
      });
    },

    shareInviteLink(code) {
      const url = window.location.origin + window.location.pathname + '#/friends?add=' + code;
      navigator.clipboard.writeText(url).then(() => {
        if (window.Utils && window.Utils.showToast) {
          window.Utils.showToast('تم نسخ رابط الدعوة المباشر! شاركه مع أصدقائك 🔗', 'success');
        }
      }).catch(() => {
        prompt('رابط الدعوة الخاص بك:', url);
      });
    }
  };

  window.DM.friendsView = FriendsView;
})();
