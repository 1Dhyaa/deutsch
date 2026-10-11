window.LESSONS = window.LESSONS || window.lessons || {};
window.lessons = window.LESSONS;
window.LESSONS["a1-review-04"] = {
  id: "a1-review-04",
  level: "a1-review",
  order: 4,
  slug: "akkusativ",
  title: {
    de: "Der Akkusativ",
    ar: "حالة النصب (Der Akkusativ)"
  },
  tags: ["grammar", "akkusativ", "cases", "nouns", "a1"],
  goal: "فهم حالة النصب (Akkusativ) في الألمانية وكيفية تغير أدوات التعريف والنكرة فيها، والتعرف على الأفعال التي تتطلبها.",
  explanation: [
    {
      type: "text",
      content: "حالة النصب (Akkusativ) تقابل المفعول به المباشر في اللغة العربية. هو الشخص أو الشيء الذي يقع عليه فعل الفاعل."
    },
    {
      type: "rule",
      content: "الخبر السار: في حالة الأكوزاتيف، تتغير فقط أدوات الاسم المذكر (der). الأسماء المؤنثة (die)، المحايدة (das)، والجمع (die) تبقى كما هي دون تغيير!"
    },
    {
      type: "table",
      headers: ["الجنس", "Nominativ (الفاعل)", "Akkusativ (المفعول به)"],
      rows: [
        ["المذكر (Maskulin)", "der / ein", "**den** / **einen**"],
        ["المؤنث (Feminin)", "die / eine", "die / eine"],
        ["المحايد (Neutral)", "das / ein", "das / ein"],
        ["الجمع (Plural)", "die / -", "die / -"]
      ]
    },
    {
      type: "text",
      content: "ينطبق هذا التغيير (الخاص بالمذكر) أيضاً على أدوات النفي والملكية: kein يصبح keinen، و mein يصبح meinen للمذكر في الأكوزاتيف."
    },
    {
      type: "text",
      content: "كيف نعرف أننا نحتاج حالة الأكوزاتيف؟ \n1. **من خلال الفعل:** معظم الأفعال في الألمانية تأخذ مفعولاً به في حالة الأكوزاتيف (مثل: haben, brauchen, suchen, finden, kaufen, essen, trinken).\n2. **للسؤال عن الأكوزاتيف:** نستخدم **Wen?** (مَن؟ - للأشخاص) و **Was?** (ماذا؟ - للأشياء)."
    }
  ],
  examples: [
    {
      de: "Ich habe **einen** Hund.",
      ar: "لدي كلب.",
      audio: true,
      note: "Hund مذكر (der). مع الفعل haben يصبح einen."
    },
    {
      de: "Sie braucht **den** Stift.",
      ar: "هي تحتاج القلم.",
      audio: true,
      note: "Stift مذكر (der). الفعل brauchen يتطلب أكوزاتيف -> den."
    },
    {
      de: "Wir essen **einen** Apfel.",
      ar: "نحن نأكل تفاحة.",
      audio: true,
      note: "Apfel مذكر (der). المفعول به المباشر -> einen."
    },
    {
      de: "Er sucht **das** Buch.",
      ar: "هو يبحث عن الكتاب.",
      audio: true,
      note: "Buch محايد (das). لا تتغير الأداة في الأكوزاتيف."
    },
    {
      de: "Ich kaufe **die** Tasche.",
      ar: "أنا أشتري الحقيبة.",
      audio: true,
      note: "Tasche مؤنث (die). لا تتغير الأداة."
    },
    {
      de: "Siehst du **den** Mann?",
      ar: "هل ترى الرجل؟",
      audio: true,
      note: "Mann مذكر (der). المفعول به للفعل sehen."
    },
    {
      de: "**Wen** rufst du an?",
      ar: "بمن تتصل؟",
      audio: true,
      note: "سؤال عن شخص في حالة الأكوزاتيف (Wen)."
    },
    {
      de: "**Was** trinkst du?",
      ar: "ماذا تشرب؟",
      audio: true,
      note: "سؤال عن شيء في حالة الأكوزاتيف (Was)."
    }
  ],
  arabicTips: [
    "لا تفكر في المذكر والمؤنث بالعربية! 'تفاحة' مؤنث بالعربية لكن Apfel مذكر بالألمانية (der Apfel)، لذا في الأكوزاتيف تصبح einen Apfel.",
    "تذكر دائماً أن الأكوزاتيف يغير المذكر فقط (der -> den). هذه هي أهم قاعدة يجب حفظها في البداية.",
    "الفعل 'haben' (يملك) دائماً يأخذ أكوزاتيف. 'Ich habe einen Bruder'."
  ],
  summary: [
    "الأكوزاتيف هو حالة المفعول به المباشر.",
    "فقط المذكر يتغير: der يصبح den، و ein يصبح einen.",
    "المؤنث (die)، المحايد (das)، والجمع (die) تبقى بدون تغيير.",
    "الأفعال الشائعة للأكوزاتيف: haben, brauchen, suchen, kaufen, essen, trinken.",
    "السؤال عن الأكوزاتيف: Wen (للعاقل) / Was (لغير العاقل)."
  ],
  vocabulary: [
    { de: "brauchen", plural: "-", ar: "يحتاج", example: "Ich brauche einen Stift." },
    { de: "suchen", plural: "-", ar: "يبحث عن", example: "Wir suchen das Hotel." },
    { de: "kaufen", plural: "-", ar: "يشتري", example: "Er kauft einen Computer." },
    { de: "der Hund", plural: "die Hunde", ar: "الكلب", example: "Ich liebe meinen Hund." },
    { de: "der Apfel", plural: "die Äpfel", ar: "التفاحة", example: "Sie isst einen Apfel." },
    { de: "das Buch", plural: "die Bücher", ar: "الكتاب", example: "Ich lese ein Buch." }
  ],
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich brauche ____ Computer (der).",
      options: ["ein", "einen", "eine"],
      correctIndex: 1,
      explanation: "Computer مذكر (der)، والفعل brauchen يأخذ Akkusativ، لذا ein تصبح einen."
    },
    {
      type: "multiple-choice",
      question: "Sie hat ____ Schwester (die).",
      options: ["eine", "einen", "ein"],
      correctIndex: 0,
      explanation: "Schwester مؤنث (die)، الأداة لا تتغير في الـ Akkusativ."
    },
    {
      type: "multiple-choice",
      question: "Er sucht ____ Auto (das).",
      options: ["einen", "ein", "eine"],
      correctIndex: 1,
      explanation: "Auto محايد (das)، الأداة لا تتغير في الـ Akkusativ."
    },
    {
      type: "fill-blank",
      question: "Wir kaufen ____ Tisch (der).",
      options: ["den", "der", "das"],
      correctOption: "den",
      explanation: "Tisch مذكر (der). في حالة الأكوزاتيف (مفعول به لـ kaufen) der تصبح den."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: Ich habe ein Hund.",
      incorrect: "Ich habe ein Hund.",
      correct: "Ich habe einen Hund.",
      explanation: "Hund مذكر. الفعل haben يأخذ أكوزاتيف، لذا ein يجب أن تكون einen."
    },
    {
      type: "translate",
      question: "ترجم: أنا أرى الرجل.",
      target: "Ich sehe den Mann.",
      explanation: "الرجل (der Mann) يقع عليه فعل الرؤية (Akkusativ) فيصبح den Mann."
    },
    {
      type: "match",
      question: "طابق بين أداة الـ Nominativ وأداة الـ Akkusativ:",
      pairs: [
        { left: "der", right: "den" },
        { left: "ein (Maskulin)", right: "einen" },
        { left: "die (Feminin)", right: "die" },
        { left: "das", right: "das" }
      ],
      explanation: "فقط المذكر يتغير في الأكوزاتيف."
    },
    {
      type: "multiple-choice",
      question: "____ fragst du? - Den Lehrer.",
      options: ["Wer", "Was", "Wen"],
      correctIndex: 2,
      explanation: "نسأل عن شخص في حالة الأكوزاتيف (Den Lehrer) باستخدام Wen."
    },
    {
      type: "fill-blank",
      question: "Trinkst du ____ Wasser? (das)",
      options: ["ein", "einen", "eine"],
      correctOption: "ein",
      explanation: "Wasser محايد (das)، لذا نستخدم ein وهي لا تتغير."
    },
    {
      type: "word-order",
      question: "رتب الجملة (الفاعل، الفعل، المفعول به):",
      words: ["kauft", "Er", "einen", "Kaffee"],
      correctOrder: ["Er", "kauft", "einen", "Kaffee"],
      explanation: "Er (فاعل)، kauft (فعل)، einen Kaffee (مفعول به - أكوزاتيف)."
    }
  ],
  quiz: [
    {
      question: "أي جنس تتغير أداته في حالة الـ Akkusativ؟",
      options: ["المحايد (das)", "المؤنث (die)", "الجمع (die)", "المذكر (der)"],
      correctIndex: 3,
      explanation: "المذكر فقط (der) يتغير ويصبح (den)."
    },
    {
      question: "ما هي أداة الاستفهام المناسبة للسؤال عن شخص في حالة الـ Akkusativ؟",
      options: ["Wer", "Wo", "Wen", "Wem"],
      correctIndex: 2,
      explanation: "Wen تعني (مَن؟) في حالة الأكوزاتيف المفعول به."
    },
    {
      question: "كيف تصبح (mein) للمذكر في حالة الـ Akkusativ؟",
      options: ["meine", "meinen", "meinem", "mein"],
      correctIndex: 1,
      explanation: "تأخذ نفس النهاية مثل (einen) أو (den)، فتصبح meinen."
    },
    {
      question: "اختر الجملة الصحيحة:",
      options: ["Ich habe der Schlüssel.", "Ich habe das Schlüssel.", "Ich habe den Schlüssel.", "Ich habe die Schlüssel."],
      correctIndex: 2,
      explanation: "Schlüssel مذكر (der). مع الفعل haben يصبح den Schlüssel."
    },
    {
      question: "هل تتغير أداة المؤنث (die) في حالة الـ Akkusativ؟",
      options: ["نعم، تصبح den", "نعم، تصبح der", "لا، تبقى die", "نعم، تصبح das"],
      correctIndex: 2,
      explanation: "أدوات المؤنث والمحايد والجمع لا تتغير أبداً في الأكوزاتيف."
    }
  ]
};
