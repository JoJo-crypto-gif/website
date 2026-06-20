import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  CircleCheckBig,
  Clock3,
  FileText,
  FileUp,
  Loader2,
  MapPin,
  ShieldCheck,
  Upload,
  X,
} from "lucide-react";
import { CorporateFooter, CorporateNav, LinkArrow } from "@/components/corporate-layout";
import { businessUnits } from "@/lib/corporate-data";
import { careerOpenings, getCareerOpening, type CareerOpening } from "@/lib/career-data";

function getJobImage(job: CareerOpening) {
  const businessIndex = {
    Aviation: 0,
    Drones: 1,
    Consulting: 2,
    Research: 3,
    Mining: 4,
    Group: 0,
  }[job.business];

  return businessUnits[businessIndex ?? 0].image;
}

function JobMeta({ job, light = false }: { job: CareerOpening; light?: boolean }) {
  const items = [
    [MapPin, job.location],
    [BriefcaseBusiness, job.type],
    [Building2, job.business],
    [Clock3, job.workingModel],
  ] as const;

  return (
    <div className={`flex flex-wrap gap-x-6 gap-y-3 ${light ? "text-white/75" : "opacity-60"}`}>
      {items.map(([Icon, label]) => (
        <span
          key={label}
          className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest"
        >
          <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          {label}
        </span>
      ))}
    </div>
  );
}

function MissingJob() {
  return (
    <main className="min-h-screen bg-background font-mono text-foreground">
      <CorporateNav />
      <section className="px-8 pb-28 pt-44 lg:px-16 lg:pb-40 xl:px-20">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
          Careers
        </span>
        <h1 className="mt-7 max-w-4xl font-display text-6xl font-extrabold leading-[0.9] tracking-tighter lg:text-8xl">
          This opportunity is no longer listed.
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-relaxed opacity-65">
          The role may have closed or moved. Explore current opportunities across the group.
        </p>
        <div className="mt-10">
          <LinkArrow href="/careers#open-opportunities">View open roles</LinkArrow>
        </div>
      </section>
      <CorporateFooter />
    </main>
  );
}

export function CareerDetailPage({ slug }: { slug: string }) {
  const job = getCareerOpening(slug);
  const prefersReducedMotion = useReducedMotion();

  if (!job) return <MissingJob />;

  const relatedJobs = careerOpenings
    .filter((opening) => opening.slug !== job.slug && opening.discipline === job.discipline)
    .slice(0, 3);
  const fallbackRelated = careerOpenings.filter((opening) => opening.slug !== job.slug).slice(0, 3);
  const displayedRelated = relatedJobs.length >= 2 ? relatedJobs : fallbackRelated;

  return (
    <main className="min-h-screen overflow-x-clip bg-background font-mono text-foreground">
      <CorporateNav overlay />

      <header className="relative flex min-h-[88svh] items-end overflow-hidden bg-foreground text-white">
        <motion.img
          src={getJobImage(job)}
          alt={`${job.business} team and operations`}
          loading="eager"
          initial={prefersReducedMotion ? false : { scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/55" aria-hidden="true" />
        <div className="relative z-10 w-full px-8 pb-14 pt-40 lg:px-16 lg:pb-20 xl:px-20">
          <a
            href="/careers#open-opportunities"
            className="mb-8 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            All opportunities
          </a>
          <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
            {job.discipline} / {job.reference}
          </span>
          <h1 className="mt-6 max-w-6xl font-display text-6xl font-extrabold leading-[0.86] tracking-tighter text-balance sm:text-7xl lg:text-[clamp(5.5rem,9vw,9rem)]">
            {job.title}
          </h1>
          <div className="mt-9 flex flex-col gap-8 border-t border-white/35 pt-7 lg:flex-row lg:items-end lg:justify-between">
            <JobMeta job={job} light />
            <a
              href="#role-overview"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-white/50 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Read role details"
            >
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <section
        id="role-overview"
        className="scroll-mt-20 border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20"
      >
        <div className="grid grid-cols-12 gap-y-14">
          <aside className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                The opportunity
              </span>
              <dl className="mt-8 border-t border-border text-[10px] uppercase tracking-widest">
                {[
                  ["Reference", job.reference],
                  ["Posted", job.posted],
                  ["Location", job.location],
                  ["Work model", job.workingModel],
                ].map(([label, value]) => (
                  <div key={label} className="border-b border-border py-4">
                    <dt className="font-bold opacity-40">{label}</dt>
                    <dd className="mt-2 font-bold">{value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={`/careers/${job.slug}/apply`}
                className="mt-8 inline-flex w-full items-center justify-between bg-accent px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Apply for this role
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="font-display text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
              {job.summary}
            </p>
            <p className="mt-10 text-base leading-relaxed opacity-70">{job.overview}</p>
            <div className="mt-16 border-t border-border pt-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                Your team
              </span>
              <p className="mt-6 text-base leading-relaxed opacity-70">{job.team}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <div className="grid grid-cols-12 gap-y-16">
          <div className="col-span-12 lg:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Role profile
            </span>
            <h2 className="mt-6 font-display text-5xl font-extrabold leading-[0.92] tracking-tighter lg:text-7xl">
              What you will shape.
            </h2>
          </div>
          <div className="col-span-12 grid gap-14 lg:col-span-7 lg:col-start-6">
            {[
              ["What you will do", job.responsibilities],
              ["What you will bring", job.requirements],
              ["Useful additional experience", job.preferred],
            ].map(([title, items], sectionIndex) => (
              <article key={title as string} className="border-t border-border pt-8">
                <div className="flex items-center justify-between gap-6">
                  <h3 className="font-display text-3xl font-bold tracking-tight">{title}</h3>
                  <span className="text-[10px] font-bold tracking-widest text-primary">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-8 grid gap-4">
                  {(items as string[]).map((item) => (
                    <li
                      key={item}
                      className="grid grid-cols-[auto_1fr] gap-4 text-sm leading-relaxed opacity-75"
                    >
                      <Check className="mt-1 h-4 w-4 text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground px-8 py-24 text-background lg:px-16 lg:py-36 xl:px-20">
        <div className="grid grid-cols-12 gap-y-14">
          <div className="col-span-12 lg:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Hiring process
            </span>
            <h2 className="mt-6 font-display text-5xl font-extrabold leading-[0.92] tracking-tighter">
              Know what comes next.
            </h2>
          </div>
          <div className="col-span-12 border-t border-white/15 lg:col-span-7 lg:col-start-6">
            {[
              [
                "01",
                "Application review",
                "Talent and hiring teams assess your experience against the role.",
              ],
              [
                "02",
                "Introductory conversation",
                "A focused conversation covers motivation, availability, and role context.",
              ],
              [
                "03",
                "Team assessment",
                "Technical and collaborative discussions explore how you approach the work.",
              ],
              [
                "04",
                "Decision and offer",
                "Final candidates receive a clear scope, package, location, and onboarding plan.",
              ],
            ].map(([number, title, body]) => (
              <article
                key={number}
                className="grid gap-4 border-b border-white/15 py-7 md:grid-cols-[auto_1fr] md:gap-8"
              >
                <span className="text-[10px] font-bold text-primary">{number}</span>
                <div>
                  <h3 className="font-display text-3xl font-bold leading-none tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-background/60">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-24 lg:px-16 lg:py-36 xl:px-20">
        <div className="mb-12 flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Related roles
            </span>
            <h2 className="mt-5 font-display text-5xl font-extrabold leading-none tracking-tighter">
              Keep exploring.
            </h2>
          </div>
          <LinkArrow href="/careers#open-opportunities">All opportunities</LinkArrow>
        </div>
        <div className="grid border-t border-border lg:grid-cols-3">
          {displayedRelated.map((opening) => (
            <a
              key={opening.slug}
              href={`/careers/${opening.slug}`}
              className="group border-b border-border py-8 transition-colors hover:text-primary lg:min-h-64 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="text-[9px] font-bold uppercase tracking-widest opacity-45">
                {opening.business} / {opening.location}
              </span>
              <h3 className="mt-12 font-display text-3xl font-bold leading-none tracking-tight">
                {opening.title}
              </h3>
              <span className="mt-8 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest">
                View role
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-border px-8 py-24 lg:px-16 lg:py-32 xl:px-20">
        <div className="grid grid-cols-12 items-end gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Ready to apply
            </span>
            <h2 className="mt-6 font-display text-5xl font-extrabold leading-[0.9] tracking-tighter lg:text-7xl">
              Bring your experience to the team.
            </h2>
          </div>
          <a
            href={`/careers/${job.slug}/apply`}
            className="col-span-12 inline-flex items-center justify-between bg-accent px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground lg:col-span-3 lg:col-start-10"
          >
            Start application
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
      <CorporateFooter />
    </main>
  );
}

type SubmitState = "idle" | "submitting" | "success" | "error";

export function CareerApplicationPage({ slug }: { slug: string }) {
  const job = getCareerOpening(slug);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [applicationReference, setApplicationReference] = useState("");

  if (!job) return <MissingJob />;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileError("");

    if (!file) {
      setCvFile(null);
      return;
    }

    const validExtension = [".pdf", ".doc", ".docx"].some((extension) =>
      file.name.toLowerCase().endsWith(extension),
    );

    if (!validExtension) {
      setFileError("Upload a PDF, DOC, or DOCX file.");
      setCvFile(null);
      event.target.value = "";
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      setFileError("Your CV must be 8 MB or smaller.");
      setCvFile(null);
      event.target.value = "";
      return;
    }

    setCvFile(file);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("idle");

    if (!cvFile) {
      setFileError("Please attach your CV before submitting.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("form-name", "career-application");
    formData.set("roleTitle", job.title);
    formData.set("roleSlug", job.slug);
    formData.set("roleReference", job.reference);
    setSubmitState("submitting");

    try {
      if (import.meta.env.DEV) {
        await new Promise((resolve) => setTimeout(resolve, 500));
      } else {
        const response = await fetch("/career-application.html", {
          method: "POST",
          body: formData,
        });
        if (!response.ok) throw new Error("Submission failed");
      }

      setApplicationReference(`APP-${job.reference}-${Date.now().toString().slice(-6)}`);
      setSubmitState("success");
      form.reset();
      setCvFile(null);
    } catch {
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <main className="min-h-screen bg-background font-mono text-foreground">
        <CorporateNav />
        <section className="flex min-h-[78svh] items-center px-8 pb-24 pt-36 lg:px-16 xl:px-20">
          <div className="grid w-full grid-cols-12 gap-y-12">
            <div className="col-span-12 lg:col-span-7">
              <CircleCheckBig className="h-12 w-12 text-primary" aria-hidden="true" />
              <span className="mt-8 block text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                Application received
              </span>
              <h1 className="mt-6 font-display text-6xl font-extrabold leading-[0.88] tracking-tighter lg:text-8xl">
                Thank you for applying.
              </h1>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed opacity-70">
                Your application for {job.title} has been recorded. Our talent team will review the
                submission and contact you if your experience matches the next stage.
              </p>
            </div>
            <div className="col-span-12 border-t border-border pt-8 lg:col-span-3 lg:col-start-10 lg:self-end">
              <span className="text-[9px] font-bold uppercase tracking-widest opacity-45">
                Application reference
              </span>
              <strong className="mt-3 block text-sm">{applicationReference}</strong>
              <div className="mt-8 grid gap-3">
                <LinkArrow href={`/careers/${job.slug}`}>Return to role</LinkArrow>
                <LinkArrow href="/careers#open-opportunities">Explore other roles</LinkArrow>
              </div>
            </div>
          </div>
        </section>
        <CorporateFooter />
      </main>
    );
  }

  const fieldClass =
    "mt-2 w-full bg-transparent py-3 text-sm outline-none placeholder:text-foreground/35";

  return (
    <main className="min-h-screen overflow-x-clip bg-background font-mono text-foreground">
      <CorporateNav />

      <header className="border-b border-border px-8 pb-16 pt-36 lg:px-16 lg:pb-20 xl:px-20">
        <a
          href={`/careers/${job.slug}`}
          className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest opacity-60 transition-opacity hover:opacity-100"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to role
        </a>
        <div className="mt-12 grid grid-cols-12 gap-y-8">
          <div className="col-span-12 lg:col-span-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Candidate application / {job.reference}
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.9] tracking-tighter lg:text-7xl">
              Apply for {job.title}.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:self-end">
            <JobMeta job={job} />
          </div>
        </div>
      </header>

      <section className="px-8 py-20 lg:px-16 lg:py-28 xl:px-20">
        <div className="grid grid-cols-12 gap-y-14">
          <aside className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                Your application
              </span>
              <ol className="mt-8 border-t border-border">
                {[
                  "Personal details",
                  "Professional profile",
                  "CV and motivation",
                  "Review and submit",
                ].map((step, index) => (
                  <li
                    key={step}
                    className="flex items-center gap-4 border-b border-border py-4 text-[10px] font-bold uppercase tracking-widest"
                  >
                    <span className="text-primary">{String(index + 1).padStart(2, "0")}</span>
                    <span className="opacity-65">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex items-start gap-3 text-[10px] leading-relaxed opacity-60">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                Your information is used only to assess and manage this application.
              </div>
            </div>
          </aside>

          <form
            name="career-application"
            method="POST"
            encType="multipart/form-data"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="col-span-12 lg:col-span-7 lg:col-start-6"
          >
            <input type="hidden" name="form-name" value="career-application" />
            <input type="hidden" name="roleTitle" value={job.title} />
            <input type="hidden" name="roleSlug" value={job.slug} />
            <input type="hidden" name="roleReference" value={job.reference} />

            <fieldset className="border-t border-border pb-16 pt-8">
              <legend className="flex w-full items-center justify-between font-display text-3xl font-bold tracking-tight">
                Personal details
                <span className="font-mono text-[10px] font-bold tracking-widest text-primary">
                  01
                </span>
              </legend>
              <div className="mt-8 grid gap-x-8 gap-y-3 md:grid-cols-2">
                <label className="border-b border-border py-4 focus-within:border-primary">
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-55">
                    Full name *
                  </span>
                  <input
                    required
                    name="fullName"
                    autoComplete="name"
                    placeholder="Your full name"
                    className={fieldClass}
                  />
                </label>
                <label className="border-b border-border py-4 focus-within:border-primary">
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-55">
                    Email address *
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    className={fieldClass}
                  />
                </label>
                <label className="border-b border-border py-4 focus-within:border-primary">
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-55">
                    Phone number *
                  </span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="Country code and number"
                    className={fieldClass}
                  />
                </label>
                <label className="border-b border-border py-4 focus-within:border-primary">
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-55">
                    Current location *
                  </span>
                  <input
                    required
                    name="currentLocation"
                    autoComplete="address-level2"
                    placeholder="City, country"
                    className={fieldClass}
                  />
                </label>
              </div>
            </fieldset>

            <fieldset className="border-t border-border pb-16 pt-8">
              <legend className="flex w-full items-center justify-between font-display text-3xl font-bold tracking-tight">
                Professional profile
                <span className="font-mono text-[10px] font-bold tracking-widest text-primary">
                  02
                </span>
              </legend>
              <div className="mt-8 grid gap-x-8 gap-y-3 md:grid-cols-2">
                <label className="border-b border-border py-4 focus-within:border-primary">
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-55">
                    LinkedIn profile
                  </span>
                  <input
                    type="url"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/..."
                    className={fieldClass}
                  />
                </label>
                <label className="border-b border-border py-4 focus-within:border-primary">
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-55">
                    Portfolio or website
                  </span>
                  <input
                    type="url"
                    name="portfolio"
                    placeholder="https://"
                    className={fieldClass}
                  />
                </label>
                <label className="border-b border-border py-4 focus-within:border-primary">
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-55">
                    Work authorization *
                  </span>
                  <select
                    required
                    name="workAuthorization"
                    defaultValue=""
                    className={`${fieldClass} appearance-none`}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="authorized">Authorized for this location</option>
                    <option value="sponsorship">Would require sponsorship</option>
                    <option value="unsure">Not sure</option>
                  </select>
                </label>
                <label className="border-b border-border py-4 focus-within:border-primary">
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-55">
                    Notice period *
                  </span>
                  <input
                    required
                    name="noticePeriod"
                    placeholder="e.g. 4 weeks"
                    className={fieldClass}
                  />
                </label>
              </div>
            </fieldset>

            <fieldset className="border-t border-border pb-16 pt-8">
              <legend className="flex w-full items-center justify-between font-display text-3xl font-bold tracking-tight">
                CV and motivation
                <span className="font-mono text-[10px] font-bold tracking-widest text-primary">
                  03
                </span>
              </legend>
              <div className="mt-8">
                <label className="group block border border-dashed border-border px-6 py-10 text-center transition-colors hover:border-primary focus-within:border-primary">
                  <input
                    required
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                  {cvFile ? (
                    <>
                      <FileText className="mx-auto h-7 w-7 text-primary" aria-hidden="true" />
                      <span className="mt-4 block text-sm font-bold">{cvFile.name}</span>
                      <span className="mt-2 block text-[9px] font-bold uppercase tracking-widest opacity-45">
                        {(cvFile.size / 1024 / 1024).toFixed(2)} MB / Select a different file
                      </span>
                    </>
                  ) : (
                    <>
                      <Upload className="mx-auto h-7 w-7 text-primary" aria-hidden="true" />
                      <span className="mt-4 block font-display text-2xl font-bold">
                        Attach your CV
                      </span>
                      <span className="mt-2 block text-[9px] font-bold uppercase tracking-widest opacity-45">
                        PDF, DOC, or DOCX / Maximum 8 MB
                      </span>
                    </>
                  )}
                </label>
                {fileError && (
                  <p
                    role="alert"
                    className="mt-3 flex items-center gap-2 text-[10px] font-bold text-destructive"
                  >
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                    {fileError}
                  </p>
                )}
                <label className="mt-8 block border-b border-border py-4 focus-within:border-primary">
                  <span className="text-[9px] font-bold uppercase tracking-widest opacity-55">
                    Why this role? *
                  </span>
                  <textarea
                    required
                    name="motivation"
                    rows={7}
                    placeholder="Tell us what interests you about the role and the experience you would bring."
                    className={`${fieldClass} resize-none leading-relaxed`}
                  />
                </label>
              </div>
            </fieldset>

            <fieldset className="border-t border-border pt-8">
              <legend className="flex w-full items-center justify-between font-display text-3xl font-bold tracking-tight">
                Review and submit
                <span className="font-mono text-[10px] font-bold tracking-widest text-primary">
                  04
                </span>
              </legend>
              <div className="mt-8 grid gap-5">
                <label className="flex items-start gap-3 text-[10px] leading-relaxed opacity-70">
                  <input
                    required
                    type="checkbox"
                    name="accuracyConsent"
                    className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                  />
                  I confirm that the information supplied is accurate and complete to the best of my
                  knowledge.
                </label>
                <label className="flex items-start gap-3 text-[10px] leading-relaxed opacity-70">
                  <input
                    required
                    type="checkbox"
                    name="privacyConsent"
                    className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                  />
                  I agree that Stratos may process my information to assess this application and
                  contact me about the hiring process.
                </label>
              </div>

              {submitState === "error" && (
                <div
                  role="alert"
                  className="mt-8 border border-destructive/40 px-5 py-4 text-sm text-destructive"
                >
                  We could not submit your application. Please check your connection and try again.
                </div>
              )}

              <button
                type="submit"
                disabled={submitState === "submitting"}
                className="mt-10 inline-flex w-full items-center justify-between bg-accent px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground disabled:cursor-wait disabled:opacity-65"
              >
                {submitState === "submitting" ? "Submitting application" : "Submit application"}
                {submitState === "submitting" ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <FileUp className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </fieldset>
          </form>
        </div>
      </section>

      <section className="border-t border-border px-8 py-20 lg:px-16 xl:px-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            [
              BadgeCheck,
              "Fair assessment",
              "Applications are reviewed against the published role requirements.",
            ],
            [
              ShieldCheck,
              "Candidate privacy",
              "Application information is restricted to the relevant hiring process.",
            ],
            [
              CheckCircle2,
              "Clear next steps",
              "Candidates progressing to the next stage receive role-specific guidance.",
            ],
          ].map(([Icon, title, body]) => {
            const AssuranceIcon = Icon as typeof BadgeCheck;
            return (
              <article key={title as string} className="border-t border-border pt-6">
                <AssuranceIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl font-bold tracking-tight">
                  {title as string}
                </h2>
                <p className="mt-3 text-xs leading-relaxed opacity-60">{body as string}</p>
              </article>
            );
          })}
        </div>
      </section>
      <CorporateFooter />
    </main>
  );
}
