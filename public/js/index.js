import { AccueilView } from "./classes/views/AccueilView.js";
import { CompetencesView } from "./classes/views/CompetencesView.js";
import { ProjetsView } from "./classes/views/ProjetsView.js";
import { ContactView } from "./classes/views/ContactView.js";

import { AccueilCtrl } from "./classes/controllers/AccueilCtrl.js";
import { CompetencesCtrl } from "./classes/controllers/CompetencesCtrl.js";
import { ProjetsCtrl } from "./classes/controllers/ProjetsCtrl.js";
import { ContactCtrl } from "./classes/controllers/ContactCtrl.js";

import { NavigationManager } from "./classes/core/NavigationManager.js";
import { NavigationEventBinder } from "./classes/core/NavigationEventBinder.js";

const accueilView = new AccueilView();
const competencesView = new CompetencesView();
const projetsView = new ProjetsView();
const contactView = new ContactView();

const accueilCtrl = new AccueilCtrl(accueilView);
const competencesCtrl = new CompetencesCtrl(competencesView);
const projetsCtrl = new ProjetsCtrl(projetsView);
const contactCtrl = new ContactCtrl(contactView);

const routes = {
    'accueil': accueilCtrl,
    'competences': competencesCtrl,
    'projets': projetsCtrl,
    'contact': contactCtrl,
}

const navigationManager = new NavigationManager(routes);
navigationManager.init();

const navigationEventBinder = new NavigationEventBinder(navigationManager);
navigationEventBinder.bindClickLinks();