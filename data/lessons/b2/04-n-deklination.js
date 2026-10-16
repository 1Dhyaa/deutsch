// data/lessons/b2/04-n-deklination.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["b2-1-04"] = {
  id: "b2-1-04",
  level: "b2-1",
  order: 4,
  slug: "n-deklination",
  title: {
    de: "Die N-Deklination (Schwache Nomen)",
    ar: "الأسماء الضعيفة وإعراب النون (Die N-Deklination)"
  },
  tags: ["b2", "n-deklination", "nomen", "grammatik"],

  goal: "التمكن من تحديد الأسماء المذكرة الضعيفة (N-Deklination) وإعرابها بإضافة -(e)n في حالات النصب والجر والإضافة، وتجنب الخطأ الشائع في امتحانات B2.",

  explanation: [
    {
      type: "text",
      content: "تُسمى مجموعة معينة من الأسماء المذكرة (Maskulina) بـ **الأسماء الضعيفة (Schwache Nomen / N-Deklination)**. هذه الأسماء تأخذ اللاحقة **-(e)n** في جميع الحالات الإعرابية (Akkusativ, Dativ, Genitiv) في صيغة المفرد، وتبقى بدونها فقط في حالة الرفع (Nominativ)!"
    },
    {
      type: "table",
      headers: ["المجموعة / النهاية", "أمثلة شائعة", "المفرد المرفوع (Nom)", "المفرد المنصوب/المجرور (Akk/Dat/Gen)"],
      rows: [
        ["مذكر ينتهي بـ -e (أشخاص/جنسيات)", "der Kollege, der Kunde, der Junge, der Franzose", "der Kollege", "den/dem/des **Kollegen**"],
        ["مذكر ينتهي بـ -ent / -ant", "der Student, der Assistent, der Praktikant", "der Student", "den/dem/des **Studenten**"],
        ["مذكر ينتهي بـ -ist / -oge / -at", "der Polizist, der Biologe, der Diplomat", "der Polizist", "den/dem/des **Polizisten**"],
        ["أسماء مفرطة الأهمية من أصل جرماني", "der Herr, der Mensch, der Nachbar, der Bär", "der Mensch", "den/dem/des **Menschen**"],
        ["استثناءات مميزة تأخذ -(e)ns في Genitiv", "der Name, der Gedanke, der Wille, der Buchstabe", "der Name", "Akk/Dat: den/dem **Namen**, Gen: des **Namens**"]
      ]
    },
    {
      type: "rule",
      content: "حالة خاصة (der Herr): هذا الاسم يأخذ **-n** في المفرد: *Ich spreche mit Herrn Schmidt*، ولكنه يأخذ **-en** في الجمع: *Sehr geehrte Damen und Herren*."
    },
    {
      type: "rule",
      content: "الاسم المحايد الوحيد: الاسم المحايد الوحيد الذي يتبع تصريف N-Deklination جزئياً هو **das Herz**: (Nom/Akk: das Herz, Dat: dem Herzen, Gen: des Herzens)."
    }
  ],

  examples: [
    {
      de: "Ich habe gestern ein langes Gespräch mit meinem neuen **Kollegen** geführt.",
      ar: "أجريت بالأمس محادثة طويلة مع زميلي الجديد.",
      highlight: "Kollegen",
      note: "Dativ: mit dem Kollegen"
    },
    {
      de: "Der Arzt untersucht den verletzten **Patienten** sehr gründlich.",
      ar: "يفحص الطبيب المريض المصاب بدقة متناهية.",
      highlight: "Patienten",
      note: "Akkusativ: den Patienten"
    },
    {
      de: "Kennen Sie bereits den Namen dieses berühmten **Architekten**?",
      ar: "هل تعرف بالفعل اسم هذا المهندس المعماري الشهير؟",
      highlight: "Architekten",
      note: "Genitiv: des Architekten (بدون -s!)"
    },
    {
      de: "Bitte richten Sie **Herrn** Meyer meine besten Grüße aus.",
      ar: "من فضلك أبلغ السيد ماير أطيب تحياتي.",
      highlight: "Herrn",
      note: "Dativ: Herrn مع اسم العلم"
    },
    {
      de: "Die Meinungsfreiheit ist das grundlegende Recht jedes einzelnen **Menschen**.",
      ar: "حرية التعبير هي الحق الأساسي لكل إنسان بمفرده.",
      highlight: "Menschen",
      note: "Genitiv: des Menschen"
    },
    {
      de: "Aufgrund eines plötzlichen **Gedankens** änderte er seinen Plan.",
      ar: "بسبب فكرة مباغتة، غيّر خطته.",
      highlight: "Gedankens",
      note: "استثناء: يأخذ -ns في Genitiv"
    },
    {
      de: "Die Polizei befragte einen wichtigen **Zeugen** des Vorfalls.",
      ar: "استجوبت الشرطة شاهداً مهماً على الحادث.",
      highlight: "Zeugen",
      note: "Akkusativ: einen Zeugen"
    },
    {
      de: "Das liegt mir wirklich sehr am **Herzen**.",
      ar: "هذا الأمر يعز عليّ كثيراً ومن صميم قلبي.",
      highlight: "Herzen",
      note: "Dativ: an dem Herzen"
    }
  ],

  arabicTips: [
    "الخطأ الأكثر شيوعاً عند كتابة الخطابات الرسمية في امتحان B2: كتابة *Sehr geehrter Herr Schmidt* بدون مشاكل، لكن عند الإشارة إليه في الجملة ينسى الطالب إضافة n: الصحيح دائماً هو *Ich danke Herrn Schmidt* أو *Für Herrn Schmidt*.",
    "تذكر أن إضافة -(e)n هنا للمفرد، وليست علامة جمع! إذا قلت *Ich sehe den Studenten* فأنت تتحدث عن طالب واحد مفعول به منصوب.",
    "في حالة المضاف إليه (Genitiv)، هذه الأسماء لا تأخذ حرف s إضافي إلا في مجموعة محددة (des Namens, des Gedankens, des Glaubens, des Willens). أما العادي فيأخذ فقط n: *des Kunden, des Experten*."
  ],

  summary: [
    "الأسماء الضعيفة مذكرة فقط (باستثناء das Herz).",
    "تأخذ -(e)n في المفرد في Akkusativ و Dativ و Genitiv.",
    "في حالة الرفع (Nominativ) فقط تبقى في شكلها الأساسي بدون n.",
    "der Herr تصبح Herrn في المفرد المنصوب/المجرور، و Herren في الجمع.",
    "مجموعة der Name / der Gedanke تأخذ -(e)ns في حالة Genitiv."
  ],

  vocabulary: [
    { de: "der Kollege", plural: "die Kollegen", ar: "الزميل في العمل", article: "der", example: "Ich verstehe mich hervorragend mit meinem Kollegen." },
    { de: "der Kunde", plural: "die Kunden", ar: "الزبون / العميل", article: "der", example: "Die Zufriedenheit des Kunden steht an erster Stelle." },
    { de: "der Zeuge", plural: "die Zeugen", ar: "الشاهد", article: "der", example: "Der Zeuge machte eine genaue Aussage vor Gericht." },
    { de: "der Experte", plural: "die Experten", ar: "الخبير المتخصص", article: "der", example: "Wir haben den Rat eines unabhängigen Experten eingeholt." },
    { de: "der Praktikant", plural: "die Praktikanten", ar: "المتدرب المهني", article: "der", example: "Der Praktikant sammelte wertvolle Berufserfahrung." },
    { de: "der Nachbar", plural: "die Nachbarn", ar: "الجار", article: "der", example: "Ich habe meinem Nachbarn beim Umzug geholfen." }
  ],

  exercises: [
    {
      type: "fill-blank",
      sentence: "Ich möchte mich bei ___ (der Herr) Schmidt persönlich bedanken.",
      correct: "Herrn",
      accept: ["Herrn"],
      explanation: "اسم der Herr في حالة الجر Dativ يأخذ اللاحقة -n ليصبح Herrn."
    },
    {
      type: "multiple-choice",
      question: "Welche Form ist im Akkusativ Singular korrekt?",
      options: [
        "Ich habe den neuen Kollegen begrüßt.",
        "Ich habe den neuen Kollege begrüßt.",
        "Ich habe der neue Kollege begrüßt.",
        "Ich habe den neuen Kolleges begrüßt."
      ],
      answer: 0,
      explanation: "der Kollege اسم ضعيف ينتهي بـ -e ويأخذ -n في Akkusativ المفرد."
    },
    {
      type: "word-order",
      words: ["Die", "Polizei", "sucht", "nach", "einem", "wichtigen", "Zeugen", "."],
      correct: "Die Polizei sucht nach einem wichtigen Zeugen .",
      explanation: "nach يفرض حالة Dativ، واسم der Zeuge يأخذ اللاحقة -n."
    },
    {
      type: "match",
      pairs: [
        { de: "mit dem Patienten", ar: "مع المريض (Dativ Sg.)" },
        { de: "des Architekten", ar: "الخاص بالمهندس المعماري (Genitiv Sg.)" },
        { de: "den Nachbarn fragen", ar: "يسأل الجار (Akkusativ Sg.)" },
        { de: "von ganzem Herzen", ar: "من كل قلبه (Dativ n.)" }
      ],
      explanation: "اربط التراكيب بحالتها النحوية الصحيحة."
    },
    {
      type: "translate",
      source: "هل تعرف اسم الخبير؟",
      target: "Kennst du den Namen des Experten?",
      accept: [
        "Kennen Sie den Namen des Experten?",
        "Kennen Sie den Namen von dem Experten?"
      ],
      explanation: "اسم der Name في Akkusativ يصبح den Namen، واسم der Experte في Genitiv يصبح des Experten."
    },
    {
      type: "error-correction",
      sentence: "Ich habe mit der Student über das Thema gesprochen.",
      correct: "Ich habe mit dem Studenten über das Thema gesprochen.",
      explanation: "mit تتطلب Dativ (dem)، وder Student اسم ضعيف يأخذ -en في Dativ المفرد (Studenten)."
    },
    {
      type: "fill-blank",
      sentence: "Die Meinung dieses renommierten ___ (der Wissenschaftler / der Biologe) ist gefragt.",
      correct: "Biologen",
      accept: ["Biologen"],
      explanation: "der Biologe ينتهي بـ -oge وهو اسم ضعيف يأخذ -n في Genitiv المفرد."
    },
    {
      type: "multiple-choice",
      question: "Welches Wort gehört NICHT zur N-Deklination?",
      options: [
        "der Lehrer",
        "der Polizist",
        "der Praktikant",
        "der Elefant"
      ],
      answer: 0,
      explanation: "der Lehrer اسم مذكر عادي (des Lehrers, den Lehrer). البقية أسماء ضعيفة تتبع N-Deklination."
    },
    {
      type: "translate",
      source: "سلمت الوثائق إلى السيد براون.",
      target: "Ich habe die Dokumente Herrn Braun übergeben.",
      accept: [
        "Ich habe die Dokumente an Herrn Braun übergeben.",
        "Ich übergab die Unterlagen Herrn Braun."
      ],
      explanation: "في Dativ مع اسم العلم نستخدم دائماً Herrn."
    },
    {
      type: "multiple-choice",
      question: "Wie lautet der Genitiv von »der Gedanke«?",
      options: [
        "des Gedankens",
        "des Gedanken",
        "des Gedankenes",
        "des Gedanken-s"
      ],
      answer: 0,
      explanation: "der Gedanke من المجموعة الاستثنائية التي تجمع بين n و s في Genitiv: des Gedankens."
    }
  ],

  quiz: [
    {
      question: "Welcher Satz ist grammatisch VÖLLIG KORREKT?",
      options: [
        "Wir danken Herrn Müller für seine Unterstützung.",
        "Wir danken Herr Müller für seine Unterstützung.",
        "Wir danken Herr Müllern für seine Unterstützung.",
        "Wir danken Herrn Müllers für seine Unterstützung."
      ],
      answer: 0,
      explanation: "بعد danken يأتي Dativ، وصيغة der Herr في المفرد المجرور هي دائماً Herrn."
    },
    {
      question: "Ergänze korrekt: »Die Forderungen des _____ wurden erfüllt.«",
      options: ["Kunden", "Kundes", "Kunde", "Kundens"],
      answer: 0,
      explanation: "der Kunde اسم مذكر ضعيف، وفي Genitiv المفرد يأخذ -n فقط: des Kunden."
    },
    {
      question: "Wie dekliniert man »das Herz« im Dativ?",
      options: ["dem Herzen", "dem Herz", "dem Herzes", "dem Herzens"],
      answer: 0,
      explanation: "في Dativ يأخذ das Herz اللاحقة -en: dem Herzen (wie in: am Herzen liegen)."
    },
    {
      question: "Warum heißt es: »Ich habe den Studenten gesehen« (obwohl es nur EIN Student ist)?",
      options: [
        "Weil »der Student« ein schwaches Nomen ist und im Akkusativ ein -(e)n erhält.",
        "Weil es sich hier um einen Plural handelt.",
        "Weil es ein Druckfehler ist.",
        "Weil alle Wörter auf -ent im Akkusativ weiblich werden."
      ],
      answer: 0,
      explanation: "الأسماء الضعيفة تنتهي بـ -(e)n في المفرد المنصوب، ولا يعني ذلك الجمع."
    },
    {
      question: "Welche Endung hat der Genitiv von »der Name«?",
      options: ["-ns (des Namens)", "-n (des Namen)", "-es (des Names)", "-s (des Nams)"],
      answer: 0,
      explanation: "der Name يأخذ -ns في حالة المضاف إليه Genitiv: des Namens."
    }
  ]
};
