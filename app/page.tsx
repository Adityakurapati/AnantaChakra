"use client"

import type React from "react"
import Head from "next/head"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight, ChevronDown, Mail, MapPin, Star, Users, Award, TrendingUp, Zap, Shield, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function AnantaChakraWebsite() {
        const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
        const [isMouseOver, setIsMouseOver] = useState(false)
        const { scrollYProgress } = useScroll()
        const heroRef = useRef(null)
        const aboutRef = useRef(null)
        const servicesRef = useRef(null)
        const statsRef = useRef(null)
        const contactRef = useRef(null)

        const heroInView = useInView(heroRef, { once: true })
        const aboutInView = useInView(aboutRef, { once: true })
        const servicesInView = useInView(servicesRef, { once: true })
        const statsInView = useInView(statsRef, { once: true })
        const contactInView = useInView(contactRef, { once: true })

        const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
        const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

        const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

        useEffect(() => {
                const handleMouseMove = (e: MouseEvent) => {
                        setMousePosition({ x: e.clientX, y: e.clientY })
                }
                window.addEventListener("mousemove", handleMouseMove)
                return () => window.removeEventListener("mousemove", handleMouseMove)
        }, [])

        const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
                ref.current?.scrollIntoView({ behavior: "smooth" })
        }

        const handleSubmit = async (formData: FormData) => {
                setFormStatus("sending");
                try {
                        const response = await fetch('/api/contact', {
                                method: 'POST',
                                body: formData
                        });

                        const data = await response.json();

                        if (!response.ok) {
                                throw new Error(data.error || 'Failed to send message');
                        }

                        setFormStatus("success");
                        setTimeout(() => setFormStatus("idle"), 3000);
                } catch (error) {
                        console.error('Submission error:', error);
                        setFormStatus("error");
                        setTimeout(() => setFormStatus("idle"), 3000);
                }
        };

        return (
                <>
                        <Head>
                                <title>AnantaChakra | Digital Marketing & Tech Solutions</title>
                                <meta name="description" content="Expert digital marketing, SEO optimization, and cloud engineering services. Global 24/7 remote team helping businesses scale smarter and faster." />
                                <meta name="keywords" content="digital marketing, SEO optimization, cloud engineering, social media management, technical support, business scaling" />
                                <meta property="og:title" content="AnantaChakra | Digital Marketing & Tech Solutions" />
                                <meta property="og:description" content="Expert-led digital solutions for global business growth. 24/7 remote support team." />
                                <meta property="og:type" content="website" />
                                <meta property="og:url" content="https://anantachakra.tech" />
                                <meta name="viewport" content="width=device-width, initial-scale=1" />
                                <link rel="canonical" href="https://anantachakra.tech" />
                        </Head>

                        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
                                {/* Animated Background */}
                                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                                        <motion.div
                                                className={`absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full transition-all duration-300 ${isMouseOver ? 'blur-3xl' : 'blur-0 opacity-0'}`}
                                                style={{
                                                        left: mousePosition.x - 192,
                                                        top: mousePosition.y - 192,
                                                }}
                                                animate={{
                                                        scale: isMouseOver ? [1, 1.1, 1] : 1,
                                                }}
                                                transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                }}
                                        />
                                </div>

                                {/* Navigation */}
                                <motion.nav
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8 }}
                                        className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
                                >
                                        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                                                <motion.div
                                                        whileHover={{ scale: 1.05 }}
                                                        className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                                                >
                                                        AnantaChakra
                                                </motion.div>
                                                <div className="hidden md:flex space-x-8">
                                                        {[
                                                                { name: "Home", ref: heroRef },
                                                                { name: "About", ref: aboutRef },
                                                                { name: "Services", ref: servicesRef },
                                                                { name: "Contact", ref: contactRef },
                                                        ].map((item, index) => (
                                                                <motion.button
                                                                        key={item.name}
                                                                        initial={{ opacity: 0, y: -20 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        transition={{ delay: index * 0.1 + 0.5 }}
                                                                        whileHover={{ scale: 1.1, color: "#a855f7" }}
                                                                        onClick={() => scrollToSection(item.ref)}
                                                                        className="hover:text-purple-400 transition-colors duration-300"
                                                                >
                                                                        {item.name}
                                                                </motion.button>
                                                        ))}
                                                </div>
                                        </div>
                                </motion.nav>

                                {/* Hero Section */}
                                <section
                                        ref={heroRef}
                                        className="min-h-screen flex items-center justify-center relative"
                                >
                                        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
                                        </motion.div>

                                        <div className="container mx-auto px-6 text-center z-10">
                                                <motion.div
                                                        initial={{ scale: 0, rotate: -180 }}
                                                        animate={heroInView ? { scale: 1, rotate: 0 } : {}}
                                                        transition={{ duration: 1, type: "spring", stiffness: 100 }}
                                                        className="mb-8"
                                                >
                                                        <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-purple-500/50">
                                                                <Zap className="w-16 h-16 text-white" />
                                                        </div>
                                                </motion.div>

                                                <motion.h1
                                                        initial={{ opacity: 0, y: 50 }}
                                                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                                        transition={{ duration: 0.8, delay: 0.2 }}
                                                        className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
                                                >
                                                        {["A", "n", "a", "n", "t", "a", "C", "h", "a", "k", "r", "a"].map((letter, index) => (
                                                                <motion.span
                                                                        key={index}
                                                                        initial={{ opacity: 0, y: 50, rotateX: -90 }}
                                                                        animate={
                                                                                heroInView
                                                                                        ? {
                                                                                                opacity: 1,
                                                                                                y: 0,
                                                                                                rotateX: 0,
                                                                                        }
                                                                                        : {}
                                                                        }
                                                                        transition={{
                                                                                duration: 0.8,
                                                                                delay: 0.2 + index * 0.1,
                                                                        }}
                                                                        className="inline-block"
                                                                >
                                                                        {letter}
                                                                </motion.span>
                                                        ))}
                                                </motion.h1>

                                                <motion.p
                                                        initial={{ opacity: 0, y: 30 }}
                                                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                                        transition={{ duration: 0.8, delay: 0.4 }}
                                                        className="text-2xl md:text-3xl mb-8 text-gray-300 font-light flex items-center justify-center gap-4"
                                                >
                                                        <span>Let's Evolve</span>
                                                        <motion.span
                                                                animate={{
                                                                        rotate: [0, 360],
                                                                        scale: [1, 1.2, 1],
                                                                        color: ["#a855f7", "#ec4899", "#06b6d4", "#a855f7"],
                                                                }}
                                                                transition={{
                                                                        duration: 4,
                                                                        repeat: Number.POSITIVE_INFINITY,
                                                                        ease: "easeInOut",
                                                                }}
                                                                className="text-4xl font-bold"
                                                        >
                                                                &
                                                        </motion.span>
                                                        <span>Revolve</span>
                                                </motion.p>

                                                <motion.p
                                                        initial={{ opacity: 0, y: 30 }}
                                                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                                        transition={{ duration: 0.8, delay: 0.6 }}
                                                        className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed"
                                                >
                                                        Specializing in <strong>startup digital marketing</strong> and <strong>affordable SEO services</strong>, we help early-stage companies establish their online presence. Our <strong>remote marketing consultants</strong> deliver <strong>LinkedIn marketing packages</strong> and <strong>cloud engineering solutions</strong> tailored for bootstrap budgets.
                                                </motion.p>

                                                <motion.div
                                                        initial={{ opacity: 0, y: 30 }}
                                                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                                        transition={{ duration: 0.8, delay: 0.8 }}
                                                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                                                >
                                                        <Button
                                                                size="lg"
                                                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                                                                onClick={() => scrollToSection(aboutRef)}
                                                        >
                                                                Discover More <ArrowRight className="ml-2 w-5 h-5" />
                                                        </Button>
                                                        <Button
                                                                variant="outline"
                                                                size="lg"
                                                                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg rounded-full backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300"
                                                                onClick={() => scrollToSection(contactRef)}
                                                        >
                                                                Get Started
                                                        </Button>
                                                </motion.div>

                                                <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={heroInView ? { opacity: 1 } : {}}
                                                        transition={{ duration: 1, delay: 1.2 }}
                                                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                                                >
                                                        <ChevronDown className="w-8 h-8 animate-bounce text-purple-400" />
                                                </motion.div>
                                        </div>
                                </section>

                                {/* About Section */}
                                <section ref={aboutRef} className="py-20 relative">
                                        <div className="container mx-auto px-6">
                                                <motion.div
                                                        initial={{ opacity: 0, y: 50 }}
                                                        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                                                        transition={{ duration: 0.8 }}
                                                        className="text-center mb-16"
                                                >
                                                        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                                About AnantaChakra
                                                        </h2>
                                                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                                                We deliver expert-led marketing consultant services and remote tech support solutions tailored for small business SEO services and digital growth. Our 100% remote, global team is on call 24/7. From strategy to execution, we engineer sustainable success.
                                                        </p>
                                                </motion.div>

                                                <div className="grid md:grid-cols-3 gap-8">
                                                        {[
                                                                { icon: Users, title: "Specialized Experts", desc: "Dedicated team of specialized professionals" },
                                                                { icon: Globe, title: "100% Remote", desc: "Distributed team working across timezones" },
                                                                { icon: Zap, title: "24/7 Support", desc: "Always available for our clients' needs" },
                                                        ].map((item, index) => (
                                                                <motion.div
                                                                        key={index}
                                                                        initial={{ opacity: 0, y: 50 }}
                                                                        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                                                                        transition={{ duration: 0.8, delay: index * 0.2 }}
                                                                        whileHover={{ scale: 1.05, rotateY: 5 }}
                                                                        className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
                                                                >
                                                                        <item.icon className="w-12 h-12 text-purple-400 mb-4" />
                                                                        <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                                                                        <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                                                                </motion.div>
                                                        ))}
                                                </div>
                                        </div>
                                </section>

                                {/* Services Section */}
                                <section ref={servicesRef} className="py-20">
                                        <div className="container mx-auto px-6">
                                                <motion.div
                                                        initial={{ opacity: 0, y: 50 }}
                                                        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                                                        transition={{ duration: 0.8 }}
                                                        className="text-center mb-16"
                                                >
                                                        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                                Our Services
                                                        </h2>
                                                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                                                Comprehensive digital solutions designed to elevate your business to new heights
                                                        </p>
                                                </motion.div>

                                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                                        {[
                                                                {
                                                                        icon: TrendingUp,
                                                                        title: "Digital Marketing",
                                                                        description:
                                                                                "Improve your online performance with our marketing consultant services. We offer custom digital marketing agency near me solutions for startups, combining SEO, PPC, and strategic planning to drive growth—even on a bootstrap budget.",
                                                                },
                                                                {
                                                                        icon: Award,
                                                                        title: "SEO Optimization",
                                                                        description:
                                                                                "Affordable SEO packages designed for early-stage companies. Our small business SEO services include comprehensive audits, keyword research, and on-page optimizations that deliver measurable results within 90 days. Perfect for startups needing cost-effective visibility boosts.",
                                                                },
                                                                {
                                                                        icon: Users,
                                                                        title: "Social Media Management",
                                                                        description:
                                                                                "Amplify your presence with learn LinkedIn marketing packages. From content scheduling to lead generation campaigns, we help you gain traction on LinkedIn—and other social channels—effectively and affordably.",
                                                                },
                                                                {
                                                                        icon: Shield,
                                                                        title: "Freelancing & Tech Support",
                                                                        description:
                                                                                "Hire our remote marketing talent and technical support professionals on demand. Ideal for startups needing flexible tech support and project expertise without full-time commitments.",
                                                                },
                                                                {
                                                                        icon: Globe,
                                                                        title: "Cloud Engineering",
                                                                        description:
                                                                                "While not directly a keyword target, we emphasize scalability: 'AWS and GCP cloud engineering for startups' supporting cost-efficient and secure infrastructure growth.",
                                                                },
                                                                {
                                                                        icon: Star,
                                                                        title: "International Business Scaling",
                                                                        description:
                                                                                "Global expansion support with localization, we also partner with the international brands and franchises to establish their sales and market their business in India",
                                                                },
                                                        ].map((service, index) => (
                                                                <motion.div
                                                                        key={index}
                                                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                                                        animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                                                                        transition={{ duration: 0.8, delay: index * 0.1 }}
                                                                        whileHover={{ scale: 1.05, rotateX: 5 }}
                                                                        className="group"
                                                                >
                                                                        <Card className="backdrop-blur-md bg-white/5 border-white/10 hover:border-purple-400/50 transition-all duration-300 h-full">
                                                                                <CardContent className="p-8">
                                                                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                                                                                <service.icon className="w-8 h-8 text-white" />
                                                                                        </div>
                                                                                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                                                                        <p className="text-gray-300 leading-relaxed">
                                                                                                {service.description}
                                                                                        </p>
                                                                                </CardContent>
                                                                        </Card>
                                                                </motion.div>
                                                        ))}
                                                </div>

                                        </div>
                                </section>

                                {/* Contact Section */}
                                <section ref={contactRef} className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
                                        <div className="container mx-auto px-6">
                                                <motion.div
                                                        initial={{ opacity: 0, y: 50 }}
                                                        animate={contactInView ? { opacity: 1, y: 0 } : {}}
                                                        transition={{ duration: 0.8 }}
                                                        className="text-center mb-16"
                                                >
                                                        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                                Let's Evolve Together
                                                        </h2>
                                                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                                                Ready to transform your business? Get in touch with us today.
                                                        </p>
                                                </motion.div>

                                                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                                                        <motion.div
                                                                initial={{ opacity: 0, x: -50 }}
                                                                animate={contactInView ? { opacity: 1, x: 0 } : {}}
                                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                                className="space-y-8"
                                                        >
                                                                <div className="flex items-center space-x-4">
                                                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                                                                <Mail className="w-6 h-6 text-white" />
                                                                        </div>
                                                                        <div>
                                                                                <h3 className="text-xl font-bold text-white">Email</h3>
                                                                                <p className="text-gray-300">support@anantachakra.tech</p>
                                                                        </div>
                                                                </div>
                                                                <div className="flex items-center space-x-4">
                                                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                                                                <MapPin className="w-6 h-6 text-white" />
                                                                        </div>
                                                                        <div>
                                                                                <h3 className="text-xl font-bold text-white">Location</h3>
                                                                                <p className="text-gray-300">India</p>
                                                                        </div>
                                                                </div>
                                                        </motion.div>

                                                        <motion.div
                                                                initial={{ opacity: 0, x: 50 }}
                                                                animate={contactInView ? { opacity: 1, x: 0 } : {}}
                                                                transition={{ duration: 0.8, delay: 0.4 }}
                                                                className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10"
                                                        >
                                                                <form action={handleSubmit} className="space-y-6">
                                                                        <div className="grid md:grid-cols-2 gap-4">
                                                                                <Input
                                                                                        name="name"
                                                                                        placeholder="Your Name"
                                                                                        required
                                                                                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                                                                                />
                                                                                <Input
                                                                                        name="email"
                                                                                        placeholder="Your Email"
                                                                                        type="email"
                                                                                        required
                                                                                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                                                                                />
                                                                        </div>
                                                                        <Input
                                                                                name="subject"
                                                                                placeholder="Subject"
                                                                                required
                                                                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                                                                        />
                                                                        <Textarea
                                                                                name="message"
                                                                                placeholder="Your Message"
                                                                                rows={5}
                                                                                required
                                                                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                                                                        />
                                                                        <Button
                                                                                type="submit"
                                                                                disabled={formStatus === "sending"}
                                                                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-full shadow-2xl shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                                                        >
                                                                                {formStatus === "idle" && (
                                                                                        <>
                                                                                                Send Message <ArrowRight className="ml-2 w-5 h-5" />
                                                                                        </>
                                                                                )}
                                                                                {formStatus === "sending" && (
                                                                                        <div className="flex items-center justify-center">
                                                                                                <motion.div
                                                                                                        className="flex space-x-2"
                                                                                                        initial={{ opacity: 0 }}
                                                                                                        animate={{ opacity: 1 }}
                                                                                                        transition={{ duration: 0.3 }}
                                                                                                >
                                                                                                        {[...Array(3)].map((_, i) => (
                                                                                                                <motion.div
                                                                                                                        key={i}
                                                                                                                        className="w-2 h-2 bg-white rounded-full"
                                                                                                                        animate={{
                                                                                                                                y: [0, -10, 0],
                                                                                                                                opacity: [0.6, 1, 0.6],
                                                                                                                        }}
                                                                                                                        transition={{
                                                                                                                                duration: 1.2,
                                                                                                                                repeat: Infinity,
                                                                                                                                delay: i * 0.2,
                                                                                                                        }}
                                                                                                                />
                                                                                                        ))}
                                                                                                </motion.div>
                                                                                                <span className="ml-3">Sending...</span>
                                                                                        </div>
                                                                                )}
                                                                                {formStatus === "success" && (
                                                                                        <motion.div
                                                                                                initial={{ scale: 0 }}
                                                                                                animate={{ scale: 1 }}
                                                                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                                                                className="flex items-center justify-center"
                                                                                        >
                                                                                                <motion.svg
                                                                                                        className="w-6 h-6 mr-2"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        initial={{ pathLength: 0 }}
                                                                                                        animate={{ pathLength: 1 }}
                                                                                                        transition={{ duration: 0.5 }}
                                                                                                >
                                                                                                        <motion.path
                                                                                                                d="M20 6L9 17l-5-5"
                                                                                                                fill="none"
                                                                                                                stroke="#10b981"
                                                                                                                strokeWidth="3"
                                                                                                                strokeLinecap="round"
                                                                                                                strokeLinejoin="round"
                                                                                                        />
                                                                                                </motion.svg>
                                                                                                Message Sent!
                                                                                        </motion.div>
                                                                                )}
                                                                                {formStatus === "error" && (
                                                                                        <>
                                                                                                <motion.div
                                                                                                        initial={{ scale: 0 }}
                                                                                                        animate={{ scale: 1 }}
                                                                                                        transition={{ type: "spring" }}
                                                                                                        className="flex items-center"
                                                                                                >
                                                                                                        <svg
                                                                                                                className="w-6 h-6 mr-2"
                                                                                                                fill="none"
                                                                                                                stroke="currentColor"
                                                                                                                viewBox="0 0 24 24"
                                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                                <path
                                                                                                                        strokeLinecap="round"
                                                                                                                        strokeLinejoin="round"
                                                                                                                        strokeWidth="2"
                                                                                                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                                                                ></path>
                                                                                                        </svg>
                                                                                                        Error - Try Again
                                                                                                </motion.div>
                                                                                        </>
                                                                                )}
                                                                        </Button>
                                                                </form>
                                                        </motion.div>
                                                </div>
                                        </div>
                                </section>

                                {/* Footer */}
                                <footer className="py-12 bg-black/50 backdrop-blur-md border-t border-white/10">
                                        <div className="container mx-auto px-6 text-center">
                                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                                        <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                                AnantaChakra
                                                        </div>
                                                        <p className="text-gray-400 mb-6">Let's Evolve & Revolve</p>
                                                        <p className="text-gray-500 text-sm">
                                                                © {new Date().getFullYear()} AnantaChakra. All rights reserved. Built with passion and innovation.
                                                        </p>
                                                </motion.div>
                                        </div>
                                </footer>
                        </div>
                </>
        )
}