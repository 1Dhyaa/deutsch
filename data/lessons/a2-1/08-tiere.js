// data/lessons/a2-1/08-tiere.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-08"] = {
  id: "a2-1-08",
  level: "a2-1",
  order: 8,
  slug: "tiere",
  title: {
    de: "Tiere (Wortschatz)",
    ar: "عالم الحيوانات (المفردات وأدوات التعريف)"
  },
  tags: ["wortschatz", "tiere", "artikel", "nomen", "a2"],

  // 1. الهدف
  goal: "ستتعلم في هذا الدرس أسماء الحيوانات الأليفة والبرية الشائعة مع أدوات التعريف الخاصة بها، وصيغ الجمع، وأماكن عيشها، وأهم الأفعال المرتبطة بسلوكها ورعايتها (مثل: fressen و füttern).",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "تُعد الحيوانات موضوعاً أساسياً في المحادثات اليومية والحياة في ألمانيا، حيث يمتلك معظم الألمان حيوانات أليفة في منازلهم. القاعدة الأهم عند تعلم أسماء الحيوانات في الألمانية هي **حفظ كل حيوان مع أداة تعريفه وصيغة الجمع**، لأن جنس الحيوان في الألمانية غالباً ما يختلف تماماً عن اللغة العربية!"
    },
    {
      type: "table",
      headers: ["الحيوان (مع الأداة)", "صيغة الجمع (Plural)", "المعنى بالعربية", "النوع"],
      rows: [
        ["der Hund", "die Hunde", "الكلب", "حيوان أليف (Haustier)"],
        ["die Katze", "die Katzen", "القطة", "حيوان أليف (Haustier)"],
        ["das Pferd", "die Pferde", "الحصان", "حيوان مزرعة (Nutztier)"],
        ["die Kuh", "die Kühe", "البقرة", "حيوان مزرعة (Nutztier)"],
        ["das Schaf", "die Schafe", "الخروف", "حيوان مزرعة (Nutztier)"],
        ["das Schwein", "die Schweine", "الخنزير", "حيوان مزرعة (Nutztier)"],
        ["das Huhn", "die Hühner", "الدجاجة", "حيوان مزرعة (Nutztier)"],
        ["der Vogel", "die Vögel", "الطائر / العصفور", "حيوان أليف / طليق"],
        ["das Kaninchen", "die Kaninchen", "الأرنب", "حيوان أليف (Haustier)"],
        ["die Maus", "die Mäuse", "الفأر", "حيوان أليف / قارض"]
      ]
    },
    {
      type: "text",
      content: "أما في البرية وحديقة الحيوان (Wildtiere & Zootiere)، فنجد حيوانات هامة:"
    },
    {
      type: "table",
      headers: ["الحيوان البري", "الجمع", "المعنى", "ملاحظة لغوية"],
      rows: [
        ["der Löwe", "die Löwen", "الأسد", "اسم مذكر ضعيف (n-Deklination)"],
        ["der Bär", "die Bären", "الدب", "اسم مذكر ضعيف (n-Deklination)"],
        ["der Elefant", "die Elefanten", "الفيل", "اسم مذكر ضعيف (n-Deklination)"],
        ["der Wolf", "die Wölfe", "الذئب", "جمع مع أوملاوت (-e)"],
        ["der Affe", "die Affen", "القرد", "اسم مذكر ضعيف (n-Deklination)"],
        ["der Fisch", "die Fische", "السمكة", "اسم مذكر منتظم"],
        ["die Schlange", "die Schlangen", "الثعبان / الأفعى", "اسم مؤنث"]
      ]
    },
    {
      type: "rule",
      content: "قاعدة ذهبية: الفرق بين أفعال الأكل للبشر والحيوانات!<br>• للبشر نستخدم الفعل: **essen** (يأكل) ← *Der Mann isst Brot.*<br>• للحيوانات نستخدم الفعل: **fressen** (تأكل / تلتهم) ← *Der Hund **frisst** Fleisch.* (تصريفه شاذ: er frisst).<br>• لإطعام الحيوان ورعايته نستخدم الفعل: **füttern** ← *Ich **füttere** meine Katze.*"
    },
    {
      type: "table",
      headers: ["موطن الحيوان (Lebensraum)", "المعنى بالعربية", "أفعال وأصوات الحيوانات", "المعنى"],
      rows: [
        ["auf dem Bauernhof", "في المزرعة", "bellen", "ينبح (الكلب)"],
        ["im Wald", "في الغابة", "miauen", "يموء (القط)"],
        ["im Zoo / in der Wildnis", "في حديقة الحيوان / في البرية", "wiehern", "يصهل (الحصان)"],
        ["im Wasser / Meer", "في الماء / البحر", "reiten", "يركب الخيل"],
        ["zu Hause (als Haustier)", "في المنزل (كحيوان أليف)", "jagen / fliegen", "يصطاد / يطير"]
      ]
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Mein kleiner **Hund** bellt laut, wenn jemand an der Tür klingelt.",
      ar: "كلبي الصغير ينبح بصوت عالٍ عندما يرن أحد جرس الباب.",
      audio: true,
      note: "der Hund مذكر، والفعل bellen يعني ينبح"
    },
    {
      de: "Die weiße **Katze** schläft den ganzen Tag gemütlich auf dem Sofa.",
      ar: "القطة البيضاء تنام طوال اليوم براحة على الأريكة.",
      audio: true,
      note: "die Katze مؤنث في اللغتين الألمانية والعربية"
    },
    {
      de: "Auf dem Bauernhof füttert der Bauer **die Kühe** und **die Schafe**.",
      ar: "في المزرعة يُطعم المزارع الأبقار والخراف.",
      audio: true,
      note: "füttern = يُطعم (die Kühe جمع Kuh, die Schafe جمع Schaf)"
    },
    {
      de: "Der gefährliche Löwe **frisst** jeden Tag mehrere Kilo Fleisch.",
      ar: "الأسد الخطير يلتهم كل يوم عدة كيلوغرامات من اللحم.",
      audio: true,
      note: "نستخدم frisst (من fressen) لأكل الحيوانات"
    },
    {
      de: "Meine Tochter reitet jeden Samstag auf einem großen **Pferd**.",
      ar: "ابنتي تركب الخيل كل سبت على حصان كبير.",
      audio: true,
      note: "das Pferd محايد (das)، والفعل reiten يعني يركب الخيل"
    },
    {
      de: "Im tiefen Wald leben wilde **Wölfe** und große **Bären**.",
      ar: "في أعماق الغابة تعيش ذئاب برية ودببة ضخمة.",
      audio: true,
      note: "جمع Wolf هو Wölfe، وجمع Bär هو Bären"
    },
    {
      de: "Im Frühling singen die bunten **Vögel** wunderschöne Lieder.",
      ar: "في فصل الربيع تغرد الطيور الملونة ألحاناً جميلة.",
      audio: true,
      note: "der Vogel جمعه die Vögel بأوملاوت"
    },
    {
      de: "Hunde und Katzen sind die beliebtesten **Haustiere** in Deutschland.",
      ar: "الكلاب والقطط هي الحيوانات الأليفة الأكثر شعبية في ألمانيا.",
      audio: true,
      note: "das Haustier جمعها die Haustiere"
    },
    {
      de: "Hast du heute Morgen schon das kleine **Kaninchen** gefüttert?",
      ar: "هل أطعمت الأرنب الصغير هذا الصباح؟",
      audio: true,
      note: "das Kaninchen محايد وجمعه يبقى Kaninchen"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "أداة التعريف لا تطابق العربية إطلاقاً: الحصان في العربية مذكر، لكنه في الألمانية محايد تماماً (**das Pferd**)! وكذلك الخروف (**das Schaf**)، بينما الفأر مؤنث في الألمانية (**die Maus**). احفظ كل حيوان مع أداته دون قياس على لغتك الأم.",
    "لا تستخدم الفعل *essen* مع الحيوانات: في الألمانية يُستخدم الفعل **fressen** (frisst) حصراً للحيوانات. إذا استخدمت *fressen* مع إنسان فإنها إهانة تدل على أنه يلتهم الطعام بجشع ودون تهذيب!",
    "انتبه للأسماء المنتهية بـ -e للحيوانات المذكرة: كلمات مثل **der Löwe** (الأسد) و **der Affe** (القرد) و **der Hase** (الأرنب البري) هي أسماء مذكرة ضعيفة (n-Deklination)، وتأخذ دائماً اللاحقة **-n** في حالات Akkusativ و Dativ (مثل: *Ich sehe den Löwen*)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "الحيوانات الأليفة الأساسية: der Hund, die Katze, das Pferd, das Kaninchen.",
    "حيوانات المزرعة: die Kuh (Pl. Kühe), das Schaf (Pl. Schafe), das Schwein (Pl. Schweine).",
    "للحيوانات نستخدم fressen (er frisst) بدلاً من essen، ولإطعامها نستخدم füttern.",
    "مواطن الحيوانات: auf dem Bauernhof (في المزرعة), im Wald (في الغابة), im Zoo (في حديقة الحيوان).",
    "الحيوانات المذكرة المنتهية بـ -e تأخذ -n في النصب والجر (den Löwen, dem Affen)."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "der Hund", plural: "die Hunde", ar: "الكلب", article: "der", example: "Der Hund bellt laut im Garten." },
    { de: "die Katze", plural: "die Katzen", ar: "القطة", article: "die", example: "Die Katze trinkt gerne Milch." },
    { de: "das Pferd", plural: "die Pferde", ar: "الحصان", article: "das", example: "Das weiße Pferd läuft sehr schnell." },
    { de: "die Kuh", plural: "die Kühe", ar: "البقرة", article: "die", example: "Die Kuh gibt frische Milch." },
    { de: "das Schaf", plural: "die Schafe", ar: "الخروف", article: "das", example: "Auf der Wiese grasen viele Schafe." },
    { de: "der Vogel", plural: "die Vögel", ar: "الطائر / العصفور", article: "der", example: "Der Vogel baut ein Nest im Baum." },
    { de: "der Löwe", plural: "die Löwen", ar: "الأسد", article: "der", example: "Der Löwe ist der König der Tiere." },
    { de: "das Haustier", plural: "die Haustiere", ar: "الحيوان الأليف", article: "das", example: "Haben Sie ein Haustier zu Hause?" }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "ما هي أداة التعريف الصحيحة لكلمة »Pferd« (حصان)؟",
      options: ["das", "der", "die", "den"],
      correct: 0,
      answer: 0,
      explanation: "كلمة Pferd جنسها محايد في الألمانية وتأخذ أداة التعريف das (das Pferd)."
    },
    {
      type: "fill-blank",
      question: "Der kleine Hund ___ jeden Tag frisches Fleisch.",
      answer: "frisst",
      accept: ["frisst"],
      explanation: "مع الحيوانات نستخدم الفعل fressen، وتصريفه مع الغائب المفرد (er) هو frisst."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (المزارع يطعم الأبقار كل صباح)",
      words: ["Der", "Bauer", "füttert", "jeden", "Morgen", "die", "Kühe", "."],
      correct: "Der Bauer füttert jeden Morgen die Kühe .",
      explanation: "الفاعل (Der Bauer) + الفعل ثانياً (füttert) + التوقيت (jeden Morgen) + المفعول به (die Kühe)."
    },
    {
      type: "match",
      question: "طابق كل حيوان مع أداة تعريفه المناسبة:",
      pairs: [
        { left: "الكلب (Hund)", right: "der Hund" },
        { left: "القطة (Katze)", right: "die Katze" },
        { left: "الخروف (Schaf)", right: "das Schaf" },
        { left: "البقرة (Kuh)", right: "die Kuh" }
      ],
      explanation: "أدوات التعريف للحيوانات: der Hund (مذكر)، die Katze (مؤنث)، das Schaf (محايد)، die Kuh (مؤنث)."
    },
    {
      type: "multiple-choice",
      question: "ما هي صيغة الجمع الصحيحة لكلمة »das Schaf« (الخروف)؟",
      options: ["die Schafe", "die Schäfe", "die Schafen", "die Schafes"],
      correct: 0,
      answer: 0,
      explanation: "جمع das Schaf هو die Schafe بإضافة -e فقط بدون أوملاوت."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في الجملة: (Der Löwe isst viel Fleisch.)",
      sentence: "Der Löwe isst viel Fleisch.",
      corrected: "Der Löwe frisst viel Fleisch.",
      explanation: "للحيوانات نستخدم الفعل fressen (frisst) وليس essen الخاص بالبشر."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أنا أطعم قطتي كل صباح.)",
      from: "أنا أطعم قطتي كل صباح.",
      answer: "Ich füttere meine Katze jeden Morgen.",
      accept: [
        "Ich füttere meine Katze jeden Morgen.",
        "Ich füttere jeden Morgen meine Katze.",
        "Ich füttere meine Katze jeden Morgen",
        "Ich füttere jeden Morgen meine Katze"
      ],
      explanation: "الفعل هو füttern، وقطتي مفعول به مؤنث: meine Katze."
    },
    {
      type: "fill-blank",
      question: "Im Park fliegen viele bunte ___ (جمع Vogel).",
      answer: "Vögel",
      accept: ["Vögel", "Voegel"],
      explanation: "صيغة جمع der Vogel هي die Vögel بوضع أوملاوت على الحرف O."
    },
    {
      type: "multiple-choice",
      question: "Ich sehe im Zoo einen großen ___ .",
      options: ["Löwen", "Löwe", "Löwes", "Löwem"],
      correct: 0,
      answer: 0,
      explanation: "كلمة der Löwe اسم مذكر ضعيف (n-Deklination) ويأخذ اللاحقة -n في حالة المفعول به (Akkusativ)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Meine Schwester hat ein Hund.)",
      sentence: "Meine Schwester hat ein Hund.",
      corrected: "Meine Schwester hat einen Hund.",
      explanation: "كلمة der Hund مذكرة، ومع فعل haben تأتي في حالة Akkusativ فتصبح einen Hund."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "ما هي أداة التعريف الصحيحة للحصان »Pferd«؟",
      options: ["das", "der", "die"],
      correct: 0,
      answer: 0,
      explanation: "الحصان في الألمانية محايد: das Pferd."
    },
    {
      type: "multiple-choice",
      question: "أي فعل هو الأنسب للفراغ: »Die Katze ___ eine kleine Maus.«؟",
      options: ["frisst", "isst", "trinkt"],
      correct: 0,
      answer: 0,
      explanation: "الفعل fressen (frisst) هو المخصص لأكل الحيوانات."
    },
    {
      type: "multiple-choice",
      question: "ما هو الجمع الصحيح لكلمة »die Kuh« (البقرة)؟",
      options: ["die Kühe", "die Kuhe", "die Kühen"],
      correct: 0,
      answer: 0,
      explanation: "جمع die Kuh هو die Kühe مع إضافة أوملاوت ونهاية -e."
    },
    {
      type: "multiple-choice",
      question: "أين تعيش الأبقار والخراف غالباً: »Die Kühe und Schafe leben ___ .«؟",
      options: ["auf dem Bauernhof", "im Zoo", "im Meer"],
      correct: 0,
      answer: 0,
      explanation: "حيوانات المزرعة تعيش في المزرعة: auf dem Bauernhof."
    },
    {
      type: "multiple-choice",
      question: "اختر الجملة الصحيحة نحوياً وإعرابياً:",
      options: [
        "Ich füttere jeden Tag den Hund.",
        "Ich füttere jeden Tag der Hund.",
        "Ich füttere jeden Tag dem Hund."
      ],
      correct: 0,
      answer: 0,
      explanation: "فعل füttern يأخذ مفعولاً به (Akkusativ)، وللمذكر تتحول الأداة إلى den Hund."
    }
  ]
};
window.lessons = window.LESSONS;
