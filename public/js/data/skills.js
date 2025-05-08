export const skillsData = [
    {
        id: 1,
        name: "HTML",
        imgName: "html.png",
        use: "Utilisé pour construire la structure sémantique des sites web, optimiser le SEO, et assurer l’accessibilité du contenu.",
        projets: ["Intégration de maquettes en HTML5 avec respect des normes W3C", "Utilisation des balises sémentiques", "Optimisation du seo"],
        outils: null,
        approche: "Je considère que du bon HTML est invisible pour l'utilisateur mais fondamental pour un site rapide, accessible et bien référencé."
    },
    {
        id: 2,
        name: "CSS",
        imgName: "css.webp",
        use: "Utilisé pour la création d'interfaces responsives, la personnalisation de sites vitrines, de blogs, et l'optimisation de l’expérience utilisateur sur mobile et desktop.",
        projets: ["Mise en page responsive avec Flexbox", "Utilisation des balises sémentiques"],
        outils: ["SCSS", "BEM"],
        approche: "Le CSS doit rendre l'expérience agréable et fluide, tout en assurant la performance et la compatibilité mobile."
    },
    {
        id: 3,
        name: "javascript",
        imgName: "js.png",
        use: "Utilisé pour rendre les sites interactifs, manipuler le DOM, communiquer avec des APIs, et développer des applications web dynamiques.",
        projets: [
            "Création d'animations interactives et navigation dynamique entre sections",
            "Mise en place de filtres produits dynamiques en JavaScript vanilla",
            "Validation de formulaires en temps réel côté client",
            "Gestion d'appels asynchrones avec Fetch API pour récupérer des données en temps réel",
            "Optimisation des performances grâce aux algorithmes de tri et de recherche"
        ],
        outils: ["ES6+", "babel", "webPack", "POO SOLID", "PF", "Async/Await", "Promise", "Algorithmes"],
        approche: "J'utilise JavaScript pour enrichir l'expérience utilisateur sans surcharger les performances, en favorisant un code clair, modulaire et évolutif."
    },
    {
        id: 4,
        name: "react",
        imgName: "react.png",
        use: "Utilisé pour construire des interfaces utilisateur dynamiques avec des composants réutilisables et une gestion efficace de l'état et des événements.",
        projets: [
            "Développement d'une application de gestion de tâches avec gestion du state via React hooks",
            "Mise en place de composants réutilisables pour une interface utilisateur cohérente",
            "Utilisation de `useEffect` pour gérer les effets de bord et les appels API asynchrones",
        ],
        outils: ["React Router", "Hooks (useState, useEffect, useContext)", "Context API", "Redux"],
        approche: "Je privilégie la création de composants réutilisables et modulaires, avec une gestion optimale du state et des appels API asynchrones grâce aux hooks. Je veille également à la performance et à la fluidité des applications avec des techniques comme la mémorisation des composants et l’optimisation du rendu."
    },
    {
        id: 5,
        name: "node.js",
        imgName: "nodejs.png",
        use: "Utilisé pour développer des applications backend rapides et évolutives avec JavaScript, gérer des APIs RESTful, et travailler avec des bases de données.",
        projets: [
            "Création d'une API RESTful pour une application de gestion de tâches, avec gestion des utilisateurs et des permissions",
            "Utilisation d'Express.js pour la gestion des routes et des middlewares",
            "Connexion à une base de données MongoDB pour stocker des données utilisateur et des tâches",
            "Mise en place de la gestion des erreurs avec des middlewares personnalisés"
        ],
        outils: ["Express.js", "mongoose", "mongoDB", "mySql", "cookie-http-only", "JWT", "bcryptjs", "Async/Await", "socket.io", "cron", "MVC"],
        approche: "Je privilégie la création d'applications backend simples et performantes, avec une gestion claire des routes, des erreurs, et des sécurités via JWT et bcrypt. Je veille également à la performance de l'API avec une gestion asynchrone optimale."
    },
    {
        id: 6,
        name: "SQL",
        imgName: "sql-logo.png",
        use: "Utilisé pour gérer des bases de données relationnelles, effectuer des opérations CRUD, et optimiser les requêtes pour une meilleure performance des applications.",
        projets: [
            "Création d'une base de données pour un site e-commerce avec tables utilisateurs, produits et commandes",
            "Écriture de requêtes complexes avec des `JOIN` pour lier plusieurs tables et extraire des données spécifiques",
            "Optimisation des performances des requêtes avec des index pour réduire les temps de réponse",
        ],
        outils: ["MySQL", "Joins", "Indexes", "Transactions"],
        approche: "Je mets un point d'honneur à concevoir des bases de données bien normalisées et structurées, en utilisant des techniques d'optimisation pour garantir des performances élevées et une gestion efficace des données."
    },
    {
        id: 7,
        name: "Hébergement",
        imgName: "host.jpg",
        use: "Utilisé pour déployer des sites web et des applications, gérer des serveurs et configurer des environnements d'hébergement adaptés aux besoins du projet.",
        projets: [
            "Configuration et déploiement d'une application Node.js avec base de données MongoDB sur Amazon LightSail en VPS Linux",
            "Gestion d'un hébergement mutualisé avec O2switch avec mySql",
            "Déploiement d'un site sur un serveur mutualisé OVH"
        ],
        outils: ["OVH", "Amazon LightSail", "o2switch", "Apache", "SSL", "GitHub"],
        approche: "Je sélectionne l'outil d'hébergement en fonction des besoins spécifiques du projet, en tenant compte de la scalabilité, de la sécurité, et de la facilité de gestion. J'ai de l'expérience dans la configuration de serveurs, le déploiement d'applications, et la mise en place de certificats SSL."
    }

];