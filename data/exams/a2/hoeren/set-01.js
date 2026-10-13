// website/data/exams/a2/hoeren/set-01.js — Goethe-Zertifikat A2: Hören (Modellsatz 1)

window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA["a2-hoeren-set-01"] = {
  id: "a2-hoeren-set-01",
  level: "a2",
  module: "hoeren",
  setNumber: 1,
  title: {
    de: "Goethe-Zertifikat A2 — Hören (Modellsatz 1)",
    ar: "امتحان غوته A2 الرسمي — وحدة الاستماع (النموذج 1)"
  },
  durationMinutes: 30,
  maxScore: 20,
  passScore: 12, // 60%
  totalItems: 15,
  instructions: {
    de: "Dieser Test hat 3 Teile. Hören Sie die Texte und lösen Sie die Aufgaben 1 bis 15.",
    ar: "يتكون اختبار الاستماع من 3 أجزاء (15 سؤالاً). استمع إلى التسجيلات الصوتية وأجب عن الأسئلة."
  },
  teile: [
    // ==========================================
    // TEIL 1: Radioansagen & Telefonnachrichten (Aufgaben 1–5)
    // ==========================================
    {
      teilNumber: 1,
      title: { de: "Teil 1: Kurze Ansagen am Telefon und im Radio", ar: "الجزء 1: رسائل هاتفية وإعلانات إذاعية قصيرة" },
      instructions: {
        de: "Sie hören fünf kurze Texte. Wählen Sie bei jeder Aufgabe die richtige Lösung: a, b oder c.",
        ar: "استمع إلى التسجيلات الخمسة القصيرة، واختر الإجابة الصحيحة لكل سؤال."
      },
      textType: "audio",
      questions: [
        {
          number: 1,
          audioText: "Guten Tag, Herr Al-Masri, hier ist die Zahnarztpraxis Dr. Klein. Ihr Termin am Donnerstag um vierzehn Uhr muss leider verschoben werden, weil Herr Doktor Klein auf einer Fortbildung ist. Können Sie stattdessen am Freitag um zehn Uhr dreißig kommen? Bitte rufen Sie uns kurz zurück.",
          question: "Wann soll Herr Al-Masri zum Zahnarzt kommen?",
          options: [
            "Am Donnerstag um 14:00 Uhr.",
            "Am Freitag um 10:30 Uhr.",
            "Am Montag um 09:00 Uhr."
          ],
          answer: 1,
          explanation: "التسجيل الصوتي يقول: 'Können Sie stattdessen am Freitag um zehn Uhr dreißig kommen?' (يوم الجمعة الساعة 10:30)."
        },
        {
          number: 2,
          audioText: "Achtung, eine Durchsage für die Fahrgäste am Hauptbahnhof: Der Intercity-Express nach Hamburg, planmäßige Abfahrt um sechzehn Uhr zwanzig von Gleis sieben, fährt heute wegen einer Weichenstörung von Gleis zwölf ab. Bitte beachten Sie den Gleiswechsel.",
          question: "Von welchem Gleis fährt der Zug nach Hamburg heute ab?",
          options: [
            "Von Gleis 7.",
            "Von Gleis 12.",
            "Von Gleis 16."
          ],
          answer: 1,
          explanation: "التسجيل يوضح تغيير الرصيف من 7 إلى 12: 'fährt heute wegen einer Weichenstörung von Gleis zwölf ab'."
        },
        {
          number: 3,
          audioText: "Und hier ist das Wetter für das Wochenende in Süddeutschland: Am Samstag scheint den ganzen Tag die Sonne bei warmen vierundzwanzig Grad. Am Sonntag ziehen ab Mittag dunkle Wolken auf und es regnet stark. Nehmen Sie am Sonntag also unbedingt einen Regenschirm mit!",
          question: "Wie wird das Wetter am Samstag?",
          options: [
            "Es regnet den ganzen Tag stark.",
            "Es ist sonnig und warm bei 24 Grad.",
            "Es schneit in Süddeutschland."
          ],
          answer: 1,
          explanation: "يوم السبت مشمس ودافئ (24 درجة): 'Am Samstag scheint den ganzen Tag die Sonne bei warmen vierundzwanzig Grad'."
        },
        {
          number: 4,
          audioText: "Hallo Nadia, hier ist Lukas. Wir wollten uns doch heute Abend vor dem Kino treffen. Leider muss ich im Büro noch eine dringende E-Mail fertig schreiben und schaffe es erst um neunzehn Uhr fünfzehn. Kaufst du bitte schon die Kinokarten? Ich gebe dir das Geld sofort, wenn ich da bin.",
          question: "Was soll Nadia vor dem Film machen?",
          options: [
            "Auf Lukas im Büro warten.",
            "Schon einmal die Eintrittskarten für das Kino kaufen.",
            "Nach Hause gehen, weil Lukas krank ist."
          ],
          answer: 1,
          explanation: "لوكاس يطلب من ناديا شراء تذاكر السينما: 'Kaufst du bitte schon die Kinokarten?'."
        },
        {
          number: 5,
          audioText: "Liebe Kundinnen und Kunden im Möbelhaus Wohnwelt! In unserer Küchenabteilung im zweiten Stock bieten wir Ihnen heute zwanzig Prozent Rabatt auf alle Kaffeemaschinen und Geschirrsets. Besuchen Sie auch unser Restaurant im dritten Stock: Heute gibt es frischen Apfelkuchen mit Kaffee für nur drei Euro fünfzig.",
          question: "Wo gibt es heute 20 Prozent Rabatt auf Kaffeemaschinen?",
          options: [
            "Im Erdgeschoss am Eingang.",
            "In der Küchenabteilung im zweiten Stock.",
            "Im Restaurant im dritten Stock."
          ],
          answer: 1,
          explanation: "التخفيض في قسم المطابخ في الطابق الثاني: 'In unserer Küchenabteilung im zweiten Stock bieten wir Ihnen heute zwanzig Prozent Rabatt'."
        }
      ]
    },

    // ==========================================
    // TEIL 2: Richtig / Falsch (Aufgaben 6–10)
    // ==========================================
    {
      teilNumber: 2,
      title: { de: "Teil 2: Alltagsgespräche & Informationen", ar: "الجزء 2: محادثات وإشعارات يومية (صحيح أم خطأ)" },
      instructions: {
        de: "Hören Sie die fünf kurzen Texte. Ist die Aussage dazu richtig oder falsch?",
        ar: "استمع إلى المقاطع الخمسة التالية، ثم حدد ما إذا كانت العبارة صحيحة أم خاطئة (Richtig / Falsch)."
      },
      textType: "audio",
      questions: [
        {
          number: 6,
          audioText: "Guten Morgen, Frau Schneider. Ich rufe aus der Autowerkstatt an. Wir haben Ihr Auto geprüft: Die Reifen sind noch völlig in Ordnung, aber wir müssen die Batterie austauschen. Das kostet insgesamt hundertzwanzig Euro. Sie können den Wagen heute ab siebzehn Uhr wieder abholen.",
          question: "Die Werkstatt muss bei Frau Schneiders Auto vier neue Reifen montieren.",
          options: ["Richtig", "Falsch"],
          answer: 1,
          explanation: "خطأ (Falsch): الإطارات سليمة، ولكن يجب تغيير البطارية فقط: 'Die Reifen sind noch völlig in Ordnung, aber wir müssen die Batterie austauschen'."
        },
        {
          number: 7,
          audioText: "Herzlich willkommen im Stadtmuseum! Bevor wir unseren Rundgang beginnen, noch ein kurzer Hinweis: Das Fotografieren ohne Blitz ist in allen Räumen erlaubt. Bitte lassen Sie aber Ihre großen Rucksäcke und Regenschirme an der Garderobe im Erdgeschoss.",
          question: "Man darf im Museum Fotos ohne Blitz machen.",
          options: ["Richtig", "Falsch"],
          answer: 0,
          explanation: "صحيح (Richtig): التصوير بدون فلاش مسموح في جميع القاعات: 'Das Fotografieren ohne Blitz ist in allen Räumen erlaubt'."
        },
        {
          number: 8,
          audioText: "Hallo Tarek, hier ist dein Nachbar Herr Krüger aus dem ersten Stock. Gerade war der Paketbote da und hat ein großes Paket für dich abgegeben, weil du nicht zu Hause warst. Ich bin heute den ganzen Abend daheim, du kannst es gerne bis einundzwanzig Uhr bei mir abholen.",
          question: "Tarek muss sein Paket morgen bei der Post abholen.",
          options: ["Richtig", "Falsch"],
          answer: 1,
          explanation: "خطأ (Falsch): الجار استلم الطرد ويمكن لطارق أخذه من شقة جاره هذا المساء."
        },
        {
          number: 9,
          audioText: "Achtung, eine Information für alle Teilnehmer des Schwimmkurses: Wegen Reinigungsarbeiten bleibt das Hallenbad am kommenden Dienstag geschlossen. Unser Training findet deshalb ausnahmsweise am Donnerstag zur gleichen Uhrzeit um achtzehn Uhr statt.",
          question: "Der Schwimmkurs wird von Dienstag auf Donnerstag verschoben.",
          options: ["Richtig", "Falsch"],
          answer: 0,
          explanation: "صحيح (Richtig): بسبب أعمال التنظيف يوم الثلاثاء، سيُقام التدريب يوم الخميس الساعة 18:00."
        },
        {
          number: 10,
          audioText: "Guten Tag, hier spricht das Sekretariat der Berufsschule. Wir möchten Sie daran erinnern, dass morgen der letzte Tag für die Anmeldung zur Abschlussprüfung ist. Bitte bringen Sie das unterschriebene Formular und Ihren Ausweis bis zwölf Uhr ins Büro Hundertvier.",
          question: "Für die Prüfungsanmeldung braucht man nur einen Ausweis und kein Formular.",
          options: ["Richtig", "Falsch"],
          answer: 1,
          explanation: "خطأ (Falsch): يجب إحضار الاستمارة الموقعة والهوية الشخصية معاً: 'das unterschriebene Formular und Ihren Ausweis'."
        }
      ]
    },

    // ==========================================
    // TEIL 3: Längeres Gespräch (Aufgaben 11–15)
    // ==========================================
    {
      teilNumber: 3,
      title: { de: "Teil 3: Gespräch über Wohnung und Umzug", ar: "الجزء 3: حوار حول الانتقال إلى شقة جديدة" },
      instructions: {
        de: "Hören Sie die einzelnen Abschnitte des Gesprächs zwischen Sara und Jan und wählen Sie a, b oder c.",
        ar: "استمع إلى مقاطع الحوار بين سارة ويان حول شقتها الجديدة واختر الإجابة الصحيحة."
      },
      textType: "audio",
      questions: [
        {
          number: 11,
          audioText: "Sara sagt: Endlich habe ich eine neue Wohnung gefunden! Meine alte Wohnung im Zentrum war viel zu laut und zu teuer. Die neue Wohnung liegt im Stadtteil Linden. Von dort fahre ich zwar zwanzig Minuten mit der Straßenbahn zur Arbeit, aber direkt hinter dem Haus ist ein wunderschöner Park.",
          question: "Warum ist Sara in den Stadtteil Linden umgezogen?",
          options: [
            "Weil ihre alte Wohnung zu laut und zu teuer war.",
            "Weil sie kein Fahrrad mehr hat.",
            "Weil ihre Eltern im gleichen Haus wohnen."
          ],
          answer: 0,
          explanation: "تقول سارة: 'Meine alte Wohnung im Zentrum war viel zu laut und zu teuer'."
        },
        {
          number: 12,
          audioText: "Jan fragt: Und wie groß ist die neue Wohnung? Sara antwortet: Sie hat zwei helle Zimmer, eine große Wohnküche und sogar einen kleinen Balkon nach Süden. Insgesamt sind es achtundfünfzig Quadratmeter, und die Miete kostet sechshundertfünfzig Euro warm.",
          question: "Was gefällt Sara besonders an der neuen Wohnung?",
          options: [
            "Sie hat fünf Zimmer und einen großen Garten.",
            "Sie hat zwei helle Zimmer, eine Wohnküche und einen Balkon.",
            "Sie kostet nur 200 Euro Miete im Monat."
          ],
          answer: 1,
          explanation: "تقول سارة: 'Sie hat zwei helle Zimmer, eine große Wohnküche und sogar einen kleinen Balkon nach Süden'."
        },
        {
          number: 13,
          audioText: "Sara erzählt weiter: Am nächsten Samstag ziehe ich um. Einen kleinen Transporter habe ich schon gemietet, aber die Waschmaschine und das Sofa sind sehr schwer. Jan, hast du am Samstagvormittag vielleicht Zeit, mir beim Tragen zu helfen?",
          question: "Wobei braucht Sara am Samstag Hilfe?",
          options: [
            "Beim Streichen der Wände.",
            "Beim Tragen der schweren Möbel und der Waschmaschine.",
            "Beim Putzen der Fenster."
          ],
          answer: 1,
          explanation: "تطلب سارة المساعدة في حمل الغسالة والأريكة الثقيلة: 'die Waschmaschine und das Sofa sind sehr schwer... mir beim Tragen zu helfen'."
        },
        {
          number: 14,
          audioText: "Jan antwortet: Klar, ich helfe dir gern! Am Samstagmorgen um acht Uhr habe ich zwar noch einen kurzen Termin beim Bäcker mit meinem Bruder, aber ab halb zehn bin ich frei und komme direkt zu dir.",
          question: "Wann kann Jan am Samstag zu Sara kommen?",
          options: [
            "Punkt 07:00 Uhr morgens.",
            "Ab 09:30 Uhr (halb zehn).",
            "Erst am späten Abend um 21:00 Uhr."
          ],
          answer: 1,
          explanation: "يقول يان: 'ab halb zehn bin ich frei und komme direkt zu dir' (halb zehn = 09:30)."
        },
        {
          number: 15,
          audioText: "Sara freut sich: Super, vielen Dank! Wenn wir am Nachmittag mit allen Kartons fertig sind, bestelle ich für alle Helfer frische Pizza und kalte Getränke auf meinem neuen Balkon!",
          question: "Was möchte Sara nach dem Umzug machen?",
          options: [
            "Sie lädt alle Helfer zu Pizza und Getränken auf dem Balkon ein.",
            "Sie fährt sofort in den Urlaub nach Spanien.",
            "Sie geht allein ins Kino."
          ],
          answer: 0,
          explanation: "تقول سارة: 'bestelle ich für alle Helfer frische Pizza und kalte Getränke auf meinem neuen Balkon'."
        }
      ]
    }
  ]
};
