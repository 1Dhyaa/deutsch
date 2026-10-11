// data/lessons/a2-2/04-futur-1.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-2-04"] = {
  id: "a2-2-04",
  level: "a2-2",
  order: 4,
  slug: "futur-1",
  title: {
    de: "Das Futur I",
    ar: "زمن المستقبل البسيط (Futur I: werden + Infinitiv)"
  },
  tags: ["grammatik", "verben", "futur", "zeitformen", "werden", "a2"],

  // 1. الهدف من الدرس
  goal: "ستتعلم في هذا الدرس كيفية صياغة واستخدام زمن المستقبل البسيط (Futur I) باستخدام الفعل المساعد werden مع مصدر الفعل في نهاية الجملة، ومتى يُستخدم للتعبير عن الوعود والتوقعات والخطط، ومتى يفضل الألمان استخدام المضارع مع ظرف الزمان في الحياة اليومية.",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "يُستخدم زمن المستقبل البسيط (**Das Futur I**) في اللغة الألمانية للتعبير عن أحداث ستقع في المستقبل، مثل: النوايا، الخطط المؤكدة، الوعود، أو التنبؤات والافتراضات."
    },
    {
      type: "rule",
      content: "قاعدة التركيب النحوي لزمن المستقبل (Satzklammer):<br>يتكون Futur I من ركنين أساسيين يشكلان قوس الجملة النحوي:<br>1. الفعل المساعد **werden** مصرّفاً في الموقع الثاني في الجملة (**Position 2**).<br>2. الفعل الأساسي بصيغة المصدر (**Infinitiv**) في **نهاية الجملة تماماً**.<br>• *Ich **werde** morgen fleißig **lernen**.*"
    },
    {
      type: "text",
      content: "تصريف الفعل المساعد **werden** في زمن المضارع (Präsens) مع جميع الضمائر:"
    },
    {
      type: "table",
      headers: ["الضمير", "تصريف werden", "المصدر في النهاية", "المعنى بالعربية"],
      rows: [
        ["ich", "**werde**", "reisen", "سوف أسافر / سأسافر"],
        ["du", "**wirst** (تغير الحرف)", "reisen", "سوف تسافر"],
        ["er / sie / es / man", "**wird** (تغير الحرف)", "reisen", "سوف يسافر / تسافر"],
        ["wir", "**werden**", "reisen", "سوف نسافر"],
        ["ihr", "**werdet**", "reisen", "سوف تسافرون"],
        ["sie / Sie", "**werden**", "reisen", "سوف يسافرون / سوف تسافر حضرتك"]
      ]
    },
    {
      type: "text",
      content: "متى نستخدم زمن المستقبل Futur I تحديداً؟"
    },
    {
      type: "table",
      headers: ["الاستخدام", "المعنى والهدف", "مثال ألماني"],
      rows: [
        ["الخطط والنوايا (Pläne & Absichten)", "قرارات مؤكدة للمستقبل البعيد أو القريب", "Wir **werden** im Sommer nach Deutschland **fliegen**."],
        ["الوعود والعهود (Versprechen)", "إعطاء عهد جازم لشخص ما", "Ich **werde** dir immer **helfen**."],
        ["التنبؤات والتوقعات (Prognosen)", "توقعات الطقس أو المستقبل", "Morgen **wird** es den ganzen Tag **regnen**."],
        ["الافتراض والترجيح (Vermutung)", "تخمين حدث في الحاضر أو المستقبل مع (wohl/sicher)", "Er ist noch nicht da. Er **wird** wohl im Stau **stehen**."]
      ]
    },
    {
      type: "rule",
      content: "ملاحظة جوهرية في الحياة اليومية: **المضارع + ظرف الزمان** بدلاً من Futur I!<br>في المحادثات اليومية الشفهية في ألمانيا، نادراً ما يستخدم الناس صيغة (werden + Infinitiv) إذا كانت هناك كلمة تدل على الزمن في الجملة (مثل: morgen, nächste Woche, bald, am Sonntag). بدلاً من ذلك، يستخدمون ببساطة زمن المضارع (**Präsens**):<br>• شفهياً يقولون: *Morgen **fliege** ich nach Berlin.* (أسهل وأكثر طبيعية)<br>• بينما صيغة: *Morgen **werde** ich nach Berlin **fliegen**.* تُستخدم للتوكيد والعهد واللغة الرسمية."
    },
    {
      type: "text",
      content: "تنبيه هام: فرّق بين الاستخدامات الثلاثة لفعل **werden**:"
    },
    {
      type: "table",
      headers: ["الوظيفة", "التركيب", "المعنى", "مثال"],
      rows: [
        ["فعل أساسي (Vollverb)", "werden + اسم/صفة", "يصبح / يصير", "Mein Sohn **wird** Arzt. / Es **wird** kalt."],
        ["فعل مساعد للمستقبل (Futur I)", "werden + Infinitiv", "سوف + يفعل", "Ich **werde** morgen **arbeiten**."],
        ["فعل مساعد للمبني للمجهول (Passiv)", "werden + Partizip II", "يُفعل الشيء", "Das Auto **wird repariert**."]
      ]
    }
  ],

  // 3. الأمثلة (8+ أمثلة نموذجية مع الترجمة والصوت وتوضيح القاعدة)
  examples: [
    {
      de: "Ich **werde** dich nie **vergessen**.",
      ar: "لن أنساك أبداً (سوف لن أنساك أبداً).",
      highlight: "werde ... vergessen",
      audio: true,
      note: "وعد جازم: werden مصرّف مع ich والمصدر vergessen في نهاية الجملة"
    },
    {
      de: "Morgen **wird** es in ganz Deutschland **regnen**.",
      ar: "غداً ستمطر في كافة أنحاء ألمانيا.",
      highlight: "wird ... regnen",
      audio: true,
      note: "تنبؤ بالأحوال الجوية: wird مع ضمير الغائب es والمصدر regnen في النهاية"
    },
    {
      de: "Wir **werden** am Wochenende eine Prüfung **schreiben**.",
      ar: "سوف نكتب امتحاناً في نهاية الأسبوع.",
      highlight: "werden ... schreiben",
      audio: true,
      note: "خطة مستقبلية: werden مع wir والمصدر schreiben في أقصى اليمين"
    },
    {
      de: "Was **wirst** du nach dem Sprachkurs **machen**?",
      ar: "ماذا ستفعل بعد دورة اللغة؟",
      highlight: "wirst ... machen",
      audio: true,
      note: "سؤال في المستقبل: wirst مع الفاعل du والمصدر machen في النهاية"
    },
    {
      de: "Alles **wird** wieder gut **sein**.",
      ar: "كل شيء سيكون على ما يرام مجدداً.",
      highlight: "wird ... sein",
      audio: true,
      note: "طَمأَنة وتوقع للمستقبل: wird مع الفاعل alles والمصدر sein في النهاية"
    },
    {
      de: "Er **wird** dir bestimmt die Wahrheit **sagen**.",
      ar: "هو سيقول لك الحقيقة بكل تأكيد.",
      highlight: "wird ... sagen",
      audio: true,
      note: "توقع وترجيح: wird + sagen"
    },
    {
      de: "Sie **werden** bald ein neues Haus **kaufen**.",
      ar: "هم سيشترون بيتاً جديداً قريباً.",
      highlight: "werden ... kaufen",
      audio: true,
      note: "نية مستقبلية: werden مع sie (الجمع) والمصدر kaufen"
    },
    {
      de: "Morgen **fliege** ich nach Berlin.",
      ar: "غداً سأسافر بالطائرة إلى برلين.",
      highlight: "fliege",
      audio: true,
      note: "الأسلوب الشفهي اليومي المفضل: استخدام Präsens مع ظرف زمان (morgen)"
    },
    {
      de: "Ihr **werdet** die Grammatik schnell **verstehen**.",
      ar: "أنتم ستفهمون القواعد بسرعة.",
      highlight: "werdet ... verstehen",
      audio: true,
      note: "werdet مع ضمير المخاطب الجمع ihr والمصدر verstehen"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "حرف الاستقبال «سـ» أو كلمة «سوف»: الفعل werden في زمن Futur I يطابق تماماً في معناه «سوف» أو «سـ» في العربية، ولكن الاختلاف الجوهري هو في مكان الفعل الأصلي؛ فبينما نقول بالعربية (سوف **أسافر** غداً إلى برلين)، يضع الألمان الفعل الأصلي في **نهاية الجملة تماماً** في صيغة المصدر (Ich werde morgen nach Berlin **reisen**).",
    "لا تفرط في استخدام Futur I في الكلام اليومي: في الشارع الألماني والمحادثات اليومية، إذا كنت تتحدث عن خطة قريبة وتحتوي الجملة على ظرف زمان (مثل morgen أو nächste Woche)، استخدم المضارع العادي: *Morgen lerne ich*، ولا تقل *Morgen werde ich lernen* إلا إذا أردت التأكيد والتشديد على عزمك وإصرارك.",
    "احذر من تصريف werden مع du و er: يتغير الحرف الصوتي من e إلى i في هذين الضميرين تحديداً: *du wirst* و *er/sie/es wird*، تماماً كما يتغير في أفعال مثل sprechen (du sprichst)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "صياغة Futur I: تصريف werden في المركز الثاني + مصدر الفعل (Infinitiv) في نهاية الجملة.",
    "تصريف werden: ich werde, du wirst, er wird, wir werden, ihr werdet, sie/Sie werden.",
    "الاستخدامات الأساسية: الوعود (Versprechen)، النوايا الجازمة (Pläne)، التنبؤات (Prognosen)، والافتراضات (Vermutungen).",
    "في الألمانية اليومية: نستخدم في الغالب Präsens + كلمة زمان للدلالة على المستقبل بدلاً من تركيب werden.",
    "فرّق دائماً بين werden كفعل أساسي (يصبح) وبين werden كفعل مساعد للمستقبل (سوف)."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "die Zukunft", plural: "kein Plural", ar: "المستقبل", article: "die", example: "In der Zukunft möchte ich in Deutschland arbeiten." },
    { de: "der Plan", plural: "die Pläne", ar: "الخطة", article: "der", example: "Was sind deine Pläne für das Wochenende?" },
    { de: "die Absicht", plural: "die Absichten", ar: "النية / القصد", article: "die", example: "Ich habe die Absicht, Deutsch zu lernen." },
    { de: "das Versprechen", plural: "die Versprechen", ar: "الوعد", article: "das", example: "Ein Versprechen muss man halten." },
    { de: "die Vorhersage", plural: "die Vorhersagen", ar: "التنبؤ / النشرة الجوية", article: "die", example: "Die Wettervorhersage verspricht Sonne." },
    { de: "vermuten", plural: "vermutete, hat vermutet", ar: "يخمّن / يفترض", article: "", example: "Ich vermute, dass er krank ist." },
    { de: "planen", plural: "plante, hat geplant", ar: "يخطط", article: "", example: "Wir planen eine große Reise." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich ___ dir morgen bei den Hausaufgaben helfen.",
      options: ["wirst", "werde", "wird", "werden"],
      correct: 1,
      answer: 1,
      explanation: "مع ضمير المتكلم ich يكون تصريف فعل werden هو: werde."
    },
    {
      type: "fill-blank",
      question: "Morgen ___ es in Berlin schneien. (werden)",
      sentence: "Morgen ___ es in Berlin schneien.",
      answer: "wird",
      accept: ["wird"],
      explanation: "مع الضمير المحايد es الخاص بالطقس يكون تصريف werden هو: wird."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين جملة مستقبل صحيحة: (نحن سنسافر غداً إلى ألمانيا)",
      words: ["Wir", "werden", "morgen", "nach", "Deutschland", "fliegen", "."],
      correct: "Wir werden morgen nach Deutschland fliegen .",
      answer: "Wir werden morgen nach Deutschland fliegen .",
      accept: ["Wir werden morgen nach Deutschland fliegen.", "Wir werden morgen nach Deutschland fliegen"],
      explanation: "القاعدة: الفاعل (Wir) + الفعل المساعد werden في المركز الثاني + ظرف الزمان وبقية الجملة + المصدر (fliegen) في نهاية الجملة."
    },
    {
      type: "multiple-choice",
      question: "Was ___ du am Wochenende machen?",
      options: ["wirst", "werdest", "wird", "werden"],
      correct: 0,
      answer: 0,
      explanation: "مع الضمير du يتحول حرف العلة ويصبح التصريف: wirst."
    },
    {
      type: "match",
      question: "طابق بين الضمير والتصريف الصحيح لفعل werden في المستقبل:",
      pairs: [
        { left: "du", right: "wirst" },
        { left: "er / sie / es", right: "wird" },
        { left: "ihr", right: "werdet" },
        { left: "sie / Sie", right: "werden" }
      ],
      explanation: "تصريف werden: du wirst, er wird, ihr werdet, sie/Sie werden."
    },
    {
      type: "fill-blank",
      question: "Ihr ___ die Prüfung bestimmt bestehen. (werden)",
      sentence: "Ihr ___ die Prüfung bestimmt bestehen.",
      answer: "werdet",
      accept: ["werdet"],
      explanation: "مع ضمير المخاطبين ihr يكون التصريف: werdet."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أنا لن أنساك أبداً.) [استخدم werden]",
      from: "أنا لن أنساك أبداً.",
      answer: "Ich werde dich nie vergessen.",
      accept: ["Ich werde dich nie vergessen.", "Ich werde dich nie vergessen", "Ich werde dich niemals vergessen.", "Ich werde dich niemals vergessen"],
      explanation: "في صيغة Futur I: الفاعل (Ich) + الفعل المساعد (werde) + المفعول (dich) + النفي (nie) + المصدر (vergessen)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في موقع الفعل:",
      sentence: "Ich werde lernen morgen für die Prüfung.",
      corrected: "Ich werde morgen für die Prüfung lernen.",
      answer: "Ich werde morgen für die Prüfung lernen.",
      accept: ["Ich werde morgen für die Prüfung lernen.", "Ich werde morgen für die Prüfung lernen"],
      explanation: "في زمن Futur I يجب أن يأتي مصدر الفعل الأساسي (lernen) في نهاية الجملة تماماً (Satzklammer)."
    },
    {
      type: "multiple-choice",
      question: "كيف يعبر الألمان في المحادثة اليومية غالباً عن: «غداً سأسافر إلى هامبورغ»؟",
      options: ["Morgen fahre ich nach Hamburg.", "Morgen werde ich nach Hamburg gefahren.", "Morgen bin ich nach Hamburg gefahren.", "Morgen werde ich nach Hamburg fahren gewesen."],
      correct: 0,
      answer: 0,
      explanation: "في الحديث اليومي يفضل الألمان استخدام المضارع (Präsens) مع ظرف الزمان (morgen) بدلاً من Futur I."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ الإملائي في تصريف الفعل:",
      sentence: "Er werdet morgen seine Oma besuchen.",
      corrected: "Er wird morgen seine Oma besuchen.",
      answer: "Er wird morgen seine Oma besuchen.",
      accept: ["Er wird morgen seine Oma besuchen.", "Er wird morgen seine Oma besuchen"],
      explanation: "مع الضمير er يكون تصريف الفعل المساعد هو: wird (وليس werdet)."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة متعددة الخيارات)
  quiz: [
    {
      type: "multiple-choice",
      question: "Welche Form von »werden« passt zu »du«?",
      options: ["werdest", "wirst", "wird", "werdet"],
      correct: 1,
      answer: 1,
      explanation: "مع الضمير du يكون تصريف werden هو wirst."
    },
    {
      type: "multiple-choice",
      question: "Wo steht das Hauptverb im Futur I?",
      options: ["An Position 1", "An Position 2", "Am Ende des Satzes im Infinitiv", "Direkt nach »werden«"],
      correct: 2,
      answer: 2,
      explanation: "يأتي الفعل الرئيسي في زمن Futur I في نهاية الجملة بصيغة المصدر (Infinitiv am Satzende)."
    },
    {
      type: "multiple-choice",
      question: "Morgen ___ wir ein neues Thema beginnen.",
      options: ["wird", "werdet", "werden", "werde"],
      correct: 2,
      answer: 2,
      explanation: "مع الضمير wir نستخدم صيغة werden."
    },
    {
      type: "multiple-choice",
      question: "ما المعنى الدقيق لجملة: »Es wird bald regnen«؟",
      options: ["لقد أمطرت قريباً", "ستمطر قريباً (تنبؤ)", "تمطر الآن", "قد أمطرت بالأمس"],
      correct: 1,
      answer: 1,
      explanation: "الجملة تعبر عن تنبؤ بالمستقبل القريب: ستمطر قريباً."
    },
    {
      type: "multiple-choice",
      question: "ما وظيفة كلمة »wird« في جملة: »Mein Bruder wird Arzt«؟",
      options: ["فعل مساعد لزمن المستقبل", "فعل مساعد للمبني للمجهول", "فعل أساسي بمعنى يصبح / يصير", "فعل ناقص Modalverb"],
      correct: 2,
      answer: 2,
      explanation: "هنا werden فعل أساسي (Vollverb) بمعنى يصبح (أخي سيصبح طبيباً)."
    }
  ]
};
window.lessons = window.LESSONS;
