// website/data/lessons/a1-review/11-pluralbildung.js
window.LESSONS = window.LESSONS || {};
window.lessons = window.lessons || {};

window.LESSONS["a1-review-11"] = {
  id: "a1-review-11",
  level: "a1-review",
  order: 11,
  slug: "pluralbildung",
  title: {
    de: "Pluralbildung der Nomen",
    ar: "صيغ الجمع للأسماء الألمانية"
  },
  tags: ["grammatik", "nomen", "plural", "artikel", "a1"],

  // 1. الهدف من الدرس
  goal: "ستتعلم الأنماط الخمسة الرئيسية لتكوين صيغ الجمع في اللغة الألمانية (-e, -(e)n, -er, -s, وبدون نهاية)، ومعرفة أن أداة الجمع دائماً هي die، وأهم النهايات الدالة على نمط الجمع.",

  // 2. الشرح مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية، لا توجد نهاية واحدة موحدة للجمع مثل (s) في الإنجليزية أو (ون / ات) في العربية. بدلاً من ذلك، هناك **خمسة أنماط رئيسية** لتكوين الجمع، مع قاعدة ذهبية مريحة للغاية: **أداة التعريف للجمع هي دائماً die** بغض النظر عما إذا كان الاسم الأصلي مذكراً (der) أو مؤنثاً (die) أو محايداً (das)!"
    },
    {
      type: "rule",
      content: "قاعدة أساسية ثابتة: أداة الجمع لجميع الأسماء بلا استثناء في حالتي الفاعل والنصب هي **die** (مثال: der Mann ← **die** Männer / das Kind ← **die** Kinder / die Frau ← **die** Frauen)."
    },
    {
      type: "text",
      content: "الأنماط الخمسة الرئيسية لتكوين الجمع في الألمانية:"
    },
    {
      type: "table",
      headers: ["نمط الجمع", "الاستخدام الأكثر شيوعاً", "المفرد مع الأداة", "صيغة الجمع"],
      rows: [
        ["**1. اللاحقة -(e)n**", "معظم الأسماء المؤنثة، والمنتهية بـ (-ung, -heit, -keit, -in)", "die Frau / die Zeitung / die Ärztin", "**die Frauen** / **die Zeitungen** / **die Ärztinnen**"],
        ["**2. اللاحقة -e (غالباً مع أوملاوت)**", "كثير من الأسماء المذكر وأسماء محايدة ومؤنثة أحادية المقطع", "der Tag / der Stuhl / das Jahr / die Stadt", "**die Tage** / **die Stühle** / **die Jahre** / **die Städte**"],
        ["**3. اللاحقة -er (مع أوملاوت عادةً)**", "معظم الأسماء المحايدة وبعض الأسماء المذكرة (لا مؤنث أبداً!)", "das Kind / das Buch / das Bild / der Mann", "**die Kinder** / **die Bücher** / **die Bilder** / **die Männer**"],
        ["**4. اللاحقة -s**", "الكلمات الدخيلة، والمنتهية بحرف علة صريح (a, o, i)", "das Auto / das Handy / das Foto / das Hotel", "**die Autos** / **die Handys** / **die Fotos** / **die Hotels**"],
        ["**5. بدون نهاية (أو أوملاوت فقط)**", "الأسماء المنتهية بـ (-er, -el, -en)", "der Lehrer / der Apfel / das Fenster / der Bruder", "**die Lehrer** / **die Äpfel** / **die Fenster** / **die Brüder**"]
      ]
    },
    {
      type: "rule",
      content: "قواعد ذهبية ونهايات قطعية لحفظ الجمع:\n1. كل اسم مؤنث ينتهي بـ **-in** يجمع بإضافة **-nen** (die Studentin ← die Studentin**nen**).\n2. كل الأسماء المؤنثة المنتهية بـ **-ung, -heit, -keit, -schaft, -tion, -tät** تجمع دائماً بـ **-en** بلا استثناء!\n3. الأسماء المؤنثة **لا تأخذ إطلاقاً** اللاحقة **-er** في الجمع."
    },
    {
      type: "text",
      content: "تأثير علامة الـ Umlaut في الجمع:\nالكثير من الأسماء التي تحتوي على حروف العلة (a, o, u) تتحول إلى (ä, ö, ü) عند الجمع، خصوصاً مع اللواحق (-e) و (-er) وبدون نهاية (مثل: der Vater ← die Väter / der Baum ← die Bäume)."
    }
  ],

  // 3. الأمثلة (8+ أمثلة ناطقة مع إبراز القاعدة والترجمة)
  examples: [
    {
      de: "Auf dem Schreibtisch liegen viele **Bücher**.",
      ar: "على المكتب ترقد كتب كثيرة.",
      highlight: "Bücher",
      audio: true,
      note: "das Buch محايد يجمع بـ -er مع أوملاوت u→ü: die Bücher"
    },
    {
      de: "Im Konferenzraum stehen dreißig **Stühle**.",
      ar: "في قاعة المؤتمرات يوجد ثلاثون كرسياً.",
      highlight: "Stühle",
      audio: true,
      note: "der Stuhl مذكر يجمع بـ -e مع أوملاوت u→ü: die Stühle"
    },
    {
      de: "Die **Frauen** sprechen über die neue Arbeit.",
      ar: "النساء يتحدثن عن العمل الجديد.",
      highlight: "Frauen",
      audio: true,
      note: "die Frau مؤنث يجمع بـ -en: die Frauen"
    },
    {
      de: "Auf dem Parkplatz stehen moderne **Autos**.",
      ar: "في الموقف تقف سيارات حديثة.",
      highlight: "Autos",
      audio: true,
      note: "das Auto ينتهي بحرف علة صريح ويجمع بـ -s: die Autos"
    },
    {
      de: "Ich kaufe auf dem Markt fünf grüne **Äpfel**.",
      ar: "أنا أشتري من السوق خمس تفاحات خضراء.",
      highlight: "Äpfel",
      audio: true,
      note: "der Apfel ينتهي بـ -el ويجمع بأوملاوت فقط a→ä وبدون أي لاحقة: die Äpfel"
    },
    {
      de: "In dieser Klinik arbeiten viele tüchtige **Ärztinnen**.",
      ar: "في هذه العيادة تعمل الكثير من الطبيبات الماهرات.",
      highlight: "Ärztinnen",
      audio: true,
      note: "die Ärztin مؤنث مهني ينتهي بـ -in يجمع بـ -nen: die Ärztinnen"
    },
    {
      de: "Die **Kinder** spielen jeden Nachmittag draußen im Park.",
      ar: "الأطفال يلعبون كل بعد ظهر بالخارج في الحديقة.",
      highlight: "Kinder",
      audio: true,
      note: "das Kind محايد يجمع بـ -er: die Kinder"
    },
    {
      de: "An unserer Sprachschule unterrichten hervorragende **Lehrer**.",
      ar: "في معهد اللغات لدينا يدرّس معلمون ممتازون.",
      highlight: "Lehrer",
      audio: true,
      note: "der Lehrer ينتهي بـ -er ويبقى بدون أي إضافة في الجمع: die Lehrer"
    },
    {
      de: "Wir haben uns am Wochenende drei **Wohnungen** angesehen.",
      ar: "لقد عاينّا ثلاث شقق سكنية في نهاية الأسبوع.",
      highlight: "Wohnungen",
      audio: true,
      note: "die Wohnung ينتهي بـ -ung ويجمع دائماً بـ -en: die Wohnungen"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في العربية لدينا جمع مذكر سالم، وجمع مؤنث سالم، وجمع تكسير سماعي يحتاج حفظاً. الألمانية تشبه ذلك تماماً: لا توجد قاعدة رياضية موحدة تجمع كل الكلمات، لذا النصيحة الذهبية هي: **احفظ دائماً الاسم + أداته + صيغة جمعه** معاً كوحدة واحدة!",
    "الخبر السار جداً: أداة التعريف في الجمع هي دائماً **die** لكل الأسماء بدون استثناء، مما يريحك تماماً من التفكير بجنس الكلمة عند التحدث بالجمع.",
    "انتبه للأسماء المؤنثة المنتهية بـ -in (المهن والصفات المؤنثة): عند جمعها نضاعف حرف n فنكتب **-innen** (مثل: Lehrerinnen, Ärztinnen, Freundinnen)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "أداة الجمع دائماً وأبداً هي die لجميع الأجناس (مذكر، مؤنث، محايد).",
    "الأنماط الخمسة: -(e)n ، -e (مع Umlaut) ، -er (مع Umlaut) ، -s ، بدون إضافة.",
    "أغلب الأسماء المؤنثة والمنتهية بـ -ung و -heit تأخذ -(e)n.",
    "الأسماء المنتهية بـ -in تأخذ دائماً -nen (die Ärztinnen).",
    "الكلمات المستعارة والمنتهية بحروف صائتة تأخذ -s (die Handys, die Autos)."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "das Buch", plural: "die Bücher", ar: "الكتاب", article: "das", example: "Ich lese viele Bücher." },
    { de: "der Stuhl", plural: "die Stühle", ar: "الكرسي", article: "der", example: "Die Stühle sind bequem." },
    { de: "die Frau", plural: "die Frauen", ar: "المرأة / السيدة", article: "die", example: "Die Frauen trinken Tee." },
    { de: "das Auto", plural: "die Autos", ar: "السيارة", article: "das", example: "Auf der Straße fahren Autos." },
    { de: "der Apfel", plural: "die Äpfel", ar: "التفاحة", article: "der", example: "Er isst zwei Äpfel." },
    { de: "die Ärztin", plural: "die Ärztinnen", ar: "الطبيبة", article: "die", example: "Die Ärztinnen helfen den Kranken." },
    { de: "das Kind", plural: "die Kinder", ar: "الطفل", article: "das", example: "Die Kinder lachen laut." },
    { de: "der Lehrer", plural: "die Lehrer", ar: "المعلم", article: "der", example: "Die Lehrer erklären die Grammatik." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "ما هي أداة التعريف لجميع الأسماء في صيغة الجمع في اللغة الألمانية؟",
      options: ["der", "das", "die", "den"],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "قاعدة عامة: أداة التعريف لجميع صيغ الجمع في حالتي الفاعل والنصب هي دائماً die."
    },
    {
      type: "fill-blank",
      question: "اكتب صيغة الجمع الصحيحة للاسم die Frau:",
      sentence: "Im Raum sitzen fünf ___ (Frau).",
      answer: "Frauen",
      accept: ["Frauen"],
      explanation: "الاسم المؤنث die Frau يجمع بإضافة -en ليصبح die Frauen."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين جملة جمع صحيحة:",
      words: ["Die", "Kinder", "spielen", "gerne", "im", "Garten"],
      answer: "Die Kinder spielen gerne im Garten",
      correct: "Die Kinder spielen gerne im Garten",
      correctOrder: ["Die", "Kinder", "spielen", "gerne", "im", "Garten"],
      explanation: "الفاعل الجمع Die Kinder (1) + الفعل spielen بصيغة الجمع (2) + بقية الجملة."
    },
    {
      type: "multiple-choice",
      question: "ما هي صيغة الجمع للاسم das Auto؟",
      options: ["die Auton", "die Autoe", "die Autos", "die Auten"],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "الكلمات المنتهية بحرف علة صريح والكلمات الأجنبية تجمع بإضافة -s: die Autos."
    },
    {
      type: "match",
      question: "طابق بين الاسم المفرد وصيغة جمعه الصحيحة:",
      pairs: [
        { left: "das Buch (الكتاب)", right: "die Bücher" },
        { left: "der Mann (الرجل)", right: "die Männer" },
        { left: "die Zeitung (الجريدة)", right: "die Zeitungen" },
        { left: "das Foto (الصورة)", right: "die Fotos" }
      ],
      explanation: "تأمل الأنماط: -er مع أوملاوت (Bücher, Männer)، -en للمؤنث (Zeitungen)، و -s للأصل الصوتي (Fotos)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في صيغة الجمع للاسم das Kind في الجملة:",
      text: "Ich habe zwei Kinds.",
      sentence: "Ich habe zwei Kinds.",
      incorrect: "Ich habe zwei Kinds.",
      answer: "Ich habe zwei Kinder.",
      corrected: "Ich habe zwei Kinder.",
      accept: ["Ich habe zwei Kinder.", "Ich habe zwei Kinder"],
      explanation: "الاسم das Kind لا يجمع بـ -s بل باللاحقة -er ليصبح: die Kinder."
    },
    {
      type: "fill-blank",
      question: "اكتب صيغة الجمع للمهنة المؤنثة die Ärztin:",
      sentence: "In der Klinik arbeiten zehn ___ (Ärztin).",
      answer: "Ärztinnen",
      accept: ["Ärztinnen", "Aerztinnen"],
      explanation: "الأسماء المؤنثة المنتهية بـ -in تضاعف حرف النون وتأخذ -nen في الجمع: die Ärztinnen."
    },
    {
      type: "translate",
      question: "ترجم الجملة التالية إلى الألمانية:",
      text: "هناك خمس سيارات في الموقف.",
      from: "هناك خمس سيارات في الموقف.",
      answer: "Auf dem Parkplatz stehen fünf Autos.",
      accept: [
        "Auf dem Parkplatz stehen fünf Autos.",
        "Auf dem Parkplatz stehen fünf Autos",
        "Es gibt fünf Autos auf dem Parkplatz.",
        "Es gibt fünf Autos auf dem Parkplatz"
      ],
      explanation: "جمع das Auto هو die Autos مع استخدام عدد خمس (fünf)."
    },
    {
      type: "multiple-choice",
      question: "ما هي صيغة الجمع للاسم der Apfel؟",
      options: ["die Apfeln", "die Äpfel", "die Apfels", "die Äpfele"],
      answer: 1,
      correct: 1,
      correctIndex: 1,
      explanation: "الاسم der Apfel ينتهي بـ -el ويجمع بتحويل a إلى أوملاوت ä فقط بدون أي لاحقة: die Äpfel."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ الإملائي في أوملاوت جمع الكراسي:",
      text: "Die Stuhle sind sehr alt.",
      sentence: "Die Stuhle sind sehr alt.",
      incorrect: "Die Stuhle sind sehr alt.",
      answer: "Die Stühle sind sehr alt.",
      corrected: "Die Stühle sind sehr alt.",
      accept: ["Die Stühle sind sehr alt.", "Die Stühle sind sehr alt"],
      explanation: "جمع der Stuhl يتطلب أوملاوت فوق حرف u: die Stühle."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة اختيار من متعدد)
  quiz: [
    {
      type: "multiple-choice",
      question: "ما هي أداة التعريف لجمع الأسماء المذكرة (der) والمحايدة (das)؟",
      options: [
        "تبقى der و das كما هي",
        "تتحول دائماً إلى die",
        "تتحول إلى den فقط",
        "تتحول إلى das"
      ],
      answer: 1,
      correct: 1,
      correctIndex: 1,
      explanation: "جميع الأسماء في صيغة الجمع تأخذ أداة التعريف die بغض النظر عن جنسها في المفرد."
    },
    {
      type: "multiple-choice",
      question: "ما هي صيغة الجمع للاسم das Buch؟",
      options: ["die Buche", "die Büchen", "die Bücher", "die Buchs"],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "جمع das Buch هو die Bücher (لاحقة -er مع تحول u إلى ü)."
    },
    {
      type: "multiple-choice",
      question: "ما اللاحقة التي تلحق بالأسماء المؤنثة المنتهية بـ -in عند الجمع (مثل die Studentin)؟",
      options: ["-nen", "-s", "-e", "-er"],
      answer: 0,
      correct: 0,
      correctIndex: 0,
      explanation: "تضاعف الـ n وتضاف -en فتصبح النهاية -nen: die Studentinnen."
    },
    {
      type: "multiple-choice",
      question: "ما هي صيغة جمع الاسم المؤنث die Wohnung؟",
      options: ["die Wohnunger", "die Wohnungs", "die Wohnungen", "die Wöhnunge"],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "الأسماء المنتهية بـ -ung تجمع دائماً بإضافة -en وبدون أي أوملاوت: die Wohnungen."
    },
    {
      type: "multiple-choice",
      question: "أي من هذه الأسماء يجمع بإضافة اللاحقة -s فقط؟",
      options: ["das Kind", "der Lehrer", "das Handy", "die Stadt"],
      answer: 2,
      correct: 2,
      correctIndex: 2,
      explanation: "das Handy كلمة دخيلة تنتهي بحرف علة، فتجمع بـ -s: die Handys."
    }
  ]
};

window.lessons["a1-review-11"] = window.LESSONS["a1-review-11"];
