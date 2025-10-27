"use client";

import { useState, useEffect } from "react";
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
import { Button } from "../ui/button";
import { UserDetailsModal } from "./user-details-modal";

interface WaitlistTableProps {
  data: ServiceProvider[];
}

export function WaitlistTable({ data }: WaitlistTableProps) {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<ServiceProvider | null>(
    null
  );
  const [tableData, setTableData] = useState<ServiceProvider[]>(data);
  const itemsPerPage = 10;

  // Sync tableData with data prop changes
  useEffect(() => {
    setTableData(data);
  }, [data]);

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  // Ensure current page is valid - if it exceeds total pages, use page 1
  const activePage =
    currentPage > totalPages && totalPages > 0 ? 1 : currentPage;

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = tableData.slice(startIndex, endIndex);

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

  const handleUpdateStatus = (user: ServiceProvider) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleStatusUpdate = (updatedUser: ServiceProvider) => {
    // Update the user in the table data
    setTableData((prevData) =>
      prevData.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );

    console.log("User status updated:", updatedUser);
  };

  return (
    <>
      <div className="bg-white rounded-xl border border-[#677582] overflow-hidden">
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
                  <TableCell className="text-center">
                    <Button
                      variant={"ghost"}
                      size="icon"
                      className="cursor-pointer"
                      onClick={() => handleUpdateStatus(item)}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 16H3.425L13.2 6.225L11.775 4.8L2 14.575V16ZM0 18V13.75L13.2 0.575C13.4 0.391667 13.6208 0.25 13.8625 0.15C14.1042 0.05 14.3583 0 14.625 0C14.8917 0 15.15 0.05 15.4 0.15C15.65 0.25 15.8667 0.4 16.05 0.6L17.425 2C17.625 2.18333 17.7708 2.4 17.8625 2.65C17.9542 2.9 18 3.15 18 3.4C18 3.66667 17.9542 3.92083 17.8625 4.1625C17.7708 4.40417 17.625 4.625 17.425 4.825L4.25 18H0ZM12.475 5.525L11.775 4.8L13.2 6.225L12.475 5.525Z"
                          fill="#1C1B1F"
                        />
                      </svg>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-start gap-2">
        <button
          onClick={() => setCurrentPage(Math.max(activePage - 1, 1))}
          disabled={activePage === 1}
          className="w-8 h-8 rounded bg-white border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
              className={`w-8 h-8 rounded cursor-pointer ${
                activePage === pageNumber
                  ? "border border-[#4680FF] text-[#4680FF]"
                  : "border border-[#EFEFEF] hover:bg-gray-50"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          onClick={() => setCurrentPage(Math.min(activePage + 1, totalPages))}
          disabled={activePage === totalPages}
          className="w-8 h-8 rounded bg-white border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          &gt;
        </button>
      </div>

      {/* User Details Modal */}
      <UserDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        user={selectedUser}
        onStatusUpdate={handleStatusUpdate}
      />
    </>
  );
}
