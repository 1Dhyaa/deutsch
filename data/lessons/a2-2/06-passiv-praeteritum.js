// data/lessons/a2-2/06-passiv-praeteritum.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-2-06"] = {
  id: "a2-2-06",
  level: "a2-2",
  order: 6,
  slug: "passiv-praeteritum",
  title: {
    de: "Das Passiv (Präteritum)",
    ar: "المبني للمجهول في الماضي البسيط (wurde + Partizip II)"
  },
  tags: ["grammatik", "verben", "passiv", "praeteritum", "zeitformen", "a2"],

  // 1. الهدف من الدرس
  goal: "ستتعلم في هذا الدرس كيفية صياغة وفهم المبني للمجهول في زمن الماضي البسيط (Präteritum Passiv) باستخدام (wurde / wurden + Partizip II)، واستخداماته الواسعة في الأخبار الصحفية، الروايات، والتقارير التاريخية والرسمية.",

  // 2. الشرح المبسط بالعربية مع الجداول
  explanation: [
    {
      type: "text",
      content: "يُعتبر المبني للمجهول في زمن الماضي البسيط (**Das Passiv im Präteritum**) أحد أهم التراكيب اللغوية في اللغة الألمانية المكتوبة؛ فهو الأسلوب الأساسي المستخدم في **نشرات الأخبار، الصحف والمجلات، كتب التاريخ، تقارير الشرطة، والوثائق الرسمية** لوصف أحداث وقعت في الماضي مع التركيز على الحدث والنتيجة لا على الفاعل."
    },
    {
      type: "rule",
      content: "قاعدة التركيب النحوي لـ Präteritum Passiv:<br>1. ماضي الفعل المساعد werden وهو (**wurde** للمفرد / **wurden** للجمع) في الموقع الثاني في الجملة (**Position 2**).<br>2. اسم المفعول (**Partizip II**) للفعل الأساسي في **نهاية الجملة تماماً**.<br>• *Das Haus **wurde** 1990 **gebaut**.* (بُني المنزل عام 1990)."
    },
    {
      type: "text",
      content: "تصريف الفعل المساعد **werden** في زمن الماضي البسيط (Präteritum):"
    },
    {
      type: "table",
      headers: ["الضمير", "تصريف Präteritum", "اسم المفعول (Partizip II)", "المعنى بالعربية"],
      rows: [
        ["ich", "**wurde**", "operiert", "أُجريت لي عملية"],
        ["du", "**wurdest**", "gefragt", "سُئلتَ"],
        ["er / sie / es / man", "**wurde** (مطابق لـ ich)", "gebaut / repariert", "بُنيَ / صُلِّحَ / كُتِبَ"],
        ["wir", "**wurden**", "informiert", "أُبلِغنا / أُخبرنا"],
        ["ihr", "**wurdet**", "eingeladen", "دُعِيتُم"],
        ["sie / Sie", "**wurden**", "verschickt", "أُرسِلَتْ / دُعِيتم حضرتكم"]
      ]
    },
    {
      type: "rule",
      content: "تطابق المفرد والجمع: في 95% من الجمل، يكون الفاعل إما مفرداً أو جمعاً:<br>• إذا كان الفاعل مفرداً (der/die/das): نستخدم **wurde** ← *Der Brief **wurde** gestern geschickt.*<br>• إذا كان الفاعل جمعاً (die Plural): نستخدم **wurden** ← *Die Briefe **wurden** gestern geschickt.*"
    },
    {
      type: "text",
      content: "المقارنة بين المبني للمجهول في المضارع (Präsens) والماضي (Präteritum):"
    },
    {
      type: "table",
      headers: ["الحالة", "المبني للمجهول في المضارع (Präsens Passiv)", "المبني للمجهول في الماضي (Präteritum Passiv)"],
      rows: [
        ["الصيغة النحوية", "**wird / werden** + Partizip II", "**wurde / wurden** + Partizip II"],
        ["المعنى الزمني", "حدث يقع الآن أو يتكرر بانتظام", "حدث وقع في الماضي واكتمل وانتهى"],
        ["المفرد", "Das Auto **wird** repariert (السيارة تُصلَح الآن)", "Das Auto **wurde** repariert (السيارة صُلِّحت في الماضي)"],
        ["الجمع", "Die Autos **werden** repariert (السيارات تُصلَح)", "Die Autos **wurden** repariert (السيارات صُلِّحت)"]
      ]
    },
    {
      type: "text",
      content: "المقارنة بين المعلوم (Aktiv) والمجهول (Passiv) في الماضي البسيط:"
    },
    {
      type: "table",
      headers: ["النوع", "الجملة الألمانية", "الترجمة بالعربية"],
      rows: [
        ["Aktiv (معلوم)", "Kolumbus entdeckte 1492 Amerika.", "اكتشف كولومبوس أمريكا عام 1492."],
        ["Passiv (مجهول)", "Amerika **wurde** 1492 (von Kolumbus) **entdeckt**.", "اكتُشفت أمريكا عام 1492 (من قِبل كولومبوس)."],
        ["Aktiv (معلوم)", "Die Polizei sperrte die Straße.", "أغلقت الشرطة الشارع."],
        ["Passiv (مجهول)", "Die Straße **wurde** von der Polizei **gesperrt**.", "أُغلق الشارع من قِبل الشرطة."]
      ]
    }
  ],

  // 3. الأمثلة (8+ أمثلة نموذجية مع الترجمة والصوت وتوضيح القاعدة)
  examples: [
    {
      de: "Das Haus **wurde** im Jahr 1990 **gebaut**.",
      ar: "بُني المنزل في عام 1990.",
      highlight: "wurde ... gebaut",
      audio: true,
      note: "wurde مفرد مع das Haus + اسم المفعول gebaut في نهاية الجملة"
    },
    {
      de: "Die Briefe **wurden** gestern mit der Post **verschickt**.",
      ar: "أُرسلت الرسائل بالأمس عبر البريد.",
      highlight: "wurden ... verschickt",
      audio: true,
      note: "wurden بصيغة الجمع مع الفاعل الجمع die Briefe"
    },
    {
      de: "Die Berliner Mauer **wurde** am 9. November 1989 **geöffnet**.",
      ar: "فُتح جدار برلين في 9 نوفمبر 1989.",
      highlight: "wurde ... geöffnet",
      audio: true,
      note: "حدث تاريخي شهير يُصاغ دائماً بـ Präteritum Passiv"
    },
    {
      de: "Der verletzte Mann **wurde** sofort ins Krankenhaus **gebracht**.",
      ar: "نُقل الرجل المصاب فوراً إلى المستشفى.",
      highlight: "wurde ... gebracht",
      audio: true,
      note: "أسلوب الأخبار والحوادث: wurde + gebracht (من bringen)"
    },
    {
      de: "Dieses Buch **wurde** von einem berühmten Autor **geschrieben**.",
      ar: "كُتب هذا الكتاب من قِبل مؤلف مشهور.",
      highlight: "wurde ... geschrieben",
      audio: true,
      note: "ذكر الفاعل بواسطة von + Dativ (von einem berühmten Autor)"
    },
    {
      de: "Die Fenster **wurden** gestern von den Schülern **geputzt**.",
      ar: "نُظفت النوافذ بالأمس من قِبل الطلاب.",
      highlight: "wurden ... geputzt",
      audio: true,
      note: "wurden مع الفاعل الجمع die Fenster + geputzt"
    },
    {
      de: "Das Museum **wurde** vor zwei Jahren **eröffnet**.",
      ar: "افتُتح المتحف قبل عامين.",
      highlight: "wurde ... eröffnet",
      audio: true,
      note: "wurde + eröffnet (فعل غير قابل للانفصال)"
    },
    {
      de: "Der Dieb **wurde** von der Polizei schnell **festgenommen**.",
      ar: "قُبض على اللص بسرعة من قِبل الشرطة.",
      highlight: "wurde ... festgenommen",
      audio: true,
      note: "wurde مع der Dieb + festgenommen (من festnehmen)"
    },
    {
      de: "Alle Fehler **wurden** vom Lehrer **korrigiert**.",
      ar: "صُححت جميع الأخطاء من قِبل المعلم.",
      highlight: "wurden ... korrigiert",
      audio: true,
      note: "wurden مع الجمع alle Fehler + korrigiert"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "التطابق الدقيق مع الفعل الماضي المبني للمجهول في العربية: جمل مثل (كُتِبَت الرسالة / بُنِيَ البيت / فُتِحَ الباب) تطابق تماماً في المعنى والاستخدام صيغة Präteritum Passiv (Der Brief wurde geschrieben / Das Haus wurde gebaut). تذكر دائماً أن الحركة لا تتغير في الفعل الألماني بل نستخدم **wurde + Partizip II**.",
    "الفرق بين المفرد والجمع (wurde مقابل wurden): الخطأ الأكثر شيوعاً هو استخدام صيغة المفرد wurde مع الكلمات الجمع. انتبه: إذا كانت الكلمة جمعاً (مثل: Die Autos, Die Dokumente, Die Häuser) فيجب حتماً استخدام **wurden** (بالنون).",
    "لماذا نفضل Präteritum على Perfekt في المبني للمجهول؟ في الألمانية، تركيب الماضي التام في المجهول طويل وثقيل: *Das Haus ist gebaut worden*. لذلك يفضل الألمان دائماً – حتى في الحديث الشفهي – استخدام صيغة Präteritum Passiv البسيطة والأنيقة: *Das Haus wurde gebaut*."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "صياغة Präteritum Passiv: تصريف wurde / wurden في المركز الثاني + اسم المفعول (Partizip II) في نهاية الجملة.",
    "مع الفاعل المفرد (er/sie/es/das/der): نستخدم wurde (مثل: Das Auto wurde repariert).",
    "مع الفاعل الجمع (die Plural): نستخدم wurden (مثل: Die Autos wurden repariert).",
    "تصريف ich يطابق تصريف er/sie/es تماماً: ich wurde, er wurde.",
    "يُستخدم بكثرة في الصحافة، الروايات، التقارير التاريخية، وحوادث الشرطة والإسعاف."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "bauen", plural: "baute, hat gebaut", ar: "يبني / يشيد", article: "", example: "Das Schloss wurde im 18. Jahrhundert gebaut." },
    { de: "zerstören", plural: "zerstörte, hat zerstört", ar: "يدمر / يهدم", article: "", example: "Die alte Brücke wurde im Krieg zerstört." },
    { de: "eröffnen", plural: "eröffnete, hat eröffnet", ar: "يفتتح", article: "", example: "Der neue Flughafen wurde feierlich eröffnet." },
    { de: "die Entdeckung", plural: "die Entdeckungen", ar: "الاكتشاف", article: "die", example: "Amerika wurde 1492 entdeckt." },
    { de: "festnehmen", plural: "nahm fest, hat festgenommen", ar: "يقبض على / يعتقل", article: "", example: "Der Täter wurde gestern festgenommen." },
    { de: "das Jahrhundert", plural: "die Jahrhunderte", ar: "القرن (مئة عام)", article: "das", example: "Das Gemälde wurde im 19. Jahrhundert gemalt." },
    { de: "sperren", plural: "sperrte, hat gesperrt", ar: "يغلق / يطوق", article: "", example: "Die Autobahn wurde wegen des Unfalls gesperrt." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Das Haus ___ im Jahr 1995 gebaut.",
      options: ["wurde", "wurden", "wird", "worden"],
      correct: 0,
      answer: 0,
      explanation: "الفاعل مفرد (Das Haus) والزمن ماضٍ، لذا نستخدم wurde."
    },
    {
      type: "fill-blank",
      question: "Die Briefe ___ gestern vom Postboten gebracht. (werden im Präteritum)",
      sentence: "Die Briefe ___ gestern vom Postboten gebracht.",
      answer: "wurden",
      accept: ["wurden"],
      explanation: "الفاعل جمع (Die Briefe) في زمن الماضي، لذا نستخدم صيغة الجمع wurden."
    },
    {
      type: "word-order",
      question: "رتب الجملة التاريخية المبنية للمجهول: (بُني هذا القصر عام 1800)",
      words: ["Dieses", "Schloss", "wurde", "im", "Jahr", "1800", "gebaut", "."],
      correct: "Dieses Schloss wurde im Jahr 1800 gebaut .",
      answer: "Dieses Schloss wurde im Jahr 1800 gebaut .",
      accept: ["Dieses Schloss wurde im Jahr 1800 gebaut.", "Dieses Schloss wurde im Jahr 1800 gebaut"],
      explanation: "الفاعل (Dieses Schloss) + فعل wurde في المركز الثاني + شبه الجملة الزمانية (im Jahr 1800) + اسم المفعول (gebaut) في النهاية."
    },
    {
      type: "multiple-choice",
      question: "حَوّل إلى الماضي في المبني للمجهول: »Das Auto wird repariert«.",
      options: ["Das Auto wurde repariert.", "Das Auto ist reparieren.", "Das Auto wurden repariert.", "Das Auto reparierte."],
      correct: 0,
      answer: 0,
      explanation: "ماضي wird مع الفاعل المفرد (Das Auto) هو wurde: Das Auto wurde repariert."
    },
    {
      type: "match",
      question: "طابق بين الفاعل والشكل الصحيح لفعل werden في الماضي (Präteritum):",
      pairs: [
        { left: "das Auto (مفرد)", right: "wurde" },
        { left: "die Autos (جمع)", right: "wurden" },
        { left: "du (مخاطب)", right: "wurdest" },
        { left: "ihr (أنتم)", right: "wurdet" }
      ],
      explanation: "تصريف werden في الماضي: das Auto wurde, die Autos wurden, du wurdest, ihr wurdet."
    },
    {
      type: "fill-blank",
      question: "Der verletzte Fahrer ___ sofort ins Krankenhaus gebracht. (werden im Präteritum)",
      sentence: "Der verletzte Fahrer ___ sofort ins Krankenhaus gebracht.",
      answer: "wurde",
      accept: ["wurde"],
      explanation: "الفاعل مفرد مذكر (Der verletzte Fahrer) لذا نستخدم wurde."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (أُغلق الشارع بالأمس.)",
      from: "أُغلق الشارع بالأمس.",
      answer: "Die Straße wurde gestern gesperrt.",
      accept: ["Die Straße wurde gestern gesperrt.", "Die Straße wurde gestern gesperrt", "Gestern wurde die Straße gesperrt.", "Gestern wurde die Straße gesperrt"],
      explanation: "الفاعل (Die Straße) + الفعل المساعد في الماضي (wurde) + ظرف الزمان (gestern) + اسم المفعول (gesperrt)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في تصريف الفعل المساعد مع الفاعل الجمع:",
      sentence: "Die alten Dokumente wurde im Archiv gefunden.",
      corrected: "Die alten Dokumente wurden im Archiv gefunden.",
      answer: "Die alten Dokumente wurden im Archiv gefunden.",
      accept: ["Die alten Dokumente wurden im Archiv gefunden.", "Die alten Dokumente wurden im Archiv gefunden"],
      explanation: "كلمة Die alten Dokumente جمع، لذلك يجب استخدام wurden بدلاً من wurde."
    },
    {
      type: "multiple-choice",
      question: "Amerika ___ 1492 von Kolumbus entdeckt.",
      options: ["wurde", "wurden", "wird", "war"],
      correct: 0,
      answer: 0,
      explanation: "Amerika اسم علم مفرد محايد، والحدث تاريخي في الماضي، فتأخذ wurde."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ في شكل الفعل في نهاية الجملة:",
      sentence: "Der Film wurde gestern im Fernsehen zeigen.",
      corrected: "Der Film wurde gestern im Fernsehen gezeigt.",
      answer: "Der Film wurde gestern im Fernsehen gezeigt.",
      accept: ["Der Film wurde gestern im Fernsehen gezeigt.", "Der Film wurde gestern im Fernsehen gezeigt"],
      explanation: "في صيغة المبني للمجهول يجب أن يكون الفعل الأخير اسم مفعول Partizip II (gezeigt) وليس مصدراً (zeigen)."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة متعددة الخيارات)
  quiz: [
    {
      type: "multiple-choice",
      question: "Die Berliner Mauer ___ 1989 geöffnet.",
      options: ["wurde", "wurden", "wird", "ist"],
      correct: 0,
      answer: 0,
      explanation: "Die Berliner Mauer مفرد مؤنث، لذا تأخذ wurde في الماضي."
    },
    {
      type: "multiple-choice",
      question: "Viele neue Häuser ___ nach dem Krieg gebaut.",
      options: ["wurde", "wurden", "worden", "wirst"],
      correct: 1,
      answer: 1,
      explanation: "الفاعل جمع (Viele neue Häuser) فيتطلب صيغة الجمع wurden."
    },
    {
      type: "multiple-choice",
      question: "Wie lautet die Präteritum-Form von »werden« für »er«?",
      options: ["wurde", "wurdet", "ward", "geworden"],
      correct: 0,
      answer: 0,
      explanation: "تصريف werden في الماضي مع er هو: wurde."
    },
    {
      type: "multiple-choice",
      question: "حَوّل إلى المبني للمجهول في الماضي: »Der Arzt untersuchte den Patienten«.",
      options: ["Der Patient wurde vom Arzt untersucht.", "Der Patient wird vom Arzt untersucht.", "Der Patient wurde vom Arzt untersuchen.", "Der Arzt wurde untersucht."],
      correct: 0,
      answer: 0,
      explanation: "المفعول den Patienten يصبح فاعلاً مرفوعاً (Der Patient) + wurde + vom Arzt + untersucht."
    },
    {
      type: "multiple-choice",
      question: "In welchen Texten wird das Passiv Präteritum besonders häufig verwendet?",
      options: ["In Kochrezepten und Bedienungsanleitungen", "In Zeitungsberichten, Polizeiberichten und Geschichtstexten", "Nur in lockeren SMS-Nachrichten", "Ausschließlich in der Kindersprache"],
      correct: 1,
      answer: 1,
      explanation: "يُستخدم المبني للمجهول في الماضي البسيط بكثرة في الصحف، الأخبار، تقارير الشرطة، والتاريخ."
    }
  ]
};
window.lessons = window.LESSONS;
