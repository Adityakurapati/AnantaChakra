"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star, Globe, TrendingUp, Target, Users, Crown, Trophy, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { useState, useEffect } from "react"

const scalingMetrics = [
  { name: "Market Expansion", value: "15+ Countries", progress: 88, color: "from-pink-400 to-rose-500" },
  { name: "Revenue Growth", value: "400%", progress: 95, color: "from-green-400 to-emerald-500" },
  { name: "Partnership Success", value: "98%", progress: 98, color: "from-blue-400 to-cyan-500" },
  { name: "Compliance Rate", value: "100%", progress: 100, color: "from-purple-400 to-indigo-500" },
]

const scalingServices = [
  { name: "Market Research", expertise: 95, icon: Target, color: "from-blue-400 to-cyan-500" },
  { name: "Localization", expertise: 90, icon: Globe, color: "from-green-400 to-emerald-500" },
  { name: "Partnership Development", expertise: 92, icon: Users, color: "from-purple-400 to-pink-500" },
  { name: "Compliance Management", expertise: 88, icon: Trophy, color: "from-orange-400 to-red-500" },
]

export default function BusinessScalingPage() {
  const [xp, setXp] = useState(0)
  const [level, setLevel] = useState(1)
  const [businessesScaled, setBusinessesScaled] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setXp(4000)
      setLevel(25)
      setBusinessesScaled(156)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
              <Star className="w-10 h-10 text-white" />
            </div>
            <div className="text-left">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-2 flex items-center gap-2">
                <Crown className="w-4 h-4" />
                Level {level} - Elite
              </div>
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                {businessesScaled.toLocaleString()} Businesses Scaled
              </div>
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            International Business Scaling
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Conquer global markets with elite-level expansion strategies! Master international business scaling and
            dominate worldwide.
          </p>

          {/* XP Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress to Level {level + 1}</span>
              <span>{xp}/5000 XP</span>
            </div>
            <Progress value={(xp / 5000) * 100} className="h-3" />
          </div>
        </motion.div>

        {/* Scaling Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            <TrendingUp className="inline-block mr-4 w-10 h-10" />
            Global Expansion Metrics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scalingMetrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateX: 5 }}
                className="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-pink-400/50 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-bold mb-4">{metric.name}</h3>
                <div className="text-4xl font-bold text-pink-400 mb-4">{metric.value}</div>
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

        {/* Scaling Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            <Globe className="inline-block mr-4 w-10 h-10" />
            Elite Scaling Arsenal
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {scalingServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, rotateY: 3 }}
                className="group"
              >
                <Card className="backdrop-blur-md bg-white/5 border-white/10 hover:border-pink-400/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-pink-400">{service.expertise}%</div>
                        <div className="text-xs text-gray-400">Expertise</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                    <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${service.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${service.expertise}%` }}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Mastery Level</span>
                      <span>{service.expertise >= 90 ? "Elite" : service.expertise >= 80 ? "Expert" : "Advanced"}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Global Domination Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Market Penetration",
                description: "Enter new markets with 95% success rate",
                bonus: "15+ Countries",
                icon: Target,
                color: "from-blue-400 to-cyan-500",
              },
              {
                title: "Revenue Multiplication",
                description: "Scale revenue by 400% in 12 months",
                bonus: "400% Growth",
                icon: TrendingUp,
                color: "from-green-400 to-emerald-500",
              },
              {
                title: "Global Partnerships",
                description: "Build strategic international alliances",
                bonus: "Elite Network",
                icon: Users,
                color: "from-purple-400 to-pink-500",
              },
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, rotateX: -30 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-pink-400/50 transition-all duration-300 text-center group"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{achievement.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{achievement.description}</p>
                <div
                  className={`bg-gradient-to-r ${achievement.color} text-black px-4 py-2 rounded-full text-sm font-bold inline-block`}
                >
                  {achievement.bonus}
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
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Ready to Conquer Global Markets?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the elite circle of global business leaders. Scale internationally with confidence and dominate
            worldwide!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl shadow-pink-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Start Global Expansion <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300"
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
