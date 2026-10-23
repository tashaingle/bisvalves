import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, productsIn } from "@/lib/products";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";
import { Arrow } from "@/components/Arrow";
import { site } from "@/lib/site";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};
  return { title: cat.name, description: cat.description };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();
  const items = productsIn(cat.slug);

  return (
    <>
      <PageHero kicker="Product range" title={cat.name} lede={cat.description} />
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1320px] px-5 md:px-10">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-night pb-5">
            <p className="text-night/70 tabular-nums">
              {items.length} {items.length === 1 ? "model" : "models"} ·{" "}
              {/^(To )?d/.test(cat.pressure)
                ? `up to ${cat.pressure.replace(/^To /, "")}`
                : cat.pressure.toLowerCase()}
            </p>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${cat.name}`)}`}
              className="link-arrow"
            >
              Email us about this range
              <Arrow />
            </a>
          </div>
          {/* Products in a range share one photo, so list them as a spec table. */}
          <div className="hidden grid-cols-12 gap-6 pb-3 text-[13px] text-night/55 md:grid">
            <span className="col-span-2">Model</span>
            <span className="col-span-3">Product</span>
            <span className="col-span-5">Description</span>
            <span className="col-span-2 text-right">Rating</span>
          </div>
          <ul className="border-t border-rule">
            {items.map((p) => (
              <li key={p.slug} className="border-b border-rule">
                <Link
                  href={`/products/${p.category}/${p.slug}`}
                  className="group grid gap-x-6 gap-y-1 py-5 md:grid-cols-12 md:items-baseline"
                >
                  <span className="font-display text-xl font-semibold text-ink tabular-nums group-hover:text-brass-bright md:col-span-2">
                    {p.code}
                  </span>
                  <span className="font-medium text-night md:col-span-3">{p.name}</span>
                  <span className="text-[15px] text-night/65 md:col-span-5">{p.summary}</span>
                  <span className="text-[15px] text-night tabular-nums md:col-span-2 md:text-right">
                    {p.pressureLabel}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
