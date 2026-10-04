export type CustomerReview = {
  name: string;
  date: string;
  dateLabel: string;
  quote: string;
  featured?: boolean;
};

export const customerReviews: CustomerReview[] = [
  {
    name: "Lee Gatland",
    date: "2023-06-30",
    dateLabel: "30 June 2023",
    featured: true,
    quote:
      "100% highly recommended — decent guys, honest, tidy and good at what they do. No wonder they are always busy and in demand. It’s really refreshing to get a quote you are happy with, the job gets done to a high standard, and it’s done in the time they said it would be done in.",
  },
  {
    name: "Joseph Evans",
    date: "2023-03-07",
    dateLabel: "7 March 2023",
    quote:
      "Removed two very big oak trees from our garden, no damages, removed all waste, left clean and tidy. Lovely group of lads — thanks Jack and the team!",
  },
  {
    name: "Tanya Boncoeur",
    date: "2022-07-25",
    dateLabel: "25 July 2022",
    quote:
      "Thank you All Seasons Tree Surgery for the great job in our garden! So quick and efficient, super friendly and fair pricing. Highly recommend.",
  },
  {
    name: "Lisa Moore",
    date: "2022-04-20",
    dateLabel: "20 April 2022",
    quote:
      "Highly recommended. My step mum was very pleased with the job that was done. Very friendly and professional. Nothing was too much trouble.",
  },
  {
    name: "Nishit Patel",
    date: "2021-10-19",
    dateLabel: "19 October 2021",
    quote:
      "Hard working father and son and very experienced, trustworthy tree surgeon. Did a great job on our garden, most competitive price.",
  },
  {
    name: "Elizabeth Palicza",
    date: "2021-08-20",
    dateLabel: "20 August 2021",
    quote:
      "Hard working and very experienced, trustworthy tree surgeon. Did a great job on our massive tree, most competitive price.",
  },
];

export const featuredReview =
  customerReviews.find((review) => review.featured) ?? customerReviews[0];

export const supportingReviews = customerReviews.filter(
  (review) => !review.featured,
);
