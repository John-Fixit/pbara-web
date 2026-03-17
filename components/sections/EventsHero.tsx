"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CountdownTimer } from "@/components/ui/CountdownTimer";

interface EventsHeroProps {
  /** ISO date string for next upcoming event (for countdown) */
  nextEventDate?: string | null;
}

export function EventsHero({ nextEventDate }: EventsHeroProps) {
  return (
    <section className="relative min-h-[480px] flex flex-col justify-end text-white overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 scale-105">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-1.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              const t = e.currentTarget;
              if (t.src !== "/images/ra-logo.png") t.src = "/images/ra-logo.png";
            }}
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(27,46,90,0.4) 0%, rgba(27,46,90,0.92) 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 py-16 md:py-20">
        <motion.span
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block px-3 py-1.5 rounded bg-gold text-primary text-xs font-semibold uppercase tracking-wider mb-4"
        >
          FEATURED PROGRAM
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          Events and Programs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/90 mt-2 max-w-2xl text-base md:text-lg"
        >
          Strengthening the faith and discipline of young men through dedicated
          fellowship and service.
        </motion.p>

        {nextEventDate && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6"
          >
            <CountdownTimer
              targetDate={nextEventDate}
              label="Next Event In:"
              className="text-sm md:text-base"
            />
          </motion.div>
        )}

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-sm text-white/80"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gold">Events</span>
        </motion.nav>
      </div>
    </section>
  );
}
