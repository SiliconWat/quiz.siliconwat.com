import { GAME } from "https://thonly.org/global.mjs";
import template from './template.mjs';

class SwHome extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    #titles = {
        quiz: "Concept Quiz",
        code: "Coding Exercise",
        flashcard: "Flashcard Game"
    }

    render() {
        this.shadowRoot.getElementById('title').textContent = `${this.#titles[GAME[0]]} Instructions`;
        this.shadowRoot.getElementById(GAME[0]).style.display = 'block';
        this.style.display = 'block';
    }
}

customElements.define("sw-home", SwHome);