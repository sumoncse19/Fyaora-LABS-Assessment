"use client";

import { useState, useMemo, useEffect } from "react";
import { Search } from "lucide-react";
import { WaitlistFilters } from "@/components/waitlist/waitlist-filters";
import { WaitlistTable } from "@/components/waitlist/waitlist-table";
import { Input } from "@/components/ui/input";
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Filters */}
        <div className="lg:col-span-1">
          <WaitlistFilters onFilterChange={setFilters} />
        </div>

        {/* Right Content - Table */}
        <div className="lg:col-span-3 space-y-6">
          <h3 className="text-[#12153A] text-4xl">Waitlist</h3>
          {/* Tabs */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab("providers")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                activeTab === "providers"
                  ? "bg-gray-200 text-gray-900"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Service Providers
            </button>

            <button
              onClick={() => setActiveTab("customers")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                activeTab === "customers"
                  ? "bg-gray-200 text-gray-900"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Customers
            </button>

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
