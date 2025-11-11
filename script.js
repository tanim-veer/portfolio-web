/* ===============================
   i18n complet FR <-> EN + mémoire
================================= */

const I18N = {
    fr: {
        // NAV / HERO
        logo_name: "Tanim VEER",
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_parcours: "Parcours",
        nav_projects: "Projets",
        nav_contact: "Contact",
        hero_title: "Tanim VEER — Développeur",
        hero_subtitle: "Étudiant en BUT2 Informatique à l'Université Paris Cité • Recherche un stage de 8 semaines à partir du 13 avril 2025.",
        btn_contact: "Me contacter",
        btn_cv: "Télécharger mon CV",

        // META/TITLE
        site_title: "Tanim VEER - Portfolio",
        meta_description: "Portfolio de Tanim Veer, étudiant en informatique. Projets, compétences et contact.",
        meta_keywords: "Tanim Veer, Veer Tanim, Tanim, Veer, portfolio informatique, développeur, projets informatique",
        og_title: "Tanim Veer - Portfolio Informatique",
        og_desc: "Découvrez les projets et compétences de Tanim Veer, étudiant en informatique.",
        tw_title: "Tanim Veer - Portfolio Informatique",
        tw_desc: "Découvrez les projets et compétences de Tanim Veer, étudiant en informatique.",

        // ABOUT
        about_title: "À propos de moi",
        about_text: "Étudiant en BUT2 Informatique à l’IUT de Paris – Rives de Seine. Je développe des projets en Java, HTML/CSS, SQL, Python et Git. J’aime créer des applications propres, structurées et fonctionnelles. Objectif actuel : trouver un stage et m’épanouir dans le domaine de la tech tout en contribuant à des projets innovants.",
        hobbies_title: "Mes centres d'intérêt",
        hobby1: "Voyager ✈️",
        hobby2: "Basketball 🏀",
        hobby3: "Musculation 🏋️",
        hobby4: "Activités associatives 🤝",

        // SKILLS
        skills_title: "Compétences",
        skills_tech_title: "Compétences techniques",
        skills_lang_title: "Languages",
        skills_lang_desc: "Java, C/C++, Python, VB.NET, SQL, HTML/CSS, PHP",
        skills_web_title: "Développement Web",
        skills_web_desc: "Responsive design, Bootstrap, accessibilité, optimisation visuelle, Requêtes HTTP (GET/POST), JSON, Appels API (bases)",
        skills_db_title: "Bases de données",
        skills_db_desc: "MySQL, PostgreSQL, PL/SQL, requêtes CRUD et jointures",
        skills_sys_title: "Système & Réseaux",
        skills_sys_desc: "Linux (permissions, fichiers, commandes shell), Protocoles réseau (TCP/UDP, HTTP, DNS — notions), Assembleur x86 (notions)",
        skills_design_title: "Conception",
        skills_design_desc: "POO, Modélisation UML, Interfaces graphiques, Structures de données",
        skills_meth_title: "Méthodes",
        skills_meth_desc: "Travail en équipe, Git workflow, Documentation de projets, Méthodologie Agile (Scrum)",

        skills_tools_title: "Outils maîtrisés",
        skills_env_title: "Environnements de développement",
        skills_env_desc: "Git, VS Code, IntelliJ IDEA, Eclipse, VirtualBox, Figma, Linux",
        skills_collab_title: "Bureautique & collaboration",
        skills_collab_desc: "Microsoft Office, Google Workspace, Trello, Notion, Discord",
        skills_test_title: "Tests & automatisation",
        skills_test_desc: "JUnit (tests unitaires)",
        skills_git_title: "Versioning",
        skills_git_desc: "GitHub, Gitlab",

        // PARCOURS / EXP
        parcours_title: "Parcours",
        parcours_but_title: "Bachelor universitaire de technologie",
        parcours_but_loc: "IUT de Paris - Rives de Seine",
        parcours_but_date: "2024 - actuel",
        parcours_bac_title: "Baccalauréat STI2D",
        parcours_bac_loc: "Lycée Louis-le-Grand - Paris",
        parcours_bac_date: "2022 - 2024",

        exp_title: "Expériences professionnelles",
        exp_viva_role: "Bénévole",
        exp_viva_company: "VivaTech2025",
        exp_viva_date: "Juin 2025",
        exp_viva_desc: "Participation au bon fonctionnement d’un évènement majeur (150 000+ participants), accueil des visiteurs et assistance aux équipes sur place",
        exp_shop_role: "Employé Polyvalent",
        exp_shop_company: "Azban Market - Paris",
        exp_shop_date: "Juillet 2022 - Janvier 2023",
        exp_shop_desc: "Gestion des stocks, réapprovisionnement des rayons et traitement des transactions en caisse",
        exp_avocat_role: "Stagiaire",
        exp_avocat_company: "Cabinet d'avocat Faycal Megherbi - Paris",
        exp_avocat_date: "Mars 2020 - Avril 2020",
        exp_avocat_desc: "Assistance dans la préparation de dossiers juridiques et recherches documentaires pour soutenir les avocats dans leurs démarches.",

        // PROJECTS
        project_title: "Mes Projets",
        p1_title: "Refonte du site de l'Armée du Salut (en cours)",
        p1_desc: "Refonte moderne de plusieurs pages du site : amélioration de l’ergonomie, correction des incohérences graphiques, optimisation visuelle et ajout d’une navigation plus intuitive.",
        p2_title: "Algorithme de Dijkstra",
        p2_desc: "Algorithme de recherche du plus court chemin dans un graphe pondéré, utilisé pour trouver le trajet optimal entre deux nœuds, avec visualisation dans un labyrinthe.",
        p3_title: "Jeu de Memory",
        p3_desc: "Jeu de mémoire pour 2 joueurs, réalisé en VB.NET avec gestion du plateau, comparaison des cartes, affichage du score et fin de partie automatique.",
        p4_title: "Gestion d'absences",
        p4_desc: "Application console permettant de suivre les absences des étudiants, défaillance automatique après 5 absences, stockage et affichage des résultats.",
        p5_title: "Jeu de société : Octo Verso",
        p5_desc: "Jeu de lettres stratégique en C : former des mots avec des tuiles double-face sur un rail pivotant. Gestion du plateau, des tours et de la fin de partie.",
        tech_used: "Technologies utilisées :",

        // CONTACT
        contact_title: "Contact",
        contact_send: "Envoyer",
        contact_name: "Nom *",
        contact_email: "Email *",
        contact_msg: "Message *",
        contact_linkedin: "LinkedIn",
        contact_github: "GitHub",
        contact_email_text: "Email : veertanim@gmail.com",
        contact_phone: "Tél : +33 7 58 23 12 89",
        contact_location: "Localisation : Paris, Ile-de-France",
    },

    en: {
        // NAV / HERO
        logo_name: "Tanim VEER",
        nav_about: "About",
        nav_skills: "Skills",
        nav_parcours: "Background",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_title: "Tanim VEER — Developer",
        hero_subtitle: "2nd-year CS student at Université Paris Cité • Looking for an 8-week internship from April 13, 2025.",
        btn_contact: "Contact me",
        btn_cv: "Download my CV",

        // META/TITLE
        site_title: "Tanim VEER - Portfolio",
        meta_description: "Portfolio of Tanim Veer, CS student. Projects, skills and contact.",
        meta_keywords: "Tanim Veer, Veer Tanim, portfolio, developer, computer science projects",
        og_title: "Tanim Veer - CS Portfolio",
        og_desc: "Discover the projects and skills of Tanim Veer, CS student.",
        tw_title: "Tanim Veer - CS Portfolio",
        tw_desc: "Discover the projects and skills of Tanim Veer, CS student.",

        // ABOUT
        about_title: "About me",
        about_text: "2nd-year Computer Science student at IUT Paris - Rives de Seine. I build clean, structured and functional apps with Java, SQL, Python and Web. Currently seeking an internship to learn and contribute to innovative projects.",
        hobbies_title: "My interests",
        hobby1: "Travelling ✈️",
        hobby2: "Basketball 🏀",
        hobby3: "Weight Training 🏋️",
        hobby4: "Associative Activities 🤝",

        // SKILLS
        skills_title: "Skills",
        skills_tech_title: "Technical Skills",
        skills_lang_title: "Languages",
        skills_lang_desc: "Java, C/C++, Python, VB.NET, SQL, HTML/CSS, PHP",
        skills_web_title: "Web Development",
        skills_web_desc: "Responsive design, Bootstrap, accessibility, UI optimization, HTTP requests (GET/POST), JSON, basic API calls",
        skills_db_title: "Databases",
        skills_db_desc: "MySQL, PostgreSQL, PL/SQL, CRUD queries and joins",
        skills_sys_title: "Systems & Networks",
        skills_sys_desc: "Linux basics, TCP/UDP, HTTP, DNS, x86 assembly (basics)",
        skills_design_title: "Design & Architecture",
        skills_design_desc: "OOP, UML, GUI development, data structures",
        skills_meth_title: "Methods",
        skills_meth_desc: "Teamwork, Git workflow, documentation, Agile (Scrum)",

        skills_tools_title: "Tools",
        skills_env_title: "Development Environments",
        skills_env_desc: "Git, VS Code, IntelliJ IDEA, Eclipse, VirtualBox, Figma, Linux",
        skills_collab_title: "Office & Collaboration",
        skills_collab_desc: "Microsoft Office, Google Workspace, Trello, Notion, Discord",
        skills_test_title: "Testing & Automation",
        skills_test_desc: "JUnit (unit tests)",
        skills_git_title: "Version Control",
        skills_git_desc: "GitHub, Gitlab",

        // PARCOURS / EXP
        parcours_title: "Background",
        parcours_but_title: "Bachelor of Technology in CS",
        parcours_but_loc: "IUT Paris - Rives de Seine",
        parcours_but_date: "2024 - current",
        parcours_bac_title: "Scientific Baccalaureate (STI2D)",
        parcours_bac_loc: "Lycée Louis-le-Grand - Paris",
        parcours_bac_date: "2022 - 2024",

        exp_title: "Professional Experience",
        exp_viva_role: "Volunteer",
        exp_viva_company: "VivaTech 2025",
        exp_viva_date: "June 2025",
        exp_viva_desc: "Assisted in organising a major tech event (150,000+ participants), welcoming visitors and supporting on-site teams.",
        exp_shop_role: "Store Employee",
        exp_shop_company: "Azban Market - Paris",
        exp_shop_date: "July 2022 - January 2023",
        exp_shop_desc: "Stock management, shelf restocking and cashier transactions.",
        exp_avocat_role: "Intern",
        exp_avocat_company: "Law office Faycal Megherbi - Paris",
        exp_avocat_date: "March 2020 - April 2020",
        exp_avocat_desc: "Helped prepare legal files and supported attorneys with research.",

        // PROJECTS
        project_title: "Projects",
        p1_title: "Website Redesign — Armée du Salut (ongoing)",
        p1_desc: "Modern redesign: UI fixes, visual improvements and smoother navigation, making the site cleaner and more accessible.",
        p2_title: "Dijkstra Algorithm",
        p2_desc: "Shortest path algorithm with an interactive maze visualisation.",
        p3_title: "Memory Game",
        p3_desc: "Two-player memory game with scoring and automatic win detection, built in VB.NET.",
        p4_title: "Absence Manager",
        p4_desc: "Console app in C tracking students & marking failure after 5 absences.",
        p5_title: "Board Game — Octo Verso",
        p5_desc: "Strategy word game written in C, with double-sided tiles and automatic game logic.",
        tech_used: "Technologies used:",

        // CONTACT
        contact_title: "Contact",
        contact_send: "Send",
        contact_name: "Name *",
        contact_email: "Email *",
        contact_msg: "Message *",
        contact_linkedin: "LinkedIn",
        contact_github: "GitHub",
        contact_email_text: "Email: veertanim@gmail.com",
        contact_phone: "Phone: +33 7 58 23 12 89",
        contact_location: "Location: Paris, France",
    }
};

// utilitaires
const $ = (sel) => document.querySelectorAll(sel);

// applique la langue demandée
function applyLanguage(lang) {
    const dict = I18N[lang] || I18N.fr;

    // Textes visibles
    $("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const val = dict[key] || I18N.fr[key];
        if (!val) return;

        if (el.tagName === "META") {
            el.setAttribute("content", val);
        } else if (el.tagName === "TITLE") {
            document.title = val;
            el.textContent = val;
        } else {
            el.textContent = val;
        }
    });

    // Placeholders
    $("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        const val = dict[key] || I18N.fr[key];
        if (val) el.setAttribute("placeholder", val);
    });

    // Attribut lang du document
    document.documentElement.setAttribute("lang", lang);

    // Bouton indique la langue de bascule
    const langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.textContent = (lang === "fr" ? "EN" : "FR");

    // Mémoire
    localStorage.setItem("lang", lang);
}

// toggle au clic
document.getElementById("langToggle")?.addEventListener("click", () => {
    const current = localStorage.getItem("lang") || "fr";
    applyLanguage(current === "fr" ? "en" : "fr");
});

// init au chargement
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(localStorage.getItem("lang") || "fr");
});

// === THEME TOGGLE (Dark <-> Light) ===
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = themeToggle.querySelector("i");

    // Charger le thème sauvegardé
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
            localStorage.setItem("theme", "light");
        } else {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
            localStorage.setItem("theme", "dark");
        }
    });
});

