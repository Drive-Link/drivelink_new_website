"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { DashboardHeader } from "./DashboardHeader";

import { ReactNode } from "react";

export function AdminDashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader setSidebarOpen={setSidebarOpen} />

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
