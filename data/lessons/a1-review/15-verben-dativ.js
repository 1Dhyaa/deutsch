// website/data/lessons/a1-review/15-verben-dativ.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-review-15"] = {
  id: "a1-review-15",
  level: "a1-review",
  order: 15,
  slug: "verben-dativ",
  title: {
    de: "Verben mit Dativ",
    ar: "أفعال تأخذ مجروراً (Dativ)"
  },
  tags: ["grammatik", "dativ", "verben", "kasus", "pronomen", "a1"],

  // 1. الهدف
  goal: "ستتقن قائمة أهم الأفعال الألمانية التي تتطلب مفعولاً في حالة الجر (Dativ)، وتتعلم تصريف أدوات الأسماء والضمائر الشخصية في الداتيف مع فهم الفروق الجوهرية والمفاجئة مع اللغة العربية.",

  // 2. الشرح المفصل بالعربية مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية، هناك أفعال محددة وشائعة جداً لا تطلب مفعولاً به في حالة النصب (Akkusativ)، بل تتطلب دائماً اسماً أو ضميراً في حالة **الجر (Der Dativ)**. نسأل عن الشخص في حالة الداتيف بأداة الاستفهام **Wem?** (لِمَن؟)."
    },
    {
      type: "rule",
      content: "قاعدة تحول أدوات الأسماء في حالة الداتيف (Der Dativ):\n• المذكر (der) والمحايد (das) يتحولان معاً إلى: **dem** (نكرة: **einem** / نفي: **keinem** / ملكية: **meinem**).\n• المؤنث (die) يتحول إلى: **der** (نكرة: **einer** / نفي: **keiner** / ملكية: **meiner**).\n• الجمع (die) يتحول إلى: **den** (نفي: **keinen** / ملكية: **meinen**) مع **إضافة حرف -n في نهاية اسم الجمع** (ما لم يكن منتهياً بـ n أو s أصلاً)!"
    },
    {
      type: "table",
      headers: ["الجنس النحوي", "الرفع (Nominativ)", "المعرفة في Dativ", "النكرة في Dativ", "الملكية في Dativ"],
      rows: [
        ["المذكر (Maskulin)", "der Mann", "**dem** Mann", "**einem** Mann", "**meinem** Mann"],
        ["المحايد (Neutral)", "das Kind", "**dem** Kind", "**einem** Kind", "**meinem** Kind"],
        ["المؤنث (Feminin)", "die Frau", "**der** Frau", "**einer** Frau", "**meiner** Frau"],
        ["الجمع (Plural)", "die Kinder", "**den** Kinder**n**", "- Kinder**n**", "**meinen** Kinder**n**"]
      ]
    },
    {
      type: "text",
      content: "الضمائر الشخصية في حالة الجر (**Personalpronomen im Dativ**):\nنظراً لأن أغلب أفعال الداتيف تتعامل مع الأشخاص (مساعدة، شكر، تهنئة...)، فإن استخدام ضمائر الداتيف يتكرر باستمرار في المحادثات اليومية:"
    },
    {
      type: "table",
      headers: ["ضمير الفاعل (Nominativ)", "ضمير الداتيف (Dativ)", "المعنى بالعربية", "مثال عملي"],
      rows: [
        ["ich (أنا)", "**mir**", "لي / ـني", "Hilf mir! (ساعدني)"],
        ["du (أنتَ)", "**dir**", "لكَ / ـكَ", "Ich danke dir. (أشكرك)"],
        ["er (هو)", "**ihm**", "له / ـه", "Das Buch gehört ihm. (الكتاب ملكه)"],
        ["es (هو/هي محايد)", "**ihm**", "له", "Wie geht es ihm? (كيف حاله؟)"],
        ["sie (هي)", "**ihr**", "لها / ـها", "Das Kleid steht ihr gut. (الفستان يلائمها)"],
        ["wir (نحن)", "**uns**", "لنا / ـنا", "Er antwortet uns nicht. (هو لا يجيبنا)"],
        ["ihr (أنتم)", "**euch**", "لكم / ـكم", "Wie schmeckt euch das Essen? (كيف تجدون مذاق الطعام؟)"],
        ["sie (هم)", "**ihnen**", "لهم / ـهم", "Ich gratuliere ihnen. (أنا أهنئهم)"],
        ["Sie (حضرتك)", "**Ihnen**", "لحضرتكم", "Kann ich Ihnen helfen? (هل يمكنني مساعدة حضرتكم؟)"]
      ]
    },
    {
      type: "text",
      content: "أهم أفعال الداتيف التي يجب حفظها غيباً في المستوى A1/A2:\n1. **helfen** (يساعد): Ich helfe **dir**.\n2. **danken** (يشكر): Wir danken **Ihnen**.\n3. **gratulieren** (يهنئ): Ich gratuliere **ihm** zum Geburtstag.\n4. **gefallen** (يعجب مظهراً أو فكرة): Die Stadt gefällt **mir**.\n5. **schmecken** (يعجب مذاقاً): Der Kuchen schmeckt **den Gästen**.\n6. **gehören** (يخص / ملك لـ): Das Auto gehört **meinem Vater**.\n7. **passen** (يناسب مقاساً أو وقتاً): Der Termin passt **mir** gut.\n8. **stehen** (يلائم اللباس والمظهر): Die Brille steht **dir** super.\n9. **antworten** (يجيب شخصاً): Er antwortet **dem Lehrer**.\n10. **wehtun** (يؤلم): Mein Rücken tut **mir** weh."
    },
    {
      type: "rule",
      content: "صدمة لغوية للعرب: في العربية نقول «ساعدني» فيكون المفعول به منصوباً، لكن في الألمانية الفعل helfen يطلب داتيف حصراً: Hilf **mir** (وليس mich)! والأمر نفسه مع danken: Ich danke **dir** (وليس dich)!"
    }
  ],

  // 3. الأمثلة (9 أمثلة مع إبراز القواعد والترجمة وزر الاستماع)
  examples: [
    {
      de: "Kannst du **mir** bitte bei den schweren Hausaufgaben helfen?",
      ar: "هل يمكنك من فضلك أن تساعدني في الواجبات المنزلية الصعبة؟",
      highlight: "mir",
      audio: true,
      note: "helfen يتطلب Dativ ← mir (وليس mich)"
    },
    {
      de: "Ich danke **dir** von ganzem Herzen für deine Hilfe.",
      ar: "أشكركَ من كل قلبي على مساعدتك.",
      highlight: "dir",
      audio: true,
      note: "danken يتطلب Dativ ← dir (وليس dich)"
    },
    {
      de: "Das rote Auto vor der Tür gehört **meinem** Vater.",
      ar: "السيارة الحمراء أمام الباب ملكٌ لأبي.",
      highlight: "meinem",
      audio: true,
      note: "der Vater مذكر في Dativ بعد gehören ← meinem Vater"
    },
    {
      de: "Die italienische Pizza schmeckt **den** Kinder**n** besonders gut.",
      ar: "البيتزا الإيطالية يعجب مذاقها الأطفال جداً.",
      highlight: "den",
      audio: true,
      note: "die Kinder جمع في Dativ ← den Kindern بإضافة حرف n"
    },
    {
      de: "Wir gratulieren **Ihnen** ganz herzlich zum Geburtstag, Herr Müller!",
      ar: "نهنئ حضرتكم بكل حرارة بعيد ميلادكم يا سيد مولر!",
      highlight: "Ihnen",
      audio: true,
      note: "gratulieren بصيغة الاحترام يتطلب Dativ ← Ihnen"
    },
    {
      de: "Passt **ihm** der Termin am Montag um zehn Uhr?",
      ar: "هل يناسبه موعد يوم الإثنين في الساعة العاشرة؟",
      highlight: "ihm",
      audio: true,
      note: "passen للأشخاص يتطلب Dativ ← ihm"
    },
    {
      de: "Das neue Kleid gefällt **meiner** Mutter sehr.",
      ar: "الفستان الجديد يعجب أمي كثيراً.",
      highlight: "meiner",
      audio: true,
      note: "die Mutter مؤنث في Dativ بعد gefallen ← meiner Mutter"
    },
    {
      de: "Mein Kopf tut **mir** nach dem langen Arbeitstag schrecklich weh.",
      ar: "رأسي يؤلمني بشدة بعد يوم العمل الطويل.",
      highlight: "mir",
      audio: true,
      note: "wehtun يتطلب Dativ للشخص المتألم ← tut mir weh"
    },
    {
      de: "Warum antwortest du **dem** Lehrer nicht auf seine Frage?",
      ar: "لماذا لا تجيب المعلم على سؤاله؟",
      highlight: "dem",
      audio: true,
      note: "der Lehrer مذكر في Dativ بعد antworten ← dem Lehrer"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "الفرق الصادم مع الأفعال العربية (helfen, danken, gratulieren): في العربية 'ساعدني'، 'شكرني'، 'هنأني' كلها أفعال متعدية لمفعول به منصوب (الياء مفعول به). أما في الألمانية فهذه الأفعال تأخذ مجروراً (Dativ) حصراً. قل دائماً: Hilf **mir** و Ich danke **dir** و Ich gratuliere **ihm**.",
    "انتبه لتحول أداة المؤنث إلى der: عندما تقرأ 'Ich helfe **der** Frau' قد يخيل إليك للوهلة الأولى أن der أداة مذكر! تذكر أن أداة التعريف المؤنثة die تتحول في الداتيف إلى der (die Frau ← der Frau).",
    "قاعدة حرف n الإضافي لجمع الداتيف (Dativ-n): أي اسم في صيغة الجمع يقع في حالة الداتيف يجب إضافة حرف -n إلى آخره، إلا إذا كان ينتهي أصلاً بـ n أو s: نقول den Kinder**n** (وليس den Kinder) و den Freunde**n** (وليس den Freunde)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "حالة الداتيف (Der Dativ) تجيب عن سؤال المجرور: Wem? (لِمَن؟).",
    "تتحول أدوات الأسماء في الداتيف: der و das تصبحان **dem**، و die المؤنث تصبح **der**، و die الجمع تصبح **den + n**.",
    "ضمائر الداتيف الشخصية: mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen.",
    "أهم أفعال الداتيف الثابتة: helfen, danken, gehören, gefallen, schmecken, passen, stehen, gratulieren, antworten, wehtun.",
    "احذر دائماً: لا تقِس على اللغة العربية؛ فالأفعال (helfen, danken) تأخذ داتيف في الألمانية (Hilf mir / Danke dir)."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "der Dativ", plural: "-", ar: "حالة الجر (الداتيف)", article: "der", example: "Das Verb verlangt den Dativ." },
    { de: "helfen", plural: "-", ar: "يساعد (يأخذ Dativ)", article: "", example: "Kannst du mir helfen?" },
    { de: "danken", plural: "-", ar: "يشكر (يأخذ Dativ)", article: "", example: "Ich danke dir herzlich." },
    { de: "gefallen", plural: "-", ar: "يعجب مظهراً (يأخذ Dativ)", article: "", example: "Das Bild gefällt mir." },
    { de: "gehören", plural: "-", ar: "يخص / ملك لـ (يأخذ Dativ)", article: "", example: "Wem gehört das Handy?" },
    { de: "schmecken", plural: "-", ar: "يعجب مذاقاً (يأخذ Dativ)", article: "", example: "Die Suppe schmeckt mir gut." },
    { de: "wehtun", plural: "-", ar: "يؤلم / يوجع (يأخذ Dativ)", article: "", example: "Mein Bein tut mir weh." },
    { de: "gratulieren", plural: "-", ar: "يهنئ (يأخذ Dativ)", article: "", example: "Wir gratulieren Ihnen." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "اختر الضمير الصحيح: Kannst du ___ bitte helfen? (أنا)",
      options: ["mir", "mich", "ich", "mein"],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "الفعل helfen يتطلب دائماً مفعولاً في حالة الداتيف (Dativ)، وضمير الداتيف لـ ich هو mir."
    },
    {
      type: "fill-blank",
      question: "املأ الفراغ بأداة التعريف المناسبة في الداتيف (die Mutter = مؤنث):",
      sentence: "Ich helfe ___ Mutter beim Kochen.",
      answer: "der",
      accept: ["der"],
      options: ["der", "die", "dem"],
      correctOption: "der",
      explanation: "اسم المؤنث (die) يتحول في حالة الداتيف بعد الفعل helfen إلى der (der Mutter)."
    },
    {
      type: "word-order",
      question: "رتب الجملة بالشكل الصحيح:",
      words: ["Der", "Kopf", "tut", "mir", "weh"],
      answer: "Der Kopf tut mir weh",
      correct: "Der Kopf tut mir weh",
      correctOrder: ["Der", "Kopf", "tut", "mir", "weh"],
      explanation: "الفاعل (Der Kopf) + الفعل (tut) + ضمير الداتيف (mir) + البادئة المنفصلة (weh)."
    },
    {
      type: "multiple-choice",
      question: "اختر الضمير الصحيح: Ich danke ___ für das schöne Geschenk. (أنتَ = du)",
      options: ["dir", "dich", "du", "dein"],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "الفعل danken يتطلب مفعولاً في الداتيف (Dativ)، وضمير الداتيف لـ du هو dir."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ الإعرابي في جملة المساعدة التالية:",
      text: "Ich helfe dich gern.",
      sentence: "Ich helfe dich gern.",
      incorrect: "Ich helfe dich gern.",
      answer: "Ich helfe dir gern.",
      correct: "Ich helfe dir gern.",
      corrected: "Ich helfe dir gern.",
      accept: ["Ich helfe dir gern", "Ich helfe dir gern."],
      explanation: "الفعل helfen يطلب داتيف، لذلك نستخدم dir وليس ضمير النصب dich."
    },
    {
      type: "match",
      question: "طابق كل ضمير شخصي في الرفع مع ضميره في حالة الداتيف:",
      pairs: [
        { left: "ich (أنا)", right: "mir" },
        { left: "du (أنت)", right: "dir" },
        { left: "er (هو)", right: "ihm" },
        { left: "sie (هي)", right: "ihr" }
      ],
      explanation: "ich → mir, du → dir, er → ihm, sie → ihr."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: السيارة تخص والدي. (der Vater)",
      text: "السيارة تخص والدي.",
      answer: "Das Auto gehört meinem Vater.",
      target: "Das Auto gehört meinem Vater.",
      accept: [
        "Das Auto gehört meinem Vater",
        "Das Auto gehört meinem Vater."
      ],
      explanation: "الفعل gehören يطلب داتيف، والمذكر der Vater يأخذ أداة الملكية meinem Vater."
    },
    {
      type: "fill-blank",
      question: "أضف حرف Dativ-n لاسم الجمع في الداتيف (die Kinder):",
      sentence: "Die Schokolade schmeckt den Kinder___ sehr gut.",
      answer: "n",
      accept: ["n"],
      options: ["n", "s", "en"],
      correctOption: "n",
      explanation: "في حالة جمع الداتيف، يضاف حرف -n إلى نهاية الاسم: den Kindern."
    },
    {
      type: "error-correction",
      question: "صحح الضمير في جملة الاستلذاذ بالطعام التالية:",
      text: "Die Pizza schmeckt mich sehr gut.",
      sentence: "Die Pizza schmeckt mich sehr gut.",
      incorrect: "Die Pizza schmeckt mich sehr gut.",
      answer: "Die Pizza schmeckt mir sehr gut.",
      correct: "Die Pizza schmeckt mir sehr gut.",
      corrected: "Die Pizza schmeckt mir sehr gut.",
      accept: ["Die Pizza schmeckt mir sehr gut", "Die Pizza schmeckt mir sehr gut."],
      explanation: "الفعل schmecken يتطلب ضمير داتيف للشخص المتذوق: schmeckt mir (وليس mich)."
    },
    {
      type: "multiple-choice",
      question: "ما هي أداة الاستفهام المستخدمة للسؤال عن الشخص في حالة الداتيف؟",
      options: ["Wem", "Wen", "Wer", "Was"],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "نسأل عن الفاعل بـ Wer، وعن مفعول النصب بـ Wen، وعن مفعول الجر الداتيف بـ Wem (Wem gehört das Auto?)."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة متعددة الخيارات)
  quiz: [
    {
      type: "multiple-choice",
      question: "Welches Pronomen ist richtig? «Der Mantel gefällt ___ sehr gut.» (هو = er)",
      options: ["ihm", "ihn", "er"],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "الفعل gefallen يتطلب داتيف، وضمير الداتيف لـ er هو ihm."
    },
    {
      type: "multiple-choice",
      question: "Welcher Artikel passt? «Er antwortet ___ Lehrerin nicht.» (die Lehrerin = مؤنث)",
      options: ["der", "die", "dem"],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "die Lehrerin مؤنث، وتتحول في الداتيف بعد antworten إلى der."
    },
    {
      type: "multiple-choice",
      question: "Welcher Satz ist grammatisch fehlerfrei?",
      options: [
        "Ich gratuliere dir zum Geburtstag.",
        "Ich gratuliere dich zum Geburtstag.",
        "Ich gratuliere du zum Geburtstag."
      ],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "الفعل gratulieren يتطلب مفعولاً في الداتيف: gratuliere dir."
    },
    {
      type: "multiple-choice",
      question: "«Wie geht es ___?» (حضرتك = Sie)",
      options: ["Ihnen", "Sie", "Ihr"],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "التعبير Wie geht es يتطلب داتيف، ولصيغة الاحترام نستخدم Ihnen بحرف كبير."
    },
    {
      type: "multiple-choice",
      question: "Was passiert mit Nomen im Dativ Plural?",
      options: [
        "Sie bekommen meistens die Endung -n.",
        "Sie bekommen die Endung -s.",
        "Sie verändern sich nie."
      ],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "في حالة جمع الداتيف يضاف حرف -n إلى نهاية الاسم: den Kindern, den Freunden."
    }
  ]
};

window.lessons = window.LESSONS;
