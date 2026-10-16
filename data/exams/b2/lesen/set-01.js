// website/data/exams/b2/lesen/set-01.js — Goethe-Zertifikat B2: Lesen (Modellsatz 1)
// Original, authentic examination content designed in conformity with Goethe B2 specifications.

window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA["b2-lesen-set-01"] = {
  id: "b2-lesen-set-01",
  level: "b2",
  module: "lesen",
  setNumber: 1,
  title: {
    de: "Goethe-Zertifikat B2 — Lesen (Modellsatz 1)",
    ar: "امتحان غوته B2 الرسمي — وحدة القراءة (النموذج التجريبي 1)"
  },
  durationMinutes: 65,
  maxScore: 100,
  passScore: 60, // 60% (18/30 items)
  totalItems: 30,
  instructions: {
    de: "Dieser Test besteht aus 5 Teilen mit insgesamt 30 Aufgaben. Sie haben 65 Minuten Zeit. Lesen Sie die Texte und lösen Sie die Aufgaben.",
    ar: "يتألف هذا الامتحان من 5 أجزاء ومجموع 30 سؤالاً في 65 دقيقة. اقرأ النصوص بتمعن وأجب عن كافة الأسئلة."
  },
  teile: [
    // ==========================================
    // TEIL 1: Standpunkte zu einem Thema (Aufgaben 1–5)
    // ==========================================
    {
      teilNumber: 1,
      title: {
        de: "Teil 1: Debatte — Einführung der 4-Tage-Woche",
        ar: "الجزء 1: آراء متباينة حول إقرار أسبوع العمل المكون من 4 أيام"
      },
      instructions: {
        de: "Sie lesen die Äußerungen von vier Personen zu einem aktuellen gesellschaftlichen Thema. Welche Person vertritt welche Meinung? Für die Aufgaben 1 bis 5 wählen Sie: A, B, C, D oder 'Niemand'.",
        ar: "اقرأ آراء 4 أشخاص حول أسبوع العمل المكون من 4 أيام. حدد من يمثل كل رأي من الأسئلة 1 إلى 5 (شخص A أو B أو C أو D أو لا أحد)."
      },
      textType: "matching",
      text: {
        title: "Sollte die 4-Tage-Woche bei vollem Lohnausgleich gesetzlich verankert werden?",
        content: `**Person A (Marcus Weber, Inhaber eines mittelständischen Handwerksbetriebs):**
Als Unternehmer sehe ich diesen Vorstoß mit allergrößter Skepsis. Im Handwerk und auf dem Bau lässt sich die Arbeit nicht einfach verdichten. Ein Dach deckt sich nicht an vier Tagen schneller als an fünf. Wenn wir bei gleichem Gehalt die Arbeitszeit um 20 Prozent kürzen, explodieren unsere Lohnstückkosten. Das können wir nicht an die Kunden weitergeben, ohne Aufträge an ausländische Mitbewerber zu verlieren. Für mich ist diese Diskussion völlig an der wirtschaftlichen Realität des Mittelstands vorbeigedacht.

**Person B (Julia Schneider, Softwareentwicklerin und Mutter):**
Für mich war die Umstellung auf vier Arbeitstage ein wahrer Segen. Unser Unternehmen hat dieses Modell testweise eingeführt, und die Ergebnisse sprechen für sich: Wir arbeiten in den verbleibenden Tagen viel fokussierter, unproduktive Meetings wurden drastisch gestrichen, und der Krankenstand hat sich fast halbiert. Am freien Freitag erledige ich Behördengänge und Einkäufe, sodass das Wochenende wirklich der Erholung mit meiner Familie gehört. Ausgeruhte Mitarbeiter sind erwiesenermaßen kreativer und loyaler.

**Person C (Dr. Thomas Berger, Arbeitsmarktforscher):**
Man darf dieses Thema nicht pauschalisieren. Zahlreiche internationale Pilotprojekte zeigen zwar eine Steigerung des Wohlbefindens und teilweise auch der Produktivität, doch das gilt vor allem für wissensbasierte Bürojobs. Im Pflegebereich, im öffentlichen Nahverkehr oder im Bildungssektor herrscht bereits heute ein dramatischer Fachkräftemangel. Wer dort die Arbeitszeit flächendeckend verkürzt, riskiert den Zusammenbruch der Grundversorgung. Ein starres Gesetz halte ich daher für gefährlich; flexible Branchenlösungen sind der einzig gangbare Weg.

**Person D (Fatima Mansour, Gewerkschaftssekretärin):**
Die Digitalisierung und der Einsatz künstlicher Intelligenz haben die Produktivität pro Arbeitsstunde in den letzten Jahrzehnten vervielfacht. Doch die Beschäftigten haben davon kaum profitiert — stattdessen nehmen psychische Belastungen und Burnout-Erkrankungen massiv zu. Eine Arbeitszeitverkürzung bei vollem Lohnausgleich ist nicht nur gerecht, sondern auch eine zukunftsweisende Antwort auf die Automatisierung. Wer gute Fachkräfte gewinnen will, muss attraktive Lebensmodelle bieten.`
      },
      questions: [
        {
          number: 1,
          question: "Welche Person weist darauf hin, dass eine Arbeitszeitverkürzung in bestimmten Berufen die Grundversorgung der Gesellschaft gefährden könnte?",
          options: ["Person A", "Person B", "Person C", "Person D", "Niemand"],
          answer: 2,
          explanation: "الدكتور بيرغر (Person C) يصرح بأن تقليص ساعات العمل في قطاعات مثل الرعاية الصحية والنقل والتعليم يهدد بانهيار الخدمات الأساسية (Zusammenbruch der Grundversorgung)."
        },
        {
          number: 2,
          question: "Welche Person berichtet aus eigener positiver Erfahrung über gestiegene Effizienz und gesunkene Fehltage?",
          options: ["Person A", "Person B", "Person C", "Person D", "Niemand"],
          answer: 1,
          explanation: "جوليا شنايدر (Person B) تذكر أن شركتها طبقت النموذج تجريبياً وأن أيام الإجازات المرضية انخفضت للنصف وزادت الإنتاجية والتركيز."
        },
        {
          number: 3,
          question: "Welche Person befürchtet schwere finanzielle Nachteile und den Verlust von Aufträgen an die Konkurrenz?",
          options: ["Person A", "Person B", "Person C", "Person D", "Niemand"],
          answer: 0,
          explanation: "ماركوس فيبر (Person A) يؤكد أن تكاليف العمالة سترتفع بنسبة 20% مما سيؤدي لفقدان الصفقات والزبائن لصالح المنافسين الأجانب."
        },
        {
          number: 4,
          question: "Welche Person argumentiert, dass die technologische Produktivitätssteigerung den Arbeitnehmern zugutekommen muss?",
          options: ["Person A", "Person B", "Person C", "Person D", "Niemand"],
          answer: 3,
          explanation: "فاطمة منصور (Person D) تشدد على أن الأتمتة والرقمنة ضاعفتا إنتاجية ساعة العمل ويجب أن تنعكس فوائدها على راحة العمال."
        },
        {
          number: 5,
          question: "Welche Person fordert die sofortige Senkung der Löhne für alle Angestellten bei Einführung der 4-Tage-Woche?",
          options: ["Person A", "Person B", "Person C", "Person D", "Niemand"],
          answer: 4,
          explanation: "لا أحد من الأشخاص الأربعة طالب بتخفيض رواتب الموظفين (Niemand)."
        }
      ]
    },

    // ==========================================
    // TEIL 2: Zwei längere Zeitungsartikel (Aufgaben 6–11)
    // ==========================================
    {
      teilNumber: 2,
      title: {
        de: "Teil 2: Magazinberichte (Wissenschaft & Umwelt)",
        ar: "الجزء 2: مقالات علمية ومجتمعية مطولة (الذكاء الاصطناعي والزراعة الحضرية)"
      },
      instructions: {
        de: "Lesen Sie die beiden Texte und lösen Sie die Aufgaben 6 bis 11. Wählen Sie bei jeder Aufgabe die richtige Lösung: a, b oder c.",
        ar: "اقرأ النصين التاليين وأجب عن الأسئلة من 6 إلى 11 باختيار البديل الصحيح (a أو b أو c)."
      },
      textType: "article",
      text: {
        title: "Text 1: KI in der Medizin / Text 2: Grüne Dächer",
        content: `### Text 1: Künstliche Intelligenz in der medizinischen Diagnostik
Die Bilderkennung durch maschinelles Lernen hat in den vergangenen Jahren enorme Fortschritte erzielt. Speziell trainierte Algorithmen sind heute in der Lage, mammografische Aufnahmen oder Hautveränderungen mit einer Treffsicherheit zu analysieren, die selbst erfahrene Fachärzte in Erstaunen versetzt. Häufig erkennen die Systeme winzige Gewebeveränderungen lange bevor sie für das menschliche Auge sichtbar werden.

Dennoch betonen Experten weltweit, dass die Technologie den behandelnden Arzt keineswegs ersetzen, sondern als hochpräzises Assistenzsystem fungieren soll. Eine Maschine kann zwar Muster blitzschnell abgleichen, ihr fehlt jedoch der ganzheitliche Blick auf die Krankengeschichte, das seelische Befinden und die individuelle Lebenssituation des Patienten. Zudem wirft der Einsatz von KI heikle Haftungsfragen auf: Wer trägt die Verantwortung, wenn ein Algorithmus eine falsche Diagnose stellt und daraufhin eine fehlerhafte Therapie eingeleitet wird? Bislang verlangen die ethischen Leitlinien unmissverständlich, dass jede endgültige therapeutische Entscheidung bei einem menschlichen Mediziner verbleiben muss.

---

### Text 2: Urbane Landwirtschaft — Nahrungsmittel von städtischen Dächern
Angesichts wachsender Weltbevölkerung und zunehmender Versiegelung natürlicher Böden suchen europäische Metropolen nach innovativen Wegen der Lebensmittelproduktion. Ein zukunftsträchtiges Konzept ist das sogenannte »Rooftop Farming«, bei dem brachliegende Flachdächer von Bürogebäuden und Fabrikhallen in fruchtbare Nutzgärten verwandelt werden. 

Die Vorteile liegen auf der Hand: Frisches Gemüse wie Tomaten, Kräuter und Salate wird genau dort angebaut, wo es auch konsumiert wird. Dadurch entfallen weite Transportwege, was die CO2-Emissionen verringert und den Verkehr in den Innenstädten spürbar entlastet. Darüber hinaus tragen die bepflanzten Dachflächen zu einer natürlichen Kühlung der Stadtluft im Sommer bei und nehmen bei Starkregen enorme Wassermengen auf, was das städtische Kanalsystem vor Überlastung schützt. Allerdings erfordert die Installation der Dächer erhebliche Anfangsinvestitionen in die Statik und spezielle Bewässerungssysteme, weshalb sich viele private Immobilienbesitzer noch zögerlich verhalten.`
      },
      questions: [
        {
          number: 6,
          question: "Was wird im ersten Text über die Fähigkeiten moderner KI-Systeme berichtet?",
          options: [
            "Sie können Gewebeveränderungen oft früher identifizieren als Ärzte.",
            "Sie haben erfahrene Fachärzte in Kliniken bereits vollständig abgelöst.",
            "Sie funktionieren nur bei der Untersuchung von Hauterkrankungen zuverlässig."
          ],
          answer: 0,
          explanation: "النص 1 يذكر صراحة: 'Häufig erkennen die Systeme winzige Gewebeveränderungen lange bevor sie für das menschliche Auge sichtbar werden'."
        },
        {
          number: 7,
          question: "Welche wesentliche Schwäche von Diagnosesoftware wird im ersten Text genannt?",
          options: [
            "Die Bildanalyse dauert wesentlich länger als die Beurteilung durch einen Mediziner.",
            "Die Algorithmen können die persönliche Gesamtsituation des Kranken nicht erfassen.",
            "Sie verursachen extrem hohe Kosten für die Patienten."
          ],
          answer: 1,
          explanation: "النص يوضح: 'ihr fehlt jedoch der ganzheitliche Blick auf die Krankengeschichte, das seelische Befinden und die individuelle Lebenssituation des Patienten'."
        },
        {
          number: 8,
          question: "Wer muss laut den aktuellen Richtlinien die Verantwortung für Behandlungsentscheidungen tragen?",
          options: [
            "Das Softwareunternehmen, das die KI programmiert hat.",
            "Die Krankenhausleitung gemeinsam mit dem Patienten.",
            "Der behandelnde Arzt als menschlicher Entscheidungsträger."
          ],
          answer: 2,
          explanation: "النص 1 يؤكد: 'Bislang verlangen die ethischen Leitlinien unmissverständlich, dass jede endgültige therapeutische Entscheidung bei einem menschlichen Mediziner verbleiben muss'."
        },
        {
          number: 9,
          question: "Welches Ziel verfolgen Städte mit der Einführung von »Rooftop Farming«?",
          options: [
            "Die Versorgung mit Lebensmitteln direkt in Ballungsräumen zu ermöglichen.",
            "Alle traditionellen ländlichen Bauernhöfe schrittweise zu schließen.",
            "Büroflächen in günstige Wohnungen für Landwirte umzuwandeln."
          ],
          answer: 0,
          explanation: "النص 2 يوضح زراعة الغذاء واستهلاكه محلياً داخل المدن: 'Frisches Gemüse... wird genau dort angebaut, wo es auch konsumiert wird'."
        },
        {
          number: 10,
          question: "Welcher ökologische Zusatznutzen von Gründächern wird hervorgehoben?",
          options: [
            "Sie senken die städtischen Temperaturen und regulieren Regenwassermassen.",
            "Sie reinigen das Trinkwasser für die Haushalte vollständig.",
            "Sie produzieren Strom für die gesamte Innenstadt."
          ],
          answer: 0,
          explanation: "النص يشير إلى: 'tragen die bepflanzten Dachflächen zu einer natürlichen Kühlung der Stadtluft... und nehmen bei Starkregen enorme Wassermengen auf'."
        },
        {
          number: 11,
          question: "Warum zögern manche Hauseigentümer noch bei der Begrünung von Dächern?",
          options: [
            "Weil der Anbau von Gemüse auf Dächern gesetzlich untersagt ist.",
            "Wegen des hohen finanziellen Aufwands für Baustatik und Bewässerung.",
            "Weil es in europäischen Großstädten nicht ausreichend regnet."
          ],
          answer: 1,
          explanation: "النص يختم بـ: 'Allerdings erfordert die Installation der Dächer erhebliche Anfangsinvestitionen in die Statik und spezielle Bewässerungssysteme'."
        }
      ]
    },

    // ==========================================
    // TEIL 3: Text mit Lücken (Aufgaben 12–17)
    // ==========================================
    {
      teilNumber: 3,
      title: {
        de: "Teil 3: Lückentext — Lebenslanges Lernen",
        ar: "الجزء 3: نص به فراغات متسلسلة وإعادة بناء السياق (التعلم مدى الحياة)"
      },
      instructions: {
        de: "Lesen Sie den Text und die Lücken 12 bis 17. Welche der Sätze a bis h passt in welche Lücke? Zwei Sätze passen nicht.",
        ar: "اقرأ المقال التالي وحدد الجملة المناسبة من a إلى h لكل فراغ من 12 إلى 17. هناك جملتان زائدتان لا تناسبان أي فراغ."
      },
      textType: "article",
      text: {
        title: "Lebenslanges Lernen als Schlüssel zur modernen Arbeitswelt",
        content: `Die Zeiten, in denen eine einmal abgeschlossene Berufsausbildung oder ein Hochschulstudium für das gesamte Erwerbsleben ausreichte, sind endgültig vorbei. Die fortschreitende Digitalisierung, neue Arbeitsmethoden und der rasante technologische Wandel verändern Berufsbilder heute in einer Geschwindigkeit, die vor wenigen Jahrzehnten noch unvorstellbar gewesen wäre. [ 12 ] Wer heute stehen bleibt, verliert innerhalb weniger Jahre den Anschluss an den Arbeitsmarkt.

Aus diesem Grund gewinnt das Konzept des lebenslangen Lernens eine zentrale Bedeutung für Beschäftigte aller Altersgruppen. Es geht dabei längst nicht mehr nur um formale Fortbildungen mit offiziellen Zeugnissen. [ 13 ] Vielmehr umfasst kontinuierliche Bildung auch das selbstständige Erlernen digitaler Werkzeuge über Webinare, Podcasts und Online-Plattformen.

Allerdings stehen viele Erwerbstätige vor großen praktischen Hürden, wenn sie sich neben dem Beruf weiterbilden möchten. [ 14 ] Nach einem anstrengenden Acht-Stunden-Tag fehlt häufig schlichtweg die Energie und Konzentration für anspruchsvolle Lerninhalte. Experten fordern deshalb, dass Weiterbildung als integraler Bestandteil der regulären Arbeitszeit anerkannt und gefördert werden muss.

Hierbei sind vor allem die Arbeitgeber in der Pflicht, zeitliche und finanzielle Freiräume zu schaffen. Unternehmen, die in die Kompetenzen ihrer Belegschaft investieren, profitieren nachweislich von höherer Innovationskraft und einer geringeren Fluktuation. [ 15 ] Wer den Mitarbeitern zukunftsorientierte Entwicklungsperspektiven aufzeigt, bindet qualifizierte Talente langfristig an den Betrieb.

Doch Weiterbildung darf nicht allein als betriebswirtschaftliches Instrument verstanden werden. [ 16 ] Wer sich neues Wissen aneignet, gewinnt an Selbstvertrauen und stärkt seine persönliche Handlungsfähigkeit in einer immer komplexeren Gesellschaft.

Zusammenfassend lässt sich sagen, dass Lernbereitschaft die wichtigste Zukunftsqualifikation des 21. Jahrhunderts darstellt. [ 17 ] Nur wenn Politik, Wirtschaft und Individuen gemeinsam an einem Strang ziehen, wird Deutschland im globalen Wissenswettbewerb bestehen können.

---
**Zur Auswahl stehende Sätze (a–h):**
a) Früher galt der Grundsatz: Erst die Ausbildung, dann vierzig Jahre ununterbrochen dieselbe Tätigkeit.
b) Neben dem zeitlichen Druck stellt die Doppelbelastung durch Familie und Beruf das Haupthindernis dar.
c) Zufriedene Angestellte neigen nämlich deutlich seltener dazu, das Unternehmen bei der erstbesten Gelegenheit zu verlassen.
d) Sie hat auch eine tiefgreifende soziale und emanzipatorische Dimension für den Einzelnen.
e) Deshalb sollten alle Schulen künftig gänzlich auf Prüfungsnoten und Hausaufgaben verzichten.
f) Die Bereitschaft, sich permanent neues Wissen anzueignen, ist kein Luxus mehr, sondern eine reine Existenznotwendigkeit.
g) Denn viele Berufsfelder von morgen existieren in der heutigen Wirtschaft noch überhaupt nicht.
h) Man unterscheidet dabei streng zwischen universitären Abschlüssen und handwerklichen Meistertiteln.`
      },
      questions: [
        {
          number: 12,
          question: "Welcher Satz passt in Lücke [ 12 ]?",
          options: [
            "a) Früher galt der Grundsatz: Erst die Ausbildung, dann vierzig Jahre ununterbrochen dieselbe Tätigkeit.",
            "b) Neben dem zeitlichen Druck stellt die Doppelbelastung...",
            "c) Zufriedene Angestellte neigen nämlich deutlich seltener...",
            "d) Sie hat auch eine tiefgreifende soziale...",
            "e) Deshalb sollten alle Schulen...",
            "f) Die Bereitschaft, sich permanent neues Wissen anzueignen...",
            "g) Denn viele Berufsfelder von morgen existieren in der heutigen Wirtschaft noch überhaupt nicht.",
            "h) Man unterscheidet dabei streng..."
          ],
          answer: 6, // g fits: 'Berufsbilder verändern sich... Denn viele Berufsfelder von morgen existieren noch gar nicht. Wer stehen bleibt...'
          explanation: "الجملة g تشرح الجملة السابقة حول سرعة تغير المهن، لأن مهن المستقبل لم تنشأ بعد في الاقتصاد الحالي."
        },
        {
          number: 13,
          question: "Welcher Satz passt in Lücke [ 13 ]?",
          options: [
            "a) Früher galt der Grundsatz: Erst die Ausbildung...",
            "b) Neben dem zeitlichen Druck stellt die Doppelbelastung...",
            "c) Zufriedene Angestellte neigen nämlich deutlich seltener...",
            "d) Sie hat auch eine tiefgreifende soziale...",
            "e) Deshalb sollten alle Schulen...",
            "f) Die Bereitschaft, sich permanent neues Wissen anzueignen...",
            "g) Denn viele Berufsfelder von morgen...",
            "h) Man unterscheidet dabei streng..."
          ],
          answer: 0, // a: 'Es geht nicht mehr nur um formale Fortbildungen... Früher galt der Grundsatz: Erst Ausbildung, dann 40 Jahre selbe Tätigkeit. Vielmehr umfasst...'
          explanation: "الجملة a توضح المقارنة التاريخية: سابقاً كان المبدأ هو التعليم أولاً ثم ممارسة نفس العمل 40 عاماً."
        },
        {
          number: 14,
          question: "Welcher Satz passt in Lücke [ 14 ]?",
          options: [
            "a) Früher galt der Grundsatz...",
            "b) Neben dem zeitlichen Druck stellt die Doppelbelastung durch Familie und Beruf das Haupthindernis dar.",
            "c) Zufriedene Angestellte neigen nämlich deutlich seltener...",
            "d) Sie hat auch eine tiefgreifende soziale...",
            "e) Deshalb sollten alle Schulen...",
            "f) Die Bereitschaft, sich permanent neues Wissen anzueignen...",
            "g) Denn viele Berufsfelder von morgen...",
            "h) Man unterscheidet dabei streng..."
          ],
          answer: 1, // b: 'stehen vor praktischen Hürden. Neben dem zeitlichen Druck stellt die Doppelbelastung durch Familie und Beruf das Haupthindernis dar. Nach einem Acht-Stunden-Tag...'
          explanation: "الجملة b تشرح العوائق العملية المذكورة قبل الفراغ، وتحديداً العبء المزدوج بين الأسرة والعمل وضيق الوقت."
        },
        {
          number: 15,
          question: "Welcher Satz passt in Lücke [ 15 ]?",
          options: [
            "a) Früher galt der Grundsatz...",
            "b) Neben dem zeitlichen Druck...",
            "c) Zufriedene Angestellte neigen nämlich deutlich seltener dazu, das Unternehmen bei der erstbesten Gelegenheit zu verlassen.",
            "d) Sie hat auch eine tiefgreifende soziale...",
            "e) Deshalb sollten alle Schulen...",
            "f) Die Bereitschaft, sich permanent neues Wissen anzueignen...",
            "g) Denn viele Berufsfelder von morgen...",
            "h) Man unterscheidet dabei streng..."
          ],
          answer: 2, // c: 'geringere Fluktuation. Zufriedene Angestellte neigen nämlich deutlich seltener dazu, das Unternehmen zu verlassen.'
          explanation: "الجملة c تعلل جملة انخفاض معدل دوران الموظفين (Fluktuation): الموظف الراضي نادراً ما يغادر الشركة."
        },
        {
          number: 16,
          question: "Welcher Satz passt in Lücke [ 16 ]?",
          options: [
            "a) Früher galt der Grundsatz...",
            "b) Neben dem zeitlichen Druck...",
            "c) Zufriedene Angestellte neigen nämlich...",
            "d) Sie hat auch eine tiefgreifende soziale und emanzipatorische Dimension für den Einzelnen.",
            "e) Deshalb sollten alle Schulen...",
            "f) Die Bereitschaft, sich permanent neues Wissen anzueignen...",
            "g) Denn viele Berufsfelder von morgen...",
            "h) Man unterscheidet dabei streng..."
          ],
          answer: 3, // d: 'nicht allein als betriebswirtschaftliches Instrument. Sie hat auch eine tiefgreifende soziale und emanzipatorische Dimension...'
          explanation: "الجملة d ترتبط بجملة نفي كون التعليم أداة اقتصادية فقط، بل له بعد اجتماعي وإنساني عميق."
        },
        {
          number: 17,
          question: "Welcher Satz passt in Lücke [ 17 ]?",
          options: [
            "a) Früher galt der Grundsatz...",
            "b) Neben dem zeitlichen Druck...",
            "c) Zufriedene Angestellte neigen nämlich...",
            "d) Sie hat auch eine tiefgreifende...",
            "e) Deshalb sollten alle Schulen...",
            "f) Die Bereitschaft, sich permanent neues Wissen anzueignen, ist kein Luxus mehr, sondern eine reine Existenznotwendigkeit.",
            "g) Denn viele Berufsfelder von morgen...",
            "h) Man unterscheidet dabei streng..."
          ],
          answer: 5, // f: 'wichtigste Zukunftsqualifikation. Die Bereitschaft... ist kein Luxus mehr, sondern eine Existenznotwendigkeit. Nur wenn...'
          explanation: "الجملة f تلخص خاتمة المقال بأن اكتساب المعرفة المستمر ليس ترفاً بل ضرورة وجودية في العصر الحالي."
        }
      ]
    },

    // ==========================================
    // TEIL 4: Zuordnung von Anzeigen (Aufgaben 18–25)
    // ==========================================
    {
      teilNumber: 4,
      title: {
        de: "Teil 4: Zuordnung von Anzeigen zu Personen",
        ar: "الجزء 4: مطابقة احتياجات الأشخاص مع الإعلانات المناسبة"
      },
      instructions: {
        de: "Sie lesen 8 Situationen von Personen, die bestimmte Dienstleistungen, Kurse oder Lösungen suchen, und 7 Anzeigen (A–G). Welche Anzeige passt zu welcher Person? Wenn keine Anzeige passt, wählen Sie '0'.",
        ar: "اقرأ المواقف الـ 8 لأشخاص يبحثون عن خدمات، والإعلانات الـ 7 (A–G). طابق كل شخص بالإعلان المناسب له، أو اختر الرقم '0' إذا لم يكن هناك إعلان ملائم."
      },
      textType: "matching",
      text: {
        title: "Anzeigenmarkt: Weiterbildung, Büro & Events",
        content: `**Anzeige A: »Rhetorik & Überzeugungskraft« — Wochenendseminar in Köln**
Sie müssen vor großem Publikum oder in wichtigen Konferenzen sprechen? Lernen Sie professionelle Atem- und Sprechtechniken, Körpersprache und den souveränen Umgang mit Blackouts. Kleingruppen bis maximal 8 Personen. Inklusive Videoanalyse und individuellem Trainer-Feedback.

**Anzeige B: »Co-Working & Konferenzzentrum Spreeblick« — Berlin**
Repräsentative Konferenz- und Tagungsräume für 10 bis 120 Personen stunden- oder tageweise buchbar. Modernste Hybrid-Tagungstechnik, Highspeed-WLAN, ergonomische Bestuhlung sowie Full-Service-Catering mit Bio-Spezialitäten aus der Region. Zentrale Lage am Hauptbahnhof.

**Anzeige C: »Sprachinstitut Europa« — Wirtschaftsdeutsch für Fachkräfte**
Gezieltes B2/C1-Sprachtraining für internationale Ingenieure, Ärzte und IT-Spezialisten. Verhandlungssichere Kommunikation, Verfassen fehlerfreier technischer Berichte und professionelle E-Mail-Korrespondenz. Abendkurse (2x wöchentlich) oder flexible Online-Einzelcoachings.

**Anzeige D: »Green Office Solutions« — Bürobegrünung und Akustikoptimierung**
Verwandeln Sie graue Großraumbüros in produktive Wohlfühloasen. Wir planen, liefern und pflegen pflegeleichte Pflanzensysteme und begrünte Akustik-Trennwände, die den Lärmpegel nachweislich um bis zu 40% senken. Unverbindliche Erstberatung vor Ort.

**Anzeige E: »Digital Office Helper« — Softwarelösungen für KMU**
Automatisieren Sie Ihre Buchhaltung und Rechnungsstellung! Unsere DSGVO-konforme Cloud-Software synchronisiert Bankkonten, erfasst Belege per Smartphone-Scan und erstellt monatliche Steuerberichte auf Knopfdruck. 30 Tage kostenlos und ohne Risiko testen.

**Anzeige F: »Event-Catering Gaumenfreude« — Ihr Partner für Firmenfeiern**
Ob Firmenjubiläum, Weihnachtsfeier oder Sommerfest: Wir beliefern Ihre Veranstaltung ab 30 Gästen mit feinsten Fingerfood-Buffets, veganen Köstlichkeiten und erfrischenden Getränken. Geschirrverleih und geschultes Servicepersonal auf Wunsch buchbar.

**Anzeige G: »Führungskräfte-Akademie Nord« — Vom Kollegen zum Chef**
Ein maßgeschneidertes Führungskräftetraining für neu beförderte Teamleiter. Schwerpunkte: Mitarbeitergespräche professionell führen, Konflikte im Team schlichten, Aufgaben wirksam delegieren und eigene Führungsautorität aufbauen. 3-monatiges berufsbegleitendes Zertifikatsprogramm.`
      },
      questions: [
        {
          number: 18,
          question: "Herr Al-Mansur ist erst vor kurzem zum Abteilungsleiter aufgestiegen und sucht nach einer Weiterbildung, um den Umgang mit Konflikten im Team und die Führung von Mitarbeitern zu erlernen.",
          options: ["Anzeige A", "Anzeige B", "Anzeige C", "Anzeige D", "Anzeige E", "Anzeige F", "Anzeige G", "0 (Keine passende Anzeige)"],
          answer: 6, // G (Führungskräfte)
          explanation: "الإعلان G مخصص للمديرين الجدد (Vom Kollegen zum Chef) ويغطي حل النزاعات وقيادة فريق العمل."
        },
        {
          number: 19,
          question: "Frau Kovač, eine ausländische Softwareingenieurin mit guten Deutschkenntnissen, möchte ihr Deutsch speziell für formelle Berichte und geschäftliche Verhandlungen im Beruf optimieren.",
          options: ["Anzeige A", "Anzeige B", "Anzeige C", "Anzeige D", "Anzeige E", "Anzeige F", "Anzeige G", "0 (Keine passende Anzeige)"],
          answer: 2, // C (Wirtschaftsdeutsch)
          explanation: "الإعلان C يقدم تدريباً على الألمانية التخصصية للمهندسين والأطباء وكتابة التقارير الفنية."
        },
        {
          number: 20,
          question: "Herr Becker plant eine internationale Fachtagung mit 60 Teilnehmern und benötigt dafür einen modernen Raum mit digitaler Konferenztechnik und Verpflegung in Bahnhofsnähe.",
          options: ["Anzeige A", "Anzeige B", "Anzeige C", "Anzeige D", "Anzeige E", "Anzeige F", "Anzeige G", "0 (Keine passende Anzeige)"],
          answer: 1, // B (Co-Working / Konferenzzentrum)
          explanation: "الإعلان B يوفر قاعات لـ 10 إلى 120 شخصاً بتقنيات هجينة وطعام عضوي قرب محطة القطار المركزية."
        },
        {
          number: 21,
          question: "Eine Firma möchte die Lärmbelästigung in ihrem offenen Großraumbüro verringern und gleichzeitig die Arbeitsatmosphäre durch Pflanzen verbessern.",
          options: ["Anzeige A", "Anzeige B", "Anzeige C", "Anzeige D", "Anzeige E", "Anzeige F", "Anzeige G", "0 (Keine passende Anzeige)"],
          answer: 3, // D (Green Office Solutions)
          explanation: "الإعلان D متخصص في تشجير المكاتب وحواجز النباتات العازلة للصوت التي تخفض الضوضاء 40%."
        },
        {
          number: 22,
          question: "Frau Sommer sucht für das Firmenjubiläum ihres Unternehmens (ca. 80 Gäste) einen Dienstleister, der warmes und kaltes Essen sowie geschultes Bedienungspersonal bereitstellt.",
          options: ["Anzeige A", "Anzeige B", "Anzeige C", "Anzeige D", "Anzeige E", "Anzeige F", "Anzeige G", "0 (Keine passende Anzeige)"],
          answer: 5, // F (Event-Catering Gaumenfreude)
          explanation: "الإعلان F يقدم بوفيهات الحفلات ابتداءً من 30 ضيفاً مع خدمة تقديم الطعام وتوفير الصحون."
        },
        {
          number: 23,
          question: "Herr Lenz, ein selbstständiger Handwerker, sucht jemanden, der seine Büroarbeiten und Telefonate vor Ort jeden Vormittag als persönliche Sekretärin übernimmt.",
          options: ["Anzeige A", "Anzeige B", "Anzeige C", "Anzeige D", "Anzeige E", "Anzeige F", "Anzeige G", "0 (Keine passende Anzeige)"],
          answer: 7, // 0 (Keine passende Anzeige)
          explanation: "لا يوجد إعلان يوفر سكرتيرة شخصية ميدانية في المكتب؛ الإعلان E برنامج سحابي فقط."
        },
        {
          number: 24,
          question: "Ein junger Projektmanager leidet unter starker Nervosität vor Präsentationen und möchte lernen, freier und überzeugender vor Publikum zu sprechen.",
          options: ["Anzeige A", "Anzeige B", "Anzeige C", "Anzeige D", "Anzeige E", "Anzeige F", "Anzeige G", "0 (Keine passende Anzeige)"],
          answer: 0, // A (Rhetorik & Überzeugungskraft)
          explanation: "الإعلان A مخصص لمهارات الخطابة وفن الإلقاء والتحكم في لغة الجسد والتغلب على التوتر أمام الجمهور."
        },
        {
          number: 25,
          question: "Eine kleine Werbeagentur möchte ihren manuellen Rechnungs- und Buchhaltungsaufwand durch ein digitales Programm vereinfachen.",
          options: ["Anzeige A", "Anzeige B", "Anzeige C", "Anzeige D", "Anzeige E", "Anzeige F", "Anzeige G", "0 (Keine passende Anzeige)"],
          answer: 4, // E (Digital Office Helper)
          explanation: "الإعلان E برنامج سحابي لأتمتة الفواتير ومسح الإيصالات ضوئياً ومزامنة الحسابات البنكية."
        }
      ]
    },

    // ==========================================
    // TEIL 5: Gesetz / Betriebsvereinbarung / Hausordnung (Aufgaben 26–30)
    // ==========================================
    {
      teilNumber: 5,
      title: {
        de: "Teil 5: Betriebsanweisung — IT-Sicherheit & Datenschutz",
        ar: "الجزء 5: التعليمات الرسمية — لوائح أمن المعلومات واستخدام الأجهزة في العمل"
      },
      instructions: {
        de: "Lesen Sie den Text und die Aufgaben 26 bis 30. Wählen Sie bei jeder Aufgabe die richtige Lösung: a, b oder c.",
        ar: "اقرأ لائحة التعليمات المؤسسية التالية وأجب عن الأسئلة من 26 إلى 30 باختيار البديل الصحيح (a أو b أو c)."
      },
      textType: "article",
      text: {
        title: "Betriebliche Richtlinie: IT-Sicherheit und Umgang mit Unternehmensdaten",
        content: `**§ 1 Grundsatz und Geltungsbereich**
Diese Betriebsvereinbarung gilt für alle Beschäftigten, Auszubildenden und freiberuflichen Mitarbeiter der Novatec GmbH. Der Schutz sensibler Kundendaten sowie der Schutz vor Schadsoftware haben für den Fortbestand des Unternehmens oberste Priorität. Jeder Verstoß gegen diese Richtlinien kann arbeitsrechtliche Konsequenzen nach sich ziehen.

**§ 2 Passwörter und Authentifizierung**
(1) Für den Zugang zu firmeneigenen Systemen ist ein komplexes Passwort mit mindestens 12 Zeichen, bestehend aus Groß- und Kleinbuchstaben, Ziffern und Sonderzeichen, festzulegen.
(2) Passwörter dürfen unter keinen Umständen an Dritte (einschließlich Kolleginnen und Vorgesetzten) weitergegeben oder in unverschlüsselter Form notiert werden.
(3) Sofern für ein System die Zwei-Faktor-Authentifizierung (2FA) aktiviert ist, ist deren Nutzung verpflichtend. Das Mitführen des registrierten Hardware-Tokens oder Dienst-Smartphones ist während der Arbeitszeit erforderlich.

**§ 3 Nutzung von Speichermedien und externen Geräten**
(1) Das Anschließen privater USB-Sticks, externer Festplatten oder privater Smartphones an unternehmenseigene Computer ist aus Sicherheitsgründen strengstens untersagt, um die Einschleusung von Viren und Ransomware zu verhindern.
(2) Dienstliche Daten dürfen ausschließlich auf den gesicherten Netzlaufwerken des Unternehmens oder im dafür freigegebenen Cloud-Speicher abgelegt werden. Eine lokale Speicherung auf der Festplatte des Laptops ist nur für temporäre Arbeitsdateien zulässig und muss nach Abschluss der Aufgabe unverzüglich gelöscht werden.

**§ 4 Homeoffice und mobiles Arbeiten**
(1) Beim Arbeiten außerhalb der Geschäftsräume ist sicherzustellen, dass unbefugte Dritte (einschließlich Familienangehörigen) keinen Einblick in sensible Dokumente oder Bildschirminhalte nehmen können.
(2) Bei Verlassen des mobilen Arbeitsplatzes — auch für kurze Zeit — ist der Bildschirm zwingend über die Tastenkombination [Windows + L] zu sperren.
(3) Öffentliche, ungesicherte WLAN-Netze (z. B. in Cafés oder Zügen) dürfen nur unter vorheriger Aktivierung des unternehmenseigenen VPN-Tunnels genutzt werden.`
      },
      questions: [
        {
          number: 26,
          question: "Für wen gelten die Vorschriften dieser IT-Sicherheitsrichtlinie?",
          options: [
            "Ausschließlich für die feste Belegschaft in der IT-Abteilung.",
            "Für alle Mitarbeiter, Praktikanten und Freiberufler des Unternehmens.",
            "Nur für Personen, die im Homeoffice oder mobil arbeiten."
          ],
          answer: 1,
          explanation: "تنص المادة الأولى (§ 1) بوضوح على سريان اللائحة على جميع الموظفين والمتدربين والمستقلين المتعاقدين."
        },
        {
          number: 27,
          question: "Welche Anforderung wird bezüglich der Passwörter ausdrücklich genannt?",
          options: [
            "Sie müssen jeden Monat verpflichtend erneuert werden.",
            "Sie dürfen im Notfall an den direkten Vorgesetzten mitgeteilt werden.",
            "Sie müssen mindestens 12 Zeichen umfassen und dürfen Dritten nicht mitgeteilt werden."
          ],
          answer: 2,
          explanation: "المادة (§ 2) تشترط كلمة سر من 12 خانة معقدة وتمنع إفشاءها لأي طرف بما في ذلك الرؤساء والزملاء."
        },
        {
          number: 28,
          question: "Was besagt die Regelung über private USB-Speichermedien?",
          options: [
            "Sie dürfen nur nach vorheriger Virenprüfung am Firmen-PC genutzt werden.",
            "Ihr Anschluss an Unternehmensrechner ist grundsätzlich vollkommen untersagt.",
            "Sie dürfen ausschließlich für Musik und persönliche Fotos verwendet werden."
          ],
          answer: 1,
          explanation: "المادة (§ 3 Abs. 1) تمنع منعاً باتاً (strengstens untersagt) توصيل أي وسائط تخزين خاصة بحواسيب الشركة."
        },
        {
          number: 29,
          question: "Wo sollen geschäftliche Dokumente vorrangig gespeichert werden?",
          options: [
            "Auf den gesicherten Netzwerklaufwerken oder in der freigegebenen Firmen-Cloud.",
            "Auf der lokalen Festplatte des jeweiligen Mitarbeiter-Laptops.",
            "In einem privaten E-Mail-Postfach als Sicherheitskopie."
          ],
          answer: 0,
          explanation: "المادة (§ 3 Abs. 2) تحدد حفظ البيانات حصرياً على شبكة الشركة المشتركة أو السحابة المعتمدة."
        },
        {
          number: 30,
          question: "Was müssen Mitarbeiter beachten, wenn sie in einem Café im öffentlichen WLAN arbeiten?",
          options: [
            "Sie müssen vorher die Erlaubnis der Cafelleitung einholen.",
            "Die Nutzung ist nur erlaubt, wenn die VPN-Verbindung der Firma aktiv ist.",
            "Das Arbeiten in öffentlichen Zügen und Cafés ist gänzlich verboten."
          ],
          answer: 1,
          explanation: "المادة (§ 4 Abs. 3) تجيز استخدام شبكات الواي فاي العامة فقط بشرط تفعيل نفق VPN المشفر للشركة مسبقاً."
        }
      ]
    }
  ]
};
