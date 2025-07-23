"use client"

import { motion } from "framer-motion"
import { Search, Book, ArrowLeft, Clock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"

export default function HelpSearchPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])

  useEffect(() => {
    const query = searchParams.get('q')
    if (query) {
      setSearchQuery(query)
      performSearch(query)
    }
  }, [searchParams])

  const performSearch = async (query: string) => {
    setIsSearching(true)
    
    // Simulate API call
    setTimeout(() => {
      const mockResults = [
        {
          id: "getting-started-guide",
          title: "How to Get Started with RebusAI",
          excerpt: "Learn the basics of setting up your RebusAI account and making your first API call...",
          category: "Getting Started",
          readTime: "5 min read",
          views: "12.5k views",
          relevance: 95,
        },
        {
          id: "api-authentication",
          title: "API Authentication Guide",
          excerpt: "Complete guide to authenticating with the RebusAI API using API keys and OAuth...",
          category: "API Documentation",
          readTime: "8 min read",
          views: "8.2k views",
          relevance: 87,
        },
        {
          id: "troubleshooting-errors",
          title: "Common API Errors and Solutions",
          excerpt: "Troubleshoot the most common errors when working with the RebusAI API...",
          category: "Troubleshooting",
          readTime: "6 min read",
          views: "9.1k views",
          relevance: 78,
        },
        {
          id: "rate-limiting",
          title: "Understanding Rate Limits",
          excerpt: "Learn about API rate limits and how to optimize your requests...",
          category: "Best Practices",
          readTime: "4 min read",
          views: "5.3k views",
          relevance: 72,
        },
      ].filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.excerpt.toLowerCase().includes(query.toLowerCase())
      )
      
      setSearchResults(mockResults)
      setIsSearching(false)
    }, 1000)
  }

  const handleSearch = () => {
    if (!searchQuery.trim()) return
    router.push(`/help/search?q=${encodeURIComponent(searchQuery)}`)
    performSearch(searchQuery)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
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
            
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Search Results
            </h1>
            
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search for help articles, guides, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-12 pr-4 py-4 text-lg bg-white border-2 border-gray-200 focus:border-purple-500 rounded-2xl shadow-lg"
              />
              <Button 
                onClick={handleSearch}
                disabled={isSearching || !searchQuery.trim()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-xl"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Results */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSearching ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Searching...</p>
            </div>
          ) : (
            <>
              {searchResults.length > 0 ? (
                <>
                  <p className="text-gray-600 mb-6">
                    Found {searchResults.length} results for "{searchParams.get('q')}"
                  </p>
                  
                  <div className="space-y-6">
                    {searchResults.map((result, index) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                                {result.category}
                              </Badge>
                              <div className="text-sm text-green-600 font-semibold">
                                {result.relevance}% match
                              </div>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                              {result.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-4 line-clamp-2">
                              {result.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center space-x-4">
                                <span className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {result.readTime}
                                </span>
                                <span className="flex items-center">
                                  <Eye className="w-4 h-4 mr-1" />
                                  {result.views}
                                </span>
                              </div>
                              <Button 
                                variant="link" 
                                className="text-purple-600 hover:text-purple-700 p-0"
                                onClick={() => router.push(`/help/article/${result.id}`)}
                              >
                                Read Article →
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </>
              ) : searchParams.get('q') ? (
                <div className="text-center py-12">
                  <Book className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any articles matching "{searchParams.get('q')}"
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>Try searching for:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Different keywords or phrases</li>
                      <li>More general terms</li>
                      <li>Check spelling and try again</li>
                    </ul>
                  </div>
                </div>
              ) : null}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
