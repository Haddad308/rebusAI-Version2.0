"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Shield, ArrowRight, BarChart3, Globe, Lock, Cpu, Database, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: "Advanced Neural Networks",
      description:
        "State-of-the-art deep learning models that understand context, nuance, and deliver human-like intelligence.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Zap,
      title: "Lightning-Fast Processing",
      description: "Optimized infrastructure delivering sub-second response times for real-time AI interactions.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption, compliance certifications, and privacy-first architecture.",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights and reporting with customizable dashboards and real-time metrics.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Worldwide infrastructure with edge computing for optimal performance across all regions.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: Cpu,
      title: "Custom AI Models",
      description: "Tailored machine learning models trained specifically for your industry and use cases.",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      image: "/placeholder.svg?height=300&width=400",
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
              <span className="text-gray-600 font-medium tracking-wide">POWERFUL CAPABILITIES</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                Features
              </span>
              <br />
              That Amaze ✨
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the cutting-edge AI capabilities that make RebusAI the choice of industry leaders worldwide.
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

      {/* Technical Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Technical Excellence
            </h2>
            <p className="text-xl text-gray-600">Built on cutting-edge infrastructure for maximum performance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "99.99% Uptime",
                description: "Enterprise-grade reliability with redundant systems",
                metric: "99.99%",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Cloud,
                title: "Global CDN",
                description: "Lightning-fast delivery across 150+ edge locations",
                metric: "150+",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Lock,
                title: "SOC 2 Compliant",
                description: "Highest security standards and compliance certifications",
                metric: "SOC 2",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience These Features Today! 🚀</h2>
            <p className="text-xl mb-8 opacity-90">
              Start your free trial and see why thousands of companies choose RebusAI
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
