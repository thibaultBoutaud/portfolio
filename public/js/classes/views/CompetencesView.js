import { skillsData } from "../../data/skills.js";

export class CompetencesView {
    constructor() {
        this.skillsContainer = document.querySelector(".skills__presentation__container");
    }

    render() {
        const el = document.getElementById("root");
        if (el) {
            el.innerHTML = `
                    <div class="skills__presentation rectangle">
                <h2>Skills</h2>
                <div class="skills__presentation__container">
                    <div class="skills__presentation__container__imgs"></div>
                    <div class="skills__presentation__container__fiche"></div>
                </div>
            </div> 
            `;
            const container = document.querySelector(".skills__presentation__container");
            this.displaySkills(container);
            this.displayFicheSkill(container, 1);
        }
    }

    displaySkills(container) {
        const imgSkillContainer = document.querySelector(".skills__presentation__container__imgs");
        skillsData.forEach((skill) => {
            const img = document.createElement("img");
            img.className = "skills__presentation__container__imgs--img";
            img.dataset.id = skill.id;
            img.src = `/public/assets/pictures/skills/${skill.imgName}`;
            imgSkillContainer.appendChild(img);
        });
        container.appendChild(imgSkillContainer);
    }

    displayFicheSkill(container, ficheId=1) {
        const currentFiche = skillsData[ficheId - 1];
        let ficheSkillContainer = document.querySelector(".skills__presentation__container__fiche");
        if(!ficheSkillContainer) return;
        ficheSkillContainer.innerHTML = "";
        const imgContainer = document.createElement("div");
        imgContainer.className="ficheSkill_imgContainer";

        const ficheImg = document.createElement("img");
        ficheImg.src = `/public/assets/pictures/skills/${currentFiche.imgName}`;
        imgContainer.appendChild(ficheImg);
        const ficheText = document.createElement("div");
        // name
        const name = document.createElement("h3");
        name.textContent = currentFiche.name;
        imgContainer.appendChild(name);
        // use
        const h4Use = document.createElement("h4");
        h4Use.textContent = "Utilisation";
        ficheText.appendChild(h4Use);
        const use = document.createElement("p");
        use.textContent = currentFiche.use;
        ficheText.appendChild(use);
        // projets
        const h4 = document.createElement("h4");
        h4.textContent = "Projets";
        ficheText.appendChild(h4);
        const projets = document.createElement("ul");
        currentFiche.projets.forEach((projet) => {
            const para = document.createElement("li");
            para.textContent = projet;
            projets.appendChild(para);
        });
        ficheText.appendChild(projets);

        ficheText.appendChild(projets);
        // outils
        if (currentFiche.outils) {
            const h4Outils = document.createElement("h4");
            h4Outils.textContent = "Outils";
            ficheText.appendChild(h4Outils);
            const outils = document.createElement("p");
            const outilsArr = currentFiche.outils.join(", ");
            outils.textContent = outilsArr;
            ficheText.appendChild(outils);
        }
        // approche
        const h4Approche = document.createElement("h4");
        h4Approche.textContent = "Approche";
        ficheText.appendChild(h4Approche);
        const approche = document.createElement("p");
        approche.textContent = currentFiche.approche;
        ficheText.appendChild(approche);


        ficheSkillContainer.appendChild(imgContainer);
        ficheSkillContainer.appendChild(ficheText);
        container.appendChild(ficheSkillContainer);
    }
}