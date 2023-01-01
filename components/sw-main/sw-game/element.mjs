import { FRONTEND_COURSE as FRONTEND } from 'https://thonly.org/global.mjs';
import template from './template.mjs';

class SwGame extends HTMLElement {
    #pointer; 
    #quiz;

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
        this.shadowRoot.getElementById('chapter').textContent = `Chapter ${c}`;
        this.shadowRoot.getElementById('title').textContent = chapters[c - 1].title;
        
        this.#pointer = `${Course}-chapter${c}`;
        this.#quiz = quizzes[c] || [];
        this.#render();
    }

    #render() {
        this.shadowRoot.querySelectorAll("main, footer").forEach(element => element.style.display = 'none');
        switch (localStorage.getItem(this.#pointer)) {
            case "finished":
                this.#renderResult();
                this.shadowRoot.querySelector('footer').style.display = 'block';
                break;
            case "rewarded":
                this.#renderResult();
                this.shadowRoot.querySelector('footer').style.display = 'block';
                break;
            case "completed":
                this.#renderResult();
                this.shadowRoot.querySelector('footer').style.display = 'block';
                break;
            default:
                this.#renderProblem();
                this.shadowRoot.getElementById('total').textContent = this.#quiz.length;
                this.shadowRoot.querySelector('main').style.display = 'block';
        }
        this.style.display = 'block';
    }

    finish(event) {
        localStorage.setItem(this.#pointer, "finished");
        this.#render();
    }

    restart(event) {
        this.#quiz.forEach(problem => {
            localStorage.removeItem(`${this.#pointer}-problem${problem.id}-selection`);
            localStorage.removeItem(`${this.#pointer}-problem${problem.id}-answer`);
        });
        localStorage.setItem(this.#pointer, 0);
        localStorage.removeItem(`${this.#pointer}-current`);
        this.#render();
    }

    collect(event) {

    }

    #renderResult() {
        let correct = 0, wrong = 0, skipped = 0;

        this.#quiz.forEach(problem => {
            const answer = localStorage.getItem(`${this.#pointer}-problem${problem.id}-answer`);
            if (answer === null) {
                skipped++;
            } else {
                if (answer == problem.answer) correct++
                else wrong++;
            }
        });

        this.shadowRoot.getElementById('correct').textContent = correct;
        this.shadowRoot.getElementById('wrong').textContent = wrong;
        this.shadowRoot.getElementById('skipped').textContent = skipped;
        this.shadowRoot.getElementById('score').textContent = this.#quiz.length > 0 ? Math.round((correct - wrong) / this.#quiz.length * 100) + "%" : "0%";

        this.shadowRoot.getElementById('restart').disabled = localStorage.getItem(this.#pointer) === "completed";
        this.shadowRoot.getElementById('restart').style.textDecorationLine = localStorage.getItem(this.#pointer) === "completed" ? "line-through" : "none";
        this.shadowRoot.getElementById('collect').disabled = true;
        this.shadowRoot.getElementById('collect').style.textDecorationLine = localStorage.getItem(this.#pointer) === "completed" ? "line-through" : "none";
    }

    #renderProblem() {
        const current = Number(localStorage.getItem(`${this.#pointer}-current`));
        const problem = this.#quiz[current] || {};
        const choices = document.createDocumentFragment();

        if (problem.choices) {
            problem.choices.forEach((choice, answer) => {
                const selection = localStorage.getItem(`${this.#pointer}-problem${problem.id}-selection`);
                const li = document.createElement('li');
                li.id = answer;
                li.innerHTML = choice;
                li.onclick = this.#select.bind(this, problem.id, answer);
                if (answer == selection) li.classList.add('selected');
                if (localStorage.getItem(`${this.#pointer}-problem${problem.id}-answer`)) li.classList.add(answer === problem.answer ? 'correct' : 'wrong');
                choices.append(li);
            });
        }

        this.shadowRoot.getElementById('current').textContent = problem.question ? current + 1 : 0;
        this.shadowRoot.getElementById('question').innerHTML = problem.question || "TBA";
        this.shadowRoot.querySelector('ol').replaceChildren(choices);
        this.#renderButtons(current, problem);
    }

    #renderButtons(current, problem) {
        const answer = localStorage.getItem(`${this.#pointer}-problem${problem.id}-answer`);

        this.shadowRoot.getElementById('previous').style.display = current === 0 ? 'none' : 'inline-block';
        this.shadowRoot.getElementById('next').style.display = current < this.#quiz.length - 1 ? 'inline-block' : 'none';
        this.shadowRoot.getElementById('next').textContent = answer ? "Next Question" : "Skip Question";
        this.shadowRoot.getElementById('submit').style.display = localStorage.getItem(`${this.#pointer}-problem${problem.id}-selection`) ? 'inline-block' : 'none';
        this.shadowRoot.getElementById('submit').textContent = localStorage.getItem(`${this.#pointer}-problem${problem.id}-answer`) ? (answer == problem.answer ? "Correct" : "Wrong") : "Submit Answer";
        this.shadowRoot.getElementById('submit').disabled = answer;

        this.shadowRoot.getElementById('submit').classList.remove("correct", "wrong");
        if (answer) this.shadowRoot.getElementById('submit').classList.add(answer == problem.answer ? "correct" : "wrong");
    }

    #select(id, answer, event) {
        //localStorage.setItem(`${this.#pointer}-problem${id}-selection`, event.target.id); // race condition
        localStorage.setItem(`${this.#pointer}-problem${id}-selection`, answer);
        this.#renderProblem();
    }

    submit(event) {
        const problem = this.#quiz[Number(localStorage.getItem(`${this.#pointer}-current`))];
        localStorage.setItem(`${this.#pointer}-problem${problem.id}-answer`, localStorage.getItem(`${this.#pointer}-problem${problem.id}-selection`));
        this.#renderProblem();
    }

    next(event) {
        localStorage.setItem(`${this.#pointer}-current`, Number(localStorage.getItem(`${this.#pointer}-current`)) + 1);
        this.#renderProblem();
    }

    previous(event) {
        localStorage.setItem(`${this.#pointer}-current`, Number(localStorage.getItem(`${this.#pointer}-current`)) - 1);
        this.#renderProblem();
    }
}

customElements.define("sw-game", SwGame);