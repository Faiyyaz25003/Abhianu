"use client";
import { useState } from "react";

const CONTACT_INFO = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.338c0-1.043.84-1.846 1.879-1.846h1.713c.447 0 .832.3.938.732l.875 3.653a.956.956 0 01-.27.934L5.9 11.395a15.065 15.065 0 006.705 6.705l1.583-1.486a.956.956 0 01.934-.27l3.653.875c.432.106.732.49.732.938v1.713c0 1.039-.803 1.879-1.846 1.879C7.747 21.75 2.25 16.253 2.25 9.375V6.338z"
        />
      </svg>
    ),
    label: "Phone",
    value: "+91 89766 26521",
    href: "tel:8976626521",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    label: "Email",
    value: "hello@abhianu.in",
    href: "mailto:hello@abhianu.in",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    label: "Studio",
    value: "Andheri West, Mumbai – 400053",
    href: "https://maps.google.com/?q=Andheri+West+Mumbai",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: "https://wa.me/918976626521",
  },
];

const SERVICES = [
  "Wedding Photography",
  "Night Club Coverage",
  "Real Estate Shoot",
  "Event Anchoring",
  "Birthday Party",
  "Baby Ceremony",
  "Corporate Event",
  "Portrait Session",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div
      className="bg-[#080808] min-h-screen text-white overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .serif { font-family: 'Cormorant Garamond', serif; }

        /* HERO ANIMATIONS */
        .fade-up { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .fade-up-2 { animation: fadeUp 1s 0.15s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .fade-up-3 { animation: fadeUp 1s 0.3s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }

        /* DIVIDER */
        .gold-line { height:1px; background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5), rgba(201,168,76,0.8), rgba(201,168,76,0.5), transparent); }

        /* FORM FIELDS */
        .field-wrap { position: relative; }
        .field-label {
          position: absolute;
          left: 0; top: 14px;
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          transition: all 0.25s ease;
          pointer-events: none;
        }
        .field-label.up {
          top: -8px;
          font-size: 8px;
          color: #c9a84c;
          letter-spacing: 0.4em;
        }
        .field-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          padding: 14px 0 10px;
          font-size: 14px;
          color: white;
          outline: none;
          transition: border-color 0.3s;
          font-family: 'DM Sans', sans-serif;
        }
        .field-input:focus { border-bottom-color: #c9a84c; }
        .field-input.active { border-bottom-color: rgba(201,168,76,0.4); }

        select.field-input option { background: #0f0f0f; color: white; }

        /* CONTACT CARD */
        .contact-card {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 18px 20px;
          border: 0.5px solid rgba(255,255,255,0.07);
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .contact-card:hover {
          border-color: rgba(201,168,76,0.3);
          background: rgba(201,168,76,0.04);
          transform: translateX(4px);
        }
        .contact-icon {
          width: 38px; height: 38px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border: 0.5px solid rgba(201,168,76,0.25);
          border-radius: 50%;
          color: #c9a84c;
        }

        /* MAP FRAME */
        .map-frame {
          position: relative;
          border: 0.5px solid rgba(201,168,76,0.15);
          border-radius: 2px;
          overflow: hidden;
        }
        .map-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          box-shadow: inset 0 0 40px rgba(8,8,8,0.4);
        }

        /* MAP OVERLAY CORNERS */
        .corner { position: absolute; width: 16px; height: 16px; z-index: 3; }
        .corner-tl { top: 10px; left: 10px; border-top: 1px solid #c9a84c; border-left: 1px solid #c9a84c; }
        .corner-tr { top: 10px; right: 10px; border-top: 1px solid #c9a84c; border-right: 1px solid #c9a84c; }
        .corner-bl { bottom: 10px; left: 10px; border-bottom: 1px solid #c9a84c; border-left: 1px solid #c9a84c; }
        .corner-br { bottom: 10px; right: 10px; border-bottom: 1px solid #c9a84c; border-right: 1px solid #c9a84c; }

        /* SUBMIT BUTTON */
        .submit-btn {
          background: #c9a84c;
          color: #000;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          padding: 16px 48px;
          border: none;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .submit-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0);
          transition: background 0.3s;
        }
        .submit-btn:hover {
          background: #e0bb5c;
          box-shadow: 0 0 40px rgba(201,168,76,0.35);
          transform: translateY(-1px);
        }

        /* WATERMARK */
        .watermark {
          position: absolute;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(100px, 18vw, 220px);
          font-weight: 300;
          color: transparent;
          -webkit-text-stroke: 1px rgba(201,168,76,0.05);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        /* SUCCESS */
        .success-pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        {/* bg watermark */}
        <div
          className="watermark"
          style={{ top: "-10px", left: "-20px", opacity: 1 }}
          aria-hidden="true"
        >
          Contact
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="fade-up text-[10px] tracking-[0.6em] text-[#c9a84c] uppercase mb-5">
            Get In Touch · Abhianu Studio
          </p>
          <h1 className="fade-up-2 serif text-5xl md:text-7xl font-light leading-[1.05] mb-6">
            Let's Create Something
            <br />
            <em className="italic text-[#c9a84c]">Unforgettable</em>
          </h1>
          <p className="fade-up-3 text-sm text-white/40 tracking-widest uppercase">
            Mumbai · Pune · Pan India · Destination Shoots
          </p>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <div className="w-px h-12 bg-gradient-to-b from-[#c9a84c]/40 to-transparent" />
        </div>
      </section>

      <div className="gold-line" />

      {/* ── MAIN CONTENT ── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          {/* ── LEFT — Info + Map ── */}
          <div className="flex flex-col gap-10">
            {/* CONTACT CARDS */}
            <div>
              <p className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] mb-6">
                Reach Us
              </p>
              <div className="flex flex-col gap-3">
                {CONTACT_INFO.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="contact-card group"
                  >
                    <div className="contact-icon">{item.icon}</div>
                    <div>
                      <p className="text-[9px] tracking-[0.4em] uppercase text-[#c9a84c]/60 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-white/70 group-hover:text-white transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WORKING HOURS */}
            <div>
              <p className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] mb-4">
                Working Hours
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { day: "Mon – Fri", time: "9 AM – 8 PM" },
                  { day: "Saturday", time: "8 AM – 10 PM" },
                  { day: "Sunday", time: "By Booking" },
                ].map((h) => (
                  <div
                    key={h.day}
                    className="border-l border-[#c9a84c]/30 pl-3"
                  >
                    <p className="text-[9px] tracking-wider uppercase text-white/25 mb-1">
                      {h.day}
                    </p>
                    <p className="text-sm text-white/60">{h.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── MAP ── */}
            <div>
              <p className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] mb-4">
                Find Our Studio
              </p>
              <div className="map-frame">
                {/* corner decorations */}
                <div className="corner corner-tl" />
                <div className="corner corner-tr" />
                <div className="corner corner-bl" />
                <div className="corner corner-br" />

                {/* Google Maps embed — Andheri West, Mumbai */}
                <iframe
                  title="Abhianu Studio Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4954885674286!2d72.82954827503782!3d19.13587008208013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63a4d3c6a3f%3A0x3b2f8bc4d2e89c9!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="320"
                  style={{
                    border: "none",
                    display: "block",
                    filter:
                      "invert(90%) hue-rotate(180deg) saturate(0.6) brightness(0.85)",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* map label overlay */}
                <div className="absolute bottom-4 left-4 z-10 bg-[#080808]/90 backdrop-blur-sm border border-[#c9a84c]/20 px-4 py-2.5 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
                  <div>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c]">
                      Abhianu Studio
                    </p>
                    <p className="text-[10px] text-white/40">
                      Andheri West, Mumbai
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Andheri+West+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-[10px] tracking-[0.25em] uppercase text-white/30 hover:text-[#c9a84c] transition-colors"
              >
                Open in Google Maps
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
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT — FORM ── */}
          <div>
            <p className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] mb-2">
              Book a Session
            </p>
            <h2 className="serif text-3xl md:text-4xl font-light mb-2">
              Tell us about your
            </h2>
            <h2 className="serif text-3xl md:text-4xl font-light italic text-[#c9a84c] mb-10">
              special moment
            </h2>

            {sent ? (
              <div className="border border-[#c9a84c]/30 bg-[#c9a84c]/5 p-10 text-center rounded-sm">
                <div className="w-14 h-14 rounded-full border border-[#c9a84c]/40 flex items-center justify-center mx-auto mb-5 success-pulse">
                  <svg
                    className="w-6 h-6 text-[#c9a84c]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="serif text-2xl font-light mb-2">
                  Message Received!
                </p>
                <p className="text-sm text-white/40 leading-relaxed">
                  We'll reach out within 24 hours.
                  <br />
                  Thank you for choosing Abhianu Studio.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="field-wrap">
                    <label
                      className={`field-label ${form.name || focused === "name" ? "up" : ""}`}
                    >
                      Your Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      required
                      className={`field-input ${form.name ? "active" : ""}`}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div className="field-wrap">
                    <label
                      className={`field-label ${form.email || focused === "email" ? "up" : ""}`}
                    >
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      required
                      className={`field-input ${form.email ? "active" : ""}`}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="field-wrap">
                    <label
                      className={`field-label ${form.phone || focused === "phone" ? "up" : ""}`}
                    >
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      className={`field-input ${form.phone ? "active" : ""}`}
                      onChange={handleChange}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div className="field-wrap">
                    <label
                      className={`field-label ${form.date || focused === "date" ? "up" : ""}`}
                    >
                      Event Date
                    </label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      className={`field-input ${form.date ? "active" : ""}`}
                      onChange={handleChange}
                      onFocus={() => setFocused("date")}
                      onBlur={() => setFocused(null)}
                      style={{ colorScheme: "dark" }}
                    />
                  </div>
                </div>

                {/* Service Select */}
                <div className="field-wrap">
                  <label
                    className={`field-label ${form.service || focused === "service" ? "up" : ""}`}
                  >
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    className={`field-input ${form.service ? "active" : ""}`}
                    onChange={handleChange}
                    onFocus={() => setFocused("service")}
                    onBlur={() => setFocused(null)}
                    required
                  >
                    <option value="" disabled hidden />
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="field-wrap">
                  <label
                    className={`field-label ${form.message || focused === "message" ? "up" : ""}`}
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    className={`field-input resize-none ${form.message ? "active" : ""}`}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                {/* SUBMIT */}
                <div className="flex flex-col sm:flex-row gap-4 items-start pt-2">
                  <button type="submit" className="submit-btn">
                    Send Enquiry
                  </button>
                  <div className="flex flex-col justify-center">
                    <p className="text-[9px] tracking-[0.3em] uppercase text-white/20">
                      Or reach us directly
                    </p>
                    <a
                      href="https://wa.me/918976626521"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] tracking-[0.2em] uppercase text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors mt-1"
                    >
                      WhatsApp → +91 89766 26521
                    </a>
                  </div>
                </div>
              </form>
            )}

            {/* BOTTOM NOTE */}
            <div className="mt-10 pt-8 border-t border-white/5">
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/20 leading-relaxed">
                We typically respond within 2–4 hours · Consultations are free ·
                Destination shoots available across India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA STRIP ── */}
      <div className="gold-line" />
      <div className="py-10 px-6 text-center">
        <p className="serif text-xl font-light text-white/40 italic">
          Every great story deserves to be beautifully told.
        </p>
        <p className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c]/40 mt-2">
          — Abhianu Studio
        </p>
      </div>
    </div>
  );
}
