import type { Metadata } from "next";
import {
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { PageHero } from "@/src/components/PageHero";
import { site } from "@/src/config/site";

export const metadata: Metadata = {
  title: "Contact & Quotes",
  description:
    "Contact All Seasons Tree Surgery Ltd for tree surgery, hedge care, stump grinding, garden clearance or landscaping.",
};

export default function ContactPage() {
  const mailSubject = encodeURIComponent("Website enquiry - All Seasons Tree Surgery");
  const mailBody = encodeURIComponent(
    "Hi All Seasons,\n\nMy postcode is:\n\nThe work I need help with is:\n\nI can attach photos if useful.\n",
  );

  return (
    <>
      <PageHero
        eyebrow="Contact & quotes"
        title="Tell us what needs doing."
        intro="A postcode, a short description and a couple of photos are usually a very good place to start."
      />
      <section className="section">
        <div className="shell contact-grid">
          <div className="contact-options">
            <a href={site.phoneHref}>
              <Phone size={22} />
              <span><small>Call</small><strong>{site.phoneDisplay}</strong></span>
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={22} />
              <span><small>WhatsApp</small><strong>Send a message or photos</strong></span>
            </a>
            <a href={`mailto:${site.email}?subject=${mailSubject}&body=${mailBody}`}>
              <Mail size={22} />
              <span><small>Email</small><strong>{site.email}</strong></span>
            </a>
            <div>
              <MapPin size={22} />
              <span>
                <small>Based in</small>
                <strong>{site.address.street}, {site.address.town}, {site.address.postcode}</strong>
              </span>
            </div>
          </div>

          <aside className="quote-checklist">
            <Camera size={28} />
            <h2>For a quicker first look</h2>
            <p>If you can, send:</p>
            <ul>
              <li>Your postcode</li>
              <li>One photo showing the whole tree, hedge or area</li>
              <li>A closer photo if there is a specific problem</li>
              <li>A short note explaining what you would like changed</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
