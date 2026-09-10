"use client";
import React from "react";

interface NavSection {
  id: string;
  label: string;
  icon: string;
}

const SECTIONS: NavSection[] = [
  {
    id: "project",
    label: "Projects",
    icon: "bi-grid-1x2",
  },
  {
    id: "skills",
    label: "Skills",
    icon: "bi-cpu",
  },
  {
    id: "about",
    label: "About",
    icon: "bi-person-badge",
  },
  {
    id: "contact",
    label: "Contact",
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
        <nav className="sticky-nav-list" aria-label="Portfolio sections">
          {SECTIONS.map((sec, idx) => {
            const isActive = activeSection === sec.id;
            const isPrevActive =
              idx > 0 && activeSection === SECTIONS[idx - 1].id;
            const isConnectedToActive = isActive || isPrevActive;

            return (
              <React.Fragment key={sec.id}>
                {idx > 0 && (
                  <div
                    className={`nav-connector ${
                      isConnectedToActive ? "expanded active-connector" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <span className="connector-string"></span>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => onNavigate(sec.id)}
                  className={`sticky-nav-pill ${isActive ? "active" : ""}`}
                >
                  <i className={`bi ${sec.icon} sticky-nav-pill-icon`}></i>
                  <span>{sec.label}</span>
                </button>
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
