"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Globe
} from "lucide-react";
import Image from "next/image";

export default function About() {
  const stats = [
    { number: "500+", label: "Protected Businesses", icon: Shield },
    { number: "24/7", label: "Security Monitoring", icon: Clock },
    { number: "99.9%", label: "Threat Detection Rate", icon: Target },
    { number: "10+", label: "Years Experience", icon: Award }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Response",
      description: "Our security team responds to threats in under 5 minutes with automated and manual intervention."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Protect your business worldwide with our global network of security operations centers."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Industry-certified cybersecurity professionals with decades of combined experience."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 gradient-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:glow-purple transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="border-cyber-500/30 text-cyber-500 bg-cyber-500/10 font-medium mb-4">
                ABOUT SECUREX
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-urbanist mb-6 leading-tight">
                <span className="text-white">Protecting Your Digital</span>
                <br />
                <span className="gradient-text">Assets Since 2014</span>
              </h2>
              <p className="text-lg text-gray-400 font-inter leading-relaxed">
                We are a leading cybersecurity company dedicated to protecting businesses
                from evolving digital threats. Our comprehensive approach combines cutting-edge
                technology with expert human oversight to deliver unparalleled security solutions.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-cyber-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Advanced Threat Intelligence</h4>
                  <p className="text-gray-400 text-sm">Real-time threat intelligence and analysis to stay ahead of cybercriminals.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-cyber-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Compliance & Regulations</h4>
                  <p className="text-gray-400 text-sm">Ensure your business meets all industry standards and regulatory requirements.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-cyber-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Scalable Solutions</h4>
                  <p className="text-gray-400 text-sm">Security solutions that grow with your business, from startup to enterprise.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="gradient-purple hover:glow-purple transition-all duration-300 font-semibold">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-cyber-500 text-cyber-500 hover:bg-cyber-500 hover:text-white transition-all duration-300">
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Right Content - Image/Graphics */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1876816431/3195649792.jpeg"
                alt="Cybersecurity Team"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 backdrop-blur-md border border-cyber-500/30 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold gradient-text">100%</div>
                      <div className="text-gray-300 text-sm">Client Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text">0</div>
                      <div className="text-gray-300 text-sm">Security Breaches</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text">24/7</div>
                      <div className="text-gray-300 text-sm">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 gradient-purple rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyber-600/20 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-urbanist mb-4">
              Why Choose SecureX?
            </h3>
            <p className="text-gray-400 font-inter max-w-2xl mx-auto">
              We deliver exceptional cybersecurity services with a focus on innovation, reliability, and customer success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 gradient-purple rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:glow-purple transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 font-urbanist">
                  {feature.title}
                </h4>
                <p className="text-gray-400 font-inter leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}