import { useEffect } from 'react';
import '../styles/App.css';

export default function Popover({ onClose, children, className = '' }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="popover-backdrop" onClick={handleBackdropClick}>
      <div className={`popover ${className}`} role="dialog" aria-modal="true">
        <button
          className="popover-close"
          onClick={onClose}
          aria-label="Kapat"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
