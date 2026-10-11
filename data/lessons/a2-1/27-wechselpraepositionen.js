// data/lessons/a2-1/27-wechselpraepositionen.js
window.LESSONS = window.LESSONS || {};
window.LESSONS["a2-1-27"] = {
  id: "a2-1-27",
  level: "a2-1",
  order: 27,
  slug: "wechselpraepositionen",
  title: {
    de: "Wechselpräpositionen (Vertiefung)",
    ar: "حروف الجر المشتركة (دراسة معمقة وتطبيقات عملية)"
  },
  tags: ["grammatik", "praepositionen", "wechselpraepositionen", "akkusativ", "dativ", "wo-wohin", "a2"],

  // 1. الهدف من الدرس
  goal: "ستتعلم في هذا الدرس إتقان حروف الجر التسعة المشتركة (Wechselpräpositionen)، والتمييز بين حركة الاتجاه (Wohin? + Akkusativ) وثبات الموقع (Wo? + Dativ)، والتحكم الكامل في أزواج الأفعال (stellen/stehen, legen/liegen, setzen/sitzen, hängen).",

  // 2. الشرح المفصل مع الجداول والقواعد
  explanation: [
    {
      type: "text",
      content: "تسمى حروف الجر التسعة التالية بـ **حروف الجر المشتركة أو المزدوجة (Wechselpräpositionen)** لأنها لا تلزم حالة إعرابية واحدة ثابتة، بل تأخذ إما **Akkusativ** أو **Dativ** بحسب المعنى المراد في الجملة:<br>• **an** (بجانب ملاصق / على حافة أو جدار)<br>• **auf** (فوق مع ملامسة السطح)<br>• **in** (في / داخل)<br>• **über** (فوق بدون ملامسة / عبر)<br>• **unter** (تحت)<br>• **vor** (أمام)<br>• **hinter** (خلف)<br>• **neben** (بجانب بدون التصاق)<br>• **zwischen** (بين شخصين أو شيئين)"
    },
    {
      type: "rule",
      content: "القاعدة الذهبية الفاصلة:<br>1. **Wohin? (إلى أين؟)** ← تدل على **حركة، انتقال، أو تغيير مكان** من نقطة أ إلى ب ← نستخدم **Akkusativ**.<br>2. **Wo? (أين؟)** ← تدل على **ثبات، سكون، أو حركة داخل نفس الحيز** دون انتقال ← نستخدم **Dativ**."
    },
    {
      type: "table",
      headers: ["حرف الجر", "المعنى الأساسي", "مثال اتجاه (Wohin? + Akkusativ)", "مثال موقع (Wo? + Dativ)"],
      rows: [
        ["an", "على (جدار/شاطئ) / بجانب ملاصق", "Ich hänge das Bild **an die Wand**.", "Das Bild hängt **an der Wand**."],
        ["auf", "على / فوق (سطح أفقي)", "Ich lege das Buch **auf den Tisch**.", "Das Buch liegt **auf dem Tisch**."],
        ["in", "في / إلى داخل", "Er geht **in das (ins) Zimmer**.", "Er ist **in dem (im) Zimmer**."],
        ["über", "فوق (دون ملامسة)", "Er hängt die Lampe **über den Tisch**.", "Die Lampe hängt **über dem Tisch**."],
        ["unter", "تحت", "Die Katze läuft **unter das Bett**.", "Die Katze schläft **unter dem Bett**."],
        ["vor", "أمام", "Er stellt das Auto **vor das Haus**.", "Das Auto steht **vor dem Haus**."],
        ["hinter", "خلف", "Sie geht **hinter den Baum**.", "Sie steht **hinter dem Baum**."],
        ["neben", "بجانب", "Er setzt sich **neben seinen Freund**.", "Er sitzt **neben seinem Freund**."],
        ["zwischen", "بين", "Ich stelle die Lampe **zwischen die Sofas**.", "Die Lampe steht **zwischen den Sofas**."]
      ]
    },
    {
      type: "text",
      content: "أزواج الأفعال الشهيرة (Positions- und Richtungsverben):<br>في الألمانية، تنقسم الأفعال المرتبطة بحروف الجر المشتركة إلى نوعين أساسيين: أفعال متعدية تدل على فعل الوضع والحركة (تأخذ مفعولاً به + Akkusativ)، وأفعال لازمة تصف الحالة والموقع بعد الوضع (تأخذ Dativ):"
    },
    {
      type: "table",
      headers: ["فعل الحركة (Wohin? + Akk)", "المعنى", "فعل الثبات (Wo? + Dat)", "المعنى", "التصريف في الماضيين"],
      rows: [
        ["stellen (منتظم)", "يضع واقفاً / رأسياً", "stehen (شاذ)", "يقف / موضوع رأسياً", "stellte / hat gestellt vs. stand / hat gestanden"],
        ["legen (منتظم)", "يضع مستلقياً / أفقياً", "liegen (شاذ)", "يستلقي / موضوع أفقياً", "legte / hat gelegt vs. lag / hat gelegen"],
        ["setzen (منتظم)", "يُجلس (نفسه أو غيره)", "sitzen (شاذ)", "يجلس", "setzte / hat gesetzt vs. saß / hat gesessen"],
        ["hängen (منتظم)", "يعلّق شيئاً", "hängen (شاذ)", "معلّق / يتدلى", "hängte / hat gehängt vs. hing / hat gehangen"],
        ["stecken (منتظم)", "يُدخل / يدس في شيء", "stecken (منتظم/شاذ)", "موجود داخل شيء", "steckte / hat gesteckt vs. steckte / hat gesteckt"]
      ]
    },
    {
      type: "rule",
      content: "أدوات الإدغام الشائعة (Kontraktionen):<br>• in + das = **ins** | in + dem = **im**<br>• an + das = **ans** | an + dem = **am**<br>• auf + das = **aufs** | hinter + dem = **hinterm**"
    }
  ],

  // 3. الأمثلة التوضيحية
  examples: [
    {
      de: "Ich **stelle** die Flasche **auf den Tisch**.",
      ar: "أنا أضع الزجاجة واقفة على الطاولة.",
      highlight: "stelle ... auf den Tisch",
      audio: true,
      note: "stellen فعل حركة (Wohin?) ← der Tisch يتحول إلى den Tisch (Akkusativ)"
    },
    {
      de: "Die Flasche **steht** schon **auf dem Tisch**.",
      ar: "الزجاجة تقف (موضوعة) بالفعل على الطاولة.",
      highlight: "steht ... auf dem Tisch",
      audio: true,
      note: "stehen فعل ثبات (Wo?) ← der Tisch يتحول إلى dem Tisch (Dativ)"
    },
    {
      de: "Er **legt** die Zeitung **auf das Sofa**.",
      ar: "هو يضع الجريدة بشكل مسطح على الأريكة.",
      highlight: "legt ... auf das Sofa",
      audio: true,
      note: "legen فعل حركة لوضع الشيء مستلقياً أفقياً ← Akkusativ (das Sofa)"
    },
    {
      de: "Die Zeitung **liegt** jetzt **auf dem Sofa**.",
      ar: "الجريدة موضوعة (مستلقية) الآن على الأريكة.",
      highlight: "liegt ... auf dem Sofa",
      audio: true,
      note: "liegen فعل ثبات وسكون ← Dativ (auf dem Sofa)"
    },
    {
      de: "Wir **hängen** das Familienfoto **an die Wand**.",
      ar: "نحن نعلّق صورة العائلة على الجدار.",
      highlight: "hängen ... an die Wand",
      audio: true,
      note: "hängen متعدٍّ يدل على الحركة ← die Wand تصبح an die Wand (Akkusativ)"
    },
    {
      de: "Das Familienfoto **hängt** bereits **an der Wand**.",
      ar: "صورة العائلة معلّقة بالفعل على الجدار.",
      highlight: "hängt ... an der Wand",
      audio: true,
      note: "hängt لازم يصف موقع الصورة ثابتاً ← Dativ (an der Wand)"
    },
    {
      de: "Der Vater **setzt** das Baby **in den Kinderwagen**.",
      ar: "الأب يُجلس الرضيع في عربة الأطفال.",
      highlight: "setzt ... in den Kinderwagen",
      audio: true,
      note: "setzen فعل حركة متعدٍّ ← Akkusativ (in den Kinderwagen)"
    },
    {
      de: "Das Baby **sitzt** ruhig **im Kinderwagen**.",
      ar: "الرضيع يجلس بهدوء في عربة الأطفال.",
      highlight: "sitzt ... im Kinderwagen",
      audio: true,
      note: "sitzen فعل سكون وجلوس ← Dativ (in dem Kinderwagen = im Kinderwagen)"
    },
    {
      de: "Er steckt den Schlüssel **in die Tasche**.",
      ar: "هو يدس المفتاح في الجيب.",
      highlight: "steckt ... in die Tasche",
      audio: true,
      note: "stecken كفعل حركة وإدخال ← Akkusativ (die Tasche)"
    },
    {
      de: "Der Schlüssel steckt schon **in der Tasche**.",
      ar: "المفتاح موجود بالفعل داخل الجيب.",
      highlight: "steckt ... in der Tasche",
      audio: true,
      note: "stecken كوصف لمكان المفتاح داخل الجيب ← Dativ (in der Tasche)"
    }
  ],

  // 4. نصائح خاصة للناطقين بالعربية
  arabicTips: [
    "في اللغة العربية نستخدم نفس حرف الجر (على الطاولة / في الغرفة) دون أي تغيير إعرابي سواء وضعت الشيء أو كان موجوداً هناك. أما في الألمانية، فالتمييز بين سؤال (Wohin? اتجاه ونقل) وسؤال (Wo? موقع واستقرار) يغير أداة التعريف بالكامل بين Akkusativ و Dativ!",
    "احفظ أزواج الأفعال بدقة: الأفعال المنتظمة (stellen, legen, setzen) كلها تدل على 'الوضع والحركة' وتأخذ مفعولاً به و Akkusativ. بينما الأفعال الشاذة (stehen, liegen, sitzen) تدل على 'الموقع والثبات' وتأخذ Dativ.",
    "فعل hängen له شكل واحد في المضارع لكنه يخفي فعلين مختلفين: إذا كان هناك مفعول به تحركه بيدك (Ich hänge das Bild) فهو منتظم ويأخذ Akkusativ. وإذا كان الشيء معلقاً بنفسه (Das Bild hängt) فهو شاذ ويأخذ Dativ!"
  ],

  // 5. ملخص سريع للحفظ
  summary: [
    "حروف الجر التسعة المشتركة: an, auf, in, über, unter, vor, hinter, neben, zwischen.",
    "السؤال بـ Wohin? (حركة أو انتقال إلى مكان جديد) ← Akkusativ دائماً.",
    "السؤال بـ Wo? (ثبات وموقع وسكون) ← Dativ دائماً.",
    "أفعال الحركة والوضع: stellen (رأسياً), legen (أفقياً), setzen (جلوساً) ← كلها + Akkusativ.",
    "أفعال الموقع والحالة: stehen (واقفاً), liegen (مستلقياً), sitzen (جالساً) ← كلها + Dativ.",
    "انتبه للإدغامات اليومية: in + das = ins | in + dem = im | an + das = ans | an + dem = am."
  ],

  // 6. مفردات الدرس
  vocabulary: [
    { de: "stellen", plural: "stellte, hat gestellt", ar: "يضع واقفاً (رأسياً)", article: "", example: "Ich stelle die Vase auf den Tisch." },
    { de: "stehen", plural: "stand, hat gestanden", ar: "يقف / موضوع رأسياً", article: "", example: "Die Vase steht auf dem Tisch." },
    { de: "legen", plural: "legte, hat gelegt", ar: "يضع مستلقياً (أفقياً)", article: "", example: "Er legt das Buch ins Regal." },
    { de: "liegen", plural: "lag, hat gelegen", ar: "يستلقي / موضوع أفقياً", article: "", example: "Das Buch liegt im Regal." },
    { de: "setzen", plural: "setzte, hat gesetzt", ar: "يُجلس (شخصاً أو نفسه)", article: "", example: "Sie setzt das Kind auf den Stuhl." },
    { de: "sitzen", plural: "saß, hat gesessen", ar: "يجلس", article: "", example: "Das Kind sitzt auf dem Stuhl." },
    { de: "hängen", plural: "hängte / hing", ar: "يعلّق / معلّق", article: "", example: "Die Lampe hängt über dem Tisch." },
    { de: "das Regal", plural: "die Regale", ar: "الرف / الخزانة المفتوحة", article: "das", example: "Er stellt die Ordner in das Regal." },
    { de: "der Teppich", plural: "die Teppiche", ar: "السجادة", article: "der", example: "Der Hund liegt auf dem Teppich." },
    { de: "die Wand", plural: "die Wände", ar: "الجدار / الحائط", article: "die", example: "Wir hängen das Bild an die Wand." }
  ],

  // 7. تمارين تفاعلية (10 تمارين متنوعة)
  exercises: [
    {
      type: "multiple-choice",
      question: "Wohin stellst du die Lampe? — Ich stelle die Lampe ___ Tisch.",
      sentence: "Ich stelle die Lampe ___ Tisch.",
      options: ["neben den", "neben dem", "neben der", "neben das"],
      correct: 0,
      answer: 0,
      explanation: "السؤال بـ Wohin وفعل stellen يدلان على حركة متعدية ← Akkusativ للمذكر (der Tisch ← den Tisch)."
    },
    {
      type: "fill-blank",
      question: "Wo liegt der Teppich? — Er liegt auf ___ Boden. (der Boden im Dativ)",
      sentence: "Er liegt auf ___ Boden.",
      answer: "dem",
      accept: ["dem"],
      explanation: "السؤال بـ Wo وفعل liegen يدلان على ثبات وموقع ← Dativ للمذكر (der Boden ← dem Boden)."
    },
    {
      type: "word-order",
      question: "رتب الجملة الألمانية: (أنا أضع الكتاب في الحقيبة)",
      words: ["Ich", "das", "lege", "Buch", "die", "in", "Tasche", "."],
      correct: "Ich lege das Buch in die Tasche .",
      answer: "Ich lege das Buch in die Tasche .",
      accept: ["Ich lege das Buch in die Tasche .", "Ich lege das Buch in die Tasche"],
      explanation: "الفاعل (Ich) + فعل الحركة في الموقع الثاني (lege) + المفعول به (das Buch) + شبه الجملة مع Akkusativ (in die Tasche)."
    },
    {
      type: "multiple-choice",
      question: "Wo steht dein Auto? — Mein Auto steht vor ___ Haus.",
      sentence: "Mein Auto steht vor ___ Haus.",
      options: ["dem", "das", "den", "des"],
      correct: 0,
      answer: 0,
      explanation: "السؤال بـ Wo وفعل stehen يدلان على موقع ساكن ← Dativ للمحايد (das Haus ← dem Haus)."
    },
    {
      type: "match",
      question: "طابق بين فعل الحركة (Akkusativ) وفعل الثبات المقابل له (Dativ):",
      pairs: [
        { left: "stellen (يضع واقفاً)", right: "stehen (يقف)" },
        { left: "legen (يضع أفقياً)", right: "liegen (يستلقي)" },
        { left: "setzen (يُجلس)", right: "sitzen (يجلس)" },
        { left: "hängen (يعلّق شيئاً)", right: "hängen (معلّق)" }
      ],
      explanation: "أزواج الأفعال الألمانية الشهيرة التي تفرق بين الحركة (Akkusativ) والثبات (Dativ)."
    },
    {
      type: "translate",
      question: "ترجم إلى الألمانية: (الصورة معلقة على الجدار.)",
      text: "الصورة معلقة على الجدار.",
      from: "الصورة معلقة على الجدار.",
      answer: "Das Bild hängt an der Wand.",
      accept: ["Das Bild hängt an der Wand.", "Das Bild hängt an der Wand"],
      explanation: "الصورة معلقة (ثبات Wo?) نستخدم فعل hängt + حرف الجر an مع Dativ لمؤنث (die Wand ← an der Wand)."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Er legt das Handy auf dem Tisch.)",
      sentence: "Er legt das Handy auf dem Tisch.",
      text: "Er legt das Handy auf dem Tisch.",
      corrected: "Er legt das Handy auf den Tisch.",
      answer: "Er legt das Handy auf den Tisch.",
      accept: ["Er legt das Handy auf den Tisch.", "Er legt das Handy auf den Tisch"],
      explanation: "فعل legen يدل على حركة اتجاهية (Wohin?)، لذلك يجب استخدام Akkusativ: auf den Tisch."
    },
    {
      type: "fill-blank",
      question: "Wir gehen heute Abend ___ Kino. (in + das = اختصار)",
      sentence: "Wir gehen heute Abend ___ Kino.",
      answer: "ins",
      accept: ["ins", "in das"],
      explanation: "فعل gehen يدل على حركة نحو مكان محايد (das Kino)، وندمج in + das في كلمة واحدة شائعة: ins."
    },
    {
      type: "multiple-choice",
      question: "Die Kinder spielen ___ Garten. (Wo? im Dativ)",
      sentence: "Die Kinder spielen ___ Garten.",
      options: ["im", "ins", "in den", "in die"],
      correct: 0,
      answer: 0,
      explanation: "الأطفال يلعبون داخل حديقة المنزل (Wo? موقع وسكون نسبي داخل المكان) ← in + dem Garten = im Garten."
    },
    {
      type: "error-correction",
      question: "صحح الخطأ: (Die Katze sitzt unter das Bett.)",
      sentence: "Die Katze sitzt unter das Bett.",
      text: "Die Katze sitzt unter das Bett.",
      corrected: "Die Katze sitzt unter dem Bett.",
      answer: "Die Katze sitzt unter dem Bett.",
      accept: ["Die Katze sitzt unter dem Bett.", "Die Katze sitzt unter dem Bett"],
      explanation: "فعل sitzen يصف وضعية جلوس وسكون (Wo?)، فيتطلب Dativ للمحايد: unter dem Bett."
    }
  ],

  // 8. الاختبار النهائي للدرس (5 أسئلة)
  quiz: [
    {
      type: "multiple-choice",
      question: "Wohin fährst du am Wochenende? — Ich fahre ___ Berge.",
      options: ["in die", "in den", "in der", "im"],
      correct: 0,
      answer: 0,
      explanation: "Wohin تدل على اتجاه وحركة إلى الجبال (الجمع die Berge في Akkusativ يبقى in die Berge)."
    },
    {
      type: "multiple-choice",
      question: "Der Schlüssel liegt schon ___ Tasche.",
      options: ["in der", "in die", "in den", "ins"],
      correct: 0,
      answer: 0,
      explanation: "فعل liegt يصف موقعاً ثابتاً (Wo?)، لذا يأخذ Dativ للمؤنث: in der Tasche."
    },
    {
      type: "multiple-choice",
      question: "Kannst du bitte die Gläser in ___ Schrank stellen?",
      options: ["den", "dem", "der", "das"],
      correct: 0,
      answer: 0,
      explanation: "فعل stellen يدل على حركة ووضع (Wohin?)، والمذكر der Schrank يصبح den Schrank في Akkusativ."
    },
    {
      type: "multiple-choice",
      question: "Die schöne Lampe hängt direkt ___ Esstisch.",
      options: ["über dem", "über den", "über das", "über die"],
      correct: 0,
      answer: 0,
      explanation: "اللامبة معلقة فوق طاولة الطعام في وضع ثابت (Wo?) ← Dativ لمذكر der Esstisch: über dem Esstisch."
    },
    {
      type: "multiple-choice",
      question: "Er setzt sich immer ___ Fenster.",
      options: ["ans", "am", "an der", "an dem"],
      correct: 0,
      answer: 0,
      explanation: "فعل sich setzen يدل على حركة اتجاهية (Wohin?) ← an + das Fenster تدمج في: ans Fenster."
    }
  ]
};
window.lessons = window.LESSONS;
