"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FilterOptions } from "@/types";
import Image from "next/image";
import { DatePicker } from "../ui/date-picker";
import { toast } from "sonner";

interface WaitlistFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

export function WaitlistFilters({ onFilterChange }: WaitlistFiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    postcode: "",
    registrationStatus: [],
    dateRange: { start: "", end: "" },
    vendorType: [],
    serviceOffering: [],
  });

  const [isFiltersApplied, setIsFiltersApplied] = useState(false);

  const handleStatusChange = (status: string, checked: boolean) => {
    const newStatuses = checked
      ? [
          ...filters.registrationStatus,
          status as "onboarded" | "rejected" | "pending",
        ]
      : filters.registrationStatus.filter((s) => s !== status);

    setFilters({ ...filters, registrationStatus: newStatuses });
  };

  const handleVendorTypeChange = (type: string, checked: boolean) => {
    const newTypes = checked
      ? [...filters.vendorType, type as "independent" | "company"]
      : filters.vendorType.filter((t) => t !== type);

    setFilters({ ...filters, vendorType: newTypes });
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    const newServices = checked
      ? [
          ...filters.serviceOffering,
          service as "housekeeping" | "window-cleaning" | "car-valet",
        ]
      : filters.serviceOffering.filter((s) => s !== service);

    setFilters({ ...filters, serviceOffering: newServices });
  };

  const handlePostcodeChange = (value: string) => {
    setFilters({ ...filters, postcode: value });
  };

  const handleDateChange = (type: "start" | "end", date: Date | undefined) => {
    setFilters({
      ...filters,
      dateRange: {
        ...filters.dateRange,
        [type]: date ? date.toISOString().split("T")[0] : "",
      },
    });
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
    setIsFiltersApplied(true);

    // Count active filters
    const activeFiltersCount = [
      filters.postcode !== "",
      filters.registrationStatus.length > 0,
      filters.dateRange.start !== "" || filters.dateRange.end !== "",
      filters.vendorType.length > 0,
      filters.serviceOffering.length > 0,
    ].filter(Boolean).length;

    if (activeFiltersCount > 0) {
      toast.success(
        `Filters applied successfully! ${activeFiltersCount} filter${
          activeFiltersCount > 1 ? "s" : ""
        } active.`
      );
    } else {
      toast.info("No filters selected. Showing all results.");
    }
  };

  const handleClearFilters = () => {
    const resetFilters: FilterOptions = {
      postcode: "",
      registrationStatus: [],
      dateRange: { start: "", end: "" },
      vendorType: [],
      serviceOffering: [],
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
    setIsFiltersApplied(false);
    toast.success("All filters cleared successfully!");
  };

  return (
    <div className="bg-[#F4F7F9] p-6 rounded-lg space-y-[46px] max-h-screen xl:max-h-full overflow-auto h-fit sticky top-6">
      {/* Gler logo */}
      <Image
        src="/gler.svg"
        alt="Gler"
        className="h-8 w-auto"
        width={32}
        height={32}
      />

      <h3 className="font-bold px-4 py-3 rounded-sm bg-[#D3D8DD] text-black">
        User Management
      </h3>

      {/* Postcode Filter */}
      <div className="text-[#324054]">
        <label className="font-bold">Postcode</label>
        <Input
          type="text"
          placeholder="ZIP"
          value={filters.postcode}
          onChange={(e) => handlePostcodeChange(e.target.value)}
          className="bg-white mt-3"
        />
      </div>

      {/* Registration Status */}
      <div className="text-[#324054]">
        <label className="font-bold">Registration Status</label>
        <div className="space-y-3 mt-3">
          <Checkbox
            id="onboarded"
            label="Onboarded"
            checked={filters.registrationStatus.includes("onboarded")}
            onChange={(e) => handleStatusChange("onboarded", e.target.checked)}
          />
          <Checkbox
            id="rejected"
            label="Rejected"
            checked={filters.registrationStatus.includes("rejected")}
            onChange={(e) => handleStatusChange("rejected", e.target.checked)}
          />
        </div>
      </div>

      {/* Date Registered */}
      <div className="text-[#324054]">
        <label className="font-bold">Date Registered</label>
        <div className="mt-3 flex gap-1 items-center">
          <DatePicker
            value={
              filters.dateRange.start
                ? new Date(filters.dateRange.start)
                : undefined
            }
            onChange={(date: Date | undefined) =>
              handleDateChange("start", date)
            }
            placeholder="Start"
          />
          <DatePicker
            value={
              filters.dateRange.end
                ? new Date(filters.dateRange.end)
                : undefined
            }
            onChange={(date: Date | undefined) => handleDateChange("end", date)}
            placeholder="End"
          />
        </div>
      </div>

      {/* Vendor Type */}
      <div className="text-[#324054]">
        <label className="font-bold">Vendor Type</label>
        <div className="space-y-3 mt-3">
          <Checkbox
            id="independent"
            label="Independent"
            checked={filters.vendorType.includes("independent")}
            onChange={(e) =>
              handleVendorTypeChange("independent", e.target.checked)
            }
          />
          <Checkbox
            id="company"
            label="Company"
            checked={filters.vendorType.includes("company")}
            onChange={(e) =>
              handleVendorTypeChange("company", e.target.checked)
            }
          />
        </div>
      </div>

      {/* Service Offering */}
      <div className="text-[#324054]">
        <label className="font-bold">Service Offering</label>
        <div className="space-y-3 mt-3">
          <Checkbox
            id="housekeeping"
            label="Housekeeping"
            checked={filters.serviceOffering.includes("housekeeping")}
            onChange={(e) =>
              handleServiceChange("housekeeping", e.target.checked)
            }
          />
          <Checkbox
            id="window-cleaning"
            label="Window Cleaning"
            checked={filters.serviceOffering.includes("window-cleaning")}
            onChange={(e) =>
              handleServiceChange("window-cleaning", e.target.checked)
            }
          />
          <Checkbox
            id="car-valet"
            label="Car Valet"
            checked={filters.serviceOffering.includes("car-valet")}
            onChange={(e) => handleServiceChange("car-valet", e.target.checked)}
          />
        </div>
      </div>

      {/* Filter Button */}
      <div className="w-full pt-5 flex flex-wrap gap-2 justify-center">
        <Button
          onClick={handleApplyFilters}
          className="bg-[#1A78F2] rounded-full shadow-xl cursor-pointer"
        >
          Apply Filters
        </Button>

        {isFiltersApplied && (
          <Button
            onClick={handleClearFilters}
            className="bg-[#1A78F2] rounded-full shadow-xl cursor-pointer"
          >
            Clear Filters
          </Button>
        )}
      </div>
    </div>
  );
}
