"use client";

import { useState } from "react";
import { site } from "@/content/site";

/*
  Frontend-only: submitting opens the visitor's own email client with the
  message pre-filled. Nothing is transmitted to or stored by this site, which
  keeps sensitive enquiries out of any third-party inbox we don't control.
  If a hosted form is added later, it needs a considered privacy notice first.
*/
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `Enquiry from ${name || "the website"}`,
  )}&body=${encodeURIComponent(`${message}\n\n${name}\n${email}`)}`;

  /* 16px text keeps iOS Safari from zooming in when a field is focused */
  const field =
    "mt-2.5 block w-full rounded border border-rule bg-salt px-4 py-3.5 text-base text-raisin outline-none transition-colors focus:border-coffee focus:bg-white";
  const label = "text-xs font-medium uppercase tracking-[0.14em] text-label";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          A sentence or two is plenty. Please don&rsquo;t include sensitive
          personal or medical detail. We can cover that safely in conversation.
        </p>
      </div>

      <button
        type="submit"
        className="mt-8 rounded bg-raisin px-8 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-salt transition-colors hover:bg-noir md:text-[13px]"
      >
        Send message
      </button>

      <p className="mt-4 text-[13.5px] leading-relaxed text-ink-muted">
        This opens your own email app so you can review the message before
        sending.
      </p>
    </form>
  );
}
