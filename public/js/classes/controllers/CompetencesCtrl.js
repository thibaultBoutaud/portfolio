export class CompetencesCtrl {
    constructor(view, eventBinder, seoManager) {
        this.view = view;
        this.eventBinder = eventBinder;
        this.seoManager = seoManager;
    }

    show() {
        this.view.render();
        this.seoManager.setTitle('Compétences - Portfolio Thibault Boutaud');
        this.seoManager.setMetaName('Les compétences techniques de Thibault Boutaud en développement web : frontend, backend, outils, frameworks et plus encore.');
        this.eventBinder.addEventListeners();
    }

}