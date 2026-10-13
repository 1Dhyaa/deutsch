// js/games/phrases-game.js — Wortschatz & Phrasen-Trainer (ترجمة العبارات والمفردات)

const PhrasesGame = {
  phrases: [
    // --- Alltag & Begrüßung (الحياة اليومية) ---
    {
      ar: "كيف حالك اليوم؟ (غير رسمي)",
      de: "Wie geht es dir heute?",
      words: ["Wie", "geht", "es", "dir", "heute", "?"],
      category: "الحياة اليومية",
      tip: "السؤال عن الحال غير الرسمي مع du يستخدم الضمير في حالة الداتيف: dir."
    },
    {
      ar: "يسعدني جداً التعرف عليك!",
      de: "Es freut mich sehr, Sie kennenzulernen!",
      words: ["Es", "freut", "mich", "sehr,", "Sie", "kennenzulernen!"],
      category: "الحياة اليومية",
      tip: "تعبير رسمي مهذب يُستخدم عند مقابلة شخص لأول مرة."
    },
    {
      ar: "أتمنى لك عطلة نهاية أسبوع جميلة!",
      de: "Ich wünsche dir ein schönes Wochenende!",
      words: ["Ich", "wünsche", "dir", "ein", "schönes", "Wochenende!"],
      category: "الحياة اليومية",
      tip: "das Wochenende محايد، والصفة بعد أداة النكرة في الأكوزاتيف تأخذ -es: ein schönes Wochenende."
    },
    {
      ar: "للأسف ليس لدي وقت اليوم.",
      de: "Leider habe ich heute keine Zeit.",
      words: ["Leider", "habe", "ich", "heute", "keine", "Zeit."],
      category: "الحياة اليومية",
      tip: "بدأت الجملة بالظرف Leider (موقع 1)، فانتقل الفعل habe للموقع 2 والفاعل للموقع 3 (Inversion)."
    },
    {
      ar: "هل يمكنك التحدث ببطء أكثر من فضلك؟",
      de: "Können Sie bitte etwas langsamer sprechen?",
      words: ["Können", "Sie", "bitte", "etwas", "langsamer", "sprechen?"],
      category: "الحياة اليومية",
      tip: "سؤال مهذب باستخدام فعل Können، والمصدر sprechen يذهب لآخر السؤال."
    },

    // --- Beim Arzt & Gesundheit (عند الطبيب والصحة) ---
    {
      ar: "أود حجز موعد لدى الطبيب.",
      de: "Ich möchte einen Termin beim Arzt vereinbaren.",
      words: ["Ich", "möchte", "einen", "Termin", "beim", "Arzt", "vereinbaren."],
      category: "الصحة والطبيب",
      tip: "der Termin مذكر في حالة النصب (einen Termin)، وحرف الجر beim = bei dem (Dativ)."
    },
    {
      ar: "رأسي يؤلمني بشدة منذ الأمس.",
      de: "Mein Kopf tut mir seit gestern sehr weh.",
      words: ["Mein", "Kopf", "tut", "mir", "seit", "gestern", "sehr", "weh."],
      category: "الصحة والطبيب",
      tip: "الفعل wehtun منفصل، وضمير المتكلم يأتي في حالة الداتيف: tut mir weh."
    },
    {
      ar: "هل يجب علي تناول هذا الدواء يومياً؟",
      de: "Muss ich diese Medizin täglich einnehmen?",
      words: ["Muss", "ich", "diese", "Medizin", "täglich", "einnehmen?"],
      category: "الصحة والطبيب",
      tip: "تناول الدواء بالألمانية يستخدم الفعل einnehmen وليس essen."
    },
    {
      ar: "أتمنى لك الشفاء العاجل!",
      de: "Gute Besserung und erhol dich gut!",
      words: ["Gute", "Besserung", "und", "erhol", "dich", "gut!"],
      category: "الصحة والطبيب",
      tip: "العبارة الأكثر شيوعاً في ألمانيا للتمني بالشفاء هي: Gute Besserung!"
    },

    // --- Einkaufen & Restaurant (التسوق والمطعم) ---
    {
      ar: "كم تكلفة هذا الكيلو من التفاح؟",
      de: "Wie viel kostet ein Kilo Äpfel?",
      words: ["Wie", "viel", "kostet", "ein", "Kilo", "Äpfel?"],
      category: "التسوق والمطعم",
      tip: "السؤال عن السعر باستخدام Wie viel kostet..."
    },
    {
      ar: "نود أن ندفع الحساب من فضلك.",
      de: "Wir möchten bitte bezahlen.",
      words: ["Wir", "möchten", "bitte", "bezahlen."],
      category: "التسوق والمطعم",
      tip: "طلب الفاتورة في المطعم بأدب باستخدام Wir möchten bitte bezahlen."
    },
    {
      ar: "هل يمكنني الدفع ببطاقة الائتمان؟",
      de: "Kann ich mit Karte bezahlen?",
      words: ["Kann", "ich", "mit", "Karte", "bezahlen?"],
      category: "التسوق والمطعم",
      tip: "الدفع بالبطاقة يستخدم mit Karte."
    },
    {
      ar: "أنا أبحث عن بنطال أسود مقاس أربعين.",
      de: "Ich suche eine schwarze Hose in Größe vierzig.",
      words: ["Ich", "suche", "eine", "schwarze", "Hose", "in", "Größe", "vierzig."],
      category: "التسوق والمطعم",
      tip: "die Hose مؤنث، والصفة بعد eine تأخذ -e في Akkusativ."
    },

    // --- Arbeit & Beruf (العمل والمكتب) ---
    {
      ar: "سأرسل لك الملف عبر البريد الإلكتروني.",
      de: "Ich schicke dir die Datei per E-Mail.",
      words: ["Ich", "schicke", "dir", "die", "Datei", "per", "E-Mail."],
      category: "العمل والمهنة",
      tip: "إرسال شيء لشخص: الشخص داتيف (dir) والشيء أكوزاتيف (die Datei)."
    },
    {
      ar: "اجتماعنا القادم يبدأ في تمام الساعة التاسعة.",
      de: "Unser nächstes Meeting beginnt um punkt neun Uhr.",
      words: ["Unser", "nächstes", "Meeting", "beginnt", "um", "punkt", "neun", "Uhr."],
      category: "العمل والمهنة",
      tip: "الساعات المحددة تأخذ دائماً حرف الجر um."
    },
    {
      ar: "يجب علي إنهاء هذا التقرير اليوم.",
      de: "Ich muss diesen Bericht heute fertigstellen.",
      words: ["Ich", "muss", "diesen", "Bericht", "heute", "fertigstellen."],
      category: "العمل والمهنة",
      tip: "der Bericht مذكر في حالة النصب (diesen Bericht)، والمصدر fertigstellen في النهاية."
    },
    {
      ar: "سأكون في إجازة الأسبوع القادم.",
      de: "Ich bin nächste Woche im Urlaub.",
      words: ["Ich", "bin", "nächste", "Woche", "im", "Urlaub."],
      category: "العمل والمهنة",
      tip: "التواجد في عطلة يُقال: im Urlaub sein."
    },

    // --- Meinung & Diskussion (إبداء الرأي والنقاش) ---
    {
      ar: "في رأيي هذا الاقتراح ممتاز جداً.",
      de: "Meiner Meinung nach ist dieser Vorschlag ausgezeichnet.",
      words: ["Meiner", "Meinung", "nach", "ist", "dieser", "Vorschlag", "ausgezeichnet."],
      category: "إبداء الرأي",
      tip: "التركيب Meiner Meinung nach يأخذ داتيف ويحتل الموقع 1، فيليه الفعل ist فوراً."
    },
    {
      ar: "أنا أتفق معك تماماً في هذه النقطة.",
      de: "Ich stimme dir in diesem Punkt völlig zu.",
      words: ["Ich", "stimme", "dir", "in", "diesem", "Punkt", "völlig", "zu."],
      category: "إبداء الرأي",
      tip: "الفعل zustimmen منفصل ويأخذ Dativ للشخص (dir)، والسابقة zu في آخر الجملة."
    },
    {
      ar: "أنا أرى الأمر بطريقة مختلفة تماماً.",
      de: "Das sehe ich ganz anders.",
      words: ["Das", "sehe", "ich", "ganz", "anders."],
      category: "إبداء الرأي",
      tip: "تقديم Das في بداية الجملة للتركيز عليها يتبعه الفعل sehe في الموقع 2."
    },
    {
      ar: "أعتقد أن تعلم اللغة الألمانية مهم ومفيد.",
      de: "Ich glaube, dass Deutschlernen sehr nützlich ist.",
      words: ["Ich", "glaube,", "dass", "Deutschlernen", "sehr", "nützlich", "ist."],
      category: "إبداء الرأي",
      tip: "بعد الرابط dass (أنّ) يتحرك الفعل المصرف ist إلى نهاية الجملة الفرعية."
    },

    // --- Unterwegs & Verkehr (المواصلات والطريق) ---
    {
      ar: "من أي رصيف يغادر القطار المتجه إلى برلين؟",
      de: "Von welchem Gleis fährt der Zug nach Berlin ab?",
      words: ["Von", "welchem", "Gleis", "fährt", "der", "Zug", "nach", "Berlin", "ab?"],
      category: "المواصلات",
      tip: "das Gleis محايد، بعد von (Dativ) تصبح von welchem Gleis."
    },
    {
      ar: "هل يجب علي تبديل القطار في فرانكفورت؟",
      de: "Muss ich in Frankfurt umsteigen?",
      words: ["Muss", "ich", "in", "Frankfurt", "umsteigen?"],
      category: "المواصلات",
      tip: "تبديل وسيلة المواصلات هو الفعل umsteigen."
    },
    {
      ar: "عذراً، كيف أصل إلى محطة القطار الرئيسية؟",
      de: "Entschuldigung, wie komme ich zum Hauptbahnhof?",
      words: ["Entschuldigung,", "wie", "komme", "ich", "zum", "Hauptbahnhof?"],
      category: "المواصلات",
      tip: "السؤال عن الوجهة: zum Hauptbahnhof (zu + dem)."
    },

    // --- Gefühle & Reaktionen (ردود الفعل والتعجب) ---
    {
      ar: "هذا يبدو رائعاً حقاً!",
      de: "Das klingt wirklich fantastisch!",
      words: ["Das", "klingt", "wirklich", "fantastisch!"],
      category: "ردود الفعل",
      tip: "التعبير عن إعجابك بفكرة سمعتها: Das klingt..."
    },
    {
      ar: "يا للأسف، كم هذا مؤسف!",
      de: "Wie schade, das tut mir leid!",
      words: ["Wie", "schade,", "das", "tut", "mir", "leid!"],
      category: "ردود الفعل",
      tip: "تعبير تعاطف فوري عند سماع خبر غير سار."
    },
    {
      ar: "لا تقلق، كل شيء سيكون على ما يرام.",
      de: "Keine Sorge, alles wird gut.",
      words: ["Keine", "Sorge,", "alles", "wird", "gut."],
      category: "ردود الفعل",
      tip: "عبارة طمأنة وتخفيف شائعة جداً في المحادثات."
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
    this.pool = Utils.shuffle([...this.phrases]);
  },

  render(container) {
    this.initPool();
    const data = Storage.load();
    const highScore = (data.games && data.games.phrasesGame) ? data.games.phrasesGame.highScore : 0;

    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="card text-center" style="margin-bottom: 24px; padding: 40px 24px;">
          <div style="font-size: 2.8rem; margin-bottom: 12px;">💬</div>
          <h2 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 8px;">تحدي المفردات والترجمة الفورية (Phrasen-Trainer)</h2>
          <p class="text-secondary" style="max-width: 580px; margin: 0 auto 20px auto; font-size: 1rem; line-height: 1.6;">
            تعرض لك عبارة عربية حقيقية من مواقف الحياة اليومية وامتحانات Goethe، ومهمتك تركيب الجملة الألمانية الصحيحة بدقة باستخدام بنك الكلمات أو الكتابة، مع استماع فوري للنطق!
          </p>
          <div style="display: flex; justify-content: center; gap: 16px; margin-bottom: 24px; flex-wrap: wrap;">
            <div class="badge badge-warning">🎯 25+ عبارة ذهبية</div>
            <div class="badge badge-primary">🏆 أعلى نتيجة: ${highScore}</div>
            <div class="badge badge-success">🔊 نطق صوتي فوري</div>
          </div>
          <button class="btn btn-primary btn-lg" onclick="PhrasesGame.start()">ابدأ التدريب الآن 🚀</button>
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
    // Shuffle available tokens
    this.availableTokens = Utils.shuffle([...item.words]);

    this.renderCurrentQuestion(item);
  },

  renderCurrentQuestion(item) {
    const container = document.getElementById('app-content');
    const total = Math.min(this.pool.length, 15);
    const currentNum = this.currentIndex + 1;

    container.innerHTML = `
      <div class="article-game-container fade-in">
        <!-- HUD -->
        <div class="game-hud" style="margin-bottom: 20px;">
          <div class="hud-item">
            <span class="hud-label">التقدم</span>
            <span class="hud-value">${currentNum} / ${total}</span>
          </div>
          <div class="hud-item">
            <span class="hud-label">النقاط</span>
            <span class="hud-value" id="phrases-score">${this.score}</span>
          </div>
          <div class="hud-item">
            <span class="hud-label">السلسلة</span>
            <span class="hud-value" style="color: var(--accent);">🔥 ${this.streak}</span>
          </div>
        </div>

        <!-- Question Card -->
        <div class="card" style="padding: 28px 24px; margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <span class="badge badge-secondary">${item.category}</span>
            <button class="btn btn-secondary btn-sm audio-btn" style="width:auto; height:auto; border-radius:var(--radius-sm); padding:6px 14px; gap:6px;" onclick="Speech.speak('${item.de.replace(/'/g, "\\'")}')" title="استمع للجملة بالصوت الطبيعي">
              🔊 استمع للجملة
            </button>
          </div>

          <!-- Prompt in Arabic -->
          <div style="background: var(--bg-primary); border-right: 4px solid var(--accent); padding: 16px 20px; border-radius: var(--radius-sm); margin-bottom: 20px;">
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); line-height: 1.5;">
              ${Utils.escapeHtml(item.ar)}
            </div>
          </div>

          <!-- Chosen Words Dropzone -->
          <div style="margin-bottom: 8px; font-size: 0.88rem; font-weight: 600; color: var(--text-secondary);">
            1️⃣ ركّب الجملة بالنقر على الكلمات:
          </div>
          <div id="phrases-dropzone" style="min-height: 56px; border: 2px dashed var(--border); border-radius: var(--radius-md); padding: 10px; margin-bottom: 16px; display: flex; flex-wrap: wrap; gap: 8px; direction: ltr; justify-content: flex-start; align-items: center; background: var(--bg-card);">
            ${this.renderDropzoneContent()}
          </div>

          <!-- Available Words Bank -->
          <div style="margin-bottom: 8px; font-size: 0.88rem; font-weight: 600; color: var(--text-secondary);">
            بنك الكلمات (انقر على الكلمة لإضافتها وسماع نطقها):
          </div>
          <div id="phrases-wordbank" style="display: flex; flex-wrap: wrap; gap: 8px; direction: ltr; justify-content: flex-start; margin-bottom: 18px;">
            ${this.renderWordbankContent()}
          </div>

          <!-- Direct Text / Whisper / Voice Input Box -->
          <div style="margin-bottom: 20px; background: var(--bg-primary); padding: 12px 14px; border-radius: var(--radius-md); border: 1px solid var(--border);">
            <div style="margin-bottom: 6px; font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
              <span>2️⃣ أو اكتب / تكلّم مباشرة بالألمانية (يدعم Whisper و Win+H والميكروفون):</span>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
              <input
                type="text"
                id="phrases-text-input"
                class="form-input de-text"
                dir="ltr"
                lang="de"
                autocomplete="off"
                placeholder="Schreibe oder sprich den deutschen Satz hier..."
                style="flex: 1; padding: 10px 14px; font-size: 1rem; border-radius: var(--radius-sm); border: 1.5px solid var(--border); background: var(--bg-card); color: var(--text-primary);"
                oninput="PhrasesGame.handleTextInput(this.value)"
                onkeydown="if(event.key === 'Enter') PhrasesGame.checkAnswer()"
              />
              <button type="button" class="btn btn-secondary btn-sm" onclick="Speech.listen('phrases-text-input', this, (val) => PhrasesGame.handleTextInput(val))" title="تحدث بالألمانية (إملاء صوتي)" style="min-height: 42px; padding: 0 14px;">
                🎤 تحدث
              </button>
            </div>
          </div>

          <!-- Controls -->
          <div style="display: flex; gap: 12px; align-items: center; justify-content: space-between; flex-wrap: wrap;">
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <button class="btn btn-primary" id="phrases-check-btn" onclick="PhrasesGame.checkAnswer()" ${this.chosenTokens.length === 0 ? 'disabled' : ''}>
                تحقق من الإجابة ✅
              </button>
              <button class="btn btn-secondary btn-sm" id="phrases-reset-btn" onclick="PhrasesGame.resetTokens()" ${this.chosenTokens.length === 0 ? 'disabled' : ''}>
                إعادة تعيين ↺
              </button>
            </div>

            <div style="display: flex; gap: 8px;">
              ${this.currentIndex > 0 ? `<button class="btn btn-secondary btn-sm" onclick="PhrasesGame.prevQuestion()">⬅ السابق</button>` : ''}
              <button class="btn btn-outline btn-sm" onclick="PhrasesGame.nextQuestion()">تخطي ⏭️</button>
            </div>
          </div>

          <!-- Feedback Box -->
          <div id="phrases-feedback" style="display: none; margin-top: 20px;"></div>
        </div>
      </div>
    `;
  },

  handleTextInput(val) {
    if (this.isAnswered) return;
    const checkBtn = document.getElementById('phrases-check-btn');
    const resetBtn = document.getElementById('phrases-reset-btn');
    const hasText = (val && val.trim().length > 0) || this.chosenTokens.length > 0;
    if (checkBtn) checkBtn.disabled = !hasText;
    if (resetBtn) resetBtn.disabled = !hasText;
  },

  renderDropzoneContent() {
    if (this.chosenTokens.length === 0) {
      return `<span style="color: var(--text-muted); width: 100%; text-align: center; direction: rtl; font-size: 0.9rem;">انقر على الكلمات من الأسفل لتركيب الجملة هنا</span>`;
    }
    return this.chosenTokens.map((w, idx) => `
      <button class="btn btn-sm btn-primary chosen-token de-text" onclick="PhrasesGame.removeToken(${idx})" style="cursor: pointer;">
        ${Utils.escapeHtml(w)} ✕
      </button>
    `).join('');
  },

  renderWordbankContent() {
    return this.availableTokens.map((w, idx) => `
      <button class="btn btn-sm btn-outline avail-token de-text" onclick="PhrasesGame.addToken(${idx})" style="font-weight: 600;">
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
    this.updateTokenViews();
  },

  removeToken(idx) {
    if (this.isAnswered) return;
    const word = this.chosenTokens[idx];
    this.availableTokens.push(word);
    this.chosenTokens.splice(idx, 1);
    this.updateTokenViews();
  },

  resetTokens() {
    if (this.isAnswered) return;
    const item = this.pool[this.currentIndex];
    this.chosenTokens = [];
    this.availableTokens = Utils.shuffle([...item.words]);
    const textInput = document.getElementById('phrases-text-input');
    if (textInput) textInput.value = '';
    this.updateTokenViews();
  },

  updateTokenViews() {
    const dropzone = document.getElementById('phrases-dropzone');
    const wordbank = document.getElementById('phrases-wordbank');
    const checkBtn = document.getElementById('phrases-check-btn');
    const resetBtn = document.getElementById('phrases-reset-btn');
    const textInput = document.getElementById('phrases-text-input');
    if (dropzone) dropzone.innerHTML = this.renderDropzoneContent();
    if (wordbank) wordbank.innerHTML = this.renderWordbankContent();
    if (textInput) textInput.value = this.chosenTokens.join(' ');
    const hasContent = this.chosenTokens.length > 0 || (textInput && textInput.value.trim().length > 0);
    if (checkBtn) checkBtn.disabled = !hasContent;
    if (resetBtn) resetBtn.disabled = !hasContent;
  },

  checkAnswer() {
    const textInput = document.getElementById('phrases-text-input');
    const typedVal = textInput ? textInput.value.trim() : '';
    const userSentence = this.chosenTokens.length > 0 ? this.chosenTokens.join(' ').trim() : typedVal;

    if (this.isAnswered || !userSentence) return;
    this.isAnswered = true;
    if (textInput) textInput.disabled = true;

    const item = this.pool[this.currentIndex];
    const isCorrect = Utils.compareAnswers(userSentence, item.de);

    const feedbackEl = document.getElementById('phrases-feedback');
    const checkBtn = document.getElementById('phrases-check-btn');
    if (checkBtn) checkBtn.style.display = 'none';

    // Always play neural pronunciation of the German sentence
    Speech.speak(item.de);

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
            <h4 style="color: var(--success); margin-bottom: 6px;">${Utils.encourageCorrect()}</h4>
            <div class="de-text" style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">
              ${Utils.escapeHtml(item.de)}
            </div>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 14px;">
              💡 ${Utils.escapeHtml(item.tip)}
            </p>
            <div style="display: flex; gap: 10px;">
              <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${item.de.replace(/'/g, "\\'")}')">
                🔊 إعادة الاستماع
              </button>
              <button class="btn btn-success btn-sm" onclick="PhrasesGame.nextQuestion()">
                العبارة التالية ➔
              </button>
            </div>
          </div>
        </div>
      `;
    } else {
      this.streak = 0;
      Storage.addMistake({
        lessonId: 'phrases-game',
        question: `ترجمة: ${item.ar}`,
        myAnswer: userSentence,
        correctAnswer: item.de,
        explanation: item.tip
      });

      feedbackEl.className = 'card fade-in';
      feedbackEl.style.display = 'block';
      feedbackEl.style.background = 'rgba(239, 68, 68, 0.08)';
      feedbackEl.style.border = '1px solid var(--danger)';
      feedbackEl.innerHTML = `
        <div style="display: flex; gap: 12px; align-items: flex-start;">
          <div style="font-size: 1.8rem;">❌</div>
          <div style="flex: 1;">
            <h4 style="color: var(--danger); margin-bottom: 6px;">تحتاج إلى تصحيح!</h4>
            <div style="font-size: 0.95rem; margin-bottom: 6px;">
              <strong>إجابتك:</strong> <span class="de-text" style="color: var(--danger);">${Utils.escapeHtml(userSentence)}</span>
            </div>
            <div style="font-size: 0.95rem; margin-bottom: 6px;">
              <strong>الترتيب الصحيح:</strong> <span class="de-text" style="color: var(--success); font-weight: 700;">${Utils.escapeHtml(item.de)}</span>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 14px;">
              💡 <strong>القاعدة:</strong> ${Utils.escapeHtml(item.tip)}
            </p>
            <div style="display: flex; gap: 10px;">
              <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${item.de.replace(/'/g, "\\'")}')">
                🔊 استمع للنطق الصحيح
              </button>
              <button class="btn btn-primary btn-sm" onclick="PhrasesGame.nextQuestion()">
                متابعة ➔
              </button>
            </div>
          </div>
        </div>
      `;
    }

    const scoreEl = document.getElementById('phrases-score');
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
    if (this.currentIndex >= 15 || this.currentIndex >= this.pool.length) {
      this.endGame();
    } else {
      this.showNext();
    }
  },

  endGame() {
    Storage.saveGameScore('phrasesGame', this.score);
    Storage.updateStreak();
    App.updateHeaderStats();

    const container = document.getElementById('app-content');
    container.innerHTML = `
      <div class="article-game-container fade-in">
        <div class="card text-center" style="padding: 40px 24px;">
          <div style="font-size: 3.5rem; margin-bottom: 12px;">🏆</div>
          <h2 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 8px;">اكتملت الجولة بنجاح!</h2>
          <p class="text-secondary" style="margin-bottom: 20px;">
            أحسنت التدريب على التراكيب الألمانية الأكثر استخداماً في الحياة اليومية.
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
            <button class="btn btn-primary" onclick="PhrasesGame.start()">العب جولة جديدة ↺</button>
            <a href="#/games" class="btn btn-secondary">العودة للألعاب ➔</a>
          </div>
        </div>
      </div>
    `;
  }
};
window.PhrasesGame = PhrasesGame;
