/* eslint-disable @next/next/no-img-element */
import { Nav } from "./components/nav";
import { Reveal } from "./components/reveal";
import { CheckBadge, Icon } from "./components/svg-icon";
import {
  BRAND,
  CONTACT_EMAIL,
  automations,
  caseStudies,
  images,
  industries,
  navLinks,
  reasons,
  solutions,
  steps,
} from "./site";

const container = "mx-auto w-full max-w-[1320px] px-5";

function Tag({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "hero";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border-2 border-white bg-[linear-gradient(180deg,#fff_0%,#e7f2ff_100%)] font-display text-sm font-medium tracking-[-0.01em] uppercase shadow-[0_8px_16px_0_rgb(0_79_186/0.12)] ${variant === "hero" ? "py-1.5 pr-3.5 pl-1.5" : "px-3.5 py-2"}`}
    >
      {variant === "hero" ? (
        <span className="bg-brand grid size-8 place-items-center rounded-full text-white">
          <Icon name="cpu" className="size-4" />
        </span>
      ) : (
        <Icon name="shapes" className="size-5 text-brand" />
      )}
      {children}
    </span>
  );
}

function SectionHeading({
  tag,
  title,
  children,
  align = "center",
}: {
  tag: string;
  title: string;
  children: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={`flex flex-col gap-5 ${align === "center" ? "mx-auto max-w-3xl items-center text-center" : "items-start"}`}
    >
      <Tag>{tag}</Tag>
      <h2 className="text-gradient pb-1 text-4xl tracking-[-0.06em] md:text-5xl">
        {title}
      </h2>
      <p className="text-lg text-muted">{children}</p>
    </Reveal>
  );
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt={BRAND}
      width={800}
      height={143}
      className={`w-auto mix-blend-multiply ${className}`}
    />
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top" className="flex-1 overflow-x-clip">
        {/* Hero */}
        <section className="relative pt-36 md:pt-40">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_0%,#dbe8ff_0%,#fff_100%)]" />
          <img
            src={images.heroBg}
            alt=""
            className="pointer-events-none absolute inset-0 -z-10 size-full object-cover opacity-60 mix-blend-multiply"
          />
          <div className={`${container} flex flex-col items-center gap-6 text-center`}>
            <Reveal>
              <Tag variant="hero">Custom software for growing businesses</Tag>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-gradient px-[0.1em] pb-2 text-5xl tracking-[-0.06em] md:text-[64px]">
                Spreadsheets limiting your business<span className="font-sans">?</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="max-w-3xl text-lg text-muted">
                Move to a custom made software tailored to your requirements.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-4 flex flex-wrap justify-center gap-4">
              <a href="#case-studies" className="btn btn-light">
                Explore Our Work
              </a>
            </Reveal>
          </div>
          <Reveal delay={320}>
            <img
              src={images.hands}
              alt="A robotic hand reaching towards a human hand"
              className="mx-auto mt-10 block w-full max-w-[1600px]"
            />
          </Reveal>
        </section>

        {/* Industry ticker */}
        <section className={`${container} pt-6 pb-24`}>
          <p className="mb-8 text-center font-display text-lg font-medium tracking-[-0.02em]">
            Trusted by businesses across industries
          </p>
          <div className="fade-x overflow-hidden">
            <ul className="flex w-max animate-marquee items-center">
              {[...industries, ...industries, ...industries, ...industries].map(
                (industry, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 px-12 font-display text-2xl font-semibold tracking-[-0.04em] whitespace-nowrap"
                  >
                    <span className="bg-brand size-2.5 rounded-full" />
                    {industry}
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>

        {/* Core value additions */}
        <section id="solutions" className="relative pt-24 pb-16">
          <div className="absolute inset-x-0 top-0 -z-10 h-[430px] bg-surface/50" />
          <div className={`${container} grid gap-14`}>
            <SectionHeading
              tag="Core value additions"
              title="One system to run your business, end to end."
            >
              Custom software for textile, cement, logistics and shipping
              businesses.
            </SectionHeading>

            <div className="grid gap-6 md:grid-cols-2">
              {solutions.map((solution, i) => (
                <Reveal
                  key={solution.title}
                  delay={(i % 2) * 80}
                  className="card p-7"
                >
                  <span className="icon-box">
                    <img src={solution.icon} alt="" className="size-6" />
                  </span>
                  <h3 className="mt-8 text-2xl tracking-[-0.04em]">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-ink/60">{solution.description}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="fade-x mt-6 overflow-hidden py-6">
            <ul className="flex w-max animate-marquee">
              {[...automations, ...automations, ...automations, ...automations].map(
                (label, i) => (
                  <li key={i} className="px-1.5">
                    <span className="tile flex items-center gap-2.5 rounded-full! px-4 py-2.5 font-display text-sm font-medium whitespace-nowrap uppercase">
                      <CheckBadge className="size-4 text-brand" />
                      {label}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>

        {/* Case studies */}
        <section id="case-studies" className="grid gap-10 py-16">
          <div className={container}>
            <SectionHeading tag="Case studies" title="Proven Results, Real Impact">
              Custom MIS platforms built around how each business actually
              runs.
            </SectionHeading>
          </div>

          <ul className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.25rem,calc((100vw-1280px)/2))] pt-4 pb-10">
            {caseStudies.map((study) => (
              <li
                key={study.name}
                className="card grid w-[min(1280px,calc(100vw-2.5rem))] shrink-0 snap-center gap-8 p-5.5 lg:grid-cols-[592px_1fr] lg:gap-10"
              >
                <img
                  src={study.image}
                  alt=""
                  className="aspect-[592/524] w-full rounded-2xl object-cover"
                />
                <div className="flex flex-col gap-6 lg:py-6 lg:pr-2">
                  <span className="self-start rounded-full bg-brand/10 px-3.5 py-2 font-display text-sm font-medium text-brand uppercase">
                    {study.location}
                  </span>
                  <div className="grid gap-4">
                    <h3 className="text-[32px] tracking-[-0.04em]">
                      {study.name}
                    </h3>
                    <p className="max-w-xl text-lg text-ink/60">
                      {study.description}
                    </p>
                  </div>
                  <ul className="mt-auto grid gap-3 sm:grid-cols-2">
                    {study.challenges.map((challenge) => (
                      <li
                        key={challenge}
                        className="tile flex items-center gap-2.5 px-4 py-3.5 font-display font-medium tracking-[-0.02em]"
                      >
                        <CheckBadge className="size-4 shrink-0 text-brand" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Why us */}
        <section id="why-us" className={`${container} grid gap-14 py-24`}>
          <SectionHeading
            tag="Why us?"
            title="Software your whole team can actually use."
          >
            Systems that actually solve problems and not add to the workload.
          </SectionHeading>

          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((reason, i) => (
              <Reveal
                key={reason.title}
                delay={(i % 2) * 80}
                className="card rounded-2xl! p-5.5"
              >
                <span className="icon-box">
                  <img src={reason.icon} alt="" className="size-6" />
                </span>
                <h3 className="mt-8 text-xl tracking-[-0.02em]">{reason.title}</h3>
                <p className="mt-2 text-ink/60">{reason.description}</p>
              </Reveal>
            ))}
            <Reveal
              delay={80}
              className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[radial-gradient(120%_120%_at_100%_100%,#007aff_0%,#1c2141_70%)] p-6 text-white shadow-[0_8px_16px_0_rgb(0_122_255/0.32),inset_0_0_0_2px_rgb(255_255_255/0.16)]"
            >
              <p className="font-display text-2xl leading-[1.2] font-medium tracking-[-0.02em]">
                A great partner to growing SMEs and MSMEs{" "}
                <span className="text-white/60">
                  moving from outdated systems to modern tools for managing
                  business.
                </span>
              </p>
              <a href="#contact" className="btn btn-light min-w-40!">
                Get Started
              </a>
            </Reveal>
          </div>
        </section>

        {/* How we work */}
        <section id="process" className={`${container} py-16`}>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_568px] lg:gap-24">
            <div className="grid gap-10 lg:pt-4">
              <SectionHeading
                align="left"
                tag="How we work"
                title="A transparent process of collaboration and feedback"
              >
                From shadowing your team on day one to evolving the software as
                your business grows.
              </SectionHeading>

              <ol className="grid gap-8">
                {steps.map((step, i) => (
                  <li key={step.title}>
                    <Reveal delay={i * 60} className="flex gap-4">
                      <span className="icon-box font-display font-medium text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="grid gap-3">
                        <h3 className="text-xl tracking-[-0.02em]">
                          {step.title}
                        </h3>
                        <p className="max-w-lg text-ink/60">{step.description}</p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>

            <Reveal className="card relative rounded-[32px]! p-2.5">
              <img
                src={images.handshake}
                alt="Two people shaking hands"
                className="aspect-[544/808] w-full rounded-[22px] object-cover"
              />
              <div className="tile absolute inset-x-8 bottom-10 flex items-center gap-4 rounded-3xl! p-5 md:inset-x-14">
                <span className="icon-box">
                  <Icon name="shapes" className="size-6 text-white" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-xl font-medium tracking-[-0.04em]">
                    Alongside your team
                  </p>
                  <p className="text-ink/60">Hands-on training during rollout</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`${container} pt-20`}>
          <Reveal className="card relative z-10 flex flex-col gap-8 p-8 md:p-14 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col items-start gap-5">
              <Tag variant="hero">Contact us</Tag>
              <h2 className="text-gradient pb-1 text-4xl tracking-[-0.06em] md:text-5xl">
                Let’s build your custom solution
              </h2>
              <p className="max-w-2xl text-lg text-ink/60">
                Let’s walk through some of our systems and how we can build one
                tailored to your requirements.
              </p>
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-dark">
              Contact us
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fff_0,#e8f0ff_100%)]" />
        <img
          src={images.footerBg}
          alt=""
          className="pointer-events-none absolute inset-0 -z-10 size-full mask-[linear-gradient(to_bottom,transparent,#000_240px)] object-cover opacity-60 mix-blend-multiply"
        />
        <div className={`${container} pt-12`}>
          <img
            src={images.cubes}
            alt=""
            className="mx-auto w-full max-w-[520px] mask-[linear-gradient(to_bottom,transparent_8%,#000_45%)]"
          />

          <div className="grid gap-10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
            <div className="flex flex-col gap-6">
              <Wordmark className="h-8 self-start" />
              <p className="max-w-[260px] font-display text-xl leading-[1.2] font-medium text-ink/60">
                Custom operating systems for growing businesses.
              </p>
            </div>

            <div>
              <p className="mb-4 text-ink/60 uppercase">Quick Link</p>
              <ul className="grid gap-3 font-display text-2xl font-medium tracking-[-0.04em]">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-brand">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-ink/60 uppercase">Contact</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-display text-2xl font-medium tracking-[-0.04em] hover:text-brand"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="border-t border-line py-6 font-display font-medium">
            <p>© 2026 {BRAND}. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
