export class NavMobileCtrl {

    constructor(view, eventBinder) {
        this.view = view;
        this.eventBinder = eventBinder;
        this.init();
    }

    init() {
        this.eventBinder.addEventListeners();
    }

}