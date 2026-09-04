import Link from "next/link";
import { industries } from "@/lib/industries";
import { Reveal } from "./Reveal";

export function IndustryPanels() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
            02 — Applications
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] font-semibold text-paper uppercase md:text-7xl">
            Where the work
            <br />
            actually happens.
          </h2>
        </Reveal>
      </div>
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind) => (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}`}
            className="group relative min-h-[380px] overflow-hidden border-t border-white/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ind.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/45 transition group-hover:bg-ink/25" />
            <div className="relative flex h-full flex-col justify-between p-8">
              <p className="font-mono text-[10px] tracking-[0.3em] text-brass uppercase">
                {ind.kicker}
              </p>
              <div>
                <h3 className="font-display text-4xl tracking-tight text-paper uppercase">
                  {ind.name}
                </h3>
                <p className="mt-3 max-w-sm text-sm text-paper/80 opacity-0 transition duration-500 group-hover:opacity-100">
                  {ind.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
