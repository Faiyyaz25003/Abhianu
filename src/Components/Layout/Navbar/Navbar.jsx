"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileEvent, setMobileEvent] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-[9999] w-full border-b border-[#e8e8e8] bg-white">
      <nav className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between px-6 lg:px-10">
        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link href="/" className="group flex items-center">
          <img
            src="/logo.png"
            alt="AbhiAnu Edition"
            className="h-[75px] w-auto object-contain"
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <div className="hidden items-center md:flex">
          <ul className="flex items-center gap-10">
            {/* HOME */}

            <li>
              <Link
                href="/"
                className="relative text-[10px] font-bold uppercase tracking-[1.5px] text-[#171717] transition-colors duration-300 hover:text-[#c58b22]"
              >
                Home
              </Link>
            </li>

            {/* ABOUT */}

            <li>
              <Link
                href="/about"
                className="relative text-[10px] font-bold uppercase tracking-[1.5px] text-[#171717] transition-colors duration-300 hover:text-[#c58b22]"
              >
                About Us
              </Link>
            </li>

            {/* =================================================
                SERVICES
            ================================================= */}

            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => {
                setServicesOpen(false);
                setEventOpen(false);
              }}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#171717] transition-colors duration-300 hover:text-[#c58b22]"
              >
                Services
                <ChevronDown
                  size={11}
                  strokeWidth={2}
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ===============================
                  SERVICES DROPDOWN
              =============================== */}

              <div
                className={`absolute left-1/2 top-[calc(100%+20px)] w-[230px] -translate-x-1/2 border border-[#e7d6b7] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.12)] transition-all duration-200 ${
                  servicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-2 opacity-0"
                }`}
              >
                {/* GOLD TOP LINE */}

                <div className="h-[2px] w-full bg-[#c58b22]" />

                {/* WEDDING */}

                <Link
                  href="/wedding"
                  className="group flex items-center justify-between border-b border-[#eeeeee] px-5 py-4 text-[10px] font-semibold uppercase tracking-[1.4px] text-[#333] transition-all hover:bg-[#fcf8f0] hover:pl-6 hover:text-[#c58b22]"
                >
                  <span className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c58b22]" />
                    Wedding
                  </span>
                </Link>

                {/* NIGHT CLUB */}

                <Link
                  href="/club"
                  className="group flex items-center justify-between border-b border-[#eeeeee] px-5 py-4 text-[10px] font-semibold uppercase tracking-[1.4px] text-[#333] transition-all hover:bg-[#fcf8f0] hover:pl-6 hover:text-[#c58b22]"
                >
                  <span className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c58b22]" />
                    Night Club
                  </span>
                </Link>

                {/* REAL ESTATE */}

                <Link
                  href="/realestate"
                  className="group flex items-center justify-between border-b border-[#eeeeee] px-5 py-4 text-[10px] font-semibold uppercase tracking-[1.4px] text-[#333] transition-all hover:bg-[#fcf8f0] hover:pl-6 hover:text-[#c58b22]"
                >
                  <span className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c58b22]" />
                    Real Estate
                  </span>
                </Link>

                {/* =================================================
                    EVENT + SUB DROPDOWN
                ================================================= */}

                <div
                  className="relative"
                  onMouseEnter={() => setEventOpen(true)}
                  onMouseLeave={() => setEventOpen(false)}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between border-b border-[#eeeeee] px-5 py-4 text-left text-[10px] font-semibold uppercase tracking-[1.4px] text-[#333] transition-all hover:bg-[#fcf8f0] hover:text-[#c58b22]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c58b22]" />
                      Event
                    </span>

                    <ChevronRight
                      size={13}
                      className={`text-[#c58b22] transition-transform ${
                        eventOpen ? "translate-x-1" : ""
                      }`}
                    />
                  </button>

                  {/* ===============================
                      EVENT SUB DROPDOWN
                  =============================== */}

                  <div
                    className={`absolute left-[calc(100%+8px)] top-0 w-[220px] border border-[#e7d6b7] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.12)] transition-all duration-200 ${
                      eventOpen
                        ? "visible translate-x-0 opacity-100"
                        : "invisible -translate-x-2 opacity-0"
                    }`}
                  >
                    <div className="h-[2px] w-full bg-[#c58b22]" />

                    <div className="px-5 pb-2 pt-4">
                      <p className="text-[8px] font-bold uppercase tracking-[3px] text-[#c58b22]">
                        Event Services
                      </p>
                    </div>

                    {/* ANCHORING */}

                    <Link
                      href="/anchoring"
                      className="flex items-center gap-3 border-b border-[#eeeeee] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[1.2px] text-[#444] transition-all hover:bg-[#fcf8f0] hover:pl-6 hover:text-[#c58b22]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c58b22]" />
                      Anchoring
                    </Link>

                    {/* BIRTHDAY */}

                    <Link
                      href="/devotional"
                      className="flex items-center gap-3 border-b border-[#eeeeee] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[1.2px] text-[#444] transition-all hover:bg-[#fcf8f0] hover:pl-6 hover:text-[#c58b22]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c58b22]" />
                      Devotional
                    </Link>

                    {/* BABY CEREMONY */}

                    <Link
                      href="/CelebrationsCoverage"
                      className="flex items-center gap-3 border-b border-[#eeeeee] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[1.2px] text-[#444] transition-all hover:bg-[#fcf8f0] hover:pl-6 hover:text-[#c58b22]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c58b22]" />
                      Celebrations Coverage
                    </Link>

                    {/* CORPORATE */}

                    <Link
                      href="/corporate"
                      className="flex items-center gap-3 px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[1.2px] text-[#444] transition-all hover:bg-[#fcf8f0] hover:pl-6 hover:text-[#c58b22]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c58b22]" />
                      Corporate
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            {/* CONTACT */}

            <li>
              <Link
                href="/contact"
                className="relative text-[10px] font-bold uppercase tracking-[1.5px] text-[#171717] transition-colors duration-300 hover:text-[#c58b22]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* =====================================================
            BOOK NOW + MOBILE
        ===================================================== */}

        <div className="flex items-center gap-4">
          {/* BOOK NOW */}

          <Link
            href="/contact"
            className="hidden bg-[#c58b22] px-6 py-[15px] text-[10px] font-bold uppercase tracking-[1.5px] text-white shadow-sm transition-all duration-300 hover:bg-[#a87319] md:block"
          >
            Book Now
          </Link>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-[#171717] md:hidden"
            aria-label="Open menu"
          >
            {mobileMenu ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileMenu && (
        <div className="fixed left-0 right-0 top-[78px] z-[9998] max-h-[calc(100vh-78px)] overflow-y-auto border-t border-[#eeeeee] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] md:hidden">
          <div className="p-5">
            {/* HOME */}

            <Link
              href="/"
              onClick={() => setMobileMenu(false)}
              className="block border-b border-[#eeeeee] py-4 text-[11px] font-bold uppercase tracking-[1.5px]"
            >
              Home
            </Link>

            {/* ABOUT */}

            <Link
              href="/about"
              onClick={() => setMobileMenu(false)}
              className="block border-b border-[#eeeeee] py-4 text-[11px] font-bold uppercase tracking-[1.5px]"
            >
              About Us
            </Link>

            {/* =================================================
                MOBILE SERVICES
            ================================================= */}

            <div className="border-b border-[#eeeeee]">
              <button
                type="button"
                onClick={() => setMobileServices(!mobileServices)}
                className="flex w-full items-center justify-between py-4 text-[11px] font-bold uppercase tracking-[1.5px]"
              >
                Services
                <ChevronDown
                  size={15}
                  className={`text-[#c58b22] transition-transform ${
                    mobileServices ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServices && (
                <div className="pb-3 pl-4">
                  {/* WEDDING */}

                  <Link
                    href="/wedding"
                    onClick={() => setMobileMenu(false)}
                    className="flex items-center gap-3 py-3 text-[10px] uppercase tracking-[1.3px] text-[#555]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c58b22]" />
                    Wedding
                  </Link>

                  {/* NIGHT CLUB */}

                  <Link
                    href="/club"
                    onClick={() => setMobileMenu(false)}
                    className="flex items-center gap-3 py-3 text-[10px] uppercase tracking-[1.3px] text-[#555]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c58b22]" />
                    Night Club
                  </Link>

                  {/* REAL ESTATE */}

                  <Link
                    href="/realestate"
                    onClick={() => setMobileMenu(false)}
                    className="flex items-center gap-3 py-3 text-[10px] uppercase tracking-[1.3px] text-[#555]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c58b22]" />
                    Real Estate
                  </Link>

                  {/* =================================================
                      MOBILE EVENT
                  ================================================= */}

                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileEvent(!mobileEvent)}
                      className="flex w-full items-center justify-between py-3 text-[10px] uppercase tracking-[1.3px] text-[#555]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c58b22]" />
                        Event
                      </span>

                      <ChevronDown
                        size={13}
                        className={`text-[#c58b22] transition-transform ${
                          mobileEvent ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* EVENT CHILDREN */}

                    {mobileEvent && (
                      <div className="ml-5 border-l border-[#e5d2ad] pl-4">
                        <Link
                          href="/anchoring"
                          onClick={() => setMobileMenu(false)}
                          className="block py-2.5 text-[10px] uppercase tracking-[1.2px] text-[#777] hover:text-[#c58b22]"
                        >
                          Anchoring
                        </Link>

                        <Link
                          href="/devotional"
                          onClick={() => setMobileMenu(false)}
                          className="block py-2.5 text-[10px] uppercase tracking-[1.2px] text-[#777] hover:text-[#c58b22]"
                        >
                          Devotional
                        </Link>

                        <Link
                          href="/CelebrationsCoverage"
                          onClick={() => setMobileMenu(false)}
                          className="block py-2.5 text-[10px] uppercase tracking-[1.2px] text-[#777] hover:text-[#c58b22]"
                        >
                          Celebrations Coverage
                        </Link>

                        <Link
                          href="/corporate"
                          onClick={() => setMobileMenu(false)}
                          className="block py-2.5 text-[10px] uppercase tracking-[1.2px] text-[#777] hover:text-[#c58b22]"
                        >
                          Corporate
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* CONTACT */}

            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="block border-b border-[#eeeeee] py-4 text-[11px] font-bold uppercase tracking-[1.5px]"
            >
              Contact
            </Link>

            {/* MOBILE BOOK NOW */}

            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="mt-5 block bg-[#c58b22] py-4 text-center text-[10px] font-bold uppercase tracking-[1.5px] text-white"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
