"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DASHBOARD_TABS } from "@/lib/constants";

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      {DASHBOARD_TABS.map((tab) => {
        const isActive = pathname === tab.href;
        const isHRTab = tab.id === "human-resources";

        return (
          <Link
            key={tab.id}
            href={tab.href}
            className={`text-sm font-medium px-3 py-2.5 transition-colors ${
              isActive
                ? "text-[#1A78F2]"
                : "text-[#313030]"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
