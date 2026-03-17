import { AvatarPlaceholder } from "./AvatarPlaceholder";
import type { Patron } from "@/types";

interface PatronCardProps {
  patron: Patron;
  /** If true, layout is square photo left, name + role + quote right (executives page). Else centered (about page). */
  horizontal?: boolean;
}

/**
 * Photo placeholder (initials avatar), name, role in gold, quote/description
 */
export function PatronCard({ patron, horizontal = false }: PatronCardProps) {
  if (horizontal) {
    return (
      <article className="bg-surface rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden flex flex-col sm:flex-row border-l-4 border-l-gold">
        <div className="sm:w-32 shrink-0 flex items-center justify-center p-6 bg-background rounded-l-xl overflow-hidden">
          <AvatarPlaceholder name={patron.name} size="lg" />
        </div>
        <div className="p-6 flex-1">
          <span className="font-heading text-4xl text-gold/60 leading-none" aria-hidden>&ldquo;</span>
          <h3 className="font-heading font-bold text-text-dark mt-1">{patron.name}</h3>
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mt-1 small-caps">{patron.role}</p>
          <p className="text-text-muted text-sm italic mt-3">&ldquo;{patron.quote}&rdquo;</p>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-surface rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden text-center">
      <div className="p-6 flex justify-center">
        <AvatarPlaceholder name={patron.name} size="lg" />
      </div>
      <div className="p-4">
        <h3 className="font-heading font-bold text-text-dark">{patron.name}</h3>
        <p className="text-gold font-semibold text-sm uppercase tracking-wider mt-1">{patron.role}</p>
        <p className="text-text-muted text-sm mt-2">{patron.description ?? patron.quote}</p>
      </div>
    </article>
  );
}
