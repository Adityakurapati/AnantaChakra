"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Award, Users, Shield, Globe, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
    features: ["SEO Optimization", "PPC Campaigns", "Content Marketing", "Analytics & Reporting"],
    color: "from-purple-500 to-pink-500",
    level: "Expert",
    xp: "2500 XP",
  },
  {
    id: "seo-optimization",
    icon: Award,
    title: "SEO Optimization",
    description: "Advanced SEO techniques to improve your search rankings and organic traffic.",
    features: ["Technical SEO", "Keyword Research", "Link Building", "Local SEO"],
    color: "from-blue-500 to-cyan-500",
    level: "Master",
    xp: "3000 XP",
  },
  {
    id: "social-media",
    icon: Users,
    title: "Social Media Management",
    description: "Strategic social media management to build your brand and engage your audience.",
    features: ["Content Creation", "Community Management", "Paid Advertising", "Influencer Marketing"],
    color: "from-green-500 to-emerald-500",
    level: "Pro",
    xp: "2000 XP",
  },
  {
    id: "tech-support",
    icon: Shield,
    title: "Tech Support & Freelancing",
    description: "Reliable technical support and freelancing services for your business needs.",
    features: ["24/7 Support", "System Maintenance", "Custom Development", "Consulting"],
    color: "from-orange-500 to-red-500",
    level: "Expert",
    xp: "2800 XP",
  },
  {
    id: "cloud-engineering",
    icon: Globe,
    title: "Cloud Engineering",
    description: "Scalable cloud solutions and infrastructure management for modern businesses.",
    features: ["AWS/GCP Setup", "Migration Services", "Security Implementation", "Cost Optimization"],
    color: "from-indigo-500 to-purple-500",
    level: "Master",
    xp: "3500 XP",
  },
  {
    id: "business-scaling",
    icon: Star,
    title: "International Business Scaling",
    description: "Global expansion support with localization and market entry strategies.",
    features: ["Market Research", "Localization", "Partnership Development", "Compliance Support"],
    color: "from-pink-500 to-rose-500",
    level: "Elite",
    xp: "4000 XP",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your adventure! Each service is designed to level up your business with expert-crafted solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <Card className="backdrop-blur-md bg-white/5 border-white/10 hover:border-purple-400/50 transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-8 relative">
                  {/* Level Badge */}
                  <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {service.level}
                    </div>
                    <div className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {service.xp}
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link href={`/services/${service.id}`}>
                    <Button
                      className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300`}
                    >
                      Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Level Up Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have unlocked their potential with our expert services.
          </p>
          <Link href="/#contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
