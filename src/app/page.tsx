import Image from "next/image";
import { AreaIcon } from "@/components/AreaIcon";
import { Reveal } from "@/components/Reveal";
import { Button, Eyebrow, Section } from "@/components/ui";
import {
  areasIWorkWith,
  closing,
  hero,
  heroPhrases,
  multilingualTeaser,
  process,
  welcome,
} from "@/content/site";

export default function Home() {
  return (
    <main>
      {/* ---------- Hero: the photo's own wall colour continues under the text ---------- */}
      <section
        className="flex flex-col md:flex-row"
        style={{
          background:
            "linear-gradient(180deg, #70491c 0%, #66421a 28%, #4a2e12 44%, #4a2e12 70%, #583914 84%, #573815 100%)",
        }}
      >
        <div
          className="flex min-w-0 flex-1 items-center px-6 py-16 md:py-28 md:pl-12 md:pr-10 lg:pl-[max(5rem,calc((100%-72rem)/2))]"
          style={{
            background:
              "linear-gradient(90deg, rgba(26,15,5,0.6) 0%, rgba(26,15,5,0.42) 55%, rgba(26,15,5,0) 100%)",
          }}
        >
          <div className="w-full min-w-0 max-w-[36rem]">
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
              className="a-rise mt-6 text-left text-[14.5px] font-medium leading-relaxed tracking-[0.03em] text-ember"
              style={{ animationDelay: "200ms" }}
            >
              {heroPhrases.map((phrase, i) => (
                <span key={phrase}>
                  <span className="whitespace-nowrap">{phrase}</span>
                  {/* Real spaces either side so the line can wrap here */}
                  {i < heroPhrases.length - 1 ? (
                    <>
                      {" "}
                      <span aria-hidden className="px-1 text-ember/60">
                        ·
                      </span>{" "}
                    </>
                  ) : null}
                </span>
              ))}
            </p>

            <p
              className="a-rise mt-5 max-w-[30rem] text-lg leading-relaxed text-linen"
              style={{ animationDelay: "280ms" }}
            >
              {hero.subtext}
            </p>

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
        </div>

        <div className="fade-left relative min-h-[24rem] flex-1 overflow-hidden md:min-h-[44rem]">
          <Image
            src="/images/hero-room.jpg"
            alt="A warmly lit room with a cane armchair, a small side table and dried pampas in a vase"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="-scale-x-100 object-cover object-[50%_72%]"
          />
        </div>
      </section>

      {/* ---------- Welcome ---------- */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <Reveal>
            <Eyebrow>{welcome.heading}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[40px] md:leading-[1.2]">
              {welcome.subhead}
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:border-l md:border-rule md:pl-12">
            <div className="space-y-5">
              {welcome.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-[17px] leading-[1.8] text-label">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-9">
              <Button href="/about" variant="outline">
                More about me
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Areas I work with ---------- */}
      <Section className="border-y border-parchment bg-linen">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>How I can help</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-snug text-raisin md:text-[44px] md:leading-[1.15]">
            Areas I work with most often
          </h2>
        </Reveal>

        {/* Each area on its own quiet tile */}
        <ul className="mt-14 flex flex-wrap justify-center gap-4 md:mt-16 md:gap-5">
          {areasIWorkWith.map((area, i) => (
            <Reveal
              as="li"
              key={area.label}
              delay={i * 90}
              className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.7rem)] lg:w-[calc(20%-1rem)]"
            >
              <div className="flex h-full flex-col items-center rounded-md border border-parchment bg-salt px-4 py-8 text-center transition-colors duration-300 hover:border-rule md:py-10">
                <AreaIcon
                  name={area.icon}
                  className="h-20 w-20 md:h-[5.5rem] md:w-[5.5rem]"
                />
                <h3 className="mt-5 max-w-[11rem] font-display text-lg leading-snug text-raisin md:text-[21px]">
                  {area.label}
                </h3>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200} className="mt-14 text-center md:mt-16">
          <Button href="/services" variant="outline">
            Get to know more
          </Button>
        </Reveal>
      </Section>

      {/* ---------- Multilingual ---------- */}
      <Section className="bg-olive" inner="max-w-3xl">
        <Reveal className="text-center">
          <Eyebrow dark>Multilingual Therapy</Eyebrow>
          <h2 className="mt-5 font-display text-3xl leading-[1.2] text-salt md:text-5xl">
            {multilingualTeaser}
          </h2>
        </Reveal>
      </Section>

      {/* ---------- What to Expect ---------- */}
      <Section className="bg-linen">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight text-raisin md:text-[52px]">
            What to Expect
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
          {process.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 130}
              className="border-t border-rule pt-7"
            >
              <span className="font-display text-[34px] leading-none text-clay">
                {p.n}
              </span>
              <h3 className="mt-4 font-display text-[26px] leading-snug text-raisin">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[15.5px] leading-[1.75] text-ink-muted">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Closing CTA ---------- */}
      <Section inner="max-w-3xl">
        <Reveal className="text-center">
          <p className="font-display text-[28px] leading-[1.25] text-raisin md:text-[42px]">
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
