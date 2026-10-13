// js/stories-trainer.js — 📖 القصص والحوارات التفاعلية الذكية (Interaktive Geschichten & Alltags-Dialoge)
// Inspired by LingQ & DW Nicos Weg — 10 complete real-life German stories & dialogues (A1, A2, B1, Ausbildung)

const StoriesTrainer = {
  STORAGE_KEY: 'deutsch_meister_stories_done',
  currentStoryId: 'arztbesuch',
  currentLevelFilter: 'all',
  showTranslation: true,
  showGrammarNotes: true,
  isPlayingFull: false,
  playingLineIndex: -1,
  fullPlayTimer: null,
  quizAnswers: {}, // { [storyId]: { [qIndex]: chosenOptionIndex } }
  quizRewarded: {}, // { [storyId]: boolean }

  stories: [
    // =========================================================================
    // 1. arztbesuch (A2)
    // =========================================================================
    {
      id: 'arztbesuch',
      icon: '🏥',
      level: 'A2',
      category: 'الصحة والحياة اليومية',
      titleDe: 'Beim Arzt und in der Apotheke',
      titleAr: 'عند الطبيب وفي الصيدلية',
      summaryDe: 'Sami hat seit zwei Tagen starkes Fieber und Halsschmerzen. Er geht zur Hausärztin Dr. Weber und holt danach Medikamente in der Apotheke.',
      summaryAr: 'يعاني سامي منذ يومين من حمّى شديدة والتهاب في الحلق، فيذهب إلى طبيبة الأسرة د. فيبر ثم يصرف الدواء من الصيدلية.',
      lines: [
        {
          speaker: 'الراوي (Erzähler)',
          avatar: '📖',
          role: 'narrator',
          de: 'Sami fühlt sich seit gestern Morgen sehr schlecht. Er hat **hohes Fieber** und starke **Halsschmerzen**, deshalb geht er heute in die Praxis von Frau Dr. Weber.',
          ar: 'يشعر سامي منذ صباح الأمس بتعب شديد. لديه حمّى مرتفعة وألم شديد في الحلق، ولذلك يذهب اليوم إلى عيادة الدكتورة فيبر.',
          grammarNote: 'الفعل التيرفلكسي (sich fühlen = يشعر). الرابط (deshalb = لذلك) يقلب الجملة فيأتي الفعل مباشرة بعده: deshalb geht er...'
        },
        {
          speaker: 'Arzthelferin (الممرضة)',
          avatar: '👩‍⚕️',
          role: 'staff',
          de: 'Guten Morgen! Haben Sie einen **Termin**, oder kommen Sie als **Notfall**? Bitte geben Sie mir zuerst Ihre **Gesundheitskarte**.',
          ar: 'صباح الخير! هل لديك موعد مسبق أم جئت كحالة طارئة؟ من فضلك أعطني أولاً بطاقة التأمين الصحي الخاصة بك.',
          grammarNote: 'الفعل (geben) يأخذ مفعولين: المفعول غير المباشر للضمير في حالة Dativ (mir = لي) والشيء في حالة Akkusativ (Ihre Gesundheitskarte).'
        },
        {
          speaker: 'Sami (سامي)',
          avatar: '🧑🏻',
          role: 'protagonist',
          de: 'Guten Morgen. Ich habe leider keinen Termin, aber ich habe heute Morgen angerufen. Hier ist meine Karte. Ich brauche später auch eine **Krankschreibung** für meinen Arbeitgeber.',
          ar: 'صباح الخير. للأسف ليس لدي موعد، لكنني اتصلت هذا الصباح. تفضلي بطاقتي. أحتاج لاحقاً أيضاً إلى إجازة مرضية لصاحب العمل.',
          grammarNote: 'نفي الاسم النكرة المذكر في حالة المفعول به Akkusativ يكون بـ (keinen Termin). وحرف الجر (für) يتبعه دائماً Akkusativ (meinen Arbeitgeber).'
        },
        {
          speaker: 'Dr. Weber (د. فيبر)',
          avatar: '🩺',
          role: 'doctor',
          de: 'Hallo Herr Sami, nehmen Sie bitte Platz! Was **fehlt** Ihnen denn genau, und **seit wann** haben Sie diese **Beschwerden**?',
          ar: 'مرحباً سيد سامي، تفضل بالجلوس! ممَّ تشكو بالضبط، ومنذ متى لديك هذه الأعراض؟',
          grammarNote: 'السؤال الطبي الأشهر في ألمانيا: (Was fehlt Ihnen? = ممّ تشكو؟) مع صيغة الاحترام في حالة Dativ (Ihnen).'
        },
        {
          speaker: 'Sami (سامي)',
          avatar: '🧑🏻',
          role: 'protagonist',
          de: 'Mir tut der ganze Hals weh, besonders **beim Schlucken**. Außerdem habe ich Husten, Kopfschmerzen und gestern Abend hatte ich 39 Grad Fieber.',
          ar: 'حلقي كله يؤلمني، خصوصاً عند البلع. بالإضافة إلى ذلك لدي سعال وصداع، ومساء أمس كانت حرارتي 39 درجة.',
          grammarNote: 'التعبير عن الألم: (Mir tut der Hals weh = حلقي يؤلمني). الفعل منفصل (wehtun). والتركيب (beim Schlucken) هو اختصار (bei + dem Schlucken).'
        },
        {
          speaker: 'Dr. Weber (د. فيبر)',
          avatar: '🩺',
          role: 'doctor',
          de: 'Öffnen Sie bitte den Mund und sagen Sie „Aaa“. Ihr Hals ist stark **entzündet**, aber die Lunge ist frei. Das ist ein **grippaler Infekt**.',
          ar: 'افتح فمك من فضلك وقل "آه". حلقك ملتهب بشدة، لكن الرئة سليمة. هذه عدوى إنفلونزا موسمية.',
          grammarNote: 'صيغة الأمر الرسمي (Imperativ مع Sie): الفعل في المصدر أولاً ثم الضمير (Öffnen Sie... / sagen Sie...).'
        },
        {
          speaker: 'Dr. Weber (د. فيبر)',
          avatar: '🩺',
          role: 'doctor',
          de: 'Ich **verschreibe** Ihnen ein **Rezept** für Halstabletten und einen Hustensaft. Ich schreibe Sie bis einschließlich Freitag **krank**. Trinken Sie viel warmen Tee!',
          ar: 'سأكتب لك وصفة طبية لأقراص الحلق وشراب السعال. سأمنحك إجازة مرضية حتى يوم الجمعة شاملاً إياه. اشرب الكثير من الشاي الدافئ!',
          grammarNote: 'الفعل المنفصل (krankschreiben = يمنح إجازة مرضية): Ich schreibe Sie bis Freitag krank.'
        },
        {
          speaker: 'Apotheker (الصيدلي)',
          avatar: '💊',
          role: 'staff',
          de: 'Hier sind Ihre Medikamente. Den Hustensaft nehmen Sie bitte **dreimal täglich** **nach dem Essen** ein. **Gute Besserung**!',
          ar: 'تفضل أدويتك. شراب السعال تتناوله من فضلك ثلاث مرات يومياً بعد الأكل. نتمنى لك الشفاء العاجل!',
          grammarNote: 'الفعل المنفصل الخاص بتناول الدواء هو (einnehmen): nehmen Sie ... ein. وحرف الجر (nach) يفرض حالة Dativ (nach dem Essen).'
        }
      ],
      vocabulary: [
        { word: 'die Gesundheitskarte', plural: 'die Gesundheitskarten', ar: 'بطاقة التأمين الصحي', example: 'Haben Sie Ihre Gesundheitskarte dabei?' },
        { word: 'die Beschwerde', plural: 'die Beschwerden', ar: 'العَرَض المرضي / الشكوى', example: 'Seit wann haben Sie diese Beschwerden?' },
        { word: 'die Krankschreibung', plural: 'die Krankschreibungen', ar: 'الإجازة المرضية الرسمية', example: 'Ich brauche eine Krankschreibung für die Arbeit.' },
        { word: 'das Rezept', plural: 'die Rezepte', ar: 'الوصفة الطبية (الروشتة)', example: 'Die Ärztin gibt mir ein Rezept für die Apotheke.' },
        { word: 'der Hustensaft', plural: 'die Hustensäfte', ar: 'شراب السعال', example: 'Den Hustensaft nehme ich dreimal täglich ein.' },
        { word: 'beim Schlucken', plural: '—', ar: 'عند البلع', example: 'Mein Hals tut beim Schlucken sehr weh.' },
        { word: 'Gute Besserung!', plural: '—', ar: 'شفاءً عاجلاً! (تُقال للمريض)', example: 'Ich wünsche dir gute Besserung!' }
      ],
      quiz: [
        {
          question: 'لماذا ذهب سامي إلى عيادة الدكتورة فيبر (Dr. Weber)؟',
          options: [
            'لأنه يعاني من حمّى شديدة والتهاب في الحلق وسعال',
            'لأنه كسر يده أثناء العمل في المصنع',
            'لأنه يريد فحص أسنانه الدوري',
            'لأنه يبحث عن وظيفة كممرض في العيادة'
          ],
          correctIndex: 0,
          explanation: 'ذكر سامي أنه يعاني من حمّى (39 Grad Fieber) وألم شديد في الحلق عند البلع وسعال وصداع.'
        },
        {
          question: 'ما هي الوثيقة المهمة التي يحتاجها سامي لتقديمها لصاحب العمل (Arbeitgeber)؟',
          options: [
            'eine Krankschreibung (إجازة مرضية رسمية)',
            'einen Mietvertrag (عقد إيجار)',
            'ein Flugticket (تذكرة طيران)',
            'einen Führerschein (رخصة قيادة)'
          ],
          correctIndex: 0,
          explanation: 'في ألمانيا يحتاج الموظف المريض إلى شهادة إجازة مرضية (die Krankschreibung / Arbeitsunfähigkeitsbescheinigung).'
        },
        {
          question: 'كيف أوصى الصيدلي سامي بتناول شراب السعال (der Hustensaft)؟',
          options: [
            'Dreimal täglich nach dem Essen (ثلاث مرات يومياً بعد الأكل)',
            'Einmal pro Woche vor dem Schlafen (مرة في الأسبوع قبل النوم)',
            'Nur morgens mit kaltem Kaffee (فقط صباحاً مع قهوة باردة)',
            'Zweimal monatlich ohne Wasser (مرتين شهرياً بدون ماء)'
          ],
          correctIndex: 0,
          explanation: 'قال الصيدلي بوضوح: Den Hustensaft nehmen Sie bitte dreimal täglich nach dem Essen ein.'
        }
      ]
    },

    // =========================================================================
    // 2. buergeramt (A2)
    // =========================================================================
    {
      id: 'buergeramt',
      icon: '🏛️',
      level: 'A2',
      category: 'المعاملات الرسمية في ألمانيا',
      titleDe: 'Anmeldung beim Bürgeramt',
      titleAr: 'التسجيل في البلدية (تثبيت السكن)',
      summaryDe: 'Layla ist in eine neue Wohnung in München gezogen. Innerhalb von zwei Wochen muss sie ihren Wohnsitz beim Bürgeramt anmelden.',
      summaryAr: 'انتقلت ليلى إلى شقة جديدة في ميونخ، ويجب عليها خلال أسبوعين تسجيل عنوان سكنها رسمياً في دائرة البلدية.',
      lines: [
        {
          speaker: 'الراوي (Erzähler)',
          avatar: '📖',
          role: 'narrator',
          de: 'Layla ist vor fünf Tagen nach München **umgezogen**. Heute hat sie um 10:15 Uhr einen Termin beim **Bürgeramt**, um ihre neue Adresse **anzumelden**.',
          ar: 'انتقلت ليلى قبل خمسة أيام إلى ميونخ. اليوم لديها موعد الساعة 10:15 في مكتب البلدية لتسجيل عنوانها الجديد.',
          grammarNote: 'التركيب (um ... zu + Infinitiv = لكي): مع الأفعال المنفصلة مثل (anmelden) توضع (zu) بين البادئة والفعل: anzumelden.'
        },
        {
          speaker: 'Layla (ليلى)',
          avatar: '👩🏻',
          role: 'protagonist',
          de: 'Auf dem Bildschirm im Wartebereich erscheint endlich meine **Wartenummer** B-204. Ich gehe jetzt in **Zimmer** Nummer 12.',
          ar: 'ظهر أخيراً رقم انتظاري B-204 على الشاشة في صالة الانتظار. سأذهب الآن إلى الغرفة رقم 12.',
          grammarNote: 'في الجملة التي تبدأ بظرف مكان (Auf dem Bildschirm...) يأتي الفعل المصرف في المركز الثاني مباشرة (erscheint).'
        },
        {
          speaker: 'Sachbearbeiter (موظف البلدية)',
          avatar: '👨‍💼',
          role: 'staff',
          de: 'Guten Tag! Nehmen Sie bitte Platz. Wie kann ich Ihnen heute **weiterhelfen**?',
          ar: 'طاب يومك! تفضلي بالجلوس. كيف يمكنني مساعدتك اليوم؟',
          grammarNote: 'الفعل المركب (weiterhelfen = يقدم المساعدة) يأتي في آخر الجملة بالمصدر لوجود الفعل المساعد (kann).'
        },
        {
          speaker: 'Layla (ليلى)',
          avatar: '👩🏻',
          role: 'protagonist',
          de: 'Guten Tag! Ich bin neu nach München gezogen und möchte meinen neuen **Wohnsitz** anmelden. Ich habe alle **Unterlagen** mitgebracht.',
          ar: 'طاب يومك! لقد انتقلت حديثاً إلى ميونخ وأود تسجيل مقر سكني الجديد. لقد أحضرت جميع المستندات معي.',
          grammarNote: 'الفعل (umziehen / ziehen = ينتقل للسكن) يأخذ في زمن Perfekt الفعل المساعد (sein): Ich bin nach München gezogen.'
        },
        {
          speaker: 'Sachbearbeiter (موظف البلدية)',
          avatar: '👨‍💼',
          role: 'staff',
          de: 'Sehr gut. Dann brauche ich bitte Ihren **Reisepass**, das ausgefüllte **Anmeldeformular** und die **Wohnungsgeberbestätigung** von Ihrem Vermieter.',
          ar: 'جيد جداً. إذن أحتاج من فضلك جواز سفرك، واستمارة التسجيل المعبأة، وشهادة تأكيد السكن من المالك.',
          grammarNote: 'الصفة المشتقة من اسم المفعول (ausgefüllt = معبأ) تأخذ نهاية (-e) بعد أداة التعريف المحايدة: das ausgefüllte Anmeldeformular.'
        },
        {
          speaker: 'Layla (ليلى)',
          avatar: '👩🏻',
          role: 'protagonist',
          de: 'Bitte schön, hier sind mein Pass und die Bestätigung vom **Vermieter**. Reicht auch der **Mietvertrag**, falls noch etwas fehlt?',
          ar: 'تفضل، ها هو جواز سفري وشهادة التأكيد من المؤجر. هل يكفي عقد الإيجار أيضاً في حال كان هناك شيء ناقص؟',
          grammarNote: 'الرابط الشرطي (falls = في حال أن) يصنع جملة فرعية (Nebensatz) فيذهب الفعل إلى آخر الجملة: falls noch etwas fehlt.'
        },
        {
          speaker: 'Sachbearbeiter (موظف البلدية)',
          avatar: '👨‍💼',
          role: 'staff',
          de: 'Danke, es ist alles **vollständig**. Kontrollieren Sie bitte kurz Ihre Daten auf diesem Ausdruck und **unterschreiben** Sie hier unten rechts.',
          ar: 'شكراً، كل شيء مكتمل. يرجى مراجعة بياناتك سريعاً على هذه المطبوعة والتوقيع هنا في الأسفل على اليمين.',
          grammarNote: 'الفعل (unterschreiben = يوقّع) فعل غير منفصل لأن البادئة (unter-) هنا متصلة ولا تنفصل في الأمر أو المضارع.'
        },
        {
          speaker: 'Sachbearbeiter (موظف البلدية)',
          avatar: '👨‍💼',
          role: 'staff',
          de: 'Perfekt! Hier ist Ihre gestempelte **Meldebestätigung**. Bewahren Sie dieses Dokument gut auf — Sie brauchen es für die Bank und den Arbeitgeber.',
          ar: 'ممتاز! تفضلي شهادة تسجيل السكن المختومة الخاصة بك. احتفظي بهذه الوثيقة جيداً — فستحتاجينها للبنك ولصاحب العمل.',
          grammarNote: 'الفعل المنفصل (aufbewahren = يحتفظ بـِ بعناية): Bewahren Sie dieses Dokument gut auf!'
        }
      ],
      vocabulary: [
        { word: 'das Bürgeramt', plural: 'die Bürgerämter', ar: 'دائرة شؤون المواطنين / البلدية', example: 'Ich habe morgen einen Termin beim Bürgeramt.' },
        { word: 'der Wohnsitz', plural: 'die Wohnsitze', ar: 'مقر الإقامة / عنوان السكن', example: 'Man muss seinen Wohnsitz innerhalb von zwei Wochen anmelden.' },
        { word: 'die Wohnungsgeberbestätigung', plural: 'die Wohnungsgeberbestätigungen', ar: 'ورقة إثبات السكن من صاحب العقار', example: 'Der Vermieter muss die Wohnungsgeberbestätigung unterschreiben.' },
        { word: 'die Meldebestätigung', plural: 'die Meldebestätigungen', ar: 'شهادة إثبات تسجيل السكن (الألميلدونغ)', example: 'Für das Bankkonto brauche ich meine Meldebestätigung.' },
        { word: 'die Unterlagen (Pl.)', plural: 'die Unterlagen', ar: 'المستندات / الأوراق الرسمية', example: 'Haben Sie alle wichtigen Unterlagen dabei?' },
        { word: 'unterschreiben', plural: 'unterschrieb / hat unterschrieben', ar: 'يوقّع (التوقيع الرسمي)', example: 'Bitte unterschreiben Sie das Formular unten rechts.' },
        { word: 'aufbewahren', plural: 'bewahrte auf / hat aufbewahrt', ar: 'يحتفظ بشيء في مكان آمن', example: 'Bewahren Sie die Meldebestätigung gut auf.' }
      ],
      quiz: [
        {
          question: 'ما هو الغرض من زيارة ليلى إلى مكتب البلدية (das Bürgeramt)؟',
          options: [
            'تسجيل عنوان سكنها الجديد في ميونخ (Wohnsitz anmelden)',
            'استخراج رخصة قيادة دولية',
            'تقديم شكوى ضد الجيران',
            'دفع مخالفة مرورية للسيارة'
          ],
          correctIndex: 0,
          explanation: 'قالت ليلى: Ich bin neu nach München gezogen und möchte meinen neuen Wohnsitz anmelden.'
        },
        {
          question: 'ما هي الأوراق الثلاث التي طلبها موظف البلدية من ليلى؟',
          options: [
            'Reisepass, Anmeldeformular und Wohnungsgeberbestätigung',
            'Lebenslauf, Schulzeugnis und Krankenkassenkarte',
            'Mietvertrag, Stromrechnung und Fahrkarte',
            'Geburtsurkunde, Bankkarte und Arbeitsvertrag'
          ],
          correctIndex: 0,
          explanation: 'لتثبيت السكن في ألمانيا يجب إحضار جواز السفر أو الهوية، استمارة التسجيل، وورقة تأكيد المؤجر (Wohnungsgeberbestätigung).'
        },
        {
          question: 'لماذا نصح الموظف ليلى بالاحتفاظ بشهادة التسجيل (Meldebestätigung) جيداً؟',
          options: [
            'لأنها ستحتاجها لفتح حساب بنكي ولصاحب العمل (für die Bank und den Arbeitgeber)',
            'لأنها تمنحها تذاكر قطار مجانية لمدة سنة',
            'لأنها مطلوبة عند الشراء من السوبرماركت',
            'لأنها تنتهي صلاحيتها بعد ثلاث ساعات'
          ],
          correctIndex: 0,
          explanation: 'قال الموظف: Bewahren Sie dieses Dokument gut auf — Sie brauchen es für die Bank und den Arbeitgeber.'
        }
      ]
    },

    // =========================================================================
    // 3. wohnungssuche (A2/B1)
    // =========================================================================
    {
      id: 'wohnungssuche',
      icon: '🏠',
      level: 'A2/B1',
      category: 'السكن والإيجار في ألمانيا',
      titleDe: 'Bei der Wohnungsbesichtigung',
      titleAr: 'معاينة شقة للإيجار',
      summaryDe: 'Karim besichtigt eine helle Zweizimmerwohnung in Köln. Er spricht mit dem Vermieter Herrn Schneider über Kaltmiete, Nebenkosten und die Kaution.',
      summaryAr: 'يعاين كريم شقة مشرقة من غرفتين في كولن، ويتحدث مع المؤجر السيد شنايدر حول الإيجار الأساسي والتكاليف الإضافية ومبلغ التأمين.',
      lines: [
        {
          speaker: 'الراوي (Erzähler)',
          avatar: '📖',
          role: 'narrator',
          de: 'Karim sucht seit zwei Monaten eine Wohnung in Köln. Heute hat er endlich einen Termin zur **Wohnungsbesichtigung** im dritten **Stock**.',
          ar: 'يبحث كريم منذ شهرين عن شقة في كولن. واليوم لديه أخيراً موعد لمعاينة شقة في الطابق الثالث.',
          grammarNote: 'حرف الجر (seit + Dativ) يدل على حدث بدأ في الماضي وما زال مستمراً في الحاضر، لذلك نستخدم معه المضارع (sucht).'
        },
        {
          speaker: 'Herr Schneider (المؤجر)',
          avatar: '👨‍🦳',
          role: 'landlord',
          de: 'Herzlich willkommen, Herr Karim! Kommen Sie herein. Wie Sie sehen, ist das Wohnzimmer sehr **hell**, weil die großen Fenster nach Süden **zeigen**.',
          ar: 'أهلاً وسهلاً بك يا سيد كريم! تفضل بالدخول. كما ترى، غرفة المعيشة مشرقة جداً لأن النوافذ الكبيرة تتجه نحو الجنوب.',
          grammarNote: 'الرابط السببي (weil = لأن) يدفع الفعل المصرف (zeigen) إلى نهاية الجملة الفرعية.'
        },
        {
          speaker: 'Karim (كريم)',
          avatar: '🧑🏽',
          role: 'protagonist',
          de: 'Vielen Dank! Der Schnitt der Wohnung gefällt mir sehr gut. Bleibt die **Einbauküche** in der Wohnung, oder muss ich eigene Geräte kaufen?',
          ar: 'شكراً جزيلاً! تقسيم الشقة يعجبني جداً. هل سيبقى المطبخ المجهز داخل الشقة أم يجب أن أشتري أجهزتي الخاصة؟',
          grammarNote: 'الفعل (gefallen = يعجب) يأخذ الشخص في حالة Dativ (gefällt mir) والشيء المعجب به يكون فاعلاً Nominativ (Der Schnitt).'
        },
        {
          speaker: 'Herr Schneider (المؤجر)',
          avatar: '👨‍🦳',
          role: 'landlord',
          de: 'Die Einbauküche mit Herd, Kühlschrank und **Spülmaschine** gehört zur Wohnung und ist bereits in der Miete **enthalten**.',
          ar: 'المطبخ المجهز مع الفرن والثلاجة وغسالة الصحون تابع للشقة ومشمول بالفعل ضمن الإيجار.',
          grammarNote: 'الفعل (gehören zu + Dativ = ينتمي إلى / يتبع لـ): gehört zur (zu + der) Wohnung.'
        },
        {
          speaker: 'Karim (كريم)',
          avatar: '🧑🏽',
          role: 'protagonist',
          de: 'Das ist super! In der Anzeige stand eine **Kaltmiete** von 650 Euro. Wie hoch sind die **Nebenkosten**, und ist die **Heizung** darin schon inklusive?',
          ar: 'هذا رائع! كان مكتوباً في الإعلان أن الإيجار الأساسي 650 يورو. كم تبلغ التكاليف الإضافية، وهل التدفئة مشمولة فيها بالفعل؟',
          grammarNote: 'للسؤال عن قيمة المبالغ والأسعار والإيجار في الألمانية نقول دائماً: (Wie hoch ist/sind...? = كم يبلغ ارتفاع/قيمة...؟).'
        },
        {
          speaker: 'Herr Schneider (المؤجر)',
          avatar: '👨‍🦳',
          role: 'landlord',
          de: 'Die Nebenkosten inklusive Heizung und Wasser betragen 180 Euro. Die **Warmmiete** liegt also bei 830 Euro. Nur **Strom** und Internet melden Sie selbst an.',
          ar: 'التكاليف الإضافية شاملة التدفئة والماء تبلغ 180 يورو. إذن الإيجار الشامل هو 830 يورو. فقط الكهرباء والإنترنت تسجلها بنفسك.',
          grammarNote: 'الفرق الأساسي في ألمانيا: Kaltmiete (إيجار بدون خدمات) + Nebenkosten (الخدمات والتدفئة) = Warmmiete (الإيجار الشامل).'
        },
        {
          speaker: 'Karim (كريم)',
          avatar: '🧑🏽',
          role: 'protagonist',
          de: 'Ab wann ist die Wohnung **bezugsfrei**, und wie hoch ist die **Kaution**? Ich habe meine Gehaltsabrechnungen und die **SCHUFA-Auskunft** direkt dabei.',
          ar: 'اعتباراً من متى تكون الشقة جاهزة للسكن، وكم يبلغ مبلغ التأمين؟ لدي كشوفات راتبي وشهادة الائتمان (الشوفا) معي مباشرة.',
          grammarNote: 'الصفة (bezugsfrei = جاهزة للانتقال والسكن فوراً) تتكون من (der Bezug = الانتقال للسكن) + (frei = خالٍ/متاح).'
        },
        {
          speaker: 'Herr Schneider (المؤجر)',
          avatar: '👨‍🦳',
          role: 'landlord',
          de: 'Sie können ab dem 1. Mai **einziehen**. Die Kaution beträgt zwei Monatskaltmieten. Sie machen einen sehr zuverlässigen Eindruck — ich schicke Ihnen morgen den **Mietvertrag**!',
          ar: 'يمكنك الانتقال للسكن ابتداءً من الأول من مايو. التأمين يبلغ إيجار شهرين أساسيين. أنت تترك انطباعاً موثوقاً جداً — سأرسل لك غداً عقد الإيجار!',
          grammarNote: 'الفعل المنفصل (einziehen = ينتقل للسكن داخل شقة) عكسه (ausziehen = يخرج من الشقة).'
        }
      ],
      vocabulary: [
        { word: 'die Wohnungsbesichtigung', plural: 'die Wohnungsbesichtigungen', ar: 'معاينة الشقة قبل الاستئجار', example: 'Am Samstag habe ich eine Wohnungsbesichtigung.' },
        { word: 'die Kaltmiete', plural: 'die Kaltmieten', ar: 'الإيجار الأساسي (بدون التدفئة والخدمات)', example: 'Die Kaltmiete beträgt 650 Euro im Monat.' },
        { word: 'die Nebenkosten (Pl.)', plural: 'die Nebenkosten', ar: 'التكاليف الإضافية (الماء، التدفئة، النظافة)', example: 'Sind die Heizkosten in den Nebenkosten enthalten?' },
        { word: 'die Warmmiete', plural: 'die Warmmieten', ar: 'الإيجار الشامل (الأساسي + الخدمات)', example: 'Die gesamte Warmmiete liegt bei 830 Euro.' },
        { word: 'die Kaution', plural: 'die Kautionen', ar: 'مبلغ التأمين المسترد للشقة', example: 'Vor dem Einzug muss man die Kaution überweisen.' },
        { word: 'die Einbauküche', plural: 'die Einbauküchen', ar: 'مطبخ مجهز ومثبت في الشقة', example: 'Die Wohnung hat schon eine moderne Einbauküche.' },
        { word: 'einziehen', plural: 'zog ein / ist eingezogen', ar: 'ينتقل للسكن في شقة جديدة', example: 'Wir ziehen nächsten Monat in die neue Wohnung ein.' }
      ],
      quiz: [
        {
          question: 'كم يبلغ الإيجار الشامل (die Warmmiete) للشقة التي عاينها كريم؟',
          options: [
            '830 Euro (650 Kaltmiete + 180 Nebenkosten)',
            '650 Euro شاملة الكهرباء والإنترنت',
            '180 Euro فقط',
            '1300 Euro شهرياً'
          ],
          correctIndex: 0,
          explanation: 'الإيجار الأساسي 650 يورو والتكاليف الإضافية 180 يورو، فيكون مجموع الإيجار الشامل (Warmmiete) هو 830 يورو.'
        },
        {
          question: 'ما هي الخدمات التي يجب على كريم تسجيلها ودفعها بنفسه بشكل مستقل؟',
          options: [
            'Strom und Internet (الكهرباء والإنترنت)',
            'Heizung und Wasser (التدفئة والماء)',
            'Die Einbauküche und die Fenster (المطبخ والنوافذ)',
            'Die Müllabfuhr und die Treppe (القمامة والدرج)'
          ],
          correctIndex: 0,
          explanation: 'قال المالك السيد شنايدر: Nur Strom und Internet melden Sie selbst an.'
        },
        {
          question: 'ما هي الأوراق التي أحضرها كريم معه ليثبت للمؤجر أنه مستأجر موثوق؟',
          options: [
            'Gehaltsabrechnungen und SCHUFA-Auskunft (كشوف الراتب وشهادة الائتمان)',
            'Urlaubsfotos und ein Kochbuch',
            'Nur eine Fahrkarte für die Straßenbahn',
            'Ein Rezept vom Hausarzt'
          ],
          correctIndex: 0,
          explanation: 'في ألمانيا يطلب المؤجرون غالباً كشوف الراتب لآخر 3 أشهر (Gehaltsabrechnungen) وشهادة خلو السجل المالي من الديون المتعثرة (SCHUFA-Auskunft).'
        }
      ]
    },

    // =========================================================================
    // 4. erster-arbeitstag (B1)
    // =========================================================================
    {
      id: 'erster-arbeitstag',
      icon: '🛠️',
      level: 'B1',
      category: 'التدريب المهني والعمل (Ausbildung)',
      titleDe: 'Mein erster Tag in der Ausbildung',
      titleAr: 'اليوم الأول في التدريب المهني (Ausbildung)',
      summaryDe: 'Youssef beginnt seine Ausbildung als Mechatroniker. Sein Ausbilder Herr Hartmann zeigt ihm die Werkstatt, erklärt die Sicherheitsregeln und den Schichtplan.',
      summaryAr: 'يبدأ يوسف تدريبه المهني كميكاترونيكس، ويأخذه مدربه السيد هارتمان في جولة بالورشة ويشرح له قواعد السلامة وجدول المناوبات.',
      lines: [
        {
          speaker: 'الراوي (Erzähler)',
          avatar: '📖',
          role: 'narrator',
          de: 'Heute ist der 1. September — ein besonderer Tag für Youssef. Er fängt seine dreijährige **Ausbildung** als KFZ-Mechatroniker in einem großen **Ausbildungsbetrieb** an.',
          ar: 'اليوم هو الأول من سبتمبر — يوم مميز ليوسف؛ إذ يبدأ تدريبه المهني الممتد لثلاث سنوات كفني ميكاترونيك سيارات في شركة تدريبية كبيرة.',
          grammarNote: 'الفعل المنفصل (anfangen = يبدأ): Er fängt seine Ausbildung ... an.'
        },
        {
          speaker: 'Herr Hartmann (المدرب)',
          avatar: '👷‍♂️',
          role: 'trainer',
          de: 'Guten Morgen, Youssef! Herzlich willkommen in unserem Team. Ich bin Thomas Hartmann, dein **Ausbilder**, und begleite dich während deiner **Probezeit**.',
          ar: 'صباح الخير يا يوسف! أهلاً وسهلاً بك في فريقنا. أنا توماس هارتمان، مدربك المهني، وسأرافقك خلال فترة التجربة الخاصة بك.',
          grammarNote: 'حرف الجر الزمني (während = أثناء/خلال) يتبعه دائماً المضاف إليه Genitiv: während deiner Probezeit.'
        },
        {
          speaker: 'Youssef (يوسف)',
          avatar: '🧑🏻‍🔧',
          role: 'protagonist',
          de: 'Guten Morgen, Herr Hartmann! Vielen Dank. Ich bin ehrlich gesagt ein bisschen **aufgeregt**, aber ich **freue mich sehr auf** die praktische Arbeit.',
          ar: 'صباح الخير يا سيد هارتمان! شكراً جزيلاً. بصراحة أنا متوتر قليلاً، لكنني متشوق جداً للعمل التطبيقي.',
          grammarNote: 'الفعل الانعكاسي (sich freuen auf + Akkusativ = يتطلع بشوق لشيء في المستقبل)، بينما (sich freuen über) للشيء الحاضر.'
        },
        {
          speaker: 'Herr Hartmann (المدرب)',
          avatar: '👷‍♂️',
          role: 'trainer',
          de: 'Das ist am ersten Tag völlig normal! Zuerst machen wir einen **Rundgang** durch die Werkstatt, und danach bekommst du deine **Sicherheitskleidung**.',
          ar: 'هذا طبيعي تماماً في اليوم الأول! أولاً سنقوم بجولة تعريفية داخل الورشة، وبعد ذلك ستستلم ملابس السلامة الخاصة بك.',
          grammarNote: 'حرف الجر (durch = عبر/خلال) يفرض دائماً حالة المفعول به Akkusativ: durch die Werkstatt.'
        },
        {
          speaker: 'Herr Hartmann (المدرب)',
          avatar: '👷‍♂️',
          role: 'trainer',
          de: 'Wichtigste Regel bei uns: In der Halle musst du immer **Sicherheitsschuhe** und bei bestimmten Arbeiten eine **Schutzbrille** tragen. Sicherheit geht vor!',
          ar: 'أهم قاعدة لدينا: داخل القاعة يجب عليك دائماً ارتداء أحذية السلامة، وعند أعمال معينة نظارة واقية. السلامة أولاً!',
          grammarNote: 'العبارة الألمانية الشهيرة في المصانع والورشات: (Sicherheit geht vor! = السلامة تتقدم على كل شيء / السلامة أولاً).'
        },
        {
          speaker: 'Youssef (يوسف)',
          avatar: '🧑🏻‍🔧',
          role: 'protagonist',
          de: 'Verstanden! Wie sieht mein **Wochenplan** aus? Wann bin ich hier im Betrieb und wann habe ich Unterricht in der **Berufsschule**?',
          ar: 'مفهوم! كيف يبدو جدولي الأسبوعي؟ متى أكون هنا في الشركة ومتى يكون لدي دروس في المدرسة المهنية؟',
          grammarNote: 'النظام المزدوج (Duale Ausbildung) في ألمانيا يجمع بين العمل في الشركة (im Betrieb) والدراسة النظرية في المدرسة المهنية (in der Berufsschule).'
        },
        {
          speaker: 'Herr Hartmann (المدرب)',
          avatar: '👷‍♂️',
          role: 'trainer',
          de: 'Von Montag bis Mittwoch arbeitest du im Betrieb von 7:30 bis 16:00 Uhr. Donnerstag und Freitag gehst du in die Berufsschule. Vergiss nicht, dein **Berichtsheft** regelmäßig zu führen!',
          ar: 'من الإثنين إلى الأربعاء تعمل في الشركة من 7:30 حتى 16:00. والخميس والجمعة تذهب إلى المدرسة المهنية. لا تنسَ كتابة دفتر التقارير التدريبية بانتظام!',
          grammarNote: 'التعبير الرسمي في الأوسبيلدونغ: (ein Berichtsheft führen = يدوّن سجل التقارير اليومية/الأسبوعية بانتظام).'
        },
        {
          speaker: 'Youssef (يوسف)',
          avatar: '🧑🏻‍🔧',
          role: 'protagonist',
          de: 'Alles klar! Wenn ich eine Aufgabe noch nicht ganz verstehe, **darf** ich dann jederzeit die Gesellen oder Sie **um Hilfe bitten**?',
          ar: 'كل شيء واضح! إذا لم أفهم مهمة ما بشكل كامل بعد، فهل يُسمح لي في أي وقت أن أطلب المساعدة من الفنيين أو من حضرتك؟',
          grammarNote: 'التركيب القياسي المهم في مستوى B1: (jemanden um Hilfe bitten = يطلب المساعدة من شخص ما).'
        }
      ],
      vocabulary: [
        { word: 'der Ausbildungsbetrieb', plural: 'die Ausbildungsbetriebe', ar: 'الشركة المانحة للتدريب المهني', example: 'Mein Ausbildungsbetrieb hat 120 Mitarbeiter.' },
        { word: 'der Ausbilder', plural: 'die Ausbilder', ar: 'المدرب والمشرف المهني في الشركة', example: 'Mein Ausbilder erklärt mir jeden Arbeitsschritt geduldig.' },
        { word: 'die Probezeit', plural: 'die Probezeiten', ar: 'فترة التجربة (غالباً أول 3 إلى 4 أشهر)', example: 'In der Ausbildung dauert die Probezeit meistens vier Monate.' },
        { word: 'die Berufsschule', plural: 'die Berufsschulen', ar: 'المدرسة المهنية (الجزء النظري من الأوسبيلدونغ)', example: 'Zweimal pro Woche gehe ich in die Berufsschule.' },
        { word: 'das Berichtsheft', plural: 'die Berichtshefte', ar: 'دفتر تقارير التدريب المهني (إلزامي للتخرج)', example: 'Jeder Azubi muss sein Berichtsheft sauber führen.' },
        { word: 'die Sicherheitskleidung', plural: '—', ar: 'ملابس ومعدات السلامة المهنية', example: 'Ohne Sicherheitskleidung darf niemand in die Werkhalle.' },
        { word: 'um Hilfe bitten', plural: 'bat um Hilfe / hat gebeten', ar: 'يطلب المساعدة من شخص', example: 'Wenn du unsicher bist, bitte deinen Kollegen um Hilfe.' }
      ],
      quiz: [
        {
          question: 'ما هي القاعدة الأهم التي شدد عليها المدرب هارتمان داخل قاعة الورشة؟',
          options: [
            'ارتداء أحذية السلامة (Sicherheitsschuhe) والنظارة الواقية دائماً',
            'العمل بدون توقف لمدة 10 ساعات',
            'إحضار أدوات التصليح الشخصية من المنزل',
            'عدم طرح أي أسئلة خلال الشهر الأول'
          ],
          correctIndex: 0,
          explanation: 'شدد المدرب على قواعد السلامة المهنية: In der Halle musst du immer Sicherheitsschuhe und eine Schutzbrille tragen.'
        },
        {
          question: 'كيف يتوزع أسبوع يوسف بين الشركة (Betrieb) والمدرسة المهنية (Berufsschule)؟',
          options: [
            'من الإثنين للأربعاء في الشركة، والخميس والجمعة في المدرسة المهنية',
            'طوال الأسبوع في الشركة والسبت في المدرسة',
            'شهر كامل في المدرسة وشهر كامل في المنزل',
            'يوم واحد فقط في الشركة وأربعة أيام في المدرسة'
          ],
          correctIndex: 0,
          explanation: 'قال المدرب: Von Montag bis Mittwoch arbeitest du im Betrieb... Donnerstag und Freitag gehst du in die Berufsschule.'
        },
        {
          question: 'ما هو (das Berichtsheft) الذي ذكّر المدربُ يوسفَ بكتابته بانتظام؟',
          options: [
            'دفتر تقارير التدريب المهني الذي يسجل فيه المتدرب ما تعلمه',
            'تذكرة المواصلات الشهرية للمتدربين',
            'قائمة الطعام في كافتيريا المصنع',
            'شهادة التأمين الصحي'
          ],
          correctIndex: 0,
          explanation: 'دفتر التقارير (das Berichtsheft / Ausbildungsnachweis) هو سجل إلزامي يكتب فيه المتدرب (Azubi) مهامه الأسبوعية ليُقبل في الامتحان النهائي.'
        }
      ]
    },

    // =========================================================================
    // 5. bahnhof-verspaetung (A2)
    // =========================================================================
    {
      id: 'bahnhof-verspaetung',
      icon: '🚆',
      level: 'A2',
      category: 'السفر والمواصلات (Deutsche Bahn)',
      titleDe: 'Zugverspätung am Hauptbahnhof',
      titleAr: 'تأخر القطار في المحطة الرئيسية',
      summaryDe: 'Nadia steht am Frankfurter Hauptbahnhof. Ihr ICE nach Berlin hat 45 Minuten Verspätung und wechselt plötzlich das Gleis. Sie fragt am DB-Reisezentrum nach einer Lösung.',
      summaryAr: 'تقف نادية في محطة فرانكفورت الرئيسية، ويتأخر قطارها السريع المتجه إلى برلين 45 دقيقة ويغير رصيفه فجأة، فتسأل مكتب الاستعلامات عن البديل.',
      lines: [
        {
          speaker: 'الراوي (Erzähler)',
          avatar: '📖',
          role: 'narrator',
          de: 'Nadia steht auf **Gleis** 7 am Frankfurter Hauptbahnhof. Sie möchte nach Hannover fahren und muss dort in einen anderen Zug **umsteigen**.',
          ar: 'تقف نادية على الرصيف رقم 7 في محطة فرانكفورت الرئيسية. تريد السفر إلى هانوفر ويجب عليها هناك التبديل إلى قطار آخر.',
          grammarNote: 'الفعل المنفصل (umsteigen = يبدّل وسيلة المواصلات)، بينما (einsteigen = يصعد) و(aussteigen = ينزل).'
        },
        {
          speaker: 'Durchsage (الإذاعة الداخلية)',
          avatar: '📢',
          role: 'announcer',
          de: 'Achtung am Gleis 7! Der ICE 578 nach Hamburg über Hannover hat wegen einer **Störung am Gleis** voraussichtlich 45 Minuten **Verspätung**.',
          ar: 'انتباه على الرصيف 7! القطار السريع ICE 578 المتجه إلى هامبورغ مروراً بهانوفر سيتأخر من المتوقع 45 دقيقة بسبب عطل في السكة.',
          grammarNote: 'حرف الجر السببي (wegen = بسبب) يتبعه حالة المضاف إليه Genitiv: wegen einer Störung.'
        },
        {
          speaker: 'Nadia (نادية)',
          avatar: '👩🏽',
          role: 'protagonist',
          de: 'Oh nein! Wenn der Zug so spät ankommt, **verpasse** ich auf jeden Fall meinen **Anschlusszug** in Hannover. Ich gehe schnell zum DB-Reisezentrum.',
          ar: 'أوه لا! إذا وصل القطار متأخراً هكذا، فسيفوتني بكل تأكيد قطار المتابعة في هانوفر. سأذهب بسرعة إلى مركز خدمة المسافرين.',
          grammarNote: 'الفعل (verpassen = يفوّت قطاراً أو موعداً) فعل غير منفصل لأن البادئة (ver-) لا تنفصل أبداً.'
        },
        {
          speaker: 'DB-Mitarbeiter (موظف القطار)',
          avatar: '🧑‍✈️',
          role: 'staff',
          de: 'Guten Tag! Was kann ich für Sie tun? Zeigen Sie mir bitte kurz Ihre **Fahrkarte**.',
          ar: 'طاب يومك! ماذا يمكنني أن أفعل من أجلك؟ أريني من فضلك تذكرتك سريعاً.',
          grammarNote: 'الفعل (zeigen = يُري/يعرض) يأخذ الشخص في حالة Dativ (mir) والشيء في حالة Akkusativ (Ihre Fahrkarte).'
        },
        {
          speaker: 'Nadia (نادية)',
          avatar: '👩🏽',
          role: 'protagonist',
          de: 'Hier ist mein **Sparpreis-Ticket** auf dem Handy. Mein ICE hat 45 Minuten Verspätung, deshalb schaffe ich den Anschluss in Hannover nicht mehr. Darf ich einen anderen Zug nehmen?',
          ar: 'ها هي تذكرتي المخفضة على الهاتف. قطاري متأخر 45 دقيقة، ولذلك لن ألحق بقطار المتابعة في هانوفر. هل يُسمح لي بأخذ قطار آخر؟',
          grammarNote: 'التعبير (ich schaffe den Anschluss nicht = لن أتمكن من اللحاق بقطار الربط).'
        },
        {
          speaker: 'DB-Mitarbeiter (موظف القطار)',
          avatar: '🧑‍✈️',
          role: 'staff',
          de: 'Ja, natürlich! Ab 20 Minuten erwarteter Verspätung ist die **Zugbindung** automatisch **aufgehoben**. Sie dürfen jede andere Verbindung zum Zielort nutzen.',
          ar: 'نعم بالتأكيد! ابتداءً من 20 دقيقة تأخير متوقع يُلغى إلزام القطار المحدد تلقائياً. يحق لكِ استخدام أي رحلة أخرى نحو وجهتك.',
          grammarNote: 'معلومة ذهبية في ألمانيا: (die Zugbindung ist aufgehoben = سقوط شرط الارتباط بقطار محدد عند تأخر القطار 20 دقيقة أو أكثر).'
        },
        {
          speaker: 'DB-Mitarbeiter (موظف القطار)',
          avatar: '🧑‍✈️',
          role: 'staff',
          de: 'Schauen Sie: In zehn Minuten fährt ein direkter IC von **Gleis 11 gegenüber** ab. Damit müssen Sie gar nicht umsteigen!',
          ar: 'انظري: بعد عشر دقائق ينطلق قطار IC مباشر من الرصيف 11 المقابل. وبهذا لن تضطري لتبديل القطار أبداً!',
          grammarNote: 'الفعل المنفصل (abfahren = ينطلق/يغادر للمركبات والقطارات): fährt ... ab.'
        },
        {
          speaker: 'Nadia (نادية)',
          avatar: '👩🏽',
          role: 'protagonist',
          de: 'Das ist ja eine tolle Nachricht! Vielen Dank für Ihre schnelle Hilfe. Ich laufe sofort zu Gleis 11. Einen schönen Tag noch!',
          ar: 'يا له من خبر رائع! شكراً جزيلاً على مساعدتك السريعة. سأركض فوراً إلى الرصيف 11. أتمنى لك يوماً جميلاً!',
          grammarNote: 'تحية الوداع اليومية المهذبة في ألمانيا هي (Einen schönen Tag noch! = أتمنى لك بقية يوم جميل) وهي في حالة Akkusativ.'
        }
      ],
      vocabulary: [
        { word: 'die Verspätung', plural: 'die Verspätungen', ar: 'التأخير (في المواعيد أو القطارات)', example: 'Der Zug hat leider 30 Minuten Verspätung.' },
        { word: 'das Gleis', plural: 'die Gleise', ar: 'رصيف السكة الحديدية', example: 'Der Zug nach München fährt heute von Gleis 9 ab.' },
        { word: 'der Anschlusszug', plural: 'die Anschlusszüge', ar: 'قطار المتابعة / قطار الربط', example: 'Hoffentlich verpasse ich meinen Anschlusszug nicht.' },
        { word: 'umsteigen', plural: 'stieg um / ist umgestiegen', ar: 'يبدّل القطار أو الحافلة', example: 'In Mannheim müssen Sie einmal umsteigen.' },
        { word: 'verpassen', plural: 'verpasste / hat verpasst', ar: 'يفوّت (قطاراً / حافلة / موعداً)', example: 'Ich bin zu spät losgegangen und habe den Bus verpasst.' },
        { word: 'die Durchsage', plural: 'die Durchsagen', ar: 'الإعلان الصوتي عبر مكبرات المحطة', example: 'Bitte achten Sie auf die Durchsagen am Bahnsteig.' },
        { word: 'die Zugbindung', plural: 'die Zugbindungen', ar: 'شرط الالتزام بقطار محدد في التذاكر المخفضة', example: 'Bei großer Verspätung ist die Zugbindung aufgehoben.' }
      ],
      quiz: [
        {
          question: 'لماذا قلقت نادية عندما سمعت الإعلان الصوتي (die Durchsage)؟',
          options: [
            'لأن قطارها تأخر 45 دقيقة وستفوّت قطار المتابعة (Anschlusszug) في هانوفر',
            'لأنها نسيت حقيبتها داخل القطار',
            'لأنها اشترت تذكرة إلى مدينة خاطئة',
            'لأن هاتفها نفد شحنه بالكامل'
          ],
          correctIndex: 0,
          explanation: 'قالت نادية: Wenn der Zug so spät ankommt, verpasse ich auf jeden Fall meinen Anschlusszug in Hannover.'
        },
        {
          question: 'متى يسقط شرط الالتزام بقطار محدد (Zugbindung aufgehoben) في شركة القطارات الألمانية DB؟',
          options: [
            'عندما يتأخر القطار بمقدار 20 دقيقة أو أكثر عند الوصول المتوقع',
            'فقط عندما يتأخر القطار 5 ساعات كاملة',
            'في أيام الأحد والعطلات الرسمية فقط',
            'لا يسقط أبداً ويجب شراء تذكرة جديدة دائماً'
          ],
          correctIndex: 0,
          explanation: 'أوضح موظف القطار: Ab 20 Minuten erwarteter Verspätung ist die Zugbindung automatisch aufgehoben.'
        },
        {
          question: 'ما هو الحل البديل الأفضل الذي اقترحه الموظف على نادية؟',
          options: [
            'ركوب قطار IC مباشر ينطلق بعد 10 دقائق من الرصيف 11 بدون تبديل',
            'الانتظار في الفندق حتى صباح اليوم التالي',
            'استئجار سيارة أجرة على حسابها الخاص',
            'إلغاء الرحلة والعودة إلى البيت'
          ],
          correctIndex: 0,
          explanation: 'قال الموظف: In zehn Minuten fährt ein direkter IC von Gleis 11 gegenüber ab. Damit müssen Sie gar nicht umsteigen!'
        }
      ]
    },

    // =========================================================================
    // 6. vorstellungsgespraech (B1)
    // =========================================================================
    {
      id: 'vorstellungsgespraech',
      icon: '💼',
      level: 'B1',
      category: 'العمل والتقديم الوظيفي (Bewerbung)',
      titleDe: 'Das Vorstellungsgespräch bei der Firma Müller',
      titleAr: 'يوم مقابلة العمل في شركة مولر',
      summaryDe: 'Tariq hat ein Vorstellungsgespräch für eine Stelle als IT-Systemelektroniker. Die Personalchefin Frau Bergmann stellt ihm Fragen zu seinen Stärken und Erfahrungen.',
      summaryAr: 'يجري طارق مقابلة عمل لوظيفة فني أنظمة تقنية معلومات، وتطرح عليه مديرة الموارد البشرية السيدة بيرغمان أسئلة حول نقاط قوته وخبراته.',
      lines: [
        {
          speaker: 'الراوي (Erzähler)',
          avatar: '📖',
          role: 'narrator',
          de: 'Tariq hat vor zwei Wochen eine **Bewerbung** mit **Lebenslauf** und **Anschreiben** an die Firma Müller geschickt. Heute wurde er zum **Vorstellungsgespräch** eingeladen.',
          ar: 'أرسل طارق قبل أسبوعين طلب توظيف مرفقاً بالسيرة الذاتية وخطاب الدافع إلى شركة مولر. واليوم تمت دعوته لإجراء مقابلة العمل.',
          grammarNote: 'المبني للمجهول في الماضي (Passiv Präteritum): (wurde ... eingeladen = تَمّت دعوته).'
        },
        {
          speaker: 'Frau Bergmann (مديرة الموارد البشرية)',
          avatar: '👩‍💼',
          role: 'manager',
          de: 'Guten Tag, Herr Tariq! Schön, dass Sie heute da sind. Haben Sie unsere Firma problemlos **gefunden**? Möchten Sie zuerst ein Glas Wasser?',
          ar: 'طاب يومك يا سيد طارق! من الجميل أنك معنا اليوم. هل وجدت شركتنا دون صعوبة؟ هل تود أولاً كأساً من الماء؟',
          grammarNote: 'في بداية مقابلات العمل في ألمانيا يُطرح دائماً سؤال كسر الجليد اللطيف: (Haben Sie gut zu uns gefunden?).'
        },
        {
          speaker: 'Tariq (طارق)',
          avatar: '🧔🏻‍♂️',
          role: 'protagonist',
          de: 'Guten Tag, Frau Bergmann! Vielen Dank für die **Einladung**. Ja, die U-Bahn-Verbindung war sehr gut, und ich nehme gerne ein Glas stilles Wasser.',
          ar: 'طاب يومك يا سيدة بيرغمان! شكراً جزيلاً على الدعوة. نعم، كانت مواصلات المترو ممتازة، ويسعدني أخذ كأس من الماء العادي.',
          grammarNote: 'حرف الجر (für) بعد الشكر (Vielen Dank für + Akkusativ): für die Einladung.'
        },
        {
          speaker: 'Frau Bergmann (مديرة الموارد البشرية)',
          avatar: '👩‍💼',
          role: 'manager',
          de: 'Wir haben Ihren Lebenslauf mit großem Interesse gelesen. Können Sie sich bitte kurz **vorstellen** und erklären, warum Sie sich für diese **Stelle** beworben haben?',
          ar: 'لقد قرأنا سيرتك الذاتية باهتمام كبير. هل يمكنك تقديم نفسك باختصار وشرح سبب تقديمك لهذه الوظيفة؟',
          grammarNote: 'الفعل الانعكاسي (sich bewerben um / für + Akkusativ = يتقدم بطلب لوظيفة): warum Sie sich für diese Stelle beworben haben.'
        },
        {
          speaker: 'Tariq (طارق)',
          avatar: '🧔🏻‍♂️',
          role: 'protagonist',
          de: 'Sehr gerne. Ich habe bereits zwei Jahre **Berufserfahrung** im technischen Support gesammelt. Ihr Unternehmen ist für innovative Netzwerktechnik bekannt, und genau in diesem Bereich möchte ich mich **weiterentwickeln**.',
          ar: 'بكل سرور. لقد اكتسبت بالفعل خبرة مهنية لمدة عامين في الدعم الفني. وشركتكم معروفة بتقنيات الشبكات المبتكرة، وفي هذا المجال تحديداً أرغب في تطوير نفسي.',
          grammarNote: 'التعبير الاحترافي في المقابلات: (Berufserfahrung sammeln = يكتسب خبرة مهنية) و(sich weiterentwickeln = يطور نفسه مهنياً).'
        },
        {
          speaker: 'Frau Bergmann (مديرة الموارد البشرية)',
          avatar: '👩‍💼',
          role: 'manager',
          de: 'Was würden Sie als Ihre größten **Stärken** bezeichnen, und wie gehen Sie mit stressigen Situationen im **Team** um?',
          ar: 'ما الذي تصفه بأنه أكبر نقاط قوتك، وكيف تتعامل مع المواقف الضاغطة داخل فريق العمل؟',
          grammarNote: 'الفعل المنفصل المهم جداً (umgehen mit + Dativ = يتعامل مع): wie gehen Sie mit stressigen Situationen um?'
        },
        {
          speaker: 'Tariq (طارق)',
          avatar: '🧔🏻‍♂️',
          role: 'protagonist',
          de: 'Ich bin sehr **zuverlässig**, lerne schnell neue Programme und arbeite gerne **teamorientiert**. Unter Zeitdruck bleibe ich ruhig und erledige die Aufgaben Schritt für Schritt nach Priorität.',
          ar: 'أنا شخص يعتمد عليه جداً، أتعلم البرامج الجديدة بسرعة وأحب العمل بروح الفريق. وتحت ضغط الوقت أبقى هادئاً وأنجز المهام خطوة بخطوة حسب الأولوية.',
          grammarNote: 'الصفات الذهبية في مقابلات العمل الألمانية: (zuverlässig = موثوق/يعتمد عليه)، (teamorientiert = متعاون مع الفريق)، (pünktlich = دقيق في المواعيد).'
        },
        {
          speaker: 'Frau Bergmann (مديرة الموارد البشرية)',
          avatar: '👩‍💼',
          role: 'manager',
          de: 'Das klingt überzeugend! Wir laden Sie gerne nächste Woche zu einem **Probearbeitstag** ein, damit Sie das Team persönlich **kennenlernen**.',
          ar: 'هذا يبدو مقنعاً! يسعدنا دعوتك الأسبوع القادم ليوم عمل تجريبي لكي تتعرف على الفريق شخصياً.',
          grammarNote: 'الرابط الغائي (damit = لكي) يربط جملتين مختلفتي الفاعل ويدفع الفعل إلى آخر الجملة الفرعية: damit Sie das Team kennenlernen.'
        }
      ],
      vocabulary: [
        { word: 'das Vorstellungsgespräch', plural: 'die Vorstellungsgespräche', ar: 'مقابلة العمل الشخصية', example: 'Ich bereite mich gut auf das Vorstellungsgespräch vor.' },
        { word: 'der Lebenslauf', plural: 'die Lebensläufe', ar: 'السيرة الذاتية (CV)', example: 'Der Lebenslauf sollte übersichtlich und aktuell sein.' },
        { word: 'die Berufserfahrung', plural: 'die Berufserfahrungen', ar: 'الخبرة المهنية العملية', example: 'Er hat schon drei Jahre Berufserfahrung gesammelt.' },
        { word: 'die Stärke', plural: 'die Stärken', ar: 'نقطة القوة (في الشخصية أو المهارات)', example: 'Zu meinen Stärken gehören Geduld und Zuverlässigkeit.' },
        { word: 'zuverlässig', plural: '—', ar: 'موثوق / يُعتمد عليه', example: 'Unser neuer Kollege ist pünktlich und sehr zuverlässig.' },
        { word: 'sich weiterentwickeln', plural: 'entwickelte sich weiter', ar: 'يطوّر نفسه ويتقدم مهنياً', example: 'In dieser Firma kann man sich fachlich gut weiterentwickeln.' },
        { word: 'der Probearbeitstag', plural: 'die Probearbeitstage', ar: 'يوم عمل تجريبي للتعرف على الشركة', example: 'Nach dem Gespräch hatte ich einen Probearbeitstag.' }
      ],
      quiz: [
        {
          question: 'ما هي الخبرة السابقة التي يمتلكها طارق وذكرها في المقابلة؟',
          options: [
            'عامان من الخبرة المهنية في الدعم الفني (zwei Jahre Berufserfahrung im technischen Support)',
            'عشر سنوات كطاهٍ في مطعم إيطالي',
            'ليس لديه أي خبرة سابقة على الإطلاق',
            'عمل كطبيب أسنان لمدة خمس سنوات'
          ],
          correctIndex: 0,
          explanation: 'قال طارق: Ich habe bereits zwei Jahre Berufserfahrung im technischen Support gesammelt.'
        },
        {
          question: 'كيف يتصرف طارق عندما يكون تحت ضغط الوقت (unter Zeitdruck)؟',
          options: [
            'يبقى هادئاً وينجز المهام خطوة بخطوة حسب الأولوية',
            'يترك العمل فوراً ويذهب إلى المنزل',
            'يتشاجر مع زملائه في القسم',
            'يغلق هاتفه وحاسوبه ولا يرد على أحد'
          ],
          correctIndex: 0,
          explanation: 'قال طارق: Unter Zeitdruck bleibe ich ruhig und erledige die Aufgaben Schritt für Schritt nach Priorität.'
        },
        {
          question: 'ماذا عرضت السيدة بيرغمان على طارق في نهاية المقابلة؟',
          options: [
            'دعوته الأسبوع القادم إلى يوم عمل تجريبي (Probearbeitstag) للتعرف على الفريق',
            'رفض طلبه لأن الشركة لا تحتاج موظفين',
            'تأجيل المقابلة لمدة ستة أشهر',
            'السفر إلى أمريكا غداً صباحاً'
          ],
          correctIndex: 0,
          explanation: 'قالت المديرة: Wir laden Sie gerne nächste Woche zu einem Probearbeitstag ein, damit Sie das Team persönlich kennenlernen.'
        }
      ]
    },

    // =========================================================================
    // 7. restaurant-bestellung (A1/A2)
    // =========================================================================
    {
      id: 'restaurant-bestellung',
      icon: '🍽️',
      level: 'A1/A2',
      category: 'المطاعم والحياة اليومية',
      titleDe: 'Im Restaurant bestellen und reklamieren',
      titleAr: 'في المطعم: الطلب وتصحيح خطأ والحساب',
      summaryDe: 'Omar und sein Freund Lukas gehen abends in ein Restaurant. Sie bestellen Essen, reklamieren höflich eine kalte Suppe und bezahlen am Ende getrennt.',
      summaryAr: 'يذهب عمر وصديقه لوكاس مساءً إلى مطعم، فيطلبان الطعام، ثم يشتكيان بلطف لأن الحساء بارد، وفي النهاية يدفع كل منهما حسابه بشكل منفصل.',
      lines: [
        {
          speaker: 'Kellner (النادل)',
          avatar: '🤵',
          role: 'staff',
          de: 'Guten Abend! Haben Sie einen Tisch **reserviert**, oder suchen Sie einen Platz für zwei Personen?',
          ar: 'مساء الخير! هل حجزتما طاولة مسبقاً، أم تبحثان عن مكان لشخصين؟',
          grammarNote: 'الأفعال المنتهية بـ (-ieren) مثل (reservieren) لا تأخذ البادئة (ge-) في اسم المفعول: hat reserviert.'
        },
        {
          speaker: 'Omar (عمر)',
          avatar: '🧑🏻',
          role: 'protagonist',
          de: 'Guten Abend! Wir haben nicht reserviert. Ist der Tisch dort **am Fenster** noch frei? Und bringen Sie uns bitte die **Speisekarte**!',
          ar: 'مساء الخير! لم نحجز مسبقاً. هل الطاولة هناك بجانب النافذة ما زالت شاغرة؟ وأحضر لنا من فضلك قائمة الطعام!',
          grammarNote: 'المكان الثابت مع حرف الجر (an + Dativ): (am Fenster = an dem Fenster = بجانب النافذة).'
        },
        {
          speaker: 'Kellner (النادل)',
          avatar: '🤵',
          role: 'staff',
          de: 'Ja, gerne! Hier sind die Speisekarten. Was möchten Sie zuerst **trinken**, und haben Sie schon ein **Hauptgericht** gewählt?',
          ar: 'نعم بكل سرور! تفضلا قوائم الطعام. ماذا تودان أن تشربا أولاً، وهل اخترتما الطبق الرئيسي بالفعل؟',
          grammarNote: 'في المطاعم الألمانية يسأل النادل دائماً عن المشروبات أولاً ثم يعود لأخذ طلب الطعام.'
        },
        {
          speaker: 'Omar (عمر)',
          avatar: '🧑🏻',
          role: 'protagonist',
          de: ' **Ich hätte gern** eine Apfelschorle und als **Vorspeise** die Tomatensuppe. Als Hauptgericht **nehme ich** den gegrillten Lachs mit Reis und Salat.',
          ar: 'أود من فضلك عصير تفاح فوار، وكمقبّلات حساء الطماطم. وكطبق رئيسي سآخذ السلمون المشوي مع الأرز والسلطة.',
          grammarNote: 'أفضل صيغة مهذبة للطلب في ألمانيا هي Konjunktiv II: (Ich hätte gern... = أود الحصول على...) أو (Ich nehme... = سآخذ...).'
        },
        {
          speaker: 'Omar (عمر)',
          avatar: '🧑🏻',
          role: 'protagonist',
          de: 'Entschuldigung! Die Tomatensuppe ist leider fast **kalt**, und mir fehlt auch ein **Löffel**. Könnten Sie die Suppe bitte noch einmal warm machen?',
          ar: 'عفواً! حساء الطماطم للأسف شبه بارد، كما تنقصني ملعقة. هل يمكنك من فضلك تسخين الحساء مرة أخرى؟',
          grammarNote: 'للطلب بأدب شديد عند وجود مشكلة أو شكوى (reklamieren) نستخدم (Könnten Sie bitte...? = هلّا تفضلتم بـ...؟).'
        },
        {
          speaker: 'Kellner (النادل)',
          avatar: '🤵',
          role: 'staff',
          de: 'Oh, das **tut mir sehr leid**! Ich bringe Ihnen sofort eine frische, heiße Suppe und natürlich einen sauberen Löffel.',
          ar: 'أوه، أنا آسف جداً لذلك! سأحضر لك فوراً حساءً ساخناً وطازجاً وبالطبع ملعقة نظيفة.',
          grammarNote: 'عبارة الاعتذار الأساسية: (Das tut mir sehr leid! = هذا يؤسفني جداً / أنا آسف بشدة).'
        },
        {
          speaker: 'Lukas (لوكاس)',
          avatar: '👱‍♂️',
          role: 'friend',
          de: 'Der Lachs und die Bratkartoffeln haben **ausgezeichnet** geschmeckt! Herr Ober, **wir möchten bitte bezahlen**.',
          ar: 'السلمون والبطاطس المحمرة كان طعمهما ممتازاً! يا نادل، نود دفع الحساب من فضلك.',
          grammarNote: 'للسؤال عن الفاتورة في المطعم نقول: (Wir möchten bitte bezahlen!) أو باختصار: (Die Rechnung, bitte!).'
        },
        {
          speaker: 'Kellner (النادل)',
          avatar: '🤵',
          role: 'staff',
          de: 'Hat alles gepasst? Zahlen Sie **zusammen oder getrennt**? — Getrennt? Das macht für Sie 24,50 Euro. — „Machen Sie 27 Euro, **stimmt so**!“ — Vielen herzlichen Dank!',
          ar: 'هل كان كل شيء على ما يرام؟ هل تدفعان معاً أم كل شخص على حدة؟ — بشكل منفصل؟ الحساب لك 24.50 يورو. — "اجعلها 27 يورو، احتفظ بالباقي!" — شكراً جزيلاً من القلب!',
          grammarNote: 'العبارة (Stimmt so! = الحساب مضبوط هكذا / احتفظ بالباقي كبقشيش Trinkgeld) تُستخدم دائماً عند الدفع في المطاعم والمقاهي.'
        }
      ],
      vocabulary: [
        { word: 'die Speisekarte', plural: 'die Speisekarten', ar: 'قائمة الطعام (المنيو)', example: 'Können Sie uns bitte die Speisekarte bringen?' },
        { word: 'die Vorspeise', plural: 'die Vorspeisen', ar: 'المقبّلات (قبل الطبق الرئيسي)', example: 'Als Vorspeise nehme ich einen kleinen Salat.' },
        { word: 'das Hauptgericht', plural: 'die Hauptgerichte', ar: 'الطبق الرئيسي', example: 'Was empfiehlt der Koch heute als Hauptgericht?' },
        { word: 'reklamieren', plural: 'reklamierte / hat reklamiert', ar: 'يقدم شكوى / يطلب استبدال طلب خاطئ', example: 'Das Essen war kalt, deshalb habe ich höflich reklamiert.' },
        { word: 'zusammen oder getrennt', plural: '—', ar: 'معاً أم بشكل منفصل؟ (عند دفع الفاتورة)', example: 'Der Kellner fragt immer: Zahlen Sie zusammen oder getrennt?' },
        { word: 'das Trinkgeld', plural: 'die Trinkgelder', ar: 'البقشيش / الإكرامية', example: 'In Deutschland gibt man etwa 5 bis 10 Prozent Trinkgeld.' },
        { word: 'Stimmt so!', plural: '—', ar: 'احتفظ بالباقي! (تقال للنادل عند إعطاء البقشيش)', example: 'Hier sind 30 Euro, stimmt so!' }
      ],
      quiz: [
        {
          question: 'ما هي المشكلة التي اشتكى منها عمر بلطف عندما وصل الطلب الأول؟',
          options: [
            'كان حساء الطماطم بارداً تقريباً وكانت تنقصه ملعقة (Löffel)',
            'أحضر النادل بيتزا بدلاً من السمك',
            'كان العصير مالحاً جداً',
            'لم يكن هناك كراسي كافية حول الطاولة'
          ],
          correctIndex: 0,
          explanation: 'قال عمر للنادل: Die Tomatensuppe ist leider fast kalt, und mir fehlt auch ein Löffel.'
        },
        {
          question: 'ماذا يعني سؤال النادل الشهير في ألمانيا: „Zahlen Sie zusammen oder getrennt?“',
          options: [
            'هل تدفعون الحساب معاً بفاتورة واحدة أم يدفع كل شخص حسابه بشكل منفصل؟',
            'هل تريدون الأكل داخل المطعم أم سفري؟',
            'هل تدفعون نقداً أم بالبطاقة البنكية؟',
            'هل تريدون القهوة قبل الأكل أم بعده؟'
          ],
          correctIndex: 0,
          explanation: '(zusammen = معاً) و(getrennt = بشكل منفصل لكل شخص).'
        },
        {
          question: 'عندما كان الحساب 24,50 يورو وقال عمر للنادل: „Machen Sie 27 Euro, stimmt so!“ — ماذا يقصد بعبارة (Stimmt so)؟',
          options: [
            'احتفظ بالباقي كبقشيش (Trinkgeld) ولا تُرجع الفكة',
            'الحساب خاطئ وأريد التحدث مع المدير',
            'أريد طلب وجبة إضافية بقيمة 27 يورو',
            'سأدفع المبلغ الأسبوع القادم'
          ],
          correctIndex: 0,
          explanation: 'عبارة (Stimmt so!) هي الطريقة الألمانية الطبيعية لإعطاء الإكرامية (Trinkgeld) للنادل.'
        }
      ]
    },

    // =========================================================================
    // 8. bank-konto (A2/B1)
    // =========================================================================
    {
      id: 'bank-konto',
      icon: '🏦',
      level: 'A2/B1',
      category: 'البنوك والشؤون المالية',
      titleDe: 'Ein Girokonto bei der Bank eröffnen',
      titleAr: 'فتح حساب بنكي جارٍ في ألمانيا',
      summaryDe: 'Amira braucht ein deutsches Girokonto für ihr Gehalt und die Miete. In der Bankfiliale spricht sie mit Herrn Keller über Kontoführungsgebühren, Girocard und Daueraufträge.',
      summaryAr: 'تحتاج أميرة إلى حساب بنكي ألماني جارٍ لاستلام راتبها ودفع الإيجار، فتتحدث مع موظف البنك السيد كيلر حول رسوم الحساب وبطاقة الصراف والتحويل الدائم.',
      lines: [
        {
          speaker: 'الراوي (Erzähler)',
          avatar: '📖',
          role: 'narrator',
          de: 'Amira hat nächste Woche ihren ersten Arbeitstag in Stuttgart. Damit ihr Arbeitgeber das **Gehalt** **überweisen** kann, braucht sie dringend ein deutsches **Girokonto**.',
          ar: 'تبدأ أميرة الأسبوع القادم أول يوم عمل لها في شتوتغارت. ولكي يتمكن صاحب العمل من تحويل الراتب، تحتاج بشكل عاجل إلى حساب بنكي جارٍ ألماني.',
          grammarNote: 'الفرق المهم: (das Girokonto = الحساب الجاري للرواتب والفواتير) أما (das Sparkonto = حساب التوفير).'
        },
        {
          speaker: 'Herr Keller (موظف البنك)',
          avatar: '👨‍💼',
          role: 'staff',
          de: 'Guten Tag, Frau Amira! Sie möchten heute bei uns ein Girokonto **eröffnen**, richtig? Haben Sie Ihren **Ausweis** und Ihre **Meldebestätigung** mitgebracht?',
          ar: 'طاب يومك يا سيدة أميرة! تودين اليوم فتح حساب جارٍ لدينا، أليس كذلك؟ هل أحضرتِ هويتك وشهادة تسجيل السكن؟',
          grammarNote: 'مع الحساب البنكي أو الشركة نستخدم دائماً الفعل (eröffnen = يفتتح رسمياً) وليس (öffnen).'
        },
        {
          speaker: 'Amira (أميرة)',
          avatar: '👩🏻‍💼',
          role: 'protagonist',
          de: 'Guten Tag, Herr Keller! Ja, hier sind mein Reisepass, mein **Aufenthaltstitel**, die Meldebestätigung und auch meine **Steuer-Identifikationsnummer**.',
          ar: 'طاب يومك يا سيد كيلر! نعم، تفضل جواز سفري، وتصريح إقامتي، وشهادة تسجيل السكن وكذلك رقم التعريف الضريبي الخاص بي.',
          grammarNote: 'عند فتح حساب بنكي في ألمانيا تُطلب غالباً: الهوية/الجواز، إثبات السكن (Meldebestätigung)، ورقم الضرائب (Steuer-ID).'
        },
        {
          speaker: 'Herr Keller (موظف البنك)',
          avatar: '👨‍💼',
          role: 'staff',
          de: 'Hervorragend, Sie sind bestens vorbereitet! Wenn jeden Monat mindestens 700 Euro Gehalt auf das Konto eingehen, zahlen Sie **keine Kontoführungsgebühren**.',
          ar: 'ممتاز جداً، أنتِ مستعدة على أفضل وجه! إذا دخل إلى الحساب شهرياً راتب لا يقل عن 700 يورو، فلن تدفعي أي رسوم لإدارة الحساب.',
          grammarNote: 'الفعل المنفصل (eingehen = يدخل/يرد إلى الحساب أو البريد): wenn 700 Euro auf das Konto eingehen.'
        },
        {
          speaker: 'Amira (أميرة)',
          avatar: '👩🏻‍💼',
          role: 'protagonist',
          de: 'Das klingt sehr fair! Wie lange dauert es, bis ich meine **Girocard** und die **Geheimzahl (PIN)** per Post bekomme? Und kann ich **Online-Banking** nutzen?',
          ar: 'هذا يبدو عادلاً جداً! كم يستغرق الأمر حتى أستلم بطاقة الصراف والرقم السري عبر البريد؟ وهل يمكنني استخدام الخدمات المصرفية عبر الإنترنت؟',
          grammarNote: 'في ألمانيا، لأسباب أمنية، تُرسل البطاقة البنكية (Girocard) والرقم السري (PIN) في رسالتين بريديتين منفصلتين.'
        },
        {
          speaker: 'Herr Keller (موظف البنك)',
          avatar: '👨‍💼',
          role: 'staff',
          de: 'Die Karte und die PIN kommen aus Sicherheitsgründen in zwei getrennten Briefen innerhalb von fünf Werktagen. Das Online-Banking schalten wir heute schon frei.',
          ar: 'تصل البطاقة والرقم السري لأسباب أمنية في رسالتين منفصلتين خلال خمسة أيام عمل. أما تطبيق البنك الإلكتروني فسنفعّله لكِ اليوم بالفعل.',
          grammarNote: 'الفعل المنفصل (freischalten = يفعّل خدمة إلكترونية أو حساباً): schalten wir heute frei.'
        },
        {
          speaker: 'Amira (أميرة)',
          avatar: '👩🏻‍💼',
          role: 'protagonist',
          de: 'Sehr praktisch! Kann ich in der App auch einen **Dauerauftrag** für meine Miete **einrichten**, damit das Geld jeden Monat am Ersten automatisch überwiesen wird?',
          ar: 'عملي جداً! هل يمكنني في التطبيق أيضاً إعداد أمر تحويل دائم لإيجار شقتي، بحيث يتم تحويل المبلغ تلقائياً في الأول من كل شهر؟',
          grammarNote: 'المصطلح البنكي المهم: (einen Dauerauftrag einrichten = ينشئ أمر دفع شهري ثابت وتلقائي للإيجار مثلاً).'
        },
        {
          speaker: 'Herr Keller (موظف البنك)',
          avatar: '👨‍💼',
          role: 'staff',
          de: 'Selbstverständlich! Und hier auf diesem Blatt steht schon Ihre neue **IBAN**. Diese Nummer können Sie heute direkt Ihrem Arbeitgeber mitteilen.',
          ar: 'بكل تأكيد! وهنا على هذه الورقة مكتوب بالفعل رقم الآيبان (IBAN) الجديد الخاص بك. يمكنك إبلاغ صاحب العمل بهذا الرقم اليوم مباشرة.',
          grammarNote: 'الفعل المنفصل (mitteilen = يُبلغ/يُعلم شخصاً بمعلومة): Ihrem Arbeitgeber (Dativ) Ihre IBAN (Akkusativ) mitteilen.'
        }
      ],
      vocabulary: [
        { word: 'das Girokonto', plural: 'die Girokonten', ar: 'الحساب البنكي الجاري', example: 'Ich möchte ein kostenloses Girokonto eröffnen.' },
        { word: 'die Kontoführungsgebühr', plural: 'die Kontoführungsgebühren', ar: 'رسوم إدارة الحساب الشهري', example: 'Für Studenten gibt es oft keine Kontoführungsgebühren.' },
        { word: 'überweisen', plural: 'überwies / hat überwiesen', ar: 'يحوّل مبلغاً مالياً بنكياً', example: 'Der Arbeitgeber überweist das Gehalt am Monatsende.' },
        { word: 'der Dauerauftrag', plural: 'die Daueraufträge', ar: 'أمر تحويل مالي شهري ثابت وتلقائي', example: 'Für die Miete habe ich einen Dauerauftrag eingerichtet.' },
        { word: 'die Geheimzahl (PIN)', plural: 'die Geheimzahlen', ar: 'الرقم السري لبطاقة البنك', example: 'Geben Sie bitte Ihre Geheimzahl am Geldautomaten ein.' },
        { word: 'der Geldautomat', plural: 'die Geldautomaten', ar: 'جهاز الصراف الآلي (ATM)', example: 'Ich muss noch Bargeld am Geldautomaten abheben.' },
        { word: 'Bargeld abheben', plural: 'hob ab / hat abgehoben', ar: 'يسحب نقوداً كاش من الصراف', example: 'Mit der Girocard kann man kostenlos Bargeld abheben.' }
      ],
      quiz: [
        {
          question: 'لماذا تحتاج أميرة إلى فتح حساب بنكي جارٍ (Girokonto) بشكل عاجل؟',
          options: [
            'لكي يتمكن صاحب العمل من تحويل راتبها ولدفع الإيجار الشهري',
            'لأنها تريد شراء تذكرة قطار ليوم واحد',
            'لأن الطبيب طلب منها فتح حساب بنكي',
            'لأنها تريد السفر في إجازة إلى إسبانيا'
          ],
          correctIndex: 0,
          explanation: 'ذكر الراوي وأميرة أنها تحتاج الحساب لاستلام الراتب (Gehalt überweisen) وإعداد تحويل شهري للإيجار (Miete).'
        },
        {
          question: 'كيف يرسل البنك البطاقة البنكية (Girocard) والرقم السري (PIN) في ألمانيا؟',
          options: [
            'في رسالتين بريديتين منفصلتين لأسباب أمنية خلال 5 أيام عمل',
            'يرسلهما عبر رسالة واتساب فورية',
            'يكتب الرقم السري بخط كبير فوق البطاقة نفسها',
            'يرسلهما بعد مرور سنة كاملة'
          ],
          correctIndex: 0,
          explanation: 'قال الموظف: Die Karte und die PIN kommen aus Sicherheitsgründen in zwei getrennten Briefen innerhalb von fünf Werktagen.'
        },
        {
          question: 'ما هي وظيفة (der Dauerauftrag) التي سألت عنها أميرة؟',
          options: [
            'تحويل مبلغ ثابت (مثل الإيجار) تلقائياً في موعد محدد من كل شهر',
            'إغلاق الحساب البنكي نهائياً',
            'طلب قرض لشراء مصنع',
            'تغيير عنوان السكن في البلدية'
          ],
          correctIndex: 0,
          explanation: 'أمر الدفع الدائم (Dauerauftrag) يُستخدم لتحويل مبالغ ثابتة ومتكررة مثل الإيجار الشهري تلقائياً.'
        }
      ]
    },

    // =========================================================================
    // 9. nachbarn-hilfe (A2)
    // =========================================================================
    {
      id: 'nachbarn-hilfe',
      icon: '🤝',
      level: 'A2',
      category: 'الحياة الاجتماعية والجيران',
      titleDe: 'Gute Nachbarn im neuen Haus',
      titleAr: 'التعرف على الجيران وطلب مساعدة',
      summaryDe: 'Hassan ist neu ins Haus eingezogen. Er klingelt bei seiner Nachbarin Frau Krause, stellt sich vor, fragt nach der Mülltrennung und bittet sie, ein Paket anzunehmen.',
      summaryAr: 'انتقل حسن حديثاً إلى المبنى، فيقرع جرس جارته السيدة كراوزه ليعرّفها بنفسه، ويسألها عن نظام فرز القمامة ويطلب منها استلام طرد بريدي.',
      lines: [
        {
          speaker: 'الراوي (Erzähler)',
          avatar: '📖',
          role: 'narrator',
          de: 'Hassan wohnt seit Samstag im zweiten Stock. Heute **klingelt** er bei seiner **Nachbarin** Frau Krause nebenan, um sich höflich **vorzustellen**.',
          ar: 'يسكن حسن منذ يوم السبت في الطابق الثاني. واليوم يقرع الجرس عند جارته السيدة كراوزه في الشقة المجاورة ليقدم نفسه بلطف.',
          grammarNote: 'الفعل الانعكاسي (sich vorstellen = يقدّم نفسه ويعرّف بها) يأخذ الضمير الانعكاسي في حالة Akkusativ.'
        },
        {
          speaker: 'Hassan (حسن)',
          avatar: '🧑🏻',
          role: 'protagonist',
          de: 'Guten Tag! Ich heiße Hassan und bin am Wochenende in die Wohnung **nebenan** eingezogen. Ich wollte einfach mal kurz Hallo sagen!',
          ar: 'طاب يومك! اسمي حسن وقد انتقلت في عطلة نهاية الأسبوع إلى الشقة المجاورة. أردت فقط أن ألقي التحية سريعاً!',
          grammarNote: 'الظرف المكاني (nebenan = في الجوار / في الشقة المجاورة) شائع جداً في الحديث عن الجيران.'
        },
        {
          speaker: 'Frau Krause (الجارة)',
          avatar: '👵🏼',
          role: 'neighbor',
          de: 'Ach, wie nett von Ihnen, Herr Hassan! Herzlich willkommen im Haus. Haben Sie sich schon ein bisschen **eingelebt**?',
          ar: 'آه، يا للطفك يا سيد حسن! أهلاً وسهلاً بك في البناية. هل تأقلمت واستقررت قليلاً بالفعل؟',
          grammarNote: 'الفعل الجميل (sich einleben = يتأقلم ويتعود على المكان الجديد أو الحياة الجديدة).'
        },
        {
          speaker: 'Hassan (حسن)',
          avatar: '🧑🏻',
          role: 'protagonist',
          de: 'Ja, danke! Ich hätte nur eine kurze Frage zur **Hausordnung**: Im Hof stehen vier verschiedene Tonnen. Wie funktioniert hier genau die **Mülltrennung**?',
          ar: 'نعم شكراً! لدي فقط سؤال قصير حول نظام البناية: توجد في الفناء أربع حاويات مختلفة. كيف يعمل نظام فرز القمامة هنا بالضبط؟',
          grammarNote: 'في ألمانيا يُعدّ فرز القمامة (die Mülltrennung) ونظام البيت (die Hausordnung) من أهم قواعد السكن المشترك.'
        },
        {
          speaker: 'Frau Krause (الجارة)',
          avatar: '👵🏼',
          role: 'neighbor',
          de: 'Gerne! In die **blaue Tonne** kommt Papier und Karton, in die **gelbe Tonne** Plastik und Verpackungen, in die braune **Biomüll** und in die schwarze der Restmüll.',
          ar: 'بكل سرور! في الحاوية الزرقاء يوضع الورق والكرتون، وفي الصفراء البلاستيك ومواد التغليف، وفي البنية النفايات العضوية، وفي السوداء بقية النفايات.',
          grammarNote: 'حرف الجر (in + Akkusativ) لأن هناك حركة وضع داخل الحاوية: in die blaue Tonne.'
        },
        {
          speaker: 'Hassan (حسن)',
          avatar: '🧑🏻',
          role: 'protagonist',
          de: 'Vielen Dank, jetzt ist alles klar! Und noch eine kleine **Bitte**: Ich erwarte morgen Vormittag ein wichtiges **Paket**, bin aber bis 16 Uhr auf der Arbeit.',
          ar: 'شكراً جزيلاً، الآن كل شيء واضح! ولدي رجاء صغير آخر: أنا أنتظر صباح الغد طرداً مهماً، لكنني سأكون في العمل حتى الساعة الرابعة عصراً.',
          grammarNote: 'الاسم (die Bitte = الرجاء / الطلب المهذب) مشتق من الفعل (bitten = يرجو/يطلب).'
        },
        {
          speaker: 'Frau Krause (الجارة)',
          avatar: '👵🏼',
          role: 'neighbor',
          de: 'Kein Problem! Ich bin morgen den ganzen Tag zu Hause. Wenn der **Paketbote** klingelt, **nehme** ich das Paket sehr gerne für Sie **an**.',
          ar: 'لا مشكلة! أنا غداً طوال اليوم في البيت. عندما يقرع ساعي الطرود الجرس، سأستلم الطرد من أجلك بكل سرور.',
          grammarNote: 'الفعل المنفصل (annehmen = يستلم/يقبل طرداً أو عرضاً): nehme ich das Paket ... an.'
        },
        {
          speaker: 'Hassan (حسن)',
          avatar: '🧑🏻',
          role: 'protagonist',
          de: 'Das ist wirklich sehr **hilfsbereit** von Ihnen, Frau Krause! Wenn Sie mal Hilfe beim **Einkaufen** oder Tragen brauchen, sagen Sie mir bitte jederzeit Bescheid!',
          ar: 'هذا تعاون ولطف كبير منكِ حقاً يا سيدة كراوزه! وإذا احتجتِ في أي وقت مساعدة في التسوق أو حمل الأغراض، فأخبريني من فضلك في أي وقت!',
          grammarNote: 'التعبير اليومي المهم جداً: (jemandem Bescheid sagen / geben = يُخبر شخصاً / يُعلمه بالأمر).'
        }
      ],
      vocabulary: [
        { word: 'der Nachbar / die Nachbarin', plural: 'die Nachbarn / Nachbarinnen', ar: 'الجار / الجارة', example: 'Unsere neuen Nachbarn sind sehr freundlich und ruhig.' },
        { word: 'die Hausordnung', plural: 'die Hausordnungen', ar: 'نظام وقواعد السكن في البناية', example: 'Laut Hausordnung ist ab 22 Uhr Nachtruhe.' },
        { word: 'die Mülltrennung', plural: '—', ar: 'فرز القمامة (ورق، بلاستيك، عضوي...)', example: 'In Deutschland ist die Mülltrennung sehr wichtig.' },
        { word: 'das Paket annehmen', plural: 'nahm an / hat angenommen', ar: 'يستلم طرداً بريدياً (نيابةً عن الجار)', example: 'Könnten Sie morgen bitte mein Paket annehmen?' },
        { word: 'sich einleben', plural: 'lebte sich ein / hat sich eingelebt', ar: 'يتأقلم ويستقر في مكان جديد', example: 'Ich habe mich in der neuen Stadt schnell eingelebt.' },
        { word: 'hilfsbereit', plural: '—', ar: 'متعاون / خدوم / محب للمساعدة', example: 'Frau Krause ist eine sehr hilfsbereite Nachbarin.' },
        { word: 'Bescheid sagen', plural: 'sagte Bescheid / hat Bescheid gesagt', ar: 'يُعطي خبراً / يُبلّغ', example: 'Sag mir bitte rechtzeitig Bescheid, wenn du Hilfe brauchst.' }
      ],
      quiz: [
        {
          question: 'ماذا يوضع في الحاوية الزرقاء (die blaue Tonne) وفي الحاوية الصفراء (die gelbe Tonne) في ألمانيا؟',
          options: [
            'في الزرقاء الورق والكرتون، وفي الصفراء البلاستيك ومواد التغليف',
            'في الزرقاء الزجاج، وفي الصفراء بقايا الطعام',
            'في الزرقاء البطاريات، وفي الصفراء الملابس القديمة',
            'كل أنواع القمامة توضع في حاوية واحدة'
          ],
          correctIndex: 0,
          explanation: 'أوضحت السيدة كراوزه: In die blaue Tonne kommt Papier und Karton, in die gelbe Tonne Plastik und Verpackungen.'
        },
        {
          question: 'ما هو الرجاء (die Bitte) الذي طلبه حسن من جارته السيدة كراوزه ليوم الغد؟',
          options: [
            'أن تستلم له طرداً بريدياً (Paket annehmen) لأنه سيكون في العمل صباحاً',
            'أن تقرضه سيارتها لمدة أسبوع',
            'أن تطبخ له الغداء كل يوم',
            'أن تذهب نيابة عنه إلى البلدية'
          ],
          correctIndex: 0,
          explanation: 'قال حسن إنه ينتظر طرداً مهماً صباح الغد أثناء وجوده في العمل، فوافقت الجارة على استلامه (das Paket annehmen).'
        },
        {
          question: 'بماذا وعد حسن جارته السيدة كراوزه في نهاية الحوار رداً على لطفها؟',
          options: [
            'أن يساعدها في أي وقت تحتاج فيه للتسوق أو حمل الأغراض الثقيلة',
            'أن يدفع عنها إيجار الشقة',
            'أن يهديها تذكرة سفر إلى برلين',
            'أن يصلح لها التلفزيون القديم'
          ],
          correctIndex: 0,
          explanation: 'قال حسن: Wenn Sie mal Hilfe beim Einkaufen oder Tragen brauchen, sagen Sie mir bitte jederzeit Bescheid!'
        }
      ]
    },

    // =========================================================================
    // 10. krankmeldung (A2/B1)
    // =========================================================================
    {
      id: 'krankmeldung',
      icon: '📞',
      level: 'A2/B1',
      category: 'العمل والتواصل الرسمي',
      titleDe: 'Krankmeldung beim Arbeitgeber',
      titleAr: 'الاتصال بالعمل للإبلاغ عن مرض (Krankmeldung)',
      summaryDe: 'Mariam wacht morgens mit starker Migräne und Schwindel auf. Sie ruft vor Arbeitsbeginn im Büro an, meldet sich krank und klärt die Übergabe ihrer Aufgaben.',
      summaryAr: 'تستيقظ مريم صباحاً وهي تعاني من صداع نصفي شديد ودوار، فتتصل بالمكتب قبل بدء الدوام للإبلاغ عن مرضها وتنسيق تسليم مهامها العاجلة.',
      lines: [
        {
          speaker: 'الراوي (Erzähler)',
          avatar: '📖',
          role: 'narrator',
          de: 'Es ist 7:15 Uhr morgens. Mariam hat starke Kopfschmerzen und **Schwindel**. In Deutschland muss man sich **vor Arbeitsbeginn** beim Arbeitgeber **krankmelden**.',
          ar: 'إنها الساعة 7:15 صباحاً. تعاني مريم من صداع شديد ودوار. في ألمانيا يجب على الموظف إبلاغ صاحب العمل بالمرض قبل بدء وقت الدوام.',
          grammarNote: 'الفعل الانعكاسي المنفصل (sich krankmelden = يبلغ العمل رسمياً بأنه مريض ولن يحضر).'
        },
        {
          speaker: 'Teamleiterin Frau Scholz (مديرة الفريق)',
          avatar: '👩‍💼',
          role: 'manager',
          de: 'Abteilung Logistik, Scholz am Apparat. Guten Morgen!',
          ar: 'قسم اللوجستيات، شولتس على الهاتف. صباح الخير!',
          grammarNote: 'العبارة الرسمية للرد على الهاتف في الشركات الألمانية: (Name + am Apparat = فلان على الهاتف).'
        },
        {
          speaker: 'Mariam (مريم)',
          avatar: '🧕🏻',
          role: 'protagonist',
          de: 'Guten Morgen, Frau Scholz, hier ist Mariam Mansour. Es tut mir sehr leid, aber ich kann heute leider **nicht zur Arbeit kommen**. Ich bin heute Nacht krank geworden.',
          ar: 'صباح الخير يا سيدة شولتس، معك مريم منصور. يؤسفني جداً، لكنني للأسف لا أستطيع المجيء إلى العمل اليوم. لقد مرضت الليلة الماضية.',
          grammarNote: 'الماضي التام للفعل (werden = يصبح) مع الصفات يكون بـ (sein + geworden): Ich bin krank geworden.'
        },
        {
          speaker: 'Teamleiterin Frau Scholz (مديرة الفريق)',
          avatar: '👩‍💼',
          role: 'manager',
          de: 'Oh je, das tut mir leid zu hören, Frau Mansour! Gehen Sie heute Vormittag zum Arzt, um sich **untersuchen** zu lassen?',
          ar: 'يا إلهي، يؤسفني سماع ذلك يا سيدة منصور! هل ستذهبين صباح اليوم إلى الطبيب لإجراء الفحص؟',
          grammarNote: 'تركيب (sich untersuchen lassen = يجعل الطبيب يفحصه / يخضع للفحص الطبي).'
        },
        {
          speaker: 'Mariam (مريم)',
          avatar: '🧕🏻',
          role: 'protagonist',
          de: 'Ja, ich gehe gleich um 8:30 Uhr in die Sprechstunde. Sobald ich beim Arzt war, gebe ich Ihnen telefonisch **Bescheid**, wie lange ich **ausfalle**.',
          ar: 'نعم، سأذهب في تمام الساعة 8:30 إلى موعد العيادة. وبمجرد انتهائي من عند الطبيب، سأبلغك هاتفياً بالمدة التي سأتغيب فيها.',
          grammarNote: 'الفعل المنفصل (ausfallen = يتغيب عن العمل بسبب المرض أو يتعطل): wie lange ich ausfalle. والرابط (sobald = بمجرد أن) يدفع الفعل للنهاية.'
        },
        {
          speaker: 'Teamleiterin Frau Scholz (مديرة الفريق)',
          avatar: '👩‍💼',
          role: 'manager',
          de: 'Sehr gut. Ihre **elektronische Arbeitsunfähigkeitsbescheinigung (eAU)** ruft unsere Personalabteilung dann direkt bei der Krankenkasse ab.',
          ar: 'جيد جداً. شهادة عدم القدرة على العمل الإلكترونية الخاصة بك (eAU) سيقوم قسم الموارد البشرية لدينا بسحبها مباشرة من شركة التأمين الصحي.',
          grammarNote: 'في ألمانيا حديثاً، تُرسل الإجازة المرضية إلكترونياً (eAU) من العيادة للتأمين الصحي ثم للشركة، ولكن يجب دائماً إبلاغ المدير فوراً بالمدة.'
        },
        {
          speaker: 'Mariam (مريم)',
          avatar: '🧕🏻',
          role: 'protagonist',
          de: 'Wegen der dringenden **Bestellung** für die Firma Weber: Alle Unterlagen liegen fertig auf meinem Schreibtisch. Könnte mein Kollege Markus das heute **übernehmen**?',
          ar: 'بخصوص الطلبية العاجلة لشركة فيبر: جميع المستندات جاهزة على مكتبي. هل يمكن لزميلي ماركوس أن يتولى ذلك اليوم؟',
          grammarNote: 'الفعل غير المنفصل (übernehmen = يتولى مهمة أو مسؤولية نيابة عن زميل).'
        },
        {
          speaker: 'Teamleiterin Frau Scholz (مديرة الفريق)',
          avatar: '👩‍💼',
          role: 'manager',
          de: 'Danke für den Hinweis, ich gebe Markus sofort Bescheid. **Kurieren Sie sich erst mal richtig aus** und gute Besserung!',
          ar: 'شكراً على التنبيه، سأخبر ماركوس فوراً. تعافَي أولاً بشكل كامل ونتمنى لك الشفاء العاجل!',
          grammarNote: 'التعبير الأصيل: (sich richtig auskurieren = يأخذ قسطاً كافياً من الراحة والعلاج حتى يتعافى تماماً).'
        }
      ],
      vocabulary: [
        { word: 'sich krankmelden', plural: 'meldete sich krank', ar: 'يُبلغ العمل رسمياً بمرضه وتغيّبه', example: 'Man muss sich morgens vor Arbeitsbeginn krankmelden.' },
        { word: 'der Arbeitsbeginn', plural: '—', ar: 'وقت بدء العمل / الدوام', example: 'Bitte rufen Sie noch vor Arbeitsbeginn im Büro an.' },
        { word: 'ausfallen', plural: 'fiel aus / ist ausgefallen', ar: 'يتغيب عن العمل (بسبب مرض) / يُلغى', example: 'Unser Kollege fällt diese Woche leider wegen Grippe aus.' },
        { word: 'übernehmen', plural: 'übernahm / hat übernommen', ar: 'يتولى مهمة أو ينوب عن زميل في عمل', example: 'Kannst du heute bitte meine Schicht übernehmen?' },
        { word: 'die Sprechstunde', plural: 'die Sprechstunden', ar: 'ساعات استقبال المرضى في العيادة', example: 'Die offene Sprechstunde beginnt um 8 Uhr.' },
        { word: 'sich auskurieren', plural: 'kurierte sich aus', ar: 'يتعافى تماماً ويأخذ راحته في العلاج', example: 'Bleib im Bett und kurier dich richtig aus!' },
        { word: 'die Personalabteilung', plural: 'die Personalabteilungen', ar: 'قسم شؤون الموظفين / الموارد البشرية (HR)', example: 'Bitte informieren Sie auch die Personalabteilung.' }
      ],
      quiz: [
        {
          question: 'متى يجب على الموظف في ألمانيا الاتصال بصاحب العمل للإبلاغ عن مرضه (sich krankmelden)؟',
          options: [
            'في الصباح الباكر قبل بدء وقت الدوام الرسمي (vor Arbeitsbeginn)',
            'بعد انتهاء الدوام في المساء',
            'بعد مرور ثلاثة أيام من الغياب بدون اتصال',
            'في نهاية الشهر عند استلام الراتب'
          ],
          correctIndex: 0,
          explanation: 'في قانون العمل الألماني يجب إبلاغ صاحب العمل فوراً قبل بدء الدوام (vor Arbeitsbeginn) في أول يوم مرض.'
        },
        {
          question: 'ماذا وعدت مريم مديرة الفريق السيدة شولتس أن تفعل بمجرد خروجها من عند الطبيب؟',
          options: [
            'أن تتصل وتبلغها بالمدة التي ستتغيب فيها عن العمل (wie lange ich ausfalle)',
            'أن تحضر إلى المكتب وتعمل 12 ساعة',
            'أن تقدم استقالتها من الشركة',
            'أن تسافر في عطلة'
          ],
          correctIndex: 0,
          explanation: 'قالت مريم: Sobald ich beim Arzt war, gebe ich Ihnen telefonisch Bescheid, wie lange ich ausfalle.'
        },
        {
          question: 'كيف حرصت مريم على عدم تعطل الطلبية العاجلة لشركة فيبر أثناء غيابها؟',
          options: [
            'أخبرت المديرة بمكان الأوراق الجاهزة على مكتبها وطلبت أن يتولى زميلها ماركوس المهمة (übernehmen)',
            'أخذت أوراق الشركة معها إلى المستشفى',
            'ألغت الطلبية دون إخبار أحد',
            'طلبت من العميل الانتظار شهراً كاملاً'
          ],
          correctIndex: 0,
          explanation: 'قالت مريم: Alle Unterlagen liegen fertig auf meinem Schreibtisch. Könnte mein Kollege Markus das heute übernehmen?'
        }
      ]
    }
  ],

  // =========================================================================
  // STORAGE HELPERS
  // =========================================================================
  getDoneStories() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  },

  markStoryDone(storyId) {
    const done = this.getDoneStories();
    if (!done.includes(storyId)) {
      done.push(storyId);
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(done));
      } catch (e) {
        console.warn('Could not save completed stories:', e);
      }
      return true; // newly marked done
    }
    return false;
  },

  isStoryDone(storyId) {
    return this.getDoneStories().includes(storyId);
  },

  getCurrentStory() {
    return this.stories.find(s => s.id === this.currentStoryId) || this.stories[0];
  },

  // =========================================================================
  // AUDIO PLAYBACK (SINGLE LINE & FULL STORY SEQUENCER)
  // =========================================================================
  cleanForSpeech(text) {
    if (!text) return '';
    return String(text)
      .replace(/\*\*/g, '')
      .replace(/<[^>]*>/g, '')
      .replace(/[„“”"']/g, '')
      .trim();
  },

  speakLine(lineIndex, isSlow = false) {
    this.stopFullStory();
    const story = this.getCurrentStory();
    if (!story || !story.lines[lineIndex]) return;

    const line = story.lines[lineIndex];
    const cleanDe = this.cleanForSpeech(line.de);
    this.highlightLine(lineIndex);

    if (window.Speech) {
      if (isSlow && typeof Speech.speakSlow === 'function') {
        Speech.speakSlow(cleanDe);
      } else if (typeof Speech.speak === 'function') {
        Speech.speak(cleanDe, isSlow);
      }
    }
  },

  playFullStory() {
    this.stopFullStory();
    const story = this.getCurrentStory();
    if (!story || !story.lines || story.lines.length === 0) return;

    this.isPlayingFull = true;
    this.playingLineIndex = 0;
    this.updateFullPlayButtons();

    const playStep = (idx) => {
      if (!this.isPlayingFull || idx >= story.lines.length) {
        this.stopFullStory();
        if (window.Utils && typeof Utils.showToast === 'function') {
          Utils.showToast('🎧 اكتمل الاستماع إلى القصة كاملة!', 'success');
        }
        return;
      }

      this.playingLineIndex = idx;
      this.highlightLine(idx);

      const rawText = this.cleanForSpeech(story.lines[idx].de);
      if (window.Speech && typeof Speech.speak === 'function') {
        Speech.speak(rawText, false);
      }

      // Estimate speaking duration from character count (~75ms per char, min 3800ms, max 9500ms)
      const durationMs = Math.max(3800, Math.min(9500, rawText.length * 72 + 1100));
      this.fullPlayTimer = setTimeout(() => {
        playStep(idx + 1);
      }, durationMs);
    };

    playStep(0);
  },

  stopFullStory() {
    if (this.fullPlayTimer) {
      clearTimeout(this.fullPlayTimer);
      this.fullPlayTimer = null;
    }
    this.isPlayingFull = false;
    this.playingLineIndex = -1;
    if (window.Speech && typeof Speech.stop === 'function') {
      Speech.stop();
    }
    this.highlightLine(-1);
    this.updateFullPlayButtons();
  },

  highlightLine(lineIndex) {
    const cards = document.querySelectorAll('.story-dialogue-line');
    cards.forEach((el, idx) => {
      if (idx === lineIndex) {
        el.style.borderColor = 'var(--accent)';
        el.style.boxShadow = '0 0 0 2px rgba(79, 70, 229, 0.2)';
        el.style.background = 'var(--accent-light)';
      } else {
        el.style.borderColor = 'var(--border)';
        el.style.boxShadow = 'none';
        el.style.background = 'var(--bg-secondary)';
      }
    });
  },

  updateFullPlayButtons() {
    const playBtn = document.getElementById('story-play-full-btn');
    const stopBtn = document.getElementById('story-stop-full-btn');
    if (playBtn) {
      playBtn.style.opacity = this.isPlayingFull ? '0.65' : '1';
      playBtn.innerHTML = this.isPlayingFull
        ? '🔊 جاري القراءة المتتابعة...'
        : '🔊 استماع للقصة كاملة';
    }
    if (stopBtn) {
      stopBtn.style.display = this.isPlayingFull ? 'inline-flex' : 'inline-flex';
    }
  },

  // =========================================================================
  // UI INTERACTIONS & TOGGLES
  // =========================================================================
  selectStory(storyId) {
    this.stopFullStory();
    this.currentStoryId = storyId;
    this.render();
    const readerEl = document.getElementById('story-reader-section');
    if (readerEl) {
      readerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  setLevelFilter(level) {
    this.currentLevelFilter = level;
    this.render();
  },

  toggleTranslation() {
    this.showTranslation = !this.showTranslation;
    const arBlocks = document.querySelectorAll('.story-line-ar');
    arBlocks.forEach(el => {
      el.style.display = this.showTranslation ? 'block' : 'none';
    });
    const btn = document.getElementById('toggle-ar-btn');
    if (btn) {
      btn.className = `btn btn-sm ${this.showTranslation ? 'btn-primary' : 'btn-secondary'}`;
      btn.innerHTML = `🇸🇦 ${this.showTranslation ? 'إخفاء الترجمة العربية تحت كل جملة' : 'إظهار الترجمة العربية تحت كل جملة'}`;
    }
  },

  toggleGrammarNotes() {
    this.showGrammarNotes = !this.showGrammarNotes;
    const noteBlocks = document.querySelectorAll('.story-line-grammar');
    noteBlocks.forEach(el => {
      el.style.display = this.showGrammarNotes ? 'block' : 'none';
    });
    const btn = document.getElementById('toggle-grammar-btn');
    if (btn) {
      btn.className = `btn btn-sm ${this.showGrammarNotes ? 'btn-primary' : 'btn-secondary'}`;
      btn.innerHTML = `💡 ${this.showGrammarNotes ? 'إخفاء شرح القواعد والمفردات' : 'إظهار شرح القواعد والمفردات'}`;
    }
  },

  formatGermanLine(rawDe) {
    let html = Utils.escapeHtml(rawDe);
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--accent); font-weight:800; background:rgba(79,70,229,0.1); padding:1px 6px; border-radius:4px;">$1</strong>');
    if (window.Utils && typeof Utils.colorArticles === 'function') {
      html = Utils.colorArticles(html);
    }
    return html;
  },

  formatVocabWord(word) {
    let html = Utils.escapeHtml(word);
    if (window.Utils && typeof Utils.colorArticles === 'function') {
      html = Utils.colorArticles(html);
    }
    return html;
  },

  getLevelBadgeStyle(level) {
    if (level === 'A1/A2') {
      return 'background: rgba(16, 185, 129, 0.14); color: var(--success); border: 1px solid rgba(16, 185, 129, 0.35);';
    }
    if (level === 'A2') {
      return 'background: rgba(37, 99, 235, 0.14); color: var(--der-color); border: 1px solid rgba(37, 99, 235, 0.35);';
    }
    if (level === 'A2/B1') {
      return 'background: rgba(245, 158, 11, 0.15); color: var(--warning); border: 1px solid rgba(245, 158, 11, 0.35);';
    }
    return 'background: rgba(79, 70, 229, 0.15); color: var(--accent); border: 1px solid rgba(79, 70, 229, 0.35);';
  },

  // =========================================================================
  // COMPREHENSION QUIZ LOGIC
  // =========================================================================
  answerQuiz(qIndex, optionIndex) {
    const story = this.getCurrentStory();
    if (!story) return;

    if (!this.quizAnswers[story.id]) {
      this.quizAnswers[story.id] = {};
    }

    // Prevent changing already-answered question unless reset
    if (this.quizAnswers[story.id][qIndex] !== undefined) return;

    this.quizAnswers[story.id][qIndex] = optionIndex;
    const q = story.quiz[qIndex];
    const isCorrect = optionIndex === q.correctIndex;

    if (isCorrect) {
      if (window.Utils && typeof Utils.showToast === 'function') {
        Utils.showToast('إجابة صحيحة! أحسنت الفهم ✅', 'success');
      }
    } else {
      if (window.Storage && typeof Storage.addMistake === 'function') {
        Storage.addMistake({
          lessonId: `story-${story.id}`,
          question: `${story.titleDe}: ${q.question}`,
          myAnswer: q.options[optionIndex],
          correctAnswer: q.options[q.correctIndex],
          explanation: q.explanation
        });
      }
      if (window.Utils && typeof Utils.showToast === 'function') {
        Utils.showToast('راجع الشرح أسفل السؤال لتثبيت المعلومة 💡', 'info');
      }
    }

    // Check if all 3 questions are answered
    const answeredCount = Object.keys(this.quizAnswers[story.id]).length;
    if (answeredCount === story.quiz.length) {
      const newlyDone = this.markStoryDone(story.id);
      if (!this.quizRewarded[story.id]) {
        this.quizRewarded[story.id] = true;
        if (window.Storage && typeof Storage.addXP === 'function') {
          Storage.addXP(30);
        }
        if (window.Storage && typeof Storage.updateStreak === 'function') {
          Storage.updateStreak();
        }
        if (window.App && typeof App.updateHeaderStats === 'function') {
          App.updateHeaderStats();
        }
        if (window.Utils && typeof Utils.showToast === 'function') {
          Utils.showToast(
            newlyDone
              ? '🎉 مبارك! أتممت القصة وحصلت على +30 XP وتم وسمها كمكتملة!'
              : '🌟 أحسنت مراجعة القصة! حصلت على +30 XP!',
            'success',
            3500
          );
        }
      }
    }

    this.render();
  },

  resetStoryQuiz(storyId) {
    delete this.quizAnswers[storyId];
    delete this.quizRewarded[storyId];
    this.render();
  },

  // =========================================================================
  // MAIN RENDER ENTRYPOINT
  // =========================================================================
  render(container) {
    const target = container || document.getElementById('app-content');
    if (!target) return;

    const isDe = window.I18n && typeof I18n.isGerman === 'function' && I18n.isGerman();
    const doneIds = this.getDoneStories();
    const story = this.getCurrentStory();
    const filteredStories = this.currentLevelFilter === 'all'
      ? this.stories
      : this.stories.filter(s => s.level === this.currentLevelFilter);

    const storyAnswers = this.quizAnswers[story.id] || {};
    const answeredCount = Object.keys(storyAnswers).length;
    const correctCount = story.quiz.reduce((acc, q, idx) => {
      return acc + (storyAnswers[idx] === q.correctIndex ? 1 : 0);
    }, 0);

    target.innerHTML = `
      <div class="stories-trainer-wrapper fade-in" style="max-width: 1120px; margin: 0 auto; padding-bottom: 48px;">
        <!-- Top Header Banner -->
        <div class="card" style="padding: 24px 28px; margin-bottom: 24px; background: linear-gradient(135deg, var(--bg-card), var(--accent-light)); border: 1px solid var(--border);">
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
            <div>
              <div style="display: inline-flex; align-items: center; gap: 8px; background: var(--bg-secondary); padding: 4px 12px; border-radius: 999px; font-size: 0.82rem; font-weight: 700; color: var(--accent); margin-bottom: 8px; border: 1px solid var(--border);">
                <span>📖 LingQ &amp; Nicos Weg Style</span>
                <span>•</span>
                <span>A1 – B1 &amp; Ausbildung</span>
              </div>
              <h1 style="font-size: 1.65rem; font-weight: 800; color: var(--text-primary); margin-bottom: 6px;">
                ${isDe ? '📖 Interaktive Geschichten & Alltags-Dialoge' : '📖 القصص والحوارات التفاعلية الذكية'}
              </h1>
              <p style="color: var(--text-secondary); font-size: 0.96rem; margin: 0;">
                ${isDe
                  ? '10 realistische Alltagssituationen in Deutschland mit Audio (Normal & Langsam), Grammatik-Tipps, Wortschatz und Quiz.'
                  : '10 مواقف وقصص واقعية من الحياة اليومية والعمل في ألمانيا — استمع بالسرعة العادية والبطيئة، وتعلّم التراكيب الأصلية واختبر فهمك.'}
              </p>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
              <div style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 10px 16px; text-align: center;">
                <div style="font-size: 1.25rem; font-weight: 800; color: var(--success);">
                  ✅ ${doneIds.length} / ${this.stories.length}
                </div>
                <div style="font-size: 0.78rem; color: var(--text-muted);">
                  ${isDe ? 'Abgeschlossen' : 'قصص مكتملة'}
                </div>
              </div>
              <a href="#/home" class="btn btn-secondary btn-sm" onclick="StoriesTrainer.stopFullStory()">
                🏠 ${isDe ? 'Startseite' : 'الرئيسية'}
              </a>
            </div>
          </div>

          <!-- Level Filter Pills -->
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--border);">
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-secondary); margin-left: 6px;">
              🎯 ${isDe ? 'Niveau filtern:' : 'تصفية حسب المستوى:'}
            </span>
            ${['all', 'A1/A2', 'A2', 'A2/B1', 'B1'].map(lvl => `
              <button
                type="button"
                class="btn btn-sm ${this.currentLevelFilter === lvl ? 'btn-primary' : 'btn-secondary'}"
                onclick="StoriesTrainer.setLevelFilter('${lvl}')"
                style="padding: 5px 14px; border-radius: 999px; font-size: 0.83rem;"
              >
                ${lvl === 'all' ? (isDe ? 'Alle (10)' : 'الكل (10)') : lvl}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Story Selector Grid -->
        <div style="margin-bottom: 28px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h2 style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary);">
              📚 ${isDe ? 'Wähle eine Geschichte oder einen Dialog:' : 'اختر القصة أو الحوار التفاعلي:'}
            </h2>
            <span style="font-size: 0.85rem; color: var(--text-muted);">
              ${isDe ? 'Klicke auf eine Karte zum Lesen & Hören' : 'اضغط على أي بطاقة للقراءة والاستماع'}
            </span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 12px;">
            ${filteredStories.map(s => {
              const isSelected = s.id === story.id;
              const isDone = doneIds.includes(s.id);
              return `
                <div
                  onclick="StoriesTrainer.selectStory('${s.id}')"
                  class="card"
                  style="
                    padding: 14px 16px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    border: 2px solid ${isSelected ? 'var(--accent)' : 'var(--border)'};
                    background: ${isSelected ? 'var(--accent-light)' : 'var(--bg-card)'};
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 10px;
                  "
                >
                  <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                    <span style="font-size: 1.65rem; line-height: 1;">${s.icon}</span>
                    <div style="display: flex; align-items: center; gap: 6px;">
                      ${isDone ? `<span style="font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 999px; background: rgba(16, 185, 129, 0.14); color: var(--success);">✅ مكتملة</span>` : ''}
                      <span style="font-size: 0.76rem; font-weight: 800; padding: 2px 9px; border-radius: 999px; ${this.getLevelBadgeStyle(s.level)}">
                        ${s.level}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div class="de-text" dir="ltr" style="font-weight: 800; font-size: 0.95rem; color: var(--text-primary); margin-bottom: 3px; text-align: right;">
                      ${Utils.escapeHtml(s.titleDe)}
                    </div>
                    <div style="font-size: 0.86rem; color: var(--text-secondary); font-weight: 600;">
                      ${Utils.escapeHtml(s.titleAr)}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Active Story Reader Section -->
        <div id="story-reader-section" class="card" style="padding: 26px 24px; margin-bottom: 24px; border: 1px solid var(--border);">
          <!-- Story Title & Context Banner -->
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 16px; padding-bottom: 18px; border-bottom: 1px solid var(--border); margin-bottom: 18px;">
            <div style="display: flex; align-items: flex-start; gap: 14px;">
              <div style="font-size: 2.5rem; line-height: 1; background: var(--bg-primary); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border);">
                ${story.icon}
              </div>
              <div>
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 6px;">
                  <span style="font-size: 0.8rem; font-weight: 800; padding: 3px 10px; border-radius: 999px; ${this.getLevelBadgeStyle(story.level)}">
                    Niveau ${story.level}
                  </span>
                  <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 600;">
                    📂 ${Utils.escapeHtml(story.category)}
                  </span>
                  ${doneIds.includes(story.id) ? `<span style="font-size: 0.8rem; font-weight: 700; color: var(--success);">✅ مكتملة (+30 XP)</span>` : ''}
                </div>
                <h2 class="de-text" dir="ltr" style="font-size: 1.4rem; font-weight: 800; color: var(--text-primary); margin-bottom: 4px; text-align: right;">
                  ${Utils.escapeHtml(story.titleDe)}
                </h2>
                <div style="font-size: 1.05rem; font-weight: 700; color: var(--accent);">
                  ${Utils.escapeHtml(story.titleAr)}
                </div>
              </div>
            </div>
          </div>

          <!-- Story Situation Intro Box -->
          <div style="background: var(--bg-primary); border-right: 4px solid var(--accent); padding: 14px 18px; border-radius: var(--radius-sm); margin-bottom: 20px;">
            <div class="de-text" dir="ltr" style="font-size: 0.98rem; font-weight: 600; color: var(--text-primary); margin-bottom: 4px; text-align: left;">
              📌 <strong>Situation:</strong> ${Utils.escapeHtml(story.summaryDe)}
            </div>
            <div style="font-size: 0.92rem; color: var(--text-secondary);">
              ${Utils.escapeHtml(story.summaryAr)}
            </div>
          </div>

          <!-- Audio & Display Toolbar -->
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 10px; background: var(--bg-primary); padding: 12px 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 22px;">
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <button
                id="story-play-full-btn"
                type="button"
                class="btn btn-primary btn-sm"
                onclick="StoriesTrainer.playFullStory()"
              >
                🔊 ${this.isPlayingFull ? 'جاري القراءة المتتابعة...' : 'استماع للقصة كاملة'}
              </button>
              <button
                id="story-stop-full-btn"
                type="button"
                class="btn btn-secondary btn-sm"
                onclick="StoriesTrainer.stopFullStory()"
              >
                ⏹️ إيقاف
              </button>
            </div>

            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <button
                id="toggle-ar-btn"
                type="button"
                class="btn btn-sm ${this.showTranslation ? 'btn-primary' : 'btn-secondary'}"
                onclick="StoriesTrainer.toggleTranslation()"
              >
                🇸🇦 ${this.showTranslation ? 'إخفاء الترجمة العربية تحت كل جملة' : 'إظهار الترجمة العربية تحت كل جملة'}
              </button>
              <button
                id="toggle-grammar-btn"
                type="button"
                class="btn btn-sm ${this.showGrammarNotes ? 'btn-primary' : 'btn-secondary'}"
                onclick="StoriesTrainer.toggleGrammarNotes()"
              >
                💡 ${this.showGrammarNotes ? 'إخفاء شرح القواعد والمفردات' : 'إظهار شرح القواعد والمفردات'}
              </button>
            </div>
          </div>

          <!-- Line-by-Line Interactive Dialogue / Story View -->
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${story.lines.map((line, idx) => {
              const isActive = this.playingLineIndex === idx;
              const isNarrator = line.role === 'narrator';
              return `
                <div
                  class="story-dialogue-line"
                  style="
                    background: ${isActive ? 'var(--accent-light)' : (isNarrator ? 'var(--bg-primary)' : 'var(--bg-secondary)')};
                    border: 1px solid ${isActive ? 'var(--accent)' : 'var(--border)'};
                    border-radius: var(--radius-md);
                    padding: 16px 18px;
                    transition: all 0.2s ease;
                  "
                >
                  <!-- Speaker Header + Audio Buttons -->
                  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 10px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="font-size: 1.45rem; line-height: 1;">${line.avatar}</span>
                      <span style="font-weight: 800; font-size: 0.92rem; color: ${isNarrator ? 'var(--accent)' : 'var(--text-primary)'};">
                        ${Utils.escapeHtml(line.speaker)}
                      </span>
                      <span style="font-size: 0.75rem; color: var(--text-muted); background: var(--bg-primary); padding: 2px 8px; border-radius: 999px; border: 1px solid var(--border);">
                        #${idx + 1}
                      </span>
                    </div>

                    <div style="display: flex; align-items: center; gap: 6px;">
                      <button
                        type="button"
                        class="btn btn-secondary btn-sm"
                        onclick="StoriesTrainer.speakLine(${idx}, false)"
                        title="استمع بالسرعة الطبيعية"
                        style="padding: 4px 10px; font-size: 0.82rem;"
                      >
                        🔊 عادي
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary btn-sm"
                        onclick="StoriesTrainer.speakLine(${idx}, true)"
                        title="استمع بالسرعة البطيئة للمتعلم"
                        style="padding: 4px 10px; font-size: 0.82rem;"
                      >
                        🐢 بطيء
                      </button>
                    </div>
                  </div>

                  <!-- German Sentence (LTR) -->
                  <div
                    class="de-text"
                    dir="ltr"
                    style="font-size: 1.12rem; line-height: 1.7; color: var(--text-primary); font-weight: 600; text-align: left; margin-bottom: 8px;"
                  >
                    ${this.formatGermanLine(line.de)}
                  </div>

                  <!-- Arabic Line Translation -->
                  <div
                    class="story-line-ar"
                    style="
                      display: ${this.showTranslation ? 'block' : 'none'};
                      font-size: 0.96rem;
                      color: var(--text-secondary);
                      line-height: 1.65;
                      padding-top: 6px;
                      border-top: 1px dashed var(--border);
                      margin-top: 6px;
                    "
                  >
                    🇸🇦 ${Utils.escapeHtml(line.ar)}
                  </div>

                  <!-- Grammar & Idiom Note -->
                  <div
                    class="story-line-grammar"
                    style="
                      display: ${this.showGrammarNotes ? 'block' : 'none'};
                      font-size: 0.86rem;
                      color: var(--text-secondary);
                      background: var(--bg-primary);
                      border-right: 3px solid var(--warning);
                      padding: 8px 12px;
                      border-radius: var(--radius-sm);
                      margin-top: 8px;
                    "
                  >
                    💡 <strong>ملاحظة نحوية وتعبيرية:</strong> ${Utils.escapeHtml(line.grammarNote)}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Key Vocabulary & Phrases Section -->
        <div class="card" style="padding: 24px; margin-bottom: 24px; border: 1px solid var(--border);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
            <div>
              <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 2px;">
                🔑 أهم الكلمات والتراكيب في هذه القصة
              </h3>
              <p style="font-size: 0.86rem; color: var(--text-muted); margin: 0;">
                مفردات أساسية ملونة حسب أداة التعريف (der / die / das) مع الجمع والنطق الصوتي
              </p>
            </div>
            <span class="badge" style="background: var(--accent-light); color: var(--accent); font-weight: 700;">
              ${story.vocabulary.length} تراكيب ومفردات
            </span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px;">
            ${story.vocabulary.map(v => {
              const safeWordForSpeech = this.cleanForSpeech(v.word).replace(/'/g, "\\'");
              const safeExForSpeech = this.cleanForSpeech(v.example).replace(/'/g, "\\'");
              return `
                <div
                  style="
                    background: var(--bg-primary);
                    border: 1px solid var(--border);
                    border-radius: var(--radius-md);
                    padding: 14px 16px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 8px;
                  "
                >
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 4px;">
                      <div class="de-text" dir="ltr" style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); text-align: left;">
                        ${this.formatVocabWord(v.word)}
                      </div>
                      <button
                        type="button"
                        class="btn btn-secondary btn-sm"
                        onclick="Speech.speak('${safeWordForSpeech}')"
                        title="استمع لنطق الكلمة"
                        style="padding: 3px 9px; font-size: 0.8rem;"
                      >
                        🔊
                      </button>
                    </div>
                    <div class="de-text" dir="ltr" style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 6px; text-align: left;">
                      Pl./Form: ${Utils.escapeHtml(v.plural)}
                    </div>
                    <div style="font-size: 0.94rem; font-weight: 700; color: var(--accent); margin-bottom: 6px;">
                      ${Utils.escapeHtml(v.ar)}
                    </div>
                  </div>
                  <div
                    class="de-text"
                    dir="ltr"
                    onclick="Speech.speak('${safeExForSpeech}')"
                    style="
                      font-size: 0.83rem;
                      color: var(--text-secondary);
                      background: var(--bg-secondary);
                      padding: 6px 10px;
                      border-radius: var(--radius-sm);
                      border: 1px dashed var(--border);
                      cursor: pointer;
                      text-align: left;
                    "
                    title="اضغط للاستماع للمثال"
                  >
                    🔈 ${this.formatVocabWord(v.example)}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Interactive Comprehension Quiz Section -->
        <div class="card" style="padding: 24px; border: 1px solid var(--border);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 18px;">
            <div>
              <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 4px;">
                🧠 اختبر فهمك للقصة — 3 أسئلة
              </h3>
              <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0;">
                أجب عن الأسئلة الثلاثة لإكمال القصة والحصول على <strong>+30 XP</strong> في رصيدك!
              </p>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 0.88rem; font-weight: 700; padding: 6px 12px; border-radius: 999px; background: var(--bg-primary); border: 1px solid var(--border);">
                النتيجة: ${correctCount} / ${story.quiz.length}
              </span>
              ${answeredCount > 0 ? `
                <button type="button" class="btn btn-secondary btn-sm" onclick="StoriesTrainer.resetStoryQuiz('${story.id}')">
                  🔄 إعادة الاختبار
                </button>
              ` : ''}
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 18px;">
            ${story.quiz.map((q, qIdx) => {
              const userChoice = storyAnswers[qIdx];
              const isAnswered = userChoice !== undefined;
              const isCorrect = userChoice === q.correctIndex;

              return `
                <div
                  style="
                    background: var(--bg-primary);
                    border: 1px solid ${isAnswered ? (isCorrect ? 'var(--success)' : 'var(--danger)') : 'var(--border)'};
                    border-radius: var(--radius-md);
                    padding: 18px 20px;
                  "
                >
                  <div style="font-size: 1.02rem; font-weight: 700; color: var(--text-primary); margin-bottom: 14px;">
                    <span style="color: var(--accent); margin-left: 6px;">س${qIdx + 1}:</span>
                    ${Utils.escapeHtml(q.question)}
                  </div>

                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px;">
                    ${q.options.map((opt, oIdx) => {
                      let btnStyle = 'background: var(--bg-secondary); color: var(--text-primary); border: 1px solid var(--border);';
                      let iconPrefix = ['أ', 'ب', 'ج', 'د'][oIdx] || (oIdx + 1);

                      if (isAnswered) {
                        if (oIdx === q.correctIndex) {
                          btnStyle = 'background: rgba(16, 185, 129, 0.14); color: var(--success); border: 2px solid var(--success); font-weight: 800;';
                          iconPrefix = '✅';
                        } else if (oIdx === userChoice && !isCorrect) {
                          btnStyle = 'background: rgba(239, 68, 68, 0.12); color: var(--danger); border: 2px solid var(--danger);';
                          iconPrefix = '❌';
                        } else {
                          btnStyle += ' opacity: 0.65;';
                        }
                      }

                      return `
                        <button
                          type="button"
                          onclick="StoriesTrainer.answerQuiz(${qIdx}, ${oIdx})"
                          ${isAnswered ? 'disabled' : ''}
                          style="
                            ${btnStyle}
                            padding: 12px 14px;
                            border-radius: var(--radius-sm);
                            text-align: right;
                            font-family: inherit;
                            font-size: 0.93rem;
                            line-height: 1.5;
                            cursor: ${isAnswered ? 'default' : 'pointer'};
                            display: flex;
                            align-items: flex-start;
                            gap: 8px;
                            transition: all 0.15s ease;
                          "
                        >
                          <span style="font-weight: 800; min-width: 22px;">${iconPrefix}</span>
                          <span style="flex: 1;">${Utils.escapeHtml(opt)}</span>
                        </button>
                      `;
                    }).join('')}
                  </div>

                  ${isAnswered ? `
                    <div
                      style="
                        margin-top: 12px;
                        padding: 10px 14px;
                        border-radius: var(--radius-sm);
                        background: ${isCorrect ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)'};
                        font-size: 0.9rem;
                        color: var(--text-primary);
                      "
                    >
                      <strong>${isCorrect ? '🎉 إجابة صحيحة:' : '💡 توضيح الإجابة الصحيحة:'}</strong>
                      ${Utils.escapeHtml(q.explanation)}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }
};

window.StoriesTrainer = StoriesTrainer;
