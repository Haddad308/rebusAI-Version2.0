"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight, Zap, Crown, Sparkles, Shield, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams getting started with AI",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "10,000 AI queries/month",
        "Basic analytics dashboard",
        "Email support",
        "API access",
        "5 team members",
        "Basic integrations",
      ],
      popular: false,
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
      icon: Zap,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses scaling with AI",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "100,000 AI queries/month",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom integrations",
        "25 team members",
        "Advanced API features",
        "Custom AI training",
        "White-label options",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      icon: Crown,
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex AI needs",
      monthlyPrice: 299,
      annualPrice: 2990,
      features: [
        "Unlimited AI queries",
        "Custom AI model development",
        "Dedicated account manager",
        "On-premise deployment",
        "Unlimited team members",
        "SLA guarantee",
        "Advanced security features",
        "Custom training & onboarding",
        "24/7 phone support",
      ],
      popular: false,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      icon: Sparkles,
    },
  ]

  const addOns = [
    {
      name: "Extra Queries",
      description: "Additional AI queries beyond your plan limit",
      price: "$0.001 per query",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Premium Support",
      description: "24/7 phone and chat support with 1-hour response time",
      price: "$99/month",
      icon: Shield,
      color: "from-green-500 to-teal-500",
    },
    {
      name: "Global CDN",
      description: "Enhanced performance with worldwide edge locations",
      price: "$49/month",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
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
              <span className="text-gray-600 font-medium tracking-wide">TRANSPARENT PRICING</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                Simple
              </span>
              <br />
              Pricing Plans 💰
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include our core AI features with no hidden fees.
            </p>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center space-x-4 mb-12"
            >
              <span className={`font-medium ${!isAnnual ? "text-purple-600" : "text-gray-500"}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? "bg-purple-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`font-medium ${isAnnual ? "text-purple-600" : "text-gray-500"}`}>
                Annual
                <span className="ml-2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  Save 20%
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
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
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                <Card
                  className={`bg-gradient-to-br ${plan.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full ${plan.popular ? "ring-4 ring-purple-400 ring-opacity-50" : ""}`}
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
                        <span
                          className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                        >
                          ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                        </span>
                        <span className="text-gray-500 ml-1">/month</span>
                        {isAnnual && (
                          <div className="text-sm text-green-600 font-semibold mt-1">
                            Save ${plan.monthlyPrice * 12 - plan.annualPrice}/year
                          </div>
                        )}
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
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold shadow-lg"
                          : `bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold`
                      } py-3`}
                    >
                      {plan.popular ? "🚀 Get Started" : "Choose Plan"}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Optional Add-ons
            </h2>
            <p className="text-xl text-gray-600">Enhance your plan with these powerful extras</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${addon.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <addon.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{addon.name}</h3>
                    <p className="text-gray-600 mb-4">{addon.description}</p>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${addon.color} bg-clip-text text-transparent`}>
                      {addon.price}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan anytime?",
                answer:
                  "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly.",
              },
              {
                question: "What happens if I exceed my query limit?",
                answer:
                  "Don't worry! We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional queries at $0.001 per query.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "We offer a 30-day money-back guarantee for all plans. If you're not satisfied, we'll refund your payment in full, no questions asked.",
              },
              {
                question: "Is there a setup fee?",
                answer:
                  "No setup fees, ever! All our plans include free onboarding and setup assistance to get you started quickly.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business? 🚀</h2>
            <p className="text-xl mb-8 opacity-90">Start your free 14-day trial today. No credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">✅ 14-day free trial • ✅ No setup fees • ✅ Cancel anytime</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
