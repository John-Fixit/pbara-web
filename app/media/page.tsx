import type { Metadata } from "next";
import Image from "next/image";
import { MediaGallery } from "@/components/media/MediaGallery";

export const metadata: Metadata = {
  title: "Media Gallery and Resources",
  description:
    "Capturing moments of discipline, faith, and leadership from our Royal Ambassadors association. Videos, photo gallery, and downloadable resources.",
  openGraph: {
    title: "Media & Resources | PBA Royal Ambassadors",
    url: "https://pbara.org.ng/media",
  },
  keywords: ["Gallery", "Videos", "Photos", "Downloads", "Resources", "RA media"],
};

export default function MediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-white py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/ra-logo.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">Media Gallery &amp; Resources</h1>
          <p className="text-white/90 mt-2 max-w-2xl">
            Capturing moments of discipline, faith, and leadership from our Royal Ambassadors association.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <MediaGallery />
      </div>
    </>
  );
}
