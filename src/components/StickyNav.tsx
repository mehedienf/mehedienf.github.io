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
    id: "experience",
    label: "Experience",
    icon: "bi-briefcase",
  },
  {
    id: "education",
    label: "Education",
    icon: "bi-mortarboard",
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
  const activeIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  // Default to 0 (Projects) if on hero or unknown section so layout starts with Projects at top & rest at bottom
  const currentActiveIdx = activeIndex >= 0 ? activeIndex : 0;

  return (
    <aside className="sticky-sidebar">
      <div className="sticky-sidebar-inner">
        <nav className="sticky-nav-list" aria-label="Portfolio sections">
          {SECTIONS.map((sec, idx) => {
            const isActive = activeSection === sec.id;
            // The split connector sits right between the active tab and the bottom group
            const isSplitConnector = idx === currentActiveIdx + 1;

            return (
              <React.Fragment key={sec.id}>
                {idx > 0 && (
                  <div
                    className={`nav-connector ${
                      isSplitConnector ? "split-connector" : ""
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
