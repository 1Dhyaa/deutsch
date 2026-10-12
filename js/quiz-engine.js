const QuizEngine = {
  lesson: null,
  exercises: [],
  currentIndex: 0,
  score: 0,
  mode: 'exercises', // 'exercises' or 'quiz'
  isAnswered: false,
  wrongAnswers: [],
  states: { exercises: {}, quiz: {} },
  
  init(lesson) {
    this.lesson = lesson;
    this.wrongAnswers = [];
    
    // Load saved session state if available
    const saved = (typeof Storage !== 'undefined' && Storage.getLessonSession)
      ? Storage.getLessonSession(lesson.id)
      : null;

    if (saved && saved.states) {
      this.mode = (saved.mode === 'quiz' && lesson.quiz && lesson.quiz.length > 0) ? 'quiz' : 'exercises';
      this.states = {
        exercises: saved.states.exercises || {},
        quiz: saved.states.quiz || {}
      };
      this.exercises = (this.mode === 'quiz') ? (lesson.quiz || []) : (lesson.exercises || []);
      this.currentIndex = Math.min(saved.currentIndex || 0, Math.max(0, this.exercises.length - 1));
    } else {
      this.mode = 'exercises';
      this.states = { exercises: {}, quiz: {} };
      this.exercises = lesson.exercises || [];
      this.currentIndex = 0;
    }

    this.recalculateScore();
    this.syncSectionsVisibility();
    
    if (this.exercises.length > 0) {
      this.renderExercise();
    } else {
      const container = document.getElementById('exercises-container');
      if (container) {
        container.innerHTML = '<p>لا توجد تمارين حاليا.</p>';
        this.showQuizStartButton(container);
      }
    }
  },

  syncSectionsVisibility() {
    const exSection = document.getElementById('exercises-section');
    const quizSection = document.getElementById('quiz-section');
    if (this.mode === 'quiz') {
      if (exSection) exSection.style.display = 'none';
      if (quizSection) quizSection.style.display = 'block';
    } else {
      if (exSection) exSection.style.display = 'block';
      if (quizSection) quizSection.style.display = 'none';
    }
  },

  recalculateScore() {
    const modeStates = this.states[this.mode] || {};
    this.score = Object.values(modeStates).filter(s => s && s.status === 'correct').length;
  },

  saveSession() {
    if (!this.lesson || typeof Storage === 'undefined' || !Storage.saveLessonSession) return;
    Storage.saveLessonSession(this.lesson.id, {
      mode: this.mode,
      currentIndex: this.currentIndex,
      states: this.states
    });
  },

  switchMode(newMode) {
    if (newMode === 'quiz' && (!this.lesson.quiz || this.lesson.quiz.length === 0)) return;
    this.mode = newMode;
    this.exercises = (this.mode === 'quiz') ? (this.lesson.quiz || []) : (this.lesson.exercises || []);
    this.currentIndex = 0;
    this.recalculateScore();
    this.syncSectionsVisibility();
    this.saveSession();
    this.renderExercise();
  },

  resetCurrentMode() {
    const isDe = window.I18n && window.I18n.isGerman();
    const msg = isDe
      ? 'Möchtest du alle Antworten in diesem Abschnitt zurücksetzen und von Frage 1 starten?'
      : 'هل تريد مسح إجابات هذا القسم والبدء من السؤال الأول؟';
    if (!confirm(msg)) return;
    this.states[this.mode] = {};
    this.currentIndex = 0;
    this.recalculateScore();
    this.saveSession();
    this.renderExercise();
  },

  goToQuestion(index) {
    if (index < 0 || index >= this.exercises.length) return;
    this.currentIndex = index;
    this.saveSession();
    this.renderExercise();
  },

  skipQuestion() {
    const modeStates = this.states[this.mode] || {};
    const curState = modeStates[this.currentIndex];
    if (!curState || curState.status === 'unanswered') {
      this.states[this.mode][this.currentIndex] = { status: 'skipped' };
    }
    this.saveSession();
    this.nextExercise();
  },

  retryCurrentQuestion() {
    delete this.states[this.mode][this.currentIndex];
    this.recalculateScore();
    this.saveSession();
    this.renderExercise();
  },
  
  getContainer() {
    const containerId = this.mode === 'exercises' ? 'exercises-container' : 'quiz-container';
    return document.getElementById(containerId);
  },

  buildNavigatorHTML() {
    const isDe = window.I18n && window.I18n.isGerman();
    const total = this.exercises.length;
    const modeStates = this.states[this.mode] || {};

    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;

    for (let i = 0; i < total; i++) {
      const st = modeStates[i] ? modeStates[i].status : 'unanswered';
      if (st === 'correct') correctCount++;
      else if (st === 'wrong') wrongCount++;
      else if (st === 'skipped') skippedCount++;
    }
    const remainingCount = total - correctCount - wrongCount;

    const exTotal = (this.lesson.exercises || []).length;
    const qzTotal = (this.lesson.quiz || []).length;

    let pillsHTML = '';
    for (let i = 0; i < total; i++) {
      const st = modeStates[i] ? modeStates[i].status : 'unanswered';
      const isCurrent = (i === this.currentIndex);
      let bg = 'var(--bg-primary)';
      let color = 'var(--text-secondary)';
      let border = '1.5px solid var(--border)';
      let icon = '';

      if (st === 'correct') {
        bg = 'var(--success)';
        color = '#FFFFFF';
        border = '1.5px solid var(--success)';
        icon = ' ✓';
      } else if (st === 'wrong') {
        bg = 'var(--danger)';
        color = '#FFFFFF';
        border = '1.5px solid var(--danger)';
        icon = ' ✗';
      } else if (st === 'skipped') {
        bg = 'rgba(245, 158, 11, 0.12)';
        color = 'var(--warning)';
        border = '1.5px dashed var(--warning)';
        icon = ' ⏭';
      }

      if (isCurrent) {
        border = '2.5px solid var(--accent)';
      }

      pillsHTML += `
        <button type="button" class="q-map-pill" data-qidx="${i}" style="
          min-width: 40px; height: 38px; padding: 0 10px; border-radius: 10px;
          background: ${bg}; color: ${color}; border: ${border};
          font-weight: 700; font-size: 0.9rem; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center;
          box-shadow: ${isCurrent ? '0 0 0 3px var(--accent-light)' : 'none'};
          transition: all 0.15s ease;
        " title="${isDe ? 'Frage' : 'سؤال'} ${i + 1}">
          ${i + 1}${icon}
        </button>
      `;
    }

    return `
      <div class="quiz-navigator-box" style="background: var(--bg-primary); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 14px 16px; margin-bottom: 20px;">
        <!-- Top Mode Switcher & Reset -->
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid var(--border-light);">
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <button type="button" id="switch-to-ex-btn" class="btn btn-sm ${this.mode === 'exercises' ? 'btn-primary' : 'btn-secondary'}" style="border-radius: 20px;">
              📝 ${isDe ? `Übungen (${exTotal})` : `التمارين (${exTotal})`}
            </button>
            ${qzTotal > 0 ? `
              <button type="button" id="switch-to-qz-btn" class="btn btn-sm ${this.mode === 'quiz' ? 'btn-primary' : 'btn-secondary'}" style="border-radius: 20px;">
                🏆 ${isDe ? `Abschlusstest (${qzTotal})` : `الاختبار النهائي (${qzTotal})`}
              </button>
            ` : ''}
          </div>
          <button type="button" id="reset-mode-btn" class="btn btn-sm btn-outline" style="font-size: 0.82rem; padding: 4px 12px;">
            🔄 ${isDe ? 'Neu starten' : 'إعادة البدء'}
          </button>
        </div>

        <!-- Status Summary Badges -->
        <div style="display: flex; flex-wrap: wrap; gap: 12px; font-size: 0.85rem; font-weight: 600; margin-bottom: 12px; color: var(--text-secondary);">
          <span style="color: var(--success);">✅ ${isDe ? 'Richtig' : 'صحيحة'}: ${correctCount}</span>
          <span style="color: var(--danger);">❌ ${isDe ? 'Falsch' : 'خاطئة'}: ${wrongCount}</span>
          <span style="color: var(--warning);">⏭️ ${isDe ? 'Übersprungen' : 'متخطاة'}: ${skippedCount}</span>
          <span>⏳ ${isDe ? 'Offen' : 'متبقية'}: ${remainingCount}</span>
        </div>

        <!-- Numbered Question Pills -->
        <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center;">
          ${pillsHTML}
        </div>
      </div>
    `;
  },
  
  renderExercise() {
    const container = this.getContainer();
    if (!container) return;
    
    const exercise = this.exercises[this.currentIndex];
    if (!exercise) return;

    const isDe = window.I18n && window.I18n.isGerman();
    const savedQState = (this.states[this.mode] && this.states[this.mode][this.currentIndex]) || null;
    this.isAnswered = !!(savedQState && (savedQState.status === 'correct' || savedQState.status === 'wrong'));
    const isLast = (this.currentIndex === this.exercises.length - 1);
    
    let html = `
      ${this.buildNavigatorHTML()}

      <div class="exercise-header" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
        <span class="progress-badge">
          ${isDe ? `Frage ${this.currentIndex + 1} von ${this.exercises.length}` : `سؤال ${this.currentIndex + 1} من ${this.exercises.length}`}
        </span>
        ${this.isAnswered ? `
          <button type="button" id="retry-q-btn" class="btn btn-sm btn-secondary" style="font-size: 0.85rem;">
            🔄 ${isDe ? 'Frage nochmal lösen' : 'حل هذا السؤال مجدداً'}
          </button>
        ` : ''}
      </div>

      <div class="exercise-question">
        <h4 style="margin-bottom: 15px;">${Utils.escapeHtml(exercise.question || (isDe ? 'Beantworte die folgende Frage:' : 'أجب عن السؤال التالي:'))}</h4>
      </div>

      <div id="exercise-body" class="exercise-body" style="margin-bottom: 20px;"></div>
      <div id="exercise-feedback" class="exercise-feedback" style="display:none; padding: 15px; border-radius: 8px; margin-bottom: 20px; font-weight: bold;"></div>

      <div class="exercise-footer" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; padding-top: 14px; border-top: 1px solid var(--border-light);">
        <div style="display: flex; gap: 8px;">
          <button type="button" id="prev-btn" class="btn btn-secondary" ${this.currentIndex === 0 ? 'disabled' : ''}>
            ${isDe ? '⬅ Zurück' : '⬅ السابق'}
          </button>
          ${!this.isAnswered ? `
            <button type="button" id="skip-btn" class="btn btn-outline" style="color: var(--warning); border-color: var(--warning);">
              ⏭️ ${isDe ? 'Überspringen' : 'تخطي'}
            </button>
          ` : ''}
        </div>

        <div style="display: flex; gap: 8px;">
          <button type="button" id="check-btn" class="btn btn-primary" style="display:none;">
            ${isDe ? 'Prüfen' : 'تحقق'}
          </button>
          <button type="button" id="next-btn" class="btn btn-primary">
            ${isLast 
              ? (this.mode === 'exercises' 
                  ? (isDe ? 'Zum Abschlusstest 🏆' : 'الانتقال للاختبار النهائي 🏆') 
                  : (isDe ? 'Ergebnis anzeigen 🏁' : 'إنهاء وعرض النتيجة 🏁'))
              : (isDe ? 'Weiter ➡' : 'التالي ➡')}
          </button>
        </div>
      </div>
    `;
    
    container.innerHTML = html;

    // Bind Navigator Controls
    container.querySelectorAll('.q-map-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.getAttribute('data-qidx'), 10);
        this.goToQuestion(idx);
      });
    });

    const swExBtn = document.getElementById('switch-to-ex-btn');
    if (swExBtn) swExBtn.addEventListener('click', () => this.switchMode('exercises'));

    const swQzBtn = document.getElementById('switch-to-qz-btn');
    if (swQzBtn) swQzBtn.addEventListener('click', () => this.switchMode('quiz'));

    const resetBtn = document.getElementById('reset-mode-btn');
    if (resetBtn) resetBtn.addEventListener('click', () => this.resetCurrentMode());

    const retryBtn = document.getElementById('retry-q-btn');
    if (retryBtn) retryBtn.addEventListener('click', () => this.retryCurrentQuestion());

    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => this.goToQuestion(this.currentIndex - 1));

    const skipBtn = document.getElementById('skip-btn');
    if (skipBtn) skipBtn.addEventListener('click', () => this.skipQuestion());

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextExercise());
    
    const bodyContainer = document.getElementById('exercise-body');
    const exType = exercise.type || 'multiple-choice';
    
    switch(exType) {
      case 'multiple-choice': this.renderMultipleChoice(exercise, bodyContainer); break;
      case 'fill-blank': this.renderFillBlank(exercise, bodyContainer); break;
      case 'word-order': this.renderWordOrder(exercise, bodyContainer); break;
      case 'match': this.renderMatch(exercise, bodyContainer); break;
      case 'translate': this.renderTranslate(exercise, bodyContainer); break;
      case 'error-correction': this.renderErrorCorrection(exercise, bodyContainer); break;
      default: this.renderMultipleChoice(exercise, bodyContainer); break;
    }

    // If this question was already answered previously, restore visual feedback immediately
    if (this.isAnswered && savedQState) {
      const isCorrect = (savedQState.status === 'correct');
      const ansInfo = savedQState.myAnswer 
        ? `${isDe ? 'Deine Antwort' : 'إجابتك المسجلة'}: ${savedQState.myAnswer}${!isCorrect && savedQState.correctAnswer ? ` | ${isDe ? 'Richtig' : 'الصحيح'}: ${savedQState.correctAnswer}` : ''}`
        : (savedQState.customMsg || '');
      this.showFeedback(isCorrect, exercise.explanation || '', ansInfo);
    }
  },
  
  renderMultipleChoice(exercise, container) {
    const savedQState = (this.states[this.mode] && this.states[this.mode][this.currentIndex]) || null;
    const correctIdx = (exercise.correct !== undefined) ? exercise.correct : 
      ((exercise.correctIndex !== undefined) ? exercise.correctIndex : exercise.answer);

    let html = '<div class="options-grid" style="display:grid; grid-template-columns: 1fr; gap: 10px;">';
    (exercise.options || []).forEach((opt, idx) => {
      let extraStyle = '';
      if (this.isAnswered && savedQState) {
        if (idx === correctIdx) {
          extraStyle = 'background-color: var(--success); color: white; border-color: var(--success);';
        } else if (savedQState.myAnswer === opt && savedQState.status === 'wrong') {
          extraStyle = 'background-color: var(--danger); color: white; border-color: var(--danger);';
        }
      }
      html += `<button class="btn btn-outline option-btn" data-idx="${idx}" ${this.isAnswered ? 'disabled' : ''} style="text-align: right; padding: 12px; font-size: 16px; ${extraStyle}">
        <span class="de-text" dir="ltr">${Utils.escapeHtml(opt)}</span>
      </button>`;
    });
    html += '</div>';
    
    container.innerHTML = html;
    
    const btns = container.querySelectorAll('.option-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.isAnswered) return;
        
        btns.forEach(b => b.classList.remove('active'));
        const target = e.currentTarget;
        target.classList.add('active');
        
        const selectedIdx = parseInt(target.getAttribute('data-idx'));
        const isCorrect = (selectedIdx === correctIdx);
        const myAnswer = (exercise.options && exercise.options[selectedIdx]) ? exercise.options[selectedIdx] : '';
        const correctAnswer = (exercise.options && exercise.options[correctIdx]) ? exercise.options[correctIdx] : '';
        
        this.checkAnswer(isCorrect, target, btns, exercise, '', { myAnswer, correctAnswer });
      });
    });
  },
  
  renderFillBlank(exercise, container) {
    let html = '';
    if (exercise.sentence && exercise.question) {
      html += `<p style="font-size: 16px; margin-bottom: 12px; font-weight: 600; color: var(--text-primary);">${Utils.escapeHtml(exercise.question)}</p>`;
    }
    html += `<div style="font-size: 18px; margin-bottom: 15px; direction: ltr; text-align: left;" class="de-text">`;
    const sentenceText = exercise.sentence || exercise.question || '';
    const parts = sentenceText.includes('___') ? sentenceText.split('___') : [sentenceText, ''];
    html += `${Utils.escapeHtml(parts[0])} <input type="text" id="blank-input" class="form-input" style="width: 140px; display: inline-block; text-align: center; font-weight: bold; padding: 8px 12px; font-size: 1rem; border-radius: var(--radius-sm); border: 2px solid var(--border);" autocomplete="off"> ${Utils.escapeHtml(parts[1] || '')}`;
    html += `</div>`;
    
    if (exercise.options && Array.isArray(exercise.options) && exercise.options.length > 0) {
      html += `<div style="margin-top: 14px; margin-bottom: 10px;">
        <span style="font-size: 0.85rem; color: var(--text-muted); display: block; margin-bottom: 8px;">اختر من الخيارات أو اكتب الإجابة:</span>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; direction: ltr; justify-content: flex-start;">
          ${exercise.options.map(opt => `
            <button type="button" class="btn btn-secondary fill-chip de-text" data-val="${Utils.escapeHtml(opt)}" style="padding: 6px 16px; min-height: 38px; border-radius: 20px; font-size: 0.95rem; border: 1.5px solid var(--border); background: var(--bg-card); cursor: pointer;">
              ${Utils.escapeHtml(opt)}
            </button>
          `).join('')}
        </div>
      </div>`;
    }

    html += `<div style="display: flex; gap: 10px; margin-top: 16px;">
      <button type="button" id="fill-check-btn" class="btn btn-primary" style="flex: 1; min-height: 44px;">تحقق من الإجابة ✓</button>
    </div>`;
    
    container.innerHTML = html;
    const input = document.getElementById('blank-input');
    const fillCheckBtn = document.getElementById('fill-check-btn');
    const footerCheckBtn = document.getElementById('check-btn');
    if (footerCheckBtn) footerCheckBtn.style.display = 'none';

    container.querySelectorAll('.fill-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        if (this.isAnswered) return;
        const val = e.currentTarget.getAttribute('data-val');
        input.value = val;
        container.querySelectorAll('.fill-chip').forEach(c => {
          c.style.borderColor = 'var(--border)';
          c.style.backgroundColor = 'var(--bg-card)';
        });
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.backgroundColor = 'var(--accent-light)';
      });
    });
    
    const evaluate = () => {
        if (this.isAnswered) return;
        const val = input.value.trim();
        if (!val) return;
        
        let isCorrect = false;
        const acceptList = exercise.accept || [];
        const targetAns = exercise.answer !== undefined ? exercise.answer : 
          (exercise.correctOption !== undefined ? exercise.correctOption : exercise.correct);
        if (Array.isArray(targetAns)) {
            isCorrect = targetAns.some(ans => Utils.compareAnswers(val, ans, acceptList));
        } else {
            isCorrect = Utils.compareAnswers(val, targetAns, acceptList);
        }
        
        input.disabled = true;
        fillCheckBtn.disabled = true;
        container.querySelectorAll('.fill-chip').forEach(c => c.disabled = true);
        this.checkAnswer(isCorrect, null, null, exercise, isCorrect ? '' : `الإجابة الصحيحة هي: ${Array.isArray(targetAns) ? targetAns[0] : targetAns}`, {
            myAnswer: val,
            correctAnswer: Array.isArray(targetAns) ? targetAns[0] : targetAns
        });
    };
    
    fillCheckBtn.addEventListener('click', evaluate);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') evaluate();
    });
    
    input.focus();
  },
  
  renderWordOrder(exercise, container) {
    let chosenWords = [];
    let availableWords = [...exercise.words];
    
    const render = () => {
        let html = `<div class="word-order-container" style="display: flex; flex-direction: column; gap: 14px;">`;
        
        // Chosen words dropzone
        html += `<div class="chosen-words drop-area" style="min-height: 60px; border: 2px dashed var(--border); border-radius: var(--radius-md); padding: 12px; display: flex; flex-wrap: wrap; gap: 8px; direction: ltr; justify-content: flex-start; align-items: center; background: var(--bg-primary);">`;
        if (chosenWords.length === 0) {
            html += `<span style="color: var(--text-muted); width: 100%; text-align: center; direction: rtl; font-size: 0.95rem;">اضغط على الكلمات بالترتيب لتكوين الجملة</span>`;
        } else {
            chosenWords.forEach((word, idx) => {
                html += `<button type="button" class="btn btn-primary chosen-btn de-text" data-idx="${idx}" style="padding: 8px 16px; min-height: 40px; border-radius: 20px; font-size: 1rem; display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
                  <span>${Utils.escapeHtml(word)}</span>
                  <span style="font-size: 11px; opacity: 0.75; margin-left: 2px;">✕</span>
                </button>`;
            });
        }
        html += `</div>`;
        
        // Available words bank
        html += `<div class="available-words word-bank" style="display: flex; flex-wrap: wrap; gap: 8px; direction: ltr; justify-content: flex-start; min-height: 48px; padding: 4px 0;">`;
        availableWords.forEach((word, idx) => {
            html += `<button type="button" class="btn btn-secondary avail-btn de-text" data-idx="${idx}" style="padding: 8px 16px; min-height: 40px; border-radius: 20px; font-size: 1rem; border: 1.5px solid var(--border); background: var(--bg-card); cursor: pointer;">
              ${Utils.escapeHtml(word)}
            </button>`;
        });
        html += `</div>`;

        // Action controls
        html += `<div style="display: flex; gap: 10px; margin-top: 6px;">
          <button type="button" id="order-check-btn" class="btn btn-primary" style="flex: 1; min-height: 44px;" ${chosenWords.length === 0 || this.isAnswered ? 'disabled' : ''}>
            تحقق من الترتيب ✓
          </button>
          <button type="button" id="order-reset-btn" class="btn btn-secondary" style="min-height: 44px; padding: 0 16px;" ${chosenWords.length === 0 || this.isAnswered ? 'disabled' : ''} title="إعادة الكلمات">
            🔄 إعادة
          </button>
        </div>`;

        html += `</div>`;
        
        container.innerHTML = html;
        
        const footerCheckBtn = document.getElementById('check-btn');
        if (footerCheckBtn) footerCheckBtn.style.display = 'none';

        if (!this.isAnswered) {
            container.querySelectorAll('.avail-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idx = parseInt(e.currentTarget.getAttribute('data-idx'));
                    chosenWords.push(availableWords[idx]);
                    availableWords.splice(idx, 1);
                    render();
                });
            });
            
            container.querySelectorAll('.chosen-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idx = parseInt(e.currentTarget.getAttribute('data-idx'));
                    availableWords.push(chosenWords[idx]);
                    chosenWords.splice(idx, 1);
                    render();
                });
            });

            const resetBtn = document.getElementById('order-reset-btn');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    availableWords = [...exercise.words];
                    chosenWords = [];
                    render();
                });
            }

            const checkBtn = document.getElementById('order-check-btn');
            if (checkBtn) {
                checkBtn.addEventListener('click', () => {
                    if (this.isAnswered || chosenWords.length === 0) return;
                    const userSentence = chosenWords.join(' ');
                    let targetAns = exercise.correct !== undefined ? exercise.correct : 
                      (exercise.answer !== undefined ? exercise.answer : exercise.correctOrder);
                    if (Array.isArray(targetAns)) targetAns = targetAns.join(' ');
                    const isCorrect = Utils.compareAnswers(userSentence, targetAns, exercise.accept);
                    
                    this.checkAnswer(isCorrect, null, null, exercise, isCorrect ? '' : `الترتيب الصحيح: ${targetAns}`, {
                        myAnswer: userSentence,
                        correctAnswer: targetAns
                    });
                    
                    checkBtn.disabled = true;
                    if (resetBtn) resetBtn.disabled = true;
                });
            }
        }
    };
    
    render();
  },
  
  renderMatch(exercise, container) {
    let leftSelected = null;
    let rightSelected = null;
    let matchedPairs = 0;
    const totalPairs = exercise.pairs.length;
    
    // Create random layout
    const leftItems = exercise.pairs.map((p, i) => ({ id: i, text: p.left, type: 'left' })).sort(() => Math.random() - 0.5);
    const rightItems = exercise.pairs.map((p, i) => ({ id: i, text: p.right, type: 'right' })).sort(() => Math.random() - 0.5);
    
    const render = () => {
        let html = `<div style="display: flex; gap: 20px;">`;
        
        // Left Column (usually Arabic)
        html += `<div style="flex: 1; display: flex; flex-direction: column; gap: 10px;">`;
        leftItems.forEach(item => {
            const isMatched = item.matched;
            const isSelected = leftSelected === item.id;
            html += `<button class="btn ${isMatched ? 'btn-success' : isSelected ? 'btn-primary' : 'btn-secondary'} match-btn" data-id="${item.id}" data-type="left" ${isMatched ? 'disabled' : ''} style="text-align: center; padding: 10px; opacity: ${isMatched ? '0.6' : '1'}">
                ${Utils.escapeHtml(item.text)}
            </button>`;
        });
        html += `</div>`;
        
        // Right Column (usually German)
        html += `<div style="flex: 1; display: flex; flex-direction: column; gap: 10px; direction: ltr;">`;
        rightItems.forEach(item => {
            const isMatched = item.matched;
            const isSelected = rightSelected === item.id;
            html += `<button class="btn ${isMatched ? 'btn-success' : isSelected ? 'btn-primary' : 'btn-secondary'} match-btn de-text" data-id="${item.id}" data-type="right" ${isMatched ? 'disabled' : ''} style="text-align: center; padding: 10px; opacity: ${isMatched ? '0.6' : '1'}">
                ${Utils.escapeHtml(item.text)}
            </button>`;
        });
        html += `</div>`;
        html += `</div>`;

        
        container.innerHTML = html;
        
        if (!this.isAnswered) {
            container.querySelectorAll('.match-btn:not([disabled])').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.currentTarget.getAttribute('data-id'));
                    const type = e.currentTarget.getAttribute('data-type');
                    
                    if (type === 'left') {
                        leftSelected = leftSelected === id ? null : id;
                    } else {
                        rightSelected = rightSelected === id ? null : id;
                    }
                    
                    render();
                    
                    if (leftSelected !== null && rightSelected !== null) {
                        // Check match
                        setTimeout(() => {
                            if (leftSelected === rightSelected) {
                                // Match!
                                leftItems.find(i => i.id === leftSelected).matched = true;
                                rightItems.find(i => i.id === rightSelected).matched = true;
                                matchedPairs++;
                                leftSelected = null;
                                rightSelected = null;
                                render();
                                
                                if (matchedPairs === totalPairs) {
                                    this.checkAnswer(true, null, null, exercise, 'أحسنت! لقد طابقت كل الكلمات بشكل صحيح.');
                                }
                            } else {
                                // Wrong match
                                const leftBtn = container.querySelector(`[data-id="${leftSelected}"][data-type="left"]`);
                                const rightBtn = container.querySelector(`[data-id="${rightSelected}"][data-type="right"]`);
                                leftBtn.classList.remove('btn-primary'); leftBtn.classList.add('btn-danger');
                                rightBtn.classList.remove('btn-primary'); rightBtn.classList.add('btn-danger');
                                
                                setTimeout(() => {
                                    leftSelected = null;
                                    rightSelected = null;
                                    render();
                                }, 800);
                            }
                        }, 100);
                    }
                });
            });
        }
    };
    
    render();
  },
  
  renderTranslate(exercise, container) {
    let html = `<div style="margin-bottom: 15px;">`;
    const promptText = exercise.text || exercise.from || exercise.question || '';
    html += `<p style="font-size: 18px; margin-bottom: 10px; font-weight: bold;">${Utils.escapeHtml(promptText)}</p>`;
    html += `<textarea id="translate-input" class="form-input de-text" style="width: 100%; height: 80px; direction: ltr; font-size: 16px; padding: 12px; border-radius: var(--radius-sm); border: 2px solid var(--border); resize: none;" placeholder="اكتب الترجمة الألمانية هنا..."></textarea>`;
    html += `</div>`;
    html += `<div style="display: flex; gap: 10px; margin-top: 14px;">
      <button type="button" id="trans-check-btn" class="btn btn-primary" style="flex: 1; min-height: 44px;">تحقق من الترجمة ✓</button>
    </div>`;
    
    container.innerHTML = html;
    
    const input = document.getElementById('translate-input');
    const transCheckBtn = document.getElementById('trans-check-btn');
    const footerCheckBtn = document.getElementById('check-btn');
    if (footerCheckBtn) footerCheckBtn.style.display = 'none';
    
    const evaluate = () => {
        if (this.isAnswered) return;
        const val = input.value.trim();
        if (!val) return;
        
        let isCorrect = false;
        const acceptList = exercise.accept || [];
        const targetAns = exercise.target !== undefined ? exercise.target : 
          (exercise.answer !== undefined ? exercise.answer : exercise.correct);
        if (Array.isArray(targetAns)) {
            isCorrect = targetAns.some(ans => Utils.compareAnswers(val, ans, acceptList));
        } else {
            isCorrect = Utils.compareAnswers(val, targetAns, acceptList);
        }
        
        input.disabled = true;
        transCheckBtn.disabled = true;
        this.checkAnswer(isCorrect, null, null, exercise, isCorrect ? '' : `الإجابة الصحيحة هي: ${Array.isArray(targetAns) ? targetAns[0] : targetAns}`, {
            myAnswer: val,
            correctAnswer: Array.isArray(targetAns) ? targetAns[0] : targetAns
        });
    };
    
    transCheckBtn.addEventListener('click', evaluate);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            evaluate();
        }
    });
    input.focus();
  },
  
  renderErrorCorrection(exercise, container) {
    let html = `<div style="margin-bottom: 15px;">`;
    const wrongText = exercise.incorrect || exercise.text || exercise.sentence || exercise.question || '';
    html += `<div style="padding: 15px; background: rgba(239, 68, 68, 0.1); border-right: 4px solid var(--danger); margin-bottom: 15px; border-radius: 4px;">
        <p class="de-text" style="direction: ltr; font-size: 18px; text-decoration: line-through; color: var(--danger);">${Utils.escapeHtml(wrongText)}</p>
    </div>`;
    html += `<input type="text" id="correction-input" class="form-input de-text" style="width: 100%; direction: ltr; font-size: 16px; padding: 12px; border-radius: var(--radius-sm); border: 2px solid var(--border);" placeholder="اكتب الجملة الصحيحة هنا..." autocomplete="off">`;
    html += `</div>`;
    html += `<div style="display: flex; gap: 10px; margin-top: 14px;">
      <button type="button" id="corr-check-btn" class="btn btn-primary" style="flex: 1; min-height: 44px;">تحقق من التصحيح ✓</button>
    </div>`;
    
    container.innerHTML = html;
    
    const input = document.getElementById('correction-input');
    const corrCheckBtn = document.getElementById('corr-check-btn');
    const footerCheckBtn = document.getElementById('check-btn');
    if (footerCheckBtn) footerCheckBtn.style.display = 'none';
    
    const evaluate = () => {
        if (this.isAnswered) return;
        const val = input.value.trim();
        if (!val) return;
        
        let isCorrect = false;
        const acceptList = exercise.accept || [];
        const targetAns = exercise.corrected !== undefined ? exercise.corrected : 
          (exercise.correct !== undefined ? exercise.correct : exercise.answer);
        if (Array.isArray(targetAns)) {
            isCorrect = targetAns.some(ans => Utils.compareAnswers(val, ans, acceptList));
        } else {
            isCorrect = Utils.compareAnswers(val, targetAns, acceptList);
        }
        
        input.disabled = true;
        corrCheckBtn.disabled = true;
        this.checkAnswer(isCorrect, null, null, exercise, isCorrect ? '' : `التصحيح هو: ${Array.isArray(targetAns) ? targetAns[0] : targetAns}`, {
            myAnswer: val,
            correctAnswer: Array.isArray(targetAns) ? targetAns[0] : targetAns
        });
    };
    
    corrCheckBtn.addEventListener('click', evaluate);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') evaluate();
    });
    input.focus();
  },
  
  checkAnswer(isCorrect, targetElement, allElements, exercise, customMsg = '', meta = {}) {
    this.isAnswered = true;
    const exType = exercise.type || 'multiple-choice';

    let userAns = meta.myAnswer || '';
    let rightAns = meta.correctAnswer || '';
    if (!userAns && targetElement) {
      userAns = targetElement.textContent.trim();
    }
    if (!rightAns && exType === 'multiple-choice') {
      const correctIdx = (exercise.correct !== undefined) ? exercise.correct : 
        ((exercise.correctIndex !== undefined) ? exercise.correctIndex : exercise.answer);
      rightAns = (exercise.options && exercise.options[correctIdx]) ? exercise.options[correctIdx] : '';
    }
    if (!rightAns) {
      rightAns = (typeof exercise.answer === 'string' ? exercise.answer : '') ||
                 (typeof exercise.correct === 'string' ? exercise.correct : '');
    }

    if (!this.states[this.mode]) this.states[this.mode] = {};
    this.states[this.mode][this.currentIndex] = {
      status: isCorrect ? 'correct' : 'wrong',
      myAnswer: userAns,
      correctAnswer: rightAns,
      customMsg: customMsg || ''
    };
    this.recalculateScore();
    this.saveSession();

    if (isCorrect) {
      if (targetElement) {
        targetElement.style.backgroundColor = 'var(--success)';
        targetElement.style.color = 'white';
        targetElement.style.borderColor = 'var(--success)';
      }
      this.showFeedback(true, exercise.explanation || 'أحسنت! إجابة صحيحة.', customMsg);
    } else {
      if (this.mode === 'quiz') {
          this.wrongAnswers.push(exercise);
      }
      if (targetElement) {
        targetElement.style.backgroundColor = 'var(--danger)';
        targetElement.style.color = 'white';
        targetElement.style.borderColor = 'var(--danger)';
      }
      
      // Highlight correct answer for multiple choice
      if (allElements && exType === 'multiple-choice') {
        const correctIdx = (exercise.correct !== undefined) ? exercise.correct : 
          ((exercise.correctIndex !== undefined) ? exercise.correctIndex : exercise.answer);
        allElements.forEach((btn, idx) => {
          if (idx === correctIdx) {
            btn.style.backgroundColor = 'var(--success)';
            btn.style.color = 'white';
            btn.style.borderColor = 'var(--success)';
          }
        });
      }

      // Record to Mistakes Log!
      if (typeof Storage !== 'undefined' && Storage.addMistake) {
        Storage.addMistake({
          lessonId: this.lesson ? this.lesson.id : 'practice',
          question: exercise.question || exercise.sentence || exercise.from || 'سؤال بدون عنوان',
          myAnswer: userAns || 'إجابة غير صحيحة',
          correctAnswer: rightAns || 'الإجابة الصحيحة',
          explanation: exercise.explanation || customMsg || ''
        });
      }
      
      this.showFeedback(false, exercise.explanation || 'إجابة خاطئة.', customMsg);
    }
    
    if (exercise.audio && typeof Speech !== 'undefined') {
        const audioText = exercise.audioText || exercise.answer;
        if (typeof audioText === 'string') {
            Speech.speak(audioText);
        }
    }
    
    // Update the navigator box live so current question pill updates immediately
    const navBox = document.querySelector('.quiz-navigator-box');
    if (navBox) {
      const temp = document.createElement('div');
      temp.innerHTML = this.buildNavigatorHTML();
      if (temp.firstElementChild) {
        navBox.replaceWith(temp.firstElementChild);
      }
    }
    const skipBtn = document.getElementById('skip-btn');
    if (skipBtn) skipBtn.style.display = 'none';
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) nextBtn.style.display = 'inline-block';
  },
  
  showFeedback(isCorrect, explanation, customMsg) {
    const feedback = document.getElementById('exercise-feedback');
    feedback.style.display = 'block';
    
    let html = `<div style="display: flex; align-items: center; gap: 10px; margin-bottom: ${explanation || customMsg ? '10px' : '0'}">`;
    if (isCorrect) {
      feedback.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
      feedback.style.color = 'var(--success)';
      feedback.style.border = '1px solid var(--success)';
      html += `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>صحيح!</span>`;
    } else {
      feedback.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
      feedback.style.color = 'var(--danger)';
      feedback.style.border = '1px solid var(--danger)';
      html += `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span>خاطئ.</span>`;
    }
    html += `</div>`;
    
    if (customMsg) {
        html += `<div style="font-weight: normal; margin-top: 5px; color: var(--text-color);">${Utils.escapeHtml(customMsg)}</div>`;
    }
    
    if (explanation) {
        html += `<div style="font-weight: normal; margin-top: 5px; color: var(--text-color);">${Utils.escapeHtml(explanation)}</div>`;
    }
    
    feedback.innerHTML = html;
  },
  
  nextExercise() {
    this.currentIndex++;
    
    if (this.currentIndex < this.exercises.length) {
      this.saveSession();
      this.renderExercise();
    } else {
      if (this.mode === 'exercises') {
        this.showQuizStartButton(this.getContainer());
      } else {
        this.finishQuiz();
      }
    }
  },
  
  showQuizStartButton(container) {
    this.currentIndex = Math.max(0, this.exercises.length - 1);
    this.saveSession();
    const navHTML = this.buildNavigatorHTML();
    if (!this.lesson.quiz || this.lesson.quiz.length === 0) {
        container.innerHTML = `
          ${navHTML}
          <div class="text-center" style="padding: 30px;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2" style="margin-bottom:15px"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <h3>أكملت التمارين بنجاح!</h3>
            <p>النتيجة في التمارين: <strong>${this.score} / ${this.exercises.length}</strong></p>
            <div style="margin-top:16px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
              <button onclick="QuizEngine.goToQuestion(0)" class="btn btn-secondary">مراجعة الأسئلة</button>
              <button onclick="QuizEngine.resetCurrentMode()" class="btn btn-outline">إعادة التمارين 🔄</button>
            </div>
          </div>`;
        return;
    }
    
    container.innerHTML = `
      ${navHTML}
      <div class="text-center" style="padding: 30px;">
        <h3 style="margin-bottom: 10px;">أكملت جولة التمارين! (${this.score} / ${this.exercises.length})</h3>
        <p style="margin-bottom: 20px; color: var(--text-secondary);">يمكنك الضغط على أي رقم سؤال في الأعلى لمراجعته، أو الانتقال للاختبار النهائي للدرس.</p>
        <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
          <button id="start-quiz-btn" class="btn btn-primary" style="font-size: 18px; padding: 12px 24px;">ابدأ الاختبار النهائي 🎯</button>
          <button onclick="QuizEngine.goToQuestion(0)" class="btn btn-secondary">مراجعة التمارين</button>
        </div>
      </div>
    `;
    
    document.getElementById('start-quiz-btn').addEventListener('click', () => {
      this.startQuiz(false);
    });
  },
  
  startQuiz(forceReset = false) {
    this.mode = 'quiz';
    this.exercises = this.lesson.quiz || [];
    if (forceReset) {
      this.states.quiz = {};
      this.currentIndex = 0;
    } else {
      const stateMap = this.states.quiz || {};
      let firstUnanswered = 0;
      for (let i = 0; i < this.exercises.length; i++) {
        if (!stateMap[i] || (stateMap[i].status !== 'correct' && stateMap[i].status !== 'wrong')) {
          firstUnanswered = i;
          break;
        }
      }
      this.currentIndex = firstUnanswered;
    }
    this.recalculateScore();
    this.wrongAnswers = [];
    this.syncSectionsVisibility();
    this.saveSession();
    
    const quizSection = document.getElementById('quiz-section');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (this.exercises.length > 0) {
        this.renderExercise();
    }
  },
  
  finishQuiz() {
    this.recalculateScore();
    const total = this.exercises.length;
    let xp = 0;
    
    if (typeof Utils !== 'undefined' && Utils.calculateXP) {
        xp = Utils.calculateXP(this.score, total);
    } else {
        xp = Math.round((this.score / total) * 50);
    }
    
    if (typeof Storage !== 'undefined') {
        Storage.saveLessonProgress(this.lesson.id, this.score, total);
        Storage.addXP(xp);
        Storage.updateStreak();
    }
    
    const percentage = Math.round((this.score / total) * 100);
    let message = 'جيد!';
    let color = 'var(--warning)';
    if (percentage >= 90) {
        message = 'ممتاز!';
        color = 'var(--success)';
    } else if (percentage < 50) {
        message = 'حاول مرة أخرى!';
        color = 'var(--danger)';
    }
    
    const navHTML = this.buildNavigatorHTML();
    const container = this.getContainer();
    container.innerHTML = `
      ${navHTML}
      <div class="card text-center" style="padding: 40px; border-top: 5px solid ${color};">
        <h2 style="color: ${color}; margin-bottom: 10px;">${message}</h2>
        <div style="font-size: 48px; font-weight: bold; margin: 20px 0;">${this.score} / ${total}</div>
        <p style="font-size: 18px; margin-bottom: 20px;">لقد كسبت <span style="font-weight:bold; color: var(--accent);">${xp} XP</span> نقطة خبرة!</p>
        
        <div style="margin-top: 30px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
            <button onclick="QuizEngine.goToQuestion(0)" class="btn btn-secondary">مراجعة إجاباتي</button>
            <button onclick="QuizEngine.startQuiz(true)" class="btn btn-outline">إعادة الاختبار من جديد 🔄</button>
            <a href="#/lessons" class="btn btn-primary">العودة للدروس</a>
        </div>
      </div>
    `;
    
    if (typeof App !== 'undefined' && App.updateHeaderStats) {
        App.updateHeaderStats();
    }
  }
};

window.QuizEngine = QuizEngine;

