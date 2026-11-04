"use client";

import { useState } from "react";
import { Tidy } from "@/components/ui";
import { site } from "@/content/site";

/*
  Frontend-only: submitting opens a draft in Gmail or Outlook, laid out in a
  fixed format and addressed to the practice. The visitor reviews it and presses
  send themselves, so nothing is transmitted to or stored by this site.
*/

/* Very long links can be cut off, so the message is capped */
const MESSAGE_LIMIT = 1500;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [draftUrl, setDraftUrl] = useState("");
  const [copied, setCopied] = useState<"idle" | "done" | "failed">("idle");

  const subject = `Website enquiry from ${name.trim().replace(/\s+/g, " ")}`;
  const draft = `Name: ${name.trim()}
Email: ${email.trim()}

What brings you here:
${message.trim()}

Sent from the enquiry form on the website.`;
  const to = encodeURIComponent(site.email);
  const su = encodeURIComponent(subject);
  const body = encodeURIComponent(draft);
  const composeUrls: Record<string, string> = {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}&body=${body}`,
  };

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied("done");
    } catch {
      setCopied("failed");
    }
  }

  /* 16px text keeps iOS Safari from zooming in when a field is focused */
  const field =
    "mt-2.5 block w-full rounded border border-rule bg-salt px-4 py-3.5 text-base text-raisin outline-none transition-colors focus:border-coffee focus:bg-white";
  const label = "text-xs font-medium uppercase tracking-[0.14em] text-label";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const submitter = e.nativeEvent.submitter as HTMLButtonElement;
        const url = composeUrls[submitter.value];
        setCopied("idle");
        setDraftUrl(url);
        window.open(url, "_blank", "noopener");
      }}
      className="min-w-0"
    >
      <h2 className="mb-8 font-display text-[32px] leading-tight text-raisin">
        Send an enquiry
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            className={field}
            autoComplete="name"
            maxLength={120}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={field}
            autoComplete="email"
            maxLength={254}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mt-6">
        <label className={label} htmlFor="message">
          What brings you here?
        </label>
        <textarea
          id="message"
          rows={6}
          className={field}
          maxLength={MESSAGE_LIMIT}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          <Tidy>
            A sentence or two is plenty. Please don’t include sensitive personal
            or medical detail. We can cover that safely in conversation.
          </Tidy>
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {[
          ["gmail", "Open in Gmail"],
          ["outlook", "Open in Outlook"],
        ].map(([value, text]) => (
          <button
            key={value}
            type="submit"
            value={value}
            className="rounded bg-raisin px-7 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-salt transition-colors hover:bg-noir md:text-[13px]"
          >
            {text}
          </button>
        ))}
      </div>

      <p className="mt-4 text-[13.5px] leading-relaxed text-ink-muted">
        <Tidy>
          This opens a draft in a new tab, ready for you to review and send. If
          you use another email service, please write to the address shown on
          this page.
        </Tidy>
      </p>

      {/* The site can't tell whether a draft opened, so always offer a way on */}
      {draftUrl ? (
        <div
          role="status"
          className="mt-6 rounded-md border border-rule bg-salt p-5 text-[15px] leading-relaxed text-label"
        >
          <p className="text-left font-medium text-raisin">
            Your draft is ready. Press send there to reach me.
          </p>
          <p className="mt-2 text-left">
            Nothing opened? Copy your message and email it to{" "}
            <span className="whitespace-nowrap font-medium">{site.email}</span>.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
            <button
              type="button"
              onClick={copyDraft}
              className="rounded border border-raisin px-4 py-2.5 text-[12px] font-medium uppercase tracking-[0.12em] text-raisin transition-colors hover:bg-raisin hover:text-salt"
            >
              {copied === "done" ? "Copied" : "Copy my message"}
            </button>
            <a
              href={draftUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-coffee underline decoration-coffee/40 underline-offset-[5px] hover:decoration-coffee"
            >
              Open the draft again
            </a>
          </div>
          {copied === "failed" ? (
            <p className="mt-3 text-left text-coffee">
              Your browser blocked copying. Please select your message above and
              copy it by hand.
            </p>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}
