import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/industries";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "BiS Valves for subsea, topside, downhole, oil & gas, industrial gas, high-pressure systems and specialist engineering.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        kicker="Industries"
        title="Specified where failure is not an option."
        lede="Low-flow, high-pressure control for offshore oil and gas, industrial gas, water hydraulics, power generation and research systems."
      />
      <section>
        {industries.map((ind, i) => (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}`}
            className={`group relative grid min-h-[70vh] overflow-hidden lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="relative min-h-[360px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ind.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center bg-white px-8 py-16 md:px-16">
              <p className="font-mono text-[11px] tracking-[0.28em] text-brass uppercase">
                {String(i + 1).padStart(2, "0")} · {ind.kicker}
              </p>
              <h2 className="mt-4 font-display text-5xl text-night uppercase md:text-6xl">
                {ind.name}
              </h2>
              <p className="mt-5 max-w-md text-night/70">{ind.summary}</p>
              <span className="mt-8 font-mono text-[11px] tracking-[0.22em] text-night uppercase">
                View application →
              </span>
            </div>
          </Link>
        ))}
      </section>
      <FinalCTA />
    </>
  );
}
