"use client";

import { useState, useEffect, useCallback } from "react";

export type Lang = "en" | "sw";

const STORAGE_KEY = "mbiombio-lang";
const LANG_EVENT = "mbiombio-lang-change";

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      order: "Order",
      contact: "Contact",
    },
    cta: "Place Order",
    langLabel: "EN",
    langFull: "English",
  },
  sw: {
    nav: {
      home: "Nyumbani",
      services: "Huduma",
      about: "Kuhusu",
      order: "Agiza",
      contact: "Mawasiliano",
    },
    cta: "Agiza Sasa",
    langLabel: "SW",
    langFull: "Kiswahili",
  },
} as const;

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read stored preference on mount
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "en" || stored === "sw") setLangState(stored);
    setMounted(true);

    // Listen for language changes broadcast by other instances of this hook
    const handleLangChange = (e: CustomEvent<Lang>) => {
      setLangState(e.detail);
    };

    window.addEventListener(LANG_EVENT, handleLangChange as EventListener);
    return () =>
      window.removeEventListener(LANG_EVENT, handleLangChange as EventListener);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
    // Broadcast the change to every other instance of useLanguage on the page
    window.dispatchEvent(new CustomEvent<Lang>(LANG_EVENT, { detail: l }));
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "en" ? "sw" : "en");
  }, [lang, setLang]);

  const t = translations[lang];

  return { lang, setLang, toggle, t, mounted };
}
