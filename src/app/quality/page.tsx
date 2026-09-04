import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { certifications, resources } from "@/lib/resources";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Quality & Certification",
  description:
    "ISO 9001, ATEX, PED Category IV and SIL 3 capable quality systems at BiS Valves.",
};

export default function QualityPage() {
  const certs = resources.filter((r) => r.type === "Certification");
  return (
    <>
      <PageHero
        kicker="Quality"
        title="Proven before it ships."
        lede="Quality is a manufacturing method, not a footer of logos. ISO 9001, ATEX, PED and SIL sit inside design, machine, assemble and test."
        image="/images/testing.jpg"
      />
      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            {certifications.map((c) => (
              <article key={c.code} className="bg-white p-8 md:p-12">
                <p className="font-mono text-[12px] tracking-[0.28em] text-brass uppercase">
                  {c.code}
                </p>
                <h2 className="mt-4 font-display text-4xl text-night uppercase">{c.title}</h2>
                <p className="mt-4 max-w-md text-night/70">{c.body}</p>
              </article>
            ))}
          </div>
          <h2 className="mt-20 font-display text-3xl text-night uppercase">Certificates</h2>
          <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {certs.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  className="flex items-center justify-between py-5 font-mono text-[12px] tracking-[0.16em] text-night uppercase hover:text-brass"
                >
                  {c.title}
                  <span>PDF</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-night/70">
            Metrology includes Renishaw Equator, Axiom CMM and Taylor Hobson
            roundness. Typical despatch tests: proof to 1.5× rated working
            pressure, function and leakage. Test media include mineral oil,
            water glycols, demineralised water and nitrogen.
          </p>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
