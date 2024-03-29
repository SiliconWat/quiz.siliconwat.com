import template from './template.mjs';
import { FRONTEND_COURSE as FRONTEND, GAME } from 'https://thonly.org/global.mjs';

class SwHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    #games = {
        quiz: "Programming Concept Quizzes",
        code: "Interactive Coding Exercises",
        flashcard: "Syntax Flashcard Games"
    };

    async render() {
        this.shadowRoot.getElementById('game').textContent = this.#games[GAME[0]];
        this.shadowRoot.getElementById('game').href = window.location.search;
        this.shadowRoot.querySelector('ul').replaceChildren(await this.#render('frontend'), await this.#render('backend'), await this.#render('ios'));
        this.style.opacity = 1;
    }

    #courses = {
        frontend: "Frontend Music Course",
        backend: "Backend Blockchain Course",
        ios: "iOS Metaverse Course"
    };

    async #render(course) {
        const { YEAR_BEGAN, getData } = await import(`${FRONTEND}/global2.mjs`);
        const { units, chapters } = await getData(`https://raw.githubusercontent.com/SiliconWat/${course}.siliconwat.dev/main/${YEAR_BEGAN}/Syllabus.json`);

        const fragment = document.createDocumentFragment();
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const nav = document.createElement('nav');
        const bar = document.createElement('sw-bar');

        h3.textContent = this.#courses[course];
        bar.setAttribute("id", course);
        bar.render();

        fragment.append(li);
        li.append(h3, nav);
        nav.append(bar);
        
        units.forEach((unit, u) => {
            const h4 = document.createElement('h4');
            const menu = document.createElement('menu');
            h4.textContent = `${unit.bonus ? "Bonus " : ""}Unit ${u + 1}: ${unit.title}`
            nav.append(h4, menu);

            if (unit.from && unit.to) {
                for (let c = unit.from - 1; c < unit.to; c++) {
                    const chapter = chapters[c];
                    const li = document.createElement('li');
                    const input = document.createElement('input');
                    const a = document.createElement('a');

                    input.id = `${course}-chapter${c + 1}`;
                    input.setAttribute('data-course', course);
                    input.type = 'checkbox';
                    input.checked = localStorage.getItem(input.id) === "completed";
                    input.oninput = this.#checkMark.bind(this);
                    a.href = `${this.#query}#${input.id}`;
                    a.textContent = `Chapter ${c + 1}: ${chapter.title}`;

                    menu.append(li);
                    li.append(input, " ", a);
                }
            }
        });

        return fragment;
    }

    #checkMark(event) {
        localStorage.setItem(event.target.id, event.target.checked ? "completed" : 0);
        this.shadowRoot.getElementById(event.target.dataset.course).render();
        if (event.target.id === window.location.hash.substring(1)) document.querySelector('sw-main').render();
    }

    changeLanguage(event) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("lang", event.target.value);
        window.location.search = searchParams.toString();
        //TODO: change base url to include language
    }

    get #query() {
        const searchParams = new URLSearchParams(window.location.search);
        return `?lang=${searchParams.get("lang") || "en"}` + (searchParams.get("ref") ? `&ref=${searchParams.get("ref")}` : "");
    }
}

customElements.define("sw-header", SwHeader);