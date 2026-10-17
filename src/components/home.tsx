'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { projects, media } from '@/lib/projects';
import { Arrow } from './icons';
import { Modal } from './site-shell';
import AmbientVideo from './video';
import WorldMap from './world-map';

export default function Home() {
  const [showreel, setShowreel] = useState(false);
  const [slide, setSlide] = useState(0);
  const swiper = useRef<SwiperType | null>(null);
  return <main id="main" className="home">
    <section className="hero" aria-label="Forma creative studio">
      <div className="hero-media"><AmbientVideo src="/media/hero-blobs.mp4" className="hero-video" poster="/media/hero-poster.jpg"/></div>
      <h1 className="hero-wordmark">FORMA</h1>
      <div className="hero-bottom"><span>Independent minds.<br/>Extraordinary possibilities.</span><a href="#intro" className="hero-scroll" aria-label="Explore Forma">Scroll to explore <span>↓</span></a><span className="hero-location">Strategy. Design. Digital.</span></div>
    </section>

    <section id="intro" className="intro-panel">
      <h2 className="intro-heading">Independent thinking. Lasting impact.<br/>Strategy. Design. Digital.</h2>
      <div className="showreel" data-reveal>
        <AmbientVideo src="/media/cosmos_612491425.mp4" poster="/media/reel-poster.jpg" className="showreel-video"/>
        <button className="showreel-play" onClick={() => setShowreel(true)}><span aria-hidden="true">▷</span> Play showreel</button>
      </div>
    </section>

    <section className="featured-work" aria-labelledby="work-heading">
      <div className="section-bar"><h2 id="work-heading"><Link href="/our-work">Our work <Arrow/></Link></h2><span>Selected explorations</span></div>
      <div className="featured-carousel">
        <Swiper modules={[A11y, Autoplay, Keyboard]} onSwiper={s => { swiper.current = s; }} onSlideChange={s => setSlide(s.realIndex)} slidesPerView={1} speed={900} loop keyboard={{ enabled: true, onlyInViewport: true }} autoplay={{ delay: 6000, disableOnInteraction: true, pauseOnMouseEnter: true }} onInit={s => { if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) s.autoplay.stop(); }}>
          {projects.slice(0,7).map(project => <SwiperSlide key={project.slug}><Link href={`/our-work/${project.slug}`} className={`featured-project project-${project.slug}`} style={{ backgroundColor: project.color }}><div className="featured-art"><img src={media(project.image)} alt={`${project.name} — ${project.category.toLowerCase()} concept`} loading="lazy"/></div><div className="featured-label"><h3>{project.name} <Arrow/></h3><p>{project.line}</p></div><span className="project-open">Explore project <Arrow/></span></Link></SwiperSlide>)}
        </Swiper>
        <div className="carousel-navigation"><div className="slide-dots">{projects.slice(0,7).map((p,i) => <button key={p.slug} aria-label={`Show ${p.name}`} aria-current={slide===i ? 'true' : undefined} onClick={() => swiper.current?.slideToLoop(i)} />)}</div><div className="carousel-arrows"><button aria-label="Previous project" onClick={() => swiper.current?.slidePrev()}><Arrow/></button><button aria-label="Next project" onClick={() => swiper.current?.slideNext()}><Arrow/></button></div></div>
      </div>
    </section>

    <section className="studio-section">
      <h2 className="statement"><span className="statement-line">IDEAS</span><span className="statement-line">DESIGNED TO</span><span className="statement-line">MOVE YOU</span></h2>
      <div className="services">{[
        ['STRATEGY', 'We find what makes you different, and turn it into a clear direction for your brand and business.'],
        ['DESIGN', 'We give ideas a distinctive identity, through thoughtful visual, verbal, and motion design.'],
        ['DIGITAL', 'We bring brands into everyday life with websites and experiences that feel as good as they work.'],
      ].map(([title,text]) => <article className="service" key={title} data-reveal><h3>{title}</h3><p>{text}</p></article>)}</div>
      <p className="purpose" data-reveal>We believe the most meaningful work happens<br className="desktop-break"/> when curious people think, make, and move together.</p>
      <div className="world-section"><WorldMap/><h2 className="world-type"><span>MANY PERSPECTIVES.</span><span>SHARED AMBITION.</span><span>ONE STUDIO.</span></h2></div>
      <div className="studio-disciplines" data-reveal><p>Different disciplines. One connected practice.</p><div><span className="discipline-strategy">Think.</span><span className="discipline-design">Make.</span><span className="discipline-digital">Move.</span></div><p>Built on curiosity.<br/>Made for what comes next.</p></div>
    </section>
    {showreel && <Modal title="Forma showreel" onClose={() => setShowreel(false)}><video className="modal-video" src="/media/cosmos_612491425.mp4" autoPlay controls playsInline/><p className="modal-caption">A study in ideas, form, and movement. Supplied motion reference.</p></Modal>}
  </main>;
}
