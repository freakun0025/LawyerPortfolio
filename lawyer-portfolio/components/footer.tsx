import Link from "next/link"
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-bold">Munish Mittal and Associates</span>
            </div>
            <p className="text-gray-300 mb-4">
              Experienced legal representation with over 20 years of practice in civil litigation, property disputes,
              and contract law. Committed to achieving the best outcomes for our clients.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-amber-600 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-amber-600 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-amber-600 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-amber-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-amber-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-amber-600">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-600" />
                <span className="text-gray-300">+91 9915525266</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-600" />
                <span className="text-gray-300">munishmittaladv@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-600" />
                <span className="text-gray-300">#25 Sunny Enclave-2, Near DMW, Patiala, Punjab</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Munish Mittal Law. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
