"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Scale } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-bold text-gray-900">John Smith Law</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-amber-600 transition-colors">
              Services
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-amber-600 transition-colors">
              Blog
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-amber-600 transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/appointment">Book Appointment</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/login">Admin Login</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-amber-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                Services
              </Link>
              <Link href="/blogs" className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                Blog
              </Link>
              <Link href="/testimonials" className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                Testimonials
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                Contact
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                  <Link href="/appointment">Book Appointment</Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/login">Admin Login</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
