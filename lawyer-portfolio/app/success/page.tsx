import PublicLayout from "@/components/public-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Calendar, Phone, Mail } from "lucide-react"

export default function SuccessPage() {
  return (
    <PublicLayout>
      <section className="py-16 bg-gray-50 min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardContent className="p-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h1>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for applying to John Smith Law's internship program. We have received your application and
                will review it carefully. If your qualifications match our current needs, we will contact you within 2
                weeks to schedule an interview.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                <h2 className="text-lg font-semibold text-amber-800 mb-4">What happens next?</h2>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                      1
                    </div>
                    <p className="text-amber-700">Our team will review your application and resume within 2 weeks</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                      2
                    </div>
                    <p className="text-amber-700">Selected candidates will be contacted for an interview</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                      3
                    </div>
                    <p className="text-amber-700">Final decisions will be made after the interview process</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">john@smithlaw.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Mon-Fri 9AM-6PM</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/">Return to Home</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/media">View Our Media Gallery</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PublicLayout>
  )
}
