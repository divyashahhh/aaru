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
  )}&body=${encodeURIComponent(
    `${message}\n\n${name}\n${email}`,
  )}`;

  const field =
    "mt-2 w-full rounded-lg border border-taupe/40 bg-cream px-4 py-3 text-base text-ink outline-none transition-colors focus:border-sage";
  const label = "text-xs uppercase tracking-[0.16em] text-ink-muted";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
      className="max-w-lg"
    >
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

      <div className="mt-6">
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

      <div className="mt-6">
        <label className={label} htmlFor="message">
          What brings you here?
        </label>
        <textarea
          id="message"
          rows={5}
          className={field}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <p className="mt-2 text-xs leading-relaxed text-ink-muted">
          A sentence or two is plenty. Please don&rsquo;t include sensitive
          personal or medical detail; we can cover that safely in conversation.
        </p>
      </div>

      <button
        type="submit"
        className="mt-8 rounded-full bg-sage px-8 py-3 text-xs uppercase tracking-[0.18em] text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-sage-deep hover:shadow-md active:translate-y-0"
      >
        Send message
      </button>

      <p className="mt-4 text-xs text-ink-muted">
        This opens your own email app so you can review the message before
        sending.
      </p>
    </form>
  );
}
