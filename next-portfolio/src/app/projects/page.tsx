import type { Metadata } from "next";
import { ProjectCard, projects, Eyebrow } from "@/components/Site";
export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return <main className="inner-page wrap"><Eyebrow>A FEW GOOD THINGS</Eyebrow><div className="projects-title"><h1>Selected work<span>.</span></h1><p>A collection of identities, digital places and little details made with good people.</p></div><div className="project-grid project-grid-page">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div><p className="work-note">More work is always in progress. <a href="mailto:hello@example.com">Ask me what’s next ↗</a></p></main>;
}
