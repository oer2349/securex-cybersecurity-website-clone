"use client";

import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    services: [
      { name: "Network Security", href: "#" },
      { name: "Data Encryption", href: "#" },
      { name: "Threat Detection", href: "#" },
      { name: "Infrastructure Security", href: "#" },
      { name: "Mobile Security", href: "#" },
      { name: "Cloud Security", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#" },
      { name: "News & Blog", href: "#blog" },
      { name: "Case Studies", href: "#" },
      { name: "Partners", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Contact Support", href: "#contact" },
      { name: "System Status", href: "#" },
      { name: "Security Alerts", href: "#" },
      { name: "Training", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Compliance", href: "#" },
      { name: "Security Policy", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="relative border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Shield className="h-8 w-8 text-cyber-500" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyber-500 rounded-full animate-pulse"></div>
                </div>
                <div className="text-xl font-bold font-urbanist">
                  <span className="text-white">SECURE</span>
                  <span className="gradient-text">X</span>
                </div>
              </Link>

              <p className="text-gray-400 font-inter leading-relaxed mb-6 max-w-md">
                Leading cybersecurity company providing comprehensive protection
                for businesses worldwide. Secure your digital future with SecureX.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-4 w-4 text-cyber-500" />
                  <span className="text-sm">info@securex.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-4 w-4 text-cyber-500" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-4 w-4 text-cyber-500" />
                  <span className="text-sm">123 Security Plaza, NY 10001</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold font-urbanist mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyber-500 transition-colors text-sm font-inter"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold font-urbanist mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyber-500 transition-colors text-sm font-inter"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold font-urbanist mb-4">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyber-500 transition-colors text-sm font-inter"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold font-urbanist mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyber-500 transition-colors text-sm font-inter"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-white font-urbanist mb-2">
                Stay Updated on Security Threats
              </h3>
              <p className="text-gray-400 font-inter">
                Subscribe to our newsletter for the latest cybersecurity insights and threat alerts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyber-500 focus:ring-1 focus:ring-cyber-500 transition-colors"
              />
              <button className="gradient-purple hover:glow-purple transition-all duration-300 font-semibold px-6 py-3 rounded-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm font-inter">
              © 2024 SecureX. All rights reserved. | Built with security in mind.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-cyber-500 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </Link>
              ))}
            </div>

            {/* Security Badge */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Shield className="h-4 w-4 text-cyber-500" />
              <span>Secured by SecureX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}