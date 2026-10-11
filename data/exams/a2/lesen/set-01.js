// website/data/exams/a2/lesen/set-01.js — Goethe-Zertifikat A2: Lesen (Modellsatz 1)
// Original exam-style practice adhering strictly to the official Goethe A2 format.

window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA["a2-lesen-set-01"] = {
  id: "a2-lesen-set-01",
  level: "a2",
  module: "lesen",
  setNumber: 1,
  title: {
    de: "Goethe-Zertifikat A2 — Lesen (Modellsatz 1)",
    ar: "امتحان غوته A2 الرسمي — وحدة القراءة (النموذج 1)"
  },
  durationMinutes: 30,
  maxScore: 25,
  passScore: 15, // 60%
  totalItems: 20,
  instructions: {
    de: "Dieser Test hat 4 Teile. Sie haben 30 Minuten Zeit. Lesen Sie die Texte und lösen Sie die Aufgaben 1 bis 20.",
    ar: "يتكون هذا الاختبار من 4 أجزاء. لديك 30 دقيقة للإجابة. اقرأ النصوص وحل الأسئلة من 1 إلى 20."
  },
  teile: [
    // ==========================================
    // TEIL 1: Zeitungstext (Aufgaben 1–5, a/b/c)
    // ==========================================
    {
      teilNumber: 1,
      title: { de: "Teil 1: Zeitungsartikel", ar: "الجزء 1: مقال صحفي" },
      instructions: {
        de: "Lesen Sie den Text und die Aufgaben 1 bis 5. Wählen Sie bei jeder Aufgabe die richtige Lösung: a, b oder c.",
        ar: "اقرأ النص الصحفي التالي والأسئلة من 1 إلى 5. اختر الإجابة الصحيحة لكل سؤال: a أو b أو c."
      },
      textType: "article",
      text: {
        title: "Ein junger Bäcker mit großen Ideen",
        content: `Lukas Bergmann ist 24 Jahre alt und lebt in München. Vor einem Jahr hat er seine eigene Bäckerei im Stadtteil Haidhausen eröffnet. Während viele Bäckereien heute fertige Teigmischungen aus der Fabrik benutzen, macht Lukas alles selbst von Hand.

„Mein Arbeitstag beginnt sehr früh“, erzählt Lukas mit einem Lächeln. „Um drei Uhr morgens stehe ich in der Backstube. Aber das macht mir nichts aus, denn das Brotbacken ist meine Leidenschaft.“ Sein Großvater war ebenfalls Bäcker und hat ihm als Kind die ersten Rezepte gezeigt.

In seiner Bäckerei „Korn & Kruste“ verkauft Lukas nur Produkte aus biologischen Zutaten. Die Kunden kommen nicht nur aus Haidhausen, sondern aus ganz München. Besonders am Samstagvormittag stehen die Menschen oft in einer langen Schlange vor dem Geschäft. Lukas bietet auch glutenfreies Brot an, das bei Allergikern sehr beliebt ist. 

Für die Zukunft plant Lukas kleine Backkurse am Sonntagnachmittag. „Viele Kunden fragen mich, wie man zu Hause ein gutes Sauerteigbrot backen kann. Das möchte ich ihnen gerne zeigen“, sagt er.`
      },
      questions: [
        {
          number: 1,
          question: "Was ist das Besondere an der Bäckerei von Lukas?",
          options: [
            "Er kauft fertige Mischungen aus der Fabrik.",
            "Er stellt alle Backwaren selbst von Hand her.",
            "Er arbeitet nur am Wochenende in der Backstube."
          ],
          answer: 1, // index 1 = b
          explanation: "النص يوضح: 'macht Lukas alles selbst von Hand' بعكس المخابز التي تشتري خلطات جاهزة من المصنع."
        },
        {
          number: 2,
          question: "Warum stört es Lukas nicht, so früh aufzustehen?",
          options: [
            "Weil sein Großvater ihn immer weckt.",
            "Weil er das Brotbacken liebt.",
            "Weil er am Nachmittag schlafen kann."
          ],
          answer: 1, // index 1 = b
          explanation: "ذكر لوكاس: 'denn das Brotbacken ist meine Leidenschaft' (لأن خبز الخبز هو شغفي وحبي)."
        },
        {
          number: 3,
          question: "Woher hat Lukas seine ersten Rezepte?",
          options: [
            "Aus einem Kochbuch aus dem Internet.",
            "Aus einer Bäckereischule in Haidhausen.",
            "Von seinem Großvater."
          ],
          answer: 2, // index 2 = c
          explanation: "النص يذكر: 'Sein Großvater war ebenfalls Bäcker und hat ihm als Kind die ersten Rezepte gezeigt'."
        },
        {
          number: 4,
          question: "Die Kunden schätzen an seiner Bäckerei besonders, dass...",
          options: [
            "es biologische Zutaten und glutenfreies Brot gibt.",
            "die Brote sehr billig sind.",
            "das Geschäft rund um die Uhr geöffnet ist."
          ],
          answer: 0, // index 0 = a
          explanation: "النص يذكر: 'verkauft Lukas nur Produkte aus biologischen Zutaten' و 'Lukas bietet auch glutenfreies Brot an'."
        },
        {
          number: 5,
          question: "Was möchte Lukas in der Zukunft machen?",
          options: [
            "Eine zweite Filiale in Berlin eröffnen.",
            "Backkurse für seine Kunden anbieten.",
            "Am Sonntag keinen Sauerteig mehr backen."
          ],
          answer: 1, // index 1 = b
          explanation: "النص يذكر بوضوح: 'Für die Zukunft plant Lukas kleine Backkurse am Sonntagnachmittag'."
        }
      ]
    },

    // ==========================================
    // TEIL 2: Informationstafel (Aufgaben 6–10, a/b/c)
    // ==========================================
    {
      teilNumber: 2,
      title: { de: "Teil 2: Informationstafel im Einkaufszentrum", ar: "الجزء 2: لوحة الدليل في المركز التجاري" },
      instructions: {
        de: "Sie sind im Einkaufszentrum »StadtGalerie«. Lesen Sie die Informationstafel und die Aufgaben 6 bis 10. Wo finden Sie, was Sie suchen? Wählen Sie a, b oder c.",
        ar: "أنت داخل المركز التجاري »StadtGalerie«. اقرأ دليل الطوابق والأسئلة من 6 إلى 10. في أي طابق تجد ما تبحث عنه؟ اختر a أو b أو c."
      },
      textType: "directory",
      text: {
        title: "Einkaufszentrum »StadtGalerie« — Wegweiser",
        content: `• 3. Obergeschoss (3. OG):
  - Gastronomie & Food Court (Italienisch, Asiatisch, Burger)
  - CineStar Kino
  - Fitnessstudio »FitLife«
  - Wickelraum & Kunden-WCs

• 2. Obergeschoss (2. OG):
  - Elektronikmarkt »Saturn« (Laptops, Handys, Fernseher)
  - Buchhandlung »Thalia« (Bücher, Schreibwaren, Zeitschriften)
  - Fotostudio & Passbilder
  - Kundenservice & Geschenkgutscheine

• 1. Obergeschoss (1. OG):
  - Herrenmode & Anzüge
  - Kindermode & Spielwaren
  - Sportgeschäft »Intersport« (Sportbekleidung, Fahrräder, Laufschuhe)
  - Schuhhaus »Rieker« (Damen- und Herrenschuhe)

• Erdgeschoss (EG):
  - Damenmode & Accessoires
  - Parfümerie »Douglas« & Naturkosmetik
  - Blumenladen & Floristik
  - Bäckerei & Café »Florian«
  - Infopoint am Haupteingang

• Untergeschoss (UG):
  - EDEKA Supermarkt & Bio-Markt
  - Apotheke »St. Georg«
  - Schuh- und Schlüsseldienst
  - Tiefgarage (Parkhaus)`
      },
      questions: [
        {
          number: 6,
          question: "Sie möchten ein Lehrbuch und ein Notizheft für Ihren Deutschkurs kaufen. Wohin gehen Sie?",
          options: [
            "Ins Erdgeschoss (EG)",
            "Ins 1. Obergeschoss (1. OG)",
            "Ins 2. Obergeschoss (2. OG)"
          ],
          answer: 2, // index 2 = c (2. OG)
          explanation: "الكتب والدفاتر (Bücher & Schreibwaren) تجدها في مكتبة Thalia في الطابق الثاني (2. OG)."
        },
        {
          number: 7,
          question: "Sie brauchen neue Laufschuhe für das Joggen am Wochenende. Wohin gehen Sie?",
          options: [
            "Ins 1. Obergeschoss (1. OG)",
            "Ins Erdgeschoss (EG)",
            "Ins Untergeschoss (UG)"
          ],
          answer: 0, // index 0 = a (1. OG)
          explanation: "أحذية وملابس الرياضة (Sportbekleidung & Laufschuhe) تجدها في متجر Intersport في الطابق الأول (1. OG)."
        },
        {
          number: 8,
          question: "Sie haben Kopfschmerzen und brauchen dringend eine Schmerztablette. Wohin gehen Sie?",
          options: [
            "Ins 3. Obergeschoss (3. OG)",
            "Ins Untergeschoss (UG)",
            "Ins Erdgeschoss (EG)"
          ],
          answer: 1, // index 1 = b (UG)
          explanation: "الأدوية تشتريها من الصيدلية (Apotheke St. Georg) في الطابق السفلي (Untergeschoss - UG)."
        },
        {
          number: 9,
          question: "Sie möchten mit Freunden eine Pizza essen und sich ausruhen. Wohin gehen Sie?",
          options: [
            "Ins 3. Obergeschoss (3. OG)",
            "Ins 2. Obergeschoss (2. OG)",
            "Ins Untergeschoss (UG)"
          ],
          answer: 0, // index 0 = a (3. OG)
          explanation: "المطاعم وركن المأكولات (Gastronomie & Food Court) يقع في الطابق الثالث (3. OG)."
        },
        {
          number: 10,
          question: "Sie möchten neue Passfotos für Ihren deutschen Aufenthaltstitel machen lassen. Wohin gehen Sie?",
          options: [
            "Ins Erdgeschoss (EG)",
            "Ins 2. Obergeschoss (2. OG)",
            "Ins 1. Obergeschoss (1. OG)"
          ],
          answer: 1, // index 1 = b (2. OG)
          explanation: "استوديو الصور وصور جواز السفر (Fotostudio & Passbilder) موجود في الطابق الثاني (2. OG)."
        }
      ]
    },

    // ==========================================
    // TEIL 3: E-Mails & Mitteilungen (Aufgaben 11–15, Richtig/Falsch)
    // ==========================================
    {
      teilNumber: 3,
      title: { de: "Teil 3: Mitteilungen und E-Mails", ar: "الجزء 3: الرسائل والإعلانات القصيرة" },
      instructions: {
        de: "Lesen Sie die 5 kurzen Mitteilungen und die Aufgaben 11 bis 15. Ist die Aussage richtig oder falsch?",
        ar: "اقرأ الرسائل والملاحظات الخمس القصيرة، ثم حدد ما إذا كانت الجملة صحيحة أم خاطئة (Richtig / Falsch)."
      },
      textType: "messages",
      questions: [
        {
          number: 11,
          message: `Liebe Kolleginnen und Kollegen,
am kommenden Samstag möchte ich meinen 30. Geburtstag mit euch im Englischen Garten feiern! Wir treffen uns um 14:00 Uhr am Monopteros für ein Picknick. Bringt bitte eigene Decken mit. Für Essen und Getränke sorge ich. Falls es regnet, feiern wir bei mir zu Hause in der Leopoldstraße 45.
Liebe Grüße, Florian`,
          question: "Wenn das Wetter schlecht ist, fällt Florians Geburtstagsfeier aus.",
          options: ["Richtig", "Falsch"],
          answer: 1, // Falsch
          explanation: "خطأ (Falsch): الحفلة لن تُلغى إذا أمطرت، بل ستُقام في منزله: 'Falls es regnet, feiern wir bei mir zu Hause'."
        },
        {
          number: 12,
          message: `Praxis Dr. med. Weber — Terminerinnerung:
Sehr geehrter Herr Mansouri,
wir erinnern Sie an Ihren Kontrolltermin am Dienstag, 14. Oktober, um 09:30 Uhr. Bitte bringen Sie Ihre elektronische Gesundheitskarte mit und kommen Sie etwa 10 Minuten vor dem Termin in unsere Praxis. Falls Sie verhindert sind, sagen Sie bitte mindestens 24 Stunden vorher ab.`,
          question: "Herr Mansouri soll seine Krankenkassenkarte zum Termin mitbringen.",
          options: ["Richtig", "Falsch"],
          answer: 0, // Richtig
          explanation: "صحيح (Richtig): الرسالة تطلب صراحة: 'Bitte bringen Sie Ihre elektronische Gesundheitskarte mit'."
        },
        {
          number: 13,
          message: `Aushang an alle Hausbewohner:
Am kommenden Mittwoch, dem 15. Oktober, finden zwischen 08:00 und 12:00 Uhr wichtige Wartungsarbeiten an der zentralen Heizungsanlage statt. In diesem Zeitraum gibt es im gesamten Gebäude kein warmes Wasser. Die Heizung funktioniert ab 13:00 Uhr wieder normal.
Hausverwaltung Schmidt`,
          question: "Die Bewohner können am Mittwochmorgen warm duschen.",
          options: ["Richtig", "Falsch"],
          answer: 1, // Falsch
          explanation: "خطأ (Falsch): الإعلان يؤكد عدم توفر ماء دافئ في الصباح: 'In diesem Zeitraum gibt es im gesamten Gebäude kein warmes Wasser'."
        },
        {
          number: 14,
          message: `Hallo Amine,
ich fahre von Donnerstag bis Sonntag für ein langes Wochenende nach Hamburg. Könntest du bitte am Freitagabend und am Samstag nach meinen beiden Katzen schauen und ihnen Futter geben? Der Schlüssel liegt wie immer unter der Fußmatte. Als Dankeschön habe ich dir Schokolade auf den Küchentisch gelegt!
Danke dir, Maria`,
          question: "Amine soll sich während Marias Reise um ihre Haustiere kümmern.",
          options: ["Richtig", "Falsch"],
          answer: 0, // Richtig
          explanation: "صحيح (Richtig): ماريا تطلب من أمين إطعام قطتيها ورعايتهما: 'nach meinen beiden Katzen schauen und ihnen Futter geben'."
        },
        {
          number: 15,
          message: `Sehr geehrte Kursteilnehmer,
aufgrund einer Erkrankung unserer Dozentin Frau Becker muss der Deutschkurs am Freitag, 17. Oktober, leider entfallen. Der Unterricht wird am Montag, 20. Oktober, von 17:30 bis 19:45 Uhr nachgeholt. Die Hausaufgaben für Montag finden Sie auf unserer Online-Plattform.
Ihre Volkshochschule`,
          question: "Der Deutschunterricht am Freitag findet wie gewohnt statt.",
          options: ["Richtig", "Falsch"],
          answer: 1, // Falsch
          explanation: "خطأ (Falsch): الدرس يوم الجمعة ملغى وسيتم تعويضه يوم الاثنين: 'muss der Deutschkurs am Freitag leider entfallen'."
        }
      ]
    },

    // ==========================================
    // TEIL 4: Anzeigen zuordnen (Aufgaben 16–20)
    // ==========================================
    {
      teilNumber: 4,
      title: { de: "Teil 4: Anzeigen zuordnen", ar: "الجزء 4: مطابقة الإعلانات" },
      instructions: {
        de: "Lesen Sie die Aufgaben 16 bis 20 und die Anzeigen a bis f. Welche Anzeige passt zu welcher Person? Für eine Aufgabe gibt es keine passende Anzeige, wählen Sie in diesem Fall den Buchstaben x (oder die Option 'Keine Anzeige').",
        ar: "اقرأ مواقف الأشخاص من 16 إلى 20 والإعلانات a إلى f. أي إعلان يناسب كل شخص؟ اختر الحرف المناسب."
      },
      textType: "matching",
      ads: [
        {
          id: "a",
          title: "Anzeige a: Sprachstudio Aktiv",
          content: "Deutsch lernen nach der Arbeit! Abendkurse Niveau A2 und B1. Immer montags und mittwochs von 18:30 bis 20:30 Uhr. Kleine Gruppen, erfahrene Lehrkräfte. Jetzt kostenlos einsteigen!"
        },
        {
          id: "b",
          title: "Anzeige b: Bergfreunde AlpenClub",
          content: "Raus in die Natur! Jeden Sonntag geführte Wanderungen in den Bayerischen Voralpen für Anfänger und Fortgeschrittene. Gemeinsame Anreise mit dem Zug ab Hauptbahnhof. Teilnahme frei!"
        },
        {
          id: "c",
          title: "Anzeige c: Bella Italia — Kochschule",
          content: "Lerne kochen wie in Italien! Unser Wochenendkurs am Samstag zeigt dir, wie du frische Pasta, traditionelle Saucen und Tiramisu selbst zubereitest. Alle Zutaten inklusive!"
        },
        {
          id: "d",
          title: "Anzeige d: RadDoc — Fahrradreparatur & Service",
          content: "Platter Reifen? Bremsen kaputt? Wir reparieren Ihr Fahrrad schnell, zuverlässig und günstig. Reparatur innerhalb von 24 Stunden! Verleih von Ersatzrädern möglich."
        },
        {
          id: "e",
          title: "Anzeige e: Musikschule KlingKlang",
          content: "Klavier- und Gitarrenunterricht für jedes Alter. Individueller Einzelunterricht am Nachmittag. Erste Probestunde gratis. Leihinstrumente vorhanden."
        },
        {
          id: "f",
          title: "Anzeige f: Yoga & Wellness Oase",
          content: "Stressige Woche gehabt? Entspannen Sie sich bei unserem Wochenend-Yogakurs für Anfänger. Sanfte Dehnübungen und Meditation jeden Samstag und Sonntag. Jetzt anmelden!"
        }
      ],
      questions: [
        {
          number: 16,
          situation: "Markus möchte am Sonntag draußen in den Bergen wandern und frische Luft genießen.",
          options: ["a", "b", "c", "d", "e", "f"],
          answer: 1, // b: Bergfreunde AlpenClub
          explanation: "يناسبه الإعلان b (Bergfreunde AlpenClub): 'Jeden Sonntag geführte Wanderungen in den Bayerischen Voralpen'."
        },
        {
          number: 17,
          situation: "Sarah arbeitet tagsüber Vollzeit und sucht einen Deutschkurs, den sie abends besuchen kann.",
          options: ["a", "b", "c", "d", "e", "f"],
          answer: 0, // a: Sprachstudio Aktiv
          explanation: "يناسبها الإعلان a (Sprachstudio Aktiv): 'Abendkurse Niveau A2 und B1. Immer montags und mittwochs von 18:30 bis 20:30 Uhr'."
        },
        {
          number: 18,
          situation: "Alex kocht am Wochenende gerne und möchte lernen, wie man echte italienische Pasta selbst macht.",
          options: ["a", "b", "c", "d", "e", "f"],
          answer: 2, // c: Bella Italia Kochschule
          explanation: "يناسبه الإعلان c (Kochschule): 'Unser Wochenendkurs am Samstag zeigt dir, wie du frische Pasta selbst zubereitest'."
        },
        {
          number: 19,
          situation: "Julian fährt jeden Tag mit dem Rad zur Arbeit, aber seine Bremsen und Reifen sind kaputt.",
          options: ["a", "b", "c", "d", "e", "f"],
          answer: 3, // d: RadDoc Fahrradreparatur
          explanation: "يناسبه الإعلان d (RadDoc): 'Platter Reifen? Bremsen kaputt? Wir reparieren Ihr Fahrrad schnell innerhalb von 24 Stunden'."
        },
        {
          number: 20,
          situation: "Elena fühlt sich nach der Arbeitswoche gestresst und sucht Entspannung und sanfte Bewegung am Wochenende.",
          options: ["a", "b", "c", "d", "e", "f"],
          answer: 5, // f: Yoga & Wellness Oase
          explanation: "يناسبها الإعلان f (Yoga & Wellness Oase): 'Entspannen Sie sich bei unserem Wochenend-Yogakurs für Anfänger'."
        }
      ]
    }
  ]
};
