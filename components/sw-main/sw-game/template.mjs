import { QUIZ as ORIGIN } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-game/shadow.css">
    <header>
        <h1><a id="course"></a></h1>
        <h2><a id="chapter"></a></h2>
        <h3><a id="title"></a></h3>
    </header>
    <sw-card></sw-card>
`;

export default template;