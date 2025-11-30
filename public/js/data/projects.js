export const projects = [
    {
        id: 1,
        name: "Agenda",
        description: "Application hôtelière avec agenda et plannings",
        img: "hotel_accueil.png",
        techno_logos: ["js.png", "poo.png","mySql.png"],
        isOnline: false,
        github_url: "https://github.com/thibaultBoutaud/agenda_perso.git",
        site_url: "",
        fonctionalities: [
            "Projet en JS (Poo) et css (BEM) et sql (mySql)",
            "SPA sans SSR en POO SOLID",
            "Navigation avec l'api history",
            "Routes mix entre modèle REST et searchParams",
            "SEO dynamique",
            "Agenda type google calendar",
            "Plannings"
        ],
        github_img: ["hotel_1.png", "hotel_2.png", "hotel_3.png", "hotel_4.png", "hotel_5.png", "hotel_6.png", "hotel_7.png", "hotel_8.png"]
    },
    {
        id: 2,
        name: "Site web d'antiquaire",
        description: "Site web autogérable qui présente la galerie d'un antiquaire ainsi que des articles de journaux",
        img: "antiq.png",
        techno_logos: ["js.png", "react.png", "mySql.png"],
        isOnline: true,
        github_url: "https://github.com/thibaultBoutaud/antiq.git",
        site_url: "https://tbuilder.fr",
        fonctionalities: [
            "Projet en React et mySql",
            "carouselle d'images", 
            "RESTful route",
            "Service de mailling",
            "Auto-création de fiche objets et d'articles"
        ],
        github_img: ["antiq_1.png", "antiq_2.png", "antiq_3.png", "antiq_4.png", "antiq_5.png", "antiq_6.png", "antiq_7.png"]
    },
    {
        id: 3,
        name: "Portfolio",
        description: "Portfolio présentant mes projets personnels",
        img: "portfolio.png",
        techno_logos: ["js.png", "poo.png"],
        isOnline: true,
        github_url: "https://github.com/thibaultBoutaud/portfolio.git",
        site_url: "https://portfoliotb.netlify.app/",
        fonctionalities: [
            "Projet en JS (Poo) et css (BEM)",
            "SPA sans SSR en POO SOLID",
            "Navigation avec l'api history",
            "Routes mix entre modèle REST et searchParams",
            "SEO dynamique",
            "Portfolio qui présente mes projets"
        ]
    },
    {
        id: 4,
        name: "App culinaire",
        description: "Application pour recettes de cuisine",
        img: "cuisine_img.png",
        techno_logos: ["react_logo.png", "nodejs_logo.png", "mysql_logo.png"],
        isOnline: true, // css : circle circle-green  ou circle-red
        github_url: "https://github.com/thibaultBoutaud/cuisine.git",
        site_url: "https://cuisine-mu.vercel.app",
        fonctionalities: [
            "Application culinaire qui utilise react (vite), nodejs (express) et mySql.",
            "Pagination (url)",
            "Chat (socket.io)",
            "Authentification (regex, token et cookie http only)",
            "Etat centralisé (context)",
            "Recherche et trie (SQL)",
            "Architecture modulaire et composants réutilisables",
            "Api restfull"
        ],
        github_img: ["cuisine_1.png", "cuisine_2.png", "cuisine_3.png"]
    },
    {
        id: 5,
        name: "Chat Msn",
        description: "Réseau social avec messagerie instantanée",
        img: "msn_img.png",
        techno_logos: ["react_logo.png", "nodejs_logo.png", "mysql_logo.png"],
        isOnline: true,
        github_url: "https://github.com/thibaultBoutaud/msn.git",
        site_url: "https://msn-three.vercel.app",
        fonctionalities: [
            "Réseau social qui utilise React(vite), nodeJs(express) et mySql.",
            "Chat (socket.io)",
            "Service de messagerie avec plusieurs états de messagerie (socket.io)",
            "Authentification (token et cookie http only)",
            "Recherche et trie (SQL)",
            "Architecture modulaire et composants réutilisables",
            "Api restfull"
        ],
        github_img: ["msn_1.png", "msn_2.png", "msn_3.png", "msn_4.png", "msn_5.png"]
    },
    {
        id: 6,
        name: "App e-commerce",
        description: "Application pour gestion de produits en ligne",
        img: "trendtangle.png",
        techno_logos: ["react_logo.png", "nodejs_logo.png", "mongodb_logo.png"],
        isOnline: false,
        github_url: "https://github.com/thibaultBoutaud/trendtangle.git",
        site_url: null, // Site non mentionné comme actif
        fonctionalities: [
            "Application e-commerce avec React(vite), nodeJs(express) et mongoDb Atlas.",
            "Pagination (url)",
            "Authentification et droits d'administration",
            "Console d'administration",
            "Gestion de paniers",
            "Promotion individuelles",
            "Soldes temporaires sur un ensemble d'articles",
            "Execution automatique de tâches (Cron)",
            "Api restfull"
        ],
        github_img: ["trend_1.png", "trend_2.png", "trend_3.png", "trend_4.png", "trend_5.png", "trend_6.png", "trend_7.png", "trend_8.png"]
    },
    {
        id: 7,
        name: "Gestionnaire de révision",
        description: "Application pour organiser des révisions selon la répétition espacée",
        img: "boxRevision.png",
        techno_logos: ["js.png", "poo.png"],
        isOnline: true,
        github_url: "https://github.com/thibaultBoutaud/gestionnaire-revision.git",
        site_url: "https://boxrevision.netlify.app/",
        fonctionalities: [
            "SPA sans système de routes en Js (poo) & css (BEM)",
            "L'application permet d'enregistrer des leçons à réviser et de les afficher selon le principe de la répétition espacée.",
            "Pagination (url)",
            "Application 100% dynamique",
            "Agenda",
            "Opérations CRUD",
            "Etat centralisé dans l'api du navigateur (localStorage)"
        ],
        github_img: ["revi_0.png", "revi_1.png", "revi_2.png", "revi_3.png"]
    }
];
