import {
  Axe,
  Fence,
  Flower2,
  Shovel,
  Sprout,
  Trees,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  Icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "tree-surgery",
    title: "Tree Surgery & Pruning",
    shortTitle: "Tree Surgery",
    description:
      "Pruning, reduction, shaping and practical tree maintenance for domestic gardens and outdoor spaces.",
    intro:
      "Thoughtful tree care focused on keeping trees manageable, safe and appropriate for the space around them.",
    Icon: Trees,
  },
  {
    slug: "hedge-cutting",
    title: "Hedge Cutting & Shaping",
    shortTitle: "Hedge Care",
    description:
      "Hedge trimming, shaping, reduction and removal for tidy boundaries and more manageable gardens.",
    intro:
      "From a regular tidy-up to bringing an overgrown hedge back under control.",
    Icon: Fence,
  },
  {
    slug: "tree-removal",
    title: "Tree Felling & Removal",
    shortTitle: "Tree Removal",
    description:
      "Practical removal of unwanted, damaged or unsuitable trees, with the job planned around the surrounding garden.",
    intro:
      "When a tree genuinely needs to go, the work should be planned carefully and the site left usable afterwards.",
    Icon: Axe,
  },
  {
    slug: "stump-grinding",
    title: "Stump Grinding & Removal",
    shortTitle: "Stump Grinding",
    description:
      "Remove old stumps and reclaim awkward areas for lawns, planting, paths or future landscaping.",
    intro:
      "Old stumps have a remarkable talent for remaining exactly where you do not want them.",
    Icon: Shovel,
  },
  {
    slug: "garden-clearance",
    title: "Garden Clearance",
    shortTitle: "Garden Clearance",
    description:
      "Clear overgrown gardens, unwanted shrubs and tired areas so the space can be used and enjoyed again.",
    intro:
      "A proper reset for gardens that have become too much to tackle a bag at a time.",
    Icon: Sprout,
  },
  {
    slug: "landscaping",
    title: "Landscaping",
    shortTitle: "Landscaping",
    description:
      "General landscaping and garden improvement work to make outdoor spaces cleaner, simpler and more useful.",
    intro:
      "Practical improvements that work with the garden you actually have, rather than the one in a catalogue.",
    Icon: Flower2,
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
