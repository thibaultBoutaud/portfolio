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
                     <h2>Technologies</h2>
                    <div class="skills__presentation__container">
                        <div class="skills__presentation__container__imgs">
                            <img src="/public/assets/pictures/skills/html.png" /> 
                            <img src="/public/assets/pictures/skills/css.webp" /> 
                            <img src="/public/assets/pictures/skills/js.png" />
                            <img src="/public/assets/pictures/skills/react.png" />
                            <img src="/public/assets/pictures/skills/nodejs.png" />
                            <img src="/public/assets/pictures/skills/sql-logo.png" />
                            <img src="/public/assets/pictures/skills/host.jpg" />
                            <img src="/public/assets/pictures/skills/nextjs.png" />
                            <img src="/public/assets/pictures/skills/n8n.jpg" />
                        </div>
                    </div>
                </div> 
                <div class="skills__description rectangle">
                    <div class="skills__description__subTitles">
                    </div>
                    <div class="skills__description__details">
                    <h2>Description</h2>
                    <!-- A supprimer -->
                        <div class="skills__description__details__text">
                            <p class="">Je conçois des interfaces centrées sur l’utilisateur en alliant ergonomie intuitive et navigation interactive.<br/> Grâce au responsive design, j’assure une adaptation fluide sur tous les supports.<br/> J’attache une grande importance à la hiérarchisation claire des contenus afin de rendre l’information accessible et agréable à parcourir.</p>
                        </div>
                        <div class="skills__description__details__img">
                            <img src="/public/assets/pictures/competences/ux.png"/>
                        </div>
                    <!-- -->
                    </div>
                </div>
            `;
        }
        this.displaySubTitles();
    }

    displaySubTitles() {
        const el = document.querySelector(".skills__description__subTitles");
        if (el) {
            const h2 = document.createElement("h2");
            h2.textContent = "Mes compétences";
            el.appendChild(h2);
            for (let i = 0; i < skillsData.length; i++) {
                const fiche = document.createElement("div");
                fiche.className = `skills__description__subTitles__fiche ${i === 0 ? "activeFiche" : ""}`
                fiche.setAttribute("data-id", skillsData[i].id);
                const title = document.createElement("h3");
                title.textContent = skillsData[i].title;
                fiche.appendChild(title);
                const ulContainer = document.createElement("div");
                ulContainer.className = "subTitlesContainer";
                const container = document.createElement("ul");
                const subTitles = skillsData[i].subTitle;
                for (let j = 0; j < subTitles.length; j++) {
                    const subTitle = document.createElement("li");
                    subTitle.textContent = subTitles[j];
                    container.appendChild(subTitle);
                }
                fiche.appendChild(ulContainer);
                ulContainer.appendChild(container);

                el.appendChild(fiche);
            }
        }
    }

    displayDetails(id = 0) {
        const el = document.querySelector(".skills__description__subTitles");
        if (el) {
            const img = document.querySelector(".skills__description__details__img");
            img.innerHTML = "";
            const text = document.querySelector(".skills__description__details__text p");
            if (id === 0) {
                const imgEl = document.createElement("img");
                imgEl.src = "/public/assets/pictures/images/devWeb.png";
                img.appendChild(imgEl);
                text.textContent = "Sélectionnez une compétence";
                text.className = "underline-green";
            } else {
                const data = skillsData.find((cell) => cell.id === Number(id));
                text.innerHTML = `<p>${this.retourChariot(data.description)}</p>`;
                text.className = "";
                const imgEl = document.createElement("img");
                imgEl.src = `/public/assets/pictures/competences/${data.image}`;
                img.appendChild(imgEl);
            }
        }
    }

    retourChariot(text) {
        return text.split(".").join(".</br>");
    }

}