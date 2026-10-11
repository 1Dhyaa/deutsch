// data/lessons/a2-1/22-weil-da.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-22"] = {
  id: "a2-1-22",
  level: "a2-1",
  order: 22,
  slug: "weil-da",
  title: {
    de: "Kausalsätze: weil vs. da",
    ar: "الجمل السببية: المقارنة بين weil و da"
  },
  tags: ["grammatik", "nebensatz", "kausalsaetze", "weil", "da", "denn", "begruendung", "a2"],

  // 1. الهدف
  goal: "ستتعلم صياغة الجمل السببية (Kausalsätze) للتعبير عن العلة والأسباب باستخدام الرابطين التبعيين weil و da، وفهم الفارق الدقيق في الاستخدام والأسلوب بينهما (weil للسبب المباشر الجديد أو للإجابة عن Warum? مقابل da للسبب المعروف أو المسلّم به الذي يفتتح الجملة غالباً)، وتطبيق قاعدة الفعل في النهاية لكليهما.",

  // 2. الشرح
  explanation: [
    {
      type: "text",
      content: "**الجملة السببية (Kausalsatz)** هي جملة تابعة تبين السبب والدافع (der Grund) لحدوث الفعل في الجملة الرئيسية، وتجيب عن أدوات الاستفهام السببية مثل: **Warum?** (لماذا؟) و **Wieso?** (لِمَ؟)."
    },
    {
      type: "rule",
      content: "القاعدة المشتركة لـ weil و da:\nكلا الرابطين هما رابطان تبعيان (Subjunktionen)، لذلك يرسلان **الفعل المصرّف حتماً إلى نهاية الجملة السببية تماماً**:\n\n..., weil / da + [Subjekt] + [...] + **[Verb am Ende]**."
    },
    {
      type: "table",
      headers: ["وجه المقارنة", "weil (لأنّ)", "da (بما أنّ / نظراً لكون)"],
      rows: [
        ["المعنى الدقيق", "لأنّ (because): تركز على ذكر سبب جديد أو مباشر", "بما أنّ / نظراً لكون (since / as): تفترض أن السبب معلوم أو بديهي للطرفين"],
        ["الموقع الشائع", "تأتي غالباً بعد الجملة الرئيسية: (Hauptsatz + weil...)", "تأتي غالباً في بداية الكلام: (Da ..., Verb + Subjekt)"],
        ["الإجابة عن Warum?", "نعم، هي الأداة النموذجية المباشرة للإجابة عن Warum?", "لا تُستخدم كإجابة مقتضبة ومباشرة عن سؤال Warum?"],
        ["الأسلوب اللغوي", "شائعة جداً ومستخدمة في كل المواقف اليومية والرسمية", "أسلوب راقٍ، مهني، وكتابي بامتياز (في الإيميلات والمقالات)"],
        ["موقع الفعل", "في نهاية الجملة دائماً (Verb-Letzt-Stellung)", "في نهاية الجملة دائماً (Verb-Letzt-Stellung)"]
      ]
    },
    {
      type: "rule",
      content: "قاعدة البدء بـ Da (الموقع الشائع جداً):\nعندما نبدأ الجملة بـ Da، تنتهي الجملة الفرعية بفعلها المصرّف، وتفصلها فاصلة، ثم تبدأ الجملة الرئيسية بعدها فوراً بفعلها المصرّف:\n\n**Da** morgen ein Feiertag **ist**, **haben** die Geschäfte geschlossen.\n(بما أن غداً يوم عطلة، فالمتاجر مغلقة.)"
    },
    {
      type: "text",
      content: "مقارنة سريعة مع denn: تذكر أن denn تؤدي نفس معنى السبب، لكنها رابط في «الموقع صفر» ولا تغير مكان الفعل: *Er lernt Deutsch, **denn** er **will** reisen.* أما مع weil: *... **weil** er reisen **will**.* ومع da: ***Da** er reisen **will**, lernt er Deutsch.*"
    }
  ],

  // 3. الأمثلة
  examples: [
    {
      de: "Ich lerne Deutsch, **weil** ich in Deutschland als Arzt arbeiten **möchte**.",
      ar: "أنا أتعلم الألمانية، لأنني أود العمل كطبيب في ألمانيا.",
      highlight: "weil ... möchte",
      audio: true,
      note: "سبب مباشر يوضح الهدف، الفعل الناقص möchte في النهاية بعد arbeiten"
    },
    {
      de: "**Da** morgen ein Feiertag **ist**, **können** wir lange ausschlafen.",
      ar: "بما أن غداً عطلة رسمية، فيمكننا أن ننام طويلاً براحة.",
      highlight: "Da ... ist, können",
      audio: true,
      note: "السبب معلوم مسبقاً للجميع (عطلة)، الجملة بدأت بـ Da والفعلان التقيا عند الفاصلة: ist, können"
    },
    {
      de: "Warum kommst du so spät? - **Weil** die U-Bahn eine Panne **hatte**.",
      ar: "لماذا تأخرت؟ - لأن قطار الأنفاق تعرض لعطل فني.",
      highlight: "Weil ... hatte",
      audio: true,
      note: "إجابة مباشرة عن سؤال Warum? نستخدم فيها حتماً weil"
    },
    {
      de: "**Da** du dich mit Computern gut **auskennst**, kannst du mir bitte helfen?",
      ar: "بما أنك خبير بالحواسيب وتفهم فيها جيداً، فهل يمكنك مساعدتي من فضلك؟",
      highlight: "Da ... auskennst",
      audio: true,
      note: "السبب معلوم (معرفتك بالكمبيوتر)، استخدمنا Da للتمهيد للطلب"
    },
    {
      de: "Er isst jetzt nichts mehr, **weil** er schon zu Mittag gegessen **hat**.",
      ar: "هو لا يأكل شيئاً الآن، لأنه تناول الغداء بالفعل.",
      highlight: "weil ... hat",
      audio: true,
      note: "جملة weil في الماضي التام (Perfekt): اسم المفعول gegessen ثم المساعد hat"
    },
    {
      de: "**Da** das Wetter so herrlich **ist**, **gehen** wir am See spazieren.",
      ar: "بما أن الطقس رائع جداً، سنذهب للتنزه على شاطئ البحيرة.",
      highlight: "Da ... ist, gehen",
      audio: true,
      note: "الطقس الجميل حقيقة يراها الجميع الآن، لذا تصدرت Da الجملة"
    },
    {
      de: "Sie konnte die Nachricht nicht lesen, **weil** ihr Akku leer **war**.",
      ar: "لم تتمكن من قراءة الرسالة، لأن بطارية هاتفها كانت فارغة.",
      highlight: "weil ... war",
      audio: true,
      note: "تعليل لعدم قراءة الرسالة، الفعل war في نهاية الجملة"
    },
    {
      de: "**Da** Herr Müller heute krank **ist**, **übernimmt** Frau Weber seine Aufgaben.",
      ar: "نظراً لأن السيد مولر مريض اليوم، تتولى السيدة فيبر مهامه.",
      highlight: "Da ... ist, übernimmt",
      audio: true,
      note: "صيغة رسمية في بيئة العمل: da تبين ظرفاً واقعاً ومعلوماً للموظفين"
    },
    {
      de: "Wir kaufen das Sofa nicht, **weil** es viel zu teuer **ist**.",
      ar: "نحن لا نشتري الأريكة، لأنها باهظة الثمن أكثر من اللازم.",
      highlight: "weil ... ist",
      audio: true,
      note: "سبب قرار الشراء جاء بعد الجملة الرئيسية بـ weil"
    },
    {
      de: "**Da** wir alle sehr müde **sind**, **beenden** wir die Sitzung jetzt.",
      ar: "بما أننا جميعاً متعبون للغاية، سننهي الجلسة والاجتماع الآن.",
      highlight: "Da ... sind, beenden",
      audio: true,
      note: "استنتاج وبدء بـ Da متبوعاً بالفعل beenden في بداية الجملة الرئيسية"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "الفرق بين weil و da يشبه تماماً الفرق بين «لأنّ» و«بما أنّ» في العربية الفصحى: نستخدم weil لتقديم سبب جديد أو جواباً عن «لماذا؟»، بينما نستخدم da عندما يكون السبب معلوماً وبديهياً للمستمع ونريد أن نبني عليه قراراً.",
    "إذا طُرح عليك سؤال يبدأ بـ Warum?، أجب دائماً بـ **Weil...** وليس Da. الإجابة بـ Da في هذا السياق تبدو غير طبيعية وغريبة للألمان.",
    "انتبه لموقع الفعل: كلا الرابطين يرسل الفعل المصرّف إلى نهاية جملته! لا تقل أبداً: *Weil ich habe keine Zeit*، بل: *Weil ich keine Zeit **habe***."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "كلا الرابطين weil و da رابطان تبعيان سببيان يرسلان الفعل المصرّف إلى نهاية الجملة",
    "تُستخدم weil (لأنّ) لتقديم سبب جديد، وتجيب عن سؤال Warum?، وموضعها المعتاد بعد الجملة الرئيسية",
    "تُستخدم da (بما أنّ / نظراً لكون) لسبب معلوم مسبقاً أو بديهي، وتتصدر الجملة عادة في البداية",
    "عند البدء بـ Da، يبدأ الشق الثاني من الجملة بالفعل مباشرة: [Da ..., Verb + Subjekt]",
    "للتعبير عن السبب دون تغيير مكان الفعل في الموقع 2، استخدم رابط الموقع صفر denn"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "der Grund", plural: "die Gründe", ar: "السبب / العلة", article: "der", example: "Nennen Sie den Grund mit 'weil'." },
    { de: "die Ursache", plural: "die Ursachen", ar: "السبب الجذري / الدافع", article: "die", example: "Was war die Ursache für das Problem?" },
    { de: "der Feiertag", plural: "die Feiertage", ar: "يوم العطلة الرسمية", article: "der", example: "Da heute ein Feiertag ist, schlafen wir aus." },
    { de: "die Panne", plural: "die Pannen", ar: "العطل الفني / الخلل", article: "die", example: "Der Bus hatte eine technische Panne." },
    { de: "vertreten", plural: "vertritt, vertrat, hat vertreten", ar: "ينوب عن / يُمثّل", article: "", example: "Sie vertritt den kranken Kollegen." },
    { de: "begründen", plural: "begründet, begründete, hat begründet", ar: "يُعلّل / يُبين السبب", article: "", example: "Er begründet seine Absage höflich." },
    { de: "sich auskennen", plural: "kennt sich aus, kannte sich aus, hat sich ausgekannt", ar: "يفهم جيداً في / يكون خبيراً بـ", article: "", example: "Er kennt sich mit Autos gut aus." }
  ],

  // 7. تمارين تفاعلية
  exercises: [
    {
      type: "multiple-choice",
      question: "Warum hast du mich gestern nicht angerufen? - ___ mein Akku leer war.",
      options: ["Weil", "Da", "Denn", "Deshalb"],
      correct: 0,
      explanation: "في الإجابة المباشرة عن سؤال Warum? نستخدم دائماً أداة السبب Weil متبوعة بالفعل في النهاية."
    },
    {
      type: "multiple-choice",
      question: "___ es draußen stark regnet, bleiben wir lieber im Haus.",
      options: ["Da", "Denn", "Deshalb", "Trotzdem"],
      correct: 0,
      explanation: "بدأنا الجملة بذكر سبب معلوم وظاهر للجميع، لذا نستخدم Da (بما أن)، والفعل regnet جاء في نهاية الجملة الفرعية."
    },
    {
      type: "fill-blank",
      question: "Ich kann heute nicht joggen, weil ich starke Knieschmerzen ___.",
      answer: "habe",
      accept: ["habe"],
      explanation: "في الجملة الفرعية مع weil يذهب الفعل المصرّف للنهاية، وتصريف haben مع ich هو habe."
    },
    {
      type: "fill-blank",
      question: "Da die Autobahn gesperrt ist, ___ wir über die Landstraße.",
      answer: "fahren",
      accept: ["fahren"],
      explanation: "بعد جملة Da الفرعية والفاصلة، يجب أن تبدأ الجملة الرئيسية بالفعل المصرّف مباشرة: fahren wir."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (بما أنني مريض، أبقى في الفراش)",
      words: ["Da", "ich", "krank", "bin", ",", "bleibe", "ich", "im", "Bett", "."],
      correct: "Da ich krank bin , bleibe ich im Bett .",
      explanation: "جملة Da تضع الفعل في النهاية (Da ich krank bin) + فاصلة + الفعل ثانياً (bleibe ich) + im Bett."
    },
    {
      type: "match",
      question: "طابق كل أداة مع خصائصها المناسبة:",
      pairs: [
        { left: "weil", right: "سبب مباشر وإجابة عن Warum? (الفعل في النهاية)" },
        { left: "da", right: "سبب معلوم وتأتي غالباً في بداية الجملة (الفعل في النهاية)" },
        { left: "denn", right: "سبب في جملة رئيسية (الموقع 0 والفعل في المركز 2)" },
        { left: "deshalb", right: "نتيجة في الموقع 1 (الفعل في المركز 2)" }
      ],
      explanation: "كلا الرابطين weil و da رابطان تبعيان يرسلان الفعل للنهاية؛ weil تركز على السبب الجديد، و da على السبب المعلوم مسبقاً."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (هو لا يأتي لأنه ليس لديه وقت.)",
      from: "هو لا يأتي لأنه ليس لديه وقت.",
      answer: "Er kommt nicht, weil er keine Zeit hat.",
      accept: [
        "Er kommt nicht, weil er keine Zeit hat.",
        "Er kommt nicht, weil er keine Zeit hat"
      ],
      explanation: "نستخدم weil متبوعة بالجملة الفرعية مع الفعل المصرّف hat في النهاية: weil er keine Zeit hat."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Er kommt nicht, weil er hat keine Zeit.)",
      sentence: "Er kommt nicht, weil er hat keine Zeit.",
      corrected: "Er kommt nicht, weil er keine Zeit hat.",
      accept: ["Er kommt nicht, weil er keine Zeit hat.", "Er kommt nicht, weil er keine Zeit hat"],
      explanation: "أداة weil ترسل الفعل المصرّف إلى نهاية الجملة تماماً: keine Zeit hat."
    },
    {
      type: "multiple-choice",
      question: "Da Herr Müller heute krank ist, ___ Frau Klein die Besprechung.",
      options: ["leitet", "sie leitet", "geleitet hat", "leiten"],
      correct: 0,
      explanation: "عندما تبدأ الجملة بـ Da، تبدأ الجملة الرئيسية بعد الفاصلة بالفعل المصرّف مباشرة (leitet)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Da es spät ist, wir müssen nach Hause gehen.)",
      sentence: "Da es spät ist, wir müssen nach Hause gehen.",
      corrected: "Da es spät ist, müssen wir nach Hause gehen.",
      accept: ["Da es spät ist, müssen wir nach Hause gehen.", "Da es spät ist, müssen wir nach Hause gehen"],
      explanation: "بعد جملة Da والفاصلة، يجب أن تبدأ الجملة الرئيسية بالفعل المصرّف فوراً: müssen wir."
    }
  ],

  // 8. اختبار الدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Auf welche Frage antwortet man typischerweise mit 'weil'?",
      options: ["Warum?", "Woher?", "Wann?", "Wohin?"],
      correct: 0,
      explanation: "نجيب عن سؤال السبب Warum? (لماذا؟) باستخدام weil (لأنّ)."
    },
    {
      type: "multiple-choice",
      question: "Wo steht das konjugierte Verb in einem Kausalsatz mit 'da'?",
      options: ["Am Satzende", "Auf Position 2", "Auf Position 1", "Direkt nach 'da'"],
      correct: 0,
      explanation: "الرابط da هو رابط تبعي (Subjunktion) يرسل الفعل المصرّف حتماً إلى نهاية جملته."
    },
    {
      type: "multiple-choice",
      question: "Welcher Konnektor passt am besten am Satzanfang für einen bekannten Grund?",
      options: ["Da", "Denn", "Aber", "Oder"],
      correct: 0,
      explanation: "نستخدم Da في صدارة الجملة لبيان سبب معلوم أو بديهي للطرفين."
    },
    {
      type: "multiple-choice",
      question: "Da die Sonne scheint, ___ wir eine Fahrradtour.",
      options: ["machen", "wir machen", "gemacht haben", "wir"],
      correct: 0,
      explanation: "تبدأ الجملة الرئيسية بالفعل المصرّف مباشرة بعد الفاصلة: machen wir."
    },
    {
      type: "multiple-choice",
      question: "Ich trinke keinen Kaffee, ___ ich davon nicht schlafen kann.",
      options: ["weil", "denn", "deshalb", "trotzdem"],
      correct: 0,
      explanation: "الفعل kann في نهاية الجملة (davon nicht schlafen kann)، لذا نحتاج إلى الرابط التبعي weil."
    }
  ]
};

window.lessons = window.LESSONS;
