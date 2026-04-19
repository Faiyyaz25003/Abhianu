"use client";

import { useState, useEffect, useRef } from "react";

// ── DATA ──────────────────────────────────────────────────────────────────────
const photos = [
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&q=85",
    tag: "The Ceremony",
    title: "Priya & Arjun",
    col: "col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=85",
    tag: "Getting Ready",
    title: "Bridal Moments",
    col: "col-span-3",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=85",
    tag: "First Kiss",
    title: "Forever Begins",
    col: "col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=85",
    tag: "First Dance",
    title: "Neha & Rahul",
    col: "col-span-3",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200&q=85",
    tag: "Decor",
    title: "Floral Romance",
    col: "col-span-5",
    aspect: "aspect-video",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=85",
    tag: "Portrait",
    title: "Ananya & Dev",
    col: "col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=85",
    tag: "Details",
    title: "The Rings",
    col: "col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85",
    tag: "Bridal",
    title: "Radiant Bride",
    col: "col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=85",
    tag: "Venue",
    title: "Royal Mandap",
    col: "col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1524159730786-4e74a1a0b647?w=1800&q=85",
    tag: "Golden Hour",
    title: "Divya & Karan",
    col: "col-span-12",
    aspect: "aspect-[21/9]",
  },
];

const films = [
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
    tag: "Highlight Film",
    title: "Priya & Arjun — The Story",
    duration: "12:34",
    col: "col-span-6",
    aspect: "aspect-video",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&q=80",
    tag: "Full Ceremony",
    title: "Neha & Rahul — Sacred Vows",
    duration: "48:20",
    col: "col-span-6",
    aspect: "aspect-video",
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
    tag: "Reel",
    title: "Ananya & Dev",
    duration: "2:15",
    col: "col-span-4",
    aspect: "aspect-[9/16]",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    tag: "Bridal Reel",
    title: "Kavya Moments",
    duration: "1:58",
    col: "col-span-4",
    aspect: "aspect-[9/16]",
  },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
    tag: "Getting Ready",
    title: "Behind the Scenes",
    duration: "3:42",
    col: "col-span-4",
    aspect: "aspect-[9/16]",
  },
  {
    src: "https://images.unsplash.com/photo-1524159730786-4e74a1a0b647?w=1800&q=80",
    tag: "Cinematic Feature",
    title: "Divya & Karan — A Golden Love",
    duration: "18:06",
    col: "col-span-12",
    aspect: "aspect-[21/9]",
  },
  {
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
    tag: "Teaser",
    title: "Meera & Rohan",
    duration: "1:20",
    col: "col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    tag: "Highlight",
    title: "Sana & Vikram",
    duration: "7:55",
    col: "col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    tag: "Venue Film",
    title: "Royal Palace Wedding",
    duration: "5:30",
    col: "col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200&q=80",
    tag: "Showreel",
    title: "2024 Wedding Season — Best Moments",
    duration: "4:00",
    col: "col-span-6",
    aspect: "aspect-video",
  },
];

const navLinks = ["Portfolio", "Wedding", "Pre-Wedding", "About", "Contact"];
const footerLinks = {
  Quick: ["Home", "Wedding", "Pre-Wedding", "Portfolio", "About"],
  Services: [
    "Wedding Photography",
    "Cinematic Films",
    "Pre-Wedding Shoots",
    "Destination Weddings",
    "Album Design",
  ],
};

// ── HOOKS ─────────────────────────────────────────────────────────────────────
function useReveal() {
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
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── SUB-COMPONENTS ─────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.85s ease ${delay}ms, transform 0.85s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, italic, light = false }) {
  return (
    <Reveal className="text-center pb-10 pt-20">
      <p
        className="text-[0.6rem] tracking-[0.45em] uppercase mb-3"
        style={{ color: "#C9A96E" }}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-['Cormorant_Garamond'] font-light leading-none text-5xl md:text-6xl ${light ? "text-[#FAF7F2]" : "text-[#1A1611]"}`}
      >
        {title}{" "}
        <em className="italic" style={{ color: "#C9A96E" }}>
          {italic}
        </em>
      </h2>
      <div
        className="w-14 h-px mx-auto mt-5"
        style={{ background: "#C9A96E", opacity: 0.5 }}
      />
    </Reveal>
  );
}

function PlayIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#C9A96E"
      style={{ marginLeft: 3 }}
    >
      <polygon points="5,3 19,12 5,21" />
    </svg>
  );
}

// ── LIGHTBOX ──────────────────────────────────────────────────────────────────
function Lightbox({ photo, onClose }) {
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", fn);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center"
      style={{
        background: "rgba(13,11,9,0.97)",
        animation: "fadeIn 0.3s ease",
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-11 h-11 rounded-full flex items-center justify-center text-[#E8D5B0] hover:bg-[#C9A96E]/20 transition-all border border-[#C9A96E]/30 text-lg z-10"
      >
        ✕
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-[90vw] max-h-[88vh]"
      >
        <img
          src={photo.src.replace("w=1200", "w=1800")}
          alt={photo.title}
          className="max-w-full max-h-[85vh] object-contain rounded-sm"
        />
        <p className="text-center mt-4 font-['Cormorant_Garamond'] italic text-[#FAF7F2]/50 text-base">
          {photo.title}
        </p>
      </div>
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function Wedding() {
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@200;300;400&display=swap');
        body { font-family: 'DM Sans', sans-serif; background: #FAF7F2; }
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes fadeUp { from { opacity:0; transform:translateY(36px) } to { opacity:1; transform:translateY(0) } }
        @keyframes float { 0%,100% { transform:translateY(0) } 50% { transform:translateY(9px) } }
        @keyframes shimmer { 0% { background-position: -200% center } 100% { background-position: 200% center } }
        .hero-title { animation: fadeUp 1.3s cubic-bezier(.16,1,.3,1) both; }
        .hero-sub { animation: fadeUp 1.3s .2s cubic-bezier(.16,1,.3,1) both; }
        .hero-scroll { animation: float 2.8s ease-in-out infinite; }
        .photo-img { transition: transform 0.75s cubic-bezier(.25,.46,.45,.94), opacity 0.4s; }
        .photo-card:hover .photo-img { transform: scale(1.06); opacity: 1 !important; }
        .photo-label { transition: opacity 0.4s, transform 0.4s; opacity: 0; transform: translateY(8px); }
        .photo-card:hover .photo-label { opacity: 1; transform: translateY(0); }
        .overlay { transition: opacity 0.4s; }
        .photo-card:hover .overlay { opacity: 1 !important; }
        .play-btn { transition: transform 0.35s, background 0.35s, border-color 0.35s; }
        .video-card:hover .play-btn { transform: scale(1.12); background: rgba(201,169,110,0.25); border-color: #C9A96E; }
        .video-img { transition: transform 0.75s cubic-bezier(.25,.46,.45,.94), opacity 0.4s; }
        .video-card:hover .video-img { transform: scale(1.05); opacity: 0.85 !important; }
        .nav-link::after { content:''; display:block; width:0; height:1px; background:#C9A96E; transition:width 0.3s; margin:2px auto 0; }
        .nav-link:hover::after, .nav-link.active::after { width:100%; }
        .btn-gold { transition: background 0.35s, color 0.35s; }
        .btn-gold:hover { background: #C9A96E; color: #FAF7F2; }
        .footer-link { transition: color 0.25s; }
        .footer-link:hover { color: #C9A96E; }
      `}</style>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center"
          style={{ background: "rgba(26,22,17,0.98)" }}
        >
          <button
            onClick={() => setMobileMenu(false)}
            className="absolute top-6 right-6 text-[#E8D5B0] text-2xl"
          >
            ✕
          </button>
          {navLinks.map((l, i) => (
            <a
              key={l}
              href="#"
              onClick={() => setMobileMenu(false)}
              className="font-['Cormorant_Garamond'] text-4xl font-light my-4 tracking-wider"
              style={{
                color: l === "Wedding" ? "#C9A96E" : "#FAF7F2",
                animationDelay: `${i * 80}ms`,
                animation: "fadeUp 0.5s ease both",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg,#2C2118 0%,#1A1611 55%,#3D2E1E 100%)",
          }}
        />
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A96E'%3E%3Cpath d='M30 0 L32 28 L60 30 L32 32 L30 60 L28 32 L0 30 L28 28z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(201,169,110,0.35) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="hero-title flex items-center justify-center gap-4 mb-6">
            <span
              className="w-12 h-px opacity-50"
              style={{ background: "#C9A96E" }}
            />
            <span
              className="text-[0.6rem] tracking-[0.5em] uppercase"
              style={{ color: "#C9A96E" }}
            >
              Wedding Photography
            </span>
            <span
              className="w-12 h-px opacity-50"
              style={{ background: "#C9A96E" }}
            />
          </div>
          <h1
            className="hero-title font-['Cormorant_Garamond'] font-light leading-none text-[#FAF7F2] mb-6"
            style={{
              fontSize: "clamp(4rem,10vw,8.5rem)",
              letterSpacing: "0.01em",
            }}
          >
            Love{" "}
            <em className="italic" style={{ color: "#E8D5B0" }}>
              Captured
            </em>
            <br />
            Forever
          </h1>
          <p
            className="hero-sub text-[0.72rem] tracking-[0.35em] uppercase mb-12"
            style={{ color: "rgba(250,247,242,0.4)" }}
          >
            Timeless Moments · Eternal Memories
          </p>
          <a
            href="#gallery"
            className="hero-scroll inline-flex flex-col items-center gap-2 text-[0.6rem] tracking-[0.35em] uppercase no-underline"
            style={{ color: "rgba(250,247,242,0.4)" }}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              opacity="0.5"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            Scroll
          </a>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <section id="gallery" className="py-4 bg-[#FAF7F2]">
        <SectionHeader eyebrow="Portfolio" title="Wedding" italic="Gallery" />
        <div className="max-w-[1440px] mx-auto px-4 pb-20">
          <div className="grid grid-cols-12 gap-3">
            {photos.map((p, i) => (
              <Reveal key={i} delay={i * 50} className={`${p.col} ${p.aspect}`}>
                <div
                  className="photo-card group relative overflow-hidden rounded-sm cursor-pointer w-full h-full"
                  style={{ background: "#2C2118" }}
                  onClick={() => setLightboxPhoto(p)}
                >
                  <img
                    src={p.src}
                    alt={p.title}
                    className="photo-img w-full h-full object-cover opacity-90"
                  />
                  <div
                    className="overlay absolute inset-0 opacity-0"
                    style={{
                      background:
                        "linear-gradient(to top,rgba(26,22,17,0.75) 0%,transparent 55%)",
                    }}
                  />
                  <div className="photo-label absolute bottom-0 left-0 right-0 z-10 p-5">
                    <span
                      className="text-[0.6rem] tracking-[0.28em] uppercase"
                      style={{ color: "#E8D5B0" }}
                    >
                      {p.tag}
                    </span>
                    <strong
                      className="block font-['Cormorant_Garamond'] text-xl font-light mt-1"
                      style={{ color: "#FAF7F2" }}
                    >
                      {p.title}
                    </strong>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BAND ── */}
      <div
        className="py-28 text-center px-6 border-y"
        style={{ background: "#F5F0E8", borderColor: "rgba(201,169,110,0.15)" }}
      >
        <Reveal>
          <span
            className="block font-['Cormorant_Garamond'] text-8xl leading-none mb-6 opacity-40"
            style={{ color: "#C9A96E" }}
          >
            "
          </span>
          <blockquote
            className="font-['Cormorant_Garamond'] font-light italic text-3xl md:text-[2.4rem] leading-relaxed text-[#1A1611] max-w-3xl mx-auto mb-8"
            style={{ fontSize: "clamp(1.5rem,3vw,2.4rem)" }}
          >
            Every love story is beautiful,
            <br />
            but yours is my favourite to tell through my lens.
          </blockquote>
          <p
            className="text-[0.65rem] tracking-[0.35em] uppercase"
            style={{ color: "#9C8E7E" }}
          >
            — Aryan Kapoor
          </p>
        </Reveal>
      </div>

      {/* ── VIDEO / FILMS ── */}
      <section id="films" style={{ background: "#1A1611" }} className="py-4">
        <div className="max-w-[1440px] mx-auto px-4 pb-20">
          <SectionHeader
            eyebrow="Cinematic Films"
            title="Wedding"
            italic="Films"
            light
          />
          <div className="grid grid-cols-12 gap-3">
            {films.map((f, i) => (
              <Reveal key={i} delay={i * 50} className={`${f.col} ${f.aspect}`}>
                <div
                  className="video-card group relative overflow-hidden rounded-sm cursor-pointer w-full h-full"
                  style={{ background: "#0D0B09" }}
                >
                  <img
                    src={f.src}
                    alt={f.title}
                    className="video-img w-full h-full object-cover opacity-70"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: "rgba(26,22,17,0.38)" }}
                  >
                    <div
                      className="play-btn w-16 h-16 rounded-full flex items-center justify-center border border-[#C9A96E]/60"
                      style={{
                        background: "rgba(201,169,110,0.1)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <PlayIcon size={22} />
                    </div>
                  </div>
                  {/* Info */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5"
                    style={{
                      background:
                        "linear-gradient(to top,rgba(13,11,9,0.9) 0%,transparent 100%)",
                    }}
                  >
                    <span
                      className="block text-[0.58rem] tracking-[0.32em] uppercase mb-1"
                      style={{ color: "#C9A96E" }}
                    >
                      {f.tag}
                    </span>
                    <span
                      className="font-['Cormorant_Garamond'] font-light text-lg"
                      style={{ color: "#FAF7F2" }}
                    >
                      {f.title}
                    </span>
                  </div>
                  {/* Duration */}
                  <span
                    className="absolute top-4 right-4 text-[0.62rem] tracking-wide px-2 py-1"
                    style={{
                      color: "rgba(250,247,242,0.75)",
                      background: "rgba(13,11,9,0.65)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {f.duration}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-36 text-center px-6"
        style={{ background: "#FAF7F2" }}
      >
        <Reveal>
          <p
            className="text-[0.6rem] tracking-[0.45em] uppercase mb-4"
            style={{ color: "#C9A96E" }}
          >
            Book Your Date
          </p>
          <h2 className="font-['Cormorant_Garamond'] font-light text-5xl md:text-6xl text-[#1A1611] mb-4">
            Let's Tell Your{" "}
            <em className="italic" style={{ color: "#C9A96E" }}>
              Love Story
            </em>
          </h2>
          <p
            className="text-[0.72rem] tracking-[0.25em] uppercase mb-12"
            style={{ color: "#9C8E7E" }}
          >
            Limited Dates Available for 2025 · 2026
          </p>
          <a
            href="#"
            className="btn-gold inline-block px-12 py-4 border text-[0.65rem] tracking-[0.35em] uppercase no-underline"
            style={{ borderColor: "#C9A96E", color: "#C9A96E" }}
          >
            Inquire Now
          </a>
        </Reveal>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxPhoto && (
        <Lightbox
          photo={lightboxPhoto}
          onClose={() => setLightboxPhoto(null)}
        />
      )}
    </>
  );
}
