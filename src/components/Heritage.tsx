import Link from "next/link";
import { Arrow } from "./Arrow";

const stages = [
  { title: "Design", copy: "Our own hydraulics engineers, from small modifications to new valves and manifolds." },
  { title: "Machining", copy: "CNC mill-turn in stainless, super duplex, Monel, Inconel, Hastelloy and titanium." },
  { title: "Assembly", copy: "Standard, prototype and batch builds from strategic stocks of common parts." },
  { title: "Testing", copy: "Hydraulic proof testing to 1,379 bar, plus hyperbaric and environmental tests." },
];

export function Heritage() {
  return (
    <section className="grid bg-white lg:grid-cols-2">
      <div className="flex items-center justify-center bg-white px-6 pt-12 lg:px-12 lg:py-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bis/3bc25m.webp"
          alt="CAD render of the BiS 3BC25M solenoid valve"
          width={1400}
          height={1194}
          className="h-auto w-full max-w-[560px] drop-shadow-[0_24px_30px_rgba(15,58,30,0.14)]"
        />
      </div>

      <div className="px-5 py-16 md:px-10 md:py-20 lg:py-20 lg:pr-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))] lg:pl-16 xl:pl-20">
        <p className="label">Since 1971</p>
        <h2 className="mt-3 font-display text-4xl leading-[1.05] font-semibold text-ink md:text-5xl">
          Designed, machined and tested in Dorset
        </h2>
        <p className="mt-5 max-w-lg text-night/70">
          BiS started as Bournemouth Industrial Supplies. Every stage now
          happens across our two sites near Wimborne, so one team is responsible
          for a valve from the first drawing to the test certificate.
        </p>

        <ol className="mt-10 grid max-w-xl gap-x-8 sm:grid-cols-2">
          {stages.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[2rem_1fr] border-t border-rule py-4">
              <span className="pt-0.5 text-[14px] text-brass-bright tabular-nums">
                0{i + 1}
              </span>
              <div>
                <p className="font-semibold text-ink">{s.title}</p>
                <p className="mt-0.5 text-[15px] text-night/60">{s.copy}</p>
              </div>
            </li>
          ))}
        </ol>

        <Link href="/capabilities" className="link-arrow mt-6">
          How we work
          <Arrow />
        </Link>
      </div>
    </section>
  );
}
