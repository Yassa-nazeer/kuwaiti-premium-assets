// Build all 13 HTML pages from shared templates
const fs = require('fs');
const path = require('path');

const PHONE = '65954080';
const WA = '96565954080';
const BRAND = 'الكويت لشراء المكيفات المستعملة';
const TAGLINE = 'منصة موثوقة لشراء المكيفات والأجهزة المستعملة في الكويت';

const NAV = [
  ['index.html', 'الرئيسية'],
  ['services.html', 'الخدمات'],
  ['about.html', 'من نحن'],
  ['gallery.html', 'أعمالنا'],
  ['coverage.html', 'مناطق التغطية'],
  ['contact.html', 'اتصل بنا'],
];

const head = (title, desc, page) => `<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#ffffff">
<title>${title} | ${BRAND}</title>
<meta name="description" content="${desc}">
<meta property="og:title" content="${title} | ${BRAND}">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="website">
<meta property="og:locale" content="ar_KW">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/styles.css">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"LocalBusiness","name":"${BRAND}","telephone":"+965${PHONE}","areaServed":"Kuwait","priceRange":"$$","image":"/assets/about-team.jpg"}
</script>
</head>
<body>
<div class="scroll-progress"></div>
<header class="nav">
  <div class="container nav__inner">
    <a href="/" class="brand"><span class="brand__mark"><span>ك</span></span> الكويت <em style="color:var(--gold);font-style:normal">للمكيفات</em></a>
    <nav class="nav__links" aria-label="القائمة">
      ${NAV.map(([h, l]) => `<a href="/${h}"${h === page ? ' class="active"' : ''}>${l}</a>`).join('\n      ')}
    </nav>
    <div class="nav__cta">
      <a href="https://wa.me/${WA}" class="btn btn--gold btn--sm">واتساب</a>
      <button class="nav__burger" aria-label="القائمة"><span></span></button>
    </div>
  </div>
</header>
`;

const footer = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        <div class="brand" style="color:#fff;margin-bottom:16px"><span class="brand__mark"><span>ك</span></span> ${BRAND}</div>
        <p style="font-size:.9rem;color:#9a948a;max-width:32ch">${TAGLINE}. خدمة 24/7، أسعار منافسة، تقييم مجاني فوري.</p>
      </div>
      <div>
        <h4>الخدمات</h4>
        <ul>
          <li><a href="/used-ac.html">شراء المكيفات</a></li>
          <li><a href="/appliances.html">الأجهزة الكهربائية</a></li>
          <li><a href="/furniture.html">الأثاث المستعمل</a></li>
          <li><a href="/aluminum.html">الألمنيوم والأبواب</a></li>
          <li><a href="/scrap.html">شراء الخردة</a></li>
        </ul>
      </div>
      <div>
        <h4>الشركة</h4>
        <ul>
          <li><a href="/about.html">من نحن</a></li>
          <li><a href="/gallery.html">أعمالنا</a></li>
          <li><a href="/coverage.html">مناطق التغطية</a></li>
          <li><a href="/contact.html">اتصل بنا</a></li>
        </ul>
      </div>
      <div>
        <h4>تواصل مباشر</h4>
        <ul>
          <li><a href="tel:+965${PHONE}">📞 +965 ${PHONE}</a></li>
          <li><a href="https://wa.me/${WA}">💬 واتساب فوري</a></li>
          <li>🕐 خدمة 24 ساعة</li>
          <li>📍 جميع مناطق الكويت</li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© ${new Date().getFullYear()} ${BRAND}. جميع الحقوق محفوظة.</span>
      <span>صُنع بإتقان في الكويت 🇰🇼</span>
    </div>
  </div>
</footer>
<div class="mobile-bar">
  <a class="mb-call" href="tel:+965${PHONE}">📞 اتصل الآن</a>
  <a class="mb-wa" href="https://wa.me/${WA}">💬 واتساب</a>
</div>
<script src="/assets/main.js" defer></script>
</body>
</html>`;

// =================== INDEX ===================
const SERVICES = [
  { slug: 'used-ac',     title: 'شراء المكيفات المستعملة', tag: 'الأكثر طلباً', img: 'svc-ac.jpg',         desc: 'سبليت، شباك، مركزي — تقييم فوري وفك وشراء بأعلى سعر.', cls: 't-hero' },
  { slug: 'furniture',   title: 'شراء الأثاث المستعمل',   tag: 'جديد',         img: 'service-furniture.jpg', desc: 'كنب، غرف نوم، طاولات وكراسي. نشتري أثاث منزلك بسعر مغرٍ.', cls: 't-tall' },
  { slug: 'appliances',  title: 'الأجهزة الكهربائية',     tag: 'فوري',         img: 'svc-appliances.jpg', desc: 'ثلاجات، غسالات، مايكروويف، شاشات — جميع الماركات.', cls: 't-third' },
  { slug: 'aluminum',    title: 'الألمنيوم والأبواب',     tag: 'متخصصون',      img: 'service-doors.jpg',  desc: 'أبواب وشبابيك ألمنيوم بأنواعها — تقطيع وفك وشراء.', cls: 't-third' },
  { slug: 'kitchens',    title: 'المطابخ المستعملة',     tag: 'تركيب وفك',    img: 'svc-kitchen.jpg',    desc: 'مطابخ ألمنيوم وخشب وكوارتز — فك احترافي وشراء فوري.', cls: 't-half' },
  { slug: 'moving',      title: 'نقل العفش',              tag: 'مع الفك والتركيب', img: 'svc-moving.jpg',  desc: 'نقل الأثاث مع الفنيين والتغليف الكامل لجميع المناطق.', cls: 't-half' },
  { slug: 'scrap',       title: 'شراء الخردة',            tag: 'أسعار يومية',  img: 'svc-scrap.jpg',     desc: 'حديد، نحاس، ألمنيوم، كيبلات — وزن دقيق ودفع فوري.', cls: 't-wide' },
];

const tile = (s) => `
<a href="/${s.slug}.html" class="tile ${s.cls} reveal">
  <span class="tile__img" style="background-image:url('/assets/${s.img}')"></span>
  <span class="tile__overlay"></span>
  <span class="tile__tag">${s.tag}</span>
  <span class="tile__arrow" aria-hidden="true">←</span>
  <h3 class="tile__title">${s.title}</h3>
  <p class="tile__desc">${s.desc}</p>
</a>`;

const indexHTML = head('الرئيسية', `${TAGLINE} — شراء المكيفات، الأجهزة، الأثاث، الألمنيوم والخردة بأعلى الأسعار. اتصل ${PHONE}.`, 'index.html') + `
<main>
<section class="hero">
  <div class="container">
    <div class="hero__head">
      <div class="reveal">
        <span class="eyebrow">منصة الكويت الأولى للمستعمل</span>
        <h1 class="hero__title">نشتري المستعمل<br>بسعر <em>يستحقه</em> فعلاً.</h1>
        <p class="hero__sub">من المكيف لباب الألمنيوم لطقم الأثاث — فريق محترف يصل خلال ساعة، تقييم مجاني، ودفع فوري نقداً.</p>
        <div class="hero__actions">
          <a href="tel:+965${PHONE}" class="btn btn--primary">📞 اتصل الآن · ${PHONE}</a>
          <a href="https://wa.me/${WA}" class="btn btn--ghost">واتساب فوري</a>
        </div>
      </div>
      <div class="hero__meta reveal">
        <div><b data-count="12">0</b><span>سنة خبرة</span></div>
        <div><b data-count="8500">0</b><span>عميل سعيد</span></div>
        <div><b>24/7</b><span>خدمة على مدار الساعة</span></div>
      </div>
    </div>

    <div class="bento">
      ${SERVICES.map(tile).join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section__head reveal">
      <div>
        <span class="eyebrow">لماذا نحن</span>
        <h2>الفرق بين خدمة عابرة<br>وشريك تثق فيه.</h2>
      </div>
      <p>نقدم تجربة كاملة — من المكالمة الأولى للتقييم الفوري وحتى الفك والنقل والدفع — بفريق مدرب وأسعار شفافة.</p>
    </div>

    <div class="steps">
      <div class="step reveal"><div class="step__num">01</div><b>تواصل معنا</b><p>اتصل أو راسلنا واتساب مع وصف للأغراض وصورة إن أمكن.</p></div>
      <div class="step reveal"><div class="step__num">02</div><b>تقييم فوري</b><p>نرسل خبير في نفس اليوم لمعاينة مجانية وتسعير عادل.</p></div>
      <div class="step reveal"><div class="step__num">03</div><b>فك ونقل</b><p>فريقنا يفك وينقل بأمان كامل دون أي إزعاج لك.</p></div>
      <div class="step reveal"><div class="step__num">04</div><b>دفع نقدي</b><p>تستلم القيمة كاملة فوراً قبل مغادرتنا الموقع.</p></div>
    </div>

    <div class="trust reveal">
      <div class="trust__item"><b data-count="8500">0</b><span>صفقة ناجحة</span></div>
      <div class="trust__item"><b data-count="98">0</b><span>% رضا العملاء</span></div>
      <div class="trust__item"><b data-count="60">0</b><span>دقيقة وقت الوصول</span></div>
      <div class="trust__item"><b data-count="12">0</b><span>سنة خبرة</span></div>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <div class="about">
      <div class="about__media reveal">
        <img src="/assets/about-team.jpg" alt="فريق الكويت للمكيفات المستعملة" loading="lazy">
        <div class="about__badge"><div><b>+12</b><span>سنة خبرة</span></div></div>
      </div>
      <div class="reveal">
        <span class="eyebrow">من نحن</span>
        <h2>محترفون كويتيون<br>تخصصنا الشغل النضيف.</h2>
        <p class="lead">بدأنا من قطعة سبليت واحدة — اليوم نخدم آلاف العائلات والشركات في جميع مناطق الكويت بنفس الالتزام: سعر عادل، وقت محدد، واحترام كامل لمنزلك.</p>
        <div class="about__points">
          <div class="about__point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg><div><b>تقييم مجاني وفوري</b><span>زيارة ميدانية أو تقدير عبر الصور خلال دقائق.</span></div></div>
          <div class="about__point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg><div><b>أعلى الأسعار في السوق</b><span>نقارن السعر مباشرة ونتفوق على أي عرض آخر.</span></div></div>
          <div class="about__point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg><div><b>فك ونقل احترافي</b><span>فنيون مدربون بمعدات أصلية بدون أي ضرر.</span></div></div>
          <div class="about__point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg><div><b>دفع فوري نقداً</b><span>تستلم مبلغك كاملاً قبل أن نغادر الموقع.</span></div></div>
        </div>
        <a href="/about.html" class="btn btn--ghost" style="margin-top:24px">تعرف علينا أكثر</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section__head reveal">
      <div><span class="eyebrow">أسئلة شائعة</span><h2>كل ما تريد معرفته<br>قبل البيع.</h2></div>
    </div>
    <div class="faq reveal">
      <details open><summary>كم يستغرق التقييم والشراء؟</summary><p>عادة نصل خلال 60 دقيقة داخل مدينة الكويت ونتم العملية كاملة (تقييم + فك + دفع) في نفس الزيارة.</p></details>
      <details><summary>هل التقييم مجاني فعلاً؟</summary><p>نعم 100% — الزيارة والمعاينة والتسعير مجاناً دون أي التزام منك.</p></details>
      <details><summary>ما هي المناطق التي تغطونها؟</summary><p>جميع محافظات الكويت: العاصمة، حولي، الفروانية، مبارك الكبير، الأحمدي، والجهراء.</p></details>
      <details><summary>هل تشترون الأجهزة غير العاملة؟</summary><p>نعم نشتري المكيفات والأجهزة العاطلة أيضاً بسعر مناسب حسب الحالة والقطع.</p></details>
      <details><summary>كيف يتم الدفع؟</summary><p>نقداً فورياً عند إتمام الفك — أو تحويل بنكي حسب رغبتك.</p></details>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="cta-banner reveal">
      <div><span class="eyebrow" style="color:var(--gold)">جاهز للبيع؟</span><h2>اتصل بنا الآن واحصل على<br>تقييم فوري ومجاني.</h2><p>فريقنا متاح 24 ساعة لخدمتك في أي منطقة بالكويت.</p></div>
      <div class="cta-banner__actions"><a href="tel:+965${PHONE}" class="btn btn--gold">📞 ${PHONE}</a><a href="https://wa.me/${WA}" class="btn btn--ghost" style="color:#fff;border-color:rgba(255,255,255,.2)">واتساب</a></div>
    </div>
  </div>
</section>
</main>
` + footer;

// =================== Generic service page ===================
const servicePage = (s, longDesc, bullets) => head(s.title, longDesc.slice(0, 155), s.slug + '.html') + `
<main>
<section class="section" style="padding-top:48px">
  <div class="container">
    <div class="about">
      <div class="reveal">
        <span class="eyebrow">${s.tag}</span>
        <h1 style="margin:14px 0 18px">${s.title}</h1>
        <p class="lead">${longDesc}</p>
        <div class="about__points" style="margin-top:24px">
          ${bullets.map(b => `<div class="about__point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg><div><b>${b[0]}</b><span>${b[1]}</span></div></div>`).join('')}
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:28px">
          <a href="tel:+965${PHONE}" class="btn btn--primary">📞 اتصل · ${PHONE}</a>
          <a href="https://wa.me/${WA}" class="btn btn--gold">واتساب فوري</a>
        </div>
      </div>
      <div class="about__media reveal">
        <img src="/assets/${s.img}" alt="${s.title}" loading="lazy">
      </div>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <div class="section__head reveal"><div><span class="eyebrow">خطوات بسيطة</span><h2>كيف نخدمك<br>خطوة بخطوة.</h2></div></div>
    <div class="steps">
      <div class="step reveal"><div class="step__num">01</div><b>اتصل أو راسلنا</b><p>أرسل وصف وصور للأغراض على الواتساب.</p></div>
      <div class="step reveal"><div class="step__num">02</div><b>زيارة مجانية</b><p>نصل إليك في موعد يناسبك.</p></div>
      <div class="step reveal"><div class="step__num">03</div><b>تسعير شفاف</b><p>سعر نهائي بدون مفاوضة مرهقة.</p></div>
      <div class="step reveal"><div class="step__num">04</div><b>فك ودفع</b><p>نفك بعناية ونسلمك المبلغ كاملاً.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="cta-banner reveal">
      <div><h2>هل لديك ${s.title.replace('شراء ', '')} للبيع؟</h2><p>تقييم مجاني خلال دقائق — اتصل الآن.</p></div>
      <div class="cta-banner__actions"><a href="tel:+965${PHONE}" class="btn btn--gold">📞 ${PHONE}</a><a href="https://wa.me/${WA}" class="btn btn--ghost" style="color:#fff;border-color:rgba(255,255,255,.2)">واتساب</a></div>
    </div>
  </div>
</section>
</main>
` + footer;

// Service details
const SD = {
  'used-ac':    [SERVICES[0], 'نشتري جميع أنواع المكيفات المستعملة في الكويت: سبليت، شباك، مركزي، صحراوي، وحتى المكيفات العاطلة. تقييم فوري مجاني، فك احترافي بدون أي ضرر، ودفع نقدي مباشر.', [['جميع الأنواع والماركات','LG, Samsung, General, Daikin وغيرها'], ['أعلى سعر بالسوق','نطابق ونتفوق على أي عرض'], ['فك بدون ضرر','فنيون متخصصون مع أدوات أصلية'], ['خدمة 24/7','نصلك في أي وقت وأي منطقة']]],
  'furniture':  [SERVICES[1], 'شراء الأثاث المستعمل بجميع أنواعه في الكويت: غرف نوم، صالات، كنب، طاولات طعام، مكاتب، خزائن، وكل ما تريد بيعه. أسعار مغرية وزيارة سريعة لمنزلك.', [['أثاث منزلي ومكتبي','غرف نوم، صالات، مكاتب، فنادق'], ['تقييم بالصور','أرسل صورة على الواتساب واحصل على سعر مبدئي'], ['نقل احترافي','معدات تغليف ونقل دون خدوش'], ['دفع فوري','نقداً بمجرد الاتفاق']]],
  'appliances': [SERVICES[2], 'نشتري جميع الأجهزة الكهربائية المستعملة: ثلاجات، غسالات، مايكروويف، شاشات، أفران، مكانس، ومجففات. حتى الأجهزة العاطلة لها قيمة عندنا.', [['كل الماركات','شاملة الفاخرة والاقتصادية'], ['عاطل أو شغال','نشتري الحالتين بأسعار عادلة'], ['نأتي إليك','بدون عناء النقل عليك'], ['دفع كاش','فوراً بعد المعاينة']]],
  'aluminum':   [SERVICES[3], 'متخصصون في شراء الألمنيوم والأبواب والشبابيك المستعملة في الكويت. نوفر فك احترافي وتقطيع وشراء بأعلى الأسعار وفق الأسعار اليومية للألمنيوم.', [['أبواب وشبابيك','جميع المقاسات والأشكال'], ['فك متخصص','فريق مدرب على الألمنيوم تحديداً'], ['سعر يومي شفاف','حسب سعر السوق العالمي'], ['تقطيع موقعي','أدوات احترافية في الموقع']]],
  'kitchens':   [SERVICES[4], 'شراء المطابخ المستعملة بكافة أنواعها: ألمنيوم، خشب، MDF، أكريليك، وكوارتز. فك احترافي ينقذ المطبخ من التلف ويعطيك أفضل سعر ممكن.', [['كل أنواع المطابخ','ألمنيوم، خشب، أكريليك'], ['فك دقيق','دون كسر الأجزاء القابلة لإعادة الاستخدام'], ['شامل الأجهزة','شفاط، فرن، حوض'], ['تقييم سريع','زيارة في نفس اليوم']]],
  'moving':     [SERVICES[5], 'خدمة نقل العفش الاحترافية في الكويت — فك، تغليف، نقل، تركيب — لجميع المناطق. سيارات مجهزة وفنيون مدربون لضمان وصول أثاثك سليماً.', [['فك وتركيب','نجار وفني متخصص'], ['تغليف كامل','مواد حماية وكراتين قوية'], ['كل المناطق','داخل الكويت وخارجها'], ['أسعار واضحة','بدون رسوم خفية']]],
  'scrap':      [SERVICES[6], 'شراء الخردة بجميع أنواعها في الكويت: حديد، نحاس، ألمنيوم، نحاس أصفر، كيبلات، بطاريات، ورادياتير. وزن دقيق بميزان معتمد ودفع فوري نقدي.', [['كل أنواع المعادن','حديد، نحاس، ألمنيوم، بطاريات'], ['وزن معتمد','ميزان دقيق أمامك'], ['أسعار يومية','حسب أسعار البورصة العالمية'], ['نقل مجاني','شاحناتنا تأتيك في أي منطقة']]],
};

// =================== ABOUT ===================
const aboutHTML = head('من نحن', 'تعرف على فريق الكويت لشراء المكيفات والأثاث والأجهزة المستعملة — 12 سنة خبرة و8500+ عميل.', 'about.html') + `
<main>
<section class="section">
  <div class="container">
    <div class="about">
      <div class="reveal">
        <span class="eyebrow">من نحن</span>
        <h1 style="margin:14px 0 18px">قصة بدأت بثقة<br>وكبرت بإتقان.</h1>
        <p class="lead">بدأنا قبل 12 سنة بفريق صغير وحلم واضح: نوفر للناس طريقة محترمة وعادلة لبيع أغراضهم المستعملة. اليوم، نخدم آلاف العائلات والشركات والمطاعم في جميع مناطق الكويت بنفس المبدأ الذي بدأنا به: شفافية، سرعة، واحترام.</p>
        <div class="about__points" style="margin-top:24px">
          <div class="about__point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg><div><b>رؤيتنا</b><span>نكون الخيار الأول لكل عميل يبحث عن بيع موثوق في الكويت.</span></div></div>
          <div class="about__point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg><div><b>مهمتنا</b><span>تقديم تجربة بيع راقية وشفافة بأعلى الأسعار وأسرع وقت.</span></div></div>
          <div class="about__point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg><div><b>قيمنا</b><span>صدق في التسعير، احترام للمنزل، والتزام بالموعد.</span></div></div>
        </div>
      </div>
      <div class="about__media reveal">
        <img src="/assets/about-team.jpg" alt="فريق العمل" loading="lazy">
        <div class="about__badge"><div><b>+8500</b><span>عميل سعيد</span></div></div>
      </div>
    </div>

    <div class="trust reveal" style="margin-top:64px">
      <div class="trust__item"><b data-count="12">0</b><span>سنة خبرة</span></div>
      <div class="trust__item"><b data-count="8500">0</b><span>عميل</span></div>
      <div class="trust__item"><b data-count="6">0</b><span>محافظات نغطيها</span></div>
      <div class="trust__item"><b data-count="98">0</b><span>% رضا</span></div>
    </div>
  </div>
</section>
</main>
` + footer;

// =================== SERVICES PAGE ===================
const servicesHTML = head('الخدمات', 'جميع خدماتنا: شراء المكيفات، الأثاث، الأجهزة، الألمنيوم، المطابخ، الخردة، ونقل العفش في الكويت.', 'services.html') + `
<main>
<section class="hero">
  <div class="container">
    <div class="reveal" style="text-align:center;margin-bottom:36px">
      <span class="eyebrow">خدماتنا</span>
      <h1 style="margin:14px 0 14px">كل ما نقدمه<br>تحت سقف واحد.</h1>
      <p class="lead" style="margin:0 auto">سبع خدمات متخصصة. فريق واحد محترف. وسعر دائماً يستحق.</p>
    </div>
    <div class="bento">${SERVICES.map(tile).join('')}</div>
  </div>
</section>
</main>
` + footer;

// =================== GALLERY ===================
const galleryHTML = head('أعمالنا', 'صور من أعمالنا الميدانية في الكويت — شراء وفك وتقييم.', 'gallery.html') + `
<main>
<section class="section">
  <div class="container">
    <div class="section__head reveal"><div><span class="eyebrow">معرض الأعمال</span><h2>أعمالنا تتحدث<br>قبل كلامنا.</h2></div></div>
    <div class="gallery">
      ${['svc-ac','svc-appliances','service-furniture','service-doors','svc-kitchen','svc-moving','svc-scrap','service-ac','about-team'].map(i => `<a href="/assets/${i}.jpg" class="reveal"><img src="/assets/${i}.jpg" alt="عمل ميداني" loading="lazy"></a>`).join('')}
    </div>
  </div>
</section>
</main>
` + footer;

// =================== COVERAGE ===================
const areas = ['السالمية','حولي','الجابرية','بيان','مشرف','سلوى','الرميثية','الزهراء','الفنطاس','المهبولة','أبو حليفة','الفحيحيل','مبارك الكبير','صباح السالم','الفروانية','الرقعي','جليب الشيوخ','العاصمة','الشعب','الدسمة','الجهراء','الأحمدي','الوفرة','صباح الأحمد'];
const coverageHTML = head('مناطق التغطية', 'نخدم جميع مناطق الكويت — العاصمة، حولي، الفروانية، مبارك الكبير، الأحمدي، الجهراء.', 'coverage.html') + `
<main>
<section class="section">
  <div class="container">
    <div class="reveal" style="text-align:center;margin-bottom:32px">
      <span class="eyebrow">تغطية شاملة</span>
      <h1 style="margin:14px 0 14px">نصل إليك<br>أينما كنت في الكويت.</h1>
      <p class="lead" style="margin:0 auto">جميع المحافظات الست، خدمة فورية 24/7، وزمن وصول 60 دقيقة.</p>
    </div>
    <div class="areas reveal">${areas.map(a => `<span>${a}</span>`).join('')}</div>
  </div>
</section>
</main>
` + footer;

// =================== CONTACT ===================
const contactHTML = head('اتصل بنا', `تواصل مع فريق الكويت للمكيفات المستعملة — اتصل ${PHONE} أو راسلنا على الواتساب.`, 'contact.html') + `
<main>
<section class="section">
  <div class="container">
    <div class="reveal" style="text-align:center;margin-bottom:48px">
      <span class="eyebrow">تواصل معنا</span>
      <h1 style="margin:14px 0 14px">جاهزون لخدمتك<br>على مدار الساعة.</h1>
    </div>

    <div class="contact">
      <div class="contact__info reveal">
        <div class="contact__row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg><div><b>اتصل بنا مباشرة</b><a href="tel:+965${PHONE}" style="color:var(--gold);font-weight:700">+965 ${PHONE}</a><br><span>24 ساعة طوال أيام الأسبوع</span></div></div>
        <div class="contact__row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg><div><b>واتساب فوري</b><a href="https://wa.me/${WA}" style="color:var(--gold);font-weight:700">راسلنا الآن</a><br><span>رد خلال دقائق</span></div></div>
        <div class="contact__row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><div><b>مناطق العمل</b><span>جميع محافظات الكويت الست</span></div></div>
      </div>

      <form class="form reveal" data-wa>
        <h3 style="margin-bottom:6px">احصل على تقييم مجاني</h3>
        <p style="color:var(--mute);font-size:.9rem;margin-bottom:8px">املأ النموذج وسنرد عليك خلال دقائق</p>
        <div><label>الاسم</label><input name="name" required placeholder="اسمك الكريم"></div>
        <div><label>رقم الهاتف</label><input name="phone" required type="tel" placeholder="965xxxxxxxx"></div>
        <div><label>الخدمة المطلوبة</label><select name="service" required>
          <option value="">اختر الخدمة</option>
          ${SERVICES.map(s => `<option>${s.title}</option>`).join('')}
        </select></div>
        <div><label>المنطقة</label><input name="area" placeholder="مثال: السالمية"></div>
        <div><label>تفاصيل إضافية</label><textarea name="note" rows="3" placeholder="اوصف الأغراض أو أي ملاحظات"></textarea></div>
        <button type="submit" class="btn btn--gold" style="margin-top:6px">إرسال عبر واتساب 💬</button>
      </form>
    </div>
  </div>
</section>
</main>
` + footer;

// =================== WRITE ALL ===================
const out = (file, html) => fs.writeFileSync(path.join('public', file), html);

out('index.html', indexHTML);
out('about.html', aboutHTML);
out('services.html', servicesHTML);
out('gallery.html', galleryHTML);
out('coverage.html', coverageHTML);
out('contact.html', contactHTML);

Object.entries(SD).forEach(([slug, [s, desc, bullets]]) => {
  out(`${slug}.html`, servicePage(s, desc, bullets));
});

console.log('✓ Built', 6 + Object.keys(SD).length, 'pages');
