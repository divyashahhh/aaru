/*
  "AS" monogram: an open ring with a gap at the lower right, a serif A with a
  tapered right stroke and foot, and a flowing S laid over it.

  The S is stroked twice — once in the disc colour at a wider width, then in
  the letter colour — so it reads as sitting above the A with a clean gap
  wherever the two cross.
*/
export function Monogram({
  className = "",
  bg = "var(--color-coffee)",
  fg = "var(--color-salt)",
}: {
  className?: string;
  bg?: string;
  fg?: string;
}) {
  const s =
    "M62 37c-4.6-6.2-15-5.6-18 1.6-3.2 7.4 4.6 12.2 10.7 16.3 6.9 4.7 10.7 11.2 6.9 17.8-4.1 7.1-14.8 7.6-19.9 3.3";

  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="Aarushi Cares monogram"
      className={className}
    >
      <circle cx="50" cy="50" r="50" fill={bg} />
      <path
        d="M56.25 85.45 A36 36 0 1 1 73.14 77.58"
        fill="none"
        stroke={fg}
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <g fill={fg}>
        <path d="M44.6 17 L47.8 17 L31 67 L27.6 67 Z" />
        <path d="M45.4 17 L49 17 L69.5 61 L63.2 62.6 Z" />
        <path d="M62 60.3 L75.5 60.3 L75.5 62.9 L62 62.9 Z" />
        <path d="M35 49.5 L58 49.5 L58 51.8 L34.1 51.8 Z" />
      </g>
      <g fill="none" strokeLinecap="round">
        <path d={s} stroke={bg} strokeWidth="6.8" />
        <path d={s} stroke={fg} strokeWidth="4.3" />
      </g>
    </svg>
  );
}
