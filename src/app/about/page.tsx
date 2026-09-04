import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Heritage } from "@/components/Heritage";
import { FinalCTA } from "@/components/FinalCTA";
import { CountUp } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About BiS",
  description:
    "BiS Valves Ltd, founded in 1971, is a specialist UK manufacturer of small-bore stainless steel pressure and flow control valves for oil and gas, subsea and industrial service.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About BiS"
        title="A specialist British manufacturer."
        lede="Originally Bournemouth Industrial Supplies. Today, BiS Valves Ltd — still engineering in Dorset, still solving problems the catalogue cannot."
        image="/images/specialist.jpg"
      />
      <Heritage />
      <section className="bg-ink py-24">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-6">
            <h2 className="font-display text-4xl text-paper uppercase">Foundation</h2>
            <p className="mt-5 leading-relaxed text-mist">
              BiS Valves Ltd was founded in 1971 as Bournemouth Industrial
              Supplies. The founder, Ralph Burgas, led the company until 1995.
              Leadership passed through Paul Gardiner, Matthew Smith and David
              Kelly; since 2014 Nick Frost, previously Technical Director, has
              led the business.
            </p>
            <p className="mt-5 leading-relaxed text-mist">
              The name changed to BiS Valves Ltd in 1998. The work did not:
              small-bore stainless steel pressure and flow control for high
              pressure liquid and gas.
            </p>
          </div>
          <div className="md:col-span-6">
            <h2 className="font-display text-4xl text-paper uppercase">How we work</h2>
            <p className="mt-5 leading-relaxed text-mist">
              ISO 9001 management system. Integrated sales, order processing and
              inventory. Strategic stocks of key components and a flexible
              manufacturing system for a fast response. An international
              distributor network in strategic locations worldwide.
            </p>
            <p className="mt-5 leading-relaxed text-mist">
              Major principals in oil and gas, with established presence in
              petrochemical, pharmaceutical, power generation, water hydraulics
              and fuel systems.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-[1440px] grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
          {[
            { v: 50, s: "+", l: "Years" },
            { v: 1379, s: "", l: "Bar test" },
            { v: 20, s: "k", l: "PSI capability" },
            { v: 2, s: "", l: "Dorset sites" },
          ].map((x) => (
            <div key={x.l} className="bg-ink p-8">
              <p className="font-display text-5xl text-paper">
                <CountUp value={x.v} suffix={x.s} />
              </p>
              <p className="mt-2 font-mono text-[11px] tracking-[0.2em] text-brass uppercase">
                {x.l}
              </p>
            </div>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
