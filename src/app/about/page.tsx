import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Button, Eyebrow, Section } from "@/components/ui";
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

export default function About() {
  return (
    <main>
      {/* ---------- Opening ---------- */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_1fr] md:gap-20">
          <div>
            <Eyebrow className="a-rise">About</Eyebrow>
            <h1
              className="a-rise mt-5 font-display text-[2.75rem] leading-[1.05] text-raisin md:text-[66px]"
              style={{ animationDelay: "100ms" }}
            >
              {aboutOpening.greeting}
            </h1>
            <p
              className="a-rise mt-7 max-w-[31rem] font-display text-[22px] leading-[1.45] text-label md:text-[26px]"
              style={{ animationDelay: "200ms" }}
            >
              {aboutOpening.body}
            </p>
            <div className="a-rise mt-10" style={{ animationDelay: "300ms" }}>
              <Button href="/contact">Book a free consultation</Button>
            </div>
          </div>

          {/* Pre-cropped to head, shoulders and chest */}
          <div
            className="a-rise clip-safe overflow-hidden rounded-md"
            style={{ animationDelay: "260ms" }}
          >
            <Image
              src="/images/headshot-about.jpg"
              alt="Portrait of Aarushi Shah"
              width={550}
              height={550}
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="aspect-[4/5] w-full object-cover object-[50%_35%]"
            />
          </div>
        </div>
      </Section>

      {/* ---------- My Journey ---------- */}
      <Section className="bg-linen" inner="max-w-[760px]">
        <Reveal>
          <Eyebrow>My Journey</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[46px] md:leading-[1.15]">
            How this practice came to be
          </h2>
        </Reveal>

        <div className="mt-10 space-y-6">
          {journeyParagraphs.map((paragraph, i) => {
            const [before, after] = paragraph.includes(journeyBoldPhrase)
              ? paragraph.split(journeyBoldPhrase)
              : [paragraph, undefined];
            return (
              <Reveal key={i} delay={i * 90}>
                <p className="text-[17px] leading-[1.85] text-label">
                  {after === undefined ? (
                    before
                  ) : (
                    <>
                      {before}
                      <strong className="font-semibold text-raisin">
                        {journeyBoldPhrase}
                      </strong>
                      {after}
                    </>
                  )}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ---------- What Sessions Feel Like ---------- */}
      <Section>
        <Reveal>
          <Eyebrow>My approach</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[46px] md:leading-[1.15]">
            What sessions feel like
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-12">
          {sessionsFeel.map((part, i) => (
            <Reveal
              key={part.title}
              delay={i * 130}
              className="border-t border-rule pt-7"
            >
              <h3 className="font-display text-[28px] leading-snug text-raisin">
                {part.title}
              </h3>
              <p className="mt-4 text-base leading-[1.8] text-ink-muted">
                {part.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Who this is for ---------- */}
      <Section className="bg-linen">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <Reveal>
            <Eyebrow>A note on asking for help</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[46px] md:leading-[1.15]">
              Who this is for
            </h2>
          </Reveal>
          <div className="space-y-6 md:border-l md:border-rule md:pl-12">
            {whoThisIsFor.map((paragraph, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="text-[17px] leading-[1.85] text-label">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- Qualifications & Registration ---------- */}
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <Reveal>
            <Eyebrow>Qualifications</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[44px] md:leading-[1.15]">
              Qualifications &amp; registration
            </h2>
          </Reveal>
          <div>
            <ul className="border-t border-parchment">
              {qualifications.map((item, i) => (
                <Reveal
                  as="li"
                  key={item + i}
                  delay={i * 100}
                  className="border-b border-parchment"
                >
                  <span className="flex items-baseline gap-6 py-6">
                    <span className="font-display text-[22px] text-clay">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[17px] leading-relaxed text-raisin">
                      {item}
                    </span>
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
