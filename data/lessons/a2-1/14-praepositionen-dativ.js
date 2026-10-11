// data/lessons/a2-1/14-praepositionen-dativ.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-14"] = {
  id: "a2-1-14",
  level: "a2-1",
  order: 14,
  slug: "praepositionen-dativ",
  title: {
    de: "Präpositionen mit Dativ",
    ar: "حروف الجر التي تفرض حالة الجر (Dativ)"
  },
  tags: ["grammatik", "praepositionen", "dativ", "a2"],

  // 1. الهدف
  goal: "ستتقن في هذا الدرس حروف الجر الألمانية التي تتطلب حالة الجر (Dativ) دائماً (aus, bei, mit, nach, seit, von, zu, gegenüber)، وتتعلم تصريف الأدوات والضمائر بعدها والإدغامات اليومية الشائعة (beim, zum, zur, vom).",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "تُعد مجموعة حروف الجر الخاصة بحالة **Dativ** من أهم ركائز قواعد اللغة الألمانية. القاعدة الذهبية هنا: **أي اسم أو ضمير يأتي بعد أحد هذه الحروف الثمانية يتحول فوراً وبلا استثناء إلى حالة الجر (Dativ)**!"
    },
    {
      type: "rule",
      content: "احفظ حروف Dativ بالترتيب الإيقاعي الشهير الذي يسهل تذكره مدى الحياة:<br>• **aus** (من: خروج / منشأ)<br>• **bei** (عند / لدى شخص أو عمل)<br>• **mit** (مع / بواسطة وسيلة نقل)<br>• **nach** (إلى مدن ودول / بعد زمنياً)<br>• **seit** (منذ فترة مستمرة)<br>• **von** (من مكان / من شخص / ملكية)<br>• **zu** (إلى شخص أو مبنى)<br>• **gegenüber** (مقابل / قبالة)"
    },
    {
      type: "table",
      headers: ["حرف الجر", "الاستخدام الأساسي", "مثال ألماني", "المعنى بالعربية"],
      rows: [
        ["aus", "خروج من مكان مغلق، المنشأ، المادة", "Ich komme aus der Türkei.", "أنا قادم من تركيا."],
        ["bei", "الوجود عند شخص، أو في شركة/عمل", "Er wohnt bei seinen Eltern.", "هو يسكن عند والديه."],
        ["mit", "المرافقة (مع)، وسائل المواصلات (بواسطة)", "Ich fahre mit dem Zug.", "أسافر بواسطة القطار."],
        ["nach", "إلى (مدن/دول بلا أداة)، بَعد (زمن)", "Nach dem Unterricht gehe ich essen.", "بعد الدرس سأذهب لتناول الطعام."],
        ["seit", "منذ (حدث بدأ في الماضي ومستمر حتى الآن)", "Ich lebe seit einem Jahr in Berlin.", "أعيش في برلين منذ سنة."],
        ["von", "من (نقطة بداية/شخص)، الملكية", "Das ist ein Brief von meiner Oma.", "هذه رسالة من جدتي."],
        ["zu", "إلى (الذهاب لشخص أو مؤسسة/مكان)", "Ich gehe heute zum Arzt.", "أنا ذاهب اليوم إلى الطبيب."],
        ["gegenüber", "مقابل / قبالة (موقع جغرافي)", "Die Bank liegt der Post gegenüber.", "البنك يقع مقابل مكتب البريد."]
      ]
    },
    {
      type: "text",
      content: "تذكر كيف تتغير أدوات الأسماء في حالة الجر (**Dativ**):"
    },
    {
      type: "table",
      headers: ["النوع / الجنس", "الرفع (Nominativ)", "الجر (Dativ)", "النهاية المضافة للاسم", "مثال مع mit"],
      rows: [
        ["المذكر (Maskulin)", "der / ein / mein", "dem / einem / meinem", "لا يضاف شيء للاسم", "mit **dem** / **meinem** Vater"],
        ["المحايد (Neutral)", "das / ein / mein", "dem / einem / meinem", "لا يضاف شيء للاسم", "mit **dem** / **meinem** Kind"],
        ["المؤنث (Feminin)", "die / eine / meine", "der / einer / meiner", "لا يضاف شيء للاسم", "mit **der** / **meiner** Mutter"],
        ["الجمع (Plural)", "die / - / meine", "den / - / meinen", "يضاف +n للاسم (إن أمكن)", "mit **den** / **meinen** Freunde**n**"]
      ]
    },
    {
      type: "rule",
      content: "قاعدة الجمع في Dativ: تأخذ الأداة **den** ويضاف حرف **-n** إلى نهاية الاسم الجمع إن لم يكن ينتهي أصلاً بـ -n أو -s! (مثال: die Kinder ← mit den Kinder**n** | die Freunde ← mit den Freunde**n**)."
    },
    {
      type: "text",
      content: "الإدغامات السريعة في الحديث اليومي (Präposition + Artikel):"
    },
    {
      type: "table",
      headers: ["التركيب الكامل", "الإدغام الشائع", "مثال يومي", "المعنى"],
      rows: [
        ["bei + dem", "beim", "Ich bin beim Arzt.", "أنا عند الطبيب."],
        ["zu + dem", "zum", "Ich gehe zum Supermarkt.", "أنا ذاهب إلى السوبرماركت."],
        ["zu + der", "zur", "Sie fährt zur Schule.", "هي تذهب إلى المدرسة."],
        ["von + dem", "vom", "Er kommt gerade vom Bahnhof.", "هو قادم لتوه من محطة القطار."]
      ]
    },
    {
      type: "text",
      content: "الضمائر الشخصية في حالة الجر (Dativ-Pronomen):"
    },
    {
      type: "table",
      headers: ["الضمير الأصلي", "في الجر (Dativ)", "مثال مع حرف الجر", "الترجمة"],
      rows: [
        ["ich", "mir", "Kommst du mit mir?", "هل تأتي معي؟"],
        ["du", "dir", "Ich bin bei dir.", "أنا عندك / في بيتك."],
        ["er / es", "ihm", "Was sagst du zu ihm?", "ماذا تقول له؟"],
        ["sie (هي)", "ihr", "Ich gehe zu ihr.", "أنا ذاهب إليها."],
        ["wir", "uns", "Er wohnt bei uns.", "هو يسكن عندنا."],
        ["ihr", "euch", "Ich fahre mit euch.", "سأسافر معكم."],
        ["sie / Sie", "ihnen / Ihnen", "nach ihnen / von Ihnen", "بعدهم / من حضرتك"]
      ]
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Ich fahre jeden Morgen mit **dem Bus** zur Arbeit.",
      ar: "أسافر كل صباح بواسطة الحافلة إلى العمل.",
      highlight: "dem Bus",
      audio: true,
      note: "mit + der Bus (مذكر) ← dem Bus | zu + die Arbeit ← zur Arbeit"
    },
    {
      de: "Heute Nachmittag muss ich dringend **zum Arzt** gehen.",
      ar: "بعد ظهر اليوم يجب أن أذهب بشكل عاجل إلى الطبيب.",
      highlight: "zum Arzt",
      audio: true,
      note: "zum = zu + dem (der Arzt مذكر Dativ)"
    },
    {
      de: "Sie wohnt seit **einem Monat** in dieser schönen Wohnung.",
      ar: "هي تسكن منذ شهر واحد في هذه الشقة الجميلة.",
      highlight: "einem Monat",
      audio: true,
      note: "seit تفرض Dativ: der Monat ← einem Monat"
    },
    {
      de: "Wir kommen gerade **aus der Schweiz** zurück.",
      ar: "نحن عائدون لتونا من سويسرا.",
      highlight: "aus der Schweiz",
      audio: true,
      note: "aus تفرض Dativ: die Schweiz (مؤنث) ← der Schweiz"
    },
    {
      de: "Ich habe gestern lange mit **meinen Kollegen** gesprochen.",
      ar: "تحدثتُ بالأمس طويلاً مع زملائي.",
      highlight: "meinen Kollegen",
      audio: true,
      note: "mit + الجمع في Dativ: meine Kollegen ← meinen Kollegen"
    },
    {
      de: "Er arbeitet schon seit drei Jahren **bei Siemens**.",
      ar: "هو يعمل منذ ثلاث سنوات لدى شركة سيمنز.",
      highlight: "bei Siemens",
      audio: true,
      note: "bei تستخدم للعمل لدى الشركات والأشخاص"
    },
    {
      de: "Nach **dem Essen** trinke ich gerne einen Espresso.",
      ar: "بعد تناول الطعام أحب أن أشرب قهوة إسبريسو.",
      highlight: "dem Essen",
      audio: true,
      note: "nach تفرض Dativ: das Essen (محايد) ← dem Essen"
    },
    {
      de: "Die Post liegt direkt **dem Bahnhof gegenüber**.",
      ar: "مكتب البريد يقع مباشرة قبالة محطة القطار.",
      highlight: "dem Bahnhof gegenüber",
      audio: true,
      note: "gegenüber تفرض Dativ وتأتي غالباً بعد الاسم: dem Bahnhof gegenüber"
    },
    {
      de: "Kommst du heute Abend zu **mir** nach Hause?",
      ar: "هل ستأتي مساء اليوم لعندي إلى المنزل؟",
      highlight: "mir",
      audio: true,
      note: "zu + ich ← mir (ضمير متكلم في Dativ)"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "الفرق بين aus و von: كلاهما يُترجم بالعربية إلى «مِنْ»، لكن aus تعني الخروج من داخل مكان مغلق (aus dem Haus / aus der Tasche)، بينما von تعني الابتعاد عن نقطة ما أو مصدر (vom Bahnhof / von meiner Tante).",
    "حرف الجر seit (منذ) في الألمانية يُستخدم دائماً مع زمن المضارع (Präsens) إذا كان الفعل ما زال مستمراً! لا تقل في الماضي *Ich habe gelebt seit einem Jahr* بل قل: *Ich lebe seit einem Jahr in Berlin*.",
    "احذر نسيان إضافة -n لاسم الجمع في حالة Dativ: مثل *mit den Kindern* (وليس mit den Kinder)، و *mit den Freunden* (وليس mit den Freunde)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "حروف الجر الثمانية مع Dativ هي: aus, bei, mit, nach, seit, von, zu, gegenüber.",
    "التحويلات الأساسية: المذكر والمحايد يأخذان dem / einem / meinem، المؤنث يأخذ der / einer / meiner.",
    "الجمع في Dativ يأخذ دائماً den / meinen مع إضافة حرف -n لآخر الاسم.",
    "الإدغامات اليومية الأساسية: beim (= bei dem)، zum (= zu dem)، zur (= zu der)، vom (= von dem).",
    "حرف gegenüber يفضل الألمان وضعه بعد الاسم: dem Bahnhof gegenüber."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "der Arzt", plural: "die Ärzte", ar: "الطبيب", article: "der", example: "Ich gehe morgen zum Arzt." },
    { de: "der Bus", plural: "die Busse", ar: "الحافلة", article: "der", example: "Wir fahren mit dem Bus zur Schule." },
    { de: "der Bahnhof", plural: "die Bahnhöfe", ar: "محطة القطار", article: "der", example: "Das Hotel liegt dem Bahnhof gegenüber." },
    { de: "die Arbeit", plural: "die Arbeiten", ar: "العمل / الوظيفة", article: "die", example: "Ich fahre jeden Tag zur Arbeit." },
    { de: "die Post", plural: "-", ar: "مكتب البريد", article: "die", example: "Ich muss schnell zur Post gehen." },
    { de: "der Kollege", plural: "die Kollegen", ar: "الزميل", article: "der", example: "Ich spreche mit meinem Kollegen." },
    { de: "die Apotheke", plural: "die Apotheken", ar: "الصيدلية", article: "die", example: "Die Apotheke ist gleich um die Ecke." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich fahre jeden Morgen mit ___ Bus.",
      options: ["dem", "den", "der", "das"],
      correct: 0,
      answer: 0,
      explanation: "حرف الجر mit يفرض Dativ دائماً. اسم der Bus مذكر، ويتحول der في Dativ إلى dem."
    },
    {
      type: "fill-blank",
      question: "Ich gehe heute Nachmittag ___ Arzt.",
      sentence: "Ich gehe heute Nachmittag ___ Arzt.",
      answer: "zum",
      accept: ["zum", "zu dem"],
      explanation: "الذهاب إلى الطبيب: zu + dem Arzt تُدغم إلى zum Arzt."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (هي تعيش في برلين منذ سنة)",
      words: ["Sie", "lebt", "seit", "einem", "Jahr", "in", "Berlin", "."],
      correct: "Sie lebt seit einem Jahr in Berlin .",
      answer: "Sie lebt seit einem Jahr in Berlin .",
      accept: ["Sie lebt seit einem Jahr in Berlin.", "Sie lebt seit einem Jahr in Berlin ."],
      explanation: "الفاعل (Sie) + الفعل (lebt) + شبه الجملة الزمنية (seit einem Jahr) + المكان (in Berlin)."
    },
    {
      type: "multiple-choice",
      question: "Kommst du heute Abend zu ___?",
      options: ["mir", "mich", "ich", "mein"],
      correct: 0,
      answer: 0,
      explanation: "حرف الجر zu يتطلب ضمير في حالة الجر Dativ: ich تتحول إلى mir."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Er fährt mit die U-Bahn zur Arbeit.)",
      sentence: "Er fährt mit die U-Bahn zur Arbeit.",
      corrected: "Er fährt mit der U-Bahn zur Arbeit.",
      answer: "Er fährt mit der U-Bahn zur Arbeit.",
      accept: ["Er fährt mit der U-Bahn zur Arbeit.", "Er fährt mit der U-Bahn zur Arbeit"],
      explanation: "كلمة die U-Bahn مؤنثة، وبعد mit (Dativ) تتحول die إلى der."
    },
    {
      type: "match",
      question: "طابق كل إدغام مع التركيب الكامل له:",
      pairs: [
        { left: "beim", right: "bei dem" },
        { left: "zum", right: "zu dem" },
        { left: "zur", right: "zu der" },
        { left: "vom", right: "von dem" }
      ]
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أنا ألعب مع الأطفال.)",
      from: "أنا ألعب مع الأطفال.",
      answer: "Ich spiele mit den Kindern.",
      accept: ["Ich spiele mit den Kindern.", "Ich spiele mit den Kindern"],
      explanation: "مع الأطفال = mit den Kindern (mit تفرض Dativ، وأداة جمع Dativ هي den مع إضافة n للاسم Kindern)."
    },
    {
      type: "fill-blank",
      question: "Er wohnt noch bei ___ Eltern.",
      sentence: "Er wohnt noch bei ___ Eltern.",
      answer: "seinen",
      accept: ["seinen"],
      explanation: "كلمة die Eltern جمع، وبعد حرف الجر bei تأخذ أداة الملكية seinen في حالة Dativ."
    },
    {
      type: "multiple-choice",
      question: "Das Café liegt ___ Bahnhof gegenüber.",
      options: ["dem", "den", "der", "das"],
      correct: 0,
      answer: 0,
      explanation: "حرف gegenüber يفرض حالة Dativ: der Bahnhof تصبح dem Bahnhof."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Wir gehen zu die Schule.)",
      sentence: "Wir gehen zu die Schule.",
      corrected: "Wir gehen zur Schule.",
      answer: "Wir gehen zur Schule.",
      accept: ["Wir gehen zur Schule.", "Wir gehen zur Schule", "Wir gehen zu der Schule.", "Wir gehen zu der Schule"],
      explanation: "اسم die Schule مؤنث، وعند استخدام zu يدغم مع der ليصبح zur Schule."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Welche Präposition verlangt IMMER den Dativ?",
      options: ["mit", "durch", "ohne", "um"],
      correct: 0,
      answer: 0,
      explanation: "حرف الجر mit يفرض Dativ دائماً وبلا استثناء، بينما durch, ohne, um تفرض Akkusativ."
    },
    {
      type: "multiple-choice",
      question: "Wann gehst du ___ Friseur?",
      options: ["zum", "zu", "beim", "nach"],
      correct: 0,
      answer: 0,
      explanation: "الذهاب إلى مذكر (der Friseur) كوجهة يتطلب zu + dem = zum."
    },
    {
      type: "multiple-choice",
      question: "Ich spreche gerade mit ___ Chefin.",
      options: ["meiner", "meine", "meinen", "meinem"],
      correct: 0,
      answer: 0,
      explanation: "كلمة die Chefin مؤنثة، وبعد mit تأخذ meiner في Dativ."
    },
    {
      type: "multiple-choice",
      question: "Er kommt gerade ___ Flughafen zurück.",
      options: ["vom", "zum", "beim", "am"],
      correct: 0,
      answer: 0,
      explanation: "القدوم والعودة من مكان: von + dem Flughafen تدغم إلى vom Flughafen."
    },
    {
      type: "multiple-choice",
      question: "Ich lerne Deutsch seit ___ Jahr.",
      options: ["einem", "einen", "einer", "eines"],
      correct: 0,
      answer: 0,
      explanation: "اسم das Jahr محايد، وبعد seit (Dativ) يأخذ einem."
    }
  ]
};
window.lessons = window.LESSONS;
