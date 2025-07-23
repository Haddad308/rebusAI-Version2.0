"use client"

import { motion } from "framer-motion"
import { 
  GraduationCap, 
  Users, 
  ShoppingCart, 
  ArrowRight, 
  BarChart3, 
  Globe, 
  Mail, 
  Calendar,
  Video,
  Megaphone,
  CreditCard,
  MessageSquare,
  Settings,
  Award
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FeaturesPage() {
  const features = [
    {
      icon: GraduationCap,
      title: "AI Course Builder",
      description:
        "Create engaging courses with AI assistance. Build unlimited courses with multiple content types, quizzes, certifications, and student tracking.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format",
    },
    {
      icon: Users,
      title: "Coaching Platform",
      description: "Streamline your coaching business with intake forms, pre-payment bookings, built-in video conferencing, and calendar integration.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&auto=format",
    },
    {
      icon: ShoppingCart,
      title: "Online Store Builder",
      description: "Create stunning e-commerce stores with drag & drop design, product variants, cross-sell features, and comprehensive analytics.",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format",
    },
    {
      icon: Mail,
      title: "Email Marketing & CRM",
      description: "Professional email campaigns with automation, lead scoring, pipeline management, and real-time analytics.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop&auto=format",
    },
    {
      icon: Globe,
      title: "Website & Funnel Builder",
      description: "Build professional websites and sales funnels with ready-to-use templates, drag & drop editor, and marketing integration.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Create and manage events of any size with ticketing, speaker management, sponsorship sales, and promotion tools.",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop&auto=format",
    },
  ]

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
              <span className="text-gray-600 font-medium tracking-wide">ALL-IN-ONE BUSINESS PLATFORM</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                Monetize
              </span>
              <br />
              Your Knowledge ✨
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Build, Market, and Scale with RebusAI! Create courses, coaching programs, online stores, websites, funnels, memberships, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card
                  className={`bg-gradient-to-br ${feature.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full`}
                >
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                      {/* Content */}
                      <div className="p-8 flex flex-col justify-center">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                        >
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                        <Button
                          className={`bg-gradient-to-r ${feature.color} hover:opacity-90 text-white font-semibold w-fit`}
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>

                      {/* Image */}
                      <div className="relative h-64 md:h-full">
                        <img
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-tr ${feature.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              All the tools you need to get started
            </h2>
            <p className="text-xl text-gray-600">Everything in one place to build, market, and scale your business</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "AI Website Builder", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=100&h=100&fit=crop&auto=format" },
              { icon: Megaphone, title: "AI Funnel Builder", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&auto=format" },
              { icon: GraduationCap, title: "AI Course Builder", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop&auto=format" },
              { icon: BarChart3, title: "Survey Builder", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&auto=format" },
              { icon: ShoppingCart, title: "Online Store", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&auto=format" },
              { icon: Mail, title: "Email Marketing", image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=100&h=100&fit=crop&auto=format" },
              { icon: Settings, title: "Marketing Automation", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&auto=format" },
              { icon: Calendar, title: "Appointments", image: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?w=100&h=100&fit=crop&auto=format" },
              { icon: BarChart3, title: "Advanced Analytics", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&auto=format" },
              { icon: Users, title: "CRM", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=100&h=100&fit=crop&auto=format" },
              { icon: MessageSquare, title: "SMS Marketing", image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=100&h=100&fit=crop&auto=format" },
              { icon: MessageSquare, title: "Blogs & Forums", image: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={tool.image} 
                    alt={tool.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{tool.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Platform Benefits
            </h2>
            <p className="text-xl text-gray-600">All the tools you need to succeed, all in one place</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Easy to Use",
                description: "Drag & drop builders with no technical knowledge required",
                metric: "No-Code",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Settings,
                title: "Integrated Tools",
                description: "Everything connects seamlessly - no need for multiple platforms",
                metric: "12+",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: MessageSquare,
                title: "24/7 Support",
                description: "Get help whenever you need it with our dedicated support team",
                metric: "24/7",
                color: "from-purple-500 to-indigo-500",
              },
            ].map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${spec.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <spec.icon className="w-10 h-10 text-white" />
                </div>
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${spec.color} bg-clip-text text-transparent`}>
                  {spec.metric}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{spec.title}</h3>
                <p className="text-gray-600">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Business? 🚀</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of entrepreneurs who've transformed their knowledge into profitable businesses with RebusAI
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
