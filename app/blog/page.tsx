// import { BlogClientComponent } from './blog-client'
import { getAllPostsServer, getCategoriesServer, getFeaturedPostsServer } from '@/lib/blog-server'
import { BlogClientComponent } from './blog-client'

export default function BlogPage() {
  const posts = getAllPostsServer()
  const categories = getCategoriesServer()
  const featuredPosts = getFeaturedPostsServer()

  return (
    <BlogClientComponent 
      initialPosts={posts}
      initialCategories={categories}
      initialFeaturedPosts={featuredPosts}
    />
  )
}
