"use client";

import Link from "next/link";
import Navbar from "@/Components/Layout/Navbar/Navbar";
import { useState } from "react";


const Icon = {
  Camera: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M4 8h3l2-2h6l2 2h3v11H4V8z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="13.5" r="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Medal: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 7 21l5-2.5L17 21l-2-7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Smile: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8" strokeLinecap="round" />
      <path d="M9 10h.01M15 10h.01" strokeLinecap="round" />
    </svg>
  ),
  Rings: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <circle cx="9" cy="14" r="4.2" />
      <circle cx="15" cy="14" r="4.2" />
    </svg>
  ),
  Globe: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9z" strokeLinecap="round" />
    </svg>
  ),
  Home: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M4 11 12 4l8 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9h12v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Calendar: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="4" y="5.5" width="16" height="14" rx="1.5" />
      <path d="M4 10h16M8 3.5v3M16 3.5v3" strokeLinecap="round" />
    </svg>
  ),
  Mic: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" strokeLinecap="round" />
    </svg>
  ),
  Gift: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="4" y="9" width="16" height="11" rx="1" />
      <path d="M4 9h16M12 9v11" strokeLinecap="round" />
      <path d="M12 9c-2 0-3.2-1-3.2-2.5S9.5 4 11 4c1.6 0 1.6 2.5 1 5zM12 9c2 0 3.2-1 3.2-2.5S13.5 4 12 4c-1.6 0-1.6 2.5-1 5z" />
    </svg>
  ),
  Stroller: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <circle cx="8" cy="19" r="1.6" />
      <circle cx="16" cy="19" r="1.6" />
      <path d="M5 8c4-1 9-1 12 1.5M6 8v9M6 8 5 5M9 17h9l1.5-6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Briefcase: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3.5" y="8" width="17" height="11" rx="1.5" />
      <path d="M8.5 8V6a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 6v2M3.5 13h17" strokeLinecap="round" />
    </svg>
  ),
  Users: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3 20c0-3 2.7-5.2 6-5.2s6 2.2 6 5.2" strokeLinecap="round" />
      <circle cx="17" cy="9.5" r="2.4" />
      <path d="M15.5 15.2c2.4.3 4.5 2.2 4.5 4.8" strokeLinecap="round" />
    </svg>
  ),
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2C10.5 19.7 4.3 13.5 3 7.2A2 2 0 0 1 5 4z" />
    </svg>
  ),
  Mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4 6.5 12 13l8-6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Quote: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M9.5 6.5c-3 1.4-4.5 3.6-4.5 6.6 0 2.5 1.5 4.2 3.6 4.2 1.8 0 3.1-1.3 3.1-3 0-1.6-1.1-2.8-2.6-2.9.3-1.9 1.6-3.3 3.4-4.1L9.5 6.5zm9 0c-3 1.4-4.5 3.6-4.5 6.6 0 2.5 1.5 4.2 3.6 4.2 1.8 0 3.1-1.3 3.1-3 0-1.6-1.1-2.8-2.6-2.9.3-1.9 1.6-3.3 3.4-4.1l-3-.8z" />
    </svg>
  ),
  Star: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.3 6.6L12 17.3 6.1 20.5l1.3-6.6-4.9-4.6 6.6-.7L12 2.5z" />
    </svg>
  ),
  Facebook: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M13.5 21v-8h2.6l.4-3H13.5V8.2c0-.9.3-1.5 1.6-1.5H16.6V4.1C16.3 4 15.4 4 14.3 4c-2.3 0-3.9 1.4-3.9 4v2h-2.6v3H10.4v8h3.1z" />
    </svg>
  ),
  Instagram: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  Youtube: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5z" fill="currentColor" stroke="none" />
    </svg>
  ),
  Pinterest: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 18c.6-2 1.4-5.2 1.4-5.2a2.3 2.3 0 0 1-.2-1c0-1 .6-1.7 1.3-1.7.6 0 .9.5.9 1.1 0 .6-.4 1.6-.6 2.5-.2.7.4 1.3 1.1 1.3 1.3 0 2.2-1.7 2.2-3.6 0-1.5-1-2.6-2.9-2.6-2.1 0-3.4 1.6-3.4 3.3 0 .6.2 1 .5 1.4.1.2.1.2.1.4l-.3 1c0 .2-.2.3-.4.2-1.1-.5-1.6-1.7-1.6-3.1 0-2.3 1.9-5 5.7-5 3 0 5 2.2 5 4.5 0 3.1-1.7 5.4-4.2 5.4-.8 0-1.6-.5-1.9-1 0 0-.4 1.7-.5 2.1-.2.6-.5 1.2-.8 1.7" />
    </svg>
  ),
};

/* ---------------------- Data ---------------------- */
const services = [
  {
    title: "Wedding",
    href: "/wedding",
    desc: "Beautiful wedding photography to capture your special moments forever.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    icon: Icon.Rings,
  },
  {
    title: "Night Club",
    href: "/club",
    desc: "High-energy nightlife photography that brings out the best of every moment.",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop",
    icon: Icon.Globe,
  },
  {
    title: "Real Estate",
    href: "/realestate",
    desc: "Professional real estate photography that showcases spaces beautifully and effectively.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    icon: Icon.Home,
  },
  {
    title: "Event",
    href: "#event-types", // navbar me Event ka apna page nahi hai, sirf dropdown hai
    desc: "We cover all kinds of events with creativity, professionalism and attention to detail.",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
    icon: Icon.Calendar,
  },
];

const occasions = [
  {
    title: "Anchoring",
    href: "/anchoring",
    desc: "Professional anchoring for events, shows, and celebrations.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    icon: Icon.Mic,
  },
  {
    title: "Birthday",
    href: "/devotional",
    desc: "Colorful and fun-filled birthday photography for all ages.",
    img: "https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?q=80&w=800&auto=format&fit=crop",
    icon: Icon.Gift,
  },
  {
    title: "Baby Ceremony",
    href: "/CelebrationsCoverage",
    desc: "Cherish your little one's special moments with our photography.",
    img: "https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=800&auto=format&fit=crop",
    icon: Icon.Stroller,
  },
  {
    title: "Corporate",
    href: "/corporate",
    desc: "Corporate events, conferences, and professional gatherings.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    icon: Icon.Briefcase,
  },
];

const portfolioFilters = ["All", "Wedding", "Night Club", "Real Estate", "Events"];

const portfolioItems = [
  { cat: "Wedding", img: "/_DSC1632.jpg" },
  { cat: "Night Club", img: "/991A0039-Enhanced-NR-1.jpg" },
  { cat: "Real Estate", img: "/991A0075-Enhanced-NR-1.jpg" },
  { cat: "Events", img: "/991A7602-Enhanced-NR-2-1.jpg" },
  { cat: "Wedding", img: "/DSC00025-Enhanced-NR.jpg" },
  { cat: "Real Estate", img: "/2026091013373162.jpg.jpeg" },
  { cat: "Wedding", img: "/2026091013480783.jpg.jpeg" },
  { cat: "Real Estate", img: "/DSC00935.jpg" },
];

const stats = [
  { icon: Icon.Camera, num: "1500+", label: "Projects Completed" },
  { icon: Icon.Smile, num: "800+", label: "Happy Clients" },
  { icon: Icon.Medal, num: "10+", label: "Years Experience" },
  { icon: Icon.Users, num: "50+", label: "Team Members" },
];

const testimonials = [
  {
    name: "Ananya Kapoor",
    role: "Bride, Wedding Shoot",
    quote:
      "They captured our wedding like they were part of the family, not just documenting it. Every photo feels warm and real, we still get emotional looking through the album.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    role: "Founder, Client Real Estate",
    quote:
      "Our property listings started getting way more inquiries after we switched to their photography. Clean, bright, and they know exactly how to make a space feel inviting.",
    img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Simran Oberoi",
    role: "HR Head, Corporate Event",
    quote:
      "Professional, punctual, and incredibly easy to work with on a tight event schedule. The turnaround time on final photos was faster than any vendor we've used before.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
];

const navLinks = ["Home", "About", "Services", "Portfolio", "Contact"];

/* ---------------------- Small Reusable Bits ---------------------- */
function EyebrowHeading({ eyebrow, title }) {
  return (
    <div className="text-center mb-12">
      <p className="text-amber-600 tracking-[0.2em] text-xs font-semibold mb-3">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl md:text-4xl text-slate-900">{title}</h2>
      <span className="block w-14 h-[3px] bg-amber-500 mx-auto mt-4 rounded-full" />
    </div>
  );
}

function ServiceCard({ item }) {
  const IconComp = item.icon;
  return (
    <Link
      href={item.href}
      className="block bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-amber-600">
          <IconComp className="w-5 h-5" />
        </div>
      </div>
      <div className="pt-9 pb-6 px-5 text-center">
        <h3 className="font-serif text-lg tracking-wide text-slate-900 uppercase mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4">{item.desc}</p>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 uppercase tracking-wide group-hover:gap-2 transition-all">
          Explore More <Icon.Arrow className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <Icon.Quote className="w-8 h-8 text-amber-200 mb-4" />
      <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-6">
        “{item.quote}”
      </p>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Icon.Star key={i} className="w-3.5 h-3.5 text-amber-500" />
        ))}
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <img
          src={item.img}
          alt={item.name}
          className="w-11 h-11 rounded-full object-cover"
        />
        <div>
          <p className="font-serif text-sm text-slate-900">{item.name}</p>
          <p className="text-[11px] text-slate-500 uppercase tracking-wide">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------------- Page ---------------------- */
export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);

  const filteredPortfolio =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.cat === activeFilter);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">

      <Navbar/>
      {/* ---------- Hero ---------- */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-14 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-amber-600 tracking-[0.2em] text-xs font-semibold mb-4">
            WE CAPTURE
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl leading-[1.1] text-slate-900">
            MOMENTS
            <br />
            THAT LAST
            <br />
            <span className="italic text-amber-500 font-normal">Forever</span>
          </h1>
          <span className="block w-16 h-[3px] bg-amber-500 mt-6 mb-6 rounded-full" />
          <p className="text-slate-500 leading-relaxed max-w-md mb-8">
            From weddings to corporate events, we capture every moment with
            creativity and passion.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-amber-500 hover:bg-amber-600 transition-colors text-white text-sm font-semibold px-7 py-3 rounded-md"
            >
              BOOK NOW
            </a>
            <a
              href="#"
              className="border border-slate-300 hover:border-slate-900 transition-colors text-slate-800 text-sm font-semibold px-7 py-3 rounded-md"
            >
              VIEW PORTFOLIO
            </a>
          </div>
          <div className="flex gap-2 mt-10">
            <span className="w-6 h-2 rounded-full bg-amber-500" />
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="w-2 h-2 rounded-full bg-slate-200" />
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop"
              alt="Wedding couple"
              className="w-full h-[420px] md:h-[480px] object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[92%] bg-white rounded-xl shadow-lg border border-slate-100 px-6 py-5 grid grid-cols-3 gap-4">
            {[
              { icon: Icon.Medal, num: "10+", label: "Years Experience" },
              { icon: Icon.Camera, num: "1500+", label: "Projects Completed" },
              { icon: Icon.Smile, num: "800+", label: "Happy Clients" },
            ].map((s) => {
              const I = s.icon;
              return (
                <div key={s.label} className="flex flex-col items-center text-center gap-1.5">
                  <I className="w-5 h-5 text-amber-600" />
                  <p className="font-serif text-lg text-slate-900">{s.num}</p>
                  <p className="text-[11px] text-slate-500 leading-tight">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-8">
        <EyebrowHeading eyebrow="OUR SERVICES" title="What We Offer" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <ServiceCard key={s.title} item={s} />
          ))}
        </div>
      </section>

      {/* ---------- Event Types ---------- */}
      <section
        id="event-types"
        className="max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-8 scroll-mt-24"
      >
        <EyebrowHeading eyebrow="EVENT TYPES" title="We Cover Every Occasion" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {occasions.map((o) => (
            <ServiceCard key={o.title} item={o} />
          ))}
        </div>
      </section>

      {/* ---------- Portfolio ---------- */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-8">
        <EyebrowHeading eyebrow="OUR PORTFOLIO" title="Moments We Captured" />

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {portfolioFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 text-xs font-semibold uppercase tracking-wide rounded-md transition-colors ${
                activeFilter === f
                  ? "bg-amber-500 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-amber-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredPortfolio.map((p, i) => (
            <div
              key={i}
              className="relative rounded-lg overflow-hidden aspect-square group cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.cat}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors flex items-end p-3 opacity-0 group-hover:opacity-100">
                <span className="text-white text-xs font-semibold uppercase tracking-wide">
                  {p.cat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-8">
        <EyebrowHeading eyebrow="TESTIMONIALS" title="What Our Clients Say" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} item={t} />
          ))}
        </div>
      </section>

      {/* ---------- Stats Strip ---------- */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 mt-24">
        <div className="bg-amber-50/60 border border-amber-100 rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-amber-100">
          {stats.map((s) => {
            const I = s.icon;
            return (
              <div
                key={s.label}
                className="flex flex-col items-center gap-2 py-10 px-4 text-center"
              >
                <I className="w-7 h-7 text-amber-600" />
                <p className="font-serif text-2xl text-slate-900">{s.num}</p>
                <p className="text-[11px] tracking-wide text-slate-500 uppercase">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 mt-24">
        <div className="grid md:grid-cols-2 bg-slate-50 rounded-2xl overflow-hidden">
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <p className="text-amber-600 tracking-[0.2em] text-xs font-semibold mb-4">
              LETS CAPTURE YOUR MOMENTS
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 leading-tight">
              Ready to Create
              <br />
              <span className="italic text-amber-500 font-normal">
                Something Amazing?
              </span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#"
                className="bg-amber-500 hover:bg-amber-600 transition-colors text-white text-sm font-semibold px-7 py-3 rounded-md"
              >
                BOOK NOW
              </a>
              <a
                href="#"
                className="border border-slate-300 hover:border-slate-900 transition-colors text-slate-800 text-sm font-semibold px-7 py-3 rounded-md"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="h-64">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop"
              alt="Photographer at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
}