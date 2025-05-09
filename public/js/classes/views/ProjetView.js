import { projects } from "../../data/projects.js";

export class ProjetView {
    constructor(carrouselle){
        this.carrouselle = carrouselle;
    }

    render() {
        const el = document.getElementById("root");
        if (el) {
            el.innerHTML = `
              <div class="project-focus__head rectangle-small">
                <div class="project-focus__head__between">
                    <div class="project-focus__head__left">
                        <p class="project-focus__head__left--title focus-title"></p>
                        <p class="project-focus__head__left--description"></p>
                        <div class="project-focus__head__left--technos"></div>
                    </div>
                    <div class="project-focus__head__right">
                        <img />
                    </div>
                </div>
                <div class="project-focus__head__btns"></div>
            </div>
            <div class="project-large">
                <div class="project-focus__main rectangle-small">
                    <div class="project-focus__main__head">
                        <p class="focus-title">Functionalities</p>
                    </div>
                    <div class="project-focus__main__functionalities">
                        <ul></ul>
                    </div>
                </div>
                <div class="project-focus__footer rectangle-small">
                    <div class="focus__footer__head">
                        <p class="focus-title">Pictures</p>
                    </div>
                    <!-- frame carrousel-->
                    <div class="focus__footer__pictures__frame">
                        <div class="focus__footer__pictures__slideContainer">
               
                        </div>
                        <div class="carrouselleLeft"></div>
                        <div class="carrouselleRight"></div>
                    </div>
                </div>
            </div>
            `;
        }

        this.displayProject();
    }

    getUrlId() {
        const str = window.location.href;
        const url = new URL(str);
        return url.searchParams.get("id");
    }

    displayProject() {
        const el = document.querySelector(".project-focus");
        const id = this.getUrlId();
        const project = projects[id - 1];

        const title = document.querySelector(".project-focus__head__left--title");
        title.textContent = project.name;
        const description = document.querySelector(".project-focus__head__left--description");
        description.textContent = project.description;

        const techosContainer = document.querySelector(".project-focus__head__left--technos");
        project.techno_logos.forEach((techno) => {
            const techimg = document.createElement("img");
            techimg.className = "projectFocusImg";
            techimg.src = `/public/assets/pictures/icons/${techno}`;
            techosContainer.appendChild(techimg);
        });

        const imgProject = document.querySelector(".project-focus__head__right img");
        imgProject.src = `/public/assets/pictures/projets/${project.img}`;

        const btns = document.querySelector(".project-focus__head__btns");
        const github = document.createElement("a");
        github.innerHTML = `<i class="fa-brands fa-github"></i> Github`;
        github.className = "btn btn-grey";
        github.href = project.github_url;
        btns.appendChild(github);

        if (project.isOnline) {
            const site = document.createElement("a");
            site.className = "btn btn-grey";
            site.href = project.site_url;
            site.innerHTML = `<i class="fa-solid fa-globe"></i> Site`;

            btns.appendChild(site);
        };

        const funcContainer = document.querySelector(".project-focus__main__functionalities ul");
        let liToggle = false;
        project.fonctionalities.forEach((functionnality) => {
            const li = document.createElement("li");
            if (liToggle) li.className = "grisClair";
            li.textContent = functionnality;
            funcContainer.appendChild(li);
            liToggle = !liToggle;
        });

        const slideContainer = document.querySelector(".focus__footer__pictures__slideContainer");
        console.log(project.github)
        project.github_img.forEach((imgG) => {
            const slide = document.createElement("img");
            slide.src = `/public/assets/pictures/github/${imgG}`;
            slideContainer.appendChild(slide);
        });
    }

}