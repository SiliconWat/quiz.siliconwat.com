import { QUIZ as ORIGIN, THONLY } from "https://thonly.org/global.mjs";
import "./sw-bar/element.mjs";

const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-header/shadow.css">
    <link rel="stylesheet" href="${ORIGIN}/components/sw-header/shadow.css">
    <header>
        <section>
            <a href="https://siliconwat.com"><img src="siliconwat.png"></a>
            <h1><a id="game"></a></h1>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <ul></ul>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="ru" disabled>Russian</option>
                <!--<option value="es" disabled>Spanish</option>
                <option value="zh" disabled>Chinese</option>-->
            </select>
        </aside>
    </header>
`;

export default template;