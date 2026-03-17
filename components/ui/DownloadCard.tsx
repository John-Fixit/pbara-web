import type { IconType } from "react-icons";
import { FiFileText, FiShield, FiCalendar, FiAward, FiDownload } from "react-icons/fi";
import { Button } from "@heroui/react";
import type { DownloadItem } from "@/types";

const iconMap: Record<string, IconType> = {
  document: FiFileText,
  shield: FiShield,
  calendar: FiCalendar,
  badge: FiAward,
};

interface DownloadCardProps {
  item: DownloadItem;
}

/**
 * Icon, title, description, download button
 */
export function DownloadCard({ item }: DownloadCardProps) {
  const IconComponent = iconMap[item.icon] ?? FiFileText;
  return (
    <article className="group bg-white rounded-2xl shadow-sm p-6 flex items-start gap-4 border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:bg-primary/5 transition-all duration-300 ease-out overflow-hidden">
      <span className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-gold/20 transition-colors group-hover:bg-gold/20" aria-hidden>
        <IconComponent size={22} className="text-primary shrink-0" />
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="font-heading font-bold text-text-dark">{item.title}</h3>
        <p className="text-text-muted text-sm mt-1">{item.description}</p>
      </div>
      <Button
        as="a"
        href={item.fileUrl}
        download
        className="shrink-0 bg-primary text-white rounded-lg min-h-[44px]"
        aria-label={`Download ${item.title}`}
      >
        <FiDownload size={22} />
      </Button>
    </article>
  );
}
