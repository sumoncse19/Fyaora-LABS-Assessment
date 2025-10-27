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
  const startIndex = (currentPage - 1) * itemsPerPage;
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
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 rounded ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-white border hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        ))}
        {totalPages > 5 && (
          <button
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
            className="w-8 h-8 rounded bg-white border hover:bg-gray-50"
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}
