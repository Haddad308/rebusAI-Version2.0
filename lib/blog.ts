// Types only - no file system operations
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  gradient: string
  featured?: boolean
  tags?: string[]
}

export interface Author {
  name: string
  image: string
  bio: string
}

export interface Category {
  name: string
  count: number
  color: string
}

// Mock data for now - we'll replace this with API calls
export const mockPosts: BlogPost[] = [
  {
    slug: "future-of-ai-2024",
    title: "The Future of AI: 10 Predictions for 2024",
    excerpt: "Explore the groundbreaking AI trends that will reshape industries and transform how we work, live, and innovate in the coming year.",
    content: "",
    author: "Dr. Sarah Chen",
    date: "2023-12-15",
    readTime: "8 min read",
    category: "AI Trends",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format",
    gradient: "from-purple-500 to-pink-500",
    featured: true,
    tags: ["AI", "Trends", "Future", "Technology"]
  },
  {
    slug: "ai-revolutionizing-healthcare",
    title: "How AI is Revolutionizing Healthcare",
    excerpt: "Discover how artificial intelligence is transforming patient care, drug discovery, and medical diagnostics.",
    content: "",
    author: "Dr. Michael Rodriguez",
    date: "2023-12-12",
    readTime: "6 min read",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&auto=format",
    gradient: "from-green-500 to-teal-500",
    tags: ["Healthcare", "AI", "Medical", "Innovation"]
  },
  {
    slug: "building-ethical-ai-systems",
    title: "Building Ethical AI Systems",
    excerpt: "Learn about the principles and practices for developing responsible AI that benefits everyone.",
    content: "",
    author: "Prof. Emily Johnson",
    date: "2023-12-10",
    readTime: "7 min read",
    category: "Ethics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
    gradient: "from-blue-500 to-indigo-500",
    tags: ["Ethics", "AI", "Responsibility", "Governance"]
  },
  {
    slug: "ai-in-finance-opportunities-challenges",
    title: "AI in Finance: Opportunities and Challenges",
    excerpt: "Explore how financial institutions are leveraging AI for fraud detection, trading, and customer service.",
    content: "",
    author: "James Wilson",
    date: "2023-12-08",
    readTime: "5 min read",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&auto=format",
    gradient: "from-yellow-500 to-orange-500",
    tags: ["Finance", "AI", "FinTech", "Fraud Detection"]
  },
  {
    slug: "natural-language-processing-breakthroughs",
    title: "Natural Language Processing Breakthroughs",
    excerpt: "The latest advances in NLP that are making AI more conversational and human-like than ever.",
    content: "",
    author: "Dr. Alex Kim",
    date: "2023-12-05",
    readTime: "9 min read",
    category: "NLP",
    image: "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-purple-500 to-pink-500",
    featured: true,
    tags: ["NLP", "Language Models", "Conversational AI", "Technology"]
  },
  {
    slug: "computer-vision-autonomous-vehicles",
    title: "Computer Vision in Autonomous Vehicles",
    excerpt: "How AI-powered vision systems are making self-driving cars safer and more reliable.",
    content: "",
    author: "Maria Garcia",
    date: "2023-12-03",
    readTime: "6 min read",
    category: "Computer Vision",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gradient: "from-cyan-500 to-blue-500",
    tags: ["Computer Vision", "Autonomous Vehicles", "AI", "Safety"]
  },
  {
    slug: "rise-of-generative-ai",
    title: "The Rise of Generative AI",
    excerpt: "Understanding the creative potential and business applications of generative artificial intelligence.",
    content: "",
    author: "David Park",
    date: "2023-12-01",
    readTime: "8 min read",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1676574103772-80f2e94f6b4e?w=400&h=300&fit=crop&auto=format",
    gradient: "from-pink-500 to-purple-500",
    tags: ["Generative AI", "Creativity", "Business", "Innovation"]
  }
]

export const mockCategories: Category[] = [
  { name: "AI Trends", count: 2, color: "from-purple-500 to-pink-500" },
  { name: "Healthcare", count: 1, color: "from-green-500 to-teal-500" },
  { name: "Ethics", count: 1, color: "from-blue-500 to-indigo-500" },
  { name: "Finance", count: 1, color: "from-yellow-500 to-orange-500" },
  { name: "NLP", count: 1, color: "from-purple-500 to-pink-500" },
  { name: "Computer Vision", count: 1, color: "from-cyan-500 to-blue-500" },
  { name: "Generative AI", count: 1, color: "from-pink-500 to-purple-500" }
]

// Client-side utility functions
export function getAllPosts(): BlogPost[] {
  return mockPosts.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  return mockPosts.find(post => post.slug === slug) || null
}

export function getPostsByCategory(category: string): BlogPost[] {
  return mockPosts.filter((post) => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getFeaturedPosts(): BlogPost[] {
  return mockPosts.filter((post) => post.featured)
}

export function getCategories(): Category[] {
  return mockCategories
}

export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase()
  return mockPosts.filter((post) =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}
