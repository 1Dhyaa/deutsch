// data/lessons/a2-1/12-demonstrativpronomen.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-12"] = {
  id: "a2-1-12",
  level: "a2-1",
  order: 12,
  slug: "demonstrativpronomen",
  title: {
    de: "Demonstrativpronomen: dies-",
    ar: "أسماء الإشارة الألمانية (dies- هذا / هذه)"
  },
  tags: ["grammatik", "pronomen", "demonstrativpronomen", "dies", "kasus", "a2"],

  // 1. الهدف
  goal: "ستتعلم في هذا الدرس كيفية تصريف واستخدام اسم الإشارة (dies- هذا / هذه / هؤلاء) في جميع الحالات الإعرابية (Nominativ, Akkusativ, Dativ)، وكيفية استخدامه للإجابة على أسئلة welch-، مع معرفة بدائل الإشارة الشائعة في المحادثة اليومية (der, die, das).",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "يُستخدم اسم الإشارة **dies-** (هذا / هذه / هؤلاء) للإشارة إلى شخص أو شيء محدد وقريب في المكان أو الزمان، أو تم ذكره للتو في الحديث. يمكن أن يأتي ملتصقاً باسم (مثل: dieses Buch) أو بمفرده كضمير يحل محل الاسم."
    },
    {
      type: "rule",
      content: "القاعدة الذهبية لتصريف dies-:<br>يأخذ اسم الإشارة **dies-** نفس نهايات أداة التعريف المحددة (**der, die, das, die**) ونفس نهايات أداة الاستفهام (**welch-**) تماماً في كل حالة إعرابية!<br>• der → dies**er** | die → dies**e** | das → dies**es** | die (Plural) → dies**e**."
    },
    {
      type: "table",
      headers: ["الحالة الإعرابية (Kasus)", "مذكر (Maskulin)", "مؤنث (Feminin)", "محايد (Neutral)", "جمع (Plural)"],
      rows: [
        ["الرفع (Nominativ)", "dieser (der)", "diese (die)", "dieses (das)", "diese (die)"],
        ["النصب (Akkusativ)", "diesen (den)", "diese (die)", "dieses (das)", "diese (die)"],
        ["الجر (Dativ)", "diesem (dem)", "dieser (der)", "diesem (dem)", "diesen (+n) (den)"]
      ]
    },
    {
      type: "text",
      content: "التناغم والتكامل بين السؤال بـ welch- والجواب بـ dies-:"
    },
    {
      type: "table",
      headers: ["السؤال بـ welch-", "الجواب بـ dies-", "الحالة الإعرابية", "المعنى بالعربية"],
      rows: [
        ["Welcher Rock gefällt dir?", "**Dieser** Rock gefällt mir.", "Nominativ (مذكر)", "أي تنورة تعجبك؟ - هذه التنورة."],
        ["Welchen Mantel kaufst du?", "Ich nehme **diesen** Mantel.", "Akkusativ (مذكر)", "أي معطف تشتري؟ - آخذ هذا المعطف."],
        ["Welches Kleid ziehst du an?", "**Dieses** Kleid hier.", "Akkusativ (محايد)", "أي فستان سترتدين؟ - هذا الفستان."],
        ["In welchem Hotel schlaft ihr?", "In **diesem** Hotel.", "Dativ (محايد)", "في أي فندق تنامون؟ - في هذا الفندق."],
        ["Mit welcher Kollegin sprichst du?", "Mit **dieser** Kollegin.", "Dativ (مؤنث)", "مع أي زميلة تتحدث؟ - مع هذه الزميلة."]
      ]
    },
    {
      type: "rule",
      content: "أدوات التعريف كأسماء إشارة في لغة التخاطب اليومية (Gesprochene Sprache):<br>في الشارع الألماني والمحادثات اليومية السريعة، يفضّل الألمان غالباً استخدام أدوات التعريف نفسها (**der, die, das, den, dem**) كأسماء إشارة بنبرة صوت قوية ومشددة (betont) بدلاً من dieser/dieses:<br>• *Kennst du den Mann dort? – Nein, **den** kenne ich nicht!* (= diesen Mann kenne ich nicht).<br>• *Wie gefällt dir die Jacke? – **Die** ist wunderschön!* (= diese Jacke).<br>• *Was kostet das Hemd? – **Das** kostet 30 Euro.*"
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "**Dieser** neue Film im Kino ist wirklich sehr spannend.",
      ar: "هذا الفيلم الجديد في السينما مشوق للغاية.",
      audio: true,
      note: "der Film مذكر في فاعل (Nominativ) ← dieser"
    },
    {
      de: "Ich möchte **diesen** eleganten Mantel anprobieren.",
      ar: "أود أن أقيس هذا المعطف الأنيق.",
      audio: true,
      note: "der Mantel مفعول به (Akkusativ) ← diesen"
    },
    {
      de: "**Dieses** kleine Restaurant am Marktplatz kocht fantastisch.",
      ar: "هذا المطعم الصغير في ساحة السوق يطبخ طعاماً رائعاً.",
      audio: true,
      note: "das Restaurant محايد في Nominativ ← dieses"
    },
    {
      de: "In **diesem** ruhigen Dorf gibt es leider keinen Bahnhof.",
      ar: "في هذه القرية الهادئة لا توجد محطة قطار للأسف.",
      audio: true,
      note: "das Dorf بعد حرف الجر in (Dativ) ← diesem"
    },
    {
      de: "Mit **dieser** alten Kaffeemaschine kann man nicht mehr arbeiten.",
      ar: "بهذه الآلة القديمة لتحضير القهوة لم يعد بإمكان المرء العمل.",
      audio: true,
      note: "die Maschine بعد حرف الجر mit (Dativ) ← dieser"
    },
    {
      de: "Welche Hose soll ich kaufen? – Nimm unbedingt **diese** hier!",
      ar: "أي بنطال عليّ شراؤه؟ - خذ هذا تحديداً هنا!",
      audio: true,
      note: "die Hose مؤنث في Akkusativ ← diese"
    },
    {
      de: "Ich kenne **diesen** neuen Mitarbeiter aus der IT-Abteilung noch nicht.",
      ar: "أنا لا أعرف هذا الموظف الجديد من قسم تكنولوجيا المعلومات بعد.",
      audio: true,
      note: "der Mitarbeiter مذكر مفعول به ← diesen"
    },
    {
      de: "Siehst du die Frau mit dem roten Hut? – Ja, **die** kenne ich gut!",
      ar: "هل ترى تلك المرأة ذات القبعة الحمراء؟ - نعم، تلك أعرفها جيداً!",
      audio: true,
      note: "die هنا اسم إشارة شفهي بنبرة صوت مؤكدة"
    },
    {
      de: "Zu **diesem** wichtigen Termin muss ich pünktlich erscheinen.",
      ar: "لهذا الموعد الهام يجب عليّ الحضور في الموعد المحدد بدقة.",
      audio: true,
      note: "der Termin بعد حرف الجر zu (Dativ) ← diesem"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في العربية اسم الإشارة مبني في الغالب (هذا، هذه، ذلك) ولا يتغير آخره بسبب النصب أو الجر. أما في الألمانية فإن **dies-** يتغير شكل نهايته تماماً وفقاً للحالة الإعرابية (dieser, diesen, diesem, dieser)، فلا تقل: *Ich kaufe dieser Mantel ❌* بل قل: *Ich kaufe **diesen** Mantel*.",
    "انتبه لنهاية المحايد (-es): في لغة الكلام السريعة قد تسمع الألمان يقولون *dies Jahr* أو *dies Mal*، لكن القاعدة الصحيحة والرسمية للكتابة والامتحانات تتطلب النهاية كاملة: **dieses Jahr**, **dieses Mal**, **dieses Buch**.",
    "استخدام أدوات التعريف كأسماء إشارة في الشارع: إذا سمعت ألمانياً يقول في المتجر: *»Den nehme ich!«*، فهو يقصد *Diesen nehme ich* (سآخذ هذا الشيء المذكر)، ويضغط على كلمة Den بقوة صوتية واضحة."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "اسم الإشارة dies- يعني (هذا / هذه / هؤلاء) ويشير إلى شيء محدد وقريب.",
    "يأخذ dies- نهايات أداة التعريف (der, die, das) تماماً في جميع الحالات الإعرابية.",
    "المذكر يتغير دائماً: dieser (Nom) ← diesen (Akk) ← diesem (Dat).",
    "المؤنث والمحايد والجمع: diese / dieses / diese، وفي الجر: dieser / diesem / diesen.",
    "في لغة الحديث اليومية تُستخدم der/die/das كأسماء إشارة بنبرة مشددة."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "dieser / diese / dieses", plural: "diese", ar: "هذا / هذه / هذا للمحايد (اسم إشارة)", article: "", example: "Dieser Mantel steht dir sehr gut." },
    { de: "dieses Mal", plural: "-", ar: "هذه المرة", article: "das", example: "Dieses Mal machen wir alles richtig." },
    { de: "dieses Jahr", plural: "-", ar: "هذا العام / هذه السنة", article: "das", example: "Dieses Jahr reisen wir nach Wien." },
    { de: "diese Woche", plural: "-", ar: "هذا الأسبوع", article: "die", example: "Diese Woche habe ich viel zu tun." },
    { de: "der Schirm", plural: "die Schirme", ar: "المظلة / الشماسية", article: "der", example: "Nimm diesen Schirm mit, es regnet!" },
    { de: "der Koffer", plural: "die Koffer", ar: "حقيبة السفر", article: "der", example: "Diesen Koffer nehme ich mit ins Flugzeug." },
    { de: "anprobieren", plural: "probiert an, hat anprobiert", ar: "يقيس (ملابس / أحذية)", article: "", example: "Darf ich diese Jacke anprobieren?" }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich kaufe ___ Schirm hier, er ist stabil und günstig. (der Schirm, Akkusativ)",
      options: ["diesen", "dieser", "dieses", "diesem"],
      correct: 0,
      answer: 0,
      explanation: "كلمة Schirm مذكرة (der Schirm)، وفي حالة النصب (Akkusativ) تأخذ النهاية -en: diesen."
    },
    {
      type: "fill-blank",
      question: "Welches Kleid gefällt dir besser? - ___ Kleid hier gefällt mir sehr gut.",
      answer: "Dieses",
      accept: ["Dieses", "dieses"],
      explanation: "كلمة Kleid محايدة (das Kleid)، واسم الإشارة في حالة الرفع/النصب هو Dieses."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (هذا المعطف دافئ جداً ومريح)",
      words: ["Dieser", "Mantel", "ist", "sehr", "warm", "und", "bequem", "."],
      correct: "Dieser Mantel ist sehr warm und bequem .",
      explanation: "المبتدأ (Dieser Mantel) + الفعل (ist) + الخبر والصفات (sehr warm und bequem)."
    },
    {
      type: "match",
      question: "طابق اسم الإشارة dies- مع الحالة الإعرابية المناسبة له:",
      pairs: [
        { left: "مذكر فاعل (Nominativ)", right: "dieser Mann" },
        { left: "مذكر مفعول (Akkusativ)", right: "diesen Mann" },
        { left: "محايد مجرور (Dativ)", right: "in diesem Haus" },
        { left: "مؤنث مجرور (Dativ)", right: "mit dieser Frau" }
      ],
      explanation: "تصريف اسم الإشارة: dieser للمذكر الفاعل، diesen للمذكر المفعول، diesem للمحايد المجرور، dieser للمؤنث المجرور."
    },
    {
      type: "multiple-choice",
      question: "In ___ Hotel haben wir im Urlaub übernachtet. (das Hotel, Dativ)",
      options: ["diesem", "diesen", "dieser", "dieses"],
      correct: 0,
      answer: 0,
      explanation: "das Hotel في حالة الجر (Dativ) بعد حرف الجر in تأخذ النهاية -em: diesem."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ الإعرابي: (Ich kenne dieser Mann leider nicht.)",
      sentence: "Ich kenne dieser Mann leider nicht.",
      corrected: "Ich kenne diesen Mann leider nicht.",
      explanation: "فعل kennen يأخذ مفعولاً به (Akkusativ)، والمذكر يتحول إلى diesen Mann."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (هذا القميص يناسبني تماماً.)",
      from: "هذا القميص يناسبني تماماً.",
      answer: "Dieses Hemd passt mir genau.",
      accept: [
        "Dieses Hemd passt mir genau.",
        "Dieses Hemd passt mir sehr gut.",
        "Dieses Hemd passt mir perfekt.",
        "Dieses Hemd passt mir genau",
        "Dieses Hemd passt mir sehr gut"
      ],
      explanation: "كلمة Hemd محايدة (das Hemd) فيكون اسم الإشارة هو Dieses Hemd."
    },
    {
      type: "fill-blank",
      question: "Mit ___ Kollegin arbeite ich jeden Tag gerne zusammen. (die Kollegin, Dativ)",
      answer: "dieser",
      accept: ["dieser"],
      explanation: "حرف الجر mit يفرض Dativ، وكلمة Kollegin مؤنثة (die ← der) فتأخذ النهاية -er: dieser."
    },
    {
      type: "multiple-choice",
      question: "Kennst du den neuen Lehrer dort drüben? – Ja, ___ kenne ich sehr gut! (اسم إشارة شفهي)",
      options: ["den", "der", "dem", "das"],
      correct: 0,
      answer: 0,
      explanation: "في الحديث الشفهي نستخدم أداة التعريف den كاسم إشارة للمذكر المنصوب (den kenne ich)."
    },
    {
      type: "error-correction",
      question: "صحح الترتيب: (Zu diesem Fest wir gehen morgen gerne.)",
      sentence: "Zu diesem Fest wir gehen morgen gerne.",
      corrected: "Zu diesem Fest gehen wir morgen gerne.",
      explanation: "عند بدء الجملة بشبه جملة جار ومجرور (Zu diesem Fest)، يأتي الفعل المصرّف فوراً في المركز الثاني (gehen wir)."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "»___ Pullover gefällt mir viel besser als der blaue.« (der Pullover, فاعل)",
      options: ["Dieser", "Diesen", "Diesem"],
      correct: 0,
      answer: 0,
      explanation: "der Pullover فاعل في حالة Nominativ فيأخذ Dieser."
    },
    {
      type: "multiple-choice",
      question: "»Möchtest du ___ leckeren Kuchen probieren?« (der Kuchen, مفعول به)",
      options: ["diesen", "dieser", "dieses"],
      correct: 0,
      answer: 0,
      explanation: "der Kuchen مفعول به في حالة Akkusativ فيأخذ diesen."
    },
    {
      type: "multiple-choice",
      question: "»Aus ___ Grund kann ich heute leider nicht kommen.« (der Grund, Dativ)",
      options: ["diesem", "diesen", "dieser"],
      correct: 0,
      answer: 0,
      explanation: "حرف الجر aus يفرض Dativ، و der Grund تصبح diesem Grund."
    },
    {
      type: "multiple-choice",
      question: "»Welche Schuhe kaufst du? – Ich nehme ___ hier!« (die Schuhe, جمع مفعول به)",
      options: ["diese", "dieser", "diesen"],
      correct: 0,
      answer: 0,
      explanation: "اسم الجمع في حالة Akkusativ يأخذ diese (مثل die Schuhe)."
    },
    {
      type: "multiple-choice",
      question: "في لغة التخاطب اليومية، ما هو البديل الشفهي الشائع لجملة: »Diesen Mann kenne ich nicht«؟",
      options: [
        "Den kenne ich nicht!",
        "Der kenne ich nicht!",
        "Dem kenne ich nicht!"
      ],
      correct: 0,
      answer: 0,
      explanation: "في لغة المحادثة الشفهية يُستخدم Den بنبرة مشددة كاسم إشارة للمذكر في حالة Akkusativ."
    }
  ]
};
window.lessons = window.LESSONS;
