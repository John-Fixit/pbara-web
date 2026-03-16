import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { Chip } from "@heroui/react";
import type { EventItem } from "@/types";

interface EventCardProps {
  event: EventItem;
  horizontal?: boolean;
  past?: boolean;
}

function formatDate(dateStr: string): { day: string; month: string; year: string } {
  const d = new Date(dateStr);
  const months = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
  return {
    day: d.getDate().toString(),
    month: months[d.getMonth()] ?? "",
    year: d.getFullYear().toString(),
  };
}

/**
 * Horizontal layout: date block, details (category, location, title, description, Register Now + share), image
 * Or vertical for past events: image, date overlay, title, description, View link
 */
export function EventCard({ event, horizontal = true, past = false }: EventCardProps) {
  const imageSrc = event.image ?? "/images/ra-logo.png";
  const imageAlt = event.image ? `${event.title} — Royal Ambassadors` : "Royal Ambassadors logo as event placeholder";

  if (past) {
    const dateLabel = event.date.length <= 7 ? event.date : formatDate(event.date).month + " " + formatDate(event.date).year;
    return (
      <article className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
        <div className="relative aspect-video w-full bg-navy/10">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="360px" />
          <div className="absolute top-2 right-2">
            <Chip size="sm" className="bg-white/90 text-text-dark text-xs">{dateLabel}</Chip>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-heading font-bold text-text-dark line-clamp-2">{event.title}</h3>
          <p className="text-text-muted text-sm line-clamp-2 mt-1 flex-1">{event.description}</p>
          <Link href={`/events#${event.id}`} className="text-navy font-semibold text-sm hover:text-gold mt-3 inline-flex items-center gap-1">
            View Gallery
            <span aria-hidden>→</span>
          </Link>
        </div>
      </article>
    );
  }

  if (!horizontal) {
    return (
      <article className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
        <div className="relative aspect-video w-full bg-navy/10">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="360px" />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-heading font-bold text-text-dark line-clamp-2">{event.title}</h3>
          <p className="text-text-muted text-sm line-clamp-2 mt-1">{event.description}</p>
          <Button as={Link} href={`/events#${event.id}`} className="mt-4 bg-gold text-navy font-semibold w-fit">
            Register Now →
          </Button>
        </div>
      </article>
    );
  }

  const { day, month, year } = formatDate(event.date);

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-24 shrink-0 bg-light-bg flex flex-col items-center justify-center py-4 px-3 border-b md:border-b-0 md:border-r border-gray-200">
        <span className="text-3xl font-heading font-bold text-text-muted">{day}</span>
        <span className="text-xs uppercase text-text-muted">{month}</span>
        <span className="text-xs text-text-muted">{year}</span>
      </div>
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Chip size="sm" className="bg-navy/10 text-navy uppercase text-xs">{event.category}</Chip>
          <span className="text-sm text-text-muted flex items-center gap-1">
            <span aria-hidden>📍</span> {event.venue}
          </span>
        </div>
        <h3 className="font-heading font-bold text-text-dark text-lg">{event.title}</h3>
        <p className="text-text-muted text-sm mt-1 line-clamp-2 flex-1">{event.description}</p>
        <div className="flex items-center gap-3 mt-4">
          <Button as={Link} href={`/events#${event.id}`} className="bg-gold text-navy font-semibold">
            Register Now →
          </Button>
          <button type="button" className="p-2 text-text-muted hover:text-gold rounded-lg" aria-label="Share event">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
          </button>
        </div>
      </div>
      <div className="hidden md:block md:w-56 shrink-0 relative aspect-video md:aspect-auto md:h-full min-h-[160px] bg-navy/10">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="224px" />
      </div>
    </article>
  );
}
