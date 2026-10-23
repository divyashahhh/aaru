/*
  "Held" mark: two leaves curving up to cradle a small sun.

  Two leaves in different colours stand for the two people in the room; the
  sun between them is the client, and what they bring. The leaves' tips curl
  inward so the shape reads as holding rather than opening outward.

  `tone="dark"` lightens the leaves for use on the dark footer. `id` keeps the
  gradient ids unique when the mark appears more than once on a page.
*/
const palettes = {
  light: {
    left: ["#5f3f26", "#8c603b"],
    right: ["#3f4630", "#6b7450"],
    halo: "#c08a55",
    vein: "#f5f0e7",
  },
  dark: {
    left: ["#a87246", "#d19a63"],
    right: ["#8e9268", "#b9bc93"],
    halo: "#c08a55",
    vein: "#2e2118",
  },
};

export function HeldMark({
  className = "",
  tone = "light",
  id = "held",
}: {
  className?: string;
  tone?: "light" | "dark";
  id?: string;
}) {
  const c = palettes[tone];
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Aarushi Shah Therapy logo"
      className={className}
    >
      <defs>
        <linearGradient id={`${id}-l`} x1="0" y1="1" x2="0.3" y2="0">
          <stop offset="0" stopColor={c.left[0]} />
          <stop offset="1" stopColor={c.left[1]} />
        </linearGradient>
        <linearGradient id={`${id}-r`} x1="1" y1="1" x2="0.7" y2="0">
          <stop offset="0" stopColor={c.right[0]} />
          <stop offset="1" stopColor={c.right[1]} />
        </linearGradient>
        <radialGradient id={`${id}-s`} cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#e2b07a" />
          <stop offset="1" stopColor="#c08a55" />
        </radialGradient>
      </defs>
      <circle
        cx="32"
        cy="23"
        r="10.5"
        fill="none"
        stroke={c.halo}
        strokeWidth="0.9"
        opacity="0.5"
      />
      <circle cx="32" cy="23" r="6.4" fill={`url(#${id}-s)`} />
      <path
        d="M31.2 58 C18.4 56.4 7.6 44.6 11 19 C14.5 29.5 29.2 37.5 31.2 58 Z"
        fill={`url(#${id}-l)`}
      />
      <path
        d="M32.8 58 C45.6 56.4 56.4 44.6 53 19 C49.5 29.5 34.8 37.5 32.8 58 Z"
        fill={`url(#${id}-r)`}
      />
      <g
        fill="none"
        stroke={c.vein}
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.55"
      >
        <path d="M29.8 54.5 C26.5 44 19 34.5 12.4 23.5" />
        <path d="M34.2 54.5 C37.5 44 45 34.5 51.6 23.5" />
      </g>
    </svg>
  );
}
