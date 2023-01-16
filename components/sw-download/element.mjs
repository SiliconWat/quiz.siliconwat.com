import { GAME, DEVICE } from 'https://thonly.org/global.mjs';
import template from './template.mjs';

class SwDownload extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const img = document.createElement('img');
        this.shadowRoot.querySelector('footer').prepend(img);
        img.src = GAME[0] === 'flashcard' ? DEVICE[1].image : DEVICE[2].image;
        img.title = GAME[0] === 'flashcard' ? DEVICE[1].description : DEVICE[2].description;
        this.style.display = 'block';
    }
}

customElements.define("sw-download", SwDownload);