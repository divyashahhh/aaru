"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Monogram } from "@/components/Monogram";
import { nav, site } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-raisin px-6 py-2.5">
        <p className="mx-auto flex max-w-6xl items-center justify-center gap-2.5 text-center text-[13px] font-medium tracking-[0.08em] text-salt">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
          </span>
          {site.modality}
          <span className="hidden text-antique sm:inline">·</span>
          <span className="hidden text-salt/80 sm:inline">
            Free 20-minute consultation
          </span>
        </p>
      </div>

      {/* Main bar */}
      <div className="border-b border-antique/25 bg-salt/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-12 lg:px-20">
          {/* Wordmark + monogram */}
          <Link href="/" className="group flex items-center gap-3">
            <Monogram className="h-11 w-11 transition-transform duration-500 group-hover:rotate-[8deg]" />
            <span className="font-display text-2xl tracking-wide text-raisin">
              {site.practice}
            </span>
          </Link>

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative py-1 text-[13px] font-medium tracking-[0.1em] uppercase transition-colors ${
                    active ? "text-coffee" : "text-raisin hover:text-coffee"
                  }`}
                >
                  {item.label}
                  {/* underline grows from the left on hover, stays put when active */}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-coffee transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="rounded-full bg-coffee px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.14em] text-salt shadow-sm transition-colors hover:bg-raisin"
            >
              Book a call
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
