import { YEAR, getData } from "/global.mjs";
import template from "./template.mjs";

class SwBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render() {
        let sum = 0;
        const { chapters } = await getData(`https://raw.githubusercontent.com/SiliconWat/${this.getAttribute('id')}-cohort/main/${YEAR}/Syllabus.json`);

        chapters.forEach((chapter, c) => {
            if (Number(localStorage.getItem(`${this.getAttribute('id')}-chapter${c + 1}`))) sum += 1;
        });

        const percent = Math.round(sum/chapters.length*100);
        this.shadowRoot.getElementById('fraction').textContent = `${sum}/${chapters.length}`;
        this.shadowRoot.getElementById('percent').textContent = `${percent}%`;
        this.shadowRoot.getElementById('bar').style.transform = `translateX(-${100 - percent}%)`;
        this.style.display = 'block';
    }
}

customElements.define("sw-bar", SwBar);