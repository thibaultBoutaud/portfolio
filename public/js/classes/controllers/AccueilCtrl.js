export class AccueilCtrl {
    constructor(view) {
        this.view = view;
    }

    show() {
        this.view.render();
    }
}