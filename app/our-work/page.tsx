import type { Metadata } from "next";
import { PageHero } from "@/src/components/PageHero";
import { ProjectCard } from "@/src/components/ProjectCard";
import { projects } from "@/src/config/projects";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Recent tree surgery, hedge care and garden clearance work by All Seasons Tree Surgery Ltd.",
};


export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Recent work"
        title="The work should do most of the talking."
        intro="A growing record of tree, hedge and garden work around the local area."
      />
      <section className="section">
        <div className="shell project-grid">
          {projects.map((project) => (
            <ProjectCard
              headingLevel={2}
              project={project}
              key={project.slug}
            />
          ))}
        </div>
      </section>
    </>
  );
}
