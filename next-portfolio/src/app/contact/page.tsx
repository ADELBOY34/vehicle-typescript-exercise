import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Site";
export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <main className="inner-page wrap contact-page"><Eyebrow><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</Eyebrow><h1>Have a good one<br />in <em>mind?</em></h1><p className="contact-lead">Tell me a little about it. I’m always up for a thoughtful conversation and a new challenge.</p><a className="email-link" href="mailto:hello@example.com">hello@example.com <span>↗</span></a><div className="contact-bottom"><div><Eyebrow>ELSEWHERE ON THE INTERNET</Eyebrow><Link href="https://www.instagram.com/" target="_blank">Instagram ↗</Link><Link href="https://www.linkedin.com/" target="_blank">LinkedIn ↗</Link></div><p>Based in Algiers, Algeria<br />Working everywhere.</p></div></main>;
}
