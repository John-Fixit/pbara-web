import Link from "next/link";
import Image from "next/image";
import { Chip } from "@heroui/react";
import { AvatarPlaceholder } from "./AvatarPlaceholder";
import type { Chapter } from "@/types";

interface ChapterCardProps {
  chapter: Chapter;
}

/**
 * Church image (ra-logo placeholder), ACTIVE badge top-right, church name bold, chapter name in gold, commander row with avatar + label + name
 */
export function ChapterCard({ chapter }: ChapterCardProps) {
  const imageSrc = chapter.image ?? "/images/ra-logo.png";
  const imageAlt = chapter.image
    ? `${chapter.churchName} — ${chapter.chapterName}`
    : "Royal Ambassadors logo used as placeholder for chapter church image";

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative aspect-video w-full bg-navy/10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 360px"
        />
        {chapter.status === "active" && (
          <div className="absolute top-3 right-3">
            <Chip size="sm" className="bg-green-600 text-white uppercase text-xs">
              Active
            </Chip>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-heading font-bold text-text-dark">{chapter.churchName}</h3>
        <p className="text-gold font-semibold text-sm mt-1">{chapter.chapterName}</p>
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
          <AvatarPlaceholder name={chapter.commander} size="sm" />
          <div>
            <span className="text-xs uppercase text-text-muted block">Commander</span>
            <span className="font-medium text-text-dark text-sm">{chapter.commander}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
