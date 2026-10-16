// data/lessons/b2/05-partizipialattribute.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["b2-1-05"] = {
  id: "b2-1-05",
  level: "b2-1",
  order: 5,
  slug: "partizipialattribute",
  title: {
    de: "Partizip I & II als Adjektive (Erweiterte Partizipialattribute)",
    ar: "اسم الفاعل واسم المفعول كصفات والنعت الموسع (Partizipialattribute)"
  },
  tags: ["b2", "partizip", "adjektive", "partizipialattribute", "grammatik"],

  goal: "التمكن من تحويل الجمل الموصولة المعقدة إلى نعوت وسمات اسمية موجزة وراقية (Partizip I & II) وتصريفها كصفات، وهو التكنيك البلاغي الأهم لفهم وقراءة نصوص B2 المتقدمة.",

  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية المتقدمة ولغة الصحافة والجامعات، يُفضل استخدام **Partizip I (اسم الفاعل)** و **Partizip II (اسم المفعول)** كصفات تسبق الأسماء (Partizipialattribute). هذا الأسلوب يختصر الجمل الموصولة (Relativsätze) الطويلة ويمنح الكلام رصانة ودقة علمية."
    },
    {
      type: "table",
      headers: ["نوع اسم النعت", "طريقة الصياغة", "المعنى / المقابل", "مثال توضيحي (B2)"],
      rows: [
        ["Partizip I (اسم الفاعل)", "**Infinitiv + -d + تصريف الصفة**", "حدث مستمر في الحاضر بصيغة المبني للمعلوم (aktiv & gleichzeitig)", "der **schlafende** Passagier (= der Passagier, der schläft)"],
        ["Partizip II (اسم المفعول)", "**Partizip II + تصريف الصفة**", "حدث مكتمل أو بصيغة المبني للمجهول (passiv oder vollendet)", "die **gesendete** E-Mail (= die E-Mail, die gesendet wurde)"],
        ["Partizip I mit »zu« (Gerundiv)", "**zu + Infinitiv + -d + تصريف الصفة**", "إلزام أو إمكانية مجهولة (muss/kann gemacht werden)", "die **zu lösende** Aufgabe (= die Aufgabe, die gelöst werden muss)"]
      ]
    },
    {
      type: "rule",
      content: "النعت الموسع (Erweitertes Partizip): عند إضافة تفاصيل وظروف للنعت، توضع جميعها بين أداة التعريف والاسم المنعوت! مثال: *das [gestern in Berlin veröffentlichte] Buch*. هنا يُصرف النعت الأخير فقط كصفة."
    },
    {
      type: "rule",
      content: "تصريف النهايات: يعامل كل من Partizip I و Partizip II معاملة الصفة العادية تماماً ويأخذ نهايات تصريف الصفات (Adjektivdeklination) بحسب جنس الاسم وحالته الإعرابية وأداة تعريفه."
    }
  ],

  examples: [
    {
      de: "Die Zahl der im Ausland **studierenden** Personen ist stark gestiegen.",
      ar: "ارتفع عدد الأشخاص الذين يدرسون في الخارج بشكل ملحوظ.",
      highlight: "studierenden",
      note: "Partizip I: studieren + d + en (Plural Genitiv)"
    },
    {
      de: "Das von den Experten **entwickelte** Konzept wurde einstimmig angenommen.",
      ar: "تمت الموافقة بالإجماع على المفهوم الذي طوره الخبراء.",
      highlight: "entwickelte",
      note: "Partizip II: مبني للمجهول مكتمل (Neutrum Nominativ)"
    },
    {
      de: "Die bis Ende des Monats **einzureichenden** Unterlagen müssen vollständig sein.",
      ar: "الوثائق الواجب تسليمها حتى نهاية الشهر يجب أن تكون كاملة.",
      highlight: "einzureichenden",
      note: "Gerundiv: zu + einreichen + d + en (تفيد وجوب التسليم)"
    },
    {
      de: "Der im Konferenzraum laut **telefonierende** Mann störte die Sitzung.",
      ar: "الرجل الذي كان يتحدث بصوت عالٍ على الهاتف في قاعة المؤتمرات أزعج الجلسة.",
      highlight: "telefonierende",
      note: "نعت موسع يبدأ بـ im Konferenzraum وينتهي بـ telefonierende"
    },
    {
      de: "Alle durch den Sturm **beschädigten** Gebäude wurden evakuiert.",
      ar: "تم إخلاء جميع المباني التي تضررت جراء العاصفة.",
      highlight: "beschädigten",
      note: "Partizip II كصفة لمبنى متضرر في الجمع"
    },
    {
      de: "Es gibt noch viele bisher **ungelöste** Fragen zur Energiewende.",
      ar: "لا تزال هناك العديد من المسائل العالقة وغير المحلولة حتى الآن بشأن تحول الطاقة.",
      highlight: "ungelöste",
      note: "Partizip II منفي بـ un-"
    },
    {
      de: "Mit **sinkenden** Temperaturen steigt der Energieverbrauch deutlich an.",
      ar: "مع انخفاض درجات الحرارة (درجات الحرارة الآخذة في الهبوط)، يرتفع استهلاك الطاقة بوضوح.",
      highlight: "sinkenden",
      note: "Partizip I في Dativ Plural مع Präposition mit"
    },
    {
      de: "Die am gestrigen Abend **beschlossene** Reform tritt ab sofort in Kraft.",
      ar: "يدخل الإصلاح الذي أُقر مساء أمس حيز التنفيذ فوراً.",
      highlight: "beschlossene",
      note: "نعت موسع دال على إجراء ماضٍ"
    }
  ],

  arabicTips: [
    "في اللغة العربية نستخدم عادة الجملة الموصولة (الرجل الذي يقرأ الجريدة...). في الألمانية المتقدمة تختصر هذه الجملة إلى نعت يسبق الاسم: *der die Zeitung lesende Mann*. قد يبدو هذا التركيب غريباً في البداية لأن الكلام يتوسط بين الأداة والاسم!",
    "لتسهيل قراءة النعت الموسع الطويل في امتحانات B2: ابدأ دائماً بقراءة الأداة ثم اقفز مباشرة إلى الاسم في نهاية العبارة لتفهم المبتدأ، ثم ارجع لقراءة النعت والظروف التي تصفه.",
    "Partizip I يدل على حدث مستمر وفاعل (aktiv)، بينما Partizip II يدل في الأغلب على مفعول به متأثر بالحدث (passiv) أو حدث انتهى تماماً."
  ],

  summary: [
    "Partizip I = مصدر الفعل + d + نهاية الصفة (يدل على الفاعل والاستمرار).",
    "Partizip II = صيغة الماضي التام + نهاية الصفة (يدل على المفعول أو الاكتمال).",
    "zu + Partizip I (Gerundiv) = يفيد الضرورة والإلزام المجهول (muss gemacht werden).",
    "في النعت الموسع، يوضع كل ما يصف الفعل بين الأداة والاسم المنعوت."
  ],

  vocabulary: [
    { de: "veröffentlichen", plural: "–", ar: "ينشر (كتاباً، تقريراً، نتائج)", article: "", example: "Das Institut hat eine neue Studie veröffentlicht." },
    { de: "einstimmig", plural: "–", ar: "بالإجماع / بالإتفاق التام", article: "", example: "Der Vorschlag wurde einstimmig angenommen." },
    { de: "beschließen", plural: "–", ar: "يقرر رسمياً / يعتمد قانوناً", article: "", example: "Das Parlament hat das neue Gesetz beschlossen." },
    { de: "evakuieren", plural: "–", ar: "يُخلي (منطقة أو مبنى)", article: "", example: "Die Anwohner mussten ihre Wohnungen evakuieren." },
    { de: "in Kraft treten", plural: "–", ar: "يدخل حيز التنفيذ", article: "", example: "Die Neuregelung tritt ab Januar in Kraft." },
    { de: "die Energiewende", plural: "–", ar: "التحول نحو الطاقة البديلة", article: "die", example: "Die Energiewende erfordert gewaltige Investitionen." }
  ],

  exercises: [
    {
      type: "multiple-choice",
      question: "Wie wandelt man »der Mann, der lacht« in ein Partizip I um?",
      options: [
        "der lachende Mann",
        "der gelachte Mann",
        "der zu lachende Mann",
        "der lachender Mann"
      ],
      answer: 0,
      explanation: "lachen + d + e (Nominativ maskulin mit bestimmtem Artikel) = der lachende Mann."
    },
    {
      type: "fill-blank",
      sentence: "Die gestern von der Firma ___ (informieren) Kunden waren zufrieden.",
      correct: "informierten",
      accept: ["informierten"],
      explanation: "Partizip II من informieren هو informiert، مع أداة التعريف في الجمع تأخذ نهاية -en: informierten."
    },
    {
      type: "word-order",
      words: ["Das", "in", "Deutschland", "produzierte", "Auto", "ist", "sehr", "zuverlässig", "."],
      correct: "Das in Deutschland produzierte Auto ist sehr zuverlässig .",
      explanation: "النعت الموسع (in Deutschland produzierte) يتوسط بين أداة التعريف (Das) والاسم (Auto)."
    },
    {
      type: "match",
      pairs: [
        { de: "die spielenden Kinder", ar: "الأطفال الذين يلعبون (Partizip I aktiv)" },
        { de: "das reparierte Fahrrad", ar: "الدراجة التي تم إصلاحها (Partizip II passiv)" },
        { de: "die zu lösende Aufgabe", ar: "المهمة التي يجب حلها (Gerundiv muss)" },
        { de: "sinkende Kosten", ar: "تكاليف آخذة في الانخفاض (Partizip I)" }
      ],
      explanation: "طابق صيغ النعت بدلالتها الدقيقة."
    },
    {
      type: "translate",
      source: "الكتاب المنشور حديثاً حقق نجاحاً كبيراً.",
      target: "Das kürzlich veröffentlichte Buch hatte großen Erfolg.",
      accept: [
        "Das neu veröffentlichte Buch war ein großer Erfolg.",
        "Das kürzlich erschienene Buch hatte großen Erfolg."
      ],
      explanation: "النعت الموسع: Das kürzlich veröffentlichte Buch."
    },
    {
      type: "error-correction",
      sentence: "Die schlafende im Zug Passagiere bemerkten den Halt nicht.",
      correct: "Die im Zug schlafenden Passagiere bemerkten den Halt nicht.",
      explanation: "يجب أن يأتي شبه الجملة والظرف قبل اسم النعت مباشرة: im Zug schlafenden Passagiere."
    },
    {
      type: "fill-blank",
      sentence: "Die bis morgen ___ (zu erledigen) Aufgaben sind sehr dringend.",
      correct: "zu erledigenden",
      accept: ["zu erledigenden"],
      explanation: "صيغة Gerundiv: zu + erledigen + d + en."
    },
    {
      type: "multiple-choice",
      question: "Was bedeutet »die zu bezahlende Rechnung«?",
      options: [
        "Die Rechnung, die bezahlt werden muss.",
        "Die Rechnung, die bereits bezahlt wurde.",
        "Die Person, die die Rechnung bezahlt.",
        "Eine Rechnung, die man niemals bezahlen kann."
      ],
      answer: 0,
      explanation: "تركيب zu + Partizip I (Gerundiv) يعبر عن الإلزام والمبني للمجهول: muss bezahlt werden."
    },
    {
      type: "translate",
      source: "الأشخاص القادمون متأخرين لم يُسمح لهم بالدخول.",
      target: "Die zu spät kommenden Personen durften nicht eintreten.",
      accept: [
        "Den zu spät kommenden Gästen wurde der Einlass verwehrt.",
        "Die spät ankommenden Personen durften nicht rein."
      ],
      explanation: "اسم الفاعل Partizip I المعبر عن الحاضر والمستمر: zu spät kommenden."
    },
    {
      type: "multiple-choice",
      question: "Welches Partizip drückt eine vollendete Handlung oder einen Passivzustand aus?",
      options: [
        "Partizip II (z. B. das geschriebene Wort)",
        "Partizip I (z. B. das schreibende Kind)",
        "Gerundiv (z. B. das zu schreibende Dokument)",
        "Infinitiv mit zu"
      ],
      answer: 0,
      explanation: "Partizip II يدل على حدث تم واكتمل أو وقع عليه الفعل مبنياً للمجهول."
    }
  ],

  quiz: [
    {
      question: "Wie lautet die richtige Form von: »Die in Berlin _____ (wohnen) Journalistin schrieb den Artikel«?",
      options: ["wohnende", "gewohnte", "zu wohnende", "wohnenden"],
      answer: 0,
      explanation: "wohnende: حدث مستمر (aktiv) مع اسم مفرد مؤنث مرفوع بأداة معرفة (die wohnende)."
    },
    {
      question: "Was drückt »das nicht zu reparierende Gerät« aus?",
      options: [
        "Das Gerät kann nicht repariert werden.",
        "Das Gerät muss nicht repariert werden.",
        "Das Gerät wurde gestern erfolgreich repariert.",
        "Das Gerät repariert sich von selbst."
      ],
      answer: 0,
      explanation: "nicht zu + Partizip I يعبر عن تعذر واستحالة الفعل: kann nicht repariert werden."
    },
    {
      question: "Welcher Satz enthält ein KORREKT aufgebautes erweitertes Partizipialattribut?",
      options: [
        "Der gestern von der Polizei festgenommene Verdächtige gestand die Tat.",
        "Der festgenommene gestern von der Polizei Verdächtige gestand die Tat.",
        "Der Verdächtige gestern festgenommene von der Polizei gestand die Tat.",
        "Der von der Polizei gestern Verdächtige festgenommene gestand die Tat."
      ],
      answer: 0,
      explanation: "الترتيب السليم للنعت الموسع: الأداة + كل الظروف وشبه الجملة + النعت المصرف + الاسم المنعوت."
    },
    {
      question: "Ergänze: »Mit ständig _____ (steigen) Preisen müssen die Verbraucher rechnen.«",
      options: ["steigenden", "gestiegenen", "steigende", "zu steigenden"],
      answer: 0,
      explanation: "بعد حرف الجر mit يأتي Dativ الجمع، لذا تأخذ الصفة نهاية -en: mit ständig steigenden Preisen."
    },
    {
      question: "Aus welchem Relativsatz entsteht »der lesende Schüler«?",
      options: [
        "der Schüler, der liest",
        "der Schüler, der gelesen wurde",
        "der Schüler, der lesen muss",
        "der Schüler, den man liest"
      ],
      answer: 0,
      explanation: "Partizip I يعوض دائماً الجملة الموصولة في المبني للمعلوم في صيغة الاستمرار."
    }
  ]
};
