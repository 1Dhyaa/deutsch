// data/lessons/a2-2/07-passiv-modalverben.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-2-07"] = {
  id: "a2-2-07",
  level: "a2-2",
  order: 7,
  slug: "passiv-modalverben",
  title: {
    de: "Das Passiv mit Modalverben",
    ar: "المبني للمجهول مع الأفعال الناقصة (muss ... gemacht werden)"
  },
  tags: ["passiv", "modalverben", "grammatik", "a2-2", "satzbau"],

  // 1. الهدف من الدرس
  goal: "ستتعلم كيفية صياغة المبني للمجهول مع الأفعال الناقصة في المضارع والماضي (مثل: Das Formular muss ausgefüllt werden)، مع إتقان الترتيب الدقيق للأفعال في نهاية الجملة الألمانية.",

  // 2. الشرح المبسط مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "عندما نجمع بين **المبني للمجهول (Passiv)** و**الأفعال الناقصة (Modalverben)** مثل (müssen, können, dürfen, sollen)، فإننا نركز على ضرورة أو إمكانية أو منع حدوث الفعل، دون التركيز على الشخص الذي يقوم به. يُستخدم هذا التركيب بكثرة في المعاملات الرسمية، التعليمات، وقواعد العمل في ألمانيا."
    },
    {
      type: "rule",
      content: "الهيكل الأساسي في المضارع (Präsens):\n**المبتدأ (نائب الفاعل) + الفعل الناقص المُصرّف (Pos 2) + ... + [Partizip II + werden] (في نهاية الجملة تماماً)**\nمثال: Das Dokument **muss** heute **unterschrieben werden**."
    },
    {
      type: "table",
      headers: ["الفعل الناقص", "المعنى / الاستخدام", "المضارع (Präsens)", "الماضي (Präteritum)"],
      rows: [
        ["müssen", "إلزام وضرورة قاطعة", "Das Formular **muss ausgefüllt werden**.", "Das Formular **musste ausgefüllt werden**."],
        ["können", "إمكانية أو استطاعة", "Die Rechnung **kann online bezahlt werden**.", "Die Rechnung **konnte online bezahlt werden**."],
        ["dürfen", "سماح أو منع (مع nicht)", "Hier **darf nicht geraucht werden**.", "Hier **durfte nicht geraucht werden**."],
        ["sollen", "تكليف أو توصية", "Das Paket **soll heute geliefert werden**.", "Das Paket **sollte heute geliefert werden**."]
      ]
    },
    {
      type: "text",
      content: "لاحظ أن الفعل المساعد **werden** في هذا التركيب يأتي دائماً في صيغة **المصدر (Infinitiv)** دون أي تصريف، ويسبقه مباشرة اسم المفعول **Partizip II**. وفي حالة الماضي (Präteritum)، نقوم فقط بتصريف الفعل الناقص (muss → musste، kann → konnte، darf → durfte)، بينما يبقى الختام [Partizip II + werden] ثابتاً تماماً دون تغيير!"
    },
    {
      type: "table",
      headers: ["نوع الجملة", "الترتيب القواعدي", "مثال توضيحي"],
      rows: [
        ["جملة رئيسية (Hauptsatz)", "Modalverb (Pos 2) ... Partizip II + werden (Ende)", "Das Auto **kann** heute **repariert werden**."],
        ["جملة فرعية (Nebensatz)", "... weil + ... + Partizip II + werden + Modalverb (Ende)", "... weil das Auto heute **repariert werden kann**."]
      ]
    }
  ],

  // 3. الأمثلة العملية الناطقة (9 أمثلة مع ملاحظات إعرابية)
  examples: [
    {
      de: "Das Formular **muss ausgefüllt werden**.",
      ar: "يجب تعبئة الاستمارة.",
      highlight: "muss ausgefüllt werden",
      audio: true,
      note: "الفعل الناقص muss في الموقع 2، وفي النهاية ausgefüllt (Partizip II) ثم werden (المصدر)"
    },
    {
      de: "Die Rechnung **kann online bezahlt werden**.",
      ar: "يمكن دفع الفاتورة عبر الإنترنت.",
      highlight: "kann online bezahlt werden",
      audio: true,
      note: "können يعبر عن إمكانية الدفع الرقمي، bezahlt هو اسم المفعول من bezahlen"
    },
    {
      de: "Hier **darf nicht geraucht werden**.",
      ar: "لا يُسمح بالتدخين هنا.",
      highlight: "darf nicht geraucht werden",
      audio: true,
      note: "صيغة مبني للمجهول عامة بدون فاعل شخصي للتعبير عن المنع القانوني"
    },
    {
      de: "Der Termin **musste leider verschoben werden**.",
      ar: "كان يجب تأجيل الموعد للأسف.",
      highlight: "musste leider verschoben werden",
      audio: true,
      note: "في الماضي Präteritum نصرّف فقط الفعل الناقص: musste، ويبقى verschoben werden كما هو"
    },
    {
      de: "Das Paket **soll bis 18 Uhr geliefert werden**.",
      ar: "من المفترض أن يتم تسليم الطرد بحلول الساعة السادسة مساءً.",
      highlight: "soll bis 18 Uhr geliefert werden",
      audio: true,
      note: "sollen يعبر عن خطة أو تعليمات موكلة لشركة الشحن"
    },
    {
      de: "Die alten Dokumente **müssen archiviert werden**.",
      ar: "يجب أرشفة الوثائق القديمة.",
      highlight: "müssen archiviert werden",
      audio: true,
      note: "جمع: müssen مع نائب الفاعل الجمع die Dokumente"
    },
    {
      de: "Die Tür **konnte nicht geöffnet werden**.",
      ar: "لم يكن من الممكن فتح الباب.",
      highlight: "konnte nicht geöffnet werden",
      audio: true,
      note: "ماضي الفعل können هو konnte متبوعاً باسم المفعول geöffnet ثم المصدر werden"
    },
    {
      de: "Die Hausaufgaben **müssen bis morgen gemacht werden**.",
      ar: "يجب إنجاز الواجبات المنزلية حتى الغد.",
      highlight: "müssen bis morgen gemacht werden",
      audio: true,
      note: "gemacht هو Partizip II للفعل machen"
    },
    {
      de: "Ich weiß, dass dieses Problem schnell **gelöst werden muss**.",
      ar: "أعلم أن هذه المشكلة يجب أن تُحل بسرعة.",
      highlight: "gelöst werden muss",
      audio: true,
      note: "في الجملة الفرعية مع dass: ينتقل الفعل الناقص muss إلى آخر موضع بعد werden!"
    }
  ],

  // 4. نصائح للناطقين بالعربية
  arabicTips: [
    "في اللغة العربية نقول: «يجب أن يُكتب التقرير» أو «يمكن كتابته». في الألمانية يتكون التركيب من 3 عناصر رئيسية: [فعل ناقص مُصرّف في المركز 2] + [اسم المفعول Partizip II في النهاية] + [werden في المصدر دائماً].",
    "احذر من حذف كلمة werden! خطأ شائع جداً عند المتعلمين العرب هو القول: *Das Formular muss ausgefüllt* وهذا غير صحيح؛ لا تكتمل صياغة المبني للمجهول إلا بوجود werden في آخر الجملة: *... muss ausgefüllt **werden**!*",
    "عند التحويل إلى الماضي، لا تُغيّر أبداً صيغة Partizip II أو werden؛ التغيير يطرأ فقط على الفعل الناقص (muss ← musste / kann ← konnte)."
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "القاعدة الذهبية: Modalverb (Pos 2) + ... + Partizip II + werden (Infinitiv am Satzende)",
    "تبقى كلمة werden دائماً في صيغة المصدر دون تصريف في نهاية الجملة الرئيسية",
    "في زمن الماضي (Präteritum)، نصرّف الفعل الناقص فقط (musste, konnte, durfte, sollte)",
    "في الجمل الفرعية (Nebensatz)، يصبح الترتيب الختامي: [Partizip II + werden + Modalverb]",
    "يُستخدم هذا التركيب بكثرة في الحياة اليومية والمعاملات الرسمية في ألمانيا"
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "das Formular", plural: "die Formulare", ar: "الاستمارة / النموذج", article: "das", example: "Das Formular muss unterschrieben werden." },
    { de: "die Rechnung", plural: "die Rechnungen", ar: "الفاتورة", article: "die", example: "Die Rechnung kann per Überweisung bezahlt werden." },
    { de: "der Termin", plural: "die Termine", ar: "الموعد", article: "der", example: "Der Termin musste verschoben werden." },
    { de: "die Reparatur", plural: "die Reparaturen", ar: "الإصلاح / الصيانة", article: "die", example: "Die Reparatur kann heute gemacht werden." },
    { de: "das Dokument", plural: "die Dokumente", ar: "الوثيقة / المستند", article: "das", example: "Alle Dokumente müssen kopiert werden." },
    { de: "ausfüllen", plural: "füllt aus, hat ausgefüllt", ar: "يملأ / يعبئ (استمارة)", article: "", example: "Bitte das Formular ausfüllen." },
    { de: "verschieben", plural: "verschiebt, hat verschoben", ar: "يؤجل / يرحل موعداً", article: "", example: "Wir müssen den Termin verschieben." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Das Formular ___ heute ausgefüllt werden.",
      options: ["muss", "wird", "hat", "ist"],
      correct: 0,
      explanation: "الجملة مبني للمجهول مع فعل ناقص، ونحتاج للفعل الناقص المصرف مع das Formular (المفرد الغائب: muss)."
    },
    {
      type: "fill-blank",
      sentence: "Die Rechnung muss bis Freitag bezahlt ___.",
      answer: "werden",
      accept: ["werden"],
      explanation: "في المبني للمجهول مع الأفعال الناقصة، يأتي فعل werden دائماً في المصدر في نهاية الجملة."
    },
    {
      type: "word-order",
      question: "رتب الكلمات لتكوين جملة صحيحة في المبني للمجهول:",
      words: ["online", "kann", "Die", "bezahlt", "Rechnung", "werden"],
      correct: "Die Rechnung kann online bezahlt werden",
      accept: ["Die Rechnung kann online bezahlt werden."],
      explanation: "المبتدأ (Die Rechnung) + الفعل الناقص (kann) + الظرف (online) + اسم المفعول (bezahlt) + المصدر (werden)."
    },
    {
      type: "multiple-choice",
      question: "Hier ___ nicht geparkt werden! (قانون منع رسمي)",
      options: ["darf", "will", "mag", "kannst"],
      correct: 0,
      explanation: "للتعبير عن المنع الرسمي أو عدم السماح نستخدم darf nicht مع المبني للمجهول."
    },
    {
      type: "match",
      question: "طابق الجملة الألمانية بترجمتها العربية الصحيحة:",
      pairs: [
        { left: "Das Auto muss repariert werden.", right: "يجب إصلاح السيارة." },
        { left: "Der Brief kann heute gesendet werden.", right: "يمكن إرسال الخطاب اليوم." },
        { left: "Hier darf nicht geraucht werden.", right: "لا يُسمح بالتدخين هنا." },
        { left: "Der Termin musste verschoben werden.", right: "كان يجب تأجيل الموعد." }
      ],
      explanation: "طابق الأفعال الناقصة (müssen للوجوب، können للإمكانية، dürfen للمنع، musste للماضي)."
    },
    {
      type: "error-correction",
      sentence: "Das Paket muss heute geliefert wird.",
      corrected: "Das Paket muss heute geliefert werden.",
      accept: ["Das Paket muss heute geliefert werden", "Das Paket muss heute geliefert werden."],
      explanation: "خطأ شائع: تصريف werden! بعد الفعل الناقص muss يجب أن يبقى werden في صيغة المصدر (werden وليس wird)."
    },
    {
      type: "translate",
      from: "يجب فحص السيارة.",
      answer: "Das Auto muss geprüft werden.",
      accept: [
        "Das Auto muss geprüft werden.",
        "Das Auto muss geprüft werden",
        "Das Auto muss kontrolliert werden.",
        "Das Auto muss kontrolliert werden",
        "Das Auto muss untersucht werden.",
        "Das Auto muss untersucht werden"
      ],
      explanation: "Das Auto (نائب فاعل) + muss (فعل ناقص) + geprüft (اسم مفعول) + werden (مصدر)."
    },
    {
      type: "fill-blank",
      sentence: "Der Brief ___ gestern abgeschickt werden. (müssen في الماضي)",
      answer: "musste",
      accept: ["musste"],
      explanation: "في زمن الماضي Präteritum، يُصرّف فعل müssen مع المفرد إلى musste."
    },
    {
      type: "word-order",
      question: "رتب الجملة: (كان بالإمكان حل المشكلة)",
      words: ["gelöst", "Das", "werden", "Problem", "konnte"],
      correct: "Das Problem konnte gelöst werden",
      accept: ["Das Problem konnte gelöst werden."],
      explanation: "Das Problem + konnte (ماضي können) + gelöst (Partizip II) + werden (المصدر)."
    },
    {
      type: "multiple-choice",
      question: "في الجملة الفرعية: Ich weiß, dass das Formular ausgefüllt werden ___.",
      options: ["muss", "müssen", "wird", "ist"],
      correct: 0,
      explanation: "في الجملة الفرعية (Nebensatz) مع dass، يأتي الفعل الناقص المصرف في آخر الجملة تماماً بعد werden."
    }
  ],

  // 8. الاختبار النهائي (5 أسئلة متعددة الخيارات)
  quiz: [
    {
      type: "multiple-choice",
      question: "ما هو الترتيب الصحيح لنهاية الجملة في المبني للمجهول مع الأفعال الناقصة؟",
      options: [
        "Partizip II + werden (Infinitiv)",
        "werden + Partizip II",
        "Partizip II + wird",
        "Infinitiv + geworden"
      ],
      correct: 0,
      explanation: "الترتيب الصارم هو اسم المفعول أولاً يليه فعل werden في المصدر: ausgefüllt werden."
    },
    {
      type: "multiple-choice",
      question: "Die E-Mails müssen sofort ___ werden.",
      options: ["beantwortet", "beantworten", "beantwortete", "beantworte"],
      correct: 0,
      explanation: "نحتاج إلى اسم المفعول (Partizip II) للفعل beantworten وهو beantwortet."
    },
    {
      type: "multiple-choice",
      question: "Hier ___ nicht fotografiert werden! (ممنوع التصوير)",
      options: ["darf", "muss", "soll", "will"],
      correct: 0,
      explanation: "يُستخدم darf nicht للتعبير عن المنع القانوني أو حظر القيام بشيء."
    },
    {
      type: "multiple-choice",
      question: "Gestern ___ die Reparatur nicht beendet werden. (في الماضي)",
      options: ["konnte", "kann", "könnte", "gekonnt"],
      correct: 0,
      explanation: "في الماضي مع gestern نستخدم صيغة الماضي البسيط Präteritum للفعل können وهي konnte."
    },
    {
      type: "multiple-choice",
      question: "أي جملة من الجمل التالية صحيحة قواعدياً؟",
      options: [
        "Die Tür kann leicht geöffnet werden.",
        "Die Tür kann leicht geöffnet wird.",
        "Die Tür werden leicht geöffnet kann.",
        "Die Tür kann leicht öffnen werden."
      ],
      correct: 0,
      explanation: "الجملة الأولى صحيحة تماماً: Modalverb في الموقع الثاني + Partizip II (geöffnet) + werden في نهاية الجملة."
    }
  ]
};

window.lessons = window.LESSONS;
