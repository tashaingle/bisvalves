import Link from "next/link";
import { certifications } from "@/lib/resources";
import { Arrow } from "./Arrow";

export function QualityStory() {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      {/* The BNV10FC section drawing, inverted to white line-work on green. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/bis/bnv10fc-section.jpg"
        alt=""
        className="pointer-events-none absolute -bottom-40 left-[-80px] hidden h-[620px] w-auto opacity-40 mix-blend-screen invert lg:block"
      />
      <div className="relative mx-auto grid max-w-[1320px] gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-[14px] font-medium text-brass">Quality</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] font-semibold md:text-5xl">
            Tested before it leaves us
          </h2>
          <p className="mt-5 max-w-sm text-white/70">
            Every valve is proof tested, typically to 1.5× its rated working
            pressure, then function and leak tested on oil, water glycol,
            demineralised water or nitrogen.
          </p>
          <Link href="/quality" className="link-arrow mt-6 text-brass">
            Quality and certification
            <Arrow />
          </Link>
        </div>

        <ul className="grid gap-px self-start overflow-hidden bg-white/12 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {certifications.map((c) => (
            <li key={c.code} className="bg-forest p-6 md:p-8">
              <p className="text-[14px] text-brass tabular-nums">{c.code}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/60">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
