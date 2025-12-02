export class ContactView {
    constructor(copyInfos) {
        this.copyInfos = copyInfos;
    }

    render() {
        const el = document.getElementById("root");
        if (el) {
            el.innerHTML = `
                        <div class="contact__container rectangle">
                <h2>Contact</h2>
                <div class="contact__container_big">
                    <div class="contact__container__left">
                        <h3><span class="redPale">Cher visiteur</span></h3>
                        <p>Je suis ravi que vous ayez pris le temps de visiter mon <span class="bold bluePale">portfolio</span> de <span class="bold bluePale">développeur web</span>. Si vous
                            avez
                            des <span class="bold greenPale">questions</span>, des <span class="bold greenPale">commentaires</span>, ou si vous souhaitez simplement discuter de projets
                            passionnants,
                            n'hésitez pas à me <span class="bold redPale">contacter</span>.</p>
                        <div class="contact__numeros">
                            <div class="btn cv">CV</div>
                            <div class="btn email" data-info="thibault.boutaud@gmx.fr">Email</div>
                            <div class="btn phoneNumber" data-info="0650474178">Phone number</div> 
                            <div class="copied">copied !</div>
                        </div>
                    </div>
                    <img class="contact_avatar" src="/public/assets/pictures/avatar/me_1.png"/>
                </div>
            </div>
            <div class="formulaireMail rectangle">
                <form>
                                    <div>
                        <label>name</label>
                        <input type="text" name="name" />
                    </div>
                                        <div>
                        <label>email</label>
                        <input type="email" name="email" />
                    </div>
                    <div>
                        <label>message</label>
                        <input type="text" name="message" />
                    </div>
                    <button type="button" class="btn-submit">Envoyer</button>
                </form>
            </div>
            `;
        }
    }

    dllCv() {
        const link = document.createElement("a");
        link.href = "/public/assets/files/cv_thibault.pdf";
        link.download = "cv_thibault.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}