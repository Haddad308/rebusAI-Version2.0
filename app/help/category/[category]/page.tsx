"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Eye, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"

export default function HelpCategoryPage() {
  const router = useRouter()
  const params = useParams()
  const [category, setCategory] = useState<any>(null)
  const [articles, setArticles] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadCategoryData()
  }, [params.category])

  const loadCategoryData = async () => {
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const categoryData = getCategoryData(params.category as string)
      setCategory(categoryData)
      setArticles(categoryData?.articles || [])
      setIsLoading(false)
    }, 500)
  }

  const getCategoryData = (categoryId: string) => {
    const categories: Record<string, any> = {
      "getting-started": {
        id: "getting-started",
        title: "Getting Started",
        description: "Learn the basics and set up your account with RebusAI",
        icon: "🚀",
        color: "from-green-500 to-teal-500",
        totalArticles: 12,
        articles: [
          {
            id: "setup-account",
            title: "Setting Up Your RebusAI Account",
            excerpt: "Step-by-step guide to creating and configuring your RebusAI account for the first time.",
            readTime: "3 min read",
            views: "15.2k views",
            difficulty: "Beginner",
            lastUpdated: "2 days ago"
          },
          {
            id: "first-api-call",
            title: "Making Your First API Call",
            excerpt: "Learn how to make your first successful API call to RebusAI and understand the response format.",
            readTime: "5 min read",
            views: "12.5k views",
            difficulty: "Beginner",
            lastUpdated: "1 week ago"
          },
          {
            id: "dashboard-overview",
            title: "Dashboard Overview",
            excerpt: "Navigate the RebusAI dashboard and understand all the available features and tools.",
            readTime: "4 min read",
            views: "8.7k views",
            difficulty: "Beginner",
            lastUpdated: "3 days ago"
          },
          {
            id: "api-keys",
            title: "Understanding API Keys",
            excerpt: "Learn about API keys, how to generate them, and best practices for keeping them secure.",
            readTime: "6 min read",
            views: "9.1k views",
            difficulty: "Beginner",
            lastUpdated: "5 days ago"
          }
        ]
      },
      "api-documentation": {
        id: "api-documentation",
        title: "API Documentation",
        description: "Complete guide to our API endpoints and integration methods",
        icon: "📚",
        color: "from-blue-500 to-cyan-500",
        totalArticles: 24,
        articles: [
          {
            id: "authentication",
            title: "API Authentication",
            excerpt: "Complete guide to authenticating with the RebusAI API using various methods.",
            readTime: "8 min read",
            views: "8.2k views",
            difficulty: "Intermediate",
            lastUpdated: "1 day ago"
          },
          {
            id: "endpoints",
            title: "Available Endpoints",
            excerpt: "Comprehensive list of all available API endpoints with examples and parameters.",
            readTime: "12 min read",
            views: "6.4k views",
            difficulty: "Intermediate",
            lastUpdated: "4 days ago"
          },
          {
            id: "webhooks",
            title: "Setting Up Webhooks",
            excerpt: "Learn how to configure webhooks to receive real-time notifications from RebusAI.",
            readTime: "10 min read",
            views: "4.3k views",
            difficulty: "Advanced",
            lastUpdated: "1 week ago"
          }
        ]
      },
      "troubleshooting": {
        id: "troubleshooting",
        title: "Troubleshooting",
        description: "Common issues and their solutions to get you back on track",
        icon: "🔧",
        color: "from-orange-500 to-red-500",
        totalArticles: 18,
        articles: [
          {
            id: "common-errors",
            title: "Common API Errors",
            excerpt: "Troubleshoot the most frequent errors encountered when using the RebusAI API.",
            readTime: "6 min read",
            views: "9.1k views",
            difficulty: "Beginner",
            lastUpdated: "2 days ago"
          },
          {
            id: "rate-limits",
            title: "Rate Limit Issues",
            excerpt: "Understanding and handling rate limit errors in your API integrations.",
            readTime: "5 min read",
            views: "5.8k views",
            difficulty: "Intermediate",
            lastUpdated: "3 days ago"
          },
          {
            id: "timeout-errors",
            title: "Handling Timeout Errors",
            excerpt: "Best practices for dealing with timeout errors and improving request reliability.",
            readTime: "7 min read",
            views: "4.2k views",
            difficulty: "Intermediate",
            lastUpdated: "1 week ago"
          }
        ]
      },
      "best-practices": {
        id: "best-practices",
        title: "Best Practices",
        description: "Tips and recommendations to get the most out of RebusAI",
        icon: "⚡",
        color: "from-purple-500 to-pink-500",
        totalArticles: 15,
        articles: [
          {
            id: "optimization",
            title: "Optimizing API Performance",
            excerpt: "Learn techniques to optimize your API calls for better performance and efficiency.",
            readTime: "10 min read",
            views: "6.8k views",
            difficulty: "Intermediate",
            lastUpdated: "3 days ago"
          },
          {
            id: "security",
            title: "Security Best Practices",
            excerpt: "Essential security practices to protect your API keys and data when using RebusAI.",
            readTime: "8 min read",
            views: "7.2k views",
            difficulty: "Intermediate",
            lastUpdated: "5 days ago"
          },
          {
            id: "scaling",
            title: "Scaling Your Integration",
            excerpt: "Strategies for scaling your RebusAI integration as your application grows.",
            readTime: "12 min read",
            views: "3.9k views",
            difficulty: "Advanced",
            lastUpdated: "1 week ago"
          }
        ]
      }
    }

    return categories[categoryId] || null
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-700"
      case "Intermediate": return "bg-yellow-100 text-yellow-700"
      case "Advanced": return "bg-red-100 text-red-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading category...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-6">The requested help category could not be found.</p>
            <Link href="/help">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Help Center
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 pt-20">
      {/* Header */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/help" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Help Center
            </Link>
            
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {category.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{category.description}</p>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                {category.totalArticles} articles in this category
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="group cursor-pointer"
                onClick={() => router.push(`/help/article/${article.id}`)}
              >
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Badge className={getDifficultyColor(article.difficulty)}>
                          {article.difficulty}
                        </Badge>
                        <span className="text-sm text-gray-500">{article.lastUpdated}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-purple-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.views}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
