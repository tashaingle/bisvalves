import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Design, CNC manufacture, assembly and testing of high-pressure stainless steel valves at BiS Valves in Dorset, UK.",
};

const stages = [
  {
    n: "01",
    title: "Design",
    image: "/images/design.jpg",
    points: [
      "Hydraulics design engineers on standard range and new product.",
      "Simple modifications through to a complete new valve.",
      "Manifold packaging from the customer’s circuit diagram.",
      "Consultancy on existing designs and system architecture.",
    ],
  },
  {
    n: "02",
    title: "Manufacture",
    image: "/images/manufacture.jpg",
    points: [
      "Most components machined at our Dorset production facility.",
      "Multi-axis Nakamura mill-turn and a dozen CNC milling and turning machines.",
      "Exotic materials: Monel, Inconel, Hastelloy, titanium, super duplex.",
      "Verification with Renishaw Equator, Axiom CMM and Taylor Hobson roundness.",
      "Small-batch / prototype cell for short-lead development.",
    ],
  },
  {
    n: "03",
    title: "Assembly",
    image: "/images/assembly.jpg",
    points: [
      "Strategic stocks of key components and a flexible manufacturing system.",
      "ISO 9001 coordinated sales, order processing and inventory.",
      "Finish as important as dimension. Products are built to be serviced.",
      "Seal kits and repair kits available for most products.",
    ],
  },
  {
    n: "04",
    title: "Testing",
    image: "/images/testing.jpg",
    points: [
      "Hydraulic testing to 1,379 bar (20,000 psi).",
      "Flow and pressure-drop testing.",
      "Hyperbaric and environmental testing.",
      "Media: mineral oil, water, water glycols and nitrogen.",
      "Typical proof test to 1.5× rated working pressure, plus function and leakage.",
    ],
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        kicker="Capabilities"
        title="Design. Manufacture. Assembly. Testing."
        titleClassName="mt-4 font-display text-[clamp(1.35rem,3.6vw,4.5rem)] leading-none font-semibold text-night uppercase whitespace-nowrap"
        lede="A full path from initial concept to a qualified production solution, including exotic materials and fully integrated manifolds."
        image="/images/manufacture.jpg"
      />
      {stages.map((s, i) => (
        <section
          key={s.n}
          className={`grid min-h-[90vh] lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
        >
          <div className="relative min-h-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center bg-white px-8 py-20 md:px-16">
            <p className="font-mono text-[12px] tracking-[0.32em] text-brass">{s.n}</p>
            <h2 className="mt-4 font-display text-6xl text-night uppercase md:text-7xl">
              {s.title}
            </h2>
            <ul className="mt-8 space-y-4">
              {s.points.map((p) => (
                <li key={p} className="border-l border-brass/50 pl-4 text-night/70">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      <FinalCTA />
    </>
  );
}
