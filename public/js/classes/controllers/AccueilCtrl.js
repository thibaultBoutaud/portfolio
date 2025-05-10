export class AccueilCtrl {
    constructor(view, seoManager) {
        this.view = view;
        this.seoManager = seoManager;
    }

    show() {
        this.view.render();
        this.seoManager.setTitle('Accueil - Portfolio Thibault Boutaud');
        this.seoManager.setMetaName('Bienvenue sur le portfolio de Thibault Boutaud, développeur web full-stack. Découvrez ses projets, ses compétences et son univers professionnel.');
    }
} 