import { GAME, DEVICE } from 'https://thonly.org/global.mjs';
import template from './template.mjs';

class SwMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        window.addEventListener("hashchange", event => this.render());
    }

    connectedCallback() {
        if (GAME[0] === 'flashcard' || (DEVICE[0] === 'mac' || DEVICE[0] === 'pc')) {
            const img = document.createElement('img');
            this.shadowRoot.querySelector('footer').prepend(img);
            img.src = DEVICE[1].image;
            img.title = DEVICE[1].description;
        }
        this.style.display = 'block';
    }

    render() {
        document.documentElement.style.backgroundImage = "url(background.gif)";
        document.querySelector('main').style.display = 'none';
        this.shadowRoot.querySelector("slot").assignedElements().forEach(element => element.style.display = 'none');
        this.shadowRoot.querySelector("slot").assignedElements().find(element => element.tagName === this.#hash[0]).render(this.#hash[1], this.#hash[2], this.#query);
        document.documentElement.style.backgroundImage = GAME[2];
        document.querySelector('main').style.display = 'flex';
        document.body.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
    }

    get #hash() {
        if (window.location.hash) {
            const hash = window.location.hash.substring(1).split("-");
            return ["SW-GAME", hash[0], Number(hash[1].replace("chapter", ""))];
        } return ["SW-HOME", null, null];
    }

    get #query() {
        const searchParams = new URLSearchParams(window.location.search);
        return searchParams.get("ref");
    }
}

customElements.define("sw-main", SwMain);