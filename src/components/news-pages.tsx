import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Building2,
  Check,
  Clock3,
  Copy,
  Mail,
  Newspaper,
  Search,
  X,
} from "lucide-react";
import { CorporateFooter, CorporateNav, LinkArrow } from "@/components/corporate-layout";
import { corporateNewsPosts } from "@/lib/corporate-data";

const categories = ["All", ...new Set(corporateNewsPosts.map((post) => post.category))];

function StoryMeta({
  post,
  light = false,
}: {
  post: (typeof corporateNewsPosts)[number];
  light?: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] font-bold uppercase tracking-widest ${
        light ? "text-white/70" : "text-foreground/45"
      }`}
    >
      <span className="text-primary">{post.category}</span>
      <span>{post.type}</span>
      <span>{post.date}</span>
      <span>{post.readTime}</span>
    </div>
  );
}

export function NewsroomPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(5);
  const prefersReducedMotion = useReducedMotion();
  const featuredPost = corporateNewsPosts[0];
  const secondaryStories = corporateNewsPosts.slice(1, 3);

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return corporateNewsPosts.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const searchable =
        `${post.title} ${post.excerpt} ${post.category} ${post.type}`.toLowerCase();
      return matchesCategory && (!query || searchable.includes(query));
    });
  }, [activeCategory, searchQuery]);

  const updateCategory = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(5);
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-background font-mono text-foreground">
      <CorporateNav overlay />

      <header className="relative flex min-h-[90svh] items-end overflow-hidden bg-foreground text-white">
        <motion.img
          src={featuredPost.image}
          alt={featuredPost.title}
          loading="eager"
          initial={prefersReducedMotion ? false : { scale: 1.045 }}
          animate={{ scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/48" aria-hidden="true" />
        <div className="relative z-10 grid w-full grid-cols-12 gap-y-10 px-8 pb-14 pt-40 lg:px-16 lg:pb-20 xl:px-20">
          <div className="col-span-12 lg:col-span-9">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Newsroom / Featured story
            </span>
            <h1 className="mt-7 max-w-6xl font-display text-6xl font-extrabold leading-[0.86] tracking-tighter text-balance sm:text-7xl lg:text-[clamp(5rem,8.5vw,8.5rem)]">
              {featuredPost.title}
            </h1>
          </div>
          <div className="col-span-12 border-t border-white/35 pt-7 lg:col-span-12">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <StoryMeta post={featuredPost} light />
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/85">
                  {featuredPost.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={featuredPost.href}
                  className="inline-flex items-center gap-3 border border-white/50 px-6 py-4 text-[9px] font-bold uppercase tracking-widest transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Read featured story
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#latest-stories"
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-white/50 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  aria-label="Explore latest stories"
                >
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <div className="mb-12 grid grid-cols-12 gap-y-8">
          <div className="col-span-12 lg:col-span-7">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              In focus
            </span>
            <h2 className="mt-6 font-display text-5xl font-extrabold leading-[0.92] tracking-tighter lg:text-7xl">
              Across the group.
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-sm leading-relaxed opacity-65 lg:col-span-4 lg:col-start-9 lg:self-end">
            Program milestones, operating insights, research, and corporate developments from every
            Stratos business.
          </p>
        </div>
        <div className="grid border-t border-border lg:grid-cols-2">
          {secondaryStories.map((post, index) => (
            <a
              key={post.slug}
              href={post.href}
              className="group grid border-b border-border py-8 lg:min-h-[560px] lg:grid-rows-[1fr_auto] lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <div className="overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="aspect-[16/10] h-full w-full object-cover transition duration-[1200ms] group-hover:scale-[1.035]"
                />
              </div>
              <div className="pt-7">
                <div className="flex items-start justify-between gap-5">
                  <StoryMeta post={post} />
                  <span className="text-[10px] font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[0.94] tracking-tighter lg:text-5xl">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="latest-stories" className="scroll-mt-20 px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <div className="grid grid-cols-12 gap-y-12">
          <aside className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                News archive
              </span>
              <h2 className="mt-6 font-display text-5xl font-extrabold leading-[0.92] tracking-tighter">
                Find a story.
              </h2>
              <label className="relative mt-10 block border-b border-border focus-within:border-primary">
                <span className="sr-only">Search news</span>
                <Search
                  className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-primary"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                    setVisibleCount(5);
                  }}
                  placeholder="Search newsroom"
                  className="w-full bg-transparent py-4 pl-8 text-sm outline-none placeholder:text-foreground/35"
                />
              </label>
              <div
                className="mt-8 flex gap-2 overflow-x-auto pb-2 lg:grid lg:overflow-visible"
                aria-label="News categories"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={activeCategory === category}
                    onClick={() => updateCategory(category)}
                    className={`flex min-w-max items-center justify-between border px-4 py-3 text-left text-[9px] font-bold uppercase tracking-widest transition-colors lg:w-full ${
                      activeCategory === category
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {category}
                    {activeCategory === category && (
                      <Check className="ml-6 h-3.5 w-3.5" aria-hidden="true" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <div className="flex items-center justify-between border-b border-border pb-5 text-[9px] font-bold uppercase tracking-widest opacity-50">
              <span aria-live="polite">
                {filteredPosts.length} {filteredPosts.length === 1 ? "story" : "stories"}
              </span>
              <span>{activeCategory}</span>
            </div>

            {filteredPosts.length ? (
              <div>
                {filteredPosts.slice(0, visibleCount).map((post, index) => (
                  <article
                    key={post.slug}
                    className="group grid gap-6 border-b border-border py-8 md:grid-cols-[180px_1fr_auto] md:items-center lg:grid-cols-[220px_1fr_auto]"
                  >
                    <a href={post.href} className="overflow-hidden bg-muted">
                      <img
                        src={post.image}
                        alt=""
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover transition duration-[1000ms] group-hover:scale-[1.04]"
                      />
                    </a>
                    <div>
                      <StoryMeta post={post} />
                      <a href={post.href}>
                        <h3 className="mt-4 font-display text-3xl font-bold leading-none tracking-tight transition-colors group-hover:text-primary lg:text-4xl">
                          {post.title}
                        </h3>
                      </a>
                      <p className="mt-4 max-w-2xl text-xs leading-relaxed opacity-60">
                        {post.excerpt}
                      </p>
                    </div>
                    <a
                      href={post.href}
                      className="inline-flex h-11 w-11 items-center justify-center border border-border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      aria-label={`Read ${post.title}`}
                    >
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <span className="sr-only">Story {index + 1}</span>
                  </article>
                ))}

                {visibleCount < filteredPosts.length && (
                  <button
                    type="button"
                    onClick={() => setVisibleCount((count) => count + 3)}
                    className="mt-10 inline-flex w-full items-center justify-between border border-border px-6 py-5 text-[9px] font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
                  >
                    Load more stories
                    <span>
                      {visibleCount} / {filteredPosts.length}
                    </span>
                  </button>
                )}
              </div>
            ) : (
              <div className="border-b border-border py-24 text-center">
                <Newspaper className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mt-6 font-display text-4xl font-bold tracking-tight">
                  No stories found.
                </h3>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed opacity-60">
                  Try another phrase or return to the full newsroom archive.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    updateCategory("All");
                  }}
                  className="mt-7 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-primary"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-foreground px-8 py-24 text-background lg:px-16 lg:py-32 xl:px-20">
        <div className="grid grid-cols-12 gap-y-14">
          <div className="col-span-12 lg:col-span-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Newsroom resources
            </span>
            <h2 className="mt-6 font-display text-5xl font-extrabold leading-[0.92] tracking-tighter lg:text-7xl">
              Context beyond the headline.
            </h2>
          </div>
          <div className="col-span-12 grid border-t border-white/15 md:grid-cols-3 lg:col-span-6 lg:col-start-7">
            {[
              [
                Newspaper,
                "Media inquiries",
                "Briefings, statements, and interview requests.",
                "/contact",
              ],
              [
                Building2,
                "Company profile",
                "Leadership, governance, and group information.",
                "/about",
              ],
              [
                Mail,
                "Responsibility",
                "Sustainability priorities and reporting context.",
                "/sustainability",
              ],
            ].map(([Icon, title, body, href]) => {
              const ResourceIcon = Icon as typeof Newspaper;
              return (
                <a
                  key={title as string}
                  href={href as string}
                  className="group border-b border-white/15 py-8 transition-colors hover:text-primary md:min-h-80 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <ResourceIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-20 font-display text-2xl font-bold tracking-tight">
                    {title as string}
                  </h3>
                  <p className="mt-4 text-xs leading-relaxed text-background/55">
                    {body as string}
                  </p>
                  <ArrowUpRight
                    className="mt-8 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <CorporateFooter />
    </main>
  );
}

export function NewsArticlePage({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const post = corporateNewsPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-background font-mono text-foreground">
        <CorporateNav />
        <section className="px-8 pb-28 pt-44 lg:px-16 lg:pb-40 xl:px-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
            Newsroom
          </span>
          <h1 className="mt-7 max-w-4xl font-display text-6xl font-extrabold leading-[0.9] tracking-tighter lg:text-8xl">
            This story is no longer available.
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-relaxed opacity-65">
            The article may have moved. Continue with the latest reporting from across the group.
          </p>
          <div className="mt-10">
            <LinkArrow href="/news">Return to the newsroom</LinkArrow>
          </div>
        </section>
        <CorporateFooter />
      </main>
    );
  }

  const relatedPosts = corporateNewsPosts
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);

  const copyArticleLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-background font-mono text-foreground">
      <CorporateNav overlay />
      <header className="relative flex min-h-[86svh] items-end overflow-hidden bg-foreground text-white">
        <motion.img
          src={post.image}
          alt={post.title}
          loading="eager"
          initial={prefersReducedMotion ? false : { scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/52" aria-hidden="true" />
        <div className="relative z-10 w-full px-8 pb-14 pt-40 lg:px-16 lg:pb-20 xl:px-20">
          <a
            href="/news"
            className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Newsroom
          </a>
          <div className="mt-8">
            <StoryMeta post={post} light />
          </div>
          <h1 className="mt-7 max-w-6xl font-display text-6xl font-extrabold leading-[0.86] tracking-tighter text-balance sm:text-7xl lg:text-[clamp(5rem,8vw,8.5rem)]">
            {post.title}
          </h1>
        </div>
      </header>

      <article className="px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <div className="grid grid-cols-12 gap-y-14">
          <aside className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <span className="text-[9px] font-bold uppercase tracking-widest opacity-45">
                Published by
              </span>
              <strong className="mt-3 block text-xs">{post.author}</strong>
              <dl className="mt-8 border-t border-border text-[9px] uppercase tracking-widest">
                <div className="border-b border-border py-4">
                  <dt className="font-bold opacity-40">Published</dt>
                  <dd className="mt-2 font-bold">{post.date}</dd>
                </div>
                <div className="border-b border-border py-4">
                  <dt className="font-bold opacity-40">Reading time</dt>
                  <dd className="mt-2 flex items-center gap-2 font-bold">
                    <Clock3 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {post.readTime}
                  </dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={copyArticleLink}
                className="mt-6 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest transition-colors hover:text-primary"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-primary" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                {copied ? "Link copied" : "Copy article link"}
              </button>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-7 lg:col-start-5">
            <p className="font-display text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
              {post.body}
            </p>
            <p className="mt-10 text-base leading-relaxed opacity-72">{post.excerpt}</p>
            <div className="mt-16 grid gap-16">
              {post.sections.map((section, index) => (
                <section key={section.heading} className="border-t border-border pt-9">
                  <div className="flex items-start justify-between gap-8">
                    <h2 className="max-w-2xl font-display text-4xl font-bold leading-[0.96] tracking-tighter lg:text-5xl">
                      {section.heading}
                    </h2>
                    <span className="text-[10px] font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-8 grid gap-6 text-base leading-relaxed opacity-72">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="border-y border-border px-8 py-24 lg:px-16 lg:py-32 xl:px-20">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Continue reading
            </span>
            <h2 className="mt-5 font-display text-5xl font-extrabold leading-none tracking-tighter">
              More from the newsroom.
            </h2>
          </div>
          <LinkArrow href="/news">All stories</LinkArrow>
        </div>
        <div className="grid border-t border-border lg:grid-cols-3">
          {relatedPosts.map((related) => (
            <a
              key={related.slug}
              href={related.href}
              className="group border-b border-border py-8 transition-colors hover:text-primary lg:min-h-72 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <StoryMeta post={related} />
              <h3 className="mt-14 font-display text-3xl font-bold leading-none tracking-tight">
                {related.title}
              </h3>
              <ArrowUpRight
                className="mt-8 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </section>

      <section className="px-8 py-24 lg:px-16 lg:py-32 xl:px-20">
        <div className="grid grid-cols-12 items-end gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Media contact
            </span>
            <h2 className="mt-6 font-display text-5xl font-extrabold leading-[0.9] tracking-tighter lg:text-7xl">
              Need more context on this story?
            </h2>
          </div>
          <a
            href="/contact"
            className="col-span-12 inline-flex items-center justify-between bg-accent px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground lg:col-span-3 lg:col-start-10"
          >
            Contact the newsroom
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
      <CorporateFooter />
    </main>
  );
}
