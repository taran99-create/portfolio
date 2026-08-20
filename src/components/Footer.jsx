import React from 'react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const linkedInUrl = 'https://www.linkedin.com/in/taranjeet-kaur-frontend'

  return (
    <footer className="bg-white border-top py-4">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div>
          <span className="fw-bold text-dark d-block">Taranjeet Kaur</span>
          <span className="text-muted small">Frontend Developer · 4+ Years Experience · Gnet Webs Pvt Ltd</span>
        </div>

        <div className="d-flex align-items-center gap-3">
          <a href="#about" className="text-muted text-decoration-none small">About</a>
          <a href="#projects" className="text-muted text-decoration-none small">Projects</a>
          <a href="#skills" className="text-muted text-decoration-none small">Skills</a>
          <a href="#contact" className="text-muted text-decoration-none small">Contact</a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-decoration-none small fw-semibold d-inline-flex align-items-center gap-1"
            title="LinkedIn Profile"
          >
            <i className="bi bi-linkedin fs-5"></i>
          </a>
          <button
            className="btn btn-outline-secondary btn-sm rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
            style={{ width: '36px', height: '36px' }}
            onClick={scrollToTop}
            title="Back to top"
            aria-label="Back to top"
          >
            <i className="bi bi-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  )
}


