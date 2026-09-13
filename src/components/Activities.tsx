"use client";
import { useState } from "react";
import { portfolioData } from "../data/portfolio";

export default function Activities() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (idx: number) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="activities" className="activities content">
      <div className="section-header">
        <h2 className="section-badge">
          <i className="bi bi-stars"></i> Extra-Curricular Activities
        </h2>
        <p className="section-subtitle">
          Leadership, tech community involvement, hackathons, and collaborative initiatives.
        </p>
        <div className="section-divider"></div>
      </div>

      <div className="activities-timeline">
        {portfolioData.activities &&
          portfolioData.activities.map((act, idx) => {
            const isExpanded = !!expanded[idx];
            const hasDetails = act.description || (act.highlights && act.highlights.length > 0);

            return (
              <div className="activity-card" key={idx}>
                <div className="activity-content-box">
                  {/* Header: Title, Organization, Role & Period */}
                  <div className="activity-card-header">
                    <div>
                      <div className="activity-title-row">
                        <h3 className="activity-title">{act.title}</h3>
                      </div>
                      <div className="activity-org-meta">
                        <span className="activity-org">
                          <i className={`bi ${act.icon || "bi-stars"}`}></i>
                          {act.organization}
                        </span>
                        {act.role && (
                          <>
                            <span className="activity-meta-sep">•</span>
                            <span className="activity-role">
                              <i className="bi bi-person-badge"></i>
                              {act.role}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="activity-period-badge">
                      <i className="bi bi-calendar3"></i>
                      <span>{act.period}</span>
                    </div>
                  </div>

                  {/* Details Section */}
                  {isExpanded && hasDetails && (
                    <div className="activity-details-wrap">
                      {act.description && (
                        <p className="activity-desc">{act.description}</p>
                      )}

                      {act.highlights && act.highlights.length > 0 && (
                        <ul className="activity-highlights">
                          {act.highlights.map((item, hIdx) => (
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
                    <div className="activity-toggle-container">
                      <button
                        onClick={() => toggleExpand(idx)}
                        className="activity-toggle-btn"
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
