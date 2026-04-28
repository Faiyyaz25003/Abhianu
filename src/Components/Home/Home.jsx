"use client";
import { useEffect, useRef, useState } from "react";

const SERVICES = [
  {
    id: "wedding",
    title: "Wedding",
    subtitle: "Timeless love stories",
    href: "/services/wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    tag: "Most Booked",
  },
  {
    id: "night-club",
    title: "Night Club",
    subtitle: "Energy. Motion. Night.",
    href: "/services/night-club",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    tag: null,
  },
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Spaces that sell themselves",
    href: "/services/real-estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    tag: null,
  },
  {
    id: "events",
    title: "Events",
    subtitle: "Every moment, unforgettable",
    href: "/services/events",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    tag: null,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Enquiry & Consultation",
    description:
      "Share your vision with us. We understand your requirements, date, venue, and style preferences over a free 30-minute call.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    highlight: false,
  },
  {
    step: "02",
    title: "Booking & Planning",
    description:
      "Once confirmed, we lock your date with a booking advance. A detailed shot-list and timeline is created together.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    highlight: true,
  },
  {
    step: "03",
    title: "The Shoot Day",
    description:
      "We arrive early, blend into your event, and capture every emotion — candid or posed — with precision and artistry.",
    icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
    highlight: false,
  },
  {
    step: "04",
    title: "Editing & Delivery",
    description:
      "Every selected photo is colour-graded and retouched. Your gallery is delivered via a private online link within the agreed timeline.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    highlight: false,
  },
];

const TESTIMONIALS = [
  {
    name: "Priya & Arjun",
    event: "Wedding – Mumbai",
    text: "Every single frame felt like art. We relive our wedding through these photos every day.",
    stars: 5,
  },
  {
    name: "Rohan Mehta",
    event: "Real Estate – Bandra",
    text: "Property sold in 2 days after the shoot. The photos genuinely sell the space.",
    stars: 5,
  },
  {
    name: "Zoya Khan",
    event: "Club Night – Lower Parel",
    text: "Captured the vibe perfectly. Clients loved every single shot from the event.",
    stars: 5,
  },
  {
    name: "Sneha & Vikram",
    event: "Wedding – Pune",
    text: "We were so nervous about the photos but the results left us speechless. Every candid moment was pure magic.",
    stars: 5,
  },
  {
    name: "Aditya Sharma",
    event: "Portrait Session – Juhu",
    text: "Professional, patient and incredibly talented. My LinkedIn profile picture has never looked this good!",
    stars: 5,
  },
  {
    name: "Meera Iyer",
    event: "Corporate Event – BKC",
    text: "Delivered 300+ edited photos within 3 days. The quality and turnaround time was simply outstanding.",
    stars: 5,
  },
];

const STATS = [
  { value: "850+", label: "Projects Done" },
  { value: "12+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "15+", label: "Awards Won" },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? "0px",
      },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

// ─── Reveal Wrapper Component ─────────────────────────────────────────────────
function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, visible] = useScrollReveal();

  const transforms = {
    up: "translateY(50px)",
    left: "translateX(-50px)",
    right: "translateX(50px)",
    scale: "translateY(30px) scale(0.95)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transforms[direction],
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

// ─── Stagger Container ────────────────────────────────────────────────────────
function StaggerReveal({
  children,
  baseDelay = 0,
  stagger = 0.12,
  direction = "up",
  className = "",
}) {
  return (
    <>
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <Reveal
            key={i}
            delay={baseDelay + i * stagger}
            direction={direction}
            className={className}
          >
            {child}
          </Reveal>
        ))
      ) : (
        <Reveal delay={baseDelay} direction={direction} className={className}>
          {children}
        </Reveal>
      )}
    </>
  );
}

// ─── Section Title ────────────────────────────────────────────────────────────
function SectionTitle({ eyebrow, heading }) {
  return (
    <div className="text-center mb-16 gold-line">
      <Reveal>
        <p className="font-sans-dm text-[10px] tracking-[0.5em] text-[#c9a84c] uppercase mb-4">
          {eyebrow}
        </p>
        <h2 className="text-4xl md:text-5xl font-light">{heading}</h2>
      </Reveal>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const parallaxRef = useRef(null);

  useEffect(() => {
    setHeroLoaded(true);
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#080808] text-white min-h-screen font-['Cormorant_Garamond',serif] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        .font-sans-dm { font-family: 'DM Sans', sans-serif; }
        .hero-text   { animation: fadeUp 1.1s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .hero-text-2 { animation: fadeUp 1.1s 0.2s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .hero-text-3 { animation: fadeUp 1.1s 0.4s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        @keyframes fadeUp { from { opacity:0; transform: translateY(40px); } to { opacity:1; transform: translateY(0); } }
        .card-hover { transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s; }
        .card-hover:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 32px 80px rgba(0,0,0,0.6); }
        .img-zoom img { transition: transform 0.8s cubic-bezier(0.16,1,0.3,1); }
        .img-zoom:hover img { transform: scale(1.08); }
        .gold-line::after { content:''; display:block; width:60px; height:1px; background:linear-gradient(90deg,#c9a84c,transparent); margin:16px auto 0; }
        .pkg-hover { transition: all 0.4s cubic-bezier(0.16,1,0.3,1); }
        .pkg-hover:hover { transform: translateY(-6px); }
        .shimmer { background: linear-gradient(90deg, transparent, rgba(201,168,76,0.08), transparent); background-size: 200% 100%; animation: shimmer 3s infinite; }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          ref={parallaxRef}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1800&q=90"
            alt="Hero"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#080808]" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />

        <div
          className={`relative z-10 text-center px-6 max-w-5xl mx-auto ${heroLoaded ? "" : "invisible"}`}
        >
          <p className="hero-text font-sans-dm text-[10px] tracking-[0.6em] text-[#c9a84c] uppercase mb-6">
            Mumbai · Pune · Pan India
          </p>
          <h1 className="hero-text-2 text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-8">
            Moments Captured
            <br />
            <em className="italic text-[#c9a84c]">Forever Remembered</em>
          </h1>
          <p className="hero-text-3 font-sans-dm text-sm text-white/50 tracking-widest uppercase mb-12">
            Wedding · Events · Real Estate · Portrait
          </p>
          <div className="hero-text-3 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-10 py-4 bg-[#c9a84c] text-black font-sans-dm text-xs tracking-[0.3em] uppercase hover:bg-[#e0bb5c] transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
            >
              Book a Session
            </a>
            <a
              href="#portfolio"
              className="px-10 py-4 border border-white/30 font-sans-dm text-xs tracking-[0.3em] uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
            >
              View Portfolio
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <p className="font-sans-dm text-[9px] tracking-[0.4em] text-white/30 uppercase">
            Scroll
          </p>
          <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c]/60 to-transparent" />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────────── */}
      <section className="py-16 border-y border-white/5 shimmer">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} direction="up">
              <p className="text-4xl md:text-5xl font-light text-[#c9a84c] mb-1">
                {s.value}
              </p>
              <p className="font-sans-dm text-[10px] tracking-[0.3em] text-white/40 uppercase">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="What We Do" heading="Our Services" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.id} delay={i * 0.12} direction="up">
                <a
                  href={svc.href}
                  className="card-hover img-zoom relative group block overflow-hidden rounded-sm bg-[#111] cursor-pointer"
                >
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    {svc.tag && (
                      <span className="absolute top-4 left-4 font-sans-dm text-[9px] tracking-[0.3em] uppercase px-3 py-1 bg-[#c9a84c] text-black">
                        {svc.tag}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-light mb-1">{svc.title}</h3>
                    <p className="font-sans-dm text-xs text-white/50 mb-4">
                      {svc.subtitle}
                    </p>
                    <span className="font-sans-dm text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                      Explore
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
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80"
                  alt="Photographer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#c9a84c] text-black p-6 w-40">
                <p className="text-3xl font-light">12+</p>
                <p className="font-sans-dm text-[9px] tracking-[0.3em] uppercase">
                  Years in the craft
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div>
              <p className="font-sans-dm text-[10px] tracking-[0.5em] text-[#c9a84c] uppercase mb-6">
                The Photographer
              </p>
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                I don't just take photos.
                <br />
                <em className="italic">I tell your story.</em>
              </h2>
              <div className="w-12 h-px bg-[#c9a84c] mb-6" />
              <p className="font-sans-dm text-sm text-white/50 leading-relaxed mb-4">
                Based in Mumbai, I've spent over a decade documenting weddings,
                events, and spaces across India. Every shot is intentional —
                every frame, a memory worth keeping.
              </p>
              <p className="font-sans-dm text-sm text-white/50 leading-relaxed mb-10">
                My style blends cinematic light, candid emotion, and editorial
                elegance. Whether it's a grand wedding or an intimate portrait
                session, I bring quiet attention to every detail.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 font-sans-dm text-xs tracking-[0.3em] uppercase text-[#c9a84c] border-b border-[#c9a84c]/40 pb-1 hover:border-[#c9a84c] transition-colors"
              >
                Let's Work Together
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PORTFOLIO ────────────────────────────────────────────────────────── */}
      <section id="portfolio" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Selected Work" heading="Portfolio" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {[
              {
                src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
                span: "col-span-1 row-span-2",
              },
              {
                src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
                span: "",
              },
              {
                src: "https://images.unsplash.com/photo-1444840535719-195841cb6e2b?w=600&q=80",
                span: "",
              },
              {
                src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
                span: "",
              },
              {
                src: "https://images.unsplash.com/photo-1561089489-f13d5e730d72?w=600&q=80",
                span: "",
              },
            ].map((img, i) => (
              <Reveal
                key={i}
                delay={i * 0.1}
                direction="scale"
                className={`img-zoom overflow-hidden bg-[#111] rounded-sm ${img.span}`}
              >
                <div
                  className={`w-full overflow-hidden ${i === 0 ? "h-full min-h-[300px]" : "aspect-square"}`}
                >
                  <img
                    src={img.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3} direction="up">
            <div className="text-center mt-12">
              <a
                href="/portfolio"
                className="inline-flex items-center gap-3 font-sans-dm text-xs tracking-[0.3em] uppercase px-10 py-4 border border-white/20 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
              >
                View Full Portfolio
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────────── */}
      <section id="process" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="How It Works" heading="Our Process" />
          <div className="grid md:grid-cols-2 gap-6">
            {PROCESS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.15} direction="up">
                <div
                  className={`pkg-hover relative p-8 border rounded-sm h-full group ${
                    step.highlight
                      ? "border-[#c9a84c] bg-[#c9a84c]/5"
                      : "border-white/10 bg-[#0f0f0f]"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-sm flex items-center justify-center ${
                        step.highlight
                          ? "bg-[#c9a84c]"
                          : "bg-white/5 border border-white/10"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 ${step.highlight ? "text-black" : "text-[#c9a84c]"}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={step.icon}
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`font-sans-dm text-[10px] tracking-[0.4em] ${
                            step.highlight ? "text-[#c9a84c]" : "text-white/25"
                          }`}
                        >
                          {step.step}
                        </span>
                        {step.highlight && (
                          <span className="font-sans-dm text-[9px] tracking-[0.3em] uppercase px-2 py-0.5 bg-[#c9a84c] text-black">
                            Key Step
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-light mb-3">{step.title}</h3>
                      <p className="font-sans-dm text-sm text-white/45 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {i < PROCESS.length - 1 && (
                    <div className="hidden md:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-px h-6 bg-[#c9a84c]/20" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3} direction="up">
            <div className="text-center mt-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 font-sans-dm text-xs tracking-[0.3em] uppercase px-10 py-4 bg-[#c9a84c] text-black hover:bg-[#e0bb5c] transition-all duration-300"
              >
                Start Your Journey
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section id="testimonials" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Kind Words" heading="Client Stories" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.15} direction="up">
                <div className="border border-white/8 bg-[#0f0f0f] p-8 rounded-sm hover:border-[#c9a84c]/30 transition-colors duration-500 h-full">
                  <StarRating count={t.stars} />
                  <p className="font-light text-lg leading-relaxed text-white/80 mb-6 italic">
                    "{t.text}"
                  </p>
                  <div className="border-t border-white/8 pt-4">
                    <p className="font-sans-dm text-sm text-white font-medium">
                      {t.name}
                    </p>
                    <p className="font-sans-dm text-xs text-white/30 tracking-wider mt-0.5">
                      {t.event}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section id="contact" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Reveal direction="up">
            <p className="font-sans-dm text-[10px] tracking-[0.5em] text-[#c9a84c] uppercase mb-6">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-6">
              Ready to Create
              <br />
              <em className="italic text-[#c9a84c]">Something Beautiful?</em>
            </h2>
            <p className="font-sans-dm text-sm text-white/40 mb-12 tracking-wide">
              Serving Mumbai, Pune &amp; Pan India · Destination Shoots Welcome
            </p>
          </Reveal>

          <Reveal delay={0.2} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:8976626521"
                className="px-10 py-4 bg-[#c9a84c] text-black font-sans-dm text-xs tracking-[0.3em] uppercase hover:bg-[#e0bb5c] hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] transition-all duration-300"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/8976626521"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border border-white/30 font-sans-dm text-xs tracking-[0.3em] uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.35} direction="up">
            <div className="flex items-center justify-center gap-8 border-t border-white/8 pt-8">
              {["Instagram", "Facebook", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-sans-dm text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-[#c9a84c] transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
