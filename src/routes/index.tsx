import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero.png";
import heroVideo1 from "@/assets/hero/1.mp4";
import heroVideo2 from "@/assets/hero/2.mp4";
import heroVideo3 from "@/assets/hero/3.mp4";
import heroVideo4 from "@/assets/hero/4.mp4";
import whoweareImg from "@/assets/whoweare.png";
import pillarLegacy from "@/assets/pillar-legacy.png";
import pillarCollab from "@/assets/pillar-collab.png";
import pillarOwnership from "@/assets/pillar-ownership.png";
import assembleVideo from "@/assets/assemble.mp4";
import bgSto from "@/assets/bg-sto.png";
import bgConsulting from "@/assets/bg-consulting.png";
import pAqueduct from "@/assets/p-aqueduct.png";
import pTransit from "@/assets/p-transit.png";
import pUniversity from "@/assets/p-university.png";
import pDatacenter from "@/assets/p-datacenter.png";
import pHospital from "@/assets/p-hospital.png";
import pMuseum from "@/assets/p-museum.png";

const heroVideos = [heroVideo1, heroVideo2, heroVideo3, heroVideo4];

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

const assemblyStages = [
  {
    step: "01",
    eyebrow: "Systems Engineering",
    title: "Defining the architecture.",
    body: "Our engineers establish the foundational framework, ensuring that every aerodynamic and mechanical subsystem seamlessly integrates to form a cohesive, high-performance platform.",
  },
  {
    step: "02",
    eyebrow: "Precision Manufacturing",
    title: "Engineering tolerances meet reality.",
    body: "Advanced fabrication techniques and strict quality control transform digital blueprints into physical components, engineering propulsion and structural systems with exact precision.",
  },
  {
    step: "03",
    eyebrow: "Flight Test Engineering",
    title: "Validating the design.",
    body: "Rigorous testing and simulation push the engineered systems beyond their limits, verifying performance data to certify the platform is ready for demanding real-world applications.",
  },
];

const ASSEMBLY_SCRUB_END = 0.66;

const stats = [
  { end: 4, prefix: "$", suffix: "B+", label: "Annual R&D Investment" },
  { end: 45, prefix: "", suffix: "", label: "Allied Nations Served" },
  { end: 30, prefix: "", suffix: "K+", label: "Engineers & Scientists" },
  { end: 100, prefix: "", suffix: "%", label: "Mission Success Rate" },
];

const operatingDivisions = [
  {
    n: "01",
    eyebrow: "Aeronautics & Advanced Aircraft",
    name: "Air dominance from concept to carrier-ready production.",
    body: "Integrated fighter, lift, and experimental aircraft teams compress the distance between advanced research, flight test, and mission-ready deployment.",
    img: bgSto,
    signal: "Stealth / Lift / Strike",
    cta: "Explore Aeronautics",
  },
  {
    n: "02",
    eyebrow: "Autonomous ISR Systems",
    name: "Persistent awareness across contested airspace.",
    body: "Long-endurance autonomy, edge sensing, and operator-centered command tools turn raw theater data into fast, actionable intelligence.",
    img: pillarOwnership,
    signal: "Autonomy / Sensors / ISR",
    cta: "Explore ISR Systems",
  },
  {
    n: "03",
    eyebrow: "Tactical Defense Systems",
    name: "Layered protection for multi-domain operations.",
    body: "Precision effectors, integrated air defense, and tactical control systems protect allied forces while expanding decision speed in the field.",
    img: bgConsulting,
    signal: "Missile Defense / C2 / Deterrence",
    cta: "Explore Defense Systems",
  },
  {
    n: "04",
    eyebrow: "Space & Command Networks",
    name: "Orbital infrastructure connected to every mission edge.",
    body: "Secure satellite architectures, resilient communications, and mission networks keep aircraft, commanders, and allied partners synchronized.",
    img: pUniversity,
    signal: "Space / Comms / Command",
    cta: "Explore Space Networks",
  },
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

const newsPosts = [
  {
    category: "Autonomous ISR",
    date: "June 12, 2026",
    title: "MQ-X Vanguard clears autonomous flight-readiness review.",
    excerpt:
      "AeroDefense teams completed the final systems review for the MQ-X Vanguard autonomy stack, validating endurance, sensor fusion, and command handoff profiles.",
    readTime: "4 min read",
    img: pAqueduct,
    href: "/news/autonomous-isr-flight-readiness",
  },
  {
    category: "Advanced Aircraft",
    date: "May 28, 2026",
    title: "Digital production cells accelerate next-gen aircraft assembly.",
    excerpt:
      "New synchronized manufacturing cells are reducing airframe integration cycles while improving traceability across stealth materials and flight-critical systems.",
    readTime: "5 min read",
    img: bgSto,
    href: "/news/advanced-aircraft-production",
  },
  {
    category: "Space Command",
    date: "May 09, 2026",
    title: "Orbital command network expands allied mission coverage.",
    excerpt:
      "The latest secure communications node links air, space, and ground assets into a resilient mission fabric for coalition operations.",
    readTime: "3 min read",
    img: pUniversity,
    href: "/news/space-command-network",
  },
  {
    category: "Tactical Defense",
    date: "April 22, 2026",
    title: "Layered defense modernization enters operational evaluation.",
    excerpt:
      "AeroDefense tactical systems teams began field evaluation of a new integrated defense architecture built for contested multi-domain environments.",
    readTime: "4 min read",
    img: bgConsulting,
    href: "/news/tactical-defense-modernization",
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
      <LatestNews />
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

      <div className="col-span-12 lg:col-span-8 space-y-24 lg:space-y-0">
        {pillars.map((p, index) => (
          <article
            key={p.n}
            style={{ zIndex: index + 1 }}
            className="group relative bg-background lg:sticky lg:top-28"
          >
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
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [videoDuration, setVideoDuration] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const scrubProgress = useMotionValue(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncMetadata = () => {
      if (!Number.isFinite(video.duration)) return;

      setVideoDuration(video.duration);
      video.pause();

      if (shouldReduceMotion) {
        video.currentTime = video.duration;
        setActiveStage(assemblyStages.length - 1);
      } else {
        video.currentTime = scrubProgress.get() * video.duration;
      }
    };

    syncMetadata();
    video.addEventListener("loadedmetadata", syncMetadata);

    return () => video.removeEventListener("loadedmetadata", syncMetadata);
  }, [scrubProgress, shouldReduceMotion]);

  useEffect(() => {
    let frame = 0;

    const updateScrub = () => {
      const section = sectionRef.current;
      if (!section) {
        frame = window.requestAnimationFrame(updateScrub);
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollRange = Math.max(1, rect.height - window.innerHeight);
      const sectionProgress = Math.min(1, Math.max(0, -rect.top / scrollRange));
      const assemblyProgress = Math.min(1, sectionProgress / ASSEMBLY_SCRUB_END);
      scrubProgress.set(assemblyProgress);

      const nextStage = Math.min(
        assemblyStages.length - 1,
        Math.floor(assemblyProgress * assemblyStages.length),
      );
      setActiveStage((current) => (current === nextStage ? current : nextStage));

      if (shouldReduceMotion || videoDuration <= 0) return;

      const video = videoRef.current;
      if (!video) return;

      const nextTime = Math.min(videoDuration, Math.max(0, assemblyProgress * videoDuration));
      if (Math.abs(video.currentTime - nextTime) > 0.03) {
        video.currentTime = nextTime;
      }

      frame = requestAnimationFrame(updateScrub);
    };

    frame = requestAnimationFrame(updateScrub);

    return () => cancelAnimationFrame(frame);
  }, [scrubProgress, shouldReduceMotion, videoDuration]);

  const currentStage = shouldReduceMotion
    ? assemblyStages[assemblyStages.length - 1]
    : assemblyStages[activeStage];

  return (
    <section
      ref={sectionRef}
      id="innovation"
      className="relative h-[400vh] bg-foreground text-background"
    >
      <div className="sticky top-0 h-screen overflow-hidden border-b border-background/10">
        <div className="absolute inset-0 bg-foreground">
          <video
            ref={videoRef}
            src={assembleVideo}
            muted
            playsInline
            preload="auto"
            aria-label="Aircraft assembly sequence"
            className="h-full w-full scale-125 object-cover object-[40%_center] opacity-80"
            disablePictureInPicture
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-foreground/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/35" />
        </div>

        <div className="relative z-10 grid h-full grid-cols-12 items-end gap-y-8 px-8 pb-10 pt-24 lg:items-center lg:gap-12 lg:px-16 lg:pb-16 xl:px-20">
          <div className="col-span-12 max-w-xl lg:col-span-5">
            <span className="mb-8 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
              03 / Mission Driven
            </span>
            <h2 className="mb-8 font-display text-5xl font-extrabold leading-[0.9] tracking-tighter sm:text-6xl lg:text-7xl">
              Assemble the impossible.
            </h2>
            <motion.div
              key={currentStage.step}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="min-h-36"
            >
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.35em] text-accent">
                {currentStage.step} / {currentStage.eyebrow}
              </span>
              <h3 className="mb-4 max-w-lg font-display text-2xl font-bold leading-none tracking-tight sm:text-3xl">
                {currentStage.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-background/70">
                {currentStage.body}
              </p>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:self-end">
            <div className="ml-auto grid max-w-2xl grid-cols-1 gap-3 border-t border-background/20 pt-5 sm:grid-cols-3">
              {assemblyStages.map((stage, index) => (
                <div
                  key={stage.step}
                  className={`transition-colors duration-300 ${
                    index === activeStage || shouldReduceMotion
                      ? "text-background"
                      : "text-background/35"
                  }`}
                >
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-accent">
                    {stage.step}
                  </span>
                  <span className="block text-[10px] uppercase tracking-[0.25em]">
                    {stage.eyebrow}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          style={{ scaleX: shouldReduceMotion ? 1 : scrubProgress }}
          className="absolute bottom-0 left-0 z-20 h-1 w-full origin-left bg-accent"
        />
      </div>
    </section>
  );
}

function CountUpStatValue({ stat, start }: { stat: (typeof stats)[number]; start: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = useState(shouldReduceMotion ? stat.end : 0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setValue(stat.end);
      hasAnimated.current = true;
      return;
    }

    if (!start || hasAnimated.current) return;

    hasAnimated.current = true;
    const duration = 1400;
    const startedAt = window.performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(stat.end * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      } else {
        setValue(stat.end);
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [shouldReduceMotion, start, stat.end]);

  return (
    <>
      {stat.prefix}
      {value}
      {stat.suffix}
    </>
  );
}

function Stats() {
  const gridRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [countsStarted, setCountsStarted] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setCountsStarted(true);
      return;
    }

    const grid = gridRef.current;
    if (!grid || !("IntersectionObserver" in window)) {
      setCountsStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setCountsStarted(true);
        observer.disconnect();
      },
      { threshold: 0.25 },
    );

    observer.observe(grid);

    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  return (
    <section className="relative z-30 -mt-[100vh] min-h-screen overflow-hidden border-y border-background/15 bg-foreground px-8 py-24 text-background shadow-[0_-70px_140px_rgba(0,0,0,0.78)] lg:px-16 lg:py-32 xl:px-20">
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

      <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {stats.map((s, i) => (
          <div key={s.label} className="group cursor-default">
            <span className="block text-[10px] uppercase mb-6 text-accent font-bold tracking-widest">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="font-display text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-extrabold group-hover:translate-x-2 transition-transform duration-500">
              <CountUpStatValue stat={s} start={countsStarted} />
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
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const trackX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", shouldReduceMotion ? "0vw" : `-${(operatingDivisions.length - 1) * 100}vw`],
  );
  const imageParallax = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 96]);

  if (shouldReduceMotion) {
    return (
      <section
        id="groups"
        className="border-b border-background/15 bg-foreground px-8 py-24 text-background lg:px-16 lg:py-32 xl:px-20"
      >
        <div className="mb-14 max-w-3xl">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
            05 / Operating Divisions
          </span>
          <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tighter lg:text-6xl">
            Integrated forces pushing the bleeding edge.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-background/65">
            Four mission divisions operate as one connected aerospace ecosystem, moving from
            aircraft and autonomy to tactical defense and orbital command networks.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {operatingDivisions.map((division) => (
            <article
              key={division.eyebrow}
              className="overflow-hidden border border-background/15 bg-background/5"
            >
              <img
                src={division.img}
                alt={division.eyebrow}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover opacity-80"
              />
              <div className="p-6 lg:p-8">
                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.35em] text-accent">
                  {division.n} / {division.eyebrow}
                </span>
                <h3 className="mb-4 font-display text-3xl font-bold leading-none tracking-tight">
                  {division.name}
                </h3>
                <p className="text-sm leading-relaxed text-background/65">{division.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="groups"
      className="relative border-b border-background/15 bg-foreground text-background lg:h-[400vh]"
    >
      <div className="px-8 pb-10 pt-24 lg:hidden">
        <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
          05 / Operating Divisions
        </span>
        <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tighter">
          Integrated forces pushing the bleeding edge.
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-background/65">
          Four mission divisions operate as one connected aerospace ecosystem.
        </p>
      </div>

      <div className="relative overflow-hidden lg:sticky lg:top-0 lg:h-screen">
        <div className="pointer-events-none absolute left-16 top-24 z-20 hidden max-w-xl xl:left-20 lg:block">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
            05 / Operating Divisions
          </span>
          <h2 className="font-display max-w-3xl text-5xl font-extrabold leading-[0.92] tracking-tighter xl:text-6xl">
            Integrated forces pushing the bleeding edge.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-background/60">
            Aircraft, autonomy, tactical defense, and orbital command networks engineered as one
            mission ecosystem.
          </p>
        </div>

        <motion.div style={{ x: trackX }} className="hidden h-full w-[400vw] lg:flex">
          {operatingDivisions.map((division, index) => (
            <article
              key={division.eyebrow}
              className="group relative h-screen w-screen shrink-0 overflow-hidden border-r border-background/10"
            >
              <motion.img
                src={division.img}
                alt={division.eyebrow}
                loading={index === 0 ? "eager" : "lazy"}
                style={{ x: imageParallax }}
                className="absolute inset-y-0 -left-24 h-full w-[calc(100%+12rem)] scale-105 object-cover opacity-75 transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-foreground/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-transparent to-foreground/30" />

              <div className="relative z-10 grid h-full grid-cols-12 items-end gap-8 px-16 pb-16 pt-56 xl:px-20">
                <div className="col-span-6 col-start-7 max-w-2xl">
                  <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.35em] text-accent">
                    {division.n} / {division.eyebrow}
                  </span>
                  <h3 className="mb-6 font-display text-5xl font-extrabold leading-[0.9] tracking-tighter xl:text-7xl">
                    {division.name}
                  </h3>
                  <p className="mb-8 max-w-xl text-sm leading-relaxed text-background/70">
                    {division.body}
                  </p>
                  <div className="flex flex-wrap items-center gap-5">
                    <span className="border border-background/20 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-background/70">
                      {division.signal}
                    </span>
                    <a
                      href="#platforms"
                      className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-background transition-colors hover:text-accent"
                    >
                      {division.cta}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </motion.div>

        <div className="px-8 pb-24 lg:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
            {operatingDivisions.map((division) => (
              <article
                key={division.eyebrow}
                className="min-w-[82vw] snap-start overflow-hidden border border-background/15 bg-background/5"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={division.img}
                    alt={division.eyebrow}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[0.35em] text-accent">
                    {division.n}
                  </span>
                </div>
                <div className="p-5">
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-accent">
                    {division.eyebrow}
                  </span>
                  <h3 className="mb-4 font-display text-2xl font-bold leading-none tracking-tight">
                    {division.name}
                  </h3>
                  <p className="mb-5 text-xs leading-relaxed text-background/65">{division.body}</p>
                  <a
                    href="#platforms"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-background transition-colors hover:text-accent"
                  >
                    {division.cta}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-20 hidden h-1 w-full bg-background/10 lg:block">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full w-full origin-left bg-accent"
          />
        </div>
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
            07 / Advanced Platforms
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

function LatestNews() {
  const shouldReduceMotion = useReducedMotion();
  const [featuredPost, ...supportingPosts] = newsPosts;

  return (
    <section
      id="news"
      className="relative overflow-hidden border-b border-border bg-background px-8 py-24 lg:px-16 lg:py-32 xl:px-20"
    >
      <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
            06 / Latest Blog
          </span>
          <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[0.95] tracking-tighter lg:text-6xl">
            Latest blog.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed opacity-70">
            Mission briefings from aircraft programs, autonomous systems, tactical defense, and
            secure command networks.
          </p>
        </div>
        <a
          href="/news"
          className="inline-flex items-center gap-2 self-start text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-accent lg:self-end"
        >
          View all blogs
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      <motion.article
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="group grid overflow-hidden border border-foreground/10 bg-foreground text-background lg:grid-cols-12"
      >
        <a
          href={featuredPost.href}
          className="relative block overflow-hidden bg-muted lg:col-span-7"
        >
          <img
            src={featuredPost.img}
            alt={featuredPost.title}
            loading="lazy"
            className="aspect-[16/11] w-full object-cover opacity-90 transition duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] lg:aspect-[16/10]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-foreground/20" />
        </a>

        <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10 xl:p-12">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-widest">
              <span className="text-accent">{featuredPost.category}</span>
              <span className="text-background/45">{featuredPost.date}</span>
              <span className="text-background/45">{featuredPost.readTime}</span>
            </div>
            <a href={featuredPost.href}>
              <h3 className="font-display text-4xl font-extrabold leading-[0.9] tracking-tighter sm:text-5xl xl:text-6xl">
                {featuredPost.title}
              </h3>
            </a>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-background/70">
              {featuredPost.excerpt}
            </p>
          </div>
          <a
            href={featuredPost.href}
            className="mt-10 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-background transition-colors hover:text-accent"
          >
            Read featured briefing
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </motion.article>

      <div className="mt-5 grid gap-5 md:grid-cols-3 lg:mt-6">
        {supportingPosts.map((post, index) => (
          <motion.article
            key={post.href}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : index * 0.08 }}
            className="group flex flex-col overflow-hidden border border-foreground/10 bg-background transition-colors duration-500 hover:border-accent/60"
          >
            <a href={post.href} className="relative block overflow-hidden bg-muted">
              <img
                src={post.img}
                alt={post.title}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover opacity-80 transition duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-60" />
            </a>
            <div className="flex flex-1 flex-col p-5 lg:p-6">
              <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-bold uppercase tracking-widest">
                <span className="text-accent">{post.category}</span>
                <span className="opacity-45">{post.readTime}</span>
              </div>
              <a href={post.href}>
                <h3 className="font-display text-2xl font-bold leading-none tracking-tight">
                  {post.title}
                </h3>
              </a>
              <p className="mt-4 flex-1 text-sm leading-relaxed opacity-70">{post.excerpt}</p>
              <a
                href={post.href}
                className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-70 transition-all duration-500 hover:text-accent group-hover:translate-x-1 group-hover:opacity-100"
              >
                Read blog
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.article>
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
          08 / Defense Leadership
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
          09 / Securing the future
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
