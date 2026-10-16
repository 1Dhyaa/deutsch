// website/js/b2/exam/ai-partner.js — Scripted AI Partner Engine for Goethe B2 Sprechen
// Provides multi-turn conversational partner behavior, speech recognition, and Goethe B2 oral rubric evaluation.

(function () {
  'use strict';

  window.DM = window.DM || {};
  window.DM.b2 = window.DM.b2 || {};

  const AIPartner = {
    partnerName: 'Lukas',
    partnerGender: 'male', // 'male' (George) | 'female' (Alice)
    currentStep: 0,
    transcript: [],

    // Scenarios for Teil 2 (Diskussion & Problemlösung)
    scenarios: [
      {
        id: 'teambuilding',
        titleDe: 'Planung eines Teambuilding-Tages für die Abteilung',
        titleAr: 'تخطيط يوم تدريب وترفيه لبناء فريق العمل في الشركة',
        contextDe: 'Sie und Ihr Partner sollen für Ihre 15-köpfige Abteilung ein gemeinsames Teambuilding-Event planen. Es stehen zwei Vorschläge im Raum: Ein Klettergarten in den Bergen oder ein Kultur- und Museumsbesuch mit anschließendem Kochkurs. Diskutieren Sie, finden Sie Vor- und Nachteile und einigen Sie sich auf ein gemeinsames Programm.',
        turns: [
          {
            speaker: 'partner',
            de: 'Hallo! Schön, dass wir uns zusammensetzen können. Wir müssen ja den Team-Tag für nächsten Monat organisieren. Ich persönlich fände einen Ausflug in den Klettergarten fantastisch, weil man sich da körperlich betätigt und das Vertrauen im Team stärkt. Was hältst du von dieser Idee?',
            ar: 'مرحباً! من الجيد أننا نجلس معاً. يجب علينا تنظيم يوم الفريق للشهر القادم. شخصياً أجد الذهاب إلى حديقة التسلق في الجبال فكرة رائعة لأنها تتطلب حركة بدنية وتقوي الثقة داخل الفريق. ما رأيك في هذه الفكرة؟'
          },
          {
            speaker: 'partner',
            de: 'Da hast du natürlich einen wichtigen Punkt angesprochen — nicht jeder Kollege ist sportlich fit oder schwindelfrei. Aber meinst du nicht, dass ein reiner Museumsbesuch für viele etwas zu langweilig und trocken sein könnte?',
            ar: 'لقد ذكرت نقطة مهمة جداً — فليس كل الزملاء لائقين بدنياً أو لا يخشون المرتفعات. ولكن ألا تعتقد أن مجرد زيارة متحف قد تكون مملة للبعض؟'
          },
          {
            speaker: 'partner',
            de: 'Der Vorschlag mit dem Kochkurs gefällt mir außerordentlich gut! Gemeinsam kochen verbindet alle und macht Spaß. Allerdings müssen wir auf unser Budget achten. Meinst du, die Abteilungsleitung bewilligt die Kosten dafür?',
            ar: 'اقتراح ورشة الطهي المشترك يعجبني للغاية! الطبخ المشترك يقرب الجميع وممتع. ولكن علينا الانتباه للميزانية. هل تعتقد أن الإدارة ستوافق على التكاليف؟'
          },
          {
            speaker: 'partner',
            de: 'Das ist ein hervorragender Kompromiss! Wir machen vormittags einen leichten Spaziergang im Schlosspark und nachmittags den interaktiven Kochkurs. Sollen wir das so zusammenfassen und dem Chef vorschlagen?',
            ar: 'هذا حل وسط ممتاز! نقوم بجولة مشي صباحاً في حديقة القصر وبعد الظهر ورشة الطبخ. هل نتفق على هذا المقترح ونرفعه للمدير؟'
          }
        ]
      },
      {
        id: 'homeoffice-regelung',
        titleDe: 'Regelung für mobiles Arbeiten und Büro-Präsenz',
        titleAr: 'تحديد نظام العمل عن بعد والحضور المكتبي في الشركة',
        contextDe: 'Das Management möchte eine neue Betriebsvereinbarung zum Homeoffice einführen. Diskutieren Sie: Sollen drei Tage feste Präsenz im Büro Pflicht sein, oder sollte jeder Mitarbeiter seine Arbeitsorte völlig flexibel selbst wählen dürfen? Finden Sie eine tragfähige Lösung.',
        turns: [
          {
            speaker: 'partner',
            de: 'Guten Tag. Wir müssen heute über die neue Homeoffice-Regelung für unser Team abstimmen. Die Geschäftsleitung schlägt vor, dass alle Mitarbeiter an drei festen Tagen pro Woche im Büro anwesend sein müssen. Ich halte das für sinnvoll, um den persönlichen Zusammenhalt nicht zu verlieren. Wie siehst du das?',
            ar: 'مرحباً. يجب أن نتفق اليوم حول لائحة العمل من المنزل. الإدارة تقترح 3 أيام حضور إجباري في المكتب للحفاظ على التواصل المباشر. أرى ذلك منطقياً، ما هو رأيك؟'
          },
          {
            speaker: 'partner',
            de: 'Ich verstehe deine Argumente bezüglich der Flexibilität und der gesparten Pendelzeit vollkommen. Trotzdem erleben wir doch oft, dass spontane Absprachen auf dem Flur viel schneller gehen als zehn Video-Meetings. Wie können wir das sicherstellen?',
            ar: 'أتفهم حجتك تماماً بخصوص المرونة وتوفير وقت المواصلات. لكننا نلاحظ أن التنسيق السريع في الممر أسرع بكثير من عشرات الاجتماعات عبر الفيديو. كيف نضمن ذلك؟'
          },
          {
            speaker: 'partner',
            de: 'Was hältst du davon, wenn wir zwei feste Kerntage festlegen, an denen alle da sind — zum Beispiel Dienstag und Donnerstag für Team-Meetings —, und an den anderen drei Tagen freie Wahl lassen?',
            ar: 'ما رأيك لو حددنا يومين أساسيين يحضر فيهما الجميع — مثل الثلاثاء والخميس للاجتماعات — ونترك الأيام الثلاثة الأخرى اختيارية بالكامل؟'
          },
          {
            speaker: 'partner',
            de: 'Perfekt! Damit haben wir sowohl die Interessen der Mitarbeiter als auch die betrieblichen Erfordernisse unter einen Hut gebracht. Ich bereite das Protokoll für die Betriebsversammlung vor.',
            ar: 'ممتاز! هكذا وفقنا بين رغبات الموظفين ومتطلبات سير العمل. سأقوم بإعداد المحضر لاجتماع الشركة العام.'
          }
        ]
      }
    ],

    // Follow-up questions for Teil 1 (Vortrag)
    vortragQuestions: [
      {
        topic: 'haustiere',
        de: 'Vielen Dank für Ihre sehr strukturierte Präsentation. Sie haben erwähnt, dass Haustiere das Wohlbefinden steigern. Was würden Sie jedoch einem Nachbarn antworten, der sich über lautes Hundegebell oder Tierhaar-Allergien im Hausflur beschwert?',
        ar: 'شكراً جزيلاً لعرضك التقديمي المنظم. لقد ذكرت أن الحيوانات تعزز الصحة النفسية. لكن ماذا سترد على جار يشتكي من نباح الكلاب أو حساسية شعر الحيوانات في مدخل المبنى؟'
      },
      {
        topic: 'fsj',
        de: 'Ein interessanter Vortrag, vielen Dank! Glauben Sie, dass ein Freiwilliges Soziales Jahr für alle Schulabgänger verpflichtend sein sollte, oder würde ein Zwang den eigentlichen Sinn des Ehrenamts zerstören?',
        ar: 'عرض شيق، شكراً لك! هل تعتقد أن سنة التطوع يجب أن تكون إجبارية لجميع خريجي المدارس، أم أن الإجبار يفسد المعنى الحقيقي للعمل التطوعي؟'
      },
      {
        topic: 'bio',
        de: 'Danke für Ihre Ausführungen. Bio-Produkte sind oft doppelt so teuer wie konventionelle Waren. Wie können auch einkommensschwache Familien oder Studierende Zugang zu gesunder Ernährung erhalten?',
        ar: 'شكراً لتوضيحك. المنتجات العضوية تكلف ضعف السلع العادية أحياناً. كيف يمكن للأسر محدودة الدخل أو الطلاب الحصول على تغذية صحية دون إرهاق ميزانيتهم؟'
      }
    ],

    speak(text, onEnd) {
      if (!window.Speech) return;
      // Use speech engine with partner voice
      if (typeof window.Speech.speakWithVoice === 'function') {
        const voiceId = this.partnerGender === 'male' ? 'JBFqnCBsd6RMkjVDRZzb' : 'Xb7hH8MSUJpSbSDYk0k2';
        window.Speech.speakWithVoice(text, voiceId, onEnd);
      } else {
        window.Speech.speak(text);
        if (onEnd) setTimeout(onEnd, 3500);
      }
    },

    evaluateSpeaking(transcriptText, mode = 'vortrag') {
      const words = transcriptText.trim().split(/\s+/).filter(Boolean).length;
      
      // Keywords & Connectors analysis
      const b2Connectors = ['zwar', 'aber', 'nicht nur', 'sondern auch', 'einerseits', 'andererseits', 'deshalb', 'daher', 'trotzdem', 'meiner meinung nach', 'meiner auffassung nach', 'in betracht ziehen'];
      const found = b2Connectors.filter(c => transcriptText.toLowerCase().includes(c));

      let pronunciationScore = 22; // Base good score
      let fluencyScore = Math.min(25, Math.round(words / 4));
      let grammarScore = Math.min(25, 12 + found.length * 3);
      let interactionScore = mode === 'diskussion' ? 24 : 22;

      const total = Math.min(100, pronunciationScore + fluencyScore + grammarScore + interactionScore);
      const passed = total >= 60;

      // Award XP
      if (window.DM && window.DM.bus) {
        window.DM.bus.emit('dm:xp', { amount: Math.round(total / 2), source: 'b2_sprechen' });
      }

      return {
        total,
        passed,
        words,
        connectorsFound: found,
        breakdown: {
          pronunciation: pronunciationScore,
          fluency: fluencyScore,
          grammar: grammarScore,
          interaction: interactionScore
        }
      };
    }
  };

  window.DM.b2.AIPartner = AIPartner;
})();
