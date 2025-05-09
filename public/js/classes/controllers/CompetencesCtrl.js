export class CompetencesCtrl {
    constructor(view, eventBinder) {
        this.view = view;
        this.eventBinder = eventBinder;
    }

    show() {
        this.view.render();
        this.eventBinder.addEventListeners();
    }
 
}