import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="border-t border-black/10 bg-charcoal">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
          Application engineering
        </p>
        <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[0.92] font-semibold text-night uppercase md:text-7xl lg:text-8xl">
          Have an application
          <br />
          others can&apos;t solve?
        </h2>
        <p className="mt-8 max-w-lg text-lg text-night/70">
          Talk to our engineering team about your requirements: fluid, pressure,
          envelope, environment. If the catalogue ends, the drawing board does not.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-3 border border-brass bg-brass px-7 py-4 font-mono text-[12px] tracking-[0.24em] text-white uppercase hover:bg-brass-bright"
        >
          Talk to an engineer
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
