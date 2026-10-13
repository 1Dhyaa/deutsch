// website/data/exams/b1/lesen/set-01.js — Goethe-Zertifikat B1: Lesen (Modellsatz 1)

window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA["b1-lesen-set-01"] = {
  id: "b1-lesen-set-01",
  level: "b1",
  module: "lesen",
  setNumber: 1,
  title: {
    de: "Goethe-Zertifikat B1 — Lesen (Modellsatz 1)",
    ar: "امتحان غوته B1 الرسمي — وحدة القراءة (النموذج 1)"
  },
  durationMinutes: 65,
  maxScore: 25,
  passScore: 15, // 60%
  totalItems: 20,
  instructions: {
    de: "Dieser Test hat 4 Teile. Sie haben 65 Minuten Zeit. Lesen Sie die Texte und lösen Sie die Aufgaben 1 bis 20.",
    ar: "يتكون هذا الاختبار من 4 أجزاء لمستوى B1. لديك 65 دقيقة للإجابة. اقرأ النصوص وحل الأسئلة من 1 إلى 20."
  },
  teile: [
    // ==========================================
    // TEIL 1: Blogbeitrag / Erfahrungsbericht (Aufgaben 1–5)
    // ==========================================
    {
      teilNumber: 1,
      title: { de: "Teil 1: Blogbeitrag über den Ausbildungsstart", ar: "الجزء 1: مدونة شخصية حول بداية التدريب المهني" },
      instructions: {
        de: "Lesen Sie den Text und die Aufgaben 1 bis 5. Wählen Sie bei jeder Aufgabe die richtige Lösung: a, b oder c.",
        ar: "اقرأ التدوينة التالية والأسئلة من 1 إلى 5، واختر الإجابة الصحيحة لكل سؤال."
      },
      textType: "article",
      text: {
        title: "Mein Weg in die IT-Ausbildung in Frankfurt",
        content: `Vor anderthalb Jahren bin ich nach Deutschland gekommen, weil ich hier eine Ausbildung zum Fachinformatiker für Systemintegration machen wollte. Am Anfang war es gar nicht so einfach, wie ich es mir vorgestellt hatte. Obwohl ich in meiner Heimat schon ein B1-Zertifikat erworben hatte, fiel es mir in den ersten Wochen schwer, die schnellen Gespräche der Kollegen im Büro zu verstehen.

Besonders geholfen hat mir mein Ausbilder Herr Baumann. Er hat mir geraten, nicht nur Fachbücher zu lesen, sondern jeden Mittag gemeinsam mit dem Team in der Kantine zu essen. Dadurch habe ich nicht nur meine Umgangssprache verbessert, sondern auch schnell Anschluss gefunden. Wenn ich in der Berufsschule ein Thema im Fach Wirtschaftskunde nicht sofort verstanden habe, haben mir zwei Mitauszubildende ihre Notizen erklärt.

Inzwischen bin ich im zweiten Ausbildungsjahr und darf schon eigene kleine Kundenprojekte betreuen. Mein wichtigster Tipp für alle neuen Auszubildenden: Habt keine Angst davor, Fragen zu stellen! In Deutschland wird es positiv gesehen, wenn man Interesse zeigt und nachfragt, bevor ein Fehler passiert.`
      },
      questions: [
        {
          number: 1,
          question: "Welches Problem hatte der Autor zu Beginn seiner Ausbildung?",
          options: [
            "Er hatte noch kein Sprachzertifikat für Deutsch.",
            "Er konnte den schnellen Gesprächen im Arbeitsalltag nur schwer folgen.",
            "Er fand in Frankfurt keine passende Berufsschule."
          ],
          answer: 1,
          explanation: "النص يوضح: 'fiel es mir in den ersten Wochen schwer, die schnellen Gespräche der Kollegen im Büro zu verstehen'."
        },
        {
          number: 2,
          question: "Welchen Rat gab ihm sein Ausbilder Herr Baumann?",
          options: [
            "Er soll in der Mittagspause allein Fachbücher studieren.",
            "Er soll die Mittagspause mit den Kollegen verbringen.",
            "Er soll einen zusätzlichen Sprachkurs am Wochenende buchen."
          ],
          answer: 1,
          explanation: "نصحَه المشرف بتناول الغداء مع الفريق في الكافيتريا: 'jeden Mittag gemeinsam mit dem Team in der Kantine zu essen'."
        },
        {
          number: 3,
          question: "Wer hat dem Autor bei schwierigen Themen in der Berufsschule geholfen?",
          options: [
            "Zwei andere Auszubildende aus seiner Klasse.",
            "Sein alter Deutschlehrer aus der Heimat.",
            "Ein externer Nachhilfelehrer."
          ],
          answer: 0,
          explanation: "النص يذكر: 'haben mir zwei Mitauszubildende ihre Notizen erklärt' (زميلان له في التدريب المهني)."
        },
        {
          number: 4,
          question: "Was macht der Autor heute im zweiten Ausbildungsjahr?",
          options: [
            "Er sucht nach einem neuen Ausbildungsbetrieb.",
            "Er arbeitet bereits selbstständig an kleinen Projekten für Kunden.",
            "Er unterrichtet selbst Wirtschaftskunde an der Berufsschule."
          ],
          answer: 1,
          explanation: "النص يذكر: 'Inzwischen bin ich im zweiten Ausbildungsjahr und darf schon eigene kleine Kundenprojekte betreuen'."
        },
        {
          number: 5,
          question: "Was empfiehlt der Autor neuen Auszubildenden in Deutschland?",
          options: [
            "Man sollte immer offen nachfragen, wenn man etwas nicht sicher weiß.",
            "Man sollte Fragen vermeiden, damit der Chef nicht unzufrieden wird.",
            "Man sollte zuerst alle Probleme allein lösen."
          ],
          answer: 0,
          explanation: "نصيحته الأساسية: 'Habt keine Angst davor, Fragen zu stellen! In Deutschland wird es positiv gesehen, wenn man Interesse zeigt und nachfragt'."
        }
      ]
    },

    // ==========================================
    // TEIL 2: Hausordnung & Betriebsregeln (Aufgaben 6–10)
    // ==========================================
    {
      teilNumber: 2,
      title: { de: "Teil 2: Informationen für neue Mitarbeitende", ar: "الجزء 2: دليل الموظفين والمتدربين الجدد" },
      instructions: {
        de: "Lesen Sie das Informationsblatt der Firma »TechNord GmbH« und die Aufgaben 6 bis 10. Wählen Sie a, b oder c.",
        ar: "اقرأ لائحة العمل في شركة »TechNord GmbH« والأسئلة من 6 إلى 10، واختر الإجابة الصحيحة."
      },
      textType: "directory",
      text: {
        title: "TechNord GmbH — Wichtige Hinweise für Mitarbeitende & Azubis",
        content: `• 1. Arbeitszeiterfassung & Gleitzeit:
  - Kernarbeitszeit für alle Abteilungen: Montag bis Freitag von 09:00 bis 15:30 Uhr.
  - Gleitzeitbeginn ist zwischen 07:00 und 09:00 Uhr möglich. Bitte stempeln Sie Ihren Mitarbeiterausweis am Eingangsterminal.

• 2. Krankmeldung & Arztbesuche:
  - Im Krankheitsfall informieren Sie bitte bis spätestens 08:30 Uhr telefonisch Ihre Teamleitung UND das Personalbüro (Frau Krug, Durchwahl -112).
  - Ab dem dritten Krankheitstag ist eine ärztliche Arbeitsunfähigkeitsbescheinigung (AU) erforderlich.

• 3. IT-Sicherheit & Geräteausgabe:
  - Dienstlaptops und Zugangsdaten erhalten Sie im IT-Service (Raum 204, 2. OG).
  - Private USB-Sticks dürfen aus Sicherheitsgründen nicht an Firmenrechner angeschlossen werden.

• 4. Weiterbildung & Berichtsheft (für Auszubildende):
  - Auszubildende haben jeden Freitag von 13:00 bis 14:30 Uhr Zeit, ihr digitales Berichtsheft im Lernraum (1. OG) zu führen.
  - Anträge auf kostenlose Sprach- oder Fachkurse werden bei Herrn Lindner (Personalentwicklung, 3. OG) eingereicht.

• 5. Parken & Jobticket:
  - Das Unternehmen übernimmt 50 % der Kosten für das Deutschlandticket. Antragsformulare liegen am Empfang im Erdgeschoss bereit.`
      },
      questions: [
        {
          number: 6,
          question: "Was müssen Sie tun, wenn Sie morgens wegen Fieber nicht zur Arbeit kommen können?",
          options: [
            "Bis 08:30 Uhr die Teamleitung und das Personalbüro anrufen.",
            "Nur eine kurze Nachricht in die WhatsApp-Gruppe schreiben.",
            "Erst am dritten Tag im Büro Bescheid geben."
          ],
          answer: 0,
          explanation: "اللائحة تنص على: 'informieren Sie bitte bis spätestens 08:30 Uhr telefonisch Ihre Teamleitung UND das Personalbüro'."
        },
        {
          number: 7,
          question: "Wo bekommen neue Auszubildende ihren Firmenlaptop?",
          options: [
            "Am Empfang im Erdgeschoss.",
            "Im IT-Service in Raum 204 im 2. Obergeschoss.",
            "Bei Herrn Lindner im 3. Obergeschoss."
          ],
          answer: 1,
          explanation: "أجهزة الكمبيوتر المحمولة تُسلَّم في قسم تقنية المعلومات: 'Dienstlaptops und Zugangsdaten erhalten Sie im IT-Service (Raum 204, 2. OG)'."
        },
        {
          number: 8,
          question: "Was ist beim Umgang mit den Firmencomputern streng verboten?",
          options: [
            "Das Schreiben des digitalen Berichtshefts am Freitag.",
            "Das Anschließen eigener privater USB-Sticks.",
            "Der Arbeitsbeginn vor 09:00 Uhr morgens."
          ],
          answer: 1,
          explanation: "تنص اللائحة على: 'Private USB-Sticks dürfen aus Sicherheitsgründen nicht an Firmenrechner angeschlossen werden'."
        },
        {
          number: 9,
          question: "An wen wenden Sie sich, wenn Sie einen Fachkurs besuchen möchten?",
          options: [
            "An Frau Krug im Personalbüro.",
            "An Herrn Lindner in der Personalentwicklung (3. OG).",
            "An den Empfang im Erdgeschoss."
          ],
          answer: 1,
          explanation: "طلبات الدورات التدريبية تُقدَّم لدى السيد ليندنر: 'Anträge auf kostenlose Sprach- oder Fachkurse werden bei Herrn Lindner (3. OG) eingereicht'."
        },
        {
          number: 10,
          question: "Welchen Vorteil bietet die Firma für den Arbeitsweg mit Bus und Bahn?",
          options: [
            "Jeder Mitarbeitende erhält ein kostenloses Firmenauto.",
            "Die Firma zahlt die Hälfte des Preises für das Deutschlandticket.",
            "Busse halten direkt im 1. Obergeschoss."
          ],
          answer: 1,
          explanation: "الشركة تتحمل 50% من تكلفة تذكرة المواصلات: 'Das Unternehmen übernimmt 50 % der Kosten für das Deutschlandticket'."
        }
      ]
    },

    // ==========================================
    // TEIL 3: Leserbriefe & Kommentare (Aufgaben 11–15, Richtig/Falsch)
    // ==========================================
    {
      teilNumber: 3,
      title: { de: "Teil 3: Meinungen zum Thema »Vier-Tage-Woche«", ar: "الجزء 3: آراء وتعليقات حول أسبوع العمل من 4 أيام" },
      instructions: {
        de: "Lesen Sie die 5 Stellungnahmen und die Aufgaben 11 bis 15. Ist die Aussage richtig oder falsch?",
        ar: "اقرأ التعليقات الخمسة حول نظام العمل لـ 4 أيام في الأسبوع، ثم حدد (Richtig / Falsch)."
      },
      textType: "messages",
      questions: [
        {
          number: 11,
          message: `Sabine (38, Ingenieurin):
„In unserer Firma testen wir seit sechs Monaten die Vier-Tage-Woche bei gleichem Gehalt. Obwohl die einzelnen Arbeitstage von Montag bis Donnerstag etwas intensiver sind, bin ich am Wochenende viel erholter und schaffe meine Aufgaben sogar schneller als früher.“`,
          question: "Sabine ist mit der Vier-Tage-Woche zufrieden, obwohl die Arbeitstage von Montag bis Donnerstag anstrengender sind.",
          options: ["Richtig", "Falsch"],
          answer: 0,
          explanation: "صحيح (Richtig): سابينه راضية وتنجز مهامها بشكل أسرع رغم أن أيام الاثنين إلى الخميس أكثر كثافة."
        },
        {
          number: 12,
          message: `Karim (22, Auszubildender im Handwerk):
„Auf der Baustelle ist eine Vier-Tage-Woche super, weil wir freitags keine langen Fahrten mehr haben. Zwar arbeiten wir von Montag bis Donnerstag jeweils neun Stunden, aber der freie Freitag gibt mir genug Zeit, um für meine Abschlussprüfung zu lernen.“`,
          question: "Karim muss nun auch am Freitag neun Stunden auf der Baustelle arbeiten.",
          options: ["Richtig", "Falsch"],
          answer: 1,
          explanation: "خطأ (Falsch): يوم الجمعة يوم عطلة بالنسبة لكريم يستغله للمذاكرة لامتحان التخرج."
        },
        {
          number: 13,
          message: `Petra (51, Bäckereibesitzerin):
„Für große Büros mag dieses Modell funktionieren, aber in meinem kleinen Handwerksbetrieb mit Kundenverkehr ist das kaum machbar. Wenn wir freitags schließen oder zusätzliches Personal einstellen müssen, steigen unsere Kosten zu stark.“`,
          question: "Petra hält die Vier-Tage-Woche für ihren eigenen Betrieb für schwer umsetzbar.",
          options: ["Richtig", "Falsch"],
          answer: 0,
          explanation: "صحيح (Richtig): بيترا ترى أن تطبيق هذا النظام في مخبزها الصغير صعب جداً بسبب ارتفاع التكاليف."
        },
        {
          number: 14,
          message: `Jonas (31, Krankenpfleger):
„Im Krankenhaus arbeiten wir im Schichtdienst rund um die Uhr. Seitdem unsere Klinik längere Schichten an vier Tagen statt fünf kurzen Tagen anbietet, habe ich endlich mehr zusammenhängende freie Tage für meine Kinder.“`,
          question: "Jonas lehnt das neue Arbeitszeitmodell im Krankenhaus ab, weil er weniger Zeit für seine Familie hat.",
          options: ["Richtig", "Falsch"],
          answer: 1,
          explanation: "خطأ (Falsch): يوناس سعيد بالنظام الجديد لأنه أصبح يملك أيام إجازة متصلة أكثر لأطفاله."
        },
        {
          number: 15,
          message: `Dr. Mertens (Arbeitsmarkt-Experte):
„Studien zeigen, dass Unternehmen mit flexiblen Arbeitszeiten deutlich leichter qualifizierte Fachkräfte und motivierte Auszubildende finden. Dennoch muss jedes Unternehmen individuell prüfen, ob die Arbeitsabläufe dazu passen.“`,
          question: "Laut Dr. Mertens hilft ein flexibles Arbeitszeitmodell Firmen dabei, neue Fachkräfte und Azubis zu gewinnen.",
          options: ["Richtig", "Falsch"],
          answer: 0,
          explanation: "صحيح (Richtig): يؤكد الخبير أن ساعات العمل المرنة تسهل على الشركات جذب الموظفين والمتدربين."
        }
      ]
    },

    // ==========================================
    // TEIL 4: Anzeigen zuordnen (Aufgaben 16–20)
    // ==========================================
    {
      teilNumber: 4,
      title: { de: "Teil 4: Weiterbildungs- und Stellenanzeigen", ar: "الجزء 4: مطابقة إعلانات التدريب والعمل" },
      instructions: {
        de: "Lesen Sie die Situationen 16 bis 20 und die Anzeigen a bis f. Welche Anzeige passt zu welcher Person?",
        ar: "اقرأ مواقف الأشخاص من 16 إلى 20 والإعلانات a إلى f، واختر الإعلان الأنسب لكل شخص."
      },
      textType: "matching",
      ads: [
        {
          id: "a",
          title: "Anzeige a: IHK-Seminar »Bewerbungstraining & Vorstellungsgespräch«",
          content: "Sie suchen einen Ausbildungsplatz? In unserem zweitägigen Workshop optimieren wir gemeinsam Ihren Lebenslauf und Ihr Anschreiben und üben typische Vorstellungsgespräche auf Deutsch."
        },
        {
          id: "b",
          title: "Anzeige b: Klinik am Park — Ausbildung zur Pflegefachkraft (m/w/d)",
          content: "Start zum 1. September! Wir bieten eine praxisnahe Ausbildung mit attraktiver Vergütung, eigenem Wohnheimzimmer direkt neben der Klinik und kostenlosem Fachsprachenunterricht (B2)."
        },
        {
          id: "c",
          title: "Anzeige c: VHS-Kurs »Deutsch für den Beruf B1/B2 am Abend«",
          content: "Speziell für Berufstätige: Trainieren Sie geschäftliche E-Mails, Telefonate mit Kunden und Protokolle. Dienstags und donnerstags von 18:30 bis 20:45 Uhr."
        },
        {
          id: "d",
          title: "Anzeige d: Elektro-Meisterbetrieb Weber — Schnupperpraktikum",
          content: "Du interessierst dich für Elektronik und erneuerbare Energien, bist dir aber noch nicht sicher? Mach bei uns ein zweiwöchiges bezahltes Praktikum und lerne den Beruf Elektroniker kennen!"
        },
        {
          id: "e",
          title: "Anzeige e: Stadtbibliothek — Ehrenamtliches Sprachcafé",
          content: "Jeden Samstag von 15:00 bis 17:00 Uhr: In entspannter Atmosphäre bei Kaffee und Tee mit Muttersprachlern auf Deutsch plaudern und neue Kontakte in der Stadt knüpfen. Eintritt frei!"
        },
        {
          id: "f",
          title: "Anzeige f: Fahrschule Mobil — Intensivkurs Führerschein Klasse B",
          content: "Für viele Ausbildungsberufe ist der Führerschein wichtig! Unser Ferien-Intensivkurs bringt Sie in nur vier Wochen sicher zur theoretischen und praktischen Fahrprüfung."
        }
      ],
      questions: [
        {
          number: 16,
          situation: "Youssef möchte eine Ausbildung im medizinischen Bereich beginnen und sucht einen Betrieb, der auch eine günstige Unterkunft anbietet.",
          options: ["a", "b", "c", "d", "e", "f"],
          answer: 1, // b
          explanation: "يناسبه الإعلان b (Klinik am Park): يوفر تدريباً مهنياً في التمريض مع غرفة سكن بجانب المستشفى (eigenem Wohnheimzimmer)."
        },
        {
          number: 17,
          situation: "Nadia hat bald ihre ersten Bewerbungsgespräche und möchte vorher ihren Lebenslauf prüfen lassen und das Gespräch mit Experten üben.",
          options: ["a", "b", "c", "d", "e", "f"],
          answer: 0, // a
          explanation: "يناسبها الإعلان a (IHK-Seminar): مراجعة السيرة الذاتية والتدرب على مقابلات العمل (Vorstellungsgespräche üben)."
        },
        {
          number: 18,
          situation: "Sami arbeitet bereits tagsüber im Büro, möchte aber abends lernen, wie man formelle E-Mails schreibt und professionell telefoniert.",
          options: ["a", "b", "c", "d", "e", "f"],
          answer: 2, // c
          explanation: "يناسبه الإعلان c (VHS-Kurs am Abend): تدريب مسائي على الإيميلات الرسمية والمكالمات الهاتفية المهنية."
        },
        {
          number: 19,
          situation: "Tarek möchte vor seiner Entscheidung für eine Ausbildung erst einmal zwei Wochen lang praktisch im Bereich Elektronik mitarbeiten.",
          options: ["a", "b", "c", "d", "e", "f"],
          answer: 3, // d
          explanation: "يناسبه الإعلان d (Schnupperpraktikum): تدريب عملي تجريبي لمدة أسبوعين في مجال الإلكترونيات."
        },
        {
          number: 20,
          situation: "Lina ist neu in der Stadt und sucht am Wochenende eine kostenlose Möglichkeit, ungezwungen Deutsch zu sprechen und Menschen kennenzulernen.",
          options: ["a", "b", "c", "d", "e", "f"],
          answer: 4, // e
          explanation: "يناسبها الإعلان e (Sprachcafé): لقاء مجاني كل سبت للتحدث بالألمانية مع ناطقين أصليين والتعرف على أصدقاء جدد."
        }
      ]
    }
  ]
};
