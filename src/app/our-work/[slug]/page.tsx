import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, media } from '@/lib/projects';
import { Arrow } from '@/components/icons';
import AmbientVideo from '@/components/video';

export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const p = projects.find(p => p.slug === slug);
  return { title: p ? `${p.name} — ${p.line}` : 'Project not found' };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const index = projects.findIndex(p => p.slug === slug);
  if(index === -1) notFound();
  const project = projects[index], next = projects[(index+1)%projects.length];
  return <main id="main" className={`case-study case-${slug}`}>
    <div className="case-hero" style={{ backgroundColor: project.color }}><div className="case-hero-art"><img data-parallax src={media(project.image)} alt={`${project.name} visual exploration`}/></div><div className="case-floating"><h1>{project.name}</h1><Link href="/our-work" aria-label="Close project and return to our work">×</Link></div><p className="case-hero-line">{project.line}</p></div>
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>→</span><Link href="/our-work">Our work</Link><span>→</span><span>{project.name}</span></nav>
    <section className="case-introduction" data-reveal><p>{project.description}</p><span>{project.category} · Concept study</span></section>
    <div className="case-gallery"><div className="case-wide" style={{backgroundColor:project.color}} data-reveal><img src={media(project.gallery[0])} alt={`${project.name} design detail`} loading="lazy"/></div><div className="case-diptych"><div style={{backgroundColor:project.color}} data-reveal><img src={media(project.gallery[1])} alt="Supporting visual direction" loading="lazy"/></div><div className="case-type-panel" data-reveal><span>THE IDEA</span><p>{project.idea}</p><span>FORMA — {project.category}</span></div></div><div className="case-motion" data-reveal><AmbientVideo src="/media/cosmos_290928089.mp4" poster="/media/motion-poster.jpg"/></div></div>
    <section className="case-story" data-reveal><h2>THE STORY</h2><div><h3>{project.idea}</h3><p>{project.approach}</p><h3>A connected expression</h3><p>From the first impression to the smallest interaction, every element belongs to the same idea. This study explores how a clear creative direction can stay recognisable while adapting to different formats and contexts.</p><p className="concept-note">This is an independent concept study, using the visual references supplied for this portfolio. It does not represent a commissioned client engagement.</p></div></section>
    <Link className="next-project" href={`/our-work/${next.slug}`}><span>Next project</span><h2>{next.name}<Arrow/></h2><p>{next.line}</p></Link>
  </main>;
}
