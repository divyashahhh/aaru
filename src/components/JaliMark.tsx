/*
  "Jali" mark: an arched window screen of eight-point stars with warm light
  coming through, after the carved stone screens of Gujarati and Mughal
  architecture. A jali keeps a room private while letting light in.

  `tone="badge"` sets it in a solid coffee disc so it anchors the header.
  `tone="dark"` has no disc, for the dark footer. `id` keeps the clip path
  unique when the mark appears more than once on a page.
*/
const palettes = {
  badge: {
    frame: "#f1ebe4",
    light: "#e2b07a",
    lattice: "#734e30",
    sill: "#c4c2a6",
  },
  dark: {
    frame: "#d19a63",
    light: "#ecd5bb",
    lattice: "#22231a",
    sill: "#b5b09a",
  },
};

const ARCH = "M20 88V44A30 30 0 0 1 80 44V88Z";
const CELL = 15;
const cells = [-3, -2, -1, 0, 1, 2, 3].flatMap((col) =>
  [0, 1, 2, 3, 4, 5].map((row) => ({
    x: 50 + col * CELL,
    y: 88 - CELL / 2 - row * CELL,
  })),
);
/* Half-widths of the square and the diamond that overlap to make each star */
const SQUARE = 4.65;
const DIAMOND = 6.6;

export function JaliMark({
  className = "",
  tone = "badge",
  id,
}: {
  className?: string;
  tone?: keyof typeof palettes;
  id: string;
}) {
  const c = palettes[tone];
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="Aarushi Shah Therapy logo"
      className={className}
    >
      {tone === "badge" ? (
        <circle cx="50" cy="50" r="50" fill="#734e30" />
      ) : null}
      <clipPath id={id}>
        <path d={ARCH} />
      </clipPath>
      {/* Inside the disc the window shrinks to leave an even margin */}
      <g
        transform={
          tone === "badge"
            ? "translate(50 50) scale(0.72) translate(-50 -53)"
            : undefined
        }
      >
        <path d={ARCH} fill={c.light} />
        <g
          clipPath={`url(#${id})`}
          fill="none"
          stroke={c.lattice}
          strokeWidth="1.7"
          strokeLinejoin="round"
        >
          {cells.map(({ x, y }) => (
            <g key={`${x}-${y}`}>
              <rect
                x={x - SQUARE}
                y={y - SQUARE}
                width={SQUARE * 2}
                height={SQUARE * 2}
              />
              <path
                d={`M${x} ${y - DIAMOND}L${x + DIAMOND} ${y}L${x} ${y + DIAMOND}L${x - DIAMOND} ${y}ZM${x + DIAMOND} ${y}H${x + CELL - DIAMOND}M${x} ${y + DIAMOND}V${y + CELL - DIAMOND}`}
              />
            </g>
          ))}
        </g>
        <path
          d={ARCH}
          fill="none"
          stroke={c.frame}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M12 89H88"
          stroke={c.sill}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
