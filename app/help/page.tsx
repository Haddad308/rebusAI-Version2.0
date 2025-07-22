"use client"

import { motion } from "framer-motion"
import { Search, Book, MessageCircle, Phone, Mail, ArrowRight, HelpCircle, Lightbulb, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function HelpPage() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics and set up your account",
      icon: Lightbulb,
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
      articles: 12,
    },
    {
      title: "API Documentation",
      description: "Complete guide to our API endpoints",
      icon: Book,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      articles: 24,
    },
    {
      title: "Troubleshooting",
      description: "Common issues and their solutions",
      icon: HelpCircle,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      articles: 18,
    },
    {
      title: "Best Practices",
      description: "Tips to get the most out of RebusAI",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      articles: 15,
    },
  ]

  const popularArticles = [
    {
      title: "How to Get Started with RebusAI",
      category: "Getting Started",
      readTime: "5 min read",
      views: "12.5k views",
    },
    {
      title: "API Authentication Guide",
      category: "API Documentation",
      readTime: "8 min read",
      views: "8.2k views",
    },
    {
      title: "Troubleshooting Common Errors",
      category: "Troubleshooting",
      readTime: "6 min read",
      views: "9.1k views",
    },
    {
      title: "Optimizing AI Query Performance",
      category: "Best Practices",
      readTime: "10 min read",
      views: "6.8k views",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center mb-6">
              <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-blue-500 mr-4"></div>
              <span className="text-gray-600 font-medium tracking-wide">HELP & SUPPORT</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                Help Center
              </span>
              <br />& Support 🆘
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to your questions, explore our documentation, and get the help you need to succeed with
              RebusAI.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for help articles, guides, and more..."
                  className="pl-12 pr-4 py-4 text-lg bg-white border-2 border-gray-200 focus:border-purple-500 rounded-2xl shadow-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-xl">
                  Search
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">Find the help you need organized by topic</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card
                  className={`bg-gradient-to-br ${category.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div
                      className={`text-sm font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    >
                      {category.articles} articles
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Popular Articles
            </h2>
            <p className="text-xl text-gray-600">Most viewed help articles this month</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="group cursor-pointer"
              >
                <Card className="bg-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </div>
                      <ArrowRight className="w-5 h-5 text-purple-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{article.readTime}</span>
                      <span>{article.views}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600">Our support team is here to help you succeed</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Live Chat",
                description: "Chat with our support team in real-time",
                icon: MessageCircle,
                color: "from-green-500 to-teal-500",
                bgColor: "from-green-50 to-teal-50",
                action: "Start Chat",
                availability: "Available 24/7",
              },
              {
                title: "Phone Support",
                description: "Speak directly with our experts",
                icon: Phone,
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
                action: "Call Now",
                availability: "Mon-Fri 9AM-6PM EST",
              },
              {
                title: "Email Support",
                description: "Send us a detailed message",
                icon: Mail,
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
                action: "Send Email",
                availability: "Response within 2 hours",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card
                  className={`bg-gradient-to-br ${contact.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full`}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${contact.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <contact.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{contact.title}</h3>
                    <p className="text-gray-600 mb-4">{contact.description}</p>
                    <p className="text-sm text-gray-500 mb-6">{contact.availability}</p>
                    <Button
                      className={`bg-gradient-to-r ${contact.color} hover:opacity-90 text-white font-semibold w-full`}
                    >
                      {contact.action}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Connect with other RebusAI users, share tips, and get help from the community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-4"
              >
                Join Discord Community
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-4 bg-transparent"
              >
                Browse Forum
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
