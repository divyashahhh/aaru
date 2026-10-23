import type { Metadata } from "next";
import { Eyebrow, Panel, Section } from "@/components/ui";
import { contactHeading, site } from "@/content/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: `Contact | ${site.practice}`,
  description: "Get in touch to arrange a free introductory conversation.",
};

export default function Contact() {
  return (
    <main>
      <Section className="bg-linen">
        <Panel className="max-w-4xl md:p-12">
          <Eyebrow className="a-rise">Contact</Eyebrow>
          <h1
            className="a-rise mt-5 font-display text-[2.5rem] leading-[1.08] text-raisin md:text-[58px]"
            style={{ animationDelay: "100ms" }}
          >
            {contactHeading}
          </h1>

          <div
            className="a-rise mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
            style={{ animationDelay: "200ms" }}
          >
            {/* Calendly link pending from client (site.calendlyUrl) */}
            <a
              href={site.calendlyUrl}
              className="inline-block rounded-md bg-coffee px-7 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-salt transition-colors hover:bg-cocoa md:text-[13px]"
            >
              Book your 1st appointment
            </a>
            <a
              href="#enquiry"
              className="text-[15px] text-coffee underline decoration-coffee/40 underline-offset-[5px] hover:decoration-coffee"
            >
              Or send an enquiry by email
            </a>
          </div>
        </Panel>
      </Section>

      <Section id="enquiry">
        <div className="grid items-start gap-5 md:grid-cols-[1.4fr_1fr] md:gap-6">
          <Panel className="md:p-10">
            <ContactForm />
          </Panel>

          <Panel tone="dark" className="md:p-10">
            <h2 className="font-display text-[32px] leading-tight text-salt">
              Contact Details
            </h2>
            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="block break-words text-[17px] text-salt hover:text-apricot"
              >
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="block text-[17px] text-salt hover:text-apricot"
              >
                {site.phone}
              </a>
              <p className="text-[15.5px] text-blush/85">{site.modality}.</p>
              <p className="text-[15.5px] text-blush/85">
                Replies within two working days
              </p>
            </div>
            <p className="mt-7 inline-flex rounded-full bg-salt/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-apricot ring-1 ring-salt/25">
              Confidential &amp; BACP registered
            </p>
          </Panel>
        </div>
      </Section>
    </main>
  );
}
