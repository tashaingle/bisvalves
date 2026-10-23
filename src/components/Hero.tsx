import Link from "next/link";
import { Arrow } from "./Arrow";

const figures = [
  { value: "20,000 psi", caption: "Maximum working pressure" },
  { value: "1,379 bar", caption: "Hydraulic proof testing in-house" },
  { value: "316", caption: "Stainless steel as standard" },
  { value: "1971", caption: "Founded in Bournemouth" },
];

function Figure({ value, caption }: { value: string; caption: string }) {
  return (
    <div>
      <p className="font-display text-3xl font-semibold text-ink tabular-nums md:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-[14px] text-night/60">{caption}</p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-white pt-[76px] lg:flex lg:h-svh lg:max-h-[1100px] lg:flex-col">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 pt-14 text-center md:px-10 md:pt-20 lg:pt-[4svh]">
        <p className="label">Valve manufacturer · Dorset, England · Since 1971</p>
        <h1 className="mt-5 font-display text-[clamp(2.5rem,min(5.2vw,7svh),4.5rem)] leading-[1.02] font-semibold text-ink">
          Built for pressures <br className="hidden sm:block" />
          up to <span className="text-brass-bright">20,000&nbsp;psi.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg lg:mt-[2.4svh] leading-relaxed text-night/70">
          BiS designs, machines and tests small-bore stainless steel valves for
          subsea, topside, downhole and industrial gas service.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:mt-[3.5svh]">
          <Link href="/products" className="btn btn-primary">
            Browse products
            <Arrow />
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Discuss an application
          </Link>
        </div>
      </div>

      {/* Full-width band: white fading to pale brand green, valves centre stage. */}
      <div className="mt-10 bg-gradient-to-b from-white via-[#f1f7f1] to-[#e3efe3] md:mt-12 lg:mt-[1svh] lg:flex lg:min-h-0 lg:flex-1 lg:flex-col">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 pb-12 md:px-10 lg:min-h-0 lg:w-full lg:flex-1 lg:grid-cols-[1fr_auto_1fr] lg:grid-rows-[minmax(0,1fr)] lg:gap-16 lg:pb-[3svh]">
          <div className="order-2 grid grid-cols-2 gap-8 lg:order-1 lg:grid-cols-1 lg:gap-12 lg:text-right">
            <Figure {...figures[0]} />
            <Figure {...figures[1]} />
          </div>

          {/* The video is shot on white: multiply drops the white into the band,
              and the radial mask softens the frame's edges. */}
          <div className="relative order-1 mx-auto aspect-square w-[280px] sm:w-[340px] lg:order-2 lg:h-full lg:max-h-[560px] lg:w-auto">
            <video
              className="h-full w-full object-cover mix-blend-multiply [mask-image:radial-gradient(closest-side,black_88%,transparent)]"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/hero-valve-square-poster.jpg"
              aria-hidden
            >
              <source src="/videos/hero-valve-square.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="order-3 grid grid-cols-2 gap-8 lg:grid-cols-1 lg:gap-12">
            <Figure {...figures[2]} />
            <Figure {...figures[3]} />
          </div>
        </div>
        <div className="border-t border-[#d3e3d3]">
          <p className="mx-auto max-w-[1320px] px-5 py-5 text-center text-[14px] lg:py-3.5 text-night/60 md:px-10">
            ISO 9001 · ATEX · IECEx · PED · SIL 3 capable
          </p>
        </div>
      </div>
    </section>
  );
}
