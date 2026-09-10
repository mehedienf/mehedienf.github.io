import { portfolioData } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="experience content">
      <div className="section-header">
        <span className="section-badge">
          <i className="bi bi-briefcase"></i> 03 / Career & Experience
        </span>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey, key roles, companies I&apos;ve worked with,
          and current ongoing positions.
        </p>
        <div className="section-divider"></div>
      </div>

      <div className="experience-timeline">
        {portfolioData.experiences.map((exp, idx) => (
          <div className="experience-card" key={idx}>
            <div className="experience-content-box">
              {/* Header: Role, Company, Period */}
              <div className="experience-card-header">
                <div>
                  <div className="experience-role-row">
                    <h3 className="experience-role">{exp.role}</h3>
                  </div>
                  <div className="experience-company-meta">
                    <span className="experience-company">
                      <i className="bi bi-building"></i>
                      {exp.company}
                    </span>
                    <span className="experience-meta-sep">•</span>
                    <span className="experience-location">
                      <i className="bi bi-geo-alt"></i>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="experience-period-badge">
                  <i className="bi bi-calendar3"></i>
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="experience-desc">{exp.description}</p>

              {/* Achievements */}
              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="experience-achievements">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx}>
                      <i className="bi bi-arrow-right-short"></i>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Stack Pills */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="experience-tech-row">
                  {exp.technologies.map((tech, tIdx) => (
                    <span className="experience-tech-tag" key={tIdx}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
