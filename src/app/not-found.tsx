import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-start justify-center bg-charcoal px-5 pt-24 md:px-10">
      <p className="font-mono text-[11px] tracking-[0.28em] text-brass uppercase">404</p>
      <h1 className="mt-4 font-display text-6xl text-night uppercase">Line not found.</h1>
      <p className="mt-4 max-w-md text-mist">
        That route does not exist in this system. Return to the catalogue or
        talk to engineering.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/products"
          className="border border-brass bg-brass px-5 py-3 font-mono text-[11px] tracking-[0.2em] text-white uppercase"
        >
          Explore products
        </Link>
        <Link
          href="/"
          className="border border-white/20 px-5 py-3 font-mono text-[11px] tracking-[0.2em] uppercase"
        >
          Home
        </Link>
      </div>
    </section>
  );
}
