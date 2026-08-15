/* Landed — teaching figures. Hand-drawn SVG, no external assets, bilingual labels. */

var FIGURES = (function () {
  var G = '#14a800', INK = '#1a1a1a', G45 = '#676767', G70 = '#d9d9d9', G80 = '#e9e9e9',
    G90 = '#f1f1f1', G95 = '#f9f9f9', BLUE = '#086add', STAR = '#f0672a', WASH = '#effcef';

  function wrap(vb, inner, h) {
    return '<svg viewBox="' + vb + '" width="100%" style="max-width:100%;height:auto;display:block" ' +
      'xmlns="http://www.w3.org/2000/svg" role="img">' + inner + '</svg>';
  }
  function txt(x, y, s, o) {
    o = o || {};
    return '<text x="' + x + '" y="' + y + '" fill="' + (o.fill || INK) + '" font-size="' + (o.size || 13) + '" ' +
      'font-family="UP, Arial, sans-serif" font-weight="' + (o.w || 450) + '" ' +
      (o.anchor ? 'text-anchor="' + o.anchor + '" ' : '') + 'letter-spacing="0.4">' + s + '</text>';
  }
  function box(x, y, w, h, o) {
    o = o || {};
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (o.r || 8) + '" ' +
      'fill="' + (o.fill || '#fff') + '" stroke="' + (o.stroke || G80) + '" stroke-width="' + (o.sw || 1) + '"/>';
  }
  function line(x1, y1, x2, y2, o) {
    o = o || {};
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (o.stroke || G70) +
      '" stroke-width="' + (o.sw || 1) + '"' + (o.dash ? ' stroke-dasharray="' + o.dash + '"' : '') + '/>';
  }
  function bar(x, y, w, h, fill) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (h / 2) + '" fill="' + fill + '"/>'; }
  function callout(x, y, label, o) {
    o = o || {};
    var w = o.w || 190;
    return '<g>' + line(o.fx, o.fy, x, y, { stroke: STAR, sw: 1.2, dash: '4 3' }) +
      '<circle cx="' + o.fx + '" cy="' + o.fy + '" r="3.5" fill="' + STAR + '"/>' +
      '<rect x="' + x + '" y="' + (y - 15) + '" width="' + w + '" height="' + (o.h || 30) + '" rx="6" fill="#fff6f2" stroke="' + STAR + '" stroke-width="1"/>' +
      label + '</g>';
  }

  /* ---------- 1. the preview pane: what the client actually sees ---------- */
  function previewPane(t) {
    var rows = '', y = 78;
    var names = ['A. Hassan', 'M. Nowak', 'You', 'R. Silva'];
    for (var i = 0; i < 4; i++) {
      var mine = i === 2;
      rows += box(40, y, 380, 84, { fill: mine ? WASH : '#fff', stroke: mine ? G : G80, sw: mine ? 1.6 : 1 });
      rows += '<circle cx="66" cy="' + (y + 26) + '" r="13" fill="' + (mine ? G : G90) + '"/>';
      rows += txt(88, y + 24, names[i], { w: 550, size: 13.5 });
      rows += txt(388, y + 24, '$' + [45, 30, 55, 22][i] + '/hr', { size: 12, fill: G45, anchor: 'end' });
      rows += bar(88, y + 38, mine ? 300 : 240, 6, mine ? '#bfe5b8' : G90);
      rows += bar(88, y + 50, mine ? 250 : 150, 6, mine ? '#bfe5b8' : G90);
      rows += line(40, y + 68, 420, y + 68, { stroke: G80 });
      rows += txt(88, y + 78, t('...more', '...المزيد'), { size: 11, fill: G45 });
      y += 96;
    }
    return wrap('0 0 780 480',
      box(24, 24, 412, 440, { r: 12, fill: G95, stroke: G70 }) +
      txt(40, 52, t('WHAT THE CLIENT SEES', 'اللي الكلاينت شايفه'), { size: 11, w: 700, fill: G45 }) +
      rows +
      callout(470, 120, txt(486, 118, t('Two sentences.', 'جملتين.'), { size: 12.5, w: 550 }) +
        txt(486, 134, t('Then a click, or nothing.', 'وبعدين كليك، أو ولا حاجة.'), { size: 11.5, fill: G45 }),
        { fx: 300, fy: 120, h: 34 }) +
      callout(470, 290, txt(486, 288, t('Your rate is visible', 'سعرك باين'), { size: 12.5, w: 550 }) +
        txt(486, 304, t('before your work is.', 'قبل شغلك.'), { size: 11.5, fill: G45 }),
        { fx: 400, fy: 274, h: 34 }) +
      callout(470, 400, txt(486, 398, t('Everything else', 'كل حاجة تانية'), { size: 12.5, w: 550 }) +
        txt(486, 414, t('is behind that link.', 'ورا اللينك ده.'), { size: 11.5, fill: G45 }),
        { fx: 130, fy: 388, h: 34 })
    );
  }

  /* ---------- 2. anatomy of a job post ---------- */
  function jobAnatomy(t) {
    var y = 60;
    var parts = [
      [t('Posted 4 hours ago · Proposals: 5 to 10', 'اتنشر من ٤ ساعات · العروض: ٥ لـ ١٠'), 11, G45, t('Age and crowd. Under an hour is ideal; 50+ proposals is a stadium.', 'العمر والزحمة. أقل من ساعة مثالي؛ وفوق ٥٠ عرض ده استاد.')],
      [t('Landing page rewrite for a B2B SaaS', 'إعادة كتابة لاندينج بيدج لشركة SaaS'), 19, INK, t('The title tells you whether they know what they want.', 'العنوان بيقولك هما عارفين عايزين إيه ولا لأ.')],
      [t('Fixed price: $600 · Intermediate · Est. 2 weeks', 'سعر ثابت: ٦٠٠$ · متوسط · حوالي أسبوعين'), 12.5, G45, t('Budget against scope. A $50 full rebrand is a client to avoid.', 'الميزانية قدام الشغل. ريبراند كامل بـ ٥٠$ ده كلاينت تعديه.')],
      ['', 0, '', ''],
      [t('Payment verified · $10K+ spent · 4.9 ★ · United States', 'الدفع موثّق · صرف +١٠ آلاف$ · ٤.٩ ★ · أمريكا'), 12, G45, t('The single most important line on the page. Read it first.', 'أهم سطر في الصفحة. اقراه الأول.')]
    ];
    var out = box(24, 24, 460, 300, { r: 12 }), cy = y;
    parts.forEach(function (p, i) {
      if (!p[1]) { out += line(44, cy - 6, 464, cy - 6, { stroke: G80 }); cy += 18; return; }
      out += txt(44, cy, p[0], { size: p[1], fill: p[2], w: p[1] > 15 ? 550 : 450 });
      out += callout(520, cy - 4, txt(536, cy - 8, p[3].slice(0, 42), { size: 11, fill: G45 }) +
        txt(536, cy + 6, p[3].slice(42), { size: 11, fill: G45 }),
        { fx: 470, fy: cy - 4, w: 236, h: 28 });
      cy += p[1] > 15 ? 44 : 38;
    });
    out += bar(44, 250, 90, 22, G90) + bar(142, 250, 110, 22, G90) + bar(260, 250, 80, 22, G90);
    out += txt(52, 265, t('Copywriting', 'Copywriting'), { size: 11, fill: '#333' });
    out += txt(150, 265, t('Landing Pages', 'Landing Pages'), { size: 11, fill: '#333' });
    out += txt(268, 265, t('SaaS', 'SaaS'), { size: 11, fill: '#333' });
    return wrap('0 0 780 340', out);
  }

  /* ---------- 3. how JSS windows work ---------- */
  function jssWindows(t) {
    var out = txt(24, 30, t('THE SAME HISTORY, THREE WINDOWS — BEST ONE IS SHOWN', 'نفس التاريخ، تلات نوافذ — بيتعرض أحسن واحدة'), { size: 11, w: 700, fill: G45 });
    var rows = [[t('Last 6 months', 'آخر ٦ شهور'), 0.62, '78%', false],
    [t('Last 12 months', 'آخر ١٢ شهر'), 0.78, '91%', true],
    [t('Last 24 months', 'آخر ٢٤ شهر'), 1.0, '86%', false]];
    var y = 66;
    rows.forEach(function (r) {
      out += txt(24, y + 15, r[0], { size: 13, fill: G45 });
      out += bar(150, y + 4, 420 * r[1], 16, r[3] ? G : G90);
      out += box(150, y + 4, 420, 16, { r: 8, fill: 'none', stroke: G80 });
      out += txt(590, y + 17, r[2], { size: 16, w: 550, fill: r[3] ? G : INK });
      if (r[3]) out += txt(636, y + 17, t('← displayed', '← اللي بيظهر'), { size: 11.5, fill: G });
      y += 44;
    });
    out += line(24, y + 6, 740, y + 6, { stroke: G80 });
    out += txt(24, y + 32, t('A bad month is diluted by volume, then falls out of the window entirely.',
      'الشهر الوحش بيتميّع بالحجم، وبعدين بيخرج من النافذة خالص.'), { size: 13, fill: G45 });
    return wrap('0 0 780 ' + (y + 56), out);
  }

  /* ---------- 4. where the money actually goes ---------- */
  function moneyStack(t) {
    var steps = [
      ['$1,000', t('Client pays', 'الكلاينت بيدفع'), 1.0, INK],
      ['$900', t('after Upwork service fee', 'بعد رسوم أب-وورك'), 0.90, '#4a4652'],
      ['$873', t('after withdrawal fee', 'بعد رسوم السحب'), 0.873, G45],
      ['$838', t('after the exchange spread', 'بعد فرق سعر الصرف'), 0.838, STAR]
    ];
    var out = txt(24, 30, t('THE SAME $1,000, FOUR TIMES', 'نفس الألف دولار، أربع مرات'), { size: 11, w: 700, fill: G45 });
    var y = 60;
    steps.forEach(function (s, i) {
      out += bar(24, y, 560 * s[2], 34, i === 0 ? G : (i === 3 ? '#ffd9c9' : G90));
      out += txt(38, y + 22, s[0], { size: 15, w: 550, fill: i === 0 ? '#fff' : INK });
      out += txt(600, y + 22, s[1], { size: 12.5, fill: s[3] });
      y += 46;
    });
    out += line(24, y + 4, 740, y + 4, { stroke: G80, dash: '4 4' });
    out += txt(24, y + 30, t('The last two steps are the ones nobody quotes you in advance.',
      'آخر خطوتين هما اللي محدش بيقولك عليهم قبلها.'), { size: 13, fill: G45 });
    out += txt(24, y + 50, t('Figures are an illustration, not a quote — run your own numbers in the calculator.',
      'الأرقام دي للتوضيح مش عرض سعر — احسب أرقامك إنت في الكالكوليتور.'), { size: 11.5, fill: G45 });
    return wrap('0 0 780 ' + (y + 66), out);
  }

  /* ---------- 5. the badge ladder ---------- */
  function badgeLadder(t) {
    var rungs = [
      [t('Rising Talent', 'Rising Talent'), t('100% profile · screening · activity', '١٠٠٪ بروفايل · فحص · نشاط'), 0.25],
      [t('Top Rated', 'Top Rated'), t('JSS 90%+ for 13 of 16 weeks · $1,000 in 12 months · first hire 90+ days ago', 'JSS ٩٠٪+ لـ ١٣ من ١٦ أسبوع · ١٠٠٠$ في ١٢ شهر · أول تعيين من ٩٠ يوم+'), 0.5],
      [t('Top Rated Plus', 'Top Rated Plus'), t('the above + one large contract, no negative outcome', 'اللي فوق + عقد كبير واحد من غير نتيجة سلبية'), 0.75],
      [t('Expert-Vetted', 'Expert-Vetted'), t('invite only · interview · selected categories', 'بالدعوة بس · إنترفيو · تصنيفات مختارة'), 1.0]
    ];
    var out = '', y = 300;
    rungs.forEach(function (r, i) {
      var h = 60 + i * 56, x = 40 + i * 180;
      out += '<rect x="' + x + '" y="' + (y - h) + '" width="150" height="' + h + '" rx="8" fill="' + (i === 3 ? INK : (i === 1 ? G : G90)) + '"/>';
      out += txt(x + 14, y - h + 26, r[0], { size: 14, w: 550, fill: (i === 1 || i === 3) ? '#fff' : INK });
      var words = r[1].split(' '), lineStr = '', ly = y - h + 46, chunk = 22;
      var parts2 = [];
      words.forEach(function (w) { if ((lineStr + ' ' + w).length > chunk) { parts2.push(lineStr); lineStr = w; } else { lineStr = lineStr ? lineStr + ' ' + w : w; } });
      parts2.push(lineStr);
      parts2.slice(0, 5).forEach(function (p) {
        out += txt(x + 14, ly, p, { size: 9.5, fill: (i === 1 || i === 3) ? 'rgba(255,255,255,.85)' : G45 });
        ly += 12;
      });
    });
    out += line(24, y + 1, 756, y + 1, { stroke: INK, sw: 2 });
    out += txt(24, y + 26, t('Each rung unlocks better clients, who bring bigger contracts, which qualify the next rung.',
      'كل درجة بتفتح كلاينتس أحسن، بيجيبوا عقود أكبر، اللي بتأهلك للدرجة اللي بعدها.'), { size: 13, fill: G45 });
    return wrap('0 0 780 ' + (y + 44), out);
  }

  /* ---------- chapter opener motifs ---------- */
  function opener(n) {
    var w = 780, h = 120, out = '<rect width="' + w + '" height="' + h + '" fill="' + G95 + '" rx="12"/>';
    var i;
    switch (n) {
      case 1: for (i = 0; i < 26; i++) out += '<circle cx="' + (30 + i * 28) + '" cy="60" r="' + (2 + (i % 5)) + '" fill="' + (i === 25 ? G : G70) + '"/>'; break;
      case 2: for (i = 0; i < 26; i++) out += bar(30 + i * 28, 60 - (i === 13 ? 34 : 8), 14, (i === 13 ? 68 : 16), i === 13 ? G : G70); break;
      case 3: for (i = 0; i < 13; i++) out += box(30 + i * 57, 34, 44, 52, { r: 6, fill: i === 6 ? WASH : '#fff', stroke: i === 6 ? G : G80 }); break;
      case 4: for (i = 0; i < 40; i++) out += bar(30 + i * 18, 58, 10, 5, i < 5 ? G : G70); break;
      case 5: for (i = 0; i < 9; i++) { out += box(30 + i * 82, 30, 62, 60, { r: 6, stroke: i === 8 ? G : G80, sw: i === 8 ? 2 : 1 }); if (i < 8) out += line(92 + i * 82, 60, 112 + i * 82, 60, { stroke: G70 }); } break;
      case 6: for (i = 0; i < 4; i++) out += bar(30, 24 + i * 24, 700 * (1 - i * 0.06), 16, i === 3 ? '#ffd9c9' : (i === 0 ? G : G70)); break;
      case 7: for (i = 0; i < 6; i++) out += '<circle cx="' + (90 + i * 120) + '" cy="60" r="' + (10 + i * 6) + '" fill="none" stroke="' + (i === 5 ? G : G70) + '" stroke-width="2"/>'; break;
      case 8: out += '<circle cx="390" cy="60" r="40" fill="none" stroke="' + G80 + '" stroke-width="10"/>' +
        '<circle cx="390" cy="60" r="40" fill="none" stroke="' + G + '" stroke-width="10" stroke-linecap="round" stroke-dasharray="221 251" transform="rotate(-90 390 60)"/>'; break;
      default: for (i = 0; i < 4; i++) out += '<rect x="' + (60 + i * 180) + '" y="' + (86 - (i + 1) * 18) + '" width="150" height="' + ((i + 1) * 18) + '" rx="6" fill="' + (i === 3 ? INK : G70) + '"/>';
    }
    return wrap('0 0 ' + w + ' ' + h, out);
  }

  return {
    preview: previewPane, jobcard: jobAnatomy, jss: jssWindows,
    money: moneyStack, ladder: badgeLadder, opener: opener
  };
})();
