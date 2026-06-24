import { ArrowUpRight, ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { businessUnits, corporateNav } from "@/lib/corporate-data";
import { brandIdentity } from "@/lib/brand-data";

export function BrandLockup({
  size = "nav",
  inverse = false,
  className = "",
}: {
  size?: "nav" | "footer";
  inverse?: boolean;
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label={`${brandIdentity.publicName}, ${brandIdentity.relationship}`}
      className={`inline-flex ${
        size === "footer" ? "flex-wrap items-end gap-3 sm:gap-4" : "items-center gap-2 sm:gap-3"
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`whitespace-nowrap font-display font-extrabold leading-none tracking-tighter ${
          size === "footer"
            ? "text-4xl sm:text-6xl lg:text-7xl xl:text-8xl"
            : "text-lg sm:text-xl lg:text-2xl"
        }`}
      >
        {brandIdentity.displayName}
      </span>
      <span
        aria-hidden="true"
        className={`shrink-0 border uppercase tracking-widest ${
          size === "footer" ? "mb-0.5 px-2 py-1 text-[9px] sm:mb-1" : "px-1.5 py-0.5 text-[8px]"
        } ${inverse ? "border-white/25" : "border-foreground/25"}`}
      >
        {brandIdentity.partnerBadge}
      </span>
    </span>
  );
}

export function CorporateNav({ overlay = false }: { overlay?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeService = businessUnits[activeServiceIndex];
  const navTone = overlay
    ? "border-white/10 bg-foreground/35 text-white"
    : "border-border bg-background/92 text-foreground";
  const panelTone = overlay
    ? "border-white/10 bg-foreground text-background shadow-2xl"
    : "border-border bg-surface text-foreground shadow-2xl";
  const megaPanelTone = "brand-light border-border bg-background text-foreground shadow-2xl";
  const secondaryNav = [
    { label: "Innovation", href: "/innovation" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Careers", href: "/careers" },
  ];

  const openServicesMenu = () => {
    if (servicesCloseTimer.current) {
      clearTimeout(servicesCloseTimer.current);
      servicesCloseTimer.current = null;
    }
    setServicesMenuOpen(true);
  };

  const scheduleServicesMenuClose = () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    servicesCloseTimer.current = setTimeout(() => {
      setServicesMenuOpen(false);
      servicesCloseTimer.current = null;
    }, 180);
  };

  useEffect(
    () => () => {
      if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    },
    [],
  );

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b backdrop-blur-md ${overlay ? "brand-dark" : ""} ${navTone}`}
    >
      <div className="flex items-center justify-between px-6 py-4 lg:px-10">
        <a href="/" className="min-w-0 shrink">
          <BrandLockup inverse={overlay} />
        </a>

        <div className="hidden items-center gap-8 text-[10px] font-medium uppercase tracking-widest lg:flex">
          {corporateNav
            .filter((item) => item.href !== "/contact")
            .map((item) =>
              item.href === "/services" ? (
                <div
                  key={item.href}
                  className="group"
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={scheduleServicesMenuClose}
                >
                  <a
                    href={item.href}
                    aria-expanded={servicesMenuOpen}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
                  >
                    {item.label}
                    <ChevronDown
                      className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                      aria-hidden="true"
                    />
                  </a>
                  <div
                    onMouseEnter={openServicesMenu}
                    onMouseLeave={scheduleServicesMenuClose}
                    className={`fixed left-1/2 top-[65px] w-[min(76rem,calc(100vw-4rem))] -translate-x-1/2 border transition duration-300 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
                      servicesMenuOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-2 opacity-0"
                    } ${megaPanelTone}`}
                  >
                    <div className="h-1 bg-accent" aria-hidden="true" />
                    <div className="grid min-h-[390px] grid-cols-[14rem_minmax(0,1fr)_minmax(20rem,26rem)]">
                      <div className="flex flex-col justify-between border-r border-border p-7">
                        <div>
                          <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-primary">
                            Service portfolio
                          </span>
                          <h2 className="mt-5 font-display text-3xl font-extrabold leading-none tracking-normal">
                            Expertise for complex operations.
                          </h2>
                          <p className="mt-5 text-[11px] font-normal normal-case leading-relaxed tracking-normal text-muted-foreground">
                            Explore specialist teams across aviation, autonomous systems, advisory,
                            research, and resource operations.
                          </p>
                        </div>
                        <a
                          href="/services"
                          className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-primary transition-colors hover:text-foreground"
                        >
                          View all services
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </div>

                      <div className="px-5 py-4">
                        {businessUnits.map((unit, index) => {
                          const isActive = index === activeServiceIndex;

                          return (
                            <a
                              key={unit.slug}
                              href={unit.href}
                              onMouseEnter={() => setActiveServiceIndex(index)}
                              onFocus={() => setActiveServiceIndex(index)}
                              className={`group/item grid min-h-[70px] grid-cols-[2.5rem_1fr_auto] items-center border-b border-border px-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${
                                isActive ? "bg-muted" : "hover:bg-muted/60"
                              }`}
                            >
                              <span className="text-[9px] font-bold tracking-widest text-primary">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <span>
                                <span className="block text-[8px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                                  {unit.eyebrow}
                                </span>
                                <span className="mt-1.5 block font-display text-xl font-bold leading-none tracking-normal">
                                  {unit.name}
                                </span>
                              </span>
                              <ArrowUpRight
                                className={`h-4 w-4 transition-all duration-300 ${
                                  isActive
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-1 opacity-20 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                                }`}
                                aria-hidden="true"
                              />
                            </a>
                          );
                        })}
                      </div>

                      <div className="relative overflow-hidden bg-foreground text-white">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.img
                            key={activeService.slug}
                            src={activeService.image}
                            alt={activeService.name}
                            initial={{ opacity: 0, scale: 1.025 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-foreground/30" aria-hidden="true" />
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.div
                            key={`${activeService.slug}-copy`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-x-0 bottom-0 border-t border-white/25 bg-foreground/55 p-6 backdrop-blur-sm"
                          >
                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent">
                              {activeService.eyebrow}
                            </span>
                            <p className="mt-3 text-[11px] font-normal normal-case leading-relaxed tracking-normal text-white/80">
                              {activeService.summary}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {activeService.stats.map((stat) => (
                                <span
                                  key={stat}
                                  className="border border-white/25 px-2 py-1 text-[8px] font-bold uppercase tracking-widest text-white/75"
                                >
                                  {stat}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ),
            )}
        </div>

        <a
          href="/contact"
          className="hidden bg-accent px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground lg:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="corporate-mobile-nav"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className={`inline-flex h-10 w-10 items-center justify-center border transition-colors lg:hidden ${
            overlay
              ? "border-white/20 bg-white/10 hover:bg-white/20"
              : "border-foreground/15 bg-foreground/5 hover:bg-foreground/10"
          }`}
        >
          <span className="sr-only">{mobileMenuOpen ? "Close navigation" : "Open navigation"}</span>
          <div className="relative h-4 w-4">
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Menu className="h-4 w-4" aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="corporate-mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`overflow-hidden lg:hidden border-t ${panelTone}`}
          >
            <div className="px-6 py-7">
              <div className="grid gap-3">
                {corporateNav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between border-b border-current/10 py-3 text-[12px] font-bold uppercase tracking-widest"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="mt-7 grid gap-3 border-t border-current/10 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
                  Service areas
                </span>
                <div className="grid gap-2">
                  {businessUnits.map((unit) => (
                    <a
                      key={unit.slug}
                      href={unit.href}
                      className="text-sm font-medium leading-tight opacity-80 transition-colors hover:text-primary hover:opacity-100"
                    >
                      {unit.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-7 grid gap-3 border-t border-current/10 pt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
                  More from the group
                </span>
                <div className="grid gap-2">
                  {secondaryNav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-sm font-medium leading-tight opacity-80 transition-colors hover:text-primary hover:opacity-100"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function CorporateFooter() {
  const footerGroups = [
    {
      title: "Services",
      links: [
        ["Aviation", "/services/aviation"],
        ["Drones", "/services/drones"],
        ["Consulting", "/services/consulting"],
        ["Research", "/services/research"],
        ["Mining", "/services/mining"],
      ],
    },
    {
      title: "Company",
      links: [
        ["About", "/about"],
        ["Careers", "/careers"],
        ["Sustainability", "/sustainability"],
        ["Innovation", "/innovation"],
      ],
    },
    {
      title: "Explore",
      links: [
        ["Products", "/products"],
        ["News", "/news"],
        ["Contact", "/contact"],
      ],
    },
  ];

  return (
    <footer className="border-t-4 border-accent bg-background text-foreground">
      <div className="grid border-b border-border px-8 py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:px-16 lg:py-20 xl:px-20">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
            Work with {brandIdentity.publicName}
          </span>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[0.95] tracking-normal sm:text-5xl lg:text-6xl">
            A direct route to the right team.
          </h2>
        </div>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:mt-0">
          <a
            href="/contact?service=group#contact-desk"
            className="inline-flex min-h-12 items-center justify-between gap-8 bg-accent px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Request a quote
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="/contact"
            className="inline-flex min-h-12 items-center justify-between gap-8 border border-border px-6 py-4 text-[10px] font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
          >
            Contact the group
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="px-8 py-16 lg:px-16 lg:py-20 xl:px-20">
        <div className="border-b border-border pb-14">
          <a href="/" className="inline-flex max-w-full">
            <BrandLockup size="footer" />
          </a>
          <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {brandIdentity.legalName}, {brandIdentity.relationship.toLowerCase()}, delivers products
            and services across aircraft programs, autonomous systems, consulting, research, and
            responsible resource operations.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-y-14 py-14 lg:gap-x-10 lg:py-16">
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h3 className="mb-6 text-[9px] font-bold uppercase tracking-[0.35em] text-primary">
              Start a conversation
            </h3>
            <div className="space-y-5 text-xs">
              <a
                href={`mailto:${brandIdentity.emails.partnerships}`}
                className="group flex items-center gap-3 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                {brandIdentity.emails.partnerships}
              </a>
              <a
                href={`tel:${brandIdentity.phone.href}`}
                className="group flex items-center gap-3 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                {brandIdentity.phone.display}
              </a>
              <p className="flex items-start gap-3 leading-relaxed text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />1
                {brandIdentity.address}
              </p>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="col-span-6 sm:col-span-3 lg:col-span-2">
              <h3 className="mb-6 text-[9px] font-bold uppercase tracking-[0.35em] text-primary">
                {group.title}
              </h3>
              <ul className="space-y-4 text-xs font-medium">
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="group inline-flex items-center gap-2 transition-colors hover:text-primary"
                    >
                      {label}
                      <ArrowUpRight
                        className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-12 border-t border-border pt-8 sm:col-span-6 lg:col-span-3 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <h3 className="mb-6 text-[9px] font-bold uppercase tracking-[0.35em] text-primary">
              Global offices
            </h3>
            <ul className="space-y-5 text-xs">
              <li className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-bold">Accra</span>
                <span className="text-muted-foreground">Group HQ</span>
              </li>
              <li className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-bold">Washington</span>
                <span className="text-muted-foreground">Americas</span>
              </li>
              <li className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-bold">London</span>
                <span className="text-muted-foreground">Europe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 border-t border-border pt-7 text-[9px] uppercase tracking-widest text-muted-foreground md:flex-row">
          <span>© 2026 {brandIdentity.legalName}. All rights reserved.</span>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a href="/about" className="transition-colors hover:text-primary">
              Governance
            </a>
            <a href="/sustainability" className="transition-colors hover:text-primary">
              Responsibility
            </a>
            <a href="/careers" className="transition-colors hover:text-primary">
              Careers
            </a>
            <a href="/contact" className="transition-colors hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function CorporatePageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground font-mono">
      <CorporateNav />
      <section className="border-b border-border px-8 pb-20 pt-36 lg:px-16 lg:pb-28 lg:pt-44 xl:px-20">
        <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
          {eyebrow}
        </span>
        <h1 className="max-w-5xl font-display text-5xl font-extrabold leading-[0.92] tracking-tighter sm:text-6xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed opacity-70 lg:text-lg">{intro}</p>
      </section>
      {children}
      <CorporateFooter />
    </main>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  href,
  cta,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <div className="mb-14 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
          {eyebrow}
        </span>
        <h2 className="max-w-4xl font-display text-4xl font-extrabold leading-[0.96] tracking-tighter lg:text-6xl">
          {title}
        </h2>
        {body ? <p className="mt-6 max-w-2xl text-sm leading-relaxed opacity-70">{body}</p> : null}
      </div>
      {href && cta ? (
        <a
          href={href}
          className="inline-flex items-center gap-2 self-start text-[11px] font-bold uppercase tracking-widest transition-colors hover:text-primary lg:self-end"
        >
          {cta}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

export function LinkArrow({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-primary ${className}`}
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  );
}
