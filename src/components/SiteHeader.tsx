import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";

import { site } from "@/src/config/site";

const nav = [
  { href: "/tree-surgery", label: "Tree Surgery" },
  { href: "/hedge-cutting", label: "Hedge Care" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="All Seasons Tree Surgery home">
          <span className="brand-logo-shell" aria-hidden="true">
            <Image
              className="brand-logo"
              src="/images/brand/logo.png"
              alt=""
              width={72}
              height={61}
              priority
            />
          </span>
          <span>
            <strong>All Seasons</strong>
            <small>Tree Surgery Ltd</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-call" href={site.phoneHref}>
          <Phone size={17} aria-hidden="true" />
          <span>{site.phoneDisplay}</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open menu">
            <Menu size={23} />
          </summary>
          <nav aria-label="Mobile navigation">
            {nav.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref}>Call {site.phoneDisplay}</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
