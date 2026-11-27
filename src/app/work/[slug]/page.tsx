import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, profile } from "@/data/portfolio";
import { ProjectArt } from "@/components/project-art";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  return { title: `${project?.name ?? "Project"} — ${profile.name}`, description: project?.description };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <><header className="site-header"><Link href="/" className="wordmark">{profile.brand}<span className="brand-star">✳</span></Link><Link href="/#work" className="back-link">All work <b>+</b></Link></header><main className="case-study section-shell"><span className="eyebrow">{project.category.toUpperCase()} · {project.role}</span><h1>{project.name}<span className="lime">.</span></h1><div className="case-intro"><h2>{project.subtitle}</h2><p>{project.description}</p></div><ProjectArt theme={project.theme}/><div className="case-details"><div><span className="eyebrow">WHAT I BUILT</span><h2>From complex needs<br/><i>to working software.</i></h2><ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul></div><div><span className="eyebrow">THE TECHNOLOGY</span><ul>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul><p className="case-disclaimer">The artwork above is an original visual summary of the project’s capabilities. It is not a screenshot of the production application.</p><a className="pill-button case-contact" href={`mailto:${profile.email}?subject=${encodeURIComponent(`Let's discuss ${project.name}`)}`}>Discuss this project <span>+</span></a></div></div><Link className="next-project" href={`/work/${next.slug}/`}><span className="eyebrow">EXPLORE THE NEXT PROJECT</span><h2>{next.name} <span>+</span></h2></Link></main></>;
}

