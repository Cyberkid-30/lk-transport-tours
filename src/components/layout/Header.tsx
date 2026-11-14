"use client";

import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { NAV_ITEMS } from "@/data/content";
import { useActiveSection } from "@/hooks/useActiveSection";
import { PRIMARY_PHONE } from "@/lib/site";

const SECTION_IDS = ["home", "about", "tours", "vehicles", "contact"] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  // Close the drawer on Escape and lock background scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // If the viewport grows to desktop while the drawer is open, close it.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface-container-lowest/95 shadow-[0_1px_8px_rgba(0,0,0,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 md:h-20 lg:px-12">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="-ml-2 flex h-11 w-11 items-center justify-center rounded-lg text-primary-container transition-colors hover:bg-surface-container xl:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
          <Logo />
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = item.section === active && item.label !== "Destinations";
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`font-label text-label-md transition-colors hover:text-secondary ${
                  isActive ? "font-bold text-secondary" : "text-on-surface-variant"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          href={PRIMARY_PHONE.href}
          aria-label={`Call us on ${PRIMARY_PHONE.display}`}
          className="inline-flex h-11 shrink-0 items-center gap-2.5 rounded-full bg-secondary px-3.5 font-label text-label-md text-on-secondary shadow-cta transition-all hover:bg-secondary-container active:scale-95 sm:px-4"
        >
          <Phone size={18} aria-hidden />
          <span className="hidden sm:inline">{PRIMARY_PHONE.display}</span>
          <span className="sm:hidden text-label-sm font-bold">Call</span>
        </a>
      </div>

      {/* Mobile / tablet drawer */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-outline-variant/30 bg-surface-container-lowest xl:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-surface-container font-label text-label-lg text-on-surface last:border-0 hover:text-secondary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
