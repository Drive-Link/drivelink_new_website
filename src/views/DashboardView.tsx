"use client";
import React, { useState, useEffect } from "react";
import { DriversTable } from "@/components";
import { Button } from "@heroui/react";
import { Plus } from "lucide-react";
import { Onest } from "next/font/google";
import useSWR from "swr";
import { getAllDrivers, PaginatedDriverResponse } from "@/lib";

const onest = Onest({
  subsets: ["latin"],
});

export function AdminDashboardView() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const { data, error, isLoading } = useSWR<PaginatedDriverResponse>(
    ["driver-records", page, rowsPerPage],
    () => getAllDrivers({ page, size: rowsPerPage }),
    {
      revalidateOnFocus: true,
      dedupingInterval: 60000,
      refreshInterval: 60000,
      shouldRetryOnError: false,
      keepPreviousData: true,
      revalidateIfStale: true,
    }
  );


  useEffect(() => {
    if (data) {
      console.log("Drivers API response:", data);
    }
  }, [data]);


  return (
    <>
      <div className="bg-white border-b border-gray-200 px-4 py-4 lg:px-6">
        <div className="flex justify-end">
          <div className="flex flex-row gap-3 justify-between sm:justify-end">
            <Button
              className={`bg-[#101F91] text-white text-xs lg:text-base rounded-lg py-2 font-medium ${onest.className}`}
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Driver
            </Button>
            <Button
              variant="bordered"
              className={`text-xs lg:text-base bg-transparent border border-gray-400 rounded-lg font-medium py-2 ${onest.className}`}
            >
              Send Notification
            </Button>
          </div>
        </div>
      </div>

      {/* Example usage of drivers */}
      <DriversTable
        drivers={data?.drivers || []}
        loading={isLoading}
        error={error}
        page={page}
        totalPages={data?.total_pages || 1}
        onPageChange={setPage}
      />

    </>
  );
}
