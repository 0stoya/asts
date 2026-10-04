import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, MapPin } from "lucide-react";
import { notFound } from "next/navigation";

import { PageHero } from "@/src/components/PageHero";
import { getService, services, type Service } from "@/src/config/services";
import { site } from "@/src/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

function FeaturedServicePage({ service }: { service: Service }) {
  const feature = service.feature;

  if (!feature) return null;

  const Icon = service.Icon;

  return (
    <>
      <section className="service-feature-hero">
        <div className="shell service-feature-hero-grid">
          <div className="service-feature-copy">
            <span className="eyebrow">
              <Icon size={16} /> {service.shortTitle}
            </span>
            <h1>{service.title}</h1>
            <p>{service.intro}</p>

            <div className="hero-actions service-feature-actions">
              <Link className="button button-primary" href="/contact">
                Request a quote <ArrowRight size={18} />
              </Link>
              <a
                className="button button-ghost"
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                <Camera size={18} /> Send photos
              </a>
            </div>

            <span className="service-feature-location">
              <MapPin size={16} />
              {site.areaServed}
            </span>
          </div>

          <div className="service-feature-main-image">
            <Image
              src={feature.mainImage}
              alt={feature.mainImageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
        </div>
      </section>

      <section className="section service-story-section">
        <div className="shell service-story-grid">
          <div className="service-story-copy">
            <span className="eyebrow">How All Seasons can help</span>
            <h2>{feature.leadTitle}</h2>
            <p className="service-story-lead">{feature.lead}</p>

            <div className="service-highlight-list">
              {feature.highlights.map((item) => (
                <article className="service-highlight" key={item.title}>
                  <CheckCircle2 size={19} aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="service-working-image">
            <Image
              src={feature.workingImage}
              alt={feature.workingImageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 38vw"
            />
          </div>
        </div>
      </section>

      <section className="service-photo-note">
        <div className="shell service-photo-note-inner">
          <div>
            <span className="eyebrow">Useful for a first look</span>
            <h2>{feature.noteTitle}</h2>
            <p>{feature.note}</p>
          </div>
          <a
            className="button button-primary"
            href={site.whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            <Camera size={18} /> Send photos on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  if (service.feature) {
    return <FeaturedServicePage service={service} />;
  }

  const Icon = service.Icon;

  return (
    <>
      <PageHero
        eyebrow={service.shortTitle}
        title={service.title}
        intro={service.intro}
      />
      <section className="section">
        <div className="shell service-detail-grid">
          <article className="prose-card">
            <span className="service-icon"><Icon size={26} /></span>
            <h2>How All Seasons can help</h2>
            <p>{service.description}</p>
            <p>
              Every garden and site is different, so the sensible next step is
              to show us the area and explain the result you want. Photos are
              very welcome.
            </p>
            <Link className="button button-primary" href="/contact">
              Request a quote <ArrowRight size={18} />
            </Link>
          </article>
          <aside className="facts-card">
            <p><CheckCircle2 size={18} /> Local Orpington-based service</p>
            <p><CheckCircle2 size={18} /> More than 13 years&apos; experience</p>
            <p><CheckCircle2 size={18} /> Photo enquiries welcome</p>
          </aside>
        </div>
      </section>
    </>
  );
}
