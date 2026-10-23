import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Button, Eyebrow, Panel, Pill, Section } from "@/components/ui";
import {
  areasOfInterest,
  ethics,
  feesIntro,
  feesNote,
  fees,
  forWhom,
  forWhomIntro,
  languages,
  servicesIntro,
  site,
} from "@/content/site";

export const metadata: Metadata = {
  title: `Services | ${site.practice}`,
  description: "Who I work with, areas of particular interest, and fees.",
};

export default function Services() {
  return (
    <main>
      {/* ---------- Opening ---------- */}
      <Section className="bg-linen">
        <div className="grid items-center gap-10 md:grid-cols-[1.25fr_1fr] md:gap-16">
          <Panel className="a-rise md:p-12">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-5 font-display text-[2.75rem] leading-[1.05] text-raisin md:text-[64px]">
              Whatever brings you here
            </h1>
            <p className="mt-6 text-[17px] leading-[1.8] text-label">
              {servicesIntro}
            </p>
          </Panel>
          <div
            className="a-rise clip-safe relative mx-auto h-[24rem] w-full max-w-[26rem] overflow-hidden rounded-2xl md:h-[34rem]"
            style={{ animationDelay: "200ms" }}
          >
            <Image
              src="/images/services-alcove.jpg"
              alt="A small plant in a softly lit wooden alcove"
              fill
              priority
              sizes="(min-width: 768px) 26rem, 100vw"
              className="object-cover object-[50%_40%]"
            />
          </div>
        </div>
      </Section>

      {/* ---------- For whom? ---------- */}
      <Section id="for-whom">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>For whom?</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[46px] md:leading-[1.15]">
            Who I work with
          </h2>
          <p className="mt-5 font-display text-[21px] leading-[1.45] text-label md:text-[25px]">
            {forWhomIntro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
          {forWhom.map((group, i) => (
            <Reveal as="article" key={group.title} delay={i * 130}>
              <Panel
                tone={i === 0 ? "warm" : "light"}
                className="h-full md:p-10"
              >
                <h3 className="font-display text-[30px] leading-snug text-raisin">
                  {group.title}
                </h3>
                <div className="mt-4 space-y-3.5">
                  {group.paragraphs.map((paragraph, j) => (
                    <p key={j} className="text-base leading-[1.8] text-label">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Particular areas of interest ---------- */}
      <Section id="areas-of-interest" className="bg-linen">
        <Reveal className="text-center">
          <Eyebrow>Particular areas of interest</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[46px] md:leading-[1.15]">
            Where I have particular experience
          </h2>
        </Reveal>

        <div className="mt-12 space-y-5 md:mt-14 md:space-y-6">
          {areasOfInterest.map((area, i) => (
            <Reveal key={area.title} delay={i * 130}>
              <Panel
                tone={area.featured ? "green" : "light"}
                className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-14 md:p-14"
              >
                <div>
                  <h3
                    className={`font-display text-[30px] leading-[1.15] md:text-[34px] ${
                      area.featured ? "text-salt" : "text-raisin"
                    }`}
                  >
                    {area.title}
                  </h3>
                  {area.featured ? (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {languages.map((language) => (
                        <li key={language}>
                          <Pill className="bg-salt/15 text-blush ring-1 ring-salt/25">
                            {language}
                          </Pill>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {area.intro ? (
                    <p className="mt-5 rounded-lg bg-blush p-5 text-[15px] leading-[1.75] text-label">
                      {area.intro}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-4">
                  {area.paragraphs.map((paragraph, j) => (
                    <p
                      key={j}
                      className={`text-[16.5px] leading-[1.8] ${
                        area.featured ? "text-blush" : "text-label"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Fees ---------- */}
      <Section id="fees">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.5fr] md:gap-14">
          <Reveal>
            <Eyebrow>Fees</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[46px] md:leading-[1.15]">
              What sessions cost
            </h2>
            <p className="mt-5 max-w-sm text-base leading-[1.75] text-ink-muted">
              {feesIntro}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <Panel className="md:p-8">
              <dl className="divide-y divide-parchment">
                {fees.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-baseline justify-between gap-5 py-5 first:pt-0"
                  >
                    <dt className="text-[15.5px] leading-snug text-raisin md:text-[17px]">
                      {f.label}
                    </dt>
                    <dd className="shrink-0 font-display text-[28px] leading-none text-coffee md:text-[32px]">
                      {f.price}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 border-t border-parchment pt-5 text-[14.5px] leading-[1.7] text-ink-muted">
                {feesNote}
              </p>
            </Panel>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Ethics, Confidentiality & Your Privacy ---------- */}
      <Section className="bg-linen">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.5fr] md:gap-14">
          <Reveal>
            <Eyebrow>Ethics &amp; Privacy</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[44px] md:leading-[1.15]">
              {ethics.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Panel className="md:p-12">
              <div className="divide-y divide-parchment">
                {ethics.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="py-5 text-[17px] leading-[1.85] text-label first:pt-0 last:pb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Panel>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Closing ---------- */}
      <Section>
        <Reveal>
          <Panel tone="sage" className="text-center md:px-20 md:py-16">
            <h2 className="font-display text-3xl leading-snug text-cocoa md:text-[46px] md:leading-[1.15]">
              Not sure where you fit?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg leading-[1.75] text-label">
              That is a common place to start. A short conversation usually
              makes it clearer.
            </p>
            <div className="mt-9">
              <Button href="/contact">Get in touch</Button>
            </div>
          </Panel>
        </Reveal>
      </Section>
    </main>
  );
}
