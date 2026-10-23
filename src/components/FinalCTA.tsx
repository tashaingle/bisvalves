import Link from "next/link";
import { site } from "@/lib/site";
import { Arrow } from "./Arrow";

export function FinalCTA() {
  return (
    <section className="border-b border-rule bg-white">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:items-end lg:gap-12">
        <div className="lg:col-span-7">
          <p className="label">Application engineering</p>
          <h2 className="mt-3 font-display text-[clamp(2.25rem,4.4vw,3.75rem)] leading-[1.04] font-semibold text-ink">
            Need a valve that isn&apos;t in the catalogue?
          </h2>
          <p className="mt-5 max-w-lg text-lg text-night/70">
            Tell us the fluid, pressure, temperature and space you have to work
            with. Our engineers will tell you what we can make.
          </p>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <Link href="/contact" className="btn btn-primary h-14 px-7 text-base">
            Get in touch
            <Arrow />
          </Link>
          <div className="mt-6 space-y-1 text-night/70">
            <a href={site.phoneHref} className="block tabular-nums hover:text-brass-bright">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block hover:text-brass-bright">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
