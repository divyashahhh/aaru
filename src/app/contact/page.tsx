import type { Metadata } from "next";
import { Eyebrow, Section, Tidy } from "@/components/ui";
import { contactHeading, site } from "@/content/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: `Contact | ${site.practice}`,
  description: "Get in touch to arrange a free introductory conversation.",
};

export default function Contact() {
  return (
    <main>
      <Section>
        <div className="max-w-3xl">
          <Eyebrow className="a-rise">Contact</Eyebrow>
          <h1
            className="a-rise mt-5 font-display text-[2.5rem] leading-[1.08] text-raisin md:text-[58px]"
            style={{ animationDelay: "100ms" }}
          >
            <Tidy>{contactHeading}</Tidy>
          </h1>

          <div
            className="a-rise mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
            style={{ animationDelay: "200ms" }}
          >
            <a
              href={site.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-raisin px-7 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-salt transition-colors hover:bg-noir md:text-[13px]"
            >
              Book your free call
            </a>
            <a
              href="#enquiry"
              className="text-[15px] text-coffee underline decoration-coffee/40 underline-offset-[5px] hover:decoration-coffee"
            >
              Or send an enquiry by email
            </a>
          </div>
        </div>
      </Section>

      <Section id="enquiry" className="bg-linen">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <ContactForm />

          <aside className="rounded-md bg-salt p-7 md:p-10">
            <h2 className="font-display text-[32px] leading-tight text-raisin">
              Contact Details
            </h2>
            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="block break-words text-[17px] text-raisin hover:text-coffee"
              >
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="block text-[17px] text-raisin hover:text-coffee"
              >
                {site.phone}
              </a>
              <p className="text-[15.5px] text-ink-muted">{site.modality}.</p>
              <p className="text-[15.5px] text-ink-muted">
                <Tidy>Replies within two working days</Tidy>
              </p>
            </div>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-coffee">
              <Tidy>Confidential &amp; BACP registered</Tidy>
            </p>
          </aside>
        </div>
      </Section>
    </main>
  );
}
