/* Landed — app engine: routing, state, views, widgets. */
(function () {
  'use strict';

  /* ---------------- state ---------------- */
  var mem = {};
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem('landed.' + k); return v === null ? (k in mem ? mem[k] : d) : JSON.parse(v); } catch (e) { return k in mem ? mem[k] : d; } },
    set: function (k, v) { mem[k] = v; try { localStorage.setItem('landed.' + k, JSON.stringify(v)); } catch (e) { } }
  };

  var S = {
    lang: store.get('lang', 'en'),
    name: store.get('name', ''),
    saved: store.get('saved', []),
    done: store.get('done', []),
    tab: 'path',
    q: '',
    cert: store.get('cert', 'portrait')
  };

  var t = function (en, ar) { return S.lang === 'en' ? en : ar; };
  var N = function (v) { return S.lang === 'en' ? String(v) : String(v).replace(/\d/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'[d]; }); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); };
  var $ = function (id) { return document.getElementById(id); };

  var AGO = [
    ['posted 4 hours ago', 'اتنشر من ٤ ساعات'], ['posted 11 hours ago', 'اتنشر من ١١ ساعة'],
    ['posted yesterday', 'اتنشر امبارح'], ['posted 2 days ago', 'اتنشر من يومين']
  ];

  /* ---------------- helpers ---------------- */
  function allLessons() {
    var out = [];
    MODULES.forEach(function (m) { m.lessons.forEach(function (l) { out.push({ m: m, l: l }); }); });
    return out;
  }
  function lessonById(id) {
    var f = allLessons().filter(function (x) { return x.l.id === id; })[0];
    return f || null;
  }
  function hasContent(l) { return !!(l.en && l.en.blocks && l.en.blocks.length); }
  function lt(l) { return t(l.en.title, (l.ar && l.ar.title) || l.en.title); }
  function ll(l) { return t(l.en.lede, (l.ar && l.ar.lede) || l.en.lede); }
  function lo(l) { return t(l.en.outcome, (l.ar && l.ar.outcome) || l.en.outcome); }
  function initials(name) {
    var p = (name || '').trim().split(/\s+/).filter(Boolean);
    if (!p.length) return '—';
    return (p[0][0] + (p.length > 1 ? p[p.length - 1][0] : '')).toUpperCase();
  }
  function chapNum(m) { return MODULES.indexOf(m) + 1; }
  function lessonNum(m, l) { return m.lessons.indexOf(l) + 1; }
  function chapLabel(m) { return t('Chapter ' + chapNum(m), 'الفصل ' + N(chapNum(m))); }
  function totalLessons() { return allLessons().length; }
  function progressPct() {
    var tot = totalLessons(); if (!tot) return 0;
    return Math.round(S.done.length / tot * 100);
  }
  function modProgress(m) {
    var d = m.lessons.filter(function (l) { return S.done.indexOf(l.id) > -1; }).length;
    return Math.round(d / m.lessons.length * 100);
  }

  /* ---------------- router ---------------- */
  function route() {
    var h = (location.hash || '#/').replace(/^#/, '');
    var parts = h.split('/').filter(Boolean);
    if (!parts.length) return { v: 'landing' };
    if (parts[0] === 'learn') return { v: 'home' };
    if (parts[0] === 'm') return { v: 'module', id: parts[1] };
    if (parts[0] === 'l') return { v: 'lesson', id: parts[1] };
    if (parts[0] === 'glossary') return { v: 'glossary' };
    if (parts[0] === 'tools') return { v: 'tools' };
    if (parts[0] === 'certificate') return { v: 'cert' };
    return { v: 'home' };
  }
  function go(hash) { location.hash = hash; }
  window.addEventListener('hashchange', render);

  /* ---------------- nav + rail ---------------- */
  function navHTML() {
    var r = route();
    if (r.v === 'landing') {
      return '<div class="logo" data-go="#/"><span class="mk">landed<i class="dperiod"></i></span>' +
        '<span class="ldiv"></span><span class="lsub">' + t('land the gig. secure the client.', 'إزاي ترسي عليك الشغلانة') + '</span></div>' +
        '<span class="sp"></span>' +
        '<div class="langseg"><button data-lang="en" class="' + (S.lang === 'en' ? 'on' : '') + '">EN</button>' +
        '<button data-lang="ar" class="' + (S.lang === 'ar' ? 'on' : '') + '">عربي</button></div>' +
        '<button class="btn g sm" data-act="enter">' +
        (S.name ? t('Continue', 'كمّل') : t('Start free', 'ابدأ ببلاش')) + '</button>';
    }
    return '' +
      '<div class="logo" data-go="#/learn"><span class="mk">landed<i class="dperiod"></i></span>' +
      '<span class="ldiv"></span><span class="lsub">' + t('land the gig. secure the client.', 'إزاي ترسي عليك الشغلانة') + '</span></div>' +
      '<div class="navlinks">' +
      '<a data-go="#/learn" class="' + (r.v === 'home' || r.v === 'module' || r.v === 'lesson' ? 'on' : '') + '">' + t('The path', 'الطريق') + '</a>' +
      '<a data-go="#/tools" class="' + (r.v === 'tools' ? 'on' : '') + '">' + t('Toolkit', 'الأدوات') + '</a>' +
      '<a data-go="#/glossary" class="' + (r.v === 'glossary' ? 'on' : '') + '">' + t('Glossary', 'القاموس') + '</a>' +
      '<a data-go="#/certificate" class="' + (r.v === 'cert' ? 'on' : '') + '">' + t('Certificate', 'الشهادة') + '</a>' +
      '</div><span class="sp"></span>' +
      '<div class="searchwrap"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#676767" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>' +
      '<input id="navq" placeholder="' + t('Search lessons', 'دور في الدروس') + '" value="' + esc(S.q) + '"></div>' +
      '<div class="langseg"><button data-lang="en" class="' + (S.lang === 'en' ? 'on' : '') + '">EN</button>' +
      '<button data-lang="ar" class="' + (S.lang === 'ar' ? 'on' : '') + '">عربي</button></div>' +
      '<div class="iconbtn" title="' + t('Help', 'مساعدة') + '" data-go="#/glossary">?</div>' +
      '<div class="avatar" data-act="rename" title="' + esc(S.name || t('Set your name', 'حط اسمك')) + '">' + esc(initials(S.name)) + '</div>';
  }

  function railHTML() {
    var pct = progressPct();
    var nextLesson = allLessons().filter(function (x) { return S.done.indexOf(x.l.id) === -1 && hasContent(x.l); })[0];
    return '' +
      '<div class="rc"><div class="who"><div class="avatar" style="width:52px;height:52px;font-size:17px">' + esc(initials(S.name)) + '</div>' +
      '<div><div class="n">' + esc(S.name || t('Your name', 'اسمك')) + '</div>' +
      '<div class="r">' + t('Landed · your path', 'Landed · طريقك') + '</div></div></div>' +
      '<a class="u" data-act="rename">' + t('Edit name', 'غيّر الاسم') + '</a>' +
      '<div class="prog"><div class="bar"><i style="width:' + pct + '%"></i></div><b>' + N(pct) + '%</b></div>' +
      '<div style="font-size:13px;color:var(--g45);margin-top:8px"><bdi>' + N(S.done.length) + ' / ' + N(totalLessons()) + '</bdi> ' + t('lessons done', 'درس خلصان') + '</div></div>' +

      (nextLesson ? '<div class="rc"><h4 style="font-size:16px">' + t('Pick up where you left off', 'كمّل من حيث وقفت') + '</h4>' +
        '<div style="font-size:15px;font-weight:550;line-height:23px;margin:10px 0 14px">' + esc(lt(nextLesson.l)) + '</div>' +
        '<button class="btn g sm" style="width:100%" data-go="#/l/' + nextLesson.l.id + '">' + t('Open lesson', 'افتح الدرس') + '</button></div>' : '') +

      '<div class="rc"><h4 style="font-size:16px">' + t('Toolkit', 'الأدوات') + '</h4><ul>' +
      TOOLS.map(function (x) {
        var f = lessonById(x[3]);
        var lbl = f ? t('Ch ' + chapNum(f.m) + ' · L ' + lessonNum(f.m, f.l), N(chapNum(f.m)) + '.' + N(lessonNum(f.m, f.l))) : x[3];
        return '<li data-go="#/l/' + x[3] + '"><span>' + t(x[1], x[2]) + '</span><em>' + lbl + '</em></li>';
      }).join('') + '</ul></div>' +

      '<div class="rc" style="background:var(--g95)"><h4 style="font-size:16px">' + t('New to Upwork?', 'أول مرة على أب-وورك؟') + '</h4>' +
      '<p style="font-size:13.5px;color:var(--g45);margin-top:8px;line-height:20px">' +
      t('Every term used in this course is defined in plain language, with no assumed knowledge.',
        'كل مصطلح في الكورس ده متشرح بكلام بسيط، ومفيش حاجة مفترض إنك عارفها.') + '</p>' +
      '<button class="btn o sm" style="width:100%;margin-top:14px" data-go="#/glossary">' + t('Open the glossary', 'افتح القاموس') + '</button></div>';
  }

  /* ---------------- home ---------------- */
  function moduleCard(m, i) {
    var lang = S.lang, d = m[lang] || m.en;
    var pct = modProgress(m);
    var isSaved = S.saved.indexOf(m.n) > -1;
    var doneN = m.lessons.filter(function (l) { return S.done.indexOf(l.id) > -1; }).length;
    return '<div class="card" data-go="#/m/' + m.n + '">' +
      '<div class="cmeta"><b>' + chapLabel(m) + '</b><span>•</span>' +
      '<b>' + N(m.lessons.length) + ' ' + t('lessons', 'دروس') + '</b><span>•</span><b>' + d.time + '</b></div>' +
      '<div class="cacts"><span class="' + (isSaved ? 'sv' : '') + '" data-act="save" data-id="' + m.n + '" title="' + t('Save', 'احفظ') + '">' + (isSaved ? '♥' : '♡') + '</span></div>' +
      '<h3>' + esc(d.title) + '</h3>' +
      '<div class="cdesc">' + esc(d.desc) + '</div>' +
      '<div class="tokens">' + d.tags.map(function (x) { return '<span class="tok">' + esc(x) + '</span>'; }).join('') + '</div>' +
      '<div class="cfoot"><span class="vf"><span class="vfic">✓</span>' + t('Sourced from Upwork’s own docs + 9 top-earner profiles', 'مصادره: مستندات Upwork نفسها + ٩ بروفايلات لأكبر الفريلانسرز') + '</span>' +
      '<span>◉ ' + t('EN · عربي', 'بالإنجليزي وبالعربي') + '</span>' +
      (pct ? '<span style="color:var(--green);font-weight:550">' + N(doneN) + '/' + N(m.lessons.length) + ' ' + t('done', 'خلصان') + '</span>'
        : '<span style="color:var(--g50)">' + t('not started', 'لسه مبدأتش') + '</span>') +
      '</div></div>';
  }

  function homeHTML() {
    var list = MODULES.slice();
    if (S.tab === 'quick') {
      list.sort(function (a, b) { return a.lessons.length - b.lessons.length; });
    } else if (S.tab === 'saved') {
      list = list.filter(function (m) { return S.saved.indexOf(m.n) > -1; });
    }
    if (S.q.trim()) {
      var q = S.q.trim().toLowerCase();
      list = MODULES.filter(function (m) {
        var d = m[S.lang] || m.en;
        var hay = (d.title + ' ' + d.desc + ' ' + d.tags.join(' ') + ' ' +
          m.lessons.map(function (l) { return l.en.title + ' ' + ((l.ar&&l.ar.title)||''); }).join(' ')).toLowerCase();
        return hay.indexOf(q) > -1;
      });
    }

    var feed = S.tab === 'tools' && !S.q.trim()
      ? TOOLS.map(function (x) {
        return '<div class="card" data-go="#/l/' + x[3] + '"><h3>' + t(x[1], x[2]) + '</h3>' +
          '<div class="cspec">' + (lessonById(x[3]) ? chapLabel(lessonById(x[3]).m) : '') + '</div>' +
          '<div class="cdesc">' + t('An interactive tool built into the lesson. Runs entirely in your browser.',
            'أداة تفاعلية جوه الدرس نفسه. بتشتغل كلها في المتصفح بتاعك.') + '</div></div>';
      }).join('')
      : (list.length ? list.map(moduleCard).join('')
        : '<div class="empty">' + (S.tab === 'saved'
          ? t('Nothing saved yet. Tap the heart on any module.', 'لسه مفيش حاجة محفوظة. دوس على القلب في أي موديول.')
          : t('No lesson matches that.', 'مفيش درس مطابق.')) + '</div>');

    var tabs = [['path', 'The path', 'الطريق'], ['quick', 'Shortest first', 'الأقصر الأول'],
    ['saved', 'Saved', 'المحفوظة'], ['tools', 'Toolkit', 'الأدوات']];

    return '' +
      '<div class="info"><div class="ic">i</div><div><b>' + t('New here? ', 'أول مرة؟ ') + '</b>' +
      t('Module 0 assumes you have never opened Upwork. Start there.',
        'الموديول ٠ مفترض إنك عمرك ما فتحت أب-وورك. ابدأ من هناك.') + '</div><div class="x" data-act="dismiss">✕</div></div>' +

      '<div class="promo"><div><h3>' + t('Land the gig. Secure the client.', 'إزاي ترسي عليك الشغلانة وسط ألف فريلانسر.') + '</h3>' +
      '<h2>' + t('Module 0 takes 39 minutes and ends with something you can show a client tonight.',
        'الموديول ٠ بياخد ٣٩ دقيقة وبيخلّص بحاجة تقدر تعرضها على كلاينت النهاردة.') + '</h2>' +
      '<button class="btn w" data-go="#/m/00">' + t('Start Module 0', 'ابدأ الموديول ٠') + '</button></div>' +
      '<div class="mock"><div class="mockcard"><div class="av"></div><div style="flex:1">' +
      '<div class="ln" style="width:70%"></div><div class="ln" style="width:45%;margin:0"></div></div>' +
      '<div class="mockbadge">TOP RATED</div></div><div class="mockdim"></div><div class="mockdim"></div></div></div>' +

      '<div class="bigsearch"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#676767" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>' +
      '<input id="bigq" placeholder="' + t('Search ' + totalLessons() + ' lessons', 'دور في ' + N(totalLessons()) + ' درس') + '" value="' + esc(S.q) + '"></div>' +

      '<div class="tabrow">' + tabs.map(function (x) {
        return '<button class="t ' + (S.tab === x[0] ? 'on' : '') + '" data-tab="' + x[0] + '">' + t(x[1], x[2]) + '</button>';
      }).join('') + '<span class="sp"></span></div>' +
      '<div id="feed">' + feed + '</div>';
  }

  /* ---------------- landing ---------------- */
  function landingHTML() {
    var started = !!S.name, pct = progressPct();
    var chs = MODULES.map(function (m, i) {
      var d = m[S.lang] || m.en;
      return '<div class="ch"><u>' + t('Chapter ' + (i + 1), 'الفصل ' + N(i + 1)) + '</u>' +
        '<b>' + esc(d.title) + '</b><span>' + N(m.lessons.length) + ' ' + t('lessons', 'دروس') + ' · ' + d.time + '</span></div>';
    }).join('');
    var tiles = [
      [t('You have never started', 'لسه مبدأتش'),
        t('Chapter 1 assumes zero knowledge and ends with one thing you can show a client the same night. Every term has a plain-language definition a click away.',
          'الفصل الأول مفترض إنك متعرفش حاجة وبيخلّص بحاجة تقدر تعرضها على كلاينت في نفس الليلة. وأي مصطلح متعرفهوش هتلاقي جنبه تعريف بكلام بسيط بكليكة واحدة.')],
      [t('You are applying and hearing nothing', 'بتقدّم ومفيش رد'),
        t('Chapters 3 and 4 are the diagnosis: whether it is your profile, your targeting, your opener or your close — and the three numbers that tell you which.',
          'الفصل التالت والرابع هما التشخيص: المشكلة في البروفايل ولا في اختيار الشغلانات ولا في الأوبنينج ولا في القفلة — والتلات أرقام اللي بيقولولك أنهي واحدة.')],
      [t('You are earning and want more', 'بتكسب وعايز أكتر'),
        t('Chapters 7 to 9 are the top-earner material: paid diagnostics, delivery as an event, defending the score, and engineering the contract that qualifies you for the next badge.',
          'من الفصل السابع للتاسع ده شغل أكبر الفريلانسرز: تشخيص مدفوع، وتسليم كحدث، وحماية الـ score، وهندسة العقد اللي بيأهلك للبادچ اللي بعده.')]
    ].map(function (x) { return '<div class="tile"><b>' + x[0] + '</b><p>' + x[1] + '</p></div>'; }).join('');
    var tools = TOOLS.map(function (x, i) {
      var blurb = [
        t('What one contract actually costs you in advertising spend.', 'العقد الواحد بيتكلّفك كام Connects فعلاً.'),
        t('Six checks on your opener, run as you type.', 'ست حاجات بتتشيك على أول جملتين وإنت بتكتبهم.'),
        t('Every route ranked by what actually lands in your account.', 'كل الطرق مرتبة باللي بينزل حسابك فعلاً.'),
        t('Add good, bad and silent contracts and watch the score move.', 'ضيف عقود كويسة ووحشة وساكتة وشوف الـ score بيتحرك.')][i];
      return '<div class="tile"><b>' + t(x[1], x[2]) + '</b><p>' + blurb + '</p></div>';
    }).join('');
    var honest = [
      t('It will not promise you an income. Nobody who has met you can, and anybody who does is selling something.',
        'مش هيوعدك بدخل. محدش قابلك يقدر يعمل كده، وأي حد بيعمله ده بيبيعلك حاجة.'),
      t('It does not invent proof. There are no fake student counts, no borrowed testimonials and no screenshots of somebody else\'s earnings.',
        'مش بيخترع أدلة. مفيش أعداد طلبة مضروبة، ولا شهادات مستعارة، ولا سكرين شوتس لأرباح حد تاني.'),
      t('Where Upwork does not publish a number, the lesson says so in the text and calls it unverified — rather than repeating it with confidence.',
        'واللي Upwork مش ناشراه، الدرس بيقول كده في النص وبيكتب إنه غير مؤكد — بدل ما يعيده بثقة.'),
      t('It is not affiliated with Upwork in any way, and it is not tax or financial advice.',
        'ومش تابع لـ Upwork بأي شكل، ومش استشارة ضريبية ولا مالية.')
    ].map(function (x) { return '<li><i>—</i><span>' + x + '</span></li>'; }).join('');

    return '<div class="lp">' +
      '<header class="hero2">' +
      '<span class="eyebrow2">' + t('Free · 9 chapters · 41 lessons · EN &amp; عربي', 'مجاني · ٩ فصول · ٤١ درس · إنجليزي وعربي') + '</span>' +
      '<h1>' + t('Stop guessing how Upwork works.', 'بطّل تخمين في Upwork.') + '</h1>' +
      '<p>' + t('The platform runs on math you cannot see: a hidden score your clients set and you never read, a match algorithm that weighs the first 200 characters of your profile, and a Connects budget most people burn like confetti. This course hands you the math, then the words, then the delivery system that keeps the client — and then, because every other course skips it, how the money actually reaches an Egyptian bank account.',
        'المنصة شغالة بحسابات إنت مش شايفها: score مخفي الكلاينتس بيحطوه وإنت عمرك ما هتقراه، وخوارزمية بتحسب حساب أول ٢٠٠ حرف في بروفايلك، و Connects أغلب الناس بتحرقها على الفاضي. الكورس ده بيديك الحسبة الأول، بعدين الكلام، بعدين نظام التسليم اللي بيخلّي الكلاينت يفضل معاك — وبعدين، لأن كل الكورسات التانية بتعدّي الجزء ده، الفلوس بتوصل حساب بنكي مصري إزاي بالظبط.') + '</p>' +
      '<div class="cta2"><button class="btn g" data-act="enter">' +
      (started ? t('Continue where you left off', 'كمّل من حيث وقفت') : t('Start Chapter 1', 'ابدأ الفصل الأول')) + '</button>' +
      '<a class="btn o" href="#inside">' + t('See what is inside', 'شوف اللي جواه') + '</a>' +
      '<span class="free">' + (started
        ? t('You are ' + pct + '% through.', 'إنت خلّصت ' + N(pct) + '٪.')
        : t('No signup. No email. Nothing to buy.', 'من غير تسجيل. من غير إيميل. ومفيش حاجة للبيع.')) + '</span></div>' +
      '</header>' +

      '<section class="sec"><h2>' + t('Who it is for', 'الكورس ده لمين') + '</h2>' +
      '<p class="intro">' + t('Written for someone who has never opened Upwork, and still useful to someone who has been on it for two years and cannot work out why their score slipped.',
        'مكتوب لحد عمره ما فتح Upwork، وبرضه مفيد لحد بقاله سنتين عليها ومش عارف الـ score بتاعه نزل ليه.') + '</p>' +
      '<div class="grid3">' + tiles + '</div></section>' +

      '<section class="sec" id="inside"><h2>' + t('What is inside', 'اللي جواه') + '</h2>' +
      '<p class="intro">' + t('Nine chapters. Every lesson ends with something you do, not something you agree with. Built from two sources and nothing else: Upwork’s own published documentation, and nine Top Rated Plus profiles ($60K–$800K+ lifetime) read page by page until the pattern showed.',
        'تسع فصول. وكل درس بيخلّص بحاجة تعملها، مش بحاجة توافق عليها. ومتبني على مصدرين بس: مستندات Upwork المنشورة نفسها، وتسع بروفايلات Top Rated Plus (أرباحهم من ٦٠ لـ ٨٠٠ ألف دولار وأكتر) اتقروا صفحة صفحة لحد ما البترن بان.') + '</p>' +
      '<div class="chs">' + chs + '</div></section>' +

      '<section class="sec"><h2>' + t('Four calculators, not four slideshows', 'أربع calculators شغالة، مش أربع سلايدات') + '</h2>' +
      '<p class="intro">' + t('Built into the lessons that teach the mechanic behind them. Everything runs in your browser; nothing is sent anywhere.',
        'جوّه الدروس اللي بتشرح الحسبة اللي وراهم. وكله بيشتغل في المتصفح بتاعك، ومفيش حاجة بتتبعت لحد.') + '</p>' +
      '<div class="grid3 four">' + tools + '</div></section>' +

      '<section class="sec"><h2>' + t('Both languages, each written on its own', 'اللغتين، كل واحدة مكتوبة لوحدها') + '</h2>' +
      '<p class="intro">' + t('The Arabic is not a translation. It is written from scratch in Egyptian Arabic, keeping the platform words in English the way people actually say them — Connects, proposal, milestone, JSS. Here is the same idea in both, so you can see what that means:',
        'العربي مش ترجمة. مكتوب من الأول بالمصري، وسايب كلمات المنصة بالإنجليزي زي ما الناس بتقولها فعلاً — Connects، proposal، milestone، JSS. دي نفس الفكرة باللغتين عشان تشوف قصدنا إيه:') + '</p>' +
      '<div class="two"><div class="en"><h4>English</h4><p>Before a client opens your proposal, all they see is the first two lines of it, sitting in a list next to thirty others. Spend one of those two lines on “I hope this finds you well” and you have thrown away half of everything they will read. Nobody has ever been hired for wishing well.</p></div>' +
      '<div class="ar"><h4>بالمصري</h4><p>قبل ما الكلاينت يفتح الـ proposal بتاعك، هو شايف أول سطرين منه بس، واقفين في ليستة جنب تلاتين عرض تاني. لو صرفت سطر من الاتنين دول على «أتمنى تكون بخير» تبقى رميت نص اللي هيقراه أصلاً. مفيش حد في الدنيا اتوظّف لأنه اتمنى للناس الخير.</p></div></div></section>' +

      '<section class="sec"><h2>' + t('What this course will not do', 'الكورس ده مش هيعمل إيه') + '</h2>' +
      '<ul class="honest">' + honest + '</ul></section>' +

      '<section class="sec"><h2>' + t('Who made it', 'مين عمله') + '</h2>' +
      '<div class="who"><div class="av">FG</div><div><b>Fady George</b><p>' +
      t('Content director and strategist. He built this the way he builds everything else — take the thing everyone finds confusing, pull it apart, hand back the version that makes sense. That is what is on his Instagram too, so if this one landed, go get the rest.',
        'كونتنت ديركتور واستراتيجي. عمل الكورس ده بنفس الطريقة اللي بيشتغل بيها في كل حاجة — ياخد الحاجة اللي الكل تايه فيها، يفكّكها، ويرجّعها بشكل يتفهم. وده نفس اللي على إنستجرام بتاعه، فلو الكلام ده وصلك، روح خد الباقي.') +
      '</p><a class="btn o sm" style="margin-top:16px" href="https://instagram.com/_fadygeorge" target="_blank" rel="noopener">' +
      t('More on Instagram → @_fadygeorge', 'كمان على إنستجرام ← @_fadygeorge') + '</a></div></div></section>' +

      '<section class="endcta"><h2>' + t('Chapter 1 takes 39 minutes.', 'الفصل الأول بياخد ٣٩ دقيقة.') + '</h2>' +
      '<p class="intro">' + t('It ends with a keyword sheet, a rate band, and a verified account — three things most people put off for a month.',
        'وبيخلّص بليستة keywords، وفئة سعر، وحساب متوثّق — تلات حاجات أغلب الناس بتأجلها شهر.') + '</p>' +
      '<div class="cta2" style="justify-content:center"><button class="btn g" data-act="enter">' +
      (started ? t('Continue', 'كمّل') : t('Start now', 'ابدأ دلوقتي')) + '</button></div></section>' +
      '</div>';
  }

  /* ---------------- module page ---------------- */
  function moduleHTML(id) {
    var m = MODULES.filter(function (x) { return x.n === id; })[0];
    if (!m) return '<div class="empty">404</div>';
    var d = m[S.lang] || m.en;
    var rows = m.lessons.map(function (l, i) {
      var done = S.done.indexOf(l.id) > -1;
      var ready = hasContent(l);
      return '<div class="lrow ' + (done ? 'done' : '') + '" ' + (ready ? 'data-go="#/l/' + l.id + '"' : '') + '>' +
        '<span class="st">✓</span><span class="num">' + N(lessonNum(m, l)) + '</span>' +
        '<span class="ti">' + esc(lt(l)) + '</span>' +
        (l.tool ? '<span class="tk">' + t('interactive tool', 'أداة تفاعلية') + '</span>' : '') +
        (ready ? '<span class="mn">' + N(l.mins) + ' ' + t('min', 'د') + '</span>'
          : '<span class="soon">' + t('being written', 'بيتكتب') + '</span>') +
        '</div>';
    }).join('');
    return '<div class="back" data-go="#/learn">← ' + t('Back to the path', 'ارجع للطريق') + '</div>' +
      '<div class="detail"><div class="opener">' + FIGURES.opener(chapNum(m)) + '</div>' +
      '<div class="chlabel big">' + chapLabel(m) + '</div>' +
      '<h1>' + esc(d.title) + '</h1>' +
      '<div class="cmeta" style="margin-top:12px"><span>' + N(m.lessons.length) + ' ' + t('lessons', 'دروس') + '</span><span>•</span><span>' + d.time + '</span></div><p class="lede">' + esc(d.desc) + '</p>' +
      '<div class="tokens" style="margin-top:18px">' + d.tags.map(function (x) { return '<span class="tok">' + esc(x) + '</span>'; }).join('') + '</div>' +
      '<div class="llist" style="margin-top:14px">' + rows + '</div></div>';
  }

  /* ---------------- lesson page ---------------- */
  function blockHTML(b) {
    switch (b.t) {
      case 'p': return '<p>' + t(b.en, b.ar) + '</p>';
      case 'h': return '<h2>' + t(b.en, b.ar) + '</h2>';
      case 'pull': return '<div class="pull">' + t(b.en, b.ar) + '</div>';
      case 'note': return '<div class="callout"><b>' + t(b.title_en, b.title_ar) + '</b><p>' + t(b.en, b.ar) + '</p></div>';
      case 'plain': return '<div class="plainbox"><b>' + t('In plain words', 'بكلام بسيط') + '</b><p>' + t(b.en, b.ar) + '</p></div>';
      case 'steps':
        return '<ol class="steps">' + t(b.en, b.ar).map(function (s) {
          return '<li><div><b>' + s[0] + '</b><span>' + s[1] + '</span></div></li>';
        }).join('') + '</ol>';
      case 'compare':
        var A = t(b.a_en, b.a_ar), B = t(b.b_en, b.b_ar);
        return '<div class="w"><div class="wh"><b>' + t('Two openers, one job post', 'أوبننجين، نفس البوست') + '</b>' +
          '<span>' + t('same job, same day', 'نفس الشغلانة، نفس اليوم') + '</span></div><div class="wb">' +
          '<div class="swit"><button class="on" data-pane="cp1">' + A[0] + '</button><button data-pane="cp2">' + B[0] + '</button></div>' +
          '<div class="pane on" id="cp1"><p>' + A[1] + '</p><div class="note">' + A[2] + '</div></div>' +
          '<div class="pane" id="cp2"><p>' + B[1] + '</p><div class="note">' + B[2] + '</div></div></div></div>';
      case 'todo':
        return '<div class="w"><div class="wh"><b>' + t('Do this now · ' + b.mins + ' min', 'اعمل ده دلوقتي — ' + N(b.mins) + ' دقايق') + '</b>' +
          '<span id="todoCount"></span></div><div class="wb" style="padding:8px"><ul class="todo" id="todoList">' +
          t(b.en, b.ar).map(function (x) { return '<li><span class="bx">✓</span><span>' + x + '</span></li>'; }).join('') +
          '</ul></div></div>';
      case 'faq':
        return '<div class="faq">' + b.items.map(function (i) {
          return '<details><summary>' + t(i[0], i[1]) + '</summary><p>' + t(i[2], i[3]) + '</p></details>';
        }).join('') + '</div>';
      case 'fig':
        var f = FIGURES[b.kind];
        return '<figure class="fig">' + (f ? f(t) : '') +
          '<figcaption>' + t(b.cap_en, b.cap_ar) + '</figcaption></figure>';
      case 'widget': return widgetHTML(b.kind);
      default: return '';
    }
  }

  function lessonHTML(id) {
    var f = lessonById(id);
    if (!f) return '<div class="empty">404</div>';
    var m = f.m, l = f.l;
    if (!hasContent(l)) {
      return '<div class="back" data-go="#/m/' + m.n + '">← ' + t('Back to module', 'ارجع للموديول') + '</div>' +
        '<div class="detail"><h1>' + esc(lt(l)) + '</h1>' +
        '<p class="lede">' + t('This lesson is still being written. The module outline and every finished lesson around it are live.',
          'الدرس ده لسه بيتكتب. خطة الموديول وكل الدروس الخالصة حواليه شغالين.') + '</p></div>';
    }
    var e = l.en;
    var done = S.done.indexOf(l.id) > -1;
    var flat = allLessons().filter(function (x) { return hasContent(x.l); });
    var idx = flat.map(function (x) { return x.l.id; }).indexOf(l.id);
    var nxt = flat[idx + 1];

    return '<div class="back" data-go="#/m/' + m.n + '">← ' + esc((m[S.lang] || m.en).title) + '</div>' +
      '<div class="detail">' +
      '<div class="chlabel big">' + chapLabel(m) + '<span class="sep2">·</span>' +
      t('Lesson ' + lessonNum(m, l), 'الدرس ' + N(lessonNum(m, l))) + '</div>' +
      '<h1>' + esc(lt(l)) + '</h1>' +
      '<p class="lede">' + esc(ll(l)) + '</p>' +
      '<div class="dspec">' +
      '<div><span class="ic">◷</span><div><b>' + N(l.mins) + ' ' + t('minutes', 'دقيقة') + '</b><span>' + t('one sitting', 'قعدة واحدة') + '</span></div></div>' +
      '<div><span class="ic">✎</span><div><b>' + esc(lo(l)) + '</b><span>' + t('what you walk out with', 'اللي هتخرج بيه') + '</span></div></div>' +
      (l.tool ? '<div><span class="ic">◆</span><div><b>' + t('Interactive tool', 'أداة تفاعلية') + '</b><span>' + t('used in this lesson', 'مستخدمة في الدرس ده') + '</span></div></div>' : '') +
      '</div>' +
      '<div class="body">' + e.blocks.map(blockHTML).join('') + '</div>' +
      '<div class="applybar">' +
      '<button class="btn ' + (done ? 'o' : 'g') + '" data-act="complete" data-id="' + l.id + '">' +
      (done ? '✓ ' + t('Completed', 'خلص') : t('Mark complete', 'علّم إنه خلص')) + '</button>' +
      (nxt ? '<button class="btn o" data-go="#/l/' + nxt.l.id + '">' + t('Next lesson', 'الدرس اللي بعده') + ' →</button>' : '') +
      '</div></div>';
  }

  /* ---------------- glossary / tools / certificate ---------------- */
  function glossaryHTML() {
    return '<div class="back" data-go="#/learn">← ' + t('Back to the path', 'ارجع للطريق') + '</div>' +
      '<div class="detail"><h1>' + t('Every word, in plain language', 'كل الكلمات، بكلام بسيط') + '</h1>' +
      '<p class="lede">' + t('If you have never opened Upwork, start here. Nothing below assumes you already know anything.',
        'لو عمرك ما فتحت أب-وورك، ابدأ من هنا. مفيش حاجة تحت مفترضة إنك عارف حاجة.') + '</p>' +
      '<div style="margin-top:22px">' + GLOSSARY.map(function (g) {
        return '<div class="gl"><b>' + t(g[0], g[1]) + '</b><p>' + t(g[2], g[3]) + '</p></div>';
      }).join('') + '</div></div>';
  }

  function toolsHTML() {
    return '<div class="back" data-go="#/learn">← ' + t('Back to the path', 'ارجع للطريق') + '</div>' +
      '<div class="detail"><h1>' + t('The toolkit', 'الأدوات') + '</h1>' +
      '<p class="lede">' + t('Four calculators, each built into the lesson that teaches the mechanic behind it. Everything runs in your browser — nothing is sent anywhere.',
        'أربع كالكوليتورز، كل واحد جوه الدرس اللي بيشرح الميكانيكا بتاعته. وكله بيشتغل في المتصفح بتاعك — مفيش حاجة بتتبعت لحد.') + '</p>' +
      '<div class="llist" style="margin-top:18px">' + TOOLS.map(function (x) {
        var f = lessonById(x[3]);
        return '<div class="lrow" data-go="#/l/' + x[3] + '">' +
          '<span class="ti">' + t(x[1], x[2]) + '</span>' +
          (f ? '<span class="mn">' + chapLabel(f.m) + '</span>' : '') +
          '<span class="tk">' + t('interactive', 'تفاعلي') + '</span></div>';
      }).join('') + '</div></div>';
  }

  function certBody(land) {
    var name = S.name || t('Your name here', 'اسمك هنا');
    var d = new Date();
    var stamp = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    return '<div class="certpaper ' + (land ? 'land' : 'port') + '" id="certPaper">' +
      '<div class="cbar"></div>' +
      '<div class="cinner">' +
      '<div class="cmark"><span class="mk">landed<i class="dperiod"></i></span></div>' +
      '<div class="ck">' + t('Certificate of completion', 'شهادة إتمام') + '</div>' +
      '<div class="cname">' + esc(name) + '</div>' +
      '<div class="cln">' + t('has completed all nine chapters and forty-one lessons of',
        'خلّص التسع فصول والواحد وأربعين درس بتوع') + '</div>' +
      '<div class="ccourse">' + t('Landed — land the gig, secure the client', 'Landed — إزاي ترسي عليك الشغلانة') + '</div>' +
      '<div class="cmeta2"><div><b>' + t('Issued', 'صدرت في') + '</b><span>' + stamp + '</span></div>' +
      '<div><b>' + t('Issued by', 'صادرة من') + '</b><span>Fady George · @_fadygeorge</span></div>' +
      '<div><b>' + t('Scope', 'المحتوى') + '</b><span>' + t('41 lessons · EN / عربي', '٤١ درس · إنجليزي / عربي') + '</span></div></div>' +
      '<div class="cfoot2">' + t('An independent educational course. Not affiliated with or endorsed by Upwork Global Inc.',
        'كورس تعليمي مستقل. مش تابع لـ Upwork ولا معتمد منها.') + '</div>' +
      '</div></div>';
  }

  function certHTML() {
    var pct = progressPct(), ready = pct === 100, land = S.cert === 'landscape';
    return '<div class="back" data-go="#/learn">← ' + t('Back to the path', 'ارجع للطريق') + '</div>' +
      '<div class="detail"><h1>' + t('Your certificate', 'شهادتك') + '</h1>' +
      '<p class="lede">' + t('It carries the name you entered, so make sure it is the name you want a client to read. Portrait prints cleanly on A4; landscape suits a LinkedIn post.',
        'بتتكتب بالاسم اللي دخّلته، فخلي بالك يكون الاسم اللي عايز الكلاينت يقراه. الطولية بتتطبع كويس على A4، والعرضية مناسبة لبوست على LinkedIn.') + '</p>' +
      '<div class="swit" style="max-width:340px;margin:22px 0 8px">' +
      '<button class="' + (!land ? 'on' : '') + '" data-cert="portrait">' + t('Portrait', 'طولية') + '</button>' +
      '<button class="' + (land ? 'on' : '') + '" data-cert="landscape">' + t('Landscape', 'عرضية') + '</button></div>' +
      '<div class="certwrap">' + certBody(land) + '</div>' +
      '<div class="prog" style="max-width:420px"><div class="bar"><i style="width:' + pct + '%"></i></div><b>' + N(pct) + '%</b></div>' +
      '<div class="applybar">' +
      '<button class="btn ' + (ready ? 'g' : 'o') + '" data-act="print" ' + (ready ? '' : 'disabled') + '>' +
      t('Print / save as PDF', 'اطبع / احفظ PDF') + '</button>' +
      '<button class="btn o" data-act="svg" ' + (ready ? '' : 'disabled') + '>' + t('Download SVG', 'حمّل SVG') + '</button>' +
      '<button class="btn o" data-act="rename">' + t('Change the name', 'غيّر الاسم') + '</button>' +
      (ready ? '' : '<span style="color:var(--g45);font-size:13.5px">' +
        t('Finish all 41 lessons to unlock the download.', 'خلّص الـ ٤١ درس عشان تفتح التحميل.') + '</span>') +
      '</div></div>';
  }

  function certSVG() {
    var land = S.cert === 'landscape';
    var W = land ? 1754 : 1240, H = land ? 1240 : 1754;
    var name = S.name || 'Your name';
    var d = new Date(), stamp = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    var cx = W / 2;
    var F = 'Helvetica, Arial, sans-serif';
    function T(y, s, size, weight, fill) {
      return '<text x="' + cx + '" y="' + y + '" text-anchor="middle" font-family="' + F + '" font-size="' + size +
        '" font-weight="' + weight + '" fill="' + (fill || '#1a1a1a') + '">' + String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</text>';
    }
    var top = land ? 210 : 420;
    return '<?xml version="1.0" encoding="UTF-8"?>' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '">' +
      '<rect width="' + W + '" height="' + H + '" fill="#ffffff"/>' +
      '<rect width="' + W + '" height="14" fill="#14a800"/>' +
      '<rect x="60" y="60" width="' + (W - 120) + '" height="' + (H - 120) + '" fill="none" stroke="#e9e9e9" stroke-width="2"/>' +
      '<text x="' + cx + '" y="' + (top - 120) + '" text-anchor="middle" font-family="' + F + '" font-size="46" font-weight="700">landed</text>' +
      '<circle cx="' + (cx + 92) + '" cy="' + (top - 132) + '" r="9" fill="#14a800"/>' +
      T(top - 60, 'CERTIFICATE OF COMPLETION', 20, 600, '#676767') +
      T(top + 60, name, land ? 92 : 82, 700) +
      T(top + 130, 'has completed all nine chapters and forty-one lessons of', 24, 400, '#676767') +
      T(top + 190, 'Landed - land the gig, secure the client', 34, 600, '#14a800') +
      '<line x1="' + (cx - 260) + '" y1="' + (top + 250) + '" x2="' + (cx + 260) + '" y2="' + (top + 250) + '" stroke="#e9e9e9" stroke-width="2"/>' +
      T(top + 300, 'Issued ' + stamp + '   ·   Fady George   ·   @_fadygeorge', 22, 400, '#676767') +
      T(H - 100, 'An independent educational course. Not affiliated with or endorsed by Upwork Global Inc.', 17, 400, '#8d8c8c') +
      '</svg>';
  }

  function downloadSVG() {
    var blob = new Blob([certSVG()], { type: 'image/svg+xml;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'landed-certificate-' + (S.name || 'certificate').replace(/\s+/g, '-').toLowerCase() + '.svg';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  function printCert() {
    var st = document.getElementById('certPageStyle');
    if (st) st.remove();
    st = document.createElement('style');
    st.id = 'certPageStyle';
    st.textContent = '@page{size:A4 ' + (S.cert === 'landscape' ? 'landscape' : 'portrait') + ';margin:0}';
    document.head.appendChild(st);
    document.body.classList.add('printing');
    window.print();
    setTimeout(function () { document.body.classList.remove('printing'); }, 500);
  }

  /* ---------------- widgets ---------------- */
  function widgetHTML(kind) {
    if (kind === 'connects') {
      return '<div class="w"><div class="wh"><b>' + t('Connects are ad spend', 'الـ Connects دي فلوس إعلانات') + '</b>' +
        '<span>' + t('drag to see your real cost per contract', 'حرّك وشوف تكلفة العقد الحقيقية') + '</span></div><div class="wb">' +
        sl('s1', t('Connects per week', 'Connects في الأسبوع'), 10, 200, 70) +
        sl('s2', t('Connects per proposal', 'Connects للبروبوزال'), 4, 24, 10) +
        sl('s3', t('Reply rate', 'نسبة الردود'), 2, 40, 12, '%') +
        sl('s4', t('Replies that become contracts', 'الردود اللي بتبقى عقود'), 5, 80, 30, '%') +
        '<div class="outs"><div><b id="o1">—</b><span>' + t('proposals / week', 'بروبوزال / أسبوع') + '</span></div>' +
        '<div><b id="o2" class="g">—</b><span>' + t('cost per reply', 'تكلفة الرد') + '</span></div>' +
        '<div><b id="o3" class="o">—</b><span>' + t('cost per contract', 'تكلفة العقد') + '</span></div></div>' +
        '<div class="vd" id="vd"></div></div></div>';
    }
    if (kind === 'scorer') {
      return '<div class="w"><div class="wh"><b>' + t('Proposal scorer', 'Proposal Scorer') + '</b><span id="slbl"></span></div>' +
        '<div class="wb"><textarea id="ta" spellcheck="false"></textarea>' +
        '<div class="scorehead"><b id="snum">—</b><span id="stxt"></span></div><div class="chks" id="chks"></div></div></div>';
    }
    if (kind === 'payout') {
      return '<div class="w"><div class="wh"><b>' + t('What actually lands in your account', 'اللي بينزل حسابك فعلاً') + '</b>' +
        '<span>' + t('assumptions — replace with your provider\'s numbers', 'افتراضات — بدّلها بأرقام شركتك') + '</span></div><div class="wb">' +
        sl('p1', t('Monthly earnings on Upwork ($)', 'أرباحك الشهرية على أب-وورك (دولار)'), 100, 5000, 500) +
        sl('p2', t('Upwork service fee (%)', 'رسوم أب-وورك (%)'), 0, 20, 10, '%') +
        '<table class="ptable" id="ptab"></table>' +
        '<div class="vd" id="pvd"></div></div></div>';
    }
    if (kind === 'jss') {
      return '<div class="w"><div class="wh"><b>' + t('Watch the score move', 'شوف الـ Score بيتحرك') + '</b>' +
        '<span>' + t('a simplified model, not Upwork\'s real formula', 'نموذج مبسّط، مش معادلة أب-وورك الحقيقية') + '</span></div><div class="wb">' +
        jssrow('j1', t('Contracts that ended happy', 'عقود خلصت والكلاينت مبسوط'), 8) +
        jssrow('j2', t('Contracts that ended badly', 'عقود خلصت وحش'), 0) +
        jssrow('j3', t('Contracts that ended in silence', 'عقود خلصت بسكوت'), 2) +
        jssrow('j4', t('Big contracts among the happy ones', 'عقود كبيرة من ضمن المبسوطة'), 1) +
        '<div class="outs" style="grid-template-columns:1fr 2fr;margin-top:16px">' +
        '<div><b id="jo" class="g">—</b><span>' + t('simulated score', 'سكور محاكاة') + '</span></div>' +
        '<div style="display:flex;align-items:center"><span id="jmsg" style="font-size:13.5px;line-height:20px;color:var(--g45)"></span></div></div>' +
        '<div class="vd">' + t('Silence is not a punishment, but it is a wasted contract — it teaches the score nothing while still counting.',
          'السكوت مش عقوبة، بس عقد ضايع — مش بيعلّم الـ score حاجة ومع ذلك بيتحسب.') + '</div></div></div>';
    }
    return '';
  }
  function sl(id, label, min, max, val, suf) {
    return '<div class="sl"><label><span>' + label + '</span><b id="' + id + 'v">' + val + (suf || '') + '</b></label>' +
      '<input type="range" id="' + id + '" min="' + min + '" max="' + max + '" value="' + val + '" data-suf="' + (suf || '') + '"></div>';
  }
  function jssrow(id, label, val) {
    return '<div class="jssrow"><span>' + label + '</span><div class="pm">' +
      '<button data-j="' + id + '" data-d="-1">−</button><var id="' + id + '">' + val + '</var>' +
      '<button data-j="' + id + '" data-d="1">+</button></div></div>';
  }

  /* ---- widget logic ---- */
  var ROUTES = [
    ['Payoneer', 1.0, 3.0, 3.5, false],
    ['Direct to local bank (USD wire)', 0, 0.99, 2.5, false],
    ['USD-account fintech', 0.5, 0.5, 1.0, true],
    ['PayPal', 2.0, 2.0, 4.5, false]
  ];
  var ROUTES_AR = ['بايونير', 'تحويل بنكي مباشر بالدولار', 'فينتك بحساب دولاري', 'باي بال'];

  function calcConnects() {
    if (!$('s1')) return;
    var cw = +$('s1').value, cp = +$('s2').value, rr = +$('s3').value / 100, cv = +$('s4').value / 100;
    var pr = cw / cp, dollars = cw * 0.15, re = pr * rr, hi = re * cv;
    $('o1').textContent = pr.toFixed(1);
    $('o2').textContent = re > 0 ? '$' + (dollars / re).toFixed(2) : '—';
    $('o3').textContent = hi > 0 ? '$' + (dollars / hi).toFixed(2) : '—';
    $('vd').innerHTML = rr < 0.10
      ? t('<b>Below a 10% reply rate.</b> That is almost never a writing problem — it is a targeting problem. You are applying to jobs where you are the fifteenth-best fit.',
        '<b>نسبة الردود تحت ١٠٪.</b> دي مش مشكلة كتابة تقريباً — دي مشكلة اختيار. إنت بتقدّم على شغلانات إنت فيها التالت عشر في الترتيب.')
      : hi < 0.5 ? t('<b>Replies but almost no contracts.</b> The opener works, the close does not.',
        '<b>في ردود بس مفيش عقود تقريباً.</b> الأوبنينج شغال والقفلة مش شغالة.')
        : t('<b>$' + (dollars / hi).toFixed(2) + ' to win one contract.</b> Compare that to your average contract value. Under 1:50 and Connects are the cheapest marketing you will ever buy.',
          '<b>' + (dollars / hi).toFixed(2) + '$ عشان تكسب عقد واحد.</b> قارن ده بمتوسط قيمة العقد عندك. لو أقل من ١:٥٠ يبقى الـ Connects أرخص تسويق هتشتريه.');
  }

  function calcPayout() {
    if (!$('p1')) return;
    var gross = +$('p1').value, fee = +$('p2').value / 100;
    var after = gross * (1 - fee);
    var rows = ROUTES.map(function (r, i) {
      var net = after * (1 - r[1] / 100) * (1 - r[2] / 100) * (1 - r[3] / 100);
      return { name: S.lang === 'en' ? r[0] : ROUTES_AR[i], net: net, usd: r[4], total: (1 - net / after) * 100 };
    }).sort(function (a, b) { return b.net - a.net; });
    $('ptab').innerHTML = '<tr><th>' + t('Route', 'الطريقة') + '</th><th>' + t('Total cost', 'إجمالي التكلفة') + '</th>' +
      '<th>' + t('Hold in USD?', 'تقدر تسيبها دولار؟') + '</th><th>' + t('You receive', 'هيوصلك') + '</th></tr>' +
      rows.map(function (r, i) {
        return '<tr class="' + (i === 0 ? 'best' : '') + '"><td><b>' + r.name + '</b></td>' +
          '<td>' + r.total.toFixed(1) + '%</td>' +
          '<td>' + (r.usd ? t('yes', 'أيوه') : t('no', 'لأ')) + '</td>' +
          '<td>$' + r.net.toFixed(0) + '</td></tr>';
      }).join('');
    var best = rows[0], worst = rows[rows.length - 1];
    $('pvd').innerHTML = t('<b>$' + (best.net - worst.net).toFixed(0) + ' a month</b> separates the best route from the worst on the same earnings — about $' +
      ((best.net - worst.net) * 12).toFixed(0) + ' a year. And that is before the exchange rate, which is usually the bigger loss.',
      '<b>' + (best.net - worst.net).toFixed(0) + '$ في الشهر</b> فرق بين أحسن طريقة وأوحش واحدة على نفس الأرباح — يعني حوالي ' +
      ((best.net - worst.net) * 12).toFixed(0) + '$ في السنة. وده قبل سعر الصرف، اللي بيبقى الخسارة الأكبر عادةً.');
  }

  function calcJSS() {
    if (!$('j1')) return;
    var good = +$('j1').textContent, bad = +$('j2').textContent, sil = +$('j3').textContent, big = +$('j4').textContent;
    var w = good + big * 1.5, total = good + bad + sil + big * 1.5;
    var score = total > 0 ? Math.max(0, Math.round((w - bad * 2) / total * 100)) : 0;
    $('jo').textContent = score + '%';
    $('jo').className = score >= 90 ? 'g' : score >= 75 ? '' : 'o';
    $('jmsg').textContent = bad > 0
      ? t('One bad outcome among few contracts is heavy. The same one among twenty is noise — which is why early contracts are the ones to protect.',
        'نتيجة وحشة واحدة وسط عقود قليلة تقيلة جداً. ونفسها وسط عشرين بتبقى مش مؤثرة — وعشان كده أول العقود هي اللي تحميها.')
      : t('Every contract that ends in silence dilutes the score without hurting it. Ask for the review.',
        'كل عقد بيخلص بسكوت بيميّع الـ score من غير ما يضره. اطلب التقييم.');
  }

  var RULES = [
    ['First sentence names something specific — a page, a number, a product', 'الجملة الأولى فيها حاجة محددة — صفحة، رقم، منتج',
      function (s) { return /\d|pricing|page|checkout|demo|hero|صفحة|الأسعار|الديمو|رقم/i.test(s.split(/[.!?؟]/)[0] || ''); }],
    ['No greeting cliché in the first two sentences', 'مفيش كليشيه ترحيب في أول جملتين',
      function (s) { return !/(hope this finds you|dear hiring|dear sir|to whom it may|i am writing|أتمنى تكون بخير|عزيزي المسؤول|تحية طيبة)/i.test(s); }],
    ['An offer or a next step appears, not just a claim', 'في عرض أو خطوة جاية، مش مجرد كلام',
      function (s) { return /(send me|i'll|i will|first milestone|for \$|within|ابعتلي|هعمل|أعيد|أول milestone)/i.test(s); }],
    ['A price or a scope is named — the risk is a number', 'في سعر أو scope محدد — الريسك بقى رقم',
      function (s) { return /\$\s?\d|\d+\s?\$|\d+\s?(usd|دولار)/i.test(s); }],
    ['Opens with the client, not with “I”', 'بيبدأ بالكلاينت، مش بـ«أنا»',
      function (s) { return !/^\s*(i |i'm|i am|my |as a|أنا |بصفتي)/i.test(s); }],
    ['Under 55 words — it fits the preview pane', 'أقل من ٥٥ كلمة — بيدخل في المربع الصغير',
      function (s) { return s.trim().split(/\s+/).filter(Boolean).length < 55; }]
  ];
  var SAMPLE = {
    en: "Your pricing page asks for a credit card before the demo — that's where the drop is, not the headline. Send me the page and I'll rewrite the hero and the pricing block for $180 as a first milestone.",
    ar: "صفحة الأسعار عندكم بتطلب كريدت كارد قبل الديمو — دي نقطة التسريب مش الهيدلاين. ابعتلي الصفحة وأنا أعيد كتابة الـ hero وبلوك الأسعار بـ ١٨٠$ كأول milestone."
  };
  function calcScore() {
    if (!$('ta')) return;
    var s = $('ta').value, box = $('chks'); box.innerHTML = '';
    if (!s.trim()) { $('snum').textContent = '—'; $('stxt').textContent = ''; $('slbl').textContent = ''; return; }
    var h = 0;
    RULES.forEach(function (r) {
      var ok = r[2](s); if (ok) h++;
      var d = document.createElement('div');
      d.className = 'chk ' + (ok ? 'y' : 'n');
      d.innerHTML = '<i>' + (ok ? '✓' : '✕') + '</i><span>' + t(r[0], r[1]) + '</span>';
      box.appendChild(d);
    });
    var n = Math.round(h / 6 * 100);
    $('snum').textContent = n;
    $('snum').style.color = n >= 83 ? 'var(--green)' : n >= 50 ? 'var(--g10)' : 'var(--star)';
    $('stxt').textContent = t('/100 · ' + h + ' of 6 checks passed', '/١٠٠ · نجح في ' + N(h) + ' من ٦');
    $('slbl').textContent = n >= 83 ? t('this one gets the click', 'ده هياخد الكليك')
      : n >= 50 ? t('salvageable', 'ينفع يتصلّح') : t('archived', 'هيتأرشف');
  }

  /* ---------------- onboarding ---------------- */
  function askName(force, then) {
    var ov = document.createElement('div');
    ov.className = 'ov';
    ov.innerHTML = '<div class="ob"><h2>' + (then
      ? t('Before you start — what should we call you?', 'قبل ما تبدأ — نناديك بإيه؟')
      : t('What name goes on the certificate?', 'إيه الاسم اللي هيتكتب على الشهادة؟')) + '</h2>' +
      '<p>' + t('It shows in the corner while you study, and it is the name printed on your certificate when you finish. Nothing is sent anywhere — it stays in this browser.',
        'هيظهر في الركن وإنت بتذاكر، وهو الاسم اللي هيتطبع على شهادتك لما تخلّص. ومفيش حاجة بتتبعت لحد — بيفضل في المتصفح ده.') + '</p>' +
      '<input id="nmi" value="' + esc(S.name) + '" placeholder="' + t('e.g. Fady George', 'مثلاً: فادي جورج') + '" autocomplete="name">' +
      '<div class="hint">' + t('Use the name exactly as it appears on your ID — Upwork checks this too.',
        'اكتب الاسم زي ما هو بالظبط في البطاقة — أب-وورك بتراجع ده برضه.') + '</div>' +
      '<div style="display:flex;gap:10px"><button class="btn g" id="nmok" style="flex:1">' +
      (then ? t('Start the course', 'ابدأ الكورس') : t('Save', 'احفظ')) + '</button>' +
      (force ? '' : '<button class="btn o" id="nmx">' + t('Cancel', 'إلغاء') + '</button>') + '</div></div>';
    document.body.appendChild(ov);
    var inp = $('nmi'); inp.focus(); inp.select();
    function save() {
      var v = inp.value.trim();
      if (!v) { inp.focus(); return; }
      S.name = v; store.set('name', v);
      document.body.removeChild(ov);
      if (then) { then(); } else { render(); }
    }
    $('nmok').onclick = save;
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') save(); });
    if ($('nmx')) $('nmx').onclick = function () { document.body.removeChild(ov); };
  }

  /* ---------------- render ---------------- */
  function render() {
    var r = route();
    document.documentElement.lang = S.lang === 'en' ? 'en' : 'ar';
    document.documentElement.dir = S.lang === 'en' ? 'ltr' : 'rtl';
    $('nav').innerHTML = navHTML();
    document.body.classList.toggle('on-landing', r.v === 'landing');
    var main = r.v === 'landing' ? landingHTML()
      : r.v === 'home' ? homeHTML()
      : r.v === 'module' ? moduleHTML(r.id)
        : r.v === 'lesson' ? lessonHTML(r.id)
          : r.v === 'glossary' ? glossaryHTML()
            : r.v === 'tools' ? toolsHTML()
              : r.v === 'cert' ? certHTML() : homeHTML();
    $('col').innerHTML = main;
    $('rail').innerHTML = r.v === 'landing' ? '' : railHTML();
    $('foot').innerHTML = footHTML();
    wire();
    if (r.v !== 'home') window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function footHTML() {
    return '<div class="ftin"><div class="ftl"><span class="mk" style="font-size:21px">landed<i class="dperiod" style="width:7px;height:7px"></i></span>' +
      '<span class="ldiv"></span><span class="lsub">' + t('land the gig. secure the client.', 'إزاي ترسي عليك الشغلانة') + '</span></div>' +
      '<div class="ftc"><b>' + t('Created by Fady George', 'الكورس من عمل فادي جورج') + '</b>' +
      '<a href="https://instagram.com/_fadygeorge" target="_blank" rel="noopener" dir="ltr">@_fadygeorge</a></div>' +
      '<p class="dis">' + t('An independent educational project. Not affiliated with, endorsed by, sponsored by, or connected to Upwork Global Inc. “Upwork”, “Top Rated” and “Connects” are trademarks of their respective owner and are used here only to describe the platform this course teaches.',
        'مشروع تعليمي مستقل. مش تابع لـ Upwork ولا معتمد منها ولا مدعوم منها ولا ليه أي علاقة بيها. «Upwork» و«Top Rated» و«Connects» علامات تجارية لأصحابها ومستخدمة هنا بس عشان نوصف المنصة اللي الكورس بيشرحها.') + '</p></div>';
  }

  /* ---------------- events ---------------- */
  function wire() {
    document.querySelectorAll('[data-go]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        if (e.target.closest('[data-act]')) return;
        e.stopPropagation(); go(el.getAttribute('data-go'));
      });
    });
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.onclick = function () { S.lang = el.getAttribute('data-lang'); store.set('lang', S.lang); render(); };
    });
    document.querySelectorAll('[data-tab]').forEach(function (el) {
      el.onclick = function () { S.tab = el.getAttribute('data-tab'); render(); };
    });
    document.querySelectorAll('[data-cert]').forEach(function (el) {
      el.onclick = function () { S.cert = el.getAttribute('data-cert'); store.set('cert', S.cert); render(); };
    });
    document.querySelectorAll('[data-act="print"]').forEach(function (el) { el.onclick = printCert; });
    document.querySelectorAll('[data-act="svg"]').forEach(function (el) { el.onclick = downloadSVG; });
    document.querySelectorAll('[data-act="enter"]').forEach(function (el) {
      el.onclick = function () {
        if (S.name) { go('#/learn'); return; }
        askName(true, function () { go('#/learn'); });
      };
    });
    document.querySelectorAll('[data-act="rename"]').forEach(function (el) {
      el.onclick = function (e) { e.stopPropagation(); askName(false); };
    });
    document.querySelectorAll('[data-act="dismiss"]').forEach(function (el) {
      el.onclick = function (e) { e.stopPropagation(); el.closest('.info').style.display = 'none'; };
    });
    document.querySelectorAll('[data-act="save"]').forEach(function (el) {
      el.onclick = function (e) {
        e.stopPropagation();
        var id = el.getAttribute('data-id'), i = S.saved.indexOf(id);
        if (i > -1) S.saved.splice(i, 1); else S.saved.push(id);
        store.set('saved', S.saved); render();
      };
    });
    document.querySelectorAll('[data-act="complete"]').forEach(function (el) {
      el.onclick = function () {
        var id = el.getAttribute('data-id'), i = S.done.indexOf(id);
        if (i > -1) S.done.splice(i, 1); else S.done.push(id);
        store.set('done', S.done); render();
      };
    });
    ['navq', 'bigq'].forEach(function (id) {
      var el = $(id); if (!el) return;
      el.addEventListener('input', function () {
        S.q = el.value;
        if (route().v !== 'home') { go('#/'); return; }
        var pos = el.selectionStart; render();
        var again = $(id); if (again) { again.focus(); again.setSelectionRange(pos, pos); }
      });
    });
    document.querySelectorAll('.swit button[data-pane]').forEach(function (b) {
      b.onclick = function () {
        b.parentNode.querySelectorAll('button').forEach(function (x) { x.classList.remove('on'); });
        b.parentNode.parentNode.querySelectorAll('.pane').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on'); $(b.getAttribute('data-pane')).classList.add('on');
      };
    });
    document.querySelectorAll('input[type=range]').forEach(function (r) {
      r.addEventListener('input', function () {
        var lab = $(r.id + 'v'); if (lab) lab.textContent = r.value + (r.getAttribute('data-suf') || '');
        calcConnects(); calcPayout();
      });
    });
    document.querySelectorAll('[data-j]').forEach(function (b) {
      b.onclick = function () {
        var v = $(b.getAttribute('data-j'));
        v.textContent = Math.max(0, +v.textContent + (+b.getAttribute('data-d')));
        calcJSS();
      };
    });
    var ta = $('ta');
    if (ta) { ta.value = SAMPLE[S.lang]; ta.addEventListener('input', calcScore); calcScore(); }
    var todo = $('todoList');
    if (todo) {
      var count = function () { $('todoCount').innerHTML = '<bdi>' + N(todo.querySelectorAll('li.on').length) + '/' + N(todo.children.length) + '</bdi>'; };
      Array.prototype.forEach.call(todo.children, function (li) {
        li.onclick = function () { li.classList.toggle('on'); count(); };
      });
      count();
    }
    calcConnects(); calcPayout(); calcJSS();
  }

  /* ---------------- boot ---------------- */
  render();
  if (route().v !== 'landing' && !S.name) setTimeout(function () { askName(true); }, 350);
})();
