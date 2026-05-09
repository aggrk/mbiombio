'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: 'Location',
    lines: ['Olasiti, Arusha', 'Tanzania'],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+255 758 689 802', '+255 626 689 808'],
    href: ['tel:+255758689802', 'tel:+255626689808'],
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['info@mbiombio.com'],
    href: ['mailto:info@mbiombio.com'],
  },
  {
    icon: Clock,
    label: 'Working Hours',
    lines: ['Mon – Sat: 7:00 AM – 8:00 PM', 'Sunday: 8:00 AM – 6:00 PM'],
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-bg min-h-screen">

      {/* ── Page header ──────────────────────────────────────── */}
      <section className="border-b border-alt">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-3">
            Reach out
          </p>
          <h1 className="heading text-4xl md:text-5xl font-bold text-text mb-4">
            Get in touch.
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            Questions, bulk orders, or partnership enquiries — we're here and
            quick to respond.
          </p>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left — contact details */}
            <div className="space-y-8">
              {CONTACT_ITEMS.map(({ icon: Icon, label, lines, href }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-9 h-9 bg-primary/10 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1">
                      {label}
                    </p>
                    {lines.map((line, i) =>
                      href?.[i] ? (
                        <a
                          key={i}
                          href={href[i]}
                          className="block text-sm text-text hover:text-primary transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="text-sm text-text">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp nudge */}
              <div className="mt-4 p-4 rounded-xl bg-alt border border-alt">
                <p className="text-sm font-medium text-text mb-1">Prefer WhatsApp?</p>
                <p className="text-xs text-text-secondary mb-3">
                  Most customers reach us fastest via WhatsApp for quick orders and enquiries.
                </p>
                <a
                  href="https://wa.me/255700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-black text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
                >
                  Open WhatsApp
                </a>
              </div>
            </div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-alt rounded-xl border border-alt p-7 md:p-10"
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <h2 className="heading text-xl font-bold text-text mb-2">Message sent</h2>
                  <p className="text-sm text-text-secondary">
                    We'll get back to you within a few hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="heading text-xl font-bold text-text mb-6">Send a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">
                        Your name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amina Juma"
                        className="w-full bg-bg border border-alt rounded-md px-4 py-2.5 text-sm text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-bg border border-alt rounded-md px-4 py-2.5 text-sm text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        placeholder="+255 700 000 000"
                        className="w-full bg-bg border border-alt rounded-md px-4 py-2.5 text-sm text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="How can we help?"
                        className="w-full bg-bg border border-alt rounded-md px-4 py-2.5 text-sm text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-primary text-black text-sm font-semibold rounded-md hover:opacity-90 transition-opacity mt-2"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}