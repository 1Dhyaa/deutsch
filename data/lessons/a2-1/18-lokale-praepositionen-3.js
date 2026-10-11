// data/lessons/a2-1/18-lokale-praepositionen-3.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-18"] = {
  id: "a2-1-18",
  level: "a2-1",
  order: 18,
  slug: "lokale-praepositionen-3",
  title: {
    de: "Lokale Präpositionen (3) / Die 9 Wechselpräpositionen",
    ar: "حروف الجر المكانية (3): حروف الجر المشتركة التسعة"
  },
  tags: ["grammatik", "praepositionen", "wechselpraepositionen", "akkusativ", "dativ", "a2"],

  // 1. الهدف
  goal: "ستتعلم حروف الجر التسعة المشتركة (Wechselpräpositionen) التي تقبل الحالتين الإعرابيتين النصب والجر، والقاعدة الصارمة للتمييز بين الحركة والاتجاه (Wohin? + Akkusativ) والثبات والسكون (Wo? + Dativ)، وأزواج الأفعال الألمانية الشهيرة (stellen/stehen, legen/liegen, setzen/sitzen, hängen/hängen).",

  // 2. الشرح
  explanation: [
    {
      type: "text",
      content: "تُعدّ **حروف الجر المشتركة التسعة (Wechselpräpositionen)** من أهم ركائز قواعد اللغة الألمانية. سُميت «مشتركة» لأنها يمكن أن تأخذ بعدها حالة النصب **(Akkusativ)** أو حالة الجر **(Dativ)**، وتحدد ذلك قاعدة ذهبية واحدة لا استثناء لها:"
    },
    {
      type: "rule",
      content: "1. حركة وتغيير مكان وانتقال من نقطة لأخرى: نسأل بـ **Wohin?** (إلى أين؟) ← نستخدم **Akkusativ**.\n2. ثبات وسكون ووجود في موضع محدد: نسأل بـ **Wo?** (أين؟) ← نستخدم **Dativ**."
    },
    {
      type: "table",
      headers: ["حرف الجر", "المعنى بالعربية", "مع Akkusativ (إلى أين؟ Wohin?)", "مع Dativ (أين؟ Wo?)"],
      rows: [
        ["in", "في / إلى داخل", "Ich gehe in **das** Kino. (ins Kino)", "Ich bin in **dem** Kino. (im Kino)"],
        ["an", "على (سطح رأسي) / عند / بمحاذاة", "Ich hänge das Bild an **die** Wand.", "Das Bild hängt an **der** Wand."],
        ["auf", "على (سطح أفقي) / فوق", "Ich lege das Buch auf **den** Tisch.", "Das Buch liegt auf **dem** Tisch."],
        ["neben", "بجانب / بجوار", "Stell den Stuhl neben **das** Bett!", "Der Stuhl steht neben **dem** Bett."],
        ["hinter", "خلف / وراء", "Er fährt das Auto hinter **das** Haus.", "Das Auto steht hinter **dem** Haus."],
        ["über", "فوق (بدون ملامسة) / عبر", "Wir hängen die Lampe über **den** Tisch.", "Die Lampe hängt über **dem** Tisch."],
        ["unter", "تحت / أسفل", "Die Katze läuft unter **den** Schrank.", "Die Katze schläft unter **dem** Schrank."],
        ["vor", "أمام", "Ich stelle das Fahrrad vor **die** Tür.", "Das Fahrrad steht vor **der** Tür."],
        ["zwischen", "بين (شيئين أو شخصين)", "Er setzt sich zwischen **die** Freunde.", "Er sitzt zwischen **den** Freunden."]
      ]
    },
    {
      type: "rule",
      content: "ادمج حروف الجر مع أدوات التعريف للمذكر والمحايد دائماً: in + dem = **im** | in + das = **ins** | an + dem = **am** | an + das = **ans**."
    },
    {
      type: "text",
      content: "لكل وضعية مكانية زوجان من الأفعال: فعل حركة متعدٍّ يأخذ مفعولاً به وAkkusativ، وفعل سكون لازم يكتفي بالفاعل ويأخذ Dativ:"
    },
    {
      type: "table",
      headers: ["فعل الحركة (منتظم + Akkusativ)", "المعنى", "فعل السكون (شاذ + Dativ)", "المعنى", "مثال مقارن"],
      rows: [
        ["stellen (stellte, hat gestellt)", "يضع عمودياً / يوقف", "stehen (stand, hat gestanden)", "يقف / موضوع عمودياً", "Ich stelle die Flasche auf **den** Tisch. vs Die Flasche steht auf **dem** Tisch."],
        ["legen (legte, hat gelegt)", "يضع أفقياً / يسطح", "liegen (lag, hat gelegen)", "يرقد / موضوع أفقياً", "Ich lege den Stift auf **das** Heft. vs Der Stift liegt auf **dem** Heft."],
        ["setzen (setzte, hat gesetzt)", "يُجلِس / يضع جالساً", "sitzen (saß, hat gesessen)", "يجلس", "Die Mutter setzt das Kind auf **den** Stuhl. vs Das Kind sitzt auf **dem** Stuhl."],
        ["hängen (hängte, hat gehängt)", "يُعلّق (حركة منتظمة)", "hängen (hing, hat gehangen)", "مُعلّق (سكون شاذ)", "Er hängt den Mantel an **den** Haken. vs Der Mantel hängt an **dem** Haken."]
      ]
    }
  ],

  // 3. الأمثلة
  examples: [
    {
      de: "Ich stelle die Blumen auf **den** Tisch.",
      ar: "أنا أضع الزهور على الطاولة.",
      highlight: "den",
      audio: true,
      note: "فعل حركة stellen: نسأل Wohin? ← مذكر مع Akkusativ: den Tisch"
    },
    {
      de: "Die Blumen stehen auf **dem** Tisch.",
      ar: "الزهور موضوعة على الطاولة.",
      highlight: "dem",
      audio: true,
      note: "فعل سكون stehen: نسأل Wo? ← مذكر مع Dativ: dem Tisch"
    },
    {
      de: "Er legt das Buch in **die** Tasche.",
      ar: "هو يضع الكتاب في الحقيبة.",
      highlight: "die",
      audio: true,
      note: "فعل حركة legen: نسأل Wohin? ← مؤنث مع Akkusativ: die Tasche"
    },
    {
      de: "Das Buch liegt in **der** Tasche.",
      ar: "الكتاب موجود داخل الحقيبة.",
      highlight: "der",
      audio: true,
      note: "فعل حالة liegen: نسأل Wo? ← مؤنث مع Dativ: der Tasche"
    },
    {
      de: "Wir hängen das Bild an **die** Wand.",
      ar: "نحن نعلّق اللوحة على الجدار.",
      highlight: "die",
      audio: true,
      note: "حركة تعليق hängen: نسأل Wohin? ← مؤنث مع Akkusativ: die Wand"
    },
    {
      de: "Das Bild hängt an **der** Wand.",
      ar: "اللوحة معلّقة على الجدار.",
      highlight: "der",
      audio: true,
      note: "سكون وثبات hängen: نسأل Wo? ← مؤنث مع Dativ: der Wand"
    },
    {
      de: "Setz dich bitte auf **den** Stuhl!",
      ar: "اجلس رجاءً على الكرسي!",
      highlight: "den",
      audio: true,
      note: "حركة الجلوس sich setzen: نسأل Wohin? ← Akkusativ: den Stuhl"
    },
    {
      de: "Der Opa sitzt gemütlich auf **dem** Stuhl.",
      ar: "الجد يجلس بارتياح على الكرسي.",
      highlight: "dem",
      audio: true,
      note: "حالة الجلوس sitzen: نسأل Wo? ← Dativ: dem Stuhl"
    },
    {
      de: "Der Hund läuft unter **das** Bett.",
      ar: "الكلب يركض إلى تحت السرير.",
      highlight: "das",
      audio: true,
      note: "حركة وانتقال laufen: نسأل Wohin? ← محايد مع Akkusativ: das Bett"
    },
    {
      de: "Der Hund schläft unter **dem** Bett.",
      ar: "الكلب ينام تحت السرير.",
      highlight: "dem",
      audio: true,
      note: "سكون وثبات schlafen: نسأل Wo? ← محايد مع Dativ: dem Bett"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في اللغة العربية نقول: «وضعتُ الكتاب على الطاولة» و«الكتاب على الطاولة»؛ حرف الجر «على» يجر الاسم في كلتا الحالتين دون أي اختلاف. لكن في الألمانية يجب تحديد هل هناك انتقال وتغيير للمكان (Akkusativ) أم ثبات واستقرار في المكان (Dativ).",
    "الفرق الدقيق بين auf و an: كلاهما يُترجم غالباً إلى «على»، لكن auf تختص بالأسطح الأفقية المستوية مثل الطاولة أو الأرضية، بينما an تختص بالأسطح الرأسية (كالجدار) أو التماس مع الحواف والحدود (على الشاطئ am Strand، عند النافذة am Fenster).",
    "انتبه للأفعال المتشابهة: أفعال الحركة (stellen, legen, setzen) كلها منتظمة وتأخذ مفعولاً به، بينما أفعال السكون (stehen, liegen, sitzen) كلها أفعال قوية شاذة ولا تأخذ مفعولاً به مباشراً."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "حروف الجر التسعة المشتركة: in, an, auf, neben, hinter, über, unter, vor, zwischen",
    "سؤال الحركة Wohin? (تغيير مكان) يستوجب Akkusativ (der → den | das → das | die → die | die Pl. → die)",
    "سؤال السكون Wo? (ثبات في موضع) يستوجب Dativ (der/das → dem | die → der | die Pl. → den + n)",
    "أفعال الحركة: stellen, legen, setzen, hängen (منتظم) تأخذ دائماً مفعولاً به مع Akkusativ",
    "أفعال السكون: stehen, liegen, sitzen, hängen (شاذ) تصف الوضع الثابت مع Dativ"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "stellen", plural: "stellt, stellte, hat gestellt", ar: "يضع (رأسياً / عمودياً)", article: "", example: "Ich stelle die Flasche auf den Tisch." },
    { de: "stehen", plural: "steht, stand, hat gestanden", ar: "يقف / موضوع عمودياً", article: "", example: "Die Flasche steht auf dem Tisch." },
    { de: "legen", plural: "legt, legte, hat gelegt", ar: "يضع (أفقياً / ممدداً)", article: "", example: "Er legt den Stift auf den Schreibtisch." },
    { de: "liegen", plural: "liegt, lag, hat gelegen", ar: "يرقد / موضوع أفقياً", article: "", example: "Der Stift liegt auf dem Schreibtisch." },
    { de: "hängen", plural: "hängt, hing, hat gehangen", ar: "يُعلّق / يكون مُعلّقاً", article: "", example: "Das Foto hängt an der Wand." },
    { de: "die Wand", plural: "die Wände", ar: "الجدار / الحائط", article: "die", example: "Die Uhr hängt an der Wand." },
    { de: "der Schrank", plural: "die Schränke", ar: "الخزانة / الدولاب", article: "der", example: "Ich stelle das Glas in den Schrank." },
    { de: "der Teppich", plural: "die Teppiche", ar: "السجادة", article: "der", example: "Der Teppich liegt auf dem Boden." }
  ],

  // 7. تمارين تفاعلية
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich lege das Buch auf ___ Tisch. (حركة / أين أضع الكتاب؟)",
      options: ["den", "dem", "das", "der"],
      correct: 0,
      explanation: "فعل legen يدل على حركة وتغيير مكان (Wohin?)، وكلمة der Tisch في حالة النصب (Akkusativ) تتحول إلى den."
    },
    {
      type: "multiple-choice",
      question: "Das Buch liegt auf ___ Tisch. (سكون / أين يوجد الكتاب؟)",
      options: ["dem", "den", "der", "das"],
      correct: 0,
      explanation: "فعل liegen يدل على سكون وثبات وموقع (Wo?)، والمذكر der Tisch في حالة الجر (Dativ) يتحول إلى dem."
    },
    {
      type: "fill-blank",
      question: "Er hängt das schöne Bild an ___ Wand.",
      answer: "die",
      accept: ["die"],
      explanation: "فعل hängen هنا يدل على حركة التعليق (Wohin?)، والمؤنث die Wand يبقى die في حالة Akkusativ."
    },
    {
      type: "fill-blank",
      question: "Das Bild hängt schon an ___ Wand.",
      answer: "der",
      accept: ["der"],
      explanation: "اللوحة معلقة بالفعل وثابتة في موضعها (Wo?)، والمؤنث die Wand يتحول إلى der في حالة Dativ."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (الأم تضع الطفل في السرير)",
      words: ["Die", "Mutter", "legt", "das", "Kind", "in", "das", "Bett", "."],
      correct: "Die Mutter legt das Kind in das Bett .",
      explanation: "الفاعل (Die Mutter) + الفعل (legt) + المفعول (das Kind) + حرف الجر مع Akkusativ (in das Bett)."
    },
    {
      type: "match",
      question: "طابق فعل الحركة مع فعل السكون المقابل له:",
      pairs: [
        { left: "stellen (يضع عمودياً)", right: "stehen (يقف عمودياً)" },
        { left: "legen (يضع أفقياً)", right: "liegen (يرقد أفقياً)" },
        { left: "setzen (يُجلِس شخصاً)", right: "sitzen (يجلس)" },
        { left: "Wohin? (إلى أين؟)", right: "Akkusativ" }
      ],
      explanation: "أفعال الحركة (stellen, legen, setzen) تأخذ مفعولاً به مع Akkusativ، بينما أفعال السكون (stehen, liegen, sitzen) تصف حالة وموقعاً مع Dativ."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (القطة تجلس تحت الطاولة.)",
      from: "القطة تجلس تحت الطاولة.",
      answer: "Die Katze sitzt unter dem Tisch.",
      accept: ["Die Katze sitzt unter dem Tisch.", "Die Katze sitzt unter dem Tisch"],
      explanation: "فعل sitzen يدل على سكون (Wo?)، لذا يأخذ unter حالة Dativ: der Tisch ← dem Tisch."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich stelle die Lampe auf dem Tisch.)",
      sentence: "Ich stelle die Lampe auf dem Tisch.",
      corrected: "Ich stelle die Lampe auf den Tisch.",
      accept: ["Ich stelle die Lampe auf den Tisch.", "Ich stelle die Lampe auf den Tisch"],
      explanation: "فعل stellen حركة وانتقال إلى موضع جديد (Wohin?) ويستوجب Akkusativ: den Tisch وليس dem Tisch."
    },
    {
      type: "multiple-choice",
      question: "Wir gehen heute Abend ___ Kino.",
      options: ["ins", "im", "in der", "ans"],
      correct: 0,
      explanation: "نحن ذاهبون إلى السينما (حركة Wohin?) ← in + das Kino تدمج لتصبح ins Kino."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Wir sind heute Abend ins Kino.)",
      sentence: "Wir sind heute Abend ins Kino.",
      corrected: "Wir sind heute Abend im Kino.",
      accept: ["Wir sind heute Abend im Kino.", "Wir sind heute Abend im Kino"],
      explanation: "نحن متواجدون بالفعل في السينما (سكون وثبات Wo?) ← in + dem Kino تدمج لتصبح im Kino."
    }
  ],

  // 8. اختبار الدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Wohin hast du meine Tasche gestellt? - Sie steht neben ___ Sofa.",
      options: ["dem", "das", "den", "die"],
      correct: 0,
      explanation: "الفعل steht يدل على موضع وثبات (Wo?)، والاسم المحايد das Sofa يصبح dem في حالة Dativ."
    },
    {
      type: "multiple-choice",
      question: "Kinder, bitte setzt euch an ___ Tisch!",
      options: ["den", "dem", "das", "der"],
      correct: 0,
      explanation: "فعل sich setzen يدل على حركة الجلوس (Wohin?)، والمذكر der Tisch يأخذ den في Akkusativ."
    },
    {
      type: "multiple-choice",
      question: "Die Schlüssel liegen noch auf ___ Kommode.",
      options: ["der", "die", "den", "dem"],
      correct: 0,
      explanation: "فعل liegen يدل على سكون وموقع (Wo?)، والمؤنث die Kommode يتحول إلى der في حالة Dativ."
    },
    {
      type: "multiple-choice",
      question: "Er stellt das Fahrrad hinter ___ Haus.",
      options: ["das", "dem", "den", "des"],
      correct: 0,
      explanation: "فعل stellen يدل على حركة (Wohin?)، والمحايد das Haus يبقى das في حالة Akkusativ."
    },
    {
      type: "multiple-choice",
      question: "Der Hund schläft gemütlich zwischen ___ Stühlen.",
      options: ["den", "die", "der", "dem"],
      correct: 0,
      explanation: "فعل النوم schlafen سكون وموقع (Wo?)، والجمع die Stühle يأخذ den في حالة Dativ (den Stühlen)."
    }
  ]
};

window.lessons = window.LESSONS;
