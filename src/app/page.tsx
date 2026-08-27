import { Reveal } from "@/components/Reveal";
import { Button, Eyebrow, Photo, Section } from "@/components/ui";
import {
  areasIWorkWith,
  closing,
  hero,
  heroPhrases,
  languages,
  multilingualTeaser,
  process,
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
              className="a-rise mt-12 flex flex-wrap gap-x-10 gap-y-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted"
              style={{ animationDelay: "480ms" }}
            >
              {heroPhrases.map((phrase) => (
                <span key={phrase}>{phrase}</span>
              ))}
            </div>
          </div>

          {/* Floating arch collage */}
          <div className="relative h-[30rem]">
            <div className="a-drift absolute right-0 top-0 h-[24rem] w-[17rem]">
              <Photo arch className="h-full w-full" label="The therapy room" />
            </div>
            <div
              className="a-drift absolute bottom-0 left-0 h-[15rem] w-[13rem]"
              style={{ animationDelay: "-4s" }}
            >
              <Photo tone="deep" className="h-full w-full" label="Detail" />
            </div>
            <div
              aria-hidden
              className="a-drift absolute bottom-24 right-8 h-20 w-20 rounded-full bg-coffee/80"
              style={{ animationDelay: "-2s" }}
            />
          </div>
        </div>
      </div>

      {/* ---------- Welcome ---------- */}
      <Section>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <Reveal direction="left">
            <Eyebrow>Welcome</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-4xl">
              Find your path to <em className="italic text-coffee">healing</em>{" "}
              and connection
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted">
              Life can feel overwhelming, and reaching out for help takes
              courage. My work is with individuals navigating anxiety, grief,
              difficult experiences and the periods of change that leave you
              unsure of your footing.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Together we explore what you are carrying, without rush and
              without judgement, so you can engage with your life with renewed
              purpose.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                More about me
              </Button>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <Photo
              arch
              tone="olive"
              className="h-[26rem]"
              label="Portrait / calm interior"
            />
          </Reveal>
        </div>
      </Section>

      {/* ---------- Multilingual therapy ---------- */}
      <Section className="bg-linen">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          <Reveal direction="left">
            <Eyebrow>Multilingual Therapy</Eyebrow>
            <h2 className="mt-4 max-w-lg font-display text-3xl leading-snug text-raisin md:text-4xl">
              {multilingualTeaser}
            </h2>
          </Reveal>
          <Reveal
            direction="right"
            delay={120}
            className="grid grid-cols-3 gap-3 md:grid-cols-1"
          >
            {languages.map((lang) => (
              <div
                key={lang}
                className="rounded-lg border border-antique/30 bg-cream px-6 py-5 text-center md:text-left"
              >
                <span className="font-display text-xl text-coffee">
                  {lang}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
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
          <p className="text-xs uppercase tracking-[0.18em] text-mist">
            What to expect
          </p>
          <h2 className="mt-4 font-display text-3xl leading-snug md:text-4xl">
            Starting is simpler than it feels
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
          <h2 className="mx-auto max-w-xl font-display text-3xl leading-snug text-raisin md:text-4xl">
            When you are ready, I am here
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-muted">
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
