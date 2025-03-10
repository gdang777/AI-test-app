"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle } from "lucide-react"

export default function BookingForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    date: null as Date | null,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, service: value }))
  }

  const handleDateChange = (date: Date | null) => {
    setFormState((prev) => ({ ...prev, date }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
          date: null,
        })
      }, 5000)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2">Booking Request Received!</h3>
        <p className="text-gray-400 mb-6">
          Thank you for your interest. We'll contact you shortly to confirm your consultation.
        </p>
        <Button
          variant="outline"
          className="border-purple-500 text-purple-400 hover:bg-purple-950/30"
          onClick={() => setIsSubmitted(false)}
        >
          Book Another Call
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">
            Company Name
          </label>
          <Input
            id="company"
            name="company"
            value={formState.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-1">
            Service Interested In
          </label>
          <Select value={formState.service} onValueChange={handleSelectChange}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700 text-white">
              <SelectItem value="strategy">AI Strategy Development</SelectItem>
              <SelectItem value="ml">Machine Learning Implementation</SelectItem>
              <SelectItem value="app">AI Application Development</SelectItem>
              <SelectItem value="data">Data Strategy & Management</SelectItem>
              <SelectItem value="automation">Automation Solutions</SelectItem>
              <SelectItem value="training">AI Training & Workshops</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-400 mb-1">
            Preferred Date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formState.date ? format(formState.date, "PPP") : <span>Select a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
              <Calendar
                mode="single"
                selected={formState.date}
                onSelect={handleDateChange}
                initialFocus
                className="bg-gray-800 text-white"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
            Tell us about your project
          </label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Describe your AI needs and goals..."
            className="bg-gray-800 border-gray-700 text-white h-32"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Book Your Free Consultation"}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </div>
    </form>
  )
}

