import type { Metadata } from "next";
import { Clock3, MapPin, Trees } from "lucide-react";

import { PageHero } from "@/src/components/PageHero";
import { site } from "@/src/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About All Seasons Tree Surgery Ltd and its tree, hedge and landscaping services around Orpington.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About All Seasons"
        title="Local tree and garden care with more than 13 years of experience."
        intro="All Seasons Tree Surgery Ltd provides practical tree, hedge, clearance and landscaping work from Orpington and across the surrounding area."
      />
      <section className="section">
        <div className="shell content-grid">
          <article className="prose-card">
            <h2>Built around practical outdoor work</h2>
            <p>
              The business already has a strong record of real local jobs:
              trees managed, hedges brought back under control and overgrown
              gardens cleared ready for their next chapter.
            </p>
            <p>
              This site is deliberately centred on that real work rather than
              generic stock imagery. As the project gallery grows, customers
              will be able to see the sort of jobs All Seasons actually takes
              on.
            </p>
          </article>
          <aside className="facts-card">
            <p><Clock3 size={19} /><span><strong>13+ years</strong> experience</span></p>
            <p><MapPin size={19} /><span><strong>Based in</strong> {site.address.town}</span></p>
            <p><Trees size={19} /><span><strong>Services</strong> trees, hedges, clearances and landscaping</span></p>
          </aside>
        </div>
      </section>
    </>
  );
}
