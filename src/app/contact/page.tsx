import type { Metadata } from "next";
import { Eyebrow, Section } from "@/components/ui";
import { contactHeading, site } from "@/content/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: `Contact — ${site.practice}`,
  description: "Get in touch to arrange a free introductory conversation.",
};

export default function Contact() {
  return (
    <main>
      <Section className="bg-shell">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-4xl leading-snug text-ink md:text-5xl">
          {contactHeading}
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            href={site.calendlyUrl}
            className="inline-block rounded-full bg-sage px-8 py-3 text-xs uppercase tracking-[0.18em] text-cream transition-colors hover:bg-sage-deep"
          >
            Book via Calendly
          </a>
          <span className="text-sm text-ink-muted">
            Or send an enquiry by email
          </span>
        </div>
      </Section>

      <Section>
        <div className="grid gap-16 md:grid-cols-2">
          <ContactForm />

          <div className="h-fit rounded-lg border border-taupe/25 bg-shell p-8">
            <h2 className="font-display text-2xl text-ink">Directly</h2>
            <p className="mt-4 text-base text-ink">{site.email}</p>
            <p className="mt-1 text-base text-ink">{site.phone}</p>
            <p className="mt-6 text-sm leading-relaxed text-ink-muted">
              {site.modality}. I usually reply within [two working days].
            </p>
            <p className="subtitle mt-8 text-xs uppercase tracking-[0.1em]">
              Confidential &amp; BACP registered
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
