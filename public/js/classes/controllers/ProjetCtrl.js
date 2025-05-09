export class ProjetCtrl {
    constructor(view) {
        this.view = view;
    }

    show() {
        this.view.render();
    }
}