"use client";

import { CircleUserRound, Compass, Car, House, Info } from "lucide-react";
import { TAB_ITEMS } from "@/data/content";
import { useActiveSection } from "@/hooks/useActiveSection";

const ICONS = {
  home: House,
  tours: Compass,
  vehicles: Car,
  about: Info,
  contact: CircleUserRound,
} as const;

const SECTION_IDS = TAB_ITEMS.map((t) => t.section);

/** Phone-only tab bar mirroring the mobile design. Hidden from `md` up. */
export function BottomTabs() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-50 bg-surface-container-lowest/90 pb-[env(safe-area-inset-bottom)] shadow-[0_-1px_12px_rgba(0,0,0,0.06)] backdrop-blur-xl md:hidden"
    >
      <ul className="flex h-16 items-center justify-around px-1">
        {TAB_ITEMS.map((tab) => {
          const Icon = ICONS[tab.icon];
          const isActive = tab.section === active;
          return (
            <li key={tab.label}>
              <a
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex h-12 min-w-14 flex-col items-center justify-center transition-colors ${
                  isActive ? "font-bold text-secondary" : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                <Icon size={22} aria-hidden />
                <span className="mt-0.5 font-label text-label-sm">{tab.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
