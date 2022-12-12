import template from './template.mjs';

class SwHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render() {
        this.#render();
        this.style.opacity = 1;
    }

    #render() {
        const fragment = document.createDocumentFragment();

        

        this.shadowRoot.querySelector('ul').replaceChildren(fragment);
    }

    #checkMark(event) {
        localStorage.setItem(event.target.id, Number(event.target.checked));
        this.shadowRoot.getElementById(event.target.dataset.unit).render();
        document.querySelector('sw-progress').render();
        if (event.target.id === window.location.hash.substring(1)) document.querySelector('sw-main').render();
    }

    changeLanguage(event) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("lang", event.target.value);
        window.location.search = searchParams.toString();
        //TODO: change base url to include language
    }
}

customElements.define("sw-header", SwHeader);