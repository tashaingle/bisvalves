import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="BiS Valves home">
      <span className="relative grid h-9 w-9 place-items-center border border-brass/50">
        <span className="absolute -left-px -top-px h-1.5 w-1.5 bg-brass" />
        <span className="absolute -bottom-px -right-px h-1.5 w-1.5 bg-brass" />
        <span className="font-display text-[15px] font-semibold tracking-[0.18em] text-paper">
          BiS
        </span>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-display text-[22px] font-semibold tracking-[0.22em] text-paper">
            BiS
          </span>
          <span className="mt-0.5 block font-mono text-[9px] tracking-[0.46em] text-brass">
            VALVES
          </span>
        </span>
      )}
    </Link>
  );
}
