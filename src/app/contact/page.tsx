import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to a BiS Valves engineer. Head office in West Moors, manufacturing in Three Legged Cross, Dorset.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Talk to an engineer."
        lede="Bring fluid, pressure, temperature, flow, ambient conditions and envelope. We will tell you whether a standard valve, a variant, or a clean-sheet design is the right path."
      />
      <section className="bg-charcoal py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-7">
            <EnquiryForm />
          </div>
          <aside className="md:col-span-5 space-y-10">
            {site.offices.map((o) => (
              <div key={o.name} className="border border-black/10 bg-white p-6">
                <p className="font-mono text-[11px] tracking-[0.24em] text-brass uppercase">
                  {o.name}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-night/70">
                  {o.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
                <a
                  href={o.map}
                  className="mt-4 inline-block font-mono text-[11px] tracking-[0.2em] text-night uppercase hover:text-brass"
                >
                  Directions →
                </a>
              </div>
            ))}
            <div className="border border-black/10 bg-white p-6">
              <p className="font-mono text-[11px] tracking-[0.24em] text-brass uppercase">
                Direct
              </p>
              <a href={site.phoneHref} className="mt-4 block text-night hover:text-brass">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="block text-night hover:text-brass">
                {site.email}
              </a>
              <p className="mt-4 text-sm text-night/70">Fax {site.fax}</p>
            </div>
            <p className="text-sm text-night/70">
              For back-pressure maintaining valves, regulators and oxygen
              service visit{" "}
              <a href={site.sister.href} className="text-brass">
                {site.sister.name}
              </a>
              .
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
