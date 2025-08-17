import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hey, I'm</p>
    <h1>Manuel Caro</h1>
    <p>I'm a software development student living in Almería, Spain. I currently combine my current job (hydroelectric power plant specialist) with my software development studies (DAM & Full Stack Development). I enjoy creating content for the internet, whether it's websites, apps, or anything else. I've been studying for a year and am gaining significant experience and valuable knowledge in various fields through my projects and work.</p>
    <a href="mailto:manuelcaro.dev@gmail.com">Say hi →</a>
    </section>`;
};
