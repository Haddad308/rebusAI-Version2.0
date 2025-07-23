"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Clock, Eye, ThumbsUp, ThumbsDown, Share2, BookOpen, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"

export default function HelpArticlePage() {
  const router = useRouter()
  const params = useParams()
  const [article, setArticle] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isHelpful, setIsHelpful] = useState<boolean | null>(null)
  const [relatedArticles, setRelatedArticles] = useState<any[]>([])

  useEffect(() => {
    loadArticleData()
  }, [params.id])

  const loadArticleData = async () => {
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const articleData = getArticleData(params.id as string)
      setArticle(articleData)
      setRelatedArticles(getRelatedArticles(articleData?.category))
      setIsLoading(false)
    }, 500)
  }

  const getArticleData = (articleId: string) => {
    const articles: Record<string, any> = {
      "getting-started-guide": {
        id: "getting-started-guide",
        title: "How to Get Started with RebusAI",
        category: "Getting Started",
        difficulty: "Beginner",
        readTime: "5 min read",
        views: "12.5k views",
        lastUpdated: "2 days ago",
        author: "RebusAI Team",
        content: [
          {
            type: "text",
            content: "Welcome to RebusAI! This guide will help you get started with our AI platform and make your first successful API call."
          },
          {
            type: "heading",
            content: "Prerequisites"
          },
          {
            type: "list",
            items: [
              "A RebusAI account (sign up at rebusai.com)",
              "Basic knowledge of HTTP requests",
              "Your preferred programming language or API client"
            ]
          },
          {
            type: "heading",
            content: "Step 1: Create Your Account"
          },
          {
            type: "text",
            content: "First, you'll need to create a RebusAI account. Visit our website and click the 'Sign Up' button. You'll need to provide your email address and create a secure password."
          },
          {
            type: "code",
            language: "bash",
            content: "curl -X POST https://api.rebusai.com/auth/signup \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"email\": \"your@email.com\", \"password\": \"secure_password\"}'"
          },
          {
            type: "heading",
            content: "Step 2: Get Your API Key"
          },
          {
            type: "text",
            content: "Once your account is created, navigate to the API Keys section in your dashboard. Click 'Generate New Key' to create your first API key."
          },
          {
            type: "warning",
            content: "Keep your API key secure! Never expose it in client-side code or public repositories."
          },
          {
            type: "heading",
            content: "Step 3: Make Your First API Call"
          },
          {
            type: "text",
            content: "Now you're ready to make your first API call. Here's a simple example using curl:"
          },
          {
            type: "code",
            language: "bash",
            content: "curl -X POST https://api.rebusai.com/v1/chat/completions \\\n  -H \"Authorization: Bearer YOUR_API_KEY\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"model\": \"rebus-1\",\n    \"messages\": [\n      {\"role\": \"user\", \"content\": \"Hello, RebusAI!\"}\n    ]\n  }'"
          },
          {
            type: "heading",
            content: "Next Steps"
          },
          {
            type: "text",
            content: "Congratulations! You've successfully made your first API call. Now you can explore our documentation to learn about advanced features, rate limits, and best practices."
          }
        ],
        tableOfContents: [
          { id: "prerequisites", title: "Prerequisites" },
          { id: "step-1", title: "Step 1: Create Your Account" },
          { id: "step-2", title: "Step 2: Get Your API Key" },
          { id: "step-3", title: "Step 3: Make Your First API Call" },
          { id: "next-steps", title: "Next Steps" }
        ]
      },
      "api-authentication": {
        id: "api-authentication",
        title: "API Authentication Guide",
        category: "API Documentation",
        difficulty: "Intermediate",
        readTime: "8 min read",
        views: "8.2k views",
        lastUpdated: "1 day ago",
        author: "Technical Team",
        content: [
          {
            type: "text",
            content: "This comprehensive guide covers all authentication methods available in the RebusAI API."
          },
          {
            type: "heading",
            content: "Authentication Methods"
          },
          {
            type: "text",
            content: "RebusAI supports multiple authentication methods to suit different use cases and security requirements."
          }
        ],
        tableOfContents: [
          { id: "auth-methods", title: "Authentication Methods" },
          { id: "api-keys", title: "API Keys" },
          { id: "oauth", title: "OAuth 2.0" },
          { id: "jwt", title: "JWT Tokens" }
        ]
      }
    }

    return articles[articleId] || null
  }

  const getRelatedArticles = (category: string) => {
    return [
      {
        id: "api-authentication",
        title: "API Authentication Guide",
        category: "API Documentation",
        readTime: "8 min read"
      },
      {
        id: "troubleshooting-errors",
        title: "Common API Errors",
        category: "Troubleshooting",
        readTime: "6 min read"
      },
      {
        id: "rate-limiting",
        title: "Understanding Rate Limits",
        category: "Best Practices",
        readTime: "4 min read"
      }
    ]
  }

  const handleFeedback = (helpful: boolean) => {
    setIsHelpful(helpful)
    // In a real app, you'd send this to your analytics
    console.log(`Article marked as ${helpful ? 'helpful' : 'not helpful'}`)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: `Check out this helpful article: ${article.title}`,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  const renderContent = (content: any) => {
    switch (content.type) {
      case 'heading':
        return <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{content.content}</h2>
      case 'text':
        return <p className="text-gray-700 mb-4 leading-relaxed">{content.content}</p>
      case 'list':
        return (
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
            {content.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )
      case 'code':
        return (
          <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{content.content}</code>
            </pre>
          </div>
        )
      case 'warning':
        return (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-yellow-800">{content.content}</p>
          </div>
        )
      default:
        return null
    }
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
            <p className="text-gray-600">Loading article...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The requested article could not be found.</p>
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
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="bg-gray-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {article.tableOfContents.map((item: any, index: number) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                <Link href="/help" className="hover:text-purple-600">Help Center</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href={`/help/category/${article.category.toLowerCase().replace(' ', '-')}`} className="hover:text-purple-600">
                  {article.category}
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-gray-900">{article.title}</span>
              </nav>

              {/* Article Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge className={getDifficultyColor(article.difficulty)}>
                    {article.difficulty}
                  </Badge>
                  <Badge variant="secondary">{article.category}</Badge>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <span>By {article.author}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {article.views}
                    </span>
                    <span>•</span>
                    <span>Updated {article.lastUpdated}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleShare}
                    className="flex items-center"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none mb-12">
                {article.content.map((content: any, index: number) => (
                  <div key={index}>
                    {renderContent(content)}
                  </div>
                ))}
              </div>

              {/* Feedback Section */}
              <Card className="bg-gray-50 border-0 shadow-lg mb-8">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Was this article helpful?
                  </h3>
                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      variant={isHelpful === true ? "default" : "outline"}
                      onClick={() => handleFeedback(true)}
                      className={isHelpful === true ? "bg-green-500 hover:bg-green-600" : ""}
                    >
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Yes
                    </Button>
                    <Button
                      variant={isHelpful === false ? "default" : "outline"}
                      onClick={() => handleFeedback(false)}
                      className={isHelpful === false ? "bg-red-500 hover:bg-red-600" : ""}
                    >
                      <ThumbsDown className="w-4 h-4 mr-2" />
                      No
                    </Button>
                  </div>
                  {isHelpful !== null && (
                    <p className="text-sm text-gray-600 mt-4">
                      Thank you for your feedback!
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Related Articles */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedArticles.map((relatedArticle, index) => (
                    <Card
                      key={relatedArticle.id}
                      className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      onClick={() => router.push(`/help/article/${relatedArticle.id}`)}
                    >
                      <CardContent className="p-4">
                        <Badge variant="secondary" className="mb-3">
                          {relatedArticle.category}
                        </Badge>
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                          {relatedArticle.title}
                        </h4>
                        <p className="text-sm text-gray-500">{relatedArticle.readTime}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
