import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { certificates, certifications } from "@/lib/resources";
import { site } from "@/lib/site";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Quality & Certification",
  description:
    "ISO 9001, ATEX, PED Category IV and SIL 3 capable quality systems at BiS Valves.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        kicker="Quality"
        title="Quality and certification"
        lede="Every BiS valve is pressure tested before dispatch. Our quality system is approved to ISO 9001, with ATEX, PED and SIL approvals on the relevant product ranges."
      />
      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-[1320px] px-5 md:px-10">
          <div className="grid gap-px bg-rule md:grid-cols-2">
            {certifications.map((c) => (
              <article key={c.code} className="bg-white p-8 md:p-12">
                <p className="text-[13px] text-brass-bright font-medium">
                  {c.code}
                </p>
                <h2 className="mt-4 font-display text-3xl text-ink font-semibold">{c.title}</h2>
                <p className="mt-4 max-w-md text-night/70">{c.body}</p>
              </article>
            ))}
          </div>
          <h2 className="mt-20 font-display text-2xl text-ink font-semibold">Certificates</h2>
          <p className="mt-3 max-w-xl text-night/70">
            Copies of our current certificates are sent on request.{" "}
            <a
              href={`mailto:${site.email}?subject=Certificate request`}
              className="text-brass-bright hover:underline"
            >
              Request certificates
            </a>
          </p>
          <ul className="mt-6 divide-y divide-rule border-y border-rule">
            {certificates.map((c) => (
              <li key={c} className="py-4 text-night">
                {c}
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
