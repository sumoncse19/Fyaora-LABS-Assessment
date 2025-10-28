"use client";

import { useState, useMemo, useEffect } from "react";
import { Search, Filter, X } from "lucide-react";
import { WaitlistFilters } from "@/components/waitlist/waitlist-filters";
import { WaitlistTable } from "@/components/waitlist/waitlist-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ServiceProvider, FilterOptions } from "@/types";
import { getAllWaitlistData } from "@/lib/api/waitlist";

export default function HumanResourcesPage() {
  const [activeTab, setActiveTab] = useState<"providers" | "customers">(
    "providers"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterOptions>({
    postcode: "",
    registrationStatus: [],
    dateRange: { start: "", end: "" },
    vendorType: [],
    serviceOffering: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [providersData, setProvidersData] = useState<ServiceProvider[]>([]);
  const [customersData, setCustomersData] = useState<ServiceProvider[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Fetch data on component mount (simulating API call)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getAllWaitlistData();
        setProvidersData(data.serviceProviders);
        setCustomersData(data.customers);
      } catch (error) {
        console.error("Error fetching waitlist data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get current tab data
  const allData = useMemo(
    () => (activeTab === "providers" ? providersData : customersData),
    [activeTab, providersData, customersData]
  );

  const filteredData = useMemo(() => {
    let data = allData;

    // Apply search filter
    if (searchQuery) {
      data = data.filter(
        (item) =>
          item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.phoneNumber.includes(searchQuery) ||
          item.postcode.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply postcode filter
    if (filters.postcode) {
      data = data.filter((item) =>
        item.postcode.toLowerCase().includes(filters.postcode.toLowerCase())
      );
    }

    // Apply registration status filter
    if (filters.registrationStatus.length > 0) {
      data = data.filter((item) =>
        filters.registrationStatus.includes(item.status)
      );
    }

    // Apply vendor type filter
    if (filters.vendorType.length > 0) {
      data = data.filter((item) =>
        filters.vendorType.includes(item.vendorType)
      );
    }

    // Apply service offering filter
    if (filters.serviceOffering.length > 0) {
      data = data.filter((item) =>
        filters.serviceOffering.includes(item.serviceOffering)
      );
    }

    // Apply date range filter
    if (filters.dateRange.start || filters.dateRange.end) {
      data = data.filter((item) => {
        const itemDate = new Date(
          item.signupDate.split("/").reverse().join("-")
        );
        const startDate = filters.dateRange.start
          ? new Date(filters.dateRange.start)
          : null;
        const endDate = filters.dateRange.end
          ? new Date(filters.dateRange.end)
          : null;

        if (startDate && itemDate < startDate) return false;
        if (endDate && itemDate > endDate) return false;
        return true;
      });
    }

    return data;
  }, [allData, searchQuery, filters]);

  return (
    <div>
      {/* Layout: Sidebar + Content */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Left Sidebar - Filters */}
        {/* Mobile/Tablet: Absolute positioned overlay, XL+: Normal grid column */}
        <div
          className={`
            fixed xl:relative inset-0 xl:inset-auto z-50 xl:z-auto
            xl:col-span-1
            ${isFilterOpen ? "block" : "hidden xl:block"}
          `}
        >
          {/* Backdrop for mobile */}
          <div
            className="absolute inset-0 bg-black/50 xl:hidden"
            onClick={() => setIsFilterOpen(false)}
          />

          {/* Filter Panel */}
          <div className="absolute left-0 top-0 bottom-0 w-80 xl:w-full xl:relative">
            {/* Close button for mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 xl:hidden"
              onClick={() => setIsFilterOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>

            <WaitlistFilters onFilterChange={setFilters} />
          </div>
        </div>

        {/* Right Content - Table */}
        <div className="xl:col-span-3 space-y-6">
          <h3 className="text-[#12153A] text-4xl">Waitlist</h3>
          {/* Tabs */}
          <div className="flex items-center gap-4 flex-wrap text-sm">
            {/* Filter Toggle Button - Only visible on mobile/tablet */}
            <Button
              variant="outline"
              className="xl:hidden flex items-center gap-2 h-8"
              onClick={() => setIsFilterOpen(true)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>

            <Button
              variant={"ghost"}
              onClick={() => setActiveTab("providers")}
              className={`px-2 h-8 rounded-lg font-medium transition-colors cursor-pointer border ${
                activeTab === "providers"
                  ? "bg-[#C8D5D9] text-[#4E4636] border-transparent"
                  : "text-[#4E4636] border-[#807664]"
              }`}
            >
              Service Providers
            </Button>

            <Button
              variant={"ghost"}
              onClick={() => setActiveTab("customers")}
              className={`px-2 h-8 rounded-lg font-medium transition-colors cursor-pointer border ${
                activeTab === "customers"
                  ? "bg-[#C8D5D9] text-[#4E4636] border-transparent"
                  : "text-[#4E4636] border-[#807664]"
              }`}
            >
              Customers
            </Button>

            {/* Search Bar */}
            <div className="ml-auto flex-1 max-w-[264px]">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search User"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-12 pl-3 border border-[#D3D8DD] rounded-sm h-8 placeholder:text-[#88939D]"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-0 -translate-y-1/2 p-0 cursor-pointer"
                >
                  <div className="size-8 border-l border-[#E7E8EA] flex items-center justify-center">
                    <Search className="w-5 h-5 text-[#262626]" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          {isLoading ? (
            <div className="bg-white rounded-lg border p-12 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading waitlist data...</p>
            </div>
          ) : (
            <WaitlistTable data={filteredData} />
          )}
        </div>
      </div>
    </div>
  );
}
