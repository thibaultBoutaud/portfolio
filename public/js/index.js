import { AccueilView } from "./classes/views/AccueilView.js";
import { CompetencesView } from "./classes/views/CompetencesView.js";
import { ProjetsView } from "./classes/views/ProjetsView.js";
import { ContactView } from "./classes/views/ContactView.js";
import { ProjetView } from "./classes/views/ProjetView.js";
import { NavMobileView } from "./classes/views/NavMobileView.js";

import { AccueilCtrl } from "./classes/controllers/AccueilCtrl.js";
import { CompetencesCtrl } from "./classes/controllers/CompetencesCtrl.js";
import { ProjetsCtrl } from "./classes/controllers/ProjetsCtrl.js";
import { ContactCtrl } from "./classes/controllers/ContactCtrl.js";
import { ProjetCtrl } from "./classes/controllers/ProjetCtrl.js";
import { NavMobileCtrl } from "./classes/controllers/NavMobileCtrl.js";

import { NavigationManager } from "./classes/core/NavigationManager.js";
import { NavigationEventBinder } from "./classes/core/NavigationEventBinder.js";
import { CompetencesEventBinder } from "./classes/core/CompetencesEventBinder.js";
import { ContactEventBinder } from "./classes/core/ContactEventBinder.js";
import { NavHighlighter } from "./classes/core/NavHighlighter.js"
import { ProjetEventBinder } from "./classes/core/ProjetEventBinder.js";
import { NavMobileEventBinder } from "./classes/core/NavMobileEventBinder.js";

import { Debouncer } from "./classes/utils/Debouncer.js";
import { CopyInfos } from "./classes/utils/CopyInfos.js";

import { Carrouselle } from "./classes/models/Carrouselle.js";
import { DarkMode } from "./classes/models/DarkMode.js";

const carrouselle = new Carrouselle();
const darkMode = new DarkMode();

const debouncer = new Debouncer(300);
const copyInfos = new CopyInfos();

const accueilView = new AccueilView();
const competencesView = new CompetencesView();
const projetsView = new ProjetsView();
const contactView = new ContactView(copyInfos);
const projetView = new ProjetView(carrouselle);
const navMobileView = new NavMobileView(darkMode);

const competencesEventBinder = new CompetencesEventBinder(competencesView);
const contactEventBinder = new ContactEventBinder(contactView, debouncer);
const projetEventBinder = new ProjetEventBinder(projetView);
const navMobileEventBinder = new NavMobileEventBinder(navMobileView);

const accueilCtrl = new AccueilCtrl(accueilView);
const competencesCtrl = new CompetencesCtrl(competencesView, competencesEventBinder);
const projetsCtrl = new ProjetsCtrl(projetsView);
const contactCtrl = new ContactCtrl(contactView, contactEventBinder);
const projetCtrl = new ProjetCtrl(projetView, projetEventBinder);
new NavMobileCtrl(navMobileView, navMobileEventBinder);



const routes = {
    'accueil': accueilCtrl,
    'competences': competencesCtrl,
    'projets': projetsCtrl,
    'contact': contactCtrl,
    'projets_projet': projetCtrl
}

const navHighlighter = new NavHighlighter();
const navigationManager = new NavigationManager(routes, navHighlighter);
navigationManager.init();

const navigationEventBinder = new NavigationEventBinder(navigationManager);
navigationEventBinder.bindClickLinks();