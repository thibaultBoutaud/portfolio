export class NavMobileView {
    constructor(darkMode){
        this.darkMode = darkMode;
    }


    display() {
        document.querySelector("nav").style.display = "flex";
    }

    hide() {
        document.querySelector("nav").style.display = "none";
    }
}