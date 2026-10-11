// website/data/lessons/a1-review/07-unregelmaessige-verben.js
window.LESSONS = window.LESSONS || {};
window.lessons = window.lessons || {};

window.LESSONS["a1-review-07"] = {
  id: "a1-review-07",
  level: "a1-review",
  order: 7,
  slug: "unregelmaessige-verben",
  title: {
    de: "Unregelmäßige Verben (e→i / a→ä)",
    ar: "الأفعال الشاذة وتغير حرف العلة (e→i / a→ä)"
  },
  tags: ["grammatik", "verben", "praesens", "a1", "unregelmaessig"],

  // 1. الهدف من الدرس
  goal: "ستتعلم كيفية تصريف الأفعال الشاذة وتغير حرف العلة في المضارع (Präsens) حصراً مع الضمائر (du) و (er/sie/es)، والتمييز بين الأنماط الثلاثة الرئيسية: e→i و e→ie و a→ä.",

  // 2. الشرح مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية، هناك مجموعة هامة جداً من الأفعال تسمى **الأفعال القوية أو الشاذة (Starke / Unregelmäßige Verben)**. الميزة الأساسية لهذه الأفعال في زمن الحاضر (Präsens) هي أن حرف العلة في جذر الفعل يتغير، ولكن **فقط** مع الضمائر المخاطب المفرد (**du**) والغائب المفرد (**er / sie / es / man**)."
    },
    {
      type: "rule",
      content: "قاعدة ذهبية: تغير حرف العلة يحدث **فقط مع du و er/sie/es**! مع بقية الضمائر (ich, wir, ihr, sie/Sie) يصرف الفعل بشكل منتظم تماماً وبدون أي تغيير في الجذر."
    },
    {
      type: "text",
      content: "تنقسم هذه الأفعال في المستوى A1 إلى ثلاثة أنماط رئيسية شائعة الاستخدام:"
    },
    {
      type: "table",
      headers: ["النمط", "أمثلة شائعة", "تصريف du", "تصريف er / sie / es"],
      rows: [
        ["**e → i**", "sprechen, geben, essen, helfen, treffen", "du sprichst / gibst / isst / hilfst", "er spricht / gibt / isst / hilft"],
        ["**e → ie**", "sehen, lesen, empfehlen", "du siehst / liest / empfiehlst", "er sieht / liest / empfiehlt"],
        ["**a → ä**", "fahren, schlafen, tragen, waschen, laufen (au→äu)", "du fährst / schläfst / trägst / wäschst", "er fährt / schläft / trägt / wäscht"]
      ]
    },
    {
      type: "text",
      content: "لنقارن تصريف الفعل الشاذ **sprechen** (يتحدث) والفعل الشاذ **fahren** (يسافر/يقود) عبر كافة الضمائر الشخصية لتلاحظ أين يحدث التغيير:"
    },
    {
      type: "table",
      headers: ["الضمير", "الفعل: sprechen (e → i)", "الفعل: fahren (a → ä)", "ملاحظة التغيير"],
      rows: [
        ["ich", "ich spreche", "ich fahre", "منتظم تماماً (بدون تغيير)"],
        ["**du**", "**du sprichst**", "**du fährst**", "يتغير حرف العلة + نهاية -st"],
        ["**er / sie / es**", "**er spricht**", "**er fährt**", "يتغير حرف العلة + نهاية -t"],
        ["wir", "wir sprechen", "wir fahren", "منتظم تماماً (المصدر)"],
        ["ihr", "ihr sprecht", "ihr fahrt", "منتظم تماماً (جذر أصلي + -t)"],
        ["sie / Sie", "sie sprechen", "sie fahren", "منتظم تماماً (المصدر)"]
      ]
    },
    {
      type: "rule",
      content: "حالات خاصة هامة:\n1. الفعل **nehmen** (يأخذ): يتغير جذره بشكل خاص (du nimmst / er nimmt).\n2. الأفعال المنتهية بـ s أو ß مثل **essen** و **lesen**: مع du نضيف -t فقط بدلاً من -st (du isst / du liest) لمنع توالي حروف الصفير."
    }
  ],

  // 3. الأمثلة (8+ أمثلة ناطقة مع إبراز القاعدة والترجمة)
  examples: [
    {
      de: "Sami **spricht** sehr gut Deutsch.",
      ar: "سامي يتحدث الألمانية بشكل جيد جداً.",
      highlight: "spricht",
      audio: true,
      note: "sprechen مع er ← e تتحول إلى i (er spricht)"
    },
    {
      de: "**Fährst** du morgen mit dem Zug nach München?",
      ar: "هل ستسافر غداً بالقطار إلى ميونخ؟",
      highlight: "Fährst",
      audio: true,
      note: "fahren مع du ← a تأخذ أوملاوت ä (du fährst)"
    },
    {
      de: "Was **liest** du gerade, Sarah?",
      ar: "ماذا تقرئين الآن يا سارة؟",
      highlight: "liest",
      audio: true,
      note: "lesen مع du ← e تتحول إلى ie (du liest)"
    },
    {
      de: "Er **hilft** seiner Mutter in der Küche.",
      ar: "هو يساعد والدته في المطبخ.",
      highlight: "hilft",
      audio: true,
      note: "helfen مع er ← e تتحول إلى i (er hilft)"
    },
    {
      de: "Das Kind **schläft** schon seit zwei Stunden.",
      ar: "الطفل نائم منذ ساعتين بالفعل.",
      highlight: "schläft",
      audio: true,
      note: "schlafen مع das Kind (es) ← a تصبح ä (es schläft)"
    },
    {
      de: "**Isst** du gerne Pizza oder Pasta?",
      ar: "هل تحب أكل البيتزا أم المعكرونة؟",
      highlight: "Isst",
      audio: true,
      note: "essen مع du ← e تصبح i ومع انتهاء الجذر بـ s تضاف t فقط (du isst)"
    },
    {
      de: "Am Abend **sieht** Markus oft fern.",
      ar: "في المساء يشاهد ماركوس التلفاز غالباً.",
      highlight: "sieht",
      audio: true,
      note: "sehen مع er ← e تتحول إلى ie (er sieht)"
    },
    {
      de: "Mein Bruder **nimmt** jeden Tag den Bus.",
      ar: "أخي يستقل (يأخذ) الحافلة كل يوم.",
      highlight: "nimmt",
      audio: true,
      note: "nehmen مع er ← e تصبح i مع مضاعفة m (er nimmt)"
    },
    {
      de: "Was **trägst** du heute für eine Jacke?",
      ar: "أي سترة ترتديها اليوم؟",
      highlight: "trägst",
      audio: true,
      note: "tragen مع du ← a تصبح ä (du trägst)"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "الخطأ الأكثر شيوعاً عند الطلاب العرب هو تطبيق التغيير على ضمير (ich) أو (ihr)! تذكر دائماً: ich fahre وليس ich fähre، و ihr sprecht وليس ihr spricht.",
    "في العربية يتغير تشكيل الفعل حسب الوزن الصرفي، أما في الألمانية فإن تغير حرف العلة هذا محصور فقط في du و er/sie/es بزمن المضارع، ويجب حفظ كل فعل مع نمطه.",
    "انتبه للأفعال التي ينتهي جذرها بحرف s مثل (lesen / essen): مع الضمير du لا نكرر حرف الـ s، بل نضيف -t فقط، فيصبح تصريف du وتصريف er متطابقين تماماً (du isst = er isst / du liest = er liest)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "تغير حرف العلة يحدث فقط وحصراً مع (du) و (er/sie/es/man).",
    "الضمائر ich, wir, ihr, sie, Sie تبقى منتظمة تماماً ولا يتغير جذرها.",
    "نمط e→i: sprechen (spricht), geben (gibt), helfen (hilft), essen (isst).",
    "نمط e→ie: sehen (sieht), lesen (liest), empfehlen (empfiehlt).",
    "نمط a→ä: fahren (fährt), schlafen (schläft), waschen (wäscht), tragen (trägt)."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "sprechen", plural: "-", ar: "يتحدث / يتكلم", article: "-", example: "Sprichst du Deutsch?" },
    { de: "fahren", plural: "-", ar: "يقود / يسافر بوسيلة نقل", article: "-", example: "Er fährt mit dem Auto." },
    { de: "helfen", plural: "-", ar: "يساعد", article: "-", example: "Sie hilft dem Mann." },
    { de: "lesen", plural: "-", ar: "يقرأ", article: "-", example: "Ich lese eine Zeitung." },
    { de: "schlafen", plural: "-", ar: "ينام", article: "-", example: "Das Baby schläft ruhig." },
    { de: "das Buch", plural: "die Bücher", ar: "الكتاب", article: "das", example: "Er liest ein interessantes Buch." },
    { de: "der Zug", plural: "die Züge", ar: "القطار", article: "der", example: "Der Zug fährt um 9 Uhr ab." },
    { de: "das Essen", plural: "-", ar: "الطعام / الأكل", article: "das", example: "Das Essen schmeckt lecker." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "اختر التصريف الصحيح للفعل sprechen مع الضمير (du):",
      options: ["du sprechst", "du sprichst", "du sprecht", "du spricht"],
      answer: 1,
      correct: 1,
      correctIndex: 1,
      explanation: "الفعل sprechen يتحول فيه حرف e إلى i مع الضمير du، وتضاف النهاية -st فتصبح du sprichst."
    },
    {
      type: "fill-blank",
      question: "أكمل الفراغ بالتصريف الصحيح للفعل fahren:",
      sentence: "Mein Vater ___ jeden Tag mit dem Auto zur Arbeit.",
      answer: "fährt",
      accept: ["fährt", "faehrt"],
      explanation: "الفاعل Mein Vater هو مفرد غائب (er)، لذا يأخذ الفعل أوملاوت a→ä ونهاية -t: fährt."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين سؤال صحيح:",
      words: ["du", "Liest", "gerne", "deutsche", "Bücher", "?"],
      answer: "Liest du gerne deutsche Bücher ?",
      correct: "Liest du gerne deutsche Bücher ?",
      correctOrder: ["Liest", "du", "gerne", "deutsche", "Bücher", "?"],
      explanation: "في السؤال بنعم/لا يبدأ السؤال بالفعل المصرف (Liest)، يليه الفاعل (du)."
    },
    {
      type: "multiple-choice",
      question: "أي جملة من الجمل التالية صحيحة تماماً؟",
      options: [
        "Ich fähre nach Berlin.",
        "Er helft seiner Oma.",
        "Sie sieht einen spannenden Film.",
        "Ihr spricht zu schnell."
      ],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "الجملة الصحيحة هي 'Sie sieht...' لأن sehen يتحول e→ie مع الغائب المفرد. في بقية الخيارات: ich fahre بدون أوملاوت، er hilft وليس helft، و ihr sprecht بالـ e."
    },
    {
      type: "match",
      question: "طابق بين التصريف باللغة الألمانية والمعنى المناسب بالعربية:",
      pairs: [
        { left: "هو يتحدث", right: "er spricht" },
        { left: "أنت تقود / تسافر", right: "du fährst" },
        { left: "هي ترى", right: "sie sieht" },
        { left: "أنت تساعد", right: "du hilfst" }
      ],
      explanation: "كل هذه أفعال شاذة يتغير حرف علتها مع du و er/sie/es."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في تصريف الفعل في الجملة التالية:",
      text: "Thomas esst einen Apfel.",
      sentence: "Thomas esst einen Apfel.",
      incorrect: "Thomas esst einen Apfel.",
      answer: "Thomas isst einen Apfel.",
      corrected: "Thomas isst einen Apfel.",
      accept: ["Thomas isst einen Apfel.", "Thomas isst einen Apfel"],
      explanation: "الفعل essen يتحول فيه حرف e إلى i مع الغائب المفرد (er): Thomas isst وليس esst."
    },
    {
      type: "fill-blank",
      question: "أكمل الفراغ بالتصريف الصحيح للفعل schlafen:",
      sentence: "Wie lange ___ du am Wochenende?",
      answer: "schläfst",
      accept: ["schläfst", "schlaefst"],
      explanation: "مع الضمير du يأخذ الفعل schlafen أوملاوت فيصبح schläfst."
    },
    {
      type: "translate",
      question: "ترجم الجملة التالية إلى الألمانية:",
      text: "هو يساعد صديقه.",
      from: "هو يساعد صديقه.",
      answer: "Er hilft seinem Freund.",
      accept: ["Er hilft seinem Freund.", "Er hilft seinem Freund"],
      explanation: "helfen يتحول e→i مع er فيصبح hilft، والفعل helfen يتطلب حالة Dativ (seinem Freund)."
    },
    {
      type: "multiple-choice",
      question: "كيف نصرف الفعل nehmen مع الضمير (du)؟",
      options: ["du nehmst", "du niehmst", "du nimmst", "du nehmt"],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "الفعل nehmen شاذ واستثنائي: e تتحول إلى i مع مضاعفة m، فيصبح: du nimmst."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في تصريف الفعل مع الضمير ihr:",
      text: "Ihr fahrtet nach Hause.",
      sentence: "Ihr fahrtet nach Hause.",
      incorrect: "Ihr fahrtet nach Hause.",
      answer: "Ihr fahrt nach Hause.",
      corrected: "Ihr fahrt nach Hause.",
      accept: ["Ihr fahrt nach Hause.", "Ihr fahrt nach Hause"],
      explanation: "الضمير ihr يصرف معه الفعل بشكل منتظم في المضارع وبدون أوملاوت: ihr fahrt."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة اختيار من متعدد)
  quiz: [
    {
      type: "multiple-choice",
      question: "مع أي من الضمائر التالية يحدث تغير حرف العلة في الأفعال الشاذة بالمضارع؟",
      options: [
        "مع الضمائر ich و wir",
        "مع الضمائر du و er/sie/es فقط",
        "مع جميع الضمائر بلا استثناء",
        "مع الضمير ihr فقط"
      ],
      answer: 1,
      correct: 1,
      correctIndex: 1,
      explanation: "قاعدة أساسية: تغير حرف العلة في المضارع محصور فقط بضمير المخاطب المفرد (du) والغائب المفرد (er/sie/es/man)."
    },
    {
      type: "multiple-choice",
      question: "ما هو تصريف الفعل sehen مع الضمير (er)؟",
      options: ["er seht", "er siht", "er sieht", "er sehet"],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "الفعل sehen ينتمي لنمط e→ie، فيصبح تصريفه er sieht."
    },
    {
      type: "multiple-choice",
      question: "اختر الجملة الخالية من أي خطأ لغوي:",
      options: [
        "Du sprichst sehr schnell.",
        "Du sprechst sehr schnell.",
        "Er sprecht sehr schnell.",
        "Ich sprich Deutsch."
      ],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "الصحيح هو 'Du sprichst' لأن e تتحول إلى i مع du. مع ich يبقى أصل الفعل 'ich spreche'."
    },
    {
      type: "multiple-choice",
      question: "كيف يصرف الفعل geben في الجملة: 'Maria ___ mir ein Buch'؟",
      options: ["gebt", "gebit", "gibt", "giebt"],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "الفعل geben يتحول من e إلى i مع الغائب المفرد Maria (sie)، فتصبح gibt."
    },
    {
      type: "multiple-choice",
      question: "ما هو تصريف الفعل tragen مع الضمير (du)؟",
      options: ["du tragst", "du trägst", "du traggst", "du trägest"],
      answer: 1,
      correct: 1,
      correctIndex: 1,
      explanation: "الفعل tragen يأخذ أوملاوت a→ä مع du فتصبح du trägst."
    }
  ]
};

window.lessons["a1-review-07"] = window.LESSONS["a1-review-07"];
