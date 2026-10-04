import Image from "next/image";
import Link from "next/link";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

import { site } from "@/src/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="footer-logo-shell" aria-hidden="true">
            <Image
              className="footer-logo"
              src="/images/brand/logo.png"
              alt=""
              width={170}
              height={143}
            />
          </div>
          <p className="footer-brand">All Seasons Tree Surgery Ltd</p>
          <p className="footer-copy">
            Tree surgery, hedge care, stump grinding, garden clearance and
            landscaping in {site.areaServed}.
          </p>
        </div>

        <div>
          <p className="footer-heading">Contact</p>
          <a href={site.phoneHref}><Phone size={16} /> {site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}><Mail size={16} /> {site.email}</a>
          <p><MapPin size={16} /> {site.address.street}, {site.address.town}, {site.address.postcode}</p>
        </div>

        <div>
          <p className="footer-heading">Explore</p>
          <Link href="/our-work">Recent work</Link>
          <Link href="/about">About All Seasons</Link>
          <Link href="/contact">Request a quote</Link>
          <a href={site.facebook} target="_blank" rel="noreferrer">
            <Facebook size={16} /> Facebook
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} All Seasons Tree Surgery Ltd</span>
        <span>Built for all seasons. Obviously.</span>
      </div>
    </footer>
  );
}
