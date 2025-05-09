export class ProjetEventBinder {
    constructor(view) {
        this.view = view;
    }


    addEventListeners() {

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains("carrouselleLeft")) {
                this.view.carrouselle.turnLeft();
            } else if (e.target.classList.contains("carrouselleRight")) {
                this.view.carrouselle.turnRight();
            }
        })
    }
}