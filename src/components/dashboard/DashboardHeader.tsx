"use client";

import React from "react";
import { Search, Bell, Settings } from "lucide-react";
import { Input, Button } from "@heroui/react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
}

interface AdminProfile {
  email_address?: string;
  phone_number?: string;
  first_name: string;
  last_name: string;
  created_at?: string;
  role?: string;
}

export const DashboardHeader = ({ setSidebarOpen }: HeaderProps) => {
  const storedData = sessionStorage.getItem("AdminData");
  const adminData: AdminProfile | null = storedData ? JSON.parse(storedData) : null;

  const fullName = adminData
    ? `${adminData.first_name || ""} ${adminData.last_name || ""}`.trim()
    : "Guest";

  const role = adminData?.role || "ADMIN";

  // get initials (first letter of first_name + first letter of last_name)
  const initials = adminData
    ? `${(adminData.first_name?.[0] || "").toUpperCase()}${(adminData.last_name?.[0] || "").toUpperCase()}`
    : "GU";

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4 lg:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-gray-900">All Drivers</h1>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-4">
          {/* Search - Hidden on mobile */}
          <div className="hidden md:flex relative">
            <Input
              placeholder="Search here..."
              className="w-80"
              startContent={
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              }
              variant="bordered"
              classNames={{
                input: [
                  cn(
                    "appearance-none focus:outline-none user-select-none text-black text-sm placeholder:pl-3"
                  ),
                ],
                inputWrapper: [
                  "border border-gray-500 rounded-md bg-white py-2 user-select-none",
                  "data-[hover=true]:border-primary group-data-[focus=true]:border-primary",
                  "data-[has-start-content=true]:ps-3",
                ],
                innerWrapper: ["px-2 data-[has-start-content=true]:ps-3"],
              }}
              size="lg"
              radius="sm"
            />
          </div>

          {/* Settings */}
          <Button variant="ghost" size="sm" className="relative">
            <Settings />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" />
          </Button>

          {/* User Initials Circle */}
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-medium">
            {initials}
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden mt-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search drivers..."
            className="pl-10 w-full border border-gray-300 rounded-lg py-2"
            variant="bordered"
          />
        </div>
      </div>
    </header>
  );
};
