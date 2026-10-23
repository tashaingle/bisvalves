import Link from "next/link";
import { categories } from "@/lib/products";
import { Arrow } from "./Arrow";

export function ProductExplore() {
  const featured = categories.filter((c) => c.featured);

  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-6 border-t border-rule pt-16 md:flex-row md:items-end md:pt-24">
          <div>
            <h2 className="font-display text-4xl leading-[1.05] font-semibold text-ink md:text-5xl">
              Product ranges
            </h2>
            <p className="mt-4 max-w-md text-night/70">
              Standard ranges in cartridge, in-line and manifold constructions.
              Most can be adapted for material, seals, porting or pressure.
            </p>
          </div>
          <Link href="/products" className="link-arrow shrink-0">
            Search the full catalogue
            <Arrow />
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {featured.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={`/products/${cat.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-xl bg-[#1c1d1c]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-4 pt-16 pb-4 md:px-5 md:pb-5">
                  <p className="font-display text-lg leading-tight font-semibold text-white md:text-xl">
                    {cat.name}
                  </p>
                  <p className="mt-1 flex items-center justify-between text-[13px] text-white/65 tabular-nums md:text-[14px]">
                    {cat.pressure}
                    <Arrow className="text-brass opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:-translate-x-1" />
                  </p>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-brass transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
