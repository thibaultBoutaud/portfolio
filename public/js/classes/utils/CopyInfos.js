

export class CopyInfos {

    getInfo(e) {
        return e.target.dataset.info;
    }

    copyText(textName) {
        const tempTextarea = document.createElement('textarea');
        tempTextarea.style.position = 'absolute';
        tempTextarea.style.left = '-9999px';
        document.body.appendChild(tempTextarea);

        tempTextarea.value = textName;
        tempTextarea.select();

        document.execCommand('copy');

        document.body.removeChild(tempTextarea);
    }

    displayCopied() {
        setTimeout(() => {
            document.querySelector(".copied").classList.toggle("showCopied");
        }, 2000);
        document.querySelector(".copied").classList.toggle("showCopied");
    }

    displayWhatYouGet(e) {
        const info = this.getInfo(e);
        this.copyText(info);
        this.displayCopied();
    }

}