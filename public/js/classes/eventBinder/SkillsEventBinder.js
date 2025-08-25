export class SkillsEventBinder {

    constructor() {
        this.boundHandleClickTask = this.handleClickTask.bind(this);
    }

    setController(controller) {
        this.controller = controller;
    }

    addEventListeners() {
        document.removeEventListener('click', this.boundHandleClickTask);
        document.addEventListener('click', this.boundHandleClickTask);
    }

    async handleClickTask(e) {
        const fiches = document.querySelectorAll(".skills__description__subTitles__fiche");
        const fiche = e.target.closest(".skills__description__subTitles__fiche");
        if (fiches) {
            if (fiche) {
                if (!fiche.classList.contains("activeFiche")) {
                    fiches.forEach((fiche) => fiche.classList.remove("activeFiche"));
                    fiche.classList.add("activeFiche");
                    const id = fiche.getAttribute("data-id");
                    this.controller.view.displayDetails(id);
                }
                //  else {
                //     fiche.classList.remove("activeFiche");
                //     this.controller.view.displayDetails();
                // }
            }
        }
    }
}