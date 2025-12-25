(function () {
  const i18n = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_articles: "Articles",
      nav_links: "Links",
      nav_contact: "Contact",

      badge_student: "Medical Student",
      badge_about: "About",
      badge_articles: "Articles",
      badge_links: "Links",
      badge_contact: "Contact",

      home_kicker: "Medical profile • content • credibility",
      hero_title: "A medical profile that feels premium and trustworthy.",
      hero_desc:
        "I’m Abd-Alrahman Aqeel Taha — a medical student & medical content creator. I turn complex medical concepts into clear, responsible videos and well-structured articles.",
      hero_desc2:
        "My focus: educational content that respects evidence, avoids hype, and builds real trust over time.",
      hero_disclaimer: "Educational content only — not medical advice.",

      pill_1: "Medical Education",
      pill_2: "Public Health",
      pill_3: "Prevention",
      pill_4: "Short-form Video",
      pill_5: "Scientific Writing",
      pill_6: "Myth-busting",

      cta_articles: "Read articles",
      cta_social: "My links",
      cta_contact: "Work with me",

      stat1_k: "Platforms",
      stat1_v: "Instagram • TikTok • YouTube",
      stat2_k: "Content style",
      stat2_v: "Clear • visual • referenced",
      stat3_k: "Goal",
      stat3_v: "Trust + real learning",

      box1_t: "Write",
      box1_d: "Academic-style articles with references (when possible), simplified for everyone.",
      box2_t: "Teach",
      box2_d: "Short videos that explain, simplify, and correct common myths.",
      box3_t: "Build Trust",
      box3_d: "Clear disclaimers + consistent identity across platforms.",

      about_title: "About",
      about_p1:
        "I’m Abd-Alrahman Aqeel Taha, a medical student and medical content creator. I build educational content that’s clear, responsible, and practical.",
      about_p2:
        "I care about medical education, public health, prevention, and communicating science in a way people actually understand.",
      about_note:
        "Disclaimer: This website and content are for education and awareness, not personal diagnosis or treatment.",
      about_focus_t: "What you’ll find here",
      about_focus_d:
        "Articles, short videos, and curated resources — organized as an official archive for my work.",
      about_work_t: "Open to collaboration",
      about_work_d:
        "Guest writing, educational projects, video collaborations, and awareness campaigns.",

      articles_title: "Articles",
      articles_p1: "Long-form writing on Medium. I list the newest pieces here.",
      articles_profile_t: "My Medium profile",
      articles_profile_d: "All articles in one place",
      article1_t: "Why Doctors Are Afraid of Apples 🍎",
      article1_d: "Read the full article on Medium",
      articles_tip: "Tip: Add every new article here to build your official archive.",

      links_title: "Official Links",
      links_p1: "Use this page as your single bio link everywhere.",
      links_tip: "Set this as the only link in your Instagram/TikTok bio.",
      links_cta1: "Articles",
      links_cta2: "Contact",
      links_featured: "Featured",
      links_social: "Social",
      links_contact: "Contact",

      contact_title: "Contact",
      contact_p1: "For collaborations, educational projects, or invitations:",
      contact_note:
        "I can’t provide personal diagnosis via messages. Educational questions are welcome.",

      lang_btn: "AR",
      lang_hint: "Language"
    },

    ar: {
      nav_home: "الرئيسية",
      nav_about: "من أنا",
      nav_articles: "المقالات",
      nav_links: "روابط",
      nav_contact: "تواصل",

      badge_student: "طالب طب",
      badge_about: "من أنا",
      badge_articles: "المقالات",
      badge_links: "روابط",
      badge_contact: "تواصل",

      home_kicker: "ملف طبي • محتوى • مصداقية",
      hero_title: "موقع طبي رسمي… بس بروح عصرية وتحريك لطيف.",
      hero_desc:
        "أنا Abd-Alrahman Aqeel Taha — طالب طب وصانع محتوى طبي. أحوّل المفاهيم الطبية المعقدة إلى فيديوهات واضحة ومقالات مرتبة وبأسلوب مسؤول.",
      hero_desc2:
        "هدفي: محتوى تعليمي موثوق، يقلل التضليل، ويبني ثقة حقيقية مع الوقت.",
      hero_disclaimer: "محتوى تعليمي فقط — ليس استشارة طبية.",

      pill_1: "تعليم طبي",
      pill_2: "الصحة العامة",
      pill_3: "الوقاية",
      pill_4: "فيديوهات قصيرة",
      pill_5: "كتابة علمية",
      pill_6: "تصحيح خرافات",

      cta_articles: "اقرأ المقالات",
      cta_social: "روابطي",
      cta_contact: "تعاون معي",

      stat1_k: "المنصات",
      stat1_v: "إنستغرام • تيك توك • يوتيوب",
      stat2_k: "أسلوب المحتوى",
      stat2_v: "واضح • بصري • بمراجع",
      stat3_k: "الهدف",
      stat3_v: "ثقة + تعلم فعلي",

      box1_t: "أكتب",
      box1_d: "مقالات مرتبة بطابع أكاديمي وبمراجع قدر الإمكان، وبأسلوب سهل.",
      box2_t: "أعلّم",
      box2_d: "فيديوهات قصيرة تبسط وتشرح وتصّحح الخرافات الطبية.",
      box3_t: "أبني ثقة",
      box3_d: "تنبيه واضح + هوية ثابتة + مسؤولية بالمحتوى.",

      about_title: "من أنا",
      about_p1:
        "أنا Abd-Alrahman Aqeel Taha، طالب طب وصانع محتوى طبي. أقدم محتوى تعليمي واضح وعملي وبأسلوب مسؤول.",
      about_p2:
        "أهتم بالتعليم الطبي، الصحة العامة، الوقاية، وشرح العلوم الطبية للناس بطريقة يفهموها فعلًا.",
      about_note:
        "تنبيه: هذا الموقع والمحتوى للتعليم والتوعية فقط وليس للتشخيص أو العلاج.",
      about_focus_t: "شنو راح تحصل هنا؟",
      about_focus_d:
        "مقالات + فيديوهات قصيرة + مصادر مختارة… كلها مرتبة كأرشيف رسمي لمحتواي.",
      about_work_t: "متاح للتعاون",
      about_work_d:
        "كتابة ضيف، مشاريع تعليمية، تعاونات فيديو، وحملات توعوية.",

      articles_title: "المقالات",
      articles_p1: "مقالات طويلة على Medium، وراح أضيف الأحدث هنا.",
      articles_profile_t: "ملفي على Medium",
      articles_profile_d: "كل المقالات بمكان واحد",
      article1_t: "لماذا الأطباء “يخافون” من التفاح 🍎",
      article1_d: "اقرأ المقال الكامل على Medium",
      articles_tip: "نصيحة: كل مقال جديد ضيفه هنا حتى يصير عندك أرشيف رسمي.",

      links_title: "روابطي الرسمية",
      links_p1: "استخدم هذه الصفحة كرابط واحد بكل مكان.",
      links_tip: "خلي هذه الصفحة هي الرابط الوحيد في البايو.",
      links_cta1: "المقالات",
      links_cta2: "تواصل",
      links_featured: "مميز",
      links_social: "السوشيال",
      links_contact: "التواصل",

      contact_title: "تواصل",
      contact_p1: "للتعاونات أو المشاريع التعليمية أو الدعوات:",
      contact_note:
        "ملاحظة: ما أقدم تشخيص شخصي عبر الرسائل. الأسئلة التعليمية مرحب بها.",

      lang_btn: "EN",
      lang_hint: "اللغة"
    }
  };

  const defaultLang = "ar";
  const saved = localStorage.getItem("lang");
  const lang = saved || defaultLang;

  function setDirAndLang(l) {
    const isAr = l === "ar";
    document.documentElement.lang = l;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
  }

  function applyTranslations(l) {
    const dict = i18n[l] || i18n[defaultLang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    const btn = document.getElementById("langToggle");
    if (btn) btn.textContent = (i18n[l] || i18n[defaultLang]).lang_btn;

    const hint = document.getElementById("langHint");
    if (hint) hint.textContent = (i18n[l] || i18n[defaultLang]).lang_hint;
  }

  function markActiveNav() {
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".menu a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href === path) a.classList.add("active");
    });
  }

  function setYear() {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  function pageFadeIn() {
    const page = document.querySelector(".page");
    if (!page) return;
    requestAnimationFrame(() => page.classList.add("loaded"));
  }

  function initReveal() {
    const els = document.querySelectorAll(".reveal");
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

  function initParallax() {
    const media = document.querySelector(".media");
    if (!media) return;

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

    // only on pointer devices
    if (window.matchMedia("(hover:hover)").matches) {
      media.addEventListener("pointermove", onMove);
      media.addEventListener("pointerleave", reset);
    }
  }

  function init() {
    setDirAndLang(lang);
    applyTranslations(lang);
    markActiveNav();
    setYear();
    pageFadeIn();
    initReveal();
    initParallax();

    const btn = document.getElementById("langToggle");
    if (btn) {
      btn.addEventListener("click", () => {
        const current = localStorage.getItem("lang") || lang;
        const next = current === "ar" ? "en" : "ar";
        localStorage.setItem("lang", next);
        setDirAndLang(next);
        applyTranslations(next);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
