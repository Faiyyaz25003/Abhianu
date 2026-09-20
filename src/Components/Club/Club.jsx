"use client";

import React from "react";

// -----------------------------------------------------------------------------
// Studio Frame & Light — DJ & Nightlife Portfolio (Next.js + Tailwind CSS)
// Single-file page component. No navbar / footer included, matching the
// wedding page's pattern. Reads as the same photographer/videographer's
// nightlife arm: DJ Artist coverage and Night Club coverage, each mixing
// full film embeds with vertical reel embeds.
// -----------------------------------------------------------------------------

const GOLD = "#C9A24B";
const INK = "#1B1815";

const specialties = [
  {
    title: "DJ Sets",
    desc: "Booth angles, crowd energy, and the drop — shot live, set after set.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2.2" />
        <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
      </svg>
    ),
  },
  {
    title: "Night Club Coverage",
    desc: "Full nights on the floor — lights, crowd, and the room at its peak.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <path d="M6 21V10.5L12 3l6 7.5V21" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Artist Reels",
    desc: "Short-form cuts built for the feed — fast edits, real crowd reactions.",
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
    title: "Event Highlights",
    desc: "Festivals, tours, and one-off nights, cut into films worth sharing.",
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
  { label: "Club Nights Covered", value: "150+" },
  { label: "DJ Sets Filmed", value: "80+" },
  { label: "Cities on Tour", value: "12" },
  { label: "Years in Nightlife", value: "5+" },
];

const testimonials = [
  {
    quote:
      "The reels went up the same night and the crowd shots alone got us more bookings than any promo we've paid for.",
    name: "DJ Kairo",
    role: "Touring DJ",
  },
  {
    quote:
      "Knows how to move through a packed floor without ever being in the way. The footage still looks like the room felt.",
    name: "Vault Nightclub",
    role: "Venue, Resident Coverage",
  },
  {
    quote:
      "We handed over one brief — capture the set — and got back a highlight film and eight reels ready to post.",
    name: "DJ Reya",
    role: "Artist Reel Package",
  },
];

// ---- DJ Artist ---------------------------------------------------------------
const djArtistFilm = [
  { id: "3SGoyibcRTo", label: "Full Set — DJ Artist Film" },
];

const djArtistReels = [
  { id: "bClQbhQfA9U", label: "Crowd Reaction, Drop 1" },
  { id: "rNRzUHd0D5o", label: "Booth Cam" },
  { id: "XW8ACFLpxJA", label: "Opening Track" },
  { id: "RAg8aHGjU6Y", label: "Floor Fill" },
  { id: "Vndvah3_4nk", label: "Encore" },
  { id: "U1kFvqNl_RU", label: "Backstage to Booth" },
  { id: "cf5jTFkQBXI", label: "Peak Hour" },
  { id: "KMR-ihEXRSw", label: "Closing Set" },
];

// ---- Night Club ---------------------------------------------------------------
const nightClubReels = [
  { id: "rqPIdWT2sUw", label: "Friday Night, Full Floor" },
  { id: "D_ngIBOlmYc", label: "Lights Down, Bass Up" },
  { id: "7hbWkUfR2Aw", label: "Last Call" },
];

// -----------------------------------------------------------------------------
// Reusable embed pieces
// -----------------------------------------------------------------------------

function FilmCard({ id, label, fill = false }) {
  return (
    <div className={`flex flex-col gap-3 min-w-0 ${fill ? "lg:h-full" : ""}`}>
      <div
        className={`w-full aspect-video ${fill ? "lg:aspect-auto lg:flex-1 lg:min-h-0" : ""} rounded-xl overflow-hidden bg-neutral-900 ring-1 ring-white/10`}
      >
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="text-sm text-neutral-400">{label}</p>
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
      <p className="text-sm text-neutral-400">{label}</p>
    </div>
  );
}

// A reusable "nightlife-category" section: eyebrow + heading + intro on one
// side or above, a row of full films, then a row of vertical reels below.
function NightlifeCategorySection({
  eyebrow,
  heading,
  headingAccent,
  intro,
  films,
  reelsList,
  dark,
  layout = "stacked", // "stacked" (films row, then reels row) or "split" (reels rail beside one big film)
}) {
  const bgClass = dark
    ? "bg-neutral-950 text-white"
    : "bg-neutral-50 text-neutral-900";
  const subText = dark ? "text-neutral-300" : "text-neutral-600";
  const reelLabelClass = dark ? "text-neutral-400" : "text-neutral-500";

  return (
    <section className={`${bgClass} py-20 lg:py-24`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p
            className="uppercase text-sm font-semibold tracking-widest"
            style={{ color: GOLD }}
          >
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
            {heading}
            <br />
            <span style={{ color: GOLD }}>{headingAccent}</span>
          </h2>
          <p className={`mt-5 ${subText}`}>{intro}</p>
        </div>

        {layout === "split" ? (
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 lg:items-stretch">
            {/* Reels rail */}
            {reelsList && reelsList.length > 0 && (
              <div className="flex flex-col gap-4 order-2 lg:order-1 lg:shrink-0">
                <p
                  className={`text-xs font-semibold tracking-widest uppercase ${reelLabelClass}`}
                >
                  Reels
                </p>
                <div className="flex gap-4 flex-wrap">
                  {reelsList.map((r) => (
                    <ReelCard key={r.id} id={r.id} label={r.label} />
                  ))}
                </div>
              </div>
            )}

            {/* Featured film — labeled to match the reels rail, and capped a bit shorter */}
            {films && films.length > 0 && (
              <div className="order-1 lg:order-2 lg:flex-1 flex flex-col gap-4 min-w-0">
                <p
                  className={`text-xs font-semibold tracking-widest uppercase ${reelLabelClass}`}
                >
                  Video
                </p>
                <div className="flex-1 min-h-0 flex flex-col gap-10 lg:max-h-[440px]">
                  {films.map((f) => (
                    <FilmCard key={f.id} id={f.id} label={f.label} fill />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            {films && films.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
                {films.map((f) => (
                  <FilmCard key={f.id} id={f.id} label={f.label} />
                ))}
              </div>
            )}

            {reelsList && reelsList.length > 0 && (
              <div>
                <p
                  className={`text-xs font-semibold tracking-widest uppercase mb-6 ${reelLabelClass}`}
                >
                  Reels
                </p>
                <div className="flex flex-wrap gap-8">
                  {reelsList.map((r) => (
                    <ReelCard key={r.id} id={r.id} label={r.label} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default function Nightlife() {
  return (
    <main className="bg-white text-neutral-900">
      {/* ---------------------------------------------------------------- */}
      {/* HERO */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571266028243-d220c9c3b31d?q=80&w=1600&auto=format&fit=crop"
            alt="DJ performing to a packed club floor under stage lights"
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
              DJ & Nightlife Photography
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
              THE SET, <span style={{ color: GOLD }}>THE ROOM,</span>
              <br />
              THE NIGHT IT HAPPENED.
            </h1>
            <p className="mt-6 text-neutral-300 text-lg max-w-xl">
              Live coverage for DJs and clubs — full films, booth-to-floor
              reels, and highlight cuts ready to post before the night is even
              over.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20book%20a%20shoot.",
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
              The Night, <span style={{ color: GOLD }}>As It Happens.</span>
            </h2>
            <p className="mt-5 text-neutral-600">
              From the first track to last call — I cover DJ sets and club
              nights the way the crowd actually experiences them.
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
      {/* DJ ARTIST */}
      {/* ---------------------------------------------------------------- */}
      <NightlifeCategorySection
        eyebrow="DJ Artist"
        heading="One Set,"
        headingAccent="Cut a Dozen Ways."
        intro="A full set film alongside the reels pulled from it — booth angles, crowd reactions, and the moments built for the feed."
        films={djArtistFilm}
        reelsList={djArtistReels}
        dark={false}
      />

      {/* ---------------------------------------------------------------- */}
      {/* NIGHT CLUB */}
      {/* ---------------------------------------------------------------- */}
      <NightlifeCategorySection
        eyebrow="Night Club"
        heading="The Room,"
        headingAccent="At Its Peak."
        intro="Wide shots of the floor, the lights, and the crowd — short cuts that capture what a club night actually feels like."
        reelsList={nightClubReels}
        dark={true}
      />

      {/* ---------------------------------------------------------------- */}
      {/* STATS */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-neutral-50 py-14">
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
            What Artists & Venues Say
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
            Night Out.
          </h3>
          <p className="text-neutral-900/80 max-w-sm text-sm">
            Weekends fill up fast — get in touch to lock in a date for your set
            or venue.
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
