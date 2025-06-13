"use client"

import type React from "react"

import { useState } from "react"
import PublicLayout from "@/components/public-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    urgency: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      urgency: "",
    })
    setIsSubmitting(false)

    // Show success message (in a real app, you'd handle this better)
    alert("Thank you for your message! We'll get back to you within 24 hours.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9915525266"],
      description: "Call us for urgent legal matters",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["munishmittaladv@gmail.com"],
      description: "We respond to all emails",
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: ["#25 Sunny Enclave-2, Near DMW", "Patiala, Punjab"],
      description: "Visit us for in-person consultations",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon-Fri: 5:00 PM - 8:00 PM", "Sun: 10:00 AM - 2:00 PM"],
      description: "Consultations available ",
    },
  ]

  const practiceAreas = [
    "Civil Litigation",
    "Property Law",
    "Contract Law",
    "Family Law",
    "Criminal Defense",
    "Estate Planning",
    "Business Law",
    "Personal Injury",
    "Employment Law",
    "Other",
  ]

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our experienced legal team. We're here to help you navigate your legal challenges with
            confidence and expertise.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <IconComponent className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-900 font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
           

            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* Office Location Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-6 w-6 mr-2 text-amber-600" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d430.3787651108837!2d76.41230310309992!3d30.35009385549624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910286244959745%3A0x6c8d9815d6be4ddd!2sAdvocate%20Munish%20Mittal!5e0!3m2!1sen!2sin!4v1749812178119!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold">Munish Mittal Law Office</p>
                    <p className="text-gray-600">#25 Sunny Enclave-2, Near DMW</p>
                    <p className="text-gray-600">Patiala, Punjab</p>
                    <p className="text-sm text-gray-500">
                      Convenient parking available. Accessible entrance and facilities.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:+91 9915525266">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now: +91 9915525266
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:john@smithlaw.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Email: munishmittaladv@gmail.com
                    </a>
                  </Button>
                </CardContent>
              </Card>

              
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions about our services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">How quickly will you respond to my inquiry?</h3>
                <p className="text-gray-600">
                  We respond to all inquiries within 24 hours during business days. For urgent matters, we offer
                  same-day responses and emergency consultations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Do you offer free consultations?</h3>
                <p className="text-gray-600">
                  Yes, we offer free initial consultations for most practice areas. This allows us to understand your
                  case and provide you with an honest assessment of your legal options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">What should I bring to my consultation?</h3>
                <p className="text-gray-600">
                  Bring any relevant documents, contracts, correspondence, or evidence related to your case. Don't worry
                  if you don't have everything - we can help you gather what's needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Do you handle cases outside of California?</h3>
                <p className="text-gray-600">
                  While we're primarily licensed in California, we can often assist with cases in other states through
                  our network of trusted legal partners. Contact us to discuss your specific situation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
