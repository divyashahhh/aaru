import Link from "next/link";
import { HeldMark } from "@/components/HeldMark";
import { credentials, hero, nav, site } from "@/content/site";

export function SiteFooter() {
  const heading =
    "mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-dune";

  return (
    <footer className="mt-auto bg-umber text-salt">
      <div className="px-6 pb-9 pt-16 md:px-12 md:pt-20 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 border-b border-salt/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_0.6fr]">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <HeldMark
                  id="held-footer"
                  tone="dark"
                  className="h-12 w-12 shrink-0"
                />
                <div>
                  <p className="font-display text-[28px] leading-none text-salt">
                    {site.name}
                  </p>
                  <p className="mt-2 text-[10.5px] font-medium uppercase tracking-[0.42em] text-dune">
                    {site.discipline}
                  </p>
                </div>
              </div>
              <p className="mt-6 max-w-xs text-[14.5px] leading-relaxed text-parchment">
                {hero.subtext}
              </p>
            </div>

            {/* Credentials */}
            <div>
              <p className={heading}>Credentials</p>
              <ul className="space-y-2.5 text-sm leading-snug text-parchment">
                {credentials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className={heading}>Get in touch</p>
              <a
                href={`mailto:${site.email}`}
                className="block break-words text-[15.5px] text-salt transition-colors hover:text-ember"
              >
                {site.email}
              </a>
              <a
                href={site.phoneHref}
                className="mt-2 block text-[15.5px] text-salt transition-colors hover:text-ember"
              >
                {site.phone}
              </a>
              <p className="mt-2 text-sm text-dune">{site.modality}</p>
            </div>

            {/* Explore */}
            <div>
              <p className={heading}>Explore</p>
              <ul className="space-y-2.5 text-[14.5px]">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-parchment transition-colors hover:text-ember"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="text-ember transition-colors hover:text-salt"
                  >
                    Book a call
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-x-8 gap-y-3 pt-6 text-[12.5px] text-dune">
            <p>
              In crisis or need urgent help? This site isn&rsquo;t the right
              place. Please contact your local emergency services.
            </p>
            <p>
              © {new Date().getFullYear()} {site.practice}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
