// website/js/exam-engine.js — Goethe Examination Execution & Grading Engine

const ExamEngine = {
  exam: null,
  mode: 'exam', // 'exam' or 'practice'
  userAnswers: {},
  currentTeil: 1,
  secondsLeft: 0,
  timerInterval: null,
  startTime: null,
  isSubmitted: false,
  examResultId: null,

  init(examData, mode = 'exam', forceReset = false) {
    this.exam = examData;
    this.mode = mode;
    this.userAnswers = {};
    this.currentTeil = 1;
    this.secondsLeft = (examData.durationMinutes || 30) * 60;
    this.isSubmitted = false;
    this.startTime = Date.now();
    this.examResultId = `exam-${examData.level}-${examData.module}-${examData.setNumber || 1}-${Date.now()}`;

    if (forceReset && window.Storage && window.Storage.clearActiveExamSession) {
      window.Storage.clearActiveExamSession(examData.id);
    } else if (!forceReset && window.Storage && window.Storage.getActiveExamSession) {
      const saved = window.Storage.getActiveExamSession(examData.id);
      if (saved && !saved.isSubmitted) {
        this.userAnswers = saved.userAnswers || {};
        this.currentTeil = saved.currentTeil || 1;
        if (typeof saved.secondsLeft === 'number' && saved.secondsLeft > 0) {
          this.secondsLeft = saved.secondsLeft;
        }
        this.startTime = saved.startTime || Date.now();
      }
    }

    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }

    this.saveSession();
    this.render();

    if (this.mode === 'exam') {
      this.startTimer();
    }
  },

  saveSession() {
    if (!this.exam || this.isSubmitted) return;
    if (window.Storage && window.Storage.saveActiveExamSession) {
      window.Storage.saveActiveExamSession(this.exam.id, {
        mode: this.mode,
        userAnswers: this.userAnswers,
        currentTeil: this.currentTeil,
        secondsLeft: this.secondsLeft,
        startTime: this.startTime,
        isSubmitted: this.isSubmitted
      });
    }
  },

  resetExam() {
    if (!this.exam) return;
    this.init(this.exam, this.mode, true);
    if (window.Utils && window.Utils.showToast) {
      window.Utils.showToast('تمت إعادة الامتحان من البداية 🔄', 'info', 1800);
    }
  },

  startTimer() {
    const timerEl = document.getElementById('exam-timer-display');
    const updateDisplay = () => {
      const minutes = Math.floor(this.secondsLeft / 60);
      const seconds = this.secondsLeft % 60;
      const formatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      if (timerEl) {
        timerEl.textContent = formatted;
        const pill = timerEl.closest('.exam-timer-pill');
        if (pill) {
          pill.classList.toggle('timer-warning', this.secondsLeft <= 300 && this.secondsLeft > 60);
          pill.classList.toggle('timer-critical', this.secondsLeft <= 60);
        }
      }

      if (this.secondsLeft <= 0) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        if (window.Utils && window.Utils.showToast) {
          window.Utils.showToast('انتهى الوقت الرسمي للامتحان! تم تسليم إجاباتك.', 'warning', 3000);
        }
        this.submitExam();
      }
      this.secondsLeft--;
      if (this.secondsLeft % 5 === 0) {
        this.saveSession();
      }
    };

    updateDisplay();
    this.timerInterval = setInterval(updateDisplay, 1000);
  },

  render() {
    const content = document.getElementById('app-content');
    if (!content) return;

    const answeredCount = Object.keys(this.userAnswers).length;
    const totalCount = this.exam.totalItems || 20;
    const remainingCount = Math.max(0, totalCount - answeredCount);

    content.innerHTML = `
      <div class="exam-container fade-in">
        <!-- Header Card -->
        <div class="exam-header-card">
          <div class="exam-meta">
            <div class="exam-title-row">
              <span class="badge" style="background:var(--accent); color:white;">${this.exam.level.toUpperCase()}</span>
              <span class="badge" style="background:#059669; color:white;">${this.exam.module.toUpperCase()}</span>
              <span class="exam-mode-badge ${this.mode === 'exam' ? 'mode-exam' : 'mode-practice'}">
                ${this.mode === 'exam' ? '⏱️ وضع الامتحان الرسمي (Exam Mode)' : '🎯 وضع التدريب والتوجيه (Practice Mode)'}
              </span>
            </div>
            <h1 style="font-size:1.4rem; font-weight:700; margin:4px 0;">${Utils.escapeHtml(this.exam.title.ar)}</h1>
            <div class="de-text" dir="ltr" style="color:var(--text-secondary); font-size:0.95rem;">
              ${Utils.escapeHtml(this.exam.title.de)}
            </div>
          </div>

          <div class="exam-controls-row" style="flex-wrap:wrap; gap:10px;">
            <div class="exam-timer-pill">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span id="exam-timer-display">${this.mode === 'exam' ? '30:00' : 'غير محدد'}</span>
            </div>

            <button type="button" onclick="window.ExamEngine.resetExam()" class="btn btn-outline" style="padding:10px 14px; font-size:0.9rem;">
              🔄 إعادة من البداية
            </button>

            <button type="button" id="btn-submit-exam" class="btn btn-primary" style="padding:10px 20px;">
              تسليم الامتحان ✓
            </button>
          </div>
        </div>

        <!-- Question Navigator Strip -->
        <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-md); padding:12px 16px; margin-bottom:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:10px; font-size:0.9rem;">
            <span style="font-weight:700;">خريطة الأسئلة (اضغط على رقم السؤال للانتقال إليه مباشرة):</span>
            <span id="exam-progress-counter" style="color:var(--text-secondary);">
              ✅ تمت الإجابة: <strong style="color:var(--success);">${answeredCount}</strong> | ⏳ متبقي: <strong>${remainingCount}</strong>
            </span>
          </div>
          <div class="question-nav-strip" id="exam-q-nav" style="margin-bottom:0;">
            ${this.renderQuestionNavPills()}
          </div>
        </div>

        <!-- Teile Tabs -->
        <div class="exam-teile-nav">
          ${this.exam.teile.map(t => `
            <button type="button" class="exam-teil-tab ${t.teilNumber === this.currentTeil ? 'active' : ''}" data-teil="${t.teilNumber}">
              <span>${Utils.escapeHtml(t.title.ar)}</span>
              <small style="opacity:0.8;">(${t.questions.length} أسئلة)</small>
            </button>
          `).join('')}
        </div>

        <!-- Active Teil Content -->
        <div id="exam-teil-body">
          ${this.renderTeilBody(this.currentTeil)}
        </div>
      </div>
    `;

    this.bindEvents();
  },

  renderQuestionNavPills() {
    let pills = [];
    this.exam.teile.forEach(teil => {
      teil.questions.forEach(q => {
        const isAnswered = this.userAnswers[q.number] !== undefined;
        pills.push(`
          <div class="q-nav-pill ${isAnswered ? 'answered' : ''}" data-q="${q.number}" title="السؤال ${q.number}">
            ${q.number}
          </div>
        `);
      });
    });
    return pills.join('');
  },

  renderTeilBody(teilNumber) {
    const teil = this.exam.teile.find(t => t.teilNumber === teilNumber);
    if (!teil) return '';

    // Split Layout for reading passages
    if (teil.textType === 'article' || teil.textType === 'directory') {
      return `
        <div class="exam-split-grid">
          <!-- Text Pane -->
          <div class="exam-text-pane">
            <h3>${Utils.escapeHtml(teil.text.title)}</h3>
            <div class="exam-reading-passage" dir="ltr">${Utils.escapeHtml(teil.text.content)}</div>
          </div>

          <!-- Questions Pane -->
          <div class="exam-questions-pane">
            <div class="card" style="margin-bottom:0; background:var(--bg-primary); border-style:dashed;">
              <p style="margin:0; font-size:0.95rem; color:var(--text-secondary);">
                ${Utils.escapeHtml(teil.instructions.ar)}
              </p>
            </div>
            ${teil.questions.map(q => this.renderQuestionCard(q)).join('')}
          </div>
        </div>
      `;
    }

    // Messages Layout (Teil 3)
    if (teil.textType === 'messages') {
      return `
        <div>
          <div class="card" style="margin-bottom:20px; background:var(--bg-primary); border-style:dashed;">
            <p style="margin:0; font-size:0.95rem; color:var(--text-secondary);">
              ${Utils.escapeHtml(teil.instructions.ar)}
            </p>
          </div>
          <div style="display:flex; flex-direction:column; gap:20px;">
            ${teil.questions.map(q => `
              <div class="exam-question-card" id="q-card-${q.number}">
                <div class="card" style="background:var(--bg-primary); margin-bottom:14px; padding:16px;">
                  <span class="badge badge-secondary" style="margin-bottom:8px;">نص الرسالة:</span>
                  <div class="de-text" dir="ltr" style="white-space:pre-line; line-height:1.7;">${Utils.escapeHtml(q.message)}</div>
                </div>
                ${this.renderQuestionCardContent(q)}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Matching Layout (Teil 4)
    if (teil.textType === 'matching') {
      return `
        <div>
          <div class="card" style="margin-bottom:20px; background:var(--bg-primary); border-style:dashed;">
            <p style="margin:0; font-size:0.95rem; color:var(--text-secondary);">
              ${Utils.escapeHtml(teil.instructions.ar)}
            </p>
          </div>

          <!-- Ads Grid -->
          <h3 style="margin-bottom:12px; font-size:1.15rem;">الإعلانات المتاحة (Anzeigen a – f):</h3>
          <div class="exam-ads-grid">
            ${teil.ads.map(ad => `
              <div class="ad-card">
                <span class="ad-card-badge">${ad.title}</span>
                <p class="de-text" dir="ltr" style="margin:0; line-height:1.6;">${Utils.escapeHtml(ad.content)}</p>
              </div>
            `).join('')}
          </div>

          <!-- Situations -->
          <h3 style="margin:24px 0 12px 0; font-size:1.15rem;">المواقف والأشخاص (Aufgaben 16–20):</h3>
          <div style="display:flex; flex-direction:column; gap:16px;">
            ${teil.questions.map(q => `
              <div class="exam-question-card" id="q-card-${q.number}">
                <div class="q-header">
                  <span class="q-number-badge">سؤال ${q.number}</span>
                </div>
                <div class="q-title">
                  <span class="de-text" dir="ltr"><strong>${Utils.escapeHtml(q.situation)}</strong></span>
                </div>
                ${this.renderOptionsList(q)}
                ${this.renderPracticeFeedback(q)}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    return '';
  },

  renderQuestionCard(q) {
    return `
      <div class="exam-question-card" id="q-card-${q.number}">
        <div class="q-header">
          <span class="q-number-badge">سؤال ${q.number}</span>
        </div>
        <div class="q-title de-text" dir="ltr">
          ${Utils.escapeHtml(q.question)}
        </div>
        ${this.renderOptionsList(q)}
        ${this.renderPracticeFeedback(q)}
      </div>
    `;
  },

  renderQuestionCardContent(q) {
    return `
      <div class="q-header">
        <span class="q-number-badge">سؤال ${q.number}</span>
      </div>
      <div class="q-title">
        <span class="de-text" dir="ltr"><strong>${Utils.escapeHtml(q.question)}</strong></span>
      </div>
      ${this.renderOptionsList(q)}
      ${this.renderPracticeFeedback(q)}
    `;
  },

  renderOptionsList(q) {
    const selectedIdx = this.userAnswers[q.number];
    return `
      <div class="q-options-list">
        ${q.options.map((opt, idx) => {
          const isSelected = selectedIdx === idx;
          const letter = String.fromCharCode(97 + idx); // a, b, c...
          return `
            <label class="q-option-label ${isSelected ? 'selected' : ''}" data-q="${q.number}" data-idx="${idx}">
              <input type="radio" name="q-${q.number}" value="${idx}" ${isSelected ? 'checked' : ''}>
              <span style="font-weight:700; min-width:20px;">${letter})</span>
              <span class="de-text" dir="ltr">${Utils.escapeHtml(opt)}</span>
            </label>
          `;
        }).join('')}
      </div>
    `;
  },

  renderPracticeFeedback(q) {
    if (this.mode !== 'practice') return '';
    const selectedIdx = this.userAnswers[q.number];
    if (selectedIdx === undefined) return '';

    const isCorrect = selectedIdx === q.answer;
    return `
      <div class="q-explanation-box fade-in" style="border-right-color:${isCorrect ? 'var(--success)' : 'var(--danger)'};">
        <div style="font-weight:700; color:${isCorrect ? 'var(--success)' : 'var(--danger)'}; margin-bottom:4px;">
          ${isCorrect ? 'إجابة صحيحة! ✓' : 'إجابة غير صحيحة ✗'}
        </div>
        <div>${Utils.escapeHtml(q.explanation)}</div>
      </div>
    `;
  },

  bindEvents() {
    // Teil Tab switching
    document.querySelectorAll('.exam-teil-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const teilNum = parseInt(tab.getAttribute('data-teil'), 10);
        this.switchTeil(teilNum);
      });
    });

    // Option selecting
    document.querySelectorAll('.q-option-label').forEach(label => {
      label.addEventListener('click', () => {
        const qNum = parseInt(label.getAttribute('data-q'), 10);
        const optIdx = parseInt(label.getAttribute('data-idx'), 10);
        this.selectAnswer(qNum, optIdx);
      });
    });

    // Question Nav Pills click
    document.querySelectorAll('.q-nav-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const qNum = parseInt(pill.getAttribute('data-q'), 10);
        this.jumpToQuestion(qNum);
      });
    });

    // Submit button
    const submitBtn = document.getElementById('btn-submit-exam');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const answeredCount = Object.keys(this.userAnswers).length;
        const total = this.exam.totalItems;
        if (answeredCount < total) {
          const confirmSubmit = confirm(`لقد أجبت عن ${answeredCount} من أصل ${total} سؤالاً. هل تريد تسليم الامتحان الآن؟`);
          if (!confirmSubmit) return;
        }
        this.submitExam();
      });
    }
  },

  switchTeil(teilNum) {
    this.currentTeil = teilNum;
    this.saveSession();
    document.querySelectorAll('.exam-teil-tab').forEach(t => {
      t.classList.toggle('active', parseInt(t.getAttribute('data-teil'), 10) === teilNum);
    });
    const bodyEl = document.getElementById('exam-teil-body');
    if (bodyEl) {
      bodyEl.innerHTML = this.renderTeilBody(teilNum);
      this.bindEvents();
    }
  },

  jumpToQuestion(qNum) {
    // Find which teil contains this question
    for (const teil of this.exam.teile) {
      if (teil.questions.some(q => q.number === qNum)) {
        if (this.currentTeil !== teil.teilNumber) {
          this.switchTeil(teil.teilNumber);
        }
        break;
      }
    }
    // Scroll to question
    setTimeout(() => {
      const card = document.getElementById(`q-card-${qNum}`) || document.querySelector(`[data-q="${qNum}"]`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  },

  selectAnswer(qNum, optIdx) {
    this.userAnswers[qNum] = optIdx;
    this.saveSession();

    // Update nav pill
    const pill = document.querySelector(`.q-nav-pill[data-q="${qNum}"]`);
    if (pill) pill.classList.add('answered');

    // Update answered/remaining counter
    const counterEl = document.getElementById('exam-progress-counter');
    if (counterEl) {
      const answeredCount = Object.keys(this.userAnswers).length;
      const totalCount = this.exam.totalItems || 20;
      const remainingCount = Math.max(0, totalCount - answeredCount);
      counterEl.innerHTML = `✅ تمت الإجابة: <strong style="color:var(--success);">${answeredCount}</strong> | ⏳ متبقي: <strong>${remainingCount}</strong>`;
    }

    // Re-render in practice mode for instant feedback
    if (this.mode === 'practice') {
      const bodyEl = document.getElementById('exam-teil-body');
      if (bodyEl) {
        bodyEl.innerHTML = this.renderTeilBody(this.currentTeil);
        this.bindEvents();
      }
    } else {
      // In Exam mode: just update selection highlight
      document.querySelectorAll(`.q-option-label[data-q="${qNum}"]`).forEach(l => {
        const idx = parseInt(l.getAttribute('data-idx'), 10);
        l.classList.toggle('selected', idx === optIdx);
        const radio = l.querySelector('input[type="radio"]');
        if (radio) radio.checked = (idx === optIdx);
      });
    }
  },

  // Submit and Calculate Score
  submitExam() {
    if (this.isSubmitted) return;
    this.isSubmitted = true;

    if (window.Storage && window.Storage.clearActiveExamSession && this.exam) {
      window.Storage.clearActiveExamSession(this.exam.id);
    }

    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }

    const elapsedSeconds = Math.round((Date.now() - this.startTime) / 1000);
    const maxScore = this.exam.maxScore || 25;
    const totalItems = this.exam.totalItems || 20;
    const pointPerItem = maxScore / totalItems;

    let totalPoints = 0;
    let teileScores = {};
    let mistakesList = [];
    let itemsReview = [];

    this.exam.teile.forEach(teil => {
      let teilCorrect = 0;
      teil.questions.forEach(q => {
        const userChoice = this.userAnswers[q.number];
        const isCorrect = (userChoice === q.answer);
        if (isCorrect) {
          totalPoints += pointPerItem;
          teilCorrect += 1;
        } else {
          // Record mistake
          const mistakeObj = {
            id: Utils.generateId(),
            lessonId: this.exam.id,
            question: q.question || q.situation || `Teil ${teil.teilNumber} - Frage ${q.number}`,
            myAnswer: userChoice !== undefined ? q.options[userChoice] : '(لم يتم الاختيار)',
            correctAnswer: q.options[q.answer],
            explanation: q.explanation || 'راجع النص ومفردات الدرس.'
          };
          mistakesList.push(mistakeObj);
          if (window.Storage) {
            window.Storage.addMistake(mistakeObj);
          }
        }

        itemsReview.push({
          number: q.number,
          teil: teil.teilNumber,
          question: q.question || q.situation,
          options: q.options,
          userChoice: userChoice,
          correctAnswer: q.answer,
          isCorrect: isCorrect,
          explanation: q.explanation
        });
      });

      teileScores[`teil_${teil.teilNumber}`] = {
        teilNumber: teil.teilNumber,
        title: teil.title.ar,
        correct: teilCorrect,
        total: teil.questions.length,
        points: (teilCorrect * pointPerItem).toFixed(1)
      };
    });

    const percentage = Math.round((totalPoints / maxScore) * 100);
    const passed = (percentage >= (this.exam.passScore ? (this.exam.passScore / maxScore * 100) : 60));

    // Save to Exam History
    const examResult = {
      id: this.examResultId,
      examId: this.exam.id,
      title: this.exam.title,
      level: this.exam.level,
      module: this.exam.module,
      setNumber: this.exam.setNumber || 1,
      mode: this.mode,
      date: Utils.today(),
      timestamp: Date.now(),
      timeUsedSeconds: elapsedSeconds,
      totalScore: parseFloat(totalPoints.toFixed(2)),
      maxScore: maxScore,
      percentage: percentage,
      passed: passed,
      teileScores: teileScores,
      itemsReview: itemsReview,
      tutorFeedback: null
    };

    if (window.Storage) {
      window.Storage.saveExamResult(examResult);
      window.Storage.addXP(Math.round(totalPoints * 4));
    }

    this.renderResults(examResult);
  },

  renderResults(result) {
    const content = document.getElementById('app-content');
    if (!content) return;

    const minutesUsed = Math.floor(result.timeUsedSeconds / 60);
    const secondsUsed = result.timeUsedSeconds % 60;

    content.innerHTML = `
      <div class="exam-container fade-in">
        <!-- Hero Score Banner -->
        <div class="exam-results-hero">
          <div class="results-score-circle ${result.passed ? 'passed' : 'failed'}">
            <span class="score-main">${result.totalScore}</span>
            <span class="score-sub">من ${result.maxScore} نقطة</span>
          </div>

          <h2 class="results-status-title" style="color:${result.passed ? 'var(--success)' : 'var(--danger)'};">
            ${result.passed ? '🎉 مبروك! اجتزت الاختبار بنجاح (Bestanden)' : '⚠️ للأسف لم تجتز الحد الأدنى (Nicht bestanden)'}
          </h2>
          <p style="color:var(--text-secondary); font-size:1.05rem; margin-bottom:14px;">
            النسبة المئوية: <strong>${result.percentage}%</strong> (حد النجاح الرسمي 60% — ${this.exam.passScore} نقطة) | الوقت المستغرق: ${minutesUsed} دقيقة و ${secondsUsed} ثانية.
          </p>

          <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
            <a href="#/exams" class="btn btn-secondary">العودة لقائمة الامتحانات</a>
            <button type="button" class="btn btn-primary" onclick="window.ExamEngine.init(window.EXAM_DATA['${this.exam.id}'], 'exam', true)">
              🔄 إعادة الامتحان
            </button>
          </div>
        </div>

        <!-- Score By Teile -->
        <h3 style="font-size:1.2rem; font-weight:700; margin-bottom:14px;">النتائج حسب الأجزاء (Teile):</h3>
        <div class="results-teile-grid">
          ${Object.values(result.teileScores).map(ts => `
            <div class="teil-score-card">
              <div style="font-weight:600; margin-bottom:6px;">الجزء ${ts.teilNumber}</div>
              <div class="teil-score-val">${ts.correct} / ${ts.total}</div>
              <small style="color:var(--text-muted);">${ts.points} نقطة</small>
            </div>
          `).join('')}
        </div>

        <!-- Tutor Export Box -->
        <div class="tutor-export-box">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; margin-bottom:12px;">
            <div>
              <h3 style="font-size:1.2rem; font-weight:700; margin:0;">📋 تصدير النتيجة للمعلم (Tutor Export)</h3>
              <p style="color:var(--text-secondary); font-size:0.9rem; margin:4px 0 0 0;">
                انسخ النتيجة كاملة وأرسلها في الشات للمعلم للحصول على تصحيح مفصل وفق معايير غوته.
              </p>
            </div>
            <div class="export-btn-group">
              <button type="button" class="btn btn-secondary" onclick="window.ExamEngine.copyResultMarkdown()">
                📋 نسخ التقرير (Markdown)
              </button>
              <button type="button" class="btn btn-secondary" onclick="window.ExamEngine.downloadResultJson()">
                💾 تنزيل النتيجة (JSON)
              </button>
              <button type="button" class="btn btn-primary" onclick="window.ExamEngine.openImportFeedbackModal()">
                📥 استيراد ملاحظات المعلم
              </button>
            </div>
          </div>

          <div class="tutor-instruction-quote">
            Grade this exam like a Goethe examiner. Give a score per criterion, mark my mistakes, show a corrected version, explain in Arabic, and update mistakes.md and progress.md.
          </div>
        </div>

        <!-- Detailed Question-by-Question Review -->
        <h3 style="font-size:1.25rem; font-weight:700; margin-bottom:16px;">مراجعة الإجابات والشرح التفصيلي بالعربية:</h3>
        <div style="display:flex; flex-direction:column; gap:16px;">
          ${result.itemsReview.map(item => `
            <div class="card" style="border-right: 5px solid ${item.isCorrect ? 'var(--success)' : 'var(--danger)'}; padding:20px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <span class="q-number-badge">سؤال ${item.number} (Teil ${item.teil})</span>
                <span style="font-weight:700; color:${item.isCorrect ? 'var(--success)' : 'var(--danger)'};">
                  ${item.isCorrect ? 'إجابة صحيحة ✓' : 'إجابة خاطئة ✗'}
                </span>
              </div>
              <div class="de-text" dir="ltr" style="font-size:1.05rem; font-weight:600; margin-bottom:12px;">
                ${Utils.escapeHtml(item.question)}
              </div>
              <div style="font-size:0.95rem; margin-bottom:8px;">
                إجابتك: <strong style="color:${item.isCorrect ? 'var(--success)' : 'var(--danger)'};">${item.userChoice !== undefined ? Utils.escapeHtml(item.options[item.userChoice]) : '(لم تجب)'}</strong>
              </div>
              ${!item.isCorrect ? `
                <div style="font-size:0.95rem; margin-bottom:10px;">
                  الإجابة الصحيحة: <strong style="color:var(--success);">${Utils.escapeHtml(item.options[item.correctAnswer])}</strong>
                </div>
              ` : ''}
              <div class="q-explanation-box">
                <strong>الشرح وسبب الإجابة:</strong> ${Utils.escapeHtml(item.explanation)}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Import Feedback Modal -->
      <div id="import-feedback-modal" class="modal-overlay" style="display:none;">
        <div class="modal-card fade-in">
          <div class="modal-header">
            <h3>📥 استيراد ملاحظات المعلم (Tutor Feedback)</h3>
            <button class="modal-close-btn" onclick="document.getElementById('import-feedback-modal').style.display='none'">&times;</button>
          </div>
          <div class="modal-body">
            <p style="color:var(--text-secondary); font-size:0.9rem;">
              الصق كود الـ JSON الذي أعطاك إياه المعلم هنا لإضافته لسجل الاختبار:
            </p>
            <textarea id="feedback-json-input" rows="8" placeholder='{"overallScore": 22, "feedbackArabic": "..."}' style="width:100%; padding:10px; border:1px solid var(--border); border-radius:var(--radius-sm); font-family:monospace; direction:ltr;"></textarea>
          </div>
          <div class="modal-footer" style="display:flex; justify-content:flex-end; gap:10px; margin-top:14px;">
            <button class="btn btn-secondary" onclick="document.getElementById('import-feedback-modal').style.display='none'">إلغاء</button>
            <button class="btn btn-primary" onclick="window.ExamEngine.submitImportedFeedback('${result.id}')">حفظ الملاحظات</button>
          </div>
        </div>
      </div>
    `;
  },

  // Export Results
  generateResultMarkdown(result) {
    result = result || window.Storage.getExamResult(this.examResultId);
    if (!result) return '';

    return `Grade this exam like a Goethe examiner. Give a score per criterion, mark my mistakes, show a corrected version, explain in Arabic, and update mistakes.md and progress.md.

# 📋 تقرير امتحان: ${result.title.de} (${result.title.ar})
- **المستوى:** ${result.level.toUpperCase()} | **الوحدة:** ${result.module.toUpperCase()} | **النموذج:** ${result.setNumber}
- **التاريخ:** ${result.date}
- **النتيجة الإجمالية:** ${result.totalScore} / ${result.maxScore} (${result.percentage}%)
- **الحالة:** ${result.passed ? 'ناجح (Bestanden)' : 'راسب (Nicht bestanden)'}
- **الوقت المستغرق:** ${Math.floor(result.timeUsedSeconds / 60)} دقيقة و ${result.timeUsedSeconds % 60} ثانية

## تفاصيل الأجزاء:
${Object.values(result.teileScores).map(ts => `- **الجزء ${ts.teilNumber} (${ts.title}):** ${ts.correct}/${ts.total} أسئلة صحيحة (${ts.points} نقطة)`).join('\n')}

## الأسئلة الخاطئة للتقييم والمراجعة:
${result.itemsReview.filter(i => !i.isCorrect).map(i => `
- **سؤال ${i.number} (Teil ${i.teil}):** ${i.question}
  - إجابتي: ${i.userChoice !== undefined ? i.options[i.userChoice] : 'لم أجب'}
  - الصحيح: ${i.options[i.correctAnswer]}
  - الشرح: ${i.explanation}
`).join('\n')}
`;
  },

  copyResultMarkdown() {
    const result = window.Storage.getExamResult(this.examResultId);
    const md = this.generateResultMarkdown(result);
    navigator.clipboard.writeText(md).then(() => {
      Utils.showToast('تم نسخ التقرير بنجاح! الصقه في الشات للمعلم 📋', 'success', 2500);
    });
  },

  downloadResultJson() {
    const result = window.Storage.getExamResult(this.examResultId);
    if (!result) return;
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${result.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  openImportFeedbackModal() {
    const modal = document.getElementById('import-feedback-modal');
    if (modal) modal.style.display = 'flex';
  },

  submitImportedFeedback(resultId) {
    const input = document.getElementById('feedback-json-input');
    if (!input || !input.value.trim()) return;

    try {
      const feedback = JSON.parse(input.value.trim());
      window.Storage.saveTutorFeedback(resultId, feedback);
      document.getElementById('import-feedback-modal').style.display = 'none';
      Utils.showToast('تم استيراد ملاحظات وتصحيح المعلم بنجاح! 🎉', 'success', 2500);
      setTimeout(() => {
        const res = window.Storage.getExamResult(resultId);
        this.renderResults(res);
      }, 500);
    } catch (e) {
      alert('صيغة الـ JSON غير صحيحة. يرجى التأكد من الكود المنسوخ.');
    }
  }
};

window.ExamEngine = ExamEngine;
