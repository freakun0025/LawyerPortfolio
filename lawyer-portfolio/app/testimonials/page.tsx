"use client"

import { useTestimonials } from "@/hooks/use-testimonials"
import PublicLayout from "@/components/public-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, Calendar, Scale } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TestimonialsPage() {
  const { testimonials, loading, error } = useTestimonials()

  if (loading)
    return (
      <PublicLayout>
        <div className="py-16 text-center">Loading testimonials...</div>
      </PublicLayout>
    )

  if (error)
    return (
      <PublicLayout>
        <div className="py-16 text-center text-red-600">Error: {error}</div>
      </PublicLayout>
    )

  const stats = [
    { number: "500+", label: "Cases Won" },
    { number: "98%", label: "Success Rate" },
    { number: "20+", label: "Years Experience" },
    { number: "4.9/5", label: "Client Rating" },
  ]

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with us.
          </p>
          <div className="flex justify-center items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
            ))}
            <span className="text-2xl font-bold ml-4">4.9/5</span>
            <span className="text-lg opacity-90 ml-2">Average Rating</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real clients who trusted us with their legal
              matters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="border-amber-200 shadow-md"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {testimonial.title}
                      </p>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-600 bg-amber-100 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>

                  <div className="relative mb-4 flex-1">
                    <Quote className="h-8 w-8 text-amber-600 opacity-50 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic pl-6">
                      {testimonial.testimonial}
                    </p>
                  </div>

                  <div className="border-t pt-4 mt-auto">
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      Case Result:
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      {testimonial.case}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {testimonial.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="h-16 w-16 text-amber-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let us help you achieve the best possible outcome for your legal
            matter. Schedule a free consultation today and experience the
            difference professional legal representation can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700"
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Scale className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
              <p className="opacity-90">
                Over 500 successful cases with a 98% success rate
              </p>
            </div>
            <div>
              <Star className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
              <p className="opacity-90">
                4.9/5 average rating from satisfied clients
              </p>
            </div>
            <div>
              <Quote className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-semibold mb-2">Personal Attention</h3>
              <p className="opacity-90">
                Every client receives personalized legal representation
              </p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
