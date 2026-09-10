"use client";

import { useEffect, useState } from "react";

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (id: string) => void;
}

export default function Navbar({
  activeSection = "home",
  onNavigate,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 25);

      // Always show navbar near the top of the page
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (
        currentScrollY > lastScrollY &&
        currentScrollY - lastScrollY > 6
      ) {
        // Scrolling DOWN -> hide navbar & close mobile menu
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else if (
        currentScrollY < lastScrollY &&
        lastScrollY - currentScrollY > 6
      ) {
        // Scrolling UP -> reveal navbar
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "project", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const targetY =
          id === "home"
            ? 0
            : element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    }
  };

  return (
    <header className="header-wrapper">
      <nav className="header-capsule" aria-label="Main navigation">
        {/* Desktop Nav Links */}
        <ul className="nav-links">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`nav-link-item ${
                    isActive ? "nav-link-active" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right CTA / Quick Actions */}
        <div className="nav-right-actions">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "contact")}
            className="nav-cta-btn"
          >
            <span>Let&apos;s Talk</span>
            <i className="bi bi-arrow-up-right"></i>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <i className={`bi ${mobileMenuOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="nav-mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`nav-mobile-item ${
                activeSection === item.id ? "nav-mobile-item-active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="nav-mobile-footer">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "contact")}
              className="nav-cta-btn w-full"
            >
              <span>Get in Touch</span>
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
