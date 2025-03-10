"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The AI strategy developed by the team transformed our customer service operations, reducing response times by 60% and increasing customer satisfaction scores.",
      author: "Sarah Johnson",
      title: "CTO, TechVision Inc.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Their machine learning implementation helped us identify patterns in our data that we never knew existed, leading to a 25% increase in operational efficiency.",
      author: "Michael Chen",
      title: "Director of Innovation, Global Solutions",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Working with this team was a game-changer for our business. Their AI expertise and strategic approach delivered results that exceeded our expectations.",
      author: "Emily Rodriguez",
      title: "CEO, NextGen Retail",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }
  }

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [currentIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [isAnimating])

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our <span className="text-purple-500">Clients</span> Say
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Success stories from businesses we've helped transform with AI
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-gray-800 hover:bg-gray-700 text-white"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <Quote className="h-12 w-12 text-purple-500 opacity-20 absolute -top-4 -left-4" />
                        <p className="text-xl text-gray-300 text-center relative z-10">"{testimonial.quote}"</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center mt-6">
                      <div className="h-16 w-16 rounded-full overflow-hidden mb-4 border-2 border-purple-500">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                        <p className="text-gray-400">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-gray-800 hover:bg-gray-700 text-white"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-purple-500" : "w-2 bg-gray-700"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

