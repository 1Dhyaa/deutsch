// website/js/social/challenges.js — Weekly Friend Challenges & Co-Op Quests
// Encourages collective study milestones and friendly motivation.

(function () {
  'use strict';

  window.DM = window.DM || {};

  const ChallengesManager = {
    STORAGE_KEY: 'dmx.challenges',

    getDefaultChallenges() {
      return [
        {
          id: 'b2-weekly-hours',
          titleDe: 'Gemeinsamer Lern-Sprint (5 Stunden)',
          titleAr: 'تحدي الأسبوع: دراسة 5 ساعات مع الأصدقاء',
          descriptionDe: 'Erreichen Sie diese Woche zusammen mindestens 300 aktive Lernminuten.',
          descriptionAr: 'حققوا معاً في هذا الأسبوع 300 دقيقة دراسة فعلية ونشطة.',
          icon: '⏱️',
          target: 300,
          current: 185,
          unit: 'Minuten',
          rewardXp: 150,
          completed: false
        },
        {
          id: 'b2-fv-mastery',
          titleDe: 'Funktionsverben-Champion (30 Paare)',
          titleAr: 'بطل الأفعال الوظيفية: إتقان 30 تركيباً',
          descriptionDe: 'Meistern Sie mindestens 30 B2-Funktionsverbgefüge im Studio.',
          descriptionAr: 'أتقن ما لا يقل عن 30 فعلاً وظيفياً في استوديو Funktionsverben.',
          icon: '⭐',
          target: 30,
          current: 14,
          unit: 'Paare',
          rewardXp: 200,
          completed: false
        },
        {
          id: 'b2-exam-prep',
          titleDe: 'Goethe B2 Prüfungsmodul abschließen',
          titleAr: 'إكمال وحدة امتحان رسمية كاملة B2',
          descriptionDe: 'Absolvieren Sie mindestens ein vollständiges B2-Prüfungsmodul (Lesen oder Hören).',
          descriptionAr: 'أكمل على الأقل موديول امتحان B2 كامل (قراءة أو استماع).',
          icon: '📝',
          target: 1,
          current: 1,
          unit: 'Modul',
          rewardXp: 250,
          completed: true
        }
      ];
    },

    get() {
      try {
        const raw = localStorage.getItem(this.STORAGE_KEY);
        if (!raw) {
          const defaults = this.getDefaultChallenges();
          this.save(defaults);
          return defaults;
        }
        return JSON.parse(raw);
      } catch (e) {
        return this.getDefaultChallenges();
      }
    },

    save(list) {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
      } catch (e) {
        console.error('Error saving challenges:', e);
      }
    },

    renderHTML() {
      const list = this.get();
      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();

      return `
        <div style="display:flex; flex-direction:column; gap:14px;">
          ${list.map(ch => {
            const percent = Math.min(100, Math.round((ch.current / ch.target) * 100));
            return `
              <div class="card" style="padding:16px; border-left:4px solid ${ch.completed ? 'var(--success)' : 'var(--accent)'};">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                  <div style="display:flex; align-items:center; gap:10px;">
                    <span style="font-size:1.6rem;">${ch.icon}</span>
                    <div>
                      <strong style="font-size:0.95rem; color:var(--text-primary); display:block;">
                        ${isDe ? ch.titleDe : ch.titleAr}
                      </strong>
                      <small style="color:var(--text-muted);">${isDe ? ch.descriptionDe : ch.descriptionAr}</small>
                    </div>
                  </div>
                  <span class="badge ${ch.completed ? 'badge-success' : 'badge-primary'}">
                    +${ch.rewardXp} XP
                  </span>
                </div>

                <!-- Progress Bar -->
                <div style="margin-top:10px;">
                  <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-secondary); margin-bottom:4px;">
                    <span>${ch.current} / ${ch.target} ${ch.unit}</span>
                    <span style="font-weight:700;">${percent}%</span>
                  </div>
                  <div class="progress-bar" style="height:6px; background:var(--border);">
                    <div class="progress-bar-fill" style="width:${percent}%; background:${ch.completed ? 'var(--success)' : 'var(--accent)'};"></div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }
  };

  window.DM.challenges = ChallengesManager;
})();
