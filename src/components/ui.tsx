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
      className={`scroll-mt-8 px-6 py-16 md:px-12 md:py-28 lg:px-20 ${className}`}
    >
      <div className={`mx-auto ${inner}`}>{children}</div>
    </section>
  );
}

/*
  Buttons from the redesign canvas, with corners softened slightly.
  dark: on light grounds. light / ghost: on dark grounds. outline: secondary.
*/
const buttonStyles = {
  dark: "bg-raisin text-salt hover:bg-noir",
  light: "bg-salt text-raisin hover:bg-white",
  ghost: "border border-salt/55 text-salt hover:bg-salt/10",
  outline: "border border-raisin text-raisin hover:bg-raisin hover:text-salt",
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
      className={`inline-block rounded px-7 py-4 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 md:text-[13px] ${buttonStyles[variant]}`}
    >
      {children}
    </Link>
  );
}
