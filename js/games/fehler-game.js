// js/games/fehler-game.js — Fehlerkorrektur (اكتشف الخطأ وصححه — What's Wrong?)

const FehlerGame = {
  questions: [
    // --- V2 & Inversion Errors ---
    {
      wrongSentence: "Morgen ich gehe zur Universität.",
      options: [
        "Morgen gehe ich zur Universität.",
        "Morgen ich will gehen zur Universität.",
        "Gehe morgen ich zur Universität.",
        "Morgen zur Universität ich gehe."
      ],
      correctIndex: 0,
      errorSpot: "ترتيب الكلمات وموقع الفعل (V2)",
      explanation: "في الجملة الرئيسية، إذا بدأت بالظرف الزمني (Morgen = موقع 1)، يجب أن يأتي الفعل المصرف فوراً في الموقع 2 (gehe)، وينتقل الفاعل للموقع 3 (ich).",
      rule: "قاعدة V2 الذهبية: عنصر 1 + الفعل المصرف (2) + الفاعل (3)."
    },
    {
      wrongSentence: "Heute Abend meine Freunde kommen zu mir.",
      options: [
        "Heute Abend kommen meine Freunde zu mir.",
        "Meine Freunde heute Abend kommen zu mir.",
        "Heute Abend zu mir meine Freunde kommen.",
        "Kommen heute Abend zu mir meine Freunde."
      ],
      correctIndex: 0,
      errorSpot: "تقديم الفاعل على الفعل بعد ظرف الزمان",
      explanation: "Heute Abend تمثل الموقع الأول كعنصر زمني واحد، لذلك يجب أن يليها الفعل المصرف (kommen) في الموقع الثاني مباشرة.",
      rule: "العبارة الزمنية كاملة تحتل الموقع 1 ➔ الفعل فوراً في الموقع 2."
    },
    {
      wrongSentence: "Gestern ich habe einen neuen Laptop gekauft.",
      options: [
        "Gestern habe ich einen neuen Laptop gekauft.",
        "Gestern ich kaufte einen neuen Laptop.",
        "Einen neuen Laptop gestern ich habe gekauft.",
        "Gestern habe einen neuen Laptop ich gekauft."
      ],
      correctIndex: 0,
      errorSpot: "موقع الفعل المساعد habe في الماضي التام",
      explanation: "بعد ظرف الزمان Gestern (موقع 1)، يجب أن يأتي الفعل المساعد habe في الموقع 2، بينما اسم المفعول gekauft يبقى في نهاية الجملة.",
      rule: "ظرف (1) + الفعل المساعد (2) + الفاعل (3) + ... + اسم المفعول (نهاية الجملة)."
    },

    // --- Nebensatz Errors (weil, dass, wenn, obwohl) ---
    {
      wrongSentence: "Er bleibt heute im Bett, weil er ist sehr krank.",
      options: [
        "Er bleibt heute im Bett, weil er sehr krank ist.",
        "Er bleibt heute im Bett, weil ist er sehr krank.",
        "Weil er ist sehr krank, er bleibt heute im Bett.",
        "Er bleibt heute im Bett, denn er sehr krank ist."
      ],
      correctIndex: 0,
      errorSpot: "موقع الفعل المصرف بعد أداة الربط weil",
      explanation: "الرابط weil يُنشئ جملة فرعية (Nebensatz)، وفي الجملة الفرعية يذهب الفعل المصرف (ist) دائماً إلى نهاية الجملة قبل النقطة.",
      rule: "روابط الجمل الفرعية (weil, dass, wenn, da, obwohl) ترسل الفعل المصرف لآخر الجملة."
    },
    {
      wrongSentence: "Ich weiß, dass du hast gestern lange gearbeitet.",
      options: [
        "Ich weiß, dass du gestern lange gearbeitet hast.",
        "Ich weiß, dass hast du gestern lange gearbeitet.",
        "Ich weiß, dass gestern du hast lange gearbeitet.",
        "Ich weiß, dass du gestern gearbeitet lange hast."
      ],
      correctIndex: 0,
      errorSpot: "موقع الفعل المساعد hast بعد dass",
      explanation: "بعد dass تذهب الأفعال المصرفة إلى النهاية التامة للجملة بعد اسم المفعول: gearbeitet hast.",
      rule: "في الماضي التام داخل Nebensatz: اسم المفعول أولاً ثم الفعل المساعد المصرف في النهاية."
    },
    {
      wrongSentence: "Wenn ich habe Zeit, besuche ich dich morgen.",
      options: [
        "Wenn ich Zeit habe, besuche ich dich morgen.",
        "Wenn habe ich Zeit, besuche ich dich morgen.",
        "Wenn ich Zeit habe, ich besuche dich morgen.",
        "Wenn Zeit ich habe, besuche morgen ich dich."
      ],
      correctIndex: 0,
      errorSpot: "موقع الفعل habe في جملة wenn الشرطية",
      explanation: "جملة wenn هي جملة فرعية، فيذهب فعلها habe للنهاية (Wenn ich Zeit habe, ...)، وتبدأ الجملة الرئيسية بعدها بالفعل فوراً (besuche ich...).",
      rule: "جملة شرطية (فعل في النهاية)، + فعل الجملة الرئيسية (موقع أول بعد الفاصلة) + فاعل."
    },

    // --- Preposition & Case Errors (Akkusativ & Dativ) ---
    {
      wrongSentence: "Ich fahre jeden Tag mit den Bus zur Arbeit.",
      options: [
        "Ich fahre jeden Tag mit dem Bus zur Arbeit.",
        "Ich fahre jeden Tag mit des Busses zur Arbeit.",
        "Ich fahre jeden Tag mit der Bus zur Arbeit.",
        "Ich fahre jeden Tag mit einen Bus zur Arbeit."
      ],
      correctIndex: 0,
      errorSpot: "حالة الإعراب بعد حرف الجر mit",
      explanation: "حرف الجر mit يطلب دائماً وبلا استثناء حالة المجرور (Dativ). الاسم der Bus يتحول في الداتيف إلى dem Bus.",
      rule: "mit + Dativ دائماً: der/das ➔ dem | die ➔ der | Plural ➔ den + n."
    },
    {
      wrongSentence: "Das Geschenk ist für meinem Vater.",
      options: [
        "Das Geschenk ist für meinen Vater.",
        "Das Geschenk ist für mein Vater.",
        "Das Geschenk ist für meines Vaters.",
        "Das Geschenk ist für mir Vater."
      ],
      correctIndex: 0,
      errorSpot: "حالة الإعراب بعد حرف الجر für",
      explanation: "حرف الجر für يطلب دائماً حالة النصب (Akkusativ). الاسم المذكر mein Vater يتحول في الأكوزاتيف إلى meinen Vater.",
      rule: "حروف Akkusativ الثابتة (FUDGE-B: für, um, durch, gegen, ohne, bis)."
    },
    {
      wrongSentence: "Ich habe seit drei Monaten bei meine Tante gewohnt.",
      options: [
        "Ich habe drei Monate bei meiner Tante gewohnt.",
        "Ich habe seit drei Monaten bei meine Tante gewohnt.",
        "Ich habe seit drei Monaten bei meinen Tante gewohnt.",
        "Ich habe seit drei Monaten bei meiner Tante gewohnt."
      ],
      correctIndex: 3,
      errorSpot: "أداة المؤنث بعد حرف الجر bei (Dativ)",
      explanation: "حرف الجر bei يفرض Dativ، والاسم مؤنث (die Tante) فتتحول أداة الملكية إلى meiner Tante.",
      rule: "bei + Dativ: die ➔ der (meine ➔ meiner)."
    },
    {
      wrongSentence: "Ich helfe dich gerne beim Umzug.",
      options: [
        "Ich helfe dir gerne beim Umzug.",
        "Ich helfe Sie gerne beim Umzug.",
        "Ich helfe dein gerne beim Umzug.",
        "Ich helfe du gerne beim Umzug."
      ],
      correctIndex: 0,
      errorSpot: "حالة الضمير مع الفعل helfen",
      explanation: "الفعل helfen يطلب دائماً مفعولاً مجروراً (Dativ). ضمير المخاطب في الداتيف هو dir وليس dich (Akkusativ).",
      rule: "helfen + Dativ: mir, dir, ihm, ihr, uns, euch, ihnen."
    },

    // --- Fragestellung (Question Word Order) ---
    {
      wrongSentence: "Warum du hast mich gestern nicht angerufen?",
      options: [
        "Warum hast du mich gestern nicht angerufen?",
        "Warum du gestern mich nicht hast angerufen?",
        "Warum hast mich du gestern nicht angerufen?",
        "Warum gestern hast du mich nicht angerufen?"
      ],
      correctIndex: 0,
      errorSpot: "موقع الفعل المساعد في السؤال بأداة استفهام (W-Frage)",
      explanation: "في سؤال أدوات الاستفهام: أداة الاستفهام في الموقع 1 (Warum) ➔ الفعل المصرف فوراً في الموقع 2 (hast) ➔ الفاعل في الموقع 3 (du).",
      rule: "W-Wort (1) + الفعل المصرف (2) + الفاعل (3) + بقية السؤال."
    },
    {
      wrongSentence: "Wohin du fährst am Wochenende?",
      options: [
        "Wohin fährst du am Wochenende?",
        "Wohin am Wochenende du fährst?",
        "Fährst wohin du am Wochenende?",
        "Wohin du am Wochenende fährst?"
      ],
      correctIndex: 0,
      errorSpot: "تقديم الفاعل على الفعل بعد Wohin",
      explanation: "أداة الاستفهام Wohin يجب أن يليها مباشرة الفعل المصرف fährst ثم الفاعل du.",
      rule: "لا تضع الفاعل بعد أداة الاستفهام مباشرة أبداً في الألمانية."
    },

    // --- Modalverben Klammerstruktur ---
    {
      wrongSentence: "Ich muss morgen früh aufstehen um sechs Uhr.",
      options: [
        "Ich muss morgen früh um sechs Uhr aufstehen.",
        "Ich muss aufstehen morgen früh um sechs Uhr.",
        "Morgen früh ich muss aufstehen um sechs Uhr.",
        "Ich will morgen früh aufstehen müssen um sechs Uhr."
      ],
      correctIndex: 0,
      errorSpot: "موقع الفعل المصدر بعد الفعل الناقص (Klammerstruktur)",
      explanation: "مع الأفعال الناقصة (müssen, können, wollen...)، يأتي الفعل الرئيسي في صيغة المصدر (aufstehen) في النهاية التامة للجملة بعد كل الظروف.",
      rule: "Modalverb (موقع 2) ... المصدر في النهاية التامة للجملة (Satzklammer)."
    },

    // --- Adjektivdeklination ---
    {
      wrongSentence: "Er hat ein neues Auto gekauft, aber er fährt ein altes Fahrrad.",
      options: [
        "الجملة صحيحة تماماً ولا يوجد بها أي خطأ!",
        "الخطأ في ein neues Auto والصواب ein neuer Auto",
        "الخطأ في ein altes Fahrrad والصواب ein alter Fahrrad",
        "الخطأ في gekauft والصواب kaufen"
      ],
      correctIndex: 0,
      errorSpot: "اختبار الدقة: الجملة خالية من الأخطاء",
      explanation: "das Auto و das Fahrrad كلاهما محايد، بعد أداة النكرة ein في الأكوزاتيف تأخذ الصفة النهاية الصحيحة -es (neues / altes). الجملة سليمة 100%!",
      rule: "المحايد بعد ein يأخذ -es دائماً في الرفع والنصب."
    },
    {
      wrongSentence: "Ich trinke gern einen heißer Kaffee am Morgen.",
      options: [
        "Ich trinke gern einen heißen Kaffee am Morgen.",
        "Ich trinke gern ein heißer Kaffee am Morgen.",
        "Ich trinke gern einen heißem Kaffee am Morgen.",
        "Ich trinke gern einer heißen Kaffee am Morgen."
      ],
      correctIndex: 0,
      errorSpot: "نهاية الصفة بعد einen (Akkusativ)",
      explanation: "بعد أداة النصب للمذكر einen تأخذ الصفة دائماً النهاية -en (heißen) وليس -er.",
      rule: "بعد den / einen / meinen تأخذ الصفة دائماً -en."
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
    const highScore = (data.games && data.games.fehlerGame) ? data.games.fehlerGame.highScore : 0;

    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="card text-center" style="margin-bottom: 24px; padding: 40px 24px;">
          <div style="font-size: 2.8rem; margin-bottom: 12px;">🔍</div>
          <h2 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 8px;">تحدي اكتشف الخطأ وصححه (Fehlerkorrektur)</h2>
          <p class="text-secondary" style="max-width: 580px; margin: 0 auto 20px auto; font-size: 1rem; line-height: 1.6;">
            تعرض عليك جملة ألمانية تحتوي على خطأ يقع فيه معظم الطلاب (في موقع الفعل، الجمل الفرعية، حروف الجر، أو تصريف الصفات). مهمتك اختيار التصحيح الدقيق وفهم القاعدة لتفادي الخطأ إلى الأبد!
          </p>
          <div style="display: flex; justify-content: center; gap: 16px; margin-bottom: 24px; flex-wrap: wrap;">
            <div class="badge badge-danger">⚠️ تدريب عالي التركيز</div>
            <div class="badge badge-primary">🏆 أعلى نتيجة: ${highScore}</div>
            <div class="badge badge-success">💡 شروحات نحوية تفصيلية</div>
          </div>
          <button class="btn btn-primary btn-lg" onclick="FehlerGame.start()">ابدأ التحدي الآن ⚡</button>
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
            <span class="hud-value" id="fehler-score">${this.score}</span>
          </div>
          <div class="hud-item">
            <span class="hud-label">السلسلة</span>
            <span class="hud-value" style="color: var(--accent);">🔥 ${this.streak}</span>
          </div>
        </div>

        <!-- Question Card -->
        <div class="card" style="padding: 28px 24px; margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span class="badge badge-danger">⚠️ جملة بها خطأ شائع</span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">${item.errorSpot}</span>
          </div>

          <!-- Wrong Sentence Box -->
          <div style="background: rgba(239, 68, 68, 0.08); border-right: 4px solid var(--danger); padding: 18px 20px; border-radius: var(--radius-sm); margin-bottom: 24px;">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--danger); margin-bottom: 6px;">الجملة الخاطئة:</div>
            <div class="de-text" style="font-size: 1.25rem; font-weight: 700; color: var(--danger); text-decoration: line-through;">
              ${Utils.escapeHtml(item.wrongSentence)}
            </div>
          </div>

          <div style="font-size: 1.05rem; font-weight: 700; margin-bottom: 14px; color: var(--text-primary);">
            اختر التصحيح الألماني السليم لهذه الجملة:
          </div>

          <!-- Options Grid -->
          <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
            ${item.options.map((opt, idx) => `
              <button 
                class="btn btn-outline fehler-opt-btn de-text" 
                data-idx="${idx}"
                onclick="FehlerGame.selectOption(${idx})"
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
          <div id="fehler-feedback" style="display: none;"></div>
        </div>
      </div>
    `;
  },

  selectOption(chosenIdx) {
    if (this.isAnswered) return;
    this.isAnswered = true;

    const item = this.pool[this.currentIndex];
    const isCorrect = (chosenIdx === item.correctIndex);
    const btns = document.querySelectorAll('.fehler-opt-btn');
    const feedbackEl = document.getElementById('fehler-feedback');

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

    if (isCorrect) {
      this.score += 20 + (this.streak * 5);
      this.streak++;
      this.bestStreak = Math.max(this.bestStreak, this.streak);
      Storage.addXP(15);
      
      const correctText = item.options[item.correctIndex];
      Speech.speak(correctText);

      feedbackEl.className = 'card fade-in';
      feedbackEl.style.display = 'block';
      feedbackEl.style.marginTop = '20px';
      feedbackEl.style.background = 'rgba(16, 185, 129, 0.08)';
      feedbackEl.style.border = '1px solid var(--success)';
      feedbackEl.innerHTML = `
        <div style="display: flex; gap: 12px; align-items: flex-start;">
          <div style="font-size: 1.8rem;">🎯</div>
          <div style="flex: 1;">
            <h4 style="color: var(--success); margin-bottom: 6px;">أحسنت! إجابة صحيحة واكتشاف ممتاز للخطأ</h4>
            <div style="font-size: 0.95rem; color: var(--text-primary); margin-bottom: 8px;">
              <strong>سبب الخطأ:</strong> ${Utils.escapeHtml(item.explanation)}
            </div>
            <div style="font-size: 0.88rem; color: var(--text-secondary); background: var(--bg-primary); padding: 8px 12px; border-radius: var(--radius-sm); margin-bottom: 14px;">
              💡 <strong>القاعدة:</strong> ${Utils.escapeHtml(item.rule)}
            </div>
            <button class="btn btn-success btn-sm" onclick="FehlerGame.nextQuestion()">
              السؤال التالي ➔
            </button>
          </div>
        </div>
      `;
    } else {
      this.streak = 0;
      Storage.addMistake({
        lessonId: 'fehler-game',
        question: `تصحيح: ${item.wrongSentence}`,
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
          <div style="font-size: 1.8rem;">💡</div>
          <div style="flex: 1;">
            <h4 style="color: var(--danger); margin-bottom: 6px;">انتبه للقاعدة النحوية!</h4>
            <div style="font-size: 0.95rem; color: var(--text-primary); margin-bottom: 8px;">
              <strong>الشرح:</strong> ${Utils.escapeHtml(item.explanation)}
            </div>
            <div style="font-size: 0.88rem; color: var(--text-secondary); background: var(--bg-primary); padding: 8px 12px; border-radius: var(--radius-sm); margin-bottom: 14px;">
              📌 <strong>القاعدة الصحيحة:</strong> ${Utils.escapeHtml(item.rule)}
            </div>
            <div style="display: flex; gap: 10px;">
              <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${item.options[item.correctIndex].replace(/'/g, "\\'")}')">
                🔊 استمع للجملة الصحيحة
              </button>
              <button class="btn btn-primary btn-sm" onclick="FehlerGame.nextQuestion()">
                متابعة ➔
              </button>
            </div>
          </div>
        </div>
      `;
    }

    const scoreEl = document.getElementById('fehler-score');
    if (scoreEl) scoreEl.textContent = this.score;
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
    Storage.saveGameScore('fehlerGame', this.score);
    Storage.updateStreak();
    App.updateHeaderStats();

    const container = document.getElementById('app-content');
    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="card text-center" style="padding: 40px 24px;">
          <div style="font-size: 3.5rem; margin-bottom: 12px;">🏆</div>
          <h2 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 8px;">انتهى اختبار كشف الأخطاء!</h2>
          <p class="text-secondary" style="margin-bottom: 20px;">
            القدرة على كشف الأخطاء وتصحيحها هي أعلى درجات الإتقان اللغوي في امتحانات Goethe.
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
            <button class="btn btn-primary" onclick="FehlerGame.start()">العب جولة جديدة ↺</button>
            <a href="#/games" class="btn btn-secondary">العودة للألعاب ➔</a>
          </div>
        </div>
      </div>
    `;
  }
};
