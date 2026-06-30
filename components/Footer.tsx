"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";
import { useTheme } from "next-themes";

const CONTENT = {
  en: {
    tagline:
      "Fast delivery across Arusha and Northern Tanzania. Fast, reliable, and handled with care.",
    company: "Company",
    navLinks: [
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/order", label: "Place Order" },
      { href: "/contact", label: "Contact" },
    ],
    contactLabel: "Contact",
    location: "Olasiti, Arusha, Tanzania",
    hoursLabel: "Operating Hours",
    monSat: "Mon – Sat",
    sunday: "Sunday",
    openNow: "Open now",
    rights: `© ${new Date().getFullYear()} MbioMbio Delivery. All rights reserved.`,
    madeFor: "Made for Arusha 🇹🇿",
  },

  sw: {
    tagline:
      "Usafirishaji mizigo kwa haraka kote Arusha na Tanzania ya Kaskazini. Usafirishaji wa haraka, wa kuaminika, na unaohudumiwa kwa uangalifu.",
    company: "Kampuni",
    navLinks: [
      { href: "/about", label: "Kuhusu Sisi" },
      { href: "/services", label: "Huduma" },
      { href: "/order", label: "Agiza" },
      { href: "/contact", label: "Mawasiliano" },
    ],
    contactLabel: "Mawasiliano",
    location: "Olasiti, Arusha, Tanzania",
    hoursLabel: "Masaa ya Kazi",
    monSat: "Jumatatu – Jumamosi",
    sunday: "Jumapili",
    openNow: "Huduma inapatikana sasa.",
    rights: `© ${new Date().getFullYear()} MbioMbio Delivery. Haki zote zimehifadhiwa.`,
    madeFor: "Kwa sasa tunapatikana Arusha 🇹🇿",
  },
} as const;

export default function Footer() {
  const { lang } = useLanguage();
  const { setTheme, resolvedTheme } = useTheme();
  const c = CONTENT[lang];
  const isLight = resolvedTheme === "light";

  return (
    <footer className="bg-alt border-t border-alt">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div
                className={`w-14 h-14 shrink-0 rounded-lg overflow-hidden ${isLight && "bg-alt"} bg-white p-1`}
              >
                <img
                  src="/images/logo.png"
                  alt="MbioMbio Delivery"
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
              <div className="leading-none">
                <span
                  className="block text-[17px] font-semibold tracking-tight text-text"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  MbioMbio
                </span>
                <span className="block text-[9px] font-medium tracking-[0.18em] text-text-secondary uppercase mt-0.5">
                  Delivery
                </span>
              </div>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed">
              {c.tagline}
            </p>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4">
              {c.company}
            </h3>
            <ul className="space-y-2.5">
              {c.navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-text-secondary hover:text-text transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4">
              {c.contactLabel}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-text-secondary">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>{c.location}</span>
              </li>
              <li>
                <a
                  href="tel:+255758689802"
                  className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-text transition-colors"
                >
                  <Phone size={15} className="shrink-0 text-primary" />
                  <span>+255 758 689 802</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:mbiombiodelivery@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-text-secondary hover:text-text transition-colors"
                >
                  <Mail size={15} className="shrink-0 text-primary" />
                  <span>mbiombiodelivery@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4">
              {c.hoursLabel}
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex justify-between gap-4">
                <span>{c.monSat}</span>
                <span className="text-text">7:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{c.sunday}</span>
                <span className="text-text">8:00 AM – 6:00 PM</span>
              </li>
            </ul>
            <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-medium text-primary">
                {c.openNow}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-alt pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-text-secondary">
          <span>{c.rights}</span>
          <span>{c.madeFor}</span>
        </div>
      </div>
    </footer>
  );
}
