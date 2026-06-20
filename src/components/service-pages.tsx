import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, MoveRight } from "lucide-react";
import { CorporateFooter, CorporateNav } from "@/components/corporate-layout";
import { businessUnits, featuredProducts } from "@/lib/corporate-data";
import { getServiceProfile } from "@/lib/service-data";

const sectionLinks = [
  ["Overview", "overview"],
  ["Capabilities", "capabilities"],
  ["Delivery", "delivery"],
  ["Media", "media"],
  ["Products", "products"],
  ["Contact", "service-contact"],
];

export function ServiceDetailPage({ slug }: { slug: string }) {
  const profile = getServiceProfile(slug);
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const activeCapability = profile.capabilities[activeCapabilityIndex];
  const relatedProducts = profile.productSlugs
    .map((productSlug) => featuredProducts.find((product) => product.slug === productSlug))
    .filter((product): product is (typeof featuredProducts)[number] => Boolean(product));
  const connectedServices = businessUnits.filter((unit) => unit.slug !== profile.slug).slice(0, 3);

  const handleCapabilityKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % profile.capabilities.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + profile.capabilities.length) % profile.capabilities.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = profile.capabilities.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveCapabilityIndex(nextIndex);
    document.getElementById(`capability-tab-${profile.slug}-${nextIndex}`)?.focus();
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-background font-mono text-foreground">
      <CorporateNav overlay />

      <header className="brand-dark relative flex min-h-[92svh] items-end overflow-hidden bg-foreground text-white">
        {profile.heroVideo ? (
          <video
            key={profile.slug}
            autoPlay={!prefersReducedMotion}
            muted
            loop
            playsInline
            poster={profile.heroPoster ?? profile.heroImage}
            aria-label={`${profile.eyebrow} film`}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={profile.heroVideo} type="video/mp4" />
          </video>
        ) : (
          <motion.img
            src={profile.heroImage}
            alt=""
            loading="eager"
            initial={prefersReducedMotion ? false : { scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-foreground/40" aria-hidden="true" />
        <div className="relative z-10 w-full px-8 pb-12 pt-36 lg:px-16 lg:pb-16 xl:px-20">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              {profile.eyebrow}
            </span>
            <h1 className="max-w-6xl font-display text-6xl font-extrabold leading-[0.86] tracking-tighter text-balance sm:text-7xl lg:text-[clamp(5.5rem,9.2vw,9rem)]">
              {profile.heroTitle}
            </h1>
            <div className="mt-9 flex flex-col gap-8 border-t border-white/35 pt-7 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-2xl text-sm leading-relaxed text-white/90 lg:text-base">
                {profile.heroIntro}
              </p>
              <a
                href="#overview"
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-white/50 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label={`Explore ${profile.slug} services`}
              >
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <nav
        aria-label={`${profile.slug} page sections`}
        className="sticky top-[65px] z-40 overflow-x-auto border-b border-border bg-background/95 backdrop-blur-sm"
      >
        <div className="flex min-w-max px-8 lg:px-16 xl:px-20">
          {sectionLinks.map(([label, id], index) => (
            <a
              key={id}
              href={`#${id}`}
              className="group flex h-14 items-center gap-3 border-r border-border px-5 text-[9px] font-bold uppercase tracking-widest first:border-l transition-colors hover:bg-muted hover:text-primary lg:px-7"
            >
              <span className="opacity-35">{String(index + 1).padStart(2, "0")}</span>
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="overview"
        className="scroll-mt-32 border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20"
      >
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-7">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              01 / {profile.overviewLabel}
            </span>
            <h2 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.92] tracking-tighter text-balance lg:text-7xl">
              {profile.overviewTitle}
            </h2>
          </div>
          <div className="col-span-12 space-y-6 lg:col-span-4 lg:col-start-9 lg:pt-16">
            {profile.overviewBody.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-relaxed text-muted-foreground lg:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <dl className="mt-20 grid border-l border-t border-border sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="min-h-44 border-b border-r border-border p-6 lg:p-8">
              <dt className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="mt-9 font-display text-4xl font-extrabold leading-none tracking-tighter text-primary lg:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        id="capabilities"
        className="brand-dark scroll-mt-32 bg-foreground px-8 py-24 text-background lg:px-16 lg:py-36 xl:px-20"
      >
        <div className="mb-14 grid grid-cols-12 gap-y-8 lg:mb-20">
          <div className="col-span-12 lg:col-span-8">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              02 / Capabilities
            </span>
            <h2 className="max-w-5xl font-display text-5xl font-extrabold leading-[0.92] tracking-tighter text-balance lg:text-7xl">
              {profile.capabilitiesTitle}
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-sm leading-relaxed text-background/65 lg:col-span-4 lg:self-end">
            {profile.capabilitiesIntro}
          </p>
        </div>

        <div
          role="tablist"
          aria-label={`${profile.slug} capabilities`}
          className="grid border-l border-t border-white/15 lg:grid-cols-3"
        >
          {profile.capabilities.map((capability, index) => {
            const isActive = activeCapabilityIndex === index;

            return (
              <button
                key={capability.label}
                id={`capability-tab-${profile.slug}-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`capability-panel-${profile.slug}`}
                tabIndex={isActive ? 0 : -1}
                onMouseEnter={() => setActiveCapabilityIndex(index)}
                onClick={() => setActiveCapabilityIndex(index)}
                onKeyDown={(event) => handleCapabilityKeyDown(event, index)}
                className={`group flex min-h-28 items-end justify-between border-b border-r border-white/15 p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary lg:min-h-36 lg:p-7 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-background/55 hover:bg-white/5 hover:text-background"
                }`}
              >
                <span className="max-w-[18rem] font-display text-xl font-bold leading-none tracking-tight lg:text-2xl">
                  {capability.label}
                </span>
                <span className="text-[9px] font-bold tracking-widest opacity-60">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={`capability-panel-${profile.slug}`}
          role="tabpanel"
          aria-labelledby={`capability-tab-${profile.slug}-${activeCapabilityIndex}`}
          className="grid min-h-[640px] overflow-hidden border-x border-b border-white/15 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="relative min-h-[360px] overflow-hidden bg-black lg:min-h-[640px]">
            <AnimatePresence mode="sync" initial={false}>
              <motion.img
                key={activeCapability.image}
                src={activeCapability.image}
                alt={activeCapability.imageAlt}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.045 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-foreground/10" aria-hidden="true" />
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeCapability.title}
              initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, x: -14 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex min-h-[480px] flex-col justify-between p-7 lg:min-h-[640px] lg:p-12"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
                  {String(activeCapabilityIndex + 1).padStart(2, "0")} / 0
                  {profile.capabilities.length}
                </span>
                <h3 className="mt-7 font-display text-4xl font-extrabold leading-[0.94] tracking-tighter text-balance lg:text-5xl">
                  {activeCapability.title}
                </h3>
                <p className="mt-7 max-w-lg text-sm leading-relaxed text-background/70">
                  {activeCapability.body}
                </p>
              </div>

              <ul className="mt-12 border-t border-white/15 pt-4">
                {activeCapability.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-4 border-b border-white/15 py-4 text-[10px] font-bold uppercase tracking-widest text-background/80"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section
        id="delivery"
        className="scroll-mt-32 border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20"
      >
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-6">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              03 / How we deliver
            </span>
            <h2 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.92] tracking-tighter text-balance lg:text-7xl">
              {profile.deliveryTitle}
            </h2>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {profile.deliveryIntro}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            {profile.delivery.map((phase, index) => (
              <article
                key={phase.title}
                className="group grid grid-cols-[3.5rem_1fr] border-t border-border py-7 last:border-b"
              >
                <span className="text-[10px] font-bold tracking-widest text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold leading-none tracking-tight lg:text-3xl">
                    {phase.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{phase.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="media" className="scroll-mt-32 px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <div className="mb-14 grid grid-cols-12 gap-y-8 lg:mb-20">
          <div className="col-span-12 lg:col-span-7">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              04 / {profile.mediaLabel}
            </span>
            <h2 className="max-w-5xl font-display text-5xl font-extrabold leading-[0.92] tracking-tighter text-balance lg:text-7xl">
              {profile.mediaTitle}
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-4 lg:col-start-9 lg:self-end">
            {profile.mediaBody}
          </p>
        </div>

        <div className="overflow-hidden bg-foreground">
          <video
            controls
            muted
            playsInline
            preload="metadata"
            poster={profile.mediaPoster}
            className="aspect-video w-full object-cover"
          >
            <source src={profile.mediaVideo} type="video/mp4" />
          </video>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {profile.mediaImages.map((image, index) => (
            <figure
              key={image.caption}
              className="group overflow-hidden border border-border bg-surface"
            >
              <div className="overflow-hidden bg-muted">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-[1200ms] group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="flex items-center justify-between p-5 text-[9px] font-bold uppercase tracking-widest">
                <span>{image.caption}</span>
                <span className="text-primary">0{index + 1}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        id="products"
        className="scroll-mt-32 border-y border-border bg-muted px-8 py-24 lg:px-16 lg:py-36 xl:px-20"
      >
        <div className="mb-14 flex flex-col gap-7 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              05 / Related products
            </span>
            <h2 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.92] tracking-tighter lg:text-7xl">
              Products connected to this service.
            </h2>
          </div>
          <a
            href="/products"
            className="inline-flex items-center gap-2 self-start text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-primary lg:self-end"
          >
            View all products
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {relatedProducts.map((product) => (
            <a
              key={product.slug}
              href={product.href}
              className="group grid overflow-hidden border border-border bg-surface transition-colors hover:border-primary/60 lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-[300px] w-full object-cover transition duration-[1200ms] group-hover:scale-[1.04] lg:h-full lg:min-h-[430px]"
                />
              </div>
              <div className="flex min-h-[330px] flex-col justify-between p-6 lg:min-h-[430px] lg:p-8">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
                    {product.category} / {product.service}
                  </span>
                  <h3 className="mt-5 font-display text-4xl font-extrabold leading-none tracking-tighter">
                    {product.name}
                  </h3>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    {product.summary}
                  </p>
                </div>
                <span className="mt-9 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors group-hover:text-primary">
                  View product
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section
        id="service-contact"
        className="brand-dark relative scroll-mt-32 overflow-hidden bg-foreground px-8 py-24 text-background lg:px-16 lg:py-36 xl:px-20"
      >
        <img
          src={profile.heroImage}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-foreground/70" aria-hidden="true" />
        <div className="relative z-10 grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              06 / {profile.inquiryLabel}
            </span>
            <h2 className="max-w-5xl font-display text-5xl font-extrabold leading-[0.92] tracking-tighter text-balance lg:text-7xl">
              {profile.inquiryTitle}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:self-end">
            <p className="max-w-md text-sm leading-relaxed text-background/70">
              {profile.inquiryBody}
            </p>
            <a
              href={`/contact?service=${profile.slug}#contact-desk`}
              className="mt-8 inline-flex min-h-12 items-center justify-between gap-8 bg-accent px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-white hover:text-foreground"
            >
              {profile.inquiryCta}
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 lg:px-16 lg:py-28 xl:px-20">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Connected services
            </span>
            <h2 className="font-display text-4xl font-extrabold leading-none tracking-tighter lg:text-5xl">
              One group behind the work.
            </h2>
          </div>
          <a
            href="/services"
            className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-primary md:inline-flex"
          >
            All services
            <MoveRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="grid border-l border-t border-border md:grid-cols-3">
          {connectedServices.map((unit) => (
            <a
              key={unit.slug}
              href={unit.href}
              className="group flex min-h-64 flex-col justify-between border-b border-r border-border p-6 transition-colors hover:bg-muted lg:p-8"
            >
              <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
                {unit.eyebrow}
              </span>
              <div>
                <h3 className="font-display text-3xl font-bold leading-none tracking-tight">
                  {unit.name}
                </h3>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{unit.summary}</p>
                <ArrowUpRight className="mt-6 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
