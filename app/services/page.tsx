"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle, TrendingUp, Award, Users, Shield, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Custom digital marketing solutions combining SEO, PPC, and strategic planning for startup growth on bootstrap budgets.",
    features: [
      "Search engine optimization (SEO)",
      "Pay-per-click (PPC) campaigns",
      "Content marketing strategy",
      "Social media marketing",
      "Email marketing campaigns",
      "Conversion rate optimization",
    ],
  },
  {
    icon: Award,
    title: "SEO Optimization",
    description: "Affordable SEO packages for startups including comprehensive audits, keyword research, and measurable results within 90 days.",
    features: [
      "Technical SEO audit",
      "On-page optimization",
      "Off-page SEO",
      "Keyword research & strategy",
      "Link building",
      "Performance tracking & reporting",
    ],
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "LinkedIn marketing packages and social channel optimization for effective lead generation and brand presence.",
    features: [
      "LinkedIn marketing campaigns",
      "Facebook & Instagram management",
      "Twitter/X strategy",
      "Content calendar creation",
      "Community engagement",
      "Social analytics & reporting",
    ],
  },
  {
    icon: Shield,
    title: "Tech Support & Freelancing",
    description: "Flexible remote tech support and freelancing services ideal for startups needing scalable expertise.",
    features: [
      "24/7 technical support",
      "Dedicated tech team",
      "Project-based work",
      "Staff augmentation",
      "Emergency support",
      "Custom development",
    ],
  },
  {
    icon: Globe,
    title: "Cloud Engineering",
    description: "AWS and GCP cloud engineering for cost-efficient, secure, and scalable infrastructure growth.",
    features: [
      "AWS infrastructure setup",
      "GCP solutions",
      "Cloud migration",
      "DevOps & CI/CD",
      "Infrastructure optimization",
      "Security & compliance",
    ],
  },
  {
    icon: Zap,
    title: "Business Scaling",
    description: "International expansion support with localization and market entry strategies for global growth.",
    features: [
      "Market research",
      "Localization services",
      "Go-to-market strategy",
      "Global expansion planning",
      "Partnership development",
      "Growth consulting",
    ],
  },
]

export default function ServicesPage() {
  const headerRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true })
  const processInView = useInView(processRef, { once: true })

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
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions designed to elevate your startup and accelerate business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure your project's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business goals and challenges" },
              { step: "02", title: "Strategy", desc: "Developing tailored solutions and roadmap" },
              { step: "03", title: "Execution", desc: "Implementing with precision and expertise" },
              { step: "04", title: "Optimization", desc: "Continuous improvement and scaling" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how AnantaChakra can help you achieve your business goals.
            </p>
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
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
