/*
  Small animated line icons for "Areas I work with most often". Each moves
  slowly and continuously; the motion carries the meaning:

  waves   – Anxiety, stress & depression: choppy water settling into a rhythm
  rings   – Family, attachment & relationships: two circles drawing together
  compass – Life transitions & uncertainty: a needle searching, then settling
  globe   – Identity & culture: a slowly turning world
  moon    – Reproductive & hormonal health: the phases of a cycle

  Animations live in globals.css (.ai-*) and stop under reduced motion.
*/
export type AreaIconName = "waves" | "rings" | "compass" | "globe" | "moon";

const C = {
  stroke: "var(--color-coffee)",
  moss: "var(--color-moss)",
  ember: "var(--color-ember)",
  disc: "var(--color-salt)",
};

export function AreaIcon({
  name,
  className = "",
}: {
  name: AreaIconName;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      {icons[name]}
    </svg>
  );
}

/* A wave with a 32-unit period, long enough to slide one period and loop. */
const wave = (y: number, a: number) =>
  `M-16 ${y} q8 ${-a} 16 0 t16 0 t16 0 t16 0 t16 0 t16 0`;

const icons: Record<AreaIconName, React.ReactNode> = {
  waves: (
    <>
      <defs>
        <clipPath id="ai-waves-clip">
          <circle cx="32" cy="32" r="22" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="22" fill={C.disc} />
      <g
        clipPath="url(#ai-waves-clip)"
        fill="none"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <path className="ai-wave" d={wave(23, 5)} stroke={C.stroke} />
        <path
          className="ai-wave ai-wave-2"
          d={wave(32, 3.5)}
          stroke={C.ember}
        />
        <path
          className="ai-wave ai-wave-3"
          d={wave(41, 2)}
          stroke={C.moss}
        />
      </g>
      <circle
        cx="32"
        cy="32"
        r="22"
        fill="none"
        stroke={C.stroke}
        strokeWidth="1.6"
      />
    </>
  ),

  rings: (
    <>
      <circle
        cx="32"
        cy="32"
        r="22"
        fill={C.disc}
        stroke={C.stroke}
        strokeWidth="1.6"
      />
      <g fill="none" strokeWidth="1.8">
        <circle
          className="ai-ring-l"
          cx="26"
          cy="32"
          r="11"
          stroke={C.stroke}
        />
        <circle
          className="ai-ring-r"
          cx="38"
          cy="32"
          r="11"
          stroke={C.moss}
        />
      </g>
      <circle className="ai-pulse" cx="32" cy="32" r="2.6" fill={C.ember} />
    </>
  ),

  compass: (
    <>
      <circle
        cx="32"
        cy="32"
        r="22"
        fill={C.disc}
        stroke={C.stroke}
        strokeWidth="1.6"
      />
      <g stroke={C.stroke} strokeWidth="1.6" strokeLinecap="round">
        <path d="M32 12.5v3.5M32 48v3.5M12.5 32h3.5M48 32h3.5" />
      </g>
      <g className="ai-needle">
        <path d="M32 17 L36 32 L28 32 Z" fill={C.ember} />
        <path d="M32 47 L36 32 L28 32 Z" fill={C.moss} />
        <circle
          cx="32"
          cy="32"
          r="2.2"
          fill={C.disc}
          stroke={C.stroke}
          strokeWidth="1.2"
        />
      </g>
    </>
  ),

  globe: (
    <>
      <defs>
        <clipPath id="ai-globe-clip">
          <circle cx="32" cy="32" r="21" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="21" fill={C.disc} />
      <g clipPath="url(#ai-globe-clip)" fill="none" strokeWidth="1.5">
        <path
          d="M11 32h42M14.5 22h35M14.5 42h35"
          stroke={C.stroke}
          opacity="0.55"
        />
        <ellipse
          className="ai-meridian"
          cx="32"
          cy="32"
          rx="21"
          ry="21"
          stroke={C.ember}
          strokeWidth="1.8"
        />
        <ellipse
          className="ai-meridian ai-meridian-2"
          cx="32"
          cy="32"
          rx="21"
          ry="21"
          stroke={C.moss}
          strokeWidth="1.8"
        />
      </g>
      <circle
        cx="32"
        cy="32"
        r="21"
        fill="none"
        stroke={C.stroke}
        strokeWidth="1.6"
      />
    </>
  ),

  moon: (
    <>
      <defs>
        <clipPath id="ai-moon-clip">
          <circle cx="32" cy="32" r="18" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="18" fill={C.ember} />
      <g clipPath="url(#ai-moon-clip)">
        <circle className="ai-shadow" cx="32" cy="32" r="18" fill={C.disc} />
      </g>
      <circle
        cx="32"
        cy="32"
        r="18"
        fill="none"
        stroke={C.stroke}
        strokeWidth="1.6"
      />
      <circle className="ai-twinkle" cx="52" cy="13" r="1.8" fill={C.ember} />
      <circle
        className="ai-twinkle ai-twinkle-2"
        cx="11"
        cy="50"
        r="1.4"
        fill={C.moss}
      />
    </>
  ),
};
