"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Scale, LayoutDashboard, Calendar, FileText, MessageSquare, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminSidebar() {
  const pathname = usePathname()

  const menuItems = [
    { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/appointments", icon: Calendar, label: "Appointments" },
    { href: "/admin/blogs", icon: FileText, label: "Blogs" },
    { href: "/admin/testimonials", icon: MessageSquare, label: "Testimonials" },
    { href: "/admin/settings", icon: Settings, label: "Settings" },
  ]

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center space-x-2 mb-8">
        <Scale className="h-8 w-8 text-amber-600" />
        <span className="text-xl font-bold">Admin Panel</span>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const IconComponent = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive ? "bg-amber-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <IconComponent className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800">
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  )
}
