import type { Metadata } from 'next';
import Link from 'next/link';
import { projects, media } from '@/lib/projects';
import { Arrow } from '@/components/icons';

export const metadata: Metadata = { title: 'Our work' };
export default function WorkPage() {
  return <main id="main" className="inner-page work-page"><div className="page-intro"><h1>Our work</h1><p>Fresh perspectives. Thoughtful design.<br/>An exploration of what a brand can become.</p></div><div className="work-grid">{projects.map(p => <article className="work-card" key={p.slug} data-reveal><Link href={`/our-work/${p.slug}`} className="work-card-image" style={{ backgroundColor: p.color }}><img src={media(p.image)} alt={`${p.name} concept — ${p.category}`} loading="lazy"/><span className="image-arrow"><Arrow/></span></Link><Link className="work-card-text" href={`/our-work/${p.slug}`}><h2>{p.name}</h2><p>{p.line}</p></Link></article>)}</div><p className="concept-note">Independent concept studies using supplied visual references.</p></main>;
}
