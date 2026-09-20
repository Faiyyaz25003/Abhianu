"use client";

import React from "react";

// -----------------------------------------------------------------------------
// Studio Frame & Light — Celebrations Portfolio (Next.js + Tailwind CSS)
// Single-file page component. No navbar / footer included, matching the
// rest of the site. Covers avow ceremonies, baby showers, Punjabi festival
// coverage, and behind-the-scenes films & reels.
// -----------------------------------------------------------------------------

const GOLD = "#C9A24B";
const INK = "#1B1815";

const specialties = [
  {
    title: "Avow Ceremonies",
    desc: "Vows and rings captured intimately — every word, every reaction in the room.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <path d="M12 21c-4-2.5-8-5.7-8-10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 4.3-4 7.5-8 10Z" />
      </svg>
    ),
  },
  {
    title: "Baby Showers",
    desc: "Games, gifts, and the soon-to-be parents glowing through the whole celebration.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <circle cx="12" cy="8" r="3" />
        <path d="M12 11v6M9 21c0-2 1.3-3 3-3s3 1 3 3" />
      </svg>
    ),
  },
  {
    title: "Punjabi Festivities",
    desc: "Dhol, bhangra, and full-crowd energy — shot to keep the beat and the chaos both.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <circle cx="12" cy="12" r="7" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    ),
  },
  {
    title: "Behind the Scenes",
    desc: "The setup, the prep, the quiet moments before the main event goes live.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <rect x="3" y="6" width="14" height="10" rx="1.5" />
        <path d="M17 10l4-2.5v9L17 14" />
      </svg>
    ),
  },
];

const stats = [
  { label: "Celebrations Filmed", value: "50+" },
  { label: "Reels Delivered", value: "80+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Years of Experience", value: "2+" },
];

const testimonials = [
  {
    quote:
      "Our avow was small and personal, and the film still feels big — every glance, every laugh is there.",
    name: "Simran Kaur",
    role: "Bride",
  },
  {
    quote:
      "The baby shower film captured every game and every reaction. We rewatch it more than we expected to.",
    name: "Priya Malhotra",
    role: "Mom-to-be",
  },
  {
    quote:
      "The Punjabi festival coverage had the energy of the dhol and the whole crowd dancing — exactly how it felt live.",
    name: "Harpreet Singh",
    role: "Event Organizer",
  },
];

// ---- Films & reels ----------------------------------------------------------
const films = [
  { id: "eeMzZo-zFa8", label: "Avow Ceremony" },
  { id: "CgWTsRe8PfA", label: "Baby Shower" },
  { id: "PgajpALfRYI", label: "Punjabi Festival" },
  { id: "DjZvQ081q8I", label: "Behind the Scenes" },
];

const reels = [{ id: "QFTUg0c04qg", label: "Behind the Scenes Reel" }];

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

export default function CelebrationsCoverage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* ---------------------------------------------------------------- */}
      {/* HERO */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
            alt="Guests celebrating together at a festive gathering"
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
              Celebrations Coverage
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
              THE VOWS, <span style={{ color: GOLD }}>THE JOY,</span>
              <br />
              THE MOMENTS IN BETWEEN.
            </h1>
            <p className="mt-6 text-neutral-300 text-lg max-w-xl">
              Avow ceremonies, baby showers, and full Punjabi festivities — plus
              the behind-the-scenes footage that shows how it all came together.
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
              Every Celebration,{" "}
              <span style={{ color: GOLD }}>Start to Post.</span>
            </h2>
            <p className="mt-5 text-neutral-600">
              One booking covers the full film and every short-form cut you will
              want to share afterward.
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
      {/* FILMS */}
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
              Four Celebrations,
              <br />
              <span style={{ color: GOLD }}>One Body of Work.</span>
            </h2>
            <p className="mt-5 text-neutral-300">
              No cuts, no filler — just each event the way the room lived it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-14">
            {films.map((f) => (
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
              A Look
              <br />
              <span style={{ color: GOLD }}>Behind the Scenes.</span>
            </h2>
            <p className="mt-5 text-neutral-600">
              A vertical cut built for the feed — the setup and prep before the
              main event goes live.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            {reels.map((r) => (
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
            What Clients Say
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
            Book Your Next
            <br />
            Celebration.
          </h3>
          <p className="text-neutral-900/80 max-w-sm text-sm">
            Four films, a behind-the-scenes reel, one booking — get in touch to
            lock in a date.
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
