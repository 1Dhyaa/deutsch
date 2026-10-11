// data/lessons/a2-1/13-praepositionen-akkusativ.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-13"] = {
  id: "a2-1-13",
  level: "a2-1",
  order: 13,
  slug: "praepositionen-akkusativ",
  title: {
    de: "Präpositionen mit Akkusativ",
    ar: "حروف الجر التي تفرض حالة النصب (Akkusativ)"
  },
  tags: ["grammatik", "praepositionen", "akkusativ", "a2"],

  // 1. الهدف
  goal: "ستتعلم في هذا الدرس حروف الجر الألمانية الستة التي تفرض حالة النصب (Akkusativ) دائماً وبدون أي استثناء (bis, durch, für, gegen, ohne, um)، وكيف تتغير أدوات الأسماء والضمائر بعدها.",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية، هناك مجموعة خاصة من حروف الجر تسمى **حروف الجر الثابتة مع حالة النصب** (Präpositionen mit Akkusativ). القاعدة الذهبية هنا: **أي اسم أو ضمير يأتي بعد هذه الحروف يكون دائماً في حالة النصب (Akkusativ)**، بغض النظر عن معنى الجملة أو نوع الفعل!"
    },
    {
      type: "rule",
      content: "يمكنك حفظ حروف الجر الستة بسهولة عبر الكلمة المفتاحية المختصرة **DOGFU** أو **FUDGE-B**:<br>• **B**is (حتى)<br>• **D**urch (عبر / من خلال)<br>• **F**ür (لأجل / لـ)<br>• **G**egen (ضد / نحو / قرابة)<br>• **O**hne (بدون)<br>• **U**m (حول / في تمام الساعة)"
    },
    {
      type: "table",
      headers: ["حرف الجر", "المعنى الأساسي", "مثال توضيحي", "الترجمة بالعربية"],
      rows: [
        ["bis", "حتى (زمان أو مكان)", "Der Zug fährt bis Hamburg.", "القطار يسير حتى هامبورغ."],
        ["durch", "عبر / من خلال", "Wir gehen durch den Park.", "نحن نعبر الحديقة."],
        ["für", "لـ / من أجل / لصالح", "Das Geschenk ist für meinen Vater.", "الهدية من أجل والدي."],
        ["gegen", "ضد / باتجاه / قرابة (وقت)", "Er nimmt eine Tablette gegen Kopfschmerzen.", "يتناول حبة دواء ضد الصداع."],
        ["ohne", "بدون / من غير", "Ich trinke Kaffee ohne Zucker.", "أشرب القهوة بدون سكر."],
        ["um", "حول / في تمام (الساعة)", "Wir sitzen um den Tisch.", "نجلس حول الطاولة."]
      ]
    },
    {
      type: "text",
      content: "تذكر دائماً ما الذي يتغير في حالة النصب (**Akkusativ**): التغيير الظاهر الوحيد يطرأ على **المذكر (Maskulin)** فقط، بينما المؤنث والمحايد والجمع تبقى أدواتها دون تغيير:"
    },
    {
      type: "table",
      headers: ["الجنس / النوع", "حالة الرفع (Nominativ)", "حالة النصب بعد حرف الجر (Akkusativ)", "مثال مع für"],
      rows: [
        ["المذكر (Maskulin)", "der / ein / mein", "den / einen / meinen", "für **den** / **meinen** Bruder"],
        ["المحايد (Neutral)", "das / ein / mein", "das / ein / mein", "für **das** / **mein** Kind"],
        ["المؤنث (Feminin)", "die / eine / meine", "die / eine / meine", "für **die** / **meine** Mutter"],
        ["الجمع (Plural)", "die / - / meine", "die / - / meine", "für **die** / **meine** Freunde"]
      ]
    },
    {
      type: "text",
      content: "الضمائر الشخصية بعد حروف الجر هذه تأتي أيضاً في حالة النصب (Akkusativ):"
    },
    {
      type: "table",
      headers: ["الضمير الأصلي", "في النصب (Akkusativ)", "مثال مع حرف الجر", "المعنى"],
      rows: [
        ["ich", "mich", "ohne mich", "بدوني"],
        ["du", "dich", "für dich", "من أجلك / لكَ"],
        ["er", "ihn", "gegen ihn", "ضده"],
        ["sie (هي)", "sie", "für sie", "من أجلها"],
        ["es", "es", "durch es", "من خلاله"],
        ["wir", "uns", "ohne uns", "بدوننا"],
        ["ihr", "euch", "für euch", "لأجلكم"],
        ["sie / Sie", "sie / Sie", "ohne sie / für Sie", "بدونهم / لحضرتك"]
      ]
    },
    {
      type: "rule",
      content: "إدغامات شائعة (Präposition + Artikel):<br>• durch + das = **durchs** (Wir gehen durchs Fenster).<br>• für + das = **fürs** (Das ist fürs Kind).<br>• um + das = **ums** (Der Weg führt ums Haus)."
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Das Geschenk ist für **meinen besten Freund**.",
      ar: "الهدية من أجل أعز أصدقائي.",
      highlight: "meinen besten Freund",
      audio: true,
      note: "für يفرض Akkusativ: der Freund ← meinen Freund"
    },
    {
      de: "Wir spazieren heute durch **den grünen Park**.",
      ar: "نتنزه اليوم عبر الحديقة الخضراء.",
      highlight: "den grünen Park",
      audio: true,
      note: "durch يفرض Akkusativ: der Park ← den Park"
    },
    {
      de: "Ohne **meinen Reisepass** darf ich nicht fliegen.",
      ar: "بدون جواز سفري لا يُسمح لي بالسفر جواً.",
      highlight: "meinen Reisepass",
      audio: true,
      note: "ohne يفرض Akkusativ: der Reisepass ← meinen Reisepass"
    },
    {
      de: "Die Kinder laufen fröhlich um **den runden Tisch**.",
      ar: "الأطفال يركضون بمرح حول الطاولة المستديرة.",
      highlight: "den runden Tisch",
      audio: true,
      note: "um يفرض Akkusativ: der Tisch ← den Tisch"
    },
    {
      de: "Er nimmt eine Tablette gegen **die starken Kopfschmerzen**.",
      ar: "هو يتناول حبة دواء ضد الصداع الشديد.",
      highlight: "die starken Kopfschmerzen",
      audio: true,
      note: "gegen يفرض Akkusativ: die Kopfschmerzen (جمع) ← die"
    },
    {
      de: "Ich kann diese schwere Aufgabe nicht ohne **dich** lösen.",
      ar: "لا أستطيع حل هذه المهمة الصعبة بدونك.",
      highlight: "dich",
      audio: true,
      note: "ohne + du ← dich (ضمير شخصي في النصب)"
    },
    {
      de: "Wir treffen uns heute Abend um **acht Uhr**.",
      ar: "سنلتقي مساء اليوم في تمام الساعة الثامنة.",
      highlight: "acht Uhr",
      audio: true,
      note: "um مع الأوقات تعني تمام الساعة بدقة"
    },
    {
      de: "Dieser warme Pullover ist für **ihn**.",
      ar: "هذه الكنزة الصوفية الدافئة من أجله.",
      highlight: "ihn",
      audio: true,
      note: "für + er ← ihn (ضمير الغائب المذكر في النصب)"
    },
    {
      de: "Der Zug fährt nur bis **den nächsten Bahnhof**.",
      ar: "القطار يسير فقط حتى المحطة التالية.",
      highlight: "den nächsten Bahnhof",
      audio: true,
      note: "bis يفرض Akkusativ: der Bahnhof ← den Bahnhof"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في العربية نقول «بدونِ فلانٍ» أو «من غيرِ أخي» بحالة الجر، لكن في الألمانية ohne تفرض حالة النصب دائماً: نقول ohne mich وليس ohne mir، ونقول ohne meinen Vater وليس ohne meinem Vater.",
    "التغيير الظاهر الوحيد في أدوات الأسماء يقع على المذكر المفرد (der ← den / ein ← einen / mein ← meinen). أما المؤنث (die/eine) والمحايد (das/ein) والجمع (die) فلا تتغير أدواتها شكلياً في Akkusativ.",
    "فرّق بين حرفي الوقت um و gegen: الحرف um يعني «في تمام الساعة تماماً» (um 8 Uhr = 8:00 تماماً)، بينما gegen يعني «قرابة / حوالي» (gegen 8 Uhr = حوالي الثامنة إلا ربع أو الثامنة والربع)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "حروف الجر الستة مع Akkusativ هي: bis, durch, für, gegen, ohne, um (مختصرة في DOGFU).",
    "الاسم أو الضمير بعد هذه الحروف يكون منصوباً دائماً بنسبة 100% ولا يوجد أي استثناء.",
    "المذكر فقط هو الذي يتغير: der → den, ein → einen, mein → meinen, kein → keinen.",
    "الضمائر الشخصية في النصب: mich, dich, ihn (هو المذكر!), sie, es, uns, euch, sie, Sie.",
    "إدغامات شائعة مع das: durchs (= durch das), fürs (= für das), ums (= um das)."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "der Park", plural: "die Parks", ar: "الحديقة / المنتزه", article: "der", example: "Wir gehen durch den Park." },
    { de: "der Reisepass", plural: "die Reisepässe", ar: "جواز السفر", article: "der", example: "Ich reise nicht ohne meinen Reisepass." },
    { de: "das Geschenk", plural: "die Geschenke", ar: "الهدية", article: "das", example: "Das ist ein Geschenk für dich." },
    { de: "die Tablette", plural: "die Tabletten", ar: "حبة الدواء / القرص", article: "die", example: "Nimm eine Tablette gegen das Fieber!" },
    { de: "die Ecke", plural: "die Ecken", ar: "الزاوية / المنعطف", article: "die", example: "Das Café liegt gleich um die Ecke." },
    { de: "der Schmerz", plural: "die Schmerzen", ar: "الألم / الوجع", article: "der", example: "Tee hilft gegen den Schmerz." },
    { de: "der Wald", plural: "die Wälder", ar: "الغابة", article: "der", example: "Der Weg führt durch den dunklen Wald." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Das Geschenk ist für ___ Bruder.",
      options: ["meinen", "meinem", "meiner", "mein"],
      correct: 0,
      answer: 0,
      explanation: "حرف الجر für يتطلب Akkusativ. وكلمة der Bruder مذكر، فتتحول mein إلى meinen."
    },
    {
      type: "fill-blank",
      question: "Wir spazieren durch ___ Park.",
      sentence: "Wir spazieren durch ___ Park.",
      answer: "den",
      accept: ["den"],
      explanation: "حرف الجر durch يفرض Akkusativ دائماً. اسم der Park مذكر فيأخذ den."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (أنا لا أشرب الشاي بدون سكر)",
      words: ["Ich", "trinke", "Tee", "ohne", "Zucker", "."],
      correct: "Ich trinke Tee ohne Zucker .",
      answer: "Ich trinke Tee ohne Zucker .",
      accept: ["Ich trinke Tee ohne Zucker.", "Ich trinke Tee ohne Zucker ."],
      explanation: "الفاعل (Ich) + الفعل (trinke) + المفعول (Tee) + شبه الجملة مع حرف الجر (ohne Zucker)."
    },
    {
      type: "multiple-choice",
      question: "Kommst du ohne ___ zur Party?",
      options: ["ihn", "ihm", "er", "sein"],
      correct: 0,
      answer: 0,
      explanation: "حرف الجر ohne يتطلب ضمير نصب (Akkusativ)، والضمير المقابل لـ er في النصب هو ihn."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Das Buch ist für mein Vater.)",
      sentence: "Das Buch ist für mein Vater.",
      corrected: "Das Buch ist für meinen Vater.",
      answer: "Das Buch ist für meinen Vater.",
      accept: ["Das Buch ist für meinen Vater.", "Das Buch ist für meinen Vater"],
      explanation: "كلمة der Vater مذكر، وبعد حرف الجر für يجب أن تكون في حالة Akkusativ فتصبح meinen Vater."
    },
    {
      type: "match",
      question: "طابق كل حرف جر مع معناه بالعربية:",
      pairs: [
        { left: "für", right: "من أجل / لـ" },
        { left: "ohne", right: "بدون / من غير" },
        { left: "durch", right: "عبر / من خلال" },
        { left: "gegen", right: "ضد / نحو" }
      ]
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (نحن نجلس حول الطاولة.)",
      from: "نحن نجلس حول الطاولة.",
      answer: "Wir sitzen um den Tisch.",
      accept: ["Wir sitzen um den Tisch.", "Wir sitzen um den Tisch"],
      explanation: "حول الطاولة = um den Tisch (um تفرض Akkusativ، و der Tisch تصبح den Tisch)."
    },
    {
      type: "fill-blank",
      question: "Hast du etwas gegen ___ Kopfschmerzen?",
      sentence: "Hast du etwas gegen ___ Kopfschmerzen?",
      answer: "die",
      accept: ["die"],
      explanation: "كلمة die Kopfschmerzen جمع، وأداة الجمع في حالة Akkusativ تبقى die دون تغيير."
    },
    {
      type: "multiple-choice",
      question: "Der Zug fährt bis ___ Bahnhof.",
      options: ["den nächsten", "dem nächsten", "der nächste", "das nächste"],
      correct: 0,
      answer: 0,
      explanation: "حرف الجر bis يفرض حالة Akkusativ: der Bahnhof مذكر فيأخذ den nächsten."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich kann nicht ohne dir leben.)",
      sentence: "Ich kann nicht ohne dir leben.",
      corrected: "Ich kann nicht ohne dich leben.",
      answer: "Ich kann nicht ohne dich leben.",
      accept: ["Ich kann nicht ohne dich leben.", "Ich kann nicht ohne dich leben"],
      explanation: "حرف الجر ohne يتطلب Akkusativ (dich) وليس Dativ (dir)."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Welche Präposition verlangt IMMER den Akkusativ?",
      options: ["für", "mit", "von", "bei"],
      correct: 0,
      answer: 0,
      explanation: "حرف الجر für ينتمي لمجموعة حروف النصب الدائمة (bis, durch, für, gegen, ohne, um)، بينما البقية تتطلب Dativ."
    },
    {
      type: "multiple-choice",
      question: "Wir fahren durch ___ langen Tunnel.",
      options: ["den", "dem", "der", "das"],
      correct: 0,
      answer: 0,
      explanation: "اسم der Tunnel مذكر، وبعد durch (التي تفرض Akkusativ) يتحول der إلى den."
    },
    {
      type: "multiple-choice",
      question: "Ist das Geschenk für ___?",
      options: ["mich", "mir", "ich", "mein"],
      correct: 0,
      answer: 0,
      explanation: "بعد für نستخدم ضمير المتكلم في حالة النصب (mich) وليس Dativ (mir)."
    },
    {
      type: "multiple-choice",
      question: "Treffen wir uns um ___ Uhr?",
      options: ["acht", "achten", "achter", "achtes"],
      correct: 0,
      answer: 0,
      explanation: "نقول ببساطة um acht Uhr للتعبير عن تمام الساعة الثامنة."
    },
    {
      type: "multiple-choice",
      question: "Er geht nie ohne ___ Regenschirm aus dem Haus.",
      options: ["seinen", "seinem", "seiner", "sein"],
      correct: 0,
      answer: 0,
      explanation: "اسم der Regenschirm مذكر، وبعد ohne (Akkusativ) نضع seinen."
    }
  ]
};
window.lessons = window.LESSONS;
