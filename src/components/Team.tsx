"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Chief Security Officer",
      image: "https://ext.same-assets.com/1876816431/1596293290.jpeg",
      bio: "15+ years in cybersecurity with expertise in threat intelligence and incident response.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@securex.com"
      }
    },
    {
      name: "Sarah Chen",
      role: "Lead Security Analyst",
      image: "https://ext.same-assets.com/1876816431/2063428306.jpeg",
      bio: "Specialized in malware analysis and forensic investigations with multiple certifications.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@securex.com"
      }
    },
    {
      name: "Michael Torres",
      role: "Penetration Testing Lead",
      image: "https://ext.same-assets.com/1876816431/3488067949.jpeg",
      bio: "Ethical hacker with expertise in vulnerability assessment and security auditing.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@securex.com"
      }
    },
    {
      name: "Emma Johnson",
      role: "Compliance Manager",
      image: "https://ext.same-assets.com/1876816431/3719483534.jpeg",
      bio: "Expert in regulatory compliance and risk management across multiple industries.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emma@securex.com"
      }
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/80 to-black"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-cyber-500/30 text-cyber-500 bg-cyber-500/10 font-medium mb-4">
            OUR EXPERTS
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-urbanist mb-6">
            <span className="text-white">Meet Our Security</span>
            <br />
            <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-inter">
            Our team consists of certified cybersecurity professionals with extensive experience
            in protecting businesses from digital threats.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-700 hover:border-cyber-500/50 transition-all duration-300 group hover:glow-purple overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-cyber-500 rounded-full flex items-center justify-center hover:bg-cyber-400 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 bg-cyber-500 rounded-full flex items-center justify-center hover:bg-cyber-400 transition-colors"
                      >
                        <Twitter className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-cyber-500 rounded-full flex items-center justify-center hover:bg-cyber-400 transition-colors"
                      >
                        <Mail className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1 font-urbanist">
                    {member.name}
                  </h3>
                  <p className="text-cyber-500 font-medium mb-3 text-sm">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm font-inter leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyber-500/10 to-cyber-600/10 border border-cyber-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white font-urbanist mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-400 mb-6 font-inter">
              We're always looking for talented cybersecurity professionals to join our growing team.
              Explore our current openings and become part of the SecureX family.
            </p>
            <button className="gradient-purple hover:glow-purple transition-all duration-300 font-semibold px-8 py-3 rounded-lg">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}