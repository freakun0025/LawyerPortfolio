import PublicLayout from "@/components/public-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Star, Quote, Calendar, Scale } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Property Owner",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "December 2023",
      service: "Property Dispute Resolution",
      testimonial:
        "John provided exceptional legal representation during my property dispute. His expertise in property law and dedication to my case resulted in a favorable outcome. He kept me informed throughout the entire process and was always available to answer my questions. I couldn't have asked for better representation.",
      case: "Boundary dispute with neighbor resolved in client's favor",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Business Owner",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "November 2023",
      service: "Contract Law",
      testimonial:
        "Professional, knowledgeable, and always available when I needed guidance. John helped me navigate complex contract negotiations and saved my business from a potentially costly dispute. His attention to detail and strategic thinking were invaluable. Highly recommend for any business legal matters.",
      case: "Successfully negotiated multi-million dollar business contract",
    },
    {
      id: 3,
      name: "Emily Davis",
      title: "Personal Injury Client",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "October 2023",
      service: "Civil Litigation",
      testimonial:
        "After my accident, I was overwhelmed and didn't know where to turn. John took care of everything and fought tirelessly for my rights. He secured a settlement that exceeded my expectations and helped me get my life back on track. His compassion and expertise made all the difference.",
      case: "Personal injury settlement of $750,000",
    },
    {
      id: 4,
      name: "Robert Wilson",
      title: "Divorced Father",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "September 2023",
      service: "Family Law",
      testimonial:
        "Going through a divorce is never easy, but John made the process as smooth as possible. He protected my interests while keeping my children's wellbeing as the top priority. His guidance during this difficult time was invaluable, and I'm grateful for his support.",
      case: "Achieved favorable custody arrangement and asset division",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      title: "Estate Planning Client",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "August 2023",
      service: "Estate Planning",
      testimonial:
        "John helped me create a comprehensive estate plan that gives me peace of mind knowing my family will be taken care of. He explained everything in terms I could understand and made sure all my wishes were properly documented. Excellent service and very reasonable fees.",
      case: "Complete estate plan including trust and will preparation",
    },
    {
      id: 6,
      name: "David Martinez",
      title: "Small Business Owner",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "July 2023",
      service: "Business Law",
      testimonial:
        "John has been our go-to attorney for all business matters. From contract reviews to employment issues, he provides sound legal advice that protects our interests. His responsiveness and practical approach to problem-solving have been instrumental in our company's growth.",
      case: "Ongoing legal counsel for growing tech startup",
    },
    {
      id: 7,
      name: "Jennifer Thompson",
      title: "Real Estate Investor",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "June 2023",
      service: "Real Estate Law",
      testimonial:
        "As a real estate investor, I need an attorney who understands the complexities of property transactions. John has handled multiple deals for me, always ensuring my interests are protected. His knowledge of real estate law is exceptional, and his attention to detail is unmatched.",
      case: "Facilitated $2M commercial real estate acquisition",
    },
    {
      id: 8,
      name: "Thomas Brown",
      title: "Criminal Defense Client",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      date: "May 2023",
      service: "Criminal Defense",
      testimonial:
        "When I was facing serious criminal charges, John fought for me every step of the way. His aggressive defense strategy and thorough preparation resulted in charges being dropped. He gave me hope when I thought all was lost. I can't thank him enough for saving my future.",
      case: "All criminal charges dismissed",
    },
  ]

  const stats = [
    { number: "500+", label: "Cases Won" },
    { number: "98%", label: "Success Rate" },
    { number: "15+", label: "Years Experience" },
    { number: "4.9/5", label: "Client Rating" },
  ]

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
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
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Real stories from real clients who trusted us with their legal matters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.title}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
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
                    <p className="text-gray-700 italic pl-6">{testimonial.testimonial}</p>
                  </div>

                  <div className="border-t pt-4 mt-auto">
                    <p className="text-sm font-medium text-gray-900 mb-1">Case Result:</p>
                    <p className="text-sm text-gray-600 mb-2">{testimonial.case}</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let us help you achieve the best possible outcome for your legal matter. Schedule a free consultation today
            and experience the difference professional legal representation can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link href="/appointment">Schedule Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
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
              <p className="opacity-90">Over 500 successful cases with a 98% success rate</p>
            </div>
            <div>
              <Star className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
              <p className="opacity-90">4.9/5 average rating from satisfied clients</p>
            </div>
            <div>
              <Quote className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-semibold mb-2">Personal Attention</h3>
              <p className="opacity-90">Every client receives personalized legal representation</p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
