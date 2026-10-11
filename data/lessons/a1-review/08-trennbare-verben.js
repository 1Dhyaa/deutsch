// website/data/lessons/a1-review/08-trennbare-verben.js
window.LESSONS = window.LESSONS || {};
window.lessons = window.lessons || {};

window.LESSONS["a1-review-08"] = {
  id: "a1-review-08",
  level: "a1-review",
  order: 8,
  slug: "trennbare-verben",
  title: {
    de: "Trennbare Verben",
    ar: "الأفعال المنفصلة (Trennbare Verben)"
  },
  tags: ["grammatik", "verben", "trennbare-verben", "satzbau", "a1"],

  // 1. الهدف من الدرس
  goal: "ستتعلم ماهية الأفعال المنفصلة في الألمانية، وكيف تنفصل سابقتها لتستقر في نهاية الجملة تماماً، والفرق بينها وبين الأفعال غير المنفصلة، وكيفية استخدامها مع الأفعال الناقصة (Modalverben).",

  // 2. الشرح مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "تتميز اللغة الألمانية بظاهرة لغوية فريدة وهي **الأفعال المنفصلة (Trennbare Verben)**. يتكون الفعل المنفصل من جزأين: **سابقة (Präfix)** + **فعل أساسي (Basisverb)**. عند استخدام هذا الفعل في جملة رئيسية بزمن المضارع (Präsens)، يصرف الفعل الأساسي في المركز الثاني، بينما تنفصل السابقة وتذهب إلى **آخر كلمة في الجملة تماماً**!"
    },
    {
      type: "rule",
      content: "هيكل الجملة مع الفعل المنفصل: الفاعل (1) + الفعل الأساسي المصرف (2) + باقي الجملة + **السابقة المنفصلة في النهاية تماماً (Ende)**."
    },
    {
      type: "table",
      headers: ["السابقة (Präfix)", "المعنى الدلالي العام", "الفعل المصدر", "مثال في جملة"],
      rows: [
        ["**auf-**", "لأعلى / فتح", "aufstehen (يستيقظ) / aufmachen (يفتح)", "Ich **stehe** um 6 Uhr **auf**."],
        ["**an-**", "بداية / اتصال / ملامسة", "anrufen (يتصل) / anfangen (يبدأ)", "Er **ruft** seinen Freund **an**."],
        ["**ab-**", "انطلاق / مغادرة / إنهاء", "abfahren (ينطلق/يتحرك)", "Der Zug **fährt** um 9 Uhr **ab**."],
        ["**ein-**", "دخول / للداخل", "einkaufen (يتسوق) / einsteigen (يركب)", "Wir **kaufen** am Samstag **ein**."],
        ["**aus-**", "خروج / إطفاء", "aussteigen (ينزل) / ausmachen (يطفئ)", "Er **steigt** am Bahnhof **aus**."],
        ["**mit-**", "مرافقة / معاً", "mitkommen (يأتي مع) / mitbringen (يجلب معه)", "**Kommst** du heute Abend **mit**?"],
        ["**fern-**", "عن بُعد / تلفاز", "fernsehen (يشاهد التلفاز)", "Peter **sieht** jeden Abend **fern**."],
        ["**zu-**", "إغلاق / نحو", "zumachen (يغلق) / zuhören (ينصت)", "Bitte **mach** das Fenster **zu**!"]
      ]
    },
    {
      type: "text",
      content: "ماذا يحدث عند وجود **فعل ناقص (Modalverb)** مثل können أو müssen؟\nعند وجود فعل ناقص، يتولى الفعل الناقص المركز الثاني ويصرف، أما الفعل المنفصل فيعود إلى **صيغته الأصلية (مصدر متصل Infinitiv)** ويوضع في نهاية الجملة **دون أن ينفصل**!"
    },
    {
      type: "table",
      headers: ["نوع الجملة", "المثال الألماني", "الترجمة والملاحظة"],
      rows: [
        ["جملة عادية (ينفصل الفعل)", "Ich **stehe** jeden Morgen früh **auf**.", "أستيقظ كل صباح باكراً (auf ذهبت للآخر)."],
        ["مع فعل ناقص (لا ينفصل الفعل!)", "Ich muss jeden Morgen früh **aufstehen**.", "يجب أن أستيقظ باكراً (aufstehen كلمة واحدة في المصدر)."]
      ]
    },
    {
      type: "text",
      content: "مقارنة هامة: **الأفعال غير المنفصلة (Untrennbare Verben)**:\nهناك سوابق لا تنفصل أبداً عن أصل الفعل وتبقى متصلة به دائماً في الحاضر والماضي والأمر. أشهرها:"
    },
    {
      type: "rule",
      content: "احفظ السوابق غير المنفصلة: **be- , ver- , ent- , er- , zer- , ge- , emp- , miss-**.\nأمثلة: **verstehen** (يفهم ← Ich verstehe)، **bekommen** (يحصل على ← Er bekommt)، **bezahlen** (يدفع ← Wir bezahlen). لا تفصل هذه السوابق إطلاقاً!"
    },
    {
      type: "text",
      content: "سر النطق (Betonung): في الأفعال المنفصلة يكون التشديد الصوتي (النبرة) دائماً على السابقة: **ÁUF**stehen, **ÉIN**kaufen. أما الأفعال غير المنفصلة فالنبرة على جذر الفعل وليس السابقة: ver**STÉH**en, be**KÓMM**en."
    }
  ],

  // 3. الأمثلة (8+ أمثلة ناطقة مع إبراز القاعدة والترجمة)
  examples: [
    {
      de: "Ich **stehe** jeden Morgen um 6:30 Uhr **auf**.",
      ar: "أنا أستيقظ كل صباح في الساعة السادسة والنصف.",
      highlight: "stehe auf",
      audio: true,
      note: "الفعل aufstehen: صرفنا stehe في المركز 2 ونقلنا auf لآخر الجملة"
    },
    {
      de: "Er **ruft** seine Eltern jeden Sonntag **an**.",
      ar: "هو يتصل بوالديه هاتفياً كل يوم أحد.",
      highlight: "ruft an",
      audio: true,
      note: "الفعل anrufen: صرفنا ruft ونقلنا an إلى نهاية الجملة"
    },
    {
      de: "Wir **kaufen** heute im neuen Supermarkt **ein**.",
      ar: "نحن نتسوق اليوم في السوبرماركت الجديد.",
      highlight: "kaufen ein",
      audio: true,
      note: "الفعل einkaufen: السابقة ein في آخر الجملة"
    },
    {
      de: "Der Zug nach Frankfurt **fährt** um 14:15 Uhr **ab**.",
      ar: "القطار المتجه إلى فرانكفورت ينطلق في الساعة 14:15.",
      highlight: "fährt ab",
      audio: true,
      note: "الفعل abfahren شاذ (a→ä) ومنفصل: fährt في المركز 2 و ab في النهاية"
    },
    {
      de: "Wann **fängt** der Deutschkurs **an**?",
      ar: "متى يبدأ كورس اللغة الألمانية؟",
      highlight: "fängt an",
      audio: true,
      note: "anfangen شاذ (fängt) والسابقة an في نهاية السؤال"
    },
    {
      de: "Ich muss heute leider sehr früh **aufstehen**.",
      ar: "للأسف يجب عليّ أن أستيقظ مبكراً جداً اليوم.",
      highlight: "aufstehen",
      audio: true,
      note: "مع الفعل الناقص müssen يبقى aufstehen في المصدر متصلاً بالكامل في النهاية"
    },
    {
      de: "Kannst du mich bitte später **anrufen**?",
      ar: "هل يمكنك أن تتصل بي لاحقاً من فضلك؟",
      highlight: "anrufen",
      audio: true,
      note: "مع الفعل الناقص können يبقى anrufen في المصدر متصلاً في النهاية"
    },
    {
      de: "Am Abend **sieht** die Familie gerne zusammen **fern**.",
      ar: "في المساء تشاهد الأسرة التلفاز معاً بسرور.",
      highlight: "sieht fern",
      audio: true,
      note: "fernsehen: sehen يتحول e→ie مع الغائب (sieht)، والسابقة fern في النهاية"
    },
    {
      de: "Ich **verstehe** diese grammatische Regel sehr gut.",
      ar: "أنا أفهم هذه القاعدة النحوية جيداً جداً.",
      highlight: "verstehe",
      audio: true,
      note: "مقارنة: الفعل verstehen غير منفصل لأن ver- سابقة متصلة ثابتة"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في اللغة العربية الفعل يأتي كلمة واحدة غير مجزأة (أستيقظ، أتصل)، أما في الألمانية فإنك 'تقسم الفعل نصفين' وتضع نصفه الثاني في آخر الجملة حتى وإن كانت الجملة بطول سطرين!",
    "إياك وفصل الفعل عندما يكون معك في الجملة فعل ناقص (Modalverb مثل können, müssen, wollen)! في هذه الحالة يعود الفعل قطعة واحدة غير منفصلة في نهاية الجملة: Ich will **einkaufen** (وليس Ich will ein... kaufen).",
    "انتبه للأفعال غير المنفصلة التي تبدأ بـ (be-, ver-, zer-, ent-, er-): هذه لا تنفصل إطلاقاً، فلا تقل أبداً *Ich stehe dich ver* بل قل دائماً: **Ich verstehe dich**."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "الأفعال المنفصلة تنقسم في الجملة العادية: الجذر في المركز 2 والسابقة في نهاية الجملة.",
    "أشهر السوابق المنفصلة: auf-, an-, ab-, ein-, aus-, mit-, vor-, zu-, fern-.",
    "مع الأفعال الناقصة (können, müssen...): يظل الفعل المنفصل قطعة واحدة متصلة بصيغة المصدر في نهاية الجملة.",
    "السوابق be-, ver-, ent-, er-, zer- غير منفصلة أبداً وتبقى ملتصقة بالفعل.",
    "نبرة الصوت (Betonung) تقع على السابقة في الفعل المنفصل، بينما لا نبرة على السوابق غير المنفصلة."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "aufstehen", plural: "-", ar: "يستيقظ / ينهض من السرير", article: "-", example: "Ich stehe um 7 Uhr auf." },
    { de: "anrufen", plural: "-", ar: "يتصل هاتفياً", article: "-", example: "Er ruft seinen Arzt an." },
    { de: "einkaufen", plural: "-", ar: "يتسوق / يشتري مشتريات", article: "-", example: "Wir kaufen im Supermarkt ein." },
    { de: "mitkommen", plural: "-", ar: "يأتي مع / يرافق", article: "-", example: "Kommst du ins Kino mit?" },
    { de: "fernsehen", plural: "-", ar: "يشاهد التلفاز", article: "-", example: "Er sieht am Abend fern." },
    { de: "der Supermarkt", plural: "die Supermärkte", ar: "السوبرماركت / المتجر", article: "der", example: "Ich gehe in den Supermarkt." },
    { de: "der Bahnhof", plural: "die Bahnhöfe", ar: "محطة القطار", article: "der", example: "Wir treffen uns am Bahnhof." },
    { de: "verstehen", plural: "-", ar: "يفهم (فعل غير منفصل)", article: "-", example: "Ich verstehe die Frage nicht." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "أين نضع السابقة المنفصلة (Präfix) في الجملة الخبرية العادية؟",
      options: [
        "مباشرة بعد الفاعل",
        "في المركز الثاني بجانب الفعل",
        "في نهاية الجملة تماماً",
        "في بداية الجملة قبل الفاعل"
      ],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "في الجملة الرئيسية البسيطة، يوضع الفعل المصرف في المركز الثاني، وتذهب السابقة المنفصلة إلى آخر الجملة تماماً."
    },
    {
      type: "fill-blank",
      question: "أكمل الفراغ بالسابقة المناسبة للفعل aufstehen:",
      sentence: "Ich wache um 6 Uhr auf und stehe um 6:30 Uhr ___.",
      answer: "auf",
      accept: ["auf"],
      explanation: "الفعل هو aufstehen، وبالتالي السابقة المنفصلة في آخر الجملة هي auf."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين جملة ألمانية صحيحة:",
      words: ["Er", "ruft", "heute", "seine", "Mutter", "an"],
      answer: "Er ruft heute seine Mutter an",
      correct: "Er ruft heute seine Mutter an",
      correctOrder: ["Er", "ruft", "heute", "seine", "Mutter", "an"],
      explanation: "الفاعل Er (1)، الفعل المصرف ruft (2)، باقي الجملة heute seine Mutter، والسابقة an في النهاية."
    },
    {
      type: "multiple-choice",
      question: "اختر الجملة الصحيحة عند استخدام الفعل الناقص können مع anrufen:",
      options: [
        "Kannst du mich morgen an rufen?",
        "Kannst du mich morgen anrufen?",
        "Du kannst mich an morgen rufen?",
        "Kannst anrufen du mich morgen?"
      ],
      answer: 1,
      correct: 1,
      correctIndex: 1,
      explanation: "مع الأفعال الناقصة (können) يأتي الفعل المنفصل ككلمة واحدة متصلة بصيغة المصدر (anrufen) في نهاية الجملة."
    },
    {
      type: "match",
      question: "طابق بين الفعل المنفصل ومعناه الصحيح بالعربية:",
      pairs: [
        { left: "يستيقظ من النوم", right: "aufstehen" },
        { left: "يتصل هاتفياً", right: "anrufen" },
        { left: "يتسوق بضائع", right: "einkaufen" },
        { left: "يشاهد التلفاز", right: "fernsehen" }
      ],
      explanation: "هذه من أشهر وأهم الأفعال المنفصلة التي تستخدم يومياً في المستوى A1."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في موقع السابقة المنفصلة في الجملة التالية:",
      text: "Thomas anruft seine Freundin.",
      sentence: "Thomas anruft seine Freundin.",
      incorrect: "Thomas anruft seine Freundin.",
      answer: "Thomas ruft seine Freundin an.",
      corrected: "Thomas ruft seine Freundin an.",
      accept: ["Thomas ruft seine Freundin an.", "Thomas ruft seine Freundin an"],
      explanation: "لا يجوز إبقاء السابقة ملتصقة في المضارع! الصحيح هو فصلها وإرسالها للنهاية: Thomas ruft seine Freundin an."
    },
    {
      type: "fill-blank",
      question: "أكمل الفراغ بالسابقة المناسبة للفعل einkaufen:",
      sentence: "Wir gehen in den Supermarkt und kaufen viele Lebensmittel ___.",
      answer: "ein",
      accept: ["ein"],
      explanation: "الفعل هو einkaufen، لذا تذهب السابقة ein إلى آخر الجملة."
    },
    {
      type: "translate",
      question: "ترجم الجملة التالية إلى الألمانية:",
      text: "القطار ينطلق في الساعة الثامنة.",
      from: "القطار ينطلق في الساعة الثامنة.",
      answer: "Der Zug fährt um acht Uhr ab.",
      accept: [
        "Der Zug fährt um acht Uhr ab.",
        "Der Zug fährt um acht Uhr ab",
        "Der Zug fährt um 8 Uhr ab.",
        "Der Zug fährt um 8 Uhr ab"
      ],
      explanation: "الفعل abfahren ينفصل: fährt في المركز 2 والسابقة ab في نهاية الجملة."
    },
    {
      type: "multiple-choice",
      question: "أي من الأفعال التالية هو فعل غير منفصل (Untrennbares Verb)؟",
      options: [
        "aufmachen",
        "mitbringen",
        "bezahlen",
        "einladen"
      ],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "السابقة be- هي سابقة غير منفصلة دائماً، فالفعل bezahlen لا ينفصل أبداً (Ich bezahle)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في كتابة الفعل مع الفعل الناقص wollen:",
      text: "Ich will morgen früh auf stehen.",
      sentence: "Ich will morgen früh auf stehen.",
      incorrect: "Ich will morgen früh auf stehen.",
      answer: "Ich will morgen früh aufstehen.",
      corrected: "Ich will morgen früh aufstehen.",
      accept: ["Ich will morgen früh aufstehen.", "Ich will morgen früh aufstehen"],
      explanation: "مع الفعل الناقص، يكتب الفعل المنفصل ككلمة واحدة متصلة في المصدر: aufstehen."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة اختيار من متعدد)
  quiz: [
    {
      type: "multiple-choice",
      question: "ما هي الجملة الصحيحة للفعل aufstehen مع الفاعل (Ich)؟",
      options: [
        "Ich aufstehe um sieben Uhr.",
        "Ich stehe um sieben Uhr auf.",
        "Ich stehe auf um sieben Uhr.",
        "Aufstehe ich um sieben Uhr."
      ],
      answer: 1,
      correct: 1,
      correctIndex: 1,
      explanation: "القاعدة: الفعل المصرف stehe في المركز 2 والسابقة auf في نهاية الجملة تماماً."
    },
    {
      type: "multiple-choice",
      question: "كيف نصرف الفعل fernsehen مع الضمير (er) في جملة رئيسية؟",
      options: [
        "Er fernsieht jeden Abend.",
        "Er seht jeden Abend fern.",
        "Er sieht jeden Abend fern.",
        "Er ferngesehen jeden Abend."
      ],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "الفعل fernsehen شاذ يتغير فيه حرف e إلى ie (er sieht) والسابقة fern تذهب إلى آخر الجملة."
    },
    {
      type: "multiple-choice",
      question: "أي من هذه السوابق لا تنفصل أبداً عن الفعل؟",
      options: [
        "an-",
        "aus-",
        "ver-",
        "mit-"
      ],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "السابقة ver- هي سابقة غير منفصلة دائماً (مثل verstehen, verkaufen, verlieren)."
    },
    {
      type: "multiple-choice",
      question: "اختر الجملة الصحيحة تماماً نحويّاً:",
      options: [
        "Wann fängt der Film an?",
        "Wann anfängt der Film?",
        "Wann fängt an der Film?",
        "Wann fangt der Film an?"
      ],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "anfangen شاذ (er fängt) والسابقة an تأتي في نهاية جملة السؤال."
    },
    {
      type: "multiple-choice",
      question: "ما هو تصريف الفعل mitkommen في: 'Ihr müsst heute ___'؟",
      options: [
        "mit kommt",
        "mitkommen",
        "kommt mit",
        "mitzukommen"
      ],
      answer: 1,
      correct: 1,
      correctIndex: 1,
      explanation: "مع الفعل الناقص müsst، يأتي الفعل في نهاية الجملة بصيغة المصدر متصلاً بالكامل (mitkommen)."
    }
  ]
};

window.lessons["a1-review-08"] = window.LESSONS["a1-review-08"];
