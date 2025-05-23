export class NavMobileEventBinder {
    constructor(view) {
        this.view = view;
    }

    addEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains("bars_menu")) {
                this.view.display();
            } else if (e.target.closest('.nav__container__page')) {
                const width = document.body.offsetWidth;
                if (width < 900) this.view.hide();
            }else if(e.target.classList.contains("dark") || e.target.classList.contains("darkMode")){
                this.view.darkMode.darkTheme();
            }
        })
    }
}