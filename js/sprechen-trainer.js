// =====================================================
// js/sprechen-trainer.js — 🗣️ محاكي المحادثة والامتحان الشفهي ومقابلة الـ Ausbildung
// Interactive German Speaking & Oral Exam Studio (Goethe A2/B1 + Ausbildung Interview)
// =====================================================

const SprechenTrainer = {
  activeTab: 'teil1', // 'teil1' | 'teil2' | 'teil3' | 'ausbildung'
  teil1Index: 0,
  teil1RandomMode: false,
  teil2Index: 0,
  teil3ScenarioIndex: 0,
  teil3TurnIndex: 0,
  teil3History: [],
  ausbildungIndex: 0,
  sessionScore: 0,

  // =====================================================
  // MODULE 1 DATA: 16 Official-Style Topic Cards (Teil 1)
  // =====================================================
  teil1Cards: [
    {
      id: 'geburtstag',
      keyword: 'Geburtstag ?',
      arTitle: 'تاريخ الميلاد والاحتفال',
      icon: '🎂',
      category: 'Persönliches',
      grammarTip: 'مع التواريخ والأيام نستخدم حرف الجر am (مثلاً: am 15. Mai)، وللسؤال نستخدم Wann (متى) أو Wie (كيف تحتفل).',
      wQuestion: 'Wann hast du Geburtstag? / Wann haben Sie Geburtstag?',
      jaNeinQuestion: 'Feierst du gern deinen Geburtstag mit Freunden?',
      modelQuestions: [
        'Wann hast du Geburtstag?',
        'Wann haben Sie Geburtstag?',
        'Wie feierst du deinen Geburtstag?',
        'Wie feiern Sie Ihren Geburtstag?',
        'Feierst du gern deinen Geburtstag?',
        'Feiern Sie gern Geburtstag?',
        'Mit wem feierst du deinen Geburtstag?',
        'Was machst du an deinem Geburtstag?'
      ],
      helperChips: ['Wann hast du', 'Wie feierst du', 'Haben Sie', 'Geburtstag', 'mit Freunden', '?'],
      answerA2: {
        de: 'Ich habe am 14. Mai Geburtstag. Ich feiere meistens zu Hause mit meiner Familie und meinen engsten Freunden.',
        ar: 'عيد ميلادي في الرابع عشر من مايو. أحتفل في الغالب في المنزل مع عائلتي وأقرب أصدقائي.'
      },
      answerB1: {
        de: 'Mein Geburtstag ist am 14. Mai. Normalerweise lade ich meine Freunde zu einem gemütlichen Abendessen ein, weil ich es schön finde, gemeinsam Zeit zu verbringen.',
        ar: 'عيد ميلادي في 14 مايو. عادةً أدعو أصدقائي إلى عشاء لطيف لأنني أجد من الجميل قضاء الوقت معاً.'
      },
      expectedKeywords: ['am', 'mai', 'juni', 'juli', 'märz', 'april', 'januar', 'februar', 'august', 'september', 'oktober', 'november', 'dezember', 'feiere', 'familie', 'freunden', 'geburtstag', 'jahr']
    },
    {
      id: 'wohnort',
      keyword: 'Wohnort & Wohnung ?',
      arTitle: 'مكان السكن والشقة',
      icon: '🏠',
      category: 'Wohnen',
      grammarTip: 'للسؤال عن مكان السكن نستخدم Wo wohnen Sie? وللسؤال عن حجم أو رأيك في الشقة نستخدم Wie ist Ihre Wohnung? أو Wie groß ist...?',
      wQuestion: 'Wo wohnst du und wie ist deine Wohnung? / Wo wohnen Sie?',
      jaNeinQuestion: 'Wohnst du gern in deiner Stadt? / Haben Sie einen Balkon?',
      modelQuestions: [
        'Wo wohnst du?',
        'Wo wohnen Sie?',
        'Wie ist deine Wohnung?',
        'Wie ist Ihre Wohnung?',
        'Wie groß ist deine Wohnung?',
        'Mit wem wohnst du zusammen?',
        'Wohnst du in einem Haus oder in einer Wohnung?',
        'Gefällt dir deine Wohnung?'
      ],
      helperChips: ['Wo wohnen Sie', 'Wie groß ist', 'deine Wohnung', 'im Zentrum', 'Balkon', '?'],
      answerA2: {
        de: 'Ich wohne in einer Dreizimmerwohnung im Stadtzentrum. Die Wohnung ist hell, ruhig und hat einen kleinen Balkon.',
        ar: 'أسكن في شقة من ثلاث غرف في وسط المدينة. الشقة مضيئة وهادئة ولها شرفة صغيرة.'
      },
      answerB1: {
        de: 'Zurzeit wohne ich mit meiner Familie in einer gemütlichen Wohnung nicht weit vom Zentrum. Besonders gut gefällt mir, dass Einkaufsmöglichkeiten und die Bushaltestelle direkt in der Nähe sind.',
        ar: 'حالياً أسكن مع عائلتي في شقة مريحة ليست بعيدة عن المركز. يعجبني بشكل خاص أن المتاجر وموقف الحافلات قريبان مباشرة.'
      },
      expectedKeywords: ['wohne', 'wohnung', 'zimmer', 'stadt', 'zentrum', 'haus', 'balkon', 'hell', 'ruhig', 'groß', 'miete']
    },
    {
      id: 'beruf',
      keyword: 'Beruf & Ausbildung ?',
      arTitle: 'المهنة والتدريب المهني',
      icon: '💼',
      category: 'Arbeit & Beruf',
      grammarTip: 'للسؤال عن المهنة في الألمانية نقول: Was sind Sie von Beruf? أو Was machst du beruflich? وعند الإجابة نقول: Ich bin ... von Beruf أو Ich arbeite als ...',
      wQuestion: 'Was sind Sie von Beruf? / Was machst du beruflich?',
      jaNeinQuestion: 'Machst du gern deine Arbeit? / Möchten Sie eine Ausbildung in Deutschland machen?',
      modelQuestions: [
        'Was sind Sie von Beruf?',
        'Was bist du von Beruf?',
        'Was machst du beruflich?',
        'Was machen Sie beruflich?',
        'Wo arbeitest du?',
        'Wo arbeiten Sie?',
        'Welche Ausbildung möchtest du machen?',
        'Gefällt Ihnen Ihre Arbeit?'
      ],
      helperChips: ['Was sind Sie', 'von Beruf', 'Was machst du', 'beruflich', 'Ausbildung', '?'],
      answerA2: {
        de: 'Ich arbeite im technischen Bereich und möchte bald eine Ausbildung in Deutschland beginnen. Meine Arbeit macht mir viel Spaß.',
        ar: 'أعمل في المجال التقني وأود قريباً بدء تدريب مهني (Ausbildung) في ألمانيا. عملي يمتعني كثيراً.'
      },
      answerB1: {
        de: 'Derzeit bereite ich mich intensiv auf eine Ausbildung in Deutschland vor, deshalb lerne ich jeden Tag Deutsch. Ich arbeite sehr gern praktisch und im Team.',
        ar: 'حالياً أستعد بتركيز لتدريب مهني في ألمانيا، ولذلك أتعلم الألمانية كل يوم. أنا أحب كثيراً العمل العملي وضمن فريق.'
      },
      expectedKeywords: ['beruf', 'arbeite', 'als', 'ausbildung', 'firma', 'spaß', 'team', 'deutschland', 'studium', 'bin']
    },
    {
      id: 'hobbys',
      keyword: 'Hobbys & Freizeit ?',
      arTitle: 'الهوايات ووقت الفراغ',
      icon: '🎨',
      category: 'Freizeit',
      grammarTip: 'للسؤال عن الهوايات نقول: Was sind deine Hobbys? أو Was machst du gern in deiner Freizeit? نستخدم الظرف gern للتعبير عما نحب فعله.',
      wQuestion: 'Was machst du gern in deiner Freizeit? / Was sind Ihre Hobbys?',
      jaNeinQuestion: 'Hast du am Abend viel Freizeit?',
      modelQuestions: [
        'Was sind deine Hobbys?',
        'Was sind Ihre Hobbys?',
        'Was machst du in deiner Freizeit?',
        'Was machen Sie gern in Ihrer Freizeit?',
        'Welche Hobbys hast du?',
        'Hast du viel Freizeit?'
      ],
      helperChips: ['Was sind', 'deine Hobbys', 'in der Freizeit', 'Was machen Sie', 'gern', '?'],
      answerA2: {
        de: 'Meine Hobbys sind Schwimmen, Lesen und Kochen. In meiner Freizeit treffe ich mich auch sehr gern mit meinen Freunden.',
        ar: 'هواياتي هي السباحة والقراءة والطبخ. وفي وقت فراغي ألتقي أيضاً بكل سرور مع أصدقائي.'
      },
      answerB1: {
        de: 'In meiner Freizeit treibe ich regelmäßig Sport, um nach der Arbeit abzuschalten. Außerdem höre ich gern deutsche Podcasts und koche neue Gerichte.',
        ar: 'في وقت فراغي أمارس الرياضة بانتظام للاسترخاء بعد العمل. علاوة على ذلك أحب الاستماع إلى البودكاست الألماني وطهي أطباق جديدة.'
      },
      expectedKeywords: ['hobbys', 'hobby', 'freizeit', 'gern', 'sport', 'lesen', 'musik', 'kochen', 'freunde', 'spielen', 'spazieren']
    },
    {
      id: 'urlaub',
      keyword: 'Urlaub & Reisen ?',
      arTitle: 'العطلة والسفر',
      icon: '✈️',
      category: 'Reisen',
      grammarTip: 'مع دول ومناطق السفر بدون أداة نستخدم nach (nach Deutschland)، ومع البحر أو الجبال نستخدم ans Meer / in die Berge. للسؤال عن الوجهة نستخدم Wohin؟',
      wQuestion: 'Wohin fährst du gern im Urlaub? / Wohin reisen Sie gern?',
      jaNeinQuestion: 'Reist du lieber ans Meer oder in die Berge?',
      modelQuestions: [
        'Wohin fährst du im Urlaub?',
        'Wohin fahren Sie gern im Urlaub?',
        'Wohin reist du gern?',
        'Was machst du gern im Urlaub?',
        'Mit wem fährst du in den Urlaub?',
        'Wann machst du Urlaub?',
        'Reisen Sie gern?'
      ],
      helperChips: ['Wohin fahren Sie', 'im Urlaub', 'Mit wem', 'ans Meer', 'reist du gern', '?'],
      answerA2: {
        de: 'Im Urlaub fahre ich am liebsten mit meiner Familie ans Meer. Dort schwimme ich gern und erhole mich am Strand.',
        ar: 'في العطلة أسافر في الغالب مع عائلتي إلى البحر. هناك أحب السباحة والاستجمام على الشاطئ.'
      },
      answerB1: {
        de: 'Wenn ich Urlaub habe, reise ich sehr gern in neue Städte, weil ich andere Kulturen und Sehenswürdigkeiten kennenlernen möchte. Im Sommer fahre ich aber auch gern ans Meer.',
        ar: 'عندما تكون لدي عطلة، أحب السفر إلى مدن جديدة لأنني أرغب في التعرف على ثقافات ومعالم سياحية أخرى. لكن في الصيف أحب الذهاب إلى البحر أيضاً.'
      },
      expectedKeywords: ['urlaub', 'reise', 'fahre', 'fliege', 'meer', 'berge', 'sommer', 'hotel', 'familie', 'strand', 'stadt']
    },
    {
      id: 'familie',
      keyword: 'Familie ?',
      arTitle: 'العائلة والأقارب',
      icon: '👨‍👩‍👧‍👦',
      category: 'Persönliches',
      grammarTip: 'للسؤال عن الإخوة والأفراد نستخدم Haben Sie Geschwister / Kinder? أو Wie groß ist deine Familie? انتبه للمفعول به (Akkusativ) بعد الفعل haben (einen Bruder, eine Schwester).',
      wQuestion: 'Wie groß ist deine Familie? / Wo lebt Ihre Familie?',
      jaNeinQuestion: 'Hast du Geschwister? / Haben Sie eine große Familie?',
      modelQuestions: [
        'Hast du Geschwister?',
        'Haben Sie Geschwister?',
        'Wie groß ist deine Familie?',
        'Wie groß ist Ihre Familie?',
        'Wo wohnt deine Familie?',
        'Wo lebt Ihre Familie?',
        'Haben Sie Kinder?'
      ],
      helperChips: ['Hast du', 'Geschwister', 'Wie groß ist', 'Ihre Familie', 'Wo lebt', '?'],
      answerA2: {
        de: 'Meine Familie ist mittelgroß. Ich habe zwei Brüder und eine Schwester. Wir verstehen uns sehr gut und telefonieren jeden Tag.',
        ar: 'عائلتي متوسطة الحجم. لديّ أخوان وأخت واحدة. نحن نتفاهم بشكل جيد جداً ونتحدث هاتفياً كل يوم.'
      },
      answerB1: {
        de: 'Familie spielt eine sehr wichtige Rolle in meinem Leben. Meine Eltern und meine Geschwister unterstützen mich immer bei meinen Zielen, und am Wochenende essen wir oft zusammen.',
        ar: 'تلعب العائلة دوراً مهماً جداً في حياتي. والداي وإخوتي يدعمونني دائماً في أهدافي، وفي عطلة نهاية الأسبوع نأكل معاً في كثير من الأحيان.'
      },
      expectedKeywords: ['familie', 'eltern', 'bruder', 'brüder', 'schwester', 'geschwister', 'kinder', 'groß', 'zusammen', 'leben', 'wohnen']
    },
    {
      id: 'sprachen',
      keyword: 'Sprachen lernen ?',
      arTitle: 'تعلم اللغات',
      icon: '🗣️',
      category: 'Bildung',
      grammarTip: 'للسؤال عن عدد أو نوع اللغات نستخدم Welche Sprachen sprichst du? وللسؤال عن المدة نستخدم Seit wann lernst du Deutsch? (والإجابة بـ seit + Dativ).',
      wQuestion: 'Welche Sprachen sprichst du? / Seit wann lernen Sie Deutsch?',
      jaNeinQuestion: 'Lernst du gern Fremdsprachen? / Finden Sie Deutsch schwer?',
      modelQuestions: [
        'Welche Sprachen sprichst du?',
        'Welche Sprachen sprechen Sie?',
        'Seit wann lernst du Deutsch?',
        'Seit wann lernen Sie Deutsch?',
        'Warum lernst du Deutsch?',
        'Wie lernst du Deutsch?',
        'Sprechen Sie Englisch?'
      ],
      helperChips: ['Welche Sprachen', 'sprechen Sie', 'Seit wann', 'lernst du Deutsch', 'Warum', '?'],
      answerA2: {
        de: 'Meine Muttersprache ist Arabisch. Außerdem spreche ich gut Englisch und lerne seit sechs Monaten intensiv Deutsch.',
        ar: 'لغتي الأم هي العربية. بالإضافة إلى ذلك أتحدث الإنجليزية جيداً وأتعلم الألمانية بتركيز منذ ستة أشهر.'
      },
      answerB1: {
        de: 'Neben meiner Muttersprache Arabisch spreche ich Englisch und Deutsch auf B1-Niveau. Ich lerne jeden Tag mit einer App und höre deutsche Dialoge, um meine Aussprache zu verbessern.',
        ar: 'إلى جانب لغتي الأم العربية أتحدث الإنجليزية والألمانية بمستوى B1. أتعلم كل يوم عبر تطبيق وأستمع إلى حوارات ألمانية لتحسين نطقي.'
      },
      expectedKeywords: ['sprache', 'sprachen', 'spreche', 'deutsch', 'englisch', 'arabisch', 'muttersprache', 'lerne', 'seit', 'monaten', 'jahren']
    },
    {
      id: 'wochenende',
      keyword: 'Wochenende ?',
      arTitle: 'عطلة نهاية الأسبوع',
      icon: '🌤️',
      category: 'Alltag & Freizeit',
      grammarTip: 'مع كلمة عطلة نهاية الأسبوع نستخدم حرف الجر am: Was machst du am Wochenende? للحديث عن العادات نستخدم ظرف التكرار meistens أو normalerweise.',
      wQuestion: 'Was machst du normalerweise am Wochenende? / Was machen Sie am Wochenende?',
      jaNeinQuestion: 'Musst du am Wochenende auch arbeiten?',
      modelQuestions: [
        'Was machst du am Wochenende?',
        'Was machen Sie am Wochenende?',
        'Was machst du dieses Wochenende?',
        'Wie verbringst du dein Wochenende?',
        'Schläfst du am Wochenende lange?',
        'Treffen Sie am Wochenende Freunde?'
      ],
      helperChips: ['Was machst du', 'am Wochenende', 'normalerweise', 'mit Freunden', 'Ausflug', '?'],
      answerA2: {
        de: 'Am Wochenende schlafe ich zuerst etwas länger. Danach frühstücke ich mit meiner Familie und am Abend treffe ich meine Freunde.',
        ar: 'في عطلة نهاية الأسبوع أنام أولاً لوقت أطول قليلاً. بعد ذلك أتناول الفطور مع عائلتي وفي المساء ألتقي بأصدقائي.'
      },
      answerB1: {
        de: 'Am Wochenende erledige ich vormittags meine Einkäufe und räume die Wohnung auf. Danach unternehme ich gern einen Ausflug in die Natur oder treffe mich mit Freunden in einem Café.',
        ar: 'في عطلة نهاية الأسبوع أنجز صباحاً مشترياتي وأرتب الشقة. بعد ذلك أحب القيام بنزهة في الطبيعة أو الالتقاء بالأصدقاء في مقهى.'
      },
      expectedKeywords: ['wochenende', 'samstag', 'sonntag', 'schlafe', 'freunde', 'familie', 'frühstücke', 'ausflug', 'sport', 'entspanne']
    },
    {
      id: 'lieblingsessen',
      keyword: 'Lieblingsessen & Kochen ?',
      arTitle: 'الطعام المفضل والطبخ',
      icon: '🍲',
      category: 'Essen & Trinken',
      grammarTip: 'انتبه لتصريف الفعل essen مع الضمير du/er: du isst, er isst! وللسؤال عن الطبق المفضل: Was ist dein Lieblingsessen? أو Was isst du am liebsten?',
      wQuestion: 'Was ist dein Lieblingsessen? / Was essen Sie am liebsten?',
      jaNeinQuestion: 'Kochst du gern selbst zu Hause? / Gehen Sie oft ins Restaurant?',
      modelQuestions: [
        'Was ist dein Lieblingsessen?',
        'Was ist Ihr Lieblingsessen?',
        'Was isst du gern?',
        'Was essen Sie am liebsten?',
        'Kochst du gern?',
        'Kochen Sie gern zu Hause?',
        'Wie oft kochst du?'
      ],
      helperChips: ['Was ist', 'Ihr Lieblingsessen', 'Was isst du', 'Kochst du gern', 'zu Hause', '?'],
      answerA2: {
        de: 'Mein Lieblingsessen ist Hähnchen mit Reis und frischem Salat. Ich koche fast jeden Tag selbst zu Hause, weil das gesünder ist.',
        ar: 'طعامي المفضل هو الدجاج مع الأرز والسلطة الطازجة. أنا أطبخ بنفسي في المنزل كل يوم تقريباً لأن ذلك أكثر صحة.'
      },
      answerB1: {
        de: 'Ich esse am liebsten gegrillten Fisch oder traditionelle Gerichte mit viel Gemüse. Unter der Woche koche ich meistens selbst, weil frisches Essen gesund ist und auch Geld spart.',
        ar: 'أفضل تناول السمك المشوي أو الأطباق التقليدية مع الكثير من الخضروات. خلال الأسبوع أطبخ في الغالب بنفسي لأن الطعام الطازج صحي ويوفر المال أيضاً.'
      },
      expectedKeywords: ['lieblingsessen', 'esse', 'gern', 'liebsten', 'koche', 'reis', 'hähnchen', 'fisch', 'gemüse', 'salat', 'pizza', 'pasta', 'gesund']
    },
    {
      id: 'sport',
      keyword: 'Sport & Gesundheit ?',
      arTitle: 'الرياضة والصحة',
      icon: '🏃‍♂️',
      category: 'Gesundheit',
      grammarTip: 'نقول Sport machen أو Sport treiben. للسؤال عن نوع الرياضة نستخدم Welchen Sport machst du? وللسؤال عن عدد المرات نستخدم Wie oft pro Woche?',
      wQuestion: 'Welchen Sport machst du? / Wie oft treiben Sie Sport?',
      jaNeinQuestion: 'Machst du regelmäßig Sport? / Gehen Sie ins Fitnessstudio?',
      modelQuestions: [
        'Welchen Sport machst du?',
        'Welchen Sport treiben Sie?',
        'Machst du gern Sport?',
        'Machen Sie regelmäßig Sport?',
        'Wie oft machst du Sport?',
        'Was tust du für deine Gesundheit?'
      ],
      helperChips: ['Welchen Sport', 'machst du', 'Wie oft', 'pro Woche', 'Fitnessstudio', '?'],
      answerA2: {
        de: 'Ich mache dreimal pro Woche Sport. Ich gehe gern joggen im Park oder spiele am Wochenende Fußball mit Freunden.',
        ar: 'أمارس الرياضة ثلاث مرات في الأسبوع. أحب الذهاب للجري في الحديقة أو لعب كرة القدم في عطلة نهاية الأسبوع مع الأصدقاء.'
      },
      answerB1: {
        de: 'Um fit und gesund zu bleiben, gehe ich dreimal in der Woche ins Fitnessstudio und fahre viel Fahrrad. Außerdem achte ich darauf, genug Wasser zu trinken.',
        ar: 'لكي أبقى رشيقاً وبصحة جيدة، أذهب ثلاث مرات في الأسبوع إلى النادي الرياضي وأركب الدراجة كثيراً. كما أحرص على شرب كمية كافية من الماء.'
      },
      expectedKeywords: ['sport', 'mache', 'treibe', 'fußball', 'schwimmen', 'joggen', 'fitnessstudio', 'woche', 'gesund', 'fit', 'fahrrad']
    },
    {
      id: 'einkaufen',
      keyword: 'Einkaufen ?',
      arTitle: 'التسوق والشراء',
      icon: '🛒',
      category: 'Alltag',
      grammarTip: 'الفعل einkaufen فعل منفصل: Wo kaufst du ein? / Wann kaufen Sie ein? مع المتاجر والسوق نستخدم im Supermarkt أو auf dem Markt أو im Internet (online).',
      wQuestion: 'Wo und wann kaufst du normalerweise ein? / Wo kaufen Sie gern ein?',
      jaNeinQuestion: 'Kaufst du gern online im Internet ein?',
      modelQuestions: [
        'Wo kaufst du ein?',
        'Wo kaufen Sie normalerweise ein?',
        'Wann gehst du einkaufen?',
        'Wie oft gehst du einkaufen?',
        'Kaufst du gern im Internet ein?',
        'Was kaufst du auf dem Markt?'
      ],
      helperChips: ['Wo kaufst du', 'Wann kaufen Sie', 'ein', 'im Supermarkt', 'online', '?'],
      answerA2: {
        de: 'Lebensmittel kaufe ich zweimal pro Woche im Supermarkt neben meiner Wohnung ein. Kleidung kaufe ich manchmal auch online.',
        ar: 'أشتري المواد الغذائية مرتين في الأسبوع من السوبرماركت بجانب شقتي. وأحياناً أشتري الملابس عبر الإنترنت أيضاً.'
      },
      answerB1: {
        de: 'Frisches Obst und Gemüse kaufe ich am liebsten am Samstagmorgen auf dem Wochenmarkt. Für den täglichen Bedarf gehe ich nach der Arbeit in den Supermarkt.',
        ar: 'أفضل شراء الفواكه والخضروات الطازجة صباح السبت من السوق الأسبوعي. ولاحتياجاتي اليومية أذهب بعد العمل إلى السوبرماركت.'
      },
      expectedKeywords: ['kaufe', 'einkaufen', 'supermarkt', 'markt', 'online', 'internet', 'lebensmittel', 'obst', 'gemüse', 'kleidung', 'woche']
    },
    {
      id: 'verkehrsmittel',
      keyword: 'Verkehrsmittel & Arbeitsweg ?',
      arTitle: 'المواصلات والطريق للعمل',
      icon: '🚆',
      category: 'Mobilität',
      grammarTip: 'مع وسائل المواصلات نستخدم دائماً حرف الجر mit + Dativ: mit dem Bus, mit dem Zug, mit der U-Bahn, mit dem Auto, mit dem Fahrrad. وللسؤال: Wie kommst du zur Arbeit?',
      wQuestion: 'Wie kommst du zur Arbeit? / Mit welchem Verkehrsmittel fahren Sie?',
      jaNeinQuestion: 'Fährst du oft mit dem Bus oder mit der Bahn?',
      modelQuestions: [
        'Wie kommst du zur Arbeit?',
        'Wie kommen Sie zur Arbeit?',
        'Mit welchem Verkehrsmittel fährst du?',
        'Fährst du mit dem Bus oder mit dem Auto?',
        'Wie lange dauert dein Weg zur Arbeit?',
        'Nutzen Sie öffentliche Verkehrsmittel?'
      ],
      helperChips: ['Wie kommst du', 'zur Arbeit', 'Fahren Sie', 'mit dem Bus', 'mit der Bahn', '?'],
      answerA2: {
        de: 'Ich fahre jeden Tag mit dem Bus und der U-Bahn zur Arbeit. Die Fahrt dauert ungefähr zwanzig Minuten.',
        ar: 'أذهب كل يوم بالحافلة ومترو الأنفاق إلى العمل. تستغرق الرحلة حوالي عشرين دقيقة.'
      },
      answerB1: {
        de: 'Im Alltag benutze ich meistens öffentliche Verkehrsmittel wie den Bus oder die Straßenbahn, weil es umweltfreundlich ist und man keinen Parkplatz suchen muss. Bei schönem Wetter fahre ich auch mit dem Fahrrad.',
        ar: 'في الحياة اليومية أستخدم غالباً وسائل النقل العام مثل الحافلة أو الترام لأنها صديقة للبيئة ولا يضطر المرء للبحث عن موقف سيارة. وفي الطقس الجميل أركب الدراجة أيضاً.'
      },
      expectedKeywords: ['fahre', 'mit', 'bus', 'bahn', 'zug', 'auto', 'fahrrad', 'arbeit', 'minuten', 'dauert', 'fuß', 'verkehrsmittel']
    },
    {
      id: 'freunde',
      keyword: 'Freunde treffen ?',
      arTitle: 'لقاء الأصدقاء',
      icon: '☕',
      category: 'Soziales',
      grammarTip: 'الفعل sich treffen يتغير حرفه الصوتي مع du/er: Wie oft triffst du deine Freunde? ومع المكان نستخدم in einem Café / im Park / zu Hause.',
      wQuestion: 'Wie oft triffst du deine Freunde und was macht ihr zusammen?',
      jaNeinQuestion: 'Triffst du dich am Wochenende oft mit deinen Freunden?',
      modelQuestions: [
        'Wie oft triffst du deine Freunde?',
        'Wie oft treffen Sie Ihre Freunde?',
        'Was machst du mit deinen Freunden?',
        'Wo triffst du dich mit deinen Freunden?',
        'Hast du viele Freunde?'
      ],
      helperChips: ['Wie oft', 'triffst du', 'deine Freunde', 'Was macht ihr', 'zusammen', '?'],
      answerA2: {
        de: 'Ich treffe meine Freunde meistens am Freitagabend. Wir sitzen in einem Café, trinken Kaffee und sprechen über unsere Woche.',
        ar: 'ألتقي بأصدقائي غالباً مساء الجمعة. نجلس في مقهى ونشرب القهوة ونتحدث عن أسبوعنا.'
      },
      answerB1: {
        de: 'Unter der Woche habe ich wegen der Arbeit und des Deutschkurses wenig Zeit, deshalb treffe ich mich am Wochenende mit meinen Freunden. Wir gehen gern zusammen spazieren oder kochen gemeinsam.',
        ar: 'خلال الأسبوع يكون لدي وقت قليل بسبب العمل ودورة اللغة الألمانية، ولذلك ألتقي بأصدقائي في عطلة نهاية الأسبوع. نحب المشي معاً أو الطبخ سوياً.'
      },
      expectedKeywords: ['treffe', 'freunde', 'freunden', 'wochenende', 'café', 'kaffee', 'zusammen', 'spazieren', 'abend', 'sprechen']
    },
    {
      id: 'arbeitszeiten',
      keyword: 'Arbeitszeiten ?',
      arTitle: 'أوقات وساعات العمل',
      icon: '⏰',
      category: 'Arbeit & Beruf',
      grammarTip: 'للسؤال عن ساعات العمل من ... إلى ... نستخدم: Von wann bis wann arbeitest du? وعند الإجابة نقول: Ich arbeite von 8 Uhr bis 16 Uhr.',
      wQuestion: 'Von wann bis wann arbeitest du jeden Tag? / Wie sind Ihre Arbeitszeiten?',
      jaNeinQuestion: 'Hast du feste Arbeitszeiten oder arbeitest du im Schichtdienst?',
      modelQuestions: [
        'Von wann bis wann arbeitest du?',
        'Von wann bis wann arbeiten Sie?',
        'Wie sind deine Arbeitszeiten?',
        'Wie sind Ihre Arbeitszeiten?',
        'Wie viele Stunden arbeitest du pro Tag?',
        'Arbeiten Sie auch am Wochenende?'
      ],
      helperChips: ['Von wann bis wann', 'arbeiten Sie', 'Wie viele Stunden', 'Arbeitszeiten', 'Pause', '?'],
      answerA2: {
        de: 'Ich arbeite normalerweise von Montag bis Freitag, von 8:00 Uhr bis 16:30 Uhr. Um 12:00 Uhr habe ich eine halbe Stunde Mittagspause.',
        ar: 'أعمل عادةً من الإثنين إلى الجمعة، من الساعة 8:00 حتى 16:30. وفي الساعة 12:00 لدي استراحة غداء لمدة نصف ساعة.'
      },
      answerB1: {
        de: 'Ich arbeite acht Stunden am Tag, meistens von 8 bis 17 Uhr inklusive einer Stunde Mittagspause. Ich bin aber auch flexibel, falls es Schichtarbeit oder Bereitschaftsdienst gibt.',
        ar: 'أعمل ثماني ساعات في اليوم، غالباً من 8 حتى 17 شاملة ساعة استراحة غداء. لكنني مرن أيضاً إذا كان هناك عمل بنظام الورديات أو المناوبات.'
      },
      expectedKeywords: ['arbeite', 'von', 'bis', 'uhr', 'stunden', 'montag', 'freitag', 'pause', 'mittagspause', 'tag', 'flexibel', 'schicht']
    },
    {
      id: 'medien',
      keyword: 'Fernsehen & Medien ?',
      arTitle: 'التلفاز والإنترنت والإعلام',
      icon: '📱',
      category: 'Medien & Alltag',
      grammarTip: 'الفعل fernsehen فعل منفصل ويتغير مع du: Siehst du gern fern? وللسؤال عن استخدام الإنترنت: Wie oft nutzt du das Internet? أو Was schaust du gern?',
      wQuestion: 'Was schaust du gern am Abend? / Wofür nutzen Sie das Internet?',
      jaNeinQuestion: 'Siehst du abends gern fern oder schaust du Videos im Internet?',
      modelQuestions: [
        'Siehst du gern fern?',
        'Sehen Sie oft fern?',
        'Was schaust du gern im Fernsehen?',
        'Wie oft nutzt du das Internet?',
        'Wofür benutzen Sie das Internet?',
        'Welche Filme magst du?'
      ],
      helperChips: ['Siehst du gern', 'fern', 'Was schaust du', 'im Internet', 'Filme', '?'],
      answerA2: {
        de: 'Ich sehe nicht so oft klassisches Fernsehen. Ich nutze lieber das Internet, um Nachrichten zu lesen und Lernvideos auf Deutsch anzuschauen.',
        ar: 'أنا لا أشاهد التلفاز التقليدي كثيراً. أفضل استخدام الإنترنت لقراءة الأخبار ومشاهدة فيديوهات تعليمية بالألمانية.'
      },
      answerB1: {
        de: 'Im Alltag nutze ich das Internet vor allem zum Lernen, für E-Mails und um mit meiner Familie in Kontakt zu bleiben. Abends schaue ich mir manchmal Dokumentationen oder deutsche Serien mit Untertiteln an.',
        ar: 'في الحياة اليومية أستخدم الإنترنت قبل كل شيء للتعلم وللبريد الإلكتروني وللبقاء على تواصل مع عائلتي. وفي المساء أشاهد أحياناً أفلاماً وثائقية أو مسلسلات ألمانية مع ترجمة.'
      },
      expectedKeywords: ['internet', 'fernsehen', 'sehe', 'schaue', 'filme', 'serien', 'nachrichten', 'videos', 'handy', 'lernen', 'abends']
    },
    {
      id: 'zukunft',
      keyword: 'Zukunftspläne in Deutschland ?',
      arTitle: 'خطط المستقبل في ألمانيا',
      icon: '🇩🇪',
      category: 'Zukunft & Ziele',
      grammarTip: 'للحديث عن الخطط والأهداف نستخدم الأفعال: planen, vorhaben (منفصل: Was hast du vor?), möchten, wollen. مثلاً: Ich habe vor, eine Ausbildung in Deutschland zu machen.',
      wQuestion: 'Was sind deine Pläne für die Zukunft in Deutschland? / Was haben Sie in Deutschland vor?',
      jaNeinQuestion: 'Möchtest du langfristig in Deutschland leben und arbeiten?',
      modelQuestions: [
        'Was sind deine Pläne für die Zukunft?',
        'Was sind Ihre Zukunftspläne in Deutschland?',
        'Was möchtest du in Deutschland machen?',
        'Was haben Sie für die Zukunft vor?',
        'Wo möchtest du in Deutschland arbeiten?'
      ],
      helperChips: ['Was sind', 'Ihre Zukunftspläne', 'in Deutschland', 'Was möchtest du', 'machen', '?'],
      answerA2: {
        de: 'Mein wichtigster Plan ist es, die B1-Prüfung gut zu bestehen und danach meine Ausbildung in Deutschland erfolgreich zu beginnen.',
        ar: 'خطتي الأهم هي اجتياز امتحان B1 بشكل جيد وبعد ذلك بدء تدريبي المهني في ألمانيا بنجاح.'
      },
      answerB1: {
        de: 'Für die Zukunft habe ich mir klare Ziele gesetzt: Zuerst möchte ich mein Deutsch auf B2-Niveau verbessern, meine Ausbildung in Deutschland erfolgreich abschließen und danach langfristig in meinem Beruf arbeiten.',
        ar: 'لقد وضعت لنفسي أهدافاً واضحة للمستقبل: أولاً أود تحسين لغتي الألمانية إلى مستوى B2، وإتمام تدريبي المهني في ألمانيا بنجاح، والعمل بعد ذلك على المدى الطويل في مهنتي.'
      },
      expectedKeywords: ['zukunft', 'plan', 'pläne', 'ziel', 'deutschland', 'ausbildung', 'arbeiten', 'prüfung', 'b1', 'b2', 'leben', 'möchte']
    }
  ],

  // =====================================================
  // MODULE 2 DATA: 6 Structured Speaking & Presentation Topics (Teil 2)
  // =====================================================
  teil2Topics: [
    {
      id: 'vorstellen',
      level: 'A2 / B1',
      titleDe: 'Sich ausführlich vorstellen',
      titleAr: 'التعريف الشامل بالنفس (الاسم، العمر، البلد، اللغات، المهنة، الهدف)',
      icon: '🙋‍♂️',
      duration: '1.5 – 2 Minuten',
      prompts: [
        'Name, Alter & Herkunft (الاسم، العمر، البلد)',
        'Wohnort & Familie (مكان السكن والعائلة)',
        'Sprachen & Ausbildung / Beruf (اللغات والمهنة أو الدراسة)',
        'Hobbys & Freizeit (الهوايات ووقت الفراغ)',
        'Warum Deutsch & Ziel in Deutschland (سبب تعلم الألمانية والهدف)'
      ],
      redemittel: [
        { label: 'البداية والترحيب', de: 'Guten Tag! Ich möchte mich heute kurz vorstellen.', ar: 'طاب يومكم! أود اليوم أن أعرفكم بنفسي باختصار.' },
        { label: 'المعلومات الشخصية', de: 'Mein Name ist ... Ich bin ... Jahre alt und komme aus ...', ar: 'اسمي ... عمري ... سنة وأنا قادم من ...' },
        { label: 'اللغات والمهنة', de: 'Meine Muttersprache ist Arabisch, außerdem spreche ich Englisch und Deutsch.', ar: 'لغتي الأم هي العربية، وبالإضافة إلى ذلك أتحدث الإنجليزية والألمانية.' },
        { label: 'الهدف المستقبلي', de: 'Mein großes Ziel ist es, eine Ausbildung in Deutschland zu machen.', ar: 'هدفي الكبير هو القيام بتدريب مهني في ألمانيا.' }
      ],
      sentences: [
        {
          de: 'Guten Tag! Ich möchte mich heute kurz vorstellen.',
          ar: 'طاب يومكم! أود اليوم أن أعرفكم بنفسي باختصار.'
        },
        {
          de: 'Mein Name ist Dhyaa, ich bin 24 Jahre alt und komme aus dem Irak.',
          ar: 'اسمي ضياء، عمري 24 عاماً وأنا من العراق.'
        },
        {
          de: 'Meine Muttersprache ist Arabisch. Außerdem spreche ich gut Englisch und lerne seit einigen Monaten intensiv Deutsch.',
          ar: 'لغتي الأم هي العربية. بالإضافة إلى ذلك أتحدث الإنجليزية جيداً وأتعلم الألمانية بتركيز منذ عدة أشهر.'
        },
        {
          de: 'Ich interessiere mich sehr für Technik und praktische Arbeit und arbeite gern im Team.',
          ar: 'أنا مهتم جداً بالتقنية والعمل التطبيقي وأحب العمل ضمن فريق.'
        },
        {
          de: 'In meiner Freizeit treibe ich gern Sport, lese und höre deutsche Podcasts, um meine Sprache weiter zu verbessern.',
          ar: 'في وقت فراغي أحب ممارسة الرياضة والقراءة والاستماع إلى البودكاست الألماني لتطوير لغتي أكثر.'
        },
        {
          de: 'Mein großes Ziel ist es, die Deutschprüfung zu bestehen und bald eine Ausbildung in Deutschland zu beginnen. Vielen Dank für Ihre Aufmerksamkeit!',
          ar: 'هدفي الكبير هو اجتياز امتحان اللغة الألمانية وبدء تدريب مهني في ألمانيا قريباً. شكراً جزيلاً لاهتمامكم!'
        }
      ]
    },
    {
      id: 'tagesablauf',
      level: 'A2 / B1',
      titleDe: 'Mein Tagesablauf & Beruf',
      titleAr: 'روتيني اليومي وعملي ومذاكرتي',
      icon: '📅',
      duration: '2 Minuten',
      prompts: [
        'Wann stehen Sie auf & was machen Sie morgens? (الاستيقاظ والصباح)',
        'Arbeit / Studium / Deutschlernen am Vormittag (العمل أو الدراسة صباحاً)',
        'Mittagspause & Nachmittag (استراحة الغداء وبعد الظهر)',
        'Was machen Sie am Abend? (أنشطة المساء والعائلة)',
        'Was ist am Wochenende anders? (الاختلاف في عطلة نهاية الأسبوع)'
      ],
      redemittel: [
        { label: 'في الصباح', de: 'Normalerweise stehe ich jeden Tag früh um 7 Uhr auf.', ar: 'عادةً أستيقظ كل يوم مبكراً في الساعة السابعة.' },
        { label: 'التسلسل الزمني', de: 'Zuerst frühstücke ich, danach beginne ich mit meiner Arbeit / meinem Studium.', ar: 'أولاً أتناول الفطور، وبعد ذلك أبدأ بعملي / دراستي.' },
        { label: 'بعد الظهر والمساء', de: 'Am Nachmittag lerne ich zwei Stunden Deutsch und mache Übungen.', ar: 'بعد الظهر أدرس الألمانية لمدة ساعتين وأحل التمارين.' },
        { label: 'نهاية اليوم', de: 'Am Abend entspanne ich mich mit meiner Familie und gehe gegen 23 Uhr schlafen.', ar: 'في المساء أسترخي مع عائلتي وأخلد للنوم حوالي الساعة 11 مساءً.' }
      ],
      sentences: [
        {
          de: 'Ich möchte Ihnen heute etwas über meinen typischen Tagesablauf erzählen.',
          ar: 'أود أن أحدثكم اليوم قليلاً عن روتيني اليومي المعتاد.'
        },
        {
          de: 'Unter der Woche stehe ich meistens früh um sieben Uhr auf, trinke einen Kaffee und frühstücke gesund.',
          ar: 'خلال الأسبوع أستيقظ غالباً مبكراً في الساعة السابعة، أشرب قهوة وأتناول فطوراً صحياً.'
        },
        {
          de: 'Von acht bis fünfzehn Uhr kümmere ich mich um meine Arbeit und meine täglichen Aufgaben.',
          ar: 'من الساعة الثامنة حتى الثالثة عصراً أهتم بعملي ومهامي اليومية.'
        },
        {
          de: 'Am Nachmittag mache ich eine kurze Pause und lerne danach mindestens zwei Stunden lang Deutsch: Ich wiederhole Wortschatz, höre Dialoge und übe das Sprechen.',
          ar: 'في فترة بعد الظهر آخذ استراحة قصيرة ثم أدرس الألمانية لمدة ساعتين على الأقل: أراجع المفردات، وأستمع إلى الحوارات، وأتدرب على التحدث.'
        },
        {
          de: 'Am Abend gehe ich oft eine Stunde zum Sport oder treffe mich kurz mit Freunden.',
          ar: 'في المساء أذهب غالباً لمدة ساعة لممارسة الرياضة أو ألتقي لفترة قصيرة بالأصدقاء.'
        },
        {
          de: 'Gegen elf Uhr abends gehe ich ins Bett, damit ich am nächsten Tag wieder fit und konzentriert bin.',
          ar: 'حوالي الساعة الحادية عشرة ليلاً أذهب إلى السرير لكي أكون في اليوم التالي نشيطاً ومركزاً من جديد.'
        }
      ]
    },
    {
      id: 'warum_deutsch',
      level: 'A2 / B1',
      titleDe: 'Warum ich Deutsch lerne & meine Pläne',
      titleAr: 'لماذا أتعلم الألمانية وخططي في ألمانيا',
      icon: '🎯',
      duration: '2 – 3 Minuten',
      prompts: [
        'Seit wann und wie lernen Sie Deutsch? (منذ متى وكيف تتعلم الألمانية)',
        'Warum ist Deutsch wichtig für Ihre Zukunft? (لماذا الألمانية مهمة لمستقبلك)',
        'Was fällt Ihnen leicht und was ist schwer? (ما السهل وما الصعب)',
        'Welche Pläne haben Sie in Deutschland? (خططك المهنية في ألمانيا)',
        'Fazit & Motivation (الخلاصة والدافع)'
      ],
      redemittel: [
        { label: 'تقديم الموضوع', de: 'Mein Thema heute ist: Warum ich Deutsch lerne und welche Pläne ich habe.', ar: 'موضوعي اليوم هو: لماذا أتعلم الألمانية وما هي خططي.' },
        { label: 'طريقة التعلم', de: 'Ich lerne täglich mit Dialogen, Karteikarten und Prüfungssimulationen.', ar: 'أتعلم يومياً باستخدام الحوارات والبطاقات التعليمية ومحاكيات الامتحان.' },
        { label: 'التحديات والحلول', de: 'Am Anfang war die Grammatik etwas schwer, aber durch tägliches Üben wird es immer besser.', ar: 'في البداية كانت القواعد صعبة قليلاً، لكن بالتدريب اليومي تتحسن باستمرار.' },
        { label: 'الهدف النهائي', de: 'Mit guten Deutschkenntnissen kann man sich im Beruf und im Alltag schnell integrieren.', ar: 'بفضل المهارات الجيدة في الألمانية يستطيع المرء الاندماج بسرعة في العمل والحياة اليومية.' }
      ],
      sentences: [
        {
          de: 'Heute möchte ich darüber sprechen, warum ich Deutsch lerne und welche beruflichen Pläne ich in Deutschland habe.',
          ar: 'اليوم أود التحدث عن سبب تعلمي للغة الألمانية وما هي خططي المهنية في ألمانيا.'
        },
        {
          de: 'Ich lerne Deutsch, weil Deutschland hervorragende Möglichkeiten für eine duale Ausbildung und eine sichere berufliche Zukunft bietet.',
          ar: 'أتعلم الألمانية لأن ألمانيا توفر فرصاً ممتازة للتدريب المهني المزدوج ومستقبلاً مهنياً آمناً.'
        },
        {
          de: 'Jeden Tag übe ich intensiv Lesen, Hören, Schreiben und vor allem das Sprechen, denn gute Kommunikation ist im Beruf das Wichtigste.',
          ar: 'أتدرب كل يوم بتركيز على القراءة والاستماع والكتابة وقبل كل شيء التحدث، لأن التواصل الجيد هو الأهم في المهنة.'
        },
        {
          de: 'Am Anfang fand ich die deutschen Artikel und die Satzstruktur nicht einfach, aber mit System und Geduld macht mir das Lernen jetzt großen Spaß.',
          ar: 'في البداية وجدت أدوات التعريف الألمانية وبنية الجملة ليست سهلة، ولكن مع النظام والصبر أصبح التعلم يمتعني الآن كثيراً.'
        },
        {
          de: 'Mein Plan ist es, in Deutschland eine Ausbildung zu absolvieren, zuverlässig im Team zu arbeiten und mich gut in die Gesellschaft zu integrieren.',
          ar: 'خطتي هي إتمام تدريب مهني في ألمانيا، والعمل بموثوقية ضمن فريق، والاندماج بشكل جيد في المجتمع.'
        },
        {
          de: 'Ich bin davon überzeugt, dass die deutsche Sprache der Schlüssel zu meinem Erfolg in Deutschland ist. Vielen Dank!',
          ar: 'أنا مقتنع بأن اللغة الألمانية هي المفتاح لنجاحي في ألمانيا. شكراً جزيلاً!'
        }
      ]
    },
    {
      id: 'homeoffice',
      level: 'Goethe B1 Präsentation',
      titleDe: 'Homeoffice oder im Büro arbeiten?',
      titleAr: 'موضوع عرض B1: العمل عن بعد من المنزل أم في الشركة؟',
      icon: '💻',
      duration: '3 Minuten (Offizielles B1-Format)',
      prompts: [
        '1. Einleitung: Thema vorstellen (مقدمة وتعريف بالموضوع)',
        '2. Meine persönlichen Erfahrungen (تجربتي الشخصية)',
        '3. Die Situation in meinem Heimatland (الوضع في بلدي الأم)',
        '4. Vor- und Nachteile abwägen (المميزات والعيوب)',
        '5. Meine Meinung & Abschluss (رأيي الشخصي والخاتمة)'
      ],
      redemittel: [
        { label: 'Einleitung (المقدمة)', de: 'In meiner Präsentation geht es um das Thema „Homeoffice oder im Büro arbeiten“.', ar: 'يدور عرضي التقديمي حول موضوع "العمل من المنزل أم في المكتب".' },
        { label: 'Heimatland (في بلدي)', de: 'In meinem Heimatland arbeiten die meisten Menschen klassisch in der Firma oder im Betrieb.', ar: 'في بلدي الأم يعمل معظم الناس بشكل تقليدي في الشركة أو المؤسسة.' },
        { label: 'Vor- & Nachteile (المزايا والعيوب)', de: 'Ein großer Vorteil vom Homeoffice ist die Zeitersparnis. Ein Nachteil ist aber, dass der persönliche Kontakt zu Kollegen fehlt.', ar: 'ميزة كبيرة للعمل من المنزل هي توفير الوقت. لكن العيب هو غياب التواصل الشخصي مع الزملاء.' },
        { label: 'Schluss (الخاتمة)', de: 'Damit komme ich zum Ende meiner Präsentation. Vielen Dank für das Zuhören! Haben Sie noch Fragen?', ar: 'بهذا أصل إلى نهاية عرضي التقديمي. شكراً جزيلاً للاستماع! هل لديكم أي أسئلة؟' }
      ],
      sentences: [
        {
          de: 'In meiner Präsentation geht es heute um das Thema „Homeoffice oder im Büro arbeiten“. Zuerst spreche ich über meine persönlichen Erfahrungen, danach über die Situation in meinem Heimatland, anschließend nenne ich Vor- und Nachteile und sage zum Schluss meine Meinung.',
          ar: 'يدور عرضي التقديمي اليوم حول موضوع "العمل من المنزل أم في المكتب". أولاً سأتحدث عن تجاربي الشخصية، ثم عن الوضع في بلدي الأم، وبعد ذلك أذكر المزايا والعيوب وفي النهاية أقول رأيي الشخصي.'
        },
        {
          de: 'Aus meiner eigenen Erfahrung kann ich sagen, dass ich sehr gern direkt vor Ort im Team arbeite, weil man Fragen sofort mit Kollegen klären kann.',
          ar: 'من تجربتي الشخصية يمكنني القول إنني أحب كثيراً العمل مباشرة في الموقع ضمن فريق، لأن المرء يستطيع توضيح الأسئلة فوراً مع الزملاء.'
        },
        {
          de: 'In meinem Heimatland arbeiten die meisten Berufstätigen im Büro oder im Betrieb, aber bei Bürojobs und in der IT-Branche wird Homeoffice immer beliebter.',
          ar: 'في بلدي الأم يعمل معظم الموظفين في المكتب أو المنشأة، ولكن في الوظائف المكتبية ومجال تقنية المعلومات يزداد العمل من المنزل شعبية.'
        },
        {
          de: 'Auf der einen Seite spart man im Homeoffice viel Zeit und Geld für den Arbeitsweg. Auf der anderen Seite fühlt man sich zu Hause manchmal allein und kann Arbeit und Freizeit schwerer trennen.',
          ar: 'من ناحية يوفر المرء في العمل من المنزل الكثير من الوقت والمال لطريق العمل. ومن ناحية أخرى يشعر المرء أحياناً بالوحدة في المنزل ويصعب عليه الفصل بين العمل ووقت الفراغ.'
        },
        {
          de: 'Meiner Meinung nach ist eine Mischung aus beidem ideal, wenn der Beruf es erlaubt. In praktischen Ausbildungsberufen ist die Arbeit vor Ort aber unverzichtbar.',
          ar: 'في رأيي فإن المزيج بين الاثنين مثالي إذا كانت المهنة تسمح بذلك. أما في مهن التدريب المهني العملية فإن العمل في الموقع لا غنى عنه.'
        },
        {
          de: 'Damit bin ich am Ende meiner Präsentation. Vielen Dank für Ihre Aufmerksamkeit! Wenn Sie Fragen haben, beantworte ich sie gern.',
          ar: 'بهذا أكون قد وصلت إلى نهاية عرضي التقديمي. شكراً جزيلاً لاهتمامكم! إذا كانت لديكم أسئلة يسعدني الإجابة عنها.'
        }
      ]
    },
    {
      id: 'stadt_land',
      level: 'Goethe B1 Präsentation',
      titleDe: 'Leben in der Stadt oder auf dem Land?',
      titleAr: 'موضوع عرض B1: الحياة في المدينة الكبيرة أم في الريف؟',
      icon: '🏙️',
      duration: '3 Minuten (Offizielles B1-Format)',
      prompts: [
        '1. Einleitung & Struktur der Präsentation (مقدمة وهيكل العرض)',
        '2. Eigene Erfahrung: Wo wohne ich jetzt? (تجربتي الشخصية)',
        '3. Situation im Heimatland (الوضع في بلدي الأم)',
        '4. Vorteile und Nachteile von Stadt und Land (مقارنة المزايا والعيوب)',
        '5. Eigene Meinung & Dank (الرأي الشخصي والشكر)'
      ],
      redemittel: [
        { label: 'Einleitung', de: 'Heute präsentiere ich Ihnen das Thema „Leben in der Stadt oder auf dem Land?“.', ar: 'أقدم لكم اليوم موضوع "الحياة في المدينة أم في الريف؟".' },
        { label: 'Vorteile der Stadt', de: 'In der Stadt gibt es bessere Arbeitsmöglichkeiten, Krankenhäuser und öffentliche Verkehrsmittel.', ar: 'في المدينة توجد فرص عمل أفضل ومستشفيات ووسائل نقل عام.' },
        { label: 'Vorteile vom Land', de: 'Auf dem Land ist die Luft sauber, die Natur ist schön und die Mieten sind günstiger.', ar: 'في الريف الهواء نقي والطبيعة جميلة والإيجارات أرخص.' },
        { label: 'Eigene Meinung', de: 'Für junge Leute und Auszubildende finde ich das Leben in der Stadt praktischer.', ar: 'بالنسبة للشباب والمتدربين أجد الحياة في المدينة أكثر عملية.' }
      ],
      sentences: [
        {
          de: 'Heute möchte ich über das Thema „Leben in der Stadt oder auf dem Land?“ sprechen. Dieses Thema ist für viele Menschen sehr wichtig, wenn sie eine Wohnung oder eine Arbeit suchen.',
          ar: 'أود اليوم التحدث عن موضوع "الحياة في المدينة أم في الريف؟". هذا الموضوع مهم جداً لكثير من الناس عندما يبحثون عن شقة أو عمل.'
        },
        {
          de: 'Was meine persönliche Erfahrung betrifft: Ich habe bisher immer in der Stadt gelebt, weil meine Schule, Einkaufsmöglichkeiten und Freunde direkt in der Nähe sind.',
          ar: 'فيما يتعلق بتجربتي الشخصية: لقد عشت حتى الآن دائماً في المدينة لأن مدرستي والمتاجر وأصدقائي قريبون مباشرة.'
        },
        {
          de: 'In meinem Heimatland ziehen immer mehr junge Menschen in die großen Städte, weil es dort viel mehr Ausbildungsplätze, Universitäten und Firmen gibt.',
          ar: 'في بلدي الأم ينتقل المزيد والمزيد من الشباب إلى المدن الكبرى لأنه يوجد هناك عدد أكبر بكثير من مقاعد التدريب المهني والجامعات والشركات.'
        },
        {
          de: 'Das Leben in der Stadt hat den Vorteil, dass Busse und Bahnen überall fahren. Ein Nachteil sind jedoch der Lärm, der viele Verkehr und die hohen Mieten.',
          ar: 'الحياة في المدينة لها ميزة أن الحافلات والقطارات تسير في كل مكان. غير أن العيب يتمثل في الضوضاء والازدحام المروري والإيجارات المرتفعة.'
        },
        {
          de: 'Auf dem Land hingegen hat man Ruhe, saubere Luft und günstige Wohnungen, aber man braucht fast immer ein eigenes Auto.',
          ar: 'في المقابل يتمتع المرء في الريف بالهدوء والهواء النقي والشقق الرخيصة، لكنه يحتاج دائماً تقريباً إلى سيارة خاصة.'
        },
        {
          de: 'Meiner Meinung nach ist für meine Ausbildungszeit eine mittelgroße Stadt perfekt. Vielen Dank für Ihre Aufmerksamkeit!',
          ar: 'في رأيي فإن المدينة متوسطة الحجم مثالية لفترة تدريبي المهني. شكراً جزيلاً لاهتمامكم!'
        }
      ]
    },
    {
      id: 'gesunde_ernaehrung',
      level: 'Goethe B1 Präsentation',
      titleDe: 'Sport und gesunde Ernährung im Alltag',
      titleAr: 'موضوع عرض B1: أهمية الرياضة والأكل الصحي في الحياة اليومية',
      icon: '🥗',
      duration: '3 Minuten (Offizielles B1-Format)',
      prompts: [
        '1. Einleitung: Warum ist Gesundheit heute so wichtig? (المقدمة)',
        '2. Meine persönlichen Gewohnheiten (عاداتي الصحية والرياضية)',
        '3. Esskultur und Sport im Heimatland (ثقافة الأكل والرياضة في بلدي)',
        '4. Vor- und Nachteile von Fast Food vs. selbst kochen (مقارنة)',
        '5. Fazit & Empfehlung (الخاتمة والنصيحة)'
      ],
      redemittel: [
        { label: 'Einleitung', de: 'Mein Thema lautet „Sport und gesunde Ernährung im Alltag“.', ar: 'عنوان موضوعي هو "الرياضة والتغذية الصحية في الحياة اليومية".' },
        { label: 'Eigene Erfahrung', de: 'Ich versuche, dreimal pro Woche Sport zu treiben und viel frisches Gemüse zu essen.', ar: 'أحاول ممارسة الرياضة ثلاث مرات أسبوعياً وتناول الكثير من الخضروات الطازجة.' },
        { label: 'Gegenüberstellung', de: 'Fast Food ist zwar schnell und bequem, aber auf Dauer ungesund und teuer.', ar: 'صحيح أن الوجبات السريعة سريعة ومريحة، لكنها غير صحية ومكلفة على المدى الطويل.' },
        { label: 'Fazit', de: 'Zusammenfassend kann ich sagen: Wer gesund isst und sich bewegt, hat mehr Energie für den Beruf.', ar: 'خلاصة القول: من يأكل بشكل صحي ويتحرك يمتلك طاقة أكبر للعمل.' }
      ],
      sentences: [
        {
          de: 'In meiner Präsentation geht es um das Thema „Sport und gesunde Ernährung im Alltag“. Ich werde über meine eigenen Erfahrungen, die Situation in meinem Heimatland sowie über Vor- und Nachteile sprechen.',
          ar: 'يدور عرضي التقديمي حول موضوع "الرياضة والتغذية الصحية في الحياة اليومية". سأتحدث عن تجاربي الخاصة والوضع في بلدي الأم وكذلك عن المزايا والعيوب.'
        },
        {
          de: 'Persönlich achte ich sehr auf meine Gesundheit. Ich koche meistens selbst zu Hause und gehe regelmäßig laufen oder ins Fitnessstudio.',
          ar: 'شخصياً أهتم كثيراً بصحتي. أنا أطبخ في الغالب بنفسي في المنزل وأذهب بانتظام للجري أو إلى النادي الرياضي.'
        },
        {
          de: 'In meinem Heimatland kochen Familien traditionell mit frischen Zutaten, aber durch den stressigen Arbeitsalltag essen heute leider auch viele junge Leute Fast Food.',
          ar: 'في بلدي الأم تطبخ العائلات تقليدياً بمكونات طازجة، ولكن بسبب ضغوط العمل اليومية يأكل للأسف اليوم أيضاً كثير من الشباب الوجبات السريعة.'
        },
        {
          de: 'Gesunde Ernährung und Sport haben den großen Vorteil, dass man körperlich fit bleibt, Krankheiten vorbeugt und sich besser auf die Arbeit konzentrieren kann.',
          ar: 'التغذية الصحية والرياضة لهما ميزة كبيرة هي أن المرء يبقى لائقاً بدنياً ويقي نفسه من الأمراض ويستطيع التركيز بشكل أفضل في العمل.'
        },
        {
          de: 'Der einzige Nachteil ist, dass Einkaufen und Kochen etwas Zeit kosten. Trotzdem lohnt es sich auf jeden Fall.',
          ar: 'العيب الوحيد هو أن التسوق والطبخ يستغرقان بعض الوقت. ومع ذلك فإن الأمر يستحق العناء بكل تأكيد.'
        },
        {
          de: 'Deshalb empfehle ich jedem, jeden Tag mindestens dreißig Minuten aktiv zu sein und genug Wasser zu trinken. Danke für das Zuhören!',
          ar: 'لذلك أنصح كل شخص بأن يكون نشيطاً لمدة ثلاثين دقيقة على الأقل يومياً وأن يشرب كمية كافية من الماء. شكراً للاستماع!'
        }
      ]
    }
  ],

  // =====================================================
  // MODULE 3 DATA: 5 Interactive Roleplay Scenarios (Teil 3 — Gemeinsam etwas planen)
  // =====================================================
  teil3Scenarios: [
    {
      id: 'kranker_freund',
      titleDe: 'Einen kranken Freund im Krankenhaus besuchen',
      titleAr: 'زيارة صديق مريض في المستشفى وشراء هدية',
      icon: '🏥',
      situationAr: 'صديقكما المشترك (Samir) في المستشفى. خطط مع شريكك: متى تزورانه؟ كيف تذهبان؟ وماذا تأخذان له كهدية؟',
      points: ['Wann besuchen? (متى الزيارة؟)', 'Wie hinfahren? (وسيلة المواصلات)', 'Was mitbringen? (ماذا نحضر له؟)', 'Wo treffen wir uns? (أين نلتقي؟)'],
      turns: [
        {
          partnerDe: 'Hallo! Unser Freund Samir liegt doch im Krankenhaus. Wollen wir ihn diese Woche zusammen besuchen? Wann hast du Zeit?',
          partnerAr: 'مرحباً! صديقنا سمير يرقد في المستشفى. هل نزوره معاً هذا الأسبوع؟ متى لديك وقت؟',
          promptAr: 'اقترح يوماً ووقتاً مناسبين للزيارة:',
          options: [
            {
              de: 'Ja, das ist eine sehr gute Idee! Passt es dir am Freitag um 16 Uhr? Da bin ich mit der Arbeit fertig.',
              ar: 'نعم، هذه فكرة جيدة جداً! هل يناسبك يوم الجمعة الساعة 16؟ حينها أكون قد انتهيت من العمل.',
              tip: 'ممتاز! استخدمت عبارة الموافقة (Das ist eine sehr gute Idee) + اقتراح موعد محدد (Passt es dir am...).'
            },
            {
              de: 'Gern! Am Mittwoch habe ich leider keine Zeit, aber wie wäre es am Donnerstagabend um 17 Uhr?',
              ar: 'بكل سرور! يوم الأربعاء للأسف ليس لدي وقت، لكن ما رأيك بمساء الخميس الساعة 17؟',
              tip: 'رائع! اعتذرت بلطف واقترحت بديلاً باستخدام (Wie wäre es am...).'
            }
          ]
        },
        {
          partnerDe: 'Ja, super, dieser Termin passt mir auch perfekt! Wie wollen wir denn zum Krankenhaus fahren? Mit dem Bus oder mit meinem Auto?',
          partnerAr: 'نعم، ممتاز، هذا الموعد يناسبني تماماً أيضاً! كيف نريد الذهاب إلى المستشفى؟ بالحافلة أم بسيارتي؟',
          promptAr: 'اختر وسيلة المواصلات واقترح مكان اللقاء:',
          options: [
            {
              de: 'Ich schlage vor, dass wir mit deinem Auto fahren. Das geht schneller. Kannst du mich am Bahnhof abholen?',
              ar: 'أقترح أن نذهب بسيارتك. هذا أسرع. هل يمكنك اصطحابي من محطة القطار؟',
              tip: 'استخدام ممتاز لعبارة الاقتراح الاحترافية: Ich schlage vor, dass...'
            },
            {
              de: 'Lass uns lieber mit der Straßenbahn fahren, weil es am Krankenhaus kaum Parkplätze gibt. Treffen wir uns an der Haltestelle?',
              ar: 'دعنا نذهب بالترام أفضل، لأنه بالكاد توجد مواقف سيارات عند المستشفى. هل نلتقي عند الموقف؟',
              tip: 'حجة منطقية قوية جداً في الامتحان الشفهي (weil es kaum Parkplätze gibt)!'
            }
          ]
        },
        {
          partnerDe: 'Einverstanden, so machen wir das! Aber wir können nicht mit leeren Händen kommen. Was sollen wir Samir mitbringen?',
          partnerAr: 'متفقون، هكذا نفعل! لكن لا يمكننا الذهاب بأيدٍ فارغة. ماذا يجب أن نحضر لسمير؟',
          promptAr: 'اقترح هدية مناسبة للمريض (فواكه، كتاب، مجلة، عصير):',
          options: [
            {
              de: 'Wie wäre es, wenn wir ihm frisches Obst und ein interessantes Buch kaufen? Im Krankenhaus ist es oft langweilig.',
              ar: 'ما رأيك لو نشتري له فواكه طازجة وكتاباً ممتعاً؟ في المستشفى يكون الوقت مملاً غالباً.',
              tip: 'تركيب B1 رائع: Wie wäre es, wenn wir ... kaufen?'
            },
            {
              de: 'Wir könnten ihm Blumen, eine gute Zeitschrift und eine Karte mitbringen. Darüber freut er sich bestimmt!',
              ar: 'يمكننا أن نحضر له زهوراً ومجلة جيدة وبطاقة تهنئة بالسلامة. سيفرح بذلك بالتأكيد!',
              tip: 'استخدام Konjunktiv II للاقتراح المهذب: Wir könnten ... mitbringen.'
            }
          ]
        },
        {
          partnerDe: 'Das gefällt mir sehr gut! Wer kauft die Sachen ein? Soll ich das Obst besorgen und du kaufst das Buch?',
          partnerAr: 'هذا يعجبني كثيراً! من سيشتري الأشياء؟ هل أحضر أنا الفواكه وأنت تشتري الكتاب؟',
          promptAr: 'أكد تقسيم المهام واختم التخطيط:',
          options: [
            {
              de: 'Ja, genau! Ich kümmere mich um das Buch und die Karte, und du kaufst das Obst. Dann sehen wir uns pünktlich. Bis dann!',
              ar: 'نعم بالضبط! أنا سأهتم بالكتاب والبطاقة، وأنت تشتري الفواكه. إذن نلتقي في الموعد تماماً. إلى اللقاء!',
              tip: 'خاتمة مثالية: Ich kümmere mich um ... (أنا سأهتم بـ...)'
            },
            {
              de: 'Perfekt, das machen wir so! Ich rufe dich eine Stunde vorher noch einmal kurz an. Bis dahin!',
              ar: 'ممتاز، سنفعل ذلك هكذا! سأتصل بك قبلها بساعة مرة أخرى باختصار. إلى ذلك الحين!',
              tip: 'تأكيد رائع وإنهاء طبيعي للحوار!'
            }
          ]
        }
      ]
    },
    {
      id: 'wochenendausflug',
      titleDe: 'Einen Wochenendausflug mit Kollegen planen',
      titleAr: 'التخطيط لرحلة نهاية الأسبوع مع الزملاء',
      icon: '🏞️',
      situationAr: 'تريد أنت وزميلك تنظيم رحلة يوم واحد في عطلة نهاية الأسبوع. خططا: إلى أين؟ متى؟ كيف تسافران؟ وماذا تأخذان للطعام؟',
      points: ['Wohin fahren? (الوجهة)', 'Wann genau? (اليوم والساعة)', 'Verkehrsmittel (المواصلات)', 'Essen & Getränke (الطعام والمشروبات)'],
      turns: [
        {
          partnerDe: 'Das Wetter soll am Wochenende richtig schön und sonnig werden! Wollen wir zusammen einen Ausflug machen? Wohin könnten wir fahren?',
          partnerAr: 'الطقس سيكون جميلاً ومشمساً حقاً في عطلة نهاية الأسبوع! هل نقوم برحلة معاً؟ إلى أين يمكننا الذهاب؟',
          promptAr: 'اقترح وجهة للرحلة (إلى البحيرة أو الجبال أو مدينة قريبة):',
          options: [
            {
              de: 'Ja, super Idee! Ich schlage vor, dass wir an den See fahren. Dort können wir spazieren gehen und ein Picknick machen.',
              ar: 'نعم، فكرة رائعة! أقترح أن نذهب إلى البحيرة. هناك يمكننا المشي وعمل نزهة (بيكنيك).',
              tip: 'اقتراح واضح مع ذكر الأنشطة!'
            },
            {
              de: 'Sehr gern! Wie wäre es mit einer Wanderung in den Bergen? Die frische Luft tut uns nach der Arbeitswoche bestimmt gut.',
              ar: 'بكل سرور! ما رأيك بجولة مشي في الجبال؟ الهواء النقي سيفيدنا بالتأكيد بعد أسبوع العمل.',
              tip: 'تعبير طبيعي جداً لمستوى B1!'
            }
          ]
        },
        {
          partnerDe: 'Das klingt toll! Sollen wir lieber am Samstag oder am Sonntag fahren? Und wann wollen wir morgens starten?',
          partnerAr: 'هذا يبدو رائعاً! هل نفضل الذهاب يوم السبت أم الأحد؟ ومتى نريد الانطلاق صباحاً؟',
          promptAr: 'حدد اليوم وساعة الانطلاق:',
          options: [
            {
              de: 'Am Sonntag passt es mir besser, weil ich am Samstag noch einkaufen muss. Wollen wir uns um 9 Uhr morgens treffen?',
              ar: 'يوم الأحد يناسبني أكثر لأنني يجب أن أتسوق يوم السبت. هل نلتقي الساعة 9 صباحاً؟',
              tip: 'ممتاز: ذكرت السبب بـ weil واقترحت ساعة محددة!'
            },
            {
              de: 'Lass uns am Samstag früh um 8:30 Uhr losfahren, damit wir den ganzen Tag nutzen können. Passt dir das?',
              ar: 'دعنا ننطلق يوم السبت مبكراً الساعة 8:30 لكي نتمكن من استغلال اليوم كله. هل يناسبك ذلك؟',
              tip: 'استخدام ممتاز للرابط الغرضي damit (لكي)!'
            }
          ]
        },
        {
          partnerDe: 'Ja, die Uhrzeit ist super! Und wie fahren wir dorthin? Nehmen wir den Zug mit dem Deutschlandticket oder fahren wir mit dem Fahrrad?',
          partnerAr: 'نعم، التوقيت ممتاز! وكيف نذهب إلى هناك؟ هل نأخذ القطار بتذكرة ألمانيا أم نذهب بالدراجة؟',
          promptAr: 'اختر وسيلة النقل المناسبة:',
          options: [
            {
              de: 'Mit dem Zug ist es bequemer, besonders wenn wir Taschen und Essen mitnehmen. Wir haben ja beide das Deutschlandticket.',
              ar: 'بالقطار يكون الأمر أريح، خاصة إذا أخذنا معنا حقائب وطعاماً. فنحن كلانا لدينا تذكرة ألمانيا.',
              tip: 'مفردات واقعية جداً من الحياة في ألمانيا (Deutschlandticket)!'
            },
            {
              de: 'Bei dem schönen Wetter könnten wir mit dem Fahrrad fahren! Das ist sportlich und wir sind flexibel.',
              ar: 'في هذا الطقس الجميل يمكننا الذهاب بالدراجة! هذا رياضي ونكون مرنين.',
              tip: 'رد إيجابي ومقنع!'
            }
          ]
        },
        {
          partnerDe: 'Gute Entscheidung! Und was machen wir mit dem Essen? Wollen wir etwas von zu Hause mitnehmen?',
          partnerAr: 'قرار جيد! وماذا نفعل بشأن الطعام؟ هل نأخذ شيئاً معنا من المنزل؟',
          promptAr: 'اقترح تقسيم الطعام والمشروبات:',
          options: [
            {
              de: 'Ja, ich kann belegte Brötchen und einen Salat vorbereiten. Kannst du kalte Getränke und etwas Obst mitbringen?',
              ar: 'نعم، يمكنني تحضير شطائر وسلطة. هل يمكنك إحضار مشروبات باردة وبعض الفواكه؟',
              tip: 'تقسيم مهام واضح وعملي!'
            },
            {
              de: 'Auf jeden Fall! Ich bringe Kaffee in einer Thermoskanne und Kuchen mit, und du sorgst für Wasser und Sandwiches. Einverstanden?',
              ar: 'بكل تأكيد! سأحضر قهوة في حافظة حرارة وكعكاً، وأنت تهتم بالماء والشطائر. متفقون؟',
              tip: 'إجابة غنية بالمفردات اليومية!'
            }
          ]
        }
      ]
    },
    {
      id: 'abschiedsparty',
      titleDe: 'Eine Abschiedsparty für einen Kollegen organisieren',
      titleAr: 'تنظيم حفلة وداع لزميل في العمل',
      icon: '🎉',
      situationAr: 'زميلكما في العمل (Herr Müller) سينتقل إلى مدينة أخرى. خططا لحفلة وداع صغيرة: متى؟ أين؟ الطعام؟ والهدية؟',
      points: ['Wann feiern? (الموعد)', 'Wo feiern? (المكان)', 'Essen & Getränke (الضيافة)', 'Abschiedsgeschenk (هدية الوداع)'],
      turns: [
        {
          partnerDe: 'Unser Kollege Lukas wechselt doch nächste Woche die Firma. Wir sollten unbedingt eine kleine Abschiedsfeier für ihn organisieren! Wann machen wir das am besten?',
          partnerAr: 'زميلنا لوكاس سيغير الشركة الأسبوع القادم. يجب علينا حتماً تنظيم حفلة وداع صغيرة له! متى نفعل ذلك بأفضل شكل؟',
          promptAr: 'اقترح موعد الحفلة:',
          options: [
            {
              de: 'Das finde ich auch! Am besten machen wir die Feier am Freitagnachmittag direkt nach Feierabend um 17 Uhr.',
              ar: 'أرى ذلك أيضاً! من الأفضل أن نقيم الحفلة بعد ظهر الجمعة مباشرة بعد انتهاء العمل الساعة 17.',
              tip: 'كلمة Feierabend (نهاية الدوام) كلمة ألمانية أساسية جداً في العمل!'
            },
            {
              de: 'Ja, unbedingt! Wie wäre es am Samstagabend um 19 Uhr? Da haben alle Kollegen Zeit und keinen Stress.',
              ar: 'نعم، بالتأكيد! ما رأيك بمساء السبت الساعة 19؟ حينها يكون لدى جميع الزملاء وقت وبدون ضغط.',
              tip: 'تبرير ممتاز للموعد!'
            }
          ]
        },
        {
          partnerDe: 'Sehr gut! Und wo wollen wir feiern? Hier im großen Besprechungsraum im Büro oder lieber in einem Restaurant?',
          partnerAr: 'جيد جداً! وأين نريد الاحتفال؟ هنا في قاعة الاجتماعات الكبيرة في المكتب أم الأفضل في مطعم؟',
          promptAr: 'اختر المكان المناسب للحفلة:',
          options: [
            {
              de: 'Ich denke, ein gemütliches Restaurant in der Nähe ist schöner. Ich kann heute Abend dort anrufen und einen großen Tisch reservieren.',
              ar: 'أعتقد أن مطعماً مريحاً في الجوار أجمل. يمكنني الاتصال هناك هذا المساء وحجز طاولة كبيرة.',
              tip: 'مبادرة ممتازة: einen Tisch reservieren!'
            },
            {
              de: 'Feiern wir lieber zuerst im Büro mit Kuchen und Getränken, weil dann wirklich alle Kollegen aus der Abteilung dabei sein können.',
              ar: 'دعنا نحتفل أفضل أولاً في المكتب مع الكعك والمشروبات، لأنه حينها يستطيع جميع الزملاء في القسم الحضور فعلاً.',
              tip: 'حجة قوية ومقنعة!'
            }
          ]
        },
        {
          partnerDe: 'Einverstanden! Wir möchten ihm auch ein schönes Abschiedsgeschenk von ganzen Team überreichen. Hast du eine Idee?',
          partnerAr: 'متفقون! نود أيضاً أن نقدم له هدية وداع جميلة من الفريق بأكمله. هل لديك فكرة؟',
          promptAr: 'اقترح هدية تذكارية من فريق العمل:',
          options: [
            {
              de: 'Wir könnten ein Fotobuch mit Erinnerungen aus unserer Abteilung machen und dazu einen Gutschein schenken.',
              ar: 'يمكننا عمل ألبوم صور مع ذكريات من قسمنا وإهداء قسيمة شراء معه.',
              tip: 'فكرة كلاسيكية محبوبة جداً في الشركات الألمانية (Fotobuch + Gutschein)!'
            },
            {
              de: 'Wie wäre es mit einer schönen Armbanduhr oder einer Reisetasche? Wir können von jedem Kollegen 10 Euro einsammeln.',
              ar: 'ما رأيك بساعة يد جميلة أو حقيبة سفر؟ يمكننا جمع 10 يورو من كل زميل.',
              tip: 'اقتراح عملي مع ذكر جمع المبلغ (Geld einsammeln)!'
            }
          ]
        },
        {
          partnerDe: 'Tolle Idee! Und wie informieren wir die anderen Kollegen, ohne dass Lukas etwas merkt? Es soll ja eine Überraschung sein!',
          partnerAr: 'فكرة رائعة! وكيف نخبر الزملاء الآخرين دون أن يلاحظ لوكاس شيئاً؟ فيجب أن تكون مفاجأة!',
          promptAr: 'اقترح طريقة إبلاغ الزملاء سراً:',
          options: [
            {
              de: 'Ich erstelle heute eine WhatsApp-Gruppe mit allen Kollegen außer Lukas. So können wir alles heimlich planen!',
              ar: 'سأنشئ اليوم مجموعة واتساب مع جميع الزملاء ما عدا لوكاس. وهكذا يمكننا التخطيط لكل شيء سراً!',
              tip: 'حل ذكي وطبيعي جداً!'
            },
            {
              de: 'Ich spreche die Kollegen persönlich in der Mittagspause an und sammle gleich das Geld für das Geschenk ein.',
              ar: 'سأتحدث مع الزملاء شخصياً في استراحة الغداء وأجمع المال للهدية مباشرة.',
              tip: 'تنظيم ممتاز وإنهاء ناجح للمحادثة!'
            }
          ]
        }
      ]
    },
    {
      id: 'deutschpruefung',
      titleDe: 'Zusammen für die Deutschprüfung lernen',
      titleAr: 'المذاكرة المشتركة لامتحان اللغة الألمانية',
      icon: '📚',
      situationAr: 'امتحان اللغة الألمانية بعد أسبوعين! خطط مع زميلك: متى تدرسان معاً؟ أين؟ وعلى أي أجزاء من الامتحان ستركزان؟',
      points: ['Wann und wie oft lernen? (الأوقات)', 'Wo treffen? (المكان: المكتبة أم البيت)', 'Was üben? (Sprechen / Schreiben)', 'Lernmaterialien (الكتب والنماذج)'],
      turns: [
        {
          partnerDe: 'In zwei Wochen ist schon unsere Deutschprüfung! Ich bin ein bisschen nervös. Wollen wir uns diese Woche treffen und zusammen lernen?',
          partnerAr: 'بعد أسبوعين امتحاننا للغة الألمانية! أنا متوتر قليلاً. هل نلتقي هذا الأسبوع وندرس معاً؟',
          promptAr: 'وافق واقترح أيام وساعات المذاكرة:',
          options: [
            {
              de: 'Ja, auf jeden Fall! Zusammen lernen motiviert viel mehr. Sollen wir uns dreimal pro Woche am Nachmittag um 16 Uhr treffen?',
              ar: 'نعم، بكل تأكيد! التعلم معاً يحفز أكثر بكثير. هل نلتقي ثلاث مرات في الأسبوع بعد الظهر الساعة 16؟',
              tip: 'رد مشجع واقتراح واضح!'
            },
            {
              de: 'Keine Sorge, wir schaffen das! Lass uns ab morgen jeden Abend von 18 bis 20 Uhr gemeinsam üben.',
              ar: 'لا تقلق، سننجح في ذلك! دعنا نتدرب معاً ابتداءً من الغد كل مساء من الساعة 18 حتى 20.',
              tip: 'عبارة تشجيع رائعة: Keine Sorge, wir schaffen das!'
            }
          ]
        },
        {
          partnerDe: 'Super, danke dir! Wo können wir uns am besten konzentrieren? Bei mir zu Hause, im Café oder in der Stadtbibliothek?',
          partnerAr: 'ممتاز، شكراً لك! أين يمكننا التركيز بأفضل شكل؟ عندي في البيت أم في المقهى أم في مكتبة المدينة؟',
          promptAr: 'اختر مكان المذاكرة مع ذكر السبب:',
          options: [
            {
              de: 'Im Café ist es oft zu laut. Ich schlage vor, dass wir uns bei dir oder bei mir zu Hause treffen, damit wir laut das Sprechen üben können.',
              ar: 'في المقهى يكون الجو صاخباً غالباً. أقترح أن نلتقي عندك أو عندي في البيت لكي نتمكن من التدرب على التحدث بصوت عالٍ.',
              tip: 'حجة ذكية جداً: في المكتبة لا يمكن التحدث بصوت عالٍ، بينما في البيت يمكن ذلك!'
            },
            {
              de: 'Für Lesen und Schreiben ist die Stadtbibliothek super, weil es dort ruhig ist. Und für den Teil Sprechen gehen wir danach zu mir nach Hause.',
              ar: 'بالنسبة للقراءة والكتابة فإن مكتبة المدينة ممتازة لأنها هادئة هناك. ولجزء التحدث نذهب بعد ذلك إلى بيتي.',
              tip: 'خطة منظمة ومقنعة جداً!'
            }
          ]
        },
        {
          partnerDe: 'Das stimmt, daran habe ich gar nicht gedacht! Welche Prüfungsteile sollten wir denn besonders intensiv trainieren?',
          partnerAr: 'هذا صحيح، لم أفكر في ذلك أبداً! ما هي أجزاء الامتحان التي ينبغي أن نتدرب عليها بتركيز خاص؟',
          promptAr: 'اقترح التركيز على المحادثة (Sprechen) والكتابة (Schreiben):',
          options: [
            {
              de: 'Meiner Meinung nach sollten wir vor allem „Sprechen“ und „Schreiben“ zusammen üben. Wir können Dialoge spielen und unsere E-Mails gegenseitig korrigieren.',
              ar: 'في رأيي ينبغي أن نتدرب قبل كل شيء على "التحدث" و"الكتابة" معاً. يمكننا تمثيل الحوارات وتصحيح رسائلنا الإلكترونية لبعضنا البعض.',
              tip: 'مفردات أكاديمية ممتازة: gegenseitig korrigieren!'
            },
            {
              de: 'Lass uns komplette Modellprüfungen mit Stoppuhr machen, damit wir uns an die echte Prüfungszeit gewöhnen.',
              ar: 'دعنا نحل نماذج امتحانات كاملة مع مؤقت لكي نعتاد على وقت الامتحان الحقيقي.',
              tip: 'استخدام الفعل: sich gewöhnen an + Akkusativ!'
            }
          ]
        },
        {
          partnerDe: 'Perfekt! Was soll ich zum ersten Treffen alles mitbringen?',
          partnerAr: 'ممتاز! ماذا يجب أن أحضر معي إلى اللقاء الأول؟',
          promptAr: 'حدد أدوات المذاكرة واختم الحوار:',
          options: [
            {
              de: 'Bring bitte dein Übungsbuch und deinen Laptop mit. Ich drucke die Redemittel-Listen und Prüfungskarten aus. Bis morgen!',
              ar: 'أحضر من فضلك كتاب التمارين وحاسوبك المحمول. أنا سأطبع قوائم العبارات وبطاقات الامتحان. إلى الغد!',
              tip: 'خاتمة عملية وممتازة!'
            },
            {
              de: 'Nimm einfach deine Notizen und Stifte mit, ich habe schon alle Modelltests vorbereitet. Ich freue mich auf morgen!',
              ar: 'خذ فقط ملاحظاتك وأقلامك معك، فقد جهزت بالفعل جميع الاختبارات النموذجية. أتطلع إلى الغد!',
              tip: 'رد رائع وودود!'
            }
          ]
        }
      ]
    },
    {
      id: 'geburtstagsgeschenk',
      titleDe: 'Ein Geburtstagsgeschenk kaufen & Überraschung planen',
      titleAr: 'شراء هدية عيد ميلاد مشتركة ومفاجأة صديق',
      icon: '🎁',
      situationAr: 'صديقكما (Tarek) عيد ميلاده يوم السبت. خططا معاً: ماذا تشتريان له؟ كم الميزانية؟ متى تذهبان للتسوق؟',
      points: ['Was schenken? (ما هي الهدية)', 'Wie viel Geld ausgeben? (الميزانية)', 'Wann und wo kaufen? (متى وأين نشتريها)', 'Kuchen / Karte (الكعكة والبطاقة)'],
      turns: [
        {
          partnerDe: 'Am Samstag hat doch unser Freund Tarek Geburtstag! Er hat uns zu sich nach Hause eingeladen. Was wollen wir ihm zusammen schenken?',
          partnerAr: 'يوم السبت عيد ميلاد صديقنا طارق! لقد دعانا إلى بيته. ماذا نريد أن نهديه معاً؟',
          promptAr: 'اقترح هدية تناسب اهتماماته (رياضة، إلكترونيات، ملابس):',
          options: [
            {
              de: 'Tarek treibt doch sehr gern Sport. Wie wäre es, wenn wir ihm gute Bluetooth-Kopfhörer fürs Training kaufen?',
              ar: 'طارق يحب ممارسة الرياضة كثيراً. ما رأيك لو نشتري له سماعات بلوتوث جيدة للتمرين؟',
              tip: 'ربط الهدية بهواية الصديق يعطي نقاطاً عالية في الامتحان!'
            },
            {
              de: 'Er liest sehr gern und trinkt gern Kaffee. Wir könnten ihm eine schöne Kaffeemaschine oder einen Rucksack für die Arbeit schenken.',
              ar: 'هو يحب القراءة كثيراً ويحب شرب القهوة. يمكننا أن نهديه ماكينة قهوة جميلة أو حقيبة ظهر للعمل.',
              tip: 'اقتراح رائع باستخدام Wir könnten...'
            }
          ]
        },
        {
          partnerDe: 'Das ist wirklich eine tolle Idee! Darüber wird er sich sehr freuen. Wie viel Geld wollen wir denn ungefähr ausgeben?',
          partnerAr: 'هذه حقاً فكرة رائعة! سيفرح بها كثيراً. كم من المال نريد أن ننفق تقريباً؟',
          promptAr: 'اقترح ميزانية مناسبة وتقسيم المبلغ:',
          options: [
            {
              de: 'Ich denke, insgesamt 40 bis 50 Euro sind gut. Dann zahlt jeder von uns 20 oder 25 Euro. Ist das für dich in Ordnung?',
              ar: 'أعتقد أن 40 إلى 50 يورو إجمالاً مبلغ جيد. حينها يدفع كل واحد منا 20 أو 25 يورو. هل هذا مناسب لك؟',
              tip: 'ممتاز: حددت السعر وسألت شريكك: Ist das für dich in Ordnung?'
            },
            {
              de: 'Wenn wir noch zwei andere Freunde fragen, können wir zusammen 60 Euro sammeln. Dann kostet es für jeden nur 15 Euro.',
              ar: 'إذا سألنا صديقين آخرين أيضاً، يمكننا جمع 60 يورو معاً. حينها يكلف الأمر كل واحد 15 يورو فقط.',
              tip: 'فكرة ذكية جداً في التخطيط المشترك!'
            }
          ]
        },
        {
          partnerDe: 'Ja, das passt mir super! Wollen wir das Geschenk im Einkaufszentrum kaufen oder lieber online bestellen?',
          partnerAr: 'نعم، هذا يناسبني تماماً! هل نريد شراء الهدية من مركز التسوق أم الأفضل طلبها عبر الإنترنت؟',
          promptAr: 'اختر طريقة وموعد الشراء:',
          options: [
            {
              de: 'Da der Geburtstag schon am Samstag ist, gehen wir lieber morgen um 17 Uhr zusammen ins Einkaufszentrum. Online kommt das Paket vielleicht zu spät.',
              ar: 'بما أن عيد الميلاد يوم السبت بالفعل، دعنا نذهب غداً الساعة 17 معاً إلى مركز التسوق أفضل. عبر الإنترنت ربما يصل الطرد متأخراً.',
              tip: 'استخدام الرابط السببي Da (بما أن) في بداية الجملة — مستوى B1 ممتاز!'
            },
            {
              de: 'Lass uns morgen Nachmittag in die Stadt gehen. Dort können wir das Geschenk direkt einpacken lassen.',
              ar: 'دعنا نذهب غداً بعد الظهر إلى المدينة. هناك يمكننا تغليف الهدية مباشرة.',
              tip: 'تعبير جميل: das Geschenk einpacken lassen!'
            }
          ]
        },
        {
          partnerDe: 'Stimmt, das ist sicherer! Sollen wir für die Feier am Samstag auch noch einen Kuchen backen?',
          partnerAr: 'صحيح، هذا أضمن! هل نخبز أيضاً كعكة للحفلة يوم السبت؟',
          promptAr: 'وافق على تحضير الكعكة وبطاقة التهنئة:',
          options: [
            {
              de: 'Sehr gern! Ich backe am Samstagvormittag einen Schokoladenkuchen, und du bringst eine schöne Geburtstagskarte mit. Bis morgen!',
              ar: 'بكل سرور! أنا سأخبز صباح السبت كعكة شوكولاتة، وأنت تحضر بطاقة عيد ميلاد جميلة. إلى الغد!',
              tip: 'ختام رائع ومتكامل للتخطيط!'
            },
            {
              de: 'Gute Idee! Wir können zusammen eine Torte beim Bäcker bestellen und alle unterschreiben auf der Karte. Dann bis morgen um 17 Uhr!',
              ar: 'فكرة جيدة! يمكننا معاً طلب تورتة من المخبز ويوقع الجميع على البطاقة. إذن إلى الغد الساعة 17!',
              tip: 'ممتاز! أنهيت الحوار بتأكيد الموعد.'
            }
          ]
        }
      ]
    }
  ],

  // =====================================================
  // MODULE 4 DATA: 10 Essential Ausbildung & Job Interview Questions
  // =====================================================
  ausbildungQuestions: [
    {
      id: 'ueber_sich',
      num: 1,
      questionDe: 'Erzählen Sie bitte kurz etwas über sich.',
      questionAr: 'حدثنا من فضلك باختصار عن نفسك.',
      category: 'Einstieg & Persönlichkeit',
      goldenTip: 'في مقابلة الـ Ausbildung لا تسرد سيرتك الذاتية المملة كلمة بكلمة، بل اذكر في 4-5 جمل: اسمك، عمرك، خلفيتك الدراسية/المهنية، مستواك في الألمانية، ولماذا أنت متحمس لهذا المجال تحديداً.',
      buildingBlocks: [
        'Mein Name ist ... und ich bin ... Jahre alt.',
        'Ich habe großes Interesse an ...',
        'Ich lerne intensiv Deutsch und spreche bereits auf B1-Niveau.',
        'Ich bin ein zuverlässiger und lernbereiter Mensch.'
      ],
      idealAnswer1: {
        label: 'نموذج إجابة 1 (شامل ومناسب لجميع تخصصات الـ Ausbildung)',
        de: 'Sehr gern! Mein Name ist Dhyaa, ich bin 24 Jahre alt und komme aus dem Irak. Ich habe mich schon immer für praktische und technische Aufgaben begeistert. In den letzten Monaten habe ich intensiv Deutsch gelernt, um mich optimal auf meine Ausbildung in Deutschland vorzubereiten. Ich bin sehr motiviert, zuverlässig und freue mich darauf, in Ihrem Betrieb viel Neues zu lernen.',
        ar: 'بكل سرور! اسمي ضياء، عمري 24 عاماً وأنا من العراق. لطالما كنت متحمساً للمهام العملية والتقنية. في الأشهر الماضية تعلمت الألمانية بتركيز لأستعد بأفضل شكل لتدريبي المهني في ألمانيا. أنا متحفز جداً وموثوق وأتطلع لتعلم الكثير من الأشياء الجديدة في مؤسستكم.'
      },
      idealAnswer2: {
        label: 'نموذج إجابة 2 (مختصر ومباشر وواثق)',
        de: 'Vielen Dank für die Einladung zum Gespräch! Ich heiße Dhyaa, komme aus dem Irak und habe dort bereits erste praktische Erfahrungen gesammelt. Ich arbeite sehr gern im Team, lerne schnell und möchte jetzt in Deutschland durch eine fundierte Ausbildung beruflich durchstarten.',
        ar: 'شكراً جزيلاً على الدعوة للمقابلة! اسمي ضياء، من العراق وقد اكتسبت هناك بالفعل خبرات عملية أولية. أحب كثيراً العمل ضمن فريق، وأتعلم بسرعة، وأود الآن الانطلاق مهنياً في ألمانيا من خلال تدريب مهني متين.'
      }
    },
    {
      id: 'warum_ausbildung',
      num: 2,
      questionDe: 'Warum möchten Sie genau diese Ausbildung bei uns machen?',
      questionAr: 'لماذا تريد القيام بهذا التدريب المهني تحديداً لدينا؟',
      category: 'Motivation & Berufswahl',
      goldenTip: 'أصحاب العمل في ألمانيا يبحثون عن الشغف الحقيقي (Motivation) ومعرفتك بطبيعة المهنة: اذكر أنك تحب المزيج بين الدراسة النظرية والعمل التطبيقي (Theorie und Praxis) وأن سمعة الشركة/المؤسسة ممتازة.',
      buildingBlocks: [
        'Dieser Beruf verbindet Theorie und praktische Arbeit perfekt.',
        'Ich arbeite gern mit Menschen / mit moderner Technik.',
        'Ihr Betrieb hat einen sehr guten Ruf und bietet tolle Lernmöglichkeiten.',
        'Dieser Beruf hat sehr gute Zukunftschancen.'
      ],
      idealAnswer1: {
        label: 'نموذج إجابة 1 (التركيز على الشغف والجمع بين النظرية والتطبيق)',
        de: 'Ich habe mich für diese Ausbildung entschieden, weil sie Theorie und Praxis optimal verbindet. Ich löse gern praktische Aufgaben und sehe am Ende des Tages gern ein konkretes Ergebnis meiner Arbeit. Außerdem hat Ihr Unternehmen einen ausgezeichneten Ruf bei der Betreuung von Auszubildenden.',
        ar: 'لقد اخترت هذا التدريب المهني لأنه يربط بين النظرية والتطبيق بشكل مثالي. أنا أحب حل المهام العملية وأحب أن أرى في نهاية اليوم نتيجة ملموسة لعملي. علاوة على ذلك تتمتع شركتكم بسمعة ممتازة في رعاية المتدربين.'
      },
      idealAnswer2: {
        label: 'نموذج إجابة 2 (التركيز على المستقبل المهني وبيئة الشركة)',
        de: 'Dieser Beruf passt perfekt zu meinen Stärken, weil man hier genau, verantwortungsbewusst und im Team arbeiten muss. Über Ihre Webseite habe ich gesehen, dass Sie moderne Arbeitsmethoden nutzen und viel Wert auf Qualität legen – genau in so einem Umfeld möchte ich lernen.',
        ar: 'هذه المهنة تناسب نقاط قوتي تماماً، لأنه يجب على المرء هنا أن يعمل بدقة وبروح المسؤولية وضمن فريق. ومن خلال موقعكم الإلكتروني رأيت أنكم تستخدمون أساليب عمل حديثة وتولون قيمة كبيرة للجودة — وفي مثل هذه البيئة بالضبط أرغب في التعلم.'
      }
    },
    {
      id: 'warum_deutschland',
      num: 3,
      questionDe: 'Warum möchten Sie in Deutschland arbeiten und leben?',
      questionAr: 'لماذا تريد العمل والعيش في ألمانيا؟',
      category: 'Integration & Zukunft',
      goldenTip: 'امحُ أي قلق لدى صاحب العمل بشأن الاستقرار: وضّح أن نظام التدريب المهني المزدوج (duale Ausbildung) في ألمانيا فريد عالمياً، وأنك تخطط للبقاء والعمل على المدى الطويل وتطوير لغتك باستمرار.',
      buildingBlocks: [
        'Das duale Ausbildungssystem in Deutschland hat weltweit einen hervorragenden Ruf.',
        'In Deutschland gibt es sehr gute Weiterbildungs- und Karrierechancen.',
        'Ich schätze Pünktlichkeit, Ordnung und klare Strukturen.',
        'Ich möchte langfristig hier leben und mich gut integrieren.'
      ],
      idealAnswer1: {
        label: 'نموذج إجابة 1 (الإشادة بنظام الـ Duale Ausbildung والاستقرار)',
        de: 'Das duale Ausbildungssystem in Deutschland ist weltweit einzigartig, weil man von Anfang an im Betrieb arbeitet und gleichzeitig die Berufsschule besucht. Außerdem schätze ich die klaren Strukturen, die Sicherheit und die guten Zukunftsperspektiven in Deutschland. Ich möchte hier langfristig leben und ein wertvoller Teil Ihres Teams werden.',
        ar: 'نظام التدريب المهني المزدوج في ألمانيا فريد من نوعه عالمياً لأن المرء يعمل منذ البداية في المؤسسة ويدرس في الوقت نفسه في المدرسة المهنية. كما أنني أقدر الهياكل الواضحة والأمان والآفاق المستقبلية الجيدة في ألمانيا. أود العيش هنا على المدى الطويل وأن أصبح جزءاً قيّماً من فريقكم.'
      },
      idealAnswer2: {
        label: 'نموذج إجابة 2 (الاندماج الثقافي والمهني)',
        de: 'Deutschland bietet jungen, motivierten Fachkräften sehr faire Chancen, sich beruflich weiterzuentwickeln. Deshalb lerne ich jeden Tag mit großer Begeisterung Deutsch, um mich sowohl im Beruf als auch im Alltag schnell und erfolgreich zu integrieren.',
        ar: 'تقدم ألمانيا للكوادر الشابة المتحفزة فرصاً عادلة جداً للتطور مهنياً. ولذلك أتعلم كل يوم بحماس كبير اللغة الألمانية لكي أندمج بسرعة ونجاح سواء في المهنة أو في الحياة اليومية.'
      }
    },
    {
      id: 'staerken',
      num: 4,
      questionDe: 'Was sind Ihre größten Stärken?',
      questionAr: 'ما هي أبرز نقاط قوتك؟',
      category: 'Persönlichkeit',
      goldenTip: 'أهم 4 صفات يعشقها كل صاحب عمل ألماني في المتدرب: Pünktlichkeit (الانضباط بالمواعيد)، Zuverlässigkeit (الموثوقية)، Teamfähigkeit (العمل الجماعي)، و Lernbereitschaft (الاستعداد للتعلم). اربط الصفة بمثال عملي!',
      buildingBlocks: [
        'Zu meinen größten Stärken gehören Zuverlässigkeit und Pünktlichkeit.',
        'Ich bin sehr lernbereit und nehme Feedback positiv an.',
        'Ich arbeite strukturiert, sorgfältig und geduldig.',
        'Ich bin teamfähig und helfe gern meinen Kollegen.'
      ],
      idealAnswer1: {
        label: 'نموذج إجابة 1 (الموثوقية + الانضباط + حب التعلم)',
        de: 'Zu meinen größten Stärken zählen auf jeden Fall Zuverlässigkeit, Pünktlichkeit und eine hohe Lernbereitschaft. Wenn ich eine Aufgabe übernehme, erledige ich sie sorgfältig bis zum Ende. Außerdem fällt es mir leicht, mich in neue Teams einzufügen.',
        ar: 'من أبرز نقاط قوتي بكل تأكيد الموثوقية، والانضباط بالمواعيد، والاستعداد العالي للتعلم. عندما أتولى مهمة ما، أنجزها بعناية حتى النهاية. بالإضافة إلى ذلك يسهل عليّ الاندماج في فرق عمل جديدة.'
      },
      idealAnswer2: {
        label: 'نموذج إجابة 2 (الصبر والهدوء والتنظيم مع مثال)',
        de: 'Ich bin ein sehr geduldiger und gut organisierter Mensch. Das hat mir auch beim intensiven Deutschlernen sehr geholfen: Ich habe mir jeden Tag feste Lernziele gesetzt und konsequent daran gearbeitet. Diese Disziplin bringe ich auch in die Ausbildung mit.',
        ar: 'أنا إنسان صبور جداً ومنظم جيداً. وقد ساعدني ذلك كثيراً أيضاً أثناء تعلمي المكثف للألمانية: فقد وضعت لنفسي كل يوم أهداف تعلم ثابتة وعملت عليها باستمرار. وهذا الانضباط أحضره معي أيضاً إلى التدريب المهني.'
      }
    },
    {
      id: 'schwaechen',
      num: 5,
      questionDe: 'Haben Sie auch eine Schwäche? Wie gehen Sie damit um?',
      questionAr: 'هل لديك أيضاً نقطة ضعف؟ وكيف تتعامل معها؟',
      category: 'Selbstreflexion',
      goldenTip: 'إياك أن تقول "ليس لدي نقاط ضعف" أو أن تذكر عيباً خطيراً كالكسل أو التأخر! اذكر نقطة ضعف بسيطة وصادقة (مثل: التوتر البسيط عند التحدث بالألمانية في مواقف جديدة، أو الرغبة في التأكد من كل تفصيل) ووضّح كيف تعمل على تحسينها!',
      buildingBlocks: [
        'Manchmal bin ich am Anfang noch etwas nervös, wenn ich auf Deutsch telefoniere.',
        'Daran arbeite ich aber aktiv, indem ich jeden Tag übe.',
        'Am Anfang frage ich lieber einmal mehr nach, um keine Fehler zu machen.',
        'Ich schreibe mir wichtige Dinge immer sofort in mein Notizbuch.'
      ],
      idealAnswer1: {
        label: 'نموذج إجابة 1 (ذكي جداً للمتقدمين الدوليين: اللغة في البداية وكيفية تطويرها)',
        de: 'Da Deutsch nicht meine Muttersprache ist, bin ich in ganz neuen Situationen manchmal kurz vorsichtig, weil ich alles richtig ausdrücken möchte. Ich gehe aber aktiv damit um: Ich übe täglich das Sprechen und scheue mich nicht, höflich nachzufragen, wenn ich ein Fachwort noch nicht kenne.',
        ar: 'بما أن الألمانية ليست لغتي الأم، أكون أحياناً في المواقف الجديدة تماماً حذراً للحظة لأنني أرغب في التعبير عن كل شيء بشكل صحيح. لكنني أتعامل مع ذلك بنشاط: فأتدرب يومياً على التحدث ولا أتردد في السؤال بأدب إذا كنت لا أعرف مصطلحاً تخصصياً بعد.'
      },
      idealAnswer2: {
        label: 'نموذج إجابة 2 (الحرص الزائد على الدقة وكيفية موازنته)',
        de: 'Manchmal bin ich bei neuen Aufgaben fast ein bisschen zu perfektionistisch und kontrolliere meine Arbeit zweimal, was am Anfang etwas mehr Zeit kostet. Mit zunehmender Routine werde ich aber schnell sicherer und schneller.',
        ar: 'أحياناً أكون في المهام الجديدة مثالياً أكثر من اللازم قليلاً وأراجع عملي مرتين، مما يستغرق في البداية وقتاً أطول قليلاً. ولكن مع زيادة التعود أصبح سريعاً أكثر ثقة وسرعة.'
      }
    },
    {
      id: 'team_oder_allein',
      num: 6,
      questionDe: 'Arbeiten Sie lieber im Team oder lieber allein?',
      questionAr: 'هل تفضل العمل ضمن فريق أم بمفردك؟',
      category: 'Arbeitsweise',
      goldenTip: 'الإجابة الذهبية في ألمانيا: وضّح أنك تحب العمل ضمن فريق (لأن تبادل الخبرات والمساعدة المتبادلة مهمان في الـ Ausbildung)، ولكنك تستطيع أيضاً إنجاز مهامك الفردية باستقلالية وتركيز!',
      buildingBlocks: [
        'Ich arbeite sehr gern im Team, weil man voneinander lernen kann.',
        'Gleichzeitig kann ich meine Aufgaben aber auch selbstständig erledigen.',
        'Eine gute Kommunikation unter Kollegen ist mir sehr wichtig.',
        'Gerade in der Ausbildung hilft Teamarbeit enorm.'
      ],
      idealAnswer1: {
        label: 'نموذج إجابة 1 (الجمع الذكي بين روح الفريق والاستقلالية)',
        de: 'Ehrlich gesagt mag ich die Kombination aus beidem. Ich arbeite sehr gern im Team, weil man sich gegenseitig unterstützen und besonders als Auszubildender viel von erfahrenen Kollegen lernen kann. Wenn ich aber eine klare Aufgabe bekomme, kann ich sie auch ruhig und selbstständig allein erledigen.',
        ar: 'بصراحة أحب المزيج بين الاثنين. أحب كثيراً العمل ضمن فريق لأن المرء يستطيع دعم الآخرين، وخاصة كمتدرب يمكنه تعلم الكثير من الزملاء ذوي الخبرة. ولكن عندما أحصل على مهمة واضحة، يمكنني أيضاً إنجازها بهدوء واستقلالية بمفردي.'
      },
      idealAnswer2: {
        label: 'نموذج إجابة 2 (التركيز على التعاون والجو الإيجابي)',
        de: 'Ich bin definitiv ein Teamplayer. Mir macht die Arbeit doppelt so viel Spaß, wenn man gemeinsam an einem Ziel arbeitet und sich aufeinander verlassen kann. Natürlich übernehme ich aber auch volle Verantwortung für meine eigenen Aufgaben.',
        ar: 'أنا بالتأكيد شخص يحب العمل الجماعي (Teamplayer). فالعمل يمتعني مضاعفاً عندما يعمل الجميع معاً نحو هدف واحد ويمكن الاعتماد على بعضنا البعض. وبالطبع أتحمل أيضاً المسؤولية الكاملة عن مهامي الخاصة.'
      }
    },
    {
      id: 'stress',
      num: 7,
      questionDe: 'Wie gehen Sie mit Stress oder schwierigen Situationen bei der Arbeit um?',
      questionAr: 'كيف تتعامل مع ضغط العمل أو المواقف الصعبة؟',
      category: 'Belastbarkeit',
      goldenTip: 'يريد المُمتحن التأكد من أنك لا تفقد أعصابك عند ضغط العمل: اذكر أنك تحافظ على هدوئك (Ruhe bewahren)، وترتب الأولويات (Prioritäten setzen)، وتطلب المساعدة بوضوح إذا لزم الأمر، وتوازن يومك بالرياضة بعد العمل.',
      buildingBlocks: [
        'In stressigen Situationen bewahre ich zuerst Ruhe.',
        'Ich mache mir eine kurze Liste und setze klare Prioritäten.',
        'Wenn ich unsicher bin, frage ich rechtzeitig meinen Ausbilder.',
        'Nach der Arbeit mache ich Sport, um den Kopf freizubekommen.'
      ],
      idealAnswer1: {
        label: 'نموذج إجابة 1 (الهدوء + ترتيب الأولويات)',
        de: 'Wenn es bei der Arbeit stressig wird, versuche ich immer, ruhig zu bleiben und einen klaren Kopf zu bewahren. Ich überlege mir zuerst, welche Aufgabe am wichtigsten ist, und arbeite Schritt für Schritt. Falls ich als Auszubildender einmal nicht weiterweiß, frage ich lieber rechtzeitig meine Kollegen um Rat.',
        ar: 'عندما يصبح هناك ضغط في العمل، أحاول دائماً البقاء هادئاً والحفاظ على صفاء ذهني. أفكر أولاً أي مهمة هي الأهم، وأعمل خطوة بخطوة. وإذا لم أعرف كيف أتصرف كمتدرب، أفضل سؤال زملائي النصيحة في الوقت المناسب.'
      },
      idealAnswer2: {
        label: 'نموذج إجابة 2 (التعامل مع المشكلات + التوازن الصحي)',
        de: 'Mit Druck kann ich gut umgehen. Ich konzentriere mich auf die Lösung und nicht auf das Problem. Außerdem hilft mir Sport in meiner Freizeit sehr dabei, Stress abzubauen und am nächsten Tag wieder voller Energie zu sein.',
        ar: 'أستطيع التعامل بشكل جيد مع الضغط. أنا أركز على الحل وليس على المشكلة. بالإضافة إلى ذلك تساعدني الرياضة في وقت فراغي كثيراً على تفريغ التوتر وأن أكون في اليوم التالي مليئاً بالطاقة من جديد.'
      }
    },
    {
      id: 'erfahrungen',
      num: 8,
      questionDe: 'Welche Erfahrungen oder Fähigkeiten bringen Sie schon für diese Ausbildung mit?',
      questionAr: 'ما هي الخبرات أو المهارات التي تمتلكها بالفعل لهذا التدريب المهني؟',
      category: 'Qualifikation',
      goldenTip: 'حتى لو لم تكن لديك خبرة طويلة، اذكر: دراستك السابقة، أي عمل أو تدريب عملي (Praktikum)، مهارات الحاسوب، اللغات (العربية، الإنجليزية، الألمانية)، وقدرتك على التعلم السريع!',
      buildingBlocks: [
        'Ich habe meinen Schulabschluss mit guten Noten gemacht.',
        'Ich habe bereits erste praktische Erfahrungen in diesem Bereich gesammelt.',
        'Ich kann gut mit dem Computer umgehen und spreche drei Sprachen.',
        'Ich habe eine schnelle Auffassungsgabe.'
      ],
      idealAnswer1: {
        label: 'نموذج إجابة 1 (المهارات العملية + اللغات + الحاسوب)',
        de: 'Ich bringe eine gute schulische Basis, gute Computerkenntnisse und erste praktische Erfahrungen aus meinem Heimatland mit. Außerdem spreche ich drei Sprachen – Arabisch, Englisch und Deutsch – und habe eine schnelle Auffassungsgabe, sodass ich neue Arbeitsabläufe sehr rasch lerne.',
        ar: 'أمتلك قاعدة مدرسية جيدة، ومهارات جيدة في الحاسوب، وخبرات عملية أولية من بلدي الأم. بالإضافة إلى ذلك أتحدث ثلاث لغات — العربية والإنجليزية والألمانية — ولدي سرعة بديهة بحيث أتعلم خطوات العمل الجديدة بسرعة كبيرة.'
      },
      idealAnswer2: {
        label: 'نموذج إجابة 2 (التركيز على الانضباط والمهارات الاجتماعية)',
        de: 'Neben meinem fachlichen Interesse bringe ich vor allem Durchhaltevermögen und Verantwortungsbewusstsein mit. Ich habe gelernt, selbstständig zu arbeiten, freundlich mit Kunden und Kollegen umzugehen und mich schnell an neue Situationen anzupassen.',
        ar: 'إلى جانب اهتمامي التخصصي أحضر معي قبل كل شيء المثابرة وروح المسؤولية. لقد تعلمت العمل باستقلالية، والتعامل بود مع العملاء والزملاء، والتكيف السريع مع المواقف الجديدة.'
      }
    },
    {
      id: 'fuenf_jahre',
      num: 9,
      questionDe: 'Wo sehen Sie sich beruflich in fünf Jahren?',
      questionAr: 'أين ترى نفسك مهنياً بعد خمس سنوات؟',
      category: 'Ziele & Loyalität',
      goldenTip: 'الشركات التي تستثمر 3 سنوات في تدريبك تريد أن تعرف أنك ستبقى معها بعد التخرج! قل إنك ترى نفسك قد أنهيت الـ Ausbildung بنجاح وتعمل كـ Fachkraft (فني/مختص محترف) في نفس الشركة وتطور مهاراتك.',
      buildingBlocks: [
        'In fünf Jahren habe ich meine Ausbildung erfolgreich abgeschlossen.',
        'Ich sehe mich als feste Fachkraft in Ihrem Unternehmen.',
        'Ich möchte Verantwortung übernehmen und mich fachlich weiterbilden.',
        'Außerdem wird mein Deutsch bis dahin auf C1-Niveau sein.'
      ],
      idealAnswer1: {
        label: 'نموذج إجابة 1 (إتمام التدريب والبقاء كموظف معتمد في الشركة)',
        de: 'In fünf Jahren habe ich meine Ausbildung mit sehr guten Ergebnissen abgeschlossen und arbeite hoffentlich als feste und erfahrene Fachkraft weiter in Ihrem Unternehmen. Bis dahin möchte ich auch meine Deutschkenntnisse perfektionieren und noch mehr Verantwortung im Team übernehmen.',
        ar: 'بعد خمس سنوات سأكون قد أتممت تدريبي المهني بنتائج جيدة جداً وأعمل على أمل كبير كموظف متخصص وثابت وذي خبرة في شركتكم. وحتى ذلك الحين أود أيضاً إتقان مهاراتي في اللغة الألمانية وتحمل المزيد من المسؤولية في الفريق.'
      },
      idealAnswer2: {
        label: 'نموذج إجابة 2 (التطور المستمر والدورات التخصصية)',
        de: 'Mein erstes Ziel ist ein erfolgreicher Ausbildungsabschluss. Danach möchte ich langfristig in meinem Beruf arbeiten, praktische Erfahrung sammeln und später vielleicht auch Weiterbildungen machen, um Ihr Team noch besser zu unterstützen.',
        ar: 'هدفي الأول هو التخرج الناجح من التدريب المهني. بعد ذلك أود العمل على المدى الطويل في مهنتي، واكتساب الخبرة العملية، وربما القيام لاحقاً بدورات تطوير مهني أيضاً لدعم فريقكم بشكل أفضل.'
      }
    },
    {
      id: 'eigene_fragen',
      num: 10,
      questionDe: 'Vielen Dank! Haben Sie zum Schluss noch Fragen an uns?',
      questionAr: 'شكراً جزيلاً! هل لديك في النهاية أي أسئلة لنا؟',
      category: 'Abschluss & Interesse',
      goldenTip: 'قاعدة ذهبية في ألمانيا: لا تقل أبداً "Nein, keine Fragen"! طرح سؤال أو سؤالين ذكيين في نهاية المقابلة يثبت اهتمامك الحقيقي بالشركة والتدريب المهني (تجنب السؤال عن الراتب أو الإجازات في أول سؤال!).',
      buildingBlocks: [
        'Ja, gern! Wie sieht ein typischer Arbeitstag für Auszubildende im ersten Lehrjahr aus?',
        'Welche Möglichkeiten zur Übernahme gibt es nach der Ausbildung?',
        'Gibt es einen festen Ansprechpartner oder Ausbilder im Betrieb?',
        'Wann darf ich ungefähr mit einer Rückmeldung rechnen?'
      ],
      idealAnswer1: {
        label: 'نموذج إجابة 1 (سؤال احترافي عن اليوم التدريبي وفرص التثبيت بعد التخرج)',
        de: 'Ja, vielen Dank für das angenehme Gespräch! Mich würde sehr interessieren: Wie sieht ein typischer Arbeitstag für Auszubildende im ersten Lehrjahr bei Ihnen aus? Und wie stehen die Chancen, nach einem erfolgreichen Abschluss übernommen zu werden?',
        ar: 'نعم، شكراً جزيلاً على الحوار اللطيف! يهمني كثيراً أن أعرف: كيف يبدو يوم العمل النموذجي للمتدربين في السنة التدريبية الأولى لديكم؟ وما هي فرص التثبيت في العمل بعد التخرج الناجح؟'
      },
      idealAnswer2: {
        label: 'نموذج إجابة 2 (سؤال عن المشرف التدريبي والخطوة القادمة)',
        de: 'Ja, gern! Gibt es für die Auszubildenden einen festen Ausbilder als Ansprechpartner im Alltag? Und könnten Sie mir noch sagen, wie die nächsten Schritte im Bewerbungsprozess aussehen?',
        ar: 'نعم، بكل سرور! هل يوجد للمتدربين مشرف تدريبي ثابت كشخص للتواصل في الحياة اليومية؟ وهل يمكنكم إخباري كيف تبدو الخطوات القادمة في عملية التقديم؟'
      }
    }
  ],

  // =====================================================
  // RENDER ENTRYPOINT
  // =====================================================
  render(container) {
    const target = container || document.getElementById('app-content');
    if (!target) return;

    const isDe = window.I18n && window.I18n.isGerman && window.I18n.isGerman();

    target.innerHTML = `
      <div class="sprechen-studio fade-in" style="max-width: 1100px; margin: 0 auto; padding-bottom: 48px;">
        <!-- Studio Hero Header -->
        <div class="card" style="background: linear-gradient(135deg, rgba(16,185,129,0.14), rgba(59,130,246,0.12), rgba(139,92,246,0.1)); border: 1px solid rgba(16,185,129,0.35); margin-bottom: 22px; padding: 24px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px;">
            <div>
              <div style="display:inline-flex; align-items:center; gap:8px; background:rgba(16,185,129,0.15); color:#10b981; padding:5px 12px; border-radius:999px; font-size:0.82rem; font-weight:700; margin-bottom:10px;">
                <span>🎙️ استوديو النطق والامتحان الشفهي</span>
                <span>•</span>
                <span dir="ltr">Goethe A2/B1 & Ausbildung</span>
              </div>
              <h1 style="margin:0 0 8px 0; font-size:1.65rem;">
                ${isDe ? '🗣️ Sprechen & Vorstellungsgespräch-Simulator' : '🗣️ محاكي المحادثة والامتحان الشفهي ومقابلة الـ Ausbildung'}
              </h1>
              <p style="margin:0; color:var(--text-secondary); line-height:1.65; font-size:0.96rem;">
                تدرب بصوتك الحقيقي (عبر ميكروفون المتصفح أو <strong>Win + H</strong>) على الأجزاء الثلاثة للامتحان الشفهي الرسمي (Teil 1, Teil 2, Teil 3) وأهم 10 أسئلة في مقابلة العمل والتدريب المهني في ألمانيا مع نطق صوتي طبيعي وتصحيح فوري.
              </p>
            </div>
            <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
              <button class="btn btn-secondary btn-sm" onclick="Router.navigate('/exams')" title="العودة لمركز الامتحانات">
                🎓 مركز الامتحانات
              </button>
              <button class="btn btn-secondary btn-sm" onclick="Router.navigate('/schreiben')" title="مدرب الكتابة">
                ✍️ مدرب الكتابة
              </button>
            </div>
          </div>

          <!-- Top Module Navigation Tabs -->
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-top:20px;">
            ${this.renderTabButton('teil1', '🃏 Teil 1: بطاقات الأسئلة', 'Fragen stellen & antworten (16 بطاقة)')}
            ${this.renderTabButton('teil2', '🎙️ Teil 2: التحدث والعرض', 'Sich vorstellen & Präsentation (6 مواضيع)')}
            ${this.renderTabButton('teil3', '🤝 Teil 3: التخطيط المشترك', 'Gemeinsam etwas planen (5 حوارات)')}
            ${this.renderTabButton('ausbildung', '💼 مقابلة الـ Ausbildung', 'Vorstellungsgespräch (10 أسئلة ذهبية)')}
          </div>
        </div>

        <!-- Active Module Body -->
        <div id="sprechen-module-body"></div>
      </div>
    `;

    this.renderActiveModule();
  },

  renderTabButton(tabKey, title, subtitle) {
    const active = this.activeTab === tabKey;
    return `
      <button
        onclick="SprechenTrainer.switchTab('${tabKey}')"
        style="
          text-align: right;
          padding: 13px 16px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 2px solid ${active ? '#10b981' : 'var(--border)'};
          background: ${active ? 'rgba(16,185,129,0.14)' : 'var(--bg-card)'};
          color: var(--text-primary);
          box-shadow: ${active ? '0 4px 14px rgba(16,185,129,0.18)' : 'none'};
        "
      >
        <div style="font-weight: 800; font-size: 0.96rem; color: ${active ? '#10b981' : 'var(--text-primary)'}; margin-bottom: 3px;">
          ${title}
        </div>
        <div style="font-size: 0.78rem; color: var(--text-secondary);">
          ${subtitle}
        </div>
      </button>
    `;
  },

  switchTab(tabKey) {
    if (window.Speech && window.Speech.stop) window.Speech.stop();
    this.activeTab = tabKey;
    this.render();
  },

  renderActiveModule() {
    const body = document.getElementById('sprechen-module-body');
    if (!body) return;

    if (this.activeTab === 'teil1') {
      this.renderTeil1(body);
    } else if (this.activeTab === 'teil2') {
      this.renderTeil2(body);
    } else if (this.activeTab === 'teil3') {
      this.renderTeil3(body);
    } else if (this.activeTab === 'ausbildung') {
      this.renderAusbildung(body);
    }
  },

  // =====================================================
  // MODULE 1: TEIL 1 — FRAGEN STELLEN & ANTWORTEN
  // =====================================================
  renderTeil1(container) {
    const cards = this.teil1Cards;
    const idx = Math.max(0, Math.min(this.teil1Index, cards.length - 1));
    const card = cards[idx];

    container.innerHTML = `
      <!-- Card Selector Bar -->
      <div class="card" style="margin-bottom: 18px; padding: 16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:12px;">
          <div>
            <h2 style="margin:0; font-size:1.2rem;">🃏 الجزء الأول (Teil 1): اسحب بطاقة واطرح سؤالاً وأجب</h2>
            <p style="margin:4px 0 0 0; font-size:0.86rem; color:var(--text-secondary);">
              في الامتحان الشفهي تسحب بطاقة عليها كلمة مفتاحية (Stichwort)، تطرح سؤالاً على زميلك، ثم تجيب عن سؤاله.
            </p>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-secondary btn-sm" onclick="SprechenTrainer.drawRandomTeil1Card()">
              🎲 اسحب بطاقة عشوائية
            </button>
            <button class="btn btn-secondary btn-sm" onclick="SprechenTrainer.prevTeil1Card()">
              ➡️ السابقة
            </button>
            <button class="btn btn-secondary btn-sm" onclick="SprechenTrainer.nextTeil1Card()">
              التالية ⬅️
            </button>
          </div>
        </div>

        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          ${cards.map((c, i) => `
            <button
              onclick="SprechenTrainer.selectTeil1Card(${i})"
              style="
                padding: 6px 11px;
                border-radius: 8px;
                font-size: 0.82rem;
                cursor: pointer;
                border: 1px solid ${i === idx ? '#10b981' : 'var(--border)'};
                background: ${i === idx ? 'rgba(16,185,129,0.16)' : 'var(--bg-secondary)'};
                color: ${i === idx ? '#10b981' : 'var(--text-primary)'};
                font-weight: ${i === idx ? '700' : '500'};
              "
            >
              ${c.icon} ${i + 1}. ${c.keyword.replace(' ?', '')}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Visual Official Exam Card -->
      <div class="card" style="margin-bottom: 20px; padding: 28px; text-align: center; background: linear-gradient(180deg, var(--bg-card), rgba(59,130,246,0.06)); border: 2px dashed rgba(59,130,246,0.45); border-radius: 16px;">
        <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-secondary); margin-bottom: 6px;" dir="ltr">
          GOETHE-ZERTIFIKAT • SPRECHEN TEIL 1 • KARTE ${idx + 1} / ${cards.length} (${card.category})
        </div>
        <div style="font-size: 2.6rem; margin-bottom: 8px;">${card.icon}</div>
        <div dir="ltr" style="font-size: 2.1rem; font-weight: 900; color: var(--accent, #3b82f6); letter-spacing: 0.5px; margin-bottom: 8px;">
          ${Utils.escapeHtml(card.keyword)}
        </div>
        <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px;">
          ${card.arTitle}
        </div>
        <div style="max-width: 680px; margin: 0 auto; padding: 10px 16px; border-radius: 10px; background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.3); font-size: 0.88rem; color: var(--text-primary);">
          💡 <strong>قاعدة ذهبية للبطاقة:</strong> ${card.grammarTip}
        </div>
      </div>

      <!-- Two-Column Step A & Step B -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(340px, 1fr)); gap:18px;">
        <!-- STEP A: Ask a Question -->
        <div class="card" style="padding: 20px; border-top: 4px solid #3b82f6;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h3 style="margin:0; font-size:1.1rem;">❓ الخطوة (أ): اطرح سؤالاً (Frage stellen)</h3>
            <span style="font-size:0.78rem; padding:3px 9px; border-radius:99px; background:rgba(59,130,246,0.15); color:#3b82f6; font-weight:700;" dir="ltr">du / Sie</span>
          </div>

          <p style="font-size:0.88rem; color:var(--text-secondary); margin-top:0;">
            انطق سؤالك بالميكروفون أو اكتبه، أو اضغط على الكلمات المساعدة لبناء السؤال:
          </p>

          <!-- Helper Chips -->
          <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:12px;" dir="ltr">
            ${card.helperChips.map(chip => `
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                style="font-size:0.82rem; padding:4px 10px;"
                onclick="SprechenTrainer.appendChip('sprechen-q-input', '${chip.replace(/'/g, "\\'")}')"
              >
                + ${Utils.escapeHtml(chip)}
              </button>
            `).join('')}
          </div>

          <div style="display:flex; gap:8px; margin-bottom:12px;">
            <input
              id="sprechen-q-input"
              type="text"
              dir="ltr"
              placeholder="z.B. ${Utils.escapeHtml(card.modelQuestions[0])}"
              style="flex:1; padding:11px 14px; border-radius:10px; border:1px solid var(--border); background:var(--bg-secondary); color:var(--text-primary); font-size:0.96rem;"
              onkeydown="if(event.key==='Enter') SprechenTrainer.checkTeil1Question()"
            />
            <button
              type="button"
              class="btn btn-secondary audio-btn"
              onclick="Speech.listen('sprechen-q-input', this)"
              title="تحدث بالألمانية"
              style="padding:0 14px; border-radius:10px; font-weight:700;"
            >
              🎤 تحدث
            </button>
          </div>

          <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px;">
            <button class="btn btn-primary btn-sm" onclick="SprechenTrainer.checkTeil1Question()">
              ✅ تحقق من سؤالي
            </button>
            <button class="btn btn-secondary btn-sm" onclick="SprechenTrainer.fillModelQuestion()">
              ✨ أظهر سؤالاً نموذجياً
            </button>
            <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${card.modelQuestions[0].replace(/'/g, "\\'")}')">
              🔊 استمع للسؤال
            </button>
          </div>

          <div id="teil1-q-feedback" style="margin-bottom:14px;"></div>

          <!-- Model Questions Reference Box -->
          <div style="background:var(--bg-secondary); border-radius:10px; padding:12px; border:1px solid var(--border);">
            <div style="font-weight:700; font-size:0.86rem; margin-bottom:8px; color:var(--text-secondary);">
              📌 طريقتان رسميتان لطرح السؤال في الامتحان:
            </div>
            <div style="margin-bottom:8px; padding-bottom:8px; border-bottom:1px solid var(--border);">
              <div style="font-size:0.78rem; color:#3b82f6; font-weight:700;">1. W-Frage (سؤال بأداة استفهام - الفعل في المركز 2):</div>
              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-top:4px;" dir="ltr">
                <span style="font-weight:600; font-size:0.92rem;">${Utils.escapeHtml(card.wQuestion)}</span>
                <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${card.wQuestion.split('/')[0].trim().replace(/'/g, "\\'")}')">🔊</button>
              </div>
            </div>
            <div>
              <div style="font-size:0.78rem; color:#10b981; font-weight:700;">2. Ja/Nein-Frage (سؤال يبدأ بالفعل في المركز 1):</div>
              <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-top:4px;" dir="ltr">
                <span style="font-weight:600; font-size:0.92rem;">${Utils.escapeHtml(card.jaNeinQuestion)}</span>
                <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${card.jaNeinQuestion.split('/')[0].trim().replace(/'/g, "\\'")}')">🔊</button>
              </div>
            </div>
          </div>
        </div>

        <!-- STEP B: Answer Naturally -->
        <div class="card" style="padding: 20px; border-top: 4px solid #10b981;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h3 style="margin:0; font-size:1.1rem;">💬 الخطوة (ب): أجب بطلاقة (Natürlich antworten)</h3>
            <span style="font-size:0.78rem; padding:3px 9px; border-radius:99px; background:rgba(16,185,129,0.15); color:#10b981; font-weight:700;">A2 & B1</span>
          </div>

          <!-- Model Answer A2 -->
          <div style="background:var(--bg-secondary); border-radius:10px; padding:12px; border:1px solid var(--border); margin-bottom:10px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <span style="font-size:0.78rem; font-weight:700; color:#10b981;">🟢 إجابة نموذجية (مستوى A2 — واضحة ومباشرة):</span>
              <div style="display:flex; gap:6px;">
                <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${card.answerA2.de.replace(/'/g, "\\'")}')">🔊 استمع</button>
                <button class="btn btn-secondary btn-sm" onclick="Speech.speakSlow('${card.answerA2.de.replace(/'/g, "\\'")}')">🐢 ببطء</button>
              </div>
            </div>
            <div dir="ltr" style="font-weight:700; font-size:0.95rem; margin-bottom:4px; line-height:1.5;">
              ${Utils.escapeHtml(card.answerA2.de)}
            </div>
            <div style="font-size:0.84rem; color:var(--text-secondary);">
              ${card.answerA2.ar}
            </div>
          </div>

          <!-- Model Answer B1 -->
          <div style="background:var(--bg-secondary); border-radius:10px; padding:12px; border:1px solid var(--border); margin-bottom:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <span style="font-size:0.78rem; font-weight:700; color:#8b5cf6;">🟣 إجابة نموذجية (مستوى B1 — مع روابط لأن/لذلك):</span>
              <div style="display:flex; gap:6px;">
                <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${card.answerB1.de.replace(/'/g, "\\'")}')">🔊 استمع</button>
                <button class="btn btn-secondary btn-sm" onclick="Speech.speakSlow('${card.answerB1.de.replace(/'/g, "\\'")}')">🐢 ببطء</button>
              </div>
            </div>
            <div dir="ltr" style="font-weight:700; font-size:0.95rem; margin-bottom:4px; line-height:1.5;">
              ${Utils.escapeHtml(card.answerB1.de)}
            </div>
            <div style="font-size:0.84rem; color:var(--text-secondary);">
              ${card.answerB1.ar}
            </div>
          </div>

          <!-- User Voice Answer Practice Box -->
          <div style="font-weight:700; font-size:0.88rem; margin-bottom:6px;">
            🎤 درّب لسانك الآن: انطق إجابتك الخاصة أو اكتبها:
          </div>
          <div style="display:flex; gap:8px; margin-bottom:10px;">
            <textarea
              id="sprechen-a-input"
              rows="2"
              dir="ltr"
              placeholder="Sprechen oder schreiben Sie Ihre eigene Antwort auf Deutsch..."
              style="flex:1; padding:10px 12px; border-radius:10px; border:1px solid var(--border); background:var(--bg-secondary); color:var(--text-primary); font-size:0.94rem; resize:vertical;"
            ></textarea>
            <button
              type="button"
              class="btn btn-secondary audio-btn"
              onclick="Speech.listen('sprechen-a-input', this)"
              style="padding:0 14px; border-radius:10px; font-weight:700;"
            >
              🎤 تحدث
            </button>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button class="btn btn-primary btn-sm" onclick="SprechenTrainer.checkTeil1Answer()">
              ✅ فحص إجابتي ونطقي
            </button>
            <button class="btn btn-secondary btn-sm" onclick="const v = document.getElementById('sprechen-a-input').value; if(v) Speech.speak(v);">
              🔊 اسمع نطق جملتي
            </button>
          </div>
          <div id="teil1-a-feedback" style="margin-top:12px;"></div>
        </div>
      </div>
    `;
  },

  selectTeil1Card(index) {
    this.teil1Index = index;
    this.renderActiveModule();
  },

  nextTeil1Card() {
    this.teil1Index = (this.teil1Index + 1) % this.teil1Cards.length;
    this.renderActiveModule();
  },

  prevTeil1Card() {
    this.teil1Index = (this.teil1Index - 1 + this.teil1Cards.length) % this.teil1Cards.length;
    this.renderActiveModule();
  },

  drawRandomTeil1Card() {
    let next = Math.floor(Math.random() * this.teil1Cards.length);
    if (next === this.teil1Index && this.teil1Cards.length > 1) {
      next = (next + 1) % this.teil1Cards.length;
    }
    this.teil1Index = next;
    this.renderActiveModule();
    if (window.Utils && Utils.showToast) {
      Utils.showToast(`🃏 تم سحب البطاقة: ${this.teil1Cards[next].keyword}`, 'info', 2000);
    }
  },

  appendChip(inputId, text) {
    const el = document.getElementById(inputId);
    if (!el) return;
    const current = el.value.trim();
    el.value = current ? (text === '?' ? `${current}?` : `${current} ${text}`) : text;
    el.focus();
  },

  fillModelQuestion() {
    const card = this.teil1Cards[this.teil1Index];
    const input = document.getElementById('sprechen-q-input');
    if (input && card) {
      input.value = card.modelQuestions[0];
      Speech.speak(card.modelQuestions[0]);
    }
  },

  checkTeil1Question() {
    const card = this.teil1Cards[this.teil1Index];
    const input = document.getElementById('sprechen-q-input');
    const fb = document.getElementById('teil1-q-feedback');
    if (!input || !fb || !card) return;

    const userText = input.value.trim();
    if (!userText) {
      fb.innerHTML = `<div style="padding:10px; border-radius:8px; background:rgba(239,68,68,0.12); color:#ef4444; font-size:0.88rem;">⚠️ الرجاء نطق أو كتابة سؤال أولاً!</div>`;
      return;
    }

    const exactMatch = Utils.compareAnswers(userText, card.modelQuestions[0], card.modelQuestions);
    const norm = userText.toLowerCase();
    const keyStem = card.keyword.replace('?', '').split('&')[0].trim().toLowerCase().slice(0, 5);
    const hasQuestionStructure = /^(wann|wo|wie|was|warum|wer|mit wem|welch|seit wann|wohin|hast|haben|machst|machen|feierst|feiern|wohnst|wohnen|arbeitest|arbeiten|fährst|fahren|kaufst|kaufen|triffst|treffen|siehst|sehen|lernst|lernen|isst|essen|kochst|kochen|möchtest|möchten)\b/i.test(norm);
    const mentionsTopic = norm.includes(keyStem) || card.expectedKeywords.some(k => norm.includes(k));

    if (exactMatch || (hasQuestionStructure && mentionsTopic && userText.split(/\s+/).length >= 3)) {
      Storage.addXP(10);
      Storage.updateStreak();
      Storage.saveGameScore('sprechenTrainer', (this.sessionScore += 10));
      if (window.App && App.updateHeaderStats) App.updateHeaderStats();

      fb.innerHTML = `
        <div style="padding:12px; border-radius:10px; background:rgba(16,185,129,0.14); border:1px solid rgba(16,185,129,0.4); color:var(--text-primary); font-size:0.9rem;">
          <div style="font-weight:800; color:#10b981; margin-bottom:4px;">✅ ممتاز! سؤال صحيح وطبيعي للامتحان الشفهي (+10 XP)</div>
          <div style="font-size:0.84rem;">سؤالك: <strong dir="ltr">${Utils.escapeHtml(userText.endsWith('?') ? userText : userText + '?')}</strong></div>
          <div style="font-size:0.82rem; color:var(--text-secondary); margin-top:4px;">الآن انتقل للخطوة (ب) وتدرب على نطق الإجابة الكاملة!</div>
        </div>
      `;
      Speech.speak(userText);
    } else {
      Storage.addMistake({
        lessonId: 'sprechen-teil1',
        question: `Stichwort: ${card.keyword}`,
        myAnswer: userText,
        correctAnswer: card.modelQuestions[0],
        explanation: card.grammarTip
      });
      fb.innerHTML = `
        <div style="padding:12px; border-radius:10px; background:rgba(245,158,11,0.14); border:1px solid rgba(245,158,11,0.4); color:var(--text-primary); font-size:0.9rem;">
          <div style="font-weight:800; color:#f59e0b; margin-bottom:4px;">💡 قريب! لنجعل السؤال أدق للامتحان:</div>
          <div style="font-size:0.85rem; margin-bottom:4px;">تأكد من البدء بأداة استفهام (مثل Wann / Wo / Wie / Was) أو بفعل، واستخدام موضوع البطاقة.</div>
          <div style="font-size:0.86rem;" dir="ltr"><strong>نموذج معتمد:</strong> ${Utils.escapeHtml(card.modelQuestions[0])}</div>
        </div>
      `;
    }
  },

  checkTeil1Answer() {
    const card = this.teil1Cards[this.teil1Index];
    const input = document.getElementById('sprechen-a-input');
    const fb = document.getElementById('teil1-a-feedback');
    if (!input || !fb || !card) return;

    const userText = input.value.trim();
    if (!userText) {
      fb.innerHTML = `<div style="padding:10px; border-radius:8px; background:rgba(239,68,68,0.12); color:#ef4444; font-size:0.88rem;">⚠️ انطق أو اكتب إجابتك أولاً في المربع أعلاه.</div>`;
      return;
    }

    const words = userText.split(/\s+/);
    const norm = userText.toLowerCase();
    const matchedKeywords = card.expectedKeywords.filter(k => norm.includes(k));
    const hasConnector = /\b(weil|denn|deshalb|außerdem|aber|und|damit|wenn)\b/i.test(norm);

    if (words.length >= 4 && matchedKeywords.length >= 1) {
      const xp = hasConnector ? 15 : 10;
      Storage.addXP(xp);
      Storage.updateStreak();
      Storage.saveGameScore('sprechenTrainer', (this.sessionScore += xp));
      if (window.App && App.updateHeaderStats) App.updateHeaderStats();

      fb.innerHTML = `
        <div style="padding:12px; border-radius:10px; background:rgba(16,185,129,0.14); border:1px solid rgba(16,185,129,0.4); font-size:0.9rem;">
          <div style="font-weight:800; color:#10b981; margin-bottom:4px;">
            🌟 إجابة رائعة ومفهومة! (+${xp} XP) ${hasConnector ? '— استخدمت روابط جمل بمستوى B1!' : ''}
          </div>
          <div style="font-size:0.83rem; color:var(--text-secondary);">
            الكلمات المفتاحية التي استخدمتها بنجاح: <strong dir="ltr">${matchedKeywords.join(', ')}</strong>
          </div>
        </div>
      `;
    } else {
      fb.innerHTML = `
        <div style="padding:12px; border-radius:10px; background:rgba(245,158,11,0.14); border:1px solid rgba(245,158,11,0.4); font-size:0.88rem;">
          <div style="font-weight:800; color:#f59e0b; margin-bottom:4px;">💡 نصيحة لتقوية الإجابة في الامتحان:</div>
          <div>حاول الإجابة بجملة كاملة (4 كلمات على الأقل) واستخدم كلمات مثل: <strong dir="ltr">${card.expectedKeywords.slice(0, 5).join(', ')}</strong></div>
        </div>
      `;
    }
  },

  // =====================================================
  // MODULE 2: TEIL 2 — SICH VORSTELLEN & THEMA PRÄSENTIEREN
  // =====================================================
  renderTeil2(container) {
    const topics = this.teil2Topics;
    const idx = Math.max(0, Math.min(this.teil2Index, topics.length - 1));
    const topic = topics[idx];

    container.innerHTML = `
      <!-- Topic Selector -->
      <div class="card" style="margin-bottom: 18px; padding: 16px;">
        <h2 style="margin:0 0 6px 0; font-size:1.2rem;">🎙️ الجزء الثاني (Teil 2): التحدث عن النفس والعرض التقديمي (Präsentation)</h2>
        <p style="margin:0 0 12px 0; font-size:0.88rem; color:var(--text-secondary);">
          اختر أحد المواضيع الـ 6 الأساسية لامتحان A2 و B1، استمع للنموذج الكامل جملة بجملة، ثم تدرب على إلقاء عرضك بصوتك!
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:8px;">
          ${topics.map((t, i) => `
            <button
              onclick="SprechenTrainer.selectTeil2Topic(${i})"
              style="
                text-align: right;
                padding: 10px 14px;
                border-radius: 10px;
                cursor: pointer;
                border: 1.5px solid ${i === idx ? '#3b82f6' : 'var(--border)'};
                background: ${i === idx ? 'rgba(59,130,246,0.14)' : 'var(--bg-secondary)'};
                color: var(--text-primary);
              "
            >
              <div style="font-size:0.75rem; color:#3b82f6; font-weight:700;" dir="ltr">${t.level} • ${t.duration}</div>
              <div style="font-weight:700; font-size:0.9rem; margin-top:2px;">${t.icon} ${t.titleAr}</div>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Speaking Prompt Card (Goethe Exam Style) -->
      <div class="card" style="margin-bottom: 18px; padding: 22px; border: 2px solid rgba(59,130,246,0.35);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
          <div>
            <span style="font-size:0.78rem; padding:3px 10px; border-radius:99px; background:rgba(59,130,246,0.15); color:#3b82f6; font-weight:700;" dir="ltr">
              ${topic.level} • ${topic.duration}
            </span>
            <h3 style="margin:8px 0 2px 0; font-size:1.3rem;" dir="ltr">${topic.icon} ${Utils.escapeHtml(topic.titleDe)}</h3>
            <div style="font-size:0.95rem; color:var(--text-secondary);">${topic.titleAr}</div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="SprechenTrainer.playFullTeil2Speech()">
            🔊 استمع للعرض الكامل متواصلاً
          </button>
        </div>

        <!-- W-Fragen / Gliederungspointer on Card -->
        <div style="background:var(--bg-secondary); border-radius:12px; padding:14px; border:1px solid var(--border);">
          <div style="font-weight:700; font-size:0.88rem; margin-bottom:8px; color:#3b82f6;">
            📋 النقاط المطلوب تغطيتها في بطاقة الامتحان (Gliederungspunkte):
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:8px;">
            ${topic.prompts.map((p, i) => `
              <div style="padding:8px 12px; border-radius:8px; background:var(--bg-card); border:1px solid var(--border); font-size:0.86rem; font-weight:600;">
                <span style="color:#10b981;">✔ ${i + 1}.</span> ${Utils.escapeHtml(p)}
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Redemittel Leitfaden -->
      <div class="card" style="margin-bottom: 18px; padding: 20px;">
        <h3 style="margin:0 0 12px 0; font-size:1.08rem;">🧩 قوالب وعبارات ذهبية جاهزة للعرض (Redemittel-Leitfaden)</h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:10px;">
          ${topic.redemittel.map(r => `
            <div style="padding:12px; border-radius:10px; background:var(--bg-secondary); border:1px solid var(--border);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.78rem; font-weight:700; color:#8b5cf6;">${r.label}</span>
                <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${r.de.replace(/'/g, "\\'")}')">🔊</button>
              </div>
              <div dir="ltr" style="font-weight:700; font-size:0.9rem; margin-bottom:4px;">${Utils.escapeHtml(r.de)}</div>
              <div style="font-size:0.82rem; color:var(--text-secondary);">${r.ar}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Complete Sentence-by-Sentence Model Speech -->
      <div class="card" style="margin-bottom: 18px; padding: 20px;">
        <h3 style="margin:0 0 12px 0; font-size:1.08rem;">🎧 النص النموذجي الكامل جملة بجملة (اضغط للاستماع والترديد)</h3>
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${topic.sentences.map((s, i) => `
            <div style="padding:12px 14px; border-radius:10px; background:var(--bg-secondary); border:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
              <div style="flex:1; min-width:240px;">
                <div dir="ltr" style="font-weight:700; font-size:0.96rem; margin-bottom:4px; line-height:1.5;">
                  <span style="color:#3b82f6;">${i + 1}.</span> ${Utils.escapeHtml(s.de)}
                </div>
                <div style="font-size:0.85rem; color:var(--text-secondary);">${s.ar}</div>
              </div>
              <div style="display:flex; gap:6px;">
                <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${s.de.replace(/'/g, "\\'")}')">🔊 عادي</button>
                <button class="btn btn-secondary btn-sm" onclick="Speech.speakSlow('${s.de.replace(/'/g, "\\'")}')">🐢 ببطء</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Voice Practice Studio for Teil 2 -->
      <div class="card" style="padding: 20px; border-top: 4px solid #10b981;">
        <h3 style="margin:0 0 8px 0; font-size:1.08rem;">🎤 تدريب الإلقاء الحر (تحدث لمدة دقيقة أو دقيقتين)</h3>
        <p style="margin:0 0 12px 0; font-size:0.86rem; color:var(--text-secondary);">
          اضغط على زر الميكروفون أو <strong>Win + H</strong> وقدم عرضك التقديمي بصوتك دون النظر للنص، ثم قارنه بالنموذج!
        </p>
        <div style="display:flex; gap:8px; margin-bottom:10px;">
          <textarea
            id="teil2-speech-input"
            rows="4"
            dir="ltr"
            placeholder="Sprechen Sie hier Ihren Vortrag auf Deutsch..."
            style="flex:1; padding:12px; border-radius:10px; border:1px solid var(--border); background:var(--bg-secondary); color:var(--text-primary); font-size:0.95rem;"
          ></textarea>
          <button
            type="button"
            class="btn btn-secondary audio-btn"
            onclick="Speech.listen('teil2-speech-input', this)"
            style="padding:0 16px; border-radius:10px; font-weight:700;"
          >
            🎤 تحدث
          </button>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button class="btn btn-primary btn-sm" onclick="SprechenTrainer.evaluateTeil2Speech()">
            ✅ تقييم عرضي التقديمي (+20 XP)
          </button>
          <button class="btn btn-secondary btn-sm" onclick="const v = document.getElementById('teil2-speech-input').value; if(v) Speech.speak(v);">
            🔊 استمع لما قلته
          </button>
        </div>
        <div id="teil2-feedback" style="margin-top:12px;"></div>
      </div>
    `;
  },

  selectTeil2Topic(index) {
    if (window.Speech && window.Speech.stop) window.Speech.stop();
    this.teil2Index = index;
    this.renderActiveModule();
  },

  playFullTeil2Speech() {
    const topic = this.teil2Topics[this.teil2Index];
    if (!topic) return;
    const fullText = topic.sentences.map(s => s.de).join(' ');
    Speech.speak(fullText);
  },

  evaluateTeil2Speech() {
    const input = document.getElementById('teil2-speech-input');
    const fb = document.getElementById('teil2-feedback');
    if (!input || !fb) return;

    const text = input.value.trim();
    const wordCount = text ? text.split(/\s+/).length : 0;

    if (wordCount < 10) {
      fb.innerHTML = `<div style="padding:10px; border-radius:8px; background:rgba(245,158,11,0.14); color:#f59e0b; font-size:0.88rem;">💡 حاول التحدث بـ 3 جمل على الأقل (10 كلمات فأكثر) لتغطية عناصر البطاقة!</div>`;
      return;
    }

    Storage.addXP(20);
    Storage.updateStreak();
    Storage.saveGameScore('sprechenTrainer', (this.sessionScore += 20));
    if (window.App && App.updateHeaderStats) App.updateHeaderStats();

    fb.innerHTML = `
      <div style="padding:12px; border-radius:10px; background:rgba(16,185,129,0.14); border:1px solid rgba(16,185,129,0.4); font-size:0.9rem;">
        <div style="font-weight:800; color:#10b981; margin-bottom:4px;">👏 أداء ممتاز! نطقت/كتبت ${wordCount} كلمة باللغة الألمانية (+20 XP)</div>
        <div style="font-size:0.84rem; color:var(--text-secondary);">استمر في التدرب على إلقاء العرض بصوت مرتفع وواضح حتى تصبح الجمل تلقائية تماماً يوم الامتحان.</div>
      </div>
    `;
  },

  // =====================================================
  // MODULE 3: TEIL 3 — GEMEINSAM ETWAS PLANEN (4-TURN ROLEPLAY)
  // =====================================================
  renderTeil3(container) {
    const scenarios = this.teil3Scenarios;
    const sIdx = Math.max(0, Math.min(this.teil3ScenarioIndex, scenarios.length - 1));
    const scenario = scenarios[sIdx];
    const currentTurn = scenario.turns[this.teil3TurnIndex] || null;

    container.innerHTML = `
      <!-- Scenario Selector -->
      <div class="card" style="margin-bottom: 18px; padding: 16px;">
        <h2 style="margin:0 0 6px 0; font-size:1.2rem;">🤝 الجزء الثالث (Teil 3): التخطيط المشترك مع شريك الامتحان (Gemeinsam etwas planen)</h2>
        <p style="margin:0 0 12px 0; font-size:0.88rem; color:var(--text-secondary);">
          حوار تفاعلي من 4 جولات مع شريكك الافتراضي: استمع لما يقوله شريكك ثم رد عليه باقتراح أو موافقة أو تحديد موعد!
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:8px;">
          ${scenarios.map((sc, i) => `
            <button
              onclick="SprechenTrainer.selectTeil3Scenario(${i})"
              style="
                text-align:right;
                padding:10px 14px;
                border-radius:10px;
                cursor:pointer;
                border:1.5px solid ${i === sIdx ? '#10b981' : 'var(--border)'};
                background:${i === sIdx ? 'rgba(16,185,129,0.14)' : 'var(--bg-secondary)'};
                color:var(--text-primary);
              "
            >
              <div style="font-weight:700; font-size:0.9rem;">${sc.icon} ${sc.titleAr}</div>
              <div style="font-size:0.76rem; color:var(--text-secondary); margin-top:2px;" dir="ltr">${sc.titleDe}</div>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Scenario Briefing -->
      <div class="card" style="margin-bottom: 18px; padding: 18px; border-right: 4px solid #10b981;">
        <div style="font-weight:800; font-size:1.1rem; margin-bottom:6px;">
          ${scenario.icon} المهمة: ${scenario.titleAr}
        </div>
        <p style="margin:0 0 10px 0; font-size:0.9rem; color:var(--text-secondary);">${scenario.situationAr}</p>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          ${scenario.points.map(pt => `
            <span style="padding:4px 10px; border-radius:99px; background:var(--bg-secondary); border:1px solid var(--border); font-size:0.8rem; font-weight:600;">
              📌 ${pt}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Interactive Conversation Thread -->
      <div class="card" style="margin-bottom: 18px; padding: 20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
          <h3 style="margin:0; font-size:1.08rem;">💬 غرفة المحادثة التفاعلية (الجولة ${Math.min(this.teil3TurnIndex + 1, scenario.turns.length)} من ${scenario.turns.length})</h3>
          <button class="btn btn-secondary btn-sm" onclick="SprechenTrainer.resetTeil3Scenario()">
            🔄 إعادة الحوار من البداية
          </button>
        </div>

        <!-- Completed History -->
        <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:16px;">
          ${this.teil3History.map(item => `
            <!-- Partner Bubble -->
            <div style="background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.3); border-radius:12px; padding:12px 14px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.78rem; font-weight:700; color:#3b82f6;">👤 شريك الامتحان (Prüfungspartner):</span>
                <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${item.partnerDe.replace(/'/g, "\\'")}')">🔊</button>
              </div>
              <div dir="ltr" style="font-weight:700; font-size:0.94rem; margin-bottom:3px;">${Utils.escapeHtml(item.partnerDe)}</div>
              <div style="font-size:0.82rem; color:var(--text-secondary);">${item.partnerAr}</div>
            </div>
            <!-- User Bubble -->
            <div style="background:rgba(16,185,129,0.12); border:1px solid rgba(16,185,129,0.35); border-radius:12px; padding:12px 14px; margin-right:24px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.78rem; font-weight:700; color:#10b981;">🙋‍♂️ إجابتك (Du):</span>
                <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${item.userDe.replace(/'/g, "\\'")}')">🔊</button>
              </div>
              <div dir="ltr" style="font-weight:700; font-size:0.94rem; margin-bottom:3px;">${Utils.escapeHtml(item.userDe)}</div>
              ${item.tip ? `<div style="font-size:0.8rem; color:#10b981; margin-top:4px;">✨ ${item.tip}</div>` : ''}
            </div>
          `).join('')}

          ${currentTurn ? `
            <!-- Active Partner Turn -->
            <div style="background:rgba(59,130,246,0.14); border:2px solid #3b82f6; border-radius:14px; padding:16px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <span style="font-size:0.82rem; font-weight:800; color:#3b82f6;">👤 شريك الامتحان يتحدث إليك الآن:</span>
                <div style="display:flex; gap:6px;">
                  <button class="btn btn-primary btn-sm" onclick="Speech.speak('${currentTurn.partnerDe.replace(/'/g, "\\'")}')">🔊 استمع للشريك</button>
                  <button class="btn btn-secondary btn-sm" onclick="Speech.speakSlow('${currentTurn.partnerDe.replace(/'/g, "\\'")}')">🐢 ببطء</button>
                </div>
              </div>
              <div dir="ltr" style="font-weight:800; font-size:1.02rem; margin-bottom:6px; line-height:1.5;">
                ${Utils.escapeHtml(currentTurn.partnerDe)}
              </div>
              <div style="font-size:0.86rem; color:var(--text-secondary);">
                ${currentTurn.partnerAr}
              </div>
            </div>

            <!-- User Response Options + Voice Input -->
            <div style="padding:14px; border-radius:12px; background:var(--bg-secondary); border:1px solid var(--border);">
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:10px; color:#10b981;">
                🎙️ دورك الآن (${currentTurn.promptAr}) — اختر رداً وانطقه بصوت عالٍ أو تحدث بردك الخاص:
              </div>
              <div style="display:grid; gap:10px; margin-bottom:14px;">
                ${currentTurn.options.map((opt, oIdx) => `
                  <div style="padding:12px; border-radius:10px; background:var(--bg-card); border:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
                    <div style="flex:1; min-width:220px;">
                      <div dir="ltr" style="font-weight:700; font-size:0.94rem; margin-bottom:3px;">${Utils.escapeHtml(opt.de)}</div>
                      <div style="font-size:0.82rem; color:var(--text-secondary);">${opt.ar}</div>
                    </div>
                    <div style="display:flex; gap:6px;">
                      <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${opt.de.replace(/'/g, "\\'")}')">🔊 استمع</button>
                      <button class="btn btn-primary btn-sm" onclick="SprechenTrainer.chooseTeil3Option(${oIdx})">✅ اختر هذا الرد</button>
                    </div>
                  </div>
                `).join('')}
              </div>

              <!-- Custom spoken response -->
              <div style="display:flex; gap:8px;">
                <input
                  id="teil3-custom-input"
                  type="text"
                  dir="ltr"
                  placeholder="Oder sprechen / schreiben Sie Ihre eigene Antwort auf Deutsch..."
                  style="flex:1; padding:10px 12px; border-radius:10px; border:1px solid var(--border); background:var(--bg-card); color:var(--text-primary); font-size:0.92rem;"
                  onkeydown="if(event.key==='Enter') SprechenTrainer.submitCustomTeil3Turn()"
                />
                <button class="btn btn-secondary audio-btn" onclick="Speech.listen('teil3-custom-input', this)">🎤 تحدث</button>
                <button class="btn btn-primary btn-sm" onclick="SprechenTrainer.submitCustomTeil3Turn()">إرسال ردي</button>
              </div>
            </div>
          ` : `
            <!-- Completed Scenario Banner -->
            <div style="padding:20px; border-radius:14px; background:rgba(16,185,129,0.15); border:2px solid #10b981; text-align:center;">
              <div style="font-size:2rem; margin-bottom:6px;">🎉</div>
              <h4 style="margin:0 0 6px 0; font-size:1.15rem; color:#10b981;">أحسنت! أتممت التخطيط المشترك بنجاح كامل (+25 XP)</h4>
              <p style="margin:0 0 14px 0; font-size:0.9rem; color:var(--text-secondary);">
                يمكنك الاستماع للحوار كاملاً أو الانتقال إلى السيناريو التالي.
              </p>
              <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap;">
                <button class="btn btn-primary btn-sm" onclick="SprechenTrainer.resetTeil3Scenario()">🔄 إعادة هذا الحوار</button>
                <button class="btn btn-secondary btn-sm" onclick="SprechenTrainer.selectTeil3Scenario((${sIdx} + 1) % ${scenarios.length})">⏭️ السيناريو التالي</button>
              </div>
            </div>
          `}
        </div>
      </div>

      <!-- Redemittel Cheat Box for Teil 3 -->
      <div class="card" style="padding: 20px;">
        <h3 style="margin:0 0 12px 0; font-size:1.08rem;">🧰 صندوق عبارات التخطيط المشترك (Redemittel für Teil 3)</h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:12px;">
          <div style="padding:12px; border-radius:10px; background:var(--bg-secondary); border:1px solid var(--border);">
            <div style="font-weight:800; color:#3b82f6; margin-bottom:6px;">💡 1. Vorschläge machen (تقديم اقتراح)</div>
            <div dir="ltr" style="font-size:0.88rem; line-height:1.7;">
              • <strong>Ich schlage vor, dass wir ...</strong><br/>
              • <strong>Wie wäre es, wenn wir ...?</strong><br/>
              • <strong>Wollen wir am Samstag um ...?</strong><br/>
              • <strong>Wir könnten zusammen ...</strong>
            </div>
          </div>
          <div style="padding:12px; border-radius:10px; background:var(--bg-secondary); border:1px solid var(--border);">
            <div style="font-weight:800; color:#10b981; margin-bottom:6px;">✅ 2. Zustimmen (الموافقة والتأكيد)</div>
            <div dir="ltr" style="font-size:0.88rem; line-height:1.7;">
              • <strong>Ja, das ist eine sehr gute Idee!</strong><br/>
              • <strong>Einverstanden! So machen wir das.</strong><br/>
              • <strong>Ja, dieser Termin passt mir super.</strong><br/>
              • <strong>Ich kümmere mich gern um ...</strong>
            </div>
          </div>
          <div style="padding:12px; border-radius:10px; background:var(--bg-secondary); border:1px solid var(--border);">
            <div style="font-weight:800; color:#f59e0b; margin-bottom:6px;">🔄 3. Ablehnen & Alternative (الاعتذار واقتراح بديل)</div>
            <div dir="ltr" style="font-size:0.88rem; line-height:1.7;">
              • <strong>Am ... habe ich leider keine Zeit.</strong><br/>
              • <strong>Passt es dir vielleicht besser am ...?</strong><br/>
              • <strong>Ich denke, es wäre besser, wenn ...</strong>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  selectTeil3Scenario(index) {
    if (window.Speech && window.Speech.stop) window.Speech.stop();
    this.teil3ScenarioIndex = index;
    this.teil3TurnIndex = 0;
    this.teil3History = [];
    this.renderActiveModule();
  },

  resetTeil3Scenario() {
    this.teil3TurnIndex = 0;
    this.teil3History = [];
    this.renderActiveModule();
  },

  chooseTeil3Option(optionIndex) {
    const scenario = this.teil3Scenarios[this.teil3ScenarioIndex];
    if (!scenario) return;
    const turn = scenario.turns[this.teil3TurnIndex];
    if (!turn) return;
    const opt = turn.options[optionIndex];
    if (!opt) return;

    Speech.speak(opt.de);
    this.teil3History.push({
      partnerDe: turn.partnerDe,
      partnerAr: turn.partnerAr,
      userDe: opt.de,
      tip: opt.tip
    });
    this.teil3TurnIndex++;

    if (this.teil3TurnIndex >= scenario.turns.length) {
      Storage.addXP(25);
      Storage.updateStreak();
      Storage.saveGameScore('sprechenTrainer', (this.sessionScore += 25));
      if (window.App && App.updateHeaderStats) App.updateHeaderStats();
    }

    this.renderActiveModule();
  },

  submitCustomTeil3Turn() {
    const input = document.getElementById('teil3-custom-input');
    if (!input || !input.value.trim()) return;
    const userDe = input.value.trim();

    const scenario = this.teil3Scenarios[this.teil3ScenarioIndex];
    const turn = scenario && scenario.turns[this.teil3TurnIndex];
    if (!turn) return;

    Speech.speak(userDe);
    this.teil3History.push({
      partnerDe: turn.partnerDe,
      partnerAr: turn.partnerAr,
      userDe,
      tip: 'إجابة حرة ممتازة من تعبيرك الخاص!'
    });
    this.teil3TurnIndex++;

    if (this.teil3TurnIndex >= scenario.turns.length) {
      Storage.addXP(25);
      Storage.updateStreak();
      Storage.saveGameScore('sprechenTrainer', (this.sessionScore += 25));
      if (window.App && App.updateHeaderStats) App.updateHeaderStats();
    }

    this.renderActiveModule();
  },

  // =====================================================
  // MODULE 4: AUSBILDUNG VORSTELLUNGSGESPRÄCH-SIMULATOR
  // =====================================================
  renderAusbildung(container) {
    const questions = this.ausbildungQuestions;
    const idx = Math.max(0, Math.min(this.ausbildungIndex, questions.length - 1));
    const q = questions[idx];

    container.innerHTML = `
      <!-- Question Selector Bar -->
      <div class="card" style="margin-bottom: 18px; padding: 16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
          <div>
            <h2 style="margin:0; font-size:1.2rem;">💼 محاكي مقابلة الـ Ausbildung والعمل (Vorstellungsgespräch)</h2>
            <p style="margin:4px 0 0 0; font-size:0.86rem; color:var(--text-secondary);">
              أهم 10 أسئلة يطرحها مسؤولو التوظيف (Arbeitgeber / Ausbilder) في ألمانيا مع أسرار الإجابة المقنعة ونماذج جاهزة للنطق.
            </p>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-secondary btn-sm" onclick="SprechenTrainer.selectAusbildungQuestion((${idx} - 1 + ${questions.length}) % ${questions.length})">➡️ السؤال السابق</button>
            <button class="btn btn-secondary btn-sm" onclick="SprechenTrainer.selectAusbildungQuestion((${idx} + 1) % ${questions.length})">السؤال التالي ⬅️</button>
          </div>
        </div>

        <div style="display:flex; gap:6px; flex-wrap:wrap;">
          ${questions.map((item, i) => `
            <button
              onclick="SprechenTrainer.selectAusbildungQuestion(${i})"
              style="
                padding: 6px 12px;
                border-radius: 8px;
                font-size: 0.82rem;
                cursor: pointer;
                border: 1px solid ${i === idx ? '#8b5cf6' : 'var(--border)'};
                background: ${i === idx ? 'rgba(139,92,246,0.16)' : 'var(--bg-secondary)'};
                color: ${i === idx ? '#8b5cf6' : 'var(--text-primary)'};
                font-weight: ${i === idx ? '700' : '500'};
              "
            >
              سؤال ${item.num}: ${item.questionAr.slice(0, 22)}...
            </button>
          `).join('')}
        </div>
      </div>

      <!-- HR Recruiter Question Card -->
      <div class="card" style="margin-bottom: 18px; padding: 24px; background: linear-gradient(135deg, rgba(139,92,246,0.12), rgba(59,130,246,0.08)); border: 2px solid rgba(139,92,246,0.4);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:10px;">
          <span style="font-size:0.8rem; font-weight:800; color:#8b5cf6;" dir="ltr">
            👔 PRÜFER / ARBEITGEBER • FRAGE ${q.num} / ${questions.length} (${q.category})
          </span>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-primary btn-sm" onclick="Speech.speak('${q.questionDe.replace(/'/g, "\\'")}')">
              🔊 استمع لسؤال صاحب العمل
            </button>
            <button class="btn btn-secondary btn-sm" onclick="Speech.speakSlow('${q.questionDe.replace(/'/g, "\\'")}')">
              🐢 ببطء
            </button>
          </div>
        </div>

        <div dir="ltr" style="font-size:1.45rem; font-weight:900; margin-bottom:6px; color:var(--text-primary);">
          „${Utils.escapeHtml(q.questionDe)}“
        </div>
        <div style="font-size:1rem; font-weight:700; color:var(--text-secondary); margin-bottom:14px;">
          ${q.questionAr}
        </div>

        <!-- Golden Tip -->
        <div style="padding:12px 16px; border-radius:10px; background:rgba(245,158,11,0.12); border:1px solid rgba(245,158,11,0.35); font-size:0.9rem; line-height:1.6;">
          💡 <strong>نصيحة المقابلة الذهبية (Was Arbeitgeber hören möchten):</strong> ${q.goldenTip}
        </div>
      </div>

      <!-- Clickable Building Blocks & Microphone Practice -->
      <div class="card" style="margin-bottom: 18px; padding: 20px; border-top: 4px solid #3b82f6;">
        <h3 style="margin:0 0 8px 0; font-size:1.08rem;">🧱 عبارات قوية لبناء إجابتك (اضغط لإضافتها أو الاستماع إليها)</h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:8px; margin-bottom:16px;" dir="ltr">
          ${q.buildingBlocks.map(blk => `
            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding:8px 12px; border-radius:8px; background:var(--bg-secondary); border:1px solid var(--border);">
              <span style="font-size:0.86rem; font-weight:600; cursor:pointer;" onclick="SprechenTrainer.appendChip('interview-ans-input', '${blk.replace(/'/g, "\\'")}')">
                + ${Utils.escapeHtml(blk)}
              </span>
              <button class="btn btn-secondary btn-sm" onclick="Speech.speak('${blk.replace(/'/g, "\\'")}')">🔊</button>
            </div>
          `).join('')}
        </div>

        <div style="font-weight:700; font-size:0.9rem; margin-bottom:6px;">
          🎤 تدرب على الإجابة بصوتك (أو عبر Win + H):
        </div>
        <div style="display:flex; gap:8px; margin-bottom:10px;">
          <textarea
            id="interview-ans-input"
            rows="3"
            dir="ltr"
            placeholder="Antworten Sie hier auf die Frage des Arbeitgebers..."
            style="flex:1; padding:12px; border-radius:10px; border:1px solid var(--border); background:var(--bg-secondary); color:var(--text-primary); font-size:0.95rem;"
          ></textarea>
          <button
            type="button"
            class="btn btn-secondary audio-btn"
            onclick="Speech.listen('interview-ans-input', this)"
            style="padding:0 16px; border-radius:10px; font-weight:700;"
          >
            🎤 تحدث
          </button>
        </div>

        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button class="btn btn-primary btn-sm" onclick="SprechenTrainer.checkInterviewAnswer()">
            ✅ تقييم إجابتي للمقابلة (+15 XP)
          </button>
          <button class="btn btn-secondary btn-sm" onclick="const v = document.getElementById('interview-ans-input').value; if(v) Speech.speak(v);">
            🔊 استمع لنطق إجابتي
          </button>
        </div>
        <div id="interview-feedback" style="margin-top:12px;"></div>
      </div>

      <!-- 2 Complete Ideal Answers -->
      <div class="card" style="padding: 20px; border-top: 4px solid #10b981;">
        <h3 style="margin:0 0 12px 0; font-size:1.1rem;">🌟 نماذج إجابات مثالية جاهزة للمقابلة (Ideal-Antworten B1)</h3>

        <div style="display:flex; flex-direction:column; gap:12px;">
          ${[q.idealAnswer1, q.idealAnswer2].map((ans, aIdx) => `
            <div style="padding:14px 16px; border-radius:12px; background:var(--bg-secondary); border:1px solid var(--border);">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:8px;">
                <span style="font-weight:800; font-size:0.86rem; color:${aIdx === 0 ? '#10b981' : '#8b5cf6'};">
                  ${ans.label}
                </span>
                <div style="display:flex; gap:6px;">
                  <button class="btn btn-primary btn-sm" onclick="Speech.speak('${ans.de.replace(/'/g, "\\'")}')">🔊 استمع للنموذج</button>
                  <button class="btn btn-secondary btn-sm" onclick="Speech.speakSlow('${ans.de.replace(/'/g, "\\'")}')">🐢 ببطء</button>
                </div>
              </div>
              <div dir="ltr" style="font-weight:700; font-size:0.96rem; line-height:1.6; margin-bottom:6px;">
                ${Utils.escapeHtml(ans.de)}
              </div>
              <div style="font-size:0.86rem; color:var(--text-secondary); line-height:1.6;">
                ${ans.ar}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  selectAusbildungQuestion(index) {
    if (window.Speech && window.Speech.stop) window.Speech.stop();
    this.ausbildungIndex = index;
    this.renderActiveModule();
  },

  checkInterviewAnswer() {
    const input = document.getElementById('interview-ans-input');
    const fb = document.getElementById('interview-feedback');
    if (!input || !fb) return;

    const text = input.value.trim();
    const words = text ? text.split(/\s+/).length : 0;

    if (words < 6) {
      fb.innerHTML = `<div style="padding:10px; border-radius:8px; background:rgba(245,158,11,0.14); color:#f59e0b; font-size:0.88rem;">💡 في مقابلة العمل يفضل الإجابة بـ 2 إلى 4 جمل كاملة. يمكنك الضغط على العبارات أعلاه أو التحدث بالميكروفون!</div>`;
      return;
    }

    Storage.addXP(15);
    Storage.updateStreak();
    Storage.saveGameScore('sprechenTrainer', (this.sessionScore += 15));
    if (window.App && App.updateHeaderStats) App.updateHeaderStats();

    fb.innerHTML = `
      <div style="padding:12px; border-radius:10px; background:rgba(16,185,129,0.14); border:1px solid rgba(16,185,129,0.4); font-size:0.9rem;">
        <div style="font-weight:800; color:#10b981; margin-bottom:4px;">✅ إجابة احترافية رائعة للمقابلة! (+15 XP)</div>
        <div style="font-size:0.84rem; color:var(--text-secondary);">استمع للنموذجين بالأسفل وقارن نبرة الصوت وطريقة ربط الجمل بـ weil و außerdem.</div>
      </div>
    `;
  }
};

window.SprechenTrainer = SprechenTrainer;
