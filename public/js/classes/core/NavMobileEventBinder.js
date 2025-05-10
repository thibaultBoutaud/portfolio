export class NavMobileEventBinder{
    constructor(view){
        this.view = view;
    }

    addEventListeners(){
        document.addEventListener('click', (e)=>{
         
            if(e.target.classList.contains("bars_menu")) {
                this.view.display();
            }else if(e.target.closest('.nav__container__page')){
                this.view.hide();
            }
        })
    }
}