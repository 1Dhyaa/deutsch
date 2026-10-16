// website/js/b2/b2-home.js — B2 Meister Home Dashboard
// Renders the specialized Goethe-Zertifikat B2 preparation dashboard when in B2 mode.

(function () {
  'use strict';

  window.DM = window.DM || {};

  const B2Home = {
    render(containerEl) {
      const container = containerEl || document.getElementById('app-content');
      if (!container) return;

      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();
      if (window.App && window.App.setBreadcrumb) {
        window.App.setBreadcrumb(isDe ? 'B2 Meister-Dashboard / Goethe-Zertifikat B2' : 'لوحة تحكم B2 مايستر / شهادة غوته B2');
      }

      // Calculate Prüfungsreife (Readiness score)
      const readiness = this.calculateReadiness();

      // Read active study time for today
      const todayStudySec = (window.DM && window.DM.study && typeof window.DM.study.getTodaySeconds === 'function')
        ? window.DM.study.getTodaySeconds()
        : 0;
      const todayStudyMins = Math.round(todayStudySec / 60);
      const dailyGoalMins = 30;
      const goalPercent = Math.min(100, Math.round((todayStudyMins / dailyGoalMins) * 100));

      const streakData = (window.Storage && window.Storage.load().streak) || { current: 1 };

      container.innerHTML = `
        <div class="content-container fade-in">
          <!-- 1. B2 Hero Banner -->
          <div class="hero-banner b2-hero-card" style="border-radius: var(--radius-lg); padding: 28px 24px; margin-bottom: 24px;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px;">
              <div style="max-width: 620px;">
                <div style="display:inline-flex; align-items:center; gap:8px; margin-bottom:10px;">
                  <span class="badge" style="background:var(--accent); color:#fff; font-weight:700;">GOETHE B2 MEISTER</span>
                  <span class="b2-gold-pill">🎯 ${isDe ? 'Prüfungstraining' : 'التدريب المكثف على الامتحان'}</span>
                </div>
                <h1 style="font-size:1.6rem; font-weight:800; color:var(--text-primary); margin-bottom:8px;">
                  ${isDe ? 'Bereit für das Goethe-Zertifikat B2?' : 'طريقك المضمون لاجتياز Goethe-Zertifikat B2'}
                </h1>
                <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:18px; font-size:0.95rem;">
                  ${isDe 
                    ? 'Vollständiger 4-Module-Prüfungssimulator (Lesen, Hören, Schreiben, Sprechen), 60 Funktionsverbgefüge, Doppelkonnektoren und aktive Lernzeiterfassung.' 
                    : 'محاكاة كاملة لوحدات الامتحان الأربعة الرسمية (القراءة، الاستماع، التعبير الكتابي، والمحادثة الشفهية) مع تدريب مكثف على 60 فعلاً وظيفياً.'}
                </p>
                <div style="display:flex; gap:12px; flex-wrap:wrap;">
                  <a href="#/exams" class="btn btn-primary" style="padding:10px 20px;">
                    📝 ${isDe ? 'Modelltest starten' : 'بدء امتحان تجريبي رسمي'}
                  </a>
                  <a href="#/funktionsverben" class="btn btn-secondary" style="padding:10px 18px;">
                    ⭐ ${isDe ? 'Funktionsverben Studio' : 'استوديو الأفعال الوظيفية (60)'}
                  </a>
                </div>
              </div>

              <!-- Readiness Gauge Card -->
              <div class="card" style="min-width: 260px; flex:1; max-width:320px; background:var(--bg-secondary); border: 1.5px solid var(--border); text-align:center; padding:20px;">
                <div style="font-size:0.85rem; color:var(--text-muted); font-weight:700; margin-bottom:6px;">
                  ${isDe ? 'PRÜFUNGSREIFE (BEREITSCHAFT)' : 'مقياس الجاهزية للامتحان (PRÜFUNGSREIFE)'}
                </div>
                <div style="font-size:2.8rem; font-weight:800; color:${readiness.score >= 60 ? 'var(--success)' : 'var(--b2-gold)'}; line-height:1;">
                  ${readiness.score}%
                </div>
                <div style="font-size:0.85rem; font-weight:600; color:var(--text-secondary); margin:8px 0 12px 0;">
                  ${readiness.statusLabel}
                </div>
                <div class="progress-bar" style="height:8px; margin-bottom:8px;">
                  <div class="progress-bar-fill" style="width:${readiness.score}%; background:${readiness.score >= 60 ? 'var(--success)' : 'var(--b2-gold)'};"></div>
                </div>
                <small style="color:var(--text-muted); font-size:0.75rem;">
                  ${isDe ? 'Mindestens 60% erforderlich zum Bestehen' : 'درجة النجاح الرسمية: 60% في كل وحدة'}
                </small>
              </div>
            </div>
          </div>

          <!-- 2. Today's Study Stats Bar -->
          <div class="grid-3" style="margin-bottom:24px;">
            <div class="card" style="padding:16px 20px; display:flex; align-items:center; gap:14px;">
              <div style="font-size:2rem; width:48px; height:48px; border-radius:50%; background:var(--accent-light); display:flex; align-items:center; justify-content:center;">
                ⏱️
              </div>
              <div style="flex:1;">
                <div style="font-size:0.82rem; color:var(--text-muted); font-weight:600;">
                  ${isDe ? 'Aktive Lernzeit heute' : 'وقت المذاكرة الفعلي اليوم'}
                </div>
                <div style="font-size:1.3rem; font-weight:800; color:var(--text-primary);">
                  ${todayStudyMins} <span style="font-size:0.9rem; font-weight:600; color:var(--text-secondary);">${isDe ? 'von 30 Min.' : 'من 30 دقيقة'}</span>
                </div>
                <div class="progress-bar" style="height:5px; margin-top:6px;">
                  <div class="progress-bar-fill" style="width:${goalPercent}%; background:var(--accent);"></div>
                </div>
              </div>
            </div>

            <div class="card" style="padding:16px 20px; display:flex; align-items:center; gap:14px;">
              <div style="font-size:2rem; width:48px; height:48px; border-radius:50%; background:#FEF3C7; display:flex; align-items:center; justify-content:center;">
                🔥
              </div>
              <div>
                <div style="font-size:0.82rem; color:var(--text-muted); font-weight:600;">
                  ${isDe ? 'Aktuelle Lernserie' : 'سلسلة المذاكرة اليومية'}
                </div>
                <div style="font-size:1.3rem; font-weight:800; color:var(--streak-color);">
                  ${streakData.current} <span style="font-size:0.9rem; font-weight:600; color:var(--text-secondary);">${isDe ? 'Tage am Stück' : 'أيام متواصلة'}</span>
                </div>
              </div>
            </div>

            <div class="card" style="padding:16px 20px; display:flex; align-items:center; gap:14px;">
              <div style="font-size:2rem; width:48px; height:48px; border-radius:50%; background:#D1FAE5; display:flex; align-items:center; justify-content:center;">
                👥
              </div>
              <div>
                <div style="font-size:0.82rem; color:var(--text-muted); font-weight:600;">
                  ${isDe ? 'Freunde & Rangliste' : 'مجتمع المذاكرة والأصدقاء'}
                </div>
                <a href="#/friends" style="font-size:0.95rem; font-weight:700; color:var(--accent); text-decoration:none;">
                  ${isDe ? 'Rangliste öffnen ➔' : 'فتح قائمة المتصدرين ➔'}
                </a>
              </div>
            </div>
          </div>

          <!-- 3. The 4 Goethe B2 Exam Modules Grid -->
          <div style="margin-bottom:28px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
              <h2 style="font-size:1.25rem; font-weight:800; color:var(--text-primary);">
                ${isDe ? 'Goethe-Zertifikat B2: Die 4 Module' : 'وحدات امتحان غوته B2 الأربعة الرسمية'}
              </h2>
              <a href="#/exams" style="font-size:0.9rem; font-weight:700; color:var(--accent); text-decoration:none;">
                ${isDe ? 'Alle Prüfungen ➔' : 'عرض كافة النماذج ➔'}
              </a>
            </div>

            <div class="grid-2" style="gap:16px;">
              <!-- Lesen -->
              <div class="card" style="border: 1.5px solid var(--border); padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <span style="font-size:1.6rem;">📖</span>
                    <span class="badge" style="background:#2563EB; color:#fff;">65 Min · 5 Teile</span>
                  </div>
                  <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:6px;">
                    ${isDe ? 'Modul 1: Lesen' : 'الوحدة الأولى: القراءة (Lesen)'}
                  </h3>
                  <p style="color:var(--text-secondary); font-size:0.9rem; line-height:1.6; margin-bottom:14px;">
                    ${isDe 
                      ? '5 Teile (30 Aufgaben): Forumsbeiträge, Artikel, Berichte zu Arbeitswelt & Kultur, Reaktionen auf Aussagen, und Verordnungen/Richtlinien.' 
                      : '5 أجزاء (30 سؤالاً): مقالات رأي، نصوص علمية، مواقف من الحياة اليومية، وتعليمات إدارية رسمية.'}
                  </p>
                </div>
                <a href="#/exam/b2-lesen-set-01" class="btn btn-primary" style="width:100%; justify-content:center;">
                  ${isDe ? 'Lesen starten (65 Min)' : 'بدء امتحان القراءة B2'}
                </a>
              </div>

              <!-- Hören -->
              <div class="card" style="border: 1.5px solid var(--border); padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <span style="font-size:1.6rem;">🎧</span>
                    <span class="badge" style="background:#059669; color:#fff;">~40 Min · 4 Teile</span>
                  </div>
                  <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:6px;">
                    ${isDe ? 'Modul 2: Hören' : 'الوحدة الثانية: الاستماع (Hören)'}
                  </h3>
                  <p style="color:var(--text-secondary); font-size:0.9rem; line-height:1.6; margin-bottom:14px;">
                    ${isDe 
                      ? '4 Teile (30 Aufgaben): Nachrichten, Radiobeitrag, Podiumsdiskussion (3 Sprecher) und kurzer Vortrag.' 
                      : '4 أجزاء (30 سؤالاً): رسائل هاتفية، تقارير إذاعية، ندوة نقاشية بين 3 متحدثين، ومحاضرة أكاديمية.'}
                  </p>
                </div>
                <a href="#/exam/b2-hoeren-set-01" class="btn btn-primary" style="width:100%; justify-content:center;">
                  ${isDe ? 'Hören starten (40 Min)' : 'بدء امتحان الاستماع B2'}
                </a>
              </div>

              <!-- Schreiben -->
              <div class="card" style="border: 1.5px solid var(--border); padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <span style="font-size:1.6rem;">✍️</span>
                    <span class="badge" style="background:#7C3AED; color:#fff;">75 Min · 2 Teile</span>
                  </div>
                  <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:6px;">
                    ${isDe ? 'Modul 3: Schreiben' : 'الوحدة الثالثة: التعبير الكتابي (Schreiben)'}
                  </h3>
                  <p style="color:var(--text-secondary); font-size:0.9rem; line-height:1.6; margin-bottom:14px;">
                    ${isDe 
                      ? 'Teil 1: Forumsbeitrag mit 4 Leitpunkten (~150 Wörter). Teil 2: Formelle Nachricht/E-Mail am Arbeitsplatz (~100 Wörter).' 
                      : 'الجزء 1: كتابة مشاركة منتدى مع 4 نقاط إرشادية (150 كلمة). الجزء 2: رسالة رسمية في سياق العمل (100 كلمة).'}
                  </p>
                </div>
                <a href="#/schreiben" class="btn btn-secondary" style="width:100%; justify-content:center;">
                  ${isDe ? 'Schreiben Studio öffnen' : 'فتح محاكي الكتابة B2'}
                </a>
              </div>

              <!-- Sprechen -->
              <div class="card" style="border: 1.5px solid var(--border); padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <span style="font-size:1.6rem;">🗣️</span>
                    <span class="badge" style="background:#EA580C; color:#fff;">~15 Min · 2 Teile</span>
                  </div>
                  <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:6px;">
                    ${isDe ? 'Modul 4: Sprechen' : 'الوحدة الرابعة: التعبير الشفهي (Sprechen)'}
                  </h3>
                  <p style="color:var(--text-secondary); font-size:0.9rem; line-height:1.6; margin-bottom:14px;">
                    ${isDe 
                      ? 'Teil 1: Vortrag halten (4 Min) mit Struktur. Teil 2: Diskussion und Kompromissfindung mit Partner (5 Min).' 
                      : 'الجزء 1: إلقاء عرض تقديمي مع مقدمة وأفكار وخاتمة (4 د). الجزء 2: نقاش تفاعلي والتوصل لحل وسط مع الزميل.'}
                  </p>
                </div>
                <a href="#/sprechen" class="btn btn-secondary" style="width:100%; justify-content:center;">
                  ${isDe ? 'Sprechen Studio öffnen' : 'فتح محاكي المحادثة B2'}
                </a>
              </div>
            </div>
          </div>

          <!-- 4. Fast Practice Studios Links -->
          <div class="card" style="padding:20px; background:var(--bg-card); border:1px solid var(--border);">
            <h3 style="font-size:1.1rem; font-weight:700; margin-bottom:12px;">
              ⚡ ${isDe ? 'B2 Grammatik & Spezialstudios' : 'استوديوهات القواعد والتدريب السريع B2'}
            </h3>
            <div style="display:flex; gap:12px; flex-wrap:wrap;">
              <a href="#/lessons" class="btn btn-secondary" style="font-size:0.9rem;">
                📚 ${isDe ? 'B2 Grammatik (9 Lektionen)' : 'قواعد B2 الذهبية (9 دروس)'}
              </a>
              <a href="#/funktionsverben" class="btn btn-secondary" style="font-size:0.9rem;">
                🎯 ${isDe ? 'Funktionsverbgefüge (60)' : 'الأفعال الوظيفية (60)'}
              </a>
              <a href="#/cheatsheets" class="btn btn-secondary" style="font-size:0.9rem;">
                📑 ${isDe ? 'B2 Grammatik-Spickzettel' : 'ملخصات B2 السريعة'}
              </a>
              <a href="#/friends" class="btn btn-secondary" style="font-size:0.9rem;">
                👥 ${isDe ? 'Lernfreunde & Rangliste' : 'مجتمع الأصدقاء'}
              </a>
            </div>
          </div>
        </div>
      `;
    },

    calculateReadiness() {
      const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();
      let exams = [];
      try {
        const raw = localStorage.getItem('dmx.b2_exams');
        exams = raw ? JSON.parse(raw) : [];
      } catch (e) {}

      if (!exams || exams.length === 0) {
        return {
          score: 0,
          statusLabel: isDe ? 'Noch keine B2-Prüfung absolviert' : 'لم تخض أي امتحان B2 تجريبي بعد'
        };
      }

      // Calculate average percentage of recent exams
      const recent = exams.slice(-5);
      const avg = Math.round(recent.reduce((sum, e) => sum + (e.percentage || 0), 0) / recent.length);

      let statusLabel = isDe ? 'Gute Vorbereitung' : 'مستوى واعد — استمر بالتدريب';
      if (avg >= 75) statusLabel = isDe ? 'Hervorragend! Prüfungsreif 🌟' : 'ممتاز! جاهز تماماً للاختبار 🌟';
      else if (avg >= 60) statusLabel = isDe ? 'Prüfungsreif (Bestanden) ✅' : 'مستوى النجاح الرسمي متوفر ✅';
      else statusLabel = isDe ? 'Mehr Training erforderlich 💪' : 'تحتاج لمزيد من التمارين للوصول لـ 60%';

      return {
        score: avg,
        statusLabel
      };
    }
  };

  window.DM.b2Home = B2Home;
})();
