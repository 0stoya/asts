import { ArrowRight, CheckCircle2, Quote } from "lucide-react";

import {
  featuredReview,
  supportingReviews,
} from "@/src/config/reviews";
import { site } from "@/src/config/site";

export function CustomerReviews() {
  const visibleSupportingReviews = supportingReviews.slice(0, 3);

  return (
    <section className="section review-section" id="reviews">
      <div className="shell">
        <div className="reviews-heading">
          <div>
            <span className="eyebrow">
              <Quote size={16} /> Customer recommendations
            </span>
            <h2>Recommended by the people whose gardens we work in.</h2>
          </div>

          <div className="reviews-score" aria-label="Facebook recommendation summary">
            <span className="reviews-score-value">{site.recommendation}</span>
            <span className="reviews-score-copy">
              <strong>recommend</strong>
              <small>{site.reviewCount} Facebook reviews</small>
            </span>
            <CheckCircle2 size={22} aria-hidden="true" />
          </div>
        </div>

        <div className="reviews-showcase">
          <article className="featured-review">
            <Quote className="review-quote-icon" size={34} aria-hidden="true" />
            <blockquote>“{featuredReview.quote}”</blockquote>
            <footer>
              <div>
                <strong>{featuredReview.name}</strong>
                <span>Facebook recommendation</span>
              </div>
              <time dateTime={featuredReview.date}>
                {featuredReview.dateLabel}
              </time>
            </footer>
          </article>

          <div className="supporting-reviews">
            {visibleSupportingReviews.map((review) => (
              <article className="review-card" key={review.name}>
                <blockquote>“{review.quote}”</blockquote>
                <footer>
                  <div>
                    <strong>{review.name}</strong>
                    <span>Facebook recommendation</span>
                  </div>
                  <time dateTime={review.date}>{review.dateLabel}</time>
                </footer>
              </article>
            ))}
          </div>
        </div>

        <div className="reviews-footer">
          <p>
            Customers repeatedly mention friendly service, tidy work, fair
            pricing and getting the job done properly.
          </p>
          <a
            className="text-link"
            href={site.facebook}
            target="_blank"
            rel="noreferrer"
          >
            Read more reviews on Facebook <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
