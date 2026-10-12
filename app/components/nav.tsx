"use client";

import { useState } from "react";
import { BRAND, navLinks } from "../site";
import { Icon } from "./svg-icon";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto max-w-[1320px] px-5 py-5">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#top"
            className="font-display text-[28px] leading-none font-semibold tracking-[-0.06em]"
          >
            {BRAND.replace(".ai", "")}
            <span className="text-brand">.ai</span>
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-display font-medium tracking-[-0.01em] transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="btn btn-dark hidden rounded-full! sm:inline-flex"
            >
              Book a Demo
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="btn-dark grid size-12 place-items-center rounded-full lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>

        {open && (
          <ul className="mt-4 flex flex-col border-t border-line pt-2 lg:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-lg font-medium tracking-[-0.02em]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
