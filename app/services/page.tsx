'use client';

import { motion } from 'framer-motion';
import { Bike, Truck, Users, Clock } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  {
    icon: Bike,
    title: 'Motorcycle Delivery',
    desc: 'Our fastest option for small to medium packages within Arusha city. Ideal for documents, food, and everyday parcels.',
    time: '15 – 45 min',
    price: 'From TSh 5,000',
  },
  {
    icon: Truck,
    title: 'Car Delivery',
    desc: 'Perfect for medium-sized packages, fragile items, and anything that needs a little more space and care.',
    time: '30 – 90 min',
    price: 'From TSh 12,000',
  },
  {
    icon: Users,
    title: 'Van & Heavy Delivery',
    desc: 'Built for bulk orders, furniture, and large cargo. One trip handles what would take many.',
    time: 'Same day',
    price: 'From TSh 25,000',
  },
  {
    icon: Clock,
    title: 'Same-Day Delivery',
    desc: 'Guaranteed delivery within Arusha before end of day. Book by noon, delivered by 8 PM.',
    time: 'Before 8 PM',
    price: 'Varies by load',
  },
];

export default function Services() {
  return (
    <div className="bg-bg min-h-screen">

      {/* ── Page header ──────────────────────────────────────── */}
      <section className="border-b border-alt">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-3">
            What we offer
          </p>
          <h1 className="heading text-4xl md:text-5xl font-bold text-text mb-4">
            Our Services
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            Reliable delivery solutions tailored for Arusha and Northern Tanzania —
            by motorcycle, car, or van.
          </p>
        </div>
      </section>

      {/* ── Service cards ────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-alt rounded-xl p-7 border border-alt hover:border-primary/30 transition-colors group"
              >
                {/* Icon */}
                <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={20} className="text-primary" />
                </div>

                {/* Copy */}
                <h2 className="heading text-xl font-semibold text-text mb-2">
                  {service.title}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Meta */}
                <div className="border-t border-alt pt-5 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wide mb-0.5">
                      Est. time
                    </p>
                    <p className="text-sm font-medium text-text">{service.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-text-secondary uppercase tracking-wide mb-0.5">
                      Starting from
                    </p>
                    <p className="text-sm font-semibold text-primary">{service.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ────────────────────────────────────────── */}
      <section className="border-t border-alt bg-alt">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="heading text-2xl font-bold text-text mb-1">
              Ready to place an order?
            </h2>
            <p className="text-text-secondary text-sm">
              Your package picked up in under 15 minutes.
            </p>
          </div>
          <Link
            href="/track"
            className="shrink-0 px-7 py-3 bg-primary text-black font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            Place an Order
          </Link>
        </div>
      </section>

    </div>
  );
}