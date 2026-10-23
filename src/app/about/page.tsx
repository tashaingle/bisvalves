import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { Arrow } from "@/components/Arrow";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About BiS",
  description:
    "BiS Valves Ltd, founded in 1971, is a specialist UK manufacturer of small-bore stainless steel pressure and flow control valves for oil and gas, subsea and industrial service.",
};

const history = [
  {
    year: "1971",
    title: "Founded in Bournemouth",
    body: "Ralph Burgas starts the company as Bournemouth Industrial Supplies.",
  },
  {
    year: "1995",
    title: "New leadership",
    body: "Ralph Burgas hands over the business, which is then led in turn by Paul Gardiner, Matthew Smith and David Kelly.",
  },
  {
    year: "1998",
    title: "Becoming BiS Valves",
    body: "The company is renamed BiS Valves Ltd. The focus stays the same: small-bore stainless steel pressure and flow control for high-pressure liquid and gas.",
  },
  {
    year: "2014",
    title: "Nick Frost takes the lead",
    body: "Nick Frost, previously Technical Director, takes over leadership of the business.",
  },
  {
    year: "Today",
    title: "Two sites in Dorset",
    body: "Head office in West Moors and manufacturing in Three Legged Cross, both near Wimborne.",
  },
];

const practices = [
  {
    title: "ISO 9001 quality system",
    body: "Sales, order processing and inventory run through one approved quality system.",
  },
  {
    title: "Fast response",
    body: "Strategic stocks of key components and flexible manufacturing keep lead times short.",
  },
  {
    title: "Worldwide reach",
    body: "An international distributor network in strategic locations around the world.",
  },
  {
    title: "Proven across industries",
    body: "Major principals in oil and gas, with established work in petrochemical, pharmaceutical, power generation, water hydraulics and fuel systems.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About BiS"
        title="A British valve manufacturer, in Dorset since 1971"
        lede="BiS began as Bournemouth Industrial Supplies. Today BiS Valves Ltd designs, machines and tests stainless steel valves at two sites near Wimborne."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">Our history</h2>
            <p className="mt-4 max-w-sm text-night/70">
              More than fifty years of making valves for high-pressure service,
              under one name since 1998.
            </p>
          </div>
          <ol className="lg:col-span-8">
            {history.map((h) => (
              <li
                key={h.year}
                className="grid gap-2 border-t border-rule py-7 first:border-night sm:grid-cols-[9rem_1fr] sm:gap-8"
              >
                <p className="font-display text-4xl font-semibold text-brass-bright tabular-nums">
                  {h.year}
                </p>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{h.title}</h3>
                  <p className="mt-2 max-w-xl text-night/70">{h.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-panel">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-24">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">How we work</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practices.map((p) => (
              <li key={p.title} className="rounded-2xl bg-white p-6 md:p-7">
                <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-night/70">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">Our sites</h2>
            <Link href="/contact" className="link-arrow mt-5">
              Maps and directions
              <Arrow />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {site.offices.map((o) => (
              <div key={o.name} className="rounded-2xl border border-rule p-6 md:p-7">
                <p className="label">{o.name}</p>
                <p className="mt-3 leading-relaxed text-night/75">
                  {o.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
