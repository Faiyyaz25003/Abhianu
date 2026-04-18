"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Service",
    children: [
      { label: "Wedding", href: "/services/wedding" },
      { label: "Night Club", href: "/services/night-club" },
      { label: "Real Estate", href: "/services/real-estate" },
      {
        label: "Event",
        href: "/services/event",
        sub: [
          { label: "Anchoring", href: "/services/event/anchoring" },
          { label: "Birthday", href: "/services/event/birthday" },
          { label: "Baby Ceremony", href: "/services/event/baby-ceremony" },
          { label: "Corporate", href: "/services/event/corporate" },
        ],
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSub, setOpenSub] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(null);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');
        .nav-root { font-family: 'DM Sans', sans-serif; }
        .brand { font-family: 'Playfair Display', serif; }

        .nav-link-item { position: relative; padding-bottom: 2px; }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 1px;
          background: #c9a84c;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .nav-link-item:hover::after { transform: scaleX(1); }

        .dropdown-menu {
          opacity: 0;
          transform: translateY(8px);
          pointer-events: none;
          transition: opacity 0.22s ease, transform 0.22s ease;
        }
        .dropdown-menu.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        .dropdown-item {
          transition: background 0.15s, color 0.15s, padding-left 0.2s;
        }
        .dropdown-item:hover {
          background: rgba(201,168,76,0.08);
          color: #c9a84c;
          padding-left: 20px;
        }
        .dropdown-item.has-sub:hover { padding-left: 16px; }

        .sub-menu {
          opacity: 0;
          transform: translateX(-6px);
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .sub-menu.open {
          opacity: 1;
          transform: translateX(0);
          pointer-events: all;
        }

        .sub-item {
          transition: background 0.15s, color 0.15s, padding-left 0.2s;
        }
        .sub-item:hover {
          background: rgba(201,168,76,0.06);
          color: #c9a84c;
          padding-left: 20px;
        }

        .mobile-slide {
          animation: slideDown 0.3s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes slideDown {
          from { opacity:0; transform:translateY(-12px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .chevron-icon { transition: transform 0.25s ease; }
        .chevron-icon.rotated { transform: rotate(180deg); }

        .gold-dot {
          width: 4px; height: 4px;
          background: #c9a84c;
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
          flex-shrink: 0;
        }

        .event-badge {
          font-size: 8px;
          letter-spacing: 0.1em;
          padding: 1px 5px;
          background: rgba(201,168,76,0.15);
          color: #c9a84c;
          border-radius: 2px;
          margin-left: 6px;
          text-transform: uppercase;
        }
      `}</style>

      <nav
        className={`nav-root fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/95 backdrop-blur-md shadow-[0_2px_40px_rgba(0,0,0,0.6)] border-b border-[#c9a84c]/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* BRAND */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="brand text-2xl font-semibold text-white tracking-wide group-hover:text-[#c9a84c] transition-colors duration-300">
              Abhianu
            </span>
            <span
              className="text-[9px] tracking-[0.45em] uppercase mt-0.5 transition-colors duration-300"
              style={{ color: scrolled ? "#c9a84c" : "rgba(255,255,255,0.4)" }}
            >
              Studio
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    setOpenDropdown(item.label);
                    setOpenSub(false);
                  }}
                  onMouseLeave={() => {
                    setOpenDropdown(null);
                    setOpenSub(false);
                  }}
                >
                  <button className="nav-link-item flex items-center gap-1 text-xs tracking-[0.18em] uppercase text-white/70 hover:text-white transition-colors duration-200">
                    {item.label}
                    <ChevronDown
                      size={12}
                      className={`chevron-icon ${openDropdown === item.label ? "rotated" : ""}`}
                    />
                  </button>

                  {/* LEVEL 1 DROPDOWN */}
                  <ul
                    className={`dropdown-menu absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-52 bg-[#0f0f0f] border border-[#c9a84c]/15 rounded-sm overflow-visible ${
                      openDropdown === item.label ? "open" : ""
                    }`}
                  >
                    <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
                    {item.children.map((child) =>
                      child.sub ? (
                        /* EVENT — nested sub-menu on hover */
                        <li
                          key={child.label}
                          className="relative"
                          onMouseEnter={() => setOpenSub(true)}
                          onMouseLeave={() => setOpenSub(false)}
                        >
                          <div className="dropdown-item has-sub flex items-center justify-between px-4 py-3 text-xs tracking-[0.15em] uppercase text-white/60 cursor-pointer select-none">
                            <span className="flex items-center">
                              <span className="gold-dot" />
                              {child.label}
                              <span className="event-badge">4</span>
                            </span>
                            <ChevronDown
                              size={10}
                              className="text-[#c9a84c]/50 -rotate-90"
                            />
                          </div>

                          {/* LEVEL 2 SUB-MENU */}
                          <ul
                            className={`sub-menu absolute left-full top-0 w-52 bg-[#111] border border-[#c9a84c]/15 rounded-sm overflow-hidden ${
                              openSub ? "open" : ""
                            }`}
                          >
                            <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />
                            <li className="px-4 pt-2 pb-1">
                              <p className="text-[9px] tracking-[0.4em] uppercase text-[#c9a84c]/50">
                                Event Types
                              </p>
                            </li>
                            {child.sub.map((s) => (
                              <li key={s.label}>
                                <Link
                                  href={s.href}
                                  className="sub-item flex items-center px-4 py-2.5 text-xs tracking-[0.15em] uppercase text-white/50"
                                >
                                  <span className="gold-dot" />
                                  {s.label}
                                </Link>
                              </li>
                            ))}
                            <div className="h-px bg-white/5 mx-4 my-1" />
                            <li>
                              <Link
                                href="/services/event"
                                className="flex items-center justify-between px-4 py-2.5 text-[10px] tracking-[0.15em] uppercase text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors"
                              >
                                View All Events
                                <ChevronDown size={10} className="-rotate-90" />
                              </Link>
                            </li>
                          </ul>
                        </li>
                      ) : (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="dropdown-item flex items-center px-4 py-3 text-xs tracking-[0.15em] uppercase text-white/60"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="nav-link-item text-xs tracking-[0.18em] uppercase text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          {/* CTA + MOBILE TOGGLE */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-block text-xs tracking-[0.2em] uppercase px-5 py-2.5 border border-[#c9a84c]/60 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black transition-all duration-300 rounded-sm"
            >
              Book Now
            </Link>
            <button
              className="md:hidden text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle menu"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="mobile-slide md:hidden mt-2 mx-4 bg-[#0f0f0f] border border-[#c9a84c]/10 rounded-sm overflow-hidden">
            <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />
            <ul className="flex flex-col px-4 py-4 gap-1">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <button
                      onClick={() =>
                        setMobileOpen(
                          mobileOpen === item.label ? null : item.label,
                        )
                      }
                      className="w-full flex justify-between items-center py-3 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-[#c9a84c] transition-colors border-b border-white/5"
                    >
                      {item.label}
                      <ChevronDown
                        size={12}
                        className={`chevron-icon ${mobileOpen === item.label ? "rotated" : ""}`}
                      />
                    </button>

                    {mobileOpen === item.label && (
                      <ul className="pl-4 py-2 flex flex-col gap-1">
                        {item.children.map((child) =>
                          child.sub ? (
                            <li key={child.label}>
                              <button
                                onClick={() => setMobileSubOpen(!mobileSubOpen)}
                                className="w-full flex justify-between items-center py-2 text-xs tracking-[0.15em] uppercase text-[#c9a84c]/80 hover:text-[#c9a84c] transition-colors"
                              >
                                <span className="flex items-center gap-2">
                                  <span className="gold-dot" />
                                  {child.label}
                                  <span className="event-badge">4</span>
                                </span>
                                <ChevronDown
                                  size={10}
                                  className={`chevron-icon ${mobileSubOpen ? "rotated" : ""}`}
                                />
                              </button>

                              {mobileSubOpen && (
                                <ul className="pl-5 flex flex-col gap-1 pb-2 border-l border-[#c9a84c]/20 ml-2 mt-1">
                                  <li className="pt-1 pb-0.5">
                                    <p className="text-[9px] tracking-[0.4em] uppercase text-[#c9a84c]/40">
                                      Event Types
                                    </p>
                                  </li>
                                  {child.sub.map((s) => (
                                    <li key={s.label}>
                                      <Link
                                        href={s.href}
                                        onClick={() => setMobileMenu(false)}
                                        className="block py-1.5 text-xs tracking-[0.12em] uppercase text-white/35 hover:text-[#c9a84c] transition-colors"
                                      >
                                        — {s.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ) : (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={() => setMobileMenu(false)}
                                className="block py-2 text-xs tracking-[0.15em] uppercase text-white/40 hover:text-[#c9a84c] transition-colors"
                              >
                                — {child.label}
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenu(false)}
                      className="block py-3 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-[#c9a84c] transition-colors border-b border-white/5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
              <li className="pt-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenu(false)}
                  className="block text-center py-3 border border-[#c9a84c]/60 text-[#c9a84c] text-xs tracking-[0.2em] uppercase hover:bg-[#c9a84c] hover:text-black transition-all duration-300 rounded-sm"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}


