"use client";

import React from "react";

// -----------------------------------------------------------------------------
// Studio Frame & Light — Devotional Coverage Portfolio (Next.js + Tailwind CSS)
// Single-file page component. No navbar / footer included, matching the
// rest of the site. Built for kirtan / satsang / bhajan coverage — the full
// devotional films plus the vertical reels cut from them.
// -----------------------------------------------------------------------------

const GOLD = "#C9A24B";
const INK = "#1B1815";
const SAFFRON = "#B4531F";

const specialties = [
  {
    title: "Aarti & Bhajan",
    desc: "Full renditions captured clean — vocals, instruments, and the room singing along.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <path d="M12 3c-2 2.5-3 4.6-3 6.4A3 3 0 0 0 12 12a3 3 0 0 0 3-2.6C15 7.6 14 5.5 12 3Z" />
        <path d="M6 21c.5-3 2.6-5 6-5s5.5 2 6 5" />
      </svg>
    ),
  },
  {
    title: "Satsang Moments",
    desc: "Discourse and darshan shot from the floor, close enough to feel the gathering.",
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
    title: "Reels for Sharing",
    desc: "Short-form cuts pulled straight from the kirtan — ready to post the same day.",
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
    title: "Full Devotional Films",
    desc: "An entire evening of bhajan or satsang, edited into one film worth revisiting.",
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
  { label: "Devotional Evenings Filmed", value: "40+" },
  { label: "Reels Delivered", value: "150+" },
  { label: "Temples & Venues", value: "12" },
  { label: "Turnaround", value: "24hr" },
];

const testimonials = [
  {
    quote:
      "Every bhajan came through the way it sounded in the hall — the harmonium, the claps, the crowd joining in.",
    name: "Radhika Nair",
    role: "Kirtan Singer",
  },
  {
    quote:
      "We got the full satsang film plus reels we could send to devotees within a day of the event.",
    name: "Pandit Suresh Trivedi",
    role: "Satsang Organizer",
  },
  {
    quote:
      "The reels capture the actual devotion in the room, not just the stage. People shared them for weeks.",
    name: "Meera Joshi",
    role: "Bhajan Mandali Lead",
  },
];

// ---- Devotional content -----------------------------------------------------
const devotionalFilms = [
  { id: "2Cy1DeHlvs8", label: "Evening Bhajan Sandhya" },
  { id: "8WYDXFLlTKs", label: "Satsang & Kirtan" },
  { id: "hlUrIfSwv2I", label: "Full Aarti Coverage" },
  { id: "zQ2i5ICPE2M", label: "Devotional Gathering" },
];

const devotionalReels = [
  { id: "Nnnx9MxgWsU", label: "Kirtan Moment" },
  { id: "tVTVAWCIjKA", label: "Aarti Close-up" },
  { id: "ca7wzrCu5Q4", label: "Crowd in Devotion" },
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

export default function Devotional() {
  return (
    <main className="bg-white text-neutral-900">
      {/* ---------------------------------------------------------------- */}
      {/* HERO */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1662306164410-1890619ae042?q=80&w=1600&auto=format&fit=crop"
            alt="Golden statue of Lord Ganesha under an ornate canopy"
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
              Devotional Event Coverage
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
              THE CHANT, <span style={{ color: GOLD }}>THE LIGHT,</span>
              <br />
              THE ROOM THAT SANG ALONG.
            </h1>
            <p className="mt-6 text-neutral-300 text-lg max-w-xl">
              Full devotional films alongside the reels pulled straight from
              them — bhajan, aarti, and satsang moments worth sharing with every
              devotee who was there.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                className="px-7 py-3.5 font-semibold tracking-wide text-neutral-950 hover:brightness-95 transition"
                style={{ backgroundColor: GOLD }}
              >
                WATCH THE FILMS
              </button>
              <button className="px-7 py-3.5 font-semibold tracking-wide border border-white/70 hover:bg-white hover:text-neutral-950 transition">
                BOOK COVERAGE
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
              The Gathering, <span style={{ color: GOLD }}>Start to Post.</span>
            </h2>
            <p className="mt-5 text-neutral-600">
              One booking covers the full devotional film and every short-form
              cut you will want to share afterward.
            </p>
            <button className="mt-7 px-6 py-3 border border-neutral-900 font-semibold tracking-wide hover:bg-neutral-900 hover:text-white transition">
              EXPLORE PACKAGES
            </button>
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
      {/* DEVOTIONAL FILMS */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-neutral-950 text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <p
              className="uppercase text-sm font-semibold tracking-widest"
              style={{ color: GOLD }}
            >
              The Films
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
              Full Evenings,
              <br />
              <span style={{ color: GOLD }}>Bhajan to Aarti.</span>
            </h2>
            <p className="mt-5 text-neutral-300">
              No cuts, no filler — just the gathering the way the hall heard it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-14">
            {devotionalFilms.map((f) => (
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
              Moments,
              <br />
              <span style={{ color: GOLD }}>Pulled From the Gathering.</span>
            </h2>
            <p className="mt-5 text-neutral-600">
              Vertical cuts built for the feed — each one a single moment of
              devotion, ready to post on its own.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            {devotionalReels.map((r) => (
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
            What Organizers Say
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
            Gathering.
          </h3>
          <p className="text-neutral-900/80 max-w-sm text-sm">
            Full film, three reels, one booking — get in touch to lock in a
            date.
          </p>
          <button className="px-7 py-3.5 font-semibold tracking-wide bg-neutral-950 text-white hover:bg-neutral-800 transition">
            GET IN TOUCH
          </button>
        </div>
      </section>
    </main>
  );
}
