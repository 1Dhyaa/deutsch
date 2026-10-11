window.LESSONS = window.LESSONS || window.lessons || {};
window.lessons = window.LESSONS;
window.LESSONS["a1-review-06"] = {
  id: "a1-review-06",
  level: "a1-review",
  order: 6,
  slug: "imperativ",
  title: {
    de: "Der Imperativ",
    ar: "صيغة الأمر (Der Imperativ)"
  },
  tags: ["grammar", "imperativ", "verbs", "commands", "a1"],
  goal: "تعلم كيفية إعطاء الأوامر والتعليمات أو الطلب بأدب باستخدام صيغة الأمر في اللغة الألمانية للضمائر (du, ihr, Sie).",
  explanation: [
    {
      type: "text",
      content: "صيغة الأمر (Der Imperativ) تُستخدم لإعطاء تعليمات، أوامر، نصائح، أو طلبات. في الألمانية، نصيغ الأمر لثلاثة ضمائر فقط: **du** (أنت للمفرد)، **ihr** (أنتم للجمع)، و **Sie** (حضرتك/حضراتكم للاحترام)."
    },
    {
      type: "rule",
      content: "لا نستخدم صيغة الأمر للضمائر ich, er, sie (هي), es, wir, sie (هم). الأمر يوجه للمخاطب فقط."
    },
    {
      type: "table",
      headers: ["الضمير", "طريقة الصياغة", "مثال: kommen", "مثال: gehen"],
      rows: [
        ["**du** (أنت)", "الفعل المصرف مع du، **ونحذف** النهاية (-st) والضمير (du)", "**Komm!** (تعال)", "**Geh!** (اذهب)"],
        ["**ihr** (أنتم)", "الفعل المصرف مع ihr، **ونحذف** الضمير (ihr) فقط", "**Kommt!** (تعالوا)", "**Geht!** (اذهبوا)"],
        ["**Sie** (للاحترام)", "الفعل في المصدر + الضمير Sie (لا نحذف شيئاً، فقط نقلب الترتيب)", "**Kommen Sie!**", "**Gehen Sie!**"]
      ]
    },
    {
      type: "text",
      content: "ملاحظات هامة جداً لصيغة (du):\n1. إذا كان الفعل يتغير حرفه الصوتي (e -> i أو ie) مع du، فإن هذا التغيير **يبقى** في صيغة الأمر! (مثال: du sprichst -> **Sprich!** / du liest -> **Lies!**).\n2. إذا كان الفعل يتغير حرفه الصوتي بإضافة نقطتين Umlaut (a -> ä)، فإننا **نحذف** النقطتين في الأمر! (مثال: du fährst -> **Fahr!** / du schläfst -> **Schlaf!**)."
    },
    {
      type: "text",
      content: "الفعل sein (يكون) شاذ في صيغة الأمر ويجب حفظه:"
    },
    {
      type: "table",
      headers: ["الضمير", "الأمر من الفعل sein"],
      rows: [
        ["du", "**Sei** (كن) - Sei ruhig! (كن هادئاً)"],
        ["ihr", "**Seid** (كونوا) - Seid ruhig!"],
        ["Sie", "**Seien Sie** - Seien Sie ruhig!"]
      ]
    },
    {
      type: "text",
      content: "ملاحظة: نستخدم كلمة **bitte** (من فضلك) كثيراً مع الأمر لجعله مهذباً. يمكن أن تأتي في البداية أو الوسط أو النهاية."
    }
  ],
  examples: [
    {
      de: "**Mach** die Tür zu!",
      ar: "أغلق الباب!",
      audio: true,
      note: "صيغة du. الفعل machen -> du machst -> نحذف st و du -> Mach!"
    },
    {
      de: "**Macht** die Tür zu!",
      ar: "أغلقوا الباب!",
      audio: true,
      note: "صيغة ihr. الفعل machen -> ihr macht -> نحذف ihr -> Macht!"
    },
    {
      de: "**Machen Sie** die Tür zu, bitte.",
      ar: "أغلق الباب من فضلك (للاحترام).",
      audio: true,
      note: "صيغة Sie. المصدر + Sie."
    },
    {
      de: "**Sprich** lauter, bitte!",
      ar: "تحدث بصوت أعلى، من فضلك!",
      audio: true,
      note: "تغيير e -> i يبقى. sprechen -> du sprichst -> Sprich!"
    },
    {
      de: "**Lies** den Text!",
      ar: "اقرأ النص!",
      audio: true,
      note: "تغيير e -> ie يبقى. lesen -> du liest -> Lies!"
    },
    {
      de: "**Fahr** langsam!",
      ar: "قد ببطء!",
      audio: true,
      note: "تغيير a -> ä يُلغى. fahren -> du fährst -> Fahr! (بدون نقطتين)."
    },
    {
      de: "**Sei** bitte pünktlich!",
      ar: "كن في الموعد من فضلك!",
      audio: true,
      note: "صيغة du من الفعل sein."
    },
    {
      de: "**Trinkt** viel Wasser!",
      ar: "اشربوا ماءً كثيراً!",
      audio: true,
      note: "صيغة ihr. (أنتم)."
    }
  ],
  arabicTips: [
    "لصياغة أمر المفرد (أنت)، قم بتصريف الفعل ذهنياً مع (du) أولاً، ثم احذف (du) والنهاية (st). هذه هي أسهل طريقة.",
    "تذكر أن علامة التعجب (!) شائعة جداً في نهاية جمل الأمر في الألمانية.",
    "استخدام صيغة (Sie) لا يعني دائماً أنك غاضب وتعطي أمراً عسكرياً، غالباً مع (bitte) تعني 'تفضل بالقيام بكذا'."
  ],
  summary: [
    "الأمر للمفرد (du): احذف du و st. (Mach!)",
    "الأمر للجمع (ihr): احذف ihr فقط. (Macht!)",
    "الأمر للاحترام (Sie): ضع الفعل في المصدر ثم Sie. (Machen Sie!)",
    "تغير e -> i يبقى في الأمر (Sprich!).",
    "تغير a -> ä يُلغى ولا نضع النقطتين (Fahr!).",
    "الفعل sein شاذ: Sei, Seid, Seien Sie."
  ],
  vocabulary: [
    { de: "machen", plural: "-", ar: "يفعل / يصنع", example: "Mach deine Hausaufgaben!" },
    { de: "sprechen", plural: "-", ar: "يتحدث", example: "Sprich langsam!" },
    { de: "lesen", plural: "-", ar: "يقرأ", example: "Lies das Buch!" },
    { de: "fahren", plural: "-", ar: "يقود / يسافر", example: "Fahr vorsichtig!" },
    { de: "sein", plural: "-", ar: "يكون", example: "Sei brav!" },
    { de: "bitte", plural: "-", ar: "من فضلك / عفواً", example: "Komm bitte hierher." }
  ],
  exercises: [
    {
      type: "multiple-choice",
      question: "ما هي صيغة الأمر (du) من الفعل kommen؟",
      options: ["Kommst", "Komm", "Kommen"],
      correctIndex: 1,
      explanation: "du kommst -> نحذف du و st -> Komm"
    },
    {
      type: "multiple-choice",
      question: "ما هي صيغة الأمر (ihr) من الفعل trinken؟",
      options: ["Trinken", "Trink", "Trinkt"],
      correctIndex: 2,
      explanation: "ihr trinkt -> نحذف ihr -> Trinkt"
    },
    {
      type: "multiple-choice",
      question: "ما هي صيغة الأمر (Sie) من الفعل gehen؟",
      options: ["Geh Sie", "Gehen Sie", "Geht Sie"],
      correctIndex: 1,
      explanation: "المصدر (Gehen) متبوعاً بـ Sie."
    },
    {
      type: "fill-blank",
      question: "____ (du - sprechen) Deutsch mit mir!",
      options: ["Sprech", "Sprichst", "Sprich"],
      correctOption: "Sprich",
      explanation: "sprechen يتغير إلى sprichst، ونحذف st فتبقى Sprich."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في أمر المفرد: Fähr nach Hause!",
      incorrect: "Fähr nach Hause!",
      correct: "Fahr nach Hause!",
      explanation: "الـ Umlaut (النقطتان) تلغى في صيغة الأمر للمفرد مع الأفعال التي تحول a إلى ä."
    },
    {
      type: "translate",
      question: "ترجم: كونوا هادئين! (أنتم - ihr)",
      target: "Seid ruhig!",
      explanation: "الأمر من الفعل sein للضمير ihr هو Seid."
    },
    {
      type: "match",
      question: "طابق بين الضمير وصيغة الأمر للفعل machen:",
      pairs: [
        { left: "du", right: "Mach!" },
        { left: "ihr", right: "Macht!" },
        { left: "Sie", right: "Machen Sie!" }
      ],
      explanation: "صيغ الأمر الثلاثة للفعل machen."
    },
    {
      type: "multiple-choice",
      question: "____ (du - lesen) den Text bitte.",
      options: ["Lies", "Lese", "Liest"],
      correctIndex: 0,
      explanation: "lesen يتغير إلى liest، ونحذف st فتبقى Lies."
    },
    {
      type: "fill-blank",
      question: "____ (Sie - sein) bitte leise!",
      options: ["Sind Sie", "Sein Sie", "Seien Sie"],
      correctOption: "Seien Sie",
      explanation: "صيغة الاحترام من الفعل sein هي Seien Sie."
    },
    {
      type: "word-order",
      question: "رتب كلمات جملة الأمر (Sie):",
      words: ["bitte", "Sie", "hier", "Unterschreiben"],
      correctOrder: ["Unterschreiben", "Sie", "bitte", "hier"],
      explanation: "نبداً بالفعل (Unterschreiben) ثم الضمير (Sie)."
    }
  ],
  quiz: [
    {
      question: "كيف نصيغ الأمر للمفرد (du) بشكل عام؟",
      options: ["نستخدم المصدر فقط", "نصرف الفعل مع du ونحذف (st) والضمير (du)", "نضيف (t) لنهاية الفعل", "نضع Sie بعد الفعل"],
      correctIndex: 1,
      explanation: "هذه هي القاعدة العامة لأمر المفرد (du)."
    },
    {
      question: "ما هو الأمر (du) من الفعل schlafen (ينام)؟",
      options: ["Schläf!", "Schlafe!", "Schlaf!", "Schläfst!"],
      correctIndex: 2,
      explanation: "رغم أننا نقول (du schläfst)، إلا أن الـ Umlaut تُحذف في الأمر فتصبح Schlaf!"
    },
    {
      question: "ما هو الأمر (ihr) من الفعل lernen؟",
      options: ["Lernt!", "Lern!", "Lernen Sie!", "Lernet!"],
      correctIndex: 0,
      explanation: "نصرف مع ihr (ihr lernt) ونحذف الضمير فقط."
    },
    {
      question: "ما هي صيغة الأمر (du) الصحيحة من الفعل sein؟",
      options: ["Bist!", "Sei!", "Sind!", "Sein!"],
      correctIndex: 1,
      explanation: "الفعل sein شاذ والأمر للمفرد منه هو Sei!"
    },
    {
      question: "اختر الجملة الصحيحة للأمر بصيغة الاحترام (Sie):",
      options: ["Gehen Sie bitte!", "Geh Sie bitte!", "Geht Sie bitte!", "Sie gehen bitte!"],
      correctIndex: 0,
      explanation: "صيغة الاحترام تتكون من مصدر الفعل متبوعاً بالضمير Sie."
    }
  ]
};
