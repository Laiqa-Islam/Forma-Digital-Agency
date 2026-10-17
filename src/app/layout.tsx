import type { Metadata } from 'next';
import { Header, Footer, CookieConsent } from '@/components/site-shell';
import Motion from '@/components/motion';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'FORMA — Strategy. Design. Digital.', template: '%s — FORMA' },
  description: 'An independent creative studio exploring the space between brand, design, and digital experience.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header/>{children}<Footer/><CookieConsent/><Motion/></body></html>;
}
