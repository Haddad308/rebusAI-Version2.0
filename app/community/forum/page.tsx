"use client"

import { motion } from "framer-motion"
import { MessageCircle, Users, TrendingUp, Clock, Pin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function CommunityForumPage() {
  const forumStats = {
    totalPosts: "12,450",
    activeUsers: "3,240",
    categories: 8,
    newPostsToday: 127
  }

  const categories = [
    {
      name: "General Discussion",
      description: "General topics about RebusAI",
      posts: 2450,
      lastActivity: "2 min ago",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "API Help",
      description: "Get help with API integration",
      posts: 1820,
      lastActivity: "5 min ago",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Feature Requests",
      description: "Suggest new features",
      posts: 980,
      lastActivity: "12 min ago",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Bug Reports",
      description: "Report issues and bugs",
      posts: 645,
      lastActivity: "18 min ago",
      color: "from-orange-500 to-red-500"
    }
  ]

  const recentPosts = [
    {
      title: "How to optimize API response times?",
      author: "DevMaster2024",
      category: "API Help",
      replies: 12,
      lastActivity: "3 min ago",
      isPinned: false
    },
    {
      title: "Welcome to the RebusAI Community!",
      author: "RebusAI Team",
      category: "General Discussion",
      replies: 45,
      lastActivity: "1 hour ago",
      isPinned: true
    },
    {
      title: "Rate limiting best practices",
      author: "APIExpert",
      category: "API Help",
      replies: 8,
      lastActivity: "2 hours ago",
      isPinned: false
    },
    {
      title: "Feature Request: Bulk API operations",
      author: "PowerUser123",
      category: "Feature Requests",
      replies: 23,
      lastActivity: "4 hours ago",
      isPinned: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 pt-20">
      {/* Header */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/help" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Help Center
            </Link>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Community Forum
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect with fellow developers, share knowledge, and get help from the community
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{forumStats.totalPosts}</div>
                  <div className="text-sm text-gray-600">Total Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{forumStats.activeUsers}</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{forumStats.categories}</div>
                  <div className="text-sm text-gray-600">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{forumStats.newPostsToday}</div>
                  <div className="text-sm text-gray-600">Posts Today</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Categories */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                New Post
              </Button>
            </div>
            
            <div className="space-y-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="group cursor-pointer"
                >
                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <MessageCircle className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                              {category.name}
                            </h3>
                            <p className="text-gray-600">{category.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-gray-900">{category.posts}</div>
                          <div className="text-sm text-gray-500">posts</div>
                          <div className="text-xs text-green-600 mt-1">{category.lastActivity}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Posts</h2>
            
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group cursor-pointer"
                >
                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        {post.isPinned && (
                          <Pin className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors text-sm leading-tight mb-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>by {post.author}</span>
                            <span className="flex items-center">
                              <MessageCircle className="w-3 h-3 mr-1" />
                              {post.replies}
                            </span>
                          </div>
                          <Badge variant="secondary" className="mt-2 text-xs">
                            {post.category}
                          </Badge>
                          <div className="flex items-center text-xs text-gray-500 mt-2">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.lastActivity}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Coming Soon Notice */}
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-lg mt-8">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Full Forum Coming Soon!</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We're building a comprehensive community forum. Join our Discord for now!
                </p>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                  onClick={() => window.open('https://discord.gg/rebusai', '_blank')}
                >
                  Join Discord
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
