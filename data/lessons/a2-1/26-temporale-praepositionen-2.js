// data/lessons/a2-1/26-temporale-praepositionen-2.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-26"] = {
  id: "a2-1-26",
  level: "a2-1",
  order: 26,
  slug: "temporale-praepositionen-2",
  title: {
    de: "Temporale Präpositionen (2) [seit, ab, bis, in, für]",
    ar: "حروف الجر الزمنية (2): الفترات والمدد الزمنية"
  },
  tags: ["grammatik", "praepositionen", "temporal", "zeitspanne", "dativ", "akkusativ", "a2"],

  // 1. الهدف
  goal: "ستتقن في هذا الدرس التعبير عن الفترات الزمنية والمدد (منذ، بدءاً من، حتى، خلال، ولمدة) باستخدام حروف الجر (seit, ab, bis, von...bis, in, für)، مع ضبط الحالات الإعرابية (Dativ و Akkusativ) واختيار الزمن المناسب للفعل.",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "بعد أن تعلمنا في الدرس السابق حروف الجر لتحديد نقطة زمنية محددة (الساعة واليوم والشهر)، نتعلم هنا حروف الجر التي تعبر عن **المدى الزمني والفترات الممتدة** (Zeitspannen). هذه الحروف تحدد بداية الحدث، نهايته، أو استمراره."
    },
    {
      type: "text",
      content: "### 1. حروف الجر مع المدد الزمنية وحالاتها الإعرابية"
    },
    {
      type: "table",
      headers: ["حرف الجر", "الحالة الإعرابية", "المعنى والوظيفة", "السؤال عنه", "مثال"],
      rows: [
        ["seit", "+ Dativ", "منذ (بدأ في الماضي وما زال مستمراً حتى الآن)", "Seit wann? / Wie lange?", "Ich wohne **seit einem Jahr** in Berlin."],
        ["ab", "+ Dativ", "بدءاً من / اعتباراً من (نقطة بداية في الحاضر أو المستقبل)", "Ab wann?", "**Ab nächster Woche** habe ich Urlaub."],
        ["bis", "بدون أداة / أو bis zu + Dativ", "إلى / حتى (نقطة النهاية)", "Bis wann?", "Der Kurs dauert **bis Freitag**."],
        ["von... bis", "von + Dativ ... bis + Akkusativ/Dativ", "من... إلى (فترة من نقطة بداية إلى نهاية)", "Von wann bis wann?", "Wir arbeiten **von 8 bis 17 Uhr**."],
        ["in", "+ Dativ", "بعد / في غضون فترة مستقبلية", "Wann? / In wie vielen Tagen?", "Der Zug fährt **in zehn Minuten** ab."],
        ["für", "+ Akkusativ", "لمدة (فترة زمنية محددة ومخطط لها)", "Für wie lange?", "Ich bleibe **für drei Tage** in Hamburg."]
      ]
    },
    {
      type: "rule",
      content: "قاعدة ذهبية هامة جداً لـ **seit**: الحدث الذي يبدأ بـ seit بدأ في الماضي لكنه **ما زال مستمراً في اللحظة الحالية**، لذلك يجب أن يكون الفعل في **زمن المضارع (Präsens)** حصراً! لا تستخدم الماضي أبداً مع seit:<br>صح: *Ich lerne seit zwei Jahren Deutsch.* (وما زلت أتعلم الآن).<br>خطأ: *Ich habe seit zwei Jahren Deutsch gelernt.*"
    },
    {
      type: "text",
      content: "### 2. مقارنات دقيقة لإزالة اللبس والتشابه"
    },
    {
      type: "table",
      headers: ["المقارنة", "حرف الجر الأول", "حرف الجر الثاني", "الفرق الجوهري"],
      rows: [
        ["seit مقابل vor", "**seit** einem Jahr (منذ سنة - مستمر حتى الآن + مضارع)", "**vor** einem Jahr (قبل سنة - انتهى تماماً في الماضي + ماضي)", "seit = ما زال حياً | vor = انتهى ومضى"],
        ["in مقابل für", "**in** zwei Tagen (بعد يومين من الآن - نقطة انطلاق مستقبلية)", "**für** zwei Tage (لمدة يومين - مدة البقاء والنشاط)", "in = متى سيبدأ؟ | für = كم سيستمر؟"],
        ["ab مقابل seit", "**ab** morgen / ab 1. Mai (بدءاً من - مستقبل أو حاضر)", "**seit** gestern / seit Mai (منذ - بدأ في الماضي)", "ab يتطلع للأمام | seit ينطلق من الماضي"]
      ]
    },
    {
      type: "rule",
      content: "تذكير إعرابي: تذكر أن **seit** و **in** و **ab** تأخذ دائماً **Dativ** (der/das ← dem | die ← der | Plural ← den + n):<br>• *seit ein**em** Monat* (der Monat)<br>• *in ein**er** Woche* (die Woche)<br>• *seit drei Jahr**en*** (die Jahre + n الجمع).<br>بينما **für** يأخذ دائماً **Akkusativ**: *für ein**en** Monat*."
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Ich wohne **seit einem Jahr** in Frankfurt und fühle mich sehr wohl.",
      ar: "أنا أسكن منذ عام في فرانكفورت وأشعر بالراحة التامة.",
      audio: true,
      note: "seit + Dativ: der Monat/das Jahr ← einem Jahr، والفعل في المضارع (wohne)"
    },
    {
      de: "**Ab morgen** gilt das neue Deutschlandticket für Bus und Bahn.",
      ar: "اعتباراً من الغد تسري تذكرة ألمانيا الجديدة للحافلات والقطارات.",
      audio: true,
      note: "ab = نقطة انطلاق في الحاضر أو المستقبل"
    },
    {
      de: "Die Praxis bleibt **bis nächsten Montag** wegen Urlaub geschlossen.",
      ar: "العيادة ستبقى مغلقة حتى يوم الإثنين القادم بسبب الإجازة.",
      audio: true,
      note: "bis = نقطة النهاية الزمنية"
    },
    {
      de: "Unser Büro ist täglich **von 8:00 bis 16:30 Uhr** geöffnet.",
      ar: "مكتبنا مفتوح يومياً من الساعة 8:00 حتى 16:30.",
      audio: true,
      note: "von... bis = بداية الفترة ونهايتها"
    },
    {
      de: "Die Prüfung beginnt **in zwei Wochen**.",
      ar: "سيبدأ الامتحان بعد أسبوعين (في غضون أسبوعين).",
      audio: true,
      note: "in + Dativ جمع: zwei Wochen"
    },
    {
      de: "Ich fahre **für ein Wochenende** zu meinen Großeltern.",
      ar: "أنا مسافر لمدة عطلة نهاية أسبوع واحدة إلى جدي وجدتي.",
      audio: true,
      note: "für + Akkusativ محايد: ein Wochenende (مدة مخططة)"
    },
    {
      de: "Er lernt schon **seit sechs Monaten** fleißig Deutsch.",
      ar: "هو يتعلم اللغة الألمانية باجتهاد منذ ستة أشهر.",
      audio: true,
      note: "seit + Dativ جمع: sechs Monaten (مع إضافة n الجمع)"
    },
    {
      de: "Ich brauche das Auto nur **für einen Tag**.",
      ar: "أحتاج السيارة ليوم واحد فقط.",
      audio: true,
      note: "für + Akkusativ مذكر: einen Tag"
    },
    {
      de: "Wir fliegen **in einem Monat** in die Türkei.",
      ar: "سنسافر بالطائرة بعد شهر واحد إلى تركيا.",
      audio: true,
      note: "in + Dativ مذكر: einem Monat"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في العربية والإنجليزية نستخدم صيغة الماضي أو التام مع «منذ» (I have lived here for a year / أنا عشت هنا منذ سنة)، لكن في الألمانية يجب استخدام زمن المضارع (Präsens) مع seit لأن الفعل ما زال مستمراً: «Ich lebe seit einem Jahr hier».",
    "احذر الخلط بين «vor» و «seit»: كلاهما يشير لنقطة في الماضي، ولكن vor تعني (قبل) لحدث انتهى (vor einem Jahr kam ich = جئت قبل سنة)، بينما seit تعني (منذ) والحدث ما زال مستمراً حتى الآن.",
    "احذر الفرق بين «in» و «für»: إذا قلت «in drei Tagen» فهذا يعني بعد ثلاثة أيام سيبدأ الحدث. أما إذا قلت «für drei Tage» فهذا يعني أن الحدث سيستمر لمدة ثلاثة أيام!"
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "seit + Dativ + Präsens = حدث بدأ في الماضي وما زال مستمراً الآن (seit einem Monat)",
    "ab + Dativ = بداية حدث في الحاضر أو المستقبل (ab morgen, ab nächster Woche)",
    "bis = نقطة النهاية الزمنية (bis Freitag, bis 18 Uhr)",
    "in + Dativ = حدث سيقع بعد فترة مستقبلية (in zwei Wochen)",
    "für + Akkusativ = مدة استمرار الشيء المخطط لها (für drei Tage, für ein Jahr)"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "die Dauer", plural: "-", ar: "المدة / الاستغراق", article: "die", example: "Die Dauer des Films ist zwei Stunden." },
    { de: "die Frist", plural: "die Fristen", ar: "المهلة الزمنية / الموعد الأخير", article: "die", example: "Die Frist endet am Montag." },
    { de: "der Zeitraum", plural: "die Zeiträume", ar: "الفترة الزمنية", article: "der", example: "In diesem Zeitraum war ich krank." },
    { de: "dauern", plural: "dauert, hat gedauert", ar: "يستغرق / يدوم", article: "", example: "Wie lange dauert die Fahrt?" },
    { de: "die Gültigkeit", plural: "-", ar: "الصلاحية / السريان", article: "die", example: "Ab wann hat das Ticket Gültigkeit?" },
    { de: "verlängern", plural: "verlängert, hat verlängert", ar: "يمدد / يجدد", article: "", example: "Ich möchte meinen Pass verlängern." },
    { de: "geöffnet", plural: "-", ar: "مفتوح", article: "", example: "Das Geschäft ist bis 20 Uhr geöffnet." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich wohne ___ zwei Jahren in Deutschland und arbeite hier.",
      options: ["seit", "vor", "für", "ab"],
      correct: 0,
      answer: 0,
      explanation: "السكن بدأ في الماضي وما زال مستمراً في الحاضر + Dativ ← seit."
    },
    {
      type: "fill-blank",
      question: "Der Zug kommt ___ fünf Minuten am Gleis 3 an.",
      answer: "in",
      accept: ["in", "In"],
      explanation: "الوصول سيحدث بعد خمس دقائق في المستقبل القريب ← in خمس دقائق."
    },
    {
      type: "multiple-choice",
      question: "Wir fahren ___ zwei Wochen in den Urlaub nach Italien.",
      options: ["für", "seit", "ab", "von"],
      correct: 0,
      answer: 0,
      explanation: "مدة الإجازة المخطط لقضائها هناك تتطلب حرف الجر für + Akkusativ."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (اعتباراً من الغد يبدأ كورس اللغة الجديد)",
      words: ["neue", "Ab", "morgen", "der", "Sprachkurs", "beginnt", "."],
      correct: "Ab morgen beginnt der neue Sprachkurs .",
      explanation: "شبه الجملة الزمنية Ab morgen أولاً، ثم الفعل beginnt ثانياً، ثم الفاعل der neue Sprachkurs."
    },
    {
      type: "match",
      question: "طابق كل حرف جر بوظيفته الزمنية الصحيحة:",
      pairs: [
        { left: "seit (+ Dativ)", right: "بدأ في الماضي وما زال مستمراً الآن" },
        { left: "ab (+ Dativ)", right: "نقطة انطلاق في الحاضر أو المستقبل" },
        { left: "für (+ Akkusativ)", right: "مدة زمنية مخطط لقضائها" },
        { left: "in (+ Dativ)", right: "بعد فترة زمنية في المستقبل" }
      ],
      explanation: "seit لحدث بدأ في الماضي ومستمر، ab لنقطة بداية مستقبلية، für للمدة المخططة، و in لما بعد فترة زمنية قادمة."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich lerne seit drei Jahre Deutsch.)",
      sentence: "Ich lerne seit drei Jahre Deutsch.",
      corrected: "Ich lerne seit drei Jahren Deutsch.",
      explanation: "حرف الجر seit يتطلب حالة Dativ، وجمع Jahre في Dativ يأخذ نون إضافية: drei Jahren."
    },
    {
      type: "fill-blank",
      question: "Der Supermarkt ist täglich von 8:00 ___ 20:00 Uhr geöffnet.",
      answer: "bis",
      accept: ["bis"],
      explanation: "التعبير عن المدى الزمني من كذا إلى كذا: von ... bis."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أنا أعيش هنا منذ شهر.)",
      from: "أنا أعيش هنا منذ شهر.",
      answer: "Ich wohne hier seit einem Monat.",
      accept: [
        "Ich wohne hier seit einem Monat.",
        "Ich wohne hier seit einem Monat",
        "Ich lebe hier seit einem Monat.",
        "Ich lebe hier seit einem Monat"
      ],
      explanation: "منذ شهر = seit einem Monat (der Monat ← einem Monat في Dativ)، والفعل في المضارع."
    },
    {
      type: "multiple-choice",
      question: "___ wann gilt der neue Fahrplan? – Ab nächstem Monat.",
      options: ["Ab", "Seit", "Bis", "Vor"],
      correct: 0,
      answer: 0,
      explanation: "السؤال عن نقطة البداية المستقبلية يكون بـ: Ab wann?"
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich habe seit einem Jahr in Berlin gewohnt und wohne noch da.)",
      sentence: "Ich habe seit einem Jahr in Berlin gewohnt und wohne noch da.",
      corrected: "Ich wohne seit einem Jahr in Berlin und wohne noch da.",
      explanation: "مع seit يجب استخدام الفعل في زمن المضارع (Präsens: Ich wohne) لأن الفعل مستمر ولم ينتهِ."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Herr Schmidt arbeitet ___ drei Monaten bei Siemens.",
      options: ["seit", "vor", "in"],
      correct: 0,
      answer: 0,
      explanation: "العمل مستمر حتى اللحظة مع فعل مضارع ← seit."
    },
    {
      type: "multiple-choice",
      question: "Ich bleibe nur ___ einen Monat in Deutschland, dann reise ich zurück.",
      options: ["für", "in", "seit"],
      correct: 0,
      answer: 0,
      explanation: "مدة محددة ومخطط لها مع حالة النصب Akkusativ (einen Monat) ← für."
    },
    {
      type: "multiple-choice",
      question: "___ einer Woche habe ich Urlaub! Ich freue mich schon.",
      options: ["In", "Vor", "Seit"],
      correct: 0,
      answer: 0,
      explanation: "الإجازة ستبدأ بعد أسبوع في المستقبل ← In einer Woche."
    },
    {
      type: "multiple-choice",
      question: "Die Bibliothek bleibt heute ___ 19 Uhr geöffnet.",
      options: ["bis", "ab", "von"],
      correct: 0,
      answer: 0,
      explanation: "نقطة النهاية الزمنية تأخذ bis."
    },
    {
      type: "multiple-choice",
      question: "ما الفرق الأساسي بين «vor einem Jahr» و «seit einem Jahr»؟",
      options: [
        "vor تعني حدث انتهى في الماضي، بينما seit تعني حدث مستمر حتى الآن",
        "vor تستخدم للمستقبل، بينما seit تستخدم للماضي",
        "لا يوجد أي فرق، كلاهما مترادفان تماماً"
      ],
      correct: 0,
      answer: 0,
      explanation: "vor = حدث ماضٍ منتهٍ تماماً، seit = بدأ في الماضي وما زال مستمراً في الحاضر."
    }
  ]
};

window.lessons = window.LESSONS;
