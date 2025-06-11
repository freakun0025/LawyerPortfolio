import PublicLayout from "@/components/public-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Scale, Home, FileText, Users, Gavel, Shield } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Scale,
      title: "Civil Litigation",
      description:
        "Expert representation in civil disputes, personal injury cases, and commercial litigation with a proven track record of success.",
      features: [
        "Personal Injury Claims",
        "Contract Disputes",
        "Business Litigation",
        "Employment Law",
        "Insurance Claims",
      ],
    },
    {
      icon: Home,
      title: "Property Law",
      description: "Comprehensive property dispute resolution, real estate transactions, and landlord-tenant matters.",
      features: [
        "Property Disputes",
        "Real Estate Transactions",
        "Landlord-Tenant Issues",
        "Boundary Disputes",
        "Title Issues",
      ],
    },
    {
      icon: FileText,
      title: "Contract Law",
      description: "Contract drafting, review, negotiation, and dispute resolution for businesses and individuals.",
      features: [
        "Contract Drafting",
        "Contract Review",
        "Breach of Contract",
        "Business Agreements",
        "Employment Contracts",
      ],
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Compassionate representation in family matters including divorce, custody, and support issues.",
      features: ["Divorce Proceedings", "Child Custody", "Spousal Support", "Property Division", "Adoption Services"],
    },
    {
      icon: Gavel,
      title: "Criminal Defense",
      description: "Aggressive defense representation for criminal charges with focus on protecting your rights.",
      features: ["DUI Defense", "Drug Charges", "Assault Cases", "White Collar Crimes", "Appeals"],
    },
    {
      icon: Shield,
      title: "Estate Planning",
      description:
        "Comprehensive estate planning services to protect your assets and provide for your family's future.",
      features: [
        "Will Preparation",
        "Trust Creation",
        "Estate Administration",
        "Power of Attorney",
        "Probate Services",
      ],
    },
  ]

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive legal representation across multiple practice areas with personalized attention and proven
            results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <IconComponent className="h-12 w-12 text-amber-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                      <Link href="/appointment">Consult Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Legal Process</h2>
            <p className="text-xl text-gray-600">
              A systematic approach to achieving the best outcomes for our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Initial Consultation</h3>
              <p className="text-gray-600">Free consultation to understand your case and legal needs</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Case Analysis</h3>
              <p className="text-gray-600">Thorough review and analysis of your legal situation</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategy Development</h3>
              <p className="text-gray-600">Creating a customized legal strategy for your case</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Resolution</h3>
              <p className="text-gray-600">Executing the strategy to achieve the best possible outcome</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Legal Assistance?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and let's discuss your legal needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
              <Link href="/appointment">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-amber-600"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
