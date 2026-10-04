import {
  Axe,
  Fence,
  Flower2,
  Shovel,
  Sprout,
  Trees,
  type LucideIcon,
} from "lucide-react";

export type ServiceHighlight = {
  title: string;
  description: string;
};

export type ServiceFeature = {
  mainImage: string;
  mainImageAlt: string;
  workingImage: string;
  workingImageAlt: string;
  leadTitle: string;
  lead: string;
  highlights: ServiceHighlight[];
  noteTitle: string;
  note: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  Icon: LucideIcon;
  feature?: ServiceFeature;
};

export const services: Service[] = [
  {
    slug: "tree-surgery",
    title: "Tree Surgery & Pruning",
    shortTitle: "Tree Surgery",
    description:
      "Pruning, reduction, shaping and practical tree maintenance for domestic gardens and outdoor spaces.",
    intro:
      "Practical tree care for gardens and outdoor spaces, whether a tree needs reducing, reshaping or removing.",
    Icon: Trees,
    feature: {
      mainImage: "/images/services/tree-surgery/tree-surgery-main.jpg",
      mainImageAlt: "Tree surgeon working at height in a mature garden tree",
      workingImage: "/images/services/tree-surgery/tree-surgery-working.jpg",
      workingImageAlt: "Tree surgeon carrying out work high in a mature tree",
      leadTitle: "When a tree has outgrown its space",
      lead:
        "Trees can become too large for the garden around them, block light, interfere with neighbouring spaces or simply need careful maintenance. All Seasons can assess the job, discuss the result you want and plan the practical work around the garden and access available.",
      highlights: [
        {
          title: "Pruning & reduction",
          description:
            "Manage size and growth where branches or the crown have become too large for the surrounding space.",
        },
        {
          title: "Tree removal",
          description:
            "For unwanted or problematic trees where removal is the sensible outcome for the garden.",
        },
        {
          title: "Work around the garden",
          description:
            "Fences, sheds, planting and access all matter. The job should be planned around the space, not treated in isolation.",
        },
      ],
      noteTitle: "A few photos go a long way",
      note:
        "For an initial look, send a photo showing the whole tree, another showing the base and access around it, plus your postcode and what you would like changed.",
    },
  },
  {
    slug: "hedge-cutting",
    title: "Hedge Cutting & Shaping",
    shortTitle: "Hedge Care",
    description:
      "Hedge trimming, shaping, reduction and removal for tidy boundaries and more manageable gardens.",
    intro:
      "From routine trimming to bringing a large, overgrown boundary back under control.",
    Icon: Fence,
    feature: {
      mainImage: "/images/services/hedge-cutting/hedge-cutting-main.jpg",
      mainImageAlt: "Long established garden hedge after trimming",
      workingImage: "/images/services/hedge-cutting/hedge-cutting-working.jpg",
      workingImageAlt: "Hedge cutting work in progress beside a residential garden",
      leadTitle: "Keep boundaries tidy and manageable",
      lead:
        "A well-kept hedge can make a garden feel dramatically cleaner without changing the garden itself. All Seasons handles regular trimming as well as larger reductions where a hedge has become too tall, wide or difficult to maintain.",
      highlights: [
        {
          title: "Regular trimming",
          description:
            "Keep established hedges neat and under control before new growth turns a simple tidy-up into a much larger job.",
        },
        {
          title: "Reduction & reshaping",
          description:
            "Bring height and width back to a more manageable size where a hedge has gradually taken over the space.",
        },
        {
          title: "Overgrown boundaries",
          description:
            "Recover access, light and cleaner sight-lines where shrubs and hedging have become dense or untidy.",
        },
      ],
      noteTitle: "Wildlife comes first",
      note:
        "Hedge work should take account of active nesting birds. If there is any sign of an active nest, the timing of the work may need to change.",
    },
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
