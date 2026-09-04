import Link from "next/link";
import { certifications } from "@/lib/resources";
import { Reveal } from "./Reveal";

export function QualityStory() {
  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
            05 — Quality as engineering
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] font-semibold text-paper uppercase md:text-6xl">
            Assurance is not a logo strip.
          </h2>
          <p className="mt-6 max-w-xl text-mist">
            Every valve is proof-tested, typically to 1.5× rated working pressure,
            then function and leakage tested on oil, water glycol, demineralised
            water or nitrogen.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <article key={c.code} className="bg-ink p-7">
              <p className="font-mono text-[11px] tracking-[0.2em] text-brass uppercase">
                {c.code}
              </p>
              <h3 className="mt-4 font-display text-2xl text-paper uppercase">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{c.body}</p>
            </article>
          ))}
        </div>
        <Link
          href="/quality"
          className="mt-8 inline-flex font-mono text-[11px] tracking-[0.24em] text-brass uppercase hover:text-brass-bright"
        >
          Quality &amp; certification →
        </Link>
      </div>
    </section>
  );
}
