"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { industries } from "@/lib/industries";

export function IndustryCarousel() {
  const slides = industries;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = slides[index];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
          02 · Applications
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-display text-5xl leading-[0.95] font-semibold text-night uppercase md:text-7xl">
            Where the work
            <br />
            actually happens.
          </h2>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center border border-black/15 text-night hover:border-brass hover:text-brass"
              aria-label="Previous industry"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center border border-black/15 text-night hover:border-brass hover:text-brass"
              aria-label="Next industry"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        className="mx-auto mt-12 max-w-[1440px] px-5 md:px-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="grid overflow-hidden border border-black/10 bg-white lg:grid-cols-12">
          <div className="relative min-h-[320px] lg:col-span-7 lg:min-h-[560px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={current.slug}
              src={current.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-12 lg:col-span-5 md:px-12">
            <p className="font-mono text-[11px] tracking-[0.28em] text-brass uppercase">
              {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </p>
            <p className="mt-5 text-sm tracking-wide text-night/60">{current.kicker}</p>
            <h3 className="mt-3 font-display text-5xl text-night uppercase md:text-6xl">
              {current.name}
            </h3>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-night/75">
              {current.summary}
            </p>
            <Link
              href={`/industries/${current.slug}`}
              className="mt-8 inline-flex w-fit items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-brass uppercase hover:text-brass-bright"
            >
              View application
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.slug}
              type="button"
              onClick={() => setIndex(i)}
              className={`px-3 py-2 font-mono text-[10px] tracking-[0.18em] uppercase transition-colors ${
                i === index
                  ? "bg-brass text-white"
                  : "bg-charcoal text-night/70 hover:text-night"
              }`}
            >
              {slide.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
