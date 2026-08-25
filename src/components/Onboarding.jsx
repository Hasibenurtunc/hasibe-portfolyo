import { useState, useEffect } from 'react';

export default function Onboarding({ onDone }) {
  const [phase, setPhase] = useState('visible'); // 'visible' | 'fading' | 'done'

  useEffect(() => {
    // After 2.5s show, start fade-out
    const fadeTimer = setTimeout(() => setPhase('fading'), 2500);
    // After fade completes (500ms), remove from DOM
    const doneTimer = setTimeout(() => {
      setPhase('done');
      onDone?.();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  if (phase === 'done') return null;

  return (
    <div className={`onboarding-overlay ${phase === 'fading' ? 'onboarding-fadeout' : ''}`}>
      <div className="onboarding-content">
        <div className="onboarding-wave">👋</div>
        <h2 className="onboarding-title">Hasibe&apos;nin kişisel çalışma alanına hoş geldin</h2>
        <p className="onboarding-hint">Masadaki eşyalara tıklayarak keşfetmeye başla</p>
      </div>
    </div>
  );
}
