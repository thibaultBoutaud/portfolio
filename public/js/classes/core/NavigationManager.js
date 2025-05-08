export class NavigationManager {
    constructor(routes) {
        this.routes = routes;

        window.addEventListener('popstate', (event) => {
            const page = event.state?.page || this.getPageFromURL();
            this.navigate(page, null);
        });
    }

    getPageFromURL() {
        const pathname = window.location.pathname;
        const segments = pathname.split('/').filter(Boolean);

        if (segments.length === 1) {
            return segments[0];
        }
        if (segments.length === 2) {
            return segments.join("_");
        }

        return null;
    }

    show404() {
        const el = document.getElementById('root');
        if (el) {
            el.innerHTML = '<h2>404</h2><p>Page introuvable</p>';
        }
    }

    navigate(pageKey, push = true) {
        const controller = this.routes[pageKey];

        if (!controller) {
            this.show404();
            return;
        }

        if (push) {
            const url = `/${pageKey}`;
            history.pushState({ page: pageKey }, '', url);
        }

        controller.show();
    }

    init() {
        const initialPage = this.getPageFromURL() || 'accueil';
        this.navigate(initialPage, false);
    }
}