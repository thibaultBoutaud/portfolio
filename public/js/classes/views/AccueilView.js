export class AccueilView {

    render() {
        const el = document.getElementById("root");
        if (el) {
            el.innerHTML = `
                        <div class="home__presentation">
                <div class="home__presentation__container">
                    <div class="">
                        <div class="home__presentation_name">
                            <p class="home__presentation__name__prenom jump">Thibault</p>
                            <p class="home__presentation__name__nom jump">Boutaud</p>
                        </div>
                        <div class="home__presentation_job">
                            <p class="home__presentation__name__dev jump">Développeur</p>
                            <p class="home__presentation__name__web jump">Web</p>
                        </div>
                    </div>
                    <div class="">

                    </div>

                </div>
                <div class="home__presentation__container__right">
                    <img src="/public/assets/pictures/images/3657664.jpg" />
                    <p><span class="bold-red">"</span>Je transforme ma passion pour le développement en solutions utiles et accessibles.<span class="bold-red">"</span></p>

                </div>
            </div>

            <div class="home__welcome rectangle">
                <h2>Presentation</h2>
                <div class="home__welcome__presentation">
                    <span class="bold">Développeur en reconversion</span>, animé par une <span class="bold">passion pour
                        la programmation</span>. <span class="bold">Autonome, motivé</span> et
                    toujours prêt à <span class="bold">apprendre</span>, je m'efforce constamment d'<span
                        class="bold">élargir mes compétences</span> et de mettre mes
                    <span class="bold">connaissances au service des autres</span>.
                </div>
                <a href="/projets" data-link><button class="btn"><i class="fa-solid fa-person-chalkboard"></i>Voir mes projets</button></a>
            </div>
            `;
        }
    }
}