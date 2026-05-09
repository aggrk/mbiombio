'use client';

import { motion } from 'framer-motion';
import { MapPin,PhoneCall, Shield, Clock } from 'lucide-react';

const STATS = [
   { icon: Clock,     title: '15-min pickup',    desc: 'Target pickup time in Arusha' },
  { icon: MapPin,    title: 'Arusha-based',     desc: 'Riders who know every street' },
   { icon: Shield,    title: 'Handled with care', desc: 'Every package, every time' },
   { icon: PhoneCall, title: 'WhatsApp orders',  desc: 'Order in seconds, no app needed' },
];

export default function About() {
  return (
    <div className="bg-bg min-h-screen">

      {/* ── Page header ──────────────────────────────────────── */}
      <section className="border-b border-alt">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-3">
            Our story
          </p>
          <h1 className="heading text-4xl md:text-5xl font-bold text-text mb-4">
            Fast delivery, <br className="hidden md:block" />
            proudly Arusha.
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            MbioMbio means "fast" in Swahili — and that's exactly what we deliver.
          </p>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────── */}
      <section className="border-b border-alt">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading text-2xl font-bold text-text mb-4">
                Built for Arusha, by Arusha
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Founded in Arusha, we understand the streets, the traffic patterns,
                  and the importance of speed in this growing city. What started as a
                  small team of riders delivering for local businesses has grown into
                  Arusha's most trusted delivery service.
                </p>
                <p>
                  Every rider on our team is from the region. We know the shortcuts,
                  the peak hours, and the neighbourhoods — because this is home.
                </p>
              </div>
            </div>

            {/* Accent block */}
            <div className="bg-alt rounded-xl p-8 border border-alt">
              <blockquote className="text-lg font-medium text-text leading-relaxed">
                "We didn't just build a delivery company — we built something Arusha
                could rely on. Every package we move matters."
              </blockquote>
              <p className="mt-4 text-sm text-text-secondary">— MbioMbio Founding Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="border-b border-alt bg-alt">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="heading text-2xl font-bold text-text mb-10">By the numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-bg rounded-xl p-6 border border-alt"
              >
                <div className="w-9 h-9 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <stat.icon size={17} className="text-primary" />
                </div>
                <div className="heading text-2xl font-bold text-text mb-1">
                  {stat.title}
                </div>
                <p className="text-sm text-text-secondary">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────── */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-black/60 mb-3">
              Our mission
            </p>
            <h2 className="heading text-3xl md:text-4xl font-bold text-black mb-5 leading-snug">
              Fast, reliable, and creating opportunity.
            </h2>
            <p className="text-black/75 text-lg leading-relaxed">
              To provide the fastest, most reliable, and affordable delivery service
              in Northern Tanzania — while creating meaningful employment opportunities
              for young riders in Arusha.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}