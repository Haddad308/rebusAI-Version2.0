"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowLeft, Share2, Twitter, Facebook, Linkedin, Tags } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { BlogPost, getPostBySlug, getAllPosts } from "@/lib/blog"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const postData = getPostBySlug(slug)
    if (postData) {
      setPost(postData)
      
      // Get related posts (same category, excluding current post)
      const allPosts = getAllPosts()
      const related = allPosts
        .filter(p => p.category === postData.category && p.slug !== slug)
        .slice(0, 3)
      setRelatedPosts(related)
    }
    setLoading(false)
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-8"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className={`bg-gradient-to-r ${post.gradient} text-white mb-4`}>
              {post.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <span>{post.readTime}</span>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-2 mb-6">
                <Tags className="w-4 h-4 text-gray-500" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {/* Share buttons */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 flex items-center">
                <Share2 className="w-4 h-4 mr-2" />
                Share:
              </span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`, '_blank')}
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-tr ${post.gradient} opacity-20`}></div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              This is a demo blog post. In a full implementation, this would render the complete MDX content
              with rich formatting, images, code blocks, and interactive components.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The blog system is designed to support full markdown/MDX content with:
            </p>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Rich text formatting</li>
              <li>Code syntax highlighting</li>
              <li>Embedded images and media</li>
              <li>Interactive React components</li>
              <li>Custom styling and layouts</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              To see the full content, check the MDX files in the content/blog directory.
            </p>
          </div>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${relatedPost.gradient} opacity-20`}></div>
                      <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${relatedPost.gradient} text-white text-xs`}>
                        {relatedPost.category}
                      </Badge>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${relatedPost.gradient} text-white w-full`}
                        >
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
