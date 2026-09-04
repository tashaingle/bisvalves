import Link from "next/link";

export function BisMark({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const circle = variant === "light" ? "#36A542" : "#ffffff";
  const letter = variant === "light" ? "#ffffff" : "#0E3A18";
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="50" fill={circle} />
      <g fill={letter}>
        <circle cx="50" cy="27" r="12.2" />
        <text
          x="13"
          y="76"
          fontFamily="Palatino Linotype, Palatino, Book Antiqua, Georgia, serif"
          fontWeight="700"
          fontSize="58"
        >
          B
        </text>
        <text
          x="41"
          y="76"
          fontFamily="Palatino Linotype, Palatino, Book Antiqua, Georgia, serif"
          fontWeight="700"
          fontSize="58"
        >
          S
        </text>
        <text x="72" y="90" fontSize="7" fontFamily="Arial, sans-serif">
          ®
        </text>
      </g>
    </svg>
  );
}

export function Logo({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  const variant = inverted ? "dark" : "light";
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="BiS Valves home">
      <BisMark variant={variant} className="h-11 w-11 shrink-0" />
      {!compact && (
        <span
          className={`font-display text-[15px] font-semibold tracking-[0.42em] ${
            inverted ? "text-white" : "text-brass"
          }`}
        >
          VALVES
        </span>
      )}
    </Link>
  );
}
