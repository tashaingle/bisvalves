import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DatasheetLibrary } from "@/components/DatasheetLibrary";
import { categories } from "@/lib/products";
import { datasheets } from "@/lib/datasheets";
import { certificates, generalDocuments, rangeOverview } from "@/lib/resources";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technical Resources",
  description:
    "Datasheets, range overviews, application notes and terms of sale from BiS Valves.",
};

export default function ResourcesPage() {
  const ranges = categories
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      overview: rangeOverview(c.slug),
      sheets: datasheets.filter((d) => d.kind === "datasheet" && d.category === c.slug),
    }))
    .filter((r) => r.sheets.length > 0 || r.overview);

  return (
    <>
      <PageHero
        kicker="Technical resources"
        title="Technical resources"
        lede="Datasheets for every catalogue model, range overviews, application notes and our terms of sale."
      />

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1320px] px-5 md:px-10">
          <ul className="grid gap-3 sm:grid-cols-3">
            {generalDocuments.map((d) => (
              <li key={d.href}>
                <a
                  href={d.href}
                  className="flex h-full items-center justify-between gap-4 rounded-xl border border-rule p-5 transition-colors hover:border-brass-bright"
                >
                  <span className="font-display text-lg font-semibold text-ink">{d.title}</span>
                  <span className="shrink-0 text-[13px] text-night/55">PDF, {d.sizeKb} KB</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-16">
            <DatasheetLibrary ranges={ranges} />
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl font-semibold text-ink">Certificates</h2>
              <p className="mt-3 max-w-sm text-night/70">
                Copies of our current certificates are sent on request.
              </p>
              <a href={`mailto:${site.email}?subject=Certificate request`} className="link-arrow mt-4">
                Request certificates
              </a>
            </div>
            <ul className="divide-y divide-rule border-y border-rule lg:col-span-8">
              {certificates.map((c) => (
                <li key={c} className="py-4 text-night">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-16 max-w-2xl text-sm leading-relaxed text-night/70">
            Catalogue products are primarily stainless steel for water glycol or
            mineral oil. For corrosive fluids, sour service (MR0175 / ISO 15156)
            or subsea ambient overpressure, contact the factory. Seal kits and
            repair kits are available for most products. If a datasheet you need
            isn&apos;t listed, email{" "}
            <a href={`mailto:${site.email}`} className="text-brass-bright hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
