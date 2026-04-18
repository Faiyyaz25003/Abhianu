"use client";
import { useEffect, useRef, useState } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    year: "2012",
    title: "The First Frame",
    desc: "Picked up a borrowed DSLR at a cousin's wedding. Shot 400 photos, kept 3. Fell completely in love.",
  },
  {
    year: "2015",
    title: "Turned Professional",
    desc: "Left a corporate job to pursue photography full-time. First paid wedding shoot in Pune — never looked back.",
  },
  {
    year: "2017",
    title: "Studio Founded",
    desc: "Launched Abhianu Studio in Mumbai. Built a team, refined the visual language, and raised the bar.",
  },
  {
    year: "2019",
    title: "National Recognition",
    desc: "Featured in WedMeGood's Top Photographers of India. Shot destination weddings across Rajasthan, Goa & Kerala.",
  },
  {
    year: "2022",
    title: "500+ Love Stories",
    desc: "Crossed 500 weddings documented. Each one different. Each one deeply personal. Each one unforgettable.",
  },
  {
    year: "2024",
    title: "Still Shooting",
    desc: "Every morning is a new frame. Every client, a new story. The love for the craft only deepens with time.",
  },
];

const AWARDS = [
  { title: "Top Wedding Photographer", org: "WedMeGood India", year: "2019" },
  {
    title: "Best Candid Photography",
    org: "India Wedding Awards",
    year: "2020",
  },
  { title: "Excellence in Real Estate", org: "PropTech Summit", year: "2021" },
  {
    title: "Creative Lens Award",
    org: "Mumbai Photography Club",
    year: "2022",
  },
];

const PHILOSOPHY = [
  { word: "Light", desc: "I chase the golden hour like it owes me something." },
  { word: "Emotion", desc: "Technique is secondary. Feeling is everything." },
  {
    word: "Silence",
    desc: "The best shots happen in the quiet between moments.",
  },
  { word: "Truth", desc: "I don't pose love. I find it and freeze it." },
];

// ─── HOOKS ────────────────────────────────────────────────────────────────────

function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ─── REVEAL ───────────────────────────────────────────────────────────────────

function Reveal({ children, delay = 0, dir = "up", className = "" }) {
  const [ref, visible] = useScrollReveal();
  const t = {
    up: "translateY(48px)",
    left: "translateX(-48px)",
    right: "translateX(48px)",
    fade: "translateY(20px) scale(0.97)",
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : t[dir],
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── COUNTER ─────────────────────────────────────────────────────────────────

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useScrollReveal(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const num = parseInt(target);
    const step = Math.ceil(num / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [visible, target]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function About() {
  const [heroReady, setHeroReady] = useState(false);
  const [activePhilo, setActivePhilo] = useState(0);
  const parallaxRef = useRef(null);

  useEffect(() => {
    setHeroReady(true);
    const onScroll = () => {
      if (parallaxRef.current)
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.28}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="bg-[#080808] text-white min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .sans { font-family: 'DM Sans', sans-serif; }

        /* HERO ENTERS */
        .h1 { animation: fup 1.1s 0.1s cubic-bezier(0.16,1,0.3,1) forwards; opacity:0; }
        .h2 { animation: fup 1.1s 0.3s cubic-bezier(0.16,1,0.3,1) forwards; opacity:0; }
        .h3 { animation: fup 1.1s 0.5s cubic-bezier(0.16,1,0.3,1) forwards; opacity:0; }
        .h4 { animation: fup 1.1s 0.65s cubic-bezier(0.16,1,0.3,1) forwards; opacity:0; }
        @keyframes fup { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:none} }

        /* GOLD */
        .gold { color: #c9a84c; }
        .gold-border { border-color: #c9a84c; }
        .gold-bg { background: #c9a84c; }

        /* DIVIDERS */
        .line-gold { height:1px; background:linear-gradient(90deg,transparent,rgba(201,168,76,.6),rgba(201,168,76,.9),rgba(201,168,76,.6),transparent); }
        .line-subtle { height:1px; background:rgba(255,255,255,.06); }

        /* SIGNATURE HOVER */
        .sig-word {
          display:inline-block;
          transition: color .35s, transform .4s cubic-bezier(0.16,1,0.3,1);
        }
        .sig-word:hover { color:#c9a84c; transform:translateY(-3px); }

        /* TIMELINE */
        .tl-dot {
          width:10px; height:10px;
          border-radius:50%;
          background:#c9a84c;
          flex-shrink:0;
          margin-top:6px;
          box-shadow: 0 0 0 4px rgba(201,168,76,.15);
          transition: box-shadow .3s;
        }
        .tl-item:hover .tl-dot { box-shadow: 0 0 0 8px rgba(201,168,76,.2); }
        .tl-line { width:1px; background:linear-gradient(to bottom,rgba(201,168,76,.4),transparent); }

        /* PHILOSOPHY TABS */
        .philo-tab {
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,.08);
          cursor:pointer;
          transition: all .3s;
        }
        .philo-tab.active { border-bottom-color: #c9a84c; }
        .philo-tab:hover .ptab-word { color:#c9a84c; }
        .ptab-word { transition: color .3s; }

        /* IMAGE FRAME */
        .portrait-frame {
          position:relative;
        }
        .portrait-frame::before {
          content:'';
          position:absolute;
          top:-12px; left:-12px;
          right:12px; bottom:12px;
          border: 1px solid rgba(201,168,76,.3);
          pointer-events:none;
          z-index:0;
        }
        .portrait-frame::after {
          content:'';
          position:absolute;
          bottom:-12px; right:-12px;
          top:12px; left:12px;
          border: 1px solid rgba(201,168,76,.1);
          pointer-events:none;
          z-index:0;
        }

        /* AWARD CARD */
        .award-card {
          border: .5px solid rgba(255,255,255,.08);
          transition: all .4s cubic-bezier(0.16,1,0.3,1);
          position:relative;
          overflow:hidden;
        }
        .award-card::before {
          content:'';
          position:absolute;
          inset:0;
          background: linear-gradient(135deg, rgba(201,168,76,.06), transparent);
          opacity:0;
          transition: opacity .4s;
        }
        .award-card:hover { border-color:rgba(201,168,76,.35); transform:translateY(-4px); }
        .award-card:hover::before { opacity:1; }

        /* SHIMMER STRIP */
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(201,168,76,.07), transparent);
          background-size: 200% 100%;
          animation: shimmer 3.5s infinite;
        }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

        /* NOISE OVERLAY */
        .noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: .03;
        }

        /* WATERMARK */
        .wm {
          font-family:'Cormorant Garamond',serif;
          font-size: clamp(100px,20vw,240px);
          font-weight:300;
          color:transparent;
          -webkit-text-stroke: 1px rgba(201,168,76,.05);
          white-space:nowrap;
          pointer-events:none;
          user-select:none;
          line-height:1;
          letter-spacing:-.02em;
        }

        /* QUOTE MARK */
        .quotemark {
          font-size: 120px;
          line-height:.8;
          color: rgba(201,168,76,.12);
          font-family:'Cormorant Garamond',serif;
          font-style:italic;
          font-weight:300;
        }

        /* SCROLL CARET */
        @keyframes caret { 0%,100%{opacity:.3;transform:translateY(0)} 50%{opacity:.8;transform:translateY(6px)} }
        .scroll-caret { animation: caret 2.2s ease-in-out infinite; }

        /* CTA BUTTON */
        .cta-btn {
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 36px;
          font-family:'DM Sans',sans-serif;
          font-size:10px;
          letter-spacing:.35em;
          text-transform:uppercase;
          background:#c9a84c;
          color:#000;
          font-weight:500;
          transition: all .3s;
        }
        .cta-btn:hover { background:#e0bb5c; box-shadow:0 0 40px rgba(201,168,76,.35); transform:translateY(-2px); }

        .cta-outline {
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 36px;
          font-family:'DM Sans',sans-serif;
          font-size:10px;
          letter-spacing:.35em;
          text-transform:uppercase;
          border: .5px solid rgba(201,168,76,.5);
          color:#c9a84c;
          transition: all .3s;
        }
        .cta-outline:hover { background:rgba(201,168,76,.08); border-color:#c9a84c; }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════
           HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen flex items-end pb-24 overflow-hidden">
        {/* PARALLAX BG */}
        <div
          ref={parallaxRef}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1800&q=90"
            alt="Abhishek Maurya"
            className="w-full h-full object-cover object-top scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/30" />
        </div>

        {/* NOISE */}
        <div className="absolute inset-0 noise pointer-events-none" />

        {/* CONTENT */}
        <div
          className={`relative z-10 max-w-7xl mx-auto px-6 w-full ${heroReady ? "" : "invisible"}`}
        >
          <div className="max-w-2xl">
            <p className="h1 sans text-[10px] tracking-[.6em] gold uppercase mb-6">
              The Photographer · Abhianu Studio
            </p>
            <h1 className="h2 text-6xl md:text-8xl font-light leading-[.95] mb-4">
              Abhishek
              <br />
              <em className="italic gold">Maurya</em>
            </h1>
            <div className="h3 flex items-center gap-4 mb-8">
              <div className="w-12 h-px gold-bg opacity-60" />
              <p className="sans text-sm text-white/40 tracking-widest uppercase">
                Visual Storyteller · Mumbai
              </p>
            </div>
            <p className="h4 sans text-base text-white/50 leading-relaxed max-w-md">
              12+ years of turning fleeting moments into permanent memories.
              Every frame is a conversation. Every photo, a story worth keeping.
            </p>
          </div>
        </div>

        {/* SCROLL */}
        <div className="scroll-caret absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="sans text-[9px] tracking-[.45em] text-white/25 uppercase">
            Scroll
          </p>
          <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c]/50 to-transparent" />
        </div>

        {/* WATERMARK */}
        <div
          className="wm absolute right-[-60px] bottom-[-40px] pointer-events-none"
          aria-hidden="true"
        >
          AM
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           STATS BAR
      ══════════════════════════════════════════════════════════════ */}
      <section className="shimmer border-y border-white/5 py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { val: "850", suf: "+", label: "Projects" },
            { val: "12", suf: "+", label: "Years" },
            { val: "500", suf: "+", label: "Happy Clients" },
            { val: "15", suf: "+", label: "Awards" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <p className="text-5xl font-light gold mb-1">
                <AnimatedCounter target={s.val} suffix={s.suf} />
              </p>
              <p className="sans text-[10px] tracking-[.35em] text-white/35 uppercase">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           THE STORY (Portrait + Bio)
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.1fr] gap-20 items-center">
          {/* PORTRAIT */}
          <Reveal dir="left">
            <div className="portrait-frame relative z-10">
              <div className="aspect-[3/4] overflow-hidden relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80"
                  alt="Abhishek Maurya"
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(15%) contrast(1.05)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/40 to-transparent" />
              </div>

              {/* FLOATING BADGE */}
              <div className="absolute -bottom-5 -right-5 z-20 bg-[#c9a84c] text-black p-5 w-36 text-center">
                <p
                  className="text-2xl font-light"
                  style={{ fontFamily: "'Cormorant Garamond',serif" }}
                >
                  12+
                </p>
                <p className="sans text-[8px] tracking-[.3em] uppercase font-medium mt-1">
                  Years in Craft
                </p>
              </div>

              {/* CORNER ACCENT */}
              <div className="absolute top-4 left-4 z-20 w-8 h-8 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px gold-bg opacity-60" />
                <div className="absolute top-0 left-0 h-full w-px gold-bg opacity-60" />
              </div>
            </div>
          </Reveal>

          {/* BIO */}
          <Reveal dir="right" delay={0.18}>
            <div>
              <p className="sans text-[10px] tracking-[.5em] gold uppercase mb-5">
                The Story
              </p>
              <h2 className="text-4xl md:text-5xl font-light leading-[1.08] mb-6">
                I don't just capture
                <br />
                <em className="italic gold">moments — I feel them.</em>
              </h2>
              <div className="w-14 h-px gold-bg mb-8 opacity-60" />

              <div className="space-y-5">
                <p className="sans text-sm text-white/50 leading-[1.9]">
                  My name is{" "}
                  <strong className="text-white/80 font-normal">
                    Abhishek Maurya
                  </strong>
                  , and I've been obsessed with light, shadow, and the
                  in-between since I first picked up a camera in 2012. What
                  started as curiosity became a calling.
                </p>
                <p className="sans text-sm text-white/50 leading-[1.9]">
                  Based in{" "}
                  <strong className="text-white/80 font-normal">Mumbai</strong>,
                  I've documented over 850 stories across weddings, real estate,
                  events, and portraits. My approach is simple — be present, be
                  quiet, and let the moment happen. Then freeze it forever.
                </p>
                <p className="sans text-sm text-white/50 leading-[1.9]">
                  I believe every frame should feel like a memory, not a
                  photograph. That's the standard I hold myself to. Every single
                  time.
                </p>
              </div>

              {/* SIGNATURE */}
              <div className="mt-10 mb-10">
                <p
                  className="text-4xl italic text-[#c9a84c]/70"
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Abhishek Maurya
                </p>
                <p className="sans text-[9px] tracking-[.4em] text-white/25 uppercase mt-2">
                  Founder, Abhianu Studio
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="cta-btn">
                  Book a Session
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
                <a href="/portfolio" className="cta-outline">
                  View Portfolio
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           PHILOSOPHY
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
        <div
          className="wm absolute -top-8 -left-10 pointer-events-none opacity-70"
          aria-hidden="true"
        >
          Vision
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <p className="sans text-[10px] tracking-[.5em] gold uppercase mb-4">
                What I Believe
              </p>
              <h2 className="text-4xl md:text-5xl font-light">
                The Philosophy
              </h2>
              <div className="w-12 h-px gold-bg mx-auto mt-5 opacity-60" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* TAB LABELS */}
            <Reveal dir="left">
              <div>
                {PHILOSOPHY.map((p, i) => (
                  <div
                    key={p.word}
                    className={`philo-tab ${activePhilo === i ? "active" : ""}`}
                    onClick={() => setActivePhilo(i)}
                  >
                    <div className="flex items-center gap-4 py-1">
                      <span
                        className={`sans text-[9px] tracking-[.4em] uppercase ${activePhilo === i ? "gold" : "text-white/20"} transition-colors duration-300`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`ptab-word text-3xl font-light transition-colors duration-300 ${activePhilo === i ? "gold" : "text-white/40"}`}
                      >
                        {p.word}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CONTENT PANEL */}
            <Reveal dir="right" delay={0.15}>
              <div className="relative pt-4">
                <div
                  className="quotemark absolute -top-6 -left-2"
                  aria-hidden="true"
                >
                  "
                </div>
                <div
                  key={activePhilo}
                  style={{
                    animation: "fup .5s cubic-bezier(0.16,1,0.3,1) forwards",
                    opacity: 0,
                  }}
                >
                  <h3 className="text-4xl font-light italic gold mb-6">
                    {PHILOSOPHY[activePhilo].word}
                  </h3>
                  <p className="sans text-base text-white/55 leading-[1.9]">
                    {PHILOSOPHY[activePhilo].desc}
                  </p>
                </div>

                <div className="mt-12 border-l-2 border-[#c9a84c]/30 pl-6">
                  <p className="text-xl italic font-light text-white/60 leading-relaxed">
                    "Great photography is 10% technique and 90% paying
                    attention."
                  </p>
                  <p className="sans text-[9px] tracking-[.4em] uppercase text-white/25 mt-3">
                    — Abhishek Maurya
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           TIMELINE
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div
          className="wm absolute -bottom-10 right-[-80px] pointer-events-none opacity-70"
          aria-hidden="true"
        >
          Story
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <p className="sans text-[10px] tracking-[.5em] gold uppercase mb-4">
                The Journey
              </p>
              <h2 className="text-4xl md:text-5xl font-light">
                12 Years, One Passion
              </h2>
              <div className="w-12 h-px gold-bg mx-auto mt-5 opacity-60" />
            </div>
          </Reveal>

          <div className="relative pl-8">
            {/* VERTICAL LINE */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[#c9a84c]/40 via-[#c9a84c]/20 to-transparent" />

            <div className="flex flex-col gap-0">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.1} dir="right">
                  <div className="tl-item relative flex gap-6 pb-12 group cursor-default">
                    {/* DOT */}
                    <div className="tl-dot absolute -left-[26px] mt-1.5 z-10" />

                    <div className="flex-1">
                      <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-3xl font-light gold opacity-50 group-hover:opacity-100 transition-opacity">
                          {item.year}
                        </span>
                        <span className="sans text-[9px] tracking-[.3em] uppercase text-white/25">
                          ·
                        </span>
                        <h3 className="text-xl font-light group-hover:text-[#c9a84c] transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      <p className="sans text-sm text-white/40 leading-relaxed max-w-md group-hover:text-white/60 transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           AWARDS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="sans text-[10px] tracking-[.5em] gold uppercase mb-4">
                Recognition
              </p>
              <h2 className="text-4xl md:text-5xl font-light">
                Awards & Features
              </h2>
              <div className="w-12 h-px gold-bg mx-auto mt-5 opacity-60" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {AWARDS.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.12} dir="up">
                <div className="award-card p-7 rounded-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-sm border border-[#c9a84c]/30 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="sans text-[10px] tracking-[.25em] uppercase text-white/20">
                      {a.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-light mb-1">{a.title}</h3>
                  <p className="sans text-xs text-white/35 tracking-wider uppercase">
                    {a.org}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           FULL-WIDTH IMAGE BREAK
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=80"
          alt="Behind the lens"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(20%) contrast(1.05)" }}
        />
        <div className="absolute inset-0 bg-[#080808]/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Reveal>
            <div className="text-center px-6">
              <p className="text-4xl md:text-6xl font-light italic leading-tight">
                "The camera is just a tool.
                <br />
                <em className="gold">The eye is the artist."</em>
              </p>
              <p className="sans text-[9px] tracking-[.5em] uppercase text-white/30 mt-6">
                — Abhishek Maurya
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           GEAR / APPROACH (Quick Facts)
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="sans text-[10px] tracking-[.5em] gold uppercase mb-4">
                The Craft
              </p>
              <h2 className="text-4xl md:text-5xl font-light">How I Work</h2>
              <div className="w-12 h-px gold-bg mx-auto mt-5 opacity-60" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
                title: "Sony Alpha System",
                desc: "Shooting with Sony A7 IV + prime lenses for razor-sharp candids and creamy bokeh that no crop sensor can match.",
              },
              {
                icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
                title: "Light Obsessed",
                desc: "Golden hour is sacred. I arrive 90 minutes early to every shoot. Light changes everything — I chase it.",
              },
              {
                icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                title: "Cinematic Editing",
                desc: "Every photo is colour-graded by hand. No presets. No shortcuts. Just time, care, and an honest eye for tone.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.15} dir="up">
                <div className="p-8 border border-white/8 rounded-sm hover:border-[#c9a84c]/30 transition-all duration-500 h-full group">
                  <div className="w-11 h-11 border border-[#c9a84c]/25 rounded-sm flex items-center justify-center mb-6 group-hover:border-[#c9a84c]/60 transition-colors">
                    <svg
                      className="w-5 h-5 gold"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light mb-3">{item.title}</h3>
                  <p className="sans text-sm text-white/40 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
           CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <Reveal dir="up">
            <p className="sans text-[10px] tracking-[.5em] gold uppercase mb-6">
              Let's Create Together
            </p>
            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-6">
              Your story deserves
              <br />
              <em className="italic gold">to be beautifully told.</em>
            </h2>
            <p className="sans text-sm text-white/35 mb-12 tracking-wide leading-relaxed">
              Weddings · Events · Real Estate · Portraits
              <br />
              Mumbai · Pune · Pan India · Destination Shoots
            </p>
          </Reveal>
          <Reveal delay={0.2} dir="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cta-btn">
                Book Abhishek
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/918976626521"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-outline"
              >
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BOTTOM LINE */}
      <div className="line-gold" />
    </div>
  );
}
