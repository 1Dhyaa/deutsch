// data/lessons/a2-2/03-superlativ.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-2-03"] = {
  id: "a2-2-03",
  level: "a2-2",
  order: 3,
  slug: "superlativ",
  title: {
    de: "Der Superlativ",
    ar: "صيغة التفضيل القصوى (Der Superlativ: am -sten)"
  },
  tags: ["grammatik", "adjektive", "superlativ", "vergleich", "a2"],

  // 1. الهدف من الدرس
  goal: "ستتعلم في هذا الدرس كيفية صياغة صيغة التفضيل العليا (Superlativ) للتعبير عن الأفضل أو الأسرع أو الأكبر، سواء باستخدام تركيب (am ... -sten) كخبر، أو مع أداة التعريف قبل الاسم (der/die/das ... -ste)، مع إتقان الحالات الشاذة وقواعد الأوملاوت.",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "تُستخدم صيغة التفضيل القصوى (**Der Superlativ**) للتعبير عن الشيء أو الشخص الذي يمتلك أعلى درجة في صفة ما من بين مجموعة كاملة (مثل: «الأسرع»، «الأكبر»، «الأجمل»)."
    },
    {
      type: "text",
      content: "النوع الأول: **التفضيل كخبر في الجملة (Prädikativ)**. إذا جاءت الصفة بعد الفعل (مثل sein)، نستخدم التركيب الشهير: **am + Adjektiv + -sten**:"
    },
    {
      type: "table",
      headers: ["الصفة الأصلية (Positiv)", "صيغة التفضيل (Superlativ)", "المعنى بالعربية", "مثال توضيحي"],
      rows: [
        ["schnell (سريع)", "**am schnellsten**", "الأسرع", "Der Zug fährt **am schnellsten**."],
        ["klein (صغير)", "**am kleinsten**", "الأصغر", "Mein Bruder ist **am kleinsten**."],
        ["billig (رخيص)", "**am billigsten**", "الأرخص", "Dieser Supermarkt ist **am billigsten**."],
        ["schön (جميل)", "**am schönsten**", "الأجمل", "Die Natur im Mai ist **am schönsten**."],
        ["warm (دافئ)", "**am wärmsten** (أوملاوت)", "الأدفأ", "Im Juli ist es **am wärmsten**."]
      ]
    },
    {
      type: "rule",
      content: "قاعدة اللاحقة **-esten** لتسهيل النطق:<br>إذا كانت الصفة تنتهي بأحد الحروف: **-t, -d, -s, -ß, -z, -x**، فإننا نضيف **-esten** (بإضافة حرف e إضافي) لمنع التقاء سواكن يصعب لفظها:<br>• alt → **am ältesten**<br>• kalt → **am kältesten**<br>• heiß → **am heißesten**<br>• kurz → **am kürzesten**<br>• neu → **am neuesten**<br>*(استثناء صوتي شهير: الصفة groß تصبح: **am größten** بإضافة -ten فقط لأنها تنتهي بـ ß).* "
    },
    {
      type: "text",
      content: "الصفات الشاذة في صيغة التفضيل (Unregelmäßige Superlative): يجب حفظها جيداً:"
    },
    {
      type: "table",
      headers: ["الصفة الأصلية", "المقارنة (Komparativ)", "صيغة التفضيل (Superlativ)", "المعنى بالعربية"],
      rows: [
        ["gut (جيد)", "besser", "**am besten**", "الأفضل / الأحسن"],
        ["viel (كثير)", "mehr", "**am meisten**", "الأكثر"],
        ["gern (بحب/برغبة)", "lieber", "**am liebsten**", "المفضَّل أكثر شيء"],
        ["hoch (مرتفع)", "höher", "**am höchsten** (عادت c)", "الأعلى"],
        ["nah (قريب)", "näher", "**am nächsten**", "الأقرب"]
      ]
    },
    {
      type: "text",
      content: "النوع الثاني: **التفضيل قبل الاسم مع أداة التعريف (Attributiv)**:<br>إذا جاءت صفة التفضيل مباشرة قبل الاسم، نضع أداة المعرفة (**der / die / das**) وتأخذ الصفة اللاحقة **-ste** (أو **-sten** بحسب موقع الاسم الإعرابي):"
    },
    {
      type: "table",
      headers: ["النوع", "التركيب", "المعنى بالعربية", "مثال"],
      rows: [
        ["مذكر (der)", "**der schnellste** Zug", "أسرع قطار", "Der ICE ist **der schnellste** Zug in Deutschland."],
        ["مؤنث (die)", "**die beste** Schülerin", "أفضل طالبة", "Sara ist **die beste** Schülerin in der Klasse."],
        ["محايد (das)", "**das höchste** Gebäude", "أعلى مبنى", "Das ist **das höchste** Gebäude der Welt."],
        ["جمع (die)", "**die ältesten** Häuser", "أقدم البيوت", "Das sind **die ältesten** Häuser der Stadt."]
      ]
    },
    {
      type: "rule",
      content: "ملاحظة هامة: لا تجمع بين (am) وبين أداة التعريف (der/die/das)!<br>• قل: *Das Auto ist **am schnellsten**.* (بدون اسم بعده)<br>• أو قل: *Das ist **das schnellste** Auto.* (مع أداة التعريف والاسم)."
    }
  ],

  // 3. الأمثلة (8+ أمثلة نموذجية مع الترجمة والصوت وتوضيح القاعدة)
  examples: [
    {
      de: "Welcher Monat ist in Deutschland **am kältesten**?",
      ar: "أي شهر هو الأبرد في ألمانيا؟",
      highlight: "am kältesten",
      audio: true,
      note: "kalt أخذت أوملاوت (ä) واللاحقة -esten لانتهاء الصفة بحرف t"
    },
    {
      de: "Er spricht von allen Studenten **am besten** Deutsch.",
      ar: "هو يتحدث الألمانية بشكل أفضل من جميع الطلاب.",
      highlight: "am besten",
      audio: true,
      note: "gut شاذة وتتحول في التفضيل إلى am besten"
    },
    {
      de: "Ich trinke Kaffee, aber Tee trinke ich **am liebsten**.",
      ar: "أشرب القهوة، لكن الشاي هو المفضل لدي أكثر من أي شيء.",
      highlight: "am liebsten",
      audio: true,
      note: "gern تتحول إلى am liebsten للتعبير عن قمة التفضيل"
    },
    {
      de: "Der Mount Everest ist **der höchste** Berg der Welt.",
      ar: "قمة إفرست هي أعلى جبل في العالم.",
      highlight: "der höchste",
      audio: true,
      note: "تفضيل قبل الاسم المعرف: der + höchste (مع عودة حرف c)"
    },
    {
      de: "Dieses Hotel ist im Zentrum **am billigsten**.",
      ar: "هذا الفندق هو الأرخص في وسط المدينة.",
      highlight: "am billigsten",
      audio: true,
      note: "billig صفة منتظمة أخذت am + billig + sten"
    },
    {
      de: "Wer hat in deiner Familie **die meisten** Bücher?",
      ar: "من يمتلك أكبر عدد من الكتب في عائلتك؟",
      highlight: "die meisten",
      audio: true,
      note: "viel تتحول في التفضيل قبل اسم الجمع المعرف إلى die meisten"
    },
    {
      de: "Mein Großvater ist in unserer Familie **am ältesten**.",
      ar: "جدي هو الأكبر سناً في عائلتنا.",
      highlight: "am ältesten",
      audio: true,
      note: "alt تنتهي بـ t لذا تأخذ أوملاوت واللاحقة -esten"
    },
    {
      de: "Der ICE ist **der schnellste** Zug in Deutschland.",
      ar: "قطار ICE هو أسرع قطار في ألمانيا.",
      highlight: "der schnellste",
      audio: true,
      note: "صفة التفضيل قبل الاسم المذكر المعرف تأخذ -ste: der schnellste"
    },
    {
      de: "Das Zimmer von Lukas ist **am größten**.",
      ar: "غرفة لوكاس هي الأكبر.",
      highlight: "am größten",
      audio: true,
      note: "groß تأخذ أوملاوت واللاحقة -ten مباشرة (am größten)"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "الفرق بين am -sten وبين der/die/das -ste: في العربية نستخدم نفس العبارة (هو الأسرع / هو القطار الأسرع). في الألمانية، إذا لم يأتِ اسم بعد الصفة نستخدم تركيبة **am ... -sten** (مثل: Er läuft am schnellsten). أما إذا جاءت الصفة قبل اسم معرف نستخدم أداة التعريف المناسبة واللاحقة -ste (مثل: der schnellste Läufer). لا تخلط بينهما أبداً!",
    "تذكر قاعدة الأحرف الساكنة: الصفات التي تنتهي بـ t أو d أو s أو z تحتاج إلى حرف e إضافي لتسهيل خروج الصوت (am kältesten وليس am kältsten، am heißesten وليس am heißsten)، تماماً كما نضيف في النطق العربي حركة لفك إدغام الحروف المتتالية.",
    "الصفة groß استثناء كتابي وصوتي: على الرغم من انتهائها بـ ß، فإننا نضيف -ten فقط (am größten) وليس -esten، وتأخذ دائماً أوملاوت (ö)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "صيغة التفضيل كخبر بعد الفعل: am + Adjektiv + -sten (مثل: am schönsten).",
    "إذا انتهت الصفة بـ -d, -t, -s, -ß, -z تأخذ اللاحقة -esten (مثل: am kältesten, am ältesten).",
    "صيغة التفضيل قبل الاسم المعرف: der / die / das + Adjektiv + -ste (مثل: das kleinste Haus).",
    "الصفات الشاذة للحفظ: gut → am besten | viel → am meisten | gern → am liebsten | hoch → am höchsten | nah → am nächsten.",
    "الصفات ذات المقطع الواحد تأخذ أوملاوت: alt → am ältesten, groß → am größten, warm → am wärmsten."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "am besten", plural: "gut, besser", ar: "الأفضل / الأحسن", article: "", example: "Er kann am besten schwimmen." },
    { de: "am meisten", plural: "viel, mehr", ar: "الأكثر", article: "", example: "Sie liest am meisten in der Familie." },
    { de: "am liebsten", plural: "gern, lieber", ar: "المفضّل أكثر من غيره", article: "", example: "Ich esse am liebsten Pizza." },
    { de: "am höchsten", plural: "hoch, höher", ar: "الأعلى", article: "", example: "Dieser Berg ist am höchsten." },
    { de: "das Gebäude", plural: "die Gebäude", ar: "المبنى / العمارة", article: "das", example: "Das höchste Gebäude steht in Dubai." },
    { de: "der Rekord", plural: "die Rekorde", ar: "الرقم القياسي", article: "der", example: "Er hat den Rekord gebrochen." },
    { de: "am nächsten", plural: "nah, näher", ar: "الأقرب", article: "", example: "Wo ist die nächste Apotheke?" }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Welches Auto fährt am ___? (schnell)",
      options: ["schnell", "schneller", "schnellsten", "schnellste"],
      correct: 2,
      answer: 2,
      explanation: "بعد كلمة am تأتي صيغة التفضيل منتهية بـ -sten: am schnellsten."
    },
    {
      type: "fill-blank",
      question: "Der Winter ist in Deutschland am ___ . (kalt)",
      sentence: "Der Winter ist in Deutschland am ___ .",
      answer: "kältesten",
      accept: ["kältesten", "kaeltesten"],
      explanation: "الصفة kalt تأخذ أوملاوت (ä) وبسبب انتهائها بـ t تأخذ -esten: am kältesten."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين جملة تفضيل صحيحة: (علي يدرس أكثر شيء)",
      words: ["Ali", "lernt", "am", "meisten", "."],
      correct: "Ali lernt am meisten .",
      answer: "Ali lernt am meisten .",
      accept: ["Ali lernt am meisten.", "Ali lernt am meisten"],
      explanation: "الفاعل (Ali) + الفعل (lernt) + صيغة التفضيل (am meisten)."
    },
    {
      type: "multiple-choice",
      question: "Dieses Buch gefällt mir ___ von allen. (gut)",
      options: ["am besten", "am gutesten", "besser", "am meisten gut"],
      correct: 0,
      answer: 0,
      explanation: "الصفة gut شاذة وصيغة التفضيل العليا منها هي دائماً: am besten."
    },
    {
      type: "match",
      question: "طابق بين الصفة وصيغة التفضيل العليا الشاذة المقابلة لها:",
      pairs: [
        { left: "gut", right: "am besten" },
        { left: "viel", right: "am meisten" },
        { left: "gern", right: "am liebsten" },
        { left: "hoch", right: "am höchsten" }
      ],
      explanation: "الصفات الشاذة الأساسية: gut → am besten, viel → am meisten, gern → am liebsten, hoch → am höchsten."
    },
    {
      type: "fill-blank",
      question: "Mein Opa ist in der Familie am ___ . (alt)",
      sentence: "Mein Opa ist in der Familie am ___ .",
      answer: "ältesten",
      accept: ["ältesten", "aeltesten"],
      explanation: "الصفة alt تأخذ أوملاوت وبسبب انتهائها بحرف t تأخذ -esten: am ältesten."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أنا أحب شرب الشاي أكثر من أي شيء.)",
      from: "أنا أحب شرب الشاي أكثر من أي شيء.",
      answer: "Ich trinke am liebsten Tee.",
      accept: ["Ich trinke am liebsten Tee.", "Ich trinke am liebsten Tee", "Ich trinke Tee am liebsten.", "Ich trinke Tee am liebsten"],
      explanation: "للتعبير عن الشيء المفضل أكثر من غيره نستخدم am liebsten مع الفعل: Ich trinke am liebsten Tee."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في صياغة الصفة:",
      sentence: "Im Sommer ist es am wärmsten und die Tage sind am langsten.",
      corrected: "Im Sommer ist es am wärmsten und die Tage sind am längsten.",
      answer: "Im Sommer ist es am wärmsten und die Tage sind am längsten.",
      accept: ["Im Sommer ist es am wärmsten und die Tage sind am längsten.", "Im Sommer ist es am wärmsten und die Tage sind am längsten"],
      explanation: "الصفة lang صفة أحادية المقطع تأخذ أوملاوت في التفضيل لتصبح: am längsten (مع ä)."
    },
    {
      type: "multiple-choice",
      question: "Das ist der ___ Turm der Stadt. (hoch)",
      options: ["höchste", "am höchsten", "höchsteste", "hoheste"],
      correct: 0,
      answer: 0,
      explanation: "قبل الاسم المعرف بأداة der نستخدم صيغة التفضيل مع اللاحقة -e: der höchste Turm."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في تركيب التفضيل التالي:",
      sentence: "Er ist am beste Spieler in unserem Team.",
      corrected: "Er ist der beste Spieler in unserem Team.",
      answer: "Er ist der beste Spieler in unserem Team.",
      accept: ["Er ist der beste Spieler in unserem Team.", "Er ist der beste Spieler in unserem Team", "Er ist der beste Spieler in unserer Mannschaft."],
      explanation: "قبل الاسم (Spieler) نستخدم أداة التعريف der beste وليس التركيب am besten."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة متعددة الخيارات)
  quiz: [
    {
      type: "multiple-choice",
      question: "Welche Form von »groß« im Superlativ ist richtig?",
      options: ["am großten", "am größten", "am größesten", "am meisten groß"],
      correct: 1,
      answer: 1,
      explanation: "الصفة groß تأخذ أوملاوت واللاحقة -ten: am größten."
    },
    {
      type: "multiple-choice",
      question: "Sara liest in unserer Klasse am ___ . (viel)",
      options: ["vielsten", "mehrsten", "meisten", "größten"],
      correct: 2,
      answer: 2,
      explanation: "صيغة التفضيل من viel هي شاذة وتكون دائماً: am meisten."
    },
    {
      type: "multiple-choice",
      question: "Der Juli ist oft der ___ Monat des Jahres. (heiß)",
      options: ["heißeste", "heißte", "am heißesten", "heißer"],
      correct: 0,
      answer: 0,
      explanation: "قبل الاسم المذكر der Monat تأخذ الصفة المنتهية بـ ß اللاحقة -este: der heißeste Monat."
    },
    {
      type: "multiple-choice",
      question: "Was isst du am ___? – Pizza natürlich!",
      options: ["gerne", "lieber", "liebsten", "besten"],
      correct: 2,
      answer: 2,
      explanation: "للسؤال عن الطعام الأكثر تفضيلاً على الإطلاق نستخدم: am liebsten."
    },
    {
      type: "multiple-choice",
      question: "Wo liegt der ___ Bahnhof?",
      options: ["am nächsten", "nächste", "nächster", "naheste"],
      correct: 1,
      answer: 1,
      explanation: "قبل الاسم der Bahnhof نستخدم صيغة التفضيل التابعة للأداة: der nächste Bahnhof."
    }
  ]
};
window.lessons = window.LESSONS;
