const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="/"><img src="siliconwat.png"></a>
            <a href="/"><h1>Programming Concept Quizzes</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <nav>
            <ul>
                <li>
                    <h3>Frontend Music Course</h3>
                    <div>
                        <a href="#Frontend.SiliconWat.org"><button class="cohort">Progress bar here</button></a>
                        <h4>Unit 1: HTML/CSS/JavaScript Orchestra</h4>
                        <menu>
                            <li>
                                <input id="chapter1" type="checkbox" oninput="checkMark(this)">
                                <a>Chapter 1</a>
                            </li>
                            <li>
                                <input id="chapter1" type="checkbox" oninput="checkMark(this)">
                                <a>Chapter 2</a>
                            </li>
                            <li>
                                <input id="chapter1" type="checkbox" oninput="checkMark(this)">
                                <a>Chapter 3</a>
                            </li>
                        </menu>
                        <h4>Unit 2</h4>
                        <menu>
                            <li class="cohort">
                                <input id="chapter1" type="checkbox" oninput="checkMark(this)">
                                <a>Mock Interviews on YouTube</a>
                            </li>
                            <li class="cohort">
                                <input id="chapter1" type="checkbox" oninput="checkMark(this)">
                                <a>Remote Pair Programming on Discord</a>
                            </li>
                        </menu>
                        <h4>Unit 3</h4>
                        <menu>
                            <li class="cohort">
                                <input id="chapter1" type="checkbox" oninput="checkMark(this)">
                                <a>Students' Writings on Medium</a>
                            </li>
                            <li class="cohort">
                                <input id="chapter1" type="checkbox" oninput="checkMark(this)">
                                <a>Students' Solo Projects on Codepen</a>
                            </li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Backend Blockchain Course</h3>
                    <div>
                        <a href="#Backend.SiliconWat.org"><button class="cohort">Join: Remote Cohort Backend Program</button></a>
                        <h4>Learn</h4>
                        <menu>
                            <li><a>Watch Videos on Udemy</a></li>
                            <li><a>Read Textbook on Medium</a></li>
                            <li><a>Take Quizzes to Check Understanding</a></li>
                        </menu>
                        <h4>Practice</h4>
                        <menu>
                            <li><a>Podcast: Motivation & Coding Music</a></li>
                            <li><a>Interactive Coding Exercises</a></li>
                            <li class="cohort"><a>Remote Pair Programming on Discord</a></li>
                            <li class="cohort"><a>Students' Solo Projects on Replit</a></li>
                        </menu>
                        <h4>Review</h4>
                        <menu>
                            <li><a>Live Demo: Music Apps</a></li>
                            <li><a>Syntax Flashcards</a></li>
                            <li class="cohort"><a>Group Chat & Discussion Boards</a></li>
                            <li class="cohort"><a>Students' Writings on Medium</a></li>
                            <li class="cohort"><a>Mock Interviews on YouTube</a></li>
                        </menu>
                        <h4>Bonus: Advanced Lessons</h4>
                        <menu>
                            <li><a>Quantum Physics & Computing</a></li>
                            <li><a>Kiitos Programming Language</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>iOS Metaverse Course</h3>
                    <div>
                        <a href="#iOS.SiliconWat.org"><button class="cohort">Join: Remote Cohort iOS Program</button></a>
                        <h4>Learn</h4>
                        <menu>
                            <li><a>Watch Videos on Udemy</a></li>
                            <li><a>Read Textbook on Medium</a></li>
                            <li><a>Take Quizzes to Check Understanding</a></li>
                        </menu>
                        <h4>Practice</h4>
                        <menu>
                            <li><a>Podcast: Motivation & Coding Music</a></li>
                            <li><a>Interactive Coding Exercises</a></li>
                            <li class="cohort"><a>Remote Pair Programming on Discord</a></li>
                            <li class="cohort"><a>Students' Solo Projects on GitHub</a></li>
                        </menu>
                        <h4>Review</h4>
                        <menu>
                            <li><a>Live Demo: Music Apps</a></li>
                            <li><a>Syntax Flashcards</a></li>
                            <li class="cohort"><a>Group Chat & Discussion Boards</a></li>
                            <li class="cohort"><a>Students' Writings on Medium</a></li>
                            <li class="cohort"><a>Mock Interviews on YouTube</a></li>
                        </menu>
                        <h4>Bonus: Advanced Lessons</h4>
                        <menu>
                            <li><a>React Native</a></li>
                            <li><a>3D Animations</a></li>
                            <li><a>Deep Learning</a></li>
                        </menu>
                        <br>
                        <a href="#iOS.SiliconWat.com"><button>eLearn: iOS Metaverse Course</button></a>
                    </div>
                </li>
            </ul>
        </nav>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="es" disabled>Spanish</option>
                <option value="ru" disabled>Russian</option>
                <option value="zh" disabled>Chinese</option>
            </select>
        </aside>
    </header>
`;

export default template;