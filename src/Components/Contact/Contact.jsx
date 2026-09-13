"use client";

import Navbar from "../Layout/Navbar/Navbar";

const contactInfo = [
  {
    icon: "☎",
    title: "Call Us",
    value: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: "✉",
    title: "Email Us",
    value: "hello@abhianuedition.com",
    link: "mailto:hello@abhianuedition.com",
  },
  {
    icon: "⌖",
    title: "Visit Us",
    value: "Mumbai, Maharashtra, India",
    link: "https://maps.google.com/",
  },
  {
    icon: "◷",
    title: "Working Hours",
    value: "Mon – Sat | 9 AM – 8 PM",
    link: "#",
  },
];

const reasons = [
  {
    icon: "◉",
    title: "Professional Team",
    text: "Experienced photographers and videographers dedicated to creating beautiful memories.",
  },
  {
    icon: "✦",
    title: "Quick Response",
    text: "Connect with our team directly and get quick assistance for your requirements.",
  },
  {
    icon: "◇",
    title: "Custom Packages",
    text: "We create packages according to your event, requirements and budget.",
  },
  {
    icon: "♡",
    title: "Pan India Service",
    text: "From Mumbai to destinations across India, we are ready to capture your story.",
  },
];

export default function Contact() {
  return (
    <main className="bg-white text-[#171717]">
      <Navbar/>
      {/* ================= HERO ================= */}
      <section className="grid min-h-[610px] grid-cols-1 overflow-hidden lg:grid-cols-[48%_52%]">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-7 py-20 sm:px-10 lg:px-[7%] lg:py-24">
          <span className="mb-[18px] text-[11px] font-bold tracking-[4px] text-[#c58b22]">
            GET IN TOUCH
          </span>

          <h1 className="font-serif text-[42px] font-normal leading-[1.08] sm:text-[50px] lg:text-[58px]">
            Lets Create
            <br />
            <span className="font-serif italic text-[#c58b22]">
              Something Amazing.
            </span>
          </h1>

          <div className="my-6 h-[2px] w-[55px] bg-[#c58b22]" />

          <p className="max-w-[540px] text-[14px] leading-[1.9] text-[#666] sm:text-[15px]">
            Every special moment deserves to be beautifully captured. Whether
            it&apos;s a wedding, birthday, corporate event, celebration or a
            destination shoot, we&apos;d love to hear from you.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#c58b22] bg-[#c58b22] px-7 py-[14px] text-[11px] font-bold tracking-[1.5px] text-white transition-all duration-300 hover:bg-[#a87319]"
            >
              WHATSAPP US
            </a>

            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center border border-[#c58b22] px-7 py-[14px] text-[11px] font-bold tracking-[1.5px] text-[#171717] transition-all duration-300 hover:bg-[#c58b22] hover:text-white"
            >
              CALL US
            </a>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative h-[420px] overflow-hidden lg:h-auto">
          <img
            src="/images/contact-hero.jpg"
            alt="AbhiAnu Edition Photography"
            className="h-full w-full object-cover"
          />

          {/* FLOATING CARD */}
          <div className="absolute bottom-5 left-5 min-w-[260px] bg-white/95 px-6 py-5 shadow-[0_10px_35px_rgba(0,0,0,0.15)] sm:bottom-10 sm:left-10 sm:px-7 sm:py-6">
            <span className="mb-2 block text-[10px] tracking-[2px] text-[#c58b22]">
              AVAILABLE FOR
            </span>

            <strong className="block font-serif text-[16px] font-normal sm:text-[17px]">
              Weddings • Events • Shoots
            </strong>

            <small className="mt-1 block text-[12px] text-[#777]">
              Pan India & Destination
            </small>
          </div>
        </div>
      </section>

      {/* ================= REACH US ================= */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-[6%] lg:py-[90px]">
        {/* HEADING */}
        <div className="mx-auto max-w-[650px] text-center">
          <span className="mb-[18px] block text-[11px] font-bold tracking-[4px] text-[#c58b22]">
            REACH US
          </span>

          <h2 className="font-serif text-[35px] font-normal leading-[1.15] sm:text-[43px]">
            We&apos;d Love To
            <br />
            <span className="italic text-[#c58b22]">Hear From You.</span>
          </h2>

          <div className="mx-auto my-5 h-[2px] w-[55px] bg-[#c58b22]" />

          <p className="text-[14px] leading-[1.8] text-[#666]">
            Have a special occasion coming up? Let&apos;s talk about your vision
            and create something unforgettable together.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="mt-12 grid grid-cols-1 border border-[#eeeeee] sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => (
            <a
              href={item.link}
              key={index}
              target={item.title === "Visit Us" ? "_blank" : undefined}
              rel={
                item.title === "Visit Us" ? "noopener noreferrer" : undefined
              }
              className={`group flex items-center gap-[18px] px-6 py-8 no-underline transition-all duration-300 hover:bg-[#fffaf1] ${
                index !== contactInfo.length - 1
                  ? "border-b border-[#eeeeee] lg:border-b-0 lg:border-r"
                  : ""
              } ${index === 1 ? "sm:border-r-0 lg:border-r" : ""}`}
            >
              <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-[#d5a144] text-[20px] text-[#c58b22]">
                {item.icon}
              </div>

              <div>
                <span className="mb-[7px] block text-[10px] font-bold tracking-[2px] text-[#c58b22]">
                  {item.title}
                </span>

                <h3 className="m-0 text-[13px] font-medium text-[#171717] sm:text-[14px]">
                  {item.value}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#fafafa] px-6 py-20 sm:px-10 lg:px-[6%] lg:py-[90px]">
        <div className="mx-auto max-w-[650px] text-center">
          <span className="mb-[18px] block text-[11px] font-bold tracking-[4px] text-[#c58b22]">
            WHY CHOOSE US
          </span>

          <h2 className="font-serif text-[35px] font-normal leading-[1.15] sm:text-[43px]">
            More Than Just
            <br />
            <span className="italic text-[#c58b22]">Photography.</span>
          </h2>

          <div className="mx-auto my-5 h-[2px] w-[55px] bg-[#c58b22]" />
        </div>

        {/* REASONS */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <div
              key={index}
              className={`px-7 py-8 text-center ${
                index !== reasons.length - 1
                  ? "border-b border-[#ddd] lg:border-b-0 lg:border-r"
                  : ""
              } ${index === 1 ? "sm:border-r-0 lg:border-r" : ""}`}
            >
              <div className="mb-[18px] text-[30px] text-[#c58b22]">
                {item.icon}
              </div>

              <h3 className="mb-3 font-serif text-[18px] font-normal">
                {item.title}
              </h3>

              <p className="text-[13px] leading-[1.7] text-[#777]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section className="grid min-h-[520px] grid-cols-1 lg:grid-cols-[45%_55%]">
        {/* LOCATION CONTENT */}
        <div className="bg-[#f8f6f1] px-8 py-16 sm:px-12 lg:px-[10%] lg:py-20">
          <span className="mb-[18px] block text-[11px] font-bold tracking-[4px] text-[#c58b22]">
            FIND US
          </span>

          <h2 className="font-serif text-[36px] font-normal leading-[1.1] sm:text-[45px]">
            Visit Our
            <br />
            <span className="italic text-[#c58b22]">Studio.</span>
          </h2>

          <div className="my-6 h-[2px] w-[55px] bg-[#c58b22]" />

          <p className="leading-[1.8] text-[#666]">
            AbhiAnu Edition
            <br />
            Mumbai, Maharashtra, India
          </p>

          {/* DETAILS */}
          <div className="my-7 space-y-5">
            <div>
              <strong className="mb-1 block text-[10px] tracking-[2px] text-[#c58b22]">
                PHONE
              </strong>

              <span className="text-[14px]">+91 98765 43210</span>
            </div>

            <div>
              <strong className="mb-1 block text-[10px] tracking-[2px] text-[#c58b22]">
                EMAIL
              </strong>

              <span className="text-[14px]">hello@abhianuedition.com</span>
            </div>
          </div>

          <a
            href="https://maps.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border border-[#c58b22] bg-[#c58b22] px-7 py-[14px] text-[11px] font-bold tracking-[1.5px] text-white transition-all duration-300 hover:bg-[#a87319]"
          >
            GET DIRECTIONS
          </a>
        </div>

        {/* MAP */}
        <div className="min-h-[420px] lg:min-h-[520px]">
          <iframe
            src="https://www.google.com/maps?q=Mumbai,Maharashtra,India&output=embed"
            loading="lazy"
            title="AbhiAnu Edition Location"
            className="h-full min-h-[420px] w-full border-0 lg:min-h-[520px]"
          />
        </div>
      </section>

      {/* ================= WHATSAPP CTA ================= */}
      <section
        className="flex min-h-[400px] items-center justify-center bg-cover bg-center bg-no-repeat px-5 text-center text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(10,10,10,.78), rgba(10,10,10,.78)), url("/images/contact-cta.jpg")',
        }}
      >
        <div className="max-w-[700px] py-[70px]">
          <span className="mb-[18px] block text-[11px] font-bold tracking-[4px] text-[#d5a144]">
            LET&apos;S CAPTURE YOUR MOMENTS
          </span>

          <h2 className="font-serif text-[38px] font-normal leading-[1.1] sm:text-[48px]">
            Have An Event
            <br />
            <span className="italic text-[#d5a144]">In Mind?</span>
          </h2>

          <p className="mx-auto my-5 max-w-[520px] text-[14px] leading-[1.8] text-[#ddd]">
            Tell us about your special occasion and let&apos;s create something
            beautiful together.
          </p>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#c58b22] px-7 py-[15px] text-[11px] font-bold tracking-[1.5px] text-white transition-all duration-300 hover:bg-[#a87319]"
          >
            <span className="text-[17px]">◉</span>
            CHAT ON WHATSAPP
          </a>
        </div>
      </section>
    </main>
  );
}
