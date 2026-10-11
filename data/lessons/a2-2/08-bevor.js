// data/lessons/a2-2/08-bevor.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-2-08"] = {
  id: "a2-2-08",
  level: "a2-2",
  order: 8,
  slug: "bevor",
  title: {
    de: "Temporalsätze mit »bevor«",
    ar: "الجمل الزمنية مع قبل أن (bevor)"
  },
  tags: ["nebensatz", "konnektoren", "bevor", "temporal", "grammatik", "a2-2"],

  // 1. الهدف من الدرس
  goal: "ستتعلم كيفية استخدام الرابط الزمني bevor (قبل أن) للربط بين حدثين مرتبين زمنياً، وضبط موقع الفعل المصرف في نهاية جملة bevor وبداية الجملة الرئيسية.",

  // 2. الشرح المبسط مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "أداة الربط **bevor** تعني «قبل أن» وتُستخدم لتكوين جملة زمنية فرعية (Temporalsatz). توضح هذه الأداة تتابعاً زمنياً بين حدثين: الحدث في **الجملة الرئيسية** يقع أولاً زمنياً، يليه الحدث المذكور في **جملة bevor**."
    },
    {
      type: "rule",
      content: "قاعدة الجملة الفرعية (Nebensatz):\nتُرسل أداة الربط **bevor** الفعل المُصرّف إلى **نهاية جملتها تماماً**.\nولا بد من وضع **فاصلة (Komma)** تفصل بين الجملة الرئيسية والجملة الفرعية دائماً!"
    },
    {
      type: "table",
      headers: ["الموقع", "الهيكل والترتيب", "مثال"],
      rows: [
        [
          "الجملة الرئيسية أولاً",
          "Hauptsatz (V2) + **,** bevor + Nebensatz + **Verb am Ende**",
          "Ich trinke Kaffee**,** bevor ich zur Arbeit **gehe**."
        ],
        [
          "جملة bevor أولاً",
          "Bevor + Nebensatz + **Verb am Ende**, + **Verb** (Hauptsatz) + Subjekt...",
          "Bevor ich zur Arbeit **gehe**, **trinke** ich Kaffee."
        ]
      ]
    },
    {
      type: "text",
      content: "انتبه بشدة عندما تبدأ الجملة بـ **Bevor**: تُعامل جملة Bevor كاملةً كأنها العنصر الأول (Position 1) في الجملة الكلية، لذلك يجب أن تبدأ الجملة الرئيسية بعد الفاصلة مباشرة بـ **الفعل المُصرّف** (Position 2)."
    },
    {
      type: "table",
      headers: ["الأداة", "نوعها القواعدي", "التركيب", "مثال توضيحي"],
      rows: [
        ["vor", "حرف جر (Präposition)", "vor + اسم في حالة Dativ", "**Vor dem Essen** wasche ich meine Hände."],
        ["bevor", "رابط جملة (Subjunktion)", "bevor + جملة كاملة (فاعل + فعل بآخرها)", "**Bevor ich esse**, wasche ich meine Hände."]
      ]
    }
  ],

  // 3. الأمثلة العملية الناطقة (9 أمثلة مع ملاحظات إعرابية)
  examples: [
    {
      de: "**Bevor ich schlafe**, putze ich meine Zähne.",
      ar: "قبل أن أنام، أفرش أسناني.",
      highlight: "Bevor ich schlafe, putze",
      audio: true,
      note: "بدأت الجملة بـ Bevor: الفعل schlafe في النهاية، والفعل putze يبدأ الجملة الرئيسية بعد الفاصلة"
    },
    {
      de: "Ich trinke immer Kaffee, **bevor ich zur Arbeit gehe**.",
      ar: "أشرب دائماً القهوة، قبل أن أذهب إلى العمل.",
      highlight: "bevor ich zur Arbeit gehe",
      audio: true,
      note: "bevor في وسط الجملة تسبقها فاصلة، والفعل gehe في نهاية الجملة تماماً"
    },
    {
      de: "**Bevor wir essen**, waschen wir unsere Hände.",
      ar: "قبل أن نأكل، نغسل أيدينا.",
      highlight: "Bevor wir essen, waschen",
      audio: true,
      note: "حدث الأكل يسبقه غسل اليدين؛ essen في آخر جملة الصلة، وwaschen بالمركز الأول في الرئيسية"
    },
    {
      de: "Bitte schließe das Fenster, **bevor du das Haus verlässt**.",
      ar: "من فضلك أغلق النافذة، قبل أن تغادر المنزل.",
      highlight: "bevor du das Haus verlässt",
      audio: true,
      note: "الجملة الأولى صيغة أمر، والفعل verlässt في نهاية جملة bevor"
    },
    {
      de: "**Bevor er den Vertrag unterschreibt**, liest er ihn genau.",
      ar: "قبل أن يوقع العقد، يقرأه بدقة.",
      highlight: "Bevor er den Vertrag unterschreibt, liest",
      audio: true,
      note: "unterschreiben فعل غير منفصل، جاء مصرفاً في نهاية الجملة الفرعية"
    },
    {
      de: "Man sollte nachdenken, **bevor man eine wichtige Entscheidung trifft**.",
      ar: "ينبغي على المرء التفكير قبل أن يتخذ قراراً مهماً.",
      highlight: "bevor man eine wichtige Entscheidung trifft",
      audio: true,
      note: "التركيب Entscheidung treffen يعني اتخاذ قرار، وتصرّف الفعل trifft في النهاية"
    },
    {
      de: "**Bevor der Zug abfuhr**, kaufte er schnell ein Ticket.",
      ar: "قبل أن ينطلق القطار، اشترى تذكرة بسرعة.",
      highlight: "Bevor der Zug abfuhr, kaufte",
      audio: true,
      note: "في الماضي Präteritum: الفعل المنفصل abfahren اجتمع في نهايته ليصبح abfuhr في نهاية الجملة"
    },
    {
      de: "Kontrolliere deine E-Mail, **bevor du sie abschickst**.",
      ar: "راجع بريدك الإلكتروني قبل أن ترسله.",
      highlight: "bevor du sie abschickst",
      audio: true,
      note: "الفعل المنفصل abschicken يلتئم في نهاية الجملة الفرعية: abschickst"
    },
    {
      de: "**Bevor wir die Reise planten**, fragten wir unsere Freunde.",
      ar: "قبل أن نخطط للرحلة، سألنا أصدقاءنا.",
      highlight: "Bevor wir die Reise planten, fragten",
      audio: true,
      note: "الجملتان في صيغة الماضي Präteritum المتطابق في الزمن"
    }
  ],

  // 4. نصائح للناطقين بالعربية
  arabicTips: [
    "الفرق بين vor و bevor: في العربية نستخدم «قبل» في الحالتين (قبل العمل / قبل أن أعمل). في الألمانية إذا جاء بعدها اسم نستخدم **vor + Dativ** (Vor der Arbeit)، أما إذا جاءت جملة تحتوي على فعل وفاعل فنستخدم حتماً **bevor** (Bevor ich arbeite).",
    "انقلاب الفعل في الجملة الرئيسية: إذا بدأت جملتك بـ Bevor، احذر من قول: *Bevor ich schlafe, ich putze die Zähne*! الصواب دائماً هو تقديم الفعل بعد الفاصلة مباشرة: *Bevor ich schlafe, **putze ich** die Zähne*.",
    "الأفعال المنفصلة تلتئم: إذا كان الفعل في جملة bevor منفصلاً (مثل: abfahren, aufstehen)، فإنه لا ينفصل، بل يأتي كلمة واحدة في نهاية الجملة: *... bevor der Zug **abfährt***."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "bevor تعني «قبل أن» وتربط حدثين أحدهما يسبق الآخر زمنياً",
    "تعتبر bevor أداة ربط فرعية (Subjunktion) ترسل الفعل المُصرّف إلى نهاية جملتها",
    "إذا بدأت الجملة بـ Bevor، تبدأ الجملة الرئيسية بعد الفاصلة بالفعل المُصرّف فوراً (V-S)",
    "نستخدم vor مع الأسماء في Dativ، ونستخدم bevor مع الجمل الفعلية الكاملة",
    "الأفعال المنفصلة لا تنقسم في نهاية جملة bevor بل تلتئم مع بادئتها"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "die Entscheidung", plural: "die Entscheidungen", ar: "القرار", article: "die", example: "Er hat eine kluge Entscheidung getroffen." },
    { de: "der Vertrag", plural: "die Verträge", ar: "العقد", article: "der", example: "Lies den Vertrag vor der Unterschrift." },
    { de: "die Reise", plural: "die Reisen", ar: "الرحلة / السفر", article: "die", example: "Bevor die Reise begann, packten sie die Koffer." },
    { de: "unterschreiben", plural: "unterschreibt, hat unterschrieben", ar: "يوقع / يمضي", article: "", example: "Bitte hier unterschreiben." },
    { de: "nachdenken", plural: "denkt nach, hat nachgedacht", ar: "يفكر ملياً / يتأمل", article: "", example: "Man muss nachdenken, bevor man spricht." },
    { de: "die Zähne", plural: "die Zähne (Singular: der Zahn)", ar: "الأسنان", article: "die", example: "Ich putze meine Zähne zweimal täglich." },
    { de: "verlassen", plural: "verlässt, hat verlassen", ar: "يغادر / يترك مكاناً", article: "", example: "Er verlässt das Büro um 17 Uhr." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich wasche meine Hände, bevor ich ___.",
      options: ["esse", "isst", "essen", "aß"],
      correct: 0,
      explanation: "الفاعل في جملة bevor هو ich، لذا يُصرّف الفعل في نهاية الجملة ليصبح esse."
    },
    {
      type: "fill-blank",
      sentence: "Bevor ich schlafe, ___ ich ein Buch. (lesen في الحاضر)",
      answer: "lese",
      accept: ["lese"],
      explanation: "عندما تبدأ الجملة بـ Bevor، تبدأ الجملة الرئيسية بعد الفاصلة مباشرة بالفعل المُصرّف مع ich: lese ich."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين جملة صحيحة:",
      words: ["gehe", "Kaffee", "ich", "trinke", "zur", "Arbeit", "Ich", "bevor"],
      correct: "Ich trinke Kaffee bevor ich zur Arbeit gehe",
      accept: [
        "Ich trinke Kaffee bevor ich zur Arbeit gehe",
        "Ich trinke Kaffee, bevor ich zur Arbeit gehe.",
        "Ich trinke Kaffee, bevor ich zur Arbeit gehe"
      ],
      explanation: "الجملة الرئيسية (Ich trinke Kaffee) + الفاصلة وbevor + الفاعل (ich) + مكملات + الفعل في النهاية (gehe)."
    },
    {
      type: "multiple-choice",
      question: "اختر الأداة الصحيحة: Wir müssen tanken, ___ wir auf die Autobahn fahren.",
      options: ["bevor", "vor", "nach", "weil"],
      correct: 0,
      explanation: "لدينا جملة فعلية كاملة تحتوي على فاعل وفعل، لذا نستخدم رابط الجمل bevor وليس حرف الجر vor."
    },
    {
      type: "match",
      question: "طابق بين الاستخدام الصحيح للأداة وترجمتها:",
      pairs: [
        { left: "Vor dem Frühstück", right: "قبل الإفطار (حرف جر + اسم)" },
        { left: "Bevor ich frühstücke", right: "قبل أن أتناول الإفطار (رابط + جملة)" },
        { left: "Vor der Abreise", right: "قبل المغادرة (حرف جر + اسم)" },
        { left: "Bevor wir abreisen", right: "قبل أن نغادر (رابط + جملة)" }
      ],
      explanation: "vor يأتي مع الأسماء في حالة Dativ، بينما bevor يربط جملة فعلية كاملة بفعل في نهايتها."
    },
    {
      type: "error-correction",
      sentence: "Bevor ich gehe zur Arbeit, trinke ich Kaffee.",
      corrected: "Bevor ich zur Arbeit gehe, trinke ich Kaffee.",
      accept: [
        "Bevor ich zur Arbeit gehe, trinke ich Kaffee",
        "Bevor ich zur Arbeit gehe, trinke ich Kaffee."
      ],
      explanation: "في جملة bevor يجب أن ينتقل الفعل المصرف (gehe) إلى نهاية الجملة الفرعية تماماً قبل الفاصلة."
    },
    {
      type: "translate",
      from: "أغلق الباب قبل أن تغادر.",
      answer: "Schließe die Tür, bevor du gehst.",
      accept: [
        "Schließe die Tür, bevor du gehst.",
        "Schließe die Tür, bevor du gehst",
        "Mach die Tür zu, bevor du gehst.",
        "Mach die Tür zu, bevor du gehst",
        "Schließen Sie die Tür, bevor Sie gehen.",
        "Schließen Sie die Tür, bevor Sie gehen"
      ],
      explanation: "جملة أمر (Schließe die Tür) تليها جملة فرعية مع bevor وفعلها في النهاية (bevor du gehst)."
    },
    {
      type: "fill-blank",
      sentence: "Wir müssen uns beeilen, bevor das Geschäft ___ . (schließen مع das Geschäft)",
      answer: "schließt",
      accept: ["schließt"],
      explanation: "الفعل schließen في نهاية جملة bevor يُصرّف مع الغائب المفرد das Geschäft ليصبح schließt."
    },
    {
      type: "word-order",
      question: "رتب الجملة التي تبدأ بـ Bevor:",
      words: ["wir", "Bevor", "die", "waschen", "essen", "Hände", "wir"],
      correct: "Bevor wir essen waschen wir die Hände",
      accept: [
        "Bevor wir essen waschen wir die Hände",
        "Bevor wir essen, waschen wir die Hände.",
        "Bevor wir essen, waschen wir die Hände"
      ],
      explanation: "Bevor wir essen (جملة فرعية) + فاصلة + waschen wir die Hände (الجملة الرئيسية تبدأ بالفعل)."
    },
    {
      type: "multiple-choice",
      question: "Bevor er aus dem Haus ging, ___ er das Licht aus.",
      options: ["machte", "er machte", "gemacht", "macht"],
      correct: 0,
      explanation: "تبدأ الجملة الرئيسية بعد الفاصلة بالفعل مباشرة (machte er)، والزمن ماضٍ ليتطابق مع ging."
    }
  ],

  // 8. الاختبار النهائي (5 أسئلة متعددة الخيارات)
  quiz: [
    {
      type: "multiple-choice",
      question: "أين يقع الفعل المُصرّف في الجملة التابعة لـ »bevor«؟",
      options: [
        "في نهاية جملة bevor تماماً",
        "في المركز الثاني مباشرة بعد bevor",
        "في بداية الجملة",
        "بين الفاعل والمفعول"
      ],
      correct: 0,
      explanation: "أداة الربط bevor ترسل الفعل المصرف دائماً إلى نهاية جملتها الفرعية."
    },
    {
      type: "multiple-choice",
      question: "إذا بدأت الجملة بـ: »Bevor du antwortest, ...« فكيف تبدأ الجملة الرئيسية؟",
      options: [
        "بالفعل المصرف مباشرة (مثل: überlege gut)",
        "بالفاعل (مثل: du überlege gut)",
        "بأداة ربط أخرى",
        "باسم المفعول"
      ],
      correct: 0,
      explanation: "تعتبر جملة Bevor موقعاً أولاً (Pos 1)، لذا يجب أن تبدأ الجملة الرئيسية بالفعل المصرف في الموقع 2."
    },
    {
      type: "multiple-choice",
      question: "ما الفرق بين »vor dem Essen« و »bevor ich esse«؟",
      options: [
        "vor حرف جر يليه اسم، وbevor رابط تليه جملة فعلية كاملة",
        "bevor تستخدم للماضي فقط وvor للمضارع فقط",
        "لا يوجد أي فرق بينهما ويمكن استبدالهما عشوائياً",
        "vor ترسل الفعل للآخر وbevor تضعه بالمركز الثاني"
      ],
      correct: 0,
      explanation: "vor هو حرف جر (Präposition) يأخذ اسماً ومجروراً، بينما bevor أداة ربط (Konjunktion) تدخل على جملة فعلية."
    },
    {
      type: "multiple-choice",
      question: "Bitte ruf mich an, bevor du ___ . (الفعل abfahren مع du)",
      options: ["abfährst", "fährst ab", "abfahren", "abgefahren bist"],
      correct: 0,
      explanation: "في الجملة الفرعية مع bevor تلتئم أجزاء الفعل المنفصل في كلمة واحدة بنهاية الجملة (abfährst)."
    },
    {
      type: "multiple-choice",
      question: "أي جملة مكتوبة بترتيب سليم 100%؟",
      options: [
        "Bevor ich schlafe, trinke ich ein Glas Wasser.",
        "Bevor ich schlafe, ich trinke ein Glas Wasser.",
        "Bevor schlafe ich, trinke ich ein Glas Wasser.",
        "Ich trinke ein Glas Wasser bevor schlafe ich."
      ],
      correct: 0,
      explanation: "الترتيب الصحيح: Bevor + الفاعل + الفعل في النهاية (schlafe)، ثم في الرئيسية: الفعل أولاً (trinke) ثم الفاعل (ich)."
    }
  ]
};

window.lessons = window.LESSONS;
