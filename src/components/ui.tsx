import Link from "next/link";

export function Eyebrow({
  children,
  dark = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p className={`eyebrow ${dark ? "eyebrow-on-dark" : ""} ${className}`}>
      {children}
    </p>
  );
}

export function Section({
  children,
  className = "",
  inner = "max-w-6xl",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  /* Width of the content column; narrow for long reading sections */
  inner?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-8 px-5 py-14 md:px-12 md:py-24 lg:px-20 ${className}`}
    >
      <div className={`mx-auto ${inner}`}>{children}</div>
    </section>
  );
}

/*
  Rounded panels that give text a surface to sit on instead of floating on
  the page background.
  light: porcelain card. warm / apricot: warm tints. dark: cocoa-to-caramel
  and green: forest-to-fern, for emphasis. sage: a pale green tint.
*/
const panelTones = {
  light:
    "border border-parchment/80 bg-porcelain shadow-[0_1px_2px_rgba(79,51,33,0.05),0_12px_32px_-24px_rgba(79,51,33,0.35)]",
  warm: "bg-blush",
  apricot: "bg-apricot/70",
  dark: "bg-gradient-to-br from-cocoa via-coffee to-caramel text-salt",
  green: "bg-gradient-to-br from-forest via-moss to-fern text-salt",
  sage: "border border-fern/25 bg-sage-tint",
};

export function Panel({
  children,
  className = "",
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: keyof typeof panelTones;
}) {
  return (
    <div
      className={`rounded-xl p-6 md:rounded-2xl md:p-10 ${panelTones[tone]} ${className}`}
    >
      {children}
    </div>
  );
}

export function Pill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] ${className}`}
    >
      {children}
    </span>
  );
}

/*
  dark: on light grounds. light / ghost: on dark grounds. outline: secondary.
*/
const buttonStyles = {
  dark: "bg-coffee text-salt hover:bg-cocoa",
  light: "bg-salt text-cocoa hover:bg-white",
  ghost: "border border-salt/55 text-salt hover:bg-salt/10",
  outline:
    "border border-coffee/60 text-coffee hover:border-coffee hover:bg-coffee hover:text-salt",
};

export function Button({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof buttonStyles;
}) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-md px-7 py-4 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 md:text-[13px] ${buttonStyles[variant]}`}
    >
      {children}
    </Link>
  );
}
