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
import { resources } from "@/lib/resources";

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
  const downloads = resources.filter(
    (r) =>
      r.type === "Brochure" ||
      r.type === "Datasheet" ||
      r.category.toLowerCase().includes(cat?.short.toLowerCase() ?? "zzz"),
  ).slice(0, 4);

  return (
    <article className="bg-white pt-24">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-mono text-[11px] tracking-[0.28em] text-brass uppercase">
            <Link href="/products" className="hover:text-night">
              Products
            </Link>{" "}
            /{" "}
            <Link href={`/products/${cat?.slug}`} className="hover:text-night">
              {cat?.name}
            </Link>
          </p>
          <div className="relative mt-6 overflow-hidden border border-black/10 bg-[#f6f6f4]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={`${product.name} ${product.code}`}
              className="relative mx-auto w-[80%] py-12"
            />
          </div>
        </div>
        <div className="lg:col-span-6">
          <p className="font-mono text-[12px] tracking-[0.28em] text-brass uppercase">
            {product.code}
          </p>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] font-semibold text-night uppercase md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-5 text-lg text-night/70">{product.summary}</p>
          <dl className="mt-8 grid grid-cols-2 gap-px bg-black/10">
            {product.specs.map((s) => (
              <div key={s.label} className="bg-white p-4">
                <dt className="font-mono text-[10px] tracking-[0.2em] text-brass uppercase">
                  {s.label}
                </dt>
                <dd className="mt-1 text-night">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#enquire"
              className="border border-brass bg-brass px-5 py-3 font-mono text-[11px] tracking-[0.22em] text-white uppercase"
            >
              Enquire
            </Link>
            <Link
              href="/technical-resources"
              className="border border-black/15 px-5 py-3 font-mono text-[11px] tracking-[0.22em] text-night uppercase hover:border-brass"
            >
              Downloads
            </Link>
          </div>
        </div>
      </div>

      <section className="border-t border-black/10 bg-charcoal">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl text-night uppercase">Engineering notes</h2>
            <p className="mt-4 leading-relaxed text-night/70">{product.description}</p>
            <h3 className="mt-10 font-display text-2xl text-night uppercase">Applications</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {product.applications.map((a) => (
                <li key={a} className="border-l border-brass pl-3 text-night/80">
                  {a}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 font-display text-2xl text-night uppercase">Materials</h3>
            <p className="mt-3 text-night/70">{product.materials.join(" · ")}</p>
            <h3 className="mt-10 font-display text-2xl text-night uppercase">Features</h3>
            <ul className="mt-4 space-y-2">
              {product.features.map((f) => (
                <li key={f} className="font-mono text-sm tracking-wide text-night">
                  — {f}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5">
            <div className="border border-black/10 bg-white p-6">
              <h3 className="font-display text-2xl text-night uppercase">Technical drawings</h3>
              <p className="mt-3 text-sm text-night/70">
                Dimensional datasheets are available from the literature library.
                Contact engineering for CAD and application-specific drawings.
              </p>
              <ul className="mt-5 space-y-3">
                {downloads.map((d) => (
                  <li key={d.href}>
                    <a
                      href={d.href}
                      className="flex items-center justify-between gap-3 border-b border-black/10 pb-3 font-mono text-[11px] tracking-[0.16em] text-brass uppercase hover:text-brass-bright"
                    >
                      {d.title}
                      <span>PDF</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-black/10 bg-white">
          <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10">
            <h2 className="font-display text-3xl text-night uppercase">Related products</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/products/${r.category}/${r.slug}`}
                  className="border border-black/10 bg-white p-6 hover:border-brass"
                >
                  <p className="font-mono text-[11px] text-brass">{r.code}</p>
                  <p className="mt-2 font-display text-2xl text-night uppercase">{r.name}</p>
                  <p className="mt-2 text-sm text-night/70">{r.pressureLabel}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="enquire" className="border-t border-black/10 bg-charcoal">
        <div className="mx-auto max-w-[800px] px-5 py-16 md:px-10">
          <h2 className="font-display text-4xl text-night uppercase">Enquire on {product.code}</h2>
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
