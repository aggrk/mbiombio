"use client";

import { motion } from "framer-motion";
import { Bike, Truck, Users, Clock } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/useLanguage";

const SERVICE_ICONS = [Bike, Truck, Users, Clock];

const CONTENT = {
  en: {
    pageLabel: "What we offer",
    pageTitle: "Our Services",
    pageDesc:
      "Reliable delivery solutions tailored for Arusha and Northern Tanzania (by motorcycle, car, or van).",

    services: [
      {
        title: "Motorcycle Delivery",
        desc: "Our fastest option for small to medium packages within Arusha city. Ideal for documents, food, and everyday parcels.",
        time: "15 – 45 min",
        price: "From TSh 2,000",
      },
      {
        title: "Car Delivery",
        desc: "Perfect for medium-sized packages, fragile items, and anything that needs a little more space and care.",
        time: "30 – 90 min",
        price: "From TSh 12,000",
      },
      {
        title: "Van & Heavy Delivery",
        desc: "Built for bulk orders, furniture, and large cargo. One trip handles what would take many.",
        time: "Same day",
        price: "From TSh 40,000",
      },
      {
        title: "Same-Day Delivery",
        desc: "Guaranteed delivery within Arusha before end of day. Book by noon, delivered by 8 PM.",
        time: "Before 8 PM",
        price: "Varies by load",
      },
    ],

    timeLabel: "Est. time",
    priceLabel: "Starting from",

    ctaTitle: "Ready to place an order?",
    ctaDesc: "Your package picked up in under 15 minutes.",
    ctaBtn: "Place an Order",
  },

  sw: {
    pageLabel: "Tunachotoa",
    pageTitle: "Huduma Zetu",
    pageDesc:
      "Suluhisho la usafirishaji linaloaminika kwa ajili ya Arusha na Tanzania ya Kaskazini (kwa pikipiki, au gari).",

    services: [
      {
        title: "Usafirishaji kwa Pikipiki",
        desc: "Chaguo letu la haraka zaidi kwa vifurushi vidogo hadi vya kati ndani ya mji wa Arusha. Bora kwa nyaraka, chakula, na vifurushi vya kawaida.",
        time: "Dak. 15 – 45",
        price: "Kuanzia TSh 2,000",
      },
      {
        title: "Usafirishaji kwa Gari",
        desc: "Chaguo bora kwa vifurushi vya kati, mizigo inayohitaji uangalifu, na chochote kinachohitaji nafasi zaidi na uangalifu zaidi.",
        time: "Dak. 30 – 90",
        price: "Kuanzia TSh 12,000",
      },
      {
        title: "Usafirishaji kwa Kenta",
        desc: "Chaguo bora kwa ajili ya mizigo mikubwa. Safari moja inayobeba mizigo mingi zaidi.",
        time: "Siku hiyo hiyo",
        price: "Kuanzia TSh 40,000",
      },
      {
        title: "Uwasilishaji wa Siku Hiyo Hiyo",
        desc: "Usafirishaji uliohakikishwa ndani ya Arusha kabla ya mwisho wa siku. Agiza sasa na kupokea mzigo wako ndani ya siku hiyo hiyo.",
        time: "Kabla ya siku kuisha",
        price: "Inategemea mzigo",
      },
    ],

    timeLabel: "Muda wa makisio",
    priceLabel: "Kuanzia",

    ctaTitle: "Uko tayari kuagiza sasa?",
    ctaDesc: "Agiza sasa uhudumiwe ndani ya dakika 15.",
    ctaBtn: "Agiza",
  },
} as const;

export default function Services() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <div className="bg-bg min-h-screen">
      {/* ── Page header ──────────────────────────────────────── */}
      <section className="border-b border-alt">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-3">
            {c.pageLabel}
          </p>
          <h1 className="heading text-4xl md:text-5xl font-bold text-text mb-4">
            {c.pageTitle}
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            {c.pageDesc}
          </p>
        </div>
      </section>

      {/* ── Service cards ────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {c.services.map((service, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="bg-alt rounded-xl p-7 border border-alt hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary" />
                  </div>

                  <h2 className="heading text-xl font-semibold text-text mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="border-t border-alt pt-5 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-text-secondary uppercase tracking-wide mb-0.5">
                        {c.timeLabel}
                      </p>
                      <p className="text-sm font-medium text-text">
                        {service.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-text-secondary uppercase tracking-wide mb-0.5">
                        {c.priceLabel}
                      </p>
                      <p className="text-sm font-semibold text-primary">
                        {service.price}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA strip ────────────────────────────────────────── */}
      <section className="border-t-alt border-y border-b-text/5 bg-alt">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="heading text-2xl font-bold text-text mb-1">
              {c.ctaTitle}
            </h2>
            <p className="text-text-secondary text-sm">{c.ctaDesc}</p>
          </div>
          <Link
            href="/order"
            className="shrink-0 px-7 py-3 bg-primary text-black font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            {c.ctaBtn}
          </Link>
        </div>
      </section>
    </div>
  );
}
