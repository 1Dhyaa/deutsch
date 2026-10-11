// data/lessons/a2-2/01-adjektive.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-2-01"] = {
  id: "a2-2-01",
  level: "a2-2",
  order: 1,
  slug: "adjektive",
  title: {
    de: "Die Adjektive (Adjektivdeklination)",
    ar: "تصريف الصفات قبل الاسم (نهايات الصفات)"
  },
  tags: ["grammatik", "adjektive", "deklination", "a2"],

  // 1. الهدف
  goal: "ستتعلم القواعد الأساسية لنهايات الصفات عندما تأتي قبل الاسم مباشرة (مثل: das neue Auto، ein guter Freund)، وكيف تختلف النهايات بحسب الأداة والحالة الإعرابية.",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "في الألمانية، إذا جاءت الصفة بعد فعل الكينونة (sein) مثل: *Das Auto ist neu*، فإنها **لا تأخذ أي نهاية**. لكن إذا جاءت الصفة **قبل الاسم مباشرة** مثل: *das neu**e** Auto*، فيجب أن تأخذ نهاية إعرابية محددة."
    },
    {
      type: "text",
      content: "النوع الأول: **بعد أداة المعرفة (der / die / das)**. وتسمى هذه نهايات الضعيفة (Schwache Deklination). القاعدة سهلة جداً: تأخذ الصفة إما **-e** أو **-en** فقط!"
    },
    {
      type: "table",
      headers: ["الحالة الإعرابية", "مذكر (der)", "مؤنث (die)", "محايد (das)", "جمع (die)"],
      rows: [
        ["Nominativ (فاعل)", "der neu**e** Tisch", "die neu**e** Tasche", "das neu**e** Auto", "die neu**en** Bücher"],
        ["Akkusativ (مفعول به)", "den neu**en** Tisch", "die neu**e** Tasche", "das neu**e** Auto", "die neu**en** Bücher"],
        ["Dativ (مجرور)", "dem neu**en** Tisch", "der neu**en** Tasche", "dem neu**en** Auto", "den neu**en** Büchern"]
      ]
    },
    {
      type: "rule",
      content: "قاعدة مبسطة للمعرف بـ der/die/das: تأخذ الصفة **-e** في حالة الرفع فقط (والمؤنث والمحايد في النصب). في **كل الحالات الأخرى** (الجمع دائماً، كل حالات Dativ، والمذكر في Akkusativ) تأخذ الصفة **-en**!"
    },
    {
      type: "text",
      content: "النوع الثاني: **بعد أداة النكرة (ein / eine) أو الملكية (mein / dein)**:"
    },
    {
      type: "table",
      headers: ["الحالة الإعرابية", "مذكر (ein)", "مؤنث (eine)", "محايد (ein)"],
      rows: [
        ["Nominativ (فاعل)", "ein gut**er** Mann (-er مثل der)", "eine gut**e** Frau (-e مثل die)", "ein gut**es** Kind (-es مثل das)"],
        ["Akkusativ (مفعول به)", "einen gut**en** Mann (-en)", "eine gut**e** Frau (-e)", "ein gut**es** Kind (-es)"],
        ["Dativ (مجرور)", "einem gut**en** Mann (-en)", "einer gut**en** Frau (-en)", "einem gut**en** Kind (-en)"]
      ]
    }
  ],

  // 3. الأمثلة (8+ أمثلة نموذجية)
  examples: [
    {
      de: "Das ist ein **schönes** Haus.",
      ar: "هذا منزل جميل.",
      highlight: "schönes",
      audio: true,
      note: "das Haus محايد بعد ein ← تأخذ الصفة -es"
    },
    {
      de: "Der **neue** Nachbar ist sehr freundlich.",
      ar: "الجار الجديد ودود للغاية.",
      highlight: "neue",
      audio: true,
      note: "der Nachbar مذكر معرف في Nominativ ← تأخذ الصفة -e"
    },
    {
      de: "Ich kaufe den **blauen** Pullover.",
      ar: "أنا سأشتري السترة الزرقاء.",
      highlight: "blauen",
      audio: true,
      note: "den Pullover مذكر في Akkusativ ← تأخذ الصفة -en"
    },
    {
      de: "Sie hat eine **kleine** Katze.",
      ar: "لديها قطة صغيرة.",
      highlight: "kleine",
      audio: true,
      note: "die Katze مؤنث بعد eine ← تأخذ الصفة -e"
    },
    {
      de: "Wir wohnen in einer **großen** Wohnung.",
      ar: "نحن نسكن في شقة كبيرة.",
      highlight: "großen",
      audio: true,
      note: "Dativ مع في (in einer) ← كل الصفات في Dativ تأخذ -en"
    },
    {
      de: "Das **rote** Auto gehört meinem Bruder.",
      ar: "السيارة الحمراء تخص أخي.",
      highlight: "rote",
      audio: true,
      note: "das Auto محايد معرف في Nominativ ← تأخذ الصفة -e"
    },
    {
      de: "Er trinkt gerne **schwarzen** Kaffee.",
      ar: "هو يحب شرب القهوة السوداء.",
      highlight: "schwarzen",
      audio: true,
      note: "بدون أداة للمذكر في Akkusativ تأخذ إعراب الأداة (-en)"
    },
    {
      de: "Die **fleißigen** Studenten bestehen die Prüfung.",
      ar: "الطلاب المجتهدون يجتازون الامتحان.",
      highlight: "fleißigen",
      audio: true,
      note: "الجمع المعرف دائماً صفته تأخذ -en"
    }
  ],

  // 4. نصائح للناطقين بالعربية
  arabicTips: [
    "في العربية، الصفة تأتي **بعد** الاسم وتطابقه في «الـ» التعريف (البيت **الكبير**). أما في الألمانية، فالصفة تأتي دائماً **قبل** الاسم (das **große** Haus) ولا نكرر أداة التعريف مع الصفة.",
    "إذا كانت الصفة خبراً بعد الفعل (sein / werden)، فلا تأخذ أي نهاية إطلاقاً: *Das Haus ist groß* (بدون -e أو -es). النهايات تُوضع **فقط** إذا سبقت الصفة الاسم مباشرة.",
    "قاعدة ذهبية مريحة: أي صفة في حالة **الجر (Dativ)** أو مع **الجمع** تنتهي حتماً بـ **-en**!"
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "الصفة بعد sein لا تُصرَّف أبداً: Das Bild ist schön",
    "بعد der / die / das: النهاية هي -e في الرفع والمحايد والمؤنث، و -en في بقية الحالات",
    "بعد ein: المذكر يأخذ -er (ein guter)، المحايد يأخذ -es (ein schönes)، المؤنث يأخذ -e (eine schöne)",
    "في حالة Dativ وفي الجمع: النهاية دائماً -en بدون استثناء"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "groß", plural: "größer, am größten", ar: "كبير", article: "", example: "Das ist ein großes Zimmer." },
    { de: "klein", plural: "kleiner, am kleinsten", ar: "صغير", article: "", example: "Ich habe eine kleine Wohnung." },
    { de: "neu", plural: "neuer, am neuesten", ar: "جديد", article: "", example: "Mein neues Auto ist rot." },
    { de: "alt", plural: "älter, am ältesten", ar: "قديم / كبير بالسن", article: "", example: "Die alte Stadt ist schön." },
    { de: "schön", plural: "schöner, am schönsten", ar: "جميل", article: "", example: "Sie trägt ein schönes Kleid." },
    { de: "teuer", plural: "teurer, am teuersten", ar: "غالٍ / باهظ الثمن", article: "", example: "Das ist ein teurer Koffer." }
  ],

  // 7. تمارين تفاعلية (10 تمارين)
  exercises: [
    {
      type: "multiple-choice",
      question: "Das ist ein ___ Auto. (das Auto = محايد)",
      options: ["neu", "neuer", "neues", "neuen"],
      correct: 2,
      explanation: "بعد أداة النكرة ein لاسم محايد (das Auto)، تأخذ الصفة النهاية -es لتشير إلى جنس المحايد (neues)."
    },
    {
      type: "fill-blank",
      question: "Der ___ Mann liest ein Buch. (alt = كبير بالسن / مذكر Nominativ)",
      answer: "alte",
      accept: ["alte"],
      explanation: "بعد أداة المعرفة der في حالة الرفع، تأخذ الصفة النهاية -e فقط (der alte Mann)."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (أنا أشتري القميص الأزرق)",
      words: ["kaufe", "blaue", "das", "Ich", "Hemd", "."],
      correct: "Ich kaufe das blaue Hemd .",
      explanation: "الفاعل (Ich) + الفعل (kaufe) + المفعول به الصفة والموصوف (das blaue Hemd)."
    },
    {
      type: "multiple-choice",
      question: "Ich trinke gern ___ Tee. (der Tee = مذكر، في حالة Akkusativ)",
      options: ["heißer", "heiße", "heißen", "heißes"],
      correct: 2,
      explanation: "مذكر في حالة النصب (Akkusativ) بدون أداة، تأخذ الصفة نهاية الأداة den وهي -en (heißen)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Das Haus ist schönes.)",
      sentence: "Das Haus ist schönes.",
      corrected: "Das Haus ist schön.",
      explanation: "إذا جاءت الصفة خبراً بعد فعل الكينونة (ist) لا تأخذ أي نهاية إعرابية."
    },
    {
      type: "match",
      question: "طابق بين التركيب الصحيح للصفة وترجمته:",
      pairs: [
        { left: "ein guter Freund", right: "صديق جيد" },
        { left: "eine neue Tasche", right: "حقيبة جديدة" },
        { left: "das schöne Bild", right: "الصورة الجميلة" },
        { left: "die alten Bücher", right: "الكتب القديمة" }
      ]
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (هو رجل لطيف.) (nett = لطيف)",
      from: "هو رجل لطيف.",
      answer: "Er ist ein netter Mann.",
      accept: ["Er ist ein netter Mann.", "Er ist ein netter Mann"],
      explanation: "der Mann مذكر بعد ein في حالة فاعل، فتأخذ الصفة nett النهاية -er (netter Mann)."
    },
    {
      type: "fill-blank",
      question: "Wir wohnen in einer ___ Stadt. (groß = كبير / Dativ مؤنث)",
      answer: "großen",
      accept: ["großen", "grossen"],
      explanation: "في حالة Dativ تأخذ جميع الصفات دائماً النهاية -en (großen)."
    },
    {
      type: "multiple-choice",
      question: "Sie hat die ___ Schuhe gekauft. (die Schuhe = جمع)",
      options: ["roten", "rote", "roter", "rotes"],
      correct: 0,
      explanation: "الصفة مع الاسم الجمع المعرف بـ die تأخذ دائماً النهاية -en (die roten Schuhe)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich habe ein neues Koffer gekauft.)",
      sentence: "Ich habe ein neues Koffer gekauft.",
      corrected: "Ich habe einen neuen Koffer gekauft.",
      explanation: "der Koffer مذكر وموقعه مفعول به (Akkusativ)، فتكون الأداة einen والصفة تأخذ -en (einen neuen Koffer)."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Das ist ein ___ Kind. (das Kind = محايد)",
      options: ["kleiner", "kleine", "kleines"],
      correct: 2,
      explanation: "بعد ein مع الاسم المحايد تأخذ الصفة النهاية -es (kleines Kind)."
    },
    {
      type: "multiple-choice",
      question: "Kennst du den ___ Lehrer? (der Lehrer = مذكر Akkusativ)",
      options: ["neue", "neuen", "neuer"],
      correct: 1,
      explanation: "بعد أداة المعرفة den في Akkusativ تأخذ الصفة النهاية -en (den neuen Lehrer)."
    },
    {
      type: "multiple-choice",
      question: "Meine Mutter backt einen ___ Kuchen. (der Kuchen = مذكر)",
      options: ["leckerer", "leckere", "leckeren"],
      correct: 2,
      explanation: "بعد einen (مذكر Akkusativ) تأخذ الصفة دائماً -en (leckeren)."
    },
    {
      type: "multiple-choice",
      question: "Die Suppe ist sehr ___.",
      options: ["heiß", "heiße", "heißen"],
      correct: 0,
      explanation: "الصفة بعد ist تأتي بدون أي نهاية (heiß)."
    },
    {
      type: "multiple-choice",
      question: "Er hilft der ___ Frau. (die Frau = مؤنث Dativ)",
      options: ["alte", "alten", "alter"],
      correct: 1,
      explanation: "في حالة الجر Dativ تنتهي الصفة دائماً بـ -en (der alten Frau)."
    }
  ]
};
