"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function EnquiryForm({ product }: { product?: string }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const body = [...data.entries()]
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n");
        const subject = encodeURIComponent(
          product ? `Application enquiry — ${product}` : "Talk to an engineer",
        );
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field name="name" label="Name" required />
        <Field name="company" label="Company" required />
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Phone" />
      </div>
      <Field name="application" label="Application / environment" placeholder="Subsea wellhead, HPU, downhole tool…" />
      <div className="grid gap-5 md:grid-cols-2">
        <Field name="pressure" label="Working pressure" placeholder="e.g. 10,000 psi" />
        <Field name="media" label="Fluid / gas" placeholder="Mineral oil, seawater, nitrogen…" />
      </div>
      {product && <input type="hidden" name="product" value={product} />}
      <label className="block">
        <span className="font-mono text-[10px] tracking-[0.24em] text-brass uppercase">
          Requirements
        </span>
        <textarea
          name="message"
          rows={5}
          className="mt-2 w-full border border-black/15 bg-white px-4 py-3 text-sm text-night outline-none focus:border-brass"
        />
      </label>
      <button
        type="submit"
        className="inline-flex w-fit items-center gap-3 border border-brass bg-brass px-6 py-3 font-mono text-[11px] tracking-[0.24em] text-white uppercase hover:bg-brass-bright"
      >
        {sent ? "Opening mail client" : "Talk to an engineer"}
        <span aria-hidden>→</span>
      </button>
      {sent && (
        <p className="text-sm text-night/70">
          If your mail client does not open, write to{" "}
          <a className="text-brass" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.24em] text-brass uppercase">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-black/15 bg-white px-4 py-3 text-sm text-night outline-none placeholder:text-mist/40 focus:border-brass"
      />
    </label>
  );
}
