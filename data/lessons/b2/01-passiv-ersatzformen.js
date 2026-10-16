// data/lessons/b2/01-passiv-ersatzformen.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["b2-1-01"] = {
  id: "b2-1-01",
  level: "b2-1",
  order: 1,
  slug: "passiv-ersatzformen",
  title: {
    de: "Passiv-Ersatzformen",
    ar: "بدائل المبني للمجهول في المستوى المتقدم B2"
  },
  tags: ["b2", "passiv", "grammatik", "ersatzformen"],

  // 1. الهدف
  goal: "إتقان الصيغ البديلة للمبني للمجهول (sich lassen + Infinitiv، sein + zu + Infinitiv، والصفات المنتهية بـ -bar و -lich) للتعبير بأسلوب لغوي راقٍ في امتحانات غوته B2 والمقالات المهنية.",

  // 2. الشرح
  explanation: [
    {
      type: "text",
      content: "في المستوى المتقدم B2، يتجنب المتحدثون والكُتاب الألمان تكرار صيغة المبني للمجهول الكلاسيكية (**werden + Partizip II**)، ويستبدلونها بـ **صيغ بديلة أنيقة (Passiv-Alternativen)** تعطي نفس المعنى ولكن باختصار وبلاغة عالية."
    },
    {
      type: "table",
      headers: ["الصيغة البديلة", "المعنى الدلالي", "مثال بديل (B2)", "المعادل بالمبني للمجهول"],
      rows: [
        ["sich lassen + Infinitiv", "إمكانية (kann gemacht werden)", "Das Problem **lässt sich** leicht **lösen**.", "Das Problem kann leicht gelöst werden."],
        ["sein + zu + Infinitiv", "إلزام أو إمكانية (muss/kann)", "Der Bericht **ist** heute **abzugeben**.", "Der Bericht muss heute abgegeben werden."],
        ["Adjektiv auf -bar / -lich", "قابلية للحدوث (kann ...)", "Die Handschrift ist kaum **lesbar**.", "Die Handschrift kann kaum gelesen werden."],
        ["es gilt + zu + Infinitiv", "ضرورة قصوى (muss dringend)", "Es **gilt**, sofort **zu handeln**.", "Es muss sofort gehandelt werden."]
      ]
    },
    {
      type: "rule",
      content: "قاعدة ذهبية: تركيب **sich lassen + Infinitiv** يعبر دائماً عن **إمكانية (kann)** فقط ولا يعبر عن إلزام. الفاعل في الجملة يكون دائماً شيئاً غير عاقل (موضوع أو مشكلة)."
    },
    {
      type: "rule",
      content: "قاعدة تركيب **sein + zu + Infinitiv**: يُصرف فعل sein في الموقع الثاني، ويأتي المصدر مسبوقاً بـ zu في نهاية الجملة. يعبر غالباً عن الإلزام (muss) في اللوائح والتعليمات، وعن الإمكانية (kann) في النفي أو سياق التساؤل."
    }
  ],

  // 3. الأمثلة (8+ أمثلة ناطقة)
  examples: [
    {
      de: "Dieser Text **lässt sich** ohne Wörterbuch kaum verstehen.",
      ar: "لا يمكن فهم هذا النص تقريباً بدون قاموس.",
      highlight: "lässt sich",
      note: "= kann kaum verstanden werden"
    },
    {
      de: "Die Rechnung **ist** innerhalb von 14 Tagen **zu begleichen**.",
      ar: "يجب سداد الفاتورة في غضون 14 يوماً.",
      highlight: "ist ... zu begleichen",
      note: "= muss beglichen werden"
    },
    {
      de: "Die Aufgabenstellung ist für alle Teilnehmer leicht **verständlich**.",
      ar: "نص السؤال مفهوم وسهل الاستيعاب لجميع المشاركين.",
      highlight: "verständlich",
      note: "= kann leicht verstanden werden"
    },
    {
      de: "Die Fehlerdatei **lässt sich** mit einem Klick exportieren.",
      ar: "يمكن تصدير ملف الأخطاء بنقرة زر واحدة.",
      highlight: "lässt sich",
      note: "= kann exportiert werden"
    },
    {
      de: "Hier **ist** keine Zeit **zu verlieren**.",
      ar: "لا يوجد وقت هنا يمكن تضييعه (لا يجوز تضييع الوقت).",
      highlight: "ist ... zu verlieren",
      note: "= darf/kann keine Zeit verloren werden"
    },
    {
      de: "Die B2-Zertifikatsprüfung ist mit gutem Training absolut **machbar**.",
      ar: "امتحان شهادة B2 قابل للاجتياز تماماً مع التدريب الجيد.",
      highlight: "machbar",
      note: "= kann gemacht/geschafft werden"
    },
    {
      de: "Nun **gilt es**, die erlernten Regeln in der Praxis **anzuwenden**.",
      ar: "يتعين الآن تطبيق القواعد المتعلمة عملياً.",
      highlight: "gilt es ... anzuwenden",
      note: "= muss angewendet werden"
    },
    {
      de: "Der Termin **lässt sich** leider nicht mehr verschieben.",
      ar: "للأسف لم يعد من الممكن تأجيل الموعد.",
      highlight: "lässt sich",
      note: "= kann nicht mehr verschoben werden"
    }
  ],

  // 4. نصائح للناطقين بالعربية
  arabicTips: [
    "في اللغة العربية نستخدم غالباً كلمة 'قابل لـ' (قابل للتطبيق، غير قابل للكسر) — هذا يقابل في الألمانية تماماً الصفات المنتهية بـ -bar مثل: machbar، anwendbar، unzerbrechlich.",
    "انتبه: تركيب 'sich lassen' لا يعني 'يترك نفسه' في هذا السياق! إنه يعني ببساطة 'يمكن أن يُفعل' ولا يأتي إلا مع الأشياء وليس الأشخاص في المبني للمجهول.",
    "تركيب 'sein + zu + Infinitiv' شائع جداً في إعلانات العمل واللوائح القانونية في ألمانيا، فاحرص على استخدامه في قسم Schreiben في امتحان B2 لإبهار المصحح."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "sich lassen + Infinitiv = kann gemacht werden (إمكانية فقط)",
    "sein + zu + Infinitiv = muss / kann gemacht werden (إلزام أو إمكانية)",
    "Adjektiv auf -bar / -lich = kann getan werden (صفة إمكانية مشتقة)",
    "الفاعل في صيغ البدائل يكون دائماً مفعولاً به تحول إلى فاعل نحوي (المشكلة، الملف، الفاتورة)."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "die Ersatzform", plural: "die Ersatzformen", ar: "صيغة بديلة", article: "die", example: "Passiv-Ersatzformen klingen eleganter." },
    { de: "die Frist", plural: "die Fristen", ar: "مهلة / موعد نهائي", article: "die", example: "Die Frist ist unbedingt einzuhalten." },
    { de: "die Anforderung", plural: "die Anforderungen", ar: "متطلب / شرط", article: "die", example: "Die Anforderungen im B2-Niveau sind hoch." },
    { de: "lösen", plural: "-", ar: "يحل (مشكلة أو مسألة)", article: null, example: "Das Problem lässt sich leicht lösen." },
    { de: "abgeben", plural: "-", ar: "يسلم (تقريراً أو واجباً)", article: null, example: "Die Unterlagen sind bis Freitag abzugeben." },
    { de: "machbar", plural: "-", ar: "قابل للتحقيق / ممكن إنجازه", article: null, example: "Die B2-Prüfung ist machbar." }
  ],

  // 7. تمارين تفاعلية (10 تمارين)
  exercises: [
    {
      type: "multiple-choice",
      question: "Welcher Satz bedeutet: »Das Dokument kann nicht geöffnet werden«?",
      options: [
        "Das Dokument lässt sich nicht öffnen.",
        "Das Dokument ist nicht zu öffnen müssen.",
        "Das Dokument wird nicht öffnen.",
        "Das Dokument hat sich nicht geöffnet."
      ],
      answer: 0,
      explanation: "تركيب sich lassen + Infinitiv هو البديل الدقيق والمطابق لمعنى kann gemacht werden."
    },
    {
      type: "fill-blank",
      question: "Die Hausordnung _____ von allen Bewohnern einzuhalten. (muss eingehalten werden)",
      answer: "ist",
      explanation: "تركيب sein + zu + Infinitiv: مع المؤنث المفرد (die Hausordnung) نستخدم صيغة ist."
    },
    {
      type: "multiple-choice",
      question: "Was bedeutet das Adjektiv »unbezahlbar«?",
      options: [
        "Es kann nicht bezahlt werden (sehr teuer oder von unschätzbarem Wert).",
        "Es muss sofort bezahlt werden.",
        "Es wurde gestern bezahlt.",
        "Es darf nicht bezahlt werden."
      ],
      answer: 0,
      explanation: "اللاحقة -bar تعبر عن إمكانية الفعل، ونفيها بـ un- يفيد استحالة الدفع أو القيمة التي لا تقدر بثمن."
    },
    {
      type: "word-order",
      question: "رتب الجملة للتعبير عن بديل المبني للمجهول: (Die Aufgabe / sich / lösen / schnell / lässt)",
      words: ["Die Aufgabe", "lässt", "sich", "schnell", "lösen."],
      correct: "Die Aufgabe lässt sich schnell lösen.",
      explanation: "في الجملة الرئيسية: الفاعل أولاً، ثم lässt في الموقع 2، يليه الضمير المنعكس sich، ثم المصدر في نهاية الجملة."
    },
    {
      type: "multiple-choice",
      question: "»Die Anträge sind bis Freitag einzureichen.« Das bedeutet:",
      options: [
        "Die Anträge müssen bis Freitag eingereicht werden.",
        "Die Anträge dürfen nicht eingereicht werden.",
        "Die Anträge wurden am Freitag eingereicht.",
        "Niemand kann die Anträge einreichen."
      ],
      answer: 0,
      explanation: "تركيب sein + zu + Infinitiv في السياقات الرسمية يفيد الإلزام التام (müssen eingereicht werden)."
    },
    {
      type: "fill-blank",
      question: "Diese schwierige Situation lässt _____ leider nicht mehr ändern.",
      answer: "sich",
      explanation: "الضمير المنعكس sich ملازم دائماً لتركيب sich lassen + Infinitiv."
    },
    {
      type: "multiple-choice",
      question: "Welches Adjektiv drückt aus, dass etwas getrunken werden kann?",
      options: ["trinkbar", "trinkend", "getrunken", "trinklich"],
      answer: 0,
      explanation: "اشتقاق الصفة من جذر الفعل trinken مع اللاحقة -bar يعطي trinkbar (صالح للشرب)."
    },
    {
      type: "multiple-choice",
      question: "In welchem Satz liegt KEINE Passiv-Ersatzform vor?",
      options: [
        "Er lässt sich vom Arzt untersuchen.",
        "Das Gerät lässt sich einfach bedienen.",
        "Der Vertrag ist sofort zu kündigen.",
        "Der Schaden ist kaum behebbar."
      ],
      answer: 0,
      explanation: "في جملة 'Er lässt sich untersuchen'، الفاعل شخص عاقل يطلب إجراء الفحص لنفسه (Kausativ / Reflexiv) وليس بديلاً للمبني للمجهول."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (Der Fehler / beheben / leicht / ist / zu)",
      words: ["Der Fehler", "ist", "leicht", "zu", "beheben."],
      correct: "Der Fehler ist leicht zu beheben.",
      explanation: "تركيب sein + zu + Infinitiv: الفاعل (Der Fehler) + ist + الظرف (leicht) + zu beheben في نهاية الجملة."
    },
    {
      type: "multiple-choice",
      question: "»Nun gilt es, alle Kräfte zu bündeln.« Das bedeutet:",
      options: [
        "Es ist jetzt dringend notwendig, alle Kräfte zu bündeln.",
        "Niemand darf alle Kräfte bündeln.",
        "Es war gestern verboten, Kräfte zu bündeln.",
        "Es ist unmöglich, Kräfte zu bündeln."
      ],
      answer: 0,
      explanation: "تركيب es gilt + zu + Infinitiv يعبر عن ضرورة قصوى ومهمة مصيرية واجبة الأداء فوراً."
    }
  ],

  // 8. الاختبار النهائي (5 أسئلة)
  quiz: [
    {
      question: "Welche Bedeutung hat »Der Text lässt sich gut lesen«?",
      options: [
        "Der Text kann gut gelesen werden.",
        "Der Text muss sofort gelesen werden.",
        "Jemand hat den Text gelesen.",
        "Der Text darf nicht gelesen werden."
      ],
      answer: 0,
      explanation: "sich lassen + Infinitiv يعادل دائماً kann + Partizip II + werden."
    },
    {
      question: "Ergänze korrekt: »Die Richtlinien sind von allen Angestellten genau _____ .«",
      options: [
        "zu beachten",
        "beachtet",
        "beachten",
        "beachtend"
      ],
      answer: 0,
      explanation: "تركيب sein + zu + Infinitiv يتطلب zu قبل المصدر في نهاية الجملة."
    },
    {
      question: "Wie lautet die passive Bedeutung von »Die Schrift ist unleserlich«?",
      options: [
        "Die Schrift kann nicht gelesen werden.",
        "Die Schrift muss gelesen werden.",
        "Die Schrift wurde schon gelesen.",
        "Die Schrift darf man nicht lesen."
      ],
      answer: 0,
      explanation: "الصفة unleserlich المشتقة بـ -lich مع النفي un- تعني تعذر وقصور إمكانية القراءة."
    },
    {
      question: "In welchem Fall steht das Subjekt bei »sich lassen + Infinitiv«?",
      options: [
        "Nominativ",
        "Akkusativ",
        "Dativ",
        "Genitiv"
      ],
      answer: 0,
      explanation: "الشيء الذي تجرى عليه الإمكانية يصبح هو الفاعل النحوي (Subjekt) في حالة الرفع (Nominativ)."
    },
    {
      question: "Was drückt »Es gilt, jetzt keine Fehler zu machen« aus?",
      options: [
        "Eine dringende Notwendigkeit (Man muss jetzt aufpassen).",
        "Eine verpasste Chance in der Vergangenheit.",
        "Eine bloße Vermutung ohne Beweis.",
        "Einen Wunsch an eine andere Person."
      ],
      answer: 0,
      explanation: "es gilt + zu + Infinitiv يفيد الإلزام والضرورة الملحة في اللحظة الحالية."
    }
  ]
};
