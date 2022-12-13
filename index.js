import "/components/sw-header/element.mjs";

import "/components/sw-main/sw-home/element.mjs";
import "/components/sw-main/sw-quiz/element.mjs";
import "/components/sw-main/element.mjs";

import "/components/sw-footer/element.mjs";

import { FRONTEND, SHOWCASE, BACKGROUND } from "/global.mjs";
window.onload = async () => {
    await import(`${FRONTEND}/components/sw-music/element.mjs`);
    await import(`${SHOWCASE}/components/sw-coin/element.mjs`);
    //if (!window.TESTING) window.clearCache();
    
    await document.querySelector('sw-main').render();
    document.documentElement.style.backgroundImage = BACKGROUND;
    document.body.style.display = 'flex';
    await document.querySelector('sw-header').render();
};

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6SGQXV8W30');