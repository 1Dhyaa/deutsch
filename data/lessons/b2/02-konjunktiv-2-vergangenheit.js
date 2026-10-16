// data/lessons/b2/02-konjunktiv-2-vergangenheit.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["b2-1-02"] = {
  id: "b2-1-02",
  level: "b2-1",
  order: 2,
  slug: "konjunktiv-2-vergangenheit",
  title: {
    de: "Konjunktiv II der Vergangenheit",
    ar: "صيغة التمني والافتراض في الماضي (الندم والافتراضات غير الواقعية)"
  },
  tags: ["b2", "konjunktiv2", "vergangenheit", "grammatik"],

  goal: "إتقان صياغة واستخدام Konjunktiv II في الماضي للتعبير عن الندم، والافتراضات المستحيلة، وانتقاد التصرفات السابقة بأسلوب ألماني راقٍ في المحادثة والكتابة لامتحان B2.",

  explanation: [
    {
      type: "text",
      content: "يُستخدم **Konjunktiv II der Vergangenheit** للتعبير عن أمور **كان من الممكن أن تحدث في الماضي ولكنها لم تحدث بالفعل** (Irreale Vergangenheit)، مثل التعبير عن الندم (Reue)، أو لوم النفس والآخرين (Vorwurf)، أو صياغة شروط غير قابلة للتحقيق."
    },
    {
      type: "table",
      headers: ["الحالة", "التركيب النحوي", "مثال توضيحي (B2)", "المعنى بالعربية"],
      rows: [
        ["مع الأفعال العادية والشاذة", "**hätte / wäre + Partizip II**", "Ich **hätte** die Prüfung **bestanden**, wenn ich mehr gelernt hätte.", "كنت سأنجح في الامتحان لو أنني درست أكثر."],
        ["مع الأفعال الحركية وحالات التحول", "**wäre + Partizip II**", "Er **wäre** früher **gekommen**, aber der Zug hatte Verspätung.", "كان سيصل أبكر، ولكن القطار تأخر."],
        ["مع الأفعال الناقصة (Modalverben)", "**hätte + Infinitiv + Modal-Infinitiv** (Doppelinfinitiv)", "Du **hättest** mich **anrufen können**!", "كان بإمكانك أن تتصل بي! (لوم)"]
      ]
    },
    {
      type: "rule",
      content: "قاعدة الأفعال المساعدة: استخدام **hätte** أو **wäre** يتبع نفس قاعدة زمن Perfekt بالضبط: الأفعال التي تأخذ sein تأخذ **wäre** (مثل: wäre gefahren, wäre geblieben, wäre geworden)، وباقي الأفعال تأخذ **hätte**."
    },
    {
      type: "rule",
      content: "قاعدة المصدر المزدوج (Doppelinfinitiv): عند وجود فعل ناقص (Modalverb)، نستخدم دائماً فعل **hätte** مع مصدر الفعل الأصلي + مصدر الفعل الناقص في نهاية الجملة. مثال: *Ich hätte früher schlafen gehen müssen.*"
    }
  ],

  examples: [
    {
      de: "Wenn ich gestern Zeit **gehabt hätte**, **wäre** ich zu deiner Feier **gekommen**.",
      ar: "لو كان لدي وقت بالأمس، لكنت أتيت إلى حفلتك.",
      highlight: "gehabt hätte ... wäre ... gekommen",
      note: "افتراض غير واقعي في الماضي (Irrealer Konditionalsatz)"
    },
    {
      de: "Fast **wäre** der Fahrer mit dem Bus **kollidiert**.",
      ar: "كاد السائق أن يصطدم بالحافلة (لحسن الحظ لم يصطدم).",
      highlight: "wäre ... kollidiert",
      note: "fast / beinahe + Konjunktiv II يفيد اقتراب وقوع الشيء"
    },
    {
      de: "Du **hättest** mir Bescheid geben **sollen**!",
      ar: "كان ينبغي عليك إخباري مسبقاً!",
      highlight: "hättest ... geben sollen",
      note: "لوم وانتقاد (Vorwurf) باستخدام sollen في الماضي"
    },
    {
      de: "An deiner Stelle **hätte** ich das Stellenangebot sofort **angenommen**.",
      ar: "لو كنت مكانك، لقبلت عرض العمل فوراً.",
      highlight: "hätte ... angenommen",
      note: "تقديم نصيحة بأثر رجعي"
    },
    {
      de: "Ohne deine wertvolle Hilfe **hätte** das Projekt niemals **geglückt**.",
      ar: "لولا مساعدتك القيمة، لما نجح المشروع أبداً.",
      highlight: "hätte ... geglückt",
      note: "تعبير عن الامتنان والاعتراف بالفضل"
    },
    {
      de: "Wir **hätten** uns vorher gründlicher über die Risiken **informieren müssen**.",
      ar: "كان يتحتم علينا الاستعلام بدقة أكبر عن المخاطر مسبقاً.",
      highlight: "hätten ... informieren müssen",
      note: "ندم واعتراف بالتقصير (Doppelinfinitiv)"
    },
    {
      de: "Er tut so, als **hätte** er von den Plänen nichts **gewusst**.",
      ar: "يتصرف وكأنه لم يكن يعلم شيئاً عن الخطط.",
      highlight: "hätte ... gewusst",
      note: "مقارنة غير واقعية (als ob / als + KII)"
    },
    {
      de: "Beinahe **hätte** ich meinen Reisepass am Flughafen **vergessen**.",
      ar: "كدت تقريباً أن أنسى جواز سفري في المطار.",
      highlight: "hätte ... vergessen",
      note: "حدث كاد يقع في الماضي"
    }
  ],

  arabicTips: [
    "في اللغة العربية نستخدم عادة أداة الشرط غير الجازمة (لو) متبوعة بالفعل الماضي (لو درست لنجحت). في الألمانية يجب استخدام hätte/wäre مع اسم المفعول في شقي الجملة الشرطية.",
    "احذر من استخدام صيغة würde في الماضي! صيغة würde + Infinitiv تستخدم فقط للحاضر والمستقبل. في الماضي نستخدم حصراً hätte أو wäre.",
    "انتبه لموقع الفعل عند وجود فعل ناقص: الفعل المساعد hätte يأتي في الموقع الثاني بالجملة الرئيسية، ولكن في الجملة الفرعية (Nebensatz) يسبق المصدرين! مثال: ..., weil er hätte anrufen müssen."
  ],

  summary: [
    "التركيب العام: hätte / wäre + Partizip II في نهاية الجملة.",
    "الأفعال الحركية والتحول تأخذ wäre (wäre geflogen, wäre passiert).",
    "مع الأفعال الناقصة: دائماً hätte + المصدر الأصلي + مصدر الفعل الناقص (hätte arbeiten können).",
    "تستخدم للتعبير عن الندم (Reue)، اللوم (Vorwurf)، وافتراضات الماضي المستحيلة (Irreale Bedingungssätze)."
  ],

  vocabulary: [
    { de: "die Reue", plural: "–", ar: "الندم / التوبة", article: "die", example: "Er empfand tiefe Reue über seine Entscheidung." },
    { de: "der Vorwurf", plural: "die Vorwürfe", ar: "اللوم / العتاب / الاتهام", article: "der", example: "Mach dir deswegen keine Vorwürfe." },
    { de: "versäumen", plural: "–", ar: "يفوّت / يقصّر في", article: "", example: "Ich habe die Frist leider versäumt." },
    { de: "rückgängig machen", plural: "–", ar: "يتراجع عن / يبطل أثر شيء", article: "", example: "Geschehene Dinge lassen sich nicht rückgängig machen." },
    { de: "die Konsequenz", plural: "die Konsequenzen", ar: "العاقبة / النتيجة المترتبة", article: "die", example: "Man muss die Konsequenzen seines Handelns tragen." },
    { de: "bereuen", plural: "–", ar: "يندم على", article: "", example: "Ich bereue es nicht, Deutsch gelernt zu haben." }
  ],

  exercises: [
    {
      type: "multiple-choice",
      question: "Welcher Satz drückt ein Bedauern (Reue) in der Vergangenheit korrekt aus?",
      options: [
        "Ich hätte mich damals besser vorbereiten sollen.",
        "Ich würde mich damals besser vorbereiten.",
        "Ich hatte mich damals besser vorbereiten müssen.",
        "Ich werde mich damals besser vorbereitet haben."
      ],
      answer: 0,
      explanation: "للندم في الماضي مع فعل ناقص نستخدم: hätte + Infinitiv + sollen."
    },
    {
      type: "fill-blank",
      sentence: "Wenn der Zug pünktlich gewesen wäre, ___ wir das Flugzeug noch erreicht.",
      correct: "hätten",
      accept: ["hätten"],
      explanation: "فعل erreichen يأخذ في الماضي الفعل المساعد haben، لذا نستخدم hätten."
    },
    {
      type: "word-order",
      words: ["Du", "hättest", "mich", "gestern", "warnen", "können", "!"],
      correct: "Du hättest mich gestern warnen können !",
      explanation: "الترتيب الصحيح مع Doppelinfinitiv: الفاعل ثم hättest ثم المفعول والظرف ثم المصدرين في النهاية."
    },
    {
      type: "match",
      pairs: [
        { de: "Er wäre gekommen,", ar: "لكان قد جاء،" },
        { de: "wenn er Zeit gehabt hätte.", ar: "لو كان لديه وقت." },
        { de: "Fast wäre ich gestürzt,", ar: "كدت أن أسقط،" },
        { de: "aber ich hielt mich fest.", ar: "لكنني تمسكت جيداً." }
      ],
      explanation: "اربط شقي الجملة المعبرة عن الافتراض أو اقتراب الحدث."
    },
    {
      type: "translate",
      source: "لو كنت أعلم ذلك، لما فعلته أبداً.",
      target: "Wenn ich das gewusst hätte, hätte ich es niemals getan.",
      accept: [
        "Wenn ich das gewusst hätte, hätte ich es nie getan.",
        "Hätte ich das gewusst, hätte ich es niemals getan."
      ],
      explanation: "استخدام Konjunktiv II في شقي الشرط: gewusst hätte ... hätte getan."
    },
    {
      type: "error-correction",
      sentence: "Ich würde damals nach Berlin gefahren.",
      correct: "Ich wäre damals nach Berlin gefahren.",
      explanation: "في الماضي مع الأفعال الحركية لا نستخدم würde إطلاقاً، بل wäre + Partizip II."
    },
    {
      type: "fill-blank",
      sentence: "Beinahe ___ ich den Schlüssel im Büro vergessen.",
      correct: "hätte",
      accept: ["hätte"],
      explanation: "vergessen يأخذ haben، لذا مع beinahe نستخدم hätte."
    },
    {
      type: "multiple-choice",
      question: "Was bedeutet: »An deiner Stelle hätte ich mich beschwert«?",
      options: [
        "Du hast dich nicht beschwert, aber es wäre richtig gewesen.",
        "Du hast dich gestern beschwert.",
        "Ich werde mich an deiner Stelle beschweren.",
        "Niemand durfte sich damals beschweren."
      ],
      answer: 0,
      explanation: "الصيغة تعبر عن نصيحة متأخرة وانتقاد لعدم تقديم شكوى في الماضي."
    },
    {
      type: "translate",
      source: "كان ينبغي عليك أن تخبرني!",
      target: "Du hättest es mir sagen sollen!",
      accept: [
        "Du hättest mir Bescheid geben sollen!",
        "Du hättest mir das sagen sollen!"
      ],
      explanation: "استخدام صيغة اللوم: hättest + Infinitiv + sollen."
    },
    {
      type: "multiple-choice",
      question: "Wo steht »hätte« im Nebensatz mit Doppelinfinitiv?",
      options: [
        "Vor den beiden Infinitiven (z. B. ... weil er hätte anrufen müssen)",
        "Ganz am Ende nach den beiden Infinitiven",
        "Auf Position 1 vor dem Subjekt",
        "Direkt nach dem Konnektor"
      ],
      answer: 0,
      explanation: "في الجملة الفرعية مع المصدر المزدوج، يسبق فعل hätte المصدرين خلافاً للقاعدة العامة."
    }
  ],

  quiz: [
    {
      question: "Welcher Hilfsverb-Form gehört zu: »Er _____ fast vom Fahrrad gefallen«?",
      options: ["wäre", "hätte", "würde", "sei"],
      answer: 0,
      explanation: "فعل fallen يعبر عن تغير في الحركة والمكان، لذلك يأخذ wäre في Konjunktiv II der Vergangenheit."
    },
    {
      question: "Ergänze den Vorwurf: »Du hättest die E-Mail längst _____ !«",
      options: ["beantworten müssen", "beantwortet müssen", "beantworten gemusst", "beantworten sollst"],
      answer: 0,
      explanation: "تركيب Doppelinfinitiv يتطلب المصدر الأصلي + مصدر الفعل الناقص (beantworten müssen)."
    },
    {
      question: "Welcher Satz ist grammatisch VÖLLIG richtig?",
      options: [
        "Wenn wir mehr Zeit gehabt hätten, wären wir länger geblieben.",
        "Wenn wir mehr Zeit hätten gehabt, wurden wir länger bleiben.",
        "Wenn wir mehr Zeit gehabt haben, wären wir geblieben.",
        "Wenn wir mehr Zeit gehabt hätten, hätten wir geblieben."
      ],
      answer: 0,
      explanation: "الجملة الأولى صحيحة تماماً: gehabt hätten في فعل الشرط و wären ... geblieben في جواب الشرط."
    },
    {
      question: "Was drückt der Satz aus: »Hätte ich doch bloß auf dich gehört!«?",
      options: [
        "Einen tiefen, unerfüllbaren Wunsch bzw. Reue in der Vergangenheit.",
        "Einen Befehl für die nahe Zukunft.",
        "Eine Tatsache, die gestern passiert ist.",
        "Einen Ratschlag an einen Freund."
      ],
      answer: 0,
      explanation: "Hätte ... doch bloß تعبر دائماً عن أمنية مستحيلة أو ندم عميق على ما فات."
    },
    {
      question: "Wie wandelt man »Ich konnte nicht kommen« in Konjunktiv II der Vergangenheit um?",
      options: [
        "Ich hätte kommen können (wenn ...)",
        "Ich wäre kommen können",
        "Ich konnte gekommen sein",
        "Ich würde kommen gekonnt"
      ],
      answer: 0,
      explanation: "الماضي من können في Konjunktiv II هو hätte + kommen + können."
    }
  ]
};
