import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { BlogPost, Category } from './blog'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPostsServer(): BlogPost[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        const readTimeStats = readingTime(content)

        return {
          slug,
          title: data.title || '',
          excerpt: data.excerpt || '',
          content,
          author: data.author || '',
          date: data.date || '',
          readTime: readTimeStats.text,
          category: data.category || '',
          image: data.image || '/placeholder.svg',
          gradient: data.gradient || 'from-purple-500 to-blue-500',
          featured: data.featured || false,
          tags: data.tags || [],
        }
      })

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

export function getPostBySlugServer(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const readTimeStats = readingTime(content)

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content,
      author: data.author || '',
      date: data.date || '',
      readTime: readTimeStats.text,
      category: data.category || '',
      image: data.image || '/placeholder.svg',
      gradient: data.gradient || 'from-purple-500 to-blue-500',
      featured: data.featured || false,
      tags: data.tags || [],
    }
  } catch (error) {
    console.error('Error reading post:', error)
    return null
  }
}

export function getPostsByCategoryServer(category: string): BlogPost[] {
  const allPosts = getAllPostsServer()
  return allPosts.filter((post) => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getFeaturedPostsServer(): BlogPost[] {
  const allPosts = getAllPostsServer()
  return allPosts.filter((post) => post.featured)
}

export function getCategoriesServer(): Category[] {
  const allPosts = getAllPostsServer()
  const categoryMap = new Map()

  allPosts.forEach((post) => {
    const category = post.category
    if (categoryMap.has(category)) {
      categoryMap.set(category, categoryMap.get(category) + 1)
    } else {
      categoryMap.set(category, 1)
    }
  })

  const gradients = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-teal-500',
    'from-yellow-500 to-orange-500',
    'from-red-500 to-pink-500',
    'from-indigo-500 to-purple-500',
  ]

  return Array.from(categoryMap.entries()).map(([name, count], index) => ({
    name,
    count,
    color: gradients[index % gradients.length],
  }))
}

export function searchPostsServer(query: string): BlogPost[] {
  const allPosts = getAllPostsServer()
  const lowercaseQuery = query.toLowerCase()

  return allPosts.filter((post) =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}
