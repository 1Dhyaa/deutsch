// data/lessons/a2-1/11-wochenende.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-11"] = {
  id: "a2-1-11",
  level: "a2-1",
  order: 11,
  slug: "wochenende",
  title: {
    de: "Wochenende",
    ar: "أنشطة عطلة نهاية الأسبوع والتعبير عن الماضي"
  },
  tags: ["wortschatz", "grammatik", "wochenende", "perfekt", "praeteritum", "zeit", "a2"],

  // 1. الهدف
  goal: "ستتعلم في هذا الدرس كيفية الحديث بطلاقة عن أنشطة عطلة نهاية الأسبوع والتعبير عن أحداث الماضي باستخدام المزيج الطبيعي بين Perfekt و Präteritum، بالإضافة إلى إتقان حروف الجر والظروف الزمنية الشائعة.",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "في ألمانيا، يُعد السؤال: *»Was hast du am Wochenende gemacht?«* (ماذا فعلت في عطلة نهاية الأسبوع؟) السؤال الأكثر شيوعاً صباح كل يوم اثنين في بيئة العمل والجامعة. للإجابة على هذا السؤال نحتاج إلى مفردات الأنشطة الترفيهية، بالإضافة إلى معرفة متى نستخدم **Perfekt** ومتى نستخدم **Präteritum**."
    },
    {
      type: "table",
      headers: ["النشاط (Aktivität)", "صيغة الماضي (Perfekt)", "الفعل المساعد", "المعنى بالعربية"],
      rows: [
        ["Freunde treffen", "hat Freunde getroffen", "haben", "التقى بالأصدقاء"],
        ["ins Kino / Theater gehen", "ist ins Kino gegangen", "sein (حركة)", "ذهب إلى السينما / المسرح"],
        ["einen Ausflug machen", "hat einen Ausflug gemacht", "haben", "قام برحلة قصيرة / نزهة"],
        ["am See grillen", "hat gegrillt", "haben", "قام بالشواء عند البحيرة"],
        ["im Wald spazieren gehen", "ist spazieren gegangen", "sein (حركة)", "تنزه في الغابة"],
        ["lange ausschlafen", "hat ausgeschlafen", "haben", "شبع نوماً حتى وقت متأخر"],
        ["zu Hause bleiben", "ist zu Hause geblieben", "sein (بقاء)", "بقي في المنزل"],
        ["Sport treiben / wandern", "hat Sport getrieben / ist gewandert", "haben / sein", "مارس الرياضة / مشى في الجبال"]
      ]
    },
    {
      type: "rule",
      content: "القاعدة الذهبية في سرد أحداث العطلة (Perfekt أم Präteritum؟):<br>• نستخدم **Perfekt** مع الأغلبية الساحقة من أفعال الأنشطة اليومية: *Wir haben gekocht, ich habe Musik gehört, wir sind gewandert.*<br>• نستخدم **Präteritum** بشكل حصري تقريباً مع فعلين رئيسيين لأنهما الأكثر سلاسة وطبيعية في المحادثة الشفهية:<br>1. **sein** ← نقول دائماً: *Ich war zu Hause / Wir waren im Park* (بدلاً من bin gewesen).<br>2. **haben** ← نقول دائماً: *Ich hatte viel Spaß / Wir hatten schönes Wetter* (بدلاً من habe gehabt)."
    },
    {
      type: "text",
      content: "الظروف الزمنية وحروف الجر الخاصة بنهاية الأسبوع:"
    },
    {
      type: "table",
      headers: ["التعبير الزمني", "المعنى بالعربية", "مثال في سياق جملة", "ملاحظة قواعدية"],
      rows: [
        ["am Wochenende", "في عطلة نهاية الأسبوع", "Was machst du **am Wochenende**?", "حرف الجر am مع das Wochenende"],
        ["letztes Wochenende", "عطلة نهاية الأسبوع الماضية", "**Letztes Wochenende** war ich krank.", "Akkusativ زمني بدون حرف جر"],
        ["nächstes Wochenende", "عطلة نهاية الأسبوع القادمة", "**Nächstes Wochenende** fahre ich weg.", "Akkusativ زمني بدون حرف جر"],
        ["freitags / samstags", "كل جمعة / كل سبت بانتظام", "**Freitags** gehe ich zum Sport.", "ظرف زمني ينتهي بـ -s بحرف صغير"],
        ["von Samstag bis Sonntag", "من السبت إلى الأحد", "Wir waren **von Samstag bis Sonntag** in Wien.", "تحديد فترة البداية والنهاية"]
      ]
    },
    {
      type: "rule",
      content: "كيف تقيّم عطلة نهاية الأسبوع وتبدي رأيك؟<br>• *Das Wochenende war toll / wunderschön / sehr entspannend.* (كان رائعاً / مريحاً جداً).<br>• *Wir hatten wirklich viel Spaß!* (استمتعنا ومرحنا كثيراً).<br>• *Es war leider ziemlich anstrengend / langweilig.* (للأسف كان مرهقاً / مملاً)."
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Was hast du am **Wochenende** Schönes gemacht?",
      ar: "ماذا فعلت من أشياء جميلة في عطلة نهاية الأسبوع؟",
      audio: true,
      note: "السؤال الكلاسيكي الشائع في بداية الأسبوع"
    },
    {
      de: "Am Samstag **waren** wir im Kino und haben einen tollen Film gesehen.",
      ar: "يوم السبت كنا في السينما وشاهدنا فيلماً رائعاً.",
      audio: true,
      note: "نستخدم waren (Präteritum) مع sein في الكلام اليومي"
    },
    {
      de: "Am Sonntag **sind** wir im Schlosspark spazieren gegangen.",
      ar: "يوم الأحد تنزهنا مشياً في حديقة القصر.",
      audio: true,
      note: "فعل spazieren gehen يدل على حركة ويأخذ sein"
    },
    {
      de: "Wir **haben** am See mit Freunden lecker gegrillt.",
      ar: "قمنا بالشواء اللذيذ عند البحيرة مع الأصدقاء.",
      audio: true,
      note: "grillen يأخذ الفعل المساعد haben: hat gegrillt"
    },
    {
      de: "Letztes Wochenende **hatte** ich leider keine freie Zeit.",
      ar: "في عطلة نهاية الأسبوع الماضية للأسف لم يكن لدي أي وقت فراغ.",
      audio: true,
      note: "hatte (ماضي haben) يستخدم تلقائياً بدلاً من habe gehabt"
    },
    {
      de: "Ich bin den ganzen Sonntag zu Hause **geblieben** und habe mich ausgeruht.",
      ar: "بقيت طوال يوم الأحد في المنزل وأخذت قسطاً من الراحة.",
      audio: true,
      note: "bleiben يدل على بقاء ويأخذ sein: ist geblieben"
    },
    {
      de: "**Samstags** schlafe ich immer bis zehn Uhr aus.",
      ar: "كل يوم سبت أشبع نوماً حتى الساعة العاشرة صباحاً.",
      audio: true,
      note: "samstags ظرف زمني يعني كل يوم سبت بانتظام"
    },
    {
      de: "Das Wochenende war spitze, wir **hatten** unglaublich viel Spaß!",
      ar: "كانت عطلة نهاية الأسبوع قمة في الروعة، استمتعنا بشكل لا يصدق!",
      audio: true,
      note: "wir hatten viel Spaß = استمتعنا كثيراً"
    },
    {
      de: "**Von Samstag bis Sonntag** haben wir einen Ausflug in die Berge gemacht.",
      ar: "من السبت إلى الأحد قمنا برحلة نزهة إلى الجبال.",
      audio: true,
      note: "von ... bis ... لتحديد فترة العطلة"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "احذر من خلط الفعل المساعد في الماضي: أفعال الحركة والانتقال مثل *gehen, fahren, wandern* وفعل البقاء *bleiben* تأخذ دائماً الفعل المساعد **sein** في الماضي (مثل: *Ich **bin** zu Hause geblieben* وليس *Ich habe geblieben ❌*).",
    "استخدم war و hatte بدلاً من التركيبات الثقيلة: في المحادثة الشفهية لا تقل: *Ich bin im Kino gewesen* أو *Ich habe viel Spaß gehabt*؛ لأنها ثقيلة جداً وغير طبيعية للأذن الألمانية. قل ببساطة: *Ich **war** im Kino* و *Wir **hatten** viel Spaß*.",
    "الفرق بين am Samstag و samstags: إذا قلت **am Samstag** فأنت تقصد يوم سبت محدد وقادم أو ماضٍ. أما إذا أضفت حرف s الصغير **samstags** فإنه يصبح ظرفاً متكرراً بمعنى «كل يوم سبت كعادة دائمة»، ويُكتب دائماً بحرف صغير (kleingeschrieben)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "السؤال الأساسي: »Was hast du am Wochenende gemacht?«.",
    "في السرد نستخدم Perfekt مع معظم الأنشطة، و Präteritum مع (war, hatte).",
    "أفعال الحركة والبقاء تأخذ sein: ist gegangen, ist gefahren, ist geblieben.",
    "تعبيرات الوقت: am Wochenende, letztes Wochenende, von Samstag bis Sonntag.",
    "إضافة حرف s لأيام الأسبوع (sonntags) تعني التكرار الدوري الدائم."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "das Wochenende", plural: "die Wochenenden", ar: "عطلة نهاية الأسبوع", article: "das", example: "Schönes Wochenende!" },
    { de: "der Ausflug", plural: "die Ausflüge", ar: "الرحلة القصيرة / النزهة", article: "der", example: "Wir haben einen Ausflug gemacht." },
    { de: "die Freizeit", plural: "-", ar: "وقت الفراغ", article: "die", example: "In meiner Freizeit lese ich gern." },
    { de: "sich ausruhen", plural: "ruht sich aus, hat sich ausgeruht", ar: "يستريح / يسترخي", article: "", example: "Ich muss mich am Wochenende ausruhen." },
    { de: "spazieren gehen", plural: "geht spazieren, ist spazieren gegangen", ar: "يتنزه مشياً", article: "", example: "Wir sind im Wald spazieren gegangen." },
    { de: "ausschlafen", plural: "schläft aus, hat ausgeschlafen", ar: "يشبع نوماً حتى وقت متأخر", article: "", example: "Am Sonntag kann ich endlich ausschlafen." },
    { de: "grillen", plural: "grillt, hat gegrillt", ar: "يشوي اللحم أو الخضار", article: "", example: "Im Sommer grillen wir oft im Garten." },
    { de: "der Spaß", plural: "-", ar: "المتعة / المرح", article: "der", example: "Wir hatten am Wochenende viel Spaß." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Am Sonntag ___ ich den ganzen Tag zu Hause geblieben.",
      options: ["bin", "habe", "war", "wurde"],
      correct: 0,
      answer: 0,
      explanation: "فعل bleiben (يبقى) يأخذ دائماً الفعل المساعد sein في زمن الماضي التام (Perfekt) ← ich bin geblieben."
    },
    {
      type: "fill-blank",
      question: "Am Samstagabend ___ wir im Theater und haben ein Stück gesehen.",
      answer: "waren",
      accept: ["waren"],
      explanation: "مع فعل sein نستخدم صيغة Präteritum في المحادثة: wir waren (كنا)."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (يوم الأحد قمنا بالشواء عند البحيرة)",
      words: ["Am", "Sonntag", "haben", "wir", "am", "See", "gegrillt", "."],
      correct: "Am Sonntag haben wir am See gegrillt .",
      explanation: "الظرف الزمني (Am Sonntag) + الفعل المساعد ثانياً (haben) + الفاعل (wir) + المكان (am See) + اسم المفعول (gegrillt)."
    },
    {
      type: "match",
      question: "طابق كل نشاط مع صيغة الماضي المناسبة له:",
      pairs: [
        { left: "Freunde treffen", right: "hat Freunde getroffen" },
        { left: "ins Kino gehen", right: "ist ins Kino gegangen" },
        { left: "einen Kuchen backen", right: "hat einen Kuchen gebacken" },
        { left: "zu Hause bleiben", right: "ist zu Hause geblieben" }
      ],
      explanation: "أفعال الحركة والبقاء تأخذ sein (ist gegangen, ist geblieben)، بينما الأنشطة العادية والمتعدية تأخذ haben (hat getroffen, hat gebacken)."
    },
    {
      type: "multiple-choice",
      question: "Was hast du ___ Wochenende gemacht?",
      options: ["am", "im", "um", "an"],
      correct: 0,
      answer: 0,
      explanation: "مع كلمة Wochenende نستخدم حرف الجر am (am Wochenende)."
    },
    {
      type: "error-correction",
      question: "صحح الترتيب: (Gestern ich habe meine Freunde getroffen.)",
      sentence: "Gestern ich habe meine Freunde getroffen.",
      corrected: "Gestern habe ich meine Freunde getroffen.",
      explanation: "عند بدء الجملة بظرف زمني (Gestern)، يجب أن يأتي الفعل المساعد فوراً في المركز الثاني (habe ich)."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (نحن استمتعنا كثيراً في عطلة نهاية الأسبوع.)",
      from: "نحن استمتعنا كثيراً في عطلة نهاية الأسبوع.",
      answer: "Wir hatten viel Spaß am Wochenende.",
      accept: [
        "Wir hatten viel Spaß am Wochenende.",
        "Wir hatten am Wochenende viel Spaß.",
        "Wir hatten viel Spaß am Wochenende",
        "Wir hatten am Wochenende viel Spaß",
        "Wir haben viel Spaß am Wochenende gehabt."
      ],
      explanation: "التعبير الأكثر طبيعية هو: Wir hatten viel Spaß am Wochenende."
    },
    {
      type: "fill-blank",
      question: "Mein Bruder spielt ___ immer Fußball mit seinen Freunden. (كل يوم سبت بانتظام)",
      answer: "samstags",
      accept: ["samstags"],
      explanation: "للتعبير عن التكرار المنتظم في أيام الأسبوع نضع s في نهاية اليوم ونكتبه بحرف صغير: samstags."
    },
    {
      type: "multiple-choice",
      question: "Wir haben uns am Samstagnachmittag im Café ___ . (اسم المفعول من treffen)",
      options: ["getroffen", "getrefft", "getrofft", "treffen"],
      correct: 0,
      answer: 0,
      explanation: "اسم المفعول (Partizip II) للفعل الشاذ treffen هو getroffen."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich bin am Sonntag einen leckeren Kuchen gebacken.)",
      sentence: "Ich bin am Sonntag einen leckeren Kuchen gebacken.",
      corrected: "Ich habe am Sonntag einen leckeren Kuchen gebacken.",
      explanation: "فعل backen (يخبز) فعل متعدٍ لمفعول به ويأخذ الفعل المساعد haben وليس sein."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "ما هو الفعل المساعد الصحيح: »Wir ___ am Sonntag in die Berge gefahren.«؟",
      options: ["sind", "haben", "waren"],
      correct: 0,
      answer: 0,
      explanation: "فعل fahren يدل على حركة وانتقال من مكان لآخر، فيأخذ دائماً الفعل المساعد sein (sind)."
    },
    {
      type: "multiple-choice",
      question: "ما هي الطريقة الأكثر طبيعية وشيوعاً في المحادثة للقول: «كنت مريضاً في نهاية الأسبوع»؟",
      options: [
        "Ich war am Wochenende krank.",
        "Ich bin am Wochenende krank gewesen.",
        "Ich hatte am Wochenende krank."
      ],
      correct: 0,
      answer: 0,
      explanation: "في لغة المحادثة اليومية يُستخدم Präteritum لفعل sein دائماً: Ich war krank."
    },
    {
      type: "multiple-choice",
      question: "ما المعنى الدقيق لكلمة »sonntags« بحرف صغير ونهاية s؟",
      options: [
        "كل يوم أحد بانتظام كعادة متكررة",
        "يوم الأحد القادم فقط",
        "يوم الأحد الماضي فقط"
      ],
      correct: 0,
      answer: 0,
      explanation: "إضافة اللاحقة -s لليوم تحوله إلى ظرف زمني يدل على التكرار والعادة الدائمة."
    },
    {
      type: "multiple-choice",
      question: "اختر التصريف الصحيح: »Was ___ ihr am Wochenende gemacht?«",
      options: ["habt", "seid", "haben"],
      correct: 0,
      answer: 0,
      explanation: "مع الضمير ihr يكون تصريف haben هو habt."
    },
    {
      type: "multiple-choice",
      question: "ما هو اسم المفعول الصحيح للنشاط »spazieren gehen«؟",
      options: [
        "spazieren gegangen",
        "gespaziert gegangen",
        "spazieren gegeht"
      ],
      correct: 0,
      answer: 0,
      explanation: "Partizip II هو spazieren gegangen (ويأخذ sein: ist spazieren gegangen)."
    }
  ]
};
window.lessons = window.LESSONS;
