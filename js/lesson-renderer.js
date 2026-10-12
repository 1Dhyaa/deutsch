const LessonRenderer = {
  currentLesson: null,
  
  render(lessonId) {
    const lesson = (window.LESSONS && window.LESSONS[lessonId]) || (window.lessons && window.lessons[lessonId]);
    if (!lesson) {
      document.getElementById('app-content').innerHTML = `
        <div class="content-container fade-in">
          <div class="card text-center" style="padding: 48px 24px;">
            <div style="font-size: 3rem; margin-bottom: 12px;">🚧</div>
            <h2 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 8px;">هذا الدرس قيد الإعداد ضمن الدفعات القادمة!</h2>
            <p class="text-secondary" style="max-width: 600px; margin: 0 auto 24px auto; font-size: 1.05rem;">
              يتم بناء الدروس تدريجياً على دفعات. الدروس التالية جاهزة ومكتملة بكامل الشروحات، الجداول، 8+ أمثلة ناطقة، 10 تمارين تفاعلية، واختبار نهائي:
            </p>
            <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; margin-bottom: 28px;">
              <a href="#/lesson/a1-review-01" class="btn btn-secondary">📘 مراجعة A1: ضمائر الملكية</a>
              <a href="#/lesson/a2-1-01" class="btn btn-secondary">📗 A2.1: الأفعال الانعكاسية (1)</a>
              <a href="#/lesson/a2-1-02" class="btn btn-secondary">📗 A2.1: الأفعال الانعكاسية (2)</a>
              <a href="#/lesson/a2-2-01" class="btn btn-secondary">🟣 A2.2: تصريف الصفات</a>
            </div>
            <a href="#/lessons" class="btn btn-primary">العودة لخريطة المنهج</a>
          </div>
        </div>
      `;
      return;
    }
    
    this.currentLesson = lesson;
    Storage.markLessonStarted(lessonId);
    const isDe = window.I18n && window.I18n.isGerman();
    if (window.App && window.App.setBreadcrumb) {
      window.App.setBreadcrumb(isDe ? `Lektionen / ${lesson.title.de}` : `الدروس / ${lesson.title.ar}`);
    }
    
    const content = document.getElementById('app-content');
    content.innerHTML = this.buildLessonHTML(lesson);
    content.scrollTop = 0;
    window.scrollTo(0, 0);
    
    // Initialize exercises after render
    setTimeout(() => QuizEngine.init(lesson), 100);
  },
  
  buildLessonHTML(lesson) {
    return `
      <div class="lesson-page fade-in">
        ${this.renderHeader(lesson)}
        ${this.renderGoal(lesson)}
        ${this.renderExplanation(lesson)}
        ${this.renderExamples(lesson)}
        ${this.renderArabicTips(lesson)}
        ${this.renderSummary(lesson)}
        ${this.renderVocabulary(lesson)}
        <div id="exercises-section">
          ${this.renderExercisesPlaceholder(lesson)}
        </div>
        <div id="quiz-section" style="display:none">
          ${this.renderQuizPlaceholder(lesson)}
        </div>
        ${this.renderNavigation(lesson)}
      </div>
    `;
  },
  
  renderHeader(lesson) {
    const isDe = window.I18n && window.I18n.isGerman();
    const levelInfo = window.LEVELS ? window.LEVELS.find(l => l.id === lesson.level) : null;
    const levelColor = levelInfo ? levelInfo.color : 'var(--accent)';
    const levelName = levelInfo ? (isDe ? levelInfo.title.de : levelInfo.title.ar) : lesson.level;
    
    return `
      <div class="lesson-header">
        <span class="badge" style="background:${levelColor}; color:white">${levelName}</span>
        <h1 class="lesson-title">
          <span class="de-text" dir="ltr">${Utils.escapeHtml(lesson.title.de)}</span>
        </h1>
        <h2 class="lesson-subtitle">${Utils.escapeHtml(lesson.title.ar)}</h2>
      </div>
    `;
  },
  
  renderGoal(lesson) {
    const isDe = window.I18n && window.I18n.isGerman();
    return `
      <div class="card lesson-goal">
        <div class="section-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg></div>
        <h3>${isDe ? 'Lernziel der Lektion' : 'الهدف من الدرس'}</h3>
        <p>${Utils.escapeHtml(lesson.goal)}</p>
      </div>
    `;
  },
  
  renderExplanation(lesson) {
    if (!lesson.explanation || !lesson.explanation.length) return '';
    
    const isDe = window.I18n && window.I18n.isGerman();
    let html = `<div class="card lesson-explanation">
      <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> ${isDe ? 'Erklärung & Grammatik' : 'الشرح والقواعد'}</h3>`;
    
    for (const block of lesson.explanation) {
      switch (block.type) {
        case 'text':
          html += `<p class="explanation-text">${Utils.renderBold(Utils.escapeHtml(block.content))}</p>`;
          break;
        case 'table':
          html += '<div class="table-wrapper"><table class="lesson-table"><thead><tr>';
          for (const h of block.headers) {
            html += `<th>${Utils.escapeHtml(h)}</th>`;
          }
          html += '</tr></thead><tbody>';
          for (const row of block.rows) {
            html += '<tr>';
            for (const cell of row) {
              // Check if cell contains German text (simple heuristic: contains uppercase latin letter)
              const isGerman = /[A-ZÄÖÜa-zäöüß]/.test(cell) && !/[\u0600-\u06FF]/.test(cell);
              if (isGerman) {
                html += `<td><span class="de-text" dir="ltr">${Utils.colorArticles(Utils.renderBold(Utils.escapeHtml(cell)))}</span></td>`;
              } else {
                html += `<td>${Utils.escapeHtml(cell)}</td>`;
              }
            }
            html += '</tr>';
          }
          html += '</tbody></table></div>';
          break;
        case 'rule':
          html += `<div class="rule-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            <span>${Utils.renderBold(Utils.escapeHtml(block.content))}</span>
          </div>`;
          break;
      }
    }
    
    html += '</div>';
    return html;
  },
  
  renderExamples(lesson) {
    if (!lesson.examples || !lesson.examples.length) return '';
    const isDe = window.I18n && window.I18n.isGerman();
    let html = `<div class="card lesson-examples">
      <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> ${isDe ? 'Beispielsätze' : 'أمثلة عملية'}</h3>
      <div class="examples-list">`;
    
    for (const ex of lesson.examples) {
      let deText = Utils.renderBold(Utils.escapeHtml(ex.de));
      if (ex.highlight && !ex.de.includes('**')) {
        deText = deText.replace(Utils.escapeHtml(ex.highlight), `<strong class="highlight">${Utils.escapeHtml(ex.highlight)}</strong>`);
      }
      
      html += `
        <div class="example-item">
          <div class="example-de">
            <span class="de-text" dir="ltr">${Utils.colorArticles(deText)}</span>
            ${ex.audio !== false ? `<button class="audio-btn" onclick="Speech.speak('${ex.de.replace(/\*\*/g, '').replace(/'/g, "\\'")}')" title="${isDe ? 'Anhören' : 'استمع'}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.08"/></svg>
            </button>` : ''}
          </div>
          <div class="example-ar">${Utils.escapeHtml(ex.ar)}</div>
          ${ex.note ? `<div class="example-note"><span class="de-text" dir="ltr">${Utils.renderBold(Utils.escapeHtml(ex.note))}</span></div>` : ''}
        </div>
      `;
    }
    
    html += '</div></div>';
    return html;
  },
  
  renderArabicTips(lesson) {
    if (!lesson.arabicTips || !lesson.arabicTips.length) return '';
    const isDe = window.I18n && window.I18n.isGerman();
    let html = `<div class="card lesson-tips">
      <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg> ${isDe ? 'Wichtige Lerntipps & Hinweise' : 'نصائح للناطقين بالعربية'}</h3>
      <ul class="tips-list">`;
    
    for (const tip of lesson.arabicTips) {
      html += `<li>${Utils.renderBold(Utils.escapeHtml(tip))}</li>`;
    }
    
    html += '</ul></div>';
    return html;
  },
  
  renderSummary(lesson) {
    if (!lesson.summary || !lesson.summary.length) return '';
    const isDe = window.I18n && window.I18n.isGerman();
    let html = `<div class="card lesson-summary">
      <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> ${isDe ? 'Zusammenfassung & Merksätze' : 'ملخص سريع'}</h3>
      <ul class="summary-list">`;
    
    for (const item of lesson.summary) {
      html += `<li>${Utils.renderBold(Utils.escapeHtml(item))}</li>`;
    }
    
    html += '</ul></div>';
    return html;
  },
  
  renderVocabulary(lesson) {
    if (!lesson.vocabulary || !lesson.vocabulary.length) return '';
    const isDe = window.I18n && window.I18n.isGerman();
    let html = `<div class="card lesson-vocab">
      <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> ${isDe ? 'Wortschatz der Lektion' : 'مفردات الدرس'}</h3>
      <div class="vocab-grid">`;
    
    for (const word of lesson.vocabulary) {
      const articleClass = Utils.getArticleClass(word.article);
      html += `
        <div class="vocab-card">
          <div class="vocab-word">
            <span class="de-text ${articleClass}" dir="ltr">${Utils.escapeHtml(word.de)}</span>
            <button class="audio-btn" onclick="Speech.speak('${word.de.replace(/'/g, "\\'")}')" title="${isDe ? 'Anhören' : 'استمع'}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.08"/></svg>
            </button>
          </div>
          <div class="vocab-plural de-text" dir="ltr">${Utils.escapeHtml(word.plural)}</div>
          <div class="vocab-meaning">${Utils.escapeHtml(word.ar)}</div>
          ${word.example ? `<div class="vocab-example"><span class="de-text" dir="ltr">${Utils.colorArticles(Utils.escapeHtml(word.example))}</span></div>` : ''}
        </div>
      `;
    }
    
    html += '</div></div>';
    return html;
  },
  
  renderExercisesPlaceholder(lesson) {
    const isDe = window.I18n && window.I18n.isGerman();
    return `
      <div class="card">
        <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> ${isDe ? 'Interaktive Übungen' : 'تمارين تفاعلية'}</h3>
        <p class="text-secondary">${isDe ? 'Mache die folgenden Übungen, um das Gelernte zu vertiefen:' : 'أكمل التمارين التالية لتثبيت ما تعلمته:'}</p>
        <div id="exercises-container"></div>
      </div>
    `;
  },
  
  renderQuizPlaceholder(lesson) {
    const isDe = window.I18n && window.I18n.isGerman();
    return `
      <div class="card">
        <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> ${isDe ? 'Abschlusstest' : 'الاختبار النهائي'}</h3>
        <p class="text-secondary">${isDe ? 'Teste dein Wissen mit 5 Fragen:' : 'اختبر نفسك في 5 أسئلة:'}</p>
        <div id="quiz-container"></div>
      </div>
    `;
  },
  
  renderNavigation(lesson) {
    // Find prev/next lesson
    if (!window.LEVELS) return '';
    const isDe = window.I18n && window.I18n.isGerman();
    
    let allLessons = [];
    for (const level of window.LEVELS) {
      if(level.lessons) {
          for (const l of level.lessons) {
            allLessons.push(l);
          }
      }
    }
    
    const currentIndex = allLessons.findIndex(l => l.id === lesson.id);
    const prev = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
    const next = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;
    
    const prevTitle = prev ? (isDe ? prev.title.de : prev.title.ar) : '';
    const nextTitle = next ? (isDe ? next.title.de : next.title.ar) : '';
    const allText = isDe ? 'Alle Lektionen' : 'العودة للدروس';
    
    return `
      <div class="lesson-nav">
        ${prev ? `<a href="#/lesson/${prev.id}" class="btn btn-secondary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="${isDe ? '15 18 9 12 15 6' : '9 18 15 12 9 6'}"/></svg> ${Utils.escapeHtml(prevTitle)}</a>` : '<div></div>'}
        <a href="#/lessons" class="btn btn-secondary">${allText}</a>
        ${next ? `<a href="#/lesson/${next.id}" class="btn btn-primary">${Utils.escapeHtml(nextTitle)} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="${isDe ? '9 18 15 12 9 6' : '15 18 9 12 15 6'}"/></svg></a>` : '<div></div>'}
      </div>
    `;
  }
};
};
