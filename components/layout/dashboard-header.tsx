"use client";

import { Bell, MessageSquare } from "lucide-react";
import Image from "next/image";
import { CURRENT_USER } from "@/lib/constants";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-end gap-4 pl-6 py-3">
      <button
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Notifications"
      >
        <Bell className="w-5 h-5 text-gray-600" />
      </button>
      <button
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Messages"
      >
        <MessageSquare className="w-5 h-5 text-gray-600" />
      </button>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
          <Image
            src={CURRENT_USER.avatar}
            alt={CURRENT_USER.name}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900">
            {CURRENT_USER.name}
          </div>
          <div className="text-xs text-gray-500">{CURRENT_USER.location}</div>
        </div>
      </div>
    </div>
  );
}
