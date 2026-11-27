"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectArt } from "./project-art";

const filters = ["All work", "AI & SaaS", "Full stack", "Websites", "Next.js", "Real time"];

export function ProjectShowcase() {
  const [filter, setFilter] = useState("All work");
  const visible = projects.filter(project => filter === "All work" || project.filters.includes(filter));
  return <section className="work-section showcase section-shell" id="work" aria-labelledby="work-title">
    <div className="showcase-intro"><div><span className="eyebrow">A SELECTION OF WHAT I BUILD</span><h2 id="work-title">Serious systems.<br/><i>Thoughtful experiences.</i></h2></div><div className="showcase-note"><span className="showcase-mark" aria-hidden="true">✳</span><p>From AI conversations to connected operations. A closer look at the products, platforms, and interfaces behind my work.</p></div></div>
    <div className="showcase-toolbar"><div className="showcase-filters" role="group" aria-label="Filter projects">{filters.map(label => <button key={label} type="button" aria-pressed={filter === label} onClick={() => setFilter(label)} aria-controls="selected-projects">{label}<span>{label === "All work" ? projects.length : projects.filter(project => project.filters.includes(label)).length}</span></button>)}</div><p className="showcase-count" role="status" aria-live="polite">Showing {visible.length} {visible.length === 1 ? "project" : "projects"}</p></div>
    <div className="showcase-grid" id="selected-projects">{visible.map(project => <article key={project.slug} className={`showcase-project ${project.theme === "chatbot" ? "showcase-featured" : ""}`}>
      <Link href={`/work/${project.slug}/`} className="showcase-visual" aria-label={`Explore ${project.name}`}><ProjectArt theme={project.theme}/><span className="showcase-visual-label">{project.theme === "chatbot" ? "FEATURED PROJECT" : project.category}</span><span className="showcase-open" aria-hidden="true">Explore project <b>+</b></span></Link>
      <div className="showcase-project-info"><div className="showcase-project-heading"><span className="showcase-category">{project.category}</span><h3><Link href={`/work/${project.slug}/`}>{project.name}</Link></h3><p>{project.summary}</p></div><div className="showcase-project-bottom"><div className="showcase-stack" aria-label="Core technologies">{project.technologies.slice(0, 4).map(technology => <span key={technology}>{technology}</span>)}</div><Link className="showcase-case-link" href={`/work/${project.slug}/`} aria-label={`Read ${project.name} case study`}>Case study <span aria-hidden="true">+</span></Link></div></div>
    </article>)}</div>
    <div className="showcase-outro"><p>Have a complex idea in mind?</p><a href="#contact">Let’s make it work together <span aria-hidden="true">+</span></a><span>Project visuals are illustrative.</span></div>
  </section>;
}
