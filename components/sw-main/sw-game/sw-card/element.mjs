import template from './template.mjs';

class SwCard extends HTMLElement {
    #pointer;
    #quiz;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render(pointer=this.#pointer, quiz=this.#quiz) {
        this.#pointer = pointer;
        this.#quiz = quiz;
        this.shadowRoot.querySelectorAll("main, footer").forEach(element => element.style.display = 'none');
        
        switch (localStorage.getItem(this.#pointer)) {
            case "finished":
                this.#renderResult();
                break;
            case "rewarded":
                this.#renderResult();
                break;
            case "completed":
                this.#renderResult();
                break;
            default:
                this.#renderProblem();
        }
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
        
        const score = this.#quiz.length > 0 ? Math.round((correct - wrong) / this.#quiz.length * 100) : 0;
        const Score = this.#setScore(score);

        this.shadowRoot.getElementById('correct').textContent = correct;
        this.shadowRoot.getElementById('wrong').textContent = wrong;
        this.shadowRoot.getElementById('skipped').textContent = skipped;
        this.shadowRoot.getElementById('high').textContent = score > Score ? "New High" : "Score";
        this.shadowRoot.getElementById('highest').textContent = Score + "%";
        this.shadowRoot.getElementById('score').textContent = score + "%";

        this.shadowRoot.getElementById('restart').disabled = localStorage.getItem(this.#pointer) === "completed";
        this.shadowRoot.getElementById('restart').style.textDecorationLine = localStorage.getItem(this.#pointer) === "completed" ? "line-through" : "none";
        this.shadowRoot.getElementById('collect').disabled = true;
        this.shadowRoot.getElementById('collect').style.textDecorationLine = localStorage.getItem(this.#pointer) === "completed" ? "line-through" : "none";

        this.shadowRoot.querySelector('footer').style.display = 'block';
    }

    #setScore(score) {
        let Score = localStorage.getItem(`${this.#pointer}-score`);
        Score = Score === null ? score : Number(Score);
        localStorage.setItem(`${this.#pointer}-score`, Math.max(Score, score));
        return Score;
    }

    #shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    #renderProblem() {
        const current = Number(localStorage.getItem(`${this.#pointer}-current`));
        const problem = this.#quiz[current] || {};
        const choices = document.createDocumentFragment();

        if (problem.choices) {
            this.#shuffle([...problem.choices]).forEach(choice => {
                const selection = localStorage.getItem(`${this.#pointer}-problem${problem.id}-selection`);
                const li = document.createElement('li');
                li.id = problem.choices.indexOf(choice); // answer
                li.innerHTML = choice;
                li.onclick = this.#select.bind(this, problem.id, li.id);
                if (li.id == selection) li.classList.add('selected');
                if (localStorage.getItem(`${this.#pointer}-problem${problem.id}-answer`)) li.classList.add(li.id === problem.answer ? 'correct' : 'wrong');
                choices.append(li);
            });
        }

        this.shadowRoot.getElementById('total').textContent = this.#quiz.length;
        this.shadowRoot.getElementById('current').textContent = problem.question ? current + 1 : 0;
        this.shadowRoot.getElementById('question').innerHTML = problem.question || "TBA";
        this.shadowRoot.querySelector('ol').replaceChildren(choices);
        this.#renderButtons(current, problem);
        this.shadowRoot.querySelector('main').style.display = 'block';
    }

    #renderButtons(current, problem) {
        const answer = localStorage.getItem(`${this.#pointer}-problem${problem.id}-answer`);

        this.shadowRoot.getElementById('previous').style.display = current === 0 ? 'none' : 'inline-block';
        this.shadowRoot.getElementById('next').style.display = current < this.#quiz.length - 1 ? 'inline-block' : 'none';
        this.shadowRoot.getElementById('next').textContent = answer ? "Next Question" : "Skip Question";
        this.shadowRoot.getElementById('submit').style.display = localStorage.getItem(`${this.#pointer}-problem${problem.id}-selection`) ? 'inline-block' : 'none';
        this.shadowRoot.getElementById('submit').textContent = localStorage.getItem(`${this.#pointer}-problem${problem.id}-answer`) ? (answer == problem.answer ? "Correct" : "Wrong") : "Submit Answer";
        this.shadowRoot.getElementById('submit').disabled = answer;
        this.shadowRoot.getElementById('finish').style.display = problem.question ? 'block' : 'none';

        this.shadowRoot.getElementById('submit').classList.remove("correct", "wrong");
        if (answer) this.shadowRoot.getElementById('submit').classList.add(answer == problem.answer ? "correct" : "wrong");
    }

    #select(id, answer, event) {
        if (localStorage.getItem(`${this.#pointer}-problem${id}-answer`) === null) {
            //localStorage.setItem(`${this.#pointer}-problem${id}-selection`, event.target.id); // race condition
            localStorage.setItem(`${this.#pointer}-problem${id}-selection`, answer);
            this.#renderProblem();
        }
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

    finish(event) {
        localStorage.setItem(this.#pointer, "finished");
        this.render();
    }

    restart(event) {
        this.#quiz.forEach(problem => {
            localStorage.removeItem(`${this.#pointer}-problem${problem.id}-selection`);
            localStorage.removeItem(`${this.#pointer}-problem${problem.id}-answer`);
        });
        localStorage.setItem(this.#pointer, 0);
        localStorage.removeItem(`${this.#pointer}-current`);
        this.render();
    }

    collect(event) {

    }
}

customElements.define("sw-card", SwCard);