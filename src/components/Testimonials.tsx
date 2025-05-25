"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "David Mitchell",
      role: "CTO, TechCorp",
      company: "TechCorp Industries",
      image: "https://ext.same-assets.com/1876816431/859375.jpeg",
      rating: 5,
      testimonial: "SecureX has been instrumental in protecting our infrastructure. Their 24/7 monitoring and rapid response team gave us peace of mind. Highly recommended for any business serious about cybersecurity."
    },
    {
      name: "Lisa Zhang",
      role: "CISO, DataFlow",
      company: "DataFlow Solutions",
      image: "https://ext.same-assets.com/1876816431/3838958046.jpeg",
      rating: 5,
      testimonial: "The threat detection capabilities are exceptional. SecureX identified and neutralized several advanced persistent threats that our previous solution missed. Their expertise is unmatched."
    },
    {
      name: "Robert Johnson",
      role: "IT Director, FinanceMax",
      company: "FinanceMax Group",
      image: "https://ext.same-assets.com/1876816431/858585.jpeg",
      rating: 5,
      testimonial: "Working with SecureX transformed our security posture. Their compliance expertise helped us meet all regulatory requirements while maintaining operational efficiency. Outstanding service!"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/80 to-black"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-cyber-500/30 text-cyber-500 bg-cyber-500/10 font-medium mb-4">
            TESTIMONIALS
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-urbanist mb-6">
            <span className="text-white">What Our Clients</span>
            <br />
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-inter">
            Don't just take our word for it. Here's what security leaders from top companies
            have to say about our cybersecurity solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-700 hover:border-cyber-500/50 transition-all duration-300 group hover:glow-purple relative overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="h-12 w-12 text-cyber-500" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-300 font-inter leading-relaxed mb-6">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-cyber-500/30"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-urbanist">
                      {testimonial.name}
                    </h4>
                    <p className="text-cyber-500 text-sm font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-cyber-500/10 to-cyber-600/10 border border-cyber-500/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-400 font-medium">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-gray-400 font-medium">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-400 font-medium">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">0</div>
                <div className="text-gray-400 font-medium">Security Breaches</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}