import { certifications, resume, skills, stats } from "@/data/portfolio";

export function ProfileStats() {
  return <div className="profile-stats" data-reveal>{stats.map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>;
}

export function Experience() {
  return <section id="experience" className="experience-section section-shell"><div className="section-heading" data-reveal><div><span className="eyebrow">THE JOURNEY SO FAR</span><h2>Experience & <i>learning.</i></h2></div><p>Real products. Real challenges.<br/>Always building on what’s next.</p></div><div className="resume-layout"><div className="resume-timeline" data-reveal>{resume.filter(item => item.type !== "education" || item.title !== "Certifications & Activities").map(item => <article key={item.title} className="resume-entry"><span className="eyebrow">{item.type === "experience" ? "EXPERIENCE" : "EDUCATION"}</span><span className="resume-year">{item.year}</span><h3>{item.title}</h3><h4>{item.company}</h4><p>{item.desc}</p>{"technologies" in item && item.technologies && <div className="skill-tags">{item.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>}</article>)}</div><aside className="certifications" data-reveal><span className="eyebrow">CERTIFICATIONS & ACTIVITIES</span>{certifications.map(cert => <div key={cert.name}><span>{cert.year}</span><h3>{cert.name}</h3><p>{cert.issuer}</p></div>)}</aside></div><div className="technical-skills" data-reveal><div><span className="eyebrow">MY EVERYDAY TOOLKIT</span><h3>The stack behind<br/><i>the experience.</i></h3></div><div className="technical-skill-list">{skills.map(skill => <span key={skill.name}>{skill.name}</span>)}</div></div></section>;
}
