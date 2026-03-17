"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@heroui/react";

// Hero images: add hero-1.png through hero-4.png to public/images/ for the slideshow

const HERO_IMAGES = [
  "/images/image2.jpg",
  "/images/image1.jpeg",
  "/images/image3.jpg",
  "/images/image4.jpg",
];

const FALLBACK_IMAGE = "/images/ra-logo.png";

const STATS = [
  { end: 120, label: "Active Chapters", suffix: "+" },
  { end: 5000, label: "Total Ambassadors", suffix: "+" },
  { end: 50, label: "Years of Impact", suffix: "+" },
  { end: 15, label: "Awards Won", suffix: "+" },
];

function useCountUp(end: number, suffix: string, enabled: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const duration = 2000;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, enabled]);
  return value + suffix;
}

function StatItem({
  end,
  label,
  suffix,
  isInView,
  index,
}: {
  end: number;
  label: string;
  suffix: string;
  isInView: boolean;
  index: number;
}) {
  const value = useCountUp(end, suffix, isInView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="text-center"
    >
      <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white">
        {value}
      </p>
      <p className="text-xs md:text-sm uppercase tracking-wider text-white/80 mt-1">
        {label}
      </p>
    </motion.div>
  );
}

export function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const setSlide = useCallback((index: number) => {
    setSlideIndex(index);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col lg:flex-row text-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{
              opacity: i === slideIndex ? 1 : 0,
              zIndex: i === slideIndex ? 1 : 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                const t = e.currentTarget;
                if (t.src !== FALLBACK_IMAGE) t.src = FALLBACK_IMAGE;
              }}
            />
          </div>
        ))}
        {/* Fallback if hero images missing */}
        <div
          className="absolute inset-0 bg-primary"
          style={{ zIndex: 0 }}
          aria-hidden
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(27,46,90,0.95) 45%, rgba(27,46,90,0.3) 100%)",
          }}
          aria-hidden
        />
      </div>

      {/* Left content panel */}
      <div className="relative z-20 w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-center px-4 py-8 md:py-16 lg:py-24">
        <div className="max-w-xl mx-auto lg:mx-0 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-gold text-gold text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span>DISCIPLINE · SERVICE · FAITH</span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          >
            <span className="block text-white">
              Pentecost Baptist Association
            </span>
            <span className="block text-gold">— Royal Ambassadors</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-white/70 italic text-base md:text-lg mb-8 max-w-lg"
          >
            Ambassadors for Christ: Raising godly boys into disciplined men of
            faith and integrity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <Button
              as={Link}
              href="/about"
              className="bg-gold text-primary hover:opacity-90 font-semibold min-h-[44px]"
            >
              Learn Our Mission
            </Button>
            <Button
              as={Link}
              href="/events"
              variant="bordered"
              className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-semibold min-h-[44px]"
            >
              View Calendar
            </Button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 pt-8 border-t border-gold/40 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:flex lg:justify-between"
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`relative flex flex-col items-center min-h-[44px] justify-center ${i > 0 ? "lg:border-l lg:border-gold/50 lg:pl-4" : ""}`}
              >
                <StatItem
                  end={stat.end}
                  label={stat.label}
                  suffix={stat.suffix}
                  isInView={statsInView}
                  index={i}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Right panel: thumbnail strip (desktop only) */}
      <div className="absolute top-1/2 bottom-1/2 right-0 hidden lg:flex z-20 flex-col justify-center items-end pr-8">
        <div className="flex flex-col gap-3">
          {HERO_IMAGES.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setSlide(i)}
              className="relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-primary"
              style={{
                borderColor:
                  i === slideIndex ? "var(--color-gold)" : "transparent",
                boxShadow:
                  i === slideIndex
                    ? "0 0 0 1px rgba(200, 168, 75, 0.33)"
                    : "none",
              }}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === slideIndex ? "true" : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget;
                  if (t.src !== FALLBACK_IMAGE) t.src = FALLBACK_IMAGE;
                }}
              />
            </button>
          ))}
        </div>
      </div>
      {/* Bottom panel: thumbnail strip (mobile only) */}
      <div className="absolute bottom-0 left-1/2 right-1/2 flex lg:hidden z-20 justify-center items-end pb-3">
        <div className="flex gap-3">
          {HERO_IMAGES.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setSlide(i)}
              className="relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-primary"
              style={{
                borderColor:
                  i === slideIndex ? "var(--color-gold)" : "transparent",
                boxShadow:
                  i === slideIndex
                    ? "0 0 0 1px rgba(200, 168, 75, 0.33)"
                    : "none",
              }}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === slideIndex ? "true" : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget;
                  if (t.src !== FALLBACK_IMAGE) t.src = FALLBACK_IMAGE;
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
