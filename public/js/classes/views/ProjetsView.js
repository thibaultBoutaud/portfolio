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
        }
    }
}