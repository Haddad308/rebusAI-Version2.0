"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Plus, Save, Eye, Edit, Trash2 } from "lucide-react"

export default function BlogAdminPage() {
  const [isCreating, setIsCreating] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    author: "",
    category: "",
    tags: "",
    content: "",
    image: "",
    gradient: "from-purple-500 to-blue-500",
    featured: false
  })

  const samplePosts = [
    {
      slug: "future-of-ai-2024",
      title: "The Future of AI: 10 Predictions for 2024",
      author: "Dr. Sarah Chen",
      category: "AI Trends",
      date: "2023-12-15",
      featured: true
    },
    {
      slug: "ai-revolutionizing-healthcare",
      title: "How AI is Revolutionizing Healthcare",
      author: "Dr. Michael Rodriguez",
      category: "Healthcare",
      date: "2023-12-12",
      featured: false
    }
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim()
  }

  const handleSave = () => {
    const slug = generateSlug(formData.title)
    const currentDate = new Date().toISOString().split('T')[0]
    
    const frontmatter = `---
title: "${formData.title}"
excerpt: "${formData.excerpt}"
author: "${formData.author}"
date: "${currentDate}"
category: "${formData.category}"
image: "${formData.image || '/placeholder.svg?height=300&width=400'}"
gradient: "${formData.gradient}"
${formData.featured ? 'featured: true' : ''}
tags: [${formData.tags.split(',').map(tag => `"${tag.trim()}"`).join(', ')}]
---

${formData.content}`

    // In a real app, you would save this to the file system or database
    console.log('Would save to:', `content/blog/${slug}.mdx`)
    console.log('Content:', frontmatter)
    
    alert(`Blog post would be saved as: ${slug}.mdx`)
    setIsCreating(false)
    setFormData({
      title: "",
      excerpt: "",
      author: "",
      category: "",
      tags: "",
      content: "",
      image: "",
      gradient: "from-purple-500 to-blue-500",
      featured: false
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Blog Administration
          </h1>
          <p className="text-gray-600">Manage your blog posts and content</p>
        </div>

        {/* Create New Post Button */}
        <div className="mb-8">
          <Button
            onClick={() => setIsCreating(!isCreating)}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white"
          >
            <Plus className="mr-2 w-4 h-4" />
            {isCreating ? "Cancel" : "Create New Post"}
          </Button>
        </div>

        {/* Create/Edit Form */}
        {isCreating && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Create New Blog Post</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <Input
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Enter post title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Author</label>
                    <Input
                      value={formData.author}
                      onChange={(e) => handleInputChange("author", e.target.value)}
                      placeholder="Author name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Excerpt</label>
                  <Textarea
                    value={formData.excerpt}
                    onChange={(e) => handleInputChange("excerpt", e.target.value)}
                    placeholder="Brief description of the post"
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <Input
                      value={formData.category}
                      onChange={(e) => handleInputChange("category", e.target.value)}
                      placeholder="e.g., AI Trends"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
                    <Input
                      value={formData.tags}
                      onChange={(e) => handleInputChange("tags", e.target.value)}
                      placeholder="AI, Technology, Innovation"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Gradient</label>
                    <select
                      value={formData.gradient}
                      onChange={(e) => handleInputChange("gradient", e.target.value)}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="from-purple-500 to-blue-500">Purple to Blue</option>
                      <option value="from-green-500 to-teal-500">Green to Teal</option>
                      <option value="from-pink-500 to-purple-500">Pink to Purple</option>
                      <option value="from-yellow-500 to-orange-500">Yellow to Orange</option>
                      <option value="from-cyan-500 to-blue-500">Cyan to Blue</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Image URL (optional)</label>
                  <Input
                    value={formData.image}
                    onChange={(e) => handleInputChange("image", e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => handleInputChange("featured", e.target.checked)}
                    className="rounded"
                  />
                  <label htmlFor="featured" className="text-sm font-medium">Featured Post</label>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Content (Markdown)</label>
                  <Textarea
                    value={formData.content}
                    onChange={(e) => handleInputChange("content", e.target.value)}
                    placeholder="Write your blog post content in Markdown..."
                    rows={12}
                    className="font-mono text-sm"
                  />
                </div>

                <div className="flex space-x-4">
                  <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white">
                    <Save className="mr-2 w-4 h-4" />
                    Save Post
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => alert("Preview functionality would open a preview window")}
                  >
                    <Eye className="mr-2 w-4 h-4" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Existing Posts */}
        <Card>
          <CardHeader>
            <CardTitle>Existing Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {samplePosts.map((post, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold">{post.title}</h3>
                      {post.featured && (
                        <Badge className="bg-yellow-100 text-yellow-800">Featured</Badge>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      By {post.author} • {post.category} • {post.date}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>How to Add Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                <strong>Option 1 - Using this interface:</strong> Fill out the form above and click "Save Post". 
                The content will be logged to the console with the proper frontmatter format.
              </p>
              <p>
                <strong>Option 2 - Manual creation:</strong> Create `.mdx` files in the `content/blog/` directory 
                with the following frontmatter structure:
              </p>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`---
title: "Your Post Title"
excerpt: "Brief description"
author: "Author Name"
date: "2023-12-15"
category: "Category Name"
image: "/path/to/image.jpg"
gradient: "from-purple-500 to-blue-500"
featured: true
tags: ["tag1", "tag2", "tag3"]
---

# Your Post Title

Your markdown content goes here...`}
              </pre>
              <p>
                <strong>Supported features:</strong> Markdown formatting, code blocks, images, links, 
                lists, blockquotes, and all standard MDX components.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
