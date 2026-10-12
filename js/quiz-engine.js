const QuizEngine = {
  lesson: null,
  exercises: [],
  currentIndex: 0,
  score: 0,
  mode: 'exercises', // 'exercises' or 'quiz'
  isAnswered: false,
  wrongAnswers: [],
  
  init(lesson) {
    this.lesson = lesson;
    this.exercises = lesson.exercises || [];
    this.currentIndex = 0;
    this.score = 0;
    this.mode = 'exercises';
    this.isAnswered = false;
    this.wrongAnswers = [];
    
    const exSection = document.getElementById('exercises-section');
    const quizSection = document.getElementById('quiz-section');
    
    if (exSection) exSection.style.display = 'block';
    if (quizSection) quizSection.style.display = 'none';
    
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
  
  getContainer() {
    const containerId = this.mode === 'exercises' ? 'exercises-container' : 'quiz-container';
    return document.getElementById(containerId);
  },
  
  renderExercise() {
    this.isAnswered = false;
    const container = this.getContainer();
    if (!container) return;
    
    const exercise = this.exercises[this.currentIndex];
    
    if (!exercise) return;
    
    let html = `
      <div class="exercise-header">
        <span class="progress-badge">سؤال ${this.currentIndex + 1} من ${this.exercises.length}</span>
      </div>
      <div class="exercise-question">
        <h4 style="margin-bottom: 15px;">${Utils.escapeHtml(exercise.question || 'أجب عن السؤال التالي:')}</h4>
      </div>
      <div id="exercise-body" class="exercise-body" style="margin-bottom: 20px;"></div>
      <div id="exercise-feedback" class="exercise-feedback" style="display:none; padding: 15px; border-radius: 8px; margin-bottom: 20px; font-weight: bold;"></div>
      <div class="exercise-footer" style="text-align: left;">
        <button id="check-btn" class="btn btn-primary" style="display:none;">تحقق</button>
        <button id="next-btn" class="btn btn-primary" style="display:none;">التالي <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg></button>
      </div>
    `;
    
    container.innerHTML = html;
    
    const bodyContainer = document.getElementById('exercise-body');
    const nextBtn = document.getElementById('next-btn');
    
    nextBtn.addEventListener('click', () => this.nextExercise());
    
    switch(exercise.type) {
      case 'multiple-choice': this.renderMultipleChoice(exercise, bodyContainer); break;
      case 'fill-blank': this.renderFillBlank(exercise, bodyContainer); break;
      case 'word-order': this.renderWordOrder(exercise, bodyContainer); break;
      case 'match': this.renderMatch(exercise, bodyContainer); break;
      case 'translate': this.renderTranslate(exercise, bodyContainer); break;
      case 'error-correction': this.renderErrorCorrection(exercise, bodyContainer); break;
      default: bodyContainer.innerHTML = '<p>نوع تمرين غير معروف</p>';
    }
  },
  
  renderMultipleChoice(exercise, container) {
    let html = '<div class="options-grid" style="display:grid; grid-template-columns: 1fr; gap: 10px;">';
    exercise.options.forEach((opt, idx) => {
      html += `<button class="btn btn-outline option-btn" data-idx="${idx}" style="text-align: right; padding: 12px; font-size: 16px;">
        <span class="de-text" dir="ltr">${Utils.escapeHtml(opt)}</span>
      </button>`;
    });
    html += '</div>';
    
    container.innerHTML = html;
    
    const btns = container.querySelectorAll('.option-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (this.isAnswered) return;
        
        // Remove active class from all
        btns.forEach(b => b.classList.remove('active'));
        // Add to selected
        const target = e.currentTarget;
        target.classList.add('active');
        
        const selectedIdx = parseInt(target.getAttribute('data-idx'));
        const correctIdx = (exercise.correct !== undefined) ? exercise.correct : 
          ((exercise.correctIndex !== undefined) ? exercise.correctIndex : exercise.answer);
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
    const parts = sentenceText.split('___');
    html += `${Utils.escapeHtml(parts[0])} <input type="text" id="blank-input" class="form-input" style="width: 120px; display: inline-block; text-align: center; font-weight: bold;" autocomplete="off"> ${Utils.escapeHtml(parts[1] || '')}`;
    html += `</div>`;
    
    container.innerHTML = html;
    const input = document.getElementById('blank-input');
    const checkBtn = document.getElementById('check-btn');
    
    checkBtn.style.display = 'inline-block';
    
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
        this.checkAnswer(isCorrect, null, null, exercise, isCorrect ? '' : `الإجابة الصحيحة هي: ${Array.isArray(targetAns) ? targetAns[0] : targetAns}`, {
            myAnswer: val,
            correctAnswer: Array.isArray(targetAns) ? targetAns[0] : targetAns
        });
        checkBtn.style.display = 'none';
    };
    
    checkBtn.addEventListener('click', evaluate);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') evaluate();
    });
    
    input.focus();
  },
  
  renderWordOrder(exercise, container) {
    let chosenWords = [];
    let availableWords = [...exercise.words];
    
    const render = () => {
        let html = `<div class="chosen-words" style="min-height: 50px; border: 2px dashed var(--border-color); border-radius: 8px; padding: 10px; margin-bottom: 15px; display: flex; flex-wrap: wrap; gap: 8px; direction: ltr; justify-content: flex-start;">`;
        if (chosenWords.length === 0) {
            html += `<span style="color: var(--text-muted); width: 100%; text-align: center; direction: rtl;">رتب الكلمات هنا</span>`;
        } else {
            chosenWords.forEach((word, idx) => {
                html += `<button class="btn btn-sm btn-primary chosen-btn de-text" data-idx="${idx}">${Utils.escapeHtml(word)}</button>`;
            });
        }
        html += `</div>`;
        
        html += `<div class="available-words" style="display: flex; flex-wrap: wrap; gap: 8px; direction: ltr; justify-content: flex-start; margin-bottom: 15px;">`;
        availableWords.forEach((word, idx) => {
            html += `<button class="btn btn-sm btn-outline avail-btn de-text" data-idx="${idx}">${Utils.escapeHtml(word)}</button>`;
        });
        html += `</div>`;
        
        container.innerHTML = html;
        
        if (!this.isAnswered) {
            container.querySelectorAll('.avail-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idx = parseInt(e.currentTarget.getAttribute('data-idx'));
                    chosenWords.push(availableWords[idx]);
                    availableWords.splice(idx, 1);
                    render();
                    document.getElementById('check-btn').style.display = chosenWords.length > 0 ? 'inline-block' : 'none';
                });
            });
            
            container.querySelectorAll('.chosen-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idx = parseInt(e.currentTarget.getAttribute('data-idx'));
                    availableWords.push(chosenWords[idx]);
                    chosenWords.splice(idx, 1);
                    render();
                    document.getElementById('check-btn').style.display = chosenWords.length > 0 ? 'inline-block' : 'none';
                });
            });
        }
    };
    
    render();
    
    const checkBtn = document.getElementById('check-btn');
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
        checkBtn.style.display = 'none';
    });
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
            html += `<button class="btn ${isMatched ? 'btn-success' : isSelected ? 'btn-primary' : 'btn-outline'} match-btn" data-id="${item.id}" data-type="left" ${isMatched ? 'disabled' : ''} style="text-align: center; padding: 10px; opacity: ${isMatched ? '0.6' : '1'}">
                ${Utils.escapeHtml(item.text)}
            </button>`;
        });
        html += `</div>`;
        
        // Right Column (usually German)
        html += `<div style="flex: 1; display: flex; flex-direction: column; gap: 10px; direction: ltr;">`;
        rightItems.forEach(item => {
            const isMatched = item.matched;
            const isSelected = rightSelected === item.id;
            html += `<button class="btn ${isMatched ? 'btn-success' : isSelected ? 'btn-primary' : 'btn-outline'} match-btn de-text" data-id="${item.id}" data-type="right" ${isMatched ? 'disabled' : ''} style="text-align: center; padding: 10px; opacity: ${isMatched ? '0.6' : '1'}">
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
    html += `<textarea id="translate-input" class="form-input de-text" style="width: 100%; height: 80px; direction: ltr; font-size: 16px; padding: 10px; resize: none;" placeholder="اكتب الترجمة الألمانية هنا..."></textarea>`;
    html += `</div>`;
    
    container.innerHTML = html;
    
    const input = document.getElementById('translate-input');
    const checkBtn = document.getElementById('check-btn');
    checkBtn.style.display = 'inline-block';
    
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
        this.checkAnswer(isCorrect, null, null, exercise, isCorrect ? '' : `الإجابة الصحيحة هي: ${Array.isArray(targetAns) ? targetAns[0] : targetAns}`, {
            myAnswer: val,
            correctAnswer: Array.isArray(targetAns) ? targetAns[0] : targetAns
        });
        checkBtn.style.display = 'none';
    };
    
    checkBtn.addEventListener('click', evaluate);
    input.focus();
  },
  
  renderErrorCorrection(exercise, container) {
    let html = `<div style="margin-bottom: 15px;">`;
    const wrongText = exercise.incorrect || exercise.text || exercise.sentence || exercise.question || '';
    html += `<div style="padding: 15px; background: rgba(239, 68, 68, 0.1); border-right: 4px solid var(--danger); margin-bottom: 15px; border-radius: 4px;">
        <p class="de-text" style="direction: ltr; font-size: 18px; text-decoration: line-through; color: var(--danger);">${Utils.escapeHtml(wrongText)}</p>
    </div>`;
    html += `<input type="text" id="correction-input" class="form-input de-text" style="width: 100%; direction: ltr; font-size: 16px; padding: 10px;" placeholder="اكتب الجملة الصحيحة هنا..." autocomplete="off">`;
    html += `</div>`;
    
    container.innerHTML = html;
    
    const input = document.getElementById('correction-input');
    const checkBtn = document.getElementById('check-btn');
    checkBtn.style.display = 'inline-block';
    
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
        this.checkAnswer(isCorrect, null, null, exercise, isCorrect ? '' : `التصحيح هو: ${Array.isArray(targetAns) ? targetAns[0] : targetAns}`, {
            myAnswer: val,
            correctAnswer: Array.isArray(targetAns) ? targetAns[0] : targetAns
        });
        checkBtn.style.display = 'none';
    };
    
    checkBtn.addEventListener('click', evaluate);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') evaluate();
    });
    input.focus();
  },
  
  checkAnswer(isCorrect, targetElement, allElements, exercise, customMsg = '', meta = {}) {
    this.isAnswered = true;
    
    if (isCorrect) {
      this.score++;
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
      if (allElements && exercise.type === 'multiple-choice') {
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
        let userAns = meta.myAnswer;
        let rightAns = meta.correctAnswer;
        if (!userAns && targetElement) {
          userAns = targetElement.textContent.trim();
        }
        if (!rightAns && exercise.type === 'multiple-choice') {
          const correctIdx = (exercise.correct !== undefined) ? exercise.correct : 
            ((exercise.correctIndex !== undefined) ? exercise.correctIndex : exercise.answer);
          rightAns = (exercise.options && exercise.options[correctIdx]) ? exercise.options[correctIdx] : '';
        }
        Storage.addMistake({
          lessonId: this.lesson ? this.lesson.id : 'practice',
          question: exercise.question || exercise.sentence || exercise.from || 'سؤال بدون عنوان',
          myAnswer: userAns || 'إجابة غير صحيحة',
          correctAnswer: rightAns || (exercise.answer || exercise.correct || 'الإجابة الصحيحة'),
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
    
    document.getElementById('next-btn').style.display = 'inline-block';
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
    if (!this.lesson.quiz || this.lesson.quiz.length === 0) {
        container.innerHTML = `<div class="text-center" style="padding: 30px;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2" style="margin-bottom:15px"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <h3>أكملت التمارين بنجاح!</h3>
            <p>لا يوجد اختبار إضافي لهذا الدرس.</p>
        </div>`;
        return;
    }
    
    container.innerHTML = `
      <div class="text-center" style="padding: 30px;">
        <h3 style="margin-bottom: 15px;">أكملت التمارين!</h3>
        <p style="margin-bottom: 20px; color: var(--text-secondary);">الآن اختبر معلوماتك في الاختبار النهائي للدرس.</p>
        <button id="start-quiz-btn" class="btn btn-primary" style="font-size: 18px; padding: 12px 24px;">ابدأ الاختبار <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 5px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></button>
      </div>
    `;
    
    document.getElementById('start-quiz-btn').addEventListener('click', () => {
      this.startQuiz();
    });
  },
  
  startQuiz() {
    this.mode = 'quiz';
    this.exercises = this.lesson.quiz || [];
    this.currentIndex = 0;
    this.score = 0;
    this.wrongAnswers = [];
    
    document.getElementById('exercises-section').style.display = 'none';
    const quizSection = document.getElementById('quiz-section');
    quizSection.style.display = 'block';
    
    // Smooth scroll to quiz section
    quizSection.scrollIntoView({ behavior: 'smooth' });
    
    if (this.exercises.length > 0) {
        this.renderExercise();
    }
  },
  
  finishQuiz() {
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
    
    const container = this.getContainer();
    container.innerHTML = `
      <div class="card text-center" style="padding: 40px; border-top: 5px solid ${color};">
        <h2 style="color: ${color}; margin-bottom: 10px;">${message}</h2>
        <div style="font-size: 48px; font-weight: bold; margin: 20px 0;">${this.score} / ${total}</div>
        <p style="font-size: 18px; margin-bottom: 20px;">لقد كسبت <span style="font-weight:bold; color: var(--accent);">${xp} XP</span> نقطة خبرة!</p>
        
        <div style="margin-top: 30px; display: flex; gap: 15px; justify-content: center;">
            <button onclick="QuizEngine.startQuiz()" class="btn btn-outline">إعادة الاختبار <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg></button>
            <a href="#/lessons" class="btn btn-primary">العودة للدروس</a>
        </div>
      </div>
    `;
    
    if (typeof App !== 'undefined' && App.updateHeaderStats) {
        App.updateHeaderStats();
    }
  }
};
