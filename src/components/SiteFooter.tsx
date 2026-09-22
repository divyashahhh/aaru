import Link from "next/link";
import { Monogram } from "@/components/Monogram";
import { credentials, nav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-raisin text-salt">
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-14 md:px-12 lg:px-20">
        {/* Brand + nav */}
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6 border-b border-salt/15 pb-10">
          <div className="flex items-center gap-3">
            <Monogram
              className="h-9 w-9"
              bg="var(--color-coffee)"
              fg="var(--color-salt)"
            />
            <span className="leading-tight">
              <span className="block font-display text-lg tracking-wide">
                {site.practice}
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-mist">
                {site.name}
              </span>
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.14em] text-salt/85 transition-colors hover:text-ember"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Credentials + contact — same box, on every page */}
        <div className="grid gap-10 py-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-mist">
              Credentials
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {credentials.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-salt/25 px-4 py-1.5 text-xs text-salt/95"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-mist">
              Get in touch
            </p>
            <p className="mt-4 text-salt/95">{site.email}</p>
            <p className="text-salt/95">{site.phone}</p>
            <p className="mt-2 text-sm text-salt/80">{site.modality}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-salt/15 pt-5">
          <p className="text-[11px] text-salt/70">
            In crisis or need urgent help? This site isn&rsquo;t the right
            place. Please contact your local emergency services.
          </p>
          <p className="text-[11px] text-salt/60">
            © {new Date().getFullYear()} {site.practice}
          </p>
        </div>
      </div>
    </footer>
  );
}
