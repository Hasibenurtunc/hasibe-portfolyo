import { useState } from 'react';
import '../styles/App.css';

const NAV_LINKS = [
  { label: 'Portfolyo', popoverId: 'laptop'   },
  { label: 'Süreç',    popoverId: 'notebook'  },
  { label: 'Hakkımda', popoverId: 'about'     },
  { label: 'İletişim', popoverId: 'phone'     },
];

export default function Navbar({ activePopover, onNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (popoverId) => {
    setMobileMenuOpen(false);
    onNavClick(popoverId);
  };

  return (
    <nav className="navbar">
      <a className="navbar-logo" href="/" onClick={(e) => e.preventDefault()}>
        Hasibe.dev
      </a>

      {/* Desktop nav links */}
      <ul className="navbar-nav desktop-nav">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={`#${link.popoverId}`}
              id={`nav-${link.label.toLowerCase().replace(/ı/g, 'i').replace(/\s/g, '-')}`}
              className={activePopover === link.popoverId ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.popoverId);
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger button */}
      <button
        className={`navbar-hamburger ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Menü"
        aria-expanded={mobileMenuOpen}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      {/* Mobile drawer overlay */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-nav-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <span className="mobile-nav-title">Menü</span>
              <button
                className="mobile-nav-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Kapat"
              >
                ✕
              </button>
            </div>
            <ul className="mobile-nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    className={`mobile-nav-item ${activePopover === link.popoverId ? 'active' : ''}`}
                    onClick={() => handleLinkClick(link.popoverId)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
