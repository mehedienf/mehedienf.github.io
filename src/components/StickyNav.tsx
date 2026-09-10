"use client";

interface NavSection {
  id: string;
  label: string;
}

const SECTIONS: NavSection[] = [
  {
    id: "project",
    label: "Projects",
  },
  {
    id: "skills",
    label: "Skills",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "contact",
    label: "Contact",
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
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => onNavigate(sec.id)}
                className={`sticky-nav-pill ${isActive ? "active" : ""}`}
              >
                {sec.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
