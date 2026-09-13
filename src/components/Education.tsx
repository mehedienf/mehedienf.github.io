"use client";
import { useState } from "react";
import { portfolioData } from "../data/portfolio";

export default function Education() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (idx: number) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

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
          portfolioData.education.map((edu, idx) => {
            const isExpanded = !!expanded[idx];
            const hasDetails = edu.description || (edu.highlights && edu.highlights.length > 0);

            return (
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

                  {/* Details Section */}
                  {isExpanded && hasDetails && (
                    <div className="education-details-wrap">
                      {edu.description && (
                        <p className="education-desc">{edu.description}</p>
                      )}

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
                  )}

                  {hasDetails && (
                    <div className="education-toggle-container">
                      <button
                        onClick={() => toggleExpand(idx)}
                        className="education-toggle-btn"
                      >
                        {isExpanded ? "Hide Details" : "Show Details"}
                        <i className={`bi bi-chevron-${isExpanded ? "up" : "down"}`}></i>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
