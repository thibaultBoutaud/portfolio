export class ProjetView{

    
    render(){
        const el = document.getElementById("root");
        if(el){
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
    }
}