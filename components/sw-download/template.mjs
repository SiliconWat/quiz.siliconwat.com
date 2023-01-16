import { QUIZ as ORIGIN } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-download/shadow.css">
    <footer>
        <p><strong>SW Coins</strong> coming soon...</p>
		<p><a href="https://twitter.com/siliconwat">Follow on Twitter</a> for real-time updates!</p>
    </footer>
`;

export default template;