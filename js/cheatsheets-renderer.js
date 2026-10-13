// js/cheatsheets-renderer.js — ⚡ الملخصات الذهبية وجداول القواعد السريعة (Grammatik-Spickzettel & Referenz-Tabellen)
// Inspired by Lingolia & Verbformen.de — 2-second instant grammar lookup with audio & real-time search filter.

const CheatsheetsRenderer = {
  activeTab: 'kasus',
  searchQuery: '',
  verbCaseFilter: 'all', // 'all' | 'akk' | 'dat'
  lastContainer: null,

  tabs: [
    {
      id: 'kasus',
      icon: '🎯',
      titleAr: 'الجداول الشاملة للحالات الأربع (Kasus: Nominativ, Akkusativ, Dativ, Genitiv)',
      shortAr: '🎯 الحالات الأربع (Kasus)',
      shortDe: '🎯 Die 4 Fälle (Kasus)'
    },
    {
      id: 'praepositionen',
      icon: '🧭',
      titleAr: 'خريطة حروف الجر الشاملة (Präpositionen: Akkusativ, Dativ, Wechsel, Temporal, Lokal)',
      shortAr: '🧭 خريطة حروف الجر',
      shortDe: '🧭 Präpositionen-Kompass'
    },
    {
      id: 'verben_praep',
      icon: '🔗',
      titleAr: 'أهم 40 فعلاً مع حروف الجر (Verben mit festen Präpositionen + Wo(r)- / Auf wen?)',
      shortAr: '🔗 أهم 40 فعلاً مع حروف الجر',
      shortDe: '🔗 40 Verben mit Präpositionen'
    },
    {
      id: 'satzbau',
      icon: '🏗️',
      titleAr: 'ترتيب الجملة وأدوات الربط (Satzbau & Konnektoren: Position 0, Position 1, Nebensatz)',
      shortAr: '🏗️ ترتيب الجملة والروابط',
      shortDe: '🏗️ Satzbau & Konnektoren'
    },
    {
      id: 'adjektive_passiv',
      icon: '🎨',
      titleAr: 'تصريف الصفات والطلبات المهذبة (Adjektivdeklination, Passiv & Konjunktiv II)',
      shortAr: '🎨 الصفات، المبني للمجهول و Konjunktiv II',
      shortDe: '🎨 Adjektive, Passiv & Konjunktiv II'
    },
    {
      id: 'redemittel',
      icon: '🗣️',
      titleAr: 'العبارات الذهبية للامتحان والحياة (Redemittel für A2 / B1 & Ausbildung)',
      shortAr: '🗣️ العبارات الذهبية (Redemittel)',
      shortDe: '🗣️ Goldene Redemittel (A2/B1)'
    }
  ],

  // =========================================================================
  // DATA: TAB 1 — KASUS (ARTIKEL, PRONOMEN, FRAGEWÖRTER, DATIV-VERBEN)
  // =========================================================================
  kasusData: {
    definiteArticles: [
      {
        kasus: 'Nominativ',
        roleAr: 'الفاعل (Subjekt)',
        question: 'Wer? / Was?',
        maskulin: { form: 'der', example: 'Der Mann liest.', highlight: 'der' },
        feminin: { form: 'die', example: 'Die Frau arbeitet.', highlight: 'die' },
        neutral: { form: 'das', example: 'Das Kind spielt.', highlight: 'das' },
        plural: { form: 'die', example: 'Die Kinder lernen.', highlight: 'die' }
      },
      {
        kasus: 'Akkusativ',
        roleAr: 'المفعول به المباشر (Direktes Objekt)',
        question: 'Wen? / Was?',
        maskulin: { form: 'den', example: 'Ich sehe den Mann.', highlight: 'akk-change', note: 'التغيير الوحيد!' },
        feminin: { form: 'die', example: 'Ich sehe die Frau.', highlight: 'die' },
        neutral: { form: 'das', example: 'Ich sehe das Kind.', highlight: 'das' },
        plural: { form: 'die', example: 'Ich sehe die Kinder.', highlight: 'die' }
      },
      {
        kasus: 'Dativ',
        roleAr: 'المفعول غير المباشر / السكون (Indirektes Objekt)',
        question: 'Wem? / Wo?',
        maskulin: { form: 'dem', example: 'Ich helfe dem Mann.', highlight: 'dat-change' },
        feminin: { form: 'der', example: 'Ich helfe der Frau.', highlight: 'dat-change' },
        neutral: { form: 'dem', example: 'Ich helfe dem Kind.', highlight: 'dat-change' },
        plural: { form: 'den (+ -n)', example: 'Ich helfe den Kindern.', highlight: 'dat-change', note: '+n للاسم الجمع' }
      },
      {
        kasus: 'Genitiv',
        roleAr: 'المضاف إليه / الملكية (Besitz)',
        question: 'Wessen?',
        maskulin: { form: 'des (+ -s/-es)', example: 'Das Auto des Mannes.', highlight: 'gen-change', note: '+s/es للاسم' },
        feminin: { form: 'der', example: 'Die Tasche der Frau.', highlight: 'gen-change' },
        neutral: { form: 'des (+ -s/-es)', example: 'Das Buch des Kindes.', highlight: 'gen-change', note: '+s/es للاسم' },
        plural: { form: 'der', example: 'Das Spielzeug der Kinder.', highlight: 'gen-change' }
      }
    ],

    indefiniteArticles: [
      {
        kasus: 'Nominativ',
        roleAr: 'الفاعل',
        maskulin: 'ein / kein / mein',
        feminin: 'eine / keine / meine',
        neutral: 'ein / kein / mein',
        plural: '— / keine / meine',
        example: 'Mein Bruder hat ein neues Auto und keine Probleme.'
      },
      {
        kasus: 'Akkusativ',
        roleAr: 'المفعول به',
        maskulin: 'einen / keinen / meinen',
        feminin: 'eine / keine / meine',
        neutral: 'ein / kein / mein',
        plural: '— / keine / meine',
        example: 'Ich suche einen Job, eine Wohnung und ein Zimmer.'
      },
      {
        kasus: 'Dativ',
        roleAr: 'المجرور / المستفيد',
        maskulin: 'einem / keinem / meinem',
        feminin: 'einer / keiner / meiner',
        neutral: 'einem / keinem / meinem',
        plural: '— / keinen / meinen (+ -n)',
        example: 'Er wohnt bei einem Freund und hilft seinen Eltern.'
      },
      {
        kasus: 'Genitiv',
        roleAr: 'الملكية',
        maskulin: 'eines / keines / meines (+ -s/-es)',
        feminin: 'einer / keiner / meiner',
        neutral: 'eines / keines / meines (+ -s/-es)',
        plural: '— / keiner / meiner',
        example: 'Trotz eines Fehlers war die Note meiner Schwester gut.'
      }
    ],

    pronouns: [
      { nom: 'ich', ar: 'أنا', akk: 'mich', dat: 'mir', poss: 'mein-', exAkk: 'Siehst du mich?', exDat: 'Kannst du mir helfen?' },
      { nom: 'du', ar: 'أنتَ / أنتِ', akk: 'dich', dat: 'dir', poss: 'dein-', exAkk: 'Ich verstehe dich gut.', exDat: 'Wie geht es dir?' },
      { nom: 'er', ar: 'هو (للمذكر)', akk: 'ihn', dat: 'ihm', poss: 'sein-', exAkk: 'Ich rufe ihn morgen an.', exDat: 'Das Buch gehört ihm.' },
      { nom: 'sie', ar: 'هي (للمؤنث)', akk: 'sie', dat: 'ihr', poss: 'ihr-', exAkk: 'Wir besuchen sie heute.', exDat: 'Ich danke ihr herzlich.' },
      { nom: 'es', ar: 'هو/هي (للمحايد)', akk: 'es', dat: 'ihm', poss: 'sein-', exAkk: 'Ich kaufe es sofort.', exDat: 'Es geht ihm besser.' },
      { nom: 'wir', ar: 'نحن', akk: 'uns', dat: 'uns', poss: 'unser-', exAkk: 'Er lädt uns zur Party ein.', exDat: 'Kommst du mit uns?' },
      { nom: 'ihr', ar: 'أنتم / أنتنّ', akk: 'euch', dat: 'euch', poss: 'euer- (eure)', exAkk: 'Ich höre euch nicht.', exDat: 'Die Pizza schmeckt euch.' },
      { nom: 'sie / Sie', ar: 'هم / حضرتك', akk: 'sie / Sie', dat: 'ihnen / Ihnen', poss: 'ihr- / Ihr-', exAkk: 'Ich informiere Sie bald.', exDat: 'Kann ich Ihnen helfen?' }
    ],

    questionWords: [
      { kasus: 'Nominativ', word: 'Wer? (عاقل) / Was? (غير عاقل)', ar: 'مَن؟ (للفاعل) / ما هذا؟', example: 'Wer kommt heute Abend? — Der Lehrer kommt.', answer: 'Der Lehrer (Nom)' },
      { kasus: 'Akkusativ', word: 'Wen? (عاقل) / Was? (غير عاقل)', ar: 'مَن؟ (للمفعول به) / ماذا؟', example: 'Wen besuchst du morgen? — Ich besuche meinen Onkel.', answer: 'meinen Onkel (Akk)' },
      { kasus: 'Dativ', word: 'Wem? (عاقل) / Wo? (مكان)', ar: 'لِمَن؟ / أين؟', example: 'Wem gehört dieser Schlüssel? — Er gehört dem Chef.', answer: 'dem Chef (Dat)' },
      { kasus: 'Genitiv', word: 'Wessen?', ar: 'مِلْكُ مَن؟ (لمن تعود الملكية؟)', example: 'Wessen Tasche liegt hier? — Das ist die Tasche der Kollegin.', answer: 'der Kollegin (Gen)' }
    ],

    dativVerbs: [
      { verb: 'helfen (hilft)', ar: 'يساعد', example: 'Kannst du mir bitte beim Umzug helfen?' },
      { verb: 'danken', ar: 'يشكر', example: 'Ich danke Ihnen herzlich für Ihre Hilfe.' },
      { verb: 'gefallen (gefällt)', ar: 'يُعجب (الشكل/الفكرة)', example: 'Die neue Wohnung gefällt meiner Familie sehr.' },
      { verb: 'gehören', ar: 'يخص / يعود مِلْكه لـ', example: 'Wem gehört das rote Fahrrad vor der Tür?' },
      { verb: 'schmecken', ar: 'يُعجب طعمه / يطيب لـ', example: 'Das Essen im Restaurant schmeckt den Gästen.' },
      { verb: 'passen', ar: 'يناسب (المقاس أو الموعد)', example: 'Die Jacke passt mir perfekt. / Passt es dir am Montag?' },
      { verb: 'antworten', ar: 'يجيب على (شخص)', example: 'Bitte antworte mir schnell auf meine Nachricht.' },
      { verb: 'gratulieren', ar: 'يهنئ', example: 'Wir gratulieren unserem Kollegen zur Beförderung.' },
      { verb: 'vertrauen', ar: 'يثق بـ', example: 'Du kannst deinem Arzt vollkommen vertrauen.' },
      { verb: 'wehtun (tut weh)', ar: 'يؤلم', example: 'Mein Rücken tut mir seit gestern weh.' },
      { verb: 'fehlen', ar: 'ينقص / يفتقد', example: 'Was fehlt Ihnen? / Du fehlst mir sehr.' },
      { verb: 'folgen / zuhören', ar: 'يتبع / ينصت إلى', example: 'Bitte hören Sie dem Lehrer gut zu und folgen Sie dem Plan.' }
    ]
  },

  // =========================================================================
  // DATA: TAB 2 — PRÄPOSITIONEN (AKKUSATIV, DATIV, WECHSEL, LOKAL, TEMPORAL)
  // =========================================================================
  praepData: {
    akkusativ: [
      { prep: 'durch', ar: 'عبر / من خلال / بواسطة', example: 'Wir spazieren gemütlich durch den großen Park.' },
      { prep: 'ohne', ar: 'بدون (تأتي غالباً بدون أداة)', example: 'Ich trinke meinen Kaffee immer ohne Zucker.' },
      { prep: 'gegen', ar: 'ضد / يصطدم بـ / حوالي (للوقت)', example: 'Das Auto ist gegen einen Baum gefahren. / Ich komme gegen 18 Uhr.' },
      { prep: 'für', ar: 'من أجل / لـ / لمدة زمنية', example: 'Dieses Geschenk ist für meinen besten Freund.' },
      { prep: 'um', ar: 'حول (للمكان) / في تمام (للساعة)', example: 'Wir sitzen alle um den runden Tisch. / Der Zug fährt um 8 Uhr.' },
      { prep: 'bis', ar: 'حتى (للزمان والمكان)', example: 'Dieser Zug fährt nur bis den Hauptbahnhof / bis München.' },
      { prep: 'entlang', ar: 'على امتداد (يوضع بعد الاسم مع Akk!)', example: 'Gehen Sie einfach den Fluss entlang.' }
    ],

    dativ: [
      { prep: 'aus', ar: 'من (أصل/بلد) / من داخل مكان مغلق / مصنوع من', example: 'Ich komme aus dem Irak und gehe um 17 Uhr aus dem Büro.' },
      { prep: 'bei', ar: 'عند (شخص/طبيب) / لدى (شركة) / بالقرب من / أثناء', example: 'Er wohnt noch bei seinen Eltern und arbeitet bei einer Bank.' },
      { prep: 'mit', ar: 'مع (شخص) / بواسطة (وسيلة مواصلات أو أداة)', example: 'Ich fahre jeden Morgen mit dem Bus oder mit der U-Bahn.' },
      { prep: 'nach', ar: 'إلى (مدن ودول بلا أداة + البيت) / بعد (للزمان) / حسب', example: 'Nach dem Unterricht fahre ich sofort nach Hause.' },
      { prep: 'seit', ar: 'منذ (حدث بدأ في الماضي وما زال مستمراً حتى الآن)', example: 'Ich lerne seit sechs Monaten intensiv Deutsch.' },
      { prep: 'von', ar: 'من (نقطة انطلاق أو من عند شخص) / ملكية (بديل Genitiv)', example: 'Ich komme gerade vom (von dem) Zahnarzt.' },
      { prep: 'zu', ar: 'إلى (أشخاص، أطباء، متاجر، مؤسسات) / في المنزل (zu Hause)', example: 'Gehst du heute zum (zu dem) Arzt oder zur (zu der) Post?' },
      { prep: 'gegenüber', ar: 'مقابل / في مواجهة (قبل أو بعد الاسم)', example: 'Die Apotheke liegt direkt gegenüber dem Bahnhof.' },
      { prep: 'ab', ar: 'ابتداءً من (للزمان أو المكان أو العمر)', example: 'Ab nächster Woche (Ab dem 1. Mai) habe ich Urlaub.' }
    ],

    contractions: [
      { short: 'im', full: 'in + dem', kasus: 'Dativ (Wo? / Wann?)', example: 'Er ist im (in dem) Supermarkt / im Sommer.' },
      { short: 'ins', full: 'in + das', kasus: 'Akkusativ (Wohin?)', example: 'Wir gehen heute Abend ins (in das) Kino.' },
      { short: 'am', full: 'an + dem', kasus: 'Dativ (Wo? / Wann?)', example: 'Wir treffen uns am (an dem) Bahnhof / am Montag.' },
      { short: 'ans', full: 'an + das', kasus: 'Akkusativ (Wohin?)', example: 'Im Sommer fahren wir ans (an das) Meer.' },
      { short: 'zum', full: 'zu + dem', kasus: 'Dativ (Wohin?)', example: 'Ich muss schnell zum (zu dem) Arzt gehen.' },
      { short: 'zur', full: 'zu + der', kasus: 'Dativ (Wohin?)', example: 'Sie fährt mit dem Bus zur (zu der) Arbeit.' },
      { short: 'beim', full: 'bei + dem', kasus: 'Dativ (Wo? / Wann?)', example: 'Ich bin gerade beim (bei dem) Friseur / beim Essen.' },
      { short: 'vom', full: 'von + dem', kasus: 'Dativ (Woher?)', example: 'Er kommt müde vom (von dem) Training zurück.' }
    ],

    wechsel: [
      { prep: 'in', ar: 'في / إلى داخل', wohin: 'Ich gehe in den Park / ins Kino.', wo: 'Ich bin im (in dem) Park / im Kino.' },
      { prep: 'auf', ar: 'على (سطح أفقي ملامس)', wohin: 'Ich lege das Buch auf den Tisch.', wo: 'Das Buch liegt auf dem Tisch.' },
      { prep: 'an', ar: 'على (سطح رأسي/حائط) / عند حافة أو شاطئ', wohin: 'Ich hänge das Bild an die Wand.', wo: 'Das Bild hängt an der Wand.' },
      { prep: 'über', ar: 'فوق (بدون تلامس) / عبر', wohin: 'Er hängt die Lampe über den Esstisch.', wo: 'Die Lampe hängt über dem Esstisch.' },
      { prep: 'unter', ar: 'تحت / أسفل', wohin: 'Die Katze läuft unter das Bett.', wo: 'Die Katze schläft unter dem Bett.' },
      { prep: 'vor', ar: 'أمام (للمكان) / قبل (للزمان دائماً Dativ!)', wohin: 'Er stellt sein Auto vor das Haus.', wo: 'Sein Auto steht vor dem Haus.' },
      { prep: 'hinter', ar: 'خلف / وراء', wohin: 'Das Kind rennt hinter den Baum.', wo: 'Das Kind versteckt sich hinter dem Baum.' },
      { prep: 'neben', ar: 'بجانب / بجوار', wohin: 'Ich setze mich neben meinen Freund.', wo: 'Ich sitze neben meinem Freund.' },
      { prep: 'zwischen', ar: 'بين (شيئين)', wohin: 'Stell den Stuhl zwischen den Tisch und das Sofa!', wo: 'Der Stuhl steht zwischen dem Tisch und dem Sofa.' }
    ],

    wechselVerbsComparison: [
      {
        meaningAr: 'وضع عمودي (واقفاً)',
        wohinVerb: 'stellen (stellt, stellte, hat gestellt)',
        wohinNote: 'فعل متعددٍ منتظم + Akkusativ',
        wohinEx: 'Ich stelle die Flasche auf den Tisch.',
        woVerb: 'stehen (steht, stand, hat gestanden)',
        woNote: 'فعل سكون قوي + Dativ',
        woEx: 'Die Flasche steht auf dem Tisch.'
      },
      {
        meaningAr: 'وضع أفقي (نائماً/مسطحاً)',
        wohinVerb: 'legen (legt, legte, hat gelegt)',
        wohinNote: 'فعل متعددٍ منتظم + Akkusativ',
        wohinEx: 'Sie legt das Handy auf das Bett.',
        woVerb: 'liegen (liegt, lag, hat gelegen)',
        woNote: 'فعل سكون قوي + Dativ',
        woEx: 'Das Handy liegt auf dem Bett.'
      },
      {
        meaningAr: 'الجلوس',
        wohinVerb: 'sich setzen (setzt, setzte, hat gesetzt)',
        wohinNote: 'فعل منعكس منتظم + Akkusativ',
        wohinEx: 'Er setzt sich auf den Stuhl.',
        woVerb: 'sitzen (sitzt, saß, hat gesessen)',
        woNote: 'فعل سكون قوي + Dativ',
        woEx: 'Er sitzt auf dem Stuhl.'
      },
      {
        meaningAr: 'التعليق (على حائط أو خزانة)',
        wohinVerb: 'hängen (hängt, hängte, hat gehängt)',
        wohinNote: 'حركة (منتظم) + Akkusativ',
        wohinEx: 'Ich hänge meinen Mantel in den Schrank.',
        woVerb: 'hängen (hängt, hing, hat gehangen)',
        woNote: 'سكون (غير منتظم) + Dativ',
        woEx: 'Mein Mantel hängt im Schrank.'
      },
      {
        meaningAr: 'الإدخال في جيب أو قفل',
        wohinVerb: 'stecken (steckt, steckte, hat gesteckt)',
        wohinNote: 'حركة + Akkusativ',
        wohinEx: 'Ich stecke den Schlüssel in die Tasche.',
        woVerb: 'stecken (steckt, steckte, hat gesteckt)',
        woNote: 'سكون + Dativ',
        woEx: 'Der Schlüssel steckt in der Tasche.'
      }
    ],

    lokalGoldRules: [
      {
        prep: 'nach',
        ruleAr: 'إلى: المدن، القارات، الدول بدون أداة (Deutschland, Spanien, Ägypten)، الاتجاهات، وإلى البيت (nach Hause)',
        example: 'Nächstes Jahr fliege ich nach Deutschland und danach fahre ich nach Hause.'
      },
      {
        prep: 'in (+ Akk / Dat)',
        ruleAr: 'إلى/في: الدول ذات الأداة (die Schweiz, die Türkei, die USA, der Irak, der Iran, der Libanon) + الأماكن المغلقة والغرف',
        example: 'Wir fliegen in die Schweiz / in den Irak. (Wohin? Akk) — Wir leben in der Schweiz / im Irak. (Wo? Dat)'
      },
      {
        prep: 'zu (+ Dat)',
        ruleAr: 'إلى: الأشخاص، الأطباء، المتاجر، المؤسسات (البنك/البريد/المدرسة/العمل)، ومع (zu Hause = في المنزل)',
        example: 'Ich gehe jetzt zu Paul / zum Bäcker / zur Bank, und am Abend bleibe ich zu Hause.'
      },
      {
        prep: 'bei (+ Dat)',
        ruleAr: 'عند (السكون): عند شخص أو طبيب، أو العمل لدى شركة (bei Siemens / bei BMW)، أو قرب مدينة',
        example: 'Ich bin gerade beim Zahnarzt / bei meinem Bruder. Er arbeitet bei Mercedes.'
      },
      {
        prep: 'aus vs. von (+ Dat)',
        ruleAr: 'aus = من الموطن الأصلي أو من داخل مبنى مغلق | von = من عند شخص/طبيب أو من مكان مفتوح/نشاط',
        example: 'Ich komme aus Syrien / aus dem Supermarkt. Aber: Ich komme gerade vom Arzt / von der Arbeit.'
      }
    ],

    temporalGoldRules: [
      {
        prep: 'um (+ Akk)',
        ruleAr: 'مع الساعات المحددة بدقة (Uhrzeit)',
        example: 'Der Deutschkurs beginnt pünktlich um 9:30 Uhr.'
      },
      {
        prep: 'am (+ Dat)',
        ruleAr: 'مع أيام الأسبوع، أوقات اليوم (ما عدا الليل: in der Nacht)، التواريخ، و am Wochenende',
        example: 'Am Montagmorgen und am 15. Mai habe ich einen Termin. (Aber: in der Nacht!)'
      },
      {
        prep: 'im (+ Dat)',
        ruleAr: 'مع الشهور، الفصول الأربعة، والقرون (السنوات بمفردها تُذكر بدون حرف جر: 2026 أو im Jahr 2026)',
        example: 'Im Januar ist es kalt, aber im Sommer fahren wir in den Urlaub.'
      },
      {
        prep: 'seit (+ Dat)',
        ruleAr: 'منذ (حدث بدأ في الماضي وما زال مستمراً في الحاضر — الفعل معها مضارع Präsens!)',
        example: 'Ich wohne seit zwei Jahren in Berlin und lerne seit einem Monat für die Prüfung.'
      },
      {
        prep: 'vor (+ Dat)',
        ruleAr: 'قبل (حدث وقع وانتهى في الماضي — الفعل معها ماضٍ Perfekt / Präteritum!)',
        example: 'Vor einem Jahr bin ich nach Deutschland gekommen.'
      },
      {
        prep: 'für (+ Akk)',
        ruleAr: 'لمدة زمنية محددة (في الحاضر أو المستقبل أو الماضي)',
        example: 'Wir bleiben für drei Tage in München.'
      },
      {
        prep: 'in (+ Dat) / ab (+ Dat)',
        ruleAr: 'in = في غضون (بعد فترة في المستقبل) | ab = ابتداءً من نقطة زمنية',
        example: 'In zwei Wochen fängt die Ausbildung an. Ab morgen stehe ich früh auf.'
      }
    ]
  },

  // =========================================================================
  // DATA: TAB 3 — 43 ESSENTIAL VERBS WITH FIXED PREPOSITIONS
  // =========================================================================
  verbsWithPrepData: [
    { id: 1, verb: 'warten auf', kasus: 'Akk', ar: 'ينتظر (شخصاً أو شيئاً)', question: 'Worauf? / Auf wen?', example: 'Ich warte schon seit zwanzig Minuten auf den Bus.' },
    { id: 2, verb: 'sich freuen auf', kasus: 'Akk', ar: 'يفرح بـ / يتطلع شوقاً إلى (المستقبل)', question: 'Worauf? / Auf wen?', example: 'Ich freue mich schon sehr auf den Sommerurlaub.' },
    { id: 3, verb: 'sich freuen über', kasus: 'Akk', ar: 'يفرح بـ (شيء حدث أو هدية استلمها)', question: 'Worüber? / Über wen?', example: 'Sie hat sich sehr über das schöne Geschenk gefreut.' },
    { id: 4, verb: 'denken an', kasus: 'Akk', ar: 'يفكر في', question: 'Woran? / An wen?', example: 'Ich denke jeden Tag an meine Familie.' },
    { id: 5, verb: 'sich erinnern an', kasus: 'Akk', ar: 'يتذكر', question: 'Woran? / An wen?', example: 'Erinnerst du dich noch an unseren ersten Lehrer?' },
    { id: 6, verb: 'sprechen über', kasus: 'Akk', ar: 'يتحدث عن (موضوع)', question: 'Worüber? / Über wen?', example: 'Wir müssen heute über den neuen Arbeitsvertrag sprechen.' },
    { id: 7, verb: 'sprechen mit', kasus: 'Dat', ar: 'يتحدث مع (شخص)', question: 'Mit wem?', example: 'Ich habe gestern lange mit meinem Chef gesprochen.' },
    { id: 8, verb: 'sich interessieren für', kasus: 'Akk', ar: 'يهتم بـ / يميل إلى', question: 'Wofür? / Für wen?', example: 'Interessierst du dich für Kultur und Geschichte?' },
    { id: 9, verb: 'danken für', kasus: 'Akk', ar: 'يشكر على (+ Dat للشخص، + für Akk للشيء)', question: 'Wofür? / (Wem?)', example: 'Ich danke Ihnen herzlich für Ihre schnelle Unterstützung.' },
    { id: 10, verb: 'sich entschuldigen für', kasus: 'Akk', ar: 'يعتذر عن (خطأ / تأخير)', question: 'Wofür?', example: 'Er entschuldigt sich für die lange Verspätung.' },
    { id: 11, verb: 'sich entschuldigen bei', kasus: 'Dat', ar: 'يعتذر إلى (شخص)', question: 'Bei wem?', example: 'Du musst dich sofort bei deiner Mutter entschuldigen.' },
    { id: 12, verb: 'teilnehmen an', kasus: 'Dat', ar: 'يشارك في (دورة / اجتماع / مسابقة)', question: 'Woran?', example: 'Alle neuen Mitarbeiter nehmen an dem Seminar teil.' },
    { id: 13, verb: 'träumen von', kasus: 'Dat', ar: 'يحلم بـ', question: 'Wovon? / Von wem?', example: 'Viele Jugendliche träumen von einem guten Ausbildungsplatz.' },
    { id: 14, verb: 'sich kümmern um', kasus: 'Akk', ar: 'يعتني بـ / يهتم بشؤون', question: 'Worum? / Um wen?', example: 'Die Pflegefachkraft kümmert sich liebevoll um die Patienten.' },
    { id: 15, verb: 'sich bewerben um', kasus: 'Akk', ar: 'يتقدم بطلب للحصول على (وظيفة / مقعد)', question: 'Worum?', example: 'Ich bewerbe mich um eine Stelle als Krankenpfleger.' },
    { id: 16, verb: 'sich bewerben bei', kasus: 'Dat', ar: 'يتقدم بطلب عمل لدى (شركة / مستشفى)', question: 'Bei wem?', example: 'Sie hat sich gestern bei einer großen Firma beworben.' },
    { id: 17, verb: 'sich vorbereiten auf', kasus: 'Akk', ar: 'يستعد لـ / يتحضر لـ', question: 'Worauf? / Auf wen?', example: 'Wir bereiten uns intensiv auf die Goethe-Prüfung vor.' },
    { id: 18, verb: 'Angst haben vor', kasus: 'Dat', ar: 'يخاف من', question: 'Wovor? / Vor wem?', example: 'Hab keine Angst vor der mündlichen Prüfung!' },
    { id: 19, verb: 'abhängen von', kasus: 'Dat', ar: 'يعتمد على / يتوقف على', question: 'Wovon? / Von wem?', example: 'Ob wir grillen, hängt ganz vom Wetter ab.' },
    { id: 20, verb: 'bestehen aus', kasus: 'Dat', ar: 'يتكون من / يتألف من', question: 'Woraus?', example: 'Die B1-Prüfung besteht aus vier verschiedenen Modulen.' },
    { id: 21, verb: 'beginnen mit / anfangen mit', kasus: 'Dat', ar: 'يبدأ بـ', question: 'Womit?', example: 'Wir beginnen heute pünktlich mit der ersten Übung.' },
    { id: 22, verb: 'einladen zu', kasus: 'Dat', ar: 'يدعو إلى (مناسبة / حفلة)', question: 'Wozu?', example: 'Ich lade dich herzlich zu meiner Hochzeit ein.' },
    { id: 23, verb: 'gratulieren zu', kasus: 'Dat', ar: 'يهنئ بـ (مناسبة / نجاح)', question: 'Wozu? / (Wem?)', example: 'Ich gratuliere dir herzlich zum bestandenen Examen!' },
    { id: 24, verb: 'helfen bei', kasus: 'Dat', ar: 'يساعد في (عمل / مهمة)', question: 'Wobei? / (Wem?)', example: 'Kannst du mir bitte bei der Hausarbeit helfen?' },
    { id: 25, verb: 'fragen nach', kasus: 'Dat', ar: 'يسأل عن / يستفسر عن', question: 'Wonach? / Nach wem?', example: 'Der Patient fragt den Arzt nach den Tabletten.' },
    { id: 26, verb: 'suchen nach', kasus: 'Dat', ar: 'يبحث عن', question: 'Wonach? / Nach wem?', example: 'Wir suchen schon lange nach einer bezahlbaren Wohnung.' },
    { id: 27, verb: 'sich beschweren über', kasus: 'Akk', ar: 'يشتكي من (مشكلة / إزعاج)', question: 'Worüber? / Über wen?', example: 'Die Nachbarn beschweren sich über die laute Musik.' },
    { id: 28, verb: 'sich beschweren bei', kasus: 'Dat', ar: 'يشتكي لدى (المدير / المالك)', question: 'Bei wem?', example: 'Ich muss mich beim Vermieter über die kaputte Heizung beschweren.' },
    { id: 29, verb: 'achten auf', kasus: 'Akk', ar: 'ينتبه إلى / يحرص على', question: 'Worauf? / Auf wen?', example: 'Bitte achten Sie im Straßenverkehr immer auf die Kinder.' },
    { id: 30, verb: 'verzichten auf', kasus: 'Akk', ar: 'يستغني عن / يتنازل عن', question: 'Worauf? / Auf wen?', example: 'Am Abend verzichte ich lieber auf schweres Essen.' },
    { id: 31, verb: 'sich gewöhnen an', kasus: 'Akk', ar: 'يتعود على / يتأقلم مع', question: 'Woran? / An wen?', example: 'Ich habe mich schnell an den neuen Arbeitsalltag gewöhnt.' },
    { id: 32, verb: 'zweifeln an', kasus: 'Dat', ar: 'يشك في', question: 'Woran? / An wem?', example: 'Ich zweifle nicht an deiner Ehrlichkeit.' },
    { id: 33, verb: 'leiden an', kasus: 'Dat', ar: 'يعاني من (مرض)', question: 'Woran?', example: 'Viele Menschen leiden im Frühjahr an Heuschnupfen.' },
    { id: 34, verb: 'sterben an', kasus: 'Dat', ar: 'يموت بسبب (مرض)', question: 'Woran?', example: 'Er ist leider an einer schweren Krankheit gestorben.' },
    { id: 35, verb: 'riechen nach', kasus: 'Dat', ar: 'تفوح منه رائحة كذا', question: 'Wonach?', example: 'Hier riecht es wunderbar nach frischem Brot.' },
    { id: 36, verb: 'schmecken nach', kasus: 'Dat', ar: 'طعمه مثل كذا', question: 'Wonach?', example: 'Der Kuchen schmeckt herrlich nach Schokolade und Zimt.' },
    { id: 37, verb: 'gehören zu', kasus: 'Dat', ar: 'ينتمي إلى / يُعد جزءاً من', question: 'Wozu? / Zu wem?', example: 'Pünktlichkeit gehört in Deutschland zur Arbeitskultur.' },
    { id: 38, verb: 'passen zu', kasus: 'Dat', ar: 'يليق بـ / يتناسق مع', question: 'Wozu? / Zu wem?', example: 'Diese Schuhe passen sehr gut zu deinem neuen Anzug.' },
    { id: 39, verb: 'telefonieren mit', kasus: 'Dat', ar: 'يتحدث هاتفياً مع', question: 'Mit wem?', example: 'Sie telefoniert jeden Freitagabend mit ihren Großeltern.' },
    { id: 40, verb: 'streiten mit / über', kasus: 'Dat+Akk', ar: 'يتجادل مع (Dat) حول (Akk)', question: 'Mit wem? / Worüber?', example: 'Wir wollen nicht mit den Nachbarn über den Parkplatz streiten.' },
    { id: 41, verb: 'diskutieren mit / über', kasus: 'Dat+Akk', ar: 'يناقش مع (Dat) حول (Akk)', question: 'Mit wem? / Worüber?', example: 'Im Kurs diskutieren wir mit dem Lehrer über Umweltschutz.' },
    { id: 42, verb: 'lachen über', kasus: 'Akk', ar: 'يضحك على', question: 'Worüber? / Über wen?', example: 'Alle Kollegen lachen über seinen lustigen Witz.' },
    { id: 43, verb: 'sich ärgern über', kasus: 'Akk', ar: 'يغضب من / ينزعج من', question: 'Worüber? / Über wen?', example: 'Ich ärgere mich sehr über meinen eigenen Fehler.' }
  ],

  // =========================================================================
  // DATA: TAB 4 — SATZBAU & KONNEKTOREN (POS 0, POS 1, NEBENSATZ)
  // =========================================================================
  satzbauData: {
    pos0: [
      { conn: 'und', ar: 'وَ (للعطف والإضافة)', formula: 'Satz 1 + und + Subjekt + Verb (Pos 2) ...', example: 'Ich lerne Deutsch und mein Bruder studiert Medizin.' },
      { conn: 'oder', ar: 'أو (للتخيير)', formula: 'Satz 1 + oder + Subjekt + Verb (Pos 2) ...', example: 'Trinkst du lieber Kaffee oder möchtest du einen Tee?' },
      { conn: 'aber', ar: 'لكن (للاستدراك)', formula: 'Satz 1 , aber + Subjekt + Verb (Pos 2) ...', example: 'Das Kleid ist sehr schön, aber es ist leider zu teuer.' },
      { conn: 'denn', ar: 'لأنّ (ذكر السبب في جملة رئيسية — الفعل يبقى في الموقع 2!)', formula: 'Satz 1 , denn + Subjekt + Verb (Pos 2) ...', example: 'Ich bleibe heute zu Hause, denn ich bin ziemlich krank.' },
      { conn: 'sondern', ar: 'بل (لتصحيح جملة منفية بـ nicht أو kein)', formula: 'Nicht/Kein ... , sondern + Subjekt + Verb (Pos 2) ...', example: 'Er kommt nicht am Montag, sondern er kommt erst am Mittwoch.' }
    ],

    pos1: [
      { conn: 'deshalb / deswegen / daher', ar: 'لذلك / لهذا السبب (تعبّر عن النتيجة وتحتل الموقع 1)', formula: 'Satz 1 , deshalb + Verb (Pos 2) + Subjekt ...', example: 'Ich bin heute krank, deshalb bleibe ich im Bett.' },
      { conn: 'trotzdem', ar: 'رغم ذلك / مع ذلك (تحتل الموقع 1 ويليها الفعل فوراً)', formula: 'Satz 1 , trotzdem + Verb (Pos 2) + Subjekt ...', example: 'Es regnet stark, trotzdem gehen wir im Park spazieren.' },
      { conn: 'dann / danach', ar: 'ثمّ / بعد ذلك (لتسلسل الأحداث)', formula: 'Satz 1 , dann/danach + Verb (Pos 2) + Subjekt ...', example: 'Zuerst mache ich meine Hausaufgaben, danach sehe ich fern.' },
      { conn: 'außerdem / zudem', ar: 'علاوة على ذلك / بالإضافة إلى ذلك', formula: 'Satz 1 , außerdem + Verb (Pos 2) + Subjekt ...', example: 'Der Beruf macht mir Spaß, außerdem verdient man gut.' },
      { conn: 'sonst / andernfalls', ar: 'وإلا (للتحذير من عاقبة)', formula: 'Satz 1 , sonst + Verb (Pos 2) + Subjekt ...', example: 'Ich muss mich beeilen, sonst verpasse ich noch den Zug.' },
      { conn: 'darum / folglich', ar: 'لأجل ذلك / بالتالي', formula: 'Satz 1 , darum + Verb (Pos 2) + Subjekt ...', example: 'Morgen haben wir Prüfung, darum lerne ich den ganzen Abend.' }
    ],

    nebensatz: [
      { conn: 'weil / da', ar: 'لأنّ (بسبب) — الفعل المصرف في آخر الجملة تماماً', example: 'Ich lerne intensiv Deutsch, weil ich in Deutschland arbeiten möchte.' },
      { conn: 'dass', ar: 'أنّ (بعد أفعال القول، الاعتقاد، المشاعر، العلم)', example: 'Ich weiß genau, dass regelmäßiges Üben zum Erfolg führt.' },
      { conn: 'wenn', ar: 'إذا / عندما (للشرط، الحاضر، المستقبل، أو تكرار في الماضي)', example: 'Wenn ich Zeit habe, besuche ich dich am Wochenende.' },
      { conn: 'als', ar: 'عندما / لمّا (لحدث وقع مرة واحدة وانتهى في الماضي فقط!)', example: 'Als ich zehn Jahre alt war, bin ich nach Berlin gereist.' },
      { conn: 'ob', ar: 'ما إذا / هل (في الأسئلة غير المباشرة وعند عدم التأكد)', example: 'Ich weiß noch nicht, ob ich morgen zur Party kommen kann.' },
      { conn: 'obwohl', ar: 'على الرغم من أنّ (تناقض — الفعل في النهاية)', example: 'Er geht heute zur Arbeit, obwohl er starke Kopfschmerzen hat.' },
      { conn: 'bevor', ar: 'قبل أن', example: 'Bevor ich zur Arbeit fahre, trinke ich immer eine Tasse Kaffee.' },
      { conn: 'nachdem', ar: 'بعد أن', example: 'Nachdem er die Prüfung bestanden hatte, feierte er mit Freunden.' },
      { conn: 'während', ar: 'بينما / أثناء ما (حدثان متزامنان)', example: 'Während die Mutter kocht, decken die Kinder den Tisch.' },
      { conn: 'bis / seit(dem)', ar: 'حتى أن / منذ أن', example: 'Warte bitte hier, bis ich mit dem Arzt gesprochen habe.' },
      { conn: 'damit', ar: 'لكي / حتى (للغرض والهدف — جملة كاملة بفعل مصرف في النهاية)', example: 'Ich spreche langsam, damit du mich gut verstehst.' },
      { conn: 'um ... zu + Infinitiv', ar: 'لكي (للغرض — بشرط أن يكون الفاعل واحداً في الجملتين، بدون فاعل جديد)', example: 'Ich lerne jeden Tag Deutsch, um die B1-Prüfung zu bestehen.' }
    ],

    comparisons: [
      {
        titleAr: '🔥 المقارنة الذهبية 1: التعبير عن السبب والنتيجة (weil vs. denn vs. deshalb)',
        items: [
          { label: 'denn (Position 0)', rule: 'لأنّ — لا تغير ترتيب الجملة، الفعل في الموقع 2', sentence: 'Ich bleibe zu Hause, denn ich bin krank.' },
          { label: 'weil (Nebensatz)', rule: 'لأنّ — تطرد الفعل المصرف إلى آخر الجملة تماماً', sentence: 'Ich bleibe zu Hause, weil ich krank bin.' },
          { label: 'deshalb (Position 1)', rule: 'لذلك (النتيجة!) — يأتي الفعل بعدها مباشرة في الموقع 2', sentence: 'Ich bin krank, deshalb bleibe ich zu Hause.' }
        ]
      },
      {
        titleAr: '🔥 المقارنة الذهبية 2: الفرق الحاسم بين (wenn vs. als vs. ob)',
        items: [
          { label: 'wenn (عندما / إذا)', rule: 'للحاضر والمستقبل، أو حدث تكرر عدة مرات في الماضي (مع immer/jedes Mal)', sentence: 'Immer wenn ich meine Oma besuchte, backte sie einen Kuchen.' },
          { label: 'als (عندما — ماضٍ لمرة واحدة)', rule: 'لحدث أو مرحلة عمرية وقعت مرة واحدة فقط في الماضي وانتهت', sentence: 'Als ich 2022 nach Deutschland kam, sprach ich nur wenig Deutsch.' },
          { label: 'ob (هل / ما إذا)', rule: 'للسؤال غير المباشر الذي إجابته نعم أو لا، وبعد (nicht wissen / fragen)', sentence: 'Kannst du mir sagen, ob das Geschäft heute geöffnet ist?' }
        ]
      },
      {
        titleAr: '🔥 المقارنة الذهبية 3: التعبير عن الهدف (damit vs. um ... zu)',
        items: [
          { label: 'um ... zu + Infinitiv', rule: 'تُستخدم فقط عندما يكون الفاعل في الجملتين هو نفس الشخص (لا نكتب الفاعل مرة ثانية!)', sentence: 'Ich spare Geld, um (ich) ein neues Auto zu kaufen.' },
          { label: 'damit + Nebensatz', rule: 'تصلح دائماً، وهي إجبارية إذا اختلف الفاعل في الجملة الثانية عن الأولى', sentence: 'Der Vater spart Geld, damit sein Sohn studieren kann.' }
        ]
      }
    ]
  },

  // =========================================================================
  // DATA: TAB 5 — ADJEKTIVDEKLINATION, PASSIV & KONJUNKTIV II
  // =========================================================================
  adjPassivKonjData: {
    adjDefinite: [
      { kasus: 'Nominativ', m: 'der gute Mann (-e)', f: 'die gute Frau (-e)', n: 'das gute Kind (-e)', pl: 'die guten Kinder (-en)' },
      { kasus: 'Akkusativ', m: 'den guten Mann (-en)', f: 'die gute Frau (-e)', n: 'das gute Kind (-e)', pl: 'die guten Kinder (-en)' },
      { kasus: 'Dativ', m: 'dem guten Mann (-en)', f: 'der guten Frau (-en)', n: 'dem guten Kind (-en)', pl: 'den guten Kindern (-en)' },
      { kasus: 'Genitiv', m: 'des guten Mannes (-en)', f: 'der guten Frau (-en)', n: 'des guten Kindes (-en)', pl: 'der guten Kinder (-en)' }
    ],

    adjIndefinite: [
      { kasus: 'Nominativ', m: 'ein guter Mann (-er)', f: 'eine gute Frau (-e)', n: 'ein gutes Kind (-es)', pl: 'keine guten Kinder (-en)' },
      { kasus: 'Akkusativ', m: 'einen guten Mann (-en)', f: 'eine gute Frau (-e)', n: 'ein gutes Kind (-es)', pl: 'keine guten Kinder (-en)' },
      { kasus: 'Dativ', m: 'einem guten Mann (-en)', f: 'einer guten Frau (-en)', n: 'einem guten Kind (-en)', pl: 'keinen guten Kindern (-en)' },
      { kasus: 'Genitiv', m: 'eines guten Mannes (-en)', f: 'einer guten Frau (-en)', n: 'eines guten Kindes (-en)', pl: 'keiner guten Kinder (-en)' }
    ],

    adjZero: [
      { kasus: 'Nominativ', m: 'guter Kaffee (-er)', f: 'frische Milch (-e)', n: 'kaltes Wasser (-es)', pl: 'nette Leute (-e)' },
      { kasus: 'Akkusativ', m: 'guten Kaffee (-en)', f: 'frische Milch (-e)', n: 'kaltes Wasser (-es)', pl: 'nette Leute (-e)' },
      { kasus: 'Dativ', m: 'gutem Kaffee (-em)', f: 'frischer Milch (-er)', n: 'kaltem Wasser (-em)', pl: 'netten Leuten (-en)' },
      { kasus: 'Genitiv', m: 'guten Kaffees (-en)', f: 'frischer Milch (-er)', n: 'kalten Wassers (-en)', pl: 'netter Leute (-er)' }
    ],

    passivFormulas: [
      {
        tense: 'Präsens Passiv (المضارع المبني للمجهول)',
        formula: 'werden (مصرف في الموقع 2) + ... + Partizip II (في النهاية)',
        ar: 'يُستخدم عندما يكون الحدث أهم من الفاعل في الوقت الحاضر',
        example: 'Das Auto wird heute in der Werkstatt repariert.'
      },
      {
        tense: 'Präteritum Passiv (الماضي البسيط المبني للمجهول)',
        formula: 'wurde (مصرف في الموقع 2) + ... + Partizip II (في النهاية)',
        ar: 'الصيغة الأكثر استخداماً للحديث عن أحداث بُنيت أو صُنعت في الماضي',
        example: 'Dieses Krankenhaus wurde im Jahr 1995 gebaut.'
      },
      {
        tense: 'Perfekt Passiv (الماضي التام المبني للمجهول)',
        formula: 'sein (ist/sind) + ... + Partizip II + worden',
        ar: 'لاحظ استخدام worden (بدون ge-) في نهاية الجملة مع المساعد sein',
        example: 'Die E-Mail ist schon gestern an den Kunden geschickt worden.'
      },
      {
        tense: 'Passiv mit Modalverben (المبني للمجهول مع الأفعال الناقصة)',
        formula: 'Modalverb (مصرف في الموقع 2) + ... + Partizip II + werden (مصدر)',
        ar: 'مهم جداً في التعليمات والقوانين والعمل (يجب أن يُفعل / يمكن أن يُفعل)',
        example: 'Der Arbeitsvertrag muss noch heute unterschrieben werden.'
      }
    ],

    konjunktiv2List: [
      {
        category: 'Höfliche Bitten (الطلب المهذب جداً)',
        form: 'Könnten Sie / Könntest du / Würden Sie ... + Infinitiv?',
        ar: 'تُستخدم مع الغرباء، الموظفين، وفي الامتحان الشفهي والرسائل الرسمية',
        example: 'Könnten Sie mir bitte helfen? / Könnten Sie das bitte wiederholen?'
      },
      {
        category: 'Höfliche Bestellung & Wünsche mit Nomen (طلب شيء بأدب)',
        form: 'Ich hätte gern(e) + Akkusativ',
        ar: 'أفضل وألطف طريقة للطلب في المطعم أو المخبز أو الفندق بدلاً من (Ich will)',
        example: 'Ich hätte gern einen Kaffee mit Milch und ein Brötchen, bitte.'
      },
      {
        category: 'Wünsche mit Verben (التمني مع الأفعال)',
        form: 'Ich würde gern(e) + ... + Infinitiv',
        ar: 'للتعبير عما تودّ فعله بأدب أو التمني',
        example: 'Ich würde gern eine Ausbildung in Deutschland machen.'
      },
      {
        category: 'Irreale Wünsche mit sein (تمني حالة)',
        form: 'Ich wäre jetzt gern(e) ...',
        ar: 'للتمني باستخدام فعل الكينونة (sein -> wäre)',
        example: 'Ich wäre jetzt gern mit meiner Familie am Meer.'
      },
      {
        category: 'Ratschläge geben (تقديم النصيحة)',
        form: 'Du solltest / Sie sollten + ... + Infinitiv',
        ar: 'لتقديم نصيحة لصديق أو زميل في الامتحان (ينبغي عليك أن...)',
        example: 'Du solltest jeden Tag mindestens dreißig Minuten Deutsch hören.'
      },
      {
        category: 'Ratschlag an deiner Stelle (لو كنتُ مكانك)',
        form: 'An deiner / Ihrer Stelle würde ich + ... + Infinitiv',
        ar: 'تركيب ذهبي يرفع درجتك فوراً في امتحان B1 (الكتابة والمحادثة)',
        example: 'An deiner Stelle würde ich sofort mit dem Arzt sprechen.'
      }
    ]
  },

  // =========================================================================
  // DATA: TAB 6 — REDEMITTEL FÜR A2 / B1 & AUSBILDUNG
  // =========================================================================
  redemittelData: [
    {
      categoryAr: '💡 1. التعبير عن الرأي الشخصي (Meinung äußern)',
      badge: 'Sprechen & Schreiben',
      items: [
        { de: 'Meiner Meinung nach ist dieses Thema heute sehr wichtig.', ar: 'في رأيي أن هذا الموضوع مهم جداً اليوم. (لاحظ أن الفعل يأتي مباشرة بعد Meiner Meinung nach!)' },
        { de: 'Ich bin der Meinung, dass man jeden Tag etwas Neues lernen sollte.', ar: 'أنا من أصحاب الرأي القائل بأنه ينبغي للمرء أن يتعلم شيئاً جديداً كل يوم.' },
        { de: 'Ich finde es sehr gut, dass immer mehr Menschen Sport treiben.', ar: 'أجد أنه من الجيد جداً أن المزيد والمزيد من الناس يمارسون الرياضة.' },
        { de: 'Aus meiner Sicht hat das Lernen im Internet viele Vorteile.', ar: 'من وجهة نظري، فإن التعلم عبر الإنترنت له مزايا عديدة.' },
        { de: 'Ich persönlich glaube, dass Gesundheit wichtiger als Geld ist.', ar: 'أنا شخصياً أعتقد أن الصحة أهم من المال.' }
      ]
    },
    {
      categoryAr: '🤝 2. الموافقة والاعتراض بأدب (Zustimmen & Widersprechen)',
      badge: 'Diskussion (B1)',
      items: [
        { de: 'Da stimme ich dir vollkommen zu. Du hast völlig recht!', ar: 'أتفق معك في ذلك تماماً. أنت على حق تماماً!' },
        { de: 'Das sehe ich genauso wie du. Das ist ein gutes Argument.', ar: 'أنا أرى ذلك تماماً مثلك. هذه حجة جيدة.' },
        { de: 'Das stimmt zwar, aber man muss auch die Nachteile bedenken.', ar: 'صحيح أن هذا الكلام سليم، ولكن يجب على المرء أيضاً مراعاة السلبيات.' },
        { de: 'Da bin ich leider anderer Meinung, weil ich andere Erfahrungen gemacht habe.', ar: 'للأسف لدي رأي آخر في هذه النقطة، لأنني مررت بتجارب مختلفة.' },
        { de: 'Ich verstehe deinen Punkt, aber ich sehe das ein bisschen anders.', ar: 'أفهم وجهة نظرك، لكنني أرى الأمر بشكل مختلف قليلاً.' }
      ]
    },
    {
      categoryAr: '📅 3. تقديم الاقتراحات والتخطيط المشترك (Vorschläge machen & Planen)',
      badge: 'Goethe Sprechen Teil 2',
      items: [
        { de: 'Ich schlage vor, dass wir uns am Samstag um 16 Uhr vor dem Bahnhof treffen.', ar: 'أقترح أن نلتقي يوم السبت في تمام الساعة الرابعة أمام محطة القطار.' },
        { de: 'Wie wäre es, wenn wir am Wochenende gemeinsam für die Prüfung lernen?', ar: 'ما رأيك لو نذاكر معاً للامتحان في عطلة نهاية الأسبوع؟' },
        { de: 'Hast du am Freitagnachmittag schon etwas vor oder hast du Zeit?', ar: 'هل لديك ارتباط مسبق بعد ظهر الجمعة أم لديك وقت؟' },
        { de: 'Was hältst du davon, wenn wir das Geschenk im Internet bestellen?', ar: 'ما رأيك لو نطلب الهدية عبر الإنترنت؟' },
        { de: 'Das ist ein super Vorschlag! So machen wir das.', ar: 'هذا اقتراح رائع! هكذا سنفعل الأمر.' }
      ]
    },
    {
      categoryAr: '⚖️ 4. عرض الإيجابيات والسلبيات (Vor- und Nachteile & Präsentation)',
      badge: 'Goethe Sprechen Teil 3',
      items: [
        { de: 'Heute möchte ich über das Thema „Arbeiten im Ausland“ sprechen.', ar: 'أود اليوم أن أتحدث عن موضوع "العمل في الخارج".' },
        { de: 'Ein großer Vorteil besteht darin, dass man schnell eine neue Sprache lernt.', ar: 'تتمثل إحدى المزايا الكبيرة في أن المرء يتعلم لغة جديدة بسرعة.' },
        { de: 'Auf der einen Seite verdient man gut, auf der anderen Seite hat man wenig Freizeit.', ar: 'من ناحية يكسب المرء مالاً جيداً، ومن ناحية أخرى يكون لديه وقت فراغ قليل.' },
        { de: 'Ein Nachteil ist jedoch, dass man am Anfang oft Heimweh hat.', ar: 'إلا أن إحدى السلبيات هي أن المرء يشعر غالباً بالحنين إلى الوطن في البداية.' },
        { de: 'Vielen Dank für Ihre Aufmerksamkeit. Haben Sie noch Fragen?', ar: 'شكراً جزيلاً لحسن استماعكم. هل لديكم أي أسئلة أخرى؟' }
      ]
    },
    {
      categoryAr: '📧 5. الرسائل الرسمية والتقديم على الـ Ausbildung (Formelle E-Mail & Bewerbung)',
      badge: 'Schreiben & Ausbildung',
      items: [
        { de: 'Sehr geehrte Damen und Herren, / Sehr geehrte Frau Müller, / Sehr geehrter Herr Schmidt,', ar: 'السيدات والسادة المحترمون، / السيدة المحترمة مولر، / السيد المحترم شميت،' },
        { de: 'hiermit möchte ich mich um einen Ausbildungsplatz als Pflegefachmann bewerben.', ar: 'بهذا أود التقدم بطلب للحصول على مقعد تدريب مهني كأخصائي تمريض.' },
        { de: 'Ich schreibe Ihnen, weil ich meinen Termin am Dienstag leider verschieben muss.', ar: 'أكتب إليكم لأنني مضطر للأسف إلى تأجيل موعدي يوم الثلاثاء.' },
        { de: 'Könnten Sie mir bitte mitteilen, welche Unterlagen ich mitbringen soll?', ar: 'هل يمكنكم إبلاغي من فضلكم ما هي المستندات التي ينبغي أن أحضرها معي؟' },
        { de: 'Über eine Einladung zu einem persönlichen Vorstellungsgespräch freue ich mich sehr.', ar: 'سأكون سعيداً جداً بدعوتي إلى مقابلة شخصية. (Mit freundlichen Grüßen)' }
      ]
    },
    {
      categoryAr: '💌 6. الرسائل الودية للأصدقاء (Informelle E-Mail an Freunde)',
      badge: 'Schreiben Teil 1',
      items: [
        { de: 'Liebe Sara, / Lieber Omar, wie geht es dir? Ich hoffe, dir und deiner Familie geht es gut.', ar: 'عزيزتي سارة / عزيزي عمر، كيف حالك؟ آمل أن تكون أنت وعائلتك بخير.' },
        { de: 'Vielen Dank für deine letzte E-Mail! Ich habe mich riesig darüber gefreut.', ar: 'شكراً جزيلاً على رسالتك الأخيرة! لقد فرحتُ بها كثيراً جداً.' },
        { de: 'Entschuldige bitte, dass ich dir erst heute schreibe, aber ich hatte viel Arbeit.', ar: 'أرجو المعذرة لأنني لم أكتب لك إلا اليوم، فقد كان لدي عمل كثير.' },
        { de: 'Ich möchte dir erzählen, dass ich nächste Woche meine neue Ausbildung beginne.', ar: 'أود أن أخبرك بأنني سأبدأ تدريبي المهني الجديد الأسبوع القادم.' },
        { de: 'Schreib mir bitte bald zurück! Viele liebe Grüße, dein Freund', ar: 'اكتب لي رداً قريباً من فضلك! أطيب التحيات، صديقك' }
      ]
    }
  ],

  // =========================================================================
  // HELPERS FOR AUDIO, COLORING & SEARCH MATCHING
  // =========================================================================
  escapeSafe(str) {
    if (window.Utils && typeof window.Utils.escapeHtml === 'function') {
      return window.Utils.escapeHtml(String(str || ''));
    }
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  },

  formatGermanText(str) {
    let html = this.escapeSafe(str);
    if (window.Utils && typeof window.Utils.colorArticles === 'function') {
      html = window.Utils.colorArticles(html);
    }
    return html;
  },

  renderAudioBtn(text, label = '') {
    const clean = String(text || '')
      .replace(/\*\*/g, '')
      .replace(/'/g, "\\'")
      .replace(/"/g, '&quot;')
      .trim();
    return `<button type="button" class="audio-btn cheatsheet-audio-btn" onclick="event.stopPropagation(); if(window.Speech) window.Speech.speak('${clean}');" title="استمع للنطق بالألمانية 🔊">${label ? `<span>${label}</span> ` : ''}🔊</button>`;
  },

  renderKasusBadge(kasus) {
    const k = String(kasus || '').toLowerCase();
    if (k === 'akk' || k === 'akkusativ') {
      return `<span class="cs-badge cs-badge-akk">+ Akkusativ</span>`;
    }
    if (k === 'dat' || k === 'dativ') {
      return `<span class="cs-badge cs-badge-dat">+ Dativ</span>`;
    }
    if (k.includes('dat') && k.includes('akk')) {
      return `<span class="cs-badge cs-badge-dat">+ Dat</span> <span class="cs-badge cs-badge-akk">+ Akk</span>`;
    }
    if (k === 'nom' || k === 'nominativ') {
      return `<span class="cs-badge cs-badge-nom">Nominativ</span>`;
    }
    if (k === 'gen' || k === 'genitiv') {
      return `<span class="cs-badge cs-badge-gen">Genitiv</span>`;
    }
    return `<span class="cs-badge">${this.escapeSafe(kasus)}</span>`;
  },

  matchesQuery(...fields) {
    const q = (this.searchQuery || '').trim().toLowerCase();
    if (!q) return true;
    return fields.some(f => String(f || '').toLowerCase().includes(q));
  },

  // =========================================================================
  // MAIN ENTRYPOINT: CheatsheetsRenderer.render(container)
  // =========================================================================
  render(container) {
    const target = container || this.lastContainer || document.getElementById('app-content');
    if (!target) return;
    this.lastContainer = target;

    this.injectStyles();

    const isDe = window.I18n && typeof window.I18n.isGerman === 'function' && window.I18n.isGerman();
    const hasSearch = (this.searchQuery || '').trim().length > 0;

    target.innerHTML = `
      <div class="cheatsheets-page fade-in">
        <!-- Hero Header -->
        <div class="hero-banner cs-hero">
          <div class="hero-content">
            <div class="hero-pill">⚡ Lingolia & Verbformen.de Style</div>
            <h1 class="hero-title">
              ${isDe
                ? '⚡ Grammatik-Spickzettel & Referenz-Tabellen'
                : '⚡ الملخصات الذهبية وجداول القواعد السريعة'}
            </h1>
            <p class="hero-subtitle">
              ${isDe
                ? 'Nachschlagen in 2 Sekunden: Alle 4 Fälle, Präpositionen, 40+ Verben mit Präpositionen, Satzbau, Adjektivdeklination, Passiv, Konjunktiv II & Prüfungs-Redemittel mit Sofort-Audio!'
                : 'مرجعك الفوري في ثانيتين: جداول الحالات الأربع (Kasus)، خريطة حروف الجر، أهم 43 فعلاً مع حروف الجر، هندسة الجملة والروابط، تصريف الصفات، المبني للمجهول، والعبارات الذهبية للامتحان مع النطق الصوتي الفوري 🔊'}
            </p>
          </div>
          <div class="cs-hero-stats">
            <div class="cs-stat-box">
              <span class="cs-stat-num">6</span>
              <span class="cs-stat-lbl">${isDe ? 'Haupt-Kategorien' : 'موسوعات نحوية'}</span>
            </div>
            <div class="cs-stat-box">
              <span class="cs-stat-num">43</span>
              <span class="cs-stat-lbl">${isDe ? 'Verben + Präp.' : 'فعلاً بحرف جر'}</span>
            </div>
            <div class="cs-stat-box">
              <span class="cs-stat-num">100%</span>
              <span class="cs-stat-lbl">${isDe ? 'Sofort-Audio 🔊' : 'نطق صوتي فوري'}</span>
            </div>
          </div>
        </div>

        <!-- Instant Search Bar + Category Tabs -->
        <div class="card cs-control-panel">
          <div class="cs-search-row">
            <div class="cs-search-input-wrap">
              <span class="cs-search-icon">🔍</span>
              <input
                type="text"
                id="cs-instant-search"
                class="cs-search-input"
                value="${this.escapeSafe(this.searchQuery)}"
                placeholder="${isDe
                  ? 'In 2 Sekunden suchen: z.B. warten auf, weil, trotzdem, Dativ, Wechselpräpositionen, Meinung...'
                  : 'ابحث في ثانيتين عن أي قاعدة أو فعل أو رابط: مثل warten auf, weil, trotzdem, dem, ينتظر, رأي...'}"
                oninput="CheatsheetsRenderer.onSearchInput(this.value)"
              />
              ${hasSearch ? `
                <button type="button" class="cs-clear-btn" onclick="CheatsheetsRenderer.clearSearch()" title="مسح البحث">✕</button>
              ` : ''}
            </div>
            <div class="cs-quick-chips">
              <span class="cs-chip-label">${isDe ? 'Schnellsuche:' : 'بحث سريع:'}</span>
              <button type="button" class="cs-quick-chip" onclick="CheatsheetsRenderer.quickSearch('warten auf')">warten auf</button>
              <button type="button" class="cs-quick-chip" onclick="CheatsheetsRenderer.quickSearch('sich freuen')">sich freuen</button>
              <button type="button" class="cs-quick-chip" onclick="CheatsheetsRenderer.quickSearch('deshalb')">deshalb vs weil</button>
              <button type="button" class="cs-quick-chip" onclick="CheatsheetsRenderer.quickSearch('hätte')">hätte / wäre</button>
              <button type="button" class="cs-quick-chip" onclick="CheatsheetsRenderer.quickSearch('Ausbildung')">Ausbildung</button>
            </div>
          </div>

          <!-- 6 Category Tabs -->
          <div class="cs-tabs-nav" role="tablist">
            ${this.tabs.map((t, idx) => `
              <button
                type="button"
                role="tab"
                class="cs-tab-btn ${!hasSearch && this.activeTab === t.id ? 'active' : ''}"
                onclick="CheatsheetsRenderer.switchTab('${t.id}')"
              >
                <span class="cs-tab-index">${idx + 1}</span>
                <span class="cs-tab-text">${isDe ? t.shortDe : t.shortAr}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Dynamic Tab / Search Content Container -->
        <div id="cs-body-content">
          ${this.renderBodyContent()}
        </div>
      </div>
    `;
  },

  renderBodyContent() {
    const hasSearch = (this.searchQuery || '').trim().length > 0;
    if (hasSearch) {
      return this.renderGlobalSearchResults();
    }

    switch (this.activeTab) {
      case 'kasus':
        return this.renderTab1Kasus();
      case 'praepositionen':
        return this.renderTab2Praepositionen();
      case 'verben_praep':
        return this.renderTab3VerbenMitPraep();
      case 'satzbau':
        return this.renderTab4Satzbau();
      case 'adjektive_passiv':
        return this.renderTab5AdjektivePassivKonj();
      case 'redemittel':
        return this.renderTab6Redemittel();
      default:
        return this.renderTab1Kasus();
    }
  },

  switchTab(tabId) {
    this.activeTab = tabId;
    this.searchQuery = '';
    this.render(this.lastContainer);
  },

  setVerbCaseFilter(filterVal) {
    this.verbCaseFilter = filterVal;
    const bodyEl = document.getElementById('cs-body-content');
    if (bodyEl) {
      bodyEl.innerHTML = this.renderBodyContent();
    } else {
      this.render(this.lastContainer);
    }
  },

  onSearchInput(val) {
    this.searchQuery = val || '';
    const bodyEl = document.getElementById('cs-body-content');
    if (bodyEl) {
      bodyEl.innerHTML = this.renderBodyContent();
    }
    // Update tab highlight state
    document.querySelectorAll('.cs-tab-btn').forEach(btn => {
      if (this.searchQuery.trim()) {
        btn.classList.remove('active');
      }
    });
  },

  quickSearch(term) {
    this.searchQuery = term;
    this.render(this.lastContainer);
    const input = document.getElementById('cs-instant-search');
    if (input) input.focus();
  },

  clearSearch() {
    this.searchQuery = '';
    this.render(this.lastContainer);
  },

  // =========================================================================
  // TAB 1: KASUS (NOMINATIV, AKKUSATIV, DATIV, GENITIV)
  // =========================================================================
  renderTab1Kasus() {
    const d = this.kasusData;

    return `
      <div class="cs-section-stack">
        <!-- Section Banner -->
        <div class="cs-section-banner">
          <div>
            <h2>🎯 الجداول الشاملة للحالات الأربع (Kasus: Nominativ, Akkusativ, Dativ, Genitiv)</h2>
            <p>القاعدة الذهبية: المذكر المفرد فقط يتغير في الـ <strong>Akkusativ (der ➔ den / ein ➔ einen)</strong>، بينما تتغير جميع الأدوات في الـ <strong>Dativ (dem / der / dem / den + -n)</strong>.</p>
          </div>
          <div class="cs-legend-pills">
            <span class="cs-pill-der">🔵 der (مذكر)</span>
            <span class="cs-pill-die">🔴 die (مؤنث)</span>
            <span class="cs-pill-das">🟢 das (محايد)</span>
            <span class="cs-pill-pl">🟣 die (جمع)</span>
          </div>
        </div>

        <!-- 1. Definite Articles Table -->
        <div class="card cs-card">
          <div class="cs-card-header">
            <h3>1️⃣ جدول أدوات التعريف الشامل (Bestimmte Artikel: der, die, das, die)</h3>
            <span class="cs-subtitle-tag">اضغط على 🔊 لسماع النطق الصحيح لكل حالة</span>
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>الحالة (Kasus)</th>
                  <th>سؤال الحالة</th>
                  <th class="col-der">🔵 المذكر (Maskulin)</th>
                  <th class="col-die">🔴 المؤنث (Feminin)</th>
                  <th class="col-das">🟢 المحايد (Neutral)</th>
                  <th class="col-pl">🟣 الجمع (Plural)</th>
                </tr>
              </thead>
              <tbody>
                ${d.definiteArticles.map(row => `
                  <tr>
                    <td>
                      <div class="cs-kasus-cell">
                        <strong>${row.kasus}</strong>
                        <span class="cs-kasus-ar">${row.roleAr}</span>
                      </div>
                    </td>
                    <td><code class="cs-q-code" dir="ltr">${row.question}</code></td>
                    <td>
                      <div class="cs-art-box ${row.maskulin.highlight}">
                        <span class="cs-art-main" dir="ltr">${row.maskulin.form}</span>
                        ${row.maskulin.note ? `<span class="cs-art-note">${row.maskulin.note}</span>` : ''}
                      </div>
                      <div class="cs-cell-ex" dir="ltr">
                        ${this.formatGermanText(row.maskulin.example)}
                        ${this.renderAudioBtn(row.maskulin.example)}
                      </div>
                    </td>
                    <td>
                      <div class="cs-art-box ${row.feminin.highlight}">
                        <span class="cs-art-main" dir="ltr">${row.feminin.form}</span>
                      </div>
                      <div class="cs-cell-ex" dir="ltr">
                        ${this.formatGermanText(row.feminin.example)}
                        ${this.renderAudioBtn(row.feminin.example)}
                      </div>
                    </td>
                    <td>
                      <div class="cs-art-box ${row.neutral.highlight}">
                        <span class="cs-art-main" dir="ltr">${row.neutral.form}</span>
                        ${row.neutral.note ? `<span class="cs-art-note">${row.neutral.note}</span>` : ''}
                      </div>
                      <div class="cs-cell-ex" dir="ltr">
                        ${this.formatGermanText(row.neutral.example)}
                        ${this.renderAudioBtn(row.neutral.example)}
                      </div>
                    </td>
                    <td>
                      <div class="cs-art-box ${row.plural.highlight}">
                        <span class="cs-art-main" dir="ltr">${row.plural.form}</span>
                        ${row.plural.note ? `<span class="cs-art-note">${row.plural.note}</span>` : ''}
                      </div>
                      <div class="cs-cell-ex" dir="ltr">
                        ${this.formatGermanText(row.plural.example)}
                        ${this.renderAudioBtn(row.plural.example)}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 2. Indefinite, Negative & Possessive Articles -->
        <div class="card cs-card">
          <div class="cs-card-header">
            <h3>2️⃣ أدوات النكرة والنفي والملكية (Unbestimmter Artikel, Negativ- & Possessivartikel: ein / kein / mein)</h3>
            <span class="cs-subtitle-tag">نفس النهايات تنطبق على: dein, sein, ihr, unser, euer, Ihr</span>
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>الحالة (Kasus)</th>
                  <th class="col-der">🔵 المذكر (der)</th>
                  <th class="col-die">🔴 المؤنث (die)</th>
                  <th class="col-das">🟢 المحايد (das)</th>
                  <th class="col-pl">🟣 الجمع (die)</th>
                  <th>مثال تطبيقي ناطق 🔊</th>
                </tr>
              </thead>
              <tbody>
                ${d.indefiniteArticles.map(row => `
                  <tr>
                    <td>
                      <strong>${row.kasus}</strong>
                      <div class="cs-kasus-ar">${row.roleAr}</div>
                    </td>
                    <td><span class="cs-mono-pill" dir="ltr">${row.maskulin}</span></td>
                    <td><span class="cs-mono-pill" dir="ltr">${row.feminin}</span></td>
                    <td><span class="cs-mono-pill" dir="ltr">${row.neutral}</span></td>
                    <td><span class="cs-mono-pill" dir="ltr">${row.plural}</span></td>
                    <td>
                      <div class="cs-ex-row" dir="ltr">
                        <span>${this.formatGermanText(row.example)}</span>
                        ${this.renderAudioBtn(row.example)}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 3. Personal Pronouns Table -->
        <div class="card cs-card">
          <div class="cs-card-header">
            <h3>3️⃣ جدول الضمائر الشخصية في الحالات الثلاث (Personalpronomen: Nominativ ➔ Akkusativ ➔ Dativ)</h3>
            <span class="cs-subtitle-tag">احفظ التحويل السريع: ich ➔ mich ➔ mir | du ➔ dich ➔ dir | er ➔ ihn ➔ ihm</span>
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>الضمير بالعربية</th>
                  <th>Nominativ (الفاعل)</th>
                  <th>Akkusativ (المفعول به)</th>
                  <th>Dativ (المجرور / المستفيد)</th>
                  <th>أداة الملكية (Possessiv)</th>
                  <th>أمثلة محادثة يومية 🔊</th>
                </tr>
              </thead>
              <tbody>
                ${d.pronouns.map(p => `
                  <tr>
                    <td><strong>${p.ar}</strong></td>
                    <td><span class="cs-badge cs-badge-nom" dir="ltr">${p.nom}</span></td>
                    <td><span class="cs-badge cs-badge-akk" dir="ltr">${p.akk}</span></td>
                    <td><span class="cs-badge cs-badge-dat" dir="ltr">${p.dat}</span></td>
                    <td><code class="cs-q-code" dir="ltr">${p.poss}</code></td>
                    <td>
                      <div class="cs-dual-ex">
                        <div class="cs-ex-row" dir="ltr">
                          <span class="cs-mini-tag akk">Akk</span>
                          <span>${this.formatGermanText(p.exAkk)}</span>
                          ${this.renderAudioBtn(p.exAkk)}
                        </div>
                        <div class="cs-ex-row" dir="ltr">
                          <span class="cs-mini-tag dat">Dat</span>
                          <span>${this.formatGermanText(p.exDat)}</span>
                          ${this.renderAudioBtn(p.exDat)}
                        </div>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 4. Question Words + Important Dativ Verbs (2-column Grid) -->
        <div class="grid-2">
          <!-- Question Words -->
          <div class="card cs-card">
            <div class="cs-card-header">
              <h3>4️⃣ أدوات الاستفهام للحالات الأربع (Wer? Wen? Wem? Wessen?)</h3>
            </div>
            <div class="cs-stack-list">
              ${d.questionWords.map(q => `
                <div class="cs-rule-item">
                  <div class="cs-rule-top">
                    ${this.renderKasusBadge(q.kasus)}
                    <strong class="de-text" dir="ltr" style="font-size:1.05rem;">${q.word}</strong>
                    <span class="cs-ar-meaning">${q.ar}</span>
                  </div>
                  <div class="cs-ex-row" dir="ltr">
                    <span>${this.formatGermanText(q.example)}</span>
                    ${this.renderAudioBtn(q.example)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Most Important Dativ Verbs -->
          <div class="card cs-card">
            <div class="cs-card-header">
              <h3>5️⃣ أهم أفعال الـ Dativ المباشرة (Verben mit Dativ)</h3>
              <span class="cs-subtitle-tag">هذه الأفعال تأخذ مفعولها في حالة Dativ دائماً بدون حرف جر!</span>
            </div>
            <div class="cs-stack-list">
              ${d.dativVerbs.map(v => `
                <div class="cs-rule-item">
                  <div class="cs-rule-top">
                    <strong class="de-text" dir="ltr" style="color:var(--xp-color);">${v.verb}</strong>
                    <span class="cs-badge cs-badge-dat">+ Dativ</span>
                    <span class="cs-ar-meaning">${v.ar}</span>
                  </div>
                  <div class="cs-ex-row" dir="ltr">
                    <span>${this.formatGermanText(v.example)}</span>
                    ${this.renderAudioBtn(v.example)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Golden Tip: Verbs with Dativ + Akkusativ -->
        <div class="card cs-gold-box">
          <h4>💡 القاعدة الذهبية لأفعال المفعولين (Verben mit Dativ + Akkusativ: geben, schenken, schicken, zeigen, erklären, empfehlen, leihen, bringen):</h4>
          <p>
            • عندما يكون المفعولان اسمين ظاهرين: <strong>الشخص العاقل (Dativ) يسبق الشيء غير العاقل (Akkusativ)</strong>:
            <span class="de-text" dir="ltr" style="font-weight:700;">Ich gebe <u>dem Mann</u> (Dat) <u>das Buch</u> (Akk).</span>
            ${this.renderAudioBtn('Ich gebe dem Mann das Buch.')}
            <br>
            • أما إذا تحوّل المفعولان إلى ضميرين: <strong>ضمير الـ Akkusativ يسبق ضمير الـ Dativ</strong>:
            <span class="de-text" dir="ltr" style="font-weight:700;">Ich gebe <u>es</u> (Akk) <u>ihm</u> (Dat).</span>
            ${this.renderAudioBtn('Ich gebe es ihm.')}
          </p>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // TAB 2: PRÄPOSITIONEN (AKKUSATIV, DATIV, WECHSEL, LOKAL, TEMPORAL)
  // =========================================================================
  renderTab2Praepositionen() {
    const p = this.praepData;

    return `
      <div class="cs-section-stack">
        <div class="cs-section-banner">
          <div>
            <h2>🧭 خريطة حروف الجر الشاملة (Präpositionen: Akkusativ, Dativ, Wechsel, Temporal, Lokal)</h2>
            <p>احفظ كلمات السر: <strong>DOGFU</strong> لحروف الـ Akkusativ، وأغنية <strong>aus, bei, mit, nach, seit, von, zu, gegenüber, ab</strong> لحروف الـ Dativ، وقاعدة <strong>Wohin? (حركة = Akk) vs. Wo? (سكون = Dat)</strong> لحروف الجر الـ 9 المشتركة.</p>
          </div>
        </div>

        <!-- 1. Akkusativ & Dativ Prepositions Side by Side -->
        <div class="grid-2">
          <!-- Akkusativ-Präpositionen (DOGFU) -->
          <div class="card cs-card">
            <div class="cs-card-header">
              <h3>🔵 حروف جر الـ Akkusativ دائماً (DOGFU + bis / entlang)</h3>
              <span class="cs-badge cs-badge-akk">Immer + Akkusativ (den / einen)</span>
            </div>
            <div class="cs-stack-list">
              ${p.akkusativ.map(item => `
                <div class="cs-rule-item">
                  <div class="cs-rule-top">
                    <strong class="cs-prep-pill akk" dir="ltr">${item.prep}</strong>
                    <span class="cs-ar-meaning">${item.ar}</span>
                  </div>
                  <div class="cs-ex-row" dir="ltr">
                    <span>${this.formatGermanText(item.example)}</span>
                    ${this.renderAudioBtn(item.example)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Dativ-Präpositionen -->
          <div class="card cs-card">
            <div class="cs-card-header">
              <h3>🟠 حروف جر الـ Dativ دائماً (aus, bei, mit, nach, seit, von, zu...)</h3>
              <span class="cs-badge cs-badge-dat">Immer + Dativ (dem / der / den + -n)</span>
            </div>
            <div class="cs-stack-list">
              ${p.dativ.map(item => `
                <div class="cs-rule-item">
                  <div class="cs-rule-top">
                    <strong class="cs-prep-pill dat" dir="ltr">${item.prep}</strong>
                    <span class="cs-ar-meaning">${item.ar}</span>
                  </div>
                  <div class="cs-ex-row" dir="ltr">
                    <span>${this.formatGermanText(item.example)}</span>
                    ${this.renderAudioBtn(item.example)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- 2. Contractions (Verschmelzungen) -->
        <div class="card cs-card">
          <div class="cs-card-header">
            <h3>🔗 جدول الاختصارات الإجبارية والشائعة (Verschmelzungen: im, am, zum, zur, beim, vom, ins, ans)</h3>
          </div>
          <div class="cs-contractions-grid">
            ${p.contractions.map(c => `
              <div class="cs-contraction-card">
                <div class="cs-contraction-top" dir="ltr">
                  <span class="cs-short-form">${c.short}</span>
                  <span class="cs-eq">=</span>
                  <span class="cs-full-form">${c.full}</span>
                </div>
                <div class="cs-contraction-kasus">${c.kasus}</div>
                <div class="cs-ex-row" dir="ltr">
                  <span>${this.formatGermanText(c.example)}</span>
                  ${this.renderAudioBtn(c.example)}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3. Die 9 Wechselpräpositionen -->
        <div class="card cs-card">
          <div class="cs-card-header">
            <h3>🔄 حروف الجر التسعة المشتركة (Die 9 Wechselpräpositionen: in, an, auf, über, unter, vor, hinter, neben, zwischen)</h3>
            <span class="cs-subtitle-tag">Wohin? (حركة وانتقال ➔ Akkusativ) | Wo? (سكون وموقع ثابت ➔ Dativ)</span>
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>حرف الجر</th>
                  <th>المعنى</th>
                  <th>🚀 Wohin? (حركة ➔ + Akkusativ)</th>
                  <th>📍 Wo? (سكون ➔ + Dativ)</th>
                </tr>
              </thead>
              <tbody>
                ${p.wechsel.map(w => `
                  <tr>
                    <td><strong class="cs-prep-pill wechsel" dir="ltr">${w.prep}</strong></td>
                    <td><strong>${w.ar}</strong></td>
                    <td>
                      <div class="cs-ex-row" dir="ltr">
                        <span class="cs-mini-tag akk">Akk</span>
                        <span>${this.formatGermanText(w.wohin)}</span>
                        ${this.renderAudioBtn(w.wohin)}
                      </div>
                    </td>
                    <td>
                      <div class="cs-ex-row" dir="ltr">
                        <span class="cs-mini-tag dat">Dat</span>
                        <span>${this.formatGermanText(w.wo)}</span>
                        ${this.renderAudioBtn(w.wo)}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 4. Wohin vs Wo Verbs Comparison Table (stellen/stehen, legen/liegen, setzen/sitzen, hängen) -->
        <div class="card cs-card">
          <div class="cs-card-header">
            <h3>⚖️ جدول المقارنة الذهبي لأفعال الحركة (Wohin? + Akkusativ) وأفعال السكون (Wo? + Dativ)</h3>
            <span class="cs-subtitle-tag">من أهم أسئلة القواعد في امتحانات A2 و B1!</span>
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>المعنى</th>
                  <th>🚀 Wohin? (حركة + Akkusativ — أفعال منتظمة)</th>
                  <th>مثال Wohin? 🔊</th>
                  <th>📍 Wo? (سكون + Dativ — أفعال قوية غير منتظمة)</th>
                  <th>مثال Wo? 🔊</th>
                </tr>
              </thead>
              <tbody>
                ${p.wechselVerbsComparison.map(v => `
                  <tr>
                    <td><strong>${v.meaningAr}</strong></td>
                    <td>
                      <div class="de-text" dir="ltr" style="font-weight:700; color:var(--der-color);">${v.wohinVerb}</div>
                      <div class="cs-kasus-ar">${v.wohinNote}</div>
                    </td>
                    <td>
                      <div class="cs-ex-row" dir="ltr">
                        <span>${this.formatGermanText(v.wohinEx)}</span>
                        ${this.renderAudioBtn(v.wohinEx)}
                      </div>
                    </td>
                    <td>
                      <div class="de-text" dir="ltr" style="font-weight:700; color:var(--xp-color);">${v.woVerb}</div>
                      <div class="cs-kasus-ar">${v.woNote}</div>
                    </td>
                    <td>
                      <div class="cs-ex-row" dir="ltr">
                        <span>${this.formatGermanText(v.woEx)}</span>
                        ${this.renderAudioBtn(v.woEx)}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 5. Lokale & Temporale Gold-Regeln -->
        <div class="grid-2">
          <!-- Lokale Gold-Regeln -->
          <div class="card cs-card">
            <div class="cs-card-header">
              <h3>🗺️ القواعد الذهبية المكانية (Lokale Präpositionen: nach vs. in vs. zu vs. bei)</h3>
            </div>
            <div class="cs-stack-list">
              ${p.lokalGoldRules.map(r => `
                <div class="cs-rule-item">
                  <div class="cs-rule-top">
                    <strong class="cs-prep-pill wechsel" dir="ltr">${r.prep}</strong>
                    <span class="cs-ar-meaning">${r.ruleAr}</span>
                  </div>
                  <div class="cs-ex-row" dir="ltr">
                    <span>${this.formatGermanText(r.example)}</span>
                    ${this.renderAudioBtn(r.example)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Temporale Gold-Regeln -->
          <div class="card cs-card">
            <div class="cs-card-header">
              <h3>⏰ القواعد الذهبية الزمانية (Temporale Präpositionen: um, am, im, seit, vor, für)</h3>
            </div>
            <div class="cs-stack-list">
              ${p.temporalGoldRules.map(r => `
                <div class="cs-rule-item">
                  <div class="cs-rule-top">
                    <strong class="cs-prep-pill dat" dir="ltr">${r.prep}</strong>
                    <span class="cs-ar-meaning">${r.ruleAr}</span>
                  </div>
                  <div class="cs-ex-row" dir="ltr">
                    <span>${this.formatGermanText(r.example)}</span>
                    ${this.renderAudioBtn(r.example)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // TAB 3: 40+ VERBEN MIT FESTEN PRÄPOSITIONEN
  // =========================================================================
  renderTab3VerbenMitPraep() {
    const filteredVerbs = this.verbsWithPrepData.filter(v => {
      if (this.verbCaseFilter === 'akk' && !v.kasus.toLowerCase().includes('akk')) return false;
      if (this.verbCaseFilter === 'dat' && !v.kasus.toLowerCase().includes('dat')) return false;
      return this.matchesQuery(v.verb, v.kasus, v.ar, v.question, v.example);
    });

    return `
      <div class="cs-section-stack">
        <div class="cs-section-banner">
          <div>
            <h2>🔗 أهم 43 فعلاً مع حروف الجر الثابتة (Verben mit festen Präpositionen + Wo(r)- / Auf wen?)</h2>
            <p>كل فعل هنا مرتبط بحرف جر ثابت وحالة إعرابية محددة (<strong>+ Akkusativ</strong> باللون الأزرق أو <strong>+ Dativ</strong> باللون البرتقالي). احفظ الفعل مع حرف جره وحالته كوحدة واحدة!</p>
          </div>
        </div>

        <!-- Golden Rule for Pronominaladverbien: Worauf? vs Auf wen? -->
        <div class="card cs-gold-box">
          <h4>💡 القاعدة الذهبية للسؤال والضمير مع الأفعال ذات حروف الجر (Sachen vs. Personen):</h4>
          <div class="grid-2" style="margin-bottom:0; margin-top:12px;">
            <div class="cs-mini-rule-card">
              <strong>📦 لغير العاقل (الأشياء والأفكار — Sachen):</strong>
              <p>نستخدم <code>Wo(r) + حرف الجر</code> في السؤال، و <code>da(r) + حرف الجر</code> في الإجابة (نضع <strong>r</strong> إذا بدأ حرف الجر بحرف متحرك: a, e, i, o, u, ä, ö, ü):</p>
              <div class="cs-ex-row" dir="ltr">
                <span><strong>Worauf</strong> wartest du? — Ich warte <strong>darauf</strong>, dass der Bus kommt.</span>
                ${this.renderAudioBtn('Worauf wartest du? Ich warte darauf, dass der Bus kommt.')}
              </div>
            </div>
            <div class="cs-mini-rule-card">
              <strong>👤 للعاقل (الأشخاص — Personen):</strong>
              <p>نستخدم <code>حرف الجر + wen (Akk) / wem (Dat)</code> في السؤال، و <code>حرف الجر + ضمير شخصي</code> في الإجابة:</p>
              <div class="cs-ex-row" dir="ltr">
                <span><strong>Auf wen</strong> wartest du? — Ich warte <strong>auf ihn</strong> (auf meinen Bruder).</span>
                ${this.renderAudioBtn('Auf wen wartest du? Ich warte auf ihn.')}
              </div>
            </div>
          </div>
        </div>

        <!-- Filter Bar for Verbs -->
        <div class="card cs-card">
          <div class="cs-card-header cs-flex-between">
            <h3>📋 جدول أهم ${filteredVerbs.length} فعلاً مع حروف الجر (A2 / B1)</h3>
            <div class="cs-filter-pills">
              <button type="button" class="cs-filter-btn ${this.verbCaseFilter === 'all' ? 'active' : ''}" onclick="CheatsheetsRenderer.setVerbCaseFilter('all')">
                الكل (${this.verbsWithPrepData.length})
              </button>
              <button type="button" class="cs-filter-btn akk ${this.verbCaseFilter === 'akk' ? 'active' : ''}" onclick="CheatsheetsRenderer.setVerbCaseFilter('akk')">
                🔵 + Akkusativ فقط
              </button>
              <button type="button" class="cs-filter-btn dat ${this.verbCaseFilter === 'dat' ? 'active' : ''}" onclick="CheatsheetsRenderer.setVerbCaseFilter('dat')">
                🟠 + Dativ فقط
              </button>
            </div>
          </div>

          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>الفعل + حرف الجر</th>
                  <th>الحالة (Kasus)</th>
                  <th>المعنى بالعربية</th>
                  <th>السؤال (غير عاقل / عاقل)</th>
                  <th>مثال تطبيقي ناطق 🔊</th>
                </tr>
              </thead>
              <tbody>
                ${filteredVerbs.map(item => `
                  <tr>
                    <td><span class="cs-row-num">${item.id}</span></td>
                    <td>
                      <div class="cs-verb-cell" dir="ltr">
                        <strong>${this.escapeSafe(item.verb)}</strong>
                        ${this.renderAudioBtn(item.verb)}
                      </div>
                    </td>
                    <td>${this.renderKasusBadge(item.kasus)}</td>
                    <td><strong>${this.escapeSafe(item.ar)}</strong></td>
                    <td><code class="cs-q-code" dir="ltr">${this.escapeSafe(item.question)}</code></td>
                    <td>
                      <div class="cs-ex-row" dir="ltr">
                        <span>${this.formatGermanText(item.example)}</span>
                        ${this.renderAudioBtn(item.example)}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // TAB 4: SATZBAU & KONNEKTOREN (POS 0, POS 1, NEBENSATZ)
  // =========================================================================
  renderTab4Satzbau() {
    const s = this.satzbauData;

    return `
      <div class="cs-section-stack">
        <div class="cs-section-banner">
          <div>
            <h2>🏗️ ترتيب الجملة الألمانية وأدوات الربط (Satzbau & Konnektoren: Position 0, Position 1, Nebensatz)</h2>
            <p>المفتاح السحري لبناء أي جملة ألمانية صحيحة: تحديد موقع الفعل المصرف! هل الرابط في <strong>Position 0 (ADUSO)</strong>، أم في <strong>Position 1 (يأتي الفعل بعده فوراً)</strong>، أم <strong>Nebensatz (يطرد الفعل إلى آخر الجملة)</strong>؟</p>
          </div>
        </div>

        <!-- Visual Satzklammer & TeKaMoLo Overview -->
        <div class="card cs-gold-box">
          <h4>📐 هندسة الجملة الرئيسية (Hauptsatz: V2-Regel + Satzklammer + TeKaMoLo):</h4>
          <div class="cs-formula-strip" dir="ltr">
            <div class="cs-formula-step"><span>Position 1</span><strong>Subjekt / Zeit</strong><small>Ich / Heute</small></div>
            <div class="cs-formula-arrow">➔</div>
            <div class="cs-formula-step highlight"><span>Position 2 (ثابت!)</span><strong>Verb 1 (مصرف)</strong><small>fahre / habe / muss</small></div>
            <div class="cs-formula-arrow">➔</div>
            <div class="cs-formula-step"><span>Mittelfeld (Te-Ka-Mo-Lo)</span><strong>Wann? ➔ Warum? ➔ Wie? ➔ Wo/Wohin?</strong><small>heute wegen des Regens mit dem Bus zur Arbeit</small></div>
            <div class="cs-formula-arrow">➔</div>
            <div class="cs-formula-step highlight"><span>Satzende (النهاية)</span><strong>Verb 2 / Präfix</strong><small>gefahren / fahren / an</small></div>
          </div>
        </div>

        <!-- 1. Position 0 (ADUSO) -->
        <div class="card cs-card">
          <div class="cs-card-header">
            <h3>1️⃣ روابط الموقع صفر — Position 0 (ADUSO: aber, denn, und, sondern, oder)</h3>
            <span class="cs-badge cs-badge-nom">لا تغير مكان الفعل إطلاقاً (الفاعل ثم الفعل في الموقع 2)</span>
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>الرابط</th>
                  <th>المعنى والوظيفة</th>
                  <th>القاعدة الذهبية لترتيب الجملة</th>
                  <th>مثال تطبيقي ناطق 🔊</th>
                </tr>
              </thead>
              <tbody>
                ${s.pos0.map(item => `
                  <tr>
                    <td><strong class="cs-prep-pill akk" dir="ltr">${item.conn}</strong></td>
                    <td><strong>${item.ar}</strong></td>
                    <td><code class="cs-q-code" dir="ltr">${item.formula}</code></td>
                    <td>
                      <div class="cs-ex-row" dir="ltr">
                        <span>${this.formatGermanText(item.example)}</span>
                        ${this.renderAudioBtn(item.example)}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 2. Position 1 (Konnektoren / Verbindungsadverbien) -->
        <div class="card cs-card">
          <div class="cs-card-header">
            <h3>2️⃣ روابط الموقع الأول — Position 1 (deshalb, trotzdem, dann, danach, außerdem, sonst)</h3>
            <span class="cs-badge cs-badge-dat">تحتل الموقع 1 فيأتي الفعل المصرف بعدها مباشرة في الموقع 2 ثم الفاعل!</span>
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>الرابط</th>
                  <th>المعنى والوظيفة</th>
                  <th>القاعدة الذهبية (Inversion)</th>
                  <th>مثال تطبيقي ناطق 🔊</th>
                </tr>
              </thead>
              <tbody>
                ${s.pos1.map(item => `
                  <tr>
                    <td><strong class="cs-prep-pill dat" dir="ltr">${item.conn}</strong></td>
                    <td><strong>${item.ar}</strong></td>
                    <td><code class="cs-q-code" dir="ltr">${item.formula}</code></td>
                    <td>
                      <div class="cs-ex-row" dir="ltr">
                        <span>${this.formatGermanText(item.example)}</span>
                        ${this.renderAudioBtn(item.example)}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 3. Nebensatz-Konnektoren (Verb am Ende) -->
        <div class="card cs-card">
          <div class="cs-card-header">
            <h3>3️⃣ أدوات الجمل الفرعية — Nebensatz-Konnektoren (الفعل المصرف يذهب لآخر الجملة تماماً!)</h3>
            <span class="cs-badge cs-badge-gen">إذا بدأت الجملة بالرابط الفرعي: نضع فاصلة ثم نبدأ الجملة الثانية بالفعل مباشرة (Verb, Verb)!</span>
          </div>
          <div class="cs-table-wrap">
            <table class="cs-table">
              <thead>
                <tr>
                  <th>الأداة (Subjunktion)</th>
                  <th>المعنى والاستخدام الدقيق</th>
                  <th>مثال تطبيقي ناطق (الفعل في النهاية) 🔊</th>
                </tr>
              </thead>
              <tbody>
                ${s.nebensatz.map(item => `
                  <tr>
                    <td><strong class="cs-prep-pill wechsel" dir="ltr">${item.conn}</strong></td>
                    <td><strong>${item.ar}</strong></td>
                    <td>
                      <div class="cs-ex-row" dir="ltr">
                        <span>${this.formatGermanText(item.example)}</span>
                        ${this.renderAudioBtn(item.example)}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 4. The 3 Golden Comparison Matrices -->
        <div class="grid-3">
          ${s.comparisons.map(comp => `
            <div class="card cs-card">
              <div class="cs-card-header">
                <h3>${comp.titleAr}</h3>
              </div>
              <div class="cs-stack-list">
                ${comp.items.map(it => `
                  <div class="cs-rule-item">
                    <div class="cs-rule-top">
                      <strong class="de-text" dir="ltr" style="color:var(--accent);">${it.label}</strong>
                    </div>
                    <div class="cs-kasus-ar" style="margin-bottom:6px;">${it.rule}</div>
                    <div class="cs-ex-row" dir="ltr">
                      <span>${this.formatGermanText(it.sentence)}</span>
                      ${this.renderAudioBtn(it.sentence)}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // =========================================================================
  // TAB 5: ADJEKTIVDEKLINATION, PASSIV & KONJUNKTIV II
  // =========================================================================
  renderTab5AdjektivePassivKonj() {
    const a = this.adjPassivKonjData;

    return `
      <div class="cs-section-stack">
        <div class="cs-section-banner">
          <div>
            <h2>🎨 تصريف الصفات، المبني للمجهول، والطلبات المهذبة (Adjektivdeklination, Passiv & Konjunktiv II)</h2>
            <p>ملخص بصري سريع لنهايات الصفات في الحالات الثلاث، معادلات المبني للمجهول (Passiv)، وأهم صيغ الطلب المهذب والنصيحة (Konjunktiv II).</p>
          </div>
        </div>

        <!-- 1. Adjektivdeklination (3 Tables) -->
        <div class="card cs-card">
          <div class="cs-card-header">
            <h3>1️⃣ الجداول الثلاثة لتصريف الصفات (Adjektivdeklination)</h3>
            <span class="cs-subtitle-tag">السر الذهبي: في الـ Dativ والـ Genitiv ومع جمع الأدوات المعرفة والمنفية تنتهي الصفة دائماً بـ (-en)!</span>
          </div>

          <div class="grid-3" style="margin-bottom:0;">
            <!-- Table A: Bestimmter Artikel -->
            <div class="cs-subtable-box">
              <h4>أ) بعد أداة المعرفة (der, die, das, die)</h4>
              <p class="cs-kasus-ar">5 مربعات فقط تأخذ <strong>-e</strong>، وكل الباقي يأخذ <strong>-en</strong>!</p>
              <table class="cs-table cs-compact-table">
                <thead>
                  <tr>
                    <th>Kasus</th>
                    <th>🔵 M</th>
                    <th>🔴 F</th>
                    <th>🟢 N</th>
                    <th>🟣 Pl</th>
                  </tr>
                </thead>
                <tbody>
                  ${a.adjDefinite.map(r => `
                    <tr>
                      <td><strong>${r.kasus.slice(0, 3)}</strong></td>
                      <td dir="ltr">${r.m}</td>
                      <td dir="ltr">${r.f}</td>
                      <td dir="ltr">${r.n}</td>
                      <td dir="ltr">${r.pl}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- Table B: Unbestimmter Artikel -->
            <div class="cs-subtable-box">
              <h4>ب) بعد النكرة والملكية والنفي (ein, kein, mein)</h4>
              <p class="cs-kasus-ar">الصفة تعوّض علامة الجنس في المذكر <strong>-er</strong> والمحايد <strong>-es</strong>!</p>
              <table class="cs-table cs-compact-table">
                <thead>
                  <tr>
                    <th>Kasus</th>
                    <th>🔵 M</th>
                    <th>🔴 F</th>
                    <th>🟢 N</th>
                    <th>🟣 Pl</th>
                  </tr>
                </thead>
                <tbody>
                  ${a.adjIndefinite.map(r => `
                    <tr>
                      <td><strong>${r.kasus.slice(0, 3)}</strong></td>
                      <td dir="ltr">${r.m}</td>
                      <td dir="ltr">${r.f}</td>
                      <td dir="ltr">${r.n}</td>
                      <td dir="ltr">${r.pl}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- Table C: Nullartikel -->
            <div class="cs-subtable-box">
              <h4>ج) بدون أداة (Nullartikel — مع الكميات والمشروبات)</h4>
              <p class="cs-kasus-ar">الصفة تأخذ نهاية أداة التعريف نفسها مباشرة!</p>
              <table class="cs-table cs-compact-table">
                <thead>
                  <tr>
                    <th>Kasus</th>
                    <th>🔵 M</th>
                    <th>🔴 F</th>
                    <th>🟢 N</th>
                    <th>🟣 Pl</th>
                  </tr>
                </thead>
                <tbody>
                  ${a.adjZero.map(r => `
                    <tr>
                      <td><strong>${r.kasus.slice(0, 3)}</strong></td>
                      <td dir="ltr">${r.m}</td>
                      <td dir="ltr">${r.f}</td>
                      <td dir="ltr">${r.n}</td>
                      <td dir="ltr">${r.pl}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Komparativ & Superlativ Strip -->
          <div class="cs-gold-box" style="margin-top:18px; margin-bottom:0;">
            <h4>📈 المقارنة والتفضيل الشاذة التي تأتي في كل امتحان (Komparativ & Superlativ):</h4>
            <div class="cs-irregular-adj-grid" dir="ltr">
              <div class="cs-irr-chip"><strong>gut</strong> ➔ besser ➔ am besten ${this.renderAudioBtn('gut, besser, am besten')}</div>
              <div class="cs-irr-chip"><strong>viel</strong> ➔ mehr ➔ am meisten ${this.renderAudioBtn('viel, mehr, am meisten')}</div>
              <div class="cs-irr-chip"><strong>gern</strong> ➔ lieber ➔ am liebsten ${this.renderAudioBtn('gern, lieber, am liebsten')}</div>
              <div class="cs-irr-chip"><strong>hoch</strong> ➔ höher ➔ am höchsten ${this.renderAudioBtn('hoch, höher, am höchsten')}</div>
              <div class="cs-irr-chip"><strong>nah</strong> ➔ näher ➔ am nächsten ${this.renderAudioBtn('nah, näher, am nächsten')}</div>
              <div class="cs-irr-chip"><strong>groß</strong> ➔ größer ➔ am größten ${this.renderAudioBtn('groß, größer, am größten')}</div>
            </div>
          </div>
        </div>

        <!-- 2. Passiv & Konjunktiv II Side by Side -->
        <div class="grid-2">
          <!-- Passiv (المبني للمجهول) -->
          <div class="card cs-card">
            <div class="cs-card-header">
              <h3>2️⃣ معادلات المبني للمجهول (Passiv: werden + Partizip II)</h3>
              <span class="cs-subtitle-tag">ذكر الفاعل اختياري بـ (von + Dat للعاقل) أو (durch + Akk للوسيلة)</span>
            </div>
            <div class="cs-stack-list">
              ${a.passivFormulas.map(pf => `
                <div class="cs-rule-item">
                  <div class="cs-rule-top">
                    <strong>${pf.tense}</strong>
                  </div>
                  <div style="margin:6px 0;"><code class="cs-q-code" dir="ltr">${pf.formula}</code></div>
                  <div class="cs-kasus-ar" style="margin-bottom:6px;">${pf.ar}</div>
                  <div class="cs-ex-row" dir="ltr">
                    <span>${this.formatGermanText(pf.example)}</span>
                    ${this.renderAudioBtn(pf.example)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Konjunktiv II (الطلب المهذب والتمني والنصيحة) -->
          <div class="card cs-card">
            <div class="cs-card-header">
              <h3>3️⃣ الطلب المهذب، التمني، والنصيحة (Konjunktiv II)</h3>
              <span class="cs-subtitle-tag">haben ➔ hätte | sein ➔ wäre | werden ➔ würde | können ➔ könnte | sollen ➔ sollte</span>
            </div>
            <div class="cs-stack-list">
              ${a.konjunktiv2List.map(k => `
                <div class="cs-rule-item">
                  <div class="cs-rule-top">
                    <strong>${k.category}</strong>
                  </div>
                  <div style="margin:6px 0;"><code class="cs-q-code" dir="ltr">${k.form}</code></div>
                  <div class="cs-kasus-ar" style="margin-bottom:6px;">${k.ar}</div>
                  <div class="cs-ex-row" dir="ltr">
                    <span>${this.formatGermanText(k.example)}</span>
                    ${this.renderAudioBtn(k.example)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // =========================================================================
  // TAB 6: REDEMITTEL FÜR A2 / B1 & AUSBILDUNG
  // =========================================================================
  renderTab6Redemittel() {
    return `
      <div class="cs-section-stack">
        <div class="cs-section-banner">
          <div>
            <h2>🗣️ العبارات الذهبية للامتحان والحياة المهنية (Redemittel für A2 / B1 & Ausbildung)</h2>
            <p>أهم الجمل الجاهزة للامتحان الشفهي والكتابي (Goethe / telc A2 & B1) وللتقديم على التدريب المهني (Ausbildung) مع النطق الفوري.</p>
          </div>
        </div>

        <div class="grid-2">
          ${this.redemittelData.map(group => `
            <div class="card cs-card">
              <div class="cs-card-header">
                <h3>${group.categoryAr}</h3>
                <span class="cs-badge cs-badge-akk">${group.badge}</span>
              </div>
              <div class="cs-stack-list">
                ${group.items.map(item => `
                  <div class="cs-rule-item">
                    <div class="cs-ex-row" dir="ltr" style="margin-bottom:6px;">
                      <span style="font-weight:700; font-size:1.02rem;">${this.formatGermanText(item.de)}</span>
                      ${this.renderAudioBtn(item.de)}
                    </div>
                    <div class="cs-kasus-ar">${this.escapeSafe(item.ar)}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // =========================================================================
  // GLOBAL INSTANT SEARCH RESULTS VIEW (2-SECOND LOOKUP ACROSS ALL 6 TABS)
  // =========================================================================
  renderGlobalSearchResults() {
    const q = (this.searchQuery || '').trim();
    const matchedVerbs = this.verbsWithPrepData.filter(v =>
      this.matchesQuery(v.verb, v.kasus, v.ar, v.question, v.example)
    );
    const matchedPreps = [
      ...this.praepData.akkusativ.map(x => ({ ...x, group: 'Akkusativ-Präposition' })),
      ...this.praepData.dativ.map(x => ({ ...x, group: 'Dativ-Präposition' })),
      ...this.praepData.lokalGoldRules.map(x => ({ prep: x.prep, ar: x.ruleAr, example: x.example, group: 'Lokale Regel' })),
      ...this.praepData.temporalGoldRules.map(x => ({ prep: x.prep, ar: x.ruleAr, example: x.example, group: 'Temporale Regel' }))
    ].filter(x => this.matchesQuery(x.prep, x.ar, x.example, x.group));

    const matchedConnectors = [
      ...this.satzbauData.pos0.map(x => ({ ...x, pos: 'Position 0 (ADUSO)' })),
      ...this.satzbauData.pos1.map(x => ({ ...x, pos: 'Position 1 (Inversion)' })),
      ...this.satzbauData.nebensatz.map(x => ({ ...x, pos: 'Nebensatz (Verb am Ende)' }))
    ].filter(x => this.matchesQuery(x.conn, x.ar, x.example, x.pos));

    const matchedPronounsAndDativ = [
      ...this.kasusData.pronouns.map(p => ({
        title: `${p.nom} ➔ ${p.akk} (Akk) ➔ ${p.dat} (Dat)`,
        ar: `الضمير: ${p.ar} | الملكية: ${p.poss}`,
        example: `${p.exAkk} / ${p.exDat}`
      })),
      ...this.kasusData.dativVerbs.map(v => ({
        title: `${v.verb} (+ Dativ)`,
        ar: v.ar,
        example: v.example
      }))
    ].filter(x => this.matchesQuery(x.title, x.ar, x.example));

    const matchedKonjAndPassiv = [
      ...this.adjPassivKonjData.passivFormulas.map(p => ({
        title: p.tense,
        ar: `${p.formula} — ${p.ar}`,
        example: p.example
      })),
      ...this.adjPassivKonjData.konjunktiv2List.map(k => ({
        title: k.category,
        ar: `${k.form} — ${k.ar}`,
        example: k.example
      }))
    ].filter(x => this.matchesQuery(x.title, x.ar, x.example));

    const matchedRedemittel = [];
    this.redemittelData.forEach(g => {
      g.items.forEach(it => {
        if (this.matchesQuery(it.de, it.ar, g.categoryAr, g.badge)) {
          matchedRedemittel.push({ ...it, group: g.categoryAr });
        }
      });
    });

    const totalHits =
      matchedVerbs.length +
      matchedPreps.length +
      matchedConnectors.length +
      matchedPronounsAndDativ.length +
      matchedKonjAndPassiv.length +
      matchedRedemittel.length;

    if (totalHits === 0) {
      return `
        <div class="card cs-card" style="text-align:center; padding:48px 24px;">
          <div style="font-size:2.6rem; margin-bottom:12px;">🔍</div>
          <h3>لم يتم العثور على نتائج مطابقة لـ "${this.escapeSafe(q)}"</h3>
          <p style="color:var(--text-secondary); margin:8px 0 18px;">جرّب البحث بكلمة أخرى مثل: <code>warten</code> أو <code>weil</code> أو <code>Dativ</code> أو <code>hätte</code> أو <code>Meinung</code></p>
          <button type="button" class="cs-tab-btn active" style="margin:0 auto;" onclick="CheatsheetsRenderer.clearSearch()">عرض جميع الجداول</button>
        </div>
      `;
    }

    return `
      <div class="cs-section-stack">
        <div class="cs-section-banner">
          <div>
            <h2>🔍 نتائج البحث الفوري عن: "${this.escapeSafe(q)}" (${totalHits} نتيجة)</h2>
            <p>يتم البحث تلقائياً في جميع الجداول الـ 6 (الحالات، حروف الجر، الأفعال الـ 43، الروابط، المبني للمجهول، والعبارات الذهبية).</p>
          </div>
          <button type="button" class="cs-filter-btn active" onclick="CheatsheetsRenderer.clearSearch()">✕ إنهاء البحث والعودة للتبويبات</button>
        </div>

        ${matchedVerbs.length > 0 ? `
          <div class="card cs-card">
            <div class="cs-card-header">
              <h3>🔗 الأفعال مع حروف الجر المطابقة (${matchedVerbs.length})</h3>
            </div>
            <div class="cs-table-wrap">
              <table class="cs-table">
                <thead>
                  <tr>
                    <th>الفعل + حرف الجر</th>
                    <th>الحالة</th>
                    <th>المعنى</th>
                    <th>السؤال</th>
                    <th>مثال ناطق 🔊</th>
                  </tr>
                </thead>
                <tbody>
                  ${matchedVerbs.map(item => `
                    <tr>
                      <td>
                        <div class="cs-verb-cell" dir="ltr">
                          <strong>${this.escapeSafe(item.verb)}</strong>
                          ${this.renderAudioBtn(item.verb)}
                        </div>
                      </td>
                      <td>${this.renderKasusBadge(item.kasus)}</td>
                      <td><strong>${this.escapeSafe(item.ar)}</strong></td>
                      <td><code class="cs-q-code" dir="ltr">${this.escapeSafe(item.question)}</code></td>
                      <td>
                        <div class="cs-ex-row" dir="ltr">
                          <span>${this.formatGermanText(item.example)}</span>
                          ${this.renderAudioBtn(item.example)}
                        </div>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        ` : ''}

        ${matchedConnectors.length > 0 ? `
          <div class="card cs-card">
            <div class="cs-card-header">
              <h3>🏗️ أدوات الربط وهندسة الجملة المطابقة (${matchedConnectors.length})</h3>
            </div>
            <div class="cs-stack-list">
              ${matchedConnectors.map(c => `
                <div class="cs-rule-item">
                  <div class="cs-rule-top">
                    <strong class="cs-prep-pill wechsel" dir="ltr">${this.escapeSafe(c.conn)}</strong>
                    <span class="cs-badge cs-badge-dat">${this.escapeSafe(c.pos)}</span>
                    <span class="cs-ar-meaning">${this.escapeSafe(c.ar)}</span>
                  </div>
                  <div class="cs-ex-row" dir="ltr">
                    <span>${this.formatGermanText(c.example)}</span>
                    ${this.renderAudioBtn(c.example)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${matchedPreps.length > 0 ? `
          <div class="card cs-card">
            <div class="cs-card-header">
              <h3>🧭 حروف الجر والقواعد المكانية/الزمانية المطابقة (${matchedPreps.length})</h3>
            </div>
            <div class="cs-stack-list">
              ${matchedPreps.map(p => `
                <div class="cs-rule-item">
                  <div class="cs-rule-top">
                    <strong class="cs-prep-pill akk" dir="ltr">${this.escapeSafe(p.prep)}</strong>
                    <span class="cs-badge">${this.escapeSafe(p.group)}</span>
                    <span class="cs-ar-meaning">${this.escapeSafe(p.ar)}</span>
                  </div>
                  <div class="cs-ex-row" dir="ltr">
                    <span>${this.formatGermanText(p.example)}</span>
                    ${this.renderAudioBtn(p.example)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${matchedPronounsAndDativ.length > 0 ? `
          <div class="card cs-card">
            <div class="cs-card-header">
              <h3>🎯 الضمائر وأفعال الـ Dativ المطابقة (${matchedPronounsAndDativ.length})</h3>
            </div>
            <div class="cs-stack-list">
              ${matchedPronounsAndDativ.map(item => `
                <div class="cs-rule-item">
                  <div class="cs-rule-top">
                    <strong class="de-text" dir="ltr">${this.escapeSafe(item.title)}</strong>
                    <span class="cs-ar-meaning">${this.escapeSafe(item.ar)}</span>
                  </div>
                  <div class="cs-ex-row" dir="ltr">
                    <span>${this.formatGermanText(item.example)}</span>
                    ${this.renderAudioBtn(item.example)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${matchedKonjAndPassiv.length > 0 ? `
          <div class="card cs-card">
            <div class="cs-card-header">
              <h3>🎨 المبني للمجهول و Konjunktiv II (${matchedKonjAndPassiv.length})</h3>
            </div>
            <div class="cs-stack-list">
              ${matchedKonjAndPassiv.map(item => `
                <div class="cs-rule-item">
                  <div class="cs-rule-top">
                    <strong>${this.escapeSafe(item.title)}</strong>
                    <span class="cs-ar-meaning">${this.escapeSafe(item.ar)}</span>
                  </div>
                  <div class="cs-ex-row" dir="ltr">
                    <span>${this.formatGermanText(item.example)}</span>
                    ${this.renderAudioBtn(item.example)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${matchedRedemittel.length > 0 ? `
          <div class="card cs-card">
            <div class="cs-card-header">
              <h3>🗣️ العبارات الذهبية المطابقة (${matchedRedemittel.length})</h3>
            </div>
            <div class="cs-stack-list">
              ${matchedRedemittel.map(item => `
                <div class="cs-rule-item">
                  <div class="cs-ex-row" dir="ltr" style="margin-bottom:4px;">
                    <span style="font-weight:700;">${this.formatGermanText(item.de)}</span>
                    ${this.renderAudioBtn(item.de)}
                  </div>
                  <div class="cs-kasus-ar">${this.escapeSafe(item.ar)}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  },

  // =========================================================================
  // SCOPED STYLES INJECTION
  // =========================================================================
  injectStyles() {
    if (document.getElementById('cheatsheets-renderer-styles')) return;
    const style = document.createElement('style');
    style.id = 'cheatsheets-renderer-styles';
    style.textContent = `
      .cheatsheets-page {
        max-width: 1240px;
        margin: 0 auto;
        padding-bottom: 48px;
      }
      .cs-hero {
        background: linear-gradient(135deg, #312E81 0%, #4F46E5 55%, #2563EB 100%);
      }
      .cs-hero-stats {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
      }
      .cs-stat-box {
        background: rgba(255, 255, 255, 0.14);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.24);
        border-radius: 14px;
        padding: 14px 18px;
        min-width: 110px;
        text-align: center;
      }
      .cs-stat-num {
        display: block;
        font-size: 1.55rem;
        font-weight: 800;
        line-height: 1.2;
      }
      .cs-stat-lbl {
        font-size: 0.82rem;
        opacity: 0.92;
      }
      .cs-control-panel {
        padding: 20px;
        margin-bottom: 24px;
      }
      .cs-search-row {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 16px;
      }
      .cs-search-input-wrap {
        position: relative;
        display: flex;
        align-items: center;
      }
      .cs-search-icon {
        position: absolute;
        inset-inline-start: 16px;
        font-size: 1.15rem;
        pointer-events: none;
      }
      .cs-search-input {
        width: 100%;
        padding: 14px 44px;
        border-radius: 12px;
        border: 2px solid var(--border);
        background: var(--bg-primary);
        color: var(--text-primary);
        font-family: inherit;
        font-size: 1rem;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }
      .cs-search-input:focus {
        outline: none;
        border-color: var(--accent);
        box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.15);
      }
      .cs-clear-btn {
        position: absolute;
        inset-inline-end: 12px;
        background: var(--border);
        color: var(--text-primary);
        border: none;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        cursor: pointer;
        font-weight: 700;
      }
      .cs-quick-chips {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
      }
      .cs-chip-label {
        font-size: 0.85rem;
        color: var(--text-secondary);
        font-weight: 600;
      }
      .cs-quick-chip {
        background: var(--bg-primary);
        border: 1px solid var(--border);
        color: var(--text-primary);
        padding: 4px 12px;
        border-radius: 999px;
        font-size: 0.82rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .cs-quick-chip:hover {
        border-color: var(--accent);
        color: var(--accent);
      }
      .cs-tabs-nav {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }
      @media (max-width: 960px) {
        .cs-tabs-nav {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 600px) {
        .cs-tabs-nav {
          grid-template-columns: 1fr;
        }
      }
      .cs-tab-btn {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 14px;
        border-radius: 12px;
        border: 1.5px solid var(--border);
        background: var(--bg-primary);
        color: var(--text-primary);
        font-family: inherit;
        font-size: 0.92rem;
        font-weight: 700;
        cursor: pointer;
        text-align: start;
        transition: all 0.18s ease;
      }
      .cs-tab-btn:hover {
        border-color: var(--accent);
        transform: translateY(-1px);
      }
      .cs-tab-btn.active {
        background: var(--accent);
        color: #FFFFFF;
        border-color: var(--accent);
        box-shadow: 0 6px 16px -4px rgba(79, 70, 229, 0.45);
      }
      .cs-tab-index {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(15, 23, 42, 0.08);
        font-size: 0.8rem;
        flex-shrink: 0;
      }
      .cs-tab-btn.active .cs-tab-index {
        background: rgba(255, 255, 255, 0.24);
        color: #FFFFFF;
      }
      .cs-section-stack {
        display: flex;
        flex-direction: column;
        gap: 22px;
      }
      .cs-section-banner {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-inline-start: 5px solid var(--accent);
        border-radius: var(--radius-lg);
        padding: 20px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
      }
      .cs-section-banner h2 {
        font-size: 1.3rem;
        margin-bottom: 4px;
      }
      .cs-section-banner p {
        color: var(--text-secondary);
        font-size: 0.95rem;
      }
      .cs-legend-pills {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      .cs-pill-der, .cs-pill-die, .cs-pill-das, .cs-pill-pl {
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 0.8rem;
        font-weight: 700;
      }
      .cs-pill-der { background: rgba(37, 99, 235, 0.12); color: #2563EB; }
      .cs-pill-die { background: rgba(220, 38, 38, 0.12); color: #DC2626; }
      .cs-pill-das { background: rgba(5, 150, 105, 0.12); color: #059669; }
      .cs-pill-pl  { background: rgba(124, 58, 237, 0.12); color: #7C3AED; }

      .cs-card {
        padding: 24px;
        margin-bottom: 0;
      }
      .cs-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 16px;
        padding-bottom: 12px;
        border-bottom: 1px solid var(--border);
      }
      .cs-card-header h3 {
        font-size: 1.15rem;
        font-weight: 700;
      }
      .cs-subtitle-tag {
        font-size: 0.84rem;
        color: var(--text-secondary);
        background: var(--bg-primary);
        padding: 4px 12px;
        border-radius: 999px;
        border: 1px solid var(--border);
      }
      .cs-table-wrap {
        width: 100%;
        overflow-x: auto;
      }
      .cs-table {
        width: 100%;
        border-collapse: collapse;
        min-width: 680px;
      }
      .cs-compact-table {
        min-width: 100%;
        font-size: 0.86rem;
      }
      .cs-table th, .cs-table td {
        padding: 12px 14px;
        border-bottom: 1px solid var(--border);
        vertical-align: middle;
        text-align: start;
      }
      .cs-table thead th {
        background: var(--bg-primary);
        font-weight: 700;
        font-size: 0.9rem;
        color: var(--text-secondary);
      }
      .cs-table tbody tr:hover {
        background: rgba(79, 70, 229, 0.03);
      }
      .cs-art-box {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 4px 12px;
        border-radius: 8px;
        font-weight: 800;
        font-size: 1rem;
        margin-bottom: 4px;
        background: var(--bg-primary);
        border: 1px solid var(--border);
      }
      .cs-art-box.der { color: var(--der-color); border-color: rgba(37, 99, 235, 0.3); }
      .cs-art-box.die { color: var(--die-color); border-color: rgba(220, 38, 38, 0.3); }
      .cs-art-box.das { color: var(--das-color); border-color: rgba(5, 150, 105, 0.3); }
      .cs-art-box.akk-change {
        background: rgba(37, 99, 235, 0.14);
        color: #2563EB;
        border: 2px solid #2563EB;
      }
      .cs-art-box.dat-change {
        background: rgba(217, 119, 6, 0.14);
        color: #D97706;
        border: 1.5px solid #D97706;
      }
      .cs-art-box.gen-change {
        background: rgba(124, 58, 237, 0.14);
        color: #7C3AED;
        border: 1.5px solid #7C3AED;
      }
      .cs-art-note {
        font-size: 0.74rem;
        font-weight: 700;
        background: rgba(0, 0, 0, 0.07);
        padding: 2px 6px;
        border-radius: 6px;
      }
      .cs-cell-ex, .cs-ex-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        font-size: 0.94rem;
        line-height: 1.5;
      }
      .cheatsheet-audio-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 30px;
        height: 30px;
        padding: 0 7px;
        border-radius: 8px;
        border: 1px solid var(--border);
        background: var(--bg-primary);
        cursor: pointer;
        font-size: 0.88rem;
        flex-shrink: 0;
        transition: all 0.15s ease;
      }
      .cheatsheet-audio-btn:hover {
        border-color: var(--accent);
        background: var(--accent-light);
        transform: scale(1.06);
      }
      .cs-badge {
        display: inline-flex;
        align-items: center;
        padding: 3px 10px;
        border-radius: 999px;
        font-size: 0.78rem;
        font-weight: 800;
        white-space: nowrap;
      }
      .cs-badge-akk {
        background: rgba(37, 99, 235, 0.15);
        color: #2563EB;
        border: 1px solid rgba(37, 99, 235, 0.35);
      }
      .cs-badge-dat {
        background: rgba(234, 88, 12, 0.15);
        color: #EA580C;
        border: 1px solid rgba(234, 88, 12, 0.35);
      }
      .cs-badge-nom {
        background: rgba(16, 185, 129, 0.15);
        color: #059669;
        border: 1px solid rgba(16, 185, 129, 0.35);
      }
      .cs-badge-gen {
        background: rgba(124, 58, 237, 0.15);
        color: #7C3AED;
        border: 1px solid rgba(124, 58, 237, 0.35);
      }
      .cs-q-code {
        background: var(--bg-primary);
        border: 1px solid var(--border);
        padding: 3px 8px;
        border-radius: 6px;
        font-family: var(--font-de);
        font-size: 0.86rem;
        font-weight: 700;
        color: var(--accent);
        display: inline-block;
      }
      .cs-mono-pill {
        display: inline-block;
        font-family: var(--font-de);
        font-weight: 700;
        font-size: 0.92rem;
        background: var(--bg-primary);
        padding: 4px 10px;
        border-radius: 8px;
        border: 1px solid var(--border);
      }
      .cs-kasus-ar {
        font-size: 0.85rem;
        color: var(--text-secondary);
      }
      .cs-stack-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .cs-rule-item {
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 12px 14px;
      }
      .cs-rule-top {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 6px;
      }
      .cs-ar-meaning {
        font-weight: 600;
        font-size: 0.92rem;
        color: var(--text-primary);
      }
      .cs-prep-pill {
        display: inline-block;
        padding: 3px 12px;
        border-radius: 8px;
        font-family: var(--font-de);
        font-size: 0.96rem;
        font-weight: 800;
      }
      .cs-prep-pill.akk { background: rgba(37, 99, 235, 0.14); color: #2563EB; }
      .cs-prep-pill.dat { background: rgba(234, 88, 12, 0.14); color: #EA580C; }
      .cs-prep-pill.wechsel { background: rgba(79, 70, 229, 0.14); color: var(--accent); }

      .cs-mini-tag {
        font-size: 0.72rem;
        font-weight: 800;
        padding: 1px 6px;
        border-radius: 4px;
        flex-shrink: 0;
      }
      .cs-mini-tag.akk { background: rgba(37, 99, 235, 0.15); color: #2563EB; }
      .cs-mini-tag.dat { background: rgba(234, 88, 12, 0.15); color: #EA580C; }

      .cs-contractions-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
      }
      @media (max-width: 960px) {
        .cs-contractions-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 560px) {
        .cs-contractions-grid { grid-template-columns: 1fr; }
      }
      .cs-contraction-card {
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 12px;
      }
      .cs-contraction-top {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.05rem;
        font-weight: 800;
        margin-bottom: 4px;
      }
      .cs-short-form { color: var(--accent); font-size: 1.2rem; }
      .cs-contraction-kasus { font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 6px; }

      .cs-gold-box {
        background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(79, 70, 229, 0.08));
        border: 1.5px solid rgba(245, 158, 11, 0.45);
        padding: 20px 24px;
      }
      .cs-gold-box h4 {
        font-size: 1.05rem;
        margin-bottom: 8px;
        color: var(--text-primary);
      }
      .cs-mini-rule-card {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 14px;
      }
      .cs-filter-pills {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      .cs-filter-btn {
        padding: 6px 14px;
        border-radius: 999px;
        border: 1.5px solid var(--border);
        background: var(--bg-primary);
        color: var(--text-primary);
        font-family: inherit;
        font-size: 0.85rem;
        font-weight: 700;
        cursor: pointer;
      }
      .cs-filter-btn.active {
        background: var(--accent);
        color: #FFFFFF;
        border-color: var(--accent);
      }
      .cs-verb-cell {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1rem;
        color: var(--accent);
      }
      .cs-row-num {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: var(--bg-primary);
        border: 1px solid var(--border);
        font-size: 0.78rem;
        font-weight: 700;
      }
      .cs-formula-strip {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 12px;
      }
      .cs-formula-step {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 10px 14px;
        display: flex;
        flex-direction: column;
        flex: 1;
        min-width: 160px;
      }
      .cs-formula-step.highlight {
        border: 2px solid var(--accent);
        background: var(--accent-light);
      }
      .cs-formula-step span { font-size: 0.75rem; color: var(--text-secondary); font-weight: 700; }
      .cs-formula-step strong { font-size: 0.96rem; margin: 2px 0; }
      .cs-formula-step small { font-size: 0.8rem; color: var(--text-secondary); }
      .cs-formula-arrow { font-weight: 800; color: var(--accent); }
      .cs-subtable-box {
        background: var(--bg-primary);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 14px;
        overflow-x: auto;
      }
      .cs-subtable-box h4 {
        font-size: 0.98rem;
        margin-bottom: 4px;
      }
      .cs-irregular-adj-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        margin-top: 10px;
      }
      @media (max-width: 900px) {
        .cs-irregular-adj-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 560px) {
        .cs-irregular-adj-grid { grid-template-columns: 1fr; }
      }
      .cs-irr-chip {
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 10px;
        padding: 8px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.9rem;
      }
    `;
    document.head.appendChild(style);
  }
};

window.CheatsheetsRenderer = CheatsheetsRenderer;
