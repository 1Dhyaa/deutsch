// data/lessons/a2-2/12-relativsaetze-3.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-2-12"] = {
  id: "a2-2-12",
  level: "a2-2",
  order: 12,
  slug: "relativsaetze-3",
  title: {
    de: "Relativsätze (3) [Dativ & Präpositionen]",
    ar: "جمل الموصول (3): حالة الجر (dem, der, denen) وحروف الجر"
  },
  tags: ["relativsatz", "dativ", "praepositionen", "nebensatz", "grammatik", "a2-2"],

  // 1. الهدف من الدرس
  goal: "ستتعلم صياغة جمل الموصول في حالة الجر (Dativ) ومع حروف الجر المختلفة (مثل: mit dem, in der, über das)، مع إتقان صيغة الجمع الخاصة جداً (denen) وموقع حرف الجر.",

  // 2. الشرح المبسط مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "نستخدم حالة الجر **(Dativ)** لضمير الوصل في حالتين رئيسيتين:\n1. إذا كان فعل جملة الصلة يتطلب مفعولاً به في Dativ (مثل: *helfen, danken, gehören, gratulieren, vertrauen*).\n2. إذا كانت جملة الصلة تبدأ بـ **حرف جر** يتطلب حالة Dativ (مثل: *mit, bei, nach, von, zu*) أو حرف جر مكاني مزدوج (مثل: *in, an, auf* للسؤال بـ Wo?)."
    },
    {
      type: "table",
      headers: ["الجنس / العدد", "ضمير الوصل في Dativ", "مثال توضيحي (مع فعل Dativ)", "الترجمة العربية"],
      rows: [
        ["مذكر (der Mann)", "**dem**", "Das ist der Mann, **dem** ich helfe.", "هذا هو الرجل **الذي** أساعده."],
        ["محايد (das Kind)", "**dem**", "Das ist das Kind, **dem** ich danke.", "هذا هو الطفل **الذي** أشكره."],
        ["مؤنث (die Frau)", "**der**", "Das ist die Frau, **der** das Auto gehört.", "هذه هي السيدة **التي** تخصها السيارة."],
        ["جمع (die Leute)", "**denen** ⚠️", "Das sind die Leute, **denen** ich vertraue.", "هؤلاء هم الأشخاص **الذين** أثق بهم."]
      ]
    },
    {
      type: "rule",
      content: "تنبيه مهم جداً لصيغة الجمع في Dativ:\nفي أدوات المعرفة العادية نستخدم den للجمع في Dativ، لكن كـ **ضمير وصل (Relativpronomen)** تصبح الكلمة دائماً **denen**! هذه واحدة من أكثر النقاط التي يركز عليها واضعو امتحانات B1 و A2!"
    },
    {
      type: "text",
      content: "جمل الموصول مع حروف الجر (Relativsätze mit Präpositionen):\nعندما يرتبط الفعل بحرف جر، فإن حرف الجر **يقفز إلى بداية جملة الصلة مباشرة** ويأتي قبل ضمير الوصل. وحرف الجر هو الذي يحدد إعراب ضمير الوصل (Akkusativ أو Dativ):"
    },
    {
      type: "table",
      headers: ["حرف الجر + الحالة", "الاسم الموصوف", "التركيب في جملة الصلة", "مثال كامل"],
      rows: [
        ["mit + Dativ", "der Kollege (مذكر)", "**mit dem**", "Das ist der Kollege, **mit dem** ich arbeite."],
        ["in + Dativ (wo?)", "die Stadt (مؤنث)", "**in der**", "Die Stadt, **in der** ich lebe, ist groß."],
        ["mit + Dativ", "die Freunde (جمع)", "**mit denen**", "Die Freunde, **mit denen** ich reise, sind nett."],
        ["für + Akkusativ", "das Geschenk (محايد)", "**für das**", "Das Geschenk, **für das** ich danke, ist schön."],
        ["über + Akkusativ", "das Thema (محايد)", "**über das**", "Das Thema, **über das** wir sprechen, ist wichtig."]
      ]
    }
  ],

  // 3. الأمثلة العملية الناطقة (9 أمثلة مع ملاحظات إعرابية)
  examples: [
    {
      de: "Das ist der Kollege, **mit dem ich jeden Tag arbeite**.",
      ar: "هذا هو الزميل الذي أعمل معه كل يوم.",
      highlight: "mit dem ich jeden Tag arbeite",
      audio: true,
      note: "mit تأخذ Dativ، وder Kollege مذكر ← mit dem، والفعل arbeite في النهاية"
    },
    {
      de: "Die Stadt, **in der ich aufgewachsen bin**, ist sehr alt.",
      ar: "المدينة التي ترعرعت فيها قديمة جداً.",
      highlight: "in der ich aufgewachsen bin",
      audio: true,
      note: "die Stadt مؤنث، وحرف الجر in مع المكان يتطلب Dativ ← in der"
    },
    {
      de: "Das ist der Mann, **dem ich gestern geholfen habe**.",
      ar: "هذا هو الرجل الذي ساعدته بالأمس.",
      highlight: "dem ich gestern geholfen habe",
      audio: true,
      note: "فعل helfen يتطلب Dativ، وder Mann مذكر ← dem"
    },
    {
      de: "Das sind die Freunde, **denen ich vollkommen vertraue**.",
      ar: "هؤلاء هم الأصدقاء الذين أثق بهم تماماً.",
      highlight: "denen ich vollkommen vertraue",
      audio: true,
      note: "فعل vertrauen يأخذ Dativ، وصيغة الجمع لضمير الوصل في Dativ هي denen"
    },
    {
      de: "Das Hotel, **in dem wir übernachtet haben**, war sehr sauber.",
      ar: "الفندق الذي بتنا فيه كان نظيفاً للغاية.",
      highlight: "in dem wir übernachtet haben",
      audio: true,
      note: "das Hotel محايد مع in + Dativ ← in dem"
    },
    {
      de: "Die Frau, **der diese Tasche gehört**, sucht danach.",
      ar: "السيدة التي تخصها هذه الحقيبة تبحث عنها.",
      highlight: "der diese Tasche gehört",
      audio: true,
      note: "فعل gehören يأخذ Dativ، وdie Frau مؤنث ← der"
    },
    {
      de: "Hier ist der Stift, **mit dem du das Formular ausfüllen kannst**.",
      ar: "ها هو القلم الذي يمكنك تعبئة الاستمارة به.",
      highlight: "mit dem du das Formular ausfüllen kannst",
      audio: true,
      note: "der Stift مذكر مع mit + Dativ ← mit dem"
    },
    {
      de: "Die Kollegen, **mit denen ich nach Berlin fahre**, sind sehr nett.",
      ar: "الزملاء الذين أسافر معهم إلى برلين ودودون جداً.",
      highlight: "mit denen ich nach Berlin fahre",
      audio: true,
      note: "die Kollegen جمع مع mit + Dativ ← mit denen"
    },
    {
      de: "Das ist das Thema, **über das wir gestern diskutiert haben**.",
      ar: "هذا هو الموضوع الذي ناقشناه بالأمس.",
      highlight: "über das wir gestern diskutiert haben",
      audio: true,
      note: "über تأخذ Akkusativ، وdas Thema محايد ← über das"
    }
  ],

  // 4. نصائح للناطقين بالعربية
  arabicTips: [
    "احفظ «denen» جيداً: أداة التعريف العادية للجمع في Dativ هي den، لكن كضمير وصل تتحول حتماً إلى **denen**! لا تقل أبداً *die Leute, den ich helfe*، بل قل: *die Leute, **denen** ich helfe*.",
    "موقع حرف الجر: في العربية يأتي حرف الجر والضمير في نهاية الجملة: «الرجل الذي أعمل **معه**»، أما في الألمانية فيقفز حرف الجر إلى بداية جملة الصلة مباشرة قبل ضمير الوصل: *der Mann, **mit dem** ich arbeite*.",
    "حرف الجر هو القائد الإعرابي: لا تنظر فقط إلى الفعل؛ إذا وُجد حرف جر قبل ضمير الوصل، فهو الذي يحدد حالة الضمير: حروف (mit, bei, von, zu) تفرض Dativ دائماً (mit dem / mit der / mit denen)، بينما (für, ohne, um) تفرض Akkusativ (für den / für die / für das)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "ضمائر الوصل في حالة Dativ: dem (مذكر ومحايد)، der (مؤنث)، denen (جمع)",
    "صيغة الجمع في Dativ لضمير الوصل هي دائماً denen وليست den",
    "يأتي حرف الجر في بداية جملة الصلة بعد الفاصلة مباشرة وقبل ضمير الوصل",
    "حرف الجر هو الذي يحدد ما إذا كان ضمير الوصل في Dativ أو Akkusativ",
    "الفعل المصرف يذهب دائماً إلى نهاية جملة الموصول تماماً"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "der Kollege", plural: "die Kollegen", ar: "الزميل (في العمل)", article: "der", example: "Das ist der Kollege, mit dem ich spreche." },
    { de: "das Hotel", plural: "die Hotels", ar: "الفندق", article: "das", example: "Das Hotel, in dem wir wohnen, ist ruhig." },
    { de: "der Stift", plural: "die Stifte", ar: "القلم", article: "der", example: "Gib mir den Stift, mit dem du schreibst." },
    { de: "das Thema", plural: "die Themen", ar: "الموضوع / المحور", article: "das", example: "Das ist das Thema, über das wir reden." },
    { de: "vertrauen", plural: "vertraut, hat vertraut", ar: "يثق بـ (يأخذ Dativ)", article: "", example: "Ich vertraue meinen Freunden." },
    { de: "helfen", plural: "hilft, hat geholfen", ar: "يساعد (يأخذ Dativ)", article: "", example: "Er hilft der alten Frau." },
    { de: "diskutieren", plural: "diskutiert, hat diskutiert", ar: "يناقش / يتحاور", article: "", example: "Wir diskutieren über den Plan." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Das ist der Mann, ___ ich gestern geholfen habe. (فعل helfen يأخذ Dativ / der Mann)",
      options: ["dem", "den", "der", "das"],
      correct: 0,
      explanation: "فعل helfen يتطلب حالة Dativ، وder Mann اسم مذكر، لذا فإن ضمير الوصل المناسب هو dem."
    },
    {
      type: "fill-blank",
      sentence: "Das sind die Freunde, ___ ich vertraue. (vertrauen يأخذ Dativ مع الجمع)",
      answer: "denen",
      accept: ["denen"],
      explanation: "ضمير الوصل للجمع في حالة الجر Dativ هو دائماً denen (وليس den)."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين جملة موصول مع حرف الجر mit:",
      words: ["arbeite", "der", "dem", "Das", "ich", "Kollege", "mit", "ist"],
      correct: "Das ist der Kollege mit dem ich arbeite",
      accept: [
        "Das ist der Kollege mit dem ich arbeite",
        "Das ist der Kollege, mit dem ich arbeite.",
        "Das ist der Kollege, mit dem ich arbeite"
      ],
      explanation: "الجملة الرئيسية (Das ist der Kollege) تليها الفاصلة وحرف الجر مع ضمير الوصل (mit dem) ثم الفاعل والفعل بالنهاية (ich arbeite)."
    },
    {
      type: "multiple-choice",
      question: "Die Stadt, in ___ ich lebe, ist wunderschön. (die Stadt = مؤنث)",
      options: ["der", "dem", "den", "die"],
      correct: 0,
      explanation: "حرف الجر in مع السؤال عن المكان Wo? يتطلب Dativ، والمؤنث في Dativ هو der (in der)."
    },
    {
      type: "match",
      question: "طابق بين التركيب وترجمته العربية الدقيقة:",
      pairs: [
        { left: "mit dem ich spreche", right: "الذي أتحدث معه (مذكر)" },
        { left: "in der ich wohne", right: "التي أسكن فيها (مؤنث)" },
        { left: "denen ich helfe", right: "الذين أساعدهم (جمع Dativ)" },
        { left: "über das wir lachen", right: "الذي نضحك عليه (محايد)" }
      ],
      explanation: "طابق حروف الجر وضمائر الوصل حسب الجنس والحالة الإعرابية."
    },
    {
      type: "error-correction",
      sentence: "Das sind die Leute, den ich geholfen habe.",
      corrected: "Das sind die Leute, denen ich geholfen habe.",
      accept: [
        "Das sind die Leute, denen ich geholfen habe",
        "Das sind die Leute, denen ich geholfen habe."
      ],
      explanation: "خطأ شائع: كتابة den للجمع في Dativ! في جمل الموصول صيغة الجمع في Dativ هي دائماً denen."
    },
    {
      type: "translate",
      from: "هذا هو الصديق الذي أسافر معه.",
      answer: "Das ist der Freund, mit dem ich reise.",
      accept: [
        "Das ist der Freund, mit dem ich reise.",
        "Das ist der Freund, mit dem ich reise",
        "Das ist der Freund, mit dem ich fahre.",
        "Das ist der Freund, mit dem ich fahre"
      ],
      explanation: "der Freund مذكر، ومعه mit تأخذ Dativ ← mit dem ich reise."
    },
    {
      type: "fill-blank",
      sentence: "Das Hotel, in ___ wir geschlafen haben, war sehr ruhig. (das Hotel = محايد مع in + Dativ)",
      answer: "dem",
      accept: ["dem"],
      explanation: "das Hotel محايد، وفي Dativ بعد in يصبح ضمير الوصل dem (in dem)."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (المرأة التي يخصها هذا البيت تكون طبيبة)",
      words: ["gehört", "ist", "der", "Haus", "Frau", "dieses", "Die", "Ärztin"],
      correct: "Die Frau der dieses Haus gehört ist Ärztin",
      accept: [
        "Die Frau der dieses Haus gehört ist Ärztin",
        "Die Frau, der dieses Haus gehört, ist Ärztin.",
        "Die Frau, der dieses Haus gehört, ist Ärztin"
      ],
      explanation: "Die Frau + جملة الصلة المعترضة (der dieses Haus gehört) + استكمال الرئيسية (ist Ärztin)."
    },
    {
      type: "multiple-choice",
      question: "أين يوضع حرف الجر المرتبط بجملة الموصول في الألمانية؟",
      options: [
        "مباشرة قبل ضمير الوصل في بداية جملة الصلة",
        "في نهاية جملة الصلة بعد الفعل",
        "في بداية الجملة الرئيسية",
        "بين الفاعل والفعل"
      ],
      correct: 0,
      explanation: "في اللغة الألمانية يسبق حرف الجر ضمير الوصل مباشرة: mit dem, in der, über das."
    }
  ],

  // 8. الاختبار النهائي (5 أسئلة متعددة الخيارات)
  quiz: [
    {
      type: "multiple-choice",
      question: "Das ist der Junge, ___ der Hund gehört. (gehören يتطلب Dativ / der Junge)",
      options: ["dem", "den", "der", "das"],
      correct: 0,
      explanation: "فعل gehören يأخذ Dativ، والمذكر في Dativ يأخذ dem."
    },
    {
      type: "multiple-choice",
      question: "Die Kollegen, mit ___ ich arbeite, sind sehr kompetent. (جمع مع mit + Dativ)",
      options: ["denen", "den", "dem", "die"],
      correct: 0,
      explanation: "بعد حرف الجر mit مع الاسم الجمع نستخدم صيغة الجمع لضمير الوصل وهي denen."
    },
    {
      type: "multiple-choice",
      question: "Hier ist das Zimmer, in ___ ich schlafe. (das Zimmer محايد مع in + Dativ)",
      options: ["dem", "das", "den", "der"],
      correct: 0,
      explanation: "das Zimmer محايد، ومع السؤال عن المكان Wo? (في الغرفة) نستخدم Dativ للمحايد وهو dem."
    },
    {
      type: "multiple-choice",
      question: "Die Nachbarin, ___ wir gestern zum Geburtstag gratuliert haben, hat sich sehr gefreut.",
      options: ["der", "die", "dem", "denen"],
      correct: 0,
      explanation: "فعل gratulieren يتطلب Dativ، وdie Nachbarin مؤنث، والمؤنث في Dativ يأخذ der."
    },
    {
      type: "multiple-choice",
      question: "ما هو ضمير الوصل للجمع في حالة Dativ دائماً؟",
      options: ["denen", "den", "die", "deren"],
      correct: 0,
      explanation: "ضمير الوصل للجمع في حالة الجر Dativ هو حتماً denen."
    }
  ]
};

window.lessons = window.LESSONS;
