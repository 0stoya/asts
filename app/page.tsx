import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

import { SeasonalAdvice } from "@/src/components/SeasonalAdvice";
import { currentSeason } from "@/src/config/seasons";
import { services } from "@/src/config/services";
import { site } from "@/src/config/site";

const projects = [
  {
    title: "Garden clearance",
    location: "Redhill",
    image: "/images/projects/garden-clearance/redhill.svg",
    description: "A full garden tidy-up ready for the next stage of the customer's revamp.",
  },
  {
    title: "Hedge tidy-up",
    location: "St Paul's Cray",
    image: "/images/projects/hedge-cutting/st-pauls-cray.svg",
    description: "An overgrown boundary brought back into a cleaner, more manageable shape.",
  },
];

export default function Home() {
  const season = currentSeason();

  return (
    <>
      <section className={`home-hero season-${season.key}`}>
        <div className="hero-image" aria-hidden="true">
          <Image
            src={season.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-shade" />
        <div className="shell hero-content">
          <span className="eyebrow hero-eyebrow">
            Tree surgery · Hedge care · Landscaping
          </span>
          <h1>
            Expert care for your
            <span> trees & garden.</span>
          </h1>
          <p>
            Over 13 years&apos; experience caring for trees, hedges and gardens
            across Orpington and surrounding areas.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request a quote <ArrowRight size={18} />
            </Link>
            <a className="button button-light" href={site.phoneHref}>
              <Phone size={18} /> Call {site.phoneDisplay}
            </a>
          </div>
          <div className="hero-location">
            <MapPin size={17} />
            {site.areaServed}
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Business highlights">
        <div className="shell trust-grid">
          <div>
            <strong>{site.yearsExperience}</strong>
            <span>years&apos; experience</span>
          </div>
          <div>
            <strong>{site.recommendation}</strong>
            <span>recommended on Facebook</span>
          </div>
          <div>
            <strong>{site.reviewCount}</strong>
            <span>customer reviews</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">What we can help with</span>
              <h2>Practical outdoor work, done properly.</h2>
            </div>
            <p>
              From a hedge that has got away from you to a full garden
              clearance, All Seasons covers the jobs that make outdoor spaces
              safer, tidier and easier to enjoy.
            </p>
          </div>

          <div className="service-grid">
            {services.map(({ Icon, ...service }) => (
              <Link className="service-card" href={`/${service.slug}`} key={service.slug}>
                <span className="service-icon"><Icon size={24} /></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="card-link">
                  Learn more <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SeasonalAdvice season={season} />

      <section className="section section-work">
        <div className="shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow"><Camera size={16} /> Recent work</span>
              <h2>Real gardens. Real before-and-after difference.</h2>
            </div>
            <Link className="text-link" href="/our-work">
              View our work <ArrowRight size={17} />
            </Link>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                </div>
                <div className="project-copy">
                  <span>{project.location}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section review-section">
        <div className="shell review-layout">
          <div>
            <span className="eyebrow"><Star size={16} /> Customer confidence</span>
            <h2>Recommended by the people whose gardens we work in.</h2>
            <p>
              The existing Facebook page shows {site.recommendation} recommendation
              from {site.reviewCount} customer reviews. We&apos;ll bring genuine
              review excerpts into this section once they&apos;re selected.
            </p>
            <a className="text-link" href={site.facebook} target="_blank" rel="noreferrer">
              See the Facebook page <ArrowRight size={17} />
            </a>
          </div>
          <div className="review-summary">
            <ShieldCheck size={34} />
            <strong>{site.recommendation}</strong>
            <span>recommended</span>
            <div className="review-stars" aria-label="Customer recommendation">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            <small>Based on the current Facebook business profile.</small>
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="shell quote-layout">
          <div>
            <span className="eyebrow">Need some work doing?</span>
            <h2>Show us the garden.</h2>
            <p>
              Send a few photos and a short description of what you need. It is
              a much better starting point than trying to describe a 30-foot
              conifer over the phone.
            </p>
          </div>
          <div className="quote-actions">
            <a className="button button-primary" href={site.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Send photos on WhatsApp
            </a>
            <Link className="button button-ghost-dark" href="/contact">
              Request a quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mini-assurance">
        <div className="shell assurance-grid">
          <span><CheckCircle2 size={17} /> Local service</span>
          <span><CheckCircle2 size={17} /> 13+ years&apos; experience</span>
          <span><CheckCircle2 size={17} /> Genuine project photography</span>
        </div>
      </section>
    </>
  );
}
