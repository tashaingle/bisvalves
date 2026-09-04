import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustry, industries } from "@/lib/industries";
import { categories } from "@/lib/products";
import { PageHero } from "@/components/PageHero";
import { FinalCTA } from "@/components/FinalCTA";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return { title: `${ind.name} applications`, description: ind.summary };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();
  const related = categories.filter((c) => ind.products.includes(c.slug));

  return (
    <>
      <PageHero kicker="Industry" title={ind.name} lede={ind.kicker} image={ind.image} />
      <section className="bg-charcoal py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-mist">{ind.body}</p>
            <h2 className="mt-12 font-display text-3xl text-paper uppercase">Typical duties</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {ind.applications.map((a) => (
                <li key={a} className="border-l border-brass pl-4 text-paper">
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <aside className="md:col-span-5">
            <div className="border border-white/10 p-6">
              <h2 className="font-display text-2xl text-paper uppercase">Specified products</h2>
              <ul className="mt-5 space-y-3">
                {related.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/products/${c.slug}`}
                      className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[12px] tracking-[0.16em] uppercase hover:text-brass"
                    >
                      {c.name}
                      <span>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
