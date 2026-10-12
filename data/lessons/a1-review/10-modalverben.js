// website/data/lessons/a1-review/10-modalverben.js
window.LESSONS = window.LESSONS || {};
window.lessons = window.lessons || {};

window.LESSONS["a1-review-10"] = {
  id: "a1-review-10",
  level: "a1-review",
  order: 10,
  slug: "modalverben",
  title: {
    de: "Die Modalverben",
    ar: "الأفعال المساعدة/الناقصة (können, müssen, wollen...)"
  },
  tags: ["grammatik", "modalverben", "verben", "satzbau", "a1"],

  // 1. الهدف من الدرس
  goal: "ستتعلم كيفية تصريف الأفعال الناقصة الستة (können, müssen, wollen, dürfen, sollen, möchten)، ومعرفة القاعدة الذهبية لتطابق تصريف (ich) و (er/sie/es)، وكيفية بناء الجملة بقوس الفعل (Klammerstruktur) حيث يذهب المصدر إلى نهاية الجملة.",

  // 2. الشرح مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "تعتبر **الأفعال الناقصة (Modalverben)** من أهم ركائز قواعد اللغة الألمانية. تسمى ناقصة لأنها لا تكتمل دلالتها في الغالب إلا بوجود فعل أساسي آخر في الجملة يوضح ماهية الحدث (مثال: أستطيع... ماذا؟ أستطيع **السباحة**)."
    },
    {
      type: "rule",
      content: "القاعدة الذهبية لتصريف الأفعال الناقصة:\n1. صيغة **ich** وصيغة **er / sie / es** متطابقتان تماماً وبدون أي نهاية (-e أو -t)!\n2. في صيغ المفرد (ich, du, er/sie/es) يسقط حرف الـ Umlaut أو يتغير حرف العلة (können ← kann / müssen ← muss / dürfen ← darf / wollen ← will).\n3. صيغ الجمع (wir, ihr, sie/Sie) منتظمة وتحافظ على حرف العلة الأصلي."
    },
    {
      type: "table",
      headers: ["الضمير", "können (يستطيع)", "müssen (يجب/يلزم)", "wollen (يريد)", "dürfen (يسمح له)", "sollen (ينبغي)", "möchten (يرغب)"],
      rows: [
        ["**ich**", "**kann**", "**muss**", "**will**", "**darf**", "**soll**", "**möchte**"],
        ["**du**", "kannst", "musst", "willst", "darfst", "sollst", "möchtest"],
        ["**er / sie / es**", "**kann**", "**muss**", "**will**", "**darf**", "**soll**", "**möchte**"],
        ["**wir**", "können", "müssen", "wollen", "dürfen", "sollen", "möchten"],
        ["**ihr**", "könnt", "müsst", "wollt", "dürft", "sollt", "möchtet"],
        ["**sie / Sie**", "können", "müssen", "wollen", "dürfen", "sollen", "möchten"]
      ]
    },
    {
      type: "text",
      content: "هيكل الجملة مع الأفعال الناقصة — **قوس الفعل (Die Satzklammer)**:\nفي الجملة الألمانية، يأتي الفعل الناقص في المركز الثاني ويصرف بحسب الفاعل، بينما يذهب الفعل الأساسي إلى **آخر الجملة بصيغة المصدر (Infinitiv)** دون أي تصريف!"
    },
    {
      type: "table",
      headers: ["الموقع 1 (الفاعل)", "الموقع 2 (الفعل الناقص المصرف)", "وسط الجملة (الزمان/المكان/المفعول)", "نهاية الجملة (المصدر Infinitiv)"],
      rows: [
        ["Ich", "**kann**", "sehr gut Deutsch", "**sprechen**."],
        ["Wir", "**müssen**", "heute lange für die Prüfung", "**lernen**."],
        ["Hier", "**darf** man", "leider nicht", "**rauchen**."],
        ["Was", "**möchtest** du", "heute Abend", "**essen**?"]
      ]
    },
    {
      type: "rule",
      content: "الفروق الدلالية بين الأفعال الناقصة:\n- **können**: القدرة، الاستطاعة أو الإمكانية (Can / To be able to).\n- **müssen**: الالتزام والضرورة الحتمية (Must / To have to).\n- **nicht müssen**: لا داعي / ليس إلزامياً (Don't have to - اختياري).\n- **nicht dürfen**: ممنوع منعاً باتاً قانونياً أو صحياً (Forbidden / Must not).\n- **wollen**: إرادة وتصميم قوي وواضح (Want to / Intend to).\n- **möchten**: رغبة مهذبة ولطيفة (Would like to).\n- **sollen**: واجب أخلاقي، نصيحة، أو أمر موجه من طرف ثالث (Should / Ought to)."
    }
  ],

  // 3. الأمثلة (8+ أمثلة ناطقة مع إبراز القاعدة والترجمة)
  examples: [
    {
      de: "Ich **kann** schon sehr gut Deutsch **sprechen**.",
      ar: "أنا أستطيع التحدث بالألمانية جيداً جداً بالفعل.",
      highlight: "kann sprechen",
      audio: true,
      note: "kann في المركز 2 والمصدر sprechen في نهاية الجملة"
    },
    {
      de: "Er **muss** heute bis 18 Uhr im Büro **bleiben**.",
      ar: "يجب عليه اليوم أن يبقى في المكتب حتى الساعة 18.",
      highlight: "muss bleiben",
      audio: true,
      note: "muss متطابق مع ich بدون نهاية، و bleiben مصدر في النهاية"
    },
    {
      de: "Wir **wollen** im Sommer nach Deutschland **reisen**.",
      ar: "نحن نريد السفر إلى ألمانيا في الصيف.",
      highlight: "wollen reisen",
      audio: true,
      note: "wollen يدل على خطة وإرادة حقيقية، والمصدر reisen في النهاية"
    },
    {
      de: "Hier **darf** man nicht **parken**.",
      ar: "لا يُسمح بالوقوف هنا (الوقوف ممنوع).",
      highlight: "darf parken",
      audio: true,
      note: "nicht dürfen تدل على المنع والحظر القانوني"
    },
    {
      de: "Der Arzt sagt, ich **soll** mehr Wasser **trinken**.",
      ar: "الطبيب يقول إنه ينبغي عليّ أن أشرب ماءً أكثر.",
      highlight: "soll trinken",
      audio: true,
      note: "sollen لنقل نصيحة أو تعليمات الطبيب"
    },
    {
      de: "**Möchtest** du eine Tasse Kaffee **trinken**?",
      ar: "هل ترغب في شرب فنجان قهوة؟",
      highlight: "Möchtest trinken",
      audio: true,
      note: "möchten أسلوب مهذب في العرض والطلب"
    },
    {
      de: "Anna **kann** wunderbar Klavier **spielen**.",
      ar: "آنّا تستطيع العزف على البيانو بروعة.",
      highlight: "kann spielen",
      audio: true,
      note: "مع الغائب المفرد Anna (sie) يكون التصريف kann بدون -t"
    },
    {
      de: "Ihr **müsst** eure Hausaufgaben heute **abgeben**.",
      ar: "يجب عليكم تسليم واجباتكم المنزلية اليوم.",
      highlight: "müsst abgeben",
      audio: true,
      note: "مع الضمير ihr نستخدم müsst، والفعل المنفصل abgeben يبقى مصدراً متصلاً في النهاية"
    },
    {
      de: "**Darf** ich Sie etwas **fragen**?",
      ar: "هل تسمح لي بأن أسألك شيئاً؟ (طلب إذن باحترام)",
      highlight: "Darf fragen",
      audio: true,
      note: "dürfen لطلب الإذن بأدب مع Sie"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في العربية نقول 'أستطيع **أن** أتكلم'، لكن في الألمانية لا نضع أي أداة مثل (dass / zu) بين الفعل الناقص والمصدر! نضع الفعل الناقص مباشرة، ثم المصدر في نهاية الجملة: Ich kann sprechen (وليس Ich kann dass...).",
    "احذر من إضافة نهاية -t للضمير الغائب المفرد (er/sie/es): لا تقل أبداً *er kannt* أو *er musst* أو *er willt*! تصريف er يساوي دائماً تصريف ich تماماً: er kann / er muss / er will.",
    "الفرق الدقيق بين müssen و dürfen في النفي: 'Du musst nicht kommen' تعني 'لست مضطراً للمجيء، الأمر اختياري'، بينما 'Du darfst nicht kommen' تعني 'ممنوع عليك المجيء نهائياً!'."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "تصريف ich يماثل دائماً تصريف er/sie/es وبدون أي نهايات (ich kann = er kann).",
    "يسقط الـ Umlaut في صيغ المفرد للأفعال: können (kann), müssen (muss), dürfen (darf).",
    "الفعل الناقص يأتي في المركز 2 ويصرف، والفعل الأساسي يذهب لآخر الجملة بصيغة المصدر.",
    "مع الأفعال الناقصة لا تنفصل الأفعال المنفصلة: تبقى متصلة في المصدر في النهاية (aufstehen).",
    "المعاني الأساسية: können (استطاعة)، müssen (إلزام)، wollen (إرادة)، dürfen (سماح)، sollen (نصيحة)، möchten (رغبة مهذبة)."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "können", plural: "-", ar: "يستطيع / يقدر على", article: "-", example: "Ich kann schwimmen." },
    { de: "müssen", plural: "-", ar: "يجب عليه / يضطر إلى", article: "-", example: "Er muss heute arbeiten." },
    { de: "wollen", plural: "-", ar: "يريد / ينوي", article: "-", example: "Wir wollen Deutsch lernen." },
    { de: "dürfen", plural: "-", ar: "يُسمح له / يجوز", article: "-", example: "Hier darf man rauchen." },
    { de: "sollen", plural: "-", ar: "ينبغي عليه / مفروض أن", article: "-", example: "Du sollst die Medizin nehmen." },
    { de: "möchten", plural: "-", ar: "يود / يرغب بتهذيب", article: "-", example: "Ich möchte einen Kaffee." },
    { de: "die Hausaufgabe", plural: "die Hausaufgaben", ar: "الواجب المنزلي", article: "die", example: "Ich mache meine Hausaufgaben." },
    { de: "der Arzt", plural: "die Ärzte", ar: "الطبيب", article: "der", example: "Der Arzt untersucht den Patienten." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "ما هو تصريف الفعل können مع الضمير الغائب (er)؟",
      options: ["er konnt", "er kannt", "er kann", "er könne"],
      answer: 2,
      correct: 2,
      correct: 2,
      explanation: "تصريف er يماثل تصريف ich تماماً وبدون أي نهاية (-t): er kann."
    },
    {
      type: "fill-blank",
      question: "أكمل الفراغ بتصريف الفعل müssen مع الضمير (ich):",
      sentence: "Ich ___ heute sehr früh aufstehen.",
      answer: "muss",
      accept: ["muss", "muß"],
      explanation: "مع الضمير ich يتحول müssen إلى muss بسقوط الأوملاوت وبدون نهاية."
    },
    {
      type: "word-order",
      question: "رتب الكلمات وفق قاعدة قوس الفعل (Klammerstruktur):",
      words: ["Wir", "müssen", "morgen", "die", "Prüfung", "schreiben"],
      answer: "Wir müssen morgen die Prüfung schreiben",
      correct: "Wir müssen morgen die Prüfung schreiben",
      correct: "Wir müssen morgen die Prüfung schreiben",
      explanation: "الفعل الناقص müssen في المركز 2، والمصدر schreiben في نهاية الجملة تماماً."
    },
    {
      type: "multiple-choice",
      question: "ماذا تعني جملة: 'Hier darf man nicht rauchen'؟",
      options: [
        "لا أحد يستطيع التدخين هنا بسبب الدخان",
        "التدخين ممنوع هنا قانونياً وغير مسموح به",
        "لا أحد يريد التدخين هنا",
        "لست مضطراً للتدخين هنا"
      ],
      answer: 1,
      correct: 1,
      correct: 1,
      explanation: "nicht dürfen تدل على الحظر التام والمنع القاطع (ممنوع التدخين)."
    },
    {
      type: "match",
      question: "طابق بين الفعل الناقص والمعنى المعبر عنه بالعربية:",
      pairs: [
        { left: "المقدرة والاستطاعة", right: "können" },
        { left: "الإلزام والضرورة الحتمية", right: "müssen" },
        { left: "الإرادة والتصميم", right: "wollen" },
        { left: "السماح والإذن", right: "dürfen" }
      ],
      explanation: "هذه هي الدلالات الأساسية للأفعال الناقصة في اللغة الألمانية."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في تصريف الفعل الناقص مع الفاعل er:",
      text: "Er willt nach Deutschland fliegen.",
      sentence: "Er willt nach Deutschland fliegen.",
      incorrect: "Er willt nach Deutschland fliegen.",
      answer: "Er will nach Deutschland fliegen.",
      corrected: "Er will nach Deutschland fliegen.",
      accept: ["Er will nach Deutschland fliegen.", "Er will nach Deutschland fliegen"],
      explanation: "الفعل wollen مع er يصرف بدون -t تماماً كصيغة ich: Er will وليس Er willt."
    },
    {
      type: "fill-blank",
      question: "أكمل الفراغ بالمصدر المناسب للفعل helfen في نهاية الجملة:",
      sentence: "Kannst du mir bitte bei den Hausaufgaben ___?",
      answer: "helfen",
      accept: ["helfen"],
      explanation: "مع الفعل الناقص kannst، يوضع الفعل الأساسي في نهاية الجملة بصيغة المصدر دون أي تغيير: helfen."
    },
    {
      type: "translate",
      question: "ترجم الجملة التالية إلى الألمانية:",
      text: "أنا أستطيع السباحة جيداً.",
      from: "أنا أستطيع السباحة جيداً.",
      answer: "Ich kann gut schwimmen.",
      accept: [
        "Ich kann gut schwimmen.",
        "Ich kann gut schwimmen",
        "Ich kann sehr gut schwimmen.",
        "Ich kann sehr gut schwimmen"
      ],
      explanation: "الفعل الناقص kann في المركز الثاني، والمصدر schwimmen في نهاية الجملة."
    },
    {
      type: "multiple-choice",
      question: "كيف تصرف الفعل möchten مع الضمير (du)؟",
      options: [
        "du möchtest",
        "du möchtst",
        "du mochst",
        "du magst"
      ],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "لأن جذر möchten ينتهي بـ t، نضيف e للتيسير الصوتي قبل st: du möchtest."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في تصريف الفعل الأساسي في الجملة:",
      text: "Ich kann spreche Deutsch.",
      sentence: "Ich kann spreche Deutsch.",
      incorrect: "Ich kann spreche Deutsch.",
      answer: "Ich kann Deutsch sprechen.",
      corrected: "Ich kann Deutsch sprechen.",
      accept: ["Ich kann Deutsch sprechen.", "Ich kann Deutsch sprechen"],
      explanation: "الفعل الأساسي بعد الفعل الناقص يجب أن يكون في صيغة المصدر (sprechen) وفي نهاية الجملة."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة اختيار من متعدد)
  quiz: [
    {
      type: "multiple-choice",
      question: "ما هو تصريف الفعل können مع الضمير (ich)؟",
      options: ["könne", "kann", "kannst", "konnte"],
      answer: 1,
      correct: 1,
      correct: 1,
      explanation: "تصريف können مع ich هو kann بسقوط الأوملاوت وبدون أي نهاية."
    },
    {
      type: "multiple-choice",
      question: "أين يقع الفعل الأساسي عند وجود فعل ناقص (Modalverb) في الجملة الخبرية؟",
      options: [
        "مباشرة بعد الفعل الناقص",
        "في بداية الجملة",
        "في نهاية الجملة تماماً بصيغة المصدر",
        "مكان الفاعل"
      ],
      answer: 2,
      correct: 2,
      correct: 2,
      explanation: "حسب قاعدة Satzklammer يوضع الفعل الأساسي في المصدر في نهاية الجملة تماماً."
    },
    {
      type: "multiple-choice",
      question: "ما هو تصريف الفعل müssen مع الضمير (ihr)؟",
      options: ["ihr müsst", "ihr muss", "ihr musst", "ihr müssen"],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "مع ihr يصرف الفعل بانتظام بإضافة -t مع الحفاظ على الأوملاوت: ihr müsst."
    },
    {
      type: "multiple-choice",
      question: "ما هو تصريف الفعل wollen مع الضمير (du)؟",
      options: ["du wollt", "du willst", "du wöllst", "du wilst"],
      answer: 1,
      correct: 1,
      correct: 1,
      explanation: "الفعل wollen يتغير حرف العلة فيه مع المفرد إلى i، فيصبح مع du: du willst."
    },
    {
      type: "multiple-choice",
      question: "أي من الجمل التالية صحيحة تماماً لغوياً ونحوياً؟",
      options: [
        "Er muss jeden Tag arbeiten.",
        "Er musst jeden Tag arbeiten.",
        "Er muss jeden Tag arbeitet.",
        "Er muss arbeiten jeden Tag."
      ],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "الجملة الصحيحة هي 'Er muss jeden Tag arbeiten.' لأن er muss بدون -t والمصدر arbeiten في نهاية الجملة."
    }
  ]
};

window.lessons["a1-review-10"] = window.LESSONS["a1-review-10"];
