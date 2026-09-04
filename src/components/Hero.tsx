"use client";

import Link from "next/link";
import { CountUp } from "./Reveal";

function ValveImage({ className }: { className?: string }) {
  return (
    <picture>
      <source srcSet="/images/hero-valve.webp" type="image/webp" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-valve.jpg"
        alt="Precision-machined BiS stainless steel high-pressure valve"
        width={2560}
        height={1440}
        fetchPriority="high"
        decoding="async"
        className={className}
      />
    </picture>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-y-0 left-[28%] right-0 hidden lg:block">
        <ValveImage className="h-full w-full object-cover object-right" />
        <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-white via-white/75 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-5 pt-28 pb-10 md:px-10 lg:min-h-[100svh] lg:justify-center lg:pb-16">
        <div className="w-full max-w-xl bg-white lg:max-w-2xl lg:bg-transparent">
          <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
            Est. 1971 · Dorset, England
          </p>
          <h1 className="mt-6 font-display text-[16vw] leading-[0.82] font-semibold tracking-[-0.03em] text-night uppercase sm:text-[12vw] lg:text-[8.4vw] xl:text-[118px]">
            Precision
            <br />
            under
            <br />
            <span className="text-brass">pressure.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-night/70">
            High-performance flow control solutions engineered for the world&apos;s
            most demanding environments.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
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

          <div className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-black/10 pt-6">
            <div>
              <p className="font-display text-3xl text-night">
                <CountUp value={20000} />
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-night/55 uppercase">
                psi tested
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-night">
                <CountUp value={1379} />
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-night/55 uppercase">
                bar hydraulic
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-night">ISO</p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-night/55 uppercase">
                9001 · PED · ATEX
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative lg:hidden">
        <ValveImage className="h-[280px] w-full object-cover object-right sm:h-[380px]" />
      </div>
    </section>
  );
}
