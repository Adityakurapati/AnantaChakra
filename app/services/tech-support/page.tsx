"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Wrench, Clock, Zap, CheckCircle, Settings, Code, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { useState, useEffect } from "react"
import CommonHeader from "@/components/common-header"

const supportMetrics = [
  { name: "Response Time", value: "< 2 mins", target: 100, color: "from-green-400 to-emerald-500" },
  { name: "Resolution Rate", value: "99.8%", target: 100, color: "from-blue-400 to-cyan-500" },
  { name: "Uptime", value: "99.99%", target: 100, color: "from-purple-400 to-pink-500" },
  { name: "Client Satisfaction", value: "4.9/5", target: 100, color: "from-orange-400 to-red-500" },
]

const techSkills = [
  { name: "System Administration", level: 95, icon: Server, color: "from-blue-400 to-cyan-500" },
  { name: "Custom Development", level: 88, icon: Code, color: "from-green-400 to-emerald-500" },
  { name: "Security Implementation", level: 92, icon: Shield, color: "from-red-400 to-pink-500" },
  { name: "Performance Optimization", level: 90, icon: Zap, color: "from-purple-400 to-indigo-500" },
]

export default function TechSupportPage() {
  const [xp, setXp] = useState(0)
  const [level, setLevel] = useState(1)
  const [ticketsResolved, setTicketsResolved] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setXp(2800)
      setLevel(16)
      setTicketsResolved(1247)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white overflow-x-hidden">
      <CommonHeader />

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div className="text-left">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-2 flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Level {level} - Expert
              </div>
              <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                {ticketsResolved.toLocaleString()} Tickets Resolved
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Tech Support & Freelancing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Your reliable tech guardian! Get 24/7 support and expert freelancing services to keep your business running
            smoothly.
          </p>

          {/* XP Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress to Level {level + 1}</span>
              <span>{xp}/3000 XP</span>
            </div>
            <Progress value={(xp / 3000) * 100} className="h-3" />
          </div>
        </motion.div>

        {/* Support Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            <Clock className="inline-block mr-4 w-10 h-10" />
            Support Performance
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {supportMetrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="backdrop-blur-md bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-bold mb-4">{metric.name}</h3>
                <div className="text-3xl font-bold text-orange-400 mb-4">{metric.value}</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${metric.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.target}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            <Wrench className="inline-block mr-4 w-10 h-10" />
            Technical Expertise
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {techSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="group"
              >
                <Card className="backdrop-blur-md bg-white/5 border-white/10 hover:border-orange-400/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <skill.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-orange-400">{skill.level}%</div>
                        <div className="text-xs text-gray-400">Expertise</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{skill.name}</h3>
                    <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Skill Level</span>
                      <span>{skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Support Power-Ups
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "24/7 Availability",
                description: "Round-the-clock support when you need it most",
                bonus: "Always Online",
                icon: Clock,
                color: "from-green-400 to-emerald-500",
              },
              {
                title: "Rapid Response",
                description: "Lightning-fast issue resolution",
                bonus: "< 2 Min Response",
                icon: Zap,
                color: "from-blue-400 to-cyan-500",
              },
              {
                title: "Expert Solutions",
                description: "Professional-grade technical expertise",
                bonus: "99.8% Success Rate",
                icon: CheckCircle,
                color: "from-purple-400 to-pink-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, rotateX: -30 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300 text-center group"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>
                <div
                  className={`bg-gradient-to-r ${feature.color} text-black px-4 py-2 rounded-full text-sm font-bold inline-block`}
                >
                  {feature.bonus}
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
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Ready for Bulletproof Tech Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join businesses that never worry about tech issues. Get expert support that keeps you running 24/7!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Get Support Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300"
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
