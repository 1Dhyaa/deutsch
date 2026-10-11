// data/lessons/a2-1/10-welch.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-10"] = {
  id: "a2-1-10",
  level: "a2-1",
  order: 10,
  slug: "welch",
  title: {
    de: "Fragewort: welch-",
    ar: "أداة الاستفهام للاختيار والتحديد (welch-)"
  },
  tags: ["grammatik", "fragen", "welch", "artikel", "kasus", "a2"],

  // 1. الهدف
  goal: "ستتعلم في هذا الدرس كيفية استخدام وتصريف أداة الاستفهام التحديدية (welch- أيّ / أيّة) في الحالات الإعرابية المختلفة (Nominativ, Akkusativ, Dativ)، وكيف تأخذ نفس نهايات أداة التعريف تماماً للسؤال عن اختيار محدد بين عدة بدائل.",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "تُستخدم أداة الاستفهام **welch-** (بمعنى: أيّ / أيّة) عندما نريد السؤال عن شخص أو شيء محدد من بين مجموعة محددة ومعروفة (مثل الاختيار في متجر: أي معطف تريد؟ أو في محطة قطار: في أي قطار تسافر؟)."
    },
    {
      type: "rule",
      content: "القاعدة الذهبية لتصريف welch-:<br>تأخذ أداة الاستفهام **welch-** **نفس نهايات أداة التعريف المحددة (der, die, das, die)** تماماً في كل حالة إعرابية!<br>• der → welch**er** | die → welch**e** | das → welch**es** | die (Plural) → welch**e**."
    },
    {
      type: "table",
      headers: ["الحالة الإعرابية (Kasus)", "مذكر (Maskulin)", "مؤنث (Feminin)", "محايد (Neutral)", "جمع (Plural)"],
      rows: [
        ["الرفع (Nominativ)", "welcher (der)", "welche (die)", "welches (das)", "welche (die)"],
        ["النصب (Akkusativ)", "welchen (den)", "welche (die)", "welches (das)", "welche (die)"],
        ["الجر (Dativ)", "welchem (dem)", "welcher (der)", "welchem (dem)", "welchen (+n) (den)"]
      ]
    },
    {
      type: "text",
      content: "كيف تختار النهاية الصحيحة لـ welch- في 3 خطوات بسيطة وعملية؟"
    },
    {
      type: "table",
      headers: ["الخطوة", "ماذا تفعل؟", "مثال توضيحي"],
      rows: [
        ["1. حدد جنس الاسم", "هل الكلمة مذكرة (der)، مؤنثة (die)، محايدة (das)، أم جمع؟", "Mantel = der Mantel (مذكر)"],
        ["2. حدد موقعه الإعرابي", "هل هو فاعل (Nominativ)، مفعول (Akkusativ)، أم بعد حرف جر؟", "möchten Sie = Mantel هو مفعول به (Akkusativ)"],
        ["3. ركّب النهاية المناسبة", "أداة النصب للمذكر هي den ← إذن النهاية هي -en", "Welch + en = **Welchen** Mantel möchten Sie?"]
      ]
    },
    {
      type: "rule",
      content: "تأثير حروف الجر على welch-:<br>إذا سبق أداة الاستفهام حرف جر، فإن حرف الجر هو الذي يحدد الحالة الإعرابية فوراً دون النظر إلى باقي الجملة:<br>• **Mit welchem** Bus fährst du? (حرف mit يفرض Dativ ← der Bus يصبح welchem).<br>• **Aus welchem** Land kommst du? (حرف aus يفرض Dativ ← das Land يصبح welchem).<br>• **In welcher** Stadt wohnst du? (حرف in يفرض Dativ عند السؤال عن المكان Wo ← die Stadt تصبح welcher)."
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "**Welcher** Pullover gefällt dir am besten?",
      ar: "أي كنزة تعجبك أكثر من غيرها؟",
      audio: true,
      note: "der Pullover فاعل (Nominativ) ← welcher"
    },
    {
      de: "**Welchen** Mantel möchten Sie anprobieren?",
      ar: "أي معطف ترغب في قياسه؟",
      audio: true,
      note: "der Mantel مفعول به (Akkusativ) ← welchen"
    },
    {
      de: "**Welches** Buch liest du gerade im Deutschkurs?",
      ar: "أي كتاب تقرأه حالياً في دورة اللغة الألمانية؟",
      audio: true,
      note: "das Buch محايد في Akkusativ ← welches"
    },
    {
      de: "**Welche** Bluse passt besser zu dieser Hose?",
      ar: "أي بلوزة تناسب هذا البنطال أكثر؟",
      audio: true,
      note: "die Bluse مؤنث في Nominativ ← welche"
    },
    {
      de: "Aus **welchem** Land kommen Ihre Großeltern?",
      ar: "من أي بلد ينحدر أجدادك؟",
      audio: true,
      note: "das Land بعد حرف الجر aus (Dativ) ← welchem"
    },
    {
      de: "In **welcher** Straße wohnen Sie genau?",
      ar: "في أي شارع تسكن تحديداً؟",
      audio: true,
      note: "die Straße بعد حرف الجر in (Dativ) ← welcher"
    },
    {
      de: "Mit **welchem** Zug fährst du nach Hamburg?",
      ar: "بأي قطار ستسافر إلى هامبورغ؟",
      audio: true,
      note: "der Zug بعد حرف الجر mit (Dativ) ← welchem"
    },
    {
      de: "**Welche** Sprachen sprechen Sie neben Deutsch?",
      ar: "ما اللغات التي تتحدثها إلى جانب الألمانية؟",
      audio: true,
      note: "die Sprachen اسم جمع في Akkusativ ← welche"
    },
    {
      de: "Zu **welchem** Arzt soll ich gehen?",
      ar: "إلى أي طبيب ينبغي أن أذهب؟",
      audio: true,
      note: "der Arzt بعد حرف الجر zu (Dativ) ← welchem"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في العربية كلمة «أيّ / أيّة» ثابتة لا تتغير بتغير الإعراب (أيّ كتابٍ قرأت؟ مع أيّ شخصٍ جلست؟). أما في الألمانية فإن **welch-** يجب أن تصرف بدقة متناهية حسب الجنس وحالة الإعراب (Nominativ, Akkusativ, Dativ).",
    "احذر من المذكر المنصوب والمجرور: أكثر خطأ يقع فيه المتعلمون هو استخدام *welcher* دائماً! تذكر أن المذكر في Akkusativ يصبح **welchen** (مثل: Welchen Rock kaufst du?)، وفي Dativ يصبح **welchem** (مثل: Mit welchem Bus?).",
    "حرف الجر يقرر الحالة الإعرابية فوراً: إذا رأيت حرف جر قبل welch- (مثل: mit, aus, bei, nach, zu)، فلا تفكر في بقية الجملة، بل طبّق فوراً إعراب Dativ المناسب لجنس الاسم."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "welch- تعني (أيّ / أيّة) وتُستخدم للاختيار من بين خيارات محددة.",
    "تأخذ welch- نفس نهايات أداة التعريف (der/die/das) تماماً.",
    "المذكر: welcher (Nom) ← welchen (Akk) ← welchem (Dat).",
    "المؤنث: welche (Nom) ← welche (Akk) ← welcher (Dat).",
    "المحايد والجمع: welches (Nom/Akk) / welche (Nom/Akk)، وفي Dativ: welchem / welchen."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "welcher / welche / welches", plural: "welche", ar: "أيّ / أيّة (للاختيار والتحديد)", article: "", example: "Welches Kleid möchten Sie kaufen?" },
    { de: "der Mantel", plural: "die Mäntel", ar: "المعطف", article: "der", example: "Welchen Mantel möchten Sie anprobieren?" },
    { de: "der Pullover", plural: "die Pullover", ar: "الكنزة / السترة الصوفية", article: "der", example: "Welcher Pullover steht mir besser?" },
    { de: "die Jacke", plural: "die Jacken", ar: "السترة / الجاكيت", article: "die", example: "Welche Jacke gefällt dir am besten?" },
    { de: "die Größe", plural: "die Größen", ar: "المقاس / الحجم", article: "die", example: "In welcher Größe brauchen Sie das Hemd?" },
    { de: "auswählen", plural: "wählt aus, hat ausgewählt", ar: "يختار / ينتقي", article: "", example: "Ich kann mich schwer auswählen." },
    { de: "die Auswahl", plural: "die Auswahlen", ar: "التشكيلة / الاختيار", article: "die", example: "Das Geschäft hat eine große Auswahl." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "___ Mantel möchten Sie anprobieren? (der Mantel, Akkusativ)",
      options: ["Welchen", "Welcher", "Welches", "Welchem"],
      correct: 0,
      answer: 0,
      explanation: "كلمة Mantel مذكرة (der Mantel)، وفي موقع المفعول به المنصوب (Akkusativ) تأخذ نهاية -en فتصبح Welchen."
    },
    {
      type: "fill-blank",
      question: "Aus ___ Land kommen Ihre Kollegen? (das Land, Dativ)",
      answer: "welchem",
      accept: ["welchem"],
      explanation: "حرف الجر aus يفرض حالة Dativ، وكلمة Land محايدة (das Land ← dem Land)، فتأخذ النهاية -em: welchem."
    },
    {
      type: "word-order",
      question: "رتب جملة السؤال: (أي فستان تريدين شراءه اليوم؟)",
      words: ["Welches", "Kleid", "möchtest", "du", "heute", "kaufen", "?"],
      correct: "Welches Kleid möchtest du heute kaufen ?",
      explanation: "أداة الاستفهام والاسم (Welches Kleid) + الفعل المساعد ثانياً (möchtest) + الفاعل (du) + التوقيت (heute) + المصدر أخيراً (kaufen)."
    },
    {
      type: "match",
      question: "طابق صيغة welch- مع التركيب الإعرابي المناسب:",
      pairs: [
        { left: "مذكر فاعل (Nominativ)", right: "Welcher Pullover" },
        { left: "مذكر مفعول (Akkusativ)", right: "Welchen Pullover" },
        { left: "محايد مفعول (Akkusativ)", right: "Welches Buch" },
        { left: "مؤنث مجرور (Dativ)", right: "In welcher Straße" }
      ],
      explanation: "المذكر الفاعل يأخذ Welcher، والمذكر المفعول Welchen، والمحايد المفعول Welches، والمؤنث المجرور بـ in يأخذ In welcher."
    },
    {
      type: "multiple-choice",
      question: "In ___ Stadt hast du deinen Bachelor gemacht? (die Stadt, Dativ)",
      options: ["welcher", "welche", "welchem", "welchen"],
      correct: 0,
      answer: 0,
      explanation: "كلمة Stadt مؤنثة (die Stadt)، وحرف الجر in الدال على المكان (Wo?) يأخذ Dativ فتتحول إلى welcher."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في السؤال: (Welcher Pullover kaufst du?)",
      sentence: "Welcher Pullover kaufst du?",
      corrected: "Welchen Pullover kaufst du?",
      explanation: "الفعل kaufen يتعدى لمفعول به (Akkusativ)، ومع المذكر (der Pullover) يجب استخدام Welchen."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أي كتاب تقرأ؟)",
      from: "أي كتاب تقرأ؟",
      answer: "Welches Buch liest du?",
      accept: [
        "Welches Buch liest du?",
        "Welches Buch lesen Sie?",
        "Welches Buch liest du",
        "Welches Buch lesen Sie"
      ],
      explanation: "كلمة Buch محايدة (das Buch)، وفي حالة النصب تأخذ Welches."
    },
    {
      type: "fill-blank",
      question: "___ Tasche gehört Ihnen, Frau Müller? (die Tasche, Nominativ)",
      answer: "Welche",
      accept: ["Welche"],
      explanation: "كلمة Tasche مؤنثة (die Tasche) وهي هنا فاعل في حالة Nominativ فتأخذ Welche."
    },
    {
      type: "multiple-choice",
      question: "Mit ___ Bus fahrt ihr zum Flughafen? (der Bus, Dativ)",
      options: ["welchem", "welchen", "welcher", "welches"],
      correct: 0,
      answer: 0,
      explanation: "حرف الجر mit يفرض Dativ دائماً، وكلمة Bus مذكرة (der Bus ← dem Bus) فتأخذ welchem."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Aus welche Land kommen Sie?)",
      sentence: "Aus welche Land kommen Sie?",
      corrected: "Aus welchem Land kommen Sie?",
      explanation: "بعد حرف الجر aus يأتي Dativ، وكلمة Land محايدة، فتصبح Aus welchem Land."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "»___ Rock findest du schöner?« (der Rock, مفعول به)",
      options: ["Welchen", "Welcher", "Welchem"],
      correct: 0,
      answer: 0,
      explanation: "مع المذكر في حالة Akkusativ نستخدم Welchen (مثل den)."
    },
    {
      type: "multiple-choice",
      question: "»In ___ Zimmer schläft das Kind?« (das Zimmer, Dativ)",
      options: ["welchem", "welches", "welcher"],
      correct: 0,
      answer: 0,
      explanation: "das Zimmer في حالة Dativ تأخذ النهاية -em مثل dem: in welchem."
    },
    {
      type: "multiple-choice",
      question: "»___ Farbe gefällt Ihnen am besten?« (die Farbe, فاعل)",
      options: ["Welche", "Welcher", "Welches"],
      correct: 0,
      answer: 0,
      explanation: "die Farbe مؤنث في حالة Nominativ فتأخذ أداة الاستفهام Welche."
    },
    {
      type: "multiple-choice",
      question: "»Zu ___ Arzt gehst du heute?« (der Arzt, Dativ)",
      options: ["welchem", "welchen", "welcher"],
      correct: 0,
      answer: 0,
      explanation: "حرف الجر zu يفرض Dativ، و der Arzt تصبح dem Arzt ← zu welchem."
    },
    {
      type: "multiple-choice",
      question: "»___ Sprachen lernen Sie zurzeit?« (die Sprachen, جمع مفعول به)",
      options: ["Welche", "Welchen", "Welcher"],
      correct: 0,
      answer: 0,
      explanation: "اسم الجمع في حالة Akkusativ يأخذ Welche (مثل die Sprachen)."
    }
  ]
};
window.lessons = window.LESSONS;
