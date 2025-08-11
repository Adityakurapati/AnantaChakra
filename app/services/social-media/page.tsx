"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, Heart, Share2, MessageCircle, TrendingUp, Zap, Star, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { useState, useEffect } from "react"

const socialMetrics = [
  { platform: "Instagram", followers: "50K+", engagement: "8.5%", color: "from-pink-400 to-rose-500" },
  { platform: "LinkedIn", followers: "25K+", engagement: "12.3%", color: "from-blue-400 to-blue-600" },
  { platform: "Facebook", followers: "75K+", engagement: "6.8%", color: "from-blue-500 to-indigo-600" },
  { platform: "Twitter", followers: "30K+", engagement: "9.2%", color: "from-cyan-400 to-blue-500" },
]

const contentTypes = [
  { name: "Viral Posts", success: 95, icon: TrendingUp, color: "from-green-400 to-emerald-500" },
  { name: "Story Content", success: 88, icon: Star, color: "from-purple-400 to-pink-500" },
  { name: "Video Content", success: 92, icon: Share2, color: "from-orange-400 to-red-500" },
  { name: "Community Mgmt", success: 90, icon: MessageCircle, color: "from-blue-400 to-cyan-500" },
]

export default function SocialMediaPage() {
  const [xp, setXp] = useState(0)
  const [level, setLevel] = useState(1)
  const [likes, setLikes] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setXp(2000)
      setLevel(12)
      setLikes(15420)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div className="text-left">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-2 flex items-center gap-2">
                <Crown className="w-4 h-4" />
                Level {level} - Pro
              </div>
              <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <Heart className="w-4 h-4" />
                {likes.toLocaleString()} Likes
              </div>
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Social Media Mastery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Build your social empire and engage your audience like never before. Master the art of social media and
            watch your community grow!
          </p>

          {/* XP Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress to Level {level + 1}</span>
              <span>{xp}/2500 XP</span>
            </div>
            <Progress value={(xp / 2500) * 100} className="h-3" />
          </div>
        </motion.div>

        {/* Social Platforms Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            <Share2 className="inline-block mr-4 w-10 h-10" />
            Platform Performance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMetrics.map((metric, index) => (
              <motion.div
                key={metric.platform}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-green-400/50 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-full flex items-center justify-center mb-4 mx-auto`}
                >
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">{metric.platform}</h3>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">{metric.followers}</div>
                  <div className="text-sm text-gray-400 mb-3">Followers</div>
                  <div className="text-lg font-semibold text-white">{metric.engagement}</div>
                  <div className="text-xs text-gray-400">Engagement Rate</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Mastery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            <Zap className="inline-block mr-4 w-10 h-10" />
            Content Mastery Levels
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {contentTypes.map((content, index) => (
              <motion.div
                key={content.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, rotateX: 2 }}
                className="group"
              >
                <Card className="backdrop-blur-md bg-white/5 border-white/10 hover:border-green-400/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${content.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <content.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-400">{content.success}%</div>
                        <div className="text-xs text-gray-400">Success Rate</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{content.name}</h3>
                    <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${content.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${content.success}%` }}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Mastery Level</span>
                      <span>
                        {content.success >= 90 ? "Expert" : content.success >= 80 ? "Advanced" : "Intermediate"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Social Media Power-Ups
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Viral Content Creation",
                description: "Create content that spreads like wildfire",
                bonus: "+500% Reach",
                icon: TrendingUp,
                color: "from-pink-400 to-rose-500",
              },
              {
                title: "Community Building",
                description: "Build engaged, loyal communities",
                bonus: "+300% Engagement",
                icon: Users,
                color: "from-blue-400 to-cyan-500",
              },
              {
                title: "Influencer Partnerships",
                description: "Connect with top influencers",
                bonus: "+200% Credibility",
                icon: Star,
                color: "from-purple-400 to-pink-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, rotateX: -30 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-green-400/50 transition-all duration-300 text-center group"
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
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Ready to Build Your Social Empire?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the social media masters and create content that captivates and converts!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Start Social Quest <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300"
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
