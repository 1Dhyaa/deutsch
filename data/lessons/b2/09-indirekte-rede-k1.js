// data/lessons/b2/09-indirekte-rede-k1.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["b2-2-04"] = {
  id: "b2-2-04",
  level: "b2-2",
  order: 9,
  slug: "indirekte-rede-k1",
  title: {
    de: "Die indirekte Rede (Konjunktiv I)",
    ar: "الكلام غير المباشر وصيغة النقل الإخباري (Konjunktiv I)"
  },
  tags: ["b2", "konjunktiv1", "indirekte-rede", "nachrichten", "grammatik"],

  goal: "إتقان نقل تصريحات الآخرين بأسلوب محايد وصحيح نحوياً باستخدام Konjunktiv I وصيغ البدائل (Konjunktiv II)، وهو المعيار الأهم لفهم الأخبار والصحافة وكتابة التقارير الرسمية في B2.",

  explanation: [
    {
      type: "text",
      content: "تُستخدم صيغة **Konjunktiv I** في اللغة الألمانية لنقل أقوال الآخرين في **الكلام غير المباشر (Indirekte Rede)**، خاصة في الصحف ونشرات الأخبار والمحاكم والتقارير الأكاديمية، لبيان أن المتحدث ينقل الكلام بأمانة وحيادية دون أن يتبناه شخصياً."
    },
    {
      type: "table",
      headers: ["الضمير", "نهاية Konjunktiv I", "مثال: sein (استثنائي)", "مثال: haben", "مثال: sagen"],
      rows: [
        ["ich", "-e (يتطابق مع الحاضر)", "ich **sei**", "ich habe *(يستبدل بـ hätte)*", "ich sage *(يستبدل بـ sagte)*"],
        ["du", "-est", "du **seiest**", "du **habest**", "du **sagest**"],
        ["er/sie/es/man", "**-e (الصيغة الأساسية)**", "er **sei**", "er **habe**", "er **sage**"],
        ["wir", "-en (يتطابق مع الحاضر)", "wir **seien**", "wir haben *(يستبدل بـ hätten)*", "wir sagen *(يستبدل بـ sagten)*"],
        ["ihr", "-et", "ihr **seiet**", "ihr **habet**", "ihr **saget**"],
        ["sie/Sie", "-en (يتطابق مع الحاضر)", "sie **seien**", "sie haben *(يستبدل بـ hätten)*", "sie sagen *(يستبدل بـ sagten)*"]
      ]
    },
    {
      type: "rule",
      content: "قاعدة التطابق والبدائل (Ersatzregel): إذا تطابقت صيغة Konjunktiv I مع صيغة الحاضر العادي (Indikativ Präsens) — وخاصة مع ich و wir و sie/Sie — **يجب استبدالها بصيغة Konjunktiv II** لتجنب الالتباس! وإذا تطابق Konjunktiv II أيضاً مع الماضي العادي، نستخدم صيغة **würde + Infinitiv**."
    },
    {
      type: "rule",
      content: "الماضي في الكلام غير المباشر: جميع أزمنة الماضي (Perfekt, Präteritum, Plusquamperfekt) تدمج في صيغة واحدة فقط في Konjunktiv I: **sei / habe + Partizip II**. مثال: *Er sagte, er habe den Brief geschrieben*."
    }
  ],

  examples: [
    {
      de: "Der Minister erklärte, die Regierung **plane** umfassende Steuererleichterungen.",
      ar: "صرح الوزير بأن الحكومة تخطط لتخفيضات ضريبية شاملة.",
      highlight: "plane",
      note: "er/sie/es: plan + e (Konjunktiv I)"
    },
    {
      de: "Die Zeugin behauptet, sie **habe** den Täter noch nie zuvor **gesehen**.",
      ar: "تزعم الشاهدة أنها لم ترَ الجاني من قبل قط.",
      highlight: "habe ... gesehen",
      note: "الماضي في الكلام غير المباشر: habe + Partizip II"
    },
    {
      de: "Der Sprecher betonte, die Lage **sei** unter Kontrolle.",
      ar: "أكد المتحدث أن الوضع تحت السيطرة.",
      highlight: "sei",
      note: "sein في Konjunktiv I للمفرد الغائب: sei"
    },
    {
      de: "Die Forscher gaben an, sie **hätten** einen bahnbrechenden Impfstoff **entwickelt**.",
      ar: "ذكر الباحثون أنهم طوروا لقاحاً غير مسبوق.",
      highlight: "hätten ... entwickelt",
      note: "استبدال haben بـ hätten للجمع لتفادي التطابق مع الحاضر"
    },
    {
      de: "Er versicherte mir, er **werde** sich schnellstmöglich um die Angelegenheit kümmern.",
      ar: "أكد لي أنه سيهتم بالأمر في أسرع وقت ممكن.",
      highlight: "werde ... kümmern",
      note: "المستقبل في Konjunktiv I: werde + Infinitiv"
    },
    {
      de: "Die Anwohner klagten, der ständige Baustellenlärm **sei** unerträglich.",
      ar: "اشتكى السكان المجاورون من أن الضوضاء المستمرة لموقع البناء لا تطاق.",
      highlight: "sei",
      note: "نقل الشكوى بدون تبني الرأي"
    },
    {
      de: "Laut Polizeibericht **habe** sich der Unfall am frühen Morgen **ereignet**.",
      ar: "وفقاً لتقرير الشرطة، وقع الحادث في الصباح الباكر.",
      highlight: "habe sich ... ereignet",
      note: "صيغة الأخبار المقتضبة"
    },
    {
      de: "Die Gewerkschaft teilte mit, die Verhandlungen **seien** vorerst gescheitert.",
      ar: "أعلنت النقابة أن المفاوضات قد باءت بالفشل في الوقت الراهن.",
      highlight: "seien",
      note: "Plural من sein: seien"
    }
  ],

  arabicTips: [
    "في اللغة العربية نستخدم عادة 'قال إن...' متبوعة بجملة خبرية عادية. في الألمانية، لضمان الموضوعية في التقارير الإخبارية، يجب تحويل فعل الجملة المنقولة إلى Konjunktiv I حتى يفهم القارئ أن هذا كلام المصدر وليس كلام الكاتب.",
    "أهم شكل يجب أن تحفظه كطالب B2 هو صيغة الغائب المفرد (er/sie/es): فعل **sei** وفعل **habe** وفعل **werde** وبقية الأفعال بإضافة حرف **-e** فقط إلى أصل الفعل (gehe, wisse, könne).",
    "احذر: عندما تتحدث بصيغة الجمع (wir أو sie)، لا تقل *sie haben gesagt* كفعل منقول، بل استخدم الصيغة البديلة *sie hätten gesagt*."
  ],

  summary: [
    "يُستخدم Konjunktiv I حصراً لنقل الكلام غير المباشر في الصحافة والتقارير.",
    "الصيغة الأكثر استخداماً هي المفرد الغائب (er/sie/es): تأخذ -e (sei, habe, werde, komme).",
    "إذا تطابق Konjunktiv I مع المضارع العادي، يُستبدل بـ Konjunktiv II (hätten, wären, würden).",
    "الماضي أياً كان يتحول إلى: sei / habe + Partizip II."
  ],

  vocabulary: [
    { de: "behaupten", plural: "–", ar: "يدّعي / يزعم", article: "", example: "Er behauptet, die Wahrheit gesagt zu haben." },
    { de: "versichern", plural: "–", ar: "يؤكد / يطمئن شخصاً", article: "", example: "Der Arzt versicherte dem Patienten, dass alles gut wird." },
    { de: "bahnbrechend", plural: "–", ar: "رائد / ممهد لسبق تاريخي / غير مسبوق", article: "", example: "Das ist eine bahnbrechende Entdeckung." },
    { de: "unerträglich", plural: "–", ar: "لا يُطاق / لا يُحتمل", article: "", example: "Die Hitze im Sommer war unerträglich." },
    { de: "die Gewerkschaft", plural: "die Gewerkschaften", ar: "النقابة العمالية", article: "die", example: "Die Gewerkschaft fordert höhere Löhne." },
    { de: "das Scheitern", plural: "–", ar: "الفشل / الإخفاق", article: "das", example: "Das Scheitern der Verhandlungen war ein Rückschlag." }
  ],

  exercises: [
    {
      type: "multiple-choice",
      question: "Wie lautet die 3. Person Singular von »sein« im Konjunktiv I?",
      options: [
        "er sei",
        "er wäre",
        "er ist",
        "er seien"
      ],
      answer: 0,
      explanation: "المفرد الغائب من sein في Konjunktiv I هو دائماً: er/sie/es sei."
    },
    {
      type: "fill-blank",
      sentence: "Der Regierungssprecher teilte mit, der Kanzler ___ (reisen) morgen nach Paris.",
      correct: "reise",
      accept: ["reise"],
      explanation: "أصل الفعل reis- + اللاحقة -e في Konjunktiv I = reise."
    },
    {
      type: "word-order",
      words: ["Er", "behauptet", ",", "er", "habe", "von", "nichts", "gewusst", "."],
      correct: "Er behauptet , er habe von nichts gewusst .",
      explanation: "في الكلام غير المباشر بدون dass: الفعل habe في الموقع الثاني: er habe von nichts gewusst."
    },
    {
      type: "match",
      pairs: [
        { de: "er sei glücklich", ar: "أنه سعيد (Präsens Konjunktiv I)" },
        { de: "er habe gearbeitet", ar: "أنه قد عمل (Vergangenheit KI)" },
        { de: "sie hätten gewonnen", ar: "أنهم قد فازوا (Ersatzform KII)" },
        { de: "er werde kommen", ar: "أنه سيأتي (Zukunft KI)" }
      ],
      explanation: "اربط الصيغ بزمنها النحوي الدقيق في الكلام غير المباشر."
    },
    {
      type: "translate",
      source: "قال الطبيب إن المريض يحتاج إلى الراحة.",
      target: "Der Arzt sagte, der Patient brauche Ruhe.",
      accept: [
        "Der Arzt sagte, dass der Patient Ruhe brauche.",
        "Der Arzt meinte, der Patient brauche Ruhe."
      ],
      explanation: "استخدام Konjunktiv I: brauche."
    },
    {
      type: "error-correction",
      sentence: "Der Zeuge sagte, dass er war gestern zu Hause.",
      correct: "Der Zeuge sagte, dass er gestern zu Hause gewesen sei.",
      explanation: "في الجملة المنقولة بالماضي مع dass: gewesen sei في نهاية الجملة."
    },
    {
      type: "fill-blank",
      sentence: "Die Experten versichern, der Impfstoff ___ (haben) keine Nebenwirkungen.",
      correct: "habe",
      accept: ["habe"],
      explanation: "Konjunktiv I للمفرد الغائب من haben هو habe."
    },
    {
      type: "multiple-choice",
      question: "Warum sagt man bei »sie (Plural)« oft »hätten« statt »haben«?",
      options: [
        "Weil »sie haben« mit dem Indikativ Präsens identisch ist (Ersatzregel).",
        "Weil »haben« im Konjunktiv verboten ist.",
        "Weil Konjunktiv I im Plural nicht existiert.",
        "Weil es sich um eine Höflichkeitsform handelt."
      ],
      answer: 0,
      explanation: "قاعدة البدائل تنص على استخدام Konjunktiv II عند تطابق Konjunktiv I مع الحاضر العادي."
    },
    {
      type: "translate",
      source: "صرح المتحدث بأن الوضع مستقر.",
      target: "Der Sprecher erklärte, die Situation sei stabil.",
      accept: [
        "Der Sprecher sagte, die Lage sei stabil.",
        "Der Sprecher teilte mit, die Lage sei stabil."
      ],
      explanation: "استخدام sei مع الصفة stabil."
    },
    {
      type: "multiple-choice",
      question: "In welchen Textsorten wird Konjunktiv I vor allem gebraucht?",
      options: [
        "In Nachrichtensendungen, Zeitungsberichten und juristischen Texten.",
        "Ausschließlich in Kinderbüchern.",
        "Nur in informellen WhatsApp-Nachrichten.",
        "Nur in der gesprochenen Alltagssprache unter Freunden."
      ],
      answer: 0,
      explanation: "Konjunktiv I لغة الصحافة والإعلام ونشرات الأخبار الرسمية."
    }
  ],

  quiz: [
    {
      question: "Wie lautet der Satz »Ich habe das Geld nicht genommen« in der indirekten Rede (Er sagte, ...)?",
      options: [
        "Er sagte, er habe das Geld nicht genommen.",
        "Er sagte, er hat das Geld nicht genommen.",
        "Er sagte, er hätte das Geld nicht nehmen müssen.",
        "Er sagte, er wurde das Geld nicht genommen haben."
      ],
      answer: 0,
      explanation: "الماضي في الكلام غير المباشر للمفرد الغائب: habe + Partizip II (habe genommen)."
    },
    {
      question: "Welche Form ist Konjunktiv I von »können« (er)?",
      options: ["er könne", "er könnte", "er kann", "er gekonnt"],
      answer: 0,
      explanation: "er könne هو Konjunktiv I، بينما er könnte هو Konjunktiv II."
    },
    {
      question: "Was bedeutet die Verwendung von Konjunktiv I in einem Zeitungsartikel?",
      options: [
        "Der Journalist zitiert eine andere Quelle neutral, ohne die Aussage als eigene Tatsache zu behaupten.",
        "Der Journalist ist sich sicher, dass die Aussage gelogen ist.",
        "Der Vorfall wird erst in zehn Jahren passieren.",
        "Der Artikel wurde von einer künstlichen Intelligenz geschrieben."
      ],
      answer: 0,
      explanation: "وظيفة Konjunktiv I هي النقل المحايد لأقوال الآخرين (Distanzierung / Neutralität)."
    },
    {
      question: "Ergänze korrekt: »Die Gewerkschaft teilte mit, die Streiks _____ nächste Woche fortgesetzt.«",
      options: ["würden", "haben", "sind", "waren"],
      answer: 0,
      explanation: "في صيغة الجمع، لتفادي التطابق مع الحاضر، تستخدم صيغة würden + Partizip II (Passiv)."
    },
    {
      question: "Welches Hilfsverb wird bei »Sie behauptet, sie sei rechtzeitig angekommen« im Konjunktiv I verwendet?",
      options: [
        "sei (von sein)",
        "habe (von haben)",
        "wäre (von sein)",
        "werde (von werden)"
      ],
      answer: 0,
      explanation: "ankommen فعل حركة يأخذ sein، وصيغته في Konjunktiv I هي sei."
    }
  ]
};
