"use client";

import React from "react";

// -----------------------------------------------------------------------------
// Capture Moments Photography — Landing Page (Next.js + Tailwind CSS)
// Single-file page component. No navbar / footer included as requested.
// Portfolio section's images are replaced with two YouTube Shorts, sized
// like reels (vertical 9:16).
// -----------------------------------------------------------------------------

const GOLD = "#D4A017";

const services = [
  {
    title: "Conferences & Seminars",
    desc: "Capturing key moments, speakers, and audience engagement.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M15.5 14.2c2.6.2 4.5 2.4 4.5 5.3" />
      </svg>
    ),
  },
  {
    title: "Product Launches",
    desc: "Highlighting your brand launch with stunning visuals.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <path d="M13.5 3.5c3 1 5 3 5.5 6-2.5 1-5.5 3-8 7.5l-3.5-3.5C12 10 14 7 13.5 3.5Z" />
        <path d="M7.5 14.5 4 18l3.5-1M9.5 16.5 8 20l3.5-1.5" />
        <circle cx="15.5" cy="8.5" r="1.3" />
      </svg>
    ),
  },
  {
    title: "Award Ceremonies",
    desc: "Preserving the glory, achievements, and celebrations.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
        <path d="M7 5H4v1a4 4 0 0 0 4 4M17 5h3v1a4 4 0 0 1-4 4" />
        <path d="M12 13v3M9 20h6M10 17h4v3h-4z" />
      </svg>
    ),
  },
  {
    title: "Corporate Parties & Team Events",
    desc: "Candid moments, team spirit, and unforgettable memories.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <circle cx="8" cy="8" r="2.6" />
        <circle cx="16" cy="8" r="2.6" />
        <path d="M3 20c0-3 2.2-5.3 5-5.3s5 2.3 5 5.3M11 20c0-3 2.2-5.3 5-5.3s5 2.3 5 5.3" />
      </svg>
    ),
  },
];

const stats = [
  { label: "Events Covered", value: "50+" },
  { label: "Years of Experience", value: "2+" },
  { label: "Memorable Moments", value: "35+" },
];

const testimonials = [
  {
    quote:
      "Exceptional videography , photography and professional approach. Every important moment was captured beautifully!",
    name: "Rohit Sharma",
    role: "Marketing Head",
  },
  {
    quote:
      "Highly recommended! The Video truly reflected the essence of our event.",
    name: "Anita Verma",
    role: "HR Manager",
  },
  {
    quote: "Great eye for detail and amazing to work with. Will hire again!",
    name: "Vikram Mehta",
    role: "Event Manager",
  },
];

// Reels shown in the portfolio section
const reels = [
  { id: "A41qdI_DXxk", label: "Conference Highlights" },
  { id: "FeDLAcWQBDA", label: "Award Night Reel" },
];

export default function RealEstate() {
  return (
    <main className="bg-white text-neutral-900">
      {/* ---------------------------------------------------------------- */}
      {/* HERO */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop"
            alt="Corporate event stage with audience"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
              CAPTURING <span style={{ color: GOLD }}>CORPORATE MOMENTS,</span>
              <br />
              CREATING LASTING IMPRESSIONS.
            </h1>
            <p className="mt-6 text-neutral-300 text-lg max-w-xl">
              Professional corporate event photography that tells your story,
              showcases your brand, and leaves a lasting impact.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/918976626521?text=Hello%2C%20I%20want%20to%20book%20a%20shoot.",
                    "_blank",
                  )
                }
                className="px-7 py-3.5 font-semibold tracking-wide border border-white/70 hover:bg-white hover:text-neutral-950 transition"
              >
                BOOK A SHOOT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* WHAT I DO */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-neutral-50 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[minmax(0,340px)_1fr] gap-12 lg:gap-16">
          <div>
            <p
              className="uppercase text-sm font-semibold tracking-widest"
              style={{ color: GOLD }}
            >
              What I Do
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
              Corporate Events,{" "}
              <span style={{ color: GOLD }}>Captured Perfectly.</span>
            </h2>
            <p className="mt-5 text-neutral-600">
              From conferences to award nights, product launches to team events
              – I capture every important moment with creativity and precision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
            {services.map((s) => (
              <div key={s.title} className="bg-white p-7 flex flex-col gap-4">
                {s.icon}
                <h3 className="font-bold text-lg leading-snug">{s.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* PORTFOLIO — reels instead of static images */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-neutral-950 text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p
                className="uppercase text-sm font-semibold tracking-widest"
                style={{ color: GOLD }}
              >
                Portfolio
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
                Moments That
                <br />
                <span style={{ color: GOLD }}>Speak for Themselves</span>
              </h2>
            </div>
          </div>

          {/* Reels grid — vertical / shorts aspect ratio (9:16) */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-8">
            {reels.map((reel) => (
              <div key={reel.id} className="flex flex-col gap-3">
                <div className="w-[315px] h-[560px] max-w-[86vw] rounded-xl overflow-hidden bg-neutral-900 ring-1 ring-white/10">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${reel.id}`}
                    title={reel.label}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <p className="text-sm text-neutral-400">{reel.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* STATS */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-neutral-50 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 sm:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p
                className="text-3xl sm:text-4xl font-extrabold"
                style={{ color: "#1a1a1a" }}
              >
                {s.value}
              </p>
              <p className="text-sm text-neutral-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* TESTIMONIALS */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-neutral-950 text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p
            className="uppercase text-sm font-semibold tracking-widest"
            style={{ color: GOLD }}
          >
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight mb-12">
            What Clients Say
            <br />
            <span style={{ color: GOLD }}>About My Work</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border p-7 flex flex-col gap-6"
                style={{ borderColor: "rgba(212,160,23,0.35)" }}
              >
                <span className="text-4xl leading-none" style={{ color: GOLD }}>
                  &ldquo;
                </span>
                <p className="text-neutral-200 leading-relaxed">{t.quote}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-9 h-9 rounded-full bg-neutral-700" />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-neutral-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA BANNER */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-12" style={{ backgroundColor: GOLD }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 leading-snug">
            Let&apos;s Capture Your
            <br />
            Next Corporate Event
          </h3>
          <p className="text-neutral-900/80 max-w-sm text-sm">
            Professional photography that showcases your event and elevates your
            brand.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://wa.me/918976626521?text=Hello%2C%20I%20want%20to%20get%20in%20touch.",
                "_blank",
              )
            }
            className="px-7 py-3.5 font-semibold tracking-wide bg-neutral-950 text-white hover:bg-neutral-800 transition"
          >
            GET IN TOUCH
          </button>
        </div>
      </section>
    </main>
  );
}
