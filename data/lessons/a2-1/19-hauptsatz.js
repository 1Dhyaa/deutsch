// data/lessons/a2-1/19-hauptsatz.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-19"] = {
  id: "a2-1-19",
  level: "a2-1",
  order: 19,
  slug: "hauptsatz",
  title: {
    de: "Der Hauptsatz & ADUSO-Konnektoren",
    ar: "الجملة الرئيسية وروابط الموقع صفر (ADUSO)"
  },
  tags: ["grammatik", "satzbau", "hauptsatz", "aduso", "konnektoren", "a2"],

  // 1. الهدف
  goal: "ستتعلم كيفية ربط الجمل الرئيسية (Hauptsätze) باستخدام أدوات الربط التنسيقية ADUSO (aber, denn, und, sondern, oder)، وتطبيق قاعدة الموقع صفر (Position 0) التي تحافظ على الفعل المصرّف في الموقع الثاني ثابتاً، والتمييز الدقيق بين aber و sondern.",

  // 2. الشرح
  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية، تسمى الجملة المستقلة القادرة على الوقوف بذاتها **جملة رئيسية (Hauptsatz)**. والقاعدة الصارمة التي تحكمها هي أن **الفعل المصرّف يأتي دائماً في الموقع الثاني (Position 2)**."
    },
    {
      type: "text",
      content: "عندما نريد ربط جملتين رئيسيتين معاً، نستخدم أدوات ربط تنسيقية تجمعها كلمة الاختصار الشهيرة **ADUSO**. هذه الأدوات تشغل في القواعد الألمانية ما يسمى **الموقع صفر (Position 0)**:"
    },
    {
      type: "rule",
      content: "روابط الموقع صفر (ADUSO):\n• **A** = aber (لكن / غير أن)\n• **D** = denn (لأن / إذ)\n• **U** = und (و)\n• **S** = sondern (بل - بعد نفي)\n• **O** = oder (أو)\n\nهذه الروابط لا تُحتسب كعنصر داخل الجملة! لذلك يأتي بعدها الفاعل في الموقع 1، ويبقى الفعل المصرّف في الموقع 2 دون أي تغيير."
    },
    {
      type: "table",
      headers: ["الرابط", "المعنى بالعربية", "الوظيفة والدلالة", "مثال توضيحي"],
      rows: [
        ["aber", "لكن", "استدراك أو تقييد أو تناقض خفيف", "Ich habe Hunger, **aber** ich **habe** kein Geld."],
        ["denn", "لأن / إذ", "تعليل وتوضيح السبب (الفعل في المركز 2)", "Er kommt nicht, **denn** er **ist** krank."],
        ["und", "و", "عطف وإضافة معلومة أو حدث", "Wir kochen Suppe **und** wir **essen** Brot."],
        ["sondern", "بل", "تصحيح الفكرة السابقة بعد نفي صريح", "Das ist kein Apfel, **sondern** das **ist** eine Birne."],
        ["oder", "أو", "تخيير بين أمرين أو بديلين", "Gehen wir ins Café, **oder** **bleiben** wir hier?"]
      ]
    },
    {
      type: "rule",
      content: "الفرق الجوهري بين aber و sondern:\n• نستخدم **sondern** فقط بعد نفي صريح (nicht / kein) لتصحيح الخطأ وطرح البديل الصحيح: (nicht X, sondern Y).\n• نستخدم **aber** عند الاستدراك وإبداء التناقض، حتى لو كانت الجملة الأولى مثبتة أو منفية دون إبطالها: Er ist reich, aber er ist nicht glücklich."
    },
    {
      type: "text",
      content: "ملاحظة كتابية: نضع دائماً فاصلة (Komma) قبل **aber**, **denn**, **sondern** عند ربط جملتين كاملتين. أما مع **und** و **oder** فالفصل بالفاصلة اختياري."
    }
  ],

  // 3. الأمثلة
  examples: [
    {
      de: "Ich lerne fleißig Deutsch, **denn** ich **möchte** in München arbeiten.",
      ar: "أنا أتعلم الألمانية بجد، لأنني أود العمل في ميونخ.",
      highlight: "denn",
      audio: true,
      note: "denn في الموقع 0، الفاعل ich في 1، الفعل möchte في 2"
    },
    {
      de: "Er möchte mitkommen, **aber** er **hat** leider keine Zeit.",
      ar: "هو يرغب في المجيء معنا، لكنه للأسف ليس لديه وقت.",
      highlight: "aber",
      audio: true,
      note: "aber في الموقع 0، الفاعل er في 1، الفعل hat في 2"
    },
    {
      de: "Wir trinken keinen Kaffee, **sondern** wir **trinken** grünen Tee.",
      ar: "نحن لا نشرب القهوة، بل نشرب الشاي الأخضر.",
      highlight: "sondern",
      audio: true,
      note: "sondern تأتي بعد النفي (keinen Kaffee) لتقديم البديل الصحيح"
    },
    {
      de: "Ich heiße nicht Thomas, **sondern** mein Name **ist** Markus.",
      ar: "أنا لستُ توماس، بل اسمي ماركوس.",
      highlight: "sondern",
      audio: true,
      note: "تصحيح مباشر بعد نفي الاسم (nicht Thomas)"
    },
    {
      de: "Am Samstag putze ich die Wohnung **und** ich **gehe** einkaufen.",
      ar: "يوم السبت أنظف الشقة وأذهب للتسوق.",
      highlight: "und",
      audio: true,
      note: "und تربط جملتين، والفعل gehe في موقعه الثاني الطبيعي"
    },
    {
      de: "Fahren wir mit dem Zug, **oder** **nehmen** wir den Bus?",
      ar: "هل نسافر بالقطار، أم نأخذ الحافلة؟",
      highlight: "oder",
      audio: true,
      note: "oder للتخيير بين وسيلتين للنقل"
    },
    {
      de: "Das Auto ist alt, **aber** es **fährt** noch sehr gut.",
      ar: "السيارة قديمة، لكنها ما زالت تسير بشكل ممتاز.",
      highlight: "aber",
      audio: true,
      note: "تناقض إيجابي واستدراك باستخدام aber"
    },
    {
      de: "Sie bleibt heute im Bett, **denn** sie **hat** hohes Fieber.",
      ar: "هي باقية في الفراش اليوم لأنها تعاني من حمى شديدة.",
      highlight: "denn",
      audio: true,
      note: "denn توضح العلة الطبية والسبب دون تغيير ترتيب الفعل"
    },
    {
      de: "Er studiert nicht Medizin, **sondern** er **lernt** Informatik.",
      ar: "هو لا يدرس الطب، بل يتعلم علوم الحاسوب.",
      highlight: "sondern",
      audio: true,
      note: "نفي (nicht Medizin) متبوع بـ sondern والبديل"
    },
    {
      de: "Kommst du heute vorbei, **oder** **hast** du zu viel Stress?",
      ar: "هل ستمر عليّ اليوم، أم أن لديك الكثير من الضغط والعمل؟",
      highlight: "oder",
      audio: true,
      note: "oder تطرح بديلاً وسؤالاً تخييرياً"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في العربية نستخدم «لأن» وتأتي بعدها جملة عادية. في الألمانية لدينا denn و weil؛ تذكر أن denn تأخذ الموقع صفر ويبقى الفعل في الموقع الثاني، بينما weil ترسل الفعل إلى آخر الجملة تماماً! لا تخلط بينهما.",
    "كلمة sondern تقابل في العربية الفصحى «بل»، ولا تُستعمل إلا إذا سبقها نفي (ما فعلت كذا، بل كذا). إذا لم يكن هناك نفي، يجب استعمال aber (لكن). لا تقل أبداً: *Ich mag Äpfel, sondern auch Birnen*، بل قل: *Ich mag Äpfel, aber...*",
    "خطأ شائع جداً: وضع الفعل بعد denn مباشرة ظناً أنها مثل بعض اللغات الأخرى! الصحيح أن تقول: *... denn ich habe Zeit* وليس *... denn habe ich Zeit*."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "روابط ADUSO هي: aber (لكن), denn (لأن), und (و), sondern (بل), oder (أو)",
    "تشغل روابط ADUSO الموقع صفر (Position 0)، فلا تزحزح أي كلمة في الجملة",
    "الفعل المصرّف يبقى دائماً في الموقع الثاني (Position 2) بعد الفاعل",
    "تُستخدم sondern حصراً بعد جملة منفية بـ (nicht / kein) لتصحيحها وتقديم البديل",
    "يجب وضع فاصلة قبل aber و denn و sondern دائماً عند وصل جملتين"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "der Hauptsatz", plural: "die Hauptsätze", ar: "الجملة الرئيسية", article: "der", example: "Im Hauptsatz steht das Verb auf Position 2." },
    { de: "der Konnektor", plural: "die Konnektoren", ar: "أداة الربط", article: "der", example: "ADUSO sind fünf wichtige Konnektoren." },
    { de: "die Reihenfolge", plural: "die Reihenfolgen", ar: "الترتيب / التسلسل", article: "die", example: "Die Reihenfolge der Wörter ist fest geregelt." },
    { de: "das Subjekt", plural: "die Subjekte", ar: "الفاعل", article: "das", example: "Das Subjekt steht oft vor oder nach dem Verb." },
    { de: "begründen", plural: "begründet, begründete, hat begründet", ar: "يُعلّل / يُبين السبب", article: "", example: "Ich begründe meine Meinung mit 'denn'." },
    { de: "widersprechen", plural: "widerspricht, widersprach, hat widersprochen", ar: "يعارض / يناقض", article: "", example: "Das Wort 'aber' zeigt einen Gegensatz." },
    { de: "die Begründung", plural: "die Begründungen", ar: "التعليل / المبرر", article: "die", example: "Er gibt eine gute Begründung." }
  ],

  // 7. تمارين تفاعلية
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich trinke keinen Kaffee, ___ ich trinke Tee.",
      options: ["sondern", "aber", "denn", "oder"],
      correct: 0,
      explanation: "الجملة الأولى منفية بـ keinen Kaffee ونريد تصحيحها وتقديم البديل، لذا نستخدم sondern (بل)."
    },
    {
      type: "multiple-choice",
      question: "Er kann heute nicht kommen, ___ er ist krank.",
      options: ["denn", "deshalb", "weil", "sondern"],
      correct: 0,
      explanation: "الجملة توضح السبب، والفعل ist جاء في المركز الثاني (er ist)، لذا فالرابط المناسب في الموقع صفر هو denn."
    },
    {
      type: "fill-blank",
      question: "Wir wollten spazieren gehen, ___ es regnete den ganzen Tag.",
      answer: "aber",
      accept: ["aber"],
      explanation: "هناك تناقض واستدراك (أردنا التنزه لكن أمطرت طوال اليوم)، لذا نستخدم aber."
    },
    {
      type: "fill-blank",
      question: "Möchtest du Tee ___ trinken wir einen Saft?",
      answer: "oder",
      accept: ["oder"],
      explanation: "تخيير بين خيارين أو بديلين، فالرابط المناسب هو oder (أو)."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (هو يتعلم الألمانية لأنه يريد العمل)",
      words: ["denn", "Er", "lernt", "Deutsch", ",", "er", "will", "arbeiten", "."],
      correct: "Er lernt Deutsch , denn er will arbeiten .",
      explanation: "الجملة الأولى (Er lernt Deutsch) + فاصلة + رابط denn في الموقع 0 + الفاعل er + الفعل will + arbeiten."
    },
    {
      type: "match",
      question: "طابق كل رابط من روابط ADUSO مع معناه واستخدامه:",
      pairs: [
        { left: "denn", right: "لأن (السبب / الموقع 0)" },
        { left: "sondern", right: "بل (تصحيح بعد نفي)" },
        { left: "aber", right: "لكن (استدراك وتناقض)" },
        { left: "oder", right: "أو (تخيير وبدائل)" }
      ],
      explanation: "روابط ADUSO تحتل الموقع صفر: denn تعلل، sondern تصحح بعد نفي، aber تستدرك، و oder تخير بين بدائل."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أنا لستُ متعباً، بل أنا جائع.)",
      from: "أنا لستُ متعباً، بل أنا جائع.",
      answer: "Ich bin nicht müde, sondern ich habe Hunger.",
      accept: [
        "Ich bin nicht müde, sondern ich habe Hunger.",
        "Ich bin nicht müde, sondern ich habe Hunger",
        "Ich bin nicht müde, sondern ich bin hungrig.",
        "Ich bin nicht müde, sondern ich bin hungrig"
      ],
      explanation: "بعد النفي nicht müde نستخدم sondern لتقديم البديل الصحيح: sondern ich habe Hunger (أو bin hungrig)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Er kommt nicht, denn ist er krank.)",
      sentence: "Er kommt nicht, denn ist er krank.",
      corrected: "Er kommt nicht, denn er ist krank.",
      accept: ["Er kommt nicht, denn er ist krank.", "Er kommt nicht, denn er ist krank"],
      explanation: "الرابط denn في الموقع صفر، لذلك يجب أن يأتي الفاعل أولاً (er) ثم الفعل في الموقع الثاني (ist)."
    },
    {
      type: "multiple-choice",
      question: "Sie wohnt nicht in Köln, ___ sie lebt in Bonn.",
      options: ["sondern", "aber", "denn", "oder"],
      correct: 0,
      explanation: "تصحيح مباشر بعد جملة منفية (nicht in Köln)، الرابط الصحيح هو sondern."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich mag keinen Tee, aber ich trinke Kaffee.)",
      sentence: "Ich mag keinen Tee, aber ich trinke Kaffee.",
      corrected: "Ich mag keinen Tee, sondern ich trinke Kaffee.",
      accept: ["Ich mag keinen Tee, sondern ich trinke Kaffee.", "Ich mag keinen Tee, sondern ich trinke Kaffee"],
      explanation: "عند نفي الشيء الأول وتقديم البديل المباشر (nicht/kein X ... Y) نستخدم sondern وليس aber."
    }
  ],

  // 8. اختبار الدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Welche Position hat das Verb im Hauptsatz nach 'denn'?",
      options: ["Position 2", "Position 1", "Am Satzende", "Position 0"],
      correct: 0,
      explanation: "الرابط denn يحتل الموقع صفر (Position 0)، وبالتالي يظل الفعل المصرّف في الموقع الثاني (Position 2)."
    },
    {
      type: "multiple-choice",
      question: "Wann benutzt man 'sondern'?",
      options: [
        "Nur nach einer Verneinung (nicht / kein)",
        "Nur in Fragesätzen",
        "Nur am Satzanfang",
        "Immer anstelle von 'und'"
      ],
      correct: 0,
      explanation: "نستخدم sondern حصراً بعد نفي صريح (nicht / kein) لإبطال المعلومة الأولى وذكر البديل."
    },
    {
      type: "multiple-choice",
      question: "Das Wetter ist herrlich, ___ wir müssen leider arbeiten.",
      options: ["aber", "sondern", "denn", "oder"],
      correct: 0,
      explanation: "الجملة الأولى مثبتة وفيها استدراك وتعارض مع الجملة الثانية، فالرابط الصحيح هو aber (لكن)."
    },
    {
      type: "multiple-choice",
      question: "Er kauft kein neues Auto, ___ er spart sein Geld.",
      options: ["sondern", "aber", "denn", "oder"],
      correct: 0,
      explanation: "بعد النفي (kein neues Auto) نستخدم sondern لبيان البديل (هو يدخر نقوده)."
    },
    {
      type: "multiple-choice",
      question: "Ich bleibe heute zu Hause, ___ draußen schneit es stark.",
      options: ["denn", "weil", "deshalb", "trotzdem"],
      correct: 0,
      explanation: "الجملة تذكر السبب مع بقاء الجملة رئيسية، لذلك نستخدم denn (في الموقع 0) قبل draußen (الموقع 1) و schneit (الموقع 2)."
    }
  ]
};

window.lessons = window.LESSONS;
