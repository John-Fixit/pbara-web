"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheckSquare, FiEye, FiShield, FiArrowRight } from "react-icons/fi";
import type { Patron } from "@/types";

const stats = [
  { value: "12+", label: "Active Chapters" },
  { value: "500+", label: "Total Ambassadors" },
  { value: "25+", label: "Annual Programs" },
];

interface AboutPageContentProps {
  patrons: Patron[];
}

export function AboutPageContent({ patrons }: AboutPageContentProps) {
  const aboutPatrons = patrons.slice(0, 3);

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-16">
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
        aria-labelledby="heritage-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="w-16 h-1 bg-gold mb-6" aria-hidden />
          <h2 id="heritage-heading" className="font-heading text-3xl mb-6 text-text-dark">
            Our Heritage
          </h2>
          <p className="text-text-muted leading-relaxed mb-4">
            The Royal Ambassadors of Nigeria (RA) has a storied history of developing Christian character in young men. Established with a vision to build a generation of God-fearing, disciplined, and service-oriented citizens, our association carries forward this legacy through a unique paramilitary structure.
          </p>
          <p className="text-text-muted leading-relaxed">
            For decades, we have mentored thousands of young men, instilling in them the values of the Great Commission, brotherhood, and loyalty to Christ. Pentecost Baptist Association continues this tradition with renewed vigor and spiritual dedication.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-2xl h-[400px] bg-primary/10">
          <Image
            src="/images/image4.jpg"
            alt="Royal Ambassadors activities and heritage"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 550px"
          />
        </div>
      </motion.section>

      <div className="w-full flex items-center justify-center my-16" aria-hidden>
        <div className="flex-grow border-t border-gold/30" />
        <span className="px-4 text-gold">
          <FiShield size={22} />
        </span>
        <div className="flex-grow border-t border-gold/30" />
      </div>

      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        aria-labelledby="vision-mission-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 id="vision-mission-heading" className="sr-only">
          Vision and Mission
        </h2>

        <div className="bg-primary/5 border-l-4 border-primary p-10 rounded-r-xl">
          <div className="text-primary mb-4">
            <FiEye size={28} aria-hidden />
          </div>
          <h3 className="font-heading text-2xl mb-4 text-primary">Our Vision</h3>
          <p className="text-text-dark text-lg italic">
            &quot;To become a leading Christian youth organization that raises godly men, well-equipped for spiritual leadership and societal transformation.&quot;
          </p>
        </div>

        <div className="bg-gold/10 border-l-4 border-gold p-10 rounded-r-xl">
          <div className="text-gold mb-4">
            <FiCheckSquare size={28} aria-hidden />
          </div>
          <h3 className="font-heading text-2xl mb-4 text-gold">Our Mission</h3>
          <p className="text-text-dark text-lg">
            &quot;To reach, teach, and win young men for Christ, fostering their growth through spiritual disciplines, mission activities, and character development.&quot;
          </p>
        </div>
      </motion.section>

      <motion.section
        className="mb-24"
        aria-labelledby="overview-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h2 id="overview-heading" className="font-heading text-3xl mb-4 text-text-dark">
            Association Overview
          </h2>
          <p className="max-w-2xl mx-auto text-text-muted">
            The Pentecost Baptist Association RA operates under a structured hierarchy designed to foster accountability and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white p-8 rounded-xl shadow-sm border border-primary/10 text-center"
            >
              <span className="text-4xl font-bold text-primary block mb-2 font-heading">
                {value}
              </span>
              <span className="text-sm font-semibold text-text-muted uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="bg-slate-50 rounded-2xl p-12 mb-16"
        aria-labelledby="patrons-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center mb-12">
          <h2 id="patrons-heading" className="font-heading text-4xl mb-4 text-text-dark">
            Our Patrons
          </h2>
          <div className="w-24 h-0.5 bg-gold" aria-hidden />
          <p className="mt-4 text-text-muted text-center max-w-xl italic">
            Dignified elders and leaders providing spiritual guidance and support to the association.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {aboutPatrons.map((patron) => {
            const imageSrc = patron.image ?? "/images/ra-logo.png";
            return (
              <div key={patron.id} className="flex flex-col items-center">
                <div className="size-40 rounded-full border-4 border-gold p-1 mb-6 bg-white overflow-hidden">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-primary/10">
                    <Image
                      alt={`${patron.name} — patron`}
                      src={imageSrc}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>
                </div>
                <h4 className="font-heading text-xl text-text-dark">{patron.name}</h4>
                <p className="text-gold font-medium mb-3">{patron.role}</p>
                <p className="text-text-muted text-sm text-center">
                  {patron.description ?? patron.quote}
                </p>
              </div>
            );
          })}
        </div>
      </motion.section>

      <div className="pt-2">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm hover:text-gold transition-colors min-h-[44px] touch-manipulation"
        >
          Join the Mission
          <FiArrowRight size={18} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
