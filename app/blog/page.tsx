"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, TrendingUp, Lightbulb, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of AI: 10 Predictions for 2024",
    excerpt:
      "Explore the groundbreaking AI trends that will reshape industries and transform how we work, live, and innovate in the coming year.",
    author: "Dr. Sarah Chen",
    date: "Dec 15, 2023",
    readTime: "8 min read",
    category: "AI Trends",
    image: "/placeholder.svg?height=400&width=600",
    gradient: "from-purple-500 to-pink-500",
  }

  const blogPosts = [
    {
      title: "How AI is Revolutionizing Healthcare",
      excerpt:
        "Discover how artificial intelligence is transforming patient care, drug discovery, and medical diagnostics.",
      author: "Dr. Michael Rodriguez",
      date: "Dec 12, 2023",
      readTime: "6 min read",
      category: "Healthcare",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Building Ethical AI Systems",
      excerpt: "Learn about the principles and practices for developing responsible AI that benefits everyone.",
      author: "Prof. Emily Johnson",
      date: "Dec 10, 2023",
      readTime: "7 min read",
      category: "Ethics",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "AI in Finance: Opportunities and Challenges",
      excerpt:
        "Explore how financial institutions are leveraging AI for fraud detection, trading, and customer service.",
      author: "James Wilson",
      date: "Dec 8, 2023",
      readTime: "5 min read",
      category: "Finance",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Natural Language Processing Breakthroughs",
      excerpt: "The latest advances in NLP that are making AI more conversational and human-like than ever.",
      author: "Dr. Alex Kim",
      date: "Dec 5, 2023",
      readTime: "9 min read",
      category: "NLP",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Computer Vision in Autonomous Vehicles",
      excerpt: "How AI-powered vision systems are making self-driving cars safer and more reliable.",
      author: "Maria Garcia",
      date: "Dec 3, 2023",
      readTime: "6 min read",
      category: "Computer Vision",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "The Rise of Generative AI",
      excerpt: "Understanding the creative potential and business applications of generative artificial intelligence.",
      author: "David Park",
      date: "Dec 1, 2023",
      readTime: "8 min read",
      category: "Generative AI",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-pink-500 to-purple-500",
    },
  ]

  const categories = [
    { name: "AI Trends", count: 12, color: "from-purple-500 to-pink-500", icon: TrendingUp },
    { name: "Technology", count: 8, color: "from-blue-500 to-cyan-500", icon: Lightbulb },
    { name: "Innovation", count: 6, color: "from-green-500 to-teal-500", icon: Rocket },
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
              <span className="text-gray-600 font-medium tracking-wide">INSIGHTS & INNOVATION</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                AI Blog
              </span>
              <br />& Resources 📚
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with the latest AI insights, trends, and breakthrough innovations from industry
              experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <Card
                  className={`bg-gradient-to-r ${category.color} border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <CardContent className="p-4 flex items-center space-x-3">
                    <category.icon className="w-5 h-5" />
                    <span className="font-semibold">{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{category.count}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Article
            </h2>

            <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${featuredPost.gradient} opacity-20`}></div>
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${featuredPost.gradient} text-white text-sm font-semibold`}
                    >
                      {featuredPost.category}
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900 hover:text-purple-600 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>

                    <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredPost.date}
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <Button
                      className={`bg-gradient-to-r ${featuredPost.gradient} hover:opacity-90 text-white font-semibold w-fit`}
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Latest Articles
            </h2>
            <p className="text-gray-600">Discover the latest insights and innovations in AI technology</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 h-full">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-tr ${post.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                      ></div>
                      <div
                        className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white text-xs font-semibold`}
                      >
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                          <ArrowRight className="w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
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
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-4"
            >
              Load More Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated! 📬</h2>
            <p className="text-xl mb-8 opacity-90">Get the latest AI insights delivered straight to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-6 py-3">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
