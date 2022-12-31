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
            <button id="previous" onclick="this.getRootNode().host.previous(event)">Previous Question</button>
            <button id="submit" onclick="this.getRootNode().host.submit(event)"></button>
            <button id="next" onclick="this.getRootNode().host.next(event)"></button>
            <button onclick="this.getRootNode().host.finish(event)">Finish</button>
        </section>
    </main>
    <footer>
        <h3>Correct: <span id="correct"></span></h3>
        <h3>Wrong: <span id="wrong"></span></h3>
        <h3>Skipped: <span id="skipped"></span></h3>
        <h2>Score: <span id="score"></span></h2>
        <button id="collect">Collect SW Coins</button>
        <button id="restart" onclick="this.getRootNode().host.restart(event)">Restart Quiz</button>
    </footer>
`;

export default template;