"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  allMaterials,
  categories,
  products,
  pressureBands,
  type Product,
} from "@/lib/products";
import { industries } from "@/lib/industries";

export function ProductCatalogue() {
  const [type, setType] = useState("all");
  const [industry, setIndustry] = useState("all");
  const [pressure, setPressure] = useState("all");
  const [material, setMaterial] = useState("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (type !== "all" && p.category !== type) return false;
      if (industry !== "all" && !p.industries.includes(industry)) return false;
      if (material !== "all" && !p.materials.includes(material)) return false;
      if (pressure !== "all") {
        const band = pressureBands.find((b) => b.id === pressure);
        if (band) {
          const min = "min" in band ? band.min ?? 0 : 0;
          const max = "max" in band ? band.max ?? Infinity : Infinity;
          if (p.pressurePsi < min || p.pressurePsi > max) return false;
        }
      }
      if (q) {
        const hay = `${p.code} ${p.name} ${p.summary}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [type, industry, pressure, material, q]);

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <aside className="lg:col-span-3">
        <div className="sticky top-24 space-y-8 border border-black/10 bg-white p-6">
          <label className="block">
            <span className="font-mono text-[10px] tracking-[0.24em] text-brass uppercase">
              Search
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Model, function…"
              className="mt-2 w-full border border-black/15 bg-white px-3 py-2 text-sm text-night outline-none focus:border-brass"
            />
          </label>
          <Filter
            label="Product type"
            value={type}
            onChange={setType}
            options={[
              { id: "all", label: "All ranges" },
              ...categories.map((c) => ({ id: c.slug, label: c.short })),
            ]}
          />
          <Filter
            label="Industry"
            value={industry}
            onChange={setIndustry}
            options={[
              { id: "all", label: "All industries" },
              ...industries.map((i) => ({ id: i.slug, label: i.name })),
            ]}
          />
          <Filter
            label="Pressure"
            value={pressure}
            onChange={setPressure}
            options={[
              { id: "all", label: "Any pressure" },
              ...pressureBands.map((b) => ({ id: b.id, label: b.label })),
            ]}
          />
          <Filter
            label="Material"
            value={material}
            onChange={setMaterial}
            options={[
              { id: "all", label: "Any material" },
              ...allMaterials.map((m) => ({ id: m, label: m })),
            ]}
          />
          <p className="font-mono text-[11px] tracking-[0.16em] text-night/60 uppercase">
            {filtered.length} products
          </p>
        </div>
      </aside>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 lg:col-span-9">
        {filtered.map((p) => (
          <ProductTile key={`${p.category}-${p.slug}`} product={p} />
        ))}
      </div>
    </div>
  );
}

function Filter({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { id: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.24em] text-brass uppercase">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border border-black/15 bg-white px-3 py-2 text-sm text-night outline-none focus:border-brass"
      >
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function ProductTile({ product }: { product: Product }) {
  const cat = categories.find((c) => c.slug === product.category);
  return (
    <Link
      href={`/products/${product.category}/${product.slug}`}
      className="group relative flex min-h-[340px] flex-col overflow-hidden border border-black/10 bg-white p-6"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.image}
        alt=""
        className="mx-auto h-40 w-auto object-contain transition duration-500 group-hover:scale-105"
      />
      <p className="mt-4 font-mono text-[10px] tracking-[0.22em] text-brass uppercase">
        {cat?.short} · {product.code}
      </p>
      <h3 className="mt-2 font-display text-2xl text-night uppercase">{product.name}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-night/70">{product.summary}</p>
      <p className="mt-auto pt-4 font-mono text-[11px] tracking-[0.16em] text-night uppercase">
        {product.pressureLabel}
        <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">→</span>
      </p>
    </Link>
  );
}
