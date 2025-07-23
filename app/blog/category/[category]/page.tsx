"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { getPostsByCategory, getAllPosts, BlogPost } from "@/lib/blog"

export default function CategoryPage() {
  const params = useParams()
  const category = decodeURIComponent(params.category as string)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get all posts and filter by category
    const allPosts = getAllPosts()
    const categoryPosts = allPosts.filter(post => 
      post.category.toLowerCase() === category.toLowerCase()
    )
    setPosts(categoryPosts)
    setLoading(false)
  }, [category])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 pt-20">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                {category}
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {posts.length} article{posts.length !== 1 ? 's' : ''} in this category
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-6">No articles found in this category.</p>
              <Link href="/blog">
                <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  Explore All Articles
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
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
                        <Badge
                          className={`absolute top-4 left-4 bg-gradient-to-r ${post.gradient} text-white text-xs`}
                        >
                          {post.category}
                        </Badge>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                          <Link href={`/blog/${post.slug}`}>
                            <Button
                              size="sm"
                              className={`bg-gradient-to-r ${post.gradient} text-white`}
                            >
                              Read More
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
