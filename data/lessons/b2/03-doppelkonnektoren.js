// data/lessons/b2/03-doppelkonnektoren.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["b2-1-03"] = {
  id: "b2-1-03",
  level: "b2-1",
  order: 3,
  slug: "doppelkonnektoren",
  title: {
    de: "Mehrteilige Konnektoren (Doppelkonnektoren)",
    ar: "الروابط المزدوجة والمتعددة الأجزاء في المستوى B2"
  },
  tags: ["b2", "konnektoren", "satzbau", "grammatik"],

  goal: "إتقان استخدام الروابط المزدوجة (sowohl... als auch، weder... noch، nicht nur... sondern auch، وغيرها) للربط المنطقي المتقدم ورفع درجة التعبير في المقالات وامتحان المحادثة والكتابة لـ B2.",

  explanation: [
    {
      type: "text",
      content: "الروابط المزدوجة (**Mehrteilige Konnektoren**) تتكون من جزأين يربطان بين كلمتين أو عبارتين أو جملتين كاملتين. استخدامها يعطي النص فصاحة وتماسكاً لغوياً عالياً، وتعتبر من أهم المعايير التي يقيم بها مصححو امتحانات B2 أسلوب الطالب."
    },
    {
      type: "table",
      headers: ["الرابط المزدوج", "الوظيفة المنطقية", "مثال توضيحي (B2)", "المعنى بالعربية"],
      rows: [
        ["sowohl ... als auch", "إضافة وتأكيد (+ / +)", "Er spricht **sowohl** fließend Deutsch **als auch** Englisch.", "يتحدث الألمانية بطلاقة والإنجليزية كذلك."],
        ["nicht nur ... sondern auch", "تصعيد وتأكيد (+ / ++)", "Die Weiterbildung ist **nicht nur** kostenlos, **sondern auch** zertifiziert.", "الدورة ليست مجانية فحسب، بل ومعتمدة أيضاً."],
        ["weder ... noch", "نفي مزدوج (- / -)", "Er besitzt **weder** einen Führerschein **noch** ein Auto.", "لا يملك رخصة قيادة ولا سيارة."],
        ["entweder ... oder", "اختيار بديل (X / Y)", "Wir reisen **entweder** mit dem Zug **oder** wir nehmen den Bus.", "إما أن نسافر بالقطار أو نستقل الحافلة."],
        ["zwar ... aber", "تنازل واستدراك (+ لكن -)", "Das Gehalt ist **zwar** attraktiv, **aber** die Arbeitszeiten sind lang.", "صحيح أن الراتب مغرٍ، لكن ساعات العمل طويلة."],
        ["einerseits ... andererseits", "مقارنة جانبين متناقضين", "**Einerseits** liebe ich die Stadt, **andererseits** vermisse ich die Ruhe.", "من ناحية أحب المدينة، ومن ناحية أخرى أفتقد الهدوء."]
      ]
    },
    {
      type: "rule",
      content: "قاعدة نفي weder ... noch: هذا الرابط ينفي بحد ذاته، لذا **يحظر تماماً استخدام nicht أو kein** في الجملة. مثال خاطئ: *Er hat weder kein Geld...*، الصحيح: *Er hat weder Geld noch Zeit.*"
    },
    {
      type: "rule",
      content: "موقع الأفعال مع einerseits ... andererseits: هذان الرابطان يعتبران ظروفاً (Adverbien)، فإذا بدأنا الجملة بهما يأتي الفعل مباشرة في الموقع الثاني (Inversion): *Einerseits **möchte** ich reisen, andererseits **muss** ich arbeiten.*"
    }
  ],

  examples: [
    {
      de: "Die Maßnahme schützt **sowohl** die Umwelt **als auch** die Wirtschaft.",
      ar: "الإجراء يحمي البيئة والاقتصاد على حد سواء.",
      highlight: "sowohl ... als auch",
      note: "ربط اسمين دون فاصلة"
    },
    {
      de: "Frau Müller hat **nicht nur** viel Erfahrung, **sondern** sie arbeitet **auch** äußerst gewissenhaft.",
      ar: "السيدة مولر لا تمتلك خبرة واسعة فحسب، بل تعمل أيضاً بضمير حي ودقة بالغة.",
      highlight: "nicht nur ... sondern ... auch",
      note: "فاصلة إجبارية قبل sondern"
    },
    {
      de: "Der Bewerber konnte **weder** fachlich **noch** persönlich überzeugen.",
      ar: "لم يستطع المتقدم الإقناع لا على الصعيد المهني ولا الشخصي.",
      highlight: "weder ... noch",
      note: "نفي الشيئين بدون أدوات نفي أخرى"
    },
    {
      de: "**Entweder** wir finden heute eine Lösung, **oder** wir müssen das Treffen vertagen.",
      ar: "إما أن نجد حلاً اليوم، أو يتعين علينا تأجيل الاجتماع.",
      highlight: "Entweder ... oder",
      note: "ربط جملتين رئيسيتين كاملتين"
    },
    {
      de: "Die Wohnung ist **zwar** relativ teuer, **aber** die Lage ist unschlagbar.",
      ar: "الشقة مكلفة نسبياً بالفعل، لكن موقعها لا يُعلى عليه.",
      highlight: "zwar ... aber",
      note: "اعتراف بنقطة سلبية مع إبراز ميزة طاغية"
    },
    {
      de: "**Einerseits** spart Homeoffice Zeit, **andererseits** fehlt der soziale Kontakt zu den Kollegen.",
      ar: "من جهة يوفر العمل من المنزل الوقت، ومن جهة أخرى يُفتقد التواصل الاجتماعي مع الزملاء.",
      highlight: "Einerseits ... andererseits",
      note: "انتبه لترتيب الفعل (spart / fehlt) مباشرة بعد الرابط"
    },
    {
      de: "Dieses Modell ist **sowohl** für Anfänger **als auch** für Fortgeschrittene geeignet.",
      ar: "هذا النموذج مناسب للمبتدئين وكذلك للمتقدمين.",
      highlight: "sowohl ... als auch",
      note: "استخدام مع حروف الجر المتطابقة"
    },
    {
      de: "Er hatte **weder** seine Hausaufgaben gemacht **noch** sich auf den Test vorbereitet.",
      ar: "لم يكن قد أنجز واجباته المدرسية ولا استعد للاختبار.",
      highlight: "weder ... noch",
      note: "ربط أفعال في الماضي التام"
    }
  ],

  arabicTips: [
    "لا تضع فاصلة قبل als auch في الألمانية، بينما توضع الفاصلة وجوباً قبل sondern auch وقبل aber.",
    "الخطأ الشائع الأكثر تكراراً عند الطلاب العرب هو استخدام nicht مع weder ... noch (مثل: *Ich habe nicht weder Zeit noch Geld*). تذكر: weder تنفي بذاتها!",
    "عند استخدام einerseits ... andererseits في بداية جملتين، تذكر تطبيق قاعدة القلب (Inversion): الفعل يأتي مباشرة بعد الرابط في الموقع الثاني."
  ],

  summary: [
    "sowohl ... als auch = إضافة إيجابية للطرفين (بدون فاصلة).",
    "nicht nur ... sondern auch = تأكيد وتصعيد (تتطلب فاصلة قبل sondern).",
    "weder ... noch = نفي تام للطرفين (بدون نفي إضافي وبدون فاصلة).",
    "zwar ... aber = تنازل واستدراك (تتطلب فاصلة قبل aber).",
    "einerseits ... andererseits = مقارنة متوازنة (الفعل في الموقع 2 مباشرة بعد الرابط)."
  ],

  vocabulary: [
    { de: "der Bewerber", plural: "die Bewerber", ar: "المتقدم لطلب وظيفة", article: "der", example: "Der Bewerber hinterließ einen überzeugenden Eindruck." },
    { de: "die Maßnahme", plural: "die Maßnahmen", ar: "الإجراء / التدبير", article: "die", example: "Die Regierung ergreift strenge Maßnahmen." },
    { de: "unschlagbar", plural: "–", ar: "لا يُضاهى / لا يُقهر", article: "", example: "Das Angebot ist wirklich unschlagbar günstig." },
    { de: "vertagen", plural: "–", ar: "يؤجل اجتماعاً أو جلسة", article: "", example: "Die Konferenz wurde auf nächste Woche vertagt." },
    { de: "gewissenhaft", plural: "–", ar: "دقيق / مخلص بضمير حي", article: "", example: "Sie erledigt alle Aufgaben äußerst gewissenhaft." },
    { de: "der Kompromiss", plural: "die Kompromisse", ar: "الحل الوسط / التوافق", article: "der", example: "Wir müssen einen fairen Kompromiss schließen." }
  ],

  exercises: [
    {
      type: "multiple-choice",
      question: "Welcher Satz verwendet den Doppelkonnektor grammatisch VÖLLIG richtig?",
      options: [
        "Er hat weder Zeit noch Geld für ein neues Hobby.",
        "Er hat nicht weder Zeit noch Geld für ein neues Hobby.",
        "Er hat weder keine Zeit noch kein Geld.",
        "Er hat weder Zeit, noch er hat Geld."
      ],
      answer: 0,
      explanation: "weder ... noch تنفي بذاتها ولا يجوز إضافة nicht أو kein إطلاقاً."
    },
    {
      type: "fill-blank",
      sentence: "Er spricht nicht nur fließend Spanisch, ___ auch verhandlungssicheres Französisch.",
      correct: "sondern",
      accept: ["sondern"],
      explanation: "التركيب هو nicht nur ... sondern auch."
    },
    {
      type: "word-order",
      words: ["Einerseits", "ist", "das", "Angebot", "günstig", ",", "andererseits", "fehlt", "die", "Garantie", "."],
      correct: "Einerseits ist das Angebot günstig , andererseits fehlt die Garantie .",
      explanation: "بعد Einerseits و andererseits يأتي الفعل مباشرة (ist ثم fehlt) في الموقع الثاني."
    },
    {
      type: "match",
      pairs: [
        { de: "sowohl ... als auch", ar: "هذا وذاك على حد سواء (+ / +)" },
        { de: "weder ... noch", ar: "لا هذا ولا ذاك (- / -)" },
        { de: "zwar ... aber", ar: "صحيح كذا، لكن كذا (+ لكن -)" },
        { de: "entweder ... oder", ar: "إما هذا أو ذاك (خيار)" }
      ],
      explanation: "اربط الروابط المزدوجة بدلالتها المعنوية الدقيقة."
    },
    {
      type: "translate",
      source: "المشروع ليس مهماً فحسب، بل وممتع أيضاً.",
      target: "Das Projekt ist nicht nur wichtig, sondern auch interessant.",
      accept: [
        "Das Projekt ist nicht nur wichtig, sondern auch spannend.",
        "Das Projekt ist nicht nur von Bedeutung, sondern macht auch Spaß."
      ],
      explanation: "استخدام تركيب nicht nur ... sondern auch."
    },
    {
      type: "error-correction",
      sentence: "Das Produkt ist sowohl von hoher Qualität, als es auch preiswert ist.",
      correct: "Das Produkt ist sowohl von hoher Qualität als auch preiswert.",
      explanation: "sowohl ... als auch تربط بين صفتين أو شبه جملتين بدون إدخال جملة فرعية وفواصل غير ضرورية."
    },
    {
      type: "fill-blank",
      sentence: "Wir können ___ mit dem Flugzeug reisen oder das Auto nehmen.",
      correct: "entweder",
      accept: ["entweder"],
      explanation: "الرابط المقترن بـ oder للتخيير هو entweder."
    },
    {
      type: "multiple-choice",
      question: "Was folgt direkt nach »Andererseits« am Satzanfang?",
      options: [
        "Das finite Verb (Inversion: Andererseits hat er Recht).",
        "Das Subjekt (Andererseits er hat Recht).",
        "Ein Nebensatz mit Verb am Ende.",
        "Ein Komma gefolgt vom Subjekt."
      ],
      answer: 0,
      explanation: "andererseits ظرف يقع في الموقع 1، فيتبعه الفعل المصرف في الموقع 2."
    },
    {
      type: "translate",
      source: "هو لا يملك سيارة ولا دراجة.",
      target: "Er hat weder ein Auto noch ein Fahrrad.",
      accept: [
        "Er besitzt weder ein Auto noch ein Fahrrad."
      ],
      explanation: "استخدام weder ... noch بدون أدوات نفي أخرى."
    },
    {
      type: "multiple-choice",
      question: "Wann steht ein Komma bei »zwar ... aber«?",
      options: [
        "Immer vor »aber«.",
        "Niemals.",
        "Vor »zwar«.",
        "Nur am Ende des Satzes."
      ],
      answer: 0,
      explanation: "قبل aber توضع الفاصلة دائماً في اللغة الألمانية."
    }
  ],

  quiz: [
    {
      question: "Welche Ergänzung passt zu: »Dieses Buch ist _____ informativ _____ sehr spannend geschrieben«?",
      options: [
        "nicht nur ... sondern auch",
        "weder ... als auch",
        "entweder ... aber",
        "zwar ... weder"
      ],
      answer: 0,
      explanation: "الرابط المزدوج الصحيح منطقياً ونحوياً للإضافة والتصعيد هو nicht nur ... sondern auch."
    },
    {
      question: "Welcher Satz ist grammatikalisch VOLLKOMMEN KORREKT?",
      options: [
        "Einerseits möchte sie Karriere machen, andererseits wünscht sie sich mehr Freizeit.",
        "Einerseits sie möchte Karriere machen, andererseits sie wünscht sich mehr Freizeit.",
        "Einerseits möchte sie Karriere machen, andererseits sie wünscht sich mehr Freizeit.",
        "Einerseits sie will Karriere machen, aber andererseits wünscht mehr Freizeit."
      ],
      answer: 0,
      explanation: "يجب تقديم الفعل (möchte / wünscht) بعد كلٍ من Einerseits و andererseits."
    },
    {
      question: "Was bedeutet: »Er trinkt weder Kaffee noch Tee«?",
      options: [
        "Er trinkt keines von beiden.",
        "Er trinkt beide Getränke gern.",
        "Er entscheidet sich zwischen Kaffee und Tee.",
        "Er trinkt zwar Kaffee, aber keinen Tee."
      ],
      answer: 0,
      explanation: "weder ... noch تنفي كلا الشيئين نفياً تاماً."
    },
    {
      question: "Welcher Konnektor passt zu: »Das Hotel war _____ sauber, _____ der Service ließ zu wünschen übrig«?",
      options: [
        "zwar ... aber",
        "weder ... noch",
        "sowohl ... als auch",
        "entweder ... oder"
      ],
      answer: 0,
      explanation: "سياق الجملة يعبر عن ميزة إيجابية يقابلها عيب سلبي، لذا يناسبه zwar ... aber."
    },
    {
      question: "Braucht man ein Komma bei »sowohl ... als auch«, wenn nur Satzglieder verbunden werden?",
      options: [
        "Nein, im modernen Deutsch wird kein Komma gesetzt.",
        "Ja, vor »als auch« muss zwingend ein Komma stehen.",
        "Ja, nach »sowohl« kommt immer ein Komma.",
        "Nur wenn der Satz länger als 10 Wörter ist."
      ],
      answer: 0,
      explanation: "عند ربط أجزاء الجملة بـ sowohl ... als auch لا نضع فاصلة."
    }
  ]
};
