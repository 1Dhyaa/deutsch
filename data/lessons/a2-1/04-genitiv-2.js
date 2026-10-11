// data/lessons/a2-1/04-genitiv-2.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-04"] = {
  id: "a2-1-04",
  level: "a2-1",
  order: 4,
  slug: "genitiv-2",
  title: {
    de: "Der Genitiv (2) & Präpositionen",
    ar: "حالة الإضافة (الجزء 2) وحروف الجر الخاصة بها"
  },
  tags: ["grammatik", "genitiv", "praepositionen", "dativ", "a2"],

  // 1. الهدف
  goal: "ستتعلم في هذا الدرس أهم 4 حروف جر تتطلب حالة Genitiv (wegen, während, trotz, statt)، وكيف يستبدل الألمان حالة Genitiv بحرف الجر (von + Dativ) في المحادثات اليومية، وقواعد التعبير عن الملكية مع أسماء الأشخاص والعلم.",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "توجد في اللغة الألمانية مجموعة من حروف الجر تطلب دائماً أن يأتي بعدها الاسم في حالة **Genitiv** (المضاف إليه). أهم 4 حروف جر يجب على طالب مستوى A2 معرفتها واستخدامها هي:"
    },
    {
      type: "table",
      headers: ["حرف الجر", "المعنى بالعربية", "مثال مع Genitiv", "الترجمة بالعربية"],
      rows: [
        ["wegen", "بسبب / نظراً لـ", "Ich bleibe **wegen des Regens** zu Hause.", "أبقى في المنزل بسبب المطر."],
        ["während", "أثناء / خلال", "**Während des Unterrichts** schweigen wir.", "أثناء الحصة نلتزم الصمت."],
        ["trotz", "على الرغم من / بالرغم من", "**Trotz der Kälte** geht er spazieren.", "على الرغم من البرد يذهب في نزهة."],
        ["statt / anstelle", "بدلاً من / عوضاً عن", "Er trinkt Tee **statt des Kaffees**.", "هو يشرب الشاي بدلاً من القهوة."]
      ]
    },
    {
      type: "rule",
      content: "تذكير سريع بأدوات Genitiv بعد حروف الجر:<br>• المذكر والمحايد: يأخذان **des** + إضافة **-(e)s** على الاسم (*des Regens, des Wetters*).<br>• المؤنث والجمع: يأخذان **der** دون تغيير في الاسم (*der Kälte, der Ferien*)."
    },
    {
      type: "text",
      content: "الاستبدال بـ (von + Dativ) في اللغة اليومية المنطوقة (Umgangssprache):"
    },
    {
      type: "table",
      headers: ["الألمانية الفصحى (Genitiv - كتابة ورسمي)", "الألمانية المحكية (von + Dativ - شفهي)", "المعنى بالعربية"],
      rows: [
        ["Das Auto **meines Vaters**", "Das Auto **von meinem Vater**", "سيارة أبي"],
        ["Das Buch **des Lehrers**", "Das Buch **von dem Lehrer**", "كتاب المعلم"],
        ["**Wegen des Regens**", "**Wegen dem Regen** (شائعة عامياً)", "بسبب المطر"]
      ]
    },
    {
      type: "rule",
      content: "قاعدة الملكية مع أسماء الأشخاص والعلم (Eigennamen):<br>• مع أسماء الأشخاص نضيف حرف **-s** مباشرة في نهاية الاسم **بدون فاصلة عليا (Apostroph)**: *Ahmads Buch (كتاب أحمد)*، *Marias Handy (هاتف ماريا)*.<br>• إذا انتهى الاسم بصوت صفيري (-s, -ss, -ß, -z, -x): نكتفي بوضع فاصلة عليا في نهاية الاسم: *Max' Auto* أو نستخدم صيغة: *das Auto von Max*."
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Wir bleiben **wegen des schlechten Wetters** im Hotel.",
      ar: "نحن باقون في الفندق بسبب الطقس السيئ.",
      highlight: "wegen des schlechten Wetters",
      audio: true,
      note: "wegen يطلب Genitiv: das Wetter ← des Wetters"
    },
    {
      de: "Was machst du **während der Ferien**?",
      ar: "ماذا تفعل خلال العطلة؟",
      highlight: "während der Ferien",
      audio: true,
      note: "während يطلب Genitiv: die Ferien (جمع) ← der Ferien"
    },
    {
      de: "Er kommt zur Arbeit **trotz seiner Krankheit**.",
      ar: "هو يأتي إلى العمل على الرغم من مرضه.",
      highlight: "trotz seiner Krankheit",
      audio: true,
      note: "trotz يطلب Genitiv: die Krankheit مؤنث ← seiner Krankheit"
    },
    {
      de: "Sie nimmt den Zug **statt des Flugzeugs**.",
      ar: "هي تستقل القطار بدلاً من الطائرة.",
      highlight: "statt des Flugzeugs",
      audio: true,
      note: "statt يطلب Genitiv: das Flugzeug محايد ← des Flugzeugs"
    },
    {
      de: "Das ist **Ahmads neue Wohnung**.",
      ar: "هذه شقة أحمد الجديدة.",
      highlight: "Ahmads neue Wohnung",
      audio: true,
      note: "إضافة s لاسم العلم بدون فاصلة عليا: Ahmads"
    },
    {
      de: "Das Fahrrad **von meinem Bruder** ist kaputt.",
      ar: "دراجة أخي معطلة.",
      highlight: "von meinem Bruder",
      audio: true,
      note: "استخدام von + Dativ في اللغة اليومية المحكية"
    },
    {
      de: "Ich habe **während der Prüfung** mein Handy ausgeschaltet.",
      ar: "أغلقت هاتفي أثناء الامتحان.",
      highlight: "während der Prüfung",
      audio: true,
      note: "die Prüfung مؤنث ← der Prüfung بعد während"
    },
    {
      de: "Hier steht **Max' neues Auto**.",
      ar: "هنا تقف سيارة ماكس الجديدة.",
      highlight: "Max' neues Auto",
      audio: true,
      note: "الاسم المنتهي بـ x يكتفي بالفاصلة العليا: Max'"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "لا تضع فاصلة عليا (') قبل الـ s في الأسماء الألمانية! في الإنجليزية نكتب (Ahmad's book)، أما في الألمانية فالصحيح: *Ahmads Buch* مباشرة بدون فاصلة عليا.",
    "في امتحانات Goethe و telc لمستوى A2/B1: احرص على استخدام Genitiv مع wegen و während في التعبير الكتابي؛ فهو يُظهر تمكناً لغوياً راقياً، بينما (von + Dativ) مقبولة شفهياً.",
    "كلمة wegen تعني «بسبب»، ومثلها في العربية يتبعها مضاف إليه مجرور (بسببِ الحادثِ = wegen des Unfalls). تذكر دائماً أداة des مع المذكر والمحايد ونهاية -s."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "حروف الجر الأربعة مع Genitiv: **wegen** (بسبب)، **während** (خلال)، **trotz** (بالرغم من)، **statt** (بدلاً من).",
    "في اللغة الشفهية اليومية: يستبدل الألمان Genitiv بصيغة **von + Dativ** (مثل: das Haus von Ali).",
    "مع أسماء العلم: نضيف -s في نهاية الاسم بدون فاصلة عليا (Marias Buch).",
    "إذا انتهى الاسم بـ -s أو -z أو -x: نضع فاصلة عليا فقط في النهاية (Felix' Auto) أو نستخدم von.",
    "الصفة الواقعة بعد des تأخذ دائماً النهاية -en (des schlecht**en** Wetters)."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "wegen", plural: "Präposition (+ Genitiv)", ar: "بسبب / نظراً لـ", article: "", example: "Wegen des Staus komme ich später." },
    { de: "während", plural: "Präposition (+ Genitiv)", ar: "خلال / أثناء", article: "", example: "Während der Reise habe ich viel gelesen." },
    { de: "trotz", plural: "Präposition (+ Genitiv)", ar: "على الرغم من / بالرغم من", article: "", example: "Trotz des Regens gehen wir spazieren." },
    { de: "statt", plural: "Präposition (+ Genitiv)", ar: "بدلاً من / عوضاً عن", article: "", example: "Ich nehme Wasser statt des Saftes." },
    { de: "der Unfall", plural: "die Unfälle", ar: "الحادث", article: "der", example: "Wegen des Unfalls ist die Straße gesperrt." },
    { de: "die Pause", plural: "die Pausen", ar: "الاستراحة / الفسحة", article: "die", example: "Während der Pause trinken wir Kaffee." },
    { de: "der Regen", plural: "kein Plural", ar: "المطر", article: "der", example: "Wegen des starken Regens bleiben wir hier." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich bleibe ___ des Regens heute zu Hause.",
      sentence: "Ich bleibe ___ des Regens heute zu Hause.",
      options: ["wegen", "ohne", "mit", "für"],
      correct: 0,
      answer: 0,
      explanation: "حرف الجر wegen يعني (بسبب) ويتطلب حالة Genitiv (des Regens)."
    },
    {
      type: "fill-blank",
      question: "Während ___ Unterrichts darf man nicht laut sprechen. (der Unterricht)",
      sentence: "Während ___ Unterrichts darf man nicht laut sprechen.",
      answer: "des",
      accept: ["des"],
      explanation: "der Unterricht اسم مذكر، بعد während يأخذ أداة des في حالة Genitiv."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (على الرغم من البرد نذهب في نزهة)",
      words: ["gehen", "Trotz", "Kälte", "wir", "der", "spazieren", "."],
      correct: "Trotz der Kälte gehen wir spazieren .",
      answer: "Trotz der Kälte gehen wir spazieren .",
      accept: ["Trotz der Kälte gehen wir spazieren .", "Trotz der Kälte gehen wir spazieren"],
      explanation: "حرف الجر Trotz + المجرور بالـ Genitiv (der Kälte) + الفعل ثانياً (gehen) + الفاعل (wir) + spazieren."
    },
    {
      type: "multiple-choice",
      question: "Das ist ___ Tasche. (ماريا = Maria)",
      sentence: "Das ist ___ Tasche.",
      options: ["Marias", "Maria's", "von Maria ihre", "Marien"],
      correct: 0,
      answer: 0,
      explanation: "في الألمانية تضاف s للملكية مع أسماء الأشخاص بدون فاصلة عليا: Marias Tasche."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Das ist Ali's Auto.)",
      sentence: "Das ist Ali's Auto.",
      text: "Das ist Ali's Auto.",
      corrected: "Das ist Alis Auto.",
      answer: "Das ist Alis Auto.",
      accept: ["Das ist Alis Auto.", "Das ist Alis Auto"],
      explanation: "في قواعد الإملاء الألمانية لا تُستخدم الفاصلة العليا (') قبل s الملكية مع أسماء الأشخاص."
    },
    {
      type: "match",
      question: "طابق كل حرف جر مع معناه بالعربية:",
      pairs: [
        { left: "wegen", right: "بسبب" },
        { left: "während", right: "أثناء / خلال" },
        { left: "trotz", right: "على الرغم من" },
        { left: "statt", right: "بدلاً من" }
      ],
      explanation: "هذه الحروف الأربعة تتطلب حالة Genitiv في الألمانية الفصحى."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أنا أشرب الشاي بدلاً من القهوة.)",
      text: "أنا أشرب الشاي بدلاً من القهوة.",
      from: "أنا أشرب الشاي بدلاً من القهوة.",
      answer: "Ich trinke Tee statt des Kaffees.",
      accept: ["Ich trinke Tee statt des Kaffees.", "Ich trinke Tee statt des Kaffees"],
      explanation: "der Kaffee مذكر، بعد حرف الجر statt يصبح: statt des Kaffees."
    },
    {
      type: "multiple-choice",
      question: "Er kommt zur Arbeit trotz ___ Krankheit. (die Krankheit)",
      sentence: "Er kommt zur Arbeit trotz ___ Krankheit.",
      options: ["seiner", "seinem", "seines", "seinen"],
      correct: 0,
      answer: 0,
      explanation: "die Krankheit مؤنث، وضمير الملكية للمؤنث في Genitiv يأخذ النهاية -er: seiner Krankheit."
    },
    {
      type: "fill-blank",
      question: "Das ist das Auto von ___ Vater. (der Vater - بالعامية المحكية مع von + Dativ)",
      sentence: "Das ist das Auto von ___ Vater.",
      answer: "meinem",
      accept: ["meinem", "dem"],
      explanation: "حرف الجر von يتطلب حالة Dativ دائماً، فالمذكر يأخذ meinem Vater أو dem Vater."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Wegen das Wetter bleiben wir zu Hause.)",
      sentence: "Wegen das Wetter bleiben wir zu Hause.",
      text: "Wegen das Wetter bleiben wir zu Hause.",
      corrected: "Wegen des Wetters bleiben wir zu Hause.",
      answer: "Wegen des Wetters bleiben wir zu Hause.",
      accept: ["Wegen des Wetters bleiben wir zu Hause.", "Wegen des Wetters bleiben wir zu Hause"],
      explanation: "حرف الجر wegen يتطلب حالة Genitiv: das Wetter تصبح des Wetters بإضافة -s للاسم."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "___ der Reise habe ich viele Fotos gemacht.",
      options: ["Während", "Ohne", "Gegen", "Aus"],
      correct: 0,
      answer: 0,
      explanation: "حرف الجر Während (أثناء / خلال) يتطلب Genitiv: während der Reise."
    },
    {
      type: "multiple-choice",
      question: "Er kauft das Fahrrad trotz ___ hohen Preises. (der Preis)",
      options: ["des", "dem", "der", "den"],
      correct: 0,
      answer: 0,
      explanation: "der Preis مذكر، بعد trotz في حالة Genitiv تكون الأداة des."
    },
    {
      type: "multiple-choice",
      question: "Wo liegt ___ Brille? (توماس = Thomas - ينتهي بصوت s)",
      options: ["Thomas'", "Thomas's", "Thomass", "Thomasen"],
      correct: 0,
      answer: 0,
      explanation: "الأسماء المنتهية بـ s تأخذ فاصلة عليا فقط في نهايتها: Thomas' Brille."
    },
    {
      type: "multiple-choice",
      question: "Wir trinken Wasser statt ___ Weines. (der Wein)",
      options: ["des", "dem", "der", "den"],
      correct: 0,
      answer: 0,
      explanation: "der Wein مذكر، بعد statt في حالة Genitiv تأخذ الأداة des مع نهاية -es."
    },
    {
      type: "multiple-choice",
      question: "Wegen ___ Unfalls kommt die Bahn zu spät. (der Unfall)",
      options: ["des", "der", "dem", "den"],
      correct: 0,
      answer: 0,
      explanation: "der Unfall مذكر، في حالة Genitiv بعد wegen تصبح الأداة des Unfalls."
    }
  ]
};
window.lessons = window.LESSONS;
