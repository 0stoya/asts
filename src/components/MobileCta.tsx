import { MessageCircle, Phone, Send } from "lucide-react";

import { site } from "@/src/config/site";

export function MobileCta() {
  return (
    <div className="mobile-cta" aria-label="Quick contact">
      <a href={site.phoneHref}>
        <Phone size={18} />
        Call
      </a>
      <a href={site.whatsappHref} target="_blank" rel="noreferrer">
        <MessageCircle size={18} />
        WhatsApp
      </a>
      <a href="/contact">
        <Send size={18} />
        Quote
      </a>
    </div>
  );
}
