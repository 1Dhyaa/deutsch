window.LESSONS = window.LESSONS || window.lessons || {};
window.lessons = window.LESSONS;
window.LESSONS["a1-review-03"] = {
  id: "a1-review-03",
  level: "a1-review",
  order: 3,
  slug: "negation",
  title: {
    de: "Negation: nicht vs. kein",
    ar: "النفي: nicht مقابل kein"
  },
  tags: ["grammar", "negation", "nicht", "kein", "a1"],
  goal: "تعلم كيفية نفي الجمل والكلمات في اللغة الألمانية باستخدام nicht و kein ومتى نستخدم كل منهما.",
  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية، لدينا أداتان أساسيتان للنفي: **kein** و **nicht**.\n\nاستخدام **kein** بسيط ومحدد جداً: نستخدمه **فقط** لنفي الأسماء التي تأتي مع أداة نكرة (ein/eine) أو الأسماء التي ليس لها أداة (Nullartikel)."
    },
    {
      type: "rule",
      content: "استخدم kein لنفي الأسماء المسبوقة بـ (ein, eine) أو الأسماء الجمع وغير المعدودة التي لا تسبقها أداة."
    },
    {
      type: "table",
      headers: ["إثبات (Positiv)", "نفي (Negativ)"],
      rows: [
        ["Das ist **ein** Auto.", "Das ist **kein** Auto."],
        ["Ich habe **eine** Katze.", "Ich habe **keine** Katze."],
        ["Ich esse Apfel (kein Artikel).", "Ich esse **keinen** Apfel."],
        ["Ich habe Zeit (kein Artikel).", "Ich habe **keine** Zeit."]
      ]
    },
    {
      type: "text",
      content: "استخدام **nicht** أوسع. نستخدمه لنفي أي شيء آخر: الأفعال، الصفات، الأسماء التي تأتي مع أداة معرفة (der/die/das)، أو أسماء العلم."
    },
    {
      type: "table",
      headers: ["ماذا ننفي؟", "مثال بالنفي (mit nicht)"],
      rows: [
        ["الأفعال (Verben)", "Ich schlafe **nicht**."],
        ["الصفات (Adjektive)", "Das Auto ist **nicht** schnell."],
        ["أداة المعرفة (Bestimmter Artikel)", "Das ist **nicht** das Auto von Ali."],
        ["أسماء العلم (Namen)", "Das ist **nicht** Peter."],
        ["الضمائر (Pronomen)", "Das ist **nicht** mein Buch."]
      ]
    },
    {
      type: "text",
      content: "أين نضع **nicht**؟ عادة تأتي **nicht** في نهاية الجملة إذا كنا ننفي الفعل أو الجملة بأكملها. ولكن إذا كنا ننفي جزءاً محدداً من الجملة (مثل صفة أو حرف جر)، فإن nicht تأتي مباشرة **قبل** الجزء الذي نود نفيه."
    }
  ],
  examples: [
    {
      de: "Ich habe **keinen** Hunger.",
      ar: "أنا لست جائعاً (ليس لدي جوع).",
      audio: true,
      note: "نفي لاسم بدون أداة (Hunger - مذكر، حالة نصب)."
    },
    {
      de: "Das ist **keine** gute Idee.",
      ar: "هذه ليست فكرة جيدة.",
      audio: true,
      note: "نفي لاسم نكرة (eine Idee)."
    },
    {
      de: "Er trinkt **kein** Wasser.",
      ar: "هو لا يشرب الماء.",
      audio: true,
      note: "Wasser اسم غير معدود، لا أداة له، فينفى بـ kein."
    },
    {
      de: "Ich spreche **nicht** Spanisch.",
      ar: "أنا لا أتحدث الإسبانية.",
      audio: true,
      note: "Spanisch هنا صفة لغة/ظرف، ليست اسماً بأداة نكرة، لذا نستخدم nicht."
    },
    {
      de: "Das Essen schmeckt **nicht** gut.",
      ar: "الطعام ليس طعمه جيداً.",
      audio: true,
      note: "نفي للصفة (gut). nicht تأتي قبل الصفة."
    },
    {
      de: "Ich kenne den Mann **nicht**.",
      ar: "أنا لا أعرف الرجل.",
      audio: true,
      note: "الاسم معرف بـ (den)، لذا ننفي الجملة بـ nicht في النهاية."
    },
    {
      de: "Das ist **nicht** mein Auto.",
      ar: "هذه ليست سيارتي.",
      audio: true,
      note: "نفي اسم مسبوق بضمير ملكية (mein)، نستخدم nicht."
    },
    {
      de: "Wir kommen heute **nicht**.",
      ar: "نحن لن نأتي اليوم.",
      audio: true,
      note: "نفي الفعل/الجملة، nicht تأتي في النهاية."
    }
  ],
  arabicTips: [
    "في العربية نستخدم 'لا' أو 'ليس' لكل شيء تقريباً. في الألمانية يجب التفكير: هل أنفي اسماً نكرة؟ استخدم kein. هل أنفي فعلاً أو صفة أو اسماً معرفاً؟ استخدم nicht.",
    "تذكر أن kein تتغير نهايتها مثل ein تماماً (kein, keine, keinen... حسب الحالة الإعرابية: أكوزاتيف أو غيره).",
    "لا يمكنك استخدام nicht و kein معاً لنفي نفس الشيء. 'Ich habe nicht ein Auto' خاطئة جداً، الصحيح 'Ich habe kein Auto'."
  ],
  summary: [
    "kein: لنفي الأسماء النكرة (ein, eine) والأسماء بدون أداة (الجمع وغير المعدود).",
    "nicht: لنفي الأفعال، الصفات، الأسماء المعرفة (der/die/das)، الضمائر (mein/dein)، وأسماء العلم.",
    "موقع nicht: في نهاية الجملة عند نفي الفعل ككل.",
    "موقع nicht: قبل الصفة أو حرف الجر عند نفيهما (nicht gut, nicht aus Deutschland)."
  ],
  vocabulary: [
    { de: "die Idee", plural: "die Ideen", ar: "الفكرة", example: "Das ist eine gute Idee." },
    { de: "der Hunger", plural: "-", ar: "الجوع", example: "Ich habe großen Hunger." },
    { de: "die Zeit", plural: "die Zeiten", ar: "الوقت", example: "Ich habe heute keine Zeit." },
    { de: "schnell", plural: "-", ar: "سريع", example: "Das Auto ist nicht schnell." },
    { de: "kennen", plural: "-", ar: "يعرف (شخصاً أو مكاناً)", example: "Ich kenne ihn nicht." },
    { de: "das Wasser", plural: "die Wässer", ar: "الماء", example: "Trinkst du Wasser?" }
  ],
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich habe ____ Zeit.",
      options: ["nicht", "keine", "kein"],
      correct: 1,
      explanation: "Zeit اسم مؤنث (die Zeit) بدون أداة هنا، لذا نستخدم keine."
    },
    {
      type: "multiple-choice",
      question: "Das ist ____ der Lehrer.",
      options: ["nicht", "kein", "keine"],
      correct: 0,
      explanation: "der Lehrer اسم معرف بأداة المعرفة (der)، لذا نستخدم nicht."
    },
    {
      type: "multiple-choice",
      question: "Er ist ____ groß.",
      options: ["kein", "nicht", "keine"],
      correct: 1,
      explanation: "groß هي صفة (كبير)، الصفات تُنفى بـ nicht."
    },
    {
      type: "fill-blank",
      question: "Das ist ___ Auto.",
      options: ["nicht", "kein", "keine"],
      answer: "kein",
      explanation: "Auto اسم محايد (das) وكان يمكن أن يسبق بـ ein، لذا ننفيه بـ kein."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: Ich trinke nicht Kaffee.",
      incorrect: "Ich trinke nicht Kaffee.",
      correct: "Ich trinke keinen Kaffee.",
      explanation: "Kaffee اسم مذكر بدون أداة (وفي حالة النصب Akkusativ)، لذا ننفيه بـ keinen."
    },
    {
      type: "translate",
      question: "ترجم: هذه ليست قطتي.",
      answer: "Das ist nicht meine Katze.",
      explanation: "نحن ننفي اسماً مسبوقاً بضمير ملكية (meine)، لذا نستخدم nicht."
    },
    {
      type: "word-order",
      question: "رتب كلمات الجملة المنفية:",
      words: ["verstehe", "ich", "das", "nicht"],
      correct: "ich verstehe das nicht",
      explanation: "nicht تأتي في نهاية الجملة عند نفي الجملة بأكملها/الفعل."
    },
    {
      type: "match",
      question: "طابق بين ما نريد نفيه والأداة المناسبة:",
      pairs: [
        { left: "ein Buch", right: "kein" },
        { left: "schön", right: "nicht" },
        { left: "die Frau", right: "nicht" },
        { left: "Kinder", right: "keine" }
      ],
      explanation: "ein Buch -> kein Buch, schön -> nicht schön, die Frau -> nicht die Frau, Kinder -> keine Kinder."
    },
    {
      type: "multiple-choice",
      question: "أي جملة صحيحة؟",
      options: ["Ich arbeite kein heute.", "Ich arbeite heute nicht.", "Ich nicht arbeite heute."],
      correct: 1,
      explanation: "ننفي الفعل (arbeite)، فتوضع nicht في نهاية الجملة."
    },
    {
      type: "fill-blank",
      question: "Wir haben ____ Geld.",
      options: ["nicht", "keine", "kein"],
      answer: "kein",
      explanation: "Geld اسم محايد (das) بدون أداة هنا، لذا نستخدم kein."
    }
  ],
  quiz: [
    {
      question: "متى نستخدم 'kein'؟",
      options: ["لنفي الصفات", "لنفي الأفعال", "لنفي الأسماء النكرة أو بدون أداة", "لنفي الأسماء المعرفة"],
      correct: 2,
      explanation: "kein تستخدم فقط للأسماء التي تأتي مع (ein/eine) أو بدون أداة."
    },
    {
      question: "اختر النفي الصحيح: Das ist ___ mein Haus.",
      options: ["kein", "nicht", "keine", "nichts"],
      correct: 1,
      explanation: "mein Haus تحتوي على ضمير ملكية، لذا نستخدم nicht."
    },
    {
      question: "أين نضع 'nicht' عند نفي صفة؟",
      options: ["في بداية الجملة", "بعد الصفة مباشرة", "قبل الصفة مباشرة", "في نهاية الجملة دائماً"],
      correct: 2,
      explanation: "nicht تأتي قبل الكلمة التي تنفيها إذا كانت صفة أو حرف جر (مثال: nicht gut)."
    },
    {
      question: "اختر النفي الصحيح للجمع: Ich habe ___ Kinder.",
      options: ["kein", "nicht", "keinen", "keine"],
      correct: 3,
      explanation: "Kinder اسم جمع، ليس له أداة نكرة في الإثبات، وينفى بـ keine."
    },
    {
      question: "ما هو الخطأ في جملة: 'Ich spreche nicht Deutsch'؟",
      options: ["لا يوجد خطأ", "يجب استخدام kein", "يجب وضع nicht في البداية", "يجب استخدام nichts"],
      correct: 0,
      explanation: "الجملة صحيحة تماماً. Deutsch اسم لغة يعتبر مثل الصفة/الظرف وينفى بـ nicht."
    }
  ]
};
