window.LESSONS = window.LESSONS || window.lessons || {};
window.lessons = window.LESSONS;
window.LESSONS["a1-review-05"] = {
  id: "a1-review-05",
  level: "a1-review",
  order: 5,
  slug: "dativ",
  title: {
    de: "Der Dativ",
    ar: "حالة الجر (Der Dativ)"
  },
  tags: ["grammar", "dativ", "cases", "nouns", "a1"],
  goal: "فهم حالة الجر (Dativ)، متى نستخدمها، وكيف تتغير جميع أدوات التعريف والنكرة فيها.",
  explanation: [
    {
      type: "text",
      content: "حالة الجر (Dativ) تُستخدم غالباً للمفعول به غير المباشر (Indirect Object)، أي الشخص أو الشيء الذي يستفيد أو يتأثر بالفعل."
    },
    {
      type: "rule",
      content: "في حالة الـ Dativ، تتغير أدوات جميع الأجناس (المذكر، المحايد، المؤنث، والجمع)!"
    },
    {
      type: "table",
      headers: ["الجنس", "Nominativ (الفاعل)", "Dativ (حالة الجر)"],
      rows: [
        ["المذكر (Maskulin)", "der / ein", "**dem** / **einem**"],
        ["المحايد (Neutral)", "das / ein", "**dem** / **einem**"],
        ["المؤنث (Feminin)", "die / eine", "**der** / **einer**"],
        ["الجمع (Plural)", "die / -", "**den** (+ **n** لاسم الجمع) / -"]
      ]
    },
    {
      type: "text",
      content: "ملاحظات هامة في الـ Dativ:\n1. المذكر والمحايد يأخذان نفس الأداة (dem / einem).\n2. المؤنث يتحول بشكل غريب من die إلى der! (احذر من الخلط بينه وبين المذكر في حالة الفاعل).\n3. الجمع يتحول إلى den، ونضيف حرف **n** إلى نهاية الاسم الجمع نفسه (إذا لم يكن ينتهي أصلاً بـ n أو s). مثل: den Kinder**n**."
    },
    {
      type: "text",
      content: "متى نستخدم الـ Dativ؟ \n1. بعد أفعال معينة تتطلب Dativ فقط (مثل: helfen, danken, gefallen, gehören, antworten, schmecken).\n2. بعد حروف جر معينة (سندرسها لاحقاً).\n3. للسؤال عن الـ Dativ نستخدم كلمة الاستفهام **Wem?** (لِمَن؟ / مَن؟)."
    }
  ],
  examples: [
    {
      de: "Ich helfe **dem** Mann.",
      ar: "أنا أساعد الرجل.",
      audio: true,
      note: "Mann مذكر (der) -> dem. الفعل helfen يأخذ Dativ."
    },
    {
      de: "Das Auto gehört **der** Frau.",
      ar: "السيارة تخص (ملك) المرأة.",
      audio: true,
      note: "Frau مؤنث (die) -> der. الفعل gehören يأخذ Dativ."
    },
    {
      de: "Das Buch gefällt **dem** Kind.",
      ar: "الكتاب يعجب الطفل.",
      audio: true,
      note: "Kind محايد (das) -> dem."
    },
    {
      de: "Er antwortet **den** Schülern.",
      ar: "هو يجيب الطلاب.",
      audio: true,
      note: "Schüler جمع. الأداة die -> den، ونضيف n للاسم -> Schülern."
    },
    {
      de: "Ich danke **dir**.",
      ar: "أنا أشكرك.",
      audio: true,
      note: "الضمير du في الـ Dativ يصبح dir."
    },
    {
      de: "Die Pizza schmeckt **meinem** Vater.",
      ar: "البيتزا تعجب والدي (طعمها).",
      audio: true,
      note: "Vater مذكر (der) -> meinem (مثل einem)."
    },
    {
      de: "Wir gratulieren **der** Lehrerin.",
      ar: "نحن نهنئ المعلمة.",
      audio: true,
      note: "Lehrerin مؤنث (die) -> der."
    },
    {
      de: "**Wem** gehört das?",
      ar: "لمن هذا؟",
      audio: true,
      note: "سؤال عن الشخص في حالة Dativ باستخدام Wem."
    }
  ],
  arabicTips: [
    "احفظ الأفعال التي تأخذ Dativ عن ظهر قلب! لأنها في العربية قد تأخذ مفعولاً به مباشراً (مثال: 'أنا أساعد الرجل' في العربية مفعول به عادي، في الألمانية Dativ 'helfen dem Mann').",
    "تذكر دائماً إضافة حرف (n) لاسم الجمع في حالة الـ Dativ. (مثال: mit den Freunden).",
    "لا تستغرب من رؤية (der Frau). 'der' هنا ليست أداة المذكر، بل هي أداة المؤنث (die) بعد أن تحولت في حالة الـ Dativ."
  ],
  summary: [
    "الـ Dativ يغير جميع الأدوات: المذكر/المحايد إلى dem، المؤنث إلى der، الجمع إلى den+n.",
    "أفعال الـ Dativ الشائعة: helfen (يساعد)، danken (يشكر)، gefallen (يعجب)، gehören (يخص)، antworten (يجيب)، schmecken (يتذوق/يعجبه الطعم).",
    "السؤال عن الـ Dativ يكون بـ Wem (لِمَن)."
  ],
  vocabulary: [
    { de: "helfen", plural: "-", ar: "يساعد", example: "Ich helfe dir." },
    { de: "danken", plural: "-", ar: "يشكر", example: "Ich danke dem Lehrer." },
    { de: "gefallen", plural: "-", ar: "يعجب (لشخص أو شيء)", example: "Das Haus gefällt mir." },
    { de: "gehören", plural: "-", ar: "يخص / ملك لـ", example: "Das Auto gehört mir." },
    { de: "antworten", plural: "-", ar: "يجيب", example: "Bitte antworte mir." },
    { de: "schmecken", plural: "-", ar: "يعجب (للطعام)", example: "Der Kuchen schmeckt mir." }
  ],
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich helfe ____ Mann (der).",
      options: ["den", "dem", "der"],
      correct: 1,
      explanation: "Mann مذكر (der). الفعل helfen يأخذ Dativ، فيصبح dem."
    },
    {
      type: "multiple-choice",
      question: "Das Buch gehört ____ Frau (die).",
      options: ["den", "die", "der"],
      correct: 2,
      explanation: "Frau مؤنث (die). الفعل gehören يأخذ Dativ، المؤنث يصبح der."
    },
    {
      type: "multiple-choice",
      question: "Der Ball gefällt ____ Kind (das).",
      options: ["dem", "das", "den"],
      correct: 0,
      explanation: "Kind محايد (das). الفعل gefallen يأخذ Dativ، المحايد يصبح dem."
    },
    {
      type: "fill-blank",
      question: "Ich danke ____ Freunden (die Freunde).",
      options: ["die", "den", "dem"],
      answer: "den",
      explanation: "Freunde جمع. في حالة Dativ يصبح الجمع den مع إضافة n للاسم."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: Das Auto gehört die Frau.",
      incorrect: "Das Auto gehört die Frau.",
      correct: "Das Auto gehört der Frau.",
      explanation: "الفعل gehören يطلب Dativ، والمؤنث (die) يصبح (der) في الـ Dativ."
    },
    {
      type: "translate",
      question: "ترجم: أنا أجيب المعلم (der Lehrer).",
      answer: "Ich antworte dem Lehrer.",
      explanation: "الفعل antworten يأخذ Dativ، المذكر (der) يصبح (dem)."
    },
    {
      type: "match",
      question: "طابق بين أداة الـ Nominativ وما يقابلها في الـ Dativ:",
      pairs: [
        { left: "der (Maskulin)", right: "dem" },
        { left: "das (Neutral)", right: "dem" },
        { left: "die (Feminin)", right: "der" },
        { left: "die (Plural)", right: "den + n" }
      ],
      explanation: "المذكر والمحايد -> dem، المؤنث -> der، الجمع -> den+n."
    },
    {
      type: "multiple-choice",
      question: "____ gehört das Handy? - Dem Vater.",
      options: ["Wer", "Wen", "Wem"],
      correct: 2,
      explanation: "نسأل عن شخص في حالة الـ Dativ باستخدام Wem (لِمَن)."
    },
    {
      type: "fill-blank",
      question: "Die Suppe schmeckt ____ Gästen (die Gäste).",
      options: ["dem", "den", "der"],
      answer: "den",
      explanation: "Gäste جمع. في الـ Dativ الجمع يأخذ den."
    },
    {
      type: "word-order",
      question: "رتب الجملة (الفاعل، الفعل، الـ Dativ):",
      words: ["helfe", "Ich", "dem", "Kind"],
      correct: "Ich helfe dem Kind",
      explanation: "Ich (فاعل)، helfe (فعل)، dem Kind (مفعول به في حالة الجر)."
    }
  ],
  quiz: [
    {
      question: "ما هي الأداة المناسبة للمؤنث (die) في حالة الـ Dativ؟",
      options: ["dem", "den", "der", "das"],
      correct: 2,
      explanation: "في الـ Dativ، تتحول (die) المؤنثة إلى (der)."
    },
    {
      question: "ما هي إضافة الـ Dativ التي تلحق باسم الجمع في نهايته؟",
      options: ["حرف s", "حرف e", "حرف n", "لا توجد إضافة"],
      correct: 2,
      explanation: "الأسماء في حالة الجمع غالباً ما تأخذ حرف (n) في نهايتها في الـ Dativ."
    },
    {
      question: "أي من هذه الأفعال يأخذ دائماً Dativ؟",
      options: ["haben", "helfen", "brauchen", "kaufen"],
      correct: 1,
      explanation: "helfen (يساعد) هو من أهم الأفعال التي تأخذ Dativ."
    },
    {
      question: "اختر الجملة الصحيحة:",
      options: ["Ich danke den Mann.", "Ich danke der Mann.", "Ich danke dem Mann.", "Ich danke das Mann."],
      correct: 2,
      explanation: "Mann مذكر (der)، والفعل danken يأخذ Dativ -> dem Mann."
    },
    {
      question: "ما هي الكلمة المناسبة للسؤال عن الـ Dativ؟",
      options: ["Wer", "Wo", "Wen", "Wem"],
      correct: 3,
      explanation: "Wem تُستخدم للسؤال عن الشخص في حالة الـ Dativ (لِمَن؟)."
    }
  ]
};
