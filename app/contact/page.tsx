"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import type { FormEvent } from "react";

const subjectOptions = [
  "Membership Inquiry",
  "Chapter Registration",
  "General Inquiry",
  "Media Request",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-dark">
          Contact Our Headquarters
        </h1>
        <p className="text-text-muted mt-2 max-w-2xl">
          Connect with the Royal Ambassadors leadership. Whether you&apos;re a counselor, a parent, or an interested youth, we&apos;re here to guide you.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Contact form */}
        <section aria-labelledby="form-heading">
          <h2 id="form-heading" className="sr-only">Send a message</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-text-dark mb-1">
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-text-dark mb-1">
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-1">
                Subject
              </label>
              <select
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none bg-white"
                required
              >
                {subjectOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we assist you today?"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none resize-y"
                required
              />
            </div>
            {submitted ? (
              <p className="text-gold font-medium">Thank you. Your message has been sent.</p>
            ) : (
              <Button
                type="submit"
                className="w-full bg-navy text-white font-semibold py-6 flex items-center justify-center gap-2"
              >
                <span aria-hidden>✈</span> Send Message →
              </Button>
            )}
          </form>
        </section>

        {/* Right: Contact info + map */}
        <aside className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6 flex gap-4">
            <span className="text-2xl text-navy shrink-0" aria-hidden>📍</span>
            <div>
              <h3 className="font-heading font-bold text-text-dark">Visit Us</h3>
              <p className="text-text-muted text-sm mt-1">
                Pentecost Baptist Complex, Association Drive, Lagos State, Nigeria
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex gap-4">
            <span className="text-2xl text-navy shrink-0" aria-hidden>📞</span>
            <div>
              <h3 className="font-heading font-bold text-text-dark">Call Us</h3>
              <p className="text-text-muted text-sm mt-1">
                <a href="tel:+2348012345678" className="hover:text-gold">+234 (0) 801 234 5678</a>
                <br />
                <a href="tel:+2349012345678" className="hover:text-gold">+234 (0) 901 234 5678</a>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex gap-4">
            <span className="text-2xl text-navy shrink-0" aria-hidden>✉</span>
            <div>
              <h3 className="font-heading font-bold text-text-dark">Email Us</h3>
              <p className="text-text-muted text-sm mt-1">
                <a href="mailto:info@pba-ra.org" className="hover:text-gold">info@pba-ra.org</a>
                <br />
                <a href="mailto:admin@pba-ra.org" className="hover:text-gold">admin@pba-ra.org</a>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-heading font-bold text-text-dark">Follow Our Mission</h3>
            <div className="flex gap-3 mt-3" aria-label="Social media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold hover:text-navy transition-colors" aria-label="Facebook">f</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold hover:text-navy transition-colors" aria-label="Twitter">𝕏</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold hover:text-navy transition-colors" aria-label="Instagram">📷</a>
            </div>
          </div>
          <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center text-text-muted">
            <span className="flex items-center gap-2">
              <span aria-hidden>🗺</span> View Map
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}
