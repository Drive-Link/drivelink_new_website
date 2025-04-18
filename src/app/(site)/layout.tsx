import "../globals.css"; // import global styles
import ClientLayout from "@/components/layout/site-layout";

export const metadata = {
  title: "Find and Hire Verified Drivers Fast and Hassle-Free | Drivelink ",
  description: "Welcome to DriveLink. Buy and sell cars with ease.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
