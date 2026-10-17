import type { Metadata } from 'next';
import Contact from '@/components/contact';
export const metadata: Metadata = { title: 'Contact us' };
export default function Page() { return <Contact/>; }
