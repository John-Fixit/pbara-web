import Link from "next/link";
import { AvatarPlaceholder } from "@/components/ui/AvatarPlaceholder";

const directorName = "Rev. Samuel J. Williams";
const directorTitle = "Assoc. Asst. Director";

/**
 * Full-width card: left — director photo placeholder + name overlay; right — quote marks, heading, message, read more link
 */
export function DirectorDesk() {
  return (
    <section className="py-16 bg-light-bg" aria-labelledby="director-heading">
      <div className="max-w-7xl mx-auto px-4">
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Left: photo placeholder + overlay */}
          <div className="md:w-80 shrink-0 relative bg-navy/10 flex items-center justify-center p-8 md:p-0">
            <div className="relative w-48 h-56 md:w-full md:h-full min-h-[280px] flex items-center justify-center">
              <AvatarPlaceholder name={directorName} size="lg" className="w-32 h-32 md:w-40 md:h-40" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-navy/90 text-white px-4 py-3">
              <p className="font-heading font-semibold">{directorName}</p>
              <p className="text-sm text-white/80">{directorTitle}</p>
            </div>
          </div>

          {/* Right: content */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
            <span className="font-heading text-6xl text-gold/40 leading-none" aria-hidden>
              &ldquo;
            </span>
            <h2 id="director-heading" className="font-heading text-2xl md:text-3xl font-bold text-text-dark mt-2">
              From the Director&apos;s Desk
            </h2>
            <div className="mt-4 space-y-3 text-text-muted">
              <p>
                The Royal Ambassadors of the Pentecost Baptist Association continues to commit to developing Christian character in young men. Our mission is to raise God-fearing, disciplined, and service-oriented citizens through a unique paramilitary structure rooted in Scripture.
              </p>
              <p>
                We have mentored thousands of young men in faith, brotherhood, and loyalty to Christ. Together with our patrons and executive council, we are building the next generation of leaders for the church and society.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-6 text-navy font-semibold hover:text-gold transition-colors"
            >
              READ FULL VISION STATEMENT
              <span aria-hidden>→</span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
