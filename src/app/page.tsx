import Image from "next/image";
import { AreaIcon } from "@/components/AreaIcon";
import { Reveal } from "@/components/Reveal";
import { Button, Eyebrow, Panel, Pill, Section } from "@/components/ui";
import {
  areasIWorkWith,
  closing,
  hero,
  heroPhrases,
  languages,
  multilingualTeaser,
  process,
  welcome,
} from "@/content/site";

export default function Home() {
  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section
        className="px-5 py-14 md:px-12 md:py-20 lg:px-20"
        style={{
          background:
            "radial-gradient(120% 95% at 85% 15%, #86603f 0%, #634530 45%, #3d2b1f 100%)",
        }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div className="min-w-0">
            {/* Solid and pulsing so it's the first thing the eye lands on */}
            <span className="a-rise inline-flex items-center gap-3 rounded-full bg-salt px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-coffee shadow-lg shadow-black/25 ring-4 ring-ember/35">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ember" />
              </span>
              Now accepting new clients
            </span>

            <h1
              className="a-rise mt-7 font-display text-[2.75rem] leading-[1.04] text-salt md:text-6xl lg:text-[68px]"
              style={{ animationDelay: "120ms" }}
            >
              {hero.headline}
            </h1>

            <p
              className="a-rise mt-6 max-w-[30rem] text-lg leading-relaxed text-blush/90"
              style={{ animationDelay: "200ms" }}
            >
              {hero.subtext}
            </p>

            <ul
              className="a-rise mt-7 flex flex-wrap gap-2.5"
              style={{ animationDelay: "280ms" }}
            >
              {heroPhrases.map((phrase) => (
                <li key={phrase}>
                  <Pill className="border border-apricot/30 bg-salt/10 text-apricot">
                    {phrase}
                  </Pill>
                </li>
              ))}
            </ul>

            <div
              className="a-rise mt-10 flex flex-wrap gap-3.5"
              style={{ animationDelay: "360ms" }}
            >
              <Button href="/contact" variant="light">
                Book a free consultation
              </Button>
              <Button href="/services" variant="ghost">
                See how I can help
              </Button>
            </div>
          </div>

          <div
            className="a-rise clip-safe relative mx-auto h-[26rem] w-full max-w-[24rem] overflow-hidden rounded-2xl ring-1 ring-apricot/20 md:h-[36rem] md:max-w-[28rem]"
            style={{ animationDelay: "240ms" }}
          >
            <Image
              src="/images/hero-room.jpg"
              alt="A warmly lit room with a cane armchair, a small side table and dried pampas in a vase"
              fill
              priority
              sizes="(min-width: 768px) 28rem, 100vw"
              className="-scale-x-100 object-cover object-[50%_72%]"
            />
          </div>
        </div>
      </section>

      {/* ---------- Welcome ---------- */}
      <Section>
        <Reveal>
          <Panel className="grid gap-8 md:grid-cols-[1fr_1.15fr] md:gap-16 md:p-14">
            <div>
              <Eyebrow>{welcome.heading}</Eyebrow>
              <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[40px] md:leading-[1.2]">
                {welcome.subhead}
              </h2>
            </div>
            <div>
              <div className="space-y-5">
                {welcome.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-[17px] leading-[1.8] text-label">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/about" variant="outline">
                  More about me
                </Button>
              </div>
            </div>
          </Panel>
        </Reveal>
      </Section>

      {/* ---------- Areas I work with ---------- */}
      <Section className="bg-linen">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>How I can help</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[44px] md:leading-[1.15]">
            Areas I work with most often
          </h2>
        </Reveal>

        {/* Each area sits on its own card */}
        <ul className="mt-12 flex flex-wrap justify-center gap-4 md:mt-14 md:gap-5">
          {areasIWorkWith.map((area, i) => (
            <Reveal
              as="li"
              key={area.label}
              delay={i * 90}
              className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.7rem)] lg:w-[calc(20%-1rem)]"
            >
              <div className="flex h-full flex-col items-center rounded-2xl border border-parchment bg-porcelain px-4 py-8 text-center transition-shadow duration-300 hover:shadow-[0_14px_30px_-22px_rgba(79,51,33,0.5)] md:py-10">
                <AreaIcon
                  name={area.icon}
                  className="h-20 w-20 md:h-[5.5rem] md:w-[5.5rem]"
                />
                <h3 className="mt-5 max-w-[10rem] font-display text-lg leading-snug text-raisin md:text-[21px]">
                  {area.label}
                </h3>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200} className="mt-12 text-center md:mt-14">
          <Button href="/services" variant="outline">
            Get to know more
          </Button>
        </Reveal>
      </Section>

      {/* ---------- Multilingual ---------- */}
      <Section>
        <Reveal>
          <Panel tone="green" className="text-center md:px-16 md:py-16">
            <Eyebrow dark>Multilingual Therapy</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl leading-[1.2] text-salt md:text-5xl">
              {multilingualTeaser}
            </h2>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {languages.map((language) => (
                <li key={language}>
                  <Pill className="bg-salt/15 text-blush ring-1 ring-salt/25">
                    {language}
                  </Pill>
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>
      </Section>

      {/* ---------- What to Expect ---------- */}
      <Section className="bg-linen">
        <Reveal className="text-center">
          <Eyebrow>Getting started</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight text-raisin md:text-[52px]">
            What to Expect
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {process.map((p, i) => (
            <Reveal as="li" key={p.n} delay={i * 130}>
              <Panel className="h-full md:p-9">
                <span className="font-display text-[34px] leading-none text-clay">
                  {p.n}
                </span>
                <h3 className="mt-5 font-display text-[26px] leading-snug text-raisin">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[15.5px] leading-[1.75] text-ink-muted">
                  {p.body}
                </p>
              </Panel>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ---------- Closing CTA ---------- */}
      <Section>
        <Reveal>
          <Panel tone="apricot" className="text-center md:px-20 md:py-16">
            <p className="mx-auto max-w-2xl font-display text-[28px] leading-[1.25] text-cocoa md:text-[40px]">
              {closing}
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
