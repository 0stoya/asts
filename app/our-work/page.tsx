import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/src/components/PageHero";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Recent tree surgery, hedge care and garden clearance work by All Seasons Tree Surgery Ltd.",
};

const projects = [
  {
    title: "Garden clearance",
    location: "Redhill",
    image: "/images/projects/garden-clearance/redhill.svg",
    description:
      "A garden clearance for a new customer preparing to revamp the whole space.",
  },
  {
    title: "Hedge tidy-up",
    location: "St Paul's Cray",
    image: "/images/projects/hedge-cutting/st-pauls-cray.svg",
    description:
      "A long-overdue hedge tidy-up, bringing the boundary back into a clean and manageable shape.",
  },
];

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Recent work"
        title="The work should do most of the talking."
        intro="As the gallery grows, this will become a library of genuine jobs rather than stock photographs pretending to be one."
      />
      <section className="section">
        <div className="shell project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <Image src={project.image} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" />
              </div>
              <div className="project-copy">
                <span>{project.location}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
