// Levels index - registry of all levels and their lessons
// This file defines the structure and order of the curriculum

window.LEVELS = [
  {
    id: "a1-review",
    title: { de: "A1 Wiederholung", ar: "مراجعة A1" },
    description: "مراجعة أهم مواضيع المستوى الأول",
    description_de: "Wiederholung der wichtigsten A1-Themen (15 Lektionen)",
    color: "#3B82F6",
    icon: "🔄",
    lessons: [
      { id: "a1-review-01", slug: "possessivpronomen", title: { de: "Possessivpronomen", ar: "ضمائر الملكية" }, dataFile: "a1-review/01-possessivpronomen.js" },
      { id: "a1-review-02", slug: "satzbau", title: { de: "Satzbau (V2)", ar: "بناء الجملة (V2)" }, dataFile: "a1-review/02-satzbau.js" },
      { id: "a1-review-03", slug: "negation", title: { de: "Negation: nicht vs. kein", ar: "النفي: nicht و kein" }, dataFile: "a1-review/03-negation.js" },
      { id: "a1-review-04", slug: "akkusativ", title: { de: "Der Akkusativ", ar: "حالة النصب (Akkusativ)" }, dataFile: "a1-review/04-akkusativ.js" },
      { id: "a1-review-05", slug: "dativ", title: { de: "Der Dativ", ar: "حالة الجر (Dativ)" }, dataFile: "a1-review/05-dativ.js" },
      { id: "a1-review-06", slug: "imperativ", title: { de: "Der Imperativ", ar: "صيغة الأمر" }, dataFile: "a1-review/06-imperativ.js" },
      { id: "a1-review-07", slug: "unregelmaessige-verben", title: { de: "Unregelmäßige Verben", ar: "الأفعال الشاذة (e→i / a→ä)" }, dataFile: "a1-review/07-unregelmaessige-verben.js" },
      { id: "a1-review-08", slug: "trennbare-verben", title: { de: "Trennbare Verben", ar: "الأفعال المنفصلة" }, dataFile: "a1-review/08-trennbare-verben.js" },
      { id: "a1-review-09", slug: "adjektivdeklination", title: { de: "Adjektivdeklination (Grundlagen)", ar: "تصريف الصفات (أساسيات)" }, dataFile: "a1-review/09-adjektivdeklination.js" },
      { id: "a1-review-10", slug: "modalverben", title: { de: "Modalverben", ar: "الأفعال الناقصة" }, dataFile: "a1-review/10-modalverben.js" },
      { id: "a1-review-11", slug: "pluralbildung", title: { de: "Pluralbildung", ar: "تكوين الجمع" }, dataFile: "a1-review/11-pluralbildung.js" },
      { id: "a1-review-12", slug: "perfekt", title: { de: "Das Perfekt: haben oder sein?", ar: "الماضي التام: haben أم sein؟" }, dataFile: "a1-review/12-perfekt.js" },
      { id: "a1-review-13", slug: "partizip2", title: { de: "Partizip II unregelmäßiger Verben", ar: "اسم المفعول للأفعال الشاذة" }, dataFile: "a1-review/13-partizip2.js" },
      { id: "a1-review-14", slug: "verben-akkusativ", title: { de: "Verben mit Akkusativ", ar: "أفعال تأخذ Akkusativ" }, dataFile: "a1-review/14-verben-akkusativ.js" },
      { id: "a1-review-15", slug: "verben-dativ", title: { de: "Verben mit Dativ", ar: "أفعال تأخذ Dativ" }, dataFile: "a1-review/15-verben-dativ.js" }
    ]
  },
  {
    id: "a2-1",
    title: { de: "A2.1", ar: "A2 — الجزء الأول" },
    description: "المستوى الثاني: الجزء الأول (30 درسًا)",
    description_de: "Grundstufe A2.1: Reflexivverben, Präpositionen & Nebensätze (30 Lektionen)",
    color: "#10B981",
    icon: "📗",
    lessons: [
      { id: "a2-1-01", slug: "reflexive-verben-1", title: { de: "Reflexive Verben (1)", ar: "الأفعال الانعكاسية (1)" }, dataFile: "a2-1/01-reflexive-verben-1.js" },
      { id: "a2-1-02", slug: "reflexive-verben-2", title: { de: "Reflexive Verben (2)", ar: "الأفعال الانعكاسية (2)" }, dataFile: "a2-1/02-reflexive-verben-2.js" },
      { id: "a2-1-03", slug: "genitiv-1", title: { de: "Der Genitiv (1)", ar: "حالة الإضافة (1)" }, dataFile: "a2-1/03-genitiv-1.js" },
      { id: "a2-1-04", slug: "genitiv-2", title: { de: "Der Genitiv (2)", ar: "حالة الإضافة (2)" }, dataFile: "a2-1/04-genitiv-2.js" },
      { id: "a2-1-05", slug: "praeteritum", title: { de: "Das Präteritum", ar: "الماضي البسيط" }, dataFile: "a2-1/05-praeteritum.js" },
      { id: "a2-1-06", slug: "hilfsverben-praeteritum", title: { de: "Hilfsverben im Präteritum", ar: "الأفعال المساعدة في الماضي" }, dataFile: "a2-1/06-hilfsverben-praeteritum.js" },
      { id: "a2-1-07", slug: "regelmaessige-praeteritum", title: { de: "Regelmäßige Verben im Präteritum", ar: "الأفعال المنتظمة في الماضي" }, dataFile: "a2-1/07-regelmaessige-praeteritum.js" },
      { id: "a2-1-08", slug: "tiere", title: { de: "Tiere (Wortschatz)", ar: "عالم الحيوانات (المفردات وأدوات التعريف)" }, dataFile: "a2-1/08-tiere.js" },
      { id: "a2-1-09", slug: "tagesablauf", title: { de: "Tagesablauf", ar: "الروتين اليومي والتعبير عن الوقت" }, dataFile: "a2-1/09-tagesablauf.js" },
      { id: "a2-1-10", slug: "welch", title: { de: "Fragewort: welch-", ar: "أداة الاستفهام للاختيار والتحديد (welch-)" }, dataFile: "a2-1/10-welch.js" },
      { id: "a2-1-11", slug: "wochenende", title: { de: "Wochenende", ar: "أنشطة عطلة نهاية الأسبوع والتعبير عن الماضي" }, dataFile: "a2-1/11-wochenende.js" },
      { id: "a2-1-12", slug: "demonstrativpronomen", title: { de: "Demonstrativpronomen: dies-", ar: "أسماء الإشارة الألمانية (dies- هذا / هذه)" }, dataFile: "a2-1/12-demonstrativpronomen.js" },
      { id: "a2-1-13", slug: "praepositionen-akkusativ", title: { de: "Präpositionen mit Akkusativ", ar: "حروف الجر التي تفرض حالة النصب (Akkusativ)" }, dataFile: "a2-1/13-praepositionen-akkusativ.js" },
      { id: "a2-1-14", slug: "praepositionen-dativ", title: { de: "Präpositionen mit Dativ", ar: "حروف الجر التي تفرض حالة الجر (Dativ)" }, dataFile: "a2-1/14-praepositionen-dativ.js" },
      { id: "a2-1-15", slug: "lokale-praepositionen-1", title: { de: "Lokale Präpositionen (1) / Wo bist du?", ar: "حروف الجر المكانية (1): أين أنت؟ (السكون والموقع)" }, dataFile: "a2-1/15-lokale-praepositionen-1.js" },
      { id: "a2-1-16", slug: "lokale-praepositionen-2", title: { de: "Lokale Präpositionen (2) / Wohin gehst du?", ar: "حروف الجر المكانية (2): إلى أين أنت ذاهب؟ (الاتجاه والحركة)" }, dataFile: "a2-1/16-lokale-praepositionen-2.js" },
      { id: "a2-1-17", slug: "lokale-praepositionen-test", title: { de: "Lokale Präpositionen – Test & Training", ar: "تدريب واختبار شامل على حروف الجر المكانية (Wo vs. Wohin)" }, dataFile: "a2-1/17-lokale-praepositionen-test.js" },
      { id: "a2-1-18", slug: "lokale-praepositionen-3", title: { de: "Lokale Präpositionen (3)", ar: "حروف الجر المكانية (3)" }, dataFile: "a2-1/18-lokale-praepositionen-3.js" },
      { id: "a2-1-19", slug: "hauptsatz", title: { de: "Der Hauptsatz", ar: "الجملة الرئيسية" }, dataFile: "a2-1/19-hauptsatz.js" },
      { id: "a2-1-20", slug: "konnektoren", title: { de: "Satzverbindungen / Konnektoren", ar: "أدوات الربط" }, dataFile: "a2-1/20-konnektoren.js" },
      { id: "a2-1-21", slug: "nebensatz", title: { de: "Der Nebensatz", ar: "الجملة الفرعية" }, dataFile: "a2-1/21-nebensatz.js" },
      { id: "a2-1-22", slug: "weil-da", title: { de: "weil vs. da", ar: "weil مقابل da" }, dataFile: "a2-1/22-weil-da.js" },
      { id: "a2-1-23", slug: "wortschatz-test", title: { de: "Wortschatz-Test", ar: "اختبار المفردات" }, dataFile: "a2-1/23-wortschatz-test.js" },
      { id: "a2-1-24", slug: "als-wenn", title: { de: "als vs. wenn", ar: "als مقابل wenn" }, dataFile: "a2-1/24-als-wenn.js" },
      { id: "a2-1-25", slug: "temporale-praepositionen-1", title: { de: "Temporale Präpositionen (1)", ar: "حروف الجر الزمنية (1)" }, dataFile: "a2-1/25-temporale-praepositionen-1.js" },
      { id: "a2-1-26", slug: "temporale-praepositionen-2", title: { de: "Temporale Präpositionen (2)", ar: "حروف الجر الزمنية (2)" }, dataFile: "a2-1/26-temporale-praepositionen-2.js" },
      { id: "a2-1-27", slug: "wechselpraepositionen", title: { de: "Wechselpräpositionen (Vertiefung)", ar: "حروف الجر المشتركة (دراسة معمقة وتطبيقات عملية)" }, dataFile: "a2-1/27-wechselpraepositionen.js" },
      { id: "a2-1-28", slug: "verben-praepositionen", title: { de: "Verben mit festen Präpositionen", ar: "الأفعال المقترنة بحروف جر ثابتة (Akkusativ & Dativ)" }, dataFile: "a2-1/28-verben-praepositionen.js" },
      { id: "a2-1-29", slug: "dinge-im-haus", title: { de: "Dinge im Haus & Wohnen", ar: "أشياء المنزل والأثاث ومفردات السكن" }, dataFile: "a2-1/29-dinge-im-haus.js" },
      { id: "a2-1-30", slug: "a2-pruefungswortschatz", title: { de: "A2 Prüfungswortschatz & Redemittel", ar: "المفردات والتراكيب الذهبية لامتحان Goethe A2" }, dataFile: "a2-1/30-a2-pruefungswortschatz.js" }
    ]
  },
  {
    id: "a2-2",
    title: { de: "A2.2", ar: "A2 — الجزء الثاني" },
    description: "المستوى الثاني: الجزء الثاني (12 درسًا)",
    description_de: "Aufbaustufe A2.2: Passiv, Relativsätze & Komparativ (12 Lektionen)",
    color: "#8B5CF6",
    icon: "📘",
    lessons: [
      { id: "a2-2-01", slug: "adjektive", title: { de: "Die Adjektive", ar: "الصفات" }, dataFile: "a2-2/01-adjektive.js" },
      { id: "a2-2-02", slug: "komparativ", title: { de: "Komparativ", ar: "صيغة المقارنة" }, dataFile: "a2-2/02-komparativ.js" },
      { id: "a2-2-03", slug: "superlativ", title: { de: "Superlativ", ar: "صيغة التفضيل" }, dataFile: "a2-2/03-superlativ.js" },
      { id: "a2-2-04", slug: "futur-1", title: { de: "Das Futur I", ar: "المستقبل البسيط" }, dataFile: "a2-2/04-futur-1.js" },
      { id: "a2-2-05", slug: "passiv-praesens", title: { de: "Das Passiv (Präsens)", ar: "المبني للمجهول (المضارع)" }, dataFile: "a2-2/05-passiv-praesens.js" },
      { id: "a2-2-06", slug: "passiv-praeteritum", title: { de: "Das Passiv (Präteritum)", ar: "المبني للمجهول (الماضي)" }, dataFile: "a2-2/06-passiv-praeteritum.js" },
      { id: "a2-2-07", slug: "passiv-modalverben", title: { de: "Passiv mit Modalverben", ar: "المبني للمجهول مع الأفعال الناقصة" }, dataFile: "a2-2/07-passiv-modalverben.js" },
      { id: "a2-2-08", slug: "bevor", title: { de: "Temporalsätze mit »bevor«", ar: "الجمل الزمنية مع bevor" }, dataFile: "a2-2/08-bevor.js" },
      { id: "a2-2-09", slug: "relativsaetze-1", title: { de: "Relativsätze (1)", ar: "الجمل الموصولة (1)" }, dataFile: "a2-2/09-relativsaetze-1.js" },
      { id: "a2-2-10", slug: "suffix-bar", title: { de: "Das Suffix »-bar«", ar: "اللاحقة -bar" }, dataFile: "a2-2/10-suffix-bar.js" },
      { id: "a2-2-11", slug: "relativsaetze-2", title: { de: "Relativsätze (2)", ar: "الجمل الموصولة (2)" }, dataFile: "a2-2/11-relativsaetze-2.js" },
      { id: "a2-2-12", slug: "relativsaetze-3", title: { de: "Relativsätze (3)", ar: "الجمل الموصولة (3)" }, dataFile: "a2-2/12-relativsaetze-3.js" }
    ]
  }
];

// Total lesson count
window.TOTAL_LESSONS = window.LEVELS.reduce((sum, level) => sum + level.lessons.length, 0);
