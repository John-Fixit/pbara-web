import Link from "next/link";
import Image from "next/image";
import { FiClock } from "react-icons/fi";
import { Chip } from "@heroui/react";
import type { NewsItem } from "@/types";

interface NewsCardProps {
  item: NewsItem;
  featured?: boolean;
}

/**
 * News card: image (or logo placeholder), category chip, title, excerpt, date, read time, action link
 */
export function NewsCard({ item, featured = false }: NewsCardProps) {
  const href = `/news/${item.slug ?? item.id}`;
  const imageSrc = item.image ?? "/images/ra-logo.png";
  const imageAlt = item.image
    ? `${item.title} — Royal Ambassadors`
    : "Royal Ambassadors logo used as placeholder for article image";

  if (featured) {
    return (
      <article className="bg-surface rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden">
        <div className="relative aspect-video w-full bg-primary/10">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Chip size="sm" className="bg-primary text-white uppercase text-xs font-medium">
              {item.category}
            </Chip>
            <span className="text-sm text-text-muted">{item.date}</span>
          </div>
          <h2 className="font-heading text-xl md:text-2xl font-bold text-text-dark mb-2 line-clamp-2">
            <Link href={href} className="hover:text-gold transition-colors">
              {item.title}
            </Link>
          </h2>
          <p className="text-text-muted text-sm mb-4 line-clamp-2">{item.excerpt}</p>
          {item.author && (
            <p className="text-sm text-text-muted mb-3">{item.author}</p>
          )}
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:text-gold transition-colors"
          >
            {item.category === "Featured" ? "DETAILS & REGISTRATION" : "READ FULL REPORT"}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-surface rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden flex flex-col">
      <Link href={href} className="relative aspect-[4/3] w-full bg-primary/10 block">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 360px"
        />
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Chip size="sm" className="bg-gold/15 text-primary border-gold/30 uppercase text-xs font-medium">
            {item.category}
          </Chip>
        </div>
        <h3 className="font-heading font-bold text-text-dark mb-1 line-clamp-2">
          <Link href={href} className="hover:text-gold transition-colors">
            {item.title}
          </Link>
        </h3>
        <div className="flex items-center gap-2 text-xs text-text-muted mt-auto pt-2">
          <span>{item.date}</span>
          {item.readTime != null && (
            <span className="flex items-center gap-1">
              <FiClock size={14} aria-hidden />
              {item.readTime} min read
            </span>
          )}
        </div>
        <p className="text-text-muted text-sm line-clamp-2 flex-1 mb-3">{item.excerpt}</p>
        <Link
          href={href}
          className="text-primary font-semibold text-sm hover:text-gold transition-colors mt-auto"
        >
          {["Featured", "Report", "Upcoming"].includes(item.category) ? "DETAILS & REGISTRATION" : "READ MORE"}
          <span aria-hidden> →</span>
        </Link>
      </div>
    </article>
  );
}
