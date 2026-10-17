'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Arrow, Emblem, Globe } from './icons';

const links = [{ href: '/our-work', label: 'Our work' }, { href: '/contact-us', label: 'Contact us' }, { href: '/join-us', label: 'Join us' }];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [language, setLanguage] = useState(false);
  useEffect(() => {
    setMenu(false); setLanguage(false);
    const update = () => setScrolled(window.scrollY > window.innerHeight * 0.65);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [pathname]);
  useEffect(() => {
    if (!menu) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = old; };
  }, [menu]);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className={`site-header ${pathname === '/' && !scrolled && !menu ? 'header-hidden' : ''}`}>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map((link, i) => <span key={link.href}><Link href={link.href} aria-current={pathname.startsWith(link.href) ? 'page' : undefined}>{link.label}</Link>{i < 2 && ', '}</span>)}</nav>
      <button className="mobile-menu-button" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} aria-controls="mobile-navigation" onClick={() => setMenu(!menu)}><span/><span/></button>
      <Link className="header-logo" href="/" aria-label="Forma home">FORMA</Link>
      <div className="language-wrap"><button className="globe-button" aria-label="Select language" aria-expanded={language} onClick={() => setLanguage(!language)}><Globe/></button>{language && <div className="language-panel"><span>Language</span><button onClick={() => setLanguage(false)}>English <span>✓</span></button><p>This edition is available in English.</p></div>}</div>
    </header>
    {menu && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation" onKeyDown={e => { if(e.key === 'Escape') setMenu(false); }}>{links.map(link => <Link key={link.href} href={link.href}>{link.label}<Arrow/></Link>)}<p>Strategy. Design. Digital.</p></nav>}
  </>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-actions"><Link className="pill" href="/contact-us">Contact us <Arrow/></Link><Link className="pill" href="/join-us">Join us <Arrow/></Link></div>
    <p className="footer-thought">Good things start with a conversation.</p>
    <Link className="footer-emblem" href="/" aria-label="Back to Forma home"><Emblem/></Link>
    <div className="footer-bottom"><div className="legal-links"><Link href="/privacy-policy">Privacy policy</Link><Link href="/cookie-policy">Cookie policy</Link><button onClick={() => window.dispatchEvent(new Event('forma:cookie-settings'))}>Cookie settings</button></div><p>© {new Date().getFullYear()} <span className="serif">FORMA</span><br/>Independent studio concept</p><div className="legal-links right"><Link href="/terms-of-use">Terms of use</Link><a href="#main">Back to top ↑</a></div></div>
  </footer>;
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  useEffect(() => {
    try { setOpen(!localStorage.getItem('forma-consent')); } catch { /* Storage may be unavailable in private browsing. */ }
    const show = () => { setOpen(true); setSettings(true); };
    window.addEventListener('forma:cookie-settings', show);
    return () => window.removeEventListener('forma:cookie-settings', show);
  }, []);
  const save = (value: boolean) => {
    try { localStorage.setItem('forma-consent', JSON.stringify({ necessary: true, analytics: value })); } catch { /* Choice still applies for this visit. */ }
    setOpen(false); setSettings(false);
  };
  if (!open) return null;
  return <aside className={`cookie-banner ${settings ? 'cookie-expanded' : ''}`} aria-label="Cookie preferences">
    <div><strong>{settings ? 'Your privacy, your choice.' : 'A small note on cookies.'}</strong><p>{settings ? 'Essential storage remembers your preferences. Optional analytics are currently inactive; your choice is saved for future visits.' : 'We use essential local storage to remember your preferences. You choose whether to allow optional analytics.'} <Link href="/cookie-policy">Read our policy</Link></p>{settings && <label className="cookie-toggle"><input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)}/>Allow optional analytics</label>}</div>
    <div className="cookie-actions"><button onClick={() => settings ? save(analytics) : setSettings(true)}>{settings ? 'Save preferences' : 'Cookie settings'}</button><button onClick={() => save(false)}>Essential only</button><button className="cookie-accept" onClick={() => save(true)}>Accept all</button></div>
  </aside>;
}

export function Modal({ children, title, onClose }: { children: React.ReactNode; title: string; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement;
    const dialog = ref.current;
    dialog?.showModal();
    const old = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = old; dialog?.close(); previous?.focus(); };
  }, []);
  return <dialog ref={ref} className="modal" onCancel={onClose} onClick={e => { if(e.target === ref.current) onClose(); }} aria-label={title}><button autoFocus className="modal-close" aria-label="Close dialog" onClick={onClose}>×</button>{children}</dialog>;
}
