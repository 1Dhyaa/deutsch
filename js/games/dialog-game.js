// js/games/dialog-game.js — استوديو السؤال والجواب والمحادثة (Fragen & Antworten Studio)

const DialogGame = {
  questions: [
    // --- القسم الأول: كيف تسأل؟ (How to Ask — W-Fragen & Ja/Nein-Fragen) ---
    {
      category: "كيف تسأل؟",
      prompt: "لديك هذه الإجابة: »Ich wohne seit drei Jahren in Berlin.« — ما هو السؤال الصحيح المناسب تماماً؟",
      situationAr: "السؤال عن المدة الزمنية المستمرة",
      options: [
        "Wie lange wohnst du schon in Berlin?",
        "Wann wohnst du in Berlin?",
        "Woher wohnst du in Berlin?",
        "Warum du wohnst in Berlin?"
      ],
      correctIndex: 0,
      answerText: "Wie lange wohnst du schon in Berlin?",
      explanation: "للسؤال عن الفترة المستمرة منذ وقت معين (seit...) نستخدم أداة الاستفهام Wie lange (كم المدة).",
      rule: "المدة الزمنية المستمرة ➔ Wie lange? | التوقيت المحدد ➔ Wann?"
    },
    {
      category: "كيف تسأل؟",
      prompt: "الإجابة: »Ich treffe mich heute mit meinem Chef (der Chef).« — ما هو السؤال النحوي السليم؟",
      situationAr: "السؤال عن شخص مسبوق بحرف الجر mit (Dativ)",
      options: [
        "Mit wem triffst du dich heute?",
        "Mit wen triffst du dich heute?",
        "Mit wer triffst du dich heute?",
        "Wen triffst du dich heute?"
      ],
      correctIndex: 0,
      answerText: "Mit wem triffst du dich heute?",
      explanation: "عند السؤال عن شخص بعد حرف الجر mit (الذي يفرض Dativ)، نستخدم صيغة الداتيف: Mit wem?",
      rule: "شخص في الرفع ➔ Wer | شخص في النصب ➔ Wen | شخص في الجر ➔ Wem (Mit wem, Bei wem, Zu wem)."
    },
    {
      category: "كيف تسأل؟",
      prompt: "الإجابة: »Ich suche meinen Schlüssel (der Schlüssel).« — ما هو السؤال الصحيح؟",
      situationAr: "السؤال عن شيء غير عاقل مفعول به",
      options: [
        "Was suchst du?",
        "Wen suchst du?",
        "Wem suchst du?",
        "Wo suchst du?"
      ],
      correctIndex: 0,
      answerText: "Was suchst du?",
      explanation: "للسؤال عن الجماد أو غير العاقل نستخدم دائماً Was بغض النظر عن حالة الإعراب.",
      rule: "غير العاقل ➔ دائماً Was (Nominativ أو Akkusativ)."
    },
    {
      category: "كيف تسأل؟",
      prompt: "الإجابة: »Ich fahre morgen nach München.« — ما هو السؤال المناسب؟",
      situationAr: "السؤال عن وجهة الحركة والاتجاه",
      options: [
        "Wohin fährst du morgen?",
        "Wo fährst du morgen?",
        "Woher fährst du morgen?",
        "Wann fährst du morgen nach München?"
      ],
      correctIndex: 0,
      answerText: "Wohin fährst du morgen?",
      explanation: "للسؤال عن الاتجاه أو الحركة إلى مكان (nach München) نستخدم أداة الاستفهام Wohin (إلى أين).",
      rule: "الموقع الثابت (Wo) | الوجهة والحركة (Wohin) | المصدر والأصل (Woher)."
    },
    {
      category: "كيف تسأل؟",
      prompt: "الإجابة: »Das blaue Kleid (das Kleid) gefällt mir am besten.« — ما هو السؤال السليم باستخدام أداة التحديد؟",
      situationAr: "السؤال للتخيير والتحديد (welch-)",
      options: [
        "Welches Kleid gefällt dir am besten?",
        "Welcher Kleid gefällt dir am besten?",
        "Welche Kleid gefällt dir am besten?",
        "Welchen Kleid gefällt dir am besten?"
      ],
      correctIndex: 0,
      answerText: "Welches Kleid gefällt dir am besten?",
      explanation: "الاسم محايد (das Kleid)، لذا تأخذ أداة الاستفهام welch- نهاية أداة التعريف للمحايد: Welches Kleid?",
      rule: "أداة الاستفهام welch- تُصرّف مثل أداة المعرفة تماماً: welcher, welche, welches."
    },
    {
      category: "كيف تسأل؟",
      prompt: "الإجابة: »Ja, ich habe gestern Abend meine Hausaufgaben gemacht.« — ما هو سؤال (نعم/لا) الصحيح؟",
      situationAr: "صياغة سؤال نعم أو لا (Ja/Nein-Frage)",
      options: [
        "Hast du gestern Abend deine Hausaufgaben gemacht?",
        "Du hast gestern Abend deine Hausaufgaben gemacht?",
        "Hast gemacht du gestern Abend deine Hausaufgaben?",
        "Gestern hast du deine Hausaufgaben gemacht?"
      ],
      correctIndex: 0,
      answerText: "Hast du gestern Abend deine Hausaufgaben gemacht?",
      explanation: "في أسئلة نعم/لا (Entscheidungsfragen)، يأتي الفعل المصرف دائماً في الموقع الأول (Hast du...)."
      ,rule: "أسئلة نعم/لا تبدأ حتماً بالفعل المصرف في المركز 1."
    },

    // --- القسم الثاني: كيف تجيب؟ (How to Answer — Everyday Real German Dialogues) ---
    {
      category: "كيف تجيب؟",
      prompt: "سألك شخص في الشارع بأدب: »Entschuldigung, wissen Sie, wo der nächste Bahnhof ist?« — ما هو الرد الألماني الطبيعي؟",
      situationAr: "الرد على طلب مساعدة في الطريق",
      options: [
        "Ja, gehen Sie geradeaus und dann nach links.",
        "Nein, ich heiße Ahmad.",
        "Bitte schön, ich habe keine Zeit.",
        "Der Bahnhof fährt um acht Uhr ab."
      ],
      correctIndex: 0,
      answerText: "Ja, gehen Sie geradeaus und dann nach links.",
      explanation: "إعطاء الاتجاهات بأدب ووضوح: الذهاب للأمام ثم الانعطاف يساراً.",
      rule: "وصف الطريق: geradeaus gehen (على طول) | nach links / nach rechts (يمين/يسار)."
    },
    {
      category: "كيف تجيب؟",
      prompt: "صديقك يقترح عليك فكرة للخروج: »Hast du heute Abend Lust auf ein leckeres Essen beim Italiener?« — كيف تجيب بالموافقة بحماس؟",
      situationAr: "الموافقة الحماسية على دعوة",
      options: [
        "Sehr gerne, das ist eine super Idee!",
        "Nein, ich habe das Essen nicht gesehen.",
        "Vielleicht hast du keine Lust.",
        "Es tut mir leid, das schmeckt mir gut."
      ],
      correctIndex: 0,
      answerText: "Sehr gerne, das ist eine super Idee!",
      explanation: "التعبير الأكثر طبيعية وحيوية للموافقة هو: Sehr gerne, das ist eine super Idee! (بكل سرور، هذه فكرة رائعة!).",
      rule: "ردود الموافقة والتشجيع: Sehr gerne! | Klingt super! | Auf jeden Fall!"
    },
    {
      category: "كيف تجيب؟",
      prompt: "موظف الاستقبال في العيادة يسألك: »Haben Sie einen Termin bei Dr. Weber?« — إذا لم يكن لديك موعد، كيف تجيب بلباقة؟",
      situationAr: "الاعتذار والطلب بلباقة في العيادة",
      options: [
        "Nein, leider nicht. Kann ich trotzdem kurz warten?",
        "Ja, ich habe gestern keinen Termin.",
        "Nein, Dr. Weber ist mein Arzt.",
        "Warum haben Sie einen Termin?"
      ],
      correctIndex: 0,
      answerText: "Nein, leider nicht. Kann ich trotzdem kurz warten?",
      explanation: "الرد الواقعي: للأسف لا أملك موعداً، هل يمكنني رغم ذلك الانتظار قليلاً؟",
      rule: "التعبير المهذب عند عدم توفر المطلوب: Nein, leider nicht."
    },
    {
      category: "كيف تجيب؟",
      prompt: "زميلك في العمل يشكرك قائلاً: »Vielen Dank für deine tolle Unterstützung!« — ما هو الرد الودي التلقائي الأكثر شيوعاً؟",
      situationAr: "الرد على الشكر والامتنان",
      options: [
        "Gern geschehen! Immer wieder gerne.",
        "Ich danke dir für die Arbeit nicht.",
        "Bitte schön, du hast keine Hilfe.",
        "Entschuldigung, das war mein Fehler."
      ],
      correctIndex: 0,
      answerText: "Gern geschehen! Immer wieder gerne.",
      explanation: "الرد الألماني اليومي النموذجي على الشكر: Gern geschehen! (على الرحب والسعة / لا شكر على واجب).",
      rule: "الرد على Danke: Gern geschehen! | Nichts zu danken! | Keine Ursache!"
    },
    {
      category: "كيف تجيب؟",
      prompt: "شخص يعتذر منك عن خطأ غير مقصود: »Entschuldigen Sie bitte vielmals!« — كيف تطمئنه بأنه لا توجد مشكلة؟",
      situationAr: "قبول الاعتذار وتخفيف الأمر",
      options: [
        "Kein Problem, macht überhaupt nichts!",
        "Sie müssen sich entschuldigen.",
        "Gute Besserung, alles wird gut.",
        "Ich weiß nicht, wer das ist."
      ],
      correctIndex: 0,
      answerText: "Kein Problem, macht überhaupt nichts!",
      explanation: "العبارة الدارجة الأكثر استخداماً: Kein Problem, macht überhaupt nichts! (لا مشكلة على الإطلاق، لم يحدث شيء).",
      rule: "قبول الاعتذار: Kein Problem! | Macht nichts! | Halb so wild!"
    },
    {
      category: "كيف تجيب؟",
      prompt: "في الامتحان الشفوي B1 سألك الفاحص: »Was denken Sie über Homeoffice?« — كيف تبدأ إبداء رأيك كمتحدث واثق؟",
      situationAr: "بدء إبداء الرأي في الامتحان الشفوي",
      options: [
        "Meiner Meinung nach bietet Homeoffice viele Vorteile, aber auch Nachteile.",
        "Ich bin Homeoffice zu Hause.",
        "Homeoffice denkt nicht über mich.",
        "Weil Homeoffice ist sehr schön heute."
      ],
      correctIndex: 0,
      answerText: "Meiner Meinung nach bietet Homeoffice viele Vorteile, aber auch Nachteile.",
      explanation: "افتتاحية ذهبية معتمدة في امتحانات معهد غوته لإبداء الرأي بتوازن ونضج لغوي.",
      rule: "افتتاحيات إبداء الرأي: Meiner Meinung nach... | Ich bin der Ansicht, dass... | Ich glaube, dass..."
    }
  ],

  pool: [],
  currentIndex: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  isAnswered: false,

  initPool() {
    this.pool = Utils.shuffle([...this.questions]);
  },

  render(container) {
    this.initPool();
    const data = Storage.load();
    const highScore = (data.games && data.games.dialogGame) ? data.games.dialogGame.highScore : 0;

    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="card text-center" style="margin-bottom: 24px; padding: 40px 24px;">
          <div style="font-size: 2.8rem; margin-bottom: 12px;">🎭</div>
          <h2 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 8px;">استوديو السؤال والجواب (Dialog & Sprechen Studio)</h2>
          <p class="text-secondary" style="max-width: 580px; margin: 0 auto 20px auto; font-size: 1rem; line-height: 1.6;">
            تعلم فن المحادثة الحقيقية: كيف تصيغ السؤال الألماني الدقيق وفق قواعد الإعراب وأدوات الاستفهام (W-Fragen)، وكيف تجيب بأفضل التراكيب الشائعة (Redemittel) المعتمدة في امتحانات Goethe A2 و B1!
          </p>
          <div style="display: flex; justify-content: center; gap: 16px; margin-bottom: 24px; flex-wrap: wrap;">
            <div class="badge badge-warning">❓ كيف تسأل؟ (W-Fragen)</div>
            <div class="badge badge-primary">🏆 أعلى نتيجة: ${highScore}</div>
            <div class="badge badge-success">💬 كيف تجيب؟ (Redemittel)</div>
          </div>
          <button class="btn btn-primary btn-lg" onclick="DialogGame.start()">ابدأ التدريب الآن 🚀</button>
        </div>
      </div>
    `;
  },

  start() {
    this.initPool();
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.showNext();
  },

  showNext() {
    if (this.currentIndex >= this.pool.length) {
      this.endGame();
      return;
    }

    const item = this.pool[this.currentIndex];
    this.isAnswered = false;
    this.renderCurrentQuestion(item);
  },

  renderCurrentQuestion(item) {
    const container = document.getElementById('app-content');
    const total = Math.min(this.pool.length, 12);
    const currentNum = this.currentIndex + 1;

    container.innerHTML = `
      <div class="article-game-container fade-in">
        <!-- HUD -->
        <div class="game-hud" style="margin-bottom: 20px;">
          <div class="hud-item">
            <span class="hud-label">السؤال</span>
            <span class="hud-value">${currentNum} / ${total}</span>
          </div>
          <div class="hud-item">
            <span class="hud-label">النقاط</span>
            <span class="hud-value" id="dialog-score">${this.score}</span>
          </div>
          <div class="hud-item">
            <span class="hud-label">السلسلة</span>
            <span class="hud-value" style="color: var(--accent);">🔥 ${this.streak}</span>
          </div>
        </div>

        <!-- Question Card -->
        <div class="card" style="padding: 28px 24px; margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span class="badge ${item.category === 'كيف تسأل؟' ? 'badge-primary' : 'badge-success'}">${item.category}</span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">${item.situationAr}</span>
          </div>

          <!-- Situation / Prompt Banner -->
          <div style="background: var(--bg-primary); border-right: 4px solid var(--accent); padding: 18px 20px; border-radius: var(--radius-sm); margin-bottom: 24px;">
            <div style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); line-height: 1.6;">
              ${Utils.escapeHtml(item.prompt)}
            </div>
          </div>

          <div style="font-size: 1rem; font-weight: 700; margin-bottom: 14px; color: var(--text-secondary);">
            اختر الجملة الألمانية الأكثر دقة وطبيعية:
          </div>

          <!-- Options Grid -->
          <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
            ${item.options.map((opt, idx) => `
              <button 
                class="btn btn-outline dialog-opt-btn de-text" 
                data-idx="${idx}"
                onclick="DialogGame.selectOption(${idx})"
                style="justify-content: flex-start; text-align: left; padding: 14px 18px; font-size: 1.05rem; line-height: 1.4; border-radius: var(--radius-md);"
              >
                <span class="badge" style="margin-left: 10px; background: var(--bg-primary); color: var(--text-secondary); font-size: 0.8rem;">
                  ${['A', 'B', 'C', 'D'][idx]}
                </span>
                ${Utils.escapeHtml(opt)}
              </button>
            `).join('')}
          </div>

          <!-- Feedback Box -->
          <div id="dialog-feedback" style="display: none;"></div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 16px;">
            <button class="btn btn-secondary btn-sm" onclick="DialogGame.prevQuestion()" ${this.currentIndex === 0 ? 'disabled style="opacity:0.4;pointer-events:none;"' : ''}>⬅ السابق</button>
            <button class="btn btn-secondary btn-sm" onclick="DialogGame.nextQuestion()">تخطي ⏭️</button>
          </div>
        </div>
      </div>
    `;
  },

  selectOption(chosenIdx) {
    if (this.isAnswered) return;
    this.isAnswered = true;

    const item = this.pool[this.currentIndex];
    const isCorrect = (chosenIdx === item.correctIndex);
    const btns = document.querySelectorAll('.dialog-opt-btn');
    const feedbackEl = document.getElementById('dialog-feedback');

    btns.forEach((btn, idx) => {
      btn.style.pointerEvents = 'none';
      if (idx === item.correctIndex) {
        btn.classList.remove('btn-outline');
        btn.classList.add('btn-success');
      } else if (idx === chosenIdx && !isCorrect) {
        btn.classList.remove('btn-outline');
        btn.classList.add('btn-danger');
      }
    });

    const correctText = item.options[item.correctIndex];
    Speech.speak(correctText);

    if (isCorrect) {
      this.score += 20 + (this.streak * 5);
      this.streak++;
      this.bestStreak = Math.max(this.bestStreak, this.streak);
      Storage.addXP(15);

      feedbackEl.className = 'card fade-in';
      feedbackEl.style.display = 'block';
      feedbackEl.style.marginTop = '20px';
      feedbackEl.style.background = 'rgba(16, 185, 129, 0.08)';
      feedbackEl.style.border = '1px solid var(--success)';
      feedbackEl.innerHTML = `
        <div style="display: flex; gap: 12px; align-items: flex-start;">
          <div style="font-size: 1.8rem;">🎉</div>
          <div style="flex: 1;">
            <h4 style="color: var(--success); margin-bottom: 6px;">صحيح تماماً! صياغة طبيعية وألمانية أصلية</h4>
            <div style="font-size: 0.95rem; color: var(--text-primary); margin-bottom: 8px;">
              ${Utils.escapeHtml(item.explanation)}
            </div>
            <div style="font-size: 0.88rem; color: var(--text-secondary); background: var(--bg-primary); padding: 8px 12px; border-radius: var(--radius-sm); margin-bottom: 14px;">
              💡 <strong>القاعدة الذهبية:</strong> ${Utils.escapeHtml(item.rule)}
            </div>
            <div style="display: flex; gap: 10px;">
              <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${correctText.replace(/'/g, "\\'")}')">
                🔊 استمع للنطق
              </button>
              <button class="btn btn-success btn-sm" onclick="DialogGame.nextQuestion()">
                الموقف التالي ➔
              </button>
            </div>
          </div>
        </div>
      `;
    } else {
      this.streak = 0;
      Storage.addMistake({
        lessonId: 'dialog-game',
        question: item.prompt,
        myAnswer: item.options[chosenIdx],
        correctAnswer: item.options[item.correctIndex],
        explanation: `${item.explanation} (${item.rule})`
      });

      feedbackEl.className = 'card fade-in';
      feedbackEl.style.display = 'block';
      feedbackEl.style.marginTop = '20px';
      feedbackEl.style.background = 'rgba(239, 68, 68, 0.08)';
      feedbackEl.style.border = '1px solid var(--danger)';
      feedbackEl.innerHTML = `
        <div style="display: flex; gap: 12px; align-items: flex-start;">
          <div style="font-size: 1.8rem;">💬</div>
          <div style="flex: 1;">
            <h4 style="color: var(--danger); margin-bottom: 6px;">الخيار الأدق هو:</h4>
            <div class="de-text" style="font-size: 1.05rem; font-weight: 700; color: var(--success); margin-bottom: 8px;">
              ${Utils.escapeHtml(item.options[item.correctIndex])}
            </div>
            <div style="font-size: 0.95rem; color: var(--text-primary); margin-bottom: 8px;">
              ${Utils.escapeHtml(item.explanation)}
            </div>
            <div style="font-size: 0.88rem; color: var(--text-secondary); background: var(--bg-primary); padding: 8px 12px; border-radius: var(--radius-sm); margin-bottom: 14px;">
              📌 <strong>تذكر:</strong> ${Utils.escapeHtml(item.rule)}
            </div>
            <div style="display: flex; gap: 10px;">
              <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${item.options[item.correctIndex].replace(/'/g, "\\'")}')">
                🔊 استمع للنطق
              </button>
              <button class="btn btn-primary btn-sm" onclick="DialogGame.nextQuestion()">
                متابعة ➔
              </button>
            </div>
          </div>
        </div>
      `;
    }

    const scoreEl = document.getElementById('dialog-score');
    if (scoreEl) scoreEl.textContent = this.score;
  },

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showNext();
    }
  },

  nextQuestion() {
    this.currentIndex++;
    if (this.currentIndex >= 12 || this.currentIndex >= this.pool.length) {
      this.endGame();
    } else {
      this.showNext();
    }
  },

  endGame() {
    Storage.saveGameScore('dialogGame', this.score);
    Storage.updateStreak();
    App.updateHeaderStats();

    const container = document.getElementById('app-content');
    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="card text-center" style="padding: 40px 24px;">
          <div style="font-size: 3.5rem; margin-bottom: 12px;">🏆</div>
          <h2 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 8px;">أحسنت! أتممت جولة استوديو المحادثة!</h2>
          <p class="text-secondary" style="margin-bottom: 20px;">
            تطبيق هذه الصيغ والردود اليومية سيمنحك طلاقة وثقة كبيرة في التحدث والتفاعل الحقيقي.
          </p>

          <div style="display: flex; justify-content: center; gap: 24px; margin-bottom: 24px;">
            <div class="stat-box">
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent);">${this.score}</div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">مجموع النقاط</div>
            </div>
            <div class="stat-box">
              <div style="font-size: 2rem; font-weight: 800; color: var(--warning);">🔥 ${this.bestStreak}</div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">أطول سلسلة</div>
            </div>
          </div>

          <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="DialogGame.start()">العب جولة جديدة ↺</button>
            <a href="#/games" class="btn btn-secondary">العودة للألعاب ➔</a>
          </div>
        </div>
      </div>
    `;
  }
};
