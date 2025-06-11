import PublicLayout from "@/components/public-layout"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Award, GraduationCap, Scale, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About John Smith</h1>
              <p className="text-xl text-gray-600 mb-6">
                A dedicated attorney with over 15 years of experience in civil litigation, property law, and contract
                disputes. Committed to providing exceptional legal representation and achieving the best outcomes for
                clients.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600">500+</div>
                  <div className="text-sm text-gray-600">Cases Won</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="John Smith in his law office"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education & Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <GraduationCap className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Juris Doctor (J.D.)</h3>
                <p className="text-gray-600 mb-2">Harvard Law School, 2008</p>
                <p className="text-sm text-gray-500">Magna Cum Laude, Law Review Editor</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bar Admissions</h3>
                <p className="text-gray-600 mb-2">State Bar of California, 2008</p>
                <p className="text-sm text-gray-500">Federal District Court, 2009</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Scale className="h-8 w-8 text-amber-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Senior Partner</h3>
                    <p className="text-amber-600 font-medium mb-2">Smith & Associates Law Firm (2015 - Present)</p>
                    <p className="text-gray-600">
                      Leading a team of attorneys specializing in civil litigation and property disputes. Successfully
                      represented over 300 clients with a 98% success rate.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-amber-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Associate Attorney</h3>
                    <p className="text-amber-600 font-medium mb-2">Johnson & Partners (2008 - 2015)</p>
                    <p className="text-gray-600">
                      Specialized in contract law and commercial litigation. Gained extensive experience in courtroom
                      advocacy and client representation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bar Council & Community */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Community Involvement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Bar Council Member</h3>
                <p className="text-gray-600">
                  Elected member of the State Bar Council, advocating for legal reform and professional standards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Pro Bono Work</h3>
                <p className="text-gray-600">
                  Providing free legal services to underserved communities and non-profit organizations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Legal Education</h3>
                <p className="text-gray-600">
                  Guest lecturer at local law schools and continuing education programs for attorneys.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
