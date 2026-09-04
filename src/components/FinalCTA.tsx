import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/high-pressure.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-36">
        <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
          Application engineering
        </p>
        <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[0.92] font-semibold text-paper uppercase md:text-7xl lg:text-8xl">
          Have an application
          <br />
          others can&apos;t solve?
        </h2>
        <p className="mt-8 max-w-lg text-lg text-mist">
          Talk to our engineering team about your requirements — fluid, pressure,
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
