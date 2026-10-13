// js/games/verben-praep-game.js — لعبة الأفعال مع حروف الجر وأدوات الربط (Verben mit Präpositionen & Konnektoren-Meister)

const VerbenPraepGame = {
  questions: [
    // =========================================================================
    // PART 1: 22 Questions — Verben mit Präpositionen + Kasus (Akkusativ / Dativ)
    // =========================================================================
    {
      mode: "verben",
      category: "warten auf + Akkusativ",
      sentence: "Ich warte schon seit einer halben Stunde ___ ___ Bus.",
      ar: "أنا أنتظر الحافلة منذ نصف ساعة.",
      options: ["auf den", "auf dem", "an den", "für den"],
      correct: "auf den",
      accept: ["auf den", "auf den bus"],
      fullSentence: "Ich warte schon seit einer halben Stunde auf den Bus.",
      explanation: "الفعل (warten) يأتي دائماً مع حرف الجر (auf) ويطلب حالة النصب (Akkusativ). وبما أن كلمة (der Bus) مذكر، فإن أداتها تتحول في الأكوزاتيف من der إلى den.",
      rule: "warten auf + Akkusativ (der Bus ➔ auf den Bus)"
    },
    {
      mode: "verben",
      category: "teilnehmen an + Dativ",
      sentence: "Möchtest du nächste Woche ___ ___ Sprachkurs teilnehmen?",
      ar: "هل تود المشاركة في دورة اللغة الأسبوع القادم؟",
      options: ["an dem", "auf den", "in den", "an den"],
      correct: "an dem",
      accept: ["an dem", "am", "an dem sprachkurs"],
      fullSentence: "Möchtest du nächste Woche an dem Sprachkurs teilnehmen?",
      explanation: "الفعل المنفصل (teilnehmen) بمعنى يشارك يأتي دائماً مع حرف الجر (an) ويطلب حالة الجر (Dativ). الاسم المذكر (der Sprachkurs) يتحول في الداتيف إلى (dem Sprachkurs).",
      rule: "teilnehmen an + Dativ (der Kurs ➔ an dem / am Kurs)"
    },
    {
      mode: "verben",
      category: "sich freuen auf + Akk (المستقبل)",
      sentence: "Die Kinder freuen sich schon sehr ___ ___ Sommerferien (Plural).",
      ar: "الأطفال يتطلعون بشوق كبير إلى عطلة الصيف القادمة.",
      options: ["auf die", "über die", "auf den", "mit den"],
      correct: "auf die",
      accept: ["auf die", "auf die sommerferien"],
      fullSentence: "Die Kinder freuen sich schon sehr auf die Sommerferien.",
      explanation: "نستخدم (sich freuen auf + Akkusativ) عندما نفرح بشيء سيحدث في المستقبل (نتطلع إليه بشوق). أداة الجمع في الأكوزاتيف تبقى (die).",
      rule: "sich freuen auf + Akkusativ = التطلع بشوق لحدث مستقبلي"
    },
    {
      mode: "verben",
      category: "sich freuen über + Akk (الحاضر/الماضي)",
      sentence: "Ich habe mich gestern sehr ___ ___ schöne Geschenk gefreut.",
      ar: "لقد فرحتُ أمس كثيراً بالهدية الجميلة (التي استلمتها).",
      options: ["über das", "auf das", "über dem", "von dem"],
      correct: "über das",
      accept: ["über das", "ueber das"],
      fullSentence: "Ich habe mich gestern sehr über das schöne Geschenk gefreut.",
      explanation: "نستخدم (sich freuen über + Akkusativ) عند الفرح بشيء حدث بالفعل أو تم استلامه. كلمة (das Geschenk) محايد فتبقى أداتها (das) في الأكوزاتيف.",
      rule: "sich freuen über + Akkusativ = الفرح بشيء حاضر أو ماضٍ"
    },
    {
      mode: "verben",
      category: "denken an + Akkusativ",
      sentence: "Denkst du bitte morgen früh ___ ___ Termin beim Arzt?",
      ar: "هل تتذكر من فضلك موعد الطبيب غداً صباحاً؟",
      options: ["an den", "an dem", "über den", "auf den"],
      correct: "an den",
      accept: ["an den", "an den termin"],
      fullSentence: "Denkst du bitte morgen früh an den Termin beim Arzt?",
      explanation: "الفعل (denken) يأتي مع حرف الجر (an) ويطلب دائماً حالة النصب (Akkusativ). الاسم المذكر (der Termin) يصبح (an den Termin).",
      rule: "denken an + Akkusativ (يفكر في / يتذكر)"
    },
    {
      mode: "verben",
      category: "sich interessieren für + Akkusativ",
      sentence: "Mein Bruder interessiert sich sehr ___ ___ moderne Technik.",
      ar: "أخي مهتم جداً بالتقنية الحديثة.",
      options: ["für die", "an der", "über die", "für der"],
      correct: "für die",
      accept: ["für die", "fuer die"],
      fullSentence: "Mein Bruder interessiert sich sehr für die moderne Technik.",
      explanation: "الفعل الانعكاسي (sich interessieren) يأخذ حرف الجر (für) الذي يطلب دائماً حالة النصب (Akkusativ). أداة المؤنث (die Technik) تبقى (die).",
      rule: "sich interessieren für + Akkusativ (يهتم بـ)"
    },
    {
      mode: "verben",
      category: "sich kümmern um + Akkusativ",
      sentence: "Wer kümmert sich während deiner Reise ___ ___ Hund?",
      ar: "من سيعتني بالكلب أثناء رحلتك؟",
      options: ["um den", "für den", "um dem", "mit dem"],
      correct: "um den",
      accept: ["um den", "um den hund"],
      fullSentence: "Wer kümmert sich während deiner Reise um den Hund?",
      explanation: "الفعل (sich kümmern) بمعنى يعتني/يهتم يأخذ حرف الجر (um) ويطلب دائماً حالة النصب (Akkusativ). المذكر (der Hund) يتحول إلى (den Hund).",
      rule: "sich kümmern um + Akkusativ (يعتني بـ / يهتم بـ)"
    },
    {
      mode: "verben",
      category: "sprechen mit + Dativ",
      sentence: "Ich muss heute unbedingt ___ ___ Chef über das Projekt sprechen.",
      ar: "يجب أن أتحدث اليوم حتماً مع المدير حول المشروع.",
      options: ["mit dem", "mit den", "über den", "zu den"],
      correct: "mit dem",
      accept: ["mit dem", "mit dem chef"],
      fullSentence: "Ich muss heute unbedingt mit dem Chef über das Projekt sprechen.",
      explanation: "التحدث مع شخص يستخدم (sprechen mit + Dativ). الاسم المذكر (der Chef) يصبح في حالة الداتيف (dem Chef).",
      rule: "sprechen mit + Dativ (للأشخاص) | sprechen über + Akkusativ (للمواضيع)"
    },
    {
      mode: "verben",
      category: "sprechen über + Akkusativ",
      sentence: "Wir haben gestern lange ___ ___ neuen Film gesprochen.",
      ar: "تحدثنا بالأمس طويلاً عن الفيلم الجديد.",
      options: ["über den", "über dem", "von den", "mit dem"],
      correct: "über den",
      accept: ["über den", "ueber den"],
      fullSentence: "Wir haben gestern lange über den neuen Film gesprochen.",
      explanation: "التحدث عن موضوع يستخدم (sprechen über + Akkusativ). وبما أن (der Film) مذكر، يتحول في الأكوزاتيف إلى (den neuen Film).",
      rule: "sprechen über + Akkusativ (يتحدث عن موضوع)"
    },
    {
      mode: "verben",
      category: "sich erinnern an + Akkusativ",
      sentence: "Erinnerst du dich noch ___ ___ ersten Tag in Deutschland?",
      ar: "هل لا تزال تتذكر يومك الأول في ألمانيا؟",
      options: ["an deinen", "an deinem", "über deinen", "von deinem"],
      correct: "an deinen",
      accept: ["an deinen"],
      fullSentence: "Erinnerst du dich noch an deinen ersten Tag in Deutschland?",
      explanation: "الفعل (sich erinnern) يأخذ حرف الجر (an) مع حالة النصب (Akkusativ). لأن (der Tag) مذكر، تصبح أداة الملكية (deinen).",
      rule: "sich erinnern an + Akkusativ (يتذكر شيئاً أو شخصاً)"
    },
    {
      mode: "verben",
      category: "sich vorbereiten auf + Akkusativ",
      sentence: "Alle Kursteilnehmer bereiten sich intensiv ___ ___ B1-Prüfung vor.",
      ar: "جميع المشاركين في الدورة يستعدون بتركيز لامتحان B1.",
      options: ["auf die", "für die", "auf der", "an die"],
      correct: "auf die",
      accept: ["auf die"],
      fullSentence: "Alle Kursteilnehmer bereiten sich intensiv auf die B1-Prüfung vor.",
      explanation: "الفعل (sich vorbereiten) يأخذ حرف الجر (auf) ويطلب حالة النصب (Akkusativ). الاسم المؤنث (die Prüfung) يبقى (die).",
      rule: "sich vorbereiten auf + Akkusativ (يستعد لـ)"
    },
    {
      mode: "verben",
      category: "abhängen von + Dativ",
      sentence: "Unser Wochenendausflug hängt komplett ___ ___ Wetter ab.",
      ar: "رحلة نهاية الأسبوع الخاصة بنا تعتمد كلياً على الطقس.",
      options: ["von dem", "auf das", "über das", "von das"],
      correct: "von dem",
      accept: ["von dem", "vom"],
      fullSentence: "Unser Wochenendausflug hängt komplett von dem Wetter ab.",
      explanation: "الفعل المنفصل (abhängen) بمعنى يعتمد على يأخذ دائماً حرف الجر (von) الذي يفرض حالة الجر (Dativ). المحايد (das Wetter) يصبح (von dem / vom Wetter).",
      rule: "abhängen von + Dativ (يعتمد على / يتوقف على)"
    },
    {
      mode: "verben",
      category: "bitten um + Akkusativ",
      sentence: "Darf ich dich kurz ___ ___ großen Gefallen bitten?",
      ar: "هل لي أن أطلب منك معروفاً كبيراً باختصار؟",
      options: ["um einen", "für einen", "um einem", "nach einem"],
      correct: "um einen",
      accept: ["um einen"],
      fullSentence: "Darf ich dich kurz um einen großen Gefallen bitten?",
      explanation: "الفعل (bitten) بمعنى يرجو/يطلب يأتي مع حرف الجر (um) ويطلب حالة النصب (Akkusativ). المذكر (ein Gefallen) يصبح (einen großen Gefallen).",
      rule: "jemanden bitten um + Akkusativ (يطلب من شخص شيئاً)"
    },
    {
      mode: "verben",
      category: "danken für + Akkusativ",
      sentence: "Ich danke Ihnen herzlich ___ ___ schnelle Unterstützung.",
      ar: "أشكركم من القلب على الدعم السريع.",
      options: ["für die", "über die", "für der", "um die"],
      correct: "für die",
      accept: ["für die", "fuer die"],
      fullSentence: "Ich danke Ihnen herzlich für die schnelle Unterstützung.",
      explanation: "الفعل (danken) يأخذ Dativ للشخص (Ihnen) وحرف الجر (für + Akkusativ) للشيء المشكور عليه (für die schnelle Unterstützung).",
      rule: "jemandem (Dativ) danken für + Akkusativ"
    },
    {
      mode: "verben",
      category: "sich beschweren über + Akkusativ",
      sentence: "Die Nachbarn beschweren sich oft ___ ___ lauten Lärm.",
      ar: "الجيران يشتكون غالباً من الضجيج العالي.",
      options: ["über den", "über dem", "auf den", "gegen dem"],
      correct: "über den",
      accept: ["über den", "ueber den"],
      fullSentence: "Die Nachbarn beschweren sich oft über den lauten Lärm.",
      explanation: "الشكوى من شيء تستخدم (sich beschweren über + Akkusativ). الاسم المذكر (der Lärm) يصبح في الأكوزاتيف (den lauten Lärm).",
      rule: "sich beschweren bei (+ Dativ شخص) über (+ Akkusativ شيء)"
    },
    {
      mode: "verben",
      category: "sich bewerben um + Akkusativ",
      sentence: "Sara bewirbt sich ___ ___ gute Stelle als Krankenschwester.",
      ar: "سارة تتقدم بطلب توظيف للحصول على وظيفة جيدة كممرضة.",
      options: ["um eine", "für eine", "auf einer", "an einer"],
      correct: "um eine",
      accept: ["um eine"],
      fullSentence: "Sara bewirbt sich um eine gute Stelle als Krankenschwester.",
      explanation: "التقدم لوظيفة يستخدم (sich bewerben um + Akkusativ). الاسم المؤنث (eine Stelle) يبقى (eine) في حالة النصب.",
      rule: "sich bewerben bei (+ Dativ شركة) um (+ Akkusativ وظيفة)"
    },
    {
      mode: "verben",
      category: "Angst haben vor + Dativ",
      sentence: "Das kleine Mädchen hat große Angst ___ ___ großen Hund.",
      ar: "الطفلة الصغيرة تخاف بشدة من الكلب الكبير.",
      options: ["vor dem", "vor den", "von dem", "über den"],
      correct: "vor dem",
      accept: ["vor dem"],
      fullSentence: "Das kleine Mädchen hat große Angst vor dem großen Hund.",
      explanation: "التعبير (Angst haben vor) وكذلك (sich fürchten vor) يطلب دائماً حالة الجر (Dativ). المذكر (der Hund) يصبح (vor dem großen Hund).",
      rule: "Angst haben vor / sich fürchten vor + Dativ (يخاف من)"
    },
    {
      mode: "verben",
      category: "träumen von + Dativ",
      sentence: "Er träumt schon seit Jahren ___ ___ eigenen Haus am Meer.",
      ar: "إنه يحلم منذ سنوات بمنزل خاص على البحر.",
      options: ["von einem", "über ein", "von einen", "auf ein"],
      correct: "von einem",
      accept: ["von einem"],
      fullSentence: "Er träumt schon seit Jahren von einem eigenen Haus am Meer.",
      explanation: "الفعل (träumen) يأخذ دائماً حرف الجر (von) الذي يفرض حالة الجر (Dativ). المحايد (ein Haus) يتحول في الداتيف إلى (einem eigenen Haus).",
      rule: "träumen von + Dativ (يحلم بـ)"
    },
    {
      mode: "verben",
      category: "telefonieren mit + Dativ",
      sentence: "Gestern Abend habe ich lange ___ ___ Schwester telefoniert.",
      ar: "مساء أمس تحدثتُ هاتفياً طويلاً مع أختي.",
      options: ["mit meiner", "mit meine", "zu meiner", "an meine"],
      correct: "mit meiner",
      accept: ["mit meiner"],
      fullSentence: "Gestern Abend habe ich lange mit meiner Schwester telefoniert.",
      explanation: "الفعل (telefonieren) يأخذ حرف الجر (mit + Dativ). المؤنث (meine Schwester) تتحول في الداتيف إلى (meiner Schwester).",
      rule: "telefonieren mit + Dativ (يتحدث بالهاتف مع)"
    },
    {
      mode: "verben",
      category: "sich gewöhnen an + Akkusativ",
      sentence: "Ich habe mich schnell ___ ___ kalte Wetter in Deutschland gewöhnt.",
      ar: "لقد تعودتُ بسرعة على الطقس البارد في ألمانيا.",
      options: ["an das", "an dem", "mit dem", "auf das"],
      correct: "an das",
      accept: ["an das", "ans"],
      fullSentence: "Ich habe mich schnell an das kalte Wetter in Deutschland gewöhnt.",
      explanation: "الفعل (sich gewöhnen) بمعنى يعتاد على يأخذ حرف الجر (an) مع حالة النصب (Akkusativ). المحايد (das Wetter) يبقى (an das / ans Wetter).",
      rule: "sich gewöhnen an + Akkusativ (يعتاد على)"
    },
    {
      mode: "verben",
      category: "Fragewort für Sachen (Wo + r + Präp)",
      sentence: "___ wartest du hier draußen? — Ich warte auf das Taxi.",
      ar: "ما الذي تنتظره هنا بالخارج؟ — أنا أنتظر سيارة الأجرة (غير عاقل).",
      options: ["Worauf", "Auf wen", "Woran", "Darauf"],
      correct: "Worauf",
      accept: ["worauf"],
      fullSentence: "Worauf wartest du hier draußen? — Ich warte auf das Taxi.",
      explanation: "عند السؤال عن شيء غير عاقل (das Taxi) مع فعل يأخذ حرف جر (warten auf)، ندمج Wo + r + auf لنحصل على أداة الاستفهام (Worauf?).",
      rule: "لغير العاقل: Wo(r) + Präposition (Worauf? / Woran? / Worüber?)"
    },
    {
      mode: "verben",
      category: "Fragewort für Personen (Präp + wen/wem)",
      sentence: "___ wartest du vor dem Kino? — Ich warte auf meinen Freund.",
      ar: "مَن تنتظر أمام السينما؟ — أنا أنتظر صديقي (عاقل).",
      options: ["Auf wen", "Worauf", "Auf wem", "Für wen"],
      correct: "Auf wen",
      accept: ["auf wen"],
      fullSentence: "Auf wen wartest du vor dem Kino? — Ich warte auf meinen Freund.",
      explanation: "عند السؤال عن شخص عاقل (meinen Freund) مع فعل يأخذ حرف جر، نضع حرف الجر أولاً ثم ضمير الاستفهام بالحالة المناسبة: warten auf + Akkusativ ➔ Auf wen?",
      rule: "للعاقل: Präposition + wen (Akkusativ) / wem (Dativ)"
    },

    // =========================================================================
    // PART 2: 18 Questions — Konnektoren & Nebensätze (V2 vs Verb am Ende)
    // =========================================================================
    {
      mode: "konnektoren",
      category: "weil (جملة فرعية - السبب)",
      sentence: "Ich kann heute leider nicht kommen, ___ ich starke Kopfschmerzen habe.",
      ar: "للأسف لا أستطيع المجيء اليوم، لأنني أعاني من صداع شديد.",
      options: ["weil", "denn", "deshalb", "trotzdem"],
      correct: "weil",
      accept: ["weil"],
      fullSentence: "Ich kann heute leider nicht kommen, weil ich starke Kopfschmerzen habe.",
      explanation: "الفعل المصرف (habe) جاء في نهاية الجملة تماماً، مما يدل على أنها جملة فرعية (Nebensatz)، والرابط السببي الذي يرسل الفعل للنهاية هو (weil).",
      rule: "weil + الفاعل + ... + الفعل المصرف في نهاية الجملة"
    },
    {
      mode: "konnektoren",
      category: "denn (موقع 0 - جملة رئيسية)",
      sentence: "Er bleibt heute im Bett, ___ er ___ stark erkältet.",
      ar: "هو يبقى اليوم في السرير، لأنه مصاب بنزلة برد شديدة.",
      options: ["denn ... ist", "weil ... ist", "deshalb ... ist", "denn ... sein"],
      correct: "denn ... ist",
      accept: ["denn ist", "denn ... ist"],
      fullSentence: "Er bleibt heute im Bett, denn er ist stark erkältet.",
      explanation: "الرابط (denn) يحتل الموقع 0 ولا يغير ترتيب الجملة الرئيسية بعده: يأتي الفاعل (er) في الموقع 1 ثم الفعل المصرف (ist) في الموقع 2.",
      rule: "denn (0) + الفاعل (1) + الفعل المصرف (2)"
    },
    {
      mode: "konnektoren",
      category: "deshalb (النتيجة - Inversion V2)",
      sentence: "Es regnet draußen sehr stark, ___ ___ wir heute zu Hause.",
      ar: "إنها تمطر في الخارج بغزارة، ولذلك نبقى نحن اليوم في البيت.",
      options: ["deshalb bleiben", "deshalb wir bleiben", "weil bleiben", "denn bleiben"],
      correct: "deshalb bleiben",
      accept: ["deshalb bleiben"],
      fullSentence: "Es regnet draußen sehr stark, deshalb bleiben wir heute zu Hause.",
      explanation: "الرابط الظرفي (deshalb) بمعنى (لذلك) يحتل الموقع الأول (1) في الجملة الثانية، فيجب أن يليه الفعل المصرف مباشرة في الموقع الثاني (bleiben wir).",
      rule: "deshalb (1) + الفعل المصرف فوراً (2) + الفاعل (3)"
    },
    {
      mode: "konnektoren",
      category: "obwohl (بالرغم من - Nebensatz)",
      sentence: "Er geht heute pünktlich zur Arbeit, ___ er ziemlich müde ___.",
      ar: "إنه يذهب اليوم في الموعد إلى العمل، بالرغم من أنه متعب إلى حد ما.",
      options: ["obwohl ... ist", "trotzdem ... ist", "weil ... ist", "obwohl ... war er"],
      correct: "obwohl ... ist",
      accept: ["obwohl ist", "obwohl ... ist"],
      fullSentence: "Er geht heute pünktlich zur Arbeit, obwohl er ziemlich müde ist.",
      explanation: "الرابط (obwohl) بمعنى (بالرغم من) يصنع جملة فرعية (Nebensatz) ويدفع الفعل المصرف (ist) إلى نهاية الجملة.",
      rule: "obwohl + الفاعل + ... + الفعل المصرف في آخر الجملة"
    },
    {
      mode: "konnektoren",
      category: "trotzdem (مع ذلك - Inversion V2)",
      sentence: "Das Wetter war gestern sehr kalt, ___ ___ wir spazieren gegangen.",
      ar: "كان الطقس أمس بارداً جداً، ومع ذلك ذهبنا في نزهة مشياً.",
      options: ["trotzdem sind", "obwohl sind", "trotzdem wir sind", "deshalb haben"],
      correct: "trotzdem sind",
      accept: ["trotzdem sind"],
      fullSentence: "Das Wetter war gestern sehr kalt, trotzdem sind wir spazieren gegangen.",
      explanation: "الرابط (trotzdem) بمعنى (ومع ذلك) يحتل الموقع 1، فيأتي بعده الفعل المساعد المصرف فوراً في الموقع 2 (sind wir ... gegangen).",
      rule: "trotzdem (1) + الفعل المصرف (2) + الفاعل (3)"
    },
    {
      mode: "konnektoren",
      category: "als vs. wenn (الماضي لمرة واحدة)",
      sentence: "___ ich ein kleines Kind war, habe ich auf dem Land gelebt.",
      ar: "عندما كنتُ طفلاً صغيراً، عشتُ في الريف.",
      options: ["Als", "Wenn", "Wann", "Ob"],
      correct: "Als",
      accept: ["als"],
      fullSentence: "Als ich ein kleines Kind war, habe ich auf dem Land gelebt.",
      explanation: "مرحلة الطفولة حدثت مرة واحدة في الماضي وانتهت، ولذلك نستخدم حتماً (Als) وليس (Wenn).",
      rule: "Als = عندما (لحدث أو فترة وقعت مرة واحدة في الماضي فقط)"
    },
    {
      mode: "konnektoren",
      category: "wenn (التكرار والشرط)",
      sentence: "Immer ___ ich nach Berlin fahre, besuche ich meinen Onkel.",
      ar: "دائماً عندما أسافر إلى برلين، أزور عمي.",
      options: ["wenn", "als", "wann", "dass"],
      correct: "wenn",
      accept: ["wenn"],
      fullSentence: "Immer wenn ich nach Berlin fahre, besuche ich meinen Onkel.",
      explanation: "عند التعبير عن حدث متكرر (Immer wenn = كلما/دائماً عندما) في الحاضر أو الماضي، أو شرط في الحاضر/المستقبل، نستخدم (wenn).",
      rule: "wenn = عندما / إذا (للتكرار في كل الأزمنة أو للشرط)"
    },
    {
      mode: "konnektoren",
      category: "ob (سؤال غير مباشر بنعم/لا)",
      sentence: "Ich weiß noch nicht genau, ___ ich morgen zum Training kommen ___.",
      ar: "لا أعرف بعد بدقة، ما إذا كنتُ أستطيع الحضور إلى التدريب غداً.",
      options: ["ob ... kann", "dass ... kann", "wenn ... kann", "ob ... ich kann"],
      correct: "ob ... kann",
      accept: ["ob kann", "ob ... kann"],
      fullSentence: "Ich weiß noch nicht genau, ob ich morgen zum Training kommen kann.",
      explanation: "عند عدم اليقين أو نقل سؤال غير مباشر إجابته نعم أو لا (هل سأستطيع المجيء أم لا؟)، نستخدم الرابط (ob) بمعنى (ما إذا / هل) مع وضع الفعل المصرف (kann) في النهاية.",
      rule: "ob = هل / ما إذا (لغير المؤكد والأسئلة غير المباشرة + الفعل في النهاية)"
    },
    {
      mode: "konnektoren",
      category: "dass (أنّ - جملة فرعية)",
      sentence: "Es ist sehr wichtig, ___ du jeden Tag neue Wörter ___.",
      ar: "من المهم جداً أن تراجع كلمات جديدة كل يوم.",
      options: ["dass ... wiederholst", "ob ... wiederholst", "weil ... wiederholen", "dass ... du wiederholst"],
      correct: "dass ... wiederholst",
      accept: ["dass wiederholst", "dass ... wiederholst"],
      fullSentence: "Es ist sehr wichtig, dass du jeden Tag neue Wörter wiederholst.",
      explanation: "بعد عبارات التأكيد أو الرأي مثل (Es ist wichtig / Ich glaube)، نستخدم الرابط (dass) بمعنى (أنّ)، ويذهب الفعل المصرف (wiederholst) إلى نهاية الجملة.",
      rule: "dass = أنّ (تأتي لحقيقة أو رأي معروف + الفعل في آخر الجملة)"
    },
    {
      mode: "konnektoren",
      category: "damit (الغاية مع اختلاف الفاعل)",
      sentence: "Die Lehrerin spricht langsam, ___ alle Schüler sie gut verstehen ___.",
      ar: "المعلمة تتحدث ببطء، لكي يستطيع جميع الطلاب فهمها جيداً.",
      options: ["damit ... können", "um ... zu können", "weil ... können", "dass ... können"],
      correct: "damit ... können",
      accept: ["damit können", "damit ... können"],
      fullSentence: "Die Lehrerin spricht langsam, damit alle Schüler sie gut verstehen können.",
      explanation: "الفاعل في الجملة الأولى (Die Lehrerin) يختلف عن الفاعل في الجملة الثانية (alle Schüler)، لذلك لا يجوز استخدام (um ... zu) بل يجب استخدام (damit) مع فعل مصرف في النهاية.",
      rule: "damit + جملة فرعية كاملة (تُستخدم للهدف خاصة عند اختلاف الفاعل)"
    },
    {
      mode: "konnektoren",
      category: "um ... zu (الغاية مع نفس الفاعل)",
      sentence: "Ich lerne intensiv Deutsch, ___ in Deutschland als Arzt ___ arbeiten.",
      ar: "أنا أتعلم الألمانية بتركيز، لكي أعمل كطبيب في ألمانيا.",
      options: ["um ... zu", "damit ... zu", "weil ... zu", "für ... zu"],
      correct: "um ... zu",
      accept: ["um zu", "um ... zu"],
      fullSentence: "Ich lerne intensiv Deutsch, um in Deutschland als Arzt zu arbeiten.",
      explanation: "الفاعل في الجملتين واحد (Ich) ولا يوجد فاعل مذكور بعد الفاصلة، والفعل جاء في صيغة المصدر (arbeiten)، فنستخدم تركيبة الغاية (um ... zu + Infinitiv).",
      rule: "um ... zu + Infinitiv = لكي (بشرط اتحاد الفاعل في الجملتين)"
    },
    {
      mode: "konnektoren",
      category: "bevor (قبل أن - Nebensatz)",
      sentence: "Ich wasche mir gründlich die Hände, ___ ich das Mittagessen ___.",
      ar: "أغسل يديّ جيداً، قبل أن أتناول وجبة الغداء.",
      options: ["bevor ... esse", "nachdem ... esse", "vor ... esse", "bevor ... ich esse"],
      correct: "bevor ... esse",
      accept: ["bevor esse", "bevor ... esse"],
      fullSentence: "Ich wasche mir gründlich die Hände, bevor ich das Mittagessen esse.",
      explanation: "الرابط الزمني (bevor) يعني (قبل أن) ويدخل على جملة فرعية كاملة فيدفع الفعل المصرف (esse) إلى نهاية الجملة (أما vor فهو حرف جر يدخل على اسم).",
      rule: "bevor = قبل أن (رابط جملة فرعية + الفعل في النهاية)"
    },
    {
      mode: "konnektoren",
      category: "nachdem (بعد أن - تتابع زمني)",
      sentence: "___ ich meine Hausaufgaben gemacht habe, sehe ich einen Film.",
      ar: "بعد أن أنهيتُ واجباتي المنزلية، أشاهد فيلماً.",
      options: ["Nachdem", "Bevor", "Danach", "Seitdem"],
      correct: "Nachdem",
      accept: ["nachdem"],
      fullSentence: "Nachdem ich meine Hausaufgaben gemacht habe, sehe ich einen Film.",
      explanation: "الرابط (Nachdem) يعني (بعد أن) ويُستخدم لحدث اكتمل أولاً (Perfekt: gemacht habe) قبل أن يبدأ الحدث الثاني في الجملة الرئيسية (Präsens: sehe ich).",
      rule: "Nachdem (بعد أن) + حدث أول مكتمل ➔ يليه الحدث الثاني"
    },
    {
      mode: "konnektoren",
      category: "während (بينما - تزامن حدثين)",
      sentence: "___ meine Frau das Abendessen kocht, räume ich das Wohnzimmer auf.",
      ar: "بينما تطبخ زوجتي العشاء، أرتب أنا غرفة المعيشة.",
      options: ["Während", "Bevor", "Nachdem", "Deshalb"],
      correct: "Während",
      accept: ["während", "waehrend"],
      fullSentence: "Während meine Frau das Abendessen kocht, räume ich das Wohnzimmer auf.",
      explanation: "الرابط (Während) كأداة ربط جملة فرعية يعني (بينما / في حين) ويدل على حدثين يقعان في نفس الوقت، ويرسل فعل الجملة الفرعية (kocht) إلى قبل الفاصلة.",
      rule: "Während = بينما (تزامن حدثين + الفعل في نهاية الجملة الفرعية)"
    },
    {
      mode: "konnektoren",
      category: "seitdem (منذ أن)",
      sentence: "___ er regelmäßig Sport treibt, fühlt er sich viel gesünder.",
      ar: "منذ أن أصبح يمارس الرياضة بانتظام، يشعر بأنه أكثر صحة بكثير.",
      options: ["Seitdem", "Nachdem", "Obwohl", "Damit"],
      correct: "Seitdem",
      accept: ["seitdem"],
      fullSentence: "Seitdem er regelmäßig Sport treibt, fühlt er sich viel gesünder.",
      explanation: "الرابط (Seitdem) يعني (منذ أن) ويعبر عن حدث بدأ في الماضي ولا يزال مستمراً حتى الآن، ويرسل الفعل (treibt) لنهاية الجملة الفرعية.",
      rule: "Seitdem = منذ أن (بداية مستمرة حتى الحاضر + الفعل في النهاية)"
    },
    {
      mode: "konnektoren",
      category: "falls (في حال - شرط محتمل)",
      sentence: "Gib mir bitte kurz Bescheid, ___ du heute später nach Hause ___.",
      ar: "أخبرني من فضلك باختصار، في حال جئتَ اليوم متأخراً إلى المنزل.",
      options: ["falls ... kommst", "als ... kommst", "denn ... kommst", "falls ... du kommst"],
      correct: "falls ... kommst",
      accept: ["falls kommst", "falls ... kommst"],
      fullSentence: "Gib mir bitte kurz Bescheid, falls du heute später nach Hause kommst.",
      explanation: "الرابط (falls) يعني (في حال / تحسباً لـ) ويعمل تماماً مثل (wenn) الشرطية فيرسل الفعل المصرف (kommst) إلى نهاية الجملة الفرعية.",
      rule: "falls = في حال (شرط محتمل + الفعل المصرف في النهاية)"
    },
    {
      mode: "konnektoren",
      category: "Nebensatz vor Hauptsatz (فعل ، فعل)",
      sentence: "Weil ich morgen sehr früh aufstehen muss, ___ ___ heute früh ins Bett.",
      ar: "لأنني يجب أن أستيقظ غداً مبكراً جداً، أذهب اليوم مبكراً إلى السرير.",
      options: ["gehe ich", "ich gehe", "gehen wir", "ich werde"],
      correct: "gehe ich",
      accept: ["gehe ich"],
      fullSentence: "Weil ich morgen sehr früh aufstehen muss, gehe ich heute früh ins Bett.",
      explanation: "عندما تبدأ الجملة بالـ Nebensatz (Weil ... muss,) فإن هذه الجملة الفرعية بأكملها تحتل الموقع الأول (1)، ولذلك يجب أن تبدأ الجملة الرئيسية بعد الفاصلة مباشرة بالفعل المصرف (gehe ich).",
      rule: "قاعدة (فعل ، فعل): Nebensatz (... الفعل)، + فعل الجملة الرئيسية + الفاعل"
    },
    {
      mode: "konnektoren",
      category: "nicht ... sondern (لا ... بل)",
      sentence: "Wir fahren im Sommer nicht nach Italien, ___ wir fliegen nach Spanien.",
      ar: "نحن لن نسافر في الصيف إلى إيطاليا، بل سنطير إلى إسبانيا.",
      options: ["sondern", "aber", "oder", "denn"],
      correct: "sondern",
      accept: ["sondern"],
      fullSentence: "Wir fahren im Sommer nicht nach Italien, sondern wir fliegen nach Spanien.",
      explanation: "بعد النفي بـ (nicht) أو (kein) لتصحيح معلومة واستبدالها بأخرى، نستخدم الرابط (sondern) بمعنى (بل / وإنما) وهو رابط في الموقع 0.",
      rule: "nicht / kein ... , sondern ... = ليس كذا، بل كذا"
    }
  ],

  modeLabels: {
    all: {
      title: "تحدي شامل (الكل)",
      badge: "🔗 40 سؤالاً شاملاً",
      desc: "يجمع بين الأفعال مع حروف الجر وحالاتها الإعرابية وأدوات الربط والجمل الفرعية."
    },
    verben: {
      title: "الأفعال مع حروف الجر",
      badge: "🎯 22 سؤالاً (Präpositionen + Kasus)",
      desc: "تدريب مركز على الأفعال المرتبطة بحروف الجر مع تحديد حالة الإعراب (Akkusativ / Dativ) وأدوات السؤال (Worauf / Auf wen)."
    },
    konnektoren: {
      title: "أدوات الربط والجمل الفرعية",
      badge: "🧩 18 سؤالاً (Konnektoren & Nebensatz)",
      desc: "تدريب مركز على الفروق الدقيقة بين (weil / denn / deshalb) و (obwohl / trotzdem) و (als / wenn / ob) و (damit / um...zu)."
    }
  },

  selectedMode: "all",
  pool: [],
  currentIndex: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  isAnswered: false,

  initPool() {
    const filtered = this.selectedMode === "all"
      ? [...this.questions]
      : this.questions.filter(q => q.mode === this.selectedMode);
    this.pool = Utils.shuffle(filtered);
  },

  render(container) {
    this.initPool();
    const target = container || document.getElementById("app-content");
    if (!target) return;

    const data = Storage.load();
    const highScore = (data.games && data.games.prepositionGame) ? data.games.prepositionGame.highScore : 0;

    target.innerHTML = `
      <div class="article-game-container fade-in" style="max-width: 780px; margin: 0 auto;">
        <div class="card text-center" style="margin-bottom: 24px; padding: 36px 24px;">
          <div style="font-size: 3rem; margin-bottom: 10px;">🔗</div>
          <h2 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 8px;">
            مُتقِن الأفعال مع حروف الجر وأدوات الربط
          </h2>
          <p class="text-secondary" style="max-width: 600px; margin: 0 auto 22px auto; font-size: 1rem; line-height: 1.6;">
            أهم قاعدتين للنجاح في امتحانات <strong>Goethe A2 / B1</strong> في لعبة واحدة: إتقان الأفعال مع حروف الجر وحالاتها (<strong>Akkusativ / Dativ</strong>)، وأدوات الربط وموقع الفعل في الجملة (<strong>Konnektoren & Nebensätze</strong>)!
          </p>

          <div style="display: flex; justify-content: center; gap: 14px; margin-bottom: 24px; flex-wrap: wrap;">
            <div class="badge badge-primary">🏆 أفضل نتيجة: ${highScore}</div>
            <div class="badge badge-success">🔊 نطق ألماني كامل لكل جملة</div>
            <div class="badge badge-warning">💡 شرح تفصيلي للقاعدة بعد كل سؤال</div>
          </div>

          <!-- Mode Selection Cards -->
          <div style="margin-bottom: 24px; text-align: right;">
            <div style="font-size: 0.92rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 10px; text-align: center;">
              اختر نمط التدريب الذي يناسبك:
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 12px;">
              ${Object.entries(this.modeLabels).map(([modeKey, info]) => {
                const active = this.selectedMode === modeKey;
                return `
                  <button
                    type="button"
                    onclick="VerbenPraepGame.selectMode('${modeKey}')"
                    style="
                      text-align: right;
                      padding: 16px;
                      border-radius: var(--radius-md);
                      border: 2px solid ${active ? 'var(--accent)' : 'var(--border)'};
                      background: ${active ? 'rgba(59, 130, 246, 0.08)' : 'var(--bg-card)'};
                      cursor: pointer;
                      transition: all 0.2s ease;
                    "
                  >
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                      <span style="font-weight: 800; font-size: 1rem; color: var(--text-primary);">${info.title}</span>
                      ${active ? '<span style="color: var(--accent); font-weight: 800;">✓</span>' : ''}
                    </div>
                    <div class="badge badge-secondary" style="margin-bottom: 8px; font-size: 0.75rem;">${info.badge}</div>
                    <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45;">
                      ${info.desc}
                    </div>
                  </button>
                `;
              }).join("")}
            </div>
          </div>

          <button class="btn btn-primary btn-lg" onclick="VerbenPraepGame.start()" style="min-width: 240px;">
            ابدأ التحدي الآن 🚀
          </button>
        </div>
      </div>
    `;
  },

  selectMode(modeKey) {
    if (!this.modeLabels[modeKey]) return;
    this.selectedMode = modeKey;
    this.render(document.getElementById("app-content"));
  },

  switchModeInGame(modeKey) {
    if (!this.modeLabels[modeKey]) return;
    this.selectedMode = modeKey;
    this.start();
  },

  start() {
    this.initPool();
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.bestStreak = 0;
    this.showCurrentQuestion();
  },

  showCurrentQuestion() {
    if (this.currentIndex >= this.pool.length) {
      this.endGame();
      return;
    }

    const item = this.pool[this.currentIndex];
    this.isAnswered = false;
    this.shuffledOptions = Utils.shuffle([...item.options]);
    this.renderQuestionScreen(item);
  },

  formatSentenceWithBlank(sentence, fillText = null, isCorrect = true) {
    const escaped = Utils.escapeHtml(sentence);
    if (!fillText) {
      return escaped.replace(/___/g, '<span style="display: inline-block; min-width: 70px; border-bottom: 3px solid var(--accent); color: var(--accent); font-weight: 800; text-align: center; padding: 0 8px; margin: 0 4px;">___</span>');
    }
    const color = isCorrect ? "var(--success)" : "var(--danger)";
    const parts = fillText.split("...").map(s => s.trim());
    let partIdx = 0;
    return escaped.replace(/___/g, () => {
      const rep = parts[partIdx] || parts[0] || fillText;
      partIdx++;
      return `<span style="border-bottom: 3px solid ${color}; color: ${color}; font-weight: 800; padding: 0 6px;">${Utils.escapeHtml(rep)}</span>`;
    });
  },

  renderQuestionScreen(item) {
    const container = document.getElementById("app-content");
    if (!container) return;

    const total = this.pool.length;
    const currentNum = this.currentIndex + 1;
    const safeFull = item.fullSentence.replace(/'/g, "\\'");

    container.innerHTML = `
      <div class="article-game-container fade-in" style="max-width: 780px; margin: 0 auto;">
        <!-- Quick Mode Switcher Pills -->
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; margin-bottom: 14px; flex-wrap: wrap;">
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            ${Object.entries(this.modeLabels).map(([k, info]) => `
              <button
                type="button"
                class="btn btn-sm ${this.selectedMode === k ? 'btn-primary' : 'btn-outline'}"
                onclick="VerbenPraepGame.switchModeInGame('${k}')"
                style="font-size: 0.8rem; padding: 5px 12px;"
              >
                ${info.title}
              </button>
            `).join("")}
          </div>
          <a href="#/games" class="btn btn-secondary btn-sm">قائمة الألعاب 🎮</a>
        </div>

        <!-- HUD -->
        <div class="game-hud" style="margin-bottom: 18px;">
          <div class="hud-item">
            <span class="hud-label">السؤال</span>
            <span class="hud-value">${currentNum} / ${total}</span>
          </div>
          <div class="hud-item">
            <span class="hud-label">النقاط</span>
            <span class="hud-value" id="vp-score">${this.score}</span>
          </div>
          <div class="hud-item">
            <span class="hud-label">السلسلة</span>
            <span class="hud-value" id="vp-streak" style="color: var(--accent);">🔥 ${this.streak}</span>
          </div>
        </div>

        <!-- Question Card -->
        <div class="card" style="padding: 28px 24px; margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <span class="badge ${item.mode === 'verben' ? 'badge-primary' : 'badge-warning'}" style="font-size: 0.85rem; padding: 6px 12px;">
              ${item.mode === "verben" ? "🎯 فعل مع حرف جر وإعراب" : "🧩 أداة ربط وجملة فرعية"} — ${Utils.escapeHtml(item.category)}
            </span>
            <button
              type="button"
              class="btn btn-secondary btn-sm audio-btn"
              style="width: auto; height: auto; padding: 6px 14px; border-radius: var(--radius-sm); gap: 6px;"
              onclick="Speech.speak('${safeFull}')"
              title="استمع للجملة الألمانية"
            >
              🔊 استمع للنطق
            </button>
          </div>

          <!-- German Sentence with Blank -->
          <div
            id="vp-sentence-box"
            class="de-text"
            dir="ltr"
            style="
              font-size: 1.4rem;
              font-weight: 700;
              color: var(--text-primary);
              background: var(--bg-primary);
              padding: 20px;
              border-radius: var(--radius-md);
              border-left: 4px solid var(--accent);
              margin-bottom: 12px;
              line-height: 1.65;
              text-align: left;
            "
          >
            ${this.formatSentenceWithBlank(item.sentence)}
          </div>

          <!-- Arabic Meaning -->
          <div style="font-size: 1.05rem; color: var(--text-secondary); margin-bottom: 22px; padding: 0 4px; font-weight: 600;">
            🇸🇦 المعنى: ${Utils.escapeHtml(item.ar)}
          </div>

          <!-- 4 Options Grid -->
          <div style="margin-bottom: 18px;">
            <div style="font-size: 0.88rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 10px;">
              1️⃣ اختر الإجابة الصحيحة لملء الفراغ:
            </div>
            <div id="vp-options-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
              ${this.shuffledOptions.map((opt, idx) => `
                <button
                  type="button"
                  class="btn btn-outline vp-opt-btn de-text"
                  dir="ltr"
                  data-opt="${Utils.escapeHtml(opt)}"
                  onclick="VerbenPraepGame.submitAnswer('${opt.replace(/'/g, "\\'")}', ${idx})"
                  style="padding: 15px 16px; font-size: 1.15rem; font-weight: 700; justify-content: center; border-radius: var(--radius-md);"
                >
                  ${Utils.escapeHtml(opt)}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Direct Text / Voice Input Option -->
          <div style="margin-bottom: 18px; background: var(--bg-primary); padding: 12px 16px; border-radius: var(--radius-md); border: 1px solid var(--border);">
            <div style="font-size: 0.84rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px;">
              2️⃣ أو اكتب / انطق الإجابة مباشرة بالألمانية:
            </div>
            <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
              <input
                type="text"
                id="vp-text-input"
                class="form-input de-text"
                dir="ltr"
                lang="de"
                autocomplete="off"
                placeholder="Schreibe oder sprich die Antwort (z.B. ${Utils.escapeHtml(item.correct)})..."
                style="flex: 1; min-width: 190px; padding: 10px 14px; font-size: 1rem; border-radius: var(--radius-sm); border: 1.5px solid var(--border); background: var(--bg-card); color: var(--text-primary);"
                onkeydown="if(event.key === 'Enter'){ event.preventDefault(); VerbenPraepGame.submitTypedAnswer(); }"
              />
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                style="min-height: 42px; padding: 0 14px;"
                onclick="Speech.listen('vp-text-input', this)"
                title="تحدث بالألمانية"
              >
                🎤 تحدث
              </button>
              <button
                type="button"
                id="vp-check-typed-btn"
                class="btn btn-primary btn-sm"
                style="min-height: 42px; padding: 0 16px;"
                onclick="VerbenPraepGame.submitTypedAnswer()"
              >
                تحقق ✅
              </button>
            </div>
          </div>

          <!-- Detailed Grammar Explanation Card (Revealed after answer) -->
          <div id="vp-feedback-box" style="display: none; margin-bottom: 18px;"></div>

          <!-- Navigation Controls -->
          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 14px; border-top: 1px solid var(--border);">
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              onclick="VerbenPraepGame.prevQuestion()"
              ${this.currentIndex === 0 ? 'disabled style="opacity: 0.45; pointer-events: none;"' : ""}
            >
              ⬅ السابق
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              onclick="VerbenPraepGame.nextQuestion()"
            >
              تخطي ⏭️
            </button>
          </div>
        </div>
      </div>
    `;
  },

  submitTypedAnswer() {
    if (this.isAnswered) return;
    const input = document.getElementById("vp-text-input");
    const val = input ? input.value.trim() : "";
    if (!val) return;
    this.submitAnswer(val, -1);
  },

  submitAnswer(userAnswer, clickedIdx = -1) {
    if (this.isAnswered) return;
    this.isAnswered = true;

    const item = this.pool[this.currentIndex];
    const acceptList = [
      ...(item.accept || []),
      item.correct.replace(/\.\.\./g, " ").replace(/\s+/g, " ").trim(),
      item.fullSentence
    ];
    const isCorrect = Utils.compareAnswers(userAnswer, item.correct, acceptList);

    // Disable inputs & highlight buttons
    const input = document.getElementById("vp-text-input");
    const checkBtn = document.getElementById("vp-check-typed-btn");
    if (input) input.disabled = true;
    if (checkBtn) checkBtn.disabled = true;

    const optionBtns = document.querySelectorAll(".vp-opt-btn");
    optionBtns.forEach((btn, idx) => {
      btn.style.pointerEvents = "none";
      const optVal = this.shuffledOptions[idx];
      if (optVal === item.correct) {
        btn.classList.remove("btn-outline");
        btn.classList.add("btn-success");
      } else if (idx === clickedIdx && !isCorrect) {
        btn.classList.remove("btn-outline");
        btn.classList.add("btn-danger");
      }
    });

    // Update German sentence blank with the correct answer highlighted
    const sentenceBox = document.getElementById("vp-sentence-box");
    if (sentenceBox) {
      sentenceBox.innerHTML = this.formatSentenceWithBlank(item.sentence, item.correct, isCorrect);
    }

    // Play full correct German sentence
    if (window.Speech) {
      Speech.speak(item.fullSentence);
    }

    const safeFull = item.fullSentence.replace(/'/g, "\\'");
    const feedbackBox = document.getElementById("vp-feedback-box");

    if (isCorrect) {
      this.score += 20 + (this.streak * 4);
      this.streak++;
      this.bestStreak = Math.max(this.bestStreak, this.streak);
      Storage.addXP(15);
      Storage.updateStreak();

      if (feedbackBox) {
        feedbackBox.className = "card fade-in";
        feedbackBox.style.display = "block";
        feedbackBox.style.background = "rgba(16, 185, 129, 0.08)";
        feedbackBox.style.border = "1.5px solid var(--success)";
        feedbackBox.innerHTML = `
          <div style="display: flex; gap: 12px; align-items: flex-start;">
            <div style="font-size: 1.8rem;">✅</div>
            <div style="flex: 1;">
              <h4 style="color: var(--success); margin-bottom: 6px;">${Utils.encourageCorrect()}</h4>
              <div class="de-text" dir="ltr" style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary); margin-bottom: 8px; text-align: left;">
                ${Utils.escapeHtml(item.fullSentence)}
              </div>
              <div style="font-size: 0.94rem; color: var(--text-primary); margin-bottom: 8px; line-height: 1.6;">
                💡 <strong>الشرح النحوي:</strong> ${Utils.escapeHtml(item.explanation)}
              </div>
              <div style="font-size: 0.88rem; color: var(--text-secondary); background: var(--bg-primary); padding: 8px 12px; border-radius: var(--radius-sm); margin-bottom: 14px; font-weight: 700;">
                📌 القاعدة: <span dir="ltr">${Utils.escapeHtml(item.rule)}</span>
              </div>
              <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button type="button" class="btn btn-secondary btn-sm" onclick="Speech.speak('${safeFull}')">
                  🔊 استمع للجملة الكاملة
                </button>
                <button type="button" class="btn btn-outline btn-sm" onclick="Speech.speakSlow('${safeFull}')">
                  🐢 نطق بطيء
                </button>
                <button type="button" class="btn btn-success btn-sm" onclick="VerbenPraepGame.nextQuestion()">
                  السؤال التالي ➔
                </button>
              </div>
            </div>
          </div>
        `;
      }
    } else {
      this.streak = 0;
      Storage.addMistake({
        lessonId: item.mode === "verben" ? "verben-praepositionen" : "konnektoren-nebensatz",
        question: `${item.sentence} (${item.ar})`,
        myAnswer: userAnswer,
        correctAnswer: `${item.correct} ➔ ${item.fullSentence}`,
        explanation: `${item.explanation} [${item.rule}]`
      });

      if (feedbackBox) {
        feedbackBox.className = "card fade-in";
        feedbackBox.style.display = "block";
        feedbackBox.style.background = "rgba(239, 68, 68, 0.08)";
        feedbackBox.style.border = "1.5px solid var(--danger)";
        feedbackBox.innerHTML = `
          <div style="display: flex; gap: 12px; align-items: flex-start;">
            <div style="font-size: 1.8rem;">❌</div>
            <div style="flex: 1;">
              <h4 style="color: var(--danger); margin-bottom: 6px;">إجابة غير دقيقة — تعلم القاعدة الآن!</h4>
              <div style="font-size: 0.95rem; margin-bottom: 4px;">
                <strong>إجابتك:</strong> <span class="de-text" dir="ltr" style="color: var(--danger); font-weight: 700;">${Utils.escapeHtml(userAnswer)}</span>
              </div>
              <div style="font-size: 0.95rem; margin-bottom: 8px;">
                <strong>الإجابة الصحيحة:</strong> <span class="de-text" dir="ltr" style="color: var(--success); font-weight: 800;">${Utils.escapeHtml(item.correct)}</span>
              </div>
              <div class="de-text" dir="ltr" style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; text-align: left;">
                ✔️ ${Utils.escapeHtml(item.fullSentence)}
              </div>
              <div style="font-size: 0.94rem; color: var(--text-primary); margin-bottom: 8px; line-height: 1.6;">
                💡 <strong>الشرح النحوي:</strong> ${Utils.escapeHtml(item.explanation)}
              </div>
              <div style="font-size: 0.88rem; color: var(--text-secondary); background: var(--bg-primary); padding: 8px 12px; border-radius: var(--radius-sm); margin-bottom: 14px; font-weight: 700;">
                📌 القاعدة: <span dir="ltr">${Utils.escapeHtml(item.rule)}</span>
              </div>
              <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button type="button" class="btn btn-secondary btn-sm" onclick="Speech.speak('${safeFull}')">
                  🔊 استمع للجملة الصحيحة
                </button>
                <button type="button" class="btn btn-outline btn-sm" onclick="Speech.speakSlow('${safeFull}')">
                  🐢 نطق بطيء
                </button>
                <button type="button" class="btn btn-primary btn-sm" onclick="VerbenPraepGame.nextQuestion()">
                  متابعة ➔
                </button>
              </div>
            </div>
          </div>
        `;
      }
    }

    const scoreEl = document.getElementById("vp-score");
    const streakEl = document.getElementById("vp-streak");
    if (scoreEl) scoreEl.textContent = this.score;
    if (streakEl) streakEl.textContent = `🔥 ${this.streak}`;

    if (window.App && window.App.updateHeaderStats) {
      window.App.updateHeaderStats();
    }
  },

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showCurrentQuestion();
    }
  },

  nextQuestion() {
    this.currentIndex++;
    if (this.currentIndex >= this.pool.length) {
      this.endGame();
    } else {
      this.showCurrentQuestion();
    }
  },

  endGame() {
    Storage.saveGameScore("prepositionGame", this.score);
    Storage.updateStreak();
    if (window.App && window.App.updateHeaderStats) {
      window.App.updateHeaderStats();
    }

    const container = document.getElementById("app-content");
    if (!container) return;

    container.innerHTML = `
      <div class="article-game-container fade-in" style="max-width: 720px; margin: 0 auto;">
        <div class="card text-center" style="padding: 44px 24px;">
          <div style="font-size: 3.5rem; margin-bottom: 12px;">🏆</div>
          <h2 style="font-size: 1.7rem; color: var(--text-primary); margin-bottom: 8px;">
            أتممت التحدي بنجاح!
          </h2>
          <p class="text-secondary" style="margin-bottom: 24px; font-size: 1.05rem;">
            ممتاز! إتقان الأفعال مع حروف الجر وأدوات الربط يرفع مستواك في المحادثة والكتابة إلى مستوى B1 بثقة.
          </p>

          <div style="display: flex; justify-content: center; gap: 28px; margin-bottom: 28px; flex-wrap: wrap;">
            <div class="card" style="padding: 16px 24px; background: var(--bg-primary); min-width: 140px;">
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent);">${this.score}</div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">مجموع النقاط</div>
            </div>
            <div class="card" style="padding: 16px 24px; background: var(--bg-primary); min-width: 140px;">
              <div style="font-size: 2rem; font-weight: 800; color: var(--warning);">🔥 ${this.bestStreak}</div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">أطول سلسلة صحيحة</div>
            </div>
          </div>

          <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="VerbenPraepGame.start()">العب جولة جديدة ↺</button>
            <button class="btn btn-secondary" onclick="VerbenPraepGame.render(document.getElementById('app-content'))">تغيير نمط التدريب ⚙️</button>
            <a href="#/games" class="btn btn-outline">العودة للألعاب ➔</a>
          </div>
        </div>
      </div>
    `;
  }
};

window.VerbenPraepGame = VerbenPraepGame;
