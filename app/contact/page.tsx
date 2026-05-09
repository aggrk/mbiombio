'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    lines: ['mbiombiodelivery@gmail.com'],
    href: ['mailto:mbiombiodelivery@gmail.com'],
  },
  {
    icon: Clock,
    label: 'Working Hours',
    lines: ['Mon – Sat: 7:00 AM – 8:00 PM', 'Sunday: 8:00 AM – 6:00 PM'],
  },
];

// ── Inline field error ───────────────────────────────────────────────────────

function FieldError({ message }: { message: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-1.5 text-xs text-red-400/80"
    >
      {message}
    </motion.p>
  );
}

// ── Validation ───────────────────────────────────────────────────────────────

type Errors = { name?: string; email?: string; message?: string };

function validate(formData: FormData): Errors {
  const e: Errors = {};
  if (!formData.get('name'))    e.name    = 'Name is required';
  if (!formData.get('email'))   e.email   = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(formData.get('email') as string))
                                e.email   = 'Invalid email address';
  if (!formData.get('message')) e.message = 'Message is required';
  return e;
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [submitted,    setSubmitted]    = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors,       setErrors]       = useState<Errors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form     = e.currentTarget;
    const formData = new FormData(form);

    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/xnjwgyky', {
        method:  'POST',
        body:    formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setErrors({});
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="py-12 text-center"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <h2 className="heading text-xl font-bold text-text mb-2">Message sent</h2>
                    <p className="text-sm text-text-secondary mb-6">
                      We'll get back to you within a few hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-primary transition-colors"
                    >
                      Send another →
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <h2 className="heading text-xl font-bold text-text mb-6">Send a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">
                          Your name
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="e.g. Amina Juma"
                          className={`w-full bg-bg border rounded-md px-4 py-2.5 text-sm text-text placeholder:text-text-secondary/50 focus:outline-none transition-colors ${
                            errors.name ? 'border-red-500/50 focus:border-red-500/70' : 'border-alt focus:border-primary'
                          }`}
                        />
                        {errors.name && <FieldError message={errors.name} />}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          className={`w-full bg-bg border rounded-md px-4 py-2.5 text-sm text-text placeholder:text-text-secondary/50 focus:outline-none transition-colors ${
                            errors.email ? 'border-red-500/50 focus:border-red-500/70' : 'border-alt focus:border-primary'
                          }`}
                        />
                        {errors.email && <FieldError message={errors.email} />}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">
                          Phone number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+255 700 000 000"
                          className="w-full bg-bg border border-alt rounded-md px-4 py-2.5 text-sm text-text placeholder:text-text-secondary/50 focus:border-primary focus:outline-none transition-colors"
                        />
                        {/* phone is optional — no validation error */}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">
                          Message
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="How can we help?"
                          className={`w-full bg-bg border rounded-md px-4 py-2.5 text-sm text-text placeholder:text-text-secondary/50 focus:outline-none transition-colors resize-none ${
                            errors.message ? 'border-red-500/50 focus:border-red-500/70' : 'border-alt focus:border-primary'
                          }`}
                        />
                        {errors.message && <FieldError message={errors.message} />}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-primary text-black text-sm font-semibold rounded-md hover:opacity-90 transition-opacity mt-2 disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-3.5 h-3.5 border border-black/30 border-t-black rounded-full animate-spin" />
                            Sending…
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>

                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}