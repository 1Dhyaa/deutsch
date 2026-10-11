// data/lessons/a2-1/03-genitiv-1.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-03"] = {
  id: "a2-1-03",
  level: "a2-1",
  order: 3,
  slug: "genitiv-1",
  title: {
    de: "Der Genitiv (1)",
    ar: "حالة الإضافة والمضاف إليه (الجزء 1)"
  },
  tags: ["grammatik", "genitiv", "faelle", "nomen", "a2"],

  // 1. الهدف
  goal: "ستتعلم في هذا الدرس ما هي حالة الإضافة (Genitiv) للتعبير عن الملكية والعلاقة بين الأسماء، وكيف تتغير أدوات التعريف والتنكير (des, der)، وقواعد إضافة (-(e)s) للأسماء المذكرة والمحايدة، وكيف تسأل بأداة الاستفهام Wessen؟",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "حالة **Genitiv** هي الحالة الإعرابية الرابعة في اللغة الألمانية، وتعادل في قواعد لغتنا العربية **المضاف والمضاف إليه** (حالة الجر بالإضافة). نستخدمها بشكل رئيسي للتعبير عن **الملكية (Besitz)** أو **العلاقة والانتماء (Zugehörigkeit)** بين اسمين: *سيارةُ الأبِ*، *كتابُ المعلمةِ*، *ألعابُ الأطفالِ*."
    },
    {
      type: "text",
      content: "في هذه الحالة، تتغير أدوات التعريف والتنكير بشكل مميز، والأهم أن الأسماء المذكرة والمحايدة تأخذ نهاية إضافية **-(e)s** في آخر الاسم نفسه:"
    },
    {
      type: "table",
      headers: ["الجنس / النوع", "أداة المعرفة (Bestimmt)", "أداة النكرة (Unbestimmt)", "نهاية الاسم", "مثال كامل"],
      rows: [
        ["المذكر (Maskulin)", "des", "eines / meines", "+ (e)s", "das Auto **des Mannes** (سيارة الرجل)"],
        ["المحايد (Neutrum)", "des", "eines / meines", "+ (e)s", "das Spielzeug **des Kindes** (لعبة الطفل)"],
        ["المؤنث (Feminin)", "der", "einer / meiner", "بدون إضافة", "die Tasche **der Frau** (حقيبة المرأة)"],
        ["الجمع (Plural)", "der", "keiner / meiner", "بدون إضافة", "die Bücher **der Kinder** (كتب الأطفال)"]
      ]
    },
    {
      type: "rule",
      content: "متى نضيف **-es** ومتى نضيف **-s** فقط للأسماء المذكرة والمحايدة؟<br>• نضيف **-es**: إذا كان الاسم يتكون من مقطع صوتي واحد (مثل: *des Mann**es**, des Kind**es**, des Tag**es**, des Haus**es**)، أو إذا انتهى بحروف الصفير والهمس: (-s, -ss, -ß, -z, -tz, -x) مثل: *des Platz**es**, des Arzt**es**.*<br>• نضيف **-s** فقط: إذا كان الاسم متعدد المقاطع (مثل: *des Lehrer**s**, des Computer**s**, des Auto**s**, des König**s**).*<br>• الأسماء المؤنثة والجمع **لا تأخذ أي نهاية إطلاقاً**!"
    },
    {
      type: "text",
      content: "السؤال عن المضاف إليه: نسأل بأداة الاستفهام **Wessen?** (وتعني: لمن؟ أو ملك مَن؟):"
    },
    {
      type: "table",
      headers: ["السؤال بـ Wessen", "الإجابة في Genitiv", "الترجمة بالعربية"],
      rows: [
        ["Wessen Auto ist das?", "Das ist das Auto **des Chefs**.", "سيارة مَن هذه؟ – هذه سيارة المدير."],
        ["Wessen Buch liest du?", "Ich lese das Buch **der Lehrerin**.", "كتاب مَن تقرأ؟ – أقرأ كتاب المعلمة."],
        ["Wessen Zimmer ist das?", "Das ist das Zimmer **meines Bruders**.", "غرفة مَن هذه؟ – هذه غرفة أخي."]
      ]
    },
    {
      type: "rule",
      content: "ترتيب الجملة: في الألمانية القياسية يأتي الاسم المملوك أولاً، ثم يليه المالك في حالة Genitiv ثانياً: [das Auto] + [des Vaters] = سيارة الأب."
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Das ist das Auto **des Chefs**.",
      ar: "هذه سيارة المدير.",
      highlight: "des Chefs",
      audio: true,
      note: "der Chef مذكر ← الأداة des ونهاية الاسم -s"
    },
    {
      de: "Die Tür **des Hauses** ist alt.",
      ar: "باب المنزل قديم.",
      highlight: "des Hauses",
      audio: true,
      note: "das Haus محايد ومقطع واحد ينتهي بـ s ← des Hauses"
    },
    {
      de: "Wir hören die Meinung **der Lehrerin**.",
      ar: "نحن نستمع إلى رأي المعلمة.",
      highlight: "der Lehrerin",
      audio: true,
      note: "die Lehrerin مؤنث ← der Lehrerin (الاسم لا يتغير)"
    },
    {
      de: "Das Lachen **der Kinder** ist wunderschön.",
      ar: "ضحك الأطفال جميل جداً.",
      highlight: "der Kinder",
      audio: true,
      note: "die Kinder جمع ← der Kinder في حالة Genitiv"
    },
    {
      de: "Wessen Tasche ist das? – Das ist die Tasche **meiner Mutter**.",
      ar: "حقيبة مَن هذه؟ – هذه حقيبة أمي.",
      highlight: "meiner Mutter",
      audio: true,
      note: "السؤال بـ Wessen؟ والمؤنث مع ضمير الملكية meiner"
    },
    {
      de: "Die Farbe **des Tisches** gefällt mir gut.",
      ar: "لون الطاولة يعجبني كثيراً.",
      highlight: "des Tisches",
      audio: true,
      note: "der Tisch مذكر مقطع واحد ← des Tisches"
    },
    {
      de: "Er ist der Sohn **eines reichen Mannes**.",
      ar: "هو ابن رجل غني.",
      highlight: "eines reichen Mannes",
      audio: true,
      note: "أداة النكرة للمذكر eines مع نهاية -es للاسم"
    },
    {
      de: "Die Räder **des Fahrrads** sind neu.",
      ar: "عجلات الدراجة جديدة.",
      highlight: "des Fahrrads",
      audio: true,
      note: "das Fahrrad محايد ← des Fahrrads"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في العربية، المضاف يُجرّد من «ال» والمضاف إليه يُعرّف أو يُنوّن (كتابُ الطالبِ / كتابُ طالبٍ). أما في الألمانية فالاسم الأول يحتفظ بأداته كاملة: *das Buch des Schülers*.",
    "الخطأ الشائع الأكبر: تغيير الأداة إلى des ونسيان إضافة -(e)s للاسم! قول: *das Auto des Mann* خطأ، بل يجب أن تقول: *das Auto des Mann**es**.*",
    "احذر من إضافة -s للمؤنث أو الجمع! الأسماء المؤنثة والجمع تأخذ أداة **der** فقط دون أي لاحقة على الاسم: *die Tasche der Frau* وليس *der Fraus*!"
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "المذكر والمحايد يأخذان أداة **des** (أو eines / meines) ونهاية **-(e)s** على الاسم.",
    "المؤنث والجمع يأخذان أداة **der** (أو einer / meiner) ويبقى الاسم بدون أي نهاية.",
    "نضيف -es للأسماء ذات المقطع الصوتي الواحد والمنتهية بـ -s, -ß, -z, -x (مثل: des Hauses).",
    "نسأل عن المضاف إليه بأداة الاستفهام **Wessen?** (لمن؟ / ملك مَن؟).",
    "الترتيب الطبيعي: المضاف أولاً ثم المضاف إليه ثانياً (die Tasche des Lehrers)."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "der Genitiv", plural: "die Genitive", ar: "حالة الإضافة (المضاف إليه)", article: "der", example: "Der Genitiv zeigt den Besitz." },
    { de: "der Besitzer", plural: "die Besitzer", ar: "المالك / صاحب الشيء", article: "der", example: "Wer ist der Besitzer des Autos?" },
    { de: "der Chef", plural: "die Chefs", ar: "المدير / الرئيس", article: "der", example: "Das Büro des Chefs ist im zweiten Stock." },
    { de: "das Gesetz", plural: "die Gesetze", ar: "القانون", article: "das", example: "Wir achten die Gesetze des Landes." },
    { de: "die Meinung", plural: "die Meinungen", ar: "الرأي / وجهة النظر", article: "die", example: "Die Meinung der Lehrerin ist wichtig." },
    { de: "der Anfang", plural: "die Anfänge", ar: "البداية", article: "der", example: "Am Anfang des Monats habe ich viel Geld." },
    { de: "das Ende", plural: "die Enden", ar: "النهاية", article: "das", example: "Das Ende des Films war sehr traurig." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Das ist das Auto ___ Vaters. (der Vater)",
      sentence: "Das ist das Auto ___ Vaters.",
      options: ["des", "der", "dem", "den"],
      correct: 0,
      answer: 0,
      explanation: "der Vater مذكر، وفي حالة Genitiv تأخذ أداة des وتضاف s لنهاية الاسم (des Vaters)."
    },
    {
      type: "fill-blank",
      question: "Die Tasche ___ Mutter liegt auf dem Tisch. (die Mutter)",
      sentence: "Die Tasche ___ Mutter liegt auf dem Tisch.",
      answer: "der",
      accept: ["der"],
      explanation: "die Mutter مؤنث، وأداة التعريف للمؤنث في حالة Genitiv تتحول إلى der بدون تغيير في الاسم."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (هذه دراجة الطفل)",
      words: ["ist", "Fahrrad", "Das", "Kindes", "des", "."],
      correct: "Das ist das Fahrrad des Kindes .",
      answer: "Das ist das Fahrrad des Kindes .",
      accept: ["Das ist das Fahrrad des Kindes .", "Das ist das Fahrrad des Kindes"],
      explanation: "الترتيب الصحيح: المبتدأ والفعل (Das ist) + المملوك (das Fahrrad) + المضاف إليه (des Kindes)."
    },
    {
      type: "multiple-choice",
      question: "Die Fenster ___ Hauses sind sehr groß. (das Haus)",
      sentence: "Die Fenster ___ Hauses sind sehr groß.",
      options: ["der", "des", "dem", "den"],
      correct: 1,
      answer: 1,
      explanation: "das Haus محايد، وفي حالة Genitiv تصبح الأداة des ونهاية الاسم -es (des Hauses)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Das ist das Buch des Lehrer.)",
      sentence: "Das ist das Buch des Lehrer.",
      text: "Das ist das Buch des Lehrer.",
      corrected: "Das ist das Buch des Lehrers.",
      answer: "Das ist das Buch des Lehrers.",
      accept: ["Das ist das Buch des Lehrers.", "Das ist das Buch des Lehrers"],
      explanation: "الاسم المذكر der Lehrer يجب أن يأخذ اللاحقة -s في حالة Genitiv: des Lehrers."
    },
    {
      type: "match",
      question: "طابق بين الكلمة وأداتها ونهايتها الصحيحة في Genitiv:",
      pairs: [
        { left: "der Mann (الرجل)", right: "des Mannes" },
        { left: "das Kind (الطفل)", right: "des Kindes" },
        { left: "die Frau (المرأة)", right: "der Frau" },
        { left: "die Eltern (الوالدان)", right: "der Eltern" }
      ],
      explanation: "المذكر والمحايد يأخذان des + (e)s، بينما المؤنث والجمع يأخذان der بدون تغيير."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (هذا مفتاح الشقة.)",
      text: "هذا مفتاح الشقة.",
      from: "هذا مفتاح الشقة.",
      answer: "Das ist der Schlüssel der Wohnung.",
      accept: ["Das ist der Schlüssel der Wohnung.", "Das ist der Schlüssel der Wohnung"],
      explanation: "die Wohnung مؤنث، فتصبح في Genitiv: der Wohnung."
    },
    {
      type: "fill-blank",
      question: "___ Tasche ist das? – Das ist Marias Tasche.",
      sentence: "___ Tasche ist das? – Das ist Marias Tasche.",
      answer: "Wessen",
      accept: ["Wessen", "wessen"],
      explanation: "نسأل عن الملكية والمضاف إليه بأداة الاستفهام Wessen (لمن؟ / ملك مَن؟)."
    },
    {
      type: "multiple-choice",
      question: "Das Lachen ___ Kinder macht alle froh. (die Kinder = جمع)",
      sentence: "Das Lachen ___ Kinder macht alle froh.",
      options: ["des", "der", "den", "dem"],
      correct: 1,
      answer: 1,
      explanation: "اسم الجمع في حالة Genitiv يأخذ الأداة der دون أي إضافة على الاسم."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Das ist das Auto der Fraus.)",
      sentence: "Das ist das Auto der Fraus.",
      text: "Das ist das Auto der Fraus.",
      corrected: "Das ist das Auto der Frau.",
      answer: "Das ist das Auto der Frau.",
      accept: ["Das ist das Auto der Frau.", "Das ist das Auto der Frau"],
      explanation: "الأسماء المؤنثة لا تأخذ أي نهاية إطلاقاً في Genitiv، فقط الأداة تصبح der Frau."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Wessen Koffer ist das? – Das ist der Koffer ___ Bruders.",
      options: ["meines", "meiner", "meinem", "meinen"],
      correct: 0,
      answer: 0,
      explanation: "der Bruder اسم مذكر، وفي Genitiv مع ضمير الملكية يأخذ النهاية -es فيصبح meines Bruders."
    },
    {
      type: "multiple-choice",
      question: "Die Meinung ___ Chefs ist sehr klar.",
      options: ["des", "der", "dem", "den"],
      correct: 0,
      answer: 0,
      explanation: "der Chef مذكر، فتكون الأداة في Genitiv هي des Chefs."
    },
    {
      type: "multiple-choice",
      question: "Die Tür ___ Zimmers ist geschlossen. (das Zimmer)",
      options: ["der", "des", "dem", "einer"],
      correct: 1,
      answer: 1,
      explanation: "das Zimmer محايد، وأداة المحايد في Genitiv هي des مع نهاية -s."
    },
    {
      type: "multiple-choice",
      question: "___ Auto steht vor der Tür? – Das Auto meines Vaters.",
      options: ["Wer", "Wen", "Wem", "Wessen"],
      correct: 3,
      answer: 3,
      explanation: "للسؤال عن الملكية والمضاف إليه نستخدم أداة الاستفهام Wessen (لمن؟)."
    },
    {
      type: "multiple-choice",
      question: "Das Spielzeug ___ Babys liegt auf dem Boden. (das Baby)",
      options: ["des", "der", "dem", "den"],
      correct: 0,
      answer: 0,
      explanation: "das Baby محايد، فيأخذ أداة des في حالة Genitiv: des Babys."
    }
  ]
};
window.lessons = window.LESSONS;
