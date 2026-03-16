import { Button } from "@heroui/react";
import type { DownloadItem } from "@/types";

const iconMap: Record<string, string> = {
  document: "📄",
  shield: "🛡",
  calendar: "📅",
  badge: "🎖",
};

interface DownloadCardProps {
  item: DownloadItem;
}

/**
 * Icon, title, description, download button
 */
export function DownloadCard({ item }: DownloadCardProps) {
  const icon = iconMap[item.icon] ?? "📄";
  return (
    <article className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 border border-gray-100 hover:border-gold/30 transition-colors">
      <span className="text-2xl shrink-0" aria-hidden>
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="font-heading font-bold text-text-dark">{item.title}</h3>
        <p className="text-text-muted text-sm mt-1">{item.description}</p>
      </div>
      <Button
        as="a"
        href={item.fileUrl}
        download
        className="shrink-0 bg-navy text-white"
        aria-label={`Download ${item.title}`}
      >
        <span className="sr-only">Download</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </Button>
    </article>
  );
}
