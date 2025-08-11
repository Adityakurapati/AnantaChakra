"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function CommonHeader() {
        const [isMenuOpen, setIsMenuOpen] = useState(false)

        const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

        return (
                <motion.nav
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
                >
                        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                                <Link href="/" className="flex items-center gap-3">
                                        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
                                                <img src="/favicon.png" alt="AnantaChakra" className="w-8 h-8" />
                                                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                        AnantaChakra
                                                </span>
                                        </motion.div>
                                </Link>

                                {/* Desktop Menu */}
                                <div className="hidden md:flex space-x-8">
                                        {[
                                                { name: "Home", href: "/" },
                                                { name: "Services", href: "/services" },
                                                { name: "About", href: "/#about" },
                                                { name: "Contact", href: "/#contact" },
                                        ].map((item, index) => (
                                                <motion.div
                                                        key={item.name}
                                                        initial={{ opacity: 0, y: -20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.1 + 0.5 }}
                                                >
                                                        <Link href={item.href} className="hover:text-purple-400 transition-colors duration-300 text-white">
                                                                {item.name}
                                                        </Link>
                                                </motion.div>
                                        ))}
                                </div>

                                {/* Mobile Menu Button */}
                                <button
                                        onClick={toggleMenu}
                                        className="md:hidden text-white hover:text-purple-400 transition-colors duration-300"
                                >
                                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </button>
                        </div>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                                <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="md:hidden backdrop-blur-md bg-black/40 border-t border-white/10"
                                >
                                        <div className="container mx-auto px-4 sm:px-6 py-4 space-y-4">
                                                {[
                                                        { name: "Home", href: "/" },
                                                        { name: "Services", href: "/services" },
                                                        { name: "About", href: "/#about" },
                                                        { name: "Contact", href: "/#contact" },
                                                ].map((item) => (
                                                        <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className="block text-white hover:text-purple-400 transition-colors duration-300 py-2"
                                                        >
                                                                {item.name}
                                                        </Link>
                                                ))}
                                        </div>
                                </motion.div>
                        )}
                </motion.nav>
        )
}
