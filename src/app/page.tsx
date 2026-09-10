"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import StickyNav from "@/components/StickyNav";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("project");

  useEffect(() => {
    const sectionIds = ["project", "skills", "about", "contact"];

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection("contact");
        return;
      }

      const threshold = 300;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= threshold) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const targetY =
      id === "home"
        ? 0
        : element.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    setActiveSection(id);
    if (history.replaceState) {
      history.replaceState(null, "", "#" + id);
    }
  };

  return (
    <>
      <Navbar />
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
              <About />
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
