/*
  A light, illustrated stand-in for "the therapy room" hero photo: a window
  with light falling across the wall and floor, and two armchairs beneath it.
  Flat shapes in the site's own palette rather than a photo, so it reads as a
  considered placeholder, not a stock image.

  Geometry is laid out against a few shared constants so the pieces stay
  aligned: everything on the floor ends at FLOOR_Y, and the light beam starts
  at the window's own bottom edge.
*/
const FLOOR_Y = 392;

const WINDOW = { x: 105, y: 36, w: 130, h: 160 };
const WINDOW_BOTTOM = WINDOW.y + WINDOW.h; // 196

function Armchair({
  cx,
  seat,
  color,
}: {
  cx: number;
  seat: string;
  color: string;
}) {
  const legH = 22;
  const legTop = FLOOR_Y - legH; // 370
  const seatH = 22;
  const seatTop = legTop - seatH; // 348
  const halfW = 56; // half the chair's full width
  const backHalfW = 42; // backrest is the wide, dominant shape
  const armW = 24;
  const armTop = 312; // arms sit well below the top of the back

  return (
    <g>
      {/* backrest: wide and tall, the main mass of the chair */}
      <rect
        x={cx - backHalfW}
        y={236}
        width={backHalfW * 2}
        height={seatTop - 236}
        rx={26}
        fill={color}
      />
      {/* arms: smaller blocks protruding past the backrest on each side */}
      <rect x={cx - halfW} y={armTop} width={armW} height={seatTop - armTop} rx={11} fill={color} />
      <rect x={cx + halfW - armW} y={armTop} width={armW} height={seatTop - armTop} rx={11} fill={color} />
      {/* seat cushion spanning the full width, flush under back and arms */}
      <rect x={cx - halfW} y={seatTop} width={halfW * 2} height={seatH} rx={8} fill={seat} />
      {/* legs, flush under the seat and ending exactly on the floor line */}
      <rect x={cx - halfW + 8} y={legTop} width={9} height={legH} rx={3} fill="var(--color-raisin)" opacity="0.5" />
      <rect x={cx + halfW - 17} y={legTop} width={9} height={legH} rx={3} fill="var(--color-raisin)" opacity="0.5" />
      {/* contact shadow on the floor line */}
      <ellipse cx={cx} cy={FLOOR_Y + 5} rx={60} ry={7} fill="var(--color-raisin)" opacity="0.13" />
    </g>
  );
}

export function RoomScene({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-t-full rounded-b-lg bg-linen ${className}`}
    >
      <svg
        viewBox="0 0 340 480"
        className="h-full w-full"
        role="img"
        aria-label="Illustration of a sunlit therapy room"
      >
        <defs>
          <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-parchment)" />
            <stop offset="100%" stopColor="var(--color-linen)" />
          </linearGradient>
          <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-ember)" stopOpacity="0.38" />
            <stop offset="100%" stopColor="var(--color-ember)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-mist)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--color-salt)" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Wall, then floor meeting it at the floor line */}
        <rect x="0" y="0" width="340" height="480" fill="url(#wall)" />
        <rect x="0" y={FLOOR_Y} width="340" height={480 - FLOOR_Y} fill="var(--color-sand)" />
        <rect x="0" y={FLOOR_Y - 1} width="340" height="2" fill="var(--color-antique)" opacity="0.35" />

        {/*
          Light beam: starts at the window's own bottom edge (inset by the
          frame stroke) and widens symmetrically about the window's centre.
        */}
        <polygon
          points={`${WINDOW.x + 2},${WINDOW_BOTTOM} ${WINDOW.x + WINDOW.w - 2},${WINDOW_BOTTOM} 282,470 58,470`}
          fill="url(#beam)"
        />

        {/* Window, centred so the arch doesn't clip its corners */}
        <g>
          <rect x={WINDOW.x} y={WINDOW.y} width={WINDOW.w} height={WINDOW.h} rx="3" fill="url(#glass)" />
          <rect
            x={WINDOW.x}
            y={WINDOW.y}
            width={WINDOW.w}
            height={WINDOW.h}
            rx="3"
            fill="none"
            stroke="var(--color-noir)"
            strokeOpacity="0.7"
            strokeWidth="4"
          />
          <line
            x1={WINDOW.x + WINDOW.w / 2}
            y1={WINDOW.y}
            x2={WINDOW.x + WINDOW.w / 2}
            y2={WINDOW_BOTTOM}
            stroke="var(--color-noir)"
            strokeOpacity="0.55"
            strokeWidth="2.5"
          />
          <line
            x1={WINDOW.x}
            y1={WINDOW.y + WINDOW.h / 2}
            x2={WINDOW.x + WINDOW.w}
            y2={WINDOW.y + WINDOW.h / 2}
            stroke="var(--color-noir)"
            strokeOpacity="0.55"
            strokeWidth="2.5"
          />
        </g>

        {/* Dust motes, kept in the gap between the chairs so they stay visible */}
        <circle className="a-mote" cx="150" cy="214" r="2.5" fill="var(--color-ember)" opacity="0.45" />
        <circle
          className="a-mote"
          style={{ animationDelay: "-3s" }}
          cx="170"
          cy="262"
          r="2"
          fill="var(--color-clay)"
          opacity="0.4"
        />
        <circle
          className="a-mote"
          style={{ animationDelay: "-6s" }}
          cx="164"
          cy="318"
          r="2"
          fill="var(--color-ember)"
          opacity="0.35"
        />

        {/* Rug, laid before the chairs so they sit on top of it */}
        <ellipse cx="166" cy="422" rx="138" ry="30" fill="var(--color-antique)" opacity="0.26" />

        {/* Chairs, evenly spaced either side of the window's centre line */}
        <Armchair cx={92} seat="var(--color-clay)" color="var(--color-coffee)" />
        <Armchair cx={236} seat="var(--color-mist)" color="var(--color-olive)" />

        {/* Plant, set in from the right edge so it doesn't crowd it */}
        <g>
          {/* leaves, drawn behind the pot rim */}
          {[-24, -6, 14].map((angle) => (
            <path
              key={angle}
              transform={`rotate(${angle} 310 ${FLOOR_Y - 22})`}
              d={`M310 ${FLOOR_Y - 22} C 298 ${FLOOR_Y - 46}, 300 ${FLOOR_Y - 70}, 310 ${FLOOR_Y - 80} C 320 ${FLOOR_Y - 70}, 322 ${FLOOR_Y - 46}, 310 ${FLOOR_Y - 22} Z`}
              fill="var(--color-olive)"
              opacity="0.85"
            />
          ))}
          {/* tapered pot */}
          <path
            d={`M298 ${FLOOR_Y - 24} h24 l-3 24 h-18 Z`}
            fill="var(--color-antique)"
          />
        </g>
      </svg>
    </div>
  );
}
