// website/data/lessons/a1-review/14-verben-akkusativ.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-review-14"] = {
  id: "a1-review-14",
  level: "a1-review",
  order: 14,
  slug: "verben-akkusativ",
  title: {
    de: "Verben mit Akkusativ",
    ar: "أفعال تأخذ مفعولاً به منصوباً (Akkusativ)"
  },
  tags: ["grammatik", "akkusativ", "verben", "kasus", "pronomen", "a1"],

  // 1. الهدف
  goal: "ستتعرف على أهم الأفعال الألمانية التي تتطلب مفعولاً به في حالة النصب (Akkusativ)، وكيف تتغير أدوات التعريف والنكرة والضمائر الشخصية معها بدقة واحترافية.",

  // 2. الشرح المبسط بالعربية مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية، تسمى الأفعال التي تحتاج مفعولاً به مباشراً بـ **الأفعال المتعدية (Transitive Verben)**، ويكون هذا المفعول دائماً في حالة **النصب (Der Akkusativ)**. نسأل عن المفعول به المنصوب بـ **Wen?** (مَن؟ للعاقل) أو **Was?** (ماذا؟ لغير العاقل)."
    },
    {
      type: "rule",
      content: "قاعدة ذهبية في الأكوزاتيف: الاسم المذكر (Maskulin) هو الوحيد الذي تتغير أداته! der تصبح **den**، و ein تصبح **einen**، و kein تصبح **keinen**، و mein تصبح **meinen**. أما المؤنث (die) والمحايد (das) والجمع (die) فتبقى تماماً كما هي في حالة الرفع!"
    },
    {
      type: "table",
      headers: ["الجنس النحوي", "الرفع (Nominativ)", "المعرفة (Akkusativ)", "النكرة (Akkusativ)", "النفي (Akkusativ)"],
      rows: [
        ["المذكر (Maskulin)", "der / ein Mann", "**den** Mann", "**einen** Mann", "**keinen** Mann"],
        ["المحايد (Neutral)", "das / ein Kind", "das Kind", "ein Kind", "kein Kind"],
        ["المؤنث (Feminin)", "die / eine Frau", "die Frau", "eine Frau", "keine Frau"],
        ["الجمع (Plural)", "die / - Kinder", "die Kinder", "- Kinder", "keine Kinder"]
      ]
    },
    {
      type: "text",
      content: "عندما يكون المفعول به في حالة النصب **ضميراً شخصياً** (وليس اسماً)، يتحول الضمير من حالة الرفع (Nominativ) إلى حالة النصب (Akkusativ):"
    },
    {
      type: "table",
      headers: ["ضمير الفاعل (Nominativ)", "ضمير المفعول به (Akkusativ)", "المعنى بالعربية", "مثال توضيحي"],
      rows: [
        ["ich (أنا)", "**mich**", "إياي (ـني)", "Er hört mich. (هو يسمعني)"],
        ["du (أنتَ)", "**dich**", "إياك (ـكَ)", "Ich liebe dich. (أنا أحبك)"],
        ["er (هو)", "**ihn**", "إياه (ـه للمذكر)", "Ich kenne ihn. (أنا أعرفه)"],
        ["es (هو/هي محايد)", "**es**", "إياه (للمحايد)", "Ich suche es. (أنا أبحث عنه)"],
        ["sie (هي)", "**sie**", "إياها (ـها)", "Wir besuchen sie. (نحن نزورها)"],
        ["wir (نحن)", "**uns**", "إيانا (ـنا)", "Er ruft uns an. (هو يتصل بنا)"],
        ["ihr (أنتم)", "**euch**", "إياكم (ـكم)", "Ich lade euch ein. (أنا أدعوكم)"],
        ["sie (هم)", "**sie**", "إياهم", "Ich frage sie. (أنا أسألهم)"],
        ["Sie (حضرتك)", "**Sie**", "حضرتكم", "Ich verstehe Sie. (أنا أفهم حضرتكم)"]
      ]
    },
    {
      type: "text",
      content: "أهم المجموعات الفعلية التي تأخذ مفعولاً به منصوباً (Akkusativ) في الألمانية:\n1. **أفعال التملك والاحتياج:** haben (يملك), brauchen (يحتاج), suchen (يبحث عن), finden (يجد), kaufen (يشتري).\n2. **أفعال الطعام والشراب:** essen (يأكل), trinken (يشرب), bestellen (يطلب/يوصي), kochen (يطبخ).\n3. **أفعال الإدراك والتواصل:** sehen (يرى), hören (يسمع), lesen (يقرأ), schreiben (يكتب), anrufen (يتصل بـ), kennen (يعرف شخصاً), einladen (يدعو), besuchen (يزور), fragen (يسأل)."
    },
    {
      type: "rule",
      content: "انتبه للأفعال المنفصلة التي تأخذ أكوزاتيف: anrufen (Ich rufe **dich** an) و einladen (Ich lade **ihn** ein)."
    }
  ],

  // 3. الأمثلة (9 أمثلة مع تمييز القواعد وزر النطق والترجمة)
  examples: [
    {
      de: "Ich habe **einen** großen Bruder und eine kleine Schwester.",
      ar: "لدي أخ كبير وأخت صغيرة.",
      highlight: "einen",
      audio: true,
      note: "der Bruder مذكر مع haben ← مفعول به منصوب: einen Bruder"
    },
    {
      de: "Brauchst du **den** schwarzen Kugelschreiber hier?",
      ar: "هل تحتاج القلم الجاف الأسود هنا؟",
      highlight: "den",
      audio: true,
      note: "der Kugelschreiber مذكر مع brauchen ← den Kugelschreiber"
    },
    {
      de: "Thomas sucht schon den ganzen Tag **seinen** Schlüssel.",
      ar: "يبحث توماس طوال اليوم عن مفتاحه.",
      highlight: "seinen",
      audio: true,
      note: "der Schlüssel مذكر مع suchen ← seinen Schlüssel"
    },
    {
      de: "Wir möchten **einen** Kaffee und **ein** Wasser bestellen.",
      ar: "نريد أن نطلب قهوة وماءً.",
      highlight: "einen",
      audio: true,
      note: "der Kaffee مذكر ← einen | das Wasser محايد ← ein"
    },
    {
      de: "Kannst du **mich** heute Abend nach der Arbeit anrufen?",
      ar: "هل يمكنك أن تتصل بي هذا المساء بعد العمل؟",
      highlight: "mich",
      audio: true,
      note: "anrufen يأخذ مفعولاً به منصوباً مباشرة: mich"
    },
    {
      de: "Ich kenne **ihn** schon seit vielen Jahren.",
      ar: "أنا أعرفه منذ سنوات عديدة.",
      highlight: "ihn",
      audio: true,
      note: "er يتحول في Akkusativ إلى ihn (مفعول به للفعل kennen)"
    },
    {
      de: "Der Lehrer fragt **den** neuen Schüler.",
      ar: "يسأل المعلم التلميذ الجديد.",
      highlight: "den",
      audio: true,
      note: "fragen يأخذ مفعولاً به منصوباً: den neuen Schüler"
    },
    {
      de: "Wir laden **euch** alle herzlich zu unserer Party ein.",
      ar: "ندعوكم جميعاً بحرارة إلى حفلتنا.",
      highlight: "euch",
      audio: true,
      note: "ihr يتحول في Akkusativ إلى euch (مفعول به لـ einladen)"
    },
    {
      de: "Er liest jeden Morgen **die** Zeitung und trinkt **einen** Tee.",
      ar: "يقرأ كل صباح الجريدة ويشرب شاياً.",
      highlight: "die",
      audio: true,
      note: "die Zeitung مؤنث لا تتغير | der Tee مذكر يصبح einen"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "أفعال تأخذ حرف جر بالعربية لكنها تأخذ مفعولاً مباشراً بالألمانية: في العربية نقول 'أتصل بك' (حرف جر) أو 'أبحث عنك' (عن)، لكن في الألمانية الفعلين anrufen و suchen متعديان مباشرة: نقول 'Ich rufe dich an' و 'Ich suche den Schlüssel' بدون أي حرف جر!",
    "تذكر دائماً أن المذكر فقط هو الذي يتغير: die للمؤنث و das للمحايد و die للجمع لا تتغير إطلاقاً بين الرفع والنصب. إذا كان الاسم غير مذكر، فلا تشغل بالك بتغيير الأداة في Akkusativ.",
    "الفرق بين kennen و wissen: الفعل kennen يتطلب مفعولاً به منصوباً في Akkusativ (شخص، مدينة، فيلم معروف): Ich kenne **ihn** / Ich kenne **den** Weg. أما wissen فيستخدم للمعرفة المجردة والحقائق العامة وغالباً ما تليه جملة: Ich weiß das / Ich weiß nicht."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "حالة Akkusativ تجيب عن السؤال: Wen? (للعاقل) أو Was? (لغير العاقل والأشياء).",
    "في Akkusativ يتغير المذكر فقط: der ← den، و ein ← einen، و kein ← keinen، و mein ← meinen.",
    "المؤنث (die / eine) والمحايد (das / ein) والجمع (die) لا يتغيرون نهائياً بين الفاعل والمفعول به.",
    "ضمائر النصب الشخصية: mich, dich, ihn, es, sie, uns, euch, sie, Sie.",
    "أفعال هامة تأخذ Akkusativ مباشرة بدون حروف جر: haben, brauchen, suchen, finden, anrufen, einladen, kennen."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "der Akkusativ", plural: "-", ar: "حالة النصب (المفعول به)", article: "der", example: "Das Verb verlangt den Akkusativ." },
    { de: "anrufen", plural: "-", ar: "يتصل هاتفياً بـ (يأخذ Akkusativ)", article: "", example: "Ich rufe dich morgen an." },
    { de: "einladen", plural: "-", ar: "يدعو (يأخذ Akkusativ)", article: "", example: "Er lädt uns zur Party ein." },
    { de: "kennen", plural: "-", ar: "يعرف شخصاً/شيئاً (يأخذ Akkusativ)", article: "", example: "Kennst du diesen Mann?" },
    { de: "brauchen", plural: "-", ar: "يحتاج (يأخذ Akkusativ)", article: "", example: "Wir brauchen einen neuen Tisch." },
    { de: "der Kugelschreiber", plural: "die Kugelschreiber", ar: "قلم الحبر الجاف", article: "der", example: "Wo ist mein Kugelschreiber?" },
    { de: "der Schlüssel", plural: "die Schlüssel", ar: "المفتاح", article: "der", example: "Er sucht den Schlüssel." },
    { de: "der Gast", plural: "die Gäste", ar: "الضيف", article: "der", example: "Wir begrüßen den Gast." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "اختر الأداة الصحيحة: Ich brauche ___ Tisch (der Tisch = مذكر).",
      options: ["den", "der", "das", "dem"],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "Tisch مذكر (der)، ومع الفعل brauchen يقع مفعولاً به منصوباً (Akkusativ)، فتتحول der إلى den."
    },
    {
      type: "fill-blank",
      question: "املأ الفراغ بالضمير الشخصي المناسب في Akkusativ (هو = er):",
      sentence: "Siehst du Peter da drüben? - Ja, ich kenne ___ sehr gut.",
      answer: "ihn",
      accept: ["ihn"],
      options: ["ihn", "er", "ihm"],
      answer: "ihn",
      explanation: "الضمير er يتحول في حالة النصب (Akkusativ) كمفعول به للفعل kennen إلى ihn."
    },
    {
      type: "word-order",
      question: "رتب الجملة بالشكل الصحيح:",
      words: ["Ich", "rufe", "morgen", "dich", "an"],
      answer: "Ich rufe dich morgen an",
      correct: "Ich rufe dich morgen an",
      correct: "Ich rufe dich morgen an",
      explanation: "الفاعل (Ich) + الفعل المصرّف (rufe) + ضمير النصب (dich) + الظرف (morgen) + البادئة المنفصلة في النهاية (an)."
    },
    {
      type: "multiple-choice",
      question: "اختر الضمير الصحيح: Er ruft ___ heute Abend an. (أنا)",
      options: ["mich", "mir", "ich", "mein"],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "الفعل anrufen يأخذ مفعولاً به في حالة النصب (Akkusativ)، وضمير النصب لـ ich هو mich."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ الإعرابي في أداة النكرة للمذكر التالي:",
      text: "Ich habe ein Hund.",
      sentence: "Ich habe ein Hund.",
      incorrect: "Ich habe ein Hund.",
      answer: "Ich habe einen Hund.",
      correct: "Ich habe einen Hund.",
      corrected: "Ich habe einen Hund.",
      accept: ["Ich habe einen Hund", "Ich habe einen Hund."],
      explanation: "der Hund اسم مذكر، ومع الفعل haben يكون في حالة النصب، فتصبح أداة النكرة einen Hund."
    },
    {
      type: "match",
      question: "طابق كل ضمير فاعل (Nominativ) مع ضمير النصب المقابل له (Akkusativ):",
      pairs: [
        { left: "ich (أنا)", right: "mich" },
        { left: "du (أنت)", right: "dich" },
        { left: "er (هو)", right: "ihn" },
        { left: "ihr (أنتم)", right: "euch" }
      ],
      explanation: "ich → mich, du → dich, er → ihn, ihr → euch."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: هل تحتاج القلم؟ (der Stift)",
      text: "هل تحتاج القلم؟",
      answer: "Brauchst du den Stift?",
      answer: "Brauchst du den Stift?",
      accept: [
        "Brauchst du den Stift",
        "Brauchst du den Stift?",
        "Brauchen Sie den Stift",
        "Brauchen Sie den Stift?"
      ],
      explanation: "Stift اسم مذكر، يقع مفعولاً به بعد brauchen فيأخذ أداة النصب den Stift."
    },
    {
      type: "fill-blank",
      question: "املأ الفراغ بضمير الملكية المناسب في Akkusativ (der Onkel / wir):",
      sentence: "Wir besuchen am Wochenende ___ Onkel.",
      answer: "unseren",
      accept: ["unseren"],
      options: ["unseren", "unser", "unsere"],
      answer: "unseren",
      explanation: "der Onkel مذكر ومفعول به بعد besuchen، فيأخذ ضمير الملكية نهاية -en تصبح unseren."
    },
    {
      type: "error-correction",
      question: "صحح الضمير في جملة الدعوة التالية:",
      text: "Ich lade du herzlich ein.",
      sentence: "Ich lade du herzlich ein.",
      incorrect: "Ich lade du herzlich ein.",
      answer: "Ich lade dich herzlich ein.",
      correct: "Ich lade dich herzlich ein.",
      corrected: "Ich lade dich herzlich ein.",
      accept: ["Ich lade dich herzlich ein", "Ich lade dich herzlich ein."],
      explanation: "الفعل einladen يطلب مفعولاً به منصوباً، وضمير النصب لـ du هو dich وليس du."
    },
    {
      type: "multiple-choice",
      question: "ما هي أداة الاستفهام المستخدمة للسؤال عن شخص في حالة Akkusativ؟",
      options: ["Wen", "Wer", "Wem", "Was"],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "نسأل عن الفاعل العاقل بـ Wer، وعن المفعول به المنصوب العاقل بـ Wen؟ (Wen hast du gesehen?)."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة متعددة الخيارات)
  quiz: [
    {
      type: "multiple-choice",
      question: "Welcher Artikel passt? «Er trinkt jeden Morgen ___ schwarzen Tee (der Tee).»",
      options: ["einen", "ein", "eine"],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "Tee اسم مذكر (der Tee)، وفي حالة Akkusativ مع trinken يأخذ einen."
    },
    {
      type: "multiple-choice",
      question: "Welches Pronomen ist richtig? «Wo ist mein Schlüssel? Ich finde ___ nicht!»",
      options: ["ihn", "er", "es"],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "der Schlüssel مذكر، والضمير العائد عليه في حالة النصب هو ihn."
    },
    {
      type: "multiple-choice",
      question: "Welcher Satz ist grammatisch fehlerfrei?",
      options: [
        "Ich lade meinen Freund zur Party ein.",
        "Ich lade mein Freund zur Party ein.",
        "Ich lade meinem Freund zur Party ein."
      ],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "الفعل einladen يأخذ Akkusativ، والمذكر der Freund يأخذ meinen Freund."
    },
    {
      type: "multiple-choice",
      question: "«Kennst du Frau Müller?» - «Ja, ich kenne ___ sehr gut.»",
      options: ["sie", "ihr", "ihn"],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "Frau Müller مؤنث، وضمير النصب العائد عليها هو sie."
    },
    {
      type: "multiple-choice",
      question: "Welche Aussage über den Akkusativ ist richtig?",
      options: [
        "Nur maskuline Artikel (der/ein) verändern sich im Akkusativ.",
        "Alle Artikel verändern sich im Akkusativ.",
        "Nur feminine Artikel verändern sich im Akkusativ."
      ],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "في حالة Akkusativ، يتغير المذكر فقط (der → den, ein → einen)، بينما تبقى باقي الأجناس كما هي."
    }
  ]
};

window.lessons = window.LESSONS;
