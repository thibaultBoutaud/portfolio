export class ContactCtrl {
    constructor(view, contactEventBinder, seoManager) {
        this.view = view;
        this.contactEventBinder = contactEventBinder;
        this.seoManager = seoManager;
    }


    show() {
        this.view.render();
        this.seoManager.setTitle('Contact - Portfolio Thibault Boutaud');
        this.seoManager.setMetaName("Prenez contact avec Thibault Boutaud pour discuter d'un projet web, d'une collaboration ou pour toute autre demande professionnelle.");
        this.contactEventBinder.addEventListeners();
    }
}