import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product, label }: { product: Product; label?: string }) {
  return (
    <Link
      href={`/products/${product.category}/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-rule bg-white transition-colors hover:border-brass-bright"
    >
      <div className="relative aspect-square overflow-hidden bg-[#1c1d1c]">
        <Image
          src={product.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="label tabular-nums">{label ?? product.code}</p>
        <h2 className="mt-1.5 font-display text-xl font-semibold text-ink transition-colors group-hover:text-brass-bright">
          {product.name}
        </h2>
        <p className="mt-2 line-clamp-2 text-[15px] text-night/65">{product.summary}</p>
        <p className="mt-auto pt-4 text-[15px] font-medium text-night tabular-nums">
          {product.pressureLabel}
        </p>
      </div>
    </Link>
  );
}
