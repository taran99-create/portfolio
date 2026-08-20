import React from 'react'

export default function Features() {
  const strengths = [
    {
      icon: 'bi bi-code-slash',
      title: 'React.js & Redux Architecture',
      desc: 'Developing scalable web apps with React.js, Redux state management, React Router, and modular component patterns.'
    },
    {
      icon: 'bi bi-palette',
      title: 'Figma & PSD to Pixel-Perfect Code',
      desc: 'Expert at converting Figma and PSD design files into clean, semantic HTML5, CSS3/SCSS, and responsive layouts.'
    },
    {
      icon: 'bi bi-wordpress',
      title: 'WordPress & Divi Builder',
      desc: 'Building high-converting WordPress sites using the Divi Builder with custom styling, speed optimization, and CMS structure.'
    },
    {
      icon: 'bi bi-globe',
      title: 'International Deliveries',
      desc: 'Delivered 13+ production web projects for international business, real estate, and hospitality clients across Sweden, Australia, and Argentina.'
    }
  ]

  return (
    <section id="about" className="py-5 bg-light border-top border-bottom">
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-2 rounded-pill mb-2">
            Experience &amp; Expertise
          </span>
          <h2 className="fw-bold text-dark mb-3">About My Background &amp; Craft</h2>
          <p className="text-secondary lead fs-6 mb-0">
            Frontend Developer with <strong>4+ years of hands-on experience</strong> turning complex designs into high-performance, accessible, and responsive digital products.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="row g-4 mb-5">
          {strengths.map((item, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 p-4 border rounded-4 shadow-sm bg-white hover-elevate transition-all">
                <div className="feature-icon-circle bg-primary-subtle text-primary rounded-3 d-inline-flex align-items-center justify-content-center mb-3">
                  <i className={`bi ${item.icon} fs-4`}></i>
                </div>
                <h5 className="fw-bold text-dark mb-2 fs-6">{item.title}</h5>
                <p className="text-secondary small mb-0 lh-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Experience & Education Row */}
        <div className="row g-4 mb-5">
          {/* Work Experience */}
          <div className="col-12 col-lg-6">
            <div className="card border rounded-4 p-4 h-100 bg-white shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="feature-icon-circle bg-primary-subtle text-primary rounded-3 d-inline-flex align-items-center justify-content-center">
                  <i className="bi bi-briefcase fs-5"></i>
                </div>
                <div>
                  <h5 className="fw-bold text-dark mb-0 fs-6">Professional Experience</h5>
                  <span className="text-muted small">4+ Years of Industry Tenure</span>
                </div>
              </div>

              <div className="border-start border-2 border-primary-subtle ps-3 ms-2 py-1">
                <div className="d-flex align-items-center justify-content-between flex-wrap mb-1">
                  <strong className="text-dark">Frontend Developer</strong>
                  <span className="badge bg-primary-subtle text-primary fw-medium">Oct 2021 – Present</span>
                </div>
                <span className="text-muted small fw-medium d-block mb-2">Gnet Webs Pvt Ltd · Full-time</span>
                <ul className="text-secondary small mb-3 ps-3">
                  <li>Converted Figma &amp; PSD designs into responsive, pixel-perfect HTML, CSS/SCSS, and modern JavaScript.</li>
                  <li>Built and maintained React.js applications with Redux state management and React Router.</li>
                  <li>Developed custom WordPress websites using the Divi Builder for international clients across Sweden, Australia, and Argentina.</li>
                  <li>Used Git/GitHub for version control and Postman for API integration and testing.</li>
                </ul>

                <div className="p-2 px-3 bg-warning-subtle text-dark border border-warning-subtle rounded-3 d-inline-flex align-items-center gap-2 small">
                  <i className="bi bi-trophy-fill text-warning"></i>
                  <span>Awarded <strong>"Emerging Employee"</strong> for exceptional frontend development contributions.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="col-12 col-lg-6">
            <div className="card border rounded-4 p-4 h-100 bg-white shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="feature-icon-circle bg-success-subtle text-success rounded-3 d-inline-flex align-items-center justify-content-center">
                  <i className="bi bi-mortarboard fs-5"></i>
                </div>
                <div>
                  <h5 className="fw-bold text-dark mb-0 fs-6">Education &amp; Qualifications</h5>
                  <span className="text-muted small">Academic Background</span>
                </div>
              </div>

              <div className="d-flex flex-column gap-3">
                <div className="p-3 bg-light border rounded-3">
                  <div className="d-flex align-items-center justify-content-between flex-wrap mb-1">
                    <strong className="text-dark">MSc in Information Technology</strong>
                    <span className="badge bg-white text-secondary border">2021</span>
                  </div>
                  <span className="text-muted small d-block">Panjab University · Post Graduate Govt. College for Girls, Chandigarh</span>
                </div>

                <div className="p-3 bg-light border rounded-3">
                  <div className="d-flex align-items-center justify-content-between flex-wrap mb-1">
                    <strong className="text-dark">BCA (Bachelor of Computer Applications)</strong>
                    <span className="badge bg-white text-secondary border">2019</span>
                  </div>
                  <span className="text-muted small d-block">Panjab University · Post Graduate Govt. College for Girls, Chandigarh</span>
                </div>

                <div className="d-flex align-items-center gap-2 pt-2 text-muted small">
                  <i className="bi bi-translate"></i>
                  <span><strong>Languages:</strong> English, Hindi, Punjabi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Stats Banner */}
        <div className="card border-0 bg-white shadow-sm rounded-4 p-4">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <div className="fw-bold fs-3 text-primary">4+ Years</div>
              <span className="text-muted small">Industry Experience</span>
            </div>
            <div className="col-6 col-md-3">
              <div className="fw-bold fs-3 text-dark">13+</div>
              <span className="text-muted small">Live Production Websites</span>
            </div>
            <div className="col-6 col-md-3">
              <div className="fw-bold fs-3 text-success">3+</div>
              <span className="text-muted small">Global Regions (SE, AU, AR)</span>
            </div>
            <div className="col-6 col-md-3">
              <div className="fw-bold fs-3 text-dark">Gnet Webs</div>
              <span className="text-muted small">Emerging Employee Awardee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




