"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { FiFilter, FiBell, FiCalendar, FiBookOpen, FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { MdMilitaryTech } from "react-icons/md";
import type { NewsItem } from "@/types";

const GRID_PER_PAGE = 4;

const FEATURED_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCNZrU5UrSCAH5pN8iAM5DEyl8YYc7pMegjDWxFpD5dgn6gKacJkfOq5fvGuR0knyNmq-Eipf8dbI7rh2fJ2FRCUDwDbF5zPmKh0UbkJv5bkUchmYzRWJADGwERUzZdlxAgFd8YLqP87HWVZBZbOggGh1byJ7TI8vIfWcC4VDUPuzOH7BULikKn7-7-EhxC6pyjAghaf0326Jp0z9tiRBW3t76JYV176HRXxK-rqmyZ9aTJtNRx0qlrpBVviaGW6nsUWLEbqVFQJ_Y";

const GRID_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD_T61JT85oukUJL9fhBZav8E-4bmRf0NiDcFKnFqBmqqQLGstUsCecqjl0IpFmIkbP4E-PxnYfSNkq_jRrQ73Khgzi3WGledmeKnuw-uMnYZiDbVl9m8m2ZFEctRLMnQfsSCVoI8-Sll9JwUz7b1LkuhKWQFIS7LN57vw2EjVHtdNsaNdOP-ekPk6lcVyHkFfL-AD5z6q79f8FG-hyb9f14Gu57Ei9wCRe7ee-YH2Y1Uh_Qiyz135tlfvPiZ0NhqzKdgOFa6KsKiI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBTJLhHYSAVMtul9DH56SfFCyzIvSYS3d2pgLfGzf8BPG8q89O_SeGuTO8iXTzT-cF1JN8m2cLierwOKm4PkOE4_ORYn91ak-DXlUuK_tWTloCUKaecFigvn6hRCiwwsydMhLOBIhGARA-A0-R3h-c4MaMM68jNafjNbdLJn-PS4IUZ2Ya1IAPmppbe63H3PwJD3UuFQSuzjphRVawzwWw-OOkXTValrMxPPpHJil-D1OJau7FUszdUPPBhkjK-WkhKil3kdy3hr1c",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD6okiSAO_PddgJy72hSaYvzBFlYZopqWFSpZJ3TXgOvsHUHCsAp5PJkN1KhmtSpFEK4yhSIqgWlmRNXPEo3wYIJEkz_wCiIcoZMFt6yu4N5KP9qDj_60OtRI2MHmEzokwovpRDPwkDDwJvfxbj0NCrjyHZA3-Tn5kxz5ZFTZMcAaQ0_kmv6H_puqmIf91GxyW7OWbn1yHJLKEn_pu6Om2-nXyxNGzjv7MHFLLHJHhMjFrECt3VhXse8mta_Y87gGMagOtwCJQeH2U",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB6QLSEQQGP0FlQmygqAlb-uDviaU_bynckWsU2W0hkKSgRkR1_2uW9vypGhSkz88Lye5bENRjcfk2wEwaxxB9Fi7tl5B9Hm5peXfhFfU1QGvqgUSN8ProQm4aGV7739OX4cVIGqtSTjOwbR06Rhvc4u4PF29z93QtMxbamYvK0WKXFsNBuCWACO4FPVzjpIDJiMmA47BTfSBiB96ljJrN2DPSEP4bTdfnlZleCRLF4f1ZTT6iNTtstZNokYD-AKoBQqX9dDtuKCfU",
];

const CATEGORIES = [
  { key: "all", label: "All News", icon: HiOutlineNewspaper },
  { key: "Announcements", label: "Announcements", icon: FiBell },
  { key: "Press Release", label: "Press Release", icon: HiOutlineMegaphone },
  { key: "Programs", label: "Programs", icon: FiCalendar },
  { key: "Drill & Discipline", label: "Drill & Discipline", icon: MdMilitaryTech },
] as const;

interface NewsPageContentProps {
  news: NewsItem[];
}

export function NewsPageContent({ news }: NewsPageContentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") ?? "all";
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    categoryParam === "all"
      ? news
      : news.filter((item) => item.category === categoryParam);

  const totalPages =
    filtered.length <= 5
      ? 1
      : 1 + Math.ceil((filtered.length - 5) / GRID_PER_PAGE);
  const safePage = Math.min(Math.max(1, currentPage), totalPages);

  const featured = safePage === 1 ? filtered[0] : null;
  const gridItems = useMemo(() => {
    const start = safePage === 1 ? 1 : 5 + (safePage - 2) * GRID_PER_PAGE;
    return filtered.slice(start, start + GRID_PER_PAGE);
  }, [filtered, safePage]);

  const setCategory = useCallback(
    (key: string) => {
      setCurrentPage(1);
      const params = new URLSearchParams(searchParams.toString());
      if (key === "all") params.delete("category");
      else params.set("category", key);
      router.push(`/news${params.toString() ? `?${params}` : ""}`);
    },
    [router, searchParams],
  );

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    const content = document.getElementById("news-list");
    content?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main className="mx-auto flex w-full max-w-7xl grow flex-col md:flex-row gap-8 px-6 md:px-20 py-10 relative">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 flex flex-col gap-8 sticky top-20">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FiFilter size={20} aria-hidden />
            </div>
            <div>
              <h3 className="text-base font-semibold">Categories</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Filter news by topic
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            {CATEGORIES.map((c) => {
              const isActive =
                (categoryParam === "all" && c.key === "all") ||
                (c.key !== "all" && categoryParam === c.key);
              const Icon = c.icon;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setCategory(c.key)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded text-left text-sm transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 ${
                    isActive
                      ? "text-primary font-semibold bg-slate-200 dark:bg-slate-800"
                      : "hover:bg-primary/10 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  <Icon size={20} className="shrink-0" aria-hidden />
                  <span>{c.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="rounded-xl bg-slate-900 p-6 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h4 className="font-bold mb-2">Quarterly Bulletin</h4>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Download the latest issue of our national newsletter for Royal
              Ambassadors.
            </p>
            <a
              href="/downloads/quarterly-bulletin.pdf"
              download
              className="block w-full bg-primary py-2 text-xs font-bold rounded hover:bg-primary/80 transition-colors text-center"
            >
              Download PDF
            </a>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10" aria-hidden>
            <FiBookOpen size={96} />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="flex-1" id="news-list">
        <div className="mb-10">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">
            Latest News and Press
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Official announcements, program updates, and leadership insights
            from the Royal Ambassadors paramilitary Christian youth
            organization.
          </p>
        </div>

        {/* Featured Article */}
        {featured && (
          <article className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all mb-8">
            <div
              className="aspect-[21/9] w-full bg-slate-100 dark:bg-slate-800 bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url('${FEATURED_IMAGE}')` }}
              role="img"
              aria-label="Young men in military uniform standing in formation during training"
            />
            <div className="flex flex-col p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-primary tracking-widest uppercase">
                  {featured.category}
                </span>
                <span className="text-slate-300" aria-hidden>
                  |
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {featured.date}
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed max-w-3xl">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700"
                    aria-label={
                      featured.author
                        ? `Headshot of ${featured.author}`
                        : undefined
                    }
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {featured.author ?? "RA Editorial"}
                  </span>
                </div>
                <Link
                  href={`/news/${featured.slug ?? featured.id}`}
                  className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group/btn"
                >
                  Read Full Report
                  <FiArrowRight
                    size={18}
                    className="transition-transform group-hover/btn:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </div>
            </div>
          </article>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridItems.map((item, idx) => {
            const imageUrl = GRID_IMAGES[idx] ?? "";
            const ctaLabels = ["Details", "Read", "Full Story", "Update"];
            const cta = ctaLabels[idx] ?? "Read";
            return (
              <article
                key={item.id}
                className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden group"
              >
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 bg-cover bg-center">
                  {imageUrl && (
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${imageUrl}')` }}
                      role="img"
                      aria-label="Article image"
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-2">
                    <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 mb-6">
                    {item.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-xs text-slate-400 italic">
                      {item.date} • {item.readTime ?? 3} min read
                    </span>
                    <Link
                      href={`/news/${item.slug ?? item.id}`}
                      className="text-primary text-sm font-bold uppercase"
                    >
                      {cta}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination */}
        <div
          className="mt-12 flex items-center justify-center gap-2"
          aria-label="News pagination"
        >
          <button
            type="button"
            onClick={() => handlePageChange(safePage - 1)}
            disabled={safePage <= 1}
            className="flex h-10 w-10 items-center justify-center rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous page"
          >
            <FiChevronLeft size={18} aria-hidden />
          </button>
          {totalPages <= 5 ? (
            Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const isActive = page === safePage;
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePageChange(page)}
                  className={`h-10 w-10 rounded font-bold text-sm transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50"
                  }`}
                  aria-label={`Page ${page}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {page}
                </button>
              );
            })
          ) : (
            <>
              <button
                type="button"
                onClick={() => handlePageChange(1)}
                className={`h-10 w-10 rounded font-bold text-sm transition-colors ${
                  safePage === 1
                    ? "bg-primary text-white"
                    : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50"
                }`}
                aria-current={safePage === 1 ? "page" : undefined}
              >
                1
              </button>
              {[2, 3].map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePageChange(page)}
                  className={`h-10 w-10 rounded font-bold text-sm transition-colors ${
                    safePage === page
                      ? "bg-primary text-white"
                      : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50"
                  }`}
                  aria-current={safePage === page ? "page" : undefined}
                >
                  {page}
                </button>
              ))}
              <span className="px-2 text-slate-400" aria-hidden>
                ...
              </span>
              <button
                type="button"
                onClick={() => handlePageChange(totalPages)}
                className={`h-10 w-10 rounded font-bold text-sm transition-colors ${
                  safePage === totalPages
                    ? "bg-primary text-white"
                    : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50"
                }`}
                aria-current={safePage === totalPages ? "page" : undefined}
              >
                {totalPages}
              </button>
            </>
          )}
          <button
            type="button"
            onClick={() => handlePageChange(safePage + 1)}
            disabled={safePage >= totalPages}
            className="flex h-10 w-10 items-center justify-center rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next page"
          >
            <FiChevronRight size={18} aria-hidden />
          </button>
        </div>
      </section>
    </main>
  );
}
