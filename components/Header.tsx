'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, Package } from 'lucide-react';
import { useTheme } from 'next-themes';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/order', label: 'Order' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isDark = resolvedTheme === 'dark';

  return (
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

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="w-8 h-8 flex items-center justify-center rounded-md text-text-secondary hover:text-text hover:bg-alt transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={17} strokeWidth={1.8} /> : <Moon size={17} strokeWidth={1.8} />}
            </button>
          )}

          {/* CTA */}
          <Link
            href="/order"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-black text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            Place Order
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-md text-text hover:bg-alt transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-alt bg-bg px-6 py-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-[15px] font-medium transition-colors ${
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

          <div className="mt-4 pt-4 border-t border-alt">
            <Link
              href="/order"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-2.5 bg-primary text-black text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              Place Order
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}