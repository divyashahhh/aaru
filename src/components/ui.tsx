import Link from "next/link";

export function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p className={`eyebrow ${dark ? "eyebrow-on-dark" : ""}`}>{children}</p>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 py-24 md:px-12 lg:px-20 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Button({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-block rounded-full px-8 py-3 text-xs uppercase tracking-[0.18em] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-none";
  const styles =
    variant === "solid"
      ? "bg-sage text-cream hover:bg-sage-deep"
      : "border border-taupe text-ink hover:border-sage hover:text-sage-deep";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

/*
  Stand-in for photography. Real images (calm interiors, plants, natural light)
  drop in here later — kept as CSS so the prototype makes no external requests.
*/
export function Photo({
  className = "",
  arch = false,
  label = "Photograph",
  tone = "warm",
}: {
  className?: string;
  arch?: boolean;
  label?: string;
  tone?: "warm" | "deep" | "olive" | "light";
}) {
  const tones = {
    warm: "bg-gradient-to-br from-ember via-clay to-coffee text-salt/70",
    deep: "bg-gradient-to-br from-antique via-olive to-raisin text-salt/70",
    olive: "bg-gradient-to-br from-mist via-antique to-olive text-salt/70",
    light: "bg-gradient-to-br from-linen via-parchment to-mist text-ink/40",
  };
  return (
    <div
      className={`flex items-end justify-center ${tones[tone]} ${
        arch ? "rounded-t-full rounded-b-lg" : "rounded-lg"
      } ${className}`}
    >
      <span className="mb-6 text-[10px] uppercase tracking-[0.2em]">
        {label}
      </span>
    </div>
  );
}
