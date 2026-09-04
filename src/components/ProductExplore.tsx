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
            <h2 className="max-w-3xl font-display text-5xl leading-[0.95] font-semibold tracking-tight text-paper uppercase md:text-7xl">
              Explore our
              <br />
              valves.
            </h2>
            <p className="max-w-sm text-mist">
              Small-bore stainless steel pressure and flow control. Standard
              ranges, cartridge and manifold constructions, and fully bespoke
              engineering.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-12">
          {featured.map((cat, i) => {
            const span =
              i === 0
                ? "md:col-span-7 md:row-span-2 min-h-[520px]"
                : i === 7
                  ? "md:col-span-12 min-h-[320px]"
                  : "md:col-span-5 min-h-[320px]";
            return (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className={`group relative overflow-hidden bg-ink ${span}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-110 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(196,165,116,0.08),transparent_40%)]" />
                </div>
                <div className="relative flex h-full flex-col justify-end p-7 md:p-10">
                  <p className="font-mono text-[10px] tracking-[0.28em] text-brass uppercase">
                    {String(i + 1).padStart(2, "0")} · {cat.pressure}
                  </p>
                  <h3 className="mt-2 font-display text-3xl tracking-tight text-paper uppercase md:text-4xl">
                    {cat.name}
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-mist opacity-0 translate-y-2 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {cat.hover}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-paper uppercase">
                    View range
                    <span className="transition-transform duration-500 group-hover:translate-x-2">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
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
