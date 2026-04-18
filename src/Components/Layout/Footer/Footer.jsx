"use client";
import Link from "next/link";
import { useState } from "react";

const FOOTER_LINKS = {
  Services: [
    { label: "Wedding", href: "/services/wedding" },
    { label: "Night Club", href: "/services/night-club" },
    { label: "Real Estate", href: "/services/real-estate" },
    { label: "Anchoring", href: "/services/event/anchoring" },
    { label: "Birthday", href: "/services/event/birthday" },
    { label: "Baby Ceremony", href: "/services/event/baby-ceremony" },
    { label: "Corporate", href: "/services/event/corporate" },
  ],
  Navigate: [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Packages", href: "/packages" },
    { label: "About", href: "/about/company" },
    { label: "Team", href: "/about/team" },
    { label: "Contact", href: "/contact" },
  ],
};

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-4 h-4"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/918976626521",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#080808] overflow-hidden font-['DM_Sans',sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-brand { font-family: 'Playfair Display', serif; }

        .footer-link {
          position: relative;
          display: inline-block;
          transition: color 0.2s ease;
        }
        .footer-link::before {
          content: '';
          position: absolute;
          left: -12px;
          top: 50%;
          transform: translateY(-50%) scaleX(0);
          width: 6px;
          height: 1px;
          background: #c9a84c;
          transition: transform 0.25s ease;
          transform-origin: left;
        }
        .footer-link:hover { color: #c9a84c; }
        .footer-link:hover::before { transform: translateY(-50%) scaleX(1); }

        .social-btn {
          width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          border: 0.5px solid rgba(255,255,255,0.12);
          border-radius: 50%;
          color: rgba(255,255,255,0.4);
          transition: all 0.3s ease;
        }
        .social-btn:hover {
          border-color: #c9a84c;
          color: #c9a84c;
          background: rgba(201,168,76,0.08);
          transform: translateY(-2px);
        }

        .newsletter-input {
          background: rgba(255,255,255,0.04);
          border: 0.5px solid rgba(255,255,255,0.12);
          color: white;
          padding: 12px 16px;
          font-size: 12px;
          letter-spacing: 0.05em;
          outline: none;
          width: 100%;
          transition: border-color 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .newsletter-input::placeholder { color: rgba(255,255,255,0.25); }
        .newsletter-input:focus { border-color: rgba(201,168,76,0.5); }

        .newsletter-btn {
          background: #c9a84c;
          color: #000;
          border: none;
          padding: 12px 20px;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          transition: background 0.2s, box-shadow 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .newsletter-btn:hover {
          background: #e0bb5c;
          box-shadow: 0 0 24px rgba(201,168,76,0.3);
        }

        .divider-gold {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.3), rgba(201,168,76,0.6), rgba(201,168,76,0.3), transparent);
        }

        .contact-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 16px;
          border: 0.5px solid rgba(201,168,76,0.25);
          color: rgba(255,255,255,0.5);
          font-size: 11px;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .contact-pill:hover {
          border-color: #c9a84c;
          color: #c9a84c;
          background: rgba(201,168,76,0.06);
        }

        .big-watermark {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Playfair Display', serif;
          font-size: clamp(80px, 15vw, 180px);
          font-weight: 600;
          color: transparent;
          -webkit-text-stroke: 1px rgba(201,168,76,0.06);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          letter-spacing: 0.1em;
          line-height: 1;
        }

        .area-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .area-tag::before {
          content: '';
          width: 4px; height: 4px;
          background: #c9a84c;
          border-radius: 50%;
          display: inline-block;
        }
      `}</style>

      {/* TOP GOLD LINE */}
      <div className="divider-gold" />

      {/* MAIN FOOTER BODY */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* TOP ROW — Brand + Newsletter */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          {/* BRAND BLOCK */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <p className="footer-brand text-4xl font-semibold text-white tracking-wide hover:text-[#c9a84c] transition-colors duration-300">
                Abhianu
              </p>
              <p className="text-[9px] tracking-[0.6em] uppercase text-[#c9a84c] mt-1">
                Visual Artistry · Studio
              </p>
            </Link>

            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6">
              Crafting timeless visuals across weddings, events, and spaces.
              Every frame is intentional — every memory, worth keeping.
            </p>

            {/* SERVICE AREAS */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Mumbai", "Pune", "Pan India", "Destination"].map((city) => (
                <span key={city} className="area-tag">
                  {city}
                </span>
              ))}
            </div>

            {/* SOCIALS */}
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* NEWSLETTER BLOCK */}
          <div className="md:pl-8 md:border-l md:border-white/5">
            <p className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] mb-3">
              Stay Connected
            </p>
            <h3 className="footer-brand text-2xl font-light text-white mb-2 leading-snug">
              Get exclusive offers &<br />
              <em className="italic text-[#c9a84c]">behind-the-lens stories</em>
            </h3>
            <p className="text-xs text-white/30 mb-6 leading-relaxed">
              No spam. Just beautiful work, early access, and seasonal deals.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-3 py-4 px-5 border border-[#c9a84c]/30 bg-[#c9a84c]/5 rounded-sm">
                <svg
                  className="w-4 h-4 text-[#c9a84c]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c]">
                  You're in! Welcome aboard.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </form>
            )}

            {/* QUICK CONTACT PILLS */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="tel:8976626521" className="contact-pill">
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
                    d="M2.25 6.338c0-1.043.84-1.846 1.879-1.846h1.713c.447 0 .832.3.938.732l.875 3.653a.956.956 0 01-.27.934L5.9 11.395a15.065 15.065 0 006.705 6.705l1.583-1.486a.956.956 0 01.934-.27l3.653.875c.432.106.732.49.732.938v1.713c0 1.039-.803 1.879-1.846 1.879C7.747 21.75 2.25 16.253 2.25 9.375V6.338z"
                  />
                </svg>
                +91 89766 26521
              </a>
              <a
                href="https://wa.me/918976626521"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill"
              >
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="divider-gold mb-12" />

        {/* LINKS + INFO ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* SERVICES */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] mb-5">
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.Services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="footer-link text-xs tracking-[0.1em] text-white/40 uppercase pl-3"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAVIGATE */}
          <div>
            <p className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] mb-5">
              Navigate
            </p>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.Navigate.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="footer-link text-xs tracking-[0.1em] text-white/40 uppercase pl-3"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WORKING HOURS */}
          <div>
            <p className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] mb-5">
              Working Hours
            </p>
            <ul className="flex flex-col gap-3">
              {[
                ["Mon – Fri", "9 AM – 8 PM"],
                ["Saturday", "8 AM – 10 PM"],
                ["Sunday", "By Booking"],
              ].map(([day, time]) => (
                <li key={day} className="flex flex-col">
                  <span className="text-[10px] text-white/25 tracking-wider uppercase">
                    {day}
                  </span>
                  <span className="text-xs text-white/60 tracking-wide">
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* FIND US */}
          <div>
            <p className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] mb-5">
              Find Us
            </p>
            <address className="not-italic">
              <p className="text-xs text-white/40 leading-relaxed mb-4">
                Abhianu Studio
                <br />
                Andheri West,
                <br />
                Mumbai – 400053
                <br />
                Maharashtra, India
              </p>
            </address>
            <a
              href="mailto:hello@abhianu.in"
              className="text-xs text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors tracking-wider"
            >
              hello@abhianu.in
            </a>
          </div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="divider-gold mb-6" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/20 tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Abhianu Visual Artistry. All rights
            reserved.
          </p>

          <div className="flex items-center gap-2 text-white/15">
            <span className="text-[10px] tracking-wider uppercase">
              Crafted with
            </span>
            <svg className="w-3 h-3 fill-[#c9a84c]/40" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            <span className="text-[10px] tracking-wider uppercase">
              in Mumbai
            </span>
          </div>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Sitemap"].map((l) => (
              <Link
                key={l}
                href="#"
                className="text-[10px] tracking-[0.15em] uppercase text-white/20 hover:text-white/50 transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* BIG WATERMARK TEXT — decorative */}
      <div className="big-watermark" aria-hidden="true">
        Abhianu
      </div>
    </footer>
  );
}
