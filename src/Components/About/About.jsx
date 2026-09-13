"use client";

import { useState } from "react";
import Navbar from "../Layout/Navbar/Navbar";

const Icon = {
  Camera: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <path
        d="M4 8h3l2-2h6l2 2h3v11H4V8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="13.5"
        r="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Medal: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <circle cx="12" cy="9" r="5" />
      <path
        d="M9 13.5 7 21l5-2.5L17 21l-2-7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Smile: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <circle cx="12" cy="12" r="9" />
      <path
        d="M8.5 14.5c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8"
        strokeLinecap="round"
      />
      <path d="M9 10h.01M15 10h.01" strokeLinecap="round" />
    </svg>
  ),
  Users: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3 20c0-3 2.7-5.2 6-5.2s6 2.2 6 5.2" strokeLinecap="round" />
      <circle cx="17" cy="9.5" r="2.4" />
      <path d="M15.5 15.2c2.4.3 4.5 2.2 4.5 4.8" strokeLinecap="round" />
    </svg>
  ),
  Target: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Heart: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <path
        d="M12 20s-7.2-4.6-9.5-9C.9 7.7 2.5 4.5 5.8 4c2-.3 3.8.6 6.2 3 2.4-2.4 4.2-3.3 6.2-3 3.3.5 4.9 3.7 3.3 7-2.3 4.4-9.5 9-9.5 9z"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Bulb: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <path
        d="M9 18h6M9.5 21h5M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6v.5h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Clock: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Tag: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <path
        d="M11.5 3.5H5a1.5 1.5 0 0 0-1.5 1.5v6.5c0 .4.2.8.4 1.1l8.5 8.5c.6.6 1.6.6 2.2 0l6.5-6.5c.6-.6.6-1.6 0-2.2L12.6 3.9c-.3-.3-.7-.4-1.1-.4z"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="8" r="1.4" />
    </svg>
  ),
  Facebook: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M13.5 21v-8h2.6l.4-3H13.5V8.2c0-.9.3-1.5 1.6-1.5H16.6V4.1C16.3 4 15.4 4 14.3 4c-2.3 0-3.9 1.4-3.9 4v2h-2.6v3H10.4v8h3.1z" />
    </svg>
  ),
  Instagram: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  Youtube: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path
        d="M10.5 9.5v5l4.5-2.5-4.5-2.5z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  ),
  Pinterest: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 18c.6-2 1.4-5.2 1.4-5.2a2.3 2.3 0 0 1-.2-1c0-1 .6-1.7 1.3-1.7.6 0 .9.5.9 1.1 0 .6-.4 1.6-.6 2.5-.2.7.4 1.3 1.1 1.3 1.3 0 2.2-1.7 2.2-3.6 0-1.5-1-2.6-2.9-2.6-2.1 0-3.4 1.6-3.4 3.3 0 .6.2 1 .5 1.4.1.2.1.2.1.4l-.3 1c0 .2-.2.3-.4.2-1.1-.5-1.6-1.7-1.6-3.1 0-2.3 1.9-5 5.7-5 3 0 5 2.2 5 4.5 0 3.1-1.7 5.4-4.2 5.4-.8 0-1.6-.5-1.9-1 0 0-.4 1.7-.5 2.1-.2.6-.5 1.2-.8 1.7" />
    </svg>
  ),
  Twitter: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M20.5 6.2c-.6.3-1.3.5-2 .6a3.4 3.4 0 0 0 1.5-1.9c-.7.4-1.4.7-2.2.9a3.4 3.4 0 0 0-5.8 3.1A9.7 9.7 0 0 1 4.9 5.4a3.4 3.4 0 0 0 1 4.5c-.5 0-1-.2-1.5-.4v.1c0 1.6 1.2 3 2.7 3.3-.5.1-1 .2-1.5.1.4 1.4 1.7 2.4 3.2 2.4A6.9 6.9 0 0 1 3 16.9a9.7 9.7 0 0 0 5.3 1.6c6.3 0 9.8-5.3 9.8-9.8v-.5c.7-.5 1.3-1.1 1.8-1.8z" />
    </svg>
  ),
  Linkedin: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M6.9 8.7H3.9V20h3v-11.3zM5.4 4c-1 0-1.7.7-1.7 1.6 0 .9.7 1.6 1.7 1.6.9 0 1.6-.7 1.6-1.6C7 4.7 6.3 4 5.4 4zM20.1 20h-3v-5.9c0-1.4-.5-2.3-1.7-2.3-1 0-1.5.6-1.8 1.3-.1.2-.1.6-.1.9V20h-3s.1-10.4 0-11.3h3v1.6c.4-.6 1.1-1.5 2.8-1.5 2.1 0 3.6 1.3 3.6 4.2V20z" />
    </svg>
  ),
  Mail: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path
        d="M4 6.5 12 13l8-6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Phone: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2C10.5 19.7 4.3 13.5 3 7.2A2 2 0 0 1 5 4z" />
    </svg>
  ),
  Pin: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  ),
  Chevron: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

/* ---------------------- Data ---------------------- */
const navLinks = [
  { label: "Home", active: false },
  { label: "About", active: true },
  { label: "Services", active: false, hasChevron: true },
  { label: "Portfolio", active: false },
  { label: "Contact", active: false },
];

const values = [
  {
    title: "Our Vision",
    desc: "To be recognized as the most trusted photography brand known for creativity, quality, and professionalism.",
    icon: Icon.Camera,
  },
  {
    title: "Our Mission",
    desc: "To capture emotions, create timeless memories and deliver exceptional photography experiences.",
    icon: Icon.Target,
  },
  {
    title: "Our Values",
    desc: "Passion, Creativity, Quality, Integrity and Customer Satisfaction are at the heart of what we do.",
    icon: Icon.Heart,
  },
];

const whyChooseUs = [
  {
    title: "Professional Team",
    desc: "Experienced and skilled photographers dedicated to perfection.",
    icon: Icon.Users,
  },
  {
    title: "High Quality",
    desc: "We use the best equipment to ensure stunning results.",
    icon: Icon.Camera,
  },
  {
    title: "Creative Approach",
    desc: "Unique ideas and creative storytelling in every shoot.",
    icon: Icon.Bulb,
  },
  {
    title: "On Time Delivery",
    desc: "We value your time and deliver on our promises.",
    icon: Icon.Clock,
  },
  {
    title: "Client Satisfaction",
    desc: "Our clients' happiness is our biggest achievement.",
    icon: Icon.Medal,
  },
  {
    title: "Affordable Packages",
    desc: "Premium photography services at competitive prices.",
    icon: Icon.Tag,
  },
];

const achievements = [
  { icon: Icon.Users, num: "500+", label: "Projects Completed" },
  { icon: Icon.Smile, num: "450+", label: "Happy Clients" },
  { icon: Icon.Medal, num: "2+", label: "Years Experience" },
];

const team = [
  {
    name: "Aarav Mehta",
    role: "Founder & Lead Photographer",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Rohit Sharma",
    role: "Cinematographer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Priya Nair",
    role: "Creative Photographer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Vikram Patel",
    role: "Editor & Creative Director",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop",
  },
];

const quickLinks = ["Home", "About Us", "Services", "Portfolio", "Contact"];
const serviceLinks = [
  "Wedding",
  "Night Club",
  "Real Estate",
  "Event",
  "Anchoring",
  "Birthday",
  "Baby Ceremony",
  "Corporate",
];

/* ---------------------- Small Reusable Bits ---------------------- */
function EyebrowHeading({ eyebrow, title, italic, align = "center" }) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <p className="text-amber-600 tracking-[0.2em] text-xs font-semibold mb-3">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
        {title}{" "}
        {italic && (
          <span className="italic text-amber-500 font-normal">{italic}</span>
        )}
      </h2>
      <span
        className={`block w-14 h-[3px] bg-amber-500 mt-4 rounded-full ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-9 h-9 rounded-full border-2 border-amber-500 flex items-center justify-center text-amber-600">
        <Icon.Camera className="w-4.5 h-4.5" />
      </div>
      <div className="leading-none">
        <p className="font-serif text-lg tracking-wide text-slate-900">
          CAPTURE
        </p>
        <p className="text-[9px] tracking-[0.3em] text-slate-400">
          PHOTOGRAPHY
        </p>
      </div>
    </div>
  );
}

/* ---------------------- Page ---------------------- */
export default function About() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Navbar />
      {/* ---------- Hero ---------- */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-14 pb-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-amber-600 tracking-[0.2em] text-xs font-semibold mb-4">
            ABOUT US
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl leading-[1.15] text-slate-900">
            We Capture
            <br />
            <span className="italic text-amber-500 font-normal">
              Moments That
            </span>
            <br />
            Last Forever
          </h1>
          <span className="block w-16 h-[3px] bg-amber-500 mt-6 mb-6 rounded-full" />
          <p className="text-slate-500 leading-relaxed max-w-md">
            We are a team of passionate photographers and storytellers who
            believe in capturing real emotions and creating timeless memories.
            Every click we take is a step towards preserving your special
            moments forever.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?q=80&w=1200&auto=format&fit=crop"
            alt="Photographer at work"
            className="w-full h-[300px] md:h-[420px] object-cover"
          />
        </div>
      </section>

      {/* ---------- Our Story ---------- */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-8 grid md:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden h-40">
              <img
                src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=600&auto=format&fit=crop"
                alt="Studio setup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden row-span-2">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop"
                alt="Wedding couple"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-40">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop"
                alt="Camera equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute left-1/2 bottom-8 -translate-x-1/2 md:left-[46%] bg-white rounded-xl shadow-lg border border-slate-100 px-7 py-5 flex flex-col items-center text-center gap-1.5">
            <Icon.Camera className="w-5 h-5 text-amber-600" />
            <p className="font-serif text-xl text-slate-900">15+</p>
            <p className="text-[11px] text-slate-500 leading-tight">
              Years of
              <br />
              Experience
            </p>
          </div>
        </div>

        <div>
          <p className="text-amber-600 tracking-[0.2em] text-xs font-semibold mb-3">
            OUR STORY
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 leading-tight mb-5">
            Turning Moments
            <br />
            <span className="italic text-amber-500 font-normal">
              Into Memories
            </span>
          </h2>
          <p className="text-slate-500 leading-relaxed mb-8">
            Founded with a passion for photography, we have been capturing
            beautiful moments for over 15 years. From weddings to corporate
            events, from birthdays to baby ceremonies, we make sure every moment
            becomes a memory to cherish forever.
          </p>

          <div className="flex flex-col gap-6">
            {values.map((v) => {
              const I = v.icon;
              return (
                <div key={v.title} className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full border border-amber-200 flex items-center justify-center text-amber-600">
                    <I className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="font-serif text-base text-slate-900 mb-1">
                      {v.title}
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Why Choose Us ---------- */}
      <section className="mt-24 bg-slate-50/70 py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <EyebrowHeading eyebrow="WHY CHOOSE US" title="What Sets Us Apart" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {whyChooseUs.map((w) => {
              const I = w.icon;
              return (
                <div
                  key={w.title}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="w-14 h-14 rounded-full border border-amber-200 flex items-center justify-center text-amber-600">
                    <I className="w-6 h-6" />
                  </div>
                  <p className="font-serif text-sm text-slate-900">{w.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Achievements ---------- */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-24 pb-4">
        <EyebrowHeading eyebrow="OUR ACHIEVEMENTS" title="Numbers That Speak" />
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
          {achievements.map((s) => {
            const I = s.icon;
            return (
              <div
                key={s.label}
                className="flex flex-col items-center gap-2 py-4 px-4 text-center"
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
    </div>
  );
}
