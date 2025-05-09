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
import { CompetencesEventBinder } from "./classes/core/CompetencesEventBinder.js";
import { ContactEventBinder } from "./classes/core/ContactEventBinder.js";
import { NavHighlighter } from "./classes/core/NavHighlighter.js"

import { Debouncer } from "./classes/utils/Debouncer.js"; 
import { CopyInfos } from "./classes/utils/CopyInfos.js";

const debouncer = new Debouncer(300);
const copyInfos = new CopyInfos();

const accueilView = new AccueilView();
const competencesView = new CompetencesView();
const projetsView = new ProjetsView(); 
const contactView = new ContactView(copyInfos);

const competencesEventBinder = new CompetencesEventBinder(competencesView);
const contactEventBinder = new ContactEventBinder(contactView, debouncer);

const accueilCtrl = new AccueilCtrl(accueilView);
const competencesCtrl = new CompetencesCtrl(competencesView, competencesEventBinder);
const projetsCtrl = new ProjetsCtrl(projetsView);
const contactCtrl = new ContactCtrl(contactView, contactEventBinder);


const routes = {
    'accueil': accueilCtrl,
    'competences': competencesCtrl,
    'projets': projetsCtrl,
    'contact': contactCtrl,
}

const navHighlighter = new NavHighlighter();
const navigationManager = new NavigationManager(routes, navHighlighter);
navigationManager.init();

const navigationEventBinder = new NavigationEventBinder(navigationManager);
navigationEventBinder.bindClickLinks();