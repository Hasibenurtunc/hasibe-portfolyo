import { useState } from 'react';
import '../styles/App.css';
import ProjectsPopover from './popovers/ProjectsPopover';
import ExperiencePopover from './popovers/ExperiencePopover';
import EducationPopover from './popovers/EducationPopover';
import ContactPopover from './popovers/ContactPopover';
import AboutPopover from './popovers/AboutPopover';
import Onboarding from './Onboarding';

// Hotspot definitions
const HOTSPOTS = [
  {
    id: 'laptop',
    cssClass: 'hotspot-laptop',
    tooltip: 'Projelerim',
    ariaLabel: 'Projeleri görüntüle',
  },
  {
    id: 'notebook',
    cssClass: 'hotspot-notebook',
    tooltip: 'Deneyimim',
    ariaLabel: 'Deneyimi görüntüle',
  },
  {
    id: 'diploma',
    cssClass: 'hotspot-diploma',
    tooltip: 'Eğitim & CV',
    ariaLabel: 'Eğitimi görüntüle',
  },
  {
    id: 'character',
    cssClass: 'hotspot-character',
    tooltip: 'Merhaba! 👋',
    ariaLabel: 'Karaktere merhaba de',
  },
  {
    id: 'phone',
    cssClass: 'hotspot-phone',
    tooltip: 'İletişim',
    ariaLabel: 'İletişim bilgilerini görüntüle',
  },
];

export default function DeskScene({ activePopover, onOpenPopover, onClosePopover, mobileOnly = false }) {
  const [showOnboarding, setShowOnboarding] = useState(!mobileOnly);

  return (
    <div className="desk-scene-wrapper">
      {!mobileOnly && (
        <>
          {/* Fixed background — NO overlay on laptop screen */}
          <div className="desk-scene-bg" />
          {/* Edge-only vignette */}
          <div className="desk-scene-vignette" />

          {/* Onboarding welcome animation */}
          {showOnboarding && (
            <Onboarding onDone={() => setShowOnboarding(false)} />
          )}

          {/* Hotspot layer */}
          <div className="hotspot-layer">
            {HOTSPOTS.map((spot) => (
              <div
                key={spot.id}
                className={`hotspot ${spot.cssClass}`}
                data-tooltip={spot.tooltip}
                onClick={() => onOpenPopover(spot.id)}
                role="button"
                tabIndex={0}
                aria-label={spot.ariaLabel}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') onOpenPopover(spot.id);
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Popover rendering */}
      {activePopover === 'laptop'    && <ProjectsPopover  onClose={onClosePopover} />}
      {activePopover === 'notebook'  && <ExperiencePopover onClose={onClosePopover} />}
      {activePopover === 'diploma'   && <EducationPopover  onClose={onClosePopover} />}
      {activePopover === 'phone'     && <ContactPopover   onClose={onClosePopover} />}
      {activePopover === 'about'     && <AboutPopover     onClose={onClosePopover} />}
      {activePopover === 'character' && (
        <div className="popover-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClosePopover(); }}>
          <div className="popover popover-character" role="dialog" aria-modal="true">
            <button className="popover-close" onClick={onClosePopover} aria-label="Kapat">✕</button>
            <div className="character-greeting">
              <div className="character-wave-emoji">👋</div>
              <h3 className="character-greeting-title">Merhaba, ben Hasibe!</h3>
              <p className="character-greeting-text">
                Masadaki eşyalara tıklayarak beni daha yakından tanıyabilirsin.
              </p>
              <div className="character-hints">
                <span className="character-hint-item">💻 Laptop → Projelerim</span>
                <span className="character-hint-item">📓 Defter → Deneyimim</span>
                <span className="character-hint-item">🎓 Diploma → Eğitim & CV</span>
                <span className="character-hint-item">📱 Telefon → İletişim</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
