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
                    <div class="home__presentation__container__legend">
                <h2>Je conçois des interfaces simples, performantes et accessibles,</h2>
                <h2>avec une attention particulière à l'expérience utilisateur</h2>
                    </div>

                </div>
               
            </div>

            <div class="home__welcome"> 
                <a href="/projets" data-link><button class="btn btn-projects"><i class="fa-solid fa-person-chalkboard"></i>Voir mes projets</button></a>
                <a href="/projets" data-link><button class="btn btn-contact btn-red"><iclass="fa-solid fa-envelope"></i>Me contacter</button></a>
            </div>
            <div class="home__aPropos">
                <h1>A propos de moi</h1>
                <p class="home__aPropos__legend">Je me reconvertis dans le développement web pour transformer ma passion en métier.<br/>
                Autonome, curieux et motivé, je prends plaisir à apprendre de nouvelles technologies<br/> et à les appliquer dans des projets concrets.</p>

                <div class="home__aPropos__blocs">
                     <div class="home__aPropos__blocs__top">

                         <div class="home__aPropos__blocs__block">
                             <h3>Développeur en reconversion</h3>
                             <p>Des expériences précédentes qui m’apportent organisation, sens du contact et capacité d’adaptation.</p>
                         </div>

                       <div class="home__aPropos__blocs__block">
                         <h3>En apprentissage continu</h3>
                         <p>Veille, projets personnels et exercices réguliers pour progresser chaque jour.</p>
                      </div>

                    </div>

                      <div class="home__aPropos__blocs__bottom">

                         <div class="home__aPropos__blocs__block">
                             <h3>Orienté utilisateur</h3>
                             <p>J’aime comprendre les besoins réels afin de proposer des solutions intuitives et accessibles.</p>
                         </div>

                            <div class="home__aPropos__blocs__block">
                             <h3>Centré sur la qualité</h3>
                             <p>Je privilégie un code propre, maintenable et pensé pour l’expérience utilisateur.</p>
                         </div>
                      </div>
                </div>
            </div>
            `;
        }
    }
}