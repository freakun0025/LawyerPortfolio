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
              <span className="text-xl font-bold text-gray-900">Munish Mittal and Associates</span>
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
            <Link href="/media" className="text-gray-700 hover:text-amber-600 transition-colors">
              Media
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-amber-600 transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </Link>
            
            
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
              <Link href="/media" className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                Media
              </Link>
              <Link href="/testimonials" className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                Testimonials
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-amber-600">
                Contact
              </Link>
              
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
