import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Arrow } from "@/components/Arrow";
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
        title="Talk to an engineer"
        lede="Tell us the fluid, pressure, temperature, flow and space available. We will tell you whether a standard valve, a modified one or a new design is the right fit."
      />

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1320px] px-5 md:px-10">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2">
            <a
              href={site.phoneHref}
              className="group bg-white p-7 transition-colors hover:bg-[#f4f9f4] md:p-10"
            >
              <p className="label">Call us</p>
              <p className="mt-3 font-display text-3xl font-semibold text-ink tabular-nums md:text-4xl">
                {site.phone}
              </p>
              <p className="mt-3 text-night/60">Mon–Thu 08:00–17:00, Fri 08:00–16:00</p>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="group bg-white p-7 transition-colors hover:bg-[#f4f9f4] md:p-10"
            >
              <p className="label">Email sales</p>
              <p className="mt-3 font-display text-3xl font-semibold break-all text-ink md:text-4xl">
                {site.email}
              </p>
              <p className="mt-3 text-night/60">
                Include the model code or your application details
              </p>
            </a>
          </div>

          <div className="mt-16 grid gap-10 md:mt-20 lg:grid-cols-2">
            {site.offices.map((o) => (
              <div key={o.name}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-rule bg-panel">
                  <iframe
                    src={o.embed}
                    title={`Map of the BiS Valves ${o.name.toLowerCase()}`}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-ink">{o.name}</h2>
                    <p className="mt-2 leading-relaxed text-night/70">
                      {o.lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </p>
                  </div>
                  <a href={o.map} className="link-arrow">
                    Directions
                    <Arrow />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 border-t border-rule pt-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">Opening hours</h2>
              <dl className="mt-4 max-w-sm">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-6 border-b border-rule py-3">
                    <dt className="text-night/70">{h.days}</dt>
                    <dd className="font-medium text-night tabular-nums">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="max-w-xl self-end text-night/70 lg:justify-self-end">
              Fax {site.fax}. For back-pressure maintaining valves, regulators
              and oxygen service, visit our sister company{" "}
              <a href={site.sister.href} className="text-brass-bright hover:underline">
                {site.sister.name}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
