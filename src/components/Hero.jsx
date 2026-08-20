import React from 'react'

export default function Hero() {
  const techStack = [
    'React.js',
    'Redux',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'Sass / SCSS',
    'Bootstrap 5',
    'WordPress (Divi)',
    'Figma to Code',
    'REST APIs',
    'Git & GitHub'
  ]

  const linkedInUrl = 'https://www.linkedin.com/in/taranjeet-kaur-frontend'

  return (
    <section id="home" className="hero-simple py-5 mt-5">
      <div className="container py-lg-5">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-8">
            {/* Status Pill */}
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-light border rounded-pill mb-4">
              <span className="status-dot-green"></span>
              <span className="text-secondary small fw-medium">Frontend Developer · 4+ Years Experience</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-main-title fw-bold text-dark mb-3">
              Hi, I'm <span className="text-primary">Taranjeet Kaur</span>.<br />
              Turning Figma &amp; PSD Designs into Fast, Pixel-Perfect Web Experiences.
            </h1>

            {/* Bio Subtitle */}
            <p className="hero-main-desc text-secondary mb-4 lead">
              Frontend Developer with <strong>4+ years of professional experience</strong> at <strong>Gnet Webs Pvt Ltd</strong> building responsive, pixel-perfect websites and React.js web applications with Redux and React Router. Delivered production web portals for international clients across <strong>Sweden, Australia, and Argentina</strong>.
            </p>

            {/* CTAs */}
            <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
              <a href="#projects" className="btn btn-primary px-4 py-2 fw-medium rounded-pill shadow-sm">
                View Live Projects <i className="bi bi-arrow-down ms-1"></i>
              </a>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary px-4 py-2 fw-medium rounded-pill d-inline-flex align-items-center gap-2"
              >
                <i className="bi bi-linkedin"></i>
                <span>Connect on LinkedIn</span>
              </a>
              <a href="#contact" className="btn btn-outline-dark px-4 py-2 fw-medium rounded-pill">
                Contact Me
              </a>
            </div>

            {/* Tech Stack Bar */}
            <div className="pt-3 border-top">
              <span className="text-muted small fw-semibold text-uppercase d-block mb-2">Technical Skills &amp; Stack:</span>
              <div className="d-flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="badge bg-light text-dark border px-3 py-2 fw-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Highlights Card */}
          <div className="col-12 col-lg-4">
            <div className="card border shadow-sm p-4 rounded-4 bg-white">
              <h5 className="fw-bold mb-3 text-dark">Career Highlights</h5>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                <li className="d-flex align-items-start gap-3">
                  <div className="highlight-icon-box bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                    <i className="bi bi-briefcase fs-5"></i>
                  </div>
                  <div>
                    <strong className="d-block text-dark">4+ Years Experience</strong>
                    <span className="text-muted small">Frontend Developer at Gnet Webs Pvt Ltd (Oct 2021 – Present).</span>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <div className="highlight-icon-box bg-warning-subtle text-warning rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                    <i className="bi bi-award fs-5"></i>
                  </div>
                  <div>
                    <strong className="d-block text-dark">"Emerging Employee" Award</strong>
                    <span className="text-muted small">Recognized for key contributions to frontend development.</span>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <div className="highlight-icon-box bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                    <i className="bi bi-globe2 fs-5"></i>
                  </div>
                  <div>
                    <strong className="d-block text-dark">Global Client Deliveries</strong>
                    <span className="text-muted small">13+ production portals in Sweden, Australia &amp; Argentina.</span>
                  </div>
                </li>
                <li className="d-flex align-items-start gap-3">
                  <div className="highlight-icon-box bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                    <i className="bi bi-mortarboard fs-5"></i>
                  </div>
                  <div>
                    <strong className="d-block text-dark">MSc in IT &amp; BCA Graduate</strong>
                    <span className="text-muted small">Panjab University, Chandigarh (2019 &amp; 2021).</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



