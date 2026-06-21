import {
  businessUnits,
  corporateLeaders,
  corporateNewsPosts,
  corporateStats,
  featuredProducts,
} from "@/lib/corporate-data";
import {
  CorporateFooter,
  CorporateNav,
  CorporatePageShell,
  LinkArrow,
  SectionIntro,
} from "@/components/corporate-layout";
import { useState, type FormEvent, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  CircleCheckBig,
  Clock3,
  Compass,
  Handshake,
  Mail,
  MapPin,
  Network,
  Newspaper,
  PackageCheck,
  Phone,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";

export function BusinessesOverviewPage() {
  const [activeBusinessIndex, setActiveBusinessIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activeBusiness = businessUnits[activeBusinessIndex];

  const activateBusiness = (index: number) => {
    setActiveBusinessIndex(index);
  };

  const handleBusinessKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
    variant: "desktop" | "mobile",
  ) => {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % businessUnits.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + businessUnits.length) % businessUnits.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = businessUnits.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    activateBusiness(nextIndex);
    document.getElementById(`${variant}-business-tab-${businessUnits[nextIndex].slug}`)?.focus();
  };

  const operatingPrinciples = [
    {
      icon: ShieldCheck,
      title: "Shared standards",
      body: "Safety, governance, and operational discipline create one dependable baseline across every service area.",
    },
    {
      icon: Network,
      title: "Connected intelligence",
      body: "Research, field data, and digital operations move between service teams instead of remaining isolated.",
    },
    {
      icon: Workflow,
      title: "Integrated delivery",
      body: "Specialist teams assemble around customer outcomes, from early strategy through long-term operations.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-background font-mono text-foreground">
      <CorporateNav overlay />

      <header className="relative flex min-h-[88svh] items-end overflow-hidden bg-foreground text-white">
        <motion.img
          src={businessUnits[0].image}
          alt="Stratos aviation operations"
          loading="eager"
          initial={prefersReducedMotion ? false : { scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" aria-hidden="true" />
        <div className="relative z-10 w-full px-8 pb-14 pt-40 lg:px-16 lg:pb-20 xl:px-20">
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
            Stratos Group / Services
          </span>
          <h1 className="max-w-6xl font-display text-6xl font-extrabold leading-[0.86] tracking-tighter text-balance sm:text-7xl lg:text-[clamp(6rem,11vw,10rem)]">
            Services built around operations.
          </h1>
          <div className="mt-9 flex flex-col gap-8 border-t border-white/35 pt-7 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-white/90 lg:text-base">
              Five specialist service areas connect aviation, autonomy, advisory expertise, applied
              research, and resource operations around customer needs.
            </p>
            <a
              href="#service-explorer"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-white/50 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Explore our services"
            >
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <section
        id="service-explorer"
        className="scroll-mt-16 bg-foreground px-8 py-24 text-background lg:px-16 lg:py-32 xl:px-20"
      >
        <div className="mb-14 grid grid-cols-12 gap-y-8 lg:mb-20">
          <div className="col-span-12 lg:col-span-7">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Service explorer
            </span>
            <h2 className="font-display text-5xl font-extrabold leading-[0.92] tracking-tighter text-balance lg:text-7xl">
              Five service areas. One operating system.
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-sm leading-relaxed text-background/65 lg:col-span-4 lg:col-start-9 lg:self-end">
            Select a service area to see how each team contributes specialist capability while
            drawing strength from the wider group.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Stratos service areas"
          className="hidden h-[min(74vh,760px)] min-h-[620px] gap-1 lg:flex"
        >
          {businessUnits.map((unit, index) => {
            const isActive = index === activeBusinessIndex;

            return (
              <motion.article
                key={unit.slug}
                animate={{ flexGrow: isActive ? 3.8 : 1 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => activateBusiness(index)}
                className="group relative min-w-0 basis-0 overflow-hidden bg-black"
              >
                <motion.img
                  src={unit.image}
                  alt=""
                  animate={{ scale: isActive ? 1 : 1.035 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    isActive ? "bg-foreground/35" : "bg-foreground/60"
                  }`}
                  aria-hidden="true"
                />
                <button
                  id={`desktop-business-tab-${unit.slug}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`desktop-business-panel-${unit.slug}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => activateBusiness(index)}
                  onFocus={() => activateBusiness(index)}
                  onKeyDown={(event) => handleBusinessKeyDown(event, index, "desktop")}
                  className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                >
                  <span className="sr-only">Show {unit.name}</span>
                </button>

                <div
                  id={`desktop-business-panel-${unit.slug}`}
                  role="tabpanel"
                  aria-labelledby={`desktop-business-tab-${unit.slug}`}
                  aria-hidden={!isActive}
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-6 lg:p-8"
                >
                  <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/75">
                    <span className="text-primary">{String(index + 1).padStart(2, "0")}</span>
                    <span>{unit.eyebrow}</span>
                  </div>
                  <h3
                    className={`font-display font-bold leading-[0.92] tracking-tighter text-white transition-[font-size] duration-500 ${
                      isActive ? "text-5xl xl:text-6xl" : "text-2xl xl:text-3xl"
                    }`}
                  >
                    {unit.name}
                  </h3>

                  <AnimatePresence initial={false}>
                    {isActive ? (
                      <motion.div
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: 0.12 }}
                        className="mt-7 max-w-xl border-t border-white/30 pt-6"
                      >
                        <p className="max-w-lg text-sm leading-relaxed text-white/85">
                          {unit.description}
                        </p>
                        <ul className="mt-6 flex flex-wrap gap-2">
                          {unit.stats.map((stat) => (
                            <li
                              key={stat}
                              className="border border-white/30 bg-foreground/20 px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-sm"
                            >
                              {stat}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={unit.href}
                          className="pointer-events-auto relative z-30 mt-7 inline-flex items-center gap-2 border-b border-white pb-1 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:border-primary hover:text-primary"
                        >
                          Explore service
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="lg:hidden">
          <div
            role="tablist"
            aria-label="Stratos service areas"
            className="-mx-8 flex gap-2 overflow-x-auto px-8 pb-5"
          >
            {businessUnits.map((unit, index) => {
              const isActive = index === activeBusinessIndex;

              return (
                <button
                  key={unit.slug}
                  id={`mobile-business-tab-${unit.slug}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="mobile-business-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => activateBusiness(index)}
                  onFocus={() => activateBusiness(index)}
                  onKeyDown={(event) => handleBusinessKeyDown(event, index, "mobile")}
                  className={`min-w-[180px] shrink-0 border px-4 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-white/20 text-background/65"
                  }`}
                >
                  <span className="block text-[9px] font-bold uppercase tracking-widest">
                    {String(index + 1).padStart(2, "0")} / {unit.eyebrow}
                  </span>
                  <span className="mt-3 block font-display text-xl font-bold leading-none tracking-tight">
                    {unit.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="mobile-business-panel"
            role="tabpanel"
            aria-labelledby={`mobile-business-tab-${activeBusiness.slug}`}
            className="mt-3"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeBusiness.slug}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={activeBusiness.image}
                    alt={activeBusiness.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/25" aria-hidden="true" />
                </div>
                <div className="border-x border-b border-white/15 p-6">
                  <h3 className="font-display text-4xl font-bold leading-none tracking-tighter">
                    {activeBusiness.name}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-background/70">
                    {activeBusiness.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {activeBusiness.stats.map((stat) => (
                      <li
                        key={stat}
                        className="border border-white/20 px-3 py-2 text-[9px] font-bold uppercase tracking-widest"
                      >
                        {stat}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <LinkArrow href={activeBusiness.href}>Explore service</LinkArrow>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <div className="grid grid-cols-12 gap-y-14">
          <div className="col-span-12 lg:col-span-4">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Connected by design
            </span>
            <h2 className="max-w-md font-display text-4xl font-extrabold leading-[0.94] tracking-tighter sm:text-5xl lg:text-6xl">
              More capability behind every service.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="max-w-3xl font-display text-2xl font-medium leading-tight tracking-tight lg:text-4xl">
              Each service area operates with its own specialist depth, supported by shared
              research, governance, digital systems, and delivery discipline.
            </p>
            <div className="mt-14 grid border-t border-border md:grid-cols-3">
              {operatingPrinciples.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.title}
                    className="border-b border-border py-8 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                  >
                    <div className="mb-10 flex items-center justify-between">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      <span className="text-[10px] font-bold tracking-widest opacity-40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold leading-none tracking-tight">
                      {principle.title}
                    </h3>
                    <p className="mt-5 text-sm leading-relaxed opacity-70">{principle.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <SectionIntro
          eyebrow="Featured products"
          title="Built across the group."
          body="A selection of aviation, autonomous, advisory, and industrial products shaped by the combined capabilities of our service teams."
          href="/products"
          cta="View all products"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProducts.slice(0, 3).map((product) => (
            <a key={product.slug} href={product.href} className="group block">
              <div className="overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-[380px] w-full object-cover transition duration-[1200ms] group-hover:scale-[1.04] lg:h-[460px]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-6 border-t border-border pt-5">
                <div>
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-primary">
                    {product.category}
                  </span>
                  <h3 className="font-display text-3xl font-bold leading-none tracking-tight">
                    {product.name}
                  </h3>
                </div>
                <ArrowUpRight
                  className="mt-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="px-8 py-28 lg:px-16 lg:py-40 xl:px-20">
        <div className="grid grid-cols-12 items-end gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Work with the group
            </span>
            <h2 className="font-display text-5xl font-extrabold leading-[0.9] tracking-tighter text-balance lg:text-7xl">
              Bring the right services around the challenge.
            </h2>
          </div>
          <div className="col-span-12 flex flex-col gap-3 sm:flex-row lg:col-span-3 lg:col-start-10 lg:flex-col">
            <a
              href="/contact"
              className="inline-flex items-center justify-between bg-accent px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-between border border-border px-6 py-4 text-[10px] font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
            >
              About the group
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}

export function BusinessUnitPage({ slug }: { slug: string }) {
  const unit = businessUnits.find((item) => item.slug === slug) ?? businessUnits[0];
  const siblingUnits = businessUnits.filter((item) => item.slug !== unit.slug).slice(0, 3);

  return (
    <CorporatePageShell eyebrow={unit.eyebrow} title={unit.name} intro={unit.description}>
      <section className="grid grid-cols-12 gap-y-10 border-b border-border px-8 py-24 lg:px-16 lg:py-32 xl:px-20">
        <div className="col-span-12 lg:col-span-7">
          <div className="overflow-hidden">
            <img
              src={unit.image}
              alt={unit.name}
              loading="eager"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
            What we do
          </span>
          <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tighter">
            Built for long-term operational value.
          </h2>
          <p className="mt-6 text-sm leading-relaxed opacity-70">{unit.summary}</p>
          <ul className="mt-10 space-y-4 border-t border-border pt-6">
            {unit.stats.map((item) => (
              <li key={item} className="text-[11px] font-bold uppercase tracking-widest">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-8 py-24 lg:px-16 lg:py-32 xl:px-20">
        <SectionIntro
          eyebrow="Connected services"
          title="A broader group behind every engagement."
          body="The corporate foundation allows each service team to draw from shared research, aviation discipline, advisory talent, and operational data."
          href="/services"
          cta="View all services"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {siblingUnits.map((item) => (
            <article key={item.slug} className="border border-border p-6">
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-widest text-primary">
                {item.eyebrow}
              </span>
              <h3 className="font-display text-3xl font-bold leading-none tracking-tight">
                {item.name}
              </h3>
              <p className="my-5 text-sm leading-relaxed opacity-70">{item.summary}</p>
              <LinkArrow href={item.href}>Explore</LinkArrow>
            </article>
          ))}
        </div>
      </section>
    </CorporatePageShell>
  );
}

export function NewsListPage() {
  return (
    <CorporatePageShell
      eyebrow="News"
      title="Latest blog and corporate briefings."
      intro="Updates from Stratos businesses, aviation programs, research teams, advisory work, and industrial operations."
    >
      <section className="px-8 py-24 lg:px-16 lg:py-32 xl:px-20">
        <div className="grid gap-6 md:grid-cols-2">
          {corporateNewsPosts.map((post) => (
            <article
              key={post.slug}
              className="group grid overflow-hidden border border-border bg-surface transition-colors hover:border-primary/60 lg:grid-cols-[0.9fr_1fr]"
            >
              <a href={post.href} className="overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="aspect-[16/10] h-full w-full object-cover opacity-80 transition duration-[1200ms] group-hover:scale-[1.04] group-hover:opacity-100"
                />
              </a>
              <div className="flex flex-col justify-between p-6">
                <div>
                  <div className="mb-5 flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-primary">{post.category}</span>
                    <span className="opacity-45">{post.date}</span>
                    <span className="opacity-45">{post.readTime}</span>
                  </div>
                  <a href={post.href}>
                    <h2 className="font-display text-3xl font-bold leading-none tracking-tight">
                      {post.title}
                    </h2>
                  </a>
                  <p className="mt-5 text-sm leading-relaxed opacity-70">{post.excerpt}</p>
                </div>
                <div className="mt-8">
                  <LinkArrow href={post.href}>Read blog</LinkArrow>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </CorporatePageShell>
  );
}

export function NewsDetailPage({ slug }: { slug: string }) {
  const post = corporateNewsPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <CorporatePageShell
        eyebrow="News"
        title="Blog post not found."
        intro="The story may have moved. Return to the newsroom to continue browsing Stratos updates."
      >
        <section className="px-8 py-24 lg:px-16 xl:px-20">
          <LinkArrow href="/news">Back to news</LinkArrow>
        </section>
      </CorporatePageShell>
    );
  }

  return (
    <CorporatePageShell eyebrow={post.category} title={post.title} intro={post.excerpt}>
      <article className="px-8 py-24 lg:px-16 lg:py-32 xl:px-20">
        <div className="overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="eager"
            className="aspect-[21/9] w-full object-cover"
          />
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="mb-8 flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest">
            <span className="text-primary">{post.category}</span>
            <span className="opacity-45">{post.date}</span>
            <span className="opacity-45">{post.readTime}</span>
          </div>
          <p className="font-display text-2xl leading-tight tracking-tight lg:text-4xl">
            {post.body}
          </p>
          <p className="mt-8 text-base leading-relaxed opacity-72">
            This first version of the blog detail page establishes the publishing foundation. The
            next pass can add filters, related stories, richer long-form content, and category
            landing pages.
          </p>
          <div className="mt-12 border-t border-border pt-8">
            <LinkArrow href="/news">Back to all blogs</LinkArrow>
          </div>
        </div>
      </article>
    </CorporatePageShell>
  );
}

export function ProductsOverviewPage() {
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All products");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePathIndex, setActivePathIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activeProduct = featuredProducts[activeProductIndex];

  const categories = ["All products", ...featuredProducts.map((product) => product.category)];
  const uniqueCategories = categories.filter(
    (category, index) => categories.indexOf(category) === index,
  );
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredProducts = featuredProducts.filter((product) => {
    const matchesCategory =
      activeCategory === "All products" || product.category === activeCategory;
    const searchable =
      `${product.name} ${product.category} ${product.service} ${product.summary}`.toLowerCase();
    return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
  });

  const productPaths = [
    {
      id: "mobility",
      label: "Move people and fleets",
      eyebrow: "Fleet & mobility",
      title: "Plan the aircraft and the operating system around it.",
      body: "Connect aircraft strategy, lifecycle support, maintenance intelligence, and group-wide operational visibility.",
      productSlugs: ["aeroline-a-90", "aerodigital-network"],
    },
    {
      id: "intelligence",
      label: "Inspect and understand assets",
      eyebrow: "Field intelligence",
      title: "See remote assets, terrain, and change more clearly.",
      body: "Combine autonomous inspection, aerial mapping, site intelligence, and governed field data for faster operational decisions.",
      productSlugs: ["skygrid-uas", "terrasight"],
    },
    {
      id: "transformation",
      label: "Transform complex operations",
      eyebrow: "Research & transformation",
      title: "Move from an operating challenge to tested capability.",
      body: "Bring advisory, applied research, prototypes, governance, and implementation planning into one practical modernization pathway.",
      productSlugs: ["fleetops-advisory", "research-campus-04"],
    },
  ];

  const activePath = productPaths[activePathIndex];
  const pathProducts = activePath.productSlugs
    .map((slug) => featuredProducts.find((product) => product.slug === slug))
    .filter((product): product is (typeof featuredProducts)[number] => Boolean(product));
  const pathLeadProduct = pathProducts[0];

  const handleProductKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % featuredProducts.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + featuredProducts.length) % featuredProducts.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = featuredProducts.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveProductIndex(nextIndex);
    document.getElementById(`product-stage-tab-${featuredProducts[nextIndex].slug}`)?.focus();
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-background font-mono text-foreground">
      <CorporateNav overlay />

      <header className="relative flex min-h-[90svh] flex-col justify-end overflow-hidden bg-foreground text-white">
        <AnimatePresence mode="sync" initial={false}>
          <motion.img
            key={activeProduct.slug}
            src={activeProduct.image}
            alt=""
            aria-hidden="true"
            loading={activeProductIndex === 0 ? "eager" : "lazy"}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.65 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-foreground/55" aria-hidden="true" />

        <div className="relative z-10 px-8 pb-8 pt-36 lg:px-16 lg:pb-10 xl:px-20">
          <div className="grid grid-cols-12 items-end gap-y-8">
            <div className="col-span-12 lg:col-span-8">
              <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
                Products / Engineered systems
              </span>
              <h1 className="max-w-5xl font-display text-6xl font-extrabold leading-[0.9] sm:text-7xl lg:text-8xl xl:text-9xl">
                Stratos products.
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:pl-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeProduct.slug}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                  className="border-l border-white/35 bg-foreground/25 py-2 pl-6 backdrop-blur-sm"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                    {activeProduct.category} / {activeProduct.service}
                  </span>
                  <h2 className="mt-3 font-display text-3xl font-bold leading-none lg:text-4xl">
                    {activeProduct.name}
                  </h2>
                  <p className="mt-4 max-w-md text-xs leading-relaxed text-white/75 lg:text-sm">
                    {activeProduct.summary}
                  </p>
                  <LinkArrow
                    href={activeProduct.href}
                    className="mt-6 text-white hover:text-accent"
                  >
                    Explore product
                  </LinkArrow>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Featured product stage"
          className="relative z-10 flex w-full snap-x overflow-x-auto border-t border-white/25 bg-foreground/35 backdrop-blur-sm lg:grid lg:grid-cols-6"
        >
          {featuredProducts.map((product, index) => {
            const isActive = index === activeProductIndex;

            return (
              <button
                key={product.slug}
                id={`product-stage-tab-${product.slug}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveProductIndex(index)}
                onFocus={() => setActiveProductIndex(index)}
                onMouseEnter={() => setActiveProductIndex(index)}
                onKeyDown={(event) => handleProductKeyDown(event, index)}
                className={`min-h-24 w-40 shrink-0 snap-start border-r border-white/20 px-5 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent lg:w-auto ${
                  isActive
                    ? "bg-accent text-accent-foreground"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="block text-[9px] font-bold tracking-widest opacity-55">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 block font-display text-lg font-bold leading-none">
                  {product.name}
                </span>
              </button>
            );
          })}
        </div>
      </header>

      <section className="border-b border-border px-8 py-20 lg:px-16 lg:py-28 xl:px-20">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              One portfolio
            </span>
            <h2 className="mt-5 max-w-sm font-display text-4xl font-extrabold leading-none sm:text-5xl">
              Products connected to real operations.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="max-w-3xl font-display text-2xl font-medium leading-tight lg:text-4xl">
              Aircraft, autonomous systems, advisory programs, research environments, and digital
              platforms are developed around the work customers need to perform.
            </p>
            <div className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
              {[
                ["06", "Featured product systems"],
                ["05", "Connected business units"],
                ["01", "Integrated operating model"],
              ].map(([value, label]) => (
                <div key={label}>
                  <span className="font-display text-4xl font-bold text-primary">{value}</span>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest opacity-55">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="product-portfolio"
        className="scroll-mt-20 px-8 py-24 lg:px-16 lg:py-36 xl:px-20"
      >
        <SectionIntro
          eyebrow="Explore the portfolio"
          title="Find the product that fits the mission."
          body="Filter by business or search by product, capability, and operating need. Every product opens into a dedicated specifications and media page."
        />

        <div className="mb-12 flex flex-col gap-6 border-y border-border py-6 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="tablist"
            aria-label="Filter products by category"
            className="flex snap-x gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0"
          >
            {uniqueCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`h-10 shrink-0 snap-start border px-4 text-[9px] font-bold uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <label className="relative block w-full lg:w-80">
            <span className="sr-only">Search products</span>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 opacity-45"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search products"
              className="h-12 w-full border border-border bg-surface pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-foreground/40 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </label>
        </div>

        <div className="mb-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
          <span aria-live="polite">
            {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
          </span>
          <span className="hidden opacity-45 sm:block">Select a product for full details</span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <a key={product.slug} href={product.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-0 top-0 bg-background px-4 py-3 text-[9px] font-bold uppercase tracking-widest text-primary">
                    {String(index + 1).padStart(2, "0")} / {product.category}
                  </span>
                  <span className="absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center bg-accent text-accent-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-5 border-t border-border pt-5">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
                    {product.service}
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-bold leading-none lg:text-4xl">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed opacity-70">{product.summary}</p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="border-y border-border py-20 text-center">
            <p className="font-display text-3xl font-bold">No products match this search.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All products");
                setSearchQuery("");
              }}
              className="mt-6 text-[10px] font-bold uppercase tracking-widest text-primary hover:underline"
            >
              Reset product filters
            </button>
          </div>
        )}
      </section>

      <section className="bg-foreground px-8 py-24 text-background lg:px-16 lg:py-36 xl:px-20">
        <SectionIntro
          eyebrow="Product pathways"
          title="Start with the outcome, not the label."
          body="Choose the operating need closest to your program. We will connect the relevant product systems and specialist teams."
        />

        <div className="grid grid-cols-12 gap-y-12">
          <div
            role="tablist"
            aria-label="Product pathways"
            className="col-span-12 border-t border-white/15 lg:col-span-4"
          >
            {productPaths.map((path, index) => {
              const isActive = index === activePathIndex;
              return (
                <button
                  key={path.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActivePathIndex(index)}
                  className={`flex min-h-24 w-full items-center justify-between border-b border-white/15 px-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent lg:min-h-32 lg:px-7 ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-background/55 hover:text-background"
                  }`}
                >
                  <span className="font-display text-xl font-bold leading-tight lg:text-2xl">
                    {path.label}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activePath.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
              >
                {pathLeadProduct && (
                  <div className="aspect-[16/9] overflow-hidden bg-black">
                    <img
                      src={pathLeadProduct.image}
                      alt={pathLeadProduct.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <span className="mt-8 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
                  {activePath.eyebrow}
                </span>
                <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-none sm:text-5xl lg:text-6xl">
                  {activePath.title}
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-background/70">
                  {activePath.body}
                </p>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6">
                  {pathProducts.map((product) => (
                    <LinkArrow key={product.slug} href={product.href} className="text-background">
                      {product.name}
                    </LinkArrow>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <SectionIntro
          eyebrow="From interest to operation"
          title="A clear route into every product."
          body="Product conversations begin with the mission, mature through evidence, and continue into deployment and lifecycle support."
        />
        <div className="grid border-t border-border md:grid-cols-3">
          {[
            {
              icon: Compass,
              number: "01",
              title: "Define the mission",
              body: "Share the operating need, environment, timing, stakeholders, and measures of success.",
            },
            {
              icon: PackageCheck,
              number: "02",
              title: "Configure the product",
              body: "Align the platform, service model, integrations, partners, and readiness pathway.",
            },
            {
              icon: Workflow,
              number: "03",
              title: "Operate and improve",
              body: "Deploy with clear ownership, support, performance visibility, and lifecycle learning.",
            },
          ].map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="border-b border-border py-8 md:min-h-[360px] md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <div className="flex items-center justify-between text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="text-[10px] font-bold tracking-widest">{step.number}</span>
                </div>
                <div className="mt-24">
                  <h3 className="font-display text-3xl font-bold leading-none lg:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-70">{step.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-accent px-8 py-20 text-accent-foreground lg:px-16 lg:py-28 xl:px-20">
        <div className="grid grid-cols-12 items-end gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
              Product inquiry
            </span>
            <h2 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-none lg:text-7xl">
              Bring us the mission. We will shape the right product conversation.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10">
            <a
              href="/contact?service=products#contact-desk"
              className="inline-flex w-full items-center justify-between bg-foreground px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-background transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Request product information
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}

export function ProductDetailPage({ slug }: { slug: string }) {
  const product = featuredProducts.find((item) => item.slug === slug);
  const relatedProducts = featuredProducts
    .filter((item) => item.slug !== product?.slug)
    .slice(0, 3);

  if (!product) {
    return (
      <CorporatePageShell
        eyebrow="Featured Products"
        title="Product not found."
        intro="The product may have moved. Return to the featured products page to continue browsing the portfolio."
      >
        <section className="px-8 py-24 lg:px-16 xl:px-20">
          <LinkArrow href="/products">Back to products</LinkArrow>
        </section>
      </CorporatePageShell>
    );
  }

  const productStatus =
    product.specs.find(([label]) => label === "Product status")?.[1] ?? "In development";

  return (
    <main className="min-h-screen overflow-x-clip bg-background font-mono text-foreground">
      <CorporateNav overlay />

      <header className="relative flex min-h-[92svh] items-end overflow-hidden bg-foreground text-white">
        <img
          src={product.image}
          alt={product.name}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/35" aria-hidden="true" />
        <div className="relative z-10 w-full px-8 pb-14 pt-40 lg:px-16 lg:pb-20 xl:px-20">
          <div className="mb-7 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em]">
            <a href="/products" className="transition-colors hover:text-primary">
              Products
            </a>
            <span className="h-px w-8 bg-white/45" aria-hidden="true" />
            <span>{product.category}</span>
            <span className="border border-white/35 px-2 py-1">{productStatus}</span>
          </div>
          <h1 className="max-w-6xl font-display text-6xl font-extrabold leading-[0.88] tracking-tighter text-balance sm:text-7xl lg:text-[clamp(6rem,10vw,10rem)]">
            {product.name}
          </h1>
          <div className="mt-9 flex flex-col gap-8 border-t border-white/35 pt-7 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-white/90 lg:text-base">
              {product.summary}
            </p>
            <a
              href="#overview"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-white/50 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Explore product details"
            >
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <nav
        aria-label="Product page sections"
        className="sticky top-[65px] z-40 overflow-x-auto border-b border-border bg-background/95 px-8 backdrop-blur-sm lg:px-16 xl:px-20"
      >
        <div className="flex min-w-max items-center gap-8 py-4 text-[10px] font-bold uppercase tracking-widest lg:gap-12">
          <span className="text-primary">{product.name}</span>
          <a href="#overview" className="transition-colors hover:text-primary">
            Overview
          </a>
          <a href="#specifications" className="transition-colors hover:text-primary">
            Specifications
          </a>
          <a href="#media" className="transition-colors hover:text-primary">
            Media
          </a>
          <a href="#capabilities" className="transition-colors hover:text-primary">
            Capabilities
          </a>
          <a href="/contact" className="ml-auto transition-colors hover:text-primary">
            Request a quote
          </a>
        </div>
      </nav>

      <section
        id="overview"
        className="scroll-mt-28 border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20"
      >
        <div className="grid grid-cols-12 gap-y-14">
          <div className="col-span-12 lg:col-span-4">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Product overview
            </span>
            <h2 className="max-w-md font-display text-4xl font-extrabold leading-[0.94] tracking-tighter sm:text-5xl lg:text-6xl">
              Designed around the mission, built around operations.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="max-w-3xl font-display text-2xl font-medium leading-tight tracking-tight lg:text-4xl">
              {product.description}
            </p>
            <div className="mt-16 grid gap-x-10 gap-y-12 border-t border-border pt-10 md:grid-cols-3">
              {[
                ["Challenge", product.challenge],
                ["Approach", product.solution],
                ["Outcome", product.outcome],
              ].map(([title, body]) => (
                <article key={title}>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                    {title}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed opacity-72">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="specifications"
        className="scroll-mt-28 bg-foreground px-8 py-24 text-background lg:px-16 lg:py-36 xl:px-20"
      >
        <div className="mb-16 flex flex-col gap-8 border-b border-white/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Technical profile
            </span>
            <h2 className="font-display text-5xl font-extrabold leading-[0.92] tracking-tighter lg:text-7xl">
              Product specifications.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-background/65">
            A concise view of the product's operating role, intended users, support model, and
            current program maturity.
          </p>
        </div>
        <dl className="grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {product.specs.map(([label, value], index) => (
            <div
              key={label}
              className="min-h-44 border-b border-r border-white/15 p-6 lg:min-h-52 lg:p-8"
            >
              <dt className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-background/50">
                {label}
                <span>{String(index + 1).padStart(2, "0")}</span>
              </dt>
              <dd className="mt-10 max-w-sm font-display text-2xl font-bold leading-tight tracking-tight lg:text-3xl">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="media" className="scroll-mt-28 border-b border-border py-24 lg:py-36">
        <div className="px-8 lg:px-16 xl:px-20">
          <SectionIntro
            eyebrow="Product in focus"
            title="See the system in motion."
            body="Product imagery and video show the operating context, physical platform, and connected systems behind the specification sheet."
          />
        </div>
        <div className="overflow-hidden bg-foreground">
          <video
            src={product.video}
            poster={product.image}
            muted
            playsInline
            controls
            preload="metadata"
            className="aspect-video max-h-[85svh] w-full object-cover"
          />
        </div>
        <div className="grid gap-1 bg-border pt-1 md:grid-cols-3">
          {product.gallery.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${product.name} supporting visual ${index + 1}`}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          ))}
        </div>
      </section>

      <section
        id="capabilities"
        className="scroll-mt-28 border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20"
      >
        <SectionIntro
          eyebrow="Core capabilities"
          title="One product, connected capabilities."
          body="The platform brings engineering, operations, data, and long-term support into one coherent product system."
        />
        <div className="border-t border-border">
          {product.capabilities.map((item, index) => (
            <article
              key={item}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-border py-7 lg:py-9"
            >
              <span className="text-[10px] font-bold tracking-widest text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-bold leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl lg:text-5xl">
                {item}
              </h3>
              <Check className="h-4 w-4 text-primary" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <div className="grid grid-cols-12 items-end gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Product inquiry
            </span>
            <h2 className="mt-6 font-display text-5xl font-extrabold leading-[0.9] tracking-tighter lg:text-7xl">
              Discuss {product.name} with our sales team.
            </h2>
            <p className="mt-7 max-w-2xl text-sm leading-relaxed opacity-65">
              Share your operating requirement, location, delivery expectations, and support needs.
              Our team will help define the right product and service pathway.
            </p>
          </div>
          <a
            href="/contact"
            className="col-span-12 inline-flex items-center justify-between bg-accent px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground lg:col-span-3 lg:col-start-10"
          >
            Request a quote
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <SectionIntro
          eyebrow="Related Products"
          title="Continue through the portfolio."
          href="/products"
          cta="View all products"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <a key={item.slug} href={item.href} className="group block border-t border-border pt-4">
              <div className="overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition duration-[1200ms] group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-primary">
                    {item.category}
                  </span>
                  <h3 className="font-display text-3xl font-bold leading-none tracking-tight">
                    {item.name}
                  </h3>
                </div>
                <ArrowUpRight
                  className="mt-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </a>
          ))}
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}

export function CompanyPage() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const evolutionStages = [
    {
      id: "aviation-foundation",
      step: "01",
      label: "Aviation foundation",
      title: "The discipline of flight came first.",
      body: "Stratos began with the standards that dependable aviation demands: safety, engineering rigor, operational readiness, and long-term support.",
      image: businessUnits[0].image,
    },
    {
      id: "autonomous-expansion",
      step: "02",
      label: "Autonomous expansion",
      title: "Flight intelligence moved beyond the cockpit.",
      body: "Drone platforms, sensing, and autonomous operations extended the group's aviation capability into infrastructure, logistics, and remote environments.",
      image: businessUnits[1].image,
    },
    {
      id: "industrial-intelligence",
      step: "03",
      label: "Industrial intelligence",
      title: "Research and advisory connected technology to operations.",
      body: "Applied research and consulting created a bridge between emerging technology, organizational change, field teams, and measurable operating value.",
      image: businessUnits[3].image,
    },
    {
      id: "one-group",
      step: "04",
      label: "One corporate group",
      title: "Five businesses now move as one system.",
      body: "Today, aviation, autonomous systems, consulting, research, and mining operate with specialist independence and a shared corporate foundation.",
      image: businessUnits[4].image,
    },
  ];

  const activeStage = evolutionStages[activeStageIndex];

  const handleStageKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % evolutionStages.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + evolutionStages.length) % evolutionStages.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = evolutionStages.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveStageIndex(nextIndex);
    document.getElementById(`company-stage-${evolutionStages[nextIndex].id}`)?.focus();
  };

  const companyPrinciples = [
    {
      icon: ShieldCheck,
      eyebrow: "How we operate",
      title: "Safety before scale.",
      body: "Growth only matters when systems, teams, and decisions remain dependable under real operating pressure.",
    },
    {
      icon: Compass,
      eyebrow: "How we decide",
      title: "Long-term direction.",
      body: "Investment, partnerships, and technology choices are measured against durable customer and community value.",
    },
    {
      icon: UsersRound,
      eyebrow: "How we work",
      title: "Specialists, connected.",
      body: "Independent expertise becomes more useful when it moves freely across business and disciplinary boundaries.",
    },
  ];

  const partnerNetworks = [
    {
      icon: Handshake,
      eyebrow: "Operators",
      title: "Airlines and mission teams",
      body: "Operating partners bring route, fleet, safety, and field experience into product and service decisions.",
    },
    {
      icon: Network,
      eyebrow: "Technology",
      title: "Engineering and manufacturing",
      body: "Specialist technology and supply partners support integrated systems, production readiness, and lifecycle delivery.",
    },
    {
      icon: UsersRound,
      eyebrow: "Knowledge",
      title: "Research and learning institutions",
      body: "Universities, laboratories, and training partners help turn emerging knowledge into practical capability.",
    },
    {
      icon: Compass,
      eyebrow: "Industry",
      title: "Infrastructure and public-sector partners",
      body: "Long-term programs connect customers, authorities, communities, and industrial specialists around shared outcomes.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-background font-mono text-foreground">
      <CorporateNav overlay />

      <header className="relative flex min-h-[88svh] items-end overflow-hidden bg-foreground text-white">
        <motion.img
          src={businessUnits[3].image}
          alt="Stratos aircraft above a connected operating landscape"
          loading="eager"
          initial={prefersReducedMotion ? false : { scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" aria-hidden="true" />
        <div className="relative z-10 w-full px-8 pb-14 pt-40 lg:px-16 lg:pb-20 xl:px-20">
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
            Stratos Group / About us
          </span>
          <h1 className="max-w-6xl font-display text-6xl font-extrabold leading-[0.86] tracking-tighter text-balance sm:text-7xl lg:text-[clamp(5.5rem,10vw,9.5rem)]">
            Built to connect aviation and industry.
          </h1>
          <div className="mt-9 flex flex-col gap-8 border-t border-white/35 pt-7 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-white/90 lg:text-base">
              Stratos is an aviation-led corporate group bringing flight discipline, autonomous
              intelligence, research, advisory expertise, and industrial operations together.
            </p>
            <a
              href="#company-story"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-white/50 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Read our company story"
            >
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <section
        id="company-story"
        className="scroll-mt-16 border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20"
      >
        <div className="grid grid-cols-12 gap-y-14">
          <div className="col-span-12 lg:col-span-4">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Who we are
            </span>
            <h2 className="max-w-md font-display text-4xl font-extrabold leading-[0.94] tracking-tighter sm:text-5xl lg:text-6xl">
              Aviation is the discipline. Broader industry is the opportunity.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="max-w-3xl font-display text-2xl font-medium leading-tight tracking-tight lg:text-4xl">
              We build and operate systems for environments where safety, coordination, and
              long-term performance matter more than short-term spectacle.
            </p>
            <div className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-2">
              <p className="text-sm leading-relaxed opacity-70">
                The group is anchored in aviation, where every decision must account for people,
                engineering, operations, regulation, and lifecycle support. That discipline shapes
                how every Stratos business approaches complex work.
              </p>
              <p className="text-sm leading-relaxed opacity-70">
                By connecting autonomous systems, consulting, applied research, and responsible
                resource operations, we help customers move people, data, and essential materials
                with greater confidence.
              </p>
            </div>
            <div className="mt-12 overflow-hidden bg-muted">
              <img
                src={businessUnits[1].image}
                alt="Stratos autonomous aviation operations"
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground px-8 py-24 text-background lg:px-16 lg:py-36 xl:px-20">
        <div className="mb-14 grid grid-cols-12 gap-y-8 lg:mb-20">
          <div className="col-span-12 lg:col-span-7">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Our evolution
            </span>
            <h2 className="font-display text-5xl font-extrabold leading-[0.92] tracking-tighter text-balance lg:text-7xl">
              From flight discipline to a connected group.
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-sm leading-relaxed text-background/65 lg:col-span-4 lg:col-start-9 lg:self-end">
            Explore the operating stages that shaped Stratos into a broader aviation-led industrial
            company.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-y-10 lg:min-h-[700px]">
          <div
            role="tablist"
            aria-label="Company evolution stages"
            className="col-span-12 flex gap-2 overflow-x-auto lg:col-span-4 lg:block lg:overflow-visible lg:border-t lg:border-white/15"
          >
            {evolutionStages.map((stage, index) => {
              const isActive = index === activeStageIndex;

              return (
                <button
                  key={stage.id}
                  id={`company-stage-${stage.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="company-evolution-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveStageIndex(index)}
                  onFocus={() => setActiveStageIndex(index)}
                  onKeyDown={(event) => handleStageKeyDown(event, index)}
                  className={`min-w-[210px] shrink-0 border px-5 py-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:flex lg:w-full lg:min-w-0 lg:items-center lg:justify-between lg:border-x-0 lg:border-t-0 lg:border-b lg:border-white/15 lg:px-0 lg:py-7 ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground lg:bg-transparent lg:text-background"
                      : "border-white/20 text-background/45 hover:text-background"
                  }`}
                >
                  <span>
                    <span className="block text-[9px] font-bold uppercase tracking-widest">
                      Stage {stage.step}
                    </span>
                    <span className="mt-3 block font-display text-xl font-bold leading-none tracking-tight lg:text-2xl">
                      {stage.label}
                    </span>
                  </span>
                  <span className="hidden text-[10px] font-bold tracking-widest lg:block">
                    {stage.step}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="company-evolution-panel"
            role="tabpanel"
            aria-labelledby={`company-stage-${activeStage.id}`}
            className="col-span-12 lg:col-span-7 lg:col-start-6"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={activeStage.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black lg:aspect-[16/11]">
                  <img
                    src={activeStage.image}
                    alt={activeStage.label}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/20" aria-hidden="true" />
                  <span className="absolute left-5 top-5 bg-background px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-foreground lg:left-7 lg:top-7">
                    {activeStage.step} / {String(evolutionStages.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="border-x border-b border-white/15 p-6 lg:p-9">
                  <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
                    {activeStage.label}
                  </span>
                  <h3 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[0.94] tracking-tighter lg:text-5xl">
                    {activeStage.title}
                  </h3>
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-background/70">
                    {activeStage.body}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <SectionIntro
          eyebrow="At a glance"
          title="A group built for operating scale."
          body="Our businesses combine specialist depth with the reach, investment, and shared systems of a connected corporate group."
        />
        <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {corporateStats.map((stat, index) => (
            <article
              key={stat.label}
              className="flex min-h-64 flex-col justify-between border-b border-r border-border p-6 lg:min-h-72 lg:p-8"
            >
              <span className="text-[10px] font-bold tracking-widest opacity-40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="font-display text-6xl font-extrabold leading-none tracking-tighter lg:text-7xl">
                  {stat.value}
                </div>
                <p className="mt-4 text-[10px] font-bold uppercase tracking-widest opacity-60">
                  {stat.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <SectionIntro
          eyebrow="What holds us together"
          title="One standard across every division."
          body="Different businesses, technologies, and markets are connected by a common way of operating."
        />
        <div className="grid border-t border-border lg:grid-cols-3">
          {companyPrinciples.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.title}
                className="border-b border-border py-9 lg:min-h-[390px] lg:border-r lg:px-9 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <span className="text-[10px] font-bold tracking-widest opacity-40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-20">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
                    {principle.eyebrow}
                  </span>
                  <h3 className="mt-5 font-display text-4xl font-bold leading-none tracking-tighter">
                    {principle.title}
                  </h3>
                  <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-70">
                    {principle.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <SectionIntro
          eyebrow="Partner network"
          title="Built with organizations that know the work."
          body="Stratos works with operating, technology, research, industrial, and public-sector partners to combine specialist knowledge with dependable delivery."
        />
        <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {partnerNetworks.map((partner, index) => {
            const Icon = partner.icon;

            return (
              <article
                key={partner.title}
                className="flex min-h-80 flex-col justify-between border-b border-r border-border p-6 lg:min-h-[420px] lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <span className="text-[10px] font-bold tracking-widest opacity-40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
                    {partner.eyebrow}
                  </span>
                  <h3 className="mt-5 font-display text-3xl font-bold leading-none tracking-tighter">
                    {partner.title}
                  </h3>
                  <p className="mt-6 text-sm leading-relaxed opacity-70">{partner.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <SectionIntro
          eyebrow="Corporate leadership"
          title="Accountability starts at the top."
          body="The executive team connects specialist business leadership with a shared responsibility for safety, performance, and long-term value."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {corporateLeaders.map((leader) => (
            <article
              key={leader.id}
              tabIndex={0}
              className="group outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <div className="relative h-[520px] overflow-hidden bg-muted lg:h-[620px]">
                <img
                  src={leader.image}
                  alt={leader.imageAlt}
                  loading="lazy"
                  style={{ objectPosition: leader.objectPosition }}
                  className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-[1.035]"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-0 bg-foreground/65 p-6 text-white backdrop-blur-sm transition-transform duration-500 lg:translate-y-full lg:group-hover:translate-y-0 lg:group-focus-within:translate-y-0">
                  <p className="text-sm leading-relaxed text-white/80">{leader.bio}</p>
                </div>
              </div>
              <div className="mt-5 border-t border-border pt-5">
                <h3 className="font-display text-3xl font-bold leading-none tracking-tight">
                  {leader.name}
                </h3>
                <p className="mt-3 text-[9px] font-bold uppercase tracking-widest text-primary">
                  {leader.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-8 py-28 lg:px-16 lg:py-40 xl:px-20">
        <div className="grid grid-cols-12 items-end gap-y-12">
          <div className="col-span-12 lg:col-span-8">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Continue exploring
            </span>
            <h2 className="font-display text-5xl font-extrabold leading-[0.9] tracking-tighter text-balance lg:text-7xl">
              The company is measured by how it operates.
            </h2>
          </div>
          <div className="col-span-12 grid gap-3 sm:grid-cols-3 lg:col-span-3 lg:col-start-10 lg:grid-cols-1">
            {[
              ["Responsibility", "/sustainability"],
              ["Careers", "/careers"],
              ["Contact the group", "/contact"],
            ].map(([label, href], index) => (
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

      <CorporateFooter />
    </main>
  );
}

export function ContactPage({ service }: { service?: string }) {
  const [activeInquiryIndex, setActiveInquiryIndex] = useState(0);
  const [activeOfficeIndex, setActiveOfficeIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const prefilledService =
    service === "group" || businessUnits.some((unit) => unit.slug === service) ? service : "";

  const inquiryDesks = [
    {
      id: "partnerships",
      label: "Partnerships & Sales",
      eyebrow: "Business inquiries",
      description:
        "Aircraft programs, autonomous systems, consulting engagements, research partnerships, and industrial operations.",
      email: "partnerships@stratos.com",
      icon: Handshake,
    },
    {
      id: "media",
      label: "Media & Press",
      eyebrow: "Corporate communications",
      description:
        "Press briefings, executive commentary, media assets, event participation, and corporate announcements.",
      email: "media@stratos.com",
      icon: Newspaper,
    },
    {
      id: "corporate",
      label: "Corporate Affairs",
      eyebrow: "Group inquiries",
      description:
        "Corporate information, governance questions, institutional engagement, and inquiries that span multiple group functions.",
      email: "corporate@stratos.com",
      icon: BriefcaseBusiness,
    },
    {
      id: "suppliers",
      label: "Suppliers",
      eyebrow: "Supply network",
      description:
        "Supplier onboarding, procurement, technical standards, responsible sourcing, and program opportunities.",
      email: "suppliers@stratos.com",
      icon: PackageCheck,
    },
  ];

  const offices = [
    {
      city: "Accra",
      label: "Group Headquarters",
      address: "1 Aviation Square, Airport City, Accra, Ghana",
      phone: "+233 30 290 4500",
      hours: "08:00–17:00 GMT",
      coverage: "Africa / Group operations",
      coordinates: "05°36′N / 00°10′W",
    },
    {
      city: "Washington",
      label: "Americas Office",
      address: "1200 Independence Avenue SW, Washington, DC",
      phone: "+1 202 555 0184",
      hours: "08:30–17:30 ET",
      coverage: "North America / Programs",
      coordinates: "38°53′N / 77°02′W",
    },
    {
      city: "London",
      label: "Europe Office",
      address: "30 Finsbury Square, London EC2A, United Kingdom",
      phone: "+44 20 7946 0820",
      hours: "08:30–17:30 GMT",
      coverage: "Europe / Partnerships",
      coordinates: "51°30′N / 00°07′W",
    },
  ];

  const activeInquiry = inquiryDesks[activeInquiryIndex];
  const activeOffice = offices[activeOfficeIndex];
  const ActiveInquiryIcon = activeInquiry.icon;

  const activateInquiry = (index: number) => {
    setActiveInquiryIndex(index);
    setSubmitted(false);
  };

  const handleInquiryKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % inquiryDesks.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + inquiryDesks.length) % inquiryDesks.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = inquiryDesks.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    activateInquiry(nextIndex);
    document.getElementById(`inquiry-tab-${inquiryDesks[nextIndex].id}`)?.focus();
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-background font-mono text-foreground">
      <CorporateNav overlay />

      <header className="relative flex min-h-[78svh] items-end overflow-hidden bg-foreground text-white">
        <motion.img
          src={businessUnits[2].image}
          alt="Stratos global operations"
          loading="eager"
          initial={prefersReducedMotion ? false : { scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/45" aria-hidden="true" />
        <div className="relative z-10 w-full px-8 pb-14 pt-40 lg:px-16 lg:pb-20 xl:px-20">
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
            Stratos Group / Contact
          </span>
          <h1 className="max-w-6xl font-display text-6xl font-extrabold leading-[0.86] tracking-tighter text-balance sm:text-7xl lg:text-[clamp(5.5rem,10vw,9rem)]">
            Start the right conversation.
          </h1>
          <div className="mt-9 flex flex-col gap-8 border-t border-white/35 pt-7 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-white/90 lg:text-base">
              Connect with the team best placed to support your business, media, corporate, or
              supplier inquiry across the Stratos Group.
            </p>
            <a
              href="#contact-desk"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-white/50 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Choose a contact desk"
            >
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <section
        id="contact-desk"
        className="scroll-mt-16 border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20"
      >
        <div className="mb-14 grid grid-cols-12 gap-y-8 lg:mb-20">
          <div className="col-span-12 lg:col-span-7">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              01 / Choose a contact desk
            </span>
            <h2 className="font-display text-5xl font-extrabold leading-[0.92] tracking-tighter text-balance lg:text-7xl">
              Direct your inquiry.
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-sm leading-relaxed opacity-65 lg:col-span-4 lg:col-start-9 lg:self-end">
            Selecting a desk updates the receiving team and gives your message the right business
            context from the start.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Contact inquiry desks"
          className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-4"
        >
          {inquiryDesks.map((desk, index) => {
            const Icon = desk.icon;
            const isActive = index === activeInquiryIndex;

            return (
              <button
                key={desk.id}
                id={`inquiry-tab-${desk.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="contact-inquiry-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => activateInquiry(index)}
                onKeyDown={(event) => handleInquiryKeyDown(event, index)}
                className={`group min-h-44 border-b border-r border-border p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary lg:min-h-52 lg:p-8 ${
                  isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted/60"
                }`}
              >
                <div className="mb-10 flex items-center justify-between">
                  <Icon
                    className={`h-5 w-5 ${isActive ? "text-primary-foreground" : "opacity-55"}`}
                  />
                  <span className="text-[10px] font-bold tracking-widest opacity-45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="block text-[9px] font-bold uppercase tracking-widest opacity-55">
                  {desk.eyebrow}
                </span>
                <span className="mt-3 block font-display text-2xl font-bold leading-none tracking-tight">
                  {desk.label}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="contact-inquiry-panel"
          role="tabpanel"
          aria-labelledby={`inquiry-tab-${activeInquiry.id}`}
          className="mt-16 grid grid-cols-12 gap-y-14 lg:mt-24"
        >
          <div className="col-span-12 lg:col-span-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeInquiry.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
              >
                <ActiveInquiryIcon className="h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mt-8 max-w-md font-display text-4xl font-extrabold leading-[0.95] tracking-tighter lg:text-5xl">
                  {activeInquiry.label}
                </h3>
                <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-70">
                  {activeInquiry.description}
                </p>
                <a
                  href={`mailto:${activeInquiry.email}`}
                  className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {activeInquiry.email}
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="border-t border-border pt-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                02 / Share your details
              </span>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              {submitted ? (
                <motion.div
                  key="success"
                  role="status"
                  aria-live="polite"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
                  className="flex min-h-[560px] flex-col justify-center"
                >
                  <CircleCheckBig className="h-10 w-10 text-primary" aria-hidden="true" />
                  <h3 className="mt-8 max-w-xl font-display text-5xl font-extrabold leading-[0.92] tracking-tighter lg:text-6xl">
                    Thank you. Your inquiry is in the right place.
                  </h3>
                  <p className="mt-6 max-w-lg text-sm leading-relaxed opacity-70">
                    The {activeInquiry.label.toLowerCase()} desk has received your details and will
                    follow up through the email address supplied.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-10 inline-flex w-fit items-center gap-2 border-b border-foreground pb-1 text-[10px] font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key={`${activeInquiry.id}-${prefilledService}`}
                  name="corporate-contact"
                  onSubmit={handleContactSubmit}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
                  className="mt-8 grid gap-x-8 gap-y-2 md:grid-cols-2"
                >
                  <input type="hidden" name="inquiryDesk" value={activeInquiry.label} />
                  <label className="block border-b border-border py-4 focus-within:border-primary">
                    <span className="text-[9px] font-bold uppercase tracking-widest opacity-55">
                      Full name
                    </span>
                    <input
                      required
                      name="fullName"
                      autoComplete="name"
                      placeholder="Your name"
                      className="mt-2 w-full bg-transparent py-2 text-sm outline-none placeholder:text-foreground/35"
                    />
                  </label>
                  <label className="block border-b border-border py-4 focus-within:border-primary">
                    <span className="text-[9px] font-bold uppercase tracking-widest opacity-55">
                      Work email
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      className="mt-2 w-full bg-transparent py-2 text-sm outline-none placeholder:text-foreground/35"
                    />
                  </label>
                  <label className="block border-b border-border py-4 focus-within:border-primary">
                    <span className="text-[9px] font-bold uppercase tracking-widest opacity-55">
                      Company
                    </span>
                    <input
                      required
                      name="company"
                      autoComplete="organization"
                      placeholder="Organization name"
                      className="mt-2 w-full bg-transparent py-2 text-sm outline-none placeholder:text-foreground/35"
                    />
                  </label>
                  <label className="block border-b border-border py-4 focus-within:border-primary">
                    <span className="text-[9px] font-bold uppercase tracking-widest opacity-55">
                      Country or region
                    </span>
                    <input
                      required
                      name="region"
                      autoComplete="country-name"
                      placeholder="Location"
                      className="mt-2 w-full bg-transparent py-2 text-sm outline-none placeholder:text-foreground/35"
                    />
                  </label>
                  <label className="block border-b border-border py-4 focus-within:border-primary md:col-span-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest opacity-55">
                      Service or product area
                    </span>
                    <select
                      required
                      name="businessArea"
                      defaultValue={prefilledService}
                      className="mt-2 w-full appearance-none bg-transparent py-2 text-sm outline-none"
                    >
                      <option value="" disabled>
                        Select a business
                      </option>
                      {businessUnits.map((unit) => (
                        <option key={unit.slug} value={unit.slug}>
                          {unit.name}
                        </option>
                      ))}
                      <option value="group">Group / Multiple businesses</option>
                    </select>
                  </label>
                  <label className="block border-b border-border py-4 focus-within:border-primary md:col-span-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest opacity-55">
                      How can we help?
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Tell us about the opportunity, request, or question."
                      className="mt-3 w-full resize-none bg-transparent py-2 text-sm leading-relaxed outline-none placeholder:text-foreground/35"
                    />
                  </label>
                  <label className="mt-6 flex items-start gap-3 text-[10px] leading-relaxed opacity-65 md:col-span-2">
                    <input
                      required
                      type="checkbox"
                      name="consent"
                      className="mt-0.5 h-4 w-4 accent-primary"
                    />
                    <span>
                      I agree that Stratos may use these details to respond to this inquiry.
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="mt-7 inline-flex items-center justify-between bg-accent px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground md:col-span-2"
                  >
                    Submit inquiry
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="bg-foreground px-8 py-24 text-background lg:px-16 lg:py-36 xl:px-20">
        <div className="mb-14 grid grid-cols-12 gap-y-8 lg:mb-20">
          <div className="col-span-12 lg:col-span-7">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Global offices
            </span>
            <h2 className="font-display text-5xl font-extrabold leading-[0.92] tracking-tighter lg:text-7xl">
              Find the group.
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-sm leading-relaxed text-background/65 lg:col-span-4 lg:col-start-9 lg:self-end">
            Corporate teams coordinate regional partnerships and operations from three principal
            offices.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 border-t border-white/15 lg:col-span-4">
            {offices.map((office, index) => {
              const isActive = index === activeOfficeIndex;

              return (
                <button
                  key={office.city}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveOfficeIndex(index)}
                  className={`group flex w-full items-center justify-between border-b border-white/15 py-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${
                    isActive ? "text-white" : "text-background/45 hover:text-background"
                  }`}
                >
                  <span>
                    <span className="block text-[9px] font-bold uppercase tracking-widest">
                      {office.label}
                    </span>
                    <span className="mt-2 block font-display text-3xl font-bold leading-none tracking-tight">
                      {office.city}
                    </span>
                  </span>
                  <span className="text-[10px] font-bold tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeOffice.city}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, x: -16 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
              >
                <div className="flex items-start justify-between gap-6 border-b border-white/15 pb-8">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
                      {activeOffice.coordinates}
                    </span>
                    <h3 className="mt-5 font-display text-6xl font-extrabold leading-none tracking-tighter sm:text-7xl lg:text-8xl">
                      {activeOffice.city}
                    </h3>
                  </div>
                  <MapPin className="h-7 w-7 shrink-0 text-primary" aria-hidden="true" />
                </div>
                <dl className="grid border-l border-white/15 sm:grid-cols-2">
                  {[
                    [MapPin, "Address", activeOffice.address],
                    [Phone, "Telephone", activeOffice.phone],
                    [Clock3, "Office hours", activeOffice.hours],
                    [Network, "Coverage", activeOffice.coverage],
                  ].map(([Icon, label, value]) => {
                    const DetailIcon = Icon as typeof MapPin;

                    return (
                      <div
                        key={String(label)}
                        className="border-b border-r border-white/15 p-6 lg:p-8"
                      >
                        <DetailIcon className="h-4 w-4 text-primary" aria-hidden="true" />
                        <dt className="mt-8 text-[9px] font-bold uppercase tracking-widest text-background/45">
                          {String(label)}
                        </dt>
                        <dd className="mt-3 max-w-sm text-sm leading-relaxed text-background/85">
                          {String(value)}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}

export function CorporateInfoPage({
  eyebrow,
  title,
  intro,
  focus,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  focus: string[];
}) {
  return (
    <CorporatePageShell eyebrow={eyebrow} title={title} intro={intro}>
      <section className="px-8 py-24 lg:px-16 lg:py-32 xl:px-20">
        <SectionIntro
          eyebrow="Foundation"
          title="Built with the space to grow into a deeper corporate site."
          body="This first route pass establishes the page, hierarchy, and navigation. Future passes can add deeper media, case studies, forms, reports, and interactive sections."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {focus.map((item, index) => (
            <article key={item} className="border border-border p-7">
              <span className="mb-5 block font-display text-5xl font-bold text-primary/35">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-3xl font-bold leading-none tracking-tight">
                {item}
              </h2>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-8 py-24 lg:px-16 xl:px-20">
        <div className="grid gap-6 md:grid-cols-4">
          {corporateStats.map((stat) => (
            <div key={stat.label} className="border-t border-border pt-6">
              <div className="font-display text-5xl font-extrabold tracking-tighter">
                {stat.value}
              </div>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-widest opacity-60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </CorporatePageShell>
  );
}
