"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const webProjects = [
  {
    name: "ComfNet Solution GMBH",
    description: "Enterprise solutions and digital transformation platform for comfort manufacturing",
    category: "Corporate Website",
    url: "https://comfnet.com",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
  },
  {
    name: "Shanti Himalaya Resort",
    description: "Luxury resort website with booking system and property showcase",
    category: "Hospitality",
    url: "https://shantihimalaya.com",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Tailwind CSS", "Firebase", "Stripe"],
  },
  {
    name: "Gayatri Vastu Jyotish",
    description: "E-commerce platform for spiritual products and services with inventory management",
    category: "E-Commerce",
    url: "https://gayatrivastujyotish.com",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Cloud Storage"],
  },
  {
    name: "Election Deal",
    description: "Voting slip application with search functionality and automated WhatsApp distribution",
    category: "Civic Tech",
    url: "https://meghaprashantbhagwat.com",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "MongoDB", "Twilio"],
  },
]

const mobileProjects = [
  {
    name: "AgroGreen",
    description: "React Native Expo application for agriculture technology and farming insights",
    category: "Agriculture",
    technologies: ["React Native", "Expo", "Firebase", "Geolocation"],
    features: ["Real-time crop monitoring", "Weather integration", "Farmer community"],
  },
  {
    name: "GlycoIntelligence",
    description: "Health and wellness app for diet planning and glucose monitoring with AI recommendations",
    category: "Health & Wellness",
    technologies: ["React Native", "Expo", "TensorFlow", "Firebase"],
    features: ["Glucose tracking", "Diet planning", "AI health insights", "Health data export"],
  },
]

export default function PortfolioPage() {
  const headerRef = useRef(null)
  const webRef = useRef(null)
  const mobileRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true })
  const webInView = useInView(webRef, { once: true })
  const mobileInView = useInView(mobileRef, { once: true })

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/95 border-b border-border"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 text-xl font-bold text-primary hover:text-secondary transition-colors">
            <img src="/favicon.png" alt="AnantaChakra" className="w-8 h-8" />
            <span>AnantaChakra</span>
          </Link>
          <Link href="/">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
              Back to Home
            </Button>
          </Link>
        </div>
      </motion.nav>

      {/* Header */}
      <section ref={headerRef} className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Completed projects across web development, e-commerce, civic tech, and mobile applications. AnantaChakra delivers digital solutions that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Web Projects Section */}
      <section ref={webRef} className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={webInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Web & Platform Projects</h2>
            <p className="text-lg text-muted-foreground">Full-stack web applications and platforms built for scale</p>
          </motion.div>

          <div className="space-y-8">
            {webProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={webInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="border-2 border-border hover:border-primary transition-all duration-300 h-full bg-card shadow-sm hover:shadow-xl hover:-translate-y-2 overflow-hidden">
                    <div className="relative p-8 md:p-10">
                      {/* Background color accent */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          {/* Category badge with color */}
                          <div className="inline-block mb-3">
                            <span className="px-4 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary text-xs font-bold rounded-full border border-primary/30 group-hover:border-primary/60 transition-colors">
                              {project.category}
                            </span>
                          </div>
                          
                          {/* Project title */}
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                            {project.name}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl group-hover:text-foreground transition-colors duration-300">
                            {project.description}
                          </p>
                        </div>
                        
                        {/* External link icon */}
                        <div className="ml-4 mt-1 flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <ExternalLink className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border/50 group-hover:border-primary/30 transition-colors">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 text-blue-600 dark:text-blue-300 text-xs font-semibold rounded-lg border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-md cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Projects Section */}
      <section ref={mobileRef} className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mobileInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Mobile Applications</h2>
            <p className="text-lg text-muted-foreground">React Native and Expo apps for iOS and Android</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mobileProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={mobileInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group h-full"
              >
                <Card className="h-full border-2 border-border hover:border-secondary transition-all duration-300 bg-card shadow-sm hover:shadow-xl overflow-hidden relative">
                  {/* Background gradient accent */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Category & Title */}
                    <div className="mb-6">
                      <div className="inline-block mb-3">
                        <span className="px-3 py-1 bg-gradient-to-r from-secondary/20 to-primary/20 text-secondary text-xs font-bold rounded-lg border border-secondary/30 group-hover:border-secondary/60 transition-colors">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors duration-300 mb-3">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-6 flex-1">
                      <h4 className="text-xs font-bold uppercase text-foreground mb-3 tracking-wider">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            <span className="text-secondary font-bold flex-shrink-0 mt-0.5">→</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="pt-6 border-t border-border/50 group-hover:border-secondary/30 transition-colors">
                      <h4 className="text-xs font-bold uppercase text-foreground mb-3 tracking-wider">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 text-purple-600 dark:text-purple-300 text-xs font-semibold rounded-md border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-sm cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create digital solutions that drive real business impact.
            </p>
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-3xl font-bold mb-2 text-primary">
              AnantaChakra
            </div>
            <p className="text-muted-foreground mb-6">Expert Digital Solutions for Startup Growth</p>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} AnantaChakra. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
