"use client"

import { useState } from "react"
import AdminLayout from "@/components/admin-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FileText, Plus, Search, Edit, Trash2, Eye } from "lucide-react"

export default function AdminBlogs() {
  const [searchTerm, setSearchTerm] = useState("")

  const blogs = [
    {
      id: 1,
      title: "Understanding Property Rights in California",
      excerpt: "A comprehensive guide to property rights and common disputes in California real estate law.",
      author: "John Smith",
      date: "2024-01-10",
      status: "published",
      views: 1250,
    },
    {
      id: 2,
      title: "Contract Law Basics for Small Businesses",
      excerpt: "Essential contract law principles every small business owner should understand.",
      author: "John Smith",
      date: "2024-01-08",
      status: "published",
      views: 890,
    },
    {
      id: 3,
      title: "Navigating Civil Litigation: What to Expect",
      excerpt: "A step-by-step guide through the civil litigation process from filing to resolution.",
      author: "John Smith",
      date: "2024-01-05",
      status: "draft",
      views: 0,
    },
    {
      id: 4,
      title: "Estate Planning Essentials",
      excerpt: "Key considerations for creating a comprehensive estate plan that protects your family.",
      author: "John Smith",
      date: "2024-01-03",
      status: "published",
      views: 1450,
    },
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

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Management</h1>
            <p className="text-gray-600">Create and manage your legal blog posts</p>
          </div>
          <Button className="bg-amber-600 hover:bg-amber-700">
            <Plus className="h-4 w-4 mr-2" />
            New Blog Post
          </Button>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Blog Posts */}
        <div className="space-y-4">
          {filteredBlogs.map((blog) => (
            <Card key={blog.id}>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{blog.title}</h3>
                      <Badge className={getStatusColor(blog.status)}>
                        {blog.status.charAt(0).toUpperCase() + blog.status.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{blog.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>By {blog.author}</span>
                      <span>•</span>
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>{blog.views} views</span>
                    </div>
                  </div>
                  <div className="flex gap-2 lg:w-48">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No blog posts found</h3>
              <p className="text-gray-600">No blog posts match your search criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  )
}
