'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, { y: 45, opacity: 0, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 96%', once: true } });
      });
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        gsap.fromTo(el, { yPercent: -5, scale: 1.12 }, { yPercent: 5, scale: 1.12, ease: 'none',
          scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
      });
      const hero = document.querySelector('.hero');
      if (hero) {
        gsap.to('.hero-wordmark', { yPercent: 32, opacity: 0.15, ease: 'none', scrollTrigger: {
          trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
        gsap.fromTo('.intro-panel', { width: '96%' }, { width: '100%', borderRadius: 0, ease: 'none',
          scrollTrigger: { trigger: '.intro-panel', start: 'top 95%', end: 'top 25%', scrub: true } });
        gsap.fromTo('.statement-line', { yPercent: 45, opacity: 0.2 }, { yPercent: 0, opacity: 1, stagger: 0.12,
          scrollTrigger: { trigger: '.statement', start: 'top 85%', end: 'center 60%', scrub: 1 } });
        gsap.fromTo('.world-type', { y: 70 }, { y: -40, ease: 'none', scrollTrigger: {
          trigger: '.world-section', start: 'top bottom', end: 'bottom top', scrub: true } });
      }
    });
    const refresh = () => ScrollTrigger.refresh();
    document.fonts.ready.then(refresh);
    const videos = [...document.querySelectorAll('video')];
    videos.forEach(video => video.addEventListener('loadedmetadata', refresh));
    return () => { mm.revert(); videos.forEach(video => video.removeEventListener('loadedmetadata', refresh)); };
  }, [pathname]);
  return null;
}
