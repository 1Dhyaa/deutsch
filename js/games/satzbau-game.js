// js/games/satzbau-game.js — مهندس بناء الجملة ومواقع الأفعال (Satzbau & Nebensatz Master)

const SatzbauGame = {
  challenges: [
    // --- 1. Hauptsatz V2 & Inversion ---
    {
      type: "inversion",
      title: "تقديم الظرف الزمني (Inversion)",
      instruction: "ابدأ الجملة بظرف الزمان (Heute):",
      arMeaning: "اليوم يشتري أحمد سيارة جديدة.",
      words: ["Heute", "kauft", "Ahmad", "ein", "neues", "Auto."],
      correct: "Heute kauft Ahmad ein neues Auto.",
      v2Word: "kauft",
      rule: "الظرف Heute احتل الموقع 1 ➔ الفعل المصرف kauft جاء فوراً في الموقع 2 ➔ الفاعل Ahmad انتقل للموقع 3."
    },
    {
      type: "inversion",
      title: "تقديم ظرف المكان (Inversion)",
      instruction: "ابدأ الجملة بالمكان (In Berlin):",
      arMeaning: "في برلين يعيش أخي منذ عامين.",
      words: ["In", "Berlin", "wohnt", "mein", "Bruder", "seit", "zwei", "Jahren."],
      correct: "In Berlin wohnt mein Bruder seit zwei Jahren.",
      v2Word: "wohnt",
      rule: "شبه الجملة المكانية (In Berlin) تشكل الموقع 1 ➔ الفعل wohnt في الموقع 2 ➔ الفاعل mein Bruder في الموقع 3."
    },
    {
      type: "inversion",
      title: "الماضي التام مع ظرف زمان",
      instruction: "رتب الجملة مبتدئاً بظرف الزمان (Gestern):",
      arMeaning: "بالأمس قرأت كتاباً شيقاً جداً.",
      words: ["Gestern", "habe", "ich", "ein", "sehr", "interessantes", "Buch", "gelesen."],
      correct: "Gestern habe ich ein sehr interessantes Buch gelesen.",
      v2Word: "habe",
      rule: "Gestern (1) + habe (2) + ich (3) ... gelesen (اسم المفعول في نهاية الجملة)."
    },

    // --- 2. ADUSO-Konnektoren (Position 0) ---
    {
      type: "aduso",
      title: "روابط الموقع صفر (ADUSO: denn)",
      instruction: "اربط الجملتين باستخدام denn (لأن):",
      arMeaning: "أنا أتعلم الألمانية، لأنني أريد العمل في ألمانيا.",
      words: ["Ich", "lerne", "Deutsch,", "denn", "ich", "will", "in", "Deutschland", "arbeiten."],
      correct: "Ich lerne Deutsch, denn ich will in Deutschland arbeiten.",
      v2Word: "will",
      rule: "الأداة denn تحتل الموقع 0 ولا تؤثر على ترتيب الجملة: الفاعل ich (1) + الفعل will (2)."
    },
    {
      type: "aduso",
      title: "روابط الموقع صفر (ADUSO: aber)",
      instruction: "اربط الجملتين باستخدام aber (لكن):",
      arMeaning: "أنا متعب جداً، لكني يجب أن أنهي الواجبات.",
      words: ["Ich", "bin", "sehr", "müde,", "aber", "ich", "muss", "die", "Hausaufgaben", "fertigmachen."],
      correct: "Ich bin sehr müde, aber ich muss die Hausaufgaben fertigmachen.",
      v2Word: "muss",
      rule: "الرابط aber يحتل الموقع 0: الفاعل ich (1) + الفعل الناقص muss (2) والمصدر في النهاية."
    },
    {
      type: "aduso",
      title: "روابط الموقع صفر (ADUSO: sondern)",
      instruction: "اربط الجملتين بالنفي المقابل (sondern = بل / وإنما):",
      arMeaning: "هو لا يشرب الشاي، بل يشرب القهوة.",
      words: ["Er", "trinkt", "keinen", "Tee,", "sondern", "er", "trinkt", "Kaffee."],
      correct: "Er trinkt keinen Tee, sondern er trinkt Kaffee.",
      v2Word: "trinkt",
      rule: "تأتي sondern بعد جملة منفية (nicht / kein) وتحتل الموقع 0."
    },

    // --- 3. Konnektoren mit Inversion (Position 1: deshalb / trotzdem) ---
    {
      type: "connector_pos1",
      title: "الرابط السببي (deshalb = لذلك)",
      instruction: "اربط الجملة بنتيجة طبيعية (deshalb):",
      arMeaning: "الطقس ماطر، لذلك آخذ مظلتي معي.",
      words: ["Es", "regnet,", "deshalb", "nehme", "ich", "meinen", "Regenschirm", "mit."],
      correct: "Es regnet, deshalb nehme ich meinen Regenschirm mit.",
      v2Word: "nehme",
      rule: "الرابط deshalb يحتل الموقع 1 ➔ يليه الفعل فوراً nehme (2) ➔ ثم الفاعل ich (3)."
    },
    {
      type: "connector_pos1",
      title: "الرابط التناقضي (trotzdem = رغم ذلك)",
      instruction: "اربط الجملة بتناقض (trotzdem):",
      arMeaning: "هو مريض، رغم ذلك يذهب إلى العمل.",
      words: ["Er", "ist", "krank,", "trotzdem", "geht", "er", "zur", "Arbeit."],
      correct: "Er ist krank, trotzdem geht er zur Arbeit.",
      v2Word: "geht",
      rule: "الرابط trotzdem يحتل الموقع 1 ويفرض تقديم الفعل geht (2) على الفاعل er (3)."
    },

    // --- 4. Nebensätze (weil, dass, wenn, obwohl, da, bevor) ---
    {
      type: "nebensatz",
      title: "الجملة الفرعية السببية (weil = لأن)",
      instruction: "اربط الجملة باستخدام weil:",
      arMeaning: "أنا لا أستطيع القدوم، لأنني مريض اليوم.",
      words: ["Ich", "kann", "nicht", "kommen,", "weil", "ich", "heute", "krank", "bin."],
      correct: "Ich kann nicht kommen, weil ich heute krank bin.",
      v2Word: "bin",
      rule: "بعد weil يذهب الفعل المصرف bin مباشرة إلى نهاية الجملة الفرعية قبل النقطة."
    },
    {
      type: "nebensatz",
      title: "الجملة الفرعية مع فعل ناقص (weil + Modalverb)",
      instruction: "اربط الجملة بـ weil مع فعل ناقص (muss):",
      arMeaning: "هو لا يأتي إلى الحفلة، لأنه يجب عليه العمل.",
      words: ["Er", "kommt", "nicht", "zur", "Party,", "weil", "er", "lange", "arbeiten", "muss."],
      correct: "Er kommt nicht zur Party, weil er lange arbeiten muss.",
      v2Word: "muss",
      rule: "مع الأفعال الناقصة في Nebensatz: المصدر أولاً (arbeiten) ثم الفعل الناقص المصرف في آخر الجملة (muss)."
    },
    {
      type: "nebensatz",
      title: "جملة المفعول بـ (dass = أن)",
      instruction: "اركب الجملة باستخدام dass:",
      arMeaning: "أنا أعرف أنك تتحدث الألمانية بطلاقة.",
      words: ["Ich", "weiß,", "dass", "du", "fließend", "Deutsch", "sprichst."],
      correct: "Ich weiß, dass du fließend Deutsch sprichst.",
      v2Word: "sprichst",
      rule: "بعد dass يذهب الفعل المصرف sprichst إلى آخر الجملة الفرعية."
    },
    {
      type: "nebensatz",
      title: "الجملة الشرطية / الزمنية (wenn = إذا / عندما)",
      instruction: "ابدأ الجملة بـ Wenn:",
      arMeaning: "إذا كان الطقس جميلاً غداً، سنسافر إلى الجبال.",
      words: ["Wenn", "das", "Wetter", "morgen", "schön", "ist,", "fahren", "wir", "in", "die", "Berge."],
      correct: "Wenn das Wetter morgen schön ist, fahren wir in die Berge.",
      v2Word: "fahren",
      rule: "جملة wenn تنتهي بالفعل ist، وتبدأ الجملة الرئيسية فوراً بعد الفاصلة بالفعل fahren (فعل ملاصق للفاصلة)."
    },
    {
      type: "nebensatz",
      title: "الجملة الزمنية (bevor = قبل أن)",
      instruction: "ابدأ الجملة بـ Bevor:",
      arMeaning: "قبل أن أذهب للنوم، أقرأ فصلاً من الكتاب.",
      words: ["Bevor", "ich", "schlafen", "gehe,", "lese", "ich", "ein", "Kapitel."],
      correct: "Bevor ich schlafen gehe, lese ich ein Kapitel.",
      v2Word: "lese",
      rule: "bevor ترسل فعلها gehe للنهاية، والجملة الرئيسية تبدأ بالفعل lese فوراً بعد الفاصلة."
    },
    {
      type: "nebensatz",
      title: "الجملة التناقضية (obwohl = رغم أن)",
      instruction: "اربط الجملة بـ obwohl:",
      arMeaning: "هو يمارس الرياضة، رغم أنه متعب جداً.",
      words: ["Er", "macht", "Sport,", "obwohl", "er", "sehr", "müde", "ist."],
      correct: "Er macht Sport, obwohl er sehr müde ist.",
      v2Word: "ist",
      rule: "obwohl من أدوات Nebensatz التي تنقل الفعل المصرف ist إلى نهاية الجملة."
    }
  ],

  pool: [],
  currentIndex: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  chosenTokens: [],
  availableTokens: [],
  isAnswered: false,

  initPool() {
    this.pool = Utils.shuffle([...this.challenges]);
  },

  render(container) {
    this.initPool();
    const data = Storage.load();
    const highScore = (data.games && data.games.satzbauGame) ? data.games.satzbauGame.highScore : 0;

    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="card text-center" style="margin-bottom: 24px; padding: 40px 24px;">
          <div style="font-size: 2.8rem; margin-bottom: 12px;">🏗️</div>
          <h2 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 8px;">مهندس بناء الجملة ومواقع الأفعال (Satzbau Master)</h2>
          <p class="text-secondary" style="max-width: 580px; margin: 0 auto 20px auto; font-size: 1rem; line-height: 1.6;">
            أتقن سر اللغة الألمانية: قاعدة موقع الفعل الثاني (V2)، قلب الفاعل عند تقديم الظرف (Inversion)، روابط الموقع صفر (ADUSO)، وموقع الفعل في نهاية الجمل الفرعية (Nebensätze مع weil و dass و wenn)!
          </p>
          <div style="display: flex; justify-content: center; gap: 16px; margin-bottom: 24px; flex-wrap: wrap;">
            <div class="badge badge-warning">⚡ V2 & Inversion</div>
            <div class="badge badge-primary">🏆 أعلى نتيجة: ${highScore}</div>
            <div class="badge badge-success">🧩 الجمل الفرعية Nebensätze</div>
          </div>
          <button class="btn btn-primary btn-lg" onclick="SatzbauGame.start()">ابدأ التدريب الآن 🚀</button>
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
    this.chosenTokens = [];
    this.availableTokens = Utils.shuffle([...item.words]);
    this.renderCurrentChallenge(item);
  },

  renderCurrentChallenge(item) {
    const container = document.getElementById('app-content');
    const total = Math.min(this.pool.length, 12);
    const currentNum = this.currentIndex + 1;

    container.innerHTML = `
      <div class="article-game-container fade-in">
        <!-- HUD -->
        <div class="game-hud" style="margin-bottom: 20px;">
          <div class="hud-item">
            <span class="hud-label">التحدي</span>
            <span class="hud-value">${currentNum} / ${total}</span>
          </div>
          <div class="hud-item">
            <span class="hud-label">النقاط</span>
            <span class="hud-value" id="satzbau-score">${this.score}</span>
          </div>
          <div class="hud-item">
            <span class="hud-label">السلسلة</span>
            <span class="hud-value" style="color: var(--accent);">🔥 ${this.streak}</span>
          </div>
        </div>

        <!-- Challenge Card -->
        <div class="card" style="padding: 28px 24px; margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <span class="badge badge-primary">${item.title}</span>
            <button class="btn btn-secondary btn-sm audio-btn" style="width:auto; height:auto; border-radius:var(--radius-sm); padding:6px 14px; gap:6px;" onclick="Speech.speak('${item.correct.replace(/'/g, "\\'")}')" title="استمع للحل الصحيح">
              🔊 استمع للجملة
            </button>
          </div>

          <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 10px; font-weight: 600;">
            ${Utils.escapeHtml(item.instruction)}
          </div>

          <!-- Meaning Banner -->
          <div style="background: var(--bg-primary); border-right: 4px solid var(--accent); padding: 16px 20px; border-radius: var(--radius-sm); margin-bottom: 20px;">
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">المعنى المقصود:</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); line-height: 1.5;">
              ${Utils.escapeHtml(item.arMeaning)}
            </div>
          </div>

          <!-- Satz Dropzone -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 0.88rem; font-weight: 600; color: var(--text-secondary);">1️⃣ رتب الجملة بالنقر على الكلمات:</span>
            <span style="font-size: 0.8rem; color: var(--accent); font-weight: 600;">(انقر على الكلمة لإزالتها)</span>
          </div>
          <div id="satzbau-dropzone" style="min-height: 60px; border: 2px dashed var(--border); border-radius: var(--radius-md); padding: 12px; margin-bottom: 16px; display: flex; flex-wrap: wrap; gap: 8px; direction: ltr; justify-content: flex-start; align-items: center; background: var(--bg-card);">
            ${this.renderDropzone()}
          </div>

          <!-- Available Word Bank -->
          <div style="margin-bottom: 8px; font-size: 0.88rem; font-weight: 600; color: var(--text-secondary);">
            الكلمات المتاحة (انقر على الكلمة لإضافتها وسماع نطقها):
          </div>
          <div id="satzbau-wordbank" style="display: flex; flex-wrap: wrap; gap: 8px; direction: ltr; justify-content: flex-start; margin-bottom: 18px;">
            ${this.renderWordbank()}
          </div>

          <!-- Direct Text / Whisper / Voice Input Box -->
          <div style="margin-bottom: 20px; background: var(--bg-primary); padding: 12px 14px; border-radius: var(--radius-md); border: 1px solid var(--border);">
            <div style="margin-bottom: 6px; font-size: 0.85rem; font-weight: 600; color: var(--text-secondary);">
              2️⃣ أو اكتب / تكلّم مباشرة بالألمانية (يدعم Whisper و Win+H والميكروفون):
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
              <input
                type="text"
                id="satzbau-text-input"
                class="form-input de-text"
                dir="ltr"
                lang="de"
                autocomplete="off"
                placeholder="Schreibe oder sprich den deutschen Satz hier..."
                style="flex: 1; padding: 10px 14px; font-size: 1rem; border-radius: var(--radius-sm); border: 1.5px solid var(--border); background: var(--bg-card); color: var(--text-primary);"
                oninput="SatzbauGame.handleTextInput(this.value)"
                onkeydown="if(event.key === 'Enter') SatzbauGame.checkAnswer()"
              />
              <button type="button" class="btn btn-secondary btn-sm" onclick="Speech.listen('satzbau-text-input', this, (val) => SatzbauGame.handleTextInput(val))" title="تحدث بالألمانية (إملاء صوتي)" style="min-height: 42px; padding: 0 14px;">
                🎤 تحدث
              </button>
            </div>
          </div>

          <!-- Action Buttons -->
          <div style="display: flex; gap: 12px; align-items: center; justify-content: space-between; flex-wrap: wrap;">
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <button class="btn btn-primary" id="satzbau-check-btn" onclick="SatzbauGame.checkAnswer()" ${this.chosenTokens.length === 0 ? 'disabled' : ''}>
                فحص ترتيب الجملة 🎯
              </button>
              <button class="btn btn-secondary btn-sm" id="satzbau-reset-btn" onclick="SatzbauGame.resetTokens()" ${this.chosenTokens.length === 0 ? 'disabled' : ''}>
                إعادة ضبط ↺
              </button>
            </div>

            <div style="display: flex; gap: 8px;">
              ${this.currentIndex > 0 ? `<button class="btn btn-secondary btn-sm" onclick="SatzbauGame.prevQuestion()">⬅ السابق</button>` : ''}
              <button class="btn btn-outline btn-sm" onclick="SatzbauGame.nextQuestion()">تخطي ⏭️</button>
            </div>
          </div>

          <!-- Feedback Box -->
          <div id="satzbau-feedback" style="display: none; margin-top: 20px;"></div>
        </div>
      </div>
    `;
  },

  handleTextInput(val) {
    if (this.isAnswered) return;
    const checkBtn = document.getElementById('satzbau-check-btn');
    const resetBtn = document.getElementById('satzbau-reset-btn');
    const hasText = (val && val.trim().length > 0) || this.chosenTokens.length > 0;
    if (checkBtn) checkBtn.disabled = !hasText;
    if (resetBtn) resetBtn.disabled = !hasText;
  },

  renderDropzone() {
    if (this.chosenTokens.length === 0) {
      return `<span style="color: var(--text-muted); width: 100%; text-align: center; direction: rtl; font-size: 0.9rem;">انقر على الكلمات بالترتيب الصحيح لبناء الجملة</span>`;
    }
    return this.chosenTokens.map((w, idx) => `
      <button class="btn btn-sm btn-primary chosen-token de-text" onclick="SatzbauGame.removeToken(${idx})">
        ${Utils.escapeHtml(w)} ✕
      </button>
    `).join('');
  },

  renderWordbank() {
    return this.availableTokens.map((w, idx) => `
      <button class="btn btn-sm btn-outline avail-token de-text" onclick="SatzbauGame.addToken(${idx})" style="font-weight: 600;">
        ${Utils.escapeHtml(w)}
      </button>
    `).join('');
  },

  addToken(idx) {
    if (this.isAnswered) return;
    const word = this.availableTokens[idx];
    this.chosenTokens.push(word);
    this.availableTokens.splice(idx, 1);
    const cleanWord = word.replace(/[.!?,;:]/g, '').trim();
    if (cleanWord && window.Speech) {
      window.Speech.speak(cleanWord);
    }
    this.updateViews();
  },

  removeToken(idx) {
    if (this.isAnswered) return;
    const word = this.chosenTokens[idx];
    this.availableTokens.push(word);
    this.chosenTokens.splice(idx, 1);
    this.updateViews();
  },

  resetTokens() {
    if (this.isAnswered) return;
    const item = this.pool[this.currentIndex];
    this.chosenTokens = [];
    this.availableTokens = Utils.shuffle([...item.words]);
    const textInput = document.getElementById('satzbau-text-input');
    if (textInput) textInput.value = '';
    this.updateViews();
  },

  updateViews() {
    const dropzone = document.getElementById('satzbau-dropzone');
    const wordbank = document.getElementById('satzbau-wordbank');
    const checkBtn = document.getElementById('satzbau-check-btn');
    const resetBtn = document.getElementById('satzbau-reset-btn');
    const textInput = document.getElementById('satzbau-text-input');
    if (dropzone) dropzone.innerHTML = this.renderDropzone();
    if (wordbank) wordbank.innerHTML = this.renderWordbank();
    if (textInput) textInput.value = this.chosenTokens.join(' ');
    const hasContent = this.chosenTokens.length > 0 || (textInput && textInput.value.trim().length > 0);
    if (checkBtn) checkBtn.disabled = !hasContent;
    if (resetBtn) resetBtn.disabled = !hasContent;
  },

  checkAnswer() {
    const textInput = document.getElementById('satzbau-text-input');
    const typedVal = textInput ? textInput.value.trim() : '';
    const userSentence = this.chosenTokens.length > 0 ? this.chosenTokens.join(' ').trim() : typedVal;

    if (this.isAnswered || !userSentence) return;
    this.isAnswered = true;
    if (textInput) textInput.disabled = true;

    const item = this.pool[this.currentIndex];
    const isCorrect = Utils.compareAnswers(userSentence, item.correct);

    const feedbackEl = document.getElementById('satzbau-feedback');
    const checkBtn = document.getElementById('satzbau-check-btn');
    if (checkBtn) checkBtn.style.display = 'none';

    // Always play neural pronunciation of the German sentence
    Speech.speak(item.correct);

    if (isCorrect) {
      this.score += 20 + (this.streak * 5);
      this.streak++;
      this.bestStreak = Math.max(this.bestStreak, this.streak);
      Storage.addXP(15);

      feedbackEl.className = 'card fade-in';
      feedbackEl.style.display = 'block';
      feedbackEl.style.background = 'rgba(16, 185, 129, 0.08)';
      feedbackEl.style.border = '1px solid var(--success)';
      feedbackEl.innerHTML = `
        <div style="display: flex; gap: 12px; align-items: flex-start;">
          <div style="font-size: 1.8rem;">🎉</div>
          <div style="flex: 1;">
            <h4 style="color: var(--success); margin-bottom: 6px;">بناء سليم وموقع صحيح 100%!</h4>
            <div class="de-text" style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">
              ${Utils.escapeHtml(item.correct)}
            </div>
            <p style="font-size: 0.9rem; color: var(--text-secondary); background: var(--bg-primary); padding: 8px 12px; border-radius: var(--radius-sm); margin-bottom: 14px;">
              💡 <strong>التحليل النحوي:</strong> ${Utils.escapeHtml(item.rule)}
            </p>
            <div style="display: flex; gap: 10px;">
              <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${item.correct.replace(/'/g, "\\'")}')">
                🔊 إعادة الاستماع
              </button>
              <button class="btn btn-success btn-sm" onclick="SatzbauGame.nextQuestion()">
                الجملة التالية ➔
              </button>
            </div>
          </div>
        </div>
      `;
    } else {
      this.streak = 0;
      Storage.addMistake({
        lessonId: 'satzbau-game',
        question: `بناء الجملة: ${item.arMeaning}`,
        myAnswer: userSentence,
        correctAnswer: item.correct,
        explanation: item.rule
      });

      feedbackEl.className = 'card fade-in';
      feedbackEl.style.display = 'block';
      feedbackEl.style.background = 'rgba(239, 68, 68, 0.08)';
      feedbackEl.style.border = '1px solid var(--danger)';
      feedbackEl.innerHTML = `
        <div style="display: flex; gap: 12px; align-items: flex-start;">
          <div style="font-size: 1.8rem;">⚠️</div>
          <div style="flex: 1;">
            <h4 style="color: var(--danger); margin-bottom: 6px;">انتبه لموقع الفعل!</h4>
            <div style="font-size: 0.92rem; margin-bottom: 6px;">
              <strong>ترتيبك:</strong> <span class="de-text" style="color: var(--danger);">${Utils.escapeHtml(userSentence)}</span>
            </div>
            <div style="font-size: 0.95rem; margin-bottom: 6px;">
              <strong>الترتيب الصحيح:</strong> <span class="de-text" style="color: var(--success); font-weight: 700;">${Utils.escapeHtml(item.correct)}</span>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-secondary); background: var(--bg-primary); padding: 8px 12px; border-radius: var(--radius-sm); margin-bottom: 14px;">
              📌 <strong>القاعدة:</strong> ${Utils.escapeHtml(item.rule)}
            </p>
            <div style="display: flex; gap: 10px;">
              <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${item.correct.replace(/'/g, "\\'")}')">
                🔊 استمع للجملة الصحيحة
              </button>
              <button class="btn btn-primary btn-sm" onclick="SatzbauGame.nextQuestion()">
                متابعة ➔
              </button>
            </div>
          </div>
        </div>
      `;
    }

    const scoreEl = document.getElementById('satzbau-score');
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
    Storage.saveGameScore('satzbauGame', this.score);
    Storage.updateStreak();
    App.updateHeaderStats();

    const container = document.getElementById('app-content');
    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="card text-center" style="padding: 40px 24px;">
          <div style="font-size: 3.5rem; margin-bottom: 12px;">🏆</div>
          <h2 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 8px;">اكتمل تدريب بناء الجملة بنجاح!</h2>
          <p class="text-secondary" style="margin-bottom: 20px;">
            إتقان موقع الفعل هو المفتاح الأساسي للتحدث والكتابة باللغة الألمانية بثقة ودون أي ارتباك.
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
            <button class="btn btn-primary" onclick="SatzbauGame.start()">العب جولة جديدة ↺</button>
            <a href="#/games" class="btn btn-secondary">العودة للألعاب ➔</a>
          </div>
        </div>
      </div>
    `;
  }
};
window.SatzbauGame = SatzbauGame;
