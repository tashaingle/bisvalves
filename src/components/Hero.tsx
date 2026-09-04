"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CountUp } from "./Reveal";

export function Hero() {
  const stage = useRef<HTMLDivElement>(null);
  const product = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = product.current;
    const host = stage.current;
    if (!el || !host) return;

    const onMove = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg)`;
    };
    const onLeave = () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg)";
    };
    host.addEventListener("mousemove", onMove);
    host.addEventListener("mouseleave", onLeave);
    return () => {
      host.removeEventListener("mousemove", onMove);
      host.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-white">
      <div className="relative mx-auto grid min-h-[100svh] max-w-[1440px] items-center gap-8 px-5 pt-24 pb-16 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-mono text-[11px] tracking-[0.32em] text-brass uppercase">
            Est. 1971 · Dorset, England
          </p>
          <h1 className="mt-6 font-display text-[18vw] leading-[0.82] font-semibold tracking-[-0.03em] text-night uppercase sm:text-[12vw] lg:text-[8.4vw] xl:text-[118px]">
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
              className="inline-flex items-center gap-3 border border-night/20 px-6 py-3 font-mono text-[11px] tracking-[0.24em] text-night uppercase transition-colors hover:border-brass hover:text-brass"
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

        <div
          ref={stage}
          className="relative flex min-h-[420px] items-center justify-center lg:col-span-6 lg:min-h-[640px]"
          style={{ perspective: "1200px" }}
        >
          <div
            ref={product}
            className="float-y relative z-10 w-[78%] max-w-[460px] transition-transform duration-200 ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-valve.jpg"
              alt="Precision-machined BiS stainless steel high-pressure valve"
              className="relative z-10 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
