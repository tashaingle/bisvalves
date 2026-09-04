import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { resources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Technical Resources",
  description:
    "Datasheets, catalogues, technical drawings, certifications and manuals from BiS Valves.",
};

const types = ["Brochure", "Datasheet", "Certification", "Manual", "Drawing"] as const;

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        kicker="Technical resources"
        title="Literature, drawings, certificates."
        lede="The working documents behind the valves — catalogues, leaflets, ISO / ATEX / PED / SIL files, and dimensional datasheets."
      />
      <section className="bg-charcoal py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          {types.map((type) => {
            const items = resources.filter((r) => r.type === type);
            if (!items.length) return null;
            return (
              <div key={type} className="mb-16">
                <h2 className="font-display text-3xl text-night uppercase">{type}s</h2>
                <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
                  {items.map((r) => (
                    <a
                      key={r.href}
                      href={r.href}
                      className="group grid grid-cols-12 items-center gap-4 py-5 hover:bg-white"
                    >
                      <span className="col-span-12 font-display text-xl text-night uppercase md:col-span-6">
                        {r.title}
                      </span>
                      <span className="col-span-6 font-mono text-[11px] tracking-[0.16em] text-night/60 uppercase md:col-span-3">
                        {r.category}
                      </span>
                      <span className="col-span-6 text-right font-mono text-[11px] tracking-[0.2em] text-brass uppercase md:col-span-3">
                        {r.year ?? "PDF"} →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
          <p className="max-w-2xl text-sm leading-relaxed text-night/70">
            Catalogue products are primarily stainless steel for water glycol or
            mineral oil. For corrosive fluids, sour service (MR0175 / ISO 15156)
            or subsea ambient overpressure, contact the factory. Seal kits and
            repair kits are available for most products.
          </p>
        </div>
      </section>
    </>
  );
}
