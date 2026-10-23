import Link from "next/link";
import { Logo } from "./Logo";
import { site, nav } from "@/lib/site";
import { categories } from "@/lib/products";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <Logo size="md" />
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-night/65">
            Specialist UK manufacturer of small-bore stainless steel pressure and
            flow control valves for the world&apos;s most demanding environments.
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-[13px] font-medium text-night">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[15px] text-night/65 hover:text-brass-bright">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/quality" className="text-[15px] text-night/65 hover:text-brass-bright">
                Quality
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-[13px] font-medium text-night">
            Product ranges
          </p>
          <ul className="mt-4 columns-1 space-y-2 sm:columns-2 md:columns-1">
            {categories
              .filter((c) => c.featured)
              .map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products/${c.slug}`}
                    className="text-[15px] text-night/65 hover:text-brass-bright"
                  >
                    {c.short}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-[13px] font-medium text-night">
            Head office
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-night/65">
            {site.offices[0].lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <a
            href={site.phoneHref}
            className="mt-4 block text-[15px] text-night tabular-nums hover:text-brass-bright"
          >
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="block text-[15px] text-night hover:text-brass-bright"
          >
            {site.email}
          </a>
          <dl className="mt-4 text-[14px] text-night/65">
            {site.hours.map((h) => (
              <div key={h.days} className="flex gap-2">
                <dt>{h.days}:</dt>
                <dd className="tabular-nums">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 px-5 py-5 text-[13px] text-night/55 md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            © {new Date().getFullYear()} {site.legal}. Registered company no.{" "}
            {site.companyNo}.
          </p>
          <p>
            Sister company{" "}
            <a href={site.sister.href} className="text-brass-bright hover:underline">
              {site.sister.name}
            </a>{" "}
            · industrial gas &amp; oxygen service.
          </p>
        </div>
      </div>
    </footer>
  );
}
