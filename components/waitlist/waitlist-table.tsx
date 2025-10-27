"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ServiceProvider } from "@/types";
import { Pencil } from "lucide-react";

interface WaitlistTableProps {
  data: ServiceProvider[];
}

export function WaitlistTable({ data }: WaitlistTableProps) {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Ensure current page is valid - if it exceeds total pages, use page 1
  const activePage =
    currentPage > totalPages && totalPages > 0 ? 1 : currentPage;

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const toggleRow = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const toggleAll = () => {
    if (selectedRows.size === currentData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(currentData.map((item) => item.id)));
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "onboarded":
        return <Badge variant="success">Onboarded</Badge>;
      case "rejected":
        return <Badge variant="warning">Rejected</Badge>;
      default:
        return <Badge variant="default">{status}</Badge>;
    }
  };

  const formatServiceOffering = (service: string) => {
    return service
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatVendorType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="bg-white rounded-lg border">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#F4F7F9] text-[17px]">
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={
                    currentData.length > 0 &&
                    selectedRows.size === currentData.length
                  }
                  onChange={toggleAll}
                />
              </TableHead>
              <TableHead className="text-[#2B3641] font-bold whitespace-nowrap">
                Email
              </TableHead>
              <TableHead className="text-[#2B3641] font-bold whitespace-nowrap">
                Phone Number
              </TableHead>
              <TableHead className="text-[#2B3641] font-bold whitespace-nowrap">
                Postcode
              </TableHead>
              <TableHead className="text-[#2B3641] font-bold whitespace-nowrap">
                Vendor Type
              </TableHead>
              <TableHead className="text-[#2B3641] font-bold whitespace-nowrap">
                Service Offering
              </TableHead>
              <TableHead className="text-[#2B3641] font-bold whitespace-nowrap">
                Signup Date
              </TableHead>
              <TableHead className="text-[#2B3641] font-bold whitespace-nowrap">
                Status
              </TableHead>
              <TableHead className="w-12 text-[#2B3641] font-bold whitespace-nowrap">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentData.map((item, index) => (
              <TableRow
                key={item.id}
                className={index % 2 === 0 ? "bg-white" : "bg-[#EAEEF3]"}
              >
                <TableCell>
                  <Checkbox
                    checked={selectedRows.has(item.id)}
                    onChange={() => toggleRow(item.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">{item.email}</TableCell>
                <TableCell>{item.phoneNumber}</TableCell>
                <TableCell>{item.postcode}</TableCell>
                <TableCell>{formatVendorType(item.vendorType)}</TableCell>
                <TableCell>
                  {formatServiceOffering(item.serviceOffering)}
                </TableCell>
                <TableCell>{item.signupDate}</TableCell>
                <TableCell>{getStatusBadge(item.status)}</TableCell>
                <TableCell>
                  <button className="text-gray-600 hover:text-gray-900">
                    <Pencil className="w-4 h-4" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 p-4 border-t">
        <button
          onClick={() => setCurrentPage(Math.max(activePage - 1, 1))}
          disabled={activePage === 1}
          className="w-8 h-8 rounded bg-white border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          &lt;
        </button>

        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let pageNumber;
          if (totalPages <= 5) {
            pageNumber = i + 1;
          } else if (activePage <= 3) {
            pageNumber = i + 1;
          } else if (activePage >= totalPages - 2) {
            pageNumber = totalPages - 4 + i;
          } else {
            pageNumber = activePage - 2 + i;
          }

          return (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`w-8 h-8 rounded ${
                activePage === pageNumber
                  ? "bg-blue-600 text-white"
                  : "bg-white border hover:bg-gray-50"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          onClick={() => setCurrentPage(Math.min(activePage + 1, totalPages))}
          disabled={activePage === totalPages}
          className="w-8 h-8 rounded bg-white border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
