"use client"

import { motion } from "framer-motion"
import { Gift, Star, Clock, ArrowRight, Check, Zap, Crown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function OfferPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block text-6xl mb-6"
            >
              🎉
            </motion.div>

            <div className="flex items-center justify-center mb-6">
              <div className="w-1 h-12 bg-gradient-to-b from-yellow-500 to-orange-500 mr-4"></div>
              <span className="text-gray-600 font-medium tracking-wide">LIMITED TIME OFFER</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Black Friday
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Sale! 🔥
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get up to{" "}
              <span className="font-bold text-2xl bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                70% OFF
              </span>{" "}
              on all RebusAI plans. Transform your business with AI at an unbeatable price!
            </p>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-6 max-w-md mx-auto mb-8 shadow-2xl"
            >
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-semibold">Offer Ends In:</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                {[
                  { value: "02", label: "Days" },
                  { value: "14", label: "Hours" },
                  { value: "35", label: "Mins" },
                  { value: "42", label: "Secs" },
                ].map((time, index) => (
                  <div key={index} className="bg-white/20 rounded-lg p-2">
                    <div className="text-2xl font-bold">{time.value}</div>
                    <div className="text-xs opacity-80">{time.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-12 py-6 text-xl shadow-2xl animate-pulse"
            >
              Claim Your Discount Now! 🎁
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Exclusive Black Friday Deals
            </h2>
            <p className="text-xl text-gray-600">Choose your perfect AI solution at incredible prices</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter Pro",
                originalPrice: "$99",
                salePrice: "$29",
                discount: "70% OFF",
                period: "/month",
                description: "Perfect for small businesses getting started with AI",
                features: [
                  "50,000 AI queries/month",
                  "Advanced analytics dashboard",
                  "Priority email support",
                  "API access & integrations",
                  "Custom AI training",
                ],
                popular: false,
                color: "from-green-500 to-teal-500",
                bgColor: "from-green-50 to-teal-50",
                icon: Zap,
              },
              {
                name: "Business Elite",
                originalPrice: "$299",
                salePrice: "$99",
                discount: "67% OFF",
                period: "/month",
                description: "Ideal for growing companies scaling with AI",
                features: [
                  "500,000 AI queries/month",
                  "Advanced analytics & reporting",
                  "24/7 priority support",
                  "Custom integrations",
                  "Team collaboration tools",
                  "White-label solutions",
                ],
                popular: true,
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
                icon: Crown,
              },
              {
                name: "Enterprise Max",
                originalPrice: "$999",
                salePrice: "$299",
                discount: "70% OFF",
                period: "/month",
                description: "For large organizations with complex AI needs",
                features: [
                  "Unlimited AI queries",
                  "Custom AI model development",
                  "Dedicated account manager",
                  "On-premise deployment",
                  "SLA guarantee",
                  "Advanced security features",
                  "Custom training & onboarding",
                ],
                popular: false,
                color: "from-blue-500 to-indigo-500",
                bgColor: "from-blue-50 to-indigo-50",
                icon: Sparkles,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                      🔥 MOST POPULAR
                    </span>
                  </div>
                )}

                <div
                  className={`absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold transform rotate-12 shadow-lg z-10`}
                >
                  {plan.discount}
                </div>

                <Card
                  className={`bg-gradient-to-br ${plan.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full ${plan.popular ? "ring-4 ring-yellow-400 ring-opacity-50" : ""}`}
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg mx-auto`}
                    >
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                          <span
                            className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                          >
                            {plan.salePrice}
                          </span>
                          <span className="text-gray-500">{plan.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold shadow-lg"
                          : `bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold`
                      } py-3`}
                    >
                      {plan.popular ? "🎉 Get Best Deal" : "Claim Offer"}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Exclusive Black Friday Bonuses! 🎁
            </h2>
            <p className="text-xl text-gray-600">Get these amazing extras absolutely FREE with any plan</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Gift,
                title: "Free AI Consultation",
                value: "$500 Value",
                description: "1-hour strategy session with our AI experts",
                color: "from-pink-500 to-rose-500",
              },
              {
                icon: Star,
                title: "Premium Templates",
                value: "$200 Value",
                description: "50+ ready-to-use AI workflow templates",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: Zap,
                title: "Priority Onboarding",
                value: "$300 Value",
                description: "Fast-track setup and personalized training",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Crown,
                title: "VIP Support",
                value: "$400 Value",
                description: "3 months of premium support included",
                color: "from-purple-500 to-indigo-500",
              },
            ].map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${bonus.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <bonus.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-lg font-bold mb-1 bg-gradient-to-r ${bonus.color} bg-clip-text text-transparent`}>
                  {bonus.value}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{bonus.title}</h3>
                <p className="text-gray-600 text-sm">{bonus.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers who transformed their business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                content:
                  "RebusAI's Black Friday deal was incredible! We saved 70% and got amazing results within the first month.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&auto=format",
                savings: "Saved $2,400/year",
              },
              {
                name: "Michael Chen",
                role: "CTO, InnovateNow",
                content:
                  "The bonus features alone were worth more than what we paid. Best investment we've made this year!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
                savings: "Saved $7,200/year",
              },
              {
                name: "Emily Rodriguez",
                role: "Founder, AI Solutions",
                content:
                  "Couldn't believe the discount was real until I saw the results. Our productivity increased by 300%!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=80&h=80&fit=crop&auto=format",
                savings: "Saved $12,000/year",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-500 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block">
                        💰 {testimonial.savings}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-6xl mb-6 animate-bounce">⚡</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Don't Miss Out!
              <br />
              <span className="text-yellow-200">Last Chance! ⏰</span>
            </h2>
            <p className="text-xl mb-8 opacity-90">
              This incredible Black Friday offer expires in hours. Join 50,000+ businesses already using RebusAI!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-12 py-6 text-xl shadow-2xl"
              >
                🎉 Claim 70% Discount Now!
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
              >
                View All Plans
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              ✅ 30-day money-back guarantee • ✅ No setup fees • ✅ Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
