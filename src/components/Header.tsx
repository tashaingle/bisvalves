"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  const links = nav.filter((item) => item.href !== "/contact");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow ${
        scrolled || open ? "shadow-[0_1px_0_var(--rule)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between gap-8 px-5 md:px-10 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Logo size="sm" className="lg:justify-self-start" />
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[15px] transition-colors ${
                  active ? "text-night" : "text-night/65 hover:text-night"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-[17px] h-[2px] bg-brass" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-5 lg:justify-self-end">
          <a
            href={site.phoneHref}
            className="hidden text-[15px] text-night/65 tabular-nums hover:text-night xl:block"
          >
            {site.phone}
          </a>
          <Link href="/contact" className="btn btn-primary hidden h-10 px-4 sm:inline-flex">
            Contact us
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-5 flex-col gap-[5px]">
              <span className={`h-[1.5px] bg-night transition ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
              <span className={`h-[1.5px] bg-night transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-[1.5px] bg-night transition ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-rule bg-white px-5 pt-2 pb-8 lg:hidden">
          <div className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-rule py-4 font-display text-2xl font-medium text-night"
              >
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="mt-6 text-night/70 tabular-nums">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="mt-1 text-night/70">
              {site.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
