// data/lessons/b2/06-genitiv-praepositionen.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["b2-2-01"] = {
  id: "b2-2-01",
  level: "b2-2",
  order: 6,
  slug: "genitiv-praepositionen",
  title: {
    de: "Präpositionen mit Genitiv (B2-Niveau)",
    ar: "حروف الجر المتقدمة مع حالة الإضافة (Genitiv) في المستوى B2"
  },
  tags: ["b2", "praepositionen", "genitiv", "grammatik"],

  goal: "إتقان استخدام حروف الجر الرسمية الراقية التي تفرض حالة الإضافة (Genitiv) مثل: aufgrund, anlässlich, infolge, ungeachtet, zugunsten وغيرها، لصياغة نصوص رسمية وتقارير بامتياز في امتحان B2.",

  explanation: [
    {
      type: "text",
      content: "في المستوى B2، ترتفع لغة الخطاب من مجرد استخدام حروف الجر البسيطة إلى استخدام **حروف الجر الإدارية والأكاديمية الراقية**. هذه الحروف تفرض وجوباً حالة **المضاف إليه (Genitiv)** وتستخدم بكثافة في الصحافة والبيانات الرسمية وامتحان كتابة مقالات B2."
    },
    {
      type: "table",
      headers: ["حرف الجر", "المعنى الدقيق", "مثال توضيحي (B2)", "المعادل البسيط (A2/B1)"],
      rows: [
        ["aufgrund / auf Grund", "بسبب / بناءً على (سبب مباشر)", "**Aufgrund** des starken Schneefalls fiel der Flug aus.", "weil es stark geschneit hat"],
        ["anlässlich", "بمناسبة (حدث رسمي/احتفال)", "**Anlässlich** des Jubiläums gab es ein großes Fest.", "zu der Feier / weil es ein Fest gab"],
        ["infolge", "نتيجة لـ / في أعقاب (أثر سلبي غالباً)", "**Infolge** eines technischen Defekts stand die Bahn still.", "als Folge von dem Defekt"],
        ["ungeachtet", "بصرف النظر عن / بالرغم من", "**Ungeachtet** der Warnungen unternahm er die Wanderung.", "obwohl es Warnungen gab"],
        ["zugunsten / zu Gunsten", "لصالح / لمنفعة", "Er verzichtete **zugunsten** seines Kollegen auf die Beförderung.", "für seinen Kollegen"],
        ["anstelle / statt", "بدلاً من / عوضاً عن", "**Anstelle** einer Entschuldigung schwieg er beharrlich.", "anstatt sich zu entschuldigen"]
      ]
    },
    {
      type: "rule",
      content: "حالة الإضافة للمفرد المذكر والمحايد: تذكر دائماً إضافة **-(e)s** للاسم المذكر أو المحايد بعد هذه الحروف: *aufgrund des Wetter**s***، *infolge des Unfall**s***."
    },
    {
      type: "rule",
      content: "موقع zugunsten: يمكن أن يأتي هذا الحرف قبل الاسم المجرور بالإضافة أو بعده: *zugunsten der Kinder* أو *der Kinder zugunsten*."
    }
  ],

  examples: [
    {
      de: "**Aufgrund** einer plötzlichen Erkrankung des Dozenten fällt die Vorlesung heute aus.",
      ar: "نظراً لمرض مفاجئ للمحاضر، أُلغيت المحاضرة اليوم.",
      highlight: "Aufgrund einer plötzlichen Erkrankung",
      note: "Genitiv feminin (einer Erkrankung)"
    },
    {
      de: "**Anlässlich** des 50-jährigen Bestehens der Universität fand ein Festakt statt.",
      ar: "بمناسبة مرور 50 عاماً على تأسيس الجامعة، أقيم حفل رسمي مهيب.",
      highlight: "Anlässlich des ... Bestehens",
      note: "Genitiv neutrum (des Bestehens)"
    },
    {
      de: "**Infolge** der weltweiten Wirtschaftskrise stieg die Arbeitslosigkeit spürbar an.",
      ar: "نتيجة للأزمة الاقتصادية العالمية، ارتفعت نسبة البطالة بشكل ملحوظ.",
      highlight: "Infolge der ... Wirtschaftskrise",
      note: "دلالة سببية على أثر لاحق"
    },
    {
      de: "**Ungeachtet** aller Schwierigkeiten konnte der Zeitplan exakt eingehalten werden.",
      ar: "بصرف النظر عن جميع الصعوبات، أمكن الالتزام بالجدول الزمني بدقة.",
      highlight: "Ungeachtet aller Schwierigkeiten",
      note: "Genitiv plural (aller Schwierigkeiten)"
    },
    {
      de: "Die Spendengelder kommen vollumfänglich **zugunsten** notleidender Familien zum Einsatz.",
      ar: "تُستخدم أموال التبرعات بالكامل لصالح الأسر المحتاجة والمتضررة.",
      highlight: "zugunsten notleidender Familien",
      note: "Genitiv plural بدون أداة معرفة"
    },
    {
      de: "**Anstelle** des erkrankten Ministers hielt die Staatssekretärin die Eröffnungsrede.",
      ar: "بدلاً من الوزير المريض، ألقت وكيلة الوزارة الكلمة الافتتاحية.",
      highlight: "Anstelle des erkrankten Ministers",
      note: "N-Deklination: des Ministers (-s عادي)"
    },
    {
      de: "**Hinsichtlich** der Qualität des Produkts gab es keinerlei Beanstandungen.",
      ar: "فيما يتعلق بجودة المنتج، لم تكن هناك أي اعتراضات على الإطلاق.",
      highlight: "Hinsichtlich der Qualität",
      note: "hinsichtlich = بخصوص / فيما يخص"
    },
    {
      de: "**Während** des gesamten Aufenthalts in München fühlte ich mich sehr willkommen.",
      ar: "خلال فترة الإقامة بأكملها في ميونيخ شعرت بأنني مرحب بي للغاية.",
      highlight: "Während des gesamten Aufenthalts",
      note: "Genitiv maskulin (des Aufenthalts)"
    }
  ],

  arabicTips: [
    "في اللغة العربية اليومية نستخدم تعابير مثل 'عشان كذا' أو 'بسبب'. في كتابة B2، استبدل دائماً 'weil' بـ 'aufgrund + Genitiv' أو 'infolge + Genitiv' لتحصل فوراً على نص من الدرجة الرفيعة (Gehobene Sprache).",
    "انتبه: الكثير من المتعلمين يخلطون بين 'aufgrund' و 'trotz'. كلمة 'aufgrund' تشرح السبب الفعلي لحدوث الشيء، بينما 'ungeachtet' أو 'trotz' تشرح حدوث الشيء على الرغم من وجود مانع.",
    "تذكر: في حالة الجمع بدون أداة (Nullartikel)، تأخذ الصفة نهاية -er في Genitiv: *zugunsten arm**er** Kinder*."
  ],

  summary: [
    "جميع هذه الحروف تجر الاسم بحالة المضاف إليه (Genitiv).",
    "aufgrund = سبب رئيسي أو مبرر رسمي.",
    "infolge = نتيجة أو عاقبة حدث سابق.",
    "anlässlich = بمناسبة ذكرى أو احتفال.",
    "ungeachtet = بصرف النظر عن / على الرغم من وجود عائق.",
    "zugunsten = لمنفعة شخص أو جهة معينة."
  ],

  vocabulary: [
    { de: "der Festakt", plural: "die Festakte", ar: "المراسم الاحتفالية الرسمية", article: "der", example: "Zahlreiche Ehrengäste nahmen am Festakt teil." },
    { de: "das Jubiläum", plural: "die Jubiläen", ar: "اليوبيل / الذكرى السنوية", article: "das", example: "Das Unternehmen feiert sein 25-jähriges Jubiläum." },
    { de: "vollumfänglich", plural: "–", ar: "بالكامل / على نحو شامل", article: "", example: "Wir garantieren Ihnen vollumfängliche Unterstützung." },
    { de: "notleidend", plural: "–", ar: "محتاج / يعاني من العوز", article: "", example: "Die Organisation hilft notleidenden Menschen." },
    { de: "die Beanstandung", plural: "die Beanstandungen", ar: "الاعتراض / الشكوى / المأخذ", article: "die", example: "Es gab keine Beanstandungen bezüglich der Lieferung." },
    { de: "die Arbeitslosigkeit", plural: "–", ar: "البطالة", article: "die", example: "Die Arbeitslosigkeit ist in der Region gesunken." }
  ],

  exercises: [
    {
      type: "fill-blank",
      sentence: "___ (بسبب) des schlechten Wetters wurde das Fußballspiel abgesagt.",
      correct: "Aufgrund",
      accept: ["Aufgrund", "Wegen"],
      explanation: "aufgrund des schlechten Wetters تعني بسبب سوء الأحوال الجوية."
    },
    {
      type: "multiple-choice",
      question: "Welche Präposition passt am besten zu einem feierlichen Ereignis?",
      options: [
        "anlässlich (z. B. anlässlich des Jubiläums)",
        "infolge",
        "ungeachtet",
        "anstelle"
      ],
      answer: 0,
      explanation: "anlässlich تستخدم حصراً في سياق المناسبات الرسمية والاحتفالات والذكريات السنوية."
    },
    {
      type: "word-order",
      words: ["Infolge", "des", "technischen", "Defekts", "fiel", "der", "Strom", "aus", "."],
      correct: "Infolge des technischen Defekts fiel der Strom aus .",
      explanation: "تبدأ الجملة بشبه الجملة الإضافية (Infolge des technischen Defekts) يليها الفعل fiel في الموقع الثاني."
    },
    {
      type: "match",
      pairs: [
        { de: "aufgrund des Staus", ar: "بسبب الازدحام المروري" },
        { de: "anlässlich seines Geburtstags", ar: "بمناسبة عيد ميلاده" },
        { de: "ungeachtet des Verbots", ar: "بصرف النظر عن الحظر / رغم المنع" },
        { de: "zugunsten der Hilfsorganisation", ar: "لصالح منظمة الإغاثة" }
      ],
      explanation: "طابق حروف الجر المتقدمة بترجمتها الدقيقة."
    },
    {
      type: "translate",
      source: "بصرف النظر عن كل التحذيرات، واصل رحلته.",
      target: "Ungeachtet aller Warnungen setzte er seine Reise fort.",
      accept: [
        "Ungeachtet aller Warnungen hat er seine Reise fortgesetzt.",
        "Trotz aller Warnungen setzte er seine Reise fort."
      ],
      explanation: "ungeachtet aller Warnungen = بصرف النظر عن كافة التحذيرات."
    },
    {
      type: "error-correction",
      sentence: "Aufgrund dem dichten Nebel konnten die Flugzeuge nicht landen.",
      correct: "Aufgrund des dichten Nebels konnten die Flugzeuge nicht landen.",
      explanation: "aufgrund تتطلب حالة Genitiv (des dichten Nebels)، وليس Dativ."
    },
    {
      type: "fill-blank",
      sentence: "Er entschied sich ___ (لصالح) der schwächeren Bewerberin.",
      correct: "zugunsten",
      accept: ["zugunsten", "zu Gunsten"],
      explanation: "zugunsten تعني لصالح / في مصلحة."
    },
    {
      type: "multiple-choice",
      question: "Welcher Kasus folgt zwingend auf »infolge« im Standarddeutsch?",
      options: [
        "Genitiv (z. B. infolge eines Unfalls)",
        "Dativ",
        "Akkusativ",
        "Nominativ"
      ],
      answer: 0,
      explanation: "infolge تتطلب حالة الإضافة (Genitiv)."
    },
    {
      type: "translate",
      source: "بدلاً من الشكوى، قدم حلاً بنّاءً.",
      target: "Anstelle einer Beschwerde präsentierte er eine konstruktive Lösung.",
      accept: [
        "Statt einer Beschwerde präsentierte er eine konstruktive Lösung.",
        "Anstelle einer Klage bot er eine konstruktive Lösung an."
      ],
      explanation: "anstelle einer Beschwerde = بدلاً من تقديم شكوى."
    },
    {
      type: "multiple-choice",
      question: "Was bedeutet: »zugunsten der Umwelt«?",
      options: [
        "Für das Wohl und den Schutz der Umwelt.",
        "Gegen die Interessen der Umwelt.",
        "Weil die Umwelt zerstört ist.",
        "Trotz der Umweltschäden."
      ],
      answer: 0,
      explanation: "zugunsten تعني لمصلحة وفائدة الشيء."
    }
  ],

  quiz: [
    {
      question: "Welche Genitiv-Präposition passt: »_____ des 100-jährigen Firmenjubiläums fand eine Gala statt«?",
      options: ["Anlässlich", "Infolge", "Ungeachtet", "Zugunsten"],
      answer: 0,
      explanation: "Anlässlich تستخدم للتعبير عن المناسبات والاحتفالات الرسمية."
    },
    {
      question: "Ergänze grammatisch korrekt: »Infolge _____ (der schwere Unfall) war die Autobahn gesperrt.«",
      options: [
        "des schweren Unfalls",
        "dem schweren Unfall",
        "des schweren Unfall",
        "den schweren Unfalls"
      ],
      answer: 0,
      explanation: "اسم der Unfall مذكر، فيأخذ des + صفة تنتهي بـ -en + لاحقة -s في نهايته: des schweren Unfalls."
    },
    {
      question: "Was drückt »ungeachtet der Kritik« aus?",
      options: [
        "Obwohl Kritik geäußert wurde (Konzessiv).",
        "Weil Kritik geäußert wurde (Kausal).",
        "Bevor Kritik geäußert wurde (Temporal).",
        "Damit keine Kritik entsteht (Final)."
      ],
      answer: 0,
      explanation: "ungeachtet تعبر عن التنازل ومواصلة الفعل على الرغم من وجود عائق أو انتقاد."
    },
    {
      question: "Welcher Satz ist grammatisch RICHTIG?",
      options: [
        "Aufgrund der aktuellen Lage müssen wir sparen.",
        "Aufgrund die aktuelle Lage müssen wir sparen.",
        "Aufgrund von die aktuelle Lage müssen wir sparen.",
        "Aufgrund der aktuellen Lage wir müssen sparen."
      ],
      answer: 0,
      explanation: "الجملة الأولى صحيحة تماماً: Genitiv مؤنث (der aktuellen Lage) مع ترتيب الفعل müssen في الموقع الثاني."
    },
    {
      question: "Wie lässt sich »Er trank Tee anstelle von Kaffee« eleganter im B2-Genitiv ausdrücken?",
      options: [
        "Er trank Tee anstelle des Kaffees.",
        "Er trank Tee anstelle dem Kaffee.",
        "Er trank Tee statt mit Kaffee.",
        "Er trank Tee anstelle durch Kaffee."
      ],
      answer: 0,
      explanation: "anstelle des Kaffees هي الصيغة الفصحى الأنيقة في Genitiv بدون استخدام von."
    }
  ]
};
