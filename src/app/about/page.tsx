import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Button, Eyebrow, Panel, Section } from "@/components/ui";
import {
  aboutOpening,
  journeyBoldPhrase,
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

/* Each approach card gets its own warm tint so the three read as a set */
const approachTints = ["bg-porcelain", "bg-sage-tint", "bg-blush"];

export default function About() {
  return (
    <main>
      {/* ---------- Opening ---------- */}
      <Section className="bg-linen">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <Panel className="a-rise md:p-12">
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-5 font-display text-[2.75rem] leading-[1.05] text-raisin md:text-[64px]">
              {aboutOpening.greeting}
            </h1>
            <p className="mt-6 font-display text-[22px] leading-[1.45] text-label md:text-[26px]">
              {aboutOpening.body}
            </p>
            <div className="mt-9">
              <Button href="/contact">Book a free consultation</Button>
            </div>
          </Panel>

          {/* Pre-cropped to head, shoulders and chest */}
          <div
            className="a-rise clip-safe mx-auto w-full max-w-[26rem] overflow-hidden rounded-2xl"
            style={{ animationDelay: "200ms" }}
          >
            <Image
              src="/images/headshot-about.jpg"
              alt="Portrait of Aarushi Shah"
              width={550}
              height={550}
              priority
              sizes="(min-width: 768px) 26rem, 100vw"
              className="aspect-[4/5] w-full object-cover object-[50%_35%]"
            />
          </div>
        </div>
      </Section>

      {/* ---------- My Journey ---------- */}
      <Section>
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.6fr] md:gap-14">
          <Reveal className="md:sticky md:top-8 md:self-start">
            <Eyebrow>My Journey</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[44px] md:leading-[1.15]">
              How this practice came to be
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <Panel className="md:p-12">
              <div className="divide-y divide-parchment">
                {journeyParagraphs.map((paragraph, i) => {
                  const [before, after] = paragraph.includes(journeyBoldPhrase)
                    ? paragraph.split(journeyBoldPhrase)
                    : [paragraph, undefined];
                  return (
                    <p
                      key={i}
                      className="py-5 text-[17px] leading-[1.85] text-label first:pt-0 last:pb-0"
                    >
                      {after === undefined ? (
                        before
                      ) : (
                        <>
                          {before}
                          <strong className="font-semibold text-cocoa">
                            {journeyBoldPhrase}
                          </strong>
                          {after}
                        </>
                      )}
                    </p>
                  );
                })}
              </div>
            </Panel>
          </Reveal>
        </div>
      </Section>

      {/* ---------- What Sessions Feel Like ---------- */}
      <Section className="bg-linen">
        <Reveal className="text-center">
          <Eyebrow>My approach</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[46px] md:leading-[1.15]">
            What sessions feel like
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {sessionsFeel.map((part, i) => (
            <Reveal key={part.title} delay={i * 130}>
              <div
                className={`h-full rounded-xl border border-parchment/70 p-6 md:rounded-2xl md:p-9 ${approachTints[i]}`}
              >
                <h3 className="font-display text-[28px] leading-snug text-raisin">
                  {part.title}
                </h3>
                <p className="mt-4 text-base leading-[1.8] text-label">
                  {part.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Who this is for ---------- */}
      <Section>
        <Reveal>
          <Panel tone="dark" className="md:p-14">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.6fr] md:gap-14">
              <div>
                <Eyebrow dark>A note on asking for help</Eyebrow>
                <h2 className="mt-4 font-display text-3xl leading-snug text-salt md:text-[44px] md:leading-[1.15]">
                  Who this is for
                </h2>
              </div>
              <div className="space-y-5">
                {whoThisIsFor.map((paragraph, i) => (
                  <p key={i} className="text-[17px] leading-[1.85] text-blush">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Panel>
        </Reveal>
      </Section>

      {/* ---------- Qualifications & Registration ---------- */}
      <Section className="bg-linen">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.6fr] md:gap-14">
          <Reveal>
            <Eyebrow>Qualifications</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[44px] md:leading-[1.15]">
              Qualifications &amp; registration
            </h2>
          </Reveal>
          <div>
            <ul className="divide-y divide-parchment rounded-xl border border-parchment/80 bg-porcelain px-6 md:rounded-2xl md:px-8">
              {qualifications.map((item, i) => (
                <Reveal as="li" key={item + i} delay={i * 100}>
                  <span className="flex items-baseline gap-5 py-5">
                    <span className="shrink-0 font-display text-[22px] text-clay">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15.5px] leading-snug text-raisin md:text-[17px]">
                      {item}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={200} className="mt-9">
              <Button href="/contact">Book a free consultation</Button>
            </Reveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
