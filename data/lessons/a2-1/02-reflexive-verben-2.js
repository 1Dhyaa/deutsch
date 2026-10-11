// data/lessons/a2-1/02-reflexive-verben-2.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-02"] = {
  id: "a2-1-02",
  level: "a2-1",
  order: 2,
  slug: "reflexive-verben-2",
  title: {
    de: "Reflexive Verben (2) — Dativ",
    ar: "الأفعال الانعكاسية (2) — ضمائر الانعكاس مع Dativ (mir / dir)"
  },
  tags: ["grammatik", "verben", "reflexiv", "dativ", "a2"],

  // 1. الهدف
  goal: "ستتعلم متى يتحول ضمير الانعكاس إلى حالة Dativ (mir / dir) بدلاً من Akkusativ، والفرق الجوهري بين: (Ich wasche mich) و (Ich wasche mir die Hände).",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "في الدرس السابق تعلمنا ضمائر الانعكاس في حالة Akkusativ (mich, dich, sich...). ولكن متى نستخدم **Dativ**؟ القاعدة بسيطة للغاية:"
    },
    {
      type: "rule",
      content: "القاعدة الذهبية: إذا كان في الجملة **مفعول به صريح ثانٍ (مباشر في Akkusativ)**، يتحول ضمير الانعكاس تلقائياً إلى حالة **Dativ**!"
    },
    {
      type: "table",
      headers: ["الحالة", "الجملة الألمانية", "المعنى بالعربية", "الشرح النحوي"],
      rows: [
        ["انعكاس مع Akkusativ", "Ich wasche **mich**.", "أنا أغتسل (كلي).", "لا يوجد مفعول به آخر، فأنا المفعول به الوحيد (mich)."],
        ["انعكاس مع Dativ", "Ich wasche **mir** die Hände.", "أنا أغسل يديَّ.", "كلمة (die Hände) هي المفعول به في Akkusativ، لذلك يتحول ضمير الانعكاس إلى Dativ (mir)."]
      ]
    },
    {
      type: "text",
      content: "الخبر السار جداً: الضمائر التي تتغير بين Akkusativ و Dativ هما **ضميران فقط** (ich و du)! باقي الضمائر تبقى كما هي تماماً:"
    },
    {
      type: "table",
      headers: ["الفاعل (Subjekt)", "ضمير الانعكاس في Akkusativ", "ضمير الانعكاس في Dativ", "مثال في Dativ"],
      rows: [
        ["ich (أنا)", "mich", "mir ⚠️", "Ich putze **mir** die Zähne."],
        ["du (أنت)", "dich", "dir ⚠️", "Du putzt **dir** die Zähne."],
        ["er / sie / es (هو / هي)", "sich", "sich (لا يتغير)", "Er putzt **sich** die Zähne."],
        ["wir (نحن)", "uns", "uns (لا يتغير)", "Wir putzen **uns** die Zähne."],
        ["ihr (أنتم)", "euch", "euch (لا يتغير)", "Ihr putzt **euch** die Zähne."],
        ["sie / Sie (هم / حضرتك)", "sich", "sich (لا يتغير)", "Sie putzen **sich** die Zähne."]
      ]
    },
    {
      type: "text",
      content: "هناك أيضاً أفعال هامة تأخذ Dativ دائماً حتى بدون ذكر عضو من الجسم، مثل:"
    },
    {
      type: "table",
      headers: ["الفعل", "المعنى بالعربية", "مثال"],
      rows: [
        ["sich wünschen", "يتمنى لنفسه", "Ich wünsche **mir** ein neues Auto."],
        ["sich vorstellen", "يتخيل (في ذهنه)", "Ich kann **mir** das gut vorstellen."],
        ["sich merken", "يحفظ / يضع في باله", "Ich merke **mir** dieses Wort."],
        ["sich überlegen", "يفكر ملياً في أمر", "Ich muss **mir** das noch überlegen."]
      ]
    }
  ],

  // 3. الأمثلة (8+ أمثلة مع الترجمة، الصوت، وتوضيح القاعدة)
  examples: [
    {
      de: "Ich putze **mir** jeden Morgen die Zähne.",
      ar: "أنا أنظف أسناني كل صباح.",
      highlight: "mir",
      audio: true,
      note: "die Zähne في Akkusativ ← الضمير الانعكاسي يتحول لـ Dativ (mir)"
    },
    {
      de: "Hast du **dir** schon die Hände gewaschen?",
      ar: "هل غسلت يديك بالفعل؟",
      highlight: "dir",
      audio: true,
      note: "مع du وفي وجود die Hände نستخدم dir"
    },
    {
      de: "Er kämmt **sich** die Haare vor dem Spiegel.",
      ar: "هو يمشط شعره أمام المرآة.",
      highlight: "sich",
      audio: true,
      note: "مع er يبقى الضمير sich دون تغيير"
    },
    {
      de: "Ich ziehe **mir** eine warme Jacke an.",
      ar: "أنا أرتدي سترة دافئة.",
      highlight: "mir",
      audio: true,
      note: "sich anziehen مع ذكر الملابس المحددة يأخذ Dativ (mir)"
    },
    {
      de: "Was wünschst du **dir** zum Geburtstag?",
      ar: "ماذا تتمنى لنفسك في عيد ميلادك؟",
      highlight: "dir",
      audio: true,
      note: "sich wünschen يأخذ دائماً Dativ"
    },
    {
      de: "Das kann ich **mir** überhaupt nicht vorstellen!",
      ar: "لا أستطيع تخيل ذلك على الإطلاق!",
      highlight: "mir",
      audio: true,
      note: "sich vorstellen (يتخيل) تأخذ Dativ (mir)"
    },
    {
      de: "Wir müssen **uns** diese Regel gut merken.",
      ar: "يجب علينا أن نحفظ هذه القاعدة جيداً في بالنا.",
      highlight: "uns",
      audio: true,
      note: "مع wir يكون الضمير uns في الحالتين"
    },
    {
      de: "Kauft ihr **euch** ein neues Sofa?",
      ar: "هل ستشترون لأنفسكم أريكة جديدة؟",
      highlight: "euch",
      audio: true,
      note: "مع ihr يكون الضمير euch في Dativ و Akkusativ"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في العربية، نقول «أغسل يدي» بإضافة ياء الملكية إلى اليد مباشرة. في الألمانية، التركيب مختلف: يقولون حرفياً «أنا أغسل **لنفسي** اليدين» (Ich wasche **mir** die Hände) ولا يستخدمون ضمير الملكية (meine Hände) إلا نادراً!",
    "احذر جداً من الخلط بين معنيي فعل (sich vorstellen): إذا كان مع **Akkusativ** (Ich stelle **mich** vor) فمعناه: «أنا أعرّف بنفسي». أما إذا كان مع **Dativ** (Ich stelle **mir** vor) فمعناه: «أنا أتخيّل في عقلي»!",
    "سهّل الأمر على نفسك: إذا كان الفاعل هو er أو sie أو wir أو ihr، فلن تضطر للتفكير لأن الضمير لا يتغير إطلاقاً (sich / uns / euch). الصراع فقط بين (mich مقابل mir) و (dich مقابل dir)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "بدون مفعول به ثانٍ ← Akkusativ: Ich wasche mich (أنا أغتسل)",
    "مع مفعول به ثانٍ (عضو أو ملابس) ← Dativ: Ich wasche mir die Hände",
    "التغيير يقع فقط على ضميرين: ich → mir | du → dir",
    "أفعال ثابتة مع Dativ: sich wünschen (يتمنى), sich vorstellen (يتخيل), sich merken (يحفظ)",
    "sich مع er/sie/es/Sie تبقى sich دائماً سواء في Akkusativ أو Dativ"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "sich die Zähne putzen", plural: "putzt sich, hat sich geputzt", ar: "ينظف أسنانه بالفرشاة", article: "", example: "Ich putze mir zweimal täglich die Zähne." },
    { de: "sich die Haare kämmen", plural: "kämmt sich, hat sich gekämmt", ar: "يمشط شعره", article: "", example: "Sie kämmt sich die Haare." },
    { de: "sich die Hände waschen", plural: "wäscht sich, hat sich gewaschen", ar: "يغسل يديه", article: "", example: "Vor dem Essen wasche ich mir die Hände." },
    { de: "sich wünschen", plural: "wünscht sich, hat sich gewünscht", ar: "يتمنى لنفسه", article: "", example: "Was wünschst du dir?" },
    { de: "sich vorstellen", plural: "stellt sich vor, hat sich vorgestellt", ar: "يتخيل (في عقله)", article: "", example: "Ich stelle mir das Meer vor." },
    { de: "sich merken", plural: "merkt sich, hat sich gemerkt", ar: "يحفظ / يضع في باله", article: "", example: "Diesen Namen kann ich mir nicht merken." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Ich wasche ___ jeden Morgen die Hände.",
      options: ["mich", "mir", "sich", "dir"],
      correct: 1,
      explanation: "في وجود المفعول به الصريح (die Hände)، يتحول ضمير الانعكاس لـ ich إلى حالة Dativ فتصبح mir."
    },
    {
      type: "fill-blank",
      question: "Hast du ___ die Zähne schon geputzt?",
      answer: "dir",
      accept: ["dir"],
      explanation: "الفاعل du مع وجود مفعول به صريح (die Zähne) يتطلب ضمير الانعكاس في Dativ وهو dir."
    },
    {
      type: "multiple-choice",
      question: "Ich wasche ___ schnell, bevor wir losgehen.",
      options: ["mich", "mir", "dich", "sich"],
      correct: 0,
      explanation: "هنا لا يوجد عضو محدد أو مفعول به آخر (اغتسال كامل)، فالصحيح Akkusativ وهو mich."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (أنا أتمنى لنفسي سيارة جديدة)",
      words: ["ein", "wünsche", "neues", "Ich", "mir", "Auto", "."],
      correct: "Ich wünsche mir ein neues Auto .",
      explanation: "الفاعل (Ich) + الفعل (wünsche) + ضمير Dativ (mir) + المفعول به (ein neues Auto)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Ich putze mich die Zähne.)",
      sentence: "Ich putze mich die Zähne.",
      corrected: "Ich putze mir die Zähne.",
      explanation: "في وجود die Zähne كمفعول به، لا نستخدم mich بل نستخدم Dativ وهو mir."
    },
    {
      type: "match",
      question: "طابق بين الضمير واستخدامه الصحيح:",
      pairs: [
        { left: "Ich wasche mich.", right: "أنا أغتسل (كلي)" },
        { left: "Ich wasche mir die Hände.", right: "أنا أغسل يديَّ" },
        { left: "Ich stelle mich vor.", right: "أنا أعرّف بنفسي" },
        { left: "Ich stelle mir vor.", right: "أنا أتخيّل في عقلي" }
      ]
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أنا أرتدي معطفي.)",
      from: "أنا أرتدي معطفي.",
      answer: "Ich ziehe mir den Mantel an.",
      accept: ["Ich ziehe mir den Mantel an.", "Ich ziehe mir den Mantel an", "Ich ziehe mir meinen Mantel an."],
      explanation: "فعل sich anziehen مع ذكر الملابس المحددة يأخذ ضمير Dativ (mir) والبادئة an تذهب للنهاية."
    },
    {
      type: "multiple-choice",
      question: "Kannst du ___ das vorstellen?",
      options: ["dich", "dir", "mich", "sich"],
      correct: 1,
      explanation: "الفعل sich vorstellen بمعنى يتخيل يأخذ دائماً Dativ، ومع du يكون dir."
    },
    {
      type: "fill-blank",
      question: "Er merkt ___ die neuen Wörter sehr schnell.",
      answer: "sich",
      accept: ["sich"],
      explanation: "مع الفاعل er يكون ضمير الانعكاس دائماً sich سواء في Akkusativ أو Dativ."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Du musst dich die Hände waschen.)",
      sentence: "Du musst dich die Hände waschen.",
      corrected: "Du musst dir die Hände waschen.",
      explanation: "مع وجود die Hände يتحول الضمير لـ du إلى حالة Dativ فيكون dir وليس dich."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Ich putze ___ die Zähne.",
      options: ["mich", "mir", "dir"],
      correct: 1,
      explanation: "die Zähne مفعول به صريح، فالضمير الانعكاسي لـ ich يكون Dativ (mir)."
    },
    {
      type: "multiple-choice",
      question: "Zieh ___ bitte eine warme Jacke an!",
      options: ["dich", "dir", "sich"],
      correct: 1,
      explanation: "مع ذكر القطعة الملبوسة (eine warme Jacke) نستخدم Dativ للمخاطب du فيكون dir."
    },
    {
      type: "multiple-choice",
      question: "Ich kann ___ deinen Namen einfach nicht merken.",
      options: ["mich", "mir", "dir"],
      correct: 1,
      explanation: "الفعل sich merken يأخذ دائماً Dativ، ومع ich نستخدم mir."
    },
    {
      type: "multiple-choice",
      question: "Er wäscht ___ jeden Abend die Haare.",
      options: ["sich", "ihm", "ihn"],
      correct: 0,
      explanation: "ضمير الانعكاس لـ er هو دائماً sich في كلتا الحالتين."
    },
    {
      type: "multiple-choice",
      question: "Was wünschst du ___ zum Geburtstag?",
      options: ["dich", "dir", "sich"],
      correct: 1,
      explanation: "الفعل sich wünschen يتطلب Dativ، ومع du يكون dir."
    }
  ]
};
