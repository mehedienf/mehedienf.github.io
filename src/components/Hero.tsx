import Image from "next/image";
import { portfolioData } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="home content">
      <div className="home-info">
        {/* Greeting Badge */}
        <div className="hero-status-pill">
          <span className="hero-status-text">
            {portfolioData.hero.greeting}
          </span>
        </div>

        {/* Name - strictly in Bitcount Single font */}
        <h1 className="hero-name">{portfolioData.hero.name}</h1>

        {/* Role */}
        <div className="hero-role-wrapper">
          <span className="hero-role-title">{portfolioData.hero.role}</span>
        </div>

        {/* Brief Tagline / Bio */}
        <p className="hero-tagline">{portfolioData.hero.tagline}</p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a
            href={portfolioData.hero.resumeLink}
            download
            className="hero-btn hero-btn-primary"
          >
            <i className="bi bi-download"></i>
            <span>Download Resume</span>
          </a>
          <a href="#project" className="hero-btn hero-btn-secondary">
            <i className="bi bi-grid-1x2"></i>
            <span>Explore Projects</span>
          </a>
          <a href="#contact" className="hero-btn hero-btn-outline">
            <i className="bi bi-chat-left-text"></i>
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Quick Social Links */}
        <div className="hero-social-row">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hero-social-icon"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hero-social-icon"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            aria-label="Email"
            className="hero-social-icon"
          >
            <i className="bi bi-envelope-at"></i>
          </a>
          <a
            href={portfolioData.contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hero-social-icon"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="home-image">
        <div className="hero-image-wrapper">
          <div className="hero-image-glow" aria-hidden="true"></div>
          <Image
            src={portfolioData.hero.image}
            alt={portfolioData.hero.name}
            width={400}
            height={533}
            priority
            className="hero-person-img"
          />
        </div>
      </div>
    </section>
  );
}
