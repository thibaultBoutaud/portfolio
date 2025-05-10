export class ProjetCtrl {
    constructor(view, eventBinder, seoManager) {
        this.view = view;
        this.eventBinder = eventBinder;
        this.seoManager = seoManager;
    }

    show() {
        this.view.render();
        this.seoManager.setTitle('Projet - Portfolio Thibault Boutaud');
       this.seoManager.setMetaName('Découvrez les projets de Thibault Boutaud: sites web, applications et créations numériques réalisées avec passion et expertise.');
        this.eventBinder.addEventListeners();
    }
}