import { FRONTEND_COURSE as FRONTEND, GAME } from 'https://thonly.org/global.mjs';
import template from './template.mjs';

class SwGame extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(Course, c, ref) {
        const pointer = `${Course}-chapter${c}`;
        const completed = localStorage.getItem(pointer) === 'completed';

        const { YEAR_BEGAN, getData } = await import(`${FRONTEND}/global2.mjs`);
        const { course, chapters } = await getData(`https://raw.githubusercontent.com/SiliconWat/${Course}.siliconwat.dev/main/${YEAR_BEGAN}/Syllabus.json`);
        const chapter = chapters[c - 1]

        this.shadowRoot.getElementById('course').textContent = course.title;
        this.shadowRoot.getElementById('course').href = `https://${Course}.siliconwat.${ref === 'cohort' ? "org" : "com"}`;
        this.shadowRoot.getElementById('chapter').textContent = `${this.#prefix(completed)} Chapter ${c}`;
        this.shadowRoot.getElementById('chapter').href = `https://${Course}.siliconwat.${ref === 'cohort' ? "org" : "com"}/#learn-chapter${c}`;
        this.shadowRoot.getElementById('title').textContent = `${completed ? "☑️" : "📋"} ${chapter.title}`;
        this.shadowRoot.getElementById('title').href = chapter.medium;
        this.shadowRoot.getElementById('title').target = "_blank";

        await import(`${GAME[1]}/components/sw-main/sw-game/sw-card/element.mjs`);
        this.shadowRoot.querySelector('sw-card').render(pointer, await this.#getData(getData, Course, c));
        this.style.display = 'block';
    }

    #prefix(completed) {
        switch (GAME[0]) {
            case "quiz":
                return `${completed ? "✅" : "📖"} Learn:`;
            case "code":
                return `${completed ? "✅" : "💻"} Practice:`;
            case "flashcard":
                return `${completed ? "✅" : "👩🏼‍💻"} Review:`;
        }
    }

    async #getData(getData, course, c) {
        switch (GAME[0]) {
            case "quiz":
                const quizzes = await getData(`https://gist.githubusercontent.com/thonly/0a6a6dd684288d3963723f69d91cebe4/raw/${course}.json`);
                return quizzes[c] || [];
            case "code":
                const exercises = await getData(`https://gist.githubusercontent.com/thonly/3fd6cf0952a7240916c62f988ba192b1/raw/${course}.json`);
                return exercises[c] || [];
            case "flashcard":
                const games = await getData(`https://gist.githubusercontent.com/thonly/cf3990b20f1f573bbdada0ce1d36d729/raw/${course}.json`);
                return games[c] || [];
        }
    }
} 

customElements.define("sw-game", SwGame);