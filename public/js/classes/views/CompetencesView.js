export class CompetencesView {

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
        }
    }
}