// website/data/exams/index.js — Goethe Exams Registry (A2 & B1)

window.EXAMS_REGISTRY = {
  a2: {
    id: "a2",
    title: { de: "Goethe-Zertifikat A2", ar: "شهادة غوته A2" },
    passPercentage: 60,
    maxTotalScore: 100,
    modules: {
      lesen: {
        id: "lesen",
        title: { de: "Lesen", ar: "القراءة والمطالعة" },
        durationMinutes: 30,
        totalItems: 20,
        maxScore: 25,
        passScore: 15, // 60%
        teileCount: 4,
        icon: "📖",
        description: "4 أجزاء (20 سؤالاً) لفهم الرسائل الشخصية، اللوحات الإعلانية، المقالات القصيرة، ومطابقة الإعلانات.",
        sets: [
          {
            id: "a2-lesen-set-01",
            setNumber: 1,
            title: { de: "Modellsatz 1 (Lesen)", ar: "النموذج التجريبي 1 (القراءة)" },
            level: "a2",
            module: "lesen",
            dataFile: "a2/lesen/set-01.js"
          }
        ]
      },
      hoeren: {
        id: "hoeren",
        title: { de: "Hören", ar: "فهم المسموع" },
        durationMinutes: 30,
        totalItems: 15,
        maxScore: 20,
        passScore: 12,
        teileCount: 3,
        icon: "🎧",
        description: "3 أجزاء (15 سؤالاً) تشمل إعلانات إذاعية، نداءات في محطات وقطارات، محادثات يومية ومقابلات صوتية تفاعلية.",
        sets: [
          {
            id: "a2-hoeren-set-01",
            setNumber: 1,
            title: { de: "Modellsatz 1 (Hören)", ar: "النموذج التجريبي 1 (الاستماع التفاعلي)" },
            level: "a2",
            module: "hoeren",
            dataFile: "a2/hoeren/set-01.js"
          }
        ]
      },
      schreiben: {
        id: "schreiben",
        title: { de: "Schreiben", ar: "التعبير الكتابي" },
        durationMinutes: 30,
        totalItems: 4,
        maxScore: 25,
        passScore: 15,
        teileCount: 2,
        icon: "✍️",
        description: "مهمتان كتابيتان: كتابة رسالة قصيرة/SMS (20–30 كلمة) وإيميل شخصي أو رسمي (30–45 كلمة) مع فحص فوري للنقاط الثلاث (Leitpunkte).",
        trainerRoute: "#/schreiben",
        trainerLabel: "فتح استوديو كتابة الإيميلات والرسائل (A2 Schreiben) ✍️",
        sets: []
      },
      sprechen: {
        id: "sprechen",
        title: { de: "Sprechen", ar: "التعبير الشفهي" },
        durationMinutes: 15,
        totalItems: 16,
        maxScore: 25,
        passScore: 15,
        teileCount: 3,
        icon: "🗣️",
        description: "3 أجزاء: طرح أسئلة والإجابة عنها بواسطة بطاقات (Teil 1)، التحدث عن النفس (Teil 2)، والتخطيط المشترك مع الزميل (Teil 3).",
        trainerRoute: "#/sprechen",
        trainerLabel: "فتح محاكي الامتحان الشفهي (A2 Sprechen Teil 1–3) 🗣️",
        sets: []
      }
    }
  },
  b1: {
    id: "b1",
    title: { de: "Goethe-Zertifikat B1", ar: "شهادة غوته B1" },
    passPercentage: 60,
    maxTotalScore: 100,
    modules: {
      lesen: {
        id: "lesen",
        title: { de: "Lesen", ar: "القراءة والمطالعة" },
        durationMinutes: 65,
        totalItems: 20,
        maxScore: 25,
        passScore: 15,
        teileCount: 4,
        icon: "📖",
        description: "4 أجزاء (20 سؤالاً) تشمل مدونات شخصية حول العمل والتدريب المهني، لوائح شركات، تعليقات قراء، ومطابقة إعلانات.",
        sets: [
          {
            id: "b1-lesen-set-01",
            setNumber: 1,
            title: { de: "Modellsatz 1 (B1 Lesen)", ar: "النموذج التجريبي 1 (قراءة B1)" },
            level: "b1",
            module: "lesen",
            dataFile: "b1/lesen/set-01.js"
          }
        ]
      },
      hoeren: {
        id: "hoeren",
        title: { de: "Hören", ar: "فهم المسموع" },
        durationMinutes: 40,
        totalItems: 10,
        maxScore: 20,
        passScore: 12,
        teileCount: 2,
        icon: "🎧",
        description: "جزآن (10 أسئلة) تشمل اتصالات عمل ومقابلات Ausbildung، إعلانات قطارات وبلدية، ومحاضرة حول نظام التدريب المزدوج.",
        sets: [
          {
            id: "b1-hoeren-set-01",
            setNumber: 1,
            title: { de: "Modellsatz 1 (B1 Hören)", ar: "النموذج التجريبي 1 (استماع B1)" },
            level: "b1",
            module: "hoeren",
            dataFile: "b1/hoeren/set-01.js"
          }
        ]
      },
      schreiben: {
        id: "schreiben",
        title: { de: "Schreiben", ar: "التعبير الكتابي" },
        durationMinutes: 60,
        totalItems: 8,
        maxScore: 100,
        passScore: 60,
        teileCount: 3,
        icon: "✍️",
        description: "3 مهام كتابية: إيميل شخصي لصديق (80 كلمة)، منشور منتدى لإبداء الرأي (80 كلمة)، وإيميل رسمي أو خطاب تقديم Ausbildung.",
        trainerRoute: "#/schreiben",
        trainerLabel: "فتح استوديو كتابة B1 ورسائل الـ Ausbildung ✍️",
        sets: []
      },
      sprechen: {
        id: "sprechen",
        title: { de: "Sprechen", ar: "التعبير الشفهي" },
        durationMinutes: 15,
        totalItems: 15,
        maxScore: 100,
        passScore: 60,
        teileCount: 3,
        icon: "🗣️",
        description: "3 أجزاء: التخطيط المشترك لمشروع، عرض تقديمي لموضوع، ومحاكاة مقابلة العمل والتدريب المهني (Vorstellungsgespräch).",
        trainerRoute: "#/sprechen",
        trainerLabel: "فتح محاكي المحادثة ومقابلة الـ Ausbildung (B1 Sprechen) 🗣️",
        sets: []
      }
    }
  },
  b2: {
    id: "b2",
    title: { de: "Goethe-Zertifikat B2", ar: "شهادة غوته B2 (المستوى المتقدم)" },
    passPercentage: 60,
    maxTotalScore: 100,
    modules: {
      lesen: {
        id: "lesen",
        title: { de: "Lesen", ar: "القراءة والمطالعة (B2)" },
        durationMinutes: 65,
        totalItems: 30,
        maxScore: 100,
        passScore: 60,
        teileCount: 5,
        icon: "📖",
        description: "5 أجزاء (30 سؤالاً) تشمل نقاشات واستطلاعات رأي، مقالين علميين موسعين، إكمال نصوص متسلسلة بالفراغات، مطابقة الإعلانات والخدمات، ولوائح وإرشادات مؤسسية.",
        sets: [
          {
            id: "b2-lesen-set-01",
            setNumber: 1,
            title: { de: "Modellsatz 1 (B2 Lesen)", ar: "النموذج التجريبي 1 (قراءة B2)" },
            level: "b2",
            module: "lesen",
            dataFile: "b2/lesen/set-01.js"
          }
        ]
      },
      hoeren: {
        id: "hoeren",
        title: { de: "Hören", ar: "فهم المسموع (B2)" },
        durationMinutes: 40,
        totalItems: 30,
        maxScore: 100,
        passScore: 60,
        teileCount: 4,
        icon: "🎧",
        description: "4 أجزاء (30 سؤالاً) تشمل محادثات يومية وتنسيق عمل، عروض تقديمية مع أسئلة الجمهور، نقاشات طاولة مستديرة، ومقابلات إذاعية متقدمة.",
        sets: [
          {
            id: "b2-hoeren-set-01",
            setNumber: 1,
            title: { de: "Modellsatz 1 (B2 Hören)", ar: "النموذج التجريبي 1 (استماع B2)" },
            level: "b2",
            module: "hoeren",
            dataFile: "b2/hoeren/set-01.js"
          }
        ]
      },
      schreiben: {
        id: "schreiben",
        title: { de: "Schreiben", ar: "التعبير الكتابي (B2)" },
        durationMinutes: 75,
        totalItems: 2,
        maxScore: 100,
        passScore: 60,
        teileCount: 2,
        icon: "✍️",
        description: "مهمتان كتابيتان: منشور منتدى لإبداء الرأي في موضوع مجتمعي مثير للجدل (150 كلمة)، ورسالة رسمية أو طلب تصحيح شكوى (100 كلمة).",
        trainerRoute: "#/b2-schreiben",
        trainerLabel: "فتح محاكي التعبير الكتابي (B2 Schreiben) ✍️",
        sets: []
      },
      sprechen: {
        id: "sprechen",
        title: { de: "Sprechen", ar: "التعبير الشفهي (B2)" },
        durationMinutes: 15,
        totalItems: 2,
        maxScore: 100,
        passScore: 60,
        teileCount: 2,
        icon: "🗣️",
        description: "جزآن: عرض تقديمي منظم (Vortrag 4 دقائق) متبوعاً بإجابة أسئلة الزميل، ومناقشة تفاعلية حول اقتراح وحل مشكلة (Diskussion 5 دقائق).",
        trainerRoute: "#/b2-sprechen",
        trainerLabel: "فتح محاكي الامتحان الشفهي مع الزميل الذكي (B2 Sprechen) 🗣️",
        sets: []
      }
    }
  }
};
