"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Lock,
  Eye,
  Server,
  Smartphone,
  Cloud,
  Users,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: "Network Security",
      description: "Comprehensive network protection with advanced firewall and intrusion detection systems.",
      features: ["24/7 Monitoring", "Real-time Alerts", "Advanced Firewall"],
      color: "from-cyber-500 to-cyber-600"
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "End-to-end encryption solutions to protect your sensitive business data and communications.",
      features: ["AES 256 Encryption", "Key Management", "Secure Protocols"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Eye,
      title: "Threat Detection",
      description: "AI-powered threat detection and response system to identify and neutralize cyber threats.",
      features: ["AI Analysis", "Behavioral Detection", "Instant Response"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Complete infrastructure security assessment and hardening for your IT environment.",
      features: ["Security Audits", "Vulnerability Testing", "Compliance"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Security",
      description: "Secure your mobile devices and applications with our comprehensive mobile security solutions.",
      features: ["Device Management", "App Security", "Mobile Threats"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Protect your cloud infrastructure with advanced security measures and monitoring.",
      features: ["Cloud Monitoring", "Access Control", "Data Protection"],
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-cyber-500/30 text-cyber-500 bg-cyber-500/10 font-medium mb-4">
            OUR SERVICES
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-urbanist mb-6">
            <span className="text-white">Comprehensive Cyber</span>
            <br />
            <span className="gradient-text">Security Solutions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-inter">
            Protect your business with our full suite of cybersecurity services.
            From threat detection to data encryption, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-700 hover:border-cyber-500/50 transition-all duration-300 group hover:glow-purple"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 font-urbanist">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 font-inter leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-cyber-500" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="mt-6">
                  <button className="text-cyber-500 hover:text-cyber-400 font-medium text-sm group-hover:underline transition-colors">
                    Learn More →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyber-500/10 to-cyber-600/10 border border-cyber-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="h-8 w-8 text-cyber-500 mr-3" />
              <h3 className="text-2xl font-bold text-white font-urbanist">
                Need Custom Security Solutions?
              </h3>
            </div>
            <p className="text-gray-400 mb-6 font-inter">
              Our experts can design a tailored cybersecurity strategy that fits your specific business needs and requirements.
            </p>
            <button className="gradient-purple hover:glow-purple transition-all duration-300 font-semibold px-8 py-3 rounded-lg">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}