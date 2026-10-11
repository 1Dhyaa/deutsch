// data/lessons/a2-1/21-nebensatz.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-21"] = {
  id: "a2-1-21",
  level: "a2-1",
  order: 21,
  slug: "nebensatz",
  title: {
    de: "Der Nebensatz (Grundlagen & Verb-Letzt-Stellung)",
    ar: "الجملة الفرعية وقاعدة الفعل في النهاية"
  },
  tags: ["grammatik", "nebensatz", "subjunktionen", "dass", "weil", "wenn", "ob", "satzbau", "a2"],

  // 1. الهدف
  goal: "ستتعلم بنية الجملة الفرعية (Nebensatz) الألمانية والقاعدة الذهبية لانتقال الفعل المصرّف إلى نهاية الجملة تماماً (Verb-Letzt-Stellung)، وأهم الروابط التبعية (dass, weil, wenn, ob)، وقاعدة البدء بالجملة الفرعية وانعكاس بداية الجملة الرئيسية (Nebensatz, Verb + Subjekt...).",

  // 2. الشرح
  explanation: [
    {
      type: "text",
      content: "**الجملة الفرعية (Nebensatz)** هي جملة تابعة لا تستقل بذاتها في المعنى، بل ترتبط بجملة رئيسية (Hauptsatz) وتفصل عنها بفاصلة إجبارية (Komma). تبدأ الجملة الفرعية دائماً برابط تبعي (Subjunktion)."
    },
    {
      type: "rule",
      content: "القاعدة الذهبية للجملة الفرعية (Verb-Letzt-Stellung):\nفي أي جملة فرعية ألمانية، ينتقل **الفعل المصرّف حتماً إلى نهاية الجملة تماماً** (قبل النقطة مباشرة):\n\n[رابط تبعي] + [الفاعل] + [...] + **[الفعل المصرّف في النهاية]**!\n\nوإذا كان في الجملة فعل ناقص (Modalverb) أو زمن مركب (Perfekt)، فإن الفعل المصرّف يأتي في أقصى النهاية بعد المصدر أو اسم المفعول:\n• Ich weiß, dass er Deutsch **lernt**.\n• Ich weiß, dass er Deutsch lernen **muss**.\n• Ich weiß, dass er Deutsch gelernt **hat**."
    },
    {
      type: "table",
      headers: ["الرابط التبعي", "المعنى بالعربية", "الوظيفة والدلالة", "مثال مع توضيح مكان الفعل"],
      rows: [
        ["dass", "أنّ", "تنقل خبراً أو رأياً أو حقيقة بعد أفعال القول والاعتقاد (wissen, glauben, sagen...)", "Ich weiß, dass du recht **hast**."],
        ["weil", "لأنّ", "تعبر عن السبب والعلة المنطقية (ترسل الفعل للنهاية)", "Er bleibt daheim, weil er krank **ist**."],
        ["wenn", "إذا / لو / عندما", "تعبر عن شرط (konditional) أو حدث متكرر في الحاضر والمستقبل", "Wir grillen im Garten, wenn die Sonne **scheint**."],
        ["ob", "هل / عما إذا كان", "تُستخدم في الأسئلة غير المباشرة ذات الإجابة بنعم/لا والشك", "Ich frage mich, ob er heute **kommt**."]
      ]
    },
    {
      type: "rule",
      content: "قاعدة البدء بالجملة الفرعية (التقاء الفعلين عند الفاصلة Verb-Komma-Verb):\nإذا بدأت كلامك بالجملة الفرعية، فإنها تُحتسب بأكملها كـ «عنصر أول» بالنسبة للجملة الرئيسية. لذلك يجب أن تبدأ الجملة الرئيسية بعد الفاصلة مباشرة بـ **الفعل المصرّف**:\n\n[Nebensatz ..., **Verb**] **,** **[Verb]** + [Subjekt] + [...]\n\nمثال: Weil es kalt **ist**, **ziehe** ich eine Jacke an. (وليس: ich ziehe!)"
    },
    {
      type: "text",
      content: "تذكر دائماً: الفاصلة (Komma) إلزامية في قواعد الإملاء الألمانية بين الجملة الرئيسية والجملة الفرعية دون أي استثناء."
    }
  ],

  // 3. الأمثلة
  examples: [
    {
      de: "Ich glaube, dass morgen das Wetter schön **wird**.",
      ar: "أعتقد أن الطقس غداً سيكون جميلاً.",
      highlight: "wird",
      audio: true,
      note: "رابط dass أرسل الفعل المصرّف wird إلى نهاية الجملة الفرعية"
    },
    {
      de: "Er kann nicht mitkommen, weil er noch viel arbeiten **muss**.",
      ar: "هو لا يستطيع المجيء معنا، لأنه لا يزال مضطراً للعمل كثيراً.",
      highlight: "arbeiten muss",
      audio: true,
      note: "مع فعل ناقص: المصدر arbeiten ثم الفعل المصرّف muss في النهاية"
    },
    {
      de: "Wir machen ein Picknick, wenn es am Wochenende warm **ist**.",
      ar: "سنقوم بنزهة وتناول الطعام في الطبيعة إذا كان الجو دافئاً في عطلة نهاية الأسبوع.",
      highlight: "warm ist",
      audio: true,
      note: "رابط الشرط wenn والفعل ist في آخر كلمة"
    },
    {
      de: "Können Sie mir sagen, ob der Bus zum Bahnhof **fährt**?",
      ar: "هل يمكنك إخباري عما إذا كانت هذه الحافلة تذهب إلى محطة القطار؟",
      highlight: "fährt",
      audio: true,
      note: "سؤال غير مباشر بـ ob والفعل fährt في النهاية"
    },
    {
      de: "Weil er den Wecker nicht gehört **hat**, kam er zu spät.",
      ar: "لأنه لم يسمع المنبه، وصل متأخراً.",
      highlight: "gehört hat, kam",
      audio: true,
      note: "البدء بالـ Nebensatz: الفعل hat قبل الفاصلة، والفعل kam مباشرة بعد الفاصلة"
    },
    {
      de: "Wenn du Hilfe **brauchst**, ruf mich einfach an!",
      ar: "إذا احتجت إلى مساعدة، فاتصل بي ببساطة!",
      highlight: "brauchst, ruf",
      audio: true,
      note: "جملة فرعية شرطية تبدأ بـ wenn متبوعة بصيغة أمر ruf"
    },
    {
      de: "Ich freue mich sehr, dass du mich heute **besuchst**.",
      ar: "أنا سعيد للغاية لأنك تزورني اليوم.",
      highlight: "besuchst",
      audio: true,
      note: "فعل besuchst في نهاية جملة dass"
    },
    {
      de: "Weißt du schon, ob Sarah die Prüfung bestanden **hat**?",
      ar: "هل تعلم بعد ما إذا كانت سارة قد اجتازت الامتحان؟",
      highlight: "bestanden hat",
      audio: true,
      note: "رابط الشك ob مع الماضي التام: bestanden hat في النهاية"
    },
    {
      de: "Dass du so schnell Deutsch gelernt **hast**, ist beeindruckend.",
      ar: "أنك تعلمت الألمانية بهذه السرعة أمر مذهل ومثير للإعجاب.",
      highlight: "gelernt hast, ist",
      audio: true,
      note: "جملة dass بدأت بها العبارة، وتبعتها الجملة الرئيسية بالفعل ist"
    },
    {
      de: "Ich trinke Tee, weil Kaffee mir nicht gut **tut**.",
      ar: "أنا أشرب الشاي، لأن القهوة لا تناسبني صحياً.",
      highlight: "gut tut",
      audio: true,
      note: "رابط weil مع الفعل المنفصل guttun: يعود متصلاً في النهاية gut tut"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في العربية ترتيب الكلمات مرن، فنقول: «أعلم أنك تحب القراءة»، ويأتي الفعل في وسطه طبيعياً. أما في الألمانية فإن الروابط التبعية (dass, weil...) مغناطيس يجذب الفعل المصرّف بقوة إلى آخر كلمة في الجملة: *Ich weiß, dass du das Lesen **liebst***.",
    "قاعدة «فعل، فاصلة، فعل» (Verb-Komma-Verb): إذا بدأت الجملة بـ wenn أو weil، تذكر أن الفعلين يلتقيان عند الفاصلة تماماً: *Wenn es regnet*, *bleibe ich daheim*. أكبر خطأ هو قول *Wenn es regnet, ich bleibe*!",
    "الفرق بين dass و das: كلمة dass (بـ ss) هي الرابط التبعي وتعني «أنّ»، بينما das (بـ s واحدة) هي أداة تعريف للمحايد أو اسم موصول/إشارة بمعنى «هذا / الذي». لا تخلط في إملائهما أبداً!"
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "في الجملة الفرعية (Nebensatz)، ينتقل الفعل المصرّف دائماً إلى نهاية الجملة تماماً",
    "أهم الروابط التبعية: dass (أنّ), weil (لأنّ), wenn (إذا/لو/عندما), ob (هل/عما إذا)",
    "وجود الفاصلة (Komma) بين الجملة الرئيسية والفرعية إلزامي تماماً",
    "إذا بدأت الجملة بـ Nebensatz، تبدأ الجملة الرئيسية بالفعل فوراً: [Nebensatz, Verb + Subjekt]",
    "مع الأفعال المنفصلة في Nebensatz تلتحم البادئة مع الفعل في النهاية (z.B. ... früh aufsteht)"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "der Nebensatz", plural: "die Nebensätze", ar: "الجملة الفرعية / التابعة", article: "der", example: "Im Nebensatz steht das Verb am Ende." },
    { de: "die Subjunktion", plural: "die Subjunktionen", ar: "أداة الربط التبعية", article: "die", example: "Weil, dass und wenn sind Subjunktionen." },
    { de: "das Komma", plural: "die Kommas", ar: "الفاصلة", article: "das", example: "Ein Komma trennt die Sätze." },
    { de: "hoffen", plural: "hofft, hoffte, hat gehofft", ar: "يأمل / يرجو", article: "", example: "Ich hoffe, dass alles gut klappt." },
    { de: "wissen", plural: "weiß, wusste, hat gewusst", ar: "يعلم / يعرف", article: "", example: "Ich weiß nicht, ob er heute Zeit hat." },
    { de: "die Bedingung", plural: "die Bedingungen", ar: "الشرط", article: "die", example: "Wenn drückt eine Bedingung aus." },
    { de: "pünktlich", plural: "pünktlicher, am pünktlichsten", ar: "دقيق في الموعد", article: "", example: "Ich weiß nicht, ob der Zug pünktlich ankommt." }
  ],

  // 7. تمارين تفاعلية
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich bleibe im Bett, weil ich müde ___.",
      options: ["bin", "bist", "ist", "seid"],
      correct: 0,
      explanation: "في الجملة الفرعية مع weil يذهب الفعل المصرّف إلى نهاية الجملة، ومع الفاعل ich نستخدم bin."
    },
    {
      type: "multiple-choice",
      question: "Weißt du, ___ der Chef heute im Büro ist?",
      options: ["ob", "weil", "denn", "aber"],
      correct: 0,
      explanation: "السؤال يعبر عن شك واستفسار بنعم أو لا (هل المدير موجود؟)، والرابط المناسب هو ob (هل / عما إذا كان)."
    },
    {
      type: "fill-blank",
      question: "Ich hoffe, dass du bald wieder gesund ___.",
      answer: "wirst",
      accept: ["wirst"],
      explanation: "بعد رابط dass يذهب الفعل المصرّف للنهاية، وتصريف werden مع du هو wirst."
    },
    {
      type: "fill-blank",
      question: "Wenn es morgen regnet, ___ wir zu Hause.",
      answer: "bleiben",
      accept: ["bleiben"],
      explanation: "عندما تبدأ الجملة بـ Nebensatz، تبدأ الجملة الرئيسية بعد الفاصلة مباشرة بالفعل المصرّف: bleiben wir."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (أنا أعلم أنك تتعلم الألمانية)",
      words: ["Ich", "weiß", ",", "dass", "du", "Deutsch", "lernst", "."],
      correct: "Ich weiß , dass du Deutsch lernst .",
      explanation: "الجملة الرئيسية (Ich weiß) + فاصلة + رابط dass + الفاعل du + Deutsch + الفعل في النهاية lernst."
    },
    {
      type: "match",
      question: "طابق كل رابط مع وظيفته اللغوية:",
      pairs: [
        { left: "dass", right: "أنّ (نقل خبر أو معرفة)" },
        { left: "weil", right: "لأنّ (السبب والعلة)" },
        { left: "wenn", right: "إذا / لو (الشرط والزمن)" },
        { left: "ob", right: "هل (سؤال غير مباشر)" }
      ],
      explanation: "الروابط التبعية ترسل الفعل لنهاية الجملة: dass لنقل الخبر، weil للسبب، wenn للشرط، و ob للسؤال غير المباشر."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (هو سعيد لأن الطقس مشمس.)",
      from: "هو سعيد لأن الطقس مشمس.",
      answer: "Er ist glücklich, weil das Wetter sonnig ist.",
      accept: [
        "Er ist glücklich, weil das Wetter sonnig ist.",
        "Er ist glücklich, weil das Wetter sonnig ist",
        "Er freut sich, weil das Wetter sonnig ist.",
        "Er freut sich, weil das Wetter sonnig ist"
      ],
      explanation: "جملة فرعية مع weil ترسل الفعل ist إلى نهاية الجملة تماماً بعد sonnig."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich weiß, dass er kommt heute nicht.)",
      sentence: "Ich weiß, dass er kommt heute nicht.",
      corrected: "Ich weiß, dass er heute nicht kommt.",
      accept: ["Ich weiß, dass er heute nicht kommt.", "Ich weiß, dass er heute nicht kommt"],
      explanation: "مع الرابط dass يجب أن يذهب الفعل المصرّف (kommt) إلى نهاية الجملة الفرعية تماماً."
    },
    {
      type: "multiple-choice",
      question: "Weil ich Deutsch lernen will, ___ ich nach Berlin.",
      options: ["fahre", "ich fahre", "gefahren bin", "fahre ich"],
      correct: 0,
      explanation: "الجملة بدأت بـ Nebensatz، لذا تبدأ الجملة الرئيسية بالفعل مباشرة بعد الفاصلة: fahre ich."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Wenn du Zeit hast, du kannst mich anrufen.)",
      sentence: "Wenn du Zeit hast, du kannst mich anrufen.",
      corrected: "Wenn du Zeit hast, kannst du mich anrufen.",
      accept: ["Wenn du Zeit hast, kannst du mich anrufen.", "Wenn du Zeit hast, kannst du mich anrufen"],
      explanation: "عند البدء بـ Wenn، يجب أن تبدأ الجملة الرئيسية بعد الفاصلة بالفعل المصرّف مباشرة (kannst du)."
    }
  ],

  // 8. اختبار الدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Wo steht das konjugierte Verb in einem Nebensatz?",
      options: ["Am Ende des Satzes", "Auf Position 2", "Auf Position 1", "Direkt nach dem Konnektor"],
      correct: 0,
      explanation: "في الجملة الفرعية الألمانية (Nebensatz) يذهب الفعل المصرّف دائماً إلى نهاية الجملة تماماً."
    },
    {
      type: "multiple-choice",
      question: "Ich frage mich, ___ wir den Zug noch erreichen können.",
      options: ["ob", "dass", "denn", "weil"],
      correct: 0,
      explanation: "التعبير عن التساؤل والشك (هل سنلحق بالقطار؟) يتطلب الرابط التبعي ob."
    },
    {
      type: "multiple-choice",
      question: "Er sagt, ___ er morgen keine Zeit hat.",
      options: ["dass", "ob", "wenn", "weil"],
      correct: 0,
      explanation: "نقل القول والمحتوى بعد فعل sagen يتطلب استخدام الرابط dass (أنّه)."
    },
    {
      type: "multiple-choice",
      question: "Welcher Satz ist grammatikalisch korrekt?",
      options: [
        "Wenn es regnet, nehme ich einen Schirm.",
        "Wenn es regnet, ich nehme einen Schirm.",
        "Wenn regnet es, nehme ich einen Schirm.",
        "Wenn es regnen, ich einen Schirm nehme."
      ],
      correct: 0,
      explanation: "الجملة الفرعية Wenn es regnet تضع الفعل في النهاية، وتليها الجملة الرئيسية بالفعل مباشرة بعد الفاصلة: nehme ich."
    },
    {
      type: "multiple-choice",
      question: "Ich freue mich, weil meine Familie mich besuchen ___.",
      options: ["kommt", "kommen", "gekommen", "kam"],
      correct: 0,
      explanation: "الفاعل meine Familie مفرد مؤنث (sie)، والفعل في نهاية الجملة المصرّف معه هو kommt."
    }
  ]
};

window.lessons = window.LESSONS;
