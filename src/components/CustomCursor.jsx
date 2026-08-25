import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    let raf;

    let mx = -100, my = -100;
    let rx = -100, ry = -100;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };

    const onEnter = () => {
      dot?.classList.add('cursor-hover');
      ring?.classList.add('cursor-hover');
    };
    const onLeave = () => {
      dot?.classList.remove('cursor-hover');
      ring?.classList.remove('cursor-hover');
    };

    const animate = () => {
      if (dot)  dot.style.transform  = `translate(${mx}px, ${my}px)`;
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ring) ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    const interactives = document.querySelectorAll('a, button, .hotspot, [role="button"]');
    interactives.forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave); });
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      interactives.forEach(el => { el.removeEventListener('mouseenter', onEnter); el.removeEventListener('mouseleave', onLeave); });
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
