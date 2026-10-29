import Link from "next/link";
import { Eyebrow, ProjectCard, projects } from "@/components/Site";

export default function HomePage() {
  return <main>
    <section className="hero wrap"><div className="hero-copy"><Eyebrow><span className="status-dot" /> INDEPENDENT DESIGNER & DEVELOPER · ALGIERS</Eyebrow><h1>Making the digital<br />feel a little more <em>human.</em></h1><p className="hero-intro">I’m Noor — a designer and developer partnering with thoughtful people to build clear, characterful experiences for the web.</p><Link className="button button-dark" href="/projects">Explore my work <span>↘</span></Link></div><div className="hero-art"><div className="art-shape shape-one"/><div className="art-shape shape-two"/><div className="art-sun">✳</div><span className="art-caption">CURIOUS BY NATURE<br />INTENTIONAL BY DESIGN</span><span className="art-index">01 — 25</span></div></section>
    <section className="work-section wrap"><div className="section-heading"><div><Eyebrow>A FEW GOOD THINGS</Eyebrow><h2>Selected work<span>.</span></h2></div><Link className="text-link" href="/projects">All projects <span>↗</span></Link></div><div className="project-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div></section>
    <section className="home-note"><div className="wrap note-inner"><Eyebrow>A LITTLE ABOUT HOW I WORK</Eyebrow><p>Good work starts with <em>good questions.</em> I bring strategy, design and code together to make things that are useful, distinct and a joy to use.</p><Link className="text-link" href="/about">A little more about me <span>↗</span></Link></div></section>
    <section className="contact-strip wrap"><div><Eyebrow>HAVE SOMETHING IN MIND?</Eyebrow><h2>Let’s make it <em>matter.</em></h2></div><Link className="round-link" href="/contact" aria-label="Go to contact">↗</Link></section>
  </main>;
}
