// website/js/social/leaderboard.js — Dynamic Multi-Mode Leaderboard
// Calculates rankings by Active Hours, Weekly Hours, Streaks, and Total XP with podium.

(function () {
  'use strict';

  window.DM = window.DM || {};

  const Leaderboard = {
    currentMetric: 'today', // 'today' | 'week' | 'streak' | 'xp'

    getRankedList(metric = 'today') {
      const myStats = window.DM.profile ? window.DM.profile.getCombinedStats() : { displayName: 'Du', avatar: '🦊', xp: 0, streak: 1, todayMinutes: 0 };
      const friends = (window.DM.sync && window.DM.sync.getFriends) ? window.DM.sync.getFriends() : [];

      const list = [
        {
          id: 'me',
          displayName: `${myStats.displayName} (أنت)`,
          avatar: myStats.avatar || '🦊',
          isMe: true,
          todayMinutes: myStats.todayMinutes || 0,
          weekHours: parseFloat(((myStats.todaySeconds || 0) / 3600).toFixed(1)),
          streak: myStats.streak || 1,
          xp: myStats.xp || 0
        },
        ...friends.map(f => ({
          id: f.id,
          displayName: f.displayName,
          avatar: f.avatar,
          isMe: false,
          todayMinutes: f.todayMinutes || 0,
          weekHours: f.weekHours || 0,
          streak: f.currentStreak || 1,
          xp: f.totalXp || 0
        }))
      ];

      // Sort according to metric
      list.sort((a, b) => {
        if (metric === 'today') return b.todayMinutes - a.todayMinutes;
        if (metric === 'week') return b.weekHours - a.weekHours;
        if (metric === 'streak') return b.streak - a.streak;
        return b.xp - a.xp;
      });

      return list;
    },

    renderHTML(metric = 'today') {
      this.currentMetric = metric;
      const list = this.getRankedList(metric);
      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();

      const top1 = list[0] || null;
      const top2 = list[1] || null;
      const top3 = list[2] || null;

      const formatVal = (item) => {
        if (metric === 'today') return `${item.todayMinutes} ${isDe ? 'Min.' : 'دقيقة'}`;
        if (metric === 'week') return `${item.weekHours} ${isDe ? 'Std.' : 'ساعات'}`;
        if (metric === 'streak') return `${item.streak} ${isDe ? 'Tage' : 'أيام 🔥'}`;
        return `${item.xp} XP ⭐`;
      };

      return `
        <div>
          <!-- Metric Filter Buttons -->
          <div style="display:flex; gap:8px; margin-bottom:20px; flex-wrap:wrap; justify-content:center;">
            <button type="button" class="btn ${metric === 'today' ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="window.DM.leaderboard.switchMetric('today')">
              ⏱️ ${isDe ? 'Heute aktiv' : 'دراسة اليوم'}
            </button>
            <button type="button" class="btn ${metric === 'week' ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="window.DM.leaderboard.switchMetric('week')">
              📅 ${isDe ? 'Wochenstunden' : 'ساعات الأسبوع'}
            </button>
            <button type="button" class="btn ${metric === 'streak' ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="window.DM.leaderboard.switchMetric('streak')">
              🔥 ${isDe ? 'Streak-Rekord' : 'أطول ستريك'}
            </button>
            <button type="button" class="btn ${metric === 'xp' ? 'btn-primary' : 'btn-secondary'} btn-sm" onclick="window.DM.leaderboard.switchMetric('xp')">
              ⭐ ${isDe ? 'Gesamt-XP' : 'نقاط الخبرة XP'}
            </button>
          </div>

          <!-- Podium for Top 3 -->
          <div class="leaderboard-podium">
            ${top2 ? `
              <div class="podium-step podium-step-2">
                <span style="font-size:1.8rem; margin-bottom:4px;">${top2.avatar}</span>
                <strong style="font-size:0.85rem; display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:90px;">${Utils.escapeHtml(top2.displayName)}</strong>
                <span style="font-size:0.75rem; color:var(--text-muted); margin-bottom:6px;">${formatVal(top2)}</span>
                <div class="podium-pillar pillar-2">
                  <span style="font-size:1.3rem;">🥈</span>
                  <span>2</span>
                </div>
              </div>
            ` : ''}

            ${top1 ? `
              <div class="podium-step podium-step-1">
                <span style="font-size:2.2rem; margin-bottom:4px;">${top1.avatar}</span>
                <strong style="font-size:0.9rem; display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:100px;">${Utils.escapeHtml(top1.displayName)}</strong>
                <span style="font-size:0.8rem; font-weight:700; color:var(--accent); margin-bottom:6px;">${formatVal(top1)}</span>
                <div class="podium-pillar pillar-1">
                  <span style="font-size:1.6rem;">👑 🥇</span>
                  <span>1</span>
                </div>
              </div>
            ` : ''}

            ${top3 ? `
              <div class="podium-step podium-step-3">
                <span style="font-size:1.8rem; margin-bottom:4px;">${top3.avatar}</span>
                <strong style="font-size:0.85rem; display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:90px;">${Utils.escapeHtml(top3.displayName)}</strong>
                <span style="font-size:0.75rem; color:var(--text-muted); margin-bottom:6px;">${formatVal(top3)}</span>
                <div class="podium-pillar pillar-3">
                  <span style="font-size:1.2rem;">🥉</span>
                  <span>3</span>
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Ranked List Rows -->
          <div class="card" style="padding:8px 0; border-radius:var(--radius-md);">
            ${list.map((item, idx) => `
              <div class="lb-row ${item.isMe ? 'is-me' : ''}">
                <div style="display:flex; align-items:center; gap:12px;">
                  <span class="rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : ''}" style="background:${idx > 2 ? 'var(--bg-primary)' : ''}; color:${idx > 2 ? 'var(--text-muted)' : ''};">
                    ${idx + 1}
                  </span>
                  <span style="font-size:1.4rem;">${item.avatar}</span>
                  <div>
                    <strong style="display:block; font-size:0.92rem; color:var(--text-primary);">
                      ${Utils.escapeHtml(item.displayName)}
                    </strong>
                    <small style="color:var(--text-muted);">Streak: ${item.streak} أيام | ${item.xp} XP</small>
                  </div>
                </div>

                <div style="text-align:left;">
                  <strong style="font-size:1rem; color:var(--accent); font-family:monospace;">
                    ${formatVal(item)}
                  </strong>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    },

    switchMetric(metric) {
      this.currentMetric = metric;
      const container = document.getElementById('b2-leaderboard-body');
      if (container) {
        container.innerHTML = this.renderHTML(metric);
      }
    }
  };

  window.DM.leaderboard = Leaderboard;
})();
