import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MoveRight,
} from "lucide-react";
import { CorporateFooter, CorporateNav } from "@/components/corporate-layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { businessUnits, featuredProducts } from "@/lib/corporate-data";
import { getServiceProfile, type ServiceProfile } from "@/lib/service-data";

const sectionLinks = [
  ["Overview", "overview"],
  ["Capabilities", "capabilities"],
  ["Delivery", "delivery"],
  ["Media", "media"],
  ["Products", "products"],
  ["Contact", "service-contact"],
];

const GALLERY_INTERVAL_MS = 5000;

type ServiceMediaGalleryProps = {
  images: ServiceProfile["mediaImages"];
  prefersReducedMotion: boolean;
  slug: string;
};

function ServiceMediaGallery({ images, prefersReducedMotion, slug }: ServiceMediaGalleryProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [modalApi, setModalApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLSpanElement | null>(null);
  const progressValueRef = useRef(0);
  const imageTriggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const openedImageIndexRef = useRef(0);

  const resetProgress = useCallback(() => {
    progressValueRef.current = 0;
    if (progressRef.current) progressRef.current.style.transform = "scaleX(0)";
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    const handleSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
      resetProgress();
    };
    const handlePointerDown = () => {
      setIsPointerDown(true);
    };
    const handlePointerUp = () => {
      setIsPointerDown(false);
      resetProgress();
    };

    handleSelect();
    carouselApi.on("select", handleSelect);
    carouselApi.on("reInit", handleSelect);
    carouselApi.on("pointerDown", handlePointerDown);
    carouselApi.on("pointerUp", handlePointerUp);

    return () => {
      carouselApi.off("select", handleSelect);
      carouselApi.off("reInit", handleSelect);
      carouselApi.off("pointerDown", handlePointerDown);
      carouselApi.off("pointerUp", handlePointerUp);
    };
  }, [carouselApi, resetProgress]);

  useEffect(() => {
    if (!modalApi) return;

    const handleSelect = () => setModalIndex(modalApi.selectedScrollSnap());
    handleSelect();
    modalApi.on("select", handleSelect);
    modalApi.on("reInit", handleSelect);

    return () => {
      modalApi.off("select", handleSelect);
      modalApi.off("reInit", handleSelect);
    };
  }, [modalApi]);

  useEffect(() => {
    if (!galleryRef.current) return;

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.25,
    });
    observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => setIsDocumentVisible(!document.hidden);
    handleVisibilityChange();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const shouldAutoplay =
    Boolean(carouselApi) &&
    !prefersReducedMotion &&
    isVisible &&
    isDocumentVisible &&
    !isHovered &&
    !isFocusWithin &&
    !isPointerDown &&
    !modalOpen;

  useEffect(() => {
    if (!shouldAutoplay || !carouselApi) return;

    let frame = 0;
    let previousTimestamp = performance.now();

    const tick = (timestamp: number) => {
      const elapsed = timestamp - previousTimestamp;
      previousTimestamp = timestamp;
      progressValueRef.current += elapsed / GALLERY_INTERVAL_MS;

      if (progressValueRef.current >= 1) {
        progressValueRef.current = 0;
        carouselApi.scrollNext();
      }

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.min(progressValueRef.current, 1)})`;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [carouselApi, shouldAutoplay]);

  useEffect(() => {
    if (!modalOpen || !modalApi) return;
    modalApi.scrollTo(modalIndex, true);
  }, [modalApi, modalOpen, modalIndex]);

  const moveCarousel = (direction: "previous" | "next") => {
    resetProgress();
    if (direction === "previous") carouselApi?.scrollPrev();
    else carouselApi?.scrollNext();
  };

  const openImage = (index: number) => {
    openedImageIndexRef.current = index;
    setModalIndex(index);
    setModalOpen(true);
  };

  const handleModalChange = (open: boolean) => {
    setModalOpen(open);
    if (!open) {
      openedImageIndexRef.current = modalIndex;
      carouselApi?.scrollTo(modalIndex);
      resetProgress();
    }
  };

  return (
    <div
      ref={galleryRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocusWithin(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsFocusWithin(false);
        }
      }}
      className="mt-5"
    >
      <div className="mb-5 flex items-center justify-between border-y border-border py-4">
        <div aria-live="polite" className="flex items-center gap-4">
          <span className="font-display text-xl font-bold leading-none">
            {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
          <span className="hidden text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground sm:block">
            Image gallery
          </span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => moveCarousel("previous")}
            className="inline-flex h-11 w-11 items-center justify-center border border-border bg-surface transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Previous gallery image"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => moveCarousel("next")}
            className="inline-flex h-11 w-11 items-center justify-center border border-border bg-surface transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Next gallery image"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <Carousel
        setApi={setCarouselApi}
        opts={{ align: "start", loop: true, duration: prefersReducedMotion ? 0 : 28 }}
        aria-label={`${slug} media gallery`}
      >
        <CarouselContent className="ml-0 sm:-ml-4">
          {images.map((image, index) => (
            <CarouselItem
              key={`${image.caption}-${image.src}`}
              className="basis-full pl-0 sm:basis-1/2 sm:pl-4 lg:basis-1/3"
            >
              <figure className="group h-full overflow-hidden border border-border bg-surface">
                <button
                  ref={(button) => {
                    imageTriggerRefs.current[index] = button;
                  }}
                  type="button"
                  onClick={() => openImage(index)}
                  className="relative block w-full overflow-hidden bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                  aria-label={`Open ${image.caption} image ${index + 1} of ${images.length}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-[1200ms] group-hover:scale-[1.04]"
                  />
                  <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center bg-foreground/80 text-white backdrop-blur-sm transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
                <figcaption className="flex min-h-16 items-center justify-between gap-4 px-5 py-4 text-[9px] font-bold uppercase tracking-widest">
                  <span>{image.caption}</span>
                  <span className="shrink-0 text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-5 h-1 overflow-hidden bg-muted" aria-hidden="true">
        <span
          ref={progressRef}
          className="block h-full origin-left scale-x-0 bg-accent will-change-transform"
        />
      </div>

      <Dialog open={modalOpen} onOpenChange={handleModalChange}>
        <DialogContent
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            imageTriggerRefs.current[openedImageIndexRef.current]?.focus();
          }}
          className="brand-dark block h-svh w-screen max-w-none translate-x-[-50%] translate-y-[-50%] overflow-hidden border-0 bg-foreground p-0 text-white shadow-none sm:rounded-none [&>button]:right-5 [&>button]:top-5 [&>button]:z-20 [&>button]:flex [&>button]:h-11 [&>button]:w-11 [&>button]:items-center [&>button]:justify-center [&>button]:bg-white/10 [&>button]:text-white [&>button]:opacity-100"
        >
          <DialogTitle className="sr-only">{slug} image gallery</DialogTitle>
          <DialogDescription className="sr-only">
            Swipe, use the arrow keys, or choose a thumbnail to explore the gallery.
          </DialogDescription>

          <div className="flex h-20 items-center justify-between border-b border-white/15 px-5 pr-20 sm:px-8 sm:pr-24">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">
              {slug} / Gallery
            </span>
            <span aria-live="polite" className="font-display text-xl font-bold">
              {String(modalIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </div>

          <div className="relative flex h-[calc(100svh-12.5rem)] items-center">
            <Carousel
              setApi={setModalApi}
              opts={{ align: "start", loop: true, duration: prefersReducedMotion ? 0 : 24 }}
              className="w-full"
              aria-label={`${slug} expanded image gallery`}
            >
              <CarouselContent className="ml-0">
                {images.map((image, index) => (
                  <CarouselItem key={`modal-${image.src}`} className="basis-full pl-0">
                    <figure className="flex h-[calc(100svh-12.5rem)] flex-col items-center justify-center px-5 pb-5 sm:px-24">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="min-h-0 max-h-[calc(100%-3.5rem)] w-full flex-1 object-contain"
                      />
                      <figcaption className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-white/75">
                        {image.caption} / {String(index + 1).padStart(2, "0")}
                      </figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <button
              type="button"
              onClick={() => modalApi?.scrollPrev()}
              className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:left-8"
              aria-label="Previous expanded image"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => modalApi?.scrollNext()}
              className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:right-8"
              aria-label="Next expanded image"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="h-[7.5rem] border-t border-white/15 px-5 py-4 sm:px-8">
            <div className="mx-auto flex h-full max-w-4xl gap-3 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={`thumbnail-${image.src}`}
                  type="button"
                  onClick={() => {
                    setModalIndex(index);
                    modalApi?.scrollTo(index);
                  }}
                  aria-label={`View ${image.caption}`}
                  aria-current={modalIndex === index ? "true" : undefined}
                  className={`h-full min-w-24 overflow-hidden border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:min-w-28 ${
                    modalIndex === index ? "border-accent" : "border-white/20 hover:border-white/60"
                  }`}
                >
                  <img src={image.src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function ServiceDetailPage({ slug }: { slug: string }) {
  const profile = getServiceProfile(slug);
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState(0);
  const [mobileCapabilityIndex, setMobileCapabilityIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const mobileCapabilityRailRef = useRef<HTMLDivElement | null>(null);
  const mobileCapabilityCardRefs = useRef<Array<HTMLElement | null>>([]);
  const mobileCapabilityFrame = useRef<number | null>(null);
  const activeCapability = profile.capabilities[activeCapabilityIndex];
  const relatedProducts = profile.productSlugs
    .map((productSlug) => featuredProducts.find((product) => product.slug === productSlug))
    .filter((product): product is (typeof featuredProducts)[number] => Boolean(product));
  const connectedServices = businessUnits.filter((unit) => unit.slug !== profile.slug).slice(0, 3);

  const syncMobileCapabilityIndex = useCallback(() => {
    const rail = mobileCapabilityRailRef.current;
    if (!rail) return;

    const railCenter = rail.scrollLeft + rail.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    mobileCapabilityCardRefs.current.forEach((card, index) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - railCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setMobileCapabilityIndex(nearestIndex);
    mobileCapabilityFrame.current = null;
  }, []);

  const handleMobileCapabilityScroll = () => {
    if (mobileCapabilityFrame.current) cancelAnimationFrame(mobileCapabilityFrame.current);
    mobileCapabilityFrame.current = requestAnimationFrame(syncMobileCapabilityIndex);
  };

  const scrollToMobileCapability = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, profile.capabilities.length - 1));
    const rail = mobileCapabilityRailRef.current;
    const card = mobileCapabilityCardRefs.current[nextIndex];

    setMobileCapabilityIndex(nextIndex);
    if (!rail || !card) return;

    rail.scrollTo({
      left: card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    mobileCapabilityFrame.current = requestAnimationFrame(syncMobileCapabilityIndex);
    const restorationTimer = window.setTimeout(syncMobileCapabilityIndex, 750);

    return () => {
      if (mobileCapabilityFrame.current) cancelAnimationFrame(mobileCapabilityFrame.current);
      window.clearTimeout(restorationTimer);
    };
  }, [profile.slug, syncMobileCapabilityIndex]);

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
        className="brand-dark scroll-mt-32 bg-foreground px-8 py-20 text-background lg:px-16 lg:py-36 xl:px-20"
      >
        <div className="mb-14 grid grid-cols-12 gap-y-8 lg:mb-20">
          <div className="col-span-12 lg:col-span-8">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              02 / Capabilities
            </span>
            <h2 className="max-w-5xl font-display text-4xl font-extrabold leading-[0.92] tracking-tighter text-balance sm:text-5xl lg:text-7xl">
              {profile.capabilitiesTitle}
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-sm leading-relaxed text-background/65 lg:col-span-4 lg:self-end">
            {profile.capabilitiesIntro}
          </p>
        </div>

        <div className="lg:hidden">
          <div className="mb-6 flex items-center justify-between border-y border-white/15 py-4">
            <div aria-live="polite">
              <span className="block text-[9px] font-bold uppercase tracking-[0.3em] text-primary">
                Current capability
              </span>
              <span className="mt-1 block font-display text-lg font-bold leading-none">
                {String(mobileCapabilityIndex + 1).padStart(2, "0")} /{" "}
                {String(profile.capabilities.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollToMobileCapability(mobileCapabilityIndex - 1)}
                disabled={mobileCapabilityIndex === 0}
                className="inline-flex h-11 w-11 items-center justify-center border border-white/25 transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
              >
                <span className="sr-only">Previous capability</span>
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollToMobileCapability(mobileCapabilityIndex + 1)}
                disabled={mobileCapabilityIndex === profile.capabilities.length - 1}
                className="inline-flex h-11 w-11 items-center justify-center border border-white/25 transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
              >
                <span className="sr-only">Next capability</span>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={mobileCapabilityRailRef}
            onScroll={handleMobileCapabilityScroll}
            aria-label={`${profile.slug} capability cards`}
            className="-mx-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-6"
          >
            {profile.capabilities.map((capability, index) => {
              const isActive = mobileCapabilityIndex === index;

              return (
                <article
                  key={capability.label}
                  ref={(card) => {
                    mobileCapabilityCardRefs.current[index] = card;
                  }}
                  aria-current={isActive ? "true" : undefined}
                  className={`w-[calc(100vw-2rem)] min-w-[288px] max-w-[380px] shrink-0 snap-center overflow-hidden border bg-foreground transition-colors ${
                    isActive ? "border-primary" : "border-white/15"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={capability.image}
                      alt={capability.imageAlt}
                      loading="lazy"
                      onLoad={handleMobileCapabilityScroll}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/10" aria-hidden="true" />
                    <span className="absolute left-4 top-4 bg-accent px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-accent-foreground">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(profile.capabilities.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex min-h-[390px] flex-col p-5 sm:p-6">
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-primary">
                      {capability.label}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-extrabold leading-[0.96] tracking-normal text-white sm:text-3xl">
                      {capability.title}
                    </h3>
                    <p className="mt-4 text-xs leading-relaxed text-background/70 sm:mt-5 sm:text-sm">
                      {capability.body}
                    </p>

                    <ul className="mt-5 border-t border-white/15 pt-1 sm:mt-7 sm:pt-2">
                      {capability.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 border-b border-white/15 py-2.5 text-[8px] font-bold uppercase leading-relaxed tracking-[0.12em] text-background/80 sm:py-3 sm:text-[9px]"
                        >
                          <Check
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex gap-2 pt-5 sm:pt-6" aria-hidden="true">
                      {profile.capabilities.map((item, itemIndex) => (
                        <span
                          key={item.label}
                          className={`h-1 flex-1 transition-colors ${
                            itemIndex === index ? "bg-primary" : "bg-white/15"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div
          role="tablist"
          aria-label={`${profile.slug} capabilities`}
          className="hidden border-l border-t border-white/15 lg:grid lg:grid-cols-3"
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
          className="hidden min-h-[640px] overflow-hidden border-x border-b border-white/15 lg:grid lg:grid-cols-[1.15fr_0.85fr]"
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
            className="aspect-[4/3] w-full object-cover md:aspect-video"
          >
            <source src={profile.mediaVideo} type="video/mp4" />
          </video>
        </div>

        <ServiceMediaGallery
          images={profile.mediaImages}
          prefersReducedMotion={Boolean(prefersReducedMotion)}
          slug={profile.slug}
        />
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
