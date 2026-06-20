import { useState, type KeyboardEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Atom,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Cpu,
  Droplets,
  Factory,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Leaf,
  MapPin,
  Microscope,
  Recycle,
  Scale,
  Search,
  ShieldCheck,
  UsersRound,
  Wind,
  Wrench,
} from "lucide-react";
import {
  CorporateFooter,
  CorporateNav,
  LinkArrow,
  SectionIntro,
} from "@/components/corporate-layout";
import { featuredProducts } from "@/lib/corporate-data";
import { careerOpenings } from "@/lib/career-data";
import { remoteMedia } from "@/lib/remote-media";

function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  anchor,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  anchor: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="relative flex min-h-[86svh] items-end overflow-hidden bg-foreground text-white">
      <motion.img
        src={image}
        alt={imageAlt}
        loading="eager"
        initial={prefersReducedMotion ? false : { scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/42" aria-hidden="true" />
      <div className="relative z-10 w-full px-8 pb-14 pt-40 lg:px-16 lg:pb-20 xl:px-20">
        <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
          {eyebrow}
        </span>
        <h1 className="max-w-6xl font-display text-6xl font-extrabold leading-[0.86] tracking-tighter text-balance sm:text-7xl lg:text-[clamp(5.5rem,10vw,9.5rem)]">
          {title}
        </h1>
        <div className="mt-9 flex flex-col gap-8 border-t border-white/35 pt-7 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-white/90 lg:text-base">{intro}</p>
          <a
            href={anchor}
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-white/50 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            aria-label="Explore page content"
          >
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}

function PageClosing({
  eyebrow,
  title,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  primary: [string, string];
  secondary: [string, string];
}) {
  return (
    <section className="px-8 py-28 lg:px-16 lg:py-40 xl:px-20">
      <div className="grid grid-cols-12 items-end gap-y-12">
        <div className="col-span-12 lg:col-span-8">
          <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
            {eyebrow}
          </span>
          <h2 className="font-display text-5xl font-extrabold leading-[0.9] tracking-tighter text-balance lg:text-7xl">
            {title}
          </h2>
        </div>
        <div className="col-span-12 grid gap-3 sm:grid-cols-2 lg:col-span-3 lg:col-start-10 lg:grid-cols-1">
          {[primary, secondary].map(([label, href], index) => (
            <a
              key={href}
              href={href}
              className={`inline-flex items-center justify-between px-6 py-4 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                index === 0
                  ? "bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground"
                  : "border border-border hover:border-primary hover:text-primary"
              }`}
            >
              {label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function moveTabFocus(
  event: KeyboardEvent<HTMLButtonElement>,
  index: number,
  count: number,
  activate: (index: number) => void,
  idForIndex: (index: number) => string,
) {
  let nextIndex = index;

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    nextIndex = (index + 1) % count;
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    nextIndex = (index - 1 + count) % count;
  } else if (event.key === "Home") {
    nextIndex = 0;
  } else if (event.key === "End") {
    nextIndex = count - 1;
  } else {
    return;
  }

  event.preventDefault();
  activate(nextIndex);
  document.getElementById(idForIndex(nextIndex))?.focus();
}

export function InnovationPage() {
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const domains = [
    {
      id: "autonomy",
      icon: Bot,
      label: "Autonomy",
      title: "Systems that perceive, decide, and support operators.",
      body: "We combine autonomous flight, edge sensing, mission planning, and human oversight to make complex field operations safer and more repeatable.",
      image: remoteMedia.innovation.domains[0].src,
      signals: ["Flight autonomy", "Edge sensing", "Human oversight"],
    },
    {
      id: "materials",
      icon: Atom,
      label: "Advanced materials",
      title: "Lighter structures with stronger operating lives.",
      body: "Materials research connects structural performance, manufacturability, repairability, and lifecycle impact across aviation and industrial products.",
      image: remoteMedia.innovation.domains[1].src,
      signals: ["Composite systems", "Lifecycle testing", "Manufacturing readiness"],
    },
    {
      id: "digital-operations",
      icon: Cpu,
      label: "Digital operations",
      title: "One operational view across people, programs, and assets.",
      body: "Connected data models, digital work instructions, and decision tools improve visibility without separating technology from the teams using it.",
      image: remoteMedia.innovation.domains[2].src,
      signals: ["Digital twins", "Operational data", "Decision support"],
    },
    {
      id: "efficient-systems",
      icon: Wind,
      label: "Efficient systems",
      title: "Performance gains designed into the whole system.",
      body: "Energy, propulsion, routing, and maintenance research work together to reduce waste while protecting safety, reliability, and mission performance.",
      image: remoteMedia.innovation.domains[3].src,
      signals: ["Energy efficiency", "Fleet economics", "Lower-impact operations"],
    },
  ];

  const activeDomain = domains[activeDomainIndex];
  const ActiveDomainIcon = activeDomain.icon;

  const innovationProcess = [
    [
      "01",
      "Discover",
      "Research teams frame the operating problem and test the evidence behind it.",
    ],
    [
      "02",
      "Prototype",
      "Engineers turn promising ideas into measurable systems, workflows, and physical trials.",
    ],
    [
      "03",
      "Validate",
      "Operators test safety, usability, performance, and lifecycle implications in context.",
    ],
    [
      "04",
      "Deploy",
      "Business teams move validated capability into products, programs, and customer operations.",
    ],
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-background font-mono text-foreground">
      <CorporateNav overlay />
      <PageHero
        eyebrow="Stratos Group / Innovation"
        title="Ideas become operating systems."
        intro="Innovation at Stratos connects research, engineering, field operations, and customer insight to create technology that can work beyond the lab."
        image={remoteMedia.innovation.hero.src}
        imageAlt={remoteMedia.innovation.hero.alt}
        anchor="#innovation-domains"
      />

      <section
        id="innovation-domains"
        className="scroll-mt-16 border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20"
      >
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Applied innovation
            </span>
            <h2 className="max-w-md font-display text-4xl font-extrabold leading-[0.94] tracking-tighter sm:text-5xl lg:text-6xl">
              Research begins with an operating need.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="max-w-3xl font-display text-2xl font-medium leading-tight tracking-tight lg:text-4xl">
              The strongest ideas are not simply new. They are useful, testable, responsible, and
              ready to improve a real system.
            </p>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed opacity-70">
              Our research teams work alongside engineers, operators, consultants, and customers so
              technical ambition remains connected to safety, economics, field usability, and
              long-term support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-foreground px-8 py-24 text-background lg:px-16 lg:py-36 xl:px-20">
        <SectionIntro
          eyebrow="Technology domains"
          title="Explore where we innovate."
          body="Select a domain to see how research moves across the group and into practical operating capability."
        />
        <div
          role="tablist"
          aria-label="Innovation domains"
          className="grid border-l border-t border-white/15 md:grid-cols-2 lg:grid-cols-4"
        >
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            const isActive = index === activeDomainIndex;

            return (
              <button
                key={domain.id}
                id={`innovation-tab-${domain.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="innovation-domain-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveDomainIndex(index)}
                onKeyDown={(event) =>
                  moveTabFocus(
                    event,
                    index,
                    domains.length,
                    setActiveDomainIndex,
                    (next) => `innovation-tab-${domains[next].id}`,
                  )
                }
                className={`min-h-44 border-b border-r border-white/15 p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary lg:min-h-52 lg:p-8 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-background/55 hover:text-background"
                }`}
              >
                <div className="mb-12 flex items-center justify-between">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="text-[10px] font-bold tracking-widest opacity-55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="font-display text-2xl font-bold leading-none tracking-tight">
                  {domain.label}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="innovation-domain-panel"
          role="tabpanel"
          aria-labelledby={`innovation-tab-${activeDomain.id}`}
          className="mt-12 grid grid-cols-12 gap-y-10 lg:mt-20"
        >
          <div className="col-span-12 overflow-hidden bg-black lg:col-span-7">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={activeDomain.id}
                src={activeDomain.image}
                alt={activeDomain.label}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.025 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
                className="aspect-[16/11] w-full object-cover"
              />
            </AnimatePresence>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeDomain.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
              >
                <ActiveDomainIcon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-7 font-display text-4xl font-extrabold leading-[0.94] tracking-tighter lg:text-5xl">
                  {activeDomain.title}
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-background/70">
                  {activeDomain.body}
                </p>
                <ul className="mt-8 border-t border-white/15">
                  {activeDomain.signals.map((signal) => (
                    <li
                      key={signal}
                      className="flex items-center gap-3 border-b border-white/15 py-4 text-[10px] font-bold uppercase tracking-widest"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                      {signal}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <SectionIntro
          eyebrow="From research to operation"
          title="A disciplined path to deployment."
          body="Ideas move through a common operating process before they become products, programs, or customer capability."
        />
        <div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-4">
          {innovationProcess.map(([number, title, body]) => (
            <article
              key={number}
              className="flex min-h-72 flex-col justify-between border-b border-r border-border p-7 lg:min-h-[360px] lg:p-8"
            >
              <span className="font-display text-5xl font-bold text-primary/35">{number}</span>
              <div>
                <h3 className="font-display text-3xl font-bold leading-none tracking-tight">
                  {title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed opacity-70">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <SectionIntro
          eyebrow="Innovation in practice"
          title="Technology moving into products."
          body="Featured platforms show how research, engineering, and operating insight come together across the group."
          href="/products"
          cta="Explore all products"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProducts.slice(0, 3).map((product) => (
            <a key={product.slug} href={product.href} className="group block">
              <div className="overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-[400px] w-full object-cover transition duration-[1200ms] group-hover:scale-[1.04] lg:h-[500px]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-6 border-t border-border pt-5">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
                    {product.category}
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-bold leading-none tracking-tight">
                    {product.name}
                  </h3>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <PageClosing
        eyebrow="Collaborate with us"
        title="Bring the operating challenge. We’ll bring the disciplines."
        primary={["Start a research conversation", "/contact"]}
        secondary={["Explore research", "/services/research"]}
      />
      <CorporateFooter />
    </main>
  );
}

export function SustainabilityPage() {
  const [activeCommitmentIndex, setActiveCommitmentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const commitments = [
    {
      id: "environment",
      icon: Leaf,
      label: "Environment",
      title: "Reduce impact across the operating lifecycle.",
      body: "We connect efficient aircraft operations, energy use, environmental monitoring, and responsible resource planning instead of treating them as separate obligations.",
      image: remoteMedia.sustainability.commitments[0].src,
      targets: [
        ["Operational emissions intensity", "32%", 72],
        ["Renewable electricity coverage", "68%", 68],
        ["Water reuse at priority sites", "54%", 54],
      ] as Array<[string, string, number]>,
    },
    {
      id: "people",
      icon: UsersRound,
      label: "People",
      title: "Build safer work and stronger technical opportunity.",
      body: "Safety systems, workforce development, inclusive technical pathways, and community partnerships are part of how programs are designed and governed.",
      image: remoteMedia.sustainability.commitments[1].src,
      targets: [
        ["Workforce safety actions closed", "94%", 94],
        ["Technical learning participation", "81%", 81],
        ["Local supplier development", "63%", 63],
      ] as Array<[string, string, number]>,
    },
    {
      id: "governance",
      icon: Scale,
      label: "Governance",
      title: "Make responsibility visible in every decision.",
      body: "Clear standards, traceable data, responsible sourcing, and board-level accountability help the group manage risk across complex operations and supply networks.",
      image: remoteMedia.sustainability.commitments[2].src,
      targets: [
        ["Critical suppliers assessed", "88%", 88],
        ["Material programs with traceability", "76%", 76],
        ["Priority audits completed", "91%", 91],
      ] as Array<[string, string, number]>,
    },
  ];

  const activeCommitment = commitments[activeCommitmentIndex];
  const ActiveCommitmentIcon = activeCommitment.icon;

  const lifecycleActions: Array<[ReactNode, string, string]> = [
    [
      <Wind className="h-6 w-6" />,
      "Design for efficiency",
      "Aircraft, routes, assets, and support models are evaluated as complete operating systems.",
    ],
    [
      <Droplets className="h-6 w-6" />,
      "Monitor what matters",
      "Aerial and field intelligence improve visibility into land, water, infrastructure, and operational risk.",
    ],
    [
      <Recycle className="h-6 w-6" />,
      "Plan for the lifecycle",
      "Maintainability, repair, material recovery, and responsible closure shape decisions from the beginning.",
    ],
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-background font-mono text-foreground">
      <CorporateNav overlay />
      <PageHero
        eyebrow="Stratos Group / Sustainability"
        title="Responsible growth has to be operational."
        intro="We bring safety, environmental performance, responsible sourcing, and transparent governance into the same systems used to run the business."
        image={remoteMedia.sustainability.hero.src}
        imageAlt={remoteMedia.sustainability.hero.alt}
        anchor="#sustainability-strategy"
      />

      <section
        id="sustainability-strategy"
        className="scroll-mt-16 border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20"
      >
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Our responsibility
            </span>
            <h2 className="max-w-md font-display text-4xl font-extrabold leading-[0.94] tracking-tighter sm:text-5xl lg:text-6xl">
              Performance includes the impact left behind.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="max-w-3xl font-display text-2xl font-medium leading-tight tracking-tight lg:text-4xl">
              Responsible operation is not a separate program. It is a design requirement, a
              management system, and a measure of long-term value.
            </p>
            <div className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-2">
              <p className="text-sm leading-relaxed opacity-70">
                Aviation discipline teaches us to identify risk early, document decisions, and
                improve continuously. We apply that same rigor to environmental performance,
                workforce safety, supply chains, and community impact.
              </p>
              <p className="text-sm leading-relaxed opacity-70">
                Group-wide standards create consistency, while each business adapts implementation
                to its technologies, locations, customers, and operating realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground px-8 py-24 text-background lg:px-16 lg:py-36 xl:px-20">
        <SectionIntro
          eyebrow="Commitments dashboard"
          title="Three dimensions of responsible operation."
          body="Select a commitment area to explore current priorities and illustrative progress indicators."
        />
        <div
          role="tablist"
          aria-label="Sustainability commitments"
          className="grid border-l border-t border-white/15 md:grid-cols-3"
        >
          {commitments.map((commitment, index) => {
            const Icon = commitment.icon;
            const isActive = index === activeCommitmentIndex;

            return (
              <button
                key={commitment.id}
                id={`commitment-tab-${commitment.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="commitment-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveCommitmentIndex(index)}
                onKeyDown={(event) =>
                  moveTabFocus(
                    event,
                    index,
                    commitments.length,
                    setActiveCommitmentIndex,
                    (next) => `commitment-tab-${commitments[next].id}`,
                  )
                }
                className={`min-h-44 border-b border-r border-white/15 p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary lg:min-h-52 lg:p-8 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-background/50 hover:text-background"
                }`}
              >
                <div className="mb-12 flex items-center justify-between">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="text-[10px] font-bold tracking-widest opacity-55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="font-display text-3xl font-bold leading-none tracking-tight">
                  {commitment.label}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="commitment-panel"
          role="tabpanel"
          aria-labelledby={`commitment-tab-${activeCommitment.id}`}
          className="mt-12 grid grid-cols-12 gap-y-10 lg:mt-20"
        >
          <div className="col-span-12 overflow-hidden bg-black lg:col-span-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={activeCommitment.id}
                src={activeCommitment.image}
                alt={activeCommitment.label}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.025 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
                className="aspect-[16/12] w-full object-cover lg:h-full"
              />
            </AnimatePresence>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeCommitment.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
              >
                <ActiveCommitmentIcon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-7 font-display text-4xl font-extrabold leading-[0.94] tracking-tighter lg:text-5xl">
                  {activeCommitment.title}
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-background/70">
                  {activeCommitment.body}
                </p>
                <div className="mt-10 space-y-7 border-t border-white/15 pt-8">
                  {activeCommitment.targets.map(([label, value, progress]) => (
                    <div key={label}>
                      <div className="mb-3 flex items-end justify-between gap-6">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-background/55">
                          {label}
                        </span>
                        <span className="font-display text-2xl font-bold">{value}</span>
                      </div>
                      <div className="h-px overflow-hidden bg-white/20">
                        <motion.div
                          key={`${activeCommitment.id}-${label}`}
                          initial={prefersReducedMotion ? { width: `${progress}%` } : { width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
                          className="h-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <SectionIntro
          eyebrow="Across the lifecycle"
          title="Responsibility starts before operations begin."
          body="The group considers impact from early design and sourcing through operation, maintenance, recovery, and closure."
        />
        <div className="grid border-t border-border lg:grid-cols-3">
          {lifecycleActions.map(([icon, title, body], index) => (
            <article
              key={title}
              className="border-b border-border py-9 lg:min-h-[390px] lg:border-r lg:px-9 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="flex items-center justify-between text-primary">
                {icon}
                <span className="text-[10px] font-bold tracking-widest text-foreground/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-20">
                <h3 className="font-display text-4xl font-bold leading-none tracking-tighter">
                  {title}
                </h3>
                <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-70">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Transparency
            </span>
            <h2 className="font-display text-5xl font-extrabold leading-[0.92] tracking-tighter lg:text-7xl">
              Evidence, not only commitments.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="text-sm leading-relaxed opacity-70">
              Sustainability data must become more complete, comparable, and useful over time. The
              group is building reporting systems that connect business-unit activity with common
              definitions, controls, and executive accountability.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <LinkArrow href="/about">Governance approach</LinkArrow>
              <LinkArrow href="/contact">Reporting inquiries</LinkArrow>
            </div>
          </div>
        </div>
      </section>

      <PageClosing
        eyebrow="Build responsibly"
        title="Progress is stronger when responsibility is designed in."
        primary={["Talk to our team", "/contact"]}
        secondary={["About the group", "/about"]}
      />
      <CorporateFooter />
    </main>
  );
}

export function CareersPage() {
  const [activeDisciplineIndex, setActiveDisciplineIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("All locations");
  const prefersReducedMotion = useReducedMotion();

  const disciplines = [
    {
      id: "engineering",
      icon: Wrench,
      label: "Engineering",
      title: "Turn complex requirements into dependable systems.",
      body: "Aircraft, structures, propulsion, autonomy, manufacturing, certification, and lifecycle engineering work together across physical and digital products.",
      image: remoteMedia.careers.disciplines[0].src,
      roles: ["Aircraft systems", "Manufacturing", "Certification"],
    },
    {
      id: "operations",
      icon: Factory,
      label: "Operations",
      title: "Make programs work safely in the real world.",
      body: "Flight, field, maintenance, production, logistics, and resource teams translate plans into repeatable daily performance.",
      image: remoteMedia.careers.disciplines[1].src,
      roles: ["Flight operations", "Field programs", "Supply networks"],
    },
    {
      id: "digital-research",
      icon: Microscope,
      label: "Digital & Research",
      title: "Explore what is possible, then prove what is useful.",
      body: "Researchers, data specialists, software teams, and human-factors experts build prototypes and decision systems around operating needs.",
      image: remoteMedia.careers.disciplines[2].src,
      roles: ["Applied research", "Data platforms", "Autonomy software"],
    },
    {
      id: "business",
      icon: BarChart3,
      label: "Business & Advisory",
      title: "Connect technology, customers, and corporate direction.",
      body: "Consultants, program leaders, finance teams, commercial specialists, and corporate functions help complex work move with clarity.",
      image: remoteMedia.careers.disciplines[3].src,
      roles: ["Consulting", "Program leadership", "Corporate functions"],
    },
  ];

  const locations = ["All locations", "Accra", "Washington", "London", "Multiple"];
  const activeDiscipline = disciplines[activeDisciplineIndex];
  const ActiveDisciplineIcon = activeDiscipline.icon;

  const query = searchQuery.trim().toLowerCase();
  const filteredOpenings = careerOpenings.filter((opening) => {
    const matchesLocation =
      locationFilter === "All locations" || opening.location === locationFilter;
    const searchable =
      `${opening.title} ${opening.discipline} ${opening.business} ${opening.location}`.toLowerCase();
    return matchesLocation && (!query || searchable.includes(query));
  });

  const benefits: Array<[ReactNode, string, string]> = [
    [
      <GraduationCap className="h-6 w-6" />,
      "Keep learning",
      "Technical academies, professional development, mentoring, and cross-business assignments support long careers.",
    ],
    [
      <HeartHandshake className="h-6 w-6" />,
      "Do work that matters",
      "Teams solve operating challenges connected to mobility, infrastructure, research, and essential industry.",
    ],
    [
      <Globe2 className="h-6 w-6" />,
      "Move across the group",
      "Five businesses create room to grow between disciplines, programs, locations, and leadership pathways.",
    ],
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-background font-mono text-foreground">
      <CorporateNav overlay />
      <PageHero
        eyebrow="Stratos Group / Careers"
        title="Build what the world has to operate."
        intro="Join teams working across aircraft, autonomous systems, research, consulting, digital operations, and responsible resource programs."
        image={remoteMedia.careers.hero.src}
        imageAlt={remoteMedia.careers.hero.alt}
        anchor="#career-paths"
      />

      <section
        id="career-paths"
        className="scroll-mt-16 border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20"
      >
        <SectionIntro
          eyebrow="Career paths"
          title="Find where your discipline can move."
          body="Select an area to explore the work, teams, and technical pathways available across the group."
        />
        <div
          role="tablist"
          aria-label="Career disciplines"
          className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-4"
        >
          {disciplines.map((discipline, index) => {
            const Icon = discipline.icon;
            const isActive = index === activeDisciplineIndex;

            return (
              <button
                key={discipline.id}
                id={`discipline-tab-${discipline.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="discipline-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveDisciplineIndex(index)}
                onKeyDown={(event) =>
                  moveTabFocus(
                    event,
                    index,
                    disciplines.length,
                    setActiveDisciplineIndex,
                    (next) => `discipline-tab-${disciplines[next].id}`,
                  )
                }
                className={`min-h-44 border-b border-r border-border p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary lg:min-h-52 lg:p-8 ${
                  isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted/60"
                }`}
              >
                <div className="mb-12 flex items-center justify-between">
                  <Icon
                    className={`h-5 w-5 ${isActive ? "text-primary-foreground" : "opacity-55"}`}
                  />
                  <span className="text-[10px] font-bold tracking-widest opacity-45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="font-display text-2xl font-bold leading-none tracking-tight">
                  {discipline.label}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="discipline-panel"
          role="tabpanel"
          aria-labelledby={`discipline-tab-${activeDiscipline.id}`}
          className="mt-12 grid grid-cols-12 gap-y-10 lg:mt-20"
        >
          <div className="col-span-12 overflow-hidden bg-muted lg:col-span-7">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={activeDiscipline.id}
                src={activeDiscipline.image}
                alt={activeDiscipline.label}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.025 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
                className="aspect-[16/11] w-full object-cover"
              />
            </AnimatePresence>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:self-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeDiscipline.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
              >
                <ActiveDisciplineIcon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-7 font-display text-4xl font-extrabold leading-[0.94] tracking-tighter lg:text-5xl">
                  {activeDiscipline.title}
                </h3>
                <p className="mt-6 text-sm leading-relaxed opacity-70">{activeDiscipline.body}</p>
                <ul className="mt-8 border-t border-border">
                  {activeDiscipline.roles.map((role) => (
                    <li
                      key={role}
                      className="flex items-center gap-3 border-b border-border py-4 text-[10px] font-bold uppercase tracking-widest"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                      {role}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section
        id="open-opportunities"
        className="bg-foreground px-8 py-24 text-background lg:px-16 lg:py-36 xl:px-20"
      >
        <div className="mb-14 grid grid-cols-12 gap-y-8 lg:mb-20">
          <div className="col-span-12 lg:col-span-7">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Open opportunities
            </span>
            <h2 className="font-display text-5xl font-extrabold leading-[0.92] tracking-tighter lg:text-7xl">
              Search current roles.
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-sm leading-relaxed text-background/65 lg:col-span-4 lg:col-start-9 lg:self-end">
            Explore illustrative openings across business units, disciplines, and principal office
            locations.
          </p>
        </div>

        <div className="grid gap-5 border-b border-white/15 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <label className="relative block border-b border-white/30 focus-within:border-primary">
            <span className="sr-only">Search roles</span>
            <Search
              className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-primary"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search roles, disciplines, or businesses"
              className="w-full bg-transparent py-4 pl-8 text-sm text-background outline-none placeholder:text-background/35"
            />
          </label>
          <div className="flex gap-2 overflow-x-auto">
            {locations.map((location) => (
              <button
                key={location}
                type="button"
                aria-pressed={locationFilter === location}
                onClick={() => setLocationFilter(location)}
                className={`min-w-max border px-4 py-3 text-[9px] font-bold uppercase tracking-widest transition-colors ${
                  locationFilter === location
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-white/20 text-background/55 hover:text-background"
                }`}
              >
                {location}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6" aria-live="polite">
          <div className="mb-4 flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-background/45">
            <span>
              {filteredOpenings.length}{" "}
              {filteredOpenings.length === 1 ? "opportunity" : "opportunities"}
            </span>
            <span>{locationFilter}</span>
          </div>
          {filteredOpenings.length ? (
            <div className="border-t border-white/15">
              {filteredOpenings.map((opening, index) => (
                <article
                  key={opening.slug}
                  className="group grid gap-5 border-b border-white/15 py-7 transition-colors hover:border-primary md:grid-cols-[auto_1fr_auto] md:items-center lg:py-9"
                >
                  <span className="text-[10px] font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold leading-none tracking-tight transition-transform group-hover:translate-x-1 lg:text-3xl">
                      {opening.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-bold uppercase tracking-widest text-background/45">
                      <span>{opening.business}</span>
                      <span>{opening.discipline}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3 w-3" aria-hidden="true" />
                        {opening.location}
                      </span>
                      <span>{opening.type}</span>
                    </div>
                  </div>
                  <a
                    href={`/careers/${opening.slug}`}
                    className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest transition-colors hover:text-primary"
                  >
                    View role
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="border-y border-white/15 py-16 text-center">
              <BriefcaseBusiness className="mx-auto h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="mt-6 font-display text-3xl font-bold tracking-tight">
                No matching opportunities.
              </h3>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setLocationFilter("All locations");
                }}
                className="mt-5 text-[9px] font-bold uppercase tracking-widest text-primary"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section
        id="application-process"
        className="scroll-mt-20 border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20"
      >
        <SectionIntro
          eyebrow="Life across the group"
          title="Build a career with room to move."
          body="A large corporate group should create more than jobs. It should create technical depth, mobility, and the support to keep developing."
        />
        <div className="grid border-t border-border lg:grid-cols-3">
          {benefits.map(([icon, title, body], index) => (
            <article
              key={title}
              className="border-b border-border py-9 lg:min-h-[390px] lg:border-r lg:px-9 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="flex items-center justify-between text-primary">
                {icon}
                <span className="text-[10px] font-bold tracking-widest text-foreground/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-20">
                <h3 className="font-display text-4xl font-bold leading-none tracking-tighter">
                  {title}
                </h3>
                <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-70">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Application process
            </span>
            <h2 className="font-display text-5xl font-extrabold leading-[0.92] tracking-tighter">
              Clear from interest to offer.
            </h2>
          </div>
          <div className="col-span-12 border-t border-border lg:col-span-7 lg:col-start-6">
            {[
              [
                "01",
                "Explore",
                "Find a role or discipline that matches your experience and direction.",
              ],
              [
                "02",
                "Connect",
                "Share your experience, interests, and the operating problems you want to solve.",
              ],
              [
                "03",
                "Meet the team",
                "Structured conversations cover technical ability, collaboration, and program context.",
              ],
              [
                "04",
                "Decide together",
                "Successful candidates receive a clear role scope, location, and onboarding pathway.",
              ],
            ].map(([number, title, body]) => (
              <article
                key={number}
                className="grid gap-4 border-b border-border py-7 md:grid-cols-[auto_1fr] md:gap-8"
              >
                <span className="text-[10px] font-bold text-primary">{number}</span>
                <div>
                  <h3 className="font-display text-3xl font-bold leading-none tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed opacity-70">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageClosing
        eyebrow="Your next chapter"
        title="Bring your discipline to work that has to perform."
        primary={["Explore opportunities", "#open-opportunities"]}
        secondary={["How hiring works", "#application-process"]}
      />
      <CorporateFooter />
    </main>
  );
}
