import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, MessageCircle, Phone } from "lucide-react";

import { site } from "@/src/config/site";

const ctas = [
  {
    key: "quote",
    image: "/images/quote.png",
    eyebrow: "Have a job in mind?",
    title: "Request a quote",
    copy: "Tell us what needs doing, where you are and the result you would like.",
    href: "/contact",
    label: "Get a quote",
    Icon: ArrowRight,
    external: false,
  },
  {
    key: "call",
    image: "/images/call.png",
    eyebrow: "Prefer to talk?",
    title: "Call us today",
    copy: "Friendly, practical advice for tree, hedge and garden work.",
    href: site.phoneHref,
    label: `Call ${site.phoneDisplay}`,
    Icon: Phone,
    external: false,
  },
  {
    key: "photos",
    image: "/images/photos.png",
    eyebrow: "A picture helps",
    title: "Send us photos of your garden",
    copy: "A few clear photos can make the first conversation quicker and more useful.",
    href: site.whatsappHref,
    label: "Send photos on WhatsApp",
    Icon: Camera,
    external: true,
  },
] as const;

export function ContactCtas() {
  return (
    <section className="contact-cta-section" aria-label="Ways to contact All Seasons">
      <div className="shell contact-cta-grid">
        {ctas.map(({ Icon, ...cta }, index) => {
          const content = (
            <>
              <Image
                className="contact-cta-image"
                src={cta.image}
                alt=""
                fill
                sizes={
                  index === 2
                    ? "(max-width: 700px) 100vw, 1180px"
                    : "(max-width: 980px) 100vw, 590px"
                }
              />
              <span className="contact-cta-shade" aria-hidden="true" />
              <span className="contact-cta-content">
                <span className="eyebrow">{cta.eyebrow}</span>
                <strong>{cta.title}</strong>
                <span className="contact-cta-copy">{cta.copy}</span>
                <span className="button button-primary contact-cta-button">
                  {cta.label}
                  <Icon size={18} aria-hidden="true" />
                </span>
              </span>
            </>
          );

          const className = `contact-cta-card contact-cta-${cta.key}`;

          if (cta.external) {
            return (
              <a
                className={className}
                href={cta.href}
                key={cta.key}
                target="_blank"
                rel="noreferrer"
              >
                {content}
              </a>
            );
          }

          if (cta.href.startsWith("/")) {
            return (
              <Link className={className} href={cta.href} key={cta.key}>
                {content}
              </Link>
            );
          }

          return (
            <a className={className} href={cta.href} key={cta.key}>
              {content}
            </a>
          );
        })}
      </div>

      <div className="shell contact-cta-note">
        <MessageCircle size={17} aria-hidden="true" />
        <span>
          Not sure which route to use? Photos plus your postcode are usually the
          quickest place to start.
        </span>
      </div>
    </section>
  );
}
