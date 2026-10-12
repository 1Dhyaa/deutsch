// website/data/lessons/a1-review/13-partizip2.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a1-review-13"] = {
  id: "a1-review-13",
  level: "a1-review",
  order: 13,
  slug: "partizip2",
  title: {
    de: "Partizip II unregelmäßiger Verben",
    ar: "اسم المفعول للأفعال الشاذة (Partizip II)"
  },
  tags: ["grammatik", "partizip2", "verben", "unregelmaessig", "perfekt", "a1"],

  // 1. الهدف
  goal: "ستتعلم القواعد الذهبية لصياغة اسم المفعول (Partizip II) للأفعال الشاذة والقوية، وكيفية التعامل مع الأفعال المنتهية بـ -ieren، والأفعال ذات البادئات المنفصلة وغير المنفصلة.",

  // 2. الشرح المفصل بالعربية مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية، تنقسم الأفعال عند صياغة اسم المفعول (**Partizip II**) إلى نوعين رئيسيين:\n1. **أفعال ضعيفة منتظمة (schwache Verben):** تأخذ ge- في البداية و -t في النهاية (kaufen → gekauft, machen → gemacht).\n2. **أفعال قوية وشاذة (starke / unregelmäßige Verben):** تحتفظ غالباً بالنهاية **-en**، ولكن يحدث فيها تغير صوتي في حرف العلة في جذر الفعل (Vokalwechsel / Ablaut)."
    },
    {
      type: "rule",
      content: "القاعدة الأساسية للأفعال القوية البسيطة: ge- + جذر الفعل (مع تغير صوتي غالباً) + -en\nأمثلة: sprechen → ge-sproch-en | trinken → ge-trunk-en | schreiben → ge-schrieb-en."
    },
    {
      type: "table",
      headers: ["الفعل في المصدر", "تغير حرف العلة", "اسم المفعول (Partizip II)", "المعنى بالعربية"],
      rows: [
        ["schreiben", "ei → ie", "geschrieben", "كتب"],
        ["bleiben", "ei → ie", "geblieben", "بقي"],
        ["trinken", "i → u", "getrunken", "شرب"],
        ["finden", "i → u", "gefunden", "وجد"],
        ["sprechen", "e → o", "gesprochen", "تحدث"],
        ["helfen", "e → o", "geholfen", "ساعد"],
        ["sehen", "e → e (بدون تغير)", "gesehen", "رأى"],
        ["schlafen", "a → a (بدون تغير)", "geschlafen", "نام"],
        ["essen", "e → e (إضافة g إضافية)", "gegessen", "أكل"]
      ]
    },
    {
      type: "text",
      content: "هناك 3 فئات هامة جداً لا تتبع القاعدة البسيطة، ويجب الانتباه إليها دائماً:\n\n**1. الأفعال المنتهية بـ -ieren:**\nهذه الأفعال (ومعظمها من أصل أجنبي) **لا تأخذ ge- أبداً** وتنتهي دائماً بـ **-t**:\n• studieren → **studiert** (درس في الجامعة)\n• reparieren → **repariert** (صلّح)\n• telefonieren → **telefoniert** (اتصل هاتفياً)\n• fotografieren → **fotografiert** (التقط صوراً)\n• reservieren → **reserviert** (حجز)\n\n**2. الأفعال ذات البادئات غير المنفصلة (Untrennbare Präfixe):**\nالبادئات الثمانية: **be-, ge-, emp-, ent-, er-, ver-, zer-, miss-** لا تنفصل عن الفعل، و**لا تأخذ ge- مطلقاً** في اسم المفعول:\n• verstehen → **verstanden** (فهم)\n• bekommen → **bekommen** (استلم/حصل على)\n• gefallen → **gefallen** (أعجب)\n• verlieren → **verloren** (فقد/خسر)\n• vergessen → **vergessen** (نسي)\n\n**3. الأفعال ذات البادئات المنفصلة (Trennbare Verben):**\nإذا كان الفعل يبدأ ببادئة منفصلة (auf-, an-, mit-, ein-, ab-...)، فإننا **نحشر -ge- في المنتصف** بين البادئة وأصل الفعل:\n• aufstehen → auf**ge**standen (استيقظ/نهض)\n• anrufen → an**ge**rufen (اتصل هاتفياً)\n• mitbringen → mit**ge**bracht (أحضر معه)\n• einkaufen → ein**ge**kauft (تسوق)"
    },
    {
      type: "table",
      headers: ["نوع الفعل", "قاعدة صياغة Partizip II", "مثال بالمصدر", "اسم المفعول (Partizip II)"],
      rows: [
        ["فعل قوي بسيط", "ge- + جذر + -en", "trinken", "getrunken"],
        ["فعل ينتهي بـ -ieren", "جذر + -t (بدون ge-)", "studieren", "studiert"],
        ["بادئة غير منفصلة (ver-, be-...)", "بادئة + جذر + -en (بدون ge-)", "verstehen", "verstanden"],
        ["بادئة منفصلة (auf-, an-...)", "بادئة + -ge- + جذر + -en/-t", "aufstehen", "aufgestanden"],
        ["أفعال مختلطة شاذة (gemischt)", "ge- + جذر متغير + -t", "bringen / denken", "gebracht / gedacht"]
      ]
    },
    {
      type: "rule",
      content: "احفظ البادئات غير المنفصلة بهذه العبارة: (Be- Ge- Emp- Ent- Er- Ver- Zer- Miss) لا تقبل ge- أبداً في أولها!"
    }
  ],

  // 3. الأمثلة (9 أمثلة مع إبراز القاعدة والصوت والترجمة)
  examples: [
    {
      de: "Er hat den ganzen Tag nur kaltes Wasser **getrunken**.",
      ar: "شرب طوال اليوم ماءً بارداً فقط.",
      highlight: "getrunken",
      audio: true,
      note: "trinken ← getrunken (تحول الحرف الصوتي i → u)"
    },
    {
      de: "Hast du gestern mit deinem neuen Chef **gesprochen**?",
      ar: "هل تحدثتَ بالأمس مع مديرك الجديد؟",
      highlight: "gesprochen",
      audio: true,
      note: "sprechen ← gesprochen (تحول الحرف الصوتي e → o)"
    },
    {
      de: "Ich habe gestern einen langen Brief an meine Familie **geschrieben**.",
      ar: "كتبتُ بالأمس رسالة طويلة إلى عائلتي.",
      highlight: "geschrieben",
      audio: true,
      note: "schreiben ← geschrieben (تحول الحرف الصوتي ei → ie)"
    },
    {
      de: "Am Sonntag haben wir bis zehn Uhr **geschlafen**.",
      ar: "يوم الأحد نمنا حتى الساعة العاشرة.",
      highlight: "geschlafen",
      audio: true,
      note: "schlafen ← geschlafen (فعل قوي حافظ على حرف a)"
    },
    {
      de: "Mein Bruder hat fünf Jahre lang Medizin in Heidelberg **studiert**.",
      ar: "درس أخي الطب لمدة خمس سنوات في هايدلبرغ.",
      highlight: "studiert",
      audio: true,
      note: "studieren ينتهي بـ -ieren ← لا يأخذ ge- وينتهي بـ -t"
    },
    {
      de: "Ich habe die schwierige Grammatikregel sofort **verstanden**.",
      ar: "فهمتُ القاعدة النحوية الصعبة فوراً.",
      highlight: "verstanden",
      audio: true,
      note: "verstehen يبدأ ببادئة غير منفصلة ver- ← لا يأخذ ge-"
    },
    {
      de: "Hast du meine Einladung per E-Mail **bekommen**?",
      ar: "هل استلمتَ دعوتي عبر البريد الإلكتروني؟",
      highlight: "bekommen",
      audio: true,
      note: "bekommen يبدأ بـ be- غير المنفصلة ← لا يتغير في Partizip II"
    },
    {
      de: "Thomas ist heute Morgen schon um fünf Uhr **aufgestanden**.",
      ar: "استيقظ توماس هذا الصباح عند الساعة الخامسة.",
      highlight: "aufgestanden",
      audio: true,
      note: "aufstehen فعل منفصل ← توضع -ge- في المنتصف: auf-ge-standen"
    },
    {
      de: "Sie hat einen leckeren Kuchen zur Geburtstagsparty **mitgebracht**.",
      ar: "أحضرت معها كعكة لذيذة إلى حفلة عيد الميلاد.",
      highlight: "mitgebracht",
      audio: true,
      note: "mitbringen فعل منفصل مختلط ← mit-ge-bracht"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "احذر من فخ قياس اسم المفعول على الأفعال المنتظمة: لا تقل أبداً 'geschreibt' أو 'gesprecht'؛ فالأفعال القوية تنتهي بـ -en ويتغير حرف العلة فيها (geschrieben, gesprochen). احفظ كل فعل قوي مع تصريفه للماضي كحزمة واحدة.",
    "الخطأ الشائع مع الأفعال المنتهية بـ -ieren: الكثير من المتعلمين العرب يضيفون ge- بدافع العادة فيقولون 'gestudiert' أو 'getelefoniert'. تذكر القاعدة: أي فعل ينتهي بـ -ieren ممنوع من ge- تماماً (studiert, telefoniert, repariert).",
    "انتبه لموقع ge- في الأفعال ذات البادئات: إذا كانت البادئة غير منفصلة مثل ver- أو be- فلا نضع ge- إطلاقاً (verstanden وليس geverstanden). أما إذا كانت منفصلة مثل auf- أو an- فإن ge- تأتي في المنتصف (aufgestanden, angerufen)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "صيغة اسم المفعول للأفعال القوية: ge- + جذر الفعل (مع تغير حرف العلة) + -en (مثل: getrunken, gesprochen).",
    "الأفعال المنتهية بـ -ieren لا تأخذ ge- أبداً وتختم بـ -t (مثل: studiert, repariert).",
    "البادئات غير المنفصلة (be-, ver-, er-, ent-, ge-, zer-, miss-) لا تأخذ ge- أبداً (مثل: verstanden, bekommen).",
    "الأفعال المنفصلة تحشر -ge- في الوسط بين البادئة والجذر (مثل: aufgestanden, mitgebracht, angerufen).",
    "الأفعال المختلطة الشاذة تغير حرف العلة لكنها تأخذ نهاية -t (مثل: gebracht, gedacht, gewusst)."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "das Partizip II", plural: "-", ar: "اسم المفعول", article: "das", example: "Das Partizip II steht am Satzende." },
    { de: "die Vorsilbe", plural: "die Vorsilben", ar: "البادئة (Präfix)", article: "die", example: "ver- ist eine untrennbare Vorsilbe." },
    { de: "unregelmäßig", plural: "-", ar: "شاذ / غير منتظم", article: "", example: "Das Verb ist unregelmäßig." },
    { de: "studieren", plural: "-", ar: "يدرس بالجامعة (Partizip: studiert)", article: "", example: "Er hat in Berlin studiert." },
    { de: "verstehen", plural: "-", ar: "يفهم (Partizip: verstanden)", article: "", example: "Ich habe alles verstanden." },
    { de: "bekommen", plural: "-", ar: "يحصل على / يستلم (bekommen)", article: "", example: "Ich habe ein Geschenk bekommen." },
    { de: "aufstehen", plural: "-", ar: "يستيقظ / ينهض (aufgestanden)", article: "", example: "Wann bist du aufgestanden?" },
    { de: "mitbringen", plural: "-", ar: "يحضر معه (mitgebracht)", article: "", example: "Hast du Wasser mitgebracht?" }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "ما هو اسم المفعول (Partizip II) الصحيح للفعل «sprechen»؟",
      options: ["gesprecht", "gesprochen", "gesprechtet", "gesprechen"],
      answer: 1,
      correct: 1,
      correct: 1,
      explanation: "الفعل sprechen فعل قوي يتحول حرف العلة فيه من e إلى o ويختم بـ -en: gesprochen."
    },
    {
      type: "fill-blank",
      question: "اكتب صيغة Partizip II الصحيحة للفعل بين قوسين (studieren):",
      sentence: "Mein Bruder hat fünf Jahre in Wien ___.",
      answer: "studiert",
      accept: ["studiert"],
      options: ["studiert", "gestudiert", "gestudieren"],
      answer: "studiert",
      explanation: "الأفعال المنتهية بـ -ieren لا تأخذ ge- وتنتهي بـ -t، فالصحيح: studiert."
    },
    {
      type: "word-order",
      question: "رتب الجملة مراعياً وضع اسم المفعول في نهاية الجملة:",
      words: ["Er", "ist", "um", "sechs", "Uhr", "aufgestanden"],
      answer: "Er ist um sechs Uhr aufgestanden",
      correct: "Er ist um sechs Uhr aufgestanden",
      correct: "Er ist um sechs Uhr aufgestanden",
      explanation: "ترتيب صحيح: الفاعل (Er) + المساعد (ist) + الظرف (um sechs Uhr) + اسم المفعول في النهاية (aufgestanden)."
    },
    {
      type: "multiple-choice",
      question: "أي من الأفعال التالية يبدأ ببادئة غير منفصلة ولا يأخذ ge- في Partizip II؟",
      options: ["verstehen", "aufstehen", "einkaufen", "mitkommen"],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "البادئة ver- بادئة غير منفصلة (untrennbar)، واسم المفعول منها هو verstanden بدون ge-."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في اسم المفعول بالجملة التالية:",
      text: "Er hat gestern das Auto gerepariert.",
      sentence: "Er hat gestern das Auto gerepariert.",
      incorrect: "Er hat gestern das Auto gerepariert.",
      answer: "Er hat gestern das Auto repariert.",
      correct: "Er hat gestern das Auto repariert.",
      corrected: "Er hat gestern das Auto repariert.",
      accept: ["Er hat gestern das Auto repariert", "Er hat gestern das Auto repariert."],
      explanation: "الفعل reparieren ينتهي بـ -ieren، لذلك لا يأخذ البادئة ge- أبداً: repariert."
    },
    {
      type: "match",
      question: "طابق كل فعل في المصدر مع اسم المفعول (Partizip II) الصحيح له:",
      pairs: [
        { left: "schreiben", right: "geschrieben" },
        { left: "trinken", right: "getrunken" },
        { left: "essen", right: "gegessen" },
        { left: "verstehen", right: "verstanden" }
      ],
      explanation: "schreiben → geschrieben, trinken → getrunken, essen → gegessen, verstehen → verstanden."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: لقد كتبتُ رسالة.",
      text: "لقد كتبتُ رسالة.",
      answer: "Ich habe einen Brief geschrieben.",
      answer: "Ich habe einen Brief geschrieben.",
      accept: [
        "Ich habe einen Brief geschrieben",
        "Ich habe einen Brief geschrieben."
      ],
      explanation: "اسم المفعول من schreiben هو geschrieben (مع تحول الحرف الصوتي ei إلى ie)، وBrief مذكر يأخذ einen في Akkusativ."
    },
    {
      type: "fill-blank",
      question: "اكتب صيغة Partizip II للفعل (bekommen):",
      sentence: "Hast du meine E-Mail gestern ___?",
      answer: "bekommen",
      accept: ["bekommen"],
      options: ["bekommen", "gebekommen", "bekommt"],
      answer: "bekommen",
      explanation: "الفعل bekommen يبدأ بالبادئة غير المنفصلة be- ويبقى كما هو في اسم المفعول: bekommen."
    },
    {
      type: "error-correction",
      question: "صحح موضع البادئة ge- في الفعل المنفصل التالي:",
      text: "Ich bin heute früh geaufstanden.",
      sentence: "Ich bin heute früh geaufstanden.",
      incorrect: "Ich bin heute früh geaufstanden.",
      answer: "Ich bin heute früh aufgestanden.",
      correct: "Ich bin heute früh aufgestanden.",
      corrected: "Ich bin heute früh aufgestanden.",
      accept: ["Ich bin heute früh aufgestanden", "Ich bin heute früh aufgestanden."],
      explanation: "في الأفعال المنفصلة (trennbare Verben)، توضع -ge- بين البادئة وأصل الفعل: auf-ge-standen."
    },
    {
      type: "multiple-choice",
      question: "ما هو اسم المفعول الصحيح للفعل المختلط «bringen»؟",
      options: ["gebracht", "gebringt", "gebrungen", "bringen"],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "الفعل bringen من الأفعال المختلطة الشاذة؛ يتغير حرف العلة ويأخذ النهاية -t: gebracht."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة متعددة الخيارات)
  quiz: [
    {
      type: "multiple-choice",
      question: "Welches Partizip II ist richtig für «helfen»?",
      options: ["geholfen", "gehelft", "gehelfen"],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "الفعل helfen يتحول صوتياً من e إلى o ويختم بـ -en: geholfen."
    },
    {
      type: "multiple-choice",
      question: "Was ist das Partizip II von «organisieren»?",
      options: ["organisiert", "georganisiert", "georganisieret"],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "الأفعال المنتهية بـ -ieren لا تأخذ ge- مطلقاً: organisiert."
    },
    {
      type: "multiple-choice",
      question: "Welches Verb behält im Partizip II die gleiche Form wie der Infinitiv?",
      options: ["bekommen", "verstehen", "fahren"],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "الفعل bekommen في اسم المفعول يبقى bekommen بنفس شكل المصدر."
    },
    {
      type: "multiple-choice",
      question: "Welche Form ist richtig für das trennbare Verb «anrufen»?",
      options: ["angerufen", "geanruft", "anruft"],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "الأفعال المنفصلة تحشر -ge- بين البادئة وجذر الفعل: an-ge-rufen."
    },
    {
      type: "multiple-choice",
      question: "Welcher Satz ist grammatisch völlig korrekt?",
      options: [
        "Ich habe den Film gestern gesehen.",
        "Ich habe den Film gestern geseht.",
        "Ich habe gesehen den Film gestern."
      ],
      answer: 0,
      correct: 0,
      correct: 0,
      explanation: "sehen فعل قوي اسم مفعوله gesehen ويأتي في نهاية الجملة تماماً."
    }
  ]
};

window.lessons = window.LESSONS;
