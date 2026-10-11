// data/lessons/a2-2/05-passiv-praesens.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-2-05"] = {
  id: "a2-2-05",
  level: "a2-2",
  order: 5,
  slug: "passiv-praesens",
  title: {
    de: "Das Passiv (Präsens)",
    ar: "المبني للمجهول في المضارع (werden + Partizip II)"
  },
  tags: ["grammatik", "verben", "passiv", "praesens", "satzbau", "a2"],

  // 1. الهدف من الدرس
  goal: "ستتعلم في هذا الدرس كيفية صياغة وفهم صيغة المبني للمجهول (Vorgangspassiv) في زمن المضارع باستخدام الفعل المساعد werden مع اسم المفعول (Partizip II)، وكيفية تحويل الجملة من المبني للمعلوم إلى المبني للمجهول وإضافة الفاعل اختياريًا بواسطة (von + Dativ).",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية، يُستخدم المبني للمجهول (**Das Passiv**) عندما يكون التركيز على **الحدث نفسه أو النتيجة**، وليس على الشخص الذي قام بالفعل. الفاعل إما غير معروف، أو غير مهم، أو نريد التحدث بأسلوب رسمي وموضوعي (كما في التقارير الإخبارية، التعليمات، ودليل الاستخدام)."
    },
    {
      type: "rule",
      content: "قاعدة تركيب المبني للمجهول في المضارع (Präsens Passiv):<br>يتكون من ركنين أساسيين:<br>1. الفعل المساعد **werden** مصرّفاً في الموقع الثاني في الجملة بحسب الفاعل الجديد (**Position 2**).<br>2. اسم المفعول (**Partizip II**) للفعل الأساسي في **نهاية الجملة تماماً**.<br>• *Das Auto **wird** in der Werkstatt **repariert**.*"
    },
    {
      type: "text",
      content: "خطوات تحويل الجملة من مبني للمعلوم (Aktiv) إلى مبني للمجهول (Passiv):"
    },
    {
      type: "table",
      headers: ["الخطوة", "في الجملة المبنية للمعلوم (Aktiv)", "في الجملة المبنية للمجهول (Passiv)", "مثال"],
      rows: [
        ["1. المفعول به", "المفعول به المنصوب (Akkusativ-Objekt)", "يتحول ليصبح الفاعل المرفوع (Nominativ-Subjekt)", "Der Mechaniker repariert **den Wagen**.<br>← **Der Wagen** wird repariert."],
        ["2. الفاعل الأصلي", "الفاعل (Subjekt)", "يُحذف، أو يُضاف اختيارياً باستخدام (**von + Dativ**)", "← Der Wagen wird **vom Mechaniker** repariert."],
        ["3. الفعل", "فعل مصرّف في المضارع", "تصريف **werden** بحسب الفاعل الجديد + **Partizip II** في النهاية", "repariert ← **wird repariert**"]
      ]
    },
    {
      type: "text",
      content: "تصريف الفعل المساعد **werden** في صيغة المبني للمجهول (غالباً ما يُستخدم المفرد wird والجمع werden):"
    },
    {
      type: "table",
      headers: ["الفاعل الجديد", "تصريف werden", "اسم المفعول (Partizip II)", "المعنى"],
      rows: [
        ["المفرد المذكر / المؤنث / المحايد", "**wird**", "gekocht / gebaut / repariert", "يُطبخ / يُبنى / يُصلَح"],
        ["الجمع (Plural)", "**werden**", "gekocht / gebaut / repariert", "تُطبخ / تُبنى / تُصلَح"],
        ["ضمير المتكلم ich", "**werde**", "operiert / untersucht", "أنا أُجرى لي عملية / أُفحص"],
        ["ضمير المخاطب du", "**wirst**", "gefragt / informiert", "أنت تُسأل / تُبلّغ"]
      ]
    },
    {
      type: "rule",
      content: "حذف الفاعل العام (man):<br>إذا كان فاعل الجملة المبنية للمعلوم هو الضمير العام **man** (المرء / الناس)، فإنه **يُحذف تماماً** في المبني للمجهول ولا يظهر أبداً مع von!<br>• Aktiv: *Hier spricht **man** Deutsch.*<br>• Passiv: *Hier **wird** Deutsch **gesprochen**.*"
    },
    {
      type: "text",
      content: "كيف نشير إلى الفاعل إذا أردنا ذكره في المبني للمجهول؟<br>نستخدم حرف الجر **von + Dativ** (للأشخاص، المؤسسات، والكائنات الحية):<br>• der Arzt ← **vom Arzt** (von dem Arzt)<br>• die Polizei ← **von der Polizei**<br>• die Kollegen ← **von den Kollegen**"
    }
  ],

  // 3. الأمثلة (8+ أمثلة نموذجية مع الترجمة والصوت وتوضيح القاعدة)
  examples: [
    {
      de: "Das Auto **wird** vom Mechaniker **repariert**.",
      ar: "السيارة تُصلَح من قِبل الميكانيكي.",
      highlight: "wird ... repariert",
      audio: true,
      note: "wird مفرد مع das Auto + اسم المفعول repariert في النهاية + vom Mechaniker"
    },
    {
      de: "Das alte Haus **wird** renoviert.",
      ar: "المنزل القديم يتم ترميمه (يُرمَّم).",
      highlight: "wird renoviert",
      audio: true,
      note: "مبني للمجهول يركز على الحدث دون ذكر الفاعل"
    },
    {
      de: "In Deutschland **wird** viel Bier **getrunken**.",
      ar: "في ألمانيا يُشرب الكثير من البيرة.",
      highlight: "wird ... getrunken",
      audio: true,
      note: "wird مع المفرد viel Bier + اسم المفعول getrunken (من trinken)"
    },
    {
      de: "Die Briefe **werden** heute noch **verschickt**.",
      ar: "الرسائل تُرسَل هذا اليوم.",
      highlight: "werden ... verschickt",
      audio: true,
      note: "werden بصيغة الجمع لتوافق الفاعل الجديد die Briefe (جمع)"
    },
    {
      de: "Hier **wird** Deutsch **gesprochen**.",
      ar: "هنا يُتحدَّث باللغة الألمانية.",
      highlight: "wird ... gesprochen",
      audio: true,
      note: "جملة شائعة أصلها: Hier spricht man Deutsch"
    },
    {
      de: "Der Patient **wird** von der Ärztin **untersucht**.",
      ar: "المريض يُفحَص من قِبل الطبيبة.",
      highlight: "wird ... untersucht",
      audio: true,
      note: "الفاعل ذُكر بواسطة von + Dativ (von der Ärztin)"
    },
    {
      de: "Die neuen Wohnungen **werden** schnell **verkauft**.",
      ar: "الشقق الجديدة تُباع بسرعة.",
      highlight: "werden ... verkauft",
      audio: true,
      note: "werden مع الجمع die neuen Wohnungen + verkauft في النهاية"
    },
    {
      de: "Die Rechnung **wird** sofort **bezahlt**.",
      ar: "الفاتورة تُدفَع فوراً.",
      highlight: "wird ... bezahlt",
      audio: true,
      note: "die Rechnung مفرد تأخذ wird + Partizip II bezahlt"
    },
    {
      de: "In dieser Bibliothek **wird** nicht laut **gesprochen**.",
      ar: "في هذه المكتبة لا يُتحدَّث بصوت مرتفع.",
      highlight: "wird ... gesprochen",
      audio: true,
      note: "مبني للمجهول للتعليمات واللوائح العامة"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "الفرق في الصياغة بين العربية والألمانية: في اللغة العربية نصوغ المبني للمجهول بتغيير حركات الفعل نفسه (كَتَبَ ← كُتِبَ / يَكْتُبُ ← يُكْتَبُ). أما في الألمانية فلا نغير حركات الفعل، بل نستخدم فعلاً مساعداً خاصاً هو **werden** في المركز الثاني مع اسم المفعول **Partizip II** في نهاية الجملة.",
    "ذكر الفاعل بـ «من قِبل»: في اللغة العربية الفصحى التراثية نادراً ما يُذكر الفاعل مع المبني للمجهول، لكن في الألمانية المعاصرة من الشائع جداً وطبيعي ذكر الفاعل باستخدام **von + Dativ** (مثل: vom Arzt / von der Polizei).",
    "انتبه لمطابقة فعل werden مع الفاعل الجديد: انتبه إذا كان الفاعل الجديد مفرداً فتستخدم **wird** (مثل: Das Buch wird gelesen)، أو جمعاً فتستخدم **werden** (مثل: Die Bücher werden gelesen). الكثير من المتعلمين ينسون تحويل الفعل إلى الجمع عند جمع الاسم!"
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "قاعدة المبني للمجهول في المضارع: تصريف werden في المركز الثاني + اسم المفعول (Partizip II) في نهاية الجملة.",
    "المفعول به المنصوب في المعلوم (Akkusativ) يصبح فاعلاً مرفوعاً (Nominativ) في المجهول.",
    "مع المفرد نستخدم wird (Das Auto wird repariert)، ومع الجمع نستخدم werden (Die Autos werden repariert).",
    "يمكن ذكر الفاعل باستخدام حرف الجر von متبوعاً بالمجرور Dativ.",
    "الضمير العام man يُحذف تماماً عند التحويل إلى المبني للمجهول."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "das Passiv", plural: "kein Plural", ar: "المبني للمجهول", article: "das", example: "Das Passiv betont die Handlung." },
    { de: "die Handlung", plural: "die Handlungen", ar: "الحدث / الفعل / الإجراء", article: "die", example: "Die Handlung steht im Mittelpunkt." },
    { de: "reparieren", plural: "reparierte, hat repariert", ar: "يصلح", article: "", example: "Das Fahrrad wird heute repariert." },
    { de: "untersuchen", plural: "untersuchte, hat untersucht", ar: "يفحص / يعاين", article: "", example: "Der Patient wird vom Arzt untersucht." },
    { de: "die Rechnung", plural: "die Rechnungen", ar: "الفاتورة / الحساب", article: "die", example: "Die Rechnung wird per Überweisung bezahlt." },
    { de: "verschicken", plural: "verschickte, hat verschickt", ar: "يرسل / يشحن", article: "", example: "Die Pakete werden morgen verschickt." },
    { de: "renovieren", plural: "renovierte, hat renoviert", ar: "يرمم / يجدد", article: "", example: "Die Wohnung wird gerade renoviert." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Das Auto ___ in der Werkstatt repariert.",
      options: ["wird", "werden", "ist", "hat"],
      correct: 0,
      answer: 0,
      explanation: "مع الفاعل المفرد المحايد (Das Auto) نستخدم صيغة wird في المبني للمجهول."
    },
    {
      type: "fill-blank",
      question: "Die Pakete ___ heute mit der Post verschickt. (werden)",
      sentence: "Die Pakete ___ heute mit der Post verschickt.",
      answer: "werden",
      accept: ["werden"],
      explanation: "الفاعل جمع (Die Pakete) لذا يجب استخدام صيغة الجمع للفعل werden وهي werden."
    },
    {
      type: "word-order",
      question: "رتب الجملة المبنية للمجهول: (هنا يُتحدث بالألمانية)",
      words: ["Hier", "wird", "Deutsch", "gesprochen", "."],
      correct: "Hier wird Deutsch gesprochen .",
      answer: "Hier wird Deutsch gesprochen .",
      accept: ["Hier wird Deutsch gesprochen.", "Hier wird Deutsch gesprochen"],
      explanation: "ترتيب الجملة: الظرف (Hier) + فعل werden (wird) + الفاعل الجديد (Deutsch) + اسم المفعول (gesprochen) في النهاية."
    },
    {
      type: "multiple-choice",
      question: "حَوّل إلى المبني للمجهول: »Der Koch kocht die Suppe«.",
      options: ["Die Suppe wird gekocht.", "Die Suppe hat gekocht.", "Die Suppe wird kochen.", "Der Koch wird die Suppe kochen."],
      correct: 0,
      answer: 0,
      explanation: "المفعول die Suppe يصبح فاعلاً + wird + اسم المفعول gekocht في النهاية: Die Suppe wird gekocht."
    },
    {
      type: "match",
      question: "طابق بين الجملة المبنية للمعلوم ومقابلها في المبني للمجهول:",
      pairs: [
        { left: "Man baut ein Haus.", right: "Ein Haus wird gebaut." },
        { left: "Man liest das Buch.", right: "Das Buch wird gelesen." },
        { left: "Man öffnet das Fenster.", right: "Das Fenster wird geöffnet." },
        { left: "Man trinkt den Kaffee.", right: "Der Kaffee wird getrunken." }
      ],
      explanation: "عند التحويل إلى المبني للمجهول يُحذف الضمير man ويتحول المفعول به إلى فاعل مع (wird + Partizip II)."
    },
    {
      type: "fill-blank",
      question: "Der Patient wird ___ Arzt untersucht. (von + Dativ)",
      sentence: "Der Patient wird ___ Arzt untersucht.",
      answer: "vom",
      accept: ["vom", "von dem"],
      explanation: "نستخدم von + Dativ لذكر الفاعل، ومع الاسم المذكر der Arzt تدمج von + dem لتصبح vom."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية بصيغة المبني للمجهول: (الفاتورة تُدفَع فوراً.)",
      from: "الفاتورة تُدفَع فوراً.",
      answer: "Die Rechnung wird sofort bezahlt.",
      accept: ["Die Rechnung wird sofort bezahlt.", "Die Rechnung wird sofort bezahlt"],
      explanation: "الفاعل (Die Rechnung) + الفعل المساعد (wird) + الظرف (sofort) + اسم المفعول (bezahlt)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في تصريف الفعل مع الجمع:",
      sentence: "Die Zimmer wird jeden Tag gereinigt.",
      corrected: "Die Zimmer werden jeden Tag gereinigt.",
      answer: "Die Zimmer werden jeden Tag gereinigt.",
      accept: ["Die Zimmer werden jeden Tag gereinigt.", "Die Zimmer werden jeden Tag gereinigt"],
      explanation: "كلمة die Zimmer هنا جمع (الغرف)، لذلك يجب استخدام werden بدلاً من wird."
    },
    {
      type: "multiple-choice",
      question: "حَوّل إلى المبني للمجهول: »Der Mechaniker repariert das Auto«.",
      options: ["Das Auto wird vom Mechaniker repariert.", "Das Auto wird vom Mechaniker reparieren.", "Das Auto repariert der Mechaniker.", "Der Mechaniker wird das Auto repariert."],
      correct: 0,
      answer: 0,
      explanation: "يصبح das Auto فاعلاً، والفاعل يسبق بـ vom Mechaniker، والفعل wird ... repariert."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في صياغة الفعل الأساسي:",
      sentence: "Das Brot wird frisch backen.",
      corrected: "Das Brot wird frisch gebacken.",
      answer: "Das Brot wird frisch gebacken.",
      accept: ["Das Brot wird frisch gebacken.", "Das Brot wird frisch gebacken"],
      explanation: "في المبني للمجهول يجب أن يكون الفعل في نهاية الجملة بصيغة اسم المفعول (Partizip II) وهو gebacken وليس المصدر backen."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة متعددة الخيارات)
  quiz: [
    {
      type: "multiple-choice",
      question: "Aus welchen zwei Teilen besteht das Passiv Präsens?",
      options: ["sein + Partizip II", "haben + Partizip II", "werden + Partizip II", "werden + Infinitiv"],
      correct: 2,
      answer: 2,
      explanation: "يتكون Passiv Präsens من فعل werden مصرّفاً + اسم المفعول Partizip II."
    },
    {
      type: "multiple-choice",
      question: "Die E-Mails ___ jeden Morgen beantwortet.",
      options: ["wird", "werden", "werdet", "worden"],
      correct: 1,
      answer: 1,
      explanation: "مع الفاعل الجمع (Die E-Mails) نستخدم werden."
    },
    {
      type: "multiple-choice",
      question: "Hier ___ Deutsch gelernt.",
      options: ["wird", "werden", "sein", "hat"],
      correct: 0,
      answer: 0,
      explanation: "Deutsch اسم مفرد غير معدود، فيأخذ wird."
    },
    {
      type: "multiple-choice",
      question: "Wie wird der Täter im Passiv angegeben?",
      options: ["mit »aus« + Dativ", "mit »von« + Dativ", "mit »durch« + Dativ", "mit »bei« + Akkusativ"],
      correct: 1,
      answer: 1,
      explanation: "يُذكر الفاعل عادةً باستخدام حرف الجر von مع حالة الجر Dativ."
    },
    {
      type: "multiple-choice",
      question: "حَوّل إلى المبني للمجهول: »Man schließt die Tür«.",
      options: ["Die Tür schließt man.", "Die Tür wird geschlossen.", "Die Tür wird von man geschlossen.", "Die Tür ist schließen."],
      correct: 1,
      answer: 1,
      explanation: "الضمير man يُحذف تماماً، وتصبح الجملة: Die Tür wird geschlossen."
    }
  ]
};
window.lessons = window.LESSONS;
