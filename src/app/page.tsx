import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { RoomScene } from "@/components/RoomScene";
import { Button, Eyebrow, Section } from "@/components/ui";
import {
  areasIWorkWith,
  closing,
  hero,
  heroPhrases,
  multilingualTeaser,
  process,
  site,
  welcome,
} from "@/content/site";

export default function Home() {
  return (
    <main>
      {/* ---------- Hero ---------- */}
      <div className="relative overflow-hidden bg-salt">
        {/* Drifting colour blooms */}
        <div
          aria-hidden
          className="a-bloom absolute -left-24 -top-32 h-[28rem] w-[28rem] rounded-full bg-ember/50"
        />
        <div
          aria-hidden
          className="a-bloom absolute -right-20 top-10 h-[32rem] w-[32rem] rounded-full bg-mist/60"
          style={{ animationDelay: "-5s" }}
        />
        <div
          aria-hidden
          className="a-bloom absolute bottom-[-12rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-clay/40"
          style={{ animationDelay: "-9s" }}
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-20 lg:py-28">
          <div>
            <span className="a-rise inline-flex items-center gap-2 rounded-full border border-olive/25 bg-salt/70 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-olive backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-coffee" />
              Now accepting new clients
            </span>

            <h1
              className="a-rise mt-7 font-display text-5xl leading-[1.08] text-raisin md:text-6xl lg:text-7xl"
              style={{ animationDelay: "120ms" }}
            >
              {hero.headline}
            </h1>

            <p
              className="a-rise mt-7 max-w-md text-lg leading-relaxed text-ink-muted"
              style={{ animationDelay: "240ms" }}
            >
              {hero.subtext}
            </p>

            <div
              className="a-rise mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "360ms" }}
            >
              <Button href="/contact">Book a free consultation</Button>
              <Button href="/services" variant="outline">
                See how I can help
              </Button>
            </div>

            <div
              className="a-rise mt-12 flex flex-wrap gap-2.5"
              style={{ animationDelay: "480ms" }}
            >
              {heroPhrases.map((phrase) => (
                <span
                  key={phrase}
                  className="rounded-full border border-antique/35 bg-salt/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted backdrop-blur"
                >
                  {phrase}
                </span>
              ))}
            </div>
          </div>

          {/*
            A single arch, set off-centre, with one soft bloom behind it for
            depth. One composed image reads better here than two competing
            fragments.
          */}
          <div className="relative h-[30rem]">
            <div
              aria-hidden
              className="a-bloom absolute bottom-2 left-0 h-[21rem] w-[21rem] rounded-full bg-clay/45"
              style={{ animationDelay: "-6s" }}
            />
            <div className="a-drift absolute right-4 top-1 h-[27rem] w-[19rem]">
              <RoomScene className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Welcome ---------- */}
      <Section>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <Reveal direction="left">
            <Eyebrow>{welcome.heading}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-4xl">
              {welcome.subhead}
            </h2>
            <div className="mt-6 space-y-4">
              {welcome.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-ink-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                More about me
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            {/* Framed high so the wide arch crops to head and shoulders
                rather than through the middle of the portrait. */}
            <div className="h-[26rem] overflow-hidden rounded-t-full rounded-b-lg bg-linen">
              <Image
                src="/images/headshot.jpg"
                alt={site.practitioner}
                width={675}
                height={900}
                className="h-full w-full object-cover"
                style={{ objectPosition: "50% 55%" }}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Multilingual therapy ---------- */}
      <Section className="bg-linen">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Eyebrow>Multilingual Therapy</Eyebrow>
          <h2 className="mt-6 font-display text-4xl leading-[1.15] text-raisin md:text-5xl lg:text-6xl">
            {multilingualTeaser}
          </h2>
        </Reveal>
      </Section>

      {/* ---------- Areas I work with ---------- */}
      <Section>
        <Reveal>
          <Eyebrow>How I can help</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl leading-snug text-raisin md:text-4xl">
            Areas I work with most often
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-12">
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {areasIWorkWith.map((area) => (
              <li
                key={area}
                className="flex items-baseline gap-3 text-base text-ink-muted"
              >
                <span className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-coffee" />
                {area}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={200} className="mt-14">
          <Button href="/services" variant="outline">
            All services
          </Button>
        </Reveal>
      </Section>

      {/* ---------- Process ---------- */}
      <Section className="bg-noir text-salt">
        <Reveal>
          <h2 className="font-display text-4xl leading-snug md:text-5xl">
            What to Expect
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 130}>
              <span className="font-display text-3xl text-ember">{p.n}</span>
              <h3 className="mt-3 font-display text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-salt/70">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Closing CTA ---------- */}
      <Section className="bg-gradient-to-br from-parchment via-shell to-mist/70 text-center">
        <Reveal>
          <p className="mx-auto max-w-xl font-display text-2xl leading-snug text-raisin md:text-3xl">
            {closing}
          </p>
          <div className="mt-10">
            <Button href="/contact">Get in touch</Button>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
