(function () {
  const i18n = {
    ar: {
      /* NAV */
      nav_home: "الرئيسية",
      nav_about: "نبذة عني",
      nav_articles: "المقالات",
      nav_links: "روابط",
      nav_contact: "تواصل",
      ig_btn:"انستغرام",
      tt_btn:"تيك توك",
      role: "طالب طب • صانع محتوى طبي",

      /* HOME / HERO */
      home_kicker: "ملف طبي تعليمي • موثوق • متحرك",
      hero_title: "منو عبدالرحمن؟ وشنو هذا الموقع؟",
      hero_p1:
        "أهلاً — أنا عبدالرحمن عقيل، طالب طب وصانع محتوى طبي. هذا الموقع يمثل الأرشيف الرسمي لمقالاتي وروابطي وأعمالي التعليمية.",
      hero_p2:
        "أركز على تبسيط المعلومات الطبية بدون تهويل، وتصحيح المفاهيم الخاطئة المنتشرة على السوشيال ميديا، وتحويل المواضيع الثقيلة إلى نقاط واضحة وأمثلة عملية.",
      hero_p3:
        "المحتوى موجّه لطلاب الطب ولغير المختصين الراغبين بفهم الطب بطريقة صحيحة ومبنية على أساس علمي.",

      chips1: "تعليم طبي",
      chips2: "محتوى بصري",
      chips3: "كتابة علمية",
      chips4: "توعية صحية",
      chips5: "تصحيح خرافات",
      chips6: "منهجية واضحة",

      cta1: "المقالات",
      cta1s: "Medium",
      cta2: "روابطي",
      cta2s: "Social",
      cta3: "تواصل",
      cta3s: "Email",

      c_disclaimer: "تنبيه: المحتوى تعليمي/توعوي فقط ولا يُعد استشارة طبية أو تشخيصاً.",

      /* HIGHLIGHTS */
      s1t: "شنو راح تحصل هنا؟",
      s1d: "مقالات طويلة مرتبة، روابط رسمية، صفحة تواصل، وأرشيف عملي لشغلي بالمحتوى الطبي.",
      s2t: "أسلوبي بالمحتوى",
      s2d: "اختصار ذكي، أمثلة واضحة، نقاط عملية، مع الحفاظ على المسؤولية الطبية.",
      s3t: "ليش هذا مهم؟",
      s3d: "لأن الفهم الصحيح يقلل التضليل الطبي ويزيد الوعي الصحي عند الناس.",

      callout: "ابدأ من صفحة المقالات إذا تحب التفاصيل، أو صفحة الروابط للمتابعة السريعة.",

      /* WORKFLOW (NEW) */
      wf1t: "طريقة عملي",
      wf1d: "اختيار موضوع مهم → ترتيب الفكرة → مراجعة مصادر موثوقة → تحويله لمقال وفيديو.",
      wf2t: "معايير المحتوى",
      wf2d: "وضوح، مسؤولية، بدون تهويل، احترام الخصوصية، وذكر المصادر قدر الإمكان.",
      wf3t: "لمن هذا المحتوى؟",
      wf3d: "طلاب طب وعلوم صحية، وأي شخص يحب يفهم الطب بطريقة صحيحة.",

      /* TOPICS (NEW) */
      topics_title: "مواضيع أركز عليها",
      topics_note: "هذه قائمة مرنة تتحدث مع الوقت حسب نوع المحتوى.",

      /* FEATURED (NEW) */
      featured_title: "محتوى مميز",
      featured_desc: "آخر مقال منشور على Medium:",
      featured_article_desc: "اقرأ المقال الكامل مع الفكرة العلمية والمراجع",
      featured_profile_desc: "كل المقالات في مكان واحد",

      /* ABOUT (keep existing keys for other pages) */
      about_title: "نبذة عني",
      about_p:
        "أنا طالب طب وصانع محتوى طبي. هدفي تبسيط المعلومة الطبية للناس بطريقة واضحة ومحترمة للمصادر، وبأسلوب حديث يناسب السوشيال ميديا.",
      about_p2:
        "أشتغل على تحويل المواضيع الثقيلة إلى نقاط سهلة + أمثلة + رسومات/توضيح. وأبني هوية ثابتة عبر إنستغرام/تيك توك/يوتيوب.",
      about_p3:
        "إذا داخل الموقع لأول مرة: ابدأ من المقالات، وبعدها روح للروابط حتى تتابعني على المنصات.",

      /* ARTICLES (keep existing keys) */
      articles_title: "المقالات",
      articles_p:
        "هنا أرتّب مقالاتي الطويلة. كل مقال مرتبط بالمصادر والفكرة تكون مفهومة حتى لغير الأطباء.",
      article1: "لماذا الأطباء “يخافون” من التفاح 🍎",
      article1d: "اقرأ المقال على Medium",

      /* LINKS + CONTACT (keep existing keys) */
      links_title: "روابطي الرسمية",
      links_p: "هذه الصفحة صممتها حتى تكون رابط واحد رسمي بكل مكان.",
      contact_title: "تواصل",
      contact_p: "للتعاونات والمشاريع التعليمية والفعاليات:",
      contact_note: "ملاحظة: لا أقدّم تشخيص شخصي عبر الرسائل. الأسئلة التعليمية مرحّب بها.",

      /* UI */
      langHint: "اللغة",
      langBtn: "EN",

      /* FOOTER CTA (NEW) */
      footer_note: "إذا تحب التعاون في محتوى أو مشروع تعليمي، تواصل معي عبر صفحة التواصل."
    },

    en: {
      /* NAV */
      nav_home: "Home",
      nav_about: "About",
      nav_articles: "Articles",
      nav_links: "Links",
      nav_contact: "Contact",

      role: "Medical Student • Medical Content Creator",

      /* HOME / HERO */
      home_kicker: "Educational Medical Profile • Trusted • Dynamic",
      hero_title: "who is Abd-Alrahman ? and what is this website)",
      hero_p1:
        "Hi — I’m Abd-Alrahman Aqeel Taha, a medical student and medical content creator. This website is my official archive for articles, links, and educational work.",
      hero_p2:
        "I focus on simplifying medical concepts without exaggeration, correcting common medical myths on social media, and turning complex topics into clear, practical points.",
      hero_p3:
        "My content targets medical students as well as non-medical audiences who want accurate, evidence-based understanding.",

      chips1: "Medical education",
      chips2: "Visual content",
      chips3: "Scientific writing",
      chips4: "Health awareness",
      chips5: "Myth-busting",
      chips6: "Clear methodology",
      ig_btn:"Instagram",
      tt_btn:"TikTok",
      cta1: "Articles",
      cta1s: "Medium",
      cta2: "My links",
      cta2s: "Social",
      cta3: "Contact",
      cta3s: "Email",

      c_disclaimer: "Disclaimer: This content is for education and awareness only, not medical advice.",

      /* HIGHLIGHTS */
      s1t: "What you’ll find here",
      s1d: "Well-structured long articles, official links, a contact page, and an organized medical content archive.",
      s2t: "My content style",
      s2d: "Clear explanations, practical examples, and responsible medical communication.",
      s3t: "Why it matters",
      s3d: "Because correct understanding reduces misinformation and improves health awareness.",

      callout: "Start with the Articles page for depth, or the Links page for quick access.",

      /* WORKFLOW (NEW) */
      wf1t: "My workflow",
      wf1d: "Topic selection → idea structuring → reviewing reliable sources → publishing as articles and videos.",
      wf2t: "Content standards",
      wf2d: "Clarity, responsibility, no exaggeration, privacy respect, and referencing when possible.",
      wf3t: "Who is this for?",
      wf3d: "Medical students, health-related learners, and anyone seeking accurate medical knowledge.",

      /* TOPICS (NEW) */
      topics_title: "Main focus areas",
      topics_note: "A flexible list that evolves with future content.",

      /* FEATURED (NEW) */
      featured_title: "Featured content",
      featured_desc: "Latest article published on Medium:",
      featured_article_desc: "Read the full article with the scientific idea and references",
      featured_profile_desc: "All articles in one place",

      /* ABOUT (keep existing keys) */
      about_title: "About",
      about_p:
        "I’m a medical student and medical content creator. My goal is to simplify medical knowledge in a modern, responsible, and audience-friendly way.",
      about_p2:
        "I turn heavy topics into clean points, examples, and visuals — and keep a consistent identity across platforms.",
      about_p3:
        "New here? Start with Articles, then use Links to follow my platforms.",

      /* ARTICLES (keep existing keys) */
      articles_title: "Articles",
      articles_p: "This page lists my long-form writing with structured ideas and references.",
      article1: "Why Doctors Are Afraid of Apples 🍎",
      article1d: "Read on Medium",

      /* LINKS + CONTACT (keep existing keys) */
      links_title: "Official Links",
      links_p: "This is my single official bio link page.",
      contact_title: "Contact",
      contact_p: "For collaborations, educational projects, and invitations:",
      contact_note: "Note: I can’t provide personal diagnosis via messages. Educational questions are welcome.",

      /* UI */
      langHint: "Language",
      langBtn: "AR",

      /* FOOTER CTA (NEW) */
      footer_note: "For collaborations or educational projects, please reach out via the contact page."
    }
  };

  // ✅ Default Arabic
  const defaultLang = "ar";
  const saved = localStorage.getItem("lang");
  const lang = saved || defaultLang;

  const $ = (q) => document.querySelector(q);
  const $$ = (q) => document.querySelectorAll(q);

  function setDirAndLang(l) {
    const isAr = l === "ar";
    document.documentElement.lang = l;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
  }

  function applyI18n(l) {
    const dict = i18n[l] || i18n[defaultLang];

    // plain text keys
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    // html keys (for <strong> etc.)
    $$("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key]) el.innerHTML = dict[key];
    });

    // language button
    const btn = $("#langToggle");
    if (btn) btn.textContent = dict.langBtn;

    // language hint label
    const hint = $("#langHint");
    if (hint) hint.textContent = dict.langHint;
  }

  function markActiveNav() {
    const path = location.pathname.split("/").pop() || "index.html";
    $$(".nav a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href === path) a.classList.add("active");
    });
  }

  function fadeIn() {
    const page = $(".page");
    if (!page) return;
    requestAnimationFrame(() => page.classList.add("ready"));
  }

  function revealOnScroll() {
    const els = $$(".reveal");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.14 }
    );

    els.forEach((el) => io.observe(el));
  }

  function parallaxMedia() {
    const media = $(".media");
    if (!media) return;
    if (!window.matchMedia("(hover:hover)").matches) return;

    let raf = null;
    const onMove = (ev) => {
      const r = media.getBoundingClientRect();
      const x = (ev.clientX - (r.left + r.width / 2)) / r.width;
      const y = (ev.clientY - (r.top + r.height / 2)) / r.height;

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        media.style.transform = `rotateX(${(-y * 2)}deg) rotateY(${(x * 2)}deg)`;
      });
    };

    const reset = () => (media.style.transform = "rotateX(0deg) rotateY(0deg)");
    media.addEventListener("pointermove", onMove);
    media.addEventListener("pointerleave", reset);
  }

  function spawnFloaters() {
    const layer = $(".floaters");
    if (!layer) return;

    const icons = ["i1", "i2", "i3"];
    const count = 14;

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = `floater ${icons[i % icons.length]}`;

      const left = Math.random() * 100;
      const delay = Math.random() * 10;
      const dur = 10 + Math.random() * 10;
      const size = 34 + Math.random() * 34;

      el.style.left = left + "vw";
      el.style.animationDelay = delay + "s";
      el.style.animationDuration = dur + "s";
      el.style.width = size + "px";
      el.style.height = size + "px";
      el.style.top = 70 + Math.random() * 40 + "vh";

      layer.appendChild(el);
    }
  }

  function setYear() {
    const y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  }

  function init() {
    setDirAndLang(lang);
    applyI18n(lang);
    markActiveNav();
    fadeIn();
    revealOnScroll();
    parallaxMedia();
    spawnFloaters();
    setYear();

    const btn = $("#langToggle");
    if (btn) {
      btn.addEventListener("click", () => {
        const current = localStorage.getItem("lang") || lang;
        const next = current === "ar" ? "en" : "ar";
        localStorage.setItem("lang", next);
        setDirAndLang(next);
        applyI18n(next);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
