// data/lessons/a2-1/20-konnektoren.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-20"] = {
  id: "a2-1-20",
  level: "a2-1",
  order: 20,
  slug: "konnektoren",
  title: {
    de: "Satzverbindungen (deshalb, trotzdem...)",
    ar: "أدوات الربط السببية والتناقضية (deshalb, trotzdem)"
  },
  tags: ["grammatik", "konnektoren", "adverbien", "deshalb", "trotzdem", "satzbau", "inversion", "a2"],

  // 1. الهدف
  goal: "ستتعلم أدوات الربط الظرفية (Konjunktionaladverbien) للنتيجة والسببية (deshalb, deswegen, daher) وللتناقض والمفارقة (trotzdem)، وتطبيق قاعدة انقلاب الفاعل والفعل (Inversion) حيث تحتل هذه الأدوات الموقع الأول (Position 1) ويأتي الفعل المصرّف بعدها مباشرة في الموقع الثاني (Position 2).",

  // 2. الشرح
  explanation: [
    {
      type: "text",
      content: "على عكس روابط ADUSO التي تشغل «الموقع صفر»، فإن الكلمات **deshalb**, **deswegen**, **daher** و **trotzdem** هي ظروف ربط (Konjunktionaladverbien). هذا يعني أنها تحتل **الموقع الأول الفعلي (Position 1)** في الجملة!"
    },
    {
      type: "rule",
      content: "قاعدة الانقلاب الإلزامية (Inversion):\nبما أن الرابط الظرفي يشغل الموقع 1، وقاعدة الجملة الألمانية توجب وضع الفعل المصرّف دائماً في الموقع 2، فإن **الفعل يأتي مباشرة بعد الرابط** ويأتي الفاعل بعد الفعل:\n\n[Position 1: Konnektor] + [Position 2: Verb] + [Position 3: Subjekt] + ...\n\nمثال: Ich habe Kopfschmerzen. **Deshalb nehme** ich eine Tablette. (وليس: Deshalb ich nehme!)"
    },
    {
      type: "text",
      content: "تنقسم هذه الأدوات بحسب المعنى والعلاقة المنطقية بين الجملتين إلى فئتين:"
    },
    {
      type: "table",
      headers: ["أداة الربط", "المعنى بالعربية", "العلاقة المنطقية", "مثال توضيحي وترتيب الكلمات"],
      rows: [
        ["deshalb", "لذلك / لهذا السبب", "نتيجة سببية منطقية (Folge)", "Ich will fit bleiben. **Deshalb mache** ich Sport."],
        ["deswegen", "من أجل ذلك / لذلك", "مرادف تام لـ deshalb (نتيجة)", "Mein Auto ist kaputt. **Deswegen fahre** ich mit dem Bus."],
        ["daher", "لهذا / من هنا", "مرادف رسمي أكثر (نتيجة)", "Es gab Stau. **Daher kam** er zu spät."],
        ["trotzdem", "مع ذلك / بالرغم من ذلك", "تناقض ومفارقة عكس المتوقع (Gegensatz)", "Es regnet in Strömen. **Trotzdem geht** er joggen."]
      ]
    },
    {
      type: "rule",
      content: "الفرق المنطقي بين deshalb و trotzdem:\n• **deshalb** = نتيجة طبيعية متوقعة لما حدث: (أنا مريض ← لذلك بقيت في الفراش: Ich bin krank. Deshalb bleibe ich im Bett).\n• **trotzdem** = تصرف مناقض لغير المتوقع وتحدٍّ للظرف: (أنا مريض ← ورغم ذلك ذهبت للعمل: Ich bin krank. Trotzdem gehe ich zur Arbeit)."
    },
    {
      type: "text",
      content: "يمكن كتابة الجملتين مفصولتين بنقطة (Satz 1. Deshalb Verb Subjekt...)، أو بفاصلة منقوطة، أو بفاصلة عادية عند عطفهما في نفس السياق."
    }
  ],

  // 3. الأمثلة
  examples: [
    {
      de: "Ich habe morgen eine schwere Prüfung. **Deshalb lerne** ich heute den ganzen Tag.",
      ar: "لدي غداً امتحان صعب، لذلك أدرس اليوم طوال اليوم.",
      highlight: "Deshalb lerne",
      audio: true,
      note: "deshalb (موقع 1) + الفعل المصرّف lerne (موقع 2) + الفاعل ich (موقع 3)"
    },
    {
      de: "Er ist sehr müde. **Trotzdem arbeitet** er bis spät in die Nacht.",
      ar: "هو متعب جداً، ومع ذلك يواصل العمل حتى وقت متأخر من الليل.",
      highlight: "Trotzdem arbeitet",
      audio: true,
      note: "trotzdem تعبر عن تناقض (متعب لكنه يعمل)، ويتبعها الفعل مباشرة arbeitet"
    },
    {
      de: "Draußen ist es eiskalt. **Deswegen ziehe** ich eine dicke Winterjacke an.",
      ar: "الجو بالخارج شديد البرودة، لذلك أرتدي سترة شتوية سميكة.",
      highlight: "Deswegen ziehe",
      audio: true,
      note: "deswegen نتيجة طبيعية للبرد، الفعل ziehe يسبق الفاعل ich"
    },
    {
      de: "Es hat stark geregnet. **Trotzdem sind** die Kinder auf den Spielplatz gegangen.",
      ar: "كانت السماء تمطر بغزارة، ورغم ذلك ذهب الأطفال إلى ساحة اللعب.",
      highlight: "Trotzdem sind",
      audio: true,
      note: "trotzdem متبوعة بالفعل المساعد sind في الموقع 2"
    },
    {
      de: "Sie hat monatelang trainiert. **Daher hat** sie den ersten Platz gewonnen.",
      ar: "لقد تدرّبت لشهور، ولهذا السبب أحرزت المركز الأول.",
      highlight: "Daher hat",
      audio: true,
      note: "daher تعبر عن نتيجة مستحقة للتدريب، الفعل hat في المركز 2"
    },
    {
      de: "Ich mag keinen Fisch. **Deshalb bestelle** ich ein leckeres Hähnchen.",
      ar: "أنا لا أحب السمك، ولهذا السبب أطلب دجاجاً لذيذاً.",
      highlight: "Deshalb bestelle",
      audio: true,
      note: "deshalb في المركز 1، الفعل bestelle في المركز 2"
    },
    {
      de: "Das Restaurant ist teuer. **Trotzdem gehen** wir heute Abend dorthin.",
      ar: "المطعم باهظ الثمن، ومع ذلك سنذهب إليه هذا المساء.",
      highlight: "Trotzdem gehen",
      audio: true,
      note: "تناقض ومفارقة مالية: المطعم غالي ورغم ذلك نذهب إليه"
    },
    {
      de: "Er spricht fließend Deutsch. **Deshalb versteht** er die Nachrichten problemlos.",
      ar: "هو يتحدث الألمانية بطلاقة، ولذلك يفهم نشرة الأخبار دون أدنى مشكلة.",
      highlight: "Deshalb versteht",
      audio: true,
      note: "نتيجة منطقية ومباشرة للطلاقة اللغوية"
    },
    {
      de: "Die Wohnung liegt an einer lauten Straße. **Trotzdem gefällt** sie mir sehr gut.",
      ar: "الشقة تقع على شارع صاخب، ومع ذلك فهي تعجبني كثيراً.",
      highlight: "Trotzdem gefällt",
      audio: true,
      note: "trotzdem تعكس الإعجاب رغم وجود عيب الضجيج"
    },
    {
      de: "Mein Fahrrad hat einen Platten. **Deswegen nehme** ich heute die U-Bahn.",
      ar: "عجلة دراجتي فارغة من الهواء، لذلك سأستقل قطار الأنفاق اليوم.",
      highlight: "Deswegen nehme",
      audio: true,
      note: "deswegen تعلل خيار ركوب المترو"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "الخطأ الشائع رقم واحد: قول *Deshalb ich lerne* نقلاً عن العربية «لذلك أنا أتعلم»! في الألمانية، deshalb تحتل الموقع 1 ولا بد أن يأتي بعدها الفعل فوراً: *Deshalb lerne ich*.",
    "للتفريق الذهني بين deshalb و trotzdem: اسأل نفسك: هل الجملة الثانية نتيجة متوقعة لما قبلها؟ (نعم ← deshalb). أم أنها حدث مفاجئ يعاكس المنطق والظرف؟ (نعم ← trotzdem).",
    "الكلمات الثلاث (deshalb, deswegen, daher) متطابقة في المعنى والقواعد تماماً، وتعني جميعها «لذلك / ولهذا السبب». يمكنك التبديل بينها بحرية لإثراء أسلوبك."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "الروابط الظرفية: deshalb, deswegen, daher تعبر عن نتيجة، و trotzdem تعبر عن تناقض",
    "تشغل هذه الروابط الموقع الأول (Position 1) في بداية جملتها",
    "تحدث قاعدة الانقلاب (Inversion): يأتي الفعل المصرّف في الموقع 2 مباشرة بعد الرابط",
    "ترتيب الجملة الإلزامي: [Konnektor] + [الفعل المصرّف] + [الفاعل] + [بقية الجملة]",
    "إذا كان الحدث متوقعاً استعمل deshalb، وإذا كان مناقضاً لغير المتوقع استعمل trotzdem"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "deshalb", plural: "deswegen / daher", ar: "لذلك / لهذا السبب", article: "", example: "Ich bin krank. Deshalb bleibe ich im Bett." },
    { de: "trotzdem", plural: "dennoch", ar: "مع ذلك / بالرغم من ذلك", article: "", example: "Es regnet. Trotzdem gehe ich spazieren." },
    { de: "die Folge", plural: "die Folgen", ar: "النتيجة / العاقبة", article: "die", example: "Das ist die logische Folge." },
    { de: "der Grund", plural: "die Gründe", ar: "السبب / الداعي", article: "der", example: "Was ist der Grund für den Streit?" },
    { de: "der Gegensatz", plural: "die Gegensätze", ar: "التناقض / التضاد", article: "der", example: "Trotzdem drückt einen Gegensatz aus." },
    { de: "verschlafen", plural: "verschläft, verschlief, hat verschlafen", ar: "يستغرق في النوم (يفوته الموعد)", article: "", example: "Er hat verschlafen, deshalb kommt er zu spät." },
    { de: "anstrengend", plural: "anstrengender, am anstrengendsten", ar: "شاق / مُرهِق", article: "", example: "Die Arbeit war anstrengend, trotzdem lerne ich." }
  ],

  // 7. تمارين تفاعلية
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich habe kein Geld. ___ kaufe ich mir dieses teure Hemd nicht.",
      options: ["Deshalb", "Trotzdem", "Aber", "Denn"],
      correct: 0,
      explanation: "عدم شراء القميص الباهظ هو نتيجة طبيعية ومنطقية لعدم امتلاك المال، لذا نستخدم Deshalb متبوعة بالفعل kaufe."
    },
    {
      type: "multiple-choice",
      question: "Er hat wenig geschlafen. ___ fühlt er sich heute topfit.",
      options: ["Trotzdem", "Deshalb", "Deswegen", "Daher"],
      correct: 0,
      explanation: "الشعور بالنشاط رغم قلة النوم هو مفارقة وتناقض غير متوقع، لذا نستخدم Trotzdem."
    },
    {
      type: "fill-blank",
      question: "Es schneit draußen. Deshalb ___ wir warme Stiefel an.",
      answer: "ziehen",
      accept: ["ziehen"],
      explanation: "بعد Deshalb في الموقع 1، يجب أن يأتي الفعل المصرّف في الموقع 2 مباشرة: ziehen wir."
    },
    {
      type: "fill-blank",
      question: "Sie hat die Prüfung nicht bestanden. ___ gibt sie nicht auf und lernt weiter.",
      answer: "Trotzdem",
      accept: ["Trotzdem", "trotzdem"],
      explanation: "عدم الاستسلام ومواصلة الدراسة رغم الرسوب هو إصرار وتناقض مع الإحباط، فنستخدم Trotzdem."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (لذلك أتعلم الألمانية كل يوم)",
      words: ["Deshalb", "lerne", "ich", "jeden", "Tag", "Deutsch", "."],
      correct: "Deshalb lerne ich jeden Tag Deutsch .",
      explanation: "الرابط في الموقع 1 (Deshalb) + الفعل في الموقع 2 (lerne) + الفاعل في الموقع 3 (ich) + باقي الجملة."
    },
    {
      type: "match",
      question: "طابق بين الحالة والعبارة المناسبة لإكمالها:",
      pairs: [
        { left: "Ich habe Hunger.", right: "Deshalb esse ich einen Apfel." },
        { left: "Er hat keinen Appetit.", right: "Trotzdem isst er die Suppe." },
        { left: "Konnektor auf Position 1", right: "Verb auf Position 2" },
        { left: "Folge (نتيجة متوقعة)", right: "deshalb / deswegen" }
      ],
      explanation: "أدوات الربط deshalb و deswegen تعبر عن نتيجة، و trotzdem عن مفارقة غير متوقعة، ويليها الفعل مباشرة في الموقع 2."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أنا مريض، ومع ذلك أذهب إلى العمل.)",
      from: "أنا مريض، ومع ذلك أذهب إلى العمل.",
      answer: "Ich bin krank. Trotzdem gehe ich zur Arbeit.",
      accept: [
        "Ich bin krank. Trotzdem gehe ich zur Arbeit.",
        "Ich bin krank. Trotzdem gehe ich zur Arbeit",
        "Ich bin krank, trotzdem gehe ich zur Arbeit.",
        "Ich bin krank, trotzdem gehe ich zur Arbeit"
      ],
      explanation: "الذهاب للعمل رغم المرض تناقض (Trotzdem)، ويتبعه الفعل مباشرة في المركز الثاني (gehe ich)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Es ist spät. Deshalb ich gehe nach Hause.)",
      sentence: "Es ist spät. Deshalb ich gehe nach Hause.",
      corrected: "Es ist spät. Deshalb gehe ich nach Hause.",
      accept: ["Es ist spät. Deshalb gehe ich nach Hause.", "Es ist spät. Deshalb gehe ich nach Hause"],
      explanation: "الرابط deshalb يحتل الموقع 1، ويجب أن يليه الفعل في الموقع 2 فوراً: Deshalb gehe ich."
    },
    {
      type: "multiple-choice",
      question: "Welcher Satz hat die richtige Satzstellung?",
      options: [
        "Deshalb trinke ich viel Wasser.",
        "Deshalb ich trinke viel Wasser.",
        "Deshalb viel Wasser trinke ich.",
        "Deshalb ich viel Wasser trinke."
      ],
      correct: 0,
      explanation: "الترتيب الصحيح يقتضي وضع الفعل المصرّف ثانياً بعد deshalb: Deshalb + trinke + ich..."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Er mag Schokolade nicht. Trotzdem isst er sie nicht.)",
      sentence: "Er mag Schokolade nicht. Trotzdem isst er sie nicht.",
      corrected: "Er mag Schokolade nicht. Deshalb isst er sie nicht.",
      accept: [
        "Er mag Schokolade nicht. Deshalb isst er sie nicht.",
        "Er mag Schokolade nicht. Deshalb isst er sie nicht",
        "Er mag Schokolade nicht. Deswegen isst er sie nicht.",
        "Er mag Schokolade nicht. Daher isst er sie nicht."
      ],
      explanation: "عدم أكل الشوكولاتة نتيجة طبيعية لعدم حبه لها، وليس تناقضاً، لذا نستخدم Deshalb وليس Trotzdem."
    }
  ],

  // 8. اختبار الدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Auf welcher Position steht das Verb nach 'deshalb'?",
      options: ["Position 2", "Position 1", "Am Ende des Satzes", "Position 3"],
      correct: 0,
      explanation: "أداة deshalb تحتل الموقع 1، وبالتالي يأتي الفعل المصرّف بعدها مباشرة في الموقع 2."
    },
    {
      type: "multiple-choice",
      question: "Ich bin sehr müde. ___, ich muss noch die Hausaufgaben machen.",
      options: ["Trotzdem gehe ich nicht schlafen", "Trotzdem ich gehe nicht schlafen", "Deshalb schlafe ich nicht gern", "Denn ich schlafe"],
      correct: 0,
      explanation: "مع Trotzdem يأتي الفعل ثانياً: Trotzdem gehe ich nicht schlafen."
    },
    {
      type: "multiple-choice",
      question: "Er hat keinen Führerschein. ___ fährt er jeden Tag mit dem Bus.",
      options: ["Deshalb", "Trotzdem", "Aber", "Denn"],
      correct: 0,
      explanation: "ركوب الحافلة هو النتيجة الطبيعية لعدم وجود رخصة قيادة، فالأداة المناسبة هي Deshalb."
    },
    {
      type: "multiple-choice",
      question: "Sie hat die ganze Nacht gelernt. ___ war die Note leider nicht gut.",
      options: ["Trotzdem", "Deshalb", "Deswegen", "Daher"],
      correct: 0,
      explanation: "الحصول على علامة غير جيدة رغم الدراسة طوال الليل هو نتيجة مناقضة لغير المتوقع (تناقض)، فنستخدم Trotzdem."
    },
    {
      type: "multiple-choice",
      question: "Welches Wort bedeutet dasselbe wie 'deshalb'?",
      options: ["deswegen", "trotzdem", "aber", "sondern"],
      correct: 0,
      explanation: "deswegen و daher مرادفان تامان لـ deshalb ويعبران عن النتيجة السببية."
    }
  ]
};

window.lessons = window.LESSONS;
