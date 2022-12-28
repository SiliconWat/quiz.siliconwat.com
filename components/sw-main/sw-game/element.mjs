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
        const quizzes = await getData(`https://gist.githubusercontent.com/thonly/0a6a6dd684288d3963723f69d91cebe4/raw/${Course}.json`);

        this.shadowRoot.getElementById('course').textContent = course.title;
        this.shadowRoot.getElementById('chapter').textContent = `Chapter ${c}: ${chapters[c - 1].title}`;
        
        const current = Number(localStorage.getItem(`${Course}-${c}-current`)) || 1;
        this.#render(quizzes[c], current);
        this.style.display = 'block';
    }

    #render(quiz, current) {
        const problem = quiz[current - 1];
        const choices = document.createDocumentFragment();

        problem.choices.forEach((choice, answer) => {
            const li = document.createElement('li');
            li.innerHTML = choice;
            choices.append(li);
        });

        this.shadowRoot.getElementById('current').textContent = current;
        this.shadowRoot.getElementById('total').textContent = quiz.length;
        this.shadowRoot.getElementById('question').innerHTML = problem.question;
        this.shadowRoot.querySelector('ol').replaceChildren(choices);
    }

    // steps: select => submit => 
}

customElements.define("sw-game", SwGame);