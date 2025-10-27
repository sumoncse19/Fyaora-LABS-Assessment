"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Pick a date",
  className = "",
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState<Date | undefined>(value);
  const [inputValue, setInputValue] = React.useState(formatDate(value));

  React.useEffect(() => {
    setInputValue(formatDate(value));
    if (value) {
      setMonth(value);
    }
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="space-y-1">
          <div className="relative">
            <p className="absolute text-[#1A78F2] top-0 -translate-y-1/2 left-2 bg-[#FCF8F8] px-1 text-xs">
              Date
            </p>
            <Input
              value={inputValue}
              placeholder={placeholder}
              className={`bg-white pr-12 pl-4 h-12 border-3 border-[#1A78F2] rounded-sm ${className}`}
              onChange={(e) => {
                const date = new Date(e.target.value);
                setInputValue(e.target.value);
                if (isValidDate(date)) {
                  onChange?.(date);
                  setMonth(date);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setOpen(true);
                }
              }}
            />
            <Button
              variant="ghost"
              className="absolute top-1/2 right-2 size-10 -translate-y-1/2 p-0 hover:bg-gray-100 rounded-full"
              type="button"
            >
              <div className="w-8 h-8 bg-[#49454F1F] rounded-full flex items-center justify-center cursor-pointer">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 2H15V0H13V2H5V0H3V2H2C0.89 2 0 2.9 0 4V18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V7H16V18ZM3.5 11C3.5 9.62 4.62 8.5 6 8.5C7.38 8.5 8.5 9.62 8.5 11C8.5 12.38 7.38 13.5 6 13.5C4.62 13.5 3.5 12.38 3.5 11Z"
                    fill="#4E4636"
                  />
                </svg>
              </div>
              <span className="sr-only">Select date</span>
            </Button>
          </div>
          <p className="text-center text-[#4E4636] text-xs">MM/DD/YYYY</p>
        </div>
      </PopoverTrigger>

      <PopoverContent
        className="w-auto overflow-hidden p-0"
        align="end"
        alignOffset={-8}
        sideOffset={10}
      >
        <Calendar
          mode="single"
          selected={value}
          captionLayout="dropdown"
          month={month}
          onMonthChange={setMonth}
          onSelect={(date) => {
            onChange?.(date);
            setInputValue(formatDate(date));
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
