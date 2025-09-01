"use client"

import { cn } from "@/lib/utils"
import { X, LayoutDashboard, Users, UserCheck, MapPin, CreditCard } from "lucide-react"
import { Button } from "@heroui/react"
import { Logo } from "./onboarding/Logo"


interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, current: false },
  { name: "Drivers", icon: Users, current: true },
  { name: "Passengers", icon: UserCheck, current: false },
  { name: "Trips", icon: MapPin, current: false },
  { name: "Transactions", icon: CreditCard, current: false },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/15 bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <Logo />
          <Button variant="ghost" size="sm" onPress={onClose} className="lg:hidden">
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    item.current
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
