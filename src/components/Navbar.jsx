import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`custom-navbar fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between py-3">
        {/* Brand */}
        <a href="#home" className="navbar-brand-simple d-flex align-items-center gap-2 text-decoration-none">
          <span className="brand-avatar d-inline-flex align-items-center justify-content-center fw-bold">TK</span>
          <div>
            <span className="brand-name fw-bold d-block">Taranjeet Kaur</span>
            <span className="brand-role d-block text-muted">Frontend Developer</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="d-none d-md-flex align-items-center gap-3">
          <ul className="d-flex align-items-center gap-4 list-unstyled mb-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link-simple text-decoration-none">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://www.linkedin.com/in/taranjeet-kaur-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-sm px-3 py-2 fw-medium rounded-pill d-inline-flex align-items-center gap-1"
            title="LinkedIn Profile"
          >
            <i className="bi bi-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="#contact" className="btn btn-primary btn-sm px-3 py-2 fw-medium rounded-pill">
            Get in Touch
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="btn btn-outline-secondary d-md-none border-0 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-4`}></i>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer d-md-none bg-white border-bottom shadow-sm px-4 py-3">
          <ul className="list-unstyled d-flex flex-column gap-3 mb-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="mobile-nav-link text-decoration-none text-dark fw-medium d-block py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="d-flex flex-column gap-2">
            <a
              href="https://www.linkedin.com/in/taranjeet-kaur-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary w-100 py-2 fw-medium rounded-pill d-inline-flex align-items-center justify-content-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="bi bi-linkedin"></i>
              <span>Connect on LinkedIn</span>
            </a>
            <a
              href="#contact"
              className="btn btn-primary w-100 py-2 fw-medium rounded-pill"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}


