import AdminLayout from "@/components/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, FileText, MessageSquare, Clock } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Appointments",
      value: "24",
      change: "+12%",
      icon: Calendar,
      color: "text-blue-600",
    },
    {
      title: "Pending Appointments",
      value: "8",
      change: "+3",
      icon: Clock,
      color: "text-yellow-600",
    },
    {
      title: "Published Blogs",
      value: "15",
      change: "+2",
      icon: FileText,
      color: "text-green-600",
    },
    {
      title: "Client Testimonials",
      value: "32",
      change: "+5",
      icon: MessageSquare,
      color: "text-purple-600",
    },
  ]

  const recentAppointments = [
    { name: "Sarah Johnson", service: "Property Law", date: "2024-01-15", time: "10:00 AM", status: "Confirmed" },
    { name: "Michael Chen", service: "Contract Law", date: "2024-01-15", time: "2:00 PM", status: "Pending" },
    { name: "Emily Davis", service: "Civil Litigation", date: "2024-01-16", time: "11:00 AM", status: "Confirmed" },
    { name: "Robert Wilson", service: "Family Law", date: "2024-01-16", time: "3:00 PM", status: "Pending" },
  ]

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your practice.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600">{stat.change} from last month</p>
                    </div>
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Recent Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAppointments.map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{appointment.name}</p>
                      <p className="text-sm text-gray-600">{appointment.service}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{appointment.date}</p>
                      <p className="text-sm text-gray-600">{appointment.time}</p>
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                          appointment.status === "Confirmed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <button className="w-full p-3 text-left bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-amber-600 mr-3" />
                    <div>
                      <p className="font-medium">View Today's Appointments</p>
                      <p className="text-sm text-gray-600">3 appointments scheduled</p>
                    </div>
                  </div>
                </button>
                <button className="w-full p-3 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium">Create New Blog Post</p>
                      <p className="text-sm text-gray-600">Share legal insights</p>
                    </div>
                  </div>
                </button>
                <button className="w-full p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <p className="font-medium">Add Client Testimonial</p>
                      <p className="text-sm text-gray-600">Showcase success stories</p>
                    </div>
                  </div>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
