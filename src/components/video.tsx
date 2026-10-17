'use client';
import { useEffect, useRef, useState } from 'react';

export default function AmbientVideo({ src, className = '', poster, controls = false }: { src: string; className?: string; poster?: string; controls?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => { if (query.matches) { video.pause(); setPaused(true); } };
    update(); query.addEventListener('change', update);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause();
      else if (!query.matches && !paused) video.play().catch(() => {});
    }, { threshold: 0.05 });
    observer.observe(video);
    return () => { observer.disconnect(); query.removeEventListener('change', update); };
  }, [paused]);
  return <><video ref={ref} className={className} src={src} poster={poster} autoPlay muted loop playsInline preload="metadata" aria-hidden={!controls} controls={controls}/>{!controls && <button className={`motion-toggle ${className.includes('hero') ? 'hero-motion-toggle' : ''}`} aria-label={paused ? 'Play background animation' : 'Pause background animation'} onClick={() => { if(ref.current) { if(paused) ref.current.play().catch(() => {}); else ref.current.pause(); setPaused(!paused); } }}>{paused ? 'Play motion' : 'Pause motion'} <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span></button>}</>;
}
