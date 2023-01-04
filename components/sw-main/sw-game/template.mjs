const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-game/shadow.css">
    <header>
        <h1 id="course"></h1>
        <h2 id="chapter"></h2>
        <h3 id="title"></h3>
    </header>
    <main>
        <section>
            <h4>Question <span id="current"></span> of <span id="total"></span></h4>
            <small>( <em>No Time Limit</em> )</small>
            <aside>
                <button id="previous" onclick="this.getRootNode().host.previous(event)">Previous Question</button>
                <button id="next" onclick="this.getRootNode().host.next(event)"></button>
            </aside>
        </section>
        <section>
            <p id="question"></p>
            <ol type="A"></ol>
        </section>
        <section>
            <button id="submit" onclick="this.getRootNode().host.submit(event)"></button>
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