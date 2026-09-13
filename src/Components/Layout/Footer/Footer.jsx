"use client";

import Link from "next/link";

// -----------------------------------------------------------------------------
// AbhiAnu Edition — Site Footer (Next.js + Tailwind CSS)
// Matches Navbar.jsx exactly: white background, #c58b22 gold accent,
// #171717 ink, #e8e8e8 / #eeeeee hairlines, font-serif logo mark, and the
// same uppercase / tracking-[1.5px] label treatment used in the nav.
// -----------------------------------------------------------------------------

const services = ["Wedding", "Night Club", "Real Estate"];

const eventServices = [
  { label: "Anchoring", href: "/anchoring" },
  { label: "Devotional", href: "/devotional" },
  { label: "Celebrations Coverage", href: "/CelebrationsCoverage" },
  { label: "Corporate", href: "/corporate" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e8e8e8] bg-white">
      <div className="mx-auto max-w-[1500px] px-6 pt-16 pb-8 lg:px-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr] lg:gap-10">
          {/* =========================================
              LOGO + BLURB
          ========================================= */}

          <div className="max-w-xs">
            <Link href="/" className="group flex items-center">
              <div className="mr-2 text-[35px] leading-none text-[#c58b22]">
                ♧
              </div>
              <div className="leading-none">
                <div className="font-serif text-[25px] font-normal tracking-tight text-[#171717]">
                  Abhi
                  <span className="italic text-[#c58b22]">Anu</span>
                </div>
                <div className="mt-[4px] text-center text-[7px] font-semibold tracking-[4px] text-[#222]">
                  EDITION
                </div>
              </div>
            </Link>

            <p className="mt-5 text-[12px] leading-relaxed text-[#666]">
              Wedding, event, and real estate films shot on location and cut
              fast — full films plus the reels pulled straight from them.
            </p>
          </div>

          {/* =========================================
              NAVIGATE
          ========================================= */}

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#171717]">
              Navigate
            </p>
            <ul className="mt-5 space-y-3.5">
              <li>
                <Link
                  href="/"
                  className="text-[10px] font-semibold uppercase tracking-[1.3px] text-[#555] transition-colors duration-300 hover:text-[#c58b22]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[10px] font-semibold uppercase tracking-[1.3px] text-[#555] transition-colors duration-300 hover:text-[#c58b22]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[10px] font-semibold uppercase tracking-[1.3px] text-[#555] transition-colors duration-300 hover:text-[#c58b22]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[10px] font-semibold uppercase tracking-[1.3px] text-[#555] transition-colors duration-300 hover:text-[#c58b22]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* =========================================
              SERVICES
          ========================================= */}

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#171717]">
              Services
            </p>
            <ul className="mt-5 space-y-3.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href={`/${s.toLowerCase().replace(/\s+/g, "")}`}
                    className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[1.3px] text-[#555] transition-colors duration-300 hover:text-[#c58b22]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c58b22]" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[8px] font-bold uppercase tracking-[3px] text-[#c58b22]">
              Event Services
            </p>
            <ul className="mt-3 space-y-3.5 border-l border-[#e5d2ad] pl-4">
              {eventServices.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#777] transition-colors duration-300 hover:text-[#c58b22]"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================
              CONTACT + BOOK NOW
          ========================================= */}

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#171717]">
              Get In Touch
            </p>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href="mailto:hello@abhianuedition.com"
                  className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#555] transition-colors duration-300 hover:text-[#c58b22]"
                >
                  hello@abhianuedition.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#555] transition-colors duration-300 hover:text-[#c58b22]"
                >
                  +91 12345 67890
                </a>
              </li>
              <li className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#777]">
                Mumbai, Maharashtra
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-6 inline-block bg-[#c58b22] px-6 py-[15px] text-[10px] font-bold uppercase tracking-[1.5px] text-white shadow-sm transition-all duration-300 hover:bg-[#a87319]"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================= */}

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#eeeeee] pt-6 sm:flex-row">
          <p className="text-[9px] font-semibold uppercase tracking-[1.2px] text-[#999]">
            © {new Date().getFullYear()} AbhiAnu Edition. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[9px] font-semibold uppercase tracking-[1.2px] text-[#999] transition-colors duration-300 hover:text-[#c58b22]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[9px] font-semibold uppercase tracking-[1.2px] text-[#999] transition-colors duration-300 hover:text-[#c58b22]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
