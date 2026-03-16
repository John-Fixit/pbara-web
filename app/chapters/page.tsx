"use client";

import { useState } from "react";
import Link from "next/link";
import { Tabs, Tab } from "@heroui/react";
import { Button } from "@heroui/react";
import { ChapterCard } from "@/components/ui/ChapterCard";
import { chapters } from "@/data/chapters";
import type { Chapter } from "@/types";

type UnitFilter = "all" | "primary" | "junior" | "senior";

function filterChapters(chapters: Chapter[], filter: UnitFilter): Chapter[] {
  if (filter === "all") return chapters;
  return chapters.filter((c) => c.unit === filter);
}

export default function ChaptersPage() {
  const [filter, setFilter] = useState<UnitFilter>("all");
  const filtered = filterChapters(chapters, filter);

  return (
    <>
      {/* Top section */}
      <section className="py-16 bg-light-bg" aria-labelledby="chapters-heading">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gold text-sm uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="w-8 h-0.5 bg-gold" aria-hidden />
            Association Network
          </p>
          <h1 id="chapters-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-dark">
            Our Chapters and Units
          </h1>
          <p className="text-text-muted mt-2 max-w-2xl">
            Discover the dedicated Royal Ambassador local units fostering leadership and spiritual growth across our Baptist Association.
          </p>

          <Tabs
            selectedKey={filter}
            onSelectionChange={(k) => setFilter(k as UnitFilter)}
            className="mt-8"
            aria-label="Filter chapters by unit type"
          >
            <Tab key="all" title="All Chapters" />
            <Tab key="primary" title="Primary Units" />
            <Tab key="junior" title="Junior Units" />
            <Tab key="senior" title="Senior Units" />
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filtered.map((chapter) => (
              <ChapterCard key={chapter.id} chapter={chapter} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-navy text-white" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-4xl text-gold mb-4" aria-hidden>🏛+</span>
          <h2 id="cta-heading" className="font-heading text-2xl md:text-3xl font-bold">
            Don&apos;t see your chapter?
          </h2>
          <p className="text-white/90 mt-2">
            If your local church has an RA unit but it is not listed here, please contact the Association Commander to register your unit today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button as={Link} href="/contact" className="bg-white text-navy font-semibold">
              Register Chapter
            </Button>
            <Button as={Link} href="/contact" variant="bordered" className="border-white text-white">
              Contact Admin
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
