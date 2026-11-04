import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Button, Eyebrow, Section, Tidy } from "@/components/ui";
import {
  areasOfInterest,
  ethics,
  feesIntro,
  feesNote,
  fees,
  forWhom,
  forWhomIntro,
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
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <Eyebrow className="a-rise">Services</Eyebrow>
            <h1
              className="a-rise mt-5 font-display text-[2.75rem] leading-[1.05] text-raisin md:text-[66px]"
              style={{ animationDelay: "100ms" }}
            >
              Whatever brings you here
            </h1>
            <p
              className="a-rise mt-7 text-[17px] leading-[1.8] text-label"
              style={{ animationDelay: "200ms" }}
            >
              <Tidy>{servicesIntro}</Tidy>
            </p>
          </div>
          <div
            className="a-rise clip-safe relative h-[24rem] overflow-hidden rounded-md md:h-[32rem]"
            style={{ animationDelay: "260ms" }}
          >
            <Image
              src="/images/services-alcove.jpg"
              alt="A small plant in a softly lit wooden alcove"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover object-[50%_40%]"
            />
          </div>
        </div>
      </Section>

      {/* ---------- For whom? ---------- */}
      <Section id="for-whom" className="bg-linen">
        <Reveal className="max-w-3xl">
          <Eyebrow>For whom?</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[46px] md:leading-[1.15]">
            Who I work with
          </h2>
          <p className="mt-5 font-display text-[21px] leading-[1.45] text-label md:text-[25px]">
            <Tidy>{forWhomIntro}</Tidy>
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
          {forWhom.map((group, i) => (
            <Reveal
              as="article"
              key={group.title}
              delay={i * 130}
              className="rounded-md bg-salt p-6 md:p-9"
            >
              <h3 className="font-display text-[30px] leading-snug text-raisin">
                {group.title}
              </h3>
              <div className="mt-4 space-y-3.5">
                {group.paragraphs.map((paragraph, j) => (
                  <p key={j} className="text-base leading-[1.8] text-ink-muted">
                    <Tidy>{paragraph}</Tidy>
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Particular areas of interest ---------- */}
      <Section id="areas-of-interest">
        <Reveal>
          <Eyebrow>Particular areas of interest</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[46px] md:leading-[1.15]">
            Where I have particular experience
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6 md:mt-14">
          {areasOfInterest.map((area, i) => (
            <Reveal
              key={area.title}
              delay={i * 130}
              className={`grid gap-8 rounded-md p-6 md:grid-cols-[1fr_2fr] md:gap-16 md:p-14 ${
                area.featured
                  ? "bg-olive text-linen"
                  : "bg-linen text-ink-muted"
              }`}
            >
              <div>
                <h3
                  className={`font-display text-[30px] leading-[1.15] md:text-[34px] ${
                    area.featured ? "text-salt" : "text-raisin"
                  }`}
                >
                  <Tidy>{area.title}</Tidy>
                </h3>
                {area.subtitle ? (
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-parchment">
                    <Tidy>{area.subtitle}</Tidy>
                  </p>
                ) : null}
                {area.intro ? (
                  <p className="mt-4 text-[15px] leading-[1.75] text-label">
                    <Tidy>{area.intro}</Tidy>
                  </p>
                ) : null}
              </div>
              <div className="space-y-4">
                {area.paragraphs.map((paragraph, j) => (
                  <p key={j} className="text-[16.5px] leading-[1.8]">
                    <Tidy>{paragraph}</Tidy>
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Fees ---------- */}
      <Section id="fees" className="bg-linen">
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <Reveal>
            <Eyebrow>Fees</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[46px] md:leading-[1.15]">
              What sessions cost
            </h2>
            <p className="mt-5 max-w-sm text-base leading-[1.75] text-ink-muted">
              <Tidy>{feesIntro}</Tidy>
            </p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="border-t border-rule">
              {fees.map((f) => (
                <div
                  key={f.label}
                  className="flex items-baseline justify-between gap-6 border-b border-rule py-6"
                >
                  <dt className="text-base text-raisin md:text-[17px]">
                    <Tidy>{f.label}</Tidy>
                  </dt>
                  <dd className="shrink-0 font-display text-[28px] leading-none text-coffee md:text-[32px]">
                    {f.price}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-[14.5px] leading-[1.7] text-ink-muted">
              <Tidy>{feesNote}</Tidy>
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Ethics, Confidentiality & Your Privacy ---------- */}
      <Section inner="max-w-[760px]">
        <Reveal>
          <Eyebrow>Ethics &amp; Privacy</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[46px] md:leading-[1.15]">
            {ethics.title}
          </h2>
        </Reveal>
        <div className="mt-9 space-y-5">
          {ethics.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 100}>
              <p className="text-[17px] leading-[1.85] text-label">
                <Tidy>{paragraph}</Tidy>
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Closing ---------- */}
      <Section className="bg-olive" inner="max-w-2xl">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl leading-snug text-salt md:text-[46px] md:leading-[1.15]">
            Not sure where you fit?
          </h2>
          <p className="mt-5 text-lg leading-[1.75] text-parchment">
            <Tidy>
              That is a common place to start. A short conversation usually
              makes it clearer.
            </Tidy>
          </p>
          <div className="mt-9">
            <Button href="/contact" variant="light">
              Get in touch
            </Button>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
