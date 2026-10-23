import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categories,
  getProduct,
  products,
  relatedProducts,
} from "@/lib/products";
import { EnquiryForm } from "@/components/EnquiryForm";
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

  return (
    <article className="bg-white pt-24">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-12 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="text-[13px] text-brass-bright font-medium">
            <Link href="/products" className="hover:text-night">
              Products
            </Link>{" "}
            /{" "}
            <Link href={`/products/${cat?.slug}`} className="hover:text-night">
              {cat?.name}
            </Link>
          </p>
          <div className="relative mt-6 overflow-hidden border border-rule bg-panel">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={`${product.name} ${product.code}`}
              className="relative mx-auto w-[80%] py-12"
            />
          </div>
        </div>
        <div className="lg:col-span-6">
          <p className="text-[13px] text-brass-bright font-medium">
            {product.code}
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] font-semibold text-ink md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-5 text-lg text-night/70">{product.summary}</p>
          <dl className="mt-8 grid grid-cols-2 gap-px bg-black/10">
            {product.specs.map((s) => (
              <div key={s.label} className="bg-white p-4">
                <dt className="text-[13px] text-brass-bright font-medium">
                  {s.label}
                </dt>
                <dd className="mt-1 text-night">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#enquire"
              className="btn btn-primary"
            >
              Enquire
            </Link>
            {datasheet ? (
              <a href={datasheet.href} className="btn btn-secondary">
                Download datasheet
              </a>
            ) : (
              <Link href="/technical-resources" className="btn btn-secondary">
                Downloads
              </Link>
            )}
          </div>
        </div>
      </div>

      <section className="border-t border-rule bg-charcoal">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl text-ink font-semibold">Engineering notes</h2>
            <p className="mt-4 leading-relaxed text-night/70">{product.description}</p>
            <h3 className="mt-10 font-display text-xl text-ink font-semibold">Applications</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {product.applications.map((a) => (
                <li key={a} className="border-l border-brass pl-3 text-night/80">
                  {a}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 font-display text-xl text-ink font-semibold">Materials</h3>
            <p className="mt-3 text-night/70">{product.materials.join(" · ")}</p>
            <h3 className="mt-10 font-display text-xl text-ink font-semibold">Features</h3>
            <ul className="mt-4 space-y-2">
              {product.features.map((f) => (
                <li key={f} className="text-sm text-night tabular-nums">
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5">
            <div className="border border-rule bg-white p-6">
              <h3 className="font-display text-xl text-ink font-semibold">Downloads</h3>
              <p className="mt-3 text-sm text-night/70">
                {datasheet
                  ? "The datasheet includes dimensions, performance and ordering codes."
                  : "A datasheet for this model is available on request."}{" "}
                Contact engineering for CAD and application-specific drawings.
              </p>
              <ul className="mt-5 space-y-3">
                {downloads.map((d) => (
                  <li key={d.href}>
                    <a
                      href={d.href}
                      className="flex items-center justify-between gap-3 border-b border-rule pb-3 text-[13px] text-brass-bright hover:text-brass-bright font-medium"
                    >
                      {d.title}
                      <span className="shrink-0 text-night/50">PDF, {d.sizeKb} KB</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-rule bg-white">
          <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10">
            <h2 className="font-display text-2xl text-ink font-semibold">Related products</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/products/${r.category}/${r.slug}`}
                  className="border border-rule bg-white p-6 hover:border-night/40"
                >
                  <p className="text-[13px] text-brass-bright font-medium">{r.code}</p>
                  <p className="mt-2 font-display text-xl text-ink font-semibold">{r.name}</p>
                  <p className="mt-2 text-sm text-night/70">{r.pressureLabel}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="enquire" className="border-t border-rule bg-charcoal">
        <div className="mx-auto max-w-[800px] px-5 py-16 md:px-10">
          <h2 className="font-display text-3xl text-ink font-semibold">Enquire on {product.code}</h2>
          <p className="mt-3 mb-8 text-night/70">
            Send pressures, fluid, temperature and envelope. Engineering will
            confirm suitability or propose a variant.
          </p>
          <EnquiryForm product={`${product.name} ${product.code}`} />
        </div>
      </section>
    </article>
  );
}
