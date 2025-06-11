import PublicLayout from "@/components/public-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: "Understanding Property Rights in California",
      excerpt:
        "A comprehensive guide to property rights and common disputes in California real estate law. Learn about boundary disputes, easements, and how to protect your property interests.",
      author: "John Smith",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Property Law",
    },
    {
      id: 2,
      title: "Contract Law Basics for Small Businesses",
      excerpt:
        "Essential contract law principles every small business owner should understand. From formation to enforcement, protect your business interests.",
      author: "John Smith",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Contract Law",
    },
    {
      id: 3,
      title: "Estate Planning Essentials",
      excerpt:
        "Key considerations for creating a comprehensive estate plan that protects your family and ensures your wishes are carried out.",
      author: "John Smith",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "Estate Planning",
    },
    {
      id: 4,
      title: "Navigating Civil Litigation: What to Expect",
      excerpt:
        "A step-by-step guide through the civil litigation process from filing to resolution. Understanding timelines, costs, and strategies.",
      author: "John Smith",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "Civil Litigation",
    },
  ]

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Insights & Updates</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay informed with the latest legal developments, case studies, and practical advice from our experienced
            legal team.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Card key={blog.id} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-600 bg-amber-100 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {blog.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {blog.date}
                      </div>
                    </div>
                    <span>{blog.readTime}</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/blogs/${blog.id}`} className="flex items-center justify-center">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest legal insights and updates
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <Button className="bg-amber-600 hover:bg-amber-700">Subscribe</Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
