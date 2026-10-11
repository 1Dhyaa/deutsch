// data/lessons/a2-2/09-relativsaetze-1.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-2-09"] = {
  id: "a2-2-09",
  level: "a2-2",
  order: 9,
  slug: "relativsaetze-1",
  title: {
    de: "Relativsätze (1) [Nominativ]",
    ar: "جمل الموصول (1): حالة الرفع (الذي / التي / الذين)"
  },
  tags: ["relativsatz", "nominativ", "nebensatz", "grammatik", "a2-2"],

  // 1. الهدف من الدرس
  goal: "ستتعلم كيفية بناء جمل الموصول في حالة الرفع (Nominativ) باستخدام ضمائر الوصل (der, die, das, die) لإعطاء تفاصيل ومعلومات إضافية عن اسم سابق، مع إرسال الفعل المصرف لآخر الجملة.",

  // 2. الشرح المبسط مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "جملة الموصول (Der Relativsatz) هي جملة فرعية تصف اسماً مذكوراً في الجملة الرئيسية وتمنحنا تفاصيل ومعلومات إضافية عنه (مثل: الرجل **الذي يسكن هنا**). تبدأ جملة الموصول بـ **ضمير وصل (Relativpronomen)** يناسب الاسم الموصوف."
    },
    {
      type: "rule",
      content: "في حالة الرفع (Nominativ)، يكون ضمير الوصل هو **الفاعل** في جملة الصلة، ويتطابق تماماً في شكله مع **أداة المعرفة** للاسم الموصوف (جنسه وعدده):\n• مذكر (Maskulin): **der**\n• مؤنث (Feminin): **die**\n• محايد (Neutrum): **das**\n• جمع (Plural): **die**"
    },
    {
      type: "table",
      headers: ["الجنس / العدد", "ضمير الوصل (Nom)", "مثال ألماني", "الترجمة العربية"],
      rows: [
        ["مذكر (der Mann)", "der", "Das ist der Mann, **der** hier wohnt.", "هذا هو الرجل **الذي** يسكن هنا."],
        ["مؤنث (die Frau)", "die", "Das ist die Frau, **die** Deutsch unterrichtet.", "هذه هي المرأة **التي** تدرّس الألمانية."],
        ["محايد (das Kind)", "das", "Das ist das Kind, **das** so schön singt.", "هذا هو الطفل **الذي** يغني بجمال."],
        ["جمع (die Leute)", "die", "Das sind die Leute, **die** nebenan wohnen.", "هؤلاء هم الأشخاص **الذين** يسكنون في الجوار."]
      ]
    },
    {
      type: "text",
      content: "تذكر دائماً أن جملة الموصول هي **جملة فرعية (Nebensatz)**، ولذلك ينطبق عليها شرطان أساسيان:\n1. **الفاصلة إجبارية**: يجب وضع فاصلة قبل ضمير الوصل مباشرة.\n2. **الفعل المصرف في النهاية**: ينتقل الفعل المصرف في جملة الصلة إلى آخر موضع في الجملة."
    },
    {
      type: "rule",
      content: "جملة الموصول المعترضة (Eingeschobener Relativsatz):\nإذا جاء الاسم الموصوف في وسط الجملة الرئيسية، نضع جملة الموصول مباشرة بعده بين فاصلتين، ثم نكمل الجملة الرئيسية:\n*Der Mann**, der hier wohnt,** ist sehr nett.*"
    }
  ],

  // 3. الأمثلة العملية الناطقة (9 أمثلة مع ملاحظات إعرابية)
  examples: [
    {
      de: "Das ist der Mann, **der hier wohnt**.",
      ar: "هذا هو الرجل الذي يسكن هنا.",
      highlight: "der hier wohnt",
      audio: true,
      note: "der Mann مذكر ← ضمير الوصل der، والفعل wohnt في نهاية جملة الموصول"
    },
    {
      de: "Das ist die Lehrerin, **die uns Deutsch beibringt**.",
      ar: "هذه هي المعلمة التي تعلمنا الألمانية.",
      highlight: "die uns Deutsch beibringt",
      audio: true,
      note: "die Lehrerin مؤنث ← ضمير الوصل die، والفعل beibringen مصرف في النهاية"
    },
    {
      de: "Dort steht das Kind, **das ein Eis isst**.",
      ar: "هناك يقف الطفل الذي يأكل مثلجات.",
      highlight: "das ein Eis isst",
      audio: true,
      note: "das Kind محايد ← ضمير الوصل das، والفعل isst في النهاية"
    },
    {
      de: "Das sind die Studenten, **die fleißig lernen**.",
      ar: "هؤلاء هم الطلاب الذين يتعلمون باجتهاد.",
      highlight: "die fleißig lernen",
      audio: true,
      note: "die Studenten جمع ← ضمير الوصل die، والفعل lernen مصرف مع الجمع"
    },
    {
      de: "Der Arzt, **der mich untersucht hat**, war sehr freundlich.",
      ar: "الطبيب الذي فحصني كان ودوداً للغاية.",
      highlight: "der mich untersucht hat",
      audio: true,
      note: "جملة موصول معترضة: الفعل المساعد hat جاء في نهاية جملة الصلة تماماً"
    },
    {
      de: "Ich suche eine Wohnung, **die einen Balkon hat**.",
      ar: "أبحث عن شقة لها شرفة.",
      highlight: "die einen Balkon hat",
      audio: true,
      note: "die Wohnung مؤنث ← ضمير الوصل die، وهو فاعل جملة الصلة"
    },
    {
      de: "Das Buch, **das auf dem Tisch liegt**, gehört mir.",
      ar: "الكتاب الذي يقع على الطاولة يخصني.",
      highlight: "das auf dem Tisch liegt",
      audio: true,
      note: "das Buch محايد ← ضمير الوصل das، وliegt في النهاية"
    },
    {
      de: "Wir kennen viele Nachbarn, **die gern grillen**.",
      ar: "نعرف العديد من الجيران الذين يحبون الشواء.",
      highlight: "die gern grillen",
      audio: true,
      note: "die Nachbarn جمع مذكر/مؤنث ← ضمير الوصل die"
    },
    {
      de: "Der Bus, **der zum Bahnhof fährt**, kommt gleich.",
      ar: "الحافلة التي تتجه إلى محطة القطار ستصل حالاً.",
      highlight: "der zum Bahnhof fährt",
      audio: true,
      note: "der Bus مذكر ← ضمير الوصل der، ثم استكمال الجملة الرئيسية: kommt gleich"
    }
  ],

  // 4. نصائح للناطقين بالعربية
  arabicTips: [
    "في العربية نستخدم كلمات متعددة مثل «الذي / التي / اللذان / الذين»، وفي الألمانية ضمائر الوصل في حالة الرفع مطابقة تماماً لأدوات المعرفة البسيطة: **der للمذكر، die للمؤنث، das للمحايد، die للجمع**.",
    "لا تكرر الضمير العائد! في العربية نقول: «الرجل الذي هو يسكن هنا» أو «الرجل الذي رأيته»، أما في الألمانية فضمير الوصل يحل محل الاسم ولا نضع أي ضمير شخصي إضافي: نقول *der Mann, der hier wohnt* وليس *der Mann, der er hier wohnt*.",
    "موقع الفعل: لا تنسَ أن ترسل الفعل المصرف إلى نهاية جملة الموصول، ولا تنسَ وضع الفاصلة قبل ضمير الوصل مباشرة."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "تصف جملة الموصول اسماً سابقاً وتمنح معلومات إضافية عنه",
    "ضمائر الوصل في حالة الرفع هي نفس أدوات المعرفة: der / die / das / die",
    "يُحدد جنس وعدة ضمير الوصل بناءً على الاسم الموصوف الذي يسبقه",
    "الفعل المُصرّف يأتي دائماً في نهاية جملة الموصول تماماً",
    "الفاصلة إجبارية قبل ضمير الوصل، وإذا كانت معترضة توضع فاصلة أخرى في نهايتها"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "der Nachbar", plural: "die Nachbarn", ar: "الجار", article: "der", example: "Der Nachbar, der nebenan wohnt, ist nett." },
    { de: "die Lehrerin", plural: "die Lehrerinnen", ar: "المعلمة", article: "die", example: "Das ist die Lehrerin, die uns unterrichtet." },
    { de: "der Arzt", plural: "die Ärzte", ar: "الطبيب", article: "der", example: "Der Arzt, der mich behandelt, ist kompetent." },
    { de: "die Wohnung", plural: "die Wohnungen", ar: "الشقة", article: "die", example: "Ich mag Wohnungen, die hell sind." },
    { de: "der Balkon", plural: "die Balkone", ar: "الشرفة / البلكونة", article: "der", example: "Die Wohnung hat einen schönen Balkon." },
    { de: "untersuchen", plural: "untersucht, hat untersucht", ar: "يفحص / يعاين", article: "", example: "Der Arzt untersucht den Patienten." },
    { de: "gehören", plural: "gehört, hat gehört", ar: "يخص / ينتمي إلى", article: "", example: "Das Buch gehört mir." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Das ist der Mann, ___ hier wohnt. (der Mann = مذكر)",
      options: ["der", "die", "das", "den"],
      correct: 0,
      explanation: "der Mann اسم مذكر وفي جملة الصلة هو الفاعل (Nominativ)، لذا نستخدم ضمير الوصل der."
    },
    {
      type: "fill-blank",
      sentence: "Das ist die Frau, ___ Deutsch unterrichtet. (die Frau = مؤنث)",
      answer: "die",
      accept: ["die"],
      explanation: "die Frau اسم مؤنث، وضمير الوصل في حالة الرفع المؤنث هو die."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين جملة موصول صحيحة:",
      words: ["Kind", "Das", "singt", "ist", "das", "schön", "das"],
      correct: "Das ist das Kind das schön singt",
      accept: [
        "Das ist das Kind das schön singt",
        "Das ist das Kind, das schön singt.",
        "Das ist das Kind, das schön singt"
      ],
      explanation: "الجملة الرئيسية (Das ist das Kind) تليها الفاصلة وضمير الوصل المحايد (das) وبقية الجملة مع الفعل في النهاية (singt)."
    },
    {
      type: "multiple-choice",
      question: "Das sind die Touristen, ___ aus Spanien kommen. (die Touristen = جمع)",
      options: ["die", "der", "das", "denen"],
      correct: 0,
      explanation: "مع الاسم الجمع في حالة الرفع Nominativ نستخدم ضمير الوصل die."
    },
    {
      type: "match",
      question: "طابق بين الاسم الموصوف وضمير الوصل المناسب له في حالة الرفع:",
      pairs: [
        { left: "der Kollege (مذكر)", right: "der" },
        { left: "die Kollegin (مؤنث)", right: "die" },
        { left: "das Auto (محايد)", right: "das" },
        { left: "die Kollegen (جمع)", right: "die" }
      ],
      explanation: "ضمائر الوصل في Nominativ تطابق أدوات المعرفة: der للمذكر، die للمؤنث والجمع، das للمحايد."
    },
    {
      type: "error-correction",
      sentence: "Das ist der Mann, der er hier wohnt.",
      corrected: "Das ist der Mann, der hier wohnt.",
      accept: [
        "Das ist der Mann, der hier wohnt",
        "Das ist der Mann, der hier wohnt."
      ],
      explanation: "في الألمانية لا يجوز تكرار الضمير الشخصي العائد (er) بعد ضمير الوصل (der)."
    },
    {
      type: "translate",
      from: "هذا هو الطبيب الذي ساعدني.",
      answer: "Das ist der Arzt, der mir geholfen hat.",
      accept: [
        "Das ist der Arzt, der mir geholfen hat.",
        "Das ist der Arzt, der mir geholfen hat",
        "Das ist der Arzt, der mir half.",
        "Das ist der Arzt, der mir half"
      ],
      explanation: "der Arzt مذكر يأخذ der، والفعل المساعد hat في نهاية جملة الصلة."
    },
    {
      type: "fill-blank",
      sentence: "Hier ist das Haus, ___ sehr alt ist. (das Haus = محايد)",
      answer: "das",
      accept: ["das"],
      explanation: "das Haus محايد، وضمير الوصل في حالة الرفع للمحايد هو das."
    },
    {
      type: "word-order",
      question: "رتب الجملة المعترضة: (الرجل الذي يضحك هناك هو أخي)",
      words: ["lacht", "ist", "mein", "Der", "Mann", "der", "Bruder", "dort"],
      correct: "Der Mann der dort lacht ist mein Bruder",
      accept: [
        "Der Mann der dort lacht ist mein Bruder",
        "Der Mann, der dort lacht, ist mein Bruder.",
        "Der Mann, der dort lacht, ist mein Bruder"
      ],
      explanation: "Der Mann + جملة الموصول (der dort lacht) + تكملة الجملة الرئيسية (ist mein Bruder)."
    },
    {
      type: "multiple-choice",
      question: "أين يوضع الفعل المُصرّف في جملة الموصول؟",
      options: [
        "في نهاية جملة الموصول تماماً",
        "مباشرة بعد ضمير الوصل",
        "في بداية الجملة",
        "قبل ضمير الوصل مباشرة"
      ],
      correct: 0,
      explanation: "جملة الموصول جملة فرعية (Nebensatz)، لذلك ينتقل فعلها المصرف إلى نهايتها تماماً."
    }
  ],

  // 8. الاختبار النهائي (5 أسئلة متعددة الخيارات)
  quiz: [
    {
      type: "multiple-choice",
      question: "Das ist der Computer, ___ so schnell funktioniert.",
      options: ["der", "die", "das", "den"],
      correct: 0,
      explanation: "der Computer اسم مذكر في حالة فاعل (Nominativ)، لذا نستخدم der."
    },
    {
      type: "multiple-choice",
      question: "Kennst du die Frau, ___ dort an der Ecke steht?",
      options: ["die", "der", "das", "welche"],
      correct: 0,
      explanation: "die Frau اسم مؤنث، وضمير الوصل في حالة الرفع هو die."
    },
    {
      type: "multiple-choice",
      question: "Das Buch, ___ auf dem Tisch liegt, ist sehr interessant.",
      options: ["das", "der", "die", "dem"],
      correct: 0,
      explanation: "das Buch اسم محايد، لذا نستخدم ضمير الوصل das."
    },
    {
      type: "multiple-choice",
      question: "Die Kinder, ___ im Garten spielen, machen viel Lärm.",
      options: ["die", "der", "das", "denen"],
      correct: 0,
      explanation: "die Kinder اسم جمع، وضمير الوصل للجمع في حالة الرفع هو die."
    },
    {
      type: "multiple-choice",
      question: "ما هي علامة الترقيم الإلزامية قبل ضمير الوصل في الألمانية؟",
      options: [
        "الفاصلة (Komma)",
        "النقطة (Punkt)",
        "النقطتان (Doppelpunkt)",
        "علامة التعجب"
      ],
      correct: 0,
      explanation: "يجب دائماً في اللغة الألمانية وضع فاصلة (Komma) قبل جملة الموصول."
    }
  ]
};

window.lessons = window.LESSONS;
