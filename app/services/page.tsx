"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Award, Users, Shield, Globe, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import CommonHeader from "@/components/common-header"

const services = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
    href: "/services/digital-marketing",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-900 to-pink-900",
  },
  {
    icon: Award,
    title: "SEO Optimization",
    description: "Advanced SEO techniques to improve your search rankings and organic traffic.",
    href: "/services/seo-optimization",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-900 to-cyan-900",
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Build and engage your community across all social media platforms.",
    href: "/services/social-media",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-900 to-emerald-900",
  },
  {
    icon: Shield,
    title: "Tech Support & Freelancing",
    description: "24/7 technical support and freelancing services for your business needs.",
    href: "/services/tech-support",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-900 to-red-900",
  },
  {
    icon: Globe,
    title: "Cloud Engineering",
    description: "Scalable cloud solutions and infrastructure management for modern businesses.",
    href: "/services/cloud-engineering",
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-900 to-purple-900",
  },
  {
    icon: Star,
    title: "International Business Scaling",
    description: "Expand your business globally with our international scaling expertise.",
    href: "/services/business-scaling",
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-900 to-rose-900",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <CommonHeader />

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your business to new heights
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <Link href={service.href}>
                <Card className="backdrop-blur-md bg-white/5 border-white/10 hover:border-purple-400/50 transition-all duration-300 h-full cursor-pointer">
                  <CardContent className="p-6 sm:p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 bg-transparent"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help transform your business
          </p>
          <Link href="/#contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
