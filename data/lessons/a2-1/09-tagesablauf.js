// data/lessons/a2-1/09-tagesablauf.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-09"] = {
  id: "a2-1-09",
  level: "a2-1",
  order: 9,
  slug: "tagesablauf",
  title: {
    de: "Tagesablauf",
    ar: "الروتين اليومي والتعبير عن الوقت"
  },
  tags: ["wortschatz", "grammatik", "tagesablauf", "trennbare-verben", "zeit", "a2"],

  // 1. الهدف
  goal: "ستتعلم في هذا الدرس كيفية وصف روتينك اليومي منذ الصباح حتى المساء بدقة وطلاقة، باستخدام الأفعال المنفصلة الشائعة (aufstehen, anziehen, einschlafen...)، وروابط تسلسل الأحداث (zuerst, dann, danach, schließlich)، وحروف الجر الزمنية (um, von... bis...).",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "وصف الروتين اليومي (der Tagesablauf) من أهم المهارات اللغوية في المستوى A2؛ فهو يجمع بين **الأفعال المنفصلة (trennbare Verben)**، و**أدوات الربط الزمنية (Zeitadverbien)**، و**حروف الجر الدالة على الوقت**."
    },
    {
      type: "table",
      headers: ["الفعل (Verb)", "المعنى بالعربية", "مثال في جملة رئيسية", "نوع الفعل"],
      rows: [
        ["aufstehen", "يستيقظ وينهض من السرير", "Ich stehe um 6:30 Uhr auf.", "منفصل (auf-)"],
        ["sich anziehen", "يرتدي ملابسه", "Ich ziehe mich schnell an.", "منفصل وانعكاسي (an-)"],
        ["frühstücken", "يتناول طعام الإفطار", "Wir frühstücken zusammen.", "فعل عادي غير منفصل"],
        ["losfahren", "ينطلق / يبدأ الرحلة", "Er fährt um 7:30 Uhr los.", "منفصل (los-)"],
        ["ankommen", "يصل إلى وجهته", "Ich komme um 8:00 Uhr an.", "منفصل (an-)"],
        ["anrufen", "يتصل هاتفياً", "Ich rufe meine Kollegen an.", "منفصل (an-)"],
        ["Feierabend machen", "ينهي يوم العمل وينصرف", "Um 17:00 Uhr mache ich Feierabend.", "تعبير اصطلاحي"],
        ["einkaufen", "يتسوق في المتجر", "Sie kauft im Supermarkt ein.", "منفصل (ein-)"],
        ["fernsehen", "يشاهد التلفاز", "Wir sehen am Abend fern.", "منفصل (fern-)"],
        ["einschlafen", "يستغرق في النوم / يغفو", "Ich schlafe um 23:00 Uhr ein.", "منفصل (ein-)"]
      ]
    },
    {
      type: "rule",
      content: "قاعدة موقع الفعل المنفصل (Klammerstruktur): في الجملة الخبرية البسيطة، يُصرّف أصل الفعل ويوضع في المركز الثاني (**Position 2**)، بينما تطير البادئة المنفصلة (مثل: auf, an, ein, los, fern) إلى **نهاية الجملة تماماً**: <br>*Ich **stehe** jeden Morgen um sieben Uhr **auf**.*"
    },
    {
      type: "text",
      content: "لربط أحداث اليوم بترتيب منطقي وسلس، نستخدم الظروف الزمنية التالية (Zeitadverbien):"
    },
    {
      type: "table",
      headers: ["أداة الربط الزمني", "المعنى بالعربية", "مثال توضيحي", "ترتيب الكلمات في الجملة"],
      rows: [
        ["zuerst", "أولاً / في البداية", "Zuerst putze ich meine Zähne.", "يأتي الفعل بعدها مباشرة (Inversion)"],
        ["dann", "ثم / بعد ذلك", "Dann trinke ich einen Kaffee.", "يأتي الفعل بعدها مباشرة"],
        ["danach", "بعد ذلك / عقب ذلك", "Danach fahre ich zur Arbeit.", "يأتي الفعل بعدها مباشرة"],
        ["schließlich", "أخيراً / في نهاية المطاف", "Schließlich gehe ich ins Bett.", "يأتي الفعل بعدها مباشرة"]
      ]
    },
    {
      type: "rule",
      content: "قاعدة قلب الفاعل والفعل (Inversion): عندما تبدأ الجملة بأحد الظروف الزمنية (Zuerst, Dann, Danach, Schließlich)، يأتي الفعل المصرّف فوراً في المركز الثاني، ثم يأتي الفاعل ثالثاً:<br>• **Zuerst frühstücke ich** (وليس Zuerst ich frühstücke ❌)."
    },
    {
      type: "table",
      headers: ["حرف الجر الزمني", "الاستخدام", "مثال توضيحي"],
      rows: [
        ["um", "للساعة والوقت المحدد بالضبط", "Ich stehe **um** 7:00 Uhr auf."],
        ["von ... bis ...", "لفترة زمنية محددة البداية والنهاية", "Ich arbeite **von** 8:00 **bis** 16:30 Uhr."],
        ["am", "لأوقات اليوم وأيام الأسبوع", "**Am** Morgen, **am** Nachmittag, **am** Abend, **am** Montag."],
        ["in der", "حصراً مع وقت الليل (die Nacht مؤنث)", "**In der** Nacht schlafen alle Menschen."]
      ]
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Jeden Wochentag **stehe** ich pünktlich um 6:30 Uhr **auf**.",
      ar: "كل يوم من أيام العمل أستيقظ في تمام الساعة السادسة والنصف صباحاً.",
      audio: true,
      note: "فعل منفصل: aufstehen ← stehe ... auf"
    },
    {
      de: "Zuerst gehe ich ins Bad und **ziehe** mich schnell **an**.",
      ar: "أولاً أذهب إلى الحمام وأرتدي ملابسي بسرعة.",
      audio: true,
      note: "sich anziehen: فعل منفصل وانعكاسي معاً"
    },
    {
      de: "Um 7:15 Uhr **frühstücke** ich gemütlich mit meiner Familie.",
      ar: "في الساعة السابعة والربع أتناول الفطور بهدوء مع عائلتي.",
      audio: true,
      note: "فعل frühstücken غير منفصل ويأتي في المركز الثاني"
    },
    {
      de: "Danach **fahre** ich mit dem Bus zur Arbeit **los**.",
      ar: "بعد ذلك أنطلق بالحافلة إلى مكان العمل.",
      audio: true,
      note: "بعد Danach يأتي الفعل فوراً: Danach fahre ich los"
    },
    {
      de: "Ich arbeite im Büro **von** 8:30 **bis** 17:00 Uhr.",
      ar: "أعمل في المكتب من الساعة الثامنة والنصف حتى الخامسة مساءً.",
      audio: true,
      note: "von ... bis ... للتعبير عن فترة زمنية محددة"
    },
    {
      de: "Um 17:00 Uhr mache ich endlich **Feierabend** und gehe nach Hause.",
      ar: "في تمام الخامسة أنهي العمل أخيراً وأعود للمنزل.",
      audio: true,
      note: "Feierabend machen = انتهاء ساعات الدوام الرسمي"
    },
    {
      de: "Am Nachmittag **kaufe** ich frisches Gemüse im Supermarkt **ein**.",
      ar: "بعد الظهر أتسوق خضاراً طازجة من السوبرماركت.",
      audio: true,
      note: "einkaufen ← kaufe ... ein"
    },
    {
      de: "Am Abend **sehe** ich eine halbe Stunde **fern** und lese ein Buch.",
      ar: "في المساء أشاهد التلفاز لنصف ساعة وأقرأ كتاباً.",
      audio: true,
      note: "fernsehen: تصريف شاذ: ich sehe fern, du siehst fern"
    },
    {
      de: "Schließlich gehe ich ins Bett und **schlafe** gegen 23:00 Uhr **ein**.",
      ar: "أخيراً أذهب إلى الفراش وأستغرق في النوم حوالي الساعة الحادية عشرة ليلاً.",
      audio: true,
      note: "einschlafen ← schlafe ... ein"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "ترتيب الكلمات بعد (dann و danach و zuerst): في العربية نقول: «ثم أنا أذهب» ونضع الفاعل بعد أداة الربط. في الألمانية هذا خطأ شائع جداً! يجب تقديم الفعل مباشرة ليأتي في المركز الثاني: *Dann **gehe ich*** وليس *Dann ich gehe*.",
    "الفرق بين aufwachen و aufstehen: الفعل **aufwachen** يعني أن تفتح عينيك وتستيقظ من النوم، بينما الفعل **aufstehen** يعني أن تقف على قدميك وتغادر السرير فعلياً لبدء يومك.",
    "حروف الجر مع أوقات اليوم: نستخدم دائماً **am** مع (am Morgen, am Vormittag, am Mittag, am Nachmittag, am Abend)، لكن نستخدم **in der** مع الليل حصراً: **in der Nacht** لأن كلمة Nacht مؤنثة (die Nacht) وفي حالة Dativ تصبح der."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "الأفعال المنفصلة: يُصرّف الفعل في المركز الثاني وتذهب البادئة لآخر الجملة (Ich stehe ... auf).",
    "التسلسل الزمني: zuerst (أولاً) ← dann (ثم) ← danach (بعد ذلك) ← schließlich (أخيراً).",
    "قاعدة Inversion: بعد الظرف الزمني يأتي الفعل فوراً: Zuerst dusche ich, dann frühstücke ich.",
    "حروف الوقت: um للساعة المحددة، von... bis... للفترة، am لأوقات اليوم (am Abend)، و in der Nacht لليلاً.",
    "Feierabend هو التعبير الألماني الشهير لانتهاء يوم العمل والبدء في الراحة الشخصية."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "aufstehen", plural: "steht auf, ist aufgestanden", ar: "يستيقظ وينهض من السرير", article: "", example: "Ich stehe um sechs Uhr auf." },
    { de: "sich anziehen", plural: "zieht sich an, hat sich angezogen", ar: "يرتدي ملابسه", article: "", example: "Er zieht sich schnell an." },
    { de: "frühstücken", plural: "frühstückt, hat gefrühstückt", ar: "يتناول الفطور", article: "", example: "Wir frühstücken jeden Morgen zusammen." },
    { de: "ankommen", plural: "kommt an, ist angekommen", ar: "يصل", article: "", example: "Der Zug kommt pünktlich an." },
    { de: "fernsehen", plural: "sieht fern, hat ferngesehen", ar: "يشاهد التلفاز", article: "", example: "Am Abend sehe ich fern." },
    { de: "einschlafen", plural: "schläft ein, ist eingeschlafen", ar: "يستغرق في النوم / يغفو", article: "", example: "Das Kind schläft schnell ein." },
    { de: "der Feierabend", plural: "die Feierabende", ar: "وقت انتهاء الدوام اليومي والراحة", article: "der", example: "Schönen Feierabend allerseits!" },
    { de: "der Tagesablauf", plural: "die Tagesabläufe", ar: "الروتين اليومي / سير اليوم", article: "der", example: "Beschreiben Sie Ihren Tagesablauf!" }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich stehe jeden Morgen um sechs Uhr ___ .",
      options: ["auf", "an", "ein", "aus"],
      correct: 0,
      answer: 0,
      explanation: "البادئة المناسبة للفعل aufstehen (ينهض من الفراش) هي auf."
    },
    {
      type: "fill-blank",
      question: "Zuerst dusche ich, dann ___ ich eine Tasse Kaffee.",
      answer: "trinke",
      accept: ["trinke"],
      explanation: "بعد الظرف الزمني dann يحدث Inversion ويأتي الفعل المصرّف فوراً مع ich: trinke."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (في المساء يشاهد التلفاز لمدة ساعتين)",
      words: ["Am", "Abend", "sieht", "er", "zwei", "Stunden", "fern", "."],
      correct: "Am Abend sieht er zwei Stunden fern .",
      explanation: "الظرف الزمني (Am Abend) + الفعل ثانياً (sieht) + الفاعل (er) + المدة (zwei Stunden) + البادئة أخيراً (fern)."
    },
    {
      type: "match",
      question: "طابق كل فعل مع معناه بالعربية في سياق الروتين اليومي:",
      pairs: [
        { left: "aufstehen", right: "ينهض من السرير" },
        { left: "sich anziehen", right: "يرتدي ملابسه" },
        { left: "fernsehen", right: "يشاهد التلفاز" },
        { left: "einschlafen", right: "يستغرق في النوم" }
      ],
      explanation: "معاني أفعال الروتين: aufstehen (ينهض من السرير)، sich anziehen (يرتدي ملابسه)، fernsehen (يشاهد التلفاز)، einschlafen (يستغرق في النوم)."
    },
    {
      type: "multiple-choice",
      question: "___ Abend trinke ich gerne eine Tasse Pfefferminztee.",
      options: ["Am", "Im", "Um", "An"],
      correct: 0,
      answer: 0,
      explanation: "مع أوقات اليوم المذكرة (der Abend) نستخدم حرف الجر am (am Abend)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في الترتيب: (Danach ich fahre zur Arbeit.)",
      sentence: "Danach ich fahre zur Arbeit.",
      corrected: "Danach fahre ich zur Arbeit.",
      explanation: "بعد ظرف التسلسل الزمني Danach يجب تقديم الفعل في المركز الثاني (Danach fahre ich)."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (هو ينام دائماً في الساعة الحادية عشرة ليلاً.)",
      from: "هو ينام دائماً في الساعة الحادية عشرة ليلاً.",
      answer: "Er schläft immer um 23 Uhr ein.",
      accept: [
        "Er schläft immer um 23 Uhr ein.",
        "Er schläft immer um elf Uhr ein.",
        "Er schläft immer um 23 Uhr ein",
        "Er schläft immer um elf Uhr ein"
      ],
      explanation: "الفعل هو einschlafen وتصريفه مع er هو schläft ... ein، مع حرف الجر um للساعة."
    },
    {
      type: "fill-blank",
      question: "Mein Vater arbeitet von Montag ___ Freitag.",
      answer: "bis",
      accept: ["bis"],
      explanation: "للتعبير عن فترة زمنية محددة البداية والنهاية نستخدم التركيب von ... bis ..."
    },
    {
      type: "multiple-choice",
      question: "Der Film ist sehr langweilig, ich schlafe gleich ___ .",
      options: ["ein", "auf", "an", "aus"],
      correct: 0,
      answer: 0,
      explanation: "الفعل einschlafen (يغفو / يستغرق في النوم) يأخذ البادئة ein في نهاية الجملة."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich stehe auf um sieben Uhr.)",
      sentence: "Ich stehe auf um sieben Uhr.",
      corrected: "Ich stehe um sieben Uhr auf.",
      explanation: "في الجملة الرئيسية، تذهب بادئة الفعل المنفصل (auf) إلى نهاية الجملة تماماً."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Um wie viel Uhr ___ du morgens auf?",
      options: ["stehst", "steht", "stehe"],
      correct: 0,
      answer: 0,
      explanation: "مع الضمير du يكون تصريف فعل stehen هو stehst."
    },
    {
      type: "multiple-choice",
      question: "اختر الترتيب الصحيح نحوياً للجملة:",
      options: [
        "Zuerst frühstücke ich, danach fahre ich zur Arbeit.",
        "Zuerst ich frühstücke, danach ich fahre zur Arbeit.",
        "Zuerst frühstücke ich, danach ich fahre zur Arbeit."
      ],
      correct: 0,
      answer: 0,
      explanation: "بعد أدوات الربط الزمني مثل Zuerst و danach يجب أن يأتي الفعل المصرّف في المركز الثاني مباشرة (Inversion)."
    },
    {
      type: "multiple-choice",
      question: "ما هو حرف الجر المناسب للساعة المحددة: »Der Unterricht beginnt ___ 9:00 Uhr.«؟",
      options: ["um", "am", "im"],
      correct: 0,
      answer: 0,
      explanation: "مع الساعات والأوقات المحددة نستخدم حرف الجر um دائماً."
    },
    {
      type: "multiple-choice",
      question: "ما هو التعبير الألماني الذي يعني انتهاء ساعات الدوام الرسمي: »Ich habe um 17 Uhr ___ gemacht.«؟",
      options: ["Feierabend", "Wochenende", "Urlaub"],
      correct: 0,
      answer: 0,
      explanation: "التعبير الشائع هو Feierabend machen (إنهاء الدوام اليومي والبدء في وقت الراحة)."
    },
    {
      type: "multiple-choice",
      question: "أين توضع بادئة الفعل المنفصل في الجملة التالية: »Mein Bruder kauft samstags ___ .«؟",
      options: [
        "im Supermarkt ein",
        "ein im Supermarkt",
        "ein Supermarkt"
      ],
      correct: 0,
      answer: 0,
      explanation: "تأتي البادئة المنفصلة ein في نهاية الجملة تماماً: kauft im Supermarkt ein."
    }
  ]
};
window.lessons = window.LESSONS;
