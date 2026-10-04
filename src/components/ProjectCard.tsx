import Image from "next/image";
import { MapPin } from "lucide-react";

import {
  projectImage,
  type Project,
} from "@/src/config/projects";

export function ProjectCard({
  project,
  headingLevel = 3,
}: {
  project: Project;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className="project-card">
      <div className="project-image">
        <Image
          src={projectImage(project)}
          alt={project.imageAlt ?? ""}
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
        />
        <span className="project-location">
          <MapPin size={15} aria-hidden="true" />
          {project.location}
        </span>
      </div>
      <div className="project-copy">
        <span className="project-service">{project.serviceLabel}</span>
        <Heading>{project.title}</Heading>
        <p>{project.description}</p>
      </div>
    </article>
  );
}
