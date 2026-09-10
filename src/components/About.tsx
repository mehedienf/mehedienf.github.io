import { portfolioData } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="about content">
      <div className="section-header">
        <span className="section-badge">
          <i className="bi bi-person-badge"></i> 03 / Background
        </span>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate developer creating accessible, modern, and high-performance
          web applications.
        </p>
        <div className="section-divider"></div>
      </div>

      <div className="about-bio-card">
        <p>{portfolioData.about.description}</p>
      </div>
    </section>
  );
}
