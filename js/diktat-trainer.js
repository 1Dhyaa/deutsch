// js/diktat-trainer.js — 🎧 مختبر الاستماع والإملاء الصوتي (Diktat & Hör-Labor)
// Interactive German Listening, Dictation, Gap-Fill Ear Training & Goethe Hörverstehen Studio (A1 / A2 / B1 / Ausbildung)

const DiktatTrainer = {
  currentMode: 'diktat', // 'diktat' | 'luecken' | 'hoerverstehen'
  currentLevel: 'all',   // 'all' | 'A1' | 'A2' | 'B1' | 'Ausbildung'
  currentIndex: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  answeredMap: {},       // key: `${mode}-${itemId}` -> { correct: boolean, userAnswer: string }
  showArabicHint: false,
  showFirstLettersHint: false,
  showFullSentence: false,
  lastResult: null,      // Stores current item evaluation state

  // ============================================================================
  // MODE 1: ✍️ الإملاء الكامل (Vollständiges Diktat) — 24 Verified Items
  // ============================================================================
  diktatItems: [
    // --- A1 ---
    {
      id: 'diktat-a1-1',
      level: 'A1',
      topic: 'التعارف والحياة اليومية (Alltag)',
      de: 'Ich komme aus Syrien und wohne jetzt in Berlin.',
      accept: ['Ich komme aus Syrien und wohne jetzt in Berlin'],
      ar: 'أنا قادم من سوريا وأسكن الآن في برلين.',
      note: 'انتبه لكتابة أسماء الدول والمدن بحرف كبير (Syrien / Berlin)، وتصريف الفعلين مع ich ينتهي بـ -e (komme / wohne).'
    },
    {
      id: 'diktat-a1-2',
      level: 'A1',
      topic: 'الأوقات والمواعيد (Uhrzeit & Termine)',
      de: 'Der Zug fährt heute um acht Uhr vom Hauptbahnhof ab.',
      accept: [
        'Der Zug fährt heute um 8 Uhr vom Hauptbahnhof ab.',
        'Der Zug fährt heute um 8 Uhr vom Hauptbahnhof ab'
      ],
      ar: 'القطار ينطلق اليوم في تمام الساعة الثامنة من محطة القطار الرئيسية.',
      note: 'الفعل abfahren منفصل: الجزء المصرف (fährt مع Umlaut) في الموقع 2، والبادئة (ab) في آخر الجملة تماماً.'
    },
    {
      id: 'diktat-a1-3',
      level: 'A1',
      topic: 'التسوق والطعام (Einkaufen)',
      de: 'Am Samstag kaufe ich frisches Obst und Gemüse auf dem Markt.',
      accept: ['Am Samstag kaufe ich frisches Obst und Gemüse auf dem Markt'],
      ar: 'في يوم السبت أشتري فواكه وخضروات طازجة من السوق.',
      note: 'بدأت الجملة بظرف الزمان (Am Samstag) في الموقع 1، لذلك جاء الفعل (kaufe) في الموقع 2 قبل الفاعل (ich).'
    },
    {
      id: 'diktat-a1-4',
      level: 'A1',
      topic: 'الأفعال الناقصة (Modalverben)',
      de: 'Kannst du mir bitte bei den Hausaufgaben helfen?',
      accept: ['Kannst du mir bitte bei den Hausaufgaben helfen'],
      ar: 'هل يمكنك من فضلك مساعدتي في الواجبات المنزلية؟',
      note: 'الفعل helfen يأخذ دائماً حالة الجر (Dativ): لذلك قلنا (mir) وليس mich، ومع الفعل الناقص (Kannst) يذهب المصدر (helfen) إلى نهاية السؤال.'
    },
    {
      id: 'diktat-a1-5',
      level: 'A1',
      topic: 'الماضي التام (Perfekt mit haben)',
      de: 'Gestern habe ich meine Großeltern besucht und mit ihnen gegessen.',
      accept: ['Gestern habe ich meine Großeltern besucht und mit ihnen gegessen'],
      ar: 'بالأمس زرتُ جدي وجدتي وتناولتُ الطعام معهما.',
      note: 'الأفعال التي تبدأ بـ be- مثل (besuchen) لا تأخذ ge- في التصريف الثالث: besucht. أما essen فتصبح gegessen.'
    },
    {
      id: 'diktat-a1-6',
      level: 'A1',
      topic: 'الماضي التام بالحركة (Perfekt mit sein)',
      de: 'Letzte Woche sind wir mit dem Bus nach München gefahren.',
      accept: ['Letzte Woche sind wir mit dem Bus nach München gefahren'],
      ar: 'الأسبوع الماضي سافرنا بالحافلة إلى ميونخ.',
      note: 'الفعل fahren يدل على الانتقال من مكان لآخر، لذلك يأخذ الفعل المساعد (sind) وليس haben في زمن Perfekt.'
    },

    // --- A2 ---
    {
      id: 'diktat-a2-1',
      level: 'A2',
      topic: 'الجمل السببية (Nebensatz mit weil)',
      de: 'Ich kann heute nicht kommen, weil ich starke Kopfschmerzen habe.',
      accept: ['Ich kann heute nicht kommen weil ich starke Kopfschmerzen habe'],
      ar: 'لا أستطيع المجيء اليوم لأنني أعاني من صداع شديد.',
      note: 'الرابط (weil) يرسل الفعل المصرف (habe) إلى نهاية الجملة الفرعية تماماً، ولا تنسَ الفاصلة قبل weil.'
    },
    {
      id: 'diktat-a2-2',
      level: 'A2',
      topic: 'الأفعال الانعكاسية وحروف الجر (Reflexive Verben)',
      de: 'Ich freue mich schon sehr auf den nächsten Urlaub am Meer.',
      accept: ['Ich freue mich schon sehr auf den nächsten Urlaub am Meer'],
      ar: 'أنا متشوق جداً بالفعل للعطلة القادمة على البحر.',
      note: 'الفعل (sich freuen auf + Akkusativ) يعني يتشوق لشيء في المستقبل؛ لذلك تحولت der Urlaub إلى den nächsten Urlaub.'
    },
    {
      id: 'diktat-a2-3',
      level: 'A2',
      topic: 'الأفعال مع حروف الجر (Verben mit Präpositionen)',
      de: 'Wir warten seit einer halben Stunde auf den Bus.',
      accept: ['Wir warten seit einer halben Stunde auf den Bus'],
      ar: 'نحن ننتظر الحافلة منذ نصف ساعة.',
      note: 'حرف الجر الزمني (seit) يأخذ Dativ: (seit einer halben Stunde)، بينما (warten auf) يأخذ Akkusativ: (auf den Bus).'
    },
    {
      id: 'diktat-a2-4',
      level: 'A2',
      topic: 'الجمل الشرطية (Nebensatz mit wenn)',
      de: 'Wenn das Wetter am Wochenende schön ist, machen wir einen Ausflug.',
      accept: ['Wenn das Wetter am Wochenende schön ist machen wir einen Ausflug'],
      ar: 'إذا كان الطقس جميلاً في عطلة نهاية الأسبوع، فسنقوم برحلة قصيرة.',
      note: 'عندما تبدأ الجملة بـ (Wenn...) ينتهي الشطر الأول بالفعل (ist)، ثم يبدأ الشطر الرئيسي بعد الفاصلة بالفعل مباشرة (machen wir).'
    },
    {
      id: 'diktat-a2-5',
      level: 'A2',
      topic: 'الروابط الظرفية (Konnektor: deshalb)',
      de: 'Mein Fahrrad ist kaputt, deshalb muss ich heute zu Fuß gehen.',
      accept: ['Mein Fahrrad ist kaputt deshalb muss ich heute zu Fuß gehen'],
      ar: 'دراجتي معطلة، ولذلك يجب عليّ اليوم الذهاب سيراً على الأقدام.',
      note: 'الرابط (deshalb) يحتل الموقع 1 بعد الفاصلة، فيأتي الفعل المصرف (muss) فوراً بعده قبل الفاعل (ich). وتُكتب عبارة (zu Fuß gehen) بحرف كبير و ß.'
    },
    {
      id: 'diktat-a2-6',
      level: 'A2',
      topic: 'الماضي البسيط (Präteritum der Modalverben)',
      de: 'Als ich ein Kind war, wollte ich immer Pilot werden.',
      accept: ['Als ich ein Kind war wollte ich immer Pilot werden'],
      ar: 'عندما كنتُ طفلاً، كنتُ أريد دائماً أن أصبح طياراً.',
      note: 'نستخدم (Als) للحدث الماضي لمرة واحدة (فترة الطفولة)، والماضي البسيط من wollen هو (wollte).'
    },
    {
      id: 'diktat-a2-7',
      level: 'A2',
      topic: 'جمل أن المصدرية (Nebensatz mit dass)',
      de: 'Der Arzt hat gesagt, dass ich drei Tage im Bett bleiben soll.',
      accept: [
        'Der Arzt hat gesagt dass ich drei Tage im Bett bleiben soll',
        'Der Arzt hat gesagt, dass ich 3 Tage im Bett bleiben soll.'
      ],
      ar: 'قال الطبيب إنه ينبغي عليّ البقاء في السرير لمدة ثلاثة أيام.',
      note: 'في جملة (dass) مع فعل ناقص: يأتي المصدر (bleiben) أولاً ثم الفعل الناقص المصرف (soll) في آخر الجملة.'
    },

    // --- B1 ---
    {
      id: 'diktat-b1-1',
      level: 'B1',
      topic: 'الروابط التناقضية (Nebensatz mit obwohl)',
      de: 'Obwohl er gestern sehr müde war, hat er bis spät in die Nacht gearbeitet.',
      accept: ['Obwohl er gestern sehr müde war hat er bis spät in die Nacht gearbeitet'],
      ar: 'على الرغم من أنه كان متعباً جداً بالأمس، إلا أنه عمل حتى وقت متأخر من الليل.',
      note: 'بعد جملة (Obwohl... war,) يبدأ جواب الشرط بالفعل المساعد مباشرة (hat er...) لأن الجملة الفرعية احتلت الموقع الأول كله.'
    },
    {
      id: 'diktat-b1-2',
      level: 'B1',
      topic: 'المصدر مع zu (Infinitiv mit zu)',
      de: 'Es ist sehr wichtig, jeden Tag mindestens zwanzig Minuten Deutsch zu üben.',
      accept: [
        'Es ist sehr wichtig jeden Tag mindestens zwanzig Minuten Deutsch zu üben',
        'Es ist sehr wichtig, jeden Tag mindestens 20 Minuten Deutsch zu üben.'
      ],
      ar: 'من المهم جداً التدرب على اللغة الألمانية كل يوم لمدة عشرين دقيقة على الأقل.',
      note: 'بعد التراكيب مثل (Es ist wichtig, ...) نضع (zu + Infinitiv) في نهاية الجملة: (Deutsch zu üben).'
    },
    {
      id: 'diktat-b1-3',
      level: 'B1',
      topic: 'جمل الغاية والهدف (um ... zu)',
      de: 'Ich besuche einen Intensivkurs, um meine Aussprache zu verbessern.',
      accept: ['Ich besuche einen Intensivkurs um meine Aussprache zu verbessern'],
      ar: 'أحضر دورة مكثفة لكي أحسّن نطقي.',
      note: 'التركيب (um ... zu + Infinitiv) يعبر عن الهدف ("لكي") عندما يكون الفاعل واحداً في الجملتين.'
    },
    {
      id: 'diktat-b1-4',
      level: 'B1',
      topic: 'المبني للمجهول (Passiv Präsens)',
      de: 'In dieser Werkstatt werden alle Autos schnell und professionell repariert.',
      accept: ['In dieser Werkstatt werden alle Autos schnell und professionell repariert'],
      ar: 'في هذه الورشة يتم إصلاح جميع السيارات بسرعة واحترافية.',
      note: 'المبني للمجهول في المضارع يتكون من (werden + Partizip II): هنا (werden ... repariert).'
    },
    {
      id: 'diktat-b1-5',
      level: 'B1',
      topic: 'الأسئلة غير المباشرة (Indirekte Fragen)',
      de: 'Können Sie mir bitte sagen, wann der nächste Zug nach Frankfurt fährt?',
      accept: ['Können Sie mir bitte sagen wann der nächste Zug nach Frankfurt fährt'],
      ar: 'هل يمكن لحضرتك أن تخبرني من فضلك متى ينطلق القطار القادم إلى فرانكفورت؟',
      note: 'السؤال غير المباشر المبدوء بـ (wann) يعامل معاملة الجملة الفرعية (Nebensatz)، فيذهب الفعل (fährt) إلى النهاية.'
    },
    {
      id: 'diktat-b1-6',
      level: 'B1',
      topic: 'الجمل الموصولة (Relativsätze)',
      de: 'Der Kollege, mit dem ich zusammenarbeite, ist immer sehr hilfsbereit.',
      accept: ['Der Kollege mit dem ich zusammenarbeite ist immer sehr hilfsbereit'],
      ar: 'الزميل الذي أعمل معه متعاون جداً دائماً.',
      note: 'ضمير الوصل بعد حرف الجر (mit) يأخذ حالة Dativ للمذكر المفرَد: (mit dem)، والفعل المنفصل يتصل في نهاية جملة الوصل (zusammenarbeite).'
    },

    // --- Ausbildung & Beruf ---
    {
      id: 'diktat-aus-1',
      level: 'Ausbildung',
      topic: 'التقديم والمقابلة المهنية (Bewerbungsgespräch)',
      de: 'Ich interessiere mich sehr für eine Ausbildung als Fachinformatiker.',
      accept: ['Ich interessiere mich sehr für eine Ausbildung als Fachinformatiker'],
      ar: 'أنا مهتم جداً بالتدريب المهني كأخصائي تقنية معلومات.',
      note: 'احفظ هذا التركيب الذهبي للمقابلات: (sich interessieren für + Akkusativ) + (eine Ausbildung als ...).'
    },
    {
      id: 'diktat-aus-2',
      level: 'Ausbildung',
      topic: 'الطلب المهذب في العمل (Höfliche Bitte - Konjunktiv II)',
      de: 'Könnten Sie mir bitte den Dienstplan für nächste Woche per E-Mail schicken?',
      accept: [
        'Könnten Sie mir bitte den Dienstplan für nächste Woche per E-Mail schicken',
        'Könnten Sie mir bitte den Dienstplan für nächste Woche per Email schicken?'
      ],
      ar: 'هلّا تفضلتم بإرسال جدول المناوبات للأسبوع القادم لي عبر البريد الإلكتروني؟',
      note: 'استخدام (Könnten Sie ... + Infinitiv) في صيغة Konjunktiv II هو الأسلوب الرسمي الأرقى للطلب في بيئة العمل والتدريب.'
    },
    {
      id: 'diktat-aus-3',
      level: 'Ausbildung',
      topic: 'الاعتذار عن الغياب أو المرض (Krankmeldung)',
      de: 'Leider kann ich heute wegen einer Erkältung nicht zur Arbeit kommen.',
      accept: ['Leider kann ich heute wegen einer Erkältung nicht zur Arbeit kommen'],
      ar: 'للأسف لا أستطيع الحضور إلى العمل اليوم بسبب نزلة برد.',
      note: 'حرف الجر (wegen) بمعنى "بسبب" يتبعه Genitiv/Dativ المؤنث: (wegen einer Erkältung).'
    },
    {
      id: 'diktat-aus-4',
      level: 'Ausbildung',
      topic: 'التواصل مع العملاء والمرضى (Kunden- & Patientenkontakt)',
      de: 'Haben Sie schon einen Termin vereinbart oder kommen Sie als Notfall?',
      accept: ['Haben Sie schon einen Termin vereinbart oder kommen Sie als Notfall'],
      ar: 'هل حجزتم موعداً بالفعل أم جئتم كحالة طارئة؟',
      note: 'التعبير الرسمي لحجز موعد هو (einen Termin vereinbaren)، وتصريفه الثالث هو (vereinbart) بدون ge- لأن بدايته ver-.'
    },
    {
      id: 'diktat-aus-5',
      level: 'Ausbildung',
      topic: 'تقرير التدريب المهني (Berichtsheft & Teamarbeit)',
      de: 'Während der Ausbildung lernt man sowohl in der Berufsschule als auch im Betrieb.',
      accept: ['Während der Ausbildung lernt man sowohl in der Berufsschule als auch im Betrieb'],
      ar: 'أثناء التدريب المهني يتعلم المرء في المدرسة المهنية وكذلك في الشركة.',
      note: 'حرف الجر (Während) يأخذ Genitiv (Während der Ausbildung)، والرابط المزدوج (sowohl ... als auch) يعني "كلاً من ... وكذلك ...".'
    }
  ],

  // ============================================================================
  // MODE 2: 🧩 إملاء الكلمات المفقودة (Lücken-Hörtraining) — 18 Verified Items
  // ============================================================================
  lueckenItems: [
    {
      id: 'luecke-1',
      level: 'A1',
      topic: 'حروف الجر الزمنية (um / am)',
      de: 'Der Deutschkurs beginnt morgen um neun Uhr.',
      displaySentence: 'Der Deutschkurs beginnt morgen ___ ___ Uhr.',
      missingAnswer: 'um neun',
      accept: ['um 9', 'um neun'],
      chips: ['um neun', 'am neun', 'in neun', 'um neunzehn'],
      ar: 'دورة اللغة الألمانية تبدأ غداً في تمام الساعة التاسعة.',
      note: 'مع الساعات نستخدم دائماً حرف الجر (um): um neun Uhr. انتبه للتمييز السمعي بين neun (9) و neunzehn (19).'
    },
    {
      id: 'luecke-2',
      level: 'A1',
      topic: 'التمييز السمعي للأرقام والأيام (am Freitag)',
      de: 'Wir haben am Freitag um vierzehn Uhr einen Termin.',
      displaySentence: 'Wir haben ___ ___ um vierzehn Uhr einen Termin.',
      missingAnswer: 'am Freitag',
      accept: ['am Freitag'],
      chips: ['am Freitag', 'im Freitag', 'um Freitag', 'am Montag'],
      ar: 'لدينا موعد يوم الجمعة الساعة الرابعة عشرة (الثانية ظهراً).',
      note: 'مع أيام الأسبوع وأوقات اليوم نستخدم دائماً (am = an dem): am Freitag.'
    },
    {
      id: 'luecke-3',
      level: 'A1',
      topic: 'الأفعال المنفصلة في السماع (kaufe ... ein)',
      de: 'Ich kaufe jeden Samstag im Supermarkt ein.',
      displaySentence: 'Ich ___ jeden Samstag im Supermarkt ___.',
      missingAnswer: 'kaufe ein',
      accept: ['kaufe ... ein', 'kaufe ein'],
      chips: ['kaufe ein', 'verkaufe ein', 'kaufe auf', 'kaufen ein'],
      ar: 'أنا أتسوق كل يوم سبت في السوبرماركت.',
      note: 'الفعل (einkaufen) منفصل: نسمع (kaufe) في بداية الجملة، ولا يكتمل المعنى إلا بسماع البادئة (ein) في آخر الجملة!'
    },
    {
      id: 'luecke-4',
      level: 'A1',
      topic: 'الماضي التام (sind ... gefahren)',
      de: 'Am Wochenende sind wir nach Hamburg gefahren.',
      displaySentence: 'Am Wochenende ___ wir nach Hamburg ___.',
      missingAnswer: 'sind gefahren',
      accept: ['sind ... gefahren', 'sind gefahren'],
      chips: ['sind gefahren', 'haben gefahren', 'sind gegangen', 'waren gefahren'],
      ar: 'في عطلة نهاية الأسبوع سافرنا إلى هامبورغ.',
      note: 'الفعل (fahren) من أفعال الحركة الانتقالية فيأخذ الفعل المساعد (sind) والتصريف الثالث (gefahren).'
    },
    {
      id: 'luecke-5',
      level: 'A2',
      topic: 'حروف الجر المكانية (in die vs. in der)',
      de: 'Morgen gehen wir zusammen in die Stadtbibliothek.',
      displaySentence: 'Morgen gehen wir zusammen ___ ___ Stadtbibliothek.',
      missingAnswer: 'in die',
      accept: ['in die'],
      chips: ['in die', 'in der', 'auf die', 'zu der'],
      ar: 'غداً سنذهب معاً إلى مكتبة المدينة.',
      note: 'الفعل (gehen) يدل على حركة باتجاه مكان (Wohin? ➔ Akkusativ)، ولأن die Stadtbibliothek مؤنثة تبقى (in die).'
    },
    {
      id: 'luecke-6',
      level: 'A2',
      topic: 'حرف الجر الزمني (seit einem Jahr)',
      de: 'Mein Bruder lebt schon seit einem Jahr in Köln.',
      displaySentence: 'Mein Bruder lebt schon ___ ___ Jahr in Köln.',
      missingAnswer: 'seit einem',
      accept: ['seit einem'],
      chips: ['seit einem', 'vor einem', 'für ein', 'seit einer'],
      ar: 'أخي يعيش في كولن منذ عام بالفعل.',
      note: 'حرف الجر (seit) يدل على حدث بدأ في الماضي وما زال مستمراً، ويأخذ دائماً Dativ: das Jahr ➔ seit einem Jahr.'
    },
    {
      id: 'luecke-7',
      level: 'A2',
      topic: 'الأفعال مع حروف الجر (warten auf den)',
      de: 'Ich warte schon lange auf den Anruf vom Chef.',
      displaySentence: 'Ich warte schon lange ___ ___ Anruf vom Chef.',
      missingAnswer: 'auf den',
      accept: ['auf den'],
      chips: ['auf den', 'auf dem', 'an den', 'für den'],
      ar: 'أنا أنتظر منذ وقت طويل اتصال المدير.',
      note: 'الفعل (warten auf + Akkusativ) يأخذ دائماً حالة النصب: der Anruf ➔ auf den Anruf.'
    },
    {
      id: 'luecke-8',
      level: 'A2',
      topic: 'الأفعال الانعكاسية مع حروف الجر (freue mich über)',
      de: 'Ich freue mich sehr über dein schönes Geschenk.',
      displaySentence: 'Ich freue ___ sehr ___ dein schönes Geschenk.',
      missingAnswer: 'mich über',
      accept: ['mich ... über', 'mich über'],
      chips: ['mich über', 'mich auf', 'mir über', 'mich für'],
      ar: 'أنا سعيد جداً بهديتك الجميلة (التي استلمتها).',
      note: 'الفرق الدقيق: (sich freuen über) للفرح بشيء حاضر أو حدث بالفعل، بينما (sich freuen auf) للتشوق لشيء في المستقبل.'
    },
    {
      id: 'luecke-9',
      level: 'A2',
      topic: 'نهايات الصفات (einen neuen Laptop)',
      de: 'Für mein Studium brauche ich einen neuen Laptop.',
      displaySentence: 'Für mein Studium brauche ich ___ ___ Laptop.',
      missingAnswer: 'einen neuen',
      accept: ['einen neuen'],
      chips: ['einen neuen', 'ein neuer', 'einem neuen', 'einen neue'],
      ar: 'لدراستي أحتاج إلى حاسوب محمول جديد.',
      note: 'الفعل (brauchen) يأخذ مفعولاً به منصوباً (Akkusativ): der Laptop يتحول إلى (einen neuen Laptop) بنهاية -en.'
    },
    {
      id: 'luecke-10',
      level: 'A2',
      topic: 'الجمل الفرعية (weil ... krank ist)',
      de: 'Unsere Lehrerin kommt heute nicht, weil sie krank ist.',
      displaySentence: 'Unsere Lehrerin kommt heute nicht, ___ sie krank ___.',
      missingAnswer: 'weil ist',
      accept: ['weil ... ist', 'weil ist'],
      chips: ['weil ist', 'denn ist', 'weil war', 'dass ist'],
      ar: 'معلمتنا لن تأتي اليوم لأنها مريضة.',
      note: 'الرابط السببي (weil) يدفع الفعل المصرف (ist) إلى نهاية الجملة الفرعية.'
    },
    {
      id: 'luecke-11',
      level: 'B1',
      topic: 'الماضي مع عندما (Als ich ... war)',
      de: 'Als ich gestern nach Hause kam, regnete es stark.',
      displaySentence: '___ ich gestern nach Hause ___, regnete es stark.',
      missingAnswer: 'Als kam',
      accept: ['Als ... kam', 'Als kam'],
      chips: ['Als kam', 'Wenn kam', 'Als komme', 'Wann kam'],
      ar: 'عندما عدتُ إلى المنزل بالأمس، كانت تمطر بغزارة.',
      note: 'لحدث وقع مرة واحدة في الماضي نستخدم (Als) وليس Wenn، والماضي البسيط من kommen هو (kam).'
    },
    {
      id: 'luecke-12',
      level: 'B1',
      topic: 'التمني والشرط غير الواقعي (Wenn ich ... hätte)',
      de: 'Wenn ich mehr Zeit hätte, würde ich noch eine Sprache lernen.',
      displaySentence: 'Wenn ich mehr Zeit ___, ___ ich noch eine Sprache lernen.',
      missingAnswer: 'hätte würde',
      accept: ['hätte ... würde', 'hätte würde'],
      chips: ['hätte würde', 'habe werde', 'hatte wurde', 'hätte werde'],
      ar: 'لو كان لديّ وقت أكثر، لتعلمتُ لغة أخرى.',
      note: 'في الجمل الشرطية التخيلية (Konjunktiv II) نستخدم (hätte) مع (würde + Infinitiv). انتبه لسماع الـ Umlaut في (hätte / würde)!'
    },
    {
      id: 'luecke-13',
      level: 'B1',
      topic: 'المبني للمجهول في الماضي (wurde ... gebaut)',
      de: 'Dieses Krankenhaus wurde vor zehn Jahren gebaut.',
      displaySentence: 'Dieses Krankenhaus ___ vor zehn Jahren ___.',
      missingAnswer: 'wurde gebaut',
      accept: ['wurde ... gebaut', 'wurde gebaut'],
      chips: ['wurde gebaut', 'wird gebaut', 'ist gebaut', 'hat gebaut'],
      ar: 'بُني هذا المستشفى قبل عشر سنوات.',
      note: 'المبني للمجهول في الماضي البسيط (Passiv Präteritum) يتكون من (wurde + Partizip II): wurde gebaut.'
    },
    {
      id: 'luecke-14',
      level: 'B1',
      topic: 'أفعال مع حروف الجر (denken an + Akk)',
      de: 'Hast du daran gedacht, die Fenster zu schließen?',
      displaySentence: 'Hast du ___ ___, die Fenster zu schließen?',
      missingAnswer: 'daran gedacht',
      accept: ['daran gedacht'],
      chips: ['daran gedacht', 'darauf gedacht', 'davon gedacht', 'daran denken'],
      ar: 'هل تذكرتَ (فكرتَ في) أن تغلق النوافذ؟',
      note: 'الفعل (denken an) يأخذ الظرف الإشاري (daran) للتمهيد لجملة المصدر (die Fenster zu schließen)، والتصريف الثالث هو (gedacht).'
    },
    {
      id: 'luecke-15',
      level: 'Ausbildung',
      topic: 'العمل والتدريب المهني (bewirbt sich um)',
      de: 'Sara bewirbt sich um einen Ausbildungsplatz im Krankenhaus.',
      displaySentence: 'Sara ___ sich ___ einen Ausbildungsplatz im Krankenhaus.',
      missingAnswer: 'bewirbt um',
      accept: ['bewirbt ... um', 'bewirbt um'],
      chips: ['bewirbt um', 'bewirbt für', 'bewerbt um', 'bewirbt auf'],
      ar: 'تتقدم سارة بطلب للحصول على مقعد تدريب مهني في المستشفى.',
      note: 'الفعل (sich bewerben um + Akkusativ) يتغير حرف علته مع er/sie/es من e إلى i: (sie bewirbt sich um).'
    },
    {
      id: 'luecke-16',
      level: 'Ausbildung',
      topic: 'المواعيد المهنية (Termin verschieben)',
      de: 'Können wir unser Gespräch bitte auf Donnerstag verschieben?',
      displaySentence: 'Können wir unser Gespräch bitte ___ Donnerstag ___?',
      missingAnswer: 'auf verschieben',
      accept: ['auf ... verschieben', 'auf verschieben'],
      chips: ['auf verschieben', 'am verschieben', 'zu verschieben', 'auf absagen'],
      ar: 'هل يمكننا تأجيل محادثتنا إلى يوم الخميس من فضلك؟',
      note: 'تأجيل موعد إلى يوم آخر يُقال دائماً: (einen Termin auf + يوم + verschieben).'
    },
    {
      id: 'luecke-17',
      level: 'Ausbildung',
      topic: 'الرد الهاتفي في العمل (zuständig für)',
      de: 'Frau Müller ist in unserer Abteilung für die Kundenbetreuung zuständig.',
      displaySentence: 'Frau Müller ist in unserer Abteilung ___ die Kundenbetreuung ___.',
      missingAnswer: 'für zuständig',
      accept: ['für ... zuständig', 'für zuständig'],
      chips: ['für zuständig', 'über zuständig', 'mit zuständig', 'für zufrieden'],
      ar: 'السيدة مولر مسؤولة في قسمنا عن رعاية العملاء.',
      note: 'الصفة المهنية الهامة (zuständig für + Akkusativ) تعني "مسؤول عن / مختص بـ".'
    },
    {
      id: 'luecke-18',
      level: 'Ausbildung',
      topic: 'السلامة المهنية (Schutzkleidung tragen)',
      de: 'In der Werkstatt müssen alle Mitarbeiter Sicherheitsschuhe tragen.',
      displaySentence: 'In der Werkstatt ___ alle Mitarbeiter Sicherheitsschuhe ___.',
      missingAnswer: 'müssen tragen',
      accept: ['müssen ... tragen', 'müssen tragen'],
      chips: ['müssen tragen', 'dürfen tragen', 'müssen ziehen', 'sollt tragen'],
      ar: 'في الورشة يجب على جميع الموظفين ارتداء أحذية السلامة.',
      note: 'ارتداء الملابس أو معدات الوقاية في الألمانية يُعبر عنه بالفعل (tragen) مع الفعل الناقص للإلزام (müssen).'
    }
  ],

  // ============================================================================
  // MODE 3: 🎧 فهم المسموع والمواقف اليومية (Hörverstehen) — 14 Verified Items
  // ============================================================================
  hoerverstehenItems: [
    {
      id: 'hoeren-1',
      level: 'A1',
      topic: 'إعلان محطة القطار (Bahnhof Durchsage)',
      contextAr: 'استمع إلى الإعلان الصوتي في محطة القطار وأجب عن السؤال:',
      audioText: 'Achtung am Gleis vier! Der Intercity-Express nach Frankfurt am Main über Hannover hat heute wegen einer Baustelle etwa zwanzig Minuten Verspätung. Bitte beachten Sie auch die Anzeigen an den Monitoren.',
      arTranslation: 'انتباه على الرصيف رقم 4! قطار الإنترسيتي السريع المتجه إلى فرانكفورت عبر هانوفر سيتأخر اليوم حوالي عشرين دقيقة بسبب أعمال صيانة. يرجى أيضاً الانتباه إلى اللوحات الإلكترونية.',
      questionDe: 'Wie viele Minuten Verspätung hat der Zug nach Frankfurt?',
      questionAr: 'كم دقيقة سيتأخر القطار المتجه إلى فرانكفورت؟',
      options: [
        'Etwa 20 Minuten (حوالي 20 دقيقة)',
        'Genau 4 Minuten (4 دقائق بالضبط)',
        'Über 40 Minuten (أكثر من 40 دقيقة)',
        'Der Zug fällt komplett aus (أُلغي القطار تماماً)'
      ],
      correctIndex: 0,
      vocab: [
        { de: 'das Gleis', ar: 'رصيف القطار' },
        { de: 'die Baustelle', ar: 'ورشة عمل / إصلاحات' },
        { de: 'die Verspätung', ar: 'التأخير' }
      ],
      explanation: 'ذكر الإعلان بوضوح: "hat heute wegen einer Baustelle etwa zwanzig Minuten Verspätung" (يتأخر اليوم حوالي 20 دقيقة بسبب إصلاحات). الرقم 4 كان رقم الرصيف (Gleis vier).'
    },
    {
      id: 'hoeren-2',
      level: 'A1',
      topic: 'رسالة صوتية من عيادة الطبيب (Arztpraxis)',
      contextAr: 'استمع إلى الرسالة الصوتية على هاتفك من عيادة الدكتور شنايدر:',
      audioText: 'Guten Tag, hier ist die Praxis von Doktor Schneider. Ihr Termin am Dienstag um zehn Uhr muss leider verschoben werden, weil der Arzt auf einer Fortbildung ist. Können Sie stattdessen am Donnerstag um fünfzehn Uhr dreißig kommen? Bitte rufen Sie uns kurz zurück.',
      arTranslation: 'طاب يومكم، هنا عيادة الدكتور شنايدر. للأسف يجب تأجيل موعدكم يوم الثلاثاء الساعة العاشرة لأن الطبيب في دورة تدريبية. هل يمكنكم المجيء بدلاً من ذلك يوم الخميس الساعة 15:30؟ يرجى معاودة الاتصال بنا سريعاً.',
      questionDe: 'Wann soll der Patient jetzt in die Praxis kommen?',
      questionAr: 'متى ينبغي على المريض الحضور إلى العيادة الآن (الموعد الجديد)؟',
      options: [
        'Am Donnerstag um 15:30 Uhr (الخميس الساعة 15:30)',
        'Am Dienstag um 10:00 Uhr (الثلاثاء الساعة 10:00)',
        'Am Donnerstag um 10:30 Uhr (الخميس الساعة 10:30)',
        'Am Freitag um 15:00 Uhr (الجمعة الساعة 15:00)'
      ],
      correctIndex: 0,
      vocab: [
        { de: 'verschieben (verschoben)', ar: 'يؤجل (مؤجل)' },
        { de: 'stattdessen', ar: 'بدلاً من ذلك' },
        { de: 'zurückrufen', ar: 'يعاود الاتصال' }
      ],
      explanation: 'الموعد القديم كان الثلاثاء الساعة 10:00، والموعد الجديد المقترح بعد كلمة (stattdessen = بدلاً من ذلك) هو: "am Donnerstag um fünfzehn Uhr dreißig" (الخميس 15:30).'
    },
    {
      id: 'hoeren-3',
      level: 'A1',
      topic: 'إعلان في السوبرماركت (Supermarkt Durchsage)',
      contextAr: 'استمع إلى الإعلان التجاري داخل متجر المواد الغذائية:',
      audioText: 'Liebe Kundinnen und Kunden, heute haben wir in unserer Bäckerei-Abteilung ein besonderes Angebot: Fünf frische Vollkornbrötchen kosten heute nur einen Euro fünfzig. Außerdem öffnen wir jetzt Kasse drei für Sie.',
      arTranslation: 'عميلاتنا وعملاءنا الأعزاء، لدينا اليوم في قسم المخبوزات عرض خاص: خمس قطع خبز طازجة من الحبوب الكاملة تكلف اليوم يورو واحداً وخمسين سنتاً فقط. بالإضافة إلى ذلك نفتح الآن صندوق الدفع رقم 3 من أجلكم.',
      questionDe: 'Was ist heute im Sonderangebot?',
      questionAr: 'ما هو الشيء المشمول بالعرض الخاص اليوم؟',
      options: [
        'Frische Vollkornbrötchen in der Bäckerei (خبز الحبوب الكاملة في قسم المخبوزات)',
        'Drei Kilogramm Äpfel für 1,50 Euro (3 كيلو تفاح بـ 1.50 يورو)',
        'Frische Milch und Käse (الحليب الطازج والجبن)',
        'Kaffee zum halben Preis (القهوة بنصف السعر)'
      ],
      correctIndex: 0,
      vocab: [
        { de: 'das Angebot', ar: 'العرض التجاري' },
        { de: 'das Vollkornbrötchen', ar: 'خبز صغير من الحبوب الكاملة' },
        { de: 'die Kasse', ar: 'صندوق الدفع (الكاشير)' }
      ],
      explanation: 'ذكر الإعلان أن العرض الخاص في قسم المخبوزات (Bäckerei-Abteilung) هو: "Fünf frische Vollkornbrötchen kosten heute nur einen Euro fünfzig".'
    },
    {
      id: 'hoeren-4',
      level: 'A2',
      topic: 'نشرة الطقس اليومية (Wetterbericht im Radio)',
      contextAr: 'استمع إلى نشرة الأحوال الجوية في الراديو:',
      audioText: 'Und hier ist das Wetter für morgen: Am Vormittag scheint im Süden noch die Sonne bei milden achtzehn Grad. Ab dem Nachmittag ziehen jedoch dunkle Wolken auf und es gibt starken Regen und Gewitter. Vergessen Sie Ihren Regenschirm nicht!',
      arTranslation: 'وإليكم حالة الطقس ليوم الغد: في قبل الظهر تشرق الشمس في الجنوب عند درجة حرارة معتدلة تبلغ 18 درجة. ولكن اعتباراً من بعد الظهر تتجمع غيوم داكنة ويهطل مطر غزير مع عواصف رعدية. لا تنسوا مظلاتكم!',
      questionDe: 'Wie wird das Wetter morgen am Nachmittag?',
      questionAr: 'كيف سيكون الطقس غداً في فترة بعد الظهر؟',
      options: [
        'Es regnet stark und es gibt Gewitter (سيمطر بغزارة وتحدث عواصف رعدية)',
        'Es bleibt den ganzen Tag sonnig und trocken (سيبقى مشمساً وجافاً طوال اليوم)',
        'Es schneit bei null Grad (ستثلج عند درجة الصفر)',
        'Am Vormittag regnet es und am Nachmittag scheint die Sonne (تمطر صباحاً وتشرق الشمس عصراً)'
      ],
      correctIndex: 0,
      vocab: [
        { de: 'der Vormittag / der Nachmittag', ar: 'قبل الظهر / بعد الظهر' },
        { de: 'die Wolken', ar: 'الغيوم' },
        { de: 'das Gewitter', ar: 'العاصفة الرعدية' }
      ],
      explanation: 'انتبه للتحول الزمني في النشرة: الشمس في الصباح (Am Vormittag)، ولكن بدءاً من بعد الظهر (Ab dem Nachmittag) هناك أمطار غزيرة وعواصف رعدية (starken Regen und Gewitter).'
    },
    {
      id: 'hoeren-5',
      level: 'A2',
      topic: 'رسالة من صديق حول عطلة نهاية الأسبوع (Sprachnachricht)',
      contextAr: 'استمع إلى الرسالة الصوتية من صديقك تيم حول خطة يوم السبت:',
      audioText: 'Hallo Karim! Wir wollten doch am Samstag im Park Fußball spielen. Leider habe ich mir gestern beim Training am Knie wehgetan und kann nicht laufen. Wollen wir stattdessen zu mir nach Hause kommen und zusammen einen Film schauen? Ich bestelle auch Pizza!',
      arTranslation: 'مرحباً كريم! كنا نريد لعب كرة القدم في الحديقة يوم السبت. للأسف آذيتُ ركبتي بالأمس أثناء التدريب ولا أستطيع الجري. هل نود بدلاً من ذلك أن نأتي إلى منزلي ونشاهد فيلماً معاً؟ سأطلب البيتزا أيضاً!',
      questionDe: 'Warum kann Tim am Samstag nicht Fußball spielen?',
      questionAr: 'لماذا لا يستطيع تيم لعب كرة القدم يوم السبت؟',
      options: [
        'Er hat sich am Knie verletzt und kann nicht laufen (أصيب في ركبته ولا يستطيع الجري)',
        'Er muss am Samstag im Restaurant arbeiten (يجب عليه العمل في مطعم يوم السبت)',
        'Es regnet am Samstag den ganzen Tag (ستمطر طوال يوم السبت)',
        'Er fährt zu seinen Eltern aufs Land (سيسافر إلى والديه في الريف)'
      ],
      correctIndex: 0,
      vocab: [
        { de: 'sich wehtun (wehgetan)', ar: 'يؤذي نفسه / يصاب بألم' },
        { de: 'das Knie', ar: 'الركبة' },
        { de: 'bestellen', ar: 'يطلب (طعاماً أو طلباً)' }
      ],
      explanation: 'قال تيم: "Leider habe ich mir gestern beim Training am Knie wehgetan und kann nicht laufen" (آذيت ركبتي بالأمس في التدريب ولا أستطيع الجري).'
    },
    {
      id: 'hoeren-6',
      level: 'A2',
      topic: 'الرد الآلي لمكتبة المدينة (Anrufbeantworter)',
      contextAr: 'اتصلتَ بمكتبة المدينة واستمعتَ إلى هذا التسجيل الصوتي:',
      audioText: 'Herzlich willkommen bei der Stadtbibliothek München. Unsere regulären Öffnungszeiten sind Montag bis Freitag von neun bis neunzehn Uhr. Wegen Renovierungsarbeiten bleibt der Lesesaal im zweiten Stock in dieser Woche geschlossen. Die Ausleihe im Erdgeschoss ist aber normal geöffnet.',
      arTranslation: 'أهلاً بكم في مكتبة مدينة ميونخ. أوقات العمل المعتادة من الإثنين إلى الجمعة من 9 صباحاً حتى 19 مساءً. بسبب أعمال التجديد تبقى قاعة القراءة في الطابق الثاني مغلقة هذا الأسبوع. أما قسم الاستعارة في الطابق الأرضي فمفتوح كالمعتاد.',
      questionDe: 'Was kann man in dieser Woche in der Bibliothek NICHT nutzen?',
      questionAr: 'ما هو القسم الذي لا يمكن استخدامه هذا الأسبوع في المكتبة؟',
      options: [
        'Den Lesesaal im zweiten Stock (قاعة القراءة في الطابق الثاني)',
        'Die Buchausleihe im Erdgeschoss (استعارة الكتب في الطابق الأرضي)',
        'Die gesamte Bibliothek am Freitag (المكتبة بالكامل يوم الجمعة)',
        'Den Online-Katalog im Internet (الفهرس الإلكتروني على الإنترنت)'
      ],
      correctIndex: 0,
      vocab: [
        { de: 'die Renovierungsarbeiten', ar: 'أعمال الترميم والتجديد' },
        { de: 'der Lesesaal', ar: 'قاعة القراءة' },
        { de: 'die Ausleihe', ar: 'قسم الإعارة / الاستعارة' }
      ],
      explanation: 'التسجيل أوضح أن قاعة القراءة في الطابق الثاني مغلقة بسبب التجديدات (bleibt der Lesesaal im zweiten Stock geschlossen)، بينما الإعارة في الطابق الأرضي مفتوحة.'
    },
    {
      id: 'hoeren-7',
      level: 'A2',
      topic: 'إعلان مدرسة اللغة (Sprachschule Information)',
      contextAr: 'استمع إلى معلمة اللغة وهي تخبر الطلاب عن امتحان نهاية الدورة:',
      audioText: 'Hören Sie bitte kurz zu: Unsere A2-Prüfung findet nächsten Mittwoch im Raum zweihundertvier statt. Bitte seien Sie spätestens um acht Uhr fünfundvierzig da und bringen Sie unbedingt Ihren Personalausweis oder Reisepass sowie einen Kugelschreiber mit. Wörterbücher und Handys sind im Prüfungsraum nicht erlaubt.',
      arTranslation: 'يرجى الاستماع قليلاً: يقام امتحان A2 الخاص بنا يوم الأربعاء القادم في القاعة 204. يرجى التواجد في موعد أقصاه الساعة 8:45 صباحاً وإحضار بطاقة الهوية أو جواز السفر حتماً بالإضافة إلى قلم حبر جاف. القواميس والهواتف المحمولة غير مسموح بها في قاعة الامتحان.',
      questionDe: 'Was müssen die Teilnehmenden zur Prüfung mitbringen?',
      questionAr: 'ماذا يجب على المشاركين إحضاره معهم إلى الامتحان؟',
      options: [
        'Einen Ausweis oder Reisepass und einen Kugelschreiber (بطاقة هوية أو جواز سفر وقلم حبر)',
        'Ein gedrucktes Wörterbuch und einen Bleistift (قاموساً مطبوعاً وقلم رصاص)',
        'Einen Laptop und Kopfhörer (حاسوباً محمولاً وسماعات رأس)',
        'Nur das Lehrbuch aus dem Kurs (كتاب الدورة فقط)'
      ],
      correctIndex: 0,
      vocab: [
        { de: 'stattfinden', ar: 'يُقام / ينعقد' },
        { de: 'der Personalausweis', ar: 'بطاقة الهوية الشخصية' },
        { de: 'der Kugelschreiber', ar: 'قلم حبر جاف' }
      ],
      explanation: 'أكدت المعلمة: "bringen Sie unbedingt Ihren Personalausweis oder Reisepass sowie einen Kugelschreiber mit"، ونبهت أن القواميس والهواتف ممنوعة.'
    },
    {
      id: 'hoeren-8',
      level: 'B1',
      topic: 'تقرير مروري في الراديو (Verkehrsfunk)',
      contextAr: 'استمع إلى تنبيه حركة المرور على الطريق السريع:',
      audioText: 'Hier ist der Verkehrsservice: Auf der Autobahn A8 zwischen Stuttgart und Ulm gibt es nach einem LKW-Unfall aktuell acht Kilometer Stau. Die rechte Fahrspur ist gesperrt. Ortskundige Autofahrer werden gebeten, ab der Ausfahrt Kirchheim über die Bundesstraße B10 umzuleiten. Sie verlieren sonst etwa eine Stunde.',
      arTranslation: 'هنا خدمة المرور: على الطريق السريع A8 بين شتوتغارت وأولم يوجد حالياً ازدحام مروري بطول 8 كيلومترات بعد حادث شاحنة. المسار الأيمن مغلق. يُرجى من السائقين العارفين بالمنطقة التحويل من مخرج كيرشهايم عبر الطريق الاتحادي B10، وإلا فستخسرون حوالي ساعة.',
      questionDe: 'Was empfiehlt der Verkehrsservice den Autofahrern?',
      questionAr: 'بماذا تنصح خدمة المرور سائقي السيارات؟',
      options: [
        'Die Autobahn bei Kirchheim zu verlassen und über die B10 zu fahren (مغادرة الطريق السريع عند كيرشهايم والقيادة عبر B10)',
        'Auf der rechten Fahrspur weiterzufahren (مواصلة القيادة على المسار الأيمن)',
        'Auf dem Rastplatz zwei Stunden zu warten (الانتظار ساعتين في الاستراحة)',
        'Mit dem Zug nach München zu fahren (السفر بالقطار إلى ميونخ)'
      ],
      correctIndex: 0,
      vocab: [
        { de: 'der Stau', ar: 'الازدحام المروري' },
        { de: 'die Fahrspur ist gesperrt', ar: 'مسار القيادة مغلق' },
        { de: 'die Ausfahrt', ar: 'مخرج الطريق السريع' }
      ],
      explanation: 'نصح التقرير السائقين بالتحويل من مخرج Kirchheim عبر الطريق B10 لتجنب خسارة ساعة في الازدحام.'
    },
    {
      id: 'hoeren-9',
      level: 'B1',
      topic: 'رسالة من إدارة السكن وصيانة التدفئة (Hausverwaltung)',
      contextAr: 'استمع إلى رسالة إدارة المبنى لجميع السكان:',
      audioText: 'Guten Tag, hier spricht Herr Weber von der Hausverwaltung. Am kommenden Montag zwischen acht und zwölf Uhr müssen unsere Techniker die Heizungsanlage im gesamten Gebäude warten und die Wasserzähler in den Wohnungen ablesen. Falls Sie vormittags arbeiten, geben Sie bitte Ihren Wohnungsschlüssel bei einem Nachbarn ab.',
      arTranslation: 'طاب يومكم، معكم السيد فيبر من إدارة المبنى. يوم الإثنين القادم بين الساعة 8 و 12 صباحاً يجب على الفنيين لدينا صيانة نظام التدفئة في المبنى بأكمله وقراءة عدادات المياه في الشقق. إذا كنتم تعملون صباحاً، فيرجى ترك مفتاح شقتكم لدى أحد الجيران.',
      questionDe: 'Was sollen Mieter tun, die am Montagvormittag nicht zu Hause sind?',
      questionAr: 'ماذا ينبغي على المستأجرين الذين لن يكونوا في المنزل صباح الإثنين أن يفعلوا؟',
      options: [
        'Den Schlüssel bei einem Nachbarn lassen (ترك المفتاح لدى أحد الجيران)',
        'Die Heizung selbst ausschalten (إيقاف التدفئة بأنفسهم)',
        'Am Sonntagabend den Techniker anrufen (الاتصال بالفني مساء الأحد)',
        'Einen neuen Wasserzähler im Baumarkt kaufen (شراء عداد مياه جديد من متجر البناء)'
      ],
      correctIndex: 0,
      vocab: [
        { de: 'die Heizungsanlage warten', ar: 'صيانة نظام التدفئة' },
        { de: 'den Wasserzähler ablesen', ar: 'قراءة عداد المياه' },
        { de: 'den Schlüssel abgeben', ar: 'تسليم / ترك المفتاح' }
      ],
      explanation: 'قال السيد فيبر: "Falls Sie vormittags arbeiten, geben Sie bitte Ihren Wohnungsschlüssel bei einem Nachbarn ab" (إذا كنتم تعملون صباحاً، اتركوا مفتاح الشقة لدى أحد الجيران).'
    },
    {
      id: 'hoeren-10',
      level: 'B1',
      topic: 'شكوى واستبدال منتج في خدمة العملاء (Kundenservice)',
      contextAr: 'استمع إلى حوار قصير عند مكتب خدمة العملاء في متجر إلكترونيات:',
      audioText: 'Entschuldigung, ich habe vor drei Tagen diese Kaffeemaschine bei Ihnen gekauft. Leider wird das Wasser überhaupt nicht heiß. Ich habe den Kassenbon und die Originalverpackung dabei. — Kein Problem! Da das Gerät defekt ist, können Sie sich entweder sofort eine neue Maschine aussuchen oder wir erstatten Ihnen den vollen Kaufpreis zurück.',
      arTranslation: 'عفواً، لقد اشتريتُ ماكينة القهوة هذه منكم قبل ثلاثة أيام. للأسف الماء لا يسخن على الإطلاق. معي إيصال الشراء والعلبة الأصلية. — لا مشكلة! بما أن الجهاز معيب، يمكنك إما اختيار ماكينة جديدة فوراً أو نرد لك ثمن الشراء بالكامل.',
      questionDe: 'Welches Problem hat der Kunde mit der Kaffeemaschine?',
      questionAr: 'ما هي المشكلة التي يواجهها العميل مع ماكينة القهوة؟',
      options: [
        'Das Wasser wird nicht heiß (الماء لا يسخن)',
        'Er hat den Kassenbon verloren (أضاع إيصال الشراء)',
        'Die Kaffeemaschine ist zu groß für seine Küche (الماكينة كبيرة جداً على مطبخه)',
        'Das Kabel fehlt in der Verpackung (الكابل مفقود في العلبة)'
      ],
      correctIndex: 0,
      vocab: [
        { de: 'der Kassenbon', ar: 'إيصال الدفع / الفاتورة' },
        { de: 'defekt', ar: 'معيب / عاطل' },
        { de: 'den Kaufpreis erstatten', ar: 'يرد ثمن الشراء' }
      ],
      explanation: 'وضح العميل العطل بقوله: "Leider wird das Wasser überhaupt nicht heiß" (للأسف الماء لا يسخن إطلاقاً).'
    },
    {
      id: 'hoeren-11',
      level: 'Ausbildung',
      topic: 'تعليمات مشرف التدريب في المستشفى (Pflege-Ausbildung)',
      contextAr: 'استمع إلى توجيهات مسؤولة القسم للمتدرب الجديد في المستشفى:',
      audioText: 'Guten Morgen Youssef! Vor der Frühschicht besprechen wir um sechs Uhr dreißig im Dienstzimmer kurz den Übergabebericht. Danach messen Sie bitte bei den Patienten in Zimmer zwölf und dreizehn den Blutdruck und die Temperatur. Tragen Sie die Werte bitte sofort digital ins Tablet ein, bevor das Frühstück verteilt wird.',
      arTranslation: 'صباح الخير يا يوسف! قبل الوردية الصباحية نناقش الساعة 6:30 في غرفة الخدمة تقرير التسليم باختصار. بعد ذلك يرجى قياس ضغط الدم والحرارة للمرضى في الغرفتين 12 و13. سجل القيم فوراً رقمياً في الجهاز اللوحي قبل توزيع الفطور.',
      questionDe: 'Was soll Youssef direkt nach der Übergabebesprechung machen?',
      questionAr: 'ماذا ينبغي على يوسف فعله مباشرة بعد اجتماع تسليم الوردية؟',
      options: [
        'Blutdruck und Temperatur messen und ins Tablet eintragen (قياس الضغط والحرارة وتسجيلهما في الجهاز اللوحي)',
        'Sofort das Frühstück in allen Zimmern verteilen (توزيع الفطور فوراً في جميع الغرف)',
        'Die Medikamente in der Apotheke abholen (إحضار الأدوية من الصيدلية)',
        'Die Patienten in den Operationssaal bringen (نقل المرضى إلى غرفة العمليات)'
      ],
      correctIndex: 0,
      vocab: [
        { de: 'die Frühschicht', ar: 'المناوبة / الوردية الصباحية' },
        { de: 'der Übergabebericht', ar: 'تقرير تسليم المناوبة' },
        { de: 'den Blutdruck messen', ar: 'يقيس ضغط الدم' }
      ],
      explanation: 'بعد الاجتماع في الساعة 6:30، طلبت منه قياس ضغط الدم والحرارة في الغرفتين 12 و13 وتسجيل القيم في التابلت قبل توزيع الفطور.'
    },
    {
      id: 'hoeren-12',
      level: 'Ausbildung',
      topic: 'رسالة من قسم تقنية المعلومات (IT-Fachinformatiker Ausbildung)',
      contextAr: 'استمع إلى رسالة زميلك في قسم الدعم التقني بالشركة:',
      audioText: 'Hallo Amir, hier ist Lukas aus der IT-Abteilung. Wir installieren heute Abend ab zwanzig Uhr ein wichtiges Sicherheitsupdate auf dem Hauptserver. Bitte speichere vor Feierabend alle deine Dokumente im Netzwerkordner ab und lass deinen Arbeitscomputer heute eingeschaltet, damit das Update automatisch durchlaufen kann.',
      arTranslation: 'مرحباً أمير، معك لوكاس من قسم تقنية المعلومات. سنقوم الليلة ابتداءً من الساعة 20:00 بتثبيت تحديث أمني هام على الخادم الرئيسي. يرجى حفظ جميع مستنداتك في مجلد الشبكة قبل انتهاء الدوام وترك حاسوب العمل قيد التشغيل اليوم لكي يكتمل التحديث تلقائياً.',
      questionDe: 'Was soll Amir heute vor Feierabend beachten?',
      questionAr: 'ما الذي ينبغي على أمير مراعاته اليوم قبل انتهاء الدوام؟',
      options: [
        'Dokumente speichern und den Computer eingeschaltet lassen (حفظ المستندات وترك الحاسوب قيد التشغيل)',
        'Den Computer komplett vom Strom trennen (فصل الحاسوب تماماً عن الكهرباء)',
        'Bis 20 Uhr im Büro bleiben (البقاء في المكتب حتى الساعة 20:00)',
        'Den Laptop mit nach Hause nehmen (أخذ الحاسوب المحمول معه إلى المنزل)'
      ],
      correctIndex: 0,
      vocab: [
        { de: 'das Sicherheitsupdate', ar: 'التحديث الأمني' },
        { de: 'der Feierabend', ar: 'نهاية دوام العمل اليومي' },
        { de: 'eingeschaltet lassen', ar: 'يترك الجهاز قيد التشغيل' }
      ],
      explanation: 'طلب منه لوكاس أمرين واضحين: حفظ المستندات في مجلد الشبكة (Dokumente abspeichern) وترك الحاسوب مفتوحاً (eingeschaltet lassen) ليعمل التحديث ليلاً.'
    },
    {
      id: 'hoeren-13',
      level: 'Ausbildung',
      topic: 'تأكيد موعد مقابلة التدريب المهني (Einladung zum Vorstellungsgespräch)',
      contextAr: 'استمع إلى اتصال مسؤولة الموارد البشرية بشركة ألمانية:',
      audioText: 'Guten Tag, hier spricht Frau Klein von der Firma Bosch in Stuttgart. Vielen Dank für Ihre Bewerbung um die Ausbildung zum Mechatroniker. Ihre Unterlagen haben uns sehr gut gefallen! Deshalb möchten wir Sie nächsten Freitag um elf Uhr zu einem persönlichen Vorstellungsgespräch einladen. Bitte melden Sie sich am Empfang bei Tor zwei.',
      arTranslation: 'طاب يومكم، معكم السيدة كلاين من شركة بوش في شتوتغارت. شكراً جزيلاً لطلبكم التقديم على التدريب المهني كفني ميكاترونيك. لقد أعجبتنا مستنداتكم كثيراً! لذلك نود دعوتكم يوم الجمعة القادم الساعة 11 صباحاً لمقابلة شخصية. يرجى تسجيل حضوركم عند الاستقبال في البوابة رقم 2.',
      questionDe: 'Warum ruft Frau Klein an?',
      questionAr: 'لماذا تتصل السيدة كلاين؟',
      options: [
        'Sie lädt den Bewerber zu einem Vorstellungsgespräch am Freitag ein (تدعو المتقدم لمقابلة عمل شخصية يوم الجمعة)',
        'Sie bittet um fehlende Zeugnisse per Post (تطلب شهادات ناقصة عبر البريد)',
        'Sie sagt den Ausbildungsplatz leider ab (تعتذر عن عدم قبول طلب التدريب)',
        'Sie fragt nach der Telefonnummer der Berufsschule (تسأل عن رقم هاتف المدرسة المهنية)'
      ],
      correctIndex: 0,
      vocab: [
        { de: 'die Bewerbungsunterlagen', ar: 'مستندات التقديم للوظيفة' },
        { de: 'das Vorstellungsgespräch', ar: 'مقابلة العمل الشخصية' },
        { de: 'der Empfang', ar: 'مكتب الاستقبال' }
      ],
      explanation: 'أبدت السيدة كلاين إعجابها بملف التقديم ودعت المتقدم لمقابلة شخصية يوم الجمعة القادم الساعة 11:00 عند البوابة رقم 2.'
    },
    {
      id: 'hoeren-14',
      level: 'Ausbildung',
      topic: 'تسليم الطلبيات في المستودع واللوجستيات (Lager & Logistik)',
      contextAr: 'استمع إلى رسالة مدير المستودع حول شحنة اليوم:',
      audioText: 'Hallo Team, kurze Info zur heutigen Lieferung: Der LKW aus Hamburg kommt heute schon um dreizehn Uhr statt um fünfzehn Uhr. Wir müssen zwanzig Paletten Ersatzteile abladen und direkt im Lagerbereich B kontrollieren. Bitte prüft genau, ob der Lieferschein mit der Ware übereinstimmt, bevor ihr unterschreibt.',
      arTranslation: 'مرحباً يا فريق، معلومة سريعة حول شحنة اليوم: الشاحنة القادمة من هامبورغ ستصل اليوم الساعة 13:00 بدلاً من 15:00. يجب علينا تفريغ 20 طبلية من قطع الغيار وفحصها مباشرة في منطقة المستودع B. يرجى التحقق بدقة مما إذا كانت بوليصة التسليم متطابقة مع البضاعة قبل التوقيع.',
      questionDe: 'Was müssen die Mitarbeiter tun, bevor sie den Lieferschein unterschreiben?',
      questionAr: 'ماذا يجب على الموظفين فعله قبل التوقيع على بوليصة التسليم؟',
      options: [
        'Prüfen, ob die gelieferte Ware mit dem Lieferschein übereinstimmt (التحقق من تطابق البضاعة المستلمة مع بوليصة التسليم)',
        'Bis 15 Uhr auf den Abteilungsleiter warten (الانتظار حتى الساعة 15:00 لحين حضور مدير القسم)',
        'Die Paletten zurück nach Hamburg schicken (إعادة الطبليات إلى هامبورغ)',
        'Zuerst alle Kunden telefonisch informieren (إبلاغ جميع العملاء هاتفياً أولاً)'
      ],
      correctIndex: 0,
      vocab: [
        { de: 'die Lieferung / der Lieferschein', ar: 'الشحنة / بوليصة التسليم' },
        { de: 'die Ersatzteile', ar: 'قطع الغيار' },
        { de: 'übereinstimmen mit', ar: 'يتطابق مع' }
      ],
      explanation: 'شدد مدير المستودع في الجملة الأخيرة: "Bitte prüft genau, ob der Lieferschein mit der Ware übereinstimmt, bevor ihr unterschreibt".'
    }
  ],

  // ============================================================================
  // HELPER METHODS
  // ============================================================================
  getActivePool() {
    let source = [];
    if (this.currentMode === 'diktat') source = this.diktatItems;
    else if (this.currentMode === 'luecken') source = this.lueckenItems;
    else source = this.hoerverstehenItems;

    if (this.currentLevel === 'all') return source;
    return source.filter(item => item.level === this.currentLevel);
  },

  getCurrentItem() {
    const pool = this.getActivePool();
    if (!pool.length) return null;
    if (this.currentIndex >= pool.length) this.currentIndex = 0;
    if (this.currentIndex < 0) this.currentIndex = 0;
    return pool[this.currentIndex];
  },

  getAnswerKey(item) {
    return `${this.currentMode}-${item.id}`;
  },

  // Generate first-letter masked hint for full dictation: e.g. "Ich freue mich" -> "I__ f____ m___"
  buildFirstLettersHint(sentence) {
    if (!sentence) return '';
    return sentence
      .split(' ')
      .map(word => {
        // Keep punctuation at the end intact
        const match = word.match(/^([A-Za-zÄÖÜäöüß0-9-]+)([.,!?]*)$/);
        if (!match) return word;
        const core = match[1];
        const punct = match[2] || '';
        if (core.length <= 1) return core + punct;
        return core[0] + '_'.repeat(core.length - 1) + punct;
      })
      .join(' ');
  },

  // Word-by-word visual diff between user's dictation and target German sentence
  buildWordDiffHtml(userText, targetText) {
    const cleanWord = (w) => w.replace(/[.,!?;:"'»«()]/g, '').trim().toLowerCase();
    const targetWords = targetText.trim().split(/\s+/);
    const userWords = (userText || '').trim().split(/\s+/).filter(Boolean);

    // Track matched indices in userWords within a sliding window so a single missing word doesn't break everything after it
    let userCursor = 0;

    const badges = targetWords.map((tWord) => {
      const tNorm = cleanWord(tWord);
      let matchedIndex = -1;

      for (let j = userCursor; j < Math.min(userWords.length, userCursor + 3); j++) {
        if (cleanWord(userWords[j]) === tNorm) {
          matchedIndex = j;
          break;
        }
      }

      if (matchedIndex !== -1) {
        userCursor = matchedIndex + 1;
        return `<span style="display:inline-flex; align-items:center; gap:4px; padding:5px 10px; border-radius:8px; background:rgba(16,185,129,0.14); border:1.5px solid var(--success); color:var(--success); font-weight:700; font-size:0.98rem;" dir="ltr">✓ ${Utils.escapeHtml(tWord)}</span>`;
      } else {
        const userAttempt = userWords[userCursor] ? Utils.escapeHtml(userWords[userCursor]) : '∅';
        if (userCursor < userWords.length) userCursor++;
        return `<span style="display:inline-flex; flex-direction:column; align-items:center; padding:4px 10px; border-radius:8px; background:rgba(239,68,68,0.12); border:1.5px solid var(--danger); font-size:0.92rem;" dir="ltr">
          <span style="text-decoration:line-through; color:var(--danger); font-size:0.78rem; opacity:0.85;">${userAttempt}</span>
          <strong style="color:var(--text-primary); font-size:0.96rem;">${Utils.escapeHtml(tWord)}</strong>
        </span>`;
      }
    });

    return `<div style="display:flex; flex-wrap:wrap; gap:8px; direction:ltr; justify-content:flex-start; align-items:center; margin-top:10px;">${badges.join('')}</div>`;
  },

  getLevelBadgeStyle(level) {
    if (level === 'A1') return 'background:rgba(16,185,129,0.15); color:#10b981; border:1px solid rgba(16,185,129,0.35);';
    if (level === 'A2') return 'background:rgba(59,130,246,0.15); color:#3b82f6; border:1px solid rgba(59,130,246,0.35);';
    if (level === 'B1') return 'background:rgba(139,92,246,0.15); color:#8b5cf6; border:1px solid rgba(139,92,246,0.35);';
    return 'background:rgba(245,158,11,0.16); color:#f59e0b; border:1px solid rgba(245,158,11,0.4);';
  },

  // ============================================================================
  // NAVIGATION & INTERACTION CONTROLLERS
  // ============================================================================
  currentAudio: null,
  isPlayingAudio: false,

  stopAudio() {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
      this.currentAudio = null;
    }
    if (window.Speech && Speech.stop) {
      Speech.stop();
    }
    this.isPlayingAudio = false;
    const playBtns = document.querySelectorAll('.diktat-play-btn');
    playBtns.forEach(btn => btn.classList.remove('playing'));
  },

  playItemAudio(item, isSlow = false) {
    if (!item) return;
    this.stopAudio();

    const manifestPath = window.DIKTAT_AUDIO_MANIFEST && window.DIKTAT_AUDIO_MANIFEST[item.id];
    const audioPath = manifestPath || `audio/diktat/${item.id}.mp3`;

    const fallbackToSpeech = () => {
      this.isPlayingAudio = false;
      const playBtns = document.querySelectorAll('.diktat-play-btn');
      playBtns.forEach(btn => btn.classList.remove('playing'));
      const text = this.currentMode === 'hoerverstehen' ? item.audioText : item.de;
      if (window.Speech) {
        if (isSlow) Speech.speakSlow(text);
        else Speech.speak(text);
      }
    };

    if (audioPath) {
      try {
        const audio = new Audio(audioPath);
        this.currentAudio = audio;
        audio.playbackRate = isSlow ? 0.75 : 1.0;
        if ('preservesPitch' in audio) {
          audio.preservesPitch = true;
        }

        this.isPlayingAudio = true;
        const playBtns = document.querySelectorAll('.diktat-play-btn');
        playBtns.forEach(btn => btn.classList.add('playing'));

        audio.onended = () => {
          this.isPlayingAudio = false;
          playBtns.forEach(btn => btn.classList.remove('playing'));
          this.currentAudio = null;
        };

        audio.onerror = (err) => {
          console.warn('[DiktatTrainer] ElevenLabs audio playback failed, falling back to Speech:', err);
          fallbackToSpeech();
        };

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.warn('[DiktatTrainer] audio.play() promise rejected:', err);
            fallbackToSpeech();
          });
        }
        return;
      } catch (err) {
        console.warn('[DiktatTrainer] Audio error:', err);
      }
    }

    fallbackToSpeech();
  },

  setMode(mode) {
    this.stopAudio();
    this.currentMode = mode;
    this.currentIndex = 0;
    this.showArabicHint = false;
    this.showFirstLettersHint = false;
    this.showFullSentence = false;
    this.lastResult = null;
    this.renderWorkspace();
  },

  setLevel(level) {
    this.stopAudio();
    this.currentLevel = level;
    this.currentIndex = 0;
    this.showArabicHint = false;
    this.showFirstLettersHint = false;
    this.showFullSentence = false;
    this.lastResult = null;
    this.renderWorkspace();
  },

  jumpTo(index) {
    const pool = this.getActivePool();
    if (index < 0 || index >= pool.length) return;
    this.stopAudio();
    this.currentIndex = index;
    this.showArabicHint = false;
    this.showFirstLettersHint = false;
    this.showFullSentence = false;
    this.lastResult = null;
    this.renderWorkspace();
  },

  prevItem() {
    const pool = this.getActivePool();
    if (!pool.length) return;
    this.jumpTo((this.currentIndex - 1 + pool.length) % pool.length);
  },

  nextItem() {
    const pool = this.getActivePool();
    if (!pool.length) return;
    this.jumpTo((this.currentIndex + 1) % pool.length);
  },

  playNormal() {
    const item = this.getCurrentItem();
    if (!item) return;
    this.playItemAudio(item, false);
  },

  playSlow() {
    const item = this.getCurrentItem();
    if (!item) return;
    this.playItemAudio(item, true);
  },

  toggleArabicHint() {
    this.showArabicHint = !this.showArabicHint;
    this.renderWorkspace();
  },

  toggleFirstLettersHint() {
    this.showFirstLettersHint = !this.showFirstLettersHint;
    this.renderWorkspace();
  },

  toggleFullSentence() {
    this.showFullSentence = !this.showFullSentence;
    this.renderWorkspace();
  },

  copySentenceToInput(targetId = 'diktat-input') {
    const item = this.getCurrentItem();
    if (!item) return;
    const input = document.getElementById(targetId);
    if (input) {
      input.value = this.currentMode === 'luecken' ? item.missingAnswer : item.de;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.focus();
      if (window.Utils && Utils.showToast) {
        Utils.showToast('📋 تم نسخ النص إلى حقل الكتابة بنجاح!', 'success', 2000);
      }
    }
  },

  insertChar(inputId, char) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    const val = input.value;
    input.value = val.slice(0, start) + char + val.slice(end);
    input.focus();
    const pos = start + char.length;
    if (input.setSelectionRange) input.setSelectionRange(pos, pos);
  },

  selectLueckenChip(chipValue) {
    const input = document.getElementById('luecken-input');
    if (input) {
      input.value = chipValue;
      input.focus();
    }
    this.checkLueckenAnswer(chipValue);
  },

  // ============================================================================
  // EVALUATION HANDLERS
  // ============================================================================
  checkDiktatAnswer() {
    const item = this.getCurrentItem();
    if (!item) return;
    const input = document.getElementById('diktat-input');
    const userText = input ? input.value.trim() : '';

    if (!userText) {
      if (window.Utils && Utils.showToast) {
        Utils.showToast('🎧 استمع للجملة أولاً ثم اكتبها أو انطقها بالمايكروفون!', 'info');
      }
      return;
    }

    const isCorrect = Utils.compareAnswers(userText, item.de, item.accept || []);
    this.recordOutcome(item, isCorrect, userText, item.de, item.note);

    this.lastResult = {
      itemId: item.id,
      isCorrect,
      userAnswer: userText
    };

    this.renderWorkspace();
    this.playItemAudio(item, false);
  },

  checkLueckenAnswer(forcedValue) {
    const item = this.getCurrentItem();
    if (!item) return;
    const input = document.getElementById('luecken-input');
    const userText = String(forcedValue !== undefined && forcedValue !== null ? forcedValue : (input ? input.value : '')).trim();

    if (!userText) {
      if (window.Utils && Utils.showToast) {
        Utils.showToast('🧩 اختر الكلمة المفقودة أو اكتبها في الحقل أولاً!', 'info');
      }
      return;
    }

    const isCorrect = Utils.compareAnswers(userText, item.missingAnswer, item.accept || []);
    this.recordOutcome(item, isCorrect, userText, `${item.missingAnswer} (${item.de})`, item.note);

    this.lastResult = {
      itemId: item.id,
      isCorrect,
      userAnswer: userText
    };

    this.renderWorkspace();
    this.playItemAudio(item, false);
  },

  checkHoerverstehenAnswer(optionIndex) {
    const item = this.getCurrentItem();
    if (!item) return;

    const isCorrect = optionIndex === item.correctIndex;
    const chosenText = item.options[optionIndex] || '';
    const correctText = item.options[item.correctIndex] || '';

    this.recordOutcome(item, isCorrect, chosenText, correctText, item.explanation);

    this.lastResult = {
      itemId: item.id,
      isCorrect,
      chosenIndex: optionIndex,
      userAnswer: chosenText
    };

    this.renderWorkspace();
  },

  recordOutcome(item, isCorrect, myAnswer, correctAnswer, explanation) {
    const key = this.getAnswerKey(item);
    const alreadyCorrect = this.answeredMap[key] && this.answeredMap[key].correct;

    this.answeredMap[key] = {
      correct: isCorrect,
      userAnswer: myAnswer
    };

    if (isCorrect) {
      this.streak++;
      if (this.streak > this.bestStreak) this.bestStreak = this.streak;
      if (!alreadyCorrect) {
        this.score += 15;
        if (window.Storage) {
          Storage.addXP(10);
          Storage.updateStreak();
          Storage.saveGameScore('diktatGame', this.score);
        }
        if (window.App && App.updateHeaderStats) App.updateHeaderStats();
      }
      if (window.Utils && Utils.showToast) {
        Utils.showToast('أحسنت! إجابة دقيقة وممتازة 🎯 (+10 XP)', 'success', 2000);
      }
    } else {
      this.streak = 0;
      if (window.Storage && Storage.addMistake) {
        Storage.addMistake({
          lessonId: `diktat-${item.level.toLowerCase()}`,
          question: `[${item.topic}] ${item.questionDe || item.displaySentence || item.ar}`,
          myAnswer: myAnswer,
          correctAnswer: correctAnswer,
          explanation: explanation
        });
      }
      if (window.Utils && Utils.showToast) {
        Utils.showToast('راجع التصحيح السمعي والقاعدة بالأسفل 📚', 'error', 2200);
      }
    }
  },

  // ============================================================================
  // MAIN RENDER ENTRYPOINT
  // ============================================================================
  render(container) {
    const target = container || document.getElementById('app-content');
    if (!target) return;
    this.containerEl = target;

    const isDe = window.I18n && I18n.isGerman();
    if (window.App && App.setBreadcrumb) {
      App.setBreadcrumb(isDe ? 'Diktat & Hör-Labor (A1–B1 & Ausbildung)' : 'مختبر الاستماع والإملاء الصوتي (Diktat & Hör-Labor)');
    }

    target.innerHTML = `<div id="diktat-studio-root" class="fade-in"></div>`;
    this.renderWorkspace();
  },

  renderWorkspace() {
    const root = document.getElementById('diktat-studio-root');
    if (!root) return;

    const isDe = window.I18n && I18n.isGerman();
    const pool = this.getActivePool();
    const item = this.getCurrentItem();
    const totalAnswered = Object.keys(this.answeredMap).length;
    const totalCorrect = Object.values(this.answeredMap).filter(v => v.correct).length;

    // Mode tabs metadata
    const modes = [
      {
        id: 'diktat',
        icon: '✍️',
        titleAr: 'الإملاء الكامل (Diktat)',
        titleDe: 'Vollständiges Diktat',
        count: this.diktatItems.length
      },
      {
        id: 'luecken',
        icon: '🧩',
        titleAr: 'إملاء الكلمات المفقودة',
        titleDe: 'Lücken-Hörtraining',
        count: this.lueckenItems.length
      },
      {
        id: 'hoerverstehen',
        icon: '🎧',
        titleAr: 'فهم المسموع والإعلانات',
        titleDe: 'Hörverstehen & Durchsagen',
        count: this.hoerverstehenItems.length
      }
    ];

    const levels = [
      { id: 'all', label: isDe ? 'Alle Niveaus' : 'الكل (All)' },
      { id: 'A1', label: 'A1' },
      { id: 'A2', label: 'A2' },
      { id: 'B1', label: 'B1' },
      { id: 'Ausbildung', label: isDe ? 'Ausbildung & Beruf' : 'Ausbildung & العمل' }
    ];

    root.innerHTML = `
      <div class="article-game-container" style="max-width: 920px; margin: 0 auto;">
        <!-- Studio Header Card -->
        <div class="card" style="margin-bottom: 20px; padding: 26px 24px; background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(16,185,129,0.08)); border: 1.5px solid var(--border);">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px;">
            <div>
              <div style="display:inline-flex; align-items:center; gap:8px; padding:4px 12px; border-radius:999px; background:rgba(99,102,241,0.15); color:var(--accent); font-weight:700; font-size:0.82rem; margin-bottom:8px;">
                🎧 Diktat & Hör-Labor • A1 / A2 / B1 / Ausbildung
              </div>
              <h2 style="font-size:1.55rem; color:var(--text-primary); margin:0 0 6px 0;">
                ${isDe ? 'Interaktives Hör- und Diktat-Studio' : 'مختبر الاستماع والإملاء الصوتي التفاعلي'}
              </h2>
              <p style="color:var(--text-secondary); font-size:0.95rem; margin:0; line-height:1.6;">
                ${isDe
                  ? 'Trainiere dein deutsches Gehör, Rechtschreibung, Schlüsselwörter und echte Prüfungsdurchsagen.'
                  : 'درّب أذنك على فهم الألمانية بالسرعة الطبيعية والبطيئة، وتدرّب على الإملاء الكتابي والصوتي وإعلانات الحياة اليومية والـ Ausbildung.'}
              </p>
            </div>

            <!-- Live Score & Streak Badges -->
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
              <div style="background:var(--bg-primary); border:1px solid var(--border); padding:8px 14px; border-radius:var(--radius-sm); text-align:center;">
                <span style="display:block; font-size:0.75rem; color:var(--text-muted);">${isDe ? 'Punkte' : 'النقاط'}</span>
                <strong style="font-size:1.15rem; color:var(--accent);">⚡ ${this.score}</strong>
              </div>
              <div style="background:var(--bg-primary); border:1px solid var(--border); padding:8px 14px; border-radius:var(--radius-sm); text-align:center;">
                <span style="display:block; font-size:0.75rem; color:var(--text-muted);">${isDe ? 'Serie' : 'سلسلة الصحيحة'}</span>
                <strong style="font-size:1.15rem; color:var(--warning);">🔥 ${this.streak}</strong>
              </div>
              <div style="background:var(--bg-primary); border:1px solid var(--border); padding:8px 14px; border-radius:var(--radius-sm); text-align:center;">
                <span style="display:block; font-size:0.75rem; color:var(--text-muted);">${isDe ? 'Gelöst' : 'تم إنجازه'}</span>
                <strong style="font-size:1.15rem; color:var(--success);">✅ ${totalCorrect}/${totalAnswered}</strong>
              </div>
            </div>
          </div>

          <!-- 3 Mode Tabs -->
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-top:20px;">
            ${modes.map(m => {
              const active = this.currentMode === m.id;
              return `
                <button type="button"
                  onclick="DiktatTrainer.setMode('${m.id}')"
                  style="display:flex; align-items:center; justify-content:space-between; gap:10px; padding:12px 16px; border-radius:var(--radius-md); border:2px solid ${active ? 'var(--accent)' : 'var(--border)'}; background:${active ? 'var(--accent)' : 'var(--bg-primary)'}; color:${active ? '#fff' : 'var(--text-primary)'}; font-weight:700; cursor:pointer; transition:all 0.2s ease; text-align:right;">
                  <span style="display:flex; align-items:center; gap:8px; font-size:0.95rem;">
                    <span style="font-size:1.25rem;">${m.icon}</span>
                    <span>${isDe ? m.titleDe : m.titleAr}</span>
                  </span>
                  <span style="padding:2px 8px; border-radius:999px; font-size:0.78rem; background:${active ? 'rgba(255,255,255,0.22)' : 'var(--bg-secondary)'}; color:${active ? '#fff' : 'var(--text-secondary)'};">
                    ${m.count}
                  </span>
                </button>
              `;
            }).join('')}
          </div>

          <!-- Level Filter Pills -->
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-top:16px; padding-top:14px; border-top:1px solid var(--border);">
            <span style="font-size:0.85rem; font-weight:700; color:var(--text-secondary);">🎯 ${isDe ? 'Niveau filtern:' : 'تصفية حسب المستوى:'}</span>
            ${levels.map(lvl => {
              const active = this.currentLevel === lvl.id;
              return `
                <button type="button"
                  onclick="DiktatTrainer.setLevel('${lvl.id}')"
                  style="padding:6px 14px; border-radius:999px; border:1.5px solid ${active ? 'var(--accent)' : 'var(--border)'}; background:${active ? 'rgba(99,102,241,0.16)' : 'var(--bg-primary)'}; color:${active ? 'var(--accent)' : 'var(--text-secondary)'}; font-weight:700; font-size:0.84rem; cursor:pointer;">
                  ${lvl.label}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Question Navigator Map -->
        ${this.renderNavigatorMap(pool, isDe)}

        <!-- Active Exercise Card -->
        ${item ? this.renderActiveItemCard(item, pool.length, isDe) : `
          <div class="card text-center" style="padding:40px 20px;">
            <p style="font-size:1.1rem; color:var(--text-secondary);">لا توجد تمارين في هذا المستوى حالياً. اختر "الكل (All)".</p>
          </div>
        `}
      </div>
    `;
  },

  renderNavigatorMap(pool, isDe) {
    if (!pool.length) return '';
    return `
      <div class="card" style="margin-bottom:18px; padding:14px 18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
          <span style="font-size:0.85rem; font-weight:700; color:var(--text-secondary);">
            🗺️ ${isDe ? `Aufgaben-Navigator (${this.currentIndex + 1} von ${pool.length})` : `خريطة التمارين الصوتية (${this.currentIndex + 1} من ${pool.length})`}
          </span>
          <div style="display:flex; gap:8px;">
            <button type="button" class="btn btn-secondary btn-sm" onclick="DiktatTrainer.prevItem()">
              ⬅ ${isDe ? 'Zurück' : 'السابق'}
            </button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="DiktatTrainer.nextItem()">
              ${isDe ? 'Überspringen ⏭️' : 'تخطي / التالي ⏭️'}
            </button>
          </div>
        </div>
        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          ${pool.map((q, idx) => {
            const key = this.getAnswerKey(q);
            const st = this.answeredMap[key];
            const isCurrent = idx === this.currentIndex;
            let bg = 'var(--bg-primary)';
            let color = 'var(--text-secondary)';
            let border = 'var(--border)';
            let suffix = '';

            if (st) {
              if (st.correct) {
                bg = 'rgba(16,185,129,0.16)';
                color = 'var(--success)';
                border = 'var(--success)';
                suffix = '✓';
              } else {
                bg = 'rgba(239,68,68,0.14)';
                color = 'var(--danger)';
                border = 'var(--danger)';
                suffix = '✗';
              }
            }
            if (isCurrent) {
              border = 'var(--accent)';
              if (!st) {
                bg = 'var(--accent)';
                color = '#fff';
              }
            }

            return `
              <button type="button"
                onclick="DiktatTrainer.jumpTo(${idx})"
                title="${Utils.escapeHtml(q.topic)}"
                style="min-width:36px; height:34px; padding:0 8px; border-radius:8px; border:2px solid ${border}; background:${bg}; color:${color}; font-weight:700; font-size:0.84rem; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; gap:2px;">
                ${idx + 1}${suffix}
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  renderActiveItemCard(item, totalCount, isDe) {
    if (this.currentMode === 'diktat') {
      return this.renderDiktatMode(item, totalCount, isDe);
    } else if (this.currentMode === 'luecken') {
      return this.renderLueckenMode(item, totalCount, isDe);
    } else {
      return this.renderHoerverstehenMode(item, totalCount, isDe);
    }
  },

  // ============================================================================
  // MODE 1 UI: ✍️ الإملاء الكامل (Vollständiges Diktat)
  // ============================================================================
  renderDiktatMode(item, totalCount, isDe) {
    const isEvaluated = this.lastResult && this.lastResult.itemId === item.id;
    const savedState = this.answeredMap[this.getAnswerKey(item)];
    const initialInputValue = isEvaluated ? this.lastResult.userAnswer : (savedState ? savedState.userAnswer : '');
    const firstLetters = this.buildFirstLettersHint(item.de);

    return `
      <div class="card" style="padding:28px 24px;">
        <!-- Top Badges -->
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:20px;">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span style="padding:4px 12px; border-radius:999px; font-weight:800; font-size:0.82rem; ${this.getLevelBadgeStyle(item.level)}">
              ${Utils.escapeHtml(item.level)}
            </span>
            <span style="padding:4px 12px; border-radius:999px; background:var(--bg-secondary); color:var(--text-secondary); font-weight:600; font-size:0.84rem;">
              📌 ${Utils.escapeHtml(item.topic)}
            </span>
          </div>
          <span style="font-size:0.85rem; color:var(--text-muted); font-weight:600;">
            #${this.currentIndex + 1} / ${totalCount}
          </span>
        </div>

        <!-- Big Audio Player Box -->
        <div style="background:var(--bg-secondary); border:1.5px dashed var(--accent); border-radius:var(--radius-md); padding:24px 20px; text-align:center; margin-bottom:20px;">
          <div style="margin-bottom:12px;">
            <span class="badge" style="background:rgba(16,185,129,0.12); color:var(--success); border:1px solid rgba(16,185,129,0.3); font-size:0.78rem; font-weight:700; padding:4px 12px; border-radius:100px; display:inline-flex; align-items:center; gap:6px;">
              <span>🎙️</span>
              <span>ElevenLabs Studio HD • نطق بشري فائق الوضوح</span>
            </span>
          </div>
          <div style="font-size:0.95rem; font-weight:700; color:var(--text-secondary); margin-bottom:14px;">
            🎧 ${isDe ? 'Höre den Satz und schreibe oder sprich ihn auf Deutsch:' : 'استمع إلى الجملة الألمانية جيداً ثم اكتبها أو انطقها بالمايكروفون:'}
          </div>
          <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
            <button type="button" class="btn btn-primary diktat-play-btn" onclick="DiktatTrainer.playNormal()" style="padding:12px 22px; font-size:1rem; display:inline-flex; align-items:center; gap:8px;">
              🔊 ${isDe ? 'Normal abspielen' : 'استمع بالسرعة الطبيعية'}
            </button>
            <button type="button" class="btn btn-secondary diktat-play-btn" onclick="DiktatTrainer.playSlow()" style="padding:12px 22px; font-size:1rem; display:inline-flex; align-items:center; gap:8px; border:1.5px solid var(--accent);">
              🐢 ${isDe ? 'Langsam abspielen (0.75x)' : 'استمع ببطء (0.75x)'}
            </button>
          </div>

          <!-- Optional Hints Row -->
          <div style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap; margin-top:16px;">
            <button type="button" class="btn btn-secondary btn-sm" onclick="DiktatTrainer.toggleArabicHint()" style="padding:6px 14px; font-size:0.86rem; font-weight:700;">
              💡 ${this.showArabicHint
                ? (isDe ? 'Arabische Bedeutung ausblenden' : 'إخفاء المعنى')
                : (isDe ? 'Arabische Bedeutung' : '💡 المعنى بالعربية')}
            </button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="DiktatTrainer.toggleFirstLettersHint()" style="padding:6px 14px; font-size:0.86rem; font-weight:700;">
              🔤 ${this.showFirstLettersHint
                ? (isDe ? 'Anfangsbuchstaben ausblenden' : 'إخفاء الحروف')
                : (isDe ? 'Tipp: Anfangsbuchstaben' : '🔤 تلميح أول حرف')}
            </button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="DiktatTrainer.toggleFullSentence()" style="padding:6px 14px; font-size:0.86rem; font-weight:700; border:1.5px solid ${this.showFullSentence ? 'var(--accent)' : 'rgba(99,102,241,0.45)'}; background:${this.showFullSentence ? 'rgba(99,102,241,0.18)' : 'var(--bg-primary)'}; color:${this.showFullSentence ? 'var(--accent)' : 'var(--text-primary)'};">
              👁️ ${this.showFullSentence
                ? (isDe ? 'Satz verbergen 🙈' : 'إخفاء الجملة المكتوبة 🙈')
                : (isDe ? 'Ganzen Satz anzeigen (Notfall)' : '👁️ عرض الجملة كتابة (احتياطاً)')}
            </button>
          </div>

          ${this.showArabicHint ? `
            <div class="fade-in" style="margin-top:12px; padding:10px 14px; border-radius:var(--radius-sm); background:var(--bg-primary); color:var(--text-primary); font-weight:600; font-size:0.98rem;">
              🇸🇦 المعنى: ${Utils.escapeHtml(item.ar)}
            </div>
          ` : ''}

          ${this.showFirstLettersHint ? `
            <div class="de-text fade-in" dir="ltr" style="margin-top:12px; padding:10px 14px; border-radius:var(--radius-sm); background:var(--bg-primary); color:var(--accent); font-family:monospace; font-weight:700; font-size:1.05rem; letter-spacing:1px;">
              ${Utils.escapeHtml(firstLetters)}
            </div>
          ` : ''}

          ${this.showFullSentence ? `
            <div class="fade-in" style="margin-top:14px; padding:16px 18px; border-radius:var(--radius-md); background:rgba(99,102,241,0.08); border:2px dashed var(--accent); text-align:center;">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
                <span style="font-size:0.86rem; color:var(--accent); font-weight:800; display:inline-flex; align-items:center; gap:6px;">
                  👁️ ${isDe ? 'Deutscher Satz im Klartext:' : 'الجملة الألمانية مكتوبة بوضوح (احتياطاً):'}
                </span>
                <button type="button" class="btn btn-secondary btn-sm" onclick="DiktatTrainer.copySentenceToInput('diktat-input')" style="padding:4px 12px; font-size:0.82rem; font-weight:700; border:1px solid var(--accent); color:var(--accent);">
                  📋 ${isDe ? 'In Textfeld einfügen' : 'نسخ إلى حقل الكتابة'}
                </button>
              </div>
              <div class="de-text" dir="ltr" style="font-size:1.25rem; font-weight:800; color:var(--text-primary); line-height:1.6; padding:12px 14px; background:var(--bg-primary); border-radius:var(--radius-sm); border:1px solid var(--border);">
                🇩🇪 ${Utils.escapeHtml(item.de)}
              </div>
              <div style="font-size:0.92rem; color:var(--text-secondary); margin-top:8px;">
                🇸🇦 ${Utils.escapeHtml(item.ar)}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- German Special Characters Toolbar -->
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
          <span style="font-size:0.84rem; color:var(--text-secondary); font-weight:600;">
            ⌨️ ${isDe ? 'Sonderzeichen einfügen:' : 'أحرف ألمانية سريعة:'}
          </span>
          <div style="display:flex; gap:6px; direction:ltr;">
            ${['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map(ch => `
              <button type="button"
                onclick="DiktatTrainer.insertChar('diktat-input', '${ch}')"
                style="padding:5px 11px; border-radius:6px; border:1px solid var(--border); background:var(--bg-secondary); color:var(--text-primary); font-weight:700; font-size:0.95rem; cursor:pointer;">
                ${ch}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- LTR Dictation Input + Voice Button -->
        <div class="diktat-input-row" style="display:flex; gap:10px; align-items:stretch; flex-wrap:wrap; margin-bottom:16px;">
          <input
            type="text"
            id="diktat-input"
            class="form-input de-text"
            dir="ltr"
            autocomplete="off"
            spellcheck="false"
            value="${Utils.escapeHtml(initialInputValue)}"
            placeholder="Schreibe hier den gehörten deutschen Satz..."
            style="flex:1 1 280px; min-width:0; padding:14px 16px; font-size:1.08rem; font-weight:600; border:2px solid var(--border); border-radius:var(--radius-sm); background:var(--bg-primary); color:var(--text-primary);"
            onkeypress="if(event.key==='Enter') DiktatTrainer.checkDiktatAnswer()"
          />
          <div class="diktat-buttons-group" style="display:flex; gap:10px; flex:1 1 200px;">
            <button
              type="button"
              class="btn btn-secondary audio-btn"
              id="diktat-mic-btn"
              onclick="Speech.listen('diktat-input', this)"
              title="تحدث بالألمانية أو انقر للإنهاء"
              style="flex:1; min-height:48px; padding:12px 14px; font-weight:700; display:inline-flex; align-items:center; justify-content:center; gap:6px;">
              🎤 ${isDe ? 'Sprechen' : 'تحدث'}
            </button>
            <button
              type="button"
              class="btn btn-primary"
              id="diktat-check-btn"
              onclick="DiktatTrainer.checkDiktatAnswer()"
              style="flex:1.2; min-height:48px; padding:12px 18px; font-weight:700; font-size:1rem; display:inline-flex; align-items:center; justify-content:center;">
              ${isDe ? 'Prüfen ✓' : 'تحقق من الإملاء ✓'}
            </button>
          </div>
        </div>

        <!-- Visual Word-by-Word Diff & Feedback -->
        ${isEvaluated ? `
          <div class="fade-in" style="margin-top:20px; padding:20px; border-radius:var(--radius-md); background:${this.lastResult.isCorrect ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)'}; border:1.5px solid ${this.lastResult.isCorrect ? 'var(--success)' : 'var(--danger)'};">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
              <strong style="font-size:1.1rem; color:${this.lastResult.isCorrect ? 'var(--success)' : 'var(--danger)'};">
                ${this.lastResult.isCorrect
                  ? (isDe ? '✅ Perfekt geschrieben!' : '✅ إملاء صحيح وممتاز!')
                  : (isDe ? '🔍 Wort-für-Wort-Vergleich (Korrektur):' : '🔍 مقارنة الإملاء كلمة بكلمة (تصحيح الأخطاء):')}
              </strong>
              <button type="button" class="btn btn-secondary btn-sm diktat-play-btn" onclick="DiktatTrainer.playNormal()">
                🔊 ${isDe ? 'Noch einmal hören' : 'استمع مرة أخرى'}
              </button>
            </div>

            <!-- Word-by-word visual diff -->
            ${this.buildWordDiffHtml(this.lastResult.userAnswer, item.de)}

            <!-- Full Clean German Sentence + Arabic Translation + Note -->
            <div style="margin-top:16px; padding-top:14px; border-top:1px solid var(--border);">
              <div class="de-text" dir="ltr" style="font-size:1.12rem; font-weight:700; color:var(--text-primary); margin-bottom:6px;">
                🇩🇪 ${Utils.escapeHtml(item.de)}
              </div>
              <div style="font-size:0.98rem; color:var(--text-secondary); margin-bottom:10px;">
                🇸🇦 ${Utils.escapeHtml(item.ar)}
              </div>
              <div style="padding:10px 14px; border-radius:var(--radius-sm); background:var(--bg-primary); border-right:4px solid var(--accent); font-size:0.9rem; color:var(--text-primary); line-height:1.6;">
                💡 <strong>${isDe ? 'Grammatik- & Rechtschreibtipp:' : 'ملاحظة نحوية وإملائية:'}</strong> ${Utils.escapeHtml(item.note)}
              </div>
            </div>

            <div style="margin-top:16px; display:flex; justify-content:flex-end;">
              <button type="button" class="btn btn-primary" onclick="DiktatTrainer.nextItem()">
                ${isDe ? 'Nächster Satz ➔' : 'الجملة التالية ➔'}
              </button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  },

  // ============================================================================
  // MODE 2 UI: 🧩 إملاء الكلمات المفقودة (Lücken-Hörtraining)
  // ============================================================================
  renderLueckenMode(item, totalCount, isDe) {
    const isEvaluated = this.lastResult && this.lastResult.itemId === item.id;
    const savedState = this.answeredMap[this.getAnswerKey(item)];
    const initialInputValue = isEvaluated ? this.lastResult.userAnswer : (savedState ? savedState.userAnswer : '');

    return `
      <div class="card" style="padding:28px 24px;">
        <!-- Top Badges -->
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:20px;">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span style="padding:4px 12px; border-radius:999px; font-weight:800; font-size:0.82rem; ${this.getLevelBadgeStyle(item.level)}">
              ${Utils.escapeHtml(item.level)}
            </span>
            <span style="padding:4px 12px; border-radius:999px; background:var(--bg-secondary); color:var(--text-secondary); font-weight:600; font-size:0.84rem;">
              🧩 ${Utils.escapeHtml(item.topic)}
            </span>
          </div>
          <span style="font-size:0.85rem; color:var(--text-muted); font-weight:600;">
            #${this.currentIndex + 1} / ${totalCount}
          </span>
        </div>

        <!-- Audio Controls -->
        <div style="background:var(--bg-secondary); border:1.5px solid var(--border); border-radius:var(--radius-md); padding:22px 20px; text-align:center; margin-bottom:20px;">
          <div style="margin-bottom:12px;">
            <span class="badge" style="background:rgba(16,185,129,0.12); color:var(--success); border:1px solid rgba(16,185,129,0.3); font-size:0.78rem; font-weight:700; padding:4px 12px; border-radius:100px; display:inline-flex; align-items:center; gap:6px;">
              <span>🎙️</span>
              <span>ElevenLabs Studio HD • نطق بشري فائق الوضوح</span>
            </span>
          </div>
          <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap; margin-bottom:18px;">
            <button type="button" class="btn btn-primary diktat-play-btn" onclick="DiktatTrainer.playNormal()" style="padding:11px 20px; font-size:0.98rem;">
              🔊 ${isDe ? 'Satz abspielen' : 'استمع للجملة كاملة'}
            </button>
            <button type="button" class="btn btn-secondary diktat-play-btn" onclick="DiktatTrainer.playSlow()" style="padding:11px 20px; font-size:0.98rem;">
              🐢 ${isDe ? 'Langsam hören (0.75x)' : 'استمع ببطء (0.75x)'}
            </button>
          </div>

          <!-- Sentence with Blank(s) -->
          <div class="de-text" dir="ltr" style="font-size:1.3rem; font-weight:700; color:var(--text-primary); padding:14px 18px; background:var(--bg-primary); border-radius:var(--radius-sm); border:1px solid var(--border); letter-spacing:0.3px;">
            ${Utils.escapeHtml(item.displaySentence).replace(/___/g, '<span style="display:inline-block; min-width:72px; border-bottom:3px solid var(--accent); color:var(--accent); padding:0 6px; margin:0 4px;">___</span>')}
          </div>

          <div style="margin-top:10px; font-size:0.95rem; color:var(--text-secondary);">
            🇸🇦 ${Utils.escapeHtml(item.ar)}
          </div>

          <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap; margin-top:14px;">
            <button type="button" class="btn btn-secondary btn-sm" onclick="DiktatTrainer.toggleFullSentence()" style="padding:6px 14px; font-size:0.86rem; font-weight:700; border:1.5px solid ${this.showFullSentence ? 'var(--accent)' : 'rgba(99,102,241,0.45)'}; background:${this.showFullSentence ? 'rgba(99,102,241,0.18)' : 'var(--bg-primary)'}; color:${this.showFullSentence ? 'var(--accent)' : 'var(--text-primary)'};">
              👁️ ${this.showFullSentence
                ? (isDe ? 'Lösung verbergen 🙈' : 'إخفاء الحل 🙈')
                : (isDe ? 'Ganze Lösung anzeigen (Notfall)' : '👁️ عرض الكلمة المفقودة (احتياطاً)')}
            </button>
          </div>

          ${this.showFullSentence ? `
            <div class="fade-in" style="margin-top:12px; padding:12px 16px; border-radius:var(--radius-sm); background:rgba(99,102,241,0.08); border:1.5px dashed var(--accent); text-align:center;">
              <span style="font-size:0.86rem; color:var(--accent); font-weight:700;">الكلمة المفقودة:</span>
              <strong class="de-text" dir="ltr" style="font-size:1.18rem; color:var(--text-primary); margin:0 8px;">${Utils.escapeHtml(item.missingAnswer)}</strong>
              <button type="button" class="btn btn-secondary btn-sm" onclick="DiktatTrainer.copySentenceToInput('luecken-input')" style="padding:4px 10px; font-size:0.82rem; margin-top:4px; font-weight:700;">
                📋 نسخ للحقل
              </button>
            </div>
          ` : ''}
        </div>

        <!-- Clickable Distractor Chips -->
        <div style="margin-bottom:18px;">
          <div style="font-size:0.88rem; font-weight:700; color:var(--text-secondary); margin-bottom:10px;">
            🎯 ${isDe ? 'Wähle die gehörten Wörter oder tippe/sprich sie unten ein:' : 'اختر الكلمات المسموعة من البطاقات أو اكتبها/انطقها بالأسفل:'}
          </div>
          <div style="display:flex; gap:10px; flex-wrap:wrap; direction:ltr;">
            ${item.chips.map(chip => {
              const safeChip = chip.replace(/'/g, "\\'");
              const isSelected = initialInputValue.toLowerCase() === chip.toLowerCase();
              return `
                <button type="button"
                  onclick="DiktatTrainer.selectLueckenChip('${safeChip}')"
                  class="de-text"
                  dir="ltr"
                  style="padding:10px 18px; border-radius:var(--radius-sm); border:2px solid ${isSelected ? 'var(--accent)' : 'var(--border)'}; background:${isSelected ? 'rgba(99,102,241,0.15)' : 'var(--bg-primary)'}; color:var(--text-primary); font-weight:700; font-size:1rem; cursor:pointer; transition:all 0.15s ease;">
                  ${Utils.escapeHtml(chip)}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Text + Voice Input for Missing Words -->
        <div class="diktat-input-row" style="display:flex; gap:10px; align-items:stretch; flex-wrap:wrap;">
          <input
            type="text"
            id="luecken-input"
            class="form-input de-text"
            dir="ltr"
            autocomplete="off"
            value="${Utils.escapeHtml(initialInputValue)}"
            placeholder="Tippe die fehlenden Wörter (z. B. ${Utils.escapeHtml(item.missingAnswer)})..."
            style="flex:1 1 260px; min-width:0; padding:12px 16px; font-size:1.02rem; font-weight:600; border:2px solid var(--border); border-radius:var(--radius-sm); background:var(--bg-primary); color:var(--text-primary);"
            onkeypress="if(event.key==='Enter') DiktatTrainer.checkLueckenAnswer()"
          />
          <div class="diktat-buttons-group" style="display:flex; gap:10px; flex:1 1 180px;">
            <button
              type="button"
              class="btn btn-secondary audio-btn"
              onclick="Speech.listen('luecken-input', this)"
              title="انطق الكلمة المفقودة أو انقر للإنهاء"
              style="flex:1; min-height:46px; padding:10px 14px; font-weight:700; display:inline-flex; align-items:center; justify-content:center; gap:6px;">
              🎤 ${isDe ? 'Sprechen' : 'تحدث'}
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onclick="DiktatTrainer.checkLueckenAnswer()"
              style="flex:1.2; min-height:46px; padding:10px 18px; font-weight:700; display:inline-flex; align-items:center; justify-content:center;">
              ${isDe ? 'Prüfen ✓' : 'تحقق ✓'}
            </button>
          </div>
        </div>

        <!-- Evaluation Feedback -->
        ${isEvaluated ? `
          <div class="fade-in" style="margin-top:20px; padding:20px; border-radius:var(--radius-md); background:${this.lastResult.isCorrect ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)'}; border:1.5px solid ${this.lastResult.isCorrect ? 'var(--success)' : 'var(--danger)'};">
            <div style="font-weight:800; font-size:1.08rem; color:${this.lastResult.isCorrect ? 'var(--success)' : 'var(--danger)'}; margin-bottom:8px;">
              ${this.lastResult.isCorrect
                ? `✅ إجابة صحيحة! الكلمات المفقودة: (${Utils.escapeHtml(item.missingAnswer)})`
                : `❌ إجابتك: (${Utils.escapeHtml(this.lastResult.userAnswer)}) — الصحيح هو: (${Utils.escapeHtml(item.missingAnswer)})`}
            </div>
            <div class="de-text" dir="ltr" style="font-size:1.12rem; font-weight:700; color:var(--text-primary); margin-bottom:10px;">
              🇩🇪 ${Utils.escapeHtml(item.de)}
            </div>
            <div style="padding:10px 14px; border-radius:var(--radius-sm); background:var(--bg-primary); border-right:4px solid var(--accent); font-size:0.9rem; color:var(--text-primary); line-height:1.6;">
              💡 <strong>الشرح والتوضيح السمعي:</strong> ${Utils.escapeHtml(item.note)}
            </div>
            <div style="margin-top:14px; display:flex; justify-content:flex-end;">
              <button type="button" class="btn btn-primary" onclick="DiktatTrainer.nextItem()">
                ${isDe ? 'Nächste Übung ➔' : 'التمرين التالي ➔'}
              </button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  },

  // ============================================================================
  // MODE 3 UI: 🎧 فهم المسموع والمواقف اليومية (Hörverstehen)
  // ============================================================================
  renderHoerverstehenMode(item, totalCount, isDe) {
    const isEvaluated = this.lastResult && this.lastResult.itemId === item.id;

    return `
      <div class="card" style="padding:28px 24px;">
        <!-- Top Badges -->
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:18px;">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span style="padding:4px 12px; border-radius:999px; font-weight:800; font-size:0.82rem; ${this.getLevelBadgeStyle(item.level)}">
              ${Utils.escapeHtml(item.level)}
            </span>
            <span style="padding:4px 12px; border-radius:999px; background:var(--bg-secondary); color:var(--text-secondary); font-weight:600; font-size:0.84rem;">
              📻 ${Utils.escapeHtml(item.topic)}
            </span>
          </div>
          <span style="font-size:0.85rem; color:var(--text-muted); font-weight:600;">
            #${this.currentIndex + 1} / ${totalCount}
          </span>
        </div>

        <!-- Context & Audio Studio Box -->
        <div style="background:var(--bg-secondary); border:1.5px solid var(--border); border-radius:var(--radius-md); padding:22px 20px; text-align:center; margin-bottom:22px;">
          <div style="margin-bottom:12px;">
            <span class="badge" style="background:rgba(16,185,129,0.12); color:var(--success); border:1px solid rgba(16,185,129,0.3); font-size:0.78rem; font-weight:700; padding:4px 12px; border-radius:100px; display:inline-flex; align-items:center; gap:6px;">
              <span>🎙️</span>
              <span>ElevenLabs Studio HD • حوار / إعلان حقيقي</span>
            </span>
          </div>
          <p style="font-size:1rem; font-weight:700; color:var(--text-primary); margin:0 0 14px 0;">
            🎧 ${Utils.escapeHtml(item.contextAr)}
          </p>
          <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
            <button type="button" class="btn btn-primary diktat-play-btn" onclick="DiktatTrainer.playNormal()" style="padding:12px 22px; font-size:1rem;">
              🔊 ${isDe ? 'Durchsage / Dialog abspielen' : 'تشغيل التسجيل الصوتي بالسرعة الطبيعية'}
            </button>
            <button type="button" class="btn btn-secondary diktat-play-btn" onclick="DiktatTrainer.playSlow()" style="padding:12px 20px; font-size:0.98rem;">
              🐢 ${isDe ? 'Langsam hören (0.75x)' : 'استماع بطيء (0.75x)'}
            </button>
          </div>

          <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap; margin-top:14px;">
            <button type="button" class="btn btn-secondary btn-sm" onclick="DiktatTrainer.toggleFullSentence()" style="padding:6px 14px; font-size:0.86rem; font-weight:700; border:1.5px solid ${this.showFullSentence ? 'var(--accent)' : 'rgba(99,102,241,0.45)'}; background:${this.showFullSentence ? 'rgba(99,102,241,0.18)' : 'var(--bg-primary)'}; color:${this.showFullSentence ? 'var(--accent)' : 'var(--text-primary)'};">
              👁️ ${this.showFullSentence
                ? (isDe ? 'Transkript verbergen 🙈' : 'إخفاء نص التسجيل 🙈')
                : (isDe ? 'Transkript anzeigen (Notfall)' : '👁️ عرض نص التسجيل كاملاً مكتوباً (احتياطاً)')}
            </button>
          </div>

          ${this.showFullSentence ? `
            <div class="fade-in" style="margin-top:14px; padding:14px 16px; border-radius:var(--radius-md); background:rgba(99,102,241,0.08); border:1.5px dashed var(--accent); text-align:right;">
              <div style="font-size:0.84rem; color:var(--accent); font-weight:800; margin-bottom:6px;">
                📻 نص التسجيل كاملاً بالألمانية (Transkript):
              </div>
              <div class="de-text" dir="ltr" style="font-size:1.02rem; font-weight:700; color:var(--text-primary); line-height:1.7; margin-bottom:8px;">
                ${Utils.escapeHtml(item.audioText)}
              </div>
              <div style="font-size:0.9rem; color:var(--text-secondary); line-height:1.6;">
                🇸🇦 الترجمة: ${Utils.escapeHtml(item.arTranslation)}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Comprehension Question -->
        <div style="margin-bottom:16px;">
          <div class="de-text" dir="ltr" style="font-size:1.12rem; font-weight:800; color:var(--text-primary); margin-bottom:4px;">
            ❓ ${Utils.escapeHtml(item.questionDe)}
          </div>
          <div style="font-size:0.96rem; color:var(--text-secondary); font-weight:600;">
            ${Utils.escapeHtml(item.questionAr)}
          </div>
        </div>

        <!-- 4 Multiple Choice Options -->
        <div style="display:grid; gap:10px; margin-bottom:18px;">
          ${item.options.map((opt, idx) => {
            let border = 'var(--border)';
            let bg = 'var(--bg-primary)';
            let badge = ['A', 'B', 'C', 'D'][idx];

            if (isEvaluated) {
              if (idx === item.correctIndex) {
                border = 'var(--success)';
                bg = 'rgba(16,185,129,0.14)';
                badge = '✓';
              } else if (idx === this.lastResult.chosenIndex && !this.lastResult.isCorrect) {
                border = 'var(--danger)';
                bg = 'rgba(239,68,68,0.12)';
                badge = '✗';
              }
            }

            return `
              <button type="button"
                onclick="DiktatTrainer.checkHoerverstehenAnswer(${idx})"
                style="display:flex; align-items:center; gap:12px; width:100%; padding:14px 16px; border-radius:var(--radius-sm); border:2px solid ${border}; background:${bg}; color:var(--text-primary); font-weight:600; font-size:0.98rem; text-align:right; cursor:pointer; transition:all 0.15s ease;">
                <span style="min-width:30px; height:30px; border-radius:50%; background:var(--bg-secondary); display:inline-flex; align-items:center; justify-content:center; font-weight:800; color:var(--accent);">
                  ${badge}
                </span>
                <span style="flex:1;" dir="auto">${Utils.escapeHtml(opt)}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Full Transcript, Arabic Translation, Key Vocab & Explanation after answering -->
        ${isEvaluated ? `
          <div class="fade-in" style="margin-top:22px; padding:22px; border-radius:var(--radius-md); background:var(--bg-secondary); border:1.5px solid ${this.lastResult.isCorrect ? 'var(--success)' : 'var(--accent)'};">
            <div style="font-weight:800; font-size:1.08rem; color:${this.lastResult.isCorrect ? 'var(--success)' : 'var(--danger)'}; margin-bottom:14px;">
              ${this.lastResult.isCorrect
                ? '✅ أحسنت! فهمتَ المقطع الصوتي بدقة ممتازة.'
                : '🔍 راجع النص الكامل للمقطع الصوتي والترجمة بالأسفل:'}
            </div>

            <!-- German Transcript -->
            <div style="padding:14px 16px; border-radius:var(--radius-sm); background:var(--bg-primary); border:1px solid var(--border); margin-bottom:12px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <span style="font-size:0.82rem; font-weight:700; color:var(--accent);">📜 النص الألماني الكامل (Transkript):</span>
                <button type="button" class="btn btn-secondary btn-sm diktat-play-btn" onclick="DiktatTrainer.playNormal()">🔊 استمع مع القراءة</button>
              </div>
              <p class="de-text" dir="ltr" style="margin:0; font-size:1.04rem; line-height:1.7; font-weight:600; color:var(--text-primary);">
                ${Utils.escapeHtml(item.audioText)}
              </p>
            </div>

            <!-- Arabic Translation -->
            <div style="padding:12px 16px; border-radius:var(--radius-sm); background:var(--bg-primary); border:1px solid var(--border); margin-bottom:12px;">
              <span style="display:block; font-size:0.82rem; font-weight:700; color:var(--success); margin-bottom:4px;">🇸🇦 الترجمة العربية:</span>
              <p style="margin:0; font-size:0.96rem; line-height:1.7; color:var(--text-secondary);">
                ${Utils.escapeHtml(item.arTranslation)}
              </p>
            </div>

            <!-- Key Vocabulary Chips -->
            ${item.vocab && item.vocab.length ? `
              <div style="margin-bottom:12px;">
                <span style="display:block; font-size:0.84rem; font-weight:700; color:var(--text-secondary); margin-bottom:6px;">🔑 أهم المفردات المفتاحية في التسجيل:</span>
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                  ${item.vocab.map(v => `
                    <span style="padding:6px 12px; border-radius:8px; background:var(--bg-primary); border:1px solid var(--border); font-size:0.88rem;">
                      <strong class="de-text" dir="ltr">${Utils.escapeHtml(v.de)}</strong> = ${Utils.escapeHtml(v.ar)}
                    </span>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Explanation -->
            <div style="padding:10px 14px; border-radius:var(--radius-sm); background:var(--bg-primary); border-right:4px solid var(--accent); font-size:0.9rem; color:var(--text-primary); line-height:1.6;">
              💡 <strong>لماذا هذه الإجابة؟</strong> ${Utils.escapeHtml(item.explanation)}
            </div>

            <div style="margin-top:16px; display:flex; justify-content:flex-end;">
              <button type="button" class="btn btn-primary" onclick="DiktatTrainer.nextItem()">
                ${isDe ? 'Nächste Hör-Aufgabe ➔' : 'الموقف الصوتي التالي ➔'}
              </button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }
};

window.DiktatTrainer = DiktatTrainer;
