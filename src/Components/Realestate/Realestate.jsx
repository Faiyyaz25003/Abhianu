"use client";

import React from "react";

// -----------------------------------------------------------------------------
// Meridian Estates — Real Estate Landing Page (Next.js + Tailwind CSS)
// Single-file page component. No navbar / footer included.
// Design language: architectural blueprint — ink, stone, and brass, with
// property-tag labels and corner crop-marks as the signature motif.
// -----------------------------------------------------------------------------

const INK = "#14181C";
const STONE = "#EDE7DD";
const BRASS = "#A9822F";
const BRICK = "#8C4030";
const SLATE = "#5B6470";

const FONT_DISPLAY = "'Fraunces', 'Georgia', serif";
const FONT_BODY = "'Inter', 'Helvetica Neue', sans-serif";
const FONT_MONO = "'IBM Plex Mono', 'Courier New', monospace";

// Corner crop-mark — the page's recurring signature element, used on the
// hero image and each listing card to evoke a property survey / blueprint tag.
function CropMarks({ color = BRASS }) {
  return (
    <>
      <svg
        className="absolute top-3 left-3 w-6 h-6 pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M1 9V1H9" stroke={color} strokeWidth="1.5" />
      </svg>
      <svg
        className="absolute top-3 right-3 w-6 h-6 pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M23 9V1H15" stroke={color} strokeWidth="1.5" />
      </svg>
      <svg
        className="absolute bottom-3 left-3 w-6 h-6 pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M1 15V23H9" stroke={color} strokeWidth="1.5" />
      </svg>
      <svg
        className="absolute bottom-3 right-3 w-6 h-6 pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M23 15V23H15" stroke={color} strokeWidth="1.5" />
      </svg>
    </>
  );
}

const services = [
  {
    tag: "RESIDENTIAL",
    title: "Home Sales & Purchases",
    desc: "Guiding buyers and sellers through every offer, inspection, and closing detail.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={BRASS}
        strokeWidth="1.6"
      >
        <path d="M3 11 12 3l9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    tag: "COMMERCIAL",
    title: "Office & Retail Leasing",
    desc: "Matching businesses with spaces that fit their footprint, foot traffic, and budget.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={BRASS}
        strokeWidth="1.6"
      >
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
      </svg>
    ),
  },
  {
    tag: "LUXURY",
    title: "Estates & New Builds",
    desc: "Discreet representation for high-value properties and off-market listings.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={BRASS}
        strokeWidth="1.6"
      >
        <path d="M12 2 3 8v13h18V8L12 2Z" />
        <path d="M9 21v-7h6v7" />
      </svg>
    ),
  },
  {
    tag: "INVESTMENT",
    title: "Portfolio & Rentals",
    desc: "Sourcing yield-driven properties and managing tenant turnover end to end.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={BRASS}
        strokeWidth="1.6"
      >
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </svg>
    ),
  },
];

const stats = [
  { label: "Properties Sold", value: "480+" },
  { label: "Total Sales Volume", value: "$210M" },
  { label: "Years in the Market", value: "12+" },
  { label: "Avg. Days to Close", value: "31" },
];

const testimonials = [
  {
    quote:
      "Sold our home above asking in under three weeks. Every step was communicated clearly, no surprises.",
    name: "Rohit Sharma",
    role: "Seller, Bandra West",
  },
  {
    quote:
      "Found us a warehouse space that matched our lease terms exactly. Negotiation was handled brilliantly.",
    name: "Anita Verma",
    role: "Operations Lead, Global Solutions",
  },
  {
    quote:
      "Sharp read on the market and honest about trade-offs. Exactly what you want in an agent.",
    name: "Vikram Mehta",
    role: "Investor, InnovateX Holdings",
  },
];

// Featured listing walkthroughs — vertical property tour videos.
const listings = [
  {
    id: "H6XQ-G-Pjes",
    label: "3BHK Sea-Facing Residence",
    address: "Bandra West, Mumbai",
    price: "₹4.2 Cr",
  },
  {
    id: "a0VIRHaBHfY",
    label: "Loft-Style Commercial Unit",
    address: "Lower Parel, Mumbai",
    price: "₹2.8 Cr",
  },
];

export default function RealEstate() {
  return (
    <main
      className="text-neutral-900"
      style={{ backgroundColor: STONE, fontFamily: FONT_BODY }}
    >
      {/* ---------------------------------------------------------------- */}
      {/* HERO */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: INK }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
            alt="Modern architectural residence at dusk"
            className="w-full h-full object-cover opacity-40"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, ${INK} 20%, rgba(20,24,28,0.75) 60%, rgba(20,24,28,0.25) 100%)`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36">
          <p
            className="uppercase text-xs tracking-[0.25em] mb-5"
            style={{ color: BRASS, fontFamily: FONT_MONO }}
          >
            MERIDIAN ESTATES — MUMBAI
          </p>
          <div className="max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-white"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              Every address
              <br />
              tells a{" "}
              <span style={{ color: BRASS, fontStyle: "italic" }}>
                different
              </span>{" "}
              story.
            </h1>
            <p className="mt-6 text-neutral-300 text-lg max-w-xl">
              From first homes to landmark commercial deals — I help you read
              the market, negotiate with confidence, and close on your terms.
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
      <section className="py-20 lg:py-24" style={{ backgroundColor: STONE }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[minmax(0,340px)_1fr] gap-12 lg:gap-16">
          <div>
            <p
              className="uppercase text-xs font-semibold tracking-[0.25em]"
              style={{ color: BRICK, fontFamily: FONT_MONO }}
            >
              SERVICES
            </p>
            <h2
              className="mt-3 text-3xl sm:text-4xl leading-tight"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              Property matters,{" "}
              <span style={{ color: BRICK, fontStyle: "italic" }}>handled</span>{" "}
              properly.
            </h2>
            <p className="mt-5 text-neutral-600">
              Residential, commercial, luxury, or investment — every deal gets
              the same level of scrutiny, paperwork, and follow-through.
            </p>
          </div>

          <div
            className="grid sm:grid-cols-2 gap-px"
            style={{
              backgroundColor: "rgba(20,24,28,0.12)",
              border: "1px solid rgba(20,24,28,0.12)",
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                className="p-7 flex flex-col gap-4"
                style={{ backgroundColor: "#F7F4EE" }}
              >
                <div className="flex items-center justify-between">
                  {s.icon}
                  <span
                    className="text-[10px] tracking-[0.2em]"
                    style={{ color: SLATE, fontFamily: FONT_MONO }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h3
                  className="font-semibold text-lg leading-snug"
                  style={{ fontFamily: FONT_DISPLAY }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* FEATURED LISTINGS — property walkthrough reels */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: INK }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p
                className="uppercase text-xs font-semibold tracking-[0.25em]"
                style={{ color: BRASS, fontFamily: FONT_MONO }}
              >
                FEATURED LISTINGS
              </p>
              <h2
                className="mt-3 text-3xl sm:text-4xl leading-tight text-white"
                style={{ fontFamily: FONT_DISPLAY }}
              >
                Walk the property
                <br />
                before you{" "}
                <span style={{ color: BRASS, fontStyle: "italic" }}>
                  visit it
                </span>
                .
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-8">
            {listings.map((item) => (
              <div key={item.id} className="flex flex-col gap-3">
                <div className="relative w-[315px] h-[560px] max-w-[86vw] rounded-xl overflow-hidden bg-neutral-900 ring-1 ring-white/10">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${item.id}`}
                    title={item.label}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <CropMarks />
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="text-sm text-neutral-200 font-medium">
                    {item.label}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: BRASS, fontFamily: FONT_MONO }}
                  >
                    {item.price}
                  </p>
                </div>
                <p
                  className="text-xs text-neutral-500"
                  style={{ fontFamily: FONT_MONO }}
                >
                  {item.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* STATS */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-14" style={{ backgroundColor: STONE }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 sm:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p
                className="text-3xl sm:text-4xl"
                style={{ color: INK, fontFamily: FONT_DISPLAY }}
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
      <section className="py-20 lg:py-24" style={{ backgroundColor: INK }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p
            className="uppercase text-xs font-semibold tracking-[0.25em]"
            style={{ color: BRASS, fontFamily: FONT_MONO }}
          >
            CLIENT RECORD
          </p>
          <h2
            className="mt-3 text-3xl sm:text-4xl leading-tight mb-12 text-white"
            style={{ fontFamily: FONT_DISPLAY }}
          >
            What clients say
            <br />
            <span style={{ color: BRASS, fontStyle: "italic" }}>
              after closing.
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-7 flex flex-col gap-6"
                style={{ border: `1px solid rgba(169,130,47,0.35)` }}
              >
                <span
                  className="text-4xl leading-none"
                  style={{ color: BRASS, fontFamily: FONT_DISPLAY }}
                >
                  &ldquo;
                </span>
                <p className="text-neutral-200 leading-relaxed">{t.quote}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-9 h-9 rounded-full bg-neutral-700" />
                  <div>
                    <p className="font-semibold text-sm text-white">{t.name}</p>
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
      <section className="py-12" style={{ backgroundColor: BRASS }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-6">
          <h3
            className="text-2xl sm:text-3xl leading-snug text-neutral-950"
            style={{ fontFamily: FONT_DISPLAY }}
          >
            Ready to make
            <br />
            your next move?
          </h3>
          <p className="text-neutral-900/80 max-w-sm text-sm">
            Book a no-obligation consultation and get a straight read on your
            options — buying, selling, or leasing.
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
