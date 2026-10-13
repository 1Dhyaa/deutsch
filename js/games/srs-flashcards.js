// js/games/srs-flashcards.js — نظام الحفظ الذكي بالتكرار المتباعد (Smart 5-Box Leitner SRS Flashcards)

const SrsFlashcards = {
  // Built-in 40 high-frequency A2/B1 fallback vocabulary items (merged with window.MASTER_VOCABULARY)
  fallbackVocabulary: [
    { de: "der Termin", article: "der", plural: "die Termine", ar: "موعد", level: "A1", category: "Alltag", example: "Ich möchte bitte einen Termin beim Arzt vereinbaren." },
    { de: "die Bewerbung", article: "die", plural: "die Bewerbungen", ar: "طلب توظيف / ترشح", level: "A2", category: "Arbeit", example: "Ich schicke heute meine Bewerbung per E-Mail ab." },
    { de: "das Vorstellungsgespräch", article: "das", plural: "die Vorstellungsgespräche", ar: "مقابلة عمل", level: "B1", category: "Arbeit", example: "Morgen habe ich ein wichtiges Vorstellungsgespräch." },
    { de: "die Erfahrung", article: "die", plural: "die Erfahrungen", ar: "خبرة / تجربة", level: "A2", category: "Arbeit", example: "Ich habe schon drei Jahre Erfahrung in diesem Beruf." },
    { de: "der Fortschritt", article: "der", plural: "die Fortschritte", ar: "تقدّم / تطور", level: "B1", category: "Lernen", example: "Du machst jeden Tag große Fortschritte auf Deutsch." },
    { de: "die Entscheidung", article: "die", plural: "die Entscheidungen", ar: "قرار", level: "B1", category: "Leben", example: "Das war eine sehr wichtige Entscheidung für meine Zukunft." },
    { de: "der Vorschlag", article: "der", plural: "die Vorschläge", ar: "اقتراح", level: "A2", category: "Kommunikation", example: "Was hältst du von meinem Vorschlag?" },
    { de: "die Verantwortung", article: "die", plural: "-", ar: "مسؤولية", level: "B1", category: "Arbeit", example: "In diesem Beruf trägt man viel Verantwortung." },
    { de: "das Ergebnis", article: "das", plural: "die Ergebnisse", ar: "نتيجة", level: "A2", category: "Lernen", example: "Das Ergebnis der Prüfung war ausgezeichnet." },
    { de: "der Unterschied", article: "der", plural: "die Unterschiede", ar: "فرق / اختلاف", level: "A2", category: "Lernen", example: "Kannst du mir den Unterschied erklären?" },
    { de: "die Gelegenheit", article: "die", plural: "die Gelegenheiten", ar: "فرصة / مناسبة", level: "B1", category: "Leben", example: "Diese Gelegenheit solltest du unbedingt nutzen." },
    { de: "das Gedächtnis", article: "das", plural: "-", ar: "ذاكرة", level: "B1", category: "Lernen", example: "Mit Karteikarten trainiert man das Gedächtnis effektiv." },
    { de: "der Eindruck", article: "der", plural: "die Eindrücke", ar: "انطباع", level: "B1", category: "Gefühle", example: "Die neue Kollegin hat einen tollen Eindruck hinterlassen." },
    { de: "die Geduld", article: "die", plural: "-", ar: "صبر", level: "A2", category: "Eigenschaften", example: "Beim Sprachenlernen braucht man vor allem Geduld." },
    { de: "der Ratschlag", article: "der", plural: "die Ratschläge", ar: "نصيحة", level: "B1", category: "Kommunikation", example: "Vielen Dank für deinen hilfreichen Ratschlag!" },
    { de: "die Gewohnheit", article: "die", plural: "die Gewohnheiten", ar: "عادة", level: "B1", category: "Alltag", example: "Jeden Morgen zehn Wörter zu lernen ist eine gute Gewohnheit." },
    { de: "das Ziel", article: "das", plural: "die Ziele", ar: "هدف / غاية", level: "A2", category: "Leben", example: "Mein Ziel ist es, die B1-Prüfung mit Erfolg zu bestehen." },
    { de: "der Vorteil", article: "der", plural: "die Vorteile", ar: "ميزة / إيجابية", level: "B1", category: "Allgemein", example: "Mehrsprachigkeit bietet im Beruf große Vorteile." },
    { de: "der Nachteil", article: "der", plural: "die Nachteile", ar: "عيب / سلبية", level: "B1", category: "Allgemein", example: "Jede Lösung hat Vor- und Nachteile." },
    { de: "die Voraussetzung", article: "die", plural: "die Voraussetzungen", ar: "شرط أساسي / متطلب", level: "B1", category: "Arbeit", example: "Gute Deutschkenntnisse sind eine Voraussetzung für die Stelle." },
    { de: "das Verständnis", article: "das", plural: "-", ar: "تفهُّم / استيعاب", level: "B1", category: "Kommunikation", example: "Vielen Dank für Ihr Verständnis!" },
    { de: "die Unterstützung", article: "die", plural: "-", ar: "دعم / مساندة", level: "B1", category: "Alltag", example: "Ohne deine Unterstützung hätte ich das nicht geschafft." },
    { de: "der Zusammenhang", article: "der", plural: "die Zusammenhänge", ar: "سياق / ترابط", level: "B1", category: "Lernen", example: "Lerne neue Wörter immer im Zusammenhang eines Satzes." },
    { de: "die Bedingung", article: "die", plural: "die Bedingungen", ar: "شرط / ظرف", level: "B1", category: "Arbeit", example: "Die Arbeitsbedingungen in dieser Firma sind sehr fair." },
    { de: "das Verhalten", article: "das", plural: "-", ar: "سلوك / تصرف", level: "B1", category: "Gesellschaft", example: "Sein freundliches Verhalten gefällt allen Kollegen." },
    { de: "die Herausforderung", article: "die", plural: "die Herausforderungen", ar: "تحدٍّ", level: "B1", category: "Leben", example: "Ich suche eine neue berufliche Herausforderung." },
    { de: "der Aufenthalt", article: "der", plural: "die Aufenthalte", ar: "إقامة / مكوث", level: "A2", category: "Reisen", example: "Wir wünschen Ihnen einen angenehmen Aufenthalt in Berlin." },
    { de: "die Vereinbarung", article: "die", plural: "die Vereinbarungen", ar: "اتفاق / موعد متفق عليه", level: "B1", category: "Arbeit", example: "Wir haben eine klare Vereinbarung getroffen." },
    { de: "das Einkommen", article: "das", plural: "die Einkommen", ar: "دخل مالي / راتب", level: "B1", category: "Geld", example: "Das monatliche Einkommen reicht gut zum Leben." },
    { de: "die Kenntnis", article: "die", plural: "die Kenntnisse", ar: "معرفة / إلمام", level: "B1", category: "Bildung", example: "Er verfügt über sehr gute Computerkenntnisse." },
    { de: "sich erinnern an", article: "", plural: "-", ar: "يتذكر (شيئاً / شخصاً)", level: "A2", category: "Verben", example: "Ich erinnere mich gern an meinen ersten Tag in Deutschland." },
    { de: "teilnehmen an", article: "", plural: "-", ar: "يشارك في (+ Dativ)", level: "A2", category: "Verben", example: "Möchtest du an unserem Sprachkurs teilnehmen?" },
    { de: "sich vorbereiten auf", article: "", plural: "-", ar: "يستعد لـ (+ Akkusativ)", level: "A2", category: "Verben", example: "Wir bereiten uns intensiv auf die Prüfung vor." },
    { de: "abhängen von", article: "", plural: "-", ar: "يعتمد على (+ Dativ)", level: "B1", category: "Verben", example: "Unser Ausflug hängt vom Wetter ab." },
    { de: "sich kümmern um", article: "", plural: "-", ar: "يهتم بـ / يعتني بـ (+ Akk)", level: "A2", category: "Verben", example: "Sie kümmert sich liebevoll um ihre Familie." },
    { de: "überzeugt sein von", article: "", plural: "-", ar: "مقتنع بـ (+ Dativ)", level: "B1", category: "Ausdrücke", example: "Ich bin von der Qualität dieser Arbeit überzeugt." },
    { de: "in Frage kommen", article: "", plural: "-", ar: "يُؤخذ بعين الاعتبار / يكون مطروحاً", level: "B1", category: "Ausdrücke", example: "Ein Umzug kommt für uns momentan nicht in Frage." },
    { de: "Bescheid geben", article: "", plural: "-", ar: "يُخبر / يُعطي خبراً", level: "A2", category: "Ausdrücke", example: "Gib mir bitte Bescheid, sobald du angekommen bist." },
    { de: "eine Rolle spielen", article: "", plural: "-", ar: "يلعب دوراً", level: "B1", category: "Ausdrücke", example: "Pünktlichkeit spielt im Berufsleben eine große Rolle." },
    { de: "zur Verfügung stehen", article: "", plural: "-", ar: "يكون متاحاً / تحت التصرف", level: "B1", category: "Ausdrücke", example: "Für Rückfragen stehe ich Ihnen jederzeit zur Verfügung." }
  ],

  categoryLabels: {
    Alltag: "الحياة اليومية (Alltag)",
    Arbeit: "العمل والمهنة (Arbeit)",
    Beruf: "المهن والوظائف (Beruf)",
    Lernen: "التعلم والدراسة (Lernen)",
    Reisen: "السفر والمواصلات (Reisen)",
    Wohnen: "السكن والمنزل (Wohnen)",
    Gesundheit: "الصحة والطبيب (Gesundheit)",
    Kommunikation: "التواصل والحوار (Kommunikation)",
    Gefühle: "المشاعر والانطباعات (Gefühle)",
    Freizeit: "وقت الفراغ (Freizeit)",
    Leben: "الحياة والقرارات (Leben)",
    Gesellschaft: "المجتمع (Gesellschaft)",
    Bildung: "التعليم والتأهيل (Bildung)",
    Geld: "المال والبنوك (Geld)",
    Behörden: "الدوائر الرسمية (Behörden)",
    Technik: "التقنية (Technik)",
    Zeit: "الوقت والزمن (Zeit)",
    Verben: "الأفعال المهمة (Verben)",
    Ausdrücke: "التعبيرات الشائعة (Ausdrücke)",
    Adjektive: "الصفات والظروف (Adjektive)",
    Allgemein: "عام (Allgemein)"
  },

  boxMeta: [
    { id: 1, title: "صندوق 1 🔴", sub: "جديد / صعب", color: "#EF4444", bg: "rgba(239, 68, 68, 0.1)" },
    { id: 2, title: "صندوق 2 🟠", sub: "قيد التعلم", color: "#F97316", bg: "rgba(249, 115, 22, 0.1)" },
    { id: 3, title: "صندوق 3 🟡", sub: "جيد", color: "#EAB308", bg: "rgba(234, 179, 8, 0.1)" },
    { id: 4, title: "صندوق 4 🟢", sub: "ممتاز", color: "#10B981", bg: "rgba(16, 185, 129, 0.1)" },
    { id: 5, title: "المتقن 5 🏆", sub: "متقن 100%", color: "#3B82F6", bg: "rgba(59, 130, 246, 0.1)" }
  ],

  allWords: [],
  filteredDeck: [],
  currentIndex: 0,
  isFlipped: false,
  selectedBox: "all",
  selectedCategory: "all",
  studyDirection: "de-ar", // 'de-ar' or 'ar-de'
  sessionReviewed: 0,
  sessionMasteredUp: 0,
  lastPracticeCheck: null,
  _keyHandler: null,

  // Build unified vocabulary list without duplicates
  initVocabulary() {
    const master = Array.isArray(window.MASTER_VOCABULARY) ? window.MASTER_VOCABULARY : [];
    const seen = new Set();
    const combined = [];

    for (const item of [...master, ...this.fallbackVocabulary]) {
      if (!item || !item.de) continue;
      const key = item.de.trim();
      if (seen.has(key)) continue;
      seen.add(key);
      combined.push({
        de: key,
        ar: item.ar || "",
        article: item.article || this.extractArticle(key),
        plural: item.plural || "-",
        example: item.example || "",
        category: item.category || "Allgemein",
        level: item.level || "A2"
      });
    }
    this.allWords = combined;
  },

  extractArticle(deText) {
    const m = String(deText || "").trim().match(/^(der|die|das)\s+/i);
    return m ? m[1].toLowerCase() : "";
  },

  stripArticle(deText) {
    return String(deText || "").trim().replace(/^(der|die|das)\s+/i, "").trim();
  },

  // Ensure Storage flashcards structure is normalized and returns { box1..box5 }
  getFlashcardsState() {
    const data = Storage.load();
    if (!data.games) data.games = {};
    if (!data.games.flashcards) {
      data.games.flashcards = { box1: [], box2: [], box3: [], box4: [], box5: [] };
    }
    const fc = data.games.flashcards;
    for (let i = 1; i <= 5; i++) {
      if (!Array.isArray(fc[`box${i}`])) fc[`box${i}`] = [];
    }
    return { data, fc };
  },

  // Get box number (1..5) for a given word key
  getWordBox(wordKey) {
    const { fc } = this.getFlashcardsState();
    if (fc.box5.includes(wordKey)) return 5;
    if (fc.box4.includes(wordKey)) return 4;
    if (fc.box3.includes(wordKey)) return 3;
    if (fc.box2.includes(wordKey)) return 2;
    return 1;
  },

  // Move word to targetBox (1..5) and persist in Storage
  moveWordToBox(wordKey, targetBox) {
    const { data, fc } = this.getFlashcardsState();
    const clamped = Math.max(1, Math.min(5, Number(targetBox) || 1));

    for (let i = 1; i <= 5; i++) {
      fc[`box${i}`] = fc[`box${i}`].filter(w => w !== wordKey);
    }
    fc[`box${clamped}`].push(wordKey);
    Storage.save(data);
    return clamped;
  },

  // Compute exact counts across all 5 boxes for the active vocabulary (optionally filtered by category)
  getBoxCounts(categoryFilter = "all") {
    const { fc } = this.getFlashcardsState();
    const box2Set = new Set(fc.box2);
    const box3Set = new Set(fc.box3);
    const box4Set = new Set(fc.box4);
    const box5Set = new Set(fc.box5);

    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, total: 0 };
    const pool = categoryFilter === "all"
      ? this.allWords
      : this.allWords.filter(w => w.category === categoryFilter);

    for (const w of pool) {
      counts.total++;
      if (box5Set.has(w.de)) counts[5]++;
      else if (box4Set.has(w.de)) counts[4]++;
      else if (box3Set.has(w.de)) counts[3]++;
      else if (box2Set.has(w.de)) counts[2]++;
      else counts[1]++;
    }
    return counts;
  },

  // Build filtered deck ordered by Leitner priority
  buildDeck() {
    const { fc } = this.getFlashcardsState();
    const box2Set = new Set(fc.box2);
    const box3Set = new Set(fc.box3);
    const box4Set = new Set(fc.box4);
    const box5Set = new Set(fc.box5);

    const getBoxFast = (key) => {
      if (box5Set.has(key)) return 5;
      if (box4Set.has(key)) return 4;
      if (box3Set.has(key)) return 3;
      if (box2Set.has(key)) return 2;
      return 1;
    };

    let candidates = this.allWords.map(w => ({
      ...w,
      box: getBoxFast(w.de)
    }));

    if (this.selectedCategory !== "all") {
      candidates = candidates.filter(w => w.category === this.selectedCategory);
    }

    if (this.selectedBox !== "all") {
      const targetBox = Number(this.selectedBox);
      candidates = candidates.filter(w => w.box === targetBox);
      this.filteredDeck = Utils.shuffle(candidates);
    } else {
      // Smart Leitner order: prioritize Box 1 -> Box 2 -> Box 3 -> Box 4 -> Box 5 (shuffled inside each box)
      const grouped = { 1: [], 2: [], 3: [], 4: [], 5: [] };
      for (const item of candidates) {
        grouped[item.box].push(item);
      }
      this.filteredDeck = [
        ...Utils.shuffle(grouped[1]),
        ...Utils.shuffle(grouped[2]),
        ...Utils.shuffle(grouped[3]),
        ...Utils.shuffle(grouped[4]),
        ...Utils.shuffle(grouped[5])
      ];
    }

    this.currentIndex = 0;
    this.isFlipped = false;
    this.lastPracticeCheck = null;
  },

  getCategoriesList() {
    const set = new Set();
    for (const w of this.allWords) {
      if (w.category) set.add(w.category);
    }
    return Array.from(set);
  },

  bindKeyboardShortcuts() {
    if (this._keyHandler) {
      window.removeEventListener("keydown", this._keyHandler);
    }
    this._keyHandler = (e) => {
      // Ignore if SrsFlashcards UI is no longer mounted
      if (!document.getElementById("srs-flashcard-root")) {
        window.removeEventListener("keydown", this._keyHandler);
        this._keyHandler = null;
        return;
      }
      const activeTag = document.activeElement ? document.activeElement.tagName : "";
      if (activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT") {
        return;
      }
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        if (!this.isFlipped) {
          this.flipCard();
        }
      } else if (e.code === "ArrowLeft") {
        this.nextCard();
      } else if (e.code === "ArrowRight") {
        this.prevCard();
      }
    };
    window.addEventListener("keydown", this._keyHandler);
  },

  render(container) {
    this.initVocabulary();
    this.buildDeck();
    this.bindKeyboardShortcuts();
    this.renderView(container || document.getElementById("app-content"));
  },

  setBoxFilter(boxVal) {
    this.selectedBox = String(boxVal);
    this.buildDeck();
    this.renderView(document.getElementById("app-content"));
  },

  setCategoryFilter(catVal) {
    this.selectedCategory = String(catVal);
    this.buildDeck();
    this.renderView(document.getElementById("app-content"));
  },

  setDirectionFilter(dirVal) {
    this.studyDirection = dirVal === "ar-de" ? "ar-de" : "de-ar";
    this.isFlipped = false;
    this.lastPracticeCheck = null;
    this.renderView(document.getElementById("app-content"));
  },

  renderView(container) {
    if (!container) return;

    const counts = this.getBoxCounts(this.selectedCategory);
    const categories = this.getCategoriesList();
    const totalCards = this.filteredDeck.length;
    const currentCard = totalCards > 0 ? this.filteredDeck[this.currentIndex] : null;
    const currentBoxNum = currentCard ? this.getWordBox(currentCard.de) : 1;
    const currentBoxMeta = this.boxMeta.find(b => b.id === currentBoxNum) || this.boxMeta[0];

    const masteryPercent = counts.total > 0
      ? Math.round(((counts[4] * 0.75 + counts[5] * 1.0 + counts[3] * 0.5 + counts[2] * 0.25) / counts.total) * 100)
      : 0;

    container.innerHTML = `
      <div id="srs-flashcard-root" class="article-game-container fade-in" style="max-width: 820px; margin: 0 auto;">
        <!-- Header Banner -->
        <div class="card" style="padding: 22px 24px; margin-bottom: 18px; background: linear-gradient(135deg, var(--bg-card), var(--bg-primary)); border: 1px solid var(--border);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
            <div>
              <h2 style="font-size: 1.45rem; color: var(--text-primary); margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
                <span>🧠</span> نظام الحفظ الذكي بالتكرار المتباعد (Leitner 5-Box SRS)
              </h2>
              <p class="text-secondary" style="font-size: 0.92rem; margin: 0;">
                الكلمات التي تتقنها تنتقل للصندوق الأعلى حتى الصندوق 5 🏆، والكلمات الصعبة تعود للصندوق 1 🔴 لمراجعتها بتركيز!
              </p>
            </div>
            <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
              <span class="badge badge-primary" style="font-size: 0.85rem; padding: 6px 12px;">
                📚 المجموع: ${counts.total} كلمة
              </span>
              <span class="badge badge-success" style="font-size: 0.85rem; padding: 6px 12px;">
                📈 نسبة الإتقان: ${masteryPercent}%
              </span>
            </div>
          </div>

          <!-- Visual 5-Box Leitner Dashboard -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; margin-bottom: 16px;">
            ${this.boxMeta.map(box => {
              const isSelected = String(this.selectedBox) === String(box.id);
              const count = counts[box.id] || 0;
              return `
                <button
                  type="button"
                  onclick="SrsFlashcards.setBoxFilter('${isSelected ? 'all' : box.id}')"
                  style="
                    text-align: center;
                    padding: 12px 10px;
                    border-radius: var(--radius-md);
                    border: 2px solid ${isSelected ? box.color : 'var(--border)'};
                    background: ${isSelected ? box.bg : 'var(--bg-card)'};
                    cursor: pointer;
                    transition: all 0.2s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                  "
                  title="انقر لتصفية البطاقات في ${box.title}"
                >
                  <div style="font-size: 0.85rem; font-weight: 800; color: ${box.color};">${box.title}</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">${box.sub}</div>
                  <div style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary); margin-top: 2px;">${count}</div>
                </button>
              `;
            }).join("")}
          </div>

          <!-- Filter Controls Bar -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 12px; padding-top: 12px; border-top: 1px solid var(--border);">
            <!-- Box Filter -->
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 4px;">
                📦 تصفية حسب الصندوق:
              </label>
              <select
                class="form-input"
                onchange="SrsFlashcards.setBoxFilter(this.value)"
                style="width: 100%; padding: 8px 12px; border-radius: var(--radius-sm); border: 1.5px solid var(--border); background: var(--bg-card); color: var(--text-primary); font-size: 0.9rem; font-weight: 600;"
              >
                <option value="all" ${this.selectedBox === "all" ? "selected" : ""}>الكل للمراجعة الذكية (${counts.total})</option>
                <option value="1" ${this.selectedBox === "1" ? "selected" : ""}>صندوق 1 🔴 — جديد / صعب (${counts[1]})</option>
                <option value="2" ${this.selectedBox === "2" ? "selected" : ""}>صندوق 2 🟠 — قيد التعلم (${counts[2]})</option>
                <option value="3" ${this.selectedBox === "3" ? "selected" : ""}>صندوق 3 🟡 — جيد (${counts[3]})</option>
                <option value="4" ${this.selectedBox === "4" ? "selected" : ""}>صندوق 4 🟢 — ممتاز (${counts[4]})</option>
                <option value="5" ${this.selectedBox === "5" ? "selected" : ""}>المتقن 5 🏆 — متقن 100% (${counts[5]})</option>
              </select>
            </div>

            <!-- Category Filter -->
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 4px;">
                🏷️ تصفية حسب الموضوع:
              </label>
              <select
                class="form-input"
                onchange="SrsFlashcards.setCategoryFilter(this.value)"
                style="width: 100%; padding: 8px 12px; border-radius: var(--radius-sm); border: 1.5px solid var(--border); background: var(--bg-card); color: var(--text-primary); font-size: 0.9rem; font-weight: 600;"
              >
                <option value="all" ${this.selectedCategory === "all" ? "selected" : ""}>الكل (${this.allWords.length} كلمة)</option>
                ${categories.map(cat => {
                  const label = this.categoryLabels[cat] || cat;
                  return `<option value="${Utils.escapeHtml(cat)}" ${this.selectedCategory === cat ? "selected" : ""}>${Utils.escapeHtml(label)}</option>`;
                }).join("")}
              </select>
            </div>

            <!-- Study Direction Filter -->
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 4px;">
                🔄 اتجاه الدراسة والاختبار:
              </label>
              <select
                class="form-input"
                onchange="SrsFlashcards.setDirectionFilter(this.value)"
                style="width: 100%; padding: 8px 12px; border-radius: var(--radius-sm); border: 1.5px solid var(--border); background: var(--bg-card); color: var(--text-primary); font-size: 0.9rem; font-weight: 600;"
              >
                <option value="de-ar" ${this.studyDirection === "de-ar" ? "selected" : ""}>🇩🇪 ألماني ⬅ عربي (اختبر المعنى)</option>
                <option value="ar-de" ${this.studyDirection === "ar-de" ? "selected" : ""}>🇸🇦 عربي ⬅ ألماني (اختبر التذكر والكتابة/النطق)</option>
              </select>
            </div>
          </div>
        </div>

        ${currentCard ? this.renderFlashcard(currentCard, currentBoxMeta, totalCards) : this.renderEmptyState()}
      </div>
    `;
  },

  renderEmptyState() {
    return `
      <div class="card text-center" style="padding: 48px 24px;">
        <div style="font-size: 3.2rem; margin-bottom: 12px;">🎉</div>
        <h3 style="font-size: 1.4rem; color: var(--text-primary); margin-bottom: 8px;">
          لا توجد بطاقات في هذا الصندوق حالياً!
        </h3>
        <p class="text-secondary" style="max-width: 480px; margin: 0 auto 20px auto;">
          يمكنك اختيار صندوق آخر أو عرض جميع البطاقات للمراجعة الذكية الشاملة.
        </p>
        <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
          <button class="btn btn-primary" onclick="SrsFlashcards.setBoxFilter('all')">
            عرض الكل للمراجعة الذكية 🔄
          </button>
          <a href="#/games" class="btn btn-secondary">العودة للألعاب ➔</a>
        </div>
      </div>
    `;
  },

  renderFlashcard(card, boxMeta, totalCards) {
    const safeDe = card.de.replace(/'/g, "\\'");
    const safeEx = (card.example || "").replace(/'/g, "\\'");
    const articleClass = Utils.getArticleClass(card.article);
    const coloredGermanWord = Utils.colorArticles(Utils.escapeHtml(card.de));
    const catLabel = this.categoryLabels[card.category] || card.category || "عام";

    const isDeToAr = this.studyDirection === "de-ar";

    return `
      <!-- Card Progress & Status Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
          <span class="badge" style="background: ${boxMeta.bg}; color: ${boxMeta.color}; border: 1px solid ${boxMeta.color}; font-weight: 700;">
            ${boxMeta.title} (${boxMeta.sub})
          </span>
          <span class="badge badge-secondary">المستوى ${Utils.escapeHtml(card.level || "A2")}</span>
          <span class="badge badge-secondary">${Utils.escapeHtml(catLabel)}</span>
        </div>
        <div style="font-size: 0.92rem; font-weight: 700; color: var(--text-secondary);">
          البطاقة ${this.currentIndex + 1} من ${totalCards}
          ${this.sessionReviewed > 0 ? `<span style="color: var(--success); margin-right: 10px;">(راجعت اليوم: ${this.sessionReviewed} ✅)</span>` : ""}
        </div>
      </div>

      <!-- Main Flashcard Box -->
      <div class="card" style="padding: 32px 24px; margin-bottom: 18px; border-top: 4px solid ${boxMeta.color};">
        <!-- FRONT OF CARD -->
        <div class="text-center" style="margin-bottom: 22px;">
          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px; font-weight: 600;">
            ${isDeToAr ? "🇩🇪 الكلمة بالألمانية (تذكّر معناها بالعربية):" : "🇸🇦 المعنى بالعربية (تذكّر الكلمة الألمانية وأداتها):"}
          </div>

          ${isDeToAr ? `
            <div class="de-text" dir="ltr" style="font-size: 2.2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 14px; line-height: 1.3;">
              ${coloredGermanWord}
            </div>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
              <button type="button" class="btn btn-secondary btn-sm audio-btn" style="width: auto; height: auto; padding: 8px 16px; border-radius: var(--radius-sm); gap: 6px;" onclick="Speech.speak('${safeDe}')">
                🔊 استمع للنطق
              </button>
              <button type="button" class="btn btn-outline btn-sm audio-btn" style="width: auto; height: auto; padding: 8px 14px; border-radius: var(--radius-sm); gap: 6px;" onclick="Speech.speakSlow('${safeDe}')">
                🐢 نطق بطيء
              </button>
            </div>
          ` : `
            <div style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 12px; line-height: 1.4;">
              ${Utils.escapeHtml(card.ar)}
            </div>
            <div style="display: flex; justify-content: center; gap: 10px; align-items: center; flex-wrap: wrap;">
              ${card.article ? `<span class="badge badge-warning">💡 تلميح: اسم يحتاج أداة تعريف (der / die / das)</span>` : `<span class="badge badge-secondary">💡 تلميح: فعل / تعبير</span>`}
              <button type="button" class="btn btn-outline btn-sm audio-btn" style="width: auto; height: auto; padding: 6px 14px; border-radius: var(--radius-sm);" onclick="Speech.speak('${safeDe}')" title="استمع لتلميح صوتي">
                🔊 تلميح صوتي
              </button>
            </div>
          `}
        </div>

        <!-- Optional Practice Input (Type or Speak before flipping) -->
        <div style="max-width: 560px; margin: 0 auto 22px auto; background: var(--bg-primary); padding: 14px 16px; border-radius: var(--radius-md); border: 1px solid var(--border);">
          <div style="font-size: 0.84rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
            <span>✍️ اختبر كتابتك أو نطقك للألمانية قبل قلب البطاقة (اختياري):</span>
            ${articleClass ? `<span style="font-size: 0.78rem; color: var(--text-muted);">مثال: ${Utils.escapeHtml(card.de)}</span>` : ""}
          </div>
          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            <input
              type="text"
              id="srs-practice-input"
              class="form-input de-text"
              dir="ltr"
              lang="de"
              autocomplete="off"
              placeholder="Schreibe oder sprich das deutsche Wort..."
              style="flex: 1; min-width: 200px; padding: 10px 14px; font-size: 1rem; border-radius: var(--radius-sm); border: 1.5px solid var(--border); background: var(--bg-card); color: var(--text-primary);"
              onkeydown="if(event.key === 'Enter'){ event.preventDefault(); SrsFlashcards.checkPracticeAndFlip(); }"
            />
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              style="min-height: 42px; padding: 0 14px;"
              onclick="Speech.listen('srs-practice-input', this)"
              title="تحدث بالألمانية لاختبار نطقك"
            >
              🎤 تحدث
            </button>
          </div>
          ${this.lastPracticeCheck ? `
            <div style="margin-top: 10px; padding: 8px 12px; border-radius: var(--radius-sm); font-size: 0.9rem; font-weight: 700; background: ${this.lastPracticeCheck.correct ? 'rgba(16, 185, 129, 0.12)' : 'rgba(245, 158, 11, 0.12)'}; color: ${this.lastPracticeCheck.correct ? 'var(--success)' : 'var(--warning)'};">
              ${this.lastPracticeCheck.correct
                ? `✅ تطابق ممتاز! كتبت/نطقت: "${Utils.escapeHtml(this.lastPracticeCheck.userText)}"`
                : `💡 كتبت: "${Utils.escapeHtml(this.lastPracticeCheck.userText)}" — قارنها بالكتابة الصحيحة بالأسفل:`}
            </div>
          ` : ""}
        </div>

        ${!this.isFlipped ? `
          <!-- Flip Action Button -->
          <div class="text-center" style="margin-top: 10px;">
            <button
              type="button"
              class="btn btn-primary btn-lg"
              style="min-width: 280px; font-size: 1.1rem; padding: 14px 28px;"
              onclick="SrsFlashcards.checkPracticeAndFlip()"
            >
              🔄 اقلب البطاقة لإظهار الإجابة
            </button>
          </div>
        ` : `
          <!-- BACK OF CARD (Revealed Answer) -->
          <div class="fade-in" style="margin-top: 18px; padding-top: 22px; border-top: 2px dashed var(--border);">
            <div style="background: var(--bg-primary); border-radius: var(--radius-md); padding: 20px; margin-bottom: 20px; border-right: 4px solid ${boxMeta.color};">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
                <div dir="ltr" class="de-text" style="font-size: 1.75rem; font-weight: 800; color: var(--text-primary);">
                  ${coloredGermanWord}
                </div>
                <div style="display: flex; gap: 8px;">
                  <button type="button" class="btn btn-secondary btn-sm audio-btn" style="width: auto; height: auto; padding: 6px 14px; border-radius: var(--radius-sm);" onclick="Speech.speak('${safeDe}')">
                    🔊 الكلمة
                  </button>
                  <button type="button" class="btn btn-outline btn-sm audio-btn" style="width: auto; height: auto; padding: 6px 12px; border-radius: var(--radius-sm);" onclick="Speech.speakSlow('${safeDe}')">
                    🐢 بطيء
                  </button>
                </div>
              </div>

              <!-- Arabic Meaning & Plural -->
              <div style="font-size: 1.35rem; font-weight: 800; color: var(--accent); margin-bottom: 10px;">
                🇸🇦 المعنى: ${Utils.escapeHtml(card.ar)}
              </div>

              ${card.plural && card.plural !== "-" ? `
                <div style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 12px;">
                  🔢 <strong>صيغة الجمع (Plural):</strong> <span class="de-text" dir="ltr" style="font-weight: 700;">${Utils.colorArticles(Utils.escapeHtml(card.plural))}</span>
                </div>
              ` : ""}

              ${card.example ? `
                <div style="background: var(--bg-card); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
                  <div class="de-text" dir="ltr" style="font-size: 1.05rem; font-weight: 600; color: var(--text-primary);">
                    💬 "${Utils.escapeHtml(card.example)}"
                  </div>
                  <button type="button" class="btn btn-secondary btn-sm audio-btn" style="width: auto; height: auto; padding: 6px 12px; border-radius: var(--radius-sm);" onclick="Speech.speak('${safeEx}')">
                    🔊 استمع للمثال
                  </button>
                </div>
              ` : ""}
            </div>

            <!-- Self-Evaluation SRS Buttons -->
            <div style="text-align: center; margin-bottom: 8px; font-size: 0.9rem; font-weight: 700; color: var(--text-secondary);">
              قيّم مدى معرفتك بالكلمة لتحديث صندوق الحفظ الذكي:
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px;">
              <button
                type="button"
                class="btn btn-danger btn-lg"
                style="padding: 15px 18px; font-size: 1rem; font-weight: 700;"
                onclick="SrsFlashcards.markHard()"
              >
                ❌ أحتاج مراجعتها (تعود للصندوق 1)
              </button>
              <button
                type="button"
                class="btn btn-success btn-lg"
                style="padding: 15px 18px; font-size: 1rem; font-weight: 700;"
                onclick="SrsFlashcards.markKnown()"
              >
                ✅ أعرفها جيداً! (+10 XP وتنتقل للصندوق الأعلى)
              </button>
            </div>
          </div>
        `}

        <!-- Navigation Footer -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border); flex-wrap: wrap; gap: 10px;">
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            onclick="SrsFlashcards.prevCard()"
            ${this.currentIndex === 0 ? 'disabled style="opacity: 0.45; pointer-events: none;"' : ""}
          >
            ⬅ البطاقة السابقة
          </button>

          <a href="#/games" class="btn btn-outline btn-sm">قائمة الألعاب 🎮</a>

          <button
            type="button"
            class="btn btn-secondary btn-sm"
            onclick="SrsFlashcards.nextCard()"
          >
            تخطي ⏭️
          </button>
        </div>
      </div>
    `;
  },

  checkPracticeAndFlip() {
    const input = document.getElementById("srs-practice-input");
    const typed = input ? input.value.trim() : "";
    const currentCard = this.filteredDeck[this.currentIndex];

    if (typed && currentCard) {
      const bareDe = this.stripArticle(currentCard.de);
      const isMatch = Utils.compareAnswers(typed, currentCard.de, [bareDe]);
      this.lastPracticeCheck = {
        userText: typed,
        correct: isMatch
      };
    } else {
      this.lastPracticeCheck = null;
    }

    this.flipCard();
  },

  flipCard() {
    if (this.filteredDeck.length === 0) return;
    this.isFlipped = true;
    const currentCard = this.filteredDeck[this.currentIndex];
    if (currentCard && window.Speech) {
      Speech.speak(currentCard.de);
    }
    this.renderView(document.getElementById("app-content"));
  },

  markHard() {
    const currentCard = this.filteredDeck[this.currentIndex];
    if (!currentCard) return;

    this.moveWordToBox(currentCard.de, 1);
    currentCard.box = 1;
    this.sessionReviewed++;

    if (window.Utils && Utils.showToast) {
      Utils.showToast(`🔴 أُعيدت "${currentCard.de}" إلى الصندوق 1 لمراجعتها قريباً`, "info", 2000);
    }

    Storage.updateStreak();
    if (window.App && window.App.updateHeaderStats) {
      window.App.updateHeaderStats();
    }

    this.advanceAfterGrade();
  },

  markKnown() {
    const currentCard = this.filteredDeck[this.currentIndex];
    if (!currentCard) return;

    const currentBox = this.getWordBox(currentCard.de);
    const nextBox = Math.min(5, currentBox + 1);
    this.moveWordToBox(currentCard.de, nextBox);
    currentCard.box = nextBox;

    this.sessionReviewed++;
    this.sessionMasteredUp++;

    Storage.addXP(10);
    Storage.updateStreak();
    if (window.App && window.App.updateHeaderStats) {
      window.App.updateHeaderStats();
    }

    const boxTitle = (this.boxMeta.find(b => b.id === nextBox) || {}).title || `صندوق ${nextBox}`;
    if (window.Utils && Utils.showToast) {
      Utils.showToast(`✅ أحسنت! +10 XP — انتقلت "${currentCard.de}" إلى ${boxTitle}`, "success", 2200);
    }

    this.advanceAfterGrade();
  },

  advanceAfterGrade() {
    this.isFlipped = false;
    this.lastPracticeCheck = null;

    // If user is filtering by a specific box and the card moved out of that box, rebuild or advance cleanly
    if (this.selectedBox !== "all") {
      const targetBox = Number(this.selectedBox);
      this.filteredDeck = this.filteredDeck.filter(c => this.getWordBox(c.de) === targetBox);
      if (this.currentIndex >= this.filteredDeck.length) {
        this.currentIndex = 0;
      }
    } else {
      this.currentIndex++;
      if (this.currentIndex >= this.filteredDeck.length) {
        this.buildDeck();
      }
    }

    this.renderView(document.getElementById("app-content"));
  },

  prevCard() {
    if (this.filteredDeck.length === 0) return;
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.isFlipped = false;
      this.lastPracticeCheck = null;
      this.renderView(document.getElementById("app-content"));
    }
  },

  nextCard() {
    if (this.filteredDeck.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.filteredDeck.length;
    this.isFlipped = false;
    this.lastPracticeCheck = null;
    this.renderView(document.getElementById("app-content"));
  }
};

window.SrsFlashcards = SrsFlashcards;
