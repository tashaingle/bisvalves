import Link from "next/link";

const sizes = {
  sm: "h-10",
  md: "h-14",
  lg: "h-20",
} as const;

export function Logo({
  size = "md",
  className = "",
}: {
  inverted?: boolean;
  compact?: boolean;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="BiS Valves home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/bis-valves-logo.webp"
        alt="BiS Valves"
        className={`${sizes[size]} w-auto`}
      />
    </Link>
  );
}
