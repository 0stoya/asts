export type SeasonKey = "spring" | "summer" | "autumn" | "winter";

export type SeasonalAdvice = {
  title: string;
  description: string;
};

export type Season = {
  key: SeasonKey;
  label: string;
  eyebrow: string;
  headline: string;
  intro: string;
  heroImage: string;
  advice: SeasonalAdvice[];
};

export const seasons: Record<SeasonKey, Season> = {
  spring: {
    key: "spring",
    label: "Spring",
    eyebrow: "Spring garden care",
    headline: "Fresh growth deserves a good start.",
    intro:
      "A useful time to assess winter damage, prepare gardens and keep new hedge growth under control.",
    heroImage: "/images/hero/spring/hero-spring.svg",
    advice: [
      {
        title: "Inspect after winter",
        description:
          "Check trees and larger shrubs for damaged or weakened growth after winter weather.",
      },
      {
        title: "Prepare the garden",
        description:
          "Clear tired growth and make room for the season ahead before everything gets busy.",
      },
      {
        title: "Stay ahead of hedges",
        description:
          "Early maintenance can help keep fast spring growth manageable and tidy.",
      },
    ],
  },
  summer: {
    key: "summer",
    label: "Summer",
    eyebrow: "Summer garden care",
    headline: "Keep growing gardens tidy and usable.",
    intro:
      "Long days and vigorous growth make regular garden and hedge maintenance especially valuable.",
    heroImage: "/images/hero/summer/hero-summer.svg",
    advice: [
      {
        title: "Maintain hedges",
        description:
          "Keep established hedges neat and manageable, with wildlife checks before work begins.",
      },
      {
        title: "Reclaim overgrown spaces",
        description:
          "Garden clearance can quickly turn an overgrown corner back into usable space.",
      },
      {
        title: "Plan larger work",
        description:
          "Use the clear weather to assess trees, stumps and landscaping jobs for the months ahead.",
      },
    ],
  },
  autumn: {
    key: "autumn",
    label: "Autumn",
    eyebrow: "Autumn garden care",
    headline: "Prepare your garden for the colder months.",
    intro:
      "A practical season for garden clearance, winter preparation and planning tree and hedge work.",
    heroImage: "/images/hero/autumn/hero-autumn.svg",
    advice: [
      {
        title: "Plant trees & hedges",
        description:
          "Autumn can be an excellent time for planting while soil remains relatively warm and moisture levels increase.",
      },
      {
        title: "Prepare for winter",
        description:
          "A useful time to inspect trees for damaged, dead or problematic branches before winter weather arrives.",
      },
      {
        title: "Tidy hedges & gardens",
        description:
          "Once nesting activity has finished, autumn suits many garden clearance and hedge-maintenance jobs. Active nests should always be checked for first.",
      },
      {
        title: "Remove unwanted stumps",
        description:
          "Stump grinding is not especially seasonal, so that awkward old stump does not need another winter in the garden.",
      },
    ],
  },
  winter: {
    key: "winter",
    label: "Winter",
    eyebrow: "Winter tree & garden care",
    headline: "A quieter garden is easier to assess.",
    intro:
      "Winter can be a useful time to inspect structure, deal with selected tree work and plan spring improvements.",
    heroImage: "/images/hero/winter/hero-winter.svg",
    advice: [
      {
        title: "Inspect tree structure",
        description:
          "With less foliage, structural issues can be easier to spot on many deciduous trees.",
      },
      {
        title: "Plan spring projects",
        description:
          "Use quieter months to plan landscaping, clearance and garden improvements before spring growth.",
      },
      {
        title: "Deal with storm damage",
        description:
          "After severe weather, damaged or hanging branches should be assessed rather than ignored.",
      },
    ],
  },
};

export function seasonForMonth(month: number): SeasonKey {
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 10) return "autumn";
  return "winter";
}

export function currentSeason(date = new Date()): Season {
  return seasons[seasonForMonth(date.getMonth())];
}
