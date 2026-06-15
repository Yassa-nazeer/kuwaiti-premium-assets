// Build static HTML pages into public/
const fs = require('fs');
const path = require('path');

const PHONE = '65954080';
const WA = '96565954080';
const NAME_AR = 'الكويت لشراء المكيفات المستعملة';

const NAV = [
  ['index.html','الرئيسية'],
  ['about.html','من نحن'],
  ['services.html','خدماتنا'],
  ['used-ac.html','مكيفات مستعملة'],
  ['scrap.html','شراء السكراب'],
  ['appliances.html','أجهزة كهربائية'],
  ['moving.html','نقل العفش'],
  ['kitchens.html','شراء المطابخ'],
  ['aluminum.html','الألمنيوم'],
  ['gallery.html','المعرض'],
  ['coverage.html','مناطق التغطية'],
  ['contact.html','اتصل بنا'],
];

const header = (active,title) => `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#0F4C81">
<title>${title}</title>
<meta name="description" content="${NAME_AR} - نشتري المكيفات المستعملة والسكراب والأجهزة الكهربائية والمطابخ والألمنيوم بأفضل الأسعار في جميع مناطق الكويت. تقييم فوري ودفع نقدي. اتصل ${PHONE}">
<meta name="keywords" content="شراء مكيفات مستعملة الكويت, شراء سكراب الكويت, شراء أجهزة كهربائية مستعملة, نقل عفش, شراء مطابخ مستعملة, ألمنيوم مستعمل, ${PHONE}">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="نشتري المكيفات المستعملة والسكراب بأفضل الأسعار في الكويت. تقييم فوري ودفع نقدي.">
<meta property="og:locale" content="ar_KW">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Tajawal:wght@500;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/styles.css">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"LocalBusiness","name":"${NAME_AR}","telephone":"+965${PHONE}","areaServed":"Kuwait","priceRange":"$$","address":{"@type":"PostalAddress","addressCountry":"KW"}}
</script>
</head>
<body>
<div class="scroll-progress"><div class="scroll-progress__bar"></div></div>
<header class="header">
  <div class="container">
    <div class="nav">
      <a href="index.html" class="brand">
        <span class="brand__mark">ك</span>
        <span class="brand__name">${NAME_AR}<small>خدمة فاخرة • تغطية شاملة</small></span>
      </a>
      <nav class="nav__links">
        ${NAV.slice(0,8).map(([h,t])=>`<a href="${h}">${t}</a>`).join('')}
      </nav>
      <div class="nav__cta">
        <a href="tel:${PHONE}" class="btn btn--primary">📞 ${PHONE}</a>
      </div>
      <button class="menu-btn" aria-label="القائمة"><span></span></button>
    </div>
    <div class="mobile-menu">
      ${NAV.map(([h,t])=>`<a href="${h}">${t}</a>`).join('')}
      <a href="tel:${PHONE}" class="btn btn--primary" style="margin-top:10px;width:100%">📞 اتصل الآن ${PHONE}</a>
    </div>
  </div>
</header>
`;

const footer = `
<footer class="footer">
  <div class="container">
    <div>
      <div class="brand">
        <span class="brand__mark">ك</span>
        <span class="brand__name">${NAME_AR}<small>الخدمة الأكثر ثقة في الكويت</small></span>
      </div>
      <p style="margin-top:14px;font-size:14px;line-height:1.8">شركة رائدة في شراء المكيفات المستعملة والسكراب والأجهزة الكهربائية بأفضل الأسعار. تقييم فوري، دفع نقدي، فك ونقل مجاني، وتغطية شاملة لجميع مناطق الكويت.</p>
    </div>
    <div>
      <h5>روابط سريعة</h5>
      ${NAV.slice(0,6).map(([h,t])=>`<a href="${h}">${t}</a>`).join('')}
    </div>
    <div>
      <h5>خدماتنا</h5>
      <a href="used-ac.html">شراء المكيفات المستعملة</a>
      <a href="scrap.html">شراء السكراب بجميع أنواعه</a>
      <a href="appliances.html">شراء الأجهزة الكهربائية</a>
      <a href="moving.html">نقل العفش والأثاث</a>
      <a href="kitchens.html">شراء المطابخ المستعملة</a>
      <a href="aluminum.html">شراء الألمنيوم</a>
    </div>
    <div>
      <h5>تواصل معنا</h5>
      <a href="tel:${PHONE}">📞 ${PHONE}</a>
      <a href="https://wa.me/${WA}">💬 واتساب مباشر</a>
      <a href="coverage.html">📍 جميع مناطق الكويت</a>
      <a href="#">🕐 خدمة 24/7</a>
    </div>
  </div>
  <div class="container footer__bottom">© ${new Date().getFullYear()} ${NAME_AR}. جميع الحقوق محفوظة.</div>
</footer>
<a class="float-btn float-wa" href="https://wa.me/${WA}" aria-label="واتساب">💬</a>
<a class="float-btn float-call" href="tel:${PHONE}" aria-label="اتصال">📞</a>
<button class="to-top" aria-label="للأعلى">↑</button>
<div class="mobile-bar">
  <a class="call" href="tel:${PHONE}">📞 اتصل الآن</a>
  <a class="wa" href="https://wa.me/${WA}">💬 واتساب</a>
</div>
<script src="assets/main.js"></script>
</body></html>`;

// Image helper - Unsplash
const img = (q,w=900,h=600) => `https://images.unsplash.com/${q}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const HERO_IMG = img('photo-1631545806609-c0fe46ab32c1');
const AC_IMG = img('photo-1581275299888-536bf2fa6f3a');

// Service card data
const services = [
  {h:'شراء المكيفات المستعملة',d:'نشتري جميع أنواع المكيفات (سبليت، شباك، مركزية) بأفضل الأسعار وبتقييم فوري.',ic:'❄️',img:img('photo-1631545806609-c0fe46ab32c1'),href:'used-ac.html'},
  {h:'شراء السكراب بجميع أنواعه',d:'حديد، نحاس، ألمنيوم، سكراب صناعي ومخازن — استلام فوري ودفع نقدي.',ic:'⚙️',img:img('photo-1605600659908-0ef719419d41'),href:'scrap.html'},
  {h:'شراء الأجهزة الكهربائية',d:'ثلاجات، غسالات، نشافات، فريزرات، أفران وأجهزة المطاعم بأعلى الأسعار.',ic:'🔌',img:img('photo-1585771724684-38269d6639fd'),href:'appliances.html'},
  {h:'نقل العفش والأثاث',d:'نقل منازل ومكاتب وشركات مع فك وتركيب وتغليف احترافي.',ic:'🚛',img:img('photo-1600585154340-be6161a56a0c'),href:'moving.html'},
  {h:'شراء المطابخ المستعملة',d:'مطابخ ألمنيوم وخشب، فك وشراء مطابخ كاملة بأفضل الأسعار.',ic:'🍳',img:img('photo-1556909114-f6e7ad7d3136'),href:'kitchens.html'},
  {h:'شراء الألمنيوم والأبواب',d:'أبواب وشبابيك ألمنيوم، واجهات زجاج، هاندريل وألمنيوم مستعمل.',ic:'🪟',img:img('photo-1558618666-fcd25c85cd64'),href:'aluminum.html'},
];

const serviceCards = (list=services) => `<div class="grid grid-3">${list.map((s,i)=>`
  <article class="service reveal" style="transition-delay:${i*60}ms">
    <div class="service__img"><img loading="lazy" src="${s.img}" alt="${s.h}"></div>
    <div class="service__body">
      <div class="service__icon">${s.ic}</div>
      <h3>${s.h}</h3>
      <p>${s.d}</p>
      <a href="${s.href||'contact.html'}" class="service__cta">اعرف المزيد ←</a>
    </div>
  </article>`).join('')}</div>`;

const ctaBanner = `<section class="section"><div class="container"><div class="cta-banner reveal">
  <h3>احصل على تقييم فوري ومجاني الآن</h3>
  <p>اتصل بنا أو راسلنا على واتساب وسيقوم فريقنا بزيارتك خلال ساعات</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center">
    <a href="tel:${PHONE}" class="btn btn--ghost btn--lg">📞 ${PHONE}</a>
    <a href="https://wa.me/${WA}" class="btn btn--wa btn--lg">💬 واتساب مباشر</a>
  </div>
</div></div></section>`;

const trustSection = `<section class="section"><div class="container">
  <div class="section-head reveal">
    <span class="eyebrow"><span class="dot"></span> لماذا نحن</span>
    <h2>الخيار الأول للعملاء في الكويت</h2>
    <p>خبرة طويلة، خدمة احترافية، وأسعار لا تُقاوم تجعلنا الشريك الأمثل</p>
  </div>
  <div class="features">
    ${[
      ['⚡','تقييم فوري في نفس اليوم','فريقنا يصل إليك خلال ساعات لتقديم عرض سعر شفاف ومفصل.'],
      ['💵','دفع نقدي فوري','نلتزم بأعلى أسعار السوق مع دفع كامل المبلغ نقداً عند الاستلام.'],
      ['🚛','فك ونقل مجاني','نتولى عملية الفك والنقل بأيدي فنيين محترفين بدون أي تكلفة إضافية.'],
      ['🛡️','ضمان الثقة','أكثر من 15 سنة خبرة في خدمة عملائنا بأعلى معايير الاحترافية.'],
      ['📍','تغطية شاملة للكويت','نخدم جميع المحافظات والمناطق بدون استثناء على مدار 24 ساعة.'],
      ['⭐','أسعار الأفضل في السوق','مقارنة شفافة وعروض حقيقية تضمن لك أعلى قيمة لأصولك.'],
    ].map(([i,h,p])=>`<div class="feature reveal"><div class="ic">${i}</div><div><h4>${h}</h4><p>${p}</p></div></div>`).join('')}
  </div>
  <div class="stats reveal" style="margin-top:36px">
    <div class="stats__grid">
      <div class="stat"><div class="num"><span data-count="5000" data-suffix="+">0</span></div><div class="lbl">عملية شراء ناجحة</div></div>
      <div class="stat"><div class="num">24/7</div><div class="lbl">خدمة العملاء</div></div>
      <div class="stat"><div class="num"><span data-count="100" data-suffix="٪">0</span></div><div class="lbl">رضا العملاء</div></div>
      <div class="stat"><div class="num"><span data-count="15" data-suffix="+">0</span></div><div class="lbl">سنوات من الخبرة</div></div>
    </div>
  </div>
</div></section>`;

const coverageSection = `<section class="section section--alt"><div class="container">
  <div class="section-head reveal">
    <span class="eyebrow"><span class="dot"></span> تغطية شاملة</span>
    <h2>نخدم جميع مناطق الكويت</h2>
    <p>أينما كنت في الكويت، فريقنا يصل إليك بسرعة وبدون عناء</p>
  </div>
  <div class="coverage">
    ${['حولي','السالمية','الفروانية','الجهراء','الأحمدي','العاصمة','مبارك الكبير','خيطان','الفحيحيل','صباح السالم','الفنطاس','المنقف'].map(a=>`<div class="area reveal"><span class="pin">📍</span> ${a}</div>`).join('')}
  </div>
</div></section>`;

const reviewsSection = `<section class="section"><div class="container">
  <div class="section-head reveal">
    <span class="eyebrow"><span class="dot"></span> آراء العملاء</span>
    <h2>ماذا يقول عملاؤنا عنا</h2>
    <p>ثقة عملائنا هي مصدر فخرنا واستمرارنا</p>
  </div>
  <div class="grid grid-3">
    ${[
      ['أبو محمد','حولي','خدمة ممتازة وسعر منصف جداً. جاء الفريق في الموعد وفك المكيفات باحترافية عالية. أنصح بهم بشدة.'],
      ['أم عبدالله','السالمية','تعاملت معهم لبيع أجهزة كهربائية قديمة وكانت التجربة رائعة. دفع نقدي وفوري ومعاملة محترمة.'],
      ['شركة الخليج','الفروانية','تعاقدنا معهم لإخلاء مخزن كامل من السكراب، الاستجابة سريعة والأسعار الأفضل في السوق.'],
    ].map(([n,a,t])=>`<div class="review reveal">
      <div class="stars">★★★★★</div>
      <p>"${t}"</p>
      <div class="who"><div class="av">${n[0]}</div><div><strong>${n}</strong><small>${a}</small></div></div>
    </div>`).join('')}
  </div>
</div></section>`;

const faqSection = (items) => `<section class="section section--alt"><div class="container">
  <div class="section-head reveal">
    <span class="eyebrow"><span class="dot"></span> الأسئلة الشائعة</span>
    <h2>أجوبة على أكثر الأسئلة شيوعاً</h2>
  </div>
  <div class="faq">
    ${items.map(([q,a])=>`<details class="faq__item reveal"><summary>${q}</summary><div class="a">${a}</div></details>`).join('')}
  </div>
</div></section>`;

const defaultFAQ = [
  ['هل التقييم والمعاينة مجانية؟','نعم، نقدم خدمة المعاينة والتقييم بشكل مجاني تماماً في جميع مناطق الكويت بدون أي التزام.'],
  ['كم يستغرق وصول الفريق؟','عادة نصل خلال ساعات قليلة من الاتصال، ويمكن تنسيق الموعد المناسب لك.'],
  ['هل تشترون المكيفات الخربانة؟','نعم، نشتري جميع أنواع المكيفات بما فيها القديمة والخربانة بأسعار مناسبة.'],
  ['هل يتم الدفع نقداً؟','نعم، نلتزم بالدفع الفوري نقداً عند الاستلام مباشرة بدون أي تأخير.'],
  ['هل تخدمون الشركات والفنادق؟','نعم، لدينا قسم متخصص للتعامل مع الشركات والفنادق والمشاريع الكبيرة.'],
];

// ---------- PAGES ----------
const pages = {};

pages['index.html'] = `
<section class="hero">
  <div class="container">
    <div class="hero__grid">
      <div class="reveal">
        <span class="eyebrow"><span class="dot"></span> الشركة الأولى في الكويت</span>
        <h1>نشتري <span class="grad">المكيفات المستعملة</span> والسكراب بأفضل الأسعار في الكويت</h1>
        <p class="lead">تقييم فوري • دفع نقدي • فك ونقل مجاني • خدمة احترافية تغطي جميع مناطق الكويت على مدار الساعة.</p>
        <div class="hero__cta">
          <a href="tel:${PHONE}" class="btn btn--primary btn--lg">📞 اتصل الآن</a>
          <a href="https://wa.me/${WA}" class="btn btn--wa btn--lg">💬 واتساب مباشر</a>
          <a href="contact.html" class="btn btn--ghost btn--lg">احصل على تقييم مجاني</a>
        </div>
        <div class="hero__trust">
          ${[['⚡','خدمة سريعة'],['💎','أفضل الأسعار'],['💵','دفع فوري'],['📍','تغطية كاملة للكويت']].map(([i,t])=>`<div class="trust-pill"><span class="ic">${i}</span>${t}</div>`).join('')}
        </div>
      </div>
      <div class="reveal" style="position:relative">
        <div class="hero__card"><img src="${HERO_IMG}" alt="مكيفات مستعملة الكويت"></div>
        <div class="hero__badge b1"><span class="ic">★</span><div>5000+<small>عملية ناجحة</small></div></div>
        <div class="hero__badge b2"><span class="ic">⏱</span><div>أقل من ساعة<small>زمن الاستجابة</small></div></div>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt"><div class="container">
  <div class="section-head reveal">
    <span class="eyebrow"><span class="dot"></span> خدماتنا الكاملة</span>
    <h2>كل ما تحتاجه تحت سقف واحد</h2>
    <p>حلول متكاملة لشراء المستعمل والسكراب وخدمات النقل بأعلى مستوى من الاحترافية</p>
  </div>
  ${serviceCards()}
</div></section>

${trustSection}
${coverageSection}
${reviewsSection}
${faqSection(defaultFAQ)}
${ctaBanner}
`;

pages['about.html'] = `
<section class="page-hero"><div class="container">
  <div class="breadcrumb"><a href="index.html">الرئيسية</a> / من نحن</div>
  <h1>من نحن</h1>
  <p>شركة رائدة في الكويت متخصصة في شراء المكيفات المستعملة والسكراب والأجهزة الكهربائية بأعلى الأسعار وأفضل المعايير المهنية.</p>
</div></section>

<section class="section"><div class="container">
  <div class="hero__grid">
    <div class="reveal">
      <span class="eyebrow"><span class="dot"></span> قصتنا</span>
      <h2 style="font-size:32px;font-weight:900;margin:14px 0">أكثر من 15 سنة من الثقة والاحترافية</h2>
      <p style="color:var(--muted);margin-bottom:16px">انطلقنا برؤية واضحة: تقديم خدمة شراء المستعمل بمعايير عالمية في الكويت. اليوم نفخر بأننا الخيار الأول لآلاف العملاء من الأفراد والشركات والفنادق.</p>
      <p style="color:var(--muted)">نؤمن بأن التقييم الشفاف والدفع الفوري والخدمة الراقية هي ركائز النجاح. لذلك نستثمر في فريقنا وأدواتنا لنضمن لك أفضل تجربة ممكنة.</p>
      <div class="hero__cta"><a href="contact.html" class="btn btn--primary">تواصل معنا</a></div>
    </div>
    <div class="hero__card reveal"><img src="${img('photo-1556761175-5973dc0f32e7')}" alt="فريق العمل"></div>
  </div>
</div></section>
${trustSection}
${reviewsSection}
${ctaBanner}
`;

pages['services.html'] = `
<section class="page-hero"><div class="container">
  <div class="breadcrumb"><a href="index.html">الرئيسية</a> / خدماتنا</div>
  <h1>خدماتنا الاحترافية</h1>
  <p>مجموعة شاملة من الخدمات المصممة لتلبية احتياجاتك بأعلى مستوى من الجودة والكفاءة.</p>
</div></section>
<section class="section"><div class="container">${serviceCards()}</div></section>
${trustSection}
${ctaBanner}
`;

const subPage = (title,intro,items,gimg) => `
<section class="page-hero"><div class="container">
  <div class="breadcrumb"><a href="index.html">الرئيسية</a> / ${title}</div>
  <h1>${title}</h1>
  <p>${intro}</p>
</div></section>
<section class="section"><div class="container">
  <div class="hero__grid">
    <div class="reveal">
      <span class="eyebrow"><span class="dot"></span> خدمة متخصصة</span>
      <h2 style="font-size:30px;font-weight:900;margin:14px 0">${title} بأفضل الأسعار في الكويت</h2>
      <p style="color:var(--muted)">${intro}</p>
      <div class="features" style="margin-top:18px">
        ${items.map(it=>`<div class="feature"><div class="ic">✓</div><div><h4>${it}</h4></div></div>`).join('')}
      </div>
      <div class="hero__cta" style="margin-top:20px">
        <a href="tel:${PHONE}" class="btn btn--primary btn--lg">📞 اتصل الآن</a>
        <a href="https://wa.me/${WA}" class="btn btn--wa btn--lg">💬 واتساب</a>
      </div>
    </div>
    <div class="hero__card reveal"><img src="${gimg}" alt="${title}"></div>
  </div>
</div></section>
${trustSection}
${coverageSection}
${faqSection(defaultFAQ)}
${ctaBanner}
`;

pages['used-ac.html'] = subPage('شراء المكيفات المستعملة',
  'نشتري جميع أنواع المكيفات المستعملة (سبليت، شباك، مركزية، قديمة، خربانة) بأعلى الأسعار في الكويت مع خدمة الفك والنقل المجاني.',
  ['شراء مكيفات سبليت','شراء مكيفات شباك','شراء مكيفات مركزية','شراء مكيفات قديمة','شراء مكيفات خربانة','شراء مكيفات شركات','شراء مكيفات فنادق ومنشآت'],
  img('photo-1631545806609-c0fe46ab32c1'));

pages['scrap.html'] = subPage('شراء السكراب بجميع أنواعه',
  'نشتري السكراب الصناعي والمنزلي بمختلف أنواعه (حديد، نحاس، ألمنيوم، سكراب مخازن ومصانع وورش) بأعلى الأسعار ودفع نقدي فوري.',
  ['سكراب الحديد بأنواعه','سكراب النحاس (كوبر)','سكراب الألمنيوم','سكراب صناعي للمصانع','سكراب المخازن والمستودعات','سكراب البناء والمقاولات','إخلاء كامل للمواقع'],
  img('photo-1605600659908-0ef719419d41'));

pages['appliances.html'] = subPage('شراء الأجهزة الكهربائية المستعملة',
  'نشتري جميع الأجهزة الكهربائية المنزلية وأجهزة المطاعم المستعملة بأفضل الأسعار في الكويت.',
  ['ثلاجات بجميع أحجامها','غسالات أوتوماتيك','نشافات الملابس','أفران كهرباء وغاز','فريزرات صناعية ومنزلية','أجهزة مطاعم وكافيهات','أجهزة منزلية متنوعة'],
  img('photo-1585771724684-38269d6639fd'));

pages['moving.html'] = subPage('نقل العفش والأثاث',
  'خدمة نقل عفش احترافية تشمل الفك والتركيب والتغليف بأيدي فريق متخصص ومعدات حديثة.',
  ['نقل المنازل بكل أنواعها','نقل المكاتب','نقل الشركات والمؤسسات','فك وتركيب الأثاث','تغليف احترافي بمواد عالية الجودة','تحميل وتنزيل آمن','سيارات مجهزة لكل الأحجام'],
  img('photo-1600585154340-be6161a56a0c'));

pages['kitchens.html'] = subPage('شراء المطابخ المستعملة',
  'نشتري المطابخ المستعملة بجميع أنواعها (ألمنيوم وخشب) ونقوم بفكها ونقلها بأعلى احترافية.',
  ['مطابخ ألمنيوم بكافة الأشكال','مطابخ خشب فاخرة','فك مطابخ كاملة','شراء مطابخ كاملة جاهزة','تقييم فوري وعرض سعر شفاف','دفع نقدي عند الاستلام'],
  img('photo-1556909114-f6e7ad7d3136'));

pages['aluminum.html'] = subPage('شراء الألمنيوم والأبواب والشبابيك',
  'نشتري الألمنيوم بجميع أنواعه: أبواب، شبابيك، واجهات زجاج وهاندريل بأفضل الأسعار في السوق.',
  ['أبواب ألمنيوم بكافة المقاسات','شبابيك ألمنيوم','واجهات زجاجية كبيرة','هاندريل ألمنيوم','ألمنيوم مستعمل بجميع أنواعه','إخلاء كامل للمشاريع'],
  img('photo-1558618666-fcd25c85cd64'));

const galleryImgs = [
  'photo-1631545806609-c0fe46ab32c1','photo-1585771724684-38269d6639fd',
  'photo-1605600659908-0ef719419d41','photo-1556909114-f6e7ad7d3136',
  'photo-1600585154340-be6161a56a0c','photo-1558618666-fcd25c85cd64',
  'photo-1581275299888-536bf2fa6f3a','photo-1597149961419-5c4cf6c3a000',
  'photo-1581092334651-ddf26d9a09d0','photo-1581092580497-e0d23cbdf1dc',
  'photo-1581092919535-77a2f1c2c1d7','photo-1556761175-5973dc0f32e7'
];

pages['gallery.html'] = `
<section class="page-hero"><div class="container">
  <div class="breadcrumb"><a href="index.html">الرئيسية</a> / المعرض</div>
  <h1>معرض أعمالنا</h1>
  <p>لقطات حقيقية من خدماتنا اليومية في جميع مناطق الكويت.</p>
</div></section>
<section class="section"><div class="container">
  <div class="gallery">
    ${galleryImgs.map(g=>`<a href="${img(g,1200,1200)}" class="reveal"><img loading="lazy" src="${img(g,600,600)}" alt="معرض الأعمال"></a>`).join('')}
  </div>
</div></section>
${ctaBanner}
`;

pages['coverage.html'] = `
<section class="page-hero"><div class="container">
  <div class="breadcrumb"><a href="index.html">الرئيسية</a> / مناطق التغطية</div>
  <h1>نغطي جميع مناطق الكويت</h1>
  <p>خدماتنا تصل إليك أينما كنت داخل دولة الكويت على مدار الساعة.</p>
</div></section>
${coverageSection}
${ctaBanner}
`;

pages['contact.html'] = `
<section class="page-hero"><div class="container">
  <div class="breadcrumb"><a href="index.html">الرئيسية</a> / اتصل بنا</div>
  <h1>تواصل معنا</h1>
  <p>فريقنا جاهز لخدمتك على مدار الساعة. اتصل بنا أو راسلنا على واتساب وسنقوم بالرد فوراً.</p>
</div></section>
<section class="section"><div class="container">
  <div class="contact-cards">
    <div class="contact-card reveal"><div class="ic">📞</div><div><h4>الهاتف</h4><a href="tel:${PHONE}">${PHONE}</a></div></div>
    <div class="contact-card reveal"><div class="ic">💬</div><div><h4>واتساب</h4><a href="https://wa.me/${WA}">${PHONE}</a></div></div>
    <div class="contact-card reveal"><div class="ic">🕐</div><div><h4>أوقات العمل</h4><p>24 / 7 طوال الأسبوع</p></div></div>
    <div class="contact-card reveal"><div class="ic">📍</div><div><h4>مناطق الخدمة</h4><p>جميع مناطق الكويت</p></div></div>
  </div>
  <div class="hero__grid">
    <form id="contact-form" class="form reveal">
      <h3 style="font-size:22px;font-weight:900;margin-bottom:6px">احصل على تقييم مجاني</h3>
      <p style="color:var(--muted);font-size:14px;margin-bottom:10px">املأ النموذج وسنتواصل معك خلال دقائق</p>
      <div class="field"><label>الاسم الكامل</label><input name="name" required placeholder="اكتب اسمك"></div>
      <div class="field"><label>رقم الهاتف</label><input name="phone" type="tel" required placeholder="9XXXXXXX"></div>
      <div class="field"><label>الخدمة المطلوبة</label>
        <select name="service" required>
          <option value="">اختر الخدمة</option>
          <option>شراء مكيفات مستعملة</option><option>شراء سكراب</option>
          <option>شراء أجهزة كهربائية</option><option>نقل عفش</option>
          <option>شراء مطابخ</option><option>شراء ألمنيوم</option>
        </select>
      </div>
      <div class="field"><label>المنطقة</label><input name="area" placeholder="مثال: السالمية"></div>
      <div class="field"><label>تفاصيل إضافية</label><textarea name="message" placeholder="اكتب تفاصيل ما تود بيعه..."></textarea></div>
      <button type="submit" class="btn btn--primary btn--lg">📤 إرسال عبر واتساب</button>
    </form>
    <div class="reveal">
      <div class="hero__card" style="overflow:hidden;border-radius:var(--radius-lg)">
        <iframe src="https://www.google.com/maps?q=Kuwait+City&output=embed" style="width:100%;height:420px;border:0" loading="lazy"></iframe>
      </div>
    </div>
  </div>
</div></section>
${ctaBanner}
`;

// Write files
for(const [file,body] of Object.entries(pages)){
  const t = file==='index.html'
    ? `${NAME_AR} | شراء المكيفات المستعملة والسكراب بأفضل الأسعار في الكويت`
    : `${NAV.find(n=>n[0]===file)?.[1] || file.replace('.html','')} | ${NAME_AR}`;
  const html = header(file,t) + body + footer;
  fs.writeFileSync(path.join(__dirname,'..',file), html);
  console.log('wrote',file);
}
