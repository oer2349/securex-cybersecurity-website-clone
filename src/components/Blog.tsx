"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";
import Image from "next/image";

export default function Blog() {
  const blogPosts = [
    {
      title: "Top 10 Cybersecurity Threats in 2024",
      excerpt: "Stay ahead of evolving cyber threats with our comprehensive analysis of the most dangerous security risks facing businesses today.",
      image: "https://ext.same-assets.com/1876816431/2751055676.jpeg",
      author: "Sarah Chen",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      category: "Threat Analysis",
      slug: "top-10-cybersecurity-threats-2024"
    },
    {
      title: "Implementing Zero Trust Architecture",
      excerpt: "Learn how to build a robust zero trust security model that protects your organization from internal and external threats.",
      image: "https://ext.same-assets.com/1876816431/3051983847.jpeg",
      author: "Alex Rodriguez",
      date: "Mar 12, 2024",
      readTime: "8 min read",
      category: "Security Architecture",
      slug: "implementing-zero-trust-architecture"
    },
    {
      title: "Cloud Security Best Practices",
      excerpt: "Essential guidelines for securing your cloud infrastructure and protecting sensitive data in multi-cloud environments.",
      image: "https://ext.same-assets.com/1876816431/1456093701.jpeg",
      author: "Michael Torres",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      category: "Cloud Security",
      slug: "cloud-security-best-practices"
    },
    {
      title: "AI-Powered Threat Detection",
      excerpt: "Discover how artificial intelligence and machine learning are revolutionizing cybersecurity threat detection and response.",
      image: "https://ext.same-assets.com/1876816431/2387087896.jpeg",
      author: "Emma Johnson",
      date: "Mar 8, 2024",
      readTime: "7 min read",
      category: "AI Security",
      slug: "ai-powered-threat-detection"
    },
    {
      title: "Compliance Frameworks Guide",
      excerpt: "Navigate the complex landscape of cybersecurity compliance with our comprehensive guide to major frameworks and regulations.",
      image: "https://ext.same-assets.com/1876816431/3195649792.jpeg",
      author: "David Kim",
      date: "Mar 5, 2024",
      readTime: "10 min read",
      category: "Compliance",
      slug: "compliance-frameworks-guide"
    },
    {
      title: "Incident Response Planning",
      excerpt: "Build an effective incident response plan that minimizes damage and ensures rapid recovery from security breaches.",
      image: "https://ext.same-assets.com/1876816431/1596293290.jpeg",
      author: "Lisa Zhang",
      date: "Mar 3, 2024",
      readTime: "9 min read",
      category: "Incident Response",
      slug: "incident-response-planning"
    }
  ];

  const categories = [
    "All Posts",
    "Threat Analysis",
    "Security Architecture",
    "Cloud Security",
    "AI Security",
    "Compliance",
    "Incident Response"
  ];

  return (
    <section id="blog" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-cyber-500/30 text-cyber-500 bg-cyber-500/10 font-medium mb-4">
            LATEST INSIGHTS
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-urbanist mb-6">
            <span className="text-white">Security Blog &</span>
            <br />
            <span className="gradient-text">Industry Insights</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-inter">
            Stay informed with the latest cybersecurity trends, threats, and best practices
            from our team of security experts.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? "bg-cyber-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="bg-gray-900/50 border-gray-700 hover:border-cyber-500/50 transition-all duration-300 overflow-hidden group">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-cyber-500 text-white">
                    {blogPosts[0].category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-urbanist">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-400 font-inter leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <button className="flex items-center text-cyber-500 hover:text-cyber-400 font-medium group-hover:underline transition-colors">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-700 hover:border-cyber-500/50 transition-all duration-300 group hover:glow-purple overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-cyber-500/80 text-white text-xs">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3 font-urbanist line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm font-inter leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <button className="flex items-center text-cyber-500 hover:text-cyber-400 font-medium text-sm group-hover:underline transition-colors">
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyber-500/10 to-cyber-600/10 border border-cyber-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white font-urbanist mb-4">
              Stay Ahead of Cyber Threats
            </h3>
            <p className="text-gray-400 mb-6 font-inter">
              Subscribe to our newsletter and get the latest cybersecurity insights, threat alerts,
              and security best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
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
      </div>
    </section>
  );
}