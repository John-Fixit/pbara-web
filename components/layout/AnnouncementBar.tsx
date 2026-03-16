"use client";

import Link from "next/link";

/**
 * Top announcement bar: portal tagline + Portals / Donations links
 */
export function AnnouncementBar() {
  return (
    <header className="bg-navy text-white text-xs uppercase tracking-wider py-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
        <span className="text-white/90">
          THE OFFICIAL PORTAL OF RA PENTECOST · EST. 1974
        </span>
        <nav className="flex items-center gap-4" aria-label="Top links">
          <Link
            href="/#resources"
            className="text-white/90 hover:text-gold transition-colors"
          >
            PORTALS
          </Link>
          <span className="text-white/50">·</span>
          <Link
            href="/contact"
            className="text-white/90 hover:text-gold transition-colors"
          >
            DONATIONS
          </Link>
        </nav>
      </div>
    </header>
  );
}
