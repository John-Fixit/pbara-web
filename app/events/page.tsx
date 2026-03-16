import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { EventCard } from "@/components/ui/EventCard";
import { upcomingEvents, pastEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "Events and Programs",
  description:
    "Upcoming Royal Ambassadors events, camps, training workshops, and past events archive. Strengthening faith and discipline through fellowship and service.",
  openGraph: {
    title: "Events and Programs | PBA Royal Ambassadors",
    url: "https://pbara.org.ng/events",
  },
  keywords: ["Events", "Programs", "Camps", "Training", "RA calendar"],
};

export default function EventsPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative bg-navy text-white py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/ra-logo.png" alt="" fill className="object-cover" aria-hidden />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <span className="inline-block px-3 py-1 rounded bg-gold text-navy text-xs font-semibold uppercase tracking-wider mb-4">
            Featured Program
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Events and Programs</h1>
          <p className="text-white/90 mt-2 max-w-2xl">
            Strengthening the faith and discipline of young men through dedicated fellowship and service.
          </p>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="py-16 bg-light-bg" aria-labelledby="upcoming-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <h2 id="upcoming-heading" className="font-heading text-2xl font-bold text-text-dark flex items-center gap-2">
                <span className="w-8 h-1 bg-gold rounded" aria-hidden />
                Upcoming Programs
              </h2>
              <p className="text-text-muted text-sm mt-1">Join our scheduled activities and developmental occasions.</p>
            </div>
            <Link href="/events#calendar" className="text-navy font-semibold hover:text-gold transition-colors flex items-center gap-1">
              <span aria-hidden>📅</span> View Full Calendar
            </Link>
          </div>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} horizontal />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Archive */}
      <section className="py-16 bg-white" aria-labelledby="past-events-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 id="past-events-heading" className="font-heading text-2xl font-bold text-text-dark">
                Past Events Archive
              </h2>
              <p className="text-text-muted text-sm mt-1">Reflecting on our milestones and past ceremonies.</p>
            </div>
            <div className="flex gap-2" aria-label="Archive navigation">
              <button type="button" className="p-2 rounded-lg border border-gray-200 text-text-muted hover:text-gold" aria-label="Previous">
                ←
              </button>
              <button type="button" className="p-2 rounded-lg border border-gray-200 text-text-muted hover:text-gold" aria-label="Next">
                →
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} past />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="bordered" className="border-navy text-navy">
              Load More From Archive
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-navy text-white" aria-labelledby="newsletter-heading">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 id="newsletter-heading" className="font-heading text-2xl md:text-3xl font-bold">
            Never miss an update
          </h2>
          <p className="text-white/90 mt-2">
            Subscribe to our monthly newsletter to get the latest announcements, program schedules, and motivational content delivered to your inbox.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Email for newsletter"
            />
            <Button type="submit" className="bg-gold text-navy font-semibold shrink-0">
              Keep me posted
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
