// website/data/exams/b2/hoeren/set-01.js — Goethe-Zertifikat B2: Hören (Modellsatz 1)
// Original, authentic listening examination conforming to Goethe B2 standards.

window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA["b2-hoeren-set-01"] = {
  id: "b2-hoeren-set-01",
  level: "b2",
  module: "hoeren",
  setNumber: 1,
  title: {
    de: "Goethe-Zertifikat B2 — Hören (Modellsatz 1)",
    ar: "امتحان غوته B2 الرسمي — وحدة الاستماع (النموذج التجريبي 1)"
  },
  durationMinutes: 40,
  maxScore: 100,
  passScore: 60, // 60% (18/30 items)
  totalItems: 30,
  instructions: {
    de: "Sie hören fünf kurze Texte in Teil 1 (einmal), ein langes Interview in Teil 2 (zweimal), ein Gespräch in Teil 3 (einmal) und einen Vortrag in Teil 4 (zweimal). Lösen Sie die 30 Aufgaben.",
    ar: "يتكون اختبار الاستماع من 4 أجزاء ومجموع 30 سؤالاً: الجزء 1 (مرة واحدة)، الجزء 2 (مرتان)، الجزء 3 (مرة واحدة)، والجزء 4 (مرتان)."
  },
  teile: [
    // ==========================================
    // TEIL 1: Fünf kurze Meldungen (Aufgaben 1–5) — Einmal hören
    // ==========================================
    {
      teilNumber: 1,
      title: {
        de: "Teil 1: Fünf kurze Meldungen aus Alltag & Kultur",
        ar: "الجزء 1: خمس رسائل وإعلانات صوتية قصيرة (تُسمع مرة واحدة)"
      },
      instructions: {
        de: "Sie hören fünf kurze Texte. Sie hören jeden Text einmal. Wählen Sie bei jeder Aufgabe die richtige Lösung: a, b oder c.",
        ar: "ستستمع إلى 5 تسجيلات قصيرة مرة واحدة فقط. اختر الإجابة الصحيحة لكل سؤال (a أو b أو c)."
      },
      textType: "audio",
      maxPlays: 1,
      questions: [
        {
          number: 1,
          maxPlays: 1,
          audioText: "Hier ist der automatische Anrufbeantworter der Volkshochschule Köln. Wegen einer kurzfristigen Erkrankung unseres Dozenten Herrn Dr. Lehmann muss der heutige Vortrag über Steuerrecht und Unternehmensgründung leider entfallen. Ein Ersatztermin ist für den kommenden Donnerstag, den 15. November um 19 Uhr im selben Saal angesetzt. Ihre bereits erworbenen Eintrittskarten behalten selbstverständlich ihre volle Gültigkeit.",
          question: "Was erfahren die Anrufer über den Vortrag von Dr. Lehmann?",
          options: [
            "Er wird auf den kommenden Donnerstagabend verschoben.",
            "Er findet heute in einem anderen Saal statt.",
            "Er wird endgültig abgesagt und das Geld zurückerstattet."
          ],
          answer: 0,
          explanation: "المحاضرة تأجلت ليوم الخميس 15 نوفمبر في نفس القاعة بسبب مرض المحاضر (Ein Ersatztermin ist für den kommenden Donnerstag angesetzt)."
        },
        {
          number: 2,
          maxPlays: 1,
          audioText: "Achtung an Gleis 7: Der Intercity-Express nach Hamburg Altona, planmäßige Abfahrt um 14 Uhr 15, fällt heute wegen einer technischen Weichenstörung im Raum Hannover aus. Fahrgäste mit Ziel Hannover und Hamburg nutzen bitte den Regional-Express um 14 Uhr 28 auf Gleis 4 und steigen in Göttingen in den ICE Richtung Norden um. Die Zugbindung für Sparpreis-Tickets ist für heute aufgehoben.",
          question: "Was sollten Reisende nach Hamburg laut der Durchsage tun?",
          options: [
            "Am Gleis 7 auf den verspäteten ICE warten.",
            "Um 14:28 Uhr den Regional-Express auf Gleis 4 nehmen.",
            "Ein neues Ticket am Reiseschalter kaufen."
          ],
          answer: 1,
          explanation: "طلب من المسافرين ركوب قطار Regional-Express على الرصيف 4 الساعة 14:28 والتبديل في غوتينغن."
        },
        {
          number: 3,
          maxPlays: 1,
          audioText: "Guten Tag, Herr Al-Mansur, hier spricht Karin Vogel von der Hausverwaltung Schöneberg. Ich rufe wegen Ihrer Meldung über den tropfenden Heizkörper im Wohnzimmer an. Die Sanitärfirma hat uns soeben bestätigt, dass der Monteur morgen früh zwischen 8 und 10 Uhr bei Ihnen vorbeikommen kann. Bitte rufen Sie mich kurz zurück, ob Sie zu dieser Zeit zu Hause sind oder ob wir den Schlüssel beim Hausmeister abholen sollen.",
          question: "Warum ruft Frau Vogel bei Herrn Al-Mansur an?",
          options: [
            "Um einen Termin für die Reparatur des Heizkörpers abzustimmen.",
            "Um eine Mieterhöhung für die Wohnung anzukündigen.",
            "Weil Herr Al-Mansur den Schlüssel beim Hausmeister vergessen hat."
          ],
          answer: 0,
          explanation: "تتصل لتنسيق موعد قدوم الفني لإصلاح التدفئة بين 8 و 10 صباحاً."
        },
        {
          number: 4,
          maxPlays: 1,
          audioText: "Kulturnachrichten im Deutschlandradio: Das Städtische Museum eröffnet am morgigen Samstag die Sonderausstellung 'Meisterwerke der Bauhaus-Architektur'. Zu sehen sind über 120 Originalskizzen, Modelle und Fotografien, die bislang der Öffentlichkeit nicht zugänglich waren. Der Eintritt ist am gesamten Eröffnungswochenende frei, Führungen werden stündlich ohne Voranmeldung angeboten.",
          question: "Welches besondere Angebot gibt es am Eröffnungswochenende im Städtischen Museum?",
          options: [
            "Kostenlose Führungen und freier Eintritt für alle Besucher.",
            "Verkauf von originalen Architekturmodellen.",
            "Die Ausstellung ist nur für Fachjournalisten geöffnet."
          ],
          answer: 0,
          explanation: "الدخول مجاني طوال عطلة نهاية الأسبوع الافتتاحية مع جولات إرشادية مجانية كل ساعة (Eintritt frei, Führungen stündlich)."
        },
        {
          number: 5,
          maxPlays: 1,
          audioText: "Liebe Mitarbeiterinnen und Mitarbeiter, hier ist eine Durchsage der IT-Abteilung: Am heutigen Freitag werden ab 18 Uhr planmäßige Wartungsarbeiten an den zentralen Servern durchgeführt. Ab diesem Zeitpunkt stehen das Intranet, die E-Mail-Dienste sowie der Zugriff auf die Kunden-Datenbank bis voraussichtlich Samstagmittag nicht zur Verfügung. Bitte sichern Sie alle offenen Dokumente vor Feierabend lokal auf Ihren Rechnern.",
          question: "Worauf weist die IT-Abteilung die Angestellten hin?",
          options: [
            "Dass ab 18 Uhr das Firmennetzwerk wegen Wartung abgeschaltet wird.",
            "Dass die E-Mail-Adressen aller Mitarbeiter geändert werden.",
            "Dass am Samstag alle Angestellten im Büro arbeiten müssen."
          ],
          answer: 0,
          explanation: "الشبكة والبريد الإلكتروني سيتوقفان للصيانة ابتداءً من السادسة مساءً حتى ظهر السبت."
        }
      ]
    },

    // ==========================================
    // TEIL 2: Langes Radiointerview (Aufgaben 6–15) — Zweimal hören
    // ==========================================
    {
      teilNumber: 2,
      title: {
        de: "Teil 2: Radiointerview — Elektromobilität & Batterietechnik",
        ar: "الجزء 2: مقابلة إذاعية مطولة مع خبيرة حول ثورة السيارات الكهربائية (تُسمع مرتين)"
      },
      instructions: {
        de: "Sie hören ein Rundfunkinterview mit einer Expertin für Antriebstechnologien, Frau Dr. Sommer. Sie hören das Interview zweimal. Wählen Sie bei den Aufgaben 6 bis 15 die richtige Lösung: a, b oder c.",
        ar: "ستستمع إلى مقابلة إذاعية مع الدكتورة سومر حول تكنولوجيا السيارات الكهربائية مرتين. أجب عن الأسئلة 6 إلى 15 باختيار (a أو b أو c)."
      },
      textType: "audio",
      maxPlays: 2,
      sharedAudio: "Moderator: Herzlich willkommen zu unserer Wissenschaftssendung. Heute bei uns im Studio ist Frau Dr. Evelyn Sommer, leitende Forscherin am Institut für nachhaltige Antriebstechnologien. Frau Dr. Sommer, die Elektromobilität ist in aller Munde, doch viele Verbraucher klagen nach wie vor über zu geringe Reichweiten und teure Anschaffungskosten. Stehen wir wirklich vor dem Durchbruch? \n\nDr. Sommer: Guten Tag, Herr Kollege. Ja, absolut. Wir erleben gerade einen Quantensprung bei der Batterietechnologie. Noch vor fünf Jahren schafften kompakte E-Autos kaum zweihundert Kilometer, heute sind bei Neufahrzeugen vier- bis fünfhundert Kilometer unter realen Bedingungen Standard. Und was die Preise betrifft: Durch die gigantische industrielle Serienfertigung sind die Batteriekosten pro Kilowattstunde in den letzten zehn Jahren um fast achtzig Prozent gesunken. Ich rechne fest damit, dass Elektroautos spätestens in drei Jahren in der Anschaffung günstiger sein werden als herkömmliche Verbrenner.\n\nModerator: Ein häufiger Vorwurf betrifft jedoch die Rohstoffe: Für Akkus werden Lithium, Kobalt und seltene Erden benötigt, deren Abbau oft mit massiven Umweltschäden in Entwicklungsländern verbunden ist. Wie reagiert die Forschung darauf?\n\nDr. Sommer: Das ist ein berechtigter Kritikpunkt der Vergangenheit, auf den die Industrie mit Hochdruck reagiert hat. Nahezu alle großen Hersteller setzen heute auf sogenannte kobaltfreie Eisenphosphat-Batterien. Diese sind zwar minimal schwerer, dafür aber extrem langlebig, feuerfest und völlig frei von giftigen Schwermetallen. Zudem investieren wir massiv in geschlossene Recyclingkreisläufe: Durch moderne Verfahren können wir heute über sechsundneunzig Prozent aller wertvollen Metalle aus ausrangierten Akkus zurückgewinnen und für neue Batterien verwenden.\n\nModerator: Ein weiteres Hindernis für viele Menschen ohne eigene Garage ist die Ladeinfrastruktur im öffentlichen Raum.\n\nDr. Sommer: Da haben wir in Deutschland zweifellos noch Hausaufgaben zu erledigen. Entlang der Autobahnen haben wir bereits ein erstklassiges Netz von Schnellladesäulen, an denen ein Ladevorgang kaum länger als eine Kaffeepause dauert. Das eigentliche Nadelöhr sind jedoch Mietwohnungen in Großstädten. Es kann nicht sein, dass man ein E-Auto nur fahren kann, wenn man ein Eigenheim besitzt. Hier muss die Politik Vermieter gesetzlich verpflichten, Lademöglichkeiten auf Parkplätzen zu dulden, und die Kommunen müssen Laternen-Laden flächendeckend ausbauen.\n\nModerator: Frau Dr. Sommer, vielen Dank für diese aufschlussreichen Einblicke.",
      questions: [
        {
          number: 6,
          question: "Was stellt Dr. Sommer bezüglich der Reichweite moderner Elektrofahrzeuge fest?",
          options: [
            "Sie beträgt heute unter normalen Bedingungen 400 bis 500 Kilometer.",
            "Sie hat sich in den letzten fünf Jahren kaum verbessert.",
            "Sie reicht nur für kurze Strecken innerhalb der Innenstadt."
          ],
          answer: 0,
          explanation: "الدكتورة سومر تصرح: 'heute sind bei Neufahrzeugen vier- bis fünfhundert Kilometer unter realen Bedingungen Standard'."
        },
        {
          number: 7,
          question: "Wie haben sich die Batteriekosten in den vergangenen zehn Jahren entwickelt?",
          options: [
            "Sie sind um fast 80 Prozent gesunken.",
            "Sie sind wegen Rohstoffmangels stark gestiegen.",
            "Sie sind auf demselben Niveau geblieben."
          ],
          answer: 0,
          explanation: "تؤكد أن تكلفة الكيلوواط الساعي انخفضت بنسبة 80% تقريباً (um fast achtzig Prozent gesunken)."
        },
        {
          number: 8,
          question: "Wann werden Elektroautos laut Dr. Sommer im Kauf billiger sein als Verbrenner?",
          options: [
            "In spätestens drei Jahren.",
            "Erst in etwa zwanzig bis dreißig Jahren.",
            "Das wird voraussichtlich niemals der Fall sein."
          ],
          answer: 0,
          explanation: "تتوقع أن تصبح أرخص في غضون 3 سنوات على أقصى تقدير (spätestens in drei Jahren)."
        },
        {
          number: 9,
          question: "Welchen Vorteil bieten moderne Eisenphosphat-Batterien (LFP)?",
          options: [
            "Sie enthalten kein Kobalt und sind extrem langlebig und brandsicher.",
            "Sie sind viel leichter als herkömmliche Akkus.",
            "Sie können kostenlos produziert werden."
          ],
          answer: 0,
          explanation: "البطاريات الجديدة خالية من الكوبالت، آمنة ومقاومة للحريق وطويلة العمر."
        },
        {
          number: 10,
          question: "Wie viel Prozent der Metalle können moderne Recyclinganlagen zurückgewinnen?",
          options: [
            "Über 96 Prozent.",
            "Knapp 50 Prozent.",
            "Nur etwa 20 Prozent."
          ],
          answer: 0,
          explanation: "ذكرت صراحة استرجاع أكثر من 96% من المعادن القيمة (über sechsundneunzig Prozent)."
        },
        {
          number: 11,
          question: "Wie bewertet Dr. Sommer das Ladenetz entlang deutscher Autobahnen?",
          options: [
            "Als bereits erstklassig ausgebaut mit Schnellladestationen.",
            "Als völlig unzureichend und veraltet.",
            "Als viel zu teuer für normale Autofahrer."
          ],
          answer: 0,
          explanation: "وصفت شبكة الشحن السريع على الطرق السريعة بأنها من الدرجة الأولى (erstklassiges Netz von Schnellladesäulen)."
        },
        {
          number: 12,
          question: "Wo sieht Dr. Sommer das größte Problem beim Laden von Elektroautos?",
          options: [
            "Bei Mietwohnungen und Mehrfamilienhäusern in Großstädten.",
            "An öffentlichen Tankstellen auf dem Land.",
            "Auf den Parkplätzen von großen Supermärkten."
          ],
          answer: 0,
          explanation: "العقبة الكبرى تكمن في شقق الإيجار والمدن الكبرى لمن لا يملكون كراجاً خاصاً."
        },
        {
          number: 13,
          question: "Was fordert Dr. Sommer von der Politik bezüglich der Ladeinfrastruktur?",
          options: [
            "Gesetzliche Vorgaben für Vermieter und Ausbau von Laternen-Ladestationen.",
            "Ein sofortiges Verbot privater Ladestationen.",
            "Dass Autos nur noch tagsüber geladen werden dürfen."
          ],
          answer: 0,
          explanation: "تطالب بإلزام المؤجرين بالسماح بتركيب الشواحن وتوسيع شواحن أعمدة الإنارة في المدن."
        },
        {
          number: 14,
          question: "Welche Haltung vertritt Dr. Sommer insgesamt gegenüber der E-Mobilität?",
          options: [
            "Sehr optimistisch und von der raschen Wende überzeugt.",
            "Tief pessimistisch wegen unlösbarer technischer Mängel.",
            "Neutral, da sie Wasserstoffautos bevorzugt."
          ],
          answer: 0,
          explanation: "موقفها إيجابي ومتحمس جداً ومؤمن بالانتقال السريع نحو السيارات الكهربائية."
        },
        {
          number: 15,
          question: "Was meint Dr. Sommer mit dem Begriff »Quantensprung«?",
          options: [
            "Einen gewaltigen wissenschaftlichen und technischen Fortschritt.",
            "Eine gefährliche Explosion in einer Fabrik.",
            "Eine kleine unbedeutende Veränderung."
          ],
          answer: 0,
          explanation: "مصطلح Quantensprung في الألمانية يعني قفزة نوعية وتقدماً هائلاً في التكنولوجيا."
        }
      ]
    },

    // ==========================================
    // TEIL 3: Gesprächsrunde mit 3 Sprechern (Aufgaben 16–21) — Einmal hören
    // ==========================================
    {
      teilNumber: 3,
      title: {
        de: "Teil 3: Debatte — Smartphone-Verbot an Schulen?",
        ar: "الجزء 3: نقاش طاولة مستديرة بين 3 أشخاص حول حظر الهواتف بالمدارس (يُسمع مرة واحدة)"
      },
      instructions: {
        de: "Sie hören ein Gespräch zwischen einem Moderator und zwei Gästen. Sie hören das Gespräch einmal. Wer vertritt welche Meinung? Für die Aufgaben 16 bis 21 wählen Sie: Dr. Mertens, Frau Richter oder Beide.",
        ar: "ستستمع إلى نقاش بين المذيع وضيفين (الدكتور ميرتنز والأستاذة ريشتر). استمع مرة واحدة وحدد صاحب كل رأي من الأسئلة 16 إلى 21."
      },
      textType: "matching",
      maxPlays: 1,
      text: {
        title: "Diskussionsrunde: Smartphones im Schulunterricht",
        content: `**Teilnehmer:**
- **Moderator:** Frank Jansen
- **Gast 1:** Dr. Klaus Mertens (Kinderpsychologe)
- **Gast 2:** Sabine Richter (Leiterin eines Gymnasiums in Frankfurt)

**Transkript der Diskussion:**
*Moderator:* Herzlich willkommen. Immer mehr europäische Länder, darunter Frankreich und die Niederlande, verbieten Mobiltelefone an Schulen komplett. Herr Dr. Mertens, sollte Deutschland diesem Beispiel folgen?
*Dr. Mertens:* Ein klares Ja aus psychologischer Sicht. Unsere Studien zeigen eindeutig: Sobald das Smartphone nur auf dem Schreibtisch liegt — selbst im Stummmodus —, sinkt die kognitive Aufmerksamkeitsspanne von Schülern um bis zu dreißig Prozent. Es erzeugt eine permanente unterbewusste Erwartungshaltung, neue Nachrichten zu verpassen. An Schulen muss wieder Raum für ungeteilte Konzentration geschaffen werden.
*Frau Richter:* Da stimme ich Ihnen bezüglich der Ablenkung vollkommen zu, Herr Dr. Mertens. Auch wir an der Schule beobachten, dass Kinder in den Pausen kaum noch miteinander spielen, sondern stumm auf ihre Bildschirme starren. Aber ein totales Verbot geht an der Lebenswirklichkeit der Jugendlichen vorbei. Wir können die Digitalisierung nicht einfach an der Schultür aussperren.
*Moderator:* Frau Richter, was wäre Ihre Alternative zum generellen Verbot?
*Frau Richter:* Wir müssen Medienkompetenz lehren, statt blind zu verbieten! In unserem Gymnasium haben wir eine Handy-Garage eingeführt: Während des Unterrichts bleiben die Geräte stummgeschaltet in einer Box an der Wand, es sei denn, die Lehrkraft bindet sie gezielt für Recherche oder Quiz-Aufgaben ein. Kinder müssen lernen, selbstbestimmt mit dem Gerät umzugehen.
*Dr. Mertens:* Das klingt in der Theorie verlockend, Frau Richter, funktioniert in der Praxis aber selten. Selbst Erwachsene können ihr Nutzungsverhalten kaum kontrollieren. Wie sollen es dann Elf- oder Zwölfjährige schaffen? Ein striktes Verbot auf dem gesamten Schulgelände entlastet die Schüler spürbar vom sozialen Druck auf Plattformen wie TikTok oder Instagram.
*Frau Richter:* Beim Schutz vor Cybermobbing auf Social Media sind wir uns absolut einig. Da tragen wir als Schule eine enorme Verantwortung, und wir müssen Eltern viel stärker in die Pflicht nehmen, was die Bildschirmzeiten zu Hause betrifft.`
      },
      questions: [
        {
          number: 16,
          question: "Wer betont, dass bereits die bloße Anwesenheit des Handys auf dem Tisch die Konzentrationsfähigkeit der Schüler mindert?",
          options: ["Dr. Mertens", "Frau Richter", "Beide"],
          answer: 0,
          explanation: "الدكتور ميرتنز يستشهد بالدراسات النفسية التي تؤكد تراجع التركيز بنسبة 30% لمجرد وجود الهاتف أمام الطالب."
        },
        {
          number: 17,
          question: "Wer stellt fest, dass Schüler in den Pausen seltener sozial interagieren, weil sie auf Displays blicken?",
          options: ["Dr. Mertens", "Frau Richter", "Beide"],
          answer: 1,
          explanation: "مديرة المدرسة السيدة ريشتر تلاحظ من واقع عملها بالمدرسة أن الطلاب توقفوا عن اللعب معاً وأصبحوا يحدقون في الشاشات."
        },
        {
          number: 18,
          question: "Wer plädiert dafür, Smartphones gezielt als pädagogisches Lernwerkzeug im Unterricht einzusetzen?",
          options: ["Dr. Mertens", "Frau Richter", "Beide"],
          answer: 1,
          explanation: "السيدة ريشتر تطالب بتعليم المهارات الرقمية وتوظيف الهاتف في البحث وإجراء الاختبارات التفاعلية."
        },
        {
          number: 19,
          question: "Wer hält ein totales Verbot für das wirksamste Mittel, um Kinder vor permanentem Online-Druck zu schützen?",
          options: ["Dr. Mertens", "Frau Richter", "Beide"],
          answer: 0,
          explanation: "الدكتور ميرتنز يرى أن الحظر الكامل في المدرسة هو الحل العملي الوحيد لحماية الأطفال وتخفيف الضغط العصبي."
        },
        {
          number: 20,
          question: "Wer sieht die Notwendigkeit, Schüler vor den Gefahren von Cybermobbing auf sozialen Medien zu schützen?",
          options: ["Dr. Mertens", "Frau Richter", "Beide"],
          answer: 2,
          explanation: "كلا الطرفين (Beide) متفقان تماماً على خطورة التنمر الإلكتروني وضرورة حماية الطلاب منه."
        },
        {
          number: 21,
          question: "Wer fordert, dass auch die Eltern stärker in die Verantwortung für die Mediennutzung ihrer Kinder genommen werden müssen?",
          options: ["Dr. Mertens", "Frau Richter", "Beide"],
          answer: 1,
          explanation: "السيدة ريشتر تختم بالتأكيد على وجوب إشراك أولياء الأمور وتحميلهم المسؤولية عن أوقات الشاشات في المنزل."
        }
      ]
    },

    // ==========================================
    // TEIL 4: Wissenschaftlicher Vortrag (Aufgaben 22–30) — Zweimal hören
    // ==========================================
    {
      teilNumber: 4,
      title: {
        de: "Teil 4: Fachvortrag — Resilienz im Berufsleben",
        ar: "الجزء 4: محاضرة أكاديمية حول المرونة النفسية والتعامل مع ضغوط العمل (تُسمع مرتين)"
      },
      instructions: {
        de: "Sie hören einen Vortrag von Prof. Dr. Martin Krause über das Thema 'Psychologische Resilienz am Arbeitsplatz'. Sie hören den Vortrag zweimal. Wählen Sie bei den Aufgaben 22 bis 30 die richtige Lösung: a, b oder c.",
        ar: "ستستمع إلى محاضرة للبروفيسور كلاوزه حول المرونة النفسية ومقاومة الإجهاد مرتين. أجب عن الأسئلة 22 إلى 30 باختيار (a أو b أو c)."
      },
      textType: "audio",
      maxPlays: 2,
      sharedAudio: "Meine sehr geehrten Damen und Herren, ich freue mich über Ihr zahlreiches Erscheinen. Das Thema unseres heutigen Abends lautet: 'Resilienz — Das Immunsystem der menschlichen Seele im Berufsalltag'. Der Begriff Resilienz stammt ursprünglich aus der Werkstoffkunde und beschreibt Körper, die nach starker Druckbelastung wieder in ihre ursprüngliche Form zurückfedern, wie etwa ein Gummiball. In der Psychologie verstehen wir darunter die Fähigkeit eines Menschen, Krisen, Rückschläge und lang anhaltenden Stress ohne dauerhafte seelische Beeinträchtigungen zu überstehen.\n\nLange Zeit ging die Forschung davon aus, dass Resilienz eine angeborene Charaktereigenschaft sei — man hat sie oder man hat sie nicht. Heute wissen wir dank moderner Neurowissenschaften: Resilienz ist wie ein Muskel, den man bis ins hohe Alter trainieren und stärken kann. \n\nDie psychologische Forschung unterscheidet im Wesentlichen sieben Säulen der Resilienz. Die erste und wichtigste Säule ist der sogenannte 'Realistische Optimismus'. Das bedeutet nicht, die Welt durch eine rosarote Brille zu betrachten oder Probleme schönzureden. Es bedeutet vielmehr die feste Zuversicht: 'Diese Krise ist schwierig, aber sie ist zeitlich begrenzt und ich habe Handlungsmöglichkeiten.'\n\nDie zweite Säule ist die 'Akzeptanz'. Viele Menschen verschwenden enorme Mengen an Energie darauf, Dinge zu beklagen, die sie schlichtweg nicht ändern können — etwa eine wirtschaftliche Rezession oder das Verhalten des Vorgesetzten. Resiliente Menschen trennen messerscharf zwischen dem, was außerhalb ihrer Kontrolle liegt, und dem Bereich, den sie aktiv beeinflussen können.\n\nEine dritte fundamentale Säule ist die 'Lösungsorientierung'. Statt stundenlang in der Frage zu verharren: 'Warum passiert das ausgerechnet mir?', wechseln resiliente Persönlichkeiten blitzschnell zur Frage: 'Was ist der nächste konkrete Schritt, um die Situation zu verbessern?'\n\nBesonders warnen möchte ich jedoch vor einem weit verbreiteten Missverständnis: Resilienz bedeutet keineswegs, grenzenlos belastbar zu sein oder alle Anforderungen stumm zu ertragen. Wer seine eigenen physischen Grenzen ignoriert, steuert unweigerlich auf einen Zusammenbruch zu. Echte seelische Widerstandskraft zeigt sich gerade darin, rechtzeitig 'Nein' zu sagen, Pausen einzufordern und sich im Bedarfsfall frühzeitig Hilfe zu holen. Ich danke Ihnen für Ihre Aufmerksamkeit.",
      questions: [
        {
          number: 22,
          question: "Woher stammt der Begriff »Resilienz« ursprünglich?",
          options: [
            "Aus der Werkstoffkunde und Materialprüfung.",
            "Aus der antiken griechischen Philosophie.",
            "Aus der modernen Kinderpädagogik."
          ],
          answer: 0,
          explanation: "المحاضر يشرح أن المصطلح مأخوذ من علم المواد (Werkstoffkunde) لوصف الأجسام التي تعود لشكلها بعد الضغط."
        },
        {
          number: 23,
          question: "Welche Erkenntnis hat die moderne Neurowissenschaft über Resilienz gewonnen?",
          options: [
            "Sie ist wie ein Muskel lebenslang trainierbar.",
            "Sie ist eine unveränderliche, genetisch festgelegte Eigenschaft.",
            "Man verliert sie vollständig ab dem fünfzigsten Lebensjahr."
          ],
          answer: 0,
          explanation: "تؤكد الأبحاث العصبية الحديثة أن المرونة النفسية كالعضلة يمكن تدريبها وتقويتها حتى سن متأخرة."
        },
        {
          number: 24,
          question: "Was versteht Prof. Krause unter »realistischem Optimismus«?",
          options: [
            "Die Überzeugung, dass Krisen überwindbar sind und man Handlungsspielraum hat.",
            "Das vollständige Ignorieren aller negativen Tatsachen im Leben.",
            "Die Hoffnung, dass andere Menschen alle Probleme für einen lösen."
          ],
          answer: 0,
          explanation: "التفاؤل الواقعي يعني الثقة بأن الأزمة مؤقتة وبوجود خيارات وقدرة على الفعل والتأثير."
        },
        {
          number: 25,
          question: "Was tun resiliente Menschen im Sinne der Säule »Akzeptanz«?",
          options: [
            "Sie verschwenden keine Energie an Dinge, die sie nicht kontrollieren können.",
            "Sie geben bei den ersten Schwierigkeiten sofort auf.",
            "Sie stimmen immer allen Forderungen ihres Vorgesetzten zu."
          ],
          answer: 0,
          explanation: "مبدأ التقبل (Akzeptanz) يعني عدم استنزاف الطاقة في محاولة تغيير ما لا يخضع لسيطرة الإنسان."
        },
        {
          number: 26,
          question: "Welche Frage stellen sich lösungsorientierte Menschen bei Problemen?",
          options: [
            "»Was ist der nächste konkrete Schritt zur Besserung?«",
            "»Warum trifft dieses Unglück immer nur mich?«",
            "»Wer ist an diesem schrecklichen Fehler schuld?«"
          ],
          answer: 0,
          explanation: "التركيز على الحل (Lösungsorientierung) يتمحور حول: ما هي الخطوة العملية التالية لتحسين الوضع؟"
        },
        {
          number: 27,
          question: "Vor welchem weit verbreiteten Missverständnis warnt der Referent?",
          options: [
            "Dass Resilienz bedeutet, alles stumm zu ertragen und unendlich belastbar zu sein.",
            "Dass man für Resilienz teure Medikamente einnehmen muss.",
            "Dass optimistische Menschen weniger Freunde im Leben haben."
          ],
          answer: 0,
          explanation: "حذر من الفهم الخاطئ بأن المرونة تعني تحمل كل شيء بصمت وتجاهل الحدود الجسدية."
        },
        {
          number: 28,
          question: "Wie äußert sich laut Prof. Krause wahre seelische Widerstandskraft?",
          options: [
            "Darin, rechtzeitig Grenzen zu setzen und sich bei Bedarf Hilfe zu suchen.",
            "Darin, niemals Pausen während des Arbeitstages zu machen.",
            "Darin, Probleme vor den Kollegen geheim zu halten."
          ],
          answer: 0,
          explanation: "المقاومة النفسية الحقيقية تظهر في قول 'لا' في الوقت المناسب وطلب المساعدة وأخذ فترات راحة."
        },
        {
          number: 29,
          question: "Womit vergleicht der Referent die Resilienz zu Beginn seines Vortrags?",
          options: [
            "Mit einem elastischen Gummiball und dem Immunsystem der Seele.",
            "Mit einem unbeweglichen Felsen im Sturm.",
            "Mit einem zerbrechlichen Glas."
          ],
          answer: 0,
          explanation: "شبه المرونة بكرة مطاطية مرنة وبـ 'الجهاز المناعي للنفس البشرية'."
        },
        {
          number: 30,
          question: "Wie viele Säulen der Resilienz unterscheidet die psychologische Forschung im Vortrag?",
          options: [
            "Sieben Säulen.",
            "Drei Säulen.",
            "Zwölf Säulen."
          ],
          answer: 0,
          explanation: "أوضح البروفيسور كلاوزه وجود 7 ركائز للمرونة النفسية (sieben Säulen der Resilienz)."
        }
      ]
    }
  ]
};
