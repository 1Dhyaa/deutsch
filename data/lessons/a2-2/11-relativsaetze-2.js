// data/lessons/a2-2/11-relativsaetze-2.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-2-11"] = {
  id: "a2-2-11",
  level: "a2-2",
  order: 11,
  slug: "relativsaetze-2",
  title: {
    de: "Relativsätze (2) [Akkusativ]",
    ar: "جمل الموصول (2): حالة النصب (den, die, das, die)"
  },
  tags: ["relativsatz", "akkusativ", "nebensatz", "grammatik", "a2-2"],

  // 1. الهدف من الدرس
  goal: "ستتعلم صياغة جمل الموصول عندما يكون ضمير الوصل في حالة النصب (Akkusativ) كمفعول به مباشر، مع التركيز على تحول المذكر حصراً من der إلى den، وثبات بقية الضمائر.",

  // 2. الشرح المبسط مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "في الدرس السابق تعلمنا جمل الموصول عندما يكون ضمير الوصل فاعلاً (Nominativ). أما هنا، فإن ضمير الوصل يقع **مفعولاً به مباشراً (Akkusativ-Objekt)** لفعل جملة الصلة؛ أي أن هناك فاعلاً آخر يقوم بالفعل عليه (مثل: هذا هو الفيلم الذي *شاهدتـه أنا*)."
    },
    {
      type: "rule",
      content: "قاعدة ذهبية لتحديد ضمير الوصل:\n1. **الجنس والعدد (مذكر، مؤنث، محايد، جمع)**: يحددهما الاسم الموصوف في الجملة الأولى.\n2. **الحالة الإعرابية (Nominativ أو Akkusativ)**: يحددها موقع الضمير داخل جملة الصلة نفسها!"
    },
    {
      type: "table",
      headers: ["الجنس / العدد", "Nominativ (فاعل)", "Akkusativ (مفعول به)", "مثال توضيحي في Akkusativ"],
      rows: [
        ["مذكر (Maskulin)", "der", "**den** ⚠️", "Das ist der Film, **den** ich gestern gesehen habe."],
        ["مؤنث (Feminin)", "die", "**die**", "Das ist die Kamera, **die** ich gekauft habe."],
        ["محايد (Neutrum)", "das", "**das**", "Das ist das Buch, **das** ich gerade lese."],
        ["جمع (Plural)", "die", "**die**", "Das sind die Freunde, **die** ich eingeladen habe."]
      ]
    },
    {
      type: "rule",
      content: "لاحظ التغيير:\nالضمير الوحيد الذي يتغير في حالة النصب (Akkusativ) هو **المذكر**: يتحول من **der** إلى **den**! أما المؤنث (die) والمحايد (das) والجمع (die) فتبقى مطابقة تماماً لشكلها في Nominativ."
    },
    {
      type: "text",
      content: "ترتيب الجملة والترقيم:\nكما هو الحال في جميع الجمل الفرعية، فإن **الفاصلة إجبارية** قبل ضمير الوصل، و**الفعل المُصرّف ينتقل إلى نهاية جملة الصلة تماماً**. إذا كانت جملة الموصول معترضة في وسط الجملة، تُحاط بفاصلتين: *Der Kaffee, **den** du kochst, schmeckt wunderbar.*"
    }
  ],

  // 3. الأمثلة العملية الناطقة (9 أمثلة مع ملاحظات إعرابية)
  examples: [
    {
      de: "Das ist der Film, **den ich gestern gesehen habe**.",
      ar: "هذا هو الفيلم الذي شاهدته بالأمس.",
      highlight: "den ich gestern gesehen habe",
      audio: true,
      note: "der Film مذكر، وموقعه في جملة الصلة مفعول به لـ gesehen habe ← den"
    },
    {
      de: "Hier ist das Buch, **das ich dir schenken möchte**.",
      ar: "ها هو الكتاب الذي أود أن أهديك إياه.",
      highlight: "das ich dir schenken möchte",
      audio: true,
      note: "das Buch محايد ← ضمير الوصل das في Akkusativ، والفعل الناقص möchte في النهاية"
    },
    {
      de: "Kennst du die Frau, **die mein Bruder geheiratet hat**?",
      ar: "هل تعرف السيدة التي تزوجها أخي؟",
      highlight: "die mein Bruder geheiratet hat",
      audio: true,
      note: "die Frau مؤنث ← ضمير الوصل die، والفاعل في جملة الصلة هو mein Bruder"
    },
    {
      de: "Das sind die Fotos, **die wir im Urlaub gemacht haben**.",
      ar: "هذه هي الصور التي التقطناها في العطلة.",
      highlight: "die wir im Urlaub gemacht haben",
      audio: true,
      note: "die Fotos جمع ← ضمير الوصل die، والفعل المساعد haben في النهاية"
    },
    {
      de: "Der Tee, **den du bestellt hast**, ist sehr heiß.",
      ar: "الشاي الذي طلبته ساخن جداً.",
      highlight: "den du bestellt hast",
      audio: true,
      note: "جملة معترضة: der Tee مذكر ← den، ثم تكملة الجملة الرئيسية: ist sehr heiß"
    },
    {
      de: "Ich repariere den Laptop, **den mein Vater mir gegeben hat**.",
      ar: "أنا أصلح الحاسوب المحمول الذي أعطاني إياه والدي.",
      highlight: "den mein Vater mir gegeben hat",
      audio: true,
      note: "der Laptop مذكر ← den"
    },
    {
      de: "Die Einladung, **die wir gestern bekommen haben**, ist wunderschön.",
      ar: "الدعوة التي تلقيناها بالأمس جميلة للغاية.",
      highlight: "die wir gestern bekommen haben",
      audio: true,
      note: "die Einladung مؤنث ← die"
    },
    {
      de: "Der Kollege, **den alle Mitarbeiter schätzen**, feiert Jubiläum.",
      ar: "الزميل الذي يقدره جميع الموظفين يحتفل بذكرى عمله.",
      highlight: "den alle Mitarbeiter schätzen",
      audio: true,
      note: "alle Mitarbeiter هم الفاعل، و den هو المفعول به في Akkusativ"
    },
    {
      de: "Wo ist der Schlüssel, **den ich gerade gesucht habe**?",
      ar: "أين المفتاح الذي كنت أبحث عنه للتو؟",
      highlight: "den ich gerade gesucht habe",
      audio: true,
      note: "der Schlüssel مذكر ← den"
    }
  ],

  // 4. نصائح للناطقين بالعربية
  arabicTips: [
    "عدم تكرار الضمير العائد: في العربية نضع ضميراً متصلاً عائداً على المفعول به: «الفيلم الذي شاهدتـ**ـه**»، أما في الألمانية فالضمير **den** يحل محل الاسم والمفعول معاً! يمنع منعاً باتاً قول: *der Film, den ich ihn gesehen habe*!",
    "تذكر دائماً أن المذكر وحده هو الذي يتغير: إذا كان الاسم الموصوف مذكر (der)，وكان مفعولاً به في جملة الوصل، يتحول ضمير الوصل حتماً إلى **den**. أما المؤنث (die) والمحايد (das) والجمع (die) فلا تتغير أبداً بين Nominativ و Akkusativ.",
    "ابحث عن فاعل جملة الصلة: إذا رأيت فاعلاً داخل جملة الصلة (مثل: ich, du, er, wir, der Chef...)، فاعلم مباشرة أن ضمير الوصل ليس Nominativ بل Akkusativ (أو Dativ)!"
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "يُستخدم Akkusativ لضمير الوصل عندما يكون مفعولاً به مباشراً في جملة الصلة",
    "ضمائر الوصل في Akkusativ: den (مذكر)، die (مؤنث)، das (محايد)، die (جمع)",
    "المذكر هو الوحيد الذي يتغير شكله من der إلى den",
    "لا يجوز إضافة أي ضمير عائد (مثل ihn أو es) داخل جملة الصلة",
    "الفعل المُصرّف يأتي في نهاية جملة الموصول وتسبقها فاصلة إجبارية"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "der Film", plural: "die Filme", ar: "الفيلم", article: "der", example: "Der Film, den wir sahen, war spannend." },
    { de: "der Schlüssel", plural: "die Schlüssel", ar: "المفتاح", article: "der", example: "Ich suche den Schlüssel, den ich verloren habe." },
    { de: "die Einladung", plural: "die Einladungen", ar: "الدعوة", article: "die", example: "Danke für die Einladung, die du geschickt hast." },
    { de: "der Laptop", plural: "die Laptops", ar: "الحاسوب المحمول", article: "der", example: "Der Laptop, den ich nutze, ist neu." },
    { de: "die Kamera", plural: "die Kameras", ar: "الكاميرا / آلة التصوير", article: "die", example: "Die Kamera, die sie kaufte, macht tolle Fotos." },
    { de: "bestellen", plural: "bestellt, hat bestellt", ar: "يطلب / يوصي على", article: "", example: "Ich trinke den Kaffee, den du bestellt hast." },
    { de: "heiraten", plural: "heiratet, hat geheiratet", ar: "يتزوج", article: "", example: "Er hat die Frau geheiratet, die er liebt." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Das ist der Film, ___ ich gestern im Kino gesehen habe. (der Film = مذكر)",
      options: ["den", "der", "das", "die"],
      correct: 0,
      explanation: "der Film اسم مذكر وهو مفعول به للفعل gesehen habe في جملة الصلة (أنا الفاعل ich)، لذا نستخدم den."
    },
    {
      type: "fill-blank",
      sentence: "Hier ist der Kaffee, ___ du bestellt hast. (der Kaffee = مذكر)",
      answer: "den",
      accept: ["den"],
      explanation: "der Kaffee مذكر وموقعه مفعول به في جملة الصلة (du الفاعل)، فيتحول ضمير الوصل إلى den."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين جملة موصول صحيحة في Akkusativ:",
      words: ["ist", "lese", "Das", "das", "ich", "Buch", "das"],
      correct: "Das ist das Buch das ich lese",
      accept: [
        "Das ist das Buch das ich lese",
        "Das ist das Buch, das ich lese.",
        "Das ist das Buch, das ich lese"
      ],
      explanation: "Das ist das Buch + فاصلة + ضمير الوصل المحايد (das) + الفاعل (ich) + الفعل في النهاية (lese)."
    },
    {
      type: "multiple-choice",
      question: "Das ist die Tasche, ___ meine Schwester gekauft hat. (die Tasche = مؤنث)",
      options: ["die", "der", "den", "das"],
      correct: 0,
      explanation: "die Tasche اسم مؤنث، وضمير الوصل للمؤنث في حالة Akkusativ هو die دون تغيير."
    },
    {
      type: "match",
      question: "طابق بين الجملة وضمير الوصل المناسب في Akkusativ:",
      pairs: [
        { left: "der Kuchen (مذكر)", right: "den ich backe" },
        { left: "das Lied (محايد)", right: "das ich höre" },
        { left: "die Pizza (مؤنث)", right: "die ich esse" },
        { left: "die Bücher (جمع)", right: "die ich kaufe" }
      ],
      explanation: "المذكر يأخذ den في Akkusativ، بينما المحايد das، المؤنث die، والجمع die."
    },
    {
      type: "error-correction",
      sentence: "Das ist der Roman, den ich ihn gelesen habe.",
      corrected: "Das ist der Roman, den ich gelesen habe.",
      accept: [
        "Das ist der Roman, den ich gelesen habe",
        "Das ist der Roman, den ich gelesen habe."
      ],
      explanation: "خطأ ناتج عن الترجمة من العربية: لا نضع الضمير العائد (ihn) لأن ضمير الوصل den يحل محله بالكامل."
    },
    {
      type: "translate",
      from: "أين هو المفتاح الذي تبحث عنه؟",
      answer: "Wo ist der Schlüssel, den du suchst?",
      accept: [
        "Wo ist der Schlüssel, den du suchst?",
        "Wo ist der Schlüssel, den du suchst",
        "Wo ist der Schlüssel, den Sie suchen?",
        "Wo ist der Schlüssel, den Sie suchen"
      ],
      explanation: "der Schlüssel مذكر ومفعول به لـ suchst ← den du suchst."
    },
    {
      type: "fill-blank",
      sentence: "Die Fotos, ___ wir gemacht haben, sind sehr schön. (die Fotos = جمع)",
      answer: "die",
      accept: ["die"],
      explanation: "die Fotos جمع، وضمير الوصل للجمع في حالة Akkusativ هو die."
    },
    {
      type: "word-order",
      question: "رتب الجملة المعترضة: (الشاي الذي شربته كان لذيذاً)",
      words: ["war", "den", "lecker", "du", "Der", "Tee", "hast", "getrunken"],
      correct: "Der Tee den du getrunken hast war lecker",
      accept: [
        "Der Tee den du getrunken hast war lecker",
        "Der Tee, den du getrunken hast, war lecker.",
        "Der Tee, den du getrunken hast, war lecker"
      ],
      explanation: "Der Tee + جملة الموصول المعترضة (den du getrunken hast) + تكملة الرئيسية (war lecker)."
    },
    {
      type: "multiple-choice",
      question: "ما هو الضمير الوحيد الذي يختلف شكله بين Nominativ و Akkusativ في جمل الموصول؟",
      options: [
        "المذكر فقط (der يصبح den)",
        "المؤنث فقط (die تصبح der)",
        "المحايد فقط (das يصبح dem)",
        "الجمع فقط (die تصبح denen)"
      ],
      correct: 0,
      explanation: "في حالة النصب Akkusativ، المذكر فقط هو الذي يتغير من der إلى den، وبقية الضمائر تبقى كما هي."
    }
  ],

  // 8. الاختبار النهائي (5 أسئلة متعددة الخيارات)
  quiz: [
    {
      type: "multiple-choice",
      question: "Der Mann, ___ ich gestern getroffen habe, ist mein alter Lehrer.",
      options: ["den", "der", "dem", "die"],
      correct: 0,
      explanation: "der Mann مذكر، والفعل getroffen habe يتطلب مفعولاً به (Akkusativ) والفاعل هو ich، لذا نختار den."
    },
    {
      type: "multiple-choice",
      question: "Das Auto, ___ mein Onkel gekauft hat, ist sehr modern.",
      options: ["das", "den", "dem", "die"],
      correct: 0,
      explanation: "das Auto محايد، وضمير الوصل في Akkusativ للمحايد هو das."
    },
    {
      type: "multiple-choice",
      question: "Die Äpfel, ___ du mitgebracht hast, schmecken süß.",
      options: ["die", "den", "denen", "das"],
      correct: 0,
      explanation: "die Äpfel جمع، وضمير الوصل للجمع في Akkusativ هو die."
    },
    {
      type: "multiple-choice",
      question: "Kennst du die Frau, ___ Herr Müller liebt?",
      options: ["die", "der", "den", "das"],
      correct: 0,
      explanation: "die Frau مؤنث، وضمير الوصل للمؤنث في حالة النصب هو die."
    },
    {
      type: "multiple-choice",
      question: "أي جملة موصول صحيحة 100% قواعدياً؟",
      options: [
        "Das ist der Tisch, den ich gestern gekauft habe.",
        "Das ist der Tisch, der ich gestern gekauft habe.",
        "Das ist der Tisch, den ich gestern gekauft habe ihn.",
        "Das ist der Tisch den habe ich gestern gekauft."
      ],
      correct: 0,
      explanation: "الجملة الأولى صحيحة: den للمذكر في Akkusativ، بدون ضمير عائد زائد، والفعل habe في نهاية الجملة."
    }
  ]
};

window.lessons = window.LESSONS;
