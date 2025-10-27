import { DashboardHeader } from "@/components/layout/dashboard-header";
import { DashboardNav } from "@/components/layout/dashboard-nav";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header with Navigation */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="flex items-center justify-between container mx-auto px-6">
          <DashboardNav />
          <DashboardHeader />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6">{children}</main>
    </div>
  );
}
