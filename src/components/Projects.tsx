"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { portfolioData } from "../data/portfolio";

type ProjectType = (typeof portfolioData.projects)[number];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null,
  );
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset active image index whenever a new project is selected
  useEffect(() => {
    setActiveImageIndex(0);
    setLightboxOpen(false);
  }, [selectedProject]);

  // Close modal or lightbox on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          setSelectedProject(null);
        }
      }
    };

    if (selectedProject || lightboxOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, lightboxOpen]);

  // Image navigation helpers
  const handlePrevImage = (total: number) => {
    setActiveImageIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNextImage = (total: number) => {
    setActiveImageIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section id="project" className="project content">
      <div className="section-header">
        <h2 className="section-badge">
          <i className="bi bi-grid-1x2"></i> Projects || Portfolio
        </h2>
        <p className="section-subtitle">
          A showcase of full-stack web applications, interactive interfaces, and
          modern UI solutions.
        </p>
        <div className="section-divider"></div>
      </div>

      <div className="project-list">
        {portfolioData.projects.map((proj, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => setSelectedProject(proj)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedProject(proj);
              }
            }}
          >
            <div className="project-card-logo">
              {proj.logo ? (
                <div className="project-logo-image-box">
                  <Image
                    src={proj.logo}
                    alt={`${proj.title} Logo`}
                    fill
                    className="project-logo-img"
                    unoptimized
                  />
                </div>
              ) : (
                <div
                  className="project-logo-custom-box"
                  style={{
                    background:
                      proj.iconGradient ||
                      "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.25))",
                  }}
                >
                  <i className={`bi ${proj.icon || "bi-app-indicator"}`}></i>
                  <span className="project-logo-hint">Custom Icon</span>
                </div>
              )}
            </div>

            <div className="project-card-info">
              <h3 className="project-card-title">{proj.title}</h3>
              <p className="project-card-desc">{proj.description}</p>

              <div className="project-card-actions">
                {proj.view && proj.view !== "#" && (
                  <a
                    href={proj.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="bi bi-eye"></i> View
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="bi bi-github"></i> GitHub
                  </a>
                )}
                <button
                  type="button"
                  className="project-btn project-btn-details"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(proj);
                  }}
                >
                  <i className="bi bi-info-circle"></i> Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Project Details Modal / Window via React Portal to document.body */}
      {mounted &&
        selectedProject &&
        createPortal(
          <div
            className="project-modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="project-modal-window"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
            >
              {/* Modal Header */}
              <div className="project-modal-header">
                <div className="project-modal-header-info">
                  <div
                    className="project-modal-icon-badge"
                    style={{
                      background:
                        selectedProject.iconGradient ||
                        "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.3))",
                    }}
                  >
                    <i
                      className={`bi ${selectedProject.icon || "bi-app-indicator"}`}
                    ></i>
                  </div>
                  <div>
                    <span className="project-modal-tag">Project Showcase</span>
                    <h3
                      id="modal-project-title"
                      className="project-modal-title"
                    >
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  className="project-modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="project-modal-body">
                {/* Top Image Gallery Showcase Section */}
                {"images" in selectedProject &&
                  selectedProject.images &&
                  selectedProject.images.length > 0 && (
                    <div className="project-modal-gallery-section">
                      <div
                        className="project-modal-gallery-main"
                        onClick={() => setLightboxOpen(true)}
                        title="Click to view full screen"
                      >
                        <img
                          src={selectedProject.images[activeImageIndex]}
                          alt={`${selectedProject.title} Preview ${activeImageIndex + 1}`}
                          className="project-modal-gallery-img"
                        />

                        {/* Fullscreen indicator button */}
                        <button
                          type="button"
                          className="project-modal-gallery-zoom-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxOpen(true);
                          }}
                          title="View Full Resolution Screenshot"
                        >
                          <i className="bi bi-arrows-fullscreen"></i>
                          <span>Full View</span>
                        </button>

                        {selectedProject.images.length > 1 && (
                          <>
                            <button
                              type="button"
                              className="project-modal-gallery-nav project-modal-gallery-prev"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePrevImage(selectedProject.images.length);
                              }}
                              aria-label="Previous screenshot"
                            >
                              <i className="bi bi-chevron-left"></i>
                            </button>
                            <button
                              type="button"
                              className="project-modal-gallery-nav project-modal-gallery-next"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleNextImage(selectedProject.images.length);
                              }}
                              aria-label="Next screenshot"
                            >
                              <i className="bi bi-chevron-right"></i>
                            </button>
                            <div className="project-modal-gallery-counter">
                              {activeImageIndex + 1} /{" "}
                              {selectedProject.images.length}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Thumbnail Strip */}
                      {selectedProject.images.length > 1 && (
                        <div className="project-modal-thumbnails">
                          {selectedProject.images.map((img, iIdx) => (
                            <button
                              type="button"
                              key={iIdx}
                              className={`project-modal-thumb-btn ${iIdx === activeImageIndex ? "active" : ""}`}
                              onClick={() => setActiveImageIndex(iIdx)}
                            >
                              <img
                                src={img}
                                alt={`Thumbnail ${iIdx + 1}`}
                                className="project-modal-thumb-img"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                {/* Description & My Work Section */}
                <div className="project-modal-section">
                  <h4 className="project-modal-section-heading">
                    <i className="bi bi-briefcase"></i> Description &amp; My
                    Work
                  </h4>
                  <p className="project-modal-desc">
                    {selectedProject.description}
                  </p>

                  {/* Specific Personal Contributions / Work */}
                  {"myWork" in selectedProject &&
                    selectedProject.myWork &&
                    selectedProject.myWork.length > 0 && (
                      <div className="project-modal-mywork-box">
                        <h5 className="project-modal-subheading">
                          <i className="bi bi-check2-all"></i> What I Did in
                          This Project:
                        </h5>
                        <ul className="project-modal-mywork-list">
                          {selectedProject.myWork.map((work, wIdx) => (
                            <li key={wIdx}>
                              <i className="bi bi-arrow-right-circle"></i>
                              <span>{work}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>

                {/* Key Features Section */}
                {"features" in selectedProject &&
                  selectedProject.features &&
                  selectedProject.features.length > 0 && (
                    <div className="project-modal-section">
                      <h4 className="project-modal-section-heading">
                        <i className="bi bi-stars"></i> Key Features
                      </h4>
                      <ul className="project-modal-features-list">
                        {selectedProject.features.map((feature, fIdx) => (
                          <li key={fIdx}>
                            <i className="bi bi-check2-circle"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Technologies / Stack Section */}
                {"technologies" in selectedProject &&
                  selectedProject.technologies &&
                  selectedProject.technologies.length > 0 && (
                    <div className="project-modal-section">
                      <h4 className="project-modal-section-heading">
                        <i className="bi bi-code-slash"></i> Technologies &amp;
                        Tools
                      </h4>
                      <div className="project-modal-tech-pills">
                        {selectedProject.technologies.map((tech, tIdx) => (
                          <span key={tIdx} className="project-modal-tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
              </div>

              {/* Modal Footer / Action Buttons */}
              <div className="project-modal-footer">
                <div className="project-modal-links">
                  {selectedProject.view && selectedProject.view !== "#" && (
                    <a
                      href={selectedProject.view}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-modal-btn project-modal-btn-primary"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Live Demo
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-modal-btn project-modal-btn-secondary"
                    >
                      <i className="bi bi-github"></i> Source Code
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  className="project-modal-btn project-modal-btn-close"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}

      {/* Fullscreen High-Resolution Lightbox Overlay via React Portal */}
      {mounted &&
        lightboxOpen &&
        selectedProject &&
        selectedProject.images &&
        createPortal(
          <div
            className="project-lightbox-overlay"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="project-lightbox-container"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="project-lightbox-close-btn"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close fullscreen view"
              >
                <i className="bi bi-x-lg"></i>
              </button>

              <div className="project-lightbox-image-wrapper">
                <img
                  src={selectedProject.images[activeImageIndex]}
                  alt={`${selectedProject.title} Full View`}
                  className="project-lightbox-full-img"
                />
              </div>

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="project-lightbox-nav project-lightbox-prev"
                    onClick={() =>
                      handlePrevImage(selectedProject.images.length)
                    }
                    aria-label="Previous image"
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                  <button
                    type="button"
                    className="project-lightbox-nav project-lightbox-next"
                    onClick={() =>
                      handleNextImage(selectedProject.images.length)
                    }
                    aria-label="Next image"
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                  <div className="project-lightbox-counter">
                    {activeImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </>
              )}
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
