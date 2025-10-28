import Image from "next/image";
import { CURRENT_USER } from "@/lib/constants";
import { Button } from "../ui/button";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-end gap-4 pl-6 py-2">
      <Button
        variant="ghost"
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Notifications"
      >
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 19.5C9.1 19.5 10 18.6 10 17.5H6C6 18.6 6.9 19.5 8 19.5ZM14 13.5V8.5C14 5.43 12.37 2.86 9.5 2.18V1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5V2.18C3.64 2.86 2 5.42 2 8.5V13.5L0 15.5V16.5H16V15.5L14 13.5ZM12 14.5H4V8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5V14.5Z"
            fill="#677582"
          />
        </svg>
      </Button>
      <Button
        variant="ghost"
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Messages"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 20L16 16H6C5.45 16 4.97917 15.8042 4.5875 15.4125C4.19583 15.0208 4 14.55 4 14V13H15C15.55 13 16.0208 12.8042 16.4125 12.4125C16.8042 12.0208 17 11.55 17 11V4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V20ZM2 10.175L3.175 9H13V2H2V10.175ZM0 15V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H13C13.55 0 14.0208 0.195833 14.4125 0.5875C14.8042 0.979167 15 1.45 15 2V9C15 9.55 14.8042 10.0208 14.4125 10.4125C14.0208 10.8042 13.55 11 13 11H4L0 15Z"
            fill="#677582"
          />
        </svg>
      </Button>
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-full bg-gray-200 overflow-hidden relative">
          <Image
            src={CURRENT_USER.avatar}
            alt={CURRENT_USER.name}
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
        <div className="text-xs">
          <div className="text-[#324054] whitespace-nowrap">{CURRENT_USER.name}</div>
          <div className="text-[#4F6071] whitespace-nowrap">{CURRENT_USER.location}</div>
        </div>
      </div>
    </div>
  );
}
