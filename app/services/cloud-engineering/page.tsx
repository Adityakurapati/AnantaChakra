"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, Cloud, Server, Shield, Zap, Database, Settings, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { useState, useEffect } from "react"

const cloudMetrics = [
  { name: "Uptime", value: "99.99%", progress: 99.99, color: "from-green-400 to-emerald-500" },
  { name: "Cost Savings", value: "65%", progress: 65, color: "from-blue-400 to-cyan-500" },
  { name: "Performance", value: "300%", progress: 100, color: "from-purple-400 to-pink-500" },
  { name: "Security Score", value: "A+", progress: 95, color: "from-orange-400 to-red-500" },
]

const cloudServices = [
  { name: "AWS Architecture", mastery: 95, icon: Cloud, color: "from-orange-400 to-yellow-500" },
  { name: "GCP Solutions", mastery: 88, icon: Server, color: "from-blue-400 to-cyan-500" },
  { name: "Security Implementation", mastery: 92, icon: Shield, color: "from-red-400 to-pink-500" },
  { name: "Database Management", mastery: 90, icon: Database, color: "from-green-400 to-emerald-500" },
]

export default function CloudEngineeringPage() {
  const [xp, setXp] = useState(0)
  const [level, setLevel] = useState(1)
  const [deploymentsManaged, setDeploymentsManaged] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setXp(3500)
      setLevel(20)
      setDeploymentsManaged(847)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <div className="text-left">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-2 flex items-center gap-2">
                <Crown className="w-4 h-4" />
                Level {level} - Master
              </div>
              <div className="bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Cloud className="w-4 h-4" />
                {deploymentsManaged.toLocaleString()} Deployments
              </div>
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Cloud Engineering Mastery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Scale to the clouds with enterprise-grade infrastructure! Master AWS, GCP, and cutting-edge cloud
            technologies.
          </p>

          {/* XP Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress to Level {level + 1}</span>
              <span>{xp}/4000 XP</span>
            </div>
            <Progress value={(xp / 4000) * 100} className="h-3" />
          </div>
        </motion.div>

        {/* Cloud Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            <Settings className="inline-block mr-4 w-10 h-10" />
            Cloud Performance Metrics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudMetrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateX: 5 }}
                className="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-indigo-400/50 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-bold mb-4">{metric.name}</h3>
                <div className="text-4xl font-bold text-indigo-400 mb-4">{metric.value}</div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full bg-gradient-to-r ${metric.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.progress}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cloud Services Mastery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            <Zap className="inline-block mr-4 w-10 h-10" />
            Cloud Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, rotateY: 3 }}
                className="group"
              >
                <Card className="backdrop-blur-md bg-white/5 border-white/10 hover:border-indigo-400/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-indigo-400">{service.mastery}%</div>
                        <div className="text-xs text-gray-400">Mastery</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                    <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${service.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${service.mastery}%` }}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Expertise Level</span>
                      <span>
                        {service.mastery >= 90 ? "Expert" : service.mastery >= 80 ? "Advanced" : "Intermediate"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cloud Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Cloud Transformation Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Scalability",
                description: "Auto-scale resources based on demand",
                bonus: "Infinite Scale",
                icon: Zap,
                color: "from-blue-400 to-cyan-500",
              },
              {
                title: "Cost Optimization",
                description: "Reduce infrastructure costs by 60%+",
                bonus: "60% Savings",
                icon: Settings,
                color: "from-green-400 to-emerald-500",
              },
              {
                title: "Security & Compliance",
                description: "Enterprise-grade security implementation",
                bonus: "Bank-Level Security",
                icon: Shield,
                color: "from-red-400 to-pink-500",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, rotateX: -30 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-indigo-400/50 transition-all duration-300 text-center group"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{benefit.description}</p>
                <div
                  className={`bg-gradient-to-r ${benefit.color} text-black px-4 py-2 rounded-full text-sm font-bold inline-block`}
                >
                  {benefit.bonus}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Conquer the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your infrastructure with enterprise-grade cloud solutions that scale with your ambitions!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl shadow-indigo-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Start Cloud Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300"
              >
                Explore Other Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
