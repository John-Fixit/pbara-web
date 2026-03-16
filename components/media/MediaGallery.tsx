"use client";

import { Tabs, Tab } from "@heroui/react";
import Image from "next/image";
import { DownloadCard } from "@/components/ui/DownloadCard";
import { downloads } from "@/data/downloads";

const placeholderImages = [
  { id: "1", alt: "Royal Ambassadors group activity placeholder" },
  { id: "2", alt: "Royal Ambassadors event placeholder" },
  { id: "3", alt: "Royal Ambassadors ceremony placeholder" },
  { id: "4", alt: "Royal Ambassadors training placeholder" },
  { id: "5", alt: "Royal Ambassadors fellowship placeholder" },
  { id: "6", alt: "Royal Ambassadors outreach placeholder" },
];

/**
 * HeroUI Tabs: Videos | Photo Gallery | Downloads. Photo Gallery default; 3-col masonry grid; Downloads = 2-col download cards
 */
export function MediaGallery() {
  return (
    <section className="py-12" aria-labelledby="media-tabs-heading">
      <Tabs id="media-tabs-heading" aria-label="Media gallery tabs" defaultSelectedKey="photos" className="w-full">
        <Tab key="videos" title={<span className="flex items-center gap-2"><span aria-hidden>▶</span> Videos</span>}>
          <div className="py-8">
            <p className="text-text-muted mb-6">Video content will be added here.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative aspect-video bg-navy/10 rounded-xl overflow-hidden group">
                  <Image
                    src="/images/ra-logo.png"
                    alt="Royal Ambassadors logo — video thumbnail placeholder"
                    fill
                    className="object-contain p-8"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <span className="w-14 h-14 rounded-full bg-gold flex items-center justify-center text-navy" aria-hidden>
                      ▶
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Tab>
        <Tab key="photos" title={<span className="flex items-center gap-2"><span aria-hidden>🖼</span> Photo Gallery</span>}>
          <div className="py-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-xl font-bold text-text-dark flex items-center gap-2">
                <span className="w-8 h-1 bg-gold rounded" aria-hidden />
                Latest Event Highlights
              </h3>
              <button type="button" className="p-2 text-text-muted hover:text-gold rounded-lg" aria-label="Filter gallery">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {placeholderImages.map(({ id, alt }) => (
                <div key={id} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-navy/10 group">
                  <Image
                    src="/images/ra-logo.png"
                    alt={alt}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </Tab>
        <Tab key="downloads" title={<span className="flex items-center gap-2"><span aria-hidden>⬇</span> Downloads</span>}>
          <div className="py-8">
            <h3 className="font-heading text-xl font-bold text-text-dark flex items-center gap-2 mb-6">
              <span className="w-8 h-1 bg-gold rounded" aria-hidden />
              Resources &amp; Downloads
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {downloads.map((item) => (
                <DownloadCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </Tab>
      </Tabs>
    </section>
  );
}
