// data/lessons/a2-1/05-praeteritum.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-05"] = {
  id: "a2-1-05",
  level: "a2-1",
  order: 5,
  slug: "praeteritum",
  title: {
    de: "Das Präteritum (Überblick)",
    ar: "الماضي البسيط: نظرة شاملة واستخداماته"
  },
  tags: ["grammatik", "verben", "praeteritum", "zeitformen", "a2"],

  // 1. الهدف
  goal: "ستتعرف في هذا الدرس على زمن الماضي البسيط (Präteritum)، والفرق الجوهري بينه وبين الماضي التام (Perfekt)، ومتى يجب عليك استخدامه حتى في الحديث الشفهي اليومي (مع sein و haben والأفعال الناقصة Modalverben).",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية زمنان أساسيان للماضي: **Perfekt** (الماضي التام) و **Präteritum** (الماضي البسيط). كلاهما يعبر عن حدث وقع في الماضي وانتهى، ولكن الاختلاف الجوهري بينهما يكمن في **سياق الاستخدام وطريقة التركيب**:"
    },
    {
      type: "table",
      headers: ["المقارنة", "الماضي التام (Perfekt)", "الماضي البسيط (Präteritum)"],
      rows: [
        ["التركيب النحوي", "فعل مساعد (haben/sein) + اسم مفعول (Partizip II)<br>مثال: *Ich habe gelernt.*", "فعل واحد مصرّف مباشرة في الماضي<br>مثال: *Ich lernte.*"],
        ["سياق الاستخدام", "المحادثات الشفهية اليومية، الرسائل الشخصية مع الأصدقاء، والدردشة.", "اللغة المكتوبة، الروايات والقصص، نشرات الأخبار، الصحف والمقالات الرسمية."],
        ["مثال توضيحي", "*Gestern habe ich einen Film gesehen.*", "*Gestern sah ich einen Film.* (أسلوب كتابي/صحفي)"]
      ]
    },
    {
      type: "rule",
      content: "القاعدة الذهبية الاستثنائية: أفعال يجب استخدام Präteritum معها حتى في الحديث الشفهي اليومي!<br>على الرغم من أن Perfekt هو لغة الشارع والمحادثة، إلا أن هناك أفعالاً يفضل الألمان دائماً استخدام **Präteritum** معها حتى في الكلام الشفهي لأن صيغة Perfekt منها ثقيلة وغير شائعة:<br>1. الفعل المساعد **sein** (يكون) ← نقول دائماً: *ich war* (بدلاً من *ich bin gewesen*).<br>2. الفعل المساعد **haben** (يملك) ← نقول دائماً: *ich hatte* (بدلاً من *ich habe gehabt*).<br>3. الأفعال الناقصة (**Modalverben** مثل: können, müssen, wollen, dürfen) ← نقول: *ich konnte, ich musste...* بدلاً من تركيب Perfekt المعقد.<br>4. التعبير الشهير **Es gab** (كان يوجد / كان هناك) ← بدلاً من *Es hat gegeben*."
    },
    {
      type: "text",
      content: "كيف يتشكل زمن الماضي البسيط (Präteritum) بشكل عام؟"
    },
    {
      type: "table",
      headers: ["نوع الفعل", "طريقة التشكيل في Präteritum", "أمثلة شائعة"],
      rows: [
        ["أفعال منتظمة (Regelmäßig)", "جذر الفعل + اللاحقة (-te, -test, -te, -ten, -tet, -ten)", "lernen → lern**te**<br>machen → mach**te**<br>kaufen → kauf**te**"],
        ["أفعال غير منتظمة (Unregelmäßig)", "تغير الحرف الصوتي في الجذر (Ablaut) وبدون نهاية مع ich و er", "gehen → **ging**<br>kommen → **kam**<br>sehen → **sah**"],
        ["أفعال مساعدة وناقصة", "حفظ تصريفاتها الخاصة", "sein → **war**<br>haben → **hatte**<br>können → **konnte**"]
      ]
    },
    {
      type: "rule",
      content: "ملاحظة هامة جداً لجميع أفعال Präteritum: ضمير المتكلم المفرد (**ich**) وضمير الغائب المفرد (**er / sie / es / man**) يكون لهما **نفس التصريف تماماً وبدون أي نهاية إضافية**! (Ich war = Er war | Ich lernte = Sie lernte)."
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Gestern **war** ich den ganzen Tag zu Hause.",
      ar: "أمس كنتُ طوال اليوم في المنزل.",
      highlight: "war",
      audio: true,
      note: "نستخدم war (ماضي sein) دائماً في المحادثة الشفهية"
    },
    {
      de: "Ich **hatte** gestern leider keine Zeit.",
      ar: "للأسف لم يكن لدي وقت بالأمس.",
      highlight: "hatte",
      audio: true,
      note: "نستخدم hatte (ماضي haben) في المحادثة الشفهية"
    },
    {
      de: "Er **musste** gestern bis 20 Uhr arbeiten.",
      ar: "كان عليه أن يعمل بالأمس حتى الساعة الثامنة مساءً.",
      highlight: "musste",
      audio: true,
      note: "الأفعال الناقصة Modalverben تُستخدم بصيغة Präteritum في الماضي"
    },
    {
      de: "Wir **konnten** ihn leider nicht anrufen.",
      ar: "لم نتمكن للأسف من الاتصال به.",
      highlight: "konnten",
      audio: true,
      note: "konnten هو ماضي können مع الفاعل wir"
    },
    {
      de: "In der Zeitung stand: »Der Minister **besuchte** Berlin«.",
      ar: "كُتب في الصحيفة: «الوزير زار برلين».",
      highlight: "besuchte",
      audio: true,
      note: "أسلوب الصحافة والأخبار يستخدم Präteritum: besuchte"
    },
    {
      de: "Es **gab** gestern einen schweren Unfall auf der Autobahn.",
      ar: "كان هناك حادث خطير على الطريق السريع بالأمس.",
      highlight: "gab",
      audio: true,
      note: "es gab = كان يوجد / وُجد (ماضي es gibt)"
    },
    {
      de: "Früher **wohnte** meine Familie in Damaskus.",
      ar: "سابقاً سكنت عائلتي في دمشق.",
      highlight: "wohnte",
      audio: true,
      note: "wohnte فعل منتظم في Präteritum مع الغائب المفرد"
    },
    {
      de: "Ich **wollte** dich eigentlich überraschen.",
      ar: "أردتُ في الواقع أن أفاجئك.",
      highlight: "wollte",
      audio: true,
      note: "wollte هو ماضي wollen (يريد)"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في اللغة العربية لدينا زمن ماضٍ واحد (أكلَ، سافرَ، كانَ). أما في الألمانية فيجب أن تدرك متى تتكلم شفهياً (استخدم Perfekt، ولكن مع war و hatte و musste) ومتى تكتب نصاً أدبياً أو تقريراً (استخدم Präteritum).",
    "لا تقل في المحادثة: *Ich habe gestern keine Zeit gehabt*! على الرغم من صحتها نحوياً، إلا أنها تبدو ركيكة وغير طبيعية للأذن الألمانية. الألمان يقولون دائماً: *Ich **hatte** keine Zeit*.",
    "في جنوب ألمانيا والنمسا وسويسرا، يميل الناس في اللهجة المحلية إلى استخدام Perfekt دائماً حتى مع الأفعال الأخرى، بينما في الشمال والوسط يظهر Präteritum أكثر. ولكن *ich war* و *ich hatte* متفق عليهما في كل مناطق العالم الناطق بالألمانية."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "الماضي التام (Perfekt) = لغة الكلام والمحادثة اليومية (gesprochene Sprache).",
    "الماضي البسيط (Präteritum) = لغة الكتابة والقصص والأخبار الرسمية (Schriftsprache).",
    "استثناء شفهي إلزامي: الأفعال (sein → war) و (haben → hatte) والـ Modalverben تُستخدم بصيغة Präteritum في كل المواقف.",
    "في Präteritum: تصريف ضمير المتكلم (ich) يطابق دائماً تصريف ضمير الغائب المفرد (er / sie / es).",
    "الأفعال المنتظمة تأخذ اللاحقة -te، بينما غير المنتظمة يتغير حرف العلة في جذرها."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "das Präteritum", plural: "kein Plural", ar: "الماضي البسيط", article: "das", example: "Das Präteritum wird oft beim Schreiben benutzt." },
    { de: "die Vergangenheit", plural: "kein Plural", ar: "الماضي (الزمن الماضي)", article: "die", example: "Das passierte in der Vergangenheit." },
    { de: "die Geschichte", plural: "die Geschichten", ar: "القصة / التاريخ", article: "die", example: "Opa erzählte eine schöne Geschichte." },
    { de: "die Nachricht", plural: "die Nachrichten", ar: "الخبر / نشرة الأخبار", article: "die", example: "Ich habe die Nachrichten im Radio gehört." },
    { de: "die Zeitung", plural: "die Zeitungen", ar: "الجريدة / الصحيفة", article: "die", example: "Der Artikel stand in der Zeitung." },
    { de: "das Märchen", plural: "die Märchen", ar: "الحكاية الخيالية / الأسطورة", article: "das", example: "Es war einmal vor langer Zeit..." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Wo ___ du gestern Abend? (sein im Präteritum)",
      sentence: "Wo ___ du gestern Abend?",
      options: ["warst", "bist", "hattest", "war"],
      correct: 0,
      answer: 0,
      explanation: "مع الفاعل du يكون تصريف فعل sein في Präteritum هو: warst."
    },
    {
      type: "fill-blank",
      question: "Ich ___ gestern leider keine Zeit. (haben im Präteritum)",
      sentence: "Ich ___ gestern leider keine Zeit.",
      answer: "hatte",
      accept: ["hatte"],
      explanation: "تصريف haben مع الضمير ich في Präteritum هو hatte."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (أمس كنتُ مريضاً في المنزل)",
      words: ["ich", "war", "Gestern", "krank", "Hause", "zu", "."],
      correct: "Gestern war ich krank zu Hause .",
      answer: "Gestern war ich krank zu Hause .",
      accept: ["Gestern war ich krank zu Hause .", "Gestern war ich krank zu Hause", "Gestern war ich zu Hause krank ."],
      explanation: "الظرف (Gestern) + الفعل في المركز الثاني (war) + الفاعل (ich) + باقي الجملة."
    },
    {
      type: "multiple-choice",
      question: "في أي سياق يُستخدم زمن Präteritum بشكل أساسي؟",
      sentence: "في أي سياق يُستخدم زمن Präteritum بشكل أساسي؟",
      options: [
        "في القصص والروايات والأخبار واللغة المكتوبة",
        "في المحادثة الشفهية بين الأصدقاء فقط",
        "للتعبير عن المستقبل فقط",
        "للأوامر والطلبات فقط"
      ],
      correct: 0,
      answer: 0,
      explanation: "Präteritum هو زمن السرد الكتابي والتقارير الصحفية والأدب، بينما Perfekt هو لغة المحادثة اليومية."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ لتكون الجملة طبيعية بالألمانية: (Gestern habe ich keine Zeit gehabt.)",
      sentence: "Gestern habe ich keine Zeit gehabt.",
      text: "Gestern habe ich keine Zeit gehabt.",
      corrected: "Gestern hatte ich keine Zeit.",
      answer: "Gestern hatte ich keine Zeit.",
      accept: ["Gestern hatte ich keine Zeit.", "Gestern hatte ich keine Zeit", "Ich hatte gestern keine Zeit."],
      explanation: "الألمان يفضلون دائماً صيغة Präteritum لفعل haben في الحديث اليومي: hatte بدلاً من habe gehabt."
    },
    {
      type: "match",
      question: "طابق كل فعل مع صيغته المقابلة في Präteritum مع ضمير ich:",
      pairs: [
        { left: "sein (يكون)", right: "ich war" },
        { left: "haben (يملك)", right: "ich hatte" },
        { left: "können (يستطيع)", right: "ich konnte" },
        { left: "müssen (يجب)", right: "ich musste" }
      ],
      explanation: "هذه الأفعال تُستخدم دائماً بصيغة Präteritum حتى في المحادثات اليومية الشفهية."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (كان هناك حادث كبير.)",
      text: "كان هناك حادث كبير.",
      from: "كان هناك حادث كبير.",
      answer: "Es gab einen großen Unfall.",
      accept: ["Es gab einen großen Unfall.", "Es gab einen großen Unfall"],
      explanation: "التعبير عن الماضي من es gibt هو es gab (في زمن Präteritum)."
    },
    {
      type: "fill-blank",
      question: "Er ___ gestern nicht zur Schule gehen, weil er krank war. (können im Präteritum)",
      sentence: "Er ___ gestern nicht zur Schule gehen, weil er krank war.",
      answer: "konnte",
      accept: ["konnte"],
      explanation: "ماضي الفعل الناقص können مع er هو konnte."
    },
    {
      type: "multiple-choice",
      question: "ما وجه الشبه الدائم في تصريف Präteritum لجميع الأفعال؟",
      sentence: "ما وجه الشبه الدائم في تصريف Präteritum لجميع الأفعال؟",
      options: [
        "تصريف ich يطابق دائماً تصريف er / sie / es",
        "جميع الأفعال تنتهي دائماً بـ -en",
        "تصريف du يطابق دائماً تصريف wir",
        "لا يوجد أي تشابه"
      ],
      correct: 0,
      answer: 0,
      explanation: "في زمن Präteritum يتطابق تصريف المتكلم (ich) مع الغائب المفرد (er/sie/es) دائماً وبدون استثناء."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Letztes Jahr ich war in Deutschland.)",
      sentence: "Letztes Jahr ich war in Deutschland.",
      text: "Letztes Jahr ich war in Deutschland.",
      corrected: "Letztes Jahr war ich in Deutschland.",
      answer: "Letztes Jahr war ich in Deutschland.",
      accept: ["Letztes Jahr war ich in Deutschland.", "Letztes Jahr war ich in Deutschland"],
      explanation: "الفعل المصرّف (war) يجب أن يحتل دائماً الموقع الثاني في الجملة الرئيسية (Satzklammer / Verb an Position 2)."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Warum ___ du gestern nicht beim Kurs?",
      options: ["warst", "hast", "bist", "waren"],
      correct: 0,
      answer: 0,
      explanation: "الفاعل du يتطلب تصريف فعل sein في الماضي: warst."
    },
    {
      type: "multiple-choice",
      question: "Wir ___ gestern sehr viel Glück!",
      options: ["hatten", "haben", "waren", "hattet"],
      correct: 0,
      answer: 0,
      explanation: "مع الفاعل wir يكون ماضي فعل haben هو hatten."
    },
    {
      type: "multiple-choice",
      question: "Der Zug hatte Verspätung, deshalb ___ ich ein Taxi nehmen. (müssen)",
      options: ["musste", "musstest", "müsste", "gemusst"],
      correct: 0,
      answer: 0,
      explanation: "ماضي الفعل الناقص müssen مع الضمير ich هو musste."
    },
    {
      type: "multiple-choice",
      question: "Früher ___ es hier keinen Supermarkt.",
      options: ["gab", "gibt", "gegeben", "hat"],
      correct: 0,
      answer: 0,
      explanation: "في الماضي نستخدم es gab بمعنى (كان يوجد)."
    },
    {
      type: "multiple-choice",
      question: "ما هو الماضي الطبيعي والأكثر استخداماً في المحادثة لجملة: »Ich bin krank gewesen«؟",
      options: ["Ich war krank.", "Ich bin krank.", "Ich wurde krank.", "Ich hatte krank."],
      correct: 0,
      answer: 0,
      explanation: "الألمان يفضلون دائماً صيغة Präteritum: Ich war krank."
    }
  ]
};
window.lessons = window.LESSONS;
