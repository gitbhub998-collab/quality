const qualityMidtermQuestions = [
  {
    id: 1,
    type: "TF",
    questionEn: "Quality Control (QC) is a proactive approach.",
    questionAr: "مراقبة الجودة (QC) هي نهج استباقي.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: false },
      { textEn: "False", textAr: "خطأ", isCorrect: true }
    ],
    hintAr: "مراقبة الجودة (QC) تعتبر نهجاً تفاعلياً (Reactive) يُركز على اكتشاف العيوب بعد حدوثها."
  },
  {
    id: 2,
    type: "TF",
    questionEn: "Quality Assurance (QA) focuses on preventing defects.",
    questionAr: "ضمان الجودة (QA) يركز على منع العيوب.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: true },
      { textEn: "False", textAr: "خطأ", isCorrect: false }
    ],
    hintAr: "ضمان الجودة نهج استباقي يركز على العملية نفسها لمنع حدوث العيوب من الأساس."
  },
  {
    id: 3,
    type: "TF",
    questionEn: "In TQM, quality is the responsibility of the quality inspector alone.",
    questionAr: "في إدارة الجودة الشاملة (TQM)، الجودة هي مسؤولية مفتش الجودة وحده.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: false },
      { textEn: "False", textAr: "خطأ", isCorrect: true }
    ],
    hintAr: "إدارة الجودة الشاملة تجعل الجودة مسؤولية كل فرد داخل المؤسسة، وليس المفتش فقط."
  },
  {
    id: 4,
    type: "TF",
    questionEn: "Inspection is to detect defects.",
    questionAr: "الفحص (Inspection) هو لاكتشاف العيوب.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: true },
      { textEn: "False", textAr: "خطأ", isCorrect: false }
    ],
    hintAr: "النشاط الذي يتم لاكتشاف العيوب يُعرف بالفحص."
  },
  {
    id: 5,
    type: "TF",
    questionEn: "Testing is to detect defects.",
    questionAr: "الاختبار (Testing) هو لاكتشاف العيوب.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: false },
      { textEn: "False", textAr: "خطأ", isCorrect: true }
    ],
    hintAr: "الاختبار (Testing) يُستخدم لقياس خصائص القماش، وليس لاكتشاف العيوب."
  },
  {
    id: 6,
    type: "TF",
    questionEn: "A fabric required to have a minimum tensile strength of 500 N is acceptable if the sample shows 460 N.",
    questionAr: "القماش المطلوب أن يكون الحد الأدنى لقوة الشد له 500 نيوتن يعتبر مقبولاً إذا أظهرت العينة 460 نيوتن.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: false },
      { textEn: "False", textAr: "خطأ", isCorrect: true }
    ],
    hintAr: "بما أن الحد الأدنى المطلوب هو 500 نيوتن، فأي قيمة أقل (مثل 460) تعتبر مرفوضة لأنها لا تلبي المواصفات."
  },
  {
    id: 7,
    type: "TF",
    questionEn: "The incoming inspector inspects yarns, fabrics, and accessories upon arrival at the warehouse.",
    questionAr: "مفتش الاستلام (incoming inspector) يفحص الخيوط والأقمشة والإكسسوارات عند وصولها إلى المستودع.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: true },
      { textEn: "False", textAr: "خطأ", isCorrect: false }
    ],
    hintAr: "هذه هي الوظيفة الأساسية لمفتش الاستلام؛ التأكد من جودة المواد الخام فور وصولها."
  },
  {
    id: 8,
    type: "TF",
    questionEn: "The inline inspector performs the final audit before packing and shipping.",
    questionAr: "المفتش الداخلي (inline inspector) يقوم بالمراجعة النهائية قبل التعبئة والشحن.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: false },
      { textEn: "False", textAr: "خطأ", isCorrect: true }
    ],
    hintAr: "المفتش النهائي (Endline inspector) هو من يقوم بالمراجعة النهائية، وليس المفتش الداخلي (Inline)."
  },
  {
    id: 9,
    type: "TF",
    questionEn: "The end line audit is done after the entire process is over.",
    questionAr: "المراجعة النهائية (end line audit) تتم بعد انتهاء العملية بأكملها.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: true },
      { textEn: "False", textAr: "خطأ", isCorrect: false }
    ],
    hintAr: "من اسمها، المراجعة النهائية تُجرى كخطوة أخيرة بعد اكتمال جميع مراحل الإنتاج."
  },
  {
    id: 10,
    type: "TF",
    questionEn: "Size set samples are given importance because they are mainly asked by the buyer.",
    questionAr: "عينات المقاسات تُعطى أهمية لأن المشتري هو من يطلبها بشكل أساسي.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: true },
      { textEn: "False", textAr: "خطأ", isCorrect: false }
    ],
    hintAr: "المشتري يهتم جداً بعينات المقاسات لضمان مطابقتها لمتطلباته قبل بدء الإنتاج الكمي."
  },
  {
    id: 11,
    type: "TF",
    questionEn: "Maintenance keeps the machines reliable.",
    questionAr: "الصيانة تحافظ على موثوقية وكفاءة الماكينات.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: true },
      { textEn: "False", textAr: "خطأ", isCorrect: false }
    ],
    hintAr: "دور قسم الصيانة الأساسي هو ضمان عمل الآلات بشكل صحيح وموثوق لتجنب التوقفات أو العيوب."
  },
  {
    id: 12,
    type: "TF",
    questionEn: "Production provides leadership and resources.",
    questionAr: "الإنتاج يوفر القيادة والموارد.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: false },
      { textEn: "False", textAr: "خطأ", isCorrect: true }
    ],
    hintAr: "الإدارة (Management) هي من يوفر القيادة والموارد، وليس قسم الإنتاج."
  },
  {
    id: 13,
    type: "TF",
    questionEn: "A brainstormed cause on the Fishbone Diagram is a proven cause.",
    questionAr: "السبب المستنتج من العصف الذهني في مخطط عظم السمكة هو سبب مُثبت.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: false },
      { textEn: "False", textAr: "خطأ", isCorrect: true }
    ],
    hintAr: "الأسباب في مخطط السمكة هي مجرد احتمالات تحتاج إلى تحقيق وتأكيد (Verify RCA) لتصبح أسباباً مُثبتة."
  },
  {
    id: 14,
    type: "TF",
    questionEn: "The \"head\" of the Fishbone Diagram states the effect or problem.",
    questionAr: "«رأس» مخطط عظم السمكة يوضح الأثر أو المشكلة.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: true },
      { textEn: "False", textAr: "خطأ", isCorrect: false }
    ],
    hintAr: "دائماً ما يُمثل رأس السمكة في المخطط المشكلة الرئيسية التي يتم البحث عن أسبابها."
  },
  {
    id: 15,
    type: "TF",
    questionEn: "RCA is simply asking \"who made the mistake?\".",
    questionAr: "تحليل السبب الجذري (RCA) هو ببساطة السؤال «من ارتكب الخطأ؟».",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: false },
      { textEn: "False", textAr: "خطأ", isCorrect: true }
    ],
    hintAr: "تحليل RCA يركز على البحث المنهجي للظروف التي سمحت بحدوث المشكلة، وليس إلقاء اللوم على الأشخاص."
  },
  {
    id: 16,
    type: "MCQ",
    questionEn: "Quality Control (QC) is a ........ approach.",
    questionAr: "مراقبة الجودة (QC) هي نهج ........",
    options: [
      { textEn: "proactive", textAr: "استباقي", isCorrect: false },
      { textEn: "reactive", textAr: "تفاعلي", isCorrect: true },
      { textEn: "cultural", textAr: "ثقافي", isCorrect: false }
    ],
    hintAr: "مراقبة الجودة تركز على اكتشاف العيوب بعد أن تحدث، لذلك تُصنف كنهج تفاعلي (رد فعل)."
  },
  {
    id: 17,
    type: "MCQ",
    questionEn: "Which one is a tool of Quality Assurance (QA)?",
    questionAr: "أي مما يلي يُعد من أدوات ضمان الجودة (QA)؟",
    options: [
      { textEn: "Sorting garments", textAr: "فرز الملابس", isCorrect: false },
      { textEn: "Visual inspection", textAr: "الفحص البصري", isCorrect: false },
      { textEn: "Worker training", textAr: "تدريب العمال", isCorrect: true }
    ],
    hintAr: "ضمان الجودة يعتمد على منع الخطأ قبل حدوثه، وتدريب العمال وإجراءات التشغيل (SOPs) من أهم أدواته."
  },
  {
    id: 18,
    type: "MCQ",
    questionEn: "Which one belongs to Material Quality?",
    questionAr: "أي مما يلي ينتمي إلى جودة المواد (Material Quality)؟",
    options: [
      { textEn: "Tensile strength", textAr: "قوة الشد", isCorrect: true },
      { textEn: "Cutting", textAr: "القص", isCorrect: false },
      { textEn: "Seam alignment", textAr: "محاذاة الخياطة", isCorrect: false }
    ],
    hintAr: "قوة الشد هي خاصية فيزيائية للمادة نفسها، بينما القص والخياطة مرتبطة بجودة التصنيع (Workmanship)."
  },
  {
    id: 19,
    type: "MCQ",
    questionEn: "Who acts as the customer's representative?",
    questionAr: "من الذي يتصرف كممثل للعميل (داخل المصنع)؟",
    options: [
      { textEn: "Incoming inspector", textAr: "مفتش الاستلام", isCorrect: false },
      { textEn: "Inline inspector", textAr: "المفتش الداخلي", isCorrect: false },
      { textEn: "Endline inspector", textAr: "المفتش النهائي", isCorrect: true }
    ],
    hintAr: "المفتش النهائي هو خط الدفاع الأخير الذي يتأكد من المنتج قبل شحنه، ليكون بمثابة عين العميل."
  },
  {
    id: 20,
    type: "MCQ",
    questionEn: "The first step of the QC process is:",
    questionAr: "الخطوة الأولى في عملية مراقبة الجودة هي:",
    options: [
      { textEn: "Quality Standards / Specifications", textAr: "معايير/مواصفات الجودة", isCorrect: true },
      { textEn: "Comparison", textAr: "المقارنة", isCorrect: false },
      { textEn: "Decision", textAr: "القرار", isCorrect: false }
    ],
    hintAr: "لا يمكنك مراقبة الجودة بدون وجود معايير أو مواصفات أساسية تقارن على أساسها."
  },
  {
    id: 21,
    type: "MCQ",
    questionEn: "Which one is NOT from the 6M?",
    questionAr: "أي مما يلي لا يُعتبر من عناصر الـ 6M؟",
    options: [
      { textEn: "Management", textAr: "الإدارة", isCorrect: true },
      { textEn: "Man", textAr: "القوى العاملة", isCorrect: false },
      { textEn: "Machine", textAr: "الماكينة", isCorrect: false },
      { textEn: "Method", textAr: "الطريقة", isCorrect: false }
    ],
    hintAr: "عناصر الـ 6M في مخطط السمكة لا تتضمن الإدارة (Management)."
  },
  {
    id: 22,
    type: "MCQ",
    questionEn: "Testing is to:",
    questionAr: "الاختبار (Testing) وظيفته هي:",
    options: [
      { textEn: "detect defects", textAr: "اكتشاف العيوب", isCorrect: false },
      { textEn: "measure fabric property", textAr: "قياس خصائص القماش", isCorrect: true },
      { textEn: "write procedures", textAr: "كتابة الإجراءات", isCorrect: false }
    ],
    hintAr: "الاختبار يتم في المعمل لقياس خصائص معينة في القماش، بينما الفحص (Inspection) هو ما يكتشف العيوب."
  },
  {
    id: 23,
    type: "MCQ",
    questionEn: "The pre-production audit is mainly done at the:",
    questionAr: "المراجعة قبل الإنتاج (pre-production audit) تتم بشكل أساسي في:",
    options: [
      { textEn: "sampling stage", textAr: "مرحلة أخذ العينات", isCorrect: true },
      { textEn: "packing stage", textAr: "مرحلة التعبئة", isCorrect: false },
      { textEn: "shipping stage", textAr: "مرحلة الشحن", isCorrect: false }
    ],
    hintAr: "من اسمها 'قبل الإنتاج'، فهي تتم في مرحلة العينات (Sampling) قبل بدء الإنتاج الفعلي."
  },
  {
    id: 24,
    type: "MCQ",
    questionEn: "Which department keeps the machines reliable?",
    questionAr: "أي قسم يحافظ على موثوقية الماكينات؟",
    options: [
      { textEn: "Procurement", textAr: "المشتريات", isCorrect: false },
      { textEn: "Maintenance", textAr: "الصيانة", isCorrect: true },
      { textEn: "Human Resources", textAr: "الموارد البشرية", isCorrect: false }
    ],
    hintAr: "قسم الصيانة هو المسؤول عن إبقاء الآلات في حالة عمل جيدة وموثوقة."
  },
  {
    id: 25,
    type: "MCQ",
    questionEn: "Which department supports employee efficiency with training?",
    questionAr: "أي قسم يدعم كفاءة الموظفين من خلال التدريب؟",
    options: [
      { textEn: "Human Resources", textAr: "الموارد البشرية", isCorrect: true },
      { textEn: "Production", textAr: "الإنتاج", isCorrect: false },
      { textEn: "Quality", textAr: "الجودة", isCorrect: false }
    ],
    hintAr: "الموارد البشرية (HR) هي المسؤولة عن تدريب وتطوير كفاءة الموظفين."
  },
  {
    id: 26,
    type: "MCQ",
    questionEn: "Which tool answers the question \"What could cause it?\"",
    questionAr: "أي أداة تجيب على سؤال «ما الذي يمكن أن يسبب ذلك؟»",
    options: [
      { textEn: "Pareto", textAr: "باريتو", isCorrect: false },
      { textEn: "Define", textAr: "تحديد (التعريف)", isCorrect: false },
      { textEn: "Fishbone", textAr: "عظم السمكة", isCorrect: true }
    ],
    hintAr: "مخطط عظم السمكة (Ishikawa) يُستخدم في العصف الذهني لإيجاد جميع الأسباب المحتملة للمشكلة."
  },
  {
    id: 27,
    type: "MCQ",
    questionEn: "In the weaving mill case study, the first-pass defects increased from 3% to:",
    questionAr: "في دراسة حالة مصنع النسيج، زادت عيوب المرور الأول من 3% إلى:",
    options: [
      { textEn: "6%", textAr: "6%", isCorrect: false },
      { textEn: "9%", textAr: "9%", isCorrect: true },
      { textEn: "12%", textAr: "12%", isCorrect: false }
    ],
    hintAr: "حسب بيان المشكلة في دراسة الحالة المذكورة، ارتفع معدل العيوب إلى 9%."
  },
  {
    id: 28,
    type: "MCQ",
    questionEn: "Which one is evidence used in RCA?",
    questionAr: "أي مما يلي يُعد دليلاً يُستخدم في تحليل السبب الجذري (RCA)؟",
    options: [
      { textEn: "Maintenance logs", textAr: "سجلات الصيانة", isCorrect: true },
      { textEn: "Rumors", textAr: "الشائعات", isCorrect: false },
      { textEn: "Guessing", textAr: "التخمين", isCorrect: false }
    ],
    hintAr: "تحليل السبب الجذري يعتمد على الحقائق والبيانات الموثقة مثل سجلات الصيانة، وليس التخمين أو الشائعات."
  },
  {
    id: 29,
    type: "MCQ",
    questionEn: "Which is a good problem statement?",
    questionAr: "أيها يمثل صياغة جيدة للمشكلة (Problem statement)؟",
    options: [
      { textEn: "\"Fabric quality is poor.\"", textAr: "«جودة القماش سيئة.»", isCorrect: false },
      { textEn: "\"The first-pass defect rate on Loom Group B rose from 3% to 9% between 1 and 14 October.\"", textAr: "«ارتفع معدل عيوب المرور الأول في مجموعة الأنوال B من 3% إلى 9% بين 1 و 14 أكتوبر.»", isCorrect: true }
    ],
    hintAr: "بيان المشكلة الجيد يجب أن يكون محدداً بالأرقام والوقت والمكان بدلاً من الوصف العام."
  },
  {
    id: 30,
    type: "MCQ",
    questionEn: "Who moves between production lines to ensure operators follow the approved sample?",
    questionAr: "من الذي يتحرك بين خطوط الإنتاج للتأكد من اتباع العمال للعينة المعتمدة؟",
    options: [
      { textEn: "Endline inspector", textAr: "المفتش النهائي", isCorrect: false },
      { textEn: "Incoming inspector", textAr: "مفتش الاستلام", isCorrect: false },
      { textEn: "Inline inspector", textAr: "المفتش الداخلي", isCorrect: true }
    ],
    hintAr: "المفتش الداخلي (Inline) هو من يقوم بالتجول في صالة الإنتاج ومراقبة العمليات أثناء حدوثها."
  }
];

function toQuizData(items) {
  return items.map((item) => {
    const correctIndex = item.options.findIndex((option) => option.isCorrect === true);

    return {
      id: item.id,
      question: item.questionEn || item.statementEn,
      arabicQuestion: item.questionAr || item.statementAr,
      options: Object.fromEntries(
        item.options.map((option, index) => [String.fromCharCode(65 + index), option.textEn])
      ),
      arabicOptions: Object.fromEntries(
        item.options.map((option, index) => [String.fromCharCode(65 + index), option.textAr])
      ),
      correctAnswer: correctIndex >= 0 ? String.fromCharCode(65 + correctIndex) : "A",
      hint: "",
      arabicHint: item.hintAr || ""
    };
  });
}

const pneumaticMultipleChoiceQuiz = toQuizData(
  qualityMidtermQuestions.filter((item) => item.type === "MCQ")
);
const pneumaticTrueFalseQuiz = toQuizData(
  qualityMidtermQuestions.filter((item) => item.type === "TF")
);
