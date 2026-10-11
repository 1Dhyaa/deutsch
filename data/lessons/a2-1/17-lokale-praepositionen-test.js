// data/lessons/a2-1/17-lokale-praepositionen-test.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-17"] = {
  id: "a2-1-17",
  level: "a2-1",
  order: 17,
  slug: "lokale-praepositionen-test",
  title: {
    de: "Lokale Präpositionen – Test & Training",
    ar: "تدريب واختبار شامل على حروف الجر المكانية (Wo vs. Wohin)"
  },
  tags: ["grammatik", "praepositionen", "lokal", "wo", "wohin", "test", "a2"],

  // 1. الهدف
  goal: "شجرة قرار شاملة وتدريب مكثف يربط ويختبر كل ما تعلمته في حروف الجر المكانية، مع مقارنة حاسمة لا تدع مجالاً للشك بين السؤال عن الموقع (?Wo + Dativ) والسؤال عن الاتجاه (?Wohin + Akkusativ / nach / zu).",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "تُعد حروف الجر المكانية (Lokale Präpositionen) من أكثر المواضيع حضوراً في امتحانات معهد غوته (Goethe-Zertifikat A2 / Start Deutsch 2). لحل أي سؤال مكاني بثقة وسرعة وبدون تردد، اتبع هذه **الخوارزمية الذهنية ذات الخطوتين**:"
    },
    {
      type: "rule",
      content: "شجرة القرار السريعة في خطوتين:<br>• **الخطوة الأولى**: حدد نوع السؤال من معنى الفعل:<br>&nbsp;&nbsp;– هل الفعل يعبر عن **ثبات وموقع** (sein, bleiben, wohnen, arbeiten)؟ ← السؤال هو **?Wo** والحالة هي **Dativ**!<br>&nbsp;&nbsp;– هل الفعل يعبر عن **حركة وتوجه** (gehen, fahren, fliegen, reisen)؟ ← السؤال هو **?Wohin**!<br>• **الخطوة الثانية**: اختر الحرف المناسب بحسب طبيعة المكان (شخص، دولة بأداة/بلا أداة، ماء، مبنى مغلق، ساحة مفتوحة)."
    },
    {
      type: "text",
      content: "جدول المقارنة الثنائية الحاسمة بين (?Wo) و (?Wohin):"
    },
    {
      type: "table",
      headers: ["نوع الوجهة / المكان", "السؤال عن الموقع (?Wo) — حالة Dativ", "السؤال عن الاتجاه (?Wohin) — Akkusativ / nach / zu"],
      rows: [
        ["مبنى أو فضاء مغلق", "im Kino / im Supermarkt", "ins Kino / in den Supermarkt"],
        ["شاطئ أو مسطح مائي", "am Strand / am Meer", "an den Strand / ans Meer"],
        ["ساحة أو سوق مفتوح", "auf dem Markt / auf der Straße", "auf den Markt / auf die Straße"],
        ["شخص أو مهني أو طبيب", "beim Arzt / bei meinen Eltern", "zum Arzt / zu meinen Eltern"],
        ["دولة / مدينة بلا أداة", "in Berlin / in Deutschland", "nach Berlin / nach Deutschland"],
        ["دولة ذات أداة تعريف", "in der Schweiz / in der Türkei", "in die Schweiz / in die Türkei"],
        ["المنزل (البيت)", "zu Hause (أنا في البيت)", "nach Hause (أنا ذاهب للبيت)"]
      ]
    },
    {
      type: "rule",
      content: "ملخص جميع الإدغامات المكانية للحفظ المتقن:<br>• **مع Dativ (Wo?)**: in dem = **im** | an dem = **am** | bei dem = **beim** | zu dem = **zum** | zu der = **zur** | von dem = **vom**.<br>• **مع Akkusativ (Wohin?)**: in das = **ins** | an das = **ans** | auf das = **aufs**."
    },
    {
      type: "text",
      content: "أفعال ترشدك فوراً لتحديد الحالة الإعرابية:"
    },
    {
      type: "table",
      headers: ["أفعال الثبات والموقع (تطلب Wo? + Dativ)", "أفعال الحركة والانتقال (تطلب Wohin? + Akkusativ/nach/zu)"],
      rows: [
        ["sein (يكون): Ich bin im Büro.", "gehen (يذهب): Ich gehe ins Büro."],
        ["bleiben (يبقى): Wir bleiben zu Hause.", "fahren (يسافر/يقود): Wir fahren nach Hause."],
        ["wohnen (يسكن): Er wohnt in der Stadt.", "fliegen (يطير): Er fliegt in die Türkei."],
        ["arbeiten (يعمل): Sie arbeitet bei BMW.", "kommen (يأتي): Kommst du zu mir?"]
      ]
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Wo bist du? – Ich bin **im Supermarkt**.",
      ar: "أين أنت؟ – أنا في السوبرماركت (موقع / ثبات).",
      highlight: "im Supermarkt",
      audio: true,
      note: "Wo? + Dativ: in + dem = im Supermarkt"
    },
    {
      de: "Wohin gehst du? – Ich gehe **in den Supermarkt**.",
      ar: "إلى أين أنت ذاهب؟ – أنا ذاهب إلى السوبرماركت (حركة / دخول).",
      highlight: "in den Supermarkt",
      audio: true,
      note: "Wohin? + Akkusativ: in + den Supermarkt"
    },
    {
      de: "Er liegt den ganzen Tag **am Strand**.",
      ar: "هو يستلقي طوال اليوم على الشاطئ.",
      highlight: "am Strand",
      audio: true,
      note: "Wo? + Dativ: an + dem = am Strand"
    },
    {
      de: "Gehen wir heute Nachmittag **an den Strand**?",
      ar: "هل نذهب بعد ظهر اليوم إلى الشاطئ؟",
      highlight: "an den Strand",
      audio: true,
      note: "Wohin? + Akkusativ: an + den Strand"
    },
    {
      de: "Mein Vater ist gerade **beim Arzt**.",
      ar: "والدي موجود حالياً عند الطبيب.",
      highlight: "beim Arzt",
      audio: true,
      note: "Wo? + Dativ مع شخص: bei + dem = beim Arzt"
    },
    {
      de: "Mein Vater muss jetzt **zum Arzt** fahren.",
      ar: "على والدي أن يذهب الآن إلى الطبيب.",
      highlight: "zum Arzt",
      audio: true,
      note: "Wohin? + Dativ مع شخص كوجهة: zu + dem = zum Arzt"
    },
    {
      de: "Am Wochenende bleibe ich gemütlich **zu Hause**.",
      ar: "في نهاية الأسبوع سأبقى مرتاحاً في المنزل.",
      highlight: "zu Hause",
      audio: true,
      note: "ثبات مع فعل bleiben ← zu Hause"
    },
    {
      de: "Nach der Arbeit fahre ich direkt **nach Hause**.",
      ar: "بعد العمل أسافر مباشرة إلى المنزل.",
      highlight: "nach Hause",
      audio: true,
      note: "حركة مع فعل fahren ← nach Hause"
    },
    {
      de: "Sie macht Urlaub **in der Schweiz**, danach reist sie **nach Italien**.",
      ar: "هي تقضي إجازة في سويسرا، وبعد ذلك تسافر إلى إيطاليا.",
      highlight: "in der Schweiz",
      audio: true,
      note: "in der Schweiz (موقع Dativ لدولة بأداة) مقابل nach Italien (وجهة لدولة بلا أداة)"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "احذر استخدام «zu» مع المدن والدول: خطأ فادح يقع فيه الكثير من الطلاب قول *Ich fahre zu Berlin*! المدن والدول التي ليس لها أداة تأخذ حصراً **nach** (*Ich fahre nach Berlin*). حرف zu مخصص للأشخاص أو المرافق القريبة كأهداف.",
    "قاعدة ذهبية للتفريق بين «zu Hause» و «nach Hause»: انظر دائماً إلى الفعل المساعد أو الأساسي في الجملة: إذا كان فعلاً سكونياً (sein, bleiben, wohnen) فاختر **zu Hause**. وإذا كان فعل انتقال وحركة (gehen, fahren, fliegen, kommen) فاختر **nach Hause**.",
    "الدول المؤنثة (die Schweiz, die Türkei): في الموقع (Wo?) تصبح **in der** Schweiz (Dativ). وفي الاتجاه (Wohin?) تبقى **in die** Schweiz (Akkusativ)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "السؤال ?Wo = سكون وموقع = Dativ دائماً وأبداً.",
    "السؤال ?Wohin = حركة وتوجه = Akkusativ (مع in/an/auf) أو Dativ (مع zu) أو بدون أداة (مع nach).",
    "المقارنة الجوهرية: im Kino (سكون) مقابل ins Kino (حركة).",
    "المقارنة مع الأشخاص: beim Arzt (أنا عنده) مقابل zum Arzt (ذاهب إليه).",
    "المقارنة المنزلية: zu Hause (في البيت) مقابل nach Hause (إلى البيت)."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "die Richtung", plural: "die Richtungen", ar: "الاتجاه", article: "die", example: "In welche Richtung gehst du?" },
    { de: "das Ziel", plural: "die Ziele", ar: "الهدف / الوجهة", article: "das", example: "Was ist dein Reiseziel?" },
    { de: "der Urlaub", plural: "die Urlaube", ar: "الإجازة / العطلة", article: "der", example: "Wir fahren im Urlaub ans Meer." },
    { de: "das Ausland", plural: "-", ar: "الخارج (خارج البلاد)", article: "das", example: "Er arbeitet gern im Ausland." },
    { de: "der Ausflug", plural: "die Ausflüge", ar: "النزهة / الرحلة القصيرة", article: "der", example: "Am Sonntag machen wir einen Ausflug aufs Land." },
    { de: "die Grenze", plural: "die Grenzen", ar: "الحدود", article: "die", example: "Wir stehen an der Grenze." },
    { de: "der Spielplatz", plural: "die Spielplätze", ar: "ملعب الأطفال", article: "der", example: "Die Kinder sind auf dem Spielplatz." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Wo bist du gerade? – Ich sitze gemütlich ___ Kino.",
      options: ["im", "ins", "nach", "zum"],
      correct: 0,
      answer: 0,
      explanation: "السؤال بـ ?Wo مع فعل الجلوس (sitze) يعبر عن سكون وموقع داخل مبنى (Dativ): in + dem Kino = im Kino."
    },
    {
      type: "multiple-choice",
      question: "Wohin gehst du heute Abend? – Ich gehe ___ Kino.",
      options: ["ins", "im", "zum", "nach"],
      correct: 0,
      answer: 0,
      explanation: "السؤال بـ ?Wohin مع فعل الذهاب (gehe) يعبر عن حركة لدخول مبنى مغلق (Akkusativ): in + das Kino = ins Kino."
    },
    {
      type: "fill-blank",
      question: "Ich bin so müde, ich bleibe heute Abend ___ Hause.",
      sentence: "Ich bin so müde, ich bleibe heute Abend ___ Hause.",
      answer: "zu",
      accept: ["zu"],
      explanation: "مع فعل البقاء والسكوت (bleibe) نستخدم التركيب الثابت: zu Hause (في المنزل)."
    },
    {
      type: "fill-blank",
      question: "Um wie viel Uhr fährst du nach der Arbeit ___ Hause?",
      sentence: "Um wie viel Uhr fährst du nach der Arbeit ___ Hause?",
      answer: "nach",
      accept: ["nach"],
      explanation: "مع فعل السفر والحركة (fährst) نستخدم التركيب الدال على العودة: nach Hause (إلى المنزل)."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (نحن نسافر هذا الصيف إلى سويسرا)",
      words: ["Wir", "reisen", "diesen", "Sommer", "in", "die", "Schweiz", "."],
      correct: "Wir reisen diesen Sommer in die Schweiz .",
      answer: "Wir reisen diesen Sommer in die Schweiz .",
      accept: ["Wir reisen diesen Sommer in die Schweiz.", "Wir reisen diesen Sommer in die Schweiz ."],
      explanation: "الفاعل (Wir) + الفعل (reisen) + الظرف (diesen Sommer) + الوجهة لدولة بأداة (in die Schweiz)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich fahre morgen zu Berlin.)",
      sentence: "Ich fahre morgen zu Berlin.",
      corrected: "Ich fahre morgen nach Berlin.",
      answer: "Ich fahre morgen nach Berlin.",
      accept: ["Ich fahre morgen nach Berlin.", "Ich fahre morgen nach Berlin"],
      explanation: "المدن لا تأخذ zu، بل تأخذ حرف nach: nach Berlin."
    },
    {
      type: "match",
      question: "طابق كل جملة مع دلالتها الصحيحة (Wo مقابل Wohin):",
      pairs: [
        { left: "Ich bin beim Arzt.", right: "Wo? (أنا عنده الآن)" },
        { left: "Ich gehe zum Arzt.", right: "Wohin? (أنا متوجه إليه)" },
        { left: "Ich liege am Strand.", right: "Wo? (أنا مستلقٍ هناك)" },
        { left: "Ich gehe an den Strand.", right: "Wohin? (أنا ذاهب هناك)" }
      ]
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أنا ذاهب إلى السوبرماركت.)",
      from: "أنا ذاهب إلى السوبرماركت.",
      answer: "Ich gehe in den Supermarkt.",
      accept: ["Ich gehe in den Supermarkt.", "Ich gehe in den Supermarkt", "Ich gehe zum Supermarkt.", "Ich gehe zum Supermarkt"],
      explanation: "الذهاب للداخل = in den Supermarkt (Akkusativ)، أو التوجه إليه كهدف = zum Supermarkt."
    },
    {
      type: "multiple-choice",
      question: "Wo arbeitet deine Schwester? – Sie arbeitet ___ einer großen Bank.",
      options: ["in", "bei", "zu", "nach"],
      correct: 1,
      answer: 1,
      explanation: "العمل لدى مؤسسة أو شركة يأخذ حرف bei + Dativ: bei einer großen Bank."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Wir machen Urlaub in die Türkei.)",
      sentence: "Wir machen Urlaub in die Türkei.",
      corrected: "Wir machen Urlaub in der Türkei.",
      answer: "Wir machen Urlaub in der Türkei.",
      accept: ["Wir machen Urlaub in der Türkei.", "Wir machen Urlaub in der Türkei"],
      explanation: "قضاء الإجازة هناك هو موقع وثبات (Wo?) ويتطلب Dativ: in der Türkei وليس in die Türkei."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Er ist krank und liegt noch ___ Bett.",
      options: ["im", "ins", "zum", "nach"],
      correct: 0,
      answer: 0,
      explanation: "الاستلقاء في السرير موقع وثبات (Wo?): in + dem Bett = im Bett."
    },
    {
      type: "multiple-choice",
      question: "Komm, wir gehen jetzt schnell ___ Bett!",
      options: ["ins", "im", "ans", "nach"],
      correct: 0,
      answer: 0,
      explanation: "الذهاب إلى النوم والسرير حركة وتوجه (Wohin?): in + das Bett = ins Bett."
    },
    {
      type: "multiple-choice",
      question: "Wo hast du deinen Schlüssel gefunden? – Er lag ___ Tisch.",
      options: ["auf dem", "auf den", "in den", "an den"],
      correct: 0,
      answer: 0,
      explanation: "فعل الاستلقاء والوجود (lag) يعبر عن سكون فوق سطح (Wo?): auf + dem Tisch = auf dem Tisch."
    },
    {
      type: "multiple-choice",
      question: "Fliegst du diesen Winter ___ Ägypten oder ___ Türkei?",
      options: ["nach / in die", "in / nach die", "zu / in die", "nach / zur"],
      correct: 0,
      answer: 0,
      explanation: "مصر Ägypten بلا أداة تأخذ nach، بينما تركيا die Türkei بأداة مؤنثة تأخذ in die في حالة الحركة."
    },
    {
      type: "multiple-choice",
      question: "Wann kommst du endlich ___ Hause?",
      options: ["nach", "zu", "in", "bei"],
      correct: 0,
      answer: 0,
      explanation: "مع فعل القدوم والرجوع (kommen) نستخدم التركيب الحركي: nach Hause."
    }
  ]
};
window.lessons = window.LESSONS;
