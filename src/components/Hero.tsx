"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Play, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyber-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-600/5 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-cyber-500" />
              <Badge variant="outline" className="border-cyber-500/30 text-cyber-500 bg-cyber-500/10 font-medium">
                WELCOME TO SECUREX
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-urbanist leading-tight">
                <span className="text-white">Cyber Security For Your</span>
                <br />
                <span className="gradient-text">Modern Threats</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-lg font-inter leading-relaxed">
                Protect your business with advanced cybersecurity solutions.
                We provide comprehensive security services to safeguard your digital assets
                from evolving cyber threats.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-purple hover:glow-purple transition-all duration-300 font-semibold px-8">
                Get Started Now
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-cyber-500 text-cyber-500 hover:bg-cyber-500 hover:text-white transition-all duration-300 px-8"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cyber-500" />
                <span className="text-gray-300 font-medium">24/7 Monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cyber-500" />
                <span className="text-gray-300 font-medium">Advanced Threat Detection</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cyber-500" />
                <span className="text-gray-300 font-medium">Expert Support Team</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cyber-500" />
                <span className="text-gray-300 font-medium">99.9% Uptime Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Graphics */}
          <div className="relative">
            {/* Proven Protection Card */}
            <div className="absolute top-8 right-8 z-20">
              <div className="bg-black/80 backdrop-blur-md border border-cyber-500/30 rounded-xl p-4 glow-purple">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 gradient-purple rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Proven Protection</h3>
                    <p className="text-gray-400 text-sm">Enterprise Grade Security</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Hero Graphics */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-cyber-500/20 to-cyber-600/20 rounded-2xl flex items-center justify-center">
                <div className="relative">
                  {/* Central Shield */}
                  <div className="w-32 h-32 gradient-purple rounded-full flex items-center justify-center animate-glow">
                    <Shield className="h-16 w-16 text-white" />
                  </div>

                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyber-400 rounded-full"></div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyber-400 rounded-full"></div>
                    <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-4 h-4 bg-cyber-400 rounded-full"></div>
                    <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-4 h-4 bg-cyber-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Background Tech Pattern */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src="https://ext.same-assets.com/1876816431/3801502557.png"
                  alt="Cyber Security Background"
                  fill
                  className="object-cover opacity-20"
                />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur-md border border-cyber-500/30 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-gray-400 text-sm">Security Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}