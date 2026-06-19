"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const TIME_OPTIONS = [
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM", "10:00 PM",
];

const PARTY_SIZES = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"
];

const inputClass =
  "w-full px-4 py-3 border border-nina-blue/20 bg-white text-nina-blue focus:outline-none focus:border-nina-sky transition-colors";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    partySize: "",
    specialRequests: "",
  });

  const today = new Date().toISOString().split("T")[0];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.from("reservations").insert({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      preferred_date: formData.date,
      preferred_time: formData.time,
      party_size: formData.partySize,
      special_requests: formData.specialRequests,
    });
    if (error) {
      alert("There was an error submitting your reservation. Please try again or call us directly.");
      setSubmitting(false);
      return;
    }
    setSubmitted(true);
  }

  return (
    <main>
      {/* Page Header */}
      <section className="bg-nina-cream py-24 md:py-28 lg:py-32 olive-tr olive-v2">
        <div className="max-w-[1140px] mx-auto px-6 text-center relative">
          <p className="font-sans text-xs tracking-[.4em] uppercase text-nina-sky mb-4">
            Nina The Greek
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-nina-blue mb-4">
            Reserve a Table
          </h1>
          <p className="text-nina-body max-w-lg mx-auto">
            Online reservations coming soon. Book below or call us directly.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 md:py-28 lg:py-32 olive-bl olive-v3">
        <div className="max-w-[1140px] mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Reservation Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-nina-sky/15 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-nina-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-2xl text-nina-blue mb-3">Request Received</h2>
                  <p className="text-nina-body max-w-sm mx-auto mb-8">
                    We&apos;ll confirm your reservation shortly. For immediate booking, please call us directly.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", email: "", date: "", time: "", partySize: "", specialRequests: "" }); }}
                    className="bg-nina-blue text-nina-cream hover:bg-nina-navy uppercase tracking-[.2em] text-xs font-semibold px-10 py-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nina-blue active:bg-nina-navy"
                  >
                    Make Another Reservation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-nina-blue mb-2">
                        Full Name <span className="text-nina-sky">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your name"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-nina-blue mb-2">
                        Phone <span className="text-nina-sky">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+973 XXXX XXXX"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-nina-blue mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-nina-blue mb-2">
                        Date <span className="text-nina-sky">*</span>
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        min={today}
                        value={formData.date}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-nina-blue mb-2">
                        Time <span className="text-nina-sky">*</span>
                      </label>
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="" disabled>Select time</option>
                        {TIME_OPTIONS.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="partySize" className="block text-sm font-medium text-nina-blue mb-2">
                        Party Size <span className="text-nina-sky">*</span>
                      </label>
                      <select
                        id="partySize"
                        name="partySize"
                        required
                        value={formData.partySize}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="" disabled>Guests</option>
                        {PARTY_SIZES.map((s) => (
                          <option key={s} value={s}>{s} {s === "1" ? "guest" : "guests"}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-nina-blue mb-2">
                      Special Requests
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      rows={4}
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Dietary requirements, seating preferences, special occasions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 bg-nina-blue text-nina-cream hover:bg-nina-navy disabled:opacity-40 disabled:cursor-not-allowed uppercase tracking-[.2em] text-xs font-semibold px-10 py-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nina-blue active:bg-nina-navy"
                  >
                    {submitting && (
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                        <path className="opacity-90" fill="currentColor" d="M12 2a10 10 0 0 1 10 10h-3a7 7 0 0 0-7-7V2z" />
                      </svg>
                    )}
                    {submitting ? "Submitting…" : "Request Reservation"}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-10">
              {/* Phone */}
              <div>
                <p className="font-sans text-xs tracking-[.4em] uppercase text-nina-sky mb-3">
                  Call to Book
                </p>
                <a
                  href="tel:+97317322777"
                  className="font-serif text-2xl text-nina-blue hover:text-nina-sky transition-colors"
                >
                  1732 2777
                </a>
                <p className="text-nina-body text-sm mt-1">
                  For immediate reservations
                </p>
              </div>

              {/* Address */}
              <div>
                <p className="font-sans text-xs tracking-[.4em] uppercase text-nina-sky mb-3">
                  Visit Us
                </p>
                <p className="text-nina-blue font-medium">Nina The Greek</p>
                <p className="text-nina-body text-sm mt-1">
                  Avenue 57, Maqabah, Bahrain
                </p>
              </div>

              {/* Hours */}
              <div>
                <p className="font-sans text-xs tracking-[.4em] uppercase text-nina-sky mb-3">
                  Opening Hours
                </p>
                <p className="text-nina-blue font-medium">Daily</p>
                <p className="text-nina-body text-sm mt-1">
                  3:00 PM &ndash; 11:00 PM
                </p>
              </div>

              {/* Large parties */}
              <div className="border-t border-nina-blue/10 pt-8">
                <p className="text-nina-body text-sm">
                  For parties of 10 or more, please visit our{" "}
                  <Link
                    href="/private-events"
                    className="text-nina-sky hover:text-nina-blue transition-colors underline"
                  >
                    Private Events
                  </Link>{" "}
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
