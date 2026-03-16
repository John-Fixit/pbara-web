"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@heroui/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/chapters", label: "Chapters" },
  { href: "/events", label: "Programs" },
  { href: "/news", label: "News" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

/**
 * Responsive navbar: logo left, nav links center, JOIN NOW right.
 * Active link underlined in gold. Mobile hamburger menu.
 */
export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-18" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="PBA Royal Ambassadors home">
          <Image
            src="/images/ra-logo.png"
            alt="Royal Ambassadors of Nigeria official logo — circular emblem with shield, crown, wheel, torch and laurel wreath"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <span className="font-heading font-semibold text-sm md:text-base whitespace-nowrap">
            PBA — Royal Ambassadors
          </span>
        </Link>

        {/* Desktop nav links — centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`relative py-2 text-sm uppercase tracking-wider transition-colors hover:text-gold ${
                  isActive ? "text-gold" : "text-white/90"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded" aria-hidden />
                )}
              </Link>
            );
          })}
        </div>

        {/* JOIN NOW button */}
        <div className="flex items-center gap-2">
          <Button
            as={Link}
            href="/contact"
            className="hidden md:inline-flex bg-gold text-navy font-semibold uppercase text-sm hover:opacity-90"
          >
            Join Now
          </Button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 py-3 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`py-2 px-3 rounded-lg text-sm uppercase ${isActive ? "text-gold bg-white/10" : "text-white/90 hover:bg-white/10"}`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 py-2 px-3 rounded-lg bg-gold text-navy font-semibold text-center uppercase text-sm"
          >
            Join Now
          </Link>
        </div>
      )}
    </header>
  );
}
