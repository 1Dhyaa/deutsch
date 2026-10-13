// ============================================================================
// js/schreiben-trainer.js — Interactive German Writing Studio & Exam Baukasten
// مدرب كتابة الإيميلات والرسائل (Goethe A2 / B1 / Ausbildung Bewerbung)
// ============================================================================

const SchreibenTrainer = {
  STORAGE_DRAFTS_KEY: 'deutsch_meister_schreiben_drafts',
  STORAGE_SCORES_KEY: 'deutsch_meister_schreiben_scores',

  state: {
    activeCategory: 'all', // 'all' | 'a2' | 'b1' | 'ausbildung'
    activeTaskId: 'a2-sms-termin',
    activeRedemittelTab: 'anrede', // 'anrede' | 'einleitung' | 'hauptteil' | 'schluss'
    lastEvaluation: null,
    showModelAnswer: false
  },

  categories: [
    {
      id: 'all',
      titleAr: 'جميع المهام (12)',
      titleDe: 'Alle Aufgaben (12)',
      icon: '📚'
    },
    {
      id: 'a2',
      titleAr: 'امتحان Goethe A2 (4)',
      titleDe: 'Goethe-Zertifikat A2 (4)',
      icon: '🟢'
    },
    {
      id: 'b1',
      titleAr: 'امتحان Goethe B1 (4)',
      titleDe: 'Goethe-Zertifikat B1 (4)',
      icon: '🔵'
    },
    {
      id: 'ausbildung',
      titleAr: 'التدريب المهني والعمل (4)',
      titleDe: 'Ausbildung & Beruf (4)',
      icon: '💼'
    }
  ],

  // Shared Redemittel Bank organized by Register ('informell', 'formell', 'forum')
  redemittelBank: {
    informell: {
      anrede: [
        { de: 'Hallo [Name],', ar: 'مرحباً [الاسم]، (تحية ودية للأصدقاء)' },
        { de: 'Liebe [Name],', ar: 'عزيزتي [الاسم]، (لمخاطبة صديقة)' },
        { de: 'Lieber [Name],', ar: 'عزيزي [الاسم]، (لمخاطبة صديق)' },
        { de: 'Hallo zusammen,', ar: 'مرحباً بالجميع، (لأكثر من صديق)' }
      ],
      einleitung: [
        { de: 'wie geht es dir? Ich hoffe, es geht dir gut.', ar: 'كيف حالك؟ أتمنى أن تكون بخير.' },
        { de: 'ich schreibe dir, weil ich dir etwas Wichtiges erzählen möchte.', ar: 'أكتب إليك لأنني أود إخبارك بشيء مهم.' },
        { de: 'vielen Dank für deine nette E-Mail! Ich habe mich sehr gefreut.', ar: 'شكراً جزيلاً على رسالتك اللطيفة! لقد فرحت جداً.' },
        { de: 'es tut mir sehr leid, aber ich habe heute ein kleines Problem.', ar: 'يؤسفني جداً، ولكن لدي اليوم مشكلة صغيرة.' }
      ],
      hauptteil: [
        { de: 'Leider kann ich am ... nicht kommen, weil ich ... muss.', ar: 'للأسف لا أستطيع القدوم يوم ... لأنني مضطر لـ ...' },
        { de: 'Deshalb möchte ich dich fragen, ob wir uns am ... treffen können.', ar: 'لذلك أود أن أسألك عما إذا كان بإمكاننا الالتقاء يوم ...' },
        { de: 'Außerdem wollte ich dir sagen, dass ...', ar: 'بالإضافة إلى ذلك أردت أن أقول لك إن ...' },
        { de: 'Hast du am Wochenende schon etwas vor? Wollen wir ...?', ar: 'هل لديك خطط لعطلة نهاية الأسبوع؟ هل نـ ...؟' },
        { de: 'Obwohl ich viel Arbeit habe, möchte ich gern ...', ar: 'على الرغم من أن لدي عملاً كثيراً، أود بكل سرور ...' },
        { de: 'Sag mir bitte Bescheid, ob der Termin dir passt.', ar: 'أخبرني من فضلك ما إذا كان الموعد يناسبك.' }
      ],
      schluss: [
        { de: 'Ich freue mich schon auf deine Antwort!', ar: 'أتطلع شوقاً لردك!' },
        { de: 'Melde dich bitte bald bei mir.', ar: 'تواصل معي قريباً من فضلك.' },
        { de: 'Viele Grüße\nDhyaa', ar: 'تحياتي الحارة\nضياء' },
        { de: 'Liebe Grüße\nDhyaa', ar: 'أطيب التحيات الودية\nضياء' },
        { de: 'Bis bald!\nDein Dhyaa', ar: 'أراك قريباً!\nصديقك ضياء' }
      ]
    },
    formell: {
      anrede: [
        { de: 'Sehr geehrte Damen und Herren,', ar: 'السيدات والسادة الكرام، (عند عدم معرفة اسم الشخص)' },
        { de: 'Sehr geehrter Herr [Nachname],', ar: 'السيد الفاضل [اسم العائلة]، (رسمي للمذكر)' },
        { de: 'Sehr geehrte Frau [Nachname],', ar: 'السيدة الفاضلة [اسم العائلة]، (رسمي للمؤنث)' },
        { de: 'Guten Tag Frau/Herr [Nachname],', ar: 'طاب يومكم سيدة/سيد [اسم العائلة]، (رسمي حديث للإيميلات)' }
      ],
      einleitung: [
        { de: 'ich schreibe Ihnen, weil ich eine Frage zu ... habe.', ar: 'أكتب لحضرتكم لأن لدي سؤالاً بخصوص ...' },
        { de: 'mit großem Interesse habe ich Ihre Anzeige im Internet gelesen.', ar: 'ببالغ الاهتمام قرأت إعلانكم على الإنترنت.' },
        { de: 'hiermit möchte ich mich für die Stelle als ... bewerben.', ar: 'بموجب هذا أود التقدم لوظيفة/مقعد ...' },
        { de: 'vielen Dank für Ihre Einladung zum Vorstellungsgespräch.', ar: 'شكراً جزيلاً على دعوتكم لمقابلة العمل.' },
        { de: 'leider muss ich Ihnen mitteilen, dass ...', ar: 'للأسف يتوجب عليّ إبلاغكم بأن ...' }
      ],
      hauptteil: [
        { de: 'Könnten Sie mir bitte mitteilen, wann ... beginnt und wie viel ... kostet?', ar: 'هل يمكنكم إخباري متى يبدأ ... وكم تبلغ تكلفة ...؟' },
        { de: 'Da ich an diesem Tag einen wichtigen Termin habe, kann ich leider nicht teilnehmen.', ar: 'نظراً لأن لدي موعداً مهماً في ذلك اليوم، لا أستطيع للأسف المشاركة.' },
        { de: 'Deshalb bitte ich Sie höflich um einen neuen Termin.', ar: 'لذلك أرجو منكم بلطف تحديد موعد جديد.' },
        { de: 'Außerdem verfüge ich über gute Deutschkenntnisse (Niveau B1) und bin sehr motiviert.', ar: 'علاوة على ذلك أمتلك مهارات جيدة في الألمانية (مستوى B1) ومتحمس جداً.' },
        { de: 'Ich wäre Ihnen sehr dankbar, wenn Sie das Problem schnell lösen könnten.', ar: 'سأكون ممتناً جداً لحضرتكم لو أمكنكم حل المشكلة سريعاً.' },
        { de: 'Im Anhang sende ich Ihnen meinen Lebenslauf und meine Zeugnisse.', ar: 'أرسل لكم في المرفقات سيرتي الذاتية وشهاداتي.' }
      ],
      schluss: [
        { de: 'Für weitere Informationen stehe ich Ihnen gerne zur Verfügung.', ar: 'لمزيد من المعلومات أنا رهن إشارتكم بكل سرور.' },
        { de: 'Über eine positive Rückmeldung freue ich mich sehr.', ar: 'سأسعد كثيراً برد إيجابي منكم.' },
        { de: 'Vielen Dank im Voraus für Ihre Mühe und Ihr Verständnis.', ar: 'شكراً جزيلاً مقدماً على مجهودكم وتفهمكم.' },
        { de: 'Mit freundlichen Grüßen\nDhyaa', ar: 'مع خالص التحيات الرسمية\nضياء' }
      ]
    },
    forum: {
      anrede: [
        { de: 'Hallo zusammen,', ar: 'مرحباً بالجميع في المنتدى،' },
        { de: 'Liebe Forumsmitglieder,', ar: 'أعزائي أعضاء المنتدى،' },
        { de: 'Hallo Leute,', ar: 'أهلاً يا شباب / يا أصدقاء،' }
      ],
      einleitung: [
        { de: 'ich finde dieses Thema sehr aktuell und wichtig, deshalb möchte ich meine Meinung dazu schreiben.', ar: 'أجد هذا الموضوع معاصراً ومهماً جداً، لذلك أود كتابة رأيي حوله.' },
        { de: 'meiner Meinung nach hat ... sowohl Vorteile als auch Nachteile.', ar: 'في رأيي أن ... له إيجابيات وكذلك سلبيات.' },
        { de: 'ich habe deinen Beitrag gelesen und stimme dir teilweise zu.', ar: 'قرأت منشورك وأتفق معك جزئياً.' }
      ],
      hauptteil: [
        { de: 'Ein großer Vorteil ist, dass man viel Zeit und Geld spart.', ar: 'إحدى المزايا الكبيرة هي أن المرء يوفر الكثير من الوقت والمال.' },
        { de: 'Auf der einen Seite ist es praktisch, aber auf der anderen Seite fehlt der persönliche Kontakt.', ar: 'من ناحية هو أمر عملي، ولكن من ناحية أخرى ينقص التواصل الشخصي.' },
        { de: 'Meiner Erfahrung nach kann man sich zu Hause gut konzentrieren, wenn es ruhig ist.', ar: 'حسب تجربتي يمكن للمرء التركيز جيداً في المنزل عندما يكون الجو هادئاً.' },
        { de: 'Allerdings sollte man nicht vergessen, dass ...', ar: 'ومع ذلك لا ينبغي للمرء أن ينسى أن ...' },
        { de: 'Deshalb bin ich der Meinung, dass eine Mischung aus beidem am besten ist.', ar: 'لذلك أنا من الرأي القائل إن المزج بين الاثنين هو الأفضل.' }
      ],
      schluss: [
        { de: 'Wie denkt ihr darüber? Ich bin gespannt auf eure Kommentare!', ar: 'ما رأيكم أنتم في ذلك؟ أنا متشوق لتعليقاتكم!' },
        { de: 'Viele Grüße an alle\nDhyaa', ar: 'تحياتي الحارة للجميع\nضياء' }
      ]
    }
  },

  // 12 Complete, Authentic Writing Tasks
  tasks: [
    // =========================================================================
    // CATEGORY 1: GOETHE A2 SCHREIBEN (4 TASKS)
    // =========================================================================
    {
      id: 'a2-sms-termin',
      category: 'a2',
      level: 'A2 — Teil 1 (SMS)',
      register: 'informell',
      registerLabelAr: 'غير رسمي Informell (du)',
      registerLabelDe: 'Informell (du)',
      minWords: 25,
      maxWords: 40,
      titleAr: '1. تأجيل موعد مع صديق (SMS — Termin verschieben)',
      titleDe: 'SMS an einen Freund: Termin verschieben',
      scenarioDe: 'Sie wollen sich heute Abend mit Ihrem Freund Lukas im Café treffen. Leider müssen Sie länger arbeiten. Schreiben Sie eine SMS an Lukas.',
      scenarioAr: 'تريد الالتقاء بصديقك "لوكاس" (Lukas) هذا المساء في المقهى، ولكن للأسف عليك العمل لوقت أطول اليوم. اكتب رسالة قصيرة (SMS) إلى لوكاس.',
      leitpunkte: [
        {
          id: 'lp1',
          de: 'Entschuldigen Sie sich höflich.',
          ar: 'اعتذر بلطف عن عدم قدرتك على المجيء في الموعد.',
          hintDe: 'Es tut mir leid, aber ich kann heute Abend leider nicht kommen.',
          keywords: ['leid', 'entschuldig', 'sorry', 'leider', 'nicht kommen', 'klappt nicht']
        },
        {
          id: 'lp2',
          de: 'Erklären Sie den Grund (Warum können Sie nicht?).',
          ar: 'اشرح السبب (لماذا لا تستطيع الحضور؟ العمل / المكتب).',
          hintDe: 'weil ich heute länger im Büro arbeiten muss.',
          keywords: ['arbeit', 'büro', 'länger', 'chef', 'projekt', 'muss', 'stunde', 'termin']
        },
        {
          id: 'lp3',
          de: 'Schlagen Sie einen neuen Tag und eine Uhrzeit vor.',
          ar: 'اقترح يوماً ووقتاً جديداً للقاء (مثلاً غداً أو نهاية الأسبوع).',
          hintDe: 'Können wir uns morgen oder am Samstag um 18 Uhr treffen?',
          keywords: ['morgen', 'samstag', 'sonntag', 'freitag', 'wochenende', 'uhr', 'treffen', 'neuer termin', 'verschieben', 'zeit']
        }
      ],
      taskRedemittel: [
        { de: 'Lieber Lukas,', ar: 'عزيزي لوكاس،' },
        { de: 'es tut mir wirklich leid, aber ich kann heute Abend nicht ins Café kommen.', ar: 'يؤسفني حقاً، لكنني لا أستطيع المجيء إلى المقهى هذا المساء.' },
        { de: 'Ich muss leider länger arbeiten, weil mein Kollege krank ist.', ar: 'للأسف يجب أن أعمل لوقت أطول لأن زميلي مريض.' },
        { de: 'Hast du morgen Abend um 19 Uhr Zeit? Wollen wir uns dann treffen?', ar: 'هل لديك وقت غداً مساءً الساعة 19؟ هل نلتقي حينها؟' }
      ],
      modelAnswer: `Lieber Lukas,\n\nes tut mir sehr leid, aber ich kann heute Abend leider nicht ins Café kommen, weil ich im Büro länger arbeiten muss. Können wir unser Treffen auf morgen um 18 Uhr verschieben? Sag mir bitte kurz Bescheid!\n\nViele Grüße\nDhyaa`,
      modelAnswerAr: `عزيزي لوكاس،\n\nيؤسفني جداً، ولكن لا أستطيع للأسف المجيء إلى المقهى هذا المساء، لأنني مضطر للعمل لوقت أطول في المكتب. هل يمكننا تأجيل لقاؤنا إلى الغد الساعة 18؟ أخبرني باختصار من فضلك!\n\nتحياتي الحارة\nضياء`
    },

    {
      id: 'a2-email-sprachschule',
      category: 'a2',
      level: 'A2 — Teil 2 (Formelle E-Mail)',
      register: 'formell',
      registerLabelAr: 'رسمي Formell (Sie)',
      registerLabelDe: 'Formell (Sie)',
      minWords: 35,
      maxWords: 50,
      titleAr: '2. استفسار عن دورة لغة ألمانية (E-Mail an Sprachschule)',
      titleDe: 'Formelle E-Mail an eine Sprachschule',
      scenarioDe: 'Sie möchten im nächsten Monat einen Deutschkurs (Niveau B1) bei der Sprachschule „Deutsch Aktiv“ besuchen. Schreiben Sie eine E-Mail an das Sekretariat.',
      scenarioAr: 'تريد في الشهر القادم حضور دورة لغة ألمانية (مستوى B1) في معهد اللغات "Deutsch Aktiv". اكتب بريداً إلكترونياً رسمياً إلى السكرتارية.',
      leitpunkte: [
        {
          id: 'lp1',
          de: 'Sagen Sie, für welchen Kurs Sie sich interessieren (B1).',
          ar: 'اذكر الدورة التي تهتم بها (دورة ألماني مستوى B1).',
          hintDe: 'ich interessiere mich für einen Deutschkurs auf dem Niveau B1.',
          keywords: ['deutschkurs', 'kurs', 'b1', 'interessier', 'anmeld', 'lernen', 'sprachkurs']
        },
        {
          id: 'lp2',
          de: 'Fragen Sie nach den Kurszeiten und dem Beginn.',
          ar: 'اسأل عن مواعيد الدورة ومتى تبدأ.',
          hintDe: 'Wann beginnt der nächste Kurs und an welchen Tagen findet der Unterricht statt?',
          keywords: ['wann', 'beginn', 'start', 'uhrzeit', 'zeit', 'tag', 'abend', 'vormittag', 'termin', 'findet']
        },
        {
          id: 'lp3',
          de: 'Fragen Sie nach dem Preis / den Kosten.',
          ar: 'اسأل عن السعر / تكلفة الدورة.',
          hintDe: 'Könnten Sie mir bitte auch sagen, wie viel der Kurs kostet?',
          keywords: ['preis', 'kost', 'euro', 'gebühr', 'bezahl', 'wie viel', 'wieviel', 'teuer']
        }
      ],
      taskRedemittel: [
        { de: 'Sehr geehrte Damen und Herren,', ar: 'السيدات والسادة الكرام،' },
        { de: 'ich möchte im nächsten Monat gerne einen Deutschkurs B1 in Ihrer Sprachschule besuchen.', ar: 'أود بكل سرور حضور دورة لغة ألمانية B1 في معهدكم الشهر القادم.' },
        { de: 'Könnten Sie mir bitte mitteilen, wann der Kurs beginnt und wie die Kurszeiten sind?', ar: 'هل يمكنكم إخباري متى تبدأ الدورة وما هي أوقات الدراسة؟' },
        { de: 'Außerdem möchte ich wissen, wie viel der Kurs inklusive Lehrbuch kostet.', ar: 'بالإضافة إلى ذلك أود معرفة كم تكلف الدورة شاملة الكتاب الدراسي.' }
      ],
      modelAnswer: `Sehr geehrte Damen und Herren,\n\nich interessiere mich für einen Deutschkurs auf dem Niveau B1 in Ihrer Sprachschule. Könnten Sie mir bitte mitteilen, wann der nächste Kurs im kommenden Monat beginnt und wie die Kurszeiten sind? Außerdem möchte ich gerne wissen, wie viel der Kurs kostet.\n\nVielen Dank im Voraus!\n\nMit freundlichen Grüßen\nDhyaa`,
      modelAnswerAr: `السيدات والسادة الكرام،\n\nأنا مهتم بدورة لغة ألمانية للمستوى B1 في معهدكم. هل يمكنكم من فضلكم إبلاغي متى تبدأ الدورة القادمة في الشهر المقبل وما هي أوقات الدورة؟ بالإضافة إلى ذلك أود معرفة كم تبلغ تكلفة الدورة.\n\nشكراً جزيلاً مقدماً!\n\nمع خالص التحيات\nضياء`
    },

    {
      id: 'a2-email-einladung',
      category: 'a2',
      level: 'A2 — Persönliche E-Mail',
      register: 'informell',
      registerLabelAr: 'غير رسمي Informell (du)',
      registerLabelDe: 'Informell (du)',
      minWords: 35,
      maxWords: 50,
      titleAr: '3. دعوة لحفلة عيد ميلاد (Einladung zum Geburtstag)',
      titleDe: 'Persönliche E-Mail: Einladung zum Geburtstag',
      scenarioDe: 'Sie haben nächste Woche Geburtstag und möchten eine Party machen. Schreiben Sie eine E-Mail an Ihre Freundin Sarah und laden Sie sie ein.',
      scenarioAr: 'عيد ميلادك الأسبوع القادم وتريد إقامة حفلة. اكتب إيميلاً لصديقتك "سارة" (Sarah) وقم بدعوتها للحفل.',
      leitpunkte: [
        {
          id: 'lp1',
          de: 'Laden Sie Sarah herzlich zu Ihrer Geburtstagsparty ein.',
          ar: 'ادعُ سارة بحرارة إلى حفلة عيد ميلادك.',
          hintDe: 'ich habe nächste Woche Geburtstag und möchte dich herzlich zu meiner Party einladen.',
          keywords: ['einlad', 'geburtstag', 'party', 'feier', 'fest', 'feiern', 'komm']
        },
        {
          id: 'lp2',
          de: 'Nennen Sie Ort, Tag und Uhrzeit der Feier.',
          ar: 'اذكر المكان واليوم والساعة التي ستقام فيها الحفلة.',
          hintDe: 'Die Party findet am Samstag um 19 Uhr bei mir zu Hause statt.',
          keywords: ['samstag', 'freitag', 'sonntag', 'uhr', 'bei mir', 'hause', 'garten', 'restaurant', 'adresse', 'wann', 'wo']
        },
        {
          id: 'lp3',
          de: 'Bitten Sie Sarah, etwas mitzubringen (z. B. Salat oder Getränke).',
          ar: 'اطلب من سارة إحضار شيء معها (مثل سلطة أو مشروبات أو كعكة).',
          hintDe: 'Kannst du vielleicht einen Salat oder etwas zum Trinken mitbringen?',
          keywords: ['mitbring', 'salat', 'kuchen', 'getränk', 'saft', 'essen', 'trinken', 'musik']
        }
      ],
      taskRedemittel: [
        { de: 'Liebe Sarah,', ar: 'عزيزتي سارة،' },
        { de: 'nächste Woche habe ich Geburtstag und möchte dich herzlich zu meiner Party einladen.', ar: 'الأسبوع القادم عيد ميلادي وأود دعوتك بحرارة إلى حفلتي.' },
        { de: 'Wir feiern am Samstag ab 19 Uhr bei mir zu Hause.', ar: 'سنحتفل يوم السبت ابتداءً من الساعة 19 عندي في المنزل.' },
        { de: 'Kannst du bitte einen leckeren Salat oder ein paar Getränke mitbringen?', ar: 'هل يمكنك من فضلك إحضار سلطة لذيذة أو بعض المشروبات؟' }
      ],
      modelAnswer: `Liebe Sarah,\n\nich habe nächste Woche Geburtstag und möchte dich herzlich zu meiner Geburtstagsparty einladen! Wir feiern am Samstag ab 19 Uhr bei mir zu Hause, weil das Wetter schön wird. Kannst du vielleicht einen Salat oder Getränke mitbringen? Sag mir bitte bis Donnerstag Bescheid!\n\nLiebe Grüße\nDhyaa`,
      modelAnswerAr: `عزيزتي سارة،\n\nعيد ميلادي الأسبوع القادم وأود دعوتك بحرارة إلى حفلة عيد ميلادي! سنحتفل يوم السبت ابتداءً من الساعة 19 عندي في المنزل لأن الطقس سيكون جميلاً. هل يمكنك ربما إحضار سلطة أو مشروبات؟ أخبريني من فضلك حتى يوم الخميس!\n\nأطيب التحيات\nضياء`
    },

    {
      id: 'a2-email-vermieter',
      category: 'a2',
      level: 'A2 — Formelle E-Mail',
      register: 'formell',
      registerLabelAr: 'رسمي Formell (Sie)',
      registerLabelDe: 'Formell (Sie)',
      minWords: 35,
      maxWords: 55,
      titleAr: '4. إبلاغ صاحب السكن عن عطل التدفئة (Heizung kaputt)',
      titleDe: 'E-Mail an den Vermieter: Heizung funktioniert nicht',
      scenarioDe: 'In Ihrer Wohnung ist seit gestern die Heizung kaputt und es ist sehr kalt. Schreiben Sie eine E-Mail an Ihren Vermieter, Herrn Müller.',
      scenarioAr: 'التدفئة (Heizung) في شقتك معطلة منذ الأمس والجو بارد جداً. اكتب بريداً إلكترونياً رسمياً إلى مالك السكن السيد "مولر" (Herr Müller).',
      leitpunkte: [
        {
          id: 'lp1',
          de: 'Beschreiben Sie das Problem in der Wohnung.',
          ar: 'صف المشكلة في الشقة (التدفئة لا تعمل منذ أمس والجو بارد).',
          hintDe: 'seit gestern funktioniert die Heizung in meiner Wohnung leider nicht mehr.',
          keywords: ['heizung', 'kaputt', 'funktioniert nicht', 'kalt', 'wohnung', 'warm', 'wasser', 'problem', 'defekt']
        },
        {
          id: 'lp2',
          de: 'Bitten Sie um schnelle Reparatur / einen Handwerker.',
          ar: 'اطلب إصلاح العطل بسرعة أو إرسال فني صيانة (Handwerker).',
          hintDe: 'Könnten Sie bitte so schnell wie möglich einen Handwerker schicken?',
          keywords: ['handwerker', 'reparier', 'reparatur', 'schnell', 'schicken', 'techniker', 'prüfen', 'hilfe']
        },
        {
          id: 'lp3',
          de: 'Sagen Sie, wann Sie zu Hause erreichbar sind.',
          ar: 'اذكر متى تكون متواجداً في المنزل ويمكن التواصل معك.',
          hintDe: 'Ich bin jeden Tag ab 16 Uhr zu Hause oder telefonisch erreichbar.',
          keywords: ['zu hause', 'zuhause', 'erreichbar', 'uhr', 'nachmittag', 'anrufen', 'telefon', 'morgen', 'ab ']
        }
      ],
      taskRedemittel: [
        { de: 'Sehr geehrter Herr Müller,', ar: 'السيد الفاضل مولر،' },
        { de: 'ich schreibe Ihnen, weil die Heizung in meiner Wohnung seit gestern kaputt ist.', ar: 'أكتب لحضرتكم لأن التدفئة في شقتي معطلة منذ الأمس.' },
        { de: 'Da es draußen sehr kalt ist, bitte ich Sie dringend, einen Handwerker zu schicken.', ar: 'نظراً لأن الجو بارد جداً في الخارج، أرجو منكم بشكل عاجل إرسال فني صيانة.' },
        { de: 'Ich bin täglich ab 15 Uhr zu Hause und auch auf meinem Handy erreichbar.', ar: 'أنا متواجد يومياً من الساعة 15 في المنزل ويمكن الوصول إليّ أيضاً عبر هاتفي.' }
      ],
      modelAnswer: `Sehr geehrter Herr Müller,\n\nich schreibe Ihnen, weil die Heizung in meiner Wohnung seit gestern kaputt ist und es hier sehr kalt ist. Könnten Sie bitte so schnell wie möglich einen Handwerker schicken, damit er die Heizung repariert? Ich bin jeden Tag ab 16 Uhr zu Hause und telefonisch erreichbar.\n\nMit freundlichen Grüßen\nDhyaa`,
      modelAnswerAr: `السيد الفاضل مولر،\n\nأكتب لحضرتكم لأن التدفئة في شقتي معطلة منذ الأمس والجو هنا بارد جداً. هل يمكنكم من فضلكم إرسال فني صيانة بأسرع ما يمكن لكي يقوم بإصلاح التدفئة؟ أنا متواجد كل يوم من الساعة 16 في المنزل ومتاح هاتفياً.\n\nمع خالص التحيات\nضياء`
    },

    // =========================================================================
    // CATEGORY 2: GOETHE B1 SCHREIBEN (4 TASKS)
    // =========================================================================
    {
      id: 'b1-email-umzug',
      category: 'b1',
      level: 'B1 — Aufgabe 1 (Persönliche E-Mail)',
      register: 'informell',
      registerLabelAr: 'غير رسمي Informell (du)',
      registerLabelDe: 'Informell (du)',
      minWords: 70,
      maxWords: 100,
      titleAr: '5. الانتقال لشقة جديدة ودعوة صديق (B1 Teil 1 — Umzug)',
      titleDe: 'B1 Teil 1: Neue Wohnung & Einweihungsparty',
      scenarioDe: 'Sie sind am letzten Wochenende in eine neue Wohnung umgezogen. Schreiben Sie eine E-Mail an Ihren Freund Felix, der in einer anderen Stadt wohnt (ca. 80 Wörter).',
      scenarioAr: 'انتقلت في عطلة نهاية الأسبوع الماضية إلى شقة جديدة. اكتب إيميلاً لصديقك "فيليكس" (Felix) الذي يعيش في مدينة أخرى (حوالي 80 كلمة).',
      leitpunkte: [
        {
          id: 'lp1',
          de: 'Beschreiben Sie Ihre neue Wohnung (Lage, Zimmer, Balkon ...).',
          ar: 'صف شقتك الجديدة (الموقع، عدد الغرف، الإضاءة، الشرفة...).',
          hintDe: 'Meine neue Wohnung liegt direkt im Zentrum, hat drei helle Zimmer und einen großen Balkon.',
          keywords: ['wohnung', 'zimmer', 'balkon', 'küche', 'hell', 'groß', 'zentrum', 'ruhig', 'modern', 'liegt']
        },
        {
          id: 'lp2',
          de: 'Erzählen Sie, wie der Umzug war und wer Ihnen geholfen hat.',
          ar: 'احكِ كيف كان الانتقال ومن ساعدك فيه.',
          hintDe: 'Obwohl der Umzug anstrengend war, hat alles gut geklappt, weil mir zwei Kollegen geholfen haben.',
          keywords: ['umzug', 'geholfen', 'hilf', 'anstrengend', 'kisten', 'möbel', 'freunde', 'kollegen', 'geklappt', 'müde']
        },
        {
          id: 'lp3',
          de: 'Laden Sie Felix für das nächste Wochenende zu sich ein.',
          ar: 'ادعُ فيليكس لزيارتك في عطلة نهاية الأسبوع القادمة لرؤية الشقة.',
          hintDe: 'Hast du nächstes Wochenende Zeit, mich zu besuchen? Du kannst gerne bei mir übernachten!',
          keywords: ['einlad', 'besuch', 'wochenende', 'übernacht', 'vorbeikomm', 'komm', 'party', 'zusammen']
        }
      ],
      taskRedemittel: [
        { de: 'Lieber Felix,', ar: 'عزيزي فيليكس،' },
        { de: 'endlich habe ich den Umzug geschafft und wohne jetzt in meiner neuen Wohnung!', ar: 'أخيراً أنجزت الانتقال وأسكن الآن في شقتي الجديدة!' },
        { de: 'Die Wohnung gefällt mir super, weil sie zwei helle Zimmer, eine moderne Küche und einen schönen Balkon hat.', ar: 'الشقة تعجبني جداً لأن بها غرفتين مشرقتين ومطبخاً حديثاً وشرفة جميلة.' },
        { de: 'Obwohl der Umzug ziemlich anstrengend war, ging alles schnell, da mir meine Kollegen beim Tragen geholfen haben.', ar: 'رغم أن الانتقال كان متعباً إلى حد ما، سار كل شيء بسرعة لأن زملائي ساعدوني في الحمل.' },
        { de: 'Hast du am nächsten Wochenende Zeit, mich zu besuchen? Du kannst natürlich bei mir schlafen!', ar: 'هل لديك وقت في عطلة نهاية الأسبوع القادمة لزيارتي؟ يمكنك طبعاً المبيت عندي!' }
      ],
      modelAnswer: `Lieber Felix,\n\nwie geht es dir? Endlich habe ich den Umzug hinter mir und wohne jetzt in meiner neuen Wohnung! Sie gefällt mir wirklich sehr gut, weil sie direkt im Stadtzentrum liegt. Außerdem hat sie zwei große, helle Zimmer, eine moderne Küche und sogar einen sonnigen Balkon.\n\nObwohl der Umzug am Samstag ziemlich anstrengend war, hat alles wunderbar geklappt, denn drei Freunde haben mir beim Möbeltragen geholfen.\n\nIch möchte dich herzlich einladen: Hast du am nächsten Wochenende Zeit, mich zu besuchen? Du kannst gerne bei mir übernachten!\n\nViele Grüße\nDhyaa`,
      modelAnswerAr: `عزيزي فيليكس،\n\nكيف حالك؟ أخيراً أنهيت عملية الانتقال وأسكن الآن في شقتي الجديدة! إنها تعجبني حقاً للغاية لأنها تقع مباشرة في وسط المدينة. بالإضافة إلى ذلك فيها غرفتان كبيرتان ومشرقتان، ومطبخ حديث وحتى شرفة مشمسة.\n\nعلى الرغم من أن الانتقال يوم السبت كان متعباً إلى حد ما، فقد سار كل شيء بشكل رائع لأن ثلاثة أصدقاء ساعدوني في نقل الأثاث.\n\nأود دعوتك بحرارة: هل لديك وقت في عطلة نهاية الأسبوع القادمة لزيارتي؟ يمكنك بكل سرور المبيت عندي!\n\nتحياتي الحارة\nضياء`
    },

    {
      id: 'b1-forum-homeoffice',
      category: 'b1',
      level: 'B1 — Aufgabe 2 (Forumsbeitrag)',
      register: 'forum',
      registerLabelAr: 'منشور منتدى (Meinungsäußerung)',
      registerLabelDe: 'Forumsbeitrag (Meinung)',
      minWords: 70,
      maxWords: 100,
      titleAr: '6. إبداء الرأي: العمل والدراسة من المنزل (B1 Teil 2 — Homeoffice)',
      titleDe: 'B1 Teil 2: Forumsbeitrag — Arbeiten & Lernen von zu Hause',
      scenarioDe: 'Im Internet lesen Sie in einem Forum eine Diskussion zum Thema „Arbeiten und Lernen von zu Hause (Homeoffice & Online-Kurse)“. Schreiben Sie Ihre Meinung dazu (ca. 80 Wörter).',
      scenarioAr: 'قرأت في منتدى على الإنترنت نقاشاً حول موضوع "العمل والدراسة من المنزل (Homeoffice & Online-Kurse)". اكتب مساهمة تعبّر فيها عن رأيك الشخصي (حوالي 80 كلمة).',
      leitpunkte: [
        {
          id: 'lp1',
          de: 'Äußern Sie Ihre persönliche Meinung zum Thema Homeoffice / Online-Lernen.',
          ar: 'عبّر عن رأيك الشخصي حول العمل أو الدراسة عبر الإنترنت من المنزل.',
          hintDe: 'Meiner Meinung nach ist das Arbeiten und Lernen von zu Hause eine sehr gute Möglichkeit.',
          keywords: ['meinung', 'finde', 'denke', 'homeoffice', 'zu hause', 'zuhause', 'online', 'internet', 'computer']
        },
        {
          id: 'lp2',
          de: 'Nennen Sie Vorteile (z. B. Zeit sparen, Flexibilität).',
          ar: 'اذكر الإيجابيات (مثل توفير الوقت والمواصلات، والمرونة).',
          hintDe: 'Ein großer Vorteil ist, dass man keinen langen Arbeitsweg hat und viel Zeit spart.',
          keywords: ['vorteil', 'zeit', 'spar', 'flexibel', 'verkehr', 'bus', 'stau', 'praktisch', 'bequem', 'ruhe']
        },
        {
          id: 'lp3',
          de: 'Nennen Sie auch Nachteile (z. B. wenig Kontakt zu Kollegen) und Ihr Fazit.',
          ar: 'اذكر أيضاً السلبيات (مثل قلة التواصل المباشر مع الزملاء) وخلاصة رأيك.',
          hintDe: 'Auf der anderen Seite fehlt aber der persönliche Kontakt zu Kollegen. Deshalb finde ich eine Mischung am besten.',
          keywords: ['nachteil', 'kontakt', 'kollegen', 'allein', 'ablenk', 'mischung', 'beides', 'allerdings', 'anderen seite', 'aber']
        }
      ],
      taskRedemittel: [
        { de: 'Hallo zusammen,', ar: 'مرحباً بالجميع،' },
        { de: 'ich finde das Thema „Homeoffice und Online-Lernen“ sehr wichtig und möchte meine Meinung dazu sagen.', ar: 'أجد موضوع "العمل والدراسة من المنزل" مهماً جداً وأود قول رأيي حوله.' },
        { de: 'Auf der einen Seite ist es super praktisch, weil man nicht jeden Morgen im Stau stehen muss und viel Zeit spart.', ar: 'من ناحية هو عملي للغاية لأن المرء لا يضطر للوقوف في الازدحام كل صباح ويوفر الكثير من الوقت.' },
        { de: 'Auf der anderen Seite fehlt zu Hause oft der persönliche Kontakt zu den Kollegen oder Mitschülern.', ar: 'ومن ناحية أخرى ينقص في المنزل غالباً التواصل الشخصي مع الزملاء أو زملاء الدراسة.' },
        { de: 'Deshalb bin ich der Meinung, dass eine Kombination aus Homeoffice und Büro die beste Lösung ist.', ar: 'لذلك أنا من الرأي القائل إن المزج بين العمل من المنزل والمكتب هو الحل الأفضل.' }
      ],
      modelAnswer: `Hallo zusammen,\n\nich finde das Thema „Homeoffice und Online-Lernen“ sehr aktuell, deshalb möchte ich gerne meine Meinung dazu schreiben. Meiner Erfahrung nach hat das Arbeiten von zu Hause viele Vorteile. Ein großer Vorteil ist, dass man keinen langen Arbeitsweg hat und dadurch jeden Tag viel Zeit und Geld spart. Außerdem kann man seine Zeit flexibler einteilen.\n\nAllerdings gibt es auch Nachteile: Wenn man immer allein zu Hause sitzt, fehlt der persönliche Kontakt zu den Kollegen. Deshalb denke ich, dass eine Mischung aus Homeoffice und Präsenzarbeit am besten ist.\n\nViele Grüße\nDhyaa`,
      modelAnswerAr: `مرحباً بالجميع،\n\nأجد موضوع "العمل والدراسة من المنزل" معاصراً جداً، لذلك أود بكل سرور كتابة رأيي حوله. حسب تجربتي فإن العمل من المنزل له مزايا عديدة. ميزة كبيرة هي أن المرء ليس لديه طريق عمل طويل وبالتالي يوفر كل يوم الكثير من الوقت والمال. علاوة على ذلك يمكن للمرء تقسيم وقته بمرونة أكبر.\n\nومع ذلك توجد أيضاً سلبيات: عندما يجلس المرء دائماً وحيداً في المنزل، ينقص التواصل الشخصي مع الزملاء. لذلك أعتقد أن المزج بين العمل من المنزل والعمل الحضوري هو الأفضل.\n\nتحياتي الحارة\nضياء`
    },

    {
      id: 'b1-formell-absage',
      category: 'b1',
      level: 'B1 — Aufgabe 3 (Formelle E-Mail)',
      register: 'formell',
      registerLabelAr: 'رسمي Formell (Sie)',
      registerLabelDe: 'Formell (Sie)',
      minWords: 35,
      maxWords: 55,
      titleAr: '7. اعتذار رسمي عن حضور اجتماع أو موعد (B1 Teil 3 — Absage)',
      titleDe: 'B1 Teil 3: Formelle Entschuldigung wegen Terminabsage',
      scenarioDe: 'Sie haben am kommenden Dienstag um 10 Uhr einen Beratungstermin bei Ihrer Kursleiterin, Frau Weber. Sie können aber nicht kommen, weil Sie einen dringenden Arzttermin haben. Schreiben Sie an Frau Weber (ca. 40 Wörter).',
      scenarioAr: 'لديك يوم الثلاثاء القادم الساعة 10 موعد استشارة مع مشرفة الدورة السيدة "فيبر" (Frau Weber)، لكنك لا تستطيع الحضور لأن لديك موعد طبيب عاجل. اكتب رسالة رسمية للسيدة فيبر (حوالي 40 كلمة).',
      leitpunkte: [
        {
          id: 'lp1',
          de: 'Entschuldigen Sie sich höflich für die Absage.',
          ar: 'اعتذر بأدب ورسمية عن عدم قدرتك على حضور الموعد.',
          hintDe: 'es tut mir sehr leid, dass ich unseren Termin am Dienstag absagen muss.',
          keywords: ['entschuldig', 'leid', 'leider', 'absag', 'nicht kommen', 'nicht wahrnehmen', 'teilnehmen']
        },
        {
          id: 'lp2',
          de: 'Nennen Sie den Grund (dringender Arzttermin).',
          ar: 'اذكر السبب بوضوح (موعد طبيب عاجل / مرض).',
          hintDe: 'weil ich starke Zahnschmerzen habe und dringend zum Arzt gehen muss.',
          keywords: ['arzt', 'krank', 'schmerz', 'untersuchung', 'krankenhaus', 'dringend', 'termin']
        },
        {
          id: 'lp3',
          de: 'Bitten Sie um einen neuen Gesprächstermin.',
          ar: 'اطلب بلطف تحديد موعد بديل للاستشارة.',
          hintDe: 'Könnten wir das Gespräch bitte auf Donnerstag oder Freitag verschieben?',
          keywords: ['neuen termin', 'neuer termin', 'verschieb', 'ersatztermin', 'donnerstag', 'freitag', 'nächste woche', 'wiederholen']
        }
      ],
      taskRedemittel: [
        { de: 'Sehr geehrte Frau Weber,', ar: 'السيدة الفاضلة فيبر،' },
        { de: 'leider muss ich Ihnen mitteilen, dass ich zu unserem Beratungstermin am Dienstag um 10 Uhr nicht kommen kann.', ar: 'للأسف يتوجب عليّ إبلاغكم بأنني لا أستطيع المجيء إلى موعد الاستشارة يوم الثلاثاء الساعة 10.' },
        { de: 'Da ich plötzlich einen dringenden Arzttermin bekommen habe, bitte ich Sie vielmals um Entschuldigung.', ar: 'نظراً لأنني حصلت فجأة على موعد طبيب عاجل، أرجو منكم المعذرة الشديدة.' },
        { de: 'Wäre es möglich, dass wir einen neuen Termin am Donnerstag vereinbaren?', ar: 'هل من الممكن أن نتفق على موعد جديد يوم الخميس؟' }
      ],
      modelAnswer: `Sehr geehrte Frau Weber,\n\nleider muss ich Ihnen mitteilen, dass ich unseren Beratungstermin am kommenden Dienstag um 10 Uhr nicht wahrnehmen kann, weil ich einen dringenden Arzttermin habe. Ich bitte Sie herzlich um Entschuldigung. Könnten wir bitte einen neuen Termin für Donnerstag oder Freitag vereinbaren?\n\nMit freundlichen Grüßen\nDhyaa`,
      modelAnswerAr: `السيدة الفاضلة فيبر،\n\nللأسف يتوجب عليّ إبلاغكم بأنني لا أستطيع حضور موعد الاستشارة الخاص بنا يوم الثلاثاء القادم الساعة 10، لأن لدي موعد طبيب عاجلاً. أرجو منكم المعذرة بصدق. هل يمكننا من فضلكم الاتفاق على موعد جديد ليوم الخميس أو الجمعة؟\n\nمع خالص التحيات\nضياء`
    },

    {
      id: 'b1-formell-beschwerde',
      category: 'b1',
      level: 'B1 — Formelle Reklamation',
      register: 'formell',
      registerLabelAr: 'رسمي Formell (Sie)',
      registerLabelDe: 'Formell (Sie)',
      minWords: 45,
      maxWords: 70,
      titleAr: '8. رسالة لخدمة العملاء بشأن تأخر طلبية (Reklamation / Bestellung)',
      titleDe: 'Formelle E-Mail an den Kundenservice: Verspätete Lieferung',
      scenarioDe: 'Sie haben vor zwei Wochen im Online-Shop „TechnikWelt“ einen Laptop für Ihren Deutschkurs bestellt und bezahlt, aber das Paket ist noch nicht angekommen. Schreiben Sie an den Kundenservice.',
      scenarioAr: 'قمت قبل أسبوعين بطلب ودفع ثمن جهاز لابتوب لدورة اللغة الألمانية من متجر "TechnikWelt" الإلكتروني، ولكن الطرد لم يصل حتى الآن. اكتب إيميلاً رسمياً لخدمة العملاء.',
      leitpunkte: [
        {
          id: 'lp1',
          de: 'Erklären Sie, was und wann Sie bestellt haben.',
          ar: 'وضّح ماذا طلبت ومتى قمت بالطلب والدفع.',
          hintDe: 'vor zwei Wochen habe ich bei Ihnen einen Laptop bestellt und sofort bezahlt.',
          keywords: ['bestell', 'laptop', 'computer', 'paket', 'wochen', 'gekauft', 'bezahlt', 'lieferung']
        },
        {
          id: 'lp2',
          de: 'Sagen Sie, warum Sie das Gerät dringend brauchen.',
          ar: 'اشرح لماذا تحتاج الجهاز بشكل عاجل (لدورة اللغة أو العمل).',
          hintDe: 'Da mein Online-Deutschkurs nächste Woche beginnt, brauche ich den Laptop dringend.',
          keywords: ['brauch', 'dringend', 'kurs', 'arbeit', 'lernen', 'unterricht', 'wichtig', 'noch nicht angekommen']
        },
        {
          id: 'lp3',
          de: 'Fragen Sie nach dem Lieferdatum oder fordern Sie Ihr Geld zurück.',
          ar: 'اسأل عن موعد التسليم المؤكد أو اطلب استرجاع المبلغ.',
          hintDe: 'Bitte teilen Sie mir mit, wann das Paket geliefert wird, oder überweisen Sie mir mein Geld zurück.',
          keywords: ['wann', 'geliefert', 'liefertermin', 'geld', 'zurück', 'stornier', 'schicken', 'senden', 'antwort']
        }
      ],
      taskRedemittel: [
        { de: 'Sehr geehrte Damen und Herren,', ar: 'السيدات والسادة الكرام،' },
        { de: 'vor zwei Wochen habe ich in Ihrem Online-Shop einen Laptop bestellt und bereits bezahlt.', ar: 'قبل أسبوعين طلبت من متجركم الإلكتروني جهاز لابتوب ودفعت ثمنه بالفعل.' },
        { de: 'Leider ist das Paket bis heute nicht bei mir angekommen, obwohl ich den Laptop dringend für meinen Deutschkurs brauche.', ar: 'للأسف لم يصل الطرد إليّ حتى اليوم، رغم أنني أحتاج اللابتوب بشكل عاجل لدورة الألماني.' },
        { de: 'Bitte teilen Sie mir sofort mit, wann die Ware geliefert wird, sonst möchte ich die Bestellung stornieren.', ar: 'يرجى إبلاغي فوراً متى سيتم تسليم البضاعة، وإلا فإنني أرغب في إلغاء الطلب.' }
      ],
      modelAnswer: `Sehr geehrte Damen und Herren,\n\nvor zwei Wochen habe ich in Ihrem Online-Shop einen Laptop bestellt und sofort bezahlt, aber leider ist das Paket bis heute nicht angekommen. Da ich das Gerät dringend für meinen Deutschkurs brauche, bitte ich Sie um eine schnelle Information, wann die Ware geliefert wird. Andernfalls bitte ich Sie, mir mein Geld zurückzuüberweisen.\n\nMit freundlichen Grüßen\nDhyaa`,
      modelAnswerAr: `السيدات والسادة الكرام،\n\nقبل أسبوعين طلبت من متجركم الإلكتروني جهاز لابتوب ودفعت ثمنه فوراً، ولكن للأسف لم يصل الطرد حتى اليوم. ونظراً لأنني أحتاج الجهاز بشكل عاجل لدورة اللغة الألمانية، أرجو منكم معلومة سريعة حول موعد تسليم البضاعة. وإلا فإنني أرجو منكم تحويل أموالي لي مجدداً.\n\nمع خالص التحيات\nضياء`
    },

    // =========================================================================
    // CATEGORY 3: AUSBILDUNG & BERUF IN DEUTSCHLAND (4 TASKS)
    // =========================================================================
    {
      id: 'ausbildung-anfrage',
      category: 'ausbildung',
      level: 'Ausbildung — Anfrage',
      register: 'formell',
      registerLabelAr: 'رسمي للشركات Formell (Sie)',
      registerLabelDe: 'Formell (Sie)',
      minWords: 45,
      maxWords: 70,
      titleAr: '9. استفسار عن شاغر تدريب مهني (Anfrage nach Ausbildungsplatz)',
      titleDe: 'E-Mail an einen Betrieb: Anfrage nach freiem Ausbildungsplatz',
      scenarioDe: 'Sie möchten im September eine Ausbildung (z. B. als Fachinformatiker, Mechatroniker oder Pflegefachmann) bei der Firma „AutoTech GmbH“ beginnen. Schreiben Sie eine höfliche Anfrage per E-Mail an die Personalabteilung.',
      scenarioAr: 'تريد في شهر سبتمبر بدء تدريب مهني (Ausbildung — مثلاً في تكنولوجيا المعلومات أو الميكاترونيكس أو التمريض) لدى شركة "AutoTech GmbH". اكتب إيميلاً رسمياً لقسم الموارد البشرية للاستفسار عن الشواغر.',
      leitpunkte: [
        {
          id: 'lp1',
          de: 'Sagen Sie, für welchen Ausbildungsberuf Sie sich interessieren.',
          ar: 'اذكر مجال التدريب المهني (Ausbildung) الذي تهتم به ومتى تريد البدء.',
          hintDe: 'ich interessiere mich sehr für eine Ausbildung ab September in Ihrem Unternehmen.',
          keywords: ['ausbildung', 'ausbildungsplatz', 'september', 'interessier', 'beruf', 'stelle', 'unternehmen', 'firma']
        },
        {
          id: 'lp2',
          de: 'Fragen Sie, ob für dieses Jahr noch Ausbildungsplätze frei sind.',
          ar: 'اسأل عما إذا كانت لا تزال هناك مقاعد تدريب شاغرة لهذا العام.',
          hintDe: 'Deshalb möchte ich höflich nachfragen, ob Sie noch freie Ausbildungsplätze haben.',
          keywords: ['frei', 'offen', 'platz', 'plätze', 'möglich', 'nachfrag', 'bewerb']
        },
        {
          id: 'lp3',
          de: 'Fragen Sie, wie und an wen Sie Ihre Bewerbungsunterlagen schicken dürfen.',
          ar: 'اسأل كيف ولمن يمكنك إرسال ملفات التقديم الخاصة بك (السيرة الذاتية والشهادات).',
          hintDe: 'Darf ich Ihnen meine Bewerbungsunterlagen per E-Mail zusenden?',
          keywords: ['unterlagen', 'lebenslauf', 'bewerbung', 'per e-mail', 'email', 'schicken', 'senden', 'ansprechpartner']
        }
      ],
      taskRedemittel: [
        { de: 'Sehr geehrte Damen und Herren,', ar: 'السيدات والسادة الكرام،' },
        { de: 'mit großem Interesse habe ich auf Ihrer Webseite gelesen, dass Ihr Unternehmen Ausbildungen anbietet.', ar: 'ببالغ الاهتمام قرأت على موقعكم الإلكتروني أن شركتكم تقدم برامج تدريب مهني.' },
        { de: 'Könnten Sie mir bitte mitteilen, ob für September noch ein Ausbildungsplatz frei ist?', ar: 'هل يمكنكم إخباري ما إذا كان لا يزال هناك مقعد تدريب شاغر لشهر سبتمبر؟' },
        { de: 'Sehr gerne sende ich Ihnen meine vollständigen Bewerbungsunterlagen per E-Mail zu.', ar: 'بكل سرور أرسل لكم ملفات التقديم الكاملة الخاصة بي عبر البريد الإلكتروني.' }
      ],
      modelAnswer: `Sehr geehrte Damen und Herren,\n\nmit großem Interesse habe ich auf Ihrer Webseite gelesen, dass Ihr Unternehmen junge Fachkräfte ausbildet. Da ich sehr motiviert bin und über gute Deutschkenntnisse verfüge, möchte ich Sie höflich fragen, ob für September noch ein Ausbildungsplatz frei ist. Darf ich Ihnen meine Bewerbungsunterlagen per E-Mail zusenden?\n\nÜber eine kurze Rückmeldung freue ich mich sehr.\n\nMit freundlichen Grüßen\nDhyaa`,
      modelAnswerAr: `السيدات والسادة الكرام،\n\nببالغ الاهتمام قرأت على موقعكم الإلكتروني أن شركتكم تدرب الكوادر الشابة. ونظراً لأنني متحمس جداً وأمتلك مهارات جيدة في اللغة الألمانية، أود أن أسألكم بلطف عما إذا كان لا يزال هناك مقعد تدريب مهني شاغر لشهر سبتمبر. هل يُسمح لي بإرسال ملفات التقديم الخاصة بي عبر البريد الإلكتروني؟\n\nسأسعد كثيراً برد موجز منكم.\n\nمع خالص التحيات\nضياء`
    },

    {
      id: 'ausbildung-anschreiben',
      category: 'ausbildung',
      level: 'Ausbildung — Bewerbungsanschreiben',
      register: 'formell',
      registerLabelAr: 'خطاب تقديم رسمي (Bewerbung)',
      registerLabelDe: 'Formelles Anschreiben (Sie)',
      minWords: 60,
      maxWords: 90,
      titleAr: '10. خطاب تقديم مختصر للتدريب المهني (Kurzes Bewerbungsanschreiben)',
      titleDe: 'Bewerbungs-E-Mail um einen Ausbildungsplatz',
      scenarioDe: 'Die Firma „Klinikum & Technik Süd“ sucht Auszubildende für das kommende Ausbildungsjahr. Frau Schneider ist die Ansprechpartnerin. Schreiben Sie eine überzeugende Bewerbungs-E-Mail.',
      scenarioAr: 'تبحث مؤسسة "Klinikum & Technik Süd" عن متدربين (Auszubildende) للسنة التدريبية القادمة، والمسؤولة هي السيدة "شنايدر" (Frau Schneider). اكتب إيميل تقديم مقنع ومرتب.',
      leitpunkte: [
        {
          id: 'lp1',
          de: 'Beziehen Sie sich auf die Stellenanzeige und nennen Sie Ihr Ziel (Bewerbung).',
          ar: 'أشر إلى إعلان الوظيفة واذكر رغبتك في التقدم لمقعد التدريب المهني.',
          hintDe: 'mit großem Interesse habe ich Ihre Anzeige gelesen und bewerbe mich hiermit um einen Ausbildungsplatz.',
          keywords: ['anzeige', 'bewerb', 'ausbildungsplatz', 'ausbildung', 'stelle', 'hiermit', 'interesse']
        },
        {
          id: 'lp2',
          de: 'Beschreiben Sie Ihre Stärken, Motivation und Deutschkenntnisse.',
          ar: 'اذكر نقاط قوتك، حماسك، ومستواك في اللغة الألمانية.',
          hintDe: 'Ich lerne schnell, arbeite gerne im Team und habe bereits gute Deutschkenntnisse auf dem Niveau B1.',
          keywords: ['deutsch', 'b1', 'b2', 'motivier', 'team', 'zuverlässig', 'erfahrung', 'schule', 'abschl', 'lern']
        },
        {
          id: 'lp3',
          de: 'Verweisen Sie auf die Anhänge (Lebenslauf, Zeugnisse) und bitten Sie um ein Gespräch.',
          ar: 'أشر إلى المرفقات (السيرة الذاتية والشهادات) وعبّر عن سعادتك بمقابلة شخصية.',
          hintDe: 'Im Anhang finden Sie meinen Lebenslauf. Über eine Einladung zu einem persönlichen Gespräch freue ich mich sehr.',
          keywords: ['anhang', 'lebenslauf', 'zeugnis', 'unterlagen', 'gespräch', 'vorstellungsgespräch', 'einladung', 'kennenlernen']
        }
      ],
      taskRedemittel: [
        { de: 'Sehr geehrte Frau Schneider,', ar: 'السيدة الفاضلة شنايدر،' },
        { de: 'mit großem Interesse habe ich Ihre Stellenanzeige gelesen und bewerbe mich hiermit um einen Ausbildungsplatz in Ihrem Betrieb.', ar: 'ببالغ الاهتمام قرأت إعلانكم الوظيفي وأتقدم بموجب هذا بطلب للحصول على مقعد تدريب مهني في مؤسستكم.' },
        { de: 'Ich bin sehr zuverlässig, arbeite gerne im Team und verfüge über gute Deutschkenntnisse (Niveau B1).', ar: 'أنا شخص يعتمد عليه جداً، أحب العمل ضمن فريق وأمتلك مهارات جيدة في الألمانية (مستوى B1).' },
        { de: 'Im Anhang sende ich Ihnen meinen Lebenslauf sowie meine Zeugnisse.', ar: 'أرسل لكم في المرفقات سيرتي الذاتية وكذلك شهاداتي.' },
        { de: 'Über eine Einladung zu einem persönlichen Vorstellungsgespräch freue ich mich sehr.', ar: 'سأسعد كثيراً بدعوتي لإجراء مقابلة عمل شخصية.' }
      ],
      modelAnswer: `Sehr geehrte Frau Schneider,\n\nmit großem Interesse habe ich Ihre Stellenanzeige im Internet gelesen und bewerbe mich hiermit um einen Ausbildungsplatz in Ihrem Unternehmen.\n\nDieser Beruf passt sehr gut zu mir, weil ich zuverlässig bin, schnell lerne und sehr gerne im Team arbeite. Außerdem verfüge ich über gute Deutschkenntnisse auf dem Niveau B1.\n\nIm Anhang sende ich Ihnen meinen Lebenslauf und meine Zeugnisse. Über eine Einladung zu einem Vorstellungsgespräch freue ich mich sehr.\n\nMit freundlichen Grüßen\nDhyaa`,
      modelAnswerAr: `السيدة الفاضلة شنايدر،\n\nببالغ الاهتمام قرأت إعلانكم الوظيفي على الإنترنت وأتقدم بموجب هذا بطلب للحصول على مقعد تدريب مهني في شركتكم.\n\nهذه المهنة تناسبني جيداً لأنني شخص يعتمد عليه، أتعلم بسرعة وأحب العمل ضمن فريق. علاوة على ذلك أمتلك مهارات جيدة في اللغة الألمانية بمستوى B1.\n\nأرسل لكم في المرفقات سيرتي الذاتية وشهاداتي. سأسعد كثيراً بدعوتي لإجراء مقابلة عمل شخصية.\n\nمع خالص التحيات\nضياء`
    },

    {
      id: 'ausbildung-interview',
      category: 'ausbildung',
      level: 'Ausbildung — Vorstellungsgespräch',
      register: 'formell',
      registerLabelAr: 'رسمي Formell (Sie)',
      registerLabelDe: 'Formell (Sie)',
      minWords: 40,
      maxWords: 60,
      titleAr: '11. تأكيد موعد مقابلة عمل أو تدريب (Vorstellungsgespräch bestätigen)',
      titleDe: 'Einladung zum Vorstellungsgespräch bestätigen',
      scenarioDe: 'Herr Becker von der Firma „MediCare“ hat Sie für nächsten Mittwoch um 14:00 Uhr zu einem Online-Vorstellungsgespräch (über Zoom/Teams) eingeladen. Bestätigen Sie den Termin per E-Mail.',
      scenarioAr: 'قام السيد "بيكر" (Herr Becker) من شركة "MediCare" بدعوتك لإجراء مقابلة عمل عبر الإنترنت (Online-Vorstellungsgespräch) يوم الأربعاء القادم الساعة 14:00. اكتب إيميلاً رسمياً لتأكيد الموعد.',
      leitpunkte: [
        {
          id: 'lp1',
          de: 'Bedanken Sie sich herzlich für die Einladung.',
          ar: 'اشكره بصدق على الدعوة لمقابلة العمل.',
          hintDe: 'vielen Dank für Ihre freundliche E-Mail und die Einladung zum Vorstellungsgespräch.',
          keywords: ['dank', 'einladung', 'vorstellungsgespräch', 'gespräch', 'gefreut', 'freue']
        },
        {
          id: 'lp2',
          de: 'Bestätigen Sie den Termin am Mittwoch um 14:00 Uhr verbindlich.',
          ar: 'أكّد حضورك للموعد يوم الأربعاء الساعة 14:00.',
          hintDe: 'Hiermit bestätige ich den Termin am kommenden Mittwoch um 14:00 Uhr sehr gerne.',
          keywords: ['bestätig', 'mittwoch', '14', 'uhr', 'termin', 'nehme', 'teil', 'gerne', 'passt']
        },
        {
          id: 'lp3',
          de: 'Fragen Sie höflich nach dem Zugangslink oder ob Sie noch Dokumente vorbereiten sollen.',
          ar: 'اسأل بلطف عن رابط الاجتماع (Link) أو ما إذا كان يجب تحضير مستندات إضافية.',
          hintDe: 'Könnten Sie mir bitte vorab den Link für das Online-Meeting zusenden?',
          keywords: ['link', 'online', 'zoom', 'teams', 'meeting', 'unterlagen', 'dokument', 'frage', 'vorbereit']
        }
      ],
      taskRedemittel: [
        { de: 'Sehr geehrter Herr Becker,', ar: 'السيد الفاضل بيكر،' },
        { de: 'vielen Dank für Ihre Rückmeldung und die Einladung zum Vorstellungsgespräch, über die ich mich sehr gefreut habe.', ar: 'شكراً جزيلاً على ردكم والدعوة لمقابلة العمل التي أسعدتني كثيراً.' },
        { de: 'Hiermit bestätige ich Ihnen gerne den Termin am kommenden Mittwoch um 14:00 Uhr.', ar: 'بموجب هذا أؤكد لحضرتكم بكل سرور الموعد يوم الأربعاء القادم الساعة 14:00.' },
        { de: 'Könnten Sie mir bitte noch den Link für das Online-Gespräch zusenden?', ar: 'هل يمكنكم من فضلكم إرسال رابط المقابلة الإلكترونية لي؟' }
      ],
      modelAnswer: `Sehr geehrter Herr Becker,\n\nvielen Dank für Ihre freundliche Nachricht und die Einladung zum Vorstellungsgespräch. Ich habe mich sehr darüber gefreut und bestätige hiermit gerne den Termin am kommenden Mittwoch um 14:00 Uhr. Könnten Sie mir bitte noch den Zugangslink für das Online-Gespräch zusenden?\n\nIch freue mich darauf, Sie kennenzulernen!\n\nMit freundlichen Grüßen\nDhyaa`,
      modelAnswerAr: `السيد الفاضل بيكر،\n\nشكراً جزيلاً على رسالتكم اللطيفة والدعوة لمقابلة العمل. لقد فرحت جداً بذلك وأؤكد بموجب هذا بكل سرور الموعد يوم الأربعاء القادم الساعة 14:00. هل يمكنكم من فضلكم إرسال رابط الدخول للمقابلة الإلكترونية لي؟\n\nأتطلع للتعرف عليكم!\n\nمع خالص التحيات\nضياء`
    },

    {
      id: 'ausbildung-praktikum',
      category: 'ausbildung',
      level: 'Ausbildung — Schnupperpraktikum',
      register: 'formell',
      registerLabelAr: 'رسمي Formell (Sie)',
      registerLabelDe: 'Formell (Sie)',
      minWords: 45,
      maxWords: 70,
      titleAr: '12. طلب فرصة تدريب عملي تجريبي (Bewerbung um ein Praktikum)',
      titleDe: 'Anfrage / Bewerbung um ein zweiwöchiges Praktikum',
      scenarioDe: 'Vor Beginn Ihrer Ausbildung möchten Sie ein zweiwöchiges Praktikum in einem deutschen Betrieb machen, um praktische Erfahrungen zu sammeln. Schreiben Sie eine E-Mail an die Firma „NordBau GmbH“.',
      scenarioAr: 'قبل بدء التدريب المهني ترغب في عمل تدريب عملي تجريبي (Praktikum) لمدة أسبوعين في شركة ألمانية لاكتساب خبرة عملية. اكتب إيميلاً رسمياً لشركة "NordBau GmbH".',
      leitpunkte: [
        {
          id: 'lp1',
          de: 'Sagen Sie, dass Sie ein zweiwöchiges Praktikum machen möchten und warum.',
          ar: 'اذكر أنك ترغب في إجراء تدريب عملي (Praktikum) لمدة أسبوعين ولماذا.',
          hintDe: 'ich möchte mich gerne um ein zweiwöchiges Praktikum bewerben, um Ihren Betrieb kennenzulernen.',
          keywords: ['praktikum', 'wochen', 'zweiwöchig', 'erfahrung', 'kennenlernen', 'betrieb', 'beruf', 'arbeiten']
        },
        {
          id: 'lp2',
          de: 'Nennen Sie den gewünschten Zeitraum (wann Sie Zeit haben).',
          ar: 'حدد الفترة الزمنية التي ترغب فيها بإجراء التدريب (مثلاً في الشهر القادم).',
          hintDe: 'Das Praktikum könnte ich im nächsten Monat vom 1. bis zum 14. machen.',
          keywords: ['monat', 'zeitraum', 'ab ', 'vom', 'bis', 'woche', 'anfang', 'jederzeit', 'wann']
        },
        {
          id: 'lp3',
          de: 'Verweisen Sie auf Ihren Lebenslauf im Anhang.',
          ar: 'أشر إلى سيرتك الذاتية المرفقة في الإيميل.',
          hintDe: 'Meinen Lebenslauf finden Sie im Anhang dieser E-Mail.',
          keywords: ['lebenslauf', 'anhang', 'unterlagen', 'zeugnis', 'beigefügt', 'anbei', 'mitschick']
        }
      ],
      taskRedemittel: [
        { de: 'Sehr geehrte Damen und Herren,', ar: 'السيدات والسادة الكرام،' },
        { de: 'da ich mich sehr für eine spätere Ausbildung in Ihrem Unternehmen interessiere, möchte ich gerne ein zweiwöchiges Praktikum bei Ihnen machen.', ar: 'نظراً لاهتمامي الشديد بتدريب مهني لاحق في شركتكم، أود بكل سرور إجراء تدريب عملي لمدة أسبوعين لديكم.' },
        { de: 'Dadurch möchte ich praktische Erfahrungen sammeln und Ihren Arbeitsalltag kennenlernen.', ar: 'من خلال ذلك أود اكتساب خبرات عملية والتعرف على يوميات العمل لديكم.' },
        { de: 'Ich könnte das Praktikum flexibel im nächsten Monat beginnen; meinen Lebenslauf finden Sie im Anhang.', ar: 'يمكنني بدء التدريب بمرونة في الشهر القادم؛ وتجدون سيرتي الذاتية في المرفقات.' }
      ],
      modelAnswer: `Sehr geehrte Damen und Herren,\n\nda ich mich sehr für eine Ausbildung in Ihrem Betrieb interessiere, möchte ich Sie höflich fragen, ob ich bei Ihnen ein zweiwöchiges Praktikum machen kann. Dadurch möchte ich praktische Erfahrungen sammeln und Ihr Team kennenlernen. Ich hätte im nächsten Monat jederzeit Zeit. Meinen Lebenslauf sende ich Ihnen im Anhang mit.\n\nÜber eine positive Antwort freue ich mich sehr.\n\nMit freundlichen Grüßen\nDhyaa`,
      modelAnswerAr: `السيدات والسادة الكرام،\n\nنظراً لأنني مهتم جداً بالتدريب المهني في مؤسستكم، أود أن أسألكم بلطف عما إذا كان بإمكاني إجراء تدريب عملي لمدة أسبوعين لديكم. من خلال ذلك أود اكتساب خبرات عملية والتعرف على فريقكم. لدي وقت في أي وقت خلال الشهر القادم. أرسل لكم سيرتي الذاتية في المرفقات.\n\nسأسعد كثيراً برد إيجابي منكم.\n\nمع خالص التحيات\nضياء`
    }
  ],

  // ===========================================================================
  // INITIALIZATION & HELPERS
  // ===========================================================================

  getCurrentTask() {
    return this.tasks.find(t => t.id === this.state.activeTaskId) || this.tasks[0];
  },

  getDrafts() {
    try {
      const raw = localStorage.getItem(this.STORAGE_DRAFTS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  },

  getDraft(taskId) {
    const drafts = this.getDrafts();
    return drafts[taskId] || '';
  },

  saveDraft(taskId, text) {
    try {
      const drafts = this.getDrafts();
      drafts[taskId] = text;
      localStorage.setItem(this.STORAGE_DRAFTS_KEY, JSON.stringify(drafts));
    } catch (e) {
      console.warn('Could not save writing draft:', e);
    }
  },

  getTaskScores() {
    try {
      const raw = localStorage.getItem(this.STORAGE_SCORES_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  },

  saveTaskScore(taskId, score) {
    try {
      const scores = this.getTaskScores();
      const prev = scores[taskId] || 0;
      if (score >= prev) {
        scores[taskId] = score;
        localStorage.setItem(this.STORAGE_SCORES_KEY, JSON.stringify(scores));
      }
    } catch (e) {
      console.warn('Could not save task score:', e);
    }
  },

  countWords(text) {
    if (!text || !text.trim()) return 0;
    return text
      .trim()
      .split(/\s+/)
      .filter(w => w.replace(/[.,!?;:()"'«»\-–—]/g, '').length > 0).length;
  },

  checkLeitpunktCovered(text, leitpunkt) {
    if (!text || !text.trim()) return false;
    const lower = text.toLowerCase();
    return leitpunkt.keywords.some(kw => lower.includes(kw.toLowerCase()));
  },

  // ===========================================================================
  // MAIN RENDER ENTRYPOINT
  // ===========================================================================

  render(container) {
    const target = container || document.getElementById('app-content');
    if (!target) return;

    const isDe = window.I18n && window.I18n.isGerman();
    const task = this.getCurrentTask();
    const draft = this.getDraft(task.id);
    const wordCount = this.countWords(draft);
    const scores = this.getTaskScores();
    const completedCount = Object.keys(scores).filter(k => scores[k] >= 60).length;

    const filteredTasks = this.state.activeCategory === 'all'
      ? this.tasks
      : this.tasks.filter(t => t.category === this.state.activeCategory);

    // Get Redemittel for current task's register
    const registerKey = task.register === 'forum' ? 'forum' : (task.register === 'formell' ? 'formell' : 'informell');
    const bank = this.redemittelBank[registerKey] || this.redemittelBank.informell;
    const currentPhrases = bank[this.state.activeRedemittelTab] || [];

    target.innerHTML = `
      <div class="schreiben-studio-wrapper" style="max-width: 1120px; margin: 0 auto; padding-bottom: 48px;">
        
        <!-- Top Hero Banner -->
        <div style="background: linear-gradient(135deg, #4F46E5 0%, #2563EB 60%, #0EA5E9 100%); color: #fff; border-radius: var(--radius-lg); padding: 24px 28px; margin-bottom: 22px; box-shadow: var(--shadow-md); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
          <div>
            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.18); padding: 4px 12px; border-radius: 999px; font-size: 0.82rem; font-weight: 700; margin-bottom: 8px;">
              <span>✉️ Goethe A2 / B1 & Ausbildung</span>
              <span>•</span>
              <span>${completedCount} / ${this.tasks.length} ${isDe ? 'Aufgaben gemeistert' : 'مهام مكتملة'}</span>
            </div>
            <h1 style="font-size: 1.55rem; font-weight: 800; margin: 0 0 6px 0;">
              ${isDe ? '✉️ E-Mail & Schreiben-Baukasten' : '✉️ مدرب كتابة الإيميلات والرسائل الألمانية'}
            </h1>
            <p style="margin: 0; font-size: 0.95rem; opacity: 0.92; max-width: 720px; line-height: 1.6;">
              ${isDe
                ? 'Trainiere alle 12 offiziellen Schreibaufgaben für Goethe A2, B1 und Bewerbungen um eine Ausbildung mit Live-Leitpunkt-Prüfung, Redemittel-Baukasten und Sofort-Korrektur.'
                : 'تدرّب عملياً على كتابة الإيميلات الرسمية والشخصية ومهام امتحان Goethe A2 / B1 وطلبات التدريب المهني (Ausbildung) مع صندوق العبارات الجاهزة والمصحح الذكي الفوري.'}
            </p>
          </div>
          <div style="display: flex; gap: 10px; align-items: center;">
            <a href="#/home" class="btn btn-sm" style="background: rgba(255,255,255,0.2); color: #fff; border: 1px solid rgba(255,255,255,0.35); text-decoration: none; font-weight: 700; padding: 8px 14px; border-radius: var(--radius-sm);">
              🏠 ${isDe ? 'Startseite' : 'الرئيسية'}
            </a>
          </div>
        </div>

        <!-- Category Filter Tabs -->
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
          ${this.categories.map(cat => {
            const active = this.state.activeCategory === cat.id;
            return `
              <button type="button"
                onclick="SchreibenTrainer.selectCategory('${cat.id}')"
                style="padding: 9px 16px; border-radius: 999px; font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: all 0.15s ease; border: 1.5px solid ${active ? 'var(--accent)' : 'var(--border)'}; background: ${active ? 'var(--accent)' : 'var(--bg-card)'}; color: ${active ? '#fff' : 'var(--text-primary)'};">
                ${cat.icon} ${isDe ? cat.titleDe : cat.titleAr}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Task Selector Cards Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(245px, 1fr)); gap: 10px; margin-bottom: 24px;">
          ${filteredTasks.map(t => {
            const isSelected = t.id === task.id;
            const bestScore = scores[t.id];
            const hasDraft = Boolean(this.getDraft(t.id).trim());
            const regBadgeColor = t.register === 'formell' ? '#2563EB' : (t.register === 'forum' ? '#7C3AED' : '#059669');
            return `
              <div onclick="SchreibenTrainer.selectTask('${t.id}')"
                style="cursor: pointer; background: ${isSelected ? 'var(--accent-light)' : 'var(--bg-card)'}; border: 2px solid ${isSelected ? 'var(--accent)' : 'var(--border)'}; border-radius: var(--radius-md); padding: 12px 14px; transition: all 0.15s ease; display: flex; flex-direction: column; justify-content: space-between; gap: 8px; box-shadow: ${isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)'};">
                <div>
                  <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px; margin-bottom: 6px;">
                    <span style="font-size: 0.74rem; font-weight: 800; padding: 2px 8px; border-radius: 999px; background: ${regBadgeColor}18; color: ${regBadgeColor};">
                      ${Utils.escapeHtml(t.level)}
                    </span>
                    ${bestScore !== undefined
                      ? `<span style="font-size: 0.76rem; font-weight: 800; color: ${bestScore >= 80 ? 'var(--success)' : 'var(--warning)'};">✅ ${bestScore}/100</span>`
                      : (hasDraft ? `<span style="font-size: 0.74rem; color: var(--text-muted);">📝 مسودة محفوظة</span>` : '')}
                  </div>
                  <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-primary); line-height: 1.4;">
                    ${Utils.escapeHtml(isDe ? t.titleDe : t.titleAr)}
                  </div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.76rem; color: var(--text-muted); border-top: 1px dashed var(--border); padding-top: 6px;">
                  <span>${t.register === 'formell' ? '👔 رسمي (Sie)' : (t.register === 'forum' ? '💬 منتدى (ihr)' : '👋 صديق (du)')}</span>
                  <span>🎯 ${t.minWords}–${t.maxWords} كلمة</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- =============================================================== -->
        <!-- ACTIVE WRITING TASK STUDIO                                      -->
        <!-- =============================================================== -->
        <div style="background: var(--bg-card); border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-md);">
          
          <!-- 1. Situation Header -->
          <div style="border-bottom: 1.5px solid var(--border); padding-bottom: 18px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
              <div>
                <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-bottom: 8px;">
                  <span style="background: var(--accent); color: #fff; font-size: 0.78rem; font-weight: 800; padding: 3px 10px; border-radius: 999px;">
                    ${Utils.escapeHtml(task.level)}
                  </span>
                  <span style="background: ${task.register === 'formell' ? '#DBEAFE' : '#D1FAE5'}; color: ${task.register === 'formell' ? '#1E40AF' : '#065F46'}; font-size: 0.8rem; font-weight: 800; padding: 3px 12px; border-radius: 999px;">
                    ${task.register === 'formell' ? '👔 ' : '👋 '}${Utils.escapeHtml(isDe ? task.registerLabelDe : task.registerLabelAr)}
                  </span>
                  <span style="background: var(--bg-primary); border: 1px solid var(--border); color: var(--text-secondary); font-size: 0.8rem; font-weight: 700; padding: 3px 10px; border-radius: 999px;">
                    📏 ${isDe ? `Ziel: ${task.minWords}–${task.maxWords} Wörter` : `الهدف المطلوب: ${task.minWords}–${task.maxWords} كلمة`}
                  </span>
                </div>
                <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--text-primary); margin: 0;">
                  ${Utils.escapeHtml(isDe ? task.titleDe : task.titleAr)}
                </h2>
              </div>

              <button type="button" class="btn btn-secondary btn-sm audio-btn"
                onclick="Speech.speak(${ JSON.stringify(task.scenarioDe).replace(/"/g, '&quot;') })"
                style="display: inline-flex; align-items: center; gap: 6px; font-weight: 700;">
                🔊 ${isDe ? 'Aufgabe anhören' : 'استمع لنص المهمة'}
              </button>
            </div>

            <!-- German Scenario Box + Arabic Scenario Box -->
            <div style="background: var(--bg-primary); border: 1px solid var(--border); border-right: 4px solid var(--accent); border-radius: var(--radius-md); padding: 14px 16px;">
              <div class="de-text" dir="ltr" style="font-weight: 700; font-size: 1.02rem; color: var(--text-primary); margin-bottom: 6px; line-height: 1.55;">
                📋 <strong>Situation:</strong> ${Utils.escapeHtml(task.scenarioDe)}
              </div>
              <div style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
                🇸🇦 <strong>الموقف المطلوب:</strong> ${Utils.escapeHtml(task.scenarioAr)}
              </div>
            </div>
          </div>

          <!-- 2. The 3 Required Leitpunkte (Live Checked) -->
          <div style="margin-bottom: 22px;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
              <h3 style="font-size: 1.02rem; font-weight: 800; color: var(--text-primary); margin: 0;">
                🎯 ${isDe ? 'Die 3 Pflicht-Leitpunkte (automatische Live-Prüfung):' : 'النقاط الثلاث المطلوبة في الامتحان (Leitpunkte — يتم التحقق منها تلقائياً أثناء كتابتك):'}
              </h3>
              <span style="font-size: 0.8rem; color: var(--text-muted);">
                ${isDe ? 'Tipp: Klicke auf „+ Hilfe“, um einen Beispielsatz einzufügen' : 'نصيحة: اضغط على "+ مساعدة" لإدراج جملة مساعدة لأي نقطة'}
              </span>
            </div>

            <div id="schreiben-leitpunkte-list" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
              ${this.renderLeitpunkteCards(task, draft)}
            </div>
          </div>

          <!-- 3. Interactive Redemittel-Baukasten (4 Tabs + Task Specific) -->
          <div style="background: var(--bg-primary); border: 1.5px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 22px;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
              <div>
                <h3 style="font-size: 1rem; font-weight: 800; color: var(--text-primary); margin: 0;">
                  🧰 ${isDe ? 'Redemittel-Baukasten (Klicken zum Einfügen)' : 'صندوق العبارات الذهبية الجاهزة (Redemittel-Baukasten)'}
                </h3>
                <p style="margin: 2px 0 0 0; font-size: 0.82rem; color: var(--text-muted);">
                  ${isDe
                    ? 'Wähle passende Bausteine für deine E-Mail aus — höre sie mit 🔊 an oder füge sie direkt in deinen Text ein.'
                    : 'اختر العبارة المناسبة لمستوى الرسالة — استمع لنطقها عبر 🔊 أو اضغط (+ إدراج) لإضافتها فوراً في مكان المؤشر.'}
                </p>
              </div>
            </div>

            <!-- 4 Redemittel Category Tabs + Task-Specific Tab -->
            <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px; border-bottom: 1px solid var(--border); padding-bottom: 10px;">
              ${[
                { id: 'anrede', labelAr: '1. التحية (Anrede)', labelDe: '1. Anrede' },
                { id: 'einleitung', labelAr: '2. المقدمة والسبب (Einleitung)', labelDe: '2. Einleitung' },
                { id: 'hauptteil', labelAr: '3. الروابط والعرض (Hauptteil & Konnektoren)', labelDe: '3. Hauptteil & Konnektoren' },
                { id: 'schluss', labelAr: '4. الخاتمة والتوقيع (Schluss & Grußformel)', labelDe: '4. Schluss & Grußformel' },
                { id: 'task', labelAr: '⭐ عبارات مخصصة لهذه المهمة', labelDe: '⭐ Aufgaben-Sätze' }
              ].map(tab => {
                const isTabActive = this.state.activeRedemittelTab === tab.id;
                return `
                  <button type="button"
                    onclick="SchreibenTrainer.selectRedemittelTab('${tab.id}')"
                    style="padding: 6px 12px; border-radius: var(--radius-sm); font-size: 0.84rem; font-weight: 700; cursor: pointer; border: 1.5px solid ${isTabActive ? 'var(--accent)' : 'var(--border)'}; background: ${isTabActive ? 'var(--accent)' : 'var(--bg-card)'}; color: ${isTabActive ? '#fff' : 'var(--text-primary)'};">
                    ${isDe ? tab.labelDe : tab.labelAr}
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Phrase Chips List -->
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(310px, 1fr)); gap: 10px;">
              ${(this.state.activeRedemittelTab === 'task' ? task.taskRedemittel : currentPhrases).map(item => {
                const safeDe = item.de.replace(/\n/g, ' ');
                return `
                  <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 10px 12px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px;">
                    <div>
                      <div class="de-text" dir="ltr" style="font-weight: 700; font-size: 0.92rem; color: var(--text-primary); white-space: pre-line; line-height: 1.4;">${Utils.escapeHtml(item.de)}</div>
                      <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">${Utils.escapeHtml(item.ar)}</div>
                    </div>
                    <div style="display: flex; justify-content: flex-end; gap: 6px;">
                      <button type="button" class="btn btn-secondary btn-sm audio-btn"
                        onclick="Speech.speak(${JSON.stringify(safeDe).replace(/"/g, '&quot;')})"
                        title="استمع للنطق الألماني"
                        style="padding: 4px 9px; font-size: 0.8rem;">
                        🔊
                      </button>
                      <button type="button" class="btn btn-primary btn-sm"
                        onclick="SchreibenTrainer.insertPhrase(${JSON.stringify(item.de).replace(/"/g, '&quot;')})"
                        style="padding: 4px 10px; font-size: 0.8rem; font-weight: 700;">
                        + ${isDe ? 'Einfügen' : 'إدراج في النص'}
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- 4. Voice Dictation, Umlaut Toolbar & Live Editor -->
          <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 10px;">
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                <label for="schreiben-textarea" style="font-weight: 800; font-size: 1rem; color: var(--text-primary);">
                  ✍️ ${isDe ? 'Dein E-Mail-Entwurf (Deutsch):' : 'مسودة رسالتك بالألمانية:'}
                </label>
                <!-- German Umlaut Quick Buttons -->
                <div style="display: inline-flex; gap: 4px; flex-wrap: wrap;" dir="ltr">
                  ${['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map(ch => `
                    <button type="button"
                      onclick="SchreibenTrainer.insertChar('${ch}')"
                      style="width: 30px; height: 28px; border-radius: 6px; border: 1px solid var(--border); background: var(--bg-primary); color: var(--text-primary); font-weight: 700; font-family: var(--font-de); cursor: pointer;">
                      ${ch}
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- Action Buttons: Voice Dictation + Read Aloud My Draft + Clear -->
              <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                <button type="button" class="btn btn-secondary btn-sm audio-btn"
                  onclick="SchreibenTrainer.dictate(this)"
                  style="display: inline-flex; align-items: center; gap: 6px; font-weight: 700; border-color: var(--accent); color: var(--accent);">
                  🎤 ${isDe ? 'Spracheingabe' : 'إملاء صوتي'}
                </button>
                <button type="button" class="btn btn-secondary btn-sm audio-btn"
                  onclick="SchreibenTrainer.speakMyDraft()"
                  style="display: inline-flex; align-items: center; gap: 6px; font-weight: 700;">
                  🔊 ${isDe ? 'Meinen Text vorlesen' : 'اقرأ رسالتي صوتياً'}
                </button>
                <button type="button" class="btn btn-secondary btn-sm"
                  onclick="SchreibenTrainer.clearDraft()"
                  style="font-size: 0.8rem; color: var(--danger);">
                  🗑️ ${isDe ? 'Leeren' : 'مسح المسودة'}
                </button>
              </div>
            </div>

            <!-- Large LTR German Textarea -->
            <textarea
              id="schreiben-textarea"
              lang="de"
              dir="ltr"
              rows="8"
              placeholder="Schreiben Sie hier Ihre E-Mail oder Nachricht auf Deutsch ..."
              oninput="SchreibenTrainer.onTextInput(this.value)"
              style="width: 100%; padding: 16px; border: 2px solid var(--border); border-radius: var(--radius-md); background: var(--bg-primary); color: var(--text-primary); font-family: var(--font-de); font-size: 1.05rem; line-height: 1.65; resize: vertical; outline: none; transition: border-color 0.15s ease;"
              onfocus="this.style.borderColor='var(--accent)'"
              onblur="this.style.borderColor='var(--border)'"
            >${Utils.escapeHtml(draft)}</textarea>

            <!-- Live Word Counter & Status Footer -->
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-top: 8px;">
              <div id="schreiben-word-counter" style="font-size: 0.88rem; font-weight: 700;">
                ${this.renderWordCounterHtml(wordCount, task.minWords, task.maxWords)}
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">
                💾 ${isDe ? 'Entwurf wird automatisch gespeichert' : 'يتم حفظ مسودتك تلقائياً أثناء الكتابة'}
              </div>
            </div>
          </div>

          <!-- 5. Smart Inspector & Model Answer Actions -->
          <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center; padding-top: 12px; border-top: 1.5px solid var(--border);">
            <button type="button" class="btn btn-primary"
              onclick="SchreibenTrainer.evaluateCurrentDraft()"
              style="padding: 12px 24px; font-weight: 800; font-size: 1rem; border-radius: var(--radius-md); cursor: pointer;">
              🔍 ${isDe ? 'Nachricht analysieren & Musterlösung zeigen ✓' : 'تحليل الرسالة وعرض النموذج المثالي ✓'}
            </button>

            <button type="button" class="btn btn-secondary"
              onclick="SchreibenTrainer.toggleModelAnswer()"
              style="padding: 12px 18px; font-weight: 700; font-size: 0.92rem; border-radius: var(--radius-md); cursor: pointer;">
              💡 ${isDe ? '100/100 Musterlösung direkt ansehen' : 'عرض النموذج المثالي (100/100) مباشرة'}
            </button>
          </div>

          <!-- 6. Evaluation Results & 100/100 Model Answer Panel -->
          <div id="schreiben-evaluation-container" style="margin-top: 22px;">
            ${this.renderEvaluationAndModelHtml(task)}
          </div>

        </div>
      </div>
    `;
  },

  // ===========================================================================
  // SUB-RENDERERS FOR LIVE UPDATES
  // ===========================================================================

  renderLeitpunkteCards(task, text) {
    const isDe = window.I18n && window.I18n.isGerman();
    return task.leitpunkte.map((lp, idx) => {
      const covered = this.checkLeitpunktCovered(text, lp);
      return `
        <div style="background: ${covered ? 'rgba(16, 185, 129, 0.08)' : 'var(--bg-primary)'}; border: 1.5px solid ${covered ? 'var(--success)' : 'var(--border)'}; border-radius: var(--radius-md); padding: 12px 14px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px; transition: all 0.2s ease;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px; margin-bottom: 6px;">
              <span style="font-size: 0.78rem; font-weight: 800; color: ${covered ? 'var(--success)' : 'var(--text-secondary)'};">
                ${covered
                  ? (isDe ? '✅ Punkt abgedeckt' : '✅ تم تغطية هذه النقطة')
                  : (isDe ? `⬜ Leitpunkt ${idx + 1} (noch offen)` : `⬜ النقطة ${idx + 1}: لم تُغطَّ بعد`)}
              </span>
              <button type="button"
                onclick="SchreibenTrainer.insertPhrase(${JSON.stringify(lp.hintDe).replace(/"/g, '&quot;')})"
                title="${Utils.escapeHtml(lp.hintDe)}"
                style="font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 6px; border: 1px solid var(--accent); background: transparent; color: var(--accent); cursor: pointer;">
                + ${isDe ? 'Hilfe-Satz' : 'إدراج جملة مساعدة'}
              </button>
            </div>
            <div class="de-text" dir="ltr" style="font-weight: 700; font-size: 0.9rem; color: var(--text-primary); margin-bottom: 4px;">
              ${idx + 1}. ${Utils.escapeHtml(lp.de)}
            </div>
            <div style="font-size: 0.84rem; color: var(--text-secondary);">
              ${Utils.escapeHtml(lp.ar)}
            </div>
          </div>
          <div class="de-text" dir="ltr" style="font-size: 0.75rem; color: var(--text-muted); border-top: 1px dashed var(--border); padding-top: 6px;">
            🔑 Schlüsselwörter: ${lp.keywords.slice(0, 4).map(k => `<code>${Utils.escapeHtml(k)}</code>`).join(', ')}
          </div>
        </div>
      `;
    }).join('');
  },

  renderWordCounterHtml(wordCount, minWords, maxWords) {
    const isDe = window.I18n && window.I18n.isGerman();
    let statusColor = 'var(--warning)';
    let statusText = isDe ? 'Noch etwas zu kurz' : 'أكمل الكتابة للوصول للعدد المطلوب';

    if (wordCount >= minWords && wordCount <= maxWords + 15) {
      statusColor = 'var(--success)';
      statusText = isDe ? 'Perfekte Wortanzahl! ✓' : 'عدد الكلمات مثالي للامتحان! ✓';
    } else if (wordCount > maxWords + 15) {
      statusColor = 'var(--accent)';
      statusText = isDe ? 'Ausführlicher Text ✓' : 'نص وافٍ ومفصّل ✓';
    } else if (wordCount === 0) {
      statusColor = 'var(--text-muted)';
      statusText = isDe ? 'Beginne zu schreiben oder nutze den Baukasten' : 'ابدأ الكتابة أو اختر عبارات من الصندوق أعلاه';
    }

    return `
      <span style="color: ${statusColor};">
        📊 ${isDe ? `Wortanzahl: ${wordCount} / Ziel: ${minWords}–${maxWords} Wörter` : `عدد الكلمات: ${wordCount} / الهدف: ${minWords}–${maxWords} كلمة`}
        <span style="margin-right: 8px; font-weight: 600;">(${statusText})</span>
      </span>
    `;
  },

  renderEvaluationAndModelHtml(task) {
    const isDe = window.I18n && window.I18n.isGerman();
    const evalData = this.state.lastEvaluation;
    const showModel = this.state.showModelAnswer || Boolean(evalData);

    if (!evalData && !showModel) return '';

    let html = '';

    // 1. Smart Inspector Report (5 Criteria x 20 pts = 100 pts)
    if (evalData) {
      const scoreColor = evalData.totalScore >= 80
        ? 'var(--success)'
        : (evalData.totalScore >= 50 ? 'var(--warning)' : 'var(--danger)');

      html += `
        <div style="background: var(--bg-primary); border: 2px solid ${scoreColor}; border-radius: var(--radius-lg); padding: 20px; margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 12px;">
            <div>
              <h3 style="font-size: 1.18rem; font-weight: 800; color: var(--text-primary); margin: 0;">
                🔍 ${isDe ? 'Ergebnis der Text-Analyse (Goethe-Prüfungskriterien)' : 'تقرير تحليل وتصحيح الرسالة (معايير مصحح معهد جوته)'}
              </h3>
              <p style="margin: 4px 0 0 0; font-size: 0.88rem; color: var(--text-secondary);">
                ${Utils.escapeHtml(evalData.summaryAr)}
              </p>
            </div>
            <div style="background: ${scoreColor}; color: #fff; font-weight: 900; font-size: 1.35rem; padding: 8px 18px; border-radius: var(--radius-md); text-align: center;">
              ${evalData.totalScore} / 100
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr; gap: 10px;">
            ${evalData.criteria.map(c => `
              <div style="background: var(--bg-card); border: 1px solid var(--border); border-right: 4px solid ${c.passed ? 'var(--success)' : 'var(--warning)'}; border-radius: var(--radius-sm); padding: 12px 14px; display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 240px;">
                  <div style="font-weight: 800; font-size: 0.94rem; color: var(--text-primary); margin-bottom: 3px;">
                    ${c.passed ? '✅' : '💡'} ${Utils.escapeHtml(c.titleAr)}
                  </div>
                  <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
                    ${Utils.escapeHtml(c.feedbackAr)}
                  </div>
                </div>
                <div style="font-weight: 800; font-size: 0.9rem; color: ${c.passed ? 'var(--success)' : 'var(--warning)'}; white-space: nowrap;">
                  +${c.points} / 20
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // 2. 100/100 Model Answer (Musterlösung)
    if (showModel) {
      const cleanModelSpeech = task.modelAnswer.replace(/\n+/g, ' ');
      html += `
        <div style="background: linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, var(--bg-primary) 100%); border: 2px solid var(--success); border-radius: var(--radius-lg); padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 14px;">
            <div>
              <span style="background: var(--success); color: #fff; font-size: 0.76rem; font-weight: 800; padding: 3px 10px; border-radius: 999px;">
                🌟 100 / 100 Musterlösung
              </span>
              <h3 style="font-size: 1.12rem; font-weight: 800; color: var(--text-primary); margin: 6px 0 0 0;">
                ${isDe ? 'Perfekte Muster-E-Mail zum Vergleichen & Anhören' : 'النموذج المثالي الكامل (100/100) للمقارنة والاستماع'}
              </h3>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button type="button" class="btn btn-primary btn-sm audio-btn"
                onclick="Speech.speak(${JSON.stringify(cleanModelSpeech).replace(/"/g, '&quot;')})"
                style="display: inline-flex; align-items: center; gap: 6px; font-weight: 700;">
                🔊 ${isDe ? 'Musterlösung anhören' : 'استمع للنموذج الكامل'}
              </button>
              <button type="button" class="btn btn-secondary btn-sm"
                onclick="SchreibenTrainer.copyModelToEditor()"
                style="font-weight: 700;">
                📋 ${isDe ? 'In meinen Editor übernehmen' : 'نسخ النموذج إلى محرري للتدرب عليه'}
              </button>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 14px;">
            <!-- German Model Answer -->
            <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px;">
              <div style="font-size: 0.78rem; font-weight: 800; color: var(--accent); margin-bottom: 8px;">
                🇩🇪 DEUTSCHER MUSTERTEXT (${this.countWords(task.modelAnswer)} Wörter)
              </div>
              <div class="de-text" dir="ltr" style="font-family: var(--font-de); font-size: 1rem; font-weight: 600; color: var(--text-primary); white-space: pre-line; line-height: 1.65;">${Utils.escapeHtml(task.modelAnswer)}</div>
            </div>

            <!-- Arabic Translation -->
            <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px;">
              <div style="font-size: 0.78rem; font-weight: 800; color: var(--success); margin-bottom: 8px;">
                🇸🇦 الترجمة العربية للنموذج المثالي
              </div>
              <div style="font-size: 0.94rem; color: var(--text-secondary); white-space: pre-line; line-height: 1.7;">${Utils.escapeHtml(task.modelAnswerAr)}</div>
            </div>
          </div>
        </div>
      `;
    }

    return html;
  },

  // ===========================================================================
  // INTERACTIVE HANDLERS
  // ===========================================================================

  selectCategory(catId) {
    this.state.activeCategory = catId;
    const matching = catId === 'all' ? this.tasks : this.tasks.filter(t => t.category === catId);
    if (matching.length > 0 && !matching.some(t => t.id === this.state.activeTaskId)) {
      this.state.activeTaskId = matching[0].id;
      this.state.lastEvaluation = null;
      this.state.showModelAnswer = false;
    }
    this.render();
  },

  selectTask(taskId) {
    this.state.activeTaskId = taskId;
    this.state.lastEvaluation = null;
    this.state.showModelAnswer = false;
    this.render();
  },

  selectRedemittelTab(tabId) {
    this.state.activeRedemittelTab = tabId;
    this.render();
  },

  onTextInput(value) {
    const task = this.getCurrentTask();
    this.saveDraft(task.id, value);

    // Live-update word counter
    const counterEl = document.getElementById('schreiben-word-counter');
    if (counterEl) {
      const wc = this.countWords(value);
      counterEl.innerHTML = this.renderWordCounterHtml(wc, task.minWords, task.maxWords);
    }

    // Live-update the 3 Leitpunkte cards
    const lpContainer = document.getElementById('schreiben-leitpunkte-list');
    if (lpContainer) {
      lpContainer.innerHTML = this.renderLeitpunkteCards(task, value);
    }
  },

  insertPhrase(phraseText) {
    const textarea = document.getElementById('schreiben-textarea');
    if (!textarea) return;

    const start = textarea.selectionStart || textarea.value.length;
    const end = textarea.selectionEnd || textarea.value.length;
    const before = textarea.value.substring(0, start);
    const after = textarea.value.substring(end);

    const needsSpaceBefore = before.length > 0 && !before.endsWith(' ') && !before.endsWith('\n');
    const prefix = needsSpaceBefore ? ' ' : '';
    const inserted = `${prefix}${phraseText} `;

    textarea.value = before + inserted + after;
    const newCursor = before.length + inserted.length;
    textarea.focus();
    textarea.setSelectionRange(newCursor, newCursor);

    this.onTextInput(textarea.value);

    if (window.Utils && window.Utils.showToast) {
      Utils.showToast('تم إدراج العبارة في رسالتك ✍️', 'success', 1400);
    }
  },

  insertChar(ch) {
    const textarea = document.getElementById('schreiben-textarea');
    if (!textarea) return;

    const start = textarea.selectionStart ?? textarea.value.length;
    const end = textarea.selectionEnd ?? textarea.value.length;
    const before = textarea.value.substring(0, start);
    const after = textarea.value.substring(end);

    textarea.value = before + ch + after;
    const pos = before.length + ch.length;
    textarea.focus();
    textarea.setSelectionRange(pos, pos);

    this.onTextInput(textarea.value);
  },

  dictate(btnEl) {
    const textarea = document.getElementById('schreiben-textarea');
    const previousText = textarea ? textarea.value.trim() : '';

    if (window.Speech && typeof Speech.listen === 'function') {
      Speech.listen('schreiben-textarea', btnEl, (transcript) => {
        if (!textarea) return;
        const combined = previousText ? `${previousText} ${transcript}` : transcript;
        textarea.value = combined;
        this.onTextInput(combined);
      });
    }
  },

  speakMyDraft() {
    const textarea = document.getElementById('schreiben-textarea');
    const text = textarea ? textarea.value.trim() : '';
    if (!text) {
      if (window.Utils && window.Utils.showToast) {
        Utils.showToast('اكتب جملة أو أدرج عبارة أولاً للاستماع إليها 🔊', 'warning', 2000);
      }
      return;
    }
    Speech.speak(text.replace(/\n+/g, ' '));
  },

  clearDraft() {
    const task = this.getCurrentTask();
    this.saveDraft(task.id, '');
    this.state.lastEvaluation = null;
    const textarea = document.getElementById('schreiben-textarea');
    if (textarea) {
      textarea.value = '';
    }
    this.onTextInput('');
    const evalContainer = document.getElementById('schreiben-evaluation-container');
    if (evalContainer) {
      evalContainer.innerHTML = this.renderEvaluationAndModelHtml(task);
    }
  },

  copyModelToEditor() {
    const task = this.getCurrentTask();
    this.saveDraft(task.id, task.modelAnswer);
    const textarea = document.getElementById('schreiben-textarea');
    if (textarea) {
      textarea.value = task.modelAnswer;
    }
    this.onTextInput(task.modelAnswer);
    if (window.Utils && window.Utils.showToast) {
      Utils.showToast('تم نسخ النموذج المثالي إلى محررك للتدرب عليه 📋', 'info', 2000);
    }
  },

  toggleModelAnswer() {
    this.state.showModelAnswer = !this.state.showModelAnswer;
    const task = this.getCurrentTask();
    const evalContainer = document.getElementById('schreiben-evaluation-container');
    if (evalContainer) {
      evalContainer.innerHTML = this.renderEvaluationAndModelHtml(task);
    }
  },

  // ===========================================================================
  // SMART 5-CRITERIA INSPECTOR (100 POINTS)
  // ===========================================================================

  evaluateCurrentDraft() {
    const task = this.getCurrentTask();
    const textarea = document.getElementById('schreiben-textarea');
    const text = (textarea ? textarea.value : this.getDraft(task.id)).trim();

    if (!text || this.countWords(text) < 4) {
      if (window.Utils && window.Utils.showToast) {
        Utils.showToast('يرجى كتابة الرسالة أو استخدام صندوق العبارات أولاً قبل التحليل ✍️', 'warning', 2500);
      }
      return;
    }

    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    const firstLine = lines[0] || '';
    const lowerText = text.toLowerCase();
    const wordCount = this.countWords(text);

    const criteria = [];

    // -------------------------------------------------------------------------
    // CRITERION 1: Appropriate Greeting (Anrede matches register) — 20 pts
    // -------------------------------------------------------------------------
    let greetingPoints = 0;
    let greetingFeedback = '';

    const hasFormalGreeting = /sehr geehrte|guten tag\s+(frau|herr|damen)/i.test(firstLine);
    const hasInformalGreeting = /^(hallo|liebe|lieber|hi)\b/i.test(firstLine);

    if (task.register === 'formell') {
      if (hasFormalGreeting) {
        greetingPoints = 20;
        greetingFeedback = 'ممتاز! استخدمت تحية رسمية مناسبة لمقام الرسالة (Sehr geehrte...).';
      } else if (hasInformalGreeting) {
        greetingPoints = 10;
        greetingFeedback = 'تنبيه: بدأت بتحية غير رسمية (Hallo/Liebe)، بينما هذه الرسالة رسمية تتطلب (Sehr geehrte Damen und Herren, أو Sehr geehrter Herr / Frau ...).';
      } else {
        greetingPoints = 5;
        greetingFeedback = 'يُفضّل بدء الرسالة الرسمية بتحية واضحة مثل: Sehr geehrte Damen und Herren,';
      }
    } else {
      // informell or forum
      if (hasInformalGreeting) {
        greetingPoints = 20;
        greetingFeedback = 'رائع! اخترت تحية ودية مناسبة لصديق أو منتدى (Lieber / Liebe / Hallo ...).';
      } else if (hasFormalGreeting) {
        greetingPoints = 10;
        greetingFeedback = 'ملاحظة: استخدمت تحية رسمية جداً مع صديق؛ الأفضل استخدام (Lieber/Liebe ... أو Hallo ...).';
      } else {
        greetingPoints = 5;
        greetingFeedback = 'لا تنسَ بدء رسالتك بتحية مناسبة مثل: Hallo ... أو Liebe/Lieber ...';
      }
    }

    criteria.push({
      titleAr: '1. التحية وملاءمتها لأسلوب الرسالة (Anrede & Register)',
      points: greetingPoints,
      passed: greetingPoints === 20,
      feedbackAr: greetingFeedback
    });

    // -------------------------------------------------------------------------
    // CRITERION 2: Comma after Greeting & Lowercase / Formal Start — 20 pts
    // -------------------------------------------------------------------------
    let commaPoints = 0;
    let commaFeedback = '';

    const greetingHasComma = firstLine.endsWith(',');
    const secondLine = lines[1] || '';
    const firstWordOfBody = secondLine.split(/\s+/)[0] || '';
    const startsWithLowerOrFormal = firstWordOfBody.length > 0 && (
      firstWordOfBody[0] === firstWordOfBody[0].toLowerCase() ||
      /^(Sie|Ihr|Ihre|Ihnen|Ich)\b/.test(firstWordOfBody)
    );

    if (greetingHasComma && startsWithLowerOrFormal) {
      commaPoints = 20;
      commaFeedback = 'قاعدة ذهبية متقنة! وضعت فاصلة (,) بعد التحية وبدأت السطر التالي بشكل صحيح.';
    } else if (greetingHasComma) {
      commaPoints = 15;
      commaFeedback = 'وضعت الفاصلة (,) بعد التحية بشكل صحيح — تذكر أنه بعد فاصلة التحية في الألمانية نبدأ الكلمة الأولى بحرف صغير (مثل: ich / vielen / leider).';
    } else {
      commaPoints = 10;
      commaFeedback = 'تذكّر وضع فاصلة (,) في نهاية سطر التحية (مثلاً: Lieber Lukas, أو Sehr geehrte Damen und Herren,) ثم البدء بحرف صغير في السطر التالي.';
    }

    criteria.push({
      titleAr: '2. علامات الترقيم بعد التحية وبداية الجملة الأولى (Komma-Regel)',
      points: commaPoints,
      passed: commaPoints === 20,
      feedbackAr: commaFeedback
    });

    // -------------------------------------------------------------------------
    // CRITERION 3: Coverage of the 3 Required Leitpunkte — 20 pts
    // -------------------------------------------------------------------------
    const coveredLeitpunkte = task.leitpunkte.filter(lp => this.checkLeitpunktCovered(text, lp));
    const coveredCount = coveredLeitpunkte.length;
    let lpPoints = 0;
    if (coveredCount === 3) lpPoints = 20;
    else if (coveredCount === 2) lpPoints = 14;
    else if (coveredCount === 1) lpPoints = 7;

    const lpFeedback = coveredCount === 3
      ? 'ممتاز! غطّيت جميع النقاط الثلاث المطلوبة في السؤال (3/3 Leitpunkte) وهذا يضمن لك درجة المحتوى الكاملة في امتحان جوته.'
      : `قمت بتغطية (${coveredCount} من 3) من النقاط المطلوبة. راجع البطاقات أعلاه وأضف النقاط غير المغطاة لضمان العلامة الكاملة.`;

    criteria.push({
      titleAr: `3. تغطية النقاط الثلاث المطلوبة في الامتحان (${coveredCount}/3 Leitpunkte)`,
      points: lpPoints,
      passed: coveredCount === 3,
      feedbackAr: lpFeedback
    });

    // -------------------------------------------------------------------------
    // CRITERION 4: Connectors & Subordinate Clauses (Konnektoren) — 20 pts
    // -------------------------------------------------------------------------
    const connectorList = [
      'weil', 'dass', 'wenn', 'deshalb', 'außerdem', 'obwohl', 'trotzdem',
      'damit', 'da ', 'denn', 'aber', 'oder', 'und', 'deswegen', 'daher', 'darum',
      'sonst', 'andernfalls', 'allerdings', 'dadurch', 'wann', 'wie viel', 'ob ', 'darauf', 'darüber'
    ];
    const foundConnectors = connectorList.filter(c => lowerText.includes(c.trim()));
    const advancedConnectors = [
      'weil', 'dass', 'wenn', 'deshalb', 'außerdem', 'obwohl', 'trotzdem',
      'damit', 'da', 'allerdings', 'dadurch', 'andernfalls', 'wann', 'ob', 'darauf', 'darüber'
    ];
    const foundAdvanced = advancedConnectors.filter(c => {
      const pattern = new RegExp(`(^|[^a-zA-ZäöüÄÖÜß])${c}([^a-zA-ZäöüÄÖÜß]|$)`, 'i');
      return pattern.test(text);
    });

    let connPoints = 0;
    let connFeedback = '';
    if (foundAdvanced.length >= 1 && foundConnectors.length >= 2) {
      connPoints = 20;
      connFeedback = `رائع جداً! استخدمت روابط وتراكيب جمل ممتازة ترفع درجتك في الامتحان (${foundConnectors.slice(0, 4).map(s => s.trim()).join(', ')}).`;
    } else if (foundAdvanced.length >= 1 || foundConnectors.length >= 2) {
      connPoints = 15;
      connFeedback = `جيد! استخدمت بعض الروابط (${foundConnectors.slice(0, 3).map(s => s.trim()).join(', ')}) — حاول إضافة رابط آخر مثل (weil, deshalb, außerdem, obwohl) للحصول على أعلى تقييم.`;
    } else {
      connPoints = 8;
      connFeedback = 'حاول ربط جملك باستخدام أدوات الربط الألمانية مثل (weil, dass, deshalb, außerdem, wenn) لأنها تزيد درجة القواعد في الامتحان.';
    }

    criteria.push({
      titleAr: '4. استخدام الروابط والجمل الفرعية (Konnektoren & Satzbau)',
      points: connPoints,
      passed: connPoints === 20,
      feedbackAr: connFeedback
    });

    // -------------------------------------------------------------------------
    // CRITERION 5: Closing Formula (Grußformel) & Word Count — 20 pts
    // -------------------------------------------------------------------------
    const hasFormalClosing = /mit freundlichen grüßen|freundliche grüße/i.test(text);
    const hasInformalClosing = /viele grüße|liebe grüße|bis bald|herzliche grüße|dein |deine /i.test(text);
    const hasRightClosing = task.register === 'formell' ? hasFormalClosing : (hasInformalClosing || hasFormalClosing);
    const hasGoodWordCount = wordCount >= Math.floor(task.minWords * 0.8);

    let closePoints = 0;
    let closeFeedback = '';
    if (hasRightClosing && hasGoodWordCount) {
      closePoints = 20;
      closeFeedback = `ختام مثالي وعدد كلمات مناسب (${wordCount} كلمة)!`;
    } else if (hasRightClosing && !hasGoodWordCount) {
      closePoints = 14;
      closeFeedback = `خاتمة الرسالة ممتازة، ولكن عدد الكلمات الحالي (${wordCount}) أقل قليلاً من الهدف الموصى به (${task.minWords}–${task.maxWords} كلمة).`;
    } else if (!hasRightClosing && hasGoodWordCount) {
      closePoints = 12;
      closeFeedback = task.register === 'formell'
        ? 'عدد الكلمات ممتاز، لكن لا تنسَ إنهاء الرسالة الرسمية بخاتمة (Mit freundlichen Grüßen) متبوعة باسمك.'
        : 'عدد الكلمات ممتاز، لكن لا تنسَ إنهاء الرسالة بخاتمة ودية مثل (Viele Grüße أو Liebe Grüße) متبوعة باسمك.';
    } else {
      closePoints = 6;
      closeFeedback = `أضف خاتمة مناسبة في نهاية الرسالة (${task.register === 'formell' ? 'Mit freundlichen Grüßen' : 'Viele Grüße'}) وزد عدد الكلمات ليقترب من (${task.minWords} كلمة).`;
    }

    criteria.push({
      titleAr: '5. الخاتمة والتوقيع وعدد الكلمات المطلوب (Grußformel & Wortanzahl)',
      points: closePoints,
      passed: closePoints === 20,
      feedbackAr: closeFeedback
    });

    const totalScore = criteria.reduce((sum, item) => sum + item.points, 0);

    let summaryAr = '';
    if (totalScore >= 85) {
      summaryAr = '🌟 أداء ممتاز جداً! رسالتك مستوفية لمعايير امتحان جوته وتبدو طبيعية ومنظمة.';
    } else if (totalScore >= 65) {
      summaryAr = '👍 مستوى جيد جداً! راجع الملاحظات البسيطة أدناه وقارن رسالتك بالنموذج المثالي للوصول إلى 100/100.';
    } else {
      summaryAr = '💪 بداية طيبة! استعن بصندوق العبارات الجاهزة أعلاه لتغطية النقاط الثلاث وإضافة التحية والخاتمة.';
    }

    this.state.lastEvaluation = {
      totalScore,
      summaryAr,
      criteria
    };
    this.state.showModelAnswer = true;

    // Save score & award XP
    this.saveTaskScore(task.id, totalScore);
    if (window.Storage) {
      if (typeof Storage.addXP === 'function') Storage.addXP(25);
      if (typeof Storage.updateStreak === 'function') Storage.updateStreak();
      if (typeof Storage.saveGameScore === 'function') Storage.saveGameScore('schreibenTrainer', totalScore);
    }
    if (window.App && typeof App.updateHeaderStats === 'function') {
      App.updateHeaderStats();
    }
    if (window.Utils && typeof Utils.showToast === 'function') {
      Utils.showToast(`تم تحليل رسالتك: ${totalScore}/100 (+25 XP) 🎉`, 'success', 2800);
    }

    this.render();
  }
};

if (typeof window !== 'undefined') {
  window.SchreibenTrainer = SchreibenTrainer;
}
