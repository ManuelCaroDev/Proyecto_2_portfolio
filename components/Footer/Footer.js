import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/instagram.png", "Instagram", "https://www.instagram.com/manuelcarotrigo/")}
${Button("/icons/github.png", "GitHub", "https://github.com/ManuelCaroDev")}
${Button("/icons/linkedin.png", "LinkedIn", "https://es.linkedin.com/in/manuel-caro-trigo-556721317")}
${Button("/icons/gmail.png", "Mail", "mailto:manuelcaro.dev@gmail.com")}
</div>
`;