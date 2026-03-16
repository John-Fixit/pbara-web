import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { ExecutiveCard } from "@/components/ui/ExecutiveCard";
import { PastOfficersTable } from "@/components/ui/PastOfficersTable";
import { PatronCard } from "@/components/ui/PatronCard";
import { executives } from "@/data/executives";
import { pastOfficers } from "@/data/pastOfficers";
import { patrons } from "@/data/patrons";

export const metadata: Metadata = {
  title: "Executive Leadership and Patrons",
  description:
    "Meet the dedicated officers and patrons guiding the Royal Ambassadors of Pentecost Baptist Association. Our leadership is committed to fostering spiritual growth and discipline.",
  openGraph: {
    title: "Executive Leadership | PBA Royal Ambassadors",
    description: "Current executive officers, past officers, and our patrons.",
    url: "https://pbara.org.ng/executives",
  },
  keywords: ["Leadership", "Executive", "Patrons", "Officers", "PBA RA"],
};

export default function ExecutivesPage() {
  return (
    <>
      {/* Page Hero — two columns */}
      <section className="py-16 bg-light-bg" aria-labelledby="exec-hero-heading">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 relative aspect-video lg:aspect-[16/10] max-w-2xl w-full bg-navy/10 rounded-xl overflow-hidden">
            <Image
              src="/images/ra-logo.png"
              alt="Royal Ambassadors leadership — official logo representing the association"
              fill
              className="object-contain p-12"
              sizes="(max-width: 1024px) 100vw, 672px"
            />
          </div>
          <div className="flex-1">
            <h1 id="exec-hero-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Executive Leadership and Patrons
            </h1>
            <p className="text-text-muted mb-6">
              Meet the dedicated officers and patrons guiding the Royal Ambassadors of Pentecost Baptist Association. Our leadership is committed to fostering spiritual growth and discipline.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button as={Link} href="#current-officers" className="bg-navy text-white">
                Meet the Team
              </Button>
              <Button as={Link} href="/about" variant="bordered" className="border-navy text-navy">
                Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Executive Officers */}
      <section id="current-officers" className="py-16 bg-white" aria-labelledby="officers-heading">
        <div className="max-w-7xl mx-auto px-4">
          <h2 id="officers-heading" className="font-heading text-2xl font-bold text-text-dark flex items-center gap-2">
            <span aria-hidden>🛡</span>
            Current Executive Officers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {executives.map((exec) => (
              <ExecutiveCard key={exec.id} executive={exec} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Officers Table */}
      <section className="py-16 bg-light-bg" aria-labelledby="past-heading">
        <div className="max-w-7xl mx-auto px-4">
          <h2 id="past-heading" className="font-heading text-2xl font-bold text-text-dark flex items-center gap-2 mb-8">
            <span aria-hidden>🕐</span>
            Past Officers
          </h2>
          <PastOfficersTable officers={pastOfficers} />
        </div>
      </section>

      {/* Our Patrons — two-column cards */}
      <section className="py-16 bg-white" aria-labelledby="patrons-heading">
        <div className="max-w-7xl mx-auto px-4">
          <h2 id="patrons-heading" className="font-heading text-2xl font-bold text-text-dark flex items-center gap-2 mb-8">
            <span aria-hidden>🛡</span>
            Our Patrons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patrons.map((patron) => (
              <PatronCard key={patron.id} patron={patron} horizontal />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
