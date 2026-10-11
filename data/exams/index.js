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
        totalItems: 20,
        maxScore: 25,
        passScore: 15,
        teileCount: 4,
        icon: "🎧",
        description: "4 أجزاء (20 سؤالاً) تشمل إعلانات إذاعية، نداءات في محطات وقطارات، محادثات يومية ومقابلات.",
        sets: []
      },
      schreiben: {
        id: "schreiben",
        title: { de: "Schreiben", ar: "التعبير الكتابي" },
        durationMinutes: 30,
        totalItems: 2,
        maxScore: 25,
        passScore: 15,
        teileCount: 2,
        icon: "✍️",
        description: "مهمتان كتابيتان: كتابة رسالة قصيرة/SMS (20–30 كلمة) وإيميل شخصي أو شبه رسمي (30–40 كلمة).",
        sets: []
      },
      sprechen: {
        id: "sprechen",
        title: { de: "Sprechen", ar: "التعبير الشفهي" },
        durationMinutes: 15,
        totalItems: 3,
        maxScore: 25,
        passScore: 15,
        teileCount: 3,
        icon: "🗣️",
        description: "3 أجزاء: طرح أسئلة والإجابة عنها بواسطة بطاقات، التحدث عن النفس، والتخطيط المشترك مع الزميل.",
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
        totalItems: 30,
        maxScore: 100,
        passScore: 60,
        teileCount: 5,
        icon: "📖",
        description: "5 أجزاء (30 سؤالاً) تشمل مدونات شخصية، مقالات صحفية متعمقة، مطابقة إعلانات، تعليقات قراء، ولوائح.",
        sets: []
      },
      hoeren: {
        id: "hoeren",
        title: { de: "Hören", ar: "فهم المسموع" },
        durationMinutes: 40,
        totalItems: 30,
        maxScore: 100,
        passScore: 60,
        teileCount: 4,
        icon: "🎧",
        description: "4 أجزاء (30 سؤالاً) تشمل نصوصاً قصيرة، جولة إرشادية، حواراً يومياً، ونقاشاً إذاعياً ثلاثي الأطراف.",
        sets: []
      },
      schreiben: {
        id: "schreiben",
        title: { de: "Schreiben", ar: "التعبير الكتابي" },
        durationMinutes: 60,
        totalItems: 3,
        maxScore: 100,
        passScore: 60,
        teileCount: 3,
        icon: "✍️",
        description: "3 مهام كتابية: إيميل شخصي لصديق (80 كلمة)، منشور منتدى (80 كلمة)، وإيميل رسمي (40 كلمة).",
        sets: []
      },
      sprechen: {
        id: "sprechen",
        title: { de: "Sprechen", ar: "التعبير الشفهي" },
        durationMinutes: 15,
        totalItems: 3,
        maxScore: 100,
        passScore: 60,
        teileCount: 3,
        icon: "🗣️",
        description: "3 أجزاء: تخطيط مشترك لمشروع، عرض تقديمي متكامل من 5 شرائح، وإبداء الرأي والإجابة عن الأسئلة.",
        sets: []
      }
    }
  }
};
