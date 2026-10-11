// js/games/praeteritum-game.js — Präteritum Sprint Challenge

const PraeteritumGame = {
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
    const highScore = (data.games && data.games.praeteritumGame) ? data.games.praeteritumGame.highScore : 0;

    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="card text-center" style="margin-bottom: 24px; padding: 40px 24px;">
          <div style="font-size: 2.8rem; margin-bottom: 12px;">⚡</div>
          <h2 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 8px;">تحدي الماضي البسيط (Präteritum Sprint)</h2>
          <p class="text-secondary" style="max-width: 500px; margin: 0 auto 20px auto; font-size: 1rem; line-height: 1.6;">
            اختر تصريف الماضي البسيط الصحيح لكل فعل من بين 4 خيارات بأسرع ما يمكن خلال 45 ثانية!
          </p>
          <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 24px;">
            <div class="badge badge-warning">⏱️ 45 ثانية</div>
            <div class="badge badge-primary">🏆 أفضل نتيجة: ${highScore}</div>
          </div>
          <button class="btn btn-primary btn-lg" onclick="PraeteritumGame.start()">ابدأ التحدي الآن ⚡</button>
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
    this.showNextQuestion();

    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      const timerFill = document.getElementById('praeteritum-timer-fill');
      const timerCount = document.getElementById('praeteritum-timer-count');
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
            <span class="stat-num" id="praeteritum-score">0</span>
          </div>
          <div class="game-stat-item">
            <span class="stat-label">المتتالية</span>
            <span class="stat-num" id="praeteritum-streak">🔥 0</span>
          </div>
          <div class="game-stat-item">
            <span class="stat-label">الوقت المتبقي</span>
            <span class="stat-num" id="praeteritum-timer-count">45s</span>
          </div>
        </div>

        <div class="game-timer-bar">
          <div id="praeteritum-timer-fill" class="game-timer-fill" style="width: 100%;"></div>
        </div>

        <div class="word-display-card" id="praeteritum-card" style="padding: 30px 20px;">
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 6px;">ما هو تصريف Präteritum للفعل:</div>
          <div class="current-noun" id="praeteritum-target-verb">...</div>
          <div class="noun-meaning" id="praeteritum-target-meaning">...</div>
        </div>

        <div class="grid-2" id="praeteritum-options-grid" style="gap: 14px; margin-bottom: 24px;">
          <!-- 4 option buttons -->
        </div>

        <div>
          <button class="btn btn-secondary btn-sm" onclick="PraeteritumGame.endGame()">إنهاء التحدي</button>
        </div>
      </div>
    `;
  },

  generateDistractors(correctPraeteritum) {
    const allVerbs = window.VERBS_DATABASE || [];
    const pool = allVerbs.map(v => v.praeteritum).filter(p => p !== correctPraeteritum);
    const shuffled = Utils.shuffle(pool);
    const distractors = shuffled.slice(0, 3);
    const allOptions = Utils.shuffle([correctPraeteritum, ...distractors]);
    return allOptions;
  },

  showNextQuestion() {
    if (this.currentIndex >= this.pool.length) {
      this.initPool();
      this.currentIndex = 0;
    }

    const item = this.pool[this.currentIndex];
    const verbEl = document.getElementById('praeteritum-target-verb');
    const meaningEl = document.getElementById('praeteritum-target-meaning');
    const gridEl = document.getElementById('praeteritum-options-grid');

    if (verbEl) verbEl.textContent = item.infinitive;
    if (meaningEl) meaningEl.textContent = item.ar || '';

    const options = this.generateDistractors(item.praeteritum);

    if (gridEl) {
      gridEl.innerHTML = options.map(opt => `
        <button 
          class="btn btn-secondary btn-lg" 
          style="font-family: var(--font-de); font-size: 1.3rem; font-weight: 700; width: 100%; border: 2px solid var(--border);"
          onclick="PraeteritumGame.pickOption('${opt.replace(/'/g, "\\'")}', this)"
        >
          ${Utils.escapeHtml(opt)}
        </button>
      `).join('');
    }

    Speech.speak(item.infinitive);
  },

  pickOption(selected, btn) {
    if (!this.isPlaying) return;

    const currentItem = this.pool[this.currentIndex];
    const cardEl = document.getElementById('praeteritum-card');

    if (selected === currentItem.praeteritum) {
      this.score += 10;
      this.streak++;
      if (this.streak > this.bestStreak) this.bestStreak = this.streak;
      if (this.streak >= 5) this.score += 5;

      if (btn) btn.style.borderColor = 'var(--success)';
      if (cardEl) {
        cardEl.style.borderColor = 'var(--success)';
        cardEl.style.background = 'rgba(16, 185, 129, 0.08)';
      }
    } else {
      this.streak = 0;
      if (btn) btn.style.borderColor = 'var(--danger)';
      if (cardEl) {
        cardEl.style.borderColor = 'var(--danger)';
        cardEl.style.background = 'rgba(239, 68, 68, 0.08)';
      }
      Utils.showToast(`خطأ! Präteritum لـ ${currentItem.infinitive} هو: ${currentItem.praeteritum}`, 'error', 1600);
    }

    const scoreEl = document.getElementById('praeteritum-score');
    const streakEl = document.getElementById('praeteritum-streak');
    if (scoreEl) scoreEl.textContent = this.score;
    if (streakEl) streakEl.textContent = `🔥 ${this.streak}`;

    this.currentIndex++;

    setTimeout(() => {
      if (cardEl) {
        cardEl.style.borderColor = 'var(--border)';
        cardEl.style.background = 'var(--bg-card)';
      }
      if (this.isPlaying) {
        this.showNextQuestion();
      }
    }, 280);
  },

  endGame() {
    this.isPlaying = false;
    clearInterval(this.timerInterval);

    const xpGained = Math.round(this.score / 2);
    Storage.saveGameScore('praeteritumGame', this.score);
    if (xpGained > 0) Storage.addXP(xpGained);

    const container = document.getElementById('app-content');
    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="game-over-box">
          <div class="game-over-icon">🏁</div>
          <h2 class="game-over-title">انتهى تحدي Präteritum!</h2>
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
            <button class="btn btn-primary" onclick="PraeteritumGame.start()">العب مرة أخرى</button>
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
