import { FRONTEND, YEAR, getData } from "/global.mjs";

class SwBar extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const { default: template } = await import(`${FRONTEND}/components/sw-header/sw-bar/template.mjs`);
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render() {
        
        this.style.display = 'block';
    }
}

customElements.define("sw-bar", SwBar);