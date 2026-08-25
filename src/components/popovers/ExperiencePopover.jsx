import Popover from '../Popover';
import { experience } from '../../data/content';
import '../../styles/App.css';

export default function ExperiencePopover({ onClose }) {
  return (
    <Popover onClose={onClose} className="popover-experience">
      <div className="popover-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
        Deneyimim
      </div>
      <div className="popover-divider" />
      <div className="popover-scroll">
        <div className="experience-list">
          {experience.map((item, i) => (
            <div className="experience-item" key={i}>
              <div className="experience-dot" />
              <div className="experience-body">
                <div className="experience-company">
                  {item.company}
                  {' '}
                  <span className="experience-role">— {item.role}</span>
                </div>
                <div className="experience-period">{item.period}</div>
                <div className="experience-desc">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Popover>
  );
}
