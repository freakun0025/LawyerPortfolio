"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Calendar, MapPin, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import PublicLayout from "@/components/public-layout"

export default function MediaPage() {
  const [mediaItems, setMediaItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    async function fetchMediaItems() {
      try {
        const url =
          selectedCategory === "All"
            ? "http://localhost:8000/api/media/"
            : `http://localhost:8000/api/media/?category=${selectedCategory}`

        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        console.log("Media items from API:", data)
        setMediaItems(data)
      } catch (error) {
        console.error("Error fetching media items:", error)
      }
    }

    fetchMediaItems()
  }, [selectedCategory])

  const categories = [
    "All",
    "Court Victory",
    "Professional",
    "Community Service",
    "Recognition",
    "Education",
    "Client Success",
    "Milestone",
  ]

  const filteredItems =
    selectedCategory === "All" ? mediaItems : mediaItems.filter((item) => item.category === selectedCategory)

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Media Gallery</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A visual journey through my legal career - capturing moments of victory, service, and dedication to justice
          </p>
        </div>
      </section>

      

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden group">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage(item)}
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <Badge className="bg-amber-600 hover:bg-amber-700">{item.category}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {item.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Image Details */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="aspect-[16/9] relative">
                <Image
                  src={selectedImage.imageUrl || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                <Badge className="bg-amber-600 hover:bg-amber-700">{selectedImage.category}</Badge>
              </div>
              <p className="text-gray-600 mb-6">{selectedImage.description}</p>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">About This Moment</h3>
                <p className="text-gray-600">{selectedImage.full_description}</p>
              </div>
              <div className="flex items-center text-gray-500 space-x-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-amber-600" />
                  <span>{selectedImage.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-amber-600" />
                  <span>{selectedImage.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PublicLayout>
  )
}
