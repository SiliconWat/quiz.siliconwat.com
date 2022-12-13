const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-quiz/shadow.css">
    <main>
        <h1 id="course"></h1>
        <h2 id="chapter"></h2>
    </main>
`;

export default template;