import { portfolioData } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="skills content">
      <div className="section-header">
        <span className="section-badge">
          <i className="bi bi-cpu"></i> 02 / Skills & Stack
        </span>
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          A comprehensive breakdown of the core technologies, frameworks, and
          modern tools I specialize in.
        </p>
        <div className="section-divider"></div>
      </div>

      <div className="skills-categories-grid">
        {portfolioData.about.skillsCategories.map((category, idx) => (
          <div className="skill-category-card" key={idx}>
            <div className="skill-category-header">
              <div className="skill-category-icon">
                <i className={`bi ${category.icon}`}></i>
              </div>
              <div>
                <h4 className="skill-category-title">{category.title}</h4>
              </div>
            </div>
            <p className="skill-category-desc">{category.description}</p>
            <div className="skill-badges">
              {category.skills.map((skill, sIdx) => (
                <div className="skill-badge-item" key={sIdx}>
                  <div className="skill-badge-info">
                    <i className={`bi ${skill.icon}`}></i>
                    <span>{skill.name}</span>
                  </div>
                  <span className="skill-badge-level">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
