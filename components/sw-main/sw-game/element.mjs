import { FRONTEND } from '/global.mjs';
import template from './template.mjs';

class SwGame extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(Course, c) {
        const { YEAR_BEGAN, getData } = await import(`${FRONTEND}/global2.mjs`);
        const { course, chapters } = await getData(`https://raw.githubusercontent.com/SiliconWat/${Course}-cohort/main/${YEAR_BEGAN}/Syllabus.json`);
        const quizzes = await getData(`https://gist.githubusercontent.com/thonly/0a6a6dd684288d3963723f69d91cebe4/raw/c94a72f794e89646fa2137d84fe3117b56372c74/${Course}.json`);

        this.shadowRoot.getElementById('course').textContent = course.title;
        this.shadowRoot.getElementById('chapter').textContent = `Chapter ${c}: ${chapters[c - 1].title}`;
        this.#render(quizzes[c]);
        this.style.display = 'block';
    }

    #render(quiz) {
        console.log(quiz)
    }
}

customElements.define("sw-game", SwGame);