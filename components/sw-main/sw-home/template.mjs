import { QUIZ as ORIGIN } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-home/shadow.css">
    <header>
        <h1 id="title"></h1>
    </header>
    <main>
        <section id="quiz">
            <p>These <strong>quizzes</strong> are designed to help you <em>check</em> your <strong>understanding</strong>.</p>
            <p>There is <strong>no</strong> <em>time limit</em>.</p>
            <p>You can <strong>retake</strong> the quizzes <em>as many times</em> as you like to earn the <em>maximum</em> <strong>SW Coins</strong> possible!</p>
        </section>
        <section id="code">
            <p>These <strong>exercises</strong> are developed to help you <em>practice</em> <strong>real coding</strong>.</p>
            <p>They are <em>interactive</em> so you can see the <strong>results</strong> as you code and <strong>check</strong> if your solutions are correct.</p>
            <p>Line-by-line <strong>hints</strong> will guide you <em>naturally</em> towards the <strong>solutions</strong> should you need help.</p>
            <p>There is <strong>no</strong> <em>time limit</em>.</p>
            <p>You can <strong>redo</strong> the exercises <em>as many times</em> as you like to earn the <em>maximum</em> <strong>SW Coins</strong> possible!</p>
        </section>
        <section id="flashcard">
            <p>These <strong>flashcards</strong> are created to help you <em>remember</em> <strong>code syntaxes</strong>.</p>
            <p>There are <em>three levels</em>: <strong>Junior</strong>, <strong>Mid</strong>, and <strong>Senior</strong></p>
            <p>The more <em>difficult</em> the level, the <strong>less time</strong> you have.</p>
            <p>But also, the more <strong>SW Coins</strong> you will earn!</p>
            <p>You can <strong>replay</strong> the games <em>as many times</em> as you like to earn the <em>maximum</em> <strong>SW Coins</strong> possible!</p>
        </section>
    </main>
    <footer>
        <p>To <strong>collect</strong> your reward, first register your <em>humanity profile</em> at <a href="https://heartbank.me">HeartBank.me</a></p>
        <p><strong>SW Coins</strong> are minted on the <a href="https://heartbank.net/#siliconwat">Silicon Wat Blockchain</a>, a <em>sub</em> blockchain under the <a href="https://heartbank.net"><strong>HeartBank <em>Supra</em> Blockchain</strong></a>.</p>
        <p>As such, your <strong>SW Coins</strong> can be <em>exchanged</em> or <em>transferred</em> within the <strong>HeartBank</strong> <em>ecosystem of blockchains</em> at any time.</p>
    </footer>  
`;

export default template;