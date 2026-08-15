/* Landed — course content. Bilingual: en / ar (Egyptian Arabic).
   Platform terms stay in English on purpose: Connects, proposal, milestone, JSS, escrow. */

const P = (en, ar) => ({ t: 'p', en, ar });
const H = (en, ar) => ({ t: 'h', en, ar });
const PULL = (en, ar) => ({ t: 'pull', en, ar });
const NOTE = (title_en, title_ar, en, ar) => ({ t: 'note', title_en, title_ar, en, ar });
const PLAIN = (en, ar) => ({ t: 'plain', en, ar });          // "in plain words" box
const STEPS = (en, ar) => ({ t: 'steps', en, ar });
const TODO = (mins, en, ar) => ({ t: 'todo', mins, en, ar });
const FAQ = (items) => ({ t: 'faq', items });
const W = (kind) => ({ t: 'widget', kind });
const COMPARE = (a_en, a_ar, b_en, b_ar) => ({ t: 'compare', a_en, a_ar, b_en, b_ar });
const FIG = (kind, cap_en, cap_ar) => ({ t: 'fig', kind, cap_en, cap_ar });

/* ============================================================ GLOSSARY */
const GLOSSARY = [
  ['Connects', 'Connects',
    'Tokens you spend to send a proposal. Upwork gives you some free ones each month and sells more. Think of them as the cost of an envelope — you pay to put your letter on the client\'s desk, whether or not they open it.',
    'توكنز بتصرفها عشان تبعت proposal. أب-وورك بتديك شوية ببلاش كل شهر وبتبيع كمان. اعتبرها تمن الظرف — بتدفع عشان الجواب يوصل مكتب الكلاينت، سواء فتحه أو لأ.'],
  ['Proposal', 'Proposal',
    'Your application to a job. A short letter plus your rate. The client sees only the first couple of sentences until they click.',
    'الطلب اللي بتقدمه على شغلانة. جواب قصير مع سعرك. الكلاينت مبيشوفش غير أول جملتين لحد ما يدوس.'],
  ['JSS', 'JSS',
    'Job Success Score. A percentage on your profile showing how happy your past clients were. The most important number you own on Upwork.',
    'اختصار لـ Job Success Score. نسبة مئوية على البروفايل بتقول الكلاينتس اللي اشتغلت معاهم كانوا مبسوطين قد إيه. أهم رقم بتملكه على أب-وورك.'],
  ['Milestone', 'Milestone',
    'A chunk of a fixed-price job with its own price and deadline. The client funds it before you start, so the money is already set aside.',
    'جزء من شغلانة بسعر ثابت، ليه سعره ومعاده. الكلاينت بيحط فلوسه قبل ما تبدأ، فالفلوس محجوزة خلاص.'],
  ['Escrow', 'Escrow',
    'The holding account where a funded milestone sits. Not the client\'s account, not yours — Upwork holds it until the work is approved. This is your main protection.',
    'الحساب اللي الفلوس بتستنى فيه. لا حساب الكلاينت ولا حسابك — أب-وورك ماسكاها لحد ما الشغل يتقبل. دي حمايتك الأساسية.'],
  ['Top Rated', 'Top Rated',
    'A badge for freelancers who keep a high JSS and steady earnings for months. It puts a mark on your profile clients look for.',
    'بادچ للفريلانسر اللي محافظ على JSS عالي ودخل ثابت لشهور. بتحط علامة على بروفايلك الكلاينتس بيدوروا عليها.'],
  ['Boost', 'Boost',
    'Paying extra Connects to push your proposal into the top slots of the client\'s list. It is an auction, and most people bid without doing the math.',
    'إنك تدفع Connects زيادة عشان الـ proposal بتاعك يطلع في أول القايمة عند الكلاينت. دي مزايدة، وأغلب الناس بتزايد من غير ما تحسب.'],
  ['Private feedback', 'الفيدباك المخفي',
    'A rating the client gives you that you never see. It feeds your JSS. This is why a client can leave five public stars while your score still drops.',
    'تقييم الكلاينت بيديهولك وإنت عمرك ما هتشوفه. بيأثر على الـ JSS. عشان كده ممكن كلاينت يديك ٥ نجوم علنية والـ score بتاعك ينزل.'],
  ['Fixed price vs Hourly', 'سعر ثابت ولا بالساعة',
    'Fixed price: an agreed sum for an agreed outcome, paid by milestone. Hourly: paid per hour with Upwork\'s time tracker running. Beginners are usually safer on small fixed-price jobs.',
    'سعر ثابت: مبلغ متفق عليه مقابل نتيجة متفق عليها، بيتدفع على milestones. بالساعة: بتتدفع بالساعة والـ tracker شغال. المبتدئ غالباً أأمن على شغلانات صغيرة بسعر ثابت.'],
  ['Client spend', 'مصروف الكلاينت',
    'The total a client has paid on Upwork before. A client with $10K+ spent and payment verified is a much safer bet than a brand new account.',
    'إجمالي اللي الكلاينت دفعه على أب-وورك قبل كده. كلاينت صارف فوق ١٠ آلاف دولار و payment verified أأمن بكتير من حساب جديد خالص.'],
];

/* ============================================================ LESSONS */

/* ---- Module 00 ---- */
const L001 = {
  id: '0.1', mins: 8, tool: null,
  en: {
    title: 'What Upwork actually is, in eight minutes',
    lede: 'Before any tactics: the machine you are about to work inside, described once, properly.',
    outcome: 'You can explain Upwork to a friend without using a word you do not understand.',
    blocks: [
      P('Upwork is a marketplace where businesses post work and freelancers apply for it. That is the whole idea. Everything else — the badges, the scores, the tokens — exists to solve one problem the marketplace has: <strong>a client cannot tell who is good.</strong>',
        'أب-وورك سوق. شركات بتنزل شغل، وفريلانسرز بيقدّموا عليه. دي الفكرة كلها. وأي حاجة تانية — البادچات، الـ scores، التوكنز — موجودة عشان تحل مشكلة واحدة عند السوق: <strong>الكلاينت مش عارف مين الكويس.</strong>'),
      P('You cannot shake hands with someone in Cairo from an office in Texas. So the platform builds trust out of numbers instead: how many people hired you, how happy they were, how much money passed through, whether you disappeared halfway. Every feature you are about to learn is one of those numbers.',
        'محدش هيسلّم بإيده على حد في القاهرة وهو قاعد في تكساس. فالمنصة بتبني الثقة بالأرقام: كام واحد عيّنك، كانوا مبسوطين قد إيه، عدّى كام فلوس، اختفيت في النص ولا لأ. كل feature هتتعلمها هي رقم من دول.'),
      PULL('The platform is not judging your talent. It is measuring your track record. Those are different things, and only one of them is under your control this month.',
        'المنصة مش بتحكم على موهبتك. بتقيس تاريخك. دول حاجتين مختلفين، وواحدة بس منهم تحت إيدك الشهر ده.'),
      H('The five things that exist and why', 'الخمس حاجات اللي موجودة وليه'),
      STEPS([
        ['Your profile', 'A page with a title, a description, your rate, and samples of work. This is what the search engine reads. If the words a client types are not on your page, you do not exist to them.'],
        ['Connects', 'Tokens you spend to apply. They exist to stop 5,000 people applying to every job. You get some free monthly and can buy more.'],
        ['Proposals', 'Your application. Short letter, your price. The client sees roughly two sentences before deciding whether to click.'],
        ['Contracts & escrow', 'Once hired, the money is placed with Upwork before you start — not with the client. That is your protection, and the reason you never work off-platform.'],
        ['Feedback & JSS', 'When a job ends, the client rates you publicly and privately. Those ratings become a percentage on your profile. That percentage decides how easy your next job is.'],
      ], [
        ['البروفايل', 'صفحة فيها عنوان ووصف وسعرك وشغل سابق. ده اللي محرك البحث بيقراه. لو الكلمات اللي الكلاينت بيكتبها مش موجودة في صفحتك، إنت غير موجود بالنسباله.'],
        ['الـ Connects', 'توكنز بتصرفها عشان تقدّم. موجودة عشان تمنع ٥ آلاف واحد يقدّموا على كل شغلانة. بتاخد شوية ببلاش كل شهر وتقدر تشتري كمان.'],
        ['الـ Proposals', 'طلبك. جواب قصير وسعرك. الكلاينت بيشوف حوالي جملتين وبعدين يقرر يدوس ولا لأ.'],
        ['العقود والـ escrow', 'أول ما تتعيّن، الفلوس بتتحط عند أب-وورك قبل ما تبدأ — مش عند الكلاينت. دي حمايتك، وده السبب اللي يخليك عمرك ما تشتغل بره المنصة.'],
        ['الفيدباك والـ JSS', 'لما الشغلانة تخلص، الكلاينت بيقيّمك علني ومخفي. والتقييمات دي بتبقى نسبة على بروفايلك. والنسبة دي بتحدد الشغلانة الجاية هتبقى سهلة قد إيه.'],
      ]),
      NOTE('The one rule that gets accounts banned', 'القاعدة اللي بتقفل الحسابات',
        'Taking payment outside Upwork with a client you met on Upwork breaks the rules and can close your account permanently. The escrow that protects you only works while the money moves through the platform. Never let a client talk you off it, however friendly they sound.',
        'إنك تاخد فلوس بره أب-وورك من كلاينت قابلته عليها بيكسر الشروط وممكن يقفل حسابك للأبد. الـ escrow اللي بيحميك بيشتغل بس والفلوس ماشية جوه المنصة. متسبش أي كلاينت يقنعك تخرج، مهما كان لطيف.'),
      TODO(6, [
        'Open upwork.com and create the account if you have not.',
        'Do not write anything on your profile yet. Just look at three job posts in any category you might work in.',
        'For each, write down one thing you do not understand. Bring that list to Lesson 0.2.',
      ], [
        'افتح upwork.com واعمل الحساب لو لسه.',
        'متكتبش أي حاجة في البروفايل لسه. بس بص على ٣ شغلانات في أي مجال ممكن تشتغل فيه.',
        'ولكل واحدة، اكتب حاجة واحدة مش فاهمها. وهات القايمة دي في الدرس ٠.٢.',
      ]),
    ]
  },
  ar: {}
};

const L002 = {
  id: '0.2', mins: 12, tool: null,
  en: {
    title: 'Get verified before it costs you a job',
    lede: 'Verification is boring until it blocks a contract at the worst possible moment. Do it on day one.',
    outcome: 'Your identity and payment method are verified, or the request is submitted.',
    blocks: [
      P('Upwork will eventually ask you to prove you are a real person. It may happen when you create the account, when you win your first contract, or months later at random. The timing is not yours to choose — but the preparation is.',
        'أب-وورك هتطلب منك في وقت ما تثبت إنك شخص حقيقي. ممكن يحصل وإنت بتعمل الحساب، أو أول ما تكسب أول عقد، أو بعد شهور فجأة. التوقيت مش بإيدك — بس التحضير أيوه.'),
      P('Freelancers lose contracts to this. A client is ready to hire, the account gets flagged mid-conversation, and the work goes to whoever was second in line. The fix costs twenty minutes on a quiet day.',
        'في ناس ضيّعت عقود بسبب ده. الكلاينت جاهز يعيّن، والحساب يتوقف في نص الكلام، والشغل يروح للي كان تاني في الطابور. والعلاج بيتعمل في عشرين دقيقة في يوم فاضي.'),
      H('What to have ready', 'اللي تجهّزه'),
      STEPS([
        ['A government ID', 'Passport or national ID. The name on it must match the name on your Upwork profile exactly — this is the single most common rejection reason for Arabic-speaking users, where the ID is in Arabic and the profile is in Latin letters.'],
        ['Your real full name, spelled the way your ID spells it', 'Not a nickname, not a brand name. If your passport says Fady George, your profile says Fady George.'],
        ['A phone number that receives SMS', 'Egyptian numbers work. Keep it reachable — verification codes expire.'],
        ['A payment method', 'You will connect this properly in Module 5. For now, know that the name on your payout account must also match your profile name.'],
      ], [
        ['بطاقة رسمية', 'باسبور أو بطاقة رقم قومي. الاسم اللي عليها لازم يطابق الاسم في بروفايل أب-وورك بالظبط — ودي أكتر سبب رفض للناس اللي بتتكلم عربي، لما البطاقة بالعربي والبروفايل بحروف لاتينية.'],
        ['اسمك الحقيقي كامل، مكتوب زي ما البطاقة كاتباه', 'مش لقب ولا اسم براند. لو الباسبور مكتوب فيه Fady George، البروفايل يبقى Fady George.'],
        ['رقم موبايل بيستقبل رسايل', 'الأرقام المصرية شغالة. وخليه معاك — أكواد التحقق بتنتهي بسرعة.'],
        ['وسيلة استلام فلوس', 'هتوصّلها صح في الموديول ٥. دلوقتي يهمك تعرف إن الاسم على حساب استلام الفلوس لازم يطابق اسم البروفايل برضه.'],
      ]),
      NOTE('The Arabic name trap', 'فخ الاسم العربي',
        'If your ID is in Arabic and your profile is in Latin script, use the exact transliteration printed on your passport, not the one you prefer. Passports print a specific spelling. Copy it letter for letter, including any spelling you personally dislike.',
        'لو بطاقتك بالعربي والبروفايل بحروف لاتينية، استخدم نفس التهجئة المطبوعة في الباسبور بالظبط، مش اللي إنت مفضّلها. الباسبور بيطبع تهجئة معينة. انقلها حرف بحرف، حتى لو مش عاجباك.'),
      TODO(20, [
        'Set your profile name to match your ID exactly.',
        'Photograph your ID in daylight, flat, all four corners visible, no glare.',
        'Complete phone verification now, before anything asks you to.',
      ], [
        'خلّي الاسم في البروفايل مطابق للبطاقة بالظبط.',
        'صوّر البطاقة في نور النهار، مسطّحة، الأربع أركان باينة، ومن غير لمعة.',
        'كمّل تأكيد الموبايل دلوقتي، قبل ما حد يطلبه منك.',
      ]),
    ]
  }, ar: {}
};

const L003 = {
  id: '0.3', mins: 10, tool: null,
  en: {
    title: 'Your keyword sheet — the 15-minute artifact',
    lede: 'The words a client types are the words that must be on your profile. This is that list.',
    outcome: 'A written list of 12–20 phrases real clients are actually searching for.',
    blocks: [
      P('Upwork\'s search does not know you are talented. It knows which words are on your page. Before you write a single sentence of your profile, you need the vocabulary your buyers use — not the vocabulary you use.',
        'بحث أب-وورك مش عارف إنك موهوب. هو عارف الكلمات اللي على صفحتك. قبل ما تكتب جملة واحدة في البروفايل، لازم تعرف كلمات المشترين — مش كلماتك إنت.'),
      P('These are different more often than you think. You call yourself a "visual storyteller." The client types "social media designer." Only one of those two gets typed into a search box.',
        'ودول مختلفين أكتر ما تتخيل. إنت بتسمي نفسك «visual storyteller». والكلاينت بيكتب «social media designer». واحدة بس من الاتنين دول بتتكتب في خانة البحث.'),
      STEPS([
        ['Open the job feed and search your rough field', 'Anything: "content writing", "video editing", "brand design".'],
        ['Open 15 recent posts and copy their titles into a document', 'Not the descriptions. The titles. Titles are written by clients trying to be found.'],
        ['Highlight every phrase that repeats across three or more posts', 'Those repeats are your keywords. Repetition is the signal.'],
        ['Sort them into: what I can do today, what I could do with a week of practice, what I cannot do', 'The first list is your profile. The second is your six-month plan. The third is somebody else\'s job.'],
      ], [
        ['افتح الـ job feed ودوّر على مجالك بشكل عام', 'أي حاجة: «content writing»، «video editing»، «brand design».'],
        ['افتح ١٥ بوست جديد وانقل عناوينهم في ملف', 'مش الوصف. العناوين. العناوين بيكتبها كلاينتس عايزين حد يلاقيهم.'],
        ['علّم على كل عبارة بتتكرر في ٣ بوستات أو أكتر', 'التكرار ده هو الكلمات المفتاحية بتاعتك. التكرار هو الإشارة.'],
        ['رتّبهم: حاجة أقدر أعملها النهاردة، حاجة أقدر أعملها بعد أسبوع تمرين، حاجة مش قادر عليها', 'الأولى دي بروفايلك. والتانية خطة ٦ شهور. والتالتة شغل حد تاني.'],
      ]),
      TODO(15, [
        'Build the list. 12–20 phrases minimum.',
        'Star the five that appear most often.',
        'Keep the file. Module 2 turns it into your profile text word for word.',
      ], [
        'اعمل القايمة. ١٢ لـ ٢٠ عبارة على الأقل.',
        'حط نجمة على الخمسة اللي بيتكرروا أكتر.',
        'واحتفظ بالملف. الموديول ٢ هيحوّله لنص البروفايل كلمة كلمة.',
      ]),
    ]
  }, ar: {}
};

const L004 = {
  id: '0.4', mins: 9, tool: null,
  en: {
    title: 'Pick a rate band you can defend',
    lede: 'Not your final price. The number that stops you attracting the worst clients on the platform.',
    outcome: 'A starting hourly band and a starting fixed-price floor, written down.',
    blocks: [
      P('New freelancers price from fear. They set the lowest number they think anyone might accept, and then discover something nobody warns them about: <strong>the cheapest clients are the hardest clients.</strong>',
        'الفريلانسر الجديد بيسعّر بالخوف. بيحط أقل رقم يفتكر إن حد ممكن يقبله، وبعدين يكتشف حاجة محدش نبّهه ليها: <strong>أرخص الكلاينتس هما أصعب الكلاينتس.</strong>'),
      P('A client paying $5 an hour is buying with their last option, not their first. They negotiate hardest, revise most, and leave the worst private feedback — the rating you cannot see and cannot appeal. Your first five contracts set your score for a year. Do not buy them at the bottom of the market.',
        'الكلاينت اللي بيدفع ٥ دولار في الساعة بيشتري بآخر اختيار عنده، مش أول واحد. بيفاصل أكتر، وبيطلب تعديلات أكتر، وبيسيب أسوأ فيدباك مخفي — التقييم اللي إنت مش شايفه ومش هتقدر تعترض عليه. وأول ٥ عقود عندك بيحددوا الـ score بتاعك لسنة. متشتريهمش من قاع السوق.'),
      PULL('Price at the lower-middle of your niche. Not the floor. The floor is not a discount, it is a filter — and it filters for the clients you least want.',
        'سعّر في النص الأدنى لمجالك. مش القاع. القاع مش خصم، ده فلتر — وبيفلتر لك الكلاينتس اللي إنت أقل حد عايزهم.'),
      TODO(10, [
        'Search your keyword phrases, filter to freelancers with a Top Rated badge, and note ten of their rates.',
        'Take the middle of that range and subtract 30%. That is your opening band.',
        'Write it down with a date. You will raise it after five strong outcomes, not before.',
      ], [
        'دوّر بالكلمات المفتاحية بتاعتك، فلتر على الفريلانسرز اللي معاهم بادچ Top Rated، وسجّل أسعار عشرة منهم.',
        'خد نص المدى ده واطرح ٣٠٪. ده سعرك الابتدائي.',
        'اكتبه وحطله تاريخ. هترفعه بعد ٥ نتايج كويسة، مش قبل كده.',
      ]),
    ]
  }, ar: {}
};

/* ---- Module 03 — proposals ---- */
const L031 = {
  id: '3.1', mins: 11, tool: null,
  en: {
    title: 'Filter the job before you write a word',
    lede: 'Most wasted Connects are spent on jobs that were never winnable. Filtering is the cheapest skill here.',
    outcome: 'A written filter you run on every post before spending a single Connect.',
    blocks: [
      P('Every proposal costs you money and time. Which means the decision that matters most is not <em>how</em> you write — it is <em>whether</em> you apply. A brilliant proposal to a bad job still loses, and it loses with your Connects.',
        'كل proposal بيكلفك فلوس ووقت. يعني أهم قرار مش <em>إزاي</em> تكتب — لأ، <em>هل</em> تقدّم أصلاً. الـ proposal الجامد على شغلانة وحشة بيخسر برضه، وبيخسر بفلوسك.'),
      H('Run this before writing', 'شغّل ده قبل ما تكتب'),
      STEPS([
        ['Payment verified?', 'If not, the client has never proven they can pay. Skip unless everything else is exceptional.'],
        ['How old is the post?', 'Under an hour is ideal. Over 48 hours and a shortlist usually exists already.'],
        ['How many proposals already?', '50+ means you are shouting in a stadium. Under 20 is a real chance.'],
        ['Does the post describe an outcome or just tasks?', 'Clients who describe an outcome know what "done" looks like. Clients who list tasks often do not, and that becomes your revision problem.'],
        ['Client history', 'Money spent, past reviews, hire rate. A client who posts often and hires rarely is a time sink.'],
      ], [
        ['Payment verified؟', 'لو لأ، يبقى الكلاينت عمره ما أثبت إنه يقدر يدفع. عدّيها إلا لو كل حاجة تانية استثنائية.'],
        ['البوست بقاله قد إيه؟', 'أقل من ساعة ده المثالي. فوق ٤٨ ساعة غالباً في shortlist اتعملت خلاص.'],
        ['كام proposal قدّموا؟', '٥٠ فوق يعني إنت بتزعق في استاد. تحت ٢٠ دي فرصة حقيقية.'],
        ['البوست بيوصف نتيجة ولا مجرد مهام؟', 'الكلاينت اللي بيوصف نتيجة عارف «خلصت» شكلها إيه. واللي بيعدد مهام غالباً مش عارف، وده هيبقى مشكلة تعديلات عندك.'],
        ['تاريخ الكلاينت', 'صرف كام، تقييماته، ونسبة تعيينه. الكلاينت اللي بينزل كتير وبيعيّن نادر ده بيضيّع وقتك.'],
      ]),
      NOTE('The rule that saves the most money', 'القاعدة اللي بتوفر أكتر فلوس',
        'If you cannot name, in one sentence, the specific thing about this post that you are uniquely good at — do not apply. That sentence is going to be your opener anyway. If it does not exist, there is no proposal to write.',
        'لو مش قادر تقول في جملة واحدة الحاجة المحددة في البوست ده اللي إنت شاطر فيها بالذات — متقدمش. الجملة دي هي أصلاً هتبقى الأوبنينج بتاعك. ولو مش موجودة، يبقى مفيش proposal تتكتب.'),
      W('connects'),
      TODO(12, [
        'Open your feed and score the first ten posts against the five checks above.',
        'Count how many pass. Most people find it is two or three out of ten.',
        'Apply only to those. Bank the rest of your Connects.',
      ], [
        'افتح الـ feed وقيّم أول ١٠ بوستات على الخمس تشيكات اللي فوق.',
        'عد كام واحد عدّى. أغلب الناس بتلاقي اتنين أو تلاتة من عشرة.',
        'قدّم على دول بس. والباقي وفّر الـ Connects بتاعته.',
      ]),
    ]
  }, ar: {}
};

const L032 = {
  id: '3.2', mins: 9, tool: 'scorer',
  en: {
    title: 'Only two sentences are actually free',
    lede: 'Everything else in your proposal sits behind a click most clients never make.',
    outcome: 'A rewritten opener, scored.',
    blocks: [
      P('Open Upwork as a client for one minute. You do not see proposals — you see a stack of preview cards, each showing a name, a rate, and about two sentences. That is the entire shopfront. Everything you wrote after that sits behind a click, and on a job with 40 applicants most cards never get the click.',
        'افتح أب-وورك بحساب كلاينت لدقيقة. مش هتلاقي proposals — هتلاقي كوّمة كروت preview، كل واحد فيه اسم و rate وحوالي جملتين. دي الفاترينة كلها. وأي حاجة كتبتها بعد كده قاعدة ورا كليك، وفي شغلانة عليها ٤٠ واحد، أغلب الكروت الكليك ده مش بيوصلها.'),
      P('So the opener is not an introduction to the proposal. <strong>It is the proposal.</strong> Everything under it is documentation for a decision that was already made in the preview pane.',
        'يعني الأوبنينج مش مقدمة للـ proposal. <strong>ده الـ proposal نفسه.</strong> وأي حاجة تحته مجرد توثيق لقرار اتاخد خلاص في المربع الصغير ده.'),
      PULL('“I hope this finds you well” costs you one of your two sentences. Nobody has ever been hired for wishing well.',
        '«أتمنى تكون بخير» بتاكل واحدة من الجملتين. مفيش حد اتوظّف في حياته لأنه اتمنى للناس الخير.'),
      P('The fix is mechanical, not literary. Sentence one proves you read the post — a specific detail, never a compliment. Sentence two makes the smallest offer that removes the client\'s risk. That is the whole move.',
        'الحل ميكانيكي، مش أدبي. الجملة الأولى تثبت إنك قريت البوست — تفصيلة محددة، مش مجاملة. الجملة التانية تقدّم أصغر عرض ممكن يشيل عن الكلاينت الريسك. دي الحركة كلها.'),
      COMPARE(
        ['Archived in 3 seconds',
          '<span class="no">Dear Hiring Manager, I hope this message finds you well.</span> I am a highly motivated copywriter with 7+ years of experience delivering high-quality results for clients across many industries.',
          'No evidence the post was opened. Two sentences spent on the client\'s mood and the writer\'s self-esteem.'],
        ['اتأرشف في ٣ ثواني',
          '<span class="no">عزيزي المسؤول عن التوظيف، أتمنى أن تصلك رسالتي وأنت بخير.</span> أنا كوبيرايتر متحمس جداً وعندي أكتر من ٧ سنين خبرة في تقديم نتائج عالية الجودة لعملاء في مجالات كتير.',
          'مفيش دليل إنه فتح البوست. جملتين اتصرفوا على مزاج الكلاينت وثقة الكاتب في نفسه.'],
        ['Hired at $2,400',
          '<span class="ok">Your pricing page asks for a credit card before the demo — that is where the drop is, not the headline.</span> Send me the page and I will rewrite the hero and the pricing block for $180 as a first milestone.',
          'Sentence one is a diagnosis only someone who opened the site could write. Sentence two shrinks the risk to $180 and hands the client the exit.'],
        ['اتعيّن بـ ٢٤٠٠$',
          '<span class="ok">صفحة الأسعار عندكم بتطلب كريدت كارد قبل الديمو — دي نقطة التسريب، مش الهيدلاين.</span> ابعتلي الصفحة وأنا أعيد كتابة الـ hero وبلوك الأسعار بـ ١٨٠$ كأول milestone.',
          'الجملة الأولى تشخيص محدش يقدر يكتبه غير اللي فتح الموقع. والتانية بتنزّل الريسك لـ ١٨٠$ وبتدي الكلاينت باب خروج.']
      ),
      W('scorer'),
      TODO(12, [
        'Open the last three proposals you sent.',
        'Delete every sentence before your first specific detail.',
        'Rewrite sentence two as an offer under $200.',
        'Run all three through the scorer above.',
      ], [
        'افتح آخر ٣ proposals بعتّهم.',
        'امسح كل جملة قبل أول تفصيلة محددة.',
        'اكتب الجملة التانية من تاني كعرض تحت ٢٠٠$.',
        'وعدّي التلاتة على الـ scorer اللي فوق.',
      ]),
      FAQ([
        ['What if the post has no detail to react to?', 'وطب لو البوست مفيهوش تفاصيل أرد عليها؟',
          'React to the company instead — their site, their pricing page, their last three posts. If there is genuinely nothing and no company named, treat it as a filtering signal.',
          'رد على الشركة نفسها — موقعهم، صفحة الأسعار، آخر ٣ بوستات. ولو فعلاً مفيش أي حاجة ولا حتى اسم شركة، خد دي كإشارة إنك تفلترها.'],
        ['Is a $180 first milestone too cheap?', 'مش الـ ١٨٠$ كأول milestone رخيصة؟',
          'It is not a rate, it is a door. The milestone prices the client\'s risk, not your hour.',
          'دي مش rate، دي باب. الـ milestone بتسعّر ريسك الكلاينت، مش الساعة بتاعتك.'],
      ]),
    ]
  }, ar: {}
};

/* ---- Module 05 — money into Egypt ---- */
const L051 = {
  id: '5.1', mins: 10, tool: null,
  en: {
    title: 'When the money is actually yours',
    lede: 'Between "the client approved it" and "it is in my bank" there are three waits. Know them before you promise anyone anything.',
    outcome: 'A written timeline from approval to cash in hand, for your own setup.',
    blocks: [
      P('New freelancers plan their month around the day a client approves the work. That is not the day you get paid, and the gap surprises people who have already spent it.',
        'الفريلانسر الجديد بيرتّب شهره على اليوم اللي الكلاينت بيوافق فيه على الشغل. وده مش يوم ما بتقبض، والفرق ده بيفاجئ ناس كتير صرفته خلاص.'),
      P('There are three separate waits, and they stack: a security period Upwork holds new funds for, then your withdrawal schedule, then your payout provider\'s own transfer time. Each is short. Together they are not.',
        'في تلات فترات انتظار منفصلة، وبتتجمع فوق بعض: فترة أمان أب-وورك بتحجز فيها الفلوس الجديدة، وبعدين معاد السحب بتاعك، وبعدين مدة التحويل عند الشركة اللي بتستلم منها. كل واحدة قصيرة. ومع بعض لأ.'),
      NOTE('Checked against Upwork, August 2026', 'متراجع من أب-وورك، أغسطس ٢٠٢٦',
        'Hold periods and withdrawal schedules are set by Upwork and change. Before you rely on a date, check your own Reports → Transactions page rather than trusting any course, including this one.',
        'فترات الحجز ومعاد السحب أب-وورك هي اللي بتحددهم وبيتغيروا. قبل ما تعتمد على تاريخ، افتح Reports ← Transactions في حسابك إنت بدل ما تصدّق أي كورس، بما فيهم ده.'),
      TODO(10, [
        'Find your own hold period in Upwork\'s settings, not from memory.',
        'Write the three waits down as a single number of days.',
        'Add five days. That is the date you can safely promise anyone.',
      ], [
        'دوّر على فترة الحجز بتاعتك إنت في إعدادات أب-وورك، مش من دماغك.',
        'اكتب التلات فترات كرقم واحد بالأيام.',
        'زوّد ٥ أيام. ده التاريخ اللي تقدر توعد بيه أي حد وإنت مطمن.',
      ]),
    ]
  }, ar: {}
};

const L052 = {
  id: '5.2', mins: 14, tool: 'payout',
  en: {
    title: 'Every payout route into Egypt, priced honestly',
    lede: 'The headline fee is never the real cost. The real cost is the fee plus the exchange rate you did not choose.',
    outcome: 'One chosen route, with its true total cost calculated on your own monthly figure.',
    blocks: [
      P('Ask an Egyptian freelancer what withdrawing costs and they will quote you a percentage. Ask them what they actually received last month and the number is always worse. The gap is the exchange rate.',
        'اسأل أي فريلانسر مصري السحب بيكلف كام، هيقولك نسبة. اسأله استلم كام فعلاً الشهر اللي فات، الرقم دايماً أوحش. والفرق ده سعر الصرف.'),
      P('Every route charges you twice: once as a visible fee, and once as a spread between the real exchange rate and the one they give you. The second charge is larger and nobody advertises it.',
        'كل طريقة بتحاسبك مرتين: مرة رسوم باينة، ومرة فرق بين سعر الصرف الحقيقي والسعر اللي بيدوهولك. والتانية أكبر ومحدش بيعلن عنها.'),
      PULL('The question is not "what is the fee." It is "how many pounds land in my account for every hundred dollars I earned."',
        'السؤال مش «الرسوم كام». السؤال «كام جنيه بينزل حسابي مقابل كل مية دولار كسبتهم».'),
      W('payout'),
      NOTE('Being honest about this lesson', 'أمانة بخصوص الدرس ده',
        'Fees, limits and Egyptian currency rules move constantly, and several published comparisons are written by companies selling one of the options. Every figure in the calculator above is a starting assumption you should replace with the number your own provider quotes you this week. The method is the lesson; the numbers are yours to check.',
        'الرسوم والحدود وقواعد العملة في مصر بتتغير باستمرار، وكذا مقارنة منشورة مكتوبة من شركات بتبيع واحدة من الاختيارات دي. كل رقم في الكالكوليتور اللي فوق هو افتراض مبدئي المفروض تستبدله بالرقم اللي شركتك بتقولهولك الأسبوع ده. الطريقة هي الدرس؛ والأرقام دي مسؤوليتك تتأكد منها.'),
      TODO(15, [
        'Take last month\'s earnings, or $500 if you have not earned yet.',
        'Run it through the calculator on two different routes.',
        'Call or chat with one provider and ask for the current total: receiving fee, withdrawal fee, and the exact EGP rate today. Replace the assumption.',
      ], [
        'خد أرباح الشهر اللي فات، أو ٥٠٠ دولار لو لسه مكسبتش.',
        'عدّيها على الكالكوليتور بطريقتين مختلفين.',
        'كلّم شركة منهم واسأل على الإجمالي الحالي: رسوم الاستلام، ورسوم السحب، وسعر الجنيه بالظبط النهاردة. وبدّل الافتراض.',
      ]),
    ]
  }, ar: {}
};

/* ---- Module 07 — JSS ---- */
const L071 = {
  id: '7.1', mins: 10, tool: 'jss',
  en: {
    title: 'JSS, explained like you have never seen Upwork',
    lede: 'One number decides how hard your next job is to get. Here is what it is, in plain words.',
    outcome: 'You can explain JSS to someone else and name the three things that move it.',
    blocks: [
      PLAIN('JSS stands for Job Success Score. It is a percentage — like 93% — shown on your profile. It answers one question for the client: <strong>of everyone this person has worked with, how many walked away happy?</strong>',
        'الـ JSS اختصار لـ Job Success Score. دي نسبة — زي ٩٣٪ — بتظهر على بروفايلك. وبتجاوب على سؤال واحد عند الكلاينت: <strong>من كل الناس اللي اشتغل معاهم، كام واحد مشي وهو مبسوط؟</strong>'),
      P('Think of a driver rating in a ride app. You do not read every review — you glance at the number and decide. Clients on Upwork do exactly that, and they do it in about two seconds.',
        'فكّر في تقييم السواق في تطبيق مشاوير. إنت مبتقراش كل تعليق — بتبص على الرقم وتقرر. والكلاينتس على أب-وورك بيعملوا كده بالظبط، وفي حوالي ثانيتين.'),
      H('Where the number comes from', 'الرقم بييجي منين'),
      P('When a contract ends, the client rates you <strong>twice</strong>. Once publicly — the stars everyone can see. And once <strong>privately</strong> — a question you will never see the answer to. The private one feeds your JSS.',
        'لما العقد يخلص، الكلاينت بيقيّمك <strong>مرتين</strong>. مرة علنية — النجوم اللي كله بيشوفها. ومرة <strong>مخفية</strong> — سؤال إنت عمرك ما هتشوف إجابته. والمخفية دي هي اللي بتأثر على الـ JSS.'),
      PULL('This is why a client can leave you five public stars and a thank-you message, and your score still falls the next day.',
        'وعشان كده ممكن كلاينت يسيبلك ٥ نجوم وكلمة شكر، والـ score بتاعك ينزل تاني يوم.'),
      H('What Upwork tells us', 'اللي أب-وورك بتقوله'),
      STEPS([
        ['It is roughly successes minus failures, divided by everything', 'Good outcomes lift it. Bad outcomes pull it down. Contracts that end with nobody saying anything sit in between.'],
        ['It recalculates every day', 'And it looks at your last 6, 12 and 24 months separately, then shows whichever of those three looks best.'],
        ['Bigger jobs count for more', 'Upwork states plainly that jobs with higher earnings have a bigger impact — in both directions.'],
        ['Long relationships help, and their absence does not hurt', 'A client who keeps rehiring you is a strong positive. Not having one is neutral, not a penalty.'],
      ], [
        ['تقريباً: النجاحات ناقص الفشل، مقسوم على الكل', 'النتايج الكويسة بترفعه. والوحشة بتنزّله. والعقود اللي بتخلص من غير ما حد يقول حاجة بتقعد في النص.'],
        ['بيتحسب كل يوم', 'وبيبص على آخر ٦ و١٢ و٢٤ شهر كل واحدة لوحدها، وبعدين يعرض أحسن رقم في التلاتة.'],
        ['الشغلانات الكبيرة بتتحسب أكتر', 'أب-وورك بتقول بوضوح إن الشغلانات اللي فلوسها أكتر تأثيرها أكبر — في الاتجاهين.'],
        ['العلاقات الطويلة بتساعد، وغيابها مش بيضر', 'الكلاينت اللي بيرجع يعيّنك تاني ده إيجابي قوي. وإنك مش عندك واحد زي ده محايد، مش عقوبة.'],
      ]),
      NOTE('Where the guessing starts — and how this course handles it', 'فين الكلام بيبقى تخمين — وإحنا بنتعامل معاه إزاي',
        'Upwork publishes the shape of the formula but not the weights. It does not say what counts as a failure, how heavily the private score outweighs the public one, or how much a long contract is worth against a short one. Everything you will read online about that is decoded from practitioners, not documented. In this course, anything in that territory is labelled <strong>unverified</strong>, so you always know whether you are reading a fact or a good guess.',
        'أب-وورك بتنشر شكل المعادلة بس مش الأوزان. مش بتقول إيه اللي بيتحسب فشل، ولا الفيدباك المخفي بيغلب العلني بقد إيه، ولا العقد الطويل بيساوي كام قدام القصير. وأي كلام هتقراه على النت عن ده متفكّك من ناس بتشتغل، مش موثّق. وفي الكورس ده أي حاجة من النوع ده مكتوب جنبها <strong>غير مؤكد</strong>، عشان تبقى عارف دايماً بتقرا حقيقة ولا تخمين كويس.'),
      W('jss'),
      TODO(8, [
        'Open your own profile and find the number, or the note saying you do not have one yet.',
        'Play with the simulator above until you can predict which change moves it most.',
        'Write one sentence: which of your current or upcoming contracts carries the most risk to it, and why.',
      ], [
        'افتح بروفايلك ولاقي الرقم، أو الملاحظة اللي بتقول إنك لسه معندكش واحد.',
        'العب في الـ simulator اللي فوق لحد ما تعرف تتوقع أنهي تغيير بيحرّكه أكتر.',
        'واكتب جملة واحدة: أنهي عقد عندك دلوقتي أو جاي فيه أكبر خطر عليه، وليه.',
      ]),
      FAQ([
        ['I am brand new. Do I have a JSS?', 'أنا جديد خالص. عندي JSS؟',
          'No. It appears only after enough completed contracts. Until then clients judge you on your profile, your samples and your proposal — which is exactly why Modules 2 and 3 exist.',
          'لأ. بيظهر بس بعد عدد كافي من العقود المكتملة. ولحد ساعتها الكلاينتس بيحكموا عليك من البروفايل والشغل والـ proposal — وعشان كده بالظبط الموديولز ٢ و٣ موجودين.'],
        ['A client refused to leave feedback. Is that bad?', 'كلاينت رفض يسيب فيدباك. ده وحش؟',
          'It is not a negative outcome, but it is a wasted one. A contract that ends in silence teaches the score nothing while still counting as a contract.',
          'مش نتيجة سلبية، بس نتيجة ضايعة. العقد اللي بيخلص بسكوت مش بيعلّم الـ score حاجة ومع ذلك بيتحسب عقد.'],
      ]),
    ]
  }, ar: {}
};

/* ============================================================ MODULES */
const MODULES = [
  { n: '00', pct: 0,
    en: { title: 'Start here — verified, positioned, and one thing to show tonight',
      desc: 'What Upwork actually is, identity verification before it blocks a contract, your keyword sheet, and a rate band that does not attract the worst clients on the platform.',
      tags: ['Basics', 'Verification', 'Keywords', 'Rates'], time: '39 min' },
    ar: { title: 'ابدأ من هنا — موثّق، وليك مكان، وحاجة تعرضها النهاردة',
      desc: 'أب-وورك إيه بالظبط، وتوثيق الهوية قبل ما يوقفلك عقد، وورقة الكلمات المفتاحية، وفئة سعر متجبلكش أوحش كلاينتس على المنصة.',
      tags: ['الأساسيات', 'التوثيق', 'الكلمات المفتاحية', 'الأسعار'], time: '٣٩ دقيقة' },
    lessons: [L001, L002, L003, L004] },

  { n: '01', pct: 0,
    en: { title: 'The one sentence a client repeats about you',
      desc: 'Specialists get invited, generalists get ignored. You write the sentence a client uses when they forward you to someone else.',
      tags: ['Niche', 'Offer', 'Positioning'], time: '34 min' },
    ar: { title: 'الجملة اللي الكلاينت هيعيدها عنك',
      desc: 'المتخصص بيتدعى، والعمومي بيتتجاهل. هتكتب الجملة اللي الكلاينت هيقولها وهو بيرشّحك لحد تاني.',
      tags: ['النيتش', 'العرض', 'Positioning'], time: '٣٤ دقيقة' },
    lessons: [
      { id: '1.1', mins: 9, en: { title: 'Why specialists get invited and generalists get ignored' }, ar: {} },
      { id: '1.2', mins: 12, en: { title: 'Choosing between the three niches you could plausibly serve' }, ar: {} },
      { id: '1.3', mins: 8, en: { title: 'Writing the forwardable sentence' }, ar: {} },
      { id: '1.4', mins: 5, en: { title: 'The four hedges that make you sound like everyone else' }, ar: {} },
    ] },

  { n: '02', pct: 0,
    en: { title: 'A profile the algorithm can actually find',
      desc: 'Title, the first 200 characters, portfolio titles and skill tags — in the order the index actually reads them.',
      tags: ['SEO', 'Title', 'Portfolio', 'Skill tags'], time: '1 hr 10 min' },
    ar: { title: 'بروفايل الخوارزمية تقدر تلاقيه',
      desc: 'التايتل، وأول ٢٠٠ حرف، وعناوين البورتفوليو، والتاجات — بالترتيب اللي الفهرس بيقراهم بيه فعلاً.',
      tags: ['SEO', 'التايتل', 'البورتفوليو', 'التاجات'], time: 'ساعة و١٠ د' },
    lessons: [
      { id: '2.1', mins: 10, en: { title: 'Turning your keyword sheet into a title' }, ar: {} },
      { id: '2.2', mins: 12, en: { title: 'The first 200 characters carry the most weight' }, ar: {} },
      { id: '2.3', mins: 14, en: { title: 'Portfolio pieces when you have never had a client' }, ar: {} },
      { id: '2.4', mins: 9, en: { title: 'Skill tags, and why you should max them out' }, ar: {} },
      { id: '2.5', mins: 11, en: { title: 'The profile audit: views but no invites' }, ar: {} },
    ] },

  { n: '03', pct: 0,
    en: { title: 'The proposal machine',
      desc: 'Filtering before writing, the two sentences that decide everything, Connects as ad spend, and the boost auction math almost nobody does before bidding.',
      tags: ['Proposals', 'Connects', 'Reply rate', 'Boosting'], time: '1 hr 25 min' },
    ar: { title: 'ماكينة الـ Proposals',
      desc: 'الفلترة قبل الكتابة، والجملتين اللي بيحسموا كل حاجة، والـ Connects كإعلانات، وحسبة مزاد الـ boost اللي محدش بيعملها قبل ما يقدّم.',
      tags: ['Proposals', 'Connects', 'نسبة الردود', 'Boosting'], time: 'ساعة و٢٥ د' },
    lessons: [L031, L032,
      { id: '3.3', mins: 10, en: { title: 'The micro-milestone that closes' }, ar: {} },
      { id: '3.4', mins: 12, en: { title: 'Connects, boosting, and what a bid really costs' }, ar: {} },
      { id: '3.5', mins: 9, en: { title: 'The tracker that tells you what is broken' }, ar: {} },
    ] },

  { n: '04', pct: 0,
    en: { title: 'From reply to signed contract',
      desc: 'The call, the scope, the micro-milestone, and how to price job one so it is not the price you are stuck with on job nine.',
      tags: ['Closing', 'Scoping', 'Pricing'], time: '52 min' },
    ar: { title: 'من الرد لعقد متوقّع',
      desc: 'الكول، وتحديد الـ scope، والـ micro-milestone، وإزاي تسعّر أول شغلانة بحيث ميبقاش ده سعرك في الشغلانة التاسعة.',
      tags: ['القفل', 'الـ Scope', 'التسعير'], time: '٥٢ دقيقة' },
    lessons: [
      { id: '4.1', mins: 11, en: { title: 'Treating the interview as a paid diagnostic' }, ar: {} },
      { id: '4.2', mins: 10, en: { title: 'Writing the scope so revisions have an end' }, ar: {} },
      { id: '4.3', mins: 9, en: { title: 'Funded milestones and the money you never chase' }, ar: {} },
      { id: '4.4', mins: 12, en: { title: 'Red flags that appear only on the call' }, ar: {} },
    ] },

  { n: '05', pct: 0,
    en: { title: 'Getting the money into Egypt',
      desc: 'The part every other course skips. Every working payout route compared on real total cost, the waits before funds move, and how to avoid a forced conversion at a rate you did not choose.',
      tags: ['Payouts', 'Fees', 'EGP', 'Tax'], time: '46 min' },
    ar: { title: 'الفلوس توصلك إزاي في مصر',
      desc: 'الجزء اللي كل الكورسات بتعديه. كل طرق السحب الشغالة مقارنة بالتكلفة الحقيقية، وفترات الانتظار قبل ما الفلوس تتحرك، وإزاي متتحوّلش لجنيه بسعر إنت مختارتوش.',
      tags: ['السحب', 'الرسوم', 'الجنيه', 'الضرايب'], time: '٤٦ دقيقة' },
    lessons: [L051, L052,
      { id: '5.3', mins: 9, en: { title: 'Holding dollars versus converting on arrival' }, ar: {} },
      { id: '5.4', mins: 8, en: { title: 'Declaring foreign income in Egypt: what is actually documented' }, ar: {} },
    ] },

  { n: '06', pct: 0,
    en: { title: 'Delivering like the top 1%',
      desc: 'Read off nine Top Rated Plus profiles ($60K–$800K+ lifetime): the paid diagnostic, the system-level deliverable, the delivery event, and the next engagement pitched inside the handoff.',
      tags: ['Delivery', 'Diagnostics', 'Retention'], time: '1 hr 40 min' },
    ar: { title: 'التسليم بطريقة الـ ١٪ الأوائل',
      desc: 'مقروء من ٩ بروفايلات Top Rated Plus (أرباحهم من ٦٠ لـ ٨٠٠ ألف دولار وأكتر): الـ diagnostic المدفوع، والتسليم على مستوى نظام مش ملف، وحفلة التسليم، والشغلانة الجاية اللي بتتعرض جوه التسليم نفسه.',
      tags: ['التسليم', 'التشخيص', 'الاحتفاظ'], time: 'ساعة و٤٠ د' },
    lessons: [
      { id: '6.1', mins: 12, en: { title: 'Why the top earners charge for the diagnosis' }, ar: {} },
      { id: '6.2', mins: 14, en: { title: 'Shipping a system, not a file' }, ar: {} },
      { id: '6.3', mins: 10, en: { title: 'The delivery as an event, not an attachment' }, ar: {} },
      { id: '6.4', mins: 11, en: { title: 'Revisions: how many, and who decides' }, ar: {} },
      { id: '6.5', mins: 9, en: { title: 'The next job, pitched inside the handoff' }, ar: {} },
    ] },

  { n: '07', pct: 0,
    en: { title: 'The score you cannot see',
      desc: 'What JSS is, what moves it, what Upwork publishes versus what the internet guesses, and the rescue plays for a contract going wrong while you read this.',
      tags: ['JSS', 'Private feedback', 'Risk'], time: '1 hr 05 min' },
    ar: { title: 'الـ Score اللي مش شايفه',
      desc: 'الـ JSS إيه، وإيه اللي بيحركه، وإيه اللي أب-وورك بتنشره مقابل اللي النت بيخمّنه، وخطط إنقاذ لعقد بيتبهدل وإنت بتقرا ده.',
      tags: ['JSS', 'الفيدباك المخفي', 'المخاطر'], time: 'ساعة و٥ د' },
    lessons: [L071,
      { id: '7.2', mins: 11, en: { title: 'The feedback you never see, and how to influence it anyway' }, ar: {} },
      { id: '7.3', mins: 10, en: { title: 'Reading a client for risk before you accept' }, ar: {} },
      { id: '7.4', mins: 12, en: { title: 'Rescue plays for a contract already going wrong' }, ar: {} },
      { id: '7.5', mins: 9, en: { title: 'Ending a contract on purpose instead of in silence' }, ar: {} },
    ] },

  { n: '08', pct: 0,
    en: { title: 'Rates, retainers, and the ladder',
      desc: 'When to raise, how much, what to say, and the engineered path from Top Rated to Top Rated Plus without a single risky contract.',
      tags: ['Pricing', 'Retainers', 'Badges'], time: '1 hr 30 min' },
    ar: { title: 'الأسعار والـ Retainers والسلّم',
      desc: 'إمتى ترفع، وبكام، وتقول إيه، والطريق المحسوب من Top Rated لـ Top Rated Plus من غير عقد واحد فيه مخاطرة.',
      tags: ['التسعير', 'Retainers', 'البادچات'], time: 'ساعة و٣٠ د' },
    lessons: [
      { id: '8.1', mins: 10, en: { title: 'The five-outcome rule for raising your rate' }, ar: {} },
      { id: '8.2', mins: 12, en: { title: 'Turning a happy delivery into a retainer' }, ar: {} },
      { id: '8.3', mins: 11, en: { title: 'What Top Rated actually requires, as a checklist' }, ar: {} },
      { id: '8.4', mins: 13, en: { title: 'Engineering the one large contract' }, ar: {} },
      { id: '8.5', mins: 9, en: { title: 'When to stop bidding and start being invited' }, ar: {} },
    ] },
];

const TOOLS = [
  ['connects', 'Connects ROI calculator', 'حاسبة الـ Connects', '3.1'],
  ['scorer', 'Proposal scorer', 'حاسبة تقييم الـ Proposal', '3.2'],
  ['payout', 'Egypt payout calculator', 'حاسبة سحب الفلوس لمصر', '5.2'],
  ['jss', 'JSS simulator', 'محاكي الـ JSS', '7.1'],
];

/* ============================================================ ARABIC TITLES
   Egyptian Arabic for every lesson. Platform terms stay in English. */
const AR = {
  '0.1': { title: 'أب-وورك إيه بالظبط، في تمن دقايق', lede: 'قبل أي تكتيكات: الماكينة اللي هتشتغل جواها، مشروحة مرة واحدة صح.', outcome: 'تقدر تشرح أب-وورك لصاحبك من غير ما تستخدم كلمة إنت نفسك مش فاهمها.' },
  '0.2': { title: 'وثّق حسابك قبل ما يضيّع منك شغلانة', lede: 'التوثيق ممل لحد ما يوقفلك عقد في أوحش وقت. اعمله من أول يوم.', outcome: 'هويتك ووسيلة الدفع متوثّقين، أو الطلب متبعت.' },
  '0.3': { title: 'ورقة الكلمات المفتاحية — أول حاجة في ١٥ دقيقة', lede: 'الكلمات اللي الكلاينت بيكتبها هي اللي لازم تكون على بروفايلك. دي القايمة دي.', outcome: 'قايمة مكتوبة فيها ١٢ لـ ٢٠ عبارة كلاينتس حقيقيين بيدوروا بيها.' },
  '0.4': { title: 'اختار فئة سعر تقدر تدافع عنها', lede: 'مش سعرك النهائي. الرقم اللي بيمنعك تجيب أوحش كلاينتس على المنصة.', outcome: 'فئة سعر بالساعة وحد أدنى للسعر الثابت، مكتوبين.' },
  '1.1': { title: 'ليه المتخصص بيتدعى والعمومي بيتتجاهل' },
  '1.2': { title: 'تختار إزاي بين تلات نيتشات تقدر تشتغل فيهم' },
  '1.3': { title: 'تكتب الجملة اللي تتبعت لحد تاني' },
  '1.4': { title: 'الأربع تحوّطات اللي بتخلّيك زي أي حد' },
  '2.1': { title: 'تحوّل ورقة الكلمات لتايتل' },
  '2.2': { title: 'أول ٢٠٠ حرف هما الأتقل وزناً' },
  '2.3': { title: 'بورتفوليو وإنت عمرك ما اشتغلت مع كلاينت' },
  '2.4': { title: 'تاجات المهارات، وليه تملاها لآخرها' },
  '2.5': { title: 'مراجعة البروفايل: مشاهدات من غير دعوات' },
  '3.1': { title: 'فلتر الشغلانة قبل ما تكتب حرف', lede: 'أغلب الـ Connects الضايعة بتتصرف على شغلانات ماكانتش هتتكسب أصلاً. الفلترة أرخص مهارة هنا.', outcome: 'فلتر مكتوب بتشغّله على كل بوست قبل ما تصرف Connect واحد.' },
  '3.2': { title: 'جملتين بس هما اللي بيتقروا', lede: 'أي حاجة تانية في الـ proposal قاعدة ورا كليك أغلب الكلاينتس مش بيدوسوه.', outcome: 'أوبنينج مكتوب من تاني، ومتقيّم.' },
  '3.3': { title: 'الـ micro-milestone اللي بتقفل الديل' },
  '3.4': { title: 'الـ Connects والـ boost وتكلفة العرض الحقيقية' },
  '3.5': { title: 'التراكر اللي يقولك إيه اللي باظ' },
  '4.1': { title: 'تعامل مع الإنترفيو كتشخيص مدفوع' },
  '4.2': { title: 'تكتب الـ scope بحيث التعديلات يبقى ليها آخر' },
  '4.3': { title: 'الـ milestones الممولة والفلوس اللي عمرك ما بتجري وراها' },
  '4.4': { title: 'العلامات الحمرا اللي بتبان في الكول بس' },
  '5.1': { title: 'الفلوس بتبقى بتاعتك فعلاً إمتى', lede: 'بين «الكلاينت وافق» و«الفلوس في البنك» في تلات فترات انتظار. اعرفهم قبل ما توعد حد بأي حاجة.', outcome: 'خط زمني مكتوب من الموافقة لحد الفلوس في إيدك، على وضعك إنت.' },
  '5.2': { title: 'كل طرق السحب لمصر، بتكلفتها الحقيقية', lede: 'الرسوم المعلنة عمرها ما بتكون التكلفة الحقيقية. التكلفة الحقيقية هي الرسوم زائد سعر الصرف اللي إنت مختارتوش.', outcome: 'طريقة واحدة مختارة، بتكلفتها الحقيقية محسوبة على رقمك إنت.' },
  '5.3': { title: 'تسيبها دولار ولا تحوّلها أول ما توصل' },
  '5.4': { title: 'الدخل من بره: إيه اللي موثّق فعلاً في مصر' },
  '6.1': { title: 'ليه أكبر الفريلانسرز بياخدوا فلوس على التشخيص' },
  '6.2': { title: 'تسلّم نظام، مش ملف' },
  '6.3': { title: 'التسليم كحدث، مش مرفق' },
  '6.4': { title: 'التعديلات: كام واحدة، ومين اللي بيقرر' },
  '6.5': { title: 'الشغلانة الجاية، بتتعرض جوه التسليم' },
  '7.1': { title: 'الـ JSS مشروح وإنت عمرك ما شفت أب-وورك', lede: 'رقم واحد بيحدد الشغلانة الجاية هتيجي بصعوبة قد إيه. وده هو، بكلام بسيط.', outcome: 'تقدر تشرح الـ JSS لحد تاني وتسمّي التلات حاجات اللي بتحركه.' },
  '7.2': { title: 'الفيدباك اللي مش هتشوفه، وإزاي تأثر عليه برضه' },
  '7.3': { title: 'تقرا الكلاينت وتقيس الخطر قبل ما توافق' },
  '7.4': { title: 'خطط إنقاذ لعقد بيتبهدل خلاص' },
  '7.5': { title: 'تقفل العقد بقرار، مش بسكوت' },
  '8.1': { title: 'قاعدة الخمس نتايج عشان ترفع سعرك' },
  '8.2': { title: 'تحوّل تسليم ناجح لـ retainer' },
  '8.3': { title: 'Top Rated بيطلب إيه بالظبط، كتشيك ليست' },
  '8.4': { title: 'تهندس العقد الكبير الواحد' },
  '8.5': { title: 'إمتى تبطل تقدّم وتبدأ تتدعى' }
};
MODULES.forEach(function (m) {
  m.lessons.forEach(function (l) { if (AR[l.id]) { l.ar = Object.assign(l.ar || {}, AR[l.id]); } });
});

/* ============================================================ FULL LESSONS — modules 1 & 2 */
const FULL = {

'1.1': { mins: 9, en: {
  lede: 'A client is not shopping for talent. They are shopping for the lowest chance of being disappointed.',
  outcome: 'You can say out loud why a narrower version of you gets hired faster than a broader one.',
  blocks: [
    P('Put yourself on the other side. You have $800 and a problem you cannot solve yourself. Forty people apply. You cannot test any of them. You have twenty minutes. What do you actually do?',
      'حط نفسك على الناحية التانية. معاك ٨٠٠ دولار ومشكلة مش عارف تحلها بنفسك. أربعين واحد قدّموا. مش هتقدر تجرّب حد فيهم. وقدامك عشرين دقيقة. هتعمل إيه بالظبط؟'),
    P('You look for the person whose description sounds closest to your exact problem. Not the best one — the <strong>safest</strong> one. Hiring is a risk decision dressed up as a talent decision.',
      'هتدور على الشخص اللي وصفه أقرب حاجة لمشكلتك بالظبط. مش الأحسن — <strong>الأأمن</strong>. التعيين قرار مخاطرة لابس هدوم قرار موهبة.'),
    PULL('“Marketing expert” is a sentence about you. “Brand strategist for skincare brands going premium” is a sentence about them. Only one of those gets forwarded to a colleague.',
      '«خبير ماركتنج» دي جملة عنك إنت. «برَاند استراتيجيست لبراندات سكين كير بتتحول للتير الأعلى» دي جملة عنهم هما. وواحدة بس منهم هي اللي بتتبعت لزميل في الشغل.'),
    H('What is actually happening in the market', 'اللي بيحصل في السوق فعلاً'),
    P('The bottom of every category is collapsing while the top of the same category pays more than it used to. Generic copywriting demand is down about 19%. Meanwhile AI video work is up roughly 329% year on year, AI image generation about 95%, and AI integration work about 178%.',
      'قاع كل مجال بيتهد، وقمة نفس المجال بتدفع أكتر من الأول. الطلب على الكوبيرايتنج العادي نزل حوالي ١٩٪. وفي نفس الوقت شغل الـ AI video طالع حوالي ٣٢٩٪ في السنة، وتوليد الصور بالـ AI حوالي ٩٥٪، ودمج الـ AI في الشغل حوالي ١٧٨٪.'),
    P('Read that correctly. It does not mean "go do AI video." It means the commodity tier of every lane is dying and the judgement tier of every lane is growing. Your job is to sound like the second one.',
      'اقرا الأرقام دي صح. مش معناها «روح اشتغل AI video». معناها إن التير الرخيص في كل مجال بيموت، والتير اللي محتاج حكم وخبرة بيكبر. وشغلتك إنك تبان من التاني.'),
    NOTE('Verify before you quote these', 'اتأكد قبل ما تنقل الأرقام دي',
      'Those demand figures come from the research this course was built on and describe a moment in time. Treat them as direction, not as a number to put in a proposal.',
      'الأرقام دي جاية من البحث اللي الكورس ده مبني عليه وبتوصف لحظة معينة. خدها كاتجاه، مش كرقم تحطه في proposal.'),
    P('One relief before you panic about choosing: <strong>specialising is reversible.</strong> You are not signing anything. Freelancers narrow to get their first ten contracts, then widen from a position of proof. Nobody widens successfully from a position of silence.',
      'وحاجة تريّحك قبل ما تتوتر من الاختيار: <strong>التخصص ممكن ترجع فيه.</strong> إنت مش بتوقّع على حاجة. الفريلانسرز بيضيّقوا عشان يجيبوا أول عشر عقود، وبعدين بيوسّعوا وهما واقفين على دليل. ومحدش وسّع بنجاح وهو واقف على سكوت.'),
    TODO(10, [
      'Write three sentences that finish: "I help ___ get ___".',
      'Read each aloud. Cross out any that could describe a hundred other freelancers.',
      'Keep whichever one made you slightly nervous. That is usually the specific one.',
    ], [
      'اكتب تلات جمل تكمّل: «أنا بساعد ___ يوصل لـ ___».',
      'اقرا كل واحدة بصوت عالي. واشطب أي واحدة ممكن تنطبق على مية فريلانسر تاني.',
      'وخلّي اللي وترتك شوية. دي غالباً اللي محددة.',
    ]),
  ] }, ar: {
  lede: 'الكلاينت مش بيدور على موهبة. بيدور على أقل احتمال إنه يتصدم.',
  outcome: 'تقدر تقول بصوت عالي ليه نسخة أضيق منك بتتعيّن أسرع من نسخة أوسع.' } },

'1.2': { mins: 12, en: {
  lede: 'Three lanes you could plausibly serve. One test that tells you which of them can pay you this quarter.',
  outcome: 'One primary lane and one secondary, chosen against evidence rather than mood.',
  blocks: [
    P('Most people choose a niche by asking what they enjoy. That question has no wrong answer, which is exactly why it decides nothing. Ask a harder one: <strong>which of these can I show proof of within a week, and does anyone in the feed pay well for it?</strong>',
      'أغلب الناس بتختار النيتش بسؤال: أنا بحب إيه؟ والسؤال ده مفيش فيه إجابة غلط، وعشان كده بالظبط مش بيحسم حاجة. اسأل سؤال أصعب: <strong>أنهي واحدة فيهم أقدر أثبتها في أسبوع، وفي حد في الـ feed بيدفع فيها كويس؟</strong>'),
    H('Score each lane on four things', 'قيّم كل مجال على أربع حاجات'),
    STEPS([
      ['Volume', 'Search the lane, filter to the last seven days, and count. Under ten posts a week is a hobby, not a lane.'],
      ['Proof you can manufacture honestly', 'Can you produce a credible sample this week without a client? A spec strategy doc, a rewritten landing page, a 60-second showreel. If no, the lane is further away than it feels.'],
      ['A visible premium tier', 'Open the top-rated freelancers in that search. If everyone is at $12 an hour, the ceiling is real. If some are at $90, there is room above the floor.'],
      ['A three-step ladder', 'A small paid diagnostic, a flagship project, a monthly retainer. If you cannot picture all three, you have picked a task rather than a lane.'],
    ], [
      ['الحجم', 'دوّر على المجال، فلتر على آخر ٧ أيام، وعُد. أقل من ١٠ بوستات في الأسبوع ده هواية، مش مجال.'],
      ['دليل تقدر تصنعه بأمانة', 'تقدر تطلع عيّنة محترمة الأسبوع ده من غير كلاينت؟ استراتيجية تجريبية، لاندينج بيدج معادة الكتابة، شوريل ٦٠ ثانية. لو لأ، يبقى المجال ده أبعد مما إنت حاسس.'],
      ['تير مرتفع باين', 'افتح الفريلانسرز الـ Top Rated في نفس البحث. لو كلهم بـ ١٢ دولار في الساعة، يبقى السقف حقيقي. ولو في ناس بـ ٩٠، يبقى في مساحة فوق القاع.'],
      ['سلّم من تلات درجات', 'تشخيص صغير مدفوع، ومشروع أساسي، وريتينر شهري. لو مش قادر تتخيل التلاتة، يبقى إنت اخترت مهمة مش مجال.'],
    ]),
    H('What the ladder looks like in real lanes', 'السلّم ده شكله إيه في مجالات حقيقية'),
    P('<strong>Strategy:</strong> a brand or social audit at $250–600 that doubles as paid discovery, then a strategy sprint at $1k–5k, then monthly advisory at $500–3k. <strong>Copywriting:</strong> per-asset pricing — a landing page $300–1,500, an email sequence $250–1,200 — then monthly copy support. <strong>Content:</strong> a setup sprint of pillars and a 30-day calendar at $300–800, then monthly packages at $400–1,500. <strong>AI video:</strong> a single spot $300–2k, a campaign package $1k–5k, then a monthly content engine.',
      '<strong>الاستراتيجية:</strong> أوديت للبراند أو للسوشيال بـ ٢٥٠ لـ ٦٠٠ دولار وبيشتغل كـ discovery مدفوع، وبعدين sprint استراتيجي بـ ١٠٠٠ لـ ٥٠٠٠، وبعدين استشارة شهرية بـ ٥٠٠ لـ ٣٠٠٠. <strong>الكوبيرايتنج:</strong> تسعير بالقطعة — لاندينج بيدج ٣٠٠ لـ ١٥٠٠، سلسلة إيميلات ٢٥٠ لـ ١٢٠٠ — وبعدين دعم شهري. <strong>الكونتنت:</strong> sprint تأسيسي فيه الـ pillars وكاليندر ٣٠ يوم بـ ٣٠٠ لـ ٨٠٠، وبعدين باكدجات شهرية بـ ٤٠٠ لـ ١٥٠٠. <strong>فيديو الـ AI:</strong> إعلان واحد ٣٠٠ لـ ٢٠٠٠، وباكدج حملة ١٠٠٠ لـ ٥٠٠٠، وبعدين ماكينة محتوى شهرية.'),
    NOTE('The bilingual advantage nobody uses', 'الميزة اللي محدش بيستغلها',
      'Arabic and English at a genuinely professional level is a narrow talent pool at the quality tier. Gulf and Egyptian brands need it, and global brands localising into the region need it more. If you have it, it belongs in your lane definition, not buried in a languages field.',
      'إنك تشتغل عربي وإنجليزي بمستوى مهني حقيقي — ده بركة صغيرة من الناس على مستوى الجودة العالي. براندات الخليج ومصر محتاجاها، والبراندات العالمية اللي بتتوسع في المنطقة محتاجاها أكتر. لو عندك دي، مكانها في تعريف مجالك، مش مدفونة في خانة اللغات.'),
    TODO(20, [
      'Score your three candidate lanes out of 4 using the checks above.',
      'Pick the highest. Pick a second that shares keywords with it.',
      'Write both ladders out — three prices each. If you cannot price step one, you have not narrowed enough.',
    ], [
      'قيّم التلات مجالات المرشحة من ٤ بالتشيكات اللي فوق.',
      'اختار الأعلى. واختار تاني بيشارك معاه كلمات مفتاحية.',
      'واكتب السلّمين — تلات أسعار لكل واحد. لو مش قادر تسعّر أول درجة، يبقى لسه مضيّقتش كفاية.',
    ]),
  ] }, ar: {
  lede: 'تلات مجالات تقدر تشتغل فيهم. واختبار واحد يقولك أنهي واحد فيهم ممكن يدفعلك الربع سنة ده.',
  outcome: 'مجال أساسي وواحد تاني، متختارين بدليل مش بمزاج.' } },

'1.3': { mins: 8, en: {
  lede: 'The sentence a client repeats when they recommend you to someone else. If it does not exist, neither does the referral.',
  outcome: 'One sentence, in client language, that someone else could repeat accurately.',
  blocks: [
    P('There is a moment you will never witness. A client is asked "do you know anyone who does X?" and answers in one sentence. That sentence is your positioning. You either wrote it, or they improvised it badly.',
      'في لحظة إنت عمرك ما هتشوفها. حد بيسأل الكلاينت بتاعك: «تعرف حد بيعمل كذا؟» وهو بيرد بجملة واحدة. الجملة دي هي الـ positioning بتاعك. يا إما إنت اللي كتبتها، يا إما هو ارتجلها وحشة.'),
    H('The shape', 'الشكل'),
    P('<strong>I help [a specific kind of client] get [a specific outcome] without [the thing they are afraid of].</strong> The third part is the one everyone skips, and it is the part that does the work — because the fear is why they have not hired anyone yet.',
      '<strong>أنا بساعد [نوع محدد من الكلاينتس] يوصلوا لـ [نتيجة محددة] من غير [الحاجة اللي خايفين منها].</strong> الجزء التالت ده اللي الكل بيعديه، وهو اللي بيشتغل فعلاً — لأن الخوف ده هو السبب اللي خلاهم لسه معينوش حد.'),
    COMPARE(
      ['The version that dies',
        '<span class="no">I am a creative professional offering high-quality marketing and design services for businesses across various industries.</span>',
        'Nobody can repeat this. There is no client in it, no outcome, and no fear. It could be forwarded about literally anyone.'],
      ['النسخة اللي بتموت',
        '<span class="no">أنا مبدع بقدّم خدمات ماركتنج وديزاين عالية الجودة لشركات في مجالات مختلفة.</span>',
        'محدش يقدر يعيد الجملة دي. مفيش فيها كلاينت ولا نتيجة ولا خوف. ممكن تتبعت عن أي حد حرفياً.'],
      ['The version that travels',
        '<span class="ok">I help skincare brands moving into the premium tier rewrite how they sound, without the six-week agency process.</span>',
        'A client can repeat this from memory. It names who, what, and the specific fear — the slow agency — that made them hesitate.'],
      ['النسخة اللي بتمشي',
        '<span class="ok">أنا بساعد براندات السكين كير اللي بتتحول للتير الأعلى تعيد صياغة طريقة كلامها، من غير دورة الوكالة اللي بتاخد ٦ أسابيع.</span>',
        'الكلاينت يقدر يعيدها من دماغه. فيها مين، وإيه، والخوف المحدد — الوكالة البطيئة — اللي خلاه يتردد.']
    ),
    NOTE('Use their words, not yours', 'استخدم كلامهم هما، مش كلامك',
      'Clients write "make my brand look premium". Freelancers write "elevate visual identity systems". Both mean the same thing; only one of them gets typed into a search box or repeated over coffee.',
      'الكلاينت بيكتب «عايز البراند يبقى شكله premium». والفريلانسر بيكتب «الارتقاء بأنظمة الهوية البصرية». الاتنين نفس المعنى؛ بس واحدة بس فيهم هي اللي بتتكتب في خانة بحث أو تتقال على فنجان قهوة.'),
    TODO(10, [
      'Write your sentence using the three-part shape.',
      'Send it to one person who does not know your work and ask them to repeat it back an hour later.',
      'If they cannot, it is too long or too abstract. Cut until they can.',
    ], [
      'اكتب جملتك بالشكل اللي من تلات أجزاء.',
      'ابعتها لحد مش عارف شغلك واطلب منه يعيدها عليك بعد ساعة.',
      'لو مقدرش، يبقى طويلة أو مجردة زيادة. اقص لحد ما يقدر.',
    ]),
  ] }, ar: {
  lede: 'الجملة اللي الكلاينت بيعيدها وهو بيرشحك لحد تاني. لو مش موجودة، يبقى الترشيح مش موجود.',
  outcome: 'جملة واحدة، بكلام الكلاينتس، حد تاني يقدر يعيدها صح.' } },

'1.4': { mins: 6, en: {
  lede: 'Four phrases that appear in almost every losing profile. Each one is a request for the client to do your thinking.',
  outcome: 'Your positioning sentence, with every hedge removed.',
  blocks: [
    P('Hedges feel safe. They are the words you add when you are afraid of ruling someone out. But every hedge transfers work from you to the reader, and the reader is busy.',
      'التحوّطات بتدّي إحساس بالأمان. دي الكلمات اللي بتضيفها وإنت خايف تستبعد حد. بس كل تحوّط بينقل الشغل منك للقارئ، والقارئ مشغول.'),
    STEPS([
      ['“…and more”', 'This says: I could not decide what I do. Delete it. A list that ends in "and more" is read as a list of things you do badly.'],
      ['“Passionate”', 'Unfalsifiable and unpaid. Nobody has ever chosen a freelancer because they announced enthusiasm. Replace it with a number.'],
      ['“High-quality results”', 'Every single competitor claims this, which makes it noise rather than signal. Name the result instead: what changed, by how much.'],
      ['“Various industries”', 'This is the hedge that costs the most. It reads as "no industry in particular", which is the opposite of the safety a client is shopping for.'],
    ], [
      ['«وأكتر…»', 'دي بتقول: أنا مقدرتش أقرر بعمل إيه. امسحها. القايمة اللي بتنتهي بـ«وأكتر» بتتقري كقايمة حاجات إنت بتعملها وحش.'],
      ['«شغوف»', 'كلمة مش ممكن تتكذّب ومش ممكن تتدفع. مفيش حد في التاريخ اختار فريلانسر لأنه أعلن إنه متحمس. بدّلها برقم.'],
      ['«نتايج عالية الجودة»', 'كل منافس بيقول نفس الكلام، فبقت ضوضا مش إشارة. سمّي النتيجة نفسها: اتغير إيه، وبكام.'],
      ['«مجالات متنوعة»', 'ده أغلى تحوّط. بيتقري «مفيش مجال معين»، وده عكس الأمان اللي الكلاينت بيدور عليه.'],
    ]),
    PULL('Every hedge you delete makes a smaller number of clients much more certain about you. That trade is always worth it.',
      'كل تحوّط بتمسحه بيخلّي عدد أقل من الكلاينتس متأكدين منك أكتر بكتير. والمقايضة دي دايماً تستاهل.'),
    TODO(6, [
      'Paste your sentence into a document.',
      'Delete every one of the four hedges if present.',
      'Read what survives. If it is shorter and scarier, it is working.',
    ], [
      'الصق جملتك في ملف.',
      'امسح أي واحد من الأربع تحوّطات لو موجود.',
      'اقرا اللي فضل. لو بقى أقصر ومخوّف شوية، يبقى شغال.',
    ]),
  ] }, ar: {
  lede: 'أربع عبارات موجودة في كل بروفايل بيخسر. وكل واحدة فيهم طلب من الكلاينت إنه يفكر بدالك.',
  outcome: 'جملة الـ positioning بتاعتك من غير أي تحوّط.' } },

'2.1': { mins: 10, en: {
  lede: 'Seventy to eighty characters that carry more weight per letter than anything else you will write.',
  outcome: 'A profile title built from your keyword sheet, under 80 characters.',
  blocks: [
    P('Your title is doing two jobs at once. It is the strongest keyword signal on your entire profile, and it is the line a human reads before deciding whether to keep reading. Most people write it for neither.',
      'التايتل بتاعك بيعمل شغلانتين في نفس الوقت. هو أقوى إشارة كلمات مفتاحية في البروفايل كله، وهو السطر اللي البني آدم بيقراه قبل ما يقرر يكمّل ولا لأ. وأغلب الناس بتكتبه لا لده ولا لده.'),
    H('The formula', 'المعادلة'),
    P('<strong>[Primary keyword] | [Outcome for the ideal client]</strong>. One primary keyword, exact match, taken straight from your keyword sheet. No adjectives about yourself.',
      '<strong>[الكلمة المفتاحية الأساسية] | [النتيجة للكلاينت المثالي]</strong>. كلمة أساسية واحدة، مطابقة بالظبط، مأخوذة من ورقة الكلمات بتاعتك. ومفيش صفات عن نفسك.'),
    COMPARE(
      ['Weak',
        '<span class="no">Marketing Expert &amp; Creative Professional</span>',
        'No exact-match keyword anyone searches, no client, no outcome. Two adjectives about the writer.'],
      ['ضعيف',
        '<span class="no">خبير ماركتنج ومحترف إبداعي</span>',
        'مفيش كلمة مفتاحية حد بيدوّر بيها، ولا كلاينت، ولا نتيجة. صفتين عن الكاتب.'],
      ['Strong',
        '<span class="ok">Brand &amp; Social Media Strategist | Positioning That Wins Premium Clients</span><br><span class="ok">AI Video Ads &amp; Reels | Concept to Final Cut in 72 Hours</span>',
        'Exact-match term first, then the outcome the buyer wants. The second one also answers the question every client asks second: how fast.'],
      ['قوي',
        '<span class="ok">Brand &amp; Social Media Strategist | Positioning That Wins Premium Clients</span><br><span class="ok">AI Video Ads &amp; Reels | Concept to Final Cut in 72 Hours</span>',
        'المصطلح المطابق الأول، وبعدين النتيجة اللي المشتري عايزها. والتانية كمان بتجاوب على تاني سؤال بيسأله أي كلاينت: بتخلص في قد إيه.']
    ),
    NOTE('Write it in English even for Arabic-speaking clients', 'اكتبه بالإنجليزي حتى لو الكلاينت عربي',
      'Search on Upwork runs on what clients type, and the overwhelming majority type English job titles — including Gulf and Egyptian clients. Your Arabic ability belongs in the overview and in the languages field, where it becomes a filter clients can select.',
      'البحث على أب-وورك شغال على اللي الكلاينتس بيكتبوه، والأغلبية الساحقة بتكتب مسميات إنجليزي — وده شامل كلاينتس الخليج ومصر. وقدرتك على العربي مكانها في الـ overview وفي خانة اللغات، هناك بتبقى فلتر الكلاينت يقدر يختاره.'),
    TODO(12, [
      'Take the five starred phrases from your keyword sheet.',
      'Write three titles using the formula. Count characters — stay under 80.',
      'Read each one as a client who has never heard of you. Keep the one that answers "can this person fix my exact problem" fastest.',
    ], [
      'خد الخمس عبارات اللي حطيت عليها نجمة في ورقة الكلمات.',
      'اكتب تلات تايتلز بالمعادلة. عُد الحروف — خليك تحت ٨٠.',
      'اقرا كل واحد كأنك كلاينت عمره ما سمع عنك. وخلّي اللي بيجاوب أسرع على سؤال «الشخص ده يقدر يحل مشكلتي بالظبط؟».',
    ]),
  ] }, ar: {
  lede: 'من ٧٠ لـ ٨٠ حرف بيشيلوا وزن أكبر من أي حاجة تانية هتكتبها.',
  outcome: 'تايتل مبني من ورقة الكلمات بتاعتك، أقل من ٨٠ حرف.' } },

'2.2': { mins: 12, en: {
  lede: 'The first 200 characters are indexed hardest and shown in search results. They are the only part most people read.',
  outcome: 'An overview whose first two lines carry an outcome and a real number.',
  blocks: [
    P('Two things happen to your first 200 characters that do not happen to the rest of your overview. They are weighted most heavily by search, and they are the preview text a client sees in the results list before clicking anything.',
      'في حاجتين بيحصلوا لأول ٢٠٠ حرف عندك ومش بيحصلوا لباقي الـ overview. بيتحسبوا بأتقل وزن في البحث، وهما النص اللي بيظهر في نتايج البحث قبل ما الكلاينت يدوس على أي حاجة.'),
    P('Which means the most common opening in the world — a warm greeting followed by how much you love what you do — is spent entirely on the part that matters most.',
      'يعني أشهر بداية في الدنيا — تحية دافية وبعدها كلام عن حبك لشغلك — بتتصرف بالكامل على الجزء الأهم.'),
    H('The structure that works', 'الهيكل اللي بيشتغل'),
    STEPS([
      ['Lines 1–2 — who you help, the outcome, one proof number', 'Example: "I build brand and content strategies that took three MENA startups from unknown to category leaders. 40+ campaigns shipped."'],
      ['Middle — two or three offers as scannable blocks', 'Name the actual deliverable. "A 20-page strategy document with positioning, personas, content pillars and a 90-day roadmap" beats any sentence about your process.'],
      ['Proof block — metrics, brands, results', 'Real ones only. One verifiable number outperforms five adjectives, and a fabricated one ends your account.'],
      ['Close — one low-friction call to action', '"Send me your brief and I will reply with three observations, free." A next step that costs the client nothing converts far better than "feel free to reach out".'],
    ], [
      ['أول سطرين — بتساعد مين، والنتيجة، ورقم واحد كدليل', 'مثال: «ببني استراتيجيات براند وكونتنت ودّت تلات ستارت أب في المنطقة من مجهولين لقادة في مجالهم. أكتر من ٤٠ حملة اتنفذت.»'],
      ['النص — عرضين أو تلاتة كبلوكات سهلة القراية', 'سمّي التسليم الفعلي. «دوكيومنت ٢٠ صفحة فيه الـ positioning والـ personas والـ pillars وخطة ٩٠ يوم» أحسن من أي جملة عن طريقتك في الشغل.'],
      ['بلوك الدليل — أرقام وبراندات ونتايج', 'حقيقية بس. رقم واحد يتراجع أقوى من خمس صفات، والرقم المزوّر بينهي حسابك.'],
      ['القفلة — خطوة واحدة سهلة', '«ابعتلي البريف وأنا أرد بتلات ملاحظات ببلاش.» الخطوة اللي متكلفش الكلاينت حاجة بتحوّل أحسن بكتير من «تواصل معايا في أي وقت».'],
    ]),
    NOTE('Length and emojis', 'الطول والإيموچي',
      'Keep the whole overview under about 300 words with real whitespace between blocks — a wall of text is skipped. Emojis as occasional section markers are fine in some lanes and read as spam in premium ones. When unsure, leave them out.',
      'خلّي الـ overview كله تحت ٣٠٠ كلمة تقريباً وسيب مسافات حقيقية بين البلوكات — الحيطة النص بتتعدّى. والإيموچي كعلامات أقسام ماشي في بعض المجالات وبيتقري سبام في المجالات الراقية. ولو مش متأكد، سيبها.'),
    TODO(20, [
      'Write your first two lines. Paste them into a character counter and stop at 200.',
      'Check they contain: who, the outcome, and one number.',
      'Write the two or three offer blocks underneath, each naming a deliverable a client could picture.',
    ], [
      'اكتب أول سطرين. الصقهم في عدّاد حروف ووقّف عند ٢٠٠.',
      'اتأكد إن فيهم: مين، والنتيجة، ورقم واحد.',
      'واكتب تحتيهم العرضين أو التلاتة، كل واحد بيسمّي تسليم الكلاينت يقدر يتخيله.',
    ]),
  ] }, ar: {
  lede: 'أول ٢٠٠ حرف بيتحسبوا بأتقل وزن وبيظهروا في نتايج البحث. وهما الجزء الوحيد اللي أغلب الناس بتقراه.',
  outcome: 'أوفرفيو أول سطرين فيه شايلين نتيجة ورقم حقيقي.' } },

'2.3': { mins: 14, en: {
  lede: 'You need four to eight portfolio pieces and you have never had a client. Both of those are true and neither is a problem.',
  outcome: 'Three portfolio pieces with result-bearing titles, built this week.',
  blocks: [
    P('An empty portfolio loses to a spec portfolio every single time. Not sometimes. The client is not checking whether the work was paid — they are checking whether you can do the thing.',
      'البورتفوليو الفاضي بيخسر قدام البورتفوليو التجريبي في كل مرة. مش أحياناً. الكلاينت مش بيتأكد إن الشغل كان مدفوع — بيتأكد إنك تقدر تعمل الحاجة دي.'),
    PULL('Label spec work honestly and it costs you nothing. Pass it off as a client project and you are one question away from losing the contract and the account.',
      'اكتب إن الشغل تجريبي بأمانة ومش هيكلفك حاجة. اعرضه كأنه شغل كلاينت وإنت على بُعد سؤال واحد من خسارة العقد والحساب.'),
    H('Titles are searchable — so write them as results', 'العناوين بتتبحث — فاكتبها كنتايج'),
    P('Use <strong>[Deliverable] for [industry] — [result]</strong>. "Launch campaign strategy for DTC skincare — 3.2x ROAS" is a title. "Project 3" is a wasted search slot and a wasted click.',
      'استخدم <strong>[التسليم] لـ [المجال] — [النتيجة]</strong>. «استراتيجية حملة إطلاق لبراند سكين كير — ٣.٢ ضعف ROAS» ده عنوان. و«مشروع ٣» ده مكان بحث ضايع وكليكة ضايعة.'),
    H('What counts as proof in your lane', 'إيه اللي بيتحسب دليل في مجالك'),
    STEPS([
      ['Strategy', 'Two or three full strategy documents. A visible framework diagram inside each one sells harder than any amount of text.'],
      ['Copywriting', 'Before-and-after pairs with the result. Then three samples in wildly different brand voices — that range is what kills the "this is just AI output" suspicion on sight.'],
      ['Content', 'Performance screenshots — views, saves, follows. One complete content system artifact. A hook bank. Numbers rule this lane.'],
      ['AI video and visuals', 'A 60–90 second showreel is not optional; it does about 90% of the selling. Then four to six spec spots across recognisable categories.'],
    ], [
      ['الاستراتيجية', 'دوكيومنتين أو تلاتة استراتيجية كاملة. ودياجرام للفريم وورك جوه كل واحد بيبيع أقوى من أي كمية كلام.'],
      ['الكوبيرايتنج', 'قبل وبعد ومعاهم النتيجة. وبعدين تلات عيّنات بأصوات براندات مختلفة تماماً — المدى ده هو اللي بيقتل شك «ده كلام AI» من أول نظرة.'],
      ['الكونتنت', 'سكرين شوتس أداء — مشاهدات، حفظ، متابعين. وحاجة واحدة كاملة كنظام محتوى. وبنك hooks. الأرقام هي اللي بتحكم المجال ده.'],
      ['فيديو وفيجوالز الـ AI', 'شوريل من ٦٠ لـ ٩٠ ثانية مش اختياري؛ بيعمل حوالي ٩٠٪ من البيع. وبعدين من ٤ لـ ٦ إعلانات تجريبية في مجالات معروفة.'],
    ]),
    TODO(25, [
      'Pick three pieces you can honestly make in a week.',
      'Build them. Title each one with the deliverable, the industry, and the result.',
      'Label anything unpaid as a concept project, in the description, plainly.',
    ], [
      'اختار تلات حاجات تقدر تعملها بأمانة في أسبوع.',
      'اعملهم. وسمّي كل واحد بالتسليم والمجال والنتيجة.',
      'واكتب على أي حاجة مش مدفوعة إنها مشروع تجريبي، في الوصف، بوضوح.',
    ]),
  ] }, ar: {
  lede: 'محتاج من ٤ لـ ٨ حاجات في البورتفوليو وإنت عمرك ما اشتغلت مع كلاينت. الاتنين صح ومفيش فيهم مشكلة.',
  outcome: 'تلات شغلانات بعناوين فيها نتيجة، متعملين الأسبوع ده.' } },

'2.4': { mins: 7, en: {
  lede: 'The least interesting field on your profile is a hard search filter. A missing tag makes you invisible for that query.',
  outcome: 'Every skill slot filled with exact-match search terms.',
  blocks: [
    P('Skill tags are not decoration and they are not a summary of who you are. They are filters. When a client narrows a search by a skill you have not tagged, you do not rank badly — you are absent.',
      'تاجات المهارات مش زينة ولا ملخص لشخصيتك. دي فلاتر. لما الكلاينت يفلتر البحث على مهارة إنت محطتهاش، إنت مش بتنزل في الترتيب — إنت مش موجود أصلاً.'),
    P('Which makes the rule simple: <strong>fill every slot you are given.</strong> An empty slot is a query you cannot win.',
      'وده بيخلّي القاعدة بسيطة: <strong>املا كل خانة متاحة.</strong> الخانة الفاضية دي سؤال بحث إنت مش هتكسبه.'),
    NOTE('Tags are search terms, not adjectives', 'التاجات مصطلحات بحث، مش صفات',
      '"Communication", "teamwork" and "creativity" are not things clients filter by. "Landing page copy", "Klaviyo", "brand strategy", "reels editing" and "Arabic localization" are. Pull them from the keyword sheet you built in Module 0, exactly as clients spell them.',
      '«التواصل» و«العمل الجماعي» و«الإبداع» مش حاجات الكلاينتس بتفلتر بيها. لكن «Landing page copy» و«Klaviyo» و«brand strategy» و«reels editing» و«Arabic localization» أيوه. خدهم من ورقة الكلمات اللي عملتها في الموديول ٠، بنفس طريقة كتابة الكلاينتس بالظبط.'),
    TODO(10, [
      'Open your keyword sheet next to your profile.',
      'Fill every skill slot with an exact phrase from it.',
      'If you run out of phrases before slots, search five more job posts — you have not finished the sheet.',
    ], [
      'افتح ورقة الكلمات جنب البروفايل.',
      'املا كل خانة مهارة بعبارة مطابقة منها.',
      'ولو العبارات خلصت قبل الخانات، دوّر على ٥ بوستات كمان — يبقى الورقة لسه مخلصتش.',
    ]),
  ] }, ar: {
  lede: 'أقل خانة مثيرة في بروفايلك هي فلتر بحث صريح. والتاج الناقص بيخليك مش موجود في السؤال ده.',
  outcome: 'كل خانة مهارة مليانة بمصطلحات بحث مطابقة.' } },

'2.5': { mins: 11, en: {
  lede: 'Two failures look identical from the inside and need opposite fixes. This tells them apart.',
  outcome: 'A pass or fail verdict on ten lines of your profile, and the worst one fixed today.',
  blocks: [
    P('There are only two ways a profile fails, and confusing them wastes months. <strong>No views</strong> is a keyword problem — the search never surfaced you. <strong>Views but no invites</strong> is a conversion problem — you were surfaced, read, and passed over.',
      'في طريقتين بس البروفايل بيفشل بيهم، والخلط بينهم بيضيّع شهور. <strong>مفيش مشاهدات</strong> دي مشكلة كلمات مفتاحية — البحث أصلاً مطلعكش. <strong>مشاهدات من غير دعوات</strong> دي مشكلة تحويل — إنت طلعت واتقريت واتعديت.'),
    P('The first is fixed in the title and the tags. The second is fixed in the first 200 characters and the portfolio. Rewriting the wrong one is the most common wasted week in freelancing.',
      'الأولى بتتصلح في التايتل والتاجات. والتانية بتتصلح في أول ٢٠٠ حرف وفي البورتفوليو. وإعادة كتابة الحاجة الغلط دي أشهر أسبوع ضايع في الفريلانس.'),
    H('The ten-line audit', 'مراجعة الـ ١٠ سطور'),
    STEPS([
      ['1 — Title', 'Exact-match keyword plus a client outcome?'],
      ['2 — First 200 characters', 'Outcome and proof, with no throat-clearing?'],
      ['3 — Offers', 'Two or three distinct offers, each naming its deliverables?'],
      ['4 — A real number', 'At least one, visible on the first screen?'],
      ['5 — Skill slots', 'All filled, with search terms rather than soft skills?'],
      ['6 — Portfolio', 'Four or more pieces, each with a result-bearing title?'],
      ['7 — Photo and video intro', 'Both present? Fewer than one in ten freelancers has a video — it is the cheapest differentiator on the platform.'],
      ['8 — Completeness', '100%? It gates Rising Talent eligibility and feeds how you are indexed.'],
      ['9 — Rate consistency', 'Does your rate match your positioning? "$8/hr premium strategist" fails on its own contradiction.'],
      ['10 — The human test', 'Read it aloud. Any sentence that sounds like a template is costing you the client who reads carefully.'],
    ], [
      ['١ — التايتل', 'فيه كلمة مفتاحية مطابقة ونتيجة للكلاينت؟'],
      ['٢ — أول ٢٠٠ حرف', 'فيهم نتيجة ودليل من غير كلام تمهيدي؟'],
      ['٣ — العروض', 'عرضين أو تلاتة واضحين، وكل واحد بيسمّي تسليماته؟'],
      ['٤ — رقم حقيقي', 'واحد على الأقل، باين في أول شاشة؟'],
      ['٥ — خانات المهارات', 'كلها مليانة، بمصطلحات بحث مش مهارات شخصية؟'],
      ['٦ — البورتفوليو', 'أربع حاجات أو أكتر، كل واحدة عنوانها فيه نتيجة؟'],
      ['٧ — الصورة والفيديو', 'الاتنين موجودين؟ أقل من واحد من كل عشرة فريلانسرز عنده فيديو — ده أرخص فرق على المنصة.'],
      ['٨ — اكتمال البروفايل', '١٠٠٪؟ ده بيفتح أهلية Rising Talent وبيأثر على طريقة فهرستك.'],
      ['٩ — اتساق السعر', 'سعرك متماشي مع الـ positioning بتاعك؟ «استراتيجي premium بـ ٨ دولار في الساعة» بيفشل بتناقضه هو.'],
      ['١٠ — اختبار البني آدم', 'اقراه بصوت عالي. أي جملة صوتها زي القالب دي بتكلفك الكلاينت اللي بيقرا بتركيز.'],
    ]),
    NOTE('One profile, several offers', 'بروفايل واحد، أكتر من عرض',
      'Separate specialised profiles are no longer how this works — a single profile now has to carry every keyword cluster you serve. Segment the overview by offer so each block keeps its own keywords together. Two or three offers is the ceiling; beyond that you are a generalist again, and generalists get read past.',
      'البروفايلات المتخصصة المنفصلة مبقتش هي الطريقة — البروفايل الواحد دلوقتي لازم يشيل كل مجموعات الكلمات اللي بتخدمها. قسّم الـ overview حسب العرض عشان كل بلوك يحتفظ بكلماته مع بعض. وعرضين أو تلاتة هو السقف؛ وبعد كده بترجع عمومي، والعمومي بيتعدّى.'),
    TODO(15, [
      'Score all ten lines, pass or fail. Be harsh.',
      'Fix the worst-scoring one today, not all ten.',
      'Note today\'s date and your current profile views. Check again in fourteen days.',
    ], [
      'قيّم العشر سطور كلهم، نجح ولا رسب. وكن قاسي.',
      'صلّح الأسوأ فيهم النهاردة، مش العشرة.',
      'وسجّل تاريخ النهاردة وعدد مشاهدات بروفايلك. وراجع تاني بعد ١٤ يوم.',
    ]),
  ] }, ar: {
  lede: 'فشلين شكلهم واحد من جوه ومحتاجين حلول متعاكسة. وده اللي بيفرّق بينهم.',
  outcome: 'حكم نجاح أو رسوب على ١٠ سطور في بروفايلك، والأسوأ فيهم متصلّح النهاردة.' } }

};
MODULES.forEach(function (m) {
  m.lessons.forEach(function (l) {
    var f = FULL[l.id];
    if (!f) return;
    if (f.mins) l.mins = f.mins;
    if (f.tool) l.tool = f.tool;
    l.en = Object.assign({}, l.en, f.en);
    l.ar = Object.assign({}, l.ar || {}, f.ar || {});
  });
});

/* ============================================================ FULL LESSONS — modules 3 & 4 */
const FULL2 = {

'3.3': { mins: 10, en: {
  lede: 'One small paid step with a defined ending. It is the single highest-converting move in a proposal, and almost nobody offers it.',
  outcome: 'A micro-milestone written for your own offer, with a price and a deadline.',
  blocks: [
    P('A client hiring a stranger is making a bet they cannot hedge. They do not know if you will vanish, misunderstand them, or produce something unusable. Every proposal that asks for the whole project asks them to take that bet at full size.',
      'الكلاينت اللي بيعيّن حد مش عارفه بيراهن من غير ما يقدر يوزّع المخاطرة. مش عارف هتختفي، ولا هتفهمه غلط، ولا هتطلع حاجة متنفعش. وكل proposal بيطلب المشروع كله بيطلب منه يراهن بالحجم الكامل.'),
    P('The micro-milestone shrinks the bet instead of arguing about it. <strong>A small, concrete, fast first step with a defined "done".</strong>',
      'الـ micro-milestone بتصغّر الرهان بدل ما تتجادل عليه. <strong>خطوة أولى صغيرة ومحددة وسريعة وليها معنى واضح لـ«خلصت».</strong>'),
    PULL('“Step one: I audit your current checkout and send a one-page findings memo within 48 hours. If you like the direction, we roll into the full project.”',
      '«الخطوة الأولى: أراجع صفحة الدفع الحالية وأبعتلك ورقة واحدة بالملاحظات في خلال ٤٨ ساعة. ولو الاتجاه عجبك، نكمّل المشروع كله.»'),
    H('Why it works on three levels at once', 'ليه بتشتغل على تلات مستويات في نفس الوقت'),
    STEPS([
      ['It removes the client\'s risk', 'They are no longer deciding whether to trust you with a project. They are deciding whether to spend a small amount to find out.'],
      ['It starts the relationship as a paid engagement', 'You are not auditioning for free. The diagnosis itself is the product, which is exactly how the highest earners on the platform open every engagement.'],
      ['It builds the long contract that protects your score', 'A contract that continues and keeps paying counts for far more than a one-off. Starting small and extending is structurally better than starting big and ending.'],
    ], [
      ['بتشيل الريسك عن الكلاينت', 'هو مبقاش بيقرر لو هيأتمنك على مشروع. بقى بيقرر لو هيصرف مبلغ صغير عشان يعرف.'],
      ['بتبدأ العلاقة كشغل مدفوع', 'إنت مش بتعمل أوديشن ببلاش. التشخيص نفسه هو المنتج، وده بالظبط اللي أكبر الفريلانسرز على المنصة بيفتحوا بيه كل شغلانة.'],
      ['بتبني العقد الطويل اللي بيحمي الـ score بتاعك', 'العقد اللي بيكمّل وبيدفع بيتحسب أكتر بكتير من شغلانة لمرة واحدة. والبداية صغيرة والتمديد أحسن هيكلياً من البداية الكبيرة والنهاية.'],
    ]),
    NOTE('Free is not a smaller version of paid', 'المجاني مش نسخة أصغر من المدفوع',
      'A paid test task is normal and fine. An unpaid one is not a smaller commitment — it is a different relationship, one where you have already agreed that your judgement is worth nothing. Free work is never a prerequisite for a contract.',
      'المهمة التجريبية المدفوعة عادية وماشية. لكن المجانية مش التزام أصغر — دي علاقة مختلفة، إنت فيها وافقت خلاص إن حكمك ملهوش تمن. والشغل المجاني عمره ما شرط للعقد.'),
    P('Price step one at what makes the decision easy rather than at what your hour is worth. Under $200 for most lanes. You are not selling an hour; you are selling the removal of a doubt.',
      'سعّر الخطوة الأولى بالرقم اللي بيسهّل القرار، مش بالرقم اللي بيساوي ساعتك. تحت ٢٠٠ دولار في أغلب المجالات. إنت مش بتبيع ساعة؛ إنت بتبيع إزالة شك.'),
    TODO(12, [
      'Write your step one: what you look at, what you send back, and by when.',
      'Give it a price under $200 and a deadline under 72 hours.',
      'Write the sentence that connects it to the full project — "if you like the direction, we roll into…".',
    ], [
      'اكتب خطوتك الأولى: هتبص على إيه، وهتبعت إيه، وإمتى.',
      'حطلها سعر تحت ٢٠٠ دولار ومعاد تحت ٧٢ ساعة.',
      'واكتب الجملة اللي بتوصلها بالمشروع كله — «لو الاتجاه عجبك، نكمّل…».',
    ]),
  ] }, ar: {
  lede: 'خطوة واحدة صغيرة مدفوعة وليها نهاية واضحة. أعلى حركة تحويل في الـ proposal، وتقريباً محدش بيعرضها.',
  outcome: 'micro-milestone مكتوبة لعرضك إنت، بسعر ومعاد.' } },

'3.4': { mins: 12, tool: 'connects', en: {
  lede: 'Boosting is an auction. Most people enter it without knowing what they are bidding or what it is worth.',
  outcome: 'A rule for when you boost, written as a number rather than a feeling.',
  blocks: [
    P('Connects are the price of an envelope. Boosting is paying to move your envelope to the top of the pile. Both are advertising spend, and advertising spend without arithmetic is just hope.',
      'الـ Connects تمن الظرف. والـ boost إنك تدفع عشان ظرفك يطلع أول الكوّمة. الاتنين مصاريف إعلانات، ومصاريف إعلانات من غير حسبة دي مجرد أمل.'),
    H('The only boost rule worth having', 'قاعدة الـ boost الوحيدة اللي تستاهل'),
    P('Boost only when all three are true: the job is an exact fit for your lane, the proposal is already strong, and <strong>the expected contract value is at least fifty times the boost cost</strong>. A $6 boost implies a job worth $300 as an absolute floor — realistically you are boosting for jobs above $1,000.',
      'اعمل boost بس لما التلاتة يكونوا صح: الشغلانة مطابقة تماماً لمجالك، والـ proposal قوي خلاص، و<strong>القيمة المتوقعة للعقد على الأقل خمسين ضعف تكلفة الـ boost</strong>. يعني boost بـ ٦ دولار معناه شغلانة بـ ٣٠٠ دولار كحد أدنى مطلق — وعملياً إنت بتعمل boost لشغلانات فوق الألف.'),
    PULL('Boosting amplifies position, not persuasion. It puts a weak proposal in front of more people who will ignore it faster.',
      'الـ boost بيكبّر مكانك، مش إقناعك. بيحط proposal ضعيف قدام ناس أكتر هيتجاهلوه أسرع.'),
    P('There is a second-order effect worth knowing: some experienced clients skip the boosted rows entirely, the same way people skip sponsored search results. Which means organic rank — earned through a healthy interview rate — outlasts anything you can buy.',
      'وفي أثر تاني يستاهل تعرفه: في كلاينتس متمرسين بيعدّوا الصفوف المدفوعة بالكامل، بنفس الطريقة اللي الناس بتعدي بيها نتايج البحث الممولة. يعني الترتيب الطبيعي — اللي بتكسبه بنسبة إنترفيو صحية — بيعيش أطول من أي حاجة تشتريها.'),
    W('connects'),
    H('The counterintuitive part', 'الجزء اللي عكس التوقع'),
    P('Sending fewer, better proposals measurably improves your ranking, because your interview rate is an input to how the platform matches you. Five to ten sniper proposals a week beat a hundred sprayed ones — not morally, mechanically.',
      'إنك تبعت proposals أقل وأحسن ده بيحسّن ترتيبك فعلياً، لأن نسبة الإنترفيو بتاعتك داخلة في طريقة المنصة في المطابقة. من ٥ لـ ١٠ proposals مسدّدة في الأسبوع بيغلبوا مية مرشوشة — مش أخلاقياً، ميكانيكياً.'),
    TODO(10, [
      'Write your boost floor: the minimum contract value that justifies a boost for you.',
      'Look at your last month. How many boosts would that rule have prevented?',
      'Set a weekly Connects budget and treat it as an advertising line, not a lottery ticket.',
    ], [
      'اكتب حد الـ boost بتاعك: أقل قيمة عقد تبرر إنك تعمل boost.',
      'بص على الشهر اللي فات. القاعدة دي كانت هتمنع كام boost؟',
      'وحدد ميزانية Connects أسبوعية وتعامل معاها كبند إعلانات، مش كورقة يانصيب.',
    ]),
  ] }, ar: {
  lede: 'الـ boost مزايدة. وأغلب الناس بتدخلها من غير ما تعرف بتزايد بكام ولا بتزايد على إيه.',
  outcome: 'قاعدة لإمتى تعمل boost، مكتوبة كرقم مش كإحساس.' } },

'3.5': { mins: 9, en: {
  lede: 'Three numbers tell you exactly which part of your system is broken. Without them you will rewrite the wrong thing for months.',
  outcome: 'A tracker with the three rates that diagnose everything.',
  blocks: [
    P('When proposals are not working, almost everyone rewrites the proposal. Sometimes that is right. Usually the problem is one step earlier or one step later, and rewriting is a month of motion with no movement.',
      'لما الـ proposals ماتنفعش، تقريباً كل الناس بتعيد كتابة الـ proposal. وأحياناً ده صح. وغالباً المشكلة في خطوة قبلها أو خطوة بعدها، وإعادة الكتابة بتبقى شهر حركة من غير تقدم.'),
    H('Track three things, nothing more', 'تابع تلات حاجات، مش أكتر'),
    STEPS([
      ['Viewed rate', 'Of the proposals you sent, how many were opened. Low here is not a writing problem at all — it is job selection, category, or speed.'],
      ['Reply rate', 'Of those opened, how many replied. Target above 12%. Below 10% consistently means you are applying to jobs where you are not among the best few fits.'],
      ['Close rate', 'Of the replies, how many became contracts. Replies without contracts is a closing problem, and closing is Module 4, not this one.'],
    ], [
      ['نسبة الفتح', 'من الـ proposals اللي بعتها، كام واحد اتفتح. الضعف هنا مش مشكلة كتابة خالص — ده اختيار شغلانات، أو تصنيف، أو سرعة.'],
      ['نسبة الردود', 'من اللي اتفتح، كام رد. الهدف فوق ١٢٪. وتحت ١٠٪ باستمرار معناه إنك بتقدّم على شغلانات إنت مش من ضمن أحسن المرشحين فيها.'],
      ['نسبة الإغلاق', 'من الردود، كام بقى عقد. ردود من غير عقود دي مشكلة قفل، والقفل ده موديول ٤ مش الدرس ده.'],
    ]),
    NOTE('The whole tracker is six columns', 'التراكر كله ست خانات',
      'Job link, Connects spent, time sent, viewed yes or no, replied yes or no, hired yes or no. A spreadsheet. Review it every Friday and change exactly one thing the following week — changing three at once teaches you nothing about which one worked.',
      'لينك الشغلانة، الـ Connects المصروفة، وقت الإرسال، اتفتح أيوه ولا لأ، رد أيوه ولا لأ، اتعيّن أيوه ولا لأ. شيت وخلاص. راجعه كل جمعة وغيّر حاجة واحدة بالظبط الأسبوع اللي بعده — لما تغيّر تلاتة مع بعض مش هتعرف أنهي واحدة اللي اشتغلت.'),
    TODO(15, [
      'Build the six-column sheet.',
      'Backfill your last twenty proposals from your Upwork history.',
      'Calculate the three rates. Whichever is worst is the only thing you work on this week.',
    ], [
      'اعمل الشيت بالست خانات.',
      'املاه بآخر ٢٠ proposal من تاريخك على أب-وورك.',
      'واحسب التلات نسب. وأسوأ واحدة فيهم هي الحاجة الوحيدة اللي هتشتغل عليها الأسبوع ده.',
    ]),
  ] }, ar: {
  lede: 'تلات أرقام بيقولولك بالظبط أنهي جزء في نظامك باظ. ومن غيرهم هتفضل تعيد كتابة الحاجة الغلط لشهور.',
  outcome: 'تراكر فيه التلات نسب اللي بتشخّص كل حاجة.' } },

'4.1': { mins: 11, en: {
  lede: 'The call is not an interview you are being given. It is a diagnostic you are running, and both of you are being assessed.',
  outcome: 'A five-question call script, and a written recap sent afterwards.',
  blocks: [
    P('Most freelancers walk into the call as a candidate. They answer questions, describe their process, and wait to be chosen. Meanwhile the client learns nothing that makes them confident, because confidence does not come from hearing about your process.',
      'أغلب الفريلانسرز بيدخلوا الكول كمرشح. بيجاوبوا على أسئلة، وبيوصفوا طريقتهم في الشغل، ومستنيين يتختاروا. وفي نفس الوقت الكلاينت مش بيتعلم أي حاجة تطمّنه، لأن الطمأنينة مش بتيجي من إنه يسمع عن طريقتك.'),
    P('Confidence comes from watching you diagnose something in real time. So run the call as the first ten minutes of the work.',
      'الطمأنينة بتيجي وهو بيتفرج عليك بتشخّص حاجة قدامه. فشغّل الكول كأنه أول عشر دقايق من الشغل.'),
    H('Five questions, in this order', 'خمس أسئلة، بالترتيب ده'),
    STEPS([
      ['What does success look like in ninety days?', 'This gets you the outcome in their words. Write it down verbatim — it becomes the first line of the scope.'],
      ['What have you already tried?', 'Tells you what not to propose, and what they have already paid for and been disappointed by.'],
      ['What is the constraint — budget, time, or someone\'s approval?', 'Every project has one. Naming it early stops it from ambushing you in week three.'],
      ['Who else needs to say yes?', 'If there is an invisible decision-maker, you want to know before you price, not after the revisions start.'],
      ['What happens if this does not get done?', 'The answer tells you what the project is actually worth to them, which is what you are pricing against.'],
    ], [
      ['النجاح شكله إيه بعد تسعين يوم؟', 'ده بيديك النتيجة بكلامهم هما. اكتبها حرفياً — هتبقى أول سطر في الـ scope.'],
      ['جربتوا إيه قبل كده؟', 'بيقولك تعرض إيه وتبعد عن إيه، وعلى إيه دفعوا قبل كده واتخذلوا.'],
      ['إيه القيد — ميزانية، ولا وقت، ولا موافقة حد؟', 'كل مشروع فيه واحد. وتسميته بدري بتمنعه إنه يفاجئك في الأسبوع التالت.'],
      ['مين كمان لازم يوافق؟', 'لو في متخذ قرار مخفي، إنت عايز تعرف قبل ما تسعّر، مش بعد ما التعديلات تبدأ.'],
      ['هيحصل إيه لو الحاجة دي متعملتش؟', 'الإجابة بتقولك المشروع بيساوي كام عندهم فعلاً، وده اللي بتسعّر مقابله.'],
    ]),
    NOTE('The recap is your insurance', 'الملخص ده تأمينك',
      'After every call, send a written recap in Upwork messages: scope, milestones, price, timeline. Not email — Upwork messages, where it is on the record. This single habit is what you produce if a dispute ever happens, and it is what stops "I thought that was included" three weeks later.',
      'بعد كل كول، ابعت ملخص مكتوب في رسايل أب-وورك: الـ scope والـ milestones والسعر والمدة. مش إيميل — رسايل أب-وورك، عشان تبقى مسجّلة. العادة دي لوحدها هي اللي بتطلعها لو حصل نزاع، وهي اللي بتمنع «أنا كنت فاكر ده داخل» بعد تلات أسابيع.'),
    P('And reply fast. Response speed is tracked, and clients hire people who move. One to two hours where humanly possible.',
      'ورد بسرعة. سرعة الرد بتتقاس، والكلاينتس بيعيّنوا اللي بيتحرك. من ساعة لساعتين لو ممكن.'),
    TODO(12, [
      'Write the five questions somewhere you can see them during a call.',
      'Draft your recap template now, before you need it under pressure.',
      'Send it within an hour of every call from here on.',
    ], [
      'اكتب الخمس أسئلة في حتة تشوفها وإنت في الكول.',
      'واكتب تمبليت الملخص دلوقتي، قبل ما تحتاجه وإنت متوتر.',
      'وابعته في خلال ساعة من أي كول من دلوقتي ورايح.',
    ]),
  ] }, ar: {
  lede: 'الكول مش إنترفيو بيتعمل معاك. ده تشخيص إنت بتشغّله، والاتنين بيتقيّموا.',
  outcome: 'سكريبت كول من خمس أسئلة، وملخص مكتوب متبعت بعده.' } },

'4.2': { mins: 10, en: {
  lede: 'Scope creep is not a client problem. It is a sentence you did not write.',
  outcome: 'A scope paragraph with a stated number of revisions and a named exclusion.',
  blocks: [
    P('Almost every miserable contract has the same origin: nobody wrote down what "finished" means. Without that sentence, finished becomes whatever the client feels like on the day, and you cannot argue with a feeling.',
      'تقريباً كل عقد بايظ ليه نفس الأصل: محدش كتب معنى «خلصت». ومن غير الجملة دي، «خلصت» بتبقى أي حاجة الكلاينت حاسس بيها في اليوم ده، وإنت مش هتقدر تجادل إحساس.'),
    H('Three sentences that end most disputes', 'تلات جمل بتنهي أغلب النزاعات'),
    STEPS([
      ['What you will deliver, as an object', 'Not "a strategy" — "a 20-page document containing positioning, three personas, content pillars and a 90-day roadmap, delivered as a PDF".'],
      ['How many revision rounds are included', 'Two is normal. Say the number. An unnamed number is read as unlimited by every client on earth, and they are not being unreasonable — you left it blank.'],
      ['One thing that is explicitly not included', 'Naming a single exclusion does more work than a page of terms, because it teaches the client that the boundary exists at all.'],
    ], [
      ['هتسلّم إيه، كحاجة ملموسة', 'مش «استراتيجية» — «دوكيومنت ٢٠ صفحة فيه الـ positioning وتلات personas والـ pillars وخطة ٩٠ يوم، بتتسلّم PDF».'],
      ['كام جولة تعديلات داخلة', 'اتنين ده الطبيعي. قول الرقم. الرقم اللي مش مكتوب بيتقري «مفتوح» عند أي كلاينت في الدنيا، وهو مش بيظلمك — إنت اللي سيبته فاضي.'],
      ['حاجة واحدة مش داخلة بشكل صريح', 'إنك تسمّي استثناء واحد بيعمل شغل أكتر من صفحة شروط، لأنه بيعلّم الكلاينت إن في حدود أصلاً.'],
    ]),
    PULL('When something extra is asked for: “Happy to add that — it sits outside our current milestone, so I will set up an additional one for $X.” Friendly, immediate, every single time.',
      'ولما حد يطلب حاجة زيادة: «تمام أعملها — بس دي بره الـ milestone الحالية، فهعمل واحدة إضافية بـ كذا.» بلطف، وفوراً، وفي كل مرة من غير استثناء.'),
    P('Say it the first time it happens, not the third. The first small unpaid extra teaches the client that extras are free, and every one after it is your own precedent being used against you.',
      'قولها أول مرة تحصل، مش التالتة. أول حاجة صغيرة زيادة ببلاش بتعلّم الكلاينت إن الزيادات مجانية، وكل واحدة بعدها دي سابقة إنت عملتها وبتترد عليك.'),
    TODO(12, [
      'Write the three sentences for your current or next project.',
      'Send them in Upwork messages as a recap before any work starts.',
      'Practise the scope-creep line out loud once. It is much easier to say when it is not the first time you have heard yourself say it.',
    ], [
      'اكتب التلات جمل لمشروعك الحالي أو الجاي.',
      'ابعتهم في رسايل أب-وورك كملخص قبل ما أي شغل يبدأ.',
      'وتمرّن على جملة الـ scope creep بصوت عالي مرة. هتبقى أسهل بكتير لما متكونش أول مرة تسمع نفسك بتقولها.',
    ]),
  ] }, ar: {
  lede: 'الـ scope creep مش مشكلة كلاينت. دي جملة إنت مكتبتهاش.',
  outcome: 'فقرة scope فيها عدد جولات التعديل واستثناء مسمّى.' } },

'4.3': { mins: 9, en: {
  lede: 'There is a version of freelancing where you never chase an invoice. It is a setting, not a personality trait.',
  outcome: 'Your next contract structured so the money exists before the work does.',
  blocks: [
    P('On a fixed-price contract the client funds a milestone before you start. That money leaves their account and sits with Upwork. It is not yours yet, but it is no longer theirs either — and that is the entire difference between freelancing and hoping.',
      'في العقد بالسعر الثابت، الكلاينت بيموّل الـ milestone قبل ما تبدأ. الفلوس بتخرج من حسابه وبتقعد عند أب-وورك. لسه مش بتاعتك، بس بقت مش بتاعته هو كمان — والفرق ده هو كل الفرق بين إنك تشتغل فريلانس وإنك تتمنى.'),
    PULL('Never begin work on an unfunded milestone. Not for a good client, not for a big name, not for “we will set it up after you deliver.”',
      'عمرك ما تبدأ شغل على milestone مش ممولة. لا لكلاينت كويس، ولا لاسم كبير، ولا لـ«هنظبطها بعد ما تسلّم».'),
    H('The structure', 'الهيكل'),
    STEPS([
      ['One milestone per phase', 'Not one milestone for the whole project. Phases give both of you an exit that is not a fight.'],
      ['Fund milestone one before anything', 'This is the single most reliable scam filter in existence. Clients who intend to pay have no problem with it; clients who do not, disappear at this exact step.'],
      ['Deliver through "Submit Work for Payment"', 'Not over email, not as a link in chat. Submitting through the platform is what creates the record that protects you.'],
      ['On hourly, the tracker runs from minute one', 'With real memos. The diary is both your payment protection and your evidence if anything is ever questioned.'],
    ], [
      ['milestone لكل مرحلة', 'مش milestone واحدة للمشروع كله. المراحل بتدي للاتنين باب خروج من غير خناقة.'],
      ['موّل أول milestone قبل أي حاجة', 'ده أضمن فلتر نصب موجود. الكلاينت اللي ناوي يدفع مش هتفرق معاه؛ واللي مش ناوي بيختفي عند الخطوة دي بالظبط.'],
      ['سلّم عن طريق Submit Work for Payment', 'مش على الإيميل، ولا لينك في الشات. التسليم من جوه المنصة هو اللي بيعمل السجل اللي بيحميك.'],
      ['في الشغل بالساعة، الـ tracker شغال من أول دقيقة', 'وبملاحظات حقيقية. الـ diary ده حمايتك في الدفع ودليلك لو حد شكك في أي حاجة.'],
    ]),
    NOTE('The phrase that should end a conversation', 'الجملة اللي المفروض تنهي أي كلام',
      'Any request to move the payment off Upwork before a contract exists — a WhatsApp number, a direct transfer, "we can handle it privately" — is a scam until proven otherwise. It is also a rule violation that can close your account permanently, even if you were the one being defrauded.',
      'أي طلب إن الدفع يخرج بره أب-وورك قبل ما يبقى في عقد — رقم واتساب، تحويل مباشر، «نظبطها بينا» — ده نصب لحد ما يثبت العكس. وكمان مخالفة ممكن تقفل حسابك للأبد، حتى لو إنت اللي كنت هتتنصب عليك.'),
    TODO(10, [
      'Split your next project into phases with a price each.',
      'Write the message that asks for milestone one to be funded. Keep it neutral and routine.',
      'Decide now what you will say if a client asks to move off-platform, so you are not improvising politeness under pressure.',
    ], [
      'قسّم مشروعك الجاي لمراحل، كل واحدة بسعر.',
      'اكتب الرسالة اللي بتطلب تمويل أول milestone. خليها عادية ومحايدة.',
      'وقرر من دلوقتي هتقول إيه لو كلاينت طلب يخرج بره المنصة، عشان متبقاش بترتجل أدب وإنت متضغط.',
    ]),
  ] }, ar: {
  lede: 'في نسخة من الفريلانس عمرك ما بتجري فيها ورا فاتورة. دي إعداد، مش صفة شخصية.',
  outcome: 'عقدك الجاي متظبّط بحيث الفلوس تكون موجودة قبل الشغل.' } },

'4.4': { mins: 12, en: {
  lede: 'Some clients are visible from the job post. The expensive ones are only visible on the call.',
  outcome: 'A written decline sentence you can send without agonising over it.',
  blocks: [
    P('You already filtered the post. The call is the second filter, and it catches a different category of problem — not fraud, but the client who will consume four months and end with a score you cannot repair.',
      'إنت فلترت البوست خلاص. الكول هو الفلتر التاني، وبيمسك نوع مشاكل مختلف — مش نصب، لكن الكلاينت اللي هياكل أربع شهور ويخلّص بـ score إنت مش هتقدر تصلّحه.'),
    H('What to listen for', 'اسمع إيه'),
    STEPS([
      ['They cannot describe what success looks like', 'If ninety days from now has no shape, then "done" will be decided by mood. Sell a paid discovery instead, or decline.'],
      ['Everyone before you was terrible', 'Three previous freelancers who all failed is a pattern, and you are about to become the fourth data point in it.'],
      ['The decision-maker is not on the call', 'You are being asked to price for someone you have not met and cannot persuade.'],
      ['Urgency with no corresponding budget', 'Urgency is a price signal. When it arrives without one, it is being used as pressure rather than information.'],
      ['Pressure to start before the contract exists', 'This is where the polite version of a scam and the disorganised version of a bad client look identical — and both end the same way.'],
    ], [
      ['مش قادر يوصف النجاح شكله إيه', 'لو التسعين يوم الجاية ملهاش شكل، يبقى «خلصت» هيحددها المزاج. بيعله discovery مدفوع بدالها، أو اعتذر.'],
      ['كل اللي قبلك كانوا وحشين', 'تلات فريلانسرز قبلك كلهم فشلوا ده نمط، وإنت على وشك تبقى النقطة الرابعة فيه.'],
      ['متخذ القرار مش في الكول', 'إنت بتتطلب منك تسعّر لحد معرفتوش ومش هتقدر تقنعه.'],
      ['استعجال من غير ميزانية توازيه', 'الاستعجال إشارة سعر. ولما ييجي من غير سعر، يبقى بيتستخدم كضغط مش كمعلومة.'],
      ['ضغط إنك تبدأ قبل ما يبقى في عقد', 'هنا النسخة المؤدبة من النصب والنسخة المهلبسة من الكلاينت الوحش بيبقوا شبه بعض بالظبط — والاتنين بيخلصوا بنفس الطريقة.'],
    ]),
    PULL('A declined offer costs you nothing. A bad contract costs you a score that takes months to rebuild — and on a large contract, the damage is at its maximum.',
      'العرض اللي بترفضه مش بيكلفك حاجة. والعقد الوحش بيكلفك score بياخد شهور يترجّع — ولو العقد كبير، الضرر بيبقى في أقصاه.'),
    NOTE('Say no in one sentence, warmly', 'قول لأ في جملة واحدة، وبلطف',
      '"Thanks for the call — having heard the scope, I do not think I am the right fit for this one, and I would rather say so now than halfway through. Happy to point you toward someone who is." No explanation, no apology, no door left ajar. Most people struggle here only because they are writing it for the first time under pressure.',
      '«شكراً على الكول — بعد ما سمعت الـ scope، مش شايف نفسي المناسب للشغلانة دي، وأفضل أقولك دلوقتي مش في النص. وتحت أمرك أرشحلك حد مناسب.» من غير شرح، ولا اعتذار، ولا باب مفتوح على قد شعرة. وأغلب الناس بتتعب هنا بس لأنها بتكتبها لأول مرة وهي متضغطة.'),
    TODO(8, [
      'Write your decline sentence and save it where you can copy it.',
      'Add the five listening points to your call script from 4.1.',
      'Recall one past project you should have declined. Name which of the five signals was present.',
    ], [
      'اكتب جملة الاعتذار بتاعتك واحفظها في حتة تقدر تنسخ منها.',
      'وضيف الخمس نقط دي على سكريبت الكول من ٤.١.',
      'وافتكر مشروع فات كان المفروض ترفضه. وسمّي أنهي إشارة من الخمسة كانت موجودة.',
    ]),
  ] }, ar: {
  lede: 'في كلاينتس بتبان من البوست. والغاليين فيهم مش بيبانوا غير في الكول.',
  outcome: 'جملة اعتذار مكتوبة تقدر تبعتها من غير ما تتعذّب فيها.' } }

};
MODULES.forEach(function (m) {
  m.lessons.forEach(function (l) {
    var f = FULL2[l.id];
    if (!f) return;
    if (f.mins) l.mins = f.mins;
    if (f.tool) l.tool = f.tool;
    l.en = Object.assign({}, l.en, f.en);
    l.ar = Object.assign({}, l.ar || {}, f.ar || {});
  });
});

/* ============================================================ FULL LESSONS — delivery, the score, the ladder */
const FULL3 = {

'6.1': { mins: 12, en: {
  lede: 'The highest earners on the platform get paid before they build anything. Not because they are famous — because of where they put the first invoice.',
  outcome: 'A named first phase you charge for, with a price and a deliverable.',
  blocks: [
    P('Look at how the top of the platform is actually structured and three shapes appear. They earn very differently, and the difference is not talent.',
      'بص على قمة المنصة وهتلاقي تلات أشكال. بيكسبوا بطرق مختلفة تماماً، والفرق مش موهبة.'),
    STEPS([
      ['The Premium Architect', 'A named system with a paid diagnostic at the front. Observed shape: a $200–1,100 diagnostic, then a build of $4,500–22,000, then an optimisation retainer. Highest rate per hour on the platform.'],
      ['The Process Specialist', 'A certified or named methodology sold as fixed-price projects, usually $2,000–5,000, with productised catalogue tiers underneath — commonly around $199 / $499 / $1,199.'],
      ['The Volume Engine', 'Hundreds of small contracts stacked, $30–250 a piece, plus enterprise retainers. One decoded operator was running 165 contracts at once.'],
    ], [
      ['المهندس الـ Premium', 'نظام ليه اسم وقدامه تشخيص مدفوع. الشكل الملاحظ: تشخيص بـ ٢٠٠ لـ ١١٠٠ دولار، وبعدين بناء بـ ٤٥٠٠ لـ ٢٢٠٠٠، وبعدين ريتينر تحسين. أعلى سعر ساعة على المنصة.'],
      ['متخصص العملية', 'منهجية معتمدة أو ليها اسم بتتباع كمشاريع بسعر ثابت، غالباً ٢٠٠٠ لـ ٥٠٠٠ دولار، وتحتها باكدجات جاهزة بأسعار متدرجة — عادةً حوالي ١٩٩ و٤٩٩ و١١٩٩.'],
      ['ماكينة الحجم', 'مئات العقود الصغيرة فوق بعض، من ٣٠ لـ ٢٥٠ دولار للواحد، وفوقهم ريتينرز لشركات كبيرة. في واحد متفكّك كان ماشي بـ ١٦٥ عقد في نفس الوقت.'],
    ]),
    PULL('All three work. The Volume Engine is the most resilient score machine, because every small contract is another positive outcome. The Premium Architect pays the most per hour. Most people should run the first while quietly building the second.',
      'التلاتة شغالين. ماكينة الحجم أقوى ماكينة للـ score، لأن كل عقد صغير نتيجة إيجابية زيادة. والمهندس الـ Premium بيكسب أكتر في الساعة. وأغلب الناس المفروض تشغّل الأولى وهي بتبني التانية في الخلفية.'),
    H('What they all share', 'الحاجة المشتركة بينهم'),
    P('Not one of them starts producing on day one. Every single decoded operator opens with a research or audit phase — and, crucially, <strong>shows it</strong>. One strategist wins five-star reviews specifically because he arrives at the first call having already audited the brand and having opinions about what is wrong.',
      'ولا واحد فيهم بيبدأ إنتاج من أول يوم. كل واحد متفكّك بيفتح بمرحلة بحث أو أوديت — و<strong>بيوريها</strong>. في استراتيجي بياخد تقييمات ٥ نجوم بالذات لأنه بيدخل أول كول وهو عامل أوديت للبراند وعنده رأي في اللي غلط.'),
    P('That is the whole move. You are not selling hours and you are not auditioning. You are selling a diagnosis, and the diagnosis is what proves you understand their business better than the last freelancer did.',
      'دي الحركة كلها. إنت مش بتبيع ساعات ولا بتعمل أوديشن. إنت بتبيع تشخيص، والتشخيص هو اللي بيثبت إنك فاهم بيزنسهم أحسن من الفريلانسر اللي قبلك.'),
    NOTE('Name it', 'سمّيه',
      'All nine profiles sell a named process — a "Revenue Leak Diagnostic", a "Brand Blueprint", a three-phase Diagnostic → Architecture → Execution. Note that this is not a function of earnings: the $60K strategist names his process exactly like the $800K one does. The name converts a freelancer into a methodology. Clients then buy the system rather than your time, and the price anchors to the value of the system instead of the hours it took.',
      'التسع بروفايلات كلهم بيبيعوا عملية ليها اسم — «تشخيص تسريب الإيراد»، «Brand Blueprint»، أو تلات مراحل: تشخيص ← بناء ← تنفيذ. وخد بالك إن ده مالوش علاقة بحجم الأرباح: اللي بيكسب ٦٠ ألف بيسمّي عمليته بنفس الطريقة اللي بيعملها اللي بيكسب ٨٠٠ ألف. الاسم بيحوّل الفريلانسر لمنهجية. وساعتها الكلاينت بيشتري النظام مش وقتك، والسعر بيترسّى على قيمة النظام مش على الساعات.'),
    TODO(15, [
      'Name your first phase. Three words maximum.',
      'Write what it produces — one artifact, described as an object.',
      'Set its fixed price. It should feel slightly cheap to you and obviously safe to them.',
    ], [
      'سمّي مرحلتك الأولى. تلات كلمات بحد أقصى.',
      'اكتب بتطلّع إيه — حاجة واحدة، موصوفة كشيء ملموس.',
      'وحدد سعرها الثابت. المفروض تحس إنها رخيصة شوية عليك وواضح إنها آمنة عندهم.',
    ]),
  ] }, ar: { lede: 'أعلى الناس دخلاً على المنصة بيتدفعلهم قبل ما يبنوا حاجة. مش لأنهم مشهورين — لأن أول فاتورة عندهم مكانها مختلف.', outcome: 'مرحلة أولى ليها اسم بتاخد عليها فلوس، بسعر وتسليم محدد.' } },

'6.2': { mins: 14, en: {
  lede: 'The same work, handed over in two different formats, produces two different reviews. Format is not packaging — it is most of the perceived value.',
  outcome: 'Your next deliverable converted into the medium the client actually works in.',
  blocks: [
    P('A strategy delivered as a Word document is a document. The same strategy delivered as a deck the client can present to their own boss is a promotion. The thinking is identical. The outcome for you is not.',
      'استراتيجية بتتسلّم كملف Word دي ملف. ونفس الاستراتيجية بتتسلّم كديك الكلاينت يقدر يعرضه على مديره دي ترقية. التفكير واحد. والنتيجة بالنسبالك لأ.'),
    STEPS([
      ['Copy → a wireframe, not a text file', 'Show the words in the layout they will live in. The client cannot judge copy in a vacuum, and when they cannot judge it they get nervous, and nervous clients ask for revisions they do not need.'],
      ['Strategy → a deck with one framework diagram', 'A visible diagram of your thinking sells harder than any number of paragraphs, and it is the thing that gets forwarded internally.'],
      ['Social content → scheduled posts, not raw text', 'Deliver into the tool they use. Every step you leave for the client is a step where your work can be implemented badly and then blamed.'],
      ['Anything → plus a short annotation layer', 'A "why this works" note beside the major decisions. This is what turns a deliverable into evidence that you thought.'],
    ], [
      ['الكوبي ← wireframe مش ملف نصوص', 'ورّي الكلام في الشكل اللي هيعيش فيه. الكلاينت مش قادر يحكم على كوبي في الفراغ، ولما ميقدرش يحكم بيتوتر، والكلاينت المتوتر بيطلب تعديلات مش محتاجها.'],
      ['الاستراتيجية ← ديك فيه دياجرام واحد للفريم وورك', 'دياجرام باين لتفكيرك بيبيع أقوى من أي عدد فقرات، وهو الحاجة اللي بتتبعت جوه الشركة.'],
      ['كونتنت السوشيال ← بوستات مجدولة مش نصوص خام', 'سلّم جوه الأداة اللي بيستخدموها. كل خطوة بتسيبها للكلاينت دي خطوة ممكن شغلك يتنفذ فيها غلط وبعدين يتلام عليها.'],
      ['أي حاجة ← ومعاها طبقة ملاحظات قصيرة', 'ملاحظة «ليه ده بيشتغل» جنب القرارات الكبيرة. دي اللي بتحوّل التسليم لدليل إنك فكّرت.'],
    ]),
    H('What premium clients are actually testing', 'الكلاينتس الكبار بيختبروا إيه فعلاً'),
    P('Job posts at the $3,000–8,000 a month level test the same three things over and over: can you <strong>articulate a workflow</strong> ("here is one of our pages — what is your process, where do you start?"), can you <strong>diagnose</strong> ("review these four scripts and tell us how you would improve them"), and can you <strong>prove it with numbers</strong> ("three to five ads you wrote, the brand, the hook rate, the spend").',
      'البوستات اللي في حدود ٣ لـ ٨ آلاف دولار في الشهر بتختبر نفس التلات حاجات كل مرة: تقدر <strong>توصف طريقتك في الشغل</strong> («دي صفحة عندنا — إيه خطواتك، وهتبدأ منين؟»)، وتقدر <strong>تشخّص</strong> («راجع الأربع سكريبتات دول وقولنا هتحسّنهم إزاي»)، وتقدر <strong>تثبت بأرقام</strong> («تلات لخمس إعلانات كتبتهم، والبراند، ونسبة الهوك، والمصروف»).'),
    P('Which means every delivery should leave those three proofs behind as a by-product. Build them into the format and you never have to manufacture them later.',
      'يعني كل تسليم المفروض يسيب التلات أدلة دي وراه كناتج جانبي. حطهم في الشكل نفسه وعمرك ما هتحتاج تصنّعهم بعدين.'),
    NOTE('AI is the pipeline, never the surface', 'الـ AI ماكينة، مش واجهة',
      'Premium job posts say it outright: applications that look AI-generated get ignored. The same standard applies to what you ship. Use whatever tools make you fast — then make sure nothing that reaches the client reads like it came out of a machine.',
      'البوستات الكبيرة بتقولها صراحة: الطلبات اللي شكلها معمولة بالـ AI بتتجاهل. ونفس المعيار بينطبق على اللي بتسلّمه. استخدم أي أدوات بتخلّيك سريع — وبعدين اتأكد إن مفيش حاجة بتوصل الكلاينت شكلها طالعة من ماكينة.'),
    TODO(15, [
      'Take your current deliverable and name the medium the client actually works in.',
      'Rebuild the handover in that medium, even if the content is unchanged.',
      'Add three annotations — one per major decision.',
    ], [
      'خد التسليم الحالي بتاعك وحدد الوسيط اللي الكلاينت بيشتغل فيه فعلاً.',
      'وأعد بناء التسليم في الوسيط ده، حتى لو المحتوى زي ما هو.',
      'وضيف تلات ملاحظات — واحدة لكل قرار كبير.',
    ]),
  ] }, ar: { lede: 'نفس الشغل، بيتسلّم بشكلين مختلفين، بيطلّع تقييمين مختلفين. الشكل مش تغليف — ده أغلب القيمة المتصوّرة.', outcome: 'تسليمك الجاي متحوّل للوسيط اللي الكلاينت شغال فيه فعلاً.' } },

'6.3': { mins: 11, en: {
  lede: 'Clients quote the handover ritual by name in five-star reviews. Almost nobody performs one.',
  outcome: 'A delivery ritual you run identically every time, and a cadence that prevents surprises.',
  blocks: [
    P('Most freelancers end a project by attaching a file and writing "let me know if you need any changes". That sentence is an invitation to find fault, sent at the exact moment the client is deciding how they feel about you.',
      'أغلب الفريلانسرز بينهوا المشروع بمرفق وجملة «قولي لو عايز أي تعديلات». الجملة دي دعوة إنه يدوّر على غلط، ومتبعتة في نفس اللحظة اللي الكلاينت بيقرر فيها هو حاسس بإيه ناحيتك.'),
    H('The ritual, in order', 'الطقس، بالترتيب'),
    STEPS([
      ['The deliverable, in their medium', 'As covered in the previous lesson. Never a bare attachment.'],
      ['A two to six minute walkthrough video', 'You, talking over the work, explaining why each major decision serves their goal. Verified client reviews name this specifically as the moment they decided you were worth it.'],
      ['The annotation layer', 'Short "why this works" notes on the deliverable itself.'],
      ['One specific next-step recommendation', 'Not a menu of services. One thing you would do next, and why.'],
      ['Submitted through the platform', 'On fixed-price, always via Submit Work for Payment. This is what starts the clock and creates the record.'],
    ], [
      ['التسليم، في الوسيط بتاعهم', 'زي ما شرحنا في الدرس اللي فات. عمرك ما تبعت مرفق لوحده.'],
      ['فيديو شرح من ٢ لـ ٦ دقايق', 'إنت، بتتكلم على الشغل، وبتشرح كل قرار كبير بيخدم هدفهم إزاي. في تقييمات كلاينتس موثّقة بتقول إن دي اللحظة اللي قرروا فيها إنك تستاهل.'],
      ['طبقة الملاحظات', 'ملاحظات قصيرة «ليه ده بيشتغل» على التسليم نفسه.'],
      ['توصية واحدة محددة للخطوة الجاية', 'مش قايمة خدمات. حاجة واحدة كنت هتعملها بعد كده، وليه.'],
      ['التسليم من جوه المنصة', 'في السعر الثابت، دايماً عن طريق Submit Work for Payment. ده اللي بيشغّل العداد وبيعمل السجل.'],
    ]),
    H('The cadence around it', 'الإيقاع اللي حواليه'),
    P('<strong>Day zero:</strong> the kickoff recap and what you need from them. <strong>Midpoint:</strong> one concrete artifact — "here is the research summary, am I aimed right?" <strong>Day before delivery:</strong> "delivering tomorrow, here is what to expect." <strong>Delivery:</strong> the ritual. <strong>Days three to seven after:</strong> "how is it performing? One tweak included."',
      '<strong>يوم صفر:</strong> ملخص البداية واللي إنت محتاجه منهم. <strong>المنتصف:</strong> حاجة واحدة ملموسة — «ده ملخص البحث، أنا ماشي صح؟» <strong>يوم قبل التسليم:</strong> «هسلّم بكرة، وده اللي هتلاقيه.» <strong>التسليم:</strong> الطقس. <strong>من اليوم التالت للسابع بعده:</strong> «شغال إزاي؟ ومعاك تعديل واحد داخل.»'),
    PULL('Most bad private feedback is not about the work. It is about feeling ignored. The midpoint message costs you four minutes and removes most of that risk.',
      'أغلب الفيدباك المخفي الوحش مش بسبب الشغل. بسبب إحساس الكلاينت إنه متنسي. ورسالة المنتصف بتكلفك ٤ دقايق وبتشيل أغلب الخطر ده.'),
    TODO(12, [
      'Write your five-step ritual as a checklist you will not have to think about again.',
      'Put the four cadence messages in your calendar for your current project.',
      'Record one practice walkthrough video today, even for old work. The first one is always the worst.',
    ], [
      'اكتب طقس الخمس خطوات كتشيك ليست مش هتحتاج تفكر فيها تاني.',
      'وحط الأربع رسايل في الكاليندر لمشروعك الحالي.',
      'وسجّل فيديو شرح واحد للتمرين النهاردة، حتى لو لشغل قديم. أول واحد دايماً أوحش واحد.',
    ]),
  ] }, ar: { lede: 'الكلاينتس بيذكروا طقس التسليم بالاسم في تقييمات الـ ٥ نجوم. وتقريباً محدش بيعمله.', outcome: 'طقس تسليم بتعمله بنفس الشكل كل مرة، وإيقاع بيمنع المفاجآت.' } },

'6.4': { mins: 10, en: {
  lede: 'Revisions are not a failure state. Handled as a system they raise your score; handled as surrender they end contracts.',
  outcome: 'A revision policy stated up front, and a script for receiving feedback.',
  blocks: [
    P('There is a counterintuitive finding in the decoded data: a client who was unhappy and then rescued often scores you <strong>higher</strong> than a client whose project went smoothly. Being handled well is more memorable than never needing handling.',
      'في نتيجة عكس المتوقع في البيانات المتفكّكة: الكلاينت اللي زعل وبعدين اتعامل معاه صح بيديك تقييم <strong>أعلى</strong> من الكلاينت اللي مشروعه عدّى على الحديدة. إن حد يتعامل معاك كويس ساعة الزنقة أثبت في الدماغ من إنك عمرك ما احتجت.'),
    P('Which means the goal is not zero revisions. It is a revision process that feels like competence rather than panic.',
      'يعني الهدف مش صفر تعديلات. الهدف عملية تعديل شكلها كفاءة مش هلع.'),
    STEPS([
      ['State the number before you start', 'One or two rounds is the productised standard. An unstated number is read as unlimited, and the client is not being greedy — you left it open.'],
      ['Ask what goal each change serves', '"Happy to change it — what is the goal that version serves better?" This converts taste arguments into problem-solving, and half the requested changes evaporate at this question.'],
      ['Batch them', 'Never fix things one message at a time. Collect the round, do it once, redeliver with the same ritual as the original.'],
      ['Spend one free rescue round if things wobble', 'One unpaid revision plus a short call rescues most situations. A dispute costs far more than an hour of goodwill, and the score damage is not recoverable in the same timeframe.'],
    ], [
      ['قول الرقم قبل ما تبدأ', 'جولة أو اتنين ده المعيار الجاهز. والرقم اللي متقالش بيتقري «مفتوح»، والكلاينت مش طامع — إنت اللي سيبته مفتوح.'],
      ['اسأل كل تغيير بيخدم إيه', '«تمام أغيّرها — النسخة دي بتخدم هدف إيه أحسن؟» ده بيحوّل خناقة الذوق لحل مشاكل، ونص التعديلات المطلوبة بتتبخّر عند السؤال ده.'],
      ['جمّعهم', 'عمرك ما تصلّح حاجة حاجة مع كل رسالة. اجمع الجولة، اعملها مرة واحدة، وسلّم تاني بنفس الطقس بتاع المرة الأولى.'],
      ['اصرف جولة إنقاذ مجانية لو الأمور اتلخبطت', 'تعديل واحد ببلاش وكول قصير بينقذوا أغلب المواقف. النزاع بيكلف أكتر بكتير من ساعة طيبة، وضرر الـ score مش بيتصلّح في نفس المدة.'],
    ]),
    PULL('When something new is requested mid-round: “Happy to add that — it sits outside this milestone, so I will set up an additional one for $X.” Said warmly, said immediately, said every time.',
      'ولما حاجة جديدة تتطلب في نص الجولة: «تمام أضيفها — بس دي بره الـ milestone دي، فهعمل واحدة إضافية بـ كذا.» بلطف، وفوراً، وفي كل مرة.'),
    TODO(10, [
      'Write your revision policy in one sentence and put it in your kickoff recap template.',
      'Write the "what goal does this serve" question somewhere you will see it when annoyed.',
      'Decide your rescue threshold now: at what point do you spend a free round rather than argue?',
    ], [
      'اكتب سياسة التعديلات في جملة وحطها في تمبليت ملخص البداية.',
      'واكتب سؤال «بيخدم هدف إيه» في مكان تشوفه وإنت متضايق.',
      'وحدد من دلوقتي حد الإنقاذ: إمتى تصرف جولة مجانية بدل ما تتخانق؟',
    ]),
  ] }, ar: { lede: 'التعديلات مش حالة فشل. لو اتعاملت معاها كنظام بترفع تقييمك؛ ولو كاستسلام بتنهي عقود.', outcome: 'سياسة تعديلات معلنة من البداية، وسكريبت لاستقبال الملاحظات.' } },

'6.5': { mins: 11, en: {
  lede: 'Across all nine top-earner profiles, the habit that showed up without a single exception is what they do in the last message of a contract.',
  outcome: 'A next-phase pitch written into your delivery template, plus a case study captured.',
  blocks: [
    P('Both freelancers do good work. One of them ends the contract when the deliverable is done. The other ends it by describing what happens next — and gets paid for that too.',
      'الاتنين بيشتغلوا كويس. واحد فيهم بينهي العقد أول ما التسليم يخلص. والتاني بينهيه وهو بيوصف اللي جاي — وبياخد فلوس على ده كمان.'),
    PULL('“The landing page is live. Step two is watching real traffic for thirty days and tuning what it tells us — I do that as a monthly optimisation phase.”',
      '«اللاندينج بيدج نزلت. الخطوة التانية إننا نتفرج على الترافيك الحقيقي لتلاتين يوم ونظبط على اللي هيقوله — وأنا بعمل ده كمرحلة تحسين شهرية.»'),
    P('That sentence costs nothing and does two jobs. It converts a finished project into a continuing one, and a continuing contract is worth disproportionately more to your score than a finished one.',
      'الجملة دي متكلفش حاجة وبتعمل شغلانتين. بتحوّل مشروع خلص لمشروع مستمر، والعقد المستمر بيساوي للـ score بتاعك أكتر بكتير من العقد اللي خلص.'),
    NOTE('Not published by Upwork', 'مش منشور من أب-وورك',
      'Practitioners report that a contract with at least one payment every 90 days is counted as an ongoing positive outcome and re-weighted substantially — one figure quoted is up to eight times. Upwork confirms that longer relationships help and that higher-earning jobs weigh more, but publishes no multiplier. Treat the direction as sound and the number as unverified.',
      'الناس اللي بتشتغل بتقول إن العقد اللي فيه دفعة كل ٩٠ يوم على الأقل بيتحسب نتيجة إيجابية مستمرة وبيتوزن أتقل بكتير — ورقم بيتقال إنه لحد تمن مرات. وأب-وورك بتأكد إن العلاقات الطويلة بتساعد وإن الشغلانات الأكبر وزنها أتقل، بس مش ناشرة أي مضاعف. خد الاتجاه على إنه سليم والرقم على إنه غير مؤكد.'),
    H('Capture the case study while they are happy', 'خد الـ case study وهما مبسوطين'),
    STEPS([
      ['Ask for the number at the day-three check-in', 'It is also your natural opening for the retainer conversation, which is why the two belong in the same message.'],
      ['Write it as situation, what you built, and the number', 'Three lines. One visual. That is a case study.'],
      ['Title it as deliverable plus outcome', '"SaaS landing page rebuild — 4x conversion lift" is a portfolio item. "Project 7" is not.'],
      ['File it in two places', 'Your profile portfolio, and the swipe file you pull proof from when writing proposals.'],
    ], [
      ['اطلب الرقم في متابعة اليوم التالت', 'وده كمان مدخلك الطبيعي لكلام الريتينر، وعشان كده الاتنين مكانهم نفس الرسالة.'],
      ['اكتبها: الموقف، وإنت بنيت إيه، والرقم', 'تلات سطور. وصورة واحدة. دي case study.'],
      ['سمّيها بالتسليم زائد النتيجة', '«إعادة بناء لاندينج بيدج لشركة SaaS — ٤ أضعاف في التحويل» دي حاجة في بورتفوليو. و«مشروع ٧» لأ.'],
      ['احفظها في مكانين', 'بورتفوليو البروفايل، والملف اللي بتسحب منه أدلة وإنت بتكتب proposals.'],
    ]),
    TODO(12, [
      'Add the next-phase sentence to your delivery template so you never have to invent it under pressure.',
      'Go back to your last finished project and ask for the outcome number now. Late is better than never.',
      'Turn it into a three-line case study and add it to your profile today.',
    ], [
      'ضيف جملة المرحلة الجاية لتمبليت التسليم عشان متضطرش تخترعها وإنت متوتر.',
      'وارجع لآخر مشروع خلصته واطلب رقم النتيجة دلوقتي. متأخر أحسن من عمره ما يحصل.',
      'وحوّلها لـ case study من تلات سطور وحطها في بروفايلك النهاردة.',
    ]),
  ] }, ar: { lede: 'في التسع بروفايلات كلهم من غير استثناء واحد، العادة اللي ظهرت هي اللي بيعملوه في آخر رسالة في العقد.', outcome: 'عرض للمرحلة الجاية مكتوب في تمبليت التسليم، وcase study متسجّلة.' } },

'7.2': { mins: 11, en: {
  lede: 'A number you will never see decides most of your score. You cannot read it, but you can move it.',
  outcome: 'Three cadence habits installed in your current contract.',
  blocks: [
    PLAIN('When a contract ends, the client answers a private question — roughly "how likely are you to recommend this person, from 0 to 10". You never see the answer. It feeds your JSS. The public star rating is a different thing entirely.',
      'لما العقد يخلص، الكلاينت بيجاوب على سؤال مخفي — تقريباً «تنصح بالشخص ده بنسبة كام من ٠ لـ ١٠». وإنت عمرك ما هتشوف الإجابة. وهي اللي بتغذّي الـ JSS. والنجوم العلنية دي حاجة تانية خالص.'),
    P('This is the mechanism behind the most confusing experience on the platform: a warm five-star public review, a thank-you message, and a score that drops the following week.',
      'ودي الميكانيكا ورا أكتر تجربة محيّرة على المنصة: تقييم ٥ نجوم علني ودافي، ورسالة شكر، وscore بينزل الأسبوع اللي بعده.'),
    NOTE('Where the sources disagree', 'فين المصادر بتختلف',
      'Practitioner accounts differ on the thresholds: some say 8 and above helps you, others that 9–10 helps and 8 is merely neutral. Upwork publishes neither. What every account agrees on is the direction — high scores lift, low scores hurt more than they lift, and you never see either.',
      'روايات الناس اللي بتشتغل بتختلف على الحدود: في ناس بتقول ٨ فوق بتساعد، وناس بتقول ٩ و١٠ بس هما اللي بيساعدوا و٨ محايدة. وأب-وورك مش ناشرة لا دي ولا دي. واللي كل الروايات متفقة عليه هو الاتجاه — الدرجات العالية بترفع، والواطية بتضر أكتر ما العالية بترفع، وإنت مش شايف ولا واحدة فيهم.'),
    H('What actually moves it', 'اللي بيحرّكه فعلاً'),
    P('Almost every account of bad private feedback describes the same thing, and it is not the quality of the work. It is <strong>feeling ignored</strong> — not knowing where the project stood, being surprised at the end, sending a message that sat unanswered for two days.',
      'تقريباً كل حكاية عن فيدباك مخفي وحش بتوصف نفس الحاجة، ومش جودة الشغل. الحاجة هي <strong>إحساس إنك متنسي</strong> — إنه مش عارف المشروع واقف فين، وإنه اتفاجئ في الآخر، وإنه بعت رسالة قعدت يومين من غير رد.'),
    STEPS([
      ['Never let a message sit', 'The top earners average nought to four hours. You do not need to solve it that fast — you need to acknowledge it that fast.'],
      ['Send the midpoint artifact', 'One concrete thing, unprompted, halfway through. This single habit removes most of the risk.'],
      ['Warn before you deliver', '"Delivering tomorrow, here is what to expect." Nobody has ever given a low private score to someone who told them what was coming.'],
    ], [
      ['عمرك ما تسيب رسالة', 'أكبر الفريلانسرز متوسطهم من صفر لأربع ساعات. مش مطلوب منك تحل بالسرعة دي — مطلوب تقول «وصلتني» بالسرعة دي.'],
      ['ابعت حاجة في المنتصف', 'حاجة واحدة ملموسة، من غير ما حد يطلب، في نص المشروع. العادة دي لوحدها بتشيل أغلب الخطر.'],
      ['نبّه قبل ما تسلّم', '«هسلّم بكرة، وده اللي هتلاقيه.» مفيش حد في التاريخ إدى تقييم مخفي واطي لحد قاله الجاي إيه.'],
    ]),
    TODO(8, [
      'Set a reminder for the midpoint of your current project.',
      'Write the pre-delivery message now and schedule it.',
      'Check your inbox. Anything sitting more than a few hours gets an acknowledgement today, even if the answer is "looking at this tonight".',
    ], [
      'حط منبّه لمنتصف مشروعك الحالي.',
      'واكتب رسالة ما قبل التسليم دلوقتي وجدولها.',
      'وبص على الرسايل. أي حاجة قاعدة أكتر من كام ساعة تاخد رد النهاردة، حتى لو الرد «هبصلها بالليل».',
    ]),
  ] }, ar: { lede: 'رقم إنت عمرك ما هتشوفه بيحدد أغلب تقييمك. مش هتقدر تقراه، بس تقدر تحرّكه.', outcome: 'تلات عادات إيقاع متركّبة في عقدك الحالي.' } },

'7.3': { mins: 10, en: {
  lede: 'Your score does not care whether the disaster was your fault. So the cheapest defence is the client you did not take.',
  outcome: 'A vetting pass you run before accepting, not just before applying.',
  blocks: [
    P('There is an asymmetry worth internalising: a bad outcome on a $5,000 contract damages your score far more than a bad outcome on a $50 one. Contract value cuts both ways, and most people only hear about the upside.',
      'في عدم تماثل يستاهل تفهمه: النتيجة الوحشة على عقد بـ ٥ آلاف دولار بتضر الـ score أكتر بكتير من نتيجة وحشة على عقد بـ ٥٠. قيمة العقد بتقطع في الاتجاهين، وأغلب الناس بتسمع عن الاتجاه الحلو بس.'),
    PULL('Experiment with new clients on small contracts. Protect the big ones obsessively. That single rule prevents most catastrophic score damage.',
      'جرّب الكلاينتس الجداد على عقود صغيرة. واحمِ الكبيرة بهوس. القاعدة دي لوحدها بتمنع أغلب الضرر الكارثي في الـ score.'),
    H('Read the signals', 'اقرا الإشارات'),
    STEPS([
      ['Green', 'Payment verified, real spend history, hires more than half the people they interview, gives past freelancers an average of 4.7 or better, clear scope, realistic budget, replies like a professional.'],
      ['Yellow — take it, but with structure', 'A brand-new client with verified payment is fine, especially early on, but insist on funded milestones. A vague brief with a real budget is fine if you sell a paid discovery first. Promises of "lots more work to come" are fine as long as you price this job on its own merits.'],
      ['Red — decline, and report if needed', 'Any request to move off Upwork before a contract exists. Requests to buy equipment from their supplier, cheques sent in advance, gift cards, crypto. Asking for your login details or ID documents. Pay far above market for something trivial. A "quick test task" that is the whole deliverable, unpaid. A client whose average rating to freelancers is below 4.'],
    ], [
      ['أخضر', 'الدفع موثّق، وتاريخ صرف حقيقي، وبيعيّن أكتر من نص اللي بيقابلهم، ومتوسط تقييمه للفريلانسرز ٤.٧ أو أحسن، والـ scope واضح، والميزانية واقعية، وبيرد باحترافية.'],
      ['أصفر — خدها بس بنظام', 'كلاينت جديد خالص ودفعه موثّق ده كويس، خصوصاً في البداية، بس اصمم على milestones ممولة. والبريف المبهم بميزانية حقيقية ماشي لو بعت discovery مدفوع الأول. ووعود «في شغل كتير جاي» ماشية طالما إنت مسعّر الشغلانة دي بذاتها.'],
      ['أحمر — اعتذر، وبلّغ لو لزم', 'أي طلب إنكم تخرجوا بره أب-وورك قبل ما يبقى في عقد. أو إنك تشتري معدات من المورّد بتاعهم، أو شيكات بتتبعت مقدماً، أو جيفت كاردز، أو كريبتو. أو إنه يطلب بيانات دخولك أو صور بطاقتك. أو دفع أعلى من السوق بكتير على حاجة تافهة. أو «مهمة اختبار سريعة» هي في الحقيقة التسليم كله ببلاش. أو كلاينت متوسط تقييمه للفريلانسرز تحت ٤.'],
    ]),
    NOTE('Paid test tasks are fine. Unpaid ones are a different relationship.', 'المهمة التجريبية المدفوعة ماشية. والمجانية علاقة تانية خالص.',
      'Free work is never a prerequisite for a contract. If someone needs to see you work before hiring, that is what a small paid first milestone is for — and it is a better test for both of you.',
      'الشغل المجاني عمره ما شرط للعقد. ولو حد محتاج يشوفك بتشتغل قبل ما يعيّنك، فده بالظبط اللي أول milestone صغيرة مدفوعة موجودة عشانه — وهي اختبار أحسن للاتنين.'),
    TODO(10, [
      'Run the three-tier read on the last client you accepted. Which tier were they, honestly?',
      'Write your own personal red line — the one thing you will always decline regardless of the money.',
      'Add "check average rating given to freelancers" to your filter. Almost nobody does this.',
    ], [
      'شغّل القراءة التلاتية على آخر كلاينت وافقت عليه. كان في أنهي خانة، بصراحة؟',
      'واكتب خطك الأحمر — الحاجة اللي هترفضها دايماً مهما كانت الفلوس.',
      'وضيف «راجع متوسط تقييمه للفريلانسرز» على الفلتر بتاعك. تقريباً محدش بيعمل كده.',
    ]),
  ] }, ar: { lede: 'الـ score بتاعك مش فارق معاه الكارثة كانت غلطتك ولا لأ. فأرخص دفاع هو الكلاينت اللي مخدتوش.', outcome: 'فحص بتشغّله قبل ما توافق، مش قبل ما تقدّم بس.' } },

'7.4': { mins: 12, en: {
  lede: 'A contract going wrong has a rank order of moves. Doing them out of order is what turns a bad week into a bad year.',
  outcome: 'The five plays, in order, and the one you would use on your current situation.',
  blocks: [
    P('First, notice it early. A client who goes quiet or turns curt mid-contract is not being rude — they are telling you something before they tell the feedback form. Drift is visible days before it becomes damage.',
      'الأول، لاحظ بدري. الكلاينت اللي بيسكت أو بيبقى جاف في نص العقد مش قليل الأدب — ده بيقولك حاجة قبل ما يقولها لخانة التقييم. والانحراف بيبان بأيام قبل ما يبقى ضرر.'),
    H('The five plays, in order', 'الخمس خطط، بالترتيب'),
    STEPS([
      ['Fix it cheaply, first', 'One free revision round and a direct call rescue most situations and most private feedback. This is not weakness — it is the cheapest possible outcome, and a rescued client often scores higher than a smooth one.'],
      ['Negotiate the ending', 'If it cannot be saved, part deliberately. A mutually agreed cancellation, sometimes with a partial refund, usually beats a fight. Weigh it against contract size: a bad review on a large contract does maximum damage.'],
      ['Answer a bad review once, in public, for future readers', 'Short, factual, professional. You are not writing to that client. You are writing to the next twenty people who will read it. Never argue.'],
      ['Spend the removal perk deliberately — if you have it', 'Practitioners describe a periodic one-time feedback removal that comes with Top Rated status. Upwork\'s own Top Rated page does not mention it, so treat it as unverified: check your account rather than counting on it. If it is there, save it for the highest-value bad outcome, not the first one that stings.'],
      ['Dispute only when the evidence exists', 'On fixed price you have a seven-day window to respond. Your evidence is the written scope recap and the submitted work — which is why the recap habit from Chapter 5 exists. Mediation first; arbitration carries a fee for both sides and settling partially is often cheaper.'],
    ], [
      ['صلّحها بأرخص طريقة، الأول', 'جولة تعديل واحدة ببلاش وكول مباشر بينقذوا أغلب المواقف وأغلب الفيدباك المخفي. ودي مش ضعف — دي أرخص نتيجة ممكنة، والكلاينت اللي اتنقذ غالباً بيقيّم أعلى من اللي عدّى على الحديدة.'],
      ['تفاوض على النهاية', 'لو مفيش إنقاذ، اقفل بقرار. إلغاء بالاتفاق، وأحياناً باسترجاع جزئي، غالباً أحسن من خناقة. وقيسها بحجم العقد: التقييم الوحش على عقد كبير بيعمل أقصى ضرر.'],
      ['رد على التقييم الوحش مرة واحدة، علناً، للقارئ الجاي', 'قصير، ووقائعي، ومحترم. إنت مش بتكتب للكلاينت ده. إنت بتكتب لعشرين واحد جايين هيقروه. وعمرك ما تتخانق.'],
      ['اصرف ميزة الحذف بحساب — لو عندك', 'الناس اللي بتشتغل بتتكلم عن إمكانية حذف تقييم واحد بشكل دوري بتيجي مع Top Rated. وصفحة Top Rated عند أب-وورك نفسها مش ذاكراها، فاعتبرها غير مؤكدة: شوف حسابك بدل ما تعتمد عليها. ولو موجودة، خبّيها لأسوأ نتيجة قيمتها أعلى، مش لأول واحدة توجعك.'],
      ['ادخل نزاع بس لما يكون الدليل موجود', 'في السعر الثابت عندك ٧ أيام ترد فيهم. ودليلك هو ملخص الـ scope المكتوب والشغل المسلّم — وعشان كده عادة الملخص من الفصل ٥ موجودة. الوساطة الأول؛ والتحكيم فيه رسوم على الطرفين والتسوية الجزئية غالباً أرخص.'],
    ]),
    NOTE('One arbitration figure, unverified', 'رقم تحكيم واحد، غير مؤكد',
      'A commonly quoted arbitration fee is around $291 per party, described in the source itself as historical. Do not plan around it — check the current figure before choosing arbitration over settling.',
      'في رقم بيتقال كتير لرسوم التحكيم حوالي ٢٩١ دولار على كل طرف، والمصدر نفسه بيقول إنه رقم قديم. متخططش على أساسه — راجع الرقم الحالي قبل ما تختار التحكيم بدل التسوية.'),
    TODO(10, [
      'Look at every live contract. Is anyone going quiet?',
      'If yes, send the check-in today — before it becomes a rescue.',
      'Write your public-response template now, while you are calm. You will not be calm when you need it.',
    ], [
      'بص على كل عقد شغال. في حد بيسكت؟',
      'لو أيوه، ابعت رسالة اطمئنان النهاردة — قبل ما تبقى عملية إنقاذ.',
      'واكتب تمبليت الرد العلني دلوقتي وإنت هادي. مش هتكون هادي وقت ما تحتاجه.',
    ]),
  ] }, ar: { lede: 'العقد اللي بيتبهدل ليه ترتيب خطوات. وتعملهم بالمقلوب ده اللي بيحوّل أسبوع وحش لسنة وحشة.', outcome: 'الخمس خطط بالترتيب، وأنهي واحدة تنفع لموقفك الحالي.' } },

'7.5': { mins: 9, en: {
  lede: 'Contracts that quietly sit open, or end with nobody saying anything, are the slow leak almost nobody plugs.',
  outcome: 'Every idle contract closed on purpose, with feedback asked for.',
  blocks: [
    P('There is a category of damage that does not feel like damage. The project finished months ago, everyone was happy, and the contract is still technically open with no feedback on it. It is not a disaster — it is a contract that counts while teaching your score nothing.',
      'في نوع ضرر مش حاسس إنه ضرر. المشروع خلص من شهور، وكله كان مبسوط، والعقد لسه مفتوح تقنياً ومفيش عليه تقييم. مش كارثة — بس ده عقد بيتحسب وهو مش بيعلّم الـ score بتاعك حاجة.'),
    P('Pile enough of those up and they read as a freelancer who does not close things. Contracts with no payments that simply sit there are worse.',
      'وجمّع كام واحد زي دول وهيتقروا كفريلانسر مش بيقفل حاجاته. والعقود اللي مفيش عليها دفعات وقاعدة كده وبس أوحش.'),
    PULL('“If you were happy with how it went, closing the contract with feedback helps me a lot — and I am happy to reopen any time you need me.”',
      '«لو كنت مبسوط باللي حصل، إنك تقفل العقد وتسيب تقييم بيساعدني جداً — وتحت أمرك تفتحه تاني في أي وقت تحتاجني.»'),
    P('Send that. It is polite, it is honest, and it names the specific thing you need rather than hoping they intuit it. Most clients simply forget; almost none refuse when asked directly.',
      'ابعت الجملة دي. مؤدبة، وصادقة، وبتقول الحاجة اللي إنت محتاجها بالظبط بدل ما تستنى هو يستنتجها. وأغلب الكلاينتس بينسوا وخلاص؛ وتقريباً محدش بيرفض لما يتطلب منه مباشرة.'),
    H('Two things worth knowing about the timing', 'حاجتين تستاهلوا تعرفهم عن التوقيت'),
    STEPS([
      ['Your score needs a handful of completed outcomes before it appears at all', 'Roughly four or five. Before that, there is nothing to protect and everything to build — which is the argument for small, safe, closeable contracts early.'],
      ['A bad patch ages out', 'The score is computed over six, twelve and twenty-four month windows, and the best of the three is displayed. A bad month is diluted by good volume and eventually falls out of the window entirely. There is no shortcut, and anyone selling one is selling a scam.'],
    ], [
      ['الـ score محتاج شوية نتايج مكتملة قبل ما يظهر أصلاً', 'حوالي أربعة أو خمسة. وقبل كده مفيش حاجة تحميها وكل حاجة تبنيها — وده السبب اللي يخليك تاخد عقود صغيرة وآمنة وسهل تقفلها في البداية.'],
      ['الفترة الوحشة بتقدم وتخرج', 'الـ score بيتحسب على نوافذ ٦ و١٢ و٢٤ شهر، وبيتعرض أحسن واحدة فيهم. والشهر الوحش بيتميّع بحجم كويس وبعدين بيخرج من النافذة خالص. مفيش طريق مختصر، وأي حد بيبيعلك واحد ده بيبيعلك نصب.'],
    ]),
    TODO(12, [
      'Open your contracts list and count how many are idle.',
      'Send the closing message to every one of them today.',
      'Set a standing rule: no contract stays open more than fourteen days after final delivery.',
    ], [
      'افتح قايمة عقودك وعُد كام واحد ساكن.',
      'وابعت رسالة القفل لكل واحد فيهم النهاردة.',
      'وحط قاعدة ثابتة: مفيش عقد يفضل مفتوح أكتر من ١٤ يوم بعد آخر تسليم.',
    ]),
  ] }, ar: { lede: 'العقود اللي قاعدة مفتوحة بالسكات، أو اللي بتخلص من غير ما حد يقول حاجة، هي التسريب البطيء اللي تقريباً محدش بيقفله.', outcome: 'كل عقد ساكن متقفل بقرار، ومعاه طلب تقييم.' } }

};
MODULES.forEach(function (m) {
  m.lessons.forEach(function (l) {
    var f = FULL3[l.id];
    if (!f) return;
    if (f.mins) l.mins = f.mins;
    if (f.tool) l.tool = f.tool;
    l.en = Object.assign({}, l.en, f.en);
    l.ar = Object.assign({}, l.ar || {}, f.ar || {});
  });
});

/* ============================================================ FULL LESSONS — rates, retainers, the ladder */
const FULL4 = {

'8.1': { mins: 10, en: {
  lede: 'Raising your rate is not a confidence exercise. It is a trigger with a number attached.',
  outcome: 'A written trigger and a new rate, with the date you will apply it.',
  blocks: [
    P('Most freelancers raise their rate when they finally feel ready. Feeling ready is a bad signal, because it arrives years late and only after the market has already told you several times.',
      'أغلب الفريلانسرز بيرفعوا سعرهم لما يحسوا إنهم جاهزين. والإحساس بالجاهزية إشارة وحشة، لأنها بتيجي متأخرة بسنين وبعد ما السوق يكون قالك كذا مرة.'),
    H('Three triggers, any one of which is enough', 'تلات مؤشرات، أي واحد فيهم كفاية'),
    STEPS([
      ['Roughly five strong outcomes since your last raise', 'Not five contracts — five that ended well. Count them, do not estimate.'],
      ['You are being hired on the first or second proposal, repeatedly', 'That is not a sign you are good at proposals. It is the market telling you that you are cheap.'],
      ['You are at capacity', 'If you cannot take the next job, price is the only lever left that does not require working more hours.'],
    ], [
      ['حوالي خمس نتايج كويسة من آخر مرة رفعت فيها', 'مش خمس عقود — خمسة خلصوا كويس. عدهم، متخمنش.'],
      ['بتتعيّن من أول أو تاني proposal، بشكل متكرر', 'دي مش علامة إنك شاطر في الـ proposals. دي السوق بيقولك إنك رخيص.'],
      ['طاقتك اتملت', 'لو مش قادر تاخد الشغلانة الجاية، يبقى السعر هو الرافعة الوحيدة الباقية اللي مش محتاجة ساعات أكتر.'],
    ]),
    H('The mechanics', 'الميكانيكا'),
    P('Step size is <strong>10 to 20 percent</strong>. New clients are quoted the new rate immediately and the profile rate changes the same day — a profile showing the old number while you quote the new one reads as improvisation. Existing clients get two to three weeks of notice, framed around scope and value rather than apology: "from the first of next month my rate is $X; for our ongoing work I will hold $Y through December as a loyalty rate."',
      'مقدار الرفع من <strong>١٠ لـ ٢٠ بالمية</strong>. الكلاينتس الجداد بياخدوا السعر الجديد فوراً وسعر البروفايل بيتغير في نفس اليوم — بروفايل فيه الرقم القديم وإنت بتسعّر بالجديد بيتقري ارتجال. والكلاينتس الحاليين بياخدوا إشعار أسبوعين لتلاتة، بصيغة قيمة و scope مش اعتذار: «من أول الشهر الجاي سعري كذا؛ ولشغلنا المستمر هثبّت كذا لحد ديسمبر كسعر ولاء.»'),
    PULL('Losing the bottom fifth of your clients at a raise is not the raise failing. That is the raise working.',
      'إنك تخسر أقل خُمس من كلاينتسك عند الرفع ده مش فشل للرفع. ده الرفع وهو بيشتغل.'),
    NOTE('Where the bands sit', 'الفئات واقفة فين',
      'Rough global medians to position against rather than obey: copywriting $19–45 an hour with conversion specialists at $75–150; social content $25–55 with strategy-led systems above $80; short-form video $15–40 for basic cuts, $80–150 for motion and brand-level work; AI video and image production $30–60, or $1,000–5,000 per project end to end; brand and creative strategy $50–120, with top advisory well above that. Verify against live profiles in your own category before you use any of them.',
      'متوسطات عالمية تقريبية تقيس عليها مش تلتزم بيها: الكوبيرايتنج من ١٩ لـ ٤٥ دولار في الساعة والمتخصصين في التحويل من ٧٥ لـ ١٥٠؛ كونتنت السوشيال من ٢٥ لـ ٥٥ وفوق ٨٠ للأنظمة المبنية على استراتيجية؛ الفيديو القصير من ١٥ لـ ٤٠ للمونتاچ العادي ومن ٨٠ لـ ١٥٠ للموشن ومستوى البراند؛ إنتاج الفيديو والصور بالـ AI من ٣٠ لـ ٦٠، أو من ١٠٠٠ لـ ٥٠٠٠ للمشروع كامل؛ واستراتيجية البراند من ٥٠ لـ ١٢٠، والاستشارات العليا فوق كده بكتير. راجعها على بروفايلات شغالة في تصنيفك قبل ما تستخدم أي رقم منهم.'),
    P('One thing that is not a discount: where you live. A client is buying an outcome. An Egyptian cost of living is your margin, not your price.',
      'وحاجة واحدة مش خصم: إنت ساكن فين. الكلاينت بيشتري نتيجة. وتكلفة المعيشة في مصر دي هامش ربحك، مش سعرك.'),
    TODO(10, [
      'Count your strong outcomes since the last raise.',
      'If it is five or more, calculate the new rate at plus fifteen percent and write the date you will apply it.',
      'Update the profile rate on that date, not later.',
    ], [
      'عُد نتايجك الكويسة من آخر رفع.',
      'ولو خمسة أو أكتر، احسب السعر الجديد بزيادة ١٥٪ واكتب تاريخ هتطبقه فيه.',
      'وغيّر سعر البروفايل في التاريخ ده، مش بعده.',
    ]),
  ] }, ar: { lede: 'رفع سعرك مش تمرين ثقة بالنفس. ده مؤشر ومعاه رقم.', outcome: 'مؤشر مكتوب وسعر جديد، ومعاهم تاريخ التطبيق.' } },

'8.2': { mins: 12, en: {
  lede: 'One retainer changes your income, your score, and how much time you spend bidding. Most people never ask for one.',
  outcome: 'A retainer pitch sent to your happiest current client.',
  blocks: [
    P('Bidding is expensive in three currencies: Connects, hours, and the emotional weight of starting from zero every month. A retainer removes all three at once, and it is usually one sentence away.',
      'التقديم غالي بتلات عملات: Connects، وساعات، والتقل النفسي إنك تبدأ من الصفر كل شهر. والريتينر بيشيل التلاتة مرة واحدة، وغالباً بيبعد عنك جملة واحدة.'),
    PULL('“Most clients keep me on monthly for the ongoing side of this — want me to sketch what that would look like for you?”',
      '«أغلب الكلاينتس بيثبتوني شهرياً على الجزء المستمر من ده — تحب أرسملك شكلها هتبقى إزاي عندك؟»'),
    P('Send it at the post-delivery check-in, when the work has just landed and the result is visible. Not later, when the moment has cooled and you are effectively cold-pitching someone who already forgot how good it felt.',
      'ابعتها في متابعة ما بعد التسليم، وقت ما الشغل يكون لسه نازل والنتيجة باينة. مش بعدين، لما اللحظة تبرد وتبقى عملياً بتعرض على حد نسي خلص إحساسه كان حلو قد إيه.'),
    H('What a retainer does that a project cannot', 'الريتينر بيعمل إيه ما المشروع ميقدرش'),
    STEPS([
      ['It stabilises income', 'The obvious one, and the least important of the four.'],
      ['It feeds your score repeatedly', 'A contract that keeps paying is counted as an ongoing positive outcome rather than a single finished one.'],
      ['It raises your repeat-client signal', 'Repeat clients are an input to how the platform ranks and matches you. A retainer is a repeat client that never stops repeating.'],
      ['It removes the bidding cost entirely', 'No Connects, no proposal, no competing against forty people for work you already have.'],
    ], [
      ['بيثبّت الدخل', 'الحاجة الواضحة، وأقلهم أهمية في الأربعة.'],
      ['بيغذّي الـ score بشكل متكرر', 'العقد اللي بيفضل يدفع بيتحسب نتيجة إيجابية مستمرة مش نتيجة واحدة خلصت.'],
      ['بيرفع إشارة الكلاينت المتكرر', 'الكلاينتس المتكررين داخلين في طريقة المنصة في ترتيبك ومطابقتك. والريتينر ده كلاينت متكرر مش بيبطل تكرار.'],
      ['بيشيل تكلفة التقديم بالكامل', 'مفيش Connects، ولا proposal، ولا منافسة مع أربعين واحد على شغل إنت واخده أصلاً.'],
    ]),
    P('Shape it as either a monthly fixed fee for a defined scope, or a weekly hour cap. Both work. What does not work is "available whenever you need me" — that is not a retainer, that is a standing invitation to scope creep with no fence around it.',
      'شكّله يا إما رسم شهري ثابت مقابل scope محدد، يا إما سقف ساعات أسبوعي. الاتنين شغالين. اللي مش شغال هو «موجود في أي وقت تحتاجني» — دي مش ريتينر، دي دعوة مفتوحة لـ scope creep من غير أي سور.'),
    TODO(12, [
      'Name your happiest current or recent client.',
      'Write what the ongoing version of your work for them would actually contain, in three bullets.',
      'Send the pitch today. The worst outcome is a no, and a no costs you nothing you currently have.',
    ], [
      'حدد أكتر كلاينت مبسوط عندك دلوقتي أو قريب.',
      'واكتب النسخة المستمرة من شغلك معاه هتحتوي على إيه، في تلات نقط.',
      'وابعت العرض النهاردة. أسوأ نتيجة إنه يقول لأ، ولأ دي متكلفكش حاجة إنت واخدها دلوقتي.',
    ]),
  ] }, ar: { lede: 'ريتينر واحد بيغيّر دخلك وتقييمك والوقت اللي بتصرفه في التقديم. وأغلب الناس عمرها ما بتطلبه.', outcome: 'عرض ريتينر متبعت لأكتر كلاينت مبسوط عندك.' } },

'8.3': { mins: 11, en: {
  lede: 'Top Rated is not awarded for being good. It is a set of conditions, and conditions can be engineered.',
  outcome: 'A dated checklist showing exactly which condition you are furthest from.',
  blocks: [
    P('The badges are a ladder, and each rung unlocks better clients, who bring bigger contracts, which qualify you for the next rung. Which means the order matters more than the effort.',
      'البادچات سلّم، وكل درجة بتفتح كلاينتس أحسن، بيجيبوا عقود أكبر، اللي بتأهلك للدرجة اللي بعدها. يعني الترتيب أهم من المجهود.'),
    STEPS([
      ['Rising Talent', 'For new freelancers. A profile at 100% completeness, passing screening, and genuine activity — proposals and logins. No score required yet. Get it by finishing the profile on day one rather than over a month.'],
      ['Top Rated — roughly the top 10%', 'JSS at 90% or above for 13 of the last 16 weeks, a first hire more than 90 days ago, at least $1,000 earned in the past 12 months, 100% profile completeness, activity in the last 90 days, and a clean record. Perks include better search placement and a periodic one-time feedback removal.'],
      ['Top Rated Plus — roughly the top 3%', 'Everything above, plus at least one large contract in the past 12 months with no negative outcome. The large-contract threshold varies by category — commonly cited as around $5,000 for writing and creative, higher for development.'],
      ['Expert-Vetted — roughly the top 1%', 'Invite only, with a talent-manager interview and skills screening, in selected categories. You cannot apply. You arrive.'],
    ], [
      ['Rising Talent', 'للفريلانسرز الجداد. بروفايل ١٠٠٪ مكتمل، وتعدّي الفحص، ونشاط حقيقي — proposals ودخول. ومش مطلوب score لسه. خده بإنك تخلّص البروفايل في أول يوم مش على مدار شهر.'],
      ['Top Rated — تقريباً أعلى ١٠٪', 'الـ JSS ٩٠٪ أو أكتر لمدة ١٣ أسبوع من آخر ١٦، وأول تعيين من أكتر من ٩٠ يوم، وعلى الأقل ١٠٠٠ دولار مكسوبين في آخر ١٢ شهر، وبروفايل مكتمل ١٠٠٪، ونشاط في آخر ٩٠ يوم، وسجل نضيف. والمزايا فيها ترتيب أحسن في البحث وإمكانية حذف تقييم واحد بشكل دوري.'],
      ['Top Rated Plus — تقريباً أعلى ٣٪', 'كل اللي فوق، زائد عقد كبير واحد على الأقل في آخر ١٢ شهر من غير أي نتيجة سلبية عليه. وحد العقد الكبير بيختلف حسب التصنيف — بيتقال عادةً حوالي ٥٠٠٠ دولار للكتابة والإبداع، وأعلى في البرمجة.'],
      ['Expert-Vetted — تقريباً أعلى ١٪', 'بالدعوة بس، ومعاها إنترفيو مع talent manager وفحص مهارات، في تصنيفات مختارة. مش بتقدّم عليها. بتوصلها.'],
    ]),
    NOTE('Verified, and one thing that is not', 'متأكد منه، وحاجة واحدة لأ',
      'The Top Rated numbers above — a Job Success Score of 90% or higher, held for at least 13 of the last 16 weeks, 12-month earnings of at least $1,000, a first project more than 90 days ago, a 100% complete profile, and activity in the past 90 days — were checked word for word against Upwork\'s own help page in August 2026. The one claim that is <strong>not</strong> confirmed there is the periodic feedback-removal perk: practitioners describe it, Upwork\'s Top Rated page does not mention it. Treat that one as unverified, and re-check every figure before you build a dated plan on it, because thresholds change quietly.',
      'أرقام الـ Top Rated اللي فوق — JSS ٩٠٪ أو أعلى، محافظ عليه ١٣ أسبوع على الأقل من آخر ١٦، وأرباح ١٢ شهر ١٠٠٠ دولار على الأقل، وأول مشروع من أكتر من ٩٠ يوم، وبروفايل مكتمل ١٠٠٪، ونشاط في آخر ٩٠ يوم — دي اتراجعت كلمة كلمة من صفحة المساعدة بتاعة أب-وورك نفسها في أغسطس ٢٠٢٦. والحاجة الوحيدة اللي <strong>مش</strong> مأكدة هناك هي ميزة حذف التقييم الدورية: الناس اللي بتشتغل بتتكلم عنها، وصفحة Top Rated مش ذاكراها. اعتبرها غير مؤكدة، وراجع كل رقم قبل ما تبني عليه خطة بتواريخ، لأن الحدود بتتغير بهدوء.'),
    TODO(12, [
      'Write the six Top Rated conditions down and mark each met or not met.',
      'Identify the one you are furthest from. That is your only target this quarter.',
      'Put a date on it.',
    ], [
      'اكتب شروط Top Rated الستة وعلّم على كل واحد: متحقق ولا لأ.',
      'وحدد الأبعد عنك. ده هدفك الوحيد الربع سنة ده.',
      'وحطله تاريخ.',
    ]),
  ] }, ar: { lede: 'الـ Top Rated مش بتتدي لأنك شاطر. دي مجموعة شروط، والشروط ممكن تتهندس.', outcome: 'تشيك ليست بتواريخ بتوضح إنت أبعد عن أنهي شرط بالظبط.' } },

'8.4': { mins: 13, en: {
  lede: 'Top Rated Plus needs one large contract with a clean record. Most people wait for one to appear. It can be built.',
  outcome: 'A plan to construct a qualifying contract from work you are already doing.',
  blocks: [
    P('A large contract is usually assumed to be a large client. Often it is the same client you already have, structured differently.',
      'العقد الكبير الناس بتفترض إنه كلاينت كبير. وغالباً بيبقى نفس الكلاينت اللي عندك خلاص، بس متظبّط بشكل مختلف.'),
    H('Two ways to build one', 'طريقتين تبنيه بيهم'),
    STEPS([
      ['Bundle a retainer quarter into a single contract', 'Three months of a $1,500 monthly retainer billed as three separate contracts is three modest outcomes. The same work under one contract is one large one. Same money, same client, different qualification.'],
      ['Upsell a project into a programme', 'A strategy document becomes a strategy document plus implementation plus a ninety-day optimisation phase, sold as one engagement with phased milestones. This is exactly what the Premium Architect model does by default.'],
    ], [
      ['اجمع ربع سنة من الريتينر في عقد واحد', 'تلات شهور ريتينر بـ ١٥٠٠ دولار في الشهر لو اتفوتروا كتلات عقود منفصلة دول تلات نتايج متوسطة. ونفس الشغل تحت عقد واحد ده نتيجة كبيرة واحدة. نفس الفلوس، ونفس الكلاينت، وتأهيل مختلف.'],
      ['كبّر المشروع لبرنامج', 'دوكيومنت استراتيجية بيبقى دوكيومنت زائد تنفيذ زائد مرحلة تحسين ٩٠ يوم، بتتباع كشغلانة واحدة بمراحل. وده بالظبط اللي نموذج المهندس الـ Premium بيعمله افتراضياً.'],
    ]),
    PULL('The rule that matters more than the size: no negative outcome on it. A large contract that ends badly is the single most damaging event available to you, because contract value cuts both ways.',
      'والقاعدة الأهم من الحجم: مفيش نتيجة سلبية عليه. العقد الكبير اللي بيخلص وحش ده أكتر حدث مؤذي ممكن يحصلك، لأن قيمة العقد بتقطع في الاتجاهين.'),
    P('Which means the engineering has two halves. Build the contract, then protect it obsessively: the full delivery ritual, the cadence, the written recaps, the free rescue round if anything wobbles. Do not experiment on a qualifying contract.',
      'يعني الهندسة نصين. تبني العقد، وبعدين تحميه بهوس: طقس التسليم كامل، والإيقاع، والملخصات المكتوبة، وجولة الإنقاذ المجانية لو حاجة اتلخبطت. متجربش على عقد مؤهل.'),
    TODO(15, [
      'List your current clients and what each pays across a quarter.',
      'Identify the one closest to the threshold when bundled.',
      'Draft the restructure message — same work, same money, one contract, and say why it is simpler for them too.',
    ], [
      'اكتب كلاينتسك الحاليين وكل واحد بيدفع كام في ربع سنة.',
      'وحدد أقرب واحد للحد لو اتجمع.',
      'واكتب رسالة إعادة الهيكلة — نفس الشغل، نفس الفلوس، عقد واحد، وقول ليه ده أسهل ليهم كمان.',
    ]),
  ] }, ar: { lede: 'الـ Top Rated Plus محتاج عقد كبير واحد بسجل نضيف. وأغلب الناس بتستنى واحد يظهر. وهو ممكن يتبني.', outcome: 'خطة لبناء عقد مؤهل من شغل إنت عامله خلاص.' } },

'8.5': { mins: 12, en: {
  lede: 'There is a point where bidding stops being the job. Reaching it is a set of mechanics, not a reward for endurance.',
  outcome: 'The three inbound levers switched on, and one channel started off the platform.',
  blocks: [
    P('Every hour spent bidding is an hour bought with Connects and attention. The freelancers who escape it did not simply get famous — they turned on the surfaces that bring work to them.',
      'كل ساعة بتصرفها في التقديم دي ساعة مدفوع تمنها Connects وتركيز. والفريلانسرز اللي خرجوا من الدورة دي مبقوش مشهورين وخلاص — دول شغّلوا الأسطح اللي بتجيبلهم الشغل.'),
    H('The three levers inside the platform', 'التلات رافعات جوه المنصة'),
    STEPS([
      ['Be shortlistable', 'Clients receive AI-generated shortlists. Those match on your profile language, your earnings history in that category, and your score. Being shortlisted is effectively a free invite — and the single biggest lever on it is writing your profile the way clients write job posts, not the way freelancers describe themselves.'],
      ['Protect your interview rate', 'Proposal ranking is behavioural, not literary. Your proposal-to-interview rate, your score, your category earnings, your speed and your repeat-client rate all feed it. Every scattershot proposal lowers your future ranking. Selective bidding is not thrift, it is an investment.'],
      ['Stay visibly active', 'Respond to every invite, even to decline — response rate is tracked. Do not let the profile go idle. The availability badge buys visibility cheaply during weeks when you actually want work.'],
    ], [
      ['خليك قابل للترشيح', 'الكلاينتس بيوصلهم قوايم مرشحين معمولة بالـ AI. والقوايم دي بتطابق على لغة بروفايلك، وتاريخ أرباحك في التصنيف ده، وتقييمك. والترشيح ده عملياً دعوة ببلاش — وأكبر رافعة عليه إنك تكتب بروفايلك بطريقة الكلاينتس في كتابة البوستات، مش بطريقة الفريلانسرز في وصف نفسهم.'],
      ['احمِ نسبة الإنترفيو بتاعتك', 'ترتيب الـ proposals سلوكي مش أدبي. نسبة تحويل الـ proposal لإنترفيو، وتقييمك، وأرباحك في التصنيف، وسرعتك، ونسبة الكلاينتس المتكررين — كلهم بيغذّوه. وكل proposal مرشوش بينزّل ترتيبك المستقبلي. والتقديم الانتقائي مش توفير، ده استثمار.'],
      ['خليك نشط بشكل باين', 'رد على كل دعوة، حتى لو بالاعتذار — نسبة الرد بتتقاس. ومتسبش البروفايل يسكن. وبادچ التوفر بيشتري لك ظهور برخص في الأسابيع اللي إنت فعلاً عايز فيها شغل.'],
    ]),
    H('And one outside it', 'وواحدة بره المنصة'),
    P('The pattern in every decoded operator who escaped the bidding treadmill is the same: platform success first, then a public channel — LinkedIn, YouTube, a portfolio site — that eventually feeds both. Upwork becomes one pipe rather than the business.',
      'النمط في كل واحد متفكّك خرج من دوامة التقديم واحد: نجاح على المنصة الأول، وبعدين قناة عامة — LinkedIn، أو يوتيوب، أو موقع بورتفوليو — وبعد فترة بتغذّي الاتنين. وأب-وورك بتبقى ماسورة واحدة مش البيزنس كله.'),
    NOTE('The two-year clock', 'عداد السنتين',
      'Any client you met on Upwork must be paid through Upwork for 24 months from first contact — suggesting otherwise in chat can trigger automated flags and suspension. After 24 months, working with them directly is allowed and free. There is also an official conversion fee path if you want to move earlier. Factor the clock into how you value a long relationship: today\'s retainer is tomorrow\'s fee-free direct client, legally.',
      'أي كلاينت قابلته على أب-وورك لازم الدفع يعدّي من عليها لمدة ٢٤ شهر من أول تواصل — وإنك تلمّح بغير كده في الشات ممكن يشغّل إنذارات ويوقفك. وبعد الـ ٢٤ شهر، الشغل معاه مباشرة مسموح وببلاش. وفي كمان مسار رسمي برسوم تحويل لو عايز تخرج بدري. حط العداد ده في تقييمك للعلاقة الطويلة: ريتينر النهاردة هو كلاينتك المباشر بدون رسوم بكرة، وبشكل قانوني.'),
    TODO(15, [
      'Rewrite one section of your profile in the exact language of three job posts you would want.',
      'Reply to every outstanding invite today, including the ones you will decline.',
      'Pick one off-platform channel and publish one thing this week. One.',
    ], [
      'أعد كتابة قسم واحد من بروفايلك بنفس كلام تلات بوستات إنت عايز زيهم.',
      'ورد على كل دعوة معلقة النهاردة، حتى اللي هترفضها.',
      'واختار قناة واحدة بره المنصة وانشر حاجة واحدة الأسبوع ده. واحدة.',
    ]),
  ] }, ar: { lede: 'في نقطة التقديم بيبطل يبقى هو الشغلانة. والوصول ليها ميكانيكا، مش مكافأة على طول البال.', outcome: 'التلات رافعات الداخلية مفعّلة، وقناة واحدة بدأت بره المنصة.' } }

};
MODULES.forEach(function (m) {
  m.lessons.forEach(function (l) {
    var f = FULL4[l.id];
    if (!f) return;
    if (f.mins) l.mins = f.mins;
    if (f.tool) l.tool = f.tool;
    l.en = Object.assign({}, l.en, f.en);
    l.ar = Object.assign({}, l.ar || {}, f.ar || {});
  });
});

/* ============================================================ FULL LESSONS — the Egypt money chapter */
const FULL5 = {

'5.3': { mins: 11, en: {
  lede: 'Every route charges you twice. The fee is printed. The exchange rate is not, and it is the larger of the two.',
  outcome: 'A written rule for when you hold dollars and when you convert.',
  blocks: [
    P('You can hold foreign currency in Egypt. Egyptian commercial banks offer accounts denominated in dollars, euros and pounds, and receiving foreign income into them is permitted. That part is settled.',
      'تقدر تمسك عملة أجنبية في مصر. البنوك التجارية المصرية بتقدّم حسابات بالدولار واليورو والإسترليني، واستلام دخل من بره فيها مسموح. الجزء ده محسوم.'),
    P('What is not settled is what it costs you, because the cost arrives in two pieces and only one of them is advertised.',
      'اللي مش محسوم هو بيكلفك كام، لأن التكلفة بتيجي على جزئين وواحد بس فيهم بيتعلن عنه.'),
    PLAIN('The <strong>fee</strong> is the number the provider tells you — one percent, three percent. The <strong>spread</strong> is the gap between the real exchange rate and the one they give you. The spread is usually bigger, and almost nobody quotes it before the transaction.',
      'الـ <strong>رسوم</strong> هي الرقم اللي الشركة بتقولهولك — واحد في المية، تلاتة في المية. والـ <strong>سبريد</strong> هو الفرق بين سعر الصرف الحقيقي والسعر اللي بيدوهولك. والسبريد عادةً أكبر، وتقريباً محدش بيقولهولك قبل العملية.'),
    NOTE('The specific trap', 'الفخ المحدد',
      'Documented practice at Egyptian banks is that the conversion rate is set by the bank on the day of the transaction, with no upfront disclosure of the spread. Which means "I will just convert it at the bank" is a decision made without a price. Ask for the exact rate before you confirm anything, every single time.',
      'الممارسة الموثّقة في البنوك المصرية إن سعر التحويل بيحدده البنك يوم العملية، من غير ما يعلن السبريد قبلها. يعني «هحوّلها في البنك عادي» ده قرار متاخد من غير سعر. اسأل على السعر بالظبط قبل ما تأكد أي حاجة، في كل مرة.'),
    H('What a plain bank wire actually costs', 'التحويل البنكي العادي بيكلف كام فعلاً'),
    P('On a traditional SWIFT transfer, correspondent banks in the middle each deduct a slice — commonly cited at $10 to $25 in transit — and the receiving bank applies its own rate, often one to three percent below the mid-market rate. Neither of those appears on the sending screen.',
      'في التحويل البنكي التقليدي، البنوك الوسيطة في النص كل واحد بياخد شريحة — الرقم اللي بيتقال عادةً من ١٠ لـ ٢٥ دولار في الطريق — والبنك المستقبِل بيطبق سعره هو، وغالباً من واحد لتلاتة في المية تحت سعر السوق. ولا واحدة من دول بتظهر على الشاشة وإنت بتبعت.'),
    H('The rule worth writing down', 'القاعدة اللي تستاهل تكتبها'),
    STEPS([
      ['Convert what you will spend this month', 'Rent, food, subscriptions in pounds. There is no strategy in holding dollars you are about to need.'],
      ['Hold the rest, if you can', 'Especially if any of your costs are in dollars — software, ads, hardware. Converting to pounds and back is paying the spread twice for nothing.'],
      ['Never convert on autopilot', 'The single most expensive habit is letting a platform convert automatically on arrival because it was the default. Turn that off and decide each time.'],
      ['Compare on what lands, not on the fee', 'Take the same amount through two routes and compare the pounds that arrive. That is the only number that is true.'],
    ], [
      ['حوّل اللي هتصرفه الشهر ده', 'الإيجار والأكل والاشتراكات بالجنيه. مفيش استراتيجية في إنك تمسك دولار إنت محتاجه بعد أسبوع.'],
      ['وامسك الباقي، لو تقدر', 'خصوصاً لو أي من مصاريفك بالدولار — سوفتوير، إعلانات، أجهزة. إنك تحوّل لجنيه وترجع تحوّل تاني ده دفع للسبريد مرتين على الفاضي.'],
      ['عمرك ما تحوّل على الطيار الآلي', 'أغلى عادة هي إنك تسيب المنصة تحوّل أوتوماتيك أول ما الفلوس توصل عشان دي كانت الحالة الافتراضية. اقفلها وقرر كل مرة.'],
      ['قارن باللي بينزل، مش بالرسوم', 'عدّي نفس المبلغ على طريقتين وقارن الجنيه اللي وصل. ده الرقم الوحيد الصادق.'],
    ]),
    NOTE('Cards are a separate problem', 'الكروت مشكلة منفصلة',
      'Many Egyptian debit and credit cards either cannot be used internationally or carry limits low enough to block ordinary purchases. If you need to pay for software or ads in dollars, solve that with the account you receive into rather than assuming your local card will cover it.',
      'كتير من كروت الخصم والائتمان المصرية يا إما مش شغالة دولياً يا إما عليها حدود واطية لدرجة إنها بتوقف مشتريات عادية. فلو محتاج تدفع لسوفتوير أو إعلانات بالدولار، حل ده من الحساب اللي بتستلم فيه بدل ما تفترض إن كارتك المحلي هيغطي.'),
    W('payout'),
    TODO(15, [
      'Open your payout settings and find any automatic conversion. Turn it off.',
      'Call or chat with your provider and ask two questions: what is the total fee, and what rate would I get today.',
      'Write your own hold-versus-convert rule in one sentence and stick it where you do your monthly withdrawal.',
    ], [
      'افتح إعدادات السحب ودوّر على أي تحويل أوتوماتيك. اقفله.',
      'وكلّم شركتك واسأل سؤالين: إجمالي الرسوم كام، والسعر اللي هاخده النهاردة كام.',
      'واكتب قاعدتك في المسك والتحويل في جملة وحطها في المكان اللي بتسحب منه كل شهر.',
    ]),
  ] }, ar: {
  lede: 'كل طريقة بتحاسبك مرتين. الرسوم مكتوبة. وسعر الصرف لأ، وهو الأكبر فيهم.',
  outcome: 'قاعدة مكتوبة لإمتى تمسك دولار وإمتى تحوّل.' } },

'5.4': { mins: 12, en: {
  lede: 'Foreign income is taxable income. This lesson is orientation, not advice — and it is honest about which parts nobody can tell you online.',
  outcome: 'Your records set up correctly from today, and one question list for an accountant.',
  blocks: [
    NOTE('Read this first', 'اقرا دي الأول',
      'I am not an accountant and this is not tax advice. Rules, brackets and thresholds change, published summaries disagree with each other, and your own situation — employed as well as freelancing, a company, a family arrangement — changes the answer entirely. What follows is the shape of the thing, so that you can ask an Egyptian accountant precise questions instead of vague ones.',
      'أنا مش محاسب وده مش استشارة ضريبية. القواعد والشرايح والحدود بتتغير، والملخصات المنشورة بتختلف مع بعض، ووضعك إنت — موظف وبتشتغل فريلانس، أو عندك شركة، أو ترتيب عائلي — بيغيّر الإجابة تماماً. واللي جاي ده شكل الموضوع، عشان تقدر تسأل محاسب مصري أسئلة محددة بدل أسئلة مبهمة.'),
    P('Egypt taxes personal income on a progressive scale: a slice that is not taxed at all, then bands that rise as income rises, filed once a year for the previous calendar year. Freelance income sits inside that system rather than outside it.',
      'مصر بتفرض ضريبة على الدخل الشخصي بشكل تصاعدي: شريحة مش بتتحاسب خالص، وبعدين شرايح بتزيد كل ما الدخل يزيد، وبتتقدّم مرة في السنة عن السنة اللي فاتت. ودخل الفريلانس جوه النظام ده مش بره.'),
    H('Where the published sources disagree', 'فين المصادر المنشورة بتختلف'),
    P('This is the part worth being blunt about. A widely circulated 2026 freelancing guide states a zero-rated band up to EGP 15,000 and a registration threshold at EGP 60,000. Deloitte, summarising Law No. 7 of 2024, states an annual personal exemption of <strong>EGP 20,000</strong> and a zero-rated bracket reaching <strong>EGP 40,000</strong>, with the top rate at 27.5%. Those cannot both be right.',
      'ودي الحتة اللي تستاهل صراحة. في دليل فريلانس متداول من ٢٠٢٦ بيقول إن الشريحة المعفاة لحد ١٥ ألف جنيه وحد التسجيل ٦٠ ألف. وديلويت، وهي بتلخص القانون رقم ٧ لسنة ٢٠٢٤، بتقول إن الإعفاء الشخصي السنوي <strong>٢٠ ألف جنيه</strong> والشريحة الصفرية بتوصل <strong>٤٠ ألف</strong>، وأعلى نسبة ٢٧.٥٪. مستحيل الاتنين يكونوا صح.'),
    PULL('When a course quotes you a tax bracket with confidence, check who they got it from. Numbers this specific age badly, and the cost of being wrong lands on you, not on them.',
      'لما كورس يقولك شريحة ضريبية بثقة، شوف جابها منين. الأرقام المحددة كده بتقدم بسرعة، وتكلفة الغلط بتقع عليك إنت مش عليهم.'),
    P('So the course will not hand you a bracket table to rely on. Get the current numbers from the Egyptian Tax Authority itself, at eta.gov.eg, or from an accountant who does this weekly.',
      'فالكورس مش هيديك جدول شرايح تعتمد عليه. هات الأرقام الحالية من مصلحة الضرايب المصرية نفسها على eta.gov.eg، أو من محاسب بيعمل ده كل أسبوع.'),
    H('What you can do today, regardless of the numbers', 'اللي تقدر تعمله النهاردة، بغض النظر عن الأرقام'),
    STEPS([
      ['Keep the ledger from the first dollar', 'Upwork already keeps it for you: Reports, then Transactions. Export it monthly. Reconstructing two years of income later is the expensive version of this task.'],
      ['Record the EGP amount that actually landed, and the date', 'Not the dollar figure on the contract. The pounds that arrived, and the rate you got. This is the number that matters and the one nobody keeps.'],
      ['Keep the fee side too', 'Upwork\'s service fee, Connects, your subscription, the withdrawal fees. These are business costs and they are only deductible if they are documented.'],
      ['Ask an accountant four specific questions', 'Do I need to register at my income level? Which form and when? Is my Upwork service fee deductible? What happens to the years I have already earned and not declared?'],
    ], [
      ['امسك الدفتر من أول دولار', 'أب-وورك ماسكاه لك أصلاً: Reports وبعدين Transactions. صدّره كل شهر. وإنك تعيد تركيب سنتين دخل بعدين دي النسخة الغالية من الشغلانة دي.'],
      ['سجّل المبلغ بالجنيه اللي نزل فعلاً، والتاريخ', 'مش الرقم بالدولار اللي في العقد. الجنيه اللي وصل، والسعر اللي خدته. ده الرقم المهم وهو اللي محدش بيمسكه.'],
      ['امسك ناحية المصاريف كمان', 'رسوم أب-وورك، والـ Connects، والاشتراك، ورسوم السحب. دي مصاريف شغل ومش بتتخصم غير لو موثّقة.'],
      ['واسأل محاسب أربع أسئلة محددة', 'محتاج أسجّل عند مستوى دخلي ده؟ وأنهي استمارة وإمتى؟ ورسوم أب-وورك بتتخصم؟ وإيه اللي بيحصل للسنين اللي كسبت فيها ومقدّمتش عنها؟'],
    ]),
    NOTE('The two things worth knowing about timing', 'حاجتين تستاهلوا تعرفهم عن التوقيت',
      'Egypt files annually for the previous calendar year, with a deadline in the first quarter — commonly cited as 31 March. There is also a voluntary social insurance route for the self-employed, which buys pension and healthcare cover rather than being a tax. Confirm both before you plan around them.',
      'مصر بتقدّم إقرار سنوي عن السنة الميلادية اللي فاتت، والموعد النهائي في الربع الأول — الرقم اللي بيتقال عادةً ٣١ مارس. وفي كمان مسار تأمينات اجتماعية اختياري لأصحاب المهن الحرة، وده بيشتري معاش ورعاية صحية مش ضريبة. أكّد الاتنين قبل ما تخطط عليهم.'),
    TODO(20, [
      'Export your Upwork transactions for every month you have earned.',
      'Start a sheet with four columns: date, USD received, EGP landed, rate.',
      'Book a call with an Egyptian accountant and bring the four questions above. One hour now is cheaper than any of the alternatives.',
    ], [
      'صدّر معاملاتك من أب-وورك عن كل شهر كسبت فيه.',
      'وافتح شيت بأربع خانات: التاريخ، الدولار المستلم، الجنيه اللي نزل، السعر.',
      'واحجز كول مع محاسب مصري وخد معاك الأربع أسئلة اللي فوق. ساعة دلوقتي أرخص من أي بديل.',
    ]),
  ] }, ar: {
  lede: 'الدخل من بره دخل خاضع للضريبة. الدرس ده توجيه مش استشارة — وبيقولك بصراحة أنهي أجزاء محدش على النت يقدر يحسمهالك.',
  outcome: 'دفاترك متظبّطة صح من النهاردة، وقايمة أسئلة لمحاسب.' } }

};
MODULES.forEach(function (m) {
  m.lessons.forEach(function (l) {
    var f = FULL5[l.id];
    if (!f) return;
    if (f.mins) l.mins = f.mins;
    if (f.tool) l.tool = f.tool;
    l.en = Object.assign({}, l.en, f.en);
    l.ar = Object.assign({}, l.ar || {}, f.ar || {});
  });
});


/* ============================================================ FIGURES placed into lessons */
var FIGPLACE = {
  '3.1': [[2, 'jobcard', 'The five things worth reading before you spend a single Connect.',
    'الخمس حاجات اللي تستاهل تقراها قبل ما تصرف Connect واحد.']],
  '3.2': [[2, 'preview', 'The client is not reading your proposal. They are scanning four cards.',
    'الكلاينت مش بيقرا الـ proposal بتاعك. هو بيمسح أربع كروت بعينه.']],
  '5.2': [[3, 'money', 'Where a thousand dollars actually goes on the way to your account.',
    'الألف دولار بيروحوا فين فعلاً وهما في طريقهم لحسابك.']],
  '7.1': [[6, 'jss', 'Three windows are calculated. You are shown the kindest one.',
    'تلات نوافذ بتتحسب. وبيتعرضلك أطيب واحدة فيهم.']],
  '8.3': [[1, 'ladder', 'Each rung is a set of conditions, not a reward for endurance.',
    'كل درجة مجموعة شروط، مش مكافأة على طول البال.']]
};
MODULES.forEach(function (m) {
  m.lessons.forEach(function (l) {
    var p = FIGPLACE[l.id];
    if (!p || !l.en || !l.en.blocks) return;
    p.slice().reverse().forEach(function (x) {
      var at = Math.min(x[0], l.en.blocks.length);
      l.en.blocks.splice(at, 0, FIG(x[1], x[2], x[3]));
    });
  });
});
