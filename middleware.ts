// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_ROUTES = ["/", "/contact", "/privacy", "/terms"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public routes → allow
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  const token = req.cookies.get("DriveLinkToken")?.value;
  const role = req.cookies.get("role")?.value;

  // Not logged in → redirect to /admin
  if (!token) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // Role check for admin pages
  if (pathname.startsWith("/admin") && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"], // protect all routes except API/_next
};
