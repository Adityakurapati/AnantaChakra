"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Target, BarChart3, Zap, CheckCircle, Star, Trophy, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { useState, useEffect } from "react"

const achievements = [
  { name: "Traffic Booster", description: "Increase website traffic by 200%", icon: TrendingUp, unlocked: true },
  { name: "Conversion Master", description: "Achieve 15% conversion rate", icon: Target, unlocked: true },
  { name: "ROI Champion", description: "Generate 500% ROI", icon: Trophy, unlocked: false },
  { name: "Brand Builder", description: "Build strong brand presence", icon: Star, unlocked: true },
]

const skillTree = [
  { name: "SEO Mastery", level: 85, color: "from-green-400 to-emerald-500" },
  { name: "PPC Expertise", level: 92, color: "from-blue-400 to-cyan-500" },
  { name: "Content Strategy", level: 78, color: "from-purple-400 to-pink-500" },
  { name: "Analytics Pro", level: 88, color: "from-orange-400 to-red-500" },
]

export default function DigitalMarketingPage() {
  const [xp, setXp] = useState(0)
  const [level, setLevel] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      setXp(2500)
      setLevel(15)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <div className="text-left">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-2">
                Level {level} - Expert
              </div>
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                {xp.toLocaleString()} XP
              </div>
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Digital Marketing Mastery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Unlock the power of digital marketing with our comprehensive strategies. Level up your online presence and
            dominate your market!
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

        {/* Skill Tree */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            <Gamepad2 className="inline-block mr-4 w-10 h-10" />
            Skill Tree
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillTree.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10"
              >
                <h3 className="text-lg font-bold mb-4">{skill.name}</h3>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Level</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            <Trophy className="inline-block mr-4 w-10 h-10" />
            Achievements Unlocked
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.name}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`backdrop-blur-md p-6 rounded-2xl border transition-all duration-300 ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-400/50"
                    : "bg-white/5 border-white/10 opacity-50"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    achievement.unlocked ? "bg-gradient-to-r from-yellow-400 to-orange-400" : "bg-gray-600"
                  }`}
                >
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{achievement.name}</h3>
                <p className="text-sm text-gray-300">{achievement.description}</p>
                {achievement.unlocked && (
                  <div className="mt-3 flex items-center gap-2 text-yellow-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-xs font-semibold">UNLOCKED</span>
                  </div>
                )}
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
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Power-Ups & Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Strategic Planning",
                description: "Data-driven strategies tailored to your business goals",
                bonus: "+50% Efficiency",
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "Real-time tracking and detailed performance reports",
                bonus: "+75% Insights",
              },
              {
                icon: Zap,
                title: "Campaign Optimization",
                description: "Continuous optimization for maximum ROI",
                bonus: "+100% ROI",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateX: 5 }}
                className="group"
              >
                <Card className="backdrop-blur-md bg-white/5 border-white/10 hover:border-purple-400/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{feature.description}</p>
                    <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-3 py-1 rounded-full text-sm font-bold inline-block">
                      {feature.bonus}
                    </div>
                  </CardContent>
                </Card>
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
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Start Your Digital Marketing Quest?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful businesses and unlock your digital potential today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Start Quest <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300"
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
