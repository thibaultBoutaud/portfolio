export class ContactCtrl {
    constructor(view, contactEventBinder) {
        this.view = view;
        this.contactEventBinder = contactEventBinder; 
    }


    show() {
        this.view.render();
        this.contactEventBinder.addEventListeners();
    }
}