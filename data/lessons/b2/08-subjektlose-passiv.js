// data/lessons/b2/08-subjektlose-passiv.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["b2-2-03"] = {
  id: "b2-2-03",
  level: "b2-2",
  order: 8,
  slug: "subjektlose-passiv",
  title: {
    de: "Das subjektlose & unpersönliche Passiv",
    ar: "المبني للمجهول غير الشخصي وبدون فاعل (Subjektloses Passiv)"
  },
  tags: ["b2", "passiv", "subjektlos", "grammatik"],

  goal: "إتقان صياغة المبني للمجهول للأفعال اللازمة (التي لا تأخذ مفعولاً به منصوباً) مثل: Es wird getanzt، Hier wird nicht geraucht، واستخدامه للتعبير عن القواعد العامة والتعليمات الرسمية في امتحان B2.",

  explanation: [
    {
      type: "text",
      content: "في اللغة الألمانية، يمكن بناء صيغة المبني للمجهول حتى من **الأفعال التي لا تأخذ مفعولاً به منصوباً (Intransitive Verben)**. في هذه الحالة، لا يوجد فاعل نحوي حقيقي في الجملة، ويُسمى هذا التركيب بـ **المبني للمجهول غير الشخصي / الخالي من الفاعل (Subjektloses / Unpersönliches Passiv)**."
    },
    {
      type: "table",
      headers: ["النوع / الحالة", "التركيب النحوي", "مثال توضيحي (B2)", "المعنى بالعربية"],
      rows: [
        ["مع أداة الحشو (es) في البداية", "**Es wird + Partizip II**", "**Es wird** heute Abend viel **getanzt**.", "هناك الكثير من الرقص هذا المساء."],
        ["بدون (es) عند تقديم ظرف أو مكان", "**Angabe + wird + Partizip II**", "Hier **wird** nicht **geraucht**!", "التدخين ممنوع هنا! (لا يُدخن هنا)"],
        ["مع أفعال تأخذ Dativ", "**Dativ + wird + Partizip II**", "Dem Verletzten **wurde** sofort **geholfen**.", "قُدمت المساعدة للمصاب على الفور."],
        ["مع أفعال تأخذ حرف جر ثابت", "**Präpositionalobjekt + wird + Partizip II**", "Über dieses Thema **wird** heftig **diskutiert**.", "يجري نقاش حاد حول هذا الموضوع."]
      ]
    },
    {
      type: "rule",
      content: "قاعدة ضمير الحشو (es): الضمير *es* يظهر فقط إذا بدأنا به الجملة في الموقع الأول (Position 1)! أما إذا بدأنا بظرف زمان، أو مكان، أو بمفعول Dativ، **يختفي الضمير es تماماً** ولا يجوز كتابته في وسط الجملة. مثال خاطئ: *Gestern wurde es getanzt*، الصحيح: *Gestern wurde getanzt*."
    },
    {
      type: "rule",
      content: "تصريف الفعل المساعد: الفعل المساعد wird / wurde يبقى دائماً وأبداً في صيغة **المفرد الغائب (3. Person Singular: wird / wurde)** لأن الجملة ليس لها فاعل جمع."
    }
  ],

  examples: [
    {
      de: "Hier **wird** gearbeitet, nicht geschlafen!",
      ar: "هنا يتم العمل، وليس النوم! (تقال للحث على العمل الجاد)",
      highlight: "wird gearbeitet",
      note: "بدون es لوجود Hier في البداية"
    },
    {
      de: "Den Opfern der Katastrophe **muss** unverzüglich **geholfen werden**.",
      ar: "يجب تقديم العون لضحايا الكارثة دون تأخير.",
      highlight: "Den Opfern ... geholfen werden",
      note: "المجرور Den Opfern يبقى في Dativ ولا يتحول لمرفوع"
    },
    {
      de: "**Es wurde** bis spät in die Nacht über den Gesetzentwurf **verhandelt**.",
      ar: "تم التفاوض بشأن مشروع القانون حتى وقت متأخر من الليل.",
      highlight: "Es wurde ... verhandelt",
      note: "استخدام es لشغل الموقع الأول"
    },
    {
      de: "Auf der Konferenz **wurde** lebhaft über neue Technologien **gesprochen**.",
      ar: "في المؤتمر، دار حديث مفعم بالحيوية حول التقنيات الجديدة.",
      highlight: "wurde ... gesprochen",
      note: "مبني للمجهول لفعل يتعدى بحرف جر (sprechen über)"
    },
    {
      de: "Ihm **wurde** von allen Anwesenden herzlich **gratuliert**.",
      ar: "قُدمت له التهنئة القلبية من قِبل جميع الحاضرين.",
      highlight: "Ihm wurde ... gratuliert",
      note: "Dativ-Objekt (Ihm) في الموقع الأول"
    },
    {
      de: "In dieser Bibliothek **darf** nicht laut **gesprochen werden**.",
      ar: "لا يُسمح بالتحدث بصوت مرتفع في هذه المكتبة.",
      highlight: "darf ... gesprochen werden",
      note: "مبني للمجهول غير شخصي مع فعل ناقص (dürfen)"
    },
    {
      de: "Bei der Abstimmung **wurde** für den Vorschlag **gestimmt**.",
      ar: "أثناء التصويت، تم التصويت لصالح المقترح.",
      highlight: "wurde ... gestimmt",
      note: "مبني للمجهول لفعل لا يتعدى لمفعول (stimmen)"
    },
    {
      de: "**Es darf** unter keinen Umständen **aufgegeben werden**.",
      ar: "لا يجوز الاستسلام تحت أي ظرف من الظروف.",
      highlight: "Es darf ... aufgegeben werden",
      note: "تعبير رسمي عن الإصرار"
    }
  ],

  arabicTips: [
    "في اللغة العربية يمكننا بسهولة بناء الفعل للمجهول بضم أوله (قيل، نوقش، صُوت). في الألمانية نستخدم نفس الفكرة تماماً ولكن باستخدام wird + Partizip II دون الحاجة لوجود فاعل.",
    "الخطأ الشائع جداً: تحويل مفعول Dativ إلى فاعل Nominativ! مثلاً: فعل helfen يأخذ Dativ. عند بنائه للمجهول **يبقى مفعولاً مجروراً**: نقول *Dem Mann wird geholfen* ولا يجوز أبداً قول *Der Mann wird geholfen*!",
    "تذكر دائماً أن (es) مجرد أداة حشو موضعية (Platzhalter)؛ إذا وضعت أي كلمة أخرى في بداية الجملة، احذف es فوراً."
  ],

  summary: [
    "يُصاغ من الأفعال اللازمة (التي لا تأخذ Akkusativ).",
    "الضمير es يُستخدم فقط إذا بدأنا به الجملة في الموقع الأول (Position 1).",
    "إذا بدأنا بظرف أو بمفعول Dativ، يسقط الضمير es تماماً.",
    "مفعول Dativ يظل دائماً في حالة Dativ ولا يتحول إلى فاعل مرفوع.",
    "الفعل wird / wurde يصرف دائماً في صيغة المفرد الغائب (Singular)."
  ],

  vocabulary: [
    { de: "der Gesetzentwurf", plural: "die Gesetzentwürfe", ar: "مشروع القانون المقترح", article: "der", example: "Der Bundestag berät über den Gesetzentwurf." },
    { de: "die Katastrophe", plural: "die Katastrophen", ar: "الكارثة / النكبة", article: "die", example: "Die Katastrophe hinterließ schwere Schäden." },
    { de: "unverzüglich", plural: "–", ar: "فوراً / دون أي إبطاء", article: "", example: "Bitte antworten Sie unverzüglich." },
    { de: "die Abstimmung", plural: "die Abstimmungen", ar: "التصويت / الاقتراع", article: "die", example: "Das Ergebnis der Abstimmung war eindeutig." },
    { de: "verhandeln", plural: "–", ar: "يتفاوض / يتباحث في أمر", article: "", example: "Beide Parteien verhandeln über einen Waffenstillstand." },
    { de: "aufgeben", plural: "–", ar: "يستسلم / يتخلى عن", article: "", example: "Wir dürfen jetzt auf keinen Fall aufgeben." }
  ],

  exercises: [
    {
      type: "multiple-choice",
      question: "Welcher Satz ist grammatisch VÖLLIG KORREKT?",
      options: [
        "Dem Verletzten wurde sofort geholfen.",
        "Der Verletzte wurde sofort geholfen.",
        "Dem Verletzten wurde es sofort geholfen.",
        "Es wurde dem Verletzten gestern geholft."
      ],
      answer: 0,
      explanation: "فعل helfen يأخذ Dativ (Dem Verletzten) ويبقى Dativ في المبني للمجهول، ويسقط es لأن الجملة بدأت بالاسم المجرور."
    },
    {
      type: "fill-blank",
      sentence: "Hier ___ (يُعمل) konzentriert und ohne Lärm.",
      correct: "wird",
      accept: ["wird"],
      explanation: "في المبني للمجهول غير الشخصي نستخدم فعل wird في صيغة المفرد الغائب."
    },
    {
      type: "word-order",
      words: ["Über", "diese", "Frage", "wurde", "gestern", "lange", "gestritten", "."],
      correct: "Über diese Frage wurde gestern lange gestritten .",
      explanation: "تبدأ الجملة بشبه الجملة (Über diese Frage) يليها الفعل wurde في الموقع الثاني بدون es."
    },
    {
      type: "match",
      pairs: [
        { de: "Hier wird nicht geraucht!", ar: "ممنوع التدخين هنا!" },
        { de: "Es wird viel gelacht.", ar: "هناك الكثير من الضحك والمرح." },
        { de: "Ihm wurde verziehen.", ar: "تمت مسامحته والعفو عنه (Dativ)." },
        { de: "Darüber wird noch gesprochen.", ar: "سيجري الحديث حول ذلك لاحقاً." }
      ],
      explanation: "طابق الجمل بمعناها التعبيري الصحيح."
    },
    {
      type: "translate",
      source: "تم مساعدة الأطفال على الفور.",
      target: "Den Kindern wurde sofort geholfen.",
      accept: [
        "Den Kindern ist sofort geholfen worden.",
        "Es wurde den Kindern sofort geholfen."
      ],
      explanation: "Den Kindern في Dativ جمع + wurde + geholfen."
    },
    {
      type: "error-correction",
      sentence: "Gestern wurde es bis zwei Uhr nachts gefeiert.",
      correct: "Gestern wurde bis zwei Uhr nachts gefeiert.",
      explanation: "إذا بدأت الجملة بظرف (Gestern)، يجب حذف ضمير الحشو es تماماً."
    },
    {
      type: "fill-blank",
      sentence: "Es ___ (wurde / wurden) stundenlang über die Reform diskutiert.",
      correct: "wurde",
      accept: ["wurde"],
      explanation: "الفعل في المبني للمجهول غير الشخصي مفرد دائماً (wurde)."
    },
    {
      type: "multiple-choice",
      question: "Wann darf das Pronomen »es« im Passivsatz verwendet werden?",
      options: [
        "Nur auf Position 1 als Platzhalter am Satzanfang.",
        "Immer und überall im Satz.",
        "Nur nach dem finite Verb.",
        "Nur wenn es um das Wetter geht."
      ],
      answer: 0,
      explanation: "es يعمل كـ Platzhalter في الموقع الأول فقط ويسقط تماماً في غير ذلك."
    },
    {
      type: "translate",
      source: "في ألمانيا يُشرب الكثير من القهوة.",
      target: "In Deutschland wird viel Kaffee getrunken.",
      accept: [
        "In Deutschland wird sehr viel Kaffee getrunken."
      ],
      explanation: "In Deutschland wird ... getrunken."
    },
    {
      type: "multiple-choice",
      question: "Kann man von »schlafen« ein Passiv bilden?",
      options: [
        "Ja, als subjektloses Passiv: »Jetzt wird geschlafen!«",
        "Nein, intransitive Verben dürfen niemals im Passiv stehen.",
        "Nur mit dem Hilfsverb haben.",
        "Nur im Konjunktiv I."
      ],
      answer: 0,
      explanation: "نعم، يمكن بناء المبني للمجهول غير الشخصي من schlafen للتعبير عن الأوامر والتعليمات العامة."
    }
  ],

  quiz: [
    {
      question: "Welcher Satz drückt die Aufforderung »Wir müssen jetzt arbeiten« im Passiv aus?",
      options: [
        "Jetzt wird gearbeitet!",
        "Jetzt wird es gearbeitet!",
        "Jetzt ist gearbeitet werden!",
        "Jetzt wird die Arbeit gemacht haben!"
      ],
      answer: 0,
      explanation: "Jetzt wird gearbeitet! تعبير ألماني شهير للحث على بدء العمل فوراً."
    },
    {
      question: "Warum heißt es »Ihnen wird geholfen« und NICHT »Sie werden geholfen«?",
      options: [
        "Weil »helfen« den Dativ verlangt und der Dativ im Passiv erhalten bleibt.",
        "Weil »Ihnen« immer Nominativ ist.",
        "Weil man im Passiv immer Dativ verwenden muss.",
        "Das ist ein moderner Umgangssprachfehler."
      ],
      answer: 0,
      explanation: "أفعال الداتيف لا تحول مفعولها إلى فاعل مرفوع في المبني للمجهول، بل تحتفظ بحالة Dativ."
    },
    {
      question: "Was geschieht mit »es«, wenn der Satz mit einer Zeitangabe beginnt (z. B. »Gestern...«)?",
      options: [
        "Das »es« entfällt ersatzlos (z. B. »Gestern wurde getanzt«).",
        "Das »es« rutscht auf Position 3.",
        "Das »es« verwandelt sich in »das«.",
        "Das »es« muss ans Satzende verschoben werden."
      ],
      answer: 0,
      explanation: "يسقط es نهائياً عند تقديم أي عنصر آخر على الموقع الأول."
    },
    {
      question: "Welche Form von »werden« wird im subjektlosen Passiv verwendet?",
      options: [
        "Ausschließlich die 3. Person Singular (wird / wurde).",
        "Die 3. Person Plural (werden / wurden).",
        "Je nach Länge des Satzes Singular oder Plural.",
        "Immer das Hilfsverb sein."
      ],
      answer: 0,
      explanation: "لعدم وجود فاعل جمع، يكون الفعل المصرف مفرداً غائباً دائماً (3. Person Sg.)."
    },
    {
      question: "Was bedeutet: »Über den Vorfall wurde Stillschweigen bewahrt«?",
      options: [
        "Niemand hat über das Ereignis gesprochen (es wurde geheim gehalten).",
        "Alle haben laut über den Vorfall geschrien.",
        "Der Vorfall wurde sofort im Radio übertragen.",
        "Der Vorfall hat niemals stattgefunden."
      ],
      answer: 0,
      explanation: "Stillschweigen bewahren تعني التزام الصمت التام والكتمان بشأن مسألة معينة."
    }
  ]
};
