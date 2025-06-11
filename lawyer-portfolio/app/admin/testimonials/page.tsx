"use client"

import type React from "react"

import { useState } from "react"
import AdminLayout from "@/components/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Plus, Search, Edit, Trash2, Star, User } from "lucide-react"

export default function AdminTestimonials() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showAddForm, setShowAddForm] = useState(false)
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    title: "",
    service: "",
    rating: 5,
    testimonial: "",
    caseResult: "",
  })

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Property Owner",
      service: "Property Dispute Resolution",
      rating: 5,
      date: "2023-12-15",
      status: "published",
      testimonial:
        "John provided exceptional legal representation during my property dispute. His expertise and dedication resulted in a favorable outcome.",
      caseResult: "Boundary dispute with neighbor resolved in client's favor",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Business Owner",
      service: "Contract Law",
      rating: 5,
      date: "2023-11-20",
      status: "published",
      testimonial:
        "Professional, knowledgeable, and always available when I needed guidance. Highly recommend for any business legal matters.",
      caseResult: "Successfully negotiated multi-million dollar business contract",
    },
    {
      id: 3,
      name: "Emily Davis",
      title: "Personal Injury Client",
      service: "Civil Litigation",
      rating: 5,
      date: "2023-10-10",
      status: "published",
      testimonial:
        "After my accident, John took care of everything and fought tirelessly for my rights. He secured a settlement that exceeded my expectations.",
      caseResult: "Personal injury settlement of $750,000",
    },
    {
      id: 4,
      name: "Robert Wilson",
      title: "Divorced Father",
      service: "Family Law",
      rating: 5,
      date: "2023-09-05",
      status: "draft",
      testimonial:
        "Going through a divorce is never easy, but John made the process as smooth as possible. His guidance was invaluable.",
      caseResult: "Achieved favorable custody arrangement and asset division",
    },
  ]

  const services = [
    "Civil Litigation",
    "Property Law",
    "Contract Law",
    "Family Law",
    "Criminal Defense",
    "Estate Planning",
    "Business Law",
    "Personal Injury",
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would make an API call
    console.log("Adding testimonial:", newTestimonial)
    setShowAddForm(false)
    setNewTestimonial({
      name: "",
      title: "",
      service: "",
      rating: 5,
      testimonial: "",
      caseResult: "",
    })
  }

  const filteredTestimonials = testimonials.filter(
    (testimonial) =>
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.testimonial.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Testimonials Management</h1>
            <p className="text-gray-600">Manage client testimonials and reviews</p>
          </div>
          <Button onClick={() => setShowAddForm(true)} className="bg-amber-600 hover:bg-amber-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Testimonial
          </Button>
        </div>

        {/* Add Testimonial Form */}
        {showAddForm && (
          <Card>
            <CardHeader>
              <CardTitle>Add New Testimonial</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddTestimonial} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Client Name</Label>
                    <Input
                      id="name"
                      value={newTestimonial.name}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                      placeholder="Enter client name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Client Title/Role</Label>
                    <Input
                      id="title"
                      value={newTestimonial.title}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, title: e.target.value })}
                      placeholder="e.g., Business Owner, Property Owner"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="service">Service Provided</Label>
                    <Select onValueChange={(value) => setNewTestimonial({ ...newTestimonial, service: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="rating">Rating</Label>
                    <Select
                      onValueChange={(value) =>
                        setNewTestimonial({ ...newTestimonial, rating: Number.parseInt(value) })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select rating" />
                      </SelectTrigger>
                      <SelectContent>
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <SelectItem key={rating} value={rating.toString()}>
                            {rating} Star{rating !== 1 ? "s" : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="testimonial">Testimonial Text</Label>
                  <Textarea
                    id="testimonial"
                    value={newTestimonial.testimonial}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, testimonial: e.target.value })}
                    placeholder="Enter the client's testimonial..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="caseResult">Case Result (Optional)</Label>
                  <Input
                    id="caseResult"
                    value={newTestimonial.caseResult}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, caseResult: e.target.value })}
                    placeholder="Brief description of the case outcome"
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
                    Add Testimonial
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Search */}
        <Card>
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search testimonials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Testimonials List */}
        <div className="space-y-4">
          {filteredTestimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <User className="h-8 w-8 text-gray-400" />
                      <div>
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm">{testimonial.title}</p>
                      </div>
                      <Badge className={getStatusColor(testimonial.status)}>
                        {testimonial.status.charAt(0).toUpperCase() + testimonial.status.slice(1)}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Service:</span>
                        <p className="text-sm">{testimonial.service}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Rating:</span>
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                          <span className="ml-2 text-sm">({testimonial.rating}/5)</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Date:</span>
                        <p className="text-sm">{testimonial.date}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-sm font-medium text-gray-500">Testimonial:</span>
                      <p className="text-gray-700 bg-gray-50 p-3 rounded mt-1">{testimonial.testimonial}</p>
                    </div>

                    {testimonial.caseResult && (
                      <div>
                        <span className="text-sm font-medium text-gray-500">Case Result:</span>
                        <p className="text-sm text-gray-700 bg-green-50 p-2 rounded mt-1">{testimonial.caseResult}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 lg:w-32">
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTestimonials.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No testimonials found</h3>
              <p className="text-gray-600">No testimonials match your search criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  )
}
