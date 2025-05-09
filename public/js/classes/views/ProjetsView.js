import { projects } from "../../data/projects.js";

export class ProjetsView {

    render() {
        const el = document.getElementById("root");
        if (el) {
            el.innerHTML = `
                  <div class="projects__presentation rectangle">
                <h2>Projects</h2>
                <div class="projects__presentation__container">
                    <!-- Affichage dynamique des projects-->
                </div>
            </div>
            `;
        };
        this.displayProjects();
    }

    async displayProjects() {
        const container = document.querySelector(".projects__presentation__container");
        if (!container) return;
        container.innerHTML = "";
        let cpt = 0;
        projects.forEach((project) => {
            const fiche = document.createElement("a");
            fiche.href = `/projets/projet?id=${project.id}`;
            fiche.setAttribute("data-link", "true");
            fiche.className = project.id % 2 === 0 ? "projects__presentation__container__project" : "projects__presentation__container__project gris-clair";
            cpt += 100;
            fiche.style.animationDelay = `${cpt}ms`;

            const ficheLeft = document.createElement("div");
            const ficheLeftImg = document.createElement("div");
            ficheLeftImg.className = "projects__presentation__container__project--img";
            const imgProject = document.createElement("img");
            imgProject.src = `/public/assets/pictures/projets/${project.img}`;
            ficheLeftImg.appendChild(imgProject);
            const ficheLeftName = document.createElement("div");
            ficheLeftName.className = "projects__presentation__container__project--name";
            const ficheLeftNameLeft = document.createElement("div");
            const circle = document.createElement("div");
            circle.className = `circle ${project.isOnline ? "circle-green" : "circle-red"}`;
            const projectName = document.createElement("p");
            projectName.textContent = project.name;
            ficheLeftNameLeft.appendChild(circle);
            ficheLeftNameLeft.appendChild(projectName);
            ficheLeftName.appendChild(ficheLeftNameLeft);

            const technos = document.createElement("div");
            technos.className = "projects__presentation__container__project--technos";
            project.techno_logos.forEach((techno) => {
                const technoImg = document.createElement("img");
                technoImg.src = `/public/assets/pictures/icons/${techno}`;
                technos.appendChild(technoImg);
            });

            ficheLeft.appendChild(ficheLeftImg);
            ficheLeft.appendChild(ficheLeftName);
            ficheLeft.appendChild(technos);


            //description ...
            const buttonA = document.createElement("a");
            buttonA.href = `/projets/projet?id=${project.id}`;
            buttonA.setAttribute("data-link", "true");
            const btn = document.createElement("div");
            btn.className = `btn btn-blue`;
            btn.textContent = "More ...";
            buttonA.appendChild(btn);

            fiche.appendChild(ficheLeft);
            fiche.appendChild(buttonA);

            container.appendChild(fiche);
        });
    }
}