import Link from "next/link";
import Image from "next/image";

export function Header() {
  return <header className="site-header"><Link className="wordmark" href="/" aria-label="Noor home">noor<span>.</span></Link><nav aria-label="Main navigation"><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link className="nav-contact" href="/contact">Let’s talk <span>↗</span></Link></nav></header>;
}

export function Footer() {
  return <footer className="site-footer"><span>© {new Date().getFullYear()} Noor</span><span>Made with care in Algiers <i>✳</i></span><a href="mailto:hello@example.com">Say hello ↗</a></footer>;
}

export const projects = [
  { number: "01", title: "Sunday Studio", kind: "Brand identity · Digital", year: "2025", image: "/images/sunday.svg", alt: "Warm orange and lavender visual identity for Sunday Studio" },
  { number: "02", title: "Form & Field", kind: "Art direction · E-commerce", year: "2024", image: "/images/field.svg", alt: "Editorial product layout for Form and Field" },
  { number: "03", title: "Open House", kind: "Product design · Web", year: "2024", image: "/images/openhouse.svg", alt: "Bright blue event page for Open House" },
];

export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return <Link className="project-card" href="/projects"><div className="project-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 540px) 100vw, (max-width: 800px) 50vw, 33vw" /><span className="project-arrow">↗</span></div><div className="project-meta"><div><span className="eyebrow">{project.number} / {project.year}</span><h3>{project.title}</h3><p>{project.kind}</p></div></div></Link>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }
