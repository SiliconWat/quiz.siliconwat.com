export const ORIGIN = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5651" : "https://quiz.siliconwat.com";
export const THONLY = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5500" : "https://thonly.org";
export const CAMPUS = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5620" : "https://siliconwat.org";
export const FRONTEND = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5611" : "https://frontend.siliconwat.com";
export const SHOWCASE = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5650" : "https://showcase.siliconwat.org";

export const GAME = (() => {
    if (window.location.port === "5651" || window.location.hostname === "quiz.siliconwat.com") return ["quiz", "Programming Concept Quizzes", "radial-gradient(circle at bottom left, #773344 0%, #E3B5A4 100%)"];
    if (window.location.port === "5652" || window.location.hostname === "code.siliconwat.com") return ["code", "Interactive Coding Exercises", "radial-gradient(circle at bottom left, #DBCBD8 0%, #564787 100%)"];
    if (window.location.port === "5653" || window.location.hostname === "flashcard.siliconwat.com") return ["flashcard", "Syntax Flashcard Games", "radial-gradient(circle at bottom left, #9AD4D6 0%, #101935 100%)"];
    return [null];
})();