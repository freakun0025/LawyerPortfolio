"use client"

import { useEffect, useState } from "react"
import PublicLayout from "@/components/public-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Scale, Award, Users, Clock, Star, ArrowRight } from "lucide-react"

export default function HomePage() {
  const [testimonials, setTestimonials] = useState([])
  const [mediaItems, setMediaItems] = useState([])
  const [loading, setLoading] = useState({
    testimonials: true,
    media: true
  })

  useEffect(() => {
    // Fetch testimonials
    async function fetchTestimonials() {
      try {
        const response = await fetch('http://localhost:8000/api/testimonials/')
        if (response.ok) {
          const data = await response.json()
          setTestimonials(data.slice(0, 2)) // Get only 2 testimonials for preview
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      } finally {
        setLoading(prev => ({ ...prev, testimonials: false }))
      }
    }
    
    // Fetch media items
    async function fetchMediaItems() {
      try {
        const response = await fetch('http://localhost:8000/api/media/')
        if (response.ok) {
          const data = await response.json()
          setMediaItems(data.slice(0, 3)) // Get only 3 media items for preview
        }
      } catch (error) {
        console.error('Error fetching media items:', error)
      } finally {
        setLoading(prev => ({ ...prev, media: false }))
      }
    }
    
    fetchTestimonials()
    fetchMediaItems()
  }, [])

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Legal Representation You Can Trust</h1>
              <p className="text-xl mb-8 text-gray-300">
                With over 20 years of experience in civil litigation and property law, I provide dedicated legal
                services to protect your interests and achieve justice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-black border-white hover:bg-white hover:text-gray-900"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Munish Mittal - Attorney at Law"
                width={400}
                height={500}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Scale className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">20+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Cases Won</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">98%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Legal Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal representation across multiple practice areas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Scale className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Civil Litigation</h3>
                <p className="text-gray-600 mb-4">
                  Expert representation in civil disputes, contract breaches, and commercial litigation.
                </p>
                <Link href="/services" className="text-amber-600 hover:text-amber-700 flex items-center">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Scale className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Property Law</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive property dispute resolution and real estate legal services.
                </p>
                <Link href="/services" className="text-amber-600 hover:text-amber-700 flex items-center">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Scale className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Contract Law</h3>
                <p className="text-gray-600 mb-4">
                  Contract drafting, review, and dispute resolution for businesses and individuals.
                </p>
                <Link href="/services" className="text-amber-600 hover:text-amber-700 flex items-center">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Gallery Preview - Now Dynamic */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Media Gallery</h2>
            <p className="text-xl text-gray-600">Explore moments from my legal career and professional journey</p>
          </div>
          
          {loading.media ? (
            <div className="text-center py-12">Loading media items...</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mediaItems.length > 0 ? (
                  mediaItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={item.imageUrl || "/placeholder.svg?height=300&width=400"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-8">
                    <p>No media items found. Please add content in the admin section.</p>
                  </div>
                )}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline">
                  <Link href="/media">View Full Gallery</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Testimonials Preview - Now Dynamic */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          </div>
          
          {loading.testimonials ? (
            <div className="text-center py-12">Loading testimonials...</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.length > 0 ? (
                  testimonials.map((testimonial) => (
                    <Card key={testimonial.id}>
                      <CardContent className="p-6">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating || 5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4">"{testimonial.testimonial}"</p>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.service} Client</div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-8">
                    <p>No testimonials found. Please add content in the admin section.</p>
                  </div>
                )}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline">
                  <Link href="/testimonials">View All Testimonials</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section - Updated */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Legal Assistance?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our experienced professionals for expert legal advice
          </p>
          <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </PublicLayout>
  )
}
