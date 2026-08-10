"use client";

import { useCallback, useState } from "react";

import { navLinks } from "@/data";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useEscapeKey } from "@/hooks/useEscapeKey";

import MobileMenu from "./MobileMenu";

const MOBILE_MENU_ID = "mobile-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useBodyScrollLock(open);
  useEscapeKey(close, open);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <div className="px-gutter flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="font-display text-lg text-cream-50 sm:text-xl">
          Desa Duwet
        </a>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-cream-100/80 transition-colors hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Buka menu"
          aria-expanded={open}
          aria-controls={MOBILE_MENU_ID}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span className="h-px w-6 bg-cream-50" />
          <span className="h-px w-6 bg-cream-50" />
        </button>
      </div>

      <MobileMenu id={MOBILE_MENU_ID} open={open} links={navLinks} onClose={close} />
    </header>
  );
}
