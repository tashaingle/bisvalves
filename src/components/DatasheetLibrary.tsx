"use client";

import { useMemo, useState } from "react";
import type { Datasheet } from "@/lib/datasheets";

type Range = { slug: string; name: string; overview?: Datasheet; sheets: Datasheet[] };

const norm = (s: string) => s.toUpperCase().replace(/[^A-Z0-9]/g, "");

export function DatasheetLibrary({ ranges }: { ranges: Range[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = norm(q);
    if (!term) return ranges;
    return ranges
      .map((r) => ({
        ...r,
        sheets: r.sheets.filter((d) => norm(d.code ?? "").includes(term)),
      }))
      .filter((r) => r.sheets.length > 0 || norm(r.name).includes(term));
  }, [q, ranges]);

  const count = filtered.reduce((n, r) => n + r.sheets.length, 0);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-night pb-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Product datasheets
        </h2>
        <label className="w-full sm:w-80">
          <span className="sr-only">Search by model code</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by model code, e.g. RL25"
            className="h-12 w-full rounded-full border border-night/20 bg-white px-5 text-[15px] text-night outline-none placeholder:text-night/40 focus:border-brass-bright"
          />
        </label>
      </div>

      {filtered.length === 0 && (
        <p className="py-10 text-night/70">
          No datasheet matches &ldquo;{q}&rdquo;. Ask us for it at the email
          address below.
        </p>
      )}

      {q && filtered.length > 0 && (
        <p className="pt-6 text-[14px] text-night/55">
          {count} {count === 1 ? "datasheet" : "datasheets"}
        </p>
      )}

      {filtered.map((r) => (
        <section key={r.slug} className="grid gap-6 border-b border-rule py-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="font-display text-2xl font-semibold text-ink">{r.name}</h3>
            {r.overview && (
              <a
                href={r.overview.href}
                className="mt-2 inline-block text-[15px] text-brass-bright hover:underline"
              >
                Range overview (PDF, {r.overview.sizeKb} KB)
              </a>
            )}
          </div>
          <ul className="flex flex-wrap content-start gap-2 lg:col-span-8">
            {r.sheets.map((d) => (
              <li key={d.href}>
                <a
                  href={d.href}
                  title={`${d.code} datasheet, PDF, ${d.sizeKb} KB`}
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-rule px-4 text-[14px] font-medium text-night tabular-nums transition-colors hover:border-brass-bright hover:bg-brass-bright hover:text-white"
                >
                  {d.code}
                  <span className="text-[12px] font-normal opacity-60">PDF</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
