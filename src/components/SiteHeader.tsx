"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { HeldMark } from "@/components/HeldMark";
import { announcement, nav, site } from "@/content/site";

const links = [...nav, { href: "/contact", label: "Book a call" }];

/*
  Announcement bar, a centred wordmark, then a full-width nav band set off by
  firmer rules above and below. A soft outlined highlight sits behind the
  current page and glides to whichever link is hovered or focused.
*/
export function SiteHeader() {
  const pathname = usePathname();
  const rowRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [highlight, setHighlight] = useState<{
    left: number;
    width: number;
  } | null>(null);

  const activeIndex = links.findIndex((l) => l.href === pathname);

  const moveTo = useCallback((index: number) => {
    const row = rowRef.current;
    const el = linkRefs.current[index];
    if (!row || !el) {
      setHighlight(null);
      return;
    }
    const r = row.getBoundingClientRect();
    const e = el.getBoundingClientRect();
    setHighlight({ left: e.left - r.left, width: e.width });
  }, []);

  const rest = useCallback(() => {
    if (activeIndex >= 0) moveTo(activeIndex);
    else setHighlight(null);
  }, [activeIndex, moveTo]);

  // Settle on the current page, and again whenever the layout reflows.
  // ResizeObserver also fires once when it starts, which places it initially.
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const observer = new ResizeObserver(rest);
    observer.observe(row);
    return () => observer.disconnect();
  }, [rest]);

  const link =
    "relative z-10 px-2 py-4 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 md:px-4 md:py-[17px] md:text-[12.5px] md:tracking-[0.16em]";

  return (
    <header>
      {/* Olive bar, salt wordmark block, then the linen nav band (as the canvas) */}
      <div className="bg-olive px-6 py-2.5">
        <p className="flex flex-wrap items-center justify-center gap-x-3 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-salt md:text-xs md:tracking-[0.18em]">
          <span>{announcement[0]}</span>
          <span aria-hidden className="hidden text-salt/60 sm:inline">
            ·
          </span>
          <span className="hidden sm:inline">{announcement[1]}</span>
        </p>
      </div>

      <div className="bg-salt px-6 pb-6 pt-7 md:pb-7 md:pt-8">
        <Link
          href="/"
          className="mx-auto flex w-fit flex-wrap items-center justify-center gap-x-4 gap-y-2"
        >
          <HeldMark
            id="held-header"
            tone="badge"
            className="h-12 w-12 shrink-0 md:h-14 md:w-14"
          />
          <span className="text-balance text-center font-display text-[26px] leading-tight tracking-[0.01em] text-raisin md:text-[36px]">
            {site.wordmark}
          </span>
        </Link>
      </div>

      <nav
        aria-label="Main"
        className="border-y border-rule bg-linen px-4 md:px-12 lg:px-20"
      >
        <div
          ref={rowRef}
          onMouseLeave={rest}
          className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between"
        >
          {/* The gliding highlight */}
          <span
            aria-hidden
            className={`pointer-events-none absolute top-1/2 h-8 -translate-y-1/2 rounded-full border border-rule bg-salt shadow-[0_1px_2px_rgba(34,35,26,0.06)] transition-[left,width,opacity] duration-300 ease-out motion-reduce:transition-none md:h-9 ${
              highlight ? "opacity-100" : "opacity-0"
            }`}
            style={{ left: highlight?.left ?? 0, width: highlight?.width ?? 0 }}
          />

          {links.map((item, i) => {
            const active = i === activeIndex;
            const isCta = item.href === "/contact";
            return (
              <Link
                key={item.href}
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onMouseEnter={() => moveTo(i)}
                onFocus={() => moveTo(i)}
                onBlur={rest}
                className={`${link} ${
                  isCta
                    ? "font-semibold text-coffee"
                    : active
                      ? "text-raisin"
                      : "text-label hover:text-raisin"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
