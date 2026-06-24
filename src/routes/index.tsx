import { createFileRoute } from "@tanstack/react-router";
import {
  useCallback,
  useState,
  useEffect,
  useRef,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { CorporateFooter, CorporateNav } from "@/components/corporate-layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { corporateLeaders, featuredProducts } from "@/lib/corporate-data";
import heroImg from "@/assets/hero.png";
import heroVideo from "@/assets/hero/hero.mp4";
import assembleVideo from "@/assets/assemble.mp4";
import aviationAirport from "@/assets/stock/aviation-airport.jpg";
import aviationHangar from "@/assets/stock/aviation-hangar.jpg";
import consultingBriefing from "@/assets/stock/consulting-briefing.jpg";
import consultingTeam from "@/assets/stock/consulting-team.jpg";
import droneFlight from "@/assets/stock/drone-flight.jpg";
import dronePilot from "@/assets/stock/drone-pilot.jpg";
import miningAerial from "@/assets/stock/mining-aerial.jpg";
import researchLab from "@/assets/stock/research-lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucid Aviation | Aviation-Led Corporate Group" },
      {
        name: "description",
        content:
          "Lucid Aviation is a corporate aviation and industrial group operating across aviation, drones, consulting, research, and responsible resource operations.",
      },
      { property: "og:title", content: "Lucid Aviation | Aviation-Led Corporate Group" },
      {
        property: "og:description",
        content:
          "Lucid Aviation is a corporate aviation and industrial group operating across aviation, drones, consulting, research, and responsible resource operations.",
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
    title: "Practical technology for aviation and industry.",
    body: "At Lucid Aviation, innovation connects aviation programs, drone operations, applied research, consulting, and responsible resource systems into practical work customers can deploy.",
    cta: "Explore innovation",
    href: "/innovation",
    img: researchLab,
    caption: "Applied Technology Lab / Facility 04",
  },
  {
    n: "02",
    eyebrow: "Aviation",
    title: "Moving people, data, and industries safely.",
    body: "Our aviation and drone teams build dependable flight systems, fleet services, and operational tools for organizations that need safety, reliability, and scale.",
    cta: "Aviation services",
    href: "/services/aviation",
    img: aviationAirport,
    caption: "Fleet Operations Review",
  },
  {
    n: "03",
    eyebrow: "Corporate Reach",
    title: "A broader group behind every operation.",
    body: "From consulting and research to mining operations and aerial intelligence, our divisions help customers modernize complex systems with clarity and discipline.",
    cta: "View services",
    href: "/services",
    img: consultingTeam,
    caption: "Aerial Resource Intelligence",
  },
];

const assemblyStages = [
  {
    step: "01",
    eyebrow: "Program Planning",
    title: "Defining the operating model.",
    body: "Our teams map the business need first, aligning aviation, data, field operations, and customer objectives before technical work moves forward.",
  },
  {
    step: "02",
    eyebrow: "Integrated Delivery",
    title: "Connecting teams and technology.",
    body: "Aviation specialists, drone teams, consultants, researchers, and operators work together so every program moves from concept into practical execution.",
  },
  {
    step: "03",
    eyebrow: "Operational Readiness",
    title: "Making the program dependable.",
    body: "Before launch, each solution is reviewed for safety, reliability, field usability, governance, and long-term value across the customer environment.",
  },
];

const ASSEMBLY_SCRUB_END = 0.66;

const stats = [
  { end: 4, prefix: "$", suffix: "B+", label: "Annual Technology Investment" },
  { end: 45, prefix: "", suffix: "", label: "Markets Served" },
  { end: 30, prefix: "", suffix: "K+", label: "Specialists & Operators" },
  { end: 5, prefix: "", suffix: "", label: "Core Business Divisions" },
];

const operatingDivisions = [
  {
    n: "01",
    eyebrow: "Aviation",
    name: "Aircraft programs from concept to fleet support.",
    body: "Integrated aircraft, maintenance, and digital operations teams connect advanced research with dependable aviation programs for operators at scale.",
    img: aviationAirport,
    signal: "Aircraft / Fleet / Services",
    cta: "Explore Aviation",
    href: "/services/aviation",
  },
  {
    n: "02",
    eyebrow: "Drones & Autonomous Systems",
    name: "Aerial intelligence for complex environments.",
    body: "Autonomy, edge sensing, and operator-centered tools turn field conditions into reliable data for infrastructure, logistics, and remote operations.",
    img: droneFlight,
    signal: "Autonomy / Sensors / Data",
    cta: "Explore Drones",
    href: "/services/drones",
  },
  {
    n: "03",
    eyebrow: "Consulting & Research",
    name: "Advisory and applied research for industrial change.",
    body: "Strategy, transformation, materials research, and prototype programs help aviation and industrial customers modernize with confidence.",
    img: consultingTeam,
    signal: "Advisory / Labs / Programs",
    cta: "Explore Consulting",
    href: "/services/consulting",
  },
  {
    n: "04",
    eyebrow: "Mining & Resource Operations",
    name: "Responsible resource systems connected to aerial intelligence.",
    body: "Mining programs combine ground operations, aerial survey, environmental monitoring, and logistics to support safer resource development.",
    img: miningAerial,
    signal: "Survey / Automation / Logistics",
    cta: "Explore Mining",
    href: "/services/mining",
  },
];

const newsPosts = [
  {
    category: "Drones",
    date: "June 12, 2026",
    title: "Drone operations platform completes readiness review.",
    excerpt:
      "Lucid Aviation teams completed a readiness review for a new drone operations platform, validating endurance, data quality, and operator handoff profiles.",
    readTime: "4 min read",
    img: dronePilot,
    href: "/news/drone-operations-readiness",
  },
  {
    category: "Aviation",
    date: "May 28, 2026",
    title: "Digital production cells accelerate aircraft assembly.",
    excerpt:
      "New synchronized manufacturing cells are reducing integration cycles while improving traceability across materials and flight-critical systems.",
    readTime: "5 min read",
    img: aviationHangar,
    href: "/news/advanced-aircraft-production",
  },
  {
    category: "Research",
    date: "May 09, 2026",
    title: "Research network expands industrial operations coverage.",
    excerpt:
      "The latest connected operations work links aviation programs, field teams, and industrial assets into a more resilient operating network.",
    readTime: "3 min read",
    img: researchLab,
    href: "/news/connected-operations-network",
  },
  {
    category: "Consulting",
    date: "April 22, 2026",
    title: "Industrial modernization program enters operational evaluation.",
    excerpt:
      "Consulting teams began field evaluation of a new modernization framework built for complex aviation and industrial environments.",
    readTime: "4 min read",
    img: consultingBriefing,
    href: "/news/industrial-systems-modernization",
  },
];

const closingPaths = [
  {
    number: "01",
    eyebrow: "Products",
    title: "Find the right platform.",
    body: "Explore aircraft, autonomous systems, research programs, and connected industrial products from across the group.",
    cta: "View product gallery",
    href: "/products",
    image: aviationHangar,
  },
  {
    number: "02",
    eyebrow: "Services",
    title: "Bring a complex operation into focus.",
    body: "Engage specialist teams across aviation, drones, consulting, research, and responsible resource operations.",
    cta: "Explore our services",
    href: "/services",
    image: dronePilot,
  },
  {
    number: "03",
    eyebrow: "Partnerships",
    title: "Build the next program together.",
    body: "Start a direct conversation about partnerships, sales, technical programs, or a customer requirement.",
    cta: "Start a conversation",
    href: "/contact#contact-desk",
    image: consultingBriefing,
  },
];

function Index() {
  return (
    <main className="bg-background text-foreground font-mono">
      <CorporateNav overlay />
      <Hero />
      <WhoWeAre />
      <Pillars />
      <HowWeBuild />
      <Stats />
      <BusinessGroups />
      <LatestNews />
      <Portfolio />
      <Voices />
      <Closing />
      <CorporateFooter />
    </main>
  );
}

function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="brand-dark relative flex min-h-screen flex-col justify-end overflow-hidden border-b border-border pb-16 pt-20 text-white lg:pb-24">
      <video
        src={heroVideo}
        poster={heroImg}
        muted
        defaultMuted
        playsInline
        preload="auto"
        autoPlay
        loop
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-foreground/95 via-foreground/50 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 px-8 lg:px-16 xl:px-20 w-full flex flex-col items-start">
        <div
          className={`max-w-4xl transition-all duration-[1500ms] ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-6 space-y-2 transition-all duration-[1500ms] ease-out delay-[300ms]">
            <div className="h-px w-20 bg-primary/80 animate-line" />
            <span className="text-primary font-semibold uppercase tracking-[0.4em] block text-xs md:text-sm drop-shadow-md">
              Aviation-Led Corporate Group
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[110px] xl:text-[130px] leading-[0.85] font-extrabold tracking-tighter text-balance text-white drop-shadow-xl">
            AVIATION
            <br />
            <span className="text-primary">LEADS.</span>
          </h1>

          <div className="mt-10 max-w-2xl flex flex-col items-start">
            <p className="text-lg md:text-xl leading-relaxed text-pretty text-white/90 drop-shadow-md mb-10">
              Building aircraft, drones, advisory teams, research programs, and responsible resource
              operations for a more connected industrial future.
            </p>

            <div className="flex flex-col justify-start items-start">
              <span className="text-[9px] uppercase tracking-widest text-white/60 mb-4 drop-shadow-sm">
                [ Scroll to explore the group ]
              </span>
              <div className="h-16 w-px bg-white/30" />
            </div>
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
        <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-10">
          01 / Who we are
        </h2>
        <p className="text-2xl lg:text-3xl leading-[1.1] tracking-tight font-display font-medium text-balance">
          Lucid Aviation is an aviation-led corporate group uniting aircraft programs, drones,
          consulting, research, and responsible resource operations.
        </p>
        <p className="mt-8 max-w-md opacity-70 leading-relaxed">
          Our divisions share engineering discipline, operational data, and applied research so
          customers can modernize complex systems without losing sight of safety, reliability, and
          long-term value.
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
            src={aviationHangar}
            alt="Aircraft undergoing maintenance inside an aviation hangar"
            width={1536}
            height={864}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover scale-130"
          />
        </div>
        <div className="mt-4 flex flex-wrap justify-between items-baseline gap-4 text-[10px] uppercase tracking-widest opacity-70">
          <span>Aviation Program Final Assembly</span>
          <span>Aviation Division / Research Campus</span>
        </div>
      </motion.div>
    </section>
  );
}

function Pillars() {
  return (
    <section
      id="capabilities"
      className="py-28 lg:py-40 px-8 lg:px-16 xl:px-20 grid grid-cols-12 gap-y-14 lg:gap-16 border-b border-border"
    >
      <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
          02 / Our Capabilities
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tighter leading-[0.9]">
          AVIATION.
          <br />
          DRONES.
          <br />
          INDUSTRY.
        </h2>
        <div className="h-px w-12 bg-primary" />
        <p className="opacity-70 leading-relaxed max-w-sm">
          Three pillars define how the group moves from aviation leadership into broader industrial
          value.
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
              <span className="text-5xl font-display font-bold text-primary/25 italic tracking-tighter group-hover:text-primary transition-colors">
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
                  className="text-[10px] uppercase tracking-widest font-bold border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors"
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

function HowWeBuild() {
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
            aria-label="Corporate aviation assembly sequence"
            className="h-full w-full scale-125 object-cover object-[40%_center] opacity-80"
            disablePictureInPicture
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-foreground/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/35" />
        </div>

        <div className="relative z-10 grid h-full grid-cols-12 items-end gap-y-8 px-8 pb-10 pt-24 lg:items-center lg:gap-12 lg:px-16 lg:pb-16 xl:px-20">
          <div className="col-span-12 max-w-xl lg:col-span-5">
            <span className="mb-8 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              03 / How We Build
            </span>
            <h2 className="mb-8 font-display text-5xl font-extrabold leading-[0.9] tracking-tighter sm:text-6xl lg:text-7xl">
              From idea to operation.
            </h2>
            <motion.div
              key={currentStage.step}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="min-h-36"
            >
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
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
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-primary">
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
          className="absolute bottom-0 left-0 z-20 h-1 w-full origin-left bg-primary"
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
    <section className="relative z-30 -mt-[100vh] min-h-screen overflow-hidden border-y border-background/15 bg-foreground px-8 py-28 text-background shadow-[0_-70px_140px_rgba(0,0,0,0.78)] lg:px-16 lg:py-40 xl:px-20">
      <div className="mb-16 flex flex-col lg:flex-row justify-between gap-8 lg:items-end">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary block mb-4">
            04 / At a glance
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold tracking-tighter max-w-2xl leading-[0.95]">
            A corporate group built around aviation discipline.
          </h2>
        </div>
        <p className="max-w-sm text-background/60 text-[12px] leading-relaxed">
          Lucid Aviation connects aircraft programs, autonomous drones, consulting, research, and
          responsible resource operations across a growing global footprint.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {stats.map((s, i) => (
          <div key={s.label} className="group cursor-default">
            <span className="block text-[10px] uppercase mb-6 text-primary font-bold tracking-widest">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="font-display text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-extrabold group-hover:translate-x-2 transition-transform duration-500">
              <CountUpStatValue stat={s} start={countsStarted} />
            </div>
            <div className="mt-6 h-px w-full bg-background/15 transition-colors group-hover:bg-primary" />
            <span className="text-[10px] uppercase tracking-widest mt-4 block opacity-70">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-20 pt-8 border-t border-background/10 max-w-2xl text-background/40 text-[10px] leading-relaxed italic">
        * Corporate metrics are presented for concept demonstration and will be refined as the full
        company profile is completed.
      </p>
    </section>
  );
}

function BusinessGroups() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("homepage-division-snap");

    return () => root.classList.remove("homepage-division-snap");
  }, []);

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
        className="border-b border-background/15 bg-foreground px-8 py-28 text-background lg:px-16 lg:py-40 xl:px-20"
      >
        <div className="mb-14 max-w-3xl">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
            05 / Operating Divisions
          </span>
          <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tighter lg:text-6xl">
            Businesses connected by aviation discipline.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-background/65">
            Five corporate divisions operate as one connected industrial ecosystem, moving from
            aircraft and autonomy to consulting, research, and resource operations.
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
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6 lg:p-8">
                <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
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
        <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
          05 / Operating Divisions
        </span>
        <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tighter">
          Businesses connected by aviation discipline.
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-background/65">
          Aviation, drones, consulting, research, and mining operate as one corporate ecosystem.
        </p>
      </div>

      <div className="relative lg:overflow-hidden lg:sticky lg:top-0 lg:h-screen">
        <div className="pointer-events-none absolute left-16 top-24 z-20 hidden max-w-xl p-6 lg:block xl:left-20">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
            05 / Operating Divisions
          </span>
          <h2 className="font-display max-w-3xl text-5xl font-extrabold leading-[0.92] tracking-tighter xl:text-6xl">
            Businesses connected by aviation discipline.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-background/60">
            Aircraft, autonomous systems, consulting, research, and mining connected as one
            corporate system.
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
                className="absolute inset-y-0 -left-24 h-full w-[calc(100%+12rem)] scale-105 object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-foreground/95 via-foreground/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/20 to-transparent" />

              <div className="relative z-10 grid h-full grid-cols-12 items-end gap-8 px-16 pb-16 pt-56 xl:px-20">
                <div className="col-span-6 col-start-7 max-w-2xl p-8">
                  <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
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
                      href={division.href}
                      className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-background transition-colors hover:text-primary"
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

        <div className="relative lg:hidden">
          {operatingDivisions.map((division, index) => (
            <article
              key={division.eyebrow}
              className="homepage-division-snap-card sticky top-0 h-[100dvh] w-full overflow-hidden"
              style={{ zIndex: index }}
            >
              <img
                src={division.img}
                alt={division.eyebrow}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end px-8 pb-20 pt-24 sm:px-12">
                <div className="max-w-md">
                  <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.35em] text-primary drop-shadow-md">
                    {division.n} / {division.eyebrow}
                  </span>
                  <h3 className="mb-4 font-display text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl">
                    {division.name}
                  </h3>
                  <p className="mb-8 text-sm leading-relaxed text-background/80">{division.body}</p>
                  <a
                    href={division.href}
                    className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-background transition-colors hover:text-primary"
                  >
                    {division.cta}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 z-20 hidden h-1 w-full bg-background/10 lg:block">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full w-full origin-left bg-primary"
          />
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageParallax = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const yImage = useSpring(imageParallax, { stiffness: 150, damping: 24, mass: 0.3 });

  return (
    <section
      ref={containerRef}
      id="platforms"
      className="px-8 lg:px-16 xl:px-20 py-28 lg:py-40 border-b border-border"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-16 flex flex-col lg:flex-row justify-between gap-6 lg:items-end"
      >
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary block mb-4">
            07 / Featured Products
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] max-w-3xl">
            Featured products across the group.
          </h2>
          <p className="max-w-xl mt-6 opacity-70 leading-relaxed">
            From aviation concepts and drone operations to consulting programs, research campuses,
            and resource intelligence systems, each product opens into a detailed product page.
          </p>
        </div>
        <a
          href="/products"
          className="self-start lg:self-end text-[11px] uppercase tracking-widest font-bold border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
        >
          View all products →
        </a>
      </motion.div>
      <div className="grid grid-cols-12 gap-4 lg:gap-6">
        {featuredProducts.map((p, index) => (
          <motion.a
            key={p.slug}
            href={p.href}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            className={`group col-span-12 block ${p.span}`}
            aria-label={`View product details for ${p.name}`}
          >
            <div className="overflow-hidden bg-muted">
              <motion.img
                style={{ y: yImage }}
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-[340px] w-full object-cover scale-[1.1] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.13] sm:h-[420px] lg:h-[520px]"
              />
            </div>
            <div className="mt-3 flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1 text-[10px] uppercase tracking-widest">
              <span className="font-bold">{p.name}</span>
              <span className="opacity-60 transition-colors group-hover:text-primary group-hover:opacity-100">
                {p.service} / {p.company}
              </span>
            </div>
          </motion.a>
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
      className="relative overflow-hidden border-b border-border bg-background px-8 py-28 lg:px-16 lg:py-40 xl:px-20"
    >
      <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
            06 / Latest Blog
          </span>
          <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[0.95] tracking-tighter lg:text-6xl">
            Latest blog.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed opacity-70">
            Corporate briefings from aviation programs, autonomous systems, consulting, research,
            and resource operations.
          </p>
        </div>
        <a
          href="/news"
          className="inline-flex items-center gap-2 self-start text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-primary lg:self-end"
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
              <span className="text-primary">{featuredPost.category}</span>
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
            className="mt-10 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-background transition-colors hover:text-primary"
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
            className="group flex flex-col overflow-hidden border border-foreground/10 bg-surface transition-colors duration-500 hover:border-primary/60"
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
                <span className="text-primary">{post.category}</span>
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
                className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-70 transition-all duration-500 hover:text-primary group-hover:translate-x-1 group-hover:opacity-100"
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
  const [activeLeaderIndex, setActiveLeaderIndex] = useState(0);
  const [mobileCarouselApi, setMobileCarouselApi] = useState<CarouselApi>();
  const [isLeadershipVisible, setIsLeadershipVisible] = useState(false);
  const [isLeadershipHovered, setIsLeadershipHovered] = useState(false);
  const [isLeadershipFocused, setIsLeadershipFocused] = useState(false);
  const [isLeadershipPointerDown, setIsLeadershipPointerDown] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const leadershipRef = useRef<HTMLElement | null>(null);
  const mobileNameRailRef = useRef<HTMLDivElement | null>(null);
  const mobileLeaderTabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const progressBarRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const progressValueRef = useRef(0);
  const pointerInitiatedFocusRef = useRef(false);
  const portraitX = useMotionValue(0);
  const portraitY = useMotionValue(0);
  const smoothPortraitX = useSpring(portraitX, { stiffness: 110, damping: 24, mass: 0.6 });
  const smoothPortraitY = useSpring(portraitY, { stiffness: 110, damping: 24, mass: 0.6 });
  const activeLeader = corporateLeaders[activeLeaderIndex];

  const updateProgressBars = useCallback((value: number) => {
    progressBarRefs.current.forEach((bar) => {
      if (bar) bar.style.transform = `scaleX(${value})`;
    });
  }, []);

  const resetLeadershipProgress = useCallback(() => {
    progressValueRef.current = 0;
    updateProgressBars(prefersReducedMotion ? 1 : 0);
  }, [prefersReducedMotion, updateProgressBars]);

  const activateLeader = useCallback(
    (index: number) => {
      const nextIndex = (index + corporateLeaders.length) % corporateLeaders.length;
      setActiveLeaderIndex(nextIndex);
      if (mobileCarouselApi?.selectedScrollSnap() !== nextIndex) {
        mobileCarouselApi?.scrollTo(nextIndex, Boolean(prefersReducedMotion));
      }
      portraitX.set(0);
      portraitY.set(0);
      resetLeadershipProgress();
    },
    [mobileCarouselApi, portraitX, portraitY, prefersReducedMotion, resetLeadershipProgress],
  );

  useEffect(() => {
    const section = leadershipRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsLeadershipVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => setIsDocumentVisible(!document.hidden);
    handleVisibilityChange();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (!mobileCarouselApi) return;

    const handleSelect = () => {
      const nextIndex = mobileCarouselApi.selectedScrollSnap();
      setActiveLeaderIndex(nextIndex);
      portraitX.set(0);
      portraitY.set(0);
      resetLeadershipProgress();
    };
    const handlePointerDown = () => setIsLeadershipPointerDown(true);
    const handlePointerUp = () => {
      setIsLeadershipPointerDown(false);
      resetLeadershipProgress();
    };

    handleSelect();
    mobileCarouselApi.on("select", handleSelect);
    mobileCarouselApi.on("reInit", handleSelect);
    mobileCarouselApi.on("pointerDown", handlePointerDown);
    mobileCarouselApi.on("pointerUp", handlePointerUp);

    return () => {
      mobileCarouselApi.off("select", handleSelect);
      mobileCarouselApi.off("reInit", handleSelect);
      mobileCarouselApi.off("pointerDown", handlePointerDown);
      mobileCarouselApi.off("pointerUp", handlePointerUp);
    };
  }, [mobileCarouselApi, portraitX, portraitY, resetLeadershipProgress]);

  useEffect(() => {
    const rail = mobileNameRailRef.current;
    const tab = mobileLeaderTabRefs.current[activeLeaderIndex];
    if (!rail || !tab) return;

    rail.scrollTo({
      left: tab.offsetLeft - (rail.clientWidth - tab.offsetWidth) / 2,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [activeLeaderIndex, prefersReducedMotion]);

  const shouldAutoplayLeadership =
    isLeadershipVisible &&
    isDocumentVisible &&
    !prefersReducedMotion &&
    !isLeadershipHovered &&
    !isLeadershipFocused &&
    !isLeadershipPointerDown;

  useEffect(() => {
    if (!shouldAutoplayLeadership) return;

    let frame = 0;
    let previousTimestamp = performance.now();

    const tick = (timestamp: number) => {
      const elapsed = timestamp - previousTimestamp;
      previousTimestamp = timestamp;
      progressValueRef.current += elapsed / 6000;

      if (progressValueRef.current >= 1) {
        progressValueRef.current = 0;
        activateLeader(activeLeaderIndex + 1);
      }

      updateProgressBars(Math.min(progressValueRef.current, 1));
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [activeLeaderIndex, activateLeader, shouldAutoplayLeadership, updateProgressBars]);

  useEffect(() => {
    if (prefersReducedMotion) {
      progressValueRef.current = 1;
      updateProgressBars(1);
    }
  }, [prefersReducedMotion, updateProgressBars]);

  const handlePortraitMove = (event: PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    portraitX.set(x * 14);
    portraitY.set(y * 14);
  };

  const resetPortrait = () => {
    portraitX.set(0);
    portraitY.set(0);
  };

  const handleLeaderKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % corporateLeaders.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + corporateLeaders.length) % corporateLeaders.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = corporateLeaders.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    activateLeader(nextIndex);
    const surface = event.currentTarget.id.includes("-mobile-") ? "mobile" : "desktop";
    document.getElementById(`leader-tab-${surface}-${corporateLeaders[nextIndex].id}`)?.focus();
  };

  return (
    <section
      ref={leadershipRef}
      id="leadership"
      className="overflow-hidden border-b border-border px-8 py-28 lg:px-16 lg:py-40 xl:px-20"
    >
      <div className="mb-14 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
            08 / Corporate Leadership
          </span>
          <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[0.95] tracking-tighter sm:text-5xl lg:text-6xl">
            Leadership for a broader industrial future.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed opacity-70">
          The group is led by operators who connect aviation discipline, industrial insight, and
          responsible growth across every business.
        </p>
      </div>

      <div
        onMouseEnter={() => setIsLeadershipHovered(true)}
        onMouseLeave={() => {
          setIsLeadershipHovered(false);
          resetLeadershipProgress();
        }}
        onPointerDownCapture={() => {
          pointerInitiatedFocusRef.current = true;
          setIsLeadershipFocused(false);
        }}
        onPointerUpCapture={() => {
          requestAnimationFrame(() => {
            pointerInitiatedFocusRef.current = false;
          });
        }}
        onPointerCancel={() => {
          pointerInitiatedFocusRef.current = false;
        }}
        onFocusCapture={(event) => {
          if (
            !pointerInitiatedFocusRef.current &&
            (event.target as HTMLElement).matches(":focus-visible")
          ) {
            setIsLeadershipFocused(true);
          }
        }}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setIsLeadershipFocused(false);
            resetLeadershipProgress();
          }
        }}
      >
        <div className="hidden lg:block">
          <div className="grid h-[680px] grid-cols-12 border-y border-border">
            <div
              className="relative col-span-7 overflow-hidden bg-foreground"
              onPointerMove={handlePortraitMove}
              onPointerLeave={resetPortrait}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={activeLeader.id}
                  src={activeLeader.image}
                  alt={activeLeader.imageAlt}
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.035 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.99 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    objectPosition: activeLeader.objectPosition,
                    x: prefersReducedMotion ? 0 : smoothPortraitX,
                    y: prefersReducedMotion ? 0 : smoothPortraitY,
                  }}
                  className="absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] max-w-none object-cover"
                />
              </AnimatePresence>
              <div className="absolute left-7 top-7 z-10 bg-background px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-foreground">
                {String(activeLeaderIndex + 1).padStart(2, "0")} /{" "}
                {String(corporateLeaders.length).padStart(2, "0")}
              </div>
            </div>

            <div className="col-span-5 flex min-w-0 items-center border-l border-border px-8 py-10 xl:px-10">
              <div
                id="leader-panel-desktop"
                role="tabpanel"
                aria-labelledby={`leader-tab-desktop-${activeLeader.id}`}
                tabIndex={0}
                className="w-full outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeLeader.id}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <div className="mb-8 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                      Executive perspective
                      <span className="h-px flex-1 bg-border" aria-hidden="true" />
                    </div>
                    <blockquote>
                      <p className="text-balance font-display text-3xl font-semibold leading-[1.03] tracking-tight 2xl:text-4xl">
                        “{activeLeader.body}”
                      </p>
                    </blockquote>
                    <div className="mt-9 border-t border-border pt-7">
                      <h3 className="font-display text-3xl font-bold leading-none tracking-tight 2xl:text-4xl">
                        {activeLeader.name}
                      </h3>
                      <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-primary">
                        {activeLeader.role}
                      </p>
                      <p className="mt-6 max-w-lg text-sm leading-relaxed opacity-70">
                        {activeLeader.bio}
                      </p>
                      <a
                        href="/about"
                        className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1 text-[10px] font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
                      >
                        Meet our leadership
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div
            role="tablist"
            aria-label="Corporate leaders"
            aria-orientation="horizontal"
            className="grid grid-cols-3 border-b border-l border-border"
          >
            {corporateLeaders.map((leader, index) => {
              const isActive = index === activeLeaderIndex;

              return (
                <button
                  key={leader.id}
                  id={`leader-tab-desktop-${leader.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="leader-panel-desktop"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => activateLeader(index)}
                  onMouseEnter={() => activateLeader(index)}
                  onFocus={() => activateLeader(index)}
                  onKeyDown={(event) => handleLeaderKeyDown(event, index)}
                  className={`relative min-h-28 border-r border-border px-6 py-5 text-left transition-colors focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${
                    isActive
                      ? "bg-surface text-foreground"
                      : "text-foreground/45 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span className="flex items-start justify-between gap-5">
                    <span>
                      <span className="block font-display text-xl font-bold leading-none tracking-tight xl:text-2xl">
                        {leader.name}
                      </span>
                      <span className="mt-2 block max-w-xs text-[9px] font-bold uppercase leading-relaxed tracking-widest">
                        {leader.role}
                      </span>
                    </span>
                    <span className="text-[10px] font-bold tracking-widest">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="absolute bottom-0 left-0 h-1 w-full overflow-hidden bg-muted">
                    <span
                      ref={(bar) => {
                        if (isActive) progressBarRefs.current[0] = bar;
                      }}
                      className={`block h-full origin-left bg-accent will-change-transform ${
                        isActive ? "" : "scale-x-0"
                      }`}
                      style={{ transform: `scaleX(${isActive && prefersReducedMotion ? 1 : 0})` }}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden">
          <div
            ref={mobileNameRailRef}
            role="tablist"
            aria-label="Corporate leaders"
            aria-orientation="horizontal"
            className="-mx-8 mb-5 flex snap-x gap-2 overflow-x-auto px-8 pb-2"
          >
            {corporateLeaders.map((leader, index) => {
              const isActive = index === activeLeaderIndex;
              return (
                <button
                  key={leader.id}
                  ref={(button) => {
                    mobileLeaderTabRefs.current[index] = button;
                  }}
                  id={`leader-tab-mobile-${leader.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`leader-panel-mobile-${leader.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => activateLeader(index)}
                  onFocus={() => activateLeader(index)}
                  onKeyDown={(event) => handleLeaderKeyDown(event, index)}
                  className={`min-w-[9.5rem] snap-center border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-surface text-foreground/55"
                  }`}
                >
                  <span className="block text-[9px] font-bold tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block font-display text-base font-bold leading-none">
                    {leader.name}
                  </span>
                </button>
              );
            })}
          </div>

          <Carousel
            setApi={setMobileCarouselApi}
            opts={{ align: "start", loop: true, duration: prefersReducedMotion ? 0 : 24 }}
            aria-label="Leadership profiles"
          >
            <CarouselContent className="ml-0">
              {corporateLeaders.map((leader, index) => (
                <CarouselItem key={leader.id} className="basis-full pl-0">
                  <article
                    id={`leader-panel-mobile-${leader.id}`}
                    role="tabpanel"
                    aria-labelledby={`leader-tab-mobile-${leader.id}`}
                    aria-hidden={index !== activeLeaderIndex}
                    className="overflow-hidden border border-border bg-surface"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-foreground">
                      <img
                        src={leader.image}
                        alt={leader.imageAlt}
                        loading={index === 0 ? "eager" : "lazy"}
                        style={{ objectPosition: leader.objectPosition }}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute left-4 top-4 bg-background px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-foreground">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(corporateLeaders.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex min-h-[360px] flex-col p-5 sm:p-7">
                      <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-primary">
                        Executive perspective
                      </span>
                      <blockquote className="mt-4">
                        <p className="font-display text-[1.35rem] font-semibold leading-[1.05] tracking-tight sm:text-2xl">
                          “{leader.body}”
                        </p>
                      </blockquote>
                      <div className="mt-5 border-t border-border pt-4">
                        <h3 className="font-display text-2xl font-bold leading-none tracking-tight">
                          {leader.name}
                        </h3>
                        <p className="mt-2 text-[9px] font-bold uppercase leading-relaxed tracking-widest text-primary">
                          {leader.role}
                        </p>
                        <p className="mt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {leader.bio}
                        </p>
                      </div>
                      <a
                        href="/about"
                        tabIndex={index === activeLeaderIndex ? 0 : -1}
                        className="mt-auto inline-flex items-center gap-2 self-start border-b border-foreground pt-5 pb-1 text-[9px] font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
                      >
                        Meet our leadership
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-5 flex items-center justify-between border-y border-border py-4">
            <span aria-live="polite" className="font-display text-xl font-bold leading-none">
              {String(activeLeaderIndex + 1).padStart(2, "0")} /{" "}
              {String(corporateLeaders.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => activateLeader(activeLeaderIndex - 1)}
                className="inline-flex h-11 w-11 items-center justify-center border border-border bg-surface transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Previous leader"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => activateLeader(activeLeaderIndex + 1)}
                className="inline-flex h-11 w-11 items-center justify-center border border-border bg-surface transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Next leader"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-4 h-1 overflow-hidden bg-muted" aria-hidden="true">
            <span
              ref={(bar) => {
                progressBarRefs.current[1] = bar;
              }}
              className="block h-full origin-left bg-accent will-change-transform"
              style={{ transform: `scaleX(${prefersReducedMotion ? 1 : 0})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  const [activePathIndex, setActivePathIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activePath = closingPaths[activePathIndex];

  return (
    <section
      id="contact"
      className="brand-dark overflow-hidden bg-foreground text-background lg:min-h-screen"
    >
      <div className="grid min-h-[900px] lg:min-h-screen lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[620px] overflow-hidden lg:min-h-screen">
          <AnimatePresence mode="sync" initial={false}>
            <motion.img
              key={activePath.image}
              src={activePath.image}
              alt=""
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-foreground/38" aria-hidden="true" />

          <div className="relative z-10 flex h-full min-h-[620px] flex-col px-8 py-20 lg:min-h-screen lg:px-16 lg:py-24 xl:px-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              09 / Building the future
            </span>
            <div className="mt-28 max-w-4xl border-t border-white/40 pt-7 lg:mt-40">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
                {activePath.eyebrow}
              </span>
              <h2 className="mt-6 font-display text-6xl font-extrabold leading-[0.88] tracking-normal text-balance sm:text-7xl lg:text-8xl">
                Build what moves next.
              </h2>
              <p className="mt-7 max-w-xl text-sm leading-relaxed text-white/80 lg:text-base">
                Choose where to begin with Lucid Aviation. Explore a product, engage a specialist
                service, or bring us into the next program.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center border-l border-white/15 px-8 py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="mb-10 flex items-end justify-between border-b border-white/15 pb-6">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-primary">
                Choose a path
              </span>
              <p className="mt-3 max-w-sm text-xs leading-relaxed text-background/55">
                Each route leads directly into the next useful step.
              </p>
            </div>
            <span className="text-[10px] font-bold tracking-widest text-background/45">
              {String(activePathIndex + 1).padStart(2, "0")} / 03
            </span>
          </div>

          <div className="border-t border-white/15">
            {closingPaths.map((path, index) => {
              const isActive = index === activePathIndex;

              return (
                <a
                  key={path.title}
                  href={path.href}
                  onMouseEnter={() => setActivePathIndex(index)}
                  onFocus={() => setActivePathIndex(index)}
                  className={`group block border-b border-white/15 py-8 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary lg:py-10 ${
                    isActive ? "text-white" : "text-background/45 hover:text-background"
                  }`}
                >
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">
                        {path.number} / {path.eyebrow}
                      </span>
                      <h3 className="mt-4 max-w-lg font-display text-3xl font-bold leading-[0.96] tracking-normal sm:text-4xl">
                        {path.title}
                      </h3>
                      <p
                        className={`mt-5 max-w-lg text-xs leading-relaxed transition-colors lg:text-sm ${
                          isActive ? "text-background/70" : "text-background/40"
                        }`}
                      >
                        {path.body}
                      </p>
                    </div>
                    <ArrowUpRight
                      className={`mt-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${
                        isActive ? "text-primary" : "text-background/35"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    className={`mt-7 inline-block text-[9px] font-bold uppercase tracking-widest transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {path.cta}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
