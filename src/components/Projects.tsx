import Image from "next/image";
import { portfolioData } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="project" className="project content">
      <div className="section-header">
        <h2 className="section-badge">
          <i className="bi bi-grid-1x2"></i> Projects
        </h2>
        <p className="section-subtitle">
          A showcase of full-stack web applications, interactive interfaces, and
          modern UI solutions.
        </p>
        <div className="section-divider"></div>
      </div>
      <div className="project-list">
        {portfolioData.projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <div className="project-card-logo">
              {proj.logo ? (
                <div className="project-logo-image-box">
                  <Image
                    src={proj.logo}
                    alt={`${proj.title} Logo`}
                    fill
                    className="project-logo-img"
                    unoptimized
                  />
                </div>
              ) : (
                <div
                  className="project-logo-custom-box"
                  style={{
                    background:
                      proj.iconGradient ||
                      "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.25))",
                  }}
                >
                  <i className={`bi ${proj.icon || "bi-app-indicator"}`}></i>
                  <span className="project-logo-hint">Custom Icon</span>
                </div>
              )}
            </div>

            <div className="project-card-info">
              <h3 className="project-card-title">{proj.title}</h3>
              <p className="project-card-desc">{proj.description}</p>

              <div className="project-card-actions">
                {proj.view && (
                  <a
                    href={proj.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    <i className="bi bi-eye"></i> View
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    <i className="bi bi-github"></i> GitHub
                  </a>
                )}
                {proj.details && (
                  <a
                    href={proj.details}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    <i className="bi bi-info-circle"></i> Details
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
