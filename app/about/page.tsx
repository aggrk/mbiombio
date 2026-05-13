"use client";

import { motion } from "framer-motion";
import { MapPin, PhoneCall, Shield, Clock } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";

export const metadata = {
  title: "About MbioMbio | Arusha's Fastest Delivery Service",
  description:
    "Learn about MbioMbio — the delivery company built for Arusha, Tanzania. Fast pickups, local riders, and same-day delivery.",
  alternates: { canonical: "https://mbiombio.com/about" },
};

const STAT_ICONS = [Clock, MapPin, Shield, PhoneCall];

const CONTENT = {
  en: {
    storyLabel: "Our story",
    heroTitle: ["Fast delivery,", "proudly Arusha."],
    heroDesc:
      'MbioMbio means "fast" in Swahili — and that\'s exactly what we deliver.',

    storyTitle: "Built for Arusha",
    storyP1:
      "Founded in Arusha, we understand the streets, the traffic patterns, and the importance of speed in this growing city. What started as a small team of riders delivering for local businesses has grown into Arusha's most trusted delivery service.",
    storyP2:
      "Every rider on our team is from the region. We know the shortcuts, the peak hours, and the neighbourhoods — because this is home.",
    quote:
      "We didn't just build a delivery company — we built something Arusha could rely on. Every package we move matters.",
    quoteAuthor: "— MbioMbio Founding Team",

    statsTitle: "By the numbers",
    stats: [
      { title: "15-min pickup", desc: "Target pickup time in Arusha" },
      { title: "Arusha-based", desc: "Riders who know every street" },
      { title: "Handled with care", desc: "Every package, every time" },
      { title: "WhatsApp orders", desc: "Order in seconds, no app needed" },
    ],

    missionLabel: "Our mission",
    missionTitle: "Fast, reliable, and creating opportunity.",
    missionDesc:
      "To provide the fastest, most reliable, and affordable delivery service in Northern Tanzania — while creating meaningful employment opportunities for young riders in Arusha.",
  },

  sw: {
    storyLabel: "Kuhusu Sisi",
    heroTitle: ["Usafirishaji wa haraka,", "kwa fahari ya Arusha."],
    heroDesc:
      'MbioMbio maana yake "haraka" kwa Kiswahili — na hiyo ndiyo huduma yetu, huduma ya haraka.',

    storyTitle: "Kwa ajili ya Arusha",
    storyP1:
      "Kwa sasa tumeanza na Arusha, kwakuwa tunajua barabara, mifumo ya msongamano, na umuhimu wa huduma ya usafirishaji wa haraka katika mji huu unaokua. Tulianza kama timu ndogo ya madereva wanaosafirisha mizigo kwa ajili ya biashara ndogo ndogo na kukua kuwa huduma ya usafirishaji inayoaminika zaidi Arusha.",
    storyP2:
      "Kila dereva katika timu yetu ni mkazi wa Arusha wa muda mrefu. Tunajua njia za mkato, na mitaa — kwa sababu huku ndio kwetu.",
    quote:
      "Hatujaanzisha kampuni ya usafirishaji tu — bali huduma ambayo wakazi wa Arusha wanaweza kuitegemea. Mteja kwetu ni mfalme.",
    quoteAuthor: "— Timu ya Waanzilishi wa MbioMbio",

    statsTitle: "Kwa takwimu",
    stats: [
      {
        title: "Mzigo kuchukuliwa ndani ya dakika 15",
        desc: "Muda lengwa wa kuchukua mzigo",
      },
      { title: "Kwa ajili ya Arusha", desc: "Madereva wanaojua kila barabara" },
      {
        title: "Kushughulikiwa kwa makini",
        desc: "Kila kifurushi, kila wakati",
      },
      {
        title: "Agiza kupitia WhatsApp",
        desc: "Agiza kwa sekunde, kupitia WhatsApp",
      },
    ],

    missionLabel: "Dhamira yetu",
    missionTitle:
      "Kutoa huduma ya usafirishaji ya haraka, ya kuaminika, na kutengeneza fursa.",
    missionDesc:
      "Kutoa huduma ya usafirishaji ya haraka, ya kuaminika zaidi, na ya bei nafuu — huku tukiunda fursa za ajira zenye maana kwa madereva vijana Arusha.",
  },
} as const;

export default function About() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <div className="bg-bg min-h-screen">
      {/* ── Page header ──────────────────────────────────────── */}
      <section className="border-b border-alt">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-3">
            {c.storyLabel}
          </p>
          <h1 className="heading text-4xl md:text-5xl font-bold text-text mb-4">
            {c.heroTitle[0]} <br className="hidden md:block" />
            {c.heroTitle[1]}
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            {c.heroDesc}
          </p>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────── */}
      <section className="border-b border-alt">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading text-2xl font-bold text-text mb-4">
                {c.storyTitle}
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>{c.storyP1}</p>
                <p>{c.storyP2}</p>
              </div>
            </div>

            {/* Accent block */}
            <div className="bg-alt rounded-xl p-8 border border-alt">
              <blockquote className="text-lg font-medium text-text leading-relaxed">
                "{c.quote}"
              </blockquote>
              <p className="mt-4 text-sm text-text-secondary">
                {c.quoteAuthor}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="border-b border-alt bg-alt">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="heading text-2xl font-bold text-text mb-10">
            {c.statsTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {c.stats.map((stat, i) => {
              const Icon = STAT_ICONS[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="bg-bg rounded-xl p-6 border border-alt"
                >
                  <div className="w-9 h-9 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                    <Icon size={17} className="text-primary" />
                  </div>
                  <div className="heading text-2xl font-bold text-text mb-1">
                    {stat.title}
                  </div>
                  <p className="text-sm text-text-secondary">{stat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────── */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-black/60 mb-3">
              {c.missionLabel}
            </p>
            <h2 className="heading text-3xl md:text-4xl font-bold text-black mb-5 leading-snug">
              {c.missionTitle}
            </h2>
            <p className="text-black/75 text-lg leading-relaxed">
              {c.missionDesc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
