"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { profile, services } from "@/data/portfolio";
import { ProjectShowcase } from "./project-showcase";
import { BusinessGrowth } from "./business-growth";
import { Experience, ProfileStats } from "./experience";

function Flower({ small = false }: { small?: boolean }) {
  return <svg className={small ? "flower small" : "flower"} viewBox="0 0 400 400" fill="none" aria-hidden="true"><defs><linearGradient id={small ? "petal-small" : "petal"} x1="70" y1="50" x2="280" y2="320" gradientUnits="userSpaceOnUse"><stop stopColor="#edffc9"/><stop offset=".45" stopColor="#c4f367"/><stop offset="1" stopColor="#68a62b"/></linearGradient></defs>{Array.from({length: 8}, (_, i) => <ellipse key={i} cx="200" cy="114" rx="51" ry="107" fill={`url(#${small ? "petal-small" : "petal"})`} transform={`rotate(${i * 45} 200 200)`}/>)}<circle cx="200" cy="200" r="39" fill="#18201a"/><circle cx="189" cy="189" r="9" fill="#c9f18b" opacity=".7"/></svg>;
}

function Magnetic({ children, className = "", href }: { children: React.ReactNode; className?: string; href: string }) {
  function move(e: MouseEvent<HTMLAnchorElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.14}px, ${(e.clientY-r.top-r.height/2)*.14}px)`;
  }
  return <a className={className} href={href} onMouseMove={move} onMouseLeave={e=>{e.currentTarget.style.transform="";}}>{children}</a>;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const [contactOpen, setContactOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [draft, setDraft] = useState("");
  const [time, setTime] = useState("PKT · UTC+5");
  const heroRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const clock = () => setTime(new Intl.DateTimeFormat("en-GB", {timeZone:"Asia/Karachi", hour:"2-digit", minute:"2-digit",hour12:false}).format(new Date()) + " PKT");
    clock(); const interval = setInterval(clock, 60000);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(entries => entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("revealed");}}), {threshold:.12});
    document.querySelectorAll("[data-reveal]").forEach(el=>observer.observe(el));
    const sections = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)setActive(entry.target.id);}),{rootMargin:"-20% 0px -50% 0px"});
    document.querySelectorAll("main > section[id]").forEach(el=>sections.observe(el));
    if(!reduced) document.documentElement.classList.add("motion-ready");
    return ()=>{clearInterval(interval);observer.disconnect();sections.disconnect();document.documentElement.classList.remove("motion-ready");};
  }, []);

  useEffect(()=>{
    const dialog=dialogRef.current;
    if(contactOpen && dialog && !dialog.open) dialog.showModal();
    if(!contactOpen && dialog?.open) dialog.close();
    if(contactOpen) {const prev=document.body.style.overflow; document.body.style.overflow="hidden";return()=>{document.body.style.overflow=prev;};}
  },[contactOpen]);

  function moveHero(e: MouseEvent<HTMLDivElement>) {
    if(window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches)return;
    const r=e.currentTarget.getBoundingClientRect();
    heroRef.current?.style.setProperty("--mx", `${(e.clientX-r.left-r.width/2)*.025}px`);
    heroRef.current?.style.setProperty("--my", `${(e.clientY-r.top-r.height/2)*.025}px`);
  }


  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header"><a href="#home" className="wordmark" aria-label={`${profile.name} home`}>{profile.brand}<span className="brand-star">✳</span></a><nav id="mobile-links" className={menuOpen?"navigation open":"navigation"} aria-label="Main navigation">{[["growth","Impact"],["work","Work"],["about","About"],["experience","Experience"],["contact","Contact"]].map(([id,label])=><a key={id} href={`#${id}`} aria-current={active===id?"location":undefined} onClick={()=>setMenuOpen(false)}>{label}<span className="nav-dot"/></a>)}</nav><span className="header-note">Full stack by craft.<br/>Thoughtful by design.</span><button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-links">{menuOpen?"Close −":"Menu +"}</button></header>
    <main id="main">
      <section className="hero section-shell" id="home" ref={heroRef} onMouseMove={moveHero} onMouseLeave={()=>{heroRef.current?.style.setProperty("--mx","0px");heroRef.current?.style.setProperty("--my","0px");}}>
        <div className="hero-topline"><span className="eyebrow">KELASH KUMAR · FULL STACK DEVELOPER</span><span className="edition">PORTFOLIO — 2026</span></div>
        <div className="hero-content"><div className="hero-copy"><h1><span>Built for</span><br/><span className="serif">real</span> impact<span className="lime period">.</span></h1><div className="hero-description"><span className="mini-cross">+</span><p>I design and build scalable systems<br/>that help businesses grow.</p></div><Magnetic href="#work" className="pill-button">Explore my work <span className="button-plus">+</span></Magnetic></div><div className="hero-art"><div className="orbit-track"/><span className="art-label top-label">REACT. NEXT.JS. NODE.JS.</span><Flower/><span className="art-label bottom-label">FROM INTERFACE TO INFRASTRUCTURE.</span><span className="floating-tag">Thoughtfully engineered.</span><span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span></div></div>
        <div className="hero-bottom"><span>{profile.role}</span><span className="location">BASED IN {profile.location.toUpperCase()}<span className="muted"> {time}</span></span><a href="#work" className="scroll-link"><span className="scroll-line"/>Scroll to discover</a></div>
      </section>
      <div className="ticker" aria-label="Design, development, a little different"><div aria-hidden="true">{[0,1,2,3].map(i=><span key={i}>GOOD IDEAS <b>✳</b> GREAT EXECUTION <b>✳</b> A LITTLE DIFFERENT <b>✳</b> </span>)}</div></div>
      <BusinessGrowth/>
      <ProjectShowcase/>
      <section className="about-section section-shell" id="about"><div className="about-left" data-reveal><span className="eyebrow">THE PERSON BEHIND THE PIXELS</span><div className="about-emblem"><Flower small/><span>CURIOUS MIND.<br/>CAREFUL HANDS.</span></div></div><div className="about-right" data-reveal><span className="profile-name">Hi, I’m {profile.name}.</span><h2>Complex problems.<br/>Clean solutions.<br/><i>Built for real people.</i></h2><p>{profile.intro}</p><p className="secondary-copy">{profile.about}</p><div className="skill-tags">{["Next.js","Node.js","TypeScript","React","MySQL","Socket.IO"].map(s=><span key={s}>{s}</span>)}</div><ProfileStats/></div></section>
      <Experience/>
      <section className="services-section section-shell" id="approach"><div className="section-heading" data-reveal><div><span className="eyebrow">FROM A FIRST IDEA TO SOMETHING REAL</span><h2>Built with <i>intention.</i></h2></div></div><div className="services" data-reveal>{services.map((s,i)=><details key={s.title} open={i===0}><summary><span>{s.title}</span><span className="details-icon"/></summary><div className="service-body"><p>{s.description}</p><span>{["Multi-tenancy / RBAC / Workflow automation","React / Highcharts / Socket.IO","Next.js / Node.js / REST APIs"][i]}</span></div></details>)}</div></section>
      <section className="contact-section section-shell" id="contact"><div className="contact-top" data-reveal><span className="eyebrow">SOMETHING ON YOUR MIND?</span><span>Good things start with a conversation.</span></div><div className="contact-main" data-reveal><h2>Let’s build<br/><i>what’s next.</i></h2><button className="contact-circle" onClick={()=>setContactOpen(true)}>Start a<br/>conversation<span>+</span></button></div><div className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a><span>{profile.location}</span><div className="social-links">{profile.social.map(social=><a href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">{social.name}</a>)}</div></div><footer><a className="wordmark" href="#home">{profile.brand}<span className="brand-star">✳</span></a><span>NEXT.JS · TYPESCRIPT · BUILT WITH CARE.</span><a href="#home">Back to top <b>+</b></a><span>© {new Date().getFullYear()} {profile.name}</span></footer></section>
    </main>
    <dialog ref={dialogRef} className="contact-dialog" onCancel={()=>setContactOpen(false)} onClick={e=>{if(e.target===e.currentTarget)setContactOpen(false);}} onClose={()=>setContactOpen(false)} aria-labelledby="contact-title"><button className="dialog-close" onClick={()=>setContactOpen(false)} aria-label="Close contact dialog">×</button><span className="eyebrow">LET’S CREATE SOMETHING</span><h2 id="contact-title">Hello, <i>new ideas.</i></h2>{profile.email?<><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a><a className="dialog-phone" href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a><button className="text-button" onClick={async()=>{try{await navigator.clipboard.writeText(profile.email);setCopied(true);}catch{setFormMessage("Select the email address above to copy it.");}}}>{copied?"Email copied":"Copy email"}</button></>:<p className="setup-note">This portfolio is ready for your details. Add your email in <code>src/data/portfolio.ts</code> to activate email inquiries.</p>}<form onSubmit={e=>{e.preventDefault();const data=new FormData(e.currentTarget);if(!profile.email){setDraft(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("brief")}`);setFormMessage("Your brief is ready below. Use Copy brief to save it. Add the portfolio owner’s email to enable inquiries.");return;}window.location.href=`mailto:${profile.email}?subject=${encodeURIComponent(`Project inquiry from ${data.get("name")}`)}&body=${encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("brief")}`)}`;setFormMessage("Your email app will open with your project brief. Send it there to complete your inquiry.");}}><label>Your name<input name="name" required autoComplete="name" placeholder="What should I call you?"/></label><label>Your email<input name="email" type="email" required autoComplete="email" placeholder="you@example.com"/></label><label>What are you thinking?<textarea name="brief" required rows={3} placeholder="A little about your idea…"/></label><button className="pill-button" type="submit">{profile.email?"Prepare email":"Prepare project brief"}<span>+</span></button><p className="form-status" role="status">{formMessage}</p>{draft&&<div className="brief-output"><pre>{draft}</pre><button type="button" className="text-button" onClick={async()=>{try{await navigator.clipboard.writeText(draft);setFormMessage("Project brief copied.");}catch{setFormMessage("Select the brief text to copy it manually.");}}}>Copy brief</button></div>}</form></dialog>
  </>;
}



