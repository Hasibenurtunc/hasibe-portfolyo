import Popover from '../Popover';
import { education } from '../../data/content';
import '../../styles/App.css';

export default function EducationPopover({ onClose }) {
  return (
    <Popover onClose={onClose} className="popover-education">
      <div className="popover-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
        Eğitim & CV
      </div>
      <div className="popover-subtitle">{education.intro}</div>
      <div className="popover-divider" />
      <div className="education-card">
        <div className="education-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
        <div>
          <div className="education-uni">{education.university}</div>
          <div className="education-dept">{education.department}</div>
          <div className="education-years">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            {education.years}
          </div>
        </div>
      </div>
      <a href="/cv.pdf" download="Hasibe_Nur_Tunc_CV.pdf" className="education-cv-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        CV İndir
      </a>
    </Popover>
  );
}
