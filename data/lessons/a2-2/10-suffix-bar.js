// data/lessons/a2-2/10-suffix-bar.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-2-10"] = {
  id: "a2-2-10",
  level: "a2-2",
  order: 10,
  slug: "suffix-bar",
  title: {
    de: "Das Suffix »-bar«",
    ar: "اللاحقة (-bar) واشتقاق الصفات (قابل لـ / يمكن أن)"
  },
  tags: ["wortbildung", "suffix", "bar", "adjektive", "a2-2", "wortschatz"],

  // 1. الهدف من الدرس
  goal: "ستتعلم كيفية اشتقاق صفات جديدة من جذور الأفعال بإضافة اللاحقة -bar للتعبير عن إمكانية حدوث الشيء (قابل لـ / يمكن فعله)، وكيفية نفيها بالبادئة un- وتصريفها مع الأسماء.",

  // 2. الشرح المبسط مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية، تُعتبر اللاحقة **-bar** من أهم وسائل بناء الكلمات (Wortbildung). تُضاف هذه اللاحقة إلى جذر الفعل المتعدي (transitives Verb) لتحويله إلى صفة تعبر عن **إمكانية وقابلية وقوع الفعل**، وهي تعادل تماماً صيغة المبني للمجهول: **kann gemacht werden** (يمكن أن يُفعل)."
    },
    {
      type: "rule",
      content: "طريقة الصياغة البسيطة:\n**جذر الفعل (Verbstamm)** [نحذف نهاية المصدر -en أو -n] + **اللاحقة -bar**\n• trinken → trink + bar = **trinkbar** (صالح للشرب)\n• essen → ess + bar = **essbar** (صالح للأكل)\n• machen → mach + bar = **machbar** (قابل للتنفيذ / ممكن)"
    },
    {
      type: "table",
      headers: ["الفعل الأصلي", "الصفة المشتقة (-bar)", "المعنى بالمبني للمجهول", "الترجمة العربية"],
      rows: [
        ["trinken (يشرب)", "trinkbar", "kann getrunken werden", "صالح للشرب / قابل للشرب"],
        ["essen (يأكل)", "essbar", "kann gegessen werden", "صالح للأكل / غير سام"],
        ["machen (يفعل)", "machbar", "kann gemacht werden", "ممكن إنجازه / قابل للتنفيذ"],
        ["bezahlen (يدفع)", "bezahlbar", "kann bezahlt werden", "ميسور التكلفة / قابل للدفع"],
        ["lösen (يحل)", "lösbar", "kann gelöst werden", "قابل للحل"],
        ["waschen (يغسل)", "waschbar", "kann gewaschen werden", "قابل للغسيل"],
        ["heilen (يشفي)", "heilbar", "kann geheilt werden", "قابل للشفاء"],
        ["verstehen (يفهم)", "verstehbar", "kann verstanden werden", "مفهوم / قابل للفهم"]
      ]
    },
    {
      type: "rule",
      content: "النفي السريع بالبادئة **un-**:\nلإعطاء المعنى العكسي (غير ممكن / مستحيل)، نضيف البادئة **un-** إلى بداية الصفة مباشرة:\n• bezahlbar → **unbezahlbar** (باهظ جداً / لا يُقدَّر بثمن)\n• machbar → **unmachbar** (غير ممكن / مستحيل إنجازه)\n• lösbar → **unlösbar** (مستعصٍ على الحل)\n• trinkbar → **untrinkbar** (غير صالح للشرب)"
    },
    {
      type: "text",
      content: "تصريف هذه الصفات: الصفات المنتهية بـ **-bar** هي صفات طبيعية تماماً. إذا جاءت بعد sein تأتي بدون نهايات (*Das Problem ist lösbar*)، أما إذا جاءت قبل الاسم فإنها تأخذ نهايات تصريف الصفات المعتادة (*eine machbare Aufgabe*, *trinkbares Wasser*)."
    }
  ],

  // 3. الأمثلة العملية الناطقة (9 أمثلة مع ملاحظات إعرابية)
  examples: [
    {
      de: "Das Wasser aus diesem Brunnen ist nicht **trinkbar**.",
      ar: "الماء من هذا البئر غير صالح للشرب.",
      highlight: "trinkbar",
      audio: true,
      note: "trinkbar تعني يمكن شربه (kann getrunken werden)"
    },
    {
      de: "Diese Pilze im Wald sind absolut nicht **essbar**.",
      ar: "هذه الفطريات في الغابة غير صالحة للأكل بتاتاً.",
      highlight: "essbar",
      audio: true,
      note: "essbar من الفعل essen مضافاً إليه bar"
    },
    {
      de: "Keine Sorge, diese Aufgabe ist absolut **machbar**.",
      ar: "لا تقلق، هذه المهمة قابلة للتنفيذ تماماً.",
      highlight: "machbar",
      audio: true,
      note: "machbar تعبر عن إمكانية الإنجاز بسهولة"
    },
    {
      de: "Die Miete für diese Wohnung ist für Studenten kaum **bezahlbar**.",
      ar: "إيجار هذه الشقة بالكاد مقدور على دفعه بالنسبة للطلاب.",
      highlight: "bezahlbar",
      audio: true,
      note: "bezahlbar تصف السعر بأنه في المتناول ومقدور عليه"
    },
    {
      de: "Diese Jacke ist bei 40 Grad in der Waschmaschine **waschbar**.",
      ar: "هذه السترة قابلة للغسيل في الغسالة عند 40 درجة مئوية.",
      highlight: "waschbar",
      audio: true,
      note: "waschbar تفيد تحمل الغسيل دون أن تتلف"
    },
    {
      de: "Deine Hilfe war für uns wirklich **unbezahlbar**.",
      ar: "كانت مساعدتك بالنسبة لنا لا تُقدّر بثمن حقاً.",
      highlight: "unbezahlbar",
      audio: true,
      note: "البادئة un- هنا تفيد العظمة: ثمين جداً لدرجة أنه لا يُقدّر بمال"
    },
    {
      de: "Das Rätsel schien schwer, aber es war schließlich **lösbar**.",
      ar: "بدا اللغز صعباً، لكنه كان قابلاً للحل في النهاية.",
      highlight: "lösbar",
      audio: true,
      note: "lösbar من الفعل lösen"
    },
    {
      de: "Glücklicherweise ist diese Krankheit heute gut **heilbar**.",
      ar: "لحسن الحظ، هذا المرض قابل للشفاء جيداً في يومنا هذا.",
      highlight: "heilbar",
      audio: true,
      note: "heilbar من الفعل heilen"
    },
    {
      de: "Wir haben einen **machbaren** Plan für das neue Projekt erstellt.",
      ar: "لقد وضعنا خطة قابلة للتنفيذ للمشروع الجديد.",
      highlight: "machbaren",
      audio: true,
      note: "أخذت الصفة نهاية -en لأنها تصف اسماً مذكراً في Akkusativ (einen machbaren Plan)"
    }
  ],

  // 4. نصائح للناطقين بالعربية
  arabicTips: [
    "الوزن المقابل في العربية: تقابل لاحقة «-bar» في اللغة العربية وزن «قابل لـ...» (قابل للغسل، قابل للحل) أو «صالح لـ...» (صالح للشرب، صالح للأكل).",
    "تُشتق -bar فقط من الأفعال المتعدية: لا يمكن اشتقاقها من أفعال لازمة مثل schlafen أو gehen، لأن معنى اللاحقة مبني على فكرة المبني للمجهول (يمكن فعله).",
    "النفي بـ un- أبلغ وأقوى: بدلاً من قول *nicht machbar* أو *nicht bezahlbar*، يفضل الألمان دائماً استخدام البادئة un- للقول: *unmachbar* و *unbezahlbar*، وهو أسلوب أكثر فصاحة."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "اللاحقة -bar تُحول جذور الأفعال إلى صفات تعني (قابل لـ / يمكن أن يُفعل)",
    "الصيغة مشتقة دلالياً من المبني للمجهول: essbar = kann gegessen werden",
    "لإعطاء المعنى العكسي تماماً نضيف البادئة un- (مثل: unlösbar, unbezahlbar)",
    "تُعرب الصفات المشتقة بـ -bar مثل أي صفة أخرى وتأخذ نهايات الصفات قبل الأسماء",
    "لا تُشتق -bar إلا من الأفعال المتعدية التي تقبل مفعولاً به"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "das Wasser", plural: "die Wasser / Wässer", ar: "الماء", article: "das", example: "Trinkbares Wasser ist sehr wertvoll." },
    { de: "der Pilz", plural: "die Pilze", ar: "الفطر / المشروم", article: "der", example: "Nicht alle Pilze im Wald sind essbar." },
    { de: "die Miete", plural: "die Mieten", ar: "الإيجار", article: "die", example: "Die Miete ist bezahlbar." },
    { de: "die Jacke", plural: "die Jacken", ar: "السترة / الجاكيت", article: "die", example: "Die Jacke ist waschbar." },
    { de: "das Projekt", plural: "die Projekte", ar: "المشروع", article: "das", example: "Dieses Projekt ist absolut machbar." },
    { de: "die Krankheit", plural: "die Krankheiten", ar: "المرض", article: "die", example: "Diese Krankheit ist heilbar." },
    { de: "lösen", plural: "löst, hat gelöst", ar: "يحل (مشكلة / لغزاً)", article: "", example: "Wir können dieses Problem lösen." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Wasser, das man trinken kann, ist ___ .",
      options: ["trinkbar", "essbar", "fahrbar", "hörbar"],
      correct: 0,
      explanation: "اشتقاق الصفة من الفعل trinken بإضافة -bar يعطي trinkbar (صالح للشرب)."
    },
    {
      type: "fill-blank",
      sentence: "Eine Aufgabe, die man machen kann, ist ___ .",
      answer: "machbar",
      accept: ["machbar"],
      explanation: "جذر الفعل machen هو mach ونضيف له اللاحقة -bar فتصبح machbar (قابلة للتنفيذ)."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (هذا المشروع قابل للتنفيذ تماماً)",
      words: ["machbar", "Projekt", "Dieses", "vollkommen", "ist"],
      correct: "Dieses Projekt ist vollkommen machbar",
      accept: [
        "Dieses Projekt ist vollkommen machbar",
        "Dieses Projekt ist vollkommen machbar.",
        "Dieses Projekt ist vollkommen machbar"
      ],
      explanation: "المبتدأ (Dieses Projekt) + الفعل (ist) + الظرف (vollkommen) + الصفة (machbar)."
    },
    {
      type: "multiple-choice",
      question: "ما هو عكس كلمة »bezahlbar« باستخدام البادئة المناسبة؟",
      options: ["unbezahlbar", "inbezahlbar", "disbezahlbar", "missbezahlbar"],
      correct: 0,
      explanation: "تُنفى الصفات المنتهية بـ -bar بواسطة البادئة un-، فتصبح unbezahlbar (باهظ جداً أو لا يُقدّر بثمن)."
    },
    {
      type: "match",
      question: "طابق الفعل بالصفة المشتقة منه بواسطة اللاحقة -bar:",
      pairs: [
        { left: "essen (يأكل)", right: "essbar (صالح للأكل)" },
        { left: "trinken (يشرب)", right: "trinkbar (صالح للشرب)" },
        { left: "lösen (يحل)", right: "lösbar (قابل للحل)" },
        { left: "waschen (يغسل)", right: "waschbar (قابل للغسيل)" }
      ],
      explanation: "جذر كل فعل + اللاحقة -bar يعطي صفة الإمكانية."
    },
    {
      type: "error-correction",
      sentence: "Das Wasser ist nicht trinkend.",
      corrected: "Das Wasser ist nicht trinkbar.",
      accept: [
        "Das Wasser ist nicht trinkbar",
        "Das Wasser ist nicht trinkbar."
      ],
      explanation: "للتعبير عن أن الماء غير صالح للشرب نستخدم الصفة المشتقة trinkbar وليس اسم الفاعل trinkend."
    },
    {
      type: "translate",
      from: "هذا اللغز قابل للحل.",
      answer: "Dieses Rätsel ist lösbar.",
      accept: [
        "Dieses Rätsel ist lösbar.",
        "Dieses Rätsel ist lösbar",
        "Das Rätsel ist lösbar.",
        "Das Rätsel ist lösbar"
      ],
      explanation: "Dieses Rätsel (هذا اللغز) + ist + lösbar (من الفعل lösen)."
    },
    {
      type: "fill-blank",
      sentence: "Ein Problem, das man nicht lösen kann, ist ___ . (نفي lösbar بـ un-)",
      answer: "unlösbar",
      accept: ["unlösbar"],
      explanation: "إضافة البادئة un- إلى lösbar تعطي unlösbar (مستعصٍ على الحل / غير قابل للحل)."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين جملة:",
      words: ["ist", "Jacke", "Diese", "waschbar", "Grad", "40", "bei"],
      correct: "Diese Jacke ist bei 40 Grad waschbar",
      accept: [
        "Diese Jacke ist bei 40 Grad waschbar",
        "Diese Jacke ist bei 40 Grad waschbar.",
        "Diese Jacke ist bei 40 Grad waschbar"
      ],
      explanation: "Diese Jacke + ist + bei 40 Grad + waschbar (الصفة في نهاية الجملة بعد sein)."
    },
    {
      type: "multiple-choice",
      question: "ماذا تعني عبارة »eine machbare Aufgabe«؟",
      options: [
        "مهمة يمكن إنجازها (kann gemacht werden)",
        "مهمة صعبة جداً لا يمكن عملها",
        "مهمة تم الانتهاء منها في الماضي",
        "مهمة مجهولة المصدر"
      ],
      correct: 0,
      explanation: "machbar تعني قابل للعمل أو الإنجاز (kann gemacht werden)."
    }
  ],

  // 8. الاختبار النهائي (5 أسئلة متعددة الخيارات)
  quiz: [
    {
      type: "multiple-choice",
      question: "إلى أي نوع من الكلمات تُضاف اللاحقة »-bar« في الغالب؟",
      options: [
        "إلى جذور الأفعال المتعدية (Verbstamm)",
        "إلى الأسماء المعرفة فقط",
        "إلى حروف الجر",
        "إلى الضمائر الشخصية"
      ],
      correct: 0,
      explanation: "تُضاف -bar إلى جذر الفعل المتعدي لاشتقاق صفة تفيد إمكانية حدوث الفعل."
    },
    {
      type: "multiple-choice",
      question: "ما معنى الصفة »unbezahlbar« في اللغة الألمانية؟",
      options: [
        "لا يُقدّر بثمن أو باهظ جداً لدرجة لا تُدفع",
        "مجاني بدون أي مقابل",
        "يمكن شراؤه بخصم كبير",
        "مدفوع مسبقاً"
      ],
      correct: 0,
      explanation: "unbezahlbar تعني إما باهظ جداً لا يقدر شخص على دفعه، أو معنوياً: لا يُقدّر بثمن."
    },
    {
      type: "multiple-choice",
      question: "Die Pilze sind giftig und nicht ___ .",
      options: ["essbar", "trinkbar", "machbar", "lesbar"],
      correct: 0,
      explanation: "الفطر مأكول، لذا الصفة المناسبة من essen هي essbar."
    },
    {
      type: "multiple-choice",
      question: "كيف نصرف الصفة المنتهية بـ -bar إذا سبقت اسماً مؤنثاً نكرة: »eine ___ Aufgabe«؟",
      options: ["machbare", "machbar", "machbaren", "machbares"],
      correct: 0,
      explanation: "تأخذ الصفة نهاية الصفات العادية؛ بعد eine لاسم مؤنث في حالة فاعل تأخذ الصفة النهاية -e (machbare)."
    },
    {
      type: "multiple-choice",
      question: "ما هي الجملة المكافئة تماماً في المعنى لـ: »Der Text ist gut lesbar«؟",
      options: [
        "Der Text kann gut gelesen werden.",
        "Der Text muss gelesen werden.",
        "Der Text darf nicht gelesen werden.",
        "Der Text wird gestern gelesen."
      ],
      correct: 0,
      explanation: "الصفة بـ -bar تكافئ المبني للمجهول مع können: lesbar = kann gelesen werden."
    }
  ]
};

window.lessons = window.LESSONS;
