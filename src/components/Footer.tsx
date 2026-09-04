import Link from "next/link";
import { Logo } from "./Logo";
import { site, nav } from "@/lib/site";
import { categories } from "@/lib/products";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
            Specialist UK manufacturer of small-bore stainless steel pressure and
            flow control valves for the world&apos;s most demanding environments.
          </p>
          <p className="mt-6 font-mono text-[11px] tracking-[0.18em] text-brass uppercase">
            Est. 1971 · Dorset, England
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="font-mono text-[10px] tracking-[0.28em] text-brass uppercase">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-mist hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/quality" className="text-sm text-mist hover:text-paper">
                Quality
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="font-mono text-[10px] tracking-[0.28em] text-brass uppercase">
            Product ranges
          </p>
          <ul className="mt-4 columns-1 space-y-2 sm:columns-2 md:columns-1">
            {categories
              .filter((c) => c.featured)
              .map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products/${c.slug}`}
                    className="text-sm text-mist hover:text-paper"
                  >
                    {c.short}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="font-mono text-[10px] tracking-[0.28em] text-brass uppercase">
            Head office
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            {site.offices[0].lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <a
            href={site.phoneHref}
            className="mt-4 block font-mono text-sm text-paper hover:text-brass"
          >
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="block font-mono text-sm text-paper hover:text-brass"
          >
            {site.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-5 text-[11px] tracking-wide text-mist/70 md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            © {new Date().getFullYear()} {site.legal}. Registered company no.{" "}
            {site.companyNo}.
          </p>
          <p>
            Sister company{" "}
            <a href={site.sister.href} className="text-brass hover:text-brass-bright">
              {site.sister.name}
            </a>{" "}
            · industrial gas &amp; oxygen service.
          </p>
        </div>
      </div>
    </footer>
  );
}
