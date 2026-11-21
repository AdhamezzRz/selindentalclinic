/**
 * ─────────────────────────────────────────────────────────────
 *  SÉLIN JOURNAL — bilingual blog (English + Arabic)
 * ─────────────────────────────────────────────────────────────
 *  Add a post by copying one object below. Fields:
 *   slug, date (YYYY-MM-DD), updated, author (doctor slug),
 *   treatment (treatment slug for the CTA), image, readMins,
 *   title, excerpt, answer (one-paragraph direct answer — great for
 *   Google featured snippets & AI answers), sections[], takeaways[], faq[]
 *
 *  Please have the doctors review each article before publishing.
 */

const posts = [
  {
    slug: 'veneers-vs-crowns-vs-bonding',
    date: '2026-11-18',
    updated: '2026-11-18',
    author: 'walid-zaki',
    treatment: 'porcelain-veneers',
    image: '/media/gen/veneers.webp',
    readMins: 6,
    category: { en: 'Smile design', ar: 'تصميم الابتسامة' },
    title: {
      en: 'Veneers vs. Crowns vs. Bonding: Which One Is Right for Your Smile?',
      ar: 'الفينير أم التيجان أم البوندينج: أيهما يناسب ابتسامتك؟',
    },
    excerpt: {
      en: 'Three ways to transform the front teeth — and when each one makes sense. A clear, honest comparison from the SÉLIN team.',
      ar: 'ثلاث طرق لتجميل الأسنان الأمامية، ومتى يكون كل منها الخيار الأنسب. مقارنة واضحة وصادقة من فريق سيلين.',
    },
    answer: {
      en: 'Porcelain veneers are best for changing the colour, shape and symmetry of healthy front teeth with minimal preparation. Crowns are best when a tooth is weakened, heavily filled or root-treated and needs full coverage. Composite bonding is a quick, conservative fix for small chips and gaps. The right choice depends on the health of each tooth and the result you want — which is why every plan at SÉLIN starts with a digital smile design.',
      ar: 'الفينير هو الأنسب لتغيير لون وشكل وتناسق الأسنان الأمامية السليمة مع تحضير بسيط. أما التيجان فهي الأفضل عندما يكون السن ضعيفًا أو به حشوات كبيرة أو معالجًا عصبيًا ويحتاج تغطية كاملة. والبوندينج حل سريع ومحافظ للكسور الصغيرة والفراغات. يعتمد الاختيار على صحة كل سن والنتيجة التي تريدها، ولهذا تبدأ كل خطة في سيلين بتصميم رقمي للابتسامة.',
    },
    sections: [
      {
        h: { en: 'Porcelain veneers: the aesthetic upgrade', ar: 'الفينير: الترقية الجمالية' },
        p: [
          {
            en: 'A veneer is a thin shell of porcelain bonded to the front surface of a tooth. Because it covers only the visible side, it usually needs far less preparation than a crown. Veneers are ideal when the teeth are healthy but you want to change their colour, length, shape or alignment in a single, coordinated design.',
            ar: 'الفينير قشرة رقيقة من البورسلين تُلصق على الواجهة الأمامية للسن. ولأنه يغطي الجزء الظاهر فقط، فهو يحتاج عادةً تحضيرًا أقل بكثير من التاج. يكون مثاليًا عندما تكون الأسنان سليمة وتريد تغيير لونها أو طولها أو شكلها أو اصطفافها بتصميم واحد متناسق.',
          },
        ],
        list: [
          { en: 'Best for: discolouration, worn edges, small gaps, uneven shapes', ar: 'الأنسب لـ: التصبغات، الحواف المتآكلة، الفراغات الصغيرة، الأشكال غير المتساوية' },
          { en: 'Material: stain-resistant, light-reflecting porcelain', ar: 'المادة: بورسلين مقاوم للتصبغ ويعكس الضوء' },
          { en: 'Typical timeline: 2–3 visits', ar: 'المدة المعتادة: من 2 إلى 3 زيارات' },
        ],
      },
      {
        h: { en: 'Crowns: protection and beauty in one', ar: 'التيجان: حماية وجمال معًا' },
        p: [
          {
            en: 'A crown covers the entire tooth. It is the right choice when a tooth has lost a lot of its structure — after a large filling, a fracture or root canal treatment. Modern zirconia and layered ceramic crowns are metal-free, strong and natural-looking, so a crown no longer means a grey line at the gum.',
            ar: 'يغطي التاج السن بالكامل، وهو الخيار الصحيح عندما يفقد السن جزءًا كبيرًا من بنيته بعد حشوة كبيرة أو كسر أو علاج عصب. تيجان الزركونيا والخزف الحديثة خالية من المعادن وقوية وطبيعية المظهر، فلم يعد التاج يعني خطًا رماديًا عند اللثة.',
          },
        ],
      },
      {
        h: { en: 'Composite bonding: the quick refinement', ar: 'البوندينج: التحسين السريع' },
        p: [
          {
            en: 'Bonding uses tooth-coloured composite resin sculpted directly onto the tooth in one visit. It is excellent for small chips and closing minor gaps, and it is the most conservative option. Composite is less stain-resistant than porcelain, so it may need polishing or refreshing over time.',
            ar: 'يعتمد البوندينج على مادة كمبوزيت بلون الأسنان تُشكَّل مباشرة على السن في زيارة واحدة. وهو ممتاز للكسور الصغيرة وإغلاق الفراغات البسيطة، ويعد الخيار الأكثر محافظة على السن. الكمبوزيت أقل مقاومة للتصبغ من البورسلين، لذلك قد يحتاج إلى تلميع أو تجديد مع الوقت.',
          },
        ],
      },
      {
        h: { en: 'How we decide together', ar: 'كيف نختار معًا' },
        p: [
          {
            en: 'At SÉLIN we photograph and scan your smile, design the result digitally, and — for many cases — let you try a mock-up in your mouth. Often the best plan is a combination: veneers on the front teeth, a crown on a weakened tooth, and bonding where only a touch is needed.',
            ar: 'في سيلين نصوّر ابتسامتك ونمسحها رقميًا ونصمم النتيجة، وفي كثير من الحالات تجرب نموذجًا في فمك. وغالبًا تكون أفضل خطة مزيجًا: فينير للأسنان الأمامية، وتاج لسن ضعيف، وبوندينج حيث يكفي تعديل بسيط.',
          },
        ],
      },
    ],
    takeaways: [
      { en: 'Veneers change appearance; crowns restore strength.', ar: 'الفينير يغيّر المظهر، والتاج يعيد القوة.' },
      { en: 'Bonding is the most conservative quick fix for small issues.', ar: 'البوندينج هو الحل السريع الأكثر محافظة للمشاكل البسيطة.' },
      { en: 'A digital smile design shows you the result before treatment.', ar: 'التصميم الرقمي يريك النتيجة قبل العلاج.' },
    ],
    faq: [
      {
        q: { en: 'Are veneers or crowns more natural looking?', ar: 'أيهما أكثر طبيعية: الفينير أم التيجان؟' },
        a: {
          en: 'Both can look completely natural when designed well. Veneers are usually chosen for healthy teeth, crowns for weakened teeth.',
          ar: 'كلاهما يمكن أن يبدو طبيعيًا تمامًا عند تصميمه جيدًا. يُختار الفينير غالبًا للأسنان السليمة والتيجان للأسنان الضعيفة.',
        },
      },
      {
        q: { en: 'Can bonding replace veneers?', ar: 'هل يمكن أن يحل البوندينج محل الفينير؟' },
        a: {
          en: 'For small changes, yes. For a full colour and shape transformation, porcelain veneers are generally more durable and stain-resistant.',
          ar: 'في التعديلات البسيطة نعم. أما للتغيير الكامل في اللون والشكل، فالفينير البورسلين عادةً أكثر متانة ومقاومة للتصبغ.',
        },
      },
    ],
  },

  {
    slug: 'digital-smile-design-explained',
    date: '2026-11-14',
    updated: '2026-11-14',
    author: 'mohammed-khaled',
    treatment: 'digital-smile-design',
    image: '/media/gen/digital.webp',
    readMins: 5,
    category: { en: 'Technology', ar: 'التقنية' },
    title: {
      en: 'Digital Smile Design Explained: See Your New Smile Before Treatment',
      ar: 'شرح التصميم الرقمي للابتسامة: شاهد ابتسامتك الجديدة قبل العلاج',
    },
    excerpt: {
      en: 'How photos, video and 3D scans let you preview — and approve — your smile before anything is done.',
      ar: 'كيف تتيح لك الصور والفيديو والمسح ثلاثي الأبعاد معاينة ابتسامتك والموافقة عليها قبل البدء.',
    },
    answer: {
      en: 'Digital Smile Design (DSD) is a planning method that uses facial photos, video and 3D intraoral scans to design your ideal smile on screen before treatment. The design is then transferred to a trial mock-up you can wear, so you can see and approve the result in your own face. It makes veneers, aligners, crowns and whitening more predictable and personal.',
      ar: 'التصميم الرقمي للابتسامة طريقة تخطيط تعتمد على صور الوجه والفيديو والمسح ثلاثي الأبعاد داخل الفم لتصميم ابتسامتك المثالية على الشاشة قبل العلاج. ثم يُنقل التصميم إلى نموذج تجريبي ترتديه لترى النتيجة على وجهك وتوافق عليها. وهذا يجعل الفينير والتقويم والتيجان والتبييض أكثر دقة وملاءمة لك.',
    },
    sections: [
      {
        h: { en: 'Why design the smile around the face?', ar: 'لماذا نصمم الابتسامة حول الوجه؟' },
        p: [
          {
            en: 'A beautiful smile is not a set of perfect white rectangles. It is proportion: how the teeth relate to your lips, your facial midline, your gum line and the way you speak and laugh. Designing from the face outward is what separates a natural result from an obviously “done” one.',
            ar: 'الابتسامة الجميلة ليست مجموعة مستطيلات بيضاء مثالية، بل هي تناسق: علاقة الأسنان بالشفاه وخط منتصف الوجه وخط اللثة وطريقة الكلام والضحك. التصميم انطلاقًا من الوجه هو ما يميز النتيجة الطبيعية عن النتيجة المصطنعة.',
          },
        ],
      },
      {
        h: { en: 'The four steps of DSD at SÉLIN', ar: 'خطوات التصميم الرقمي الأربع في سيلين' },
        list: [
          { en: 'Records: facial photography, a short smile video and a 3D intraoral scan.', ar: 'السجلات: تصوير الوجه وفيديو قصير للابتسامة ومسح ثلاثي الأبعاد داخل الفم.' },
          { en: 'Analysis: lip line, midline, tooth proportions and gum levels.', ar: 'التحليل: خط الشفاه وخط المنتصف وتناسب الأسنان ومستوى اللثة.' },
          { en: 'Design: your new smile is drawn digitally and refined with you.', ar: 'التصميم: نرسم ابتسامتك الجديدة رقميًا ونعدلها معك.' },
          { en: 'Mock-up: a temporary trial smile you can see in the mirror.', ar: 'النموذج التجريبي: ابتسامة مؤقتة تراها في المرآة.' },
        ],
      },
      {
        h: { en: 'What you gain', ar: 'ما الذي تستفيده' },
        p: [
          {
            en: 'Confidence before commitment. You see the shape, length and character of your new teeth before treatment, you can ask for changes, and the final restorations are made to match the approved design.',
            ar: 'ثقة قبل الالتزام. ترى شكل أسنانك الجديدة وطولها وملامحها قبل العلاج، ويمكنك طلب التعديلات، ثم تُصنع التركيبات النهائية مطابقة للتصميم المعتمد.',
          },
        ],
      },
    ],
    takeaways: [
      { en: 'DSD designs your smile from your facial features.', ar: 'التصميم الرقمي ينطلق من ملامح وجهك.' },
      { en: 'You can try the design as a mock-up before treatment.', ar: 'يمكنك تجربة التصميم كنموذج قبل العلاج.' },
      { en: 'It makes results more predictable and personal.', ar: 'يجعل النتائج أكثر دقة وملاءمة لك.' },
    ],
    faq: [
      {
        q: { en: 'Is Digital Smile Design a treatment?', ar: 'هل التصميم الرقمي علاج بحد ذاته؟' },
        a: {
          en: 'It is a planning step. The design guides the actual treatment, such as veneers, aligners, crowns or whitening.',
          ar: 'هو مرحلة تخطيط، ويوجّه التصميم العلاج الفعلي مثل الفينير أو التقويم أو التيجان أو التبييض.',
        },
      },
      {
        q: { en: 'Does the mock-up hurt?', ar: 'هل النموذج التجريبي مؤلم؟' },
        a: {
          en: 'No. A mock-up is a temporary material placed over your teeth without drilling and removed afterwards.',
          ar: 'لا. النموذج مادة مؤقتة توضع على الأسنان دون أي برد وتُزال بعد ذلك.',
        },
      },
    ],
  },

  {
    slug: 'teeth-whitening-in-clinic-vs-at-home',
    date: '2026-11-10',
    updated: '2026-11-10',
    author: 'walid-zaki',
    treatment: 'teeth-whitening',
    image: '/media/gen/whitening.webp',
    readMins: 5,
    category: { en: 'Whitening', ar: 'التبييض' },
    title: {
      en: 'Teeth Whitening: In-Clinic vs. At-Home — What Really Works?',
      ar: 'تبييض الأسنان: في العيادة أم في المنزل؟ ما الذي ينجح فعلًا؟',
    },
    excerpt: {
      en: 'Professional gels, take-home trays and drugstore strips compared — plus how to keep your new shade.',
      ar: 'مقارنة بين الجل الاحترافي وقوالب المنزل وشرائط الصيدلية، وكيف تحافظ على درجة لونك الجديدة.',
    },
    answer: {
      en: 'In-clinic whitening gives the fastest, most controlled result — often visible in a single visit — because a dentist can use stronger gels while protecting the gums. Dentist-supervised take-home trays work more gradually and are excellent for maintenance. Over-the-counter products are weaker and less predictable. Whitening only lightens natural enamel; it does not change the colour of veneers, crowns or fillings.',
      ar: 'التبييض في العيادة يمنح أسرع نتيجة وأكثرها تحكمًا، وغالبًا تظهر من زيارة واحدة، لأن الطبيب يستطيع استخدام جل أقوى مع حماية اللثة. أما قوالب المنزل تحت إشراف الطبيب فتعمل تدريجيًا وهي ممتازة للمحافظة على النتيجة. ومنتجات الصيدلية أضعف وأقل دقة. التبييض يفتح لون المينا الطبيعية فقط، ولا يغير لون الفينير أو التيجان أو الحشوات.',
    },
    sections: [
      {
        h: { en: 'Why teeth change colour', ar: 'لماذا يتغير لون الأسنان' },
        p: [
          {
            en: 'Coffee, tea, smoking and simply time leave stains in and on the enamel, while the dentine underneath naturally becomes more yellow with age. Whitening gels release oxygen that breaks down these pigments.',
            ar: 'القهوة والشاي والتدخين والوقت تترك تصبغات داخل المينا وعلى سطحها، بينما يميل العاج تحتها للاصفرار طبيعيًا مع العمر. يطلق جل التبييض الأكسجين الذي يفكك هذه الصبغات.',
          },
        ],
      },
      {
        h: { en: 'The options compared', ar: 'مقارنة الخيارات' },
        list: [
          { en: 'In-clinic: fastest, gum protection, shade goal agreed in advance.', ar: 'في العيادة: الأسرع مع حماية اللثة وتحديد اللون المستهدف مسبقًا.' },
          { en: 'Take-home trays: custom-fitted, gradual, great for touch-ups.', ar: 'قوالب المنزل: مخصصة ونتيجتها تدريجية وممتازة للتجديد.' },
          { en: 'Strips & pastes: mild, inconsistent contact, slower results.', ar: 'الشرائط والمعاجين: مفعول خفيف وتلامس غير منتظم ونتيجة أبطأ.' },
        ],
      },
      {
        h: { en: 'Sensitivity and safety', ar: 'الحساسية والأمان' },
        p: [
          {
            en: 'Temporary sensitivity is common and usually settles within a day or two. A professional check-up first is important: cavities, gum problems and exposed roots should be treated before whitening.',
            ar: 'الحساسية المؤقتة شائعة وتزول عادةً خلال يوم أو يومين. ومن المهم إجراء فحص قبلها، فيجب علاج التسوس ومشاكل اللثة والجذور المكشوفة قبل التبييض.',
          },
        ],
      },
      {
        h: { en: 'Keeping your new shade', ar: 'كيف تحافظ على اللون الجديد' },
        list: [
          { en: 'Avoid strongly coloured food and drinks for 48 hours.', ar: 'تجنب الأطعمة والمشروبات شديدة اللون لمدة 48 ساعة.' },
          { en: 'Rinse with water after coffee or tea.', ar: 'اشطف فمك بالماء بعد القهوة أو الشاي.' },
          { en: 'Professional cleaning every six months.', ar: 'تنظيف احترافي كل ستة أشهر.' },
        ],
      },
    ],
    takeaways: [
      { en: 'In-clinic whitening is the fastest and most controlled.', ar: 'التبييض في العيادة هو الأسرع والأكثر تحكمًا.' },
      { en: 'Whitening does not change the colour of crowns or veneers.', ar: 'التبييض لا يغير لون التيجان أو الفينير.' },
      { en: 'A check-up before whitening keeps it safe.', ar: 'الفحص قبل التبييض يجعله آمنًا.' },
    ],
    faq: [
      {
        q: { en: 'How long does whitening last?', ar: 'كم تدوم نتيجة التبييض؟' },
        a: {
          en: 'It varies with diet and habits. Many people enjoy results for a long time with good care and occasional touch-ups.',
          ar: 'تختلف حسب النظام الغذائي والعادات، ويستمتع كثيرون بالنتيجة لفترة طويلة مع العناية الجيدة والتجديد من حين لآخر.',
        },
      },
    ],
  },

  {
    slug: 'clear-aligners-vs-braces',
    date: '2026-11-06',
    updated: '2026-11-06',
    author: 'mohammed-khaled',
    treatment: 'clear-aligners',
    image: '/media/gen/aligners.webp',
    readMins: 6,
    category: { en: 'Orthodontics', ar: 'التقويم' },
    title: {
      en: 'Clear Aligners vs. Braces: An Honest Comparison',
      ar: 'التقويم الشفاف أم التقويم التقليدي: مقارنة صادقة',
    },
    excerpt: {
      en: 'Visibility, comfort, speed and discipline — what really differs, and how to choose.',
      ar: 'المظهر والراحة والسرعة والالتزام: ما الفرق الحقيقي وكيف تختار.',
    },
    answer: {
      en: 'Clear aligners are nearly invisible, removable trays that suit many mild-to-moderate alignment cases and adults who value discretion — but they only work if worn about 20–22 hours a day. Braces are fixed, so they work around the clock and give precise control for complex bite problems. Both can produce excellent results; the right choice depends on your case and lifestyle.',
      ar: 'التقويم الشفاف قوالب شبه غير مرئية وقابلة للإزالة تناسب كثيرًا من حالات الاعوجاج البسيطة والمتوسطة والبالغين الذين يفضلون عدم ظهوره، لكنه لا ينجح إلا بارتدائه من 20 إلى 22 ساعة يوميًا. أما التقويم التقليدي فهو ثابت ويعمل طوال الوقت ويمنح تحكمًا دقيقًا في مشاكل الإطباق المعقدة. كلاهما يحقق نتائج ممتازة، والاختيار يعتمد على حالتك وأسلوب حياتك.',
    },
    sections: [
      {
        h: { en: 'Appearance and comfort', ar: 'المظهر والراحة' },
        p: [
          {
            en: 'Aligners are transparent and smooth, with no wires to irritate the cheeks. Ceramic braces are far more discreet than metal ones, but they remain visible up close.',
            ar: 'التقويم الشفاف شفاف وناعم بدون أسلاك تزعج الخدين. والتقويم الخزفي أقل ظهورًا بكثير من المعدني، لكنه يظل مرئيًا عن قرب.',
          },
        ],
      },
      {
        h: { en: 'Discipline matters', ar: 'الالتزام هو الأساس' },
        p: [
          {
            en: 'Aligners only move teeth while they are in your mouth. If you are likely to forget them, fixed braces may give a more reliable result. With braces, the challenge is cleaning carefully around brackets.',
            ar: 'التقويم الشفاف يحرك الأسنان فقط أثناء وجوده في الفم، فإن كنت قد تنساه فالتقويم الثابت قد يمنح نتيجة أكثر ضمانًا. ومع التقويم الثابت يكون التحدي هو التنظيف الدقيق حول الحاصرات.',
          },
        ],
      },
      {
        h: { en: 'Complexity of the case', ar: 'مدى تعقيد الحالة' },
        list: [
          { en: 'Mild crowding or spacing: aligners are often ideal.', ar: 'التزاحم أو الفراغات البسيطة: التقويم الشفاف غالبًا مثالي.' },
          { en: 'Significant rotations or bite issues: braces may offer more control.', ar: 'الدوران الكبير أو مشاكل الإطباق: التقويم الثابت قد يمنح تحكمًا أكبر.' },
          { en: 'Before veneers: short aligner treatment can make veneers more conservative.', ar: 'قبل الفينير: تقويم شفاف قصير قد يجعل الفينير أكثر محافظة على الأسنان.' },
        ],
      },
      {
        h: { en: 'After treatment: retention', ar: 'بعد العلاج: التثبيت' },
        p: [
          {
            en: 'Teeth tend to drift back. Whichever option you choose, wearing retainers as advised is what protects the result for the long term.',
            ar: 'تميل الأسنان للعودة إلى مكانها، لذلك أيًّا كان اختيارك فإن ارتداء المثبت كما ينصح الطبيب هو ما يحمي النتيجة على المدى الطويل.',
          },
        ],
      },
    ],
    takeaways: [
      { en: 'Aligners: discreet and removable, require daily discipline.', ar: 'التقويم الشفاف: غير ملحوظ وقابل للإزالة ويحتاج التزامًا يوميًا.' },
      { en: 'Braces: fixed, precise, ideal for complex cases.', ar: 'التقويم الثابت: دقيق ومثالي للحالات المعقدة.' },
      { en: 'Retainers protect every orthodontic result.', ar: 'المثبتات تحمي نتيجة أي تقويم.' },
    ],
    faq: [
      {
        q: { en: 'Are aligners faster than braces?', ar: 'هل التقويم الشفاف أسرع من التقليدي؟' },
        a: {
          en: 'Not necessarily. Duration depends on the movements needed. For some simple cases aligners are quick; complex cases take time either way.',
          ar: 'ليس بالضرورة، فالمدة تعتمد على الحركات المطلوبة. بعض الحالات البسيطة تنتهي بسرعة بالتقويم الشفاف، والحالات المعقدة تحتاج وقتًا في الحالتين.',
        },
      },
    ],
  },

  {
    slug: 'dental-implants-complete-guide',
    date: '2026-11-02',
    updated: '2026-11-02',
    author: 'mohammed-khaled',
    treatment: 'dental-implants',
    image: '/media/gen/implants.webp',
    readMins: 7,
    category: { en: 'Implants', ar: 'الزراعة' },
    title: {
      en: 'Dental Implants: The Complete Guide to Replacing a Missing Tooth',
      ar: 'زراعة الأسنان: الدليل الكامل لتعويض السن المفقود',
    },
    excerpt: {
      en: 'What an implant is, who it suits, how long it takes and how to care for it — step by step.',
      ar: 'ما هي الزرعة ولمن تناسب وكم تستغرق وكيف تعتني بها، خطوة بخطوة.',
    },
    answer: {
      en: 'A dental implant is a small titanium post placed in the jaw bone to replace the root of a missing tooth, topped with a custom crown. After placement, the bone typically needs a few months to bond with the implant before the final crown is fitted. Implants look and function like natural teeth, do not require grinding the neighbouring teeth, and help preserve the jaw bone.',
      ar: 'زرعة الأسنان دعامة صغيرة من التيتانيوم توضع في عظم الفك لتعويض جذر السن المفقود، ويُركب فوقها تاج مخصص. بعد التركيب يحتاج العظم عادةً بضعة أشهر ليلتحم بالزرعة قبل تركيب التاج النهائي. تبدو الزرعة وتعمل مثل السن الطبيعي، ولا تتطلب برد الأسنان المجاورة، وتساعد في الحفاظ على عظم الفك.',
    },
    sections: [
      {
        h: { en: 'Why replace a missing tooth?', ar: 'لماذا يجب تعويض السن المفقود؟' },
        p: [
          {
            en: 'A gap is more than an aesthetic issue. Neighbouring teeth can tilt, the opposing tooth can over-erupt, chewing shifts to one side, and the bone where the root used to be gradually shrinks.',
            ar: 'الفراغ ليس مشكلة جمالية فقط؛ فقد تميل الأسنان المجاورة ويبرز السن المقابل وينتقل المضغ لجانب واحد، ويضمر العظم تدريجيًا في مكان الجذر.',
          },
        ],
      },
      {
        h: { en: 'The implant journey', ar: 'رحلة الزراعة' },
        list: [
          { en: 'Planning: 3D imaging to assess bone and plan the ideal position.', ar: 'التخطيط: تصوير ثلاثي الأبعاد لتقييم العظم وتحديد الموضع المثالي.' },
          { en: 'Placement: a precise procedure under local anaesthesia.', ar: 'التركيب: إجراء دقيق تحت التخدير الموضعي.' },
          { en: 'Healing: the bone integrates with the implant over a few months.', ar: 'الالتئام: يلتحم العظم بالزرعة خلال بضعة أشهر.' },
          { en: 'Crown: a custom ceramic crown is fitted and the bite adjusted.', ar: 'التاج: تركيب تاج خزفي مخصص وضبط الإطباق.' },
        ],
      },
      {
        h: { en: 'Who is a good candidate?', ar: 'من المرشح المناسب؟' },
        p: [
          {
            en: 'Most healthy adults with enough bone are suitable. Smoking, uncontrolled diabetes and gum disease can affect healing, so these are assessed and managed first. If bone is limited, grafting may be considered.',
            ar: 'معظم البالغين الأصحاء الذين لديهم عظم كافٍ مناسبون. التدخين والسكري غير المنضبط وأمراض اللثة قد تؤثر في الالتئام، لذلك نقيّمها ونتعامل معها أولًا. وإذا كان العظم محدودًا فقد يُنظر في التطعيم العظمي.',
          },
        ],
      },
      {
        h: { en: 'Caring for your implant', ar: 'العناية بالزرعة' },
        p: [
          {
            en: 'Brush twice daily, clean between teeth with floss or interdental brushes, and keep regular check-ups. Implants cannot decay, but the gum around them needs the same care as natural teeth.',
            ar: 'نظف أسنانك مرتين يوميًا واستخدم الخيط أو الفرشاة بين الأسنان والتزم بالمتابعة الدورية. الزرعة لا تتسوس، لكن اللثة حولها تحتاج العناية نفسها التي تحتاجها الأسنان الطبيعية.',
          },
        ],
      },
    ],
    takeaways: [
      { en: 'An implant replaces the root, not just the visible tooth.', ar: 'الزرعة تعوض الجذر وليس الجزء الظاهر فقط.' },
      { en: 'Healing usually takes a few months before the final crown.', ar: 'يستغرق الالتئام عادةً بضعة أشهر قبل التاج النهائي.' },
      { en: 'Good hygiene and check-ups protect implants long term.', ar: 'النظافة والمتابعة تحميان الزرعة على المدى الطويل.' },
    ],
    faq: [
      {
        q: { en: 'Is implant placement painful?', ar: 'هل تركيب الزرعة مؤلم؟' },
        a: {
          en: 'It is performed under local anaesthesia. Mild discomfort afterwards is usually managed with simple pain relief.',
          ar: 'يتم تحت التخدير الموضعي، والانزعاج البسيط بعده يُعالج عادةً بمسكنات بسيطة.',
        },
      },
      {
        q: { en: 'Implant or bridge?', ar: 'زرعة أم جسر؟' },
        a: {
          en: 'An implant stands alone and does not require preparing the neighbouring teeth. A bridge can be a good option when those teeth already need crowns.',
          ar: 'الزرعة قائمة بذاتها ولا تحتاج تحضير الأسنان المجاورة، بينما قد يكون الجسر خيارًا جيدًا إذا كانت تلك الأسنان تحتاج تيجانًا بالفعل.',
        },
      },
    ],
  },

  {
    slug: 'how-to-care-for-veneers',
    date: '2026-10-28',
    updated: '2026-10-28',
    author: 'walid-zaki',
    treatment: 'porcelain-veneers',
    image: '/media/tour/t08.jpg',
    readMins: 4,
    category: { en: 'Aftercare', ar: 'العناية' },
    title: {
      en: 'How to Care for Your Veneers So They Stay Beautiful for Years',
      ar: 'كيف تعتني بالفينير ليبقى جميلًا لسنوات',
    },
    excerpt: {
      en: 'Simple daily habits — and a few things to avoid — that protect your investment.',
      ar: 'عادات يومية بسيطة وأشياء يجب تجنبها لتحمي استثمارك في ابتسامتك.',
    },
    answer: {
      en: 'Care for porcelain veneers like natural teeth: brush twice a day with a soft brush and non-abrasive toothpaste, clean between the teeth daily, and see your dentist for regular check-ups and cleaning. Avoid biting hard objects such as ice, nails or bottle caps, and wear a night guard if you grind your teeth.',
      ar: 'اعتنِ بالفينير كما تعتني بأسنانك الطبيعية: نظفها مرتين يوميًا بفرشاة ناعمة ومعجون غير كاشط، ونظف ما بين الأسنان يوميًا، والتزم بالفحص والتنظيف الدوري. تجنب عض الأشياء الصلبة مثل الثلج والأظافر وأغطية الزجاجات، واستخدم واقيًا ليليًا إن كنت تضغط على أسنانك.',
    },
    sections: [
      {
        h: { en: 'Daily routine', ar: 'الروتين اليومي' },
        list: [
          { en: 'Soft-bristled brush, twice a day.', ar: 'فرشاة ناعمة مرتين يوميًا.' },
          { en: 'Non-abrasive toothpaste (avoid charcoal and harsh whitening pastes).', ar: 'معجون غير كاشط (تجنب الفحم ومعاجين التبييض القاسية).' },
          { en: 'Floss or interdental brushes every day — the gum line matters most.', ar: 'الخيط أو فرشاة ما بين الأسنان يوميًا، فخط اللثة هو الأهم.' },
        ],
      },
      {
        h: { en: 'Habits to avoid', ar: 'عادات يجب تجنبها' },
        p: [
          {
            en: 'Porcelain is strong but not indestructible. Opening packages with your teeth, chewing ice and biting nails put sudden forces on the edges. If you grind at night, a custom night guard is the single best protection.',
            ar: 'البورسلين قوي لكنه ليس غير قابل للكسر. فتح الأغراض بالأسنان ومضغ الثلج وقضم الأظافر تضع ضغطًا مفاجئًا على الحواف. وإذا كنت تضغط على أسنانك ليلًا، فالواقي الليلي المخصص هو أفضل حماية.',
          },
        ],
      },
      {
        h: { en: 'Regular reviews', ar: 'المتابعة الدورية' },
        p: [
          {
            en: 'Professional cleaning and a check-up every six months keep the gums healthy and let us polish the margins and spot anything early.',
            ar: 'التنظيف الاحترافي والفحص كل ستة أشهر يحافظان على صحة اللثة ويتيحان لنا تلميع الحواف واكتشاف أي مشكلة مبكرًا.',
          },
        ],
      },
    ],
    takeaways: [
      { en: 'Treat veneers like natural teeth — brush, floss, check-ups.', ar: 'عامل الفينير كأسنانك الطبيعية: تنظيف وخيط ومتابعة.' },
      { en: 'Avoid using your teeth as tools.', ar: 'لا تستخدم أسنانك كأداة.' },
      { en: 'Night guards protect veneers from grinding.', ar: 'الواقي الليلي يحمي الفينير من الضغط على الأسنان.' },
    ],
    faq: [
      {
        q: { en: 'Can veneers stain?', ar: 'هل يتصبغ الفينير؟' },
        a: {
          en: 'Porcelain is highly stain-resistant, but the bonding edges and your natural teeth can still pick up stains, so regular cleaning helps.',
          ar: 'البورسلين مقاوم جدًا للتصبغ، لكن حواف اللصق وأسنانك الطبيعية قد تتصبغ، لذا يساعد التنظيف الدوري.',
        },
      },
    ],
  },
];

posts.sort((a, b) => (a.date < b.date ? 1 : -1));

module.exports = { posts };
