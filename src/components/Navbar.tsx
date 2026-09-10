import { portfolioData } from "../data/portfolio";

export default function Navbar() {
  return (
    <div className="header">
      <nav>
        <ul className="nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="header-social">
        <a href={`mailto:${portfolioData.contact.email}`} aria-label="Email">
          <i className="bi bi-envelope"></i>
        </a>
        <a
          href={portfolioData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href={portfolioData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href={portfolioData.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
        <a
          href={portfolioData.contact.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <i className="bi bi-facebook"></i>
        </a>
      </div>
    </div>
  );
}
