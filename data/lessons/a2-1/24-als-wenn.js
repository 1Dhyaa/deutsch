// data/lessons/a2-1/24-als-wenn.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-24"] = {
  id: "a2-1-24",
  level: "a2-1",
  order: 24,
  slug: "als-wenn",
  title: {
    de: "Temporalsätze: als vs. wenn",
    ar: "أدوات الربط الزمنية: als مقابل wenn"
  },
  tags: ["grammatik", "nebensatz", "als", "wenn", "zeit", "konnektoren", "a2"],

  // 1. الهدف
  goal: "ستتقن في هذا الدرس الفرق الجوهري بين أداتي الربط الزمنيتين (als) و (wenn)، ومتى تستخدم كلاً منهما للتعبير عن «عندما / حينما»، مع ضبط ترتيب الجملة الفرعية وإرسال الفعل المصرّف إلى النهاية.",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "في اللغة العربية نستخدم كلمة «عندما» أو «حينما» أو «لمّا» للإشارة إلى أي حدث زمني سواء كان في الماضي أو الحاضر، وسواء وقع لمرة واحدة أو تكرر عدة مرات. لكن في اللغة الألمانية يوجد تمييز دقيق وصارم بين أداتين: **als** و **wenn**."
    },
    {
      type: "table",
      headers: ["أداة الربط", "الزمن المستخدم", "نوع الحدث", "المعنى بالعربية", "مثال توضيحي"],
      rows: [
        ["als", "الماضي فقط (Vergangenheit)", "حدث وقع **مرة واحدة فقط** في الماضي أو فترة منتهية في العمر", "عندما / حينما", "Als ich ein Kind war, lebte ich in Syrien."],
        ["wenn", "الحاضر أو المستقبل (Präsens / Futur)", "حدث يقع في الحاضر أو المستقبل أو شرطي", "عندما / إذا / لو", "Wenn ich Feierabend habe, rufe ich dich an."],
        ["wenn (immer wenn)", "الماضي المتكرر (Wiederholung)", "حدث **تكرر عدة مرات** أو عادة في الماضي (immer wenn / jedes Mal wenn)", "كلما / كل حينما", "Immer wenn ich krank war, kochte Oma eine Suppe."]
      ]
    },
    {
      type: "rule",
      content: "القاعدة الذهبية للتفريق السريع:<br>1. هل الحدث في الماضي؟<br>← إذا كان حدثاً وحيداً لمرة واحدة (مثل: الطفولة، يوم التخرج، لحظة وصول القطار، يوم الحادث) = **als** بلا تردد!<br>← إذا كان يتكرر ومسبوقاً بـ (immer / jedes Mal) = **wenn**.<br>2. هل الحدث في الحاضر أو المستقبل؟ = **wenn** دائماً وأبداً (لا يجوز استخدام als في المضارع أو المستقبل إطلاقاً!)."
    },
    {
      type: "text",
      content: "### بناء الجملة الفرعية مع als و wenn (Satzstellung)"
    },
    {
      type: "text",
      content: "كل من **als** و **wenn** تعتبر أداة ربط فرعية (Subjunktion). هذا يعني أنها ترسل **الفعل المصرّف إلى نهاية الجملة الفرعية** (Nebensatz)."
    },
    {
      type: "table",
      headers: ["موقع الجملة", "التركيب النحوي", "مثال توضيحي"],
      rows: [
        ["الجملة الرئيسية أولاً ثم الفرعية", "Hauptsatz + , + als / wenn + Subjekt + ... + Verb am Ende", "Ich habe mich gefreut, **als** ich die Nachricht **bekam**."],
        ["الجملة الفرعية أولاً ثم الرئيسية", "Als / Wenn + Subjekt + ... + Verb am Ende + , + Verb + Subjekt + ...", "**Als** der Wecker **klingelte**, **stand** ich sofort auf."]
      ]
    },
    {
      type: "rule",
      content: "قاعدة اصطدام الفعلين عند الفاصلة: عندما تبدأ الجملة بأداة الربط (Als / Wenn)، ينتهي الشطر الأول بفعل مصرّف، وبعد الفاصلة مباشرة يبدأ الشطر الثاني بالفعل المصرّف للجملة الرئيسية (Verb, Verb):<br>*Als ich in Berlin **war**, **besuchte** ich das Brandenburger Tor.*"
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "**Als** ich ein kleines Kind war, hatte ich Angst vor Hunden.",
      ar: "عندما كنتُ طفلاً صغيراً، كنتُ أخاف من الكلاب.",
      audio: true,
      note: "حدث ماضٍ لمرة واحدة (مرحلة الطفولة) ← als والفعل war في النهاية"
    },
    {
      de: "**Als** der Zug gestern ankam, wartete meine Familie am Bahnhof.",
      ar: "عندما وصل القطار بالأمس، كانت عائلتي تنتظر في المحطة.",
      audio: true,
      note: "حدث فريد وقع مرة واحدة في الماضي بالأمس ← als"
    },
    {
      de: "**Wenn** die Sonne scheint, gehen wir gerne im Park spazieren.",
      ar: "عندما تسطع الشمس، نحب الذهاب في نزهة بالحديقة.",
      audio: true,
      note: "زمن المضارع / حدث متكرر حاضر ← wenn"
    },
    {
      de: "Ruf mich bitte an, **wenn** du am Bahnhof ankommst!",
      ar: "اتصل بي رجاءً عندما تصل إلى المحطة!",
      audio: true,
      note: "حدث مستقبلي ← wenn"
    },
    {
      de: "Immer **wenn** ich früher nach Hause kam, kochte meine Mutter das Mittagessen.",
      ar: "كلما كنتُ أعود إلى المنزل في الماضي، كانت أمي تطبخ الغداء.",
      audio: true,
      note: "حدث متكرر في الماضي (مسبوق بـ immer) ← wenn"
    },
    {
      de: "**Als** ich 18 Jahre alt wurde, habe ich den Führerschein gemacht.",
      ar: "عندما بلغتُ الثامنة عشرة من عمري، حصلتُ على رخصة القيادة.",
      audio: true,
      note: "بلوغ سن الـ 18 حدث يحدث مرة واحدة فقط في الحياة ← als"
    },
    {
      de: "Ich war sehr glücklich, **als** ich die B1-Prüfung bestanden habe.",
      ar: "كنتُ سعيداً جداً عندما اجتزتُ امتحان B1.",
      audio: true,
      note: "اجتياز الامتحان حدث ماضٍ محدد لمرة واحدة ← als"
    },
    {
      de: "**Wenn** es am Wochenende regnet, bleiben wir einfach zu Hause.",
      ar: "إذا أمطرت في عطلة نهاية الأسبوع، فسنبقى ببساطة في المنزل.",
      audio: true,
      note: "شرط أو احتمال مستقبلي ← wenn"
    },
    {
      de: "Jedes Mal **wenn** wir Urlaub machten, fuhren wir an die Ostsee.",
      ar: "في كل مرة كنا نأخذ فيها إجازة، كنا نسافر إلى بحر البلطيق.",
      audio: true,
      note: "تكرار في الماضي مع Jedes Mal ← wenn"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "الخطأ الأكثر شيوعاً بين العرب هو ترجمة «لمّا / عندما» حرفياً دائماً بـ wenn! تذكر: إذا كنت تتحدث عن شيء حدث مرة واحدة في الماضي، يجب استخدام als حصراً. لا تقل أبداً «Wenn ich klein war» بل قل «Als ich klein war».",
    "تذكر قاعدة «الطفولة والمراحل العمرية»: أي جملة تبدأ بـ (عندما كنت صغيراً / طالباً / في سن العشرين...) تأخذ دائماً als لأنها فترة ماضية واحدة لا تتكرر: Als ich Kind / Student / 20 Jahre alt war.",
    "انتبه لترتيب الأفعال: بعد الفاصلة يبدأ الجواب بالفعل فوراً: Als ich ankam, **habe** ich gegessen (وليس als ich ankam, ich habe gegessen)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "als = حدث ماضٍ وقع مرة واحدة فقط (einmalig in der Vergangenheit)",
    "wenn = حدث في الحاضر أو المستقبل (Präsens / Futur)",
    "immer wenn / jedes Mal wenn = حدث متكرر حتى لو كان في الماضي",
    "كلا الأداتين تجر الفعل المصرّف إلى نهاية الجملة الفرعية (Nebensatz)",
    "إذا بدأت الجملة بـ Als/Wenn، يبدأ الشطر الثاني بالفعل مباشرة بعد الفاصلة (, Verb Subjekt)"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "die Vergangenheit", plural: "die Vergangenheiten", ar: "الماضي", article: "die", example: "Das passierte in der Vergangenheit." },
    { de: "die Gegenwart", plural: "-", ar: "الحاضر", article: "die", example: "Wir leben in der Gegenwart." },
    { de: "die Zukunft", plural: "-", ar: "المستقبل", article: "die", example: "Was machst du in der Zukunft?" },
    { de: "die Kindheit", plural: "-", ar: "الطفولة", article: "die", example: "In meiner Kindheit spielte ich viel." },
    { de: "bestehen", plural: "besteht, hat bestanden", ar: "ينجح / يجتاز (امتحاناً)", article: "", example: "Ich habe die Prüfung bestanden." },
    { de: "ankommen", plural: "kommt an, ist angekommen", ar: "يصل", article: "", example: "Wann kommt der Zug an?" },
    { de: "der Führerschein", plural: "die Führerscheine", ar: "رخصة القيادة", article: "der", example: "Er hat den Führerschein gemacht." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "___ ich 10 Jahre alt war, lebte ich in Kairo.",
      options: ["Als", "Wenn", "Wann", "Weil"],
      correct: 0,
      answer: 0,
      explanation: "الحديث عن مرحلة عمرية محددة وحدث لمرة واحدة في الماضي يتطلب الأداة Als."
    },
    {
      type: "fill-blank",
      question: "___ du Zeit hast, können wir heute Abend ins Kino gehen.",
      answer: "Wenn",
      accept: ["Wenn", "wenn"],
      explanation: "الجملة تعبر عن الحاضر والمستقبل المشروط، لذلك نستخدم Wenn."
    },
    {
      type: "multiple-choice",
      question: "Immer ___ mein Opa zu Besuch kam, brachte er Schokolade mit.",
      options: ["wenn", "als", "wann", "ob"],
      correct: 0,
      answer: 0,
      explanation: "وجود immer يدل على تكرار الحدث في الماضي، ومع التكرار نستخدم wenn."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (عندما رن المنبه، استيقظتُ فوراً)",
      words: ["der", "Als", "klingelte", "Wecker", "stand", ",", "ich", "auf", "."],
      correct: "Als der Wecker klingelte , stand ich auf .",
      explanation: "الجملة الفرعية تبدأ بـ Als وينتهي شطرها بالفعل klingelte، وبعد الفاصلة يبدأ الشطر الرئيسي بالفعل stand."
    },
    {
      type: "match",
      question: "طابق كل حالة بالأداة الصحيحة المناسبة لها:",
      pairs: [
        { left: "حدث لمرة واحدة في الماضي (طفولة، زواج)", right: "als" },
        { left: "حدث متكرر في الماضي مسبوق بـ immer", right: "wenn" },
        { left: "حدث في الحاضر أو المستقبل", right: "wenn" },
        { left: "سؤال مباشر عن الوقت (أداة استفهام)", right: "wann" }
      ],
      explanation: "als لحدث لمرة واحدة في الماضي، wenn للحاضر/المستقبل وللتكرار في الماضي، و wann للسؤال المباشر عن الزمن."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Wenn ich gestern nach Hause kam, war niemand da.)",
      sentence: "Wenn ich gestern nach Hause kam, war niemand da.",
      corrected: "Als ich gestern nach Hause kam, war niemand da.",
      explanation: "الحدث وقع بالأمس (gestern) ولمرة واحدة فقط في الماضي، لذا يجب استخدام Als بدلاً من Wenn."
    },
    {
      type: "fill-blank",
      question: "Ich habe mich riesig gefreut, ___ ich die Prüfung bestanden habe.",
      answer: "als",
      accept: ["als", "Als"],
      explanation: "اجتياز الامتحان حدث وقع مرة واحدة وانتهى في الماضي، فنستخدم als."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (عندما كنتُ طفلاً، كنتُ ألعب كرة القدم.)",
      from: "عندما كنتُ طفلاً، كنتُ ألعب كرة القدم.",
      answer: "Als ich ein Kind war, spielte ich Fußball.",
      accept: [
        "Als ich ein Kind war, spielte ich Fußball.",
        "Als ich ein Kind war, spielte ich Fußball",
        "Als ich Kind war, spielte ich Fußball.",
        "Als ich ein Kind war, habe ich Fußball gespielt."
      ],
      explanation: "مرحلة الطفولة تأخذ Als: Als ich ein Kind war, spielte ich Fußball."
    },
    {
      type: "multiple-choice",
      question: "Als ich in Deutschland ankam, ___ ich noch kein Wort Deutsch.",
      options: ["sprach", "spreche", "gesprochen", "sprechen"],
      correct: 0,
      answer: 0,
      explanation: "الحدث في الماضي، والفعل المصرّف يأتي مباشرة بعد الفاصلة في صيغة الماضي: sprach."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Als ich nach Hause kam, ich habe ferngesehen.)",
      sentence: "Als ich nach Hause kam, ich habe ferngesehen.",
      corrected: "Als ich nach Hause kam, habe ich ferngesehen.",
      explanation: "بعد الفاصلة في الجملة التي تبدأ بأداة ربط، يجب تقديم الفعل المصرّف (habe) مباشرة على الفاعل (ich)."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "___ ich gestern aufgestanden bin, schien die Sonne.",
      options: ["Als", "Wenn", "Wann"],
      correct: 0,
      answer: 0,
      explanation: "حدث محدد لمرة واحدة بالأمس في الماضي ← Als."
    },
    {
      type: "multiple-choice",
      question: "Wir grillen im Garten, ___ das Wetter morgen schön ist.",
      options: ["wenn", "als", "wann"],
      correct: 0,
      answer: 0,
      explanation: "الحدث في المستقبل (morgen) ← wenn."
    },
    {
      type: "multiple-choice",
      question: "Jedes Mal ___ wir uns trafen, lachten wir viel.",
      options: ["wenn", "als", "wie"],
      correct: 0,
      answer: 0,
      explanation: "تكرار في الماضي بوجود Jedes Mal ← wenn."
    },
    {
      type: "multiple-choice",
      question: "Als Herr Weber die Nachricht las, ___ er sofort seinen Anwalt.",
      options: ["rief", "er rief", "rufen"],
      correct: 0,
      answer: 0,
      explanation: "بعد الفاصلة يأتي الفعل المصرّف في الموقع الأول: rief er sofort..."
    },
    {
      type: "multiple-choice",
      question: "متى نستخدم «als» كأداة ربط زمنية؟",
      options: [
        "مع الأحداث التي وقعت مرة واحدة فقط في الماضي",
        "مع الأحداث اليومية المتكررة في الحاضر",
        "للسؤال عن الوقت ومواعيد القطارات"
      ],
      correct: 0,
      answer: 0,
      explanation: "تُستخدم als حصراً مع حدث ماضٍ لمرة واحدة أو فترة منتهية في الماضي."
    }
  ]
};

window.lessons = window.LESSONS;
