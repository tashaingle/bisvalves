import Link from "next/link";
import { categories } from "@/lib/products";
import { Reveal } from "./Reveal";

export function ProductExplore() {
  const featured = categories.filter((c) => c.featured);

  return (
    <section className="relative bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
            01 — Product discovery
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-5xl leading-[0.95] font-semibold tracking-tight text-night uppercase md:text-7xl">
              Explore our
              <br />
              valves.
            </h2>
            <p className="max-w-sm text-night/70">
              Small-bore stainless steel pressure and flow control. Standard
              ranges, cartridge and manifold constructions, and fully bespoke
              engineering.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group flex h-full flex-col border border-black/10 bg-white"
            >
              <div className="relative flex h-48 items-center justify-center bg-[#f6f6f4] px-6 py-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image}
                  alt=""
                  className="max-h-36 w-auto object-contain transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[10px] tracking-[0.28em] text-brass uppercase">
                  {String(i + 1).padStart(2, "0")} · {cat.pressure}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight text-night uppercase">
                  {cat.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-night/70">{cat.hover}</p>
                <span className="mt-auto inline-flex items-center gap-3 pt-6 font-mono text-[11px] tracking-[0.22em] text-night uppercase">
                  View range
                  <span className="transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/products"
            className="font-mono text-[11px] tracking-[0.24em] text-brass uppercase hover:text-brass-bright"
          >
            Full catalogue with filters →
          </Link>
        </div>
      </div>
    </section>
  );
}
