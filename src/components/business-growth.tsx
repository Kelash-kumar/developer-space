"use client";

import Link from "next/link";
import { useState } from "react";

const paths = [
  {
    id: "customers", label: "Win more customers", symbol: "✳", title: "Make the next step effortless.",
    problem: "Interested visitors. Missed enquiries. Leads spread across tools.",
    solution: "I connect a fast website, clear enquiry flows, and your CRM so your team can follow up with context.",
    steps: ["Fast, clear website", "Connected lead capture", "A measurable sales pipeline"],
    outcome: "More opportunities to turn interest into customers.",
    project: "Intellishare AI", href: "/work/intellishare/", measure: "Track conversion, enquiry completion, and lead response time.",
    volumeLabel: "Monthly qualified leads", volume: 200, baselineLabel: "Current conversion rate (%)", baseline: 20,
    lever: "Assumed relative conversion uplift", assumption: 25,
  },
  {
    id: "operations", label: "Free up your team", symbol: "⌘", title: "Let your systems do the repetitive work.",
    problem: "Copying records. Chasing updates. Building the same report again.",
    solution: "I connect your tools and automate repeatable workflows, with permissions and dashboards that keep your team in control.",
    steps: ["Connected business tools", "Automated workflows", "Clear operational dashboards"],
    outcome: "Less administration. More capacity for the work that matters.",
    project: "StayShare Intellishare", href: "/work/stayshare-crm/", measure: "Track manual hours, workflow failures, and reporting turnaround.",
    volumeLabel: "Repetitive tasks per month", volume: 500, baselineLabel: "Minutes per task", baseline: 8,
    lever: "Assumed manual effort removed", assumption: 50,
  },
  {
    id: "ai", label: "Support with AI", symbol: "✧", title: "Put your business knowledge to work.",
    problem: "Repeated questions. Scattered documents. A team searching for answers.",
    solution: "I build AI assistants grounded in your websites and documents, with source citations, conversation history, and usage visibility.",
    steps: ["Your websites & documents", "Search with relevant context", "An assistant with source citations"],
    outcome: "Help people find answers while your team handles complex needs.",
    project: "AI Chatbot SaaS Platform", href: "/work/ai-chatbot-saas/", measure: "Track answer quality, resolution rate, escalations, and AI cost.",
    volumeLabel: "Routine enquiries per month", volume: 1000, baselineLabel: "Minutes per enquiry", baseline: 6,
    lever: "Assumed enquiries fully handled by AI", assumption: 40,
  },
] as const;
const number = (value: number) => value.toLocaleString("en-US", { maximumFractionDigits: 1 });
const bound = (value: string, max: number) => Math.min(max, Math.max(0, Number(value) || 0));

export function BusinessGrowth() {
  const [selected, setSelected] = useState(0);
  const [volume, setVolume] = useState<number>(200);
  const [baseline, setBaseline] = useState<number>(20);
  const [assumption, setAssumption] = useState<number>(25);
  const path = paths[selected];
  const customers = path.id === "customers";
  const before = customers ? volume * baseline / 100 : volume * baseline / 60;
  const rate = Math.min(100, baseline * (1 + assumption / 100));
  const after = customers ? volume * rate / 100 : before * (1 - assumption / 100);
  const difference = Math.abs(after - before);
  const max = Math.max(before, after, 1);
  const unit = customers ? "customers / month" : "manual hours / month";

  function choose(index: number) {
    setSelected(index);
    setVolume(paths[index].volume);
    setBaseline(paths[index].baseline);
    setAssumption(paths[index].assumption);
  }

  return <section id="growth" className="growth-section section-shell" aria-labelledby="growth-title">
    <div className="growth-heading"><div><span className="eyebrow">SOFTWARE WITH A BUSINESS PURPOSE</span><h2 id="growth-title">Built for your<br/><i>next stage.</i></h2></div><p>Better software should make a difference.<br/>Explore how I can help your business move forward.</p></div>
    <div className="growth-options" role="group" aria-label="Choose a business goal">{paths.map((item,index) => <button key={item.id} type="button" aria-pressed={selected === index} aria-controls="growth-explorer" onClick={() => choose(index)}><span aria-hidden="true">{item.symbol}</span>{item.label}</button>)}</div>
    <div className="growth-explorer" id="growth-explorer">
      <div className="growth-story" key={path.id}>
        <div className="growth-story-top"><span className="growth-overline">YOUR GOAL / {path.label}</span><span className="growth-asterisk" aria-hidden="true">{path.symbol}</span></div>
        <h3>{path.title}</h3><p className="growth-problem">{path.problem}</p><p className="growth-solution">{path.solution}</p>
        <div className="growth-flow" aria-label="How the solution works">{path.steps.map((step,index) => <div className="growth-flow-step" key={step}><span className="growth-flow-icon" aria-hidden="true">{["◈", "✳", "◎"][index]}</span><span>{step}</span>{index < 2 && <span className="growth-flow-connector" aria-hidden="true"/>}</div>)}</div>
        <p className="growth-outcome">{path.outcome}</p><p className="growth-measure">{path.measure}</p>
        <Link className="growth-project-link" href={path.href}>See the work: {path.project}<span aria-hidden="true">+</span></Link>
      </div>
      <div className="growth-model">
        <div className="growth-model-heading"><span className="growth-overline">EXPLORE THE POSSIBILITY</span><span className="growth-model-badge">Interactive example</span></div>
        <h3>What could change?</h3><p className="growth-model-intro">Start with your numbers. Adjust an assumption.</p>
        <div className="growth-inputs"><label htmlFor="growth-volume">{path.volumeLabel}<input id="growth-volume" type="number" min="0" max="1000000" step="1" value={volume} onChange={event => setVolume(bound(event.target.value,1000000))}/></label><label htmlFor="growth-baseline">{path.baselineLabel}<input id="growth-baseline" type="number" min="0" max={customers ? 100 : 1440} step={customers ? "0.1" : "1"} value={baseline} onChange={event => setBaseline(bound(event.target.value, customers ? 100 : 1440))}/></label></div>
        <label className="growth-slider-label" htmlFor="growth-assumption"><span>{path.lever}</span><output htmlFor="growth-assumption">{assumption}%</output></label><input className="growth-slider" id="growth-assumption" type="range" min="0" max="100" step="5" value={assumption} onChange={event => setAssumption(Number(event.target.value))}/><div className="growth-slider-ends" aria-hidden="true"><span>0%</span><span>100%</span></div>
        <div className="growth-result" role="status" aria-live="polite" aria-atomic="true"><span className="growth-result-number">{customers ? "+" : ""}{number(difference)}<small>{customers ? "customers" : "hours"}</small></span><p>{customers ? "potential additional customers per month" : "potential team capacity freed per month"}</p></div>
        <div className="growth-comparison" aria-label={`Current: ${number(before)} ${unit}. Scenario: ${number(after)} ${unit}.`}><div><span>Current</span><div className="growth-bar-track"><i style={{width:`${before/max*100}%`}}/></div><b>{number(before)}</b></div><div><span>Scenario</span><div className="growth-bar-track"><i className="growth-bar-after" style={{width:`${after/max*100}%`}}/></div><b>{number(after)}</b></div><p>{unit}{customers ? ` · ${number(baseline)}% to ${number(rate)}% conversion` : ""}</p></div>
        <details className="growth-math"><summary>How this is calculated <span aria-hidden="true">+</span></summary><p>{customers ? "Monthly leads × conversion rate. Relative uplift increases the current rate, capped at 100%. Additional customers = scenario customers − current customers." : "Monthly tasks or enquiries × minutes each ÷ 60 = current manual hours. Capacity freed = current hours × the selected percentage."}</p>{path.id === "ai" && <p>The AI example assumes the selected enquiries need no manual handling. Review and escalation time would reduce the hours freed.</p>}</details>
        <p className="growth-assumptions">Illustrative scenario based on your inputs, not a forecast or a claim of client results. Implementation, adoption, and ongoing costs affect the outcome.</p>
      </div>
    </div>
    <div className="growth-footer"><div><span className="growth-overline">START WITH THE BOTTLENECK</span><p>We define the problem, build the right system,<br/>then measure what actually improves.</p></div><a href="#contact" className="growth-contact">Let’s talk about your business<span aria-hidden="true">+</span></a></div>
    <details className="growth-research"><summary>The thinking behind this section <span aria-hidden="true">+</span></summary><div><p>Performance and productivity are useful starting points for measurement. Rakuten 24 tested website performance improvements against business metrics; research on AI-assisted customer support examined issues resolved per hour. These are external examples, not results from my projects or calculator assumptions.</p><a href="https://web.dev/case-studies/rakuten" target="_blank" rel="noopener noreferrer">web.dev · Rakuten 24 performance case study</a><a href="https://www.nber.org/papers/w31161" target="_blank" rel="noopener noreferrer">NBER · Generative AI at Work</a></div></details>
  </section>;
}
