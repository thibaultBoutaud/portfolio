export class ContactView {

    render() {
        const el = document.getElementById("root");
        if (el) {
            el.innerHTML = `
                        <div class="contact__container rectangle">
                <h2>Contact</h2>
                <div class="contact__container_big">
                    <div class="contact__container__left">
                        <h3>Cher visiteur</h3>
                        <p>Je suis ravi que vous ayez pris le temps de visiter mon portfolio de développeur web. Si vous
                            avez
                            des questions, des commentaires, ou si vous souhaitez simplement discuter de projets
                            passionnants,
                            n'hésitez pas à me contacter.</p>
                        <div class="contact__numeros">
                            <div class="btn cv">CV</div>
                            <div class="btn email" data-info="thibault.boutaud@gmx.fr">Email</div>
                            <div class="btn phoneNumber" data-info="0650474178">Phone number</div>
                            <div class="copied">copied !</div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
    }
}