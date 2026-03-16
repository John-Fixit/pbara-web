import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { DirectorDesk } from "@/components/sections/DirectorDesk";
import { ExecutiveCard } from "@/components/ui/ExecutiveCard";
import { NewsCard } from "@/components/ui/NewsCard";
import { executives } from "@/data/executives";
import { newsItems } from "@/data/news";

export default function HomePage() {
  const bulletins = [newsItems.find((n) => n.category === "Featured") ?? newsItems[0], newsItems.find((n) => n.category === "Report") ?? newsItems[1], newsItems.find((n) => n.category === "Upcoming") ?? newsItems[2]];

  return (
    <>
      <HeroSection />
      <StatsBar />
      <DirectorDesk />

      {/* Executive Council */}
      <section className="py-16 bg-light-bg" aria-labelledby="executive-heading">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 id="executive-heading" className="font-heading text-3xl md:text-4xl font-bold text-text-dark">
            Executive Council
          </h2>
          <div className="w-8 h-1 bg-gold rounded mx-auto mt-3" aria-hidden />
          <p className="text-text-muted mt-2 max-w-2xl mx-auto">
            Leadership dedicated to the spiritual and social development of youth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {executives.map((exec) => (
              <ExecutiveCard key={exec.id} executive={exec} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Bulletins */}
      <section className="py-16 bg-light-bg" id="resources" aria-labelledby="bulletins-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <h2 id="bulletins-heading" className="font-heading text-2xl md:text-3xl font-bold text-text-dark uppercase">
                Latest Bulletins
              </h2>
              <p className="text-text-muted text-sm mt-1">Updates and announcements from across the association.</p>
            </div>
            <Link href="/news" className="text-navy font-semibold hover:text-gold transition-colors">
              ARCHIVE
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bulletins.map((item) => item && <NewsCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
