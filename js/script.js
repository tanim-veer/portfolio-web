// Le français est écrit directement dans le HTML (source unique) ; seul l'anglais est ici.
const EN = {
    site_title: "Tanim VEER — Computer science student, Data & AI",
    meta_description: "Portfolio of Tanim Veer, 3rd-year Computer Science student (Data & AI track) at Université Paris Cité. Projects, background and contact. Looking for an internship from February 2027.",
    og_title: "Tanim Veer — Portfolio",
    og_desc: "3rd-year Computer Science student, Data & AI track. Projects in Python, Java, C, Flutter. Looking for an internship from February 2027.",
    skip: "Skip to content",

    nav_about: "About",
    nav_journey: "Background",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    hero_status: "Available for an internship from February 2027",
    hero_title: "Computer science student · Data & AI",
    hero_subtitle: "3rd-year Computer Science student (BUT) at Université Paris Cité, looking for an internship of 3 months or more from February 2027, ideally in data and artificial intelligence.",
    btn_projects: 'See my projects <i class="fas fa-arrow-down"></i>',
    btn_contact: "Contact me",
    btn_cv: '<i class="fas fa-file-pdf"></i> Resume (FR)',

    about_title: "About",
    about_p1: "I'm in the third year of a Computer Science degree (BUT) at Université Paris Cité (IUT Paris Rives de Seine), in the <strong>Data & AI</strong> track. What I enjoy is building tools that are genuinely useful: an app that finds the cheapest gas station along a route, a VPN set up end to end, a chess engine that talks to a real interface.",
    about_p2: "Alongside my studies, I take part in events such as the Nuit de l'Info hackathon and VivaTech. I enjoy teamwork as much as getting to the bottom of a problem.",
    fact_school_t: "Education",
    fact_school: "3rd-year Computer Science, Data & AI track",
    fact_avail_t: "Availability",
    fact_avail: "Internship of 3 months or more, from February 2027",
    fact_lang_t: "Languages",
    fact_lang: "French and Bengali (fluent), English (B2), Spanish (B1)",
    fact_hobby_t: "Interests",
    fact_hobby: "Weight training, travel, volunteering",

    journey_title: "Background",
    journey_exp: "Experience",
    exp2_when: "Dec. 2025",
    exp2_title: "Nuit de l'Info — hackathon",
    exp2_desc: "Built a web app about responsible tech as a team in a single night, and coordinated the team's Git workflow.",
    exp3_when: "June 2025",
    exp3_title: "Volunteer at VivaTech",
    exp3_desc: "Welcomed and guided over 500 international visitors a day, working with a team of volunteers.",
    exp4_when: "May 2024",
    exp4_title: "Engineering Science Olympiad — Paris regional final",
    exp4_desc: "Autonomous robot: C++ programming and 3D modelling. Selected for the regional final and presented to a jury.",
    journey_edu: "Education",
    edu1_when: "2024 — present",
    edu1_title: "BUT in Computer Science",
    edu1_desc: "Université Paris Cité, IUT Paris Rives de Seine. Data & AI track in third year.",
    edu2_title: "French baccalauréat (STI2D, engineering sciences)",
    edu2_desc: "Lycée Louis-le-Grand, Paris.",

    skills_title: "Skills",
    sk_lang_t: "Languages",
    sk_data_t: "Data",
    sk_model: "Data modelling",
    sk_opendata: "Open data APIs",
    sk_back_t: "Back-end & APIs",
    sk_rest: "REST APIs",
    sk_deploy: "Deployment (Render, Netlify, GitHub Pages)",
    sk_front_t: "Web & mobile",
    sk_responsive: "Responsive design",
    sk_a11y: "Accessibility",
    sk_sys_t: "Systems & networking",
    sk_qual_t: "Design & quality",
    sk_oop: "OOP",
    sk_tests: "Unit testing",

    project_title: "Projects",
    project_intro: "Personal, school and team projects. Click a project to see its code or live demo.",
    f_all: "All",
    f_net: "Networking",
    f_soft: "Software & algorithms",
    b_demo: "Live demo",
    b_team: "Team",
    b_soon: "Files coming soon",

    p11_title: "Where to fill up",
    p11_desc: "Finds the cheapest gas station by accounting for the real driving detour (OSRM routing), using official real-time prices.",
    p10_title: "WireGuard VPN infrastructure",
    p10_desc: "Encrypted VPN tunnel between Windows and Ubuntu, with a FastAPI service that generates keys and client configurations.",
    p6_title: "UCI chess engine",
    p6_desc: "Engine for the King + Rook vs King endgame, compatible with UCI interfaces such as ChessX. Clean Architecture and tests.",
    p12_title: "OpenMinds",
    p12_desc: "Volunteer training mobile app for France Bénévolat, built by a team of 6. My part: volunteer dashboard, real-time Firestore, tests.",
    p5_title: "Octo Verso",
    p5_desc: "Console word game: build words on a rail of double-sided tiles. Memory handling fixed and tested.",
    p1_title: "Armée du Salut website redesign",
    p1_desc: "UI/UX and accessibility redesign of several pages, including an admin area.",
    p9_title: "Résist'Classe — Nuit de l'Info",
    p9_desc: "Story game about responsible tech, built as a team in one night. Eco-designed, no framework.",
    p2_title: "Graphs & mazes",
    p2_desc: "Shortest paths with Dijkstra on graphs and mazes, with a visualisation of the search.",
    p7_title: "Company network",
    p7_desc: "Full simulated topology: routing, VLAN segmentation and DHCP, DNS and web services.",
    p3_title: "Memory game",
    p3_desc: "Two-player game with a graphical interface, turn handling and scoring.",

    contact_title: "Contact",
    contact_intro: "An internship offer, a question about a project? Write to me, I reply quickly.",
    contact_location: "Paris, France",
    contact_name: "Name *",
    contact_email: "Email *",
    contact_msg: "Message *",
    contact_send: 'Send <i class="fas fa-paper-plane"></i>',

    footer_made: "Hand-built with HTML, CSS and JavaScript",
    footer_top: "Back to top ↑",
};

const TEXTES = {
    fr: {
        lang: "Switch to English", theme: "Changer de thème", menu: "Ouvrir le menu", menuClose: "Fermer le menu",
        sending: "Envoi en cours…", sent: "Merci, votre message a bien été envoyé. Je vous réponds rapidement.",
        failed: 'L\'envoi a échoué. Écrivez-moi directement à <a href="mailto:veertanim@gmail.com">veertanim@gmail.com</a>.',
    },
    en: {
        lang: "Passer en français", theme: "Toggle theme", menu: "Open menu", menuClose: "Close menu",
        sending: "Sending…", sent: "Thank you, your message has been sent. I'll get back to you soon.",
        failed: 'Sending failed. Please email me directly at <a href="mailto:veertanim@gmail.com">veertanim@gmail.com</a>.',
    },
};

const lire = cle => { try { return localStorage.getItem(cle); } catch { return null; } };
const ecrire = (cle, val) => { try { localStorage.setItem(cle, val); } catch { /* stockage indisponible */ } };

const elementsTraduits = [...document.querySelectorAll("[data-i18n]")];
const texteOriginal = el => el.tagName === "META" ? el.content : el.tagName === "TITLE" ? el.textContent : el.innerHTML;
const francais = new Map(elementsTraduits.map(el => [el, texteOriginal(el)]));
let langue = "fr";

function appliquerLangue(lang) {
    langue = lang === "en" ? "en" : "fr";
    for (const el of elementsTraduits) {
        const valeur = langue === "en" ? EN[el.dataset.i18n] : francais.get(el);
        if (valeur === undefined) continue;
        if (el.tagName === "META") el.content = valeur;
        else if (el.tagName === "TITLE") document.title = valeur;
        else el.innerHTML = valeur;
    }
    document.documentElement.lang = langue;
    const bouton = document.getElementById("langToggle");
    bouton.textContent = langue === "fr" ? "EN" : "FR";
    bouton.setAttribute("aria-label", TEXTES[langue].lang);
    document.getElementById("themeToggle").setAttribute("aria-label", TEXTES[langue].theme);
    majBoutonMenu();
    ecrire("lang", langue);
}

function appliquerTheme(clair) {
    document.body.classList.toggle("light", clair);
    const icone = document.querySelector("#themeToggle i");
    icone.classList.toggle("fa-sun", clair);
    icone.classList.toggle("fa-moon", !clair);
    document.querySelector('meta[name="theme-color"]').content = clair ? "#f5f6f8" : "#0a0a0a";
}

const menu = document.getElementById("navLinks");
const boutonMenu = document.getElementById("menuToggle");

function majBoutonMenu() {
    const ouvert = menu.classList.contains("open");
    boutonMenu.setAttribute("aria-expanded", String(ouvert));
    boutonMenu.setAttribute("aria-label", ouvert ? TEXTES[langue].menuClose : TEXTES[langue].menu);
    boutonMenu.querySelector("i").className = ouvert ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}

function initFiltres() {
    const boutons = document.querySelectorAll(".filter");
    const cartes = document.querySelectorAll(".project-card");
    boutons.forEach(bouton => bouton.addEventListener("click", () => {
        const filtre = bouton.dataset.filter;
        boutons.forEach(b => {
            b.classList.toggle("active", b === bouton);
            b.setAttribute("aria-pressed", String(b === bouton));
        });
        cartes.forEach(carte => {
            carte.hidden = filtre !== "all" && !carte.dataset.cat.split(" ").includes(filtre);
        });
    }));
}

// Formulaire géré par Netlify Forms : envoi sans recharger la page, avec repli vers l'email.
function initFormulaire() {
    const form = document.querySelector(".contact-form");
    const statut = form.querySelector(".form-status");
    form.addEventListener("submit", async e => {
        e.preventDefault();
        statut.className = "form-status";
        statut.textContent = TEXTES[langue].sending;
        try {
            const reponse = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(new FormData(form)).toString(),
            });
            if (!reponse.ok) throw new Error(reponse.status);
            form.reset();
            statut.classList.add("ok");
            statut.textContent = TEXTES[langue].sent;
        } catch {
            statut.classList.add("err");
            statut.innerHTML = TEXTES[langue].failed;
        }
    });
}

function initApparition() {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
        elements.forEach(el => el.classList.add("visible"));
        return;
    }
    const observateur = new IntersectionObserver(entrees => {
        entrees.forEach(entree => {
            if (entree.isIntersecting) {
                entree.target.classList.add("visible");
                observateur.unobserve(entree.target);
            }
        });
    }, { threshold: 0.12 });
    elements.forEach(el => observateur.observe(el));
}

function initLienActif() {
    const liens = [...document.querySelectorAll(".nav-links a")];
    const sections = liens.map(a => document.querySelector(a.getAttribute("href")));
    const observateur = new IntersectionObserver(entrees => {
        entrees.forEach(entree => {
            if (!entree.isIntersecting) return;
            liens.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entree.target.id));
        });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(s => s && observateur.observe(s));
}

document.getElementById("year").textContent = new Date().getFullYear();

const langueNavigateur = (navigator.language || "fr").startsWith("fr") ? "fr" : "en";
appliquerLangue(lire("lang") || langueNavigateur);

const themeSauve = lire("theme");
appliquerTheme(themeSauve ? themeSauve === "light" : window.matchMedia("(prefers-color-scheme: light)").matches);

document.getElementById("langToggle").addEventListener("click", () => appliquerLangue(langue === "fr" ? "en" : "fr"));
document.getElementById("themeToggle").addEventListener("click", () => {
    const clair = !document.body.classList.contains("light");
    appliquerTheme(clair);
    ecrire("theme", clair ? "light" : "dark");
});
boutonMenu.addEventListener("click", () => { menu.classList.toggle("open"); majBoutonMenu(); });
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { menu.classList.remove("open"); majBoutonMenu(); }));

initFiltres();
initFormulaire();
initApparition();
if ("IntersectionObserver" in window) initLienActif();
