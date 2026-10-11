// data/lessons/a2-1/28-verben-praepositionen.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-28"] = {
  id: "a2-1-28",
  level: "a2-1",
  order: 28,
  slug: "verben-praepositionen",
  title: {
    de: "Verben mit festen Präpositionen",
    ar: "الأفعال المقترنة بحروف جر ثابتة (Akkusativ & Dativ)"
  },
  tags: ["grammatik", "verben", "praepositionen", "akkusativ", "dativ", "fragewoerter", "a2"],

  // 1. الهدف من الدرس
  goal: "ستتعلم في هذا الدرس إتقان أشهر الأفعال الألمانية المرتبطة بحروف جر ثابتة مع حالتي Akkusativ و Dativ، وكيفية صياغة الأسئلة بدقة باستخدام الأدوات الضميرية (Worauf? للأشياء مقابل Auf wen? للأشخاص).",

  // 2. الشرح المبسط مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية، تقترن العديد من الأفعال بـ **حرف جر ثابت ومحدد (feste Präposition)** لا يمكن ترجمته حرفياً أو تغييره، وهذا الحرف يحدد إعراب الاسم أو الضمير الذي يليه: إما في حالة **Akkusativ** أو حالة **Dativ**."
    },
    {
      type: "table",
      headers: ["الفعل وحرف الجر", "الحالة الإعرابية", "المعنى بالعربية", "مثال توضيحي"],
      rows: [
        ["warten auf", "+ Akkusativ", "ينتظر (شخصاً أو شيئاً)", "Ich warte **auf den Bus**."],
        ["sich freuen auf", "+ Akkusativ", "يتطلع بشوق لـ (شيء مستقبلي قادم)", "Wir freuen uns **auf die Ferien**."],
        ["sich freuen über", "+ Akkusativ", "يفرح بـ / يسعد بـ (شيء حالي أو ماضٍ)", "Er freut sich **über das Geschenk**."],
        ["denken an", "+ Akkusativ", "يفكر في / يتذكر", "Ich denke oft **an meine Familie**."],
        ["sich interessieren für", "+ Akkusativ", "يهتم بـ", "Sie interessiert sich **für Kunst**."],
        ["danken für", "+ Akkusativ", "يشكر على", "Ich danke dir **für die Hilfe**."],
        ["sprechen über", "+ Akkusativ", "يتحدث عن (موضوع)", "Sie sprechen **über den Plan**."],
        ["sich ärgern über", "+ Akkusativ", "ينزعج / يغضب من", "Er ärgert sich **über den Stau**."]
      ]
    },
    {
      type: "table",
      headers: ["الفعل وحرف الجر", "الحالة الإعرابية", "المعنى بالعربية", "مثال توضيحي"],
      rows: [
        ["sprechen mit", "+ Dativ", "يتحدث مع (شخص)", "Ich spreche **mit dem Chef**."],
        ["träumen von", "+ Dativ", "يحلم بـ", "Er träumt **von einem neuen Auto**."],
        ["teilnehmen an", "+ Dativ", "يشارك في (دورة/فعالية)", "Sie nimmt **am Kurs** teil."],
        ["gratulieren zu", "+ Dativ", "يهنئ بـ / بمناسبة", "Wir gratulieren dir **zum Geburtstag**."],
        ["helfen bei", "+ Dativ", "يساعد في", "Kannst du mir **beim Umzug** helfen?"],
        ["gehören zu", "+ Dativ", "ينتمي إلى / جزء من", "Das gehört **zu meinen Aufgaben**."]
      ]
    },
    {
      type: "rule",
      content: "قاعدة السؤال الذهبية (Pronominaladverbien):<br>1. **عند السؤال عن الأشياء أو الأفكار (Sachen / Abstrakta)**: ندمج كلمة **Wo-** مع حرف الجر. وإذا بدأ حرف الجر بحرف متحرك (a, e, i, o, u) نضيف حرف **-r-** صوتياً للربط:<br>• warten auf ← **Worauf** wartest du? (على ماذا تنتظر؟)<br>• denken an ← **Woran** denkst du? (فيم تفكر؟)<br>• träumen von ← **Wovon** träumst du? (بماذا تحلم؟)<br>2. **عند السؤال عن الأشخاص (Personen)**: نضع حرف الجر أولاً، يليه ضمير الاستفهام المناسب للحالة الإعرابية (Wen لـ Akkusativ / Wem لـ Dativ):<br>• warten auf (+Akk) ← **Auf wen** wartest du? (من تنتظر؟)<br>• sprechen mit (+Dat) ← **Mit wem** sprichst du? (مع من تتحدث؟)"
    }
  ],

  // 3. الأمثلة (10 أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Ich **warte seit einer Stunde auf den Bus**.",
      ar: "أنا أنتظر الحافلة منذ ساعة.",
      highlight: "warte ... auf den Bus",
      audio: true,
      note: "warten auf + Akkusativ: der Bus يصبح den Bus"
    },
    {
      de: "**Auf wen** wartest du hier? — Auf meine Schwester.",
      ar: "من تنتظر هنا؟ — أنتظر أختي.",
      highlight: "Auf wen",
      audio: true,
      note: "سؤال عن شخص مع حرف جر يأخذ Akkusativ ← Auf wen?"
    },
    {
      de: "Die Kinder **freuen sich riesig auf die Sommerferien**.",
      ar: "الأطفال يتطلعون بفرح عظيم إلى العطلة الصيفية.",
      highlight: "freuen sich ... auf die Sommerferien",
      audio: true,
      note: "sich freuen auf + Akkusativ لحدث مستقبلي قادم بشوق"
    },
    {
      de: "Ich **habe mich sehr über deinen Besuch gefreut**.",
      ar: "لقد فرحتُ كثيراً بزيارتك لي.",
      highlight: "über deinen Besuch gefreut",
      audio: true,
      note: "sich freuen über + Akkusativ لأمر وقع بالفعل أو حاضر"
    },
    {
      de: "**Woran** denkst du gerade? — An meine morgige Prüfung.",
      ar: "فيمَ تفكر الآن؟ — في امتحاني غداً.",
      highlight: "Woran denkst du",
      audio: true,
      note: "denken an + Akk للسؤال عن شيء غير عاقل ← Wo + r + an = Woran?"
    },
    {
      de: "Er **spricht mit seinem Arzt über die Schmerzen**.",
      ar: "هو يتحدث مع طبيبه عن الآلام.",
      highlight: "spricht mit seinem Arzt über die Schmerzen",
      audio: true,
      note: "mit + Dativ للشخص (dem Arzt) و über + Akkusativ للموضوع"
    },
    {
      de: "Sie **träumt von einer langen Reise** durch Europa.",
      ar: "هي تحلم برحلة طويلة عبر أوروبا.",
      highlight: "träumt von einer langen Reise",
      audio: true,
      note: "träumen von + Dativ: eine Reise تصبح einer Reise"
    },
    {
      de: "Alle Schüler **nehmen an dem Deutschkurs teil**.",
      ar: "جميع الطلاب يشاركون في دورة اللغة الألمانية.",
      highlight: "nehmen an dem Deutschkurs teil",
      audio: true,
      note: "teilnehmen an + Dativ: an dem Kurs = am Kurs"
    },
    {
      de: "Wir **gratulieren dir herzlich zum Geburtstag**!",
      ar: "نهنئك من صميم القلب بمناسبة عيد ميلادك!",
      highlight: "gratulieren dir ... zum Geburtstag",
      audio: true,
      note: "gratulieren + Dativ للشخص (dir) + zu (+Dat) للمناسبة: zu + dem = zum"
    },
    {
      de: "Ich **danke Ihnen sehr für Ihre Unterstützung**.",
      ar: "أشكر حضرتك كثيراً على دعمك لي.",
      highlight: "danke Ihnen ... für Ihre Unterstützung",
      audio: true,
      note: "danken + Dativ للشخص (Ihnen) + für (+Akk) للسبب"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "لا تترجم حروف الجر ترجمة حرفية من العربية أبداً! في العربية نقول 'أفكر في كذا'، لكن في الألمانية الفعل هو 'denken an' وليس 'denken in'. ونقول 'أنتظر الحافلة' مباشرة بدون حرف جر، بينما بالألمانية لا بد من 'warten auf'.",
    "الفرق الحاسم بين (Worauf) و (Auf wen): إذا كان الشيء غير عاقل نسأل بـ Wo(r)+حرف الجر (*Worauf wartest du? على الباص*). أما إذا كان شخصاً عاقلاً نضع حرف الجر أولاً (*Auf wen wartest du? على أحمد*). الخلط بينهما خطأ فادح في الامتحانات!",
    "فرّق دائماً بين 'sich freuen auf' و 'sich freuen über': كلاهما يأخذ Akkusativ، لكن الأولى موجهة للمستقبل والتطلع لشيء لم يحدث بعد، والثانية للتعبير عن السرور بشيء حاصل الآن أو هدية استلمتها بالفعل."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "الأفعال مع Akkusativ الشهيرة: warten auf, sich freuen auf/über, denken an, danken für, sich interessieren für.",
    "الأفعال مع Dativ الشهيرة: sprechen mit, träumen von, teilnehmen an, gratulieren zu, helfen bei.",
    "للسؤال عن الأشياء: Wo + (r) + حرف الجر ← Worauf, Woran, Wovon, Wofür.",
    "للسؤال عن الأشخاص: حرف الجر + أداة الاستفهام ← Auf wen? (Akk) أو Mit wem? (Dat).",
    "احفظ كل فعل مع حرف جره وحالته الإعرابية ككتلة واحدة غير قابلة للتجزئة."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "warten auf (+Akk)", plural: "wartete, hat gewartet", ar: "ينتظر", article: "", example: "Ich warte auf meine Freundin." },
    { de: "sich freuen auf (+Akk)", plural: "freute sich, hat sich gefreut", ar: "يتطلع بشوق لـ (مستقبل)", article: "", example: "Wir freuen uns auf das Wochenende." },
    { de: "sich freuen über (+Akk)", plural: "freute sich, hat sich gefreut", ar: "يفرح بـ / يسعد بـ (حاضر أو ماضٍ)", article: "", example: "Er freut sich über die Blumen." },
    { de: "denken an (+Akk)", plural: "dachte, hat gedacht", ar: "يفكر في / يتذكر", article: "", example: "Ich denke oft an meinen Urlaub." },
    { de: "träumen von (+Dat)", plural: "träumte, hat geträumt", ar: "يحلم بـ", article: "", example: "Sie träumt von einem eigenen Haus." },
    { de: "teilnehmen an (+Dat)", plural: "nahm teil, hat teilgenommen", ar: "يشارك في", article: "", example: "Er nimmt am Workshop teil." },
    { de: "gratulieren zu (+Dat)", plural: "gratulierte, hat gratuliert", ar: "يهنئ بـ", article: "", example: "Ich gratuliere dir zum Erfolg." },
    { de: "danken für (+Akk)", plural: "dankte, hat gedankt", ar: "يشكر على", article: "", example: "Danke für deine Einladung!" },
    { de: "sich interessieren für (+Akk)", plural: "interessierte sich, hat sich interessiert", ar: "يهتم بـ", article: "", example: "Interessierst du dich für Musik?" }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich warte schon seit 20 Minuten ___ den Bus.",
      sentence: "Ich warte schon seit 20 Minuten ___ den Bus.",
      options: ["auf", "an", "für", "über"],
      correct: 0,
      answer: 0,
      explanation: "فعل warten يقترن دائماً بحرف الجر auf مع حالة Akkusativ."
    },
    {
      type: "fill-blank",
      question: "___ wem hast du gestern telefoniert? (حرف الجر مع Dativ لشخص)",
      sentence: "___ wem hast du gestern telefoniert?",
      answer: "Mit",
      accept: ["Mit", "mit"],
      explanation: "فعل telefonieren أو sprechen مع الأشخاص يقترن بحرف الجر mit (+ Dativ)."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (نحن نتطلع بشوق إلى العطلة)",
      words: ["Wir", "freuen", "den", "auf", "uns", "Urlaub", "."],
      correct: "Wir freuen uns auf den Urlaub .",
      answer: "Wir freuen uns auf den Urlaub .",
      accept: ["Wir freuen uns auf den Urlaub .", "Wir freuen uns auf den Urlaub"],
      explanation: "الفاعل (Wir) + الفعل الانعكاسي (freuen) + الضمير الانعكاسي (uns) + حرف الجر مع Akkusativ (auf den Urlaub)."
    },
    {
      type: "multiple-choice",
      question: "___ denkst du gerade? — An meine Familie.",
      sentence: "___ denkst du gerade? — An meine Familie.",
      options: ["Woran", "Worauf", "Wovon", "Womit"],
      correct: 0,
      answer: 0,
      explanation: "فعل denken يأخذ an، وعند السؤال عن شيء أو فكرة نربط Wo + r + an = Woran."
    },
    {
      type: "match",
      question: "طابق كل فعل مع حرف الجر الثابت الخاص به:",
      pairs: [
        { left: "warten", right: "auf (+Akk)" },
        { left: "träumen", right: "von (+Dat)" },
        { left: "teilnehmen", right: "an (+Dat)" },
        { left: "gratulieren", right: "zu (+Dat)" }
      ],
      explanation: "الاقترانات الثابتة للأفعال مع حروف الجر في اللغة الألمانية."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (هو يحلم بسيارة جديدة.)",
      text: "هو يحلم بسيارة جديدة.",
      from: "هو يحلم بسيارة جديدة.",
      answer: "Er träumt von einem neuen Auto.",
      accept: ["Er träumt von einem neuen Auto.", "Er träumt von einem neuen Auto"],
      explanation: "فعل träumen يقترن بـ von (+ Dativ): das neue Auto يصبح einem neuen Auto."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich denke in meine Heimat.)",
      sentence: "Ich denke in meine Heimat.",
      text: "Ich denke in meine Heimat.",
      corrected: "Ich denke an meine Heimat.",
      answer: "Ich denke an meine Heimat.",
      accept: ["Ich denke an meine Heimat.", "Ich denke an meine Heimat"],
      explanation: "فعل denken لا يأخذ حرف الجر in، بل يقترن دائماً بـ an (+ Akkusativ)."
    },
    {
      type: "fill-blank",
      question: "Wir gratulieren dir herzlich ___ Geburtstag! (zu + dem = اختصار)",
      sentence: "Wir gratulieren dir herzlich ___ Geburtstag!",
      answer: "zum",
      accept: ["zum", "zu dem"],
      explanation: "فعل gratulieren يقترن بـ zu (+ Dativ)، وتدمج zu + dem لتصبح zum."
    },
    {
      type: "multiple-choice",
      question: "___ wartest du am Bahnhof? — Auf meinen Vater.",
      sentence: "___ wartest du am Bahnhof? — Auf meinen Vater.",
      options: ["Auf wen", "Worauf", "An wen", "Woran"],
      correct: 0,
      answer: 0,
      explanation: "بما أن الإجابة شخص عاقل (der Vater) مع فعل warten auf، نسأل بـ: Auf wen?"
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Er nimmt in dem Kurs teil.)",
      sentence: "Er nimmt in dem Kurs teil.",
      text: "Er nimmt in dem Kurs teil.",
      corrected: "Er nimmt an dem Kurs teil.",
      answer: "Er nimmt an dem Kurs teil.",
      accept: ["Er nimmt an dem Kurs teil.", "Er nimmt an dem Kurs teil", "Er nimmt am Kurs teil.", "Er nimmt am Kurs teil"],
      explanation: "فعل teilnehmen يقترن بحرف الجر an (+ Dativ)، فنقول: an dem Kurs teil (أو am Kurs teil)."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Interessierst du dich ___ moderne Kunst?",
      options: ["für", "über", "an", "auf"],
      correct: 0,
      answer: 0,
      explanation: "فعل sich interessieren يقترن دائماً بـ für (+ Akkusativ)."
    },
    {
      type: "multiple-choice",
      question: "Ich danke dir herzlich ___ deine tolle Hilfe!",
      options: ["für", "über", "zu", "von"],
      correct: 0,
      answer: 0,
      explanation: "فعل danken يقترن بـ für (+ Akkusativ) عند ذكر سبب الشكر."
    },
    {
      type: "multiple-choice",
      question: "___ freust du dich so sehr? — Über das schöne Geschenk!",
      options: ["Worüber", "Worauf", "Woran", "Wovon"],
      correct: 0,
      answer: 0,
      explanation: "السرور بهدية تم استلامها بالفعل (حاضر) يكون بـ sich freuen über، وسؤال الشيء غير العاقل هو: Worüber?"
    },
    {
      type: "multiple-choice",
      question: "Sie nimmt regelmäßig ___ Deutschunterricht teil.",
      options: ["am", "im", "beim", "zum"],
      correct: 0,
      answer: 0,
      explanation: "teilnehmen an (+ Dativ): an + dem Unterricht تصبح am Unterricht."
    },
    {
      type: "multiple-choice",
      question: "Er ärgert sich oft ___ seine unpünktlichen Kollegen.",
      options: ["über", "auf", "an", "von"],
      correct: 0,
      answer: 0,
      explanation: "فعل sich ärgern يقترن بـ über (+ Akkusativ)."
    }
  ]
};
window.lessons = window.LESSONS;
