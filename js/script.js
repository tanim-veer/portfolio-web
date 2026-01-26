const I18N = {
    fr: {
        logo_name: "Tanim VEER",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_contact: "Contact",

        hero_title: 'Tanim VEER <br> <span class="gradient-text">Développeur Freelance</span>',
        hero_subtitle: "Étudiant en BUT2 Informatique à l'Université Paris Cité • Recherche un stage de 8 à 12 semaines à partir du 6 avril 2026.",

        btn_contact: "Me contacter",
        btn_cv: "Voir mon CV",

        site_title: "Tanim VEER - Portfolio",
        meta_description: "Portfolio de Tanim Veer, étudiant en informatique. Projets, compétences et contact.",
        meta_keywords: "Tanim Veer, Veer Tanim, portfolio informatique, développeur",
        og_title: "Tanim Veer - Portfolio Informatique",
        og_desc: "Découvrez les projets et compétences de Tanim Veer.",
        tw_title: "Tanim Veer - Portfolio Informatique",
        tw_desc: "Découvrez les projets et compétences de Tanim Veer.",

        skills_title: "Compétences",
        skills_tech_title: "Compétences techniques",
        skills_lang_title: '<i class="fas fa-code"></i> Languages',
        skills_lang_desc: "Java, C/C++, Python, Javascript, VB.NET, SQL, HTML/CSS, PHP",
        skills_web_title: '<i class="fas fa-globe"></i> Développement Web',
        skills_web_desc: "Responsive design, Bootstrap, accessibilité, optimisation UI, HTTP, JSON, API",
        skills_db_title: '<i class="fas fa-database"></i> Bases de données',
        skills_db_desc: "MySQL, PostgreSQL, PL/SQL",
        skills_sys_title: '<i class="fas fa-server"></i> Système & Réseaux',
        skills_sys_desc: "Linux, TCP/UDP, HTTP, DNS",
        skills_design_title: '<i class="fas fa-cogs"></i> Conception',
        skills_design_desc: "POO, UML, Structures de données",
        skills_meth_title: '<i class="fas fa-shield-alt"></i> Méthodes',
        skills_meth_desc: "Agile, Git workflow, SOLID",

        skills_tools_title: "Outils maîtrisés",

        project_title: "Mes Projets",

        p1_title: "Refonte du site de l'Armée du Salut",
        p1_desc: "Modernisation UI/UX et navigation.",
        p2_title: "Algorithme de Dijkstra",
        p2_desc: "Recherche du plus court chemin avec visualisation.",
        p3_title: "Jeu de Memory",
        p3_desc: "Jeu 2 joueurs en VB.NET.",
        p4_title: "Gestion d'absences",
        p4_desc: "Application console C.",
        p5_title: "Jeu Octo Verso",
        p5_desc: "Jeu stratégique en C.",
        p6_title: "Jeu d'échec",
        p6_desc: "Jeu complet en Java.",
        p7_title: "Installation réseau",
        p7_desc: "Topologie VLAN & services.",
        p8_title: "Exploitation base de données",
        p8_desc: "SQL avancé.",
        p9_title: "Sensibilisation NIRD",
        p9_desc: "Site Nuit de l'Info 2025.",

        tech_used: "Technologies utilisées :",

        contact_title: "Contact",
        contact_send: 'Envoyer <i class="fas fa-paper-plane"></i>',
        contact_name: "Nom *",
        contact_email: "Email *",
        contact_msg: "Message *",
        contact_linkedin: "LinkedIn",
        contact_github: "GitHub",
        contact_email_text: "veertanim@gmail.com",
        contact_phone: "+33 7 58 23 12 89",
        contact_location: "Paris, Ile de France",
    },

    en: {
        logo_name: "Tanim VEER",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",

        hero_title: 'Tanim VEER <br> <span class="gradient-text">Freelance Developer</span>',
        hero_subtitle: "2nd-year CS student at Université Paris Cité • Looking for an internship (8 to 12 weeks) from April 6, 2026.",

        btn_contact: "Contact me",
        btn_cv: "View my CV",

        site_title: "Tanim VEER - Portfolio",
        meta_description: "Portfolio of Tanim Veer.",
        meta_keywords: "Tanim Veer portfolio developer",
        og_title: "Tanim Veer Portfolio",
        og_desc: "Discover my projects.",
        tw_title: "Tanim Veer Portfolio",
        tw_desc: "Discover my projects.",

        skills_title: "Skills",
        skills_tech_title: "Technical Skills",

        project_title: "Projects",

        p9_title: "NIRD Awareness",
        p9_desc: "Educational website Nuit de l'Info 2025.",

        tech_used: "Technologies used:",

        contact_title: "Contact",
        contact_send: 'Send <i class="fas fa-paper-plane"></i>',
        contact_name: "Name *",
        contact_email: "Email *",
        contact_msg: "Message *",
        contact_linkedin: "LinkedIn",
        contact_github: "GitHub",
        contact_email_text: "veertanim@gmail.com",
        contact_phone: "+33 7 58 23 12 89",
        contact_location: "Paris, France",
    }
};

// =====================
// CORE
// =====================

const $ = sel => document.querySelectorAll(sel);

function applyLanguage(lang) {
    const dict = I18N[lang] || I18N.fr;

    $("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        const value = dict[key];
        if (!value) return;

        if (el.tagName === "META") {
            el.setAttribute("content", value);
        } else {
            el.innerHTML = value;
        }
    });

    document.title = dict.site_title;
    document.documentElement.lang = lang;

    const langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.textContent = lang === "fr" ? "EN" : "FR";

    localStorage.setItem("lang", lang);
}

// =====================
// INIT
// =====================

document.addEventListener("DOMContentLoaded", () => {

    // Language init
    applyLanguage(localStorage.getItem("lang") || "fr");

    document.getElementById("langToggle")?.addEventListener("click", () => {
        const current = localStorage.getItem("lang") || "fr";
        applyLanguage(current === "fr" ? "en" : "fr");
    });

    // Theme
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return;

    const icon = themeToggle.querySelector("i");

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
        icon.classList.replace("fa-moon", "fa-sun");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light");

        const light = document.body.classList.contains("light");

        icon.classList.toggle("fa-sun", light);
        icon.classList.toggle("fa-moon", !light);

        localStorage.setItem("theme", light ? "light" : "dark");
    });
});