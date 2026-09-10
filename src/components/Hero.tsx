import Image from "next/image";
import { portfolioData } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="home content">
      <div className="home-info">
        <h1>{portfolioData.hero.name}</h1>
        <p>Hi, I&apos;m {portfolioData.hero.name}, {portfolioData.hero.role}</p>
        <a href={portfolioData.hero.resumeLink} download>
          <button type="button">
            <i className="bi bi-download" style={{ padding: "0 5px 0 0" }}></i>Download Resume
          </button>
        </a>
      </div>
      <div className="home-image">
        <Image src={portfolioData.hero.image} alt={portfolioData.hero.name} width={420} height={420} priority />
      </div>
    </section>
  );
}
