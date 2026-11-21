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
    focus: { en: 'Aesthetic & Restorative Dentistry', ar: 'تجميل وترميم الأسنان' },
    // Put a portrait at public/media/doctors/walid-zaki.jpg and set the path here.
    photo: '',
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
    focus: { en: 'Implant & Smile Rehabilitation', ar: 'زراعة الأسنان وإعادة تأهيل الابتسامة' },
    photo: '',
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
    image: '/media/gen/veneers.webp',
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
    image: '/media/gen/digital.webp',
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
    image: '/media/gen/implants.webp',
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
    image: '/media/gen/whitening.webp',
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
    image: '/media/gen/aligners.webp',
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
    image: '/media/gen/ortho.webp',
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
    image: '/media/gen/crowns.webp',
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
 * CASES — before / after.
 *
 * To publish a real case:
 *   1. Put two photos in public/media/cases/ (same size & framing), e.g.
 *      case-01-before.jpg and case-01-after.jpg
 *   2. Add an entry with `before` and `after` paths (and remove `sim`).
 *
 * Entries with `sim` are rendered as ILLUSTRATIVE simulations (clearly
 * labelled on the site) until real patient photos are added.
 */
const cases = [
  {
    id: 'veneers-01',
    treatment: 'porcelain-veneers',
    title: { en: 'Full veneer smile makeover', ar: 'تجميل كامل للابتسامة بالفينير' },
    note: { en: '10 upper porcelain veneers', ar: '10 وحدات فينير للفك العلوي' },
    visits: { en: '3 visits', ar: '3 زيارات' },
    sim: {
      before: { shade: 'A3.5', chips: [1, 4], uneven: 0.6, gaps: [0, 0, 0, 0, 2, 0, 0, 0, 0] },
      after: { shade: 'BL2', chips: [], uneven: 0, gaps: [] },
    },
  },
  {
    id: 'whitening-01',
    treatment: 'teeth-whitening',
    title: { en: 'In-clinic whitening', ar: 'تبييض داخل العيادة' },
    note: { en: 'Single session', ar: 'جلسة واحدة' },
    visits: { en: '1 visit', ar: 'زيارة واحدة' },
    sim: {
      before: { shade: 'A4', chips: [], uneven: 0.1, gaps: [] },
      after: { shade: 'B1', chips: [], uneven: 0.1, gaps: [] },
    },
  },
  {
    id: 'aligners-01',
    treatment: 'clear-aligners',
    title: { en: 'Crowding corrected with aligners', ar: 'علاج التزاحم بالتقويم الشفاف' },
    note: { en: 'Upper & lower aligners', ar: 'تقويم شفاف للفكين' },
    visits: { en: '9 months', ar: '9 أشهر' },
    sim: {
      before: { shade: 'A2', chips: [], uneven: 0.2, crowd: 1, gaps: [] },
      after: { shade: 'A1', chips: [], uneven: 0, gaps: [] },
    },
  },
  {
    id: 'implant-01',
    treatment: 'dental-implants',
    title: { en: 'Missing tooth restored', ar: 'تعويض سن مفقود' },
    note: { en: 'Single implant + zirconia crown', ar: 'زرعة واحدة مع تاج زركونيا' },
    visits: { en: '4 months', ar: '4 أشهر' },
    sim: {
      before: { shade: 'A2', chips: [], uneven: 0.15, missing: [6], gaps: [] },
      after: { shade: 'A2', chips: [], uneven: 0.15, gaps: [] },
    },
  },
  {
    id: 'ortho-01',
    treatment: 'orthodontics',
    title: { en: 'Front gap closed', ar: 'إغلاق الفراغ الأمامي' },
    note: { en: 'Ceramic braces', ar: 'تقويم خزفي' },
    visits: { en: '12 months', ar: '12 شهرًا' },
    sim: {
      before: { shade: 'A2', chips: [], uneven: 0.1, gaps: [0, 0, 0, 0, 7, 0, 0, 0, 0] },
      after: { shade: 'A1', chips: [], uneven: 0, gaps: [] },
    },
  },
  {
    id: 'crowns-01',
    treatment: 'zirconia-crowns',
    title: { en: 'Dark front tooth matched', ar: 'مطابقة سن أمامي داكن' },
    note: { en: 'Single zirconia crown', ar: 'تاج زركونيا واحد' },
    visits: { en: '2 visits', ar: 'زيارتان' },
    sim: {
      before: { shade: 'A2', chips: [], uneven: 0.1, dark: [5], gaps: [] },
      after: { shade: 'A2', chips: [], uneven: 0.1, gaps: [] },
    },
  },
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

module.exports = { doctors, treatments, cases, journey, tour, faq, reviews };
