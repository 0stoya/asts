export type ProjectService =
  | "tree-surgery"
  | "hedge-cutting"
  | "tree-removal"
  | "stump-grinding"
  | "garden-clearance"
  | "landscaping";

export const projectArtwork: Record<ProjectService, string> = {
  "tree-surgery": "/images/projects/tree-surgery/tree_surgery.png",
  "hedge-cutting": "/images/projects/hedge-cutting/hedge_c.png",
  "tree-removal": "/images/projects/tree_removal.png",
  "stump-grinding": "/images/projects/stump-grinding/stump_g.png",
  "garden-clearance": "/images/projects/garden-clearance/garden_c.png",
  landscaping: "/images/projects/landscaping/landscaping.png",
};

export type Project = {
  slug: string;
  service: ProjectService;
  serviceLabel: string;
  title: string;
  location: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    slug: "redhill-garden-clearance",
    service: "garden-clearance",
    serviceLabel: "Garden Clearance",
    title: "Garden clearance",
    location: "Redhill",
    description:
      "A full garden tidy-up ready for the next stage of the customer's revamp.",
  },
  {
    slug: "st-pauls-cray-hedge-tidy",
    service: "hedge-cutting",
    serviceLabel: "Hedge Care",
    title: "Hedge tidy-up",
    location: "St Paul's Cray",
    description:
      "An overgrown boundary brought back into a cleaner, more manageable shape.",
  },
];

export function projectImage(project: Project) {
  return project.image ?? projectArtwork[project.service];
}
