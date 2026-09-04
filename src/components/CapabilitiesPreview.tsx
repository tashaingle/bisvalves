import Link from "next/link";
import { Reveal } from "./Reveal";

const stages = [
  {
    n: "01",
    title: "Design",
    copy: "Hydraulics engineers from a simple modification to a complete new valve or integrated manifold.",
    image: "/images/design.jpg",
  },
  {
    n: "02",
    title: "Manufacture",
    copy: "CNC mill-turn in Dorset. Fine-tolerance parts in stainless, Monel, Inconel, Hastelloy and titanium.",
    image: "/images/manufacture.jpg",
  },
  {
    n: "03",
    title: "Assembly",
    copy: "Strategic stocks, flexible manufacturing and skilled build for standard and prototype batches.",
    image: "/images/assembly.jpg",
  },
  {
    n: "04",
    title: "Testing",
    copy: "Hydraulic to 1,379 bar. Hyperbaric, environmental, nitrogen, water glycol and mineral oil.",
    image: "/images/testing.jpg",
  },
];

export function CapabilitiesPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
                04 — Capabilities
              </p>
              <h2 className="mt-4 font-display text-5xl leading-[0.95] font-semibold text-night uppercase md:text-7xl">
                From concept
                <br />
                to qualified.
              </h2>
            </div>
            <Link
              href="/capabilities"
              className="font-mono text-[11px] tracking-[0.24em] text-brass uppercase hover:text-brass-bright"
            >
              Full process →
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stages.map((s) => (
            <article key={s.n} className="group overflow-hidden border border-black/10 bg-white">
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="font-mono text-[11px] tracking-[0.28em] text-brass">{s.n}</p>
                <h3 className="mt-2 font-display text-3xl text-night uppercase">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-night/70">{s.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
