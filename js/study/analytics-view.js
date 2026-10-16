// website/js/study/analytics-view.js — Study Analytics, SVG Heatmap & Progress Dashboard
// Renders the comprehensive learning analytics view at #/progress

(function () {
  'use strict';

  window.DM = window.DM || {};

  const AnalyticsView = {
    render(containerEl) {
      const container = containerEl || document.getElementById('app-content');
      if (!container) return;

      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();
      if (window.App && window.App.setBreadcrumb) {
        window.App.setBreadcrumb(isDe ? 'Lernanalytik & Fortschritt' : 'لوحة التحليلات وساعات المذاكرة الفعلية');
      }

      const todaySec = (window.DM.study && window.DM.study.getTodaySeconds()) || 0;
      const todayMins = Math.round(todaySec / 60);
      const weeklySec = (window.DM.study && window.DM.study.getWeeklySeconds()) || 0;
      const weeklyHours = (weeklySec / 3600).toFixed(1);

      const store = (window.DM.study && window.DM.study.getStore()) || { days: {}, streaks: {} };
      const currentStreak = (store.streaks && store.streaks.current) || 1;
      const bestStreak = (store.streaks && store.streaks.best) || 1;
      const dailyGoalSec = (window.DM.study && window.DM.study.getDailyGoalSeconds()) || 1800;
      const dailyGoalMins = Math.round(dailyGoalSec / 60);
      const goalPercent = Math.min(100, Math.round((todayMins / dailyGoalMins) * 100));

      const todayData = (window.DM.study && window.DM.study.getDayData(DM.util.isoDay())) || { sessions: [] };
      const sessions = todayData.sessions || [];

      // Achievements
      const achList = (window.DM.achievements && window.DM.achievements.getAll()) || [];
      const unlockedCount = achList.filter(a => a.unlocked).length;

      container.innerHTML = `
        <div class="content-container fade-in">
          <!-- 1. Header Overview Card -->
          <div class="card" style="padding:24px; margin-bottom:24px; background:linear-gradient(135deg, var(--bg-card), var(--bg-primary)); border:1.5px solid var(--border);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
              <div>
                <span class="badge" style="background:var(--accent); color:#fff; font-weight:700; margin-bottom:8px;">
                  📊 ${isDe ? 'LERNANALYTIK & FORTSCHRITT' : 'إحصائيات المذاكرة والنشاط'}
                </span>
                <h1 style="font-size:1.6rem; font-weight:800; color:var(--text-primary); margin:4px 0;">
                  ${isDe ? 'Deine Lernzeit im Überblick' : 'سجل ساعات المذاكرة والإنجازات'}
                </h1>
                <p style="color:var(--text-secondary); margin:0; font-size:0.95rem;">
                  ${isDe 
                    ? 'Ehrliche, aktive Lernzeiterfassung — jede Minute bringt dich dem Goethe B2 Zertifikat näher.' 
                    : 'حساب دقيق لوقت الدراسة الفعلي، خريطة النشاط اليومي، وقائمة الإنجازات.'}
                </p>
              </div>

              <div style="display:flex; gap:12px; flex-wrap:wrap;">
                <button type="button" class="btn btn-secondary btn-sm" onclick="DM.analytics.changeGoalPrompt()">
                  🎯 ${isDe ? 'Tagesziel ändern' : 'تعديل الهدف اليومي'} (${dailyGoalMins}m)
                </button>
              </div>
            </div>
          </div>

          <!-- 2. Primary Metric Stats (Today, Week, Streaks) -->
          <div class="grid-3" style="margin-bottom:24px;">
            <!-- Today's Active Time -->
            <div class="card" style="padding:20px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                <span style="font-size:0.85rem; font-weight:700; color:var(--text-muted);">
                  ${isDe ? 'HEUTE GELERNT' : 'المذاكرة الفعلية اليوم'}
                </span>
                <span style="font-size:1.3rem;">⏱️</span>
              </div>
              <div style="font-size:2rem; font-weight:800; color:var(--accent); line-height:1.1; margin-bottom:6px;">
                ${todayMins} <span style="font-size:1rem; font-weight:600; color:var(--text-secondary);">${isDe ? 'Minuten' : 'دقيقة'}</span>
              </div>
              <div class="progress-bar" style="height:6px; margin-bottom:6px;">
                <div class="progress-bar-fill" style="width:${goalPercent}%; background:var(--accent);"></div>
              </div>
              <small style="color:var(--text-muted); font-size:0.8rem;">
                ${goalPercent}% ${isDe ? 'des Tagesziels erreicht' : 'من الهدف اليومي المحدد'}
              </small>
            </div>

            <!-- This Week's Total -->
            <div class="card" style="padding:20px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                <span style="font-size:0.85rem; font-weight:700; color:var(--text-muted);">
                  ${isDe ? 'DIESE WOCHE (MO–SO)' : 'إجمالي هذا الأسبوع (إثنين–أحد)'}
                </span>
                <span style="font-size:1.3rem;">📅</span>
              </div>
              <div style="font-size:2rem; font-weight:800; color:var(--success); line-height:1.1; margin-bottom:6px;">
                ${weeklyHours} <span style="font-size:1rem; font-weight:600; color:var(--text-secondary);">${isDe ? 'Stunden' : 'ساعة'}</span>
              </div>
              <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:10px;">
                ${isDe ? 'Tagesdurchschnitt:' : 'المعدل اليومي:'} <strong>${Math.round((weeklySec / 7) / 60)} ${isDe ? 'Min/Tag' : 'د/يوم'}</strong>
              </div>
            </div>

            <!-- Streaks -->
            <div class="card" style="padding:20px;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                <span style="font-size:0.85rem; font-weight:700; color:var(--text-muted);">
                  ${isDe ? 'LERN-SERIE' : 'سلسلة الالتزام اليومي'}
                </span>
                <span style="font-size:1.3rem;">🔥</span>
              </div>
              <div style="font-size:2rem; font-weight:800; color:var(--streak-color); line-height:1.1; margin-bottom:6px;">
                ${currentStreak} <span style="font-size:1rem; font-weight:600; color:var(--text-secondary);">${isDe ? 'Tage' : 'أيام متتالية'}</span>
              </div>
              <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:10px;">
                ${isDe ? 'Beste Serie aller Zeiten:' : 'أفضل رقم قياسي سابق:'} <strong>${bestStreak} ${isDe ? 'Tage' : 'أيام'}</strong>
              </div>
            </div>
          </div>

          <!-- 3. Hand-crafted Pure SVG Activity Heatmap (90 Days / 13 Weeks) -->
          <div class="card" style="padding:22px; margin-bottom:24px;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:16px;">
              <div>
                <h3 style="font-size:1.15rem; font-weight:800; margin:0 0 4px 0;">
                  📈 ${isDe ? 'Aktivitäts-Heatmap (Letzte 90 Tage)' : 'خريطة النشاط والمذاكرة (آخر 90 يوماً)'}
                </h3>
                <small style="color:var(--text-secondary);">
                  ${isDe ? 'Fahre mit der Maus über ein Quadrat für Details' : 'مرر فوق المربعات لعرض تاريخ اليوم ودقائق المذاكرة'}
                </small>
              </div>

              <!-- Legend -->
              <div style="display:flex; align-items:center; gap:6px; font-size:0.75rem; color:var(--text-muted);">
                <span>${isDe ? 'Weniger' : 'أقل'}</span>
                <div style="width:12px; height:12px; border-radius:2px; background:var(--border);"></div>
                <div style="width:12px; height:12px; border-radius:2px; background:#93C5FD;"></div>
                <div style="width:12px; height:12px; border-radius:2px; background:#3B82F6;"></div>
                <div style="width:12px; height:12px; border-radius:2px; background:#1D4ED8;"></div>
                <div style="width:12px; height:12px; border-radius:2px; background:#1E3A8A;"></div>
                <span>${isDe ? 'Mehr' : 'أكثر'}</span>
              </div>
            </div>

            <div style="overflow-x:auto; padding-bottom:8px;">
              ${this.renderSvgHeatmap()}
            </div>
          </div>

          <!-- 4. What I Learned Today (Timeline & Journal) -->
          <div class="card" style="padding:22px; margin-bottom:24px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
              <h3 style="font-size:1.15rem; font-weight:800; margin:0;">
                📝 ${isDe ? 'Was ich heute gelernt habe (Lern-Tagebuch)' : 'ما تعلمته وأنجزته اليوم (سجل النشاط)'}
              </h3>
              <span class="badge" style="background:var(--bg-primary); border:1px solid var(--border); color:var(--text-secondary);">
                ${sessions.length} ${isDe ? 'Aktivitäten' : 'نشاطات اليوم'}
              </span>
            </div>

            ${sessions.length === 0 ? `
              <div style="text-align:center; padding:32px 16px; color:var(--text-muted);">
                <div style="font-size:2.2rem; margin-bottom:8px;">📚</div>
                <p style="margin:0; font-weight:600;">
                  ${isDe ? 'Heute noch keine abgeschlossene Lerneinheit protokolliert.' : 'لم يتم تسجيل نشاط منجز اليوم بعد.'}
                </p>
                <small>
                  ${isDe ? 'Schließe eine Lektion ab oder absolviere einen Modelltest, um dein Tagebuch zu füllen.' : 'أكمل أي درس أو ابدأ امتحاناً تجريبياً ليظهر هنا تلقائياً.'}
                </small>
              </div>
            ` : `
              <div style="display:flex; flex-direction:column; gap:10px;">
                ${sessions.map(s => {
                  const timeStr = new Date(s.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                  return `
                    <div style="display:flex; align-items:center; justify-content:space-between; padding:12px 16px; border-radius:var(--radius-md); background:var(--bg-primary); border:1px solid var(--border);">
                      <div style="display:flex; align-items:center; gap:12px;">
                        <span style="font-size:1.2rem;">${s.action === 'exam_completed' ? '📝' : '📖'}</span>
                        <div>
                          <div style="font-weight:700; font-size:0.95rem; color:var(--text-primary);">${Utils.escapeHtml(s.title)}</div>
                          <small style="color:var(--text-muted);">${timeStr} · ${s.route}</small>
                        </div>
                      </div>
                      ${s.seconds > 0 ? `
                        <span class="badge" style="background:var(--accent-light); color:var(--accent); font-weight:700;">
                          ${Math.round(s.seconds / 60)} Min
                        </span>
                      ` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>

          <!-- 5. Achievements Showcase -->
          <div class="card" style="padding:22px; margin-bottom:24px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
              <div>
                <h3 style="font-size:1.15rem; font-weight:800; margin:0 0 4px 0;">
                  🏆 ${isDe ? 'Erfolge & Meilensteine' : 'قائمة الإنجازات والأوسمة'}
                </h3>
                <small style="color:var(--text-secondary);">
                  ${unlockedCount} / ${achList.length} ${isDe ? 'freigeschaltet' : 'تم فتحها'}
                </small>
              </div>
            </div>

            <div class="grid-3" style="gap:14px;">
              ${achList.map(a => `
                <div class="card" style="padding:14px; border:1px solid ${a.unlocked ? 'var(--accent)' : 'var(--border)'}; background:${a.unlocked ? 'var(--bg-card)' : 'var(--bg-primary)'}; opacity:${a.unlocked ? '1' : '0.6'}; display:flex; gap:12px; align-items:flex-start;">
                  <span style="font-size:1.8rem; line-height:1;">${a.icon}</span>
                  <div>
                    <div style="font-weight:700; font-size:0.92rem; color:var(--text-primary);">
                      ${Utils.escapeHtml(isDe ? a.title.de : a.title.ar)}
                    </div>
                    <div style="font-size:0.8rem; color:var(--text-secondary); margin:3px 0;">
                      ${Utils.escapeHtml(isDe ? a.description.de : a.description.ar)}
                    </div>
                    <span class="badge" style="background:${a.unlocked ? 'var(--success)' : 'var(--border)'}; color:#fff; font-size:0.75rem; margin-top:4px;">
                      ${a.unlocked ? (isDe ? '✓ Freigeschaltet' : '✓ مكتمل') : `+${a.xp} XP`}
                    </span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 6. Progress Backup & Data Migration Card -->
          <div class="card" style="padding:22px;">
            <h3 style="font-size:1.1rem; font-weight:800; margin-bottom:8px;">
              💾 ${isDe ? 'Datensicherung & Export' : 'النسخ الاحتياطي وحفظ البيانات'}
            </h3>
            <p style="color:var(--text-secondary); font-size:0.9rem; line-height:1.6; margin-bottom:16px;">
              ${isDe 
                ? 'Exportiere deinen gesamten Lernfortschritt, B2-Testergebnisse und Lernzeiten als JSON-Datei.' 
                : 'يمكنك تحميل نسخة احتياطية كاملة من تقدمك وساعات دراستك ونتائج امتحاناتك بصيغة JSON لنقلها لأي جهاز آخر.'}
            </p>
            <div style="display:flex; gap:12px; flex-wrap:wrap;">
              <button type="button" class="btn btn-primary" onclick="Storage.exportProgress()">
                ⬇️ ${isDe ? 'Fortschritt exportieren (JSON)' : 'تصدير التقدم (JSON)'}
              </button>
              <button type="button" class="btn btn-secondary" onclick="document.getElementById('import-file-input').click()">
                ⬆️ ${isDe ? 'Fortschritt importieren' : 'استيراد تقدم محفوظ'}
              </button>
              <input type="file" id="import-file-input" accept=".json" style="display:none;" onchange="App.handleImport(event)">
            </div>
          </div>
        </div>
      `;
    },

    // Pure hand-crafted SVG Heatmap (90 days / 13 weeks)
    renderSvgHeatmap() {
      const history = (window.DM.study && window.DM.study.getHistory(91)) || [];
      const cellSize = 13;
      const cellGap = 3;
      const cols = 13; // 13 weeks
      const rows = 7;  // 7 days per week

      const svgWidth = cols * (cellSize + cellGap) + 40;
      const svgHeight = rows * (cellSize + cellGap) + 20;

      let rects = [];

      for (let i = 0; i < history.length; i++) {
        const item = history[i];
        const col = Math.floor(i / 7);
        const row = i % 7;
        const x = 30 + col * (cellSize + cellGap);
        const y = 5 + row * (cellSize + cellGap);

        // Color scale based on active minutes
        let fill = 'var(--border)';
        if (item.minutes >= 60) fill = '#1E3A8A';
        else if (item.minutes >= 30) fill = '#1D4ED8';
        else if (item.minutes >= 15) fill = '#3B82F6';
        else if (item.minutes > 0) fill = '#93C5FD';

        rects.push(`
          <rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="2" fill="${fill}">
            <title>${item.date}: ${item.minutes} Minuten gelernt</title>
          </rect>
        `);
      }

      const dayLabels = `
        <text x="5" y="15" font-size="9" fill="var(--text-muted)">Mo</text>
        <text x="5" y="47" font-size="9" fill="var(--text-muted)">Mi</text>
        <text x="5" y="79" font-size="9" fill="var(--text-muted)">Fr</text>
        <text x="5" y="111" font-size="9" fill="var(--text-muted)">So</text>
      `;

      return `
        <svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}" style="display:block; max-width:100%;">
          ${dayLabels}
          ${rects.join('')}
        </svg>
      `;
    },

    changeGoalPrompt() {
      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();
      const currentGoal = Math.round((window.DM.study ? window.DM.study.getDailyGoalSeconds() : 1800) / 60);
      const answer = prompt(
        isDe 
          ? 'Tägliches Lernziel in Minuten eingeben (z.B. 15, 30, 45, 60):' 
          : 'أدخل الهدف اليومي للمذاكرة بالدقائق (مثال: 15، 30، 45، 60):',
        currentGoal
      );
      if (answer) {
        const parsed = parseInt(answer, 10);
        if (parsed > 0 && parsed <= 360) {
          if (window.DM.study) {
            window.DM.study.setDailyGoal(parsed);
          }
          this.render();
          if (window.Utils && window.Utils.showToast) {
            window.Utils.showToast(isDe ? 'Tagesziel aktualisiert! 🎯' : 'تم تحديث الهدف اليومي بنجاح! 🎯', 'success', 2000);
          }
        }
      }
    }
  };

  window.DM.analytics = AnalyticsView;
})();
