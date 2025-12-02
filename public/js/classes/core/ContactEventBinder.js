export class ContactEventBinder {
    constructor(view, debouncer) {
        this.view = view;
        this.debouncer = debouncer;
    }


    addEventListeners() {
        const cvButton = document.querySelector('.cv');
        const emailButton = document.querySelector('.email');
        const phoneButton = document.querySelector('.phoneNumber');


        if (cvButton) {
            cvButton.addEventListener('click', () => this.handleClickCv());
        }
        if (emailButton) {
            emailButton.addEventListener('click', (e) => this.handleClickEmail(e));
        }
        if (phoneButton) {
            phoneButton.addEventListener('click', (e) => this.handleClickPhone(e));
        }

        const mailSubmitBtn = document.querySelector('.btn-submit');
        if (mailSubmitBtn) {
            mailSubmitBtn.addEventListener('click', async (e) => {
                e.preventDefault();
                const form = mailSubmitBtn.closest('form');


  

                fetch('https://api-php.tbuilder.fr/mail.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: form.elements['name'].value,
                        email: form.elements['email'].value,
                        message: form.elements['message'].value,
                    }),
                });
                const json = await res.json();

            })
        }
    }

    handleClickCv() {
        this.view.dllCv();
    }

    handleClickEmail(e) {
        this.debouncer.execute(() => {
            this.view.copyInfos.displayWhatYouGet(e);
        })
    }

    handleClickPhone(e) {
        this.debouncer.execute(() => {
            this.view.copyInfos.displayWhatYouGet(e);
        })
    }


}