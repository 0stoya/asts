import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="shell narrow-shell">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/contact">
            Request a quote
          </Link>
          <Link className="button button-ghost" href="/our-work">
            See recent work
          </Link>
        </div>
      </div>
    </section>
  );
}
