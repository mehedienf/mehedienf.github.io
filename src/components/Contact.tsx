import { portfolioData } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="contact content">
      <div className="section-header">
        <h2 className="section-badge">
          <i className="bi bi-chat-left-text"></i> Connect
        </h2>
        <p className="section-subtitle">
          Have an exciting project, freelance opportunity, or just want to say
          hi? Feel free to reach out.
        </p>
        <div className="section-divider"></div>
      </div>

      <div className="contact-action-card">
        <p className="contact-invite-text">
          I am always excited to discuss new opportunities, creative ideas, or
          collaborate on impactful digital experiences.
        </p>
        <div className="contact-btn-wrapper">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            style={{ textDecoration: "none" }}
          >
            <button type="button" className="contact-btn">
              <i className="bi bi-envelope"></i>
              Say Hello &mdash; {portfolioData.contact.email}
            </button>
          </a>
        </div>

        <div className="social-links">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            aria-label="Email"
            title="Email"
          >
            <i className="bi bi-envelope"></i>
          </a>
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href={portfolioData.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
          <a
            href={portfolioData.contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
