import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@heroui/react";
import { PatronCard } from "@/components/ui/PatronCard";
import { patrons } from "@/data/patrons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the heritage, vision, and mission of the Royal Ambassadors of the Pentecost Baptist Association — building godly men through discipline and faith.",
  openGraph: {
    title: "About the Association | PBA Royal Ambassadors",
    description: "Our heritage, vision, and mission. Meet our patrons and discover our structure.",
    url: "https://pbara.org.ng/about",
  },
  keywords: ["About RA", "Heritage", "Vision", "Mission", "Patrons", "Pentecost Baptist"],
};

const stats = [
  { value: "12+", label: "Active Chapters" },
  { value: "500+", label: "Total Ambassadors" },
  { value: "25+", label: "Annual Programs" },
];

export default function AboutPage() {
  const aboutPatrons = patrons.slice(0, 3);
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-navy text-white py-20 px-4">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/ra-logo.png"
            alt=""
            fill
            className="object-cover opacity-20"
            aria-hidden
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">About the Association</h1>
          <nav className="mt-4 text-sm text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">About Us</span>
          </nav>
        </div>
      </section>

      {/* Our Heritage */}
      <section className="py-16 bg-light-bg" aria-labelledby="heritage-heading">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="w-8 h-1 bg-gold rounded mb-4" aria-hidden />
            <h2 id="heritage-heading" className="font-heading text-3xl font-bold text-text-dark mb-6">
              Our Heritage
            </h2>
            <p className="text-text-muted mb-4">
              The Royal Ambassadors of Nigeria has a rich history of developing Christian character in young men. Our mission is to raise God-fearing, disciplined, and service-oriented citizens through a unique paramilitary structure rooted in Scripture and Baptist tradition.
            </p>
            <p className="text-text-muted">
              We have mentored thousands of young men in faith, brotherhood, and loyalty to Christ. Our association operates under a structured hierarchy designed to foster accountability and excellence across chapters and units.
            </p>
          </div>
          <div className="flex-1 max-w-md w-full">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-white shadow-lg">
              <Image
                src="/images/ra-logo.png"
                alt="Royal Ambassadors official crest and uniform emblem — navy shield with gold crown, wheel, and torch"
                fill
                className="object-contain p-8"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white" aria-labelledby="vision-mission-heading">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 border-l-4 border-navy bg-light-bg/50">
            <span className="text-2xl text-navy" aria-hidden>👁</span>
            <h3 className="font-heading text-xl font-bold text-text-dark mt-4">Our Vision</h3>
            <p className="text-text-muted italic mt-2">
              To become a leading Christian youth organization that raises godly men, well-equipped for spiritual leadership and societal transformation.
            </p>
          </Card>
          <Card className="p-8 border-l-4 border-gold bg-amber-50/30">
            <span className="text-2xl text-gold" aria-hidden>✓</span>
            <h3 className="font-heading text-xl font-bold text-text-dark mt-4">Our Mission</h3>
            <p className="text-text-muted italic mt-2">
              To reach, teach, and win young men for Christ, fostering their growth through spiritual disciplines, mission activities, and character development.
            </p>
          </Card>
        </div>
      </section>

      {/* Association Overview */}
      <section className="py-16 bg-light-bg" aria-labelledby="overview-heading">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 id="overview-heading" className="font-heading text-3xl font-bold text-text-dark">
            Association Overview
          </h2>
          <p className="text-text-muted mt-2 max-w-2xl mx-auto">
            The Pentecost Baptist Association RA operates under a structured hierarchy designed to foster accountability and excellence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-white rounded-xl shadow-md p-8">
                <p className="font-heading text-4xl font-bold text-gold">{value}</p>
                <p className="text-text-muted text-sm uppercase tracking-wider mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Patrons */}
      <section className="py-16 bg-white" aria-labelledby="patrons-heading">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 id="patrons-heading" className="font-heading text-3xl font-bold text-text-dark">
            Our Patrons
          </h2>
          <p className="text-text-muted italic mt-2">Dignified elders and leaders providing spiritual guidance and support to the association.</p>
          <div className="w-8 h-1 bg-gold rounded mx-auto mt-4" aria-hidden />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {aboutPatrons.map((patron) => (
              <PatronCard key={patron.id} patron={patron} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
