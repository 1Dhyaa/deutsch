// data/lessons/a2-1/16-lokale-praepositionen-2.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-16"] = {
  id: "a2-1-16",
  level: "a2-1",
  order: 16,
  slug: "lokale-praepositionen-2",
  title: {
    de: "Lokale Präpositionen (2) / Wohin gehst du?",
    ar: "حروف الجر المكانية (2): إلى أين أنت ذاهب؟ (الاتجاه والحركة)"
  },
  tags: ["grammatik", "praepositionen", "lokal", "wohin", "akkusativ", "a2"],

  // 1. الهدف
  goal: "ستتعلم في هذا الدرس كيفية التعبير عن الاتجاه والوجهة بدقة عند الإجابة عن السؤال «إلى أين؟» (?Wohin gehst du) عبر القواعد الأربعة الأساسية (nach, in + Akkusativ, zu + Dativ, an/auf + Akkusativ) والتعبير الثابت «nach Hause».",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "عندما نسأل بأداة الاستفهام **?Wohin** (إلى أين؟)، فإننا نسأل عن **الحركة، الاتجاه، وتغيير المكان نحو وجهة محددة** (Bewegung / Richtung / Ziel). بينما تكتفي اللغة العربية بكلمة «إلى»، تقسم اللغة الألمانية الاتجاه إلى 4 مسارات محددة بحسب نوع الوجهة!"
    },
    {
      type: "rule",
      content: "خارطة القرار الحاسمة للاتجاه (?Wohin):<br>1. **nach**: للمدن والدول التي **ليس لها أداة تعريف** + الاتجاهات + البيت (nach Hause).<br>2. **in (+ Akkusativ)**: للدخول **داخل مبنى مغلق** + الدول التي **لها أداة تعريف**.<br>3. **zu (+ Dativ)**: للذهاب **إلى شخص / طبيب** أو التوجه نحو مبنى/مؤسسة كهدف.<br>4. **an / auf (+ Akkusativ)**: الذهاب إلى **شاطئ ومسطح مائي** (an) أو **ساحة وسوق مفتوح** (auf)."
    },
    {
      type: "table",
      headers: ["حرف الجر", "الحالة الإعرابية", "متى نستخدمه؟", "أمثلة حية"],
      rows: [
        ["nach", "بدون أداة", "المدن والدول (بلا أداة)، الاتجاهات، والعودة للبيت", "nach Berlin, nach Deutschland, nach links, nach Hause"],
        ["in", "Akkusativ", "الدخول لداخل مبنى مغلق أو دول لها أداة تعريف", "ins Kino, in den Supermarkt, in die Schweiz, in die Türkei"],
        ["zu", "Dativ", "الذهاب إلى أشخاص، مهنيين، أو مرافق لقضاء مصلحة", "zum Arzt, zur Bank, zum Bahnhof, zu meinen Eltern"],
        ["an", "Akkusativ", "الاتجاه نحو مسطح مائي أو شاطئ أو نافذة", "an den Strand, ans Meer, an den See"],
        ["auf", "Akkusativ", "الاتجاه نحو ساحة مفتوحة، سوق، أو فعالية", "auf den Markt, auf den Spielplatz, auf eine Party"]
      ]
    },
    {
      type: "rule",
      content: "قاعدة الدول والبلدان المهمة جداً في الامتحانات:<br>• دول **بدون أداة** ← تأخذ **nach**: *Ich fliege nach Deutschland / nach Spanien / nach Ägypten.*<br>• دول **بأداة تعريف** ← تأخذ **in + Akkusativ**: *Ich fliege in die Schweiz / in die Türkei / in die USA / in den Irak.*"
    },
    {
      type: "text",
      content: "الإدغامات الشائعة مع حروف الاتجاه (Präposition + Artikel):"
    },
    {
      type: "table",
      headers: ["التركيب الكامل", "الإدغام الشائع", "مثال جملة", "المعنى"],
      rows: [
        ["in + das", "ins", "Ich gehe ins Kino.", "أنا ذاهب إلى السينما."],
        ["an + das", "ans", "Wir fahren ans Meer.", "نحن نسافر إلى البحر."],
        ["auf + das", "aufs", "Komm aufs Dach!", "تعال إلى السطح!"],
        ["zu + dem", "zum", "Er geht zum Arzt.", "هو ذاهب إلى الطبيب."],
        ["zu + der", "zur", "Sie geht zur Post.", "هي ذاهبة إلى مكتب البريد."]
      ]
    },
    {
      type: "rule",
      content: "الفرق بين zu و in عند الذهاب لمبنى:<br>• إذا قلت: *Ich gehe **zur** Bank* أو *Ich gehe **zur** Schule*، فالتركيز على الهدف والغرض (أنت ذاهب لإنجاز معاملة أو للدراسة).<br>• إذا قلت: *Ich gehe **in die** Bank*، فالتركيز على الفعل الحركي الفيزيائي بالدخول من الباب إلى الداخل."
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Wohin fährst du im Urlaub? – Ich fahre **nach Italien**.",
      ar: "إلى أين تسافر في العطلة؟ – أنا مسافر إلى إيطاليا.",
      highlight: "nach Italien",
      audio: true,
      note: "Italien دولة بدون أداة تعريف ← nach"
    },
    {
      de: "Nächste Woche fliege ich geschäftlich **in die Schweiz**.",
      ar: "الأسبوع القادم سأسافر جواً في عمل إلى سويسرا.",
      highlight: "in die Schweiz",
      audio: true,
      note: "die Schweiz دولة بمؤنث ← in die Schweiz (Akkusativ)"
    },
    {
      de: "Es ist schon spät, ich gehe jetzt **nach Hause**.",
      ar: "الوقت متأخر بالفعل، سأذهب الآن إلى المنزل.",
      highlight: "nach Hause",
      audio: true,
      note: "الذهاب والعودة إلى البيت تعبير ثابت: nach Hause"
    },
    {
      de: "Wir gehen heute Abend zusammen **ins Kino**.",
      ar: "نحن ذاهبون هذا المساء معاً إلى السينما.",
      highlight: "ins Kino",
      audio: true,
      note: "ins = in + das Kino (مبنى مغلق Akkusativ)"
    },
    {
      de: "Ich fühle mich nicht wohl, ich muss **zum Arzt**.",
      ar: "لا أشعر بأنني بخير، يجب أن أذهب إلى الطبيب.",
      highlight: "zum Arzt",
      audio: true,
      note: "zum = zu + dem Arzt (شخص / مهني يأخذ دائماً zu + Dativ)"
    },
    {
      de: "Im Sommer fahren viele Familien **ans Meer**.",
      ar: "في الصيف تسافر العديد من العائلات إلى البحر.",
      highlight: "ans Meer",
      audio: true,
      note: "ans = an + das Meer (مسطح مائي Akkusativ)"
    },
    {
      de: "Gehen wir morgen früh **auf den Markt**?",
      ar: "هل نذهب غداً صباحاً إلى السوق؟",
      highlight: "auf den Markt",
      audio: true,
      note: "auf + den Markt (ساحة وسوق مفتوح Akkusativ)"
    },
    {
      de: "Er muss noch schnell **zur Bank** gehen, um Geld abzuheben.",
      ar: "عليه أن يذهب سريعاً إلى البنك ليسحب نقوداً.",
      highlight: "zur Bank",
      audio: true,
      note: "zur = zu + der Bank (مؤسسة كوجهة Dativ)"
    },
    {
      de: "Biegen Sie an der Kreuzung **nach rechts** ab!",
      ar: "انعطف عند تقاطع الطرق إلى اليمين!",
      highlight: "nach rechts",
      audio: true,
      note: "الاتجاهات (rechts, links, oben) تأخذ nach"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في العربية نستخدم حرف «إلى» لكل شيء (إلى مصر، إلى الطبيب، إلى السينما، إلى البيت). لكن في الألمانية:<br>• للمدن والدول بلا أداة: **nach**.<br>• للأشخاص والمهنيين: **zu**.<br>• لدخول المباني والدول ذات الأداة: **in**.<br>• للعودة للبيت: **nach Hause**.",
    "الفرق القاتل بين «nach Hause» و «zu Hause»: نستخدم **nach Hause** مع أفعال الحركة (gehen, fahren, kommen) للإشارة للعودة إلى البيت. بينما نستخدم **zu Hause** مع أفعال الثبات (sein, bleiben, schlafen) للتعبير عن التواجد في البيت.",
    "الدول ذات الأدوات فخ شائع في امتحانات B1/A2: تذكر دائماً: *Ich reise in die Schweiz* و *in die Türkei* و *in die USA* (وليس nach Schweiz!)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "السؤال بـ Wohin? يعني حركة وتوجهاً نحو وجهة معينة.",
    "المدن والدول بدون أداة والاتجاهات تأخذ: nach (مثال: nach Berlin, nach links).",
    "الدول ذات الأداة والمباني المغلقة تأخذ: in + Akkusativ (مثال: in die Türkei, ins Kino).",
    "الأشخاص والأطباء والمؤسسات كهدف تأخذ: zu + Dativ (مثال: zum Arzt, zur Bank).",
    "الشاطئ والمسطحات المائية: an + Akkusativ (ans Meer / an den Strand).",
    "العودة إلى البيت تعبير ثابت لا يتغير: nach Hause."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "die Schweiz", plural: "-", ar: "سويسرا (دولة مؤنثة بأداة)", article: "die", example: "Wir fahren im Winter in die Schweiz." },
    { de: "die Türkei", plural: "-", ar: "تركيا (دولة مؤنثة بأداة)", article: "die", example: "Fliegst du dieses Jahr in die Türkei?" },
    { de: "das Kino", plural: "die Kinos", ar: "السينما", article: "das", example: "Kommst du mit ins Kino?" },
    { de: "das Meer", plural: "die Meere", ar: "البحر", article: "das", example: "Im Urlaub fahre ich ans Meer." },
    { de: "der Arzt", plural: "die Ärzte", ar: "الطبيب", article: "der", example: "Er muss dringend zum Arzt gehen." },
    { de: "die Bank", plural: "die Banken", ar: "البنك / المصرف", article: "die", example: "Ich muss noch schnell zur Bank." },
    { de: "der Markt", plural: "die Märkte", ar: "السوق", article: "der", example: "Gehen wir heute auf den Markt?" }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Wohin fliegst du nächsten Sommer? – Ich fliege ___ Deutschland.",
      options: ["nach", "in", "zu", "auf"],
      correct: 0,
      answer: 0,
      explanation: "الدول التي ليس لها أداة تعريف (مثل Deutschland) تأخذ دائماً حرف nach عند الدلالة على الوجهة."
    },
    {
      type: "multiple-choice",
      question: "Meine Tante reist nächste Woche ___ Schweiz.",
      options: ["in die", "nach", "zur", "in der"],
      correct: 0,
      answer: 0,
      explanation: "سويسرا die Schweiz دولة مؤنثة لها أداة تعريف، لذا تأخذ in + Akkusativ فتصبح in die Schweiz."
    },
    {
      type: "fill-blank",
      question: "Ich bin müde, ich gehe jetzt ___ Hause.",
      sentence: "Ich bin müde, ich gehe jetzt ___ Hause.",
      answer: "nach",
      accept: ["nach"],
      explanation: "الذهاب إلى البيت هو تعبير ثابت عن الحركة: nach Hause."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (نحن ذاهبون اليوم إلى السينما)",
      words: ["Wir", "gehen", "heute", "Abend", "ins", "Kino", "."],
      correct: "Wir gehen heute Abend ins Kino .",
      answer: "Wir gehen heute Abend ins Kino .",
      accept: ["Wir gehen heute Abend ins Kino.", "Wir gehen heute Abend ins Kino ."],
      explanation: "الفاعل (Wir) + الفعل (gehen) + الظرف (heute Abend) + الوجهة (ins Kino)."
    },
    {
      type: "multiple-choice",
      question: "Er hat Zahnschmerzen und muss sofort ___ Zahnarzt gehen.",
      options: ["zum", "beim", "in den", "nach"],
      correct: 0,
      answer: 0,
      explanation: "الذهاب إلى شخص أو مهني (طبيب الأسنان der Zahnarzt) يتطلب zu + Dativ: zu + dem = zum Zahnarzt."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Im Urlaub fahren wir nach das Meer.)",
      sentence: "Im Urlaub fahren wir nach das Meer.",
      corrected: "Im Urlaub fahren wir ans Meer.",
      answer: "Im Urlaub fahren wir ans Meer.",
      accept: ["Im Urlaub fahren wir ans Meer.", "Im Urlaub fahren wir ans Meer"],
      explanation: "المسطحات المائية لا تأخذ nach، بل تأخذ an + Akkusativ: an + das Meer تُدغم إلى ans Meer."
    },
    {
      type: "match",
      question: "طابق كل وجهة مع حرف الجر المناسب لها عند الحركة (Wohin?):",
      pairs: [
        { left: "Berlin (مدينة)", right: "nach Berlin" },
        { left: "Türkei (دولة بأداة مؤنثة)", right: "in die Türkei" },
        { left: "Arzt (شخص/طبيب)", right: "zum Arzt" },
        { left: "Strand (شاطئ)", right: "an den Strand" }
      ]
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أنا ذاهب إلى البنك.)",
      from: "أنا ذاهب إلى البنك.",
      answer: "Ich gehe zur Bank.",
      accept: ["Ich gehe zur Bank.", "Ich gehe zur Bank", "Ich gehe in die Bank.", "Ich gehe in die Bank"],
      explanation: "الذهاب للبنك كوجهة لقضاء مصلحة = zur Bank (zu + der Bank)."
    },
    {
      type: "fill-blank",
      question: "Am Samstag gehen wir früh ___ den Markt.",
      sentence: "Am Samstag gehen wir früh ___ den Markt.",
      answer: "auf",
      accept: ["auf"],
      explanation: "الذهاب إلى السوق المفتوح يأخذ auf + Akkusativ: auf den Markt."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich fahre jetzt zu Hause.)",
      sentence: "Ich fahre jetzt zu Hause.",
      corrected: "Ich fahre jetzt nach Hause.",
      answer: "Ich fahre jetzt nach Hause.",
      accept: ["Ich fahre jetzt nach Hause.", "Ich fahre jetzt nach Hause"],
      explanation: "مع أفعال الحركة (fahren, gehen) نقول nach Hause (إلى البيت)، أما zu Hause فتأتي مع الثبات (أنا في البيت)."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Wohin fliegst du? – Ich fliege nächste Woche ___ USA.",
      options: ["in die", "nach", "zu den", "in den"],
      correct: 0,
      answer: 0,
      explanation: "الولايات المتحدة die USA اسم جمع بأداة تعريف، وتأخذ in + Akkusativ الجمع: in die USA."
    },
    {
      type: "multiple-choice",
      question: "Nach der Arbeit gehe ich direkt ___.",
      options: ["nach Hause", "zu Hause", "in Hause", "an Hause"],
      correct: 0,
      answer: 0,
      explanation: "الذهاب نحو المنزل مع فعل حركة (gehen) يتطلب دائماً: nach Hause."
    },
    {
      type: "multiple-choice",
      question: "Wann gehst du ___ Schule?",
      options: ["zur", "nach", "am", "beim"],
      correct: 0,
      answer: 0,
      explanation: "الذهاب إلى المدرسة كوجهة ومؤسسة يتطلب zu + der Schule = zur Schule (أو in die Schule)."
    },
    {
      type: "multiple-choice",
      question: "Wir wollen am Wochenende ___ Strand fahren.",
      options: ["an den", "am", "auf den", "in den"],
      correct: 0,
      answer: 0,
      explanation: "الشاطئ der Strand مسطح مائي مع حركة (Wohin?) يأخذ an + Akkusativ المذكر: an den Strand."
    },
    {
      type: "multiple-choice",
      question: "Fahren Sie an der nächsten Ampel ___ links!",
      options: ["nach", "zu", "in", "an"],
      correct: 0,
      answer: 0,
      explanation: "الاتجاهات الجغرافية والحركية (links, rechts, Norden) تأخذ دائماً حرف nach."
    }
  ]
};
window.lessons = window.LESSONS;
