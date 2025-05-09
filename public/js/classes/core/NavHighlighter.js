export class NavHighlighter {
    highlight(pageKey) {
        const links = document.querySelectorAll('nav a[data-link]');
        links.forEach(link => {
            const href = link.getAttribute('href').replace('/', '');
            if (href === pageKey) {
                link.children[0].classList.add('active');
            } else {
                link.children[0].classList.remove('active');
            }
        });
    }
}
