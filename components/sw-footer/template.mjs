import { QUIZ as ORIGIN, THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-footer/shadow.css">
    <link rel="stylesheet" href="${ORIGIN}/components/sw-footer/shadow.css">
    <nav>
        <main>
            <section>
                <sw-donors></sw-donors>
            </section>
            <section>
                <div>
                    <h5>Thank</h5>
                    <ul>
                        <li><a href="https://dear.kiitos.earth/#SiliconWat">Kiitos</a></li>
                    </ul> 
                </div>
                <div>
                    <h5>Donate</h5>
                    <ul>
                        <li><a href="https://heartbank.fund/#SiliconWat">HeartBank</a></li>
                        <li><a href="https://github.com/sponsors/SiliconWat">GitHub</a></li>
                        <li><a href="https://medium.com/@thonly/membership">Medium</a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>SW Coins</h5>
                    <ul>
                        <li><a href="https://heartbank.me">HeartBank Wallet</a></li>
                        <li><a href="https://heartbank.exchange/#sw">HeartBank Exchange</a></li>
                        <li><a href="https://heartbank.cloud/#chrome">Chrome Extension</a></li>
                    </ul> 
                </div>
                <div>
                    <h5>Remote Jobs</h5>
                    <ul>
                        <li><a href="https://alumni.siliconwat.org">Volunteer Tutor</a></li>
                        <li><a href="https://siliconwat.dev/#earn">Paid Freelancer</a></li>
                        <li><a href="https://calendar.thonly.org/#interview">Apply for Interview</a></li>
                    </ul>
                </div>
            </section>
        </main>
        <footer>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="ru" disabled>Russian</option>
                <!--<option value="es" disabled>Spanish</option>
                <option value="zh" disabled>Chinese</option>-->
            </select>
            <small><a href="https://siliconwat.com">Silicon Wat University</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;