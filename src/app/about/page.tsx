import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Button, Eyebrow, Photo, Section } from "@/components/ui";
import {
  aboutOpening,
  journeyParagraphs,
  qualifications,
  sessionsFeel,
  site,
  whoThisIsFor,
} from "@/content/site";

export const metadata: Metadata = {
  title: `About | ${site.practice}`,
  description: "About the practitioner, training and therapeutic approach.",
};

export default function About() {
  return (
    <main>
      {/* ---------- Opening ---------- */}
      <div className="relative overflow-hidden bg-noir text-salt">
        <div
          aria-hidden
          className="a-bloom absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-coffee/60"
        />
        <div
          aria-hidden
          className="a-bloom absolute -left-24 bottom-[-14rem] h-[26rem] w-[26rem] rounded-full bg-olive/70"
          style={{ animationDelay: "-7s" }}
        />

        <div className="relative mx-auto max-w-3xl px-6 py-24 md:px-12 lg:px-20 lg:py-28">
          <p className="a-rise text-xs uppercase tracking-[0.18em] text-mist">
            About
          </p>
          <h1
            className="a-rise mt-6 font-display text-5xl leading-[1.1] md:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            {aboutOpening.greeting}
          </h1>
          <p
            className="a-rise mt-7 max-w-md text-lg leading-relaxed text-salt/75"
            style={{ animationDelay: "260ms" }}
          >
            {aboutOpening.body}
          </p>

          <div
            className="a-rise mt-10 h-[22rem] max-w-sm"
            style={{ animationDelay: "380ms" }}
          >
            <Photo arch tone="warm" className="h-full w-full" label="Headshot photo pending" />
          </div>
        </div>
      </div>

      {/* ---------- My Journey ---------- */}
      <Section>
        <Reveal>
          <Eyebrow>My Journey</Eyebrow>
          <h2 className="mt-4 max-w-lg font-display text-3xl leading-snug text-raisin md:text-4xl">
            How this practice came to be
          </h2>
        </Reveal>

        <div className="mt-12 max-w-2xl space-y-6">
          {journeyParagraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className="text-base leading-relaxed text-ink-muted">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- What Sessions Feel Like ---------- */}
      <Section className="bg-linen">
        <Reveal>
          <Eyebrow>My approach</Eyebrow>
          <h2 className="mt-4 max-w-lg font-display text-3xl leading-snug text-raisin md:text-4xl">
            What sessions feel like
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {sessionsFeel.map((part, i) => (
            <Reveal
              key={part.title}
              delay={i * 130}
              className="rounded-lg border border-taupe/25 bg-cream p-7 transition-all duration-200 hover:-translate-y-1 hover:border-coffee/40 hover:shadow-lg"
            >
              <h3 className="font-display text-2xl text-raisin">
                {part.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                {part.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Who this is for ---------- */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <Eyebrow>A note on asking for help</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-4xl">
              Who this is for
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {whoThisIsFor.map((paragraph, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="text-base leading-relaxed text-ink-muted">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- Qualifications & Registration ---------- */}
      <Section className="bg-linen">
        <div className="grid gap-16 md:grid-cols-[0.8fr_1fr]">
          <Reveal>
            <Eyebrow>Qualifications</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-snug text-raisin">
              Qualifications &amp; registration
            </h2>
          </Reveal>
          <div>
            <ul className="divide-y divide-antique/25 border-t border-antique/25">
              {qualifications.map((item, i) => (
                <Reveal as="li" key={item + i} delay={i * 100}>
                  <span className="flex gap-5 py-5">
                    <span className="font-display text-xl text-clay">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base text-ink-muted">{item}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={200} className="mt-10">
              <Button href="/contact">Book a free consultation</Button>
            </Reveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
