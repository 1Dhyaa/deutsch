// website/js/exams-renderer.js — Exams Overview, Official Modelltests, and Exam History Views

const ExamsRenderer = {
  currentLevel: 'a2',

  render(container) {
    const isB2 = window.DM && window.DM.level && window.DM.level.isB2();
    if (isB2 && (!this._userSelectedLevel || this.currentLevel === 'a2')) {
      this.currentLevel = 'b2';
    }

    if (window.App && window.App.setBreadcrumb) {
      window.App.setBreadcrumb(isB2 ? 'الامتحانات / Goethe-Zertifikat B2 Meister' : 'الامتحانات / Goethe-Zertifikat A2 & B1');
    }

    const reg = window.EXAMS_REGISTRY || {};
    const levelData = reg[this.currentLevel] || reg.b2 || reg.a2;

    container.innerHTML = `
      <div class="content-container fade-in">
        <!-- Section Header -->
        <div class="section-header">
          <div>
            <h1 class="section-title">امتحانات شهادة غوته (Goethe-Zertifikat)</h1>
            <p class="section-subtitle">
              نماذج اختبارات تفاعلية تحاكي النظام الرسمي لمعهد غوته بالكامل في المهارات الأربع مع مؤقت دقيق وتصحيح فوري.
            </p>
          </div>

          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <a href="#/exams/official" class="btn btn-secondary" style="font-size:0.9rem;">
              📑 نماذج غوته الأصلية (PDFs & Audio)
            </a>
            <a href="#/exams/history" class="btn btn-secondary" style="font-size:0.9rem;">
              📊 سجل اختباراتي
            </a>
          </div>
        </div>

        <!-- Level Selector Tabs -->
        <div style="display:flex; gap:12px; margin-bottom:28px; flex-wrap:wrap;">
          <button type="button" class="btn ${this.currentLevel === 'b2' ? 'btn-primary' : 'btn-secondary'}" onclick="window.ExamsRenderer.switchLevel('b2')">
            🎯 المستوى Goethe B2 (الهدف المتقدم)
          </button>
          <button type="button" class="btn ${this.currentLevel === 'b1' ? 'btn-primary' : 'btn-secondary'}" onclick="window.ExamsRenderer.switchLevel('b1')">
            📘 المستوى Goethe B1
          </button>
          <button type="button" class="btn ${this.currentLevel === 'a2' ? 'btn-primary' : 'btn-secondary'}" onclick="window.ExamsRenderer.switchLevel('a2')">
            📗 المستوى Goethe A2
          </button>
        </div>

        <!-- Modules Grid -->
        <div class="grid-2">
          ${this.renderModuleCard(levelData.modules.lesen, 'lesen')}
          ${this.renderModuleCard(levelData.modules.hoeren, 'hoeren')}
          ${this.renderModuleCard(levelData.modules.schreiben, 'schreiben')}
          ${this.renderModuleCard(levelData.modules.sprechen, 'sprechen')}
        </div>
      </div>
    `;
  },

  renderModuleCard(mod, modKey) {
    if (!mod) return '';

    const hasSets = mod.sets && mod.sets.length > 0;

    return `
      <div class="card" style="display:flex; flex-direction:column; justify-content:space-between;">
        <div>
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="font-size:1.8rem;">${mod.icon || '📝'}</span>
              <div>
                <h3 style="font-size:1.25rem; font-weight:700; margin:0;">${Utils.escapeHtml(mod.title.ar)} (${mod.title.de})</h3>
                <small style="color:var(--text-muted);">${mod.durationMinutes} دقيقة | ${mod.totalItems} سؤالاً | ${mod.maxScore} نقطة</small>
              </div>
            </div>
            <span class="badge badge-primary">${mod.teileCount} أجزاء</span>
          </div>

          <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.6; margin-bottom:16px;">
            ${Utils.escapeHtml(mod.description)}
          </p>
        </div>

        <div>
          ${hasSets ? `
            <div style="border-top:1px solid var(--border); padding-top:14px; margin-top:10px;">
              <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:10px;">النماذج المتاحة للتدريب:</h4>
              <div style="display:flex; flex-direction:column; gap:10px;">
                ${mod.sets.map(s => `
                  <div style="background:var(--bg-primary); border:1px solid var(--border); border-radius:var(--radius-md); padding:12px 14px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
                    <div>
                      <strong style="display:block;">${Utils.escapeHtml(s.title.ar)}</strong>
                      <span class="de-text" dir="ltr" style="font-size:0.85rem; color:var(--text-secondary);">${Utils.escapeHtml(s.title.de)}</span>
                    </div>

                    <div style="display:flex; gap:8px;">
                      <button type="button" class="btn btn-secondary" style="padding:6px 12px; font-size:0.85rem;" onclick="window.ExamsRenderer.startExam('${s.id}', 'practice')">
                        🎯 تدريب
                      </button>
                      <button type="button" class="btn btn-primary" style="padding:6px 14px; font-size:0.85rem;" onclick="window.ExamsRenderer.startExam('${s.id}', 'exam')">
                        ⏱️ امتحان (${mod.durationMinutes} دقيقة)
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
              ${modKey === 'hoeren' ? `
                <div style="margin-top:10px;">
                  <a href="#/diktat" class="btn btn-secondary btn-sm" style="width:100%;">
                    🎧 فتح مختبر الإملاء الصوتي وتدريب الأذن (Diktat-Labor) ➔
                  </a>
                </div>
              ` : ''}
            </div>
          ` : mod.trainerRoute ? `
            <div style="border-top:1px solid var(--border); padding-top:14px; margin-top:10px;">
              <a href="${mod.trainerRoute}" class="btn btn-primary" style="width:100%;">
                ${Utils.escapeHtml(mod.trainerLabel || 'ابدأ التدريب التفاعلي الآن ➔')}
              </a>
            </div>
          ` : `
            <div style="border-top:1px solid var(--border); padding-top:14px; margin-top:10px; color:var(--text-muted); font-size:0.9rem;">
              <a href="#/lessons" class="btn btn-secondary btn-sm">استعرض الدروس والتمارين</a>
            </div>
          `}
        </div>
      </div>
    `;
  },

  switchLevel(lvl) {
    this._userSelectedLevel = true;
    this.currentLevel = lvl;
    const container = document.getElementById('app-content');
    if (container) this.render(container);
  },

  startExam(examId, mode) {
    let examData = window.EXAM_DATA && window.EXAM_DATA[examId];
    if (examData && window.ExamEngine) {
      window.ExamEngine.init(examData, mode);
      return;
    }

    // Attempt lazy loading from EXAMS_REGISTRY
    const reg = window.EXAMS_REGISTRY || {};
    let dataFile = null;
    for (const lvl of Object.values(reg)) {
      for (const m of Object.values(lvl.modules || {})) {
        const found = (m.sets || []).find(s => s.id === examId);
        if (found && found.dataFile) {
          dataFile = found.dataFile;
          break;
        }
      }
      if (dataFile) break;
    }

    if (dataFile) {
      const script = document.createElement('script');
      script.src = `data/exams/${dataFile}`;
      script.onload = () => {
        examData = window.EXAM_DATA && window.EXAM_DATA[examId];
        if (examData && window.ExamEngine) {
          window.ExamEngine.init(examData, mode);
        } else {
          alert('تعذر تهيئة بيانات الامتحان.');
        }
      };
      script.onerror = () => {
        alert('تعذر تحميل ملف الامتحان من الخادم.');
      };
      document.body.appendChild(script);
    } else {
      alert('لم يتم العثور على مسار ملف الامتحان.');
    }
  },

  // Official Goethe Modelltests Page
  renderOfficial(container) {
    if (window.App && window.App.setBreadcrumb) {
      window.App.setBreadcrumb('الامتحانات / النماذج التدريبية الرسمية لمعهد غوته');
    }

    container.innerHTML = `
      <div class="content-container fade-in">
        <div class="section-header">
          <div>
            <h1 class="section-title">نماذج امتحانات معهد غوته الرسمية المجانية</h1>
            <p class="section-subtitle">
              روابط مباشرة ومواد تدريبية رسمية مقدمة مجاناً من معهد غوته (Goethe-Institut) لتحميل ملفات الـ PDF والتسجيلات الصوتية الأصلية.
            </p>
          </div>
          <a href="#/exams" class="btn btn-secondary">العودة للامتحانات التفاعلية</a>
        </div>

        <div class="grid-2">
          <!-- A2 Official Card -->
          <div class="card">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
              <span class="badge" style="background:#10B981; color:white; font-size:1rem; padding:6px 12px;">Goethe-Zertifikat A2</span>
              <h2 style="font-size:1.3rem; margin:0;">مواد تدريب المستوى A2</h2>
            </div>
            <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:18px;">
              نماذج كاملة للبالغين تحتوي على أوراق الأسئلة (Kandidatenblätter)، أوراق الإجابات النموذجية (Lösungsschlüssel)، والتسجيلات الصوتية الكاملة لقسم Hören.
            </p>
            <ul style="margin-bottom:20px; line-height:1.8; padding-right:20px;">
              <li><strong>Modellsatz Erwachsene:</strong> نموذج اختبار كامل مع حلوله وملفاته الصوتية.</li>
              <li><strong>Übungssatz 01:</strong> نموذج إضافي شامل للتدريب المكثف.</li>
              <li><strong>فيديو تجريبي:</strong> فيديو رسمي يوضح سير الجزء الشفهي (Sprechen).</li>
            </ul>
            <a href="https://www.goethe.de/de/spr/kup/prf/prf/gzA2/ueb.html" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width:100%;">
              🌐 فتح صفحة تحميل نماذج A2 على Goethe.de ↗
            </a>
          </div>

          <!-- B1 Official Card -->
          <div class="card">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
              <span class="badge" style="background:#8B5CF6; color:white; font-size:1rem; padding:6px 12px;">Goethe-Zertifikat B1</span>
              <h2 style="font-size:1.3rem; margin:0;">مواد تدريب المستوى B1</h2>
            </div>
            <p style="color:var(--text-secondary); line-height:1.7; margin-bottom:18px;">
              نماذج تدريب B1 الرسمية المعتمدة لجميع المهارات (Lesen, Hören, Schreiben, Sprechen) مع معايير التصحيح والتسجيلات الصوتية.
            </p>
            <ul style="margin-bottom:20px; line-height:1.8; padding-right:20px;">
              <li><strong>Modellsatz B1:</strong> كراسة الممتحن وملفات الاستماع بجودة استوديو.</li>
              <li><strong>Übungssatz B1:</strong> تدريبات تكميلية للتحضير للامتحان المعياري.</li>
              <li><strong>نماذج تفاعلية:</strong> اختبارات تجريبية قابلة للحل عبر المتصفح.</li>
            </ul>
            <a href="https://www.goethe.de/de/spr/kup/prf/prf/gzb1/ueb.html" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width:100%;">
              🌐 فتح صفحة تحميل نماذج B1 على Goethe.de ↗
            </a>
          </div>
        </div>
      </div>
    `;
  },

  // Exam History Page
  renderHistory(container) {
    if (window.App && window.App.setBreadcrumb) {
      window.App.setBreadcrumb('الامتحانات / سجل نتائج الاختبارات');
    }

    const history = (window.Storage && window.Storage.getExamHistory()) || [];

    container.innerHTML = `
      <div class="content-container fade-in">
        <div class="section-header">
          <div>
            <h1 class="section-title">سجل تاريخ الامتحانات (Exam History)</h1>
            <p class="section-subtitle">
              جميع محاولاتك السابقة ودرجاتك، مع إمكانية إعادة استعراض الأخطاء ونسخ التقرير للمعلم.
            </p>
          </div>
          <a href="#/exams" class="btn btn-secondary">العودة للامتحانات</a>
        </div>

        ${history.length === 0 ? `
          <div class="card text-center" style="padding:60px 20px;">
            <div style="font-size:3rem; margin-bottom:14px;">📝</div>
            <h2 style="font-size:1.4rem; margin-bottom:8px;">لم تجتز أي امتحان حتى الآن</h2>
            <p style="color:var(--text-secondary); max-width:500px; margin:0 auto 20px auto;">
              ابدأ الآن بأول نموذج تجريبي (A2 Lesen Modellsatz 1) لاختبار مستواك الحقيقي وتحديد نقاط القوة والضعف!
            </p>
            <a href="#/exams" class="btn btn-primary">ابدأ الامتحان الأول الآن</a>
          </div>
        ` : `
          <div style="display:flex; flex-direction:column; gap:16px;">
            ${history.map(item => `
              <div class="card" style="padding:20px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:14px; border-right:5px solid ${item.passed ? 'var(--success)' : 'var(--danger)'};">
                <div>
                  <div style="display:flex; align-items:center; gap:10px; margin-bottom:6px;">
                    <span class="badge" style="background:var(--accent); color:white;">${item.level.toUpperCase()}</span>
                    <span class="badge badge-secondary">${item.module.toUpperCase()}</span>
                    <span style="font-size:0.85rem; color:var(--text-muted);">${item.date}</span>
                    <span class="badge ${item.passed ? 'badge-success' : 'badge-danger'}">
                      ${item.passed ? 'ناجح ✓' : 'راسب ✗'}
                    </span>
                  </div>
                  <h3 style="font-size:1.15rem; font-weight:700; margin:0;">
                    ${Utils.escapeHtml(item.title ? item.title.ar : item.examId)}
                  </h3>
                </div>

                <div style="display:flex; align-items:center; gap:16px;">
                  <div style="text-align:center;">
                    <div style="font-size:1.4rem; font-weight:800; color:${item.passed ? 'var(--success)' : 'var(--danger)'};">
                      ${item.totalScore} / ${item.maxScore}
                    </div>
                    <small style="color:var(--text-muted);">${item.percentage}%</small>
                  </div>

                  <button type="button" class="btn btn-secondary" onclick="window.ExamsRenderer.viewHistoricalResult('${item.id}')">
                    عرض التقرير وملاحظات المعلم
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  },

  viewHistoricalResult(resId) {
    const res = window.Storage.getExamResult(resId);
    if (!res || !window.ExamEngine) return;
    window.ExamEngine.exam = { id: res.examId, passScore: res.maxScore * 0.6 };
    window.ExamEngine.examResultId = res.id;
    window.ExamEngine.renderResults(res);
  }
};

window.ExamsRenderer = ExamsRenderer;
