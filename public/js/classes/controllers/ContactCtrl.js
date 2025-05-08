export class ContactCtrl {
    constructor(view) {
        this.view = view;
    }

    show() {
        this.view.render();
    }
}