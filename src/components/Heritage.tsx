import { CountUp, Reveal } from "./Reveal";

const figures = [
  { value: 50, suffix: "+", label: "Years experience" },
  { value: 1971, suffix: "", label: "Founded in Bournemouth" },
  { value: 20000, suffix: "", label: "PSI in-house test" },
  { value: 316, suffix: "", label: "Stainless as standard" },
];

export function Heritage() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
            03 — Engineering heritage
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] font-semibold text-paper uppercase md:text-7xl">
            50+ years of
            <br />
            engineering
            <br />
            experience.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-mist">
              Founded in 1971 as Bournemouth Industrial Supplies, BiS is a
              specialist UK manufacturer solving demanding flow-control problems
              for topside, subsea and downhole service.
            </p>
            <p className="mt-5 text-mist">
              Not a catalogue house. A Dorset engineering company that machines,
              assembles and tests the valves it designs — in stainless, super
              duplex, Hastelloy and titanium.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/10 lg:col-span-7">
            {figures.map((f) => (
              <div key={f.label} className="bg-charcoal p-6 md:p-8">
                <p className="font-display text-5xl text-paper md:text-6xl">
                  <CountUp value={f.value} suffix={f.suffix} />
                </p>
                <p className="mt-3 font-mono text-[11px] tracking-[0.22em] text-brass uppercase">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-4">
          {[
            "UK engineered",
            "High-pressure specialists",
            "Bespoke solutions",
            "Global distribution",
          ].map((item) => (
            <div key={item} className="bg-ink px-6 py-5 font-display text-2xl tracking-wide text-paper uppercase">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
