// data/lessons/a2-1/07-regelmaessige-praeteritum.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-07"] = {
  id: "a2-1-07",
  level: "a2-1",
  order: 7,
  slug: "regelmaessige-praeteritum",
  title: {
    de: "Regelmäßige Verben im Präteritum",
    ar: "الماضي البسيط للأفعال المنتظمة (-te, -test, -te...)"
  },
  tags: ["grammatik", "verben", "praeteritum", "regelmaessig", "a2"],

  // 1. الهدف
  goal: "ستتعلم في هذا الدرس كيفية صياغة الماضي البسيط (Präteritum) لجميع الأفعال المنتظمة بإضافة لواحق الماضي (-te, -test, -te...)، وقاعدة إضافة حرف e الصوتي للأفعال المنتهية بـ t أو d، وكيفية تصريف الأفعال المنفصلة في الماضي.",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "تتبع الأفعال المنتظمة (وتسمى أيضاً الأفعال الضعيفة regelmäßige / schwache Verben) قاعدة تصريف قياسية وثابتة وواضحة جداً في الماضي البسيط: نحذف اللاحقة -en من المصدر للحصول على **جذر الفعل (Verbstamm)**، ثم نضيف علامة الماضي ولواحق الضمائر:"
    },
    {
      type: "table",
      headers: ["الضمير", "اللاحقة (Endung)", "مثال مع lernen (يتعلم)", "مثال مع machen (يفعل / يصنع)", "الترجمة بالعربية"],
      rows: [
        ["ich", "**-te**", "ich lern**te**", "ich mach**te**", "أنا تعلمتُ / فعلتُ"],
        ["du", "**-test**", "du lern**test**", "du mach**test**", "أنتَ تعلمتَ / فعلتَ"],
        ["er / sie / es", "**-te**", "er lern**te**", "sie mach**te**", "هو تعلمَ / هي صنعتْ"],
        ["wir", "**-ten**", "wir lern**ten**", "wir mach**ten**", "نحن تعلمنا / فعلنا"],
        ["ihr", "**-tet**", "ihr lern**tet**", "ihr mach**tet**", "أنتم تعلمتم / فعلتم"],
        ["sie / Sie", "**-ten**", "sie lern**ten**", "Sie mach**ten**", "هم تعلموا / حضرتك فعلتَ"]
      ]
    },
    {
      type: "rule",
      content: "قاعدة ذهبية ثابتة: ضمير المتكلم (**ich**) وضمير الغائب المفرد (**er / sie / es / man**) لهما **نفس الصيغة تماماً** في Präteritum بدون أي استثناء: *ich lernte = er lernte*."
    },
    {
      type: "text",
      content: "قاعدة حرف الـ **-e-** الصوتي المساعد (Sonderregel für Verben auf -t, -d):<br>إذا انتهى جذر الفعل بحرف **-t** أو **-d** أو بـ حرف ساكن متبوع بـ **-m / -n** (مثل الأفعال: *arbeiten, warten, antworten, kosten, baden, öffnen*)، فإنه يستحيل نطق حرف t الماضي مباشرة بعد t الجذر (*arbeit-te*)! لذلك نضيف حرف **-e-** صوتي فاصل لتسهيل النطق:"
    },
    {
      type: "table",
      headers: ["الضمير", "فعل arbeiten (يعمل)", "فعل warten (ينتظر)", "فعل antworten (يجيب)"],
      rows: [
        ["ich", "ich arbeit**ete**", "ich wart**ete**", "ich antwort**ete**"],
        ["du", "du arbeit**etest**", "du wart**etest**", "du antwort**etest**"],
        ["er / sie / es", "er arbeit**ete**", "sie wart**ete**", "er antwort**ete**"],
        ["wir", "wir arbeit**eten**", "wir wart**eten**", "wir antwort**eten**"],
        ["ihr", "ihr arbeit**etet**", "ihr wart**etet**", "ihr antwort**etet**"],
        ["sie / Sie", "sie arbeit**eten**", "sie wart**eten**", "Sie antwort**eten**"]
      ]
    },
    {
      type: "rule",
      content: "الأفعال المنفصلة المنتظمة (Trennbare Verben):<br>في الجملة الرئيسية، يُصرّف الفعل في الماضي في الموقع الثاني (Position 2)، وتذهب البادئة المنفصلة إلى آخر الجملة تماماً:<br>• *einkaufen* → Er **kaufte** gestern im Supermarkt **ein**.<br>• *aufmachen* → Sie **machte** das Fenster **auf**.<br>• *zuhören* → Die Schüler **hörten** aufmerksam **zu**."
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Im Sommer **lernte** ich jeden Tag vier Stunden Deutsch.",
      ar: "في الصيف درستُ الألمانية أربع ساعات يومياً.",
      highlight: "lernte",
      audio: true,
      note: "lernen ← lern + te مع الفاعل ich"
    },
    {
      de: "Mein Vater **arbeitete** dreißig Jahre lang bei Siemens.",
      ar: "عمل والدي لمدة ثلاثين عاماً في شركة سيمنز.",
      highlight: "arbeitete",
      audio: true,
      note: "arbeiten ينتهي بـ t ← arbeit-ete مع er"
    },
    {
      de: "Gestern **warteten** wir eine halbe Stunde auf den Bus.",
      ar: "بالأمس انتظرنا الحافلة لمدة نصف ساعة.",
      highlight: "warteten",
      audio: true,
      note: "warten مع wir ← wart-eten"
    },
    {
      de: "Er **kaufte** gestern im Supermarkt viele Lebensmittel **ein**.",
      ar: "هو اشترى بالأمس الكثير من المواد الغذائية من السوبرماركت.",
      highlight: "kaufte ... ein",
      audio: true,
      note: "فعل منفصل einkaufen: kaufte ثانياً والبادئة ein في النهاية"
    },
    {
      de: "Die Lehrerin **erklärte** die Grammatik sehr deutlich.",
      ar: "شرحت المعلمة القواعد بوضوح شديد.",
      highlight: "erklärte",
      audio: true,
      note: "erklären فعل منتظم غير منفصل ← erklärte مع sie"
    },
    {
      de: "Das neue Smartphone **kostete** damals 800 Euro.",
      ar: "كان الهاتف الذكي الجديد يكلف حينها 800 يورو.",
      highlight: "kostete",
      audio: true,
      note: "kosten ينتهي بـ t ← kostet-e مع المحايد das Smartphone"
    },
    {
      de: "Früher **spielten** die Kinder oft auf der Straße.",
      ar: "في السابق كان الأطفال يلعبون كثيراً في الشارع.",
      highlight: "spielten",
      audio: true,
      note: "spielen مع الجمع die Kinder (sie) ← spielten"
    },
    {
      de: "Der Schüler **antwortete** schnell auf die Frage.",
      ar: "أجاب الطالب بسرعة عن السؤال.",
      highlight: "antwortete",
      audio: true,
      note: "antworten ينتهي بـ t ← antwortete"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "فرّق بين المضارع والماضي مع (wir): لاحظ أن الفرق حرف واحد فقط وهو **-t-**! جملة *Wir lernen* تعني (نحن نتعلم الآن)، بينما *Wir lern**t**en* تعني (تعلمنا في الماضي). هذا الحرف الصغير يغير الزمن بالكامل!",
    "تذكر دائماً أن تصريف (ich) يطابق تماماً تصريف (er/sie/es). في المضارع نقول: *ich lerne* ولكن *er lernt*. أما في Präteritum فكلاهما يأخذ **-te**: *ich lernte* و *er lernte*.",
    "الخطأ الشائع مع الأفعال المنتهية بـ t/d: نسيان حرف e الصوتي والقول: *er arbeit-te*! هذا غير صحيح ولا يمكن نطقه، بل يجب وضع e فاصلة: *er arbeit**e**te*."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "قاعدة الأفعال المنتظمة: جذر الفعل + (-te, -test, -te, -ten, -tet, -ten).",
    "تصريف المتكلم (ich) والغائب المفرد (er/sie/es) متطابقان دائماً وينتهيان بـ -te.",
    "إذا انتهى الجذر بـ -t أو -d: نضيف حرف e صوتي قبل اللواحق (arbeitete, wartete).",
    "مع الأفعال المنفصلة: يُصرّف الفعل في المركز 2 وتذهب البادئة لآخر الجملة (kaufte ... ein).",
    "حرف -t- في منتصف الفعل هو العلامة المميزة للماضي البسيط في الأفعال الضعيفة."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "lernen", plural: "lernte, hat gelernt", ar: "يتعلم / يدرس", article: "", example: "Er lernte fleißig für die Prüfung." },
    { de: "arbeiten", plural: "arbeitete, hat gearbeitet", ar: "يعمل", article: "", example: "Sie arbeitete gestern bis spät in die Nacht." },
    { de: "warten", plural: "wartete, hat gewartet", ar: "ينتظر", article: "", example: "Ich wartete lange auf den Zug." },
    { de: "einkaufen", plural: "kaufte ein, hat eingekauft", ar: "يتسوق", article: "", example: "Am Samstag kaufte er im Markt ein." },
    { de: "erklären", plural: "erklärte, hat erklärt", ar: "يشرح / يوضح", article: "", example: "Der Lehrer erklärte die neue Regel." },
    { de: "wohnen", plural: "wohnte, hat gewohnt", ar: "يسكن / يقيم", article: "", example: "Vor zehn Jahren wohnte ich in Köln." },
    { de: "antworten", plural: "antwortete, hat geantwortet", ar: "يجيب / يرد", article: "", example: "Sie antwortete nicht auf meine Nachricht." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Gestern ___ ich den ganzen Nachmittag Deutsch. (lernen)",
      sentence: "Gestern ___ ich den ganzen Nachmittag Deutsch.",
      options: ["lernte", "lernest", "lerntet", "lernen"],
      correct: 0,
      answer: 0,
      explanation: "تصريف الفعل المنتظم lernen في الماضي مع الضمير ich هو: lernte."
    },
    {
      type: "fill-blank",
      question: "Mein Vater ___ viele Jahre bei BMW. (arbeiten im Präteritum)",
      sentence: "Mein Vater ___ viele Jahre bei BMW.",
      answer: "arbeitete",
      accept: ["arbeitete"],
      explanation: "جذر arbeiten ينتهي بـ t، فنضيف e صوتية قبل اللاحقة: arbeitete."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (هي فتحت النافذة)",
      words: ["das", "Sie", "machte", "Fenster", "auf", "."],
      correct: "Sie machte das Fenster auf .",
      answer: "Sie machte das Fenster auf .",
      accept: ["Sie machte das Fenster auf .", "Sie machte das Fenster auf"],
      explanation: "الفاعل (Sie) + الفعل في الماضي ثانياً (machte) + المفعول به (das Fenster) + البادئة في النهاية (auf)."
    },
    {
      type: "multiple-choice",
      question: "Wir ___ gestern über zwanzig Minuten auf dich! (warten)",
      sentence: "Wir ___ gestern über zwanzig Minuten auf dich!",
      options: ["warteten", "wartet", "wartten", "gewartet"],
      correct: 0,
      answer: 0,
      explanation: "فعل warten مع الفاعل wir في Präteritum يضاف له e صوتية تصبح: warteten."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Er arbeitte gestern bis 22 Uhr.)",
      sentence: "Er arbeitte gestern bis 22 Uhr.",
      text: "Er arbeitte gestern bis 22 Uhr.",
      corrected: "Er arbeitete gestern bis 22 Uhr.",
      answer: "Er arbeitete gestern bis 22 Uhr.",
      accept: ["Er arbeitete gestern bis 22 Uhr.", "Er arbeitete gestern bis 22 Uhr"],
      explanation: "الأفعال المنتهية بـ t تحتاج إلى e صوتية قبل لاحقة الماضي: arbeitete."
    },
    {
      type: "match",
      question: "طابق كل فعل في المصدر مع تصريفه في Präteritum مع ضمير er:",
      pairs: [
        { left: "lernen (يتعلم)", right: "er lernte" },
        { left: "arbeiten (يعمل)", right: "er arbeitete" },
        { left: "kaufen (يشتري)", right: "er kaufte" },
        { left: "antworten (يجيب)", right: "er antwortete" }
      ],
      explanation: "تصريف الأفعال المنتظمة مع الغائب المفرد er في الماضي البسيط."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (هو اشترى بالأمس سيارة جديدة.)",
      text: "هو اشترى بالأمس سيارة جديدة.",
      from: "هو اشترى بالأمس سيارة جديدة.",
      answer: "Er kaufte gestern ein neues Auto.",
      accept: ["Er kaufte gestern ein neues Auto.", "Er kaufte gestern ein neues Auto", "Gestern kaufte er ein neues Auto."],
      explanation: "kaufen فعل منتظم، وماضيه مع er هو kaufte."
    },
    {
      type: "fill-blank",
      question: "Früher ___ wir in einem kleinen Haus auf dem Land. (wohnen im Präteritum)",
      sentence: "Früher ___ wir in einem kleinen Haus auf dem Land.",
      answer: "wohnten",
      accept: ["wohnten"],
      explanation: "تصريف wohnen مع الفاعل wir في الماضي هو: wohnten."
    },
    {
      type: "multiple-choice",
      question: "___ du gestern mit deinen Eltern? (telefonieren im Präteritum)",
      sentence: "___ du gestern mit deinen Eltern?",
      options: ["Telefoniertest", "Telefonierte", "Telefonierten", "Telefonierst"],
      correct: 0,
      answer: 0,
      explanation: "مع الضمير du تكون لاحقة الماضي المنتظم هي -test: Telefoniertest du?"
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Gestern der Lehrer erklärte die Grammatik.)",
      sentence: "Gestern der Lehrer erklärte die Grammatik.",
      text: "Gestern der Lehrer erklärte die Grammatik.",
      corrected: "Gestern erklärte der Lehrer die Grammatik.",
      answer: "Gestern erklärte der Lehrer die Grammatik.",
      accept: ["Gestern erklärte der Lehrer die Grammatik.", "Gestern erklärte der Lehrer die Grammatik"],
      explanation: "الفعل المصرّف (erklärte) يجب أن يحتل الموقع الثاني مباشرة بعد الظرف Gestern."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Er ___ die Tür langsam ___. (aufmachen im Präteritum)",
      options: ["machte ... auf", "machte ... an", "aufmacht ... -", "machtet ... auf"],
      correct: 0,
      answer: 0,
      explanation: "فعل aufmachen منفصل، في الماضي نقول: machte ... auf."
    },
    {
      type: "multiple-choice",
      question: "Die Reparatur ___ damals sehr viel Geld. (kosten im Präteritum)",
      options: ["kostete", "kostte", "kosteten", "gekostet"],
      correct: 0,
      answer: 0,
      explanation: "kosten ينتهي بـ t فيأخذ e صوتية تصبح: kostete."
    },
    {
      type: "multiple-choice",
      question: "Was ___ ihr am Wochenende? (machen im Präteritum)",
      options: ["machtet", "machten", "machtest", "machte"],
      correct: 0,
      answer: 0,
      explanation: "مع الضمير ihr (أنتم) تكون لاحقة الماضي المنتظم هي -tet: machtet ihr?"
    },
    {
      type: "multiple-choice",
      question: "Der Arzt ___ dem Patienten geduldig zu. (zuhören im Präteritum)",
      options: ["hörte", "gehört", "hörtest", "hören"],
      correct: 0,
      answer: 0,
      explanation: "zuhören فعل منتظم، وتصريفه مع der Arzt (er) هو: hörte ... zu."
    },
    {
      type: "multiple-choice",
      question: "Vor zwei Jahren ___ meine Familie nach Berlin. (reisen im Präteritum)",
      options: ["reiste", "reist", "gereist", "reistest"],
      correct: 0,
      answer: 0,
      explanation: "meine Familie تعامل معاملة المفرد الغائب (sie = هي)، فتأخذ: reiste."
    }
  ]
};
window.lessons = window.LESSONS;
