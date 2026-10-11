window.LESSONS = window.LESSONS || window.lessons || {};
window.lessons = window.LESSONS;
window.LESSONS["a1-review-02"] = {
  id: "a1-review-02",
  level: "a1-review",
  order: 2,
  slug: "satzbau",
  title: {
    de: "Satzbau (V2-Stellung)",
    ar: "بناء الجملة وموقع الفعل (V2)"
  },
  tags: ["grammar", "sentence-structure", "verbs", "a1"],
  goal: "تعلم كيفية بناء الجملة في اللغة الألمانية وفهم القاعدة الذهبية: الفعل دائماً في المركز الثاني في الجملة الخبرية.",
  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية، بناء الجملة (Satzbau) له قاعدة صارمة جداً: في الجملة الخبرية العادية (Aussagesatz)، يجب أن يكون **الفعل المصرف دائماً في المركز الثاني** (Position 2). هذا لا يعني الكلمة الثانية، بل العنصر الثاني في الجملة."
    },
    {
      type: "rule",
      content: "قاعدة المركز الثاني (V2-Stellung): الفعل المصرف يأتي دائماً في المركز الثاني في الجمل الخبرية وأسئلة بكلمات الاستفهام (W-Fragen)."
    },
    {
      type: "table",
      headers: ["Position 1 (المركز 1)", "Position 2 (المركز 2 - الفعل)", "Position 3 (المركز 3)", "Rest (الباقي)"],
      rows: [
        ["Ich", "**lerne**", "jeden Tag", "Deutsch."],
        ["Jeden Tag", "**lerne**", "ich", "Deutsch."],
        ["In Berlin", "**wohnt**", "meine Schwester", "jetzt."],
        ["Wann", "**kommst**", "du", "nach Hause?"]
      ]
    },
    {
      type: "text",
      content: "لاحظ في المثال الثاني والثالث: عندما نضع الزمان أو المكان في بداية الجملة (للتأكيد)، يبقى الفعل في المركز الثاني، ويأتي الفاعل (ich, meine Schwester) مباشرة بعد الفعل (في المركز الثالث). هذه الظاهرة تسمى Inversion (القلب)."
    },
    {
      type: "text",
      content: "أما في الأسئلة التي إجابتها نعم أو لا (Ja/Nein-Fragen)، فيأتي الفعل في **المركز الأول** (Position 1)."
    },
    {
      type: "table",
      headers: ["Position 1 (المركز 1 - الفعل)", "Position 2 (المركز 2 - الفاعل)", "Rest (الباقي)"],
      rows: [
        ["**Lernst**", "du", "heute Deutsch?"],
        ["**Wohnt**", "er", "in Berlin?"],
        ["**Kommen**", "Sie", "aus Ägypten?"]
      ]
    }
  ],
  examples: [
    {
      de: "Ich **gehe** heute ins Kino.",
      ar: "أنا أذهب اليوم إلى السينما.",
      audio: true,
      note: "الفاعل في المركز 1، الفعل في المركز 2."
    },
    {
      de: "Heute **gehe** ich ins Kino.",
      ar: "اليوم أذهب أنا إلى السينما.",
      audio: true,
      note: "الزمان في المركز 1، الفعل في المركز 2، الفاعل في المركز 3."
    },
    {
      de: "Der Mann **trinkt** einen Kaffee.",
      ar: "الرجل يشرب قهوة.",
      audio: true,
      note: "'Der Mann' معاً تشكل المركز الأول."
    },
    {
      de: "Was **machst** du am Wochenende?",
      ar: "ماذا تفعل في عطلة نهاية الأسبوع؟",
      audio: true,
      note: "سؤال W: كلمة الاستفهام في المركز 1، الفعل في المركز 2."
    },
    {
      de: "**Hast** du morgen Zeit?",
      ar: "هل لديك وقت غداً؟",
      audio: true,
      note: "سؤال نعم/لا: الفعل في المركز 1."
    },
    {
      de: "Am Sonntag **schlafe** ich lange.",
      ar: "يوم الأحد أنام طويلاً.",
      audio: true,
      note: "حرف الجر والاسم (Am Sonntag) يشكلان معاً المركز الأول."
    },
    {
      de: "Wir **lernen** zusammen Deutsch.",
      ar: "نحن نتعلم الألمانية معاً.",
      audio: true,
      note: "جملة خبرية بسيطة."
    },
    {
      de: "**Spielt** ihr gern Fußball?",
      ar: "هل تحبون لعب كرة القدم؟",
      audio: true,
      note: "سؤال نعم/لا: الفعل في المركز 1."
    }
  ],
  arabicTips: [
    "في العربية، يمكن أن نبدأ بالفعل (جملة فعلية) أو بالاسم (جملة اسمية). في الألمانية الجملة الخبرية تبدأ دائماً بفاعل أو ظرف، ولكن **الفعل يجب أن يكون الثاني**.",
    "احذر من الترجمة الحرفية: 'اليوم أنا أذهب' خطأ في الألمانية أن تقول 'Heute ich gehe'. الصحيح هو 'Heute gehe ich'. الفعل لا يتحرك من المركز الثاني!",
    "تذكر أن 'المركز الأول' قد يتكون من عدة كلمات (مثل: Meine kleine Schwester - أختي الصغيرة). كل هذا يعتبر 'عنصراً واحداً' في المركز الأول."
  ],
  summary: [
    "الفعل المصرف دائماً في المركز الثاني (Position 2) في الجمل الخبرية.",
    "إذا بدأنا الجملة بظرف زمان أو مكان، يأتي الفعل في المركز الثاني، ثم الفاعل (Position 3).",
    "في أسئلة (W-Fragen)، تأتي كلمة الاستفهام أولاً ثم الفعل ثانياً.",
    "في أسئلة (Ja/Nein-Fragen)، يأتي الفعل في المركز الأول (Position 1)."
  ],
  vocabulary: [
    { de: "der Satz", plural: "die Sätze", ar: "الجملة", example: "Der Satz ist kurz." },
    { de: "das Verb", plural: "die Verben", ar: "الفعل", example: "Das Verb steht auf Position zwei." },
    { de: "das Subjekt", plural: "die Subjekte", ar: "الفاعل", example: "Das Subjekt macht die Aktion." },
    { de: "die Frage", plural: "die Fragen", ar: "السؤال", example: "Ich habe eine Frage." },
    { de: "die Position", plural: "die Positionen", ar: "المركز / الموقع", example: "Das Verb ist in Position zwei." },
    { de: "das Kino", plural: "die Kinos", ar: "السينما", example: "Wir gehen ins Kino." }
  ],
  exercises: [
    {
      type: "multiple-choice",
      question: "اختر الجملة الصحيحة (الفاعل في البداية):",
      options: ["Wir lernen heute Deutsch.", "Wir heute lernen Deutsch.", "Lernen wir heute Deutsch."],
      correctIndex: 0,
      explanation: "الفعل 'lernen' يجب أن يكون في المركز الثاني."
    },
    {
      type: "multiple-choice",
      question: "اختر الجملة الصحيحة (ظرف الزمان في البداية):",
      options: ["Heute ich spiele Fußball.", "Heute spiele ich Fußball.", "Spiele heute ich Fußball."],
      correctIndex: 1,
      explanation: "عندما نبدأ بـ Heute (المركز 1)، يجب أن يأتي الفعل spiele (المركز 2)، ثم الفاعل ich (المركز 3)."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين جملة خبرية تبدأ بـ 'Ich':",
      words: ["kaufe", "ich", "Brot", "heute"],
      correctOrder: ["ich", "kaufe", "heute", "Brot"],
      explanation: "الفاعل ich في المركز 1، الفعل kaufe في المركز 2."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين سؤال (W-Frage):",
      words: ["wohnt", "wo", "er", "?"],
      correctOrder: ["wo", "wohnt", "er", "?"],
      explanation: "كلمة الاستفهام wo (المركز 1)، الفعل wohnt (المركز 2)، الفاعل er (المركز 3)."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين سؤال (Ja/Nein-Frage):",
      words: ["trinkst", "Kaffee", "du", "gern", "?"],
      correctOrder: ["trinkst", "du", "gern", "Kaffee", "?"],
      explanation: "في أسئلة نعم/لا، الفعل يأتي في المركز الأول: Trinkst du..."
    },
    {
      type: "fill-blank",
      question: "Am Wochenende ___ ich gerne.",
      options: ["schlafe", "ich", "lange"],
      correctOption: "schlafe",
      explanation: "Am Wochenende هو المركز 1، لذا نحتاج الفعل في المركز 2."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في الجملة: Morgen ich gehe zur Arbeit.",
      incorrect: "Morgen ich gehe zur Arbeit.",
      correct: "Morgen gehe ich zur Arbeit.",
      explanation: "الفعل 'gehe' يجب أن يكون في المركز الثاني، والفاعل 'ich' ينتقل للمركز الثالث."
    },
    {
      type: "translate",
      question: "ترجم: هل تأتي من سوريا؟ (باستخدام صيغة الاحترام Sie)",
      target: "Kommen Sie aus Syrien?",
      explanation: "سؤال نعم/لا يبدأ بالفعل Kommen."
    },
    {
      type: "match",
      question: "طابق بين الكلمة وموقعها في الجملة (Heute lerne ich Deutsch):",
      pairs: [
        { left: "Heute", right: "Position 1" },
        { left: "lerne", right: "Position 2 (Verb)" },
        { left: "ich", right: "Position 3 (Subjekt)" }
      ],
      explanation: "الظرف في المركز 1، الفعل في 2، والفاعل في 3."
    },
    {
      type: "multiple-choice",
      question: "أي عنصر يمثل المركز الأول في هذه الجملة: 'Meine gute Freundin kommt aus Spanien.'",
      options: ["Meine", "Meine gute", "Meine gute Freundin"],
      correctIndex: 2,
      explanation: "الاسم مع أداته وصفته 'Meine gute Freundin' يشكلون معاً عنصراً واحداً (المركز 1)."
    }
  ],
  quiz: [
    {
      question: "أين يقع الفعل المصرف في الجملة الخبرية الألمانية؟",
      options: ["في نهاية الجملة", "في المركز الثاني دائماً", "في المركز الأول", "حسب رغبة المتحدث"],
      correctIndex: 1,
      explanation: "القاعدة الذهبية: الفعل المصرف دائماً في المركز الثاني في الجملة الخبرية."
    },
    {
      question: "كيف نسأل سؤالاً إجابته نعم أو لا (Ja/Nein-Frage)؟",
      options: ["نضع الفعل في المركز الأول", "نضع الفعل في المركز الثاني", "نستخدم أداة استفهام", "نضع الفعل في النهاية"],
      correctIndex: 0,
      explanation: "في أسئلة نعم/لا، نبدأ بالفعل (المركز الأول)."
    },
    {
      question: "اختر الترتيب الصحيح:",
      options: ["Oft spiele ich Tennis.", "Oft ich spiele Tennis.", "Ich oft spiele Tennis.", "Spiele oft ich Tennis."],
      correctIndex: 0,
      explanation: "المركز 1 (Oft)، المركز 2 الفعل (spiele)، المركز 3 الفاعل (ich)."
    },
    {
      question: "ما هو المركز الأول في جملة 'Am Sonntag besuchen wir Oma.'؟",
      options: ["Am", "Sonntag", "Am Sonntag", "besuchen"],
      correctIndex: 2,
      explanation: "حرف الجر والاسم المرتبط به يشكلان معاً المركز الأول."
    },
    {
      question: "أي جملة هي سؤال W (W-Frage) صحيح؟",
      options: ["Wo du wohnst?", "Wohnst du wo?", "Wo wohnst du?", "Du wohnst wo?"],
      correctIndex: 2,
      explanation: "كلمة الاستفهام (Wo) في المركز 1، الفعل (wohnst) في المركز 2."
    }
  ]
};
