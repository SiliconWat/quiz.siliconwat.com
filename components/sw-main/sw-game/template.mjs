const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-game/shadow.css">
    <header>
        <h1 id="course"></h1>
        <h2 id="chapter"></h2>
    </header>
    <main>
        <section>
            <h3>QUESTION <span id="current"></span> OF <span id="total"></span></h3>
            <p>No Time Limit</p>
        </section>
        <section>
            <p id="question"></p>
            <ol></ol>
        </section>
        <section>
            <button>Previous Question</button>
            <button>Submit Answer => Correct / Wrong</button>
            <button>Next => Skip Question</button>
            <button>Finish</button>
        </section>
    </main>
    <footer>
        <h3>Correct: <span id="correct"></span></h3>
        <h3>Wrong: <span id="wrong"></span></h3>
        <h3>Skipped: <span id="skipped"></span></h3>
        <h2>Score: <span id="score"></span></h2>
        <button>Restart Quiz</button>
    </footer>
`;

export default template;