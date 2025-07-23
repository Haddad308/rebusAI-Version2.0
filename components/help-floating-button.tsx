"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle, MessageCircle, Phone, Mail, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HelpFloatingButton() {
  const [isOpen, setIsOpen] = useState(false)

  const helpOptions = [
    {
      icon: MessageCircle,
      label: "Live Chat",
      action: () => {
        // Open live chat
        console.log("Opening live chat...")
      },
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Phone,
      label: "Call Support",
      action: () => {
        window.open('tel:+1-555-REBUS-AI', '_self')
      },
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Mail,
      label: "Email Us",
      action: () => {
        window.open('mailto:support@rebusai.com?subject=Support Request', '_blank')
      },
      color: "bg-purple-500 hover:bg-purple-600"
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-4"
          >
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
                  {helpOptions.map((option, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        option.action()
                        setIsOpen(false)
                      }}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-white transition-colors ${option.color}`}
                    >
                      <option.icon className="w-5 h-5" />
                      <span className="font-medium">{option.label}</span>
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-colors ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="help"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <HelpCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
