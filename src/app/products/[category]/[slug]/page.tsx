import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categories,
  getProduct,
  products,
  relatedProducts,
} from "@/lib/products";
import Image from "next/image";
import { Arrow } from "@/components/Arrow";
import { FinalCTA } from "@/components/FinalCTA";
import { site } from "@/lib/site";
import { datasheetFor, generalDocuments, rangeOverview } from "@/lib/resources";

type Props = { params: Promise<{ category: string; slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProduct(category, slug);
  if (!product) return {};
  return {
    title: `${product.name} (${product.code})`,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: Props) {
  const { category, slug } = await params;
  const product = getProduct(category, slug);
  if (!product) notFound();
  const cat = categories.find((c) => c.slug === product.category);
  const related = relatedProducts(product);
  const datasheet = datasheetFor(product.code, product.category);
  const overview = rangeOverview(product.category);
  const downloads = [
    datasheet && { title: `${datasheet.code} datasheet`, href: datasheet.href, sizeKb: datasheet.sizeKb },
    overview && { title: `${cat?.name ?? "Range"} overview`, href: overview.href, sizeKb: overview.sizeKb },
    ...generalDocuments.map((d) => ({ title: d.title, href: d.href, sizeKb: d.sizeKb })),
  ].filter((d) => !!d);
  const enquiryHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Enquiry: ${product.code} ${product.name}`,
  )}`;

  return (
    <article className="bg-white pt-[76px]">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 pt-10 pb-16 md:px-10 md:pt-14 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <nav aria-label="Breadcrumb" className="text-[14px] text-night/55">
            <Link href="/products" className="hover:text-brass-bright">
              Products
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/products/${cat?.slug}`} className="hover:text-brass-bright">
              {cat?.name}
            </Link>
          </nav>
          <div className="relative mt-6 aspect-square overflow-hidden rounded-2xl bg-[#1c1d1c]">
            <Image
              src={product.image}
              alt={`${product.name} ${product.code}`}
              fill
              preload
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-6 lg:pt-10">
          <p className="label tabular-nums">{product.code}</p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] font-semibold text-ink md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-night/70">{product.summary}</p>

          <dl className="mt-8 grid grid-cols-2 border-t border-night">
            {product.specs.map((s) => (
              <div key={s.label} className="border-b border-rule py-4 pr-4">
                <dt className="text-[13px] text-night/55">{s.label}</dt>
                <dd className="mt-1 font-medium text-night tabular-nums">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={enquiryHref} className="btn btn-primary">
              Email us about this valve
              <Arrow />
            </a>
            {datasheet && (
              <a href={datasheet.href} className="btn btn-secondary">
                Download datasheet
              </a>
            )}
          </div>
          <p className="mt-4 text-[14px] text-night/55">
            Or call{" "}
            <a href={site.phoneHref} className="text-night tabular-nums hover:text-brass-bright">
              {site.phone}
            </a>
          </p>
        </div>
      </div>

      <section className="border-t border-rule">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 md:px-10 md:py-20 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-semibold text-ink">Engineering notes</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-night/70">{product.description}</p>

            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Applications</h3>
                <ul className="mt-3 space-y-2 text-night/75">
                  {product.applications.map((a) => (
                    <li key={a} className="flex gap-3">
                      <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">Features</h3>
                <ul className="mt-3 space-y-2 text-night/75">
                  {product.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="mt-10 font-display text-xl font-semibold text-ink">Materials</h3>
            <p className="mt-3 text-night/75">{product.materials.join(" · ")}</p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-rule p-6 md:p-8">
              <h2 className="font-display text-xl font-semibold text-ink">Downloads</h2>
              <p className="mt-2 text-[15px] text-night/65">
                {datasheet
                  ? "The datasheet includes dimensions, performance and ordering codes."
                  : "A datasheet for this model is available on request."}{" "}
                Ask us for CAD and application-specific drawings.
              </p>
              <ul className="mt-5 border-t border-rule">
                {downloads.map((d) => (
                  <li key={d.href} className="border-b border-rule">
                    <a
                      href={d.href}
                      className="flex items-center justify-between gap-3 py-3 text-[15px] font-medium text-brass-bright hover:underline"
                    >
                      {d.title}
                      <span className="shrink-0 text-[13px] font-normal text-night/50">
                        PDF, {d.sizeKb} KB
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-rule">
          <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-20">
            <h2 className="font-display text-3xl font-semibold text-ink">Related products</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/products/${r.category}/${r.slug}`}
                  className="group rounded-xl border border-rule p-6 transition-colors hover:border-brass-bright"
                >
                  <p className="label tabular-nums">{r.code}</p>
                  <p className="mt-2 font-display text-xl font-semibold text-ink group-hover:text-brass-bright">
                    {r.name}
                  </p>
                  <p className="mt-2 text-[15px] text-night/65 tabular-nums">{r.pressureLabel}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </article>
  );
}
