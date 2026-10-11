// website/data/lessons/a1-review/09-adjektivdeklination.js
window.LESSONS = window.LESSONS || {};
window.lessons = window.lessons || {};

window.LESSONS["a1-review-09"] = {
  id: "a1-review-09",
  level: "a1-review",
  order: 9,
  slug: "adjektivdeklination",
  title: {
    de: "Adjektivdeklination (Grundlagen)",
    ar: "تصريف الصفات (القواعد الأساسية A1)"
  },
  tags: ["grammatik", "adjektive", "deklination", "akkusativ", "a1"],

  // 1. الهدف من الدرس
  goal: "ستتعلم كيفية تصريف الصفات في الألمانية عندما تأتي قبل الاسم، وحفظ نهايات الصفة مع أداة التعريف (der, die, das) وأداة النكرة (ein, eine) في حالتي الفاعل (Nominativ) والمفعول به (Akkusativ).",

  // 2. الشرح مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية، تختلف الصفة حسب موقعها في الجملة:\n1. **الصفة الخبرية (Prädikatives Adjektiv)**: تأتي بعد أفعال مثل (sein, werden, bleiben) وتصف المبتدأ، وهذه الصفة **لا تأخذ أي نهاية على الإطلاق** (مثال: Das Auto ist **neu** / Die Bücher sind **teuer**).\n2. **الصفة النعتية (Attributives Adjektiv)**: تأتي **قبل الاسم مباشرة** وتصفه، وهذه الصفة **يجب أن تأخذ نهاية إعرابية** توافق جنس الاسم وعدده وحالته الإعرابية!"
    },
    {
      type: "rule",
      content: "قاعدة أساسية: نصرف الصفة ونضيف لها نهايات فقط عندما تقع **بين الأداة والاسم** (مثال: das **neue** Auto). إذا جاءت بعد الفعل فلا نضيف لها أي حرف."
    },
    {
      type: "text",
      content: "الجدول الأول: تصريف الصفات مع **أداة التعريف (der / die / das)** في حالتي الفاعل (Nominativ) والنصب (Akkusativ):"
    },
    {
      type: "table",
      headers: ["الحالة الإعرابية", "مذكر (der)", "مؤنث (die)", "محايد (das)", "جمع (die)"],
      rows: [
        ["**Nominativ (فاعل)**", "der neu**e** Tisch", "die neu**e** Tasche", "das neu**e** Buch", "die neu**en** Bücher"],
        ["**Akkusativ (مفعول به)**", "den neu**en** Tisch", "die neu**e** Tasche", "das neu**e** Buch", "die neu**en** Bücher"]
      ]
    },
    {
      type: "rule",
      content: "سر جدول أداة التعريف:\n- جميع صيغ المفرد في الفاعل تأخذ **-e** فقط!\n- في النصب، يتغير المذكر فقط إلى **-en** (مع den)، والباقي يبقى **-e**.\n- صيغة الجمع دائماً تأخذ **-en**."
    },
    {
      type: "text",
      content: "الجدول الثاني: تصريف الصفات مع **أداة النكرة (ein / eine / ein)** ونفيها (kein / keine):"
    },
    {
      type: "table",
      headers: ["الحالة الإعرابية", "مذكر (ein)", "مؤنث (eine)", "محايد (ein)", "جمع النفي (keine)"],
      rows: [
        ["**Nominativ (فاعل)**", "ein neu**er** Tisch", "eine neu**e** Tasche", "ein neu**es** Buch", "keine neu**en** Bücher"],
        ["**Akkusativ (مفعول به)**", "einen neu**en** Tisch", "eine neu**e** Tasche", "ein neu**es** Buch", "keine neu**en** Bücher"]
      ]
    },
    {
      type: "rule",
      content: "لماذا نضيف -er للمذكر و -es للمحايد مع أداة النكرة في الفاعل؟\nلأن كلمة (ein) وحدها لا تدل على جنس الاسم (كلاهما ein)، لذا تقوم الصفة بالتعويض وتأخذ إشارة الأداة: der ← neu**er** و das ← neu**es**."
    }
  ],

  // 3. الأمثلة (8+ أمثلة ناطقة مع إبراز القاعدة والترجمة)
  examples: [
    {
      de: "Der **neue** Lehrer kommt aus Österreich.",
      ar: "المعلم الجديد قادم من النمسا.",
      highlight: "neue",
      audio: true,
      note: "der Lehrer مذكر فاعل (Nominativ) مع أداة تعريف ← تأخذ الصفة -e"
    },
    {
      de: "Ich kaufe den **schwarzen** Mantel.",
      ar: "أنا سأشتري المعطف الأسود.",
      highlight: "schwarzen",
      audio: true,
      note: "der Mantel مذكر مفعول به (Akkusativ) مع den ← تأخذ الصفة -en"
    },
    {
      de: "Das ist ein **schönes** Haus.",
      ar: "هذا منزل جميل.",
      highlight: "schönes",
      audio: true,
      note: "das Haus محايد فاعل بعد ein ← تأخذ الصفة علامة المحايد -es"
    },
    {
      de: "Er hat einen **alten** Computer.",
      ar: "لديه حاسوب قديم.",
      highlight: "alten",
      audio: true,
      note: "der Computer مذكر مفعول به بعد einen ← تأخذ الصفة -en"
    },
    {
      de: "Die **rote** Blume gefällt meiner Schwester.",
      ar: "الزهرة الحمراء تعجب أختي.",
      highlight: "rote",
      audio: true,
      note: "die Blume مؤنث فاعل مع أداة تعريف die ← تأخذ الصفة -e"
    },
    {
      de: "Wir suchen eine **große** Wohnung in München.",
      ar: "نحن نبحث عن شقة كبيرة في ميونخ.",
      highlight: "große",
      audio: true,
      note: "die Wohnung مؤنث مفعول به بعد eine ← تأخذ الصفة -e"
    },
    {
      de: "Die **neuen** Nachbarn sind sehr nett.",
      ar: "الجيران الجدد لطيفون جداً.",
      highlight: "neuen",
      audio: true,
      note: "die Nachbarn جمع مع أداة تعريف die ← تأخذ الصفة دائماً -en"
    },
    {
      de: "Mein Vater fährt ein **schnelles** Auto.",
      ar: "والدي يقود سيارة سريعة.",
      highlight: "schnelles",
      audio: true,
      note: "das Auto محايد مفعول به بعد ein ← تأخذ الصفة -es"
    },
    {
      de: "Dieser Kaffee ist sehr **heiß**.",
      ar: "هذه القهوة ساخنة جداً.",
      highlight: "heiß",
      audio: true,
      note: "صفة خبرية بعد فعل الكينونة ist ← تبقى بدون أي نهاية إطلاقاً"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في اللغة العربية تأتي الصفة بعد الموصوف دائماً (السيارة **الجديدة**)، أما في الألمانية فالصفة تسبق الاسم وجوباً (das **neue** Auto).",
    "احذر من تصريف الصفة التي تقع في نهاية الجملة بعد فعل (sein): في العربية نقول 'البيتُ جميلٌ' فيرفع الاثنان، أما في الألمانية فنقول 'Das Haus ist **schön**' بدون أي حرف زيادة نهائياً!",
    "مع أداة النكرة (ein)، تذكر حيلة 'إشارة المرور': بما أن كلمة ein وحدها لا تخبرنا هل الكلمة der أم das، فإن الصفة تعلن عن الجنس: إن كانت der تأخذ الصفة **-er** (ein guter Mann)، وإن كانت das تأخذ **-es** (ein schönes Kind)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "الصفة بعد sein/bleiben لا تأخذ أي نهاية أبداً (Das Buch ist gut).",
    "مع أداة التعريف (der/die/das): المفرد في الفاعل يأخذ -e، والجمع يأخذ -en.",
    "مع den في مفعول المذكر (Akkusativ): الصفة تأخذ دائماً -en (den neuen Tisch).",
    "مع أداة النكرة (ein): المذكر الفاعل يأخذ -er، والمحايد يأخذ -es، والمؤنث يأخذ -e.",
    "الجمع بعد أدوات التعريف أو النفي الملكية (die / keine / meine) يأخذ دائماً -en."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "neu", plural: "-", ar: "جديد", article: "-", example: "Das ist ein neues Auto." },
    { de: "alt", plural: "-", ar: "قديم / طاعن في السن", article: "-", example: "Er hat ein altes Fahrrad." },
    { de: "groß", plural: "-", ar: "كبير / طويل القامة", article: "-", example: "Sie haben eine große Wohnung." },
    { de: "klein", plural: "-", ar: "صغير", article: "-", example: "Das kleine Kind weint." },
    { de: "der Wagen", plural: "die Wagen", ar: "السيارة / العربة", article: "der", example: "Der neue Wagen ist teuer." },
    { de: "die Wohnung", plural: "die Wohnungen", ar: "الشقة السكنية", article: "die", example: "Wir mieten eine schöne Wohnung." },
    { de: "das Buch", plural: "die Bücher", ar: "الكتاب", article: "das", example: "Ich lese ein spannendes Buch." },
    { de: "der Tisch", plural: "die Tische", ar: "الطاولة", article: "der", example: "Er kauft einen runden Tisch." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "ما هي النهاية الصحيحة للصفة في الجملة: 'Der ___ Mann liest die Zeitung'؟ (alt)",
      options: ["alte", "alter", "alten", "altes"],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "بعد أداة التعريف der في حالة الفاعل (Nominativ)، تأخذ الصفة النهاية -e فتصبح: Der alte Mann."
    },
    {
      type: "fill-blank",
      question: "أكمل الفراغ بالنهاية الصحيحة للصفة (das Auto = محايد):",
      sentence: "Er fährt ein neu___ Auto.",
      answer: "es",
      accept: ["es", "neues"],
      explanation: "das Auto اسم محايد بعد أداة النكرة ein، لذا تأخذ الصفة النهاية -es لتصبح: ein neues Auto."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين جملة صحيحة:",
      words: ["Ich", "habe", "einen", "neuen", "Laptop", "gekauft"],
      answer: "Ich habe einen neuen Laptop gekauft",
      correct: "Ich habe einen neuen Laptop gekauft",
      correctOrder: ["Ich", "habe", "einen", "neuen", "Laptop", "gekauft"],
      explanation: "der Laptop مذكر مفعول به بعد einen فتأخذ الصفة -en: einen neuen Laptop."
    },
    {
      type: "multiple-choice",
      question: "اختر النهاية الصحيحة: 'Wir trinken den ___ Kaffee.' (heiß)",
      options: ["heiße", "heißer", "heißen", "heißes"],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "مع أداة النصب للمذكر den، تأخذ الصفة دائماً النهاية -en: den heißen Kaffee."
    },
    {
      type: "match",
      question: "طابق بين التركيب الوصفي ونهايته الصحيحة:",
      pairs: [
        { left: "السيارة الجديدة (der)", right: "der neue Wagen" },
        { left: "سيارة جديدة (das)", right: "ein neues Auto" },
        { left: "المدينة الجميلة (die)", right: "die schöne Stadt" },
        { left: "الكتب القديمة (جمع)", right: "die alten Bücher" }
      ],
      explanation: "تأمل النهايات: -e للمفرد المعرف، -es للمحايد النكرة، و -en للجمع المعرف."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في نهاية الصفة في الجملة التالية:",
      text: "Das ist ein schön Haus.",
      sentence: "Das ist ein schön Haus.",
      incorrect: "Das ist ein schön Haus.",
      answer: "Das ist ein schönes Haus.",
      corrected: "Das ist ein schönes Haus.",
      accept: ["Das ist ein schönes Haus.", "Das ist ein schönes Haus"],
      explanation: "das Haus محايد، وبعد أداة النكرة ein يجب إضافة نهاية المحايد -es للصفة فتصبح: ein schönes Haus."
    },
    {
      type: "fill-blank",
      question: "أكمل الفراغ بنهاية الصفة المناسبة (die Kinder = جمع):",
      sentence: "Die klein___ Kinder spielen im Garten.",
      answer: "en",
      accept: ["en", "kleinen"],
      explanation: "الاسم جمع (die Kinder) مسبوق بأداة تعريف die، لذا تأخذ الصفة النهاية -en دائماً: die kleinen Kinder."
    },
    {
      type: "translate",
      question: "ترجم الجملة التالية إلى الألمانية:",
      text: "أنا أبحث عن شقة جديدة.",
      from: "أنا أبحث عن شقة جديدة.",
      answer: "Ich suche eine neue Wohnung.",
      accept: ["Ich suche eine neue Wohnung.", "Ich suche eine neue Wohnung"],
      explanation: "die Wohnung مؤنث مفعول به بعد eine، وتأخذ الصفة النهاية -e: eine neue Wohnung."
    },
    {
      type: "multiple-choice",
      question: "في جملة 'Das Wetter heute ist ___' ما الصيغة الصحيحة للصفة schön؟",
      options: [
        "schöne",
        "schönes",
        "schön",
        "schöner"
      ],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "الصفة هنا خبرية تقع بعد فعل الكينونة ist وليس بعدها اسم، لذا تبقى مجردة بدون أي نهاية: schön."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في أداة النكرة وصفة المذكر المفعول به:",
      text: "Er kauft ein neuen Tisch.",
      sentence: "Er kauft ein neuen Tisch.",
      incorrect: "Er kauft ein neuen Tisch.",
      answer: "Er kauft einen neuen Tisch.",
      corrected: "Er kauft einen neuen Tisch.",
      accept: ["Er kauft einen neuen Tisch.", "Er kauft einen neuen Tisch"],
      explanation: "der Tisch مذكر في حالة النصب (Akkusativ) فيأخذ أداة النصب einen وتأخذ الصفة -en: einen neuen Tisch."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة اختيار من متعدد)
  quiz: [
    {
      type: "multiple-choice",
      question: "ما هي نهاية الصفة بعد أداة التعريف der في حالة الفاعل (Nominativ)؟",
      options: ["-en", "-er", "-e", "-es"],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "بعد der في حالة الرفع تأخذ الصفة دائماً -e (مثل: der junge Mann)."
    },
    {
      type: "multiple-choice",
      question: "ما هي نهاية الصفة بعد أداة النصب للمذكر den في حالة Akkusativ؟",
      options: ["-e", "-en", "-em", "-es"],
      answer: 1,
      correct: 1,
      correctIndex: 1,
      explanation: "مع den في Akkusativ تأخذ الصفة دائماً النهاية -en (مثل: den roten Apfel)."
    },
    {
      type: "multiple-choice",
      question: "كيف نقول: 'هذا رجل طيب' بالألمانية؟ (der Mann)",
      options: [
        "Das ist ein guter Mann.",
        "Das ist ein gute Mann.",
        "Das ist ein gutes Mann.",
        "Das ist ein guten Mann."
      ],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "der Mann مذكر فاعل بعد أداة النكرة ein، فتعوض الصفة علامة المذكر بأخذ النهاية -er: ein guter Mann."
    },
    {
      type: "multiple-choice",
      question: "ما هي نهاية الصفة دائماً مع جمع أداة التعريف (die)؟",
      options: ["-e", "-en", "-er", "-es"],
      answer: 1,
      correct: 1,
      correctIndex: 1,
      explanation: "الصفة مع جمع أداة التعريف die تأخذ دائماً النهاية -en (مثل: die neuen Bücher)."
    },
    {
      type: "multiple-choice",
      question: "في جملة 'Der Computer ist ___' ما الشكل الصحيح للصفة schnell؟",
      options: [
        "schnelle",
        "schneller",
        "schnell",
        "schnelles"
      ],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "الصفة الخبرية بعد الفعل ist لا تصرف وتبقى في شكلها الأساسي بدون أي لواحق: schnell."
    }
  ]
};

window.lessons["a1-review-09"] = window.LESSONS["a1-review-09"];
