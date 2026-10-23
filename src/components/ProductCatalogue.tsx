"use client";

import { useMemo, useState } from "react";
import {
  allMaterials,
  categories,
  products,
  pressureBands,
} from "@/lib/products";
import { industries } from "@/lib/industries";
import { ProductCard } from "./ProductCard";

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
        <div className="sticky top-24 space-y-6 rounded-xl border border-rule bg-white p-6">
          <label className="block">
            <span className="text-[14px] font-medium text-night">
              Search
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Model, function…"
              className="mt-2 h-11 w-full rounded-lg border border-night/20 bg-white px-3 text-[15px] text-night outline-none focus:border-brass-bright"
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
          <p className="text-[14px] text-night/60 tabular-nums">
            {filtered.length} products
          </p>
        </div>
      </aside>
      <div className="grid content-start gap-4 sm:grid-cols-2 lg:col-span-9 xl:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard
            key={`${p.category}-${p.slug}`}
            product={p}
            label={`${categories.find((c) => c.slug === p.category)?.short} · ${p.code}`}
          />
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
      <span className="text-[14px] font-medium text-night">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 h-11 w-full rounded-lg border border-night/20 bg-white px-3 text-[15px] text-night outline-none focus:border-brass-bright"
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
