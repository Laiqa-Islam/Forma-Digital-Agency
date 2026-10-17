'use client';
import { FormEvent, useEffect, useState } from 'react';
import WorldMap from './world-map';
import { Arrow } from './icons';

const locations = [
  { city: 'Karachi', region: 'Pakistan', zone: 'Asia/Karachi', x: 65, y: 44, note: 'Our home perspective. A connection to a vibrant city of makers, thinkers, and independent businesses.' },
  { city: 'London', region: 'United Kingdom', zone: 'Europe/London', x: 48, y: 27, note: 'A shared time zone for conversations across Europe, with room for different perspectives.' },
  { city: 'Dubai', region: 'United Arab Emirates', zone: 'Asia/Dubai', x: 61, y: 44, note: 'A meeting point for ambitious ideas and collaborations across the Middle East.' },
  { city: 'New York', region: 'United States', zone: 'America/New_York', x: 28, y: 33, note: 'Open to conversations across the Atlantic. Different hours, the same creative curiosity.' },
  { city: 'Singapore', region: 'Singapore', zone: 'Asia/Singapore', x: 76, y: 58, note: 'An open door to collaborations across Southeast Asia and beyond.' },
];
export default function Contact() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('Karachi');
  const [now, setNow] = useState<Date | null>(null);
  const [zoom, setZoom] = useState(1);
  const [draft, setDraft] = useState('');
  const [enquiry, setEnquiry] = useState('New project');
  useEffect(() => { setNow(new Date()); const id=setInterval(() => setNow(new Date()),60000); if(new URLSearchParams(window.location.search).get('enquiry')==='Careers') setEnquiry('Careers'); return () => clearInterval(id); }, []);
  const filtered = locations.filter(l => `${l.city} ${l.region}`.toLowerCase().includes(query.toLowerCase()));
  const selected = locations.find(l => l.city === active)!;
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const f=new FormData(e.currentTarget);
    setDraft(`FORMA — ${f.get('enquiry')} enquiry\n\nName: ${f.get('first')} ${f.get('last')}\nEmail: ${f.get('email')}\nCompany: ${f.get('company') || 'Not provided'}\nLocation: ${f.get('location')}\n\n${f.get('message')}\n`);
  };
  const download = () => {
    const url=URL.createObjectURL(new Blob([draft],{type:'text/plain;charset=utf-8'}));
    const a=document.createElement('a'); a.href=url; a.download='forma-enquiry.txt'; a.click(); URL.revokeObjectURL(url);
  };
  return <main id="main" className="inner-page contact-page"><div className="page-intro"><h1>Contact us</h1><p>Different perspectives. A world of possibilities.</p></div>
    <section className="contact-directory" aria-label="Explore our collaboration time zones"><div className="location-sidebar"><label className="search-field"><span className="sr-only">Find a location</span><input placeholder="Enter a location" value={query} onChange={e => setQuery(e.target.value)}/><span aria-hidden="true">⌕</span></label><div className="location-list">{filtered.length ? filtered.map(location => <article key={location.city} className={`location-card ${active===location.city ? 'location-active' : ''}`}><button onClick={() => setActive(location.city)} aria-expanded={active===location.city}><span>{location.city}</span><time suppressHydrationWarning>{now ? new Intl.DateTimeFormat('en-GB',{timeZone:location.zone,hour:'numeric',minute:'2-digit',hour12:true}).format(now) : '—'}</time></button><p>{location.region}<br/>Remote collaboration</p>{active===location.city && <p className="location-description">{location.note}</p>}<a href="#get-in-touch" onClick={() => setActive(location.city)}>Start a conversation <span>↗</span></a></article>) : <p className="empty-state">No matching locations.<br/>Try a city or country.</p>}</div></div><div className="contact-map"><div className="map-content" style={{transform:`scale(${zoom})`}}><WorldMap/>{locations.map(location => <button key={location.city} className={`map-pin ${active===location.city ? 'pin-active' : ''}`} style={{left:`${location.x}%`,top:`${location.y}%`}} aria-label={`Select ${location.city}`} onClick={() => setActive(location.city)}><span/>{active===location.city && <span className="pin-label">{location.city}</span>}</button>)}</div><div className="map-controls"><button aria-label="Zoom in" disabled={zoom>=1.6} onClick={() => setZoom(v=>Math.min(1.6,+(v+.2).toFixed(1)))}>+</button><button aria-label="Zoom out" disabled={zoom<=1} onClick={() => setZoom(v=>Math.max(1,+(v-.2).toFixed(1)))}>−</button></div><div className="map-caption"><span>{selected.city} ↗</span><p>A connected studio.<br/>Open to working everywhere.</p></div></div></section>
    <section id="get-in-touch" className="contact-form-section"><h2 data-reveal>Get in touch</h2><p className="form-intro">Tell us what you have in mind.</p><form onSubmit={submit} className="contact-form"><div className="form-two"><label>First name<input name="first" autoComplete="given-name" required maxLength={80} placeholder="First name"/></label><label>Last name<input name="last" autoComplete="family-name" required maxLength={80} placeholder="Last name"/></label></div><label>Email<input name="email" type="email" autoComplete="email" required maxLength={200} placeholder="you@company.com"/></label><label>Company <span>(optional)</span><input name="company" autoComplete="organization" placeholder="Company name" maxLength={200}/></label><div className="form-two"><label>Enquiry type<select name="enquiry" value={enquiry} onChange={e=>setEnquiry(e.target.value)}><option>New project</option><option>Collaboration</option><option>Careers</option><option>General enquiry</option></select></label><label>Nearest time zone<select name="location" defaultValue="Karachi">{locations.map(l=><option key={l.city}>{l.city}</option>)}<option>Somewhere else</option></select></label></div><label>Your message<textarea name="message" required minLength={10} maxLength={5000} rows={5} placeholder="A little about your idea, your goals, and where you want to go."/></label><label className="checkbox-label"><input type="checkbox" required/>I understand that this prepares an enquiry I can download. <a href="/privacy-policy">Privacy policy</a></label><button className="pill submit-button" type="submit">Prepare enquiry <Arrow/></button><p className="form-note">Your details stay in your browser. This concept site does not send messages.</p></form>{draft && <div className="draft-result" role="status"><h3>Your enquiry is ready.</h3><p>Download a copy to keep or share with your chosen contact.</p><button className="pill" onClick={download}>Download enquiry ↓</button></div>}</section>
  </main>;
}
