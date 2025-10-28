"use client";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { DashboardNav } from "@/components/layout/dashboard-nav";
import { Menu, X } from "lucide-react";
import { ReactNode, useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [expandNav, setExpandNav] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        expandNav &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setExpandNav(false);
      }
    };

    if (expandNav) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expandNav]);

  return (
    <div className="min-h-screen">
      {/* Backdrop overlay when nav is expanded on mobile */}
      {expandNav && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setExpandNav(false)}
        />
      )}

      {/* Dashboard Header with Navigation */}
      <header
        ref={headerRef}
        className={`border-b rounded-b-2xl lg:rounded-b-none shadow-xl lg:shadow-none bg-[#F4F7F9] absolute lg:sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          expandNav ? "h-auto" : "h-14 lg:h-auto"
        } overflow-hidden lg:overflow-visible`}
      >
        <div className="container mx-auto px-6">
          {/* Mobile: Hamburger and Header */}
          <div className="flex lg:hidden items-center justify-between h-14">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setExpandNav(!expandNav)}
              className="p-2"
              aria-label="Toggle navigation"
            >
              {expandNav ? (
                <X className="h-6 w-6 text-[#324054]" />
              ) : (
                <Menu className="h-6 w-6 text-[#324054]" />
              )}
            </Button>
            <DashboardHeader />
          </div>

          {/* Mobile: Expandable Nav */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              expandNav ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
            }`}
          >
            <DashboardNav />
          </div>

          {/* Desktop: Normal Layout */}
          <div className="hidden lg:flex lg:flex-row items-center justify-between py-4">
            <DashboardNav />
            <DashboardHeader />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-20 lg:pt-12 pb-12">
        {children}
      </main>
    </div>
  );
}
