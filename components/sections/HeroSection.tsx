"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";

/**
 * Split hero: left — badge, heading, quote, CTAs; right — RA logo (no stock people images)
 */
export function HeroSection() {
  return (
    <section
      className="relative bg-navy text-white min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 py-16 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: content */}
        <div className="flex-1 text-center lg:text-left max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gold/20 text-gold text-xs uppercase tracking-widest mb-6">
            <span aria-hidden>🛡</span>
            <span>DISCIPLINE · SERVICE · FAITH</span>
          </div>
          <h1 id="hero-heading" className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Pentecost Baptist
            <br />
            <span className="text-gold">Association —</span>
            <br />
            Royal Ambassadors
          </h1>
          <div className="w-12 h-1 bg-gold rounded mb-4" aria-hidden />
          <p className="text-lg text-white/90 italic mb-8">
            Ambassadors for Christ: Raising godly boys into disciplined men of faith and integrity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button
              as={Link}
              href="/about"
              className="bg-white/10 border border-white/30 text-white hover:bg-white/20 font-semibold"
            >
              Learn Our Mission
            </Button>
            <Button
              as={Link}
              href="/events"
              className="bg-gold text-navy hover:opacity-90 font-semibold"
            >
              View Calendar
            </Button>
          </div>
        </div>

        {/* Right: RA logo only (no stock/AI people) */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/images/ra-logo.png"
              alt="Royal Ambassadors of Nigeria official logo — circular emblem with shield, crown, wheel, torch and laurel wreath in navy and gold"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
