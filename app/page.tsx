import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  MapPin,
  Phone,
} from "lucide-react";

import { ContactCtas } from "@/src/components/ContactCtas";
import { CustomerReviews } from "@/src/components/CustomerReviews";
import { ProjectCard } from "@/src/components/ProjectCard";
import { SeasonalAdvice } from "@/src/components/SeasonalAdvice";
import { currentSeason } from "@/src/config/seasons";
import { projects } from "@/src/config/projects";
import { services } from "@/src/config/services";
import { site } from "@/src/config/site";

export const revalidate = 86400;


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
              <h2>Local jobs. Clear results.</h2>
            </div>
            <Link className="text-link" href="/our-work">
              View our work <ArrowRight size={17} />
            </Link>
          </div>

          <div className="project-grid">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </div>
      </section>

      <CustomerReviews />

      <ContactCtas />

      <section className="mini-assurance">
        <div className="shell assurance-grid">
          <span><CheckCircle2 size={17} /> Local service</span>
          <span><CheckCircle2 size={17} /> 13+ years&apos; experience</span>
          <span><CheckCircle2 size={17} /> Real customer recommendations</span>
        </div>
      </section>
    </>
  );
}
