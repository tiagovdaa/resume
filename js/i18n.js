const translations = {
  pt: {
    intro: "Bem-vindo ao meu terminal retrô. Use o menu para explorar.",
    menu_about: "SOBRE",
    menu_skills: "COMPETÊNCIAS",
    menu_projects: "PROJETOS",
    menu_contact: "CONTATO",
    menu_cv: "BAIXAR CV",
    start_download: "Conectar e Baixar",
    resume_intro: "Você pode se conectar ao meu servidor de arquivos e baixar meu currículo, basta clicar no botão abaixo:"
  },
  en: {
    intro: "Welcome to my retro terminal. Use the menu to explore.",
    menu_about: "ABOUT",
    menu_skills: "SKILLS",
    menu_projects: "PROJECTS",
    menu_contact: "CONTACT",
    menu_cv: "DOWNLOAD CV",
    start_download: "Start Download",
    resume_intro: "You can connect to my file server and download my resume, just click the button below:"
  }
}

function setLanguage(lang) {
  localStorage.setItem('lang', lang); // Salva preferência
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}
