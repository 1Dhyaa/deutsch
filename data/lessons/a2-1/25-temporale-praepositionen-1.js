// data/lessons/a2-1/25-temporale-praepositionen-1.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-25"] = {
  id: "a2-1-25",
  level: "a2-1",
  order: 25,
  slug: "temporale-praepositionen-1",
  title: {
    de: "Temporale Präpositionen (1) [um, am, im, vor, nach]",
    ar: "حروف الجر الزمنية (1): تحديد النقاط الزمنية"
  },
  tags: ["grammatik", "praepositionen", "temporal", "dativ", "zeit", "a2"],

  // 1. الهدف
  goal: "ستتعلم في هذا الدرس كيفية تحديد النقاط الزمنية بدقة باستخدام أهم حروف الجر الزمنية (um, am, im, vor, nach, bei)، ومتى تستخدم كلاً منها مع الساعات، الأيام، الفصول، الشهور، وحالة المجرور (Dativ).",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "تُستخدم حروف الجر الزمنية (Temporale Präpositionen) للإجابة عن السؤال الزمني الأساسي: **Wann?** (متى؟) أو **Um wie viel Uhr?** (في أي ساعة؟). تنقسم هذه الحروف إلى قسمين رئيسيين: حروف تستخدم مع تعبيرات زمنية قياسية (ساعات، أيام، شهور)، وحروف تتطلب حالة المجرور (**Dativ**) لبيان الترتيب (قبل، بعد، أثناء)."
    },
    {
      type: "text",
      content: "### 1. حروف الجر الثلاثة الكبرى لتحديد التوقيت: um و am و im"
    },
    {
      type: "table",
      headers: ["حرف الجر", "الاستخدام الزمني", "أمثلة شائعة", "المعنى بالعربية"],
      rows: [
        ["um", "الساعات الدقيقة والتوقيت المحدد", "um 8 Uhr, um 14:30 Uhr, um Mitternacht", "في تمام الساعة... / عند منتصف الليل"],
        ["am (an + dem)", "الأيام، أجزاء اليوم، التواريخ، عطلة الأسبوع", "am Montag, am Morgen, am 15. Mai, am Wochenende", "يوم... / في الصباح / في نهاية الأسبوع"],
        ["im (in + dem)", "الشهور، الفصول الأربعة، السنوات المسبوقة بـ Jahr", "im Juli, im Sommer, im Winter, im Jahr 2024", "في شهر... / في فصل... / في عام..."]
      ]
    },
    {
      type: "rule",
      content: "استثناء هام جداً: جميع أجزاء اليوم تأخذ **am** (am Morgen, am Vormittag, am Mittag, am Nachmittag, am Abend)، ما عدا الليل: نقول دائماً **in der Nacht** لأن كلمة Nacht مؤنثة وتأخذ أداة Dativ (der)!"
    },
    {
      type: "text",
      content: "### 2. حروف الجر الزمنية التي تأخذ Dativ: vor و nach و bei"
    },
    {
      type: "table",
      headers: ["حرف الجر", "الحالة الإعرابية", "المعنى والوظيفة", "أمثلة مع التغيير الإعرابي"],
      rows: [
        ["vor", "+ Dativ", "قبل (حدث أو وقت سابق)", "vor **dem** Frühstück (das) | vor **der** Prüfung (die)"],
        ["nach", "+ Dativ", "بعد (حدث أو وقت لاحق)", "nach **der** Arbeit (die) | nach **dem** Unterricht (der)"],
        ["bei / beim (bei + dem)", "+ Dativ", "أثناء / عند القيام بنشاط متزامن", "beim **Kochen** (das) | bei **der** Besprechung (die)"]
      ]
    },
    {
      type: "rule",
      content: "تذكير سريع بحالة المجرور (Dativ) مع هذه الحروف:<br>• المذكر والمحايد: der / das → **dem** (يندمج مع an ليصبح **am**، ومع in ليصبح **im**، ومع bei ليصبح **beim**).<br>• المؤنث: die → **der** (*vor der Pause*, *nach der Arbeit*).<br>• الجمع: die → **den + n** (*nach drei Wochen*, *vor zwei Jahren*)."
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Der Deutschkurs beginnt pünktlich **um 9:00 Uhr** morgens.",
      ar: "تبدأ دورة اللغة الألمانية في تمام الساعة 9:00 صباحاً.",
      audio: true,
      note: "مع الساعات الدقيقة نستخدم دائماً um"
    },
    {
      de: "**Am Montag** habe ich einen wichtigen Termin beim Arzt.",
      ar: "يوم الإثنين لدي موعد مهم لدى الطبيب.",
      audio: true,
      note: "مع أيام الأسبوع نستخدم am (an + dem)"
    },
    {
      de: "**Am Wochenende** fahren wir gerne mit dem Fahrrad an den See.",
      ar: "في عطلة نهاية الأسبوع نحب الذهاب بالدراجة إلى البحيرة.",
      audio: true,
      note: "عطلة نهاية الأسبوع تأخذ am: am Wochenende"
    },
    {
      de: "**Im Sommer** reisen viele Menschen ans Meer.",
      ar: "في فصل الصيف يسافر كثير من الناس إلى البحر.",
      audio: true,
      note: "مع فصول السنة الأربعة نستخدم im (in + dem)"
    },
    {
      de: "**Im August** sind die meisten Geschäfte in Italien geschlossen.",
      ar: "في شهر أغسطس تكون أغلب المتاجر في إيطاليا مغلقة.",
      audio: true,
      note: "مع شهور السنة نستخدم im"
    },
    {
      de: "Bitte wasch dir die Hände **vor dem Essen**!",
      ar: "من فضلك اغسل يديك قبل تناول الطعام!",
      audio: true,
      note: "vor + Dativ: das Essen ← dem Essen"
    },
    {
      de: "**Nach der Arbeit** gehe ich meistens direkt ins Fitnessstudio.",
      ar: "بعد العمل أذهب في الغالب مباشرة إلى صالة الألعاب الرياضية.",
      audio: true,
      note: "nach + Dativ: die Arbeit ← der Arbeit"
    },
    {
      de: "**Beim Kochen** höre ich am liebsten Podcasts.",
      ar: "أثناء الطهي أحب الاستماع إلى المدونات الصوتية (البودكاست).",
      audio: true,
      note: "beim = bei + dem (اسم مشتق من الفعل das Kochen في حالة Dativ)"
    },
    {
      de: "Er arbeitet oft spät **in der Nacht**.",
      ar: "هو يعمل غالباً في وقت متأخر من الليل.",
      audio: true,
      note: "الاستثناء: in der Nacht (وليس am Nacht)"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "لا تقل أبداً «in 2024» كما في الإنجليزية! في الألمانية، السنوات إما أن تأتي مجردة بدون أي حرف جر إطلاقاً: «Ich bin 1995 geboren» أو مسبوقة بعبارة: «im Jahr 2024».",
    "تذكر استثناء الليل: كل أجزاء اليوم (الصباح am Morgen، الظهر am Mittag، المساء am Abend) تأخذ am، ما عدا الليل الذي يأخذ: «in der Nacht».",
    "حرف الجر «beim» مع الأفعال المحولة لأسماء (Nominalisierung) يترجم للعربية بـ «أثناء / عند»: beim Essen (أثناء الأكل)، beim Lesen (أثناء القراءة)، beim Fahren (أثناء القيادة)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "الساعات الدقيقة: um (um 8 Uhr, um Mitternacht)",
    "الأيام وأجزاء اليوم والتواريخ: am (am Dienstag, am Abend, am 1. Mai) [ما عدا in der Nacht]",
    "الشهور والفصول: im (im Mai, im Herbst, im Winter, im Jahr 2020)",
    "vor = قبل | nach = بعد | bei/beim = أثناء (وجميعها تأخذ حالة Dativ)",
    "اندماج حروف الجر: an + dem = am | in + dem = im | bei + dem = beim"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "das Wochenende", plural: "die Wochenenden", ar: "عطلة نهاية الأسبوع", article: "das", example: "Am Wochenende schlafe ich lange." },
    { de: "die Mitternacht", plural: "-", ar: "منتصف الليل", article: "die", example: "Der Film endet um Mitternacht." },
    { de: "der Frühling", plural: "die Frühlinge", ar: "الربيع", article: "der", example: "Im Frühling blühen die Blumen." },
    { de: "der Herbst", plural: "die Herbste", ar: "الخريف", article: "der", example: "Im Herbst fallen die Blätter." },
    { de: "die Prüfung", plural: "die Prüfungen", ar: "الامتحان / الاختبار", article: "die", example: "Vor der Prüfung lerne ich fleißig." },
    { de: "der Feierabend", plural: "die Feierabende", ar: "وقت انتهاء العمل اليومي", article: "der", example: "Nach dem Feierabend trinken wir Tee." },
    { de: "pünktlich", plural: "pünktlicher, am pünktlichsten", ar: "في الموعد تماماً (منضبط)", article: "", example: "Sei bitte pünktlich um acht!" }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Der Zug fährt genau ___ 15:45 Uhr ab.",
      options: ["um", "am", "im", "an"],
      correct: 0,
      answer: 0,
      explanation: "مع الساعات الدقيقة نستخدم دائماً حرف الجر um."
    },
    {
      type: "fill-blank",
      question: "Wir treffen uns ___ Freitag vor dem Kino.",
      answer: "am",
      accept: ["am", "Am"],
      explanation: "أيام الأسبوع تأخذ دائماً am (an + dem Freitag)."
    },
    {
      type: "multiple-choice",
      question: "___ Sommer fahren wir immer für zwei Wochen nach Spanien.",
      options: ["Im", "Am", "Um", "In"],
      correct: 0,
      answer: 0,
      explanation: "فصول السنة تأخذ im (in + dem Sommer)."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (بعد العمل أذهب للتسوق)",
      words: ["kaufe", "der", "Nach", "ich", "Arbeit", "ein", "."],
      correct: "Nach der Arbeit kaufe ich ein .",
      explanation: "حرف الجر nach + Dativ (der Arbeit) في المركز الأول، ثم الفعل kaufe، ثم الفاعل ich، ثم البادئة المنفصلة ein."
    },
    {
      type: "match",
      question: "طابق كل تعبير زمني بحرف الجر المناسب له:",
      pairs: [
        { left: "الساعات (8:30 Uhr)", right: "um" },
        { left: "الأيام (Montag)", right: "am" },
        { left: "الشهور والفصول (Juli / Winter)", right: "im" },
        { left: "الليل المستثنى (Nacht)", right: "in der" }
      ],
      explanation: "الساعات تأخذ um، الأيام تأخذ am، الشهور والفصول تأخذ im، والليل استثناء يأخذ in der Nacht."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich bin in 1998 geboren.)",
      sentence: "Ich bin in 1998 geboren.",
      corrected: "Ich bin 1998 geboren.",
      explanation: "في الألمانية لا نستخدم حرف الجر in مع السنوات؛ نقول إما السنة مباشرة «1998» أو «im Jahr 1998»."
    },
    {
      type: "fill-blank",
      question: "Ich putze mir immer ___ dem Schlafen die Zähne.",
      answer: "vor",
      accept: ["vor", "Vor"],
      explanation: "تنظيف الأسنان يتم (قبل) النوم: vor dem Schlafen."
    },
    {
      type: "multiple-choice",
      question: "Was machst du normalerweise ___ Wochenende?",
      options: ["am", "im", "um", "an"],
      correct: 0,
      answer: 0,
      explanation: "عطلة نهاية الأسبوع تأخذ am: am Wochenende."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أنا أستمع إلى الراديو أثناء الطهي.)",
      from: "أنا أستمع إلى الراديو أثناء الطهي.",
      answer: "Beim Kochen höre ich Radio.",
      accept: [
        "Beim Kochen höre ich Radio.",
        "Beim Kochen höre ich Radio",
        "Ich höre Radio beim Kochen.",
        "Ich höre beim Kochen Radio."
      ],
      explanation: "أثناء الطهي = beim Kochen (bei + dem Kochen)."
    },
    {
      type: "fill-blank",
      question: "Wir essen meistens erst spät ___ der Nacht zu Abend.",
      answer: "in",
      accept: ["in", "In"],
      explanation: "الليل هو الاستثناء من أجزاء اليوم ويأخذ: in der Nacht."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Unser Unterricht beginnt ___ Viertel nach neun.",
      options: ["um", "am", "im"],
      correct: 0,
      answer: 0,
      explanation: "التوقيت الدقيق بالساعة والدقائق يأخذ دائماً um."
    },
    {
      type: "multiple-choice",
      question: "Mein Geburtstag ist ___ 24. Oktober.",
      options: ["am", "im", "um"],
      correct: 0,
      answer: 0,
      explanation: "التواريخ المحددة بيوم تأخذ am (am vierundzwanzigsten Oktober)."
    },
    {
      type: "multiple-choice",
      question: "___ der Prüfung war ich sehr nervös.",
      options: ["Vor", "Nach", "Beim"],
      correct: 0,
      answer: 0,
      explanation: "الشعور بالتوتر يكون طبيعياً (قبل) الامتحان: Vor der Prüfung."
    },
    {
      type: "multiple-choice",
      question: "Die Fußball-Weltmeisterschaft fand ___ Jahr 2022 statt.",
      options: ["im", "am", "um"],
      correct: 0,
      answer: 0,
      explanation: "عند ذكر كلمة Jahr قبل السنة نستخدم im: im Jahr 2022."
    },
    {
      type: "multiple-choice",
      question: "Was ist richtig؟",
      options: [
        "am Morgen, am Abend, aber in der Nacht",
        "im Morgen, im Abend, und im Nacht",
        "um Morgen, um Abend, und um Nacht"
      ],
      correct: 0,
      answer: 0,
      explanation: "القاعدة: أجزاء اليوم تأخذ am، ما عدا الليل يأخذ in der Nacht."
    }
  ]
};

window.lessons = window.LESSONS;
