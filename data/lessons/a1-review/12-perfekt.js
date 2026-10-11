// website/data/lessons/a1-review/12-perfekt.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-review-12"] = {
  id: "a1-review-12",
  level: "a1-review",
  order: 12,
  slug: "perfekt",
  title: {
    de: "Das Perfekt: haben oder sein?",
    ar: "الماضي التام: haben أم sein؟"
  },
  tags: ["grammatik", "perfekt", "verben", "zeitformen", "a1", "satzklammer"],

  // 1. الهدف
  goal: "ستتقن صياغة زمن الماضي التام (Perfekt) وهو الزمن الأساسي للمحادثة اليومية بالألمانية، وستتعلم بدقة متى تختار الفعل المساعد haben ومتى تختار sein، مع تطبيق قاعدة القوس الفعلي (Satzklammer).",

  // 2. الشرح المبسط بالعربية مع الجداول وقواعد القوس الفعلي
  explanation: [
    {
      type: "text",
      content: "زمن **الماضي التام (Das Perfekt)** هو الزمن الأكثر استخداماً للتعبير عن الماضي في اللغة الألمانية المنطوقة والمحادثات اليومية. يتكون زمن Perfekt دائماً من عنصرين يعملان معاً:\n1. **فعل مساعد مصرف (Hilfsverb):** إما **haben** أو **sein** ويوضع في المركز الثاني (Position 2).\n2. **اسم المفعول (Partizip II):** يوضع في نهاية الجملة تماماً."
    },
    {
      type: "rule",
      content: "قاعدة القوس الفعلي (Die Satzklammer): الفعل المساعد المصرف يحتل المركز الثاني في الجملة الخبرية، بينما يقفل اسم المفعول (Partizip II) الجملة في آخر موضع. كل تفاصيل الجملة (المفعول به، الزمان، المكان) تأتي بينهما في الحقل الأوسط (Mittelfeld)."
    },
    {
      type: "table",
      headers: ["الموقع 1 (الفاعل / الظرف)", "الموقع 2 (الفعل المساعد)", "الحقل الأوسط (Mittelfeld)", "نهاية الجملة (Partizip II)"],
      rows: [
        ["Ich", "habe", "gestern eine leckere Pizza", "gegessen."],
        ["Wir", "sind", "letzte Woche nach Berlin", "gefahren."],
        ["Heute Morgen", "ist", "mein Bruder um 6 Uhr", "aufgestanden."],
        ["Er", "hat", "mich gestern Abend", "angerufen."]
      ]
    },
    {
      type: "text",
      content: "السؤال الأهم في الألمانية: **متى نستخدم sein ومتى نستخدم haben؟**\n\nنستخدم الفعل المساعد **sein** في ثلاث حالات واضحة ومحددة فقط:\n1. **أفعال الحركة والانتقال من نقطة أ إلى نقطة ب (Ortswechsel):** مثل gehen (ذهب), fahren (سافر), fliegen (طار), kommen (أتى), laufen (ركض), schwimmen (سبح لمسافة), reisen (سافر), wandern (تجوّل).\n2. **أفعال تغير الحالة والتحول (Zustandswechsel):** مثل aufwachen (استيقظ - من النوم لليقظة), einschlafen (نام/غفا), sterben (مات), wachsen (نما).\n3. **أفعال خاصة شاذة:**\n• **sein** (كان ← ist gewesen)\n• **bleiben** (بقي ← ist geblieben)\n• **werden** (أصبح ← ist geworden)\n• **passieren / geschehen** (حدث ← ist passiert)"
    },
    {
      type: "text",
      content: "متى نستخدم الفعل المساعد **haben**؟\nنستخدم haben مع الأغلبية الكاسحة من الأفعال الألمانية (أكثر من 85%):\n1. **جميع الأفعال المتعدية (Transitive Verben):** أي فعل يأخذ مفعولاً به منصوباً (Akkusativ) مثل: essen, trinken, kaufen, lesen, schreiben, machen, kochen, finden, sehen.\n2. **جميع الأفعال الانعكاسية (Reflexive Verben):** مثل: sich freuen, sich waschen, sich ausruhen, sich anziehen (دائماً haben!).\n3. **الأفعال التي تدل على حالة ثابتة أو سكون بدون انتقال من A إلى B:** مثل: schlafen (نام), wohnen (سكن), arbeiten (عمل), warten (انتظر), stehen (وقف), sitzen (جلس), liegen (استلقى)."
    },
    {
      type: "table",
      headers: ["المعيار النحوي", "يأخذ sein", "يأخذ haben"],
      rows: [
        ["الحركة والانتقال (von A nach B)", "gehen, fahren, fliegen, kommen, laufen", "tanzen, joggen (في نفس المكان بلا وجهة محددة)"],
        ["تغير الحالة (Zustandsänderung)", "aufwachen, einschlafen, sterben", "schlafen, leben, wachen (حالة مستمرة)"],
        ["المفعول به (Akkusativ)", "لا يوجد أبداً مع sein", "جميع الأفعال ذات المفعول به (haben das Auto gekauft)"],
        ["الأفعال الانعكاسية (reflexiv)", "لا توجد أفعال انعكاسية مع sein", "دائماً haben: sich freuen, sich fühlen"],
        ["أفعال خاصة لا تنساها", "sein, bleiben, werden, passieren", "haben, besitzen, kennen"]
      ]
    }
  ],

  // 3. الأمثلة (9 أمثلة مع تمييز القواعد وزر النطق والترجمة)
  examples: [
    {
      de: "Ich **habe** gestern ein interessantes Buch **gelesen**.",
      ar: "قرأتُ بالأمس كتاباً مشوقاً.",
      highlight: "habe",
      audio: true,
      note: "lesen فعل متعدٍ يأخذ Akkusativ (ein Buch) ← يأخذ haben"
    },
    {
      de: "Wir **sind** mit dem Zug nach München **gefahren**.",
      ar: "سافرنا بالقطار إلى ميونخ.",
      highlight: "sind",
      audio: true,
      note: "fahren حركة وانتقال من مكان إلى آخر ← يأخذ sein"
    },
    {
      de: "Wann **bist** du heute Morgen **aufgewacht**?",
      ar: "متى استيقظتَ هذا الصباح؟",
      highlight: "bist",
      audio: true,
      note: "aufwachen تغير في الحالة من النوم إلى اليقظة ← يأخذ sein"
    },
    {
      de: "Mein Vater **hat** dreißig Jahre lang bei Siemens **gearbeitet**.",
      ar: "عمل والدي لمدة ثلاثين عاماً في شركة سيمنز.",
      highlight: "hat",
      audio: true,
      note: "arbeiten سكون واستمرار بلا انتقال مكاني ← يأخذ haben"
    },
    {
      de: "Am Wochenende **sind** wir wegen des Regens zu Hause **geblieben**.",
      ar: "في نهاية الأسبوع بقينا في المنزل بسبب المطر.",
      highlight: "sind",
      audio: true,
      note: "bleiben فعل استثنائي يدل على البقاء لكنه يأخذ sein دائماً!"
    },
    {
      de: "Ich **habe** mich sehr über deinen Besuch **gefreut**.",
      ar: "فرحتُ كثيراً بزيارتك.",
      highlight: "habe",
      audio: true,
      note: "sich freuen فعل انعكاسي ← جميع الأفعال الانعكاسية تأخذ haben"
    },
    {
      de: "Der Flug nach Frankfurt **hat** zwei Stunden **gedauert**.",
      ar: "استغرقت الرحلة الجوية إلى فرانكفورت ساعتين.",
      highlight: "hat",
      audio: true,
      note: "dauern يعبر عن مدة زمنية بلا انتقال للفاعل ← haben"
    },
    {
      de: "Was **ist** gestern Abend auf der Straße **passiert**?",
      ar: "ماذا حدث مساء أمس في الشارع؟",
      highlight: "ist",
      audio: true,
      note: "passieren فعل صيرورة وحدوث ← يأخذ sein"
    },
    {
      de: "Ich **bin** schon dreimal in Deutschland **gewesen**.",
      ar: "لقد كنتُ في ألمانيا ثلاث مرات من قبل.",
      highlight: "bin",
      audio: true,
      note: "الفعل sein نفسه يصرف مع sein في الماضي: ist gewesen"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في اللغة العربية نصرف الفعل في الماضي بكلمة واحدة (سافرتُ، أكلتُ، نمتُ)، أما في الألمانية فالماضي التام يتكون من جزأين محيطين بالجملة كالقوس: الفعل المساعد في المركز الثاني واسم المفعول في آخر كلمة تماماً. لا تضعهما بجوار بعضهما أبداً في الجملة العادية!",
    "احذر من فخ الفعل bleiben (بقي): باللغة العربية البقاء في مكان يعني السكون التام وعدم الحركة، لذلك يميل الطلاب العرب لاستخدام haben، لكن في الألمانية bleiben قاعدة استثنائية صارمة ويأخذ sein دائماً: (Wir sind geblieben وليس haben geblieben).",
    "الأفعال الانعكاسية في الألمانية (التي تبدأ بـ sich) تأخذ دائماً haben بلا استثناء، حتى لو كانت تعبر عن حركة مثل: Ich habe mich bewegt (تحركتُ) أو شعور مثل Ich habe mich ausgeruht (استرحتُ)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "صيغة الماضي التام: فعل مساعد (haben / sein) في المركز 2 + اسم المفعول (Partizip II) في نهاية الجملة تماماً.",
    "نستخدم sein مع: أفعال الانتقال من A إلى B (gehen, fahren, fliegen, kommen)، وتغير الحالة (aufwachen, einschlafen)، والأفعال الخاصة (sein, bleiben, werden, passieren).",
    "نستخدم haben مع: الأفعال المتعدية ذات المفعول به (Akkusativ)، والأفعال الانعكاسية (sich)، وأفعال السكون والمكوث (schlafen, arbeiten, wohnen).",
    "تذكر الاستثناء الذهبي: الفعل bleiben يعني السكون لكنه يأخذ sein دائماً (ist geblieben).",
    "القوس الفعلي (Satzklammer) يحبس الفاعل والظروف والمفعول به بين الفعل المساعد واسم المفعول."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "das Perfekt", plural: "-", ar: "الماضي التام", article: "das", example: "Wir lernen heute das Perfekt." },
    { de: "das Hilfsverb", plural: "die Hilfsverben", ar: "الفعل المساعد", article: "das", example: "haben und sein sind Hilfsverben." },
    { de: "aufwachen", plural: "-", ar: "يستيقظ (مع sein)", article: "", example: "Ich bin um 7 Uhr aufgewacht." },
    { de: "einschlafen", plural: "-", ar: "يغفو / ينام (مع sein)", article: "", example: "Das Kind ist schnell eingeschlafen." },
    { de: "bleiben", plural: "-", ar: "يبقى / يمكث (مع sein)", article: "", example: "Er ist zu Hause geblieben." },
    { de: "passieren", plural: "-", ar: "يحدث / يقع (مع sein)", article: "", example: "Was ist hier passiert?" },
    { de: "reisen", plural: "-", ar: "يسافر (مع sein)", article: "", example: "Wir sind nach Spanien gereist." },
    { de: "die Bewegung", plural: "die Bewegungen", ar: "الحركة / الانتقال", article: "die", example: "Das Verb zeigt eine Bewegung." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "اختر الفعل المساعد المناسب: Ich ___ gestern nach Berlin gefahren.",
      options: ["habe", "bin", "hat", "ist"],
      answer: 1,
      correct: 1,
      correctIndex: 1,
      explanation: "الفعل fahren يعبر عن حركة وانتقال من مكان إلى آخر (Ortswechsel)، لذا يأخذ الفعل المساعد sein (مع ich تصبح bin)."
    },
    {
      type: "fill-blank",
      question: "املأ الفراغ بالفعل المساعد المناسب:",
      sentence: "Wir ___ gestern Abend eine leckere Pizza gegessen.",
      answer: "haben",
      accept: ["haben"],
      options: ["haben", "sind", "hat"],
      correctOption: "haben",
      explanation: "الفعل essen يأخذ مفعولاً به منصوباً (eine Pizza)، وبالتالي فهو فعل متعدٍ يتطلب الفعل المساعد haben (ومع wir يكون haben)."
    },
    {
      type: "word-order",
      question: "رتب الجملة مراعياً قاعدة القوس الفعلي (Satzklammer):",
      words: ["Ich", "habe", "ein", "Buch", "gelesen", "gestern"],
      answer: "Ich habe gestern ein Buch gelesen",
      correct: "Ich habe gestern ein Buch gelesen",
      correctOrder: ["Ich", "habe", "gestern", "ein", "Buch", "gelesen"],
      explanation: "الفعل المساعد habe يأتي ثانياً، واسم المفعول gelesen يأتي في نهاية الجملة تماماً."
    },
    {
      type: "multiple-choice",
      question: "اختر الفعل المساعد المناسب: Am Sonntag ___ Thomas den ganzen Tag zu Hause geblieben.",
      options: ["hat", "ist", "wird", "kann"],
      answer: 1,
      correct: 1,
      correctIndex: 1,
      explanation: "الفعل bleiben استثناء قاعدي: يدل على البقاء والسكون لكنه يأخذ دائماً الفعل المساعد sein (ist geblieben)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في الفعل المساعد بالجملة التالية:",
      text: "Ich habe um 7 Uhr aufgewacht.",
      sentence: "Ich habe um 7 Uhr aufgewacht.",
      incorrect: "Ich habe um 7 Uhr aufgewacht.",
      answer: "Ich bin um 7 Uhr aufgewacht.",
      correct: "Ich bin um 7 Uhr aufgewacht.",
      corrected: "Ich bin um 7 Uhr aufgewacht.",
      accept: ["Ich bin um 7 Uhr aufgewacht", "Ich bin um 7 Uhr aufgewacht."],
      explanation: "الفعل aufwachen يدل على تغير الحالة من النوم إلى اليقظة (Zustandswechsel)، ولذلك يأخذ sein وليس haben."
    },
    {
      type: "match",
      question: "طابق كل فعل مع الفعل المساعد الصحيح له في زمن Perfekt:",
      pairs: [
        { left: "geflogen (طيران)", right: "sein" },
        { left: "gekocht (طبخ)", right: "haben" },
        { left: "gestorben (وفاة)", right: "sein" },
        { left: "gespielt (لعب)", right: "haben" }
      ],
      explanation: "fliegen و sterben يأخذان sein (حركة وتغير حالة)، بينما kochen و spielen يأخذان haben."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: لقد سافرنا إلى ألمانيا.",
      text: "لقد سافرنا إلى ألمانيا.",
      answer: "Wir sind nach Deutschland gereist.",
      target: "Wir sind nach Deutschland gereist.",
      accept: [
        "Wir sind nach Deutschland gereist",
        "Wir sind nach Deutschland gereist.",
        "Wir sind nach Deutschland gefahren",
        "Wir sind nach Deutschland gefahren."
      ],
      explanation: "السفر حركة انتقال من مكان لآخر، نستخدم sein: Wir sind nach Deutschland gereist / gefahren."
    },
    {
      type: "fill-blank",
      question: "املأ الفراغ بالفعل المساعد الصحيح:",
      sentence: "Wann ___ du gestern Abend eingeschlafen?",
      answer: "bist",
      accept: ["bist"],
      options: ["hast", "bist", "ist"],
      correctOption: "bist",
      explanation: "الفعل einschlafen يعني يغفو أو ينام وهو تغير حالة، لذلك يأخذ sein (ومع du يكون bist)."
    },
    {
      type: "error-correction",
      question: "صحح مكان اسم المفعول لتطبيق قاعدة القوس الفعلي (Satzklammer):",
      text: "Er hat gekauft gestern ein Auto.",
      sentence: "Er hat gekauft gestern ein Auto.",
      incorrect: "Er hat gekauft gestern ein Auto.",
      answer: "Er hat gestern ein Auto gekauft.",
      correct: "Er hat gestern ein Auto gekauft.",
      corrected: "Er hat gestern ein Auto gekauft.",
      accept: ["Er hat gestern ein Auto gekauft", "Er hat gestern ein Auto gekauft."],
      explanation: "اسم المفعول (gekauft) يجب أن يأتي في نهاية الجملة تماماً، وليس بعد الفعل المساعد مباشرة."
    },
    {
      type: "multiple-choice",
      question: "الأفعال الانعكاسية (wie sich waschen / sich freuen) تأخذ في الماضي التام:",
      options: [
        "دائماً الفعل المساعد haben",
        "دائماً الفعل المساعد sein",
        "حسب معنى الحركة",
        "تأخذ werden"
      ],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "قاعدة صارمة بلا استثناء: جميع الأفعال الانعكاسية (reflexive Verben) تأخذ دائماً الفعل المساعد haben."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة متعددة الخيارات)
  quiz: [
    {
      type: "multiple-choice",
      question: "Welches Hilfsverb passt? «Mein Kollege ___ mit dem Bus zur Arbeit gekommen.»",
      options: ["hat", "ist", "wird"],
      answer: 1,
      correct: 1,
      correctIndex: 1,
      explanation: "الفعل kommen يدل على حركة وانتقال مكاني، فيأخذ sein (mein Kollege ist gekommen)."
    },
    {
      type: "multiple-choice",
      question: "Welcher Satz ist grammatisch richtig?",
      options: [
        "Ich habe gestern meine Tante besucht.",
        "Ich bin gestern meine Tante besucht.",
        "Ich habe besucht gestern meine Tante."
      ],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "الفعل besuchen متعدٍ يأخذ haben، واسم المفعول besucht يأتي في نهاية الجملة (Satzklammer)."
    },
    {
      type: "multiple-choice",
      question: "Welches Hilfsverb braucht das Verb «bleiben»?",
      options: ["haben", "sein", "beide sind möglich"],
      answer: 1,
      correct: 1,
      correctIndex: 1,
      explanation: "الفعل bleiben استثناء مشهور: يدل على السكون لكنه يأخذ sein دائماً (ist geblieben)."
    },
    {
      type: "multiple-choice",
      question: "«Sarah ___ heute acht Stunden im Bett geschlafen.»",
      options: ["ist", "hat", "wird"],
      answer: 1,
      correct: 1,
      correctIndex: 1,
      explanation: "النوم (schlafen) حالة مستمرة بدون تغير حالة أو انتقال مكاني، لذلك يأخذ haben (hat geschlafen)."
    },
    {
      type: "multiple-choice",
      question: "Was gehört am Satzende im Perfekt?",
      options: [
        "Das Partizip II",
        "Das Hilfsverb",
        "Das Subjekt"
      ],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "في زمن Perfekt، يأتي الفعل المساعد في المركز الثاني، واسم المفعول (Partizip II) في نهاية الجملة تماماً."
    }
  ]
};

window.lessons = window.LESSONS;
