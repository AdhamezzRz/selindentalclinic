/**
 * ─────────────────────────────────────────────────────────────
 *  SELIN Dental Aesthetics — CONTENT (English + Arabic)
 * ─────────────────────────────────────────────────────────────
 *  Every text block is { en: '...', ar: '...' }.
 *  Edit freely — the site re-reads this file on restart.
 */

const doctors = [
  {
    slug: 'walid-zaki',
    name: { en: 'Dr. Walid Zaki', ar: 'د. وليد زكي' },
    initials: 'WZ',
    role: { en: 'Co-Founder', ar: 'شريك مؤسس' },
    // Replace with the doctor's real speciality.
    focus: { en: 'Fixed Prosthodontics & Aesthetic Dentistry', ar: 'التركيبات الثابتة وتجميل الأسنان' },
    credentials: { en: 'BDS · Master’s degree · Assistant Lecturer, Fixed Prosthodontics', ar: 'بكالوريوس طب الأسنان · ماجستير · مدرس مساعد التركيبات الثابتة' },
    photo: '/media/doctors/walid-zaki.webp',
    quote: {
      en: 'A beautiful smile is engineered in microns and judged in a single glance. We obsess over both.',
      ar: 'الابتسامة الجميلة تُصنع بدقة الميكرون وتُرى في نظرة واحدة. ونحن نهتم بالاثنين.',
    },
    bio: {
      en: 'Dr. Walid Zaki co-founded SELIN on a simple conviction: dentistry should feel as considered as the result looks. He leads every smile from its first digital sketch to its final polish, pairing clinical precision with an artist’s eye for proportion, light and character.',
      ar: 'شارك د. وليد زكي في تأسيس سيلين انطلاقًا من قناعة بسيطة: أن تكون تجربة علاج الأسنان مدروسة بقدر جمال نتيجتها. يتابع كل ابتسامة من أول تصميم رقمي حتى اللمسة الأخيرة، ويجمع بين الدقة الطبية وعين الفنان للتناسب والضوء والملامح.',
    },
  },
  {
    slug: 'mohammed-khaled',
    name: { en: 'Dr. Mohammed Khaled', ar: 'د. محمد خالد' },
    initials: 'MK',
    role: { en: 'Co-Founder', ar: 'شريك مؤسس' },
    focus: { en: 'Fixed Prosthodontics & Smile Rehabilitation', ar: 'التركيبات الثابتة وإعادة تأهيل الابتسامة' },
    credentials: { en: 'BDS · Master’s degree · Assistant Lecturer, Fixed Prosthodontics', ar: 'بكالوريوس طب الأسنان · ماجستير · مدرس مساعد التركيبات الثابتة' },
    photo: '/media/doctors/mohammed-khaled.webp',
    quote: {
      en: 'Function first, beauty always. When a smile works perfectly, confidence follows naturally.',
      ar: 'الوظيفة أولًا والجمال دائمًا. حين تعمل الابتسامة بكفاءة، تأتي الثقة تلقائيًا.',
    },
    bio: {
      en: 'Dr. Mohammed Khaled co-founded SELIN to build the clinic he would want to be treated in: calm, honest and meticulous. He believes in planning every case digitally before it begins, explaining every option clearly, and never rushing a result that should last for years.',
      ar: 'شارك د. محمد خالد في تأسيس سيلين ليبني العيادة التي يتمنى أن يُعالَج فيها: هادئة وصادقة ودقيقة. يؤمن بتخطيط كل حالة رقميًا قبل البدء، وشرح كل الخيارات بوضوح، وعدم التسرع في نتيجة يجب أن تدوم لسنوات.',
    },
  },
];

const treatments = [
  {
    slug: 'porcelain-veneers',
    no: '01',
    image: '/media/cases/case-03-after.jpg',
    name: { en: 'Porcelain Veneers', ar: 'فينير البورسلين' },
    kicker: { en: 'Hand-layered ceramic', ar: 'خزف مصنوع بعناية' },
    short: {
      en: 'Ultra-thin ceramic shells that reshape colour, length and symmetry with a lifelike glow.',
      ar: 'قشور خزفية رقيقة جدًا تعيد تشكيل اللون والطول والتناسق بلمعة طبيعية.',
    },
    intro: {
      en: 'Veneers are wafer-thin layers of porcelain bonded to the front of the teeth. Designed around your face rather than a catalogue, they correct discolouration, chips, gaps and uneven edges, giving you a smile that looks like it was always yours.',
      ar: 'الفينير طبقات رقيقة جدًا من البورسلين تُلصق على الواجهة الأمامية للأسنان. تُصمم حسب ملامح وجهك لا حسب كتالوج، فتعالج التصبغات والكسور والفراغات والحواف غير المتساوية، لتمنحك ابتسامة تبدو وكأنها لك منذ البداية.',
    },
    benefits: [
      { en: 'Stain-resistant, light-reflecting porcelain', ar: 'بورسلين مقاوم للتصبغ ويعكس الضوء طبيعيًا' },
      { en: 'Minimal, conservative preparation', ar: 'تحضير بسيط يحافظ على السن' },
      { en: 'Shape and shade designed for your face', ar: 'شكل ولون مصممان لملامح وجهك' },
      { en: 'Preview your smile before committing', ar: 'معاينة ابتسامتك قبل البدء' },
    ],
    duration: { en: 'Typically 2–3 visits', ar: 'عادةً من 2 إلى 3 زيارات' },
    steps: [
      { en: 'Consultation, photos & digital scan', ar: 'استشارة وتصوير ومسح رقمي' },
      { en: 'Digital smile design & trial mock-up', ar: 'تصميم رقمي للابتسامة وتجربة نموذج مبدئي' },
      { en: 'Gentle preparation & temporaries', ar: 'تحضير لطيف وتركيب مؤقت' },
      { en: 'Bonding, polishing & final check', ar: 'التثبيت والتلميع والمراجعة النهائية' },
    ],
    faq: [
      {
        q: { en: 'Do veneers look natural?', ar: 'هل يبدو الفينير طبيعيًا؟' },
        a: {
          en: 'Yes. Modern porcelain is translucent like enamel. We design shape, texture and shade to suit your features, so the result reads as healthy, not artificial.',
          ar: 'نعم. البورسلين الحديث شفاف مثل المينا. نصمم الشكل والملمس واللون بما يناسب ملامحك لتبدو النتيجة صحية وغير مصطنعة.',
        },
      },
      {
        q: { en: 'How long do they last?', ar: 'كم يدوم الفينير؟' },
        a: {
          en: 'With good home care and regular check-ups, porcelain veneers are a long-term restoration. Your dentist will advise on the expected lifespan in your case.',
          ar: 'مع العناية الجيدة والمتابعة المنتظمة يعد الفينير حلًا طويل الأمد، وسيوضح لك الطبيب العمر المتوقع في حالتك.',
        },
      },
    ],
  },
  {
    slug: 'digital-smile-design',
    no: '02',
    image: '/media/cases/case-07-after.jpg',
    name: { en: 'Digital Smile Design', ar: 'تصميم الابتسامة الرقمي' },
    kicker: { en: 'See it before we start', ar: 'شاهد النتيجة قبل البدء' },
    short: {
      en: 'Your future smile, designed digitally from your photos and scans, then tested in your mouth.',
      ar: 'ابتسامتك المستقبلية مصممة رقميًا من صورك ومسحك الرقمي، ثم تُجرَّب في فمك.',
    },
    intro: {
      en: 'Digital Smile Design is where every SELIN smile begins. Using facial photography, video and 3D scans, we map your lips, face and proportions, design the ideal tooth shapes, and let you try a physical mock-up before any treatment.',
      ar: 'تبدأ كل ابتسامة في سيلين بالتصميم الرقمي. باستخدام صور الوجه والفيديو والمسح ثلاثي الأبعاد نحلل الشفاه والوجه والتناسق، ونصمم أشكال الأسنان المثالية، ثم تجرب نموذجًا فعليًا قبل أي علاج.',
    },
    benefits: [
      { en: 'Facially driven, proportion-perfect design', ar: 'تصميم ينطلق من ملامح الوجه بتناسق دقيق' },
      { en: 'Try-in mock-up: approve before treatment', ar: 'نموذج تجريبي: توافق قبل العلاج' },
      { en: 'Predictable, precise results', ar: 'نتائج دقيقة ويمكن توقعها' },
      { en: 'Clear plan, timeline & options', ar: 'خطة وجدول زمني وخيارات واضحة' },
    ],
    duration: { en: '1–2 planning visits', ar: 'زيارة أو زيارتان للتخطيط' },
    steps: [
      { en: 'Facial photos, video & intraoral scan', ar: 'صور ووجه وفيديو ومسح داخل الفم' },
      { en: 'Smile analysis & digital design', ar: 'تحليل الابتسامة وتصميمها رقميًا' },
      { en: 'Mock-up try-in & your feedback', ar: 'تجربة النموذج وأخذ رأيك' },
      { en: 'Final plan for veneers, aligners or crowns', ar: 'الخطة النهائية للفينير أو التقويم أو التيجان' },
    ],
    faq: [
      {
        q: { en: 'Is the design binding?', ar: 'هل التصميم ملزم؟' },
        a: {
          en: 'No. The design is a conversation. We refine it with you until it feels right, and nothing is done without your approval.',
          ar: 'لا. التصميم حوار مشترك نعدله معك حتى تشعر بالرضا، ولا نبدأ أي خطوة دون موافقتك.',
        },
      },
    ],
  },
  {
    slug: 'dental-implants',
    no: '03',
    image: '/media/tour/t10.jpg',
    name: { en: 'Dental Implants', ar: 'زراعة الأسنان' },
    kicker: { en: 'Engineered to belong', ar: 'هندسة تندمج معك' },
    short: {
      en: 'Titanium roots and ceramic crowns that replace missing teeth with natural strength and beauty.',
      ar: 'جذور من التيتانيوم وتيجان خزفية تعوض الأسنان المفقودة بقوة وجمال طبيعيين.',
    },
    intro: {
      en: 'An implant replaces the root of a missing tooth with a biocompatible titanium post that bonds with the bone, topped with a custom crown. It restores chewing comfort, protects the jaw and neighbouring teeth, and blends invisibly into your smile.',
      ar: 'تعوض الزرعة جذر السن المفقود بدعامة من التيتانيوم المتوافق حيويًا تلتحم بالعظم، ويُركّب فوقها تاج مخصص. تعيد راحة المضغ وتحمي عظم الفك والأسنان المجاورة وتندمج مع ابتسامتك دون أن تُلاحظ.',
    },
    benefits: [
      { en: 'Feels and functions like a natural tooth', ar: 'تُحس وتعمل مثل السن الطبيعي' },
      { en: 'No need to grind neighbouring teeth', ar: 'لا حاجة لبرد الأسنان المجاورة' },
      { en: 'Helps preserve jaw bone', ar: 'تساعد في الحفاظ على عظم الفك' },
      { en: 'Guided, digitally planned placement', ar: 'تركيب موجَّه ومخطط رقميًا' },
    ],
    duration: { en: 'Usually 3–6 months including healing', ar: 'عادةً من 3 إلى 6 أشهر شاملة فترة الالتئام' },
    steps: [
      { en: '3D imaging & digital implant planning', ar: 'تصوير ثلاثي الأبعاد وتخطيط رقمي للزرعة' },
      { en: 'Comfortable implant placement', ar: 'تركيب الزرعة براحة تامة' },
      { en: 'Healing & integration with bone', ar: 'فترة الالتئام والاندماج مع العظم' },
      { en: 'Custom ceramic crown fitted', ar: 'تركيب التاج الخزفي المخصص' },
    ],
    faq: [
      {
        q: { en: 'Does implant surgery hurt?', ar: 'هل جراحة الزرع مؤلمة؟' },
        a: {
          en: 'The procedure is done under local anaesthesia and most patients describe it as more comfortable than expected. We will guide you through aftercare step by step.',
          ar: 'تُجرى تحت التخدير الموضعي ويصفها أغلب المرضى بأنها أريح مما توقعوا، وسنرشدك في العناية بعدها خطوة بخطوة.',
        },
      },
    ],
  },
  {
    slug: 'teeth-whitening',
    no: '04',
    image: '/media/cases/case-09-after.jpg',
    name: { en: 'Teeth Whitening', ar: 'تبييض الأسنان' },
    kicker: { en: 'Brightness, refined', ar: 'إشراقة مدروسة' },
    short: {
      en: 'Professional whitening that lifts stains safely for a brighter, fresher, still-natural smile.',
      ar: 'تبييض احترافي يزيل التصبغات بأمان لابتسامة أكثر إشراقًا وطبيعية.',
    },
    intro: {
      en: 'Coffee, tea and time dull enamel. Professional whitening uses clinically controlled gels to lift deep stains safely, with protection for gums and sensitivity care built into every session.',
      ar: 'القهوة والشاي والوقت تُبهت لون المينا. يستخدم التبييض الاحترافي جلًا تحت إشراف طبي لإزالة التصبغات العميقة بأمان، مع حماية اللثة والعناية بالحساسية في كل جلسة.',
    },
    benefits: [
      { en: 'Visible results in one visit', ar: 'نتيجة واضحة من أول جلسة' },
      { en: 'Gum protection & sensitivity care', ar: 'حماية اللثة والعناية بالحساسية' },
      { en: 'Shade goal agreed in advance', ar: 'تحديد درجة اللون المستهدفة مسبقًا' },
      { en: 'Take-home maintenance options', ar: 'خيارات للمحافظة على النتيجة في المنزل' },
    ],
    duration: { en: 'About 60–90 minutes', ar: 'حوالي 60 إلى 90 دقيقة' },
    steps: [
      { en: 'Shade check & cleaning', ar: 'قياس اللون وتنظيف الأسنان' },
      { en: 'Gum protection applied', ar: 'وضع حماية للثة' },
      { en: 'Whitening gel cycles', ar: 'جلسات جل التبييض' },
      { en: 'Desensitising & aftercare plan', ar: 'علاج الحساسية وخطة العناية' },
    ],
    faq: [
      {
        q: { en: 'Will whitening damage my enamel?', ar: 'هل يضر التبييض المينا؟' },
        a: {
          en: 'Professionally supervised whitening is considered safe for enamel. Temporary sensitivity can occur and is managed with desensitising care.',
          ar: 'التبييض تحت الإشراف الطبي يعد آمنًا على المينا، وقد تظهر حساسية مؤقتة نتعامل معها بعلاج مخصص.',
        },
      },
    ],
  },
  {
    slug: 'clear-aligners',
    no: '05',
    image: '/media/tour/t11.jpg',
    name: { en: 'Clear Aligners', ar: 'التقويم الشفاف' },
    kicker: { en: 'Invisible orthodontics', ar: 'تقويم غير مرئي' },
    short: {
      en: 'Nearly invisible, removable trays that straighten teeth gradually, with every step planned in 3D.',
      ar: 'قوالب شفافة تقريبًا وقابلة للإزالة تعدل الأسنان تدريجيًا، بخطة ثلاثية الأبعاد لكل خطوة.',
    },
    intro: {
      en: 'Clear aligners move teeth with a sequence of custom, transparent trays. You can see the predicted movement of every tooth before you begin, remove them to eat, and carry on with life without metal.',
      ar: 'يحرك التقويم الشفاف الأسنان بسلسلة من القوالب الشفافة المخصصة. يمكنك رؤية الحركة المتوقعة لكل سن قبل البدء، وإزالته أثناء الأكل، ومتابعة حياتك دون أسلاك معدنية.',
    },
    benefits: [
      { en: 'Virtually invisible', ar: 'شبه غير مرئي' },
      { en: 'Removable for meals & photos', ar: 'يُزال أثناء الأكل والتصوير' },
      { en: '3D preview of the final result', ar: 'معاينة ثلاثية الأبعاد للنتيجة' },
      { en: 'Fewer emergency visits than braces', ar: 'زيارات طارئة أقل من التقويم التقليدي' },
    ],
    duration: { en: 'Varies, often 6–18 months', ar: 'تختلف، غالبًا من 6 إلى 18 شهرًا' },
    steps: [
      { en: 'Digital scan, no messy impressions', ar: 'مسح رقمي بدون طبعات مزعجة' },
      { en: '3D movement plan & preview', ar: 'خطة حركة ثلاثية الأبعاد ومعاينة' },
      { en: 'Wear a new tray set every 1–2 weeks', ar: 'قالب جديد كل أسبوع إلى أسبوعين' },
      { en: 'Retainers to keep the result', ar: 'مثبتات للحفاظ على النتيجة' },
    ],
    faq: [
      {
        q: { en: 'How many hours a day should I wear them?', ar: 'كم ساعة يجب ارتداؤه يوميًا؟' },
        a: {
          en: 'Usually around 20–22 hours a day. They come out only to eat, drink anything other than water, and clean your teeth.',
          ar: 'عادةً من 20 إلى 22 ساعة يوميًا، ويُزال فقط للأكل وشرب غير الماء وتنظيف الأسنان.',
        },
      },
    ],
  },
  {
    slug: 'orthodontics',
    no: '06',
    image: '/media/cases/case-04-after.jpg',
    name: { en: 'Orthodontics', ar: 'تقويم الأسنان' },
    kicker: { en: 'Alignment, perfected', ar: 'محاذاة مثالية' },
    short: {
      en: 'Discreet ceramic and modern braces for complex alignment, bite correction and lasting stability.',
      ar: 'تقويم خزفي وحديث وغير ملحوظ لحالات المحاذاة المعقدة وتصحيح الإطباق وثبات النتيجة.',
    },
    intro: {
      en: 'For crowding, spacing and bite problems that need precise control, modern braces remain the gold standard. Tooth-coloured ceramic brackets keep treatment discreet while the plan restores harmony to both smile and bite.',
      ar: 'لحالات التزاحم والفراغات ومشاكل الإطباق التي تحتاج تحكمًا دقيقًا، يبقى التقويم الحديث هو المعيار الذهبي. الحاصرات الخزفية بلون الأسنان تجعل العلاج غير ملحوظ بينما تعيد الخطة التناسق للابتسامة والإطباق.',
    },
    benefits: [
      { en: 'Tooth-coloured, discreet brackets', ar: 'حاصرات بلون الأسنان غير ملحوظة' },
      { en: 'Precise control for complex cases', ar: 'تحكم دقيق للحالات المعقدة' },
      { en: 'Improves bite and long-term health', ar: 'يحسن الإطباق وصحة الفم على المدى الطويل' },
      { en: 'Suitable for teens and adults', ar: 'مناسب للمراهقين والبالغين' },
    ],
    duration: { en: 'Varies, often 12–24 months', ar: 'تختلف، غالبًا من 12 إلى 24 شهرًا' },
    steps: [
      { en: 'Records, X-rays & bite analysis', ar: 'سجلات وأشعة وتحليل الإطباق' },
      { en: 'Bracket placement', ar: 'تركيب الحاصرات' },
      { en: 'Regular adjustment visits', ar: 'زيارات منتظمة للضبط' },
      { en: 'Removal & retention', ar: 'الإزالة والتثبيت' },
    ],
    faq: [
      {
        q: { en: 'Braces or aligners — which is right for me?', ar: 'التقويم التقليدي أم الشفاف؟ أيهما يناسبني؟' },
        a: {
          en: 'Both are excellent. The right choice depends on your bite, the movements needed and your lifestyle. We will show you both options at consultation.',
          ar: 'كلاهما ممتاز، والاختيار يعتمد على الإطباق والحركات المطلوبة وأسلوب حياتك، وسنعرض عليك الخيارين في الاستشارة.',
        },
      },
    ],
  },
  {
    slug: 'zirconia-crowns',
    no: '07',
    image: '/media/cases/case-08-after.jpg',
    name: { en: 'Zirconia Crowns & Bridges', ar: 'تيجان وجسور الزركونيا' },
    kicker: { en: 'Strength meets translucency', ar: 'قوة وشفافية معًا' },
    short: {
      en: 'Metal-free crowns that protect weakened teeth with exceptional strength and natural translucency.',
      ar: 'تيجان خالية من المعادن تحمي الأسنان الضعيفة بقوة استثنائية وشفافية طبيعية.',
    },
    intro: {
      en: 'Zirconia is one of the strongest dental ceramics available, and today it can be layered for beautiful translucency. Crowns restore broken, heavily filled or root-treated teeth; bridges replace missing teeth by anchoring to their neighbours.',
      ar: 'الزركونيا من أقوى أنواع الخزف المستخدمة في طب الأسنان، ويمكن الآن تشكيلها بطبقات لشفافية جميلة. تعيد التيجان بناء الأسنان المكسورة أو كثيرة الحشوات أو المعالجة عصبيًا، بينما تعوض الجسور الأسنان المفقودة بالارتكاز على الأسنان المجاورة.',
    },
    benefits: [
      { en: 'Metal-free: no grey gum line', ar: 'بدون معدن: لا خط رمادي عند اللثة' },
      { en: 'High fracture resistance', ar: 'مقاومة عالية للكسر' },
      { en: 'Biocompatible and gum-friendly', ar: 'متوافقة حيويًا ومريحة للثة' },
      { en: 'Precisely milled from digital scans', ar: 'مصنعة بدقة من المسح الرقمي' },
    ],
    duration: { en: 'Typically 2 visits', ar: 'عادةً زيارتان' },
    steps: [
      { en: 'Assessment & tooth preparation', ar: 'التقييم وتحضير السن' },
      { en: 'Digital scan & temporary crown', ar: 'مسح رقمي وتاج مؤقت' },
      { en: 'Crown crafted & shade-matched', ar: 'تصنيع التاج ومطابقة اللون' },
      { en: 'Final fit & bite adjustment', ar: 'التركيب النهائي وضبط الإطباق' },
    ],
    faq: [
      {
        q: { en: 'Will a crown match my other teeth?', ar: 'هل سيتطابق التاج مع باقي أسناني؟' },
        a: {
          en: 'Yes. Each crown is shade-matched and characterised to blend in with your natural teeth.',
          ar: 'نعم. نطابق لون كل تاج ونضيف تفاصيله ليندمج مع أسنانك الطبيعية.',
        },
      },
    ],
  },
  {
    slug: 'preventive-care',
    no: '08',
    image: '/media/tour/t08.jpg',
    name: { en: 'Preventive & General Care', ar: 'العناية الوقائية والعامة' },
    kicker: { en: 'The foundation of every smile', ar: 'أساس كل ابتسامة' },
    short: {
      en: 'Check-ups, hygiene, aesthetic fillings, root canal and gum care to keep your smile healthy.',
      ar: 'فحوصات وتنظيف وحشوات تجميلية وعلاج عصب وعناية باللثة لابتسامة صحية دائمًا.',
    },
    intro: {
      en: 'Beautiful dentistry is built on healthy foundations. From professional cleaning and tooth-coloured fillings to comfortable root canal treatment and gum care, our general dentistry keeps your teeth strong for a lifetime.',
      ar: 'طب الأسنان التجميلي يُبنى على أساس صحي. من التنظيف الاحترافي والحشوات بلون الأسنان إلى علاج العصب المريح والعناية باللثة، تحافظ خدماتنا العامة على قوة أسنانك مدى الحياة.',
    },
    benefits: [
      { en: 'Professional scaling & polishing', ar: 'تنظيف وتلميع احترافي' },
      { en: 'Tooth-coloured composite fillings', ar: 'حشوات تجميلية بلون الأسنان' },
      { en: 'Comfortable root canal treatment', ar: 'علاج عصب مريح' },
      { en: 'Gum health assessment', ar: 'تقييم صحة اللثة' },
    ],
    duration: { en: 'Most visits under an hour', ar: 'أغلب الزيارات أقل من ساعة' },
    steps: [
      { en: 'Full examination', ar: 'فحص شامل' },
      { en: 'Cleaning & hygiene guidance', ar: 'تنظيف وإرشادات العناية' },
      { en: 'Treatment of any concerns', ar: 'علاج أي مشكلة' },
      { en: 'Personal recall schedule', ar: 'جدول متابعة شخصي' },
    ],
    faq: [
      {
        q: { en: 'How often should I have a check-up?', ar: 'كم مرة يجب أن أجري فحصًا؟' },
        a: {
          en: 'Most people benefit from a check-up and cleaning every six months; we will tailor the interval to you.',
          ar: 'يستفيد أغلب الناس من الفحص والتنظيف كل ستة أشهر، وسنحدد الموعد المناسب لك.',
        },
      },
    ],
  },
];

/**
 * CASES — real SÉLIN patient results (before / after).
 * Photos: public/media/cases/case-XX-before.jpg / case-XX-after.jpg
 * (1600×1200, cropped to the smile only — no names, no eyes).
 *
 * To add a case: drop two aligned photos in public/media/cases/ and copy an
 * entry below. `view` is 'smile' (natural smile) or 'retracted' (close-up).
 */
const VIEW = {
  smile: { en: 'Smile view', ar: 'صورة الابتسامة' },
  retracted: { en: 'Close-up view', ar: 'صورة مقربة' },
  face: { en: 'Full-face view', ar: 'صورة الوجه' },
};
// Full-face pairs: shown in the Cases gallery only (before photos stay inside the gallery).
const f = (n, patient, title, note) => ({
  id: `face-${n}`, patient, view: 'face', viewLabel: VIEW.face, treatment: 'porcelain-veneers',
  title, note, before: `/media/cases/face-${n}-before.jpg`, after: `/media/cases/face-${n}-after.jpg`,
});
const c = (n, patient, view, title, note, treatment = 'porcelain-veneers') => ({
  id: `case-${n}`,
  patient,
  view,
  viewLabel: VIEW[view],
  treatment,
  title,
  note,
  before: `/media/cases/case-${n}-before.jpg`,
  after: `/media/cases/case-${n}-after.jpg`,
});

const cases = [
  f('01', 'A', { en: 'A confident new smile', ar: 'ابتسامة جديدة واثقة' },
    { en: 'Crowded, uneven teeth → a bright, harmonious smile', ar: 'أسنان متزاحمة وغير متساوية ← ابتسامة مشرقة ومتناغمة' }),
  f('02', 'B', { en: 'Radiant and natural', ar: 'إشراقة طبيعية' },
    { en: 'Crowding and stains → straight, luminous veneers', ar: 'تزاحم وتصبغات ← فينير مستقيم ومتوهج' }),
  f('03', 'C', { en: 'A fuller, brighter smile', ar: 'ابتسامة أكثر امتلاءً وإشراقًا' },
    { en: 'Yellowed, uneven teeth → an even, glowing smile', ar: 'أسنان مصفرة وغير متساوية ← ابتسامة متساوية ومتوهجة' }),
  f('04', 'D', { en: 'Balance restored', ar: 'توازن مستعاد' },
    { en: 'Short, worn teeth → longer, balanced veneers', ar: 'أسنان قصيرة ومتآكلة ← فينير أطول ومتوازن' }),
  c('01', 'A', 'smile',
    { en: 'Full smile makeover', ar: 'تجميل كامل للابتسامة' },
    { en: 'Crowded, uneven teeth → an even, luminous smile', ar: 'أسنان متزاحمة وغير متساوية ← ابتسامة متناسقة ومشرقة' }),
  c('03', 'B', 'smile',
    { en: 'From crowded to confident', ar: 'من التزاحم إلى الثقة' },
    { en: 'Crowding and deep stains → straight, bright veneers', ar: 'تزاحم وتصبغات عميقة ← فينير مستقيم ومشرق' }),
  c('05', 'C', 'smile',
    { en: 'A brighter, fuller smile', ar: 'ابتسامة أكثر إشراقًا وامتلاءً' },
    { en: 'Yellowed, uneven teeth → a full, harmonious smile', ar: 'أسنان مصفرة وغير متساوية ← ابتسامة ممتلئة ومتناغمة' }),
  c('07', 'D', 'smile',
    { en: 'Worn teeth, length restored', ar: 'أسنان متآكلة استعادت طولها' },
    { en: 'Short, worn front teeth → longer, balanced veneers', ar: 'أسنان أمامية قصيرة ومتآكلة ← فينير أطول ومتوازن' }),
  c('09', 'E', 'smile',
    { en: 'Natural brilliance', ar: 'إشراقة طبيعية' },
    { en: 'Irregular, yellowed teeth → even, natural-looking veneers', ar: 'أسنان غير منتظمة ومصفرة ← فينير متناسق وطبيعي المظهر' }),
  c('02', 'A', 'retracted',
    { en: 'Both arches, redesigned', ar: 'إعادة تصميم الفكين' },
    { en: 'Misaligned, stained teeth → uniform veneers on both arches', ar: 'أسنان غير مصطفة ومتصبغة ← فينير متناسق للفكين' }),
  c('04', 'B', 'retracted',
    { en: 'Gap closed, crowding corrected', ar: 'إغلاق الفراغ وعلاج التزاحم' },
    { en: 'Central gap and crowding → closed, aligned veneers', ar: 'فراغ أمامي وتزاحم ← فينير مصطف بدون فراغات' }),
  c('06', 'C', 'retracted',
    { en: 'Upper & lower transformation', ar: 'تحول كامل للفكين العلوي والسفلي' },
    { en: 'Yellow, crowded arches → bright, even veneers', ar: 'أسنان صفراء ومتزاحمة ← فينير مشرق ومتساوٍ' }),
  c('08', 'D', 'retracted',
    { en: 'Full-mouth rehabilitation', ar: 'إعادة تأهيل كامل للفم' },
    { en: 'Worn, crowded teeth → full restorations on both arches', ar: 'أسنان متآكلة ومتزاحمة ← ترميم كامل للفكين' }),
];

const journey = [
  {
    no: '01',
    title: { en: 'Conversation', ar: 'الحوار' },
    text: {
      en: 'We listen first. Your story, your concerns, the smile you picture, and a full examination with digital records.',
      ar: 'نستمع أولًا: قصتك ومخاوفك والابتسامة التي تتخيلها، مع فحص شامل وسجلات رقمية.',
    },
  },
  {
    no: '02',
    title: { en: 'Design', ar: 'التصميم' },
    text: {
      en: 'Your smile is designed digitally around your face, then previewed so you can see and feel it before we begin.',
      ar: 'نصمم ابتسامتك رقميًا حول ملامح وجهك، ثم نعرضها لك لترى النتيجة وتشعر بها قبل البدء.',
    },
  },
  {
    no: '03',
    title: { en: 'Craft', ar: 'الصنعة' },
    text: {
      en: 'Treatment is carried out calmly and precisely in our private suites, with every detail explained along the way.',
      ar: 'ننفذ العلاج بهدوء ودقة في غرفنا الخاصة، ونشرح لك كل تفصيلة خلال الرحلة.',
    },
  },
  {
    no: '04',
    title: { en: 'Reveal', ar: 'الإطلالة' },
    text: {
      en: 'The moment you see yourself smile, followed by aftercare and check-ups that protect your result for years.',
      ar: 'لحظة رؤية ابتسامتك الجديدة، تليها عناية ومتابعة تحافظ على النتيجة لسنوات.',
    },
  },
];

const tour = [
  { src: '/media/tour/t01.jpg', label: { en: 'Arrival', ar: 'الاستقبال' } },
  { src: '/media/tour/t02.jpg', label: { en: 'The coffee arch', ar: 'ركن القهوة' } },
  { src: '/media/tour/t04.jpg', label: { en: 'The lounge', ar: 'صالة الانتظار' } },
  { src: '/media/tour/t03.jpg', label: { en: 'Details matter', ar: 'التفاصيل تهمنا' } },
  { src: '/media/tour/t07.jpg', label: { en: 'Clinic 1', ar: 'العيادة 1' } },
  { src: '/media/tour/t09.jpg', label: { en: 'Daylight suites', ar: 'غرف مضاءة بالشمس' } },
  { src: '/media/tour/t13.jpg', label: { en: 'Clinic 2', ar: 'العيادة 2' } },
  { src: '/media/tour/t17.jpg', label: { en: 'A view to unwind', ar: 'إطلالة للاسترخاء' } },
  { src: '/media/tour/t16.jpg', label: { en: 'Precision tools', ar: 'أدوات دقيقة' } },
];

const faq = [
  {
    q: { en: 'How do I book my first consultation?', ar: 'كيف أحجز أول استشارة؟' },
    a: {
      en: 'Use the booking form on this site, or message us on WhatsApp or Instagram. Our team will confirm a time that suits you.',
      ar: 'استخدم نموذج الحجز في الموقع، أو راسلنا عبر واتساب أو إنستجرام، وسيؤكد فريقنا الموعد المناسب لك.',
    },
  },
  {
    q: { en: 'Can I see my new smile before treatment?', ar: 'هل يمكنني رؤية ابتسامتي الجديدة قبل العلاج؟' },
    a: {
      en: 'Yes. With Digital Smile Design we create your smile on screen and, for many treatments, as a trial mock-up you can wear in the chair.',
      ar: 'نعم. بالتصميم الرقمي للابتسامة نعرض ابتسامتك على الشاشة، وفي كثير من العلاجات نصنع نموذجًا تجريبيًا تجربه في فمك.',
    },
  },
  {
    q: { en: 'Is treatment painful?', ar: 'هل العلاج مؤلم؟' },
    a: {
      en: 'Comfort is part of our craft. We use modern anaesthesia, gentle techniques and take breaks whenever you need.',
      ar: 'الراحة جزء من عملنا. نستخدم تخديرًا حديثًا وتقنيات لطيفة ونأخذ استراحة متى احتجت.',
    },
  },
  {
    q: { en: 'Do you offer payment plans?', ar: 'هل تتوفر خطط دفع؟' },
    a: {
      en: 'Ask us during your consultation. We will give you a clear written plan and cost before anything begins.',
      ar: 'اسألنا خلال الاستشارة، وسنقدم لك خطة وتكلفة مكتوبة وواضحة قبل البدء بأي شيء.',
    },
  },
];

/**
 * REVIEWS — paste REAL patient reviews here (e.g. copied from Google with
 * the patient's permission). Never invent reviews. Example:
 *   { name: 'Sara M.', rating: 5, date: '2026-10-02', source: 'Google',
 *     text: { en: 'Amazing experience…', ar: 'تجربة رائعة…' } },
 * The reviews section appears on the home page as soon as one exists.
 */
const reviews = [];

/**
 * SMILES — "after" portraits of real guests (shown on the home page).
 * Drop 4:5 portraits (1200×1500) into public/media/smiles/ — they appear automatically.
 */
const smiles = (() => {
  try {
    const dir = require('path').join(__dirname, '..', 'public', 'media', 'smiles');
    return require('fs').readdirSync(dir).filter((f) => /\.(jpe?g|webp|png)$/i.test(f)).sort().map((f) => `/media/smiles/${f}`);
  } catch (e) {
    return [];
  }
})();

/**
 * GUEST STORIES — video testimonials (real guests, shared by the clinic).
 * Chapters: `t` = start time in seconds. Quotes are faithful, lightly edited
 * renderings of what the guest says (original: Egyptian Arabic).
 */
const stories = [
  {
    id: 'story-02',
    name: { en: 'Nour', ar: 'نور' },
    tab: { en: 'Flew in from the US', ar: 'جت من أمريكا' },
    lang: 'en',
    video: '/media/stories/story-02.mp4',
    poster: '/media/stories/story-02.jpg',
    duration: 90,
    uploadDate: '2026-11-22',
    treatment: 'porcelain-veneers',
    headline: { en: '“Transformed 180 degrees.”', ar: '«اتغيّرت 180 درجة.»' },
    guest: { en: 'Nour · Porcelain veneers', ar: 'نور · فينير البورسلين' },
    chapters: [
      {
        t: 1.5,
        label: { en: 'From the US', ar: 'من أمريكا' },
        quote: {
          en: 'I travelled all the way from the United States, because I was very insecure with my smile. I heard about Dr. Walid and the recommendations about him.',
          ar: 'سافرت مخصوص من الولايات المتحدة، لأني كنت مش واثقة خالص من ابتسامتي. سمعت عن دكتور وليد وعن الترشيحات عنه.',
        },
      },
      {
        t: 10,
        label: { en: 'The plan', ar: 'الخطة' },
        quote: {
          en: 'He told me the best thing for my age and my case is veneers. Dr. Walid and the entire team exceeded my expectations.',
          ar: 'قالي إن أنسب حاجة لسني ولحالتي هي الفينير. دكتور وليد والفريق كله فاقوا توقعاتي.',
        },
      },
      {
        t: 25,
        label: { en: 'Under a week', ar: 'أقل من أسبوع' },
        quote: {
          en: 'From the moment I walked in, everything felt amazing, comfortable and painless. What surprised me most — the process was done in less than a week.',
          ar: 'من أول ما دخلت كل حاجة كانت رائعة ومريحة ومن غير ألم. وأكتر حاجة فاجأتني إن كل حاجة خلصت في أقل من أسبوع.',
        },
      },
      {
        t: 41.5,
        label: { en: '180°', ar: '180°' },
        quote: {
          en: 'Honestly, I was transformed 180 degrees. I still can’t believe these are my teeth — everything looks natural, white, symmetrical.',
          ar: 'بصراحة اتغيّرت 180 درجة. لسه مش مصدّقة إن دي سناني — كل حاجة طبيعية وبيضا ومتناسقة.',
        },
      },
      {
        t: 67,
        label: { en: 'Don’t be scared', ar: 'ما تخافوش' },
        quote: {
          en: 'Don’t be scared — come right in the door. They’re like family to me now. I definitely recommend Dr. Walid Zaki.',
          ar: 'ما تخافوش، ادخلوا على طول. بقوا زي عيلتي دلوقتي. أنصح جدًا بدكتور وليد زكي.',
        },
      },
    ],
    transcript: {
      en: 'Hi, my name is Nour. I’ve travelled all the way from the United States, because I was very insecure with my smile and the overall appearance. I heard about Doctor Walid and the recommendations about him, and he told me the best thing for my age and for my case is to do veneers. Doctor Walid and the entire team and staff have exceeded my expectations. I’ve always been a little insecure with my smile — the appearance, the way that they look — so since the moment I’ve walked in, everything’s felt so amazing and comfortable, painless. And what surprised me the most is the process was done in less than a week. Even now, looking at my smile, I can’t believe that this is me. There was no pain during the treatment; everything was done smoothly, quickly — and honestly, I was transformed 180 degrees. It’s been amazing. Look at me now. I still can’t believe that these are my teeth. Everything looks natural, white, symmetrical. If you feel like you’re insecure about your smile, I definitely would recommend coming here. They’re quick, loving, professional — very well, clean work, and as you can see, I’m very happy with the results. Don’t be scared — come right in the door. They’re like family to me now, and everything’s been beyond my expectations. I thought I would be somewhere, but this is even better than where I thought I would be. So definitely recommend Doctor Walid Zaki.',
      ar: 'أهلًا، أنا نور. سافرت مخصوص من الولايات المتحدة، لأني كنت مش واثقة من ابتسامتي ومن شكلها عمومًا. سمعت عن دكتور وليد والترشيحات عنه، وقالي إن أنسب حاجة لسني ولحالتي هي الفينير. دكتور وليد والفريق كله فاقوا توقعاتي. طول عمري كنت مش واثقة من ابتسامتي وشكل سناني، ومن أول ما دخلت كل حاجة كانت رائعة ومريحة ومن غير ألم. وأكتر حاجة فاجأتني إن الموضوع كله خلص في أقل من أسبوع. لحد دلوقتي وأنا ببص على ابتسامتي مش مصدّقة إن دي أنا. ما كانش في أي ألم أثناء العلاج، وكل حاجة خلصت بسلاسة وبسرعة — وبصراحة اتغيّرت 180 درجة. بصوا عليّا دلوقتي. لسه مش مصدّقة إن دي سناني. كل حاجة طبيعية وبيضا ومتناسقة. لو حاسس إنك مش واثق من ابتسامتك، أنصحك جدًا تيجي هنا. سريعين وحنينين ومحترفين، وشغلهم نظيف جدًا، وزي ما انتوا شايفين أنا مبسوطة جدًا بالنتيجة. ما تخافوش، ادخلوا على طول — بقوا زي عيلتي دلوقتي، وكل حاجة كانت فوق توقعاتي. أنصح جدًا بدكتور وليد زكي.',
    },
    transcriptNote: { en: 'Original in English · Arabic translation below', ar: 'النص الأصلي بالإنجليزية · مع الترجمة العربية' },
  },
  {
    id: 'story-01',
    name: { en: 'SÉLIN guest', ar: 'ضيفة سيلين' },
    tab: { en: 'Porcelain veneers', ar: 'فينير البورسلين' },
    lang: 'ar',
    video: '/media/stories/story-01.mp4',
    poster: '/media/stories/story-01.jpg',
    duration: 94,
    uploadDate: '2026-11-01',
    treatment: 'porcelain-veneers',
    headline: { en: '“They changed my life.”', ar: '«غيّرولي حياتي.»' },
    guest: { en: 'SÉLIN guest · Porcelain veneers', ar: 'ضيفة سيلين · فينير البورسلين' },
    chapters: [
      {
        t: 3,
        label: { en: 'Before', ar: 'قبل' },
        quote: {
          en: 'My teeth were the thing I hated most in my life. I never smiled in photos — even when I laughed, I covered my mouth.',
          ar: 'سناني كانت أكتر حاجة بكرهها في حياتي. ما كنتش بضحك في أي صور، وحتى لما أضحك كنت بغطي بُقي.',
        },
      },
      {
        t: 10,
        label: { en: 'Designed together', ar: 'صمّمناها سوا' },
        quote: {
          en: 'Dr. Mohammed sent me options on WhatsApp — even the shades. We chose together, and he told me which colour would suit my skin tone best.',
          ar: 'دكتور محمد بعتلي options على واتساب، حتى الألوان كنا بننقّي مع بعض… وقالي الـ skintone بتاعتك اللون ده هيليق عليه أكتر.',
        },
      },
      {
        t: 26,
        label: { en: 'Honesty', ar: 'الأمانة' },
        quote: {
          en: 'There was a tiny detail I couldn’t even see — but the doctor insisted I come back so he could redo it. That honesty means so much to me.',
          ar: 'كان في حاجة صغيرة مضايقة الدكتور وأنا مش شايفاها… هو اللي أصرّ إني أجي وأعيد عليها. بصراحة الأمانة دي حاجة مهمة أوي بالنسبة لي.',
        },
      },
      {
        t: 49.5,
        label: { en: 'After', ar: 'بعد' },
        quote: {
          en: 'They changed my life. I cried when I got home. Now I’m so confident — I laugh without being embarrassed. The best decision I’ve ever made.',
          ar: 'غيّرولي حياتي… لما روّحت عيّطت. بقيت واثقة من نفسي قوي وبضحك عادي مش مكسوفة. أحلى أحلى قرار خدته.',
        },
      },
    ],
    transcript: {
      ar: 'أنا جيت لدكتور محمد ودكتور وليد عشان أعمل veneers، عشان دي أكتر حاجة كنت بكرهها في حياتي، يعني سناني. للأسف ما كنتش بضحك في أي صور، حتى لما أجي أضحك بغطي بُقي. دكتور محمد بعتلي على واتساب options، حتى الألوان كنا بننقّي مع بعض، إيه حاجة حاسة هتليق على وشي أكتر. وطبعًا الدكتور فاهم أكتر مني، فقالي مثلًا: الـ skintone بتاعتك اللون ده هيليق عليه أكتر. بصراحة دي بالنسبة لي كانت أحلى حاجة. بعد ما ركّبت، كل حاجة صغيرة كانت مضايقاني غيّرناها. وفي حاجة برضه كانت مضايقة الدكتور، أنا مش شايفاها، بس هو لدرجة قالي: لا، أنا في حاجة مضايقاني — وأكّد عليها، وجيت تاني عشان أغيّرها. وبصراحة الأمانة دي حاجة بالنسبة لي مهمة أوي. أنا ما لاحظتهاش، فالدكتور هو اللي أصرّ إني أجي وأعيد عليها. فبصراحة الـ process لذيذ قوي. فحاسة إنهم بصراحة غيّرولي حياتي، من غير ما أكون over. وعلى فكرة، أنا ما قولتلكمش كده، بس أنا لما روّحت عيّطت من كتر ما كنت متأثرة، من إني حاسة إني بقيت واثقة من نفسي قوي، وممكن أضحك عادي مش مكسوفة. فأحلى أحلى قرار خدته. ما تخيّلتش إن الـ result هتبسطني للدرجة دي، واتبسطت أوي أوي أوي، الحمد لله. وكل حد يسألني… دكتور وليد ودكتور محمد في سيلين دنتال إيستاتيكس.',
      en: 'I came to Dr. Mohammed and Dr. Walid to get veneers, because my teeth were the thing I hated most in my life. Sadly, I never smiled in any photos — even when I laughed, I would cover my mouth. Dr. Mohammed sent me options on WhatsApp; we even chose the colours together — whatever I felt would suit my face best. And of course the doctor understands more than I do, so he told me, for example: with your skin tone, this shade will suit you better. Honestly, for me, that was the best part. After the fitting, any small thing that bothered me, we changed. There was also something bothering the doctor that I couldn’t even see — he insisted on it, and I came back to have it changed. Honestly, that integrity matters so much to me. I hadn’t noticed it; the doctor is the one who insisted I come back and redo it. The whole process was genuinely lovely. I feel they truly changed my life — without exaggerating. And I haven’t told you this, but when I got home I cried, I was so moved — I had become so confident, I could laugh normally without being embarrassed. It’s the best, best decision I have ever made. I never imagined the result would make me this happy. I’m so, so happy, thank God. And everyone who asks me… Dr. Walid and Dr. Mohammed at SÉLIN Dental Aesthetics.',
    },
  },
  {
    id: 'story-03',
    name: { en: 'Mariam', ar: 'مريم' },
    tab: { en: 'Found us through her sister', ar: 'عرفتنا من أختها' },
    lang: 'ar',
    video: '/media/stories/story-03.mp4',
    poster: '/media/stories/story-03.jpg',
    duration: 57.6,
    uploadDate: '2026-11-22',
    treatment: 'porcelain-veneers',
    headline: { en: '“Now I’m really confident.”', ar: '«دلوقتي بقيت confident جدًا.»' },
    guest: { en: 'Mariam · Porcelain veneers', ar: 'مريم · فينير البورسلين' },
    chapters: [
      {
        t: 2,
        label: { en: 'Through her sister', ar: 'عن طريق أختها' },
        quote: {
          en: 'I found the clinic through my sister — she’s the one who introduced me to Dr. Walid. Honestly, the experience was wonderful.',
          ar: 'أنا عرفت العيادة من أختي، وهي اللي عرّفتني على دكتور وليد. بصراحة الـ experience كانت تحفة.',
        },
      },
      {
        t: 10.5,
        label: { en: 'Before', ar: 'قبل' },
        quote: {
          en: 'I’d wanted to fix my teeth for so long. I wasn’t confident laughing or being around people — whenever I laughed, I’d always cover my mouth.',
          ar: 'كان من زمان قوي نفسي أعمل سناني، عشان كنت not confident إني أضحك وأتعامل، ولما باجي أضحك دايمًا بغطي بُقي.',
        },
      },
      {
        t: 23.5,
        label: { en: 'Now', ar: 'دلوقتي' },
        quote: {
          en: 'But now I’ve become really confident. Honestly — the whole experience was amazing.',
          ar: 'بس دلوقتي بقيت confident جدًا. وبصراحة الـ experience كلها كانت تحفة.',
        },
      },
    ],
    transcript: {
      ar: 'هاي، أنا مريم. أنا عرفت المكان — أو العيادة يعني — من أختي، وهي اللي عرّفتني على دكتور وليد. بصراحة الـ experience كانت تحفة، عشان كان من زمان قوي نفسي أعمل سناني، عشان كان عندي مشكلة إني not confident في موضوع إني أضحك وإني أتعامل، ولما باجي أضحك دايمًا بغطي بُقي. بس دلوقتي بقيت confident جدًا. وغير إن طبعًا كان عندي مشاكل في سناني من وأنا صغيرة، وكنت بحاول أعملها. بصراحة، الـ experience كلها كانت تحفة.',
      en: 'Hi, I’m Mariam. I found the place — the clinic — through my sister; she’s the one who introduced me to Dr. Walid. Honestly, the experience was wonderful. I’d wanted to fix my teeth for a very long time, because I wasn’t confident when it came to laughing and being around people — whenever I laughed, I’d always cover my mouth. But now I’ve become really confident. And of course, I’d had issues with my teeth since I was young and had been wanting to get them done. Honestly, the whole experience was amazing.',
    },
  },
];

module.exports = { doctors, treatments, cases, journey, tour, faq, reviews, smiles, stories };
