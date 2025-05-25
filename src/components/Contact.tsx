"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Shield,
  CheckCircle,
  MessageSquare,
  Users
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Security Plaza", "New York, NY 10001", "United States"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568", "24/7 Emergency Line"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@securex.com", "support@securex.com", "sales@securex.com"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Emergency Only"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const services = [
    "Security Assessment",
    "Penetration Testing",
    "Incident Response",
    "Compliance Consulting",
    "Managed Security Services",
    "Security Training"
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/80 to-black"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-cyber-500/30 text-cyber-500 bg-cyber-500/10 font-medium mb-4">
            GET IN TOUCH
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-urbanist mb-6">
            <span className="text-white">Ready to Secure</span>
            <br />
            <span className="gradient-text">Your Business?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-inter">
            Contact our cybersecurity experts today for a free consultation and discover
            how we can protect your business from digital threats.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-700 hover:border-cyber-500/50 transition-all duration-300 group hover:glow-purple"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 font-urbanist">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-400 text-sm font-inter">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white font-urbanist mb-4">
                Send Us a Message
              </h3>
              <p className="text-gray-400 font-inter">
                Fill out the form below and our security experts will get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyber-500 focus:ring-1 focus:ring-cyber-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyber-500 focus:ring-1 focus:ring-cyber-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyber-500 focus:ring-1 focus:ring-cyber-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyber-500 focus:ring-1 focus:ring-cyber-500 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyber-500 focus:ring-1 focus:ring-cyber-500 transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interest
                </label>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyber-500 focus:ring-1 focus:ring-cyber-500 transition-colors">
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyber-500 focus:ring-1 focus:ring-cyber-500 transition-colors resize-none"
                  placeholder="Tell us about your cybersecurity needs..."
                ></textarea>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="agree"
                  className="w-4 h-4 text-cyber-500 bg-gray-800 border-gray-600 rounded focus:ring-cyber-500"
                />
                <label htmlFor="agree" className="text-sm text-gray-400">
                  I agree to the{" "}
                  <a href="#" className="text-cyber-500 hover:text-cyber-400 underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-cyber-500 hover:text-cyber-400 underline">
                    Terms of Service
                  </a>
                </label>
              </div>

              <Button className="w-full gradient-purple hover:glow-purple transition-all duration-300 font-semibold py-3">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Additional Information */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-bold text-white font-urbanist mb-6">
                Why Choose SecureX?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-cyber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">24/7 Expert Support</h4>
                    <p className="text-gray-400 text-sm">Our certified security professionals are available around the clock.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-cyber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Proven Track Record</h4>
                    <p className="text-gray-400 text-sm">Over 500 businesses protected with zero security breaches.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-cyber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Cutting-edge Technology</h4>
                    <p className="text-gray-400 text-sm">AI-powered threat detection and advanced security solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-cyber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Compliance Expertise</h4>
                    <p className="text-gray-400 text-sm">Help you meet all industry standards and regulations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-red-500" />
                <h3 className="text-xl font-bold text-white font-urbanist">
                  Security Emergency?
                </h3>
              </div>
              <p className="text-gray-300 mb-4 font-inter">
                If you're experiencing a security incident or breach, contact our emergency response team immediately.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-red-400">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">Emergency Hotline: +1 (555) 911-SECURE</span>
                </div>
                <div className="flex items-center space-x-2 text-red-400">
                  <Mail className="h-4 w-4" />
                  <span className="font-semibold">emergency@securex.com</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-cyber-500/10 to-cyber-600/10 border border-cyber-500/30 rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold gradient-text mb-1">
                    <5
                  </div>
                  <div className="text-gray-400 text-sm">Minutes Response</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}