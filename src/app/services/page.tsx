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
                  {area.subtitle ? (
                    <p
                      className={`mt-3 text-sm uppercase tracking-[0.1em] ${
                        area.featured ? "text-cream/75" : "subtitle"
                      }`}
                    >
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

        <Reveal delay={120} className="mt-10 max-w-xl">
          <dl className="divide-y divide-taupe/20 border-t border-taupe/20">
            {fees.map((f) => (
              <div
                key={f.label}
                className="flex items-baseline justify-between gap-6 py-5"
              >
                <dt className="text-base text-ink-muted">{f.label}</dt>
                <dd className="font-display text-2xl text-coffee">{f.price}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-ink-muted">
            {feesNote}
          </p>
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
        <div className="mt-8 max-w-2xl space-y-5">
          {ethics.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className="text-base leading-relaxed text-ink-muted">
                {paragraph}
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
