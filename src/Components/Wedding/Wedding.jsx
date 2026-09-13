"use client";

import React from "react";

// -----------------------------------------------------------------------------
// Studio Frame & Light — Photography Portfolio (Next.js + Tailwind CSS)
// Single-file page component. No navbar / footer included, as before.
// Corporate-event content removed. Now reads as a wedding & portrait
// photographer's site: Pre-Wedding, Wedding, and Engagement portfolios,
// each mixing a full film embed with vertical reel embeds.
// -----------------------------------------------------------------------------

const GOLD = "#C9A24B";
const INK = "#1B1815";

const specialties = [
  {
    title: "Pre-Wedding Films",
    desc: "Golden-hour walks and quiet glances, shot on location before the big day.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7" />
      </svg>
    ),
  },
  {
    title: "Wedding Coverage",
    desc: "Every ritual, every reaction — documented as it happens, from vows to farewell.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <path d="M8 21c-2-1-3.2-2.7-3.2-5A4.8 4.8 0 0 1 9.6 11.2 4.8 4.8 0 0 1 14.4 16c0 2.3-1.2 4-3.2 5" />
        <circle cx="9" cy="9" r="3" />
        <circle cx="16" cy="9" r="3" />
      </svg>
    ),
  },
  {
    title: "Engagements",
    desc: "The promise before the forever — warm, candid, unposed celebration.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <path d="M12 20s-7-4.4-9.3-8.8C1.3 8 2.7 5 6 5c2 0 3.4 1.1 4 2.4C10.6 6.1 12 5 14 5c3.3 0 4.7 3 3.3 6.2C15 15.6 12 20 12 20Z" />
      </svg>
    ),
  },
  {
    title: "Portrait Sessions",
    desc: "One subject, honest light — solo shoots, couples, and family portraits.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8"
        stroke={GOLD}
        strokeWidth="1.6"
      >
        <circle cx="12" cy="8.5" r="3.5" />
        <path d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" />
      </svg>
    ),
  },
];

const stats = [
  { label: "Weddings Shot", value: "120+" },
  { label: "Couples Photographed", value: "300+" },
  { label: "Years Behind the Lens", value: "6+" },
  { label: "Cities Traveled To", value: "18" },
];

const testimonials = [
  {
    quote:
      "Every frame felt like our actual love story, not a stock wedding shoot. We still cry watching the film back.",
    name: "Aarav & Diya",
    role: "Married in Udaipur",
  },
  {
    quote:
      "Calm, unobtrusive, and somehow everywhere at once. The candid shots were better than our posed ones.",
    name: "Rohan & Meera",
    role: "Wedding Clients",
  },
  {
    quote:
      "Our families were skeptical about a pre-wedding shoot until they saw the film. Worth every rupee.",
    name: "Kabir & Ananya",
    role: "Pre-Wedding Clients",
  },
];

// ---- Pre-Wedding -----------------------------------------------------------
const preWeddingFilms = [
  { id: "2E-i4lluor8", label: "Aarav & Diya — Pre-Wedding Film" },
  { id: "lCHzuIXOkeM", label: "Rohan & Meera — Pre-Wedding Film" },
  { id: "y4mVbhmN0zk", label: "Kabir & Ananya — Pre-Wedding Film" },
];

const preWeddingReels = [
  { id: "QS3GBM9_6Zs", label: "Golden Hour, Udaipur" },
  { id: "ZaPJt43tj2I", label: "Monsoon Promises" },
];

// ---- Wedding ----------------------------------------------------------------
const weddingFilm = [
  { id: "rxNS8tsctMQ", label: "Vivaan & Isha — The Wedding Film" },
];

const weddingReels = [
  { id: "MxorPVWh7JU", label: "The Vows" },
  { id: "oJhd4PwAfWg", label: "Baraat Entry" },
];

// ---- Engagement ---------------------------------------------------------------
const engagementFilm = [
  { id: "uG6851PAwEY", label: "An Evening of Promises — Engagement Film" },
  { id: "qY0JSdrnlsk", label: "Saying Yes" },
  { id: "Hhupv-C24QQ", label: "The Ring Ceremony" },
];

const engagementReels = [
  { id: "pPeBiZ3Pg7Y", label: "First Dance" },
  { id: "FY06p5ScbpY", label: "Pheras" },
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

// A reusable "wedding-category" section: eyebrow + heading + intro on one
// side or above, a row of full films, then a row of vertical reels below.
function WeddingCategorySection({
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
                <div className="flex gap-4">
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

export default function Wedding() {
  return (
    <main className="bg-white text-neutral-900">
      {/* ---------------------------------------------------------------- */}
      {/* HERO */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
            alt="Bride and groom walking together at golden hour"
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
              Wedding & Portrait Photography
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
              STORIES <span style={{ color: GOLD }}>WORTH KEEPING,</span>
              <br />
              MOMENTS WORTH RELIVING.
            </h1>
            <p className="mt-6 text-neutral-300 text-lg max-w-xl">
              Honest, unposed photography and film for weddings, engagements,
              and the everyday moments in between — told the way they actually
              happened.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                className="px-7 py-3.5 font-semibold tracking-wide text-neutral-950 hover:brightness-95 transition"
                style={{ backgroundColor: GOLD }}
              >
                VIEW PORTFOLIO
              </button>
              <button className="px-7 py-3.5 font-semibold tracking-wide border border-white/70 hover:bg-white hover:text-neutral-950 transition">
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
              Love, Documented <span style={{ color: GOLD }}>Honestly.</span>
            </h2>
            <p className="mt-5 text-neutral-600">
              From the first pre-wedding walk to the last dance at the reception
              — I photograph the in-between moments people actually remember.
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
      {/* PRE-WEDDING */}
      {/* ---------------------------------------------------------------- */}
      <WeddingCategorySection
        eyebrow="Pre-Wedding"
        heading="Love Stories,"
        headingAccent="Told Before the Big Day."
        intro="Golden hour walks, candid laughter, and quiet glances — pre-wedding films and reels that capture a couple's story before it becomes one."
        films={preWeddingFilms}
        reelsList={preWeddingReels}
        dark={false}
      />

      {/* ---------------------------------------------------------------- */}
      {/* WEDDING */}
      {/* ---------------------------------------------------------------- */}
      <WeddingCategorySection
        eyebrow="Wedding"
        heading="The Big Day,"
        headingAccent="Captured in Full."
        intro="From the vows to the baraat, every ritual and every reaction — documented as it happens, edited into a film worth reliving."
        films={weddingFilm}
        reelsList={weddingReels}
        dark={true}
        layout="split"
      />

      {/* ---------------------------------------------------------------- */}
      {/* ENGAGEMENT */}
      {/* ---------------------------------------------------------------- */}
      <WeddingCategorySection
        eyebrow="Engagement"
        heading="The Promise,"
        headingAccent="Before the Forever."
        intro="Ring ceremonies, first dances, and the moment two families become one — engagement films and reels full of warmth and celebration."
        films={engagementFilm}
        reelsList={engagementReels}
        dark={false}
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
            What Couples Say
            <br />
            <span style={{ color: GOLD }}>About the Films</span>
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
            Let&apos;s Tell Your
            <br />
            Story Next.
          </h3>
          <p className="text-neutral-900/80 max-w-sm text-sm">
            Dates fill up fast in wedding season — get in touch to check
            availability.
          </p>
          <button className="px-7 py-3.5 font-semibold tracking-wide bg-neutral-950 text-white hover:bg-neutral-800 transition">
            GET IN TOUCH
          </button>
        </div>
      </section>
    </main>
  );
}
