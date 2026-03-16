import type { Metadata } from "next";
import Link from "next/link";
import { NewsCard } from "@/components/ui/NewsCard";
import { newsItems } from "@/data/news";
import { Card } from "@heroui/react";
import { Button } from "@heroui/react";

export const metadata: Metadata = {
  title: "News and Press",
  description:
    "Official announcements, program updates, and leadership insights from the Royal Ambassadors paramilitary Christian youth organization.",
  openGraph: {
    title: "News & Press | PBA Royal Ambassadors",
    url: "https://pbara.org.ng/news",
  },
  keywords: ["News", "Press", "Announcements", "RA updates", "Bulletin"],
};

const categories = [
  { key: "all", label: "All News" },
  { key: "Announcements", label: "Announcements" },
  { key: "Press Release", label: "Press Release" },
  { key: "Programs", label: "Programs" },
  { key: "Drill & Discipline", label: "Drill & Discipline" },
];

export default function NewsPage() {
  const featured = newsItems[0];
  const rest = newsItems.slice(1, 5);

  return (
    <div className="min-h-screen bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
        {/* Left sidebar — fixed on large screens */}
        <aside className="lg:w-72 shrink-0 space-y-8">
          <div>
            <h2 className="font-heading font-bold text-text-dark flex items-center gap-2">
              <span aria-hidden>☰</span> Categories
            </h2>
            <p className="text-text-muted text-sm mt-1">Filter news by topic</p>
            <ul className="mt-4 space-y-1">
              {categories.map((c) => (
                <li key={c.key}>
                  <Link
                    href={c.key === "all" ? "/news" : `/news?category=${c.key}`}
                    className="block py-2 px-3 rounded-lg text-sm text-text-dark hover:bg-white hover:shadow transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Card className="p-6 bg-navy text-white">
            <h3 className="font-heading font-bold text-lg">Quarterly Bulletin</h3>
            <p className="text-white/90 text-sm mt-2">
              Download the latest issue of our national newsletter for Royal Ambassadors.
            </p>
            <Button as="a" href="/downloads/quarterly-bulletin.pdf" download className="mt-4 bg-gold text-navy font-semibold w-full">
              Download PDF
            </Button>
          </Card>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <h1 className="font-heading text-3xl font-bold text-text-dark">
            Latest News and Press
          </h1>
          <p className="text-text-muted mt-1">
            Official announcements, program updates, and leadership insights from the Royal Ambassadors paramilitary Christian youth organization.
          </p>

          {featured && (
            <div className="mt-10">
              <NewsCard item={featured} featured />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {rest.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>

          {/* Pagination */}
          <nav className="mt-12 flex items-center justify-center gap-2" aria-label="News pagination">
            <button type="button" className="p-2 rounded border border-gray-200 text-text-muted hover:text-gold" aria-label="Previous page">
              ←
            </button>
            <span className="px-3 py-1 rounded bg-gold text-navy font-semibold">1</span>
            <Link href="/news?page=2" className="px-3 py-1 rounded border border-gray-200 hover:text-gold">2</Link>
            <Link href="/news?page=3" className="px-3 py-1 rounded border border-gray-200 hover:text-gold">3</Link>
            <span className="px-2">…</span>
            <Link href="/news?page=12" className="px-3 py-1 rounded border border-gray-200 hover:text-gold">12</Link>
            <Link href="/news?page=2" className="p-2 rounded border border-gray-200 text-text-muted hover:text-gold" aria-label="Next page">
              →
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
