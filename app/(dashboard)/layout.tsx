import { DashboardHeader } from "@/components/layout/dashboard-header";
import { DashboardNav } from "@/components/layout/dashboard-nav";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* Dashboard Header with Navigation */}
      <header className="border-b bg-[#F4F7F9] sticky top-0 z-50 h-14">
        <div className="flex items-center justify-between container mx-auto px-6 h-full">
          <DashboardNav />
          <DashboardHeader />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">{children}</main>
    </div>
  );
}
