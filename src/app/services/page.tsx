import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Button, Eyebrow, Section } from "@/components/ui";
import {
  areasOfInterest,
  ethics,
  feesIntro,
  feesNote,
  fees,
  forWhom,
  forWhomIntro,
  languages,
  site,
} from "@/content/site";

export const metadata: Metadata = {
  title: `Services | ${site.practice}`,
  description: "Who I work with, areas of particular interest, and fees.",
};

const inPageNav = [
  { href: "#for-whom", label: "For whom?" },
  { href: "#areas-of-interest", label: "Particular areas of interest" },
  { href: "#fees", label: "Fees" },
];

export default function Services() {
  return (
    <main>
      <Section className="bg-shell">
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-4xl leading-snug text-ink md:text-5xl">
          Areas I work with
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
          Most people arrive with something specific, and find the work widens
          from there. If what brings you here isn&rsquo;t listed, it is still
          worth asking.
        </p>
        <nav className="mt-10 inline-flex flex-wrap gap-1.5 rounded-full border border-taupe/25 bg-cream p-1.5">
          {inPageNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted transition-all duration-200 hover:bg-coffee hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Section>

      {/* ---------- For whom? ---------- */}
      <Section id="for-whom">
        <Reveal>
          <Eyebrow>For whom?</Eyebrow>
          <h2 className="mt-4 max-w-lg font-display text-3xl leading-snug text-raisin md:text-4xl">
            Who I work with
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink">
            {forWhomIntro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {forWhom.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 130}
              className="rounded-lg border border-taupe/25 bg-cream p-8 transition-all duration-200 hover:-translate-y-1 hover:border-coffee/40 hover:shadow-lg"
            >
              <h3 className="font-display text-2xl text-ink">{group.title}</h3>
              <div className="mt-4 space-y-4">
                {group.paragraphs.map((paragraph, j) => (
                  <p
                    key={j}
                    className="text-base leading-relaxed text-ink-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Particular areas of interest ---------- */}
      <Section id="areas-of-interest" className="bg-sand/40">
        <Reveal>
          <Eyebrow>Particular areas of interest</Eyebrow>
          <h2 className="mt-4 max-w-lg font-display text-3xl leading-snug text-raisin md:text-4xl">
            Where I have particular experience
          </h2>
        </Reveal>

        <div className="mt-12 space-y-8">
          {areasOfInterest.map((area, i) => (
            <Reveal
              key={area.title}
              delay={i * 130}
              className={
                area.featured
                  ? "rounded-2xl border-2 border-coffee/70 bg-coffee p-8 text-cream shadow-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl md:p-12"
                  : "rounded-2xl border border-taupe/25 bg-cream p-8 transition-all duration-200 hover:-translate-y-1 hover:border-coffee/40 hover:shadow-lg md:p-10"
              }
            >
              <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
                <div>
                  <h3
                    className={`font-display text-2xl md:text-3xl ${
                      area.featured ? "text-cream" : "text-ink"
                    }`}
                  >
                    {area.title}
                  </h3>
                  {area.subtitle && area.featured ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {languages.map((lang) => (
                        <span
                          key={lang}
                          className="rounded-full border border-cream/40 bg-cream/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-cream"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  ) : area.subtitle ? (
                    <p className="subtitle mt-2 text-xs uppercase tracking-[0.1em]">
                      {area.subtitle}
                    </p>
                  ) : null}
                </div>
                <div
                  className={`max-w-2xl space-y-4 ${
                    area.featured ? "text-cream/90" : "text-ink-muted"
                  }`}
                >
                  {area.paragraphs.map((paragraph, j) => (
                    <p key={j} className="text-base leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Fees ---------- */}
      <Section id="fees">
        <Reveal>
          <Eyebrow>Fees</Eyebrow>
          <h2 className="mt-4 max-w-lg font-display text-3xl leading-snug text-raisin md:text-4xl">
            What sessions cost
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
            {feesIntro}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {fees.map((f, i) => {
            const featured = i === 1;
            return (
              <Reveal
                key={f.label}
                delay={120 + i * 100}
                className={
                  featured
                    ? "relative rounded-2xl border-2 border-coffee bg-coffee p-8 text-center text-cream shadow-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
                    : "rounded-2xl border border-taupe/25 bg-cream p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-coffee/40 hover:shadow-lg"
                }
              >
                {featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ember px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-raisin">
                    Most common
                  </span>
                ) : null}
                <p
                  className={`font-display text-4xl md:text-5xl ${
                    featured ? "text-cream" : "text-coffee"
                  }`}
                >
                  {f.price}
                </p>
                <p
                  className={`mt-4 text-sm leading-snug ${
                    featured ? "text-cream/85" : "text-ink-muted"
                  }`}
                >
                  {f.label}
                </p>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={420} className="mt-8 max-w-xl">
          <p className="text-sm leading-relaxed text-ink-muted">{feesNote}</p>
        </Reveal>
      </Section>

      {/* ---------- Ethics, Confidentiality & Your Privacy ---------- */}
      <Section className="bg-linen">
        <Reveal>
          <Eyebrow>Ethics &amp; Privacy</Eyebrow>
          <h2 className="mt-4 max-w-lg font-display text-3xl leading-snug text-raisin md:text-4xl">
            {ethics.title}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {ethics.parts.map((part, i) => (
            <Reveal
              key={part.title}
              delay={i * 120}
              className="rounded-lg border border-taupe/25 bg-cream p-6 transition-all duration-200 hover:-translate-y-1 hover:border-coffee/40 hover:shadow-lg"
            >
              <h3 className="font-display text-xl text-raisin">
                {part.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {part.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-sand/60 text-center">
        <h2 className="mx-auto max-w-xl font-display text-3xl leading-snug text-ink md:text-4xl">
          Not sure where you fit?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-muted">
          That is a common place to start. A short conversation usually makes it
          clearer.
        </p>
        <div className="mt-10">
          <Button href="/contact">Get in touch</Button>
        </div>
      </Section>
    </main>
  );
}
