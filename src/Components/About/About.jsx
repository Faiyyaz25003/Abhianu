  "use client";
  import { useEffect, useRef, useState } from "react";


  function useScrollReveal(threshold = 0.15) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
        { threshold }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, []);
    return [ref, visible];
  }

  function Reveal({ children, delay = 0, dir = "up", className = "" }) {
    const [ref, visible] = useScrollReveal();
    const t = { up:"translateY(48px)", left:"translateX(-48px)", right:"translateX(48px)", fade:"translateY(20px) scale(0.97)" };
    return (
      <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : t[dir], transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s` }}>
        {children}
      </div>
    );
  }

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
        if (start >= num) { setCount(num); clearInterval(timer); }
        else setCount(start);
      }, 20);
      return () => clearInterval(timer);
    }, [visible, target]);
    return <span ref={ref}>{count}{suffix}</span>;
  }

  const SERVICES = [
    { icon: "💍", title: "Wedding Photography", desc: "Candid moments, sacred rituals, stolen glances — I capture the love that words can\'t describe." },
    { icon: "🏠", title: "Real Estate", desc: "Spaces that sell themselves. Architectural compositions that make buyers fall in love before they step inside." },
    { icon: "🎭", title: "Events & Portraits", desc: "Corporate events to intimate portraits. Every person has a story. I find the frame that tells it best." },
    { icon: "✈️", title: "Destination Shoots", desc: "Rajasthan sunsets. Goa shorelines. Kerala backwaters. I travel where the story takes me." },
  ];

  const PROCESS = [
    { num: "01", title: "Connect", desc: "We talk. I listen. I understand what makes your story unique before I pick up the camera." },
    { num: "02", title: "Plan", desc: "Every shoot is storyboarded — locations, light timing, sequences. Nothing is left to chance." },
    { num: "03", title: "Capture", desc: "I disappear into the background. The moments happen naturally. I just freeze them." },
    { num: "04", title: "Deliver", desc: "Hand-edited, colour-graded masterpieces. Delivered with care. Memories that last forever." },
  ];

  export default function About() {
    const [heroReady, setHeroReady] = useState(false);
    const parallaxRef = useRef(null);

    useEffect(() => {
      setHeroReady(true);
      const onScroll = () => {
        if (parallaxRef.current) parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.28}px)`;
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
      <div
        className="bg-[#080808] text-white min-h-screen overflow-x-hidden"
        style={{ fontFamily: "\'Cormorant Garamond\', serif" }}
      >
        <style>{`
          @import url(\'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap\');
          .sans { font-family: \'DM Sans\', sans-serif; }
          .h1 { animation: fup 1.1s 0.1s cubic-bezier(0.16,1,0.3,1) forwards; opacity:0; }
          .h2 { animation: fup 1.1s 0.3s cubic-bezier(0.16,1,0.3,1) forwards; opacity:0; }
          .h3 { animation: fup 1.1s 0.5s cubic-bezier(0.16,1,0.3,1) forwards; opacity:0; }
          .h4 { animation: fup 1.1s 0.65s cubic-bezier(0.16,1,0.3,1) forwards; opacity:0; }
          @keyframes fup { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:none} }
          .gold { color: #c9a84c; }
          .gold-bg { background: #c9a84c; }
          .line-gold { height:1px; background:linear-gradient(90deg,transparent,rgba(201,168,76,.6),rgba(201,168,76,.9),rgba(201,168,76,.6),transparent); }
          .shimmer { background: linear-gradient(90deg, transparent, rgba(201,168,76,.07), transparent); background-size: 200% 100%; animation: shimmer 3.5s infinite; }
          @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
          .wm { font-family:\'Cormorant Garamond\',serif; font-size:clamp(100px,20vw,240px); font-weight:300; color:transparent; -webkit-text-stroke:1px rgba(201,168,76,.05); white-space:nowrap; pointer-events:none; user-select:none; line-height:1; letter-spacing:-.02em; }
          .noise { background-image: url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E"); opacity:.03; }
          @keyframes caret { 0%,100%{opacity:.3;transform:translateY(0)} 50%{opacity:.8;transform:translateY(6px)} }
          .scroll-caret { animation: caret 2.2s ease-in-out infinite; }
          .cta-btn { display:inline-flex; align-items:center; gap:10px; padding:14px 36px; font-family:\'DM Sans\',sans-serif; font-size:10px; letter-spacing:.35em; text-transform:uppercase; background:#c9a84c; color:#000; font-weight:500; transition:all .3s; }
          .cta-btn:hover { background:#e0bb5c; box-shadow:0 0 40px rgba(201,168,76,.35); transform:translateY(-2px); }
          .cta-outline { display:inline-flex; align-items:center; gap:10px; padding:14px 36px; font-family:\'DM Sans\',sans-serif; font-size:10px; letter-spacing:.35em; text-transform:uppercase; border:.5px solid rgba(201,168,76,.5); color:#c9a84c; transition:all .3s; }
          .cta-outline:hover { background:rgba(201,168,76,.08); border-color:#c9a84c; }
          .portrait-frame { position:relative; }
          .portrait-frame::before { content:\'\'; position:absolute; top:-12px; left:-12px; right:12px; bottom:12px; border:1px solid rgba(201,168,76,.3); pointer-events:none; z-index:0; }
          .portrait-frame::after { content:\'\'; position:absolute; bottom:-12px; right:-12px; top:12px; left:12px; border:1px solid rgba(201,168,76,.1); pointer-events:none; z-index:0; }
          .service-card { border:.5px solid rgba(255,255,255,.07); transition:all .4s cubic-bezier(0.16,1,0.3,1); position:relative; overflow:hidden; cursor:default; }
          .service-card::before { content:\'\'; position:absolute; inset:0; background:linear-gradient(135deg, rgba(201,168,76,.07), transparent); opacity:0; transition:opacity .4s; }
          .service-card:hover { border-color:rgba(201,168,76,.4); transform:translateY(-6px); box-shadow:0 20px 60px rgba(0,0,0,.4); }
          .service-card:hover::before { opacity:1; }
          .process-step { border-left:1px solid rgba(201,168,76,.15); padding-left:28px; transition:border-color .3s; }
          .process-step:hover { border-color:rgba(201,168,76,.6); }
          .dual-photo-left { clip-path: polygon(0 0, 100% 0, 88% 100%, 0% 100%); }
          .dual-photo-right { clip-path: polygon(12% 0, 100% 0, 100% 100%, 0% 100%); }
          @keyframes floatbadge { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
          .float-badge { animation: floatbadge 4s ease-in-out infinite; }
          .quotemark { font-size:120px; line-height:.8; color:rgba(201,168,76,.12); font-family:\'Cormorant Garamond\',serif; font-style:italic; font-weight:300; }
          .dual-img-wrap { position:relative; display:grid; grid-template-columns:1fr 1fr; gap:0; }
          .img-overlay-left { position:absolute; inset:0; background:linear-gradient(to right, transparent 70%, #080808); pointer-events:none; z-index:5; }
        `}</style>

        {/* HERO */}
        <section className="relative h-screen flex items-end pb-24 overflow-hidden">
          <div
            ref={parallaxRef}
            className="absolute inset-0 will-change-transform"
          >
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1800&q=90"
              alt=""
              className="w-full h-full object-cover object-top scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/30" />
          </div>
          <div className="absolute inset-0 noise pointer-events-none" />
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
          <div className="scroll-caret absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <p className="sans text-[9px] tracking-[.45em] text-white/25 uppercase">
              Scroll
            </p>
            <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c]/50 to-transparent" />
          </div>
          <div
            className="wm absolute right-[-60px] bottom-[-40px] pointer-events-none"
            aria-hidden="true"
          >
            AM
          </div>
        </section>

        {/* STATS BAR */}
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

        {/* THE STORY — Dual Photos + Bio */}
        <section className="py-28 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.1fr] gap-20 items-center">
            {/* DUAL PORTRAIT LAYOUT */}
            <Reveal dir="left">
              <div className="relative">
                {/* Main portrait */}
                <div className="portrait-frame relative z-10">
                  <div className="aspect-[4/4] overflow-hidden relative z-10">
                    <img src="Abhishek2.jpeg" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 to-transparent" />
                  </div>
                </div>
                {/* Second photo floating bottom-right */}
                <div
                  className="absolute -bottom-10 -right-8 w-44 h-52 z-20 overflow-hidden border-2 border-[#080808]"
                  style={{ boxShadow: "0 0 0 1px rgba(201,168,76,.25)" }}
                >
                  <img src="Abhishek1.jpeg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/30 to-transparent" />
                </div>
                {/* Year badge */}
                <div className="float-badge absolute -top-5 -left-4 z-20 bg-[#c9a84c] text-black p-4 w-28 text-center">
                  <p
                    className="text-xl font-light"
                    style={{ fontFamily: "\'Cormorant Garamond\',serif" }}
                  >
                    2012
                  </p>
                  <p className="sans text-[7px] tracking-[.3em] uppercase font-medium mt-0.5">
                    Since
                  </p>
                </div>
                {/* Corner accent */}
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
                  I don\'t just capture
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
                    , and I\'ve been obsessed with light, shadow, and the
                    in-between since I first picked up a camera in 2012. What
                    started as curiosity became a calling.
                  </p>
                  <p className="sans text-sm text-white/50 leading-[1.9]">
                    Based in{" "}
                    <strong className="text-white/80 font-normal">Mumbai</strong>,
                    I\'ve documented over 850 stories across weddings, real
                    estate, events, and portraits. My approach is simple — be
                    present, be quiet, and let the moment happen. Then freeze it
                    forever.
                  </p>
                  <p className="sans text-sm text-white/50 leading-[1.9]">
                    I believe every frame should feel like a memory, not a
                    photograph. That\'s the standard I hold myself to. Every
                    single time.
                  </p>
                </div>
                <div className="mt-10 mb-10">
                  <p
                    className="text-4xl italic text-[#c9a84c]/70"
                    style={{
                      fontFamily: "\'Cormorant Garamond\',serif",
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
                    Book a Session{" "}
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

        {/* SERVICES — Replacing Philosophy */}
        <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
          <div
            className="wm absolute -top-8 -left-10 pointer-events-none opacity-70"
            aria-hidden="true"
          >
            Work
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <Reveal>
              <div className="text-center mb-16">
                <p className="sans text-[10px] tracking-[.5em] gold uppercase mb-4">
                  What I Offer
                </p>
                <h2 className="text-4xl md:text-5xl font-light">
                  Specialisations
                </h2>
                <div className="w-12 h-px gold-bg mx-auto mt-5 opacity-60" />
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.12} dir="up">
                  <div className="service-card p-8 rounded-sm h-full">
                    <div className="text-4xl mb-5">{s.icon}</div>
                    <h3 className="text-2xl font-light mb-3">{s.title}</h3>
                    <p className="sans text-sm text-white/40 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MY PROCESS — Replacing Timeline */}
        <section className="py-28 px-6 relative overflow-hidden">
          <div
            className="wm absolute -bottom-10 right-[-80px] pointer-events-none opacity-70"
            aria-hidden="true"
          >
            Process
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <Reveal>
              <div className="text-center mb-20">
                <p className="sans text-[10px] tracking-[.5em] gold uppercase mb-4">
                  How It Works
                </p>
                <h2 className="text-4xl md:text-5xl font-light">
                  The Abhianu Process
                </h2>
                <div className="w-12 h-px gold-bg mx-auto mt-5 opacity-60" />
              </div>
            </Reveal>

            {/* Large photo + process steps */}
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-center">
              <Reveal dir="left">
                <div className="relative">
                  <div
                    className="aspect-[4/5] overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)",
                    }}
                  >
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Abhishek at work"
                      className="w-full h-full object-cover object-top"
                      style={{
                        filter: "grayscale(15%) contrast(1.1) brightness(0.9)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent" />
                  </div>
                  {/* Floating quote over image */}
                  <div className="absolute bottom-6 left-4 right-4 z-10">
                    <div className="bg-[#080808]/80 backdrop-blur-sm border border-[#c9a84c]/20 p-5">
                      <p className="text-lg italic font-light text-white/80 leading-snug">
                        "Every shoot is a conversation between me and the light."
                      </p>
                      <p className="sans text-[8px] tracking-[.4em] uppercase text-[#c9a84c]/60 mt-3">
                        — Abhishek Maurya
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal dir="right" delay={0.15}>
                <div className="flex flex-col gap-10">
                  {PROCESS.map((p, i) => (
                    <div key={p.num} className="process-step group">
                      <div className="flex items-baseline gap-4 mb-2">
                        <span className="sans text-[10px] tracking-[.4em] gold uppercase">
                          {p.num}
                        </span>
                        <h3 className="text-2xl font-light group-hover:text-[#c9a84c] transition-colors duration-300">
                          {p.title}
                        </h3>
                      </div>
                      <p className="sans text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL — Replacing Awards */}
        <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <Reveal>
              <div className="text-center mb-16">
                <p className="sans text-[10px] tracking-[.5em] gold uppercase mb-4">
                  Kind Words
                </p>
                <h2 className="text-4xl md:text-5xl font-light">Clients Speak</h2>
                <div className="w-12 h-px gold-bg mx-auto mt-5 opacity-60" />
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Priya & Rohan",
                  event: "Wedding, Mumbai 2023",
                  text: "Abhishek has a rare gift — he made us forget the camera existed. The photos look like paintings from a dream.",
                },
                {
                  name: "Sneha Kapoor",
                  event: "Portrait Session, Pune",
                  text: "I\'ve never felt so comfortable in front of a lens. He found the version of me I didn\'t know existed.",
                },
                {
                  name: "The Mehta Family",
                  event: "Anniversary, Goa 2022",
                  text: "Every photo told a story we lived but almost forgot. We\'ll treasure these for generations.",
                },
                {
                  name: "Arjun Enterprises",
                  event: "Corporate Event, Mumbai",
                  text: "Professional, punctual, and the results were beyond our expectations. Our team looked incredible.",
                },
                {
                  name: "Nisha & Kartik",
                  event: "Destination Wedding, Udaipur",
                  text: "Flying him to Udaipur was the best decision we made. Worth every penny, every moment, every frame.",
                },
                {
                  name: "Lakshmi Reddy",
                  event: "Maternity Shoot, Hyderabad",
                  text: "He captured something so sacred and intimate with such respect and artistry. I\'m in awe every day.",
                },
              ].map((t, i) => (
                <Reveal key={t.name} delay={i * 0.1} dir="up">
                  <div className="service-card p-7 rounded-sm h-full flex flex-col">
                    <div
                      className="quotemark text-5xl leading-none mb-3"
                      style={{ fontSize: "60px" }}
                    >
                      "
                    </div>
                    <p className="sans text-sm text-white/50 leading-[1.85] flex-1 mb-6">
                      {t.text}
                    </p>
                    <div>
                      <p className="font-light text-white/80">{t.name}</p>
                      <p className="sans text-[9px] tracking-[.3em] uppercase text-[#c9a84c]/60 mt-1">
                        {t.event}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FULL-WIDTH IMAGE BREAK */}
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

        {/* HOW I WORK */}
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
                  <div className="p-8 border border-white/[.08] rounded-sm hover:border-[#c9a84c]/30 transition-all duration-500 h-full group">
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

        {/* CTA */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="Abhishek2.jpeg"
              alt=""
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <Reveal dir="up">
              <p className="sans text-[10px] tracking-[.5em] gold uppercase mb-6">
                Let\'s Create Together
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
                  Book Abhishek{" "}
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

        <div className="line-gold" />
      </div>
    );
  }