import { portfolioData } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="education content">
      <div className="section-header">
        <h2 className="section-badge">
          <i className="bi bi-mortarboard"></i> Academic Qualification
        </h2>
        <p className="section-subtitle">
          My academic background, degrees, educational achievements, and key coursework.
        </p>
        <div className="section-divider"></div>
      </div>

      <div className="education-timeline">
        {portfolioData.education &&
          portfolioData.education.map((edu, idx) => (
            <div className="education-card" key={idx}>
              <div className="education-content-box">
                {/* Header: Degree, Institution, Period & Grade */}
                <div className="education-card-header">
                  <div>
                    <div className="education-degree-row">
                      <h3 className="education-degree">{edu.degree}</h3>
                    </div>
                    <div className="education-inst-meta">
                      <span className="education-institution">
                        <i className="bi bi-mortarboard-fill"></i>
                        {edu.institution}
                      </span>
                      {edu.location && (
                        <>
                          <span className="education-meta-sep">•</span>
                          <span className="education-location">
                            <i className="bi bi-geo-alt"></i>
                            {edu.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="education-badges-group">
                    {edu.grade && (
                      <div className="education-grade-badge">
                        <i className="bi bi-award"></i>
                        <span>{edu.grade}</span>
                      </div>
                    )}
                    <div className="education-period-badge">
                      <i className="bi bi-calendar3"></i>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                {edu.description && (
                  <p className="education-desc">{edu.description}</p>
                )}

                {/* Highlights / Specializations */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="education-highlights">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx}>
                        <i className="bi bi-check2-circle"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
