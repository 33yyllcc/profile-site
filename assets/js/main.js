(function () {
  const i18n = {
    ar: {
      nav_home:"الرئيسية", nav_about:"نبذة عني", nav_articles:"المقالات", nav_links:"روابط", nav_contact:"تواصل",
      role:"طالب طب • صانع محتوى طبي",
      home_kicker:"Neo-Medical Profile • موثوق • متحرك",
      hero_title:"أجمل بروفايل طبي… بهوية حديثة وحضور قوي.",
      hero_p1:"هنا راح تشوف نسخة مرتبة من شغلي: محتوى طبي قصير (Reels/Shorts) + مقالات طويلة مرتبة + روابط رسمية.",
      hero_p2:"أنا <strong>عبدالرحمن عقيل</strong> — طالب طب وصانع محتوى طبي. أقدّم محتوى يركز على الوضوح، تصحيح الخرافات، وربط المعلومة بالواقع.",
      hero_p3:"هذا الموقع مو مجرد “Linktree” — هو أرشيف رسمي يعطي انطباع طبي قوي ومصداقية أعلى.",
      chips1:"تعليم طبي", chips2:"محتوى بصري", chips3:"كتابة علمية", chips4:"توعية صحية", chips5:"Myth-busting", chips6:"منهجية واضحة",
      cta1:"المقالات", cta1s:"Medium", cta2:"روابطي", cta2s:"Social", cta3:"تواصل", cta3s:"Email",
      c_disclaimer:"تنبيه: المحتوى تعليمي فقط وليس استشارة طبية.",

      s1t:"شنو راح تحصل هنا؟", s1d:"مقالات مرتبة + روابط + أرشيف محتوى + صفحة تواصل.",
      s2t:"أسلوبي بالمحتوى", s2d:"مختصر، واضح، عملي… وبنفس الوقت مسؤول بدون تهويل.",
      s3t:"ليش هذا مهم؟", s3d:"حتى أي شخص يشوفك يحس بثقة واحترافية من أول ثانية.",

      callout:"إذا تحب، أقدر أخلي قسم “Featured Videos” لاحقًا وأرتّبه مثل بورتفوليو حقيقي.",

      about_title:"نبذة عني",
      about_p:"أنا طالب طب وصانع محتوى طبي. هدفي تبسيط المعلومة الطبية للناس بطريقة واضحة ومحترمة للمصادر، وبأسلوب حديث يناسب السوشيال ميديا.",
      about_p2:"أشتغل على تحويل المواضيع الثقيلة إلى نقاط سهلة + أمثلة + رسومات/توضيح. وأبني هوية ثابتة عبر إنستغرام/تيك توك/يوتيوب.",
      about_p3:"إذا داخل الموقع لأول مرة: ابدأ من المقالات، وبعدها روح للروابط حتى تتابعني على المنصات.",

      articles_title:"المقالات",
      articles_p:"هنا أرتّب مقالاتي الطويلة. كل مقال مرتبط بالمصادر والفكرة تكون مفهومة حتى لغير الأطباء.",
      article1:"لماذا الأطباء “يخافون” من التفاح 🍎",
      article1d:"اقرأ المقال على Medium",

      links_title:"روابطي الرسمية",
      links_p:"هذه الصفحة صممتها حتى تكون رابط واحد رسمي بكل مكان.",
      contact_title:"تواصل",
      contact_p:"للتعاونات والمشاريع التعليمية والفعاليات:",
      contact_note:"ملاحظة: لا أقدّم تشخيص شخصي عبر الرسائل. الأسئلة التعليمية مرحّب بها.",

      langHint:"اللغة",
      langBtn:"EN"
    },

    en: {
      nav_home:"Home", nav_about:"About", nav_articles:"Articles", nav_links:"Links", nav_contact:"Contact",
      role:"Medical Student • Medical Content Creator",
      home_kicker:"Neo-Medical Profile • trust • motion",
      hero_title:"A premium medical profile with modern identity and strong presence.",
      hero_p1:"This is my official archive: short medical content (Reels/Shorts), long-form articles, and verified links.",
      hero_p2:"I’m <strong>Abd-Alrahman Aqeel Taha</strong> — a medical student & medical content creator. I focus on clarity, myth-busting, and practical understanding.",
      hero_p3:"This isn’t a basic link page — it’s a professional medical profile that builds trust instantly.",
      chips1:"Medical education", chips2:"Visual content", chips3:"Scientific writing", chips4:"Public awareness", chips5:"Myth-busting", chips6:"Clear structure",
      cta1:"Articles", cta1s:"Medium", cta2:"My links", cta2s:"Social", cta3:"Contact", cta3s:"Email",
      c_disclaimer:"Educational content only — not medical advice.",

      s1t:"What you’ll find here", s1d:"Articles + links + organized archive + contact page.",
      s2t:"My content style", s2d:"Clear, practical, and responsible — without hype.",
      s3t:"Why it matters", s3d:"So anyone visiting feels credibility from the first second.",

      callout:"If you want, I can add a “Featured Videos” portfolio section later.",

      about_title:"About",
      about_p:"I’m a medical student and medical content creator. My goal is to simplify medical knowledge in a modern, responsible, and audience-friendly way.",
      about_p2:"I turn heavy topics into clean points, examples, and visuals — and keep a consistent identity across platforms.",
      about_p3:"New here? Start with Articles, then use Links to follow my platforms.",

      articles_title:"Articles",
      articles_p:"This page lists my long-form writing with structured ideas and references.",
      article1:"Why Doctors Are Afraid of Apples 🍎",
      article1d:"Read on Medium",

      links_title:"Official Links",
      links_p:"This is my single official bio link page.",
      contact_title:"Contact",
      contact_p:"For collaborations, educational projects, and invitations:",
      contact_note:"Note: I can’t provide personal diagnosis via messages. Educational questions are welcome.",

      langHint:"Language",
      langBtn:"AR"
    }
  };

  const defaultLang = "ar";
  const saved = localStorage.getItem("lang");
  const lang = saved || defaultLang;

  const $ = (q) => document.querySelector(q);
  const $$ = (q) => document.querySelectorAll(q);

  function setDirAndLang(l){
    const isAr = l === "ar";
    document.documentElement.lang = l;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
  }

  function applyI18n(l){
    const dict = i18n[l] || i18n[defaultLang];
    $$("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    $$("[data-i18n-html]").forEach(el=>{
      const key = el.getAttribute("data-i18n-html");
      if (dict[key]) el.innerHTML = dict[key];
    });

    const btn = $("#langToggle");
    if(btn) btn.textContent = dict.langBtn;

    const hint = $("#langHint");
    if(hint) hint.textContent = dict.langHint;
  }

  function markActiveNav(){
    const path = location.pathname.split("/").pop() || "index.html";
    $$(".nav a").forEach(a=>{
      if(a.getAttribute("href") === path) a.classList.add("active");
    });
  }

  function fadeIn(){
    const page = $(".page");
    if(!page) return;
    requestAnimationFrame(()=> page.classList.add("ready"));
  }

  function revealOnScroll(){
    const els = $$(".reveal");
    if(!els.length) return;
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add("in");
      });
    }, {threshold: 0.14});
    els.forEach(el=> io.observe(el));
  }

  function parallaxMedia(){
    const media = $(".media");
    if(!media) return;
    if(!window.matchMedia("(hover:hover)").matches) return;

    let raf = null;
    const onMove = (ev)=>{
      const r = media.getBoundingClientRect();
      const x = (ev.clientX - (r.left + r.width/2)) / r.width;
      const y = (ev.clientY - (r.top + r.height/2)) / r.height;
      if(raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(()=>{
        media.style.transform = `rotateX(${(-y*2)}deg) rotateY(${(x*2)}deg)`;
      });
    };
    const reset = ()=> media.style.transform = "rotateX(0deg) rotateY(0deg)";
    media.addEventListener("pointermove", onMove);
    media.addEventListener("pointerleave", reset);
  }

  function spawnFloaters(){
    const layer = $(".floaters");
    if(!layer) return;

    const icons = ["i1","i2","i3"];
    const count = 14;

    for(let i=0;i<count;i++){
      const el = document.createElement("div");
      el.className = `floater ${icons[i % icons.length]}`;
      const left = Math.random()*100;
      const delay = Math.random()*10;
      const dur = 10 + Math.random()*10;
      const size = 34 + Math.random()*34;
      el.style.left = left + "vw";
      el.style.animationDelay = delay + "s";
      el.style.animationDuration = dur + "s";
      el.style.width = size + "px";
      el.style.height = size + "px";
      el.style.top = (70 + Math.random()*40) + "vh";
      layer.appendChild(el);
    }
  }

  function init(){
    setDirAndLang(lang);
    applyI18n(lang);
    markActiveNav();
    fadeIn();
    revealOnScroll();
    parallaxMedia();
    spawnFloaters();

    const btn = $("#langToggle");
    if(btn){
      btn.addEventListener("click", ()=>{
        const current = localStorage.getItem("lang") || lang;
        const next = current === "ar" ? "en" : "ar";
        localStorage.setItem("lang", next);
        setDirAndLang(next);
        applyI18n(next);
      });
    }

    const y = $("#year");
    if(y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
