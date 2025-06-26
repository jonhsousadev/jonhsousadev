document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const tabContents = document.querySelectorAll(".tab-content");
  const sidebar = document.querySelector(".sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");

  const translations = {
    "pt-BR": {
      pageTitle: "Jonh Sousa - Meu Espaço Digital",
      profileName: "Jonh Sousa",
      profileTitle: "Engenheiro de Software",
      whatsappTitle: "Fale comigo no WhatsApp",
      themeToggleTitle: "Alterar tema",

      stackTitle: "Minha Stack Principal",
      stackContent:
        "JavaScript, TypeScript, Next.js, Vue.js, Node.js, NestJS, CI/CD, Docker.",
      softSkillsTitle: "Habilidades Interpessoais",
      softSkills: [
        "Liderança Técnica",
        "Gestão de Produtos",
        "Mentoria de Carreira",
        "Comunicação Estratégica",
        "Resolução de Problemas",
      ],
      languagesTitle: "Idiomas",
      languages: ["Português (Nativo)", "Inglês (Avançado)"],
      sidebarToggleShow: "Mostrar mais",
      sidebarToggleHide: "Mostrar menos",

      navAbout: "Sobre Mim",
      navResume: "Currículo",

      aboutTitle: "Sobre Mim",
      aboutP1:
        "Sou Engenheiro de Software Full Stack com 10+ anos de experiência em soluções escaláveis de alto desempenho, combinando visão técnica e estratégica para transformar ideias em produtos digitais de impacto.",
      aboutP2:
        "Atuo como Tech Lead, Product Owner e Mentor em Carreira Tech (Mentoria SMART), ajudando profissionais e empresas a atingirem excelência em tecnologia e gestão de produtos. Minha stack principal inclui JavaScript, TypeScript, Next.js, Vue.js, Node.js, NestJS, CI/CD e Docker.",
      aboutP3:
        "Além do teclado, dedico meu tempo à família — sou pai, esposo e pai de pet 🐾. Nas horas vagas, aprecio uma boa leitura, caminhadas ao ar livre e os dias de sol na praia.",
      aboutP4:
        "💡 Aberto a novas conexões, parcerias em projetos desafiadores, consultorias e mentorias para desenvolvimento de produtos ou carreira tech.",
      aboutP5: "🚀 Vamos conversar?",

      resumeTitle: "Currículo",
      resumeP: "Você pode visualizar e baixar meu currículo completo abaixo.",
      resumeBtn: "Abrir Currículo (PDF)",
    },
    "en-US": {
      pageTitle: "Jonh Sousa - My Digital Space",
      profileName: "Jonh Sousa",
      profileTitle: "Software Engineer",
      whatsappTitle: "Chat with me on WhatsApp",
      themeToggleTitle: "Toggle theme",
      stackTitle: "My Core Stack",
      stackContent:
        "JavaScript, TypeScript, Next.js, Vue.js, Node.js, NestJS, CI/CD, Docker.",
      softSkillsTitle: "Interpersonal Skills",
      softSkills: [
        "Technical Leadership",
        "Product Management",
        "Career Mentoring",
        "Strategic Communication",
        "Problem Solving",
      ],
      languagesTitle: "Languages",
      languages: ["Portuguese (Native)", "English (Advanced)"],
      sidebarToggleShow: "Show more",
      sidebarToggleHide: "Show less",
      navAbout: "About Me",
      navResume: "Resume",
      aboutTitle: "About Me",
      aboutP1:
        "I am a Full Stack Software Engineer with 10+ years of experience in scalable, high-performance solutions, combining technical and strategic vision to transform ideas into impactful digital products.",
      aboutP2:
        "I act as a Tech Lead, Product Owner, and Tech Career Mentor (SMART Mentoring), helping professionals and companies achieve excellence in technology and product management. My core stack includes JavaScript, TypeScript, Next.js, Vue.js, Node.js, NestJS, CI/CD, and Docker.",
      aboutP3:
        "Beyond the keyboard, I dedicate my time to family — I am a father, husband, and pet parent 🐾. In my free time, I enjoy a good book, outdoor walks, and sunny days at the beach.",
      aboutP4:
        "💡 Open to new connections, challenging project partnerships, consulting, and mentoring for product development or tech careers.",
      aboutP5: "🚀 Let's connect!",
      resumeTitle: "Resume",
      resumeP: "You can view and download my full resume below.",
      resumeBtn: "Open Resume (PDF)",
    },
  };

  let currentLanguage = "pt-BR";

  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

  const setTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
    themeToggle.innerHTML = theme === "dark" ? sunIcon : moonIcon;
    localStorage.setItem("theme", theme);
  };

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });

  const savedTheme = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme(prefersDark ? "dark" : "light");
  }

  const setLanguage = (lang) => {
    currentLanguage = lang;
    document.documentElement.lang = lang;

    const t = translations[lang];

    document.title = t.pageTitle;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");

      if (key.includes("[")) {
        const [arrayName, indexStr] = key.split(/\[|\]/).filter(Boolean);
        const index = parseInt(indexStr);
        if (t[arrayName] && t[arrayName][index]) {
          el.textContent = t[arrayName][index];
        }
      } else {
        if (t[key]) {
          el.textContent = t[key];
        }
      }
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (t[key]) {
        el.title = t[key];
      }
    });

    const sidebarToggleSpan = sidebarToggle.querySelector("span");
    if (sidebarToggleSpan) {
      sidebarToggleSpan.textContent = sidebar.classList.contains("is-collapsed")
        ? t.sidebarToggleShow
        : t.sidebarToggleHide;
    }

    document.querySelectorAll(".lang-button").forEach((button) => {
      if (button.getAttribute("data-lang") === lang) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    localStorage.setItem("language", lang);
  };

  const setupSidebarToggle = () => {
    if (!sidebar || !sidebarToggle) return;

    const setSidebarState = () => {
      if (window.innerWidth <= 900) {
        sidebar.classList.add("is-collapsed");
        sidebarToggle.querySelector("span").textContent =
          translations[currentLanguage].sidebarToggleShow;
      }
    };

    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("is-collapsed");
      const isCollapsed = sidebar.classList.contains("is-collapsed");
      const t = translations[currentLanguage];
      sidebarToggle.querySelector("span").textContent = isCollapsed
        ? t.sidebarToggleShow
        : t.sidebarToggleHide;
    });

    setSidebarState();

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) sidebar.classList.remove("is-collapsed");
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const tabId = link.getAttribute("data-tab");

      navLinks.forEach((nav) => nav.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      link.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });

  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage && translations[savedLanguage]) {
    setLanguage(savedLanguage);
  } else {
    const browserLang = navigator.language.startsWith("pt") ? "pt-BR" : "en-US";
    setLanguage(browserLang);
  }

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.getAttribute("data-lang"));
    });
  });

  setupSidebarToggle();
});
