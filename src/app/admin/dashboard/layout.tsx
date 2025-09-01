
import { ReactNode } from "react";
import { AdminDashboardLayout } from "@/components";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminDashboardLayout>{children}</AdminDashboardLayout>;
}
