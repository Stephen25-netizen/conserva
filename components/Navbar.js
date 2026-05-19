function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const IconCpu = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 2v2H7a2 2 0 0 0-2 2v2H3v4h2v2a2 2 0 0 0 2 2h2v2h6v-2h2a2 2 0 0 0 2-2v-2h2v-4h-2V8a2 2 0 0 0-2-2h-2V2H9Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  const IconMenu = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  const IconX = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  return (
    <nav
      className="fixed-top navbar navbar-expand-lg py-3"
      data-name="Navbar"
      data-file="components/Navbar.js"
      style={{ background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(10px)' }}
    >
      <div className="container-max px-3">
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#hero" style={{ color: 'var(--text)' }}>
          <span className="d-flex align-items-center" style={{ color: 'var(--secondary)' }}>
            <IconCpu />
          </span>
          <span className="d-flex flex-column lh-1">
            <span style={{ color: 'var(--text)' }}>Conserva</span>
            <span style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '.08em' }}>Tech Hub Ltd</span>
          </span>
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: 'var(--primary)' }}
        >
          {isOpen ? <IconX /> : <IconMenu />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3" style={{ fontWeight: 600 }}>
            <li className="nav-item">
              <a className="nav-link" href="#solutions" style={{ color: 'var(--muted)' }}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#success-stories" style={{ color: 'var(--muted)' }}>
                Success Stories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" style={{ color: 'var(--muted)' }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" style={{ color: 'var(--muted)' }}>
                Contact
              </a>
            </li>
            <li className="nav-item mt-2 mt-lg-0">
              <a href="#contact" className="btn btn-conserva" style={{ whiteSpace: 'nowrap' }}>
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


