export class Carrouselle {
    constructor() {
        this.carrouselle = null;
        this.cpt = 0;
        this.largeurSlide = 0;
        this.transfert = 0;
        this.isInitialized = false;
    }

init() {
    if (this.isInitialized) return;
    this.isInitialized = true;

    this.carrouselle = document.querySelector(".focus__footer__pictures__slideContainer");
    this.largeurSlide = this.getSlideWidth();

    if (!this.carrouselle || this.carrouselle.children.length === 0) {
        this.carrouselle = null;
        return;
    }

    setTimeout(() => {
        const clone = this.carrouselle.firstElementChild.cloneNode(true);
        this.carrouselle.appendChild(clone);
    }, 1000);
}

    reset() {
        this.isInitialized = false;
        this.cpt = 0;
        this.transfert = 0;
        this.carrouselle = document.querySelector(".focus__footer__pictures__slideContainer");
        if (this.carrouselle) {
            this.carrouselle.innerHTML = '';
        }
    }



    getSlideWidth() {
        const frame = document.querySelector(".focus__footer__pictures__frame");
        if (!frame) return 0;
        return frame.offsetWidth;
    }

    turnLeft() {
        if (!this.carrouselle) return;
        this.cpt--;
        if (this.cpt < 0) {
            setTimeout(() => {
                this.carrouselle.style.transition = '1ms';
                this.transfert = this.cpt * this.largeurSlide;
                this.carrouselle.style.transform = `translateX(${-this.transfert}px)`;
                this.carrouselle.style.transition = '400ms';
                this.turnLeft();
            }, 1);

            this.carrouselle.style.transition = '0ms';
            this.cpt = this.carrouselle.childElementCount - 1;
        }
        this.transfert = this.cpt * this.largeurSlide;
        this.carrouselle.style.transform = `translateX(${-this.transfert}px)`;
    }

    turnRight() {
        if (!this.carrouselle) return;
        this.cpt++;
        if (this.cpt == this.carrouselle.childElementCount - 1) {
            setTimeout(() => {
                this.cpt = 0;
                this.carrouselle.style.transition = '0ms';
                this.transfert = this.largeurSlide * this.cpt;
                this.carrouselle.style.transform = `translateX(${-this.transfert}px)`;
            }, 400);
        }

        this.carrouselle.style.transition = '400ms';
        this.transfert = this.largeurSlide * this.cpt;
        this.carrouselle.style.transform = `translateX(${-this.transfert}px)`;
    }
}
