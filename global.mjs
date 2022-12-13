export const ORIGIN = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5651" : "https://quiz.siliconwat.com";
export const THONLY = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5500" : "https://thonly.org";
export const CAMPUS = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5620" : "https://siliconwat.org";
export const FRONTEND = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5611" : "https://frontend.siliconwat.com";
export const SHOWCASE = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5650" : "https://showcase.siliconwat.org";

export const BACKGROUND = "radial-gradient(circle at bottom left, #773344 0%, #E3B5A4 100%)";

export const YEAR = 2022;

export async function getData(url) {
    let cache = localStorage.getItem(url);
    if (cache) {
        return JSON.parse(cache);
    } else {
        try {
            cache = await (await fetch(url, { cache: "no-store" })).json();
        } catch(error) {
            cache = {};
        }
        localStorage.setItem(url, JSON.stringify(cache))
        return cache;
    }  
}