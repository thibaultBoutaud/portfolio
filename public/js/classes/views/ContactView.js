export class ContactView {
    constructor(copyInfos) {
        this.copyInfos = copyInfos;
    }
render() {
    const el = document.getElementById("root");
    if (!el) return;

    el.innerHTML = `
        <div class="contact-page">
            <!-- Colonne gauche : texte + boutons -->
            <section class="contact-card rectangle">
                <header class="contact-card__header">
                    <div>
                        <h2 class="contact-card__title">Contact</h2>
                        <p class="contact-card__subtitle">
                            Mes informations de contact.
                        </p>
                    </div>
                    <img class="contact_avatar" src="/public/assets/pictures/avatar/me_1.png" />
                </header>

                <div class="contact-card__body">
                    <h3><span class="redPale">Cher visiteur</span></h3>
                    <p>
                        Je suis ravi que vous ayez pris le temps de visiter mon
                        <span class="bold bluePale">portfolio</span> de
                        <span class="bold bluePale">développeur web</span>. Si vous avez des
                        questions, des
                       commentaires, ou si vous souhaitez
                        simplement discuter de projets passionnants, n'hésitez pas à me
                        <span class="bold bluePale">contacter</span>.
                    </p>

                    <div class="contact__numeros">
                        <button class="btn btn-info cv">CV</button>
                        <button class="btn btn-info email" data-info="thibault-boutaud@tbuilder.fr">
                            Email
                        </button>
                        <button class="btn btn-info phoneNumber" data-info="0650474178">
                            Portable
                        </button>
                        <span class="copied"><i class="fa-solid fa-circle-check"></i>&nbsp;Copié !</span>
                    </div>
                </div>
            </section>

            <!-- Colonne droite : formulaire -->
            <section class="formulaireMail rectangle">
                <h3 class="form-title">Me contacter rapidement</h3>
                <p class="form-subtitle">
                    Laissez-moi un message et je vous réponderai dès que possible.
                </p>

                <form class="contact-form">
                    <div class="contact-form__row">
                        <div class="contact-form__field">
                            <label for="name">Nom complet</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Votre nom"
                                required
                            />
                        </div>

                        <div class="contact-form__field">
                            <label for="email">Adresse email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="votre@email.com"
                                required
                            />
                        </div>
                    </div>

                    <div class="contact-form__field">
                        <label for="subject">Sujet</label>
                        <input
                            id="subject"
                            type="text"
                            name="subject"
                            placeholder="Sujet de votre message"
                        />
                    </div>

                    <div class="contact-form__field">
                        <label for="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Écrivez votre message ici..."
                            required
                        ></textarea>
                    </div>

                    <div class="contact-form__footer">
                        <span class="form-helper">
                            * Tous les champs marqués sont obligatoires
                        </span>
                        <button type="button" class="btn btn-submit">
                            Envoyer le message
                        </button>
                    </div>
                </form>
            </section>
        </div>
    `;
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