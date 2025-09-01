"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const PUBLIC_ROUTES = ["/", "/contact", "/privacy", "/terms"];

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const token = Cookies.get("DriveLinkToken");
    const role = Cookies.get("role");

    // 1. Public routes — no need for login
    if (PUBLIC_ROUTES.includes(pathName)) {
      return;
    }

    // 2. If no token and not on a public page → send to login
    if (!token) {
      router.replace(`/admin`);
      return;
    }

    // 3. If route starts with /admin → check role
    if (pathName.startsWith("/admin")) {
      if (role !== "ADMIN") {
        router.replace("/"); // not admin → back to homepage
        return;
      }
    }
  }, [pathName, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
