import { useState } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import DeskScene from './components/DeskScene';
import CustomCursor from './components/CustomCursor';
import { contact } from './data/content';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">
        © 2026 <strong>Hasibe.dev</strong> • Crafted with Precision
      </div>
      <div className="footer-links">
        <a href={contact.github}   target="_blank" rel="noopener noreferrer" className="footer-link">Github</a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
      </div>
    </footer>
  );
}

/* ── Mobile Fallback ── */
function MobileFallback({ onOpenPopover }) {
  const items = [
    { id: 'laptop',   icon: '💻', label: 'Projelerim'  },
    { id: 'notebook', icon: '📓', label: 'Deneyimim'   },
    { id: 'diploma',  icon: '🎓', label: 'Eğitim & CV' },
    { id: 'phone',    icon: '📱', label: 'İletişim'    },
  ];
  return (
    <div className="mobile-fallback">
      <div className="mobile-hero">
        <picture>
          <source srcSet="/images/desk-scene4-mobile.jpg" media="(max-width: 768px)" type="image/jpeg" />
          <img
            src="/images/desk-scene4-mobile.jpg"
            alt="Hasibe karakter ve masaüstü çalışma alanı"
            className="mobile-bg-img"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="mobile-overlay" />
        <div className="mobile-content">
          <h1 className="mobile-name">Hasibe Nur Tunç</h1>
          <p className="mobile-title">Yeni Mezun Bilgisayar Mühendisi</p>
          <p className="mobile-sub">YZ · Veri Bilimi · NLP</p>
          <div className="mobile-buttons">
            {items.map(item => (
              <button
                key={item.id}
                className="mobile-btn"
                onClick={() => onOpenPopover(item.id)}
              >
                <span>{item.icon}</span> {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activePopover, setActivePopover] = useState(null);

  const openPopover  = (id) => setActivePopover(id);
  const closePopover = ()   => setActivePopover(null);

  return (
    <>
      <CustomCursor />
      <Navbar activePopover={activePopover} onNavClick={openPopover} />

      {/* Desktop layout */}
      <div className="desktop-only">
        <DeskScene
          activePopover={activePopover}
          onOpenPopover={openPopover}
          onClosePopover={closePopover}
        />
      </div>

      {/* Mobile layout */}
      <div className="mobile-only">
        <MobileFallback onOpenPopover={openPopover} />
        {/* Popovers still render on mobile */}
        <DeskScene
          activePopover={activePopover}
          onOpenPopover={openPopover}
          onClosePopover={closePopover}
          mobileOnly
        />
      </div>

      <Footer />
    </>
  );
}
