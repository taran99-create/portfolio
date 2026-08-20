import React, { useState } from 'react'

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [copiedLinkedIn, setCopiedLinkedIn] = useState(false)

  const emailAddress = 'tarankaur1999@gmail.com'
  const phoneNumber = '+91 97808 68313'
  const rawPhone = '9780868313'
  const locationAddress = 'Village - Dharamgarh, near Lalru Mandi, Teh - Derabassi, District - Mohali, Punjab'
  const linkedInUrl = 'https://www.linkedin.com/in/taranjeet-kaur-frontend'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(rawPhone)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  const handleCopyLinkedIn = () => {
    navigator.clipboard.writeText(linkedInUrl)
    setCopiedLinkedIn(true)
    setTimeout(() => setCopiedLinkedIn(false), 2000)
  }

  return (
    <section id="contact" className="py-5">
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-2 rounded-pill mb-2">
            Contact &amp; Connect
          </span>
          <h2 className="fw-bold text-dark mb-2">Let's Connect</h2>
          <p className="text-secondary lead fs-6 mb-0">
            Have an open frontend developer role, a project inquiry, or wish to connect professionally? Reach out directly.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="row g-4 mb-4">
          {/* Card 1: Email */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 p-4 border rounded-4 shadow-sm bg-white d-flex flex-column justify-content-between">
              <div>
                <div className="feature-icon-circle bg-primary-subtle text-primary rounded-3 d-inline-flex align-items-center justify-content-center mb-3">
                  <i className="bi bi-envelope-at fs-5"></i>
                </div>
                <h5 className="fw-bold text-dark mb-1 fs-6">Direct Email</h5>
                <p className="text-muted small mb-3">Best for project briefs, inquiries &amp; job opportunities.</p>
                <a href={`mailto:${emailAddress}`} className="fw-semibold text-primary text-decoration-none d-block mb-3">
                  {emailAddress}
                </a>
              </div>

              <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                <a
                  href={`mailto:${emailAddress}`}
                  className="btn btn-primary btn-sm rounded-pill px-3 py-1 fw-medium d-inline-flex align-items-center gap-1"
                >
                  <span>Send Email</span>
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <button
                  className="btn btn-outline-secondary btn-sm rounded-pill px-2 py-1"
                  onClick={handleCopyEmail}
                  title="Copy Email"
                >
                  {copiedEmail ? <i className="bi bi-check2 text-success"></i> : <i className="bi bi-copy"></i>}
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 p-4 border rounded-4 shadow-sm bg-white d-flex flex-column justify-content-between">
              <div>
                <div className="feature-icon-circle bg-success-subtle text-success rounded-3 d-inline-flex align-items-center justify-content-center mb-3">
                  <i className="bi bi-telephone fs-5"></i>
                </div>
                <h5 className="fw-bold text-dark mb-1 fs-6">Phone &amp; WhatsApp</h5>
                <p className="text-muted small mb-3">Available for direct calls and WhatsApp chat.</p>
                <a href={`tel:${rawPhone}`} className="fw-semibold text-dark text-decoration-none d-block mb-3">
                  {phoneNumber}
                </a>
              </div>

              <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <a
                    href={`tel:${rawPhone}`}
                    className="btn btn-outline-dark btn-sm rounded-pill px-3 py-1 fw-medium"
                  >
                    Call
                  </a>
                  <a
                    href={`https://wa.me/91${rawPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success btn-sm rounded-pill px-3 py-1 fw-medium d-inline-flex align-items-center gap-1"
                  >
                    <i className="bi bi-whatsapp"></i> WhatsApp
                  </a>
                </div>
                <button
                  className="btn btn-outline-secondary btn-sm rounded-pill px-2 py-1"
                  onClick={handleCopyPhone}
                  title="Copy Phone"
                >
                  {copiedPhone ? <i className="bi bi-check2 text-success"></i> : <i className="bi bi-copy"></i>}
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: LinkedIn & Location */}
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card h-100 p-4 border rounded-4 shadow-sm bg-white d-flex flex-column justify-content-between">
              <div>
                <div className="feature-icon-circle bg-info-subtle text-info rounded-3 d-inline-flex align-items-center justify-content-center mb-3">
                  <i className="bi bi-linkedin fs-5 text-primary"></i>
                </div>
                <h5 className="fw-bold text-dark mb-1 fs-6">LinkedIn Profile</h5>
                <p className="text-muted small mb-2">Connect for career updates and professional networking.</p>
                <p className="text-muted small mb-3">
                  <i className="bi bi-geo-alt me-1 text-secondary"></i> {locationAddress}
                </p>
              </div>

              <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm rounded-pill px-3 py-1 fw-medium d-inline-flex align-items-center gap-1"
                >
                  <i className="bi bi-linkedin"></i>
                  <span>View LinkedIn</span>
                </a>
                <button
                  className="btn btn-outline-secondary btn-sm rounded-pill px-2 py-1"
                  onClick={handleCopyLinkedIn}
                  title="Copy LinkedIn URL"
                >
                  {copiedLinkedIn ? <i className="bi bi-check2 text-success"></i> : <i className="bi bi-copy"></i>}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner - Modern Obsidian Theme */}
        <div className="contact-cta-banner rounded-4 p-4 p-lg-5 position-relative overflow-hidden shadow-lg">
          <div className="row align-items-center g-4 position-relative" style={{ zIndex: 1 }}>
            <div className="col-12 col-lg-7">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white bg-opacity-10 border border-white border-opacity-10 mb-3">
                <span className="status-dot-green"></span>
                <span className="text-white-50 small fw-medium">Frontend Developer · 4+ Years Experience</span>
              </div>
              <h3 className="fw-bold text-white mb-2 fs-3">Ready to build something exceptional?</h3>
              <p className="text-white text-opacity-75 mb-0" style={{ maxWidth: '520px', lineHeight: '1.6' }}>
                Let's discuss how my frontend experience, React architecture, and clean UI engineering can bring immediate value to your team.
              </p>
            </div>

            <div className="col-12 col-lg-5">
              <div className="d-flex flex-wrap gap-2 justify-content-lg-end align-items-center">
                <a
                  href={`mailto:${emailAddress}`}
                  className="btn btn-white-cta px-4 py-2 fw-semibold rounded-pill d-inline-flex align-items-center gap-2 shadow-sm text-decoration-none"
                >
                  <i className="bi bi-envelope-fill text-primary"></i>
                  <span>Email Me Directly</span>
                  <i className="bi bi-arrow-up-right small opacity-75"></i>
                </a>
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light px-4 py-2 fw-semibold rounded-pill d-inline-flex align-items-center gap-2 text-decoration-none"
                >
                  <i className="bi bi-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`https://wa.me/91${rawPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp-cta px-4 py-2 fw-semibold rounded-pill d-inline-flex align-items-center gap-2 text-decoration-none"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




