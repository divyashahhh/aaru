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
