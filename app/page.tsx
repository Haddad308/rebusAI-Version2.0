"use client"

import React from "react"
import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  MapPin,
  Users,
  Building2,
  Calendar,
  Share2,
  BarChart3,
  ArrowRight,
  Star,
  CheckCircle,
  Globe,
  Target,
  Rocket,
  DollarSign,
  Network,
  Award,
  Play,
  Phone,
  Plus,
  Minus,
  Brain,
  TrendingUp,
  MessageCircle,
  Video,
  Mail,
  ShoppingCart,
  FileText,
  Search,
  Crown,
  Clock,
  ChevronRight,
  BookOpen,
  GraduationCap,
  Briefcase,
  Megaphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [activePersona, setActivePersona] = useState(0)
  const [showPromoModal, setShowPromoModal] = useState(false)
  const { scrollYProgress } = useScroll()

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  // Hero Section Data
  const heroStats = [
    { icon: Building2, number: "1,500+", label: "Chamber Partners", color: "from-blue-500 to-cyan-500" },
    { icon: DollarSign, number: "$80K+", label: "Avg. Household Income", color: "from-green-500 to-teal-500" },
    { icon: MapPin, number: "50+", label: "Markets Launching", color: "from-purple-500 to-pink-500" },
    { icon: Users, number: "10K+", label: "Active Users", color: "from-orange-500 to-red-500" },
  ]

  // Problem/Solution Data
  const problemSolutions = [
    {
      problem: "Managing 10+ separate tools",
      solution: "One unified platform",
      icon: Network,
      color: "from-purple-500 to-pink-500",
    },
    {
      problem: "Generic affiliate programs",
      solution: "Community-powered referrals",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      problem: "Competing globally",
      solution: "Local market dominance",
      icon: MapPin,
      color: "from-green-500 to-teal-500",
    },
    {
      problem: "High marketing costs",
      solution: "Chamber co-promotion",
      icon: Megaphone,
      color: "from-orange-500 to-red-500",
    },
  ]

  // Build → Market → Scale → Track Framework
  const frameworkSteps = [
    {
      step: "BUILD",
      title: "AI-Powered Creation",
      description: "Build websites, funnels, courses, and booking systems with AI assistance",
      features: ["AI Website Builder", "Course Creator", "Booking System", "Email Automation"],
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "MARKET",
      title: "Chamber Promotion",
      description: "Get featured in local Chamber marketplaces with built-in credibility",
      features: ["Chamber Partnership", "Local SEO", "Community Trust", "Targeted Audience"],
      icon: Megaphone,
      color: "from-green-500 to-teal-500",
    },
    {
      step: "SCALE",
      title: "Affiliate Engine",
      description: "Activate community-powered referrals through local networks",
      features: ["Local Affiliates", "Referral Tracking", "Commission Management", "Network Effects"],
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "TRACK",
      title: "Unified Analytics",
      description: "Monitor performance across all channels from one dashboard",
      features: ["Real-time Analytics", "ROI Tracking", "Customer Insights", "Growth Metrics"],
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
    },
  ]

  // User Personas for Interactive Showcase
  const personas = [
    {
      title: "Coach",
      name: "Sarah - Life Coach",
      description: "Builds courses, books clients, manages community",
      features: [
        "Course creation with certificates",
        "1-on-1 booking system",
        "Client management CRM",
        "Community space",
        "Email automation",
      ],
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      image: "/placeholder.svg?height=300&width=400&text=Coach+Dashboard",
    },
    {
      title: "Digital Marketer",
      name: "Mike - Marketing Agency",
      description: "Creates funnels, manages campaigns, tracks ROI",
      features: [
        "AI funnel builder",
        "Multi-client dashboard",
        "Campaign analytics",
        "Lead generation tools",
        "White-label solutions",
      ],
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      image: "/placeholder.svg?height=300&width=400&text=Marketer+Dashboard",
    },
    {
      title: "Local Business",
      name: "Emma - Wellness Studio",
      description: "Manages bookings, events, local marketing",
      features: [
        "Appointment scheduling",
        "Event management",
        "Local marketplace listing",
        "Customer reviews",
        "Payment processing",
      ],
      icon: Building2,
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
      image: "/placeholder.svg?height=300&width=400&text=Business+Dashboard",
    },
    {
      title: "Agency",
      name: "David - Done-for-You Services",
      description: "Packages services, recruits affiliates, scales operations",
      features: [
        "Service packaging tools",
        "Affiliate recruitment",
        "Multi-location management",
        "Revenue sharing",
        "Performance tracking",
      ],
      icon: Network,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      image: "/placeholder.svg?height=300&width=400&text=Agency+Dashboard",
    },
  ]

  // All Features List
  const allFeatures = [
    { name: "AI Website Builder", icon: Globe, category: "Build" },
    { name: "Course Creator", icon: BookOpen, category: "Build" },
    { name: "Appointment Booking", icon: Calendar, category: "Build" },
    { name: "Video Conferencing", icon: Video, category: "Build" },
    { name: "CRM System", icon: Users, category: "Build" },
    { name: "Email Automation", icon: Mail, category: "Market" },
    { name: "Event Management", icon: Calendar, category: "Market" },
    { name: "Survey Builder", icon: FileText, category: "Market" },
    { name: "Online Store", icon: ShoppingCart, category: "Market" },
    { name: "Affiliate Management", icon: Share2, category: "Scale" },
    { name: "Community Spaces", icon: MessageCircle, category: "Scale" },
    { name: "Analytics Dashboard", icon: BarChart3, category: "Track" },
    { name: "CMS with Blog", icon: FileText, category: "Track" },
    { name: "Full-Text Search", icon: Search, category: "Track" },
  ]

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Life Coach",
      location: "Danville, CA",
      content:
        "RebusAI replaced 8 different tools I was using. The Chamber partnership gave me instant credibility, and I've booked 40% more clients through local referrals.",
      avatar: "/placeholder.svg?height=60&width=60&text=SM",
      rating: 5,
      results: "40% more clients",
      savings: "$400/month saved",
    },
    {
      name: "Mike Chen",
      role: "Digital Marketing Agency",
      location: "Vista, CA",
      content:
        "The affiliate system is genius. Local businesses are referring each other, creating a network effect. We've onboarded 25 new clients in 3 months.",
      avatar: "/placeholder.svg?height=60&width=60&text=MC",
      rating: 5,
      results: "25 new clients",
      savings: "300% ROI increase",
    },
    {
      name: "Emma Rodriguez",
      role: "Wellness Studio Owner",
      location: "San Ramon, CA",
      content:
        "Being featured in our Chamber marketplace has been incredible. The booking system handles everything, and the community referrals keep growing.",
      avatar: "/placeholder.svg?height=60&width=60&text=ER",
      rating: 5,
      results: "200% booking increase",
      savings: "$600/month saved",
    },
  ]

  // FAQ Data
  const faqs = [
    {
      question: "How does the Chamber of Commerce partnership work?",
      answer:
        "We partner directly with local Chambers to create co-branded marketplaces. Your business gets featured in your local Chamber's marketplace, giving you instant credibility and access to their member network. The Chamber promotes the marketplace to their community, driving high-quality local traffic to your storefront.",
    },
    {
      question: "What makes RebusAI different from other all-in-one platforms?",
      answer:
        "RebusAI is the only platform that combines comprehensive business tools with hyper-local marketing through Chamber partnerships. Instead of competing globally, you dominate locally. Our community-powered affiliate system leverages trusted local networks like schools, gyms, and coworking spaces for authentic referrals.",
    },
    {
      question: "Can I really replace 10+ tools with RebusAI?",
      answer:
        "Yes! RebusAI includes: website builder, course creator, booking system, CRM, email automation, event management, online store, affiliate management, analytics, community spaces, blog/CMS, and more. Most users save $300-500/month by consolidating their tech stack.",
    },
    {
      question: "How does the affiliate system work?",
      answer:
        "Every storefront gets an 'Affiliate' button that allows local residents, businesses, and organizations to share your offerings and earn commissions. This creates a network effect where your business gets promoted through schools, yoga studios, co-working spaces, and neighborhood groups organically.",
    },
    {
      question: "What kind of support and training do you provide?",
      answer:
        "We provide comprehensive onboarding, video tutorials, live training sessions, and done-for-you marketing templates. Our support team is available via chat, email, and phone. Plus, you get access to our community of successful local business owners.",
    },
    {
      question: "When will my city be available?",
      answer:
        "We're actively expanding to new markets based on Chamber partnerships and community demand. Currently launching in 50+ markets across the U.S. and Canada. Join our waitlist to be notified when your city becomes available and get early access pricing.",
    },
  ]

  // Pricing Plans
  const pricingPlans = [
    {
      name: "Starter",
      price: "$9.99",
      period: "/month",
      description: "Perfect for solopreneurs getting started",
      features: [
        "AI Website Builder",
        "Basic Course Creator",
        "Appointment Booking",
        "Email Automation (1,000 contacts)",
        "Chamber Marketplace Listing",
        "Basic Analytics",
      ],
      popular: false,
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$29.99",
      period: "/month",
      description: "For growing coaches and consultants",
      features: [
        "Everything in Starter",
        "Advanced Course Creator with Certificates",
        "Video Conferencing",
        "CRM System",
        "Email Automation (10,000 contacts)",
        "Affiliate Management",
        "Community Spaces",
        "Priority Support",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      cta: "Most Popular",
    },
    {
      name: "Agency",
      price: "$99.99",
      period: "/month",
      description: "For agencies and multi-location businesses",
      features: [
        "Everything in Professional",
        "White-label Solutions",
        "Multi-client Management",
        "Advanced Analytics",
        "Custom Integrations",
        "Dedicated Account Manager",
        "Done-for-You Marketing",
        "Unlimited Everything",
      ],
      popular: false,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      cta: "Scale Your Agency",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-purple-50/30 to-pink-100/50"></div>

          {/* Animated Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-300/40 to-purple-300/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-300/40 to-blue-300/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse delay-500"></div>

          {/* Floating Elements */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-blue-200/50 shadow-lg">
                <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">
                  🚀 Launching in 50+ Markets - 1,500+ Chamber Partners
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 style={{ y: textY }} className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
              <span className="block bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                The Best All-in-One
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                AI Affiliate Platform
              </span>
              <motion.span
                className="block text-gray-700 text-3xl md:text-5xl lg:text-6xl font-light mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                to Scale Your Business
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Replace 10+ tools with one platform. Get featured in Chamber marketplaces. Activate community-powered
              referrals. Starting at <span className="text-blue-600 font-semibold">$9.99/month</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg px-12 py-6 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                onClick={() => setShowPromoModal(true)}
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 font-semibold text-lg px-12 py-6 transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <Play className="mr-2 w-6 h-6" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Social Proof Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <Card className="bg-white/80 backdrop-blur-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <CardContent className="text-center p-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose RebusAI - Problem/Solution */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-100 border border-red-200 mb-8">
              <Target className="w-5 h-5 mr-2 text-red-600" />
              <span className="text-sm font-medium text-red-700">THE PROBLEM</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Why Local Businesses Struggle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most businesses juggle expensive tools, compete globally, and lack local credibility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {problemSolutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-red-50 rounded-2xl p-6 mb-6 border border-red-100">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-red-700 mb-2">Problem</h3>
                  <p className="text-red-600">{item.problem}</p>
                </div>

                <div className="flex justify-center mb-4">
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </div>

                <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-green-700 mb-2">Solution</h3>
                  <p className="text-green-600">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 border border-green-200 mb-8">
              <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
              <span className="text-sm font-medium text-green-700">THE SOLUTION</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              RebusAI: Your Local Commerce Advantage
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  icon: Crown,
                  title: "All-in-One Solution",
                  description: "Replace 10+ tools with one platform. Save $300-500/month while getting more features.",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Brain,
                  title: "AI-Powered Automation",
                  description:
                    "Build websites, create courses, and automate marketing with AI assistance. No technical skills needed.",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Network,
                  title: "Community Affiliate Engine",
                  description:
                    "Leverage local networks for authentic referrals. Schools, gyms, and businesses promote each other.",
                  color: "from-green-500 to-teal-500",
                },
              ].map((prop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-500 border border-gray-100">
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${prop.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                      >
                        <prop.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{prop.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{prop.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Build → Market → Scale → Track Framework */}
      <section className="py-32 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 border border-blue-200 mb-8">
              <Rocket className="w-5 h-5 mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">SUCCESS FRAMEWORK</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Build → Market → Scale → Track
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step framework for local business success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6 z-10">
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {index + 1}
                  </div>
                </div>

                <Card className="h-full hover:shadow-xl transition-all duration-500 border border-gray-100 pt-8">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="mb-4">
                      <span
                        className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                      >
                        {step.step}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1">{step.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < frameworkSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Feature Showcase with Personas */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-purple-100 border border-purple-200 mb-8">
              <Users className="w-5 h-5 mr-2 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">INTERACTIVE SHOWCASE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              See How It Works for You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore how different professionals use RebusAI to grow their business
            </p>
          </motion.div>

          {/* Persona Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {personas.map((persona, index) => (
              <button
                key={index}
                onClick={() => setActivePersona(index)}
                className={`flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activePersona === index
                    ? `bg-gradient-to-r ${persona.color} text-white shadow-lg`
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <persona.icon className="w-5 h-5 mr-2" />
                {persona.title}
              </button>
            ))}
          </div>

          {/* Active Persona Content */}
          <motion.div
            key={activePersona}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Persona Info */}
            <div>
              <div className="flex items-center mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${personas[activePersona].color} flex items-center justify-center mr-4 shadow-lg`}
                >
                  {React.createElement(personas[activePersona].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{personas[activePersona].name}</h3>
                  <p className="text-gray-600">{personas[activePersona].description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features Used:</h4>
                {personas[activePersona].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  className={`bg-gradient-to-r ${personas[activePersona].color} text-white font-semibold px-8 py-3 hover:opacity-90 transition-all duration-300`}
                >
                  Try {personas[activePersona].title} Features
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right: Dashboard Preview */}
            <div className="relative">
              <div
                className={`bg-gradient-to-br ${personas[activePersona].bgColor} rounded-3xl p-8 border border-gray-100 shadow-2xl`}
              >
                <img
                  src={personas[activePersona].image || "/placeholder.svg"}
                  alt={`${personas[activePersona].title} Dashboard`}
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {personas[activePersona].title} Dashboard
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Customized interface designed specifically for {personas[activePersona].title.toLowerCase()}s
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* All Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">All Features Included</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {allFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-all duration-300 group-hover:shadow-lg">
                    <feature.icon className="w-8 h-8 text-gray-600 mx-auto mb-2 group-hover:text-blue-500 transition-colors" />
                    <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900">{feature.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-100 border border-yellow-200 mb-8">
              <Award className="w-5 h-5 mr-2 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-700">SUCCESS STORIES</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Real Results from Real Users
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how local businesses are thriving with RebusAI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-md border border-gray-100 hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex text-yellow-400 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed text-lg">"{testimonial.content}"</p>
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-blue-600 font-semibold">{testimonial.location}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-green-600">{testimonial.results}</div>
                        <div className="text-xs text-green-700">Growth</div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-blue-600">{testimonial.savings}</div>
                        <div className="text-xs text-blue-700">Savings</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 border border-green-200 mb-8">
              <DollarSign className="w-5 h-5 mr-2 text-green-600" />
              <span className="text-sm font-medium text-green-700">TRANSPARENT PRICING</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Simple, Affordable Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Replace expensive tools with one affordable platform. Save hundreds every month.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                <Card
                  className={`bg-gradient-to-br ${plan.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full ${plan.popular ? "ring-4 ring-purple-400 ring-opacity-50" : ""}`}
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span
                          className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                        >
                          {plan.price}
                        </span>
                        <span className="text-gray-500 ml-1">{plan.period}</span>
                      </div>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold shadow-lg"
                          : `bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold`
                      } py-3`}
                      onClick={() => setShowPromoModal(true)}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              💰 <strong>Save $300-500/month</strong> by replacing multiple tools with RebusAI
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>✅ 14-day free trial</span>
              <span>✅ No setup fees</span>
              <span>✅ Cancel anytime</span>
              <span>✅ 24/7 support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-br from-purple-50/50 to-blue-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 border border-blue-200 mb-8">
              <Globe className="w-5 h-5 mr-2 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">FREQUENTLY ASKED</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Got Questions?
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about RebusAI</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-white/80 backdrop-blur-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {faq.question}
                      </h3>
                      <motion.div animate={{ rotate: openFAQ === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        {openFAQ === index ? (
                          <Minus className="w-5 h-5 text-blue-500" />
                        ) : (
                          <Plus className="w-5 h-5 text-blue-500" />
                        )}
                      </motion.div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: openFAQ === index ? "auto" : 0,
                        opacity: openFAQ === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Offer Section */}
      <section className="py-32 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-6xl mb-8 animate-bounce">🎉</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Limited Time Offer!
              <br />
              <span className="text-yellow-200">50% Off First 3 Months</span>
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join the local commerce revolution. Get featured in Chamber marketplaces and start building your
              community-powered business today.
            </p>

            {/* Countdown Timer */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 max-w-md mx-auto mb-8">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-semibold">Offer Ends In:</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                {[
                  { value: "07", label: "Days" },
                  { value: "14", label: "Hours" },
                  { value: "35", label: "Mins" },
                  { value: "42", label: "Secs" },
                ].map((time, index) => (
                  <div key={index} className="bg-white/20 rounded-lg p-2">
                    <div className="text-2xl font-bold">{time.value}</div>
                    <div className="text-xs opacity-80">{time.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold text-xl px-12 py-6 shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setShowPromoModal(true)}
              >
                🎁 Claim 50% Discount
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-xl px-12 py-6 bg-transparent transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="mr-2 w-6 h-6" />
                Book Demo Call
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">✅ No commitment • ✅ Cancel anytime • ✅ Full feature access</p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-6xl mb-8 animate-bounce">🚀</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Dominate
              <br />
              <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                Your Local Market?
              </span>
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Join thousands of local businesses already using RebusAI to build, market, scale, and track their success
              in their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-xl px-12 py-6 shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setShowPromoModal(true)}
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-xl px-12 py-6 bg-transparent transition-all duration-300 transform hover:scale-105"
              >
                <Play className="mr-2 w-6 h-6" />
                Watch Demo
              </Button>
            </div>
            <p className="text-sm mt-8 opacity-75">
              ✅ First-mover advantage • ✅ Chamber partnership • ✅ Community trust
            </p>
          </motion.div>
        </div>
      </section>

      {/* Promo Modal */}
      {showPromoModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Get 50% Off!</h3>
              <p className="text-gray-600 mb-6">
                Start your free trial and get 50% off your first 3 months. No commitment required.
              </p>

              <div className="space-y-4 mb-6">
                <Input type="email" placeholder="Enter your email" className="w-full" />
                <Input type="tel" placeholder="Phone number (optional)" className="w-full" />
              </div>

              <div className="flex gap-3">
                <Button
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold"
                  onClick={() => setShowPromoModal(false)}
                >
                  Claim Offer
                </Button>
                <Button variant="outline" onClick={() => setShowPromoModal(false)}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
