"use client";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import StickyNav from "@/components/StickyNav";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("project");
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Immediately update active state in UI
    setActiveSection(id);
    isProgrammaticScroll.current = true;
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const targetY =
      id === "home"
        ? 0
        : element.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    if (history.replaceState) {
      history.replaceState(null, "", "#" + id);
    }

    // Release programmatic lock once smooth scroll is complete
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 850);
  };

  useEffect(() => {
    const sectionIds = ["project", "skills", "experience", "contact"];

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      // Check if page reached near bottom and contact is in view
      const contactEl = document.getElementById("contact");
      const isNearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (isNearBottom && contactEl) {
        const contactRect = contactEl.getBoundingClientRect();
        if (contactRect.top <= window.innerHeight * 0.8) {
          setActiveSection("contact");
          return;
        }
      }

      // Viewport reading focus line: 35% from viewport top
      const focusY = window.innerHeight * 0.35;
      let matchedSection = "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active if focus line is between element top and bottom
          if (rect.top <= focusY && rect.bottom >= focusY) {
            matchedSection = id;
            break;
          }
        }
      }

      // Fallback for gaps between sections: choose closest section above focusY
      if (!matchedSection) {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const id = sectionIds[i];
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= focusY) {
              matchedSection = id;
              break;
            }
          }
        }
      }

      if (matchedSection) {
        setActiveSection(matchedSection);
      }
    };

    const handleUserInteraction = () => {
      if (isProgrammaticScroll.current) {
        isProgrammaticScroll.current = false;
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleUserInteraction, { passive: true });
    window.addEventListener("touchmove", handleUserInteraction, {
      passive: true,
    });
    handleScroll();

    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.slice(1);
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        handleNavigate(id);
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchmove", handleUserInteraction);
      document.removeEventListener("click", handleLinkClick);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <div className="glow1"></div>

      <div className="w-full">
        <main>
          {/* Full-Width Hero Section */}
          <Hero />

          {/* Split-Screen Dual Column Layout */}
          <div className="split-layout-container">
            {/* Left Column: Sticky Navigator & Scrollspy */}
            <StickyNav
              activeSection={activeSection}
              onNavigate={handleNavigate}
            />

            {/* Right Column: Scrolling Content Feed */}
            <div className="content-feed">
              <Projects />
              <Skills />
              <Experience />
              <Contact />
            </div>
          </div>
        </main>
      </div>

      <div className="glow2"></div>
      <Footer />
    </>
  );
}
