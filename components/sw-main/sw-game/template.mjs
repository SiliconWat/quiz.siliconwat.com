const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-game/shadow.css">
    <header>
        <h1><a id="course"></a></h1>
        <h2><a id="chapter"></a></h2>
        <h3><a id="title"></a></h3>
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
        <section>
            <h4>Reward Summary</h4>
        </section>
        <section>
            <ul>
                <li class="corrects">Correct: <span id="correct"></span></li>
                <li class="wrongs">Wrong: <span id="wrong"></span></li>
                <li class="skips">Skipped: <span id="skipped"></span></li>
                <hr>
                <li class="score">Score <span id="score"></span></li>
            </ul>
        </section>
        <section>
            <button id="restart" onclick="this.getRootNode().host.restart(event)">Retake Quiz</button>
            <button id="collect">Collect Coins</button>
        </section>
    </footer>
`;

export default template;