// js/games/kasus-game.js — Grammar Sprint: Kasus Trainer (Akkusativ, Dativ, Genitiv)

const KasusGame = {
  questions: [
    // --- Akkusativ Präpositionen (bis, durch, für, gegen, ohne, um) ---
    {
      sentence: "Das Geschenk ist für ___ (die Mutter).",
      options: ["die Mutter", "der Mutter", "den Mutter", "des Mutter"],
      correct: "die Mutter",
      rule: "حرف الجر für يطلب دائماً حالة النصب (Akkusativ). أداة المؤنث تبقى die.",
      fullSentence: "Das Geschenk ist für die Mutter."
    },
    {
      sentence: "Ich gehe ohne ___ (der Regenschirm) raus.",
      options: ["den Regenschirm", "dem Regenschirm", "der Regenschirm", "des Regenschirms"],
      correct: "den Regenschirm",
      rule: "حرف الجر ohne يطلب حالة النصب (Akkusativ). der Regenschirm تصبح den Regenschirm.",
      fullSentence: "Ich gehe ohne den Regenschirm raus."
    },
    {
      sentence: "Wir fahren durch ___ (der Tunnel).",
      options: ["den Tunnel", "dem Tunnel", "der Tunnel", "des Tunnels"],
      correct: "den Tunnel",
      rule: "حرف الجر durch يطلب حالة النصب (Akkusativ). der Tunnel تصبح den Tunnel.",
      fullSentence: "Wir fahren durch den Tunnel."
    },
    {
      sentence: "Das Auto fährt gegen ___ (der Baum).",
      options: ["den Baum", "dem Baum", "der Baum", "des Baumes"],
      correct: "den Baum",
      rule: "حرف الجر gegen يطلب حالة النصب (Akkusativ). der Baum تصبح den Baum.",
      fullSentence: "Das Auto fährt gegen den Baum."
    },
    {
      sentence: "Die Kinder laufen um ___ (das Haus).",
      options: ["das Haus", "dem Haus", "des Hauses", "den Haus"],
      correct: "das Haus",
      rule: "حرف الجر um يطلب حالة النصب (Akkusativ). das Haus تبقى das Haus.",
      fullSentence: "Die Kinder laufen um das Haus."
    },

    // --- Dativ Präpositionen (aus, bei, mit, nach, seit, von, zu, gegenüber) ---
    {
      sentence: "Ich fahre jeden Tag mit ___ (der Bus).",
      options: ["dem Bus", "den Bus", "der Bus", "des Busses"],
      correct: "dem Bus",
      rule: "حرف الجر mit يطلب دائماً حالة الجر (Dativ). der Bus تصبح dem Bus.",
      fullSentence: "Ich fahre jeden Tag mit dem Bus."
    },
    {
      sentence: "Er wohnt noch bei ___ (seine Eltern - Plural).",
      options: ["seinen Eltern", "seine Eltern", "seiner Eltern", "seinem Eltern"],
      correct: "seinen Eltern",
      rule: "حرف الجر bei يطلب Dativ. جمع الملكية يأخذ -en في الداتيف (seinen Eltern).",
      fullSentence: "Er wohnt noch bei seinen Eltern."
    },
    {
      sentence: "Wir kommen gerade aus ___ (die Schweiz).",
      options: ["der Schweiz", "die Schweiz", "den Schweiz", "dem Schweiz"],
      correct: "der Schweiz",
      rule: "حرف الجر aus يطلب Dativ. أداة المؤنث die تتحول إلى der في Dativ.",
      fullSentence: "Wir kommen gerade aus der Schweiz."
    },
    {
      sentence: "Nach ___ (die Arbeit) gehe ich einkaufen.",
      options: ["der Arbeit", "die Arbeit", "den Arbeit", "dem Arbeit"],
      correct: "der Arbeit",
      rule: "حرف الجر nach يطلب Dativ. die Arbeit تصبح der Arbeit.",
      fullSentence: "Nach der Arbeit gehe ich einkaufen."
    },
    {
      sentence: "Ich lerne seit ___ (ein Jahr - Neutrum) Deutsch.",
      options: ["einem Jahr", "einen Jahr", "eines Jahres", "einer Jahr"],
      correct: "einem Jahr",
      rule: "حرف الجر seit يطلب Dativ. أداة المحايد النكرة تصبح einem.",
      fullSentence: "Ich lerne seit einem Jahr Deutsch."
    },
    {
      sentence: "Sie geht heute zu ___ (die Ärztin).",
      options: ["der Ärztin", "die Ärztin", "den Ärztin", "dem Ärztin"],
      correct: "der Ärztin",
      rule: "حرف الجر zu يطلب Dativ. die Ärztin تصبح der Ärztin (أو zur Ärztin).",
      fullSentence: "Sie geht heute zu der Ärztin."
    },
    {
      sentence: "Das Café liegt gegenüber ___ (der Bahnhof).",
      options: ["dem Bahnhof", "den Bahnhof", "der Bahnhof", "des Bahnhofs"],
      correct: "dem Bahnhof",
      rule: "حرف الجر gegenüber يطلب Dativ. der Bahnhof تصبح dem Bahnhof.",
      fullSentence: "Das Café liegt gegenüber dem Bahnhof."
    },

    // --- Genitiv Präpositionen (wegen, während, trotz, statt) ---
    {
      sentence: "Wegen ___ (das schlechte Wetter) bleiben wir daheim.",
      options: ["des schlechten Wetters", "dem schlechten Wetter", "das schlechte Wetter", "den schlechten Wetter"],
      correct: "des schlechten Wetters",
      rule: "حرف الجر wegen يتطلب حالة الإضافة (Genitiv): des Wetters.",
      fullSentence: "Wegen des schlechten Wetters bleiben wir daheim."
    },
    {
      sentence: "Trotz ___ (die Kälte) macht er Sport.",
      options: ["der Kälte", "die Kälte", "dem Kälte", "den Kälte"],
      correct: "der Kälte",
      rule: "حرف الجر trotz يتطلب Genitiv. أداة المؤنث في الجينيتيف تصبح der.",
      fullSentence: "Trotz der Kälte macht er Sport."
    },
    {
      sentence: "Während ___ (der Unterricht) sind Handys verboten.",
      options: ["des Unterrichts", "dem Unterricht", "den Unterricht", "der Unterricht"],
      correct: "des Unterrichts",
      rule: "حرف الجر während يتطلب Genitiv: des Unterrichts (+s في نهاية الاسم).",
      fullSentence: "Während des Unterrichts sind Handys verboten."
    },

    // --- Verben mit Dativ ---
    {
      sentence: "Kannst du ___ (ich) bitte helfen?",
      options: ["mir", "mich", "mein", "ich"],
      correct: "mir",
      rule: "الفعل helfen يتطلب دائماً مجروراً (Dativ). ضمير ich في الداتيف هو mir.",
      fullSentence: "Kannst du mir bitte helfen?"
    },
    {
      sentence: "Das Buch gefällt ___ (mein Vater) sehr.",
      options: ["meinem Vater", "meinen Vater", "meines Vaters", "mein Vater"],
      correct: "meinem Vater",
      rule: "الفعل gefallen يتطلب Dativ. mein Vater للمذكر تصبح في الداتيف meinem Vater.",
      fullSentence: "Das Buch gefällt meinem Vater sehr."
    },
    {
      sentence: "Ich danke ___ (Sie - Höflichkeitsform) für Ihre Hilfe.",
      options: ["Ihnen", "Sie", "Ihr", "Ihre"],
      correct: "Ihnen",
      rule: "الفعل danken يتطلب Dativ. ضمير الاحترام Sie يصبح Ihnen في الداتيف.",
      fullSentence: "Ich danke Ihnen für Ihre Hilfe."
    },
    {
      sentence: "Die Hose passt ___ (meine Schwester) nicht.",
      options: ["meiner Schwester", "meine Schwester", "meinen Schwester", "meinem Schwester"],
      correct: "meiner Schwester",
      rule: "الفعل passen يتطلب Dativ. للمؤنث تصبح meiner Schwester.",
      fullSentence: "Die Hose passt meiner Schwester nicht."
    },
    {
      sentence: "Der Fisch schmeckt ___ (die Kinder - Plural) gut.",
      options: ["den Kindern", "die Kinder", "der Kinder", "dem Kind"],
      correct: "den Kindern",
      rule: "الفعل schmecken يتطلب Dativ. جمع Dativ يأخذ أداة den وإضافة n للاسم (den Kindern).",
      fullSentence: "Der Fisch schmeckt den Kindern gut."
    },

    // --- Verben mit Akkusativ ---
    {
      sentence: "Ich habe gestern ___ (ein neuer Laptop - Maskulin) gekauft.",
      options: ["einen neuen Laptop", "ein neuer Laptop", "einem neuen Laptop", "eines neuen Laptops"],
      correct: "einen neuen Laptop",
      rule: "الفعل kaufen يتطلب مفعولاً به منصوباً (Akkusativ). للمذكر ein -> einen.",
      fullSentence: "Ich habe gestern einen neuen Laptop gekauft."
    },
    {
      sentence: "Siehst du ___ (der Hund) dort drüben?",
      options: ["den Hund", "dem Hund", "der Hund", "des Hundes"],
      correct: "den Hund",
      rule: "الفعل sehen يتطلب Akkusativ. der Hund تصبح den Hund.",
      fullSentence: "Siehst du den Hund dort drüben?"
    },
    {
      sentence: "Herr Müller ruft ___ (du) gleich an.",
      options: ["dich", "dir", "dein", "du"],
      correct: "dich",
      rule: "الفعل anrufen يتطلب Akkusativ. ضمير du في الأكوزاتيف هو dich.",
      fullSentence: "Herr Müller ruft dich gleich an."
    },
    {
      sentence: "Ich brauche ___ (deine Hilfe - Feminin).",
      options: ["deine Hilfe", "deiner Hilfe", "deinen Hilfe", "deinem Hilfe"],
      correct: "deine Hilfe",
      rule: "الفعل brauchen يتطلب Akkusativ. أداة المؤنث لا تتغير (deine Hilfe).",
      fullSentence: "Ich brauche deine Hilfe."
    },

    // --- Wechselpräpositionen (Wohin = Akkusativ / Wo = Dativ) ---
    {
      sentence: "Ich stelle das Buch auf ___ (der Tisch) [Wohin? حركة].",
      options: ["den Tisch", "dem Tisch", "der Tisch", "des Tisches"],
      correct: "den Tisch",
      rule: "حركة إلى مكان (Wohin? stellen): نستخدم Akkusativ ➔ auf den Tisch.",
      fullSentence: "Ich stelle das Buch auf den Tisch."
    },
    {
      sentence: "Das Buch liegt auf ___ (der Tisch) [Wo? سكون].",
      options: ["dem Tisch", "den Tisch", "der Tisch", "des Tisches"],
      correct: "dem Tisch",
      rule: "سكون وثبات في المكان (Wo? liegen): نستخدم Dativ ➔ auf dem Tisch.",
      fullSentence: "Das Buch liegt auf dem Tisch."
    },
    {
      sentence: "Er hängt das Bild an ___ (die Wand) [Wohin? حركة].",
      options: ["die Wand", "der Wand", "den Wand", "dem Wand"],
      correct: "die Wand",
      rule: "حركة وتعليق (Wohin?): نستخدم Akkusativ. die Wand تبقى die Wand.",
      fullSentence: "Er hängt das Bild an die Wand."
    },
    {
      sentence: "Das Bild hängt an ___ (die Wand) [Wo? سكون].",
      options: ["der Wand", "die Wand", "den Wand", "dem Wand"],
      correct: "der Wand",
      rule: "سكون وثبات على الجدار (Wo?): نستخدم Dativ. die Wand تصبح der Wand.",
      fullSentence: "Das Bild hängt an der Wand."
    }
  ],

  pool: [],
  currentIndex: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  timeLeft: 60,
  timerInterval: null,
  isPlaying: false,

  initPool() {
    this.pool = Utils.shuffle([...this.questions]);
  },

  render(container) {
    this.initPool();
    const data = Storage.load();
    const highScore = (data.games && data.games.kasusGame) ? data.games.kasusGame.highScore : 0;

    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="card text-center" style="margin-bottom: 24px; padding: 40px 24px;">
          <div style="font-size: 2.8rem; margin-bottom: 12px;">🛡️</div>
          <h2 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 8px;">تحدي الإعراب الألماني (Kasus Trainer)</h2>
          <p class="text-secondary" style="max-width: 540px; margin: 0 auto 20px auto; font-size: 1rem; line-height: 1.6;">
            اختبر مهارتك في حالات الإعراب الثلاث: <strong>Akkusativ</strong> و <strong>Dativ</strong> و <strong>Genitiv</strong> وحروف الجر المشتركة تحت ضغط الوقت (60 ثانية)!
          </p>
          <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 24px;">
            <div class="badge badge-warning">⏱️ 60 ثانية</div>
            <div class="badge badge-primary">🏆 أفضل نتيجة: ${highScore}</div>
          </div>
          <button class="btn btn-primary btn-lg" onclick="KasusGame.start()">ابدأ التحدي الآن ⚡</button>
        </div>
      </div>
    `;
  },

  start() {
    this.initPool();
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.currentIndex = 0;
    this.timeLeft = 60;
    this.isPlaying = true;

    this.renderGameScreen();
    this.showNextQuestion();

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      const timerFill = document.getElementById('kasus-timer-fill');
      const timerCount = document.getElementById('kasus-timer-count');
      if (timerCount) timerCount.textContent = this.timeLeft + 's';
      if (timerFill) timerFill.style.width = ((this.timeLeft / 60) * 100) + '%';

      if (this.timeLeft <= 0) {
        this.endGame();
      }
    }, 1000);
  },

  renderGameScreen() {
    const container = document.getElementById('app-content');
    container.innerHTML = `
      <div class="article-game-container fade-in">
        <!-- Stats Header -->
        <div class="game-hud">
          <div class="hud-item">
            <span class="hud-label">النقاط</span>
            <span class="hud-value" id="kasus-score">0</span>
          </div>
          <div class="hud-item hud-timer">
            <span class="hud-label">الوقت المتبقي</span>
            <span class="hud-value timer-pulse" id="kasus-timer-count">${this.timeLeft}s</span>
          </div>
          <div class="hud-item">
            <span class="hud-label">سلسلة الإجابات</span>
            <span class="hud-value" id="kasus-streak" style="color: var(--accent);">🔥 0</span>
          </div>
        </div>

        <!-- Timer Bar -->
        <div class="timer-bar" style="margin-bottom: 24px;">
          <div class="timer-bar-fill" id="kasus-timer-fill" style="width: 100%;"></div>
        </div>

        <!-- Question Card -->
        <div class="card text-center" id="kasus-question-card" style="padding: 36px 24px; min-height: 240px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <div id="kasus-sentence-display" style="font-size: 1.35rem; font-weight: 700; margin-bottom: 24px; line-height: 1.6; direction: ltr; font-family: var(--font-de);">
            <!-- Populated dynamically -->
          </div>
          <div id="kasus-feedback-box" style="min-height: 32px; font-size: 0.95rem; margin-bottom: 8px;"></div>
        </div>

        <!-- 4 Options Grid -->
        <div id="kasus-options-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 20px;">
          <!-- Dynamically filled with buttons -->
        </div>
      </div>
    `;
  },

  showNextQuestion() {
    if (!this.isPlaying) return;

    if (this.currentIndex >= this.pool.length) {
      this.initPool();
      this.currentIndex = 0;
    }

    const item = this.pool[this.currentIndex];
    const sentenceDisplay = document.getElementById('kasus-sentence-display');
    const optionsGrid = document.getElementById('kasus-options-grid');
    const feedbackBox = document.getElementById('kasus-feedback-box');

    if (!sentenceDisplay || !optionsGrid) return;

    feedbackBox.innerHTML = '';
    sentenceDisplay.innerHTML = `
      <span class="de-text" style="color: var(--text-primary);">${item.sentence.replace('___', '<span style="border-bottom: 3px solid var(--accent); padding: 0 12px; color: var(--accent);">???</span>')}</span>
    `;

    // Shuffle options for fair challenge
    const shuffledOptions = Utils.shuffle([...item.options]);
    optionsGrid.innerHTML = shuffledOptions.map(opt => `
      <button class="btn btn-secondary btn-lg kasus-option-btn" 
              onclick="KasusGame.handleAnswer('${opt.replace(/'/g, "\\'")}', this)"
              style="font-family: var(--font-de); direction: ltr; font-size: 1.15rem; font-weight: 700; padding: 16px;">
        ${Utils.escapeHtml(opt)}
      </button>
    `).join('');
  },

  handleAnswer(selected, btn) {
    if (!this.isPlaying) return;

    const item = this.pool[this.currentIndex];
    const isCorrect = (selected === item.correct);
    const allBtns = document.querySelectorAll('.kasus-option-btn');
    allBtns.forEach(b => b.disabled = true);

    const feedbackBox = document.getElementById('kasus-feedback-box');

    if (isCorrect) {
      btn.style.background = 'var(--success)';
      btn.style.color = '#fff';
      btn.style.borderColor = 'var(--success)';
      this.score += 15 + (this.streak * 2);
      this.streak++;
      if (this.streak > this.bestStreak) this.bestStreak = this.streak;

      if (feedbackBox) {
        feedbackBox.innerHTML = `<span style="color: var(--success); font-weight: 700;">✅ ${Utils.encourageCorrect()} — ${item.rule}</span>`;
      }
      if (window.Speech) Speech.speak(item.fullSentence);
    } else {
      btn.style.background = 'var(--danger)';
      btn.style.color = '#fff';
      btn.style.borderColor = 'var(--danger)';
      this.streak = 0;

      allBtns.forEach(b => {
        if (b.textContent.trim() === item.correct) {
          b.style.background = 'var(--success)';
          b.style.color = '#fff';
        }
      });

      if (feedbackBox) {
        feedbackBox.innerHTML = `<span style="color: var(--danger); font-weight: 700;">❌ الإجابة الصحيحة: ${item.correct} — ${item.rule}</span>`;
      }
      if (window.Storage) {
        Storage.addMistake({
          lessonId: "grammatik-kasus",
          question: item.sentence,
          myAnswer: selected,
          correctAnswer: item.correct,
          explanation: item.rule
        });
      }
    }

    const scoreEl = document.getElementById('kasus-score');
    const streakEl = document.getElementById('kasus-streak');
    if (scoreEl) scoreEl.textContent = this.score;
    if (streakEl) streakEl.textContent = '🔥 ' + this.streak;

    setTimeout(() => {
      this.currentIndex++;
      this.showNextQuestion();
    }, isCorrect ? 900 : 1600);
  },

  endGame() {
    this.isPlaying = false;
    clearInterval(this.timerInterval);

    const earnedXP = Math.round(this.score / 2);
    if (window.Storage) {
      Storage.saveGameScore('kasusGame', this.score);
      Storage.addXP(earnedXP);
    }
    if (window.App && window.App.updateHeaderStats) {
      window.App.updateHeaderStats();
    }

    const container = document.getElementById('app-content');
    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="card text-center" style="padding: 48px 24px;">
          <div style="font-size: 3rem; margin-bottom: 12px;">🎉</div>
          <h2 style="font-size: 1.8rem; margin-bottom: 8px;">انتهى وقت التحدي!</h2>
          <p class="text-secondary" style="font-size: 1.1rem; margin-bottom: 24px;">
            أداء رائع في تثبيت حالات الإعراب الألمانية!
          </p>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 440px; margin: 0 auto 32px auto;">
            <div class="card" style="padding: 16px; background: var(--bg-primary);">
              <div style="font-size: 0.85rem; color: var(--text-muted);">النقاط</div>
              <div style="font-size: 1.6rem; font-weight: 700; color: var(--accent);">${this.score}</div>
            </div>
            <div class="card" style="padding: 16px; background: var(--bg-primary);">
              <div style="font-size: 0.85rem; color: var(--text-muted);">أطول سلسلة</div>
              <div style="font-size: 1.6rem; font-weight: 700; color: var(--danger);">🔥 ${this.bestStreak}</div>
            </div>
            <div class="card" style="padding: 16px; background: var(--bg-primary);">
              <div style="font-size: 0.85rem; color: var(--text-muted);">نقاط XP</div>
              <div style="font-size: 1.6rem; font-weight: 700; color: var(--warning);">+${earnedXP}</div>
            </div>
          </div>

          <div style="display: flex; justify-content: center; gap: 16px;">
            <button class="btn btn-primary" onclick="KasusGame.start()">العب مرة أخرى 🔄</button>
            <a href="#/games" class="btn btn-secondary">العودة للألعاب ➔</a>
          </div>
        </div>
      </div>
    `;
  }
};
