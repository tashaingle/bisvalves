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
    <article className="bg-ink pt-24">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-mono text-[11px] tracking-[0.28em] text-brass uppercase">
            <Link href="/products" className="hover:text-paper">
              Products
            </Link>{" "}
            /{" "}
            <Link href={`/products/${cat?.slug}`} className="hover:text-paper">
              {cat?.name}
            </Link>
          </p>
          <div className="relative mt-6 overflow-hidden border border-white/10 bg-ink">
            <div className="pointer-events-none absolute inset-0 grid-overlay opacity-50" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={`${product.name} ${product.code}`}
              className="relative mx-auto w-[80%] py-12 mix-blend-lighten"
            />
          </div>
        </div>
        <div className="lg:col-span-6">
          <p className="font-mono text-[12px] tracking-[0.28em] text-brass uppercase">
            {product.code}
          </p>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] font-semibold text-paper uppercase md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-5 text-lg text-mist">{product.summary}</p>
          <dl className="mt-8 grid grid-cols-2 gap-px bg-white/10">
            {product.specs.map((s) => (
              <div key={s.label} className="bg-ink p-4">
                <dt className="font-mono text-[10px] tracking-[0.2em] text-brass uppercase">
                  {s.label}
                </dt>
                <dd className="mt-1 text-paper">{s.value}</dd>
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
              className="border border-white/20 px-5 py-3 font-mono text-[11px] tracking-[0.22em] text-paper uppercase hover:border-brass"
            >
              Downloads
            </Link>
          </div>
        </div>
      </div>

      <section className="border-t border-white/10 bg-charcoal">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl text-paper uppercase">Engineering notes</h2>
            <p className="mt-4 leading-relaxed text-mist">{product.description}</p>
            <h3 className="mt-10 font-display text-2xl text-paper uppercase">Applications</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {product.applications.map((a) => (
                <li key={a} className="border-l border-brass pl-3 text-mist">
                  {a}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 font-display text-2xl text-paper uppercase">Materials</h3>
            <p className="mt-3 text-mist">{product.materials.join(" · ")}</p>
            <h3 className="mt-10 font-display text-2xl text-paper uppercase">Features</h3>
            <ul className="mt-4 space-y-2">
              {product.features.map((f) => (
                <li key={f} className="font-mono text-sm tracking-wide text-paper">
                  — {f}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5">
            <div className="border border-white/10 p-6">
              <h3 className="font-display text-2xl text-paper uppercase">Technical drawings</h3>
              <p className="mt-3 text-sm text-mist">
                Dimensional datasheets are available from the literature library.
                Contact engineering for CAD and application-specific drawings.
              </p>
              <ul className="mt-5 space-y-3">
                {downloads.map((d) => (
                  <li key={d.href}>
                    <a
                      href={d.href}
                      className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 font-mono text-[11px] tracking-[0.16em] text-brass uppercase hover:text-brass-bright"
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
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10">
            <h2 className="font-display text-3xl text-paper uppercase">Related products</h2>
            <div className="mt-8 grid gap-px bg-white/10 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/products/${r.category}/${r.slug}`}
                  className="bg-ink p-6 hover:bg-steel"
                >
                  <p className="font-mono text-[11px] text-brass">{r.code}</p>
                  <p className="mt-2 font-display text-2xl uppercase">{r.name}</p>
                  <p className="mt-2 text-sm text-mist">{r.pressureLabel}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="enquire" className="border-t border-white/10 bg-charcoal">
        <div className="mx-auto max-w-[800px] px-5 py-16 md:px-10">
          <h2 className="font-display text-4xl text-paper uppercase">Enquire on {product.code}</h2>
          <p className="mt-3 mb-8 text-mist">
            Send pressures, fluid, temperature and envelope. Engineering will
            confirm suitability or propose a variant.
          </p>
          <EnquiryForm product={`${product.name} ${product.code}`} />
        </div>
      </section>
    </article>
  );
}
