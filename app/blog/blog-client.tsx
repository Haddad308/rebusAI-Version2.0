"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, TrendingUp, Lightbulb, Rocket, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState, useEffect } from "react"
import { BlogPost, Category, searchPosts } from "@/lib/blog"

interface BlogClientComponentProps {
  initialPosts: BlogPost[]
  initialCategories: Category[]
  initialFeaturedPosts: BlogPost[]
}

export function BlogClientComponent({ 
  initialPosts, 
  initialCategories, 
  initialFeaturedPosts 
}: BlogClientComponentProps) {
  const [posts] = useState<BlogPost[]>(initialPosts)
  const [featuredPosts] = useState<BlogPost[]>(initialFeaturedPosts)
  const [categories] = useState<Category[]>(initialCategories)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([])
  const [postsToShow, setPostsToShow] = useState(6)

  useEffect(() => {
    setDisplayedPosts(posts.slice(0, postsToShow))
  }, [posts, postsToShow])

  useEffect(() => {
    let filteredPosts = posts

    // Filter by search query
    if (searchQuery) {
      filteredPosts = searchPosts(searchQuery)
    }

    // Filter by category
    if (selectedCategory) {
      filteredPosts = filteredPosts.filter(
        (post) => post.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    setDisplayedPosts(filteredPosts.slice(0, postsToShow))
  }, [searchQuery, selectedCategory, posts, postsToShow])

  const loadMore = () => {
    setPostsToShow(prev => prev + 6)
  }

  const categoryIcons = [TrendingUp, Lightbulb, Rocket, Calendar, User, ArrowRight]
  const featuredPost = featuredPosts[0] || posts[0]

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

      {/* Search and Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="mb-2"
            >
              All Posts
            </Button>
            {categories.map((category, index) => {
              const IconComponent = categoryIcons[index % categoryIcons.length]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Button
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                    className={selectedCategory === category.name ? `bg-gradient-to-r ${category.color} text-white border-0` : ""}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.name}
                    <Badge variant="secondary" className="ml-2">
                      {category.count}
                    </Badge>
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && !searchQuery && !selectedCategory && (
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
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <span>{featuredPost.readTime}</span>
                      </div>

                      <Link href={`/blog/${featuredPost.slug}`}>
                        <Button
                          className={`bg-gradient-to-r ${featuredPost.gradient} hover:opacity-90 text-white font-semibold w-fit`}
                        >
                          Read Full Article
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

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
              {searchQuery ? `Search Results for "${searchQuery}"` : selectedCategory ? `${selectedCategory} Articles` : "Latest Articles"}
            </h2>
            <p className="text-gray-600">
              {searchQuery || selectedCategory ? `Found ${displayedPosts.length} articles` : "Discover the latest insights and innovations in AI technology"}
            </p>
          </motion.div>

          {displayedPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found. Try adjusting your search or category filter.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post, index) => (
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

              {displayedPosts.length < posts.length && !searchQuery && !selectedCategory && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mt-12"
                >
                  <Button
                    size="lg"
                    onClick={loadMore}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-4"
                  >
                    Load More Articles
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              )}
            </>
          )}
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
