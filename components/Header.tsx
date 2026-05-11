'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/lib/useLanguage';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [themeMounted, setThemeMounted] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t, mounted: langMounted } = useLanguage();

  useEffect(() => { setThemeMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isDark = resolvedTheme === 'dark';

  const NAV_LINKS = [
    { href: '/',         label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/about',    label: t.nav.about },
    { href: '/order',    label: t.nav.order },
    { href: '/contact',  label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-200 bg-bg ${
          scrolled ? 'border-b border-alt shadow-sm' : 'border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="MbioMbio Home">
            <div className="w-14 h-14 shrink-0 rounded-lg overflow-hidden bg-white p-1">
              <img
                src="/images/logo.png"
                alt="MbioMbio Delivery"
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-text-secondary hover:text-text hover:bg-alt'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">

            {/* Language toggle */}
            {langMounted && (
              <div className="flex items-center rounded-md border border-alt overflow-hidden">
                <button
                  onClick={() => setLang('en')}
                  className={`px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    lang === 'en'
                      ? 'bg-primary text-black'
                      : 'text-text-secondary hover:text-text hover:bg-alt'
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <div className="w-px h-4 bg-alt" />
                <button
                  onClick={() => setLang('sw')}
                  className={`px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    lang === 'sw'
                      ? 'bg-primary text-black'
                      : 'text-text-secondary hover:text-text hover:bg-alt'
                  }`}
                  aria-label="Switch to Kiswahili"
                >
                  SW
                </button>
              </div>
            )}

            {/* Theme toggle */}
            {themeMounted && (
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="w-8 h-8 flex items-center justify-center rounded-md text-text-secondary hover:text-text hover:bg-alt transition-colors"
                aria-label="Toggle theme"
              >
                {isDark
                  ? <Sun size={17} strokeWidth={1.8} />
                  : <Moon size={17} strokeWidth={1.8} />}
              </button>
            )}

            {/* CTA — desktop */}
            <Link
              href="/order"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-black text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              {langMounted ? t.cta : 'Place Order'}
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-md text-text hover:bg-alt transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen Mobile Menu ───────────────────────────── */}
      <div
        className={`fixed inset-0 z-100 bg-bg md:hidden flex flex-col transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Top bar — matches header height */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-alt shrink-0">
          <Link href="/" onClick={() => setIsOpen(false)} aria-label="MbioMbio Home">
            <div className="w-10 h-10 shrink-0 rounded-lg overflow-hidden bg-white p-0.5">
              <img
                src="/images/logo.png"
                alt="MbioMbio Delivery"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-md text-text hover:bg-alt transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links — vertically centred in remaining space */}
        <nav
          className="flex-1 flex flex-col justify-center px-8"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map(({ href, label }, i) => {
              const isActive = pathname === href;
              return (
                <li
                  key={href}
                  className={`transition-all duration-300 ${
                    isOpen
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: isOpen ? `${i * 60 + 80}ms` : '0ms' }}
                >
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-4 border-b text-3xl font-bold tracking-tight transition-colors ${
                      isActive
                        ? 'text-primary border-primary/20'
                        : 'text-text border-alt hover:text-primary'
                    }`}
                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                  >
                    <span>{label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom — language + CTA */}
        <div className="shrink-0 px-8 pb-10 space-y-4">

          {/* Language switcher */}
          <div className="flex items-center gap-3">
            <Globe size={15} className="text-text-secondary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Language
            </span>
            <div className="flex items-center rounded-md border border-alt overflow-hidden ml-auto">
              <button
                onClick={() => setLang('en')}
                className={`px-4 py-2 text-sm font-semibold transition-colors ${
                  lang === 'en'
                    ? 'bg-primary text-black'
                    : 'text-text-secondary hover:text-text'
                }`}
              >
                English
              </button>
              <div className="w-px h-5 bg-alt" />
              <button
                onClick={() => setLang('sw')}
                className={`px-4 py-2 text-sm font-semibold transition-colors ${
                  lang === 'sw'
                    ? 'bg-primary text-black'
                    : 'text-text-secondary hover:text-text'
                }`}
              >
                Kiswahili
              </button>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/order"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-4 bg-primary text-black font-bold rounded-md hover:opacity-90 transition-opacity text-base"
          >
            {langMounted ? t.cta : 'Place Order'}
          </Link>
        </div>
      </div>
    </>
  );
}