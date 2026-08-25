import Popover from '../Popover';
import { contact } from '../../data/content';
import '../../styles/App.css';

export default function ContactPopover({ onClose }) {
  return (
    <Popover onClose={onClose} className="popover-contact">
      <div className="popover-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l1.12-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        İletişim
      </div>
      <div className="popover-subtitle">Bana ulaşmak için aşağıdaki kanalları kullanabilirsiniz.</div>
      <div className="popover-divider" />
      <div className="contact-links">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          id="contact-github"
        >
          <span className="contact-link-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </span>
          <div>
            <div className="contact-link-label">GitHub</div>
            <div className="contact-link-url">github.com/Hasibenurtunc</div>
          </div>
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          id="contact-linkedin"
        >
          <span className="contact-link-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </span>
          <div>
            <div className="contact-link-label">LinkedIn</div>
            <div className="contact-link-url">linkedin.com/in/hasibenurtunc</div>
          </div>
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="contact-link"
          id="contact-email"
        >
          <span className="contact-link-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <polyline points="2,4 12,13 22,4"/>
            </svg>
          </span>
          <div>
            <div className="contact-link-label">E-posta</div>
            <div className="contact-link-url">{contact.email}</div>
          </div>
        </a>
      </div>
    </Popover>
  );
}
