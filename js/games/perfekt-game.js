// js/games/perfekt-game.js — Perfekt Challenge: haben oder sein?

const PerfektGame = {
  pool: [],
  currentIndex: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  timeLeft: 45,
  timerInterval: null,
  isPlaying: false,

  initPool() {
    const raw = window.VERBS_DATABASE || [];
    this.pool = Utils.shuffle([...raw]);
  },

  render(container) {
    this.initPool();
    const data = Storage.load();
    const highScore = (data.games && data.games.perfektGame) ? data.games.perfektGame.highScore : 0;

    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="card text-center" style="margin-bottom: 24px; padding: 40px 24px;">
          <div style="font-size: 2.8rem; margin-bottom: 12px;">⏳</div>
          <h2 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 8px;">تحدي الماضي التام: haben أم sein؟</h2>
          <p class="text-secondary" style="max-width: 500px; margin: 0 auto 20px auto; font-size: 1rem; line-height: 1.6;">
            اختر الفعل المساعد الصحيح (hat أو ist) لكل فعل بأسرع ما يمكن قبل نفاد الوقت (45 ثانية)!
          </p>
          <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 24px;">
            <div class="badge badge-warning">⏱️ 45 ثانية</div>
            <div class="badge badge-primary">🏆 أفضل نتيجة: ${highScore}</div>
          </div>
          <button class="btn btn-primary btn-lg" onclick="PerfektGame.start()">ابدأ التحدي الآن ⚡</button>
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
    this.showNextVerb();

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      const timerFill = document.getElementById('perfekt-timer-fill');
      const timerCount = document.getElementById('perfekt-timer-count');
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
            <span class="stat-num" id="perfekt-score">0</span>
          </div>
          <div class="game-stat-item">
            <span class="stat-label">المتتالية</span>
            <span class="stat-num" id="perfekt-streak">🔥 0</span>
          </div>
          <div class="game-stat-item">
            <span class="stat-label">الوقت المتبقي</span>
            <span class="stat-num" id="perfekt-timer-count">45s</span>
          </div>
        </div>

        <div class="game-timer-bar">
          <div id="perfekt-timer-fill" class="game-timer-fill" style="width: 100%;"></div>
        </div>

        <div class="word-display-card" id="perfekt-card" style="padding: 36px 20px;">
          <div class="current-noun" id="perfekt-target-verb">...</div>
          <div class="noun-meaning" id="perfekt-target-meaning">...</div>
          <div class="noun-plural-hint" id="perfekt-partizip-hint" style="color: var(--accent); font-weight: 700; font-size: 1.1rem; margin-top: 12px;">...</div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
          <button class="article-choice-btn" style="background: #2563EB; font-size: 1.8rem;" onclick="PerfektGame.pickAux('hat')">
            hat (haben)
          </button>
          <button class="article-choice-btn" style="background: #059669; font-size: 1.8rem;" onclick="PerfektGame.pickAux('ist')">
            ist (sein)
          </button>
        </div>

        <div>
          <button class="btn btn-secondary btn-sm" onclick="PerfektGame.endGame()">إنهاء التحدي</button>
        </div>
      </div>
    `;
  },

  showNextVerb() {
    if (this.currentIndex >= this.pool.length) {
      this.initPool();
      this.currentIndex = 0;
    }

    const item = this.pool[this.currentIndex];
    const verbEl = document.getElementById('perfekt-target-verb');
    const meaningEl = document.getElementById('perfekt-target-meaning');
    const hintEl = document.getElementById('perfekt-partizip-hint');

    if (verbEl) verbEl.textContent = item.infinitive;
    if (meaningEl) meaningEl.textContent = item.ar || '';
    if (hintEl) hintEl.textContent = `Partizip II: ${item.partizip2}`;

    Speech.speak(item.infinitive);
  },

  pickAux(selected) {
    if (!this.isPlaying) return;

    const currentItem = this.pool[this.currentIndex];
    const cardEl = document.getElementById('perfekt-card');

    if (selected === currentItem.hilfsverb) {
      this.score += 10;
      this.streak++;
      if (this.streak > this.bestStreak) this.bestStreak = this.streak;
      if (this.streak >= 5) this.score += 5;

      if (cardEl) {
        cardEl.style.borderColor = 'var(--success)';
        cardEl.style.background = 'rgba(16, 185, 129, 0.08)';
      }
    } else {
      this.streak = 0;
      if (cardEl) {
        cardEl.style.borderColor = 'var(--danger)';
        cardEl.style.background = 'rgba(239, 68, 68, 0.08)';
      }
      Storage.addMistake({
        lessonId: 'perfekt-game',
        question: `الفعل المساعد في الماضي التام: ${currentItem.verb} (${currentItem.ar})`,
        myAnswer: `${selected} ${currentItem.partizip2}`,
        correctAnswer: `${currentItem.hilfsverb} ${currentItem.partizip2}`,
        explanation: `الصحيح هو ${currentItem.hilfsverb} ${currentItem.partizip2}. القاعدة: ${currentItem.hilfsverb === 'ist' ? 'أفعال الحركة وتغير الحالة تأخذ sein' : 'الأفعال المتعدية والسكون تأخذ haben'}.`
      });
      Utils.showToast(`خطأ! الصحيح هو: ${currentItem.hilfsverb} ${currentItem.partizip2}`, 'error', 1600);
    }

    const scoreEl = document.getElementById('perfekt-score');
    const streakEl = document.getElementById('perfekt-streak');
    if (scoreEl) scoreEl.textContent = this.score;
    if (streakEl) streakEl.textContent = `🔥 ${this.streak}`;

    this.currentIndex++;

    setTimeout(() => {
      if (cardEl) {
        cardEl.style.borderColor = 'var(--border)';
        cardEl.style.background = 'var(--bg-card)';
      }
      if (this.isPlaying) {
        this.showNextVerb();
      }
    }, 250);
  },

  endGame() {
    this.isPlaying = false;
    clearInterval(this.timerInterval);

    const xpGained = Math.round(this.score / 2);
    Storage.saveGameScore('perfektGame', this.score);
    if (xpGained > 0) Storage.addXP(xpGained);

    const container = document.getElementById('app-content');
    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="game-over-box">
          <div class="game-over-icon">🏁</div>
          <h2 class="game-over-title">انتهى تحدي haben أو sein!</h2>
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
            <button class="btn btn-primary" onclick="PerfektGame.start()">العب مرة أخرى</button>
            <a href="#/games" class="btn btn-secondary">قائمة الألعاب</a>
          </div>
        </div>
      </div>
    `;

    if (window.App && window.App.updateHeaderStats) {
      window.App.updateHeaderStats();
    }
  }
};
window.PerfektGame = PerfektGame;
