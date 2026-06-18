import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import heroImg from "@/assets/hero.jpg";
import heroVideo1 from "@/assets/hero/1.mp4";
import heroVideo2 from "@/assets/hero/2.mp4";
import heroVideo3 from "@/assets/hero/3.mp4";
import whoweareImg from "@/assets/whoweare.png";
import pillarLegacy from "@/assets/pillar-legacy.png";
import pillarCollab from "@/assets/pillar-collab.png";
import pillarOwnership from "@/assets/pillar-ownership.png";
import videoPoster from "@/assets/video-poster.jpg";
import bgSto from "@/assets/bg-sto.jpg";
import bgConsulting from "@/assets/bg-consulting.jpg";
import pAqueduct from "@/assets/p-aqueduct.jpg";
import pTransit from "@/assets/p-transit.jpg";
import pUniversity from "@/assets/p-university.jpg";
import pDatacenter from "@/assets/p-datacenter.jpg";
import pHospital from "@/assets/p-hospital.jpg";
import pMuseum from "@/assets/p-museum.jpg";

const heroVideos = [heroVideo1, heroVideo2, heroVideo3];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AeroDefense Corp. | Advanced Aerospace & Security" },
      {
        name: "description",
        content:
          "Pioneering the future of aerospace and defense. AeroDefense Corp. delivers next-generation autonomous systems and advanced manufacturing for global security.",
      },
      { property: "og:title", content: "AeroDefense Corp. | Advanced Aerospace" },
      {
        property: "og:description",
        content:
          "Pioneering the future of aerospace and defense. AeroDefense Corp. delivers next-generation autonomous systems and advanced manufacturing for global security.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    n: "01",
    eyebrow: "Innovation",
    title: "Defining the next generation of flight.",
    body: "At AeroDefense, innovation is not just an objective—it's our foundation. We push the boundaries of physics and engineering to develop autonomous systems, advanced stealth capabilities, and next-generation propulsion.",
    cta: "Explore R&D",
    href: "#innovation",
    img: pillarLegacy,
    caption: "Advanced Composites Lab — Facility 04",
  },
  {
    n: "02",
    eyebrow: "Security",
    title: "Protecting what matters most.",
    body: "We equip our allied forces with the unmatched capabilities required to maintain air dominance. Our platforms are designed for survivability, precision, and unwavering reliability in contested environments.",
    cta: "Defense Systems",
    href: "#platforms",
    img: pillarCollab,
    caption: "Multi-Domain Integration Testing",
  },
  {
    n: "03",
    eyebrow: "Global Reach",
    title: "Operational everywhere.",
    body: "From the stratosphere to deep space, our advanced platforms provide global reach and persistent domain awareness. We ensure complete operational superiority across every domain, anywhere in the world.",
    cta: "Global Footprint",
    href: "#groups",
    img: pillarOwnership,
    caption: "High Altitude ISR Operations",
  },
];

const stats = [
  { value: "$4B+", label: "Annual R&D Investment" },
  { value: "45", label: "Allied Nations Served" },
  { value: "30K+", label: "Engineers & Scientists" },
  { value: "100%", label: "Mission Success Rate" },
];

const projects = [
  {
    img: pDatacenter,
    name: "Project F-Next",
    service: "Next-Gen Air Dominance",
    company: "Skunkworks Div.",
    span: "lg:col-span-8",
    aspect: "aspect-[21/10]",
  },
  {
    img: pAqueduct,
    name: "MQ-X Vanguard",
    service: "Autonomous ISR",
    company: "Unmanned Systems",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    img: pTransit,
    name: "C-22 Heavy Lift",
    service: "Strategic Mobility",
    company: "Aeronautics",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    img: pUniversity,
    name: "Orbital Defender",
    service: "Space Systems",
    company: "Space Div.",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    img: pHospital,
    name: "L-19 Sentinel",
    service: "Early Warning",
    company: "Defense Capabilities",
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    img: pMuseum,
    name: "X-44 Hypersonic",
    service: "Advanced Propulsion",
    company: "Skunkworks Div.",
    span: "lg:col-span-12",
    aspect: "aspect-[21/9]",
  },
];

const quotes = [
  {
    body: "AeroDefense's focus on next-generation autonomy lets our allied forces think and act faster as they secure global peace in highly contested environments.",
    name: "Gen. Richard Vance (Ret.)",
    role: "Former USAF Chief of Staff",
  },
  {
    body: "Being partnered with AeroDefense lets us take on the most complex defense challenges while giving our warfighters a real edge in multi-domain operations.",
    name: "David H. Layton",
    role: "Director, Global Security",
  },
  {
    body: "AeroDefense's commitment to uncompromised engineering was the natural choice to ensure the multi-generational air superiority our forces require.",
    name: "Dr. Sarah Wallington",
    role: "Chief Engineer, Aeronautics",
  },
];

function Index() {
  return (
    <main className="bg-background text-foreground font-mono">
      <Nav />
      <Hero />
      <WhoWeAre />
      <Pillars />
      <MissionDriven />
      <Stats />
      <BusinessGroups />
      <Portfolio />
      <Voices />
      <Closing />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md text-white">
      <div className="flex items-center justify-between px-6 lg:px-10 py-4">
        <div className="flex items-center gap-4">
          <span className="font-display font-extrabold text-2xl tracking-tighter">AERODEFENSE</span>
          <span className="hidden md:inline-block text-[9px] border border-white/25 px-1.5 py-0.5 uppercase tracking-widest">
            Corp.
          </span>
        </div>
        <div className="flex items-center gap-8 uppercase tracking-widest text-[10px] font-medium">
          <a href="#platforms" className="hidden sm:block hover:text-accent transition-colors">
            Platforms
          </a>
          <a href="#capabilities" className="hidden sm:block hover:text-accent transition-colors">
            Capabilities
          </a>
          <a href="#innovation" className="hidden md:block hover:text-accent transition-colors">
            Innovation
          </a>
          <a
            href="#contact"
            className="bg-white text-black px-4 py-2 hover:bg-accent hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [videoIndex, setVideoIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Control video playback based on active videoIndex
  useEffect(() => {
    heroVideos.forEach((_, idx) => {
      const video = videoRefs.current[idx];
      if (video) {
        if (idx === videoIndex) {
          video.currentTime = 0;
          video.play().catch((err) => {
            console.warn(`Autoplay or play failed for video ${idx}:`, err);
          });
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [videoIndex]);

  return (
    <header className="relative min-h-screen flex flex-col justify-end overflow-hidden border-b border-border text-white pt-20 pb-16 lg:pb-24">
      {/* Background Videos (Preloaded and Cross-faded) */}
      {heroVideos.map((src, idx) => (
        <video
          key={src}
          ref={(el) => {
            videoRefs.current[idx] = el;
          }}
          src={src}
          muted
          playsInline
          preload="auto"
          autoPlay={idx === 0}
          onEnded={() => {
            if (idx === videoIndex) {
              setVideoIndex((prev) => (prev + 1) % heroVideos.length);
            }
          }}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-[1500ms] ease-in-out ${
            idx === videoIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 px-8 lg:px-16 xl:px-20 w-full flex flex-col items-start">
        <div
          className={`space-y-2 mb-6 transition-all duration-[1500ms] ease-out delay-[300ms] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="h-px w-20 bg-accent/80 animate-line" />
          <span className="text-accent font-semibold uppercase tracking-[0.4em] block text-xs md:text-sm drop-shadow-md">
            Advanced Aerospace & Defense
          </span>
        </div>

        <h1
          className={`font-display text-5xl sm:text-6xl md:text-8xl lg:text-[110px] xl:text-[130px] leading-[0.85] font-extrabold tracking-tighter text-balance text-white drop-shadow-xl transition-all duration-[1500ms] ease-out delay-[700ms] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          AIR
          <br />
          <span className="text-accent">DOMINANCE.</span>
        </h1>

        <div
          className={`mt-10 max-w-2xl flex flex-col items-start transition-all duration-[1500ms] ease-out delay-[1100ms] ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg md:text-xl leading-relaxed text-pretty text-white/90 drop-shadow-md mb-10">
            Delivering next-generation autonomous and crewed flight systems to ensure global
            security and technological superiority.
          </p>

          <div className="flex flex-col justify-start items-start">
            <span className="text-[9px] uppercase tracking-widest text-white/60 mb-4 drop-shadow-sm">
              [ Scroll to explore capabilities ]
            </span>
            <div className="h-16 w-px bg-white/30" />
          </div>
        </div>
      </div>
    </header>
  );
}

function WhoWeAre() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const contentParallax = useTransform(scrollYProgress, [0, 1], isMobile ? [84, -84] : [288, -288]);
  const imageParallax = useTransform(scrollYProgress, [0, 1], isMobile ? [24, -24] : [108, -108]);
  const yContent = useSpring(contentParallax, { stiffness: 170, damping: 22, mass: 0.28 });
  const yImage = useSpring(imageParallax, { stiffness: 150, damping: 24, mass: 0.3 });

  return (
    <section
      ref={(el) => {
        if (el && !containerRef.current) {
          containerRef.current = el;
          setMounted(true);
        }
      }}
      className="grid grid-cols-12 border-b border-border overflow-hidden min-h-[60vh] lg:min-h-[80vh] items-start"
    >
      <motion.div
        style={{ y: yContent }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="col-span-12 lg:col-span-4 p-8 lg:p-16 xl:p-20 border-r border-border h-full flex flex-col justify-start"
      >
        <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-10">
          01 / Who we are
        </h2>
        <p className="text-2xl lg:text-3xl leading-[1.1] tracking-tight font-display font-medium text-balance">
          AeroDefense unites brilliant minds in aerospace engineering, autonomous systems, and
          advanced defense manufacturing to secure the future.
        </p>
        <p className="mt-8 max-w-md opacity-70 leading-relaxed">
          With unmatched access to advanced R&D and bleeding-edge technology, our divisions
          collaborate across a thriving ecosystem — built to provide our allied forces with the
          decisive advantage required for multi-domain supremacy.
        </p>
      </motion.div>
      <motion.div
        style={{ y: yContent }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.15, ease: "easeOut" }}
        className="col-span-12 lg:col-span-8 p-8 lg:p-16 xl:p-20 h-full flex flex-col justify-start"
      >
        <div className="overflow-hidden relative aspect-[21/10] w-full">
          <motion.img
            style={{ y: yImage }}
            src={whoweareImg}
            alt="Advanced stealth aircraft prototype"
            width={1536}
            height={864}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover scale-130"
          />
        </div>
        <div className="mt-4 flex flex-wrap justify-between items-baseline gap-4 text-[10px] uppercase tracking-widest opacity-70">
          <span>Project F-Next Final Assembly</span>
          <span>Aeronautics Division / Skunkworks</span>
        </div>
      </motion.div>
    </section>
  );
}

function Pillars() {
  return (
    <section
      id="capabilities"
      className="py-24 lg:py-32 px-8 lg:px-16 xl:px-20 grid grid-cols-12 gap-y-12 lg:gap-12 border-b border-border"
    >
      <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
          02 / Our Capabilities
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tighter leading-[0.9]">
          INNOVATION.
          <br />
          SECURITY.
          <br />
          REACH.
        </h2>
        <div className="h-px w-12 bg-accent" />
        <p className="opacity-70 leading-relaxed max-w-sm">
          Three pillars define how our platforms operate — and why they dominate the skies.
        </p>
      </div>

      <div className="col-span-12 lg:col-span-8 space-y-24 lg:space-y-32">
        {pillars.map((p) => (
          <article key={p.n} className="group">
            <div className="flex items-baseline gap-6 mb-8">
              <span className="text-5xl font-display font-bold text-accent/25 italic tracking-tighter group-hover:text-accent transition-colors">
                {p.n}
              </span>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.3em] opacity-50 mb-1">
                  {p.eyebrow}
                </span>
                <h3 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">
                  {p.title}
                </h3>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                width={1536}
                height={864}
                loading="lazy"
                className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <div className="relative bg-background p-5 border-t border-border lg:absolute lg:bottom-0 lg:right-0 lg:max-w-sm lg:border-l lg:p-8">
                <p className="text-sm leading-snug mb-4">{p.body}</p>
                <a
                  href={p.href}
                  className="text-[10px] uppercase tracking-widest font-bold border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors"
                >
                  {p.cta} →
                </a>
              </div>
            </div>
            <div className="mt-4 text-[10px] uppercase tracking-widest opacity-50">{p.caption}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MissionDriven() {
  return (
    <section
      id="innovation"
      className="bg-foreground text-background px-8 lg:px-16 xl:px-20 py-24 lg:py-32 border-b border-border"
    >
      <div className="grid grid-cols-12 gap-y-12 lg:gap-12 items-end">
        <div className="col-span-12 lg:col-span-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-8 block">
            03 / Mission Driven
          </span>
          <h2 className="font-display text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8">
            Engineering excellence.
          </h2>
          <p className="text-background/70 max-w-md leading-relaxed mb-8">
            AeroDefense is founded on the belief that securing the future requires unparalleled
            engineering. At every level, our people are empowered to think critically and innovate
            relentlessly — driven by mission success and unwavering accountability.
          </p>
          <a
            href="#"
            className="inline-block text-[11px] uppercase tracking-widest font-bold border-b border-background pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            Explore careers →
          </a>
        </div>
        <div className="col-span-12 lg:col-span-7 relative group cursor-pointer">
          <img
            src={videoPoster}
            alt="Aerospace engineer inspecting drone payload"
            width={1536}
            height={864}
            loading="lazy"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 grid place-items-center">
            <div className="size-20 rounded-full bg-background/15 backdrop-blur-md border border-background/30 grid place-items-center group-hover:bg-accent group-hover:border-accent transition-colors">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[14px] border-l-background border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap justify-between items-baseline gap-4 text-[10px] uppercase tracking-widest text-background/60">
            <span>AERODEFENSE_MISSION_V1 — 02:14</span>
            <span>Unmanned Systems Payload Testing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-foreground text-background py-24 lg:py-32 px-8 lg:px-16 xl:px-20 relative overflow-hidden border-b border-background/10">
      <div className="mb-16 flex flex-col lg:flex-row justify-between gap-8 lg:items-end">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent block mb-4">
            04 / At a glance
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold tracking-tighter max-w-2xl leading-[0.95]">
            A global force, achieved through uncompromising standards.
          </h2>
        </div>
        <p className="max-w-sm text-background/60 text-[12px] leading-relaxed">
          AeroDefense stands as a prime contractor for defense technology worldwide — built on
          decades of expertise, massive R&D investments, and a commitment to never failing the
          mission.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {stats.map((s, i) => (
          <div key={s.label} className="group cursor-default">
            <span className="block text-[10px] uppercase mb-6 text-accent font-bold tracking-widest">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="font-display text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-extrabold group-hover:translate-x-2 transition-transform duration-500">
              {s.value}
            </div>
            <div className="h-px w-full bg-background/15 mt-6 group-hover:bg-accent transition-colors" />
            <span className="text-[10px] uppercase tracking-widest mt-4 block opacity-70">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-20 pt-8 border-t border-background/10 max-w-2xl text-background/40 text-[10px] leading-relaxed italic">
        * Based on public disclosures and unclassified mission metrics. See AeroDefense Legal Notice
        for additional information.
      </p>
    </section>
  );
}

function BusinessGroups() {
  const groups = [
    {
      eyebrow: "Aeronautics Division",
      name: "Skunkworks & Advanced Aircraft",
      body: "The world's premier aerospace engineering firm, delivering stealth fighters, hypersonic prototypes, and autonomous air vehicles designed for absolute air superiority.",
      img: bgSto,
      cta: "Explore Aeronautics",
    },
    {
      eyebrow: "Defense & Space",
      name: "Tactical Systems",
      body: "A top-tier provider of missile defense, strategic deterrence, and satellite architectures — ensuring that our allied forces maintain control across every contested domain.",
      img: bgConsulting,
      cta: "Explore Tactical Systems",
    },
  ];
  return (
    <section id="groups" className="px-8 lg:px-16 xl:px-20 py-24 lg:py-32 border-b border-border">
      <div className="mb-16 flex flex-col lg:flex-row justify-between gap-6 lg:items-end">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent block mb-4">
            05 / Operating Divisions
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Integrated forces pushing the bleeding edge.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {groups.map((g) => (
          <article key={g.name} className="group flex flex-col">
            <div className="relative overflow-hidden bg-muted">
              <img
                src={g.img}
                alt={g.name}
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>
            <div className="pt-6">
              <span className="text-[10px] uppercase tracking-widest text-accent font-bold block mb-3">
                {g.eyebrow}
              </span>
              <h3 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                {g.name}
              </h3>
              <p className="max-w-xl leading-relaxed opacity-75 mb-6">{g.body}</p>
              <a
                href="#"
                className="inline-block text-[11px] uppercase tracking-widest font-bold border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                {g.cta} →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section
      id="platforms"
      className="px-8 lg:px-16 xl:px-20 py-24 lg:py-32 border-b border-border"
    >
      <div className="mb-16 flex flex-col lg:flex-row justify-between gap-6 lg:items-end">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent block mb-4">
            06 / Advanced Platforms
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Machines built to dominate.
          </h2>
          <p className="max-w-xl mt-6 opacity-70 leading-relaxed">
            From next-generation stealth fighters to autonomous high-altitude ISR drones. Our
            platforms are engineered to survive and succeed in the most demanding environments on
            Earth.
          </p>
        </div>
        <a
          href="#"
          className="self-start lg:self-end text-[11px] uppercase tracking-widest font-bold border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
        >
          View all platforms →
        </a>
      </div>
      <div className="grid grid-cols-12 gap-4 lg:gap-6">
        {projects.map((p) => (
          <figure key={p.name} className={`col-span-12 ${p.span}`}>
            <div className="overflow-hidden bg-muted">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className={`w-full ${p.aspect} object-cover hover:scale-[1.03] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]`}
              />
            </div>
            <figcaption className="mt-3 flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1 text-[10px] uppercase tracking-widest">
              <span className="font-bold">{p.name}</span>
              <span className="opacity-60">
                {p.service} / {p.company}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section className="px-8 lg:px-16 xl:px-20 py-24 lg:py-32 border-b border-border">
      <div className="mb-16">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent block mb-4">
          07 / Defense Leadership
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
          Uncompromised standards from the top down.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {quotes.map((q) => (
          <blockquote key={q.name} className="border-t border-foreground/30 pt-6">
            <p className="font-display text-xl lg:text-2xl leading-snug tracking-tight mb-8 text-balance">
              “{q.body}”
            </p>
            <footer>
              <div className="font-bold text-[13px]">{q.name}</div>
              <div className="text-[10px] uppercase tracking-widest opacity-60 mt-1">{q.role}</div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section id="contact" className="px-8 lg:px-16 xl:px-20 py-32 lg:py-40 text-center relative">
      <div className="max-w-4xl mx-auto space-y-10">
        <span className="text-accent font-bold uppercase tracking-[0.4em] text-[11px]">
          08 / Securing the future
        </span>
        <h2 className="font-display text-5xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance">
          Partnering for global security.
        </h2>
        <p className="max-w-xl mx-auto opacity-75 leading-relaxed text-base">
          Our technology ensures that allied forces can operate with absolute impunity anywhere on
          earth. When the mission cannot fail, defense ministries worldwide turn to AeroDefense.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a
            href="#"
            className="px-10 py-4 bg-foreground text-background font-bold uppercase tracking-widest text-[11px] hover:bg-accent transition-colors duration-300 w-full sm:w-auto"
          >
            Partner with AeroDefense
          </a>
          <a
            href="#"
            className="px-10 py-4 border border-foreground/30 hover:border-foreground font-bold uppercase tracking-widest text-[11px] transition-colors w-full sm:w-auto"
          >
            Explore Contracting
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 px-8 lg:px-16 xl:px-20 py-16">
      <div className="grid grid-cols-12 gap-y-8 lg:gap-8 mb-16">
        <div className="col-span-12 lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-display font-extrabold text-2xl tracking-tighter">
              AERODEFENSE
            </span>
            <span className="text-[9px] border border-foreground/25 px-1.5 py-0.5 uppercase tracking-widest">
              Corp.
            </span>
          </div>
          <p className="max-w-sm opacity-70 text-[12px] leading-relaxed">
            A prime defense contractor delivering next-generation aerospace systems, autonomous
            flight technologies, and multi-domain superiority.
          </p>
        </div>
        <div className="col-span-6 lg:col-span-2">
          <h5 className="text-[10px] uppercase tracking-widest opacity-50 mb-5">Capabilities</h5>
          <ul className="space-y-3 text-[12px] font-medium">
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Advanced Propulsion
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Autonomous ISR
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Stealth Technology
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-6 lg:col-span-2">
          <h5 className="text-[10px] uppercase tracking-widest opacity-50 mb-5">Divisions</h5>
          <ul className="space-y-3 text-[12px] font-medium">
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Aeronautics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Defense Systems
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Space Exploration
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-3">
          <h5 className="text-[10px] uppercase tracking-widest opacity-50 mb-5">Headquarters</h5>
          <p className="text-[12px] opacity-70 leading-relaxed">
            1 Aerospace Blvd.
            <br />
            Washington, D.C. 20001
          </p>
        </div>
      </div>
      <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-widest opacity-60">
        <div className="flex gap-6">
          <span>© 2026 AeroDefense Corp.</span>
          <span className="hidden sm:inline">DC / LDN / TYO</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-accent transition-colors">
            Governance
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            Legal Notice
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
