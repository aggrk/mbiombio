"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bike, Truck, Users, MapPin, Package, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjwgyky";

const VEHICLE_ICONS = [Bike, Truck, Users];

const CONTENT = {
  en: {
    pageLabel: "Get started",
    pageTitle: "Place an order.",
    pageDesc:
      "Fill in the details below and we'll have a rider at your pickup location within 15 minutes.",

    vehicles: [
      {
        id: "motorcycle",
        label: "Motorcycle",
        desc: "Small packages · 15–45 min",
        price: "From TSh 2,000",
      },
      {
        id: "car",
        label: "Car",
        desc: "Medium & fragile items · 30–90 min",
        price: "From TSh 12,000",
      },
      {
        id: "van",
        label: "Van",
        desc: "Bulk & heavy cargo · Same day",
        price: "From TSh 25,000",
      },
    ],

    sectionContact: "Contact details",
    labelName: "Full name",
    labelPhone: "Phone number",
    namePlaceholder: "e.g. Amina Juma",

    sectionDelivery: "Delivery details",
    labelPickup: "Pickup address",
    pickupPlaceholder: "e.g. Njiro Road, near Total station",
    labelDropoff: "Delivery address",
    dropoffPlaceholder: "e.g. Arusha City Center, Clock Tower",
    labelItem: "Item description",
    itemPlaceholder: "e.g. Laptop in a bag, fragile — please handle with care",

    sectionVehicle: "Vehicle type",

    sectionInstructions: "Special instructions",
    optionalLabel: "(optional)",
    instructionsPlaceholder:
      "Anything the rider should know — gate code, fragile items, call before arrival, etc.",

    errorMsg: "Something went wrong. Please try again or reach us on WhatsApp.",
    submitBtn: "Place Order",
    submitting: "Placing order…",
    footerNote: "We'll call or WhatsApp you to confirm before dispatch.",

    successTitle: "Order received!",
    successDesc:
      "We've got your request. A rider will be at your pickup location shortly. We'll contact you on the number provided.",
    successBtn: "Place another order",
  },

  sw: {
    pageLabel: "Anza Kuagiza",
    pageTitle: "Agiza Sasa.",
    pageDesc:
      "Jaza maelezo hapa chini ili kupata huduma ya usafirishaji ndani ya dakika 15.",

    vehicles: [
      {
        id: "motorcycle",
        label: "Pikipiki",
        desc: "Vifurushi vidogo · Dak. 15–45",
        price: "Kuanzia TSh 2,000",
      },
      {
        id: "car",
        label: "Gari",
        desc: "Vitu vya kati na vinavyohitaji umakini · Dak. 30–90",
        price: "Kuanzia TSh 12,000",
      },
      {
        id: "van",
        label: "Kenta",
        desc: "Mizigo mingi na mizito · Siku hiyo hiyo",
        price: "Kuanzia TSh 40,000",
      },
    ],

    sectionContact: "Maelezo ya mawasiliano",
    labelName: "Jina kamili",
    labelPhone: "Nambari ya simu",
    namePlaceholder: "mfano: Amina Juma",

    sectionDelivery: "Maelezo ya usafirishaji",
    labelPickup: "Anwani ya kuchukua",
    pickupPlaceholder: "mfano: Barabara ya Njiro, karibu na kituo cha Total",
    labelDropoff: "Anwani ya kupeleka",
    dropoffPlaceholder: "mfano: Katikati ya Mji wa Arusha, Clock Tower",
    labelItem: "Maelezo ya Mzigo",
    itemPlaceholder:
      "mfano: Kompyuta ndogo kwenye mfuko, inahitaji umakini — tafadhali shughulikia kwa uangalifu",

    sectionVehicle: "Aina ya Usafiri",

    sectionInstructions: "Maelekezo maalum",
    optionalLabel: "(hiari)",
    instructionsPlaceholder:
      "Chochote ambacho dereva anapaswa kujua — maelezo ya ziada kuhusu mzigo, piga simu kabla ya kuwasili, n.k.",

    errorMsg:
      "Kuna hitilafu. Tafadhali jaribu tena au tuwasiliane kupitia WhatsApp.",
    submitBtn: "Agiza",
    submitting: "Inatuma…",
    footerNote: "Tutakupigia simu au WhatsApp kukuthibitishia kabla ya kutuma.",

    successTitle: "Agizo limepokelewa!",
    successDesc:
      "Tumepokea ombi lako. Mpishi atakuwa mahali pa kuchukua hivi karibuni. Tutawasiliana nawe kwa nambari uliyotoa.",
    successBtn: "Weka agizo lingine",
  },
} as const;

type FormState = "idle" | "submitting" | "success" | "error";

export default function PlaceOrder() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  const [vehicle, setVehicle] = useState("motorcycle");
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
        setVehicle("motorcycle");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <div className="bg-bg min-h-screen">
      {/* ── Page header ──────────────────────────────────────── */}
      <section className="border-b border-alt">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-3">
            {c.pageLabel}
          </p>
          <h1 className="heading text-4xl md:text-5xl font-bold text-text mb-4">
            {c.pageTitle}
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            {c.pageDesc}
          </p>
        </div>
      </section>

      {/* ── Form ─────────────────────────────────────────────── */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-6">
          {formState === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-alt rounded-xl border border-alt p-12 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={26} className="text-primary" />
              </div>
              <h2 className="heading text-2xl font-bold text-text mb-2">
                {c.successTitle}
              </h2>
              <p className="text-text-secondary text-sm max-w-sm mx-auto mb-6">
                {c.successDesc}
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="px-6 py-2.5 bg-primary text-black text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
              >
                {c.successBtn}
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* ── Contact details ── */}
              <div className="bg-alt rounded-xl border border-alt p-6 md:p-8 space-y-5">
                <h2 className="heading text-base font-semibold text-text">
                  {c.sectionContact}
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">
                      {c.labelName} <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder={c.namePlaceholder}
                      className="w-full bg-bg border border-alt rounded-md px-4 py-2.5 text-sm text-text placeholder:text-text-secondary/40 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">
                      {c.labelPhone} <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+255 700 000 000"
                      className="w-full bg-bg border border-alt rounded-md px-4 py-2.5 text-sm text-text placeholder:text-text-secondary/40 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* ── Delivery details ── */}
              <div className="bg-alt rounded-xl border border-alt p-6 md:p-8 space-y-5">
                <h2 className="heading text-base font-semibold text-text">
                  {c.sectionDelivery}
                </h2>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">
                    {c.labelPickup} <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <MapPin
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary"
                    />
                    <input
                      type="text"
                      name="pickup_address"
                      required
                      placeholder={c.pickupPlaceholder}
                      className="w-full bg-bg border border-alt rounded-md pl-9 pr-4 py-2.5 text-sm text-text placeholder:text-text-secondary/40 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">
                    {c.labelDropoff} <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <MapPin
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary"
                    />
                    <input
                      type="text"
                      name="delivery_address"
                      required
                      placeholder={c.dropoffPlaceholder}
                      className="w-full bg-bg border border-alt rounded-md pl-9 pr-4 py-2.5 text-sm text-text placeholder:text-text-secondary/40 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">
                    {c.labelItem} <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <Package
                      size={15}
                      className="absolute left-3.5 top-3 text-text-secondary"
                    />
                    <textarea
                      name="item_description"
                      required
                      rows={3}
                      placeholder={c.itemPlaceholder}
                      className="w-full bg-bg border border-alt rounded-md pl-9 pr-4 py-2.5 text-sm text-text placeholder:text-text-secondary/40 focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* ── Vehicle type ── */}
              <div className="bg-alt rounded-xl border border-alt p-6 md:p-8 space-y-4">
                <h2 className="heading text-base font-semibold text-text">
                  {c.sectionVehicle}
                </h2>

                <input type="hidden" name="vehicle_type" value={vehicle} />

                <div className="grid md:grid-cols-3 gap-3">
                  {c.vehicles.map(({ id, label, desc, price }, i) => {
                    const Icon = VEHICLE_ICONS[i];
                    const selected = vehicle === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setVehicle(id)}
                        className={`text-left p-4 rounded-lg border transition-colors ${
                          selected
                            ? "border-primary bg-primary/10"
                            : "border-alt bg-bg hover:border-primary/30"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-md flex items-center justify-center mb-3 ${
                            selected ? "bg-primary/20" : "bg-alt"
                          }`}
                        >
                          <Icon
                            size={16}
                            className={
                              selected ? "text-primary" : "text-text-secondary"
                            }
                          />
                        </div>
                        <p
                          className={`text-sm font-semibold mb-0.5 ${selected ? "text-primary" : "text-text"}`}
                        >
                          {label}
                        </p>
                        <p className="text-xs text-text-secondary leading-snug mb-2">
                          {desc}
                        </p>
                        <p className="text-xs font-medium text-accent">
                          {price}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── Special instructions ── */}
              <div className="bg-alt rounded-xl border border-alt p-6 md:p-8 space-y-4">
                <h2 className="heading text-base font-semibold text-text">
                  {c.sectionInstructions}{" "}
                  <span className="text-xs font-normal text-text-secondary normal-case tracking-normal">
                    {c.optionalLabel}
                  </span>
                </h2>
                <textarea
                  name="special_instructions"
                  rows={3}
                  placeholder={c.instructionsPlaceholder}
                  className="w-full bg-bg border border-alt rounded-md px-4 py-2.5 text-sm text-text placeholder:text-text-secondary/40 focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* ── Error message ── */}
              {formState === "error" && (
                <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-md px-4 py-3">
                  {c.errorMsg}
                </p>
              )}

              {/* ── Submit ── */}
              <button
                type="submit"
                disabled={formState === "submitting"}
                className="w-full py-3.5 bg-primary text-black font-semibold rounded-md hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed text-sm flex items-center justify-center gap-2"
              >
                {formState === "submitting" ? (
                  <>
                    <span className="w-3.5 h-3.5 border border-black/30 border-t-black rounded-full animate-spin" />
                    {c.submitting}
                  </>
                ) : (
                  c.submitBtn
                )}
              </button>

              <p className="text-center text-xs text-text-secondary">
                {c.footerNote}
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}
