import React, { useState } from 'react'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    'All',
    'Real Estate & Finance',
    'Corporate & Strategy',
    'E-Commerce & Experiences',
    'Health, Science & Community'
  ]

  const projectList = [
    {
      id: '01',
      title: 'Apex Property Fund',
      subtitle: 'Australian Residential Property Investment',
      category: 'Real Estate & Finance',
      badge: 'Property Fund',
      domain: 'apexpropertyfund.com.au',
      liveUrl: 'https://apexpropertyfund.com.au/',
      description: 'A property investment fund website focused on Australian residential real estate, providing information about investment opportunities, fund strategy, and portfolio management.',
      tags: ['React', 'Finance UI', 'Responsive Design', 'Bootstrap']
    },
    {
      id: '02',
      title: 'CISV Global',
      subtitle: 'Peace Education & Youth Programs Portal',
      category: 'Corporate & Strategy',
      badge: 'Global NGO',
      domain: 'cisv.hemsida.eu',
      liveUrl: 'https://cisv.hemsida.eu/',
      description: 'A comprehensive organizational portal presenting educational programs, international youth camps, cross-cultural initiatives, and resources for community members.',
      tags: ['Frontend Architecture', 'Responsive UI', 'CMS Integration', 'Bootstrap']
    },
    {
      id: '03',
      title: 'Gålö Havsbad',
      subtitle: 'Swedish Seaside Destination & Resort',
      category: 'E-Commerce & Experiences',
      badge: 'Seaside Resort',
      domain: 'galohavsbad.se',
      liveUrl: 'https://galohavsbad.se/',
      description: 'A Swedish seaside destination website showcasing Gålö Havsbad, including accommodation, camping, outdoor activities, dining, and visitor information.',
      tags: ['Interactive Booking', 'Responsive UI', 'SCSS', 'Modern Web']
    },
    {
      id: '04',
      title: 'Notary Public 24',
      subtitle: 'Online Document Notarization & Certifications',
      category: 'Real Estate & Finance',
      badge: 'Legal Services',
      domain: 'notarypublic24.com',
      liveUrl: 'https://www.notarypublic24.com/',
      description: 'An online notary public service offering information and assistance with document notarization, certifications, and related legal services.',
      tags: ['React UI', 'Form Workflows', 'Accessible UI', 'Bootstrap 5']
    },
    {
      id: '05',
      title: 'Zebrain',
      subtitle: 'Activating Strategic Initiatives Into Everyday Work',
      category: 'Corporate & Strategy',
      badge: 'Strategy Platform',
      domain: 'zebrain.com',
      liveUrl: 'https://zebrain.com/',
      description: 'A business execution and strategy management platform that helps organizations align teams, track strategic initiatives, and turn company goals into measurable daily actions.',
      tags: ['SaaS Cockpit', 'Component Architecture', 'Data Viz', 'UI Systems']
    },
    {
      id: '06',
      title: 'BrandStruck',
      subtitle: 'Brand Strategy & Positioning Case Studies',
      category: 'Corporate & Strategy',
      badge: 'Brand Intelligence',
      domain: 'brandstruck.co',
      liveUrl: 'https://brandstruck.co/',
      description: 'A branding consultancy website featuring brand strategy, positioning services, and case studies demonstrating its work with different businesses.',
      tags: ['Case Study Framework', 'Search & Filtering', 'Editorial UI', 'CSS Grid']
    },
    {
      id: '07',
      title: 'Vinylize Eyewear',
      subtitle: 'Handcrafted Eyewear From Recycled Vinyl',
      category: 'E-Commerce & Experiences',
      badge: 'Luxury E-Commerce',
      domain: 'vinylize.ulibr.com',
      liveUrl: 'https://vinylize.ulibr.com',
      description: 'A creative e-commerce website for Vinylize, showcasing handcrafted eyewear made from recycled vinyl records along with its unique design process and products.',
      tags: ['E-Commerce UX', 'Product Customizer', 'Artisan Storefront', 'Fast Checkout']
    },
    {
      id: '08',
      title: 'Leaps and Bounds OT',
      subtitle: 'Paediatric Occupational Therapy Services',
      category: 'Health, Science & Community',
      badge: 'Healthcare & Therapy',
      domain: 'leapsandboundsot.ulibr.com',
      liveUrl: 'https://leapsandboundsot.ulibr.com/',
      description: 'Paediatric occupational therapy services for children and families, providing clinical care paths, therapeutic consults, and parent guidance.',
      tags: ['Inclusive Design', 'Service Scheduling', 'Accessible Web', 'Bootstrap 5']
    },
    {
      id: '09',
      title: 'RockZone',
      subtitle: 'Rock Music Experiences & Community Platform',
      category: 'E-Commerce & Experiences',
      badge: 'Music & Media',
      domain: 'rockzone.utvmiljo.se',
      liveUrl: 'https://rockzone.utvmiljo.se/',
      description: 'A website focused on rock/music-related content and experiences, live event schedules, multimedia content, and exclusive fan merchandise.',
      tags: ['Dynamic Media', 'Interactive Feed', 'Dark Aesthetic', 'Responsive UI']
    },
    {
      id: '10',
      title: 'Open Futures',
      subtitle: 'Financial Literacy & Multicultural Support',
      category: 'Real Estate & Finance',
      badge: 'Financial Literacy',
      domain: 'openfutures.ulibr.com',
      liveUrl: 'https://openfutures.ulibr.com/',
      description: 'Financial literacy and community support for multicultural communities, offering educational modules, economic guidance, and community workshops.',
      tags: ['Multicultural UI', 'Educational Modules', 'Semantic HTML5', 'Clean CSS']
    },
    {
      id: '11',
      title: 'AFU Utveckling',
      subtitle: 'Individual Development, Daily Activities & Housing',
      category: 'Health, Science & Community',
      badge: 'Community Care',
      domain: 'afu.utvmiljo.se',
      liveUrl: 'https://afu.utvmiljo.se/',
      description: 'Individual-focused development, daily activities, housing support, and education services empowering individuals across Sweden.',
      tags: ['WCAG 2.1 AA', 'Accessible Forms', 'Semantic Structure', 'Bootstrap']
    },
    {
      id: '12',
      title: 'Ambiogen',
      subtitle: 'Genomics & DNA/RNA Biological Analysis',
      category: 'Health, Science & Community',
      badge: 'Biotech & Genomics',
      domain: 'ambiogen.utvmiljo.se',
      liveUrl: 'https://ambiogen.utvmiljo.se/',
      description: 'A company that helps scientists study DNA and RNA. They analyze genetic material to understand genes, microorganisms, and biological samples.',
      tags: ['Genomics Portal', 'Scientific Data UI', 'Modular React', 'Modern UI']
    },
    {
      id: '13',
      title: 'Mobi Prop',
      subtitle: 'Negocios Inmobiliarios & Property Management',
      category: 'Real Estate & Finance',
      badge: 'Real Estate',
      domain: 'mobiprop.com',
      liveUrl: 'https://mobiprop.com',
      description: 'Real estate and property management services facilitating property discovery, tenant management, and commercial leasing operations.',
      tags: ['Property Search', 'Responsive Grid', 'Listing Filters', 'Bootstrap 5']
    }
  ]

  const filteredProjects = activeCategory === 'All'
    ? projectList
    : projectList.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-5">
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-4">
          <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-2 rounded-pill mb-2">
            Selected Work
          </span>
          <h2 className="fw-bold text-dark mb-2">Featured Projects ({projectList.length})</h2>
          <p className="text-secondary lead fs-6 mb-0">
            A showcase of live production websites built with React, modern JavaScript, and responsive design systems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-sm rounded-pill px-3 py-2 fw-medium ${
                activeCategory === cat
                  ? 'btn-primary shadow-sm'
                  : 'btn-outline-secondary border-light-subtle bg-white text-secondary'
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'All' ? `All Projects (${projectList.length})` : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border rounded-4 shadow-sm bg-white p-4 d-flex flex-column justify-content-between hover-elevate transition-all">
                <div>
                  {/* Card Top: Category & Domain */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge bg-primary-subtle text-primary fw-semibold px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-muted small d-inline-flex align-items-center gap-1">
                      <i className="bi bi-globe2"></i> {project.domain}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h4 className="fw-bold text-dark mb-1 fs-5">{project.title}</h4>
                  <span className="text-muted small d-block mb-3 fw-medium">{project.subtitle}</span>

                  {/* Description */}
                  <p className="text-secondary small mb-3 lh-base">{project.description}</p>

                  {/* Tech Tags */}
                  <div className="d-flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge bg-light text-secondary border fw-normal" style={{ fontSize: '0.75rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer: Live indicator & Link */}
                <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <span className="status-dot-green"></span>
                    <span className="text-muted small fw-medium">Live Website</span>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm rounded-pill px-3 py-1 fw-medium d-inline-flex align-items-center gap-1"
                  >
                    <span>Visit Site</span>
                    <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


