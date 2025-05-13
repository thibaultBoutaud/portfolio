export class AccueilView {

    render() {
        const el = document.getElementById("root");
        if (el) {
            el.innerHTML = `
                        <div class="home__presentation">
                <div class="home__presentation__container">
                    <div class="">
                        <div class="home__presentation_name">
                            <p class="home__presentation__name__prenom jump"><span class="redPale">Thibault</span></p>
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
               
            </div>

            <div class="home__welcome rectangle">
                <h2>Presentation</h2>
               <p class="home__welcome__subtitle">Je transforme ma passion pour le développement en solutions utiles et accessibles.</p>
                <div class="home__welcome__presentation">
                    <span class="bold greenPale">Développeur en reconversion</span>, animé par une <span class="bold redPale">passion pour
                        la programmation</span>. <span class="bold redPale">Autonome, motivé</span> et
                    toujours prêt à <span class="bold greenPale">apprendre</span>, je m'efforce constamment d'<span
                        class="bold greenPale">élargir mes compétences</span> et de mettre mes
                    <span class="bold redPale">connaissances au service des autres</span>.
                </div>
                <a href="/projets" data-link><button class="btn"><i class="fa-solid fa-person-chalkboard"></i>Voir mes projets</button></a>
            </div>
            `;
        }
    }
}