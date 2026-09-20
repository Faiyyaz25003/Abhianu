"use client";

import React from "react";

// -----------------------------------------------------------------------------
// Studio Frame & Light — Anchor / Event Host Portfolio (Next.js + Tailwind CSS)
// Single-file page component. No navbar / footer included, matching the
// rest of the site. Dedicated to one anchor: a full hosting film plus the
// vertical reels cut from it.
// -----------------------------------------------------------------------------

const GOLD = "#C9A24B";
const INK = "#1B1815";

const specialties = [
  {
    title: "Stage Presence",
    desc: "Full segments captured clean — every cue, every crowd response.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <path d="M12 3v4M8 21h8M9 21c0-3.3.7-5 3-5s3 1.7 3 5" />
        <rect x="4" y="9" width="16" height="6" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Crowd Engagement",
    desc: "Games, banter, and audience moments — shot from the floor, not just the stage.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <circle cx="8" cy="9" r="2.6" />
        <circle cx="16" cy="9" r="2.6" />
        <path d="M3 20c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5M11 20c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5" />
      </svg>
    ),
  },
  {
    title: "Highlight Reels",
    desc: "Short-form cuts pulled from the show — ready to post the same day.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <rect x="6" y="3" width="12" height="18" rx="2.5" />
        <path d="M10 8h4M10 12h4M10 16h2" />
      </svg>
    ),
  },
  {
    title: "Show Reels",
    desc: "A full event, edited into one film built to pitch the next booking.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <path d="M4 6h11v12H4z" />
        <path d="M15 10l5-3v10l-5-3" />
      </svg>
    ),
  },
];

const stats = [
  { label: "Events Hosted On-Camera", value: "60+" },
  { label: "Reels Delivered", value: "300+" },
  { label: "Cities Covered", value: "10" },
  { label: "Turnaround", value: "24hr" },
];

const testimonials = [
  {
    quote:
      "The stage energy came through exactly as it happened live — no flat angles, no dead air in the cut.",
    name: "Aisha Kapoor",
    role: "Event Anchor",
  },
  {
    quote:
      "Handed over one show and got back a full film plus reels ready to send to organizers the same week.",
    name: "Vikram Sen",
    role: "Corporate Emcee",
  },
  {
    quote:
      "Crowd shots actually show the room reacting, not just me talking. Makes the reel worth sharing.",
    name: "Neha Bhatt",
    role: "Wedding Host",
  },
];

// ---- Anchor ---------------------------------------------------------------
const anchorFilm = [{ id: "k6U1oASYrCs", label: "Full Hosting Film" }];

const anchorReels = [
  { id: "zcVrhUfPGAQ", label: "Opening Segment" },
  { id: "UfL7wsYc9XU", label: "Crowd Game" },
  { id: "Rzzy7fIDnRc", label: "Stage Banter" },
  { id: "-p6f8O8Fo4g", label: "Audience Reaction" },
  { id: "Q1t7mEEITkc", label: "Guest Introduction" },
  { id: "JTAWrM6P914", label: "Mic Moment" },
  { id: "O0b-l1oDb2k", label: "Closing Segment" },
  // { id: "3JqVnacq7D8", label: "Show Recap" },
];

// -----------------------------------------------------------------------------
// Reusable embed pieces
// -----------------------------------------------------------------------------

function FilmCard({ id, label }) {
  return (
    <div className="flex flex-col gap-3 min-w-0">
      <div className="w-full aspect-video rounded-xl overflow-hidden bg-neutral-900 ring-1 ring-white/10">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="text-sm text-neutral-500">{label}</p>
    </div>
  );
}

function ReelCard({ id, label, width = "240px" }) {
  // Reels are vertical (9:16). aspect-ratio keeps them proportional at any width.
  return (
    <div
      className="flex flex-col gap-3 shrink-0"
      style={{ width, maxWidth: "80vw" }}
    >
      <div className="aspect-[9/16] rounded-xl overflow-hidden bg-neutral-900 ring-1 ring-white/10">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="text-sm text-neutral-500">{label}</p>
    </div>
  );
}

export default function Anchor() {
  return (
    <main className="bg-white text-neutral-900">
      {/* ---------------------------------------------------------------- */}
      {/* HERO */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1600&auto=format&fit=crop"
            alt="Event anchor holding a microphone on stage under lights"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36">
          <div className="max-w-2xl">
            <p
              className="uppercase text-sm font-semibold tracking-[0.3em]"
              style={{ color: GOLD }}
            >
              Anchor & Event Host Coverage
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
              THE MIC, <span style={{ color: GOLD }}>THE STAGE,</span>
              <br />
              THE ROOM THAT SHOWED UP.
            </h1>
            <p className="mt-6 text-neutral-300 text-lg max-w-xl">
              A full hosting film alongside the reels pulled straight from it —
              stage moments, crowd reactions, and the cuts worth sending to your
              next organizer.
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
      {/* WHAT I SHOOT */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-neutral-50 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[minmax(0,340px)_1fr] gap-12 lg:gap-16">
          <div>
            <p
              className="uppercase text-sm font-semibold tracking-widest"
              style={{ color: GOLD }}
            >
              What I Shoot
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
              The Show, <span style={{ color: GOLD }}>Start to Post.</span>
            </h2>
            <p className="mt-5 text-neutral-600">
              One booking covers the full film and every short-form cut you will
              want to send out afterward.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
            {specialties.map((s) => (
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
      {/* FULL HOSTING FILM */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-neutral-950 text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <p
              className="uppercase text-sm font-semibold tracking-widest"
              style={{ color: GOLD }}
            >
              The Film
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
              The Full Show,
              <br />
              <span style={{ color: GOLD }}>Beginning to End.</span>
            </h2>
            <p className="mt-5 text-neutral-300">
              No cuts, no filler — just the show the way the room heard it.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {anchorFilm.map((f) => (
              <FilmCard key={f.id} id={f.id} label={f.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* REELS */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-neutral-50 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <p
              className="uppercase text-sm font-semibold tracking-widest"
              style={{ color: GOLD }}
            >
              Reels
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
              Eight Moments,
              <br />
              <span style={{ color: GOLD }}>Pulled From the Show.</span>
            </h2>
            <p className="mt-5 text-neutral-600">
              Vertical cuts built for the feed — each one a single moment from
              the event, ready to post on its own.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            {anchorReels.map((r) => (
              <ReelCard key={r.id} id={r.id} label={r.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* STATS */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-14 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 sm:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p
                className="text-3xl sm:text-4xl font-extrabold"
                style={{ color: INK }}
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
            What Anchors Say
            <br />
            <span style={{ color: GOLD }}>About the Coverage</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border p-7 flex flex-col gap-6"
                style={{ borderColor: "rgba(201,162,75,0.35)" }}
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
            Book the Next
            <br />
            Show.
          </h3>
          <p className="text-neutral-900/80 max-w-sm text-sm">
            Full film, eight reels, one booking — get in touch to lock in a
            date.
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
