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
            className={`text-sm font-medium pb-3 -mb-px transition-colors ${
              isActive
                ? "text-gray-900 border-b-2 border-blue-600"
                : isHRTab
                ? "text-blue-600 hover:text-blue-700"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
