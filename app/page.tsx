'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bike, Truck, Users, Clock, Shield, MapPin, PhoneCall } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-bg border-b border-alt">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                    Now serving Arusha
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text mb-5"
              >
                Arusha's fastest <br />
                <span className="text-primary">delivery service.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-text-secondary mb-8 max-w-md leading-relaxed"
              >
                Motorcycles, cars, and vans ready to move your packages across
                Arusha and Northern Tanzania — in minutes, not hours.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="/order"
                  className="px-6 py-3 bg-primary text-black font-semibold rounded-md hover:opacity-90 transition-opacity"
                >
                  Place an Order
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3 border border-alt hover:border-primary/40 hover:bg-alt rounded-md font-medium transition-colors"
                >
                  Our Services
                </Link>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-xl overflow-hidden border border-alt"
            >
              <img
                src="/images/mbiombio.jpg"
                alt="MbioMbio delivery rider"
                className="w-full h-72 md:h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────────────────── */}
      <section className="bg-alt border-b border-alt">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-alt">
            {[
              { icon: Clock,     title: '15-min pickup',    desc: 'Target pickup time in Arusha' },
              { icon: MapPin,    title: 'Arusha-based',     desc: 'Riders who know every street' },
              { icon: Shield,    title: 'Handled with care', desc: 'Every package, every time' },
              { icon: PhoneCall, title: 'WhatsApp orders',  desc: 'Order in seconds, no app needed' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-alt px-5 py-5 flex items-start gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={15} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{title}</p>
                  <p className="text-xs text-text-secondary mt-0.5 leading-snug">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="py-20 bg-bg border-b border-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="heading text-3xl font-bold text-text mb-2">How it works</h2>
            <p className="text-text-secondary">From order to door in four simple steps.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Bike,   title: 'Place your order', desc: 'Via WhatsApp, our app, or website — takes under a minute.' },
              { icon: Clock,  title: 'Fast pickup',       desc: 'A rider picks up within 15 minutes inside Arusha.' },
              { icon: Truck,  title: 'Live tracking',     desc: 'Follow your package in real-time from pickup to drop-off.' },
              { icon: Shield, title: 'Safe delivery',     desc: 'Handled with care and confirmed on arrival.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-alt rounded-xl p-6 border border-alt hover:border-primary/30 transition-colors"
              >
                <div className="w-9 h-9 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <step.icon size={18} className="text-primary" />
                </div>
                <div className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">
                  Step {i + 1}
                </div>
                <h3 className="font-semibold text-text mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="py-20 bg-alt border-b border-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="heading text-3xl font-bold text-text mb-2">Our services</h2>
            <p className="text-text-secondary">The right vehicle for every delivery need.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Bike,
                name: 'Motorcycle',
                desc: 'The fastest option for documents, food, and small packages within city limits.',
                time: '15 – 45 min',
              },
              {
                icon: Truck,
                name: 'Car',
                desc: 'Medium packages and fragile items delivered safely with more space and comfort.',
                time: '30 – 90 min',
              },
              {
                icon: Users,
                name: 'Van',
                desc: 'Bulk orders, heavy cargo, and business deliveries handled in a single trip.',
                time: 'Same day',
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-bg rounded-xl p-7 border border-alt hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{service.name}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">{service.desc}</p>
                <div className="flex items-center gap-2">
                  <Clock size={13} className="text-accent" />
                  <span className="text-sm font-medium text-accent">{service.time}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
            >
              View full service details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={18} className="text-black/60" />
            <span className="text-sm font-medium text-black/70">
              Serving Arusha & Northern Tanzania
            </span>
          </div>
          <h2 className="heading text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Ready to send something?
          </h2>
          <p className="text-black/70 text-lg mb-8">
            Place an order now and have it picked up in under 15 minutes.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/order"
              className="px-7 py-3 bg-black text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              Place an Order
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 bg-black/10 text-black font-semibold rounded-md hover:bg-black/20 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}