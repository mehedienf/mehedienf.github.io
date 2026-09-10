import { portfolioData } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="project" className="project content">
      <div className="section-header">
        <span className="section-badge">
          <i className="bi bi-grid-1x2"></i> 01 / Portfolio
        </span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of full-stack web applications, interactive interfaces, and
          modern UI solutions.
        </p>
        <div className="section-divider"></div>
      </div>
      <div className="project-grid">
        {portfolioData.projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.github} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i> GitHub
            </a>
            <a href={proj.live} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-box-arrow-up-right"></i> Live
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
