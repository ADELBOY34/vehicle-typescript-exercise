import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Site";
export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <main className="inner-page wrap"><Eyebrow>THE PERSON BEHIND THE PIXELS</Eyebrow><h1>A designer who<br />likes to <em>understand</em><br />the whole picture.</h1><div className="about-grid"><div className="about-art"><div className="portrait-shape">n.</div><span>HELLO FROM ALGIERS ✳</span></div><div className="about-copy"><h2>Hi, I’m Noor.</h2><p>I’m an independent designer and developer with a soft spot for useful ideas, thoughtful details and the people behind every project.</p><p>My practice moves between strategy, visual identity and the web. I like getting close to a problem, asking the extra question, then making the answer feel beautifully simple.</p><p>When I’m away from the screen, you’ll probably find me collecting old magazines, taking the long way home or ordering one more coffee.</p><div className="skills"><Eyebrow>THINGS I CAN HELP WITH</Eyebrow><span>Digital design</span><span>Visual identity</span><span>Creative development</span><span>Art direction</span></div><Link className="text-link" href="/contact">Have a project? Say hello <span>↗</span></Link></div></div></main>;
}
