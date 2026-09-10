"use client";

interface NavSection {
  id: string;
  num: string;
  label: string;
  desc: string;
  icon: string;
}

const SECTIONS: NavSection[] = [
  {
    id: "project",
    num: "01",
    label: "Featured Projects",
    desc: "Applications, responsive UI & full-stack solutions",
    icon: "bi-grid-1x2",
  },
  {
    id: "skills",
    num: "02",
    label: "Skills & Stack",
    desc: "Frontend, backend, databases & modern tools",
    icon: "bi-cpu",
  },
  {
    id: "about",
    num: "03",
    label: "About Me",
    desc: "Personal background, philosophy & workflow",
    icon: "bi-person-badge",
  },
  {
    id: "contact",
    num: "04",
    label: "Get In Touch",
    desc: "Collaborations, freelance inquiries & direct contact",
    icon: "bi-chat-left-text",
  },
];

interface StickyNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function StickyNav({
  activeSection,
  onNavigate,
}: StickyNavProps) {
  return (
    <aside className="sticky-sidebar">
      <div className="sticky-sidebar-inner">
        <div className="sticky-nav-header">
          <span className="sticky-nav-eyebrow">
            <span className="live-pulse"></span>
            PORTFOLIO OVERVIEW
          </span>
          <h3 className="sticky-nav-main-title">Index</h3>
        </div>

        <nav className="sticky-nav-list" aria-label="Portfolio sections">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => onNavigate(sec.id)}
                className={`sticky-nav-item ${isActive ? "active" : ""}`}
              >
                <div className="sticky-nav-indicator"></div>
                <div className="sticky-nav-content">
                  <div className="sticky-nav-top-row">
                    <span className="sticky-nav-num">{sec.num}</span>
                    <span className="sticky-nav-label">
                      <i className={`bi ${sec.icon}`}></i> {sec.label}
                    </span>
                  </div>
                  <p className="sticky-nav-desc">{sec.desc}</p>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
