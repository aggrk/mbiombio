import Link from 'next/link';
import { MapPin, Phone, Mail, Package } from 'lucide-react';

const NAV_LINKS = [
  { href: '/about',    label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/track',    label: 'Track Order' },
  { href: '/contact',  label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-alt border-t border-alt">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center shrink-0">
                <Package size={16} className="text-black" strokeWidth={2.5} />
              </div>
              <div className="leading-none">
                <span
                  className="block text-[17px] font-semibold tracking-tight text-text"
                  style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                >
                  MbioMbio
                </span>
                <span className="block text-[9px] font-medium tracking-[0.18em] text-text-secondary uppercase mt-0.5">
                  Delivery
                </span>
              </div>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed">
              Fast delivery across Arusha and Northern Tanzania.
              Fast, reliable, and handled with care.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(({ href, label }) => (
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
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-text-secondary">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>Arusha, Tanzania</span>
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
                  href="mailto:info@mbiombio.co.tz"
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
              Operating Hours
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex justify-between gap-4">
                <span>Mon – Sat</span>
                <span className="text-text">7:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-text">8:00 AM – 6:00 PM</span>
              </li>
            </ul>
            <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-medium text-primary">Open now</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-alt pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-text-secondary">
          <span>© {new Date().getFullYear()} MbioMbio Delivery. All rights reserved.</span>
          <span>Made for Arusha 🇹🇿</span>
        </div>
      </div>
    </footer>
  );
}