"use client";

import { Button } from "@heroui/react";
import { useState } from "react";

export function NewsletterCta() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to API
  }

  return (
    <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold"
        aria-label="Email for newsletter"
      />
      <Button type="submit" className="bg-gold text-primary font-semibold shrink-0">
        Keep me posted
      </Button>
    </form>
  );
}
