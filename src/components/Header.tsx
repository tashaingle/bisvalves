"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-ink/92 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-[11px] tracking-[0.22em] uppercase transition-colors ${
                  active ? "text-brass" : "text-mist hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden border border-brass bg-brass px-4 py-2 font-mono text-[11px] tracking-[0.22em] text-ink uppercase transition-colors hover:bg-brass-bright sm:inline-flex"
          >
            Talk to an Engineer
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-white/15 lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-4 flex-col gap-1.5">
              <span className={`h-px bg-paper transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`h-px bg-paper transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px bg-paper transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-3xl tracking-[0.08em] text-paper uppercase"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 inline-flex w-fit border border-brass bg-brass px-4 py-3 font-mono text-[11px] tracking-[0.22em] text-ink uppercase"
            >
              Talk to an Engineer
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
