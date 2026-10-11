// Article Game — der / die / das Sprint

const ArticleGame = {
  // Built-in starter noun pool (A1/A2 core nouns with correct articles)
  defaultNouns: [
    { noun: "Tisch", article: "der", plural: "die Tische", ar: "طاولة" },
    { noun: "Stuhl", article: "der", plural: "die Stühle", ar: "كرسي" },
    { noun: "Kugelschreiber", article: "der", plural: "die Kugelschreiber", ar: "قلم جاف" },
    { noun: "Schlüssel", article: "der", plural: "die Schlüssel", ar: "مفتاح" },
    { noun: "Bruder", article: "der", plural: "die Brüder", ar: "أخ" },
    { noun: "Vater", article: "der", plural: "die Väter", ar: "أب" },
    { noun: "Hund", article: "der", plural: "die Hunde", ar: "كلب" },
    { noun: "Apfel", article: "der", plural: "die Äpfel", ar: "تفاحة" },
    { noun: "Kaffee", article: "der", plural: "die Kaffees", ar: "قهوة" },
    { noun: "Kühlschrank", article: "der", plural: "die Kühlschränke", ar: "ثلاجة" },
    
    { noun: "Mutter", article: "die", plural: "die Mütter", ar: "أم" },
    { noun: "Schwester", article: "die", plural: "die Schwestern", ar: "أخت" },
    { noun: "Frau", article: "die", plural: "die Frauen", ar: "امرأة / زوجة" },
    { noun: "Tasche", article: "die", plural: "die Taschen", ar: "حقيبة" },
    { noun: "Uhr", article: "die", plural: "die Uhren", ar: "ساعة" },
    { noun: "Tür", article: "die", plural: "die Türen", ar: "باب" },
    { noun: "Stadt", article: "die", plural: "die Städte", ar: "مدينة" },
    { noun: "Zeitung", article: "die", plural: "die Zeitungen", ar: "جريدة" },
    { noun: "Küche", article: "die", plural: "die Küchen", ar: "مطبخ" },
    { noun: "Lampe", article: "die", plural: "die Lampen", ar: "مصباح" },
    
    { noun: "Buch", article: "das", plural: "die Bücher", ar: "كتاب" },
    { noun: "Auto", article: "das", plural: "die Autos", ar: "سيارة" },
    { noun: "Haus", article: "das", plural: "die Häuser", ar: "منزل" },
    { noun: "Kind", article: "das", plural: "die Kinder", ar: "طفل" },
    { noun: "Brot", article: "das", plural: "die Brote", ar: "خبز" },
    { noun: "Wasser", article: "das", plural: "die Wässer", ar: "ماء" },
    { noun: "Fenster", article: "das", plural: "die Fenster", ar: "نافذة" },
    { noun: "Handy", article: "das", plural: "die Handys", ar: "هاتف محمول" },
    { noun: "Bett", article: "das", plural: "die Betten", ar: "سرير" },
    { noun: "Zimmer", article: "das", plural: "die Zimmer", ar: "غرفة" }
  ],

  nounPool: [],
  currentIndex: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  timeLeft: 45,
  timerInterval: null,
  isPlaying: false,

  initPool() {
    let pool = [...this.defaultNouns];
    // Gather nouns from MASTER_VOCABULARY
    if (window.MASTER_VOCABULARY) {
      for (const item of window.MASTER_VOCABULARY) {
        if (item.article && ['der', 'die', 'das'].includes(item.article.toLowerCase())) {
          const clean = item.de.replace(/^(der|die|das)\s+/i, '');
          if (!pool.some(p => p.noun.toLowerCase() === clean.toLowerCase())) {
            pool.push({
              noun: clean,
              article: item.article.toLowerCase(),
              plural: item.plural || '',
              ar: item.ar || ''
            });
          }
        }
      }
    }

    // Gather any additional nouns from loaded lessons
    if (window.LESSONS) {
      for (const lesson of Object.values(window.LESSONS)) {
        if (lesson.vocabulary) {
          for (const v of lesson.vocabulary) {
            if (v.article && (v.article === 'der' || v.article === 'die' || v.article === 'das')) {
              const cleanNoun = v.de.replace(/^(der|die|das)\s+/i, '');
              if (!pool.some(p => p.noun.toLowerCase() === cleanNoun.toLowerCase())) {
                pool.push({
                  noun: cleanNoun,
                  article: v.article.toLowerCase(),
                  plural: v.plural || '',
                  ar: v.ar || ''
                });
              }
            }
          }
        }
      }
    }
    this.nounPool = Utils.shuffle(pool);
  },

  render(container) {
    this.initPool();
    const storageData = Storage.load();
    const highScore = (storageData.games && storageData.games.articleGame) ? storageData.games.articleGame.highScore : 0;

    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="card text-center" style="margin-bottom: 24px;">
          <div style="font-size: 2.5rem; margin-bottom: 10px;">🎯</div>
          <h2>تحدي أدوات التعريف (der / die / das)</h2>
          <p class="text-secondary" style="margin: 10px 0 16px 0;">
            اختر أداة التعريف الصحيحة للاسم بأسرع ما يمكن قبل انتهاء الوقت!
          </p>
          <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
            <div class="badge badge-warning">⏱️ الوقت: 45 ثانية</div>
            <div class="badge badge-primary">🏆 أفضل نتيجة: ${highScore}</div>
          </div>
          <button class="btn btn-primary btn-lg" onclick="ArticleGame.start()">ابدأ اللعب الآن</button>
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
    this.timeLeft = 45;
    this.isPlaying = true;

    this.renderGameScreen();
    this.showNextNoun();

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      const timerFill = document.getElementById('game-timer-fill');
      const timerCount = document.getElementById('timer-count');
      if (timerCount) timerCount.textContent = this.timeLeft + 's';
      if (timerFill) timerFill.style.width = ((this.timeLeft / 45) * 100) + '%';

      if (this.timeLeft <= 0) {
        this.endGame();
      }
    }, 1000);
  },

  renderGameScreen() {
    const container = document.getElementById('app-content');
    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="game-stats-bar">
          <div class="game-stat-item">
            <span class="stat-label">النقاط</span>
            <span class="stat-num" id="current-score">0</span>
          </div>
          <div class="game-stat-item">
            <span class="stat-label">المتتالية</span>
            <span class="stat-num" id="current-streak">🔥 0</span>
          </div>
          <div class="game-stat-item">
            <span class="stat-label">الوقت المتبقي</span>
            <span class="stat-num" id="timer-count">45s</span>
          </div>
        </div>

        <div class="game-timer-bar">
          <div id="game-timer-fill" class="game-timer-fill" style="width: 100%;"></div>
        </div>

        <div class="word-display-card" id="word-card">
          <div class="current-noun" id="target-noun">...</div>
          <div class="noun-meaning" id="target-meaning">...</div>
          <div class="noun-plural-hint" id="target-plural"></div>
        </div>

        <div class="article-buttons-grid">
          <button class="article-choice-btn btn-der" onclick="ArticleGame.pickArticle('der')">der</button>
          <button class="article-choice-btn btn-die" onclick="ArticleGame.pickArticle('die')">die</button>
          <button class="article-choice-btn btn-das" onclick="ArticleGame.pickArticle('das')">das</button>
        </div>

        <div style="margin-top: 20px;">
          <button class="btn btn-secondary btn-sm" onclick="ArticleGame.endGame()">إنهاء اللعبة</button>
        </div>
      </div>
    `;
  },

  showNextNoun() {
    if (this.currentIndex >= this.nounPool.length) {
      this.initPool();
      this.currentIndex = 0;
    }

    const item = this.nounPool[this.currentIndex];
    const nounEl = document.getElementById('target-noun');
    const meaningEl = document.getElementById('target-meaning');
    const pluralEl = document.getElementById('target-plural');

    if (nounEl) nounEl.textContent = item.noun;
    if (meaningEl) meaningEl.textContent = item.ar || '';
    if (pluralEl) pluralEl.textContent = item.plural ? `الجمع: ${item.plural}` : '';

    // Play pronunciation if available
    Speech.speak(item.noun);
  },

  pickArticle(selected) {
    if (!this.isPlaying) return;

    const currentItem = this.nounPool[this.currentIndex];
    const cardEl = document.getElementById('word-card');

    if (selected === currentItem.article) {
      // Correct!
      this.score += 10;
      this.streak++;
      if (this.streak > this.bestStreak) this.bestStreak = this.streak;

      // Bonus points for streaks
      if (this.streak >= 5) this.score += 5;

      if (cardEl) {
        cardEl.style.borderColor = 'var(--success)';
        cardEl.style.background = 'rgba(16, 185, 129, 0.1)';
      }
    } else {
      // Wrong!
      this.streak = 0;
      if (cardEl) {
        cardEl.style.borderColor = 'var(--danger)';
        cardEl.style.background = 'rgba(239, 68, 68, 0.1)';
      }
      Utils.showToast(`خطأ! الأداة هي: ${currentItem.article} ${currentItem.noun}`, 'error', 1500);
    }

    // Update displays
    const scoreEl = document.getElementById('current-score');
    const streakEl = document.getElementById('current-streak');
    if (scoreEl) scoreEl.textContent = this.score;
    if (streakEl) streakEl.textContent = `🔥 ${this.streak}`;

    this.currentIndex++;

    setTimeout(() => {
      if (cardEl) {
        cardEl.style.borderColor = 'var(--border)';
        cardEl.style.background = 'var(--bg-card)';
      }
      if (this.isPlaying) {
        this.showNextNoun();
      }
    }, 250);
  },

  endGame() {
    this.isPlaying = false;
    clearInterval(this.timerInterval);

    // Save score and add XP
    const xpGained = Math.round(this.score / 2);
    Storage.saveGameScore('articleGame', this.score);
    if (xpGained > 0) Storage.addXP(xpGained);

    const container = document.getElementById('app-content');
    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="game-over-box">
          <div class="game-over-icon">🏁</div>
          <h2 class="game-over-title">انتهت اللعبة!</h2>
          <p class="text-secondary">نتيجتك في هذا التحدي:</p>
          
          <div class="final-score-pill">${this.score} نقطة</div>
          
          <div style="display: flex; justify-content: center; gap: 24px; margin: 16px 0 24px 0;">
            <div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">أطول متتالية</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: var(--streak-color);">🔥 ${this.bestStreak}</div>
            </div>
            <div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">الخبرة المكتسبة</div>
              <div style="font-size: 1.4rem; font-weight: 700; color: var(--xp-color);">+${xpGained} XP</div>
            </div>
          </div>

          <div style="display: flex; justify-content: center; gap: 12px;">
            <button class="btn btn-primary" onclick="ArticleGame.start()">العب مرة أخرى</button>
            <a href="#/games" class="btn btn-secondary">قائمة الألعاب</a>
          </div>
        </div>
      </div>
    `;

    // Update topbar badges
    if (window.App && window.App.updateHeaderStats) {
      window.App.updateHeaderStats();
    }
  }
};
