export class ProjetsCtrl {
    constructor(view, seoManager) {
        this.view = view;
        this.seoManager = seoManager;
    }

    show() {
        this.view.render();
        this.seoManager.setTitle('Projets - Portfolio Thibault Boutaud');
        this.seoManager.setMetaName('Découvrez les projets de Thibault Boutaud: sites web, applications et créations numériques réalisées avec passion et expertise.');
    }
}