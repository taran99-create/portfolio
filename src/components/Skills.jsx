import React from 'react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend & React Stack',
      icon: 'bi bi-code-slash',
      skills: [
        { name: 'React.js & React Router', level: 95 },
        { name: 'Redux State Management', level: 92 },
        { name: 'JavaScript (ES6+) & jQuery', level: 94 },
        { name: 'React Native & Mobile Basics', level: 85 }
      ]
    },
    {
      title: 'UI Implementation & Styling',
      icon: 'bi bi-palette',
      skills: [
        { name: 'Figma & PSD to Pixel-Perfect HTML', level: 98 },
        { name: 'HTML5, CSS3, SCSS & Sass', level: 96 },
        { name: 'Bootstrap 5 & Responsive Layouts', level: 95 },
        { name: 'WordPress & Divi Builder', level: 92 }
      ]
    },
    {
      title: 'Tools, APIs & Workflows',
      icon: 'bi bi-gear-wide-connected',
      skills: [
        { name: 'Git & GitHub Version Control', level: 92 },
        { name: 'Postman & REST API Integration', level: 90 },
        { name: 'VS Code & Frontend Tooling', level: 94 },
        { name: 'Cross-Browser Testing & WCAG', level: 90 }
      ]
    }
  ]

  const technologies = [
    'React.js',
    'Redux',
    'React Router',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'SCSS / Sass',
    'Bootstrap 5',
    'WordPress (Divi)',
    'Figma to Code',
    'PSD to HTML',
    'jQuery',
    'Postman',
    'Git & GitHub',
    'REST APIs',
    'React Native'
  ]

  return (
    <section id="skills" className="py-5 bg-light border-top border-bottom">
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-2 rounded-pill mb-2">
            Technical Stack
          </span>
          <h2 className="fw-bold text-dark mb-2">Skills &amp; Proficiencies</h2>
          <p className="text-secondary lead fs-6 mb-0">
            Core technologies, UI development tools, and workflows applied across 4+ years of professional development.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="row g-4 mb-5">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="col-12 col-lg-4">
              <div className="card h-100 p-4 border rounded-4 shadow-sm bg-white">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="feature-icon-circle bg-primary-subtle text-primary rounded-3 d-inline-flex align-items-center justify-content-center">
                    <i className={`bi ${cat.icon} fs-5`}></i>
                  </div>
                  <h5 className="fw-bold text-dark mb-0 fs-6">{cat.title}</h5>
                </div>

                <div className="d-flex flex-column gap-3">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="d-flex justify-content-between small fw-medium mb-1 text-dark">
                        <span>{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <div className="progress" style={{ height: '6px' }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: `${skill.level}%` }}
                          aria-valuenow={skill.level}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Badges Strip */}
        <div className="card border rounded-4 p-4 p-lg-4 bg-white shadow-sm">
          <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
            <div>
              <h6 className="fw-bold text-dark mb-1">Tools &amp; Technologies</h6>
              <p className="text-muted small mb-0">Full spectrum of technical competencies from resume.</p>
            </div>
            <div className="d-flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="badge bg-light text-dark border px-3 py-2 fw-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



