import { AvatarPlaceholder } from "./AvatarPlaceholder";
import type { Executive } from "@/types";

interface ExecutiveCardProps {
  executive: Executive;
}

/**
 * Portrait placeholder (initials avatar), name bold, position in gold small caps, church muted
 */
export function ExecutiveCard({ executive }: ExecutiveCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden text-center">
      <div className="aspect-[3/4] bg-light-bg flex items-center justify-center p-6">
        <AvatarPlaceholder name={executive.name} size="lg" />
      </div>
      <div className="p-4">
        <h3 className="font-heading font-bold text-text-dark">{executive.name}</h3>
        <p className="text-gold text-sm uppercase tracking-wider mt-1">{executive.position}</p>
        <p className="text-text-muted text-sm mt-1">{executive.church}</p>
      </div>
    </article>
  );
}
