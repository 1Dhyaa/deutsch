// data/lessons/a2-1/15-lokale-praepositionen-1.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-15"] = {
  id: "a2-1-15",
  level: "a2-1",
  order: 15,
  slug: "lokale-praepositionen-1",
  title: {
    de: "Lokale Präpositionen (1) / Wo bist du?",
    ar: "حروف الجر المكانية (1): أين أنت؟ (السكون والموقع)"
  },
  tags: ["grammatik", "praepositionen", "lokal", "wo", "dativ", "a2"],

  // 1. الهدف
  goal: "ستتعلم في هذا الدرس كيفية الإجابة بدقة عن السؤال «أين أنت؟» (?Wo bist du) باستخدام حروف الجر المكانية التي تفرض حالة الجر Dativ (in, an, auf, bei)، والتمييز الواضح بينها، مع التعبير الثابت «zu Hause».",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "عندما نسأل بأداة الاستفهام **Wo?** (أين؟)، فإننا نسأل عن **الموقع، الثبات، أو السكون** (Position / Stillstand). القاعدة الذهبية الأساسية والمطلقة هي: **السؤال بـ ?Wo يتطلب دائماً حالة الجر (Dativ)**!"
    },
    {
      type: "rule",
      content: "المعادلة الذهبية للموقع:<br>• السؤال: **?Wo** (أين؟)<br>• المعنى: ثبات وموقع (Keine Bewegung / Ort)<br>• الحالة الإعرابية: **Dativ** دائماً (dem / der / den + n)!"
    },
    {
      type: "text",
      content: "كيف تختار حرف الجر المكاني المناسب عند الإجابة عن ?Wo؟ إليك التمييز الجوهري:"
    },
    {
      type: "table",
      headers: ["حرف الجر", "متى نستخدمه؟ (المفهوم المكاني)", "أمثلة شائعة", "المعنى بالعربية"],
      rows: [
        ["in (+ Dativ)", "داخل مبنى مغلق ذي أبعاد ثلاثية، غرفة، مدينة أو دولة", "im Supermarkt, im Kino, in der Schule, in Berlin", "في السوبرماركت، في السينما، في المدرسة، في برلين"],
        ["an (+ Dativ)", "بمحاذاة مسطح مائي، شاطئ، نافذة، جدار، أو نقطة توقف محددة", "am Strand, am Meer, am Bahnhof, an der Haltestelle", "على الشاطئ، عند البحر، في محطة القطار، عند موقف الحافلة"],
        ["auf (+ Dativ)", "فوق سطح أفقي مفتوح، ساحة، شارع، أو مؤسسة عامة/عمل", "auf dem Marktplatz, auf der Straße, auf der Post, auf der Bank", "في ساحة السوق، في الشارع، في مكتب البريد، في البنك"],
        ["bei (+ Dativ)", "عند شخص، عند طبيب/حرفي، أو في شركة/مكان عمل", "beim Arzt, beim Bäcker, bei meinen Eltern, bei der Arbeit", "عند الطبيب، عند الخباز، عند والديّ، في العمل"],
        ["zu Hause", "تعبير ثابت يعني «في المنزل / في البيت»", "Ich bleibe heute zu Hause.", "سأبقى اليوم في المنزل."]
      ]
    },
    {
      type: "rule",
      content: "الإدغامات المكانية الأكثر استخداماً في الألمانية:<br>• in + dem = **im** (im Supermarkt, im Restaurant, im Park)<br>• an + dem = **am** (am Bahnhof, am Strand, am Fenster)<br>• bei + dem = **beim** (beim Arzt, beim Friseur)"
    },
    {
      type: "text",
      content: "مقارنة حاسمة: متى نستخدم in ومتى نستخدم an ومتى نستخدم auf؟"
    },
    {
      type: "table",
      headers: ["الحرف", "الصورة الذهنية", "مثال حاسم", "السبب المنطقي"],
      rows: [
        ["in", "أنت بالداخل ومحاط بجدران/حدود", "Ich bin **im** Café.", "أنت جالس داخل جدران المقهى."],
        ["an", "أنت بجوار أو بمحاذاة حافة أو ماء أو نقطة", "Ich stehe **am** Fenster / **am** Fluss.", "أنت بمحاذاة النافذة أو النهر."],
        ["auf", "أنت فوق سطح مفتوح للهواء والشارع", "Die Kinder spielen **auf** dem Spielplatz.", "الملعب مساحة أفقية مفتوحة في الهواء الطلق."]
      ]
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Wo bist du gerade? – Ich bin **im Supermarkt**.",
      ar: "أين أنت الآن؟ – أنا في السوبرماركت.",
      highlight: "im Supermarkt",
      audio: true,
      note: "im = in + dem (der Supermarkt مذكر داخل مبنى ← Dativ)"
    },
    {
      de: "Wir warten schon seit zwanzig Minuten **am Bahnhof**.",
      ar: "نحن ننتظر منذ عشرين دقيقة في محطة القطار.",
      highlight: "am Bahnhof",
      audio: true,
      note: "am = an + dem (المحطات ونقاط المواصلات تأخذ an + Dativ)"
    },
    {
      de: "Im Sommer liegen viele Touristen **am Strand**.",
      ar: "في الصيف يستلقي العديد من السياح على الشاطئ.",
      highlight: "am Strand",
      audio: true,
      note: "الشواطئ والمسطحات المائية تأخذ دائماً an + Dativ: am Strand"
    },
    {
      de: "Meine Mutter kauft frisches Gemüse **auf dem Markt**.",
      ar: "أمي تشتري خضاراً طازجة في السوق (ساحة السوق).",
      highlight: "auf dem Markt",
      audio: true,
      note: "auf + dem Markt (الساحات والأسواق المفتوحة تأخذ auf)"
    },
    {
      de: "Der Patient sitzt im Wartezimmer **beim Arzt**.",
      ar: "المريض جالس في غرفة الانتظار عند الطبيب.",
      highlight: "beim Arzt",
      audio: true,
      note: "beim = bei + dem (الوجود عند الأشخاص والمهنيين يأخذ bei)"
    },
    {
      de: "Heute habe ich frei, ich bleibe den ganzen Tag **zu Hause**.",
      ar: "اليوم أنا في إجازة، وسأبقى طوال اليوم في المنزل.",
      highlight: "zu Hause",
      audio: true,
      note: "zu Hause تعبير ثابت يعني الوجود والاستقرار في البيت"
    },
    {
      de: "Die Schüler lernen fleißig **in der Schule**.",
      ar: "التلاميذ يدرسون بجد واجتهاد في المدرسة.",
      highlight: "in der Schule",
      audio: true,
      note: "in + die Schule (مؤنث Dativ) ← in der Schule"
    },
    {
      de: "Ich stehe an der roten Ampel und warte.",
      ar: "أنا أقف عند إشارة المرور الحمراء وأنتظر.",
      highlight: "an der roten Ampel",
      audio: true,
      note: "an + die Ampel (مؤنث Dativ) ← an der Ampel"
    },
    {
      de: "Er arbeitet von morgens bis abends **bei der Bank**.",
      ar: "هو يعمل من الصباح حتى المساء لدى البنك.",
      highlight: "bei der Bank",
      audio: true,
      note: "العمل لدى مؤسسة أو شركة يأخذ bei + Dativ: bei der Bank"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "التعبير عن «في المنزل»: في العربية نقول «أنا في البيت»، لكن في الألمانية لا نقول *in dem Haus* إذا كنا نقصد بيتنا، بل نستخدم المصطلح الثابت المشهور: **Ich bin zu Hause**.",
    "الفرق بين am Strand و im Meer: عندما تقول *am Strand* أو *am Meer* فأنت مسترخٍ بجانب الماء أو على الشاطئ (an بمحاذاة). أما إذا قلت *im Meer* فهذا يعني أنك تسبح حرفياً داخل الماء وأمواجه!",
    "محطات القطار ومواقف الباص: في العربية نقول «في المحطة»، أما في الألمانية فنقول دائماً: **am Bahnhof** و **an der Haltestelle** لأنك تقف عند نقطة وصول وخط سير القطار أو الحافلة."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "السؤال بـ Wo? (أين؟) يعني موقعاً وسكوناً ويتطلب دائماً حالة الجر Dativ.",
    "داخل مبنى أو مكان مغلق: in + Dativ (الإدغام: im).",
    "عند شاطئ أو ماء أو نقطة انتظار: an + Dativ (الإدغام: am).",
    "فوق ساحة مفتوحة أو سوق أو شارع: auf + Dativ (auf dem Markt).",
    "عند شخص أو حرفي أو في العمل: bei + Dativ (beim Arzt / bei der Arbeit).",
    "الوجود في المنزل له تعبير ثابت خاص: zu Hause."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "der Bahnhof", plural: "die Bahnhöfe", ar: "محطة القطار", article: "der", example: "Ich warte am Bahnhof auf dich." },
    { de: "der Strand", plural: "die Strände", ar: "الشاطئ", article: "der", example: "Wir verbringen den Urlaub am Strand." },
    { de: "der Markt", plural: "die Märkte", ar: "السوق (الساحة)", article: "der", example: "Auf dem Markt gibt es frisches Obst." },
    { de: "die Haltestelle", plural: "die Haltestellen", ar: "موقف الحافلة", article: "die", example: "Der Bus hält an der nächsten Haltestelle." },
    { de: "die Post", plural: "-", ar: "مكتب البريد", article: "die", example: "Er arbeitet auf der Post." },
    { de: "die Ampel", plural: "die Ampeln", ar: "إشارة المرور", article: "die", example: "Das Auto wartet an der Ampel." },
    { de: "der Supermarkt", plural: "die Supermärkte", ar: "السوبرماركت", article: "der", example: "Ich kaufe im Supermarkt ein." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Wo bist du? – Ich bin gerade ___ Supermarkt.",
      options: ["im", "ins", "am", "ans"],
      correct: 0,
      answer: 0,
      explanation: "السؤال بـ Wo؟ يعني موقعاً داخل مبنى (Dativ): in + dem Supermarkt تدغم إلى im Supermarkt."
    },
    {
      type: "fill-blank",
      question: "Mein Bruder wartet ___ Bahnhof auf den Zug.",
      sentence: "Mein Bruder wartet ___ Bahnhof auf den Zug.",
      answer: "am",
      accept: ["am", "an dem"],
      explanation: "نقطة المحطة تأخذ an + Dativ: an + dem Bahnhof تدغم إلى am Bahnhof."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (أنا اليوم في المنزل طوال اليوم)",
      words: ["Ich", "bin", "heute", "den", "ganzen", "Tag", "zu", "Hause", "."],
      correct: "Ich bin heute den ganzen Tag zu Hause .",
      answer: "Ich bin heute den ganzen Tag zu Hause .",
      accept: ["Ich bin heute den ganzen Tag zu Hause.", "Ich bin heute den ganzen Tag zu Hause ."],
      explanation: "الفاعل (Ich) + الفعل (bin) + الظرف الزمني (heute den ganzen Tag) + التعبير المكاني الثابت (zu Hause)."
    },
    {
      type: "multiple-choice",
      question: "Im Sommer liegen wir am liebsten ___ Strand.",
      options: ["am", "im", "auf", "an"],
      correct: 0,
      answer: 0,
      explanation: "الشاطئ مسطح مائي وبمحاذاة البحر، ويأخذ دائماً am Strand (an + dem)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich bin in Hause und sehe fern.)",
      sentence: "Ich bin in Hause und sehe fern.",
      corrected: "Ich bin zu Hause und sehe fern.",
      answer: "Ich bin zu Hause und sehe fern.",
      accept: ["Ich bin zu Hause und sehe fern.", "Ich bin zu Hause und sehe fern"],
      explanation: "التعبير الصحيح للوجود في المنزل هو zu Hause وليس in Hause."
    },
    {
      type: "match",
      question: "طابق المكان مع حرف الجر المناسب في حالة الثبات (Wo?):",
      pairs: [
        { left: "Kino (داخل مبنى)", right: "im Kino" },
        { left: "Strand (شاطئ وماء)", right: "am Strand" },
        { left: "Markt (ساحة مفتوحة)", right: "auf dem Markt" },
        { left: "Arzt (عند شخص)", right: "beim Arzt" }
      ]
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أنا عند الطبيب الآن.)",
      from: "أنا عند الطبيب الآن.",
      answer: "Ich bin jetzt beim Arzt.",
      accept: ["Ich bin jetzt beim Arzt.", "Ich bin jetzt beim Arzt", "Ich bin beim Arzt jetzt."],
      explanation: "عند الطبيب = beim Arzt (bei + dem Arzt)."
    },
    {
      type: "fill-blank",
      question: "Wir treffen uns ___ der Haltestelle.",
      sentence: "Wir treffen uns ___ der Haltestelle.",
      answer: "an",
      accept: ["an"],
      explanation: "موقف الحافلة die Haltestelle يأخذ an der Haltestelle في حالة Dativ."
    },
    {
      type: "multiple-choice",
      question: "Die Kinder spielen den ganzen Nachmittag ___ Spielplatz.",
      options: ["auf dem", "in dem", "an dem", "zu dem"],
      correct: 0,
      answer: 0,
      explanation: "الملعب ساحة أفقية مفتوحة في الهواء الطلق، لذا يأخذ auf dem Spielplatz."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Er arbeitet bei der Siemens.)",
      sentence: "Er arbeitet bei der Siemens.",
      corrected: "Er arbeitet bei Siemens.",
      answer: "Er arbeitet bei Siemens.",
      accept: ["Er arbeitet bei Siemens.", "Er arbeitet bei Siemens"],
      explanation: "أسماء الشركات الكبرى مثل Siemens و BMW تأتي بعد bei بدون أداة تعريف: bei Siemens."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Auf die Frage »Wo bist du?« antwortet man IMMER mit welchem Fall?",
      options: ["Dativ", "Akkusativ", "Nominativ", "Genitiv"],
      correct: 0,
      answer: 0,
      explanation: "السؤال بـ ?Wo يعبر عن الموقع والثبات ويتطلب دائماً حالة الجر Dativ."
    },
    {
      type: "multiple-choice",
      question: "Wo ist Markus? – Er ist noch ___ der Arbeit.",
      options: ["bei", "in", "an", "zu"],
      correct: 0,
      answer: 0,
      explanation: "نقول دائماً bei der Arbeit (أو auf der Arbeit بالعامية) للتعبير عن التواجد في العمل."
    },
    {
      type: "multiple-choice",
      question: "Wir sitzen abends gemütlich ___ Restaurant.",
      options: ["im", "am", "auf dem", "beim"],
      correct: 0,
      answer: 0,
      explanation: "المطعم مبنى مغلق ذو أبعاد ثلاثية: in + dem Restaurant = im Restaurant."
    },
    {
      type: "multiple-choice",
      question: "Der Zug hält gerade ___ Gleis 3.",
      options: ["an", "in", "auf", "bei"],
      correct: 0,
      answer: 0,
      explanation: "رصيف القطار وسكته تأخذ an Gleis 3 أو auf Gleis 3 (الأكثر شيوعاً auf Gleis 3 / am Bahnsteig)."
    },
    {
      type: "multiple-choice",
      question: "Wo warst du am Wochenende? – Ich war die ganze Zeit ___.",
      options: ["zu Hause", "nach Hause", "im Hause", "bei Hause"],
      correct: 0,
      answer: 0,
      explanation: "للتعبير عن التواجد في المنزل نستخدم حصراً التركيب الثابت: zu Hause."
    }
  ]
};
window.lessons = window.LESSONS;
