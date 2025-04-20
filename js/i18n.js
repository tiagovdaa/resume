const translations = {
  en: {
    // Menu
    menu_about: "ABOUT",
    menu_skills: "SKILLS",
    menu_projects: "PROJECTS",
    menu_contact: "CONTACT",
    menu_cv: "DOWNLOAD CV",

    // CV Download
    start_download: "Start Download",
    resume_intro: "You can connect to my file server and download my resume, just click the button below:",

    // About
    about_title: "About Me",

    early_days_title: "Early Days",
    early_days_1: "I always liked computers and technology. From my early days, I was fascinated by the wonders of technology and how things worked. My journey started with video games, having consoles like the Master System and Mega Drive. However, it was not just the games that captured my interest; it was the technology behind them that intrigued me even more.",
    early_days_2: "My first computer was an MSX, specifically a Gradiente Expert DD Plus, where I began learning programming concepts with LOGO and BASIC. This early exposure to programming sparked a passion for technology that would only grow stronger over the years.",
    early_days_3: "As I delved deeper into the world of computers, I found myself configuring sound cards, managing IRQs, and setting up DMA just to make games work on my 386 or 486. The satisfaction of solving these technical challenges fueled my desire to learn more.",

    career_title: "Beginning of My Career",

    linux_path_title: "How Linux Changed My Career Path",
    linux_path_1: "In the late 1990s, I was working in help desk and shortly after that with network administration with Novell and Windows NT. My career took a significant turn when I discovered Linux at the FENASOFT computer fair.",
    linux_path_2: "Conectiva, a company present at the fair, provided me with a copy of Linux. I spent weeks installing and configuring it, ensuring full graphics support, CD recording, and sound functionality. At that time it was not so easy like it is today.",
    linux_path_3: "I explored several distros, including Slackware, Red Hat, and Gentoo, before settling on Debian. I migrated old Novell and NT networks to Linux and fell in love with open systems.",

    unix_exp_title: "Expanding My Experience",
    unix_exp_1: "My expertise didn't stop at Linux. I worked with Solaris, HP-UX, AIX, and FreeBSD. I managed storage, databases, middleware, and tools like Puppet, Chef, and Ansible.",
    unix_exp_2: "This broadened my knowledge and strengthened my foundation as a system administrator and infrastructure engineer.",

    devops_title: "Embracing the DevOps and SRE Journey",
    devops_1: "At Proteus (now SEK), I saw the shift to cloud-native systems. Fintechs, food apps, microservices. I adapted quickly: CI/CD, Python, Terraform, Kubernetes, Docker.",
    devops_2: "Initially, I focused too much on tools, but then I read The Phoenix Project, The DevOps Handbook, and SRE by Google — which taught me DevOps is culture, not tools.",
    devops_3: "Today I apply both the tools and the mindset to drive operational excellence and innovation.",

    roles_title: "Roles",

    role_sysadmin_title: "System Administration (SysAdmin)",
    role_sysadmin_text: "As a SysAdmin, I worked on networking, storage, users, updates, backups, and disaster recovery. I handled monitoring, troubleshooting, and scaling systems securely.",

    role_sre_title: "SRE (Site Reliability Engineering)",
    role_sre_text: "My SRE practice focused on error budgets, reliability, elimination of toil, observability, and blameless postmortems. I automated and monitored everything I could.",

    role_devops_title: "DevOps",
    role_devops_text: "DevOps to me means CI/CD, release automation, environment builds, config management, and infrastructure as code. DevOps is culture and delivery speed combined.",
  },

  pt: {
    // Menu
    menu_about: "SOBRE",
    menu_skills: "COMPETÊNCIAS",
    menu_projects: "PROJETOS",
    menu_contact: "CONTACTO",
    menu_cv: "BAIXAR CV",

    // CV Download
    start_download: "Conectar e Baixar",
    resume_intro: "Pode ligar-se ao meu servidor de ficheiros e descarregar o meu currículo, basta clicar no botão abaixo:",

    // About
    about_title: "Sobre Mim",

    early_days_title: "Início",
    early_days_1: "Sempre gostei de computadores e tecnologia. Desde pequeno, fascinava-me com as maravilhas da tecnologia e em como as coisas funcionavam. Comecei nos videojogos — Master System, Mega Drive — mas o que me cativava mesmo era o que havia por trás daquilo tudo.",
    early_days_2: "O meu primeiro computador foi um MSX, modelo Gradiente Expert DD Plus. Foi lá que tive contacto com programação usando LOGO e BASIC. A semente foi plantada, e a paixão só cresceu.",
    early_days_3: "Passei a configurar placas de som, IRQs, DMA, tudo para correr jogos no 386 ou 486. Resolver esses desafios técnicos só me fazia querer aprender mais.",

    career_title: "Início da Carreira",

    linux_path_title: "Como o Linux Mudou o Meu Caminho",
    linux_path_1: "No fim dos anos 90, comecei no help desk e logo depois fui para administração de redes com Novell e Windows NT. Mas tudo mudou quando conheci o Linux na FENASOFT.",
    linux_path_2: "A Conectiva deu-me uma cópia, e passei semanas a instalar, configurar som, gravação de CDs, suporte gráfico... nada era simples naquela altura.",
    linux_path_3: "Usei Slackware, Red Hat, Gentoo... mas foi o Debian que me conquistou. Rapidamente comecei a migrar redes Novell e NT para Linux.",

    unix_exp_title: "Ampliando a Experiência",
    unix_exp_1: "Fui além do Linux: Solaris, AIX, HP-UX, FreeBSD. Gestão de storage, bases de dados, middleware. Usei ferramentas como Puppet, Chef, Ansible.",
    unix_exp_2: "Lidei com arquiteturas complexas e sistemas exigentes. Isso solidificou meu conhecimento e capacidade técnica.",

    devops_title: "DevOps e a Jornada SRE",
    devops_1: "Na Proteus (hoje SEK), vi o mundo mudar: cloud, microserviços, fintechs. Adaptei-me rapidamente com CI/CD, Python, Terraform, Kubernetes, Docker.",
    devops_2: "Foquei-me demais nas ferramentas no início. Mas ler The Phoenix Project, The DevOps Handbook e SRE da Google mudou tudo: DevOps é cultura.",
    devops_3: "Hoje aplico tanto as ferramentas como o mindset para trazer excelência operacional e inovação.",

    roles_title: "Funções",

    role_sysadmin_title: "Administração de Sistemas",
    role_sysadmin_text: "Como SysAdmin, geria redes, armazenamento, utilizadores, atualizações, backups, e recuperação de desastres. Monitorizava, solucionava e escalava sistemas com segurança.",

    role_sre_title: "Engenharia de Confiabilidade (SRE)",
    role_sre_text: "Praticava SRE com foco em orçamentos de erro, confiabilidade, eliminação de toil, observabilidade e postmortems sem culpa. Automatizava tudo o que fosse possível.",

    role_devops_title: "DevOps",
    role_devops_text: "DevOps para mim é CI/CD, automação de lançamentos, ambientes consistentes, gestão de configuração e infraestrutura como código. É cultura e velocidade de entrega juntas.",
  }
};

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}
