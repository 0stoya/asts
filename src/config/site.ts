export const site = {
  name: "All Seasons Tree Surgery Ltd",
  shortName: "All Seasons",
  description:
    "Tree surgery, hedge care, stump grinding, garden clearance and landscaping in Orpington and surrounding areas.",
  phoneDisplay: "07957 568893",
  phoneHref: "tel:+447957568893",
  whatsappHref: "https://wa.me/447957568893",
  email: "allseasonstreesurgery@yahoo.com",
  address: {
    street: "15 Blythe Hill",
    town: "Orpington",
    postcode: "BR5 2RP",
    country: "United Kingdom",
  },
  areaServed: "Orpington and surrounding areas",
  facebook:
    "https://www.facebook.com/share/1SehMEpbYj/?mibextid=wwXIfr",
  yearsExperience: "13+",
  recommendation: "100%",
  reviewCount: 23,
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
