import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { PageHero } from "@/src/components/PageHero";
import { getService, services } from "@/src/config/services";

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

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

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
