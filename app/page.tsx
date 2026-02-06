"use client"

import type React from "react"
import Head from "next/head"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, ChevronDown, Mail, MapPin, Star, Users, Award, TrendingUp, Shield, Globe, Zap, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const projects = [
  {
    name: "ComfNet Solution GMBH",
    description: "Enterprise solutions and digital transformation",
    url: "https://comfnet.com",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    name: "Shanti Himalaya Resort",
    description: "Tourism and hospitality brand identity",
    url: "https://shantihimalaya.com",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    name: "Gayatri Vastu Jyotish",
    description: "E-commerce platform for spiritual products",
    url: "https://gayatrivastujyotish.com",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    name: "Election Deal",
    description: "Voting slip application and search platform",
    url: "https://meghaprashantbhagwat.com",
    image: "/placeholder.svg?height=300&width=400"
  },
]

const appProjects = [
  {
    name: "AgroGreen",
    description: "React Native Expo mobile application for agriculture technology",
    technologies: ["React Native", "Expo", "Firebase"],
  },
  {
    name: "GlycoIntelligence",
    description: "Android Expo app for diet planning and glucose monitoring",
    technologies: ["React Native", "Expo", "TensorFlow"],
  },
]

export default function AnantaChakraWebsite() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const aboutInView = useInView(aboutRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true })
  const projectsInView = useInView(projectsRef, { once: true })
  const contactInView = useInView(contactRef, { once: true })

  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = async (formData: FormData) => {
    setFormStatus("sending")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setFormStatus("success")
      setTimeout(() => setFormStatus("idle"), 3000)
    } catch (error) {
      console.error("Submission error:", error)
      setFormStatus("error")
      setTimeout(() => setFormStatus("idle"), 3000)
    }
  }

  return (
    <>
      <Head>
        <title>AnantaChakra | Digital Marketing & Tech Solutions</title>
        <meta
          name="description"
          content="Top-rated digital marketing agency offering affordable SEO services, LinkedIn marketing, and cloud engineering for startups in India. 24/7 business tech support."
        />
        <meta
          name="keywords"
          content="digital marketing agency, SEO company India, business SEO support, startup marketing consultants, affordable tech solutions"
        />
        <meta property="og:title" content="AnantaChakra | Digital Marketing & Tech Solutions" />
        <meta
          property="og:description"
          content="Expert-led digital solutions for global business growth. 24/7 remote support team."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anantachakra.tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://anantachakra.tech" />
      </Head>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/95 border-b border-border"
        >
          <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-primary"
            >
              <img src="/favicon.png" alt="AnantaChakra" className="w-8 h-8" />
              <span>AnantaChakra</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: "Home", ref: heroRef },
                { name: "About", ref: aboutRef },
                { name: "Services", ref: servicesRef },
                { name: "Projects", ref: projectsRef },
                { name: "Contact", ref: contactRef },
              ].map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ color: "rgb(251, 146, 60)" }}
                  onClick={() => scrollToSection(item.ref)}
                  className="text-sm font-medium hover:text-secondary transition-colors duration-300"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-20 relative">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-6 mt-12"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <img src="/favicon.png" alt="AnantaChakra" className="w-16 h-16" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-foreground"
            >
              Digital Solutions for Startup Growth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Specializing in startup digital marketing, affordable SEO services, and cloud engineering solutions. Expert-led consulting for bootstrap-budget companies with 24/7 remote support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection(aboutRef)}
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
                >
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <ChevronDown className="w-8 h-8 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About AnantaChakra
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We deliver expert-led digital marketing and remote tech support solutions tailored for startups and SMBs. Our 100% remote, global team operates 24/7 to engineer sustainable growth for your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Specialized Experts", desc: "Dedicated team of marketing and tech professionals" },
                { icon: Globe, title: "100% Remote", desc: "Distributed team working across timezones globally" },
                { icon: Zap, title: "24/7 Support", desc: "Always available for our clients' needs" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital solutions designed to elevate your startup and business growth.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Digital Marketing",
                  description: "Custom digital marketing solutions combining SEO, PPC, and strategic planning for startup growth on bootstrap budgets.",
                },
                {
                  icon: Award,
                  title: "SEO Optimization",
                  description: "Affordable SEO packages for startups including comprehensive audits, keyword research, and measurable results within 90 days.",
                },
                {
                  icon: Users,
                  title: "Social Media Management",
                  description: "LinkedIn marketing packages and social channel optimization for effective lead generation and brand presence.",
                },
                {
                  icon: Shield,
                  title: "Tech Support & Freelancing",
                  description: "Flexible remote tech support and freelancing services ideal for startups needing scalable expertise.",
                },
                {
                  icon: Globe,
                  title: "Cloud Engineering",
                  description: "AWS and GCP cloud engineering for cost-efficient, secure, and scalable infrastructure growth.",
                },
                {
                  icon: Star,
                  title: "Business Scaling",
                  description: "International expansion support with localization and market entry strategies for global growth.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="group"
                >
                  <Card className="h-full border-border hover:border-primary transition-all duration-300 bg-card shadow-sm hover:shadow-lg hover:scale-105">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section ref={projectsRef} className="py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Completed by AnantaChakra - A selection of our successful client projects.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {projects.map((project, index) => (
                <motion.a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group block h-full"
                >
                  <Card className="h-full border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 bg-card relative">
                    {/* Interactive background gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/30 to-secondary/10 rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                            {project.name}
                          </h3>
                          <p className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground transition-colors">
                            {project.description}
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                          <ExternalLink className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      
                      {/* Learn more link */}
                      <div className="mt-auto pt-6 border-t border-border/50 group-hover:border-primary/30 transition-colors">
                        <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                          Learn more <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Mobile Apps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Mobile Applications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {appProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                    animate={projectsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group p-8 rounded-xl bg-card border-2 border-border hover:border-secondary transition-all duration-300 shadow-sm hover:shadow-xl cursor-default relative overflow-hidden"
                  >
                    {/* Background accent */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-secondary/20 to-primary/10 rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">{project.name}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 group-hover:text-foreground transition-colors">{project.description}</p>
                    
                    {/* Expandable tech info */}
                    <div className="max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500 opacity-0 group-hover:opacity-100">
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">Built with</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies?.slice(0, 2).map((tech, i) => (
                            <span key={i} className="px-2 py-1 text-xs bg-secondary/20 text-secondary rounded font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={projectsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View All Projects <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your business? Let's start working together today.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={contactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Email</h3>
                    <p className="text-muted-foreground">support@anantachakra.tech</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Location</h3>
                    <p className="text-muted-foreground">India</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={contactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="p-8 rounded-xl bg-card border border-border shadow-md hover:shadow-lg transition-all"
              >
                <form action={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-secondary border-border focus:border-primary focus:ring-primary/20"
                    />
                    <Input
                      name="email"
                      placeholder="Your Email"
                      type="email"
                      required
                      className="bg-secondary border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                  <Button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === "idle" && (
                      <>
                        Send Message <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                    {formStatus === "sending" && "Sending..."}
                    {formStatus === "success" && "Message Sent!"}
                    {formStatus === "error" && "Error - Try Again"}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-secondary border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <a href="https://v0-portfolio-website-builder-eight-pi.vercel.app/" className="text-3xl font-bold mb-2 text-primary">
                Aditya Kurapati
              </a>
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
    </>
  )
}
