// data/lessons/a2-1/01-reflexive-verben-1.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-01"] = {
  id: "a2-1-01",
  level: "a2-1",
  order: 1,
  slug: "reflexive-verben-1",
  title: {
    de: "Reflexive Verben (1)",
    ar: "الأفعال الانعكاسية (1) — ضمائر الانعكاس مع Akkusativ"
  },
  tags: ["grammatik", "verben", "reflexiv", "a2"],

  // 1. الهدف
  goal: "ستتعلم ما هي الأفعال الانعكاسية (الأفعال التي يعود أثرها على الفاعل مثل: يغتسل، يفرح، يشعر)، وكيفية تصريف ضمير الانعكاس (mich, dich, sich...) في حالة النصب (Akkusativ).",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "الفعل الانعكاسي هو فعل يعود فيه الحدث على الفاعل نفسه (مثل: اغتسلَ، جهّزَ نفسه، استراحَ). يُعرف هذا الفعل في القاموس بوجود كلمة **sich** قبله، مثل: *sich freuen* (يفرح) أو *sich waschen* (يغتسل)."
    },
    {
      type: "text",
      content: "عند تصريف الفعل، يجب أن يتغير ضمير الانعكاس بحسب الفاعل. في هذا الدرس نركز على ضمائر الانعكاس في حالة **Akkusativ**:"
    },
    {
      type: "table",
      headers: ["الفاعل (Subjekt)", "ضمير الانعكاس (Reflexivpronomen)", "مثال مع sich freuen (يفرح)", "المعنى بالعربية"],
      rows: [
        ["ich", "mich", "Ich freue mich.", "أنا أفرح / مسرور."],
        ["du", "dich", "Du freust dich.", "أنت تفرح / مسرور."],
        ["er / sie / es", "sich", "Er / Sie freut sich.", "هو / هي تفرح."],
        ["wir", "uns", "Wir freuen uns.", "نحن نفرح / مسرورون."],
        ["ihr", "euch", "Ihr freut euch.", "أنتم تفرحون."],
        ["sie / Sie", "sich", "Sie freuen sich.", "هم يفرحون / حضرتك تفرح."]
      ]
    },
    {
      type: "rule",
      content: "لاحظ أن الضمير **sich** يُستخدم مع الغائب المفرد والجمع وصيغة الاحترام (er, sie, es, sie, Sie). بينما مع بقية الضمائر نستخدم (mich, dich, uns, euch)."
    },
    {
      type: "text",
      content: "موقع ضمير الانعكاس في الجملة الرئيسية: يأتي مباشرة بعد الفعل المصرّف: *Ich wasche **mich** jeden Morgen.*"
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Ich freue **mich** sehr auf das Wochenende.",
      ar: "أنا أتطلع بشوق وفرح لعطلة نهاية الأسبوع.",
      highlight: "mich",
      audio: true,
      note: "مع ich يكون ضمير الانعكاس mich"
    },
    {
      de: "Wie fühlst du **dich** heute?",
      ar: "كيف تشعر اليوم؟",
      highlight: "dich",
      audio: true,
      note: "sich fühlen = يشعر (مع du ← dich)"
    },
    {
      de: "Er wäscht **sich** das Gesicht.",
      ar: "هو يغسل وجهه.",
      highlight: "sich",
      audio: true,
      note: "مع er يكون الضمير sich"
    },
    {
      de: "Wir müssen **uns** jetzt beeilen.",
      ar: "يجب علينا أن نسرع الآن.",
      highlight: "uns",
      audio: true,
      note: "sich beeilen = يستعجل (مع wir ← uns)"
    },
    {
      de: "Setzt **euch** bitte, meine Freunde!",
      ar: "تفضلوا بالجلوس رجاءً يا أصدقائي!",
      highlight: "euch",
      audio: true,
      note: "sich setzen = يجلس (مع ihr ← euch)"
    },
    {
      de: "Die Kinder langweilen **sich** im Unterricht.",
      ar: "الأطفال يشعرون بالملل في الحصة.",
      highlight: "sich",
      audio: true,
      note: "die Kinder جمع غائب (sie) ← sich"
    },
    {
      de: "Entschuldigen Sie **sich** bitte!",
      ar: "اعتذر حضرتك من فضلك!",
      highlight: "sich",
      audio: true,
      note: "صيغة الاحترام Sie تأخذ دائماً sich"
    },
    {
      de: "Ich ruhe **mich** nach der Arbeit aus.",
      ar: "أنا أستريح بعد العمل.",
      highlight: "mich",
      audio: true,
      note: "فعل منفصل وانعكاسي معاً: sich ausruhen ← ruhe mich ... aus"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في العربية، صيغة الانعكاس تأتي غالباً كوزن صرفي في الفعل نفسه (غَسَلَ ← اغْتَسَلَ، فَرِحَ ← اسْتَبْشَرَ)، أو بإضافة كلمة «نفسي / نفسه». أما بالألمانية فيلزم وضع ضمير الانعكاس دائماً.",
    "إذا كنت تتحدث الفرنسية: الأفعال الانعكاسية في الألمانية تشبه تماماً Les verbes pronominaux في الفرنسية (sich waschen = se laver, sich beeilen = se dépêcher).",
    "خطأ شائع جداً: نسيان الضمير الانعكاسي وقول: *Ich freue* فقط! هذا خطأ فادح في الألمانية، يجب أن تقول: *Ich freue **mich***."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "الضمائر: ich → mich | du → dich | wir → uns | ihr → euch",
    "الضمير sich يغطي: er, sie, es, sie (هم) وصيغة الاحترام Sie",
    "يأتي ضمير الانعكاس مباشرة بعد الفعل في الجملة العادية: Ich wasche mich",
    "في وجود فعل ناقص (Modalverb): الفعل الانعكاسي يذهب للمصدر في النهاية مع تصريف الضمير: Ich muss **mich** beeilen"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "sich freuen", plural: "freut sich, hat sich gefreut", ar: "يفرح / يسعد", article: "", example: "Ich freue mich über das Geschenk." },
    { de: "sich fühlen", plural: "fühlt sich, hat sich gefühlt", ar: "يشعر / يحس", article: "", example: "Ich fühle mich heute gut." },
    { de: "sich beeilen", plural: "beeilt sich, hat sich beeilt", ar: "يستعجل / يسرع", article: "", example: "Wir müssen uns beeilen." },
    { de: "sich setzen", plural: "setzt sich, hat sich gesetzt", ar: "يجلس", article: "", example: "Setzen Sie sich bitte!" },
    { de: "sich ausruhen", plural: "ruht sich aus, hat sich ausgeruht", ar: "يستريح", article: "", example: "Am Sonntag ruhe ich mich aus." },
    { de: "sich interessieren", plural: "interessiert sich, hat sich interessiert", ar: "يهتم بـ", article: "", example: "Er interessiert sich für Autos." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich muss ___ beeilen, der Zug fährt gleich ab.",
      options: ["mich", "dich", "sich", "uns"],
      correct: 0,
      explanation: "الفاعل هو ich، وضمير الانعكاس المقابل له هو mich."
    },
    {
      type: "fill-blank",
      question: "Freust du ___ auf die Reise nach Berlin?",
      answer: "dich",
      accept: ["dich"],
      explanation: "الفاعل du يتطلب ضمير الانعكاس dich."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (نحن نشعر بأننا متعبون اليوم)",
      words: ["fühlen", "heute", "Wir", "uns", "müde", "."],
      correct: "Wir fühlen uns heute müde .",
      explanation: "الفاعل (Wir) + الفعل ثانياً (fühlen) + ضمير الانعكاس (uns) + التكملة."
    },
    {
      type: "multiple-choice",
      question: "Meine Schwester interessiert ___ für moderne Kunst.",
      options: ["mich", "dich", "sich", "ihr"],
      correct: 2,
      explanation: "أختي (Meine Schwester) هي ضمير الغائب sie (هي)، فيأخذ ضمير الانعكاس sich."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich freue sehr auf den Urlaub.)",
      sentence: "Ich freue sehr auf den Urlaub.",
      corrected: "Ich freue mich sehr auf den Urlaub.",
      explanation: "فعل sich freuen انعكاسي، ولا يمكن حذف ضمير الانعكاس (mich) مع الفاعل ich."
    },
    {
      type: "match",
      question: "طابق كل فاعل مع ضمير الانعكاس المناسب له:",
      pairs: [
        { left: "ich", right: "mich" },
        { left: "du", right: "dich" },
        { left: "wir", right: "uns" },
        { left: "ihr", right: "euch" }
      ]
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أنا أستريح الآن.)",
      from: "أنا أستريح الآن.",
      answer: "Ich ruhe mich jetzt aus.",
      accept: ["Ich ruhe mich jetzt aus.", "Ich ruhe mich jetzt aus"],
      explanation: "فعل sich ausruhen هو فعل منفصل وانعكاسي: الفاعل ich يأخذ mich والبادئة aus تذهب لنهاية الجملة."
    },
    {
      type: "fill-blank",
      question: "Kinder, zieht ___ schnell an!",
      answer: "euch",
      accept: ["euch"],
      explanation: "الخطاب موجه للأطفال (ihr)، وضمير الانعكاس لـ ihr هو euch."
    },
    {
      type: "multiple-choice",
      question: "Herr Schmidt, setzen Sie ___ bitte hierhin.",
      options: ["sich", "Ihnen", "mich", "euch"],
      correct: 0,
      explanation: "صيغة الاحترام Sie تأخذ دائماً ضمير الانعكاس sich."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Wir freuen sich auf das Fest.)",
      sentence: "Wir freuen sich auf das Fest.",
      corrected: "Wir freuen uns auf das Fest.",
      explanation: "الفاعل wir يتطلب ضمير الانعكاس uns وليس sich."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Wie fühlen Sie ___, Frau Müller?",
      options: ["sich", "mich", "dich"],
      correct: 0,
      explanation: "مع صيغة الاحترام Sie نستخدم دائماً ضمير الانعكاس sich."
    },
    {
      type: "multiple-choice",
      question: "Ich ärgere ___ über den Stau.",
      options: ["mich", "mir", "sich"],
      correct: 0,
      explanation: "الفعل sich ärgern مع ich يأخذ mich في حالة Akkusativ."
    },
    {
      type: "multiple-choice",
      question: "Ihr müsst ___ beeilen!",
      options: ["uns", "euch", "sich"],
      correct: 1,
      explanation: "الفاعل ihr (أنتم) يتطلب ضمير الانعكاس euch."
    },
    {
      type: "multiple-choice",
      question: "Die Studenten bereiten ___ auf die Prüfung vor.",
      options: ["sich", "uns", "euch"],
      correct: 0,
      explanation: "الطلاب (هم / sie) يأخذون ضمير الانعكاس sich."
    },
    {
      type: "multiple-choice",
      question: "Hast du ___ gestern erkältet?",
      options: ["mich", "dich", "sich"],
      correct: 1,
      explanation: "الفاعل du يتطلب ضمير الانعكاس dich."
    }
  ]
};
