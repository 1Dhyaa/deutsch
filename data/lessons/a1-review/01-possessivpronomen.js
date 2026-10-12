// data/lessons/a1-review/01-possessivpronomen.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-review-01"] = {
  id: "a1-review-01",
  level: "a1-review",
  order: 1,
  slug: "possessivpronomen",
  title: {
    de: "Possessivpronomen",
    ar: "ضمائر الملكية (mein, dein, sein...)"
  },
  tags: ["grammatik", "pronomen", "a1"],

  // 1. الهدف
  goal: "ستتعلم كيفية التعبير عن الملكية (كتابي، سيارتك، بيته...) وكيف تتغير نهايات ضمير الملكية حسب جنس الاسم وحالته الإعرابية.",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية، نستخدم ضمائر الملكية قبل الاسم مباشرة للدلالة على المالك. في حالة **الرفع (Nominativ)** تأخذ الضمائر الأشكال التالية:"
    },
    {
      type: "table",
      headers: ["الضمير الشخصي", "المالك بالعربية", "المذكر والمحايد (der / das)", "المؤنث والجمع (die / die)"],
      rows: [
        ["ich (أنا)", "ملكي (ـي)", "mein", "meine"],
        ["du (أنتَ / أنتِ)", "ملكك (ـك)", "dein", "deine"],
        ["er (هو)", "ملكه (ـه)", "sein", "seine"],
        ["es (هو/هي للمحايد)", "ملكه", "sein", "seine"],
        ["sie (هي)", "ملكها (ـها)", "ihr", "ihre"],
        ["wir (نحن)", "ملكنا (ـنا)", "unser", "unsere"],
        ["ihr (أنتم)", "ملككم", "euer", "eure"],
        ["sie (هم)", "ملكهم", "ihr", "ihre"],
        ["Sie (حضرتك)", "ملك حضرتكم", "Ihr", "Ihre"]
      ]
    },
    {
      type: "rule",
      content: "قاعدة ذهبية: ضمائر الملكية تأخذ **نفس نهايات أداة النكرة (ein)** تماماً! إذا كان مذكر في Akkusativ يأخذ -en (einen → meinen)."
    },
    {
      type: "text",
      content: "في حالة **النصب (Akkusativ)** يتغير المذكر فقط بإضافة **-en**، بينما تبقى بقية الحالات كما هي في الرفع:"
    },
    {
      type: "table",
      headers: ["الحالة الإعرابية", "مذكر (der Bruder)", "مؤنث (die Mutter)", "محايد (das Kind)", "جمع (die Freunde)"],
      rows: [
        ["Nominativ (فاعل)", "mein Bruder", "meine Mutter", "mein Kind", "meine Freunde"],
        ["Akkusativ (مفعول به)", "meinen Bruder", "meine Mutter", "mein Kind", "meine Freunde"],
        ["Dativ (مجرور)", "meinem Bruder", "meiner Mutter", "meinem Kind", "meinen Freunden"]
      ]
    }
  ],

  // 3. الأمثلة (8+ مع الترجمة وزر الصوت وتمييز القواعد)
  examples: [
    {
      de: "Das ist **mein** Vater und das ist **meine** Mutter.",
      ar: "هذا أبي وهذه أمي.",
      highlight: "mein",
      audio: true,
      note: "Vater (مذكر) ← mein | Mutter (مؤنث) ← meine"
    },
    {
      de: "Wo ist **dein** Schlüssel?",
      ar: "أين مفتاحك؟",
      highlight: "dein",
      audio: true,
      note: "der Schlüssel مذكر في حالة فاعل (Nominativ)"
    },
    {
      de: "Ich suche **meinen** Koffer.",
      ar: "أنا أبحث عن حقيبتي.",
      highlight: "meinen",
      audio: true,
      note: "der Koffer مذكر مفعول به (Akkusativ) ← يضاف -en"
    },
    {
      de: "Thomas liebt **seine** Arbeit.",
      ar: "توماس يحب عمله.",
      highlight: "seine",
      audio: true,
      note: "die Arbeit مؤنث ← seine"
    },
    {
      de: "Anna hilft **ihrem** Bruder.",
      ar: "آنّا تساعد أخيها.",
      highlight: "ihrem",
      audio: true,
      note: "helfen يأخذ Dativ للمذكر ← ihrem"
    },
    {
      de: "Wir verkaufen **unser** Auto.",
      ar: "نحن نبيع سيارتنا.",
      highlight: "unser",
      audio: true,
      note: "das Auto محايد في Akkusativ يبقى بدون نهاية (unser)"
    },
    {
      de: "Ist das **euer** Haus?",
      ar: "هل هذا منزلكم؟",
      highlight: "euer",
      audio: true,
      note: "das Haus محايد ← euer (بدون نهاية)"
    },
    {
      de: "Wo wohnen **Ihre** Eltern, Herr Müller?",
      ar: "أين يسكن والدا حضرتك يا سيد مولر؟",
      highlight: "Ihre",
      audio: true,
      note: "die Eltern جمع + صيغة الاحترام ← Ihre بحرف كبير"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في العربية الملكية ضمير متصل بآخر الكلمة (كتابـ**ي**، سيارتـ**ك**)، بينما في الألمانية كلمة منفصلة تأتي **قبل** الاسم (mein Buch).",
    "انتبه للمذكر في المفعول به: في العربية لا تتغير الكلمة للملكية، لكن في الألمانية يجب إضافة **-en** للمذكر: Ich besuche **meinen** Onkel (مش mein Onkel).",
    "احذر من الخلط بين euer و eure: عندما نضيف نهاية لـ euer تُحذف الـ e الأولى: euer Auto ← eur**e** Tasche."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "المذكر والمحايد في الفاعل: mein, dein, sein, ihr, unser, euer, ihr (بدون نهاية)",
    "المؤنث والجمع دائماً ينتهي بـ -e: meine, deine, seine, eure...",
    "المذكر في Akkusativ ينتهي دائماً بـ -en: meinen, deinen, seinen...",
    "الجنس يحدده الاسم المملوك، وليس الشخص المالك!"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "der Schlüssel", plural: "die Schlüssel", ar: "المفتاح", article: "der", example: "Wo ist mein Schlüssel?" },
    { de: "die Tasche", plural: "die Taschen", ar: "الحقيبة", article: "die", example: "Das ist deine Tasche." },
    { de: "das Buch", plural: "die Bücher", ar: "الكتاب", article: "das", example: "Er liest sein Buch." },
    { de: "der Koffer", plural: "die Koffer", ar: "حقيبة السفر", article: "der", example: "Ich packe meinen Koffer." },
    { de: "die Familie", plural: "die Familien", ar: "العائلة", article: "die", example: "Meine Familie lebt in Algerien." },
    { de: "das Handy", plural: "die Handys", ar: "الهاتف المحمول", article: "das", example: "Wo liegt dein Handy?" }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Das ist ___ Mutter. (die Mutter = مؤنث)",
      options: ["mein", "meine", "meinen", "meines"],
      correct: 1,
      explanation: "die Mutter اسم مؤنث، لذلك نستخدم meine بإضافة حرف e."
    },
    {
      type: "fill-blank",
      question: "Ich habe ___ Stift verloren. (der Stift = مذكر، في حالة Akkusativ)",
      answer: "meinen",
      accept: ["meinen"],
      explanation: "der Stift مذكر وموقعه مفعول به (Akkusativ)، لذلك يأخذ mein النهاية -en تصبح meinen."
    },
    {
      type: "word-order",
      question: "رتب الجملة التالية: (أين تسكن أختك؟)",
      words: ["wohnt", "deine", "Wo", "Schwester", "?"],
      correct: "Wo wohnt deine Schwester ?",
      explanation: "ترتيب السؤال بأداة استفهام: أداة الاستفهام (Wo) + الفعل ثانياً (wohnt) + الفاعل (deine Schwester)."
    },
    {
      type: "multiple-choice",
      question: "Peter sucht ___ Handy. (das Handy = محايد، حالة Akkusativ)",
      options: ["sein", "seine", "seinen", "seinem"],
      correct: 0,
      explanation: "das Handy محايد، والضمير العائد على Peter هو sein ويبقى بدون نهاية في الرفع والنصب."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في الجملة التالية: (Ich besuche mein Bruder.)",
      sentence: "Ich besuche mein Bruder.",
      corrected: "Ich besuche meinen Bruder.",
      explanation: "der Bruder مذكر ويقع مفعولاً به بعد الفعل besuchen (Akkusativ)، فالصحيح meinen Bruder."
    },
    {
      type: "match",
      question: "طابق بين الكلمة الألمانية ومعناها بالعربية:",
      pairs: [
        { left: "mein Vater", right: "أبي" },
        { left: "deine Tasche", right: "حقيبتك" },
        { left: "unser Haus", right: "منزلنا" },
        { left: "ihre Kinder", right: "أطفالها" }
      ]
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (هذا كتابي.)",
      from: "هذا كتابي.",
      answer: "Das ist mein Buch.",
      accept: ["Das ist mein Buch", "Das ist mein Buch."],
      explanation: "das Buch محايد، لذلك ضمير الملكية mein يبقى بدون نهاية."
    },
    {
      type: "fill-blank",
      question: "Wir lieben ___ Stadt. (die Stadt = مؤنث)",
      answer: "unsere",
      accept: ["unsere"],
      explanation: "الضمير العائد على wir هو unser، ولأن Stadt مؤنث نضيف -e فتصبح unsere."
    },
    {
      type: "multiple-choice",
      question: "Kinder, wo sind ___ Schultaschen? (أنتم = ihr)",
      options: ["euer", "eure", "euren", "ihre"],
      correct: 1,
      explanation: "الخطاب موجه للأطفال (ihr)، وحقائب المدرسة جمع مؤنث die Taschen، فتحذف e وتصبح eure."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Sie liebt ihr Hund.)",
      sentence: "Sie liebt ihr Hund.",
      corrected: "Sie liebt ihren Hund.",
      explanation: "der Hund مذكر ومفعول به بعد lieben، فيأخذ ihr اللاحقة -en ليصبح ihren Hund."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة مع الحفظ في سجل الأخطاء)
  quiz: [
    {
      type: "multiple-choice",
      question: "Wo liegt ___ Pass? (der Pass = مذكر، في حالة فاعل Nominativ)",
      options: ["mein", "meine", "meinen"],
      correct: 0,
      explanation: "der Pass اسم مذكر في حالة فاعل Nominativ، يأخذ mein بدون أي نهاية."
    },
    {
      type: "multiple-choice",
      question: "Ich rufe morgen ___ Arzt an. (der Arzt = مذكر، مفعول به Akkusativ)",
      options: ["mein", "meinen", "meinem"],
      correct: 1,
      explanation: "الفعل anrufen يتطلب مفعولاً به (Akkusativ) للمذكر der Arzt ← meinen."
    },
    {
      type: "multiple-choice",
      question: "Monika fährt mit ___ Auto zur Arbeit. (das Auto = محايد)",
      options: ["sein", "ihr", "ihrem"],
      correct: 2,
      explanation: "حرف الجر mit يطلب دائماً حالة المجرور (Dativ). الاسم محايد (das Auto) والضمير لـ Monika هو ihr مع نهاية الداتيف -em ← ihrem Auto."
    },
    {
      type: "multiple-choice",
      question: "Wir verkaufen ___ Wohnung. (die Wohnung = مؤنث)",
      options: ["unser", "unsere", "unseren"],
      correct: 1,
      explanation: "die Wohnung اسم مؤنث، لذلك نستخدم unsere بإضافة -e."
    },
    {
      type: "multiple-choice",
      question: "Habt ihr ___ Hausaufgaben gemacht? (die Hausaufgaben = جمع)",
      options: ["euer", "eure", "euren"],
      correct: 1,
      explanation: "الاسم جمع (die Hausaufgaben)، والضمير لـ ihr يصبح eure."
    }
  ]
};
