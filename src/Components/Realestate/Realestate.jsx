"use client";

import React from "react";

// -----------------------------------------------------------------------------
// Meridian Cuts — Video Editor Landing Page (Next.js + Tailwind CSS)
// Single-file page component. No navbar / footer included.
// Design language unchanged: ink, stone, and brass, with corner crop-marks
// (now reading as camera-viewfinder frame marks) as the signature motif.
// -----------------------------------------------------------------------------

const INK = "#14181C";
const STONE = "#EDE7DD";
const BRASS = "#A9822F";
const BRICK = "#8C4030";
const SLATE = "#5B6470";

const FONT_DISPLAY = "'Fraunces', 'Georgia', serif";
const FONT_BODY = "'Inter', 'Helvetica Neue', sans-serif";
const FONT_MONO = "'IBM Plex Mono', 'Courier New', monospace";

// Corner frame marks — the page's recurring signature element, used on the
// hero image and each video card to evoke a camera viewfinder.
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
    tag: "SHORT-FORM",
    title: "Reels, Shorts & TikToks",
    desc: "Fast cuts, sharp hooks, captions, and sound design built to hold attention past the first three seconds.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={BRASS}
        strokeWidth="1.6"
      >
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M10.5 10.5v3l3-1.5-3-1.5Z" />
      </svg>
    ),
  },
  {
    tag: "LONG-FORM",
    title: "YouTube & Podcast Edits",
    desc: "Clean pacing, tight storytelling, chapter structure, and thumbnails that keep viewers watching to the end.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={BRASS}
        strokeWidth="1.6"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M10 9.5v5l4.5-2.5L10 9.5Z" />
      </svg>
    ),
  },
  {
    tag: "COMMERCIAL",
    title: "Ads & Brand Films",
    desc: "Polished promo videos, product launches, and brand stories with colour grading and motion graphics.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={BRASS}
        strokeWidth="1.6"
      >
        <path d="M3 7h18v12H3z" />
        <path d="M3 7l3-4h4l-3 4M10 7l3-4h4l-3 4M17 7l3-4" />
      </svg>
    ),
  },
  {
    tag: "EVENTS",
    title: "Weddings & Event Films",
    desc: "Highlight reels and full-length edits that turn raw footage into a story people rewatch for years.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={BRASS}
        strokeWidth="1.6"
      >
        <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
      </svg>
    ),
  },
];

const stats = [
  { label: "Videos Delivered", value: "50+" },
  { label: "Years Editing", value: "2+" },
  { label: "Creative Projects", value: "40+" },
];

const testimonials = [
  {
    quote:
      "Our reels went from 2k to 80k views in a month. The hooks and pacing completely changed our content.",
    name: "Rohit Sharma",
    role: "Founder, Fit Nation",
  },
  {
    quote:
      "Delivered a full podcast episode edit overnight, with clean audio and perfect cuts. Zero revisions needed.",
    name: "Anita Verma",
    role: "Host, The Growth Table",
  },
  {
    quote:
      "Understood our brand style from the first brief. The launch video looked like it came from a big agency.",
    name: "Vikram Mehta",
    role: "Marketing Head, InnovateX",
  },
];

// Featured work — vertical showreel videos.
// Replace the YouTube IDs with your own Shorts / reel uploads.
const listings = [
  {
    id: "H6XQ-G-Pjes",
    label: "Brand Launch Reel",
    address: "Ad edit · Colour graded",
    price: "0:45",
  },
  {
    id: "a0VIRHaBHfY",
    label: "Creator Storytelling Short",
    address: "Short-form · Captions + SFX",
    price: "1:00",
  },
];

export default function VideoEditor() {
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
          {/* Swap this image for one of your own (editing setup / still from your work) */}
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1600&auto=format&fit=crop"
            alt="Video editing timeline on a dark studio monitor"
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
            MERIDIAN CUTS — MUMBAI
          </p>
          <div className="max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-white"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              Every frame
              <br />
              tells a{" "}
              <span style={{ color: BRASS, fontStyle: "italic" }}>
                better
              </span>{" "}
              story.
            </h1>
            <p className="mt-6 text-neutral-300 text-lg max-w-xl">
              From viral reels to brand films — I turn raw footage into videos
              with strong hooks, clean pacing, and a finish that makes people
              hit replay.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/918976626521?text=Hello%2C%20I%20want%20to%20get%20my%20video%20edited.",
                    "_blank",
                  )
                }
                className="px-7 py-3.5 font-semibold tracking-wide text-white border border-white/70 hover:bg-white hover:text-neutral-950 transition"
              >
                START YOUR EDIT
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
              Raw footage,{" "}
              <span style={{ color: BRICK, fontStyle: "italic" }}>edited</span>{" "}
              properly.
            </h2>
            <p className="mt-5 text-neutral-600">
              Short-form, long-form, ads, or events — every project gets the
              same care with cuts, colour, sound, and on-time delivery.
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
      {/* FEATURED WORK — showreel videos */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: INK }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p
                className="uppercase text-xs font-semibold tracking-[0.25em]"
                style={{ color: BRASS, fontFamily: FONT_MONO }}
              >
                FEATURED WORK
              </p>
              <h2
                className="mt-3 text-3xl sm:text-4xl leading-tight text-white"
                style={{ fontFamily: FONT_DISPLAY }}
              >
                Watch the edits
                <br />
                before you{" "}
                <span style={{ color: BRASS, fontStyle: "italic" }}>
                  hire me
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
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-3 gap-4 sm:gap-10">
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
            CLIENT REVIEWS
          </p>
          <h2
            className="mt-3 text-3xl sm:text-4xl leading-tight mb-12 text-white"
            style={{ fontFamily: FONT_DISPLAY }}
          >
            What clients say
            <br />
            <span style={{ color: BRASS, fontStyle: "italic" }}>
              after delivery.
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
            Got footage
            <br />
            waiting to be cut?
          </h3>
          <p className="text-neutral-900/80 max-w-sm text-sm">
            Send me your raw clips and a quick brief. You will get a free sample
            cut and a clear quote, no obligation.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://wa.me/918976626521?text=Hello%2C%20I%20want%20to%20get%20in%20touch%20about%20a%20video%20edit.",
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
