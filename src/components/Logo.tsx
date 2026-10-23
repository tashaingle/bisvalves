import Image from "next/image";
import Link from "next/link";

const sizes = {
  sm: "h-12",
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
      <Image
        src="/brand/bis-valves-logo.webp"
        alt="BiS Valves"
        width={591}
        height={701}
        sizes="80px"
        preload={size === "sm"}
        className={`${sizes[size]} w-auto`}
      />
    </Link>
  );
}
