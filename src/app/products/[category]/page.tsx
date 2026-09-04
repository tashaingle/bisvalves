import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, productsIn } from "@/lib/products";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";

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
      <PageHero kicker="Product range" title={cat.name} lede={cat.description} image={cat.image} />
      <section className="bg-charcoal py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <p className="font-mono text-[11px] tracking-[0.24em] text-brass uppercase">
              {items.length} models · {cat.pressure}
            </p>
            <Link
              href={`/contact?product=${cat.name}`}
              className="font-mono text-[11px] tracking-[0.22em] text-night uppercase hover:text-brass"
            >
              Enquire on this range →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {items.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.category}/${p.slug}`}
                className="group flex min-h-[300px] flex-col border border-black/10 bg-white p-7"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt=""
                  className="mx-auto h-36 object-contain transition duration-500 group-hover:scale-105"
                />
                <p className="mt-4 font-mono text-[11px] tracking-[0.22em] text-brass uppercase">
                  {p.code}
                </p>
                <h2 className="mt-2 font-display text-2xl text-night uppercase">{p.name}</h2>
                <p className="mt-2 text-sm text-night/70">{p.summary}</p>
                <p className="mt-auto pt-5 font-mono text-[11px] tracking-[0.16em] text-night uppercase">
                  {p.pressureLabel}{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
