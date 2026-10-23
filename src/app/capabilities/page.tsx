import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Design, CNC manufacture, assembly and testing of high-pressure stainless steel valves at BiS Valves in Dorset, UK.",
};

// Each stage shows a real BiS engineering drawing; testing shows its figures.
type Visual = { kind: "drawing"; src: string; alt: string } | { kind: "figures" };

const stages: { title: string; visual: Visual; points: string[] }[] = [
  {
    title: "Design",
    visual: {
      kind: "drawing",
      src: "/images/bis/bnv50g-views.jpg",
      alt: "Dimensioned drawing of the BiS BNV50-G metering valve",
    },
    points: [
      "Hydraulics design engineers on the standard range and new products.",
      "Simple modifications through to a complete new valve.",
      "Manifold packaging from the customer’s circuit diagram.",
      "Consultancy on existing designs and system architecture.",
    ],
  },
  {
    title: "Manufacture",
    visual: {
      kind: "drawing",
      src: "/images/bis/bnv10fc-tb-views.jpg",
      alt: "BNV10FC-TB drawing with the machined cavity detail and tolerances",
    },
    points: [
      "Most components machined at our Dorset production facility.",
      "Multi-axis Nakamura mill-turn and a dozen CNC milling and turning machines.",
      "Exotic materials: Monel, Inconel, Hastelloy, titanium and super duplex.",
      "Verification with Renishaw Equator, Axiom CMM and Taylor Hobson roundness.",
      "Small-batch and prototype cell for short-lead development.",
    ],
  },
  {
    title: "Assembly",
    visual: {
      kind: "drawing",
      src: "/images/bis/bnv10fc-section.jpg",
      alt: "Sectional drawing of the assembled BNV10FC metering valve",
    },
    points: [
      "Strategic stocks of key components and a flexible manufacturing system.",
      "Sales, order processing and inventory coordinated under ISO 9001.",
      "Finish matters as much as dimension. Products are built to be serviced.",
      "Seal kits and repair kits available for most products.",
    ],
  },
  {
    title: "Testing",
    visual: { kind: "figures" },
    points: [
      "Hydraulic testing to 1,379 bar (20,000 psi).",
      "Flow and pressure-drop testing.",
      "Hyperbaric and environmental testing.",
      "Media: mineral oil, water, water glycols and nitrogen.",
      "Typical proof test to 1.5× rated working pressure, plus function and leakage.",
    ],
  },
];

const testFigures = [
  { value: "1,379 bar", caption: "Maximum hydraulic test pressure (20,000 psi)" },
  { value: "1.5×", caption: "Typical proof test, relative to rated working pressure" },
  { value: "4", caption: "Test media: mineral oil, water, water glycols and nitrogen" },
];

function StageVisual({ visual }: { visual: Visual }) {
  if (visual.kind === "figures") {
    return (
      <div className="flex flex-col justify-center gap-6 rounded-2xl bg-forest p-8 text-white md:aspect-[4/3] md:p-12">
        {testFigures.map((f) => (
          <div key={f.value} className="border-t border-white/15 pt-5 first:border-0 first:pt-0">
            <p className="font-display text-5xl font-semibold tabular-nums">{f.value}</p>
            <p className="mt-1 text-white/70">{f.caption}</p>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-rule bg-white">
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        sizes="(min-width: 1024px) 600px, 100vw"
        className="object-contain p-8 md:p-12"
      />
    </div>
  );
}

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        kicker="Capabilities"
        title="Design, manufacture, assembly and testing"
        lede="One team takes a valve from first drawing to test certificate across our two sites in Dorset, including exotic materials and fully integrated manifolds."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-[1320px] px-5 md:px-10">
          {stages.map((s, i) => (
            <div
              key={s.title}
              className="grid items-center gap-8 border-b border-rule py-14 last:border-0 md:py-20 lg:grid-cols-12 lg:gap-14"
            >
              <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <StageVisual visual={s.visual} />
              </div>
              <div className="lg:col-span-6">
                <p className="label tabular-nums">Step {i + 1}</p>
                <h2 className="mt-2 font-display text-4xl font-semibold text-ink md:text-5xl">
                  {s.title}
                </h2>
                <ul className="mt-7 space-y-3 text-night/75">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
