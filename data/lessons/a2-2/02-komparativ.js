// data/lessons/a2-2/02-komparativ.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-2-02"] = {
  id: "a2-2-02",
  level: "a2-2",
  order: 2,
  slug: "komparativ",
  title: {
    de: "Der Komparativ",
    ar: "صيغة المقارنة (Der Komparativ: -er als)"
  },
  tags: ["grammatik", "adjektive", "komparativ", "vergleich", "a2"],

  // 1. الهدف من الدرس
  goal: "ستتعلم في هذا الدرس كيفية صياغة صيغة المقارنة بين شيئين أو شخصين بإضافة اللاحقة -er وحرف المقارنة als، مع معرفة الصفات التي تأخذ أوملاوت (Umlaut)، والصفات الشاذة الشائعة، وكيفية التعبير عن التساوي باستخدام so ... wie.",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "تُستخدم صيغة المقارنة (**Der Komparativ**) عندما نريد المقارنة بين طرفين (شخصين، شيئين، أو حالتين) لمعرفة من يتفوق على الآخر في صفة معينة. وتتكون القاعدة العامة من إضافة اللاحقة **-er** إلى نهاية الصفة، متبوعة بكلمة **als** (بمعنى «مِنْ»)."
    },
    {
      type: "table",
      headers: ["الصفة الأصلية (Positiv)", "صيغة المقارنة (Komparativ)", "المعنى بالعربية", "مثال توضيحي"],
      rows: [
        ["schnell (سريع)", "schnell**er als**", "أسرع من", "Ein Flugzeug ist schnell**er als** ein Zug."],
        ["klein (صغير)", "klein**er als**", "أصغر من", "Mein Zimmer ist klein**er als** dein Zimmer."],
        ["billig (رخيص)", "billig**er als**", "أرخص من", "Dieser Tisch ist billig**er als** jener."],
        ["schön (جميل)", "schön**er als**", "أجمل من", "Der Frühling ist schön**er als** der Herbst."],
        ["leicht (سهل/خفيف)", "leicht**er als**", "أسهل/أخف من", "Deutsch ist leicht**er als** Chinesisch."]
      ]
    },
    {
      type: "rule",
      content: "قاعدة الأوملاوت (Umlaut): الصفات القصيرة المكونة من مقطع صوتي واحد وتحتوي على الأحرف الصوتية (**a, o, u**) تأخذ في الغالب أوملاوت فوق ذلك الحرف عند المقارنة:<br>• **a → ä**: alt → **älter**, warm → **wärmer**, kalt → **kälter**, stark → **stärker**, lang → **länger**.<br>• **o → ö**: groß → **größer**, oft → **öfter**.<br>• **u → ü**: jung → **jünger**, kurz → **kürzer**, klug → **klüger**."
    },
    {
      type: "text",
      content: "حالة خاصة: الصفات المنتهية بـ **-el** أو **-er** (مثل teuer و dunkel): تحذف حرف الـ **-e-** الأصلي قبل إضافة لاحقة المقارنة لتسهيل النطق:"
    },
    {
      type: "table",
      headers: ["الصفة", "صيغة المقارنة الصحيحة", "صيغة خاطئة شائعة", "المعنى"],
      rows: [
        ["teu**e**r (غالٍ)", "teu**rer als**", "teuerer ❌", "أغلى من"],
        ["dunk**e**l (مظلم)", "dunk**ler als**", "dunkeler ❌", "أظلم من"],
        ["sau**e**r (حامض/غاضب)", "sau**rer als**", "sauerer ❌", "أكثر حموضة/غضباً من"]
      ]
    },
    {
      type: "text",
      content: "الصفات الشاذة في المقارنة (Unregelmäßige Komparative): يجب حفظها عن ظهر قلب لأنها تتغير تماماً أو بشكل خاص:"
    },
    {
      type: "table",
      headers: ["الصفة الأصلية", "صيغة المقارنة (Komparativ)", "المعنى بالعربية", "مثال"],
      rows: [
        ["gut (جيد)", "**besser als**", "أفضل / أحسن من", "Er spricht **besser** Deutsch als ich."],
        ["viel (كثير)", "**mehr als**", "أكثر من", "Sie arbeitet **mehr** als ihr Kollege."],
        ["gern (برغبة/بحب)", "**lieber als**", "أكثر تفضيلاً / بالأحرى من", "Ich trinke **lieber** Tee als Kaffee."],
        ["hoch (عالي/مرتفع)", "**höher als** (حذف c)", "أعلى من", "Dieser Turm ist **höher** als das Haus."],
        ["nah (قريب)", "**näher als**", "أقرب من", "Die Schule ist **näher** als der Park."]
      ]
    },
    {
      type: "rule",
      content: "المقارنة عند التساوي (Gleichheit): إذا كان الطرفان متساويين في الصفة تماماً، لا نضيف -er ولا نستخدم als! بدلاً من ذلك نستخدم التركيب:<br>**so + الصفة الأصلية (بدون أي تغيير) + wie**<br>أو التأكيد بكلمة: **genauso + الصفة + wie**<br>مثال: *Er ist **so groß wie** sein Vater.* (هو طويل مثل والده / بنفس طول والده)."
    }
  ],

  // 3. الأمثلة (8+ أمثلة نموذجية مع الترجمة والصوت وتوضيح القاعدة)
  examples: [
    {
      de: "Mein Bruder ist **größer als** ich.",
      ar: "أخي أطول مني.",
      highlight: "größer als",
      audio: true,
      note: "الصفة groß أخذت أوملاوت (ö) ولاحقة المقارنة -er متبوعة بـ als"
    },
    {
      de: "Ein Flugzeug ist **schneller als** ein Zug.",
      ar: "الطائرة أسرع من القطار.",
      highlight: "schneller als",
      audio: true,
      note: "الصفة schnell منتظمة أخذت -er متبوعة بـ als"
    },
    {
      de: "Dieser Pullover ist **teurer als** das Hemd.",
      ar: "هذه السترة أغلى من القميص.",
      highlight: "teurer als",
      audio: true,
      note: "teuer حُذفت منها الـ e الأصلية فأصبحت teurer"
    },
    {
      de: "Anna spricht **besser** Deutsch **als** früher.",
      ar: "آنا تتحدث الألمانية بشكل أفضل من ذي قبل.",
      highlight: "besser als",
      audio: true,
      note: "الصفة gut شاذة وتتحول إلى besser في المقارنة"
    },
    {
      de: "Ich trinke **lieber** Tee **als** Kaffee.",
      ar: "أفضل شرب الشاي على القهوة.",
      highlight: "lieber als",
      audio: true,
      note: "الظرف gern يتحول إلى lieber للتعبير عن التفضيل"
    },
    {
      de: "Im Sommer ist es **wärmer als** im Frühling.",
      ar: "في الصيف يكون الطقس أدفأ من الربيع.",
      highlight: "wärmer als",
      audio: true,
      note: "warm تأخذ أوملاوت وتصبح wärmer"
    },
    {
      de: "Er lernt **mehr als** sein Freund.",
      ar: "هو يدرس أكثر من صديقه.",
      highlight: "mehr als",
      audio: true,
      note: "viel شاذة وتتحول في المقارنة إلى mehr"
    },
    {
      de: "Der Mount Everest ist **höher als** der Mont Blanc.",
      ar: "قمة إفرست أعلى من قمة مون بلان.",
      highlight: "höher als",
      audio: true,
      note: "hoch تحذف حرف الـ c وتأخذ أوملاوت: höher"
    },
    {
      de: "Mein neues Zimmer ist **genauso groß wie** mein altes Zimmer.",
      ar: "غرفتي الجديدة بنفس حجم غرفتي القديمة تماماً.",
      highlight: "genauso groß wie",
      audio: true,
      note: "المقارنة المتساوية تستخدم genauso ... wie مع الصفة الأساسية"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "الفرق بين als و wie: في المقارنة غير المتساوية (التفاضل) نستخدم حصراً كلمة **als** (مثل: größer als = أكبر من). أما كلمة **wie** فتُستخدم حصراً عند التساوي (مثل: so groß wie = بنفس كبر / مثل). خلط الاثنين مثل قول: *schneller wie* خطأ شائع وشديد بين الأجانب بل وحتى في اللهجات العامية الألمانية، لكنه خطأ نحوي مرفوض في الفصحى وامتحانات اللغة.",
    "في اللغة العربية نصوغ التفضيل والمقارنة على وزن «أَفْعَل» (كبير ← أكبر، سريع ← أسرع، جميل ← أجمل). في الألمانية لا يتغير وزن الكلمة، بل تُضاف اللاحقة **-er** إلى نهاية الصفة نفسها (schnell → schneller, klein → kleiner).",
    "انتبه للصفات المنتهية بـ -el و -er: الألمان يحذفون الـ -e- الداخلية لسرعة النطق وسلاسته، فنكتب ونلفظ: **teurer** (وليس teuerer) و **dunkler** (وليس dunkeler)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "صيغة المقارنة العادية: الصفة + اللاحقة -er + كلمة als (مثل: schneller als).",
    "الصفات أحادية المقطع (a, o, u) تأخذ أوملاوت غالباً: alt → älter, groß → größer, warm → wärmer, kurz → kürzer.",
    "الصفات الشاذة الأساسية: gut → besser | viel → mehr | gern → lieber | hoch → höher | nah → näher.",
    "الصفات المنتهية بـ -el و -er تسقط منها الـ e: teuer → teurer, dunkel → dunkler.",
    "التساوي التام: نستخدم (so / genauso + الصفة الأصلية بدون إضافات + wie)."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "der Vergleich", plural: "die Vergleiche", ar: "المقارنة", article: "der", example: "Im Vergleich zu gestern ist es heute warm." },
    { de: "der Unterschied", plural: "die Unterschiede", ar: "الفرق / الاختلاف", article: "der", example: "Es gibt einen großen Unterschied zwischen beiden." },
    { de: "besser", plural: "gut, am besten", ar: "أفضل / أحسن", article: "", example: "Mein Deutsch ist heute besser als gestern." },
    { de: "mehr", plural: "viel, am meisten", ar: "أكثر", article: "", example: "Ich brauche mehr Zeit für die Hausaufgaben." },
    { de: "lieber", plural: "gern, am liebsten", ar: "أكثر تفضيلاً / من الأفضل", article: "", example: "Ich esse lieber Fisch als Fleisch." },
    { de: "teurer", plural: "teuer, am teuersten", ar: "أغلى ثمناً", article: "", example: "Dieses Hotel ist teurer als das andere." },
    { de: "höher", plural: "hoch, am höchsten", ar: "أعلى / أكثر ارتفاعاً", article: "", example: "Die Berge in den Alpen sind höher." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة وشاملة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Ein Zug ist ___ als ein Fahrrad.",
      options: ["schnell", "schneller", "am schnellsten", "schnellere"],
      correct: 1,
      answer: 1,
      explanation: "عند المقارنة بين طرفين نستخدم صيغة المقارنة بإضافة اللاحقة -er إلى الصفة (schneller als)."
    },
    {
      type: "fill-blank",
      question: "Mein Großvater ist ___ als meine Großmutter. (alt)",
      sentence: "Mein Großvater ist ___ als meine Großmutter.",
      answer: "älter",
      accept: ["älter", "aelter"],
      explanation: "الصفة alt قصيرة وتأخذ أوملاوت في المقارنة فتتحول الـ a إلى ä متبوعة بـ -er لتصبح: älter."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين جملة مقارنة صحيحة: (أخي أطول مني)",
      words: ["Mein", "Bruder", "ist", "größer", "als", "ich", "."],
      correct: "Mein Bruder ist größer als ich .",
      answer: "Mein Bruder ist größer als ich .",
      accept: ["Mein Bruder ist größer als ich.", "Mein Bruder ist größer als ich"],
      explanation: "ترتيب الجملة: الفاعل (Mein Bruder) + الفعل (ist) + صيغة المقارنة (größer) + أداة المقارنة (als) + الطرف الثاني (ich)."
    },
    {
      type: "multiple-choice",
      question: "Ich trinke gern Saft, aber Wasser trinke ich noch ___.",
      options: ["gerner", "mehr gern", "lieber", "besser"],
      correct: 2,
      answer: 2,
      explanation: "الظرف gern شاذ في المقارنة ويتحول دائماً إلى lieber عند التفضيل."
    },
    {
      type: "match",
      question: "طابق بين الصفة الأصلية وصيغة المقارنة الشاذة المناسبة لها:",
      pairs: [
        { left: "gut", right: "besser" },
        { left: "viel", right: "mehr" },
        { left: "gern", right: "lieber" },
        { left: "hoch", right: "höher" }
      ],
      explanation: "هذه صفات وتعبيرات شاذة في المقارنة يجب حفظها: gut → besser, viel → mehr, gern → lieber, hoch → höher."
    },
    {
      type: "fill-blank",
      question: "Das neue Smartphone ist ___ als das alte Modell. (teuer)",
      sentence: "Das neue Smartphone ist ___ als das alte Modell.",
      answer: "teurer",
      accept: ["teurer"],
      explanation: "الصفة teuer تسقط منها حرف e قبل اللاحقة فتصبح teurer وليس teuerer."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (هو يدرس أكثر من صديقه.)",
      from: "هو يدرس أكثر من صديقه.",
      answer: "Er lernt mehr als sein Freund.",
      accept: ["Er lernt mehr als sein Freund.", "Er lernt mehr als sein Freund", "Er studiert mehr als sein Freund.", "Er studiert mehr als sein Freund"],
      explanation: "المقارنة من viel هي mehr، متبوعة بـ als: Er lernt mehr als sein Freund."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في الجملة التالية:",
      sentence: "Mein Auto ist schneller wie dein Auto.",
      corrected: "Mein Auto ist schneller als dein Auto.",
      answer: "Mein Auto ist schneller als dein Auto.",
      accept: ["Mein Auto ist schneller als dein Auto.", "Mein Auto ist schneller als dein Auto"],
      explanation: "في المقارنة والتفاضل نستخدم دائماً als وليس wie (schneller als وليس schneller wie)."
    },
    {
      type: "multiple-choice",
      question: "Mein Bruder ist genauso alt ___ ich.",
      options: ["als", "wie", "denn", "so"],
      correct: 1,
      answer: 1,
      explanation: "عند المقارنة المتساوية بوجود (so / genauso) نستخدم دائماً أداة التشبيه wie (genauso alt wie)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ الإملائي في الصفة:",
      sentence: "Dieser Koffer ist teuerer als jener.",
      corrected: "Dieser Koffer ist teurer als jener.",
      answer: "Dieser Koffer ist teurer als jener.",
      accept: ["Dieser Koffer ist teurer als jener.", "Dieser Koffer ist teurer als jener"],
      explanation: "الصفة teuer تُحذف منها الـ e الداخلية في المقارنة لتصبح teurer."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة متعددة الخيارات)
  quiz: [
    {
      type: "multiple-choice",
      question: "Welche Komparativform von »groß« ist richtig?",
      options: ["großer", "größer", "mehr groß", "großeste"],
      correct: 1,
      answer: 1,
      explanation: "الصفة groß تأخذ أوملاوت فوق حرف o واللاحقة -er فتصبح: größer."
    },
    {
      type: "multiple-choice",
      question: "Er spricht viel ___ Deutsch als im letzten Monat. (gut)",
      options: ["guter", "besser", "am besten", "mehr gut"],
      correct: 1,
      answer: 1,
      explanation: "صيغة المقارنة من gut هي besser بشكل شاذ."
    },
    {
      type: "multiple-choice",
      question: "Heute ist es so warm ___ gestern.",
      options: ["als", "wie", "von", "zu"],
      correct: 1,
      answer: 1,
      explanation: "مع صيغة التساوي (so + Adjektiv) نستخدم دائماً wie (so warm wie)."
    },
    {
      type: "multiple-choice",
      question: "Der Fernsehturm ist ___ als das Rathaus.",
      options: ["hoher", "höher", "hocher", "höcher"],
      correct: 1,
      answer: 1,
      explanation: "الصفة hoch تصبح höher في المقارنة حيث تأخذ أوملاوت وتفقد حرف c."
    },
    {
      type: "multiple-choice",
      question: "Ein Elefant ist viel ___ als ein Pferd.",
      options: ["schwerer", "schwer", "am schwersten", "schwere"],
      correct: 0,
      answer: 0,
      explanation: "لوجود als نستخدم صيغة المقارنة بإضافة -er: schwerer als."
    }
  ]
};
window.lessons = window.LESSONS;
