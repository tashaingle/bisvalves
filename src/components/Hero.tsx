"use client";

import Link from "next/link";
import { CountUp } from "./Reveal";

function ValveVideo({ className }: { className?: string }) {
  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/images/hero-valve-poster.jpg"
      aria-hidden
    >
      <source src="/videos/hero-valve.mp4" type="video/mp4" />
    </video>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-y-0 left-[28%] right-0 hidden lg:block">
        <ValveVideo className="h-full w-full object-cover object-right" />
        <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-white via-white/75 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-5 pt-28 pb-10 md:px-10 lg:h-[100svh] lg:pb-12">
        <div className="flex w-full max-w-xl flex-col bg-white lg:h-full lg:max-w-2xl lg:justify-between lg:bg-transparent">
          <div>
            <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
              Est. 1971 · Dorset, England
            </p>
            <h1 className="mt-5 font-display text-[16vw] leading-[0.82] font-semibold tracking-[-0.03em] text-night uppercase sm:text-[12vw] lg:mt-8 lg:text-[8.4vw] xl:text-[118px]">
              Precision
              <br />
              under
              <br />
              <span className="text-brass">pressure.</span>
            </h1>
          </div>

          <div className="mt-8 lg:mt-0">
            <p className="max-w-md text-lg leading-relaxed text-night/70 lg:max-w-lg lg:text-xl">
              High-performance flow control solutions engineered for the world&apos;s
              most demanding environments.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 lg:mt-10">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 border border-brass bg-brass px-6 py-3 font-mono text-[11px] tracking-[0.24em] text-white uppercase transition-colors hover:bg-brass-bright"
              >
                Explore products
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-night/20 bg-white px-6 py-3 font-mono text-[11px] tracking-[0.24em] text-night uppercase transition-colors hover:border-brass hover:text-brass"
              >
                Discuss your application
              </Link>
            </div>
          </div>

          <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-black/10 pt-6 lg:mt-0 lg:max-w-xl lg:gap-10 lg:pt-8">
            <div>
              <p className="font-display text-3xl text-night lg:text-4xl">
                <CountUp value={20000} />
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-night/55 uppercase">
                psi tested
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-night lg:text-4xl">
                <CountUp value={1379} />
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-night/55 uppercase">
                bar hydraulic
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-night lg:text-4xl">ISO</p>
              <p className="mt-1 font-mono text-[8px] tracking-[0.08em] text-night/55 uppercase whitespace-nowrap sm:text-[10px] sm:tracking-[0.2em]">
                9001 · PED · ATEX
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative lg:hidden">
        <ValveVideo className="h-[280px] w-full object-cover object-right sm:h-[380px]" />
      </div>
    </section>
  );
}
