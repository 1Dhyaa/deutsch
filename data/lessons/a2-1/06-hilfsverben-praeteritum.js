// data/lessons/a2-1/06-hilfsverben-praeteritum.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-06"] = {
  id: "a2-1-06",
  level: "a2-1",
  order: 6,
  slug: "hilfsverben-praeteritum",
  title: {
    de: "Hilfsverben im Präteritum (sein & haben)",
    ar: "تصريف sein و haben في الماضي البسيط (war & hatte)"
  },
  tags: ["grammatik", "verben", "hilfsverben", "praeteritum", "a2"],

  // 1. الهدف
  goal: "ستتقن في هذا الدرس التصريف الكامل لفعلي sein (يكون) و haben (يملك) في زمن الماضي البسيط (war & hatte)، وستتعلم متى وكيف تستخدمهما في المواقف والتعابير اليومية الشائعة كبديل طبيعي لصيغة Perfekt.",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "يُعتبر الفعلان **sein** (يكون) و **haben** (يملك) أهم فعلين في اللغة الألمانية كأفعال أساسية ومساعدة. في صيغة الماضي، يفضل الألمان بنسبة 99% استخدام صيغة **Präteritum** لهذين الفعلين في كل سياقات الحياة (الشارع، العمل، العائلة، الأخبار، والكتابة)."
    },
    {
      type: "text",
      content: "جدول تصريف فعل **sein** (كان / كنتُ) في Präteritum:"
    },
    {
      type: "table",
      headers: ["الضمير (Pronomen)", "المضارع (Präsens)", "الماضي البسيط (Präteritum)", "المعنى بالعربية"],
      rows: [
        ["ich", "bin", "**war**", "أنا كنتُ"],
        ["du", "bist", "**warst**", "أنتَ كنتَ / أنتِ كنتِ"],
        ["er / sie / es", "ist", "**war**", "هو كانَ / هي كانتْ"],
        ["wir", "sind", "**waren**", "نحن كنا"],
        ["ihr", "seid", "**wart**", "أنتم كنتم"],
        ["sie / Sie", "sind", "**waren**", "هم كانوا / حضرتك كنتَ"]
      ]
    },
    {
      type: "text",
      content: "جدول تصريف فعل **haben** (كان يملك / كان عنده) في Präteritum:"
    },
    {
      type: "table",
      headers: ["الضمير (Pronomen)", "المضارع (Präsens)", "الماضي البسيط (Präteritum)", "المعنى بالعربية"],
      rows: [
        ["ich", "habe", "**hatte**", "كان لديَّ / امتلكتُ"],
        ["du", "hast", "**hattest**", "كان لديكَ / عندكِ"],
        ["er / sie / es", "hat", "**hatte**", "كان لديه / عندها"],
        ["wir", "haben", "**hatten**", "كان لدينا / عندنا"],
        ["ihr", "habt", "**hattet**", "كان لديكم / عندكم"],
        ["sie / Sie", "haben", "**hatten**", "كان لديهم / كان لدى حضرتكم"]
      ]
    },
    {
      type: "rule",
      content: "لاحظ التماثل الرائع: في كلا الفعلين، تصريف **ich** يساوي تماماً تصريف **er / sie / es**!<br>• ich **war** = er **war** (بدون أي نهاية حرفية).<br>• ich **hatte** = sie **hatte** (ينتهي بـ -e فقط).<br>• انتبه لإملاء أنتم: ihr **wart** بحرف t فقط وليس d."
    },
    {
      type: "text",
      content: "لماذا لا يقول الألمان «ich habe gehabt» أو «ich bin gewesen» في الحياة اليومية؟<br>السبب بسيط جداً: صيغة *Ich war* كلمة واحدة قصيرة وسلسة في النطق، مقارنة بـ *Ich bin gewesen* (ثلاث كلمات ثقيلة). والأمر نفسه مع *Ich hatte* مقابل *Ich habe gehabt*. لذلك تُعد صياغة war و hatte هي المعيار الطبيعي الأول في كل المحادثات اليومية."
    },
    {
      type: "text",
      content: "تراكيب يومية شائعة جداً مع war و hatte:"
    },
    {
      type: "table",
      headers: ["التركيب الألماني", "المعنى بالعربية", "ملاحظة الاستخدام"],
      rows: [
        ["Ich **hatte** Hunger / Durst.", "كنتُ جائعاً / عطشاناً.", "التعبير عن الجوع والعطش في الماضي"],
        ["Ich **hatte** keine Zeit.", "لم يكن لدي وقت.", "الاعتذار والتبرير اليومي الأكثر شيوعاً"],
        ["Ich **hatte** Glück / Pech.", "حالَفني الحظ / أصابني سوء حظ.", "الأحداث اليومية والمواقف"],
        ["Ich **hatte** Angst.", "كنتُ خائفاً.", "التعبير عن المشاعر والخوف"],
        ["Ich **war** krank / müde.", "كنتُ مريضاً / متعباً.", "الحالة الصحية والجسدية"],
        ["Das **war** toll / lecker!", "كان ذلك رائعاً / لذيذاً!", "التعليق على الطعام والرحلات"]
      ]
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Wo **warst** du gestern um 18 Uhr?",
      ar: "أين كنتَ بالأمس في تمام الساعة السادسة مساءً؟",
      highlight: "warst",
      audio: true,
      note: "مع الضمير du يكون تصريف sein هو warst"
    },
    {
      de: "Ich **war** gestern den ganzen Nachmittag im Büro.",
      ar: "كنتُ بالأمس طوال فترة بعد الظهر في المكتب.",
      highlight: "war",
      audio: true,
      note: "مع الضمير ich نستخدم war"
    },
    {
      de: "Wir **hatten** gestern leider überhaupt keine Zeit.",
      ar: "للأسف لم يكن لدينا أي وقت على الإطلاق بالأمس.",
      highlight: "hatten",
      audio: true,
      note: "مع الفاعل wir يكون تصريف haben هو hatten"
    },
    {
      de: "Er **hatte** großes Glück bei dem Unfall.",
      ar: "كان لديه حظ كبير في ذلك الحادث (نجا بأعجوبة).",
      highlight: "hatte",
      audio: true,
      note: "Glück haben ← er hatte Glück"
    },
    {
      de: "Kinder, **wart** ihr heute schon draußen?",
      ar: "يا أطفال، هل كنتم بالخارج اليوم بالفعل؟",
      highlight: "wart",
      audio: true,
      note: "الخطاب موجه للأطفال (ihr) ← wart"
    },
    {
      de: "**Hattet** ihr gestern viel Spaß auf der Party?",
      ar: "هل استمتعتم كثيراً في الحفلة بالأمس؟",
      highlight: "Hattet",
      audio: true,
      note: "Spaß haben مع ihr في الماضي ← hattet ihr Spaß?"
    },
    {
      de: "Meine Großeltern **waren** sehr herzliche Menschen.",
      ar: "كان أجدادي أشخاصاً طيبين وودودين جداً.",
      highlight: "waren",
      audio: true,
      note: "الجمع الغائب sie (أجدادي) ← waren"
    },
    {
      de: "Das Essen im Restaurant **war** wirklich fantastisch!",
      ar: "كان الطعام في المطعم رائعاً حقاً!",
      highlight: "war",
      audio: true,
      note: "das Essen محايد (es) ← war"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "الفرق بين (كان) و(كان عنده): في العربية نستخدم كلمة «كان» في كلتا الحالتين (كنتُ مريضاً = ich war krank) مقابل (كان عندي امتحان = ich hatte eine Prüfung). احرص على عدم الخلط بين war و hatte!",
    "احذر من الخطأ الشائع في كتابة (wart): مع الضمير ihr نكتب *wart* بحرف t فقط (*ihr wart*)، ولا تخلط بينها وبين كلمة *ward* القديمة أو فعل *warten*.",
    "تجنب ترجمة «كنت في ألمانيا» إلى *Ich habe in Deutschland gewesen*! هذا تركيب خاطئ تماماً؛ الألمانية تستخدم دائماً: *Ich **war** in Deutschland*."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "تصريف sein: ich war, du warst, er/sie/es war, wir waren, ihr wart, sie/Sie waren.",
    "تصريف haben: ich hatte, du hattest, er/sie/es hatte, wir hatten, ihr hattet, sie/Sie hatten.",
    "تصريف ich يطابق تصريف er/sie/es تماماً في الفعلين (war و hatte).",
    "في الحديث اليومي: استخدم war و hatte دائماً ولا تستخدم bin gewesen أو habe gehabt.",
    "تعبيرات شائعة: hatte Zeit, hatte Angst, hatte Hunger, war krank, war daheim."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "das Glück", plural: "kein Plural", ar: "الحظ / السعادة", article: "das", example: "Wir hatten gestern viel Glück." },
    { de: "das Pech", plural: "kein Plural", ar: "سوء الحظ / النحس", article: "das", example: "Er hatte leider Pech mit dem Auto." },
    { de: "die Angst", plural: "die Ängste", ar: "الخوف", article: "die", example: "Das Kind hatte große Angst vor Hunden." },
    { de: "der Hunger", plural: "kein Plural", ar: "الجوع", article: "der", example: "Nach der Arbeit hatte ich großen Hunger." },
    { de: "der Durst", plural: "kein Plural", ar: "العطش", article: "der", example: "Im Sommer hatten wir immer Durst." },
    { de: "der Spaß", plural: "kein Plural", ar: "المتعة / المرح", article: "der", example: "Hattet ihr gestern viel Spaß?" }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich ___ gestern den ganzen Tag krank im Bett.",
      sentence: "Ich ___ gestern den ganzen Tag krank im Bett.",
      options: ["war", "hatte", "bin", "warst"],
      correct: 0,
      answer: 0,
      explanation: "مع الصفة krank والفاعل ich نستخدم فعل الكينونة في الماضي: war."
    },
    {
      type: "fill-blank",
      question: "___ du gestern Zeit für mich? (haben im Präteritum)",
      sentence: "___ du gestern Zeit für mich?",
      answer: "Hattest",
      accept: ["Hattest", "hattest"],
      explanation: "مع الفاعل du يكون تصريف فعل haben في الماضي هو hattest."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (أين كنتم بالأمس يا أصدقائي؟)",
      words: ["Freunde", "ihr", "gestern", "Wo", "wart", "meine", "?"],
      correct: "Wo wart ihr gestern meine Freunde ?",
      answer: "Wo wart ihr gestern meine Freunde ?",
      accept: ["Wo wart ihr gestern meine Freunde ?", "Wo wart ihr gestern meine Freunde", "Wo wart ihr gestern ?"],
      explanation: "أداة الاستفهام (Wo) + الفعل ثانياً (wart) + الفاعل (ihr) + ظرف الزمان وباقي الجملة."
    },
    {
      type: "multiple-choice",
      question: "Wir ___ gestern sehr viel Spaß auf dem Fest.",
      sentence: "Wir ___ gestern sehr viel Spaß auf dem Fest.",
      options: ["hatten", "waren", "hattet", "haben"],
      correct: 0,
      answer: 0,
      explanation: "التركيب هو Spaß haben، ومع الضمير wir في الماضي يكون: hatten."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ihr waren gestern nicht in der Schule.)",
      sentence: "Ihr waren gestern nicht in der Schule.",
      text: "Ihr waren gestern nicht in der Schule.",
      corrected: "Ihr wart gestern nicht in der Schule.",
      answer: "Ihr wart gestern nicht in der Schule.",
      accept: ["Ihr wart gestern nicht in der Schule.", "Ihr wart gestern nicht in der Schule"],
      explanation: "تصريف فعل sein في الماضي مع الضمير ihr (أنتم) هو wart وليس waren."
    },
    {
      type: "match",
      question: "طابق كل ضمير مع تصريف sein في Präteritum:",
      pairs: [
        { left: "ich", right: "war" },
        { left: "du", right: "warst" },
        { left: "ihr", right: "wart" },
        { left: "wir", right: "waren" }
      ],
      explanation: "تصريفات فعل sein في الماضي البسيط."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (لم يكن لدي وقت بالأمس.)",
      text: "لم يكن لدي وقت بالأمس.",
      from: "لم يكن لدي وقت بالأمس.",
      answer: "Ich hatte gestern keine Zeit.",
      accept: ["Ich hatte gestern keine Zeit.", "Ich hatte gestern keine Zeit", "Gestern hatte ich keine Zeit."],
      explanation: "نستخدم hatte مع keine Zeit في صيغة Präteritum الطبيعية."
    },
    {
      type: "fill-blank",
      question: "Meine Schwester ___ gestern hohes Fieber. (haben im Präteritum)",
      sentence: "Meine Schwester ___ gestern hohes Fieber.",
      answer: "hatte",
      accept: ["hatte"],
      explanation: "أختي هي ضمير الغائب sie (هي)، وتصريف haben مع الغائب هو hatte."
    },
    {
      type: "multiple-choice",
      question: "Frau Müller, ___ Sie schon einmal in Wien?",
      sentence: "Frau Müller, ___ Sie schon einmal in Wien?",
      options: ["waren", "warst", "wart", "hatten"],
      correct: 0,
      answer: 0,
      explanation: "صيغة الاحترام Sie تأخذ دائماً التصريف waren مع فعل sein."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich bin gestern große Angst gehabt.)",
      sentence: "Ich bin gestern große Angst gehabt.",
      text: "Ich bin gestern große Angst gehabt.",
      corrected: "Ich hatte gestern große Angst.",
      answer: "Ich hatte gestern große Angst.",
      accept: ["Ich hatte gestern große Angst.", "Ich hatte gestern große Angst"],
      explanation: "التعبير عن الخوف يكون بـ Angst haben، وفي الماضي نقول مباشرة: Ich hatte große Angst."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Wo ___ ihr am Wochenende?",
      options: ["wart", "waren", "warst", "seid"],
      correct: 0,
      answer: 0,
      explanation: "تصريف sein مع الضمير ihr (أنتم) في Präteritum هو wart."
    },
    {
      type: "multiple-choice",
      question: "Er ___ gestern Glück, der Zug hatte Verspätung.",
      options: ["hatte", "war", "hat", "ist"],
      correct: 0,
      answer: 0,
      explanation: "التعبير هو Glück haben، ومع er في الماضي يكون: hatte."
    },
    {
      type: "multiple-choice",
      question: "Gestern ___ das Wetter wirklich herrlich.",
      options: ["war", "hatte", "waren", "ist"],
      correct: 0,
      answer: 0,
      explanation: "الطقس das Wetter يعامل معاملة المفرد الغائب (es) فيأخذ war."
    },
    {
      type: "multiple-choice",
      question: "Wir ___ gestern sehr müde nach der Reise.",
      options: ["waren", "hatten", "wart", "sind"],
      correct: 0,
      answer: 0,
      explanation: "مع الصفة müde والفاعل wir نستخدم فعل الكينونة في الماضي: waren."
    },
    {
      type: "multiple-choice",
      question: "___ du gestern Kopfschmerzen?",
      options: ["Hattest", "Warst", "Hattet", "Hast"],
      correct: 0,
      answer: 0,
      explanation: "مع الصداع (Kopfschmerzen) والفاعل du نستخدم: Hattest du Kopfschmerzen?"
    }
  ]
};
window.lessons = window.LESSONS;
