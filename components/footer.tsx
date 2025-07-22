"use client"

import { motion } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ExternalLink,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Integrations", href: "/integrations" },
        { name: "API Docs", href: "/docs" },
        { name: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "For Coaches", href: "/coaches" },
        { name: "For Marketers", href: "/marketers" },
        { name: "For Local Business", href: "/local-business" },
        { name: "For Agencies", href: "/agencies" },
        { name: "Chamber Partners", href: "/chambers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Help Center", href: "/help" },
        { name: "Community", href: "/community" },
        { name: "Templates", href: "/templates" },
        { name: "Case Studies", href: "/case-studies" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" },
        { name: "Partners", href: "/partners" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/rebusai", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/rebusai", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/rebusai", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/rebusai", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/rebusai", label: "YouTube" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <img src="/logo-rebus.webp" alt="RebusAI" className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold">RebusAI</span>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Building the infrastructure for the next era of local commerce. Empowering businesses with AI-powered
                tools and Chamber partnerships.
              </p>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  San Francisco, CA
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-4567
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@rebusai.com
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-12 mt-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Get the latest updates on new features, Chamber partnerships, and success stories.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
              />
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 RebusAI. All rights reserved. |
              <Link href="/privacy" className="hover:text-white ml-1">
                Privacy Policy
              </Link>{" "}
              |
              <Link href="/terms" className="hover:text-white ml-1">
                Terms of Service
              </Link>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
