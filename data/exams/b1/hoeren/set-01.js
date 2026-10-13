// website/data/exams/b1/hoeren/set-01.js — Goethe-Zertifikat B1: Hören (Modellsatz 1)

window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA["b1-hoeren-set-01"] = {
  id: "b1-hoeren-set-01",
  level: "b1",
  module: "hoeren",
  setNumber: 1,
  title: {
    de: "Goethe-Zertifikat B1 — Hören (Modellsatz 1)",
    ar: "امتحان غوته B1 الرسمي — وحدة الاستماع (النموذج 1)"
  },
  durationMinutes: 40,
  maxScore: 20,
  passScore: 12, // 60%
  totalItems: 10,
  instructions: {
    de: "Hören Sie die Texte zu Alltag, Beruf und Ausbildung in Deutschland und lösen Sie die Aufgaben 1 bis 10.",
    ar: "استمع إلى التسجيلات الصوتية لمستوى B1 حول الحياة اليومية والعمل والتدريب المهني في ألمانيا وأجب عن الأسئلة من 1 إلى 10."
  },
  teile: [
    {
      teilNumber: 1,
      title: { de: "Teil 1: Informationen aus Beruf & Alltag", ar: "الجزء 1: تسجيلات من بيئة العمل والحياة اليومية" },
      instructions: {
        de: "Hören Sie die fünf Texte und wählen Sie die richtige Lösung a, b oder c.",
        ar: "استمع إلى المقاطع الخمسة التالية واختر الإجابة الصحيحة a أو b أو c."
      },
      textType: "audio",
      questions: [
        {
          number: 1,
          audioText: "Guten Tag, Frau Haddad, hier spricht Markus Berger von der Personalabteilung der Stadtwerke München. Vielen Dank für Ihre Bewerbung um die Ausbildung zur Kauffrau für Büromanagement. Ihre Unterlagen haben uns sehr gut gefallen, deshalb möchten wir Sie nächsten Dienstag um elf Uhr zu einem persönlichen Vorstellungsgespräch einladen. Bitte melden Sie sich am Empfang im Hauptgebäude.",
          question: "Warum ruft Herr Berger bei Frau Haddad an?",
          options: [
            "Er möchte sie zu einem Vorstellungsgespräch für einen Ausbildungsplatz einladen.",
            "Er teilt ihr mit, dass leider alle Ausbildungsplätze schon besetzt sind.",
            "Er bittet sie, ihre Stromrechnung zu bezahlen."
          ],
          answer: 0,
          explanation: "يتصل بها لدعوتها لمقابلة عمل يوم الثلاثاء الساعة 11:00 بعد الإعجاب بملف تقديمها للتدريب المهني."
        },
        {
          number: 2,
          audioText: "Liebe Fahrgäste auf der Regionalbahnlinie nach Nürnberg: Wegen Bauarbeiten auf der Strecke zwischen Ingolstadt und Allersberg endet dieser Zug heute außerplanmäßig in Ingolstadt Hauptbahnhof. Vor dem Bahnhofsvorplatz stehen für Sie kostenlose Ersatzbusse bereit, die Sie direkt weiter nach Nürnberg bringen. Ihre Fahrkarte bleibt selbstverständlich gültig.",
          question: "Wie kommen die Reisenden heute von Ingolstadt weiter nach Nürnberg?",
          options: [
            "Sie müssen sich ein neues Zugticket für den nächsten Tag kaufen.",
            "Mit kostenlosen Ersatzbussen ab dem Bahnhofsvorplatz.",
            "Nur mit dem eigenen Auto oder Taxi auf eigene Kosten."
          ],
          answer: 1,
          explanation: "وفرت شركة القطارات حافلات بديلة مجانية (kostenlose Ersatzbusse) أمام المحطة لإكمال الرحلة إلى نورنبرغ."
        },
        {
          number: 3,
          audioText: "Willkommen bei unserem Einführungstag im Klinikum! Als neue Auszubildende in der Pflege erhalten Sie gleich Ihre Dienstkleidung in der Wäscherei im Untergeschoss. Danach treffen wir uns um zehn Uhr im Seminarraum drei zu einer Schulung über Hygienevorschriften. Vergessen Sie bitte nicht, Ihren Spindschlüssel bei Frau Lehmann zu unterschreiben.",
          question: "Was findet um 10:00 Uhr im Seminarraum 3 statt?",
          options: [
            "Die Ausgabe der Dienstkleidung.",
            "Eine Schulung über wichtige Hygienevorschriften.",
            "Das gemeinsame Mittagessen in der Kantine."
          ],
          answer: 1,
          explanation: "الساعة العاشرة في قاعة الندوات رقم 3 تقام دورة تدريبية حول قواعد النظافة والتعقيم (Schulung über Hygienevorschriften)."
        },
        {
          number: 4,
          audioText: "Hallo Karim, hier ist dein Kollege Timo. Unser Teamleiter hat mich gerade gebeten, dir Bescheid zu geben: Die Projektbesprechung morgen früh findet nicht im Konferenzraum statt, sondern online über Microsoft Teams, weil drei Kollegen auf Dienstreise in Berlin sind. Den Link zum Meeting habe ich dir schon per E-Mail geschickt.",
          question: "Warum findet die Besprechung morgen online statt?",
          options: [
            "Weil der Konferenzraum renoviert wird.",
            "Weil drei Teammitglieder auf einer Dienstreise in Berlin sind.",
            "Weil Timo krank zu Hause liegt."
          ],
          answer: 1,
          explanation: "الاجتماع سيُعقد عبر الإنترنت لأن ثلاثة زملاء في رحلة عمل في برلين: 'weil drei Kollegen auf Dienstreise in Berlin sind'."
        },
        {
          number: 5,
          audioText: "Eine wichtige Durchsage des Bürgeramts: Ab nächsten Monat können Sie Ihren Wohnsitz sowie Führungszeugnisse auch bequem von zu Hause aus über unser neues Online-Portal beantragen. Dafür benötigen Sie lediglich Ihren elektronischen Aufenthaltstitel oder Personalausweis mit aktivierter Online-Ausweisfunktion. Persönliche Termine vor Ort sind natürlich weiterhin nach Vereinbarung möglich.",
          question: "Was ändert sich ab nächsten Monat beim Bürgeramt?",
          options: [
            "Das Bürgeramt schließt dauerhaft alle Büros.",
            "Man kann viele Dienstleistungen auch online von zu Hause aus erledigen.",
            "Man braucht für persönliche Termine keine Ausweisdokumente mehr."
          ],
          answer: 1,
          explanation: "ابتداءً من الشهر القادم يمكن إنجاز تسجيل السكن واستخراج الوثائق إلكترونياً من المنزل عبر البوابة الرقمية."
        }
      ]
    },
    {
      teilNumber: 2,
      title: { de: "Teil 2: Vortrag & Diskussion über Ausbildung in Deutschland", ar: "الجزء 2: محاضرة ونقاش حول نظام التدريب المهني المزدوج" },
      instructions: {
        de: "Hören Sie die fünf Aussagen aus einer Informationsveranstaltung der Handelskammer (IHK) und entscheiden Sie: Richtig oder Falsch?",
        ar: "استمع إلى المقتطفات الخمسة من ندوة الغرفة التجارية حول التدريب المهني في ألمانيا، وحدد (Richtig / Falsch)."
      },
      textType: "audio",
      questions: [
        {
          number: 6,
          audioText: "Bei der dualen Ausbildung in Deutschland lernen Sie an zwei Orten gleichzeitig: Drei bis vier Tage pro Woche arbeiten Sie praktisch im Betrieb, und an ein bis zwei Tagen besuchen Sie die Berufsschule, wo Sie das theoretische Fachwissen lernen.",
          question: "In der dualen Ausbildung wechselt man zwischen praktischer Arbeit im Betrieb und theoretischem Unterricht in der Berufsschule.",
          options: ["Richtig", "Falsch"],
          answer: 0,
          explanation: "صحيح (Richtig): النظام المزدوج يجمع بين العمل التطبيقي في الشركة والدراسة النظرية في المدرسة المهنية."
        },
        {
          number: 7,
          audioText: "Ein großer Vorteil der dualen Ausbildung ist, dass Sie keine Studiengebühren zahlen müssen, sondern vom ersten Monat an eine monatliche Ausbildungsvergütung vom Betrieb erhalten, die mit jedem Ausbildungsjahr steigt.",
          question: "Auszubildende müssen jeden Monat hohe Gebühren an den Betrieb bezahlen.",
          options: ["Richtig", "Falsch"],
          answer: 1,
          explanation: "خطأ (Falsch): المتدرب لا يدفع رسوماً، بل يحصل على راتب شهري (Ausbildungsvergütung) يرتفع كل سنة."
        },
        {
          number: 8,
          audioText: "Wenn Sie in der Berufsschule einmal Schwierigkeiten mit der deutschen Fachsprache oder mit bestimmten Prüfungsfächern haben, können Sie über die Agentur für Arbeit kostenlose Nachhilfe, sogenannte ausbildungsbegleitende Hilfen, bekommen.",
          question: "Bei Sprach- oder Lernproblemen in der Berufsschule gibt es kostenlose Unterstützungsangebote.",
          options: ["Richtig", "Falsch"],
          answer: 0,
          explanation: "صحيح (Richtig): تتوفر دروس تقوية مجانية (ausbildungsbegleitende Hilfen) لدعم المتدربين."
        },
        {
          number: 9,
          audioText: "Nach dem erfolgreichen Abschluss Ihrer Ausbildung haben Sie hervorragende Chancen auf dem Arbeitsmarkt: Mehr als zwei Drittel aller Auszubildenden werden direkt von ihrem Ausbildungsbetrieb als feste Fachkräfte übernommen.",
          question: "Nach Ende der Ausbildung darf man auf keinen Fall im selben Betrieb weiterarbeiten.",
          options: ["Richtig", "Falsch"],
          answer: 1,
          explanation: "خطأ (Falsch): أكثر من ثلثي المتدربين يتم توظيفهم بشكل دائم في نفس الشركة بعد التخرج."
        },
        {
          number: 10,
          audioText: "Auch nach einer abgeschlossenen Ausbildung stehen Ihnen alle Türen offen: Sie können später eine Weiterbildung zum Meister oder Fachwirt machen oder sogar ohne klassisches Abitur an einer Hochschule studieren.",
          question: "Nach einer Berufsausbildung kann man sich zum Meister weiterbilden oder später studieren.",
          options: ["Richtig", "Falsch"],
          answer: 0,
          explanation: "صحيح (Richtig): بعد إنهاء التدريب المهني يمكن التقدم للحصول على لقب Meister أو الدراسة الجامعية."
        }
      ]
    }
  ]
};
