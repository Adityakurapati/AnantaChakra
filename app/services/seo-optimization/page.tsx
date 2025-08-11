"use client"

import { motion } from "framer-motion"
import { ArrowRight, Award, Search, TrendingUp, Target, Zap, CheckCircle, Crown, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { useState, useEffect } from "react"

const seoMetrics = [
  { name: "Keyword Rankings", current: 85, target: 100, color: "from-green-400 to-emerald-500" },
  { name: "Organic Traffic", current: 92, target: 100, color: "from-blue-400 to-cyan-500" },
  { name: "Page Speed", current: 78, target: 100, color: "from-purple-400 to-pink-500" },
  { name: "Domain Authority", current: 88, target: 100, color: "from-orange-400 to-red-500" },
]

const seoTools = [
  { name: "Technical SEO Audit", description: "Comprehensive site analysis", icon: Shield, mastery: 95 },
  { name: "Keyword Research", description: "Strategic keyword targeting", icon: Search, mastery: 90 },
  { name: "Content Optimization", description: "SEO-friendly content creation", icon: Target, mastery: 88 },
  { name: "Link Building", description: "Authority building campaigns", icon: TrendingUp, mastery: 92 },
]

export default function SEOOptimizationPage() {
  const [xp, setXp] = useState(0)
  const [level, setLevel] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      setXp(3000)
      setLevel(18)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Award className="w-10 h-10 text-white" />
            </div>
            <div className="text-left">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-2 flex items-center gap-2">
                <Crown className="w-4 h-4" />
                Level {level} - Master
              </div>
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                {xp.toLocaleString()} XP
              </div>
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            SEO Optimization Mastery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Dominate search rankings with our advanced SEO strategies. Unlock the secrets of search engine optimization
            and watch your visibility soar!
          </p>

          {/* XP Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress to Level {level + 1}</span>
              <span>{xp}/3500 XP</span>
            </div>
            <Progress value={(xp / 3500) * 100} className="h-3" />
          </div>
        </motion.div>

        {/* SEO Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            <TrendingUp className="inline-block mr-4 w-10 h-10" />
            SEO Performance Dashboard
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoMetrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-4">{metric.name}</h3>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Current</span>
                    <span className="font-bold">{metric.current}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full bg-gradient-to-r ${metric.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.current}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </div>
                </div>
                <div className="text-xs text-gray-400">Target: {metric.target}%</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO Tools Arsenal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            <Zap className="inline-block mr-4 w-10 h-10" />
            SEO Tools Arsenal
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {seoTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="group"
              >
                <Card className="backdrop-blur-md bg-white/5 border-white/10 hover:border-blue-400/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <tool.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-400">{tool.mastery}%</div>
                        <div className="text-xs text-gray-400">Mastery</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{tool.name}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{tool.description}</p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${tool.mastery}%` }}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Unlock These SEO Powers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Organic Traffic Boost",
                description: "Increase organic traffic by 300%+",
                bonus: "+300% Traffic",
                color: "from-green-400 to-emerald-500",
              },
              {
                title: "Higher Rankings",
                description: "Dominate first page search results",
                bonus: "Top 3 Rankings",
                color: "from-blue-400 to-cyan-500",
              },
              {
                title: "Better Conversions",
                description: "Convert more visitors into customers",
                bonus: "+150% Conversions",
                color: "from-purple-400 to-pink-500",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, rotateX: -30 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <CheckCircle className="w-10 h-10 text-white" />
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
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Dominate Search Rankings?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the SEO masters and unlock the full potential of organic search traffic!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Start SEO Quest <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300"
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
