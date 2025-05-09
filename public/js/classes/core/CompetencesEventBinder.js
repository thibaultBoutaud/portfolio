export class CompetencesEventBinder {
    constructor(view) {
        this.view = view; 
    }


    addEventListeners() {
        const elements = document.querySelectorAll(".skills__presentation__container__imgs--img");

        if (elements) {
            elements.forEach((img) => {
                img.addEventListener('click', (e) => {
                    const ficheId = e.target.dataset.id;
                    this.view.displayFicheSkill(this.view.skillsContainer, ficheId);
                });
            });
        }
    }
}