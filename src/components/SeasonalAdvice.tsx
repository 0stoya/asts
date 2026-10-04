import Image from "next/image";
import { ArrowRight, CalendarDays, Leaf } from "lucide-react";
import Link from "next/link";

import type { Season } from "@/src/config/seasons";

export function SeasonalAdvice({ season }: { season: Season }) {
  return (
    <section className={`seasonal-section season-${season.key}`}>
      {season.seasonalImage ? (
        <div className="seasonal-artwork" aria-hidden="true">
          <Image
            src={season.seasonalImage}
            alt=""
            fill
            sizes="100vw"
          />
        </div>
      ) : null}
      <div className="seasonal-wash" aria-hidden="true" />
      <div className="shell seasonal-layout">
        <div className="seasonal-intro">
          <span className="eyebrow">
            <Leaf size={16} /> {season.eyebrow}
          </span>
          <h2>{season.headline}</h2>
          <p>{season.intro}</p>
          <Link className="text-link" href="/contact">
            Ask All Seasons <ArrowRight size={17} />
          </Link>
        </div>

        <div>
          <div className="section-kicker">
            <CalendarDays size={17} />
            <span>Best time to...</span>
          </div>
          <div className="advice-grid">
            {season.advice.map((item) => (
              <article className="advice-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
