export class ProjetEventBinder {
    constructor(view) {
        this.view = view;
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick(e) {
        if (e.target.classList.contains("carrouselleLeft")) {
            this.view.carrouselle.turnLeft();
        } else if (e.target.classList.contains("carrouselleRight")) {
            this.view.carrouselle.turnRight();
        }
    }

    addEventListeners() {
        document.removeEventListener('click', this.handleClick);
        document.addEventListener('click', this.handleClick);
    }
}
